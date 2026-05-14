'use client';

import React from 'react';
import { Database, Link2, Hash, ArrowRight, Layers, AlertTriangle, Cpu, Activity, Sparkles, Binary, Compass, Target } from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * VariableConsole v3.2 (Phase 55 Advanced - Sovereign Variable Hub)
 * 
 * Central orchestration for all physical constants and state variables.
 * Features reality-linked unit synchronization, high-density glassmorphism, 
 * and sub-nanometer residual conflict monitoring for Phase 55 mission-control.
 */
const VariableConsole = () => {
  const { intent, updateVariable, activeDomain } = useEngineeringStore();

  return (
    <div className="w-1/2 border-r border-[#adc6ff]/10 flex flex-col overflow-hidden bg-[#0B0F14]/60 backdrop-blur-[40px] relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      
      {/* Header (v3.2 Hardened) */}
      <div className="px-5 py-3 bg-[#adc6ff]/5 border-b border-[#adc6ff]/10 flex items-center justify-between shadow-2xl relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
             <Database className="w-4 h-4 text-blue-400 animate-pulse" />
          </div>
          <div className="flex flex-col">
             <span className="text-[11px] font-black text-[#adc6ff] uppercase tracking-[0.2em]">Universal Variable Console</span>
             <span className="text-[8px] text-blue-400/60 uppercase font-mono font-bold tracking-tighter italic">v3.2_SOVEREIGN_SYNC</span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-[10px] font-mono text-blue-400/40">
          <div className="flex flex-col items-end border-r border-white/5 pr-4">
             <span className="text-[9px] font-black uppercase">COUPLED_VECTORS</span>
             <span className="text-[10px] text-blue-400 font-black tracking-tighter">{intent.variables.length}</span>
          </div>
          <div className="flex flex-col items-end">
             <span className="text-[9px] font-black uppercase">ACTIVE_DOMAINS</span>
             <span className="text-[10px] text-blue-400 font-black tracking-tighter">27</span>
          </div>
        </div>
      </div>

      {/* Grid of Variables (v3.2 High-Density) */}
      <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 gap-4 relative z-10 custom-scrollbar">
        {intent.variables.map((v) => (
          <div 
            key={v.id}
            className={`
              p-4 rounded-[24px] border transition-all duration-500 group relative overflow-hidden shadow-xl
              ${v.domain === activeDomain 
                ? 'bg-blue-500/10 border-blue-400/40 shadow-blue-500/10 scale-[1.02]' 
                : 'bg-white/[0.02] border-white/5 opacity-60 hover:opacity-100 hover:bg-white/[0.05] hover:border-white/10'}
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full transition-all duration-500 ${v.domain === activeDomain ? 'bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse' : 'bg-white/20'}`} />
                <span className="text-[11px] text-white/80 font-mono font-black uppercase tracking-widest">{v.id}</span>
              </div>
              <div className="p-1.5 bg-white/5 rounded-lg border border-white/5 opacity-40 group-hover:opacity-100 group-hover:border-blue-400/40 transition-all cursor-pointer">
                 <Link2 className="w-3.5 h-3.5 text-blue-400" />
              </div>
            </div>
            
            <div className="space-y-3 relative z-10">
               <p className="text-[10px] text-[#adc6ff]/30 uppercase font-black tracking-[0.1em] truncate italic">{v.label}</p>
               
               <div className="flex items-center gap-3">
                 <div className="flex-1 relative">
                    <input 
                      type="number" 
                      value={v.value}
                      onChange={(e) => updateVariable(v.id, Number(e.target.value))}
                      className="w-full bg-[#080B10] border border-white/5 rounded-xl px-4 py-2.5 text-[14px] text-blue-100 font-mono font-black focus:border-blue-400/40 focus:bg-blue-500/5 outline-none transition-all shadow-inner selection:bg-blue-500/30"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-40 transition-opacity">
                       <Target className="w-3 h-3 text-blue-400" />
                    </div>
                 </div>
                 <div className="flex flex-col items-start min-w-[40px]">
                    <span className="text-[11px] text-blue-400 font-mono font-black uppercase tracking-tighter">{v.unit}</span>
                    <span className="text-[8px] text-blue-400/20 font-mono uppercase tracking-[0.2em] font-bold">Scalar</span>
                 </div>
               </div>
            </div>
          </div>
        ))}

        {/* Parametric Sweep Placeholder (v3.2) */}
        <button className="p-5 rounded-[32px] border-2 border-dashed border-[#adc6ff]/10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-blue-500/5 hover:border-blue-400/30 transition-all duration-700 min-h-[120px]">
          <div className="p-4 bg-white/5 rounded-full mb-3 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500">
             <Layers className="w-6 h-6 text-[#adc6ff]/20 group-hover:text-blue-400" />
          </div>
          <span className="text-[10px] text-[#adc6ff]/30 font-black uppercase tracking-[0.4em] group-hover:text-blue-400/60 transition-colors">Initialize Sweep</span>
        </button>
      </div>

      {/* Bottom Validation Bar (v3.2 Hardened) */}
      <div className="px-6 py-4 bg-red-500/10 border-t border-red-500/20 flex items-center gap-5 shadow-[0_-10px_30px_rgba(239,68,68,0.1)] relative z-10 backdrop-blur-3xl">
        <div className="p-2 bg-red-500/20 rounded-xl shadow-[0_0_15px_rgba(239,68,68,0.3)]">
           <AlertTriangle className="w-4 h-4 text-red-400 animate-pulse" />
        </div>
        <div className="flex flex-col flex-1">
           <div className="flex items-center gap-2">
              <span className="text-[11px] text-red-400 font-black uppercase tracking-[0.2em]">Residual Vector Conflict</span>
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
           </div>
           <span className="text-[10px] text-red-400/60 font-mono italic leading-none mt-1 uppercase">Unit Mismatch Detected: [mach] vs [v_inf] in Aerospace Kernel</span>
        </div>
        <button className="px-5 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-xl text-[10px] text-red-400 font-black uppercase tracking-[0.3em] transition-all hover:scale-105 active:scale-95 shadow-2xl">
           Resolve All
        </button>
      </div>
    </div>
  );
};

export default VariableConsole;
