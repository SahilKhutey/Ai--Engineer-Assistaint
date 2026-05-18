'use client';

import React, { useState } from 'react';
import {
  Zap,
  Brain,
  Shield,
  Thermometer,
  Layers,
  Search,
  Database,
  Settings,
  Maximize2,
  RefreshCcw,
  Cpu,
  Atom,
  Waves,
  Target,
  Gauge,
  AlertTriangle,
  Lightbulb,
  Activity,
  FlaskConical,
  Microscope,
  Terminal,
  BarChart3,
  ChevronRight,
  Box
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * QuantumMaterialsEngineeringOS_e447e7 (Phase 58 Hardened)
 * 
 * Advanced laboratory interface for graphene nano-engineering and superconducting materials analysis.
 * Features real-time integration with materialsState, thermalState, and osStatus.
 * Hardened with sovereign state-driven telemetry and mission-ready aesthetics.
 */
const QuantumMaterialsEngineeringOS_e447e7 = () => {
  const { materialsState, thermalState, osStatus, pushEvent } = useEngineeringStore();
  const [isDoping, setIsDoping] = useState(false);

  // Mapped telemetry from store
  const gpuLoad = ((osStatus?.kernelLoad || 0.94) * 100).toFixed(0);
  const latticeStability = materialsState?.latticeStability || 99.982;
  const hexSpacing = materialsState?.hexSpacing || 0.142;
  const criticalTemp = thermalState?.criticalTemp || 138.4;
  const coreTemp = thermalState?.coreTemp || 42.8;

  const handleDopingSequence = () => {
    setIsDoping(true);
    pushEvent?.('INIT_DOPING', { 
      lattice: 'GRAPHENE_B_12', 
      dopant: 'NITROGEN',
      timestamp: Date.now() 
    });
    setTimeout(() => setIsDoping(false), 3000);
  };

  const handleExport = () => {
    pushEvent?.('EXPORT_METADATA', { format: 'JSON_ATOMIC', timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f14] text-[#e1e2ec] font-sans overflow-hidden selection:bg-[#adc6ff]/30 relative">
      
      {/* 1. HUD OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none z-50 hud-scanline opacity-[0.03]" />

      {/* 2. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-[#202b3c] bg-[#10131a]/70 backdrop-blur-xl flex justify-between items-center z-[60] shrink-0">
        <div className="flex items-center gap-3">
          <Atom className="w-5 h-5 text-[#adc6ff]" />
          <h1 className="text-[14px] font-bold text-[#adc6ff] tracking-[0.2em] uppercase leading-none">ANTIGRAVITY_OS // QUANTUM_LAB</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <NavButton label="QUANTUM_LAB" active />
            <NavButton label="NANOTECH" />
            <NavButton label="SIM_RUNS" />
          </div>
          <div className="text-[10px] font-mono font-bold text-[#adc6ff] tracking-widest bg-[#1d2027] px-4 py-1 rounded border border-[#202b3c]">
            GPU: {gpuLoad}% | SIM: ACTIVE
          </div>
        </div>
      </header>

      {/* 3. MAIN WORKSPACE */}
      <main className="flex-1 p-6 grid grid-cols-12 grid-rows-6 gap-6 overflow-hidden">
        
        {/* Left Column: Lattice Engineering */}
        <section className="col-span-12 lg:col-span-3 row-span-6 flex flex-col gap-6">
          
          <Panel title="GRAPHENE_NANO_ENG">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[11px] font-bold">
                  <span className="text-[#8c909f]">LATTICE_STABILITY</span>
                  <span className="text-[#adc6ff]">{latticeStability.toFixed(3)}%</span>
                </div>
                <div className="h-1.5 w-full bg-[#202b3c] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#adc6ff] transition-all duration-1000 shadow-[0_0_10px_#adc6ff]" 
                    style={{ width: `${latticeStability}%` }} 
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <MiniStat label="HEX_SPACING" val={`${hexSpacing} nm`} color="text-[#4cd7f6]" />
                <MiniStat label="ELECTRON_MOB" val="2.0e5" color="text-[#4cd7f6]" />
              </div>
              <button 
                onClick={handleDopingSequence}
                disabled={isDoping}
                className={`w-full py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-xl ${
                  isDoping 
                  ? 'bg-[#424754] text-[#8c909f] cursor-not-allowed' 
                  : 'bg-[#adc6ff]/10 text-[#adc6ff] border border-[#adc6ff]/40 hover:bg-[#adc6ff] hover:text-[#001a42]'
                }`}
              >
                {isDoping ? 'DOPING_IN_PROGRESS...' : 'Initiate Doping Sequence'}
              </button>
            </div>
          </Panel>

          <Panel title="SUPERCONDUCTOR_TC_MODEL" icon={<BarChart3 className="w-4 h-4" />}>
            <div className="flex flex-col items-center py-4 border-b border-[#202b3c]">
              <div className="text-[40px] font-mono font-bold text-[#adc6ff] leading-none">{criticalTemp.toFixed(1)} <span className="text-[16px] text-[#8c909f]">K</span></div>
              <span className="text-[9px] font-bold text-[#8c909f] uppercase tracking-widest mt-2">CRITICAL_TEMP_ESTIMATE</span>
            </div>
            <div className="space-y-2 mt-4">
              <ToggleRow label="PHASE_COHERENCE" val="STABLE" active />
              <ToggleRow label="MEISSNER_EFFECT" val="92%_EFF" />
              <ToggleRow label="COOPER_PAIR_DENSITY" val="HIGH" active />
            </div>
            <div className="h-24 mt-6 bg-[#0b0f14] border border-[#202b3c] rounded-xl flex items-end gap-1 p-2">
              {[0.4, 0.5, 0.7, 0.9, 1.0, 0.8, 0.6, 0.4].map((h, i) => (
                <div key={i} className="flex-1 bg-[#4cd7f6]/40 rounded-t" style={{ height: `${h * 100}%` }} />
              ))}
            </div>
          </Panel>

        </section>

        {/* Center: Atomic Zoom Viewport */}
        <section className="col-span-12 lg:col-span-6 row-span-4 relative flex items-center justify-center group overflow-hidden bg-[#1d2027] border border-[#202b3c] rounded-3xl shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9d39d99c5?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-[30s]"
            alt="Atomic Lattice Visualization"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-transparent" />
          
          {/* Zoom Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[80%] h-[80%] border-2 border-[#4cd7f6]/10 rounded-full flex items-center justify-center relative">
              <div className="w-[70%] h-[70%] border border-[#4cd7f6]/20 rounded-full animate-ping opacity-30" />
              <div className="w-[60%] h-[60%] border border-[#4cd7f6]/40 rounded-full flex items-center justify-center">
                <div className="absolute top-0 flex flex-col items-center -translate-y-full">
                  <div className="bg-[#4cd7f6] text-[#003640] px-4 py-1.5 font-bold text-[10px] rounded-t-lg tracking-widest shadow-[0_0_20px_#4cd7f6]">ATOMIC_ZOOM: ACTIVE</div>
                  <div className="w-px h-16 bg-[#4cd7f6]" />
                </div>
              </div>
            </div>
          </div>

          {/* Crosshair */}
          <div className="absolute w-12 h-px bg-[#4cd7f6]/60 left-12 top-1/2" />
          <div className="absolute w-12 h-px bg-[#4cd7f6]/60 right-12 top-1/2" />
          <div className="absolute w-px h-12 bg-[#4cd7f6]/60 top-12 left-1/2" />
          <div className="absolute w-px h-12 bg-[#4cd7f6]/60 bottom-12 left-1/2" />
        </section>

        {/* Right Column: AI Analysis & Event Log */}
        <section className="col-span-12 lg:col-span-3 row-span-6 flex flex-col gap-6">
          
          <Panel title="AI_QUANTUM_INTELLIGENCE" icon={<Brain className="w-4 h-4 animate-pulse text-[#4cd7f6]" />}>
            <div className="bg-[#93000a]/10 border border-[#ffb4ab]/30 p-4 rounded-xl flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#ffb4ab]">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">ANOMALY_DETECTED</span>
              </div>
              <p className="text-[12px] font-mono font-bold text-[#ffb4ab] leading-tight">POTENTIAL_GRAIN_BOUNDARY_WEAKNESS</p>
              <div className="space-y-1">
                <MetricRow label="COORDINATES" val="X:142.9, Y:88.2" />
                <MetricRow label="RISK_FACTOR" val="HIGH_SEVERITY" color="text-[#ffb4ab]" />
              </div>
            </div>

            <div className="flex-1 mt-6 flex flex-col gap-4 overflow-hidden">
              <h4 className="text-[9px] font-bold text-[#8c909f] uppercase tracking-widest">REALTIME_EVENT_LOG</h4>
              <div className="flex-1 overflow-y-auto custom-scrollbar font-mono text-[11px] space-y-3">
                <LogEntry time="14:02:11" msg="SCANNING_SUBLATTICE_A..." color="text-[#8c909f]" />
                <LogEntry time="14:02:15" msg="VdW_FORCE_STABILIZED" color="text-[#4cd7f6]" />
                <LogEntry time="14:02:22" msg="DISLOCATION_FOUND_Z:0.41" color="text-[#ffb4ab]" />
                <LogEntry time="14:02:28" msg="QUANTUM_FLUX_MAPPING..." color="text-[#adc6ff]" />
                <LogEntry time="14:02:44" msg="THERMAL_NOISE_REJECTED" color="text-[#4cd7f6]" />
              </div>
            </div>

            <button 
              onClick={handleExport}
              className="mt-6 w-full py-3 bg-[#1d2027] border border-[#202b3c] rounded-xl font-bold text-[10px] uppercase tracking-widest text-[#8c909f] hover:text-[#e1e2ec] hover:border-[#adc6ff] transition-all"
            >
              Export Lattice Metadata
            </button>
          </Panel>

        </section>

        {/* Bottom Bar: Multi-Telemetry */}
        <section className="col-span-12 lg:col-span-6 row-span-2 bg-[#1d2027] border border-[#202b3c] rounded-2xl p-6 grid grid-cols-4 gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #adc6ff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
          <TelemetryGauge label="LATTICE_STRAIN" val="0.0021%" progress={25} color="bg-[#4cd7f6]" />
          <TelemetryGauge label="PHOTON_DRIVE" val="88.4 MHz" progress={75} color="bg-[#adc6ff]" />
          <TelemetryGauge label="CRYOGENIC_PUMP" val="ACTIVE" progress={50} color="bg-[#4cd7f6]" />
          <TelemetryGauge label="CORE_TEMP" val={`${coreTemp} K`} progress={42} color="bg-[#adc6ff]" />
        </section>

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

const NavButton = ({ label, active }: any) => (
  <button className={`text-[11px] font-bold tracking-[0.2em] transition-all hover:opacity-100 ${active ? 'text-[#adc6ff] opacity-100' : 'text-[#8c909f] opacity-60'}`}>
    {label}
  </button>
);

const Panel = ({ title, icon, children }: any) => (
  <div className="flex-1 bg-[#1d2027]/80 backdrop-blur-xl border border-[#202b3c] rounded-2xl flex flex-col overflow-hidden shadow-xl">
    <header className="px-6 py-3 border-b border-[#202b3c] bg-[#272a31]/50 flex justify-between items-center">
      <span className="text-[10px] font-bold text-[#8c909f] uppercase tracking-[0.2em]">{title}</span>
      {icon || <Settings className="w-3.5 h-3.5 text-[#8c909f]" />}
    </header>
    <div className="flex-1 p-6 flex flex-col overflow-hidden">
      {children}
    </div>
  </div>
);

const MiniStat = ({ label, val, color }: any) => (
  <div className="bg-[#0b0f14] border border-[#202b3c] p-3 rounded-xl flex flex-col gap-1">
    <span className="text-[8px] font-bold text-[#8c909f] uppercase tracking-widest">{label}</span>
    <span className={`text-[14px] font-mono font-bold ${color}`}>{val}</span>
  </div>
);

const ToggleRow = ({ label, val, active }: any) => (
  <div className={`flex justify-between items-center p-3 rounded-xl border transition-all ${active ? 'bg-[#adc6ff]/5 border-[#adc6ff]/30 text-[#adc6ff]' : 'bg-[#1d2027] border-[#202b3c] text-[#8c909f]'}`}>
    <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    <span className="text-[10px] font-mono font-bold">{val}</span>
  </div>
);

const MetricRow = ({ label, val, color = 'text-[#8c909f]' }: any) => (
  <div className="flex justify-between items-center text-[9px] font-bold tracking-widest">
    <span className="text-[#8c909f]/60">{label}</span>
    <span className={color}>{val}</span>
  </div>
);

const LogEntry = ({ time, msg, color }: any) => (
  <div className="flex gap-4 group">
    <span className="text-[#8c909f]/40 font-bold shrink-0">[{time}]</span>
    <p className={`${color} group-hover:text-white transition-colors`}>{msg}</p>
  </div>
);

const TelemetryGauge = ({ label, val, progress, color }: any) => (
  <div className="flex flex-col gap-3">
    <span className="text-[9px] font-bold text-[#8c909f] uppercase tracking-[0.2em]">{label}</span>
    <div className="h-1 bg-[#202b3c] rounded-full overflow-hidden">
      <div className={`h-full ${color} transition-all duration-1000`} style={{ width: `${progress}%` }} />
    </div>
    <span className={`text-[12px] font-mono font-bold ${color.replace('bg-', 'text-')}`}>{val}</span>
  </div>
);

export default QuantumMaterialsEngineeringOS_e447e7;
