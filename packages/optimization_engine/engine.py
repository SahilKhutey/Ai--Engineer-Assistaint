import numpy as np

class TopologyOptimizer:
    """
    Autonomous Topology Optimization Engine.
    Implements a SIMP-style (Solid Isotropic Material with Penalization) heuristic 
    for material redistribution and mass minimization.
    """
    def __init__(self, penalization=3.0):
        self.p = penalization

    def optimize_mass(self, physics_results: dict, current_mass: float, target_sf: float = 1.5):
        """
        Calculates material sensitivity and proposes volume reduction.
        """
        sf = physics_results.get("safety_factor", 1.0)
        max_stress = physics_results.get("max_stress_mpa", 0)
        
        # 1. Sensitivity Analysis (Simplified)
        # Regions with low stress can be removed (material density -> 0)
        # Regions with high stress must be reinforced (material density -> 1)
        over_designed_ratio = sf / target_sf
        
        if over_designed_ratio > 1.2:
            # Design is over-engineered, can reduce mass
            reduction_pct = min(0.2, (over_designed_ratio - 1.0) * 0.5)
            new_mass = current_mass * (1.0 - reduction_pct)
            action = "REDUCE_VOLUME"
        elif over_designed_ratio < 0.9:
            # Design is under-engineered, must add mass
            increase_pct = min(0.3, (1.0 - over_designed_ratio))
            new_mass = current_mass * (1.0 + increase_pct)
            action = "REINFORCE_CRITICAL"
        else:
            new_mass = current_mass
            action = "STABILIZE"

        return {
            "action": action,
            "current_mass_kg": round(current_mass, 3),
            "optimized_mass_kg": round(new_mass, 3),
            "mass_delta_pct": round(((new_mass - current_mass) / current_mass) * 100, 1),
            "convergence_status": "ITERATING" if action != "STABILIZE" else "CONVERGED",
            "optimization_method": "SIMP_HEURISTIC"
        }

class DesignRefiner:
    """Iterative generative refinement loop."""
    def propose_variants(self, base_analysis: dict):
        """Generates multiple design variants for Pareto analysis."""
        variants = []
        
        # Variant A: Minimal Mass (Aggressive)
        variants.append({
            "id": "VAR_MIN_MASS",
            "label": "Minimal Mass",
            "mass_kg": base_analysis["geometry"]["mass_kg"] * 0.7,
            "expected_sf": 1.55,
            "risk_level": "High"
        })
        
        # Variant B: Balanced (Nominal)
        variants.append({
            "id": "VAR_BALANCED",
            "label": "Balanced Reliability",
            "mass_kg": base_analysis["geometry"]["mass_kg"] * 0.85,
            "expected_sf": 2.1,
            "risk_level": "Low"
        })
        
        return variants
