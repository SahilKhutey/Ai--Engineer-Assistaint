from fastapi.testclient import TestClient
import sys
import os

# Ensure apps/api is in path
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "..", "apps", "api"))
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "..", "packages"))

from main import app
from engineering_os.kernel.orchestration.kernel_manager import kernel

client = TestClient(app)

def test_sovereign_analysis_lifecycle():
    """
    Tests the complete lifecycle of a Sovereign Analysis Request:
    1. Submission via POST /api/analysis
    2. Generation of workload fingerprint by SecurityManager
    3. Retrieval of queued status with fingerprint matching
    """
    payload = {
        "question": "Optimize high-pressure aerospace turbine blades under extreme mechanical stresses.",
        "domain": "AEROSPACE",
        "math": {"equations": ["sigma = F/A", "stress < yield_limit"], "variables": []},
        "material_id": "titanium_alloy_64",
        "sovereign_intent": True,
        "fidelity": 1.0
    }
    
    # 1. Post analysis request
    response = client.post("/api/analysis", json=payload)
    assert response.status_code == 200
    data = response.json()
    
    assert data["status"] == "SOVEREIGN_ANALYSIS_INITIATED"
    assert "job_id" in data
    assert "fingerprint" in data
    assert len(data["fingerprint"]) == 64  # SHA-256 hex digest length
    
    job_id = data["job_id"]
    fingerprint = data["fingerprint"]
    
    # 2. Verify status endpoint retrieving from Kernel Manager active_tasks
    status_response = client.get(f"/api/analysis/status/{job_id}")
    assert status_response.status_code == 200
    status_data = status_response.json()
    
    assert status_data["status"] == "SOVEREIGN_PENDING"
    assert status_data["fingerprint"] == fingerprint
    assert status_data["integrity_verified"] is True
    
    # 3. Simulate completion of task
    kernel.active_tasks[job_id]["status"] = "COMPLETE"
    kernel.active_tasks[job_id]["result"] = {"optimized_mass_kg": 12.4, "safety_factor": 1.84}
    
    # Check status again
    comp_response = client.get(f"/api/analysis/status/{job_id}")
    assert comp_response.status_code == 200
    comp_data = comp_response.json()
    
    assert comp_data["status"] == "SOVEREIGN_CONVERGED"
    assert comp_data["result"]["optimized_mass_kg"] == 12.4
    assert comp_data["fingerprint"] == fingerprint
    assert comp_data["integrity_verified"] is True
