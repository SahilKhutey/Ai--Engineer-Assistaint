import numpy as np
import uuid
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct

class DesignMemoryEngine:
    """
    Structured Engineering Memory (RAG).
    Stores simulation results, failure modes, and assumptions for cross-project intuition.
    """
    def __init__(self):
        # Simulated Qdrant client for local-first engineering memory
        self.client = QdrantClient(":memory:") 
        self.collection_name = "engineering_memory"
        
        # Use create_collection instead of recreate_collection (deprecated in some versions)
        # or handle the exception if it exists
        try:
            self.client.create_collection(
                collection_name=self.collection_name,
                vectors_config=VectorParams(size=128, distance=Distance.COSINE),
            )
        except Exception:
            # Collection might already exist
            pass

    def _generate_embedding(self, text: str):
        """
        Deterministic pseudo-embedding for local demonstration.
        In production, replace with OpenAI/Cohere/HuggingFace embeddings.
        """
        np.random.seed(abs(hash(text)) % 10**8)
        return np.random.uniform(-1, 1, 128).tolist()

    def persist_simulation(self, synthesis_report: dict, technical_report: dict = None):
        """
        Stores a complete engineering artifact with Failure Mode metadata.
        """
        try:
            reports = synthesis_report.get("reports", {})
            structural = reports.get("structural", {})
            
            geometry = structural.get("problem_understanding", "Unknown Geometry")
            failure_modes = structural.get("failure_modes", [])
            assumptions = structural.get("assumptions", [])
            
            # 1. Create 'Failure Intuition' Embedding
            failure_text = " ".join([f.get("type", "") for f in failure_modes]) if isinstance(failure_modes, list) else ""
            embedding_content = f"{geometry} {failure_text}"
            vector = self._generate_embedding(embedding_content)
            
            # 2. Persist to Qdrant
            payload = {
                "geometry_summary": geometry,
                "failure_modes": failure_modes,
                "assumptions": assumptions,
                "status": synthesis_report.get("status"),
                "safety_factor": structural.get("results", {}).get("safety_factor")
            }
            
            self.client.upsert(
                collection_name=self.collection_name,
                points=[
                    PointStruct(
                        id=str(uuid.uuid4()),
                        vector=vector,
                        payload=payload
                    )
                ]
            )
        except Exception as e:
            print(f"[MEMORY_ERROR] Failed to persist simulation: {e}")

    def retrieve_historical_patterns(self, query_text: str, limit: int = 5):
        """
        Retrieves similar engineering failure patterns or prior certifications.
        """
        if not self.client: return []
        
        try:
            vector = self._generate_embedding(query_text)
            results = self.client.search(
                collection_name=self.collection_name,
                query_vector=vector,
                limit=limit
            )
            return [r.payload for r in results]
        except Exception as e:
            print(f"[MEMORY_ERROR] Retrieval failed: {e}")
            return []
