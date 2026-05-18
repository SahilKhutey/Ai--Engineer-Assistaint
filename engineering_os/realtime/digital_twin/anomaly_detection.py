from typing import Dict, Any, List
import logging
import numpy as np
import time

class AnomalyDetectionEngine:
    """
    Antigravity OS Anomaly Detection Engine.
    Monitors the simulation memory pool for statistical deviations and resonance.
    Provides real-time interrupts to the kernel for physical integrity.
    """
    def __init__(self, kernel):
        self.kernel = kernel
        self.logger = logging.getLogger("ag_anomaly")
        self.sensitivity = 3.5 # Standard deviations for anomaly trigger
        self.anomaly_count = 0

    async def monitor_stream(self, sensor_id: str):
        """Monitors a specific kernel memory buffer for statistical anomalies."""
        buffer = self.kernel.memory.simulation_pool.get(sensor_id)
        if not buffer or len(buffer) < 20:
            return

        data = list(buffer)
        mean = np.mean(data)
        std = np.std(data)
        latest = data[-1]

        # 1. Z-Score Analysis (Statistical Anomaly)
        z_score = abs(latest - mean) / std if std > 0 else 0
        
        if z_score > self.sensitivity:
            await self._trigger_anomaly(sensor_id, latest, mean, z_score)

    async def _trigger_anomaly(self, sensor_id: str, val: float, mean: float, z_score: float):
        """Triggers a kernel-level anomaly event and optional interrupt."""
        self.anomaly_count += 1
        self.logger.warning(f"OS Anomaly: Deviation detected in {sensor_id} (Z-Score: {z_score:.2f})")
        
        # Broadcast to UI
        await self.kernel.broadcast_telemetry("SYSTEM_ALERT", {
            "level": "CRITICAL" if z_score > 5.0 else "WARNING",
            "message": f"Physical anomaly detected in {sensor_id}: {val:.4f} (Mean: {mean:.4f})",
            "metadata": {"z_score": z_score, "sensor_id": sensor_id}
        })

        # MISSION_ABORT Trigger for extreme deviations
        if z_score > 10.0:
            self.logger.error(f"OS Anomaly: Catastrophic divergence in {sensor_id}. Signalling MISSION_ABORT.")
            await self.kernel.broadcast_telemetry("MISSION_ABORT", {
                "reason": "CATASTROPHIC_ANOMALY",
                "source": sensor_id,
                "confidence": 0.999
            })

    async def check_twin_divergence(self, observed: float, simulated: float):
        """Detects divergence between physical reality and digital twin prediction."""
        error = abs(observed - simulated)
        if error > 0.15: # 15% tolerance
            await self.kernel.broadcast_telemetry("TWIN_DIVERGENCE", {
                "error": error,
                "status": "DIVERGED"
            })

anomaly_detection = None # Initialized by Digital Twin Manager
