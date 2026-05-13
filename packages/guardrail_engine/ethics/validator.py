class EthicsAIGuardrail:
    """
    Enforces Engineering Ethics and AI Safety Laws (Category 10 & 11).
    Prioritizes human safety and physical truth over AI hallucinations.
    """
    def enforce_human_safety(self, risk_level: str, performance_gain: float):
        """
        Human Safety Law: Safety overrides performance optimization.
        """
        if risk_level == "HIGH" and performance_gain > 0:
            return {
                "status": "REJECTED",
                "law": "HUMAN_SAFETY_LAW",
                "reason": "Performance gains cannot be pursued at the cost of high human safety risk."
            }
        return {"status": "PASSED"}

    def validate_ai_conclusion(self, ai_result: dict, physics_result: dict):
        """
        Physics Overrides AI: Rejects AI results that conflict with validated physics.
        """
        for key in physics_result:
            if key in ai_result:
                if abs(ai_result[key] - physics_result[key]) > 0.05 * physics_result[key]:
                    return {
                        "status": "REJECTED",
                        "law": "PHYSICS_OVERRIDES_AI",
                        "reason": f"AI hallucination detected for {key}. Deviates from physics model by > 5%."
                    }
        return {"status": "PASSED"}

    def require_validation_hierarchy(self, validation_steps: list):
        """
        Validation Law: No conclusion is trusted without verification.
        Hierarchy: Analytical -> Numerical -> Experimental -> Operational.
        """
        required = ["analytical", "numerical"]
        for step in required:
            if step not in validation_steps:
                return {
                    "status": "REJECTED",
                    "law": "VALIDATION_LAW",
                    "reason": f"Missing critical validation step: {step}."
                }
        return {"status": "PASSED"}
