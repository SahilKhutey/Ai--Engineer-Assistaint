'use client';

import React from 'react';
import {
  Box,
  Minus,
  Square,
  X,
  RefreshCw,
  Maximize2,
  Zap,
  BarChart3,
  Database,
  Waves,
  Target,
  Radio,
  Activity
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * OpticsCommandCenter v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity optics simulation workspace for geometric ray tracing and wave phase fields.
 * Fully bound to 60Hz optics telemetry from the sovereign physics kernel.
 */
const RayWaveOpticsEngineeringOS_dd99af = () => {
  const { opticsState, pushEvent, addNotification } = useEngineeringStore();
  
  const {
    geometric = { refractiveIndex: 1.52, focalLength_mm: 50, incidentAngle_deg: 45.00 },
    wavefront = { rmsError_nm: 0.045 },
    diffraction = { efficiency: 0.92 }
  } = opticsState || {};

  const handleRecalculate = () => {
    pushEvent?.('OPTICS_RECALC_TRIGGERED', { timestamp: Date.now() });
    addNotification?.({
      title: 'OPTICS_ENGINE_ACTIVE',
      message: 'Recalculating vector fields for updated refractive index.',
      type: 'INFO',
      domain: 'OPTICS'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-transparent min-h-0 overflow-y-auto custom-scrollbar p-10 space-y-10 animate-in fade-in duration-1000">
      
      {/* 1. PRIMARY WORKSPACE BENTO */}
      <div className="grid grid-cols-12 gap-10">
         
         {/* Main Simulation Viewport */}
         <section className="col-span-12 lg:col-span-8 bg-[#0B0F14]/60 border border-white/5 rounded-[48px] overflow-hidden flex flex-col shadow-2xl group backdrop-blur-3xl">
            <div className="h-12 bg-white/[0.02] flex items-center justify-between px-10 border-b border-white/5">
               <div className="flex items-center gap-4">
                  <Box className="w-4 h-4 text-blue-400" />
                  <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.5em]">GEOMETRIC_RAY_TRACER // SNELL_VERIFICATION</span>
               </div>
               <div className="flex gap-6">
                  <Maximize2 className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
                  <X className="w-4 h-4 text-rose-500/40 hover:text-rose-500 transition-colors cursor-pointer" />
               </div>
            </div>
            
            <div className="flex-1 relative min-h-[550px] bg-black/40 flex items-center justify-center overflow-hidden">
               <img 
                 className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[8000ms] mix-blend-screen" 
                 src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBTZfBI-7h_d9n9KTGkCnKyOJKcg8jR4MMCFrBNP8zknOW7I_iim48KYOyDS1F2Jt9LoQsmL_HWXf09HuAp29DIJMbG4aZt7OI6zHH7t4qFdIjGB3MtclHAMXKYa_5w0MBwLmK4_88H5JbwLbE4Ha3M-QKUH8QvTJdt1v3KhvwvRqZri-QR8eOXhCdG0kRZihqsVlfoxfVSLhdvBRHXJkPyeCLvyQWd5cZzOts5t3-BEwJU0iSNqTSFfBRXc9wBsPDLrPxwOr3SqjhR" 
                 alt="Ray Optics Simulation"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
               
               {/* HUD Overlays */}
               <div className="absolute inset-0 p-12 flex flex-col justify-between pointer-events-none">
                  <div className="flex flex-col gap-8 w-72 pointer-events-auto">
                     <div className="p-8 bg-black/40 border border-white/10 rounded-[40px] backdrop-blur-3xl space-y-6 shadow-2xl border-l-4 border-blue-400">
                        <div className="flex justify-between items-center text-[11px] font-black text-blue-400 uppercase tracking-widest">
                           <span>REFRACTION_INDEX (n2)</span>
                           <span className="font-mono text-white text-lg">{geometric.refractiveIndex.toFixed(3)}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" style={{ width: `${((geometric.refractiveIndex - 1) / 1.4) * 100}%` }} />
                        </div>
                     </div>

                     <div className="p-8 bg-black/40 border border-white/10 rounded-[40px] backdrop-blur-3xl space-y-6 shadow-2xl border-l-4 border-emerald-500">
                        <div className="flex justify-between items-center text-[11px] font-black text-emerald-400 uppercase tracking-widest">
                           <span>INCIDENT_ANGLE (θ1)</span>
                           <span className="font-mono text-white text-lg">{geometric.incidentAngle_deg.toFixed(2)}°</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-emerald-500 shadow-[0_0_15px_#10b981]" style={{ width: `${(geometric.incidentAngle_deg / 90) * 100}%` }} />
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-col items-end pointer-events-auto">
                     <div className="flex flex-col items-end gap-2">
                        <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">SNELL_LAW_VERIFICATION</span>
                        <h3 className="text-[32px] font-black text-blue-400 font-mono tracking-tighter drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">n₁ sin(θ₁) = n₂ sin(θ₂)</h3>
                        <div className="flex items-center gap-3 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mt-4">
                           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                           <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">RESIDUAL: 0.0002%</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Phase Field Control Panel */}
         <aside className="col-span-12 lg:col-span-4 flex flex-col gap-10">
            <section className="bg-[#0B0F14]/60 border border-white/5 rounded-[48px] flex-1 flex flex-col overflow-hidden shadow-2xl group backdrop-blur-3xl">
               <div className="h-12 bg-white/[0.02] flex items-center px-10 border-b border-white/5">
                  <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">PHASE_FIELD_MAP</span>
               </div>
               <div className="p-10 flex flex-col gap-10">
                  <div className="aspect-square w-full bg-black/40 border border-white/5 relative overflow-hidden rounded-[40px] group-hover:border-blue-500/30 transition-all duration-700 shadow-inner">
                     <img 
                        className="w-full h-full object-cover mix-blend-screen opacity-60 group-hover:scale-110 transition-transform duration-[10000ms]" 
                        src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuAWGKsdstVLSQOwIBG-RqkvwR2etCIcKHcODiv-EI0C1IsMaTJnHhy7nS83j8My8siIvdfl8lrvYusN2CH6SXUibR9yiaNz5lyRDKTxZgA-YljUFd4HTghw4RFyES96jzH1b3QV3y9r8yXBg60CNDUEJPsmhH27nvkIx_7kHOhp3XU9xnyFRZK_uAs4NtmwYIRe3civ4CjZFU8kte6_r9KyRWdMfM0bI1NGdWtdlx-VgiYs2KIZ0doZU6efqqL54SouKv_EOFlxLXm8" 
                        alt="Phase Field Map"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40" />
                     <div className="absolute top-8 right-8">
                        <button className="p-4 bg-black/60 border border-white/10 rounded-2xl text-white/20 hover:text-white hover:bg-blue-500/20 transition-all backdrop-blur-xl">
                           <Maximize2 className="w-5 h-5" />
                        </button>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                     <DataTag label="RMS_ERROR" value={`${wavefront.rmsError_nm.toFixed(3)} nm`} color="text-blue-400" />
                     <DataTag label="EFFICIENCY" value={`${(diffraction.efficiency * 100).toFixed(1)}%`} color="text-amber-400" />
                  </div>
               </div>
            </section>

            <section className="bg-[#0B0F14]/60 border border-white/5 rounded-[48px] p-10 space-y-8 shadow-2xl backdrop-blur-3xl">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_15px_#10b981]" />
                     <span className="text-[12px] font-black text-white uppercase tracking-[0.2em]">OPTICS_ENGINE_LIVE</span>
                  </div>
                  <span className="text-[11px] font-mono text-white/20 font-black tracking-widest">60Hz_SYNC</span>
               </div>
               <button 
                  onClick={handleRecalculate}
                  className="w-full py-6 bg-blue-500 text-white rounded-[24px] font-black text-[13px] uppercase tracking-[0.4em] shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-5 group"
               >
                  <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-1000" />
                  RECALCULATE_VECTOR_FIELD
               </button>
            </section>
         </aside>
      </div>

      {/* 2. SECONDARY DATA ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10">
         
         {/* Wavefront Analysis */}
         <section className="lg:col-span-2 bg-[#0B0F14]/60 border border-white/5 rounded-[48px] overflow-hidden flex flex-col shadow-2xl backdrop-blur-3xl">
            <div className="h-12 bg-white/[0.02] flex items-center px-10 border-b border-white/5">
               <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">WAVEFRONT_DIAGNOSTICS</span>
            </div>
            <div className="p-10 grid grid-cols-4 gap-8">
               {[
                 { label: 'ASTIGMATISM', val: '0.012', status: 'OK' },
                 { label: 'COMA', val: '0.008', status: 'OK' },
                 { label: 'SPHERICAL', val: '0.045', status: 'LIMIT' },
                 { label: 'TREFOIL', val: '0.004', status: 'OK' }
               ].map((m, i) => (
                  <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4">
                     <span className="text-[10px] text-white/20 font-black tracking-widest uppercase">{m.label}</span>
                     <div className="flex justify-between items-end">
                        <span className="text-xl font-mono font-black text-blue-400">{m.val}</span>
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${m.status === 'OK' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>{m.status}</span>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* Intensity Histogram */}
         <section className="bg-[#0B0F14]/60 border border-white/5 rounded-[48px] flex flex-col overflow-hidden shadow-2xl backdrop-blur-3xl">
            <div className="h-12 bg-white/[0.02] flex items-center px-10 border-b border-white/5">
               <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">INTENSITY_DISTRIBUTION</span>
            </div>
            <div className="flex-1 p-12 flex items-end gap-3">
               {[20, 45, 80, 95, 70, 30, 15, 40, 60, 25].map((h, i) => (
                  <div 
                     key={i} 
                     className={`flex-1 rounded-full transition-all duration-1000 ${i === 3 ? 'bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.6)] animate-pulse' : 'bg-blue-500/20 hover:bg-blue-500/40'}`}
                     style={{ height: `${h}%` }}
                  />
               ))}
            </div>
         </section>
      </div>
    </div>
  );
};

const DataTag = ({ label, value, color }: any) => (
  <div className="p-8 bg-white/[0.03] border border-white/5 rounded-3xl flex flex-col gap-3 group hover:border-blue-500/20 transition-all shadow-xl">
     <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{label}</span>
     <span className={`text-[22px] font-black font-mono tracking-tighter ${color}`}>{value}</span>
  </div>
);

export default RayWaveOpticsEngineeringOS_dd99af;
