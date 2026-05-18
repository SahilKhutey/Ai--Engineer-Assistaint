'use client';

import React, { useState, useEffect } from 'react';
import {
  Zap,
  Share2,
  Activity,
  Clock,
  Terminal,
  Settings,
  Maximize2,
  Search,
  AlertTriangle,
  RefreshCcw,
  Binary,
  Cpu,
  Shield,
  GitBranch
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * QuantumStatesWorkspace v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity quantum state visualization and entanglement telemetry.
 * Tailored for sub-picowatt residual observability and sovereign cognition.
 */
const QuantumStatesEngineeringOS_e7d436 = () => {
  const { quantumState } = useEngineeringStore();
  const { 
    fidelity = 0.99982, 
    coherenceTime = 142.4, 
    theta = 0.824, 
    phi = 1.259,
    activeQubits = 124,
    entanglementState = 'BELL_PAIR_STABLE'
  } = quantumState || {};

  return (
    <div className="flex-1 flex flex-col lg:flex-row bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. LEFT PANEL: SYSTEM NAVIGATION (v3.2 Hardened) */}
      <aside className="w-full lg:w-72 bg-black/40 border-r border-white/5 flex flex-col backdrop-blur-3xl animate-in slide-in-from-left-10 duration-700">
        <div className="p-6 border-b border-white/5 bg-white/[0.02]">
           <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">QUANTUM_NAV</span>
        </div>
        <nav className="flex-1 py-4 space-y-1">
           <NavItem icon={Activity} label="Telemetry" active />
           <NavItem icon={Share2} label="Qubit_Map" />
           <NavItem icon={GitBranch} label="Circuit_Editor" />
           <NavItem icon={Clock} label="Stability_Log" />
           <NavItem icon={Activity} label="System_Health" />
        </nav>
        <div className="p-6 border-t border-white/5 bg-black/40">
           <div className="flex items-center gap-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl group hover:border-blue-500/40 transition-all">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              <span className="text-[11px] font-mono font-black text-blue-400 uppercase tracking-widest">CORE: STABLE</span>
           </div>
        </div>
      </aside>

      {/* 2. MAIN WORKSPACE: BLOCH SPHERE & MATRICES */}
      <main className="flex-1 overflow-y-auto custom-scrollbar relative p-8 space-y-8 animate-in fade-in duration-1000">
         {/* Background Accents */}
         <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #adc6ff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
         
         <div className="grid grid-cols-12 gap-8">
            {/* Hero Section: Bloch Sphere */}
            <section className="col-span-12 xl:col-span-8 bg-[#0B0F14]/60 border border-white/5 rounded-[40px] overflow-hidden flex flex-col h-[550px] relative shadow-2xl group hover:border-blue-500/20 transition-all duration-1000">
               <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                  <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">RENDER_VIEW: BLOCH_SPHERE_0x82</span>
                  <div className="flex gap-4">
                     <button className="text-white/20 hover:text-blue-400 transition-colors"><Search className="w-4 h-4" /></button>
                     <button className="text-white/20 hover:text-blue-400 transition-colors"><Maximize2 className="w-4 h-4" /></button>
                  </div>
               </div>
               
               <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                  <img 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-[10000ms]" 
                    src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCntdMy_BVOcJ957lesrFDftsrNSI3ijN6Z5GHSXnsJPCwWhZ5Xx_jiwRLlKH2c4BLZCmOIkhYWdVjqUmNVi4Xfewinq8vmq-M25vl-SRb5LZdHOAU0J17-MF3dyz6czmI19EyR6xMA4rXsXFygy5jiOMVz4XNAdUtUWX0wO7wsgNbWkvl5YeBQaa3d5LvObW88ijeBjcF5GPCVPilAxxvCgbwxIerrzKi5Xm9VA89Idq6qMvtYHndA6yRzvYraO1naBBs2no2APZNg" 
                    alt="Quantum Visualization"
                  />
                  
                  {/* Bloch Sphere SVG UI */}
                  <div className="relative w-80 h-80 rounded-full border border-blue-500/10 flex items-center justify-center shadow-[inset_0_0_100px_rgba(59,130,246,0.05)] animate-in zoom-in duration-1000">
                     <div className="absolute inset-0 rounded-full border border-blue-500/20 rotate-[30deg] scale-95" />
                     <div className="absolute inset-0 rounded-full border border-blue-400/20 -rotate-[45deg] scale-90" />
                     <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.9)] z-10" />
                     
                     {/* Vector Line */}
                     <div 
                        className="absolute w-[2px] h-40 bg-gradient-to-t from-blue-500 to-transparent origin-bottom bottom-1/2 shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-1000"
                        style={{ transform: `rotate(${theta * 40}deg) scaleY(${1 + Math.sin(phi)*0.1})` }}
                     >
                        <div className="w-3 h-3 bg-white rounded-full -top-1.5 -left-1.5 shadow-[0_0_15px_white]" />
                     </div>
                     
                     <span className="absolute top-[-30px] font-mono text-[14px] text-blue-400 font-black">|0⟩</span>
                     <span className="absolute bottom-[-30px] font-mono text-[14px] text-blue-400 font-black">|1⟩</span>
                  </div>

                  {/* Math Overlay */}
                  <div className="absolute bottom-10 left-10 p-8 glass-panel border-white/10 rounded-[32px] shadow-2xl backdrop-blur-[60px] animate-in slide-in-from-bottom-10 duration-1000">
                     <p className="font-mono text-[18px] text-blue-400 font-black mb-4 tracking-tighter">|ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩</p>
                     <div className="flex gap-10">
                        <DataValue label="θ (THETA)" value={`${theta.toFixed(3)} RAD`} />
                        <DataValue label="φ (PHI)" value={`${phi.toFixed(3)} RAD`} />
                     </div>
                  </div>
               </div>
            </section>

            {/* Entanglement Matrix Panel */}
            <section className="col-span-12 xl:col-span-4 bg-[#0B0F14]/60 border border-white/5 rounded-[40px] overflow-hidden flex flex-col h-[550px] shadow-2xl hover:border-blue-500/20 transition-all duration-1000">
               <div className="p-6 border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">COUPLING_MATRIX: QBIT_ENTANGLEMENT</span>
               </div>
               <div className="flex-1 p-8 flex flex-col gap-8">
                  <div className="flex-1 bg-black/40 border border-white/5 rounded-[32px] relative overflow-hidden p-8 flex items-center justify-center">
                     <svg className="w-full h-full max-w-[240px]" viewBox="0 0 200 200">
                        <circle cx="40" cy="40" fill="#60A5FA" r="5" className="animate-pulse" />
                        <circle cx="160" cy="40" fill="#60A5FA" r="5" className="animate-pulse" />
                        <circle cx="100" cy="100" fill="#3B82F6" r="8" />
                        <circle cx="40" cy="160" fill="#60A5FA" r="5" />
                        <circle cx="160" cy="160" fill="#60A5FA" r="5" />
                        
                        <line x1="40" y1="40" x2="100" y2="100" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="160" y1="40" x2="100" y2="100" stroke="#3B82F6" strokeWidth="2" />
                        <line x1="40" y1="160" x2="100" y2="100" stroke="#3B82F6" strokeWidth="1" />
                        <line x1="160" y1="160" x2="100" y2="100" stroke="#3B82F6" strokeWidth="3" />
                     </svg>
                  </div>
                  <div className="space-y-4">
                     <TelemetryRow label="FIDELITY" value={fidelity.toFixed(6)} color="text-blue-400" />
                     <TelemetryRow label="COHERENCE_TIME" value={`${coherenceTime.toFixed(2)} μs`} color="text-emerald-400" />
                     <TelemetryRow label="ACTIVE_QUBITS" value={activeQubits.toLocaleString()} />
                     <TelemetryRow label="ENTANGLEMENT" value={entanglementState} color="text-indigo-400" />
                  </div>
                  <button className="w-full py-4 bg-blue-500 text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                     CALIBRATE_MESH
                  </button>
               </div>
            </section>

            {/* Probability Waveforms Section */}
            <section className="col-span-12 bg-[#0B0F14]/60 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl p-8">
               <div className="flex flex-col md:flex-row gap-12">
                  <div className="flex-1 grid grid-cols-2 gap-8">
                     <WaveformCard label="Ψ_ALPHA" probability={0.64} color="blue" />
                     <WaveformCard label="Ψ_BETA" probability={0.31} color="rose" />
                  </div>
                  
                  <div className="w-full md:w-[400px] flex flex-col justify-between border-l border-white/5 pl-12">
                     <div className="space-y-6">
                        <h3 className="text-[20px] font-black text-white uppercase tracking-tighter">Wavefunction Collapse</h3>
                        <p className="text-[14px] text-[#adc6ff]/50 leading-relaxed">Simulate observation event and record probabilistic outcome. System decoherence minimized via sovereign superconducting shielding.</p>
                        <div className="p-5 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center gap-4">
                           <AlertTriangle className="w-5 h-5 text-rose-500" />
                           <span className="text-[11px] font-mono font-black text-rose-500 uppercase tracking-widest">CAUTION: STATE LOSS</span>
                        </div>
                     </div>
                     <div className="flex gap-4 mt-8">
                        <button className="flex-1 py-4 border border-white/5 hover:bg-white/5 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all">RESET_SIM</button>
                        <button className="flex-1 py-4 bg-blue-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] shadow-xl hover:scale-[1.02] transition-all">OBSERVE_STATE</button>
                     </div>
                  </div>
               </div>
            </section>
         </div>

         {/* Bottom Status Row */}
         <footer className="h-14 border-t border-white/5 flex items-center gap-12 px-6 overflow-hidden bg-black/20 rounded-full">
            <StatusItem label="SYS_CLOCK" value="14:22:09:441" />
            <StatusItem label="QUEUE" value="RUNNING [ID: QX-9902]" color="text-blue-400" />
            <StatusItem label="TEMP" value="15.42 mK" color="text-emerald-400" />
            <div className="ml-auto text-[10px] font-mono font-black text-white/20 tracking-widest">v2.0.4-STABLE_SOVEREIGN</div>
         </footer>
      </main>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, active = false }: any) => (
  <div className={`px-8 py-3 flex items-center gap-4 cursor-pointer transition-all border-l-[3px] ${active ? 'bg-blue-500/10 border-blue-500 text-blue-400' : 'border-transparent text-white/20 hover:text-white hover:bg-white/[0.02]'}`}>
    <Icon className="w-5 h-5" />
    <span className="text-[12px] font-black uppercase tracking-widest">{label}</span>
  </div>
);

