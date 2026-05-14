from typing import Dict, List, Any, Optional
import asyncio
import time
import logging

import redis as pyredis
import json
import os
from .system_bus import system_bus
from scheduler.task_scheduler import PhysicsOrchestratedScheduler
from gpu_runtime.gpu_dispatcher import GPUDispatcher
from realtime_sync.state_synchronizer import GlobalStateSynchronizer
from memory.memory_manager import memory_manager
from process_runtime.process_manager import ProcessRuntime
from distributed import DistributedClusterRuntime
from security import SecurityManager, SecureAIRuntime
from research.discovery_engine import ScientificDiscoveryEngine
from civilization.planetary_orchestrator import PlanetaryOrchestrator
from .governance import GovernanceAuditSystem

class KernelManager:
    """
    The Antigravity OS Kernel Manager.
    Orchestrates task scheduling, physics synchronization, and memory routing.
    """
    def __init__(self):
        self.active_tasks: Dict[str, Any] = {}
        self.physics_registry: Dict[str, Any] = {}
        self.start_time = time.time()
        self.logger = logging.getLogger("ag_kernel")
        
        # Redis for real-time broadcasting (Engineering Stream)
        self.redis_url = os.getenv("REDIS_URL", "redis://localhost:6379/0")
        try:
            self.r = pyredis.from_url(self.redis_url)
        except Exception as e:
            self.logger.error(f"Failed to connect to Redis: {e}")
            self.r = None
        
        self.bus = system_bus
        self.state = GlobalStateSynchronizer(self)
        self.scheduler = PhysicsOrchestratedScheduler(self)
        self.gpu = GPUDispatcher(self)
        self.memory = memory_manager
        self.process = ProcessRuntime(self)
        self.distributed = DistributedClusterRuntime(self)
        self.security = SecurityManager(self)
        self.secure_ai = SecureAIRuntime(self, self.security)
        
        # OS Phase 9 & 10 Engines
        self.discovery = ScientificDiscoveryEngine(self, None)
        self.planetary = PlanetaryOrchestrator(self)
        
        self.audit = GovernanceAuditSystem(self)
        
    async def schedule_task(self, task_id: str, task_type: str, priority: int = 1):
        """Schedules an engineering or cognition task."""
        self.logger.info(f"OS Kernel: Scheduling task {task_id} [{task_type}] with priority {priority}")
        # Task scheduling logic to be implemented
        pass
        
    async def sync_physics_state(self, domain: str, state: Dict[str, Any]):
        """Synchronizes the state of a specific physics domain with the kernel memory."""
        self.physics_registry[domain] = {
            "state": state,
            "last_sync": time.time()
        }
        self.logger.debug(f"OS Kernel: Physics Sync [{domain}] at {self.physics_registry[domain]['last_sync']}")

    async def broadcast_telemetry(self, message_type: str, payload: Any):
        """Broadcasts high-fidelity telemetry to the Visualization & XR Layer."""
        if not self.r: return
        try:
            self.r.publish("engineering_results", json.dumps({
                "type": message_type,
                "payload": payload
            }))
        except Exception as e:
            self.logger.error(f"Kernel Broadcast Failed: {e}")

    def get_uptime(self) -> float:
        return time.time() - self.start_time

kernel = KernelManager()
