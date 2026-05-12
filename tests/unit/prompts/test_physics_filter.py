from prompt_layer.filters import PhysicsFilter

def test_detects_unsafe_claim():
    filter_engine = PhysicsFilter()
    context = {"safety_factor": 0.5} # Failing
    
    # AI claims it's safe
    claim = "The design is safe under current loads."
    result = filter_engine.validate_response(claim, context)
    
    assert result['valid'] is False
    assert "CONFLICT: AI claimed safety while SF=0.5" in result['reason']

def test_allows_safe_claim():
    filter_engine = PhysicsFilter()
    context = {"safety_factor": 2.5} # Safe
    
    claim = "The part is structurally sound."
    result = filter_engine.validate_response(claim, context)
    
    assert result['valid'] is True
