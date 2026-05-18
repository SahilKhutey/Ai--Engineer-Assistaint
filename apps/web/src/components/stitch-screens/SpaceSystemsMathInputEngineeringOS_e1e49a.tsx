'use client';

import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Ruler,
  Wind,
  Thermometer,
  Zap,
  Activity,
  Sigma,
  Brain,
  List,
  Settings,
  Save,
  Rocket
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const BlockMath = ({ math }: { math: string }) => {
  return (
    <div className="flex items-center justify-center font-mono text-3xl tracking-wide text-[#adc6ff]">
      <span>Δv = v</span>
      <sub className="text-xl ml-0.5">e</sub>
      <span className="ml-3 mr-2">ln</span>
      <div className="inline-flex flex-col items-center justify-center text-xl align-middle ml-1">
        <span className="border-b border-[#adc6ff] pb-0.5 px-2">m<sub>0</sub></span>
        <span className="pt-0.5 px-2">m<sub>f</sub></span>
      </div>
    </div>
  );
};

/**
 * SpaceSystemsMathInput v3.2 (Phase 55 Hardened)
 * 
 * Advanced orbital mechanics solver and mission planning interface.
 * Real-time synchronization of Delta-V calculations, Tsiolkovsky integration,
 * and Keplerian orbital elements.
 */
