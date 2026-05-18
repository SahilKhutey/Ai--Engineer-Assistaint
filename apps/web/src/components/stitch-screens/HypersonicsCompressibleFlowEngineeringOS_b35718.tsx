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
  List,
  Settings2,
  Sigma,
  SlidersHorizontal,
  Thermometer,
  Command,
  Gauge,
  TrendingUp} from 'lucide-react';
import React, { useState } from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * HypersonicsCompressibleFlow v3.2 (Phase 55 Hardened)
 * 
 * Mission-critical workspace for hypersonic aerodynamics and compressible flow analysis.
 * Features real-time shockwave detection, stagnation temperature Activity, 
 * and AI-driven geometry optimization for high-Mach regimes.
 */
const HypersonicsCompressibleFlowEngineeringOS_b35718 = () => {
  const { 
    aerospaceState, 
    motionState, 
    osStatus, 
    pushEvent, 
    addNotification 
  } = useEngineeringStore();

  const [gasDissociation, setGasDissociation] = useState(true);
  const [realGasEffects, setRealGasEffects] = useState(false);

  const machNumber = (motionState?.velocity / 343) || 8.42;
  const TrendingUp = aerospaceState?.trajectory?.TrendingUp || 62.4;
  const stagnationTemp = aerospaceState?.diagnostics?.thermal_S3 || 3450;

  const handleGeomRemap = () => {
    pushEvent?.('GEOMETRY_REMAP_INITIATED', { 
      type: 'LEADING_EDGE_RADIUS_ADJUST', 
      target: '5.2mm',
      timestamp: Date.now() 
    });
    addNotification?.({
      title: 'GEOMETRY_OPTIMIZED',
      message: 'Leading edge radius adjusted to 5.2mm to mitigate shock-induced separation.',
      type: 'SUCCESS',
      domain: 'AEROSPACE'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-8 border-b border-white/5 bg-black/40 backdrop-blur-md flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
           <Terminal className="w-5 h-5 text-blue-400" />
           <h1 className="font-mono text-[14px] font-black text-blue-400 uppercase tracking-[0.3em]">HYPERSONICS_CORE // NEURAL_OS_v1.0</h1>
        </div>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3 px-4 py-1.5 bg-white/[0.02] border border-white/5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse" />
              <span className="text-[10px] font-mono font-black text-white/40 uppercase tracking-widest">SYS_ACTIVE</span>
           </div>
           <Settings2 className="w-5 h-5 text-white/20 hover:text-blue-400 cursor-pointer transition-colors" />
        </div>
      </header>

      {/* 2. MAIN WORKSPACE */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar relative">
         <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />

         {/* Mach Visualization Header */}
         <section className="bg-black/40 border border-white/5 p-8 rounded-[40px] shadow-2xl backdrop-blur-3xl overflow-hidden group">
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
               <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">DOMAIN_ORBITAL // COMPRESSIBLE_FLOW</span>
               <div className="flex items-center gap-3">
                  <Gauge className="w-4 h-4 text-blue-400" />
                  <span className="text-[14px] font-mono font-black text-blue-400">MACH {machNumber.toFixed(2)}</span>
               </div>
            </div>
            
            <div className="relative h-80 w-full bg-black rounded-3xl overflow-hidden border border-white/5">
               <img 
                  className="w-full h-full object-cover opacity-60 mix-blend-screen grayscale transition-transform duration-[20000ms] group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCZxP7PNypjrSTv-n7AlUlGrDSb5ispRuUqxDr-Ka2xL72bmF6ncC7WErK7_-eLSpich1yvYVuhfgZhA1FPOCGJ6fOAaQqdLb6vKBlAW5OY9sa_LhVDQcQdm8rnL5KIh_mTipqIpy4nqZPTLcsnPDAEyS8zbNexcfPDWD5iT8tM_wqs3tVWkARsW-xNVaO3WQtp_5S9HUUcGjunQM-BlQoo-N0ZHsE5yRS-gU9qzizrj1YXWpO1eyk5IwyEBjeLyx2oM1GSNANokR1t" 
                  alt="Hypersonic Flow Simulation"
               />
               {/* Shockwave Overlays */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[90%] h-1 bg-blue-400/20 rotate-[15deg] blur-[1px] animate-pulse" />
                  <div className="absolute top-1/4 right-1/4 bg-rose-500/80 border border-rose-500/40 text-white font-black text-[9px] px-3 py-1 rounded-lg uppercase tracking-widest shadow-2xl">
                     SHOCK_STRENGTH_CRITICAL
                  </div>
               </div>
               {/* Float HUD Gauges */}
               <div className="absolute bottom-8 left-8 bg-black/80 border border-white/10 p-4 rounded-2xl backdrop-blur-md shadow-2xl">
                  <div className="flex items-center gap-3 mb-1">
                     <Thermometer className="w-3 h-3 text-amber-400" />
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-widest font-mono">STAGNATION_TEMP</span>
                  </div>
                  <div className="text-[20px] font-mono font-black text-amber-400">{stagnationTemp.toLocaleString()} K</div>
               </div>
            </div>

            {/* Mach Legend */}
            <div className="mt-8 space-y-3">
               <div className="h-2 w-full mach-gradient rounded-full shadow-inner" />
               <div className="flex justify-between text-[10px] font-mono font-black text-white/20 uppercase tracking-widest">
                  <span>M 0.0</span>
                  <span>M 4.0</span>
                  <span>M 8.0+</span>
               </div>
            </div>
         </section>

         {/* Data Tiles: BENTO GRID */}
         <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Equation Panel */}
            <div className="bg-black/40 border border-white/5 p-8 rounded-[40px] shadow-2xl backdrop-blur-3xl flex flex-col gap-6">
               <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">GOVERNING_EQ</span>
                  <Sigma className="w-5 h-5 text-blue-400" />
               </div>
               <div className="space-y-4">
                  <EquationBox eq="M = v / \sqrt{\gamma RT}" label="Mach Number Definition" />
                  <EquationBox eq="h + v^2/2 = h_0" label="Stagnation Enthalpy" />
               </div>
            </div>

            {/* Real-time Telemetry */}
            <div className="bg-black/40 border border-white/5 p-8 rounded-[40px] shadow-2xl backdrop-blur-3xl flex flex-col gap-6">
               <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">ALT_DYNAMIC</span>
                  <TrendingUp className="w-5 h-5 text-amber-400" />
               </div>
               <div className="flex-1 flex flex-col items-center justify-center py-6">
                  <div className="text-[48px] font-mono font-black text-blue-400 tracking-tighter">{TrendingUp.toFixed(1)} km</div>
                  <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] font-mono">THERMOSPHERE_V1</div>
               </div>
            </div>

         </section>

         {/* AI Recommendation Engine */}
         <section className="bg-black/40 border border-white/5 p-8 rounded-[40px] shadow-2xl backdrop-blur-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[120px]" />
            <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
               <Brain className="w-6 h-6 text-blue-400" />
               <h3 className="text-[12px] font-black text-white uppercase tracking-[0.4em]">AI_GEOMETRY_OPTIMIZER</h3>
            </div>
            <p className="text-[14px] leading-relaxed text-white/60 font-mono italic mb-8 max-w-2xl">
               High pressure jump detected at <span className="text-blue-400 font-black">X:0.42c</span>. Recommended adjustment: Increase leading edge radius to <span className="text-amber-400 font-black">5.2mm</span> to mitigate shock-induced boundary layer separation.
            </p>
            <button 
               onClick={handleGeomRemap}
               className="w-full py-5 bg-blue-500 text-white font-black text-[12px] uppercase tracking-[0.4em] rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl shadow-blue-500/20"
            >
               EXECUTE_GEOM_REMAP
            </button>
         </section>

         {/* Controls Panel */}
         <section className="bg-black/40 border border-white/5 p-8 rounded-[40px] shadow-2xl backdrop-blur-3xl grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8">
               <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <SlidersHorizontal className="w-5 h-5 text-white/20" />
                  <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">HYPERSONIC_MODELS</span>
               </div>
               <div className="space-y-10">
                  <div className="space-y-4">
                     <div className="flex justify-between items-end">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest font-mono">STAGNATION_T</span>
                        <span className="text-[12px] font-mono font-black text-blue-400">{stagnationTemp}K</span>
                     </div>
                     <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" style={{ width: `${(stagnationTemp / 5000) * 100}%` }} />
                     </div>
                  </div>
                  <div className="space-y-4">
                     <Toggle label="GAS_DISSOCIATION" active={gasDissociation} onClick={() => setGasDissociation(!gasDissociation)} />
                     <Toggle label="REAL_GAS_EFFECTS" active={realGasEffects} onClick={() => setRealGasEffects(!realGasEffects)} />
                  </div>
               </div>
            </div>

            <div className="space-y-6">
               <div className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em] border-b border-white/5 pb-4">PRESSURE_GRADIENT_LOG</div>
               <div className="space-y-2">
                  <LogEntry id="P_JUMP_01" value="dP/P = 12.4" color="blue" />
                  <LogEntry id="P_JUMP_02" value="dP/P = 45.1" color="blue" />
                  <LogEntry id="P_JUMP_CRIT" value="dP/P = 108.9" color="rose" alert />
               </div>
            </div>
         </section>
      </main>

      {/* 3. BOTTOM NAV */}
      <nav className="h-16 px-10 border-t border-white/5 bg-black/60 backdrop-blur-3xl flex justify-around items-center shrink-0 z-50">
         <NavAction icon={<Command />} label="Terminal" />
         <NavAction icon={<Sigma />} label="WORKSPACE" active />
         <NavAction icon={<Brain />} label="REASONING" />
         <NavAction icon={<BarChart3 />} label="TELEMETRY" />
         <NavAction icon={<List />} label="LOGS" />
      </nav>

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
        .mach-gradient {
          background: linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #f59e0b 100%);
        }
      `}</style>
    </div>
  );
};

const EquationBox = ({ eq, label }: any) => (
  <div className="bg-black/60 border border-white/10 p-5 rounded-2xl flex flex-col gap-3 shadow-inner group hover:border-blue-500/20 transition-all">
     <div className="text-[14px] font-mono text-white/80 font-black italic tracking-tighter">{eq}</div>
     <div className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">{label}</div>
  </div>
);

const Toggle = ({ label, active, onClick }: any) => (
  <div className="flex items-center justify-between group cursor-pointer" onClick={onClick}>
     <span className="text-[11px] font-black text-white/40 uppercase tracking-widest group-hover:text-white transition-colors font-mono">{label}</span>
     <div className={`w-12 h-6 rounded-full border border-white/10 p-1 flex transition-all ${active ? 'bg-blue-500/20 border-blue-500/40 justify-end' : 'bg-black/40 justify-start'}`}>
        <div className={`w-4 h-4 rounded-full ${active ? 'bg-blue-400 shadow-[0_0_10px_#60a5fa]' : 'bg-white/10'}`} />
     </div>
  </div>
);

const LogEntry = ({ id, value, color, alert }: any) => (
  <div className={`flex justify-between items-center p-4 rounded-xl border border-white/5 transition-all cursor-pointer ${alert ? 'bg-rose-500/10 hover:bg-rose-500/20 border-rose-500/20' : 'hover:bg-white/[0.04]'}`}>
     <span className={`text-[10px] font-black uppercase tracking-widest font-mono ${alert ? 'text-rose-400' : 'text-blue-400'}`}>{id}</span>
     <span className="text-[11px] font-mono font-black text-white/40">{value}</span>
  </div>
);

const NavAction = ({ icon, label, active }: any) => (
  <div className={`flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${active ? 'text-blue-400 scale-110' : 'text-white/20 hover:text-white'}`}>
     {React.cloneElement(icon, { className: 'w-5 h-5' })}
     <span className="text-[9px] font-black uppercase tracking-widest font-mono">{label}</span>
  </div>
);

export default HypersonicsCompressibleFlowEngineeringOS_b35718;
