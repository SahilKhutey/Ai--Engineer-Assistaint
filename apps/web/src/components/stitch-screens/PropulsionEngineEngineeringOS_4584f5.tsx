'use client';

import React from 'react';
import {
  Rocket,
  Activity,
  Gauge,
  Thermometer,
  Settings,
  Terminal,
  BarChart3,
  TrendingUp,
  Cpu,
  Zap,
  Layers,
  Play,
  Info,
  AlertTriangle,
  MoveUp,
  Wind
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * PropulsionEngine v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity aerospace propulsion workspace with real-time thrust and efficiency telemetry.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const PropulsionEngineEngineeringOS_4584f5 = () => {
  const { propulsionState, physicsState } = useEngineeringStore();
  const { 
    thrust_kN = 120.5, 
    massFlow_kgs = 2.4, 
    specificImpulse_s = 4200, 
    coreTemp_K = 2850,
    nozzleEfficiency = 0.982
  } = propulsionState || {};

  return (
    <div className="flex-1 flex flex-col bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. TOP STATUS BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex justify-between items-center z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">PROP_SOLVER_LIVE</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Globe: HYPERSONIC_PROPULSION</span>
        </div>
        <div className="flex items-center gap-4">
          <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
          <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
            <span className="text-[9px] font-mono text-blue-400 font-bold uppercase">v3.2_HARDENED</span>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
        
        {/* 2. MAIN VIEWPORT (Left) */}
        <main className="flex-1 relative bg-black/20 flex flex-col overflow-hidden animate-in fade-in duration-1000">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          
          <div className="h-8 px-6 flex items-center bg-white/[0.02] border-b border-white/5 justify-between backdrop-blur z-10">
            <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">VIEWPORT_01: PROPULSION_CORE_HVD</span>
            <div className="flex gap-4">
              <span className="text-[9px] font-mono text-blue-400/60 uppercase">T+ 00:04:22:15</span>
            </div>
          </div>

          {/* Rendering Area */}
          <div className="flex-1 relative flex items-center justify-center p-12 overflow-hidden">
            <div className="w-full h-full border border-blue-500/10 rounded-[48px] relative group overflow-hidden bg-black/60 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-screen pointer-events-none grayscale select-none">
                <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBPLFiZV91ZX2LflM0fyvmELibaIRUPep1dq6YrqQebGGQPW4irJO2BgR2JyClXjSYcrEe0_fSwb7BvMuS8hNJYThXMGiCP6Ok-BYRyT6om5nZpwqY8Gzih0FeoeevZ2z6emzZmznouyASF8Vlek9Yavubc_A5DFGwGUd5BYc1gxcDn1Q_3uT8mV5ioWZH_rdWHVne3yUkuWZXXJYPjIXNVIR0EYXr0OgeNLQ9l8Tcv8ULc4JJRw0UGc46dONco7IzslBM07yMM_eA0" className="w-full h-full object-cover" />
              </div>

              {/* HUD Overlays */}
              <div className="absolute top-12 left-12 flex flex-col gap-4">
                 <div className="h-64 w-2 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-500 via-yellow-400 to-rose-600 transition-all duration-500 shadow-[0_0_20px_rgba(225,29,72,0.3)]" style={{ height: `${(coreTemp_K / 4000) * 100}%` }} />
                 </div>
                 <span className="text-[9px] font-mono text-rose-400 font-bold uppercase">{coreTemp_K.toFixed(0)}K</span>
              </div>

              {/* Thrust Vector */}
              <div className="absolute bottom-12 right-12 p-8 bg-black/80 border border-blue-500/20 backdrop-blur-2xl rounded-[32px] shadow-2xl space-y-4 group hover:border-blue-500/40 transition-all">
                <div className="flex items-center gap-3">
                  <Rocket className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">VECTOR_LOCK</span>
                </div>
                <div className="w-32 h-32 flex items-center justify-center border border-white/5 rounded-full relative bg-white/[0.01]">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                   <div className="absolute w-[2px] h-16 bg-blue-400/60 origin-bottom transition-transform duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)]" style={{ transform: `rotate(${15 + Math.sin(Date.now() / 1000) * 5}deg)` }} />
                </div>
                <div className="text-center font-mono text-[10px] text-blue-400/60 uppercase">α: +2.4° | β: -0.12°</div>
              </div>

              {/* Central Telemetry Lock */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                 <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 blur-[80px] opacity-10 animate-pulse" />
                    <div className="w-64 h-64 border-[0.5px] border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="bg-blue-500/5 border border-blue-500/30 px-6 py-2 rounded-full backdrop-blur-xl shadow-2xl flex items-center gap-4">
                          <Wind className="w-4 h-4 text-blue-400" />
                          <span className="text-[12px] font-black text-white uppercase tracking-[0.2em]">{thrust_kN.toFixed(1)} KN</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Log Terminal */}
          <div className="h-44 border-t border-white/5 bg-black/40 p-8 font-mono text-[11px] overflow-y-auto custom-scrollbar backdrop-blur-3xl">
            <div className="text-blue-500/60 mb-1">[14:02:11] INITIALIZING IGNITION SEQUENCE...</div>
            <div className="text-white/20 mb-1">[14:02:12] PRE-CHILL READY | TURBOPUMP RPM: 12,400</div>
            <div className="text-emerald-400 mb-1">[14:02:16] THRUST STEADY AT {thrust_kN.toFixed(2)} KN | {specificImpulse_s.toFixed(0)}s Isp</div>
            <div className="text-white/20 mb-1">[14:02:18] THERMAL GRADIENT WITHIN PARAMETERS | NOZZLE_EFF: {(nozzleEfficiency * 100).toFixed(2)}%</div>
            <div className="text-amber-500/60 mb-1">[14:02:20] AlertTriangle: MINOR VIBRATION AT GIMBAL MOUNT (Globe: MECHANICAL)</div>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-blue-500 font-bold">&gt;</span>
              <input className="bg-transparent border-none outline-none focus:ring-0 p-0 text-white/80 w-full placeholder:text-white/10" placeholder="System Terminal input..." type="text"/>
            </div>
          </div>
        </main>

        {/* 3. ANALYSIS & PERFORMANCE (Right) */}
        <aside className="w-full lg:w-[480px] bg-black/40 border-l border-white/5 flex flex-col backdrop-blur-3xl overflow-y-auto custom-scrollbar">
          
          {/* Performance Summary */}
          <div className="p-8 border-b border-white/5 space-y-8">
            <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3">
              <BarChart3 className="w-3 h-3" />
              PERFORMANCE_SUMMARY
            </h3>
            <div className="grid grid-cols-2 gap-4">
               <MetricCard label="THRUST_FORCE" value={`${thrust_kN.toFixed(1)} KN`} icon={MoveUp} />
               <MetricCard label="SPECIFIC_IMPULSE" value={`${specificImpulse_s.toFixed(0)} S`} icon={TrendingUp} color="emerald" />
               <MetricCard label="MASS_FLOW" value={`${massFlow_kgs.toFixed(2)} KG/S`} icon={Activity} color="blue" />
               <MetricCard label="NOZZLE_EFF" value={`${(nozzleEfficiency * 100).toFixed(2)}%`} icon={Layers} color="amber" />
            </div>
          </div>

          {/* Equation & Solver */}
          <div className="p-8 border-b border-white/5 space-y-6">
            <div className="flex justify-between items-center">
               <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3">
                <Cpu className="w-3 h-3" />
                EQUATION_STATE
               </h3>
               <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest animate-pulse">ACTIVE_SOLVER</span>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[32px] shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all">
               <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/40" />
               <p className="font-mono text-[16px] text-blue-400/90 leading-relaxed text-center italic mb-4">
                  F = ṁ(V_e - V_0) + (P_e - P_0)A_e
               </p>
               <div className="h-px bg-white/5 my-4" />
               <div className="space-y-2">
                  <EquationVariable label="EXIT_VELOCITY (V_e)" value="3,480 m/s" />
                  <EquationVariable label="AMBIENT_PRESSURE (P_0)" value="101.3 kPa" />
               </div>
            </div>
          </div>

          {/* Thermal Field */}
          <div className="p-8 space-y-8 flex-1">
            <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3">
              <Thermometer className="w-3 h-3" />
              THERMAL_FIELD_MAPPING
            </h3>
            <div className="w-full h-56 bg-white/[0.02] border border-white/5 rounded-[40px] relative overflow-hidden flex flex-col items-center justify-center group">
               <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
               <div className="w-4/5 h-4 bg-gradient-to-r from-blue-500/40 via-yellow-400/40 to-rose-600/60 blur-xl animate-pulse" />
               <div className="absolute top-6 left-8 space-y-2">
                  <div className="flex items-center gap-3">
                     <AlertTriangle className="w-3 h-3 text-rose-500" />
                     <span className="text-[10px] font-mono font-black text-rose-400 uppercase tracking-widest">MAX_CORE: {coreTemp_K.toFixed(0)}K</span>
                  </div>
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest block ml-6">THROAT: {(coreTemp_K * 0.84).toFixed(0)}K</span>
               </div>
               <div className="absolute bottom-6 right-8">
                  <span className="text-[9px] font-mono text-blue-400/40 uppercase tracking-widest">COOLANT_FLOW: STABLE</span>
               </div>
            </div>

            <button className="w-full py-5 bg-blue-500 text-white font-black text-[12px] uppercase tracking-[0.4em] rounded-[24px] shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4">
              <Play className="w-5 h-5 fill-current" />
              EXECUTE_THERMAL_SWEEP
            </button>
          </div>
        </aside>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};

const MetricCard = ({ label, value, icon: Icon, color = 'blue' }: any) => {
  const colorMap: any = {
    blue: 'text-blue-400 border-blue-500/10 bg-blue-500/5 hover:border-blue-500/30',
    emerald: 'text-emerald-400 border-emerald-500/10 bg-emerald-500/5 hover:border-emerald-500/30',
    amber: 'text-amber-400 border-amber-500/10 bg-amber-500/5 hover:border-amber-500/30',
    rose: 'text-rose-400 border-rose-500/10 bg-rose-500/5 hover:border-rose-500/30',
  };

  return (
    <div className={`p-6 border rounded-[32px] transition-all duration-500 group cursor-default ${colorMap[color]}`}>
      <div className="flex justify-between items-center mb-4">
         <span className="text-[9px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40">{label}</span>
         <Icon className="w-3 h-3 opacity-20 group-hover:opacity-60 transition-opacity" />
      </div>
      <div className="text-[18px] font-mono font-black tracking-tight">{value}</div>
    </div>
  );
};

const EquationVariable = ({ label, value }: any) => (
  <div className="flex justify-between items-center text-[10px] font-mono">
    <span className="text-white/30 uppercase tracking-widest">{label}</span>
    <span className="text-white/60 font-bold">{value}</span>
  </div>
);

export default PropulsionEngineEngineeringOS_4584f5;
