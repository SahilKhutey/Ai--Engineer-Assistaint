import pytest
from packages.guardrail_engine.ethics.validator import EthicsAIGuardrail

def test_agent_rejects_unsafe_performance_gain():
    """
    Validates that the AI cannot prioritize performance over human safety.
    """
    guardrail = EthicsAIGuardrail()
    
    # Case: High Risk for 20% gain -> REJECTED
    result = guardrail.enforce_human_safety(risk_level="HIGH", performance_gain=0.2)
    assert result["status"] == "REJECTED"
    assert "HUMAN_SAFETY_LAW" in result["law"]

def test_hallucination_rejection_vs_physics():
    """
    Ensures AI results deviating from physics models are rejected.
    """
    guardrail = EthicsAIGuardrail()
    
    physics_truth = {"max_stress": 100.0}
    ai_hallucination = {"max_stress": 120.0} # > 5% deviation
    
    result = guardrail.validate_ai_conclusion(ai_hallucination, physics_truth)
    assert result["status"] == "REJECTED"
    assert "AI hallucination detected" in result["reason"]

def test_validation_hierarchy_enforcement():
    """
    Ensures conclusions are rejected if critical validation steps are missing.
    """
    guardrail = EthicsAIGuardrail()
    
    # Missing 'numerical' validation -> REJECTED
    incomplete_steps = ["analytical"]
    result = guardrail.require_validation_hierarchy(incomplete_steps)
    assert result["status"] == "REJECTED"
    assert "Missing critical validation step: numerical" in result["reason"]
