'use client';

import React, { useState } from 'react';
import { 
  Cpu, Zap, Activity, Info, AlertTriangle, ShieldCheck, 
  Binary, Atom, Lock, Radio, Target, Navigation,
  TrendingUp, BarChart3, Fingerprint, Layers, Flame, Search
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

type QuantumTab = 'CIRCUIT' | 'MOLECULAR' | 'SECURITY' | 'AI' | 'SENSORS' | 'SIMULATION';

const QuantumIntelligencePanel = () => {
  const { quantumState, updateMolecular } = useEngineeringStore();
  const [activeTab, setActiveTab] = useState<QuantumTab>('CIRCUIT');

  const { qubits, circuit, molecular, security, qml, sensors } = quantumState;

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. SCROLLABLE TABS */}
      <div className="flex bg-[#0B0F14] border-b border-[#adc6ff]/10 overflow-x-auto custom-scrollbar">
        {[
          { id: 'CIRCUIT', label: 'Circuit', icon: Binary },
          { id: 'MOLECULAR', label: 'Chemistry', icon: Atom },
          { id: 'SECURITY', label: 'Security', icon: Lock },
          { id: 'AI', label: 'Q-AI', icon: Cpu },
          { id: 'SENSORS', label: 'Sensing', icon: Target },
          { id: 'SIMULATION', label: 'Solver', icon: Zap }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`
              flex-none px-6 py-3 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-widest transition-all
              ${activeTab === tab.id ? 'text-[#adc6ff] bg-[#adc6ff]/5 border-b-2 border-[#adc6ff]' : 'text-[#adc6ff]/30 hover:text-[#adc6ff]/60'}
            `}
          >
            <tab.icon className="w-3 h-3" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
        
        {/* TAB 2: ADVANCED QUANTUM MOLECULAR CHEMISTRY */}
        {activeTab === 'MOLECULAR' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-indigo-400/40 uppercase tracking-[0.2em]">Molecular Energy State (VQE)</h3>
                <div className="p-4 bg-indigo-400/5 border border-indigo-400/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-end">
                      <div className="space-y-1">
                         <p className="text-[8px] text-indigo-400/60 uppercase font-bold tracking-widest">Ground State Energy</p>
                         <p className="text-xl font-mono font-bold text-indigo-100">{molecular.dftEnergy_hartree} Hartree</p>
                      </div>
                      <div className="text-right">
                         <p className="text-[8px] text-indigo-400/60 uppercase font-bold tracking-widest">VQE Convergence</p>
                         <p className="text-[12px] font-mono text-indigo-100">{(molecular.vqeConvergence * 100).toFixed(1)}%</p>
                      </div>
                   </div>
                   <div className="h-1 bg-indigo-400/10 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-400 animate-pulse" style={{ width: `${molecular.vqeConvergence * 100}%` }} />
                   </div>
                </div>
             </section>

             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Orbital Density Mapping</h3>
                <div className="h-40 bg-[#080B10] border border-indigo-400/20 rounded-2xl relative flex items-center justify-center">
                   <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent" />
                   <div className="z-10 text-center space-y-2">
                      <Atom className="w-12 h-12 text-indigo-400 mx-auto animate-spin-slow" />
                      <p className="text-[10px] text-indigo-100 font-mono uppercase tracking-widest">{molecular.predictedLattice} Lattice Optimized</p>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 6: QUANTUM CALCULATION & SIMULATION SYSTEM */}
        {activeTab === 'SIMULATION' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-emerald-400/40 uppercase tracking-[0.2em]">Scientific Solver Telemetry</h3>
                <div className="p-4 bg-emerald-400/5 border border-emerald-400/20 rounded-2xl space-y-4">
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest flex items-center gap-2">
                         <Activity className="w-4 h-4" /> Monte Carlo Engine
                      </span>
                      <span className="text-[9px] text-emerald-400/40 font-mono">1.2e6 Samples/s</span>
                   </div>
                   <div className="h-20 bg-[#080B10] rounded-xl relative overflow-hidden flex items-end p-2 gap-1">
                      {[40, 70, 45, 90, 65, 80, 50, 95].map((h, idx) => (
                        <div key={idx} className="flex-1 bg-emerald-400/20 rounded-t-sm transition-all hover:bg-emerald-400/40" style={{ height: `${h}%` }} />
                      ))}
                   </div>
                </div>
             </section>

             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Active Physics Kernels</h3>
                <div className="space-y-2">
                   {[
                      { label: 'Schrödinger Solver', val: 'Active', color: 'text-indigo-400' },
                      { label: 'Lawson Criterion Audit', val: 'Verified', color: 'text-emerald-400' },
                      { label: 'Neutron Flux Integration', val: 'Converged', color: 'text-amber-400' }
                   ].map((k) => (
                      <div key={k.label} className="p-3 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-xl flex items-center justify-between">
                         <span className="text-[10px] text-[#adc6ff]/60 uppercase font-mono">{k.label}</span>
                         <span className={`text-[9px] font-bold uppercase ${k.color}`}>{k.val}</span>
                      </div>
                   ))}
                </div>
             </section>
          </div>
        )}

        {/* Existing Tabs Fallback */}
        {!['MOLECULAR', 'SIMULATION'].includes(activeTab) && (
          <div className="h-full flex items-center justify-center opacity-40">
             <p className="text-[10px] text-[#adc6ff] uppercase tracking-widest">Active {activeTab} Module Viewing...</p>
          </div>
        )}

      </div>

      {/* 3. HARDWARE TELEMETRY FOOTER */}
      <div className="p-4 bg-[#adc6ff]/5 border-t border-[#adc6ff]/10 space-y-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2 text-[9px] text-blue-400 font-bold uppercase tracking-widest">
              <Zap className="w-3 h-3" /> Quantum HPC Runtime
           </div>
           <span className="text-[9px] text-[#adc6ff]/40 font-mono">IBMQ_NUCLEAR_V1</span>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-[#adc6ff] text-[#0B0F14] py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(173,198,255,0.2)]">
            Run Multi-Physics Job
          </button>
          <button className="px-4 py-2 border border-[#adc6ff]/20 rounded-xl text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantumIntelligencePanel;
