from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import asyncio
import json
import os
import time
import redis.asyncio as redis
from typing import List, Dict, Set

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []
        self.filters: Dict[WebSocket, Set[str]] = {}

    async def connect(self, websocket: WebSocket, initial_filter: Set[str] = None):
        await websocket.accept()
        self.active_connections.append(websocket)
        self.filters[websocket] = initial_filter or set()

    def disconnect(self, websocket: WebSocket):
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)
        if websocket in self.filters:
            del self.filters[websocket]

    async def broadcast(self, message: dict):
        topic = message.get("type", "TELEMETRY_UPDATE")
        for connection in self.active_connections:
            # Check if this connection has a filter set
            conn_filter = self.filters.get(connection, set())
            if conn_filter:
                # Filter matching logic:
                # Match if the filter exactly matches the topic, or if broad categories match.
                # e.g., 'FLUIDS' matches 'FLUID_UPDATE', 'COGNITION' matches 'REASONING_TRACE'
                matched = False
                for f in conn_filter:
                    f_upper = f.upper()
                    if f_upper == topic:
                        matched = True
                        break
                    if f_upper == "FLUIDS" and "FLUID" in topic:
                        matched = True
                        break
                    if f_upper == "COGNITION" and (topic in ["REASONING_TRACE", "COGNITION_UPDATE", "STATUS_UPDATE"]):
                        matched = True
                        break
                    # General substring match (e.g., 'STRUCTURAL' matches 'STRUCTURAL_UPDATE')
                    if f_upper in topic or topic in f_upper:
                        matched = True
                        break
                if not matched:
                    # Skip broadcasting to this connection
                    continue
            
            try:
                await connection.send_json(message)
            except Exception:
                pass

manager = ConnectionManager()

async def redis_listener():
    """
    Sovereign Redis Listener (Phase 61 Hardened)
    Listens to the 'engineering_results' channel for unified telemetry pulses.
    """
    redis_url = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    redis_client = await redis.from_url(redis_url)
    pubsub = redis_client.pubsub()
    await pubsub.subscribe("engineering_results")
    
    async for message in pubsub.listen():
        if message["type"] == "message":
            try:
                # The SystemBus publishes a JSON string with 'topic' and 'payload'
                raw_data = json.loads(message["data"])
                
                # Standardize for the UI (Matches useEngineeringStore.ts expectations)
                ui_payload = {
                    "type": raw_data.get("topic", "TELEMETRY_UPDATE"),
                    "payload": raw_data.get("payload", {}),
                    "timestamp": raw_data.get("ts", time.time())
                }
                
                await manager.broadcast(ui_payload)
            except Exception as e:
                print(f"Sovereign Socket Bridge Fault: {e}")

def setup_websockets(app: FastAPI):
    @app.websocket("/ws/engineering")
    async def websocket_endpoint(websocket: WebSocket, filter: str = None):
        initial_filter = set()
        if filter:
            initial_filter = {f.strip() for f in filter.split(",") if f.strip()}
            
        await manager.connect(websocket, initial_filter)
        # Handle presence
        await manager.broadcast({"type": "USER_JOINED", "count": len(manager.active_connections)})
        try:
            while True:
                # Handle filter updates from the client as well
                text = await websocket.receive_text()
                try:
                    msg = json.loads(text)
                    if "filter" in msg:
                        new_filters = msg["filter"]
                        if isinstance(new_filters, list):
                            manager.filters[websocket] = {f.strip() for f in new_filters if isinstance(f, str)}
                        elif isinstance(new_filters, str):
                            manager.filters[websocket] = {f.strip() for f in new_filters.split(",") if f.strip()}
                except Exception:
                    # Ignore malformed or keepalive text
                    pass
        except WebSocketDisconnect:
            manager.disconnect(websocket)
            await manager.broadcast({"type": "USER_LEFT", "count": len(manager.active_connections)})
