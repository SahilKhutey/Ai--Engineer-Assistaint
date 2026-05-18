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
  GitBranch,
  Maximize2,
  Minimize2,
  Settings2,
  Share2,
  Shield,
  Thermometer,
  Gauge} from 'lucide-react';
import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * NuclearCommandCenter v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity nuclear systems Terminal and control shell.
 * Bound to 60Hz nuclear telemetry, fusion/fission plasma states, and AI reasoning.
 * Features a real-time 3D toroid plasma workspace and subsystem monitor.
 */
const NuclearCommandCenterEngineeringOS_35e043 = () => {
  const { 
    nuclearState, 
    reasoningTrace, 
    thermalState,
    osStatus 
  } = useEngineeringStore();

  const {
    fusion = { plasmaTemp_keV: 15.2, confinementTime_s: 2.4 },
    fission = { reactivity: 0.0001, neutronFlux: 1e14 },
    status = 'IDLE'
  } = nuclearState || {};

  const {
    physics = { temperature: 298.15 }
  } = thermalState || {};

  const coreTempMK = (fusion.plasmaTemp_keV * 11.604).toFixed(1); // keV to Million Kelvin approx

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 bg-black/60 border-b border-white/5 flex justify-between items-center z-50 shrink-0 backdrop-blur-3xl">
         <div className="flex items-center gap-4">
            <Terminal className="text-[#adc6ff] w-5 h-5" />
            <h1 className="font-mono text-[16px] font-black text-[#adc6ff] uppercase tracking-[0.1em]">NUCLEAR_COMMAND_OS_v3.2</h1>
         </div>
         <div className="hidden md:flex gap-8 items-center">
            <NavTab label="TELEMETRY" active />
            <NavTab label="QUBIT_MAP" />
            <NavTab label="CIRCUIT_EDITOR" />
         </div>
         <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 px-4 py-1 bg-white/[0.02] rounded-full border border-white/5">
               <div className="w-2 h-2 rounded-full bg-[#10b981] pulse-green shadow-[0_0_10px_#10b981]" />
               <span className="text-[10px] font-mono font-black text-[#10b981] uppercase tracking-widest">SYSTEM_NOMINAL</span>
            </div>
            <Settings2 className="text-white/20 cursor-pointer hover:text-white transition-colors" />
         </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-20 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col py-8 gap-2 hidden md:flex shrink-0">
            <nav className="flex flex-col gap-4">
               <SideNavItem icon={<BarChart3 />} label="TELEM" active />
               <SideNavItem icon={<Share2 />} label="Q-MAP" />
               <SideNavItem icon={<GitBranch />} label="CIRCUIT" />
               <SideNavItem icon={<History />} label="LOGS" />
               <SideNavItem icon={<Activity />} label="HEALTH" />
            </nav>
            <div className="mt-auto px-4 pb-4 space-y-4">
               <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5">
                  <span className="text-[8px] font-black text-white/20 block mb-2 uppercase">CORE_TEMP</span>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden mb-2">
                     <div className="h-full bg-[#4cd7f6] w-3/4 shadow-[0_0_10px_#4cd7f6]" />
                  </div>
                  <div className="flex justify-between text-[8px] font-mono font-black text-[#4cd7f6]">
                     <span>{coreTempMK}M K</span>
                     <span>STABLE</span>
                  </div>
               </div>
            </div>
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-black/20 relative">
            <div className="grid grid-cols-12 gap-6 h-full">
               
               {/* 3D Reactor Visualization (Tokamak) */}
               <div className="col-span-12 lg:col-span-8 bg-black/40 border border-white/5 rounded-3xl overflow-hidden relative shadow-2xl group min-h-[500px] lg:min-h-0">
                  <div className="h-8 bg-white/[0.02] border-b border-white/5 px-4 flex items-center justify-between z-10 relative">
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">3D_TOROID_WORKSPACE_v3.4</span>
                     <div className="flex gap-4">
                        <Minimize2 className="text-white/20 hover:text-white cursor-pointer" />
                        <Maximize2 className="text-white/20 hover:text-white cursor-pointer" />
                     </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                     <img 
                        className="w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-[30000ms] group-hover:scale-110" 
                        src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBlLDvsJ5as0EbQJsoAL-rYMiDmHFaNJTiadT8wioguE3V7EclucaX57QptOu_QU-bYkjFani9TCNMyjMT1bNYUPcZ1tYrehwRawrs8KaUZSqyXGuWMlpofB5OJ2785PlVskrahExwecfcXoPgJItbuPtS6HWHfgaFGgfxpykRvKrOg_8HqOkRUnunf9QbxmICHdyPgQ_wXsSiFuWcUl9gFPyh6bcmpsXXhZWTxWuuZs2MqPgux52thFgp5i3RoOZ2gnw_BR0LbfS9P" 
                        alt="Tokamak Visual"
                     />
                     <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <div className="w-[80%] h-[80%] border-2 border-[#4cd7f6]/10 rounded-full animate-pulse" />
                        <div className="absolute w-full h-px bg-[#4cd7f6]/5 top-1/2" />
                        <div className="absolute h-full w-px bg-[#4cd7f6]/5 left-1/2" />
                     </div>
                     {/* Dynamic HUD Point */}
                     <div className="absolute top-1/4 left-1/4 flex flex-col items-start gap-2">
                        <div className="flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#4cd7f6] rounded-full shadow-[0_0_10px_#4cd7f6]" />
                           <div className="w-16 h-px bg-[#4cd7f6]/50" />
                           <span className="text-[10px] font-mono font-black text-[#4cd7f6] bg-black/80 px-2 py-1 border border-[#4cd7f6]/30 backdrop-blur-3xl rounded">B-FIELD: 5.4T</span>
                        </div>
                     </div>
                  </div>
                  {/* Bottom HUD Stats */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-6 pointer-events-none">
                     <HudMetric label="PLASMA_CONFINEMENT_INDEX" value="0.9842" sub="STABLE" color="#4cd7f6" />
                     <HudMetric label="NEUTRON_FLUX_DENSITY" value={fission.neutronFlux.toExponential(1)} sub="n/cm²s" color="#f59e0b" right />
                  </div>
               </div>

               {/* Right Column: Reasoning & Quick Stats */}
               <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                  
                  {/* AI Nuclear Reasoning Stream */}
                  <div className="bg-black/60 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-3xl flex flex-col flex-1 min-h-[400px]">
                     <div className="h-8 bg-white/[0.02] border-b border-white/5 px-4 flex items-center justify-between">
                        <span className="text-[9px] font-black text-[#4cd7f6] uppercase tracking-[0.4em]">AI_REASONING_STREAM</span>
                        <div className="w-2 h-2 rounded-full bg-[#4cd7f6] pulse-green shadow-[0_0_10px_#4cd7f6]" />
                     </div>
                     <div className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-6">
                        {reasoningTrace.slice(-4).map((trace, i) => (
                           <div key={i} className="border-l-2 border-white/10 pl-4 py-1 hover:border-[#4cd7f6] transition-colors group">
                              <span className="text-[9px] font-black text-white/20 block mb-1 group-hover:text-[#4cd7f6]/40 transition-colors uppercase tracking-widest">
                                 {new Date(trace.timestamp).toLocaleTimeString()} // {trace.agent}
                              </span>
                              <p className="text-[12px] font-mono text-white/60 group-hover:text-white transition-colors leading-relaxed">
                                 {trace.thought}
                              </p>
                           </div>
                        ))}
                        {reasoningTrace.length === 0 && (
                           <>
                              <ReasoningRow time="T-04:22:11" msg="Detecting minor perturbation in poloidal field at Sector-7. Suggesting current adjustment by +0.2%." color="#4cd7f6" />
                              <ReasoningRow time="T-04:22:15" msg="Thermal variance identified in Divertor Plate B. Liquid lithium cooling cycle initiated." color="#adc6ff" />
                              <ReasoningRow time="T-04:22:19" msg="Safety protocol 04-A active. Activity tritium breeding ratio stability." color="#f59e0b" />
                           </>
                        )}
                        <div className="flex items-center gap-3 animate-pulse">
                           <span className="text-[#4cd7f6] font-mono">_</span>
                           <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">REASONING_CORE_IDLE_...</span>
                        </div>
                     </div>
                     <div className="p-4 bg-white/[0.02] flex gap-2 border-t border-white/5">
                        <input 
                           className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-[12px] font-mono text-white outline-none focus:border-[#4cd7f6] transition-all" 
                           placeholder="COMMAND_OVERRIDE_ENTRY..." 
                        />
                        <button className="bg-[#4cd7f6] text-black px-6 py-2 font-black text-[10px] uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_#4cd7f640] active:scale-95 transition-all">EXEC</button>
                     </div>
                  </div>

                  {/* Density Telemetry Grid */}
                  <div className="grid grid-cols-2 gap-4">
                     <StatTile label="PLASMA_TEMP" value={`${coreTempMK}M K`} color="#f43f5e" icon={<Thermometer />} progress={80} />
                     <StatTile label="MAG_FORCE" value="6.2 TESLA" color="#adc6ff" icon={<Zap />} progress={66} />
                     <StatTile label="DENSITY" value="2.1e20 m⁻³" color="#4cd7f6" icon={<Gauge />} progress={50} />
                     <StatTile label="STABILITY" value="99.2%" color="#10b981" icon={<Shield />} progress={99} />
                  </div>
               </div>

               {/* High Density Telemetry List (Bottom Row) */}
               <div className="col-span-12 bg-black/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-3xl flex flex-col">
                  <div className="h-8 bg-white/[0.02] border-b border-white/5 px-6 flex items-center justify-between">
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">SUBSYSTEM_MONITOR_RAW_HEX_FEED</span>
                     <div className="flex gap-4">
                        <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">ALL_SYSTEMS_GO</span>
                     </div>
                  </div>
                  <div className="overflow-x-auto">
                     <table className="w-full text-left font-mono text-[11px]">
                        <thead className="bg-white/[0.01] text-white/20 border-b border-white/5">
                           <tr>
                              <Th>ADDR_REF</Th>
                              <Th>MODULE_ID</Th>
                              <Th>VALUE_FLUX</Th>
                              <Th>TOLERANCE</Th>
                              <Th className="text-right">STATUS_CODE</Th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.02]">
                           <Tr addr="0x4F22A" id="CRYOGENIC_PUMP_01" val="4.221 K" tol="+/- 0.001" status="READY_L1" color="#10b981" />
                           <Tr addr="0x4F22B" id="CRYOGENIC_PUMP_02" val="4.225 K" tol="+/- 0.001" status="READY_L1" color="#10b981" />
                           <Tr addr="0x8A11F" id="BLANKET_MOD_04" val="782.1 C" tol="+/- 12.00" status="WARN_THM" color="#f59e0b" />
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </main>
      </div>

      {/* 4. BOTTOM NAV (Mobile) */}
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 md:hidden px-4 bg-black/80 backdrop-blur-3xl rounded-t-[32px] border-t border-white/5 shadow-2xl">
         <div className="bg-[#adc6ff] text-black rounded-2xl w-12 h-12 flex items-center justify-center shadow-[0_0_20px_#adc6ff40]"><LayoutGrid /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#adc6ff] transition-colors"><Waves /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#adc6ff] transition-colors"><BarChart3 /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#adc6ff] transition-colors"><Power /></div>
      </footer>

      <style jsx>{`
         .scanline-overlay {
            background: linear-gradient(to bottom, transparent 50%, rgba(173, 198, 255, 0.05) 50%);
            background-size: 100% 4px;
         }
         .pulse-green {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
            animation: pulse 2s infinite;
         }
         @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
         }
      `}</style>
    </div>
  );
};

