'use client';

import React from 'react';
import {
  Settings2,
  Activity,
  Network,
  Brain,
  Terminal,
  RefreshCw,
  AlertTriangle,
  Gauge,
  ArrowUpRight,
  AlertCircle,
  Play,
  Pause,
  Square,
  Home,
  Settings
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * VehicleDynamics v3.2 (Phase 55 Hardened)
 * 
 * Advanced kinetic modeling and vehicle dynamics dashboard.
 * Real-time synchronization of velocity vectors, TrendingUp MSL, 
 * orbital mechanics propagation, and attitude control readouts.
 */
const VehicleDynamicsEngineeringOS_f09b32 = () => {
  const { 
    motionState, 
    aerospaceState,
    pushEvent,
    addNotification
  } = useEngineeringStore();

  const {
    velocity = 7642.84,
    stabilityMargin = 0.024,
    dampingRatio = 0.707,
    attitude = { pitch: 15.2, yaw: -5.1, roll: 2.0 }
  } = motionState || {};

  const {
    trajectory = { TrendingUp: 408.12, status: 'STABLE' },
    diagnostics = { propulsion: 98, oxygen: 72, shield: 45, thermal_S3: 842 }
  } = aerospaceState || {};

  const handleStopSimulation = () => {
    pushEvent?.('SIMULATION_HALT', { reason: 'USER_INTERVENTION', timestamp: Date.now() });
    addNotification?.({
      title: 'SIMULATION_STOPPED',
      message: 'Kinetic integration kernels detached. All telemetry streams paused.',
      type: 'WARNING',
      domain: 'MOTION'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-14 px-8 bg-black/60 border-b border-white/5 flex justify-between items-center z-50 shrink-0 backdrop-blur-3xl shadow-2xl">
         <div className="flex items-center gap-4">
            <Settings2 className="text-[#adc6ff] w-5 h-5" />
            <h1 className="font-mono text-[14px] font-black text-[#adc6ff] uppercase tracking-[0.3em]">KINETIC_OS // DYNAMICS_LAYER_v3.2</h1>
         </div>
         <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 bg-white/[0.02] px-4 py-1.5 rounded-full border border-white/5">
               <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_12px_#10b981] animate-pulse" />
               <span className="text-[10px] font-mono font-black text-white/40 uppercase tracking-widest">SYSTEM_LIVE</span>
            </div>
            <Settings className="text-white/20 cursor-pointer hover:text-white transition-colors" />
         </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col py-8 gap-1 hidden md:flex shrink-0">
            <div className="px-8 mb-4">
               <span className="text-[10px] font-black text-[#4cd7f6] uppercase tracking-[0.4em]">SYSTEM_INDEX</span>
            </div>
            <nav className="flex flex-col gap-1">
               <SideNavItem icon={<Activity />} label="Telemetry" active />
               <SideNavItem icon={<Network />} label="Kinematics" />
               <SideNavItem icon={<Brain />} label="AI_Stability" />
               <SideNavItem icon={<Terminal />} label="Command_Log" />
               <SideNavItem icon={<RefreshCw />} label="System_Sync" />
            </nav>
            <div className="mt-auto px-6">
               <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-2xl shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-2">
                     <AlertTriangle className="text-rose-400 text-sm" />
                     <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest">AI ALERT</span>
                  </div>
                  <p className="font-mono text-[11px] text-white/60 leading-tight">Dynamic instability detected near resonance frequency.</p>
               </div>
            </div>
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 flex flex-col p-4 gap-4 overflow-hidden relative bg-black/20">
            <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
            
            {/* Top Dashboard Strip */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 shrink-0">
               <StripPanel label="VELOCITY_VECTOR" value={velocity.toLocaleString()} unit="m/s" progress={78} color="#4cd7f6" icon={<Gauge />} />
               <StripPanel label="ALTITUDE_MSL" value={trajectory.TrendingUp.toFixed(2)} unit="km" progress={65} color="#adc6ff" icon={<ArrowUpRight />} />
               <StripPanel label="FUEL_OPTIMIZATION" value="94.2" unit="% EFF" progress={94} color="#ffb786" icon={<Gauge />} footer="REMAINING: 4,200kg" />
               <StripPanel label="STABILITY_MARGIN" value={stabilityMargin.toFixed(3)} unit="λ" progress={20} color="#ffb4ab" icon={<AlertCircle />} footer="RESONANCE_NEARBY" alert />
            </div>

            {/* Central Visualization Grid */}
            <div className="flex-1 grid grid-cols-12 grid-rows-6 gap-4 min-h-0">
               
               {/* Trajectory Prediction */}
               <section className="col-span-12 lg:col-span-8 row-span-4 bg-black/40 border border-white/5 rounded-[32px] overflow-hidden relative group shadow-2xl backdrop-blur-3xl">
                  <div className="h-8 absolute top-0 left-0 w-full z-10 flex items-center justify-between px-6 bg-white/[0.02] border-b border-white/5 backdrop-blur-md">
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">ORBITAL_MECHANICS_PROPAGATION [F=GMm/r^2]</span>
                     <div className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#4cd7f6]/40" />
                        <div className="w-2 h-2 rounded-full bg-[#adc6ff]/40" />
                     </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center relative p-12">
                     <img 
                        className="w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-[15000ms] group-hover:scale-110" 
                        src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuA7icfAnohHWFYmuo-P983J-xH0KLpSDjOysN-tZ-Nzhyzs6mo4xP6AncSwBt9db_6m3XBLVziBxu2HUJvcBbgsCObi22hT7DfDf2fiWxsG_jCAhS5G3TBZ-l6vF7Dac9b9So3TChr9DQLF45I-X69TNTCJFnSfnBlede4CoJNcpTGv8Qicq-PpiSQsAawIp-FfBK-hzklwfnwe7poBpVDbRu9h9X6mDlfF5nIIgF3NXyEoqVrnA1GGsMYeGwqG2Cj8dlGTWJZdMiUh" 
                        alt="Orbital Propagation"
                     />
                     <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-16">
                        <div className="w-full h-full border border-white/5 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-[#4cd7f6] rotate-45 shadow-[0_0_10px_#4cd7f6]" />
                        <div className="absolute top-1/4 right-1/4 flex flex-col items-end gap-1">
                           <span className="font-mono text-[10px] font-black text-[#4cd7f6]">PERIAPSIS: 402km</span>
                           <div className="w-24 h-px bg-[#4cd7f6]/40" />
                        </div>
                     </div>
                  </div>
               </section>

               {/* Aerodynamic Vector Overlays */}
               <section className="col-span-12 lg:col-span-4 row-span-3 bg-black/40 border border-white/5 rounded-[32px] flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden group">
                  <div className="h-8 bg-white/[0.02] border-b border-white/5 flex items-center px-6">
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">AERO_VECTOR_OVERLAYS</span>
                  </div>
                  <div className="flex-1 p-8 flex items-center justify-center bg-black/40 relative">
                     <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
                        {Array.from({ length: 36 }).map((_, i) => (
                           <div key={i} className="border border-white/20" />
                        ))}
                     </div>
                     <div className="relative w-full aspect-square border border-white/5 rounded-2xl flex items-center justify-center">
                        <div className="absolute top-1/2 left-1/4 w-1/2 h-[2px] bg-[#adc6ff] shadow-[0_0_10px_#adc6ff] transition-all group-hover:w-[60%]" />
                        <div className="absolute top-[40%] left-1/2 w-8 h-[2px] bg-[#4cd7f6] rotate-45" />
                        <div className="absolute bottom-[40%] left-1/2 w-8 h-[2px] bg-[#4cd7f6] -rotate-45" />
                     </div>
                  </div>
               </section>

               {/* Flight Envelope Visualization */}
               <section className="col-span-12 lg:col-span-4 row-span-3 bg-black/40 border border-white/5 rounded-[32px] flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden group">
                  <div className="h-8 bg-white/[0.02] border-b border-white/5 flex items-center px-6">
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">FLIGHT_ENVELOPE_VISUAL</span>
                  </div>
                  <div className="flex-1 p-6 flex flex-col gap-4">
                     <div className="flex-1 border-l border-b border-white/10 relative overflow-hidden rounded-bl-xl">
                        <div className="absolute bottom-0 left-0 w-full h-[80%] bg-[#adc6ff]/5 border-t-2 border-[#adc6ff]/20" style={{ clipPath: 'polygon(0 100%, 0 20%, 20% 10%, 60% 30%, 100% 100%)' }} />
                        <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
                           <span className="font-mono text-[9px] text-[#adc6ff] font-black uppercase">MACH_LIMIT: 2.4</span>
                           <span className="font-mono text-[9px] text-white/20 font-black uppercase">G_LIMIT: +9/-3</span>
                        </div>
                        <div className="absolute bottom-[40%] left-[30%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse" />
                     </div>
                     <div className="grid grid-cols-2 gap-2">
                        <BoxStat label="Q_PRESSURE" value="42.4 kPa" />
                        <BoxStat label="LOAD_FACTOR" value="1.22 G" />
                     </div>
                  </div>
               </section>

               {/* Realtime Attitude Control */}
               <section className="col-span-12 lg:col-span-4 row-span-2 bg-black/40 border border-white/5 rounded-[32px] flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden group">
                  <div className="h-8 bg-white/[0.02] border-b border-white/5 flex items-center px-6">
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">ATTITUDE_CONTROL_READOUT</span>
                  </div>
                  <div className="flex-1 p-6 grid grid-cols-3 gap-2 items-center">
                     <AttitudeGauge label="PITCH" value={attitude.pitch} color="#4cd7f6" rotate={15} />
                     <AttitudeGauge label="YAW" value={attitude.yaw} color="#4cd7f6" rotate={-5} vertical />
                     <AttitudeGauge label="ROLL" value={attitude.roll} color="#4cd7f6" rotate={2} />
                  </div>
               </section>

               {/* Stability Plots */}
               <section className="col-span-12 lg:col-span-4 row-span-2 bg-black/40 border border-white/5 rounded-[32px] flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden group">
                  <div className="h-8 bg-white/[0.02] border-b border-white/5 flex items-center px-6">
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">STABILITY_PHASE_PLOTS</span>
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-between">
                     <div className="h-20 flex gap-1 items-end px-2">
                        {[40, 60, 90, 100, 70, 50, 30, 45, 85, 20].map((h, i) => (
                           <div key={i} className={`w-full transition-all duration-500 rounded-t-sm ${i === 3 ? 'bg-rose-500 shadow-[0_0_15px_#f43f5e]' : 'bg-[#4cd7f6]/40'}`} style={{ height: `${h}%` }} />
                        ))}
                     </div>
                     <div className="border-t border-white/5 pt-4 px-2">
                        <span className="font-mono text-[9px] font-black text-rose-400 uppercase tracking-widest animate-pulse">
                           Active Damping Ratio: {dampingRatio.toFixed(3)} (CRITICAL)
                        </span>
                     </div>
                  </div>
               </section>

            </div>
         </main>
      </div>

      {/* 4. FOOTER CONTROLS */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 px-12 h-14 bg-black/80 backdrop-blur-2xl border border-white/5 rounded-full flex items-center gap-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-50">
         <ControlBtn icon={<Play />} />
         <ControlBtn icon={<Pause />} />
         <ControlBtn icon={<Square />} color="#f43f5e" glow active onClick={handleStopSimulation} />
         <div className="w-px h-6 bg-white/10" />
         <ControlBtn icon={<Home />} />
      </footer>

      <style jsx>{`
         .scanline-overlay {
            background: linear-gradient(to bottom, transparent 50%, rgba(76, 215, 246, 0.05) 50%);
            background-size: 100% 4px;
         }
         .grid-pattern {
            background-image: radial-gradient(rgba(76, 215, 246, 0.2) 1px, transparent 1px);
            background-size: 32px 32px;
         }
      `}</style>
    </div>
  );
};

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-8 py-3.5 transition-all cursor-pointer group ${active ? 'bg-[#adc6ff]/10 text-[#adc6ff] border-r-4 border-[#adc6ff]' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform">{icon}</div>
     <span className="text-[11px] font-black uppercase tracking-[0.2em]">{label}</span>
  </div>
);

const StripPanel = ({ label, value, unit, progress, color, icon, footer, alert }: any) => (
  <div className={`bg-black/40 border border-white/5 p-5 rounded-[24px] flex flex-col justify-between shadow-xl backdrop-blur-3xl group transition-all hover:border-white/10 ${alert ? 'bg-rose-500/5 border-rose-500/10' : ''}`}>
     <div className="flex justify-between items-start mb-4">
        <span className={`text-[9px] font-black uppercase tracking-widest ${alert ? 'text-rose-400' : 'text-white/40'}`}>{label}</span>
        <div className="text-white/20 group-hover:text-white transition-colors" style={{ color: alert ? '#f43f5e' : undefined }}>{icon}</div>
     </div>
     <div className="flex items-baseline gap-2 mb-4">
        <span className="text-2xl font-mono font-black tracking-tighter" style={{ color }}>{value}</span>
        <span className="text-[10px] font-mono font-black text-white/20 uppercase">{unit}</span>
     </div>
     <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-2">
        <div className="h-full transition-all duration-1000 shadow-lg" style={{ width: `${progress}%`, backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
     </div>
     {footer && (
        <span className={`text-[9px] font-mono font-black uppercase ${alert ? 'text-rose-400' : 'text-white/20'}`}>{footer}</span>
     )}
  </div>
);

const BoxStat = ({ label, value }: any) => (
  <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
     <span className="block text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">{label}</span>
     <span className="font-mono text-[12px] font-black text-white">{value}</span>
  </div>
);

const AttitudeGauge = ({ label, value, color, rotate, vertical }: any) => (
  <div className="flex flex-col items-center gap-4 group">
     <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] group-hover:text-white transition-colors">{label}</span>
     <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center relative transition-all group-hover:border-white/20 shadow-inner">
        <div 
           className="bg-current transition-transform duration-500 shadow-xl" 
           style={{ 
              width: vertical ? '2px' : '100%', 
              height: vertical ? '100%' : '2px', 
              transform: `rotate(${rotate}deg)`,
              color: color,
              boxShadow: `0 0 15px ${color}`
           }} 
        />
        <span className="absolute -bottom-6 font-mono text-[10px] font-black" style={{ color }}>{value > 0 ? '+' : ''}{value}°</span>
     </div>
  </div>
);

const ControlBtn = ({ icon, color = 'white', glow, active, onClick }: any) => (
  <button 
     onClick={onClick}
     className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 ${active ? 'scale-110 shadow-2xl' : 'opacity-40 hover:opacity-100'}`}
     style={{ 
        color, 
        backgroundColor: active ? `${color}20` : 'transparent',
        boxShadow: active && glow ? `0 0 30px ${color}40` : undefined
     }}
  >
     {icon}
  </button>
);

export default VehicleDynamicsEngineeringOS_f09b32;
