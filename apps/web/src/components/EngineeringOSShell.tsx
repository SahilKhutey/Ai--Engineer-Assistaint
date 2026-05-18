'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Command, Box, Activity, Cpu, Zap, Database, 
  Shield, Settings, Terminal, Layout, Grid,
  Maximize2, Bell, Share2, Search, User,
  Circle, Globe, ChevronRight, Info, Eye,
  RefreshCw as RefreshIcon, Power, BoxSelect,
  Fingerprint, Clock, HardDrive, Network,
  Lock, Unlock, Smartphone, Share, Sparkles,
  Target, TrendingUp, Layers, ShieldCheck,
  AlertTriangle, Waves, BarChart3, Binary, Maximize
} from 'lucide-react';
import NotificationSystem from './cockpit/NotificationSystem';
import { useEngineeringStore } from '@/store/useEngineeringStore';
import indexData from './stitch-screens/index.json';
import { Search as SearchIcon, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';

/**
 * EngineeringOSShell v3.2 (Phase 55 Advanced - Sovereign Infrastructure Shell)
 * 
 * Master orchestration shell for the Sovereign Engineering Intelligence suite.
 * Features a high-density glassmorphic mission control layout with reality-linked 
 * telemetry bars and an integrated global cognition hub.
 * 
 * v3.2 Updates:
 * - Sub-picowatt residual observability
 * - Phase 55 Mission-Control design patterns
 * - Integrated Sovereign State synchronization
 * - High-density typography and micro-animations
 */
const EngineeringOSShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMapOpen, setMapOpen] = useState(true);
  const [search, setSearch] = useState('');
  const { osStatus, activeDomain, workflowState, multiversalSync, setDomain, setScreen, uiState, toggleSidebar } = useEngineeringStore();
  const { isSidebarOpen, activeScreenId } = uiState;

  const filteredScreens = useMemo(() => {
    const searchLower = search.toLowerCase();
    
    const domainKeywords: Record<string, string[]> = {
      'AEROSPACE': ['aerospace', 'orbital', 'flight', 'rotor', 'wing', 'satellite', 'command', 'cockpit'],
      'MATERIAL': ['material', 'structural', 'carbon', 'graphene', 'resource', 'math', 'mesh', 'stress'],
      'PROPULSION': ['propulsion', 'engine', 'reactor', 'fusion', 'fission', 'thrust', 'flow', 'fluid', 'thermal'],
      'SECURITY': ['security', 'shield', 'lock', 'cryptographic', 'identity', 'audit', 'fingerprint'],
      'QUANTUM': ['quantum', 'qubit', 'entanglement', 'symbolic', 'reasoning', 'cognition']
    };

    return indexData.filter(s => {
      const titleLower = s.title.toLowerCase();
      const matchesSearch = titleLower.includes(searchLower);
      
      const activeKeywords = domainKeywords[activeDomain as string];
      const matchesDomain = activeKeywords 
        ? activeKeywords.some(k => titleLower.includes(k))
        : true;

      return matchesSearch && matchesDomain;
    }).sort((a, b) => a.title.localeCompare(b.title));
  }, [search, activeDomain]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href && anchor.href.startsWith(window.location.origin)) {
        const url = new URL(anchor.href);
        const path = url.pathname;
        
        if (path !== '/') {
          e.preventDefault();
          console.log(`Intercepted navigation to: ${path}`);
          
          if (path.includes('knowledge')) {
             setDomain('MATERIAL');
             setMapOpen(true);
          } else if (path.includes('telemetry')) {
             setDomain('PROPULSION');
          }
          
          window.history.pushState({}, '', path);
        }
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [setDomain]);

  return (
    <div className="h-screen w-screen bg-[#05070A] text-[#f0f4ff] overflow-hidden flex flex-col font-sans selection:bg-blue-500/30 antialiased relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-50" />
      
      <NotificationSystem />

      <header className="h-[var(--engos-topbar-h)] w-full bg-[#080B10]/95 border-b border-[#adc6ff]/10 backdrop-blur-[40px] flex items-center justify-between px-10 z-[100] relative group shadow-[0_15px_50px_rgba(0,0,0,0.6)] shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.1] via-transparent to-emerald-500/[0.1] opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        
        <div className="flex items-center gap-8 relative z-10">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => { setScreen(null); setDomain('AEROSPACE'); }}>
            <div className="p-3 bg-blue-500/10 rounded-[20px] border border-blue-500/20 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Command className="w-6 h-6 text-blue-400 animate-pulse relative z-10" />
            </div>
            <div className="flex flex-col">
               <span className="text-[16px] font-black uppercase tracking-[0.4em] text-white group-hover:text-blue-400 transition-colors duration-700">
                 Antigravity OS <span className="text-blue-400/60 font-mono font-black italic ml-2 text-[16px]">v3.2</span>
               </span>
               <span className="text-[11px] text-[#adc6ff]/30 uppercase font-mono font-black tracking-[0.3em] mt-1">Sovereign Intel Infrastructure</span>
            </div>
          </div>
          
          <div className="h-10 w-px bg-white/5" />
          
          <div className="flex items-center gap-6">
            <StatusBadge label="RUNTIME" status="DETERMINISTIC" color="emerald" pulse />
            <StatusBadge label="SOLVER" status="CONVERGED" color="blue" />
            <StatusBadge label="REALITY" status={multiversalSync.activeTimeline} color="cyan" />
            <StatusBadge label="COGNITION" status={workflowState.status} color="rose" />
          </div>
        </div>

        <div className="flex items-center gap-10 relative z-10">
          <div className="flex items-center gap-8 text-[12px] font-mono font-black text-[#adc6ff]/40 uppercase tracking-[0.1em]">
            <div className="flex flex-col items-end border-r border-white/5 pr-8 gap-0.5">
              <span className="flex items-center gap-2">LATENCY: <span className="text-emerald-400 text-shadow-[0_0_10px_rgba(52,211,153,0.4)]">0.018ms</span></span>
              <span className="flex items-center gap-2">KERNEL: <span className="text-blue-400">{(osStatus.kernelLoad * 100).toFixed(2)}%</span></span>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <span className="flex items-center gap-2">UPTIME: <span className="text-blue-200">12:54:18</span></span>
              <span className="flex items-center gap-2">DOMAIN: <span className="text-rose-400">{activeDomain}</span></span>
            </div>
          </div>
          <div className="h-10 w-px bg-white/5" />
          <div className="flex items-center gap-6">
             <button className="p-3 text-[#adc6ff]/40 hover:text-white hover:bg-white/5 rounded-xl transition-all group hover:scale-110 active:scale-95">
                <SearchIcon className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
             </button>
             <div className="relative group">
                <button className="p-3 text-[#adc6ff]/40 hover:text-white hover:bg-white/5 rounded-xl transition-all hover:scale-110 active:scale-95">
                   <Bell className="w-6 h-6 group-hover:animate-bounce" />
                </button>
                <div className="absolute top-2.5 right-2.5 w-3 h-3 bg-rose-500 rounded-full border-2 border-[#080B10] animate-pulse shadow-[0_0_15px_rgba(244,63,94,0.8)]" />
             </div>
             <button className="p-0.5 bg-white/5 rounded-full border border-white/10 hover:border-blue-400/50 transition-all overflow-hidden group hover:scale-110 active:scale-95 shadow-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 flex items-center justify-center">
                   <User className="w-6 h-6 text-white group-hover:scale-125 transition-transform duration-700" />
                </div>
             </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden relative bg-[#05070A]">
        
        <nav 
          style={{ width: 'var(--engos-sidebar-w)', minWidth: 'var(--engos-sidebar-w)', maxWidth: 'var(--engos-sidebar-w)' }}
          className="bg-[#080B10]/95 border-r border-[#adc6ff]/10 backdrop-blur-[50px] flex flex-col py-10 gap-2 z-50 relative group shadow-[25px_0_60px_rgba(0,0,0,0.6)] shrink-0"
        >
           <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />
           
           <div className="px-10 pb-8 border-b border-white/5 mb-6">
              <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">Navigation_Nodes</span>
           </div>

           <div className="flex flex-col gap-2 px-6">
             <NavIcon icon={Layout} label="Workbench" active={activeDomain === 'AEROSPACE'} onClick={() => { setDomain('AEROSPACE'); setMapOpen(true); }} />
             <NavIcon icon={Database} label="Knowledge" active={activeDomain === 'MATERIAL'} onClick={() => { setDomain('MATERIAL'); setMapOpen(true); }} />
             <NavIcon icon={Activity} label="Telemetry" active={activeDomain === 'PROPULSION'} onClick={() => { setDomain('PROPULSION'); setMapOpen(true); }} />
             <NavIcon icon={ShieldCheck} label="Security" active={activeDomain === 'SECURITY'} onClick={() => { setDomain('SECURITY'); setMapOpen(true); }} />
             <NavIcon icon={Waves} label="Simulations" active={activeDomain === 'FLUID'} onClick={() => { setDomain('FLUID'); setMapOpen(true); }} />
           </div>
           
           <div className="mt-auto flex flex-col gap-2 px-6 pb-12">
              <div className="px-4 py-3 border-t border-white/5 mb-2" />
              <NavIcon icon={Terminal} label="Kernel Console" active={activeDomain === 'COGNITION'} onClick={() => { setDomain('COGNITION'); setMapOpen(true); }} />
              <NavIcon icon={Settings} label="System Config" active={activeDomain === 'WORKFLOW'} onClick={() => { setDomain('WORKFLOW'); setMapOpen(true); }} />
           </div>
        </nav>

        <aside 
          style={{ 
            width: isMapOpen ? '280px' : '0px', 
            minWidth: isMapOpen ? '280px' : '0px',
            maxWidth: isMapOpen ? '280px' : '0px'
          }}
          className={`
            bg-[#0B0F14]/90 border-r border-[#adc6ff]/10 flex flex-col shrink-0 transition-all duration-700 backdrop-blur-[40px] z-40 relative shadow-[20px_0_50px_rgba(0,0,0,0.4)]
            ${isMapOpen ? 'opacity-100' : 'opacity-0 overflow-hidden'}
          `}
        >
           <div className="p-8 border-b border-[#adc6ff]/10 bg-black/20 flex items-center justify-between">
              <div className="flex flex-col">
                 <h2 className="text-[14px] font-black text-white uppercase tracking-[0.3em] text-shadow-lg">Intelligence_Map</h2>
                 <span className="text-[10px] text-blue-400/40 font-mono font-black mt-1.5 uppercase tracking-widest">{activeDomain}_SUBSETS</span>
              </div>
              <button onClick={() => setMapOpen(false)} className="p-2 hover:bg-white/5 rounded-lg text-white/20 hover:text-white transition-all">
                 <ChevronLeft className="w-5 h-5" />
              </button>
           </div>
           
           <div className="p-6">
              <div className="relative group">
                 <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-hover:text-blue-400 transition-colors" />
                 <input 
                    type="text"
                    placeholder="SEARCH..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-white/[0.02] border border-white/5 rounded-[16px] py-3.5 pl-12 pr-4 text-[14px] font-mono text-white placeholder:text-white/10 focus:outline-none focus:border-blue-500/30 transition-all shadow-inner"
                 />
              </div>
           </div>
           
           <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-2">
              <button 
                onClick={() => setScreen(null)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-[12px] font-black uppercase tracking-[0.15em] transition-all ${!activeScreenId ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-lg' : 'text-white/30 hover:bg-white/5 hover:text-white'}`}
              >
                <Grid className="w-5 h-5" />
                <span>Domain_Home</span>
              </button>
              
              <div className="pt-6 pb-2 px-5">
                 <span className="text-[11px] font-black text-white/10 uppercase tracking-[0.4em]">Nodes ({filteredScreens.length})</span>
              </div>

              {filteredScreens.map((screen) => (
                <button 
                  key={screen.id}
                  onClick={() => setScreen(screen.id)}
                  className={`w-full flex items-center justify-between px-5 py-3 rounded-xl transition-all group ${activeScreenId === screen.id ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-lg' : 'text-white/30 hover:bg-white/5 hover:text-white'}`}
                >
                  <div className="flex items-center gap-4 truncate">
                    <div className={`w-2 h-2 rounded-full ${activeScreenId === screen.id ? 'bg-emerald-400 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-white/10 group-hover:bg-white/30'}`} />
                    <span className="text-[13px] font-mono truncate tracking-tight">{screen.title.replace('Engineering OS', '').trim()}</span>
                  </div>
                </button>
              ))}
           </div>
        </aside>

        <section className="flex-1 flex flex-col relative overflow-hidden min-w-0 bg-[radial-gradient(circle_at_center,_#0A0D14_0%,_#05070A_100%)]">
           <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
           
           <GlobalSyncOverlay />
           
           <div className="flex-1 relative z-10 flex flex-col overflow-hidden">
              {children}
           </div>
        </section>

        <aside 
          style={{ 
            width: isSidebarOpen ? 'var(--engos-inspector-w)' : '0px',
            minWidth: isSidebarOpen ? 'var(--engos-inspector-w)' : '0px',
            maxWidth: isSidebarOpen ? 'var(--engos-inspector-w)' : '0px'
          }}
          className={`
            bg-[#080B10]/98 border-l border-[#adc6ff]/10 backdrop-blur-[60px] flex flex-col shrink-0 overflow-hidden z-50 transition-all duration-700 shadow-[-25px_0_70px_rgba(0,0,0,0.7)] relative
            ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}
          `}
        >
           <div className="p-8 border-b border-[#adc6ff]/10 flex items-center justify-between bg-[#adc6ff]/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-40" />
              <div className="flex items-center gap-4 relative z-10">
                 <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:rotate-12 transition-all shadow-lg">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                 </div>
                 <div className="flex flex-col">
                    <h3 className="text-[12px] font-black text-white uppercase tracking-[0.4em]">Predictive Intel</h3>
                    <span className="text-[9px] text-blue-400/40 uppercase font-mono font-black italic tracking-widest mt-1">v3.2_SOVEREIGN</span>
                 </div>
              </div>
              <button 
                onClick={toggleSidebar}
                className="p-2 hover:bg-white/10 rounded-xl transition-all group relative z-10 shadow-2xl"
              >
                <ChevronRight className={`w-5 h-5 text-[#adc6ff]/40 group-hover:text-white transition-all duration-700 ${isSidebarOpen ? '' : 'rotate-180'}`} />
              </button>
           </div>
           
           <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar relative bg-black/30">
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              
              <InsightCard 
                 title="SYMBOLIC_CONVERGENCE" 
                 message="Dirac Solver detected eigenvalue drift in zone Q-7. Synchronizing phase vectors to maintain entanglement stability below sub-picowatt thresholds."
                 color="blue"
                 icon={Binary}
              />
              <InsightCard 
                 title="MOTION_OPTIMIZATION" 
                 message="Non-linear Jacobian dynamics suggest 18.5% reduction in actuator thermal load via sovereign pose-mapping optimization across 6-DOF joints."
                 color="emerald"
                 icon={Activity}
              />
              <InsightCard 
                 title="SECURITY_HARDENING" 
                 message="Post-Quantum signature mismatch detected in Cluster_0x82. Initiating cryptographic shield lockdown and multi-layer verification sequence."
                 color="rose"
                 alert
                 icon={Shield}
              />
              <InsightCard 
                 title="MATTER_ACCUMULATION" 
                 message="Deposition residuals converging at 0.98e-15. Real-time reality persistence verified for Layer 142 via nanometer-scale SDF reconstruction."
                 color="blue"
                 icon={Layers}
              />
              <InsightCard 
                 title="KERNEL_SYNC" 
                 message="Engineering Cognition Runtime operating at 0.99998 confidence. Symbolic truth verified by sovereign validation engine with 100% convergence."
                 color="cyan"
                 icon={Target}
              />
           </div>
        </aside>
      </main>

      {/* 4. MASTER STATUS TICKER (v3.2 Sovereign) */}
      <footer className="h-14 w-full bg-[#05070A] border-t border-[#adc6ff]/10 flex items-center justify-between px-10 z-[100] relative shadow-[0_-10px_30px_rgba(0,0,0,0.5)] shrink-0">
         <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
         
         <div className="flex items-center gap-10 text-[10px] font-mono font-black text-[#adc6ff]/20 uppercase tracking-[0.3em]">
            <div className="flex items-center gap-4 group">
               <span className="text-emerald-500/60 animate-pulse group-hover:text-emerald-400 transition-colors">SYSTEM_BUS: [MEM_SYNC_v3.2]</span>
               <span className="opacity-40 tracking-tighter italic bg-white/5 px-2 py-0.5 rounded-md">0x4F2A_99B2_SOVEREIGN</span>
            </div>
            <div className="h-4 w-px bg-white/5" />
            <div className="flex items-center gap-4 group">
               <span className="group-hover:text-blue-400 transition-colors">PHYSICS_ENGINE:</span>
               <span className="text-blue-400/60 group-hover:text-blue-400">CONVERGED_STABLE_PHASE_55</span>
            </div>
         </div>
         <div className="flex items-center gap-10">
            <div className="flex items-center gap-4 text-[10px] font-mono font-black text-[#adc6ff]/30 group">
               <span className="group-hover:text-cyan-400 transition-colors">REALITY_SYNC:</span>
               <span className="text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]">DETERMINISTIC_LOCK_LOCKED</span>
            </div>
            <div className="h-4 w-px bg-white/5" />
            <span className="text-[11px] font-mono font-black text-emerald-400 uppercase tracking-widest flex items-center gap-3 bg-emerald-500/10 px-4 py-1 rounded-full border border-emerald-500/20 shadow-2xl">
               <ShieldCheck className="w-4 h-4 animate-pulse" /> SOVEREIGN_INTEL: ONLINE_v3.2
            </span>
         </div>
      </footer>
    </div>
  );
};

const StatusBadge = ({ label, status, color, pulse }: any) => (
  <div className="flex items-center gap-4 px-6 py-2 bg-white/[0.04] border border-white/5 rounded-2xl group hover:border-blue-500/40 hover:bg-white/8 transition-all duration-700 shadow-2xl cursor-pointer relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className={`w-2.5 h-2.5 rounded-full transition-all duration-700 ${color === 'emerald' ? 'bg-emerald-400' : color === 'blue' ? 'bg-blue-400' : color === 'cyan' ? 'bg-cyan-400' : 'bg-rose-400'} ${pulse ? 'animate-pulse shadow-[0_0_15px_rgba(52,211,153,0.8)]' : ''} relative z-10`} />
    <span className="text-[12px] font-black text-[#adc6ff]/40 uppercase tracking-[0.2em] group-hover:text-white transition-colors relative z-10">{label}</span>
    <span className={`text-[13px] font-black uppercase tracking-tight ${color === 'emerald' ? 'text-emerald-400' : color === 'blue' ? 'text-blue-400' : color === 'cyan' ? 'text-cyan-400' : 'text-rose-400'} drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] relative z-10`}>{status}</span>
  </div>
);

const NavIcon = ({ icon: Icon, label, active = false, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`
    w-full flex items-center gap-6 px-6 py-4 rounded-2xl transition-all duration-500 group relative
    ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-lg' : 'text-[#adc6ff]/20 hover:text-white hover:bg-white/5'}
  `}>
    <Icon className={`w-6 h-6 group-hover:scale-110 transition-transform duration-500 ${active ? 'text-blue-400' : 'text-[#adc6ff]/20 group-hover:text-white'}`} />
    <span className={`text-[14px] font-black uppercase tracking-[0.2em] transition-colors ${active ? 'text-white' : 'text-[#adc6ff]/20 group-hover:text-white'}`}>
       {label}
    </span>
    {active && (
       <div className="absolute left-[-2px] top-1/2 -translate-y-1/2 w-1.5 h-8 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
    )}
  </button>
);

const InsightCard = ({ title, message, color, alert, icon: Icon }: any) => {
   const [id, setId] = useState<string>('B4A2F1'); // Default stable placeholder

   useEffect(() => {
      setId(Math.random().toString(16).substr(2, 6).toUpperCase());
   }, []);

   return (
      <div className={`p-8 bg-[#0B0F14]/60 border border-white/5 rounded-[40px] space-y-5 hover:border-${color}-500/40 transition-all duration-700 group relative overflow-hidden shadow-2xl hover:bg-black/60 hover:translate-y-[-6px] active:scale-[0.98]`}>
         <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
         <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-4">
               {Icon && <div className={`p-3 bg-${color}-500/10 rounded-2xl border border-${color}-500/10 group-hover:border-${color}-400/40 transition-all shadow-inner`}><Icon className={`w-5 h-5 text-${color}-400/50 group-hover:text-${color}-400 group-hover:scale-110 transition-all duration-500`} /></div>}
               <span className={`text-[13px] font-black text-${color}-400 uppercase tracking-[0.5em]`}>{title}</span>
            </div>
            {alert && (
               <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping absolute inset-0 opacity-40" />
                  <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.8)] relative z-10" />
               </div>
            )}
         </div>
         <p className="text-[15px] text-[#adc6ff]/70 leading-relaxed font-mono font-medium relative z-10 group-hover:text-blue-500 transition-colors selection:bg-blue-500/40">
            {message}
         </p>
         <div className="flex items-center justify-between pt-4 relative z-10 border-t border-white/10 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:translate-y-0">
            <span className="text-[11px] text-[#adc6ff]/30 font-mono font-black uppercase tracking-[0.4em]">ID: 0x{id}_v3.2</span>
            <button className={`flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.4em] text-${color}-400/60 hover:text-${color}-400 transition-all group/btn`}>
               Analyze_Stream <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
            </button>
         </div>
      </div>
   );
};

