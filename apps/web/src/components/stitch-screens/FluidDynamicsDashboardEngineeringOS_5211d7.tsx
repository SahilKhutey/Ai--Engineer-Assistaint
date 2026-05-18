'use client';

import React from 'react';
import {
  Wind,
  Activity,
  Gauge,
  Thermometer,
  Settings,
  Terminal,
  BarChart3,
  TrendingUp,
  Cpu,
  Zap,
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
  Waves
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * FluidDynamicsDashboard v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity CFD intelligence workspace with real-time fluid dynamics telemetry.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const FluidDynamicsDashboardEngineeringOS_5211d7 = () => {
  const { fluidState } = useEngineeringStore();
  const { 
    physics = { reynoldsNumber: 2.4e6, machNumber: 0.82, pressure_Pa: 101325 },
    solver = { status: 'IDLE', iteration: 0, residual: 1e-6 },
    velocity_field = { max_mps: 342.5, avg_mps: 280.4 }
  } = fluidState || {};

  return (
    <div className="flex-1 flex flex-col bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. TOP STATUS BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex justify-between items-center z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${solver.status === 'RUNNING' ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-amber-500'} animate-pulse`} />
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em]">NEURAL_OS // FLUID_DYNAMICS_{solver.status}</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">REYNOLDS_RE: {physics.reynoldsNumber.toExponential(2)}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
            <span className="text-[9px] font-mono text-blue-400 font-bold uppercase tracking-widest">SOLVER_V3.2</span>
          </div>
          <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
        </div>
      </header>

      <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar p-8 gap-8 animate-in fade-in duration-1000">
        
        {/* Globe Path */}
        <div className="flex items-center gap-3 text-white/20">
           <Wind className="w-3 h-3" />
           <span className="text-[10px] font-black uppercase tracking-[0.4em]">DOMAIN_ORBITAL / FLUID_DYNAMICS</span>
        </div>

        <div className="flex flex-col gap-8">
           
           {/* 3D Workspace Primary */}
           <div className="relative h-[480px] bg-black/40 border border-white/5 rounded-[48px] overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 z-0">
                 <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuANthptwi4ui7ZFjWtLuEb3_hev31pjryZ63R2VYa-qKE-25hc2idN9xJEPgPteRqlKYphFQRBiyc-jnrqV0yeisYSLJeYF1vxf3ntPOZAUmAUlpBmC3a2x_UKD73RDnzZ8knTJqEtAgxjPGkyBb8fl6piEs2RCkyUGyc7J-kHlshP5ZRQ4eXGflon2JtddKUBTCBzfbx41iS1FhKY8YyRp_fY25QxtN2gqawnuCt-Oq2_DbWjGS6EvfI797Dj4V9rEkbFY5oU8YHYI" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000" />
              </div>
              <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
              
              <div className="absolute top-0 left-0 right-0 h-10 bg-white/[0.02] backdrop-blur-3xl border-b border-white/5 flex justify-between items-center px-8 z-10">
                 <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">3D_WORKSPACE_PRIMARY // VELOCITY_STREAMLINES</span>
                 <Maximize2 className="w-3 h-3 text-white/20 hover:text-white transition-colors cursor-pointer" />
              </div>

              {/* Float Telemetry */}
              <div className="absolute bottom-8 left-8 flex flex-col gap-3 z-10">
                 <div className="bg-black/80 backdrop-blur-2xl p-4 border border-blue-500/20 rounded-2xl shadow-2xl flex items-center gap-4">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">VELOCITY_MAX:</span>
                    <span className="text-[14px] font-mono font-black text-blue-400">{velocity_field.max_mps.toFixed(1)} m/s</span>
                 </div>
                 <div className="bg-black/80 backdrop-blur-2xl p-4 border border-white/5 rounded-2xl shadow-2xl flex items-center gap-4">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">AVG_FLOW:</span>
                    <span className="text-[14px] font-mono font-black text-emerald-400">{velocity_field.avg_mps.toFixed(1)} m/s</span>
                 </div>
              </div>

              <div className="absolute top-20 right-8 flex flex-col items-center gap-4 z-10">
                 <div className="w-1.5 h-48 bg-white/5 rounded-full overflow-hidden relative">
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-emerald-500 shadow-[0_0_20px_#3b82f6] transition-all duration-700" style={{ height: '75%' }} />
                 </div>
                 <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">ZOOM</span>
              </div>
           </div>

           {/* Metrics Grid */}
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <FluidMetric label="MACH_NUMBER" value={`M ${physics.machNumber.toFixed(2)}`} progress={physics.machNumber * 80} color="blue" />
              <FluidMetric label="REYNOLDS_RE" value={physics.reynoldsNumber.toExponential(1)} progress={60} color="emerald" />
              <FluidMetric label="PRESSURE_PA" value={`${(physics.pressure_Pa / 1000).toFixed(1)} kPa`} progress={70} color="amber" />
              <FluidMetric label="ITERATIONS" value={solver.iteration.toString()} progress={90} color="rose" />
           </div>

           {/* Equations & AI Intelligence */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Equations */}
              <div className="lg:col-span-2 bg-black/40 border border-white/5 rounded-[40px] overflow-hidden flex flex-col shadow-2xl backdrop-blur-3xl">
                 <div className="h-10 px-8 flex items-center bg-white/[0.02] border-b border-white/5">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">GOVERNING_EQUATIONS // NAVIER-STOKES</span>
                 </div>
                 <div className="p-12 flex-1 flex flex-col justify-center gap-8 font-mono text-[18px] text-blue-400/80 italic">
                    <p className="border-l-4 border-blue-500/20 pl-8 transition-all hover:pl-10">∂ρ/∂t + ∇ · (ρu) = 0</p>
                    <p className="border-l-4 border-emerald-500/20 pl-8 transition-all hover:pl-10">ρ(∂u/∂t + u · ∇u) = -∇p + ∇ · τ + f</p>
                    <div className="flex justify-between items-center mt-8">
                       <div className="flex gap-4">
                          <button className="px-8 py-4 bg-blue-500 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-400 transition-all flex items-center gap-3">
                             <Play className="w-3 h-3 fill-current" />
                             RUN_CFD_SOLVER
                          </button>
                          <button className="px-8 py-4 border border-white/5 bg-white/[0.02] text-white/40 font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-white/5 transition-all">REFINE_MESH</button>
                       </div>
                       <div className="flex items-center gap-3">
                          <Cpu className="w-4 h-4 text-emerald-400" />
                          <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">GPU_ACCEL: ACTIVE</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* AI Intel */}
              <div className="bg-black/40 border border-white/5 rounded-[40px] overflow-hidden flex flex-col shadow-2xl backdrop-blur-3xl">
                 <div className="h-10 px-8 flex items-center bg-white/[0.02] border-b border-white/5">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">AI_FLOW_INTELLIGENCE</span>
                 </div>
                 <div className="p-8 space-y-6 overflow-y-auto custom-scrollbar">
                    <LogItem title="CRITICAL_EVENT" time="T+04:22:12" msg="BOUNDARY LAYER SEPARATION DETECTED AT X=0.74c. STALL PROBABILITY INCREASING." color="rose" />
                    <LogItem title="SYSTEM_LOG" time="T+04:21:55" msg="SOLVER RESIDUALS STABILIZED AT 10^-6. CONVERGENCE ACHIEVED." color="emerald" />
                    <LogItem title="FLOW_OPT" time="T+04:20:11" msg="OPTIMIZING FLAP DEFLECTION FOR MAX L/D RATIO." color="blue" />
                 </div>
              </div>
           </div>

           {/* Solver Residuals Chart */}
           <div className="bg-black/40 border border-white/5 rounded-[40px] p-8 backdrop-blur-3xl shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SOLVER_RESIDUALS // CONVERGENCE_TREND</span>
                 <span className="text-[9px] font-mono text-blue-400 font-bold uppercase tracking-widest">LOG_SCALE_10^X</span>
              </div>
              <div className="h-32 w-full flex items-end gap-2 px-4">
                 {[20, 45, 30, 60, 85, 70, 50, 35, 90, 65, 40, 55, 75, 95, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/[0.02] rounded-t-lg relative group transition-all hover:bg-white/5 cursor-crosshair">
                       <div 
                         className="absolute bottom-0 w-full bg-blue-500/40 rounded-t-lg transition-all duration-1000 group-hover:bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]" 
                         style={{ height: `${h}%` }} 
                       />
                    </div>
                 ))}
              </div>
           </div>

        </div>
      </main>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>
    </div>
  );
};

