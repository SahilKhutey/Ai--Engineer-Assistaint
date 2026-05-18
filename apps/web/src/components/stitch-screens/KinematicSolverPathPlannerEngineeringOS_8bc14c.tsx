'use client';

import React, { useState } from 'react';
import {
  Settings,
  Zap,
  Terminal,
  Activity,
  Maximize2,
  Rotate3d,
  ZoomIn,
  Layers,
  ShieldCheck,
  Cpu,
  Thermometer,
  Database,
  ChevronRight,
  RefreshCcw,
  Play,
  CornerDownRight,
  AlertTriangle,
  CheckCircle2,
  SlidersHorizontal,
  Workflow,
  Target,
  Gauge
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * KinematicSolverPathPlannerEngineeringOS_8bc14c (Phase 58 Hardened)
 * 
 * Neural Kinematics solver interface for multi-DOF robotic path planning.
 * Features real-time joint parameter modulation, inverse kinematics (IK) telemetry,
 * and high-frequency motion Terminal logging.
 * Integrated with roboticsState and osStatus.
 */
const KinematicSolverPathPlannerEngineeringOS_8bc14c = () => {
  const { roboticsState, osStatus, pushEvent } = useEngineeringStore();
  const [isExecuting, setIsExecuting] = useState(false);

  // Mapped telemetry from store
  const gpuLoad = ((osStatus?.kernelLoad || 0.142) * 100).toFixed(1);
  const temp = 60;
  const frameTime = 3.4; // Simulated metric
  
  const joints = [
    { id: 'JOINT_01_BASE', label: 'Base', val: 45.0, min: -180, max: 180, unit: '°' },
    { id: 'JOINT_02_SHOULDER', label: 'Shoulder', val: -12.8, min: -90, max: 90, unit: '°' },
    { id: 'JOINT_03_ELBOW', label: 'Elbow', val: 112.4, min: 0, max: 160, unit: '°' },
    { id: 'JOINT_04_WRIST', label: 'Wrist', val: 0.0, min: -360, max: 360, unit: '°' },
  ];

  const handleExecute = () => {
    setIsExecuting(true);
    pushEvent?.('EXECUTE_PATH', { 
      algorithm: 'NEURAL_IK_V2', 
      timestamp: Date.now() 
    });
    setTimeout(() => setIsExecuting(false), 2000);
  };

  const handleReset = () => {
    pushEvent?.('RESET_POSE', { timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f14] text-[#e1e2ec] font-sans overflow-hidden selection:bg-[#4cd7f6]/30 relative">
      
      {/* 1. HUD OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none z-50 hud-scanline opacity-10" />

      {/* 2. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-[#202b3c] bg-[#10131a]/70 backdrop-blur-xl flex justify-between items-center z-[60] shrink-0">
        <div className="flex items-center gap-3">
          <Workflow className="w-5 h-5 text-[#4cd7f6]" />
          <h1 className="text-[14px] font-bold text-[#4cd7f6] tracking-[0.2em] uppercase leading-none">NEURAL_KINEMATICS // V4_SOLVER</h1>
          <div className="flex items-center gap-6 ml-8">
            <nav className="flex gap-4">
              <NavButton label="KINEMATICS" active />
              <NavButton label="DYNAMICS" />
              <NavButton label="AI_STABILITY" />
            </nav>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#4cd7f6]/10 border border-[#4cd7f6]/20 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-pulse" />
            <span className="text-[9px] font-mono font-bold text-[#4cd7f6] uppercase tracking-widest">REAL-TIME_IK_FEED</span>
          </div>
          <Settings className="w-4 h-4 text-[#8c909f] cursor-pointer hover:text-[#e1e2ec]" />
        </div>
      </header>

      {/* 3. MAIN WORKSPACE GRID */}
      <main className="flex-1 p-6 grid grid-cols-12 grid-rows-6 gap-6 overflow-hidden">
        
        {/* Viewport: 3D Wireframe */}
        <section className="col-span-12 lg:col-span-8 row-span-4 bg-[#1d2027] border border-[#202b3c] rounded-2xl overflow-hidden relative shadow-2xl group">
          <header className="absolute top-0 w-full px-4 py-2 bg-[#272a31]/60 backdrop-blur-md border-b border-[#202b3c] flex justify-between items-center z-10">
            <span className="text-[10px] font-bold text-[#8c909f] uppercase tracking-widest">VIEWPORT::IK_WIREFRAME_01</span>
            <div className="flex gap-4">
              <Maximize2 className="w-3.5 h-3.5 text-[#8c909f] cursor-pointer hover:text-[#e1e2ec]" />
              <Settings className="w-3.5 h-3.5 text-[#8c909f] cursor-pointer hover:text-[#e1e2ec]" />
            </div>
          </header>
          
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover opacity-20 grayscale brightness-75 group-hover:scale-110 transition-transform duration-[20s]"
              alt="Robotic Wireframe Simulation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-transparent" />
          </div>

          <div className="absolute top-16 left-8 z-10 border-l border-[#4cd7f6]/40 pl-4 py-2 flex flex-col gap-1">
            <span className="text-[9px] font-bold text-[#4cd7f6] uppercase tracking-[0.4em] mb-2">AXIS_REFERENCE</span>
            <RefValue label="X" val="452.12" unit="mm" />
            <RefValue label="Y" val="-12.44" unit="mm" />
            <RefValue label="Z" val="890.01" unit="mm" />
          </div>

          <div className="absolute bottom-8 right-8 z-10">
            <div className="bg-[#10131a]/80 backdrop-blur-md border border-[#4cd7f6]/30 px-5 py-2.5 rounded-xl flex items-center gap-3 shadow-2xl">
              <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981]" />
              <span className="text-[11px] font-bold text-[#e1e2ec] uppercase tracking-widest">SOLVER_STATUS: CONVERGED</span>
            </div>
          </div>
        </section>

        {/* Control Panel: Joint Parameters */}
        <section className="col-span-12 lg:col-span-4 row-span-4 bg-[#1d2027] border border-[#202b3c] rounded-2xl flex flex-col overflow-hidden shadow-2xl">
          <header className="px-6 py-4 border-b border-[#202b3c] bg-[#272a31]/50">
            <h3 className="text-[11px] font-bold text-[#4cd7f6] uppercase tracking-[0.2em] flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              JOINT_PARAMETERS
            </h3>
          </header>
          <div className="flex-1 p-6 space-y-8 overflow-y-auto custom-scrollbar">
            {joints.map(joint => (
              <div key={joint.id} className="space-y-3">
                <div className="flex justify-between font-mono text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-[#8c909f]">{joint.id}</span>
                  <span className="text-[#4cd7f6]">{joint.val.toFixed(2)}{joint.unit}</span>
                </div>
                <input 
                  type="range" 
                  min={joint.min} 
                  max={joint.max} 
                  defaultValue={joint.val}
                  className="w-full accent-[#4cd7f6] h-1.5 bg-[#202b3c] rounded-full appearance-none cursor-pointer" 
                />
                <div className="flex justify-between text-[9px] font-bold text-[#8c909f] tracking-widest">
                  <span>{joint.min.toFixed(2)}</span>
                  <span>{joint.max.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          <footer className="p-6 border-t border-[#202b3c] flex flex-col gap-3 bg-[#10131a]/30">
            <button 
              onClick={handleExecute}
              disabled={isExecuting}
              className={`w-full py-4 rounded-xl font-bold text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl ${
                isExecuting 
                ? 'bg-[#424754] text-[#8c909f] cursor-not-allowed' 
                : 'bg-[#4cd7f6] text-[#003640] hover:bg-[#acedff] shadow-[0_0_20px_rgba(76,215,246,0.3)]'
              }`}
            >
              <Zap className={`w-4 h-4 ${isExecuting ? 'animate-pulse' : ''}`} />
              {isExecuting ? 'EXECUTING_PATH...' : 'Execute Path'}
            </button>
            <button 
              onClick={handleReset}
              className="w-full py-4 border border-[#202b3c] rounded-xl font-bold text-[11px] uppercase tracking-[0.3em] text-[#e1e2ec] hover:bg-[#272a31] transition-all"
            >
              Reset Pose
            </button>
          </footer>
        </section>

        {/* Terminal Panel: Motion CMD Shell */}
        <section className="col-span-12 lg:col-span-8 row-span-2 bg-[#1d2027] border border-[#202b3c] rounded-2xl overflow-hidden flex flex-col shadow-2xl">
          <header className="px-6 py-3 border-b border-[#202b3c] bg-[#272a31]/50 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-[#8c909f] uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                MOTION_CMD_SHELL
              </span>
              <div className="flex items-center gap-2 px-3 py-1 bg-[#4cd7f6]/10 rounded border border-[#4cd7f6]/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6]" />
                <span className="text-[9px] font-mono font-bold text-[#4cd7f6]">LISTENING:8080</span>
              </div>
            </div>
          </header>
          <div className="flex-1 p-4 font-mono text-[11px] overflow-y-auto custom-scrollbar bg-[#0b0f14] space-y-1">
            <LogLine time="09:21:04" type="INFO" msg="INITIALIZING_KINEMATIC_CHAIN..." color="text-[#8c909f]" />
            <LogLine time="09:21:05" type="MODEL" msg="MODEL_LOADED: 6DOF_ARM_V4" color="text-[#8c909f]" />
            <LogLine time="09:21:05" type="SOLVER" msg="Inverse Kinematics iteration cycle started." color="text-[#4cd7f6]" />
            <LogLine time="09:21:06" type="CMD" msg="MOVE_TO(X:452, Y:-12, Z:890)" color="text-[#e1e2ec]" />
            <LogLine time="09:21:06" type="WARN" msg="Singular proximity at Joint 04. Adjusting damping factors." color="text-[#ffb786]" />
            <LogLine time="09:21:07" type="SUCCESS" msg="Converged in 24 iterations. Error: 0.0001mm" color="text-[#10B981]" />
            <div className="flex items-center gap-2 text-[#4cd7f6] mt-2">
              <span className="animate-pulse font-bold">&gt;</span>
              <span className="w-2 h-4 bg-[#4cd7f6]/40 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Stats Panel: System Metrics */}
        <section className="col-span-12 lg:col-span-4 row-span-2 bg-[#1d2027] border border-[#202b3c] rounded-2xl overflow-hidden shadow-2xl">
          <header className="px-6 py-3 border-b border-[#202b3c] bg-[#272a31]/50">
            <span className="text-[10px] font-bold text-[#8c909f] uppercase tracking-widest">SYSTEM_METRICS</span>
          </header>
          <div className="grid grid-cols-2 h-full">
            <MetricBox label="COMPUTE_LOAD" val={`${gpuLoad}%`} icon={<Cpu className="w-4 h-4" />} />
            <MetricBox label="FRAME_TIME" val={`${frameTime}ms`} icon={<Activity className="w-4 h-4" />} color="text-[#4cd7f6]" />
            <MetricBox label="TEMP_CORE" val={`${temp}°C`} icon={<Thermometer className="w-4 h-4" />} />
            <MetricBox label="BUFFER" val="OPTIMAL" icon={<Target className="w-4 h-4" />} color="text-[#10B981]" />
          </div>
        </section>

      </main>

      <style jsx>{`
        .hud-scanline {
          background: linear-gradient(to bottom, transparent 50%, rgba(76, 215, 246, 0.05) 50.5%, transparent 51%);
          background-size: 100% 4px;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #32353c; border-radius: 10px; }
      `}</style>
    </div>
  );
};

const NavButton = ({ label, active }: any) => (
  <button className={`text-[11px] font-bold tracking-[0.2em] transition-all hover:opacity-100 ${active ? 'text-[#4cd7f6] opacity-100' : 'text-[#8c909f] opacity-60'}`}>
    {label}
  </button>
);

const RefValue = ({ label, val, unit }: any) => (
  <div className="flex items-center gap-3">
    <span className="text-[11px] font-mono font-bold text-[#8c909f]">{label}:</span>
    <span className="text-[12px] font-mono font-bold text-[#e1e2ec]">{val}</span>
    <span className="text-[10px] font-mono font-bold text-[#8c909f]/50">{unit}</span>
  </div>
);

const LogLine = ({ time, type, msg, color }: any) => (
  <div className="flex gap-4 py-0.5 group">
    <span className="text-[#8c909f]/40 font-bold shrink-0">[{time}]</span>
    <span className={`font-bold shrink-0 min-w-[70px] ${color}`}>{type}::</span>
    <span className="text-[#e1e2ec]/80 group-hover:text-[#e1e2ec]">{msg}</span>
  </div>
);

const MetricBox = ({ label, val, icon, color = 'text-[#e1e2ec]' }: any) => (
  <div className="border border-[#202b3c]/50 p-4 flex flex-col items-center justify-center gap-1 hover:bg-[#272a31]/30 transition-all">
    <div className="text-[#8c909f] mb-1">{icon}</div>
    <span className="text-[9px] font-bold text-[#8c909f] uppercase tracking-widest">{label}</span>
    <span className={`text-[16px] font-mono font-bold ${color}`}>{val}</span>
  </div>
);

export default KinematicSolverPathPlannerEngineeringOS_8bc14c;
