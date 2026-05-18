'use client';

import React from 'react';
import {
  Terminal as Terminal,
  Activity,
  Gauge,
  Settings,
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
  ZapOff,
  ShieldAlert,
  FlameKindling,
  Brain,
  Check,
  X,
  LayoutGrid,
  History,
  HardDrive,
  Network,
  FolderOpen,
  Folder,
  Square,
  User,
  MoreVertical,
  ChevronDown,
  Monitor,
  Download,
  Upload,
  Trash2,
  StopCircle
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * TerminalCommandCenter v3.5 (Phase 55 Hardened)
 * 
 * High-fidelity engineering terminal and mission control workspace.
 * Refactored to integrate with 60Hz terminal telemetry and real-time reasoning traces.
 * Fully sovereign implementation without external dependency risk.
 */
const TerminalCommandCenterEngineeringOS_b5da04 = () => {
  const { terminalState, reasoningTrace, osStatus, pushEvent, addNotification } = useEngineeringStore();
  
  const { 
    system = { cpu_load_pct: 24.82, mem_alloc_gb: 16.4, uplink_mbs: 982 },
    nodes = [
      { id: 'NODE_OMEGA_01', status: 'ONLINE', load: 75 },
      { id: 'NODE_OMEGA_02', status: 'STANDBY', load: 10 }
    ],
    logs = [
      { time: '14:02:11', type: 'SYSTEM', msg: 'Initializing Navier-Stokes boundary layers...', status: 'INFO' },
      { time: '14:02:15', type: 'PROCESS', msg: 'Computing pressure gradients', status: 'SUCCESS' },
      { time: '14:02:21', type: 'ALERT', msg: 'DECOHERENCE DETECTED IN NODE_04', status: 'AlertTriangle' }
    ]
  } = terminalState || {};

  const handleExecute = () => {
    pushEvent?.('TERMINAL_COMMAND_EXECUTED', { timestamp: Date.now() });
    addNotification?.({
      title: 'COMMAND_SENT',
      message: 'System Terminal dispatched to OMEGA cluster.',
      type: 'INFO',
      domain: 'COMMS'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-14 px-10 border-b border-white/5 bg-black/60 backdrop-blur-3xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-4">
              <Terminal className="w-6 h-6 text-[#4cd7f6]" />
              <span className="text-[12px] font-black text-[#4cd7f6] uppercase tracking-[0.5em] font-mono italic">QUANTUM_COMMAND_OS_v3.5</span>
           </div>
           <div className="px-5 py-2 bg-[#4cd7f6]/10 border border-[#4cd7f6]/20 rounded-full flex items-center gap-3 shadow-2xl">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981] animate-pulse" />
              <span className="text-[11px] font-black text-[#4cd7f6] uppercase tracking-widest font-mono">TERMINAL_ACTIVE</span>
           </div>
        </div>
        <div className="flex items-center gap-10">
           <div className="flex gap-12 border-r border-white/5 pr-12">
              <HeaderMetric label="CPU_LOAD" value={`${(osStatus?.kernelLoad || system.cpu_load_pct).toFixed(2)}%`} color="#4cd7f6" />
              <HeaderMetric label="MEM_ALLOC" value={`${system.mem_alloc_gb.toFixed(1)}GB`} color="#4cd7f6" />
              <HeaderMetric label="UPLINK" value={`${system.uplink_mbs.toFixed(0)} MB/S`} color="#4cd7f6" />
           </div>
           <Settings className="w-6 h-6 text-white/20 hover:text-[#4cd7f6] cursor-pointer transition-all hover:rotate-90 duration-500" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-80 border-r border-white/5 bg-black/60 backdrop-blur-3xl flex flex-col p-8 gap-10 shrink-0 overflow-y-auto custom-scrollbar">
            <div className="flex flex-col gap-6">
               <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em]">SYSTEM_NAV</span>
               <nav className="flex flex-col gap-1">
                  <SideNavItem icon={<Activity className="w-5 h-5" />} label="Telemetry" active />
                  <SideNavItem icon={<Database className="w-5 h-5" />} label="Qubit_Map" />
                  <SideNavItem icon={<Layers className="w-5 h-5" />} label="Circuit_Editor" />
                  <SideNavItem icon={<Network className="w-5 h-5" />} label="Mesh_Network" />
               </nav>
            </div>

            <div className="flex flex-col gap-6">
               <span className="text-[11px] font-black text-white/10 uppercase tracking-[0.5em]">KERNEL_MODULES</span>
               <div className="space-y-4">
                  <FileItem label="root/core_solvers" icon={<FolderOpen className="w-5 h-5" />} />
                  <div className="pl-6 space-y-4 border-l border-white/10">
                     <FileItem label="cfd_engine.v4" icon={<Terminal className="w-4 h-4 text-[#4cd7f6]" />} />
                     <FileItem label="navier_stokes_mod" icon={<Terminal className="w-4 h-4 text-[#4cd7f6]" />} />
                  </div>
                  <FileItem label="root/compute_nodes" icon={<Folder className="w-5 h-5" />} />
               </div>
            </div>
         </aside>

         {/* 3. MAIN CONTENT */}
         <main className="flex-1 flex flex-col min-w-0 relative">
            <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
            
            <div className="flex-1 flex overflow-hidden">
               
               {/* Left Pane: Distributed Compute */}
               <section className="w-80 border-r border-white/5 bg-black/20 flex flex-col shrink-0">
                  <div className="h-12 px-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                     <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em]">DISTRIBUTED_NODES</span>
                     <MoreVertical className="w-5 h-5 text-white/20 cursor-pointer" />
                  </div>
                  <div className="p-8 flex flex-col gap-8 overflow-y-auto custom-scrollbar">
                     {nodes.map((n: any) => (
                        <NodeCard key={n.id} id={n.id} status={n.status} load={n.load} />
                     ))}
                  </div>
               </section>

               {/* Center Pane: CLI Terminal */}
               <section className="flex-1 flex flex-col bg-black/40 backdrop-blur-3xl overflow-hidden">
                  <div className="h-12 px-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between shrink-0">
                     <div className="flex items-center gap-4">
                        <Terminal className="w-5 h-5 text-[#4cd7f6]" />
                        <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.5em] font-mono">Primary_Terminal_Session_00</span>
                     </div>
                     <div className="flex gap-8">
                        <Minimize2 className="w-5 h-5 text-white/20 hover:text-white transition-colors cursor-pointer" />
                        <Maximize2 className="w-5 h-5 text-white/20 hover:text-white transition-colors cursor-pointer" />
                        <X className="w-5 h-5 text-rose-500/40 hover:text-rose-500 transition-colors cursor-pointer" />
                     </div>
                  </div>
                  <div className="flex-1 p-12 font-mono text-[15px] leading-relaxed overflow-y-auto custom-scrollbar bg-black/20">
                     <div className="text-white/20 mb-4 font-bold">QUANTUM Terminal OS [Version 3.5.0.8821]</div>
                     <div className="text-white/20 mb-12">(c) 2026 Engineering Dynamics Corp. All rights reserved.</div>
                     
                     <div className="flex gap-6 mb-8">
                        <span className="text-[#4cd7f6] font-black shrink-0">&gt;</span>
                        <span className="text-white font-medium">EXECUTE_CFD_SOLVER --nodes 12 --priority critical</span>
                     </div>

                     <div className="space-y-3 mb-12 pl-12 border-l-4 border-white/5 font-bold">
                        <div className="text-white/40">[SYSTEM] Initializing Navier-Stokes boundary layers...</div>
                        <div className="text-emerald-400 font-black">[SUCCESS] Boundary conditions established at t=0.000s</div>
                        <div className="text-white/40">[SYSTEM] Distributing mesh tensors to cluster OMEGA...</div>
                        <div className="flex items-center gap-8">
                           <span className="text-white/40">[PROCESS] Computing pressure gradients</span>
                           <span className="text-[#4cd7f6] font-black tracking-widest">.................... 100%</span>
                        </div>
                        <div className="text-emerald-400 font-black">[SUCCESS] Solver convergence reached at 1.4e-6 residuals.</div>
                     </div>

                     <div className="flex gap-6 mb-8">
                        <span className="text-[#4cd7f6] font-black shrink-0">&gt;</span>
                        <span className="text-white font-medium">FETCH_TELEMETRY_LOG --service qubit_bridge</span>
                     </div>

                     <div className="bg-white/[0.02] border border-[#ffb786]/20 p-10 rounded-[40px] mb-12 space-y-6 shadow-2xl relative overflow-hidden group backdrop-blur-3xl">
                        <div className="absolute inset-0 bg-[#ffb786]/5 opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="flex items-center gap-5 text-[#ffb786] relative z-10 font-black">
                           <AlertTriangle className="w-6 h-6 animate-pulse" />
                           <span className="text-[12px] uppercase tracking-[0.3em]">ALERT: DECOHERENCE DETECTED IN NODE_04</span>
                        </div>
                        <div className="text-[14px] text-white/40 space-y-3 relative z-10 font-mono font-bold">
                           <p>TIMESTAMP: {new Date().toISOString()}</p>
                           <p>LATENCY_OFFSET: +4.2ms</p>
                           <p>CORRECTION_STATUS: <span className="text-[#4cd7f6] animate-pulse uppercase">RE-CALIBRATING...</span></p>
                        </div>
                     </div>

                     <div className="flex gap-6 items-center">
                        <span className="text-[#4cd7f6] font-black shrink-0">&gt;</span>
                        <div className="flex items-center">
                           <div className="w-3 h-6 bg-[#4cd7f6]/40 animate-pulse" />
                        </div>
                     </div>
                  </div>
               </section>

               {/* Right Pane: AI Reasoning Trace */}
               <section className="w-96 border-l border-white/5 bg-black/20 flex flex-col shrink-0">
                  <div className="h-12 px-8 bg-white/[0.02] border-b border-white/5 flex items-center gap-4">
                     <Brain className="w-5 h-5 text-[#ffb786]" />
                     <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em]">AI_REASONING_TRACE</span>
                  </div>
                  <div className="flex-1 p-8 flex flex-col gap-10 overflow-y-auto custom-scrollbar">
                     {reasoningTrace.length > 0 ? [...reasoningTrace].reverse().slice(0, 15).map((trace, i) => (
                        <ReasoningCard key={i} agent={trace.agent} thought={trace.thought} timestamp={trace.timestamp} active={i === 0} />
                     )) : (
                        <div className="h-full flex flex-col items-center justify-center text-white/5 gap-8">
                           <Brain className="w-20 h-20 animate-pulse" />
                           <span className="text-[11px] font-black uppercase tracking-[0.5em]">WAITING_FOR_TRACE...</span>
                        </div>
                     )}
                  </div>
               </section>

            </div>

            {/* Bottom Quick Actions Footer */}
            <footer className="h-32 bg-black/60 border-t border-white/5 flex flex-col backdrop-blur-3xl z-50 shrink-0">
               <div className="h-14 px-10 flex items-center justify-between border-b border-white/5 bg-white/[0.01]">
                  <div className="flex gap-12 items-center">
                     <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em]">QUICK_OPS:</span>
                     <div className="flex gap-6">
                        <QuickAction label="CLEAR" icon={<Trash2 className="w-5 h-5" />} />
                        <QuickAction label="ABORT" icon={<StopCircle className="w-5 h-5 text-rose-400" />} alert />
                        <QuickAction label="RefreshCw" icon={<RefreshCcw className="w-5 h-5" />} />
                        <QuickAction label="DEPLOY" icon={<Rocket className="w-5 h-5 text-[#4cd7f6]" />} />
                     </div>
                  </div>
                  <div className="flex items-center gap-12 text-[12px] font-mono text-white/20 font-black tracking-widest">
                     <div className="flex items-center gap-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6]/40" />
                        <span>SSH: 10.0.0.42</span>
                     </div>
                     <span>{new Date().toLocaleTimeString([], { hour12: false, second: '2-digit' })}</span>
                  </div>
               </div>
               <div className="flex-1 flex items-center px-12 gap-10">
                  <span className="text-4xl font-mono font-black text-[#4cd7f6]">&gt;</span>
                  <input 
                    onKeyDown={(e) => e.key === 'Enter' && handleExecute()}
                    className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-[24px] font-mono font-black text-white placeholder:text-white/5 uppercase tracking-tighter" 
                    placeholder="ENTER SYSTEM Terminal OR 'HELP'..." 
                  />
                  <div className="flex items-center gap-8 text-white/20">
                     <span className="text-[11px] font-black uppercase tracking-[0.3em] font-mono">PRESS [ENTER] TO EXECUTE</span>
                     <div className="p-3 border border-white/10 rounded-2xl hover:bg-white/5 transition-all cursor-pointer">
                        <ChevronDown className="w-5 h-5 rotate-[270deg]" />
                     </div>
                  </div>
               </div>
            </footer>

         </main>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(76, 215, 246, 0.2) 1px, transparent 1px);
          background-size: 48px 48px;
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

