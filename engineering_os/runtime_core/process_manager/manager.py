import logging
import uuid
from typing import Dict, Any

class ProcessManager:
    """
    Engineering OS Process Manager.
    Governs the lifecycle of sovereign engineering processes (Simulation, AI, Geometry).
    """
    def __init__(self, scheduler):
        self.scheduler = scheduler
        self.processes: Dict[str, Dict[str, Any]] = {}
        self.logger = logging.getLogger("engos_process_manager")

    def spawn_process(self, process_type: str, workload: Dict[str, Any]) -> str:
        """Spawns a new sovereign engineering process."""
        pid = str(uuid.uuid4())[:8]
        self.logger.info(f"ProcessManager: Spawning {process_type} process [PID: {pid}]")
        
        # Initialize Lifecycle
        self.processes[pid] = {
            "pid": pid,
            "type": process_type,
            "state": "INITIALIZED",
            "workload": workload,
            "resources": {"gpu": False, "memory_mb": 1024}
        }
        
        # Queue for execution via Scheduler
        priority = 2 # Default for simulations
        if process_type == "TELEMETRY": priority = 1
        if process_type == "SAFETY": priority = 0
        
        self.scheduler.schedule(pid, process_type, priority, workload)
        
        return pid

    def update_state(self, pid: str, state: str):
        """Updates the state of a running engineering process."""
        if pid in self.processes:
            self.processes[pid]["state"] = state
            self.logger.info(f"ProcessManager: PID {pid} transitioned to {state}")

process_manager = None
