'use client';

import React from 'react';
import {
  Navigation,
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
  Map
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * FlightDynamicsAvionics v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity flight dynamics workspace with real-time aerospace telemetry.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const FlightDynamicsAvionicsEngineeringOS_f09542 = () => {
  const { aerospaceState } = useEngineeringStore();
  const { 
    flightDynamics = {
      machNumber: 0.85,
      velocity_mps: 450,
      attitude: { pitch: 5.2, roll: 12.4, yaw: 0.1 },
      altitude_m: 32400,
      cl: 1.42,
      cd: 0.031
    },
    avionics = { status: 'OPERATIONAL', redundancy: 0.9998 }
  } = aerospaceState || {};

  const { pitch, roll, yaw } = flightDynamics.attitude;

  return (
    <div className="flex-1 flex flex-col bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. TOP STATUS BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex justify-between items-center z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${avionics.status === 'OPERATIONAL' ? 'bg-emerald-500' : 'bg-rose-500'} animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]`} />
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em]">AVIONICS_SUITE_{avionics.status}</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">REDUNDANCY: {(avionics.redundancy * 100).toFixed(4)}%</span>
        </div>
        <div className="flex items-center gap-4">
          <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
          <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
            <span className="text-[9px] font-mono text-blue-400 font-bold uppercase tracking-widest">v3.2_SOVEREIGN</span>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
        
        {/* 2. PRIMARY FLIGHT DISPLAY (Center) */}
        <main className="flex-1 relative bg-black/20 flex flex-col overflow-hidden animate-in fade-in duration-1000">
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          
          <div className="h-8 px-6 flex items-center bg-white/[0.02] border-b border-white/5 justify-between backdrop-blur z-10">
            <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">FLIGHT_DYNAMICS_HUD_01</span>
            <div className="flex gap-4">
              <span className="text-[9px] font-mono text-blue-400/60 uppercase">TrendingUp: {flightDynamics.altitude_m.toFixed(0)}m</span>
            </div>
          </div>

          {/* HUD Area */}
          <div className="flex-1 relative flex items-center justify-center p-12 overflow-hidden">
            <div className="w-full h-full border border-blue-500/10 rounded-[48px] relative group overflow-hidden bg-black/60 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-overlay pointer-events-none grayscale select-none transition-transform duration-700" style={{ transform: `rotate(${-roll}deg) translateY(${pitch * 2}px)` }}>
                <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCe8TyigPtYHYFbxhMSglUmVPr6tXypaZYBhftLoMjP34yj5JYrSh4xZcfD2faC1hzR3eiOOaYZ0iX3_D9ZTlCOpljvtsQyCbK29nwcQcs3fyxptRyMzlleiKBH-qCjGQ5B1yaoi4Xfo4V0u2SFfN3EEzFhf3swZ-y1wHrdbV7zllEr4kluesgwLfclAj9ftPtmCzeIZRMzFwxVGda4teVWUtsl7jORB4AFD0EeKz-gsBqDETeM12vL0WoYeKmGXNikNMP6hXAgpQUd" className="w-full h-full object-cover" />
              </div>

              {/* HUD Overlays */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                 {/* Pitch Ladder */}
                 <div className="w-48 h-96 pitch-ladder opacity-20" style={{ transform: `translateY(${pitch * 5}px)` }} />
                 
                 {/* Center Reticle */}
                 <div className="relative group/reticle">
                    <div className="absolute inset-0 bg-blue-500 blur-[40px] opacity-10" />
                    <div className="w-24 h-24 border border-blue-400/40 rounded-full flex items-center justify-center animate-pulse">
                       <Crosshair className="w-8 h-8 text-blue-400/80" />
                    </div>
                    {/* Horizon Line */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1px] bg-blue-400/20" style={{ transform: `rotate(${-roll}deg)` }} />
                 </div>
              </div>

              {/* Tape Displays */}
              <div className="absolute left-12 top-1/2 -translate-y-1/2 h-2/3 w-20 bg-black/60 border border-white/5 backdrop-blur-2xl rounded-[32px] flex flex-col items-center justify-center gap-6 shadow-2xl overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/40" />
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">IAS</span>
                 <div className="text-[24px] font-mono font-black text-blue-400">{flightDynamics.velocity_mps.toFixed(0)}</div>
                 <span className="text-[9px] font-mono text-white/10 uppercase">KTS</span>
                 <div className="flex-1 w-full bg-white/[0.01] border-y border-white/5 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-blue-400/10" />
                 </div>
              </div>

              <div className="absolute right-12 top-1/2 -translate-y-1/2 h-2/3 w-24 bg-black/60 border border-white/5 backdrop-blur-2xl rounded-[32px] flex flex-col items-center justify-center gap-6 shadow-2xl overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/40" />
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">ALT</span>
                 <div className="text-[24px] font-mono font-black text-blue-400">{(flightDynamics.altitude_m / 1000).toFixed(1)}k</div>
                 <span className="text-[9px] font-mono text-white/10 uppercase">FT</span>
                 <div className="flex-1 w-full bg-white/[0.01] border-y border-white/5 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-blue-400/10" />
                 </div>
              </div>

              {/* AlertTriangle Overlay */}
              {pitch > 15 && (
                 <div className="absolute top-1/4 left-1/2 -translate-x-1/2 z-20 animate-in fade-in zoom-in duration-500">
                    <div className="bg-rose-500/20 border-2 border-rose-500 px-8 py-3 rounded-[24px] backdrop-blur-xl flex flex-col items-center gap-2 shadow-[0_0_50px_rgba(244,63,94,0.3)] animate-pulse">
                       <div className="flex items-center gap-4">
                          <AlertTriangle className="w-6 h-6 text-rose-500" />
                          <span className="text-[14px] font-black text-white uppercase tracking-[0.4em]">UNSTABLE PITCH REGIME</span>
                       </div>
                       <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest">Alpha &gt; 15.0° | Stall Risk High</span>
                    </div>
                 </div>
              )}
            </div>
          </div>
        </main>

        {/* 3. ANALYSIS & TUNING (Right) */}
        <aside className="w-full lg:w-[480px] bg-black/40 border-l border-white/5 flex flex-col backdrop-blur-3xl overflow-y-auto custom-scrollbar">
          
          {/* Envelope Analysis */}
          <div className="p-8 border-b border-white/5 space-y-8">
            <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3">
              <BarChart3 className="w-3 h-3" />
              ENVELOPE_ANALYSIS
            </h3>
            <div className="w-full h-48 bg-white/[0.02] border border-white/5 rounded-[40px] relative overflow-hidden group">
               <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
               <svg className="absolute inset-0 w-full h-full">
                 <path 
                   d="M 0 150 Q 100 150, 200 120 T 450 80" 
                   fill="none" 
                   stroke="#60a5fa" 
                   strokeWidth="2" 
                   className="drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" 
                 />
                 <circle 
                   cx={50 + flightDynamics.machNumber * 300} 
                   cy={150 - flightDynamics.cl * 50} 
                   r="6" 
                   fill="#f43f5e" 
                   className="animate-pulse shadow-[0_0_20px_#f43f5e]" 
                 />
               </svg>
               <div className="absolute bottom-4 right-8 font-mono text-[9px] text-white/20 uppercase tracking-widest">MACH_NUMBER_ENVELOPE</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <MetricCard label="LIFT_COEFF (Cl)" value={flightDynamics.cl.toFixed(3)} color="blue" />
               <MetricCard label="DRAG_POLAR (Cd)" value={flightDynamics.cd.toFixed(4)} color="amber" />
               <MetricCard label="MACH_NUMBER" value={flightDynamics.machNumber.toFixed(3)} color="emerald" />
               <MetricCard label="PITCH_ATTITUDE" value={`${pitch.toFixed(1)}°`} color="rose" />
            </div>
          </div>

          {/* Autopilot Config */}
          <div className="p-8 border-b border-white/5 space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3">
                <Compass className="w-3 h-3" />
                AUTOPILOT_CONFIG
               </h3>
               <div className="w-12 h-6 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full ml-auto shadow-[0_0_10px_#10b981]" />
               </div>
            </div>
            <div className="space-y-6">
               <TuneSlider label="PITCH_GAIN (Kp)" value={0.85} color="blue" />
               <TuneSlider label="ROLL_RATE (Kd)" value={0.42} color="emerald" />
            </div>
            <button className="w-full py-5 border border-white/5 bg-white/[0.02] text-white/40 font-black text-[11px] uppercase tracking-[0.4em] rounded-[24px] hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-4">
              <Play className="w-4 h-4 fill-current" />
              DEPLOY_AUTONOMOUS_OVERLAY
            </button>
          </div>

          {/* Equation Solver */}
          <div className="p-8 space-y-8 flex-1">
             <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3">
              <Cpu className="w-3 h-3" />
              DYNAMICS_EQUATION_SOLVER
             </h3>
             <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[40px] shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/40" />
                <p className="font-mono text-[14px] text-blue-400/90 leading-relaxed text-center italic mb-4">
                   mv' = F_lift + F_thrust - F_drag - F_gravity
                </p>
                <div className="h-px bg-white/5 my-4" />
                <div className="flex justify-between text-[9px] font-mono text-white/20 uppercase tracking-widest">
                   <span>INT_FREQ: 200Hz</span>
                   <span className="text-emerald-400">CONVERGED</span>
                </div>
             </div>
             
             <div className="space-y-4">
                <StatusItem label="THRUST_VEC" status="LOCKED" color="blue" />
                <StatusItem label="FUSION_CELL" status="ACTIVE" color="emerald" />
                <StatusItem label="RADAR_SCAN" status="IDLE" color="amber" />
             </div>
          </div>
        </aside>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .pitch-ladder {
          background: repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255, 255, 255, 0.1) 20px);
        }
      `}</style>
    </div>
  );
};

const MetricCard = ({ label, value, color = 'blue' }: any) => {
  const colorMap: any = {
    blue: 'text-blue-400 border-blue-500/10 bg-blue-500/5 hover:border-blue-500/30',
    emerald: 'text-emerald-400 border-emerald-500/10 bg-emerald-500/5 hover:border-emerald-500/30',
    amber: 'text-amber-400 border-amber-500/10 bg-amber-500/5 hover:border-amber-500/30',
    rose: 'text-rose-400 border-rose-500/10 bg-rose-500/5 hover:border-rose-500/30',
  };

  return (
    <div className={`p-6 border rounded-[32px] transition-all duration-500 group cursor-default ${colorMap[color]}`}>
      <span className="text-[9px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40 block mb-3">{label}</span>
      <div className="text-[20px] font-mono font-black tracking-tight">{value}</div>
    </div>
  );
};

const TuneSlider = ({ label, value, color }: any) => (
  <div className="space-y-3">
    <div className="flex justify-between font-mono text-[10px] text-white/20 uppercase tracking-widest">
      <span>{label}</span>
      <span className={`text-${color}-400`}>{value}</span>
    </div>
    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
      <div className={`h-full bg-${color}-500 w-[${value * 100}%]`} />
    </div>
  </div>
);

const StatusItem = ({ label, status, color }: any) => (
  <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl group hover:bg-white/[0.04] transition-all cursor-default">
    <div className="flex items-center gap-4">
      <div className={`w-2 h-2 rounded-full bg-${color}-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] animate-pulse`} />
      <span className="text-[11px] font-black text-white/60 uppercase tracking-widest">{label}</span>
    </div>
    <span className={`text-[9px] font-mono font-black text-${color}-400 uppercase`}>{status}</span>
  </div>
);

export default FlightDynamicsAvionicsEngineeringOS_f09542;
