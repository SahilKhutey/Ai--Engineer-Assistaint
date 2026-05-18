import os
import sys
from fastapi import APIRouter, UploadFile, HTTPException

# Ensure packages is in path
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "..", "..", "packages"))

from geometry_engine.pipeline import GeometryPipeline

router = APIRouter(
    prefix='/api/upload'
)

@router.post('/')
async def upload_cad(file: UploadFile):
    try:
        # Create uploads directory if not exists
        os.makedirs("uploads", exist_ok=True)
        
        # Save uploaded file
        file_path = os.path.join("uploads", file.filename)
        with open(file_path, "wb") as f:
            content = await file.read()
            f.write(content)
            
        # Run the Geometry Pipeline
        pipeline = GeometryPipeline()
        analysis_result = pipeline.process(file_path)
        
        return {
            'filename': file.filename,
            'status': 'uploaded',
            'analysis': analysis_result
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Sovereign Upload Processing Error: {str(e)}")
