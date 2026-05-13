'use client';

import React, { useState } from 'react';
import { 
  Zap, Flame, ShieldAlert, Activity, Settings, 
  Target, TrendingUp, Layers, ShieldCheck, AlertTriangle,
  Wind, Thermometer, Droplets, Gauge, BarChart3, Binary, Atom
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const NuclearIntelligencePanel = () => {
  const { nuclearEngine, updateNuclear } = useEngineeringStore();
  const [activeTab, setActiveTab] = useState<'CORE' | 'PLASMA' | 'COOLING' | 'SAFETY'>('CORE');

  const { type, status, fission, fusion, thermalHydraulics, shielding } = nuclearEngine;

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. NUCLEAR TABS */}
      <div className="flex bg-[#0B0F14] border-b border-[#adc6ff]/10 overflow-x-auto custom-scrollbar">
        {[
          { id: 'CORE', label: 'Reactor Core', icon: Atom },
          { id: 'PLASMA', label: 'Plasma / Flux', icon: Flame },
          { id: 'COOLING', label: 'Hydraulics', icon: Droplets },
          { id: 'SAFETY', label: 'Shielding', icon: ShieldCheck }
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
        
        {/* TAB 1: REACTOR CORE INTELLIGENCE */}
        {activeTab === 'CORE' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <div className="flex justify-between items-center">
                   <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Active Reactor State</h3>
                   <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full border ${
                     status === 'ACTIVE' ? 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400' : 
                     status === 'CRITICAL' ? 'bg-red-400/10 border-red-400/20 text-red-400 animate-pulse' : 'bg-blue-400/10 border-blue-400/20 text-blue-400'
                   }`}>
                      {status}
                   </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Type</p>
                      <p className="text-xl font-mono font-bold text-[#f0f4ff]">{type}</p>
                   </div>
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Neutron Flux</p>
                      <p className="text-xl font-mono font-bold text-[#f0f4ff]">{fission.neutronFlux.toExponential(1)}</p>
                      <span className="text-[7px] text-[#adc6ff]/30 uppercase font-mono">n/cm²·s</span>
                   </div>
                </div>

                <div className="p-4 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-[9px] text-[#adc6ff]/40 uppercase font-bold tracking-widest">Core Metrics</span>
                      <Activity className="w-4 h-4 text-[#adc6ff]/40" />
                   </div>
                   <div className="space-y-3">
                      <div className="space-y-1">
                         <div className="flex justify-between text-[8px] text-[#adc6ff]/60 uppercase font-bold">
                            <span>Reactivity ($\Delta k$)</span>
                            <span className={fission.reactivity > 0 ? 'text-amber-400' : 'text-emerald-400'}>{fission.reactivity.toFixed(4)}</span>
                         </div>
                         <div className="h-1 bg-[#adc6ff]/5 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-400" style={{ width: `${Math.abs(fission.reactivity) * 1000}%` }} />
                         </div>
                      </div>
                      <div className="space-y-1">
                         <div className="flex justify-between text-[8px] text-[#adc6ff]/60 uppercase font-bold">
                            <span>Control Rod Depth</span>
                            <span>{(fission.controlRodPosition * 100).toFixed(0)}%</span>
                         </div>
                         <div className="h-1 bg-[#adc6ff]/5 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-400" style={{ width: `${fission.controlRodPosition * 100}%` }} />
                         </div>
                      </div>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 2: PLASMA CONFINEMENT (FUSION) */}
        {activeTab === 'PLASMA' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-indigo-400/40 uppercase tracking-[0.2em]">Tokamak Confinement Stability</h3>
                <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-end">
                      <div className="space-y-1">
                         <p className="text-[8px] text-indigo-400/60 uppercase">Ion Temperature</p>
                         <p className="text-xl font-mono font-bold text-indigo-100">{fusion.plasmaTemp_keV} keV</p>
                      </div>
                      <Flame className="w-6 h-6 text-indigo-400/20 animate-pulse" />
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-indigo-500/10 rounded-xl text-center">
                         <p className="text-[8px] text-indigo-400/40 uppercase font-bold">Magnetic Field</p>
                         <p className="text-sm font-mono font-bold text-indigo-100">{fusion.magneticField_T} Tesla</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-indigo-500/10 rounded-xl text-center">
                         <p className="text-[8px] text-indigo-400/40 uppercase font-bold">Lawson Index</p>
                         <p className="text-sm font-mono font-bold text-indigo-100">{fusion.stabilityIndex}</p>
                      </div>
                   </div>
                   <div className="p-3 bg-[#080B10] border border-indigo-500/10 rounded-xl space-y-2">
                      <div className="flex justify-between text-[8px] text-indigo-400/40 uppercase font-bold">
                         <span>Confinement Time</span>
                         <span>{fusion.confinementTime_s}s</span>
                      </div>
                      <div className="h-1 bg-indigo-500/10 rounded-full overflow-hidden">
                         <div className="h-full bg-indigo-400" style={{ width: '65%' }} />
                      </div>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 3: THERMAL-HYDRAULICS (COOLING) */}
        {activeTab === 'COOLING' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-blue-400/40 uppercase tracking-[0.2em]">Thermal-Hydraulic Loop</h3>
                <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl space-y-4">
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 bg-[#080B10] border border-blue-500/10 rounded-xl text-center space-y-1">
                         <Thermometer className="w-4 h-4 text-blue-400 mx-auto" />
                         <p className="text-[8px] text-blue-400/40 uppercase">Core Temp</p>
                         <p className="text-sm font-mono font-bold text-blue-100">{thermalHydraulics.coreTemp_K} K</p>
                      </div>
                      <div className="p-4 bg-[#080B10] border border-blue-500/10 rounded-xl text-center space-y-1">
                         <Wind className="w-4 h-4 text-blue-400 mx-auto" />
                         <p className="text-[8px] text-blue-400/40 uppercase">Flow Rate</p>
                         <p className="text-sm font-mono font-bold text-blue-100">{thermalHydraulics.coolantFlow_kg_s} kg/s</p>
                      </div>
                   </div>
                   <div className="p-3 bg-[#0B0F14] border border-blue-500/10 rounded-xl flex justify-between items-center">
                      <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest">Primary Pressure</span>
                      <span className="text-[12px] font-mono font-bold text-blue-100">{thermalHydraulics.pressure_MPa} MPa</span>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 4: RADIATION SAFETY & SHIELDING */}
        {activeTab === 'SAFETY' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-emerald-400/40 uppercase tracking-[0.2em]">Radiation Attenuation Fields</h3>
                <div className="p-4 bg-emerald-400/5 border border-emerald-400/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <ShieldCheck className="w-4 h-4 text-emerald-400" />
                         <span className="text-[10px] font-bold text-emerald-100 uppercase">Shielding Status</span>
                      </div>
                      <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-widest">SECURE</span>
                   </div>
                   <div className="p-3 bg-[#0B0F14] border border-emerald-400/10 rounded-xl flex justify-between items-center">
                      <span className="text-[9px] text-emerald-400/60 uppercase font-bold">Ambient Dose</span>
                      <span className="text-[12px] font-mono font-bold text-emerald-100">{shielding.radiationDose_mSv} mSv/h</span>
                   </div>
                   <div className="p-3 bg-[#080B10] border border-emerald-400/10 rounded-xl space-y-1">
                      <p className="text-[8px] text-emerald-400/40 uppercase">Leakage Sensors</p>
                      <div className="flex items-center gap-2">
                         <div className={`w-1.5 h-1.5 rounded-full ${shielding.leakageDetection ? 'bg-red-400 animate-pulse' : 'bg-emerald-400'}`} />
                         <p className="text-[9px] text-emerald-100/60 font-mono">ALL_CHANNELS_NOMINAL</p>
                      </div>
                   </div>
                </div>
             </section>
          </div>
        )}

      </div>

      {/* 3. NUCLEAR MISSION FOOTER */}
      <div className="p-4 bg-[#adc6ff]/5 border-t border-[#adc6ff]/10 space-y-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2 text-[9px] text-blue-400 font-bold uppercase tracking-widest">
              <Zap className="w-3 h-3" /> Reactor Intelligence
           </div>
           <span className="text-[9px] text-[#adc6ff]/40 font-mono uppercase">SAFETY_PROTOCOL_V8</span>
        </div>
        <div className="flex gap-2">
          <button 
            className="flex-1 bg-red-500/10 text-red-400 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:bg-red-500/20 border border-red-500/20 transition-all"
            onClick={() => updateNuclear({ status: 'SHUTDOWN' })}
          >
            Emergency SCRAM
          </button>
          <button className="px-4 py-2 border border-[#adc6ff]/20 rounded-xl text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NuclearIntelligencePanel;
