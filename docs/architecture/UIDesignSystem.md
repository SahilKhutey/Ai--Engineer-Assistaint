# Antigravity — AI Engineering Assistant Dashboard System Design

## 1. UI Vision
Antigravity is an AI-native engineering operating system. It combines the precision of **Fusion 360** with the spatial design of **Figma** and the AI-centricity of **Cursor**.

## 2. Global Layout
- **Left Sidebar:** Navigation (Home, Simulations, Materials, Manufacturing, Reports).
- **Center (Main):** 3D CAD Viewport with Stress/Topology overlays.
- **Right Sidebar (Chat):** AI Engineering Reasoning & Explanation Panel.
- **Right Sidebar (Inspector):** CAD Metadata & Physics Metrics.

## 3. Core Screens
### A. Home Dashboard
- Recent CAD Projects (Cards with thumbnails and risk levels).
- AI Recommendations Feed.
- Quick Actions (Upload CAD, Run Simulation).

### B. Engineering Workspace (PRIMARY)
- Full-screen **React Three Fiber** CAD viewer.
- Overlay controls (Stress, Deflection, Load Paths).
- Real-time **Engineering Inspector** (Dimensions, Mass, Risk Score).

### C. AI Reasoning Dashboard
- Explains the "Why": Geometry Logic + Physics Logic + Rule Violations.
- Confidence score breakdown.

## 4. Design System (Stitch MCP)
- **Background:** Near-black (`#070B14`).
- **Panels:** Graphite (`#0B1020`).
- **Accent:** Electric Blue (`#3B82F6`).
- **Risks:** Amber/Red.
- **Safe:** Cyan/Green.
- **Typography:** Inter (Modern) + JetBrains Mono (Engineering data).

## 5. Technology Stack
- **Framework:** Next.js (App Router).
- **Styling:** TailwindCSS + Framer Motion.
- **3D:** Three.js / React Three Fiber.
- **State:** Zustand.
