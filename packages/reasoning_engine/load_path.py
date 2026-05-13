import numpy as np

class LoadPathAnalyzer:
    """
    Analyzes geometric topology to infer the primary load paths
    (the structural corridors where forces travel from application points to supports).
    """
    
    @staticmethod
    def infer_primary_path(geometry_features: dict, force_direction: str = "-z"):
        """
        Infers the load path logic.
        For MVP, it uses bounding box aspects to determine if the path is direct (compression)
        or offset (bending/shear).
        """
        dims = geometry_features.get('dimensions_mm', {})
        x = dims.get('x', 10)
        y = dims.get('y', 10)
        z = dims.get('z', 10)
        
        # Determine the longest axis
        aspect_ratios = {
            "x/y": x / max(y, 1),
            "x/z": x / max(z, 1),
            "y/z": y / max(z, 1),
            "z/x": z / max(x, 1),
            "z/y": z / max(y, 1)
        }
        
        # Heuristics based on bounding box
        path_type = "Direct Compression/Tension"
        risk_areas = []
        
        if aspect_ratios["x/z"] > 3.0 or aspect_ratios["y/z"] > 3.0:
            path_type = "Cantilever/Bending Path"
            risk_areas.append("Fixed support interface (high moment)")
            
        elif aspect_ratios["z/x"] > 5.0:
            path_type = "Slender Column Path"
            risk_areas.append("Mid-span (buckling risk)")
            
        return {
            "path_type": path_type,
            "description": f"Force flows predominantly via {path_type.lower()}.",
            "identified_risk_regions": risk_areas,
            "force_direction": force_direction
        }
        
    @staticmethod
    def evaluate_load_path_risks(geometry_features: dict, physics_results: dict):
        """
        Integrates physics results to validate the inferred load path risks.
        """
        path_analysis = LoadPathAnalyzer.infer_primary_path(geometry_features)
        
        # If stress is high and we are in a bending path, confirm the risk
        sf = physics_results.get("safety_factor", 10.0)
        
        if sf < 2.0 and "Cantilever" in path_analysis["path_type"]:
            path_analysis["identified_risk_regions"].append(
                "Warning: Confirmed high stress at support due to load offset."
            )
            
        return path_analysis

    def estimate(self, geometry: dict, intent: dict):
        """
        Main entry point for ReasoningEngine.
        """
        force_direction = intent.get('force_direction', '-z')
        return self.infer_primary_path(geometry, force_direction)

