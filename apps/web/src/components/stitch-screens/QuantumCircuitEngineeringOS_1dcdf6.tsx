'use client';

import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Settings,
  Search,
  Brain,
  Maximize2,
  MoreVertical,
  LayoutGrid,
  TrendingUp,
  Database,
  Shield,
  Zap,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Network,
  AlertTriangle,
  Play,
  RefreshCw,
  Grid,
  Eye,
  Layers,
  Box,
  CheckCircle2,
  Info,
  BarChart3,
  Binary,
  Scale,
  Gauge,
  Clock,
  Thermometer,
  Sparkles,
  FolderOpen,
  Fingerprint,
  Filter,
  Cpu,
  HardDrive,
  Share2,
  User,
  Atom,
  Activity,
  Lock,
  FlaskConical,
  Microscope,
  Workflow,
  Code2,
  CircuitBoard,
  Radio,
  GitPullRequest,
  ZapOff,
  Ghost,
  Boxes,
  Target
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * QuantumCircuitEngineering v3.2 (Phase 58 Hardened)
 * 
 * Sovereing mission-control interface for quantum circuit design and error correction.
 * Bound to 60Hz quantumState telemetry for real-time coherence Activity.
 */
const QuantumCircuitEngineeringOS_1dcdf6 = () => {
  const { quantumState, osStatus, pushEvent, addNotification } = useEngineeringStore();
  const { coherence = 0.984, entanglement_density = 0.88, qubit_temp_mk = 14.2 } = quantumState || {};
  const { kernelLoad = 0.42 } = osStatus || {};

  const [simRunning, setSimRunning] = useState(false);
  const [activeGate, setActiveGate] = useState<string | null>(null);

  const handleSimTrigger = () => {
    setSimRunning(!simRunning);
    pushEvent?.('QUANTUM_SIM_TOGGLED', { state: !simRunning, timestamp: Date.now() });
    addNotification?.({
      title: simRunning ? 'SIMULATION_HALTED' : 'SIMULATION_STARTED',
      message: simRunning ? 'Quantum back-end detached.' : 'Executing circuit on QASM-3 emulator.',
      type: 'INFO'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-blue-500/30 animate-in fade-in duration-1000">
      {/* Aerospace Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 quantum-grid pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-2xl">
             <CircuitBoard className="w-4 h-4 text-blue-400" />
          </div>
          <h1 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono text-blue-400">QUANTUM_COMMAND_OS // CIRCUIT_v3.2</h1>
        </div>
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
              <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-widest">SYSTEM_OPTIMIZED</span>
           </div>
           <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-6">
              <Settings className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAVIGATION */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-6 hidden lg:flex shrink-0">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_NAV</span>
          <nav className="flex flex-col gap-2">
            <SidebarItem icon={<BarChart3 className="w-4 h-4" />} label="Telemetry" />
            <SidebarItem icon={<Workflow className="w-4 h-4" />} label="Qubit_Map" />
            <SidebarItem icon={<GitPullRequest className="w-4 h-4" />} label="Circuit_Editor" active />
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="Stability_Log" />
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="System_Health" />
          </nav>

          <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
             <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[9px] font-black text-white/20 uppercase tracking-widest text-blue-400">COHERENCE</span>
                   <span className="text-[11px] font-mono font-black text-white">{(coherence * 100).toFixed(1)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                   <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${coherence * 100}%` }} />
                </div>
             </div>
          </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 flex flex-col min-w-0 bg-transparent relative overflow-hidden">
          
          {/* Header Controls */}
          <div className="flex items-center justify-between px-8 py-4 border-b border-white/5 bg-white/[0.02] backdrop-blur-md">
            <div className="flex gap-4">
              <button 
                onClick={handleSimTrigger}
                className={`group px-6 py-2 rounded-xl flex items-center gap-3 transition-all active:scale-95 ${simRunning ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'}`}
              >
                {simRunning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{simRunning ? 'HALT_SIM' : 'RUN_SIMULATION'}</span>
              </button>
              <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-all flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">AI_OPTIMIZE</span>
              </button>
            </div>
            <div className="flex gap-2">
              <MetricBadge label="DEPTH" value="14" />
              <MetricBadge label="GATES" value="42" />
              <MetricBadge label="NOISE_EST" value="0.002" color="text-emerald-400" />
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            {/* Circuit Canvas */}
            <div className="flex-1 relative overflow-auto custom-scrollbar p-16">
              <div className="flex flex-col gap-16 min-w-[1000px] relative z-10">
                <QubitLine id="q0" gates={[{ type: 'H', active: true }, { type: 'X' }, { type: 'CTRL', target: 'q1' }]} />
                <QubitLine id="q1" gates={[{ offset: 3, type: '⊕', secondary: true }]} />
                <QubitLine id="q2" gates={[{ type: 'H' }, { offset: 4, type: 'MEASURE', tertiary: true }]} />
                
                {/* Entanglement Connection Visualization */}
                <div className="absolute top-[32px] left-[340px] w-px h-[64px] bg-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              </div>
              
              {/* Technical Overlay */}
              <div className="absolute inset-0 pointer-events-none border border-white/[0.02] m-8 rounded-[40px]" />
            </div>

            {/* Right Sidebar: Inspection */}
            <aside className="w-80 border-l border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col overflow-y-auto custom-scrollbar">
               
               {/* Bloch Sphere Visualizer */}
               <section className="p-8 border-b border-white/5 space-y-6">
                  <div className="flex items-center justify-between">
                     <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">BLOCH_SPHERE_VISUAL</span>
                     <Maximize2 className="w-3.5 h-3.5 text-white/10" />
                  </div>
                  <div className="aspect-square bg-black/40 rounded-[32px] border border-white/5 flex items-center justify-center relative overflow-hidden group">
                     <img 
                       src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuD8Ca6kBSd88gzJSZ3zrF7HtYS-NLvgYJlHLMigjhC-vuNhQQFCdiYAje9YIc38nVctWv_e79vjJMTNMRj241V4g-WwpznufsO_Gsa0ul1cMPZxsRx9Qm9lBoh7s8K4GZ-Vgwf-wwBzNKaGD0BHBTHflpOrx_0pTcCMCjkH6F938_pyYC49xO884tlV-EyPtpD1q6iKUwt6Cb0qOXQxTTqOJYHeSs2j6BAQb6Bk5mOb1rGwioLvSSQzcob-lrwUEiTTN9rp2qv48ltr" 
                       className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000"
                     />
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-32 h-32 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute w-24 h-px bg-blue-500/40 rotate-45" />
                     </div>
                  </div>
               </section>

               {/* AI Core Observer */}
               <section className="p-8 border-b border-white/5 space-y-6">
                  <div className="flex items-center gap-3">
                     <Brain className="w-4 h-4 text-amber-400" />
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">AI_CORE_OBSERVER</span>
                  </div>
                  <div className="space-y-3">
                     <InsightCard message="REDUNDANT_GATE_DETECTED: Q2-Hadamard-02 can be collapsed to identity." color="border-amber-500/40" />
                     <InsightCard message="NOISE_THRESHOLD: Segment D4 exceeds error correction ceiling." color="border-blue-500/40" />
                  </div>
               </section>

               {/* Gates Palette */}
               <section className="p-8 space-y-6">
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">GATES_PALETTE</span>
                  <div className="grid grid-cols-3 gap-3">
                     <GateIcon label="H" sub="Hadamard" color="text-blue-400" />
                     <GateIcon label="X" sub="Pauli-X" />
                     <GateIcon label="Y" sub="Pauli-Y" />
                     <GateIcon icon={<Radio className="w-5 h-5 text-emerald-400" />} sub="Measure" />
                     <GateIcon icon={<Activity className="w-5 h-5 text-blue-400" />} sub="Phase" />
                     <GateIcon icon={<ZapOff className="w-5 h-5 text-rose-500" />} sub="Noise" />
                  </div>
               </section>
            </aside>
          </div>

          {/* Footer: Telemetry Log */}
          <footer className="h-32 border-t border-white/5 bg-black/40 backdrop-blur-3xl px-8 py-4 flex flex-col gap-2 shrink-0">
             <div className="flex justify-between items-center">
                <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">SIMULATION_TELEMETRY_LOG</span>
                <div className="flex items-center gap-4">
                   <span className="text-[10px] font-mono font-black text-blue-400 tracking-widest uppercase">SYNC_STATE: NOMINAL</span>
                   <span className="text-[10px] font-mono font-black text-white/20 tracking-widest">FPS: 60.0</span>
                </div>
             </div>
             <div className="flex-1 overflow-y-auto custom-scrollbar font-mono text-[11px] space-y-1">
                <LogItem time="12:44:02.11" msg="INITIALIZING_VIRTUAL_CIRCUIT_BACKEND: QASM_3.0_PARSER... OK" />
                <LogItem time="12:44:03.45" msg="ALLOCATING_QUBITS: 3_ACTIVE_LINES_DETECTED" />
                <LogItem time="12:44:04.90" msg="STATUS: LISTENING_FOR_CIRCUIT_UPDATES..." color="text-blue-400" />
                <LogItem time="12:44:05.12" msg="WARN: SEGMENT_Q2_H4_OVER_NOISE_BUDGET" color="text-rose-400" />
             </div>
          </footer>
        </main>
      </div>

      <style jsx>{`
        .quantum-grid {
          background-image: linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .scanline {
          background: linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 50%, transparent 50%);
          background-size: 100% 4px;
        }
        .circuit-line {
          background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 50%, transparent 50%);
          background-size: 8px 1px;
          background-repeat: repeat-x;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-xl' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
    <div className="group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-[11px] font-black uppercase tracking-[0.2em]">{label}</span>
  </div>
);

const MetricBadge = ({ label, value, color }: any) => (
  <div className="px-5 py-1.5 bg-black/40 border border-white/5 rounded-xl flex items-center gap-4 shadow-xl">
     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{label}</span>
     <span className={`text-[12px] font-mono font-black ${color || 'text-white'} tracking-tighter`}>{value}</span>
  </div>
);

const QubitLine = ({ id, gates }: any) => (
  <div className="relative flex items-center h-16 group">
     <div className="absolute left-0 -ml-20 font-mono text-xl font-black text-blue-400 tracking-tighter italic group-hover:scale-110 transition-transform">
        {id}
     </div>
     <div className="w-full h-px circuit-line opacity-40 group-hover:opacity-100 transition-opacity" />
     <div className="absolute left-16 flex items-center h-full">
        {gates.map((gate: any, i: number) => (
           <div 
             key={i} 
             className="flex items-center"
             style={{ marginLeft: gate.offset ? `${gate.offset * 80}px` : '0px', marginRight: '64px' }}
           >
              <div className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center font-mono text-xl font-black transition-all cursor-grab active:cursor-grabbing hover:scale-110 shadow-2xl relative
                ${gate.active ? 'bg-blue-500 text-white border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.4)]' : 
                  gate.secondary ? 'bg-cyan-500 text-white border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]' :
                  gate.tertiary ? 'bg-amber-500 text-white border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]' :
                  'bg-black/60 text-white border-white/10 hover:border-blue-500/50'}`}>
                 {gate.type}
                 {gate.type === 'CTRL' && (
                    <div className="absolute bottom-[-64px] left-1/2 -translate-x-1/2 w-[2px] h-[64px] bg-cyan-500/40" />
                 )}
              </div>
           </div>
        ))}
     </div>
     <div className="absolute right-0 w-12 h-12 bg-black/40 border border-white/5 flex items-center justify-center rounded-2xl shadow-xl group-hover:border-blue-500/40 transition-all">
        <Activity className="w-5 h-5 text-blue-400/40 group-hover:text-blue-400 transition-colors" />
     </div>
  </div>
);

const InsightCard = ({ message, color }: any) => (
  <div className={`p-4 bg-white/[0.02] border-l-2 rounded-r-xl ${color} space-y-1 hover:bg-white/5 transition-colors cursor-pointer group`}>
     <p className="text-[11px] text-white/60 leading-relaxed font-mono font-medium group-hover:text-white">
        {message}
     </p>
  </div>
);

const GateIcon = ({ label, sub, icon, color }: any) => (
  <div className="aspect-square bg-white/[0.02] border border-white/5 rounded-[20px] flex flex-col items-center justify-center gap-1 hover:bg-white/5 hover:border-blue-500/20 transition-all cursor-grab active:scale-95 group">
     {icon ? icon : <span className={`text-xl font-mono font-black ${color || 'text-white'}`}>{label}</span>}
     <span className="text-[8px] font-black text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">{sub}</span>
  </div>
);

const LogItem = ({ time, msg, color }: any) => (
  <div className={`flex gap-4 ${color || 'text-white/40'}`}>
     <span className="text-blue-500/40">[{time}]</span>
     <span className="font-mono">{msg}</span>
  </div>
);

export default QuantumCircuitEngineeringOS_1dcdf6;
