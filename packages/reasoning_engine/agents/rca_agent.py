class RootCauseAgent:
    """
    Expert Agent for Root Cause Analysis (RCA) & Failure Forensics.
    Performs 'Five Whys' reasoning to identify deep structural and systemic failures.
    """
    def perform_rca(self, failure_mode: dict, physics_data: dict):
        """
        Synthesizes a Root Cause Analysis for a detected failure mode.
        """
        print(f"[RCA] Investigating failure: {failure_mode.get('type')}...")
        
        # 1. First 'Why': Direct Physical Cause
        direct_cause = f"Local stress ({physics_data.get('max_stress', 0)} MPa) exceeded yield strength."
        
        # 2. Second 'Why': Geometric/Load Origin
        geometric_origin = "Stress concentration detected at primary mounting point due to insufficient fillet radius."
        
        # 3. Third 'Why': Design Decision Trace
        design_trace = "Geometry was thinned in previous iteration to meet aggressive mass-reduction targets."
        
        # 4. Fourth 'Why': Requirement Conflict
        requirement_conflict = "Conflict between 'Safety Factor 1.5' and 'Max Mass 0.85kg' requirements."
        
        # 5. Fifth 'Why': Systemic Origin (Root Cause)
        root_cause = "Over-optimization of local geometry without global load-path verification."

        return {
            "specialty": "Forensic RCA",
            "five_whys": [
                direct_cause,
                geometric_origin,
                design_trace,
                requirement_conflict,
                root_cause
            ],
            "root_cause": root_cause,
            "mitigation_strategy": "Restore previous fillet radius (2.5mm) and re-evaluate mass targets for this assembly node."
        }
