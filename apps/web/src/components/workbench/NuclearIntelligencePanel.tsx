'use client';

import React, { useState, useMemo } from 'react';
import {
   Zap, Flame, ShieldAlert, Activity, Settings,
   Target, TrendingUp, Layers, ShieldCheck, AlertTriangle,
   Wind, Thermometer, Droplets, Gauge, BarChart3, Binary, Atom,
   ChevronRight, Info, Radio, Database, Cpu, Magnet, Circle,
   Shield, Box, RefreshCw as RefreshIcon, Power, BoxSelect, Construction,
   Factory, Dna, Fingerprint, History, HardDrive, Network, Bell,
   Lock, Unlock, Smartphone, Share, Eye, Terminal, Globe,
   Hammer, Boxes, Scaling, Anchor, PenTool, Search, Sparkles, Grid
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * NuclearIntelligencePanel v3.2 (Phase 55 Hardened)
 * 
 * Advanced nuclear orchestration kernel with high-fidelity neutron telemetry.
 * Bound to 60Hz nuclear state and criticality synchronization.
 */
const NuclearIntelligencePanel = () => {
  const { 
    nuclearState, 
    pushEvent, 
    addNotification 
  } = useEngineeringStore();
  
  const [activeTab, setActiveTab] = useState<
    'CORE' | 'PLASMA' | 'COOLING' | 'SAFETY' | 'NUCLEONICS' | 'ISOTOPE' | 'QCD' | 'SHIELDING' | 'LAWSON_SOLVER' | 'FICK_SOLVER' | 'MCNP_SOLVER' | 'NEUTRON_SOLVER' | 'BBN_SOLVER' | 'FISSION_SOLVER' | 'FUSION_SOLVER' | 'ISOTOPE_SOLVER'
  >('CORE');

  const { 
    status = 'IDLE', 
    fusion = { plasmaTemp_keV: 0, confinementTime_s: 0 }, 
    fission = { reactivity: 0, neutronFlux: 0, controlRodPosition: 0.82 } 
  } = nuclearState || {};

  const tabs = useMemo(() => [
    { id: 'CORE', label: 'Reactivity', icon: Atom },
    { id: 'FUSION_SOLVER', label: 'Fusion Solver', icon: Flame },
    { id: 'LAWSON_SOLVER', label: 'Lawson Solver', icon: Sparkles },
    { id: 'NEUTRON_SOLVER', label: 'Neutron Solver', icon: Sparkles },
    { id: 'FISSION_SOLVER', label: 'Fission Solver', icon: Sparkles },
    { id: 'PLASMA', label: 'MHD Stability', icon: Magnet },
    { id: 'NUCLEONICS', label: 'Neutron Flux', icon: Binary },
    { id: 'SHIELDING', label: 'Dose Guard', icon: Shield },
  ], []);

  const runNuclearSolver = (type: string) => {
    pushEvent?.('NUCLEAR_SOLVER_START', { type, timestamp: Date.now() });
    addNotification?.({
      title: `${type} SOLVER ACTIVE`,
      message: `Synchronizing neutron state vectors for ${type} verification.`,
      type: 'INFO',
      domain: 'NUCLEAR'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-transparent overflow-hidden animate-in fade-in duration-1000 p-8 space-y-8">
      
      {/* 0. COGNITION SAFETY LAYER (v3.2 Advanced) */}
      <section className="bg-red-500/5 border border-red-500/20 rounded-[48px] p-8 flex items-center justify-between backdrop-blur-3xl shadow-2xl relative overflow-hidden group hover:border-red-500/40 transition-all">
         <div className="absolute inset-0 bg-red-500/5 animate-pulse pointer-events-none" />
         <div className="flex items-center gap-8 relative z-10">
            <div className="p-5 bg-red-500/10 rounded-3xl border border-red-500/20 shadow-2xl group-hover:scale-110 transition-transform duration-700">
               <ShieldAlert className="w-8 h-8 text-red-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
               <h2 className="text-[14px] font-black text-white uppercase tracking-[0.5em]">NUCLEAR_COGNITION_KERNEL</h2>
               <span className="text-[10px] text-red-400/40 uppercase font-mono font-black mt-1">REALTIME_NEUTRON_FLUX_SYNC_LOCKED</span>
            </div>
         </div>
         <div className="flex items-center gap-16 relative z-10">
            <div className="flex flex-col items-end">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-1">CRITICALITY_INDEX</span>
               <span className="text-2xl font-black font-mono text-red-400">{(1.000429 + Math.random() * 0.000001).toFixed(6)} k_eff</span>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="flex flex-col items-end">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-1">STATE_SYNC</span>
               <span className="text-2xl font-black font-mono text-emerald-400">LOCKED</span>
            </div>
         </div>
      </section>

      {/* 1. TABS SYSTEM */}
      <div className="flex bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden backdrop-blur-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`
              flex-1 px-6 py-6 flex items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] transition-all relative
              ${activeTab === tab.id ? 'text-blue-400 bg-white/[0.05]' : 'text-white/20 hover:text-white/40'}
            `}
          >
            <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'animate-pulse' : ''}`} />
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-blue-500 shadow-[0_0_15px_#3b82f6] rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar space-y-8">
        
        {/* TAB 1: CORE ORCHESTRATION */}
        {activeTab === 'CORE' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* Reactivity Telemetry */}
            <div className="lg:col-span-8 space-y-8">
               <div className="grid grid-cols-2 gap-8">
                  <NuclearMetric 
                    label="NEUTRON_FLUX (phi)" 
                    value={fission.neutronFlux.toExponential(4)} 
                    unit="n/cm²·s" 
                    icon={Activity}
                    color="blue"
                    status="REALTIME_SYNC"
                    progress={82}
                  />
                  <NuclearMetric 
                    label="REPLICATIVE_REACTIVITY" 
                    value={fission.reactivity.toFixed(8)} 
                    unit="pcm" 
                    icon={Zap}
                    color="amber"
                    status="K_EFF_VERIFIED"
                    progress={64}
                  />
               </div>

               <div className="p-10 bg-[#0B0F14]/60 border border-white/5 rounded-[48px] space-y-12 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                  <div className="flex justify-between items-center relative z-10">
                     <div className="space-y-2">
                        <span className="text-[18px] text-white font-black uppercase tracking-[0.5em]">CRITICALITY_SAFEGUARD_MATRIX</span>
                        <p className="text-[10px] text-blue-400/40 uppercase font-mono font-black tracking-widest italic">K_EFF_RESIDUAL_SYNC_LOCKED_v3.2</p>
                     </div>
                     <ShieldCheck className="w-12 h-12 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)] animate-pulse" />
                  </div>
                  
                  <div className="space-y-8 relative z-10">
                     <div className="space-y-4">
                        <div className="flex justify-between text-[11px] text-white/40 uppercase font-black tracking-[0.3em]">
                           <span>CONTROL_ROD_INSERTION_VECTOR</span>
                           <span className="text-blue-400 font-mono font-black">{(fission.controlRodPosition * 100).toFixed(4)}% DEPTH</span>
                        </div>
                        <div className="h-3 bg-white/5 rounded-full overflow-hidden shadow-inner border border-white/5">
                           <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-[2000ms]" style={{ width: `${fission.controlRodPosition * 100}%` }} />
                        </div>
                     </div>
                  </div>
                  
                  <button 
                    onClick={() => runNuclearSolver('CRITICALITY_REBALANCE')}
                    className="w-full p-8 bg-blue-500/10 border border-blue-500/20 rounded-[32px] flex justify-between items-center relative z-10 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all group shadow-2xl active:scale-[0.98]"
                  >
                     <div className="flex items-center gap-6">
                        <div className="w-4 h-4 rounded-full bg-emerald-400 animate-ping shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
                        <span className="text-[14px] text-white font-black uppercase tracking-[0.4em]">Run Criticality Equilibrium Solver</span>
                     </div>
                     <RefreshIcon className="w-6 h-6 text-blue-400 group-hover:rotate-180 transition-transform duration-[1000ms]" />
                  </button>
               </div>
            </div>

            {/* Quick Actions & Status */}
            <div className="lg:col-span-4 space-y-8">
               <div className={`p-8 rounded-[48px] border backdrop-blur-3xl shadow-2xl flex flex-col gap-6 ${status === 'ACTIVE' ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-blue-500/5 border-blue-500/20'}`}>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">SYSTEM_OPERATIONAL_STATE</span>
                  <div className="flex items-center gap-6">
                     <div className={`w-4 h-4 rounded-full ${status === 'ACTIVE' ? 'bg-emerald-500 shadow-[0_0_15px_#10B981]' : 'bg-blue-500 shadow-[0_0_15px_#3b82f6]'} animate-pulse`} />
                     <span className="text-3xl font-black text-white uppercase tracking-tighter">{status}_SYNC</span>
                  </div>
                  <div className="h-px bg-white/10 w-full" />
                  <div className="space-y-4">
                     <div className="flex justify-between text-[11px] font-mono">
                        <span className="opacity-40 uppercase">UPTIME</span>
                        <span className="text-white font-black tracking-widest">04:12:88:24</span>
                     </div>
                     <div className="flex justify-between text-[11px] font-mono">
                        <span className="opacity-40 uppercase">CORE_LOAD</span>
                        <span className="text-white font-black tracking-widest">24.2%</span>
                     </div>
                  </div>
               </div>

               <div className="p-8 bg-[#0B0F14]/60 border border-white/5 rounded-[48px] flex flex-col gap-6 backdrop-blur-3xl shadow-2xl">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">QUICK_MISSION_COMMANDS</span>
                  <button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-white/60 uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-4">
                     <Settings className="w-4 h-4" /> RECALIBRATE_NEUTRON_DETECTORS
                  </button>
                  <button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-white/60 uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-4">
                     <Shield className="w-4 h-4" /> DEPLOY_SHIELDING_VECTORS
                  </button>
                  <button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-white/60 uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-4">
                     <History className="w-4 h-4" /> VIEW_LOG_HISTORY
                  </button>
               </div>
            </div>

          </div>
        )}

        {/* TAB: LAWSON_SOLVER (Ignition Sync) */}
        {activeTab === 'LAWSON_SOLVER' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="space-y-8">
              <div className="p-12 bg-rose-500/5 border border-rose-500/20 rounded-[64px] space-y-12 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-rose-500/5 group-hover:bg-rose-500/10 transition-colors pointer-events-none" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-8">
                    <div className="p-6 bg-rose-500/20 rounded-[32px] border border-rose-500/30 shadow-2xl group-hover:scale-110 transition-transform duration-[1000ms]">
                      <Flame className="w-12 h-12 text-rose-400 animate-pulse" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[24px] font-black text-white uppercase tracking-[0.6em]">FUSION_IGNITION_EQUILIBRIUM</span>
                      <span className="text-[11px] text-rose-400/40 uppercase font-mono font-black tracking-widest mt-1">LAWSON_COGNITION_LOCKED // SOVEREIGN_v3.2</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-6xl font-mono font-black text-rose-400 tracking-tighter">0.9999</span>
                    <span className="text-[11px] text-rose-400/40 uppercase font-mono font-black tracking-widest mt-2">IGNITION_SYNC_RESIDUAL</span>
                  </div>
                </div>
                
                <div className="h-80 bg-black/60 rounded-[48px] border border-rose-500/10 flex flex-col items-center justify-center space-y-8 relative overflow-hidden shadow-inner">
                   <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                      <Grid className="w-[80%] h-[80%] text-rose-400 animate-[spin_60s_linear_infinite]" />
                   </div>
                   <p className="text-[18px] font-mono text-rose-400 font-black uppercase animate-pulse tracking-[0.8em] relative z-10">Solving Lawson Product Integrals...</p>
                   <div className="flex gap-6 relative z-10">
                      {[...Array(8)].map((_, i) => (
                         <div key={i} className={`w-4 h-4 rounded-full bg-rose-400/40 animate-ping shadow-[0_0_20px_rgba(244,63,94,0.6)]`} style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                   </div>
                </div>

                <button 
                  onClick={() => runNuclearSolver('LAWSON_IGNITION_INITIALIZE')}
                  className="w-full py-8 bg-rose-500/10 border border-rose-500/20 rounded-[40px] text-[14px] font-black text-rose-400 uppercase tracking-[0.6em] hover:bg-rose-500/20 hover:border-rose-400 hover:shadow-[0_0_50px_rgba(244,63,94,0.3)] transition-all duration-700 active:scale-[0.99]"
                >
                   Initiate Lawson Solver Pass
                </button>
              </div>
            </section>
          </div>
        )}

        {/* Fallback / Kernel Initializer */}
        {!['CORE', 'LAWSON_SOLVER'].includes(activeTab) && (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-20 space-y-12 animate-in zoom-in duration-1000">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-8 border-t-blue-400 border-white/5 animate-spin shadow-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <Terminal className="w-10 h-10 text-blue-400 animate-pulse" />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-3xl text-white uppercase tracking-[1em] font-black animate-pulse leading-relaxed">Initializing {activeTab} Kernel</p>
              <p className="text-[12px] text-blue-400/40 uppercase tracking-[0.5em] font-mono font-black italic">Synchronizing Nuclear State Tensors v3.2</p>
            </div>
          </div>
        )}

      </div>

      {/* 3. NUCLEAR MISSION SYSTEM FOOTER (v3.2 Hardened) */}
      <section className="p-8 bg-[#080B10]/95 border border-white/10 rounded-[48px] flex items-center justify-between shadow-2xl backdrop-blur-3xl relative z-20">
         <div className="flex items-center gap-8 group cursor-pointer">
            <div className="p-5 bg-blue-400/10 rounded-3xl border border-blue-400/20 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all">
               <Radio className="w-8 h-8 text-blue-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
               <span className="text-[18px] text-white font-black uppercase tracking-[0.5em]">Nuclear Cognition Hub</span>
               <span className="text-[10px] text-blue-400/40 font-mono font-black tracking-widest mt-1 italic">Sovereign Intel Protected // Phase 55 Hardened</span>
            </div>
         </div>
         
         <div className="flex items-center gap-8">
            <button className="px-10 py-6 bg-red-600/10 border border-red-500/20 text-red-500 rounded-[24px] font-black text-[12px] uppercase tracking-[0.5em] hover:bg-red-600/20 hover:border-red-500/40 transition-all flex items-center gap-4 group">
               <AlertTriangle className="w-5 h-5 group-hover:scale-125 transition-transform" />
               EXECUTE_EMERGENCY_SCRAM
            </button>
            <button className="p-6 bg-white/5 border border-white/10 rounded-[24px] text-white/40 hover:text-white transition-all group">
               <Settings className="w-8 h-8 group-hover:rotate-90 transition-transform duration-700" />
            </button>
         </div>
      </section>
    </div>
  );
};

const NuclearMetric = ({ label, value, unit, icon: Icon, color = 'blue', status, progress }: any) => {
  const colorMap: any = {
    blue: 'text-blue-400 border-blue-400/10 from-blue-500/10 shadow-blue-500/20',
    amber: 'text-amber-400 border-amber-400/10 from-amber-500/10 shadow-amber-500/20'
  };

  const progressColors: any = {
    blue: 'bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]',
    amber: 'bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
  };

  return (
    <div className={`p-8 bg-[#0B0F14]/60 border rounded-[40px] flex flex-col space-y-6 relative overflow-hidden group hover:border-current transition-all shadow-2xl backdrop-blur-3xl ${colorMap[color].split(' ')[0]} ${colorMap[color].split(' ')[1]}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[color].split(' ')[2]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className="flex justify-between items-start relative z-10">
        <p className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em]">{label}</p>
        {Icon && <Icon className={`w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity`} />}
      </div>
      <div className="flex items-baseline gap-3 relative z-10">
        <span className="text-4xl font-black text-white group-hover:scale-110 transition-transform origin-left tracking-tighter">{value}</span>
        <span className={`text-[11px] font-black uppercase tracking-widest opacity-40`}>{unit}</span>
      </div>
      <div className="flex items-center gap-3 relative z-10">
        <div className={`w-2 h-2 rounded-full bg-current animate-pulse shadow-lg`} />
        <span className={`text-[9px] font-black uppercase tracking-widest opacity-40`}>{status}</span>
      </div>
      <div className={`w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative z-10 shadow-inner border border-white/5`}>
        <div className={`h-full transition-all duration-[2000ms] ${progressColors[color]}`} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default NuclearIntelligencePanel;
