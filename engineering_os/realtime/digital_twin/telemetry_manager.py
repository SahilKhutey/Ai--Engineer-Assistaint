from typing import Dict, List, Any
import time
import logging

class TelemetryManager:
    """
    Antigravity OS Telemetry Manager.
    Handles high-speed ingestion, buffering, and routing of physical sensor streams.
    """
    def __init__(self, kernel):
        self.kernel = kernel
        self.sensor_buffer: Dict[str, List[float]] = {}
        self.logger = logging.getLogger("ag_telemetry")

    async def ingest_stream(self, sensor_id: str, value: float):
        """Ingests a single data point from a physical sensor."""
        if sensor_id not in self.sensor_buffer:
            self.sensor_buffer[sensor_id] = []
        
        self.sensor_buffer[sensor_id].append(value)
        # Keep buffer size manageable
        if len(self.sensor_buffer[sensor_id]) > 100:
            self.sensor_buffer[sensor_id].pop(0)

        # Broadcast real-time pulse to the Visualization Layer
        await self.kernel.broadcast_telemetry("SENSOR_PULSE", {
            "id": sensor_id,
            "val": value,
            "ts": time.time()
        })

    def get_latest(self, sensor_id: str) -> float:
        """Retrieves the most recent value for a sensor."""
        return self.sensor_buffer.get(sensor_id, [0.0])[-1]

telemetry_manager = None
