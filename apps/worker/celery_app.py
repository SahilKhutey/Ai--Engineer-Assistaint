from celery import Celery
import os

# 1. Initialize Distributed Compute App
# In production, these URLs would point to a Redis/RabbitMQ cluster
redis_url = os.getenv("REDIS_URL", "redis://localhost:6379/0")

app = Celery(
    "antigravity_compute_bus",
    broker=redis_url,
    backend=redis_url,
    include=["apps.worker.tasks"]
)

# 2. Optimization Settings for Heavy Industrial Payloads
app.conf.update(
    task_serializer="json",
    accept_content=["json"],
    result_serializer="json",
    timezone="UTC",
    enable_utc=True,
    task_track_started=True,
    task_time_limit=3600, # 1 hour limit for complex FEM/CFD solves
    worker_prefetch_multiplier=1 # One task per worker to maximize compute depth
)

if __name__ == "__main__":
    app.start()
