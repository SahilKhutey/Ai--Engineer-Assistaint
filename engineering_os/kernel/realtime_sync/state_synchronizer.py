from typing import Dict, Any
import logging
from .system_bus import system_bus

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
            "xr": {}
        }
        self.logger = logging.getLogger("ag_state_sync")

    async def update_state(self, layer: str, delta: Dict[str, Any]):
        """Updates a specific layer's state and broadcasts the change across the bus."""
        if layer in self.master_state:
            self.master_state[layer].update(delta)
            
            # Publish update to the Master System Bus
            await system_bus.publish(f"STATE_UPDATE:{layer}", delta)
            
            # Mirror to Visualization Layer via Kernel
            await self.kernel.broadcast_telemetry("STATE_SYNC", {
                "layer": layer,
                "delta": delta
            })

    def get_state(self, layer: str = None) -> Dict[str, Any]:
        """Retrieves the current deterministic state."""
        return self.master_state.get(layer, self.master_state) if layer else self.master_state

state_sync = None # Initialized by Kernel
