from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import asyncio
import json
import os
import aioredis
from typing import List

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def broadcast(self, message: dict):
        for connection in self.active_connections:
            try:
                await connection.send_json(message)
            except:
                pass

manager = ConnectionManager()

async def redis_listener():
    """
    Listens to Redis for analysis results and broadcasts them to all connected clients.
    """
    redis_url = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    redis = await aioredis.from_url(redis_url)
    pubsub = redis.pubsub()
    await pubsub.subscribe("engineering_results")
    
    async for message in pubsub.listen():
        if message["type"] == "message":
            data = json.loads(message["data"])
            await manager.broadcast(data)

def setup_websockets(app: FastAPI):
    @app.on_event("startup")
    async def startup_event():
        # Start the Redis listener in the background
        asyncio.create_task(redis_listener())

    @app.websocket("/ws/engineering")
    async def websocket_endpoint(websocket: WebSocket):
        await manager.connect(websocket)
        # Handle presence
        await manager.broadcast({"type": "USER_JOINED", "count": len(manager.active_connections)})
        try:
            while True:
                # Keepalive
                await websocket.receive_text()
        except WebSocketDisconnect:
            manager.disconnect(websocket)
            await manager.broadcast({"type": "USER_LEFT", "count": len(manager.active_connections)})
