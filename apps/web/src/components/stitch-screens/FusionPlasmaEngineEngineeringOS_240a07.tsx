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
  Waves,
  Sun,
  Flame,
  Sparkles
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * FusionPlasmaEngine v3.2 (Phase 55 Hardened)
 * 
 * Specialized fusion reactor control interface.
 * Bound to 60Hz nuclear telemetry and plasma stability solvers.
 */
const FusionPlasmaEngineEngineeringOS_240a07 = () => {
  const { nuclearState, pushEvent, addNotification } = useEngineeringStore();

  const {
    status = 'IDLE',
    fusion = { plasmaTemp_keV: 15.2, confinementTime_s: 2.4 },
    fission = { reactivity: 0.0001, neutronFlux: 1e14 }
  } = nuclearState || {};

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-14 px-10 border-b border-white/5 bg-black/60 backdrop-blur-3xl flex justify-between items-center z-40 shrink-0">
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-4">
              <Sun className="w-5 h-5 text-blue-400" />
              <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.5em]">NUCLEAR_OS // FUSION_CONTROL</span>
           </div>
           <div className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">IGNITION_SUSTAINED</span>
           </div>
        </div>
        <div className="flex items-center gap-10">
           <div className="flex items-center gap-8 font-black text-[11px] text-blue-400 tracking-widest font-mono">
                TEMP: {fusion.plasmaTemp_keV.toFixed(1)} keV | TAU: {fusion.confinementTime_s.toFixed(2)} s
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
            
            {/* Core Visualization: Toroid */}
            <section className="col-span-12 lg:col-span-8 row-span-4 bg-[#141A23]/60 border border-white/5 rounded-[48px] overflow-hidden relative group backdrop-blur-3xl shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-12 bg-white/[0.02] border-b border-white/5 flex justify-between items-center px-8 z-10 backdrop-blur-md">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em]">PLASMA_TOROID_v4.1_FIELD_LINES</span>
                  <div className="flex gap-6">
                     <Maximize2 className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
                     <X className="w-4 h-4 text-white/20 hover:text-rose-500 transition-colors cursor-pointer" />
                  </div>
               </div>
               <div className="w-full h-full bg-black relative flex items-center justify-center overflow-hidden">
                  <img 
                    className="w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-[10000ms] group-hover:scale-110" 
                    src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDEcPCVR3QWK9fcJ2f7Ahe3_roki3v5_Kx1Vn4xQE1Pi4hyVspGlKxIRcDbtXeacEuwS1VUwEegO4j1zJMtGJYTQQCEinn9CrYax_Jj68FXpt2_th6GqIhm_OaI-fl6JVxJe_qiPyweuzSlsH4BWwz5ZLdpwHu2e0EH5bzJ3K5EpL2qm_OEAtsHIj-PdHGGLAdXWFwxt7NrIi4AolUy190_xdgxVz9yqkf3ykZxo_btrr2nLom5Qmhu_r7IZG_wOLeqPiET81I_SZgH" 
                    alt="Fusion Plasma"
                  />
                  {/* HUD Overlays */}
                  <div className="absolute bottom-10 left-10 p-8 bg-black/60 border border-white/10 rounded-[32px] backdrop-blur-xl space-y-4 shadow-2xl border-l-4 border-blue-400">
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-white/40 font-black font-mono">ENERGY_GAIN_Q</span>
                        <span className="text-3xl font-black text-blue-400 font-mono tracking-tighter">10.42</span>
                     </div>
                  </div>
                  <div className="absolute top-20 right-10 flex flex-col gap-4 z-20">
                     <button className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-500/20 hover:border-blue-400 transition-all text-white/60 hover:text-white backdrop-blur-xl">
                        <Flame className="w-5 h-5" />
                     </button>
                     <button className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-500/20 hover:border-blue-400 transition-all text-white/60 hover:text-white backdrop-blur-xl">
                        <Zap className="w-5 h-5" />
                     </button>
                  </div>
               </div>
            </section>

            {/* Triple Product Analysis */}
            <section className="col-span-12 lg:col-span-4 row-span-2 bg-[#141A23]/60 border border-white/5 rounded-[40px] flex flex-col backdrop-blur-3xl shadow-2xl overflow-hidden group">
               <div className="h-10 border-b border-white/5 flex items-center px-8 justify-between bg-white/[0.02]">
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">TRIPLE_PRODUCT_ANALYSIS</span>
                  <Sparkles className="w-4 h-4 text-blue-400 opacity-40 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="p-8 flex-1 flex flex-col justify-center gap-6">
                  <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest block mb-2">n_e T_i τ_E (Triple Product)</span>
                     <span className="text-2xl font-black text-blue-400 font-mono tracking-tight">5.24 × 10²¹</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-emerald-400">
                     <span>LAWSON_CRITERION:</span>
                     <span>MET</span>
                  </div>
               </div>
            </section>

            {/* Magnetic Field Adjustments */}
            <section className="col-span-12 lg:col-span-4 row-span-2 bg-[#141A23]/60 border border-white/5 rounded-[40px] flex flex-col backdrop-blur-3xl shadow-2xl overflow-hidden group">
               <div className="h-10 border-b border-white/5 flex items-center px-8 justify-between bg-white/[0.02]">
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">MAGNETIC_ADJUST</span>
                  <Gauge className="w-4 h-4 text-blue-400 opacity-40 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="p-8 space-y-8">
                  <MetricRow label="TOROIDAL_COIL" value="88%" progress={88} color="blue" />
                  <MetricRow label="POLOIDAL_DIVERTOR" value="42%" progress={42} color="indigo" />
               </div>
            </section>

            {/* Instability Alerts */}
            <section className="col-span-12 lg:col-span-6 row-span-2 bg-rose-500/5 border border-rose-500/10 rounded-[40px] flex flex-col backdrop-blur-3xl shadow-2xl overflow-hidden group">
               <div className="h-10 border-b border-rose-500/10 flex items-center px-8 justify-between bg-rose-500/[0.02]">
                  <span className="text-[9px] font-black text-rose-500/40 uppercase tracking-[0.4em]">INSTABILITY_MONITOR</span>
                  <AlertTriangle className="w-4 h-4 text-rose-500" />
               </div>
               <div className="p-10 flex items-center gap-8">
                  <div className="w-24 h-24 rounded-full border-4 border-rose-500/20 flex items-center justify-center relative">
                     <div className="absolute inset-0 rounded-full border-4 border-rose-500 animate-ping opacity-20" />
                     <span className="text-xl font-black text-rose-500 font-mono">ELM</span>
                  </div>
                  <div className="flex-1 space-y-4">
                     <p className="text-[13px] font-black text-rose-400 uppercase tracking-widest leading-relaxed">Edge Localized Mode detected @ 12.4ms. Initiating pellet injection bypass.</p>
                     <div className="flex gap-4">
                        <button className="px-6 py-2 bg-rose-500 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg">SUPPRESS_NOW</button>
                        <button className="px-6 py-2 bg-white/5 border border-white/10 text-white/40 rounded-xl text-[9px] font-black uppercase tracking-widest">IGNORE</button>
                     </div>
                  </div>
               </div>
            </section>

            {/* Physics Integration */}
            <section className="col-span-12 lg:col-span-6 row-span-2 bg-[#141A23]/60 border border-white/5 rounded-[40px] flex flex-col backdrop-blur-3xl shadow-2xl overflow-hidden group">
               <div className="h-10 border-b border-white/5 flex items-center px-8 justify-between bg-white/[0.02]">
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.4em]">PHYSICS_INTEGRATION</span>
                  <Terminal className="w-4 h-4 text-blue-400 opacity-40 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="p-8 flex-1 grid grid-cols-2 gap-8">
                  <div className="space-y-6">
                     <Formula label="D-T REACTION RATE" value="R = n_D n_T ⟨σv⟩" />
                     <Formula label="TRIPLE PRODUCT" value="n_e T_i τ_E > 5 × 10²¹" />
                  </div>
                  <div className="space-y-6 border-l border-white/5 pl-8">
                     <Formula label="LAWSON CRITERION" value="Q = P_fusion / P_heat" />
                     <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex items-center gap-4">
                        <Check className="w-5 h-5 text-emerald-400" />
                        <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">CHAIN_REACTION_STABLE</span>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
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
  <div className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all cursor-pointer border ${active ? 'bg-blue-500/10 border-blue-500/20 text-blue-400 shadow-xl' : 'bg-white/5 border-white/5 text-white/20 hover:text-white hover:bg-white/10'}`}>
     {icon}
  </div>
);

const MetricRow = ({ label, value, progress, color }: any) => (
  <div className="space-y-4">
     <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
        <span className="text-white/20">{label}</span>
        <span className={color === 'blue' ? 'text-blue-400' : 'text-indigo-400'}>{value}</span>
     </div>
     <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
        <div className={`h-full transition-all duration-[2000ms] ${color === 'blue' ? 'bg-blue-400 shadow-[0_0_12px_#3b82f6]' : 'bg-indigo-500 shadow-[0_0_12px_#6366f1]'}`} style={{ width: `${progress}%` }} />
     </div>
  </div>
);

const Formula = ({ label, value }: any) => (
  <div className="flex flex-col gap-2">
     <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{label}</span>
     <span className="text-[13px] font-mono font-black text-blue-400 italic">{value}</span>
  </div>
);

export default FusionPlasmaEngineEngineeringOS_240a07;
