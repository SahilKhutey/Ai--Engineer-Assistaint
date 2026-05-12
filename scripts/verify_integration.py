import asyncio
import sys
import os

# Add packages to path
sys.path.append(os.path.join(os.getcwd(), 'packages'))
sys.path.append(os.path.join(os.getcwd(), 'apps/api'))

from orchestrator.engineering_orchestrator import EngineeringOrchestrator

async def verify_pipeline():
    print("[INIT] Initializing Antigravity Integration Test...")
    orchestrator = EngineeringOrchestrator()
    
    payload = {
        "question": "Is this cantilever beam safe under a 1000N vertical load?",
        "pitch_mm": 10.0 # Use a coarser mesh for faster verification
    }
    
    print("[RUN] Running Geometry & Physics Deep Integration Pipeline...")
    try:
        result = await orchestrator.run(payload)
        
        print("\n[SUCCESS] Integration Success!")
        print(f"Dimensions: {result['geometry']['dimensions']}")
        print(f"Max Stress: {result['physics']['max_stress_mpa']:.2f} MPa")
        print(f"Max Displacement: {result['physics']['max_displacement_mm']:.4f} mm")
        print(f"Safety Factor: {result['physics']['safety_factor']:.2f}")
        print(f"Status: {result['physics']['status'].upper()}")
        print("-" * 40)
        print(f"AI Reasoning Preview:\n{result['reasoning'][:200]}...")
        
    except Exception as e:
        print(f"[FAIL] Integration Failed: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    asyncio.run(verify_pipeline())
