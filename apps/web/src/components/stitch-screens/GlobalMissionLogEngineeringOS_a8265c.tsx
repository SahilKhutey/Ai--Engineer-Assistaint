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
  ArrowLeftRight,
  Binary,
  CheckCircle,
  Factory,
  Info,
  Share2,
  Download,
  Filter,
  Search} from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * GlobalMissionLog v3.5 (Phase 55 Hardened)
 * 
 * High-fidelity, real-time mission log for the Antigravity Engineering OS.
 * Intercepts reasoning traces and system events into a unified chronological truth stream.
 */
const GlobalMissionLogEngineeringOS_a8265c = () => {
  const { 
    reasoningTrace, 
    workflowState, 
    osStatus,
    pushEvent,
    addNotification 
  } = useEngineeringStore();

  const [filter, setFilter] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);

  const filteredLogs = useMemo(() => {
    return reasoningTrace
      .filter(log => 
        log.thought.toLowerCase().includes(filter.toLowerCase()) || 
        log.agent.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => b.timestamp - a.timestamp);
  }, [reasoningTrace, filter]);

  const stats = {
    activeOps: workflowState.status !== 'IDLE' ? 1 : 0,
    verificationRate: (osStatus.aiConfidence * 100).toFixed(1),
    simCount: workflowState.progress > 0 ? 1 : 0,
    criticalOverrides: 0
  };

  const handleExport = () => {
    addNotification?.({
      title: 'LOG_EXPORT_INITIATED',
      message: 'Synthesizing encrypted mission log archive...',
      type: 'INFO',
      domain: 'COGNITION'
    });
  };

  const handleSimulateTrace = async () => {
    if (isSimulating) return;
    setIsSimulating(true);
    
    addNotification?.({
      title: 'SIMULATION_STARTED',
      message: 'Injecting synthetic reasoning traces into mission log...',
      type: 'INFO',
      domain: 'COGNITION'
    });

    const traces = [
      { agent: 'Kernel_AI', thought: 'Initializing sub-orbital trajectory optimization.' },
      { agent: 'Physics_Solver', thought: 'Calculating drag coefficient at Mach 4.2.' },
      { agent: 'Safety_Protocol', thought: 'Thermal shield status verified: NOMINAL.' },
      { agent: 'Engineering_OS', thought: 'Synchronizing all active digital twins.' }
    ];

    for (const trace of traces) {
      await new Promise(r => setTimeout(r, 1500));
      pushEvent?.('REASONING_STEP', { ...trace, timestamp: Date.now() });
    }

    setIsSimulating(false);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP CONTROL BAR */}
      <header className="h-16 px-8 border-b border-white/5 bg-black/40 backdrop-blur-md flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3">
              <Factory className="w-5 h-5 text-[#adc6ff]" />
              <span className="text-[11px] font-black text-[#adc6ff] uppercase tracking-[0.4em] font-mono">KINETIC_OS // MISSION_LOG_v3.5</span>
           </div>
        </div>
        <div className="flex items-center gap-6">
           <button 
             onClick={handleSimulateTrace}
             disabled={isSimulating}
             className={`flex items-center gap-2 px-6 py-2 border ${isSimulating ? 'border-blue-500/50 text-blue-400' : 'border-white/10 text-white/40 hover:text-white hover:border-white/20'} rounded-full transition-all text-[10px] font-black uppercase tracking-widest font-mono`}
           >
              <Binary className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
              {isSimulating ? 'ORCHESTRATING_TRACE...' : 'SIMULATE_TRACE'}
           </button>
           <div className="px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center gap-2 shadow-2xl">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest font-mono">PHASE: {workflowState.status}</span>
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SECONDARY NAV */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 shrink-0">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">LOG_FILTERS</span>
              <nav className="flex flex-col gap-1">
                 <SideNavItem icon={<Activity />} label="Telemetry" />
                 <SideNavItem icon={<Share2 />} label="Kinematics" />
                 <SideNavItem icon={<Brain />} label="AI_Stability" />
                 <SideNavItem icon={<Terminal />} label="Command_Log" active />
                 <SideNavItem icon={<ArrowLeftRight />} label="System_Sync" />
              </nav>
           </div>

           <div className="mt-auto bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col gap-3">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">REALTIME_VERIFICATION</span>
                 <div className="text-2xl font-mono font-black text-emerald-400">{stats.verificationRate}%</div>
                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-emerald-500 shadow-[0_0_15px_#10b981] transition-all duration-1000" style={{ width: `${stats.verificationRate}%` }} />
                 </div>
              </div>
           </div>
        </aside>

        {/* 3. MAIN LOG AREA */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
           <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
           
           {/* Filter Toolbar */}
           <div className="h-20 border-b border-white/5 px-8 flex items-center justify-between bg-white/[0.02] backdrop-blur-md shrink-0">
              <div className="relative flex-1 max-w-2xl group">
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-hover:text-blue-400 transition-colors" />
                 <input 
                    className="w-full bg-black/40 border border-white/5 px-16 py-3.5 rounded-2xl font-mono text-[14px] text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-white/10 outline-none shadow-inner" 
                    placeholder="Filter by agent, action, or symbolic hash..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                 />
              </div>
              <div className="flex items-center gap-4">
                 <button className="flex items-center gap-2 px-6 py-2.5 border border-white/5 rounded-xl hover:bg-white/5 transition-all text-white/40 hover:text-white">
                    <Filter className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest font-mono">SORT: NEWEST</span>
                 </button>
                 <button 
                    onClick={handleExport}
                    className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                 >
                    <Download className="w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest font-mono">EXPORT_LOG</span>
                 </button>
              </div>
           </div>

           {/* Stats Ribbon */}
           <div className="grid grid-cols-4 border-b border-white/5 bg-black/20 shrink-0">
              <StatItem label="ACTIVE_OPS" value={stats.activeOps.toString().padStart(2, '0')} color="blue" />
              <StatItem label="AI_VERIFICATION" value={`${stats.verificationRate}%`} color="emerald" />
              <StatItem label="SIM_PROGRESS" value={`${(workflowState.progress * 100).toFixed(1)}%`} color="orange" />
              <StatItem label="CRITICAL_ALERTS" value={stats.criticalOverrides.toString().padStart(2, '0')} color="rose" />
           </div>

           {/* Scrollable Log Stream */}
           <div className="flex-1 overflow-y-auto custom-scrollbar p-8 flex flex-col gap-4">
              {/* Header Row */}
              <div className="grid grid-cols-12 gap-6 px-6 py-3 text-[10px] font-black text-white/20 uppercase tracking-[0.3em] font-mono border-b border-white/5 mb-4">
                 <div className="col-span-1 flex justify-center">STATUS</div>
                 <div className="col-span-2">TIMESTAMP</div>
                 <div className="col-span-2">AGENT_ID</div>
                 <div className="col-span-5">ACTION_TRACE</div>
                 <div className="col-span-2">SYMBOLIC_HASH</div>
              </div>

              {filteredLogs.length > 0 ? (
                filteredLogs.map((log, i) => (
                   <LogEntry 
                      key={i}
                      status="SUCCESS"
                      timestamp={new Date(log.timestamp).toISOString().replace('T', ' ').substr(0, 23)}
                      agent={log.agent}
                      action={log.thought}
                      hash={`0x${Math.random().toString(16).substr(2, 8).toUpperCase()}`}
                   />
                ))
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center gap-6 text-white/10 py-32 animate-pulse">
                   <Terminal className="w-16 h-16 opacity-10" />
                   <span className="text-[12px] font-black uppercase tracking-[0.5em]">Waiting for kernel traces...</span>
                </div>
              )}
           </div>
        </main>

        {/* 4. VISUALIZER PANEL */}
        <aside className="w-80 border-l border-white/5 bg-black/40 backdrop-blur-3xl p-8 flex flex-col gap-8 shrink-0 overflow-y-auto custom-scrollbar">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">LOCUS_VISUALIZER</span>
              <div className="aspect-square bg-black/40 border border-white/5 rounded-3xl overflow-hidden relative shadow-2xl group cursor-crosshair">
                 <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBkSmS-kWxQTaPWo4B_gehhvlcH0yayhvVSzXkhhpGWfS84a9ebiryHNU7fLsMNyeiHAZWsU2t-fMcChzehdHJwIfMjsrFdnkYdS7-sjjfBA8TEHb0LihjWVg0Jq8HgFt4oBFxTUWN4w-qhhlaEzQtiaXHX-OC8_LpXoOc9bjBRVI9uosqPYheA0bNrZPSTCXQzv19VllRz4FVX2tcYQ_3j2pBj3oskhMn3OEiz6lG_rj-neyi-5_FYSr3EMqt1FtHXePJDw0UrIsQM" className="w-full h-full object-cover opacity-20 grayscale transition-all duration-1000 group-hover:scale-110 group-hover:opacity-40" />
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                 <div className="absolute top-4 left-4 px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded text-[9px] font-mono text-blue-400">NODE_MAP_v3.2</div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-32 h-32 border border-blue-500/20 rounded-full animate-ping" />
                 </div>
              </div>
           </div>

           <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-5">
              <div className="flex items-center gap-3">
                 <Info className="w-4 h-4 text-blue-400" />
                 <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest font-mono">OPERATIONAL_NOTE</span>
              </div>
              <p className="text-[12px] leading-relaxed text-white/40 font-mono italic">
                 "Current decision throughput is exceeding baseline by 22%. AI verification delay estimated at <span className="text-blue-400">4ms</span>. System remains in green status."
              </p>
           </div>
        </aside>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(173, 198, 255, 0.1) 1px, transparent 1px);
          background-size: 24px 24px;
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

const StatItem = ({ label, value, color }: any) => {
  const colors: any = {
    blue: 'text-blue-400',
    emerald: 'text-emerald-400',
    orange: 'text-orange-400',
    rose: 'text-rose-400'
  };
  return (
    <div className="px-8 py-6 flex flex-col gap-1 border-r border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors cursor-default">
       <span className="text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">{label}</span>
       <span className={`text-2xl font-mono font-black ${colors[color]}`}>{value}</span>
    </div>
  );
};

const LogEntry = ({ status, timestamp, agent, action, hash }: any) => (
  <div className="grid grid-cols-12 gap-6 items-center bg-white/[0.02] border border-white/5 p-5 rounded-2xl hover:bg-white/[0.04] hover:border-blue-500/30 transition-all group cursor-pointer relative overflow-hidden">
     <div className="absolute inset-y-0 left-0 w-1 bg-transparent group-hover:bg-blue-500 transition-colors" />
     <div className="col-span-1 flex justify-center">
        <div className={`w-2 h-2 rounded-full ${status === 'SUCCESS' ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-rose-500 shadow-[0_0_10px_#f43f5e]'} animate-pulse`} />
     </div>
     <div className="col-span-2 text-[11px] font-mono text-white/40">{timestamp}</div>
     <div className="col-span-2 text-[11px] font-black text-blue-400/70 font-mono uppercase tracking-widest truncate">{agent}</div>
     <div className="col-span-5 flex flex-col gap-1">
        <span className="text-[13px] font-bold text-white/80 group-hover:text-white transition-colors">AI_INSIGHT: {action.split(':')[0] || 'REASONING_STEP'}</span>
        <span className="text-[11px] text-white/40 leading-relaxed font-mono truncate">{action.includes(':') ? action.split(':')[1] : action}</span>
     </div>
     <div className="col-span-2 flex items-center justify-between">
        <span className="text-[10px] font-mono text-white/20 truncate pr-4">{hash}</span>
        <CheckCircle className="w-4 h-4 text-white/10 group-hover:text-emerald-400 transition-colors" />
     </div>
  </div>
);

export default GlobalMissionLogEngineeringOS_a8265c;
