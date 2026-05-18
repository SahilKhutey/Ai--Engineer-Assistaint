'use client';

import React from 'react';
import {
  Globe,
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
  Wind,
  Compass,
  Crosshair,
  Map,
  Target,
  Rocket,
  RefreshCcw,
  Signal
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * OrbitalMechanics v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity space systems workspace with real-time orbital mechanics telemetry.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const OrbitalMechanicsEngineeringOS_7d2c66 = () => {
  const { aerospaceState } = useEngineeringStore();
  const { 
    orbital = {
      periapsis_km: 408.2,
      apoapsis_km: 415.8,
      inclination_deg: 51.64,
      velocity_kms: 7.66,
      eccentricity: 0.00042,
      propellantMass_pct: 82.4,
      deltaV_total_kms: 1.244
    }
  } = aerospaceState || {};

  return (
    <div className="flex-1 flex flex-col bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. TOP STATUS BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex justify-between items-center z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em]">LINK: LEO_SAT_01_ACTIVE</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Globe: ORBITAL_MECHANICS_SOVEREIGN</span>
        </div>
        <div className="flex items-center gap-4">
          <Signal className="w-4 h-4 text-blue-400" />
          <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
        
        {/* 2. ORBITAL VIEWPORT (Center) */}
        <main className="flex-1 relative bg-black/20 flex flex-col overflow-hidden animate-in fade-in duration-1000">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          
          <div className="h-8 px-6 flex items-center bg-white/[0.02] border-b border-white/5 justify-between backdrop-blur z-10">
            <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">VIEWPORT_01: ORBITAL_TRAJECTORY_SYNC</span>
            <div className="flex gap-4">
              <span className="text-[9px] font-mono text-blue-400/60 uppercase">EPOCH: J2000.0</span>
            </div>
          </div>

          {/* Rendering Area */}
          <div className="flex-1 relative flex items-center justify-center p-12 overflow-hidden">
            <div className="w-full h-full border border-blue-500/10 rounded-[48px] relative group overflow-hidden bg-black/60 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-screen pointer-events-none grayscale select-none">
                <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBOC3H6ckSthf6H1kyo1fjWUULXAFQnO9iTZnZVnhJj8QjXDVEiCTi_Z9H_5W4-FBtFyxeW0nxAJZvRWwjUwb-UYcEoprGhP3MDBybUQHmKCrTj-guTxhd892ndRiF_tPE69NikyHmOpb9qraquErnBOhu3yMrozoLEl--F7BMCpdudtv8O1jryr6iNx9xWBm5GRuJgSzr3-XfSMNNmSh87gg-5e80tyh0wbk8yKczMhAmiHAR8OOJiSZtVLF2C_8XBoAZ5YhboMi1X" className="w-full h-full object-cover" />
              </div>

              {/* HUD Overlays */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                 <div className="w-[600px] h-[300px] border border-blue-500/20 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                       <div className="absolute inset-0 bg-blue-500 blur-[60px] opacity-10" />
                       <div className="w-32 h-32 border border-blue-400/30 rounded-full flex items-center justify-center animate-pulse">
                          <Globe className="w-12 h-12 text-blue-400/60" />
                       </div>
                    </div>
                 </div>
              </div>

              {/* Target Lock */}
              <div className="absolute top-12 left-12 p-8 bg-black/80 border border-blue-500/20 backdrop-blur-2xl rounded-[32px] shadow-2xl space-y-4 group hover:border-blue-500/40 transition-all">
                <div className="flex items-center gap-3">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">TARGET_LOCK: SAT_GAMMA_9</span>
                </div>
                <div className="grid grid-cols-2 gap-8">
                   <div className="flex flex-col">
                      <span className="text-[9px] text-white/20 uppercase font-black tracking-widest">TrendingUp</span>
                      <span className="text-[18px] font-mono font-black text-emerald-400">{orbital.periapsis_km.toFixed(1)} KM</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[9px] text-white/20 uppercase font-black tracking-widest">VELOCITY</span>
                      <span className="text-[18px] font-mono font-black text-emerald-400">{orbital.velocity_kms.toFixed(2)} KM/S</span>
                   </div>
                </div>
              </div>

              {/* Right Data Tiling */}
              <div className="absolute top-12 right-12 flex flex-col gap-6 w-72">
                 <TrajectoryCard label="ORBITAL_VECTORS">
                    <VectorRow label="Eccentricity" value={orbital.eccentricity.toFixed(5)} />
                    <VectorRow label="Inclination" value={`${orbital.inclination_deg.toFixed(2)}°`} />
                    <div className="h-px bg-white/5 my-4" />
                    <div className="space-y-2">
                       <span className="text-[9px] font-black text-white/20 uppercase tracking-widest block">Rocket Equation Verification</span>
                       <code className="block bg-white/[0.02] p-3 rounded-xl font-mono text-[10px] text-blue-400/60">
                          Δv = v_e * ln(m_0 / m_f)
                       </code>
                    </div>
                 </TrajectoryCard>

                 <TrajectoryCard label="FUEL_OPTIMIZATION" icon={RefreshCcw}>
                    <div className="space-y-4">
                       <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">PROPELLANT_MASS</span>
                          <span className="text-[10px] font-mono font-black text-blue-400">{orbital.propellantMass_pct.toFixed(1)}%</span>
                       </div>
                       <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                          <div className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-1000" style={{ width: `${orbital.propellantMass_pct}%` }} />
                       </div>
                       <button className="w-full py-4 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-500 hover:text-white transition-all active:scale-[0.98]">
                          EXECUTE_HOFMANN_TRANSFER
                       </button>
                    </div>
                 </TrajectoryCard>
              </div>
            </div>
          </div>

          {/* Bottom Bento Data Tiling */}
          <div className="h-56 border-t border-white/5 bg-black/40 p-8 grid grid-cols-4 gap-8 backdrop-blur-3xl overflow-hidden">
             {/* Physics Engine */}
             <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[32px] flex flex-col justify-between group hover:border-blue-500/20 transition-all">
                <div className="flex items-center gap-3 text-blue-400 mb-4">
                   <Cpu className="w-4 h-4" />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em]">PHYSICS_ENGINE</span>
                </div>
                <div className="space-y-3">
                   <BentoStat label="Gravitational Force" value="F=GMm/r²" />
                   <BentoStat label="G Constant" value="6.674e-11" />
                   <BentoStat label="Frame Rate" value="60.0 HZ" color="emerald" />
                </div>
             </div>

             {/* Telemetry Stream */}
             <div className="col-span-2 bg-white/[0.02] border border-white/5 p-6 rounded-[32px] flex flex-col justify-between group hover:border-blue-500/20 transition-all">
                <div className="flex items-center gap-3 text-emerald-400 mb-4">
                   <Activity className="w-4 h-4" />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em]">TELEMETRY_STREAM</span>
                </div>
                <div className="grid grid-cols-3 gap-8 flex-1 items-center">
                   <TelemetryBox label="Δv_TOTAL (KM/S)" value={orbital.deltaV_total_kms.toFixed(3)} />
                   <TelemetryBox label="TWR_MAX" value="0.92" color="blue" />
                   <TelemetryBox label="ISP_VACUUM" value="302s" color="amber" />
                </div>
                <div className="w-full h-12 bg-white/[0.01] rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
                   <svg className="w-full h-full" viewBox="0 0 400 50">
                      <path 
                        d={`M0 25 L50 ${20 + 5 * Math.sin(Date.now() / 200)} L100 35 L150 15 L200 30 L250 22 L300 38 L350 20 L400 25`} 
                        fill="none" 
                        stroke="#10b981" 
                        strokeDasharray="4" 
                        strokeWidth="1.5"
                        className="opacity-40"
                      />
                   </svg>
                </div>
             </div>

             {/* Sim State */}
             <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[32px] flex flex-col justify-between group hover:border-blue-500/20 transition-all">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">SIMULATION_STATE</span>
                <div className="space-y-3">
                   <button className="w-full py-3 border border-blue-500/20 text-blue-400 font-black text-[9px] rounded-xl hover:bg-blue-500/10 transition-all flex items-center justify-center gap-2">
                      <Play className="w-3 h-3 fill-current" />
                      RUN_PROPAGATION
                   </button>
                   <button className="w-full py-3 border border-rose-500/20 text-rose-500 font-black text-[9px] rounded-xl hover:bg-rose-500/10 transition-all flex items-center justify-center gap-2">
                      <Zap className="w-3 h-3 fill-current" />
                      ABORT_SEQUENCE
                   </button>
                </div>
                <div className="flex justify-around text-white/20">
                   <RefreshCcw className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
                   <Play className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
                   <Settings className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
                </div>
             </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>
    </div>
  );
};

