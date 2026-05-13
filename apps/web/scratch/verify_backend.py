import os
import sys
import asyncio
import json

# Add project root and packages to path
ROOT = os.getcwd()
sys.path.append(ROOT)
sys.path.append(os.path.join(ROOT, "packages"))

async def verify_physics():
    print("\n--- Verifying Physics Engine ---")
    try:
        from packages.physics_engine.engine import PhysicsEngine
        engine = PhysicsEngine()
        context = {
            "material": {"youngs_modulus_pa": 210e9, "yield_strength_mpa": 350},
            "features": {"bounding_box": {"max_span": 100, "x": 50, "y": 50}, "wall_thickness_mm": 5.0},
            "mesh_data": {"centers": [[0,0,0], [0.01, 0, 0]]}
        }
        res = engine.evaluate(context, load_n=1000)
        print(f"Physics Result: {json.dumps(res, indent=2)}")
        return True
    except Exception as e:
        print(f"Physics Error: {e}")
        return False

async def verify_geometry():
    print("\n--- Verifying Geometry Engine ---")
    try:
        from packages.geometry_engine.pipeline import GeometryPipeline
        pipeline = GeometryPipeline()
        # Mock payload
        res = pipeline.process({"pitch_mm": 20.0})
        print(f"Geometry Result (Dimensions): {json.dumps(res['dimensions'], indent=2)}")
        print(f"Geometry Result (Features): {json.dumps(res['features'], indent=2)}")
        return True
    except Exception as e:
        print(f"Geometry Error: {e}")
        return False

async def verify_reasoning():
    print("\n--- Verifying Reasoning Engine ---")
    try:
        from packages.reasoning_engine.main import ReasoningEngine
        engine = ReasoningEngine()
        query = "Analyze the structural safety of a cantilever beam under 1kN load"
        res = await engine.analyze(query, {}, {}, [])
        print(f"Reasoning Result (Risk): {res['risk_level']}")
        print(f"Reasoning Result (Explanation): {res['explanation'][:100]}...")
        return True
    except Exception as e:
        print(f"Reasoning Error: {e}")
        return False

async def verify_orchestrator():
    print("\n--- Verifying Orchestrator ---")
    try:
        from apps.api.orchestrator.engineering_orchestrator import EngineeringOrchestrator
        # Mock dependencies
        engines = {"physics": None} # Orchestrator uses it via tasks.delay usually, but let's check init
        memory = type('Mock', (), {'persist_simulation': lambda x: None})()
        agents = {"chief": type('Mock', (), {'synthesize': lambda x: "Synthesis Complete"})()}
        
        orch = EngineeringOrchestrator(engines, memory, agents)
        print("Orchestrator Initialized Successfully.")
        return True
    except Exception as e:
        print(f"Orchestrator Error: {e}")
        return False

async def main():
    results = {
        "Physics": await verify_physics(),
        "Geometry": await verify_geometry(),
        "Reasoning": await verify_reasoning(),
        "Orchestrator": await verify_orchestrator()
    }
    
    print("\n==============================")
    print("   BACKEND VERIFICATION SUMMARY")
    print("==============================")
    for service, status in results.items():
        print(f"{service:15}: {'PASS' if status else 'FAIL'}")
    print("==============================")

if __name__ == "__main__":
    asyncio.run(main())
