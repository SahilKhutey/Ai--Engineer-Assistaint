'use client';

import React, { useState } from 'react';
import { 
  Sun, Zap, Activity, Cpu, Radio, Flame, Settings, 
  Target, TrendingUp, Layers, ShieldCheck, AlertTriangle,
  Waves, BarChart3, Binary, Eye, Camera, Maximize, 
  Telescope, Sparkles, Filter, Grid
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const OpticsIntelligencePanel = () => {
  const { opticalState, updateOptics, updateAdaptiveOptics, updateComputationalOptics } = useEngineeringStore();
  const [activeTab, setActiveTab] = useState<'GEOMETRIC' | 'WAVEFRONT' | 'ADAPTIVE' | 'COMPUTATIONAL'>('GEOMETRIC');

  const { geometric, wavefront, adaptive, lasers, computational } = opticalState;

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. OPTICS TABS */}
      <div className="flex bg-[#0B0F14] border-b border-[#adc6ff]/10 overflow-x-auto custom-scrollbar">
        {[
          { id: 'GEOMETRIC', label: 'Geometric', icon: Eye },
          { id: 'WAVEFRONT', label: 'Physical', icon: Waves },
          { id: 'ADAPTIVE', label: 'Adaptive', icon: Telescope },
          { id: 'COMPUTATIONAL', label: 'Neural', icon: Binary }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`
              flex-none px-6 py-3 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-widest transition-all
              ${activeTab === tab.id ? 'text-[#adc6ff] bg-[#adc6ff]/5 border-b-2 border-[#adc6ff]' : 'text-[#adc6ff]/30 hover:text-[#adc6ff]/60'}
            `}
          >
            <tab.icon className="w-3 h-3" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
        
        {/* TAB 1: GEOMETRIC OPTICS */}
        {activeTab === 'GEOMETRIC' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Lens & Path Telemetry</h3>
                <div className="grid grid-cols-2 gap-3">
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Aperture (f/)</p>
                      <p className="text-xl font-mono font-bold text-[#f0f4ff]">{geometric.aperture_f}</p>
                   </div>
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Focal Length</p>
                      <p className="text-xl font-mono font-bold text-[#f0f4ff]">{geometric.focalLength_mm} mm</p>
                   </div>
                </div>

                <div className="p-4 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-[9px] text-[#adc6ff]/40 uppercase font-bold tracking-widest">Aberration Mapping</span>
                      <Target className="w-4 h-4 text-blue-400" />
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#080B10] border border-[#adc6ff]/5 rounded-xl text-center">
                         <p className="text-[7px] text-[#adc6ff]/40 uppercase mb-1">Index ($n$)</p>
                         <p className="text-xs font-mono text-[#adc6ff] font-bold">{geometric.refractiveIndex}</p>
                      </div>
                      <div className="p-3 bg-[#080B10] border border-[#adc6ff]/5 rounded-xl text-center">
                         <p className="text-[7px] text-[#adc6ff]/40 uppercase mb-1">Distortion</p>
                         <p className="text-xs font-mono text-amber-400 font-bold">{geometric.distortionIndex}</p>
                      </div>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 2: PHYSICAL & WAVEFRONT OPTICS */}
        {activeTab === 'WAVEFRONT' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-indigo-400/40 uppercase tracking-[0.2em]">Wavefront Phase Analytics</h3>
                <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-end">
                      <div className="space-y-1">
                         <p className="text-[8px] text-indigo-400/60 uppercase">RMS Wavefront Error</p>
                         <p className="text-xl font-mono font-bold text-indigo-100">{wavefront.rmsError_nm} nm</p>
                      </div>
                      <Waves className="w-6 h-6 text-indigo-400/20 animate-pulse" />
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-indigo-500/10 rounded-xl">
                         <p className="text-[8px] text-indigo-400/40 uppercase">Coherence</p>
                         <p className="text-xs font-mono font-bold text-indigo-100">{(wavefront.coherence_pct * 100).toFixed(1)}%</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-indigo-500/10 rounded-xl">
                         <p className="text-[8px] text-indigo-400/40 uppercase">Diff. Limit</p>
                         <p className="text-xs font-mono font-bold text-indigo-100">{wavefront.diffractionLimit}λ</p>
                      </div>
                   </div>
                </div>
             </section>

             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-indigo-400/40 uppercase tracking-[0.2em]">Phase Visualization</h3>
                <div className="h-32 bg-[#080B10] border border-indigo-500/20 rounded-2xl relative overflow-hidden flex items-center justify-center">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
                   <svg className="w-full h-full opacity-20">
                      <defs>
                         <pattern id="waves" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="2" fill="#6366f1" />
                         </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#waves)" className="animate-pulse" />
                   </svg>
                   <p className="absolute bottom-2 text-[7px] text-indigo-400/40 font-mono uppercase tracking-widest">Interferometric mapping active</p>
                </div>
             </section>
          </div>
        )}

        {/* TAB 3: ADAPTIVE OPTICS */}
        {activeTab === 'ADAPTIVE' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-emerald-400/40 uppercase tracking-[0.2em]">Wavefront Correction Status</h3>
                <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <ShieldCheck className="w-4 h-4 text-emerald-400" />
                         <span className="text-[10px] font-bold text-emerald-100 uppercase">Correction Active</span>
                      </div>
                      <span className="text-[14px] font-mono font-bold text-emerald-400">{(adaptive.correctionFactor * 100).toFixed(1)}%</span>
                   </div>
                   <div className="h-1 bg-emerald-400/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" style={{ width: `${adaptive.correctionFactor * 100}%` }} />
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-emerald-500/10 rounded-xl">
                         <p className="text-[8px] text-emerald-400/40 uppercase">Mirror Def</p>
                         <p className="text-xs font-mono font-bold text-emerald-100">{(adaptive.mirrorDeformation * 100).toFixed(1)}%</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-emerald-500/10 rounded-xl">
                         <p className="text-[8px] text-emerald-400/40 uppercase">Atmos Noise</p>
                         <p className="text-xs font-mono font-bold text-emerald-100">{(adaptive.atmosphericNoise * 100).toFixed(1)}%</p>
                      </div>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 4: COMPUTATIONAL & NEURAL OPTICS */}
        {activeTab === 'COMPUTATIONAL' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-blue-400/40 uppercase tracking-[0.2em]">Neural Image Reconstruction</h3>
                <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl space-y-4">
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-blue-100 uppercase tracking-widest flex items-center gap-2">
                         <Binary className="w-4 h-4" /> Super Resolution
                      </span>
                      <span className="text-[12px] font-mono font-bold text-blue-400">{computational.superResolution.toFixed(1)}x</span>
                   </div>
                   <div className="p-3 bg-[#0B0F14] border border-blue-500/10 rounded-xl flex justify-between items-center">
                      <p className="text-[8px] text-blue-400/40 uppercase font-bold">Reconstruction Qual</p>
                      <p className="text-sm font-mono font-bold text-blue-100">{(computational.reconstructionQuality * 100).toFixed(1)}%</p>
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between text-[8px] text-blue-400/40 uppercase font-bold">
                         <span>Neural Denoising</span>
                         <span>{(computational.neuralDenoiseLevel * 100).toFixed(0)}%</span>
                      </div>
                      <div className="h-1 bg-blue-500/10 rounded-full overflow-hidden">
                         <div className="h-full bg-blue-500" style={{ width: `${computational.neuralDenoiseLevel * 100}%` }} />
                      </div>
                   </div>
                </div>
             </section>

             <section className="p-3 bg-indigo-500/5 border border-indigo-500/10 rounded-xl flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                <p className="text-[10px] text-indigo-100/60 font-mono italic">
                   AI Recommendation: increase aspherical correction to reduce edge aberration at wide field angles.
                </p>
             </section>
          </div>
        )}

      </div>

      {/* 3. OPTICS INTELLIGENCE FOOTER */}
      <div className="p-4 bg-[#adc6ff]/5 border-t border-[#adc6ff]/10 space-y-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2 text-[9px] text-blue-400 font-bold uppercase tracking-widest">
              <Sun className="w-3 h-3" /> Optical Cognition
           </div>
           <span className="text-[9px] text-[#adc6ff]/40 font-mono uppercase">ADAPTIVE_ENGINE_v9</span>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-[#adc6ff] text-[#0B0F14] py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(173,198,255,0.2)]">
            Execute Correction
          </button>
          <button className="px-4 py-2 border border-[#adc6ff]/20 rounded-xl text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpticsIntelligencePanel;
