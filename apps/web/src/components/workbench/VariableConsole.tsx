'use client';

import React from 'react';
import { Database, Link2, Hash, ArrowRight, Layers, AlertTriangle } from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const VariableConsole = () => {
  const { intent, updateVariable, activeDomain } = useEngineeringStore();

  return (
    <div className="w-1/2 border-r border-[#adc6ff]/10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-4 py-2 bg-[#adc6ff]/5 border-b border-[#adc6ff]/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="w-3 h-3 text-[#adc6ff]/60" />
          <span className="text-[10px] font-bold text-[#adc6ff]/60 uppercase tracking-widest">Universal Variable Console</span>
        </div>
        <div className="flex items-center gap-4 text-[9px] font-mono text-[#adc6ff]/30">
          <span>COUPLED: {intent.variables.length}</span>
          <span>DOMAINS: 15</span>
        </div>
      </div>

      {/* Grid of Variables */}
      <div className="flex-1 overflow-y-auto p-3 grid grid-cols-2 gap-3">
        {intent.variables.map((v) => (
          <div 
            key={v.id}
            className={`
              p-2 rounded-xl border transition-all group
              ${v.domain === activeDomain 
                ? 'bg-[#adc6ff]/5 border-[#adc6ff]/20' 
                : 'bg-transparent border-[#adc6ff]/5 opacity-60 hover:opacity-100'}
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#adc6ff]" />
                <span className="text-[10px] text-[#adc6ff]/60 font-mono">{v.id}</span>
              </div>
              <Link2 className="w-3 h-3 text-[#adc6ff]/20 group-hover:text-[#adc6ff] cursor-pointer" />
            </div>
            
            <p className="text-[9px] text-[#adc6ff]/30 uppercase mb-2 truncate">{v.label}</p>
            
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                value={v.value}
                onChange={(e) => updateVariable(v.id, Number(e.target.value))}
                className="flex-1 bg-[#080B10] border border-[#adc6ff]/10 rounded-lg px-2 py-1.5 text-xs text-[#f0f4ff] font-mono focus:border-[#adc6ff]/40 outline-none"
              />
              <span className="text-[10px] text-[#adc6ff]/40 font-mono w-10">{v.unit}</span>
            </div>
          </div>
        ))}

        {/* Parametric Sweep Placeholder */}
        <div className="p-2 rounded-xl border border-dashed border-[#adc6ff]/10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-[#adc6ff]/5 transition-all">
          <Layers className="w-4 h-4 text-[#adc6ff]/20 mb-1 group-hover:text-[#adc6ff]" />
          <span className="text-[9px] text-[#adc6ff]/20 uppercase">Initialize Sweep</span>
        </div>
      </div>

      {/* Bottom Validation Bar */}
      <div className="px-4 py-2 bg-red-500/5 border-t border-red-500/10 flex items-center gap-3">
        <AlertTriangle className="w-3 h-3 text-red-400" />
        <span className="text-[10px] text-red-400 font-mono uppercase">Unit Conflict Detected: [mach] vs [v_inf]</span>
        <button className="ml-auto text-[9px] text-red-400/60 hover:text-red-400 underline uppercase tracking-widest">Resolve All</button>
      </div>
    </div>
  );
};

export default VariableConsole;
