PRD — AI Engineering Assistant
Product Vision

An AI-powered engineering copilot that helps engineers, makers, robotics teams, hardware startups, and students analyze mechanical designs using natural language and CAD/simulation data.

The assistant acts like a junior mechanical analyst + design reviewer:

evaluates structures
estimates feasibility
identifies weak points
explains engineering tradeoffs
suggests design improvements
connects with CAD + simulation workflows

1. Product Overview
   Example User Flow

User uploads:

CAD model
STL
STEP
screenshot
dimensions

User asks:

“Can this bracket survive a 20kg load mounted horizontally?”

AI returns:

estimated stress zones
likely failure points
confidence level
material assumptions
design modifications
optional simulation preview 2. Core Problem

Mechanical analysis tools are:

difficult for beginners
simulation-heavy
expensive
require expert interpretation

Most engineers need:

fast feasibility checks
iterative guidance
design intuition
manufacturability validation 3. Key Features (MVP)
A. Geometry Intelligence

Extract dimensions, volume, mass properties.
Identify features (cantilevers, thin walls, holes, ribs).
Manufacturability indicators (overhangs, thin walls).
B. Structural Heuristics

Symbolic physics engine for beam theory, buckling, and stress approximation.
Determination of likely failure modes.
Safety factor estimation.
C. Conversational Engineering

Natural language interface for design review.
Explainable AI that cites engineering principles (Euler-Bernoulli, Yield Strength).
Assumption tracking (e.g., “Assuming 6061 Aluminum”).
D. Visual Overlay

3D heatmap overlays for stress/risk zones.
Interactive geometry inspection.
Simulation job management. 4. Target Audience

Mechanical Engineers (Speed)
Robotics Teams (Rapid iteration)
Hardware Startups (Cost reduction)
Industrial Designers (Engineering feasibility)
Engineering Students (Learning tool) 5. Success Metrics

Speed to Insight: Initial analysis in < 5 seconds.
Accuracy: Within 15% of high-fidelity FEM for standard beam-like structures.
Human Trust: Confidence level reporting and explanation quality.
Retention: Engineers using it for daily design checks. 6. The “Real Moat”

The moat is the Engineering Reasoning Layer—the ability to map semantic engineering intent to deterministic physical calculations.
