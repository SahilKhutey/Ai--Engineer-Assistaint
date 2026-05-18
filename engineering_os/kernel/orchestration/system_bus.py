from typing import Dict, Any, Callable, List
import logging
import asyncio
import redis.asyncio as redis
import json
import os

class MasterSystemBus:
    """
    Antigravity OS Master System Bus.
    Provides a low-latency, high-throughput communication backplane.
    Automatically bridges mission-critical telemetry to Redis for UI consumption.
    """
    def __init__(self):
        self.subscribers: Dict[str, List[Callable]] = {}
        self.logger = logging.getLogger("ag_system_bus")
        
        # Redis Bridge for Dashboard Telemetry
        self.redis_url = os.getenv("REDIS_URL", "redis://localhost:6379/0")
        self.r = None
        self.mirrored_topics = {
            "REASONING_TRACE", 
            "SENSOR_PULSE", 
            "STATUS_UPDATE", 
            "VALIDATION_REPORT",
            "SECURITY_ALERT",
            "GOVERNANCE_UPDATE",
            "TELEMETRY_UPDATE",
            "FLUID_UPDATE",
            "STRUCTURAL_UPDATE",
            "THERMAL_UPDATE",
            "SPATIAL_UPDATE",
            "GEOMETRY_UPDATE",
            "DISTRIBUTED_UPDATE",
            "MANUFACTURING_UPDATE",
            "AEROSPACE_UPDATE",
            "COMMS_UPDATE",
            "MOLECULAR_UPDATE",
            "ACOUSTIC_UPDATE",
            "GRAVITY_UPDATE",
            "MATERIAL_UPDATE",
            "QUANTUM_UPDATE",
            "NUCLEAR_UPDATE",
            "OPTICS_UPDATE",
            "ROBOTICS_UPDATE",
            "SECURITY_UPDATE",
            "SIGNAL_UPDATE",
            "CRYOGENIC_UPDATE",
            "COMBUSTION_UPDATE",
            "TERMINAL_UPDATE",
            "HOME_UPDATE",
            "SIMULATION_UPDATE",
            "ORCHESTRATION_UPDATE",
            "TWIN_UPDATE",
            "SYMBOLIC_UPDATE",
            "CIRCUIT_UPDATE",
            "PROPULSION_UPDATE"
        }
        self.mirroring_enabled = True

    async def connect_redis(self):
        """Initializes the async Redis connection for telemetry bridging."""
        try:
            self.r = await redis.from_url(self.redis_url)
            self.logger.info("System Bus: Redis Telemetry Bridge Connected.")
        except Exception as e:
            self.logger.error(f"System Bus: Redis Connection Failed: {e}")

    def subscribe(self, topic: str, callback: Callable):
        """Subscribes an OS layer to a specific data stream."""
        if topic not in self.subscribers:
            self.subscribers[topic] = []
        self.subscribers[topic].append(callback)

    def register_mirrored_topic(self, topic: str):
        """Dynamically registers a topic for Redis mirroring."""
        self.mirrored_topics.add(topic)
        self.logger.info(f"System Bus: Registered {topic} for Redis mirroring.")

    def deregister_mirrored_topic(self, topic: str):
        """Dynamically removes a topic from Redis mirroring."""
        self.mirrored_topics.discard(topic)
        self.logger.info(f"System Bus: Deregistered {topic} from Redis mirroring.")

    def set_mirroring_status(self, enabled: bool):
        """Enables or disables Redis mirroring globally."""
        self.mirroring_enabled = enabled
        self.logger.info(f"System Bus: Redis Mirroring set to {enabled}.")

    async def publish(self, topic: str, data: Any, mirror_override: bool = None):
        """Publishes data across the backplane and mirrors to Redis if topic is marked."""
        # 1. Local Distribution (Zero Latency)
        if topic in self.subscribers:
            tasks = [asyncio.create_task(callback(data)) for callback in self.subscribers[topic]]
            # We don't necessarily need to wait for all local subscribers if they are slow
            # but for consistency we gather here.
            await asyncio.gather(*tasks, return_exceptions=True)

        # 2. Redis Mirroring (Dashboard Bridge)
        should_mirror = self.mirroring_enabled and (topic in self.mirrored_topics)
        if mirror_override is not None:
            should_mirror = mirror_override

        if should_mirror and self.r:
            try:
                payload = json.dumps({
                    "topic": topic,
                    "payload": data,
                    "ts": asyncio.get_event_loop().time()
                })
                await self.r.publish("engineering_results", payload)
            except Exception as e:
                self.logger.error(f"System Bus: Redis Mirroring Failed for {topic}: {e}")

    def status(self) -> Dict[str, Any]:
        """Returns the operational status of the bus."""
        return {
            "bus_load": sum(len(c) for c in self.subscribers.values()),
            "active_topics": list(self.subscribers.keys()),
            "redis_connected": self.r is not None,
            "mirroring_enabled": self.mirroring_enabled,
            "mirrored_topics": list(self.mirrored_topics)
        }

system_bus = MasterSystemBus()
