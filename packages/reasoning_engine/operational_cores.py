class RequirementCore:
    """
    Expert system for Level 1: Requirement Engineering.
    Translates human intent into explicit mission goals and engineering requirements.
    """
    def parse_intent(self, prompt: str):
        print(f"[REASONING] Parsing intent: {prompt}")
        # Operational Rule: No engineering begins without explicit requirements.
        return {
            "mission": "High-Efficiency Aerodynamic Drone Frame",
            "goals": ["Min-Mass", "Max-Stiffness", "Flight-Resilience"],
            "target_payload_kg": 0.5 if "drone" in prompt.lower() else 1.0,
            "lifecycle_target_yrs": 5.0
        }

class ConstraintCore:
    """
    Expert system for Level 1: Constraint Engineering.
    Extracts structural, thermal, and manufacturing boundaries.
    """
    def extract_boundaries(self, requirements: dict):
        # Constraints are first-class engineering entities.
        return {
            "structural": {"min_fos": 1.5, "yield_limit_mpa": 280},
            "thermal": {"max_operating_temp": 120},
            "manufacturing": {"method": "Additive", "overhang_limit_deg": 45},
            "economic": {"target_cost_usd": 150}
        }
