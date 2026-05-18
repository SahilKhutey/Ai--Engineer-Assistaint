@echo off
echo ============================================================
echo [SOVEREIGN_OS] INITIATING_LAUNCH_SEQUENCE_PHASE_55
echo ============================================================
echo.
echo [INFO] Starting Sovereign Intelligence Frontend...
cd apps\web
start /b npm run dev
cd ..\..

echo [INFO] Starting Sovereign Intelligence Backend...
cd apps\api
start /b uvicorn main:app --host 0.0.0.0 --port 8000
cd ..\..

echo [INFO] Waiting for Kernel Synchronization (5s)...
timeout /t 5 /nobreak > nul
echo [INFO] Opening Reality-Linked Mission Control...
start http://localhost:3000
echo.
echo ============================================================
echo [STATUS] SYSTEM_NOMINAL_CONVERGED
echo ============================================================
pause
