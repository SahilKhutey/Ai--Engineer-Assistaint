class StandardsAgent:
    """
    Expert agent for Regulatory Compliance and Standards Verification.
    Automates code-checking against NASA, ISO, and ASTM standards.
    """
    def verify_compliance(self, analysis_data: dict, requirements: dict):
        compliance_report = []
        is_compliant = True
        
        # 1. NASA-STD-8006 (Structural Design)
        # Requirement: MS = (Yield / (Applied * SF)) - 1 >= 0
        sf = analysis_data.get("structural", {}).get("results", {}).get("safety_factor", 0)
        target_sf = requirements.get("min_sf", 1.5)
        margin_of_safety = (sf / target_sf) - 1.0
        
        nasa_status = "PASSED" if margin_of_safety >= 0 else "FAILED"
        if nasa_status == "FAILED": is_compliant = False
        
        compliance_report.append({
            "code": "NASA-STD-8006",
            "title": "Structural Design & Test Factors",
            "status": nasa_status,
            "metric": f"Margin of Safety (MS): {round(margin_of_safety, 3)}",
            "requirement": f"MS >= 0 (SF Target: {target_sf})"
        })

        # 2. ISO 9001 (Traceability & Quality)
        # Requirement: All assumptions and governing physics must be documented.
        assumptions = analysis_data.get("structural", {}).get("assumptions", [])
        iso_status = "PASSED" if len(assumptions) >= 3 else "FLAGGED"
        
        compliance_report.append({
            "code": "ISO 9001:2015",
            "title": "Quality Management - Traceability",
            "status": iso_status,
            "metric": f"{len(assumptions)} assumptions documented",
            "requirement": "Explicit design traceability"
        })

        # 3. ASTM E8 (Material Verification)
        # Requirement: Material properties must be within standard testing ranges.
        material_yield = analysis_data.get("material", {}).get("yield_strength", 250)
        astm_status = "PASSED" if 200 <= material_yield <= 600 else "WARNING"
        
        compliance_report.append({
            "code": "ASTM E8/E8M",
            "title": "Tension Testing of Metallic Materials",
            "status": astm_status,
            "metric": f"Yield Strength: {material_yield} MPa",
            "requirement": "Property Verification"
        })

        return {
            "specialty": "Compliance & Standards Audit",
            "is_compliant": is_compliant,
            "compliance_report": compliance_report,
            "overall_status": "COMPLIANT" if is_compliant else "NON_COMPLIANT",
            "findings": [
                f"NASA-STD-8006 MS: {round(margin_of_safety, 3)}",
                f"Traceability audit: {iso_status}"
            ]
        }
