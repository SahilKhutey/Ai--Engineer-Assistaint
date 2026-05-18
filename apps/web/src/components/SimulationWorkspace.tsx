import React, { useState, useRef } from 'react';
import { 
  Play, Square, Save, Layers, Maximize2, Cpu, 
  Activity, Zap, Info, AlertTriangle, ShieldCheck,
  Settings, Target, RefreshCw as RefreshIcon, 
  Terminal, Box, ChevronRight, Brain, Sparkles,
  Upload, FileText
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';
import SovereignViewport from './workbench/SovereignViewport';

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
 */
const SimulationWorkspace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'PARAMETERS' | 'MATERIALS' | 'COGNITION' | 'SOLVER'>('PARAMETERS');
  const { workflowState, activeDomain, runAnalysis, uploadFile, isAnalyzing } = useEngineeringStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  };

  return (
    <div className="h-full flex flex-col bg-[#05070A] overflow-hidden text-[#f0f4ff] font-sans relative antialiased">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileUpload} 
        className="hidden" 
        accept=".step,.stl,.obj,.pdf"
      />

      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      
      {/* 1. SOVEREIGN SIMULATION TOOLBAR */}
      <header className="h-[72px] w-full bg-[#080B10]/95 border-b border-[#adc6ff]/10 flex items-center justify-between px-10 z-[100] relative backdrop-blur-[50px] shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-10 relative z-10">
          <div className="flex items-center gap-4 bg-black/40 p-2 rounded-[22px] border border-white/5 shadow-inner">
            <button 
              onClick={() => runAnalysis()}
              disabled={isAnalyzing}
              className={`p-3.5 ${isAnalyzing ? 'bg-orange-500/10 border-orange-500/30' : 'bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30'} border rounded-[18px] group/btn transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95`}
            >
              <Play className={`w-5 h-5 ${isAnalyzing ? 'text-orange-400' : 'text-emerald-400'} group-hover/btn:scale-125 transition-all duration-500`} />
            </button>
            <button className="p-3.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-[18px] group/btn transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95">
              <Square className="w-5 h-5 text-rose-400 group-hover/btn:scale-125 transition-all duration-500" />
            </button>
          </div>
          <div className="h-8 w-px bg-white/5" />
          <div className="flex flex-col">
             <div className="flex items-center gap-4">
                <div className={`w-2.5 h-2.5 rounded-full ${isAnalyzing ? 'bg-orange-500' : 'bg-blue-500'} animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.8)]`} />
                <span className="text-[13px] font-black text-white uppercase tracking-[0.4em] font-mono">
                  {isAnalyzing ? 'Sovereign_Solver: Solving...' : 'Sovereign_Solver: Ready'}
                </span>
             </div>
             <span className="text-[10px] text-blue-400/30 uppercase font-mono font-black tracking-[0.3em] mt-1 italic">
               {workflowState.currentStep || 'IDLE_WAITING_FOR_INTENT'}
             </span>
          </div>
        </div>

        <div className="flex items-center gap-8 relative z-10">
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="p-4 bg-white/5 hover:bg-emerald-500/10 border border-white/10 rounded-[22px] group transition-all duration-700 shadow-2xl hover:border-emerald-500/40 hover:scale-110 active:scale-95"
          >
            <Upload className="w-6 h-6 text-[#adc6ff]/30 group-hover:text-emerald-400 transition-all duration-700" />
          </button>
          <button className="p-4 bg-white/5 hover:bg-blue-500/10 border border-white/10 rounded-[22px] group transition-all duration-700 shadow-2xl hover:border-blue-500/40 hover:scale-110 active:scale-95">
            <Save className="w-6 h-6 text-[#adc6ff]/30 group-hover:text-blue-400 transition-all duration-700" />
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden relative z-10">
        {/* Viewport */}
        <section className="flex-1 relative border-r border-[#adc6ff]/10 bg-[#000] overflow-hidden group">
          {/* Progress Overlay */}
          {isAnalyzing && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 z-[60]">
              <div 
                className="h-full bg-emerald-400 shadow-[0_0_20px_#10B981] transition-all duration-500" 
                style={{ width: `${workflowState.progress * 100}%` }} 
              />
            </div>
          )}

          <div className="absolute top-10 left-10 z-30 flex flex-col gap-6">
            <ViewportBadge label="Domain" value={activeDomain} color="blue" />
            <ViewportBadge label="Vector" value="SOVEREIGN_VON_MISES" color="emerald" />
            
            {isAnalyzing && (
              <div className="p-6 bg-[#0B0F14]/90 border border-orange-500/40 rounded-[32px] backdrop-blur-[60px] animate-pulse">
                <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest block mb-2">SOLVER_EXECUTION_LOCKED</span>
                <span className="text-sm font-mono text-white/80">{workflowState.currentStep}</span>
              </div>
            )}
          </div>

          {/* High-Fidelity 3D Viewport */}
          <div className="h-full w-full relative">
            <SovereignViewport />
          </div>
        </section>

        {/* Controls */}
        <aside className="w-[480px] bg-[#080B10] flex flex-col shadow-2xl relative z-[110] border-l border-[#adc6ff]/10">
          <nav className="flex px-8 pt-6 border-b border-[#adc6ff]/10 bg-[#adc6ff]/5 gap-2">
            {(['PARAMETERS', 'COGNITION', 'SOLVER'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === tab ? 'text-blue-400' : 'text-[#8C909F] hover:text-white'}`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />}
              </button>
            ))}
          </nav>

          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            {activeTab === 'PARAMETERS' && (
              <div className="space-y-8">
                <section>
                  <h4 className="text-[11px] font-black text-blue-400/60 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Settings className="w-4 h-4" /> Global Constraints
                  </h4>
                  <div className="p-6 bg-black/40 rounded-2xl border border-white/5 space-y-1">
                    <ParameterRow label="Mesh Resolution" value="0.94" unit="μm" status="OPTIMAL" />
                    <ParameterRow label="FOS Required" value="1.50" unit="SF" status="NASA_STD" />
                    <ParameterRow label="Convergence Tol" value="1.0e-12" unit="RMS" />
                  </div>
                </section>
                <button className="w-full py-4 bg-blue-500 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:shadow-[0_0_20px_#3b82f6] transition-all">
                  UPDATE_SYSTEM_VECTORS
                </button>
              </div>
            )}

            {activeTab === 'COGNITION' && (
              <div className="space-y-6">
                <h4 className="text-[11px] font-black text-[#FFB786] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Brain className="w-4 h-4" /> Reasoning Trace
                </h4>
                <div className="space-y-4">
                  {workflowState.eventBus.filter(e => e.type === 'REASONING_TRACE').length > 0 ? (
                    workflowState.eventBus.filter(e => e.type === 'REASONING_TRACE').map((event, i) => (
                      <div key={i} className="p-5 bg-[#FFB786]/5 border border-[#FFB786]/20 rounded-2xl animate-in slide-in-from-right-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#FFB786]" />
                          <span className="text-[9px] font-black text-[#FFB786] uppercase tracking-widest">[{event.data.agent}] Agent</span>
                        </div>
                        <p className="text-[13px] font-mono text-white/70 italic leading-relaxed">"{event.data.thought}"</p>
                      </div>
                    ))
                  ) : (
                    <div className="p-10 text-center border-2 border-dashed border-white/5 rounded-3xl">
                      <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">No reasoning traces captured. Initiating analysis to activate.</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'SOLVER' && (
              <div className="space-y-6">
                 <h4 className="text-[11px] font-black text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Solver Output
                </h4>
                <div className="bg-[#0B0E15] p-6 rounded-2xl font-mono text-[11px] text-[#8C909F] space-y-2 border border-white/5">
                  <div className="text-emerald-400">[SYSTEM] KERNEL_LOCK_SUCCESS</div>
                  <div>[SOLVER] DISCRETIZING_DOMAIN... DONE</div>
                  <div>[SOLVER] ASSEMBLING_STIFFNESS_MATRIX...</div>
                  {isAnalyzing && (
                    <div className="text-white animate-pulse">[SOLVER] SOLVING_Kx_f_SYSTEM... ITERATION {Math.floor(workflowState.progress * 100)}</div>
                  )}
                  {workflowState.progress === 1 && (
                    <div className="text-[#4CD7F6] font-bold">[SYSTEM] ANALYSIS_CONVERGED_REALITY_PERSISTENCE_LOCKED</div>
                  )}
                </div>
              </div>
            )}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default SimulationWorkspace;
