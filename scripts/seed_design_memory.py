import sys
import os

# Add packages to path
sys.path.append(os.path.join(os.getcwd(), 'packages'))

from engineering_rag.memory_engine import DesignMemoryEngine
from llm.engineering_llm import EngineeringLLM

def seed_standards():
    print("🌱 Seeding Engineering Standards into Design Memory...")
    memory = DesignMemoryEngine()
    llm = EngineeringLLM()

    standards = [
        {
            "text": "AISC Steel Construction Manual: Structural steel yield strength for A36 is typically 250 MPa. Safety factor for flexure should be > 1.67.",
            "type": "standard"
        },
        {
            "text": "Eurocode 3: Design of steel structures. Partial safety factors for resistance of cross-sections is 1.0.",
            "type": "standard"
        },
        {
            "text": "Historical Case: Aluminum 6061-T6 Cantilever failure at 310 MPa stress due to fatigue limit reached.",
            "type": "historical_case"
        }
    ]

    for s in standards:
        print(f"Adding: {s['text'][:50]}...")
        vector = llm.embed(s['text'])
        memory.store_case(vector, s)

    print("✅ Seeding Complete.")

if __name__ == "__main__":
    seed_standards()
