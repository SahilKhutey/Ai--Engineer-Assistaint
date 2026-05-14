import asyncio
import json
import logging
import time
from typing import Dict, Any, List, Callable

class RuntimeEventBus:
    """
    Antigravity OS Runtime Event Bus.
    The central nervous system for all reactive, event-driven engineering operations.
    """
    def __init__(self):
        self.subscribers: Dict[str, List[Callable]] = {}
        self.logger = logging.getLogger("ag_event_bus")

    def subscribe(self, event_type: str, callback: Callable):
        """Subscribes a system component to a specific event type."""
        if event_type not in self.subscribers:
            self.subscribers[event_type] = []
        self.subscribers[event_type].append(callback)
        self.logger.debug(f"Event Bus: Subscribed to {event_type}")

    async def emit(self, event_type: str, payload: Dict[str, Any]):
        """Emits a real-time event to all subscribers."""
        event = {
            "event": event_type,
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "payload": payload
        }
        
        self.logger.info(f"Event Bus: Emitting {event_type}")
        
        if event_type in self.subscribers:
            tasks = [callback(event) for callback in self.subscribers[event_type]]
            if tasks:
                await asyncio.gather(*tasks)

event_bus = RuntimeEventBus()
