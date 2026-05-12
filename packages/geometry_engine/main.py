import trimesh
import os
from .validator import GeometryValidator
from .metadata import MetadataExtractor
from .features import FeatureExtractor
from .topology import TopologyAnalyzer

class GeometryEngine:
    @staticmethod
    def parse_stl(file_path: str):
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"CAD file not found: {file_path}")

        # 1. Load Mesh
        mesh = trimesh.load(file_path)
        
        # Handle scene vs mesh (STEP vs STL)
        if isinstance(mesh, trimesh.Scene):
            mesh = mesh.dump(concatenate=True)

        # 2. Validate
        validation = GeometryValidator.validate_mesh(mesh)
        
        # 3. Extract Metadata
        metadata = MetadataExtractor.extract(mesh)
        
        # 4. Extract Features
        features = FeatureExtractor.extract(mesh)
        
        # 5. Analyze Topology
        topology = TopologyAnalyzer.analyze(mesh, features)
        
        # Merge all data
        analysis = {
            **metadata,
            **features,
            "validation": validation,
            "topology": topology,
            "status": "parsed"
        }
        
        return analysis
