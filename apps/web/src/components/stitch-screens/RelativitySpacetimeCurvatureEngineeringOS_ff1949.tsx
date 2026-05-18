'use client';

import React, { useState } from 'react';
import {
  Activity,
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
  Terminal,
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
  Factory,
  Cpu,
  Monitor
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * RelativitySpacetimeCurvature v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity general relativity Terminal bar for real-time spacetime curvature analysis.
 * Refactored to a sovereign React component with 60Hz real-time state binding.
 */
const RelativitySpacetimeCurvatureEngineeringOS_ff1949 = () => {
  const { quantumState, osStatus, pushEvent, orchestrationState } = useEngineeringStore();
  const { fidelity = 0.99 } = quantumState || {};
  const { kernelLoad = 0.82 } = osStatus || {};

  const handleAction = (action: string) => {
    pushEvent?.('RELATIVITY_ACTION_TRIGGERED', { action, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-blue-500/30 animate-in fade-in duration-1000 pb-16 md:pb-0">
      {/* Cockpit Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-2xl">
             <Terminal className="w-4 h-4 text-blue-400" />
          </div>
          <h1 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono text-blue-400">RELATIVITY_CORE // SPACETIME_v3.2</h1>
        </div>
        <div className="flex items-center gap-8">
           <nav className="hidden md:flex gap-6">
              <NavButton label="RELATIVITY" active />
              <NavButton label="SINGULARITY" />
              <NavButton label="GEODESICS" />
           </nav>
           <Settings className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAVIGATION (v3.2 Hardened) */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-6 hidden lg:flex shrink-0">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_NAV</span>
          <nav className="flex flex-col gap-2">
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="Telemetry" active />
            <SidebarItem icon={<Network className="w-4 h-4" />} label="Qubit_Map" />
            <SidebarItem icon={<GitBranch className="w-4 h-4" />} label="Circuit_Editor" />
            <SidebarItem icon={<History className="w-4 h-4" />} label="Stability_Log" />
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="System_Health" />
          </nav>

          <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
             <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[9px] font-black text-white/20 uppercase tracking-widest text-blue-400">FIELD_SYNC</span>
                   <span className="text-[11px] font-mono font-black text-white">{(fidelity * 100).toFixed(2)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                   <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${fidelity * 100}%` }} />
                </div>
             </div>
          </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 flex flex-col p-4 gap-4 overflow-y-auto custom-scrollbar relative">
          
          <div className="grid grid-cols-12 gap-4 flex-1">
            
            {/* Left Column: Equations & Telemetry */}
            <aside className="col-span-12 lg:col-span-3 flex flex-col gap-4">
               
               {/* Field Equation Panel */}
               <div className="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[32px] overflow-hidden flex flex-col shadow-2xl">
                  <header className="h-10 px-6 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">FIELD_EQUATION_v1.0</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] animate-pulse" />
                  </header>
                  <div className="p-6 space-y-6 text-center">
                     <div className="bg-white/[0.02] p-4 rounded-2xl border border-white/5 flex items-center justify-center group hover:border-blue-500/20 transition-all">
                        <p className="text-xl font-mono font-black text-blue-400 italic">
                           G<sub>μν</sub> + Λg<sub>μν</sub> = <span className="text-cyan-400">8πG/c<sup>4</sup></span> T<sub>μν</sub>
                        </p>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <MetricCard label="METRIC_TENSOR" value="g_uv: [4x4] Sym" color="blue" />
                        <MetricCard label="RICCI_SCALAR" value="1.024e-28" color="cyan" />
                     </div>
                  </div>
               </div>

               {/* Time Dilation Delta */}
               <div className="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[32px] overflow-hidden flex flex-col flex-1 shadow-2xl">
                  <header className="h-10 px-6 flex items-center border-b border-white/5 bg-white/[0.02]">
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">TIME_DILATION_DELTA</span>
                  </header>
                  <div className="p-6 space-y-8 flex-1">
                     <DilationBar label="OBSERVER_ALPHA" value="1.000000 s" percent={100} color="blue" />
                     <DilationBar label="SINGULARITY_PROXIMITY" value="0.000421 s" percent={4} color="rose" />
                     
                     <div className="mt-8 h-32 relative rounded-2xl border border-white/5 bg-black/40 overflow-hidden group">
                        <img 
                          src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBBhYAd_I89RI8W6HFCaV92_NCl9bPauAbEo52rqy2JFXK_CdqGBr1w4KqInoNB5W1GVbB2BlNvP46CkG42xBDwyyS8g0_t9NtKh7OpG1g8Pi9nqvI2v_0-4CjKRgz1Jm3XSvQ6ct1o5wB1-s6owQaUrDG4eeefBrsW9HBP5j6KU-fy5IOlAx0aw6MiqwXqSnaJD7dSteK22h_Fq1Mf_nYGlFf4yKC85wIqNpz0P8PL3br2mRZdOrB6e2ZZhowbuP76JtqnaY3KzfZA" 
                          className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                     </div>
                  </div>
               </div>

            </aside>

            {/* Center Column: Visualization */}
            <section className="col-span-12 lg:col-span-6 flex flex-col gap-4">
               <div className="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] overflow-hidden flex flex-col flex-1 relative group shadow-2xl">
                  <header className="absolute top-0 left-0 w-full h-12 px-8 flex justify-between items-center z-20 border-b border-white/5 bg-black/40 backdrop-blur-md">
                     <div className="flex items-center gap-3">
                        <Grid className="w-4 h-4 text-blue-400" />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">SPACETIME_GEOMETRY_RENDER_3D</span>
                     </div>
                     <div className="flex gap-4">
                        <span className="text-[10px] font-mono font-black text-blue-400 uppercase tracking-widest italic">ROT: 45.00°</span>
                        <span className="text-[10px] font-mono font-black text-blue-400 uppercase tracking-widest italic">ZOOM: 0.25x</span>
                     </div>
                  </header>

                  <div className="flex-1 relative overflow-hidden">
                     <img 
                       src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCdSWhwbN-lxJFb9DN3ki3VpwF1EHiiB4OcRR_XBrLkLOF5WuzBvPIHgxStLsHcyBTuN0v2BTIPaehTEp_f7eBpxboWlBMdHX7yXX3MUCZeVdxwfY_VJQ2x41aTpob0YiKfWtgNhFRa55HCCyicFuZQ_G-HYmAWe1NhpRMzUT8Pk6eOXLTAeTUeuOcm0vrf-3FszcZF3jffZfJBNmyaDe-ah4RRrQaBPAzH96GckwHsuqHArJOLa6rPsQptyf3nImjewTh0HgTFgS2s" 
                       className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[20000ms]"
                     />
                     
                     {/* HUD Overlays */}
                     <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                           <div className="bg-black/40 border border-white/10 p-6 rounded-[32px] backdrop-blur-3xl shadow-2xl flex flex-col group hover:border-blue-500/40 transition-all">
                              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-2">EVENT_HORIZON_DETECTED</span>
                              <span className="text-2xl font-mono font-black text-white tracking-tighter italic">R_s = 2GM/c<sup>2</sup></span>
                           </div>
                           <div className="text-right space-y-1">
                              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">CURSOR_POS</span>
                              <div className="text-[11px] font-mono font-black text-white">X: 421.90</div>
                              <div className="text-[11px] font-mono font-black text-white">Y: -112.04</div>
                           </div>
                        </div>
                        
                        <div className="flex justify-center gap-6 pointer-events-auto">
                           <ActionButton label="RECALIBRATE_GRID" active onClick={() => handleAction('RECALIBRATE')} />
                           <ActionButton label="TOGGLE_GEODESICS" onClick={() => handleAction('GEODESICS')} />
                        </div>
                     </div>
                  </div>
               </div>

               {/* Relativistic Trajectory */}
               <div className="h-32 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[32px] overflow-hidden flex flex-col shadow-2xl">
                  <header className="h-10 px-8 flex items-center border-b border-white/5 bg-white/[0.02]">
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">RELATIVISTIC_TRAJECTORY_v2</span>
                  </header>
                  <div className="flex-1 flex items-center px-8 gap-8">
                     <div className="flex-1 h-12 bg-white/[0.02] border border-white/5 rounded-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center px-6">
                           <div className="w-full h-px bg-white/5" />
                        </div>
                        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6] animate-pulse" />
                        <div className="absolute right-1/4 top-1/4 w-32 h-16 border-t border-r border-blue-400/20 rounded-tr-3xl group-hover:border-blue-400/40 transition-colors" />
                     </div>
                     <div className="w-48 space-y-1">
                        <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">TARGET_VECTOR</span>
                        <div className="flex justify-between items-baseline">
                           <span className="text-[10px] font-mono text-blue-400 font-black tracking-widest uppercase">VELOCITY</span>
                           <span className="text-[14px] font-mono font-black text-white">0.86c</span>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Right Column: Optics & Health */}
            <aside className="col-span-12 lg:col-span-3 flex flex-col gap-4">
               
               {/* Gravitational Lensing */}
               <div className="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[32px] overflow-hidden flex flex-col shadow-2xl">
                  <header className="h-10 px-8 flex items-center border-b border-white/5 bg-white/[0.02]">
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">GRAVITATIONAL_LENSING_OPTICS</span>
                  </header>
                  <div className="p-8 space-y-8">
                     <div className="aspect-square w-full relative rounded-2xl border border-white/5 overflow-hidden group">
                        <img 
                          src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuAXs62g3oso6CTEVIKbHuHsZXltP0McLA9uiASotc06h8N42d4VGWJy46wiKZUrNEO0ZoQo8vp6W4RygBl0WvO1qO1wm-JY1OVPWKuo6r2jZ4LhB-jxp2NydA5k41j9GHFB3pQlOoWLN36Xm45z6qEk-v_Zy6fd0Z-EGOhWXCmbnayWBZ1SU4-Ec1qgswbZF_-ON9BetUq4pWVJ2fBumpIuPsI_a6PLa3XKDQDh1iopONkLkfN9JSguTA2M-kScDZe6vF9_UV-Pt4vx" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10000ms]"
                        />
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                     <div className="space-y-4">
                        <TelemetryRow label="LENSING_MAG" value="x12.4" color="blue" />
                        <TelemetryRow label="DEFLECTION_ANGLE" value='1.43" arcsec' color="blue" />
                     </div>
                     <button className="w-full py-4 bg-white/[0.02] border border-white/5 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/20 transition-all">
                        CALIBRATE_OPTICS
                     </button>
                  </div>
               </div>

               {/* System Health */}
               <div className="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[32px] overflow-hidden flex flex-col flex-1 shadow-2xl">
                  <header className="h-10 px-8 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">SYSTEM_HEALTH</span>
                     <Activity className="w-3.5 h-3.5 text-blue-400" />
                  </header>
                  <div className="p-8 space-y-8 flex-1">
                     <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                           <Cpu className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex-1 space-y-2">
                           <div className="flex justify-between items-baseline">
                              <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">CORE_LOAD</span>
                              <span className="text-[14px] font-mono font-black text-white">{(kernelLoad * 100).toFixed(0)}%</span>
                           </div>
                           <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" style={{ width: `${kernelLoad * 100}%` }} />
                           </div>
                        </div>
                     </div>
                     <div className="mt-8 p-6 bg-black/40 rounded-[24px] border border-white/5 font-mono text-[10px] space-y-2">
                        <span className="text-white/20 block mb-2 uppercase tracking-widest">CON_LOG_0x04:</span>
                        <div className="flex gap-2 text-emerald-400/70">
                           <span className="opacity-40">{'>'}</span>
                           <span>Spacetime curvature stable.</span>
                        </div>
                        <div className="flex gap-2 text-emerald-400/70">
                           <span className="opacity-40">{'>'}</span>
                           <span>Metrics syncing with cluster.</span>
                        </div>
                        <div className="flex gap-2 text-rose-400 font-black">
                           <span className="opacity-40 tracking-widest">{'>>'}</span>
                           <span>AlertTriangle: Horizon approach limit.</span>
                        </div>
                     </div>
                  </div>
               </div>

            </aside>

          </div>

        </main>
      </div>

      {/* Mobile Control Navigation */}
      <nav className="fixed bottom-0 left-0 w-full h-16 bg-black/80 backdrop-blur-2xl border-t border-white/5 flex md:hidden items-center justify-around px-6 z-50">
         <div className="p-2 text-white/20 hover:text-white transition-all"><LayoutGrid className="w-5 h-5" /></div>
         <div className="p-3 bg-blue-500 rounded-full text-white shadow-[0_0_20px_#3b82f6]"><Activity className="w-5 h-5" /></div>
         <div className="p-2 text-white/20 hover:text-white transition-all"><BarChart3 className="w-5 h-5" /></div>
         <div className="p-2 text-white/20 hover:text-white transition-all"><Zap className="w-5 h-5" /></div>
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

const MetricCard = ({ label, value, color }: any) => (
  <div className="space-y-1">
     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest block">{label}</span>
     <span className={`text-[12px] font-mono font-black ${color === 'blue' ? 'text-blue-400' : 'text-cyan-400'}`}>{value}</span>
  </div>
);

const DilationBar = ({ label, value, percent, color }: any) => (
  <div className="space-y-2">
     <div className="flex justify-between items-baseline">
        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{label}</span>
        <span className={`text-[12px] font-mono font-black ${color === 'rose' ? 'text-rose-400' : 'text-blue-400'}`}>{value}</span>
     </div>
     <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full transition-all duration-1000 ${color === 'rose' ? 'bg-rose-500 shadow-[0_0_10px_#f43f5e]' : 'bg-blue-500 shadow-[0_0_10px_#3b82f6]'}`} style={{ width: `${percent}%` }} />
     </div>
  </div>
);

const ActionButton = ({ label, active, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.4em] transition-all shadow-2xl ${active ? 'bg-blue-500 text-white hover:scale-[1.05] active:scale-[0.95]' : 'bg-black/60 border border-white/10 text-white/40 hover:bg-white/5 hover:text-white'}`}
  >
    {label}
  </button>
);

const TelemetryRow = ({ label, value, color }: any) => (
  <div className="flex justify-between items-center py-2 border-b border-white/5 group">
     <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] group-hover:text-white/40 transition-colors">{label}</span>
     <span className={`text-[12px] font-mono font-black tracking-tighter italic ${color === 'blue' ? 'text-blue-400' : 'text-white'}`}>{value}</span>
  </div>
);

export default RelativitySpacetimeCurvatureEngineeringOS_ff1949;
