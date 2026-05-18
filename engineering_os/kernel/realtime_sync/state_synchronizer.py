from typing import Dict, Any
import logging
from engineering_os.kernel.orchestration.system_bus import system_bus

class GlobalStateSynchronizer:
    """
    Antigravity OS Global State Synchronizer.
    Ensures a single, deterministic source of truth across all 11 layers.
    """
    def __init__(self, kernel):
        self.kernel = kernel
        self.master_state: Dict[str, Any] = {
            "physics": {},
            "cognition": {},
            "digital_twin": {},
            "geometry": {},
            "spatial": {},
            "xr": {}
        }
        self.logger = logging.getLogger("ag_state_sync")

    async def update_state(self, layer: str, delta: Dict[str, Any]):
        """Updates a specific layer's state and broadcasts the change across the bus."""
        # Normalize layer to master state structure
        if layer not in self.master_state:
            self.master_state[layer] = {}
            
        self.master_state[layer].update(delta)
        
        # 1. Local System Bus Update (Internal OS Layers)
        await system_bus.publish(f"STATE_UPDATE:{layer}", delta)
        
        # 2. Bridge to Dashboard Telemetry (External UI Layer)
        # Map kernel layers to frontend domain topics
        topic_map = {
            "physics": "TELEMETRY_UPDATE",
            "fluid": "FLUID_UPDATE",
            "structural": "STRUCTURAL_UPDATE",
            "thermal": "THERMAL_UPDATE",
            "spatial": "SPATIAL_UPDATE",
            "geometry": "GEOMETRY_UPDATE",
            "cognition": "REASONING_TRACE",
            "distributed": "DISTRIBUTED_UPDATE",
            "materialization": "MANUFACTURING_UPDATE"
        }
        
        topic = topic_map.get(layer, f"{layer.upper()}_UPDATE")
        await self.kernel.broadcast_telemetry(topic, delta)

    def get_state(self, layer: str = None) -> Dict[str, Any]:
        """Retrieves the current deterministic state."""
        return self.master_state.get(layer, self.master_state) if layer else self.master_state

state_sync = None # Initialized by Kernel
