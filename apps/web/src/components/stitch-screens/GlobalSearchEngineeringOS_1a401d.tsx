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
  Fingerprint,
  Settings2,
  Thermometer,
  Clock,
  ExternalLink,
  FileText,
  Key,
  Search,
  ShieldCheck} from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';
import indexData from './index.json';

/**
 * GlobalSearch v3.5 (Phase 55 Hardened)
 * 
 * Semantic intelligence lookup for the Antigravity Engineering OS.
 * Searches across all engineering domains, simulation datasets, and design patterns.
 */
const GlobalSearchEngineeringOS_1a401d = () => {
  const { 
    setScreen, 
    reasoningTrace, 
    simulationGraph, 
    osStatus,
    addNotification 
  } = useEngineeringStore();

  const [query, setQuery] = useState('');
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  const searchResults = useMemo(() => {
    if (!query && !activeDomain) return indexData.slice(0, 5);
    
    return indexData.filter(screen => {
      const matchesQuery = screen.title.toLowerCase().includes(query.toLowerCase());
      const matchesDomain = activeDomain ? screen.title.toLowerCase().includes(activeDomain.toLowerCase()) : true;
      return matchesQuery && matchesDomain;
    }).slice(0, 10);
  }, [query, activeDomain]);

  const recentSims = useMemo(() => {
    return simulationGraph.nodes.map(node => ({
      id: node.id,
      title: `${node.type}_RUN_${node.id.split('-')[1] || '001'}`,
      timestamp: '2024-05-24 14:30:11',
      status: node.status,
      confidence: 0.984
    })).slice(0, 3);
  }, [simulationGraph]);

  const handleInitEditor = () => {
    addNotification?.({
      title: 'EDITOR_INITIALIZED',
      message: '3D CAD Workspace materialized in secondary viewport.',
      type: 'INFO',
      domain: 'GEOMETRY'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP CONTROL BAR */}
      <header className="h-12 px-8 border-b border-white/5 bg-black/40 backdrop-blur-md flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] font-mono">QUANTUM_COMMAND_OS_v3.5</span>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
              <span className="text-[9px] font-black text-white/60 uppercase tracking-widest font-mono">SYS_ACTIVE</span>
           </div>
           <Settings2 className="w-4 h-4 text-white/20 hover:text-white cursor-pointer transition-colors" />
        </div>
      </header>

      <main className="flex-1 overflow-y-auto custom-scrollbar relative p-8 md:p-12">
         <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
         
         <div className="max-w-6xl mx-auto space-y-12 relative z-10">
            {/* Terminal Style Search Bar */}
            <section className="relative group">
               <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-[40px] opacity-0 group-focus-within:opacity-100 transition-opacity" />
               <div className="relative bg-black/60 border border-white/5 p-8 flex flex-col gap-6 rounded-[32px] shadow-2xl backdrop-blur-3xl group-hover:border-blue-500/20 transition-all">
                  <div className="flex justify-between items-center">
                     <span className="font-mono text-[10px] text-blue-400 flex items-center gap-2 uppercase tracking-[0.3em] font-black">
                        <Terminal className="w-4 h-4" /> SEMANTIC_ENGINE: ACTIVE
                     </span>
                     <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">MODE: HYBRID_DEEP_SEARCH</span>
                  </div>
                  <div className="flex items-center gap-6 bg-white/[0.02] rounded-2xl p-6 border border-white/5 group-focus-within:border-blue-500/40 transition-all">
                     <Search className="text-blue-400 w-6 h-6" />
                     <input 
                        className="w-full bg-transparent border-none focus:ring-0 text-2xl font-mono placeholder:text-white/5 text-white outline-none" 
                        placeholder="QUERY_SYSTEM: Execute semantic lookup..." 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                     />
                     <kbd className="hidden md:block font-mono text-[10px] bg-white/5 px-3 py-1 rounded-lg border border-white/10 text-white/40 uppercase tracking-widest">⌘ + K</kbd>
                  </div>
               </div>
            </section>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-3 items-center">
               <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mr-4">DOMAINS:</span>
               <FilterChip icon={<FlaskConical />} label="Physics" active={activeDomain === 'Physics'} onClick={() => setActiveDomain(activeDomain === 'Physics' ? null : 'Physics')} />
               <FilterChip icon={<Thermometer />} label="Thermal" active={activeDomain === 'Thermal'} onClick={() => setActiveDomain(activeDomain === 'Thermal' ? null : 'Thermal')} />
               <FilterChip icon={<Key />} label="Quantum" active={activeDomain === 'Quantum'} onClick={() => setActiveDomain(activeDomain === 'Quantum' ? null : 'Quantum')} />
               <FilterChip icon={<HardDrive />} label="Logic_Gates" active={activeDomain === 'Logic'} onClick={() => setActiveDomain(activeDomain === 'Logic' ? null : 'Logic')} />
            </div>

            {/* Search Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               {/* Left Column: Primary Results */}
               <div className="lg:col-span-8 space-y-12">
                  <section className="space-y-6">
                     <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                        <h2 className="text-[11px] font-black text-blue-400 tracking-[0.4em] uppercase">SYSTEM_INDEX_MATCHES</h2>
                        <span className="text-[9px] font-mono text-white/20 bg-white/5 px-2 py-0.5 rounded uppercase tracking-widest">{searchResults.length}_MATCHES</span>
                     </div>
                     <div className="grid grid-cols-1 gap-4">
                        {searchResults.map((screen) => (
                           <ResultCard 
                              key={screen.id} 
                              title={screen.title.replace('Engineering OS', '').trim()} 
                              id={screen.id}
                              timestamp="2024-05-24 14:30:11"
                              Globe={screen.title.split(' ')[0]}
                              onClick={() => setScreen(screen.id)}
                           />
                        ))}
                     </div>
                  </section>

                  <section className="space-y-6">
                     <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                        <h2 className="text-[11px] font-black text-blue-400 tracking-[0.4em] uppercase">AI_REASONING_LOGS</h2>
                        <span className="text-[9px] font-mono text-white/20 bg-white/5 px-2 py-0.5 rounded uppercase tracking-widest">RECENT</span>
                     </div>
                     <div className="bg-black/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                        <table className="w-full text-left border-collapse">
                           <thead>
                              <tr className="bg-white/[0.02] border-b border-white/5">
                                 <th className="p-4 px-6 text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">TIMESTAMP</th>
                                 <th className="p-4 px-6 text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">AGENT_ID</th>
                                 <th className="p-4 px-6 text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">ACTION_TYPE</th>
                                 <th className="p-4 px-6 text-[10px] font-black text-white/20 uppercase tracking-widest font-mono text-right">METRIC</th>
                              </tr>
                           </thead>
                           <tbody className="font-mono text-[11px]">
                              {reasoningTrace.slice(0, 5).map((log, i) => (
                                 <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                                    <td className="p-4 px-6 text-white/40">{new Date(log.timestamp).toLocaleTimeString()}</td>
                                    <td className="p-4 px-6 text-blue-400/60 font-black">{log.agent}</td>
                                    <td className="p-4 px-6 text-white/60 truncate max-w-[200px]">{log.thought}</td>
                                    <td className="p-4 px-6 text-right text-emerald-400">0.9992</td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </section>
               </div>

               {/* Right Column: Contextual Side Panels */}
               <div className="lg:col-span-4 space-y-12">
                  <section className="bg-black/40 border border-white/5 rounded-[40px] overflow-hidden flex flex-col shadow-2xl backdrop-blur-3xl group">
                     <div className="h-10 px-6 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">3D_ASSET_PREVIEW</span>
                        <div className="flex gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                           <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        </div>
                     </div>
                     <div className="aspect-square relative flex items-center justify-center p-8">
                        <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBkSmS-kWxQTaPWo4B_gehhvlcH0yayhvVSzXkhhpGWfS84a9ebiryHNU7fLsMNyeiHAZWsU2t-fMcChzehdHJwIfMjsrFdnkYdS7-sjjfBA8TEHb0LihjWVg0Jq8HgFt4oBFxTUWN4w-qhhlaEzQtiaXHX-OC8_LpXoOc9bjBRVI9uosqPYheA0bNrZPSTCXQzv19VllRz4FVX2tcYQ_3j2pBj3oskhMn3OEiz6lG_rj-neyi-5_FYSr3EMqt1FtHXePJDw0UrIsQM" className="w-full h-full object-contain opacity-20 grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                           <span className="font-mono text-[13px] font-black text-blue-400 uppercase">MANIFOLD_X_REV3.CAD</span>
                           <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest font-bold">LOD: 1.2M_POLYS</span>
                        </div>
                     </div>
                     <div className="p-6 bg-white/[0.02] border-t border-white/5">
                        <button 
                           onClick={handleInitEditor}
                           className="w-full py-4 bg-blue-600 text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                        >
                           <ExternalLink className="w-4 h-4" /> INIT_3D_EDITOR
                        </button>
                     </div>
                  </section>

                  <section className="bg-black/40 border border-white/5 p-8 rounded-[40px] space-y-6 shadow-2xl backdrop-blur-3xl">
                     <div className="flex justify-between items-center border-b border-white/5 pb-4">
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">REG_COMPLIANCE</span>
                        <ShieldCheck className="w-4 h-4 text-emerald-400/40" />
                     </div>
                     <div className="space-y-3">
                        <ComplianceRow label="ISO-27001_Q_EXT" status="ACTIVE_PROTOCOL" active />
                        <ComplianceRow label="NIST_CRYPTO_2024" status="VALIDATION_PENDING" />
                     </div>
                  </section>

                  <section className="bg-black/40 border border-white/5 p-8 rounded-[40px] space-y-6 shadow-2xl backdrop-blur-3xl">
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">LIVE_TELEMETRY</span>
                     <div className="space-y-6">
                        <TelemetryBar label="CORE_TEMP" value="2.44 K" progress={45} color="cyan" />
                        <TelemetryBar label="MEM_BUS" value="88%" progress={88} color="blue" />
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </main>

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

const FilterChip = ({ icon, label, active, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`px-5 py-2 rounded-full font-mono text-[11px] font-black uppercase tracking-widest flex items-center gap-3 transition-all ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30 shadow-lg' : 'bg-white/[0.04] text-white/40 border border-white/5 hover:bg-white/10'}`}
  >
     {React.cloneElement(icon, { className: 'w-4 h-4' })}
     {label}
  </button>
);

const ResultCard = ({ title, id, timestamp, Globe, onClick }: any) => (
  <div 
    onClick={onClick}
    className="bg-black/40 border border-white/5 hover:border-blue-500/30 transition-all p-6 rounded-3xl group relative overflow-hidden cursor-pointer shadow-xl"
  >
     <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
     <div className="flex justify-between items-start relative z-10">
        <div className="flex flex-col gap-3">
           <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{title}</h3>
           <div className="flex items-center gap-6 text-[10px] font-mono">
              <span className="text-white/20 flex items-center gap-2 uppercase tracking-widest">
                 <Clock className="w-3.5 h-3.5" /> {timestamp}
              </span>
              <span className="text-cyan-400/60 flex items-center gap-2 uppercase tracking-widest font-black">
                 <Fingerprint className="w-3.5 h-3.5" /> 0x{id.substr(0, 8).toUpperCase()}
              </span>
           </div>
        </div>
        <div className="flex flex-col items-end gap-2">
           <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono text-[9px] font-black px-3 py-1 rounded-lg uppercase tracking-widest">STABLE</span>
           <span className="font-mono text-[10px] text-white/20 font-bold uppercase tracking-widest">98.4%_CONF</span>
        </div>
     </div>
     <div className="mt-6 grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
        <div className="flex flex-col gap-1">
           <span className="text-[9px] font-black text-white/10 uppercase tracking-widest">Globe</span>
           <span className="font-mono text-[11px] text-white/60 font-bold uppercase tracking-widest">{Globe}</span>
        </div>
        <div className="flex flex-col gap-1">
           <span className="text-[9px] font-black text-white/10 uppercase tracking-widest">ENTROPY</span>
           <span className="font-mono text-[11px] text-white/60 font-bold uppercase tracking-widest">1.442_BITS</span>
        </div>
        <div className="flex flex-col gap-1">
           <span className="text-[9px] font-black text-white/10 uppercase tracking-widest">COMPUTE_LOAD</span>
           <div className="w-full bg-white/5 h-1.5 mt-2 rounded-full overflow-hidden shadow-inner">
              <div className="bg-blue-500 h-full shadow-[0_0_10px_#3b82f6]" style={{ width: '75%' }}></div>
           </div>
        </div>
     </div>
  </div>
);

const ComplianceRow = ({ label, status, active }: any) => (
  <div className={`p-4 bg-white/[0.02] border-l-2 flex justify-between items-center group cursor-pointer hover:bg-white/[0.04] transition-all rounded-r-xl ${active ? 'border-blue-500' : 'border-white/10'}`}>
     <div className="flex flex-col gap-1">
        <span className="font-mono text-[11px] font-black text-white/80 uppercase tracking-widest">{label}</span>
        <span className="font-mono text-[9px] text-white/20 font-bold uppercase tracking-widest">{status}</span>
     </div>
     <FileText className="w-4 h-4 text-white/10 group-hover:text-blue-400 transition-colors" />
  </div>
);

const TelemetryBar = ({ label, value, progress, color }: any) => {
  const colors: any = {
    cyan: 'bg-cyan-400 shadow-[#22d3ee]',
    blue: 'bg-blue-500 shadow-[#3b82f6]'
  };
  return (
    <div className="space-y-3">
       <div className="flex justify-between font-mono text-[10px] font-black tracking-widest">
          <span className="text-white/20 uppercase">{label}</span>
          <span className={`text-${color}-400`}>{value}</span>
       </div>
       <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden shadow-inner">
          <div className={`${colors[color]} h-full shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-all duration-1000`} style={{ width: `${progress}%` }}></div>
       </div>
    </div>
  );
};

export default GlobalSearchEngineeringOS_1a401d;
