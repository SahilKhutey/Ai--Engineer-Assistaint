class PhysicalGuardrail:
    """
    Enforces Universal Physical Laws (Category 1).
    Rejects any design or simulation that violates fundamental reality.
    """
    def validate_energy_conservation(self, input_energy: float, generated_energy: float, losses: float):
        """
        ΔE = Q - W. Rejects perpetual motion or impossible efficiencies.
        """
        if generated_energy > (input_energy - losses):
            return {
                "status": "REJECTED",
                "law": "CONSERVATION_OF_ENERGY",
                "reason": "Generated energy exceeds input energy. Perpetual motion detected."
            }
        return {"status": "PASSED"}

    def validate_mass_conservation(self, input_mass: float, final_mass: float):
        """
        Rejects systems where mass is created or destroyed in a closed system.
        """
        if abs(final_mass - input_mass) > 1e-9:
            return {
                "status": "REJECTED",
                "law": "CONSERVATION_OF_MASS",
                "reason": "Mass not conserved in closed system."
            }
        return {"status": "PASSED"}

    def validate_thermo_efficiency(self, efficiency: float, t_hot: float, t_cold: float):
        """
        Enforces Second Law of Thermodynamics (Carnot Limit).
        """
        carnot_limit = 1.0 - (t_cold / t_hot)
        if efficiency > carnot_limit:
            return {
                "status": "REJECTED",
                "law": "SECOND_LAW_OF_THERMODYNAMICS",
                "reason": f"Efficiency ({efficiency}) exceeds Carnot Limit ({carnot_limit})."
            }
        return {"status": "PASSED"}
