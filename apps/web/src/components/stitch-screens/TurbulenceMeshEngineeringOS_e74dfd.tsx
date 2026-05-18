'use client';

import React from 'react';
import {
  Terminal,
  Ruler,
  Wind,
  Thermometer,
  Zap,
  ZoomIn,
  Grid,
  Layers,
  Brain,
  Edit,
  Sigma,
  Activity,
  List
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * TurbulenceMesh v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity computational fluid dynamics (CFD) mesh visualizer.
 * Real-time synchronization of boundary conditions, solver stability (CFL),
 * and AI-driven adaptive mesh refinement.
 */
const TurbulenceMeshEngineeringOS_e74dfd = () => {
  const { 
    fluidState, 
    reasoningTrace,
    pushEvent,
    addNotification
  } = useEngineeringStore();

  const {
    solver = { iterations: 1240, residuals: 1e-6, stability: 0.82, type: 'PISO_ALGO' },
    properties = { density: 1.225, viscosity: 1.78e-5, mach: 0.34, reynolds: 5.4e6 },
    telemetry = { lift_cl: 0.842, drag_cd: 0.0125, ld_ratio: 67.36 }
  } = fluidState || {};

  const latestReasoning = reasoningTrace[reasoningTrace.length - 1];

  const handleExecuteRefinement = () => {
    pushEvent?.('MESH_REFINEMENT_CYCLE', { target: 'SEP_BUBBLE_01', level: 4, timestamp: Date.now() });
    addNotification?.({
      title: 'REFINEMENT_INITIALIZED',
      message: 'Adaptive mesh refinement kernels dispatched to cluster.',
      type: 'INFO',
      domain: 'FLUID'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 bg-black/60 border-b border-white/5 flex justify-between items-center z-50 shrink-0 backdrop-blur-3xl">
         <div className="flex items-center gap-4">
            <Terminal className="text-[#adc6ff] w-5 h-5" />
            <h1 className="font-mono text-[16px] font-black text-[#adc6ff] uppercase tracking-[0.1em]">NEURAL_OS_v3.2 // WS_TURBULENCE_AERO</h1>
         </div>
         <div className="flex items-center gap-8">
            <div className="flex gap-4">
               <span className="text-[10px] font-black text-[#adc6ff] uppercase tracking-widest">MODE: SIMULATION</span>
               <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">SESSION: 0XF42</span>
            </div>
            <Brain className="text-white/20 cursor-pointer hover:text-white transition-colors" />
         </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-20 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col py-8 gap-2 hidden md:flex shrink-0">
            <nav className="flex flex-col gap-4">
               <SideNavItem icon={<Ruler />} label="STRUCT" />
               <SideNavItem icon={<Wind />} label="FLUID" active />
               <SideNavItem icon={<Thermometer />} label="THERM" />
               <SideNavItem icon={<Zap />} label="E-MAG" />
            </nav>
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 grid grid-cols-12 gap-px bg-white/5 overflow-hidden relative">
            
            {/* Left Column: Mesh View */}
            <section className="col-span-12 lg:col-span-8 bg-[#0B0F14] flex flex-col overflow-hidden">
               <div className="h-10 bg-white/[0.02] flex items-center justify-between px-6 border-b border-white/5">
                  <span className="text-[10px] font-black text-[#adc6ff] uppercase tracking-[0.4em]">2D_MESH_VISUALIZER // LEADING_EDGE_FOCUS</span>
                  <div className="flex gap-6">
                     <ZoomIn className="text-white/20 hover:text-[#adc6ff] cursor-pointer" size={16} />
                     <Grid className="text-white/20 hover:text-[#adc6ff] cursor-pointer" size={16} />
                     <Layers className="text-white/20 hover:text-[#adc6ff] cursor-pointer" size={16} />
                  </div>
               </div>
               
               <div className="flex-1 relative mesh-grid group">
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                     <div className="relative w-full h-full border border-white/5 rounded-2xl overflow-hidden bg-black/40 shadow-inner">
                        <svg className="w-full h-full opacity-40 transition-transform duration-[20000ms] group-hover:scale-105" viewBox="0 0 800 600">
                           <path d="M0 300 Q200 300 300 100 Q400 -100 800 0" stroke="#4cd7f6" strokeWidth="2" fill="none" />
                           <g stroke="#adc6ff" strokeOpacity="0.1" strokeWidth="0.5" fill="none">
                              {Array.from({ length: 10 }).map((_, i) => (
                                 <path key={i} d={`M0 ${300 - i * 10} Q200 ${300 - i * 10} ${300 - i * 5} ${100 - i * 5} Q400 ${-100 - i * 5} 800 ${i * 5}`} />
                              ))}
                           </g>
                           <g stroke="white" strokeOpacity="0.03" strokeWidth="0.2">
                              {Array.from({ length: 20 }).map((_, i) => (
                                 <line key={i} x1={i * 40} x2={i * 40} y1="0" y2="600" />
                              ))}
                           </g>
                        </svg>

                        <div className="absolute top-8 left-8 flex flex-col gap-2 pointer-events-none">
                           <AnnotationPanel label="Y+ TARGET: 0.85" value="DIST: 1.42e-5m" color="#adc6ff" />
                           <AnnotationPanel label="REF_RATIO: 1.25" value="LAYERS: 32" color="#4cd7f6" />
                        </div>

                        <div className="absolute top-[28%] left-[25%] -translate-x-1/2 -translate-y-1/2">
                           <div className="w-16 h-16 rounded-full border border-rose-500/40 bg-rose-500/5 flex items-center justify-center animate-pulse">
                              <div className="w-3 h-3 bg-rose-500 rounded-full shadow-[0_0_15px_#f43f5e]" />
                           </div>
                           <div className="absolute top-16 left-8 w-32 h-px bg-rose-500/40 rotate-[30deg] origin-left" />
                           <div className="absolute top-32 left-24 bg-black/80 border border-rose-500/40 px-4 py-2 rounded-xl backdrop-blur-xl shadow-2xl">
                              <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest">DETECTION: SEP_BUBBLE_01</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* AI Reasoning Log */}
               <div className="h-48 bg-black/40 border-t border-white/5 p-6 flex flex-col shadow-2xl">
                  <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-2">
                     <Brain className="text-[#4cd7f6] w-5 h-5" />
                     <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">AI_CO-PROCESSOR_LOG</span>
                  </div>
                  <div className="flex-1 overflow-y-auto font-mono text-[11px] space-y-2 custom-scrollbar">
                     <LogRow time="T+104.2" msg="ANALYZING BOUNDARY LAYER AT X=0.342..." color="#4cd7f6" />
                     <LogRow time="T+104.5" msg="CRITICAL: POTENTIAL VORTEX SHEDDING DETECTED IN WAKE REGION 4." color="#f43f5e" />
                     <LogRow time="T+104.8" msg={latestReasoning?.thought || "RECOMMENDING ADAPTIVE MESH REFINEMENT AT SEPARATION POINT (LEVEL 4)."} color="white" />
                     <LogRow time="T+105.1" msg="STABILITY CHECK PASSED. CFL REMAINS WITHIN NOMINAL RANGE < 1.0." color="#adc6ff" />
                  </div>
               </div>
            </section>

            {/* Right Column: Controls */}
            <section className="col-span-12 lg:col-span-4 bg-[#0B0F14] flex flex-col overflow-y-auto custom-scrollbar border-l border-white/5">
               
               {/* Boundary Conditions */}
               <div className="p-8 border-b border-white/5">
                  <div className="flex items-center justify-between mb-6">
                     <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">BOUNDARY_CONDITIONS</span>
                     <Edit className="text-white/20 hover:text-white cursor-pointer" size={14} />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                     <ConditionCard label="INLET" value="25.0 m/s" color="#4cd7f6" />
                     <ConditionCard label="OUTLET" value="0.0 Pa (Stat)" color="#adc6ff" />
                     <ConditionCard label="WALL" value="No-Slip" color="#f43f5e" />
                     <ConditionCard label="SYMMETRY" value="Normal:0" color="#8c909f" />
                  </div>
               </div>

               {/* Solver Configuration */}
               <div className="p-8 flex-1">
                  <div className="flex items-center justify-between mb-8">
                     <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">SOLVER_CONFIGURATION</span>
                     <span className="text-[10px] font-black text-[#4cd7f6] uppercase tracking-widest">ACTIVE: {solver.type}</span>
                  </div>
                  <div className="space-y-8">
                     <StabilityGauge label="CFL (COURANT NUMBER)" value={solver.stability.toFixed(2)} progress={solver.stability * 100} color="#adc6ff" />
                     <StabilityGauge label="PECLET NUMBER" value="1.2e+3" progress={45} color="#4cd7f6" />
                     
                     <div className="bg-black/40 p-6 border border-white/5 rounded-2xl shadow-inner mt-12">
                        <div className="flex items-center justify-between mb-4">
                           <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">ITERATION_MONITOR</span>
                           <div className="w-2 h-2 bg-[#4cd7f6] rounded-full animate-pulse" />
                        </div>
                        <div className="h-24 flex items-end gap-1 px-2">
                           {[30, 45, 60, 80, 55, 40, 50, 70, 30, 45, 65, 85].map((h, i) => (
                              <div key={i} className="flex-1 bg-[#4cd7f6]/20 transition-all duration-500 rounded-t-sm" style={{ height: `${h}%`, opacity: i === 11 ? 1 : 0.4 }} />
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Footer Stats */}
               <div className="mt-auto bg-white/[0.02] p-8 border-t border-white/5">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-6">
                     <div className="flex flex-col gap-1">
                        <span className="text-white/20">CELL_COUNT</span>
                        <span className="text-white">2,421,055</span>
                     </div>
                     <div className="flex flex-col gap-1 text-right">
                        <span className="text-white/20">SOLVE_TIME</span>
                        <span className="text-[#4cd7f6]">00:42:15</span>
                     </div>
                  </div>
                  <button 
                     onClick={handleExecuteRefinement}
                     className="w-full bg-[#4cd7f6] text-black py-4 font-black text-[12px] uppercase tracking-[0.2em] rounded-xl hover:shadow-[0_0_30px_#4cd7f6] active:scale-95 transition-all"
                  >
                     EXECUTE_REFINEMENT_CYCLE
                  </button>
               </div>
            </section>
         </main>
      </div>

      {/* 4. BOTTOM NAV */}
      <footer className="fixed bottom-0 w-full z-50 flex justify-around items-center h-14 bg-black/60 backdrop-blur-3xl border-t border-white/5">
         <NavAction icon={<Terminal />} label="Terminal" />
         <NavAction icon={<Sigma />} label="WORKSPACE" active />
         <NavAction icon={<Brain />} label="REASONING" />
         <NavAction icon={<Activity />} label="TELEMETRY" />
         <NavAction icon={<List />} label="LOGS" />
      </footer>

      <style jsx>{`
         .scanline-overlay {
            background: linear-gradient(to bottom, transparent 50%, rgba(76, 215, 246, 0.05) 50%);
            background-size: 100% 4px;
         }
         .mesh-grid {
            background-image: 
               linear-gradient(to right, rgba(32, 43, 60, 0.3) 1px, transparent 1px), 
               linear-gradient(to bottom, rgba(32, 43, 60, 0.3) 1px, transparent 1px);
            background-size: 32px 32px;
         }
      `}</style>
    </div>
  );
};

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`flex flex-col items-center justify-center py-6 cursor-pointer transition-all group ${active ? 'bg-[#4cd7f6]/10 text-[#4cd7f6] border-l-4 border-[#4cd7f6]' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform">{icon}</div>
     <span className="text-[9px] font-black uppercase tracking-widest mt-2">{label}</span>
  </div>
);

const AnnotationPanel = ({ label, value, color }: any) => (
  <div className="bg-black/60 border-l-2 px-3 py-2 backdrop-blur-md" style={{ borderColor: color }}>
     <p className="text-[9px] font-black uppercase tracking-widest" style={{ color }}>{label}</p>
     <p className="text-[10px] font-mono font-black text-white">{value}</p>
  </div>
);

const LogRow = ({ time, msg, color }: any) => (
  <div className="flex gap-4">
     <span className="text-white/20 shrink-0">[{time}]</span>
     <span className="font-black" style={{ color }}>{msg}</span>
  </div>
);

const ConditionCard = ({ label, value, color }: any) => (
  <div className="bg-white/[0.02] p-4 border border-white/5 rounded-xl hover:border-white/20 transition-all cursor-pointer group">
     <div className="flex items-center gap-2 mb-2">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-[9px] font-black text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
     </div>
     <p className="text-[12px] font-mono font-black text-white">{value}</p>
  </div>
);

const StabilityGauge = ({ label, value, progress, color }: any) => (
  <div className="space-y-2">
     <div className="flex justify-between items-end">
        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{label}</span>
        <span className="text-xl font-mono font-black" style={{ color }}>{value}</span>
     </div>
     <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full transition-all duration-1000 shadow-lg" style={{ width: `${progress}%`, backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
     </div>
  </div>
);

const NavAction = ({ icon, label, active }: any) => (
  <div className={`flex flex-col items-center justify-center px-6 transition-all cursor-pointer group ${active ? 'text-[#adc6ff]' : 'text-white/40 hover:text-white'}`}>
     <div className={`group-hover:scale-110 transition-transform ${active ? 'bg-[#adc6ff]/20 p-2 rounded-xl' : ''}`}>{icon}</div>
     <span className="text-[9px] font-black uppercase tracking-widest mt-1">{label}</span>
  </div>
);

export default TurbulenceMeshEngineeringOS_e74dfd;
