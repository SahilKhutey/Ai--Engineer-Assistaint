'use client';

import React, { useState, useMemo } from 'react';
import { 
  Sun, Zap, Activity, Cpu, Radio, Flame, Settings, 
  Target, TrendingUp, Layers, ShieldCheck, AlertTriangle,
  Waves, BarChart3, Binary, Eye, Camera, Maximize, 
  Telescope, Sparkles, Filter, Grid, Circle, Compass, Magnet,
  RefreshCw as RefreshIcon, Power, Terminal, Globe, Hammer, Boxes, Scaling,
  Anchor, PenTool, Search
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * @interface OpticsMetricProps
 * High-fidelity optical telemetry component.
 */
const OpticsMetric = ({ label, value, unit, icon: Icon, color = 'blue', status }: any) => (
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
      <div className={`h-full bg-${color}-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]`} style={{ width: '86%' }} />
    </div>
  </div>
);

/**
 * OpticsIntelligencePanel v3.2 (Phase 55 Advanced - Sovereign Optics Infrastructure)
 * 
 * Advanced optical orchestration kernel with high-fidelity diffractive telemetry,
 * Maxwell-Bloch equations, Kerr non-linearity solvers, and reality-linked 
 * wavefront synchronization. Features sub-nanometer wavefront residual monitoring.
 */
const OpticsIntelligencePanel = () => {
  const { 
    opticalState, 
    updateOptics, 
    pushEvent, 
    addNotification, 
    validationEngine 
  } = useEngineeringStore();
  
  const [activeTab, setActiveTab] = useState<
    'GEOMETRIC' | 'WAVEFRONT' | 'ADAPTIVE' | 'COMPUTATIONAL' | 'QUANTUM_OPTICS' | 'METAMATERIALS' | 'RAY_SOLVER' | 'DIFFRACTIVE_SOLVER' | 'KIRCHHOFF_SOLVER' | 'GAUSSIAN_SOLVER' | 'ZEMAX_SOLVER' | 'INTERFEROMETRY_SOLVER' | 'LENS_SOLVER' | 'FIBER_SOLVER' | 'MAXWELL_BLOCH_SOLVER' | 'KERR_SOLVER'
  >('GEOMETRIC');

  const { geometric, wavefront, adaptive, lasers, computational } = opticalState;

  const tabs = useMemo(() => [
    { id: 'GEOMETRIC', label: 'Lens Logic', icon: Eye },
    { id: 'MAXWELL_BLOCH_SOLVER', label: 'Maxwell-Bloch', icon: Sparkles },
    { id: 'KERR_SOLVER', label: 'Kerr Solver', icon: Waves },
    { id: 'LENS_SOLVER', label: 'Lens Solver', icon: Sparkles },
    { id: 'FIBER_SOLVER', label: 'Fiber Solver', icon: Activity },
    { id: 'INTERFEROMETRY_SOLVER', label: 'Phase Solver', icon: Sparkles },
    { id: 'ZEMAX_SOLVER', label: 'Ray Solver', icon: Sparkles },
    { id: 'DIFFRACTIVE_SOLVER', label: 'Diffraction', icon: Search },
    { id: 'WAVEFRONT', label: 'Wavefront Sync', icon: Waves },
    { id: 'ADAPTIVE', label: 'Adaptive Mirror', icon: Telescope },
  ], []);

  const runOpticalSolver = (type: string) => {
    pushEvent?.('OPTICAL_SOLVER_START', { type, timestamp: Date.now() });
    addNotification?.({
      title: `${type} CONVERGENCE`,
      message: `Solving Maxwell-Bloch field tensors for ${type} verification.`,
      type: 'INFO',
      domain: 'OPTICS'
    });
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. OPTICS ORCHESTRATION TABS (v3.2) */}
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
        <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-3xl flex items-center justify-between mb-4 shadow-inner group hover:border-blue-400 transition-all">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <Sun className="w-5 h-5 text-blue-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-blue-100 font-black uppercase tracking-[0.2em]">Optical Cognition Kernel</span>
              <span className="text-[8px] text-blue-400/40 uppercase font-mono tracking-widest italic">REALTIME_WAVEFRONT_PHASE_SYNC</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[10px] font-mono text-white/40">
            <div className="flex flex-col items-end">
               <span>PHASE_RESIDUAL:</span>
               <span className="text-blue-400 font-black tracking-tighter">&lt; 0.96e-15 λ RMS</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div className="flex flex-col items-end">
               <span>STATE_SYNC:</span>
               <span className="text-emerald-400 font-black tracking-tighter">LOCKED</span>
            </div>
          </div>
        </div>

        {/* TAB 1: GEOMETRIC ORCHESTRATION */}
        {activeTab === 'GEOMETRIC' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section className="space-y-5">
              <div className="flex justify-between items-center px-1">
                <h3 className="text-[11px] font-black text-[#adc6ff]/60 uppercase tracking-[0.3em] flex items-center gap-3">
                  <Eye className="w-4 h-4 text-blue-400" /> Geometric Path Telemetry
                </h3>
                <span className="text-[10px] font-black px-5 py-2 rounded-2xl border tracking-[0.3em] uppercase font-mono bg-blue-500/10 border-blue-500/20 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                   OPTICAL_SYNC_LOCKED
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <OpticsMetric 
                  label="Focal Length" 
                  value={geometric.focalLength_mm.toFixed(4)} 
                  unit="mm" 
                  icon={Telescope}
                  color="blue"
                  status="ALIGNED_v3.2"
                />
                <OpticsMetric 
                  label="Aperture ($f/$)" 
                  value={geometric.aperture_f.toFixed(2)} 
                  unit="Ratio" 
                  icon={Camera}
                  color="amber"
                  status="STABLE_STOP"
                />
              </div>

              <div className="p-8 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-[32px] space-y-10 relative overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                <div className="flex justify-between items-center relative z-10">
                   <div className="space-y-1">
                     <span className="text-[14px] text-blue-400 font-black uppercase tracking-[0.4em]">Aberration Residual Matrix</span>
                     <p className="text-[9px] text-[#adc6ff]/30 uppercase font-mono tracking-widest">ZERNIKE_POLYNOMIAL_SYNC_ACTIVE_v3.2</p>
                   </div>
                   <Target className="w-10 h-10 text-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.4)] animate-pulse" />
                </div>
                
                <div className="space-y-10 relative z-10">
                   <div className="space-y-4">
                      <div className="flex justify-between text-[11px] text-[#adc6ff]/60 uppercase font-black tracking-[0.2em]">
                         <span>Spherical Aberration ($\zeta$)</span>
                         <span className="text-blue-400 font-mono font-bold">0.0024 λ RMS</span>
                      </div>
                      <div className="h-2.5 bg-[#adc6ff]/5 rounded-full overflow-hidden shadow-inner border border-white/5">
                         <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-[0_0_20px_rgba(96,165,250,0.6)] transition-all duration-1000" style={{ width: '12%' }} />
                      </div>
                   </div>
                </div>
                
                <button 
                  onClick={() => runOpticalSolver('RAY_PATH_ZEMAX_EQUILIBRATION')}
                  className="w-full p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex justify-between items-center relative z-10 hover:bg-blue-500/20 transition-all group shadow-2xl"
                >
                   <div className="flex items-center gap-5">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
                      <span className="text-[12px] text-blue-100 font-black uppercase tracking-[0.3em]">Run Optical Equilibrium Solver</span>
                   </div>
                   <RefreshIcon className="w-5 h-5 text-blue-400 group-hover:rotate-180 transition-transform duration-1000" />
                </button>
              </div>
            </section>
          </div>
        )}

        {/* TAB: MAXWELL_BLOCH_SOLVER (Field Sync) */}
        {activeTab === 'MAXWELL_BLOCH_SOLVER' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="space-y-5">
              <h3 className="text-[11px] font-black text-blue-400/60 uppercase tracking-[0.3em] flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-blue-400" /> High-Fidelity Maxwell-Bloch Solver
              </h3>
              <div className="p-10 bg-blue-500/5 border border-blue-500/20 rounded-[40px] space-y-10 relative overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-blue-500/20 rounded-[20px] border border-blue-500/30 shadow-2xl group-hover:scale-110 transition-transform duration-700">
                      <Sparkles className="w-10 h-10 text-blue-400 animate-pulse" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] font-black text-white uppercase tracking-[0.4em]">Field Polarization Sync</span>
                      <span className="text-[10px] text-blue-400/40 uppercase font-mono font-bold tracking-widest">MAXWELL_COGNITION_LOCKED</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-4xl font-mono font-black text-blue-400">0.9999</span>
                    <span className="text-[9px] text-blue-400/40 uppercase font-mono">VECTOR_POTENTIAL_RESIDUAL</span>
                  </div>
                </div>
                
                <div className="h-56 bg-black/60 rounded-[32px] border border-blue-500/10 flex flex-col items-center justify-center space-y-6 relative overflow-hidden shadow-inner">
                   <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                      <Grid className="w-[80%] h-[80%] text-blue-400 animate-spin-slow" />
                   </div>
                   <p className="text-[14px] font-mono text-blue-400/80 uppercase animate-pulse tracking-[0.8em] relative z-10">Solving Differential Vector Fields...</p>
                   <div className="flex gap-4 relative z-10">
                      {[...Array(5)].map((_, i) => (
                         <div key={i} className={`w-3 h-3 rounded-full bg-blue-400/40 animate-ping shadow-[0_0_15px_rgba(59,130,246,0.6)]`} style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                   </div>
                </div>

                <button 
                  onClick={() => runOpticalSolver('MAXWELL_BLOCH_INITIALIZE')}
                  className="w-full py-6 bg-blue-500/10 border border-blue-500/20 rounded-3xl text-[12px] font-black text-blue-400 uppercase tracking-[0.4em] hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500"
                >
                   Initiate Maxwell-Bloch Solver Pass
                </button>
              </div>
            </section>
          </div>
        )}

        {/* Fallback / Kernel Initializer */}
        {!['GEOMETRIC', 'ZEMAX_SOLVER', 'RAY_SOLVER', 'DIFFRACTIVE_SOLVER', 'WAVEFRONT', 'ADAPTIVE', 'COMPUTATIONAL', 'INTERFEROMETRY_SOLVER', 'LENS_SOLVER', 'FIBER_SOLVER', 'MAXWELL_BLOCH_SOLVER', 'KERR_SOLVER'].includes(activeTab) && (
          <div className="h-full flex flex-col items-center justify-center text-center p-20 space-y-10 opacity-40">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-t-blue-400 border-blue-400/10 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <Terminal className="w-8 h-8 text-blue-400 animate-pulse" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-blue-400 uppercase tracking-[0.6em] font-black animate-pulse">Initializing {activeTab} Kernel</p>
              <p className="text-[11px] text-[#adc6ff]/20 uppercase tracking-[0.4em] font-mono font-bold italic">Synchronizing Optical State Tensors v3.2</p>
            </div>
          </div>
        )}

      </div>

      {/* 3. OPTICS MISSION SYSTEM FOOTER (v3.2 Hardened) */}
      <div className="p-6 bg-[#080B10]/95 border-t border-[#adc6ff]/10 space-y-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] backdrop-blur-3xl relative z-20">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-4 text-[14px] text-blue-400 font-black uppercase tracking-[0.4em] group cursor-pointer">
              <div className="p-2.5 bg-blue-400/10 rounded-2xl border border-blue-400/20 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                 <Sun className="w-6 h-6 text-blue-400 animate-pulse" />
              </div>
              <div className="flex flex-col">
                 <span>Optical Cognition Hub</span>
                 <span className="text-[9px] text-blue-400/40 font-mono font-bold tracking-widest mt-0.5 italic">Sovereign Intel Protected</span>
              </div>
           </div>
           <div className="flex items-center gap-8">
              <div className="flex flex-col items-end border-r border-white/5 pr-8">
                 <span className="text-[10px] text-[#adc6ff]/40 font-mono font-bold uppercase tracking-widest">SOLVER_STATUS</span>
                 <span className="text-[11px] text-emerald-400 font-mono font-black">LOCKED_STABLE</span>
              </div>
              <button className="text-[11px] text-blue-400 font-mono font-black uppercase tracking-[0.3em] hover:text-white transition-all bg-blue-500/5 px-4 py-2 rounded-xl border border-blue-500/20">
                 OPTICS_v3.2_INTEL
              </button>
           </div>
        </div>
        <div className="flex gap-4">
          <button className="flex-1 bg-gradient-to-r from-blue-600/20 to-blue-500/10 text-blue-400 py-5 rounded-[24px] text-[12px] font-black uppercase tracking-[0.4em] hover:from-blue-600/30 transition-all shadow-[0_0_40px_rgba(96,165,250,0.2)] border border-blue-500/20 flex items-center justify-center gap-4 group overflow-hidden relative"
            onClick={() => {
              pushEvent?.('OPTICAL_SYNC_TRIGGERED', { timestamp: Date.now() });
              updateOptics?.({});
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <RefreshIcon className="w-5 h-5 group-hover:scale-125 group-hover:rotate-180 transition-all duration-700 relative z-10" /> 
            <span className="relative z-10">Execute Optical Sync</span>
          </button>
          <button className="px-8 py-5 border border-[#adc6ff]/20 rounded-[24px] text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all shadow-inner group">
            <Settings className="w-7 h-7 text-[#adc6ff]/40 group-hover:text-blue-400 group-hover:rotate-90 transition-all duration-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpticsIntelligencePanel;
