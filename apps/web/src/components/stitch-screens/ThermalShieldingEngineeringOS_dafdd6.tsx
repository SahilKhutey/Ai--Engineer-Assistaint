'use client';

import React from 'react';
import {
  Terminal,
  Settings,
  BarChart2,
  Network,
  GitBranch,
  History,
  Activity,
  Minimize2,
  Lock,
  Database,
  AlertTriangle,
  TrendingUp,
  MoveRight,
  TrendingDown,
  Waves,
  LineChart,
  Power,
  LayoutGrid
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * ThermalShielding v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity thermal-hydraulics and shielding Terminal center.
 * Bound to 60Hz thermal telemetry and coolant hydraulic flow streams.
 * Features real-time radiation attenuation modeling and hotspot detection.
 */
const ThermalShieldingEngineeringOS_dafdd6 = () => {
  const { thermalState, fluidState, osStatus } = useEngineeringStore();
  
  const {
    zones = [],
    shielding = { integrity_pct: 99.98, max_dose_msv: 0.02, threshold_msv: 5.00 },
    simulation = { core_temp_k: 574.2, flux_n_cm2s: 1.24e14 }
  } = thermalState || {};

  const {
    solver = { iterations: 1240, stability: 0.84 },
    properties = { pressure_delta_mpa: 0.84, flow_m3s: 42.5 }
  } = fluidState || {};

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 bg-black/60 border-b border-white/5 flex justify-between items-center z-50 shrink-0 backdrop-blur-3xl">
         <div className="flex items-center gap-4">
            <Terminal className="text-[#adc6ff] w-5 h-5" />
            <h1 className="font-mono text-[16px] font-black text-[#adc6ff] uppercase tracking-[0.1em]">QUANTUM_COMMAND_OS_v3.2 // THERMAL_SHIELDING</h1>
         </div>
         <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
               <span className="text-[10px] font-mono font-black text-[#adc6ff] uppercase tracking-widest">CORE_TEMP: {simulation.core_temp_k.toFixed(1)}K</span>
            </div>
            <Settings className="text-white/20 cursor-pointer hover:text-white transition-colors" />
         </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-20 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col py-8 gap-2 hidden md:flex shrink-0">
            <nav className="flex flex-col gap-4">
               <SideNavItem icon={<BarChart2 />} label="TELEM" />
               <SideNavItem icon={<Network />} label="Q-MAP" />
               <SideNavItem icon={<GitBranch />} label="CIRCUIT" active />
               <SideNavItem icon={<History />} label="LOGS" />
               <SideNavItem icon={<Activity />} label="HEALTH" />
            </nav>
            {/* Reactor Status Footer */}
            <div className="mt-auto px-4 pb-4 flex flex-col gap-2">
               <span className="text-[8px] font-black text-white/20 uppercase text-center">SHIELD_INT</span>
               <div className="h-32 w-1.5 mx-auto bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div className="w-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]" style={{ height: `${shielding.integrity_pct}%` }} />
               </div>
               <span className="text-[9px] font-mono font-black text-[#4cd7f6] text-center">{shielding.integrity_pct}%</span>
            </div>
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 grid grid-cols-12 gap-px bg-white/5 overflow-hidden relative">
            
            {/* Panel A: Coolant Circulation Flow Map */}
            <section className="col-span-12 lg:col-span-8 bg-[#0B0F14] flex flex-col overflow-hidden">
               <div className="h-10 bg-white/[0.02] flex items-center justify-between px-6 border-b border-white/5">
                  <span className="text-[10px] font-black text-[#4cd7f6] uppercase tracking-[0.4em]">HYDRAULIC_FLOW_VECTOR_MATRIX [B6-GAMMA]</span>
                  <div className="flex gap-6">
                     <Minimize2 className="text-white/20 hover:text-[#4cd7f6] cursor-pointer" size={16} />
                     <Settings className="text-white/20 hover:text-[#4cd7f6] cursor-pointer" size={16} />
                  </div>
               </div>
               
               <div className="flex-1 relative bg-black/20 flex items-center justify-center p-8 overflow-hidden group">
                  <img 
                     className="w-full h-full object-cover opacity-40 rounded-3xl grayscale mix-blend-screen transition-transform duration-[20000ms] group-hover:scale-105" 
                     src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuAbBlWVRPRvB9piSf6ZfIw76Ym4AWHE143sTpP7HVQofUBz2lImkFgfFgRasNCbBXgTGWxkEI9dPm4tGfnHGAQFA3Q7yxZILtGPc-uRU1GyqWodVeztuEsLhj3eKzZhxz2alNpUlG4EBO0Ebb7WinRYv2cX9lFZQKuqxFodWc6sqTjPHMZ_9CUFk4aLRWBWsPwolnLFfTWuXzQHsF2YYjoMHQbuXfchMiAkbjZrwHqcdfr33KEjrcbdqa99g8cvWcZrV-pJFPUwbt_q" 
                     alt="Coolant Flow Map"
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-12 pointer-events-none">
                     <div className="flex justify-between">
                        <HudWidget label="LOOP_A_FLOW" value={`${properties.flow_m3s.toFixed(1)} m³/s`} color="#4cd7f6" />
                        <HudWidget label="PRESSURE_DELTA" value={`${properties.pressure_delta_mpa.toFixed(2)} MPa`} color="#4cd7f6" right />
                     </div>
                     <div className="flex justify-center">
                        <div className="bg-black/60 px-8 py-3 border border-white/5 backdrop-blur-3xl rounded-full flex gap-12 items-center shadow-2xl">
                           <StatusIndicator label="FLOW_STABILITY" status="NOMINAL" color="#10b981" />
                           <div className="w-px h-4 bg-white/10" />
                           <StatusIndicator label="PUMP_RPM" status="32,400" color="#4cd7f6" />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Right Column: BarChart3 */}
            <section className="col-span-12 lg:col-span-4 bg-[#0B0F14] flex flex-col overflow-y-auto custom-scrollbar border-l border-white/5">
               
               {/* Radiation Dose Heatmap */}
               <div className="p-8 border-b border-white/5">
                  <div className="flex items-center justify-between mb-6">
                     <span className="text-[10px] font-black text-amber-400 uppercase tracking-[0.4em]">SHIELDING_PENETRATION_HEATMAP</span>
                  </div>
                  <div className="flex gap-6">
                     <div className="flex-1 aspect-Camera bg-black/40 rounded-2xl border border-white/5 overflow-hidden shadow-inner group">
                        <img 
                           className="w-full h-full object-cover opacity-60 transition-transform duration-[10000ms] group-hover:scale-110" 
                           src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDbpVC-K5ljfJZ6PNCKXA7pB1ni6W-O8WO7BRVDsvH4bvyvweIFN2RIHDecQ6aFrj44_H9EziNw80aApN1Rz5L924Hs31Z580Y53xnKOQ1hBBtCo_BJgZMcJlYPwwHEl0ImN0vs-673DZBHJrV0n6ZKxR_E1g3YcrFx4nywVixcws0Sc21IqM8rr4Y1vTW9o_P5WA_FLskwssGlCmI6hFg7ggrgixMfpxu_BvLPpKwtGLAt6wr01PNj1QHdaAHPOArvwKo_pxEzzlh-" 
                           alt="Heatmap"
                        />
                     </div>
                     <div className="w-24 flex flex-col justify-between py-2">
                        <div className="text-center">
                           <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">MAX_DOSE</p>
                           <p className="text-[10px] font-mono font-black text-amber-400">{shielding.max_dose_msv} mSv</p>
                        </div>
                        <div className="h-32 w-3 mx-auto bg-gradient-to-t from-blue-900 via-amber-500 to-amber-200 rounded-full shadow-lg" />
                        <div className="text-center">
                           <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">THRESHOLD</p>
                           <p className="text-[10px] font-mono font-black text-white">{shielding.threshold_msv} mSv</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Emergency Cooling Status */}
               <div className="p-8 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex items-center justify-between mb-6">
                     <span className="text-[10px] font-black text-rose-400 uppercase tracking-[0.4em]">EMERGENCY_COOLANT_LOGIC</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <StatusCard label="ECCS_VALVE_V1" value="CLOSED" icon={<Lock />} color="#f43f5e" />
                     <StatusCard label="RESERVE_CAP" value="100%" icon={<Database />} color="#4cd7f6" />
                     <div className="col-span-2 bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl flex items-center gap-4">
                        <AlertTriangle className="text-rose-500 animate-pulse" />
                        <div className="flex flex-col">
                           <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">AUTO-TRIGGER_ENGAGED</span>
                           <span className="text-[9px] font-mono font-black text-rose-400/60 uppercase tracking-tighter">THRESHOLD: T_CORE &gt; 850K</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Attenuation Physics Logic */}
               <div className="p-8 flex-1">
                  <div className="flex items-center justify-between mb-6">
                     <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">ATTENUATION_PHYSICS_LOGIC</span>
                  </div>
                  <div className="bg-black/40 p-6 rounded-2xl border border-white/5 mb-8 shadow-inner">
                     <p className="text-[9px] font-black text-[#4cd7f6] uppercase tracking-[0.3em] mb-4">BEER-LAMBERT_CALCULATION</p>
                     <p className="text-2xl font-serif italic text-center text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">I = I₀ · e<sup>-μx</sup></p>
                  </div>
                  <div className="space-y-4 px-2">
                     <CalcRow label="INCOMING_FLUX (I₀)" value={`${simulation.flux_n_cm2s.toExponential(2)} n/cm²s`} />
                     <CalcRow label="COEFFICIENT (μ)" value="0.153 cm⁻¹" />
                     <CalcRow label="THICKNESS (x)" value="150.0 cm" />
                     <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                        <span className="text-[10px] font-black text-[#4cd7f6] uppercase tracking-widest">REMAINING_FLUX (I)</span>
                        <span className="text-xl font-mono font-black text-[#4cd7f6]">0.0003e14</span>
                     </div>
                  </div>
               </div>
            </section>

            {/* Panel E: Hotspot Detection Table */}
            <section className="col-span-12 lg:col-span-8 bg-[#0B0F14] border-t border-white/5 overflow-hidden flex flex-col">
               <div className="h-10 bg-white/[0.02] flex items-center justify-between px-6 border-b border-white/5">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">CORE_HOTSPOT_TELEMETRY</span>
                  <button className="bg-[#adc6ff]/10 hover:bg-[#adc6ff]/20 text-[#adc6ff] px-4 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border border-[#adc6ff]/20 transition-all active:scale-95">SCAN_NOW</button>
               </div>
               <div className="flex-1 overflow-auto custom-scrollbar">
                  <table className="w-full text-left">
                     <thead className="sticky top-0 bg-[#0B0F14] z-10 border-b border-white/5">
                        <tr>
                           <Th>NODE_ID</Th>
                           <Th>COORDINATES</Th>
                           <Th>TEMP_K</Th>
                           <Th>STATUS</Th>
                           <Th>TREND</Th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-white/[0.02]">
                        <Tr id="SEC-04-A" coords="X:124 Y:422" temp={598.2} status="ELEVATED" color="#f59e0b" icon={<TrendingUp />} />
                        <Tr id="SEC-02-C" coords="X:088 Y:119" temp={542.0} status="OPTIMAL" color="#10b981" icon={<MoveRight />} />
                        <Tr id="SEC-09-F" coords="X:542 Y:003" temp={574.1} status="OPTIMAL" color="#10b981" icon={<TrendingDown />} />
                        {zones.slice(0, 3).map((zone: any) => (
                           <Tr 
                              key={zone.id} 
                              id={zone.id.toUpperCase()} 
                              coords={`X:${Math.floor(Math.random()*999)} Y:${Math.floor(Math.random()*999)}`} 
                              temp={zone.temperature} 
                              status={zone.status} 
                              color={zone.status === 'CRITICAL' ? '#f43f5e' : zone.status === 'AlertTriangle' ? '#f59e0b' : '#10b981'} 
                              icon={zone.status === 'CRITICAL' ? <TrendingUp /> : <MoveRight />} 
                           />
                        ))}
                     </tbody>
                  </table>
               </div>
            </section>
         </main>
      </div>

      {/* 4. BOTTOM NAV (Mobile) */}
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 md:hidden px-4 bg-black/80 backdrop-blur-3xl rounded-t-3xl border-t border-white/5 shadow-2xl">
         <div className="bg-[#adc6ff] text-black rounded-2xl w-12 h-12 flex items-center justify-center shadow-[0_0_20px_#adc6ff40]">
            <LayoutGrid />
         </div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#adc6ff] transition-colors"><Waves /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#adc6ff] transition-colors"><LineChart /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#adc6ff] transition-colors"><Power /></div>
      </footer>

      <style jsx>{`
         .scanline-overlay {
            background: linear-gradient(to bottom, transparent 50%, rgba(76, 215, 246, 0.05) 50%);
            background-size: 100% 4px;
         }
      `}</style>
    </div>
  );
};

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`flex flex-col items-center justify-center py-6 cursor-pointer transition-all group ${active ? 'bg-[#adc6ff]/10 text-[#adc6ff] border-l-4 border-[#adc6ff]' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform">{icon}</div>
     <span className="text-[9px] font-black uppercase tracking-widest mt-2">{label}</span>
  </div>
);

const HudWidget = ({ label, value, color, right }: any) => (
  <div className={`bg-black/40 p-4 border border-white/5 backdrop-blur-3xl rounded-2xl shadow-2xl ${right ? 'text-right' : ''}`}>
     <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">{label}</p>
     <p className="text-xl font-mono font-black transition-all" style={{ color }}>{value}</p>
  </div>
);

const StatusIndicator = ({ label, status, color }: any) => (
  <div className="flex items-center gap-3">
     <div className="w-2 h-2 rounded-full animate-pulse shadow-lg" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
     <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{label}: <span style={{ color }}>{status}</span></span>
  </div>
);

const StatusCard = ({ label, value, icon, color }: any) => (
  <div className="bg-white/[0.02] p-4 border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white/[0.05] transition-all cursor-pointer group">
     <p className="text-[9px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40">{label}</p>
     <div className="text-xl font-mono font-black" style={{ color }}>{value}</div>
     <div style={{ color }} className="opacity-40 group-hover:opacity-100 transition-opacity">{icon}</div>
  </div>
);

const CalcRow = ({ label, value }: any) => (
  <div className="flex justify-between items-center text-[11px] font-mono group">
     <span className="text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">{label}</span>
     <span className="text-white font-black">{value}</span>
  </div>
);

const Th = ({ children }: any) => (
  <th className="px-6 py-3 text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{children}</th>
);

const Tr = ({ id, coords, temp, status, color, icon }: any) => (
  <tr className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
     <td className="px-6 py-4 font-mono text-[12px] text-white font-black">{id}</td>
     <td className="px-6 py-4 font-mono text-[12px] text-white/40">{coords}</td>
     <td className="px-6 py-4 font-mono text-[12px] font-black" style={{ color }}>{temp.toFixed(1)}</td>
     <td className="px-6 py-4">
        <div className="flex items-center gap-3">
           <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
           <span className="text-[10px] font-black uppercase tracking-widest" style={{ color }}>{status}</span>
        </div>
     </td>
     <td className="px-6 py-4 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color }}>{icon}</td>
  </tr>
);

export default ThermalShieldingEngineeringOS_dafdd6;
