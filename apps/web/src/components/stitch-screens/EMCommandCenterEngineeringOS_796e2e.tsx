'use client';

import React from 'react';
import {
  Zap,
  Activity,
  Gauge,
  Thermometer,
  Settings,
  Terminal,
  BarChart3,
  TrendingUp,
  Cpu,
  Layers,
  Play,
  Info,
  AlertTriangle,
  MoveUp,
  Compass,
  Crosshair,
  Map,
  Target,
  Rocket,
  RefreshCcw,
  Radio,
  Database,
  ShieldCheck,
  Share2,
  Camera,
  Clock,
  Maximize2,
  Minimize2,
  ChevronRight,
  Waves,
  Magnet,
  Box,
  Hash
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * EMCommandCenter v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity electromagnetic intelligence workspace with real-time Maxwell systems telemetry.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const EMCommandCenterEngineeringOS_796e2e = () => {
  const { electromagneticState } = useEngineeringStore();
  const { 
    emFields = { electricField_Vm: 452000, magneticField_T: 1.42 },
    stability = { lorentzStress: 0.88, divBErr: 1.2e-7, jVectorZ: 0.992 },
    system = { cryogenics: 'NOMINAL', fluxLeak: 'NOMINAL' }
  } = electromagneticState || {};

  return (
    <div className="flex-1 flex flex-col bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. TOP STATUS BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex justify-between items-center z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">EM_UNIFIED_OS_v4.2</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <nav className="hidden md:flex gap-6">
             <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] cursor-pointer">SIMULATION_LIVE</span>
             <span className="text-[10px] font-black text-white/20 hover:text-white/40 uppercase tracking-[0.2em] cursor-pointer transition-colors">ARCHIVE_V3</span>
          </nav>
        </div>
        <div className="flex items-center gap-4">
           <Radio className="w-4 h-4 text-blue-400" />
           <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden p-8 gap-8 animate-in fade-in duration-1000">
        
        {/* 2. MAXWELL SYSTEMS (Left) */}
        <div className="w-full lg:w-[420px] flex flex-col gap-8">
           
           <section className="bg-black/40 border border-white/5 rounded-[40px] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">MAXWELL_SYSTEMS_v0.9</span>
              </div>
              <div className="p-8 space-y-8">
                 <EquationRow label="GAUSS_LAW" formula="∇ · E = ρ / ε₀" color="blue" />
                 <EquationRow label="GAUSS_LAW_MAG" formula="∇ · B = 0" color="emerald" />
                 <EquationRow label="FARADAY_LAW" formula="∇ × E = −∂B / ∂t" color="amber" />
                 <EquationRow label="AMPERE_CIRCUITAL" formula="∇ × B = μ₀(J + ε₀ ∂E/∂t)" color="rose" />
              </div>
           </section>

           <section className="flex-1 bg-black/40 border border-white/5 rounded-[40px] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">MEDIUM_CONSTANTS</span>
              </div>
              <div className="p-8 overflow-y-auto custom-scrollbar">
                 <table className="w-full text-left">
                    <thead className="text-[9px] font-black text-white/20 uppercase tracking-widest border-b border-white/5">
                       <tr>
                          <th className="pb-4">SYMBOL</th>
                          <th className="pb-4">VAL_UNIT</th>
                       </tr>
                    </thead>
                    <tbody className="text-[11px] font-mono">
                       <ConstantRow symbol="ε₀" value="8.854e-12 F/m" />
                       <ConstantRow symbol="μ₀" value="1.256e-06 H/m" />
                       <ConstantRow symbol="σ_cond" value="5.800e+07 S/m" />
                       <ConstantRow symbol="c_vac" value="2.997e+08 m/s" />
                    </tbody>
                 </table>
              </div>
           </section>
        </div>

        {/* 3. VECTOR FIELD RENDERER (Center) */}
        <div className="flex-1 flex flex-col gap-8 min-h-0">
           
           <section className="flex-1 bg-black/60 border border-white/5 rounded-[48px] relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 z-0">
                 <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBIIDUy3pAuaCuQ5gGq_3kRcwCEdLtmtQ54IGRjQLKSEKiBHhfyfv96Q3fzQUGy7CrgPnuZZASfVbBfXs2B4ZvM2Jz4J32mAY0tZuyhi6YyF_r2ZzmDgcCddcvwwGclXIwJiAV2Cr2m-y9H_DB1CX4Fbx61Y2G7cCjcRX6eeBIV14pBbpmcbLqpWflO3GYOWrK0qkVvJMNKm0UH-qWQixDMsKribt5bRww1eh6jTigrKVT3u4eCXoBqCtR0pJO0faIsLWF72goJ2UdO" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000" />
              </div>
              <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
              
              <div className="absolute top-0 left-0 right-0 h-10 bg-white/[0.02] backdrop-blur-3xl border-b border-white/5 flex justify-between items-center px-8 z-10">
                 <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                    <span className="text-[9px] font-black text-emerald-400 uppercase tracking-[0.4em]">VECTOR_FIELD_RENDERER: ACTIVE</span>
                 </div>
                 <Maximize2 className="w-3 h-3 text-white/20 hover:text-white transition-colors cursor-pointer" />
              </div>

              {/* Float Data Chips */}
              <div className="absolute top-20 right-8 flex flex-col gap-4 z-10">
                 <DataChip label="FLUX_DENSITY" value={`${emFields.magneticField_T.toFixed(2)} T`} color="blue" />
                 <DataChip label="E_MAGNITUDE" value={`${(emFields.electricField_Vm / 1000).toFixed(0)} kV/m`} color="emerald" />
              </div>

              {/* Axis Ref */}
              <div className="absolute bottom-8 left-8 p-4 bg-black/80 backdrop-blur-2xl border border-white/5 rounded-2xl flex flex-col gap-2">
                 <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">AXIS_REF</span>
                 <div className="flex gap-4 font-mono text-[10px]">
                    <span className="text-rose-400">X+</span>
                    <span className="text-blue-400">Y+</span>
                    <span className="text-emerald-400">Z+</span>
                 </div>
              </div>
           </section>

           {/* AI Reasoning Log */}
           <section className="h-[240px] bg-black/40 border border-white/5 rounded-[40px] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <div className="flex items-center gap-4">
                    <Terminal className="w-3 h-3 text-blue-400" />
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">AI_REASONING_ENGINE::CONFINEMENT_MONITOR</span>
                 </div>
                 <span className="text-[9px] font-mono text-white/10 uppercase">LOGS: 4.2k/s</span>
              </div>
              <div className="p-6 flex-1 overflow-y-auto custom-scrollbar space-y-2">
                 <ReasoningLog time="14:22:01:045" type="DEBUG_AI" msg="Analyzing magnetic surface topology... Poincare map indicates minor stochasticity." color="blue" />
                 <ReasoningLog time="14:22:01:098" type="PHYS_MATH" msg="Solving Lorentz force vector sum: F = q(E + v × B)." color="emerald" />
                 <ReasoningLog time="14:22:02:221" type="WARN" msg="Magnetohydrodynamic (MHD) kink mode instability detected." color="rose" alert />
                 <ReasoningLog time="14:22:02:440" type="HEURISTIC" msg="AI suggesting immediate current ramp-down in Outer Poloidal Coils." color="amber" />
              </div>
           </section>
        </div>

        {/* 4. STABILITY & SYSTEM (Right) */}
        <div className="w-full lg:w-[420px] flex flex-col gap-8">
           
           <section className="bg-black/40 border border-white/5 rounded-[40px] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">STABILITY_MONITOR</span>
              </div>
              <div className="p-8 space-y-8">
                 <div>
                    <div className="flex justify-between items-end mb-4">
                       <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">LORENTZ_STRESS</span>
                       <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest">CRITICAL</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-rose-500 shadow-[0_0_20px_#f43f5e] transition-all duration-1000" style={{ width: `${stability.lorentzStress * 100}%` }} />
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <MetricBox label="DIV_B_ERR" value={stability.divBErr.toExponential(1)} color="blue" />
                    <MetricBox label="J_VECTOR_Z" value={stability.jVectorZ.toFixed(3)} color="emerald" />
                 </div>
                 <div className="h-32 bg-black/60 border border-white/5 rounded-[32px] overflow-hidden flex items-end px-2 pb-2 gap-1">
                    {[40, 55, 48, 62, 70, 85, 78, 95, 88, 75, 60, 50, 65, 80, 92].map((h, i) => (
                       <div key={i} className={`flex-1 rounded-t-lg transition-all duration-1000 ${h > 80 ? 'bg-rose-500' : h > 60 ? 'bg-blue-400' : 'bg-blue-500/20'}`} style={{ height: `${h}%` }} />
                    ))}
                 </div>
              </div>
           </section>

           <section className="bg-black/40 border border-white/5 rounded-[40px] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_STATE</span>
              </div>
              <div className="p-8 space-y-4">
                 <StateRow label="CRYOGENICS" value={system.cryogenics} color="emerald" />
                 <StateRow label="FLUX_LEAK" value={system.fluxLeak} color={system.fluxLeak === 'NOMINAL' ? 'emerald' : 'rose'} />
                 <StateRow label="AI_REASONER" value="COMPUTING" color="blue" />
              </div>
           </section>
        </div>
      </main>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>
    </div>
  );
};

