from ...engineering_rag.knowledge_graph import EngineeringKnowledgeGraph

class SystemsSpecialist:
    """
    Expert agent for Systems Engineering, Interface Control, and Reliability.
    Analyzes multi-component assemblies and failure propagation using Graph-Based Reasoning.
    """
    def __init__(self):
        self.kb_graph = EngineeringKnowledgeGraph()

    def analyze_system(self, cert_status: str, safety_factor: float, material: str = "Aluminum 6061"):
        """
        Analyzes the global health of the system and identifies deep tradeoffs via Knowledge Graph.
        """
        graph_impacts = self.kb_graph.reason_tradeoffs(material)
        findings = []
        
        if cert_status == "REJECTED":
            findings.append("Critical System Failure: Primary component rejected. Subsystem isolation required.")
        if safety_factor < 1.2:
            findings.append("System Redundancy Warning: Safety margin is below critical threshold for non-redundant load paths.")
            
        # Integrate Graph Insights
        for impact in graph_impacts.get("direct_impacts", []):
            findings.append(f"SYSTEM_TRADEOFF: {material} {impact['impact']} {impact['physics']} (Magnitude: {impact['magnitude']})")

        return {
            "specialty": "Systems Engineering",
            "findings": findings,
            "system_status": "DEGRADED" if safety_factor < 1.5 else "HEALTHY",
            "graph_reasoning": graph_impacts
        }

    def analyze_interfaces(self, assembly_graph: dict):
        """
        Validates mechanical and electrical interfaces between components.
        """
        interfaces = assembly_graph.get("interfaces", [])
        findings = []
        mismatches = []
        
        for interface in interfaces:
            comp_a = interface.get("source")
            comp_b = interface.get("target")
            type_a = interface.get("source_type")
            type_b = interface.get("target_type")
            
            if type_a != type_b:
                mismatches.append(f"Interface Mismatch: {comp_a} ({type_a}) -> {comp_b} ({type_b})")
        
        if mismatches:
            findings.extend(mismatches)
            findings.append("Action Required: Rectify connector types to ensure system-level continuity.")
        else:
            findings.append("All subsystem interfaces validated and matched.")

        return {
            "specialty": "Interface Control (ICD)",
            "findings": findings,
            "status": "PASS" if not mismatches else "FAIL",
            "mismatch_count": len(mismatches)
        }
