class MaterialEngine:
    """
    Material Intelligence & LCA Engine.
    Provides mechanical properties and environmental impact data.
    """
    def __init__(self):
        self.materials = {
            "structural_steel": {
                "name": "Structural Steel (A36)",
                "youngs_modulus_pa": 200e9,
                "poissons_ratio": 0.30,
                "yield_strength_mpa": 250,
                "density_kg_m3": 7850,
                "co2_per_kg": 1.85,
                "cost_per_kg": 0.85,
                "cte_per_c": 12e-6,
                "thermal_conductivity_w_mk": 50
            },
            "aluminum_6061": {
                "name": "Aluminum 6061-T6",
                "youngs_modulus_pa": 69e9,
                "poissons_ratio": 0.33,
                "yield_strength_mpa": 240,
                "density_kg_m3": 2700,
                "co2_per_kg": 12.5,
                "cost_per_kg": 2.50,
                "cte_per_c": 23e-6,
                "thermal_conductivity_w_mk": 167
            },
            "titanium_grade_5": {
                "name": "Titanium Ti-6Al-4V",
                "youngs_modulus_pa": 114e9,
                "poissons_ratio": 0.34,
                "yield_strength_mpa": 880,
                "density_kg_m3": 4430,
                "co2_per_kg": 35.0,
                "cost_per_kg": 30.0,
                "cte_per_c": 8.6e-6,
                "thermal_conductivity_w_mk": 6.7
            },
            "carbon_fiber_composite": {
                "name": "Carbon Fiber / Epoxy",
                "youngs_modulus_pa": 135e9,
                "poissons_ratio": 0.25,
                "yield_strength_mpa": 600,
                "density_kg_m3": 1600,
                "co2_per_kg": 20.0,
                "cost_per_kg": 50.0,
                "cte_per_c": 2.0e-6,
                "thermal_conductivity_w_mk": 5.0
            }
        }

    def get_material(self, material_id: str):
        return self.materials.get(material_id, self.materials["structural_steel"])

    def calculate_lca(self, material_id: str, volume_mm3: float):
        material = self.get_material(material_id)
        volume_m3 = volume_mm3 / (1000**3)
        mass_kg = volume_m3 * material["density_kg_m3"]
        
        return {
            "mass_kg": float(mass_kg),
            "co2_footprint_kg": float(mass_kg * material["co2_per_kg"]),
            "estimated_cost_usd": float(mass_kg * material["cost_per_kg"])
        }
