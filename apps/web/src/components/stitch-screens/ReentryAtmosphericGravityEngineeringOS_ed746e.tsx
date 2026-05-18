'use client';

import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Settings,
  Search,
  Brain,
  Maximize2,
  MoreVertical,
  LayoutGrid,
  TrendingUp,
  Database,
  Shield,
  Zap,
  GitBranch,
  History,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Network,
  AlertTriangle,
  Play,
  RefreshCw,
  Grid,
  Eye,
  Layers,
  Box,
  CheckCircle2,
  Info,
  BarChart3,
  Binary,
  Scale,
  Gauge,
  Clock,
  Thermometer,
  Sparkles,
  FolderOpen,
  Fingerprint,
  Filter,
  Cpu,
  HardDrive,
  Share2,
  User,
  Rocket,
  Signal,
  Code,
  AlertCircle,
  XCircle,
  Navigation,
  Target,
  Activity
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * ReentryAtmosphericGravityEngineering v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity mission-control interface for planetary reentry and guidance.
 * Refactored to a sovereign React component with 60Hz aerospaceState binding.
 */
const ReentryAtmosphericGravityEngineeringOS_ed746e = () => {
  const { aerospaceState, osStatus, pushEvent, addNotification } = useEngineeringStore();
  const { altitude_km = 122.45, velocity_mach = 24.82, g_force = 7.14 } = aerospaceState || {};
  const { kernelLoad = 0.45 } = osStatus || {};
  const latency_ms = 12.4;

  const [simRunning, setSimRunning] = useState(true);

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-blue-500/30 animate-in fade-in duration-1000">
      {/* Cockpit Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 cockpit-grid pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-2xl">
             <Rocket className="w-4 h-4 text-blue-400" />
          </div>
          <h1 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono text-blue-400">QUANTUM_COMMAND_OS // REENTRY_v3.2</h1>
        </div>
        <div className="flex items-center gap-8">
           <nav className="hidden md:flex gap-6">
              <NavButton label="MISSION_CONTROL" active />
              <NavButton label="TELEMETRY" />
              <NavButton label="GUIDANCE" />
           </nav>
           <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-6">
              <Settings className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Background Visualization */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <img 
             className="w-full h-full object-cover opacity-20 grayscale brightness-50" 
             src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDa7pryJ_Fjkc29LK9RJ8kkepTVg9iHb0BIcsFMc07XzumvYWfeOhWABgcG61_fq2QLrXXiS8R-wUYfCmALhyyU5lDxItqsnqATp6u4A21xN691xiF-G3A-jk2ULG-DuUhW9ZrU9n0LGwZxUwF2x9dxOSEHcLmwBLN0wFscCbqHayqHV2ig333sq3lOpV4n8CJ7hFF31Q12PrNFaxlXmzruJEyn88UX2P7KioDI6N8w0uqykOHAiAC-d3iz4z296gfebvAiAfLPTBBj" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent" />
        </div>

        {/* 2. SIDE NAVIGATION */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-6 hidden lg:flex shrink-0 relative z-10">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_NAV</span>
          <nav className="flex flex-col gap-2">
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="Telemetry" />
            <SidebarItem icon={<Network className="w-4 h-4" />} label="Qubit_Map" />
            <SidebarItem icon={<GitBranch className="w-4 h-4" />} label="Circuit_Editor" />
            <SidebarItem icon={<History className="w-4 h-4" />} label="Stability_Log" />
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="System_Health" />
          </nav>
          <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
             <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-widest">LINK_ESTABLISHED</span>
          </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 p-6 relative z-10 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-12 grid-rows-6 gap-4 h-full min-h-[900px]">
            
            {/* Plasma Sheath Monitor */}
            <section className="col-span-12 md:col-span-4 row-span-2 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] flex flex-col shadow-2xl overflow-hidden group">
               <header className="h-10 px-8 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">PLASMA_SHEATH_FLUX</span>
                  <MoreVertical className="w-3.5 h-3.5 text-white/10" />
               </header>
               <div className="flex-1 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-end">
                     <div className="flex flex-col space-y-1">
                        <div className="flex items-baseline gap-2">
                           <span className="text-4xl font-mono font-black text-white tracking-tighter italic">3428</span>
                           <span className="text-sm font-black text-blue-400/40 uppercase tracking-widest">kW/m²</span>
                        </div>
                        <span className="text-[9px] font-mono font-black text-emerald-400/40 tracking-widest uppercase">+0.04% PREDICTED_ERROR</span>
                     </div>
                     <div className="w-16 h-16 rounded-full border-2 border-amber-500/20 flex items-center justify-center relative shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                        <div className="absolute inset-0 rounded-full border border-amber-500/40 animate-pulse" />
                        <span className="text-[11px] font-mono font-black text-amber-500 tracking-tighter">94.2%</span>
                     </div>
                  </div>
                  <div className="h-16 w-full mt-4 flex items-end">
                     <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path 
                          d="M0,20 L10,18 L20,15 L30,19 L40,12 L50,8 L60,10 L70,5 L80,3 L90,4 L100,2" 
                          fill="none" 
                          stroke="#f59e0b" 
                          strokeWidth="0.5"
                          className="drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]"
                        />
                     </svg>
                  </div>
               </div>
            </section>

            {/* Primary HUD: Trajectory Control */}
            <section className="col-span-12 md:col-span-5 row-span-4 bg-black/40 backdrop-blur-3xl border-2 border-blue-500/20 rounded-[40px] flex flex-col shadow-2xl relative overflow-hidden group">
               <header className="h-10 px-8 flex justify-between items-center border-b border-white/5 bg-blue-500/5">
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">GUIDANCE_PROCESSOR_v4</span>
                  <span className="text-[9px] font-mono font-black text-blue-400 animate-pulse tracking-[0.2em]">ACTIVE_DESCENT</span>
               </header>
               <div className="flex-1 flex flex-col items-center justify-center p-8 relative">
                  <div className="absolute inset-0 pointer-events-none opacity-[0.05] border-x border-y border-white flex items-center justify-center">
                     <div className="w-full h-px bg-white" />
                     <div className="h-full w-px bg-white absolute" />
                  </div>
                  <div className="absolute top-8 left-8 space-y-1">
                     <h3 className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">DRAG_FORCE_EQ</h3>
                     <code className="text-xl font-mono font-black text-blue-400 tracking-tighter italic">Fd = ½ · ρ · v² · Cd · A</code>
                  </div>
                  <div className="relative w-64 h-64 rounded-full border border-white/5 flex items-center justify-center shadow-inner">
                     <div className="absolute inset-4 rounded-full border border-blue-500/10 border-dashed animate-[spin_30s_linear_infinite]" />
                     <div className="text-center z-10 space-y-1">
                        <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">VELOCITY_MACH</span>
                        <div className="text-5xl font-mono font-black text-white tracking-tighter italic drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">{velocity_mach}</div>
                        <div className="bg-blue-500/10 text-blue-400 text-[9px] font-black px-4 py-1.5 rounded-full border border-blue-500/20 uppercase tracking-widest">HYPERSONIC_LOCKED</div>
                     </div>
                     <div className="absolute top-0 w-px h-6 bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                     <div className="absolute bottom-0 w-px h-4 bg-white/10" />
                     <div className="absolute left-0 h-px w-4 bg-white/10" />
                     <div className="absolute right-0 h-px w-4 bg-white/10" />
                  </div>
               </div>
               <div className="h-24 grid grid-cols-3 border-t border-white/5 bg-white/[0.01]">
                  <HUDStats label="ALTITUDE_KM" value={altitude_km} />
                  <HUDStats label="G-FORCE_G" value={g_force} color="text-rose-400" />
                  <HUDStats label="RANGE_KM" value="2,419" />
               </div>
            </section>

            {/* Sensor Fusion: Gravity & Accel */}
            <section className="col-span-12 md:col-span-3 row-span-3 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] flex flex-col shadow-2xl overflow-hidden group">
               <header className="h-10 px-8 flex items-center border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">SENSOR_FUSION_STACK</span>
               </header>
               <div className="flex-1 p-8 space-y-8">
                  <SensorRow label="ACCEL_X_AXIS" value="0.002 m/s²" progress={2} />
                  <SensorRow label="ACCEL_Y_AXIS" value="-1.428 m/s²" progress={45} />
                  <SensorRow label="GRAVIMETER_LOCAL" value="9.806 m/s²" progress={99} active />
                  
                  <div className="pt-4 border-t border-white/5 space-y-4">
                     <h4 className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">AUTONOMOUS_DRIFT_CORRECTION</h4>
                     <div className="grid grid-cols-2 gap-3">
                        <button className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-black py-3 rounded-2xl hover:bg-blue-500/20 transition-all uppercase tracking-widest">RECALIBRATE</button>
                        <button className="bg-white/5 border border-white/10 text-white/40 text-[9px] font-black py-3 rounded-2xl hover:bg-white/10 hover:text-white transition-all uppercase tracking-widest">STABILIZE</button>
                     </div>
                  </div>
               </div>
            </section>

            {/* Entry Corridor Map */}
            <section className="col-span-12 md:col-span-4 row-span-2 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] flex flex-col shadow-2xl overflow-hidden group">
               <header className="h-10 px-8 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">ENTRY_CORRIDOR_MAP</span>
               </header>
               <div className="flex-1 relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover opacity-20 grayscale" 
                    src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCTVSxo4drhwF5wmsfBLjmjAQ6q4XN7hqrW6S0FFAWjIacLKbbeCrtt8Vw-rht-nTIVoIDcOnmV2PKXy8JlxJq6vxqMNjWgaRXiCqVdMhvh1oyYFm0Kv-3KuwENLuPROlY6BvUkDmaxXRM9Hg2mUZ4rgAeOreBO3Dq5mSIxyaEypE16dtqfWWrO6Dcks42ZkcubCEoTc88j6opvo3i63xQJ--K8ZFguSfT7U2lju20xagPWgJil2er37PwQuzF1K1k2VU9xpuXLvVoa" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                     <div className="w-full h-4 border-2 border-blue-500/20 rounded-full relative shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full animate-ping shadow-[0_0_10px_#3b82f6]" />
                        <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-rose-500/40 rounded-full" />
                        <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-rose-500/40 rounded-full" />
                     </div>
                  </div>
               </div>
            </section>

            {/* Deceleration Curves */}
            <section className="col-span-12 md:col-span-5 row-span-2 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] flex flex-col shadow-2xl overflow-hidden group">
               <header className="h-10 px-8 flex items-center border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">DECELERATION_CURVES</span>
               </header>
               <div className="flex-1 p-8 grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest block">MODEL_V_FINAL</span>
                     <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-mono font-black text-blue-400 tracking-tighter italic">320.5</span>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">m/s</span>
                     </div>
                     <div className="h-1 bg-gradient-to-r from-blue-500 to-transparent w-full rounded-full opacity-40 shadow-[0_0_10px_#3b82f6]" />
                  </div>
                  <div className="space-y-3">
                     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest block">THETA_CRITICAL</span>
                     <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-mono font-black text-amber-500 tracking-tighter italic">14.2°</span>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">ATTACK</span>
                     </div>
                     <div className="h-1 bg-gradient-to-r from-amber-500 to-transparent w-full rounded-full opacity-40 shadow-[0_0_10px_#f59e0b]" />
                  </div>
                  <div className="col-span-2 border-t border-white/5 pt-4">
                     <div className="flex gap-8">
                        <div className="flex items-center gap-3">
                           <div className="w-3 h-0.5 bg-cyan-400" />
                           <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">BALISTIC_PATH</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="w-3 h-0.5 bg-blue-500" />
                           <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">LIFT_GUIDED_PATH</span>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Event Log */}
            <section className="col-span-12 md:col-span-3 row-span-3 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] flex flex-col shadow-2xl overflow-hidden group">
               <header className="h-10 px-8 flex items-center border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">EVENT_LOG</span>
               </header>
               <div className="flex-1 p-6 font-mono text-[11px] space-y-2 overflow-y-auto custom-scrollbar">
                  <div className="text-cyan-400/60 font-black tracking-tighter">[12:40:02] INTERFACE_LOCKED</div>
                  <div className="text-white/40 font-black tracking-tighter">[12:40:05] SENSOR_FUSION_OK</div>
                  <div className="text-white/40 font-black tracking-tighter">[12:41:22] CALC_DRAG_FORCE... DONE</div>
                  <div className="text-white/40 font-black tracking-tighter">[12:42:01] UPDATING_TRAJECTORY</div>
                  <div className="text-amber-500/60 font-black tracking-tighter">[12:43:55] THERMAL_ALARM_SET (4000K)</div>
                  <div className="text-blue-400/60 font-black tracking-tighter">[12:44:10] RCS_THRUSTERS_ARMED</div>
                  <div className="text-blue-400 animate-pulse font-black tracking-tighter italic">&gt; WAITING_FOR_INPUT_01</div>
               </div>
            </section>

          </div>
        </main>
      </div>

      {/* Mobile Control Navigation */}
      <nav className="fixed bottom-0 left-0 w-full h-16 bg-black/80 backdrop-blur-2xl border-t border-white/5 flex md:hidden items-center justify-around px-6 z-50">
         <div className="flex flex-col items-center gap-1 text-white/40"><Signal className="w-5 h-5" /><span className="text-[8px] font-black uppercase">Real-time</span></div>
         <div className="flex flex-col items-center gap-1 text-white/40"><AlertTriangle className="w-5 h-5" /><span className="text-[8px] font-black uppercase">Alerts</span></div>
         <div className="p-3 bg-blue-500 rounded-full text-white shadow-[0_0_20px_#3b82f6]"><Globe className="w-5 h-5" /></div>
         <div className="flex flex-col items-center gap-1 text-white/40"><Code className="w-5 h-5" /><span className="text-[8px] font-black uppercase">Terminal</span></div>
      </nav>

      <style jsx>{`
        .cockpit-grid {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .scanline {
          background: linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 50%, transparent 50%);
          background-size: 100% 4px;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

const NavButton = ({ label, active }: any) => (
  <button className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 transition-all ${active ? 'text-blue-400 border-b-2 border-blue-500/50' : 'text-white/40 hover:text-white'}`}>
    {label}
  </button>
);

const SidebarItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-xl' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
    <div className="group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-[11px] font-black uppercase tracking-[0.2em]">{label}</span>
  </div>
);

const HUDStats = ({ label, value, color }: any) => (
  <div className="p-4 flex flex-col justify-center border-r border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
     <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em] mb-1">{label}</span>
     <span className={`text-xl font-mono font-black ${color || 'text-white'} tracking-tighter italic`}>{value}</span>
  </div>
);

const SensorRow = ({ label, value, progress, active }: any) => (
  <div className="space-y-2 group">
     <div className="flex justify-between items-baseline">
        <span className="text-[9px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">{label}</span>
        <span className="text-[11px] font-mono font-black text-blue-400 tracking-tighter italic">{value}</span>
     </div>
     <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
        <div className={`h-full transition-all duration-[2000ms] ${active ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'bg-white/10'}`} style={{ width: `${progress}%` }} />
     </div>
  </div>
);

export default ReentryAtmosphericGravityEngineeringOS_ed746e;
