class ManufacturingSpecialist:
    """
    Expert agent for Design for Manufacturing (DFM), CNC planning, and Additive Manufacturing.
    Ensures engineering designs are physically producible.
    """
    def analyze_manufacturability(self, geometry_features: dict):
        thickness = geometry_features.get("wall_thickness_mm", 0)
        hole_count = geometry_features.get("hole_count", 0)
        is_cantilever = geometry_features.get("is_cantilever", False)
        
        findings = []
        feasibility_score = 1.0 # Start perfect
        
        # 1. Additive Manufacturing (3D Printing) Constraints
        if thickness < 1.0:
            findings.append("Critical DFM Alert: Wall thickness below 1.0mm is high-risk for most powder-bed and FDM processes.")
            feasibility_score -= 0.4
        
        # 2. CNC Machining Constraints
        if hole_count > 10:
            findings.append("CNC Complexity Warning: High hole density increases tool-change overhead and manufacturing cost.")
            feasibility_score -= 0.1
            
        # 3. Structural Stability during Manufacturing
        if is_cantilever:
            findings.append("Manufacturing Stability: Long cantilever members may require internal supports during 3D printing to prevent warping.")

        return {
            "specialty": "Manufacturing Intelligence",
            "feasibility_score": round(feasibility_score, 2),
            "findings": findings,
            "processes_recommended": ["SLS (Selective Laser Sintering)", "5-Axis CNC"] if feasibility_score > 0.7 else ["Redesign Required"]
        }
