'use client';

import React, { useState, useEffect } from 'react';
import {
  Zap,
  Activity,
  Brain,
  Shield,
  Thermometer,
  Wind,
  Database,
  Search,
  Terminal,
  Maximize2,
  RefreshCcw,
  Cpu,
  Layers,
  Waves,
  SlidersHorizontal,
  Settings,
  Workflow,
  Target,
  Gauge,
  AlertTriangle,
  Lightbulb,
  Radio
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * PlasmaAdvancedFlowsEngineeringOS_a2bfac (Phase 58 Hardened)
 * 
 * Scientific cockpit for magnetohydrodynamics (MHD) and ion transport simulation.
 * Features real-time integration with thermalState and physicsState.
 * Hardened with sovereign state-driven telemetry and mission-ready aesthetics.
 */
const PlasmaAdvancedFlowsEngineeringOS_a2bfac = () => {
  const { thermalState, physicsState, osStatus, pushEvent } = useEngineeringStore();
  
  // Real-time values from EngineeringStore
  const plasmaFreq = (thermalState?.plasmaFreq || 12.48).toFixed(2);
  const debyeLength = (thermalState?.debyeLength || 4.21).toFixed(2);
  const peakTemp = (thermalState?.maxTemp || 14200).toLocaleString();
  const solverBalance = physicsState?.vitals?.solverBalance || 58; // 58% plasma
  const gpuLoad = ((osStatus?.kernelLoad || 0.14) * 100).toFixed(0);

  const handleRecalculate = () => {
    pushEvent?.('RECALCULATE_B_FIELD', { method: 'HALL_TORQUE_COMP', timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f14] text-[#e1e2ec] font-sans overflow-hidden selection:bg-[#4cd7f6]/30 relative">
      
      {/* 1. HUD OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none z-50 hud-scanline opacity-[0.03]" />

      {/* 2. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-[#202b3c] bg-[#10131a]/70 backdrop-blur-xl flex justify-between items-center z-[60] shrink-0">
        <div className="flex items-center gap-3">
          <Waves className="w-5 h-5 text-[#4cd7f6]" />
          <h1 className="text-[14px] font-bold text-[#4cd7f6] tracking-[0.2em] uppercase leading-none">NEURAL_OS // PLASMA_DYNAMICS</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#4cd7f6]/10 border border-[#4cd7f6]/20 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-pulse" />
            <span className="text-[9px] font-mono font-bold text-[#4cd7f6] uppercase tracking-widest">GPU: {gpuLoad}% | LIVE_MHD_FEED</span>
          </div>
          <Settings className="w-4 h-4 text-[#8c909f] cursor-pointer hover:text-[#e1e2ec]" />
        </div>
      </header>

      {/* 3. MAIN WORKSPACE */}
      <main className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar bg-[#0b0e15]/40 relative">
        
        {/* HUD Overlay: Telemetry Brief */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TelemetryBrief 
            label="PLASMA_FREQ" 
            val={`${plasmaFreq} GHz`} 
            progress={80} 
            color="text-[#adc6ff]" 
            icon={<Radio className="w-4 h-4" />} 
          />
          <TelemetryBrief 
            label="DEBYE_LENGTH" 
            val={`${debyeLength} μm`} 
            progress={33} 
            color="text-[#ffb786]" 
            icon={<Target className="w-4 h-4" />} 
          />
        </section>

        {/* MHD Visualization Panel */}
        <section className="bg-[#1d2027]/80 backdrop-blur-xl border border-[#202b3c] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative group">
          <header className="px-6 py-3 border-b border-[#202b3c] bg-[#272a31]/50 flex justify-between items-center">
            <span className="text-[10px] font-bold text-[#8c909f] uppercase tracking-[0.4em]">FLUID_DYNAMICS:MHD_COUPLING</span>
            <Maximize2 className="w-4 h-4 text-[#8c909f] hover:text-[#4cd7f6] cursor-pointer" />
          </header>
          <div className="relative h-80 bg-[#0b0f14] flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover opacity-60 mix-blend-screen group-hover:scale-110 transition-transform duration-[20s]"
              alt="MHD Visualization"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-transparent opacity-80" />
            
            {/* Field Indicators */}
            <div className="absolute bottom-6 left-6 flex flex-col gap-2">
              <FieldLegend color="bg-[#adc6ff]" label="ELECTRON_TEMP_FIELD" />
              <FieldLegend color="bg-[#ffb786]" label="ION_TRANSPORT_VECTOR" />
            </div>
            
            <div className="absolute top-6 right-6 bg-[#10131a]/80 backdrop-blur-md p-3 border border-[#202b3c] rounded-xl flex items-center gap-3">
              <Thermometer className="w-4 h-4 text-[#4cd7f6]" />
              <span className="text-[12px] font-mono font-bold text-[#4cd7f6]">T_max: {peakTemp}K</span>
            </div>
          </div>
        </section>

        {/* Solver Balancer */}
        <section className="bg-[#1d2027]/80 backdrop-blur-xl border border-[#202b3c] p-6 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[10px] font-bold text-[#8c909f] uppercase tracking-[0.4em]">SOLVER_BALANCE:HYBRID_SYNC</h3>
            <Workflow className="w-4 h-4 text-[#4cd7f6]" />
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center w-24">
              <span className="text-[9px] font-bold text-[#8c909f] uppercase tracking-widest block mb-1">CLASSICAL</span>
              <span className="text-[18px] font-mono font-bold text-[#4cd7f6]">{100 - solverBalance}%</span>
            </div>
            <div className="flex-1 h-2 bg-[#202b3c] rounded-full relative overflow-hidden">
              <div 
                className="absolute left-0 h-full bg-[#4cd7f6] transition-all duration-1000" 
                style={{ width: `${100 - solverBalance}%` }} 
              />
              <div 
                className="absolute right-0 h-full bg-[#adc6ff] transition-all duration-1000 shadow-[0_0_10px_#adc6ff]" 
                style={{ width: `${solverBalance}%` }} 
              />
            </div>
            <div className="text-center w-24">
              <span className="text-[9px] font-bold text-[#8c909f] uppercase tracking-widest block mb-1">PLASMA</span>
              <span className="text-[18px] font-mono font-bold text-[#adc6ff]">{solverBalance}%</span>
            </div>
          </div>
        </section>

        {/* AI Reasoning Log & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <section className="lg:col-span-8 bg-[#1d2027]/80 backdrop-blur-xl border border-[#202b3c] rounded-2xl overflow-hidden shadow-xl flex flex-col">
            <header className="px-6 py-3 border-b border-[#202b3c] bg-[#272a31]/50 flex items-center gap-3">
              <Brain className="w-4 h-4 text-[#adc6ff]" />
              <span className="text-[10px] font-bold text-[#8c909f] uppercase tracking-[0.4em]">AI_REASONING_LOG:FIELD_CONTAINMENT</span>
            </header>
            <div className="p-6 font-mono text-[11px] bg-[#0b0f14] space-y-4">
              <LogEntry time="08:42:12" msg="Detecting instability in magnetic nozzle throat. Divergence angle exceeding θ_crit." color="text-[#adc6ff]" />
              <LogEntry time="08:42:15" msg="Recalculating B-field vectoring. Adjusting solenoid current by +150mA." color="text-[#4cd7f6]" />
              <LogEntry time="08:42:18" msg="Efficiency loss mitigated. Neutralizer beam RefreshCw confirmed at 0.992 correlation." color="text-[#ffb786]" />
              <div className="pt-4 border-t border-[#202b3c] flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-[#10B981]" />
                  <span className="text-[#10B981] font-bold uppercase tracking-widest">STATUS: NOMINAL_CONTAINMENT_LOCKED</span>
                </div>
                <button 
                  onClick={handleRecalculate}
                  className="px-4 py-1.5 bg-[#4cd7f6]/10 border border-[#4cd7f6]/30 rounded text-[10px] font-bold text-[#4cd7f6] uppercase hover:bg-[#4cd7f6] hover:text-[#003640] transition-all active:scale-95"
                >
                  Force Recalculate
                </button>
              </div>
            </div>
          </section>

          <section className="lg:col-span-4 grid grid-rows-2 gap-6">
            <StatCard 
              label="THRUST_EFF" 
              val="94.8" 
              unit="%" 
              color="text-[#4cd7f6]" 
              icon={<Zap className="w-4 h-4" />} 
            />
            <StatCard 
              label="B_FIELD_STRENGTH" 
              val="2.45" 
              unit="T" 
              color="text-[#ffb786]" 
              icon={<Layers className="w-4 h-4" />} 
            />
          </section>

        </div>

      </main>

      <style jsx>{`
        .hud-scanline {
          background: linear-gradient(to bottom, transparent 50%, rgba(76, 215, 246, 0.05) 50.5%, transparent 51%);
          background-size: 100% 4px;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #32353c; border-radius: 10px; }
      `}</style>
    </div>
  );
};

const TelemetryBrief = ({ label, val, progress, color, icon }: any) => (
  <div className="bg-[#1d2027]/80 backdrop-blur-xl border border-[#202b3c] p-6 rounded-2xl shadow-xl border-l-4 border-l-current group hover:bg-[#272a31]/80 transition-all">
    <div className="flex items-center gap-3 text-[#8c909f] mb-3">
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-[0.4em]">{label}</span>
    </div>
    <div className={`text-[24px] font-mono font-bold ${color}`}>{val}</div>
    <div className="mt-3 h-1 w-full bg-[#202b3c] rounded-full overflow-hidden">
      <div className={`h-full ${color.replace('text-', 'bg-')} opacity-60 group-hover:opacity-100 transition-all duration-1000`} style={{ width: `${progress}%` }} />
    </div>
  </div>
);

const FieldLegend = ({ color, label }: any) => (
  <div className="flex items-center gap-3">
    <div className={`w-3 h-3 rounded-sm ${color} shadow-[0_0_8px_currentcolor]`} />
    <span className="text-[10px] font-bold text-[#e1e2ec] uppercase tracking-widest">{label}</span>
  </div>
);

const LogEntry = ({ time, msg, color }: any) => (
  <div className="flex gap-4 group">
    <span className="text-[#8c909f] font-bold shrink-0">[{time}]</span>
    <p className={`${color} leading-relaxed group-hover:text-white transition-colors`}>{msg}</p>
  </div>
);

const StatCard = ({ label, val, unit, color, icon }: any) => (
  <div className="bg-[#1d2027]/80 backdrop-blur-xl border border-[#202b3c] p-6 rounded-2xl flex flex-col justify-between shadow-xl">
    <div className="flex items-center gap-3 text-[#8c909f]">
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </div>
    <div className="flex items-baseline gap-2 mt-2">
      <span className={`text-[28px] font-mono font-bold tracking-tighter ${color}`}>{val}</span>
      <span className="text-[12px] font-bold text-[#8c909f]">{unit}</span>
    </div>
  </div>
);

export default PlasmaAdvancedFlowsEngineeringOS_a2bfac;
