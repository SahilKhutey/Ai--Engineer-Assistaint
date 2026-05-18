'use client';

import React from 'react';
import {
  Terminal,
  Activity,
  Gauge,
  Settings,
  BarChart3,
  TrendingUp,
  Cpu,
  Layers,
  Play,
  Info,
  AlertTriangle,
  MoveUp,
  Compass,
  Crosshair,
  Map,
  Target,
  Rocket,
  RefreshCcw,
  Radio,
  Database,
  ShieldCheck,
  Share2,
  Camera,
  Clock,
  Maximize2,
  Minimize2,
  ChevronRight,
  Waves,
  Droplets,
  Wind,
  Zap,
  Box,
  Snowflake,
  ZapOff,
  ShieldAlert,
  FlameKindling,
  Brain,
  Check,
  X,
  LayoutGrid,
  History,
  HardDrive,
  Network,
  FolderOpen,
  Folder,
  Square,
  User,
  MoreVertical,
  ChevronDown,
  Monitor,
  Download,
  Upload,
  Trash2,
  StopCircle,
  SkipBack,
  SkipForward,
  PlayCircle,
  Eye,
  BoxSelect
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * SimulationWorkspace v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity engineering simulation and solver workspace.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const SimulationWorkspaceEngineeringOS_e80b51 = () => {
  const { simulationState, reasoningTrace } = useEngineeringStore();
  const { 
    solver = { load_pct: 84.2, fps: 60.0, timestep_s: 0.005 },
    viewport = { max_stress_mpa: 412.5, safety_factor: 1.42, temp_delta_c: 18.4 },
    gpu = { cluster_load_pct: 92, temp_c: 74 },
    data_flow = { gbps: 4.2 }
  } = simulationState || {};

  const latestReasoning = reasoningTrace[reasoningTrace.length - 1];

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] overflow-hidden relative">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-8 border-b border-white/5 bg-black/40 backdrop-blur-md flex justify-between items-center z-40 shrink-0">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">QUANTUM_COMMAND_OS_v3.2</span>
           </div>
        </div>
        <nav className="flex gap-8 h-full items-center">
           <button className="text-[10px] font-black text-blue-400 border-b-2 border-blue-400 h-full px-4 tracking-widest uppercase">SIMULATION</button>
           <button className="text-[10px] font-black text-white/20 hover:text-white h-full px-4 tracking-widest uppercase transition-colors">RENDER</button>
           <button className="text-[10px] font-black text-white/20 hover:text-white h-full px-4 tracking-widest uppercase transition-colors">ANALYSIS</button>
        </nav>
        <div className="flex items-center gap-6">
           <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">SOLVER_LIVE</span>
           </div>
           <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 cursor-pointer transition-all" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 shrink-0 overflow-y-auto custom-scrollbar">
            <div className="flex flex-col gap-2">
               <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_NAV</span>
               <nav className="flex flex-col gap-1">
                  <SideNavItem icon={<Activity className="w-4 h-4" />} label="Telemetry" />
                  <SideNavItem icon={<Network className="w-4 h-4" />} label="Qubit_Map" active />
                  <SideNavItem icon={<Layers className="w-4 h-4" />} label="Circuit_Editor" />
                  <SideNavItem icon={<History className="w-4 h-4" />} label="Stability_Log" />
               </nav>
            </div>

            <div className="mt-auto bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-4 shadow-2xl">
               <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">SOLVER_LOAD</span>
                  <span className="text-[10px] font-mono font-black text-blue-400">{solver.load_pct.toFixed(1)}%</span>
               </div>
               <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" style={{ width: `${solver.load_pct}%` }} />
               </div>
            </div>
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
            
            <div className="flex-1 grid grid-cols-12 gap-8 p-8 overflow-hidden">
               
               {/* Primary 3D Viewport */}
               <section className="col-span-9 bg-black/40 border border-white/5 rounded-[48px] overflow-hidden relative group shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-10 px-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between z-10 backdrop-blur-xl">
                     <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">PERSPECTIVE_VIEW // FEA_STRESS_MAP</span>
                     <div className="flex gap-6">
                        <Camera className="w-3 h-3 text-white/20 hover:text-white transition-colors cursor-pointer" />
                        <Layers className="w-3 h-3 text-white/20 hover:text-white transition-colors cursor-pointer" />
                        <Maximize2 className="w-3 h-3 text-white/20 hover:text-white transition-colors cursor-pointer" />
                     </div>
                  </div>

                  <div className="absolute inset-0 z-0 flex items-center justify-center">
                     <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBVz-datg2zMi7FhsQ7s04vxNvvNAptLZCaaTyZA8nFpoGEl8t1OxcvRisnw00YurdYn99Bbr5E3PmnviVs84sd_LnwKd7BnmtmV25VmJM_C4hJ-_PcJC7g7jVBmoKu4kZ1sNBEYFK28axDa_pEVjtWrnRe8Uj1v00U3kst3imsy_os1e_Lw6Z7uF56OnwxBlvXIN7kGpvCXsGpGCxfHcGxfKsblYSVrAQwNOl88xaXgtWYZKFHBhdVqUcTeaLEshgc2fa56IT-H8V_" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 scale-105 group-hover:scale-100" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* HUD Overlays */}
                  <div className="absolute bottom-12 left-12 flex flex-col gap-4 pointer-events-none">
                     <div className="bg-black/60 backdrop-blur-3xl border border-blue-500/20 p-6 rounded-[32px] flex gap-12 shadow-2xl">
                        <HUDMetric label="MAX_STRESS" value={`${viewport.max_stress_mpa.toFixed(1)} MPa`} color="rose" />
                        <HUDMetric label="SAFETY_FACTOR" value={viewport.safety_factor.toFixed(2)} color="emerald" />
                        <HUDMetric label="TEMP_DELTA" value={`+${viewport.temp_delta_c.toFixed(1)}°C`} color="white" />
                     </div>
                  </div>
               </section>

               {/* Right Side AI & Parameters Panel */}
               <aside className="col-span-3 flex flex-col gap-8 overflow-y-auto custom-scrollbar">
                  
                  {/* AI Co-Pilot */}
                  <div className="bg-black/40 border border-blue-500/20 rounded-[48px] p-8 flex flex-col gap-6 shadow-2xl backdrop-blur-3xl group transition-all hover:border-blue-500/40">
                     <div className="flex items-center gap-3">
                        <Brain className="w-5 h-5 text-blue-400 animate-pulse" />
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">AI_CO-PILOT_V4</span>
                     </div>
                     <div className="bg-blue-500/5 border border-blue-500/10 p-6 rounded-[32px] space-y-4">
                        <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">OPTIMIZATION_SUGGESTION</span>
                        <p className="text-[13px] text-white/80 italic leading-relaxed">
                           "{latestReasoning?.thought || "Detected high-stress concentration at Node_774. Reducing fillet radius by 1.2mm could redistribute load by 14.2%."}"
                        </p>
                        <button className="w-full py-3 bg-blue-500 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-blue-400 transition-all shadow-2xl shadow-blue-500/20">EXECUTE_CHANGES</button>
                     </div>
                  </div>

                  {/* Reasoning Tree */}
                  <div className="flex-1 bg-black/40 border border-white/5 rounded-[48px] p-8 flex flex-col gap-6 shadow-2xl backdrop-blur-3xl">
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">REASONING_LOG</span>
                     <div className="space-y-6">
                        <ReasoningStep label="M_CONSTRAINTS_CHECK" sub="Material verified: Ti-6Al-4V Grade 5" status="SUCCESS" color="white/20" />
                        <ReasoningStep label="CFD_STABILITY_SCAN" sub="Turbulence model k-omega SST convergent" status="ACTIVE" color="blue" />
                     </div>
                  </div>

                  {/* Solver Parameters */}
                  <div className="bg-black/40 border border-white/5 rounded-[48px] p-8 flex flex-col gap-6 shadow-2xl backdrop-blur-3xl">
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SOLVER_PARAMETERS</span>
                     <div className="space-y-3">
                        <ParamRow label="Iterative_Tol" value="1e-6" />
                        <ParamRow label="Mesh_Density" value="High" />
                        <ParamRow label="Time_Step" value={`${solver.timestep_s}s`} />
                     </div>
                  </div>

               </aside>
            </div>

            {/* Bottom Panel: Telemetry & Cluster Details */}
            <div className="h-32 px-8 flex gap-8 shrink-0 relative z-10">
               <div className="flex-1 bg-black/40 border border-white/5 rounded-[48px] p-6 flex flex-col gap-2 shadow-2xl backdrop-blur-3xl">
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-widest px-4">SYSTEM_TELEMETRY</span>
                  <div className="flex-1 flex items-end gap-1.5 px-4 pb-2">
                     {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="flex-1 bg-blue-500/20 hover:bg-blue-400/40 transition-all rounded-t-[2px]" style={{ height: `${20 + Math.random() * 80}%` }} />
                     ))}
                  </div>
               </div>
               
               <div className="w-64 bg-black/40 border border-white/5 rounded-[48px] p-8 flex flex-col justify-center gap-2 shadow-2xl backdrop-blur-3xl">
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">GPU_CLUSTER</span>
                  <div className="text-[28px] font-mono font-black text-blue-400">{gpu.cluster_load_pct.toFixed(0)}%</div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">T_CORE: {gpu.temp_c.toFixed(0)}°C</span>
               </div>

               <div className="w-64 bg-black/40 border border-white/5 rounded-[48px] p-8 flex flex-col justify-center gap-2 shadow-2xl backdrop-blur-3xl">
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">DATA_FLOW</span>
                  <div className="text-[28px] font-mono font-black text-emerald-400">{data_flow.gbps.toFixed(1)} GB/s</div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">PACKET_LOSS: 0%</span>
               </div>
            </div>

            {/* History Control */}
            <footer className="h-20 bg-black/60 border-t border-white/5 flex items-center px-10 gap-10 backdrop-blur-3xl shrink-0 mt-8">
               <div className="flex items-center gap-6">
                  <SkipBack className="w-5 h-5 text-white/20 hover:text-white transition-colors cursor-pointer" />
                  <button className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-blue-500/40">
                     <Play className="w-6 h-6 fill-current" />
                  </button>
                  <SkipForward className="w-5 h-5 text-white/20 hover:text-white transition-colors cursor-pointer" />
               </div>
               <div className="flex-1 flex flex-col gap-3">
                  <div className="flex justify-between items-center text-[10px] font-mono text-white/40 uppercase tracking-widest">
                     <span>T = 0.428s</span>
                     <span>END = 1.000s</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full relative overflow-hidden group">
                     <div className="absolute h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-all" style={{ width: '42.8%' }} />
                     <div className="absolute top-0 left-1/4 w-px h-full bg-white/10" />
                     <div className="absolute top-0 left-1/2 w-px h-full bg-white/10" />
                     <div className="absolute top-0 left-3/4 w-px h-full bg-white/10" />
                  </div>
               </div>
               <div className="flex items-center gap-8">
                  <div className="flex flex-col items-end">
                     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">FRAME_RATE</span>
                     <span className="text-[12px] font-mono font-black text-white">{solver.fps.toFixed(1)} FPS</span>
                  </div>
                  <MoreVertical className="w-5 h-5 text-white/20 hover:text-white cursor-pointer transition-colors" />
               </div>
            </footer>

         </main>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .scanline-overlay {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
        }
      `}</style>
    </div>
  );
};

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`px-4 py-3 rounded-2xl flex items-center gap-4 transition-all cursor-pointer ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
     {icon}
     <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
  </div>
);

