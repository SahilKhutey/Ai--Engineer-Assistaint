'use client';

import React, { useState } from 'react';
import { Mic, Send, Globe, Users, ShieldCheck, Activity, Cpu } from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const CommandControlBar = () => {
  const [input, setInput] = useState('');
  const { isListening, setIsListening, runAnalysis, collaboratorCount } = useEngineeringStore();

  const handleSend = () => {
    if (!input.trim()) return;
    runAnalysis(input);
    setInput('');
  };

  return (
    <div className="h-16 border-t border-[#adc6ff]/10 bg-[#0B0F14]/90 backdrop-blur-2xl flex items-center px-6 gap-6 relative z-50">
      
      {/* System Pulse */}
      <div className="flex items-center gap-4 border-r border-[#adc6ff]/10 pr-6">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[#adc6ff] animate-pulse" />
          <span className="text-[10px] font-bold text-[#adc6ff] tracking-[0.2em] uppercase">System Pulse</span>
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-1 h-3 bg-[#adc6ff]/20 rounded-full overflow-hidden">
              <div 
                className="w-full bg-[#adc6ff] animate-shimmer" 
                style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Command Input Area */}
      <div className="flex-1 flex items-center gap-4 bg-[#adc6ff]/5 rounded-xl border border-[#adc6ff]/10 px-4 py-1.5 transition-all focus-within:border-[#adc6ff]/30 focus-within:bg-[#adc6ff]/10">
        <Mic 
          onClick={() => setIsListening(!isListening)}
          className={`w-5 h-5 cursor-pointer transition-colors ${isListening ? 'text-red-400 animate-pulse' : 'text-[#adc6ff]/40 hover:text-[#adc6ff]'}`} 
        />
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="ENTER ENGINEERING INTENT..."
          className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-mono text-[#f0f4ff] placeholder:text-[#adc6ff]/20 uppercase tracking-wider"
        />
        <button 
          onClick={handleSend}
          className="p-1.5 bg-[#adc6ff] rounded-lg text-[#0B0F14] hover:bg-white transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

      {/* Collaboration & Security Metrics */}
      <div className="flex items-center gap-6 pl-6 border-l border-[#adc6ff]/10">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#adc6ff]/40" />
          <div className="flex flex-col">
            <span className="text-[9px] text-[#adc6ff]/40 uppercase tracking-tighter">Collaborators</span>
            <span className="text-[11px] font-bold text-[#f0f4ff]">{collaboratorCount}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-green-400/40" />
          <div className="flex flex-col">
            <span className="text-[9px] text-[#adc6ff]/40 uppercase tracking-tighter">Cert Status</span>
            <span className="text-[11px] font-bold text-green-400">VERIFIED</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#adc6ff]/40" />
          <div className="flex flex-col">
            <span className="text-[9px] text-[#adc6ff]/40 uppercase tracking-tighter">Compute Load</span>
            <span className="text-[11px] font-bold text-[#f0f4ff]">14%</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CommandControlBar;
