class StructuralGuardrail:
    """
    Enforces Structural Engineering Laws (Category 2).
    Ensures safety margins and material limits are never compromised.
    """
    def validate_stress_limit(self, stress: float, yield_strength: float):
        """
        σ_actual < σ_yield. Rejects yield exceedance.
        """
        if stress >= yield_strength:
            return {
                "status": "REJECTED",
                "law": "STRESS_LIMIT_LAW",
                "reason": f"Actual stress ({stress} MPa) exceeds material yield strength ({yield_strength} MPa)."
            }
        return {"status": "PASSED"}

    def validate_factor_of_safety(self, stress: float, yield_strength: float, required_fos: float):
        """
        Ensures designs meet industry-specific safety margins.
        """
        actual_fos = yield_strength / stress if stress > 0 else float('inf')
        if actual_fos < required_fos:
            return {
                "status": "REJECTED",
                "law": "FACTOR_OF_SAFETY_LAW",
                "reason": f"Actual FoS ({actual_fos}) is below the required target ({required_fos})."
            }
        return {"status": "PASSED"}

    def validate_buckling_stability(self, load: float, critical_buckling_load: float):
        """
        P < P_cr. Prevents structural collapse of thin components.
        """
        if load >= critical_buckling_load:
            return {
                "status": "REJECTED",
                "law": "BUCKLING_LAW",
                "reason": "Applied load exceeds Euler critical buckling limit."
            }
        return {"status": "PASSED"}
