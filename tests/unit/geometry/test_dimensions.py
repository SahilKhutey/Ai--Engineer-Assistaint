from geometry_engine.extractors.dimensions import DimensionExtractor

def test_dimension_extraction():
    geometry = {
        'bounds': [
            [0, 0, 0],
            [120, 40, 30]
        ]
    }
    extractor = DimensionExtractor()
    result = extractor.extract(geometry)
    assert result['length'] == 120
    assert result['width'] == 40
    assert result['height'] == 30
