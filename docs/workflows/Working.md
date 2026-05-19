Working.md — AI Engineering Assistant

# AI Engineering Assistant — Internal Working System

## Purpose

This document explains HOW the AI Engineering Assistant actually works internally.

It covers:

- reasoning pipelines
- geometry understanding
- structural estimation
- simulation orchestration
- AI decision-making
- confidence scoring
- engineering explanation systems

This is the operational intelligence layer of the platform.

---

# 1. Core Working Principle

The platform combines:

```text
LLMs
+
Engineering Rules
+
Geometry Understanding
+
Physics Approximations
+
Simulation Systems
+
Explainability Layers
```

The system is NOT:

❌ a pure chatbot

❌ a pure FEM solver

❌ a generic AI wrapper

It is:

✅ an engineering reasoning system

---

# 2. Internal Processing Pipeline

# Full Pipeline

1. **User Query:** User asks a question about a design.
2. **Intent Understanding:** AI parses query for goals (e.g., "Will this break?").
3. **Geometry Understanding:** Geometry engine extracts mesh properties.
4. **Constraint Extraction:** Intent + Geometry identifies supports and loads.
5. **Physics Reasoning:** System runs fast-path physics heuristics.
6. **Engineering Rules:** Deterministic rules validate safety.
7. **Simulation (Optional):** Heavy FEM runs if higher confidence is needed.
8. **Synthesis:** AI explains the findings using engineering first principles.
9. **Risk Estimation:** Final determination of safety factor and failure risk.

---

# 3. Geometry Understanding System

# How it "sees" parts

- **Voxelization:** System converts complex mesh to voxels for structural volume checks.
- **Topology Mapping:** Detects connectivity and load paths.
- **Feature Detection:** Uses geometric algorithms to find:
  - Ribs (Reinforcements)
  - Holes (Stress concentrators)
  - Fillets (Stress reduction)
  - Cantilevers (Bending risk)

---

# 4. Structural Estimation System

# Heuristic Calculations

The system uses **Simplified Physics Models** for instant feedback:

- **Beam Theory:** Approximating parts as collections of beams.
- **Shell Theory:** For thin-walled enclosures.
- **Material Heuristics:** Estimating yielding based on Von Mises approximations.

---

# 5. AI Reasoning Strategy

# Multi-Agent Orchestration

- **The Architect:** Plans the analysis steps.
- **The Physicist:** Generates the symbolic equations.
- **The Checker:** Runs the deterministic rule engine.
- **The Writer:** Synthesizes the final engineering report.

---

# 6. Confidence Scoring Logic

# Mathematical Basis

Confidence ($C$) is calculated as:
$C = (G \times 0.3) + (M \times 0.2) + (R \times 0.3) + (S \times 0.2)$

Where:

- $G$ = Geometry Quality (watertight, manifold)
- $M$ = Material Certainty (verified properties)
- $R$ = Rule Coverage (did equations cover the intent?)
- $S$ = Simulation Match (do heuristics match FEM?)

---

# 7. Deterministic Guardrails (Anti-Hallucination)

- **Rule Engine:** If the LLM says "This is safe," but the Engineering Engine calculates a safety factor < 1.0, the **Rule Engine overrides the AI** and forces a "High Risk" warning.
- **Material Clipping:** AI cannot invent material properties; it must pull from the verified `materials.json`.

---

# 8. Explainability Layer

# The "Traceability" Requirement

The system must never just say "It's safe." It must say:

- "The safety factor is 2.5."
- "Based on the Euler-Bernoulli beam equation..."
- "Assuming a fixed support at the base..."
- "Check Section 4 for deflection calculations."

---

# 9. Simulation Orchestration

# When to Simulate?

1. **User Trigger:** Manual request.
2. **Low Confidence:** AI triggers FEM if heuristics are too ambiguous.
3. **Regulatory Requirement:** If safety factor is close to the margin (e.g., 1.1 - 1.3).
4. **Complex Geometry:** Non-standard forms that beam theory cannot solve.

---

# 10. Design Suggestion Engine

# Optimization Logic

If failure is detected, the engine runs "What-If" scenarios:

- "What if thickness increases by 20%?"
- "What if we add a rib at point X?"
- "What if we change to Steel?"
  The best outcome is presented as a **Design Recommendation**.
