from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from worker import celery_app
from celery.result import AsyncResult

router = APIRouter()

class AnalysisRequest(BaseModel):
    question: str
    domain: str = "STRUCTURAL"
    math: dict = None
    material_id: str = "structural_steel"

import asyncio
from orchestrator.engineering_orchestrator import EngineeringOrchestrator

# Initialize Orchestrator dependencies (Mocks/Basics for demo)
engines = {"fem": None, "geometry": None}
memory = type('Memory', (), {'persist_simulation': lambda self, x: print("Persisted")})()
agents = {"chief": type('Agent', (), {'synthesize': lambda self, x: {
    "safety_factor": 2.4, 
    "max_stress_mpa": 120.5,
    "recommendation": "Structural margins are sufficient. Proceed to production."
}})()}

orchestrator = EngineeringOrchestrator(engines, memory, agents)

@router.post("")
async def start_analysis(request: AnalysisRequest):
    """
    Triggers the high-fidelity engineering pipeline.
    """
    # Run the orchestrator in the background to avoid blocking
    asyncio.create_task(orchestrator.run(request.dict()))
    
    return {"status": "analysis_started", "message": "Mission Control has taken command."}

@router.get("/status/{job_id}")
async def get_analysis_status(job_id: str):
    """
    Checks the status and retrieves results of a background analysis job.
    """
    task_result = AsyncResult(job_id, app=celery_app)
    
    if task_result.state == "PENDING":
        return {"status": "pending"}
    elif task_result.state == "FAILURE":
        return {"status": "failed", "error": str(task_result.info)}
    elif task_result.state == "SUCCESS":
        return {"status": "completed", "result": task_result.result}
    
    return {"status": task_result.state.lower()}
