class SustainabilityAgent:
    """
    Expert Agent for Environmental Impact & Lifecycle Analysis (LCA).
    Analyzes the 'Green Engineering' potential and Carbon Footprint of designs.
    """
    def perform_lca(self, assembly_data: dict, material_data: dict):
        """
        Synthesizes an Environmental Impact report for the design.
        """
        print("[SUSTAINABILITY] Performing Lifecycle Assessment (LCA)...")
        
        # 1. Carbon Footprint (Simulated)
        # kgCO2e per kg of material (Aluminum ~12.5, Carbon Fiber ~25)
        mass_kg = assembly_data.get("mass_kg", 0.85)
        carbon_intensity = 12.5 # Aluminum
        total_carbon_kg = mass_kg * carbon_intensity
        
        # 2. Recyclability Index (0.0 - 1.0)
        # Based on mono-material vs hybrid and assembly methods
        recyclability = 0.92 if material_data.get("type") == "Aluminum" else 0.45
        
        return {
            "specialty": "Sustainability & Green Engineering",
            "carbon_footprint_kgCO2e": round(total_carbon_kg, 2),
            "recyclability_index": recyclability,
            "sustainability_status": "HIGH" if recyclability > 0.8 else "MODERATE",
            "design_for_disassembly": "PASS" if recyclability > 0.8 else "FAIL",
            "recommendation": "Maintain Aluminum 6061 mono-material strategy to ensure 90%+ end-of-life recyclability."
        }
