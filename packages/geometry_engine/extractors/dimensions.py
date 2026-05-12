class DimensionExtractor:
    def extract(self, geometry):
        bounds = geometry["bounds"]
        return {
            "length": float(bounds[1][0] - bounds[0][0]),
            "width": float(bounds[1][1] - bounds[0][1]),
            "height": float(bounds[1][2] - bounds[0][2])
        }
