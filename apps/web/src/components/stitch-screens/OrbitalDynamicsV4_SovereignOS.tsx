'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Rocket,
  Activity,
  Shield,
  Zap,
  Info,
  Terminal,
  Target,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Search,
  Maximize2,
  Settings,
  Smartphone,
  RefreshCw,
  ChevronRight,
  Binary,
  Gauge,
  Wind,
  XCircle
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * OrbitalDynamicsV4_SovereignOS (Phase 55 Hardened)
 * 
 * High-fidelity mission control workspace for orbital phase adjustments
 * and real-time telemetry orchestration. Features reality-linked diagnostics
 * and an integrated AI reasoning pipeline.
 */
const OrbitalDynamicsV4_SovereignOS = () => {
  const { osStatus, addNotification, streams, notifications: Bell } = useEngineeringStore();
  
  // Real-time values mapped from store
  const cpuLoad = (osStatus.kernelLoad || 0.245) * 100;
  
  // Find specific Sliders from telemetry stream
  const thrustVector = streams.telemetry?.find(t => t.sensorId === 'THRUST_VEC')?.value || 42.8;
  const thermalS3 = streams.telemetry?.find(t => t.sensorId === 'THERMAL_S3')?.value || 842;
  const propulsionAlpha = streams.telemetry?.find(t => t.sensorId === 'PROP_ALPHA')?.value || 98;
  const oxygenReserve = streams.telemetry?.find(t => t.sensorId === 'O2_RESERVE')?.value || 72;
  const shieldIntegrity = streams.telemetry?.find(t => t.sensorId === 'SHIELD_INT')?.value || 45;
  
  // Map Bell to logs
  const logs = Bell.slice(-10).map((n: any) => ({
    time: new Date(n.timestamp).toLocaleTimeString([], { hour12: false }),
    source: n.Globe || 'SYSTEM',
    msg: n.message
  }));

  if (logs.length === 0) {
    logs.push(
      { time: '14:32:01', source: 'SYSTEM', msg: 'Initializing orbital phase adjustment...' },
      { time: '14:32:04', source: 'CORE', msg: 'Calculating delta-V for burn sequence.' },
      { time: '14:32:06', source: 'ALARM', msg: 'Thermal spike detected in thruster manifold B.' },
      { time: '14:32:08', source: 'AI_CMD', msg: 'Redirecting coolant to manifold B. Mitigating risk.' },
      { time: '14:32:10', source: 'STATUS', msg: 'Thermal recovery in progress. 12s to nominal.' }
    );
  }

  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Real-time jitter for aesthetics (removed local intervals as we use store streams)
  useEffect(() => {
    // We could Plus local noise here if needed, but the store now handles real data
  }, []);

  const handleApprove = () => {
    addNotification({
      title: 'ADJUSTMENT_EXECUTED',
      message: 'RCS burst confirmed at T+140. Trajectory deviation corrected.',
      type: 'SUCCESS',
      domain: 'AEROSPACE'
    });
  };

  return (
    <div className="flex-1 flex flex-col p-8 gap-8 overflow-hidden bg-[#05070A] relative">
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* HEADER SECTION */}
      <div className="flex justify-between items-end relative z-10 shrink-0">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_#60a5fa]" />
              <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em]">Active_Workspace</span>
            </div>
            <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">ORBITAL_DYNAMICS_V4</span>
          </div>
          <h1 className="text-[48px] font-black text-white uppercase tracking-tighter leading-none group cursor-default">
            Mission_Control <span className="text-blue-500/40 group-hover:text-blue-500 transition-colors duration-700">09</span>
          </h1>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex flex-col items-end gap-1">
             <span className="text-[12px] font-black text-white/40 uppercase tracking-widest">CPU_LOAD</span>
             <span className="text-[24px] font-mono font-black text-blue-400">{cpuLoad.toFixed(1)}%</span>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="flex gap-4">
             <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/40 transition-all group">
                <Maximize2 className="w-6 h-6 text-white/40 group-hover:text-white" />
             </button>
             <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/40 transition-all group">
                <Settings className="w-6 h-6 text-white/40 group-hover:text-white" />
             </button>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="flex-1 grid grid-cols-12 gap-8 min-h-0 relative z-10">
        
        {/* LEFT COLUMN: DIAGNOSTICS & TELEMETRY */}
        <div className="col-span-4 flex flex-col gap-8 min-h-0">
          
          {/* SYSTEM DIAGNOSTICS CARD */}
          <div className="p-8 bg-[#0B0F14]/80 border border-white/5 rounded-[40px] shadow-2xl backdrop-blur-xl relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
             <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 shadow-lg">
                      <Target className="w-6 h-6 text-blue-400" />
                   </div>
                   <h3 className="text-[14px] font-black text-white uppercase tracking-[0.5em]">System_Diagnostics</h3>
                </div>
                <div className="text-[10px] font-black text-emerald-400 px-3 py-1 bg-emerald-500/10 rounded-lg border border-emerald-500/20 uppercase tracking-widest">Stable</div>
             </div>

             <div className="space-y-8">
                <DiagProgress label="Propulsion_Alpha" value={propulsionAlpha} color="emerald" />
                <DiagProgress label="Oxygen_Reserve" value={oxygenReserve} color="blue" />
                <DiagProgress label="Shield_Integrity" value={shieldIntegrity} color="rose" />
             </div>

             <div className="mt-10 pt-8 border-t border-white/5">
                <table className="w-full text-[11px] font-mono font-black uppercase tracking-widest text-white/40">
                   <thead>
                      <tr className="text-left opacity-30">
                         <th className="pb-4 font-black">Module</th>
                         <th className="pb-4 font-black">Freq</th>
                         <th className="pb-4 font-black text-right">Status</th>
                      </tr>
                   </thead>
                   <tbody className="text-white/60">
                      <tr>
                         <td className="py-2">NAV_COM_1</td>
                         <td className="py-2">124.5 MHz</td>
                         <td className="py-2 text-right text-emerald-400">Link</td>
                      </tr>
                      <tr>
                         <td className="py-2">TRANS_P2</td>
                         <td className="py-2">88.2 GHz</td>
                         <td className="py-2 text-right text-emerald-400">Link</td>
                      </tr>
                      <tr className="text-rose-400/60 italic">
                         <td className="py-2">SENS_LIDAR</td>
                         <td className="py-2">---</td>
                         <td className="py-2 text-right text-rose-500">ERR_04</td>
                      </tr>
                      <tr>
                         <td className="py-2">GUID_SYS</td>
                         <td className="py-2">4.2 GHz</td>
                         <td className="py-2 text-right text-emerald-400">Link</td>
                      </tr>
                   </tbody>
                </table>
             </div>
          </div>

          {/* TELEMETRY LOG STREAM */}
          <div className="flex-1 p-8 bg-[#0B0F14]/60 border border-white/5 rounded-[40px] shadow-2xl backdrop-blur-md flex flex-col min-h-0 group overflow-hidden">
             <div className="flex items-center justify-between mb-6 shrink-0">
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-rose-500/10 rounded-2xl border border-rose-500/20 group-hover:border-rose-400/40 transition-colors">
                      <Terminal className="w-6 h-6 text-rose-400" />
                   </div>
                   <h3 className="text-[14px] font-black text-white uppercase tracking-[0.5em]">Telemetry_Log_Stream</h3>
                </div>
                <div className="flex gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                   <div className="w-1.5 h-1.5 rounded-full bg-rose-500/30" />
                </div>
             </div>

             <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 space-y-4 font-mono">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-6 group/log animate-in fade-in slide-in-from-left-4 duration-500">
                    <span className="text-[10px] text-white/20 shrink-0 mt-1">[{log.time}]</span>
                    <div className="flex flex-col gap-1">
                      <span className={`text-[10px] font-black tracking-widest ${
                        log.source === 'ALARM' ? 'text-rose-400' : 
                        log.source === 'AI_CMD' ? 'text-blue-400' : 
                        'text-white/40'
                      }`}>{log.source}:</span>
                      <p className="text-[12px] text-white/60 leading-relaxed group-hover/log:text-white transition-colors">
                        {log.msg}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={logEndRef} />
             </div>
          </div>
        </div>

        {/* CENTER COLUMN: SPATIAL OVERVIEW */}
        <div className="col-span-5 flex flex-col gap-8 min-h-0">
           <div className="flex-1 bg-black/40 border border-white/5 rounded-[50px] shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_0%,_transparent_70%)] opacity-20 pointer-events-none" />
              <img 
                src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=2000" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale brightness-50 mix-blend-screen"
                alt="Orbital Mechanics"
              />
              
              {/* HUD OVERLAYS */}
              <div className="absolute inset-0 p-12 flex flex-col justify-between pointer-events-none">
                 <div className="flex justify-between items-start">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] backdrop-blur-xl">
                       <div className="flex flex-col gap-1">
                          <span className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em]">Thrust_Vector</span>
                          <span className={`text-[32px] font-black tracking-tighter ${thrustVector > 42.8 ? 'text-emerald-400' : 'text-blue-400'}`}>
                             +{thrustVector.toFixed(1)}°
                          </span>
                          <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                             <span className="text-[9px] text-emerald-400 font-black uppercase tracking-widest">Stable</span>
                          </div>
                       </div>
                    </div>
                    <div className="p-8 bg-rose-500/5 border border-rose-500/20 rounded-[32px] backdrop-blur-xl">
                       <div className="flex flex-col items-end gap-1">
                          <span className="text-[10px] text-rose-400/60 font-black uppercase tracking-[0.3em]">Thermal_S3</span>
                          <span className="text-[32px] font-black tracking-tighter text-rose-500">
                             {thermalS3}°C
                          </span>
                          <div className="flex items-center gap-2">
                             <AlertTriangle className="w-3 h-3 text-rose-500" />
                             <span className="text-[9px] text-rose-500 font-black uppercase tracking-widest">AlertTriangle</span>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="flex justify-center">
                    <div className="px-10 py-6 bg-blue-500/10 border border-blue-500/20 rounded-[32px] backdrop-blur-3xl flex items-center gap-8">
                       <div className="flex flex-col items-center">
                          <span className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] mb-2">TrendingUp</span>
                          <span className="text-[20px] font-mono font-black text-white">428,192 KM</span>
                       </div>
                       <div className="w-[1px] h-10 bg-white/10" />
                       <div className="flex flex-col items-center">
                          <span className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] mb-2">Velocity</span>
                          <span className="text-[20px] font-mono font-black text-white">7.82 KM/S</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* THRUST CONTROL PANEL */}
           <div className="p-8 bg-[#0B0F14]/90 border border-white/5 rounded-[40px] shadow-2xl backdrop-blur-xl grid grid-cols-2 gap-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none" />
              <div className="flex flex-col gap-6">
                 <div className="flex justify-between items-center">
                    <span className="text-[12px] font-black text-white/40 uppercase tracking-widest">Primary_Thrust</span>
                    <span className="text-[16px] font-mono font-black text-blue-400">84%</span>
                 </div>
                 <div className="h-2 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-blue-400 w-[84%] shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                 </div>
                 <div className="flex justify-between text-[10px] font-mono font-black text-white/10">
                    <span>MIN</span>
                    <span>1.2e6 KN</span>
                    <span>MAX</span>
                 </div>
              </div>
              <div className="flex flex-col gap-4">
                 <button className="flex-1 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center gap-4 text-[13px] font-black text-blue-400 uppercase tracking-widest hover:bg-blue-500 hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all active:scale-95 group/btn">
                    <Rocket className="w-6 h-6 group-hover/btn:rotate-12 transition-transform" />
                    Engage_Primary_Sequence
                 </button>
              </div>
           </div>
        </div>

        {/* RIGHT COLUMN: AI REASONING & INTEL */}
        <div className="col-span-3 flex flex-col gap-8 min-h-0">
          
          {/* AI REASONING ENGINE */}
          <div className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-[40px] shadow-2xl backdrop-blur-3xl flex flex-col gap-8 group relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
             <div className="flex items-center justify-between shrink-0">
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-xl">
                      <Zap className="w-6 h-6 text-blue-400" />
                   </div>
                   <h3 className="text-[14px] font-black text-white uppercase tracking-[0.5em]">AI_Reasoning_Engine</h3>
                </div>
             </div>

             <div className="space-y-6 flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-2">
                <div className="p-6 bg-white/5 border border-white/5 rounded-3xl space-y-4 hover:border-blue-500/30 transition-all">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Logic_Core_v3.2</span>
                   </div>
                   <p className="text-[14px] text-white/70 leading-relaxed font-mono selection:bg-blue-500/30">
                      Current trajectory indicates a <span className="text-blue-400 font-black">0.04% deviation</span> due to solar pressure. I recommend a <span className="text-emerald-400 font-black">0.2s RCS burst</span> at T+140. 
                   </p>
                   <p className="text-[14px] text-white/50 leading-relaxed font-mono italic">
                      Thermal manifold B issue is likely a sensor calibration drift rather than physical failure. Activity.
                   </p>
                </div>
             </div>

             <div className="flex flex-col gap-4 shrink-0 pt-4 border-t border-white/5">
                <button 
                  onClick={handleApprove}
                  className="w-full h-14 bg-emerald-500/10 border border-emerald-500/40 rounded-2xl flex items-center justify-center gap-4 text-[11px] font-black text-emerald-400 uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-2xl active:scale-95 group/ok"
                >
                  <CheckCircle className="w-5 h-5 group-hover/ok:scale-110 transition-transform" />
                  Approve_Adjustment
                </button>
                <button className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-4 text-[11px] font-black text-white/40 uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all active:scale-95">
                  <XCircle className="w-5 h-5" />
                  Ignore_Suggestion
                </button>
             </div>
          </div>

          {/* PREDICTIVE INTEL SUMMARY */}
          <div className="flex-1 p-8 bg-[#0B0F14]/60 border border-white/5 rounded-[40px] shadow-2xl backdrop-blur-md flex flex-col gap-6 overflow-hidden relative group">
             <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent pointer-events-none" />
             <div className="flex items-center gap-4 shrink-0">
                <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                   <Activity className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-[14px] font-black text-white uppercase tracking-[0.5em]">Predictive_Intel</h3>
             </div>

             <div className="space-y-4 overflow-y-auto custom-scrollbar pr-2 flex-1">
                <IntelMiniCard title="SYMBOLIC_CONVERGENCE" status="Online" color="blue" />
                <IntelMiniCard title="MOTION_OPTIMIZATION" status="84%" color="emerald" />
                <IntelMiniCard title="SECURITY_HARDENING" status="Active" color="rose" />
                <IntelMiniCard title="MATTER_ACCUMULATION" status="RefreshCw" color="cyan" />
             </div>
          </div>
        </div>

      </div>

      {/* GLOBAL FOOTER (INTEGRATED) */}
      <div className="shrink-0 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-between px-12 backdrop-blur-3xl relative overflow-hidden group">
         <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
         
         <div className="flex items-center gap-12">
            <FooterStat label="SYSTEM_BUS" value="MEM_SYNC_v3.2" color="blue" />
            <div className="w-px h-6 bg-white/10" />
            <FooterStat label="PHYSICS_ENGINE" value="CONVERGED_PHASE_55" color="emerald" />
         </div>

         <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
               <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
               <span className="text-[11px] font-mono font-black text-cyan-400 uppercase tracking-widest">Reality_Sync: Locked</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-4 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
               <Shield className="w-4 h-4 text-emerald-400" />
               <span className="text-[11px] font-mono font-black text-emerald-400 uppercase tracking-widest">Sovereign_Intel: Online</span>
            </div>
         </div>
      </div>
    </div>
  );
};

