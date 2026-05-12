import trimesh

class TopologyAnalyzer:
    @staticmethod
    def analyze(mesh: trimesh.Trimesh, features: dict):
        # Infer load path based on features
        topology_type = features.get("structural", {}).get("topology")
        
        load_transfer = "direct_compression"
        if topology_type == "cantilever":
            load_transfer = "bending_moment_propagation"
            
        return {
            "load_path": {
                "mechanism": load_transfer,
                "complexity": "medium" if features.get("structural", {}).get("has_holes") else "low"
            },
            "connectivity": {
                "shells": len(mesh.split(only_watertight=False)),
                "is_assembly": len(mesh.split(only_watertight=False)) > 1
            }
        }
