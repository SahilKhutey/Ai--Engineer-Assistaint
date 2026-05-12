Techstack.md — AI Engineering Assistant
# AI Engineering Assistant — Complete Tech Stack

## Purpose

This document defines the complete technology stack for building the AI Engineering Assistant platform.

The stack is designed for:

- AI-native engineering workflows
- CAD processing
- simulation workloads
- scalable infrastructure
- real-time visualization
- distributed computation

---

# 1. Core Technology Philosophy

The stack should prioritize:

✅ modularity

✅ simulation scalability

✅ AI orchestration

✅ GPU compatibility

✅ engineering-grade reliability

✅ future enterprise deployment

---

# 2. Frontend Stack

# Core Frontend Framework

| Technology | Purpose |
|---|---|
| React | UI framework |
| Next.js | app framework |
| TypeScript | type safety |

---

# Styling

| Technology | Purpose |
|---|---|
| TailwindCSS | utility styling |
| Framer Motion | animations |
| clsx | conditional styling |

---

# State Management

| Technology | Purpose |
|---|---|
| Zustand | global state management |
| TanStack Query | API data fetching |

---

# 3D Visualization

| Technology | Purpose |
|---|---|
| Three.js | 3D engine |
| React Three Fiber | Three.js react wrapper |
| React Three Drei | Three.js helpers |
| GLSL | custom shaders (heatmaps) |

---

# 3. Backend Stack

# API & Orchestration

| Technology | Purpose |
|---|---|
| Python | primary language |
| FastAPI | web framework |
| Pydantic | data validation |
| Uvicorn | ASGI server |

---

# AI & Reasoning

| Technology | Purpose |
|---|---|
| LangChain | agent orchestration |
| Google Gemini API | primary LLM |
| Claude API | secondary LLM (coding/reasoning) |
| LlamaIndex | indexing geometry context |

---

# Geometry & CAD Processing

| Technology | Purpose |
|---|---|
| Trimesh | mesh analysis |
| pythonOCC | OpenCascade CAD kernel |
| NumPy / SciPy | numerical computation |
| Pyrender | headless rendering |

---

# 4. Simulation & Compute

| Technology | Purpose |
|---|---|
| CalculiX | open-source FEM solver |
| OpenFOAM | open-source CFD solver |
| MeshPy / Gmsh | mesh generation |
| Docker | solver containerization |

---

# 5. Infrastructure & Devops

# Persistence

| Technology | Purpose |
|---|---|
| PostgreSQL | relational data |
| Redis | caching / job broker |
| AWS S3 | file storage (CAD/Mesh) |
| ChromaDB | vector database |

---

# Scaling & Workers

| Technology | Purpose |
|---|---|
| Celery | async task queue |
| Flower | task monitoring |
| Kubernetes | container orchestration |

---

# 6. Development Tools

| Technology | Purpose |
|---|---|
| Pytest | backend testing |
| Jest / Vitest | frontend testing |
| Playwright | E2E browser testing |
| ESLint / Prettier | linting & formatting |

---

# 7. Deployment

| Technology | Purpose |
|---|---|
| Docker Compose | local development |
| GitHub Actions | CI/CD |
| Terraform | infrastructure as code |

---

# 18. MVP Recommended Stack

For the initial build, we prioritize:
- **Frontend:** Next.js + Three.js + Tailwind
- **Backend:** FastAPI + Trimesh + Gemini
- **Infrastructure:** Docker Compose + PostgreSQL
- **Language:** Python + TypeScript
