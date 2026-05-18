'use client';

import React, { useState } from 'react';
import {
  Terminal,
  Settings,
  Ruler,
  Wind,
  Thermometer,
  Zap,
  Sigma,
  ChevronUp,
  Camera,
  Grid,
  Maximize2,
  Lock,
  ToggleLeft,
  Brain,
  Play,
  Activity,
  List,
  AlertTriangle,
  ArrowRight,
  Sliders
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * ThermalMathInput v3.5 (Phase 55 Hardened)
 * 
 * High-fidelity workspace for thermal systems engineering and heat transfer analysis.
 * Integrates real-time thermal telemetry with governing equation solvers and AI reasoning.
 * Features a 3D thermal core visualization and anisotropic property tracking.
 */
const ThermalMathInputEngineeringOS_cc2cb6 = () => {
  const { 
    thermalState, 
    materialsState, 
    osStatus, 
    reasoningTrace, 
    pushEvent, 
    addNotification 
  } = useEngineeringStore();

  const [conductivity, setConductivity] = useState('385.0');
  const [specificHeat, setSpecificHeat] = useState('0.385');
  const [expansionCoeff, setExpansionCoeff] = useState('16.5e-6');

  const maxTemp = thermalState?.maxTemp_K || 1422.8;
  const gradientFlux = thermalState?.gradientFlux_X || 72;
  const stabilityMargin = thermalState?.stabilityMargin || 45;

  const handleExecuteSolver = () => {
    pushEvent?.('THERMAL_SOLVER_EXECUTED', { 
      params: { conductivity, specificHeat, expansionCoeff }, 
      timestamp: Date.now() 
    });
    addNotification?.({
      title: 'SOLVER_ACTIVE',
      message: 'Thermal Jacobian reified. Gradient flux stable across all sub-domains.',
      type: 'SUCCESS',
      domain: 'THERMAL'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-8 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
           <Terminal className="w-5 h-5 text-blue-400" />
           <h1 className="font-mono text-[14px] font-black text-blue-400 uppercase tracking-[0.3em]">NEURAL_OS_v1.0 // THERMAL_SYST</h1>
        </div>
        <div className="flex items-center gap-8">
           <nav className="hidden md:flex gap-8 items-center">
              <HeaderLink label="DIAGNOSTICS" />
              <HeaderLink label="SIM_RUNNER" active />
              <HeaderLink label="K_BASE" />
           </nav>
           <Settings className="w-5 h-5 text-white/20 hover:text-blue-400 cursor-pointer transition-colors" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAV */}
        <aside className="w-20 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col items-center py-6 gap-6 shrink-0">
           <SideNavAction icon={<Ruler />} label="STRUCT" />
           <SideNavAction icon={<Wind />} label="FLUID" />
           <SideNavAction icon={<Thermometer />} label="THERMAL" active />
           <SideNavAction icon={<Zap />} label="ELECTRO" />
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-px bg-white/5 custom-scrollbar relative">
           
           {/* Left Column: Equations & Constants */}
           <section className="md:col-span-4 bg-[#0B0F14] flex flex-col p-8 space-y-10">
              <div className="space-y-6">
                 <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">GOVERNING_EQUATIONS</span>
                    <ChevronUp className="w-4 h-4 text-white/20" />
                 </div>
                 <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl text-center shadow-inner group hover:border-blue-500/20 transition-all">
                    <p className="text-[24px] font-mono font-black text-blue-400 italic mb-2">q = -k∇T</p>
                    <p className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">FOURIER'S LAW OF HEAT CONDUCTION</p>
                 </div>
              </div>

              <div className="space-y-6">
                 <h3 className="text-[11px] font-black text-blue-400 uppercase tracking-widest border-b border-white/5 pb-4">MATERIAL_CONSTANTS</h3>
                 <div className="grid grid-cols-1 gap-6">
                    <ConstantInput label="Conductivity (k)" value={conductivity} unit="W/m·K" onChange={setConductivity} />
                    <ConstantInput label="Specific Heat (Cp)" value={specificHeat} unit="J/g·K" onChange={setSpecificHeat} />
                    <ConstantInput label="Expansion Coeff (α)" value={expansionCoeff} unit="m/m·K" onChange={setExpansionCoeff} />
                 </div>
              </div>

              <div className="space-y-6">
                 <h3 className="text-[11px] font-black text-blue-400 uppercase tracking-widest border-b border-white/5 pb-4">HEAT_SOURCES</h3>
                 <div className="space-y-2">
                    <HeatSourceItem label="VOLUMETRIC_GENERATION" value="2.5 MW/m³" active />
                    <HeatSourceItem label="SURFACE_FLUX_R1" value="150 W/m²" />
                    <HeatSourceItem label="RADIATION_EXTERNAL" value="ε = 0.85" />
                 </div>
                 <button className="w-full py-4 border border-dashed border-white/10 rounded-2xl text-[10px] font-black text-white/20 uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all">
                    + ADD_COMPONENT
                 </button>
              </div>
           </section>

           {/* Center Column: Visualization */}
           <section className="md:col-span-5 bg-black/20 flex flex-col relative overflow-hidden p-8">
              <div className="h-10 absolute top-0 left-0 w-full z-10 flex justify-between items-center px-8 bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">DOMAIN_TELEMETRY_REALTIME</span>
                 <div className="flex gap-6">
                    <Camera className="w-4 h-4 text-blue-400" />
                    <Grid className="w-4 h-4 text-white/20" />
                    <Maximize2 className="w-4 h-4 text-white/20" />
                 </div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center gap-12 relative">
                 <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />
                 
                 <div className="relative w-full aspect-square max-w-sm flex items-center justify-center group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-amber-500/10 rounded-full animate-pulse blur-3xl" />
                    <img 
                       className="w-full h-full object-contain rounded-full shadow-[0_0_80px_rgba(59,130,246,0.2)] transition-transform duration-[20000ms] group-hover:scale-105" 
                       src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuAo0BJDKJRLn9yWlpZZEpVJZDx5gkqSXzyMk8xchEvJRe-r8cOkbvnWe0X6OtZP1IVSUIK7fKGB7FREC9i1Qm029FDLXgqa1o_vwjHplYQnKuin7FvlJLywvIYJOsWAU_d2hyShbvqznQrmmENX0F2C5F7Ud2UTM5tN1Ng_hAJs8Zs-ntPYn-L9_HCCx8D5m0xNyT8nVE3hi-1Z2EwYFmV9QYXZG3pA3YJGePqraRZdN1qwtdKDHJj2xdf_xinpFC0lfnEwpnkGI3GU" 
                       alt="Thermal Core"
                    />
                    
                    <div className="absolute top-0 right-0 bg-black/80 border border-white/10 p-5 rounded-3xl backdrop-blur-xl shadow-2xl">
                       <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest font-mono mb-1">T_MAX</div>
                       <div className="text-[24px] font-mono font-black text-white tracking-tighter">{maxTemp.toLocaleString()} <span className="text-[14px] text-white/20 font-bold">K</span></div>
                    </div>
                 </div>

                 <div className="w-full grid grid-cols-2 gap-6 relative z-10">
                    <TelemetryPanel label="GRADIENT_FLUX_X" value={gradientFlux} color="blue" />
                    <TelemetryPanel label="STABILITY_MARGIN" value={stabilityMargin} color="amber" />
                 </div>
              </div>
           </section>

           {/* Right Column: Boundary & AI */}
           <section className="md:col-span-3 bg-[#0B0F14] flex flex-col p-8 space-y-10">
              <div className="space-y-6">
                 <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">BOUNDARY_CONDITIONS</span>
                    <Sliders className="w-4 h-4 text-white/20" />
                 </div>
                 <div className="space-y-3">
                    <BoundaryItem label="CONVECTION_L1" h="25.0" temp="293" active />
                    <BoundaryItem label="ADIABATIC_INSULATION" h="0.0" temp="---" disabled />
                 </div>
              </div>

              <div className="flex-1 space-y-6">
                 <h3 className="text-[11px] font-black text-amber-400 uppercase tracking-widest border-b border-white/5 pb-4 flex items-center gap-3">
                    <Brain className="w-4 h-4" /> AI_REASONING_ENGINE
                 </h3>
                 <div className="bg-amber-400/5 border border-amber-400/10 p-6 rounded-3xl space-y-6 backdrop-blur-md">
                    <div className="flex gap-4">
                       <AlertTriangle className="text-amber-400 w-6 h-6 shrink-0" />
                       <p className="text-[13px] leading-relaxed text-white font-mono italic">
                          Potential <span className="text-amber-400 font-black">Thermal Coupling Instabilities</span> detected in Sub-Globe R1. The chosen Specific Heat capacity (Cp) is insufficient for current source intensity.
                       </p>
                    </div>
                    <div className="space-y-3 pl-10 border-l border-amber-400/20">
                       <InstructionItem text="Reduce h-coeff by 12%" />
                       <InstructionItem text="Review k-Tensor anisotropy" />
                    </div>
                    <button className="w-full py-4 bg-amber-400 text-black font-black text-[11px] uppercase tracking-widest rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                       AUTO_FIX_PARAMETERS
                    </button>
                 </div>
              </div>

              <button 
                 onClick={handleExecuteSolver}
                 className="w-full py-6 bg-blue-500 text-white font-black text-[14px] uppercase tracking-[0.4em] rounded-3xl flex items-center justify-center gap-4 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl shadow-blue-500/20"
              >
                 <Play className="w-4 h-4" /> EXECUTE_SOLVER
              </button>
           </section>

        </main>
      </div>

      {/* 4. BOTTOM NAV */}
      <nav className="h-16 px-10 border-t border-white/5 bg-black/60 backdrop-blur-3xl flex justify-around items-center shrink-0 z-50">
         <NavAction icon={<Terminal />} label="Terminal" />
         <NavAction icon={<Sigma />} label="WORKSPACE" />
         <NavAction icon={<Brain />} label="REASONING" active />
         <NavAction icon={<Activity />} label="TELEMETRY" />
         <NavAction icon={<List />} label="LOGS" />
      </nav>

      {/* Floating System Log */}
      <div className="fixed bottom-24 right-8 w-72 bg-black/80 border border-white/10 p-6 rounded-3xl backdrop-blur-xl shadow-2xl z-40">
         <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
            <span className="text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">SYSTEM_LOG</span>
            <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa] animate-pulse" />
         </div>
         <div className="space-y-2 font-mono text-[11px] text-white/40 font-bold">
            <p className="flex gap-3"><span className="text-white/20">&gt;</span> [09:44:21] Thermal flux stable.</p>
            <p className="flex gap-3"><span className="text-white/20">&gt;</span> [09:44:23] Jacobian matrix reified.</p>
            <p className="flex gap-3 text-amber-400"><span className="text-amber-400/20">&gt;</span> [09:44:25] AlertTriangle: Delta_T &gt; 400K</p>
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

const HeaderLink = ({ label, active }: any) => (
  <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer ${active ? 'text-blue-400' : 'text-white/20 hover:text-white'}`}>
     {label}
  </span>
);

const SideNavAction = ({ icon, label, active }: any) => (
  <div className={`flex flex-col items-center justify-center gap-1 group cursor-pointer transition-all ${active ? 'text-blue-400' : 'text-white/20 hover:text-white'}`}>
     <div className={`p-3 rounded-2xl transition-all ${active ? 'bg-blue-500/10 shadow-2xl border border-blue-500/20' : 'group-hover:bg-white/5'}`}>
        {React.cloneElement(icon, { className: 'w-6 h-6' })}
     </div>
     <span className="text-[8px] font-black uppercase tracking-widest font-mono">{label}</span>
  </div>
);

const ConstantInput = ({ label, value, unit, onChange }: any) => (
  <div className="space-y-2">
     <label className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">{label}</label>
     <div className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-3 rounded-2xl group focus-within:border-blue-500/40 transition-all">
        <input 
           className="bg-transparent border-none outline-none focus:ring-0 flex-1 font-mono font-black text-[14px] text-white"
           value={value}
           onChange={(e) => onChange(e.target.value)}
        />
        <span className="text-[10px] font-mono font-bold text-white/20">{unit}</span>
     </div>
  </div>
);

const HeatSourceItem = ({ label, value, active }: any) => (
  <div className={`flex justify-between items-center p-4 rounded-2xl border transition-all cursor-pointer ${active ? 'bg-amber-400/5 border-amber-400/20' : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'}`}>
     <div className="flex items-center gap-4">
        <div className={`w-2 h-2 rounded-full ${active ? 'bg-amber-400 shadow-[0_0_8px_#fbbf24]' : 'bg-white/10'}`} />
        <span className={`text-[10px] font-mono font-black uppercase tracking-widest ${active ? 'text-white' : 'text-white/20'}`}>{label}</span>
     </div>
     <span className={`text-[11px] font-mono font-black ${active ? 'text-amber-400' : 'text-white/20'}`}>{value}</span>
  </div>
);

const TelemetryPanel = ({ label, value, color }: any) => (
  <div className="bg-black/60 border border-white/5 p-5 rounded-[32px] flex flex-col gap-4 backdrop-blur-xl shadow-2xl">
     <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] font-mono">{label}</span>
     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full transition-all duration-1000 ${color === 'blue' ? 'bg-blue-400 shadow-[0_0_10px_#60a5fa]' : 'bg-amber-400 shadow-[0_0_10px_#fbbf24]'}`} style={{ width: `${value}%` }} />
     </div>
  </div>
);

const BoundaryItem = ({ label, h, temp, active, disabled }: any) => (
  <div className={`p-5 rounded-2xl border-l-4 transition-all ${disabled ? 'opacity-30 grayscale cursor-not-allowed border-white/10 bg-white/[0.01]' : active ? 'bg-blue-500/5 border-blue-400 cursor-pointer' : 'bg-white/[0.02] border-white/10 cursor-pointer hover:bg-white/[0.04]'}`}>
     <div className="flex justify-between items-center mb-3">
        <span className={`text-[10px] font-black uppercase tracking-widest ${disabled ? 'text-white/20' : 'text-white'}`}>{label}</span>
        {active ? <Lock className="w-3 h-3 text-blue-400" /> : <ToggleLeft className="w-3 h-3 text-white/20" />}
     </div>
     <div className="grid grid-cols-2 gap-4 font-mono text-[11px] font-bold text-white/40">
        <span>h = {h}</span>
        <span>T_inf = {temp}</span>
     </div>
  </div>
);

const InstructionItem = ({ text }: any) => (
  <div className="flex items-center gap-3 text-[11px] font-mono font-bold text-white/60">
     <ArrowRight className="w-3 h-3 text-amber-400" />
     <span>{text}</span>
  </div>
);

const NavAction = ({ icon, label, active }: any) => (
  <div className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${active ? 'text-blue-400 scale-110' : 'text-white/20 hover:text-white'}`}>
     {React.cloneElement(icon, { className: 'w-5 h-5' })}
     <span className="text-[9px] font-black uppercase tracking-widest font-mono">{label}</span>
  </div>
);

export default ThermalMathInputEngineeringOS_cc2cb6;
