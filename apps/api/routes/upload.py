from fastapi import APIRouter
from fastapi import UploadFile

router = APIRouter(
    prefix='/api/upload'
)

@router.post('/')
async def upload_cad(
    file: UploadFile
):
    return {
        'filename': file.filename,
        'status': 'uploaded'
    }
