from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from routes.upload import router as upload_router
from routes.analysis import router as analysis_router

app = FastAPI(
    title='Antiogravity API'
)

# Mount artifacts for report downloads
app.mount("/api/reports", StaticFiles(directory="artifacts"), name="reports")

app.include_router(upload_router)
app.include_router(analysis_router)

@app.get('/')
def root():
    return {
        'status': 'running'
    }
