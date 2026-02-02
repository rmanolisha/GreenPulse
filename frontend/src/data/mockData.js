// Mock data for GreenPulse India

export const policies = [
  {
    id: 1,
    name: "PM Surya Ghar Rooftop Solar",
    description: "Free solar rooftop installation scheme for 1 crore households. Get up to 40% subsidy on installation costs and reduce electricity bills significantly.",
    category: "Renewable Energy",
    officialLink: "https://pmsuryaghar.gov.in/",
    icon: "sun"
  },
  {
    id: 2,
    name: "National Green Hydrogen Mission",
    description: "₹19,744 crore mission to make India a global hub for green hydrogen production, targeting 5 MMT annual production by 2030.",
    category: "Clean Energy",
    officialLink: "https://pib.gov.in/",
    icon: "wind"
  },
  {
    id: 3,
    name: "FAME India - EV Adoption",
    description: "Faster Adoption and Manufacturing of Electric Vehicles scheme with subsidies for EV purchase and charging infrastructure development.",
    category: "Green Mobility",
    officialLink: "https://fame2.heavyindustries.gov.in/",
    icon: "car"
  },
  {
    id: 4,
    name: "GOBARdhan Scheme",
    description: "Galvanizing Organic Bio-Agro Resources scheme converting cattle dung and agricultural waste into biogas, bio-CNG, and organic manure.",
    category: "Agriculture & Biodiversity",
    officialLink: "https://sbm.gov.in/",
    icon: "leaf"
  },
  {
    id: 5,
    name: "Green India Mission",
    description: "Afforestation program targeting 5 million hectares to increase forest cover, enhance ecosystem services, and create carbon sinks.",
    category: "Agriculture & Biodiversity",
    officialLink: "https://moef.gov.in/",
    icon: "trees"
  },
  {
    id: 6,
    name: "Green Credit Programme",
    description: "Market-based mechanism to incentivize voluntary environmental actions through tradeable green credits for plantation and water conservation.",
    category: "Green Finance",
    officialLink: "https://moef.gov.in/",
    icon: "badge-indian-rupee"
  }
];

export const datasets = [
  {
    id: 1,
    title: "Solar Capacity by State (2024-25)",
    description: "State-wise installed solar power capacity across India including rooftop and ground-mounted installations.",
    size: "2.4 MB",
    format: "CSV, JSON",
    source: "Ministry of New & Renewable Energy",
    lastUpdated: "March 2025"
  },
  {
    id: 2,
    title: "Electric Vehicle Adoption Growth",
    description: "Monthly EV registration data including two-wheelers, three-wheelers, and four-wheelers across all states.",
    size: "1.8 MB",
    format: "CSV, Excel",
    source: "Ministry of Road Transport & Highways",
    lastUpdated: "February 2025"
  },
  {
    id: 3,
    title: "Wind & Bio-energy Capacity",
    description: "Comprehensive data on wind farms, biomass plants, and small hydro projects operational across India.",
    size: "3.2 MB",
    format: "CSV, JSON",
    source: "Ministry of New & Renewable Energy",
    lastUpdated: "March 2025"
  },
  {
    id: 4,
    title: "Afforestation & Carbon Sinks",
    description: "Data on forest cover increase, carbon sequestration rates, and ecological restoration projects under Green India Mission.",
    size: "4.1 MB",
    format: "GeoJSON, CSV",
    source: "Ministry of Environment, Forest & Climate Change",
    lastUpdated: "January 2025"
  },
  {
    id: 5,
    title: "Green Hydrogen Production Units",
    description: "Location and capacity data of operational and upcoming green hydrogen production facilities nationwide.",
    size: "890 KB",
    format: "CSV, JSON",
    source: "Ministry of New & Renewable Energy",
    lastUpdated: "March 2025"
  },
  {
    id: 6,
    title: "Carbon Credit Trading Volume",
    description: "Transaction data from India's carbon credit market including prices, volumes, and sectoral distribution.",
    size: "1.5 MB",
    format: "CSV, Excel",
    source: "National Green Tribunal",
    lastUpdated: "February 2025"
  }
];

