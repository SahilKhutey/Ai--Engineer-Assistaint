class CollaborationAgent:
    """
    Expert Agent for Design Peer Review & Team Moderation.
    Acts as a 'Senior Reviewer' for collaborative engineering design changes.
    """
    def review_checkpoint(self, current_checkpoint: dict, previous_checkpoint: dict):
        """
        Reviews a new design checkpoint against the previous state.
        Identifies regressions, improvements, and critical changes.
        """
        diff_report = []
        
        # 1. Structural Margin Delta
        curr_sf = current_checkpoint.get("synthesis", {}).get("reports", {}).get("structural", {}).get("results", {}).get("safety_factor", 0)
        prev_sf = previous_checkpoint.get("synthesis", {}).get("reports", {}).get("structural", {}).get("results", {}).get("safety_factor", 0)
        
        sf_delta = curr_sf - prev_sf
        if sf_delta < -0.1:
            diff_report.append({
                "type": "REGRESSION",
                "severity": "HIGH",
                "finding": f"Safety Factor reduced from {prev_sf} to {curr_sf}. Design integrity decreased.",
                "action": "FLAG_FOR_SENIOR_SIGN_OFF"
            })
        elif sf_delta > 0.1:
            diff_report.append({
                "type": "IMPROVEMENT",
                "severity": "LOW",
                "finding": f"Structural margin improved by {round(sf_delta, 2)}. Optimization successful."
            })

        # 2. Compliance Delta
        curr_status = current_checkpoint.get("status")
        prev_status = previous_checkpoint.get("status")
        
        if curr_status != prev_status:
            diff_report.append({
                "type": "COMPLIANCE_CHANGE",
                "severity": "CRITICAL",
                "finding": f"Compliance status shifted from {prev_status} to {curr_status}.",
                "action": "MANDATORY_REGULATORY_REVIEW"
            })

        # 3. Conflict Detection (Simulated)
        # Checking if 'author' is different and 'constraints' were modified
        if current_checkpoint.get("author") != previous_checkpoint.get("author"):
            diff_report.append({
                "type": "COLLABORATION_NOTE",
                "severity": "INFO",
                "finding": f"Cross-author modification detected. Design ownership transition: {previous_checkpoint['author']} -> {current_checkpoint['author']}."
            })

        return {
            "specialty": "Design Peer Review",
            "diff_report": diff_report,
            "can_auto_merge": len([r for r in diff_report if r["severity"] == "HIGH"]) == 0,
            "summary": f"Review complete. {len(diff_report)} changes identified."
        }