const TrajectoryCard = ({ label, icon: Icon, children }: any) => (
  <div className="bg-black/80 border border-white/5 backdrop-blur-3xl rounded-[32px] overflow-hidden shadow-2xl group hover:border-blue-500/20 transition-all">
    <div className="bg-white/[0.02] px-6 py-2 border-b border-white/5 flex justify-between items-center">
       <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">{label}</span>
       {Icon && <Icon className="w-3 h-3 text-white/20" />}
    </div>
    <div className="p-6">{children}</div>
  </div>
);

const VectorRow = ({ label, value }: any) => (
  <div className="flex justify-between items-center py-1">
    <span className="text-[10px] font-mono text-white/30 uppercase">{label}</span>
    <span className="text-[11px] font-mono font-black text-blue-400">{value}</span>
  </div>
);

const BentoStat = ({ label, value, color = 'blue' }: any) => (
  <div className="flex justify-between items-end border-b border-white/5 pb-2">
    <span className="text-[9px] text-white/20 font-black uppercase tracking-widest">{label}</span>
    <span className={`text-[11px] font-mono font-black text-${color}-400`}>{value}</span>
  </div>
);

const TelemetryBox = ({ label, value, color = 'emerald' }: any) => (
  <div className="flex flex-col items-center">
    <span className={`text-[18px] font-mono font-black text-${color}-400`}>{value}</span>
    <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em] mt-2">{label}</span>
  </div>
);

export default OrbitalMechanicsEngineeringOS_7d2c66;