const NavTab = ({ label, active }: any) => (
  <span className={`text-[10px] font-black uppercase tracking-[0.3em] cursor-pointer transition-all ${active ? 'text-[#adc6ff] border-b-2 border-[#adc6ff] pb-1' : 'text-white/20 hover:text-white'}`}>
     {label}
  </span>
);

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`flex flex-col items-center justify-center py-6 cursor-pointer transition-all group ${active ? 'bg-[#adc6ff]/10 text-[#adc6ff] border-l-4 border-[#adc6ff]' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform">{icon}</div>
     <span className="text-[9px] font-black uppercase tracking-widest mt-2">{label}</span>
  </div>
);

const HudMetric = ({ label, value, sub, color, right }: any) => (
  <div className={`bg-black/80 p-4 border border-white/5 backdrop-blur-3xl rounded-2xl min-w-[200px] shadow-2xl ${right ? 'text-right' : ''}`}>
     <span className="text-[8px] font-black text-white/40 block mb-1 uppercase tracking-widest">{label}</span>
     <div className="text-2xl font-mono font-black" style={{ color }}>{value} <span className="text-[12px] opacity-40">{sub}</span></div>
  </div>
);

const StatTile = ({ label, value, color, icon, progress }: any) => (
  <div className="bg-black/40 border border-white/5 p-4 rounded-2xl backdrop-blur-3xl flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-all shadow-inner">
     <span className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1 group-hover:text-white/40">{label}</span>
     <div className="text-lg font-mono font-black mb-3" style={{ color }}>{value}</div>
     <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full transition-all duration-1000" style={{ width: `${progress}%`, backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
     </div>
  </div>
);

const ReasoningRow = ({ time, msg, color }: any) => (
  <div className="border-l-2 border-white/5 pl-4 py-1">
     <span className="text-[9px] font-black text-white/20 block mb-1 uppercase tracking-widest">{time}</span>
     <p className="text-[11px] font-mono text-white/60 leading-relaxed" style={{ color: `${color}80` }}>{msg}</p>
  </div>
);

const Th = ({ children, className }: any) => (
  <th className={`px-6 py-3 text-[9px] font-black text-white/20 uppercase tracking-[0.3em] ${className}`}>{children}</th>
);

const Tr = ({ addr, id, val, tol, status, color }: any) => (
  <tr className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
     <td className="px-6 py-4 text-[#adc6ff] font-mono font-black">{addr}</td>
     <td className="px-6 py-4 text-white/60 font-black">{id}</td>
     <td className="px-6 py-4 text-white font-black">{val}</td>
     <td className="px-6 py-4 text-white/20">{tol}</td>
     <td className="px-6 py-4 text-right" style={{ color }}>{status}</td>
  </tr>
);

export default NuclearCommandCenterEngineeringOS_35e043;
