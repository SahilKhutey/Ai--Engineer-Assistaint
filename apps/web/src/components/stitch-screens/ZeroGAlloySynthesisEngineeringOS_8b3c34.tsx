'use client';

import React, { useState } from 'react';
import {
  Zap,
  Activity,
  Thermometer,
  Gauge,
  Wind,
  Terminal,
  ShieldCheck,
  Microscope,
  Database,
  Brain,
  Ruler,
  Box,
  ChevronRight
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * ZeroGAlloySynthesisEngineeringOS_8b3c34 (Phase 58 Hardened)
 * 
 * High-fidelity materials FlaskConical dashboard for zero-gravity alloy synthesis.
 * Features real-time lattice growth Activity, plasma control, and AI-validated logs.
 */
const ZeroGAlloySynthesisEngineeringOS_8b3c34 = () => {
  const { materialsState, osStatus, pushEvent } = useEngineeringStore();
  const [plasmaExcitation, setPlasmaExcitation] = useState(82.5);
  const [coolingRate, setCoolingRate] = useState(12.4);

  // Real-time values mapped from store or defaults
  const stability = materialsState?.stability || 98.4;
  const growthRate = materialsState?.growthRate || 4.28;
  const density = materialsState?.density || 0.992;
  const temperature = materialsState?.temperature || 2410;
  const pressure = materialsState?.pressure || 0.02;
  const isSimActive = osStatus?.status === 'ACTIVE';

  const handleExcitationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setPlasmaExcitation(val);
    pushEvent?.('PLASMA_ADJUST', { excitation: val, timestamp: Date.now() });
  };

  const handleCoolingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCoolingRate(val);
    pushEvent?.('COOLING_ADJUST', { rate: val, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f14] text-[#e1e2ec] font-sans overflow-hidden selection:bg-[#adc6ff]/30">
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-[#202b3c] bg-[#10131a]/70 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-3">
          <Box className="w-5 h-5 text-[#adc6ff] fill-[#adc6ff]/20" />
          <h1 className="text-[18px] font-bold text-[#adc6ff] tracking-tighter leading-none">ANTIGRAVITY_OS</h1>
        </div>
        <div className="text-[10px] font-mono font-bold text-[#adc6ff] tracking-widest bg-[#1d2027] px-4 py-1 rounded border border-[#202b3c]">
          GPU: {((osStatus?.kernelLoad || 0.94) * 100).toFixed(0)}% | SIM: {isSimActive ? 'ACTIVE' : 'IDLE'}
        </div>
      </header>

      {/* 2. MAIN SCROLLABLE CONTENT */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar pb-24 lg:pb-8">
        
        {/* 3. SIMULATION VIEWPORT */}
        <section className="relative aspect-square md:aspect-Camera w-full bg-[#191b23] rounded-2xl border border-[#202b3c] overflow-hidden group shadow-2xl">
          <div className="absolute top-0 left-0 w-full p-6 z-10 flex justify-between items-start pointer-events-none">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#c2c6d6] uppercase tracking-[0.3em]">LATTICE_VIEW_01</span>
              <span className="text-[12px] font-mono font-bold text-[#4cd7f6] uppercase tracking-widest">REAL-TIME_GROWTH_MONITOR</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0b0e15]/60 backdrop-blur-md px-3 py-1 rounded-full border border-green-500/30">
              <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse" />
              <span className="text-[10px] font-bold text-[#10B981] uppercase tracking-widest">LIVE_STREAM</span>
            </div>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover mix-blend-screen opacity-60 group-hover:scale-105 transition-transform duration-[10s] ease-linear"
            alt="Molecular Structure Visualization"
          />

          {/* Overlay Metrics */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
            <div className="bg-[#1a2330]/80 backdrop-blur-xl p-3 rounded-xl border border-[#202b3c] shadow-2xl">
              <span className="text-[9px] font-bold text-[#c2c6d6] uppercase tracking-widest block mb-1">GROWTH_RATE</span>
              <span className="text-[20px] font-mono font-bold text-[#4cd7f6] tracking-tighter">{growthRate.toFixed(2)} mm/s</span>
            </div>
            <div className="bg-[#1a2330]/80 backdrop-blur-xl p-3 rounded-xl border border-[#202b3c] shadow-2xl text-right">
              <span className="text-[9px] font-bold text-[#c2c6d6] uppercase tracking-widest block mb-1">LATTICE_DENSITY</span>
              <span className="text-[20px] font-mono font-bold text-[#adc6ff] tracking-tighter">{density.toFixed(3)} kg/m³</span>
            </div>
          </div>
        </section>

        {/* 4. DASHBOARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Molecular Stability Panel */}
          <section className="bg-[#1d2027] p-6 rounded-2xl border border-[#202b3c] flex flex-col justify-between shadow-xl">
            <header className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold text-[#c2c6d6] uppercase tracking-widest">STABILITY_INTEGRITY</span>
              <Activity className="w-4 h-4 text-[#4cd7f6]" />
            </header>
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-1">
                <span className="text-[40px] font-bold text-[#4cd7f6] tracking-tighter leading-none">{stability.toFixed(1)}</span>
                <span className="text-[18px] font-bold text-[#4cd7f6]/50">%</span>
              </div>
              <div className="w-full h-1.5 bg-[#32353c] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6] transition-all duration-1000" 
                  style={{ width: `${stability}%` }}
                />
              </div>
            </div>
          </section>

          {/* Environmental Telemetry Cluster */}
          <section className="bg-[#1d2027] p-6 rounded-2xl border border-[#202b3c] flex flex-col gap-4 shadow-xl">
            <div className="flex justify-between items-center border-b border-[#424754]/30 pb-3">
              <div className="flex items-center gap-2">
                <Thermometer className="w-3.5 h-3.5 text-[#adc6ff]" />
                <span className="text-[11px] font-bold text-[#c2c6d6] uppercase tracking-widest">CHAMBER_TEMP</span>
              </div>
              <span className="text-[16px] font-mono font-bold text-[#adc6ff] tracking-tighter">{temperature.toLocaleString()} K</span>
            </div>
            <div className="flex justify-between items-center border-b border-[#424754]/30 pb-3">
              <div className="flex items-center gap-2">
                <Gauge className="w-3.5 h-3.5 text-[#adc6ff]" />
                <span className="text-[11px] font-bold text-[#c2c6d6] uppercase tracking-widest">PRESSURE</span>
              </div>
              <span className="text-[16px] font-mono font-bold text-[#adc6ff] tracking-tighter">{pressure.toFixed(2)} Pa</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Wind className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="text-[11px] font-bold text-[#c2c6d6] uppercase tracking-widest">ENV_MODE</span>
              </div>
              <span className="text-[11px] font-bold text-[#10B981] uppercase tracking-widest px-2 py-0.5 bg-[#10B981]/10 rounded border border-[#10B981]/20">VACUUM</span>
            </div>
          </section>

          {/* System Control Panel */}
          <section className="col-span-1 md:col-span-2 bg-[#1d2027] p-6 rounded-2xl border border-[#202b3c] flex flex-col gap-6 shadow-xl">
            <div className="space-y-4">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#4cd7f6]" />
                    <label className="text-[11px] font-bold text-[#e1e2ec] uppercase tracking-widest">PLASMA EXCITATION</label>
                  </div>
                  <span className="text-[14px] font-mono font-bold text-[#4cd7f6]">{plasmaExcitation.toFixed(1)} MW</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="200" step="0.5"
                  value={plasmaExcitation}
                  onChange={handleExcitationChange}
                  className="w-full h-1.5 bg-[#32353c] rounded-lg appearance-none cursor-pointer accent-[#4cd7f6] hover:accent-[#adc6ff] transition-all"
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#adc6ff]" />
                    <label className="text-[11px] font-bold text-[#e1e2ec] uppercase tracking-widest">COOLING RATE</label>
                  </div>
                  <span className="text-[14px] font-mono font-bold text-[#adc6ff]">{coolingRate.toFixed(1)} K/s</span>
                </div>
                <input 
                  type="range" 
                  min="0" max="50" step="0.1"
                  value={coolingRate}
                  onChange={handleCoolingChange}
                  className="w-full h-1.5 bg-[#32353c] rounded-lg appearance-none cursor-pointer accent-[#adc6ff] hover:accent-[#4cd7f6] transition-all"
                />
              </div>
            </div>
          </section>

          {/* Synthesis Log */}
          <section className="col-span-1 md:col-span-2 bg-[#1d2027] rounded-2xl overflow-hidden border border-[#202b3c] shadow-xl">
            <header className="bg-[#272a31] px-6 py-3 border-b border-[#424754] flex justify-between items-center">
              <h3 className="text-[11px] font-bold text-[#e1e2ec] uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#4cd7f6]" />
                SYNTHESIS_LOG
              </h3>
              <span className="text-[9px] font-bold text-[#4cd7f6] uppercase tracking-widest animate-pulse bg-[#4cd7f6]/10 px-2 py-0.5 rounded border border-[#4cd7f6]/20">AI_VALIDATION_ACTIVE</span>
            </header>
            <div className="flex flex-col font-mono text-[11px] text-[#c2c6d6] p-4 gap-2 bg-[#0b0e15]/40 h-48 overflow-y-auto custom-scrollbar">
              <LogEntry time="04:12:10" tag="PHASE_TRANSITION" color="text-[#adc6ff]" message="Liquid to Beta-Crystal transition detected." />
              <LogEntry time="04:12:42" tag="AI_VALIDATE" color="text-[#4cd7f6]" message="Lattice geometry matches theoretical model T-82." />
              <LogEntry time="04:13:05" tag="SYS_UPDATE" color="text-[#c2c6d6]" message="Initializing excitation adjustment for grain refinement." />
              <LogEntry time="04:13:28" tag="SUCCESS" color="text-[#10B981]" message="Core alloy fusion confirmed at 98.4% stability." />
              <div className="flex items-center gap-2 text-[#4cd7f6]/50 animate-pulse mt-2">
                <ChevronRight className="w-3 h-3" />
                <span>AWAITING KERNEL_SIGNAL...</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* 5. NAVIGATION BAR (MOBILE ONLY) */}
      <nav className="fixed bottom-0 left-0 w-full h-16 bg-[#1d2027]/80 backdrop-blur-xl border-t border-[#424754] flex lg:hidden justify-around items-center px-4 z-50">
        <NavButton icon={<Microscope className="w-5 h-5" />} label="CORE" active />
        <NavButton icon={<Database className="w-5 h-5" />} label="DATA" />
        <NavButton icon={<Brain className="w-5 h-5" />} label="AGENT" />
        <NavButton icon={<Ruler className="w-5 h-5" />} label="METRICS" />
      </nav>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #32353c; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #424754; }
      `}</style>
    </div>
  );
};

const LogEntry = ({ time, tag, message, color }: any) => (
  <div className="flex items-start gap-3 border-l border-[#424754] pl-4 py-1 hover:bg-white/5 transition-colors group">
    <span className="text-[#8c909f] text-[10px] tabular-nums shrink-0">{time}</span>
    <p className="leading-relaxed">
      <span className={`${color} font-bold mr-2 uppercase`}>[{tag}]</span>
      <span className="group-hover:text-[#e1e2ec] transition-colors">{message}</span>
    </p>
  </div>
);

const NavButton = ({ icon, label, active }: any) => (
  <button className={`flex flex-col items-center justify-center gap-1 flex-1 transition-all ${active ? 'text-[#4cd7f6] scale-110' : 'text-[#8c909f] hover:text-[#e1e2ec]'}`}>
    {icon}
    <span className="text-[9px] font-bold uppercase tracking-widest">{label}</span>
  </button>
);

export default ZeroGAlloySynthesisEngineeringOS_8b3c34;
