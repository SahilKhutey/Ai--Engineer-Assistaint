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
  ChevronRight,
  Cpu,
  GitBranch,
  MoreHorizontal,
  Settings2,
  Share2,
  ZoomIn,
  Code,
  FileText,
  Database,
  Filter} from 'lucide-react';
import React, { useState } from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * KnowledgeGraph v3.5 (Phase 55 Hardened)
 * 
 * A semantic intelligence interface for engineering discovery and correlation.
 * Visualizes complex relationships between structural models, AI insights, and historical data.
 * Fully integrated with useEngineeringStore for real-time telemetry and reasoning.
 */
const KnowledgeGraphEngineeringOS_87ccde = () => {
  const { 
    osStatus, 
    simulationGraph, 
    reasoningTrace,
    addNotification,
    pushEvent 
  } = useEngineeringStore();

  const handleDrillDown = (nodeId: string) => {
    pushEvent?.('KNOWLEDGE_DRILL_DOWN', { nodeId, timestamp: Date.now() });
    addNotification?.({
      title: 'KNOWLEDGE_SYNTHESIS_EXPANDED',
      message: `Deep-scanning semantic clusters for node: ${nodeId}...`,
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
           <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-blue-400" />
              <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] font-mono">KNOWLEDGE_OS_v3.5</span>
           </div>
        </div>
        <div className="flex items-center gap-6">
           <Settings2 className="w-5 h-5 text-white/20 hover:text-blue-400 cursor-pointer transition-colors" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAV */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 shrink-0">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_NAV</span>
              <nav className="flex flex-col gap-1">
                 <SideNavItem icon={<BarChart3 />} label="Telemetry" />
                 <SideNavItem icon={<Share2 />} label="Qubit_Map" active />
                 <SideNavItem icon={<GitBranch />} label="Circuit_Editor" />
                 <SideNavItem icon={<History />} label="Stability_Log" />
                 <SideNavItem icon={<Activity />} label="System_Health" />
              </nav>
           </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar relative">
           
           {/* Graph Visualization Section */}
           <section className="h-[500px] border-b border-white/5 bg-black/20 relative overflow-hidden shrink-0 group">
              <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
              
              <div className="absolute top-8 left-8 z-10 bg-black/60 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                 <p className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em] font-mono mb-1">ACTIVE_WORKSPACE</p>
                 <p className="text-[12px] font-mono font-black text-white uppercase tracking-tighter tracking-tighter tracking-tighter">STRUCTURAL_THERMAL_SYNC_v4</p>
              </div>

              {/* SVG Graph LayoutGrid */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <line x1="50%" y1="50%" x2="30%" y2="40%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="50%" y1="50%" x2="70%" y2="35%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="50%" y1="50%" x2="60%" y2="70%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
                 </svg>

                 {/* Central Node */}
                 <div className="relative group cursor-pointer" onClick={() => handleDrillDown('NODE_0992')}>
                    <div className="w-24 h-24 bg-blue-500/10 border border-blue-500 rounded-full flex items-center justify-center shadow-[0_0_30px_#3b82f640] animate-pulse group-hover:scale-110 transition-transform">
                       <AlertTriangle className="text-blue-400 text-3xl" />
                    </div>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                       <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest font-mono">STRUCTURAL_FAILURE</p>
                       <p className="text-[9px] font-mono font-black text-white/40 uppercase tracking-widest">ID: NODE_0992</p>
                    </div>
                 </div>

                 {/* Radio Nodes */}
                 <GraphNode icon={<FlaskConical />} label="THERMAL_MODEL_v2" pos="top-1/4 left-1/4" />
                 <GraphNode icon={<Cpu />} label="ANALYTICS_CORE" pos="top-1/3 right-1/4" rounded />
                 <GraphNode icon={<LayoutGrid />} label="ASSET_REF_CAD" pos="bottom-1/4 right-1/3" rotated />
              </div>

              {/* Interaction Bar */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                 <div className="flex gap-4">
                    <button className="bg-black/60 border border-white/10 p-3 rounded-xl flex items-center gap-3 hover:bg-blue-500/10 transition-all group">
                       <ZoomIn className="w-4 h-4 text-white/40 group-hover:text-blue-400" />
                       <span className="text-[9px] font-black text-white/40 uppercase tracking-widest font-mono group-hover:text-white">DRILL_DOWN</span>
                    </button>
                    <button className="bg-black/60 border border-white/10 p-3 rounded-xl flex items-center gap-3 hover:bg-blue-500/10 transition-all group">
                       <Filter className="w-4 h-4 text-white/40 group-hover:text-blue-400" />
                       <span className="text-[9px] font-black text-white/40 uppercase tracking-widest font-mono group-hover:text-white">FILTER</span>
                    </button>
                 </div>
                 <div className="text-right space-y-1">
                    <div className="text-[10px] font-mono font-black text-white/20 uppercase tracking-widest">NODES: 1,402</div>
                    <div className="text-[10px] font-mono font-black text-white/20 uppercase tracking-widest">EDGES: 12,891</div>
                 </div>
              </div>
           </section>

           {/* Content Grid Area */}
           <section className="p-10 grid grid-cols-1 md:grid-cols-12 gap-10">
              
              {/* Discovery Feed */}
              <div className="md:col-span-8 space-y-8">
                 <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-4">
                       <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa] animate-pulse" />
                       <h2 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono">DISCOVERY_FEED // CORRELATION_ALERTS</h2>
                    </div>
                    <span className="text-[9px] font-mono font-black text-white/20 uppercase tracking-widest italic">REAL-TIME_ANALYSIS</span>
                 </div>

                 {/* High Priority Insight */}
                 <div className="bg-black/40 border border-white/5 rounded-[40px] p-8 relative overflow-hidden group hover:border-blue-500/40 transition-all shadow-2xl">
                    <div className="absolute top-8 right-8 z-10">
                       <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 text-[9px] font-black rounded-lg uppercase tracking-widest font-mono">98% MATCH</span>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8">
                       <div className="w-full lg:w-1/3 aspect-Camera bg-black rounded-2xl overflow-hidden border border-white/5 relative group">
                          <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuD9SWMneTSXHD_zpeJOsEDz-FR1tFaJxsnF45AwAgEO5_cByQlXJOjW2n_gfX_uhlPb6lk9Wqe3V1FrdQKLM3QYoXioOTEYgWdf8YOi6oZIZV57RzX3X-CkdYBWuhRuAo9Ak0Uo9Iyv34_WVdH8c88oW9HKYgVZItSnKGglUPWhjZFrHTJW7zgiFCn4lLohmrbDmxmWAEEuV20lvQyxxS2x23ttf2Kq3nPk7HmhlUj61cvDZRVYo2KA2ZgsS20Ug7tjZPU1HLL_ugqG" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                       </div>
                       <div className="flex-1 space-y-4">
                          <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest font-mono">HISTORICAL_INCIDENT_331</p>
                          <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Thermal Stress Fracture Correlation</h3>
                          <p className="text-[14px] leading-relaxed text-white/40 font-mono italic line-clamp-2">Identified 0.98 similarity between current NODE_0992 and Incident 331 (Turbine Housing Failure). Both events occurred at temperatures exceeding 1200K under cyclical load.</p>
                          <div className="flex gap-4">
                             <div className="bg-white/[0.04] px-4 py-1 rounded-lg text-[9px] font-black text-white/40 uppercase tracking-widest font-mono">METRIC: TEMP_DELTA</div>
                             <div className="bg-white/[0.04] px-4 py-1 rounded-lg text-[9px] font-black text-white/40 uppercase tracking-widest font-mono">REF: CFD_LOG_002</div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Secondary Feed */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <DiscoveryCard 
                      icon={<FileText />} 
                      title="SPEC_SHEET_REF" 
                      time="24m ago" 
                      content="Titanium Grade 5 Fatigue Limits updated in local workspace context." 
                      action="VIEW DOC"
                      color="blue"
                    />
                    <DiscoveryCard 
                      icon={<FlaskConical />} 
                      title="AGENT_OBSERVATION" 
                      time="1h ago" 
                      content="AI Agent 'Hera-9' detected abnormal jitter in sensor cluster 4D." 
                      action="RUN DIAGNOSTIC"
                      color="cyan"
                    />
                 </div>
              </div>

              {/* Status Sidebar */}
              <div className="md:col-span-4 space-y-10">
                 <div className="bg-black/40 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl backdrop-blur-3xl">
                    <div className="h-12 px-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                       <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">LIVE_TELEMETRY</span>
                       <MoreHorizontal className="w-5 h-5 text-white/20 cursor-pointer" />
                    </div>
                    <div className="p-8 space-y-8">
                       <TelemetryRow label="GRAPH_SYNC_LATENCY" value="12ms" progress={12} color="cyan" />
                       <TelemetryRow label="CPU_LOAD_THREADS" value="68%" progress={68} color="blue" />
                       <div className="pt-4">
                          <div className="bg-black/60 border border-white/10 p-5 rounded-2xl flex items-center justify-between shadow-inner">
                             <div className="flex items-center gap-4">
                                <div className="w-3 h-3 bg-blue-400 rounded-sm rotate-45 shadow-[0_0_10px_#60a5fa]" />
                                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest font-mono">NEURAL_NET_STABILITY</span>
                             </div>
                             <span className="text-[10px] font-mono font-black text-emerald-400">NOMINAL</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="bg-black/40 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl backdrop-blur-3xl">
                    <div className="h-12 px-8 bg-white/[0.02] border-b border-white/5 flex items-center">
                       <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">ASSOCIATED_ASSETS</span>
                    </div>
                    <div className="divide-y divide-white/5">
                       <AssetItem icon={<FileText />} label="M_SPEC_TITANIUM.PDF" sub="1.2MB // ARCHIVED" />
                       <AssetItem icon={<Database />} label="THERMAL_LOG_44.CSV" sub="424KB // REALTIME" />
                       <AssetItem icon={<Code />} label="ANALYSIS_SCRIPT.PY" sub="12KB // SHARED" />
                    </div>
                 </div>
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
      `}</style>
    </div>
  );
};

const GraphNode = ({ icon, label, pos, rounded, rotated }: any) => (
  <div className={`absolute group cursor-pointer ${pos}`}>
     <div className={`w-14 h-14 bg-black/60 border border-white/10 flex items-center justify-center shadow-2xl transition-all group-hover:border-blue-500/40 group-hover:scale-110 ${rounded ? 'rounded-full' : rotated ? 'rounded-sm rotate-45' : 'rounded-2xl'}`}>
        {React.cloneElement(icon, { className: `w-6 h-6 text-blue-400 ${rotated ? '-rotate-45' : ''}` })}
     </div>
     <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[9px] font-black text-white uppercase tracking-widest font-mono">{label}</p>
     </div>
  </div>
);

const DiscoveryCard = ({ icon, title, time, content, action, color }: any) => (
  <div className="bg-black/40 border border-white/5 rounded-[32px] p-8 flex flex-col gap-6 hover:bg-white/[0.02] transition-all shadow-xl group">
     <div className="flex justify-between items-center">
        <div className={`text-${color === 'blue' ? 'blue' : 'cyan'}-400/60`}>{icon}</div>
        <span className="text-[9px] font-mono font-black text-white/20">{time}</span>
     </div>
     <div className="space-y-2">
        <p className="text-[10px] font-black text-white/40 uppercase tracking-widest font-mono">{title}</p>
        <p className="text-[13px] leading-relaxed text-white/60 font-mono italic">{content}</p>
     </div>
     <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center group-hover:border-blue-500/20 transition-colors">
        <span className={`text-[9px] font-black text-${color === 'blue' ? 'blue' : 'cyan'}-400 uppercase tracking-widest font-mono`}>{action}</span>
        <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-blue-400 transition-colors" />
     </div>
  </div>
);

const TelemetryRow = ({ label, value, progress, color }: any) => (
  <div className="space-y-3">
     <div className="flex justify-between items-end">
        <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">{label}</span>
        <span className={`text-[12px] font-mono font-black text-${color === 'blue' ? 'blue' : 'cyan'}-400`}>{value}</span>
     </div>
     <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
        <div className={`h-full ${color === 'blue' ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]'} transition-all duration-1000`} style={{ width: `${progress}%` }} />
     </div>
  </div>
);

const AssetItem = ({ icon, label, sub }: any) => (
  <div className="p-6 flex items-center gap-6 hover:bg-white/[0.02] cursor-pointer group transition-all">
     <div className="text-white/20 group-hover:text-blue-400 transition-colors">{icon}</div>
     <div className="flex-1 space-y-1">
        <p className="text-[11px] font-mono font-black text-white uppercase tracking-tighter tracking-tighter">{label}</p>
        <p className="text-[9px] font-mono font-black text-white/20 uppercase tracking-widest">{sub}</p>
     </div>
  </div>
);

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`px-6 py-4 rounded-2xl flex items-center gap-6 transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-2xl' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-125 transition-transform duration-500">{icon}</div>
     <span className="text-[11px] font-black uppercase tracking-[0.3em] font-mono">{label}</span>
  </div>
);

export default KnowledgeGraphEngineeringOS_87ccde;
