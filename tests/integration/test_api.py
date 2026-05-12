from fastapi.testclient import TestClient
import sys
import os

# Ensure apps/api is in path
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "..", "apps", "api"))
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "..", "packages"))

from app.main import app

client = TestClient(app)

def test_root_endpoint():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json()["status"] == "active"

def test_materials_endpoint():
    response = client.get("/api/materials")
    assert response.status_code == 200
    assert "materials" in response.json()

def test_upload_flow():
    fixture_path = os.path.join(os.path.dirname(__file__), "..", "fixtures", "bracket.stl")
    with open(fixture_path, "rb") as f:
        response = client.post(
            "/api/upload",
            files={"file": ("bracket.stl", f, "application/octet-stream")}
        )
    assert response.status_code == 200
    assert "analysis" in response.json()
