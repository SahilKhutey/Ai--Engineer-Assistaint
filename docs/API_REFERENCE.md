# Sovereign API Reference (v3.2)

The Antigravity API is a hardened, sovereign backend for mission-critical engineering orchestration.

## Base URL

`http://localhost:8000`

## Headers

- `X-Sovereign-Latency`: Sub-millisecond process time tracking.
- `X-Sovereign-Kernel-Status`: `DETERMINISTIC_LOCK` for Phase 55 compliance.
- `X-Phase-Compliance`: `55_MISSION_CONTROL`.

## Endpoints

### 1. Root & Health

- **`GET /`**: Returns system status and version (v3.2 Sovereign).
- **`GET /health/sovereign`**: Detailed health check of the cognition bus and reality persistence.

### 2. Sovereign Analysis

- **`POST /api/analysis`**: Triggers the high-fidelity engineering pipeline.
  - **Body**: `AnalysisRequest`
    - `question`: str (Sovereign Intent)
    - `domain`: str (e.g., `STRUCTURAL`, `THERMAL`)
    - `sovereign_intent`: bool (default `true`)
    - `fidelity`: float (default `1.0`)
  - **Response**: `job_id`, `status` (`SOVEREIGN_ANALYSIS_INITIATED`).

- **`GET /api/analysis/status/{job_id}`**: Retrieves the status and results of a sovereign analysis job.
  - **Response States**:
    - `SOVEREIGN_PENDING`: Kernel sync in progress.
    - `SOVEREIGN_CONVERGED`: Results ready with reality persistence metrics.
    - `SOVEREIGN_FAULT`: Kernel drift or manifold failure detected.

### 3. Sovereign Infrastructure

- **`GET /artifacts/{path}`**: Access to sovereign design artifacts (FEA results, CAD files).
- **`GET /reports/{path}`**: Access to generated engineering certification reports.
- **`POST /upload`**: Secure upload of sovereign engineering assets (STEP files, material data).

## Error Handling

The API uses standard HTTP status codes with sovereign metadata:

- **400 Bad Request**: Malformed sovereign intent.
- **408 Request Timeout**: Kernel synchronization failure.
- **422 Unprocessable Entity**: Phase 55 safety margin violation.
- **500 Internal Server Error**: Deterministic kernel lock failure.

---

© 2026 Antigravity Intelligence Systems | API v3.2
