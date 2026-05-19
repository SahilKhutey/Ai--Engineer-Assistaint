Design.md — AI Engineering Assistant

# AI Engineering Assistant — Design System & UX Architecture

## Design Philosophy

The product should feel like:

- an advanced engineering workstation
- an AI-native CAD assistant
- a modern simulation environment
- a trustworthy engineering tool

NOT:

- a generic chatbot
- a consumer AI app
- a cluttered CAD interface

---

# 1. Core UX Principles

# A. Engineering First

Every interaction must prioritize:

- precision
- clarity
- explainability
- confidence reporting

---

# B. AI as Copilot

The AI assists the engineer.

The UI must reinforce:

- human control
- editable assumptions
- traceable reasoning
- visible uncertainty

---

# C. Visual Reasoning

Engineering is visual.

The UI should emphasize:

- geometry understanding
- visual overlays
- stress visualization
- interactive inspection

---

# D. Progressive Complexity

Beginners:

- simplified outputs
- guided explanations

Experts:

- advanced controls
- raw simulation data
- configurable assumptions

---

# 2. Design Tokens (The "Cyber-Industrial" Theme)

# A. Color Palette

Primary: `#0B1020` (Deep Space / Workbench)
Secondary: `#121A2A` (Sidebar / Panels)
Surface: `#182235` (Cards / Inputs)

Accent 1: `#3B82F6` (Engineering Blue - Selection)
Accent 2: `#7C5CFF` (AI Purple - Intelligence)
Accent 3: `#10B981` (Success Green - Safe zones)
Accent 4: `#F59E0B` (Warning Yellow - High stress)
Accent 5: `#EF4444` (Danger Red - Failure zones)

Border: `#2D3748` (Industrial Gray)

---

# B. Typography

System: `Inter` (UI elements, readability)
Technical: `JetBrains Mono` (Dimensions, coordinates, code, metadata)

Hierarchy:

- H1: 24px Bold (JetBrains Mono)
- H2: 18px Semi-bold (Inter)
- Body: 14px Regular (Inter)
- Technical Label: 12px Mono (JetBrains Mono)

---

# C. Components

- **Glassmorphism:** Subtle background blurs on floating 3D panels.
- **Industrial Borders:** Sharp 1px borders with slight rounding (4px).
- **Glow Effects:** Subtle primary/purple glows for active AI reasoning.

---

# 3. Main Workspace Layout

# A. The "T-Layout"

1. **Top Bar (Global):**
   - Project Name
   - Breadcrumbs
   - File Menu
   - User Profile
   - Global Search

2. **Left Sidebar (Tools):**
   - File Explorer
   - Material Library
   - Geometry Features (extracted list)
   - Simulation Jobs Queue
   - History

3. **Center Pane (3D Viewer):**
   - Primary Interactive 3D Mesh
   - Floating Gizmos (Move, Rotate)
   - View Cube
   - Overlay Toggles (Stress, Deflection, Safety Factor)
   - Dynamic Dimensions

4. **Right Sidebar / Bottom (The AI Console):**
   - AI Chat Interface
   - Reasoning Logs
   - Assumption Tracking
   - Results Summary
   - Export Tools (PDF, Report)

---

# 4. Interactive Feedback Loops

# A. Real-time Analysis

As the user selects a material or changes a load, the AI should provide immediate, low-latency "heuristic feedback" in the bottom corner (e.g., "Buckling risk detected").

# B. Confidence Meters

Every AI engineering report must include a confidence score (0-100%) based on:

- geometry quality
- material data completeness
- query ambiguity
- simulation availability

# C. Assumption Highlighting

Assumptions made by the AI (e.g., "Assuming 316 Stainless Steel") should be highlighted as clickable tags that allow the user to override them instantly.

---

# 5. Visual Vocabulary for Engineering

- **Heatmaps:** Smooth gradients (Green → Yellow → Red) for stress.
- **Vectors:** Arrows indicating force directions and magnitudes.
- **Callouts:** Labels floating in 3D space pointing to specific geometry features (e.g., "Wall thickness: 2mm").
- **Shaders:** Using x-ray or wireframe modes to show internal features or stress concentrations.
