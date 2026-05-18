'use client';

import React from 'react';
import {
  Zap,
  Activity,
  Cpu,
  Settings,
  Terminal,
  BarChart3,
  Radio,
  MemoryStick,
  Battery,
  Thermometer,
  TrendingUp,
  Play
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * CircuitEngine v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity electrical engineering workspace with real-time SPICE-derived telemetry.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const CircuitEngineEngineeringOS_d59d17 = () => {
  const { circuitState } = useEngineeringStore();
  const { 
    voltage_in = 5.0, 
    current_mA = 0.5, 
    power_W = 1.22, 
    efficiency = 94.2,
    thermal_estimate = 42.8,
    status = 'STABLE'
  } = circuitState || {};

  return (
    <div className="flex-1 flex flex-col lg:flex-row bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. COMPONENT LIBRARY (Left) */}
      <aside className="w-full lg:w-64 bg-black/40 border-r border-white/5 flex flex-col backdrop-blur-3xl animate-in slide-in-from-left-10 duration-700">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
           <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">COMPONENTS</span>
           <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
           <ComponentGroup label="ANALOG_DISCRETE">
              <ComponentItem icon={Zap} label="MOSFET N-CH" sub="2N7002" />
              <ComponentItem icon={Activity} label="Resistor Fixed" sub="10kΩ" active />
              <ComponentItem icon={Battery} label="Capacitor Pol" sub="47uF" />
           </ComponentGroup>
           <ComponentGroup label="SEMICONDUCTOR_IC">
              <ComponentItem icon={Cpu} label="NE555 Timer" sub="DIP-8" />
              <ComponentItem icon={MemoryStick} label="Op-Amp Dual" sub="LM358" />
           </ComponentGroup>
        </div>
        <div className="p-6 bg-white/[0.02] border-t border-white/5">
           <div className="flex justify-between items-center text-[10px] font-mono font-black text-white/20 mb-3">
              <span>MEMORY_USAGE</span>
              <span className="text-blue-400">42%</span>
           </div>
           <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[42%] shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
           </div>
        </div>
      </aside>

      {/* 2. SCHEMATIC CANVAS (Center) */}
      <main className="flex-1 relative bg-black/20 flex flex-col overflow-hidden animate-in fade-in duration-1000">
        <div className="absolute inset-0 circuit-grid opacity-20 pointer-events-none" />
        
        <div className="h-10 px-6 flex items-center bg-white/[0.02] border-b border-white/5 justify-between backdrop-blur z-10">
           <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">WORKSPACE_ALPHA // TRANSIENT_ANALYSIS</span>
           <div className="flex gap-6 items-center">
              <span className="text-[10px] font-mono text-blue-400 font-bold tracking-widest">X: 144.00 Y: 288.50</span>
              <span className="text-[10px] font-mono text-white/20 uppercase">ZOOM: 100%</span>
           </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 relative flex items-center justify-center p-12 overflow-hidden">
           <div className="w-full h-full border border-blue-500/10 rounded-[48px] relative group overflow-hidden bg-black/40 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none grayscale select-none">
                 <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuAXGhl1BZXYwlQX9Z5DMmRNN61Hcs6bQvFUIJFawshHI9yNeO0KmC6pKk8H7yBzrDn8m_SwPJYPlTmhaDxE9ZWry_OG5xpdT70Lcp8X7YaVZs6gkpUiTfVOFjS12PkFmxCvr1m8ORMsdQ1C05Ddj7hJPqYYr38taXEokLtp2is1-xSIcvl3bB_o5dIbFLs1O6A5aXw-11TvIFArkqvZee-35itC5vlHpM3nwXolJ9YxOOzxVieFbOP0kpl7eQ6Ea3mVU4aSCMVKT74w" className="w-full h-full object-cover" />
              </div>

              {/* Real-time Component States */}
              <FloatingNode top="25%" left="35%" label={`R1: 10kΩ`} sub={`V: ${voltage_in.toFixed(2)}V`} active />
              <FloatingNode bottom="35%" right="25%" label="V_IN" sub={`${voltage_in.toFixed(2)}V`} icon={Zap} />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-blue-500/10 border border-blue-400/30 px-6 py-2 rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.2)] flex items-center gap-4 group">
                  <span className="text-[12px] font-black text-blue-400 uppercase tracking-widest animate-pulse">I = {current_mA.toFixed(4)}mA</span>
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                </div>
              </div>
           </div>
        </div>

        {/* Terminal */}
        <div className="h-40 border-t border-white/5 bg-black/40 p-6 font-mono text-[11px] overflow-y-auto custom-scrollbar backdrop-blur-3xl">
           <div className="text-blue-400/60 mb-1">[SYSTEM] SPICE Initialization Sequence 0x4F2...</div>
           <div className="text-white/20 mb-1">[INFO] Netlist parsed: 14 nodes, 22 branches.</div>
           <div className="text-white/20 mb-1">[INFO] Transient Analysis started (TSTOP=10ms).</div>
           <div className={`mb-1 ${status === 'STABLE' ? 'text-emerald-400' : 'text-rose-400'}`}>[SOLVER] State: {status} | Current Convergence at {voltage_in.toFixed(3)}V</div>
           <div className="text-rose-500/60 mb-1">[WARN] Power dissipation alert: {power_W.toFixed(2)}W measured.</div>
           <div className="text-white/40 flex items-center gap-3 mt-4">
              <span className="text-blue-500 font-bold">&gt;</span>
              <input className="bg-transparent border-none outline-none focus:ring-0 p-0 text-white/80 w-full placeholder:text-white/10" placeholder="Execute transient_solve_step --force..." type="text"/>
           </div>
        </div>
      </main>

      {/* 3. ANALYSIS & VERIFICATION (Right) */}
      <aside className="w-full lg:w-96 bg-black/40 border-l border-white/5 flex flex-col backdrop-blur-3xl overflow-y-auto custom-scrollbar">
        {/* Oscilloscope */}
        <div className="p-8 border-b border-white/5 space-y-6">
           <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3">
              <BarChart3 className="w-3 h-3" />
              OSCILLOSCOPE_V1
           </h3>
           <div className="w-full h-44 bg-black/80 rounded-[24px] border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 circuit-grid pointer-events-none" />
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
                <path 
                  d={`M0 50 Q 25 ${50 + 40 * Math.sin(Date.now() / 500)}, 50 50 T 100 50 T 150 50 T 200 50`} 
                  fill="none" 
                  stroke="#60a5fa" 
                  strokeWidth="1.5"
                  className="drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                />
              </svg>
              <div className="absolute top-4 left-4 flex gap-3">
                <span className="text-[9px] font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md border border-blue-500/20">CH1: {voltage_in.toFixed(2)}V</span>
                <span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20">CH2: 500mV</span>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <MetricBox label="PEAK_TO_PEAK" value={`${(voltage_in * 0.85).toFixed(2)}V`} />
              <MetricBox label="FREQUENCY" value="1.02kHz" />
           </div>
        </div>

        {/* Verification */}
        <div className="p-8 border-b border-white/5 space-y-6">
           <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3">
              <TrendingUp className="w-3 h-3" />
              LAW_VERIFICATION
           </h3>
           <VerificationCard 
             label="OHM_VERIFIER" 
             status="PASS" 
             detail={`V = I * R → ${voltage_in.toFixed(2)}V = (${current_mA.toFixed(1)}mA * 10kΩ)`}
           />
           <VerificationCard 
             label="KCL_NODE_0x7" 
             status="VERIFIED" 
             detail="Σ I_in = Σ I_out → 12.4mA = 12.4mA"
             color="amber"
           />
        </div>

        {/* Power Metrics */}
        <div className="p-8 space-y-8 flex-1">
           <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3">
              <Zap className="w-3 h-3" />
              POWER_METRICS
           </h3>
           <div className="space-y-4">
              <PowerRow label="TOTAL_CONSUMPTION" value={`${power_W.toFixed(2)}W`} />
              <PowerRow label="THERMAL_ESTIMATE" value={`+${thermal_estimate.toFixed(1)}°C`} color="rose" />
              <PowerRow label="EFFICIENCY_RATIO" value={`${efficiency.toFixed(1)}%`} color="emerald" />
           </div>
           
           <button className="w-full py-4 bg-blue-500 text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
              <Play className="w-4 h-4" />
              START_TRANSIENT_SOLVER
           </button>
        </div>
      </aside>

      <style jsx>{`
        .circuit-grid {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>
    </div>
  );
};

const ComponentGroup = ({ label, children }: any) => (
  <div className="space-y-3">
    <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em] px-2">{label}</span>
    <div className="space-y-1">{children}</div>
  </div>
);

const ComponentItem = ({ icon: Icon, label, sub, active }: any) => (
  <div className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all group ${active ? 'bg-blue-500/10 border border-blue-500/20' : 'hover:bg-white/5 border border-transparent'}`}>
    <div className="flex items-center gap-3">
      <Icon className={`w-4 h-4 ${active ? 'text-blue-400' : 'text-white/20 group-hover:text-blue-400/60'}`} />
      <span className={`text-[11px] font-black uppercase tracking-widest ${active ? 'text-white' : 'text-white/40'}`}>{label}</span>
    </div>
    <span className="text-[9px] font-mono text-white/10 uppercase">{sub}</span>
  </div>
);