const DataValue = ({ label, value }: any) => (
  <div className="space-y-1">
    <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">{label}</span>
    <p className="text-[15px] font-mono font-black text-blue-400 tracking-tight">{value}</p>
  </div>
);

const TelemetryRow = ({ label, value, color = 'text-white/40' }: any) => (
  <div className="flex justify-between items-center py-3 border-b border-white/5">
    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{label}</span>
    <span className={`text-[13px] font-mono font-black ${color}`}>{value}</span>
  </div>
);

const WaveformCard = ({ label, probability, color }: any) => (
  <div className="space-y-4 group">
    <div className="aspect-square bg-black/40 border border-white/5 rounded-3xl p-6 relative overflow-hidden group-hover:border-blue-500/20 transition-all">
       <div className="w-full h-full flex flex-wrap gap-1 opacity-40">
          {[...Array(16)].map((_, i) => (
             <div 
                key={i} 
                className={`w-[22%] h-[22%] rounded-sm ${color === 'blue' ? 'bg-blue-500' : 'bg-rose-500'} transition-all duration-1000`}
                style={{ opacity: Math.random() * probability }}
             />
          ))}
       </div>
       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
          <div className="flex justify-between items-end">
             <span className={`text-[12px] font-black tracking-widest ${color === 'blue' ? 'text-blue-400' : 'text-rose-400'}`}>{label}</span>
             <span className="text-[16px] font-mono font-black text-white/80">P: {probability}</span>
          </div>
       </div>
    </div>
  </div>
);

const StatusItem = ({ label, value, color = 'text-white/20' }: any) => (
  <div className="flex items-center gap-3">
    <span className="text-[10px] font-black text-white/10 uppercase tracking-widest">{label}:</span>
    <span className={`text-[11px] font-mono font-black uppercase ${color}`}>{value}</span>
  </div>
);

export default QuantumStatesEngineeringOS_e7d436;
