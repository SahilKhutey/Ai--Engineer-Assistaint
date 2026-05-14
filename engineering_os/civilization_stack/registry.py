import logging
from typing import Dict, Any, List

class NodeRegistry:
    """
    Engineering OS Sovereign Node Registry.
    Tracks and validates every industrial, scientific, and cognitive node in the engineering civilization.
    """
    def __init__(self):
        self.nodes: Dict[str, Dict[str, Any]] = {}
        self.logger = logging.getLogger("engos_registry")

    def register_node(self, node_id: str, node_type: str, region: str):
        """Registers a new civilization node (e.g., Fabrication Hub, Research Center)."""
        self.nodes[node_id] = {
            "type": node_type,
            "region": region,
            "status": "ONLINE",
            "trust_score": 1.0
        }
        self.logger.info(f"Registry: Node {node_id} ({node_type}) registered in {region}.")

    def get_regional_capacity(self, region: str) -> Dict[str, int]:
        """Calculates total engineering and compute capacity for a specific region."""
        capacity = {"compute": 0, "fabrication": 0, "research": 0}
        for node in self.nodes.values():
            if node["region"] == region:
                if node["type"] == "COMPUTE": capacity["compute"] += 1
                elif node["type"] == "FABRICATION": capacity["fabrication"] += 1
                elif node["type"] == "RESEARCH": capacity["research"] += 1
        return capacity

node_registry = NodeRegistry()
