import os
from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance, PointStruct
import uuid
import json
from llm.engineering_llm import EngineeringLLM

class DesignMemoryEngine:
    """
    Retrieval-Augmented Engineering (RAE) system for structural designs.
    Connects to Qdrant to store and retrieve past successful/failed analyses.
    Supports hybrid cloud/local embeddings.
    """
    def __init__(self, mode: str = "auto"):
        # Use local, in-memory/sqlite Qdrant for easy deployment
        self.client = QdrantClient(path="qdrant_db")
        self.collection_name = "engineering_memory"
        self.llm = EngineeringLLM(mode=mode)
        
        # Ensure collection exists
        if not self.client.collection_exists(self.collection_name):
            self.client.create_collection(
                collection_name=self.collection_name,
                vectors_config=VectorParams(size=768, distance=Distance.COSINE),
            )

    async def _get_embedding(self, text: str):
        return await self.llm.get_embeddings(text)

    async def store_analysis(self, project_id: str, geometry_features: dict, physics_results: dict, load_n: float):
        """
        Stores an analysis in the vector database.
        """
        # Create a searchable textual representation of the engineering scenario
        scenario_text = (
            f"Geometry: {geometry_features.get('dimensions_mm', {})} mm, "
            f"Volume: {geometry_features.get('physical', {}).get('volume_cm3', 0)} cm3. "
            f"Load: {load_n} N. "
            f"Result Safety Factor: {physics_results.get('safety_factor', 0)}. "
            f"Max Stress: {physics_results.get('max_stress_mpa', 0)} MPa. "
            f"Safe: {physics_results.get('is_safe', False)}"
        )
        
        vector = await self._get_embedding(scenario_text)
        
        payload = {
            "project_id": project_id,
            "geometry_features": json.dumps(geometry_features),
            "physics_results": json.dumps(physics_results),
            "load_n": load_n,
            "is_safe": physics_results.get('is_safe', False)
        }
        
        point_id = str(uuid.uuid4())
        
        self.client.upsert(
            collection_name=self.collection_name,
            points=[
                PointStruct(
                    id=point_id,
                    vector=vector,
                    payload=payload
                )
            ]
        )
        return point_id

    async def retrieve_similar_cases(self, geometry_features: dict, load_n: float, limit: int = 2):
        """
        Finds past similar analyses to inform current reasoning.
        """
        scenario_text = (
            f"Geometry: {geometry_features.get('dimensions_mm', {})} mm, "
            f"Volume: {geometry_features.get('physical', {}).get('volume_cm3', 0)} cm3. "
            f"Load: {load_n} N."
        )
        
        query_vector = await self._get_embedding(scenario_text)
        
        search_result = self.client.query_points(
            collection_name=self.collection_name,
            query=query_vector,
            limit=limit
        )
        
        retrieved_cases = []
        for hit in search_result.points:
            retrieved_cases.append({
                "score": hit.score if hasattr(hit, 'score') else 1.0,
                "project_id": hit.payload.get("project_id"),
                "is_safe": hit.payload.get("is_safe"),
                "physics_results": json.loads(hit.payload.get("physics_results", "{}"))
            })
            
        return retrieved_cases
