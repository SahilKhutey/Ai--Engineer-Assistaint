Architecture.md — AI Engineering Assistant

# AI Engineering Assistant — System Architecture

## Vision

An AI-native engineering copilot capable of understanding mechanical designs,
estimating structural feasibility, identifying weaknesses, and assisting
engineers through natural language interaction.

The system combines:

- LLM reasoning
- geometry analysis
- engineering heuristics
- simulation systems
- visual feedback loops

---

# 1. High-Level Architecture

```text
                    ┌────────────────────┐
                    │    Web Frontend    │
                    │ React / Three.js   │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌────────────────────┐
                    │    API Gateway     │
                    │ FastAPI / GraphQL  │
                    └─────────┬──────────┘
                              │
            ┌─────────────────┴─────────────────┐
            │                                   │
            ▼                                   ▼
  ┌───────────────────┐               ┌───────────────────┐
  │   Core AI Engine  │               │ Geometry Engine   │
  │ Reasoning Service │               │ CAD / Mesh Parser │
  └─────────┬─────────┘               └─────────┬─────────┘
            │                                   │
            └─────────────────┬─────────────────┘
                              │
                              ▼
                    ┌────────────────────┐
                    │ Engineering Engine │
                    │ Physics + Rules    │
                    └─────────┬──────────┘
                              │
            ┌─────────────────┴─────────────────┐
            │                                   │
            ▼                                   ▼
  ┌───────────────────┐               ┌───────────────────┐
  │ Simulation Service│               │  Project Service  │
  │ FEM / CFD / Jobs  │               │ Persistence / S3  │
  └───────────────────┘               └───────────────────┘
```

---

# 2. Key Components

## A. API Gateway (FastAPI)

The central orchestrator that handles:

- User authentication
- Request routing
- WebSocket for real-time analysis updates
- File upload management (S3 / Local)

## B. Geometry Engine (Python / Trimesh / OCC)

Responsible for:

- Parsing STL, STEP, and CAD files
- Feature extraction (ribs, holes, cantilevers, thin walls)
- Topological analysis
- Mesh cleaning and repair

## C. Core AI Engine (Gemini / Claude)

The reasoning layer that:

- Understands natural language engineering queries
- Maps user intent to physical constraints
- Synthesizes engineering reports
- Manages the conversation state

## D. Engineering Engine (Deterministic Python)

The "Truth" layer that:

- Implements deterministic engineering rules
- Runs symbolic physics calculations (Beam theory, buckling)
- Validates AI suggestions against material properties
- Provides safety factor estimations

## E. Simulation Service (Distributed FEM)

For heavy workloads:

- Manages simulation jobs (CalculiX, OpenFOAM)
- Orchestrates worker nodes (Celery / Redis)
- Post-processes results for visual overlays

## F. Web Frontend (Next.js / Three.js)

The workspace:

- 3D interactive viewer for stress heatmaps
- Natural language chat interface
- Material and constraint management dashboard
- Real-time confidence scoring feedback

---

# 3. Data Flow

1. **Upload:** User uploads a CAD file.
2. **Analysis:** Geometry Engine extracts topological features.
3. **Query:** User asks: "How much load can this take?"
4. **Context Building:** API Gateway aggregates Geometry + Engineering Rules.
5. **Reasoning:** AI Engine combines context to generate a physical hypothesis.
6. **Validation:** Engineering Engine calculates safety factors for the hypothesis.
7. **Synthesis:** AI generates the final engineering report.
8. **Feedback:** Frontend renders results + 3D visual overlays.

---

# 4. Persistence Layer

- **PostgreSQL:** Project metadata, user profiles, material libraries, job history.
- **S3 / MinIO:** Raw CAD files, mesh files, simulation result caches.
- **Redis:** Real-time job status, caching analysis results.

---

# 5. Security & Scaling

- **Sandboxed Execution:** Simulation jobs run in isolated containers.
- **Stateless AI API:** Designed for horizontal scaling.
- **GPU Acceleration:** Optional for mesh analysis and neural rendering.
