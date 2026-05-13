'use client';

import React, { useState } from 'react';
import { 
  Move, Zap, Activity, Grid, Compass, RotateCw, Settings, 
  Target, TrendingUp, Layers, ShieldCheck, AlertTriangle,
  Waves, BarChart3, Binary, Box, Maximize, MousePointer2,
  Wind, Map, ArrowUpRight, Share2
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const SpatialIntelligencePanel = () => {
  const { spatialState, updateVectors, updateTransformations, updateFields } = useEngineeringStore();
  const [activeTab, setActiveTab] = useState<'ALGEBRA' | 'TRANSFORMS' | 'FIELDS' | 'DYNAMICS'>('ALGEBRA');

  const { vectors, transformations, fields, tensors, dynamics } = spatialState;

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. SPATIAL TABS */}
      <div className="flex bg-[#0B0F14] border-b border-[#adc6ff]/10 overflow-x-auto custom-scrollbar">
        {[
          { id: 'ALGEBRA', label: 'Algebra', icon: Binary },
          { id: 'TRANSFORMS', label: 'Transforms', icon: RotateCw },
          { id: 'FIELDS', label: 'Fields', icon: Wind },
          { id: 'DYNAMICS', label: 'Dynamics', icon: Activity }
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
        
        {/* TAB 1: VECTOR ALGEBRA */}
        {activeTab === 'ALGEBRA' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Active Vector $\vec{v}$</h3>
                <div className="grid grid-cols-3 gap-2">
                   {['X', 'Y', 'Z'].map((axis, i) => (
                     <div key={axis} className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                        <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">{axis}</p>
                        <p className="text-xl font-mono font-bold text-[#f0f4ff]">{vectors.activeVector_v[i]}</p>
                     </div>
                   ))}
                </div>

                <div className="p-4 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-[9px] text-[#adc6ff]/40 uppercase font-bold tracking-widest">Analytical Operations</span>
                      <Binary className="w-4 h-4 text-blue-400" />
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#080B10] border border-[#adc6ff]/5 rounded-xl text-center">
                         <p className="text-[7px] text-[#adc6ff]/40 uppercase mb-1">Magnitude</p>
                         <p className="text-xs font-mono text-[#adc6ff] font-bold">{vectors.magnitude}</p>
                      </div>
                      <div className="p-3 bg-[#080B10] border border-[#adc6ff]/5 rounded-xl text-center">
                         <p className="text-[7px] text-[#adc6ff]/40 uppercase mb-1">Dot Product</p>
                         <p className="text-xs font-mono text-emerald-400 font-bold">{vectors.dotProduct}</p>
                      </div>
                   </div>
                   <div className="p-3 bg-[#080B10] border border-[#adc6ff]/5 rounded-xl flex justify-between items-center">
                      <span className="text-[9px] text-[#adc6ff]/40 uppercase font-bold">Cross Product $\vec{n}$</span>
                      <span className="text-xs font-mono text-amber-400 font-bold">[{vectors.crossProduct_n.join(', ')}]</span>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 2: COORDINATE TRANSFORMS */}
        {activeTab === 'TRANSFORMS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-indigo-400/40 uppercase tracking-[0.2em]">Coordinate Frame Alignment</h3>
                <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <RotateCw className="w-4 h-4 text-indigo-400" />
                         <span className="text-[10px] font-bold text-indigo-100 uppercase">Active Frame</span>
                      </div>
                      <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest">{transformations.activeFrame}</span>
                   </div>
                   <div className="grid grid-cols-3 gap-1">
                      {transformations.rotationMatrix.flat().map((val, i) => (
                        <div key={i} className="p-2 bg-[#0B0F14] border border-indigo-500/10 rounded text-center">
                           <span className="text-[9px] font-mono text-indigo-100">{val.toFixed(1)}</span>
                        </div>
                      ))}
                   </div>
                   <div className="p-3 bg-[#080B10] border border-indigo-500/10 rounded-xl flex justify-between items-center">
                      <p className="text-[8px] text-indigo-400/40 uppercase">Quaternion ($q$)</p>
                      <p className="text-[10px] font-mono text-indigo-100/60">[{transformations.quaternion_q.join(', ')}]</p>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 3: VECTOR FIELDS */}
        {activeTab === 'FIELDS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-emerald-400/40 uppercase tracking-[0.2em]">Flow & Force Fields</h3>
                <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-end">
                      <div className="space-y-1">
                         <p className="text-[8px] text-emerald-400/60 uppercase">Field Intensity</p>
                         <p className="text-xl font-mono font-bold text-emerald-100">{fields.velocityFieldIntensity} U</p>
                      </div>
                      <Wind className="w-6 h-6 text-emerald-400/20" />
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-emerald-500/10 rounded-xl">
                         <p className="text-[8px] text-emerald-400/40 uppercase">Divergence ($\nabla \cdot \vec{F}$)</p>
                         <p className="text-xs font-mono font-bold text-emerald-100">{fields.divergence}</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-emerald-500/10 rounded-xl">
                         <p className="text-[8px] text-emerald-400/40 uppercase">Curl ($\nabla \times \vec{F}$)</p>
                         <p className="text-xs font-mono font-bold text-emerald-100">[{fields.curl.join(', ')}]</p>
                      </div>
                   </div>
                </div>
             </section>

             <section className="p-4 bg-[#0B0F14] border border-emerald-500/10 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                   <Share2 className="w-4 h-4 text-emerald-400" />
                   <span className="text-[9px] text-emerald-400/40 uppercase font-bold">Streamline Mapping</span>
                </div>
                <div className="h-24 bg-[#080B10] border border-emerald-500/10 rounded-xl relative overflow-hidden flex items-center justify-center">
                   <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full">
                         <defs>
                            <pattern id="field" width="40" height="40" patternUnits="userSpaceOnUse">
                               <path d="M 0 20 Q 20 0 40 20" fill="none" stroke="#10b981" strokeWidth="1" />
                            </pattern>
                         </defs>
                         <rect width="100%" height="100%" fill="url(#field)" className="animate-pulse" />
                      </svg>
                   </div>
                   <p className="text-[7px] text-emerald-400/40 font-mono uppercase tracking-widest">Active Streamlines Tracking</p>
                </div>
             </section>
          </div>
        )}

        {/* TAB 4: SPATIAL DYNAMICS */}
        {activeTab === 'DYNAMICS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-blue-400/40 uppercase tracking-[0.2em]">Motion Vector Analytics</h3>
                <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl space-y-4">
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-blue-100 uppercase tracking-widest flex items-center gap-2">
                         <ArrowUpRight className="w-4 h-4" /> Acceleration $\vec{a}$
                      </span>
                      <span className="text-[12px] font-mono font-bold text-blue-400">[{dynamics.acceleration_ms2.join(', ')}] m/s²</span>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-blue-500/10 rounded-xl">
                         <p className="text-[8px] text-blue-400/40 uppercase font-bold">Torque $\vec{\tau}$</p>
                         <p className="text-xs font-mono font-bold text-blue-100">[{dynamics.torque_Nm.join(', ')}] Nm</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-blue-500/10 rounded-xl">
                         <p className="text-[8px] text-blue-400/40 uppercase font-bold">Angular Mom.</p>
                         <p className="text-xs font-mono font-bold text-blue-100">[{dynamics.angularMomentum_kgm2s.join(', ')}]</p>
                      </div>
                   </div>
                </div>
             </section>

             <section className="p-3 bg-indigo-500/5 border border-indigo-500/10 rounded-xl flex items-start gap-3">
                <Target className="w-4 h-4 text-indigo-400 shrink-0" />
                <p className="text-[10px] text-indigo-100/60 font-mono italic">
                   AI Recommendation: optimize force vector distribution to reduce rotational instability during high-load maneuver.
                </p>
             </section>
          </div>
        )}

      </div>

      {/* 3. SPATIAL INTELLIGENCE FOOTER */}
      <div className="p-4 bg-[#adc6ff]/5 border-t border-[#adc6ff]/10 space-y-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2 text-[9px] text-blue-400 font-bold uppercase tracking-widest">
              <Move className="w-3 h-3" /> Spatial Cognition
           </div>
           <span className="text-[9px] text-[#adc6ff]/40 font-mono uppercase">GEOMETRY_SOLVER_v7</span>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-[#adc6ff] text-[#0B0F14] py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(173,198,255,0.2)]">
            Transform Frame
          </button>
          <button className="px-4 py-2 border border-[#adc6ff]/20 rounded-xl text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpatialIntelligencePanel;
