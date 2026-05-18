'use client';

import React from 'react';
import {
  Activity,
  Settings,
  BarChart3,
  TrendingUp,
  Cpu,
  Layers,
  Play,
  Info,
  AlertTriangle,
  Target,
  Rocket,
  RefreshCcw,
  Radio,
  Database,
  Brain,
  Check,
  X,
  LayoutGrid,
  History,
  Maximize2,
  Minimize2,
  ChevronDown,
  Monitor,
  Zap,
  Wind,
  BoxSelect,
  Hammer,
  Terminal as Terminal,
  ShieldCheck,
  Thermometer,
  Gauge,
  Radiation,
  Waves
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * FissionReactorEngine v3.2 (Phase 55 Hardened)
 * 
 * Specialized fission reactor control interface.
 * Bound to 60Hz nuclear telemetry and neutron flux solvers.
 */
const FissionReactorEngineEngineeringOS_f2802b = () => {
  const { nuclearState, pushEvent, addNotification } = useEngineeringStore();

  const {
    status = 'IDLE',
    fission = { reactivity: 0.0001, neutronFlux: 1e14 },
    fusion = { plasmaTemp_keV: 15.2, confinementTime_s: 2.4 }
  } = nuclearState || {};

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-14 px-10 border-b border-white/5 bg-black/60 backdrop-blur-3xl flex justify-between items-center z-40 shrink-0">
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-4">
              <Radiation className="w-5 h-5 text-amber-400" />
              <span className="text-[11px] font-black text-amber-400 uppercase tracking-[0.5em]">NUCLEAR_OS // FISSION_CONTROL</span>
           </div>
           <div className="px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse" />
              <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">REACTOR_ONLINE</span>
           </div>
        </div>
        <div className="flex items-center gap-10">
           <div className="flex items-center gap-8 font-black text-[11px] text-amber-400 tracking-widest font-mono">
                K-EFF: {(1 + fission.reactivity).toFixed(5)} | FLUX: {fission.neutronFlux.toExponential(2)}
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-20 border-r border-white/5 bg-black/60 backdrop-blur-3xl flex flex-col items-center py-8 gap-10 shrink-0">
            <NavIcon icon={<Activity className="w-5 h-5" />} active />
            <NavIcon icon={<Waves className="w-5 h-5" />} />
            <NavIcon icon={<Zap className="w-5 h-5" />} />
            <NavIcon icon={<Monitor className="w-5 h-5" />} />
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 grid grid-cols-12 grid-rows-6 gap-6 p-10 overflow-hidden relative">
            <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
            
            {/* Core Visualization: Heatmap */}
            <section className="col-span-12 lg:col-span-8 row-span-4 bg-[#141A23]/60 border border-white/5 rounded-[48px] overflow-hidden relative group backdrop-blur-3xl shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-12 bg-white/[0.02] border-b border-white/5 flex justify-between items-center px-8 z-10 backdrop-blur-md">
                  <span className="text-[10px] font-black text-amber-400 uppercase tracking-[0.5em]">FISSION_CORE_LATTICE_v2.0</span>
                  <div className="flex gap-6">
                     <Maximize2 className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
                     <X className="w-4 h-4 text-white/20 hover:text-rose-500 transition-colors cursor-pointer" />
                  </div>
               </div>
               <div className="w-full h-full bg-black relative flex items-center justify-center overflow-hidden">
                  <div className="grid grid-cols-8 gap-2 p-12">
                     {Array.from({ length: 64 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-12 h-12 rounded-lg border border-white/5 transition-all duration-500 flex items-center justify-center text-[9px] font-mono font-black ${i === 27 || i === 28 || i === 35 || i === 36 ? 'bg-amber-500/40 border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.3)] animate-pulse text-amber-200' : 'bg-blue-500/10 border-blue-500/20 text-blue-400/40'}`}
                        >
                           {i % 9 === 0 ? 'CR' : 'FU'}
                        </div>
                     ))}
                  </div>
                  {/* HUD Overlays */}
                  <div className="absolute bottom-10 left-10 p-8 bg-black/60 border border-white/10 rounded-[32px] backdrop-blur-xl space-y-4 shadow-2xl border-l-4 border-amber-500">
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-white/40 font-black font-mono">MODERATOR_TEMP</span>
                        <span className="text-3xl font-black text-amber-400 font-mono tracking-tighter">324.5 °C</span>
                     </div>
                  </div>
                  <div className="absolute top-20 right-10 flex flex-col gap-4 z-20">
                     <button className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl hover:bg-amber-500/20 hover:border-amber-400 transition-all text-white/60 hover:text-white backdrop-blur-xl">
                        <Thermometer className="w-5 h-5" />
                     </button>
                     <button className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl hover:bg-amber-500/20 hover:border-amber-400 transition-all text-white/60 hover:text-white backdrop-blur-xl">
                        <ShieldCheck className="w-5 h-5" />
                     </button>
                  </div>
               </div>
            </section>

            {/* Criticality Constants */}
            <section className="col-span-12 lg:col-span-4 row-span-2 bg-[#141A23]/60 border border-white/5 rounded-[40px] flex flex-col backdrop-blur-3xl shadow-2xl overflow-hidden group">
               <div className="h-10 border-b border-white/5 flex items-center px-8 justify-between bg-white/[0.02]">
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">CRITICALITY_CONSTANTS</span>
                  <Gauge className="w-4 h-4 text-amber-400 opacity-40 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="p-8 flex-1 flex flex-col justify-center gap-6">
                  <SpecRow label="K-Effective" value={(1 + fission.reactivity).toFixed(5)} />
                  <SpecRow label="Reactivity (ρ)" value={`+${fission.reactivity.toFixed(5)} mk`} color="amber" />
                  <SpecRow label="Beta-Eff (β)" value="0.0065" />
               </div>
            </section>

            {/* Control Rod Assembly */}
            <section className="col-span-12 lg:col-span-4 row-span-2 bg-[#141A23]/60 border border-white/5 rounded-[40px] flex flex-col backdrop-blur-3xl shadow-2xl overflow-hidden group">
               <div className="h-10 border-b border-white/5 flex items-center px-8 justify-between bg-white/[0.02]">
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">CONTROL_ROD_ASSEMBLY</span>
                  <Hammer className="w-4 h-4 text-amber-400 opacity-40 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="p-8 space-y-8">
                  <ControlRod label="GROUP_A_INSERTION" value="74.2%" progress={74} color="amber" />
                  <ControlRod label="GROUP_B_INSERTION" value="22.8%" progress={22} color="blue" />
               </div>
            </section>

            {/* Emergency Protocols */}
            <section className="col-span-12 lg:col-span-6 row-span-2 bg-rose-500/5 border border-rose-500/10 rounded-[40px] flex flex-col backdrop-blur-3xl shadow-2xl overflow-hidden group">
               <div className="h-10 border-b border-rose-500/10 flex items-center px-8 justify-between bg-rose-500/[0.02]">
                  <span className="text-[9px] font-black text-rose-500/40 uppercase tracking-[0.4em]">SAFETY_PROTOCOLS</span>
                  <AlertTriangle className="w-4 h-4 text-rose-500" />
               </div>
               <div className="p-10 flex flex-col justify-center items-center gap-6">
                  <button className="w-full py-8 bg-rose-500/10 border border-rose-500/20 rounded-3xl text-rose-500 font-black text-[12px] uppercase tracking-[0.5em] hover:bg-rose-500/20 transition-all active:scale-95 group/scram relative overflow-hidden">
                     <div className="absolute inset-0 bg-rose-500/10 translate-x-[-100%] group-hover/scram:translate-x-[100%] transition-transform duration-[2000ms]" />
                     SCRAM / EMERGENCY_SHUTDOWN
                  </button>
                  <div className="flex gap-4">
                     < протокол_btn label="CORE_COOLING_BYPASS" />
                     < протокол_btn label="VENT_CONTAINMENT" />
                  </div>
               </div>
            </section>

            {/* Thermal Analysis */}
            <section className="col-span-12 lg:col-span-6 row-span-2 bg-[#141A23]/60 border border-white/5 rounded-[40px] flex flex-col backdrop-blur-3xl shadow-2xl overflow-hidden group">
               <div className="h-10 border-b border-white/5 flex items-center px-8 justify-between bg-white/[0.02]">
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">THERMAL_ANALYSIS</span>
                  <BarChart3 className="w-4 h-4 text-amber-400 opacity-40 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="p-8 grid grid-cols-2 gap-8">
                  <div className="space-y-6">
                     <DataPoint label="PRIMARY_PUMP" value="3,400 RPM" />
                     <DataPoint label="TURBINE_EFF" value="92.4%" />
                  </div>
                  <div className="space-y-6 border-l border-white/5 pl-8">
                     <DataPoint label="STEAM_DRYNESS" value="0.998" />
                     <DataPoint label="XENON_PIT" value="0.012%" />
                  </div>
               </div>
            </section>
         </main>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(245, 158, 11, 0.2) 1px, transparent 1px);
          background-size: 40px 40px;
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

const NavIcon = ({ icon, active }: any) => (
  <div className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all cursor-pointer border ${active ? 'bg-amber-500/10 border-amber-500/20 text-amber-400 shadow-xl' : 'bg-white/5 border-white/5 text-white/20 hover:text-white hover:bg-white/10'}`}>
     {icon}
  </div>
);

const SpecRow = ({ label, value, color = 'white' }: any) => (
  <div className="flex justify-between items-center border-b border-white/5 pb-4">
     <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{label}</span>
     <span className={`text-xl font-mono font-black text-${color === 'amber' ? 'amber-400' : 'blue-400'}`}>{value}</span>
  </div>
);

const ControlRod = ({ label, value, progress, color }: any) => (
  <div className="space-y-4">
     <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
        <span className="text-white/20">{label}</span>
        <span className={color === 'amber' ? 'text-amber-400' : 'text-blue-400'}>{value}</span>
     </div>
     <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
        <div className={`h-full transition-all duration-[2000ms] ${color === 'amber' ? 'bg-amber-500 shadow-[0_0_12px_#f59e0b]' : 'bg-blue-500 shadow-[0_0_12px_#3b82f6]'}`} style={{ width: `${progress}%` }} />
     </div>
  </div>
);

const DataPoint = ({ label, value }: any) => (
  <div className="flex flex-col gap-2">
     <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{label}</span>
     <span className="text-xl font-mono font-black text-white">{value}</span>
  </div>
);

const протокол_btn = ({ label }: any) => (
  <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[9px] font-black text-white/40 uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
     {label}
  </button>
);

export default FissionReactorEngineEngineeringOS_f2802b;
