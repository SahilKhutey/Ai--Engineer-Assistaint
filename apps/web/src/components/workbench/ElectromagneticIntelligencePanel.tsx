'use client';

import React, { useState } from 'react';
import { 
  Zap, Activity, Cpu, Radio, Flame, Settings, 
  Target, TrendingUp, Layers, ShieldCheck, AlertTriangle,
  Waves, Battery, Gauge, BarChart3, Binary, Magnet
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const ElectromagneticIntelligencePanel = () => {
  const { electricalState, updateElectrical, updatePower, updateRF } = useEngineeringStore();
  const [activeTab, setActiveTab] = useState<'CIRCUITS' | 'FIELDS' | 'POWER' | 'RF'>('CIRCUITS');

  const { circuits, emFields, powerSystems, rfSystems, plasma } = electricalState;

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. EM TABS */}
      <div className="flex bg-[#0B0F14] border-b border-[#adc6ff]/10 overflow-x-auto custom-scrollbar">
        {[
          { id: 'CIRCUITS', label: 'Circuits', icon: Cpu },
          { id: 'FIELDS', label: 'EM Fields', icon: Waves },
          { id: 'POWER', label: 'Power', icon: Zap },
          { id: 'RF', label: 'RF & Plasma', icon: Radio }
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
        
        {/* TAB 1: CIRCUIT INTELLIGENCE */}
        {activeTab === 'CIRCUITS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Realtime Circuit Telemetry</h3>
                <div className="grid grid-cols-2 gap-3">
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Voltage (V)</p>
                      <p className="text-2xl font-mono font-bold text-[#f0f4ff]">{circuits.voltage_V}V</p>
                      <span className="text-[8px] text-yellow-400/40 font-mono">RMS_STABLE</span>
                   </div>
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Current (I)</p>
                      <p className="text-2xl font-mono font-bold text-[#f0f4ff]">{circuits.current_A}A</p>
                      <span className="text-[8px] text-blue-400/40 font-mono">LOAD: {circuits.power_W}W</span>
                   </div>
                </div>

                <div className="p-4 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-[9px] text-[#adc6ff]/40 uppercase font-bold tracking-widest">Signal Analysis</span>
                      <Activity className="w-4 h-4 text-blue-400" />
                   </div>
                   <div className="h-20 bg-[#080B10] border border-[#adc6ff]/5 rounded-xl relative overflow-hidden">
                      <svg className="w-full h-full opacity-30">
                         <path d="M 0 40 Q 25 10 50 40 T 100 40 T 150 40 T 200 40" fill="none" stroke="#adc6ff" strokeWidth="1" className="animate-pulse" />
                      </svg>
                      <div className="absolute top-2 right-2 flex items-center gap-2">
                         <span className="text-[8px] text-[#adc6ff]/40 font-mono">{circuits.frequency_Hz} Hz</span>
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 2: ELECTROMAGNETIC FIELDS */}
        {activeTab === 'FIELDS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-indigo-400/40 uppercase tracking-[0.2em]">Maxwellian Field Solver</h3>
                <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl space-y-4">
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-indigo-500/10 rounded-xl">
                         <p className="text-[8px] text-indigo-400/40 uppercase">E-Field ($\mathbf{E}$)</p>
                         <p className="text-xs font-mono font-bold text-indigo-100">{emFields.electricField_Vm} V/m</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-indigo-500/10 rounded-xl">
                         <p className="text-[8px] text-indigo-400/40 uppercase">B-Field ($\mathbf{B}$)</p>
                         <p className="text-xs font-mono font-bold text-indigo-100">{emFields.magneticFlux_T} Tesla</p>
                      </div>
                   </div>
                   <div className="p-3 bg-[#080B10] border border-indigo-500/10 rounded-xl relative overflow-hidden flex items-center justify-center">
                      <Magnet className="w-12 h-12 text-indigo-400/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <p className="text-[8px] text-indigo-400/20 uppercase tracking-[0.2em] font-bold font-mono text-center">Magnetic Flux Density Mapping Active</p>
                      </div>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 3: POWER SYSTEMS */}
        {activeTab === 'POWER' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-yellow-400/40 uppercase tracking-[0.2em]">Grid & Energy Management</h3>
                <div className="p-4 bg-yellow-400/5 border border-yellow-400/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <Battery className="w-4 h-4 text-yellow-400" />
                         <span className="text-[10px] font-bold text-yellow-100 uppercase">Battery State of Charge</span>
                      </div>
                      <span className="text-[14px] font-mono font-bold text-yellow-400">{(powerSystems.batteryLevel * 100).toFixed(0)}%</span>
                   </div>
                   <div className="h-1 bg-yellow-400/10 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400" style={{ width: `${powerSystems.batteryLevel * 100}%` }} />
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-yellow-400/10 rounded-xl">
                         <p className="text-[8px] text-yellow-400/40 uppercase">Efficiency</p>
                         <p className="text-xs font-mono font-bold text-yellow-100">{(powerSystems.efficiency * 100).toFixed(1)}%</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-yellow-400/10 rounded-xl">
                         <p className="text-[8px] text-yellow-400/40 uppercase">Thermal Loss</p>
                         <p className="text-xs font-mono font-bold text-yellow-100">{powerSystems.thermalLoss_W} W</p>
                      </div>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 4: RF & PLASMA SYSTEMS */}
        {activeTab === 'RF' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-blue-400/40 uppercase tracking-[0.2em]">RF Propagation (Ku-Band)</h3>
                <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl space-y-4">
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-blue-100 uppercase tracking-widest flex items-center gap-2">
                         <Waves className="w-4 h-4" /> Signal Integrity
                      </span>
                      <span className="text-[9px] text-blue-400/40 font-mono">{rfSystems.frequency_GHz} GHz</span>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-blue-500/10 rounded-xl text-center">
                         <p className="text-[8px] text-blue-400/40 uppercase font-bold">SNR</p>
                         <p className="text-sm font-mono font-bold text-blue-100">{rfSystems.snr_dB} dB</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-blue-500/10 rounded-xl text-center">
                         <p className="text-[8px] text-blue-400/40 uppercase font-bold">Gain</p>
                         <p className="text-sm font-mono font-bold text-blue-100">{rfSystems.gain_dBi} dBi</p>
                      </div>
                   </div>
                </div>
             </section>

             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-indigo-400/40 uppercase tracking-[0.2em]">Plasma Confinement Stability</h3>
                <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <Flame className="w-5 h-5 text-indigo-400 animate-pulse" />
                      <div className="space-y-0.5">
                         <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest">Magnetic Mirror active</p>
                         <p className="text-[8px] text-indigo-400/40 font-mono uppercase">Stability Index: {plasma.confinementStability}</p>
                      </div>
                   </div>
                   <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
             </section>
          </div>
        )}

      </div>

      {/* 3. EM INTELLIGENCE FOOTER */}
      <div className="p-4 bg-[#adc6ff]/5 border-t border-[#adc6ff]/10 space-y-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2 text-[9px] text-blue-400 font-bold uppercase tracking-widest">
              <Zap className="w-3 h-3" /> Field Intelligence Hub
           </div>
           <span className="text-[9px] text-[#adc6ff]/40 font-mono uppercase">MAXWELL_SOLVER_V3</span>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-[#adc6ff] text-[#0B0F14] py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(173,198,255,0.2)]">
            Execute Load Balance
          </button>
          <button className="px-4 py-2 border border-[#adc6ff]/20 rounded-xl text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectromagneticIntelligencePanel;
