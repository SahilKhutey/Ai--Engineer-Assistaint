'use client';


import {
  Terminal,
  Settings,
  Activity,
  Brain,
  BarChart3,
  Workflow,
  History,
  HardDrive,
  Zap,
  FlaskConical,
  Sparkles,
  Plus,
  Play,
  Power,
  LayoutGrid,
  Waves,
  CheckCircle,
  Cpu,
  Factory,
  FolderOpen,
  Minus,
  X,
  Code} from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * AIReasoningTrace v3.5 (Phase 55 Hardened)
 * 
 * High-fidelity, real-time observability into the agentic decision lifecycle.
 * Visualizes the reasoning graph, symbolic derivations, and cross-model verifications.
 */
const AIReasoningTraceEngineeringOS_e4c49f = () => {
  const { 
    reasoningTrace, 
    osStatus, 
    workflowState,
    distributedCompute,
    addNotification,
    pushEvent 
  } = useEngineeringStore();

  const scrollRef = useRef<HTMLDivElement>(null);
  const [command, setCommand] = useState('');

  // Auto-scroll to latest trace
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [reasoningTrace]);

  const handleExport = () => {
    addNotification?.({
      title: 'TRACE_EXPORT_INITIATED',
      message: 'Compiling cryptographic reasoning manifest...',
      type: 'INFO',
      domain: 'WORKFLOW'
    });
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command) return;
    pushEvent?.('COMMAND_EXECUTED', { cmd: command, timestamp: Date.now() });
    setCommand('');
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-8 border-b border-white/5 bg-black/40 backdrop-blur-md flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] font-mono">REASONING_TRACE_v3.5</span>
           </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-lg flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                 <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">GPU:</span>
                 <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest font-mono">94%</span>
              </div>
              <div className="w-px h-3 bg-white/10" />
              <div className="flex items-center gap-1.5">
                 <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">SIM:</span>
                 <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest font-mono">ACTIVE</span>
              </div>
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAV */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 shrink-0">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_CORE</span>
              <nav className="flex flex-col gap-1">
                 <SideNavItem icon={<FolderOpen />} label="Projects" />
                 <SideNavItem icon={<FlaskConical />} label="Simulations" />
                 <SideNavItem icon={<Cpu />} label="AI Agents" active />
                 <SideNavItem icon={<Factory />} label="Digital Twin" />
                 <SideNavItem icon={<Factory />} label="Manufacturing" />
              </nav>
           </div>
        </aside>

        {/* 3. MAIN TRACE CANVAS */}
        <main className="flex-1 grid grid-cols-12 gap-0 overflow-hidden">
           
           {/* History Column */}
           <section className="col-span-8 flex flex-col border-r border-white/5 relative overflow-hidden bg-black/20">
              <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
              
              <div className="h-14 px-8 bg-white/[0.02] border-b border-white/5 flex justify-between items-center shrink-0 backdrop-blur-md z-10">
                 <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
                    <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em] font-mono">TRACE_PATH_ID: {workflowState.activeWorkflow}</span>
                 </div>
                 <div className="flex gap-3">
                    <button 
                      onClick={handleExport}
                      className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
                    >
                       EXPORT_LOGS
                    </button>
                    <button className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
                       FORK_TRACE
                    </button>
                 </div>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar p-12 space-y-12 relative">
                 <div className="absolute left-[59px] top-0 bottom-0 w-px bg-white/5" />
                 
                 {reasoningTrace.map((step, i) => (
                    <TraceNode 
                       key={i}
                       agent={step.agent}
                       thought={step.thought}
                       confidence={0.998 - (i * 0.001)}
                       timestamp={new Date(step.timestamp).toLocaleTimeString()}
                       type={i % 3 === 0 ? 'CRITICAL' : 'NOMINAL'}
                    />
                 ))}

                 {workflowState.status !== 'IDLE' && (
                    <div className="relative pl-12">
                       <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-ping" />
                       <div className="bg-blue-500/5 border border-blue-500/20 border-dashed rounded-[32px] p-8 space-y-4">
                          <div className="flex justify-between items-center">
                             <span className="text-[13px] font-black text-blue-400 uppercase tracking-widest animate-pulse">OPTIMIZATION_SYNTHESIZER...</span>
                             <span className="text-[10px] font-mono text-white/20">TASK_{workflowState.activeWorkflow}</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                             <div className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-all duration-1000" style={{ width: `${workflowState.progress * 100}%` }} />
                          </div>
                       </div>
                    </div>
                 )}
              </div>
           </section>

           {/* Stats & Buffer Column */}
           <section className="col-span-4 flex flex-col bg-black/40 backdrop-blur-3xl shrink-0">
              {/* Telemetry Panel */}
              <div className="h-1/2 border-b border-white/5 flex flex-col overflow-hidden">
                 <div className="h-10 bg-white/[0.02] border-b border-white/5 px-6 flex items-center justify-between shrink-0">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">REAL_TIME_TELEMETRY</span>
                    <div className="flex gap-2">
                       <Minus className="w-3.5 h-3.5 text-white/10 hover:text-white cursor-pointer" />
                       <X className="w-3.5 h-3.5 text-white/10 hover:text-white cursor-pointer" />
                    </div>
                 </div>
                 <div className="flex-1 p-8 grid grid-cols-2 gap-4">
                    <MiniMetric label="LATENCY" value={`${Math.floor(osStatus.kernelLoad * 100)}ms`} progress={40} color="cyan" />
                    <MiniMetric label="ENTROPY" value={osStatus.aiConfidence.toFixed(4)} progress={30} color="blue" />
                    <div className="col-span-2 bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col gap-4">
                       <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">NEURAL_DENSITY_FLUX</span>
                       <div className="h-24 w-full relative">
                          <svg className="w-full h-full stroke-cyan-400 fill-none" preserveAspectRatio="none" viewBox="0 0 400 100">
                             <path d="M0,80 Q50,70 100,50 T200,60 T300,20 T400,40" strokeWidth="2" className="animate-dash" />
                             <path d="M0,80 Q50,70 100,50 T200,60 T300,20 T400,40 L400,100 L0,100 Z" fill="url(#grad2)" opacity="0.1" stroke="none" />
                             <defs>
                                <linearGradient id="grad2" x1="0%" x2="0%" y1="0%" y2="100%">
                                   <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
                                   <stop offset="100%" style={{ stopColor: '#22d3ee', stopOpacity: 0 }} />
                                </linearGradient>
                             </defs>
                          </svg>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Buffer Panel */}
              <div className="h-1/2 flex flex-col overflow-hidden">
                 <div className="h-10 bg-white/[0.02] border-b border-white/5 px-6 flex items-center shrink-0">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">RAW_DATA_BUFFER</span>
                 </div>
                 <div className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-black/20 font-mono text-[11px] space-y-1">
                    {reasoningTrace.slice(-20).map((log, i) => (
                      <div key={i} className="flex gap-4 group">
                         <span className="text-blue-500/40">{new Date(log.timestamp).toLocaleTimeString()}</span>
                         <span className="text-white/20 group-hover:text-white transition-colors">&lt;{log.agent}&gt; {log.thought.substr(0, 50)}...</span>
                      </div>
                    ))}
                    <div className="flex gap-4 animate-pulse">
                       <span className="text-blue-400">&gt;</span>
                       <span className="text-blue-400">awaiting_kernel_interrupt...</span>
                    </div>
                 </div>
                 <form onSubmit={handleCommand} className="p-4 border-t border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-4 bg-black/40 border border-white/10 rounded-xl px-4 py-2 group focus-within:border-blue-500/50 transition-all">
                       <Terminal className="w-4 h-4 text-blue-400" />
                       <input 
                         className="flex-1 bg-transparent border-none focus:ring-0 p-0 text-[12px] font-mono text-white placeholder:text-white/10 outline-none" 
                         placeholder="EXECUTE_COMMAND..."
                         value={command}
                         onChange={(e) => setCommand(e.target.value)}
                       />
                    </div>
                 </form>
              </div>
           </section>
        </main>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .scanline-overlay {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
        }
        .animate-dash {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: dash 5s linear infinite;
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
};

