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
  AlertTriangle,
  Database,
  GitBranch,
  Share2,
  TrendingUp,
  BookOpen,
  CornerDownLeft,
  FileText,
  HelpCircle,
  RefreshCw,
  TrendingDown} from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * GlobalKnowledgeAnalytics v3.5 (Phase 55 Hardened)
 * 
 * Advanced BarChart3 and semantic relationship visualization for the Knowledge Base.
 * Provides high-level insights into entropy gradients and neural capacity.
 */
const GlobalKnowledgeBaseEngineeringOS_1cde6e = () => {
  const { 
    simulationGraph, 
    distributedCompute, 
    osStatus,
    reasoningTrace,
    addNotification,
    setScreen
  } = useEngineeringStore();

  const [searchFocused, setSearchFocused] = useState(false);
  const [query, setQuery] = useState('');

  const suggestions = [
    { id: 'PX-442', term: 'Metamaterial Conductivity', icon: <Zap className="text-secondary" /> },
    { id: 'PX-901', term: 'Quantum Entanglement Decay', icon: <FlaskConical className="text-primary" /> },
  ];

  const handleInitQuery = () => {
    addNotification?.({
      title: 'ANALYTICS_QUERY_INITIATED',
      message: 'Traversing deep semantic relationships...',
      type: 'INFO',
      domain: 'COGNITION'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-8 border-b border-white/5 bg-black/40 backdrop-blur-md flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-6">
           <span className="text-xl font-black text-white uppercase tracking-tighter">KNOWLEDGE_BASE_OS</span>
           <div className="h-4 w-px bg-white/10" />
           <div className="flex gap-6">
              <span className="text-[10px] font-black text-blue-400 border-b border-blue-400 cursor-pointer py-1 uppercase tracking-widest font-mono">DASHBOARD</span>
              <span className="text-[10px] font-black text-white/20 hover:text-white cursor-pointer py-1 uppercase tracking-widest font-mono transition-colors">TELEMETRY</span>
           </div>
        </div>
        <div className="flex items-center gap-6">
           <button className="text-white/20 hover:text-white transition-colors"><BarChart3 className="w-5 h-5" /></button>
           <button className="text-white/20 hover:text-white transition-colors"><Share2 className="w-5 h-5" /></button>
           <button className="text-white/20 hover:text-white transition-colors"><Settings className="w-5 h-5" /></button>
           <div className="w-8 h-8 rounded-lg border border-white/10 overflow-hidden shadow-2xl">
              <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBPoYUQRBqieoq0clF1xwVprji6lFaac3ArUCGbGTyt32ciP7nJ51GIlpiZd1o9RDSPpZEM7Zhx6vBWPcV8P0eiu3A8c0eZGDS6nU7gg1hWNcnL78L4fonUCs8RcIz11VzlADMg-nQueW1KwVI4O4AHbrqgOrCNezySm8TzxeuJ6obbYLoYxNx_64MRALYz3320AT3CKDX26HaUyueupVOY1qYJJhAu6BU-ZhFyFYNY_kKsUAKA_nKZkVi63QVdz0p-UbKQoBmfrGCs" className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDEBAR */}
        <aside className="w-[280px] border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 shrink-0">
           <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">INTEL_LAYER_V3.5</span>
                 <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest">Active Session: 04:22:11</span>
              </div>
              <nav className="flex flex-col gap-1">
                 <SideNavItem icon={<Database />} label="Repository" active />
                 <SideNavItem icon={<BookOpen />} label="Research" />
                 <SideNavItem icon={<History />} label="History" />
                 <SideNavItem icon={<GitBranch />} label="Graph" />
              </nav>
           </div>

           <div className="mt-auto flex flex-col gap-6">
              <button 
                onClick={handleInitQuery}
                className="w-full bg-blue-600 text-white py-4 font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
              >
                 NEW_QUERY
              </button>
              <div className="flex flex-col gap-4">
                 <a href="#" className="flex items-center gap-4 text-white/20 hover:text-white transition-all">
                    <FileText className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest font-mono">Documentation</span>
                 </a>
                 <a href="#" className="flex items-center gap-4 text-white/20 hover:text-white transition-all">
                    <HelpCircle className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest font-mono">Support</span>
                 </a>
              </div>
           </div>
        </aside>

        {/* 3. MAIN BarChart3 SPACE */}
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar p-8 gap-8 relative bg-black/20">
           <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
           
           {/* Neural Search Bar */}
           <section className="max-w-4xl mx-auto w-full relative z-[100]">
              <div className={`p-[1px] rounded-2xl transition-all duration-500 ${searchFocused ? 'bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 shadow-2xl shadow-blue-500/20' : 'bg-white/5'}`}>
                 <div className="flex items-center bg-black/80 backdrop-blur-3xl rounded-2xl p-4 gap-4">
                    <Brain className="text-blue-400 w-6 h-6" />
                    <input 
                       onFocus={() => setSearchFocused(true)}
                       onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                       onChange={(e) => setQuery(e.target.value)}
                       className="flex-1 bg-transparent border-none focus:ring-0 text-[14px] font-mono text-white placeholder:text-white/10 outline-none" 
                       placeholder="Neural Search: Enter physics terms, project IDs, or query strings..." 
                    />
                    <div className="flex gap-2">
                       <kbd className="px-2 py-1 rounded bg-white/5 text-[10px] text-white/40 border border-white/5 font-mono uppercase tracking-widest">⌘</kbd>
                       <kbd className="px-2 py-1 rounded bg-white/5 text-[10px] text-white/40 border border-white/5 font-mono uppercase tracking-widest">K</kbd>
                    </div>
                 </div>
              </div>

              {/* Suggestions Popover */}
              {searchFocused && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-black/90 backdrop-blur-3xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                   <div className="p-4 border-b border-white/5 bg-white/[0.02]">
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">AUTO_SUGGESTIONS</span>
                   </div>
                   <div className="p-2">
                      {suggestions.map((s, i) => (
                        <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-xl cursor-pointer group transition-all">
                           <div className="flex items-center gap-4">
                              {s.icon}
                              <span className="text-[13px] font-mono text-white/80 group-hover:text-white transition-colors">{s.term} <span className="text-white/10 ml-2">#{s.id}</span></span>
                           </div>
                           <CornerDownLeft className="text-white/10 opacity-0 group-hover:opacity-100 transition-opacity w-4 h-4" />
                        </div>
                      ))}
                   </div>
                </div>
              )}
           </section>

           {/* Intelligence Bento Grid */}
           <section className="grid grid-cols-12 gap-6">
              {/* Recent Queries */}
              <div className="col-span-12 lg:col-span-8 bg-black/40 border border-white/5 rounded-[40px] flex flex-col overflow-hidden shadow-2xl backdrop-blur-3xl group">
                 <header className="h-10 flex items-center justify-between px-8 bg-white/[0.02] border-b border-white/5">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">RECENT_QUERIES</span>
                    <div className="flex gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                       <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    </div>
                 </header>
                 <div className="flex-1 overflow-x-auto">
                    <table className="w-full text-left font-mono text-[12px]">
                       <thead className="bg-white/[0.01] text-white/20 border-b border-white/5">
                          <tr>
                             <th className="p-6 text-[10px] font-black uppercase tracking-widest">ID</th>
                             <th className="p-6 text-[10px] font-black uppercase tracking-widest">TERM</th>
                             <th className="p-6 text-[10px] font-black uppercase tracking-widest">STATUS</th>
                             <th className="p-6 text-[10px] font-black uppercase tracking-widest text-right">NODES</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-white/5">
                          <tr className="hover:bg-white/[0.02] transition-colors cursor-pointer group">
                             <td className="p-6 text-cyan-400 font-bold">#PX-772</td>
                             <td className="p-6 text-white/80 group-hover:text-white">Sub-atomic lattice vibrations</td>
                             <td className="p-6">
                                <div className="flex items-center gap-3">
                                   <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
                                   <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">LIVE</span>
                                </div>
                             </td>
                             <td className="p-6 text-right text-white/40 font-black">1,244</td>
                          </tr>
                          <tr className="hover:bg-white/[0.02] transition-colors cursor-pointer group">
                             <td className="p-6 text-cyan-400 font-bold">#PX-119</td>
                             <td className="p-6 text-white/80 group-hover:text-white">Higgs Boson Field Interaction</td>
                             <td className="p-6">
                                <div className="flex items-center gap-3">
                                   <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                                   <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">CACHED</span>
                                </div>
                             </td>
                             <td className="p-6 text-right text-white/40 font-black">8,901</td>
                          </tr>
                          <tr className="hover:bg-white/[0.02] transition-colors cursor-pointer group">
                             <td className="p-6 text-cyan-400 font-bold">#PX-044</td>
                             <td className="p-6 text-white/80 group-hover:text-white">Dark Matter Flux Patterns</td>
                             <td className="p-6">
                                <div className="flex items-center gap-3">
                                   <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316] animate-pulse" />
                                   <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">PENDING</span>
                                </div>
                             </td>
                             <td className="p-6 text-right text-white/40 font-black">442</td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>

              {/* Research Threads */}
              <div className="col-span-12 lg:col-span-4 bg-black/40 border border-white/5 rounded-[40px] flex flex-col overflow-hidden shadow-2xl backdrop-blur-3xl group">
                 <header className="h-10 flex items-center justify-between px-8 bg-white/[0.02] border-b border-white/5">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">RESEARCH_THREADS</span>
                    <RefreshCw className="w-4 h-4 text-white/20 group-hover:animate-spin duration-1000" />
                 </header>
                 <div className="p-8 space-y-6 flex-1">
                    <ResearchCard title="Metamaterial Conductivity" version="V4.2" progress={78.2} color="cyan" />
                    <ResearchCard title="Neutrino Oscillation" version="V1.0" progress={24.5} color="blue" />
                 </div>
              </div>

              {/* Chart Areas */}
              <div className="col-span-12 lg:col-span-6 bg-black/40 border border-white/5 rounded-[40px] flex flex-col h-[320px] shadow-2xl backdrop-blur-3xl overflow-hidden group">
                 <header className="h-10 flex items-center justify-between px-8 bg-white/[0.02] border-b border-white/5">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">KNOWLEDGE_GRAPH_GROWTH</span>
                    <div className="flex gap-6 text-[9px] font-black text-white/20 uppercase tracking-widest">
                       <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> NODES</div>
                       <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> EDGES</div>
                    </div>
                 </header>
                 <div className="flex-1 p-8 relative flex items-end gap-2 group-hover:gap-3 transition-all">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="flex-1 bg-blue-500/20 rounded-t-sm transition-all duration-1000 group-hover:bg-blue-500/40 relative" style={{ height: `${Math.random() * 80 + 20}%` }}>
                         <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
                      </div>
                    ))}
                 </div>
              </div>

              <div className="col-span-12 lg:col-span-6 bg-black/40 border border-white/5 rounded-[40px] flex flex-col h-[320px] shadow-2xl backdrop-blur-3xl overflow-hidden group">
                 <header className="h-10 flex items-center justify-between px-8 bg-white/[0.02] border-b border-white/5">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_INSIGHTS</span>
                    <Zap className="w-4 h-4 text-blue-400/40" />
                 </header>
                 <div className="p-8 grid grid-cols-2 gap-8 h-full">
                    <div className="flex flex-col justify-center gap-2">
                       <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">CUMULATIVE ENTROPY</span>
                       <span className="text-3xl font-mono font-black text-blue-400 uppercase tracking-tighter">0.0242 ΔE</span>
                       <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-mono font-black uppercase tracking-widest">
                          <TrendingDown className="w-4 h-4" /> -4.2% FROM PEAK
                       </div>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                       <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">NEURAL LOAD</span>
                       <span className="text-3xl font-mono font-black text-cyan-400 uppercase tracking-tighter">62.1 TFLOP/s</span>
                       <div className="flex items-center gap-2 text-[10px] text-blue-400 font-mono font-black uppercase tracking-widest">
                          <TrendingUp className="w-4 h-4" /> +1.8% SYSTEM AVG
                       </div>
                    </div>
                    <div className="col-span-2 border-t border-white/5 pt-6">
                       <div className="flex items-start gap-6">
                          <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-full">
                             <AlertTriangle className="w-5 h-5 text-rose-500" />
                          </div>
                          <div className="flex flex-col gap-1">
                             <div className="text-[10px] font-black text-rose-500 uppercase tracking-widest font-mono">ANOMALY_DETECTED</div>
                             <p className="text-[12px] leading-tight text-white/40 font-mono italic">Unusual node clustering detected in #SEC-9-GAMMA sector. Manual verification recommended for metadata integrity.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="h-8 border-t border-white/5 bg-black/40 backdrop-blur-md px-8 flex items-center justify-between shrink-0">
         <div className="flex gap-8 items-center">
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
               <span className="text-[10px] font-black text-white/40 uppercase tracking-widest font-mono">System Nominal</span>
            </div>
            <div className="h-3 w-px bg-white/10" />
            <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">LATENCY: {Math.floor(osStatus.kernelLoad * 100)}ms</div>
            <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest">UPTIME: 99.999%</div>
         </div>
         <div className="text-[9px] font-black text-blue-400/40 uppercase tracking-[0.4em] font-mono">INTEL_V4_SECURE_KERNEL</div>
      </footer>

      {/* Floating Action Button */}
      <button 
        onClick={handleInitQuery}
        className="fixed bottom-12 right-12 w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-600/40 hover:scale-110 active:scale-90 transition-all z-[150]"
      >
         <Plus className="w-8 h-8" />
      </button>

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
      `}</style>
    </div>
  );
};

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`px-6 py-3.5 rounded-2xl flex items-center gap-4 transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-lg' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform duration-500">{icon}</div>
     <span className="text-[11px] font-black uppercase tracking-[0.2em] font-mono">{label}</span>
  </div>
);

const ResearchCard = ({ title, version, progress, color }: any) => (
  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4 hover:bg-white/[0.04] transition-all cursor-pointer group">
     <div className="flex justify-between items-start">
        <span className="text-[13px] font-bold text-white/80 group-hover:text-white transition-colors uppercase tracking-tight font-mono">{title}</span>
        <span className="px-2 py-0.5 bg-white/5 text-[9px] font-black text-white/40 border border-white/10 rounded uppercase tracking-widest">{version}</span>
     </div>
     <div className="space-y-2">
        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden shadow-inner">
           <div className={`h-full ${color === 'cyan' ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'bg-blue-500 shadow-[0_0_10px_#3b82f6]'} transition-all duration-1000`} style={{ width: `${progress}%` }} />
        </div>
        <div className="flex justify-between text-[10px] font-mono font-black text-white/20 uppercase tracking-widest">
           <span>SIMULATION PROGRESS</span>
           <span className="text-white/40">{progress}%</span>
        </div>
     </div>
  </div>
);

export default GlobalKnowledgeBaseEngineeringOS_1cde6e;
