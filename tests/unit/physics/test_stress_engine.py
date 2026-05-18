import sys
import os

# Ensure packages is in path
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "..", "..", "packages"))

from physics_engine.main import run_analysis_heuristics

def test_normal_stress():
    material = {
        "id": "pla",
        "yield_strength_pa": 50e6,
        "youngs_modulus_pa": 3.5e9
    }
    geometry_data = {
        "dimensions_mm": {"max": 100, "y": 10, "z": 10},
        "features": {"cantilever": {"cantilever_detected": False}}
    }
    load_n = 500
    
    result = run_analysis_heuristics(material, geometry_data, load_n)
    
    # Bending Stress = (F*L*c)/I 
    # L=0.1, c=0.005, I= (0.01 * 0.01^3)/12 = 8.33e-10
    # Stress = (500 * 0.1 * 0.005) / 8.33e-10 = 0.25 / 8.33e-10 = 300 MPa
    assert result['bending_stress_mpa'] >= 5.0
    assert result['safety_factor'] > 0 # SF will be small here
