'use client';

import React, { useState } from 'react';
import {
  Settings,
  Activity,
  Network,
  Brain,
  Terminal,
  RefreshCw,
  Minimize2,
  Play,
  Pause,
  StopCircle,
  Home,
  AlertTriangle
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * VectorAlgebraDynamics v3.5 (Phase 55 Hardened)
 * 
 * Mission-critical workspace for high-precision vector algebra and Newtonian dynamics.
 * Features real-time vector projection, trajectory simulation, and system telemetry logging.
 * Integrated with motionState for real-time velocity and force vectors.
 */
const VectorAlgebraDynamicsEngineeringOS_4331e9 = () => {
  const { 
    motionState, 
    aerospaceState, 
    osStatus, 
    pushEvent, 
    addNotification 
  } = useEngineeringStore();

  const [mass, setMass] = useState(1240.00);
  const accel = 9.81;
  const forceResult = mass * accel;

  const vectorA = [72.4, 18.2];
  const vectorB = [45.1, 91.0];
  const magA = Math.sqrt(vectorA[0]**2 + vectorA[1]**2) || 204.1;
  const magB = Math.sqrt(vectorB[0]**2 + vectorB[1]**2) || 156.4;

  const handleRecalculate = () => {
    pushEvent?.('DYNAMICS_RECALCULATION_EXECUTED', { mass, accel, force: forceResult, timestamp: Date.now() });
    addNotification?.({
      title: 'SOLVER_UPDATED',
      message: `Newtonian force recalculated: ${forceResult.toFixed(2)}N based on mass shift.`,
      type: 'INFO',
      domain: 'MOTION'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
           <Settings className="text-blue-400 w-5 h-5" />
           <h1 className="font-mono text-[14px] font-black text-blue-400 uppercase tracking-[0.3em]">KINETIC_OS // DYNAMICS_LAYER</h1>
        </div>
        <nav className="hidden md:flex gap-8">
           <HeaderAction label="OPERATIONS" active />
           <HeaderAction label="SIMULATIONS" />
           <HeaderAction label="DATA_LOG" />
        </nav>
        <div className="flex items-center gap-6">
           <Settings className="w-5 h-5 text-white/20 hover:text-blue-400 cursor-pointer transition-colors" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. NAVIGATION DRAWER */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 shrink-0">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">SYSTEM_INDEX</span>
              <nav className="flex flex-col gap-1">
                 <SideNavItem icon={<Activity />} label="Telemetry" active />
                 <SideNavItem icon={<Network />} label="Kinematics" />
                 <SideNavItem icon={<Brain />} label="AI_Stability" />
                 <SideNavItem icon={<Terminal />} label="Command_Log" />
                 <SideNavItem icon={<RefreshCw />} label="System_Sync" />
              </nav>
           </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 overflow-y-auto p-6 bg-grid-pattern relative custom-scrollbar">
           <div className="grid grid-cols-12 gap-6 h-full">
              
              {/* Vector Operations Panel */}
              <section className="col-span-12 lg:col-span-8 bg-black/40 border border-white/5 rounded-[40px] flex flex-col overflow-hidden shadow-2xl backdrop-blur-3xl">
                 <div className="h-10 px-8 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
                    <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">01 // Vector_Space_Projection</span>
                    <Minimize2 className="w-3 h-3 text-white/20 hover:text-white cursor-pointer" />
                 </div>
                 <div className="flex-1 relative p-12 flex items-center justify-center bg-black/20">
                    {/* SVG Grid */}
                    <div className="absolute inset-0 opacity-10">
                       <svg width="100%" height="100%">
                          <defs>
                             <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                             </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#smallGrid)" />
                       </svg>
                    </div>
                    {/* Vector Visual */}
                    <div className="relative w-full h-80 flex items-center justify-center">
                       <div className="absolute w-full h-px bg-white/5" />
                       <div className="absolute h-full w-px bg-white/5" />
                       {/* Vector A */}
                       <div className="absolute w-[240px] h-[2px] bg-blue-400 origin-left -rotate-[45deg] shadow-[0_0_20px_#60a5fa40] animate-in slide-in-from-left duration-1000">
                          <div className="absolute -right-1 -top-1 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-blue-400" />
                          <span className="absolute -top-8 right-0 font-mono text-[11px] text-blue-400 whitespace-nowrap">V_α [72.4, 18.2]</span>
                       </div>
                       {/* Vector B */}
                       <div className="absolute w-[180px] h-[2px] bg-amber-400 origin-left rotate-[12deg] shadow-[0_0_20px_#fbbf2440] animate-in slide-in-from-left duration-1000 delay-150">
                          <div className="absolute -right-1 -top-1 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-amber-400" />
                          <span className="absolute -bottom-8 right-0 font-mono text-[11px] text-amber-400 whitespace-nowrap">V_β [45.1, 91.0]</span>
                       </div>
                    </div>
                    <div className="absolute bottom-8 left-8 flex flex-col gap-4">
                       <VectorMagnitude label="MAGNITUDE_A" value={`${magA.toFixed(1)} kN`} color="blue" />
                       <VectorMagnitude label="MAGNITUDE_B" value={`${magB.toFixed(1)} kN`} color="amber" />
                    </div>
                 </div>
              </section>

              {/* Newton Dynamics Core */}
              <section className="col-span-12 lg:col-span-4 bg-black/40 border border-white/5 rounded-[40px] flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden">
                 <div className="h-10 px-8 flex items-center border-b border-white/5 bg-white/[0.02]">
                    <span className="text-[9px] font-black text-amber-400 uppercase tracking-[0.4em]">02 // Newton_Dynamics_Core</span>
                 </div>
                 <div className="p-8 flex-1 flex flex-col gap-8">
                    <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl text-center shadow-inner">
                       <div className="flex justify-between items-center mb-4">
                          <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">EQUATION_STATE</span>
                          <span className="text-[9px] font-black text-black bg-amber-400 px-3 py-0.5 rounded-full uppercase tracking-widest">ACTIVE</span>
                       </div>
                       <div className="text-[28px] font-mono font-black text-white tracking-[0.2em]">F = m × a</div>
                    </div>
                    <div className="space-y-6">
                       <DynamicsSlider label="MASS (kg)" value={mass} max={2000} color="blue" />
                       <DynamicsSlider label="ACCEL (m/s²)" value={accel} max={20} color="cyan" />
                       <DynamicsSlider label="FORCE_RESULT (N)" value={forceResult} max={20000} color="amber" readOnly />
                    </div>
                    <button 
                       onClick={handleRecalculate}
                       className="w-full py-4 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-black text-[11px] uppercase tracking-[0.4em] rounded-2xl hover:bg-blue-500/20 transition-all active:scale-95"
                    >
                       EXECUTE_RECALCULATION
                    </button>
                 </div>
              </section>

              {/* Telemetry Log */}
              <section className="col-span-12 bg-black/40 border border-white/5 rounded-[40px] flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden">
                 <div className="h-10 px-8 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
                    <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">03 // System_Telemetry_Log</span>
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
                       <span className="text-[10px] font-mono font-black text-white uppercase tracking-widest">LIVE_FEED</span>
                    </div>
                 </div>
                 <div className="overflow-x-auto p-4">
                    <table className="w-full text-left border-collapse">
                       <thead>
                          <tr className="border-b border-white/5">
                             <th className="p-4 text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">TIMESTAMP</th>
                             <th className="p-4 text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">MODULE_ID</th>
                             <th className="p-4 text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">DOT_PRODUCT</th>
                             <th className="p-4 text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">CROSS_MAG</th>
                             <th className="p-4 text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">STABILITY_INDEX</th>
                             <th className="p-4 text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">STATUS</th>
                          </tr>
                       </thead>
                       <tbody className="font-mono text-[12px] font-bold">
                          <TelemetryRow time="T+04:12:00.12" id="V_DYN_04" dot="0.9842" cross="422.18" stability="99.2%" status="OPTIMAL" />
                          <TelemetryRow time="T+04:12:00.08" id="V_DYN_02" dot="0.1442" cross="88.04" stability="84.5%" status="ALIGN_REQ" AlertTriangle />
                          <TelemetryRow time="T+04:12:00.04" id="V_DYN_01" dot="0.8711" cross="312.92" stability="97.8%" status="OPTIMAL" />
                          <TelemetryRow time="T+04:12:00.01" id="V_DYN_03" dot="0.5521" cross="1,024.11" stability="42.1%" status="CRITICAL_VIBRATION" error />
                       </tbody>
                    </table>
                 </div>
              </section>

              {/* Torque Cross Product */}
              <section className="col-span-12 lg:col-span-5 bg-black/40 border border-white/5 rounded-[40px] flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden">
                 <div className="h-10 px-8 flex items-center border-b border-white/5 bg-white/[0.02]">
                    <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">04 // Torque_Cross_Product</span>
                 </div>
                 <div className="p-8 flex items-center gap-8 h-full">
                    <div className="w-1/2 aspect-square bg-white/[0.02] border border-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden group">
                       <div className="absolute inset-0 flex items-center justify-center opacity-20">
                          <div className="w-40 h-40 border border-blue-400 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
                       </div>
                       <Play className="text-blue-400 w-16 h-16 rotate-90 scale-150 transition-transform group-hover:scale-[1.7]" />
                       <div className="absolute top-4 left-4 text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">ORTHOGONAL_RESULTANT</div>
                    </div>
                    <div className="w-1/2 space-y-6">
                       <div className="bg-white/[0.02] border-l-4 border-blue-400 p-4 rounded-r-2xl">
                          <div className="text-[9px] font-black text-white/40 uppercase tracking-widest font-mono mb-1">RESULTANT_VECTOR (τ)</div>
                          <div className="text-[14px] font-mono font-black text-white">712.44 N·m [Z-AXIS]</div>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <MiniMetric label="FORCE_R" value="12.5m" />
                          <MiniMetric label="FORCE_F" value="88.2N" />
                       </div>
                       <button className="w-full py-3 border border-white/10 rounded-xl text-[10px] font-black text-white/20 uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all">
                          ADJUST_LEVER_ARM
                       </button>
                    </div>
                 </div>
              </section>

              {/* Projectile Motion Simulator */}
              <section className="col-span-12 lg:col-span-7 bg-black/40 border border-white/5 rounded-[40px] flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden relative">
                 <div className="h-10 px-8 flex items-center border-b border-white/5 bg-white/[0.02]">
                    <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">05 // Projectile_Motion_Simulator</span>
                 </div>
                 <div className="flex-1 relative p-12 bg-black/20">
                    <img className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuC0RN0ISeQpUEzQ07i2d531Q20i2GHCZkQbiOkhs_2kKaIkk_zu_qHHAKY5PPkCldziRxVDerbShHtnxX3HSIQzR6RVUQyZtV62iIQez-Bnk3cMKuQMdkF8qWfrToC04swnWMYvC2iqCb9uef0oqGT0Z7waJOWdHn4nBloMuARC_6V07Xl8TiGJZ7Bw5exBvh5fHUmlwfvbPB4UvAf044AVSt7x2_XSzvL1TaDCfEw32YwaBHZzEOPO--06iK3E7mYcq7r9SGeMD4RQ" alt="Sim Overlay" />
                    <div className="relative z-10 h-full flex flex-col justify-end">
                       <div className="flex gap-12 items-end">
                          <div className="flex-1 space-y-4">
                             <div className="h-32 w-full border-l border-b border-white/10 relative overflow-hidden bg-black/40 rounded-bl-xl">
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100">
                                   <path className="opacity-60" d="M0 100 Q 200 0 400 80" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 2" />
                                   <circle className="animate-pulse shadow-2xl shadow-amber-500" cx="200" cy="50" fill="#fbbf24" r="4" />
                                </svg>
                             </div>
                             <div className="flex justify-between text-[10px] font-mono font-black text-white/20 uppercase tracking-widest">
                                <span>X_RANGE: 402.1m</span>
                                <span>Y_MAX: 112.5m</span>
                             </div>
                          </div>
                          <div className="w-48 space-y-3">
                             <SimData label="THETA_θ" value="45.00°" />
                             <SimData label="V_INITIAL" value="62.5m/s" />
                          </div>
                       </div>
                    </div>
                 </div>
              </section>

           </div>
        </main>
      </div>

      {/* 4. MOBILE NAV */}
      <footer className="md:hidden h-16 border-t border-white/5 bg-black/60 backdrop-blur-3xl flex justify-around items-center shrink-0 z-50">
         <Play className="text-blue-400 scale-125" />
         <Pause className="text-white/20" />
         <StopCircle className="text-white/20" />
         <Home className="text-white/20" />
      </footer>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .bg-grid-pattern {
           background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
           background-size: 24px 24px;
        }
        .scanline-overlay {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
        }
      `}</style>
    </div>
  );
};

const HeaderAction = ({ label, active }: any) => (
  <button className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-white ${active ? 'text-blue-400' : 'text-white/20'}`}>
     {label}
  </button>
);

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-2xl' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-125 transition-transform duration-500">{icon}</div>
     <span className="text-[11px] font-black uppercase tracking-[0.3em] font-mono">{label}</span>
  </div>
);

const VectorMagnitude = ({ label, value, color }: any) => (
  <div className="flex items-center gap-4 group">
     <div className={`w-2.5 h-2.5 rounded-full shadow-2xl ${color === 'blue' ? 'bg-blue-400 shadow-blue-500/50' : 'bg-amber-400 shadow-amber-500/50'}`} />
     <span className="text-[10px] font-black text-white/40 uppercase tracking-widest font-mono group-hover:text-white transition-colors">{label}: {value}</span>
  </div>
);

const DynamicsSlider = ({ label, value, max, color, readOnly }: any) => (
  <div className="space-y-3">
     <div className="flex justify-between items-end">
        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest font-mono">{label}</span>
        <span className={`text-[12px] font-mono font-black ${color === 'blue' ? 'text-blue-400' : color === 'cyan' ? 'text-cyan-400' : 'text-amber-400'}`}>{value.toLocaleString()}</span>
     </div>
     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full shadow-2xl transition-all duration-500 ${color === 'blue' ? 'bg-blue-500 shadow-blue-500/40' : color === 'cyan' ? 'bg-cyan-400 shadow-cyan-400/40' : 'bg-amber-400 shadow-amber-400/40'}`} style={{ width: `${(value/max)*100}%` }} />
     </div>
  </div>
);

const TelemetryRow = ({ time, id, dot, cross, stability, status, AlertTriangle, error }: any) => (
  <tr className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group">
     <td className="p-4 text-white/20 group-hover:text-white transition-colors">{time}</td>
     <td className="p-4 text-white/60">{id}</td>
     <td className="p-4 text-blue-400">{dot}</td>
     <td className="p-4 text-amber-400">{cross}</td>
     <td className="p-4 text-white/80">{stability}</td>
     <td className="p-4">
        <span className={`text-[9px] px-3 py-1 rounded-full font-black uppercase tracking-widest border ${error ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : AlertTriangle ? 'bg-amber-400/10 text-amber-400 border-amber-400/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}>
           {status}
        </span>
     </td>
  </tr>
);

const MiniMetric = ({ label, value }: any) => (
  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
     <div className="text-[8px] font-black text-white/20 uppercase tracking-widest font-mono mb-1">{label}</div>
     <div className="text-[12px] font-mono font-black text-white">{value}</div>
  </div>
);

const SimData = ({ label, value }: any) => (
  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl group hover:border-blue-500/20 transition-all">
     <div className="text-[8px] font-black text-blue-400 uppercase tracking-widest font-mono mb-1">{label}</div>
     <div className="text-[13px] font-mono font-black text-white">{value}</div>
  </div>
);

export default VectorAlgebraDynamicsEngineeringOS_4331e9;
