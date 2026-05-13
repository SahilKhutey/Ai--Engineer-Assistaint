import networkx as nx

class SystemDependencyGraph:
    """
    Cognitive engine for Systems-First Design.
    Models interactions, dependencies, and emergent behaviors across subsystems.
    """
    def __init__(self):
        self.graph = nx.DiGraph()

    def add_dependency(self, source: str, target: str, relationship: dict):
        """
        Defines how one subsystem affects another.
        Example: Wing Geometry -> Aerodynamics (Coupling: High)
        """
        self.graph.add_edge(source, target, **relationship)

    def analyze_emergent_impact(self, change_subsystem: str):
        """
        Analyzes how a change in one component ripples through the entire system.
        """
        impacted_nodes = list(nx.descendants(self.graph, change_subsystem))
        print(f"[SYSTEMS-FIRST] Change in {change_subsystem} ripples to: {impacted_nodes}")
        
        cascading_effects = []
        for node in impacted_nodes:
            edge_data = self.graph.get_edge_data(change_subsystem, node)
            cascading_effects.append({
                "subsystem": node,
                "relationship": edge_data
            })
            
        return cascading_effects

    def find_critical_paths(self):
        """
        Identifies high-dependency subsystems that are critical for mission success.
        """
        centrality = nx.degree_centrality(self.graph)
        return sorted(centrality.items(), key=lambda x: x[1], reverse=True)
