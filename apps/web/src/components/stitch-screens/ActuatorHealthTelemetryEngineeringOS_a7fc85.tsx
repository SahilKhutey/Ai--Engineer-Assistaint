'use client';


import {
  Terminal,
  Settings,
  Activity,
  Brain,
  BarChart3,
  Workflow,
  History,
  HardDrive,
  Zap,
  FlaskConical,
  Sparkles,
  Plus,
  Play,
  Power,
  LayoutGrid,
  Waves,
  ArrowLeftRight,
  Factory,
  Maximize2,
  Minimize2,
  Settings2} from 'lucide-react';
import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * ActuatorHealthTelemetry v4.2 (Phase 55 Hardened)
 * 
 * High-density workspace for Activity mechanical actuator health and PID synchronization.
 * Features real-time current/thermal Activity for robotic joints and 
 * sub-system health scoring.
 */
const ActuatorHealthTelemetryEngineeringOS_a7fc85 = () => {
  const { 
    motionState, 
    thermalState, 
    osStatus, 
    pushEvent, 
    addNotification 
  } = useEngineeringStore();

  const globalSync = motionState?.vitals?.sync_ms || 0.002;
  const systemLoad = osStatus?.kernelLoad ? (osStatus.kernelLoad * 100).toFixed(1) : "42.8";
  
  const handleRecalibrate = (axis: string) => {
    pushEvent?.('ACTUATOR_RECALIBRATION_TRIGGERED', { axis, timestamp: Date.now() });
    addNotification?.({
      title: 'ACTUATOR_SYNC_RESET',
      message: `Resetting commutation cycle for ${axis}. Aligning phase...`,
      type: 'INFO',
      domain: 'MOTION'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-8 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
           <Factory className="w-5 h-5 text-blue-400" />
           <h1 className="font-mono text-[14px] font-black text-blue-400 uppercase tracking-[0.3em]">NEURAL_KINEMATICS_OS // V2</h1>
        </div>
        <div className="flex items-center gap-6">
           <nav className="hidden md:flex gap-8">
              <HeaderAction label="KINEMATICS" active />
              <HeaderAction label="DYNAMICS" />
              <HeaderAction label="AI_STABILITY" />
              <HeaderAction label="SYSTEM_SYNC" />
           </nav>
           <Settings2 className="w-5 h-5 text-white/20 hover:text-blue-400 cursor-pointer transition-colors" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. NAVIGATION DRAWER */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 shrink-0">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">CORE_TELEMETRY</span>
              <nav className="flex flex-col gap-1">
                 <SideNavItem icon={<Settings />} label="Kinematics" active />
                 <SideNavItem icon={<BarChart3 />} label="Dynamics" />
                 <SideNavItem icon={<Brain />} label="AI_Stability" />
                 <SideNavItem icon={<ArrowLeftRight />} label="System_Sync" />
              </nav>
           </div>
           <div className="mt-auto flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
              <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-widest">KERNEL_OK</span>
           </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 overflow-y-auto p-8 bg-grid-pattern relative custom-scrollbar space-y-8">
           
           {/* Dashboard Header */}
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
              <div>
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">HARDWARE_MONITOR_v4.0.2</span>
                 <h2 className="text-[32px] font-mono font-black text-white tracking-tighter uppercase">Actuator Health & Telemetry</h2>
              </div>
              <div className="flex gap-4">
                 <QuickStat label="GLOBAL_SYNC" value={`${globalSync}ms`} color="blue" />
                 <QuickStat label="SYSTEM_LOAD" value={`${systemLoad}%`} color="amber" />
              </div>
           </div>

           {/* Bento Grid LayoutGrid */}
           <div className="grid grid-cols-12 gap-8">
              
              {/* Main Actuator Status (Large) */}
              <div className="col-span-12 lg:col-span-8 space-y-8">
                 <section className="bg-black/40 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl backdrop-blur-3xl">
                    <div className="h-10 px-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                       <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">ACTUATOR_MATRIX_DENSITY</span>
                       <div className="flex gap-4">
                          <Minimize2 className="w-3 h-3 text-white/20 hover:text-white cursor-pointer" />
                          <Maximize2 className="w-3 h-3 text-white/20 hover:text-white cursor-pointer" />
                       </div>
                    </div>
                    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                       <ActuatorCard 
                          id="AXIS_01" 
                          part="SHOULDER" 
                          current="4.22 AMPS" 
                          temp="32.4°C" 
                          precision="±0.0012 TICK" 
                          load={65} 
                          status="OPTIMAL"
                          onRecalc={() => handleRecalibrate('AXIS_01')}
                       />
                       <ActuatorCard 
                          id="AXIS_02" 
                          part="ELBOW" 
                          current="2.10 AMPS" 
                          temp="28.9°C" 
                          precision="±0.0008 TICK" 
                          load={32} 
                          status="OPTIMAL"
                          onRecalc={() => handleRecalibrate('AXIS_02')}
                       />
                       <ActuatorCard 
                          id="AXIS_03" 
                          part="WRIST" 
                          current="8.45 AMPS" 
                          temp="54.2°C" 
                          precision="±0.0410 TICK" 
                          load={89} 
                          status="STRESS_LOAD"
                          AlertTriangle
                          onRecalc={() => handleRecalibrate('AXIS_03')}
                       />
                    </div>
                 </section>

                 {/* Thermal Profile Visualization */}
                 <section className="bg-black/40 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl backdrop-blur-3xl">
                    <div className="h-10 px-8 bg-white/[0.02] border-b border-white/5 flex items-center">
                       <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">THERMAL_PROFILE_DELTA</span>
                    </div>
                    <div className="p-10 h-48 flex items-end gap-2 px-12">
                       {[40, 45, 38, 42, 50, 75, 82, 78, 60, 55, 40, 35].map((h, i) => (
                          <div 
                             key={i} 
                             className={`flex-1 transition-all duration-1000 rounded-t-lg group relative ${h > 70 ? 'bg-amber-400/20 border-t-2 border-amber-400' : 'bg-blue-400/20 border-t-2 border-blue-400'}`} 
                             style={{ height: `${h}%` }}
                          >
                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-[10px] font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">{h}°C</div>
                          </div>
                       ))}
                    </div>
                 </section>
              </div>

              {/* Side Panels */}
              <div className="col-span-12 lg:col-span-4 space-y-8">
                 
                 {/* Sub-system Health Rating */}
                 <section className="bg-black/40 border border-white/5 rounded-[40px] p-8 flex flex-col items-center justify-center shadow-2xl backdrop-blur-3xl">
                    <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] mb-8">SUB-SYSTEM_HEALTH_RATING</span>
                    <div className="relative w-40 h-40 flex items-center justify-center">
                       <svg className="w-full h-full transform -rotate-90">
                          <circle className="text-white/5" cx="80" cy="80" fill="transparent" r="74" stroke="currentColor" strokeWidth="6" />
                          <circle className="text-blue-400 shadow-[0_0_20px_#3b82f6]" cx="80" cy="80" fill="transparent" r="74" stroke="currentColor" strokeWidth="6" strokeDasharray="465" strokeDashoffset="41.85" strokeLinecap="round" />
                       </svg>
                       <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-[40px] font-mono font-black text-white tracking-tighter">91</span>
                          <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em] font-mono">STABLE</span>
                       </div>
                    </div>
                    <div className="mt-10 w-full grid grid-cols-2 gap-4">
                       <MiniMetric label="HARMONIC_HEALTH" value="98.2%" />
                       <MiniMetric label="ENCODER_SYNC" value="100%" />
                    </div>
                 </section>

                 {/* Servo-Loop RefreshCw Log */}
                 <section className="bg-black/40 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl backdrop-blur-3xl flex flex-col h-[420px]">
                    <div className="h-10 px-8 bg-white/[0.02] border-b border-white/5 flex items-center">
                       <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">SERVO-LOOP_SYNC_LOG</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6 font-mono text-[11px] space-y-2 custom-scrollbar">
                       <LogLine time="12:04:11.002" type="RefreshCw" msg="J1 Commutation cycle start." />
                       <LogLine time="12:04:11.005" type="RefreshCw" msg="Phase alignment calibrated: 0.001 rad." />
                       <LogLine time="12:04:11.012" type="WARN" msg="Axis_03 current spike detected: 8.2A." AlertTriangle />
                       <LogLine time="12:04:11.018" type="RefreshCw" msg="PID loop iteration complete." />
                       <LogLine time="12:04:11.022" type="RefreshCw" msg="Heartbeat received from Node_0x44." dimmed />
                       <LogLine time="12:04:11.031" type="RefreshCw" msg="J1-J3 RefreshCw established (Δ 4μs)." />
                       <LogLine time="12:04:11.045" type="WARN" msg="Thermal threshold approach: J3." AlertTriangle />
                       <LogLine time="12:04:11.050" type="RefreshCw" msg="Data buffer flush executed." dimmed />
                    </div>
                 </section>
              </div>
           </div>
        </main>
      </div>

      {/* Floating HUD Elements */}
      <div className="fixed bottom-12 right-12 z-50">
         <div className="bg-black/80 border border-white/5 p-4 rounded-2xl backdrop-blur-xl shadow-2xl flex items-center gap-4 group">
            <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6] animate-pulse" />
            <div>
               <span className="block text-[8px] font-black text-white/20 uppercase tracking-widest font-mono">CORE_UPTIME</span>
               <span className="text-[14px] font-mono font-black text-white">142:11:04</span>
            </div>
         </div>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
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

const QuickStat = ({ label, value, color }: any) => (
  <div className="bg-white/[0.02] border border-white/5 p-4 px-8 rounded-2xl flex flex-col justify-center backdrop-blur-md">
     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">{label}</span>
     <span className={`text-[18px] font-mono font-black ${color === 'blue' ? 'text-blue-400' : 'text-amber-400'}`}>{value}</span>
  </div>
);

const ActuatorCard = ({ id, part, current, temp, precision, load, status, AlertTriangle, onRecalc }: any) => (
  <div 
     onClick={onRecalc}
     className={`bg-white/[0.02] p-6 border rounded-[32px] transition-all cursor-pointer group hover:bg-white/[0.05] ${AlertTriangle ? 'border-amber-500/40 shadow-[0_0_20px_#fbbf2410]' : 'border-white/5 hover:border-blue-500/20'}`}
  >
     <div className="flex justify-between items-start mb-6">
        <div>
           <span className="text-[10px] font-black text-white/40 uppercase tracking-widest font-mono">{id} ({part})</span>
           <div className="flex items-center gap-2 mt-2">
              <div className={`w-2 h-2 rounded-full animate-pulse ${AlertTriangle ? 'bg-amber-400' : 'bg-emerald-500'}`} />
              <span className={`text-[11px] font-mono font-black ${AlertTriangle ? 'text-amber-400' : 'text-emerald-400'}`}>{status}</span>
           </div>
        </div>
        <Zap className={`w-4 h-4 ${AlertTriangle ? 'text-amber-400' : 'text-white/20'}`} />
     </div>
     <div className="space-y-4">
        <div className="space-y-2">
           <div className="flex justify-between text-[10px] font-mono font-black uppercase tracking-widest">
              <span className="text-white/20">CURRENT</span>
              <span className="text-white">{current}</span>
           </div>
           <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className={`h-full transition-all duration-1000 ${AlertTriangle ? 'bg-amber-400' : 'bg-blue-400'}`} style={{ width: `${load}%` }} />
           </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
           <ActuatorMetric label="THERMAL" value={temp} />
           <ActuatorMetric label="PRECISION" value={precision} />
        </div>
     </div>
  </div>
);

const ActuatorMetric = ({ label, value }: any) => (
  <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl">
     <span className="block text-[8px] font-black text-white/20 uppercase tracking-widest font-mono mb-1">{label}</span>
     <span className="text-[10px] font-mono font-black text-white/60">{value}</span>
  </div>
);

const MiniMetric = ({ label, value }: any) => (
  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl text-center">
     <span className="block text-[8px] font-black text-white/20 uppercase tracking-widest font-mono mb-1">{label}</span>
     <span className="text-[12px] font-mono font-black text-white">{value}</span>
  </div>
);

const LogLine = ({ time, type, msg, AlertTriangle, dimmed }: any) => (
  <div className={`flex gap-4 items-center ${dimmed ? 'opacity-40' : 'opacity-100'}`}>
     <span className="text-white/20 w-24">[{time}]</span>
     <span className={`font-black tracking-tighter w-12 ${AlertTriangle ? 'text-amber-400' : 'text-blue-400'}`}>[{type}]</span>
     <span className="text-white/60 group-hover:text-white transition-colors flex-1">{msg}</span>
  </div>
);

export default ActuatorHealthTelemetryEngineeringOS_a7fc85;
