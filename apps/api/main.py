import os
import sys

# Add the workspace root and API path to sys.path
root_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
api_path = os.path.dirname(os.path.abspath(__file__))
if root_path not in sys.path:
    sys.path.append(root_path)
if api_path not in sys.path:
    sys.path.append(api_path)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

# Import using full paths from the root
try:
    from apps.api.routes.upload import router as upload_router
    from apps.api.routes.analysis import router as analysis_router
    from apps.api.routes.report import router as report_router
except ImportError:
    # Fallback for local execution within apps/api
    from routes.upload import router as upload_router
    from routes.analysis import router as analysis_router
    from routes.report import router as report_router

app = FastAPI(
    title='Antigravity Engineering Intelligence API'
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure directories exist
os.makedirs("artifacts", exist_ok=True)
os.makedirs("reports", exist_ok=True)
os.makedirs("uploads", exist_ok=True)

# Mount static files
app.mount("/artifacts", StaticFiles(directory="artifacts"), name="artifacts")
app.mount("/reports", StaticFiles(directory="reports"), name="reports")
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Include routers
app.include_router(upload_router)
app.include_router(analysis_router, prefix="/api/analysis", tags=["Analysis"])
app.include_router(report_router)
# app.include_router(voice_router)

@app.get('/')
def root():
    return {
        'status': 'Antigravity API is Operational',
        'version': '1.0.0'
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