const SpaceSystemsMathInputEngineeringOS_e1e49a = () => {
  const { 
    aerospaceState, 
    fluidState,
    pushEvent,
    addNotification
  } = useEngineeringStore();

  const {
    trajectory = { TrendingUp: 408.12, velocity: 7670, status: 'STABLE' },
    keplerElements = { sma: 6738, ecc: 0.0012, inc: 51.64, raan: 124.8 }
  } = aerospaceState || {};

  const {
    solver = { iterations: 1240, residuals: 1e-6 }
  } = fluidState || {};

  const [fuelMass, setFuelMass] = useState(112300);
  const [isp, setIsp] = useState(318.2);

  const handleExecuteBurn = () => {
    pushEvent?.('ORBITAL_BURN_EXECUTE', { Gauge: fuelMass, isp: isp, timestamp: Date.now() });
    addNotification?.({
      title: 'BURN_SEQUENCE_ENGAGED',
      message: 'Delta-V integration kernels active. Activity thrust profile.',
      type: 'INFO',
      domain: 'AEROSPACE'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 bg-black/60 border-b border-white/5 flex justify-between items-center z-50 shrink-0 backdrop-blur-3xl">
         <div className="flex items-center gap-4">
            <Terminal className="text-[#adc6ff] w-5 h-5" />
            <h1 className="font-mono text-[16px] font-black text-[#adc6ff] uppercase tracking-[0.1em]">NEURAL_OS_v3.2 // ORBITAL_COMMAND</h1>
         </div>
         <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-6">
               <NavTab label="ORBITAL_ENGINE" active />
               <NavTab label="PROPULSION_LAB" />
               <NavTab label="TELEMETRY_STREAM" />
            </nav>
            <Settings className="text-white/20 cursor-pointer hover:text-white transition-colors" />
         </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-20 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col py-8 gap-2 hidden md:flex shrink-0">
            <nav className="flex flex-col gap-4">
               <SideNavItem icon={<Ruler />} label="STRUCT" active />
               <SideNavItem icon={<Wind />} label="FLUID" />
               <SideNavItem icon={<Thermometer />} label="THERM" />
               <SideNavItem icon={<Zap />} label="E-MAG" />
            </nav>
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 flex flex-col overflow-hidden relative bg-black/20">
            <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
            
            {/* Dashboard Header */}
            <div className="p-8 flex justify-between items-end border-b border-white/5 bg-white/[0.02] backdrop-blur-md shrink-0">
               <div>
                  <h1 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">MISSION_PLANNING // DELTA-V_CALC_V4</h1>
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_10px_#4cd7f6]" />
                     <span className="text-[10px] font-mono font-black text-[#4cd7f6] uppercase tracking-widest">SYSTEM_STATUS: NOMINAL // CORE_ENGINE: ACTIVE</span>
                  </div>
               </div>
               <div className="flex gap-4">
                  <button className="px-6 py-2 bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-widest rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
                     <Save size={14} />
                     SAVE_SIM
                  </button>
                  <button 
                     onClick={handleExecuteBurn}
                     className="px-6 py-2 bg-[#adc6ff] text-black font-black text-[10px] uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_#adc6ff] active:scale-95 transition-all flex items-center gap-2"
                  >
                     <Rocket size={14} />
                     EXECUTE_BURN
                  </button>
               </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8 grid grid-cols-12 gap-6 pb-24">
               
               {/* Left Column: Core Dynamics */}
               <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                  
                  {/* Equations Panel */}
                  <section className="bg-black/40 border border-white/5 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-3xl">
                     <div className="h-8 bg-white/[0.02] border-b border-white/5 px-4 flex items-center justify-between">
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">EQUATION_ENGINE / TSIOLKOVSKY</span>
                        <div className="flex gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                           <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        </div>
                     </div>
                     <div className="p-12 flex flex-col items-center justify-center bg-black/20">
                        <div className="text-4xl text-[#adc6ff] drop-shadow-[0_0_20px_#adc6ff40] mb-12">
                           <BlockMath math="\Delta v = v_e \ln \frac{m_0}{m_f}" />
                        </div>
                        <div className="w-full grid grid-cols-3 gap-8 border-t border-white/5 pt-8">
                           <MathStat label="VELOCITY_EXHAUST" value="3,120 m/s" color="#4cd7f6" />
                           <MathStat label="INITIAL_MASS" value="124,500 kg" color="#4cd7f6" center />
                           <MathStat label="FINAL_MASS" value="12,200 kg" color="#4cd7f6" right />
                        </div>
                     </div>
                  </section>

                  {/* Input Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <InputPanel 
                        label="FUEL_PROPELLANT_MASS (kg)" 
                        value={fuelMass} 
                        onChange={(v: any) => setFuelMass(Number(v))}
                        progress={82.4}
                        footer="CAPACITY_UTILIZATION: 82.4%"
                     />
                     <InputPanel 
                        label="THRUST_SPECIFIC_IMPULSE (s)" 
                        value={isp} 
                        onChange={(v: any) => setIsp(Number(v))}
                        min={280.0}
                        max={450.0}
                        step={0.1}
                     />
                  </div>

                  {/* Thrust Curve Visualization */}
                  <section className="bg-black/40 border border-white/5 rounded-2xl flex-1 shadow-2xl backdrop-blur-3xl overflow-hidden group">
                     <div className="h-8 bg-white/[0.02] border-b border-white/5 px-4 flex items-center justify-between">
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">THRUST_CURVE_MODELING / REAL_TIME</span>
                        <Activity className="text-white/20" size={16} />
                     </div>
                     <div className="p-8 h-64 relative overflow-hidden">
                        <img 
                           className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen transition-transform duration-[20000ms] group-hover:scale-110" 
                           src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuD1n2_ToV-SVbNiexVCFvYihuZXAfbhjnpHNTepEUF1p7h6fzquG5FiMEBDqjUQBtRS2nHMHa7jgD91Rahxri6BtJ5RyQXFgPsVUMpg29mPh1fWrZAS4czMayuQHyaxnAiLCIucNDndlcwN0nnbfK5U--3jQ_bCnt3pEL_UuoDrdPK3qicpBJ95kB2Q9gT2w9wpAPc6QSYoaCOcZgcg1q3zw89nYidxjXBZ2CryCC0KsDbGWvAdhxZRR8YKNld6o_avAgQ2DV4e3C2_" 
                           alt="Thrust Curve"
                        />
                        <div className="relative z-10 w-full h-full border-l border-b border-white/10 flex items-end">
                           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                              <path d="M0 100 Q 25 10, 50 60 T 100 0" fill="none" stroke="#4cd7f6" strokeWidth="0.5" className="animate-pulse" />
                              <path d="M0 100 Q 30 50, 60 70 T 100 20" fill="none" stroke="#adc6ff" strokeDasharray="2 2" strokeWidth="0.5" />
                           </svg>
                        </div>
                     </div>
                  </section>
               </div>

               {/* Right Column: Orbital Parameters */}
               <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                  
                  {/* Kepler Elements Panel */}
                  <section className="bg-black/40 border border-white/5 rounded-2xl shadow-2xl backdrop-blur-3xl overflow-hidden">
                     <div className="h-8 bg-white/[0.02] border-b border-white/5 px-4 flex items-center">
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">KEPLER_ELEMENTS</span>
                     </div>
                     <div className="p-8 space-y-8">
                        <ElementControl label="SEMIMAJOR_AXIS (a)" value={`${keplerElements.sma} km`} progress={60} />
                        <ElementControl label="ECCENTRICITY (e)" value={keplerElements.ecc.toString()} progress={12} />
                        <ElementControl label="INCLINATION (i)" value={`${keplerElements.inc}°`} progress={51} />
                        <ElementControl label="LONG_ASCENDING_NODE (Ω)" value={`${keplerElements.raan}°`} progress={34} />
                     </div>
                  </section>

                  {/* Simulation Visualizer */}
                  <section className="bg-black/40 border border-white/5 rounded-2xl overflow-hidden flex-1 min-h-[300px] flex flex-col shadow-2xl backdrop-blur-3xl group">
                     <div className="h-8 bg-white/[0.02] border-b border-white/5 px-4 flex items-center">
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">ORBITAL_SIM_PREVIEW</span>
                     </div>
                     <div className="flex-1 relative bg-black/20 flex items-center justify-center p-12 overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                           <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4cd7f6] via-transparent to-transparent" />
                        </div>
                        {/* Orbit Graphic */}
                        <div className="relative w-48 h-48 rounded-full border border-white/5 flex items-center justify-center transition-transform duration-[10000ms] group-hover:scale-110">
                           <div className="w-16 h-16 rounded-full bg-[#adc6ff]/5 border border-[#adc6ff]/20 animate-pulse shadow-[0_0_30px_#adc6ff20]" />
                           <div className="absolute w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_15px_#4cd7f6] animate-[spin_10s_linear_infinite]" style={{ transformOrigin: '0 96px' }} />
                           <div className="absolute w-full h-px bg-white/5 -rotate-45" />
                           <div className="absolute -top-8 -right-8 bg-black/80 border border-white/10 p-3 rounded-xl backdrop-blur-xl shadow-2xl">
                              <span className="text-[9px] font-mono font-black text-[#4cd7f6] uppercase tracking-widest">APOAPSIS: 422km</span>
                           </div>
                        </div>
                     </div>
                     <div className="p-6 bg-white/[0.02] border-t border-white/5 flex justify-around">
                        <SimStat label="PERIOD" value="92.8m" />
                        <SimStat label="VELOCITY" value={`${trajectory.velocity.toLocaleString()}m/s`} />
                     </div>
                  </section>
               </div>
            </div>
         </main>
      </div>

      {/* 4. Terminal MONITORS */}
      <footer className="fixed bottom-0 w-full z-50 bg-black/80 backdrop-blur-3xl border-t border-white/5 h-16 px-8 flex justify-between items-center shadow-[0_-10px_50px_rgba(0,0,0,0.8)]">
         <div className="flex gap-12 items-center">
            <div className="flex flex-col gap-1">
               <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">DIMENSIONAL_VALIDATION</span>
               <div className="flex gap-4">
                  <ValidationTag label="M_STRUC" status="OK" color="#4cd7f6" />
                  <ValidationTag label="T_RELI" status="OK" color="#4cd7f6" />
                  <ValidationTag label="ΔV_RESV" status="WARN" color="#ffb4ab" alert />
               </div>
            </div>
         </div>
         <nav className="flex items-center gap-2">
            <NavAction icon={<Terminal />} label="Terminal" active />
            <NavAction icon={<Sigma />} label="WORKSPACE" />
            <NavAction icon={<Brain />} label="REASONING" />
            <NavAction icon={<Activity />} label="TELEMETRY" />
            <NavAction icon={<List />} label="LOGS" />
         </nav>
         <div className="hidden lg:flex items-center gap-8">
            <div className="text-right flex flex-col gap-1">
               <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">LATENCY</span>
               <span className="text-[12px] font-mono font-black text-[#4cd7f6]">0.024ms</span>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <Terminal className="text-white/20 hover:text-white cursor-pointer transition-colors" />
         </div>
      </footer>

      <style jsx>{`
         .scanline-overlay {
            background: linear-gradient(to bottom, transparent 50%, rgba(173, 198, 255, 0.05) 50%);
            background-size: 100% 4px;
         }
         .grid-pattern {
            background-image: radial-gradient(rgba(173, 198, 255, 0.2) 1px, transparent 1px);
            background-size: 32px 32px;
         }
      `}</style>
    </div>
  );
};

const NavTab = ({ label, active }: any) => (
  <span className={`text-[10px] font-black uppercase tracking-[0.3em] cursor-pointer transition-all ${active ? 'text-[#adc6ff]' : 'text-white/20 hover:text-white'}`}>
     {label}
  </span>
);

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`flex flex-col items-center justify-center py-6 cursor-pointer transition-all group ${active ? 'bg-[#adc6ff]/10 text-[#adc6ff] border-l-4 border-[#adc6ff]' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform">{icon}</div>
     <span className="text-[9px] font-black uppercase tracking-widest mt-2">{label}</span>
  </div>
);

const MathStat = ({ label, value, color, center, right }: any) => (
  <div className={`flex flex-col gap-1 ${center ? 'text-center' : right ? 'text-right' : ''}`}>
     <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">{label}</p>
     <p className="text-lg font-mono font-black" style={{ color }}>{value}</p>
  </div>
);

const InputPanel = ({ label, value, onChange, progress, footer, min, max, step }: any) => (
  <div className="bg-black/40 border border-white/5 p-6 rounded-2xl shadow-xl backdrop-blur-3xl group transition-all hover:border-[#4cd7f6]/20">
     <label className="text-[9px] font-black text-white/40 uppercase tracking-widest block mb-4">{label}</label>
     <input 
        type="number" 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        step={step}
        className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 font-mono text-xl font-black text-[#adc6ff] focus:outline-none focus:border-[#4cd7f6]/40 transition-all"
     />
     {progress !== undefined && (
        <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
           <div className="h-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]" style={{ width: `${progress}%` }} />
        </div>
     )}
     {footer && (
        <p className="text-[9px] font-mono font-black text-white/20 mt-2 uppercase">{footer}</p>
     )}
     {min !== undefined && (
        <div className="mt-4 flex justify-between text-[9px] font-mono font-black text-white/20 uppercase">
           <span>MIN: {min}</span>
           <span>MAX: {max}</span>
        </div>
     )}
  </div>
);

const ElementControl = ({ label, value, progress }: any) => (
  <div className="space-y-3 group">
     <div className="flex justify-between items-center">
        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
        <span className="text-[12px] font-mono font-black text-[#adc6ff]">{value}</span>
     </div>
     <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-[#4cd7f6] transition-all duration-1000 shadow-[0_0_10px_#4cd7f640]" style={{ width: `${progress}%` }} />
     </div>
  </div>
);

const SimStat = ({ label, value }: any) => (
  <div className="text-center">
     <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-1">{label}</p>
     <p className="text-[13px] font-mono font-black text-white">{value}</p>
  </div>
);

const ValidationTag = ({ label, status, color, alert }: any) => (
  <div className="flex items-center gap-2">
     <div className={`w-1.5 h-1.5 rounded-full ${alert ? 'animate-pulse' : ''}`} style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }} />
     <span className="text-[10px] font-mono font-black uppercase tracking-tight" style={{ color }}>{label}: {status}</span>
  </div>
);

const NavAction = ({ icon, label, active }: any) => (
  <div className={`flex flex-col items-center justify-center px-6 transition-all cursor-pointer group ${active ? 'bg-[#adc6ff]/10 text-[#adc6ff] rounded-xl py-2' : 'text-white/40 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform">{icon}</div>
     <span className="text-[9px] font-black uppercase tracking-widest mt-1">{label}</span>
  </div>
);

export default SpaceSystemsMathInputEngineeringOS_e1e49a;
