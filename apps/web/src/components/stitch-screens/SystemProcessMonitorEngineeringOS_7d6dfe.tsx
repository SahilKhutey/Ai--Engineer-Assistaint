'use client';

import React from 'react';
import {
  Terminal,
  Activity,
  Gauge,
  Thermometer,
  Settings,
  Cpu,
  BarChart3,
  TrendingUp,
  Layers,
  Play,
  Info,
  AlertTriangle,
  MoveUp,
  Zap,
  ShieldCheck,
  Database,
  Maximize2,
  ChevronRight,
  Waves,
  Box,
  Hash,
  RefreshCcw,
  Power,
  HardDrive,
  Network,
  MousePointer2
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * SystemProcessMonitor v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity kernel Activity workspace with real-time resource telemetry and process control.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const SystemProcessMonitorEngineeringOS_7d6dfe = () => {
  const { osStatus, distributedCompute, workflowState } = useEngineeringStore();
  const { 
    kernelLoad = 0.784, 
    uptime = 12440, 
    gpuTemp = 64.2, 
    networkThroughput = 4.2 
  } = (osStatus || {}) as any;

  return (
    <div className="flex-1 flex flex-col bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. TOP STATUS BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex justify-between items-center z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 text-primary">
            <Terminal className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">QUANTUM_COMMAND_OS_v2.0.4</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
             <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">SYS_STABLE: 99.98%</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">UPTIME: {Math.floor(uptime / 3600)}h {Math.floor((uptime % 3600) / 60)}m</span>
           <Settings className="w-4 h-4 text-white/20 hover:text-primary transition-colors cursor-pointer" />
        </div>
      </header>

      <main className="flex-1 grid grid-cols-12 p-8 gap-8 min-h-0 overflow-hidden">
        
        {/* 2. RESOURCE TELEMETRY (Left) */}
        <section className="col-span-12 lg:col-span-4 flex flex-col gap-8">
           
           <div className="bg-black/40 border border-white/5 rounded-[40px] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">RESOURCE_TELEMETRY</span>
              </div>
              <div className="p-8 space-y-8">
                 <ResourceSparkline label="GPU_THERMAL_LOAD" value={`${gpuTemp.toFixed(1)}°C`} color="blue" percent={64} />
                 <ResourceSparkline label="CORE_UTILIZATION" value={`${(kernelLoad * 100).toFixed(1)}%`} color="emerald" percent={kernelLoad * 100} />
                 <ResourceSparkline label="NET_THROUGHPUT" value={`${networkThroughput.toFixed(1)} GB/S`} color="amber" percent={42} />
              </div>
           </div>

           <div className="flex-1 bg-black/40 border border-white/5 rounded-[40px] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">KERNEL_CONTROLS</span>
              </div>
              <div className="p-8 flex flex-col gap-4 justify-center flex-1">
                 <ControlButton label="KILL_PROCESS" icon={ZapOff} color="rose" />
                 <ControlButton label="RESTART_KERNEL" icon={RefreshCcw} color="blue" />
                 <ControlButton label="SCALE_CLUSTER" icon={Layers} color="emerald" />
              </div>
           </div>

        </section>

        {/* 3. ACTIVE PROCESSES (Center/Right) */}
        <section className="col-span-12 lg:col-span-8 flex flex-col gap-8 min-h-0">
           
           <div className="flex-1 bg-black/40 border border-white/5 rounded-[48px] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">ACTIVE_PROCESSES</span>
                 <span className="text-[9px] font-mono text-primary uppercase">POOL_SIZE: 128 / 512 NODE_IDS</span>
              </div>
              <div className="flex-1 overflow-auto custom-scrollbar">
                 <table className="w-full border-collapse">
                    <thead className="bg-white/[0.02] border-b border-white/5 sticky top-0">
                       <tr className="text-[10px] font-black text-white/20 uppercase tracking-widest">
                          <th className="px-8 py-4 text-left">PID</th>
                          <th className="px-8 py-4 text-left">SOLVER</th>
                          <th className="px-8 py-4 text-left">CORE_USAGE</th>
                          <th className="px-8 py-4 text-left">VRAM</th>
                          <th className="px-8 py-4 text-left">STATUS</th>
                       </tr>
                    </thead>
                    <tbody className="text-[12px] font-mono">
                       <ProcessRow pid="8829" solver="NAVIER_STOKES" core="42%" vram="12.4GB" status="RUNNING" color="emerald" />
                       <ProcessRow pid="1024" solver="AI_REASONER_v4" core="12%" vram="4.2GB" status="SYNCED" color="blue" />
                       <ProcessRow pid="9921" solver="QUANTUM_DECOHERENCE" core="88%" vram="32.1GB" status="RUNNING" color="emerald" />
                       <ProcessRow pid="4502" solver="VOID_MATTER_CALC" core="0%" vram="0.0GB" status="CRITICAL_HALT" color="rose" />
                       <ProcessRow pid="0831" solver="NEURAL_WEIGHT_MAP" core="05%" vram="1.8GB" status="IDLE" color="white/20" />
                       <ProcessRow pid="1144" solver="HELIOS_WAVE_GEN" core="29%" vram="8.5GB" status="RUNNING" color="emerald" />
                    </tbody>
                 </table>
              </div>
           </div>

           {/* System Log Stream */}
           <div className="h-[240px] bg-black/60 border border-white/5 rounded-[40px] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <div className="flex items-center gap-4">
                    <Terminal className="w-3 h-3 text-primary" />
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_LOG_STREAM</span>
                 </div>
                 <span className="text-[9px] font-mono text-emerald-400 uppercase">LIVE_CONNECTION: ESTABLISHED</span>
              </div>
              <div className="p-6 flex-1 overflow-y-auto custom-scrollbar space-y-1 font-mono text-[11px] bg-black/20">
                 {workflowState?.eventBus?.map((log, i) => (
                    <div key={log.id} className="flex gap-4 group">
                       <span className="text-white/10 shrink-0">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                       <span className="text-blue-400 font-bold shrink-0">{log.type}:</span>
                       <span className="text-white/60 group-hover:text-white transition-colors">{JSON.stringify(log.data)}</span>
                    </div>
                 )) || (
                    <>
                       <div className="flex gap-4">
                          <span className="text-white/10 shrink-0">[14:22:01]</span>
                          <span className="text-amber-400 font-bold shrink-0">NODE_ALPHA:</span>
                          <span className="text-white/60">Thermal threshold at 82%. Fan Gauge adjusted to 100%.</span>
                       </div>
                       <div className="flex gap-4">
                          <span className="text-white/10 shrink-0">[14:22:04]</span>
                          <span className="text-blue-400 font-bold shrink-0">AI_CO-PILOT:</span>
                          <span className="text-white/60">Optimizing thread distribution for Navier-Stokes solver.</span>
                       </div>
                       <div className="flex gap-4">
                          <span className="text-white/10 shrink-0">[14:22:15]</span>
                          <span className="text-rose-400 font-bold shrink-0">CRIT_ERROR:</span>
                          <span className="text-white/60">Process 4502 (VOID_MATTER) failed to heartbeat. Check integrity.</span>
                       </div>
                    </>
                 )}
              </div>
           </div>
        </section>
      </main>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>
    </div>
  );
};

const ResourceSparkline = ({ label, value, color, percent }: any) => {
  const colors: any = {
    blue: 'stroke-blue-400 shadow-[#3b82f6]',
    emerald: 'stroke-emerald-400 shadow-[#10b981]',
    amber: 'stroke-amber-400 shadow-[#f59e0b]',
  };
  return (
    <div className="flex flex-col gap-4 group">
       <div className="flex justify-between items-end">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">{label}</span>
          <span className={`text-[14px] font-mono font-black text-${color}-400`}>{value}</span>
       </div>
       <div className="h-12 bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden relative group-hover:border-white/10 transition-all">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 20">
             <polyline
                fill="none"
                className={`${colors[color]} transition-all duration-1000`}
                strokeWidth="1.5"
                points={`0,${15 - Math.random() * 5} 10,${12 - Math.random() * 5} 20,${16 - Math.random() * 5} 30,${10 - Math.random() * 5} 40,${14 - Math.random() * 5} 50,${8 - Math.random() * 5} 60,${11 - Math.random() * 5} 70,${5 - Math.random() * 5} 80,${9 - Math.random() * 5} 90,${4 - Math.random() * 5} 100,${6 - Math.random() * 5}`}
             />
          </svg>
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent to-white/5 w-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
       </div>
    </div>
  );
};

const ControlButton = ({ label, icon: Icon, color }: any) => {
  const colors: any = {
    rose: 'border-rose-500/20 text-rose-400 bg-rose-500/5 hover:bg-rose-500/10 hover:border-rose-500/40',
    blue: 'border-blue-500/20 text-blue-400 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/40',
    emerald: 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/40',
  };
  return (
    <button className={`w-full flex items-center justify-between px-8 py-5 border rounded-2xl transition-all font-black text-[12px] uppercase tracking-[0.4em] ${colors[color]}`}>
       <span>{label}</span>
       <Icon className="w-4 h-4" />
    </button>
  );
};

const ProcessRow = ({ pid, solver, core, vram, status, color }: any) => (
  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-all group">
     <td className="px-8 py-4 text-white/40">{pid}</td>
     <td className="px-8 py-4 text-primary font-black">{solver}</td>
     <td className="px-8 py-4 text-white/60">{core}</td>
     <td className="px-8 py-4 text-white/60">{vram}</td>
     <td className="px-8 py-4">
        <div className="flex items-center gap-3">
           <div className={`w-1.5 h-1.5 rounded-full bg-${color} ${status === 'RUNNING' ? 'animate-pulse' : ''}`} />
           <span className={`text-${color} uppercase tracking-widest text-[10px] font-black`}>{status}</span>
        </div>
     </td>
  </tr>
);

const ZapOff = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.41 6.75 13 2l-2.43 2.92"/><path d="M18.57 12.91 21 10h-5.34"/><path d="M8 8 3 14h9l-1 8 2.22-2.66"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
);

export default SystemProcessMonitorEngineeringOS_7d6dfe;
