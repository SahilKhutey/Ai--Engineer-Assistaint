from rule_engine.main import RuleEngine

def test_cantilever_rule():
    engine = RuleEngine()
    
    # Cantilever with high aspect ratio
    rules = engine.evaluate_structural_rules(
        {
            "structural": {"est_wall_thickness_mm": 5.0},
            "dimensions_mm": {"max": 100} # 100/5 = 20 > 15
        }, 
        {}
    )
    
    triggered_rules = [r['rule'] for r in rules]
    assert "cantilever_aspect_ratio" in triggered_rules
