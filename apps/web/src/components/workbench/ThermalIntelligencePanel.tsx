'use client';

import React, { useState } from 'react';
import { 
  Flame, Zap, Activity, Thermometer, Wind, Sun, Settings, 
  Target, TrendingUp, Layers, ShieldCheck, AlertTriangle,
  Waves, BarChart3, Binary, Droplets, Gauge, Box, 
  ArrowUpRight, Snowflake, Power, FastForward
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const ThermalIntelligencePanel = () => {
  const { thermalState, updateThermal, updateHeatFlow, updateCombustion } = useEngineeringStore();
  const [activeTab, setActiveTab] = useState<'THERMO' | 'HEAT' | 'COMBUSTION' | 'CRYO'>('THERMO');

  const { thermodynamics, heatTransfer, combustion, cryogenics, materials } = thermalState;

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. THERMAL TABS */}
      <div className="flex bg-[#0B0F14] border-b border-[#adc6ff]/10 overflow-x-auto custom-scrollbar">
        {[
          { id: 'THERMO', label: 'Thermodynamics', icon: Box },
          { id: 'HEAT', label: 'Heat Flow', icon: Thermometer },
          { id: 'COMBUSTION', label: 'Combustion', icon: Flame },
          { id: 'CRYO', label: 'Cryogenics', icon: Snowflake }
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
        
        {/* TAB 1: THERMODYNAMICS & ENERGY BALANCE */}
        {activeTab === 'THERMO' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Energy State Analytics</h3>
                <div className="grid grid-cols-2 gap-3">
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Efficiency</p>
                      <p className="text-xl font-mono font-bold text-[#f0f4ff]">{thermodynamics.efficiency_pct}%</p>
                   </div>
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Pressure</p>
                      <p className="text-xl font-mono font-bold text-[#f0f4ff]">{thermodynamics.systemPressure_MPa} MPa</p>
                   </div>
                </div>

                <div className="p-4 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-[9px] text-[#adc6ff]/40 uppercase font-bold tracking-widest">Entropy & Balance</span>
                      <Activity className="w-4 h-4 text-blue-400" />
                   </div>
                   <div className="space-y-3">
                      <div className="space-y-1">
                         <div className="flex justify-between text-[8px] text-[#adc6ff]/60 uppercase font-bold">
                            <span>Entropy ($S$)</span>
                            <span>{thermodynamics.entropy_JK} J/K</span>
                         </div>
                         <div className="h-1 bg-[#adc6ff]/5 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-400" style={{ width: '45%' }} />
                         </div>
                      </div>
                      <div className="space-y-1">
                         <div className="flex justify-between text-[8px] text-[#adc6ff]/60 uppercase font-bold">
                            <span>Energy Balance</span>
                            <span>{thermodynamics.energyBalance_J.toExponential(1)} J</span>
                         </div>
                         <div className="h-1 bg-[#adc6ff]/5 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-400" style={{ width: '65%' }} />
                         </div>
                      </div>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 2: HEAT TRANSFER (CONDUCTION/CONVECTION/RADIATION) */}
        {activeTab === 'HEAT' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-amber-400/40 uppercase tracking-[0.2em]">Multimode Heat Flux</h3>
                <div className="p-4 bg-amber-400/5 border border-amber-400/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-end">
                      <div className="space-y-1">
                         <p className="text-[8px] text-amber-400/60 uppercase">Peak Heat Flux</p>
                         <p className="text-xl font-mono font-bold text-amber-100">{heatTransfer.peakHeatFlux_Wm2.toExponential(1)} W/m²</p>
                      </div>
                      <Sun className="w-6 h-6 text-amber-400/20 animate-pulse" />
                   </div>
                   <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 bg-[#0B0F14] border border-amber-400/10 rounded-xl text-center">
                         <p className="text-[7px] text-amber-400/40 uppercase font-bold">Cond.</p>
                         <p className="text-[10px] font-mono font-bold text-amber-100">{heatTransfer.conduction_W}W</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-amber-400/10 rounded-xl text-center">
                         <p className="text-[7px] text-amber-400/40 uppercase font-bold">Conv.</p>
                         <p className="text-[10px] font-mono font-bold text-amber-100">{heatTransfer.convection_W}W</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-amber-400/10 rounded-xl text-center">
                         <p className="text-[7px] text-amber-400/40 uppercase font-bold">Rad.</p>
                         <p className="text-[10px] font-mono font-bold text-amber-100">{heatTransfer.radiation_W}W</p>
                      </div>
                   </div>
                </div>
             </section>

             <section className="p-4 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                   <Target className="w-4 h-4 text-amber-400" />
                   <span className="text-[9px] text-[#adc6ff]/40 uppercase font-bold">Hotspot Detection</span>
                </div>
                <div className="h-2 bg-[#adc6ff]/5 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-emerald-400 via-amber-400 to-red-400" style={{ width: '85%' }} />
                </div>
                <p className="text-[8px] text-[#adc6ff]/40 font-mono text-center uppercase tracking-widest">
                   CRITICAL_GRADIENT_DETECTED_ZONE_7
                </p>
             </section>
          </div>
        )}

        {/* TAB 3: COMBUSTION & PROPULSION THERMALS */}
        {activeTab === 'COMBUSTION' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-red-400/40 uppercase tracking-[0.2em]">Combustion Dynamics</h3>
                <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <Flame className="w-4 h-4 text-red-400" />
                         <span className="text-[10px] font-bold text-red-100 uppercase">Flame Temperature</span>
                      </div>
                      <span className="text-[14px] font-mono font-bold text-red-400">{combustion.flameTemp_K} K</span>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-red-500/10 rounded-xl">
                         <p className="text-[8px] text-red-400/40 uppercase">Instability</p>
                         <p className="text-xs font-mono font-bold text-red-100">{(combustion.thermalInstability * 100).toFixed(1)}%</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-red-500/10 rounded-xl">
                         <p className="text-[8px] text-red-400/40 uppercase">Exhaust Heat</p>
                         <p className="text-xs font-mono font-bold text-red-100">{combustion.exhaustHeat_W.toExponential(1)}W</p>
                      </div>
                   </div>
                </div>
             </section>

             <section className="p-3 bg-red-400/10 border border-red-400/20 rounded-xl flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                <p className="text-[10px] text-red-100/60 font-mono italic">
                   CRITICAL WARNING: thermal load exceeds material survivability threshold. Suggesting immediate cooling injection.
                </p>
             </section>
          </div>
        )}

        {/* TAB 4: CRYOGENICS & LOW-TEMP SYSTEMS */}
        {activeTab === 'CRYO' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-blue-400/40 uppercase tracking-[0.2em]">Cryogenic Phase Stability</h3>
                <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl space-y-4">
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-blue-100 uppercase tracking-widest flex items-center gap-2">
                         <Snowflake className="w-4 h-4" /> LH2 Storage
                      </span>
                      <span className="text-[12px] font-mono font-bold text-blue-400">{cryogenics.tankTemp_K} K</span>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-blue-500/10 rounded-xl text-center">
                         <p className="text-[8px] text-blue-400/40 uppercase font-bold">Boiloff Rate</p>
                         <p className="text-sm font-mono font-bold text-blue-100">{cryogenics.boiloffRate_kgs} kg/s</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-blue-500/10 rounded-xl text-center">
                         <p className="text-[8px] text-blue-400/40 uppercase font-bold">Insulation</p>
                         <p className="text-sm font-mono font-bold text-blue-100">{(cryogenics.insulationQuality * 100).toFixed(1)}%</p>
                      </div>
                   </div>
                   <div className="p-3 bg-blue-400/10 border border-blue-400/20 rounded-xl flex justify-between items-center">
                      <span className="text-[9px] text-blue-100 font-bold uppercase tracking-widest">Superconductor</span>
                      <span className="text-[9px] font-mono font-bold text-blue-400">{cryogenics.superconductorState}</span>
                   </div>
                </div>
             </section>
          </div>
        )}

      </div>

      {/* 3. THERMAL INTELLIGENCE FOOTER */}
      <div className="p-4 bg-[#adc6ff]/5 border-t border-[#adc6ff]/10 space-y-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2 text-[9px] text-blue-400 font-bold uppercase tracking-widest">
              <Thermometer className="w-3 h-3" /> Thermal Cognition
           </div>
           <span className="text-[9px] text-[#adc6ff]/40 font-mono uppercase">HEAT_SOLVER_v5</span>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-[#adc6ff] text-[#0B0F14] py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(173,198,255,0.2)]">
            Equilibrate System
          </button>
          <button className="px-4 py-2 border border-[#adc6ff]/20 rounded-xl text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThermalIntelligencePanel;
