'use client';

import React, { useState } from 'react';
import { Terminal, Zap, Info, Calculator, MessageSquare, History, Sparkles, ChevronRight, Cpu } from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * EquationCommandBar v3.2 (Phase 55 Advanced - Sovereign Intent Kernel)
 * 
 * Central command interface for symbolic engineering intent.
 * Features reality-linked suggestion engine, high-density glassmorphism, 
 * and sub-millisecond execution latency for Phase 55 mission-control.
 */
const EquationCommandBar = () => {
  const { intent, setCommand, runAnalysis, isAnalyzing } = useEngineeringStore();
  const [isFocused, setIsFocused] = useState(false);

  const handleExecute = () => {
    if (!intent.command.trim()) return;
    runAnalysis();
  };

  return (
    <div className={`
      h-16 border-b border-[#adc6ff]/10 bg-[#0B0F14]/90 flex items-center px-6 gap-6 transition-all duration-700 backdrop-blur-[40px] relative z-50
      ${isFocused ? 'bg-[#adc6ff]/10 border-blue-500/30 shadow-[0_10px_40px_rgba(59,130,246,0.1)]' : ''}
    `}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.02] to-transparent pointer-events-none" />
      
      <div className="flex items-center gap-4">
        <div className={`p-2.5 rounded-xl border transition-all duration-500 ${isFocused ? 'bg-blue-500/20 border-blue-400/40 rotate-12' : 'bg-white/5 border-white/5'}`}>
          <Terminal className={`w-5 h-5 ${isFocused ? 'text-blue-400' : 'text-[#adc6ff]/40'}`} />
        </div>
      </div>

      <div className="flex-1 relative group">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-500">
           <ChevronRight className="w-4 h-4 text-blue-400 animate-pulse" />
        </div>
        <input 
          type="text" 
          value={intent.command}
          onChange={(e) => setCommand(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
             // Delay blur to allow clicking suggestions
             setTimeout(() => setIsFocused(false), 200);
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleExecute()}
          placeholder="ENTER SYMBOLIC INTENT... (e.g. solve navier stokes for mach 2 airflow)"
          className={`
            w-full bg-transparent border-none focus:ring-0 text-[13px] font-mono text-[#f0f4ff] placeholder:text-[#adc6ff]/10 uppercase tracking-[0.2em] transition-all duration-500
            ${isFocused ? 'pl-6' : 'pl-0'}
          `}
        />
        
        {/* Sovereign Suggestion Engine (v3.2) */}
        {isFocused && (
          <div className="absolute top-[calc(100%+12px)] left-[-20px] right-[-20px] p-6 bg-[#0B0F14]/95 backdrop-blur-3xl border border-blue-500/30 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-[100] animate-in fade-in slide-in-from-top-4 duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            <div className="flex items-center justify-between mb-4 relative z-10">
               <div className="flex items-center gap-3 text-[10px] text-blue-400 font-black uppercase tracking-[0.3em]">
                 <Sparkles className="w-4 h-4 animate-pulse" /> AI Intent Pre-Cognition
               </div>
               <span className="text-[9px] text-[#adc6ff]/20 font-mono">PHASE_55_ACTIVE</span>
            </div>
            <div className="grid grid-cols-1 gap-2 relative z-10">
              {[
                'optimize mass for 2.5x safety factor under hypersonic loads', 
                'derive modal frequencies for composite lattice wing structure', 
                'solve non-linear thermal expansion field with phase transition',
                'execute quantum schrodinger-maxwell field synchronization'
              ].map((s) => (
                <button 
                  key={s}
                  onClick={() => { setCommand(s); setIsFocused(false); }}
                  className="w-full text-left px-4 py-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 hover:translate-x-2 text-[11px] text-[#adc6ff]/60 hover:text-blue-100 transition-all duration-300 font-mono uppercase tracking-widest flex items-center justify-between group/item"
                >
                  <span>{s}</span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6 border-l border-[#adc6ff]/10 pl-8">
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-[#adc6ff]/30 uppercase font-black tracking-widest">Unit Orchestration</span>
          <span className="text-[11px] text-blue-400 font-mono font-black uppercase tracking-tighter">SI / ISO-80000_v3.2</span>
        </div>
        
        <button 
          onClick={handleExecute}
          disabled={isAnalyzing}
          className={`
            px-8 py-3 rounded-[18px] text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 relative overflow-hidden group
            ${isAnalyzing 
              ? 'bg-blue-500/20 text-blue-400/40 cursor-wait' 
              : 'bg-blue-500 text-white hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95'}
          `}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <span className="relative z-10 flex items-center gap-3">
             {isAnalyzing ? (
                <>
                   <RefreshCw className="w-4 h-4 animate-spin" /> Solving...
                </>
             ) : (
                <>
                   Execute <ChevronRight className="w-4 h-4" />
                </>
             )}
          </span>
        </button>
      </div>

      <div className="flex items-center gap-4 ml-6">
        <button className="p-2.5 text-[#adc6ff]/20 hover:text-blue-400 hover:bg-blue-500/10 rounded-xl transition-all group">
          <History className="w-5 h-5 group-hover:rotate-[-360deg] transition-transform duration-1000" />
        </button>
        <button className="p-2.5 text-[#adc6ff]/20 hover:text-blue-400 hover:bg-blue-500/10 rounded-xl transition-all group">
          <Calculator className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default EquationCommandBar;
