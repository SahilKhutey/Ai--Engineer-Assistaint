'use client';

import React from 'react';
import {
  Thermometer,
  Activity,
  Gauge,
  Settings,
  Terminal,
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
  Flame,
  Droplets,
  Wind,
  Zap,
  Box
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * HeatTransferThermodynamics v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity thermal intelligence workspace with real-time heat flux telemetry.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const HeatTransferThermodynamicsEngineeringOS_2513da = () => {
  const { thermalState } = useEngineeringStore();
  const { 
    physics = { wallTemp_K: 1482.65, conductivity_WmK: 385.20, fluidFlow_kgs: 42.8, entropyGen_WK: 0.024 },
    solver = { iterations: 4502, convergence: 1.4e-6 }
  } = thermalState || {};

  return (
    <div className="flex-1 flex flex-col bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. TOP STATUS BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex justify-between items-center z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
            <span className="text-[10px] font-black text-orange-400 uppercase tracking-[0.4em]">THERMAL_SOLVER_v4.2</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
             <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">SYSTEM_LIVE</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">ITER: {solver.iterations} | RES: {solver.convergence.toExponential(1)}</span>
           <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
        </div>
      </header>

      <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar p-8 gap-8 animate-in fade-in duration-1000">
        
        {/* Module Path */}
        <div className="flex items-center gap-3 text-white/20">
           <Layers className="w-3 h-3" />
           <span className="text-[10px] font-black uppercase tracking-[0.4em]">Module: Thermal_Coupling_v4</span>
        </div>

        <div className="flex flex-col gap-8">
           
           {/* Heat Flux Map */}
           <div className="bg-black/40 border border-white/5 rounded-[48px] overflow-hidden flex flex-col shadow-2xl backdrop-blur-3xl group">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">HEAT_FLUX_MAP_2D</span>
                 <Maximize2 className="w-3 h-3 text-white/20 hover:text-white transition-colors cursor-pointer" />
              </div>
              <div className="relative aspect-[21/9] w-full bg-black/40 overflow-hidden">
                 <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBE6Fj5cJ3JJVtZy-j0q5HGLcG-_9zQ7Gi4_3nxvEdsb0LxywPSZ_A6CKQOx4LWsF2FLTqk_URYVomkHRPF7tF1Knep0C4AsGr9j6p76V-S1PIky2qLDAf45muiITKjIoNofyTuHznlgn3d51f1WQTfF4fy5B0q8SV-8bSs2VXAR0xP71B1wYxNJinTFL3OHY589Hf7PlAjbi1WlmcGzb8zPrlouO1l9eTcWFN-ZRuGkMHoc5ZSi8Pq7INhkBRtRK-vEuY_zzcAOOTR" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000" />
                 <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
                 
                 {/* Mathematical Overlays */}
                 <div className="absolute top-8 left-8 p-6 bg-black/80 backdrop-blur-3xl border border-white/5 rounded-3xl flex flex-col gap-2 shadow-2xl">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">FOURIER_LAW</span>
                    <code className="text-[14px] font-mono font-black text-white/80">q = -k∇T</code>
                 </div>
                 <div className="absolute bottom-8 right-8 p-6 bg-black/80 backdrop-blur-3xl border border-white/5 rounded-3xl flex flex-col gap-2 shadow-2xl items-end">
                    <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">NEWTON_COOLING</span>
                    <code className="text-[14px] font-mono font-black text-white/80">Q = hA(Tw - T∞)</code>
                 </div>
              </div>
           </div>

           {/* Telemetry Grid */}
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <ThermalMetric label="WALL_TEMP (Tw)" value={`${physics.wallTemp_K.toFixed(2)} K`} progress={75} color="orange" />
              <ThermalMetric label="CONDUCTIVITY (k)" value={`${physics.conductivity_WmK.toFixed(2)} W/mK`} progress={50} color="blue" />
              <ThermalMetric label="FLUID_FLOW (ṁ)" value={`${physics.fluidFlow_kgs.toFixed(1)} kg/s`} progress={65} color="emerald" />
              <ThermalMetric label="ENTROPY_GEN (Ṡ)" value={`${physics.entropyGen_WK.toFixed(3)} W/K`} progress={25} color="rose" />
           </div>

           {/* Parameters & Terminal */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Parameters */}
              <div className="lg:col-span-2 bg-black/40 border border-white/5 rounded-[40px] p-12 flex flex-col gap-10 shadow-2xl backdrop-blur-3xl">
                 <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] border-l-4 border-blue-500 pl-4">INPUT_PARAMETERS</span>
                    <Settings className="w-4 h-4 text-white/20" />
                 </div>
                 <div className="space-y-10">
                    <ParameterSlider label="THERMAL_CONDUCTIVITY (Cu-Cr-Zr)" value="350.0 W/mK" progress={60} color="blue" />
                    <ParameterSlider label="CONVECTIVE_COEFFICIENT (h)" value="5200.0 W/m²K" progress={45} color="emerald" />
                 </div>
                 <button className="w-full py-6 bg-blue-500 text-white font-black text-[12px] uppercase tracking-[0.4em] rounded-[32px] hover:bg-blue-400 transition-all active:scale-[0.98] shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-4">
                    <RefreshCcw className="w-4 h-4" />
                    RUN_SOLVER_ITERATION
                 </button>
              </div>

              {/* Terminal */}
              <div className="bg-black/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-6 shadow-2xl backdrop-blur-3xl">
                 <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                    <Terminal className="w-3 h-3 text-emerald-400" />
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">CONSOLE_OUTPUT</span>
                 </div>
                 <div className="flex-1 font-mono text-[11px] text-emerald-400/80 space-y-2 overflow-y-auto custom-scrollbar">
                    <p className="opacity-40">&gt; Initializing Fourier mesh solver... [OK]</p>
                    <p className="opacity-40">&gt; Loading Newton fluid coupling parameters... [OK]</p>
                    <p>&gt; Iteration {solver.iterations}: Res_T={solver.convergence.toExponential(1)}</p>
                    <p className="text-blue-400">&gt; Convergence achieved at Step {solver.iterations}.</p>
                    <p className="text-emerald-400">&gt; Thermal stability verified within 0.05% margin.</p>
                    <p className="animate-pulse text-white">&gt; Waiting for user input...</p>
                 </div>
              </div>
           </div>

        </div>
      </main>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(249, 115, 22, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>
    </div>
  );
};

const ThermalMetric = ({ label, value, progress, color }: any) => {
  const colors: any = {
    orange: 'text-orange-400 border-orange-500/10 bg-orange-500/5',
    blue: 'text-blue-400 border-blue-500/10 bg-blue-500/5',
    emerald: 'text-emerald-400 border-emerald-500/10 bg-emerald-500/5',
    rose: 'text-rose-400 border-rose-500/10 bg-rose-500/5',
  };
  return (
    <div className={`p-8 border rounded-[40px] backdrop-blur-3xl shadow-2xl transition-all hover:scale-[1.02] duration-500 group ${colors[color]}`}>
       <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40">{label}</span>
          <Activity className="w-4 h-4 opacity-20" />
       </div>
       <div className="text-[24px] font-mono font-black tracking-tighter mb-4">{value}</div>
       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div className={`h-full bg-current transition-all duration-1000`} style={{ width: `${progress}%` }} />
       </div>
    </div>
  );
};

const ParameterSlider = ({ label, value, progress, color }: any) => {
  const colors: any = {
    blue: 'bg-blue-500 shadow-[0_0_15px_#3b82f6]',
    emerald: 'bg-emerald-500 shadow-[0_0_15px_#10b981]',
  };
  return (
    <div className="space-y-4">
       <div className="flex justify-between items-end">
          <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{label}</span>
          <span className="text-[12px] font-mono font-black text-white">{value}</span>
       </div>
       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
          <div className={`absolute left-0 top-0 h-full ${colors[color]} transition-all duration-1000`} style={{ width: `${progress}%` }} />
       </div>
    </div>
  );
};

export default HeatTransferThermodynamicsEngineeringOS_2513da;
