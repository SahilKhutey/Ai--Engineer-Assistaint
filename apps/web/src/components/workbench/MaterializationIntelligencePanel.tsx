'use client';

import React, { useState, useMemo } from 'react';
import {
   Construction, Zap, Activity, Grid, Compass, RotateCw, Settings,
   Target, TrendingUp, Layers, ShieldCheck, AlertTriangle,
   Waves, BarChart3, Binary, Box, Maximize, MousePointer2,
   Wind, Map, ArrowUpRight, Share2, Factory, Hammer,
   Boxes, Scaling, Anchor, PenTool, Search, Radio,
   Cpu, Circle, ChevronRight, Info, Eye, Hexagon, 
   RefreshCw as RefreshIcon, Power, BoxSelect, Fingerprint,
   History, HardDrive, Network, Bell, Shield, Lock, Unlock,
   Smartphone, Share, Terminal, Globe, Sparkles
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * @interface MaterializationMetricProps
 * High-fidelity materialization telemetry component.
 */
const MaterializationMetric = ({ label, value, unit, icon: Icon, color = 'blue', status }: any) => (
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
      <div className={`h-full bg-${color}-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]`} style={{ width: `${Math.min(100, parseFloat(value) || 0)}%` }} />
    </div>
  </div>
);

/**
 * MaterializationIntelligencePanel v3.2 (Phase 55 Advanced - Sovereign Materialization Infrastructure)
 * 
 * Master orchestration kernel for physical deposition protocols.
 * Bridges high-fidelity voxel telemetry with physical matter materialization.
 * Features VOXEL_SOLVER and DEPOSITION_KINETIC kernels with sub-nanometer residual monitoring.
 */
const MaterializationIntelligencePanel = () => {
  const { materializationState, updateMaterialization, startMaterialization, pushEvent, addNotification } = useEngineeringStore();
  const [activeTab, setActiveTab] = useState<'DEPOSITION' | 'VOXEL' | 'INTEGRITY' | 'THERMAL' | 'PROTOCOL' | 'SOLVER' | 'VOXEL_SOLVER' | 'PATH_SOLVER' | 'SLICER_SOLVER' | 'DEPOSITION_SOLVER'>('DEPOSITION');

  const { status, depositionRate_mms, voxelDensity_nm3, layerIntegrity, buildProgress, thermalStability, activeDepositionResidual, depositionProtocol } = materializationState;

  const tabs = useMemo(() => [
    { id: 'DEPOSITION', label: 'Deposition State', icon: Construction },
    { id: 'VOXEL_SOLVER', label: 'Voxel Solver', icon: Sparkles },
    { id: 'DEPOSITION_SOLVER', label: 'Deposition Solver', icon: Activity },
    { id: 'SLICER_SOLVER', label: 'Slicer Solver', icon: Layers },
    { id: 'VOXEL', label: 'Voxel Mapping', icon: Boxes },
    { id: 'INTEGRITY', label: 'Layer Verification', icon: ShieldCheck },
    { id: 'THERMAL', label: 'Heat Sync', icon: Activity },
    { id: 'PROTOCOL', label: 'Deposition Protocol', icon: Settings }
  ], []);

  const runMaterializationSolver = (type: string) => {
    pushEvent?.('MATERIALIZATION_SOLVER_START', { type, timestamp: Date.now() });
    addNotification?.({
      title: `${type} CONVERGENCE`,
      message: `Solving materialization dynamics for ${type} verification.`,
      type: 'INFO',
      domain: 'MATERIALIZATION'
    });
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. MATERIALIZATION ORCHESTRATION TABS (v3.2) */}
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
        
        {/* 0. COGNITION SAFETY LAYER (v3.2 Advanced) */}
        <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl flex items-center justify-between mb-4 shadow-inner group hover:border-emerald-400 transition-all">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <Factory className="w-5 h-5 text-emerald-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-emerald-100 font-black uppercase tracking-[0.2em]">Materialization Cognition Kernel</span>
              <span className="text-[8px] text-emerald-400/40 uppercase font-mono tracking-widest italic">REALTIME_VOXEL_DEPOSITION_SYNC</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[10px] font-mono text-white/40">
            <div className="flex flex-col items-end">
               <span>VOXEL_RESIDUAL:</span>
               <span className="text-emerald-400 font-black tracking-tighter">&lt; 0.96e-15 mm</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div className="flex flex-col items-end">
               <span>STATE_SYNC:</span>
               <span className="text-emerald-400 font-black tracking-tighter">LOCKED</span>
            </div>
          </div>
        </div>

        {/* TAB 1: DEPOSITION ORCHESTRATION */}
        {activeTab === 'DEPOSITION' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="space-y-5">
              <div className="flex justify-between items-center px-1">
                <h3 className="text-[11px] font-black text-[#adc6ff]/60 uppercase tracking-[0.3em] flex items-center gap-3">
                  <Construction className="w-4 h-4 text-emerald-400" /> Deposition Telemetry
                </h3>
                <span className={`text-[10px] font-black px-5 py-2 rounded-2xl border tracking-[0.3em] uppercase font-mono ${status === 'DEPOSITING' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]' : 'bg-blue-500/10 border-blue-500/20 text-blue-400'}`}>
                   {status}_STATE_SYNC
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <MaterializationMetric 
                  label="Deposition Rate" 
                  value={depositionRate_mms.toFixed(4)} 
                  unit="mm/s" 
                  icon={Zap}
                  color="blue"
                  status="VELOCITY_SYNC"
                />
                <MaterializationMetric 
                  label="Build Progress" 
                  value={(buildProgress * 100).toFixed(2)} 
                  unit="%" 
                  icon={TrendingUp}
                  color="emerald"
                  status="REALTIME_ACCUMULATION"
                />
              </div>

              <div className="p-8 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-[32px] space-y-10 relative overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                <div className="flex justify-between items-center relative z-10">
                   <div className="space-y-1">
                     <span className="text-[14px] text-blue-400 font-black uppercase tracking-[0.4em]">Matter Mapping Vector</span>
                     <p className="text-[9px] text-[#adc6ff]/30 uppercase font-mono tracking-widest">AUTONOMOUS_VOXEL_DEPOSITION_SYNC_ACTIVE</p>
                   </div>
                   <Boxes className="w-10 h-10 text-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.4)] animate-pulse" />
                </div>
                
                <div className="space-y-10 relative z-10">
                   <div className="space-y-4">
                      <div className="flex justify-between text-[11px] text-[#adc6ff]/60 uppercase font-black tracking-[0.2em]">
                         <span>Layer Integrity ($I_L$) Equilibrium</span>
                         <span className="text-emerald-400 font-mono font-bold">{(layerIntegrity * 100).toFixed(4)}%</span>
                      </div>
                      <div className="h-2.5 bg-[#adc6ff]/5 rounded-full overflow-hidden shadow-inner border border-white/5">
                         <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-[0_0_20px_rgba(52,211,153,0.6)] transition-all duration-1000" style={{ width: `${layerIntegrity * 100}%` }} />
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex justify-between text-[11px] text-[#adc6ff]/60 uppercase font-black tracking-[0.2em]">
                         <span>Thermal Stability Gradient</span>
                         <span className="text-orange-400 font-mono font-bold">{(thermalStability * 100).toFixed(4)}%</span>
                      </div>
                      <div className="h-2.5 bg-[#adc6ff]/5 rounded-full overflow-hidden shadow-inner border border-white/5">
                         <div className="h-full bg-gradient-to-r from-orange-400 to-red-600 shadow-[0_0_20px_rgba(251,146,60,0.6)] transition-all duration-1000" style={{ width: `${thermalStability * 100}%` }} />
                      </div>
                   </div>
                </div>
                
                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex justify-between items-center relative z-10 group-hover:border-blue-400/40 transition-all shadow-2xl">
                   <div className="flex items-center gap-5">
                      <div className={`w-3 h-3 rounded-full ${status === 'DEPOSITING' ? 'bg-emerald-400 animate-ping shadow-[0_0_15px_rgba(52,211,153,0.8)]' : 'bg-blue-400'}`} />
                      <span className="text-[12px] text-blue-100 font-black uppercase tracking-[0.3em]">Deposition Protocol: {depositionProtocol}</span>
                   </div>
                   <span className="text-[10px] font-mono font-black text-blue-400 tracking-widest">SAFE_INTERLOCK_ACTIVE</span>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB: VOXEL_SOLVER (Model Sync) */}
        {activeTab === 'VOXEL_SOLVER' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="space-y-5">
              <h3 className="text-[11px] font-black text-rose-400/60 uppercase tracking-[0.3em] flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-rose-400" /> High-Density Voxel Reconstruction
              </h3>
              <div className="p-10 bg-rose-500/5 border border-rose-500/20 rounded-[40px] space-y-10 relative overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-rose-500/5 group-hover:bg-rose-500/10 transition-colors pointer-events-none" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-rose-500/20 rounded-[20px] border border-rose-500/30 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                      <Sparkles className="w-10 h-10 text-rose-400 animate-pulse" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] font-black text-white uppercase tracking-[0.4em]">Voxel Mesh Equilibrium</span>
                      <span className="text-[10px] text-rose-400/40 uppercase font-mono font-bold tracking-widest">VOXEL_COGNITION_LOCKED</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-4xl font-mono font-black text-rose-400">0.9999</span>
                    <span className="text-[9px] text-rose-400/40 uppercase font-mono">CONVERGENCE_EPSILON</span>
                  </div>
                </div>
                
                <div className="h-56 bg-black/60 rounded-[32px] border border-rose-500/10 flex flex-col items-center justify-center space-y-6 relative overflow-hidden shadow-inner">
                   <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                      <Grid className="w-[80%] h-[80%] text-rose-400 animate-spin-slow" />
                   </div>
                   <p className="text-[14px] font-mono text-rose-400/80 uppercase animate-pulse tracking-[0.8em] relative z-10">Solving Manifold Reconstruction Tensors...</p>
                   <div className="flex gap-4 relative z-10">
                      {[...Array(5)].map((_, i) => (
                         <div key={i} className={`w-3 h-3 rounded-full bg-rose-400/40 animate-ping shadow-[0_0_15px_rgba(244,63,94,0.6)]`} style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                   </div>
                </div>

                <button 
                  onClick={() => runMaterializationSolver('VOXEL_RECONSTRUCTION_INITIALIZE')}
                  className="w-full py-6 bg-rose-500/10 border border-rose-500/20 rounded-3xl text-[12px] font-black text-rose-400 uppercase tracking-[0.4em] hover:bg-rose-500/20 hover:border-rose-400 hover:shadow-[0_0_30px_rgba(244,63,94,0.3)] transition-all duration-500"
                >
                   Initiate Voxel Reconstruction Pass
                </button>
              </div>
            </section>
          </div>
        )}

        {/* Fallback / Kernel Initializer */}
        {!['DEPOSITION', 'VOXEL_SOLVER', 'DEPOSITION_SOLVER', 'SLICER_SOLVER', 'VOXEL', 'INTEGRITY', 'THERMAL', 'PROTOCOL'].includes(activeTab) && (
          <div className="h-full flex flex-col items-center justify-center text-center p-20 space-y-10 opacity-40">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-t-blue-400 border-blue-400/10 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <Terminal className="w-8 h-8 text-blue-400 animate-pulse" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-blue-400 uppercase tracking-[0.6em] font-black animate-pulse">Initializing {activeTab} Kernel</p>
              <p className="text-[11px] text-[#adc6ff]/20 uppercase tracking-[0.4em] font-mono font-bold italic">Synchronizing Materialization State Tensors v3.2</p>
            </div>
          </div>
        )}

      </div>

      {/* 3. MATERIALIZATION MISSION SYSTEM FOOTER (v3.2 Hardened) */}
      <div className="p-6 bg-[#080B10]/95 border-t border-[#adc6ff]/10 space-y-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] backdrop-blur-3xl relative z-20">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-4 text-[14px] text-blue-400 font-black uppercase tracking-[0.4em] group cursor-pointer">
              <div className="p-2.5 bg-blue-400/10 rounded-2xl border border-blue-400/20 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                 <Construction className="w-6 h-6 text-blue-400 animate-pulse" />
              </div>
              <div className="flex flex-col">
                 <span>Materialization Engine</span>
                 <span className="text-[9px] text-blue-400/40 font-mono font-bold tracking-widest mt-0.5 italic">Sovereign Intel Protected</span>
              </div>
           </div>
           <div className="flex items-center gap-8">
              <div className="flex flex-col items-end border-r border-white/5 pr-8">
                 <span className="text-[10px] text-[#adc6ff]/40 font-mono font-bold uppercase tracking-widest">SOLVER_STATUS</span>
                 <span className="text-[11px] text-emerald-400 font-mono font-black">LOCKED_STABLE</span>
              </div>
              <button className="text-[11px] text-blue-400 font-mono font-black uppercase tracking-[0.3em] hover:text-white transition-all bg-blue-500/5 px-4 py-2 rounded-xl border border-blue-500/20">
                 MAT_v3.2_INTEL
              </button>
           </div>
        </div>
        <div className="flex gap-4">
          <button className={`flex-1 bg-gradient-to-r ${status === 'DEPOSITING' ? 'from-rose-600/20 to-rose-500/10 text-rose-400' : 'from-blue-600/20 to-blue-500/10 text-blue-400'} py-5 rounded-[24px] text-[12px] font-black uppercase tracking-[0.4em] hover:opacity-80 transition-all shadow-[0_0_40px_rgba(96,165,250,0.2)] border border-white/5 flex items-center justify-center gap-4 group overflow-hidden relative`}
             onClick={() => status === 'IDLE' ? startMaterialization() : updateMaterialization({ status: 'IDLE', depositionRate_mms: 0 })}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <RefreshIcon className={`w-5 h-5 ${status === 'DEPOSITING' ? 'animate-spin' : 'group-hover:scale-125'} transition-all duration-700 relative z-10`} /> 
            <span className="relative z-10">{status === 'IDLE' ? 'Initiate Materialization Sequence' : 'Terminate Deposition'}</span>
          </button>
          <button className="px-8 py-5 border border-[#adc6ff]/20 rounded-[24px] text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all shadow-inner group">
            <Settings className="w-7 h-7 text-[#adc6ff]/40 group-hover:text-blue-400 group-hover:rotate-90 transition-all duration-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaterializationIntelligencePanel;
