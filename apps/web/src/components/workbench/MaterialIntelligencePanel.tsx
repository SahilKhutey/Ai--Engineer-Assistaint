'use client';

import React, { useState } from 'react';
import { 
  Database, Search, TrendingUp, Info, 
  AlertTriangle, ShieldCheck, Zap, Thermometer,
  Layers, Settings, ChevronRight, Activity, Grid3X3, ArrowUpRight
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const MaterialIntelligencePanel = () => {
  const { materialIntelligence, updateCompositePly, updateMicrostructure } = useEngineeringStore();
  const [activeTab, setActiveTab] = useState<'PROPERTIES' | 'MICROSTRUCTURE' | 'COMPOSITE'>('PROPERTIES');

  const material = materialIntelligence.activeMaterialData;
  const { microstructure, compositeStack } = materialIntelligence;

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. COMPONENT TABS */}
      <div className="flex bg-[#0B0F14] border-b border-[#adc6ff]/10">
        {[
          { id: 'PROPERTIES', label: 'Properties', icon: Database },
          { id: 'MICROSTRUCTURE', label: 'Microstructure', icon: Grid3X3 },
          { id: 'COMPOSITE', label: 'Composites', icon: Layers }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`
              flex-1 py-3 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-widest transition-all
              ${activeTab === tab.id ? 'text-[#adc6ff] bg-[#adc6ff]/5 border-b-2 border-[#adc6ff]' : 'text-[#adc6ff]/30 hover:text-[#adc6ff]/60'}
            `}
          >
            <tab.icon className="w-3 h-3" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
        
        {/* TAB 1: CORE PROPERTIES */}
        {activeTab === 'PROPERTIES' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h1 className="text-sm font-bold text-[#f0f4ff] uppercase tracking-tight">{material?.name}</h1>
                    <p className="text-[9px] text-[#adc6ff]/40 uppercase font-mono italic">Primary Structural Alloy</p>
                  </div>
                  <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Young\'s Modulus', value: (material?.youngs_modulus / 1e9).toFixed(1), unit: 'GPa' },
                    { label: 'Yield Strength', value: (material?.yield_strength / 1e6).toFixed(0), unit: 'MPa' },
                    { label: 'Density', value: material?.density, unit: 'kg/m³' },
                    { label: 'Thermal Cond.', value: material?.thermal_conductivity, unit: 'W/m·K' }
                  ].map((p, idx) => (
                    <div key={idx} className="p-3 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-xl space-y-1 group hover:border-[#adc6ff]/30 transition-all">
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold tracking-tighter">{p.label}</p>
                      <div className="flex items-end gap-1">
                        <span className="text-xs font-mono font-bold text-[#f0f4ff]">{p.value}</span>
                        <span className="text-[8px] text-[#adc6ff]/30 font-mono mb-0.5">{p.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-red-400/40 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Activity className="w-3 h-3" /> Fatigue Intelligence
                </h3>
                <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-2xl space-y-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[8px] text-red-400/60 uppercase">Predicted Life</p>
                      <p className="text-sm font-mono font-bold text-red-100">{materialIntelligence.fatigueLifeCycles?.toLocaleString()}</p>
                    </div>
                    <div className="text-right text-[8px] text-red-100/40 uppercase">Cycles Remaining</div>
                  </div>
                  <div className="h-1.5 bg-red-500/10 rounded-full overflow-hidden">
                     <div className="h-full bg-red-400 w-3/4 animate-pulse" />
                  </div>
                </div>
              </section>
          </div>
        )}

        {/* TAB 2: MICROSTRUCTURE ENGINE */}
        {activeTab === 'MICROSTRUCTURE' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-indigo-400/40 uppercase tracking-[0.2em]">Grain Map Visualization</h3>
                <div className="h-40 bg-[#080B10] border border-indigo-400/20 rounded-2xl relative overflow-hidden flex items-center justify-center">
                   {/* Procedural Grain Background Mock */}
                   <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #818cf8 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                   <div className="z-10 text-center">
                      <Grid3X3 className="w-12 h-12 text-indigo-400/20 mx-auto mb-2" />
                      <p className="text-[10px] text-indigo-400/40 uppercase font-mono italic">Grain Boundaries Verified</p>
                   </div>
                   {/* Defect Indicators */}
                   <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_red]" title="Dislocation Detected" />
                </div>
             </section>

             <section className="space-y-4">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Metallurgical Parameters</h3>
                <div className="space-y-4">
                   <div className="space-y-1">
                      <div className="flex justify-between text-[9px] text-[#adc6ff]/40 uppercase">
                         <span>Average Grain Size</span>
                         <span className="text-[#f0f4ff] font-mono">{microstructure.averageGrainSize_um} μm</span>
                      </div>
                      <input 
                        type="range" min="1" max="50" step="0.1" 
                        value={microstructure.averageGrainSize_um}
                        onChange={(e) => updateMicrostructure({ averageGrainSize_um: parseFloat(e.target.value) })}
                        className="w-full accent-indigo-400" 
                      />
                   </div>
                   <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-xl flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                      <p className="text-[10px] text-red-100/60 font-mono italic">
                        AI Detected: Potential grain boundary weakness under cyclic thermal loading.
                      </p>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 3: COMPOSITE STACKING EDITOR */}
        {activeTab === 'COMPOSITE' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-emerald-400/40 uppercase tracking-[0.2em]">Ply Stacking Sequence</h3>
                <div className="space-y-2">
                   {compositeStack.map((ply, idx) => (
                      <div key={ply.id} className="p-3 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-xl flex items-center gap-4 group hover:border-emerald-400/30 transition-all">
                         <div className="w-8 h-8 rounded bg-emerald-400/10 flex items-center justify-center text-[10px] font-bold text-emerald-400">
                            {idx + 1}
                         </div>
                         <div className="flex-1">
                            <p className="text-[10px] text-[#f0f4ff] font-mono uppercase">CFRP - Layer {idx + 1}</p>
                            <p className="text-[8px] text-[#adc6ff]/30 font-mono uppercase">{ply.thickness_mm}mm thickness</p>
                         </div>
                         <div className="flex items-center gap-2">
                            <input 
                              type="number" value={ply.angle}
                              onChange={(e) => updateCompositePly(ply.id, parseInt(e.target.value))}
                              className="w-12 bg-[#080B10] border border-[#adc6ff]/10 rounded px-1.5 py-1 text-[10px] text-center font-mono text-emerald-400"
                            />
                            <span className="text-[10px] text-[#adc6ff]/20 font-mono">°</span>
                            <div 
                              className="w-6 h-6 border border-emerald-400/20 rounded-full flex items-center justify-center transition-transform duration-500"
                              style={{ transform: `rotate(${ply.angle}deg)` }}
                            >
                               <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
                <button className="w-full py-2 bg-emerald-400/10 border border-dashed border-emerald-400/20 rounded-xl text-[9px] text-emerald-400 uppercase font-bold tracking-widest hover:bg-emerald-400/20 transition-all">
                  + Add Composite Ply
                </button>
             </section>

             <section className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-blue-400">
                   <ShieldCheck className="w-4 h-4" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Anisotropic Stability Audit</span>
                </div>
                <p className="text-[10px] text-[#f0f4ff]/60 font-mono italic">
                   Current Stacking Sequence [0/45/-45/90]s verified for longitudinal stiffness targets.
                </p>
             </section>
          </div>
        )}

      </div>

      {/* 3. AI REASONING FOOTER */}
      <div className="p-4 bg-[#adc6ff]/5 border-t border-[#adc6ff]/10 space-y-3">
        <div className="flex items-center gap-2 text-[9px] text-blue-400 font-bold uppercase tracking-widest">
           <Zap className="w-3 h-3" /> Material Intelligence Node
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-[#adc6ff] text-[#0B0F14] py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(173,198,255,0.2)]">
            Finalize Physical Layer
          </button>
          <button className="px-4 py-2 border border-[#adc6ff]/20 rounded-xl text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaterialIntelligencePanel;
