class CantileverAnalyzer:
    def detect(self, dimensions):
        length = dimensions["length"]
        height = dimensions["height"]
        width = dimensions["width"]
        
        # Heuristic: longest dimension relative to others
        max_dim = max(length, height, width)
        min_dim = min(length, height, width)
        
        ratio = max_dim / max(min_dim, 1)
        if ratio > 4:
            return {
                "cantilever_detected": True,
                "cantilever_ratio": float(ratio),
                "risk": "high" if ratio > 10 else "medium"
            }
        return {"cantilever_detected": False}
