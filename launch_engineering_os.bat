@echo off
title Antigravity Engineering OS Control Center
echo ============================================================
echo [SOVEREIGN_OS] INITIATING_LAUNCH_SEQUENCE_PHASE_55
echo ============================================================
echo.

echo [INFO] Spawning Sovereign Intelligence Backend (Port 8000)...
cd apps\api
start "Antigravity API Backend" /min cmd /c uvicorn main:app --host 0.0.0.0 --port 8000
cd ..\..

echo [INFO] Spawning Sovereign Web Frontend Dashboard (Port 3000)...
start "Antigravity Web Frontend" /min cmd /c npm run dev:web

echo [INFO] Synchronizing kernels and building dashboard assemblies (5s)...
timeout /t 5 /nobreak > nul

echo [INFO] Launching Cockpit Viewer at http://localhost:3000...
start http://localhost:3000

echo.
echo ============================================================
echo [STATUS] SYSTEM_NOMINAL_CONVERGED - MISSION_READY
echo ============================================================
echo.
echo Control Center is active. 
echo -> Press ANY KEY to terminate all background servers and exit.
echo.
pause > nul

echo.
echo [INFO] Terminating backend and frontend processes...
taskkill /fi "windowtitle eq Antigravity API Backend*" /f > nul 2>&1
taskkill /fi "windowtitle eq Antigravity Web Frontend*" /f > nul 2>&1
echo [INFO] Shutdown sequence complete. NOMINAL LOCK OFF.
timeout /t 2 > nul
