'use client';

import React from 'react';
import {
  Box,
  Activity,
  Gauge,
  Thermometer,
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
  Magnet,
  Hash,
  Factory,
  LayoutGrid,
  AlertCircle,
  ShieldAlert
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * MaterialTwin v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity material FlaskConical intelligence workspace with real-time digital twin telemetry.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const MaterialTwinEngineeringOS_991ee4 = () => {
  const { materialState } = useEngineeringStore();
  const { 
    properties = { youngsModulus_GPa: 72.4, poissonsRatio: 0.33, glassTransition_C: 152.0 },
    state = { remainingLife_pct: 72.0, estCycles: 12440, timeToFailure_h: 842 },
    Sliders = { 
      acousticEmission_dB: 42.2, 
      strainGauges: [
        { id: 'SG_01_A', value: 142.8, status: 'NOMINAL' },
        { id: 'SG_02_A', value: 892.4, status: 'AlertTriangle' },
        { id: 'SG_03_C', value: 4202.1, status: 'CRITICAL' }
      ]
    }
  } = materialState || {};

  return (
    <div className="flex-1 flex flex-col bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. TOP STATUS BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex justify-between items-center z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Box className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">MATERIAL_TWIN_v3.2</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex gap-6">
             <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">SYS_STATUS: NOMINAL</span>
             {properties.youngsModulus_GPa < 72.3 && (
               <span className="text-[10px] font-black text-rose-400 uppercase tracking-[0.2em]">CRITICAL_ALERT: 01</span>
             )}
          </div>
        </div>
        <div className="flex items-center gap-4">
           <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">GPU: 94% | SIM: ACTIVE</span>
           <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
        </div>
      </header>

      <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar p-8 gap-8 animate-in fade-in duration-1000">
        
        {/* AlertTriangle Banner */}
        {Sliders.strainGauges.some((s: any) => s.status === 'CRITICAL') && (
          <div className="bg-rose-500/10 border border-rose-500/20 p-6 rounded-[32px] flex items-center gap-6 shadow-2xl backdrop-blur-3xl">
             <ShieldAlert className="w-8 h-8 text-rose-500 animate-pulse" />
             <div className="flex-1">
                <span className="text-[10px] font-black text-rose-400 uppercase tracking-[0.4em] block mb-1">SAFETY_SYSTEM_VIOLATION</span>
                <p className="text-[14px] font-mono text-white/80">CRITICAL AlertTriangle: Structural integrity compromised in Sector C. Selected polymer exceeds glass transition threshold.</p>
             </div>
             <button className="px-6 py-2 bg-rose-500 text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-rose-400 transition-all active:scale-95 shadow-2xl shadow-rose-500/20">OVERRIDE</button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* Degradation Map */}
           <div className="lg:col-span-8 bg-black/40 border border-white/5 rounded-[48px] overflow-hidden flex flex-col shadow-2xl backdrop-blur-3xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">DEGRADATION_HEAT_MAP_001</span>
              </div>
              <div className="relative flex-1 min-h-[420px] bg-black/40 group overflow-hidden">
                 <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCMkeLW8Jt6SPsQP5hBuZoA-9U2PrgqY9h8QvavRSv6qzGXctKpHK6NpNfm_BucawebE4nB3XkYXitRrJMwEbKsDGZlAXJJnKZeXI9KeA2IqB4iGABaIAkzpQh_j3ioN_b4cx4KsyCFn2rxScheG2kfnMReDzohjk0_YBjBXRu1vOHoD-79-LzrlIwtRAwZupX3Mx0i_cn_dSRObeHjjto2eNR-CbP8DxiXAN4Vy1nK0n-RAZ78zftf9nhnG9ox07izPXnyzwzr6iM5" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000" />
                 <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
                 
                 {/* HUD Overlays */}
                 <div className="absolute top-8 left-8 space-y-4">
                    <SensorChip label="SENSOR_X44" value="0.024mm Δ" color="blue" />
                    <SensorChip label="LOCAL_TEMP" value="142.8°C" color="amber" />
                 </div>

                 <div className="absolute bottom-8 right-8 flex flex-col items-end gap-4">
                    <div className="px-4 py-1 border border-blue-500/20 bg-blue-500/10 text-blue-400 text-[9px] font-black uppercase tracking-widest rounded-full">LIVE_TELEMETRY</div>
                    <div className="flex gap-2 items-end h-16">
                       {[0.4, 0.7, 0.3, 0.6, 0.9, 0.5, 0.8].map((v, i) => (
                          <div key={i} className="w-1.5 bg-blue-500/40 rounded-full transition-all duration-1000" style={{ height: `${v * 100}%` }} />
                       ))}
                    </div>
                 </div>
              </div>
           </div>

           {/* Remaining Operational Life */}
           <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="bg-black/40 border border-white/5 rounded-[48px] p-12 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-3xl group">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] self-start mb-12">REMAINING_LIFE (ROL)</span>
                 <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                       <circle className="text-white/5" cx="96" cy="96" r="88" fill="transparent" stroke="currentColor" strokeWidth="12" />
                       <circle className="text-blue-500 drop-shadow-[0_0_15px_#3b82f6] transition-all duration-1000" cx="96" cy="96" r="88" fill="transparent" stroke="currentColor" strokeWidth="12" strokeDasharray="553" strokeDashoffset={553 - (553 * state.remainingLife_pct / 100)} strokeLinecap="round" />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                       <span className="text-[48px] font-mono font-black text-white tracking-tighter">{state.remainingLife_pct.toFixed(0)}%</span>
                       <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">CALC_ERR: 2%</span>
                    </div>
                 </div>
                 <div className="mt-12 w-full grid grid-cols-2 gap-4">
                    <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex flex-col gap-1">
                       <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">EST_CYCLES</span>
                       <span className="text-[18px] font-mono font-black text-white">{state.estCycles.toLocaleString()}</span>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl flex flex-col gap-1">
                       <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">TIME_TO_FAIL</span>
                       <span className="text-[18px] font-mono font-black text-white">{state.timeToFailure_h.toFixed(0)}h</span>
                    </div>
                 </div>
              </div>

              {/* Acoustic Emission */}
              <div className="flex-1 bg-black/40 border border-white/5 rounded-[48px] p-8 flex flex-col shadow-2xl backdrop-blur-3xl">
                 <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">ACOUSTIC_EMISSION</span>
                    <Activity className="w-4 h-4 text-blue-400 opacity-40" />
                 </div>
                 <div className="space-y-6">
                    <div className="flex justify-between items-end">
                       <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">PEAK_AMP</span>
                       <span className="text-[20px] font-mono font-black text-blue-400">{Sliders.acousticEmission_dB.toFixed(1)} dB</span>
                    </div>
                    <div className="h-24 flex items-end gap-1 px-2">
                       {[20, 45, 30, 60, 85, 70, 50, 35, 90, 65].map((h, i) => (
                          <div key={i} className={`flex-1 rounded-t-lg transition-all duration-1000 ${h > 80 ? 'bg-rose-500' : 'bg-blue-500/40'}`} style={{ height: `${h}%` }} />
                       ))}
                    </div>
                    <span className="text-[9px] font-mono text-white/10 uppercase tracking-[0.2em]">SAMPLING AT 2.4MHz // RMS_ACTIVE</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Strain Gauges Feed */}
        <section className="bg-black/40 border border-white/5 rounded-[48px] overflow-hidden shadow-2xl backdrop-blur-3xl">
           <div className="h-10 px-8 flex items-center bg-white/[0.02] border-b border-white/5">
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">STRAIN_GAUGES_FEED (LIVE)</span>
           </div>
           <div className="p-8 overflow-x-auto">
              <table className="w-full text-left">
                 <thead className="text-[9px] font-black text-white/20 uppercase tracking-widest border-b border-white/5">
                    <tr>
                       <th className="pb-4">CHANNEL_ID</th>
                       <th className="pb-4">LOC_COORDS</th>
                       <th className="pb-4">RAW_μΣ</th>
                       <th className="pb-4">OFFSET</th>
                       <th className="pb-4">STATUS</th>
                    </tr>
                 </thead>
                 <tbody className="text-[12px] font-mono">
                    {Sliders.strainGauges.map((s: any, i: number) => (
                       <tr key={s.id} className="border-b border-white/5 group hover:bg-white/[0.02] transition-all">
                          <td className="py-4 text-white font-black">{s.id}</td>
                          <td className="py-4 text-white/40 italic">X:{122+i*2} Y:{402+i*6}</td>
                          <td className={`py-4 font-black ${s.status === 'CRITICAL' ? 'text-rose-400' : s.status === 'AlertTriangle' ? 'text-amber-400' : 'text-emerald-400'}`}>
                             {s.value > 0 ? '+' : ''}{s.value.toFixed(1)}
                          </td>
                          <td className="py-4 text-white/20">0.000{i+1}</td>
                          <td className="py-4">
                             <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${s.status === 'CRITICAL' ? 'bg-rose-500 shadow-[0_0_10px_#f43f5e]' : s.status === 'AlertTriangle' ? 'bg-amber-500 shadow-[0_0_10px_#f59e0b]' : 'bg-emerald-500 shadow-[0_0_10px_#10b981]'} animate-pulse`} />
                                <span className={`text-[10px] font-black uppercase tracking-widest ${s.status === 'CRITICAL' ? 'text-rose-400' : s.status === 'AlertTriangle' ? 'text-amber-400' : 'text-emerald-400'}`}>
                                   {s.status}
                                </span>
                             </div>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </section>

        {/* Bottom Auxiliary Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="bg-black/40 border border-white/5 rounded-[48px] p-8 shadow-2xl backdrop-blur-3xl">
              <div className="flex justify-between items-center mb-8">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">MATERIAL_PROPERTIES_LIVE</span>
                 <ShieldCheck className="w-4 h-4 text-blue-400 opacity-40" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <PropertyBox label="Young's Modulus (E)" value={`${properties.youngsModulus_GPa.toFixed(1)} GPa`} color="blue" />
                 <PropertyBox label="Poisson's Ratio (ν)" value={properties.poissonsRatio.toFixed(3)} color="emerald" />
                 <PropertyBox label="Glass Transition (Tg)" value={`${properties.glassTransition_C.toFixed(1)}°C`} color="rose" alert />
              </div>
           </div>

           <div className="bg-black/40 border border-white/5 rounded-[48px] p-8 shadow-2xl backdrop-blur-3xl flex flex-col">
              <div className="flex justify-between items-center mb-8">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">LOG_STREAM</span>
                 <span className="text-[9px] font-mono text-white/10 uppercase">FILTER: ERROR_ONLY</span>
              </div>
              <div className="flex-1 bg-black/40 rounded-[32px] p-6 space-y-3 font-mono text-[11px] overflow-y-auto custom-scrollbar h-32">
                 <LogLine time="14:02:11" type="ALERT" msg="TG_VIOLATION_THRESHOLD_MET" color="rose" />
                 <LogLine time="14:02:08" type="RefreshCw" msg="SENSOR_ARRAY_D_OFFLINE" color="white/20" />
                 <LogLine time="14:01:55" type="INFO" msg="CALIBRATION_CYCLE_COMPLETE" color="emerald" />
                 <LogLine time="14:01:42" type="RefreshCw" msg="CLOUD_TWIN_SYNC_LOCKED" color="white/20" />
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

const SensorChip = ({ label, value, color }: any) => {
  const colors: any = {
    blue: 'border-blue-500/20 text-blue-400 bg-blue-500/5',
    amber: 'border-amber-500/20 text-amber-400 bg-amber-500/5',
  };
  return (
    <div className={`p-4 border rounded-2xl backdrop-blur-3xl flex flex-col gap-1 shadow-2xl ${colors[color]}`}>
       <span className="text-[8px] font-black uppercase tracking-widest opacity-60">{label}</span>
       <span className="text-[14px] font-mono font-black">{value}</span>
    </div>
  );
};

const PropertyBox = ({ label, value, color, alert }: any) => (
  <div className={`p-6 bg-white/[0.02] border border-white/5 rounded-[32px] flex flex-col gap-2 group transition-all hover:bg-white/[0.04] ${alert ? 'border-rose-500/20 bg-rose-500/5' : ''}`}>
    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40">{label}</span>
    <span className={`text-[16px] font-mono font-black text-${color}-400`}>{value}</span>
  </div>
);

const LogLine = ({ time, type, msg, color }: any) => (
  <div className="flex gap-4">
    <span className="text-white/20 shrink-0">[{time}]</span>
    <span className={`text-${color} font-black shrink-0 w-16`}>{type}:</span>
    <span className="text-white/60">{msg}</span>
  </div>
);

export default MaterialTwinEngineeringOS_991ee4;
