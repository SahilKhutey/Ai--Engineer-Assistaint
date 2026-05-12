from celery import Celery
import os
import asyncio
from orchestrator.engineering_orchestrator import EngineeringOrchestrator

# Initialize Celery
redis_url = os.getenv("REDIS_URL", "redis://localhost:6379/0")
celery_app = Celery("engineering_tasks", broker=redis_url, backend=redis_url)

# Initialize Orchestrator (Singleton for the worker)
orchestrator = EngineeringOrchestrator()

@celery_app.task(name="run_analysis_task")
def run_analysis_task(payload):
    """
    Background worker task to execute the full engineering pipeline.
    """
    # Celery tasks are synchronous by default, so we run the async orchestrator in a loop
    loop = asyncio.get_event_loop()
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
