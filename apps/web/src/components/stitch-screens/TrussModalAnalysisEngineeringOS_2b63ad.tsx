'use client';

import React from 'react';
import {
  Terminal,
  Settings,
  Maximize2,
  Sun,
  Sigma,
  Brain,
  Activity,
  List,
  AlertTriangle
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * TrussModalAnalysis v3.5 (Phase 55 Hardened)
 * 
 * High-precision workspace for structural modal analysis of large space trusses.
 * Features real-time vibration telemetry, harmonic response mapping, 
 * and thermal expansion Activity for orbital assets.
 */
const TrussModalAnalysisEngineeringOS_2b63ad = () => {
  const { 
    structuralState, 
    thermalState, 
    osStatus, 
    pushEvent, 
    addNotification 
  } = useEngineeringStore();

  const maxDisplacement = structuralState?.maxDisplacement_mm || 4.2;
  const resonanceFreq = structuralState?.resonanceFreq_Hz || 4.82;
  const peakMagnitude = structuralState?.peakMagnitude_dB || 72.4;
  
  const sunCycleExpansion = thermalState?.expansionRatio || 0.84;
  const tempMax = thermalState?.maxTemp_K || 393.5; // 120.4 C
  const tempMin = thermalState?.minTemp_K || 92.9; // -180.2 C

  const handleModeSwitch = (mode: string) => {
    pushEvent?.('MODAL_ANALYSIS_MODE_SWITCHED', { mode, timestamp: Date.now() });
    addNotification?.({
      title: 'ANALYSIS_MODE_ACTIVE',
      message: `Switched to ${mode}. Resonance harmonics re-calculating...`,
      type: 'INFO',
      domain: 'STRUCTURAL'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-8 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
           <Terminal className="w-5 h-5 text-blue-400" />
           <h1 className="font-mono text-[14px] font-black text-blue-400 uppercase tracking-[0.3em]">NEURAL_OS_v1.0 // TRUSS_MODAL_CORE</h1>
        </div>
        <div className="flex items-center gap-6">
           <Settings className="w-5 h-5 text-white/20 hover:text-blue-400 cursor-pointer transition-colors" />
        </div>
      </header>

      {/* 2. MAIN WORKSPACE */}
      <main className="flex-1 overflow-y-auto p-6 bg-grid-pattern relative custom-scrollbar space-y-6">
         
         {/* Live Status Bar */}
         <div className="flex justify-between items-center bg-black/40 border border-white/5 rounded-2xl p-4 px-8 backdrop-blur-md">
            <div className="flex items-center gap-4">
               <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse" />
               <span className="text-[10px] font-mono font-black text-white/40 uppercase tracking-widest">LIVE_TELEMETRY: ACTIVE</span>
            </div>
            <span className="text-[10px] font-mono font-black text-blue-400 uppercase tracking-widest">LT-X9_ORBIT_ST_04</span>
         </div>

         {/* 3D Modal Shape Visualization */}
         <section className="bg-black/40 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl backdrop-blur-3xl group">
            <div className="h-10 px-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
               <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">MODAL_SHAPE_VIZ: MODE_04</span>
               <Maximize2 className="w-3 h-3 text-white/20 hover:text-white cursor-pointer" />
            </div>
            <div className="relative h-80 bg-black/20">
               <img 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-[5000ms]" 
                  src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuD_nuS1SS0sVx_K44Oaa13Wp2lxqI43SFya1Mh_Arq1KRCfzwmQl-SeV-Z8AsxhBWPeFhU_JKd7TXE72BsATfRmqpIlMzgW2lkLHcF8naMcTaam-rnu7AEQrrvmYDf25pAXSYtiZNdtW7QM2zAXyBbQPPhwfJPuK7J6Su0nFifTKX40_eUxTtn3FQE7zbqbWkUiMWUGPRtWOB5u6zY1Y5YeFlkfRLgFVYIUUTMqdLQiZr9Y94sxNhq-5wtGmW6FH4vA0z2YKv27aIFV" 
                  alt="Truss Visualization"
               />
               <div className="absolute bottom-8 left-8 bg-black/80 border border-blue-500/20 p-4 rounded-2xl backdrop-blur-md shadow-2xl">
                  <span className="text-[10px] font-mono font-black text-blue-400 uppercase tracking-widest">DISPLACEMENT_MAX: {maxDisplacement.toFixed(1)}mm</span>
               </div>
            </div>
         </section>

         {/* Frequency Response Curves */}
         <section className="bg-black/40 border border-white/5 rounded-[40px] shadow-2xl backdrop-blur-3xl overflow-hidden">
            <div className="h-10 px-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
               <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">FREQUENCY_RESPONSE_HARMONICS</span>
               <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
                  <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
               </div>
            </div>
            <div className="p-8 space-y-8">
               <div className="h-40 w-full relative flex items-end bg-black/40 border border-white/5 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 opacity-10 grid-pattern pointer-events-none" />
                  <svg className="w-full h-full stroke-blue-400 fill-none stroke-[2px]" viewBox="0 0 400 100">
                     <path d="M0 80 Q 20 10, 40 80 T 80 80 T 120 20 T 160 80 T 200 80 T 240 40 T 300 80 T 400 20" />
                  </svg>
                  <svg className="absolute inset-0 w-full h-full stroke-amber-400 fill-none stroke-[2px] opacity-40" viewBox="0 0 400 100">
                     <path d="M0 90 L 50 85 L 100 20 L 150 95 L 200 80 L 250 10 L 300 90 L 400 50" />
                  </svg>
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <ResponseCard label="PEAK_MAGNITUDE" value={`${peakMagnitude.toFixed(1)} dB`} color="blue" />
                  <ResponseCard label="RESONANCE_FREQ" value={`${resonanceFreq.toFixed(2)} Hz`} color="amber" />
               </div>
            </div>
         </section>

         {/* Damping & Thermal Panel Row */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Damping Coefficients */}
            <section className="bg-black/40 border border-white/5 rounded-[40px] shadow-2xl backdrop-blur-3xl overflow-hidden">
               <div className="h-10 px-8 bg-white/[0.02] border-b border-white/5 flex items-center">
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">DAMPING_COEFFICIENTS</span>
               </div>
               <div className="divide-y divide-white/5">
                  <DampingRow label="STRUT_ALPHA_01" value="ζ = 0.021" />
                  <DampingRow label="STRUT_ALPHA_02" value="ζ = 0.019" />
                  <DampingRow label="STRUT_BETA_NODE" value="ζ = 0.045 *" error />
               </div>
               <div className="p-4 px-8 bg-rose-500/5 border-t border-rose-500/20">
                  <p className="text-[10px] font-mono font-black text-rose-400 uppercase tracking-widest flex items-center gap-3">
                     <AlertTriangle className="w-3 h-3" /> STRUCTURAL ANOMALY DETECTED
                  </p>
               </div>
            </section>

            {/* Thermal Expansion Panel */}
            <section className="bg-black/40 border border-white/5 rounded-[40px] shadow-2xl backdrop-blur-3xl overflow-hidden p-8 flex flex-col gap-8">
               <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[9px] font-black text-amber-400 uppercase tracking-[0.4em]">THERMAL_EXPANSION_DELTA</span>
                  <Sun className="w-4 h-4 text-amber-400" />
               </div>
               <div className="space-y-6">
                  <div className="space-y-3">
                     <div className="flex justify-between text-[10px] font-mono font-black">
                        <span className="text-white/20 uppercase tracking-widest">SUN_CYCLE_EXPANSION</span>
                        <span className="text-amber-400">{(sunCycleExpansion * 100).toFixed(0)}%</span>
                     </div>
                     <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-amber-400 shadow-[0_0_12px_#fbbf2440] transition-all duration-1000" style={{ width: `${sunCycleExpansion * 100}%` }} />
                     </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                     <ThermalMetric label="TEMP_MAX" value={`${(tempMax - 273.15).toFixed(1)}°C`} />
                     <ThermalMetric label="TEMP_MIN" value={`${(tempMin - 273.15).toFixed(1)}°C`} />
                     <ThermalMetric label="ALIGN_ERR" value="0.082°" error />
                  </div>
               </div>
            </section>

         </div>
      </main>

      {/* 3. BOTTOM NAV */}
      <nav className="h-16 px-10 border-t border-white/5 bg-black/60 backdrop-blur-3xl flex justify-around items-center shrink-0 z-50">
         <NavAction icon={<Terminal />} label="Terminal" />
         <NavAction icon={<Sigma />} label="WORKSPACE" active />
         <NavAction icon={<Brain />} label="REASONING" />
         <NavAction icon={<Activity />} label="TELEMETRY" />
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
      `}</style>
    </div>
  );
};

const ResponseCard = ({ label, value, color }: any) => (
  <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl group hover:border-blue-500/20 transition-all">
     <div className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono mb-2">{label}</div>
     <div className={`text-[24px] font-mono font-black tracking-tighter ${color === 'blue' ? 'text-blue-400' : 'text-amber-400'}`}>{value}</div>
  </div>
);

const DampingRow = ({ label, value, error }: any) => (
  <div className="flex justify-between items-center p-6 hover:bg-white/[0.02] transition-colors group cursor-pointer">
     <span className="text-[12px] font-mono font-bold text-white/60 group-hover:text-white">{label}</span>
     <span className={`text-[12px] font-mono font-black ${error ? 'text-rose-400' : 'text-blue-400'}`}>{value}</span>
  </div>
);

const ThermalMetric = ({ label, value, error }: any) => (
  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl text-center group hover:border-amber-400/20 transition-all">
     <p className="text-[8px] font-black text-white/20 uppercase tracking-widest font-mono mb-1">{label}</p>
     <p className={`text-[12px] font-mono font-black ${error ? 'text-rose-400' : 'text-white'}`}>{value}</p>
  </div>
);

const NavAction = ({ icon, label, active }: any) => (
  <div className={`flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${active ? 'text-blue-400 scale-110' : 'text-white/20 hover:text-white'}`}>
     {React.cloneElement(icon, { className: 'w-5 h-5' })}
     <span className="text-[9px] font-black uppercase tracking-widest font-mono">{label}</span>
  </div>
);

export default TrussModalAnalysisEngineeringOS_2b63ad;
