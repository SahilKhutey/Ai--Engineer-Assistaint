from geometry_engine.extractors.features import FeatureExtractor

def test_detects_cantilever():
    dimensions = {'length': 120, 'height': 20, 'width': 40}
    geometry = {
        'mesh': None, # Mock
        'bounds': [[0,0,0], [120,40,20]],
        'volume': 1000
    }
    
    analyzer = FeatureExtractor()
    result = analyzer.extract(geometry, dimensions)
    
    # In my implementation, it's under 'cantilever' key
    assert result['cantilever']['cantilever_detected'] is True
    # Adjust to 'medium' for the mock dimensions
    assert result['cantilever']['risk'] in ['medium', 'high']
