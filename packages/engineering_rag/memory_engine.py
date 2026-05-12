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
        
        self.client.recreate_collection(
            collection_name=self.collection_name,
            vectors_config=VectorParams(size=128, distance=Distance.COSINE),
        )

    def persist_simulation(self, synthesis_report: dict, technical_report: dict = None):
        """
        Stores a complete engineering artifact with Failure Mode metadata.
        """
        geometry = synthesis_report.get("reports", {}).get("structural", {}).get("problem_understanding", "")
        failure_modes = synthesis_report.get("reports", {}).get("structural", {}).get("failure_modes", [])
        assumptions = synthesis_report.get("reports", {}).get("structural", {}).get("assumptions", [])
        
        # 1. Create 'Failure Intuition' Embedding
        # Combining geometry description + failure types for rich semantic retrieval
        failure_text = " ".join([f["type"] for f in failure_modes]) if isinstance(failure_modes, list) else ""
        embedding_content = f"{geometry} {failure_text}"
        vector = self._generate_embedding(embedding_content)
        
        # 2. Persist to Qdrant
        self.client.upsert(
            collection_name=self.collection_name,
            points=[
                PointStruct(
                    id=abs(hash(geometry)) % 10**8,
                    vector=vector,
                    payload={
                        "geometry_summary": geometry,
                        "failure_modes": failure_modes,
                        "assumptions": assumptions,
                        "status": synthesis_report.get("status"),
                        "safety_factor": synthesis_report.get("reports", {}).get("structural", {}).get("results", {}).get("safety_factor")
                    }
                )
        try:
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
        except Exception:
            pass

    def retrieve_historical_patterns(self, vector: list, limit: int = 5):
        """
        Retrieves similar engineering failure patterns or prior certifications.
        """
        if not self.client: return []
        
        try:
            results = self.client.search(
                collection_name=self.collection_name,
                query_vector=vector,
                limit=limit
            )
            return [r.payload for r in results]
        except Exception:
            return []