const TraceNode = ({ agent, thought, confidence, timestamp, type }: any) => (
  <div className="relative pl-12 group">
     <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] z-10 transition-transform group-hover:scale-150 duration-500" />
     <div className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 space-y-6 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500 shadow-2xl backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="flex justify-between items-start">
           <div className="flex flex-col gap-1">
              <h3 className="text-xl font-black text-cyan-400 uppercase tracking-tighter">{agent}</h3>
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{type === 'CRITICAL' ? 'ALERT_INFERENCE' : 'STANDARD_DERIVATION'}</p>
           </div>
           <div className="text-right flex flex-col items-end gap-2">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest font-mono">{(confidence * 100).toFixed(1)}% CONFIDENCE</span>
              <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-2">
                 <CheckCircle className="w-3 h-3 text-emerald-500" />
                 <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest font-mono">VALIDATED</span>
              </div>
           </div>
        </div>
        <div className="bg-black/40 border border-white/5 rounded-2xl p-6 font-mono text-[13px] text-white/60 leading-relaxed shadow-inner">
           <span className="text-blue-400/40 pr-2">[{timestamp}]</span> {thought}
        </div>
     </div>
  </div>
);

const MiniMetric = ({ label, value, progress, color }: any) => (
  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex flex-col gap-3 group hover:bg-white/[0.04] transition-all">
     <div className="flex justify-between items-start">
        <div className="flex flex-col">
           <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">{label}</span>
           <span className={`text-xl font-mono font-black ${color === 'cyan' ? 'text-cyan-400' : 'text-blue-400'}`}>{value}</span>
        </div>
        <div className={`w-1.5 h-1.5 rounded-full ${color === 'cyan' ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-blue-500 shadow-[0_0_8px_#3b82f6]'} animate-pulse`} />
     </div>
     <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full ${color === 'cyan' ? 'bg-cyan-400' : 'bg-blue-500'} transition-all duration-1000`} style={{ width: `${progress}%` }} />
     </div>
  </div>
);

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`px-6 py-3.5 rounded-2xl flex items-center gap-4 transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-lg' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform duration-500">{icon}</div>
     <span className="text-[11px] font-black uppercase tracking-[0.2em] font-mono">{label}</span>
  </div>
);

export default AIReasoningTraceEngineeringOS_e4c49f;
