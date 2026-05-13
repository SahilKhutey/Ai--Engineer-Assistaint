'use client';

import React, { useState } from 'react';
import { 
  Wind, Activity, Zap, Info, AlertTriangle, ShieldCheck, 
  Settings, Binary, Target, Navigation, TrendingUp, Layers, 
  Flame, Droplets, Gauge, BarChart3, Radio
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const FluidIntelligencePanel = () => {
  const { fluidState, updateFluid, runCFD } = useEngineeringStore();
  const [activeTab, setActiveTab] = useState<'PHYSICS' | 'TURBULENCE' | 'ADVANCED'>('PHYSICS');

  const { physics, solver, turbulence, combustion } = fluidState;

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. FLUID TABS */}
      <div className="flex bg-[#0B0F14] border-b border-[#adc6ff]/10">
        {[
          { id: 'PHYSICS', label: 'Flow Physics', icon: Wind },
          { id: 'TURBULENCE', label: 'Turbulence', icon: Activity },
          { id: 'ADVANCED', label: 'Propulsion', icon: Flame }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`
              flex-1 py-3 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-widest transition-all
              ${activeTab === tab.id ? 'text-[#adc6ff] bg-[#adc6ff]/5 border-b-2 border-[#adc6ff]' : 'text-[#adc6ff]/30 hover:text-[#adc6ff]/60'}
            `}
          >
            <tab.icon className="w-3 h-3" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
        
        {/* TAB 1: CORE FLOW PHYSICS */}
        {activeTab === 'PHYSICS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Navier-Stokes Solver Telemetry</h3>
                <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-[#adc6ff] uppercase flex items-center gap-2">
                        <Activity className="w-4 h-4" /> Solution Convergence
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase ${solver.status === 'SOLVING' ? 'bg-blue-400 text-[#0B0F14] animate-pulse' : 'bg-emerald-400/20 text-emerald-400'}`}>
                         {solver.status}
                      </span>
                   </div>
                   
                   {/* Residual Graph Placeholder */}
                   <div className="h-24 bg-[#0B0F14] border border-[#adc6ff]/5 rounded-xl relative overflow-hidden flex items-end p-2 gap-1">
                      {solver.residuals.map((r, i) => (
                        <div key={i} className="flex-1 bg-blue-500/20 rounded-t-sm" style={{ height: `${Math.log10(1/r) * 10}%` }} />
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center">
                         <p className="text-[8px] text-[#adc6ff]/10 uppercase tracking-widest font-mono">Residual Stream: L2_NORM</p>
                      </div>
                   </div>
                </div>
             </section>

             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Aerodynamic States</h3>
                <div className="grid grid-cols-2 gap-3">
                   <div className="p-3 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-xl space-y-1">
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Mach Number (M)</p>
                      <p className="text-sm font-mono font-bold text-[#f0f4ff]">{physics.machNumber.toFixed(2)}</p>
                   </div>
                   <div className="p-3 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-xl space-y-1">
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Reynolds (Re)</p>
                      <p className="text-sm font-mono font-bold text-[#f0f4ff]">{physics.reynoldsNumber.toExponential(1)}</p>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 2: TURBULENCE & CHAOTIC FLOW */}
        {activeTab === 'TURBULENCE' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Eddy Viscosity Modeling</h3>
                <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl space-y-4">
                   <div className="flex justify-between text-[10px] text-indigo-400 font-bold uppercase">
                      <span>Model: {turbulence.model}</span>
                      <span>Intensity: {(turbulence.intensity * 100).toFixed(1)}%</span>
                   </div>
                   <div className="h-32 bg-[#080B10] border border-indigo-500/10 rounded-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent animate-pulse" />
                      <div className="h-full w-full flex items-center justify-center">
                         <TrendingUp className="w-12 h-12 text-indigo-400/20 rotate-45" />
                      </div>
                      <p className="absolute bottom-2 left-2 text-[8px] text-indigo-400/40 font-mono uppercase">Vortex Core Identification Active</p>
                   </div>
                </div>
             </section>

             <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-blue-400 shrink-0" />
                <p className="text-[10px] text-blue-100/60 font-mono italic">
                   AI detected boundary layer separation risk near trailing edge. Recommendation: Increase mesh density in wall region.
                </p>
             </div>
          </div>
        )}

        {/* TAB 3: PROPULSION & COMBUSTION */}
        {activeTab === 'ADVANCED' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-amber-400/40 uppercase tracking-[0.2em]">Reacting Flow Dynamics</h3>
                <div className="p-4 bg-amber-400/5 border border-amber-400/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <Flame className="w-4 h-4 text-amber-400" />
                         <span className="text-[10px] font-bold text-amber-100 uppercase">Flame Stability</span>
                      </div>
                      <span className="text-[12px] font-mono font-bold text-amber-400">{(combustion.stability * 100).toFixed(1)}%</span>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-amber-400/10 rounded-xl">
                         <p className="text-[8px] text-amber-400/40 uppercase">Adiabatic Temp</p>
                         <p className="text-xs font-mono font-bold text-amber-100">{combustion.flameTemp_K} K</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-amber-400/10 rounded-xl">
                         <p className="text-[8px] text-amber-400/40 uppercase">Reaction Rate</p>
                         <p className="text-xs font-mono font-bold text-amber-100">{combustion.reactionRate}</p>
                      </div>
                   </div>
                </div>
             </section>

             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Rocket Exhaust Simulation</h3>
                <button className="w-full py-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[9px] text-amber-100 font-bold uppercase tracking-widest hover:bg-amber-500/20 transition-all flex items-center justify-center gap-2">
                   <Gauge className="w-3 h-3" /> Compute Exhaust Plume
                </button>
             </section>
          </div>
        )}

      </div>

      {/* 3. CFD SOLVER FOOTER */}
      <div className="p-4 bg-[#adc6ff]/5 border-t border-[#adc6ff]/10 space-y-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2 text-[9px] text-blue-400 font-bold uppercase tracking-widest">
              <Zap className="w-3 h-3" /> Fluid Intelligence Hub
           </div>
           <span className="text-[9px] text-[#adc6ff]/40 font-mono">GPU_SOLVER_ACTIVE</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => runCFD()}
            className="flex-1 bg-[#adc6ff] text-[#0B0F14] py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(173,198,255,0.2)]"
          >
            Run CFD Solver
          </button>
          <button className="px-4 py-2 border border-[#adc6ff]/20 rounded-xl text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FluidIntelligencePanel;
