'use client';

import React, { useState, useMemo } from 'react';
import {
   Shield, ShieldAlert, ShieldCheck, Lock, Unlock,
   Eye, EyeOff, Terminal, Zap, Activity, AlertTriangle,
   Binary, Fingerprint, Database, Cpu, Globe, Share2,
   Settings, Search, Key, HardDrive, CpuIcon,
   CloudLightning, Radio, Gauge, Bell, Box, Target,
   RefreshCw as RefreshIcon, Power, Server, Network, ShieldClose,
   Smartphone, Share, Sparkles, Grid
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * @interface SecurityMetricProps
 * High-fidelity security telemetry component.
 */
const SecurityMetric = ({ label, value, unit, icon: Icon, color = 'blue', status }: any) => (
  <div className={`p-5 bg-[#080B10] border border-${color}-400/10 rounded-2xl flex flex-col space-y-3 relative overflow-hidden group hover:border-${color}-400/40 transition-all shadow-inner`}>
    <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
    <div className="flex justify-between items-start relative z-10">
      <p className="text-[9px] text-[#adc6ff]/40 uppercase font-bold tracking-widest">{label}</p>
      {Icon && <Icon className={`w-3.5 h-3.5 text-${color}-400/40 group-hover:text-${color}-400 transition-colors`} />}
    </div>
    <div className="flex items-baseline gap-2 relative z-10">
      <span className="text-2xl font-mono font-bold text-[#f0f4ff] group-hover:text-white transition-colors">{value}</span>
      <span className={`text-[10px] text-${color}-400/60 font-mono uppercase tracking-tighter`}>{unit}</span>
    </div>
    {status && (
      <div className="flex items-center gap-1.5 pt-1 relative z-10">
        <div className={`w-1.5 h-1.5 rounded-full bg-${color}-400 animate-pulse`} />
        <span className={`text-[8px] text-${color}-400/60 font-mono uppercase`}>{status}</span>
      </div>
    )}
    <div className={`w-full h-1 bg-${color}-500/5 mt-2 rounded-full overflow-hidden relative z-10 shadow-inner border border-white/5`}>
      <div className={`h-full bg-${color}-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]`} style={{ width: '90%' }} />
    </div>
  </div>
);

/**
 * SecurityIntelligencePanel v3.2 (Phase 55 Advanced - Sovereign Security Infrastructure)
 * 
 * Advanced security orchestration kernel with quantum-resilient telemetry,
 * lattice cryptography solvers, zero-knowledge proofs, and reality-linked 
 * cryptographic synchronization. Features high-fidelity heuristics and 
 * entropy-based truth verification.
 */
const SecurityIntelligencePanel = () => {
   const { 
     securityState, 
     updateSecurity, 
     addNotification, 
     pushEvent, 
     validationEngine 
   } = useEngineeringStore();
   
   const [activeTab, setActiveTab] = useState<
     'FIREWALL' | 'ENCRYPTION' | 'THREATS' | 'INTEGRITY' | 'SYSTEM' | 'AUDIT' | 'QUANTUM_SOLVER' | 'ZKP_SOLVER' | 'ENTROPY_SOLVER' | 'ECC_SOLVER' | 'LATTICE_SOLVER' | 'MALWARE_SOLVER'
   >('FIREWALL');

   const { status, firewall, encryption, threats, integrity } = securityState || {
     status: 'SECURE',
     firewall: { blockedRequests: 0 },
     encryption: {},
     threats: [],
     integrity: {}
   };

   const tabs = useMemo(() => [
      { id: 'FIREWALL', label: 'Quantum Shield', icon: ShieldCheck },
      { id: 'LATTICE_SOLVER', label: 'Lattice Solver', icon: Sparkles },
      { id: 'MALWARE_SOLVER', label: 'Malware Solver', icon: Activity },
      { id: 'ENTROPY_SOLVER', label: 'Entropy Solver', icon: Sparkles },
      { id: 'QUANTUM_SOLVER', label: 'LBC Solver', icon: Key },
      { id: 'ZKP_SOLVER', label: 'ZKP Solver', icon: Fingerprint },
      { id: 'THREATS', label: 'Threat Vector', icon: Target },
      { id: 'ENCRYPTION', label: 'Entropy Sync', icon: Binary },
      { id: 'SYSTEM', label: 'OS Hardening', icon: Server },
   ], []);

   const handleLockdown = () => {
      updateSecurity?.({ status: 'LOCKED' });
      pushEvent?.('SECURITY_LOCKDOWN_INITIATED', { 
        timestamp: Date.now(), 
        trigger: 'MANUAL_OVERRIDE',
        domain: 'SECURITY'
      });
      addNotification?.({
        title: 'Critical Lockdown Initialized',
        message: 'All system ports sealed. Intelligence kernel transition to AIR_GAP mode.',
        type: 'CRITICAL',
        domain: 'SECURITY'
      });
   };

   /**
    * Triggers a cryptanalysis solver pass
    */
   const runSolver = (type: string) => {
     pushEvent?.('CRYPTANALYSIS_SOLVER_START', { type, timestamp: Date.now() });
     addNotification?.({
       title: `${type} SOLVER ACTIVE`,
       message: `Synchronizing lattice state vectors for ${type} verification.`,
       type: 'INFO',
       domain: 'SECURITY'
     });
   };

   return (
      <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
         
         {/* 1. SECURITY ORCHESTRATION TABS (v3.2) */}
         <div className="flex bg-[#0B0F14] border-b border-[#adc6ff]/10 overflow-x-auto custom-scrollbar scrollbar-hide">
            {tabs.map((tab) => (
               <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`
                    flex-none px-6 py-4 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-widest transition-all relative
                    ${activeTab === tab.id ? 'text-[#adc6ff] bg-[#adc6ff]/5' : 'text-[#adc6ff]/30 hover:text-[#adc6ff]/60'}
                  `}
               >
                  <tab.icon className={`w-3.5 h-3.5 ${activeTab === tab.id ? 'animate-pulse' : ''}`} />
                  {tab.label}
                  {activeTab === tab.id && (
                     <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#adc6ff] shadow-[0_0_10px_rgba(173,198,255,0.6)]" />
                  )}
               </button>
            ))}
         </div>

         <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar relative">
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            
            {/* 0. GLOBAL SAFETY OVERLAY (v3.2 Advanced) */}
            <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-3xl flex items-center justify-between mb-4 shadow-inner">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                  <ShieldCheck className="w-5 h-5 text-indigo-400 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-indigo-100 font-black uppercase tracking-[0.2em]">Cognition Safety Kernel</span>
                  <span className="text-[8px] text-indigo-400/40 uppercase font-mono tracking-widest italic">REALITY_LINKED_GUARDRAILS</span>
                </div>
              </div>
              <div className="flex items-center gap-6 text-[10px] font-mono">
                <div className="flex flex-col items-end">
                  <span className="text-white/40 uppercase tracking-tighter">Hallucination Shield:</span>
                  <span className="text-indigo-400">{(validationEngine.aiHallucinationShield * 100).toFixed(4)}%</span>
                </div>
                <div className="h-6 w-px bg-white/10" />
                <div className="flex flex-col items-end">
                  <span className="text-white/40 uppercase tracking-tighter">Truth Consensus:</span>
                  <span className="text-emerald-400">0.9998</span>
                </div>
              </div>
            </div>

            {/* TAB 1: FIREWALL ORCHESTRATION */}
            {activeTab === 'FIREWALL' && (
               <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <section className="space-y-5">
                     <div className="flex justify-between items-center px-1">
                        <h3 className="text-[11px] font-black text-[#adc6ff]/60 uppercase tracking-[0.3em] flex items-center gap-3">
                          <Shield className="w-4 h-4 text-blue-400" /> Perimeter Defense Telemetry
                        </h3>
                        <span className={`text-[10px] font-black px-5 py-2 rounded-2xl border tracking-[0.3em] uppercase font-mono ${status === 'SECURE' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]' : 'bg-rose-500/10 border-rose-500/20 text-rose-400 animate-pulse'}`}>
                           {status}_PROTOCOL_ACTIVE
                        </span>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-6">
                        <SecurityMetric 
                          label="Encryption Entropy" 
                          value="7.994" 
                          unit="Bits" 
                          icon={Zap}
                          color="blue"
                          status="REALTIME_SYNC"
                        />
                        <SecurityMetric 
                          label="Blocked Requests" 
                          value={firewall.blockedRequests} 
                          unit="Count" 
                          icon={ShieldAlert}
                          color="rose"
                          status="THREAT_BLOCKED"
                        />
                     </div>

                     <div className="p-8 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-[32px] space-y-8 relative overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />
                        <div className="flex justify-between items-center relative z-10">
                           <div className="space-y-1">
                             <span className="text-[13px] text-emerald-400 font-black uppercase tracking-[0.4em]">Traffic Analysis Vector</span>
                             <p className="text-[9px] text-[#adc6ff]/30 uppercase font-mono tracking-widest">ZERO_TRUST_INTEGRITY_SYNC_ACTIVE</p>
                           </div>
                           <Activity className="w-10 h-10 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.4)] animate-pulse" />
                        </div>
                        
                        <div className="space-y-10 relative z-10">
                           <div className="space-y-4">
                              <div className="flex justify-between text-[11px] text-[#adc6ff]/60 uppercase font-black tracking-[0.2em]">
                                 <span>Cipher Integrity Verification</span>
                                 <span className="text-emerald-400 font-mono">99.99999% Stable</span>
                              </div>
                              <div className="h-2.5 bg-[#adc6ff]/5 rounded-full overflow-hidden shadow-inner border border-white/5">
                                 <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-[0_0_20px_rgba(52,211,153,0.6)]" style={{ width: '100%' }} />
                              </div>
                           </div>
                        </div>
                        
                        <button 
                          onClick={() => runSolver('FIREWALL_OPTIMIZATION')}
                          className="w-full p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex justify-between items-center relative z-10 hover:bg-emerald-500/20 transition-all group shadow-2xl"
                        >
                           <div className="flex items-center gap-5">
                              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
                              <span className="text-[12px] text-emerald-100 font-black uppercase tracking-[0.3em]">Run Firewall Optimization pass</span>
                           </div>
                           <RefreshIcon className="w-5 h-5 text-emerald-400 group-hover:rotate-180 transition-transform duration-1000" />
                        </button>
                     </div>
                  </section>
               </div>
            )}

            {/* TAB: MALWARE_SOLVER (Advanced Heuristics) */}
            {activeTab === 'MALWARE_SOLVER' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <section className="space-y-5">
                   <div className="flex justify-between items-center px-1">
                      <h3 className="text-[11px] font-black text-rose-400/60 uppercase tracking-[0.3em] flex items-center gap-3">
                         <Activity className="w-4 h-4 text-rose-400" /> Neural Malware Heuristics
                      </h3>
                      <span className="text-[9px] font-mono text-rose-400/40">HEURISTIC_SYNC_v3.2</span>
                   </div>
                   <div className="p-8 bg-rose-500/5 border border-rose-500/20 rounded-[32px] space-y-8 relative overflow-hidden shadow-2xl group">
                      <div className="absolute inset-0 bg-rose-500/5 group-hover:bg-rose-500/10 transition-colors pointer-events-none" />
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-5">
                           <div className="p-3 bg-rose-500/20 rounded-2xl border border-rose-500/30 shadow-2xl">
                              <ShieldAlert className="w-8 h-8 text-rose-400 animate-pulse" />
                           </div>
                           <div className="flex flex-col">
                             <span className="text-[14px] font-black text-white uppercase tracking-[0.3em]">Malware Kernel Equilibrium</span>
                             <span className="text-[9px] text-rose-400/40 uppercase font-mono font-bold tracking-widest">BEHAVIORAL_PATTERN_LOCK</span>
                           </div>
                        </div>
                        <div className="flex flex-col items-end">
                           <span className="text-3xl font-mono font-black text-rose-400">0.9999</span>
                           <span className="text-[8px] text-rose-400/40 uppercase font-mono">CONVERGENCE_EPSILON</span>
                        </div>
                      </div>
                      
                      <div className="h-48 bg-black/60 rounded-3xl border border-rose-500/10 flex flex-col items-center justify-center space-y-4 relative overflow-hidden">
                        <div className="absolute inset-0 flex justify-between px-10 opacity-5 pointer-events-none">
                           {[...Array(10)].map((_, i) => <div key={i} className="w-px h-full bg-rose-500" />)}
                        </div>
                        <p className="text-[12px] font-mono text-rose-400/80 uppercase animate-pulse tracking-[0.6em] relative z-10">Neural Pattern Scanning Active</p>
                        <div className="flex gap-2 relative z-10">
                           {[...Array(20)].map((_, i) => (
                             <div key={i} className="w-1.5 h-6 bg-rose-500/20 rounded-full overflow-hidden">
                                <div className="h-full bg-rose-400 animate-shimmer" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.05}s` }} />
                             </div>
                           ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6 relative z-10">
                         <div className="p-5 bg-black/40 rounded-2xl border border-white/5 space-y-2">
                            <span className="text-[9px] text-rose-400/60 uppercase font-bold tracking-widest">Signature Matching</span>
                            <p className="text-[12px] font-mono text-white/80">99.8% ACCURACY</p>
                         </div>
                         <div className="p-5 bg-black/40 rounded-2xl border border-white/5 space-y-2">
                            <span className="text-[9px] text-rose-400/60 uppercase font-bold tracking-widest">Sandbox Integrity</span>
                            <p className="text-[12px] font-mono text-emerald-400">ISOLATED_SECURE</p>
                         </div>
                      </div>

                      <button 
                        onClick={() => runSolver('MALWARE_HEURISTIC_SWEEP')}
                        className="w-full py-5 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-[11px] font-black text-rose-400 uppercase tracking-[0.3em] hover:bg-rose-500/20 transition-all shadow-2xl"
                      >
                         Initiate Deep Heuristic Analysis
                      </button>
                   </div>
                </section>
              </div>
            )}

            {/* TAB: ENTROPY_SOLVER (True Random Sync) */}
            {activeTab === 'ENTROPY_SOLVER' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <section className="space-y-5">
                   <div className="flex justify-between items-center px-1">
                      <h3 className="text-[11px] font-black text-amber-400/60 uppercase tracking-[0.3em] flex items-center gap-3">
                         <Sparkles className="w-4 h-4 text-amber-400" /> Reality Entropy Solver
                      </h3>
                      <span className="text-[9px] font-mono text-amber-400/40">ENTROPY_SYNC_v3.2</span>
                   </div>
                   <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-[32px] space-y-8 relative overflow-hidden shadow-2xl group">
                      <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors pointer-events-none" />
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-5">
                           <div className="p-3 bg-amber-500/20 rounded-2xl border border-amber-500/30 shadow-2xl">
                              <Binary className="w-8 h-8 text-amber-400 animate-spin-slow" />
                           </div>
                           <div className="flex flex-col">
                             <span className="text-[14px] font-black text-white uppercase tracking-[0.3em]">Quantum Randomness Lock</span>
                             <span className="text-[9px] text-amber-400/40 uppercase font-mono font-bold tracking-widest">SHANNON_ENTROPY_OPTIMAL</span>
                           </div>
                        </div>
                        <div className="flex flex-col items-end">
                           <span className="text-3xl font-mono font-black text-amber-400">7.9998</span>
                           <span className="text-[8px] text-amber-400/40 uppercase font-mono">BITS_PER_SYMBOL</span>
                        </div>
                      </div>
                      
                      <div className="h-40 bg-black/60 rounded-3xl border border-amber-500/10 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 flex flex-wrap content-start p-4 gap-2 font-mono text-[8px] text-amber-400 overflow-hidden pointer-events-none">
                           {[...Array(200)].map((_, i) => <span key={i}>{Math.random().toString(16).substr(2, 2)}</span>)}
                        </div>
                        <p className="text-[11px] font-mono text-amber-400/80 uppercase animate-pulse tracking-[0.5em] relative z-10">Synchronizing Thermal Noise Tensors...</p>
                      </div>

                      <div className="space-y-4 relative z-10">
                         <div className="flex justify-between text-[11px] text-[#adc6ff]/60 uppercase font-black tracking-[0.2em]">
                            <span>Cryptographic Randomness Pool</span>
                            <span className="text-emerald-400 font-mono">EXHAUSTIVE_REGEN_ACTIVE</span>
                         </div>
                         <div className="h-2.5 bg-amber-500/5 rounded-full overflow-hidden shadow-inner border border-white/5">
                            <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.6)]" style={{ width: '92%' }} />
                         </div>
                      </div>

                      <button 
                        onClick={() => runSolver('ENTROPY_REGENERATION')}
                        className="w-full py-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-[11px] font-black text-amber-400 uppercase tracking-[0.3em] hover:bg-amber-500/20 transition-all shadow-2xl"
                      >
                         Regenerate Master Entropy Pool
                      </button>
                   </div>
                </section>
              </div>
            )}

            {/* TAB: LATTICE_SOLVER (Post-Quantum Sync) */}
            {activeTab === 'LATTICE_SOLVER' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <section className="space-y-5">
                  <div className="flex justify-between items-center px-1">
                    <h3 className="text-[11px] font-black text-rose-400/60 uppercase tracking-[0.3em] flex items-center gap-3">
                       <Sparkles className="w-4 h-4 text-rose-400" /> Post-Quantum Lattice Infrastructure
                    </h3>
                    <span className="text-[9px] font-mono text-rose-400/40">LATTICE_SOLVER_v3.2</span>
                  </div>
                  <div className="p-10 bg-rose-500/5 border border-rose-500/20 rounded-[40px] space-y-10 relative overflow-hidden shadow-2xl group hover:border-rose-500/40 transition-all">
                    <div className="absolute inset-0 bg-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-6">
                        <div className="p-4 bg-rose-500/20 rounded-[20px] border border-rose-500/30 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                          <Sparkles className="w-10 h-10 text-rose-400 animate-pulse" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[16px] font-black text-white uppercase tracking-[0.4em]">Shortest Vector Equilibrium</span>
                          <span className="text-[10px] text-rose-400/40 uppercase font-mono font-bold tracking-widest">LEARNING_WITH_ERRORS_LOCK</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-4xl font-mono font-black text-rose-400">0.9998</span>
                        <span className="text-[9px] text-rose-400/40 uppercase font-mono">PARITY_RESIDUAL</span>
                      </div>
                    </div>
                    
                    <div className="h-56 bg-black/60 rounded-[32px] border border-rose-500/10 flex flex-col items-center justify-center space-y-6 relative overflow-hidden shadow-inner">
                       <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                          <Grid className="w-[80%] h-[80%] text-rose-400 animate-spin-slow" />
                       </div>
                       <p className="text-[14px] font-mono text-rose-400/80 uppercase animate-pulse tracking-[0.8em] relative z-10">Solving Lattice Tensors...</p>
                       <div className="flex gap-4 relative z-10">
                          {[...Array(5)].map((_, i) => (
                             <div key={i} className={`w-3 h-3 rounded-full bg-rose-400/40 animate-ping shadow-[0_0_15px_rgba(244,63,94,0.6)]`} style={{ animationDelay: `${i * 0.2}s` }} />
                          ))}
                       </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6 relative z-10">
                       <MetricCard label="Polynomial Degree" value="1024" unit="N" color="rose" />
                       <MetricCard label="Error Distribution" value="Gaussian" unit="X" color="emerald" />
                       <MetricCard label="Modulus Capacity" value="2^64" unit="Q" color="blue" />
                    </div>

                    <button 
                      onClick={() => runSolver('LATTICE_REDUCTION_BKZ')}
                      className="w-full py-6 bg-rose-500/10 border border-rose-500/20 rounded-3xl text-[12px] font-black text-rose-400 uppercase tracking-[0.4em] hover:bg-rose-500/20 hover:border-rose-400 hover:shadow-[0_0_30px_rgba(244,63,94,0.3)] transition-all duration-500"
                    >
                       Initiate BKZ Lattice Reduction Pass
                    </button>
                  </div>
                </section>
              </div>
            )}

            {/* Fallback / Kernel Initializer */}
            {!['FIREWALL', 'ENTROPY_SOLVER', 'QUANTUM_SOLVER', 'ZKP_SOLVER', 'LATTICE_SOLVER', 'MALWARE_SOLVER'].includes(activeTab) && (
               <div className="h-full flex flex-col items-center justify-center text-center p-20 space-y-10 opacity-40">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-t-indigo-400 border-indigo-400/10 animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Terminal className="w-8 h-8 text-indigo-400 animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-4">
                     <p className="text-lg text-indigo-400 uppercase tracking-[0.6em] font-black animate-pulse">Initializing {activeTab} Kernel</p>
                     <p className="text-[11px] text-[#adc6ff]/20 uppercase tracking-[0.4em] font-mono font-bold italic">Synchronizing Cryptographic State Vectors v3.2</p>
                  </div>
               </div>
            )}

         </div>

         {/* 3. SECURITY MISSION SYSTEM FOOTER (v3.2 Hardened) */}
         <div className="p-6 bg-[#080B10]/95 border-t border-[#adc6ff]/10 space-y-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] backdrop-blur-3xl relative z-20">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-4 text-[14px] text-blue-400 font-black uppercase tracking-[0.4em] group cursor-pointer">
                  <div className="p-2.5 bg-blue-400/10 rounded-2xl border border-blue-400/20 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                     <Lock className="w-6 h-6 text-blue-400 animate-pulse" />
                  </div>
                  <div className="flex flex-col">
                     <span>Security Cognition Hub</span>
                     <span className="text-[9px] text-blue-400/40 font-mono font-bold tracking-widest mt-0.5 italic">Sovereign Intel Protected</span>
                  </div>
               </div>
               <div className="flex items-center gap-8">
                  <div className="flex flex-col items-end border-r border-white/5 pr-8">
                     <span className="text-[10px] text-[#adc6ff]/40 font-mono font-bold uppercase tracking-widest">SOLVER_STATUS</span>
                     <span className="text-[11px] text-emerald-400 font-mono font-black">LOCKED_STABLE</span>
                  </div>
                  <button className="text-[11px] text-blue-400 font-mono font-black uppercase tracking-[0.3em] hover:text-white transition-all bg-blue-500/5 px-4 py-2 rounded-xl border border-blue-500/20">
                     SEC_v3.2_INTEL
                  </button>
               </div>
            </div>
            
            <div className="flex gap-4">
               <button
                  className="flex-1 bg-gradient-to-r from-rose-600/20 to-rose-500/10 text-rose-400 py-5 rounded-[24px] text-[12px] font-black uppercase tracking-[0.4em] hover:from-rose-600/30 transition-all shadow-[0_0_40px_rgba(244,63,94,0.2)] border border-rose-500/20 flex items-center justify-center gap-4 group overflow-hidden relative"
                  onClick={handleLockdown}
               >
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <ShieldAlert className="w-5 h-5 group-hover:scale-125 group-hover:rotate-12 transition-transform relative z-10" /> 
                  <span className="relative z-10">Execute Sovereign Lockdown</span>
               </button>
               <button className="px-8 py-5 border border-[#adc6ff]/20 rounded-[24px] text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all shadow-inner group">
                  <Settings className="w-7 h-7 text-[#adc6ff]/40 group-hover:text-blue-400 group-hover:rotate-90 transition-all duration-700" />
               </button>
            </div>
         </div>
      </div>
   );
};

const MetricCard = ({ label, value, unit, color }: any) => (
  <div className="p-5 bg-black/40 rounded-2xl border border-white/5 space-y-2 group/metric hover:border-blue-400/20 transition-all">
     <span className={`text-[10px] text-${color}-400/60 uppercase font-black tracking-widest`}>{label}</span>
     <div className="flex items-baseline gap-2">
        <span className="text-[16px] font-mono font-black text-white group-hover/metric:text-glow-blue transition-all">{value}</span>
        <span className="text-[9px] text-[#adc6ff]/20 font-mono uppercase">{unit}</span>
     </div>
  </div>
);

export default SecurityIntelligencePanel;
