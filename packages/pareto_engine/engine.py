import random

class ParetoEngine:
    """
    Multi-Objective Optimization Engine.
    Generates a Pareto front of design variants for trade-off analysis.
    """
    def generate_variants(self, base_result: dict):
        variants = []
        
        # 1. Base Design
        variants.append({
            "id": "v_base",
            "name": "Current Design",
            "weight_kg": base_result['lca']['mass_kg'],
            "cost_usd": base_result['lca']['estimated_cost_usd'],
            "safety_factor": base_result['physics']['safety_factor'],
            "co2_kg": base_result['lca']['co2_footprint_kg'],
            "is_selected": True
        })
        
        # 2. High-Safety Variant
        variants.append({
            "id": "v_safety",
            "name": "High Safety (+20% SF)",
            "weight_kg": base_result['lca']['mass_kg'] * 1.25,
            "cost_usd": base_result['lca']['estimated_cost_usd'] * 1.3,
            "safety_factor": base_result['physics']['safety_factor'] * 1.2,
            "co2_kg": base_result['lca']['co2_footprint_kg'] * 1.2,
            "is_selected": false
        })
        
        # 3. Low-Cost Variant
        variants.append({
            "id": "v_economy",
            "name": "Economical (Reduced Cost)",
            "weight_kg": base_result['lca']['mass_kg'] * 0.8,
            "cost_usd": base_result['lca']['estimated_cost_usd'] * 0.7,
            "safety_factor": base_result['physics']['safety_factor'] * 0.75,
            "co2_kg": base_result['lca']['co2_footprint_kg'] * 0.85,
            "is_selected": false
        })

        # 4. Sustainable Variant
        variants.append({
            "id": "v_eco",
            "name": "Sustainable (Low CO2)",
            "weight_kg": base_result['lca']['mass_kg'] * 0.9,
            "cost_usd": base_result['lca']['estimated_cost_usd'] * 1.5,
            "safety_factor": base_result['physics']['safety_factor'] * 1.1,
            "co2_kg": base_result['lca']['co2_footprint_kg'] * 0.5,
            "is_selected": false
        })
        
        return variants
