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
  AlertTriangle,
  ArrowLeftRight,
  Factory,
  Maximize2,
  MoreVertical,
  Send,
  Settings2} from 'lucide-react';
import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * AIGuidedManipulationTerminal v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity robotic manipulation terminal for orbital mission control.
 * Fully refactored to consume 60Hz robotics telemetry and motion vectors.
 */
const AIGuidedManipulationTerminalEngineeringOS_b7ea06 = () => {
  const { roboticsState, motionState, pushEvent, addNotification } = useEngineeringStore();
  
  const {
    kinematics = { velocity_mps: 1.2, path_deviation: 0.005 },
    status = 'OPERATIONAL'
  } = roboticsState || {};

  const {
    joints = [ { id: 'j1', angle: 45, torque: 12 }, { id: 'j2', angle: -15, torque: 8 }, { id: 'j3', angle: 88, torque: 5 }, { id: 'j4', angle: 0, torque: 0 } ],
    inverseKinematics = { precision_mm: 0.01 }
  } = motionState || {};

  const jointAngles = joints.map((j: any) => j.angle);

  const handleCommitAction = () => {
    pushEvent?.('ROBOTIC_ACTION_COMMITTED', { timestamp: Date.now() });
    addNotification?.({
      title: 'ACTION_COMMITTED',
      message: 'Kinematic trajectory confirmed. Executing orbital maneuver.',
      type: 'INFO',
      domain: 'MOTION'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0E15] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 flex items-center px-6 justify-between backdrop-blur-md bg-black/60 border-b border-white/5 z-50 shrink-0">
         <div className="flex items-center gap-4">
            <Factory className="text-[#4cd7f6] w-5 h-5" />
            <h1 className="font-mono text-[18px] text-[#4cd7f6] uppercase tracking-widest font-bold">NEURAL_KINEMATICS_OS_v3.2</h1>
         </div>
         <nav className="hidden md:flex gap-8 h-full items-center">
            <span className="text-[11px] font-bold text-[#4cd7f6] border-b-2 border-[#4cd7f6] px-2 cursor-pointer uppercase tracking-widest">KINEMATICS</span>
            <span className="text-[11px] font-bold text-white/40 hover:text-white transition-colors px-2 cursor-pointer uppercase tracking-widest">DYNAMICS</span>
            <span className="text-[11px] font-bold text-white/40 hover:text-white transition-colors px-2 cursor-pointer uppercase tracking-widest">AI_STABILITY</span>
         </nav>
         <Settings2 className="text-[#4cd7f6] cursor-pointer hover:rotate-90 transition-all duration-500" />
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. NAVIGATION DRAWER */}
         <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-2 gap-4 hidden lg:flex shrink-0">
            <div className="p-4 mb-2">
               <h2 className="text-[11px] font-bold text-white uppercase tracking-[0.2em] opacity-40">CORE_TELEMETRY</h2>
            </div>
            <nav className="flex flex-col gap-1">
               <NavItem icon={<Settings />} label="KINEMATICS" active />
               <NavItem icon={<BarChart3 />} label="DYNAMICS" />
               <NavItem icon={<Brain />} label="AI_STABILITY" />
               <NavItem icon={<ArrowLeftRight />} label="SYSTEM_SYNC" />
            </nav>
            <div className="mt-auto border-t border-white/5 p-4 space-y-4">
               <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-white/20">
                  <span>UPTIME</span>
                  <span className="text-[#4cd7f6] font-mono">482:12:09</span>
               </div>
               <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6]" />
               </div>
            </div>
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-black/20 relative">
            <div className="grid grid-cols-12 grid-rows-6 gap-6 min-h-[800px]">
               
               {/* Primary Feed: AI-Guided Manipulation */}
               <section className="col-span-12 xl:col-span-8 row-span-4 bg-black/40 border border-white/5 rounded-2xl relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 left-0 right-0 h-10 bg-black/60 backdrop-blur-md border-b border-white/5 flex items-center px-6 justify-between z-10">
                     <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_8px_#4cd7f6]" />
                        <span className="text-[11px] font-bold text-white uppercase tracking-widest">LIVE_FEED: ORBITAL_ROBOT_04</span>
                     </div>
                     <div className="flex gap-6 items-center">
                        <span className="text-[10px] font-mono text-white/20">720P / 60FPS</span>
                        <Maximize2 className="text-white/40 cursor-pointer hover:text-white transition-colors text-[18px]" />
                     </div>
                  </div>
                  
                  <div className="w-full h-full relative">
                     <img 
                        alt="Orbital Robotic Arm" 
                        className="w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-[10000ms] group-hover:scale-105" 
                        src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCmWQRwYbqtGwJWqVBK5u6qo2x1QyQwvQiJSYW5KOyrr08M_YNyrQd_kj_GLtywIk9FQFEsrseLPiFgj_4V4fsftOQW2XHUTmoWg82leatNLDiUWFevv_F1BJxD7e7JWqcbQzMjUQGjyPw9pM754eEWNgQSb_yRJ31h4ZvfPlojGU9CjXxtc29zykS3N8Wdou1EO3BhqVudOkYrLVBb28p_SOHw0twkg89_cYETCcE6xFRGulUQJr_g7QehScU9hwJ69lvq0kUan8of" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
                     
                     {/* ROI Overlay */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#4cd7f6]/30 flex items-center justify-center pointer-events-none">
                        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#4cd7f6]" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#4cd7f6]" />
                        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#4cd7f6]" />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#4cd7f6]" />
                        <div className="text-center font-mono text-[#4cd7f6] bg-black/60 px-4 py-1.5 rounded backdrop-blur-xl border border-[#4cd7f6]/20">
                           ROI_DETECTED: [VALVE_B2]
                        </div>
                     </div>

                     {/* Telemetry Widgets */}
                     <div className="absolute bottom-10 left-10 flex flex-col gap-4 pointer-events-none">
                        <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col gap-3 w-56 shadow-2xl">
                           <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">GRASP_PROBABILITY</span>
                           <div className="flex items-end justify-between">
                              <span className="text-2xl font-mono font-black text-[#4cd7f6]">98.4%</span>
                              <Factory className="text-[#4cd7f6] w-6 h-6" />
                           </div>
                           <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                              <div className="w-[98%] h-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]" />
                           </div>
                        </div>
                        <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col gap-3 w-56 shadow-2xl">
                           <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">PATH_DEVIATION</span>
                           <div className="flex items-end justify-between">
                              <span className="text-2xl font-mono font-black text-[#ffb786]">{kinematics.path_deviation.toFixed(4)}m</span>
                              <AlertTriangle className="text-[#ffb786] w-6 h-6" />
                           </div>
                        </div>
                     </div>

                     {/* Commit Action Button */}
                     <div className="absolute bottom-10 right-10">
                        <button 
                           onClick={handleCommitAction}
                           className="bg-[#4cd7f6] text-black font-bold text-[12px] px-10 py-4 rounded-xl flex items-center gap-4 hover:shadow-[0_0_30px_#4cd7f6] active:scale-95 transition-all uppercase tracking-[0.2em]"
                        >
                           <Send className="w-5 h-5" />
                           COMMIT_ACTION
                        </button>
                     </div>
                  </div>
               </section>

               {/* Joint State Matrix */}
               <section className="col-span-12 md:col-span-6 xl:col-span-4 row-span-3 bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center gap-3">
                        <LayoutGrid className="text-white/20 w-5 h-5" />
                        <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.3em]">JOINT_STATE_MATRIX</h3>
                     </div>
                     <MoreVertical className="text-white/20 cursor-pointer" />
                  </div>
                  <div className="flex-grow space-y-4 overflow-y-auto custom-scrollbar pr-2">
                     {jointAngles.map((angle: number, i: number) => (
                        <JointItem key={i} id={`J${i+1}`} label={['Base Rotation', 'Shoulder Pitch', 'Elbow Flex', 'Wrist Roll'][i] || `Joint ${i+1}`} value={`${angle.toFixed(1)}°`} progress={Math.abs(angle / 180) * 100} />
                     ))}
                  </div>

               </section>

               {/* Stability BarChart3 */}
               <section className="col-span-12 md:col-span-6 xl:col-span-4 row-span-3 bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center gap-3">
                        <BarChart3 className="text-white/20 w-5 h-5" />
                        <h3 className="text-[11px] font-bold text-white uppercase tracking-[0.3em]">STABILITY_ANALYTICS</h3>
                     </div>
                     <span className="text-[#4cd7f6] font-mono text-[10px] font-black">LIVE_DELTA: {inverseKinematics.precision_mm.toFixed(4)}ms</span>
                  </div>
                  <div className="relative w-full h-[180px] border border-white/5 rounded-xl bg-black/40 overflow-hidden shadow-inner">
                     <svg className="w-full h-full" viewBox="0 0 400 150">
                        <path d="M0,100 L20,95 L40,110 L60,80 L80,85 L100,60 L120,70 L140,50 L160,55 L180,40 L200,45 L220,30 L240,35 L260,20 L280,25 L300,15 L320,18 L340,10 L360,12 L380,5 L400,8" fill="none" stroke="#4cd7f6" strokeWidth="2" />
                     </svg>
                     <div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none opacity-10">
                        {[...Array(5)].map((_, i) => <div key={i} className="border-t border-white" />)}
                     </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-6">
                     <AnalyticBox label="RMS_ERR" value="0.0012" color="text-white" />
                     <AnalyticBox label="PEAK_VIB" value="LOW" color="text-[#ffb786]" />
                     <AnalyticBox label="CALIB_REF" value="OK" color="text-[#4cd7f6]" />
                  </div>
               </section>

               {/* System Log Stream */}
               <section className="col-span-12 row-span-2 bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                     <Terminal className="text-[#4cd7f6] w-5 h-5" />
                     <span className="text-[11px] font-bold text-white uppercase tracking-[0.4em]">SYSTEM_LOG_STREAM</span>
                  </div>
                  <div className="flex-grow overflow-y-auto space-y-2 bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-[11px] text-white/40 shadow-inner">
                     <p><span className="text-[#4cd7f6]">[{new Date().toLocaleTimeString()}]</span> <span className="text-[#ffb786]">INFO:</span> Initializing orbital linkage protocol...</p>
                     <p><span className="text-[#4cd7f6]">[{new Date().toLocaleTimeString()}]</span> <span className="text-white/20">SYSTEM:</span> Agent 04 handshake successful. Latency 12ms.</p>
                     <p><span className="text-[#4cd7f6]">[{new Date().toLocaleTimeString()}]</span> <span className="text-[#4cd7f6]">EXEC:</span> ROI discovery algorithm running at 400Hz...</p>
                     <p><span className="text-[#4cd7f6]">[{new Date().toLocaleTimeString()}]</span> <span className="text-[#4cd7f6] font-black">SUCCESS:</span> Target [VALVE_B2] identified with 0.99 confidence.</p>
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                     <span className="text-[#4cd7f6] font-mono font-black">&gt;</span>
                     <input className="bg-transparent border-none focus:ring-0 text-[#4cd7f6] font-mono text-[12px] w-full p-0 placeholder:text-white/10" placeholder="Enter remote Terminal cluster..." type="text" />
                  </div>
               </section>
            </div>
         </main>
      </div>

      <style jsx>{`
         .scanline-overlay {
            background: linear-gradient(to bottom, transparent 50%, rgba(76, 215, 246, 0.05) 50%);
            background-size: 100% 4px;
         }
      `}</style>
    </div>
  );
};

const NavItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-6 py-4 transition-all cursor-pointer rounded-xl group ${active ? 'bg-[#4cd7f6]/10 text-[#4cd7f6] border-l-4 border-[#4cd7f6]' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform">{icon}</div>
     <span className="text-[12px] font-bold uppercase tracking-widest">{label}</span>
  </div>
);

const JointItem = ({ id, label, value, progress }: any) => (
  <div className="flex items-center gap-4 p-4 bg-black/40 border border-white/5 rounded-xl hover:bg-white/5 transition-colors">
     <div className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center font-mono text-[#4cd7f6] bg-black/40 shrink-0">{id}</div>
     <div className="flex-1 space-y-2">
        <div className="flex justify-between items-center text-[11px] font-mono">
           <span className="text-white/60">{label}</span>
           <span className="text-[#4cd7f6] font-black">{value}</span>
        </div>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
           <div className="h-full bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6]" style={{ width: `${progress}%` }} />
        </div>
     </div>
  </div>
);

const AnalyticBox = ({ label, value, color }: any) => (
  <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col gap-1 shadow-xl">
     <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">{label}</span>
     <span className={`text-[13px] font-mono font-black ${color}`}>{value}</span>
  </div>
);

export default AIGuidedManipulationTerminalEngineeringOS_b7ea06;
