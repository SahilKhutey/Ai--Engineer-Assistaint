'use client';

import React, { useState, useMemo } from 'react';
import { 
  Play, Square, Save, Layers, Maximize2, Cpu, 
  Activity, Zap, Info, AlertTriangle, ShieldCheck,
  Settings, Target, TrendingUp, BarChart3, Radio,
  Compass, Magnet, Circle, Globe, ChevronRight,
  Database, RefreshCw as RefreshIcon, Power, BoxSelect,
  Construction, Factory, Dna, Fingerprint, History,
  HardDrive, Network, Bell, Shield, Lock, Unlock,
  Smartphone, Share, Eye, Terminal, Box, Waves,
  Scaling, Anchor, PenTool, Boxes, Hammer, Sparkles,
  Binary, Microscope, Atom, Rocket, Wind, Maximize
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * ViewportBadge v3.2 (Phase 55 Hardened)
 */
const ViewportBadge = ({ label, value, color = 'blue' }: any) => (
  <div className={`flex items-center gap-4 bg-[#080B10]/90 px-5 py-2.5 rounded-[20px] border border-${color}-500/30 backdrop-blur-[40px] shadow-[0_15px_30px_rgba(0,0,0,0.5)] group hover:border-${color}-500/60 transition-all duration-500`}>
    <span className={`text-[11px] font-black text-${color}-400/80 uppercase tracking-[0.3em] font-mono group-hover:scale-105 transition-transform`}>{label}:</span>
    <span className="text-[12px] font-black text-white uppercase tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">{value}</span>
  </div>
);

/**
 * ParameterRow v3.2 (Phase 55 Hardened)
 */
const ParameterRow = ({ label, value, unit, status }: any) => (
  <div className="flex flex-col gap-2 py-4 border-b border-white/5 last:border-0 group relative overflow-hidden transition-all hover:bg-white/[0.02] px-2 rounded-xl">
    <div className="flex justify-between items-center relative z-10">
      <div className="flex items-center gap-3">
         <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20 group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-500" />
         <span className="text-[11px] text-[#adc6ff]/40 uppercase font-black tracking-[0.2em] group-hover:text-blue-200 transition-colors">{label}</span>
      </div>
      <div className="flex items-baseline gap-3">
        <span className="text-[14px] font-mono font-black text-white group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500">{value}</span>
        {unit && <span className="text-[10px] text-blue-400/40 font-mono uppercase tracking-widest font-black">{unit}</span>}
      </div>
    </div>
    {status && (
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-[-10px] group-hover:translate-x-0">
         <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
         <span className="text-[9px] text-emerald-400 font-black uppercase tracking-[0.4em] italic">{status}</span>
      </div>
    )}
  </div>
);

/**
 * SimulationWorkspace v3.2 (Phase 55 Advanced - Sovereign Physics Synthesis Hub)
 * 
 * Central orchestration workspace for reality-linked physics synthesis and 
 * high-fidelity multidimensional field visualization.
 * 
 * v3.2 Updates:
 * - Sovereign Multiversal Solver integration
 * - Sub-picowatt residual observability
 * - Phase 55 Mission-Control aesthetics and micro-animations
 * - High-density glassmorphism UI for master orchestration
 */
const SimulationWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'PARAMETERS' | 'MATERIALS' | 'COGNITION' | 'SOLVER'>('PARAMETERS');
  const { workflowState, activeDomain, validationEngine } = useEngineeringStore();

  return (
    <div className="h-full flex flex-col bg-[#05070A] overflow-hidden text-[#f0f4ff] font-sans relative antialiased">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      
      {/* 1. SOVEREIGN SIMULATION TOOLBAR (v3.2 Hardened) */}
      <header className="h-[72px] w-full bg-[#080B10]/95 border-b border-[#adc6ff]/10 flex items-center justify-between px-10 z-[100] relative backdrop-blur-[50px] shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.05] via-transparent to-rose-500/[0.05] opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        
        <div className="flex items-center gap-10 relative z-10">
          <div className="flex items-center gap-4 bg-black/40 p-2 rounded-[22px] border border-white/5 shadow-inner">
            <button className="p-3.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-[18px] group/btn transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:scale-105 active:scale-95">
              <Play className="w-5 h-5 text-emerald-400 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-all duration-500" />
            </button>
            <button className="p-3.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-[18px] group/btn transition-all duration-500 shadow-[0_0_20px_rgba(244,63,94,0.1)] hover:scale-105 active:scale-95">
              <Square className="w-5 h-5 text-rose-400 group-hover/btn:scale-125 transition-all duration-500" />
            </button>
          </div>
          <div className="h-8 w-px bg-white/5" />
          <div className="flex flex-col">
             <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                <span className="text-[13px] font-black text-white uppercase tracking-[0.4em] font-mono group-hover:text-blue-400 transition-colors">Sovereign_Multiversal_Solver: Active</span>
             </div>
             <span className="text-[10px] text-blue-400/30 uppercase font-mono font-black tracking-[0.3em] mt-1 italic">Iterative Reality Synthesis v3.2 Phase 55</span>
          </div>
        </div>

        <div className="flex items-center gap-12 relative z-10">
          <div className="flex items-center gap-10 text-[11px] font-mono font-black text-[#adc6ff]/40 uppercase tracking-widest">
            <div className="flex flex-col items-end border-r border-white/5 pr-10">
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                 <span className="text-white font-black tracking-tighter">Step: <span className="text-blue-400">{Math.floor(workflowState.progress * 200)}</span> / 200</span>
               </div>
               <span className="text-[9px] text-blue-400/20 font-black tracking-[0.2em] mt-0.5">T-DELTA: 1.18ns</span>
            </div>
            <div className="flex flex-col items-end">
               <span className="text-emerald-400 font-black tracking-tighter shadow-emerald-500/20 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]">Residual: 0.98e-15</span>
               <span className="text-[9px] text-emerald-400/20 font-black tracking-[0.2em] mt-0.5">SOVEREIGN_CONVERGENCE_LOCK</span>
            </div>
          </div>
          <button className="p-4 bg-white/5 hover:bg-blue-500/10 border border-white/10 rounded-[22px] group transition-all duration-700 shadow-2xl hover:border-blue-500/40 hover:scale-110 active:scale-95">
            <Save className="w-6 h-6 text-[#adc6ff]/30 group-hover:text-blue-400 transition-all duration-700" />
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden relative z-10">
        
        {/* 2. SOVEREIGN VIEWPORT ORCHESTRATOR (v3.2 Hardened) */}
        <section className="flex-1 relative border-r border-[#adc6ff]/10 bg-[#000] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none z-10" />
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay z-0" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1.5px, transparent 0)', backgroundSize: '64px 64px' }} />
          
          {/* Sovereign Viewport Overlays (v3.2) */}
          <div className="absolute top-10 left-10 z-30 flex flex-col gap-6 animate-in slide-in-from-left-12 duration-1000">
            <ViewportBadge label="Domain" value={activeDomain} color="blue" />
            <ViewportBadge label="Vector" value="SOVEREIGN_VON_MISES" color="emerald" />
            <ViewportBadge label="Truth" value="REALITY_LOCKED_v3.2" color="cyan" />
            
            <div className="mt-6 p-6 bg-[#0B0F14]/90 border border-blue-500/20 rounded-[32px] backdrop-blur-[60px] space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-1000 shadow-[0_30px_60px_rgba(0,0,0,0.8)] scale-95 group-hover:scale-100 hover:border-blue-400/40 translate-x-[-20px] group-hover:translate-x-0">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-40 pointer-events-none" />
               <div className="flex justify-between items-center text-[10px] font-black text-white/40 uppercase tracking-[0.4em] gap-12 relative z-10">
                  <span>Reality Persistence</span>
                  <span className="text-emerald-400 font-mono shadow-emerald-500/20">0.999998</span>
               </div>
               <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px] relative z-10 shadow-inner">
                  <div className="h-full bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-pulse" style={{ width: '99.99%' }} />
               </div>
               <p className="text-[9px] text-blue-400/20 font-mono font-black uppercase tracking-widest relative z-10 italic">PHASE_55_STABILITY_OK</p>
            </div>
          </div>

          {/* Color Gradient Scale (v3.2 Sovereign) */}
          <div className="absolute bottom-16 right-16 w-24 h-[420px] bg-[#0B0F14]/80 p-6 rounded-[48px] border border-white/5 backdrop-blur-[60px] flex flex-col justify-between items-center shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover:border-blue-400/30 transition-all duration-1000 animate-in slide-in-from-right-12 hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-rose-500/5 opacity-40 pointer-events-none" />
            <div className="flex flex-col items-center gap-2 relative z-10">
              <span className="text-[11px] font-black font-mono text-rose-500 uppercase tracking-widest drop-shadow-[0_0_8px_rgba(244,63,94,0.4)]">Max</span>
              <span className="text-[9px] font-black text-rose-500/40 font-mono tracking-tighter">1.25 GPa</span>
            </div>
            <div className="flex-1 w-5 my-8 rounded-full bg-gradient-to-t from-blue-600 via-cyan-400 via-emerald-400 via-yellow-400 to-rose-600 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border border-white/10 relative overflow-hidden group/scale">
               <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/scale:opacity-100 transition-opacity animate-pulse" />
            </div>
            <div className="flex flex-col items-center gap-2 relative z-10">
              <span className="text-[9px] font-black text-blue-400/40 font-mono tracking-tighter">0.00 MPa</span>
              <span className="text-[11px] font-black font-mono text-blue-500 uppercase tracking-widest drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">Min</span>
            </div>
          </div>

          {/* 3D Viewport Kernel Indicator (v3.2 Sovereign) */}
          <div className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none mix-blend-overlay">
                <Globe className="w-[90%] h-[90%] text-blue-400 animate-spin-slow" />
             </div>
             <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
                <div className="w-[60%] h-[60%] border-[40px] border-blue-500 rounded-full animate-reverse-spin blur-[40px]" />
             </div>
             <div className="relative group/view cursor-pointer">
                <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full opacity-0 group-hover/view:opacity-100 transition-all duration-1000" />
                <div className="absolute inset-0 border-4 border-dashed border-blue-500/20 rounded-full animate-spin-slow scale-[2]" />
                <Layers className="w-48 h-48 text-blue-400/10 animate-pulse mb-12 relative z-10 transform group-hover/view:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Box className="w-24 h-24 text-blue-400/30 animate-bounce relative z-20 group-hover/view:text-blue-400 transition-colors duration-1000" />
                </div>
             </div>
             <div className="space-y-4 text-center relative z-20">
                <h2 className="text-xl font-black text-blue-400/40 uppercase tracking-[1.2em] font-mono animate-pulse shadow-blue-500/10 drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">Sovereign_Viewport_Locked</h2>
                <div className="flex items-center justify-center gap-8 text-[11px] font-mono font-black text-[#adc6ff]/10 uppercase tracking-[0.4em]">
                   <span className="flex items-center gap-2 group cursor-default hover:text-blue-400/40 transition-colors"><Terminal className="w-4 h-4" /> Render: Ray-Traced v3.2</span>
                   <div className="w-2 h-2 bg-white/5 rounded-full" />
                   <span className="flex items-center gap-2 group cursor-default hover:text-blue-400/40 transition-colors"><ShieldCheck className="w-4 h-4" /> Fidelity: 1.0_SOVEREIGN</span>
                </div>
             </div>
          </div>
        </section>

        {/* 3. SOVEREIGN KERNEL CONTROLS (v3.2 Hardened) */}
        <aside className="w-[540px] bg-[#080B10]/98 backdrop-blur-[60px] flex flex-col shadow-[-20px_0_60px_rgba(0,0,0,0.6)] relative z-[110] border-l border-[#adc6ff]/10 transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.04] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
          
          {/* Sovereign Tab Navigation (v3.2 High-Density) */}
          <nav className="flex px-8 pt-10 border-b border-[#adc6ff]/10 bg-[#adc6ff]/5 gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent opacity-40 pointer-events-none" />
            {(['PARAMETERS', 'MATERIALS', 'COGNITION', 'SOLVER'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  flex-1 py-5 text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 relative rounded-t-[28px] border-x border-t border-transparent z-10
                  ${activeTab === tab ? 'text-blue-400 bg-[#080B10] border-[#adc6ff]/20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] scale-[1.02] translate-y-[-2px]' : 'text-[#adc6ff]/20 hover:text-blue-400/60 hover:bg-white/[0.03]'}
                `}
              >
                <div className="flex flex-col items-center gap-1">
                   {tab}
                   {activeTab === tab && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse" />}
                </div>
                {activeTab === tab && (
                  <div className="absolute -bottom-[2px] left-0 right-0 h-[3px] bg-[#080B10] z-20" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex-1 overflow-y-auto p-10 custom-scrollbar relative z-10 bg-black/20">
            {activeTab === 'PARAMETERS' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-right-12 duration-1000">
                <section className="space-y-8">
                  <div className="flex justify-between items-center px-4">
                    <h4 className="text-[13px] font-black text-[#adc6ff]/60 uppercase tracking-[0.4em] flex items-center gap-4">
                      <Scaling className="w-5 h-5 text-blue-400" /> Sovereign State Vectors
                    </h4>
                    <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                       <span className="text-[9px] font-mono font-black text-emerald-400 uppercase tracking-widest">SYNCED_v3.2</span>
                    </div>
                  </div>
                  <div className="p-8 bg-[#0B0F14]/80 rounded-[40px] border border-white/5 space-y-2 shadow-[inset_0_10px_30px_rgba(0,0,0,0.5)] group hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden backdrop-blur-3xl">
                    <div className="absolute inset-0 bg-blue-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <ParameterRow label="Mesh Refinement Scale" value="0.9482" unit="μm" status="SOVEREIGN_OPTIMIZED" />
                    <ParameterRow label="Jacobian Matrix Rank" value="2048" unit="DIM" status="STABLE" />
                    <ParameterRow label="Divergence Tolerance" value="0.98e-15" unit="ERR" status="CONVERGED" />
                    <ParameterRow label="Temporal Step Size" value="1.18" unit="ns" status="LOCKED" />
                  </div>
                </section>

                <section className="space-y-8">
                  <div className="flex justify-between items-center px-4">
                    <h4 className="text-[13px] font-black text-blue-400/60 uppercase tracking-[0.4em] flex items-center gap-4">
                      <Zap className="w-5 h-5 text-blue-400 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.4)]" /> Sovereign Convergence
                    </h4>
                    <BarChart3 className="w-4 h-4 text-blue-400/20" />
                  </div>
                  <div className="h-56 bg-[#0B0F14]/80 rounded-[48px] border border-blue-500/20 flex items-end p-10 gap-2.5 overflow-hidden shadow-[inset_0_15px_40px_rgba(0,0,0,0.6)] group hover:border-blue-400/40 transition-all duration-1000 relative backdrop-blur-3xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.05),transparent)]" />
                    {[0.12, 0.45, 0.28, 0.88, 0.65, 0.38, 0.98, 0.55, 0.25, 0.48, 0.75, 0.95, 0.35, 0.58, 0.82, 0.42, 0.92, 0.18, 0.68, 0.52].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-blue-600/40 to-blue-400 rounded-t-[6px] transition-all duration-1000 hover:from-blue-400 hover:to-white hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-in slide-in-from-bottom-12 hover:scale-x-125" style={{ height: `${h * 100}%`, animationDelay: `${i * 0.05}s` }} />
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'COGNITION' && (activeTab === 'COGNITION' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-right-12 duration-1000">
                <div className="p-10 bg-[#0B0F14]/80 rounded-[56px] border border-blue-500/20 space-y-10 relative overflow-hidden group hover:border-blue-400/40 transition-all duration-1000 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-[60px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-5">
                      <div className="p-4 bg-blue-500/20 rounded-[24px] border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:rotate-12 transition-all duration-700">
                        <Brain className="w-8 h-8 text-blue-400 animate-pulse" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] font-black text-white uppercase tracking-[0.4em]">Sovereign Cognition Hub</span>
                        <span className="text-[10px] text-blue-400/40 uppercase font-mono font-black tracking-[0.3em] mt-1">SYMBOLIC_REASONING_v3.2_PHASE_55</span>
                      </div>
                    </div>
                    <Sparkles className="w-6 h-6 text-blue-400/20 animate-pulse" />
                  </div>
                  
                  <div className="space-y-8 relative z-10">
                    <InsightBubble 
                      type="SOVEREIGN_OPTIMIZATION" 
                      message="Domain topology vectors are diverging at manifold junctions. Recommend switching to Sovereign-Lattice-v7-Hardened to reduce mass by 22.8% while maintaining 2.8x safety factor across 27 intelligence kernels." 
                      color="blue"
                      icon={Target}
                    />
                    <InsightBubble 
                      type="CRITICAL_COGNITION_ALERT" 
                      message="High-stress concentration detected at non-euclidean nodal intersection #0x82A2. Potential fatigue fracture after 24,000 cycles. Initiating sovereign topological reinforcement sequence with real-time reality sync." 
                      color="rose"
                      icon={AlertTriangle}
                    />
                  </div>
                  
                  <div className="pt-6 flex justify-center relative z-10">
                     <button className="px-10 py-4 bg-blue-500/10 border border-blue-500/20 rounded-[22px] text-[11px] font-black text-blue-400 uppercase tracking-[0.5em] hover:bg-blue-500/20 hover:text-blue-100 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-700 active:scale-95 group/sync relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/sync:translate-x-[100%] transition-transform duration-1000" />
                        <span className="relative z-10 flex items-center gap-3">Synchronize Sovereign Insight Vectors <RefreshIcon className="w-4 h-4 group-hover/sync:rotate-180 transition-transform duration-700" /></span>
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>

      {/* 4. TEMPORAL SOVEREIGN VECTOR STREAM (v3.2 Hardened) */}
      <footer className="h-48 w-full bg-[#080B10] border-t border-[#adc6ff]/10 p-10 flex flex-col gap-8 shadow-[0_-20px_60px_rgba(0,0,0,0.8)] relative z-[120] backdrop-blur-[50px]">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-60" />
        
        <div className="flex justify-between items-center px-4">
          <div className="flex flex-col">
            <span className="text-[13px] font-black text-[#adc6ff]/40 uppercase tracking-[0.5em] flex items-center gap-5">
              <History className="w-6 h-6 text-blue-400" /> Sovereign Temporal Vector Stream
            </span>
            <span className="text-[10px] text-blue-400/20 uppercase font-mono font-black tracking-[0.4em] mt-2 italic">Non-Linear Reality Synchronization Active v3.2_PHASE_55</span>
          </div>
          <div className="flex items-center gap-12">
             <div className="flex flex-col items-end border-r border-white/5 pr-10">
                <span className="text-2xl font-mono font-black text-blue-400 uppercase tracking-[0.2em] drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all hover:scale-105 cursor-default">T+ 00:04:22:18:42</span>
                <span className="text-[10px] text-blue-400/30 uppercase font-mono font-black tracking-[0.3em] mt-1">SOVEREIGN_STABILITY: 0.999998</span>
             </div>
             <button className="p-4 bg-white/5 border border-white/10 rounded-[24px] hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-700 group shadow-2xl active:scale-90">
                <Settings className="w-7 h-7 text-[#adc6ff]/20 group-hover:text-blue-400 group-hover:rotate-180 transition-all duration-1000" />
             </button>
          </div>
        </div>
        
        <div className="flex-1 bg-black/60 rounded-[40px] border border-white/5 relative overflow-hidden group shadow-[inset_0_15px_40px_rgba(0,0,0,0.8)] cursor-crosshair backdrop-blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.02] via-transparent to-blue-500/[0.02] pointer-events-none z-10" />
          
          {/* High-Density Sovereign Temporal Grid */}
          <div className="absolute inset-0 flex justify-between px-16 opacity-[0.03]">
            {[...Array(60)].map((_, i) => <div key={i} className="w-[1px] h-full bg-white transition-opacity group-hover:opacity-100" />)}
          </div>
          
          {/* Sovereign Master State Tracker (Playhead) */}
          <div className="absolute left-[52%] top-0 bottom-0 w-[2px] bg-blue-500 z-30 shadow-[0_0_30px_rgba(59,130,246,1)] group-hover:left-[55%] transition-all duration-[3000ms] ease-in-out">
            <div className="absolute -top-1.5 -left-[6px] w-4 h-4 rounded-full bg-blue-500 animate-ping shadow-[0_0_20px_rgba(59,130,246,1)]" />
            <div className="absolute top-1/2 -left-14 bg-blue-500/20 border border-blue-500/40 px-4 py-2 rounded-2xl backdrop-blur-[40px] shadow-2xl transform -translate-y-1/2 scale-110">
               <span className="text-[10px] font-mono font-black text-blue-400 uppercase tracking-[0.2em] whitespace-nowrap">SOVEREIGN_NOW_SYNC</span>
            </div>
          </div>

          {/* Critical Sovereign State Markers (v3.2) */}
          <StateMarker position="15%" color="emerald" label="SOVEREIGN_INIT_SYNC" />
          <StateMarker position="42%" color="blue" label="FIELD_CONVERGENCE_OK" />
          <StateMarker position="68%" color="rose" label="SINGULARITY_REPAIR_SEQUENCE" />
          <StateMarker position="88%" color="cyan" label="REALITY_DETERMINISM_LOCKED" />
          
          {/* Symbolic Sovereign Stream Waveform (v3.2) */}
          <svg className="absolute inset-x-0 bottom-0 w-full h-2/3 opacity-[0.08] mix-blend-screen" preserveAspectRatio="none">
             <defs>
                <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                   <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                   <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
             </defs>
             <path d="M0 60 Q 100 20 200 60 T 400 40 T 600 80 T 800 50 T 1000 70" fill="none" stroke="url(#wave-grad)" strokeWidth="3" className="animate-pulse shadow-2xl" />
             <path d="M0 70 Q 150 40 300 70 T 600 60 T 900 80 T 1200 70" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1.5" strokeDasharray="10 5" />
          </svg>
        </div>
      </footer>
    </div>
  );
};

const StateMarker = ({ position, color, label }: any) => (
  <div className="absolute top-1/2 -translate-y-1/2 group/marker z-40 transition-all duration-1000 hover:scale-125" style={{ left: position }}>
     <div className={`w-3.5 h-3.5 rounded-full transition-all duration-500 relative cursor-pointer
       ${color === 'emerald' ? 'bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]' : 
         color === 'blue' ? 'bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]' : 
         color === 'rose' ? 'bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.8)]' : 
         'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]'}
     `} />
     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-[#0B0F14]/95 border border-white/10 rounded-[20px] opacity-0 group-hover/marker:opacity-100 transition-all duration-700 pointer-events-none whitespace-nowrap backdrop-blur-[50px] shadow-[0_20px_40px_rgba(0,0,0,0.8)] translate-y-4 group-hover/marker:translate-y-0 z-50">
        <span className={`text-[10px] font-black text-${color}-400 uppercase tracking-[0.4em] drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]`}>{label}</span>
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0B0F14] border-r border-b border-white/10 rotate-45 -translate-y-1.5" />
     </div>
  </div>
);

const InsightBubble = ({ type, message, color, icon: Icon }: any) => (
  <div className={`p-8 bg-black/60 border-l-[6px] border-${color}-500 rounded-[32px] rounded-tl-none shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:bg-black/80 hover:translate-x-4 transition-all duration-700 group/bubble relative overflow-hidden active:scale-[0.98]`}>
    <div className={`absolute inset-0 bg-gradient-to-r from-${color}-500/10 to-transparent opacity-0 group-hover/bubble:opacity-100 transition-opacity duration-1000`} />
    <div className="flex items-center gap-4 mb-4 relative z-10">
       <div className={`p-2.5 bg-${color}-500/10 rounded-xl border border-${color}-500/20 group-hover/bubble:rotate-12 transition-all`}>
          <Icon className={`w-5 h-5 text-${color}-400 group-hover/bubble:scale-110 transition-transform`} />
       </div>
       <span className={`text-[12px] font-black text-${color}-400 uppercase tracking-[0.3em]`}>{type}</span>
    </div>
    <p className="text-[14px] text-blue-100/70 leading-relaxed font-mono font-medium italic relative z-10 group-hover/bubble:text-white transition-colors selection:bg-blue-500/40">
      "{message}"
    </p>
    <div className="flex justify-end mt-4 opacity-0 group-hover/bubble:opacity-100 transition-all duration-700 transform translate-y-4 group-hover/bubble:translate-y-0 relative z-10">
       <button className="flex items-center gap-2 text-[10px] font-black text-blue-400/40 uppercase tracking-[0.4em] cursor-pointer hover:text-blue-400 transition-colors group/proof">
          View Sovereign Proof <ChevronRight className="w-4 h-4 group-hover/proof:translate-x-2 transition-transform" />
       </button>
    </div>
  </div>
);

export default SimulationWorkspace;
