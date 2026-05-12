from fastapi import APIRouter, WebSocket, WebSocketDisconnect
import json
import os
import sys

# Ensure packages can be found
sys.path.append(os.path.join(os.path.dirname(__file__), "..", "..", "..", "packages"))

from voice_engine.main import EngineeringSpeechHandler
from ai_orchestrator.main import EngineeringOrchestrator

router = APIRouter(prefix='/api/voice')

@router.websocket("/ws")
async def voice_websocket(websocket: WebSocket):
    await websocket.accept()
    
    # Initialize components
    api_key = os.getenv("GEMINI_API_KEY")
    orchestrator = EngineeringOrchestrator(api_key=api_key)
    handler = EngineeringSpeechHandler(orchestrator)
    
    try:
        while True:
            # Receive data (text from client-side STT for MVP)
            data = await websocket.receive_text()
            payload = json.loads(data)
            
            user_text = payload.get("text", "")
            context = payload.get("context", {})
            
            # Handle command
            response = await handler.handle_text_command(user_text, context)
            
            # Send back response (to be converted to speech on client side or via TTS API)
            await websocket.send_json(response)
            
    except WebSocketDisconnect:
        print("Voice client disconnected")
    except Exception as e:
        await websocket.send_json({"error": str(e)})
