'use client';

import React, { useState } from 'react';
import {
  Activity,
  Settings,
  Brain,
  Maximize2,
  MoreVertical,
  TrendingUp,
  Database,
  Shield,
  Zap,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Network,
  AlertTriangle,
  Play,
  RefreshCw,
  Rocket,
  Target,
  Wind,
  Compass,
  Gauge,
  Clock,
  Terminal,
  Sparkles,
  FolderOpen,
  FlaskConical,
  Cpu,
  Settings2,
  Factory,
  Box,
  Eye,
  Layers,
  Trash2,
  CheckCircle2,
  Info,
  BarChart3,
  Binary
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * OrbitalMechanicsWorkspace v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity aerospace cockpit for orbital trajectory planning and Delta-V management.
 * Refactored to a sovereign React component with 60Hz real-time state binding.
 */
const OrbitalMechanicsWorkspaceEngineeringOS_c8c150 = () => {
  const { aerospaceState, osStatus, pushEvent } = useEngineeringStore();
  const { 
    flightDynamics = { machNumber: 0, altitude_m: 384400000, velocity_ms: 1024.5 },
    orbitalElements = { semiMajorAxis_km: 42164, eccentricity: 0.0001, inclination_deg: 0.0 }
  } = aerospaceState || {};
  
  const { kernelLoad = 0.84 } = osStatus || {};

  const handleAction = (action: string) => {
    pushEvent?.('ORBITAL_ACTION_TRIGGERED', { action, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-blue-500/30 animate-in fade-in duration-1000">
      {/* Cockpit Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
             <Rocket className="w-4 h-4 text-blue-400" />
          </div>
          <h1 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono text-blue-400">ANTIGRAVITY_OS // ORBITAL_MECHANICS_v3.2</h1>
        </div>
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-4 px-4 py-1.5 bg-white/[0.02] border border-white/5 rounded-full">
              <div className="flex items-center gap-2">
                 <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">TEL_SYNC</span>
                 <span className="text-[10px] font-mono font-black text-emerald-400 uppercase">OK</span>
              </div>
              <div className="w-px h-3 bg-white/5" />
              <div className="flex items-center gap-2">
                 <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">SIM_MODE</span>
                 <span className="text-[10px] font-mono font-black text-blue-400 uppercase tracking-widest font-bold">ACTIVE</span>
              </div>
           </div>
           <Settings className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAVIGATION (v3.2 Hardened) */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-6 hidden lg:flex shrink-0">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_CORE</span>
          <nav className="flex flex-col gap-2">
            <SidebarItem icon={<FolderOpen className="w-4 h-4" />} label="Projects" />
            <SidebarItem icon={<FlaskConical className="w-4 h-4" />} label="Simulations" active />
            <SidebarItem icon={<Cpu className="w-4 h-4" />} label="AI Agents" />
            <SidebarItem icon={<Settings2 className="w-4 h-4" />} label="Digital Twin" />
            <SidebarItem icon={<Factory className="w-4 h-4" />} label="Manufacturing" />
          </nav>

          <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
             <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">THREAD_LOAD</span>
                   <span className="text-[11px] font-mono font-black text-blue-400">{(kernelLoad * 100).toFixed(0)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${kernelLoad * 100}%` }} />
                </div>
             </div>
          </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
          
          {/* Large 3D Viewport Mockup */}
          <div className="flex-1 relative bg-[#0B0F14] overflow-hidden group">
             <img 
               src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCkN0Ij9PaboQDw4OPc8Th0-a_EsHY6Qc0HVYsPjD1goRbD50zMq4GjOMWRVsIV-4rkO_aJVANt_Yizy4cRsigaqtPeAPTDKbcb__RQTZIR8pQKkA__1SF0Fgg3VMMD94G6dpoHZGLx9bOJI2NdAm903_0wpUla4hG5Xti-KHEkUI22zy_A7KjNk7pUDEU_OCtmP5ph-xePLZs7aXcP7Uotpbwn8rZ6lbLQA0yt3IHcgX7Axx6D4ZEFpE17haV5U5f--n6bGWhitSf4" 
               className="w-full h-full object-cover opacity-60 grayscale brightness-[0.4] group-hover:scale-105 transition-transform duration-[20000ms]"
             />
             
             {/* HUD Overlays */}
             <div className="absolute inset-0 pointer-events-none p-12 flex flex-col">
                <div className="flex justify-between items-start">
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_12px_#3b82f6]" />
                         <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em]">REAL-TIME TRAJECTORY RefreshCw</span>
                      </div>
                      <h2 className="text-5xl font-black text-white tracking-tighter uppercase font-mono italic">LEO -{'>'} LLO MISSION_09</h2>
                   </div>
                   <div className="bg-black/40 border border-white/10 p-6 rounded-[32px] backdrop-blur-3xl shadow-2xl flex flex-col items-end">
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-2">CURRENT TrendingUp</span>
                      <span className="text-4xl font-mono font-black text-blue-400 tracking-tighter italic">{(flightDynamics.altitude_m / 1000).toLocaleString()} KM</span>
                      <span className="text-[11px] font-mono text-emerald-400 mt-2 font-black">+{flightDynamics.machNumber.toFixed(2)} km/s</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Side Telemetry Drawer (v3.2 Hardened) */}
          <aside className="absolute right-0 top-0 bottom-0 w-80 bg-black/40 backdrop-blur-3xl border-l border-white/5 flex flex-col z-10 hidden lg:flex">
             {/* Delta-V Budget */}
             <div className="p-6 border-b border-white/5 space-y-6">
                <div className="flex items-center justify-between">
                   <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">DELTA-V BUDGET</span>
                   <Settings className="w-3.5 h-3.5 text-white/10" />
                </div>
                <div className="space-y-4">
                   <div className="space-y-2">
                      <div className="flex justify-between font-mono text-[10px]">
                         <span className="text-white/20 uppercase">REMAINING Gauge</span>
                         <span className="text-blue-400 font-black">74.2%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ width: '74.2%' }} />
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <TelemetryCard label="TLI BURN" value="3.12 km/s" />
                      <TelemetryCard label="LOI BURN" value="0.84 km/s" />
                   </div>
                </div>
             </div>

             {/* Maneuver History */}
             <div className="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-6">UPCOMING MANEUVERS</span>
                <div className="space-y-8 flex-1">
                   <ManeuverItem 
                     time="T-MINUS 00:14:22" 
                     title="TLI - Trans-Lunar Injection" 
                     desc="Ignition sequence: Engine cluster Alpha. Duration: 342s." 
                     active 
                   />
                   <ManeuverItem 
                     time="T-MINUS 12:44:05" 
                     title="MCC-1 Mid-Course Correction" 
                     desc="Vector adjustment: -0.004 deg." 
                   />
                </div>
                
                {/* AI Efficiency Logs */}
                <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                   <div className="flex items-center gap-3">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">AI OPTIMIZATION LOG</span>
                   </div>
                   <div className="bg-amber-500/5 p-4 rounded-2xl border border-amber-500/10 font-mono text-[9px] space-y-2 text-amber-400/70">
                      <div className="flex gap-2">
                         <span className="opacity-40">[09:44:01]</span>
                         <span>Rerouting trajectory for solar pressure...</span>
                      </div>
                      <div className="flex gap-2 text-amber-400 font-black uppercase tracking-widest">
                         <span className="opacity-40">[09:44:05]</span>
                         <span>EFFICIENCY GAIN: +0.02% Gauge save.</span>
                      </div>
                      <div className="flex gap-2">
                         <span className="opacity-40">[09:44:12]</span>
                         <span>Recalculating burn duration for optimal ISP...</span>
                      </div>
                   </div>
                </div>
             </div>
          </aside>

          {/* Bottom Control Dashboard */}
          <footer className="h-48 bg-black/60 backdrop-blur-3xl border-t border-white/5 p-8 flex items-center gap-12 z-20 shrink-0">
             <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                
                {/* Thrust Controls */}
                <div className="space-y-6">
                   <ControlSlider label="THRUST_PARAM (kN)" value="842.0" color="blue" />
                   <ControlSlider label="BURN_DURATION (s)" value="342.0" color="blue" />
                </div>

                {/* Status Gauges */}
                <div className="flex justify-around items-center">
                   <GaugeCircle label="Sys Health" value={84} color="blue" />
                   <GaugeCircle label="Thermal Load" value={32} color="rose" />
                </div>

                {/* Action Cluster */}
                <div className="flex flex-col gap-3">
                   <button 
                     onClick={() => handleAction('INITIATE_BURN')}
                     className="bg-blue-500 text-white font-black text-[11px] uppercase tracking-[0.4em] py-4 rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                   >
                      <Play className="w-4 h-4 fill-current group-hover:scale-125 transition-transform" />
                      INITIATE BURN SEQUENCE
                   </button>
                   <button 
                     onClick={() => handleAction('AI_OPTIMIZE')}
                     className="bg-white/5 border border-white/10 text-white/60 font-black text-[11px] uppercase tracking-[0.4em] py-4 rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 group"
                   >
                      <Sparkles className="w-4 h-4 group-hover:text-amber-400 transition-colors" />
                      AI OPTIMIZE PATH
                   </button>
                </div>

             </div>
          </footer>

        </main>
      </div>

      {/* Mobile Navigation (Represented for completeness) */}
      <nav className="fixed bottom-0 left-0 w-full h-16 bg-black/80 backdrop-blur-2xl border-t border-white/5 flex lg:hidden items-center justify-around px-6 z-50">
         <MobileNavItem icon={<Terminal className="w-5 h-5" />} active />
         <MobileNavItem icon={<BarChart3 className="w-5 h-5" />} />
         <MobileNavItem icon={<Brain className="w-5 h-5" />} />
         <MobileNavItem icon={<Compass className="w-5 h-5" />} />
      </nav>

      <style jsx>{`
        .grid-pattern {
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

const SidebarItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-xl' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
    <div className="group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-[11px] font-black uppercase tracking-[0.2em]">{label}</span>
  </div>
);

const TelemetryCard = ({ label, value }: any) => (
  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl space-y-1 group hover:border-blue-500/20 transition-all">
     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{label}</span>
     <span className="text-[12px] font-mono font-black text-white block">{value}</span>
  </div>
);

const ManeuverItem = ({ time, title, desc, active }: any) => (
  <div className={`flex gap-4 group cursor-pointer ${active ? 'opacity-100' : 'opacity-40 hover:opacity-100'} transition-opacity`}>
     <div className="flex flex-col items-center gap-2 pt-1">
        <div className={`w-2.5 h-2.5 rounded-full ${active ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'bg-white/20'}`} />
        <div className="w-px flex-1 bg-white/5" />
     </div>
     <div className="space-y-1 pb-6">
        <span className={`text-[9px] font-black uppercase tracking-widest ${active ? 'text-blue-400' : 'text-white/20'}`}>{time}</span>
        <h4 className="text-[12px] font-black text-white tracking-tight leading-none uppercase">{title}</h4>
        <p className="text-[11px] text-white/40 leading-relaxed font-medium">{desc}</p>
     </div>
  </div>
);

const ControlSlider = ({ label, value, color }: any) => (
  <div className="space-y-4">
     <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/40">
        <span>{label}</span>
        <span className="text-blue-400 font-mono italic">{value}</span>
     </div>
     <div className="relative h-1 bg-white/5 rounded-full group">
        <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full cursor-pointer hover:scale-125 transition-transform shadow-[0_0_10px_#3b82f6]" style={{ left: '60%' }} />
        <div className="h-full bg-blue-500/40 rounded-full" style={{ width: '60%' }} />
     </div>
  </div>
);

const GaugeCircle = ({ label, value, color }: any) => (
  <div className="flex flex-col items-center gap-3">
     <div className="w-20 h-20 relative flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full -rotate-90">
           <circle cx="40" cy="40" r="36" className="stroke-white/5 fill-none" strokeWidth="3" />
           <circle 
             cx="40" cy="40" r="36" 
             className={`fill-none transition-all duration-1000 ${color === 'blue' ? 'stroke-blue-500 shadow-[0_0_10px_#3b82f6]' : 'stroke-rose-500'}`}
             strokeWidth="3"
             strokeDasharray="226"
             strokeDashoffset={226 - (226 * value) / 100}
           />
        </svg>
        <span className="text-[14px] font-mono font-black text-white tracking-tighter">{value}%</span>
     </div>
     <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">{label}</span>
  </div>
);

const MobileNavItem = ({ icon, active }: any) => (
  <div className={`p-2 transition-all ${active ? 'text-blue-400 scale-125' : 'text-white/20 hover:text-white'}`}>
     {icon}
  </div>
);

export default OrbitalMechanicsWorkspaceEngineeringOS_c8c150;
