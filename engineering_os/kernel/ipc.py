import asyncio
import logging
from typing import Dict, Any, List, Callable

class MicrokernelIPC:
    """
    Engineering OS Microkernel IPC (Inter-Process Communication).
    The low-latency, zero-copy messaging backplane for sovereign OS services.
    """
    def __init__(self):
        self.channels: Dict[str, List[Callable]] = {}
        self.logger = logging.getLogger("engos_kernel_ipc")

    def register_service(self, service_name: str, callback: Callable):
        """Registers a sovereign service channel in the microkernel."""
        if service_name not in self.channels:
            self.channels[service_name] = []
        self.channels[service_name].append(callback)
        self.logger.info(f"Microkernel: Service '{service_name}' registered for IPC.")

    async def send(self, destination: str, message: Dict[str, Any]):
        """Sends a message across the microkernel IPC backplane."""
        self.logger.debug(f"Microkernel IPC: Routing message to {destination}")
        
        if destination in self.channels:
            tasks = [callback(message) for callback in self.channels[destination]]
            if tasks:
                await asyncio.gather(*tasks)
        else:
            self.logger.warning(f"Microkernel IPC: Destination '{destination}' not found.")

ipc = MicrokernelIPC()
