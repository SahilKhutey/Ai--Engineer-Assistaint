import os
import sys
import asyncio
import trimesh
import numpy as np

# Inject paths
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "packages"))
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "apps", "api"))

from simulation_engine.mesher import FEMMesher
from simulation_engine.solver import FEMSolver
from ai_orchestrator.memory_engine import DesignMemoryEngine
from reasoning_engine.load_path import LoadPathAnalyzer
from ai_orchestrator.main import EngineeringOrchestrator

async def verify_systems():
    print("=== Antigravity Phase 3.2+ System Verification ===")
    print("Initializing components...")
    
    # Common test data
    geo = {"dimensions_mm": {"x": 100, "y": 20, "z": 10}, "physical": {"volume_cm3": 20.0}}
    physics = {"safety_factor": 2.5, "max_stress_mpa": 150.0, "is_safe": True}

    # 1. FEM Simulation Verification
    print("\n[STEP 1/4] Testing True FEM Solver (scikit-fem)...")
    try:
        box = trimesh.creation.box(extents=[100, 20, 10]) # 100mm x 20mm x 10mm
        hex_mesh = FEMMesher.generate_hex_mesh(box, pitch_mm=10.0)
        
        material = {"youngs_modulus_pa": 2.1e11, "poissons_ratio": 0.3, "name": "Steel"} # Steel
        bc = {"force_n": 1000.0}
        
        results = FEMSolver.solve_static(hex_mesh, material, bc)
        
        if "error" in results:
            print(f"[FAIL] FEM Solver Error: {results['error']}")
        else:
            print(f"[OK] FEM Max Stress: {results['max_stress_mpa']:.2f} MPa")
            print(f"[OK] FEM Max Displacement: {results['max_displacement_mm']:.4f} mm")
    except Exception as e:
        print(f"[FAIL] FEM Solver crashed: {e}")

    # 2. Design Memory Verification (Qdrant)
    print("\n[STEP 2/4] Testing Design Memory (Qdrant)...")
    try:
        memory = DesignMemoryEngine()
        # Explicitly configure genai with the key for this script
        import google.generativeai as genai
        api_key = os.getenv("GOOGLE_API_KEY") or os.getenv("GEMINI_API_KEY")
        if api_key:
            genai.configure(api_key=api_key)
            
        project_id = "test_project_99"
        
        point_id = memory.store_analysis(project_id, geo, physics, 1000.0)
        print(f"[OK] Stored analysis in Qdrant. ID: {point_id}")
        
        retrieved = memory.retrieve_similar_cases(geo, 1000.0)
        if len(retrieved) > 0:
            print(f"[OK] Retrieved {len(retrieved)} similar cases.")
            print(f"[OK] Match Score: {retrieved[0]['score']:.4f}")
        else:
            print("[FAIL] No cases retrieved from memory.")
    except Exception as e:
        print(f"[FAIL] Design Memory error: {e}")

    # 3. Load Path Analysis Verification
    print("\nTesting Load Path Analysis...")
    try:
        path_results = LoadPathAnalyzer.infer_primary_path(geo)
        print(f"[OK] Path Type: {path_results['path_type']}")
        print(f"[OK] Description: {path_results['description']}")
    except Exception as e:
        print(f"[FAIL] Load Path Analysis error: {e}")

    # 4. Orchestrator Integration Verification
    print("\nTesting Full Orchestrator Integration (DSPy + Memory)...")
    try:
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            print("[SKIP] Gemini API Key missing, skipping LLM test.")
        else:
            orch = EngineeringOrchestrator(api_key=api_key)
            context = {
                "material_name": "Steel",
                "geometry_summary": "100x20x10mm bracket",
                "physics_summary": "Max Stress: 150MPa, SF: 2.5",
                "physics_results": physics,
                "geometry_features": geo,
                "load_n": 1000.0
            }
            query = "Is this bracket safe for a 1000N load?"
            response = await orch.analyze_query(query, context)
            
            print(f"[OK] AI Response generated successfully.")
            print(f"[OK] Confidence: {response['confidence']}")
            if "design_memory" in context:
                print(f"[OK] Memory context was injected.")
    except Exception as e:
        print(f"[FAIL] Orchestrator error: {e}")

if __name__ == "__main__":
    asyncio.run(verify_systems())
