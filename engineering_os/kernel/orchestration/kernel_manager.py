from typing import Dict, List, Any, Optional
import asyncio
import time
import logging
import json
import os

from .system_bus import system_bus
from engineering_os.kernel.scheduler.task_scheduler import PhysicsOrchestratedScheduler
from engineering_os.kernel.gpu_runtime.gpu_dispatcher import GPUDispatcher
from engineering_os.kernel.realtime_sync.state_synchronizer import GlobalStateSynchronizer
from engineering_os.kernel.memory.memory_manager import memory_manager
from engineering_os.kernel.process_runtime.process_manager import ProcessRuntime
from infrastructure.distributed.cluster_runtime import DistributedClusterRuntime
from engineering_os.security.security.security_manager import SecurityManager
from engineering_os.security.security.governance_audit import GovernanceAuditSystem
from engineering_os.ai_runtime.core.reasoning_engine import ReasoningEngine
from engineering_os.ai_runtime.core.autonomous_designer import AutonomousDesigner
from engineering_os.ai_runtime.core.certification_engine import CertificationEngine
from engineering_os.realtime.digital_twin.telemetry_manager import TelemetryManager
from engineering_os.realtime.digital_twin.sensor_fusion import SensorFusionEngine
from engineering_os.realtime.digital_twin.anomaly_detection import AnomalyDetectionEngine

class KernelManager:
    """
    The Antigravity OS Kernel Manager.
    Orchestrates task scheduling, physics synchronization, and telemetry routing.
    Acts as the single point of truth for the Engineering OS.
    """
    def __init__(self):
        self.active_tasks: Dict[str, Any] = {}
        self.physics_registry: Dict[str, Any] = {}
        self.start_time = time.time()
        self.logger = logging.getLogger("ag_kernel")
        
        # Core OS Layers
        self.bus = system_bus
        self.logger.info("OS Kernel: Primary telemetry router initialized via MasterSystemBus.")
        self.memory = memory_manager
        self.security = SecurityManager(self)
        self.audit = GovernanceAuditSystem(self)
        
        # Simulation & Orchestration
        self.state = GlobalStateSynchronizer(self)
        self.scheduler = PhysicsOrchestratedScheduler(self)
        self.gpu = GPUDispatcher(self)
        self.process = ProcessRuntime(self)
        self.distributed = DistributedClusterRuntime(self)
        
        # AI & Cognition Layer
        self.reasoning = ReasoningEngine(self)
        self.designer = AutonomousDesigner(self, self.reasoning)
        self.certification = CertificationEngine(self)
        
        # Real-time Digital Twin Layer
        self.telemetry = TelemetryManager(self)
        self.fusion = SensorFusionEngine(self)
        self.anomaly = AnomalyDetectionEngine(self)

    async def initialize(self):
        """Asynchronous initialization of kernel services (e.g., Redis Bridge)."""
        await self.bus.connect_redis()
        self.logger.info("OS Kernel: Sovereign initialization complete.")

    async def schedule_task(self, task_id: str, task_type: str, priority: int = 1, workload: Dict[str, Any] = None):
        """Schedules an engineering task and archives it in the kernel memory."""
        workload = workload or {}
        self.logger.info(f"OS Kernel: Dispatching {task_type} to scheduler with priority {priority}")
        
        self.active_tasks[task_id] = {
            "type": task_type,
            "priority": priority,
            "status": "QUEUED",
            "start_time": time.time(),
            "workload": workload
        }
        
        # Secure the workload fingerprint before dispatch
        token = workload.get("auth_token", "AG_SECURE_KERNEL")
        if await self.security.authorize_task(task_id, workload, token):
            await self.scheduler.submit_task(task_id, task_type, priority, workload)
        
        # Broadcast status update for UI dashboards
        await self.broadcast_telemetry("STATUS_UPDATE", {
            "active_tasks": len(self.active_tasks),
            "last_dispatch": task_id,
            "kernel_uptime": self.get_uptime()
        })

    async def broadcast_telemetry(self, topic: str, payload: Any):
        """Broadcasts telemetry via the system bus (which bridges to Redis)."""
        self.logger.debug(f"OS Kernel: Broadcasting telemetry topic '{topic}' to System Bus.")
        await self.bus.publish(topic, payload)

    def get_uptime(self) -> float:
        return round(time.time() - self.start_time, 2)

# Singleton kernel instance
kernel = KernelManager()
