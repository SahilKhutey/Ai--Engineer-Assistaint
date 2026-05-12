import random

class ParetoEngine:
    """
    Multi-Objective Optimization Engine.
    Generates a Pareto front of design variants for trade-off analysis.
    Uses heuristic scaling of the base result to explore the design space.
    """
    def generate_variants(self, base_result: dict):
        variants = []
        
        lca = base_result.get('lca', {})
        physics = base_result.get('physics', {})
        
        mass = lca.get('mass_kg', 10.0)
        cost = lca.get('estimated_cost_usd', 100.0)
        sf = physics.get('safety_factor', 2.0)
        co2 = lca.get('co2_footprint_kg', 5.0)

        # 1. Base Design
        variants.append({
            "id": "v_base",
            "name": "Current Design",
            "weight_kg": round(mass, 3),
            "cost_usd": round(cost, 2),
            "safety_factor": round(sf, 2),
            "co2_kg": round(co2, 2),
            "is_selected": True
        })
        
        # 2. High-Safety Variant (Factor: +25% weight, +20% SF)
        variants.append({
            "id": "v_safety",
            "name": "High Safety (+20% SF)",
            "weight_kg": round(mass * 1.25, 3),
            "cost_usd": round(cost * 1.3, 2),
            "safety_factor": round(sf * 1.2, 2),
            "co2_kg": round(co2 * 1.2, 2),
            "is_selected": False
        })
        
        # 3. Low-Cost Variant (Factor: -20% weight, -30% cost, but -25% SF)
        variants.append({
            "id": "v_economy",
            "name": "Economical (Reduced Cost)",
            "weight_kg": round(mass * 0.8, 3),
            "cost_usd": round(cost * 0.7, 2),
            "safety_factor": round(sf * 0.75, 2),
            "co2_kg": round(co2 * 0.85, 2),
            "is_selected": False
        })

        # 4. Sustainable Variant (Factor: -10% weight, +50% cost, -50% CO2)
        variants.append({
            "id": "v_eco",
            "name": "Sustainable (Low CO2)",
            "weight_kg": round(mass * 0.9, 3),
            "cost_usd": round(cost * 1.5, 2),
            "safety_factor": round(sf * 1.1, 2),
            "co2_kg": round(co2 * 0.5, 2),
            "is_selected": False
        })
        
        return variants
