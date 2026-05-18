'use client';

import React, { useState } from 'react';
import {
  Terminal,
  BarChart3,
  Workflow,
  History,
  Activity,
  Settings2,
  MoreVertical,
  Brain,
  Zap,
  FlaskConical,
  Sparkles,
  HardDrive,
  LayoutGrid,
  Waves,
  BarChart,
  Power,
  Plus,
  Play
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * QuantumCommand v3.2 (Phase 55 Hardened)
 * 
 * Sovereign quantum compute orchestration shell.
 * Bound to 60Hz quantum telemetry, cryogenic Activity, and AI reasoning kernels.
 * Features a real-time qubit status matrix and hybrid solver output.
 */
const QuantumCommandEngineeringOS_b1581b = () => {
  const { 
    quantumState, 
    reasoningTrace, 
    pushEvent,
    addNotification 
  } = useEngineeringStore();

  const {
    fidelity = 0.9999,
    coherenceTime_ms = 120,
    qubits = { count: 128, active: 124 },
    entanglement = { state: 'BELL_PAIR' }
  } = quantumState || {};

  const [command, setCommand] = useState('');
  const latestReasoning = reasoningTrace[reasoningTrace.length - 1];

  const handleApplyOptimization = () => {
    pushEvent?.('QUANTUM_REMAP_CNOT', { target: 'Q-14', lattice: 'Q-02/Q-03', timestamp: Date.now() });
    addNotification?.({
      title: 'OPTIMIZATION_APPLIED',
      message: 'Remapping CNOT gates to preserve lattice coherence. Fidelity gain: +4.8%.',
      type: 'SUCCESS',
      domain: 'QUANTUM'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 bg-black/60 border-b border-white/5 flex justify-between items-center z-50 shrink-0 backdrop-blur-3xl">
         <div className="flex items-center gap-4">
            <Terminal className="text-[#adc6ff] w-5 h-5" />
            <h1 className="font-mono text-[16px] font-black text-[#adc6ff] uppercase tracking-[0.1em]">QUANTUM_COMMAND_OS_v3.2</h1>
         </div>
         <div className="hidden md:flex gap-8 items-center">
            <div className="flex gap-6">
               <NavTab label="TELEMETRY" active />
               <NavTab label="SIMULATIONS" />
               <NavTab label="ARCHIVE" />
            </div>
         </div>
         <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 px-4 py-1 bg-white/[0.02] rounded-full border border-white/5">
               <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_10px_#4cd7f6]" />
               <span className="text-[10px] font-mono font-black text-[#4cd7f6] uppercase tracking-widest">CORE_LIVE</span>
            </div>
             <Settings2 className="text-white/20 cursor-pointer hover:text-white transition-colors w-5 h-5" />
         </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-20 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col py-8 gap-2 hidden md:flex shrink-0">
            <nav className="flex flex-col gap-4">
               <SideNavItem icon={<BarChart3 className="w-5 h-5" />} label="TELEM" active />
               <SideNavItem icon={<Workflow className="w-5 h-5" />} label="Q-MAP" />
               <SideNavItem icon={<Activity className="w-5 h-5" />} label="CIRCUIT" />
               <SideNavItem icon={<History className="w-5 h-5" />} label="LOGS" />
               <SideNavItem icon={<HardDrive className="w-5 h-5" />} label="HEALTH" />
            </nav>
            <div className="mt-auto px-4 pb-4">
               <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-[8px] font-black text-white/20 uppercase">CRYO_TEMP</span>
                     <span className="text-[8px] font-mono font-black text-[#f59e0b]">0.015 K</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-[#f59e0b] w-4/5 shadow-[0_0_10px_#f59e0b]" />
                  </div>
               </div>
            </div>
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 overflow-y-auto custom-scrollbar bg-black/20 p-8 grid-pattern relative">
            <div className="max-w-7xl mx-auto space-y-8">
               
               {/* Hero Grid: Qubit Status & Hybrid Solver */}
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Qubit Status Matrix */}
                  <div className="lg:col-span-2 bg-black/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-3xl">
                     <div className="h-8 bg-white/[0.02] border-b border-white/5 px-4 flex items-center justify-between">
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">LIVE_QUBIT_STATUS_MATRIX</span>
                        <MoreVertical className="text-white/20 w-4 h-4" />
                     </div>
                     <div className="p-8 grid grid-cols-8 md:grid-cols-12 gap-3 aspect-[2/1] items-center justify-center">
                        {Array.from({ length: 96 }).map((_, i) => (
                           <QubitNode key={i} index={i} active={i < qubits.active} error={i % 31 === 0} />
                        ))}
                     </div>
                  </div>

                  {/* Hybrid Solver Status */}
                  <div className="bg-black/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-3xl flex flex-col">
                     <div className="h-8 bg-white/[0.02] border-b border-white/5 px-4 flex items-center">
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">HYBRID_SOLVER_OUTPUT</span>
                     </div>
                     <div className="p-8 flex-1 flex flex-col justify-center items-center gap-12">
                        <Gauge progress={75.2} label="FIDELITY" value="75.2%" color="#4cd7f6" />
                        <div className="w-full grid grid-cols-2 gap-4">
                           <MetricCard label="ENTANGLEMENT" value={fidelity.toFixed(4)} color="#4cd7f6" />
                           <MetricCard label="COHERENCE" value={`${coherenceTime_ms} μs`} color="#f59e0b" />
                        </div>
                     </div>
                  </div>
               </div>

               {/* Middle Section: Terminal & Reasoning */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Quantum Terminal Terminal */}
                  <div className="bg-black/60 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-3xl flex flex-col min-h-[400px]">
                     <div className="h-8 bg-white/[0.02] border-b border-white/5 px-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <Terminal className="text-[#4cd7f6] w-3.5 h-3.5" />
                           <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">COMMAND_CONSOLE</span>
                        </div>
                        <div className="flex gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                           <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                           <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        </div>
                     </div>
                     <div className="p-6 flex-1 font-mono text-[12px] overflow-y-auto custom-scrollbar space-y-2">
                        <ConsoleRow msg="Initializing quantum kernel v4.2.0..." color="white/20" />
                        <ConsoleRow msg={`[OK] Hardware calibration check: ${qubits.active} qubits online.`} color="#4cd7f6" />
                        <ConsoleRow msg="root@quantum_os: # run algorithm --qaoa --depth 4" />
                        <ConsoleRow msg="Generating ansatz for MAX-CUT problem..." color="#f59e0b" />
                        <ConsoleRow msg="Mapping to Ising Hamiltonian..." color="white/40" />
                        <div className="flex items-center gap-2">
                           <span className="text-[#adc6ff]">&gt;</span>
                           <input 
                              type="text" 
                              value={command} 
                              onChange={(e) => setCommand(e.target.value)}
                              placeholder="Enter system command..."
                              className="bg-transparent border-none outline-none text-white w-full p-0 placeholder:text-white/10"
                           />
                        </div>
                     </div>
                  </div>

                  {/* AI Quantum Reasoning */}
                  <div className="bg-black/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-3xl flex flex-col">
                     <div className="h-8 bg-white/[0.02] border-b border-white/5 px-4 flex items-center">
                        <span className="text-[9px] font-black text-[#adc6ff] uppercase tracking-[0.4em]">AI_REASONING_CORE</span>
                     </div>
                     <div className="p-8 flex-1 flex flex-col gap-8">
                        <div className="flex gap-6">
                           <div className="w-14 h-14 rounded-2xl border border-[#adc6ff]/20 flex items-center justify-center bg-[#adc6ff]/5 shrink-0 shadow-inner">
                              <Brain className="text-[#adc6ff] w-6 h-6" />
                           </div>
                           <div className="space-y-1">
                              <h3 className="text-xl font-black text-white uppercase tracking-tighter">Circuit Optimization Suggestion</h3>
                              <p className="text-sm text-white/40 leading-relaxed">
                                 {latestReasoning?.thought || "Detected high gate error rate in Q-14 segment. AI suggests remapping CNOT gates to Q-02/Q-03 lattice to preserve coherence."}
                              </p>
                           </div>
                        </div>
                        <div className="p-6 bg-black/40 border border-white/5 rounded-2xl italic font-mono text-[11px] text-[#4cd7f6]/80 shadow-inner">
                           "The current topological mapping shows 12% higher decoherence than baseline. Estimated fidelity gain with remapping: +4.8%."
                        </div>
                        <div className="mt-auto flex justify-end gap-4">
                           <button className="px-8 py-2 border border-white/10 text-white font-black text-[10px] uppercase tracking-widest rounded-lg hover:bg-white/5 transition-all">IGNORE</button>
                           <button 
                              onClick={handleApplyOptimization}
                              className="px-8 py-2 bg-[#adc6ff] text-black font-black text-[10px] uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_#adc6ff] active:scale-95 transition-all"
                           >
                              APPLY OPTIMIZATION
                           </button>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Bottom Section: Algorithm Shortcuts */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <AlgoTile label="QAOA" icon={<Zap className="w-5 h-5" />} value="p=12" sub="LAST RUN: 2M AGO" color="#4cd7f6" />
                  <AlgoTile label="VQE" icon={<FlaskConical className="w-5 h-5" />} value="-78.24 Ha" sub="STABLE" color="#f59e0b" />
                  <AlgoTile label="QML" icon={<Sparkles className="w-5 h-5" />} value="94.8%" sub="ACTIVE INFERENCE" color="#4cd7f6" />
                  <div className="bg-black/40 border border-white/5 p-8 rounded-3xl shadow-2xl backdrop-blur-3xl flex flex-col">
                     <div className="flex items-center gap-2 mb-6">
                        <HardDrive className="text-[#adc6ff] w-4 h-4" />
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">RESOURCE_LOAD</span>
                     </div>
                     <div className="space-y-6">
                        <LoadGauge label="H-KERNEL" progress={42} color="#adc6ff" />
                        <LoadGauge label="LATENCY" progress={15} color="#4cd7f6" />
                     </div>
                  </div>
               </div>

               {/* Footer Image Banner */}
               <div className="relative h-48 w-full border border-white/5 rounded-[40px] overflow-hidden group shadow-2xl">
                  <img 
                     className="w-full h-full object-cover opacity-20 transition-all duration-[10000ms] group-hover:scale-110 group-hover:opacity-30" 
                     src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuA-dlFjM7U1XuJjMQqAIKmRmWwwV774HKhTUJyjISriFW0jH9gRCH87AB2FT21PaICSWmFhUJkKcSmxJYW7547bMwWIlmjhpiWu9k9aVRgagJtuq1nEFbUuUxD11u8hjoMNid62Damq6XSGagcRsffGwW60mrnxacc_4BGBUCTUc4HBoCErmnMjoUqfVO-P2tKhXZiKYx8Lih6zRC1QpZAAgkxrR5pbp4zSB7kYSNiZxS3Ai1jEQN5HikuJkGrpRQegF83qRwXkELHT" 
                     alt="Quantum Hardware"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10">
                     <p className="text-[10px] font-black text-[#adc6ff] uppercase tracking-[0.4em] mb-2">CONNECTED_HARDWARE: SYSTEM_E_STABLE</p>
                     <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Cryogenic Chamber Alpha-7</h2>
                  </div>
               </div>
            </div>
         </main>
      </div>

      {/* 4. BOTTOM NAV (Mobile) */}
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 md:hidden px-4 bg-black/80 backdrop-blur-3xl rounded-t-[32px] border-t border-white/5">
         <div className="bg-[#adc6ff] text-black rounded-2xl w-12 h-12 flex items-center justify-center shadow-[0_0_20px_#adc6ff40]"><LayoutGrid className="w-5 h-5" /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#adc6ff] transition-colors"><Waves className="w-5 h-5" /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#adc6ff] transition-colors"><BarChart className="w-5 h-5" /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#adc6ff] transition-colors"><Power className="w-5 h-5" /></div>
      </footer>

      {/* 5. FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-[#4cd7f6] text-black rounded-full shadow-[0_0_30px_#4cd7f640] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group">
         <Plus className="group-hover:rotate-90 transition-transform w-6 h-6" />
      </button>

      <style jsx>{`
         .scanline-overlay {
            background: linear-gradient(to bottom, transparent 50%, rgba(173, 198, 255, 0.05) 50%);
            background-size: 100% 4px;
         }
         .grid-pattern {
            background-image: 
               linear-gradient(to right, rgba(173, 198, 255, 0.03) 1px, transparent 1px), 
               linear-gradient(to bottom, rgba(173, 198, 255, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
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

const QubitNode = ({ active, error }: any) => (
  <div className={`aspect-square rounded-sm border transition-all duration-500 hover:scale-125 ${error ? 'bg-rose-500/20 border-rose-500/40' : active ? 'bg-[#4cd7f6]/10 border-[#4cd7f6]/40 shadow-[0_0_10px_#4cd7f620]' : 'bg-white/5 border-white/10 opacity-20'}`}>
     <div className={`w-1 h-1 rounded-full mx-auto my-auto mt-[40%] ${error ? 'bg-rose-500 animate-ping' : active ? 'bg-[#4cd7f6]' : 'bg-white/20'}`} />
  </div>
);

const Gauge = ({ progress, label, value, color }: any) => (
  <div className="relative w-40 h-40 flex items-center justify-center">
     <svg className="w-full h-full transform -rotate-90">
        <circle className="text-white/5" cx="80" cy="80" fill="transparent" r="72" stroke="currentColor" strokeWidth="4" />
        <circle className="transition-all duration-1000" cx="80" cy="80" fill="transparent" r="72" stroke={color} strokeDasharray={452.39} strokeDashoffset={452.39 * (1 - progress/100)} strokeWidth="8" strokeLinecap="round" style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
     </svg>
     <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-mono font-black text-white">{value}</span>
        <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{label}</span>
     </div>
  </div>
);

const MetricCard = ({ label, value, color }: any) => (
  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-all cursor-pointer group shadow-inner">
     <p className="text-[8px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40 mb-1">{label}</p>
     <p className="text-lg font-mono font-black" style={{ color }}>{value}</p>
  </div>
);

const ConsoleRow = ({ msg, color }: any) => (
  <p className="font-mono text-[11px]" style={{ color: color || 'white' }}>{msg}</p>
);

const AlgoTile = ({ label, icon, value, sub, color }: any) => (
  <div className="bg-black/40 border border-white/5 p-8 rounded-3xl shadow-2xl backdrop-blur-3xl group cursor-pointer hover:border-white/20 transition-all active:scale-95">
     <div className="flex justify-between items-start mb-8">
        <span className="text-2xl font-mono font-black" style={{ color }}>{label}</span>
        <div className="text-white/20 group-hover:text-white transition-colors group-hover:scale-110">{icon}</div>
     </div>
     <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-1">CURRENT_METRIC</p>
     <p className="text-2xl font-mono font-black text-white">{value}</p>
     <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
        <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">{sub}</span>
        <Play className="text-white/10 group-hover:text-white transition-colors w-4 h-4" />
     </div>
  </div>
);

const LoadGauge = ({ label, progress, color }: any) => (
  <div className="space-y-2">
     <div className="flex justify-between text-[9px] font-mono font-black uppercase tracking-tight">
        <span className="text-white/40">{label}</span>
        <span style={{ color }}>{progress}%</span>
     </div>
     <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full transition-all duration-1000 shadow-lg" style={{ width: `${progress}%`, backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
     </div>
  </div>
);

export default QuantumCommandEngineeringOS_b1581b;
