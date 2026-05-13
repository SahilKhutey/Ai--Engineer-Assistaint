'use client';

import React, { useState } from 'react';
import { 
  Globe, Box, Wind, Zap, Cpu, Settings, Database, 
  Activity, Layers, ShieldCheck, Thermometer, FlaskConical,
  Atom, Rocket, ChevronRight, Search, TrendingUp, Info
} from 'lucide-react';
import { useEngineeringStore, EngineeringDomain } from '@/store/useEngineeringStore';
import MaterialIntelligencePanel from './MaterialIntelligencePanel';
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
import SpatialIntelligencePanel from './SpatialIntelligencePanel';

const WorkbenchToolbox = () => {
  const { activeDomain, setDomain, intent, updateVariable } = useEngineeringStore();
  const [searchQuery, setSearchQuery] = useState('');

  const domains: { id: EngineeringDomain; icon: any; label: string; color: string }[] = [
    { id: 'AEROSPACE', icon: Wind, label: 'Aerospace', color: 'text-blue-400' },
    { id: 'STRUCTURAL', icon: Box, label: 'Structural', color: 'text-orange-400' },
    { id: 'CFD', icon: Wind, label: 'Fluid Dynamics', color: 'text-cyan-400' },
    { id: 'THERMAL', icon: Thermometer, label: 'Thermal', color: 'text-red-400' },
    { id: 'ELECTRICAL', icon: Zap, label: 'Electrical', color: 'text-yellow-400' },
    { id: 'CONTROLS', icon: Activity, label: 'Controls', color: 'text-green-400' },
    { id: 'ROBOTICS', icon: Cpu, label: 'Robotics', color: 'text-purple-400' },
    { id: 'MATERIALS', icon: Layers, label: 'Materials', color: 'text-stone-400' },
    { id: 'QUANTUM', icon: Atom, label: 'Quantum', color: 'text-indigo-400' },
    { id: 'PROPULSION', icon: Rocket, label: 'Propulsion', color: 'text-amber-400' },
    { id: 'SPACE_SYSTEMS', icon: Globe, label: 'Space Systems', color: 'text-blue-500' },
    { id: 'OPTIMIZATION', icon: TrendingUp, label: 'Optimization', color: 'text-emerald-400' },
    { id: 'MANUFACTURING', icon: Settings, label: 'Manufacturing', color: 'text-slate-400' },
    { id: 'SYMBOLIC', icon: ShieldCheck, label: 'Symbolic Engineering', color: 'text-white' },
  ];

  const filteredDomains = domains.filter(d => d.label.toUpperCase().includes(searchQuery.toUpperCase()));

  return (
    <div className="w-80 border-r border-[#adc6ff]/10 bg-[#0B0F14] flex flex-col h-full overflow-hidden shadow-2xl z-40">
      
      {/* 1. DOMAIN SEARCH & SELECTOR */}
      <div className="p-4 border-b border-[#adc6ff]/10 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-[#adc6ff]/60 uppercase tracking-widest flex items-center gap-2">
            <Globe className="w-3 h-3" /> Engineering Domain
          </h2>
          <span className="text-[9px] text-[#adc6ff]/20 font-mono">15 KERNELS</span>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[#adc6ff]/20" />
          <input 
            type="text" 
            placeholder="SEARCH DISCIPLINE..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#adc6ff]/5 border border-[#adc6ff]/10 rounded-xl pl-9 pr-4 py-2 text-[10px] text-[#f0f4ff] font-mono focus:border-[#adc6ff]/30 outline-none transition-all placeholder:text-[#adc6ff]/10"
          />
        </div>

        <div className="grid grid-cols-7 gap-1.5 max-h-24 overflow-y-auto custom-scrollbar pr-1">
          {filteredDomains.map((d) => {
            const Icon = d.icon;
            const isActive = activeDomain === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setDomain(d.id)}
                title={d.label}
                className={`
                  aspect-square rounded-lg flex items-center justify-center transition-all
                  ${isActive ? 'bg-[#adc6ff] text-[#0B0F14] shadow-[0_0_15px_rgba(173,198,255,0.3)]' : 'bg-[#adc6ff]/5 text-[#adc6ff]/30 hover:bg-[#adc6ff]/10 hover:text-[#adc6ff]'}
                `}
              >
                <Icon className="w-4 h-4" />
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. SPECIALIZED INPUT SCREENS */}
      <div className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
        
        {/* AEROSPACE / PROPULSION PANEL */}
        {(activeDomain === 'AEROSPACE' || activeDomain === 'PROPULSION') && (
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
            <section className="space-y-3">
              <h3 className="text-[10px] font-bold text-blue-400/40 uppercase tracking-[0.2em] flex items-center gap-2">
                <Rocket className="w-3 h-3" /> Rocket Equation
              </h3>
              <div className="p-3 bg-blue-400/5 rounded-xl border border-blue-400/10 text-center">
                <p className="text-[12px] text-blue-100 font-serif italic">Δv = vₑ ln(m₀ / m_f)</p>
              </div>
            </section>
            
            <section className="space-y-3">
              <h3 className="text-[10px] font-bold text-blue-400/40 uppercase tracking-[0.2em]">Mission Parameters</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-[#adc6ff]/5 rounded-lg border border-[#adc6ff]/10">
                  <span className="text-[9px] text-[#adc6ff]/40 uppercase">Exit Velocity</span>
                  <span className="text-[10px] text-[#f0f4ff] font-mono">4,500 m/s</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-[#adc6ff]/5 rounded-lg border border-[#adc6ff]/10">
                  <span className="text-[9px] text-[#adc6ff]/40 uppercase">Initial Mass</span>
                  <span className="text-[10px] text-[#f0f4ff] font-mono">250,000 kg</span>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* STRUCTURAL PANEL */}
        {activeDomain === 'STRUCTURAL' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
            <section className="space-y-3">
              <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Material Tensor</h3>
              <div className="grid grid-cols-3 gap-1 p-2 bg-[#080B10] border border-[#adc6ff]/10 rounded-xl">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="aspect-square bg-[#adc6ff]/5 border border-[#adc6ff]/5 rounded flex items-center justify-center text-[8px] text-[#adc6ff]/40">
                    {i === 0 || i === 4 || i === 8 ? '210' : '0'}
                  </div>
                ))}
              </div>
            </section>
            
            <section className="space-y-3">
              <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Loads & Vectors</h3>
              <div className="p-3 bg-[#adc6ff]/5 rounded-xl border border-[#adc6ff]/10 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-red-400 font-mono w-4">Fx</span>
                  <input type="number" defaultValue={1200} className="flex-1 bg-[#080B10] border border-[#adc6ff]/10 rounded px-2 py-1 text-[10px] text-[#f0f4ff] font-mono" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-green-400 font-mono w-4">Fy</span>
                  <input type="number" defaultValue={-450} className="flex-1 bg-[#080B10] border border-[#adc6ff]/10 rounded px-2 py-1 text-[10px] text-[#f0f4ff] font-mono" />
                </div>
              </div>
            </section>
          </div>
        )}

        {/* THERMAL PANEL */}
        {activeDomain === 'THERMAL' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
            <section className="space-y-3">
              <h3 className="text-[10px] font-bold text-red-400/40 uppercase tracking-[0.2em]">Fourier Law</h3>
              <div className="p-3 bg-red-400/5 rounded-xl border border-red-400/10 text-center">
                <p className="text-[12px] text-red-100 font-serif italic">q = -k∇T</p>
              </div>
            </section>
            <section className="space-y-3">
              <h3 className="text-[10px] font-bold text-red-400/40 uppercase tracking-[0.2em]">Heat Sources</h3>
              <div className="space-y-2">
                {['Volumetric Heat (W/m³)', 'Surface Flux (W/m²)', 'Radiation (ε)'].map((t) => (
                  <div key={t} className="p-2 bg-[#0B0F14] border border-red-400/10 rounded-lg flex justify-between items-center">
                    <span className="text-[9px] text-red-100/60 uppercase">{t}</span>
                    <Settings className="w-3 h-3 text-red-400/20" />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ELECTRICAL PANEL */}
        {activeDomain === 'ELECTRICAL' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
            <section className="space-y-3">
              <h3 className="text-[10px] font-bold text-yellow-400/40 uppercase tracking-[0.2em]">Maxwell Equations</h3>
              <div className="p-3 bg-yellow-400/5 rounded-xl border border-yellow-400/10 text-center">
                <p className="text-[12px] text-yellow-100 font-serif italic">∇·E = ρ/ε₀</p>
              </div>
            </section>
            <section className="space-y-3">
              <h3 className="text-[10px] font-bold text-yellow-400/40 uppercase tracking-[0.2em]">Circuit Inputs</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-[#0B0F14] border border-yellow-400/10 rounded-lg">
                  <p className="text-[8px] text-yellow-400/40 uppercase">Voltage (V)</p>
                  <p className="text-[11px] text-yellow-100 font-mono mt-1">12.0</p>
                </div>
                <div className="p-2 bg-[#0B0F14] border border-yellow-400/10 rounded-lg">
                  <p className="text-[8px] text-yellow-400/40 uppercase">Current (I)</p>
                  <p className="text-[11px] text-yellow-100 font-mono mt-1">2.00</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* CONTROLS PANEL */}
        {activeDomain === 'CONTROLS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
            <section className="space-y-3">
              <h3 className="text-[10px] font-bold text-green-400/40 uppercase tracking-[0.2em]">Transfer Function</h3>
              <div className="p-4 bg-green-400/5 rounded-xl border border-green-400/20 text-center">
                <p className="text-[12px] text-green-100 font-mono">G(s) = K / (τs + 1)</p>
              </div>
            </section>
            <section className="space-y-3">
              <h3 className="text-[10px] font-bold text-green-400/40 uppercase tracking-[0.2em]">PID Tuning</h3>
              <div className="space-y-2">
                {['Proportional (Kp)', 'Integral (Ki)', 'Derivative (Kd)'].map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <span className="text-[9px] text-green-400/60 font-mono w-16 uppercase">{p.split(' ')[0]}</span>
                    <input type="number" defaultValue={1.0} className="flex-1 bg-[#080B10] border border-green-400/10 rounded px-2 py-1 text-[10px] text-[#f0f4ff] font-mono" />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ROBOTICS PANEL */}
        {activeDomain === 'ROBOTICS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
            <section className="space-y-3">
              <h3 className="text-[10px] font-bold text-purple-400/40 uppercase tracking-[0.2em]">Joint Dynamics</h3>
              <div className="space-y-2">
                <div className="p-3 bg-purple-400/5 border border-purple-400/10 rounded-xl">
                  <p className="text-[9px] text-purple-400/60 uppercase mb-2">Inertia Tensor [I]</p>
                  <div className="grid grid-cols-3 gap-1">
                    {[1,0,0,0,1,0,0,0,1].map((n, i) => (
                      <div key={i} className="bg-[#080B10] border border-purple-400/10 rounded p-1 text-[8px] text-center">{n}</div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* NUCLEAR ENGINEERING PANEL */}
        {activeDomain === 'NUCLEAR' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
             <div className="p-1 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-xl flex">
                <button 
                  onClick={() => updateNuclear({ type: 'FISSION' })}
                  className={`flex-1 py-2 text-[9px] font-bold uppercase tracking-widest rounded-lg transition-all ${nuclearEngine.type === 'FISSION' ? 'bg-amber-400 text-[#0B0F14]' : 'text-amber-400/40'}`}
                >
                  Fission Core
                </button>
                <button 
                  onClick={() => updateNuclear({ type: 'FUSION' })}
                  className={`flex-1 py-2 text-[9px] font-bold uppercase tracking-widest rounded-lg transition-all ${nuclearEngine.type === 'FUSION' ? 'bg-indigo-400 text-[#0B0F14]' : 'text-indigo-400/40'}`}
                >
                  Fusion Reactor
                </button>
             </div>

             {nuclearEngine.type === 'FISSION' ? (
                <section className="space-y-4 animate-in fade-in duration-300">
                   <div className="p-4 bg-amber-400/5 border border-amber-400/20 rounded-2xl space-y-4">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Criticality ($k_{eff}$)</span>
                         <span className="text-[14px] font-mono font-bold text-amber-100">{nuclearEngine.fission.criticality_keff}</span>
                      </div>
                      <div className="h-1 bg-amber-400/10 rounded-full overflow-hidden">
                         <div className="h-full bg-amber-400" style={{ width: `${(nuclearEngine.fission.criticality_keff - 0.9) * 500}%` }} />
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-amber-400/10 rounded-xl">
                         <p className="text-[8px] text-amber-400/40 uppercase font-bold">Neutron Flux</p>
                         <p className="text-xs font-mono font-bold text-amber-100">{nuclearEngine.fission.neutronFlux.toExponential(1)}</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-amber-400/10 rounded-xl">
                         <p className="text-[8px] text-amber-400/40 uppercase font-bold">Coolant Temp</p>
                         <p className="text-xs font-mono font-bold text-amber-100">{nuclearEngine.fission.coolantTemp_K} K</p>
                      </div>
                   </div>
                </section>
             ) : (
                <section className="space-y-4 animate-in fade-in duration-300">
                   <div className="p-4 bg-indigo-400/5 border border-indigo-400/20 rounded-2xl space-y-4 text-center">
                      <p className="text-[9px] text-indigo-400/40 uppercase tracking-widest mb-1">Plasma Temperature</p>
                      <p className="text-2xl font-mono font-bold text-indigo-100">{nuclearEngine.fusion.plasmaTemp_keV} keV</p>
                      <div className="flex items-center justify-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                         <span className="text-[8px] text-indigo-400 uppercase font-bold italic tracking-tighter">Magnetic Confinement Stable</span>
                      </div>
                   </div>
                   <div className="p-3 bg-[#0B0F14] border border-indigo-400/10 rounded-xl space-y-2">
                      <div className="flex justify-between text-[9px] font-mono">
                         <span className="text-indigo-400/40 uppercase">Magnetic Field (B)</span>
                         <span className="text-indigo-100">{nuclearEngine.fusion.magneticField_T} Tesla</span>
                      </div>
                      <div className="h-1 bg-indigo-400/10 rounded-full overflow-hidden">
                         <div className="h-full bg-indigo-400" style={{ width: `${(nuclearEngine.fusion.magneticField_T / 20) * 100}%` }} />
                      </div>
                   </div>
                </section>
             )}
          </div>
        )}

        {/* QUANTUM INTELLIGENCE PANEL */}
        {activeDomain === 'QUANTUM' && (
          <QuantumIntelligencePanel />
        )}

        {/* SPATIAL INTELLIGENCE PANEL */}
        {['MATHEMATICS', 'NAVIGATION', 'GEOMETRY'].includes(activeDomain) && (
          <SpatialIntelligencePanel />
        )}

        {/* THERMAL INTELLIGENCE PANEL */}
        {['THERMAL', 'PROPULSION', 'COMBUSTION', 'CRYOGENICS', 'ENERGY_SYSTEMS'].includes(activeDomain) && (
          <ThermalIntelligencePanel />
        )}

        {/* OPTICS INTELLIGENCE PANEL */}
        {['OPTICS', 'IMAGING', 'ASTRONOMY'].includes(activeDomain) && (
          <OpticsIntelligencePanel />
        )}

        {/* PHOTONIC INTELLIGENCE PANEL */}
        {['PHOTONICS', 'OPTICAL_SENSING', 'LASER_SYSTEMS'].includes(activeDomain) && (
          <PhotonicIntelligencePanel />
        )}

        {/* NUCLEAR INTELLIGENCE PANEL */}
        {['NUCLEAR', 'ENERGY_SYSTEMS'].includes(activeDomain) && (
          <NuclearIntelligencePanel />
        )}

        {/* ELECTROMAGNETIC INTELLIGENCE PANEL */}
        {['ELECTRICAL', 'RF_SYSTEMS', 'PLASMA', 'POWER_SYSTEMS'].includes(activeDomain) && (
          <ElectromagneticIntelligencePanel />
        )}

        {/* GRAVITY INTELLIGENCE PANEL */}
        {['ASTROPHYSICS', 'ORBITAL'].includes(activeDomain) && (
          <GravityIntelligencePanel />
        )}

        {/* AEROSPACE INTELLIGENCE PANEL */}
        {['AEROSPACE', 'PROPULSION', 'SPACE_SYSTEMS'].includes(activeDomain) && (
          <AerospaceIntelligencePanel />
        )}

        {/* FLUID INTELLIGENCE PANEL */}
        {['CFD', 'THERMAL'].includes(activeDomain) && (
          <FluidIntelligencePanel />
        )}

        {/* MOTION INTELLIGENCE PANEL */}
        {['ROBOTICS', 'DYNAMICS'].includes(activeDomain) && (
          <MotionIntelligencePanel />
        )}

        {/* NUCLEAR ENGINEERING PANEL */}
        {activeDomain === 'NUCLEAR' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
             <div className="p-1 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-xl flex">
                <button 
                  onClick={() => updateNuclear({ type: 'FISSION' })}
                  className={`flex-1 py-2 text-[9px] font-bold uppercase tracking-widest rounded-lg transition-all ${nuclearEngine.type === 'FISSION' ? 'bg-amber-400 text-[#0B0F14]' : 'text-amber-400/40'}`}
                >
                  Fission Core
                </button>
                <button 
                  onClick={() => updateNuclear({ type: 'FUSION' })}
                  className={`flex-1 py-2 text-[9px] font-bold uppercase tracking-widest rounded-lg transition-all ${nuclearEngine.type === 'FUSION' ? 'bg-indigo-400 text-[#0B0F14]' : 'text-indigo-400/40'}`}
                >
                  Fusion Reactor
                </button>
             </div>

             {nuclearEngine.type === 'FISSION' ? (
                <section className="space-y-4 animate-in fade-in duration-300">
                   <div className="p-4 bg-amber-400/5 border border-amber-400/20 rounded-2xl space-y-4">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Criticality ($k_{eff}$)</span>
                         <span className="text-[14px] font-mono font-bold text-amber-100">{nuclearEngine.fission.criticality_keff}</span>
                      </div>
                      <div className="h-1 bg-amber-400/10 rounded-full overflow-hidden">
                         <div className="h-full bg-amber-400" style={{ width: `${(nuclearEngine.fission.criticality_keff - 0.9) * 500}%` }} />
                      </div>
                   </div>
                </section>
             ) : (
                <section className="space-y-4 animate-in fade-in duration-300">
                   <div className="p-4 bg-indigo-400/5 border border-indigo-400/20 rounded-2xl space-y-4 text-center">
                      <p className="text-[9px] text-indigo-400/40 uppercase tracking-widest mb-1">Plasma Temperature</p>
                      <p className="text-2xl font-mono font-bold text-indigo-100">{nuclearEngine.fusion.plasmaTemp_keV} keV</p>
                   </div>
                </section>
             )}
          </div>
        )}

        {/* SPACE SYSTEMS PANEL */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
            <section className="space-y-3">
              <h3 className="text-[10px] font-bold text-blue-400/40 uppercase tracking-[0.2em] flex items-center gap-2">
                <Globe className="w-3 h-3" /> Orbital Elements
              </h3>
              <div className="p-3 bg-blue-400/5 rounded-xl border border-blue-400/10 space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] text-blue-400/60 uppercase font-mono">
                    <span>Apogee / Perigee</span>
                    <span>400 km</span>
                  </div>
                  <div className="h-1 bg-blue-400/10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-blue-400" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-blue-400/40 uppercase">Inclination</span>
                  <span className="text-[10px] text-blue-100 font-mono">51.6°</span>
                </div>
              </div>
            </section>
            
            <section className="space-y-3">
              <h3 className="text-[10px] font-bold text-blue-400/40 uppercase tracking-[0.2em] flex items-center gap-2">
                <Rocket className="w-3 h-3" /> Mission Delta-V
              </h3>
              <div className="p-4 bg-blue-400/5 border border-blue-400/20 rounded-2xl text-center space-y-2">
                <p className="text-[14px] text-blue-100 font-bold font-mono">3,100 m/s</p>
                <p className="text-[9px] text-blue-400/40 uppercase tracking-widest font-mono italic">Tsiolkovsky Verified</p>
              </div>
            </section>
          </div>
        )}

        {/* MATERIALS SCIENCE PANEL (with Risk Indicator) */}
        {activeDomain === 'MATERIALS' && (
          <div className="space-y-6">
            <MaterialIntelligencePanel />
            {/* Real-time Coupling Indicator */}
            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl space-y-2 animate-pulse">
               <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-red-400 uppercase tracking-widest">Coupled Risk: Delamination</span>
                  <span className="text-[10px] font-mono text-red-400">{(materialIntelligence.delaminationRisk * 100).toFixed(1)}%</span>
               </div>
               <div className="h-1 bg-red-400/20 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500" style={{ width: `${materialIntelligence.delaminationRisk * 100}%` }} />
               </div>
            </div>
          </div>
        )}

        {/* Default / Loading */}
        {!['AEROSPACE', 'PROPULSION', 'STRUCTURAL', 'THERMAL', 'ELECTRICAL', 'CONTROLS', 'ROBOTICS', 'CFD', 'QUANTUM'].includes(activeDomain) && (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 opacity-40">
            <div className="w-12 h-12 rounded-full border-2 border-t-[#adc6ff] border-[#adc6ff]/10 animate-spin" />
            <p className="text-xs text-[#adc6ff] uppercase tracking-widest font-bold">Initializing {activeDomain} Kernel...</p>
            <p className="text-[9px] text-[#adc6ff]/40 uppercase tracking-tighter">Symbolic Workspace Loading</p>
          </div>
        )}

      </div>

      {/* 3. STATUS FOOTER */}
      <div className="p-4 bg-[#adc6ff]/5 border-t border-[#adc6ff]/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          <span className="text-[10px] text-green-500/60 font-mono uppercase tracking-widest">Mathematical Truth Verified</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-[#adc6ff]/20 font-mono">
          <ShieldCheck className="w-3 h-3" />
          <span>REALTIME</span>
        </div>
      </div>
    </div>
  );
};

export default WorkbenchToolbox;
