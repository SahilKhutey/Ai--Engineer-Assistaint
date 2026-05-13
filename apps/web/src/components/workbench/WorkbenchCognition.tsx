'use client';

import React from 'react';
import { 
  ShieldCheck, AlertTriangle, Cpu, TrendingUp, 
  ChevronRight, Terminal, Info, Zap 
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const WorkbenchCognition = () => {
  const { streams, analysisResult, activeDomain, validation } = useEngineeringStore();

  return (
    <div className="flex-1 border-l border-[#adc6ff]/10 flex flex-col overflow-hidden bg-[#0B0F14]/40">
      {/* Header */}
      <div className="px-4 py-2 bg-[#adc6ff]/5 border-b border-[#adc6ff]/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="w-3 h-3 text-[#adc6ff]/60" />
          <span className="text-[10px] font-bold text-[#adc6ff]/60 uppercase tracking-widest">AI Engineering Reasoning</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[9px] text-[#adc6ff]/20 font-mono">REASONING_CORE_V4</span>
        </div>
      </div>

      {/* Reasoning Stream */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        
        {/* CRITICAL VALIDATION ERRORS */}
        {validation.errors.length > 0 && (
          <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
            {validation.errors.map((error, idx) => (
              <div key={idx} className={`
                p-3 rounded-xl border flex items-start gap-3
                ${error.level === 'CRITICAL' ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'}
              `}>
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest">{error.level}</p>
                  <p className="text-[11px] font-mono leading-relaxed">{error.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* REASONING TRACES */}
        <div className="space-y-3">
          <h3 className="text-[9px] font-bold text-[#adc6ff]/20 uppercase tracking-[0.2em] mb-4">Analytical Trace</h3>
          
          {streams.telemetry.length === 0 && (
            <div className="h-32 flex flex-col items-center justify-center text-[#adc6ff]/10 space-y-2 border border-dashed border-[#adc6ff]/10 rounded-2xl">
              <Terminal className="w-6 h-6 opacity-20" />
              <span className="text-[9px] uppercase tracking-widest">Awaiting symbolic input...</span>
            </div>
          )}

          {streams.telemetry.map((log, idx) => (
            <div 
              key={idx} 
              className="group relative pl-4 border-l border-[#adc6ff]/10 py-1 transition-all hover:border-[#adc6ff]/30 animate-in fade-in slide-in-from-left-2 duration-300"
            >
              <div className="absolute left-[-4px] top-3 w-2 h-2 rounded-full bg-[#adc6ff]/20 group-hover:bg-[#adc6ff] transition-all" />
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[8px] font-mono text-[#adc6ff]/30">[{log.timestamp}]</span>
                <span className="text-[9px] font-bold text-[#adc6ff]/60 uppercase tracking-tighter">{log.module || 'KERNEL'}</span>
              </div>
              <p className="text-[11px] text-[#f0f4ff]/80 font-mono leading-relaxed selection:bg-[#adc6ff]/30">
                {log.message}
              </p>
              {log.derivation && (
                <div className="mt-2 p-2 bg-[#adc6ff]/5 rounded-lg border border-[#adc6ff]/5">
                  <p className="text-[10px] text-blue-400/60 font-mono italic">{log.derivation}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SOLVER RECOMMENDATIONS */}
        {analysisResult && (
          <div className="p-4 bg-[#adc6ff]/5 border border-[#adc6ff]/10 rounded-2xl space-y-4 animate-in slide-in-from-bottom-4 duration-500">
             <div className="flex items-center gap-2">
               <Zap className="w-4 h-4 text-blue-400" />
               <h3 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Engineering Recommendations</h3>
             </div>
             <ul className="space-y-2">
               <li className="flex items-start gap-2 text-[11px] text-[#f0f4ff]/60 font-mono">
                 <ChevronRight className="w-3 h-3 text-blue-400 mt-0.5" />
                 <span>Switch to Implicit Solver for nonlinear convergence.</span>
               </li>
               <li className="flex items-start gap-2 text-[11px] text-[#f0f4ff]/60 font-mono">
                 <ChevronRight className="w-3 h-3 text-blue-400 mt-0.5" />
                 <span>Refine mesh density near boundary constraints.</span>
               </li>
             </ul>
          </div>
        )}
      </div>

      {/* Footer / Interaction */}
      <div className="p-3 border-t border-[#adc6ff]/10 bg-[#0B0F14] flex items-center justify-between">
        <div className="flex items-center gap-2">
           <ShieldCheck className="w-3 h-3 text-blue-400" />
           <span className="text-[9px] text-[#adc6ff]/40 uppercase font-bold tracking-tighter italic">Physics Verified Truth</span>
        </div>
        <button className="px-3 py-1 bg-[#adc6ff]/10 hover:bg-[#adc6ff]/20 rounded-lg text-[9px] text-[#adc6ff] uppercase font-bold tracking-widest transition-all">
          Details
        </button>
      </div>
    </div>
  );
};

export default WorkbenchCognition;
