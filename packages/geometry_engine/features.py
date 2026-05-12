import trimesh
import numpy as np

class FeatureExtractor:
    @staticmethod
    def extract(mesh: trimesh.Trimesh):
        bounds = mesh.bounds
        dims = bounds[1] - bounds[0]
        
        # 1. Cantilever Detection
        max_dim = np.max(dims)
        min_dim = np.min(dims)
        aspect_ratio = max_dim / min_dim if min_dim > 0 else 0
        
        # 2. Hole Detection (Genus)
        # Genus = (Edges - Vertices - Faces + 2 * ConnectedComponents) / 2
        # For a single closed mesh, Genus = (1 - EulerNumber/2)
        euler = mesh.euler_number
        genus = int(1 - (euler / 2))
        
        # 3. Wall Thickness (Heuristic)
        # Using volume / surface area as a proxy for characteristic thickness
        avg_thickness = (2 * mesh.volume) / mesh.area if mesh.area > 0 else 0
        
        return {
            "structural": {
                "topology": "cantilever" if aspect_ratio > 10 else "block",
                "aspect_ratio": float(aspect_ratio),
                "is_slender": aspect_ratio > 15,
                "has_holes": genus > 0,
                "hole_count": genus,
                "characteristic_thickness_mm": float(avg_thickness)
            },
            "manufacturing": {
                "overhang_ratio": float(max_dim / avg_thickness) if avg_thickness > 0 else 0
            }
        }
