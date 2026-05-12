import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import sys

# Add all monorepo packages to path
packages_root = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", "packages"))
sys.path.append(packages_root)
sys.path.append(os.path.join(os.path.dirname(__file__), ".."))

# Ensure uploads and reports directories exist
os.makedirs("uploads", exist_ok=True)
os.makedirs("reports", exist_ok=True)

app = FastAPI(title="Antigravity Engineering Platform API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Static file serving
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")
app.mount("/reports", StaticFiles(directory="reports"), name="reports")

# Import and include routers
from routes import upload, analysis, report, voice

app.include_router(upload.router)
app.include_router(analysis.router)
app.include_router(report.router)
app.include_router(voice.router)

@app.get("/")
async def root():
    return {"status": "active", "service": "Antigravity Engineering API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