export const dashboardStats = {
  solarCapacity: {
    value: 82.6,
    unit: "GW",
    change: "+18.5%",
    trend: "up"
  },
  evAdoption: {
    value: 6.8,
    unit: "% of total vehicles",
    change: "+2.3%",
    trend: "up"
  },
  carbonReduction: {
    value: 280,
    unit: "Million Tonnes CO₂",
    change: "+12.7%",
    trend: "up"
  },
  greenHydrogen: {
    value: 0.45,
    unit: "MMT production",
    change: "New",
    trend: "up"
  }
};

export const solarAdoptionData = [
  { month: "Apr '24", capacity: 68.2 },
  { month: "May '24", capacity: 70.5 },
  { month: "Jun '24", capacity: 72.8 },
  { month: "Jul '24", capacity: 74.1 },
  { month: "Aug '24", capacity: 75.9 },
  { month: "Sep '24", capacity: 77.3 },
  { month: "Oct '24", capacity: 78.8 },
  { month: "Nov '24", capacity: 80.2 },
  { month: "Dec '24", capacity: 81.4 },
  { month: "Jan '25", capacity: 82.0 },
  { month: "Feb '25", capacity: 82.3 },
  { month: "Mar '25", capacity: 82.6 }
];

export const evGrowthData = [
  { month: "Apr '24", registrations: 125000 },
  { month: "May '24", registrations: 138000 },
  { month: "Jun '24", registrations: 145000 },
  { month: "Jul '24", registrations: 152000 },
  { month: "Aug '24", registrations: 168000 },
  { month: "Sep '24", registrations: 175000 },
  { month: "Oct '24", registrations: 192000 },
  { month: "Nov '24", registrations: 203000 },
  { month: "Dec '24", registrations: 218000 },
  { month: "Jan '25", registrations: 229000 },
  { month: "Feb '25", registrations: 241000 },
  { month: "Mar '25", registrations: 255000 }
];

export const energyMixData = [
  { source: "Solar", capacity: 82.6, fill: "#f59e0b" },
  { source: "Wind", capacity: 45.2, fill: "#3b82f6" },
  { source: "Hydro", capacity: 52.1, fill: "#06b6d4" },
  { source: "Biomass", capacity: 10.8, fill: "#22c55e" },
  { source: "Others", capacity: 2.3, fill: "#8b5cf6" }
];

export const applicationSteps = [
  {
    step: 1,
    title: "Check Eligibility",
    description: "Verify if you meet the criteria for the selected scheme",
    status: "current"
  },
  {
    step: 2,
    title: "Prepare Documents",
    description: "Gather all required documents and certificates",
    status: "upcoming"
  },
  {
    step: 3,
    title: "Fill Application",
    description: "Complete the online application form with accurate details",
    status: "upcoming"
  },
  {
    step: 4,
    title: "Submit & Track",
    description: "Submit application and track status in real-time",
    status: "upcoming"
  }
];

export const requiredDocuments = [
  "Aadhaar Card (Individual/Business)",
  "PAN Card",
  "Electricity Bill (for rooftop solar schemes)",
  "Property/Land Ownership Documents",
  "Bank Account Details & Cancelled Cheque",
  "GST Registration (for businesses)",
  "Project Technical Proposal (if applicable)",
  "Environmental Clearance (for large projects)"
];

export const features = [
  {
    title: "Renewable Energy",
    description: "Access comprehensive data on solar, wind, and hydro power initiatives across India.",
    icon: "sun"
  },
  {
    title: "Green Mobility",
    description: "Explore EV adoption schemes, charging infrastructure plans, and clean transport policies.",
    icon: "car"
  },
  {
    title: "Agriculture & Biodiversity",
    description: "Discover sustainable farming practices, afforestation programs, and ecosystem conservation efforts.",
    icon: "leaf"
  },
  {
    title: "Green Finance & Carbon Markets",
    description: "Learn about carbon credit trading, green bonds, and sustainable investment opportunities.",
    icon: "trending-up"
  }
];
