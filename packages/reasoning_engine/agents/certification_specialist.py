class CertificationSpecialist:
    """
    Expert agent for rule compliance, safety factors, and engineering standards.
    """
    def evaluate_compliance(self, structural_risks: list, physics_results: dict):
        sf = physics_results.get("safety_factor", 0)
        
        compliance_status = "CERTIFIED" if sf >= 1.5 and not structural_risks else "REJECTED"
        
        reasons = []
        for risk in structural_risks:
            reasons.append(f"Violation of {risk.get('rule')}: {risk.get('message')}")
            
        if sf < 1.5:
            reasons.append(f"Safety Factor {sf} is below mandatory 1.5 threshold.")

        return {
            "specialty": "Compliance & Certification",
            "status": compliance_status,
            "violations": reasons,
            "standards_referenced": ["AISC 360", "Eurocode 3"]
        }
