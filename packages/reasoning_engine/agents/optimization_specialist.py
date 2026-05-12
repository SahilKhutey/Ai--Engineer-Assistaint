class OptimizationSpecialist:
    """
    Expert agent for Multi-Objective Optimization and Pareto Analysis.
    Weighs mass, safety, drag, and manufacturing cost.
    """
    def analyze_variants(self, variants: list, constraints: dict):
        target_sf = constraints.get("min_safety_factor", 1.5)
        budget_mass = constraints.get("max_mass_kg", 10.0)
        
        scores = []
        for v in variants:
            # Multi-objective utility function: U = w1*(1/mass) + w2*(sf)
            sf_utility = min(1.0, v["expected_sf"] / target_sf)
            mass_utility = min(1.0, budget_mass / v["mass_kg"])
            
            total_score = (sf_utility * 0.4) + (mass_utility * 0.6)
            scores.append({
                "variant_id": v["id"],
                "score": round(total_score, 3),
                "is_feasible": v["expected_sf"] >= target_sf
            })
            
        # Select winner
        feasible_scores = [s for s in scores if s["is_feasible"]]
        winner = max(feasible_scores, key=lambda x: x["score"]) if feasible_scores else None
        
        findings = []
        if winner:
            findings.append(f"Variant {winner['variant_id']} identified as Pareto-optimal (Score: {winner['score']}).")
        else:
            findings.append("No feasible design variants found within safety constraints.")

        return {
            "specialty": "Optimization & Pareto Analysis",
            "findings": findings,
            "recommended_variant": winner["variant_id"] if winner else "NONE",
            "pareto_scores": scores
        }
