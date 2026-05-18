'use client';

import React, { useState } from 'react';
import {
  Activity,
  Settings,
  Brain,
  Maximize2,
  MoreVertical,
  LayoutGrid,
  TrendingUp,
  Database,
  Shield,
  Zap,
  Waves,
  BarChart3,
  Power,
  Share2,
  History,
  HardDrive,
  Cpu,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Network,
  AlertTriangle,
  Play,
  RefreshCw,
  Terminal,
  Settings2,
  ArrowLeftRight,
  Camera,
  Sigma,
  Plus,
  Minus,
  Trash2,
  Box,
  Eye,
  Layers,
  CheckCircle2,
  Info,
  Binary,
  Compass,
  Gauge,
  Clock,
  Pause,
  Square,
  Home,
  Sparkles,
  FolderOpen,
  FlaskConical,
  Factory
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * InverseKinematics v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity robotic kinematics Terminal bar for real-time 6DOF solving and path planning.
 * Refactored to a sovereign React component with 60Hz real-time state binding.
 */
const InverseKinematicsEngineeringOS_0c8e49 = () => {
  const { spatialState, osStatus, pushEvent, orchestrationState } = useEngineeringStore();
  const { terrainDetail = 0.85 } = spatialState || {};
  const { kernelLoad = 0.82 } = osStatus || {};
  const { latency_ms = 14.2 } = orchestrationState || {};

  const handleAction = (action: string) => {
    pushEvent?.('IK_ACTION_TRIGGERED', { action, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-blue-500/30 animate-in fade-in duration-1000 pb-16 md:pb-0">
      {/* Cockpit Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-16 px-8 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20 shadow-2xl">
                           <Factory className="w-5 h-5 text-blue-400" />
          </div>
          <h1 className="text-[14px] font-black text-white uppercase tracking-[0.4em] font-mono text-blue-400">KINETIC_OS // DYNAMICS_LAYER_v3.2</h1>
        </div>
        <div className="flex items-center gap-8">
           <div className="hidden md:flex gap-4">
              <NavButton label="WORKSPACE" active />
              <NavButton label="SIMULATION" />
              <NavButton label="REPORTS" />
           </div>
                       <Settings2 className="w-5 h-5 text-white/20 hover:text-white transition-colors cursor-pointer" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAVIGATION (v3.2 Hardened) */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-6 hidden lg:flex shrink-0">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_INDEX</span>
          <nav className="flex flex-col gap-2">
                         <SidebarItem icon={<Activity className="w-4 h-4" />} label="Telemetry" active />
                         <SidebarItem icon={<Share2 className="w-4 h-4" />} label="Kinematics" />
                         <SidebarItem icon={<Brain className="w-4 h-4" />} label="AI_Stability" />
            <SidebarItem icon={<Terminal className="w-4 h-4" />} label="Command_Log" />
                         <SidebarItem icon={<ArrowLeftRight className="w-4 h-4" />} label="System_Sync" />
          </nav>

          <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
             <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[9px] font-black text-white/20 uppercase tracking-widest text-blue-400">THREAD_SYNC</span>
                   <span className="text-[11px] font-mono font-black text-white">{(kernelLoad * 100).toFixed(0)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                   <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${kernelLoad * 100}%` }} />
                </div>
             </div>
          </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 overflow-hidden p-6 grid grid-cols-12 grid-rows-6 gap-6 relative">
          
          {/* End-Effector Control Panel */}
          <section className="col-span-12 lg:col-span-3 row-span-4 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[32px] flex flex-col overflow-hidden">
             <header className="h-12 px-8 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">TARGET_STATE_INPUT</span>
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]" />
                   <MoreVertical className="w-3.5 h-3.5 text-white/10" />
                </div>
             </header>
             <div className="p-8 flex-1 overflow-y-auto custom-scrollbar space-y-8">
                <div className="space-y-4">
                   <label className="text-[10px] font-black text-white/20 uppercase tracking-widest block">POSITION [X, Y, Z]</label>
                   <div className="grid grid-cols-3 gap-2">
                      <IKInput value="124.50" active />
                      <IKInput value="-42.18" active />
                      <IKInput value="312.91" active />
                   </div>
                </div>
                <div className="space-y-4">
                   <label className="text-[10px] font-black text-white/20 uppercase tracking-widest block">ORIENTATION [Qx, Qy, Qz, Qw]</label>
                   <div className="grid grid-cols-2 gap-2">
                      <IKInput value="0.7071" />
                      <IKInput value="0.0000" />
                      <IKInput value="0.7071" />
                      <IKInput value="0.0000" />
                   </div>
                </div>
                <div className="pt-8 border-t border-white/5 space-y-4">
                   <ToggleOption label="AI_OPTIMIZATION_PASS" active />
                   <ToggleOption label="COLLISION_AVOIDANCE" active />
                </div>
                <div className="pt-8 flex flex-col gap-3">
                   <button className="bg-blue-500 text-white font-black text-[11px] uppercase tracking-[0.4em] py-4 rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all">SOLVE IK</button>
                   <button className="bg-white/5 border border-white/10 text-white/60 font-black text-[11px] uppercase tracking-[0.4em] py-4 rounded-2xl hover:bg-white/10 transition-all">ANIMATE MOTION</button>
                </div>
             </div>
          </section>

          {/* 3D Visualization Canvas */}
          <section className="col-span-12 lg:col-span-6 row-span-4 bg-black/60 backdrop-blur-3xl border border-white/5 rounded-[32px] relative overflow-hidden group">
             <header className="absolute top-0 left-0 w-full h-12 px-8 flex justify-between items-center z-10 border-b border-white/5 bg-black/40 backdrop-blur-md">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">REALTIME_CHAIN_RENDERER</span>
                <div className="flex items-center gap-4">
                   <span className="text-[10px] font-mono font-black text-emerald-400 tracking-widest italic">FPS: 144.2</span>
                                       <Camera className="w-4 h-4 text-white/20" />
                </div>
             </header>
             <div className="w-full h-full relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-[0.05]" />
                <div className="w-full h-full flex items-center justify-center p-12">
                   <img 
                     src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBe54AwlFdsABwpNhRgd4lwMY7BwBV4vtL0CNGKGX4eZbb2ast2lZmXxdhJNnm-2zmiho-WtocQg04B5nW8TFloP6dsNReIURJpQtMppD-HLhneycKKjsD13sqYFLCZFyKryZ0OwUjsL8PmJIwy73_MG0IF9VLfqzqhnO_SyRNlPrsKtRqLlZIXQ5EZzyQqJdkrGH4l0bfaioLMXvRekKF99STs1jPi3Lrw2eexG69f6dCaJgzZAQ4S9gGHg0RBhhVvgTT5Ia5YdVpX" 
                     className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[20000ms]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />
                </div>

                {/* HUD Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/10 rounded-full animate-pulse pointer-events-none" />
                <div className="absolute top-20 left-12 p-6 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[32px] space-y-2 group-hover:border-blue-500/20 transition-all">
                   <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-4">JOINT_STATE_DELTA</p>
                   <p className="text-[11px] font-mono font-black text-white tracking-tighter italic">Δθ₁: +0.024rad</p>
                   <p className="text-[11px] font-mono font-black text-white tracking-tighter italic">Δθ₂: -0.011rad</p>
                </div>

                <div className="absolute bottom-8 right-8 flex flex-col gap-2">
                   <IconButton icon={<Plus className="w-4 h-4" />} />
                   <IconButton icon={<Minus className="w-4 h-4" />} />
                   <IconButton icon={<RefreshCw className="w-4 h-4" />} />
                </div>
             </div>
          </section>

          {/* Jacobian Matrix & Dynamics */}
          <section className="col-span-12 lg:col-span-3 row-span-4 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[32px] overflow-hidden flex flex-col">
             <header className="h-12 px-8 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">JACOBIAN_SOLVER_DYNAMICS</span>
                <Sigma className="w-3.5 h-3.5 text-white/10" />
             </header>
             <div className="p-8 flex-1 overflow-y-auto custom-scrollbar space-y-8">
                <div className="space-y-4">
                   <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">NEWTON'S SECOND LAW</p>
                   <div className="bg-white/[0.02] p-6 border border-white/5 rounded-2xl flex flex-col items-center gap-2 group hover:border-blue-500/20 transition-all">
                      <p className="text-3xl font-mono font-black text-blue-400 italic">ΣF = m · a</p>
                      <p className="text-[9px] font-mono text-white/10 uppercase tracking-widest">Transverse Dynamics Engine 0.82</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">JACOBIAN_MATRIX [J]</p>
                   <div className="grid grid-cols-4 gap-1 p-4 bg-black/40 border border-white/5 rounded-2xl font-mono text-[9px] text-white/20">
                      {[0.92, 0.12, -0.4, 0.00, 0.04, 0.88, 0.31, -0.2, 0.11, 0.00, 0.99, 0.14, 0.00, -0.1, 0.00, 1.00].map((v, i) => (
                         <div key={i} className="bg-white/[0.02] p-2 border border-white/[0.02] text-center group-hover:text-white/60 transition-colors">
                            {v.toFixed(2)}
                         </div>
                      ))}
                   </div>
                </div>
                <div className="pt-4 space-y-3">
                   <MetricRow label="CONDITION_NUM" value="42.189" color="blue" />
                   <MetricRow label="SOLVER_ITER" value="12" />
                   <MetricRow label="ERROR_NORM" value="1.4e-6" color="rose" />
                </div>
             </div>
          </section>

          {/* Bottom Terminal Log */}
          <section className="col-span-12 row-span-2 bg-black/60 backdrop-blur-3xl border border-white/5 rounded-[32px] overflow-hidden flex flex-col">
             <header className="h-10 px-8 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">SYSTEM_CONSOLE_LOG</span>
                <div className="flex gap-6 items-center">
                   <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black text-rose-500 uppercase tracking-widest">ERRORS: 0</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">WARNS: 2</span>
                   </div>
                   <Trash2 className="w-3.5 h-3.5 text-white/10 hover:text-white transition-colors cursor-pointer" />
                </div>
             </header>
             <div className="p-4 flex-1 font-mono text-[10px] overflow-y-auto custom-scrollbar bg-black/20">
                <LogLine time="14:22:01" type="SYSTEM" content="Initializing Inverse Kinematics Core..." active />
                <LogLine time="14:22:02" type="LOADER" content="Jacobian Matrix cache warmed for 6DOF_ARM_V2." />
                <LogLine time="14:22:05" type="AI_ENGINE" content="Optimization weights updated (Target=Precision)." />
                <LogLine time="14:22:08" type="STATUS" content="Workspace ready for kinematic solving." color="text-emerald-400" />
                <LogLine time="14:22:15" type="USER" content="Target update received (124.50, -42.18, 312.91)." />
                <LogLine time="14:22:16" type="SOLVER" content="Path convergence achieved in 0.04ms." />
             </div>
          </section>

        </main>
      </div>

      {/* Mobile Control Navigation */}
      <nav className="fixed bottom-0 left-0 w-full h-16 bg-black/80 backdrop-blur-2xl border-t border-white/5 flex md:hidden items-center justify-center gap-12 z-50">
         <Play className="w-6 h-6 text-blue-400 shadow-[0_0_12px_#3b82f6] cursor-pointer" />
         <Pause className="w-6 h-6 text-white/20 hover:text-white cursor-pointer" />
         <Square className="w-6 h-6 text-white/20 hover:text-white cursor-pointer" />
         <Home className="w-6 h-6 text-white/20 hover:text-white cursor-pointer" />
      </nav>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .dot-pattern {
          background-image: radial-gradient(#202B3C 1px, transparent 1px);
          background-size: 24px 24px;
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
  <button className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl transition-all ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'text-white/40 hover:text-white'}`}>
    {label}
  </button>
);

const SidebarItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-xl' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
    <div className="group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-[11px] font-black uppercase tracking-[0.2em]">{label}</span>
  </div>
);

const IKInput = ({ value, active }: any) => (
  <div className={`bg-white/[0.02] border p-3 rounded-xl flex items-center justify-center transition-all ${active ? 'border-blue-500/40' : 'border-white/5'}`}>
     <span className={`text-[12px] font-mono font-black tracking-tighter ${active ? 'text-blue-400' : 'text-white/40'}`}>{value}</span>
  </div>
);

const ToggleOption = ({ label, active }: any) => (
  <div className="flex items-center justify-between group cursor-pointer">
     <span className="text-[10px] font-black text-white/40 group-hover:text-white transition-colors uppercase tracking-widest">{label}</span>
     <div className={`w-10 h-5 rounded-full p-1 transition-all ${active ? 'bg-blue-500' : 'bg-white/5'}`}>
        <div className={`w-3 h-3 bg-white rounded-full transition-all ${active ? 'translate-x-5' : 'translate-x-0'}`} />
     </div>
  </div>
);

const IconButton = ({ icon }: any) => (
  <button className="p-3 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-xl text-white/20 hover:text-blue-400 hover:border-blue-500/20 transition-all active:scale-95 shadow-2xl">
     {icon}
  </button>
);

const MetricRow = ({ label, value, color }: any) => (
  <div className="flex justify-between items-center py-2 border-b border-white/5 group">
     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">{label}</span>
     <span className={`text-[12px] font-mono font-black italic tracking-tighter ${color === 'blue' ? 'text-blue-400' : color === 'rose' ? 'text-rose-400' : 'text-white'}`}>{value}</span>
  </div>
);

const LogLine = ({ time, type, content, color, active }: any) => (
  <div className={`flex gap-4 py-1.5 px-4 rounded-xl border border-transparent transition-all cursor-default group hover:bg-white/[0.02] ${active ? 'bg-blue-500/[0.03] border-blue-500/5' : ''}`}>
     <span className="text-blue-400 opacity-40 group-hover:opacity-100 transition-opacity">{time}</span>
     <span className={`font-black uppercase tracking-widest ${color || 'text-white/20 group-hover:text-white/60'}`}>[{type}]</span>
     <span className="text-white/40 flex-1 group-hover:text-white/60">{content}</span>
  </div>
);

export default InverseKinematicsEngineeringOS_0c8e49;
