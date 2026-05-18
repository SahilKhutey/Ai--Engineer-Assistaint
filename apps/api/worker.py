from celery import Celery
import os
import asyncio
import sys
# Add the workspace root and API path to sys.path
root_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
if root_path not in sys.path:
    sys.path.append(root_path)

# Add Engineering OS Kernel paths
kernel_path = os.path.join(root_path, "engineering_os", "kernel")
if kernel_path not in sys.path:
    sys.path.append(kernel_path)
    sys.path.append(os.path.join(kernel_path, "orchestration"))
    sys.path.append(os.path.join(kernel_path, "ag_kernel"))

from engineering_orchestrator import EngineeringOrchestrator

# Import Core Engineering Components
from packages.physics_engine.engine import PhysicsEngine
from packages.engineering_rag.memory_engine import DesignMemoryEngine
from packages.reasoning_engine.agents.chief_engineer import ChiefEngineeringAgent

# Initialize Celery
redis_url = os.getenv("REDIS_URL", "redis://localhost:6379/0")
celery_app = Celery("engineering_tasks", broker=redis_url, backend=redis_url)

# Initialize Orchestrator Dependencies (Singleton for the worker)
engines = {
    "physics": PhysicsEngine()
}
memory = DesignMemoryEngine()
agents = {
    "chief": ChiefEngineeringAgent()
}

orchestrator = EngineeringOrchestrator(engines=engines, memory=memory, agents=agents)

@celery_app.task(name="run_analysis_task")
def run_analysis_task(payload):
    """
    Background worker task to execute the full engineering pipeline.
    """
    # Celery tasks are synchronous by default, so we run the async orchestrator in a loop
    try:
        loop = asyncio.get_event_loop()
    except RuntimeError:
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        
    if loop.is_running():
        # This shouldn't happen in a worker process, but just in case
        import nest_asyncio
        nest_asyncio.apply()
    
    result = loop.run_until_complete(orchestrator.run(payload))
    
    # Publish to Redis for real-time WebSocket broadcast
    import redis as pyredis
    r = pyredis.from_url(redis_url)
    import json
    r.publish("engineering_results", json.dumps({
        "type": "ANALYSIS_COMPLETE",
        "payload": result
    }))
    
    return result
