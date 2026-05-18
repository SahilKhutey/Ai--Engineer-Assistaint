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
  Cpu,
  Info,
  Maximize2,
  Ruler,
  TrendingUp,
  Code,
  AlignJustify,
  Gauge,
  RotateCw} from 'lucide-react';
import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * MolecularForgeDiagnostics v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity molecular synthesis and 3D print-head diagnostic center.
 * Bound to 60Hz molecular telemetry, nozzle pressure, and beam alignment streams.
 * Features real-time AI predictive maintenance and 3D schematic HUD.
 */
const MolecularForgeDiagnosticsEngineeringOS_098f51 = () => {
  const { 
    molecularState, 
    materialState, 
    digitalTwin,
    osStatus 
  } = useEngineeringStore();

  const {
    atomic = { bondingEnergy_eV: -4.5, potential_V: 1.2 },
    lattice = { constant_A: 5.43, symmetry: 'FCC' },
    solubility = { coefficient: 0.82 }
  } = molecularState || {};

  const {
    properties = { youngsModulus_GPa: 210, yieldStrength_MPa: 350, toughness_Jm2: 45000 }
  } = materialState || {};

  const {
    predictiveMaintenance = [{ component: 'Array-4', ttf_days: 1.75, probability: 0.82 }]
  } = digitalTwin || {};

  const mainPredictive = predictiveMaintenance[0] || { component: 'Array-4', ttf_days: 1.75, probability: 0.82 };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 bg-black/60 border-b border-white/5 flex justify-between items-center z-50 shrink-0 backdrop-blur-3xl">
         <div className="flex items-center gap-4">
            <Code className="text-[#adc6ff] w-5 h-5" />
            <h1 className="font-mono text-[16px] font-black text-[#adc6ff] uppercase tracking-[0.1em]">ANTIGRAVITY_OS // MOLECULAR_FORGE</h1>
         </div>
         <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
               <span className="text-[10px] font-mono font-black text-[#adc6ff] uppercase tracking-widest">GPU: {(osStatus.kernelLoad * 100).toFixed(0)}% | SIM: ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <Settings className="text-white/20 cursor-pointer hover:text-white transition-colors" />
         </div>
      </header>

      <main className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6 pb-24 lg:pb-6">
         
         {/* Status Header */}
         <div className="bg-black/40 border border-white/5 p-6 rounded-2xl flex justify-between items-center backdrop-blur-3xl shadow-2xl">
            <div className="space-y-1">
               <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_STATUS / DIAGNOSTICS</p>
               <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Molecular Forge Diagnostics</h2>
            </div>
            <div className="flex items-center gap-4 bg-emerald-500/10 border border-emerald-500/20 px-6 py-2 rounded-full">
               <div className="w-2 h-2 rounded-full bg-emerald-500 pulse-green shadow-[0_0_10px_#10b981]" />
               <span className="text-[10px] font-mono font-black text-emerald-500 uppercase tracking-widest">LIVE_TELEMETRY</span>
            </div>
         </div>

         {/* 3D Viewport Hero */}
         <div className="bg-black/40 border border-white/5 rounded-3xl overflow-hidden relative shadow-2xl group">
            <div className="h-8 bg-white/[0.02] border-b border-white/5 px-4 flex items-center justify-between">
               <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">VIEWPORT_01: MOLECULAR_PRINT_HEAD_3D</span>
               <Maximize2 className="text-white/20 hover:text-white cursor-pointer transition-colors" />
            </div>
            <div className="aspect-[21/9] w-full relative">
               <img 
                  className="w-full h-full object-cover opacity-40 grayscale mix-blend-screen transition-transform duration-[20000ms] group-hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuAF3f4P7QXYOvKlWxWzLR5Ckdddd3MQYSL-nqNiyibDI7LH1alXX9-z2Niu5eJjwwJukKoucEEC1nnlhchqycxRV3bg3oD0z-XS3ONqKvnKnufbQlpye0LZ3JEI7-yMVFzmtoC0xTp7JiDnG0UcnNLjh7wWUuH-0zuhHx9RDOcQlAxrscjwEocDT4HmdqHyRB5iki46KWHldsHESD-BCBuWdxGpwbwJ1N7CrbvMVxWY4mOKgpcW_BYoaVs-gRZhORoExh7cUHgRBVyp" 
                  alt="Molecular Schematic"
               />
               <div className="absolute top-8 left-8 flex flex-col gap-4 pointer-events-none">
                  <HudBadge label="ROTATION" value="X: 142.4° Y: 12.9°" color="#4cd7f6" />
                  <HudBadge label="THERMAL_SIG" value="1,240.5K" color="#adc6ff" />
               </div>
               <div className="absolute bottom-8 right-8 flex flex-col gap-2 items-end">
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">LATTICE_SYMMETRY</span>
                  <span className="text-2xl font-black text-[#4cd7f6]">{lattice.symmetry}</span>
               </div>
            </div>
         </div>

         {/* Sensor Bento Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <DiagnosticCard 
               label="BEAM ALIGNMENT" 
               icon={<RotateCw />} 
               color="#4cd7f6"
               value="0.0042μm"
               sub="DEVIATION_DELTA"
            >
               <div className="relative w-16 h-16 border border-white/10 rounded-full flex items-center justify-center mb-4">
                  <div className="w-1 h-1 bg-[#4cd7f6] rounded-full absolute shadow-[0_0_10px_#4cd7f6]" style={{ top: '40%', left: '45%' }} />
                  <div className="w-12 h-[1px] bg-white/5" />
                  <div className="w-[1px] h-12 bg-white/5 absolute" />
               </div>
            </DiagnosticCard>

            <DiagnosticCard 
               label="NOZZLE PRESSURE" 
               icon={<Gauge />} 
               color="#f59e0b"
               value="412.8 BAR"
               sub="NOMINAL_FLOW"
            >
               <div className="w-full space-y-3 mb-4">
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-[#f59e0b] w-[88%] shadow-[0_0_10px_#f59e0b]" />
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-white/20 w-[42%]" />
                  </div>
               </div>
            </DiagnosticCard>

            <div className="lg:col-span-2 bg-black/40 border border-white/5 p-8 rounded-3xl shadow-2xl backdrop-blur-3xl flex flex-col justify-between group overflow-hidden relative">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <TrendingUp className="text-[#adc6ff] w-32 h-32" />
               </div>
               <div>
                  <div className="flex items-center justify-between mb-8">
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">FEEDSTOCK INTEGRITY (MOLECULAR_SCAN)</span>
                     <span className="text-[9px] font-black text-[#adc6ff] uppercase tracking-widest">POLY_GRADE: CLASS-AAA</span>
                  </div>
                  <div className="flex items-end gap-1 h-20 mb-8">
                     {Array.from({ length: 24 }).map((_, i) => (
                        <div 
                           key={i} 
                           className="flex-1 bg-gradient-to-t from-[#adc6ff] to-transparent rounded-t-sm opacity-40 group-hover:opacity-80 transition-all duration-500"
                           style={{ height: `${Math.random() * 100}%` }}
                        />
                     ))}
                  </div>
               </div>
               <div className="flex justify-between items-center">
                  <div className="space-y-1">
                     <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">PURITY_INDEX</p>
                     <p className="text-2xl font-mono font-black text-[#adc6ff]">99.9997%</p>
                  </div>
                  <div className="text-right">
                     <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">BONDING_ENERGY</p>
                     <p className="text-2xl font-mono font-black text-white">{atomic.bondingEnergy_eV} eV</p>
                  </div>
               </div>
            </div>
         </div>

         {/* AI Predictive Maintenance */}
         <div className="bg-[#adc6ff]/5 border border-[#adc6ff]/20 rounded-3xl p-8 relative overflow-hidden group shadow-2xl backdrop-blur-3xl">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <Brain className="text-[#adc6ff]" />
            </div>
            <div className="relative z-10">
               <div className="flex items-center gap-3 mb-6">
                  <Cpu className="text-[#adc6ff] w-5 h-5" />
                  <span className="text-[10px] font-black text-[#adc6ff] uppercase tracking-[0.4em]">AI MAINTENANCE PREDICTOR</span>
               </div>
               <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-8">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
                     Next Calibration Cycle: <span className="text-[#adc6ff]">42H 12M</span>
                  </h3>
                  <div className="flex gap-4">
                     <div className="bg-black/40 px-6 py-2 rounded-full border border-white/5 flex items-center gap-3">
                        <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">CONFIDENCE</span>
                        <span className="text-[11px] font-mono font-black text-[#adc6ff]">{(mainPredictive.probability * 100).toFixed(0)}%</span>
                     </div>
                  </div>
               </div>
               <div className="p-6 bg-black/40 border border-white/5 rounded-2xl flex items-start gap-4 shadow-inner">
                  <Info className="text-[#adc6ff] w-5 h-5 shrink-0 mt-1" />
                  <p className="font-mono text-[12px] leading-relaxed text-white/60">
                     <span className="text-[#adc6ff] font-black">ANALYSIS:</span> Minor thermal expansion detected in {mainPredictive.component}. 
                     Recalibration scheduled before batch #942. No immediate failure risk. TTF: {mainPredictive.ttf_days.toFixed(2)} days.
                  </p>
               </div>
            </div>
         </div>

         {/* High Density Telemetry Table */}
         <div className="bg-black/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-3xl">
            <div className="h-10 bg-white/[0.02] border-b border-white/5 px-6 flex items-center justify-between">
               <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">TELEMETRY_LOG_STACK [ACTIVE_NODES]</span>
               <AlignJustify className="text-white/20" />
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left font-mono text-[11px]">
                  <thead>
                     <tr className="bg-white/[0.02] border-b border-white/5">
                        <Th>NODE_ID</Th>
                        <Th>FREQ / MAG</Th>
                        <Th>LOAD_VECTOR</Th>
                        <Th className="text-right">ERROR_DELTA</Th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.02]">
                     <Tr id="SNT-042" freq="12.4 GHz" load={85} error="0.000%" color="#4cd7f6" />
                     <Tr id="LSR-911" freq="540 nm" load={92} error="0.021%" color="#f59e0b" />
                     <Tr id="FLX-008" freq="2.1 TB/s" load={12} error="0.000%" color="#4cd7f6" />
                     <Tr id="THM-223" freq="0.4 mK" load={45} error="0.000%" color="#adc6ff" />
                  </tbody>
               </table>
            </div>
         </div>

      </main>

      {/* 4. BOTTOM NAV (Mobile) */}
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 md:hidden px-4 bg-black/80 backdrop-blur-3xl rounded-t-[32px] border-t border-white/5">
         <div className="bg-[#adc6ff] text-black rounded-2xl w-12 h-12 flex items-center justify-center shadow-[0_0_20px_#adc6ff40]"><Terminal /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#adc6ff] transition-colors"><BarChart3 /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#adc6ff] transition-colors"><Brain /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#adc6ff] transition-colors"><Ruler /></div>
      </footer>

      <style jsx>{`
         .scanline-overlay {
            background: linear-gradient(to bottom, transparent 50%, rgba(173, 198, 255, 0.05) 50%);
            background-size: 100% 4px;
         }
         .pulse-green {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
            animation: pulse 2s infinite;
         }
         @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
         }
      `}</style>
    </div>
  );
};

