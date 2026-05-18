import logging
from typing import Dict, Any, Optional, List
import time
from collections import deque

class MemoryManager:
    """
    Antigravity OS Memory Manager.
    Handles specialized memory pools for cognition, simulation, and geometry.
    Ensures deterministic memory access and prevents allocation-related jitter.
    """
    def __init__(self, kernel):
        self.kernel = kernel
        self.logger = logging.getLogger("ag_memory")
        
        # Specialized Memory Pools
        self.geometry_cache: Dict[str, Any] = {}
        self.cognition_pool: Dict[str, List[Dict[str, Any]]] = {} # Reasoning traces
        self.simulation_pool: Dict[str, deque] = {} # Circular buffers for sensor data
        self.task_memory: Dict[str, Any] = {} # Transient memory for active tasks
        
        self.max_buffer_size = 1000 # Configurable

    def reserve_buffer(self, pool_id: str, capacity: int = 100):
        """Pre-allocates a circular buffer for a simulation stream."""
        if pool_id not in self.simulation_pool:
            self.simulation_pool[pool_id] = deque(maxlen=capacity)
            self.logger.info(f"OS Memory: Reserved {capacity} slots for buffer '{pool_id}'")

    def store_geometry(self, geometry_id: str, data: Any):
        """Stores CAD/Mesh geometry in high-speed cache."""
        self.geometry_cache[geometry_id] = {
            "data": data,
            "ts": time.time()
        }
        self.logger.info(f"OS Memory: Geometry {geometry_id} cached.")

    def record_thought(self, session_id: str, thought: Dict[str, Any]):
        """Persists a reasoning step into the Cognition Memory Pool."""
        if session_id not in self.cognition_pool:
            self.cognition_pool[session_id] = []
        self.cognition_pool[session_id].append({
            "thought": thought,
            "ts": time.time()
        })
        self.logger.debug(f"OS Memory: Thought persisted for session {session_id}")

    async def sync_sensor_data(self, sensor_id: str, value: float):
        """Synchronizes high-frequency sensor data with the simulation pool."""
        if sensor_id not in self.simulation_pool:
            self.reserve_buffer(sensor_id)
        
        self.simulation_pool[sensor_id].append(value)
        
        # Mirror to kernel state for global visibility
        await self.kernel.state.update_state("digital_twin", {
            "sensor": sensor_id,
            "val": value
        })

    def get_cognition_trace(self, session_id: str) -> List[Dict[str, Any]]:
        """Retrieves the full reasoning trace for a mission session."""
        return self.cognition_pool.get(session_id, [])

    def purge_stale_data(self, older_than: int = 3600):
        """Automatic garbage collection for sovereign memory pools."""
        now = time.time()
        # Clean geometry
        self.geometry_cache = {k: v for k, v in self.geometry_cache.items() if now - v["ts"] < older_than}
        self.logger.info("OS Memory: Stale cache purged.")

memory_manager = None # Initialized by Kernel
