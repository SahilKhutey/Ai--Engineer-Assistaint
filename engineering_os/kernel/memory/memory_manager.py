import logging
from typing import Dict, Any, Optional
import time

class MemoryManager:
    """
    Antigravity OS Memory Manager.
    Handles geometry cache, simulation state, and realtime synchronization memory.
    """
    def __init__(self):
        self.cache: Dict[str, Any] = {}
        self.simulation_states: Dict[str, Any] = {}
        self.geometry_registry: Dict[str, Any] = {}
        self.logger = logging.getLogger("ag_memory")

    def store_geometry(self, geometry_id: str, data: Any):
        """Stores CAD/Mesh geometry in high-speed memory cache."""
        self.geometry_registry[geometry_id] = {
            "data": data,
            "ts": time.time()
        }
        self.logger.info(f"OS Memory: Geometry {geometry_id} cached.")

    def get_geometry(self, geometry_id: str) -> Optional[Any]:
        """Retrieves geometry data from cache."""
        return self.geometry_registry.get(geometry_id, {}).get("data")

    def sync_state(self, state_id: str, state_data: Dict[str, Any]):
        """Synchronizes simulation state across OS kernels."""
        self.simulation_states[state_id] = state_data
        self.logger.debug(f"OS Memory: State {state_id} synchronized.")

    def purge_cache(self, older_than_seconds: int = 3600):
        """Cleans up old memory entries."""
        now = time.time()
        keys_to_remove = [k for k, v in self.geometry_registry.items() if now - v["ts"] > older_than_seconds]
        for k in keys_to_remove:
            del self.geometry_registry[k]
        self.logger.info(f"OS Memory: Purged {len(keys_to_remove)} stale entries.")

memory_manager = MemoryManager()
