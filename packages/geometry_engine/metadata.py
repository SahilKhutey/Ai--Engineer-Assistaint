import trimesh
import numpy as np

class MetadataExtractor:
    @staticmethod
    def extract(mesh: trimesh.Trimesh):
        bounds = mesh.bounds
        dims = bounds[1] - bounds[0]
        
        return {
            "physical": {
                "volume_cm3": mesh.volume / 1000.0,
                "surface_area_cm2": mesh.area / 100.0,
                "center_of_mass": mesh.center_mass.tolist(),
                "moment_inertia": mesh.moment_inertia.tolist()
            },
            "dimensions_mm": {
                "x": float(dims[0]),
                "y": float(dims[1]),
                "z": float(dims[2]),
                "max_span": float(np.max(dims))
            },
            "mesh_stats": {
                "vertices": len(mesh.vertices),
                "faces": len(mesh.faces)
            }
        }
