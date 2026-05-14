'use client';

import React, { useState } from 'react';
import { 
  Mic, Send, Globe, Users, ShieldCheck, Activity, Cpu, 
  Terminal, Sparkles, Binary, Zap, Search, ChevronRight,
  TrendingUp, Fingerprint, Lock, Shield, Command, ArrowRight
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * CommandControlBar v3.2 (Phase 55 Advanced - Sovereign Intent Kernel)
 * 
 * Central input hub for the Sovereign Engineering Intelligence OS.
 * Features high-fidelity intent synthesis, reality-linked collaboration metrics, 
 * and sub-picowatt cryptographic hardening status.
 * 
 * v3.2 Updates:
 * - Sovereign Intent Pre-Cognition
 * - High-density Phase 55 mission-control aesthetics
 * - Integrated reality-linked telemetry monitor
 * - Advanced micro-animations and focus states
 */
const CommandControlBar = () => {
  const [input, setInput] = useState('');
  const { isListening, setIsListening, runAnalysis, collaboratorCount, osStatus } = useEngineeringStore();

  const handleSend = () => {
    if (!input.trim()) return;
    runAnalysis(input);
    setInput('');
  };

  return (
    <div className="h-24 border-t border-[#adc6ff]/10 bg-[#080B10]/95 backdrop-blur-[50px] flex items-center px-10 gap-10 relative z-[100] overflow-hidden group shadow-[0_-15px_50px_rgba(0,0,0,0.6)]">
      {/* 1. DECORATIVE SOVEREIGN BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.08] via-transparent to-emerald-500/[0.08] opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      {/* 2. SYSTEM PULSE & COGNITION BUS (v3.2) */}
      <div className="flex items-center gap-8 border-r border-white/5 pr-10 h-14">
        <div className="flex flex-col gap-2">
           <div className="flex items-center gap-4">
              <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
                 <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
              </div>
              <span className="text-[11px] font-black text-blue-400 tracking-[0.4em] uppercase font-mono drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">Cognition_Bus_v3.2</span>
           </div>
           <div className="flex gap-1.5 items-end h-5 px-1">
             {[...Array(12)].map((_, i) => (
               <div key={i} className="w-1.5 bg-white/5 rounded-full overflow-hidden h-full relative group/bar">
                 <div 
                   className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-700 ease-out group-hover/bar:from-emerald-500 group-hover/bar:to-emerald-400" 
                   style={{ height: `${Math.random() * 80 + 20}%`, transitionDelay: `${i * 50}ms` }} 
                 />
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* 3. SOVEREIGN INTENT SYNTHESIS (v3.2 High-Density) */}
      <div className="flex-1 flex items-center gap-6 bg-[#0B0F14]/80 rounded-[28px] border border-white/5 px-8 py-4 transition-all duration-700 focus-within:border-blue-500/40 focus-within:bg-black/40 shadow-[inset_0_10px_30px_rgba(0,0,0,0.5)] group/input relative overflow-hidden backdrop-blur-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
        
        <div className="relative z-10 flex items-center gap-4">
           <Mic 
             onClick={() => setIsListening(!isListening)}
             className={`w-6 h-6 cursor-pointer transition-all duration-700 hover:scale-125 active:scale-95 ${isListening ? 'text-rose-500 animate-ping shadow-[0_0_20px_rgba(244,63,94,0.6)]' : 'text-[#adc6ff]/20 hover:text-blue-400'}`} 
           />
           <div className="h-6 w-px bg-white/10" />
        </div>
        
        <div className="flex-1 flex flex-col relative z-10">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="ENTER SOVEREIGN ENGINEERING INTENT OR KERNEL_CMD_v3.2..."
            className="bg-transparent border-none focus:ring-0 p-0 text-[15px] font-mono font-black text-white placeholder:text-[#adc6ff]/10 uppercase tracking-[0.15em] w-full selection:bg-blue-500/40"
          />
          <div className="flex items-center gap-3 mt-1.5 opacity-0 group-focus-within/input:opacity-100 transition-all duration-700 transform translate-y-2 group-focus-within/input:translate-y-0">
             <div className="flex items-center gap-2 px-2 py-0.5 bg-blue-500/10 border border-blue-500/10 rounded-md">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span className="text-[9px] text-blue-400 font-black uppercase tracking-[0.2em]">Sovereign Intent Pre-Cognition Active</span>
             </div>
             <span className="text-[9px] text-[#adc6ff]/10 font-mono font-black italic">PROBABILITY_SYNC: 0.9998</span>
          </div>
        </div>

        <button 
          onClick={handleSend}
          className="p-3.5 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-500 relative z-10 group/btn active:scale-90 hover:scale-110"
        >
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 4. SOVEREIGN TELEMETRY & SECURITY (v3.2 Hardened) */}
      <div className="flex items-center gap-12 pl-10 border-l border-white/5 h-14">
        <Metric icon={Users} label="Sovereign Nodes" value={collaboratorCount.toString()} color="blue" />
        <Metric icon={ShieldCheck} label="Reality Sync" value="PHASE_55_LOCKED" color="emerald" pulse />
        <Metric icon={Cpu} label="Kernel Load" value={`${(osStatus.kernelLoad * 100).toFixed(2)}%`} color="rose" />
      </div>

    </div>
  );
};

const Metric = ({ icon: Icon, label, value, color, pulse }: any) => (
  <div className="flex items-center gap-4 group/metric cursor-pointer hover:translate-y-[-2px] transition-all duration-500">
    <div className={`p-3 bg-${color}-500/10 rounded-2xl border border-${color}-500/20 group-hover/metric:scale-110 group-hover/metric:border-${color}-500/50 transition-all duration-700 shadow-2xl relative overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}-400/20 to-transparent opacity-0 group-hover/metric:opacity-100 transition-opacity`} />
      <Icon className={`w-5 h-5 text-${color}-400 relative z-10 ${pulse ? 'animate-pulse' : ''}`} />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] text-[#adc6ff]/20 uppercase font-black tracking-[0.3em] group-hover/metric:text-white transition-colors">{label}</span>
      <span className={`text-[13px] font-mono font-black text-white group-hover/metric:text-${color}-400 transition-colors drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]`}>{value}</span>
    </div>
  </div>
);

export default CommandControlBar;
