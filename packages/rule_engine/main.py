from typing import List, Dict

class RuleEngine:
    """
    Deterministic engineering rule engine to prevent hallucinations.
    Implements physical constraints for the Engineering Intelligence Loop.
    """

    @staticmethod
    def evaluate_structural_rules(features: dict, physics_results: dict) -> List[Dict]:
        risks = []
        
        # 1. Rule: Thin Wall Warning
        est_thickness = features.get("wall_thickness_mm", 0)
        if 0 < est_thickness < 1.5:
            risks.append({
                "rule": "THIN_WALL_CRITICAL",
                "severity": "high",
                "message": f"Critical wall thickness detected ({est_thickness:.2f}mm). High risk of structural failure or manufacturing defects.",
                "recommendation": "Increase wall thickness to at least 2.5mm for load-bearing brackets."
            })
        elif 1.5 <= est_thickness < 3.0:
            risks.append({
                "rule": "THIN_WALL_WARNING",
                "severity": "medium",
                "message": f"Marginal wall thickness ({est_thickness:.2f}mm).",
                "recommendation": "Ensure rib reinforcements are added to prevent buckling."
            })

        # 2. Rule: High Aspect Ratio (Slenderness)
        dims = features.get("bounding_box", {})
        if dims.get("max_span", 0) > 0 and est_thickness > 0:
            aspect_ratio = dims.get("max_span") / est_thickness
            if aspect_ratio > 20:
                risks.append({
                    "rule": "SLENDER_MEMBER_RISK",
                    "severity": "high",
                    "message": f"High aspect ratio ({aspect_ratio:.1f}) detected. Member is prone to excessive deflection or bending.",
                    "recommendation": "Shorten the unsupported span or increase the moment of inertia."
                })

        # 3. Rule: Stress Concentration (Holes)
        if features.get("hole_count", 0) > 0:
            risks.append({
                "rule": "STRESS_CONCENTRATION_FACTOR",
                "severity": "medium",
                "message": f"{features.get('hole_count')} holes detected. These act as stress risers (Kt factor 2.0-3.0).",
                "recommendation": "Add fillets around hole edges and ensure sufficient material margin."
            })

        # 4. Rule: Low Factor of Safety
        sf = physics_results.get("safety_factor", 0)
        if sf < 1.5:
             risks.append({
                "rule": "LOW_SAFETY_MARGIN",
                "severity": "high",
                "message": f"Safety Factor ({sf:.2f}) is below the engineering requirement of 1.5.",
                "recommendation": "Reinforce critical cross-sections or use a higher-strength material."
            })

        return risks

    @staticmethod
    def evaluate_manufacturing_rules(features: dict) -> List[Dict]:
        risks = []
        # Placeholder for manufacturing (e.g. 3D printing overhangs)
        return risks

    @staticmethod
    def evaluate_material_rules(material: dict, physics_results: dict) -> List[Dict]:
        risks = []
        return risks
