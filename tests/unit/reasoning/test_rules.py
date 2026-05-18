import sys
import os

# Ensure packages is in path
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "..", "..", "packages"))

from rule_engine.main import RuleEngine

def test_cantilever_rule():
    engine = RuleEngine()
    
    # Cantilever with high aspect ratio (100 / 5.0 = 20.0 > 18)
    rules = engine.evaluate_structural_rules(
        {
            "wall_thickness_mm": 5.0,
            "bounding_box": {"max_span": 100.0}
        }, 
        {}
    )
    
    triggered_rules = [r['rule'] for r in rules]
    assert "SOVEREIGN_SLENDER_MEMBER_RISK" in triggered_rules
