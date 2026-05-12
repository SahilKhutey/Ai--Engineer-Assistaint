from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
from pydantic import BaseModel
import os
import sys

# Ensure packages can be found
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "..", "..", "packages"))

from reasoning_engine.report_generator import EngineeringReportGenerator

router = APIRouter(prefix='/api/report')

REPORT_DIR = 'reports'
os.makedirs(REPORT_DIR, exist_ok=True)

class ReportRequest(BaseModel):
    analysis_data: dict
    filename: str

@router.post('/generate')
async def generate_report(request: ReportRequest):
    try:
        generator = EngineeringReportGenerator()
        report_path = os.path.join(REPORT_DIR, f"{request.filename}.pdf")
        generator.generate(request.analysis_data, report_path)
        
        return {"report_url": f"http://localhost:8000/reports/{request.filename}.pdf"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