const HeaderMetric = ({ label, value, color }: any) => (
  <div className="flex flex-col items-end gap-1">
    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">{label}</span>
    <span className="text-[16px] font-mono font-black" style={{ color }}>{value}</span>
  </div>
);

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`px-8 py-5 rounded-[24px] flex items-center gap-6 transition-all cursor-pointer group ${active ? 'bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/20 shadow-2xl' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-125 transition-transform duration-500">{icon}</div>
     <span className="text-[13px] font-black uppercase tracking-[0.3em] font-mono">{label}</span>
  </div>
);

const FileItem = ({ label, icon }: any) => (
  <div className="flex items-center gap-5 py-2 group cursor-pointer hover:pl-2 transition-all">
     <div className="text-white/20 group-hover:text-[#4cd7f6] transition-colors group-hover:scale-110">{icon}</div>
     <span className="text-[14px] font-mono text-white/40 group-hover:text-white transition-colors">{label}</span>
  </div>
);

const NodeCard = ({ id, status, load }: any) => (
  <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[48px] flex flex-col gap-8 group hover:bg-white/[0.04] transition-all hover:border-[#4cd7f6]/20 shadow-2xl relative overflow-hidden cursor-pointer">
     <div className="absolute top-0 right-0 w-32 h-32 bg-[#4cd7f6]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-[2000ms]" />
     <div className="flex justify-between items-start relative z-10">
        <span className="text-[14px] font-mono font-black text-[#4cd7f6] group-hover:text-white transition-colors tracking-[0.2em]">{id}</span>
        <div className={`px-3 py-1 rounded-full border text-[9px] font-black tracking-widest uppercase ${status === 'ONLINE' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-white/5 border-white/10 text-white/20'}`}>
           {status}
        </div>
     </div>
     <div className="space-y-4 relative z-10">
        <div className="flex justify-between text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono">
           <span>LOAD_AVG</span>
           <span className="text-white">{(load / 100).toFixed(2)}</span>
        </div>
        <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
           <div className={`h-full ${status === 'ONLINE' ? 'bg-[#4cd7f6] shadow-[0_0_20px_#4cd7f6]' : 'bg-white/10'} transition-all duration-1000`} style={{ width: `${load}%` }} />
        </div>
     </div>
  </div>
);

