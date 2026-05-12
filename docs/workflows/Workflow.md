Workflow.md — AI Engineering Assistant
# AI Engineering Assistant — Workflow Architecture

## Purpose

This document defines the operational workflows of the AI Engineering Assistant.

It explains:

- user interaction flows
- backend processing pipelines
- AI reasoning workflows
- simulation execution lifecycle
- geometry analysis flows
- report generation systems

The goal is to create a predictable, explainable, and scalable engineering AI workflow.

---

# 1. Core Product Workflow

# High-Level Flow

```text
User Uploads CAD
        ↓
Geometry Processing
        ↓
Feature Extraction
        ↓
Engineering Context Creation
        ↓
AI Reasoning Pipeline
        ↓
Physics + Rule Evaluation
        ↓
(Optional) Simulation Execution
        ↓
AI Engineering Report
        ↓
Visual Overlay Generation
        ↓
User Feedback Loop
```

---

# 2. User Workflow

# Primary User Journey

1. **Create Project:** User starts a new analysis project.
2. **Upload CAD Model:** User uploads an STL/STEP file.
3. **Choose Analysis Type:** User selects (Structural, Thermal, Manufacturability).
4. **Enter Engineering Query:** User types: "Will this bracket fail under 100N?"
5. **Run Analysis:** System executes the engine.
6. **Inspect Results:** User views the 3D heatmap and AI report.
7. **Iterate:** User changes dimensions or material and re-runs.

---

# 3. Geometry Analysis Workflow

# Processing Pipeline

1. **Upload Handler:** Validates file integrity and format.
2. **Mesh Sanitization:** Repairs normals, removes duplicates, ensures watertightness (if possible).
3. **Topological Feature Extraction:**
   - Detects holes, ribs, webs, cantilevers.
   - Calculates mass properties (Volume, Center of Mass, Moments of Inertia).
4. **Physical Metadata Generation:** Stores extracted features for the Reasoning Engine.

---

# 4. AI Reasoning Workflow

# Five-Stage Reasoning

1. **Intent Understanding:** Extracts loads, constraints, and specific goals from natural language.
2. **Context Assembly:** Combines Geometry Features + Material Properties + User Query.
3. **Symbolic Physics Generation:** AI generates physical hypotheses and deterministic equations.
4. **Safety Rule Validation:** Checks against industrial safety factors and material limits.
5. **Synthesis & Citation:** Generates the report citing engineering principles.

---

# 5. Simulation Execution Lifecycle

# Job Management

1. **Trigger:** User requests high-fidelity FEM analysis.
2. **Meshing:** Geometry is refined for simulation (tetrahedral/hexahedral mesh).
3. **Solver Orchestration:** Job is sent to the distributed worker pool.
4. **Monitoring:** Real-time progress updates are sent to the frontend.
5. **Ingestion:** Simulation results (VTK/JSON) are parsed back into the visual engine.

---

# 6. Report Generation Workflow

# Output Pipeline

1. **Data Aggregation:** Collects all reasoning, simulation results, and screenshots.
2. **Template Application:** Formats data into a professional engineering report.
3. **Verification:** Ensures all AI assumptions are explicitly listed.
4. **Export:** Generates PDF/HTML shareable document.

---

# 7. Error Handling & Guardrails

- **Mesh Failure:** Alert user if geometry is too broken for analysis.
- **Physical Impossibility:** AI flags if loads exceed obvious material limits instantly.
- **Ambiguity Resolver:** If query is unclear (e.g., "how much load?"), the AI must ask: "Where is the load applied?"

---

# 8. Feedback & Iteration Workflow

- **Design Suggestions:** System suggests adding a rib or changing thickness.
- **Parametric Update:** (Future) User adjusts a slider, and the geometry updates in the analysis loop.

---

# 9. Confidence Scoring Workflow

# Scoring Factors

- **Geometry Quality (30%):** Is it watertight? Are features well-defined?
- **Material Data (20%):** Are properties known and verified?
- **Physics Rule Coverage (30%):** Does the geometry map well to beam/shell/solid heuristics?
- **Simulation Validation (20%):** Has this been verified by an FEM solver?
