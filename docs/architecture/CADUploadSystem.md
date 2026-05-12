# CAD Upload System — Features, Intentions, Geometry & Extraction Engine

## Purpose
The CAD Upload System is the **Geometry Intelligence Entry Point**. 
Its job is to transform **Raw CAD Geometry** into **Structured Engineering Understanding**.

---

## 1. Core Responsibilities
- ✅ Accept CAD models (STL, STEP)
- ✅ Validate geometry (Watertight, Normals)
- ✅ Extract engineering metadata (Mass, Volume)
- ✅ Generate mesh representations for rendering
- ✅ Detect engineering features (Cantilevers, Ribs, Holes)
- ✅ Calculate dimensions and proportions
- ✅ Infer structural meaning and topology
- ✅ Prepare AI reasoning context

---

## 2. Extraction Engines

### A. Geometry Parsing Engine
Extracts vertices, faces, solids, and basic surface/volume metrics.

### B. Dimension Extraction Engine
Calculates overall bounds, min wall thickness, and span lengths.

### C. Feature Extraction Engine
Identifies cantilevers, thin walls, ribs, fillets, and mounting holes.

### D. Topology Extraction Engine
Analyzes connectivity to infer load transfer paths (e.g., Tip-to-Base).

---

## 3. Upload Intelligence Pipeline
1. **CAD Upload:** Initial file reception.
2. **Validation:** Mesh integrity checks (Non-manifold detection).
3. **Parsing:** Converting CAD to internal mesh/topology representation.
4. **Feature Extraction:** Identifying structural primitives.
5. **Metadata Generation:** Calculating mass, complexity, and spans.
6. **AI Context Builder:** Feeding the reasoning engine.

---

## 4. Production Development Order
- **Phase 1:** Upload API, storage, and STL rendering.
- **Phase 2:** STEP parsing, dimension extraction, and metadata.
- **Phase 3:** Feature extraction and topology graphs.
- **Phase 4:** AI context generation and simulation prep.
