import networkx as nx

class OntologyEngine:
    """
    Engineering Knowledge Graph & Ontology Engine.
    Maps relationships between materials, codes, and components.
    """
    def __init__(self):
        self.graph = nx.DiGraph()
        self._initialize_ontology()

    def _initialize_ontology(self):
        # Materials
        self.graph.add_node("Structural Steel", type="material", stiffness="high", cost="low")
        self.graph.add_node("Aluminum 6061", type="material", stiffness="medium", cost="medium")
        self.graph.add_node("Titanium", type="material", stiffness="high", cost="high")
        
        # Standards
        self.graph.add_node("AISC 360", type="standard", category="steel_design")
        self.graph.add_node("ADM 2020", type="standard", category="aluminum_design")
        self.graph.add_node("Eurocode 3", type="standard", category="steel_design")
        
        # Relationships
        self.graph.add_edge("Structural Steel", "AISC 360", relation="governed_by")
        self.graph.add_edge("Structural Steel", "Eurocode 3", relation="governed_by")
        self.graph.add_edge("Aluminum 6061", "ADM 2020", relation="governed_by")
        
        # Alternatives
        self.graph.add_edge("Structural Steel", "Aluminum 6061", relation="alternative_for_weight")
        self.graph.add_edge("Aluminum 6061", "Titanium", relation="alternative_for_strength")

    def get_related_knowledge(self, concept: str):
        """
        Performs a graph walk to find related engineering concepts.
        """
        if concept not in self.graph:
            # Try to find best match
            for node in self.graph.nodes:
                if concept.lower() in node.lower():
                    concept = node
                    break
            else:
                return []

        neighbors = list(self.graph.neighbors(concept))
        knowledge = []
        for n in neighbors:
            edge_data = self.graph.get_edge_data(concept, n)
            knowledge.append(f"{n} ({edge_data['relation']})")
            
        return knowledge

    def get_ontology_context(self, material_name: str):
        related = self.get_related_knowledge(material_name)
        if not related:
            return ""
        
        return f"Engineering Ontology: {material_name} is related to {', '.join(related)}."
