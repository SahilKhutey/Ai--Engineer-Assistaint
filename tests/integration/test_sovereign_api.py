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

def test_sovereign_solve_endpoint():
    """
    Tests the unified solve endpoint across STRUCTURAL, FLUIDS, and QUANTUM domains.
    """
    # 1. Test Structural Domain solver calculation
    struct_payload = {
        "material_id": "Al-7075",
        "load_n": 20000.0,
        "mesh_resolution": "high"
    }
    struct_response = client.post("/api/analysis/solve", json=struct_payload)
    assert struct_response.status_code == 200
    struct_data = struct_response.json()
    assert struct_data["status"] == "success"
    assert "results" in struct_data
    assert struct_data["results"]["max_stress_mpa"] > 0
    assert struct_data["results"]["safety_factor"] > 0
    assert struct_data["results"]["deflection_meters"] > 0

    # 2. Test Fluids Domain solver calculation
    fluids_payload = {
        "domain": "FLUIDS",
        "mesh_density": "High",
        "boundary_conditions": {
            "inlet_velocity_mps": 35.0,
            "outlet_pressure_pa": 101325.0
        }
    }
    fluids_response = client.post("/api/analysis/solve", json=fluids_payload)
    assert fluids_response.status_code == 200
    fluids_data = fluids_response.json()
    assert fluids_data["status"] == "success"
    assert fluids_data["results"]["mach"] == 35.0 / 343.0
    assert fluids_data["results"]["peclet"] > 1200
    assert fluids_data["results"]["reynolds"] > 0

    # 3. Test Quantum Domain solver calculation
    quantum_payload = {
        "domain": "QUANTUM",
        "qubit_count": 5,
        "coherence_threshold": 120.0
    }
    quantum_response = client.post("/api/analysis/solve", json=quantum_payload)
    assert quantum_response.status_code == 200
    quantum_data = quantum_response.json()
    assert quantum_data["status"] == "success"
    assert quantum_data["results"]["fidelity"] == 0.9998 - (5 * 0.0001)
    assert quantum_data["results"]["qubits"]["count"] == 5

def test_sovereign_asynchronous_execution():
    """
    Tests the fully integrated asynchronous task execution cycle.
    By using a low complexity index, the task completes near-instantaneously
    via the running background scheduler loop.
    """
    import time
    
    payload = {
        "question": "Perform automated sub-millisecond mesh synchronization tests.",
        "domain": "MANUFACTURING",
        "math": {"target_mass_kg": 10.0},
        "material_id": "Ti-6Al-4V",
        "sovereign_intent": True,
        "fidelity": 0.9,
        # Override default complexity to trigger instant completion in scheduler loop
        "complexity": 0.01
    }
    
    with TestClient(app) as local_client:
        # 1. Post request to begin execution
        # Set workload complexity to 0.01 so it completes immediately (10ms)
        response = local_client.post("/api/analysis", json=payload)
        assert response.status_code == 200
        data = response.json()
        job_id = data["job_id"]
        
        # 2. Assert initial queued state
        status_response = local_client.get(f"/api/analysis/status/{job_id}")
        assert status_response.status_code == 200
        status_data = status_response.json()
        assert status_data["status"] in ["SOVEREIGN_PENDING", "SOVEREIGN_EXECUTING", "SOVEREIGN_CONVERGED"]
        
        # 3. Poll status until task converges (up to 15 retries, ~1.5s max wait)
        comp_data = None
        for _ in range(15):
            time.sleep(0.1)
            comp_response = local_client.get(f"/api/analysis/status/{job_id}")
            assert comp_response.status_code == 200
            comp_data = comp_response.json()
            if comp_data["status"] == "SOVEREIGN_CONVERGED":
                break
        
        # 4. Assert completed status and dynamic physics results calculated by scheduler
        assert comp_data is not None
        assert comp_data["status"] == "SOVEREIGN_CONVERGED"
        assert comp_data["result"]["optimized_mass_kg"] == 9.45  # 10.0 * 0.945
        assert comp_data["result"]["safety_factor"] > 0
        assert comp_data["result"]["deflection_meters"] > 0


def test_sovereign_new_dashboards_endpoints():
    """
    Tests the new Spatial solver, conflicts resolver, and process monitor endpoints.
    """
    # 1. Test Spatial Domain solver calculations
    spatial_payload = {
        "domain": "SPATIAL",
        "joint_a1": 50.0,
        "joint_b4": 100.0
    }
    spatial_response = client.post("/api/analysis/solve", json=spatial_payload)
    assert spatial_response.status_code == 200
    spatial_data = spatial_response.json()
    assert spatial_data["status"] == "success"
    assert "results" in spatial_data
    assert "position" in spatial_data["results"]
    assert "confidence" in spatial_data["results"]
    assert "featureCount" in spatial_data["results"]
    
    # 2. Test simulation conflicts retrieval
    conflicts_response = client.get("/api/analysis/conflicts")
    assert conflicts_response.status_code == 200
    conflicts_data = conflicts_response.json()
    assert "conflicts" in conflicts_data
    assert "active_engines" in conflicts_data
    assert "convergence" in conflicts_data
    assert len(conflicts_data["conflicts"]) == 3
    
    # 3. Test conflict resolution
    resolve_response = client.post("/api/analysis/resolve/CONF_01")
    assert resolve_response.status_code == 200
    resolve_data = resolve_response.json()
    assert resolve_data["status"] == "resolved"
    assert resolve_data["conflict"]["resolved"] is True
    
    # 4. Test global mesh refinement
    refine_response = client.post("/api/analysis/refine")
    assert refine_response.status_code == 200
    refine_data = refine_response.json()
    assert refine_data["status"] == "success"
    
    # 5. Test system processes monitoring
    processes_response = client.get("/api/analysis/system/processes")
    assert processes_response.status_code == 200
    processes_data = processes_response.json()
    assert "processes" in processes_data
    assert len(processes_data["processes"]) == 4
    assert processes_data["processes"][0]["name"] == "SovereignPhysicsKernel"




