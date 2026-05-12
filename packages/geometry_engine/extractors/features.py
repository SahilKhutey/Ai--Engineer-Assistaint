from ..analyzers.cantilever import CantileverAnalyzer
from ..analyzers.wall_thickness import WallThicknessAnalyzer

class FeatureExtractor:
    def extract(self, geometry, dimensions):
        cantilever = CantileverAnalyzer().detect(dimensions)
        wall_analysis = WallThicknessAnalyzer().evaluate(geometry, dimensions)
        
        return {
            "cantilever": cantilever,
            "wall_analysis": wall_analysis
        }
