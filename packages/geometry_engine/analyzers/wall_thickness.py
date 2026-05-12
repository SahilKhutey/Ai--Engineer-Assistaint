class WallThicknessAnalyzer:
    def evaluate(self, geometry, dimensions):
        # Rough heuristic for average thickness based on volume/area
        volume = geometry.get("volume", 0)
        area = geometry.get("surface_area", 0)
        
        avg_thickness = (2 * volume) / area if area > 0 else 0
        
        if avg_thickness < 3: # 3mm threshold
            return {
                "thin_wall": True,
                "avg_thickness_mm": float(avg_thickness),
                "risk": "high" if avg_thickness < 1.5 else "medium"
            }
        return {
            "thin_wall": False,
            "avg_thickness_mm": float(avg_thickness)
        }
