import asyncio
import uuid
import time
from typing import Dict, Any, Callable

class ComputeTask:
    def __init__(self, task_type: str, payload: Dict[str, Any]):
        self.id = str(uuid.uuid4())
        self.type = task_type
        self.payload = payload
        self.status = "PENDING"
        self.result = None
        self.start_time = None
        self.end_time = None

class ComputeBus:
    """
    Distributed Task Bus for High-Fidelity Engineering Solvers.
    Simulates Ray/Temporal remote execution for parallel FEA/CFD.
    """
    def __init__(self):
        self.tasks: Dict[str, ComputeTask] = {}
        self.workers_active = 0
        self.max_workers = 8

    async def submit_remote_task(self, task_type: str, payload: Dict[str, Any]):
        task = ComputeTask(task_type, payload)
        self.tasks[task.id] = task
        
        # Simulate asynchronous dispatch to a worker node
        asyncio.create_task(self._execute_worker(task))
        return task.id

    async def _execute_worker(self, task: ComputeTask):
        """Simulates a remote solver execution (FEA/CFD)."""
        task.status = "RUNNING"
        task.start_time = time.time()
        self.workers_active += 1
        
        # Artificial latency for high-fidelity physics
        wait_time = 2.0 if task.type == "CFD" else 1.0
        await asyncio.sleep(wait_time)
        
        # Simulate result generation
        task.result = {
            "node_id": f"worker-{self.workers_active}",
            "execution_time_ms": int((time.time() - task.start_time) * 1000),
            "status": "COMPLETED"
        }
        
        task.status = "COMPLETED"
        task.end_time = time.time()
        self.workers_active -= 1

    def get_task_status(self, task_id: str):
        task = self.tasks.get(task_id)
        if not task: return {"status": "NOT_FOUND"}
        return {
            "id": task.id,
            "status": task.status,
            "result": task.result,
            "progress": 100 if task.status == "COMPLETED" else 50
        }

# Global Bus Instance
compute_bus = ComputeBus()
