from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from routes.upload import router as upload_router
from routes.analysis import router as analysis_router
from routes.report import router as report_router
from routes.voice import router as voice_router
import os

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

# Ensure artifacts and reports directories exist
os.makedirs("artifacts", exist_ok=True)
os.makedirs("reports", exist_ok=True)

# Mount static files for downloads
app.mount("/artifacts", StaticFiles(directory="artifacts"), name="artifacts")
app.mount("/reports", StaticFiles(directory="reports"), name="reports")

# Include routers
app.include_router(upload_router)
app.include_router(analysis_router, prefix="/api/analysis", tags=["Analysis"])
app.include_router(report_router)
app.include_router(voice_router)

@app.get('/')
def root():
    return {
        'status': 'Antigravity API is Operational',
        'version': '1.0.0'
    }