const ReasoningCard = ({ agent, thought, timestamp, active }: any) => (
  <div className={`flex flex-col gap-4 pl-8 border-l-4 ${active ? 'border-[#ffb786] bg-[#ffb786]/10' : 'border-white/5 bg-white/[0.01] opacity-60'} p-8 rounded-r-[40px] group hover:pl-10 transition-all relative overflow-hidden shadow-2xl backdrop-blur-3xl`}>
     <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/[0.02] pointer-events-none" />
     <span className="text-[11px] font-mono text-white/20 uppercase tracking-widest relative z-10 font-bold">T+{new Date(timestamp).toLocaleTimeString([], { hour12: false })}</span>
     <p className="text-[16px] text-white/90 italic leading-relaxed relative z-10 font-bold">"{thought}"</p>
     <div className="flex items-center gap-4 relative z-10">
        <Brain className={`w-5 h-5 ${active ? 'text-[#ffb786]' : 'text-[#4cd7f6]'}`} />
        <span className={`text-[11px] font-black uppercase tracking-[0.4em] ${active ? 'text-[#ffb786]' : 'text-[#4cd7f6]'} opacity-80 font-mono`}>{agent}</span>
     </div>
  </div>
);

const QuickAction = ({ label, icon, alert }: any) => (
  <button className={`px-8 py-2.5 rounded-full flex items-center gap-4 border transition-all active:scale-95 shadow-2xl font-mono text-[11px] font-black uppercase tracking-widest ${alert ? 'bg-rose-500/10 border-rose-500/20 text-rose-400 hover:bg-rose-500/20 shadow-rose-500/10' : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'}`}>
     {icon}
     {label}
  </button>
);

export default TerminalCommandCenterEngineeringOS_b5da04;
