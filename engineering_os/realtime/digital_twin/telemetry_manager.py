from typing import Dict, List, Any
import time
import logging

class TelemetryManager:
    """
    Antigravity OS Telemetry Manager.
    Handles high-speed ingestion, mission recording, and UI-aware aggregation.
    Interfaces directly with the Kernel Memory Pools.
    """
    def __init__(self, kernel):
        self.kernel = kernel
        self.logger = logging.getLogger("ag_telemetry")
        self.recording = False
        self.mission_log: List[Dict[str, Any]] = []

    async def ingest_stream(self, sensor_id: str, value: float):
        """Ingests high-fidelity data and synchronizes with kernel memory."""
        # 1. Store in Kernel Simulation Memory (Circular Buffer)
        await self.kernel.memory.sync_sensor_data(sensor_id, value)
        
        # 2. Mission Recording
        if self.recording:
            self.mission_log.append({
                "id": sensor_id,
                "val": value,
                "ts": time.time()
            })

        # 3. Broadcast real-time pulse (throttled for UI performance if needed)
        await self.kernel.broadcast_telemetry("SENSOR_PULSE", {
            "id": sensor_id,
            "val": value,
            "ts": time.time()
        })

    def start_mission_recording(self):
        """Initiates persistent archival of all telemetry streams."""
        self.recording = True
        self.mission_log = []
        self.logger.info("OS Telemetry: Mission Recording Started.")

    def stop_mission_recording(self) -> List[Dict[str, Any]]:
        """Stops recording and returns the full mission log."""
        self.recording = False
        self.logger.info(f"OS Telemetry: Mission Recording Stopped. Captured {len(self.mission_log)} samples.")
        return self.mission_log

    def get_aggregated_state(self) -> Dict[str, Any]:
        """Returns a snapshot of all active sensors for UI dashboard sync."""
        return {k: list(v)[-1] if v else 0.0 for k, v in self.kernel.memory.simulation_pool.items()}

telemetry_manager = None
