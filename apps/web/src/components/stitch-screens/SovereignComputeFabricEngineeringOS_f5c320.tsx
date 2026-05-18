'use client';

import React, { useState } from 'react';
import {
  Terminal,
  Activity,
  Cpu,
  Layers,
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
  Waves,
  Power,
  GitBranch,
  History,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Network
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * SovereignComputeFabric v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity distributed compute Terminal center for autonomous orchestration.
 * Refactored to a sovereign React component with 60Hz real-time state binding.
 */
const SovereignComputeFabricEngineeringOS_f5c320 = () => {
  const { osStatus, orchestrationState, pushEvent } = useEngineeringStore();
  const { 
    kernelLoad = 0.428,
    uptime = 0,
  } = osStatus || {};
  const gpuTemp = 62.4;
  const networkThroughput = 482.5;
  
  const { 
    swarmAgreement = 0.92,
    activeAgents = 12,
    latency_ms = 14.2
  } = orchestrationState || {};

  const handleAction = (action: string) => {
    pushEvent?.('FABRIC_ACTION_TRIGGERED', { action, timestamp: Date.now() });
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
            <Terminal className="w-4 h-4 text-blue-400" />
          </div>
          <h1 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono text-blue-400">QUANTUM_COMMAND_OS // FABRIC_v3.2</h1>
        </div>
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-3 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-widest">SYSTEM_LIVE</span>
           </div>
           <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
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
                   <span className="text-[9px] font-black text-white/20 uppercase tracking-widest text-blue-400">CPU_LOAD</span>
                   <span className="text-[11px] font-mono font-black text-white">{(kernelLoad * 100).toFixed(1)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${kernelLoad * 100}%` }} />
                </div>
             </div>
          </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar relative">
          
          <div className="grid grid-cols-12 gap-6 h-full">
            {/* Distributed Compute Load Hero */}
            <section className="col-span-12 lg:col-span-8 space-y-6">
              <div className="bg-black/40 border border-white/5 rounded-[40px] flex flex-col h-[400px] overflow-hidden backdrop-blur-3xl shadow-2xl relative">
                <header className="h-10 bg-white/[0.02] border-b border-white/5 flex items-center justify-between px-6">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">DISTRIBUTED_COMPUTE_LOAD // LIVE_THREAD_GRAPH</span>
                  <div className="flex gap-4">
                    <Maximize2 className="w-4 h-4 text-white/20 hover:text-white cursor-pointer" />
                    <MoreVertical className="w-4 h-4 text-white/20 hover:text-white cursor-pointer" />
                  </div>
                </header>
                <div className="flex-1 p-8 flex items-end gap-[2px] relative overflow-hidden group">
                   <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
                   {[20, 45, 70, 85, 60, 40, 30, 90, 55, 25, 60, 30, 75, 45, 65, 30, 50, 80, 20, 45, 70, 85, 60, 40, 30, 90, 55, 25, 60, 30, 75, 45, 65, 30, 50, 80].map((h, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 transition-all duration-700 ${i % 2 === 0 ? 'bg-blue-500/20 hover:bg-blue-500' : 'bg-emerald-500/20 hover:bg-emerald-500'}`}
                        style={{ height: `${h + (Math.random() - 0.5) * 5}%` }}
                      />
                   ))}
                   <div className="absolute bottom-4 left-0 w-full px-8 flex justify-between font-mono text-[9px] text-white/20 tracking-widest uppercase">
                      <span>T-60s</span>
                      <span>T-45s</span>
                      <span>T-30s</span>
                      <span>T-15s</span>
                      <span className="text-blue-400">NOW</span>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Node Status Cluster */}
                <div className="bg-black/40 border border-white/5 rounded-[32px] p-6 backdrop-blur-3xl shadow-2xl">
                   <div className="flex items-center gap-3 mb-6">
                      <Cpu className="w-4 h-4 text-blue-400" />
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">CLUSTER_NODE_STATUS</span>
                   </div>
                   <div className="space-y-3">
                      <NodeRow id="ALPHA_01" status="STABLE" load="89% PKT" color="emerald" active />
                      <NodeRow id="BETA_04" status="STABLE" load="94% PKT" color="emerald" />
                      <NodeRow id="GAMMA_12" status="THROTTLED" load="34% PKT" color="rose" />
                   </div>
                </div>

                {/* Network Throughput */}
                <div className="bg-black/40 border border-white/5 rounded-[32px] p-8 backdrop-blur-3xl shadow-2xl flex flex-col justify-between">
                   <div className="flex items-center gap-3 mb-2">
                      <Activity className="w-4 h-4 text-blue-400" />
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">NETWORK_THROUGHPUT</span>
                   </div>
                   <div className="text-center py-6">
                      <div className="text-4xl font-mono font-black text-white tracking-tighter">{(networkThroughput || 482.5).toFixed(1)} <span className="text-blue-400 text-lg uppercase tracking-widest ml-2">GB/s</span></div>
                      <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-2">UPLINK_PRIMARY_FABRIC</div>
                   </div>
                   <div className="flex gap-1.5 h-1">
                      {[1, 1, 1, 0.3, 0.3].map((v, i) => (
                         <div key={i} className={`flex-1 rounded-full ${v === 1 ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]' : 'bg-white/5'}`} />
                      ))}
                   </div>
                </div>
              </div>
            </section>

            {/* Right Sidebar: Distribution Map & Logs */}
            <section className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              <div className="bg-black/40 border border-white/5 rounded-[40px] flex-1 min-h-[300px] flex flex-col overflow-hidden backdrop-blur-3xl shadow-2xl">
                <header className="h-10 bg-white/[0.02] border-b border-white/5 flex items-center justify-between px-6">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">SIMULATION_DISTRIBUTION</span>
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">GLOBAL_VIEW</span>
                </header>
                <div className="flex-1 relative bg-[#0B0F14] group">
                   <img 
                     src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuD3h4t0qH7mWriL9JBrVLNM2kjGB8fC1jEM5h31eDy6WIP4w0_jfWuC8paB5Y-KvFD5wya0ljF_9ljRb6BzyeOKbb_ewux1xNXm6Br6zpOKePDVl0n0QNjR9RMcQuAjHMbOnEGLqGKskKFjk4D9FzdP57or51fX7-qcpp4VMpz-0PoQLbN802-LViER4gDIDuJaF--eFinRuwCpXTYcoea9-eqgFi1SJP8uLg0wlXbeOHxk25UjjSM7Rwhyv9lrrfwmLKmnNg5EQS0s" 
                     className="w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-[10000ms] group-hover:scale-110"
                   />
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-24 h-24 rounded-full border border-blue-500/20 animate-pulse flex items-center justify-center">
                         <div className="w-12 h-12 rounded-full border border-blue-500/40" />
                      </div>
                   </div>
                </div>
              </div>

              {/* AI Fault Detection Logs */}
              <div className="bg-black/40 border border-white/5 rounded-[40px] flex flex-col h-[350px] overflow-hidden backdrop-blur-3xl shadow-2xl">
                 <header className="h-10 bg-white/[0.02] border-b border-white/5 flex items-center px-6">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">AI_FAULT_DETECTION_STREAM</span>
                 </header>
                 <div className="flex-1 p-6 overflow-y-auto custom-scrollbar font-mono text-[10px] space-y-3">
                    <LogEntry time="14:22:04" type="ANALYSIS" color="text-blue-400" content="Anomaly detected in Thermal_Zone_4. Re-routing to Sector_9." />
                    <LogEntry time="14:21:58" type="PREDICT" color="text-amber-400" content="98% Probability of cache exhaustion on Node_Alpha_01." />
                    <LogEntry time="14:21:33" type="SYSTEM" color="text-emerald-400" content="Sub-process kernel integrity check: PASSED." />
                    <LogEntry time="14:20:12" type="CRITICAL" color="text-rose-400" content="Voltage drop in UPS_Cluster_C. Switching to auxiliary grid." />
                    <LogEntry time="14:19:45" type="ANALYSIS" color="text-blue-400" content="Heuristic model updated. Latency target achieved." />
                 </div>
                 <div className="p-4 bg-white/[0.02] border-t border-white/5">
                    <div className="flex items-center gap-3 px-4 py-2 bg-black/40 border border-white/5 rounded-xl">
                       <Search className="w-3.5 h-3.5 text-white/20" />
                       <input 
                         type="text" 
                         placeholder="FILTER_LOGS..." 
                         className="bg-transparent border-none outline-none focus:ring-0 text-[10px] font-mono p-0 flex-1 placeholder:text-white/10"
                       />
                    </div>
                 </div>
              </div>
            </section>
          </div>

        </main>
      </div>

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
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
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

const NodeRow = ({ id, status, load, color, active }: any) => (
  <div className={`p-3 rounded-2xl border transition-all flex justify-between items-center group cursor-pointer ${active ? 'bg-white/[0.05] border-white/10' : 'bg-transparent border-transparent hover:bg-white/[0.02]'}`}>
     <span className="text-[11px] font-mono font-black text-white/60 group-hover:text-white">NODE_{id}</span>
     <span className={`text-[9px] font-mono font-black uppercase tracking-widest ${color === 'emerald' ? 'text-emerald-400' : 'text-rose-400'}`}>{status} [{load}]</span>
  </div>
);

const LogEntry = ({ time, type, color, content }: any) => (
  <div className="flex gap-4 border-b border-white/5 pb-2 last:border-0">
     <span className="text-white/20 font-bold shrink-0">{time}</span>
     <span className={`${color} font-black shrink-0`}>[{type}]</span>
     <span className="text-white/60 leading-tight">{content}</span>
  </div>
);

export default SovereignComputeFabricEngineeringOS_f5c320;