const EquationRow = ({ label, formula, color }: any) => {
  const colors: any = {
    blue: 'border-blue-500/20 text-blue-400 bg-blue-500/5',
    emerald: 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5',
    amber: 'border-amber-500/20 text-amber-400 bg-amber-500/5',
    rose: 'border-rose-500/20 text-rose-400 bg-rose-500/5',
  };
  return (
    <div className={`p-6 border rounded-[32px] flex flex-col gap-2 transition-all hover:pl-10 ${colors[color]}`}>
       <span className="text-[9px] font-black uppercase tracking-widest opacity-60">{label}</span>
       <code className="text-[14px] font-mono font-black">{formula}</code>
    </div>
  );
};

const ConstantRow = ({ symbol, value }: any) => (
  <tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-all">
    <td className="py-4 text-white/60 font-black">{symbol}</td>
    <td className="py-4 text-blue-400 font-black text-right">{value}</td>
  </tr>
);

const DataChip = ({ label, value, color }: any) => {
  const colors: any = {
    blue: 'border-blue-500/40 text-blue-400',
    emerald: 'border-emerald-500/40 text-emerald-400',
  };
  return (
    <div className={`p-4 bg-black/80 backdrop-blur-2xl border rounded-2xl flex flex-col shadow-2xl ${colors[color]}`}>
       <span className="text-[8px] font-black uppercase tracking-widest opacity-40">{label}</span>
       <span className="text-[18px] font-mono font-black">{value}</span>
    </div>
  );
};

