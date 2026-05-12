from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from worker import celery_app
from celery.result import AsyncResult

router = APIRouter()

class AnalysisRequest(BaseModel):
    question: str
    pitch_mm: float = 10.0
    material_id: str = "structural_steel"

@router.post("")
async def start_analysis(request: AnalysisRequest):
    """
    Triggers an asynchronous structural analysis task.
    """
    task = celery_app.send_task(
        "run_analysis_task", 
        args=[request.dict()]
    )
    return {"job_id": task.id, "status": "queued"}

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
