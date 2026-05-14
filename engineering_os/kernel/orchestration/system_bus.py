from typing import Dict, Any, Callable, List
import logging
import asyncio

class MasterSystemBus:
    """
    Antigravity OS Master System Bus.
    Provides a low-latency, high-throughput communication backplane for the 11-layer architecture.
    """
    def __init__(self):
        self.subscribers: Dict[str, List[Callable]] = {}
        self.logger = logging.getLogger("ag_system_bus")

    def subscribe(self, topic: str, callback: Callable):
        """Subscribes an OS layer to a specific data stream."""
        if topic not in self.subscribers:
            self.subscribers[topic] = []
        self.subscribers[topic].append(callback)

    async def publish(self, topic: str, data: Any):
        """Publishes mission-critical data across the master backplane."""
        if topic in self.subscribers:
            # Parallel execution for zero-latency distribution
            tasks = [asyncio.create_task(callback(data)) for callback in self.subscribers[topic]]
            await asyncio.gather(*tasks)

    def status(self) -> Dict[str, Any]:
        """Returns the operational status of the bus."""
        return {
            "bus_load": sum(len(c) for c in self.subscribers.values()),
            "active_topics": list(self.subscribers.keys())
        }

system_bus = MasterSystemBus()