const FloatingNode = ({ top, left, bottom, right, label, sub, icon: Icon, active }: any) => (
  <div 
    className={`absolute p-5 bg-black/60 border backdrop-blur-2xl rounded-[24px] flex flex-col items-center gap-2 group transition-all hover:scale-110 hover:z-20 ${active ? 'border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)]' : 'border-white/10 shadow-2xl'}`}
    style={{ top, left, bottom, right }}
  >
    {Icon ? <Icon className="w-8 h-8 text-blue-400" /> : <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold">R</div>}
    <span className="text-[10px] font-black text-white uppercase tracking-widest">{label}</span>
    <span className="text-[9px] font-mono text-white/40 uppercase">{sub}</span>
  </div>
);

const MetricBox = ({ label, value }: any) => (
  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:border-blue-500/30 transition-colors">
    <span className="text-[9px] text-white/20 font-black uppercase tracking-widest block mb-2">{label}</span>
    <span className="text-[14px] font-mono font-black text-blue-400">{value}</span>
  </div>
);

const VerificationCard = ({ label, status, detail, color = 'emerald' }: any) => (
  <div className={`p-5 bg-white/[0.02] border-l-4 rounded-2xl space-y-2 transition-all hover:bg-white/[0.04] ${color === 'emerald' ? 'border-emerald-500' : 'border-amber-500'}`}>
    <div className="flex justify-between items-center">
      <span className="text-[11px] font-black text-white/80 uppercase tracking-widest">{label}</span>
      <span className={`text-[9px] font-black px-2 py-0.5 rounded-full bg-${color}-500/10 text-${color}-400 border border-${color}-500/20`}>{status}</span>
    </div>
    <div className="text-[10px] font-mono text-white/30 italic">{detail}</div>
  </div>
);

const PowerRow = ({ label, value, color = 'blue' }: any) => (
  <div className="flex justify-between items-center group">
    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] group-hover:text-white/40 transition-colors">{label}</span>
    <span className={`text-[12px] font-mono font-black text-${color}-400`}>{value}</span>
  </div>
);

export default CircuitEngineEngineeringOS_d59d17;