const DiagProgress = ({ label, value, color }: any) => (
  <div className="space-y-3 group/diag">
    <div className="flex justify-between items-center px-1">
       <span className="text-[11px] font-black text-white/40 uppercase tracking-widest group-hover/diag:text-white transition-colors">{label}</span>
       <span className={`text-[12px] font-mono font-black text-${color}-400`}>{value}%</span>
    </div>
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
       <div 
         className={`absolute inset-y-0 left-0 bg-gradient-to-r from-${color}-600 to-${color}-400 transition-all duration-1000 shadow-[0_0_15px_rgba(var(--${color}-rgb),0.5)]`}
         style={{ width: `${value}%` }}
       />
    </div>
  </div>
);

const IntelMiniCard = ({ title, status, color }: any) => (
  <div className={`p-5 bg-white/5 border border-white/5 rounded-3xl flex items-center justify-between hover:bg-${color}-500/5 hover:border-${color}-500/30 transition-all cursor-default`}>
    <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em]">{title}</span>
    <span className={`text-[11px] font-mono font-black text-${color}-400 uppercase`}>{status}</span>
  </div>
);

const FooterStat = ({ label, value, color }: any) => (
  <div className="flex items-center gap-4">
    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{label}:</span>
    <span className={`text-[11px] font-mono font-black text-${color}-400 uppercase tracking-tight`}>[{value}]</span>
  </div>
);

export default OrbitalDynamicsV4_SovereignOS;
