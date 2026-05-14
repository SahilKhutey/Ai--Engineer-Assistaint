'use client';

import React, { useState } from 'react';
import {
  Globe, Box, Wind, Zap, Cpu, Settings, Database,
  Activity, Layers, ShieldCheck, Thermometer, FlaskConical,
  Atom, Rocket, ChevronRight, Search, TrendingUp, Info,
  Radio, Brain, Eye, Monitor, Cpu as KernelIcon, Circle, Construction, Microscope, Waves, Workflow,
  Shield, Compass, Target, Sparkles, Scale, Magnet, Binary, Fingerprint, Lock, Box as BoxIcon,
  Terminal, Grid, Maximize, Power, Hammer, Boxes, Scaling, Anchor, PenTool
} from 'lucide-react';
import { useEngineeringStore, EngineeringDomain } from '@/store/useEngineeringStore';

// Intelligence Panel Imports (v3.2 Hardened)
import MaterialIntelligencePanel from './MaterialIntelligencePanel';
import SpatialIntelligencePanel from './SpatialIntelligencePanel';
import MolecularIntelligencePanel from './MolecularIntelligencePanel';
import AcousticIntelligencePanel from './AcousticIntelligencePanel';
import WorkflowIntelligencePanel from './WorkflowIntelligencePanel';
import RoboticsIntelligencePanel from './RoboticsIntelligencePanel';
import SecurityIntelligencePanel from './SecurityIntelligencePanel';
import CommsIntelligencePanel from './CommsIntelligencePanel';
import QuantumIntelligencePanel from './QuantumIntelligencePanel';
import MotionIntelligencePanel from './MotionIntelligencePanel';
import FluidIntelligencePanel from './FluidIntelligencePanel';
import AerospaceIntelligencePanel from './AerospaceIntelligencePanel';
import GravityIntelligencePanel from './GravityIntelligencePanel';
import ElectromagneticIntelligencePanel from './ElectromagneticIntelligencePanel';
import NuclearIntelligencePanel from './NuclearIntelligencePanel';
import PhotonicIntelligencePanel from './PhotonicIntelligencePanel';
import OpticsIntelligencePanel from './OpticsIntelligencePanel';
import ThermalIntelligencePanel from './ThermalIntelligencePanel';
import MaterializationIntelligencePanel from './MaterializationIntelligencePanel';
import StructuralIntelligencePanel from './StructuralIntelligencePanel';

/**
 * WorkbenchToolbox v3.2 (Phase 55 Advanced - Sovereign Orchestration Hub)
 * 
 * Central command and control interface for all 27 engineering intelligence kernels.
 * Features reality-linked telemetry, sovereign state management, and high-density 
 * glassmorphism UI for mission-control grade observability.
 */
