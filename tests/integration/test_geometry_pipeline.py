from geometry_engine.pipeline import GeometryPipeline
import os

def test_geometry_pipeline():
    pipeline = GeometryPipeline()
    fixture_path = os.path.join(os.path.dirname(__file__), "..", "fixtures", "bracket.stl")
    
    result = pipeline.process(fixture_path)
    
    assert 'geometry' in result
    assert 'features' in result
    assert 'metadata' in result
    assert 'context' in result
