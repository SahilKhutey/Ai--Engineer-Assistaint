class EthicsGuardrail:
    """
    Core Ethics Layer of Antigravity OS.
    Prioritizes human safety and physical reality over design optimization.
    """
    def validate_safety(self, analysis_result: dict):
        sf = analysis_result.get("safety_factor", 0)
        max_stress = analysis_result.get("max_stress_mpa", 0)
        yield_strength = analysis_result.get("material", {}).get("yield_strength", 0)
        
        # 1. Refuse Unsafe Designs (FoS < 1.1 is critical)
        if sf < 1.1:
            return {
                "status": "REJECTED",
                "reason": "CRITICAL_SAFETY_VIOLATION: Factor of Safety < 1.1. Structural failure imminent.",
                "action": "HALT_DESIGN_LOOP"
            }
            
        # 2. Flag Fraudulent Claims
        # If Stress > Yield but SF claims to be > 1.0
        if max_stress > yield_strength and sf >= 1.0:
            return {
                "status": "REJECTED",
                "reason": "INVALID_PHYSICS_CLAIM: Stress exceeds Yield Strength but SF reported as valid.",
                "action": "FLAG_FOR_AUDIT"
            }
            
        return {"status": "PASSED"}

class ParadigmValidator:
    """
    Enforces the 7 Core Engineering Paradigms.
    """
    def check_physics_first(self, claim: str, solver_output: dict):
        """Physics is the ultimate authority."""
        # Simulated symbolic check: Does the claim align with numerical data?
        pass

    def check_failure_first(self, report: dict):
        """Junior asks: Will it work? Senior asks: How will it fail?"""
        if "failure_modes" not in report or not report["failure_modes"]:
            return {
                "status": "INCOMPLETE",
                "message": "Engineering analysis missing mandatory Failure Modes analysis."
            }
        return {"status": "VALID"}

class RuleEngine:
    def __init__(self):
        self.ethics = EthicsGuardrail()
        self.paradigms = ParadigmValidator()

    def audit_analysis(self, report: dict):
        ethics_check = self.ethics.validate_safety(report)
        paradigm_check = self.paradigms.check_failure_first(report)
        
        return {
            "ethics": ethics_check,
            "paradigms": paradigm_check,
            "overall_validity": ethics_check["status"] == "PASSED" and paradigm_check["status"] == "VALID"
        }