const MetricBox = ({ label, value, color }: any) => (
  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col gap-1">
    <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">{label}</span>
    <span className={`text-[12px] font-mono font-black text-${color}-400`}>{value}</span>
  </div>
);

const StateRow = ({ label, value, color }: any) => (
  <div className="flex justify-between items-center p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-white/[0.04] transition-all">
    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{label}</span>
    <span className={`text-[9px] font-mono font-black px-3 py-1 rounded-full border border-${color}-500/20 bg-${color}-500/10 text-${color}-400`}>
       {value}
    </span>
  </div>
);

const ReasoningLog = ({ time, type, msg, color, alert }: any) => {
  const colors: any = {
    blue: 'text-blue-400',
    emerald: 'text-emerald-400',
    rose: 'text-rose-400',
    amber: 'text-amber-400',
  };
  return (
    <div className={`flex gap-6 text-[10px] font-mono p-2 rounded-lg transition-all ${alert ? 'bg-rose-500/10 animate-pulse' : 'hover:bg-white/[0.02]'}`}>
       <span className="text-white/20 shrink-0">[{time}]</span>
       <span className={`${colors[color]} font-black shrink-0 w-24`}>{type}</span>
       <span className="text-white/60">{msg}</span>
    </div>
  );
};

export default EMCommandCenterEngineeringOS_796e2e;
