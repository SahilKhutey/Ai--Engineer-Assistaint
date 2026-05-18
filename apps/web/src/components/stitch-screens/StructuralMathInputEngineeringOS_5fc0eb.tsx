'use client';

import React, { useState } from 'react';
import {
  Settings,
  Box,
  Play,
  Layers,
  Rotate3d,
  ZoomIn,
  Info,
  Wrench,
  Activity,
  ShieldAlert,
  Cpu,
  Terminal,
  PlusCircle,
  Database,
  ChevronRight,
  Maximize2,
  Share2,
  LayoutGrid,
  Zap,
  AlertTriangle
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * StructuralMathInputEngineeringOS_5fc0eb (Phase 58 Hardened)
 * 
 * Technical workbench for structural finite element analysis (FEA) input.
 * Features real-time material property modulation, load vector definition, and solver orchestration.
 * Integrated with structuralState and physicsState.
 */
const StructuralMathInputEngineeringOS_5fc0eb = () => {
  const { structuralState, physicsState, osStatus, pushEvent } = useEngineeringStore();
  const [isRunning, setIsRunning] = useState(false);

  // Mapped telemetry from store
  const gpuLoad = ((osStatus?.kernelLoad || 0.94) * 100).toFixed(0);
  const displacement = structuralState?.telemetry?.maxDisplacement || 1.24;
  const safetyFactor = structuralState?.telemetry?.safetyFactor || 0.88;
  const meshDensity = structuralState?.config?.meshDensity || 0.05;

  const handleRunSimulation = () => {
    setIsRunning(true);
    pushEvent?.('RUN_SOLVER', { 
      type: 'FEA_LINEAR_STATIC', 
      precision: 'DOUBLE_64',
      timestamp: Date.now() 
    });
    setTimeout(() => setIsRunning(false), 3000);
  };

  const handleUpdateProperty = (key: string, value: string) => {
    pushEvent?.('UPDATE_STRUCTURAL_PROP', { key, value, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f14] text-[#e1e2ec] font-sans overflow-hidden selection:bg-[#adc6ff]/30">
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-[#202b3c] bg-[#10131a]/70 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-3">
          <Layers className="w-5 h-5 text-[#adc6ff]" />
          <h1 className="text-[14px] font-bold text-[#adc6ff] tracking-[0.2em] uppercase leading-none">STRUCTURAL_OS // FEA_WORKBENCH</h1>
          <div className="flex items-center gap-4 ml-8 px-3 py-1 bg-[#4cd7f6]/10 border border-[#4cd7f6]/20 rounded-full">
            <span className="text-[9px] font-mono font-bold text-[#4cd7f6] uppercase tracking-widest">σ = Eε | F = [K]{'{u}'}</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-[10px] font-mono font-bold text-[#adc6ff] tracking-widest bg-[#1d2027] px-4 py-1 rounded border border-[#202b3c]">
            GPU: {gpuLoad}% | {isRunning ? 'SOLVING...' : 'SIM: IDLE'}
          </div>
        </div>
      </header>

      {/* 2. MAIN WORKSPACE */}
      <main className="flex-1 grid grid-cols-12 gap-gutter bg-[#202b3c] overflow-hidden">
        
        {/* Left Column: Properties & Controls */}
        <aside className="col-span-12 md:col-span-4 lg:col-span-3 bg-[#0b0e15] p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
          
          <Section label="MATERIAL_PROPERTIES">
            <div className="space-y-4">
              <InputGroup 
                label="YOUNG'S MODULUS (E)" 
                value="210" 
                unit="GPa" 
                color="text-[#4cd7f6]" 
                onChange={(v: any) => handleUpdateProperty('youngs_modulus', v)}
              />
              <InputGroup 
                label="POISSON RATIO (ν)" 
                value="0.30" 
                unit="RATIO" 
                color="text-[#4cd7f6]" 
                onChange={(v: any) => handleUpdateProperty('poisson_ratio', v)}
              />
              <InputGroup 
                label="YIELD STRENGTH (σy)" 
                value="250" 
                unit="MPa" 
                color="text-[#ffb786]" 
                onChange={(v: any) => handleUpdateProperty('yield_strength', v)}
              />
            </div>
          </Section>

          <Section label="LOAD_VECTORS" action={<PlusCircle className="w-4 h-4 text-[#adc6ff] cursor-pointer" />}>
            <div className="grid grid-cols-3 gap-2">
              <VectorInput label="FX" value="0.0" />
              <VectorInput label="FY" value="-50.0" active />
              <VectorInput label="FZ" value="10.0" />
            </div>
            <div className="flex items-center gap-2 mt-4 text-[9px] font-bold text-[#8c909f] uppercase tracking-widest">
              <span>UNITS: kN</span>
              <div className="h-px flex-1 bg-[#202b3c]" />
            </div>
          </Section>

          <Section label="BOUNDARY_CONDITIONS">
            <div className="space-y-2">
              <ConditionItem label="FIXED_SUPPORT_01" active />
              <ConditionItem label="PINNED_NODE_44" />
            </div>
          </Section>

        </aside>

        {/* Center: Visualizer */}
        <section className="col-span-12 md:col-span-8 lg:col-span-6 bg-[#0b0e15] relative flex flex-col">
          
          <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
            <IconButton icon={<ZoomIn className="w-4 h-4" />} />
            <IconButton icon={<Rotate3d className="w-4 h-4" />} />
            <IconButton icon={<Layers className="w-4 h-4" />} />
          </div>

          {/* Mesh Visualization */}
          <div className="flex-1 flex items-center justify-center p-12 group">
            <div className="relative w-full h-full border border-[#adc6ff]/10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover opacity-20 grayscale brightness-50 mix-blend-screen group-hover:scale-105 transition-transform duration-[10s]"
                alt="Mesh Visualization"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#adc6ff]/5 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#10131a]/80 backdrop-blur-xl border border-[#4cd7f6]/30 p-8 rounded-2xl flex flex-col items-center gap-3 shadow-[0_0_50px_rgba(76,215,246,0.1)]">
                  <Cpu className={`w-12 h-12 text-[#4cd7f6] ${isRunning ? 'animate-spin' : ''}`} />
                  <span className="text-[14px] font-mono font-bold text-[#4cd7f6] tracking-[0.2em] uppercase">
                    {isRunning ? 'SOLVER_PROCESSING...' : 'SOLVER_IDLE'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Reasoning Output */}
          <section className="h-40 bg-[#10131a] border-t border-[#202b3c] p-6 flex flex-col shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-[9px] font-bold text-[#8c909f] uppercase tracking-[0.2em] mb-4">REASONING_ENGINE_OUTPUT</h3>
            <div className="flex-1 overflow-y-auto custom-scrollbar font-mono text-[11px] space-y-2">
              <LogLine type="INFO" message="Mesh generation completed: 142,803 tetrahedral elements." />
              <LogLine type="WARN" message={`CRITICAL: Peak stress detected at node 4,821 (284.5 MPa). Exceeds yield (250.0 MPa).`} color="text-[#ffb4ab] bg-[#93000a]/20" />
              <LogLine type="RECO" message="Recommendation: Increase cross-sectional thickness at Support_A or substitute Material S355." color="text-[#adc6ff]" />
            </div>
          </section>

        </section>

        {/* Right Column: Configuration & Telemetry */}
        <aside className="col-span-12 lg:col-span-3 bg-[#0b0e15] p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
          
          <Section label="SOLVER_CONFIGURATION">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-[10px] font-bold text-[#8c909f] uppercase tracking-widest">MESH_DENSITY</label>
                  <span className="text-[10px] font-mono font-bold text-[#4cd7f6]">{meshDensity}mm</span>
                </div>
                <input type="range" className="w-full accent-[#4cd7f6] h-1 bg-[#202b3c] rounded-lg appearance-none cursor-pointer" />
              </div>
              <div>
                <label className="text-[10px] font-bold text-[#8c909f] uppercase tracking-widest mb-3 block">SOLVER_PRECISION</label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2 border border-[#202b3c] text-[#8c909f] text-[10px] font-bold rounded hover:border-[#adc6ff] transition-all">SINGLE_32</button>
                  <button className="py-2 bg-[#4cd7f6]/10 border border-[#4cd7f6] text-[#4cd7f6] text-[10px] font-bold rounded shadow-[0_0_10px_rgba(76,215,246,0.2)]">DOUBLE_64</button>
                </div>
              </div>
            </div>
          </Section>

          <Section label="REAL_TIME_TELEMETRY">
            <div className="space-y-4">
              <TelemetryRow label="MAX_DISPLACEMENT" value={`${displacement}mm`} color="text-[#4cd7f6]" />
              <TelemetryRow 
                label="FACTOR_OF_SAFETY" 
                value={safetyFactor.toFixed(2)} 
                color={safetyFactor < 1 ? 'text-[#ffb4ab]' : 'text-[#4cd7f6]'} 
                alert={safetyFactor < 1}
              />
              <TelemetryRow label="REACTION_FORCE_Z" value="41.2 kN" />
            </div>
          </Section>

          <div className="mt-auto pt-6">
            <button 
              onClick={handleRunSimulation}
              disabled={isRunning}
              className={`w-full py-4 rounded-xl font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-2xl ${
                isRunning 
                ? 'bg-[#424754] text-[#8c909f] cursor-not-allowed' 
                : 'bg-[#adc6ff] text-[#001a42] hover:bg-[#d8e2ff] shadow-[0_0_20px_rgba(173,198,255,0.4)]'
              }`}
            >
              <Zap className={`w-4 h-4 ${isRunning ? 'animate-pulse' : ''}`} />
              {isRunning ? 'RUNNING_SOLVER...' : 'Run Simulation'}
            </button>
          </div>

        </aside>

      </main>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #32353c; border-radius: 10px; }
      `}</style>
    </div>
  );
};

const Section = ({ label, children, action }: any) => (
  <div className="space-y-4">
    <header className="flex justify-between items-center border-b border-[#202b3c] pb-2">
      <h3 className="text-[10px] font-bold text-[#8c909f] uppercase tracking-[0.2em]">{label}</h3>
      {action}
    </header>
    {children}
  </div>
);

const InputGroup = ({ label, value, unit, color, onChange }: any) => (
  <div className="group">
    <label className="block text-[9px] font-bold text-[#8c909f] uppercase tracking-widest mb-1.5">{label}</label>
    <div className="flex border border-[#202b3c] rounded-lg overflow-hidden group-focus-within:border-[#adc6ff]/50 transition-colors">
      <input 
        type="text" 
        defaultValue={value} 
        onChange={(e) => onChange(e.target.value)}
        className={`flex-1 bg-[#1d2027]/50 px-3 py-2 font-mono text-[12px] font-bold outline-none ${color}`} 
      />
      <div className="bg-[#272a31] px-3 py-2 text-[10px] font-bold text-[#8c909f] border-l border-[#202b3c] flex items-center">
        {unit}
      </div>
    </div>
  </div>
);

const VectorInput = ({ label, value, active }: any) => (
  <div className={`p-2 rounded-lg border flex flex-col gap-1 transition-all ${active ? 'bg-[#adc6ff]/5 border-[#adc6ff]/30' : 'bg-[#1d2027]/30 border-[#202b3c]'}`}>
    <span className={`text-[8px] font-bold ${active ? 'text-[#adc6ff]' : 'text-[#8c909f]'}`}>{label}</span>
    <input type="text" defaultValue={value} className="bg-transparent font-mono text-[11px] font-bold text-[#e1e2ec] outline-none w-full" />
  </div>
);

const ConditionItem = ({ label, active }: any) => (
  <div className={`flex justify-between items-center p-3 rounded-xl border cursor-pointer transition-all ${active ? 'bg-[#adc6ff]/5 border-[#adc6ff]/30 text-[#adc6ff]' : 'bg-[#1d2027]/30 border-[#202b3c] text-[#8c909f] hover:bg-white/5'}`}>
    <span className="text-[11px] font-bold font-mono tracking-tighter">{label}</span>
    <LayoutGrid className="w-3.5 h-3.5" />
  </div>
);

const IconButton = ({ icon }: any) => (
  <button className="w-10 h-10 bg-[#1d2027]/80 backdrop-blur-md border border-[#202b3c] rounded-xl flex items-center justify-center text-[#8c909f] hover:text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all active:scale-90">
    {icon}
  </button>
);

const TelemetryRow = ({ label, value, color = 'text-[#e1e2ec]', alert }: any) => (
  <div className="flex justify-between items-center py-2 border-b border-[#202b3c]/50 group">
    <div className="flex items-center gap-2">
      {alert && <AlertTriangle className="w-3.5 h-3.5 text-[#ffb4ab] animate-pulse" />}
      <span className="text-[10px] font-bold text-[#8c909f] uppercase tracking-widest">{label}</span>
    </div>
    <span className={`font-mono font-bold text-[12px] ${color}`}>{value}</span>
  </div>
);

const LogLine = ({ type, message, color = 'text-[#8c909f]' }: any) => (
  <div className={`flex gap-3 px-3 py-1.5 rounded border border-transparent hover:border-[#202b3c] transition-all ${color}`}>
    <span className="shrink-0 font-bold">[{type}]</span>
    <span className="leading-relaxed">{message}</span>
  </div>
);

export default StructuralMathInputEngineeringOS_5fc0eb;
