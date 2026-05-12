from typing import List, Dict

class RuleEngine:
    """
    Deterministic engineering rule engine to prevent hallucinations.
    Implements Working.md Section 7.
    """

    @staticmethod
    def evaluate_structural_rules(geometry_features: dict, physics_results: dict) -> List[Dict]:
        risks = []
        
        # Rule: Thin Wall Warning
        est_thickness = geometry_features.get("structural", {}).get("est_wall_thickness_mm", 0)
        if 0 < est_thickness < 3.0:
            risks.append({
                "rule": "thin_wall_warning",
                "severity": "high" if est_thickness < 2.0 else "medium",
                "message": f"Low wall thickness detected ({est_thickness:.2f}mm). High risk of buckling or local deformation.",
                "recommendation": "Increase wall thickness to at least 4mm in load-bearing regions."
            })

        # Rule: Cantilever Aspect Ratio
        dims = geometry_features.get("dimensions_mm", {})
        if dims.get("max", 0) > 0 and est_thickness > 0:
            aspect_ratio = dims.get("max") / est_thickness
            if aspect_ratio > 15:
                risks.append({
                    "rule": "cantilever_aspect_ratio",
                    "severity": "high",
                    "message": f"High aspect ratio ({aspect_ratio:.1f}) suggests a slender cantilever structure.",
                    "recommendation": "Add support gussets or ribs to improve lateral stiffness."
                })

        # Rule: Buckling Risk
        if physics_results.get("buckling_risk") == "high":
            risks.append({
                "rule": "buckling_instability",
                "severity": "high",
                "message": "High risk of Euler buckling detected. The compressive load exceeds critical limits.",
                "recommendation": "Increase moment of inertia (cross-section) or reduce the unsupported length."
            })

        # Rule: Shear Failure
        shear_mpa = physics_results.get("shear_stress_mpa", 0)
        if shear_mpa > 30: # 30MPa threshold for general plastics/metals safety
            risks.append({
                "rule": "shear_failure_risk",
                "severity": "medium",
                "message": f"Significant shear stress detected ({shear_mpa:.1f} MPa).",
                "recommendation": "Check fastener shear strength and increase cross-sectional area."
            })

        # Rule: Stress Concentration (Holes)
        if geometry_features.get("structural", {}).get("has_holes"):
            risks.append({
                "rule": "stress_concentration_holes",
                "severity": "medium",
                "message": "Topological holes detected. These act as stress concentrators under cyclic or heavy load.",
                "recommendation": "Add fillets around hole edges and increase surrounding wall thickness."
            })

        return risks

    @staticmethod
    def evaluate_manufacturing_rules(geometry_features: dict) -> List[Dict]:
        risks = []
        overhang = geometry_features.get("manufacturing", {}).get("overhang_ratio", 0)
        
        if overhang > 0.4:
            risks.append({
                "rule": "printability_overhang",
                "severity": "medium",
                "message": f"High overhang ratio ({overhang*100:.1f}%) detected.",
                "recommendation": "Design for 3D printing requires internal supports or 45-degree chamfers."
            })
            
        return risks

    @staticmethod
    def evaluate_material_rules(material: dict, physics_results: dict) -> List[Dict]:
        risks = []
        # Rule: Material Creep (CoreFeatures.md Section 8.4)
        if material.get("id") == "pla" and physics_results.get("max_stress_mpa", 0) > 5.0:
            risks.append({
                "rule": "pla_creep_risk",
                "severity": "medium",
                "message": "PLA under sustained load is prone to mechanical creep (deformation over time).",
                "recommendation": "Consider PETG or Aluminum for long-term structural applications."
            })
        return risks
