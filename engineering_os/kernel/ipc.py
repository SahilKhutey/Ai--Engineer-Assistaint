import asyncio
import logging
import json
from typing import Dict, Any, List, Callable, Optional

class MicrokernelIPC:
    """
    Engineering OS Microkernel IPC (Inter-Process Communication).
    The low-latency, zero-copy messaging backplane for sovereign OS services.
    Supports priority-based message routing and asynchronous bridging.
    """
    def __init__(self, kernel):
        self.kernel = kernel
        self.channels: Dict[str, List[Callable]] = {}
        self.logger = logging.getLogger("engos_kernel_ipc")
        self.priority_queue = asyncio.PriorityQueue()

    def register_service(self, service_name: str, callback: Callable):
        """Registers a sovereign service channel in the microkernel."""
        if service_name not in self.channels:
            self.channels[service_name] = []
        self.channels[service_name].append(callback)
        self.logger.info(f"Microkernel: Service '{service_name}' registered for IPC.")

    async def send(self, destination: str, message: Dict[str, Any], priority: int = 2):
        """
        Sends a message across the microkernel IPC backplane.
        Priority 0 = MISSION_CRITICAL (Control Signals)
        Priority 1 = SYSTEM_UPDATE (State Sync)
        Priority 2 = DATA_STREAM (Telemetry)
        """
        # Pack message with metadata
        payload = {
            "dest": destination,
            "msg": message,
            "ts": asyncio.get_event_loop().time()
        }
        
        # Add to priority queue
        await self.priority_queue.put((priority, payload))
        
        # Trigger immediate routing if MISSION_CRITICAL
        if priority == 0:
            await self._route_immediate(payload)

    async def _route_immediate(self, payload: Dict[str, Any]):
        """Bypasses standard queue for high-priority signaling."""
        dest = payload["dest"]
        if dest in self.channels:
            for callback in self.channels[dest]:
                asyncio.create_task(callback(payload["msg"]))

    async def run_ipc_bridge(self):
        """Continuous loop for processing queued IPC messages."""
        self.logger.info("Microkernel: IPC Bridge Active")
        while True:
            try:
                priority, payload = await self.priority_queue.get()
                dest = payload["dest"]
                
                if dest in self.channels:
                    # Execute callbacks for this service
                    tasks = [callback(payload["msg"]) for callback in self.channels[dest]]
                    if tasks:
                        await asyncio.gather(*[self._wrap_callback(t) for t in tasks])
                
                self.priority_queue.task_done()
            except Exception as e:
                self.logger.error(f"IPC Bridge Fault: {e}")
                await asyncio.sleep(0.1)

    async def _wrap_callback(self, coro):
        """Ensures service faults do not crash the IPC backplane."""
        try:
            await coro
        except Exception as e:
            self.logger.error(f"IPC Service Callback Fault: {e}")

ipc = None # Initialized by Kernel