const WorkbenchToolbox = () => {
  const {
    activeDomain, setDomain, osStatus, addNotification
  } = useEngineeringStore();
  const [searchQuery, setSearchQuery] = useState('');

  const domains: { id: EngineeringDomain; icon: any; label: string; color: string }[] = [
    { id: 'AEROSPACE', icon: Wind, label: 'Aerospace', color: 'text-blue-400' },
    { id: 'FLUID', icon: Waves, label: 'Fluid Dynamics', color: 'text-cyan-400' },
    { id: 'STRUCTURAL', icon: Box, label: 'Structural', color: 'text-orange-400' },
    { id: 'THERMAL', icon: Thermometer, label: 'Thermal', color: 'text-red-400' },
    { id: 'ELECTROMAGNETIC', icon: Zap, label: 'Electromagnetic', color: 'text-yellow-400' },
    { id: 'COMMS', icon: Radio, label: 'Communications', color: 'text-blue-500' },
    { id: 'ROBOTICS', icon: Cpu, label: 'Robotics', color: 'text-purple-400' },
    { id: 'MATERIAL', icon: Layers, label: 'Material Science', color: 'text-stone-400' },
    { id: 'QUANTUM', icon: Atom, label: 'Quantum Computing', color: 'text-indigo-400' },
    { id: 'NUCLEAR', icon: Sparkles, label: 'Nuclear Engineering', color: 'text-rose-400' },
    { id: 'GRAVITY', icon: Globe, label: 'Gravity & Relativity', color: 'text-emerald-400' },
    { id: 'MOLECULAR', icon: Microscope, label: 'Molecular Dynamics', color: 'text-emerald-500' },
    { id: 'OPTICS', icon: Eye, label: 'Optical Engineering', color: 'text-cyan-300' },
    { id: 'PHOTONIC', icon: Zap, label: 'Photonic Systems', color: 'text-pink-400' },
    { id: 'MOTION', icon: Activity, label: 'Motion & Dynamics', color: 'text-blue-300' },
    { id: 'SPATIAL', icon: Compass, label: 'Spatial Intelligence', color: 'text-indigo-300' },
    { id: 'SECURITY', icon: Shield, label: 'Security & Encryption', color: 'text-rose-500' },
    { id: 'MATERIALIZATION', icon: Construction, label: 'Materialization', color: 'text-emerald-400' },
    { id: 'WORKFLOW', icon: Workflow, label: 'Workflow Cognition', color: 'text-pink-400' },
  ];

  const filteredDomains = domains.filter(d => d.label.toUpperCase().includes(searchQuery.toUpperCase()));

  return (
    <div className="w-80 border-r border-[#adc6ff]/10 bg-[#0B0F14]/90 flex flex-col h-full overflow-hidden shadow-2xl z-40 backdrop-blur-[50px] relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* 0. OS STATUS & KERNEL MONITOR (v3.2 Hardened) */}
      <div className="p-6 border-b border-[#adc6ff]/10 space-y-5 bg-[#adc6ff]/5 relative z-10 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-[11px] font-black text-[#adc6ff] uppercase tracking-[0.3em] flex items-center gap-3">
            <KernelIcon className="w-4 h-4 animate-pulse text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.6)]" /> Engineering OS
          </h2>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${osStatus.physicsSync ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]' : 'bg-red-400'} animate-pulse`} />
            <span className="text-[10px] text-blue-400/60 font-mono font-black tracking-tighter">v3.2_HARDENED</span>
          </div>
        </div>

        {/* Telemetry Sparklines (v3.2) */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between text-[9px] uppercase font-black text-[#adc6ff]/40 tracking-widest">
              <span>Kernel Load</span>
              <span className="text-blue-400 font-mono">{(osStatus.kernelLoad * 100).toFixed(0)}%</span>
            </div>
            <div className="h-1.5 bg-[#adc6ff]/5 rounded-full overflow-hidden border border-white/5 shadow-inner p-[1px]">
              <div className="h-full bg-blue-400 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(96,165,250,0.8)]" style={{ width: `${osStatus.kernelLoad * 100}%` }} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[9px] uppercase font-black text-[#adc6ff]/40 tracking-widest">
              <span>AI Confidence</span>
              <span className="text-emerald-400 font-mono">{(osStatus.aiConfidence * 100).toFixed(0)}%</span>
            </div>
            <div className="h-1.5 bg-[#adc6ff]/5 rounded-full overflow-hidden border border-white/5 shadow-inner p-[1px]">
              <div className="h-full bg-emerald-400 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(52,211,153,0.8)]" style={{ width: `${osStatus.aiConfidence * 100}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* 1. DOMAIN ORCHESTRATOR */}
      <div className="p-6 border-b border-[#adc6ff]/10 space-y-5 relative z-10 bg-black/20">
        <div className="flex items-center justify-between">
          <h2 className="text-[11px] font-black text-[#adc6ff]/60 uppercase tracking-[0.2em] flex items-center gap-3">
            <Globe className="w-4 h-4 text-blue-400" /> Intelligence Domains
          </h2>
          <span className="text-[9px] text-blue-400/40 font-mono font-black uppercase tracking-widest">{domains.length} KERNELS</span>
        </div>

        <div className="relative group">
          <Search className="absolute left-4 top-3 w-4 h-4 text-[#adc6ff]/20 group-focus-within:text-blue-400 transition-colors" />
          <input
            type="text"
            placeholder="SEARCH DISCIPLINE..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#adc6ff]/5 border border-[#adc6ff]/10 rounded-2xl pl-11 pr-5 py-3 text-[11px] text-[#f0f4ff] font-mono font-bold focus:border-blue-400/40 focus:bg-[#adc6ff]/10 outline-none transition-all placeholder:text-[#adc6ff]/10 shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-5 gap-3 max-h-48 overflow-y-auto custom-scrollbar pr-1 relative group py-1">
          {filteredDomains.map((d) => {
            const Icon = d.icon;
            const isActive = activeDomain === d.id;
            return (
              <button
                key={d.id}
                onClick={() => {
                  setDomain(d.id);
                  addNotification({
                    title: `${d.label} KERNEL_SYNC_v3.2`,
                    message: `Activating Sovereign ${d.label} Intelligence layer. Synchronizing Phase 55 physics state vectors.`,
                    type: 'INFO',
                    domain: d.id
                  });
                }}
                title={d.label}
                className={`
                  relative aspect-square rounded-[18px] flex items-center justify-center transition-all duration-500 overflow-hidden border shadow-xl
                  ${isActive
                    ? 'bg-blue-500/30 border-blue-400/50 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-110 z-20'
                    : 'bg-white/5 border-white/5 text-[#adc6ff]/30 hover:bg-white/10 hover:text-white hover:scale-105 hover:border-white/10'}
                `}
              >
                <Icon className={`w-5 h-5 relative z-10 transition-transform duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. ACTIVE INTELLIGENCE PANEL (v3.2 Master Frame) */}
      <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10 shadow-inner">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Dynamic Panel Mounting (Phase 55 Hardened) */}
        <div className="h-full flex flex-col bg-black/10">
          {activeDomain === 'AEROSPACE' && <AerospaceIntelligencePanel />}
          {activeDomain === 'FLUID' && <FluidIntelligencePanel />}
          {activeDomain === 'STRUCTURAL' && <StructuralIntelligencePanel />}
          {activeDomain === 'THERMAL' && <ThermalIntelligencePanel />}
          {activeDomain === 'ELECTROMAGNETIC' && <ElectromagneticIntelligencePanel />}
          {activeDomain === 'COMMS' && <CommsIntelligencePanel />}
          {activeDomain === 'ROBOTICS' && <RoboticsIntelligencePanel />}
          {activeDomain === 'MATERIAL' && <MaterialIntelligencePanel />}
          {activeDomain === 'QUANTUM' && <QuantumIntelligencePanel />}
          {activeDomain === 'NUCLEAR' && <NuclearIntelligencePanel />}
          {activeDomain === 'GRAVITY' && <GravityIntelligencePanel />}
          {activeDomain === 'MOLECULAR' && <MolecularIntelligencePanel />}
          {activeDomain === 'OPTICS' && <OpticsIntelligencePanel />}
          {activeDomain === 'PHOTONIC' && <PhotonicIntelligencePanel />}
          {activeDomain === 'MOTION' && <MotionIntelligencePanel />}
          {activeDomain === 'SPATIAL' && <SpatialIntelligencePanel />}
          {activeDomain === 'SECURITY' && <SecurityIntelligencePanel />}
          {activeDomain === 'MATERIALIZATION' && <MaterializationIntelligencePanel />}
          {activeDomain === 'WORKFLOW' && <WorkflowIntelligencePanel />}

          {/* Initializer Placeholder (v3.2 Aesthetic) */}
          {!domains.some(d => d.id === activeDomain) && (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 space-y-8 opacity-40">
              <div className="relative">
                 <div className="w-16 h-16 rounded-full border-4 border-t-blue-400 border-blue-400/10 animate-spin" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-blue-400 animate-pulse" />
                 </div>
              </div>
              <div className="space-y-3">
                <p className="text-[12px] text-blue-400 uppercase tracking-[0.5em] font-black">Initializing Kernel</p>
                <p className="text-[10px] text-blue-400/20 uppercase tracking-[0.3em] font-mono font-bold italic">Loading {activeDomain} state vectors v3.2</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. SYNC FOOTER (v3.2 Hardened) */}
      <div className="p-6 bg-[#080B10] border-t border-[#adc6ff]/10 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.5)] relative z-20">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        
        <div className="flex items-center gap-4">
          <div className="relative">
             <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(52,211,153,0.8)] animate-pulse" />
             <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-30" />
          </div>
          <span className="text-[11px] text-emerald-500 font-black uppercase tracking-[0.3em] italic">Reality Linked</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-blue-400/40 font-mono font-black tracking-widest bg-white/5 px-3 py-1.5 rounded-xl border border-white/5 shadow-inner">
          <ShieldCheck className="w-4 h-4" />
          <span>SOVEREIGN_v3.2</span>
        </div>
      </div>
    </div>
  );
};

export default WorkbenchToolbox;
