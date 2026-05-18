'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Activity,
  Zap,
  Terminal,
  Settings2,
  Box,
  ChevronRight,
  Maximize2,
  RotateCcw,
  Play,
  Pause,
  CircleStop,
  Home,
  Binary,
  Database,
  Brain,
  ShieldCheck,
  Microscope
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * VectorCommandCenterEngineeringOS_cd7d91 (Phase 58 Hardened)
 * 
 * Terminal and control center for kinetic dynamics and vector field analysis.
 * Features real-time AI spatial reasoning, field density Activity, and solver orchestration.
 * Integrated with physicsState and orchestrationState.
 */
const VectorCommandCenterEngineeringOS_cd7d91 = () => {
  const { physicsState, orchestrationState, osStatus, pushEvent } = useEngineeringStore();
  const [isSolving, setIsSolving] = useState(false);

  // Kinetic state mapping
  const lambda = physicsState?.constants?.lambda || 0.428;
  const phi = physicsState?.constants?.phi || 1.618;
  const deltaV = physicsState?.constants?.deltaV || 9.81;
  const isSimActive = osStatus?.status === 'ACTIVE';

  const handleInitiateSolve = () => {
    setIsSolving(true);
    pushEvent?.('INITIATE_SOLVE', { 
      type: 'VECTOR_FIELD_ALIGNMENT', 
      priority: 'HIGH',
      timestamp: Date.now() 
    });
    setTimeout(() => setIsSolving(false), 2000);
  };

  const handleControlAction = (action: string) => {
    pushEvent?.('CONTROL_SIGNAL', { action, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f14] text-[#e1e2ec] font-sans overflow-hidden selection:bg-[#4cd7f6]/30">
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-[#202b3c] bg-[#10131a]/70 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-3">
          <Cpu className="w-5 h-5 text-[#adc6ff] fill-[#adc6ff]/20" />
          <h1 className="text-[18px] font-bold text-[#adc6ff] tracking-tighter leading-none uppercase tracking-widest">KINETIC_OS // DYNAMICS_LAYER</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-[10px] font-mono font-bold text-[#8c909f] tracking-widest uppercase">
            <span className="text-[#adc6ff]">NODE: VCTOR_01</span>
            <span>UPTIME: 142:09:12</span>
          </div>
          <div className="text-[10px] font-mono font-bold text-[#adc6ff] tracking-widest bg-[#1d2027] px-4 py-1 rounded border border-[#202b3c]">
            GPU: {((osStatus?.kernelLoad || 0.94) * 100).toFixed(0)}% | SIM: {isSimActive ? 'ACTIVE' : 'IDLE'}
          </div>
        </div>
      </header>

      {/* 2. MAIN LayoutGrid */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* Navigation Sidebar (Left) */}
        <nav className="w-64 border-r border-[#202b3c] bg-[#10131a]/50 flex flex-col p-4 gap-2 hidden lg:flex">
          <header className="px-4 py-2 mb-4">
            <span className="text-[10px] font-bold text-[#8c909f] uppercase tracking-[0.2em]">SYSTEM_INDEX</span>
          </header>
          <NavItem icon={<Activity className="w-4 h-4" />} label="Telemetry" active />
          <NavItem icon={<Binary className="w-4 h-4" />} label="Kinematics" />
          <NavItem icon={<Brain className="w-4 h-4" />} label="AI_Stability" />
          <NavItem icon={<Terminal className="w-4 h-4" />} label="Command_Log" />
          <NavItem icon={<Database className="w-4 h-4" />} label="System_Sync" />
          
          <div className="mt-auto p-4 bg-[#1d2027]/50 rounded-xl border border-[#202b3c] space-y-3">
            <div className="flex justify-between items-center text-[10px] font-mono font-bold">
              <span className="text-[#8c909f] uppercase">Core Temp</span>
              <span className="text-[#ffb786]">32°C</span>
            </div>
            <div className="w-full h-1 bg-[#32353c] rounded-full overflow-hidden">
              <div className="h-full bg-[#ffb786] w-1/3 shadow-[0_0_8px_#ffb786]" />
            </div>
          </div>
        </nav>

        {/* Central Workspace */}
        <section className="flex-1 flex flex-col min-w-0 bg-[#0b0e15]">
          
          {/* Metrics Bento Row */}
          <div className="grid grid-cols-4 border-b border-[#202b3c] bg-[#1d2027]/30 divide-x divide-[#202b3c]">
            <MetricBox label="Algebra" value={`Λ = ${lambda}`} color="text-[#adc6ff]" />
            <MetricBox label="Geometry" value={`Φ = ${phi}`} color="text-[#4cd7f6]" />
            <MetricBox label="Dynamics" value={`Δv = ${deltaV}m/s²`} color="text-[#ffb786]" />
            <MetricBox label="Fields" value="∇×B = μ₀J" color="text-[#adc6ff]" />
          </div>

          {/* Visualization Viewport */}
          <div className="flex-1 relative overflow-hidden group">
            <div className="absolute inset-0 scanline opacity-20 pointer-events-none" />
            
            {/* Vector Mesh Background */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover mix-blend-screen opacity-40 brightness-75 transition-transform duration-[20s] ease-linear group-hover:scale-110"
                alt="Vector Field Visualization"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-[#0b0f14]/40" />
            </div>

            {/* Floating Overlays */}
            <div className="absolute top-6 left-6 flex flex-col gap-4 z-10">
              <div className="bg-[#1a2330]/80 backdrop-blur-xl border border-[#202b3c] p-4 rounded-xl min-w-[200px] shadow-2xl">
                <div className="flex justify-between items-center border-b border-[#424754]/30 pb-2 mb-3">
                  <span className="text-[10px] font-bold text-[#adc6ff] uppercase tracking-widest">SPATIAL_COORDS</span>
                  <Maximize2 className="w-3.5 h-3.5 text-[#8c909f] cursor-pointer hover:text-[#e1e2ec]" />
                </div>
                <div className="font-mono text-[12px] text-[#4cd7f6] space-y-1">
                  <p>X: +042.8291</p>
                  <p>Y: -112.0042</p>
                  <p>Z: +001.9934</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 z-10">
              <div className="bg-[#1a2330]/80 backdrop-blur-xl border border-[#202b3c] p-3 rounded-xl flex items-center gap-4 shadow-2xl">
                <div className="w-10 h-10 rounded-lg bg-[#adc6ff]/10 border border-[#adc6ff]/30 flex items-center justify-center text-[#adc6ff]">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-[#8c909f] uppercase tracking-widest">AUTO_STABILIZE</span>
                  <span className="text-[11px] font-mono font-bold text-[#adc6ff]">ENABLED</span>
                </div>
              </div>
            </div>

            {/* Central Crosshair */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 border border-[#adc6ff]/20 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-[#adc6ff] rounded-full animate-pulse shadow-[0_0_10px_#adc6ff]" />
              </div>
            </div>
          </div>

          {/* AI Reasoning Stream */}
          <section className="h-56 bg-[#10131a] border-t border-[#202b3c] flex flex-col shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
            <header className="px-6 py-2 bg-[#1d2027] border-b border-[#202b3c] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_8px_#4cd7f6]" />
                <span className="text-[11px] font-bold text-[#4cd7f6] uppercase tracking-widest">AI_SPATIAL_REASONING_STREAM</span>
              </div>
              <span className="text-[10px] font-mono text-[#8c909f]">LATENCY: 12ms</span>
            </header>
            <div className="flex-1 overflow-y-auto p-6 font-mono text-[11px] space-y-3 custom-scrollbar bg-[#0b0e15]/40">
              <ReasoningLine time="14:22:01" message="DETECTED: Rotational instability in axial sub-frame J-14. Variance exceeds 0.04%." color="text-[#c2c6d6]" />
              <ReasoningLine time="14:22:03" message="SUGGESTION: Offset vector [4, 0, -2] by -0.012 radians on Y-axis to damp harmonic resonance." color="text-[#adc6ff]" bold />
              <ReasoningLine time="14:22:05" message="COMPUTING: Re-distributing force across secondary supports. Matrix re-alignment in progress..." color="text-[#8c909f] italic" />
              <div className="flex gap-4 text-[#4cd7f6] font-bold bg-[#4cd7f6]/5 px-4 py-2 rounded border border-[#4cd7f6]/10">
                <span className="shrink-0">[14:22:08]</span>
                <span>OPTIMIZATION_APPLIED: Instability reduced to 0.001%. System Nominal.</span>
              </div>
            </div>
          </section>
        </section>

        {/* Sidebar Right (BarChart3) */}
        <aside className="w-80 border-l border-[#202b3c] bg-[#10131a]/50 flex flex-col p-6 gap-8 hidden xl:flex">
          <section className="space-y-4">
            <h3 className="text-[10px] font-bold text-[#8c909f] uppercase tracking-[0.2em] mb-4">Field Density</h3>
            <DensityCard label="MAGNETIC" value={88} color="bg-[#4cd7f6]" />
            <DensityCard label="GRAVITATIONAL" value={42} color="bg-[#ffb786]" />
          </section>

          <section className="space-y-4">
            <h3 className="text-[10px] font-bold text-[#8c909f] uppercase tracking-[0.2em] mb-4">Terminal History</h3>
            <div className="space-y-2">
              <HistoryItem label="NORMALIZE_VECTOR_SPACE" id="#8821-X" active />
              <HistoryItem label="FLATTEN_TENSOR_FIELD" id="#8819-B" />
            </div>
          </section>

          <div className="mt-auto">
            <button 
              onClick={handleInitiateSolve}
              disabled={isSolving}
              className={`w-full py-4 rounded-xl font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-2xl ${
                isSolving 
                ? 'bg-[#424754] text-[#8c909f] cursor-not-allowed' 
                : 'bg-[#adc6ff] text-[#001a42] hover:bg-[#d8e2ff] shadow-[0_0_20px_rgba(173,198,255,0.4)]'
              }`}
            >
              <Zap className={`w-4 h-4 ${isSolving ? 'animate-pulse' : ''}`} />
              {isSolving ? 'SOLVING_MATRIX...' : 'Initiate Solve'}
            </button>
          </div>
        </aside>
      </main>

      {/* Navigation Footer (Global Controls) */}
      <footer className="h-16 bg-[#1d2027] border-t border-[#424754]/50 flex justify-center items-center gap-12 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <ControlButton icon={<Play className="w-5 h-5 fill-current" />} label="Start" onClick={() => handleControlAction('START')} />
        <ControlButton icon={<Pause className="w-5 h-5 fill-current" />} label="Pause" onClick={() => handleControlAction('PAUSE')} active />
        <ControlButton icon={<CircleStop className="w-5 h-5 fill-current" />} label="Abort" onClick={() => handleControlAction('ABORT')} />
        <ControlButton icon={<Home className="w-5 h-5" />} label="Reset" onClick={() => handleControlAction('RESET')} />
      </footer>

      <style jsx>{`
        .scanline {
          background: linear-gradient(to bottom, transparent 50%, rgba(173, 198, 255, 0.05) 50%);
          background-size: 100% 4px;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #32353c; border-radius: 10px; }
      `}</style>
    </div>
  );
};

const NavItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer group ${
    active ? 'bg-[#adc6ff]/10 text-[#adc6ff] border border-[#adc6ff]/20' : 'text-[#8c909f] hover:bg-white/5'
  }`}>
    <span className={`${active ? 'text-[#adc6ff]' : 'text-[#8c909f] group-hover:text-[#e1e2ec]'}`}>{icon}</span>
    <span className="text-[12px] font-bold uppercase tracking-widest">{label}</span>
  </div>
);

const MetricBox = ({ label, value, color }: any) => (
  <div className="p-4 flex flex-col gap-1">
    <span className="text-[9px] font-bold text-[#8c909f] uppercase tracking-widest">{label}</span>
    <span className={`text-[16px] font-mono font-bold ${color} tracking-tighter`}>{value}</span>
  </div>
);

const ReasoningLine = ({ time, message, color, bold, italic }: any) => (
  <div className={`flex gap-4 ${color} ${bold ? 'font-bold' : ''} ${italic ? 'italic' : ''} opacity-80 hover:opacity-100 transition-opacity`}>
    <span className="shrink-0 text-[#8c909f] font-normal">[{time}]</span>
    <span>{message}</span>
  </div>
);

const DensityCard = ({ label, value, color }: any) => (
  <div className="p-4 bg-[#1d2027]/50 rounded-xl border border-[#202b3c] space-y-3">
    <div className="flex justify-between items-center text-[10px] font-mono font-bold">
      <span className="text-[#8c909f]">{label}</span>
      <span className={color.replace('bg-', 'text-')}>{value}%</span>
    </div>
    <div className="w-full h-1 bg-[#32353c] rounded-full overflow-hidden">
      <div className={`h-full ${color} shadow-[0_0_8px_currentcolor] transition-all duration-1000`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

const HistoryItem = ({ label, id, active }: any) => (
  <div className={`px-4 py-3 border-l-2 transition-all cursor-pointer hover:bg-white/5 ${
    active ? 'border-[#adc6ff] bg-[#adc6ff]/5' : 'border-[#424754] text-[#8c909f]'
  }`}>
    <div className={`text-[11px] font-bold ${active ? 'text-[#e1e2ec]' : ''}`}>{label}</div>
    <div className="text-[9px] font-mono opacity-50">{id}</div>
  </div>
);

const ControlButton = ({ icon, label, onClick, active }: any) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center gap-1 group transition-all ${active ? 'text-[#4cd7f6] scale-110' : 'text-[#8c909f] hover:text-[#e1e2ec]'}`}
  >
    <div className={`p-2 rounded-lg transition-all ${active ? 'bg-[#4cd7f6]/10' : 'group-hover:bg-white/5'}`}>
      {icon}
    </div>
    <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{label}</span>
  </button>
);

export default VectorCommandCenterEngineeringOS_cd7d91;
