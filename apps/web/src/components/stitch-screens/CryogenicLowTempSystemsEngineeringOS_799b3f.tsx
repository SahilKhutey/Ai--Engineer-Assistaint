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
  Droplets,
  Wind,
  Zap,
  Box,
  Snowflake,
  ZapOff
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * CryogenicLowTempSystems v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity cryogenic intelligence workspace with real-time fluid and thermal telemetry.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const CryogenicLowTempSystemsEngineeringOS_799b3f = () => {
  const { cryogenicState } = useEngineeringStore();
  const { 
    flow = { LH2_delta_V: 98.24, boiloff_rate_pct_h: 0.024, mli_efficiency: 0.998 },
    stability = { phase_state: 'SOLID', super_temp_K: 9.25, current_temp_K: 4.18, flux_pinning: 'LOCKED' },
    nodes = [
      { id: 'FEED_01', bar: 74.2, kgs: 452.1 },
      { id: 'MAIN_V', bar: 68.9, kgs: 448.3 },
      { id: 'TURBO_P', bar: 212.5, kgs: 447.9 }
    ]
  } = cryogenicState || {};

  return (
    <div className="flex-1 flex flex-col bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. TOP STATUS BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex justify-between items-center z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Snowflake className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em]">CRYO_ENG_OS_v3.2</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
             <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">LIVE_FLUID_MAP</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">PUMP_A7: ACTIVE | V_SYNC: 1.0</span>
           <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
        </div>
      </header>

      <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar p-8 gap-8 animate-in fade-in duration-1000">
        
        {/* Hero Section - Flow Visualization */}
        <section className="relative w-full aspect-Camera rounded-[64px] overflow-hidden border border-white/5 bg-black/40 shadow-2xl group">
           <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCNPo_zMsLYs6snUGI19G8Etdxn6TnfAZUKHpfDu2mq8FVaqt404kHCGIstzZJF4wHhjE9w3NvqlipQf97IY6wcv8vJlnTURq5KVKRNEMTn1exWLgXI2oyVIXOJ47OxWOCCDHS5wVb5SOqHZDGjAI3bFGOPsohGKsbO1hlz7nFnUiOFnAIxoBXSUhUyEXOyjtIWxFj3zxANRgjgcIBktvdVLbX8HdXHROv0DV3T6zAZcxfTKOUVT1UFEwz1r-sYD23H9Wvx4nC0yJIQ" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000" />
           <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
           
           {/* HUD Overlays */}
           <div className="absolute top-12 left-12 glass-panel p-8 rounded-[32px] border border-white/5 flex flex-col gap-2 shadow-2xl backdrop-blur-3xl transition-all group-hover:border-cyan-500/20">
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em]">FLOW_VECTOR_ANALYSIS</span>
              <div className="flex items-center gap-4">
                 <span className="text-[32px] font-mono font-black text-white">{flow.LH2_delta_V.toFixed(2)}%</span>
                 <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">LH2_DELTA_V: STABLE</span>
           </div>

           <div className="absolute bottom-12 right-12 flex flex-col items-end gap-4">
              <div className="px-6 py-2 bg-black/60 border border-white/10 text-cyan-400 font-mono text-[12px] rounded-full backdrop-blur-xl shadow-2xl">
                 T-MINUS: 00:04:21:09
              </div>
           </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* Boiloff Predictions */}
           <div className="lg:col-span-8 bg-black/40 border border-white/5 rounded-[48px] p-12 flex flex-col gap-8 shadow-2xl backdrop-blur-3xl">
              <div className="flex justify-between items-center">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">BOILOFF_PREDICTIONS</span>
                 <Thermometer className="w-4 h-4 text-cyan-400 opacity-40" />
              </div>
              <div className="flex justify-between items-end">
                 <div className="space-y-2">
                    <div className="text-[64px] font-mono font-black text-white tracking-tighter leading-none">{flow.boiloff_rate_pct_h.toFixed(3)}%<span className="text-[20px] text-white/20 ml-4">/hr</span></div>
                    <div className="text-[12px] font-black text-cyan-400 uppercase tracking-[0.4em]">LOSS_RATE: OPTIMAL</div>
                 </div>
                 <div className="h-24 w-48 flex items-end gap-2 px-2">
                    {[0.4, 0.6, 0.55, 0.45, 0.7, 0.3, 0.9].map((v, i) => (
                       <div key={i} className={`flex-1 rounded-full transition-all duration-1000 ${i === 6 ? 'bg-cyan-500 shadow-[0_0_15px_#22d3ee]' : 'bg-white/5'}`} style={{ height: `${v * 100}%` }} />
                    ))}
                 </div>
              </div>
           </div>

           {/* Metrics Grid */}
           <div className="lg:col-span-4 grid grid-cols-1 gap-8">
              <MetricCard label="MLI_EFFICIENCY" value={`${(flow.mli_efficiency * 100).toFixed(1)}%`} progress={flow.mli_efficiency * 100} color="cyan" />
              <div className="bg-black/40 border border-white/5 rounded-[48px] p-8 flex flex-col gap-4 shadow-2xl backdrop-blur-3xl transition-all hover:bg-white/[0.02]">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">PHASE_STABILITY</span>
                 <div className="flex items-center gap-4">
                    <Waves className="w-6 h-6 text-orange-400" />
                    <span className="text-[32px] font-mono font-black text-white tracking-tighter">{stability.phase_state}</span>
                 </div>
                 <span className="text-[10px] font-black text-orange-400/60 uppercase tracking-widest">SUPERFLUID_THRESHOLD: +0.4K</span>
              </div>
           </div>
        </div>

        {/* Superconducting Array */}
        <section className="bg-black/40 border border-white/5 rounded-[48px] p-12 shadow-2xl backdrop-blur-3xl">
           <div className="flex justify-between items-center mb-12">
              <div className="space-y-1">
                 <span className="text-[12px] font-black text-cyan-400 uppercase tracking-[0.4em]">Superconducting_Array</span>
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">MAG_LEV_PUMP_A7</span>
              </div>
              <div className="px-6 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 font-mono text-[12px] font-black tracking-[0.2em] shadow-2xl shadow-cyan-500/10">
                 {stability.flux_pinning}
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatusRow label="CRITICAL_TEMP (Tc)" value={`${stability.super_temp_K.toFixed(2)} K`} color="white/40" />
              <StatusRow label="CURRENT_TEMP" value={`${stability.current_temp_K.toFixed(2)} K`} color="cyan" alert={stability.current_temp_K > stability.super_temp_K} />
              <StatusRow label="FLUX_PINNING_STATUS" value={stability.flux_pinning} color="cyan" />
           </div>
        </section>

        {/* Flow Data Stream */}
        <section className="bg-black/40 border border-white/5 rounded-[48px] overflow-hidden shadow-2xl backdrop-blur-3xl">
           <div className="h-12 px-10 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">FLOW_DATA_STREAM</span>
              <Activity className="w-4 h-4 text-cyan-400 opacity-40" />
           </div>
           <div className="p-0 overflow-x-auto">
              <table className="w-full text-left font-mono">
                 <thead className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] border-b border-white/5">
                    <tr>
                       <th className="px-10 py-6">NODE_IDENTIFIER</th>
                       <th className="px-10 py-6">PRESSURE (BAR)</th>
                       <th className="px-10 py-6">MASS_FLOW (KG/S)</th>
                       <th className="px-10 py-6">STATUS</th>
                    </tr>
                 </thead>
                 <tbody className="text-[14px]">
                    {nodes.map((n: any, i: any) => (
                       <tr key={n.id} className="border-b border-white/5 group hover:bg-white/[0.02] transition-all">
                          <td className="px-10 py-6 text-cyan-400 font-black">{n.id}</td>
                          <td className="px-10 py-6 text-white">{n.bar.toFixed(1)}</td>
                          <td className="px-10 py-6 text-white/60">{n.kgs.toFixed(1)}</td>
                          <td className="px-10 py-6">
                             <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest font-sans">OPTIMAL</span>
                             </div>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </section>

        {/* Terminal */}
        <div className="bg-black/40 border border-white/5 rounded-[40px] p-8 font-mono text-[12px] text-white/40 space-y-3 shadow-2xl backdrop-blur-3xl overflow-hidden h-32">
           <div className="flex gap-4">
              <span className="text-cyan-400">[09:42:12]</span>
              <span>SYS_INIT: Cryogenic cooling cycle established.</span>
           </div>
           <div className="flex gap-4">
              <span className="text-cyan-400">[09:42:15]</span>
              <span className="text-white/60">DATA_READ: Pressure Sliders synchronized (Error &lt; 0.001%).</span>
           </div>
           <div className="flex gap-4">
              <span className="text-cyan-400">[09:42:21]</span>
              <span className="text-orange-400">WARN: Phase transition boundary approached in Node_7.</span>
           </div>
        </div>
      </main>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

const MetricCard = ({ label, value, progress, color }: any) => (
  <div className="bg-black/40 border border-white/5 rounded-[48px] p-8 flex flex-col gap-4 shadow-2xl backdrop-blur-3xl transition-all hover:bg-white/[0.02]">
    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">{label}</span>
    <div className={`text-[32px] font-mono font-black tracking-tighter text-${color}-400`}>{value}</div>
    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-2">
      <div className={`bg-${color}-500 h-full transition-all duration-1000 shadow-[0_0_10px_#22d3ee]`} style={{ width: `${progress}%` }} />
    </div>
  </div>
);

const StatusRow = ({ label, value, color, alert }: any) => (
  <div className={`flex flex-col gap-2 p-8 bg-white/[0.02] border border-white/5 rounded-[32px] transition-all hover:bg-white/[0.04] ${alert ? 'border-rose-500/20 bg-rose-500/5' : ''}`}>
    <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">{label}</span>
    <span className={`text-[20px] font-mono font-black text-${color}`}>{value}</span>
  </div>
);

export default CryogenicLowTempSystemsEngineeringOS_799b3f;
