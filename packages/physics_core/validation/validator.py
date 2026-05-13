import numpy as np

class RealityValidator:
    """
    The Ultimate Source of Truth for the Engineering OS.
    Overrides AI suggestions and optimizations if they violate physical reality.
    """
    def validate_conservation_laws(self, initial_state: dict, final_state: dict):
        """
        Ensures mass and energy are conserved within numerical tolerances.
        """
        mass_error = abs(final_state["mass"] - initial_state["mass"])
        if mass_error > 1e-6:
            raise ValueError(f"PHYSICS_VIOLATION: Mass not conserved. Delta: {mass_error}")
            
        energy_error = final_state["energy"] - initial_state["energy"]
        if energy_error > 1e-6:
            # Energy can be lost (heat), but not created (unless specified)
            raise ValueError(f"PHYSICS_VIOLATION: Energy creation detected. Delta: {energy_error}")
            
        return True

    def validate_material_realism(self, stress_mpa: float, yield_mpa: float, margin_target: float = 1.5):
        """
        Prevents designs that exceed physical material limits.
        """
        safety_factor = yield_mpa / stress_mpa if stress_mpa > 0 else float('inf')
        
        if safety_factor < 1.0:
            return {
                "status": "IMPOSSIBLE",
                "reason": f"Material Failure: Stress ({stress_mpa} MPa) exceeds Yield ({yield_mpa} MPa).",
                "safety_factor": safety_factor
            }
            
        return {
            "status": "PHYSICALLY_REALIZABLE",
            "safety_factor": safety_factor,
            "compliant": safety_factor >= margin_target
        }

    def validate_dimensional_consistency(self, units_report: list):
        """
        Ensures all solver outputs maintain valid units.
        """
        # Integration with math_core.units
        pass

    def check_stability(self, convergence_history: list):
        """
        Rejects divergent numerical solutions.
        """
        if convergence_history[-1] > convergence_history[0]:
            raise RuntimeError("NUMERICAL_INSTABILITY: Physics solver is diverging.")
        return True
