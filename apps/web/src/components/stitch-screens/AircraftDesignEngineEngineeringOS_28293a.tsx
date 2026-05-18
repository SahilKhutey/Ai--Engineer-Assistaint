'use client';


import {
  Terminal,
  Settings,
  Activity,
  Brain,
  BarChart3,
  Workflow,
  History,
  HardDrive,
  Zap,
  FlaskConical,
  Sparkles,
  Plus,
  Play,
  Power,
  LayoutGrid,
  Waves,
  GitBranch,
  Grid,
  Layers,
  Settings2,
  Share2,
  SlidersHorizontal,
  Code} from 'lucide-react';
import React, { useState } from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * AircraftDesignEngine v2.0.4 (Phase 55 Hardened)
 * 
 * High-fidelity aerospace design workspace for hypersonic drones and fixed-wing vehicles.
 * Features real-time geometric parameterization, structural skeleton analysis, 
 * and AI-driven stability optimization.
 */
const AircraftDesignEngineEngineeringOS_28293a = () => {
  const { 
    aerospaceState, 
    structuralState, 
    osStatus, 
    pushEvent, 
    addNotification 
  } = useEngineeringStore();

  const [wingspan, setWingspan] = useState(12.45);
  const [fuselageLen, setFuselageLen] = useState(8.22);
  const [airfoil, setAirfoil] = useState('NACA_0012');

  const gpuLoad = osStatus?.kernelLoad ? (osStatus.kernelLoad * 100).toFixed(0) : "12";
  const liftForce = aerospaceState?.vitals?.lift_n || 4500;
  const dragForce = aerospaceState?.vitals?.drag_n || 820;

  const handleRunSimulation = () => {
    pushEvent?.('RUN_AERO_SIMULATION', { wingspan, fuselageLen, airfoil, timestamp: Date.now() });
    addNotification?.({
      title: 'SIMULATION_QUEUED',
      message: 'Processing Navier-Stokes solvers for current geometry. Estimated TTR: 4.2s.',
      type: 'INFO',
      domain: 'SPATIAL'
    });
  };

  const handleApplyAIAdjustment = () => {
    pushEvent?.('APPLY_AI_WING_SWEEP', { target: 18.5 });
    addNotification?.({
      title: 'GEOMETRY_OPTIMIZED',
      message: 'Wing sweep adjusted to 18.5° for Mach 0.85 stability.',
      type: 'SUCCESS',
      domain: 'SPATIAL'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 technical-grid pointer-events-none z-0 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
           <Terminal className="w-5 h-5 text-blue-400" />
           <h1 className="font-mono text-[14px] font-black text-blue-400 uppercase tracking-[0.3em]">QUANTUM_COMMAND_OS // AERO_BUILDER</h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
           <nav className="flex gap-8">
              <HeaderAction label="AERO_BUILDER" active />
              <HeaderAction label="SIMULATION_ENV" />
              <HeaderAction label="DYNAMICS_CORE" />
           </nav>
        </div>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="text-[9px] font-mono font-black text-blue-400 uppercase tracking-widest">GPU_IDLE: {gpuLoad}%</span>
           </div>
           <Settings2 className="w-5 h-5 text-white/20 hover:text-blue-400 cursor-pointer transition-colors" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. NAVIGATION DRAWER */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 shrink-0 relative z-10">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">SYSTEM_NAV</span>
              <nav className="flex flex-col gap-1">
                 <NavButton icon={<BarChart3 />} label="Telemetry" />
                 <NavButton icon={<Share2 />} label="Qubit_Map" active />
                 <NavButton icon={<GitBranch />} label="Circuit_Editor" />
                 <NavButton icon={<History />} label="Stability_Log" />
                 <NavButton icon={<Activity />} label="System_Health" />
              </nav>
           </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 flex overflow-hidden bg-black/20 relative z-10">
           
           {/* Left Sidebar: Configuration Controls */}
           <aside className="w-80 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col overflow-y-auto custom-scrollbar">
              <div className="flex-1">
                 <div className="h-8 px-6 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">GEOMETRY_PARAMETERS</span>
                    <SlidersHorizontal className="w-3.5 h-3.5 text-white/20" />
                 </div>
                 <div className="p-6 space-y-8">
                    <ParameterInput label="WINGSPAN (M)" value={wingspan} min={8} max={25} onChange={setWingspan} />
                    <div className="space-y-3">
                       <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em] font-mono block">AIRFOIL_PROFILE</label>
                       <select 
                          value={airfoil}
                          onChange={(e) => setAirfoil(e.target.value)}
                          className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-[12px] font-mono font-black text-white outline-none focus:border-blue-500/40 transition-all appearance-none"
                       >
                          <option value="NACA_0012">NACA_0012</option>
                          <option value="MH-60_SYMMETRIC">MH-60_SYMMETRIC</option>
                          <option value="EPPLER_387">EPPLER_387</option>
                       </select>
                    </div>
                    <ParameterInput label="FUSELAGE_L (M)" value={fuselageLen} min={5} max={15} onChange={setFuselageLen} />
                 </div>

                 <div className="h-8 px-6 bg-white/[0.02] border-b border-white/5 flex items-center mt-4">
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">STRUCTURAL_SKELETON</span>
                 </div>
                 <div className="p-6 space-y-4">
                    <SkeletonMetric label="MAIN_SPAR_TI" value="7.2kg" active />
                    <SkeletonMetric label="RIB_GRID_C8" value="4.1kg" />
                 </div>
              </div>

              {/* AI Recommendation Box */}
              <div className="m-6 p-6 bg-blue-500/5 border border-blue-500/20 rounded-[32px] backdrop-blur-xl relative overflow-hidden group">
                 <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-4 h-4 text-blue-400" />
                    <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">AI_REC_ENGINE</span>
                 </div>
                 <p className="text-[12px] text-white/60 leading-relaxed font-mono">
                    Current <span className="text-blue-400 font-black italic">WING_SWEEP [12°]</span> detected sub-optimal L/D ratio for Mach 0.85 regime. Suggest adjustment to <span className="text-blue-400 font-black italic">18.5°</span>.
                 </p>
                 <button 
                    onClick={handleApplyAIAdjustment}
                    className="mt-6 w-full py-2 bg-blue-500 text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-blue-400 transition-all active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                 >
                    APPLY_ADJUSTMENT
                 </button>
              </div>
           </aside>

           {/* Center: 3D Viewport */}
           <section className="flex-1 relative overflow-hidden flex flex-col">
              <div className="absolute top-6 left-6 flex gap-2 z-20">
                 <ViewportButton icon={<Code />} active />
                 <ViewportButton icon={<Layers />} />
                 <ViewportButton icon={<Grid />} />
              </div>
              <div className="absolute top-6 right-6 z-20">
                 <div className="bg-black/60 border border-white/5 px-4 py-2 backdrop-blur-md rounded-xl">
                    <span className="text-[10px] font-mono font-black text-blue-400 uppercase tracking-widest">CAM: ORBIT_360</span>
                 </div>
              </div>

              <div className="flex-1 flex items-center justify-center p-12 relative">
                 <div className="w-full h-full max-w-4xl relative group">
                    <img 
                       className="w-full h-full object-contain mix-blend-screen opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[20s]" 
                       src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1000" 
                       alt="Drone Skeleton Wireframe"
                    />
                    {/* HUD Pips */}
                    <HUDPiP top="20%" left="30%" label="WING_NODE_04" color="blue" />
                    <HUDPiP bottom="40%" right="25%" label="STRESS_MAX" color="rose" AlertTriangle />
                 </div>
              </div>

              {/* Viewport Overlay Bottom */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
                 <div className="space-y-4">
                    <div className="flex gap-8">
                       <MetricValue label="LIFT" value={`${liftForce}N`} />
                       <MetricValue label="DRAG" value={`${dragForce}N`} />
                    </div>
                    <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 shadow-[0_0_12px_#3b82f6]" style={{ width: '65%' }} />
                    </div>
                 </div>
                 <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">RENDER_MODE: STRUCTURAL_ALPHA</span>
              </div>
           </section>

           {/* Right Sidebar: Secondary Analysis */}
           <aside className="w-64 border-l border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col shrink-0">
              <div className="h-8 px-6 bg-white/[0.02] border-b border-white/5 flex items-center">
                 <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">WING_SURFACE_VIZ</span>
              </div>
              <div className="flex-1 p-6 flex flex-col gap-8 overflow-y-auto custom-scrollbar">
                 {/* Airfoil Plot */}
                 <div className="aspect-Camera bg-black/40 border border-white/5 rounded-2xl relative overflow-hidden p-4 group">
                    <svg className="w-full h-full" viewBox="0 0 100 40">
                       <path d="M 5,20 Q 20,5 50,5 Q 80,5 95,20 Q 80,35 50,35 Q 20,35 5,20" fill="none" stroke="#3b82f6" strokeWidth="0.5" className="drop-shadow-[0_0_5px_#3b82f6]" />
                       <line stroke="white" strokeWidth="0.1" strokeDasharray="1,1" x1="0" x2="100" y1="20" y2="20" />
                    </svg>
                    <div className="absolute bottom-2 right-2 text-[8px] font-black text-white/20 uppercase tracking-widest font-mono">PROFILE_Z_CUT</div>
                 </div>

                 {/* Mass Distribution Chart */}
                 <div className="space-y-4">
                    <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">MASS_DISTRIBUTION</span>
                    <div className="h-32 flex items-end gap-1 px-2 border-b border-white/5">
                       {[40, 60, 90, 85, 40, 20].map((h, i) => (
                          <div key={i} className="flex-1 bg-blue-500/20 border-t-2 border-blue-500 rounded-t-sm" style={{ height: `${h}%` }} />
                       ))}
                    </div>
                 </div>

                 {/* Stress Calc */}
                 <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">STRESS_CALC</span>
                       <span className="text-[10px] font-mono font-black text-emerald-400">READY</span>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl space-y-3">
                       <div className="flex justify-between text-[11px] font-mono font-black">
                          <span className="text-white/40">TORSION</span>
                          <span className="text-white">12.4 kPa</span>
                       </div>
                       <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: '33%' }} />
                       </div>
                    </div>
                 </div>
              </div>
              <div className="p-6 border-t border-white/5">
                 <button 
                    onClick={handleRunSimulation}
                    className="w-full py-4 bg-blue-500 text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-[24px] flex items-center justify-center gap-3 hover:bg-blue-400 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                 >
                    <Play className="w-4 h-4" />
                    RUN_SIMULATION
                 </button>
              </div>
           </aside>
        </main>
      </div>

      <style jsx>{`
        .technical-grid {
          background-image: linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

const HeaderAction = ({ label, active }: any) => (
  <button className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-white h-full px-4 border-b-2 ${active ? 'text-blue-400 border-blue-500' : 'text-white/20 border-transparent hover:bg-white/5'}`}>
     {label}
  </button>
);

const NavButton = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-2xl' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-125 transition-transform duration-500">{icon}</div>
     <span className="text-[11px] font-black uppercase tracking-[0.3em] font-mono">{label}</span>
  </div>
);

const ParameterInput = ({ label, value, min, max, onChange }: any) => (
  <div className="space-y-4">
     <div className="flex justify-between items-center font-mono">
        <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">{label}</label>
        <span className="text-[14px] font-black text-blue-400">{value}</span>
     </div>
     <input 
        type="range"
        min={min}
        max={max}
        step={0.01}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1 bg-white/5 rounded-full appearance-none cursor-pointer accent-blue-500"
     />
  </div>
);

const SkeletonMetric = ({ label, value, active }: any) => (
  <div className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${active ? 'bg-white/5 border-white/10' : 'bg-black/20 border-white/5'}`}>
     <span className="text-[10px] font-mono font-black text-white/60">{label}</span>
     <span className={`text-[11px] font-mono font-black ${active ? 'text-blue-400' : 'text-white/20'}`}>{value}</span>
  </div>
);

const ViewportButton = ({ icon, active }: any) => (
  <button className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${active ? 'bg-blue-500/20 border-blue-500 text-blue-400' : 'bg-black/40 border-white/5 text-white/20 hover:text-white'}`}>
     {icon}
  </button>
);

const HUDPiP = ({ top, left, bottom, right, label, color, AlertTriangle }: any) => (
  <div 
     className="absolute flex items-center gap-3 animate-in fade-in zoom-in duration-1000"
     style={{ top, left, bottom, right }}
  >
     <div className={`w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_currentcolor] ${color === 'blue' ? 'bg-blue-400' : 'bg-rose-400'}`} />
     <div className={`bg-black/60 border px-3 py-1 rounded-lg backdrop-blur-md text-[9px] font-mono font-black ${color === 'blue' ? 'border-blue-400/40 text-blue-400' : 'border-rose-400/40 text-rose-400'}`}>
        {label}
     </div>
  </div>
);

const MetricValue = ({ label, value }: any) => (
  <div className="flex flex-col">
     <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">{label}</span>
     <span className="text-[18px] font-mono font-black text-white">{value}</span>
  </div>
);

export default AircraftDesignEngineEngineeringOS_28293a;