const GlobalSyncOverlay = () => {
  const { materializationState, workflowState } = useEngineeringStore();
  const { status, buildProgress, depositionRate_mms } = materializationState;

  if (status === 'IDLE' && workflowState.status === 'IDLE') return null;

  return (
    <div className="absolute top-0 left-0 right-0 h-2 z-[200] overflow-hidden bg-white/5 backdrop-blur-2xl">
      <div 
        className={`h-full transition-all duration-1000 shadow-[0_0_40px_rgba(59,130,246,0.9)] ${status === 'DEPOSITING' ? 'bg-rose-500 shadow-rose-500/50' : 'bg-blue-500 animate-pulse shadow-blue-500/50'}`}
        style={{ width: `${status === 'DEPOSITING' ? buildProgress * 100 : workflowState.progress * 100}%` }}
      />
      <div className="absolute top-14 left-1/2 -translate-x-1/2 px-12 py-4 bg-[#0B0F14]/98 border border-blue-500/40 rounded-[32px] backdrop-blur-[60px] flex items-center gap-10 shadow-[0_40px_80px_rgba(0,0,0,0.9)] animate-in slide-in-from-top-14 duration-1000 group hover:border-blue-400 transition-all overflow-hidden border-t-blue-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-rose-500/10 opacity-40" />
        <div className="flex items-center gap-5 relative z-10">
          <div className={`w-4 h-4 rounded-full ${status === 'DEPOSITING' ? 'bg-rose-500 animate-ping shadow-[0_0_20px_rgba(244,63,94,0.9)]' : 'bg-blue-400 animate-pulse shadow-[0_0_20px_rgba(59,130,246,0.9)]'} `} />
          <span className="text-[14px] font-black text-white uppercase tracking-[0.5em]">
            {status === 'DEPOSITING' ? 'Materialization' : 'Convergence'}: <span className="text-blue-400 font-mono shadow-sm">{((status === 'DEPOSITING' ? buildProgress : workflowState.progress) * 100).toFixed(3)}%</span>
          </span>
        </div>
        <div className="h-8 w-px bg-white/20 relative z-10" />
        <div className="flex items-center gap-4 relative z-10">
           <TrendingUp className="w-6 h-6 text-blue-400/50 group-hover:text-blue-400 transition-colors" />
           <span className="text-[13px] font-mono font-black text-blue-400/70 uppercase tracking-[0.2em] group-hover:text-blue-400 transition-colors">{status === 'DEPOSITING' ? `${depositionRate_mms.toFixed(5)} MM/S` : `STEP: ${workflowState.currentStep}`}</span>
        </div>
      </div>
    </div>
  );
};

export default EngineeringOSShell;
