'use client';

import React, { useState } from 'react';
import { Terminal, Zap, Info, Calculator, MessageSquare, History } from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const EquationCommandBar = () => {
  const { intent, setCommand, runAnalysis, isAnalyzing } = useEngineeringStore();
  const [isFocused, setIsFocused] = useState(false);

  const handleExecute = () => {
    if (!intent.command.trim()) return;
    runAnalysis();
  };

  return (
    <div className={`
      h-14 border-b border-[#adc6ff]/10 bg-[#0B0F14] flex items-center px-4 gap-4 transition-all duration-500
      ${isFocused ? 'bg-[#adc6ff]/5' : ''}
    `}>
      <div className="flex items-center gap-3">
        <div className="p-2 bg-[#adc6ff]/10 rounded-lg">
          <Terminal className="w-4 h-4 text-[#adc6ff]" />
        </div>
      </div>

      <div className="flex-1 relative group">
        <input 
          type="text" 
          value={intent.command}
          onChange={(e) => setCommand(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => e.key === 'Enter' && handleExecute()}
          placeholder="ENTER SYMBOLIC INTENT... (e.g. solve navier stokes for mach 2 airflow)"
          className="w-full bg-transparent border-none focus:ring-0 text-sm font-mono text-[#f0f4ff] placeholder:text-[#adc6ff]/20 uppercase tracking-[0.1em]"
        />
        
        {/* Suggestion Tooltip */}
        {isFocused && (
          <div className="absolute top-12 left-0 w-full p-3 bg-[#0B0F14] border border-[#adc6ff]/20 rounded-xl shadow-2xl z-[100] animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2 text-[10px] text-[#adc6ff]/40 uppercase mb-2">
              <Zap className="w-3 h-3" /> AI Equation Suggestions
            </div>
            <div className="space-y-1">
              {['optimize mass for 2x safety factor', 'derive modal frequencies for titanium wing', 'solve thermal expansion field'].map((s) => (
                <button 
                  key={s}
                  onClick={() => { setCommand(s); setIsFocused(false); }}
                  className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-[#adc6ff]/10 text-xs text-[#adc6ff]/60 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 border-l border-[#adc6ff]/10 pl-4">
        <div className="flex flex-col items-end">
          <span className="text-[9px] text-[#adc6ff]/40 uppercase font-bold tracking-tighter">Unit System</span>
          <span className="text-[10px] text-[#f0f4ff] font-mono uppercase">SI / ISO-80000</span>
        </div>
        
        <button 
          onClick={handleExecute}
          disabled={isAnalyzing}
          className={`
            px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all
            ${isAnalyzing 
              ? 'bg-[#adc6ff]/20 text-[#adc6ff]/40 cursor-wait' 
              : 'bg-[#adc6ff] text-[#0B0F14] hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(173,198,255,0.2)]'}
          `}
        >
          {isAnalyzing ? 'Solving...' : 'Execute'}
        </button>
      </div>

      <div className="flex items-center gap-2 ml-4">
        <button className="p-2 text-[#adc6ff]/40 hover:text-[#adc6ff] transition-colors">
          <History className="w-4 h-4" />
        </button>
        <button className="p-2 text-[#adc6ff]/40 hover:text-[#adc6ff] transition-colors">
          <Calculator className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default EquationCommandBar;
