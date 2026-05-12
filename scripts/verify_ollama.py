import os
import sys
import asyncio
import httpx

# Inject paths
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "packages"))

from llm.engineering_llm import EngineeringLLM

async def verify_ollama():
    print("=== Antigravity Ollama Integration Verification ===\n")
    
    # 1. Check Ollama Service
    print("[STEP 1/4] Checking Ollama service status...")
    try:
        async with httpx.AsyncClient() as client:
            resp = await client.get("http://localhost:11434/api/tags")
            if resp.status_code == 200:
                models = [m['name'] for m in resp.json().get('models', [])]
                print(f"[OK] Ollama is running. Available models: {models}")
            else:
                print(f"[FAIL] Ollama returned status {resp.status_code}")
                return
    except Exception as e:
        print(f"[FAIL] Could not connect to Ollama: {e}")
        print("Please ensure Ollama is running ('ollama serve').")
        return

    # 2. Test Local Embeddings
    print("\n[STEP 2/4] Testing Local Embeddings (nomic-embed-text)...")
    try:
        llm = EngineeringLLM(mode="local")
        # Try to get embeddings - will use local if nomic-embed-text is pulled
        emb = await llm.get_embeddings("Structural analysis of a bracket", mode="local")
        print(f"[OK] Local Embedding generated. Size: {len(emb)}")
    except Exception as e:
        print(f"[FAIL] Local Embedding failed: {e}")
        print("Note: Run 'ollama pull nomic-embed-text' if missing.")

    # 3. Test Local Generation (Llama 3)
    print("\n[STEP 3/4] Testing Local Generation (llama3)...")
    try:
        prompt = "Explain why a cantilever beam is sensitive to wall thickness."
        response = await llm.analyze(prompt, task="reasoning")
        print(f"[OK] Local AI Response:\n{response[:200]}...")
    except Exception as e:
        print(f"[FAIL] Local Generation failed: {e}")
        print("Note: Run 'ollama pull llama3' if missing.")

    # 4. Test Hybrid Routing
    print("\n[STEP 4/4] Testing Hybrid Routing...")
    try:
        hybrid_llm = EngineeringLLM(mode="hybrid")
        # Task 'extraction' should be local, task 'reasoning' (complex) might be cloud
        print("Routing 'extraction' task (expect local)...")
        ext_resp = await hybrid_llm.analyze("Extract material: Steel", task="extraction")
        print(f"[OK] Extraction response generated.")
        
        print("Routing 'reasoning' task (expect cloud if key exists, else local)...")
        res_resp = await hybrid_llm.analyze("Perform complex structural analysis.", task="reasoning")
        print(f"[OK] Reasoning response generated.")
    except Exception as e:
        print(f"[FAIL] Hybrid routing failed: {e}")

if __name__ == "__main__":
    asyncio.run(verify_ollama())
