'use client';

import React from 'react';
import {
  Rocket,
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
  ZapOff,
  ShieldAlert,
  FlameKindling,
  Brain,
  Check,
  X,
  LayoutGrid,
  History
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * AerospaceCommandCenter v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity aerospace Terminal and control workspace.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 * Aggregates telemetry from multiple engineering domains.
 */
const AerospaceCommandCenterEngineeringOS_90308b = () => {
  const { aerospaceState, reasoningTrace } = useEngineeringStore();
  const { 
    trajectory = { thrust_vector: 42.8, status: 'STABLE', dev_pct: 0.04 },
    diagnostics = { propulsion: 98, oxygen: 72, shield: 45, thermal_S3: 842 },
    comms = [
      { id: 'NAV_COM_1', freq: '124.5 MHz', status: 'LINK' },
      { id: 'TRANS_P2', freq: '88.2 GHz', status: 'LINK' },
      { id: 'SENS_LIDAR', freq: '---', status: 'ERR_04' },
      { id: 'GUID_SYS', freq: '4.2 GHz', status: 'LINK' }
    ]
  } = aerospaceState || {};

  const latestReasoning = reasoningTrace[reasoningTrace.length - 1];

  return (
    <div className="flex-1 flex overflow-hidden bg-[#0B0F14] text-[#e1e2ec]">
      
      {/* 1. SIDE NAVIGATION */}
      <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 shrink-0">
        <div className="flex flex-col gap-2">
           <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_NAV</span>
           <nav className="flex flex-col gap-2">
              <NavButton icon={<Activity className="w-4 h-4" />} label="Telemetry" active />
              <NavButton icon={<LayoutGrid className="w-4 h-4" />} label="Qubit_Map" />
              <NavButton icon={<Layers className="w-4 h-4" />} label="Circuit_Editor" />
              <NavButton icon={<History className="w-4 h-4" />} label="Stability_Log" />
           </nav>
        </div>

        <div className="mt-auto bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-4">
           <div className="flex justify-between items-center">
              <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">CPU_LOAD</span>
              <span className="text-[10px] font-mono font-black text-blue-400">24.5%</span>
           </div>
           <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" style={{ width: '24.5%' }} />
           </div>
        </div>
      </aside>

      {/* 2. MAIN WORKSPACE */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="h-12 px-8 border-b border-white/5 bg-black/20 flex justify-between items-center shrink-0">
           <div className="flex items-center gap-4">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">QUANTUM_COMMAND_OS_v3.2</span>
           </div>
           <div className="flex items-center gap-8">
              <div className="flex flex-col items-end">
                 <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">OS_STATUS: NOMINAL</span>
                 <span className="text-[9px] font-mono text-white/20 uppercase">UTC: {new Date().toLocaleTimeString()}</span>
              </div>
              <Settings className="w-4 h-4 text-white/20" />
           </div>
        </header>

        {/* Bento Grid */}
        <div className="flex-1 p-8 grid grid-cols-12 grid-rows-6 gap-8 overflow-hidden">
           
           {/* Primary 3D Viewport */}
           <section className="col-span-8 row-span-4 bg-black/40 border border-white/5 rounded-[48px] overflow-hidden relative group shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-8 px-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between z-10 backdrop-blur-xl">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_#60a5fa]" />
                    <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.4em]">ACTIVE_WORKSPACE: ORBITAL_DYNAMICS_V4</span>
                 </div>
                 <Maximize2 className="w-3 h-3 text-white/20" />
              </div>

              <div className="absolute inset-0 z-0">
                 <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCB45hx2k8PmCBEwbGkeGSsPXdQlADWWrpItSISKRw_1pQarNfMsnD4y8S44t3qWdjrq08ojXvbgfkd1WZdGt3w5NOv0vUMAcXdsEfBafNWt-1UWS3ket0ldy-J6DKsEX4nhcJFWhhmJoa7uSXcNDtpKHvBzcwB5r27YFYE0TIVCLkMa9xmUpWqRm9SNVI3zkGXwfkPwXErtgPHOHnhsWjD0oILkIOKzfb1U3zMjmLUEBFHJF_KVA4prJNo_Ws3Z4Jpp6f1FMmR74uX" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 scale-105 group-hover:scale-100" />
                 <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
                 <div className="absolute inset-0 scanline opacity-20 pointer-events-none" />
              </div>

              {/* HUD Overlays */}
              <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between">
                 <div className="flex justify-between">
                    <div className="w-32 border-l-2 border-t-2 border-blue-500/20 h-24" />
                    <div className="w-32 border-r-2 border-t-2 border-blue-500/20 h-24" />
                 </div>
                 <div className="flex justify-center">
                    <div className="w-64 h-64 border border-blue-500/10 rounded-full flex items-center justify-center">
                       <div className="w-48 h-48 border border-blue-500/20 rounded-full flex items-center justify-center">
                          <div className="w-8 h-px bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                       </div>
                    </div>
                 </div>
                 <div className="flex justify-between">
                    <div className="w-32 border-l-2 border-b-2 border-blue-500/20 h-24" />
                    <div className="w-32 border-r-2 border-b-2 border-blue-500/20 h-24" />
                 </div>
              </div>

              {/* Data Tags */}
              <div className="absolute top-1/3 left-1/4 p-4 bg-black/60 border border-blue-500/20 rounded-2xl backdrop-blur-xl flex flex-col gap-1 shadow-2xl transition-all hover:border-blue-500/40">
                 <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest opacity-60">THRUST_VECTOR</span>
                 <span className="text-[12px] font-mono font-black text-white">+{trajectory.thrust_vector.toFixed(1)}° [STABLE]</span>
              </div>
              <div className="absolute bottom-1/3 right-1/4 p-4 bg-black/60 border border-rose-500/20 rounded-2xl backdrop-blur-xl flex flex-col gap-1 shadow-2xl transition-all hover:border-rose-500/40">
                 <span className="text-[8px] font-black text-rose-400 uppercase tracking-widest opacity-60">THERMAL_S3</span>
                 <span className="text-[12px] font-mono font-black text-white">{diagnostics.thermal_S3.toFixed(0)}°C [AlertTriangle]</span>
              </div>
           </section>

           {/* Diagnostics Side Panel */}
           <section className="col-span-4 row-span-4 bg-black/40 border border-white/5 rounded-[48px] flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden">
              <div className="h-8 px-8 bg-white/[0.02] border-b border-white/5 flex items-center">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_DIAGNOSTICS</span>
              </div>
              <div className="flex-1 p-10 overflow-y-auto custom-scrollbar space-y-8">
                 <DiagProgress label="PROPULSION_ALPHA" value={diagnostics.propulsion} color="blue" />
                 <DiagProgress label="OXYGEN_RESERVE" value={diagnostics.oxygen} color="emerald" />
                 <DiagProgress label="SHIELD_INTEGRITY" value={diagnostics.shield} color="orange" />

                 <div className="mt-12 border-t border-white/5 pt-8">
                    <table className="w-full text-left font-mono text-[11px]">
                       <thead className="text-white/20 uppercase tracking-widest">
                          <tr>
                             <th className="pb-4 font-black">MODULE</th>
                             <th className="pb-4 font-black text-right">FREQ</th>
                             <th className="pb-4 font-black text-right">STATUS</th>
                          </tr>
                       </thead>
                       <tbody>
                          {comms.map((c: any) => (
                             <tr key={c.id} className="border-b border-white/5 group hover:bg-white/[0.02] transition-all">
                                <td className="py-4 text-white/60 font-black">{c.id}</td>
                                <td className="py-4 text-white/40 text-right">{c.freq}</td>
                                <td className={`py-4 text-right font-black ${c.status === 'LINK' ? 'text-blue-400' : 'text-rose-400 animate-pulse'}`}>{c.status}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </section>

           {/* Telemetry Log Stream */}
           <section className="col-span-7 row-span-2 bg-black/40 border border-white/5 rounded-[48px] flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden">
              <div className="h-8 px-8 bg-white/[0.02] border-b border-white/5 flex items-center">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">TELEMETRY_LOG_STREAM</span>
              </div>
              <div className="flex-1 p-8 font-mono text-[11px] overflow-y-auto custom-scrollbar bg-black/20 space-y-2">
                 <div className="flex gap-4 opacity-40">
                    <span className="text-white/20">[14:32:01]</span>
                    <span className="text-blue-400 font-black">SYSTEM:</span>
                    <span>Initializing orbital phase adjustment...</span>
                 </div>
                 <div className="flex gap-4 opacity-60">
                    <span className="text-white/20">[14:32:04]</span>
                    <span className="text-emerald-400 font-black">CORE:</span>
                    <span>Calculating delta-V for burn sequence.</span>
                 </div>
                 <div className="flex gap-4">
                    <span className="text-white/20">[14:32:06]</span>
                    <span className="text-rose-400 font-black">ALARM:</span>
                    <span>Thermal spike detected in thruster manifold B.</span>
                 </div>
                 <div className="flex gap-4">
                    <span className="text-white/20">[14:32:08]</span>
                    <span className="text-blue-400 font-black">AI_CMD:</span>
                    <span>Redirecting coolant to manifold B. Mitigating risk.</span>
                 </div>
              </div>
           </section>

           {/* AI Reasoning Engine */}
           <section className="col-span-5 row-span-2 bg-black/40 border border-white/5 rounded-[48px] flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden group">
              <div className="h-8 px-8 bg-white/[0.02] border-b border-white/5 flex items-center">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">AI_REASONING_ENGINE</span>
              </div>
              <div className="flex-1 p-8 flex flex-col gap-6">
                 <div className="flex gap-6">
                    <div className="w-20 h-20 rounded-[32px] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-500">
                       <Brain className="w-10 h-10 text-blue-400" />
                    </div>
                    <div className="space-y-2">
                       <p className="text-[13px] leading-relaxed text-white/80 font-medium italic">
                          "{latestReasoning?.thought || "Current trajectory indicates a 0.04% deviation due to solar pressure. I recommend a 0.2s RCS burst at T+140. Thermal manifold B issue is likely a sensor calibration drift."}"
                       </p>
                       <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest opacity-60">AGENT: {latestReasoning?.agent || "NAVIGATION_CORE"}</span>
                    </div>
                 </div>
                 <div className="flex gap-4 mt-auto">
                    <button className="flex-1 py-3 bg-blue-500 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-blue-400 transition-all shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-3">
                       <Check className="w-3 h-3" />
                       APPROVE_ADJUSTMENT
                    </button>
                    <button className="flex-1 py-3 bg-white/5 border border-white/5 text-white/40 font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                       <X className="w-3 h-3" />
                       IGNORE
                    </button>
                 </div>
              </div>
           </section>

        </div>

        {/* Floating Actions */}
        <div className="absolute bottom-12 right-12 flex flex-col gap-4 items-end">
           <button className="h-16 w-16 rounded-full bg-blue-500 text-white shadow-[0_0_30px_#3b82f6] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group">
              <Rocket className="w-8 h-8" />
              <div className="absolute right-20 bg-black/80 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">ENGAGE_PRIMARY_SEQUENCE</div>
           </button>
        </div>

      </main>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .scanline {
          background: linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 50%, transparent 50%);
          background-size: 100% 4px;
        }
      `}</style>
    </div>
  );
};

const NavButton = ({ icon, label, active }: any) => (
  <button className={`flex items-center gap-4 px-6 py-3 rounded-2xl transition-all duration-300 ${active ? 'bg-blue-500 text-white shadow-2xl shadow-blue-500/20' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
    {icon}
    <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
  </button>
);

const DiagProgress = ({ label, value, color }: any) => {
  const colors: any = {
    blue: 'bg-blue-500 shadow-[0_0_10px_#3b82f6]',
    emerald: 'bg-emerald-500 shadow-[0_0_10px_#10b981]',
    orange: 'bg-orange-500 shadow-[0_0_10px_#f97316]',
  };
  return (
    <div className="space-y-3">
       <div className="flex justify-between items-end">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{label}</span>
          <span className="text-[12px] font-mono font-black text-white">{value}%</span>
       </div>
       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <div className={`h-full ${colors[color]} transition-all duration-1000`} style={{ width: `${value}%` }} />
       </div>
    </div>
  );
};

export default AerospaceCommandCenterEngineeringOS_90308b;
