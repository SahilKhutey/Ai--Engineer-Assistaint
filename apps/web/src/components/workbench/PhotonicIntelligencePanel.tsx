'use client';

import React, { useState } from 'react';
import { 
  Sun, Zap, Activity, Cpu, Radio, Flame, Settings, 
  Target, TrendingUp, Layers, ShieldCheck, AlertTriangle,
  Waves, BarChart3, Binary, Eye, Camera, Maximize, 
  Telescope, Sparkles, Filter
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const PhotonicIntelligencePanel = () => {
  const { opticalState, updateOptics, updateSpectrum, updateSensors } = useEngineeringStore();
  const [activeTab, setActiveTab] = useState<'OPTICS' | 'SPECTRUM' | 'LASERS' | 'SENSORS'>('OPTICS');

  const { rayOptics, waveOptics, lasers, spectrum, sensors } = opticalState;

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. PHOTONIC TABS */}
      <div className="flex bg-[#0B0F14] border-b border-[#adc6ff]/10 overflow-x-auto custom-scrollbar">
        {[
          { id: 'OPTICS', label: 'Optics', icon: Eye },
          { id: 'SPECTRUM', label: 'Spectrum', icon: Sparkles },
          { id: 'LASERS', label: 'Lasers', icon: Zap },
          { id: 'SENSORS', label: 'Imaging & LiDAR', icon: Camera }
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
        
        {/* TAB 1: OPTICAL ENGINEERING (RAY & WAVE) */}
        {activeTab === 'OPTICS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Geometric Ray Tracing</h3>
                <div className="grid grid-cols-2 gap-3">
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Refractive Index ($n$)</p>
                      <p className="text-xl font-mono font-bold text-[#f0f4ff]">{rayOptics.refractiveIndex}</p>
                   </div>
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Focal Length</p>
                      <p className="text-xl font-mono font-bold text-[#f0f4ff]">{rayOptics.focalLength_mm} mm</p>
                   </div>
                </div>

                <div className="p-4 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-[9px] text-[#adc6ff]/40 uppercase font-bold tracking-widest">Wavefront Coherence</span>
                      <Waves className="w-4 h-4 text-blue-400" />
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#080B10] border border-[#adc6ff]/5 rounded-xl">
                         <p className="text-[7px] text-[#adc6ff]/40 uppercase mb-1">Wavelength</p>
                         <p className="text-xs font-mono text-[#adc6ff] font-bold">{waveOptics.wavelength_nm} nm</p>
                      </div>
                      <div className="p-3 bg-[#080B10] border border-[#adc6ff]/5 rounded-xl">
                         <p className="text-[7px] text-[#adc6ff]/40 uppercase mb-1">Coherence</p>
                         <p className="text-xs font-mono text-[#adc6ff] font-bold">{waveOptics.coherenceLength_m} m</p>
                      </div>
                   </div>
                </div>
             </section>

             <section className="p-3 bg-red-400/5 border border-red-400/20 rounded-xl flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                <p className="text-[10px] text-red-100/60 font-mono italic">
                   AI detected: optical wavefront distortion exceeds acceptable threshold. Suggesting adaptive optics recalibration.
                </p>
             </section>
          </div>
        )}

        {/* TAB 2: SPECTRUM ANALYSIS */}
        {activeTab === 'SPECTRUM' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-amber-400/40 uppercase tracking-[0.2em]">EM Spectrum Monitoring</h3>
                <div className="p-4 bg-amber-400/5 border border-amber-400/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-end">
                      <div className="space-y-1">
                         <p className="text-[8px] text-amber-400/60 uppercase">Peak Intensity</p>
                         <p className="text-xl font-mono font-bold text-amber-100">{(spectrum.peakIntensity * 100).toFixed(1)}%</p>
                      </div>
                      <Sparkles className="w-6 h-6 text-amber-400/20" />
                   </div>
                   <div className="h-20 bg-[#080B10] border border-amber-400/20 rounded-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-green-500 to-red-500 opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-around px-4">
                         {spectrum.absorptionBands.map((band, i) => (
                           <div key={i} className="w-0.5 h-full bg-[#0B0F14] opacity-80" style={{ marginLeft: `${(band/700)*100}%` }} />
                         ))}
                      </div>
                      <p className="absolute bottom-2 left-4 text-[7px] text-[#adc6ff]/40 font-mono uppercase">Absorption Bands Detected</p>
                   </div>
                   <div className="flex justify-between text-[9px] text-amber-100 font-bold uppercase tracking-widest px-1">
                      <span>Range: {spectrum.range_nm[0]}nm - {spectrum.range_nm[1]}nm</span>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 3: LASER SYSTEMS */}
        {activeTab === 'LASERS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-red-400/40 uppercase tracking-[0.2em]">Beam Diagnostics</h3>
                <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <Zap className="w-4 h-4 text-red-400" />
                         <span className="text-[10px] font-bold text-red-100 uppercase">Coherent Power</span>
                      </div>
                      <span className="text-[14px] font-mono font-bold text-red-400">{lasers.power_W} W</span>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-red-500/10 rounded-xl">
                         <p className="text-[8px] text-red-400/40 uppercase">Beam Dia</p>
                         <p className="text-xs font-mono font-bold text-red-100">{lasers.beamDiameter_mm} mm</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-red-500/10 rounded-xl">
                         <p className="text-[8px] text-red-400/40 uppercase">Pulse Width</p>
                         <p className="text-xs font-mono font-bold text-red-100">{lasers.pulseWidth_ns} ns</p>
                      </div>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 4: IMAGING & LiDAR */}
        {activeTab === 'SENSORS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-emerald-400/40 uppercase tracking-[0.2em]">Spatial Sensing Telemetry</h3>
                <div className="p-4 bg-emerald-400/5 border border-emerald-400/20 rounded-2xl space-y-4">
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest flex items-center gap-2">
                         <Maximize className="w-4 h-4" /> LiDAR Point Cloud
                      </span>
                      <span className="text-[9px] text-emerald-400/40 font-mono">{sensors.lidarPointDensity} pts/sec</span>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-emerald-400/10 rounded-xl text-center">
                         <p className="text-[8px] text-emerald-400/40 uppercase font-bold">Exposure</p>
                         <p className="text-sm font-mono font-bold text-emerald-100">{sensors.exposure_ms} ms</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-emerald-400/10 rounded-xl text-center">
                         <p className="text-[8px] text-emerald-400/40 uppercase font-bold">Res</p>
                         <p className="text-sm font-mono font-bold text-emerald-100">{sensors.depthResolution_mm} mm</p>
                      </div>
                   </div>
                </div>
             </section>

             <section className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl flex items-start gap-3">
                <Target className="w-4 h-4 text-blue-400 shrink-0" />
                <p className="text-[10px] text-blue-100/60 font-mono italic">
                   AI Recommendation: Increase anti-reflective coating efficiency to reduce optical energy loss at infrared wavelengths.
                </p>
             </section>
          </div>
        )}

      </div>

      {/* 3. PHOTONIC INTELLIGENCE FOOTER */}
      <div className="p-4 bg-[#adc6ff]/5 border-t border-[#adc6ff]/10 space-y-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2 text-[9px] text-blue-400 font-bold uppercase tracking-widest">
              <Sun className="w-3 h-3" /> Photonic Cognition
           </div>
           <span className="text-[9px] text-[#adc6ff]/40 font-mono uppercase">RAY_SOLVER_V4</span>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-[#adc6ff] text-[#0B0F14] py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(173,198,255,0.2)]">
            Execute Alignment
          </button>
          <button className="px-4 py-2 border border-[#adc6ff]/20 rounded-xl text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotonicIntelligencePanel;
