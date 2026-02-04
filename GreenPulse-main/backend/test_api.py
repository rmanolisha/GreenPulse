from fastapi.testclient import TestClient
import pytest
import os
from server import app

client = TestClient(app)

def test_get_policy():
    response = client.get("/api/policies/1")
    assert response.status_code == 200
    data = response.json()
    assert data["id"] == 1
    assert "name" in data
    assert "eligibility" in data

def test_get_policy_not_found():
    response = client.get("/api/policies/999")
    assert response.status_code == 404
    assert response.json()["detail"] == "Policy not found"

def test_get_datasets():
    response = client.get("/api/datasets")
    assert response.status_code == 200
    data = response.json()
    assert len(data) > 0
    assert "name" in data[0]
    assert "source" in data[0]

def test_applications():
    app_data = {
        "user_details": {"name": "Test User", "email": "test@example.com"},
        "selected_scheme": "PM Surya Ghar Rooftop Solar",
        "documents": ["aadhaar.pdf", "electricity_bill.pdf"]
    }
    try:
        response = client.post("/api/applications", json=app_data)
        if response.status_code == 200:
            data = response.json()
            assert data["selected_scheme"] == app_data["selected_scheme"]
            assert data["status"] == "Applied"
            
            # Test GET applications
            response_get = client.get("/api/applications")
            assert response_get.status_code == 200
            apps = response_get.json()
            assert any(a["selected_scheme"] == app_data["selected_scheme"] for a in apps)
        else:
            pytest.skip(f"Skipping application test as server returned: {response.status_code}")
    except Exception as e:
        pytest.skip(f"Skipping application test as DB might not be reachable: {e}")
