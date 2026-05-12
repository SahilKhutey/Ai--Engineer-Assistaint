import networkx as nx

class EngineeringKnowledgeGraph:
    """
    Graph-Based Reasoning Engine for Engineering Principles.
    Maps relationships between Materials, Physics, and Failure Modes.
    """
    def __init__(self):
        self.graph = nx.DiGraph()
        self._initialize_core_knowledge()

    def _initialize_core_knowledge(self):
        # Material Nodes
        self.graph.add_node("Aluminum 6061", type="Material", properties={"yield": 240, "thermal_k": 167})
        self.graph.add_node("Carbon Fiber", type="Material", properties={"yield": 600, "thermal_k": 5})
        
        # Physics Nodes
        self.graph.add_node("Mass", type="Physics")
        self.graph.add_node("Rigidity", type="Physics")
        self.graph.add_node("Thermal Dissipation", type="Physics")
        
        # Relationships (Tradeoffs)
        self.graph.add_edge("Carbon Fiber", "Mass", relation="REDUCES", weight=0.6)
        self.graph.add_edge("Carbon Fiber", "Rigidity", relation="INCREASES", weight=0.8)
        self.graph.add_edge("Carbon Fiber", "Thermal Dissipation", relation="DEGRADES", weight=0.9)
        
        self.graph.add_edge("Aluminum 6061", "Thermal Dissipation", relation="IMPROVES", weight=0.7)
        self.graph.add_edge("Aluminum 6061", "Mass", relation="INCREASES", weight=0.4)

    def reason_tradeoffs(self, target_material: str):
        """
        Discovers first and second-order impacts of a design decision.
        """
        if target_material not in self.graph:
            return {"error": "Material unknown in knowledge graph."}
            
        impacts = []
        for neighbor in self.graph.neighbors(target_material):
            edge_data = self.graph.get_edge_data(target_material, neighbor)
            impacts.append({
                "physics": neighbor,
                "impact": edge_data["relation"],
                "magnitude": edge_data["weight"]
            })
            
        return {
            "source": target_material,
            "direct_impacts": impacts,
            "reasoning": f"Based on the Knowledge Graph, switching to {target_material} will primarily {impacts[0]['impact']} {impacts[0]['physics']}."
        }