const FluidMetric = ({ label, value, progress, color }: any) => {
  const colors: any = {
    blue: 'text-blue-400 border-blue-500/10 bg-blue-500/5',
    emerald: 'text-emerald-400 border-emerald-500/10 bg-emerald-500/5',
    amber: 'text-amber-400 border-amber-500/10 bg-amber-500/5',
    rose: 'text-rose-400 border-rose-500/10 bg-rose-500/5',
  };
  return (
    <div className={`p-8 border rounded-[40px] backdrop-blur-3xl shadow-2xl transition-all hover:scale-[1.02] duration-500 group ${colors[color]}`}>
       <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40">{label}</span>
          <Activity className="w-4 h-4 opacity-20" />
       </div>
       <div className="text-[24px] font-mono font-black tracking-tighter mb-4">{value}</div>
       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <div className={`h-full bg-current transition-all duration-1000`} style={{ width: `${progress}%` }} />
       </div>
    </div>
  );
};

const LogItem = ({ title, time, msg, color }: any) => {
  const colors: any = {
    rose: 'border-rose-500/20 bg-rose-500/5 text-rose-400',
    emerald: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400',
    blue: 'border-blue-500/20 bg-blue-500/5 text-blue-400',
  };
  return (
    <div className={`p-6 border rounded-[24px] flex flex-col gap-2 group transition-all hover:bg-white/[0.02] ${colors[color]}`}>
       <div className="flex justify-between items-center">
          <span className="text-[9px] font-black uppercase tracking-widest">{title}</span>
          <span className="text-[8px] font-mono opacity-40">{time}</span>
       </div>
       <p className="text-[11px] font-mono leading-relaxed opacity-80">{msg}</p>
    </div>
  );
};

export default FluidDynamicsDashboardEngineeringOS_5211d7;
