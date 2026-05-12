class CFDSpecialist:
    """
    Expert agent for Computational Fluid Dynamics (CFD) and Aerodynamics.
    Focuses on pressure fields, drag, and flow stability.
    """
    def analyze_aero(self, cfd_results: dict):
        q = cfd_results.get("dynamic_pressure_pa", 0)
        drag = cfd_results.get("drag_n", 0)
        status = cfd_results.get("flow_status", "LAMINAR")
        
        findings = []
        confidence = 0.88
        
        # 1. Flow Stability
        if status == "TURBULENT":
            findings.append("Turbulent flow regime detected. Expect increased drag and acoustic vibration.")
            
        # 2. Pressure Evaluation
        if abs(cfd_results.get("max_suction_pa", 0)) > 500:
            findings.append("Significant suction detected on high-curvature surfaces. Verify skin-attachment integrity.")
            
        # 3. Drag Analysis
        if drag > 50:
            findings.append(f"Aero-drag load ({drag} N) is substantial. Structural load paths must account for lateral drag components.")

        return {
            "specialty": "Aerodynamics (CFD)",
            "findings": findings,
            "confidence": confidence,
            "drag_coefficient_estimate": round(drag / (q * 0.01 + 1e-6), 3) # Approx Cd
        }
