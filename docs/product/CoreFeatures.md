# AI Engineering Assistant — Core Features

## 1. Product Vision
The AI Engineering Assistant is an **AI-native engineering copilot** for mechanical, structural, manufacturing, and product design workflows.

The product helps users:
- Analyze designs.
- Identify weaknesses.
- Estimate structural risks.
- Improve manufacturability.
- Simulate engineering behavior.
- Generate engineering insights.

---

## 2. Core Product Principles
The system must always be:
- ✅ Geometry-aware
- ✅ Physics-grounded
- ✅ Explainable
- ✅ Simulation-assisted
- ✅ Engineering-focused

---

## 3. Primary User Flow
1. **Upload CAD:** User uploads STL/STEP.
2. **Analyze Geometry:** Extract dimensions and topology.
3. **Apply Rules:** Run physics heuristics and rule engine.
4. **Estimate Risk:** Determine safety factors and failure modes.
5. **Generate Recommendations:** Suggest design improvements.
6. **Visualize:** Overlay heatmaps and risk zones.
7. **Report:** Produce exportable PDF summary.

---

## 4. Core Feature Categories

### A. CAD & Geometry
- **5.1 CAD Upload System:** Drag-and-drop STL/STEP with version tracking.
- **5.2 Geometry Parsing:** Extraction of volume, area, wall thickness, and hole positions.
- **5.3 Feature Detection Engine:** Detect cantilevers, ribs, thin walls, and unsupported spans.
- **5.4 Geometry Graph System:** Mapping supports, beams, and load regions into a graph.
- **5.5 Material Assignment:** Library including PLA, Aluminum, Steel, etc.

### B. Engineering AI
- **6.1 Engineering Copilot Chat:** NLP interface for complex structural queries.
- **6.2 Engineering Context Builder:** Aggregates geometry, physics, and rules for the LLM.
- **6.3 Explanation Engine:** Explains WHY, WHERE, and HOW of failure/success.
- **6.4 Assumption Detection:** Identifies missing constraints or unknown materials.
- **6.5 Confidence Scoring:** Trust metric based on data quality (e.g., 78% Confidence).

### C. Physics Engine
- **7.1 Static Load Estimation:** Force distribution and support reactions.
- **7.2 Stress Approximation:** Heuristic stress calculation ($\sigma = F/A$).
- **7.3 Beam Deflection Analysis:** ($\delta = FL^3/3EI$).
- **7.4 Buckling Detection:** Euler buckling approximations.
- **7.5 Failure Risk Estimation:** Yielding, excessive bending, and shear risk.

### D. Rule Engine
- **8.1 Structural Heuristics:** Encoding rules like "length/thickness ratio too high."
- **8.2 Manufacturability Rules:** Overhang detection and joint weakness.
- **8.3 Safety Rules:** Dangerous loads and missing constraint warnings.
- **8.4 Material Rules:** Creep risk and environmental degradation warnings.

### E. Visualization
- **9.1 Interactive 3D Viewer:** Zoom, rotate, section cuts.
- **9.2 Stress Heatmaps:** Green/Yellow/Red overlays on geometry.
- **9.3 Weak Region Highlighting:** Specific callouts for bending zones.
- **9.4 Engineering Overlay System:** Force vectors and load directions.

### F. Simulation
- **10.1 Simplified Structural Solver:** Fast static loading solver.
- **10.2 FEM Job Pipeline:** Geometry → Meshing → BCs → Solver → Results.
- **10.3 Solver Infrastructure:** Integration with CalculiX and FreeCAD FEM.

### G. Recommendation Engine
- **11.1 Structural Recommendations:** Add gussets, increase thickness, add ribs.
- **11.2 Material Recommendations:** Switch materials for higher stiffness.
- **11.3 Manufacturability Suggestions:** Simplify machining or improve print orientation.

### H. Report Generation
- **12.1 Engineering Summary Reports:** Risk/Recommendation summaries.
- **12.2 PDF Export:** Screenshots and overlays in a professional format.
- **12.3 Simulation Reports:** Stress and deformation plots.

### I. Project Management
- **13.1 Project Dashboard:** Stores models, history, and revisions.
- **13.2 Version Tracking:** History of geometry and material changes.

---

## 5. MVP Core Features (Build Priority)

| Feature | Priority |
|---|---|
| Auth & Dashboard | Critical |
| CAD Upload & STL Viewer | Critical |
| Geometry Parsing | Critical |
| Engineering AI Chat | Critical |
| Structural Heuristics | Critical |
| Recommendation Engine | Critical |
| Engineering Reports | Critical |
| Stress Overlays | High |
| Confidence Engine | High |
| Material Database | High |
| Simulation Queue | Medium |

---

## 6. Safety & Guardrails
- **Confidence Warnings:** Explicitly state uncertainty.
- **Constraint Detection:** Alert user of missing supports.
- **Simulation Recommendations:** Trigger heavy FEM if uncertain.
- **Legal Notices:** Not a substitute for professional engineering certification.
