# Antigravity OS Kernel Layer (Phase 55 Hardened Redirects)
import sys
import os

# Redirects to consolidated orchestration logic
from engineering_os.kernel.orchestration.kernel_manager import kernel
from engineering_os.kernel.orchestration.xr_orchestrator import XROrchestrator
from engineering_os.kernel.orchestration.interaction_engine import InteractionEngine
from engineering_os.kernel.orchestration.system_bus import system_bus
from engineering_os.kernel.realtime_sync.state_synchronizer import GlobalStateSynchronizer
from engineering_os.kernel.scheduler.task_scheduler import PhysicsOrchestratedScheduler
from engineering_os.kernel.gpu_runtime.gpu_dispatcher import GPUDispatcher
from engineering_os.kernel.orchestration.governance import GovernanceAuditSystem
