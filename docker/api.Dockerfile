# Base Engineering Image
FROM python:3.11-slim

# Install Industrial Dependencies (Gmsh, OpenCascade, SU2 dependencies)
RUN apt-get update && apt-get install -y \
    build-essential \
    libgmsh-dev \
    libglu1-mesa \
    libxrender1 \
    libxcursor1 \
    libxft2 \
    libxinerama1 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python Engineering Stack
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy Mono-repo packages and apps
COPY packages/ ./packages/
COPY apps/ ./apps/

# Environment for distributed compute
ENV PYTHONPATH=/app

CMD ["uvicorn", "apps.api.main:app", "--host", "0.0.0.0", "--port", "8000"]