const HUDMetric = ({ label, value, color }: any) => (
  <div className="flex flex-col gap-1">
     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{label}</span>
     <span className={`text-[18px] font-mono font-black text-${color === 'rose' ? 'rose-400' : color === 'emerald' ? 'emerald-400' : 'white'}`}>{value}</span>
  </div>
);

const ReasoningStep = ({ label, sub, status, color }: any) => (
  <div className="flex gap-4">
     <div className="w-px bg-white/5 relative shrink-0">
        <div className={`absolute top-0 -left-1 w-2 h-2 rounded-full ${color === 'blue' ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'bg-white/20'}`} />
     </div>
     <div className="flex flex-col gap-1">
        <span className={`text-[10px] font-mono font-black text-${color === 'blue' ? 'blue-400' : 'white/40'}`}>{label}</span>
        <span className="text-[10px] font-mono text-white/40">{sub}</span>
     </div>
  </div>
);

const ParamRow = ({ label, value }: any) => (
  <div className="flex justify-between items-center p-3 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-white/[0.04] transition-all">
     <span className="text-[10px] font-mono text-white/40 group-hover:text-white/60 transition-colors">{label}</span>
     <span className="text-[10px] font-mono font-black text-blue-400">{value}</span>
  </div>
);

export default SimulationWorkspaceEngineeringOS_e80b51;