const HudBadge = ({ label, value, color }: any) => (
  <div className="bg-black/60 border-l-2 px-4 py-2 backdrop-blur-3xl shadow-2xl" style={{ borderColor: color }}>
     <p className="text-[8px] font-black uppercase tracking-widest mb-1" style={{ color }}>{label}</p>
     <p className="text-[12px] font-mono font-black text-white">{value}</p>
  </div>
);

const DiagnosticCard = ({ label, icon, color, value, sub, children }: any) => (
  <div className="bg-black/40 border border-white/5 p-8 rounded-3xl shadow-2xl backdrop-blur-3xl flex flex-col items-center group hover:bg-white/[0.02] transition-all">
     <div className="w-full flex items-center justify-between mb-8">
        <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">{label}</span>
        <div style={{ color }} className="opacity-40 group-hover:opacity-100 transition-opacity">{icon}</div>
     </div>
     <div className="flex-1 flex flex-col items-center justify-center w-full">
        {children}
     </div>
     <div className="w-full text-center">
        <p className="text-2xl font-mono font-black" style={{ color }}>{value}</p>
        <p className="text-[8px] font-black text-white/20 uppercase tracking-widest mt-1">{sub}</p>
     </div>
  </div>
);

const Th = ({ children, className }: any) => (
  <th className={`px-6 py-4 text-[9px] font-black text-white/20 uppercase tracking-[0.3em] ${className}`}>{children}</th>
);

const Tr = ({ id, freq, load, error, color }: any) => (
  <tr className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
     <td className="px-6 py-4 text-white font-black">{id}</td>
     <td className="px-6 py-4 text-white/60">{freq}</td>
     <td className="px-6 py-4">
        <div className="flex items-center gap-4">
           <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full transition-all duration-1000" style={{ width: `${load}%`, backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
           </div>
           <span className="text-[10px] text-white/40">{load}%</span>
        </div>
     </td>
     <td className="px-6 py-4 text-right">
        <span className={error !== '0.000%' ? 'text-rose-500 font-black' : 'text-emerald-500'}>{error}</span>
     </td>
  </tr>
);

export default MolecularForgeDiagnosticsEngineeringOS_098f51;
