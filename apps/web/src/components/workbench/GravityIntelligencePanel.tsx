'use client';

import React, { useState } from 'react';
import { 
  Globe, Rocket, Navigation, Cpu, Activity, Zap, 
  Settings, Target, TrendingUp, Layers, Atom,
  Telescope, ShieldCheck, AlertTriangle, Radio,
  Compass, Magnet, Sun
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const GravityIntelligencePanel = () => {
  const { gravityState, updateOrbitalManeuver, updateRelativity } = useEngineeringStore();
  const [activeTab, setActiveTab] = useState<'ORBITS' | 'RELATIVITY' | 'NBODY' | 'MAPPING'>('ORBITS');

  const { field, orbitalElements, relativity, nBody } = gravityState;

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. GRAVITY TABS */}
      <div className="flex bg-[#0B0F14] border-b border-[#adc6ff]/10 overflow-x-auto custom-scrollbar">
        {[
          { id: 'ORBITS', label: 'Astrodynamics', icon: Rocket },
          { id: 'RELATIVITY', label: 'Relativity', icon: Atom },
          { id: 'NBODY', label: 'N-Body', icon: Sun },
          { id: 'MAPPING', label: 'Mapping', icon: Globe }
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
        
        {/* TAB 1: ORBITAL MECHANICS (Astrodynamics) */}
        {activeTab === 'ORBITS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Orbital Element Registry</h3>
                <div className="grid grid-cols-2 gap-3">
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Semimajor Axis (a)</p>
                      <p className="text-xl font-mono font-bold text-[#f0f4ff]">{orbitalElements.semimajorAxis_km.toLocaleString()} km</p>
                   </div>
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Eccentricity (e)</p>
                      <p className="text-xl font-mono font-bold text-[#f0f4ff]">{orbitalElements.eccentricity.toFixed(5)}</p>
                   </div>
                </div>

                <div className="p-4 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-[9px] text-[#adc6ff]/40 uppercase font-bold tracking-widest">Keplerian Elements</span>
                      <Target className="w-4 h-4 text-blue-400" />
                   </div>
                   <div className="grid grid-cols-3 gap-2">
                      <div className="p-2 bg-[#080B10] rounded-xl border border-[#adc6ff]/5 text-center">
                         <p className="text-[7px] text-[#adc6ff]/40 uppercase">Inc</p>
                         <p className="text-[10px] font-mono text-[#f0f4ff] font-bold">{orbitalElements.inclination_deg}°</p>
                      </div>
                      <div className="p-2 bg-[#080B10] rounded-xl border border-[#adc6ff]/5 text-center">
                         <p className="text-[7px] text-[#adc6ff]/40 uppercase">AoP</p>
                         <p className="text-[10px] font-mono text-[#f0f4ff] font-bold">{orbitalElements.argPeriapsis_deg}°</p>
                      </div>
                      <div className="p-2 bg-[#080B10] rounded-xl border border-[#adc6ff]/5 text-center">
                         <p className="text-[7px] text-[#adc6ff]/40 uppercase">Anomaly</p>
                         <p className="text-[10px] font-mono text-[#f0f4ff] font-bold">{orbitalElements.trueAnomaly_deg}°</p>
                      </div>
                   </div>
                </div>
             </section>

             <button className="w-full py-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[9px] text-blue-100 font-bold uppercase tracking-widest hover:bg-blue-500/20 transition-all flex items-center justify-center gap-2">
                <Navigation className="w-3 h-3" /> Compute Hohmann Transfer
             </button>
          </div>
        )}

        {/* TAB 2: GENERAL RELATIVITY (Spacetime) */}
        {activeTab === 'RELATIVITY' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-indigo-400/40 uppercase tracking-[0.2em]">Spacetime Curvature ($G_{\mu\nu}$)</h3>
                <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-end">
                      <div className="space-y-1">
                         <p className="text-[8px] text-indigo-400/60 uppercase">Curvature Metric</p>
                         <p className="text-xl font-mono font-bold text-indigo-100">{relativity.spacetimeCurvature.toExponential(2)}</p>
                      </div>
                      <Atom className="w-6 h-6 text-indigo-400/20 animate-spin-slow" />
                   </div>
                   <div className="p-3 bg-[#0B0F14] border border-indigo-500/10 rounded-xl flex justify-between items-center">
                      <span className="text-[9px] text-indigo-400 font-bold uppercase">Time Dilation Factor</span>
                      <span className="text-[12px] font-mono text-indigo-100">{relativity.timeDilationFactor.toFixed(10)}</span>
                   </div>
                </div>
             </section>

             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-indigo-400/40 uppercase tracking-[0.2em]">Relativistic Visualizer</h3>
                <div className="h-32 bg-[#080B10] border border-indigo-500/20 rounded-2xl relative overflow-hidden flex items-center justify-center">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
                   <div className="relative w-full h-full">
                      <svg className="w-full h-full opacity-30">
                         <defs>
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                               <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#6366f1" strokeWidth="0.5" />
                            </pattern>
                         </defs>
                         <rect width="100%" height="100%" fill="url(#grid)" />
                         <circle cx="50%" cy="50%" r="4" fill="#6366f1" className="animate-pulse" />
                      </svg>
                   </div>
                   <p className="absolute bottom-2 text-[8px] text-indigo-400/40 font-mono uppercase">Geodesic Deviation Active</p>
                </div>
             </section>
          </div>
        )}

        {/* TAB 3: N-BODY DYNAMICS */}
        {activeTab === 'NBODY' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-amber-400/40 uppercase tracking-[0.2em]">Multi-Body System Stability</h3>
                <div className="p-4 bg-amber-400/5 border border-amber-400/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <Sun className="w-4 h-4 text-amber-400" />
                         <span className="text-[10px] font-bold text-amber-100 uppercase">Celestial Bodies: {nBody.activeBodies}</span>
                      </div>
                      <span className="text-[12px] font-mono font-bold text-amber-400">{(nBody.stabilityIndex * 100).toFixed(2)}%</span>
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between text-[8px] text-amber-400/40 uppercase font-bold">
                         <span>Perturbation Score</span>
                         <span>{(nBody.perturbationScore * 100).toFixed(1)}%</span>
                      </div>
                      <div className="h-1 bg-amber-400/10 rounded-full overflow-hidden">
                         <div className="h-full bg-amber-400" style={{ width: `${nBody.perturbationScore * 100}%` }} />
                      </div>
                   </div>
                </div>
             </section>

             <section className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl flex items-start gap-3">
                <Activity className="w-4 h-4 text-blue-400 shrink-0" />
                <p className="text-[10px] text-blue-100/60 font-mono italic">
                   AI Recommendation: Lunar gravity assist window opens in 42h. Fuel savings: 23%.
                </p>
             </section>
          </div>
        )}

        {/* TAB 4: GRAVITY MAPPING */}
        {activeTab === 'MAPPING' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-emerald-400/40 uppercase tracking-[0.2em]">Local G-Potential Field</h3>
                <div className="p-4 bg-emerald-400/5 border border-emerald-400/20 rounded-2xl space-y-4">
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-emerald-400/10 rounded-xl">
                         <p className="text-[8px] text-emerald-400/40 uppercase">Potential ($\Phi$)</p>
                         <p className="text-xs font-mono font-bold text-emerald-100">{field.potential_Jkg.toExponential(1)} J/kg</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-emerald-400/10 rounded-xl">
                         <p className="text-[8px] text-emerald-400/40 uppercase">Local Gravity</p>
                         <p className="text-xs font-mono font-bold text-emerald-100">{field.localG_mps2} m/s²</p>
                      </div>
                   </div>
                   <div className="p-3 bg-[#0B0F14] border border-emerald-400/10 rounded-xl space-y-1">
                      <div className="flex items-center gap-2 text-[9px] text-emerald-400/60 mb-2">
                         <Magnet className="w-3 h-3" /> 
                         <span>ANOMALY DETECTION</span>
                      </div>
                      <p className="text-[10px] text-emerald-100/60 font-mono leading-tight">
                         Mass concentration (Mascon) detected in Mare Imbrium. Gravity deviation: +250 mGal.
                      </p>
                   </div>
                </div>
             </section>
          </div>
        )}

      </div>

      {/* 3. SPACETIME MISSION FOOTER */}
      <div className="p-4 bg-[#adc6ff]/5 border-t border-[#adc6ff]/10 space-y-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2 text-[9px] text-blue-400 font-bold uppercase tracking-widest">
              <Zap className="w-3 h-3" /> Spacetime Cognition
           </div>
           <span className="text-[9px] text-[#adc6ff]/40 font-mono uppercase">EINSTEIN_ENGINE_ACTIVE</span>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-[#adc6ff] text-[#0B0F14] py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(173,198,255,0.2)]">
            Run N-Body Solver
          </button>
          <button className="px-4 py-2 border border-[#adc6ff]/20 rounded-xl text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GravityIntelligencePanel;
