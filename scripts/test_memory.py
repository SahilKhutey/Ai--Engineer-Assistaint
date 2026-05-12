import os
import sys
import asyncio

sys.path.append(os.path.join(os.path.dirname(__file__), "..", "packages"))
from ai_orchestrator.memory_engine import DesignMemoryEngine

async def test_memory():
    print("Testing Design Memory Engine...")
    try:
        memory = DesignMemoryEngine()
        print("[OK] Memory engine initialized.")
        
        geo = {"dimensions_mm": {"x": 10}, "physical": {"volume_cm3": 1.0}}
        physics = {"safety_factor": 2.0, "max_stress_mpa": 100.0, "is_safe": True}
        
        pid = memory.store_analysis("test_proj", geo, physics, 500.0)
        print(f"[OK] Stored analysis. ID: {pid}")
        
        ret = memory.retrieve_similar_cases(geo, 500.0)
        print(f"[OK] Retrieved {len(ret)} cases.")
    except Exception as e:
        print(f"[FAIL] Memory engine failed: {e}")

if __name__ == "__main__":
    asyncio.run(test_memory())
