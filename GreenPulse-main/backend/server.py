from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class Policy(BaseModel):
    id: int
    name: str
    description: str
    official_link: str
    eligibility: List[str]
    benefits: List[str]
    application_guide: List[str]

class Application(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_details: dict
    selected_scheme: str
    documents: List[str]
    status: str = "Applied"
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ApplicationCreate(BaseModel):
    user_details: dict
    selected_scheme: str
    documents: List[str]

class Dataset(BaseModel):
    id: int
    name: str
    description: str
    source: str

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Mock Data
MOCK_POLICIES = [
    {
        "id": 1,
        "name": "PM Surya Ghar Rooftop Solar",
        "description": "Free solar rooftop installation scheme for 1 crore households. Get up to 40% subsidy on installation costs and reduce electricity bills significantly.",
        "official_link": "https://pmsuryaghar.gov.in/",
        "eligibility": ["Resident of India", "Own a house with a suitable roof", "Valid electricity connection"],
        "benefits": ["Up to 40% subsidy", "Reduced electricity bills", "Environmentally friendly"],
        "application_guide": ["Register on the portal", "Apply for feasibility", "Install solar panels", "Submit installation details for subsidy"]
    },
    {
        "id": 2,
        "name": "National Green Hydrogen Mission",
        "description": "₹19,744 crore mission to make India a global hub for green hydrogen production, targeting 5 MMT annual production by 2030.",
        "official_link": "https://pib.gov.in/",
        "eligibility": ["Industrial entities", "Energy companies", "Research institutions"],
        "benefits": ["Incentives for production", "R&D support", "Infrastructure development"],
        "application_guide": ["Check for RFP/EOI", "Submit project proposal", "Undergo technical evaluation", "Receive sanction for production"]
    }
]

MOCK_DATASETS = [
    {
        "id": 1,
        "name": "Solar Capacity by State (2024-25)",
        "description": "State-wise installed solar power capacity across India including rooftop and ground-mounted installations.",
        "source": "Ministry of New & Renewable Energy"
    },
    {
        "id": 2,
        "name": "Electric Vehicle Adoption Growth",
        "description": "Monthly EV registration data including two-wheelers, three-wheelers, and four-wheelers across all states.",
        "source": "Ministry of Road Transport & Highways"
    },
    {
        "id": 3,
        "name": "Wind & Bio-energy Capacity",
        "description": "Comprehensive data on wind farms, biomass plants, and small hydro projects operational across India.",
        "source": "Ministry of New & Renewable Energy"
    },
    {
        "id": 4,
        "name": "Afforestation & Carbon Sinks",
        "description": "Data on forest cover increase, carbon sequestration rates, and ecological restoration projects under Green India Mission.",
        "source": "Ministry of Environment, Forest & Climate Change"
    }
]

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.get("/policies/{id}", response_model=Policy)
async def get_policy(id: int):
    policy = next((p for p in MOCK_POLICIES if p["id"] == id), None)
    if policy:
        return policy
    raise HTTPException(status_code=404, detail="Policy not found")

@api_router.post("/applications", response_model=Application)
async def create_application(input: ApplicationCreate):
    app_dict = input.model_dump()
    app_obj = Application(**app_dict)
    
    doc = app_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.applications.insert_one(doc)
    return app_obj

@api_router.get("/applications", response_model=List[Application])
async def get_applications():
    applications = await db.applications.find({}, {"_id": 0}).to_list(1000)
    for app in applications:
        if isinstance(app['timestamp'], str):
            app['timestamp'] = datetime.fromisoformat(app['timestamp'])
    return applications

@api_router.get("/datasets", response_model=List[Dataset])
async def get_datasets():
    return MOCK_DATASETS

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()