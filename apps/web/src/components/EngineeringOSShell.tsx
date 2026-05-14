'use client';

import React, { useState, useEffect } from 'react';
import { 
  Command, Box, Activity, Cpu, Zap, Database, 
  Shield, Settings, Terminal, Layout, Grid,
  Maximize2, Bell, Share2, Search, User,
  Circle, Globe, ChevronRight, Info, Eye,
  RefreshCw as RefreshIcon, Power, BoxSelect,
  Fingerprint, History, HardDrive, Network,
  Lock, Unlock, Smartphone, Share, Sparkles,
  Target, TrendingUp, Layers, ShieldCheck,
  AlertTriangle, Waves, BarChart3, Binary, Maximize
} from 'lucide-react';
import NotificationSystem from './cockpit/NotificationSystem';
import { useEngineeringStore } from '@/store/useEngineeringStore';

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
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const { osStatus, activeDomain, workflowState, multiversalSync } = useEngineeringStore();

  return (
    <div className="h-screen w-screen bg-[#05070A] text-[#f0f4ff] overflow-hidden flex flex-col font-sans selection:bg-blue-500/30 antialiased relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-50" />
      
      {/* 1. GLOBAL COGNITION HUB (v3.2) */}
      <NotificationSystem />

      {/* 2. MISSION CONTROL TOPBAR (v3.2 Sovereign) */}
      <header className="h-[60px] w-full bg-[#080B10]/95 border-b border-[#adc6ff]/10 backdrop-blur-[40px] flex items-center justify-between px-10 z-[100] relative group shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.08] via-transparent to-emerald-500/[0.08] opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        
        <div className="flex items-center gap-10 relative z-10">
          <div className="flex items-center gap-5 group cursor-pointer">
            <div className="p-3 bg-blue-500/10 rounded-[18px] border border-blue-500/20 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Command className="w-6 h-6 text-blue-400 animate-pulse relative z-10" />
            </div>
            <div className="flex flex-col">
               <span className="text-[13px] font-black uppercase tracking-[0.5em] text-white group-hover:text-blue-400 transition-colors duration-700">
                 Antigravity OS <span className="text-blue-400/60 font-mono font-black italic ml-1">v3.2</span>
               </span>
               <span className="text-[9px] text-[#adc6ff]/20 uppercase font-mono font-black tracking-[0.3em] mt-0.5">Sovereign Intel Infrastructure</span>
            </div>
          </div>
          
          <div className="h-8 w-px bg-white/5" />
          
          <div className="flex items-center gap-6">
            <StatusBadge label="RUNTIME" status="DETERMINISTIC" color="emerald" pulse />
            <StatusBadge label="SOLVER" status="CONVERGED" color="blue" />
            <StatusBadge label="REALITY" status={multiversalSync.activeTimeline} color="cyan" />
            <StatusBadge label="COGNITION" status={workflowState.status} color="rose" />
          </div>
        </div>

        <div className="flex items-center gap-10 relative z-10">
          <div className="flex items-center gap-8 text-[11px] font-mono font-black text-[#adc6ff]/30 uppercase tracking-[0.2em]">
            <div className="flex flex-col items-end border-r border-white/5 pr-8">
              <span className="flex items-center gap-2">LATENCY: <span className="text-emerald-400">0.018ms</span></span>
              <span className="flex items-center gap-2">KERNEL: <span className="text-blue-400">{(osStatus.kernelLoad * 100).toFixed(2)}%</span></span>
            </div>
            <div className="flex flex-col items-end">
              <span className="flex items-center gap-2">UPTIME: <span className="text-blue-200">12:54:18</span></span>
              <span className="flex items-center gap-2">DOMAIN: <span className="text-rose-400">{activeDomain}</span></span>
            </div>
          </div>
          <div className="h-8 w-px bg-white/5" />
          <div className="flex items-center gap-5">
             <button className="p-3 text-[#adc6ff]/30 hover:text-white hover:bg-white/5 rounded-2xl transition-all group hover:scale-110 active:scale-95">
                <Search className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
             </button>
             <div className="relative group">
                <button className="p-3 text-[#adc6ff]/30 hover:text-white hover:bg-white/5 rounded-2xl transition-all hover:scale-110 active:scale-95">
                   <Bell className="w-5 h-5 group-hover:animate-bounce" />
                </button>
                <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-[#080B10] animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.6)]" />
             </div>
             <button className="p-1 bg-white/5 rounded-full border border-white/10 hover:border-blue-400/50 transition-all overflow-hidden group hover:scale-110 active:scale-95 shadow-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 flex items-center justify-center">
                  <User className="w-5 h-5 text-white group-hover:scale-125 transition-transform duration-700" />
                </div>
             </button>
          </div>
        </div>
      </header>

      {/* 3. MAIN WORKSPACE ORCHESTRATOR */}
      <main className="flex-1 flex overflow-hidden relative bg-[#05070A]">
        
        {/* LEFT NAV BAR (v3.2 Hardened) */}
        <nav className="w-[80px] bg-[#080B10]/95 border-r border-[#adc6ff]/10 backdrop-blur-[50px] flex flex-col items-center py-10 gap-10 z-50 relative group shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
           <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
           
           <NavIcon icon={Layout} label="Workbench" active />
           <NavIcon icon={Database} label="Knowledge" />
           <NavIcon icon={Activity} label="Telemetry" />
           <NavIcon icon={ShieldCheck} label="Security" />
           <NavIcon icon={Waves} label="Simulations" />
           
           <div className="mt-auto flex flex-col gap-10 pb-6">
              <NavIcon icon={Terminal} label="Kernel Console" />
              <NavIcon icon={Settings} label="System Config" />
           </div>
        </nav>

        {/* PRIMARY VIEWPORT CONTAINER */}
        <section className="flex-1 flex flex-col relative overflow-hidden bg-[radial-gradient(circle_at_center,_#0A0D14_0%,_#05070A_100%)]">
           <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
           
           {/* Global State Progress (Integrated Sync v3.2) */}
           <GlobalSyncOverlay />
           
           <div className="flex-1 relative z-10 flex flex-col overflow-hidden">
              {children}
           </div>
        </section>

        {/* RIGHT PREDICTIVE INSPECTOR (v3.2 Sovereign) */}
        <aside className={`
          w-[400px] bg-[#080B10]/98 border-l border-[#adc6ff]/10 backdrop-blur-[60px] flex flex-col overflow-hidden z-50 transition-all duration-1000 shadow-[-20px_0_60px_rgba(0,0,0,0.6)]
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full absolute right-0'}
        `}>
           <div className="p-8 border-b border-[#adc6ff]/10 flex items-center justify-between bg-[#adc6ff]/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-40" />
              <div className="flex items-center gap-4 relative z-10">
                 <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:rotate-12 transition-all">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                 </div>
                 <div className="flex flex-col">
                    <h3 className="text-[12px] font-black text-white uppercase tracking-[0.4em]">Predictive Intel</h3>
                    <span className="text-[8px] text-blue-400/40 uppercase font-mono font-black italic">v3.2_SOVEREIGN_CORE</span>
                 </div>
              </div>
              <button 
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="p-2.5 hover:bg-white/10 rounded-xl transition-all group relative z-10 shadow-2xl"
              >
                <ChevronRight className={`w-5 h-5 text-[#adc6ff]/40 group-hover:text-white transition-all duration-700 ${isSidebarOpen ? '' : 'rotate-180'}`} />
              </button>
           </div>
           
           <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar relative bg-black/20">
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
      <footer className="h-10 w-full bg-[#05070A] border-t border-[#adc6ff]/10 flex items-center justify-between px-10 z-[100] relative shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
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
  <div className="flex items-center gap-3 px-4 py-1.5 bg-white/[0.03] border border-white/5 rounded-full group hover:border-blue-500/30 hover:bg-white/5 transition-all duration-500 shadow-xl cursor-pointer">
    <div className={`w-2 h-2 rounded-full transition-all duration-700 ${color === 'emerald' ? 'bg-emerald-400' : color === 'blue' ? 'bg-blue-400' : color === 'cyan' ? 'bg-cyan-400' : 'bg-rose-400'} ${pulse ? 'animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.8)]' : ''}`} />
    <span className="text-[10px] font-black text-[#adc6ff]/40 uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
    <span className={`text-[11px] font-black uppercase tracking-tighter ${color === 'emerald' ? 'text-emerald-400' : color === 'blue' ? 'text-blue-400' : color === 'cyan' ? 'text-cyan-400' : 'text-rose-400'} drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]`}>{status}</span>
  </div>
);

const NavIcon = ({ icon: Icon, label, active = false }: any) => (
  <button className={`
    p-4 rounded-[22px] transition-all duration-700 group relative
    ${active ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-110' : 'text-[#adc6ff]/20 hover:text-white hover:bg-white/10 hover:border-white/10'}
  `}>
    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
    <div className={`absolute left-full ml-6 px-4 py-2 bg-[#0B0F14]/98 border border-blue-500/30 rounded-2xl text-[11px] font-black text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 translate-x-[-15px] group-hover:translate-x-0 whitespace-nowrap z-[200] backdrop-blur-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.8)]`}>
       {label}
       <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-[#0B0F14] border-l border-b border-blue-500/30 rotate-45" />
    </div>
    {active && (
       <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-1.5 h-8 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse" />
    )}
  </button>
);

const InsightCard = ({ title, message, color, alert, icon: Icon }: any) => (
   <div className={`p-6 bg-[#0B0F14]/60 border border-white/5 rounded-[32px] space-y-4 hover:border-${color}-500/40 transition-all duration-700 group relative overflow-hidden shadow-2xl hover:bg-black/60 hover:translate-y-[-4px] active:scale-[0.98]`}>
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
      <div className="flex justify-between items-center relative z-10">
         <div className="flex items-center gap-3">
            {Icon && <div className={`p-2 bg-${color}-500/10 rounded-lg border border-${color}-500/10 group-hover:border-${color}-400/40 transition-all`}><Icon className={`w-4 h-4 text-${color}-400/40 group-hover:text-${color}-400 group-hover:scale-110 transition-all duration-500`} /></div>}
            <span className={`text-[11px] font-black text-${color}-400 uppercase tracking-[0.4em]`}>{title}</span>
         </div>
         {alert && (
            <div className="relative">
               <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping absolute inset-0 opacity-40" />
               <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.8)] relative z-10" />
            </div>
         )}
      </div>
      <p className="text-[12px] text-[#adc6ff]/60 leading-relaxed font-mono font-medium relative z-10 group-hover:text-blue-100 transition-colors selection:bg-blue-500/40">
         {message}
      </p>
      <div className="flex items-center justify-between pt-2 relative z-10 border-t border-white/5 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0">
         <span className="text-[9px] text-[#adc6ff]/20 font-mono font-black uppercase tracking-widest">ID: 0x{Math.random().toString(16).substr(2, 6).toUpperCase()}_v3.2</span>
         <button className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-${color}-400/60 hover:text-${color}-400 transition-all group/btn`}>
            Analyze <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
         </button>
      </div>
   </div>
);

const GlobalSyncOverlay = () => {
  const { materializationState, workflowState } = useEngineeringStore();
  const { status, buildProgress, depositionRate_mms } = materializationState;

  if (status === 'IDLE' && workflowState.status === 'IDLE') return null;

  return (
    <div className="absolute top-0 left-0 right-0 h-1.5 z-[200] overflow-hidden bg-white/5 backdrop-blur-xl">
      <div 
        className={`h-full transition-all duration-1000 shadow-[0_0_30px_rgba(59,130,246,0.8)] ${status === 'DEPOSITING' ? 'bg-rose-500 shadow-rose-500/40' : 'bg-blue-500 animate-pulse shadow-blue-500/40'}`}
        style={{ width: `${status === 'DEPOSITING' ? buildProgress * 100 : workflowState.progress * 100}%` }}
      />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 px-8 py-3 bg-[#0B0F14]/95 border border-blue-500/30 rounded-[28px] backdrop-blur-[50px] flex items-center gap-8 shadow-[0_30px_60px_rgba(0,0,0,0.8)] animate-in slide-in-from-top-10 duration-1000 group hover:border-blue-400 transition-all overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-rose-500/10 opacity-30" />
        <div className="flex items-center gap-4 relative z-10">
          <div className={`w-3 h-3 rounded-full ${status === 'DEPOSITING' ? 'bg-rose-500 animate-ping shadow-[0_0_15px_rgba(244,63,94,0.8)]' : 'bg-blue-400 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.8)]'} `} />
          <span className="text-[12px] font-black text-white uppercase tracking-[0.4em]">
            {status === 'DEPOSITING' ? 'Sovereign Materialization' : 'Sovereign Convergence'}: <span className="text-blue-400 font-mono">{((status === 'DEPOSITING' ? buildProgress : workflowState.progress) * 100).toFixed(3)}%</span>
          </span>
        </div>
        <div className="h-6 w-px bg-white/10 relative z-10" />
        <div className="flex items-center gap-3 relative z-10">
           <TrendingUp className="w-5 h-5 text-blue-400/40 group-hover:text-blue-400 transition-colors" />
           <span className="text-[11px] font-mono font-black text-blue-400/60 uppercase tracking-widest group-hover:text-blue-400 transition-colors">{status === 'DEPOSITING' ? `${depositionRate_mms.toFixed(5)} MM/S` : `STEP: ${workflowState.currentStep}`}</span>
        </div>
      </div>
    </div>
  );
};

export default EngineeringOSShell;
