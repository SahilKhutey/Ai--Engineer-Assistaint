Services.md — AI Engineering Assistant
# AI Engineering Assistant — Services Architecture

## Purpose

This document defines all backend services, infrastructure services,
AI services, simulation services, and internal microservices used by the platform.

The architecture is designed for:

- scalability
- modularity
- distributed computation
- simulation-heavy workloads
- AI orchestration
- enterprise reliability

---

# 1. Service Architecture Overview

# High-Level Service Map

```text
                        ┌────────────────────┐
                        │   Frontend Client  │
                        └─────────┬──────────┘
                                  │
                                  ▼

                     ┌────────────────────────┐
                     │      API Gateway       │
                     │ FastAPI / GraphQL      │
                     └────────────┬───────────┘
                                  │
          ┌───────────────────────┼────────────────────────┐
          │                       │                        │
          ▼                       ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  Auth Service    │    │  Project Service │    │  Material Service│
│  JWT / OAuth2    │    │  CRUD / History  │    │  Prop Library    │
└──────────────────┘    └──────────────────┘    └──────────────────┘

          │                       │                        │
          ▼                       ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Geometry Service │    │ Engineering Engine│    │ AI Orchestrator  │
│ CAD Parsing / Mesh│    │ Rules / Physics  │    │ Prompt Synthesis │
└──────────────────┘    └──────────────────┘    └──────────────────┘

          │                       │                        │
          ▼                       ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Simulation Service│    │  Worker Service  │    │  Reporting Serv  │
│ Job Orchestration│    │  Async Compute   │    │  PDF Generation  │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

---

# 2. Core Microservices

## A. API Gateway Service
- **Technology:** FastAPI
- **Responsibilities:** Routing, Auth validation, Rate limiting, WebSocket orchestration.
- **Entry point:** All frontend requests pass through here.

## B. Project Service
- **Technology:** Node.js (or Python) + PostgreSQL
- **Responsibilities:** Project metadata, versioning, sharing permissions, user-saved states.
- **Data:** SQL database for structured metadata.

## C. Geometry & Mesh Service
- **Technology:** Python (Trimesh / pythonOCC / Gmsh)
- **Responsibilities:** STL/STEP parsing, feature extraction, mesh sanitization, 3D file conversion.
- **Processing:** Heavy CPU/GPU usage for topological analysis.

## D. Engineering Rule Engine
- **Technology:** Python (NumPy / SciPy)
- **Responsibilities:** Deterministic physics calculations, buckling analysis, safety factor validation.
- **Logic:** Hardcoded engineering formulas (Eurocodes, AISC).

## E. AI Orchestration Service
- **Technology:** Python + LangChain / LlamaIndex
- **Responsibilities:** Multi-agent LLM reasoning, prompt engineering, semantic geometry mapping.
- **Models:** Gemini 1.5 Pro, GPT-4, Claude 3.5 Sonnet.

## F. Simulation Service (The Simulation Jobs)
- **Technology:** Dockerized Solvers (CalculiX, OpenFOAM, Code_Aster)
- **Responsibilities:** FEM analysis, CFD analysis, result post-processing.
- **Orchestration:** Kubernetes Job API or Celery.

---

# 3. Infrastructure Services

## A. Message Broker
- **Technology:** Redis / RabbitMQ
- **Purpose:** Async task queue, job status updates, real-time message passing.

## B. File Storage Service
- **Technology:** AWS S3 / MinIO
- **Purpose:** Storing raw CAD models, mesh files, simulation results (vtu), reports.

## C. Search & Discovery
- **Technology:** Meilisearch / Elasticsearch
- **Purpose:** Fast searching through project history and material libraries.

---

# 4. Data Persistence & Caching

| Service | Technology | Purpose |
|---|---|---|
| Main Database | PostgreSQL | Relational metadata |
| Vector Store | ChromaDB / Pinecone | Material knowledge retrieval (RAG) |
| Cache | Redis | Session state, Job locks |
| Object Store | S3 | Large CAD/Mesh files |

---

# 5. External Integrations

- **LLM Providers:** Google Cloud (Gemini), AWS (Claude), OpenAI.
- **Cloud Compute:** GPU instances for rendering and heavy meshing.
- **CAD APIs:** Potential integrations with Onshape / Fusion 360 APIs.

---

# 6. Service Communication

- **Internal:** gRPC for high-performance service-to-service calls.
- **Public:** REST / GraphQL for frontend consumption.
- **Real-time:** WebSockets for job monitoring and AI streaming responses.
