'use client';

import React, { useState } from 'react';
import {
  Settings,
  Monitor,
  Network,
  Brain,
  Terminal,
  RefreshCw,
  ChevronRight,
  Send,
  Group,
  Play,
  Pause,
  Square,
  Home,
  ZoomIn,
  Rotate3D,
  Layers,
  Activity,
  Info,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';
import SovereignViewport from '../workbench/SovereignViewport';

/**
 * SynchronizedViewportEngineeringOS_d56e12
 * Phase 55 Hardened - Sovereign Physics Synthesis Interface
 * 
 * Refactored from legacy HTML injection to native React for high-fidelity 
 * state synchronization and performance.
 */
const SynchronizedViewportEngineeringOS_d56e12 = () => {
  const { workflowState, osStatus, activeDomain, symbolicTruth } = useEngineeringStore();
  const [inputText, setInputText] = useState('');

  const streamEvents = workflowState.eventBus.filter(e => 
    e.type === 'REASONING_TRACE' || e.type === 'STATUS_UPDATE'
  ).slice(-10).reverse();

  return (
    <div className="h-screen flex flex-col bg-[#0B0E15] text-[#e1e2ec] font-sans selection:bg-blue-500/30 overflow-hidden relative">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full h-[64px] z-50 bg-[#0B0E15]/80 backdrop-blur-2xl border-b border-white/10 flex justify-between items-center px-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/30">
            <Zap className="w-5 h-5 text-blue-400" />
          </div>
          <span className="font-mono text-[11px] font-black text-blue-400 uppercase tracking-[0.3em]">
            KINETIC_OS // DYNAMICS_LAYER
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10B981]" />
            <span className="font-mono text-[10px] font-black text-emerald-400 uppercase tracking-widest">
              LIVE_SESSION: PHASE_55_LOCKED
            </span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded border border-white/10">
            <span className="font-mono text-[9px] text-white/40 uppercase font-black">SYNC_LATENCY:</span>
            <span className="font-mono text-[9px] text-blue-400 font-black">4ms</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 rounded-lg transition-all active:scale-95">
            <Settings className="w-5 h-5 text-white/40" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 pt-[64px] overflow-hidden">
        {/* NavigationDrawer (Left) */}
        <nav className="w-64 bg-[#0B0E15] border-r border-white/5 flex flex-col py-6 gap-2 shrink-0">
          <div className="px-6 mb-4">
            <span className="font-mono text-[10px] font-black text-blue-400/40 uppercase tracking-[0.2em]">SYSTEM_INDEX</span>
          </div>
          
          {[
            { label: 'Telemetry', icon: Monitor, active: true },
            { label: 'Kinematics', icon: Network, active: false },
            { label: 'AI_Stability', icon: Brain, active: false },
            { label: 'Command_Log', icon: Terminal, active: false },
            { label: 'System_Sync', icon: RefreshCw, active: false },
          ].map((item) => (
            <div 
              key={item.label}
              className={`flex items-center gap-4 px-6 py-3 transition-all cursor-pointer group ${item.active ? 'bg-blue-500/10 border-l-2 border-blue-500 text-blue-400' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            >
              <item.icon className={`w-4 h-4 ${item.active ? 'text-blue-400' : 'text-white/20 group-hover:text-white/60'}`} />
              <span className="font-mono text-[11px] font-black uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Main Content Area (3D Viewport) */}
        <main className="flex-1 relative flex flex-col bg-black overflow-hidden group">
          <div className="flex-1 relative">
            <SovereignViewport />
            
            {/* Viewport Overlay HUD */}
            <div className="absolute inset-0 pointer-events-none p-10 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-4">
                   <div className="px-5 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full">
                      <span className="font-mono text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">VIEW_MODE:</span>
                      <span className="font-mono text-[10px] font-black text-blue-400 uppercase tracking-widest ml-2">[COLLABORATIVE_RENDER]</span>
                   </div>
                   <div className="px-5 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full">
                      <span className="font-mono text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">REF_GRID:</span>
                      <span className="font-mono text-[10px] font-black text-blue-400 uppercase tracking-widest ml-2">#404-X</span>
                   </div>
                </div>
                
                <div className="flex flex-col gap-4 text-right">
                  <div className="p-4 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl">
                    <p className="font-mono text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">KERNEL_LOAD</p>
                    <p className="font-mono text-2xl font-black text-blue-400">{(osStatus.kernelLoad * 100).toFixed(2)}%</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex gap-10">
                  <div className="text-blue-400">
                    <p className="font-mono text-[9px] font-black uppercase tracking-[0.4em] mb-1 opacity-40">ROT_X</p>
                    <p className="font-mono text-xl font-black tracking-widest">14.02°</p>
                  </div>
                  <div className="text-blue-400">
                    <p className="font-mono text-[9px] font-black uppercase tracking-[0.4em] mb-1 opacity-40">ROT_Y</p>
                    <p className="font-mono text-xl font-black tracking-widest">-88.4°</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">ENTITY_ID</p>
                  <p className="font-mono text-[12px] font-black text-white uppercase tracking-[0.3em]">TRBN-99-ALPHA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Viewport Controls */}
          <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
            {[ZoomIn, Rotate3D, Layers].map((Icon, i) => (
              <button key={i} className="p-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/40 transition-all active:scale-95 group">
                <Icon className="w-5 h-5 text-white/30 group-hover:text-blue-400" />
              </button>
            ))}
          </div>
        </main>

        {/* Side Panel (Live Reasoning Stream) */}
        <aside className="w-96 bg-[#0B0E15] border-l border-white/5 flex flex-col shrink-0">
          <div className="h-12 px-6 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
            <span className="font-mono text-[10px] font-black text-blue-400/60 uppercase tracking-[0.2em]">LIVE REASONING STREAM</span>
            <Activity className="w-4 h-4 text-blue-400/40" />
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 custom-scrollbar">
            {streamEvents.length > 0 ? streamEvents.map((event, i) => (
              <div 
                key={i} 
                className={`p-5 rounded-2xl border transition-all animate-in slide-in-from-right-4 duration-500 ${
                  event.type === 'REASONING_TRACE' 
                    ? 'bg-blue-500/5 border-blue-500/20' 
                    : 'bg-emerald-500/5 border-emerald-500/20'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                   <div className={`w-1.5 h-1.5 rounded-full ${event.type === 'REASONING_TRACE' ? 'bg-blue-400' : 'bg-emerald-400'} shadow-[0_0_8px_currentColor]`} />
                   <span className={`font-mono text-[10px] font-black uppercase tracking-widest ${event.type === 'REASONING_TRACE' ? 'text-blue-400' : 'text-emerald-400'}`}>
                     {event.type === 'REASONING_TRACE' ? (event.data.agent || 'AI_ADVISOR') : event.data.phase}
                   </span>
                   <span className="font-mono text-[9px] text-white/20 ml-auto uppercase">{new Date().toLocaleTimeString()}</span>
                </div>
                <p className="text-[12px] font-mono text-white/70 leading-relaxed italic">
                  "{event.type === 'REASONING_TRACE' ? event.data.thought : event.data.message}"
                </p>
              </div>
            )) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-10 opacity-20">
                <Terminal className="w-12 h-12 mb-4" />
                <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em]">Awaiting sovereign intent signals...</p>
              </div>
            )}

            {/* Symbolic Truth Layers */}
            {symbolicTruth.proofs.length > 0 && (
              <div className="mt-4 p-5 bg-purple-500/5 border border-purple-500/20 rounded-2xl">
                <div className="flex items-center gap-2 mb-3 text-purple-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest">SYMBOLIC_TRUTH_LOCKED</span>
                </div>
                <div className="space-y-2">
                  {symbolicTruth.proofs.map((proof, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-mono text-white/50">
                      <ChevronRight className="w-3 h-3 text-purple-400" />
                      <span>{proof.statement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white/[0.02] border-t border-white/5">
            <div className="relative">
              <input 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full bg-black/40 border border-white/10 text-[12px] font-mono p-4 pr-14 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-2xl transition-all" 
                placeholder="Synthesize sovereign Terminal..." 
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-500/20 hover:scale-110 active:scale-95 transition-all">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* BottomNavBar */}
      <footer className="fixed bottom-0 left-0 w-full h-[64px] z-50 bg-[#0B0E15]/90 backdrop-blur-2xl border-t border-white/10 flex justify-between items-center px-10">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <button className="p-3 text-white/40 hover:text-blue-400 transition-all hover:scale-110"><Play className="w-5 h-5" /></button>
            <button className="p-3 text-blue-400 bg-blue-500/10 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.3)]"><Pause className="w-5 h-5" /></button>
            <button className="p-3 text-white/40 hover:text-rose-400 transition-all hover:scale-110"><Square className="w-5 h-5" /></button>
          </div>
          <div className="h-6 w-px bg-white/10" />
          <button className="p-3 text-white/40 hover:text-white transition-all"><Home className="w-5 h-5" /></button>
        </div>

        <div className="hidden md:flex items-center gap-4 text-white/20">
          <Group className="w-4 h-4" />
          <span className="font-mono text-[10px] font-black uppercase tracking-widest">7 USERS ACTIVE // SOVEREIGN_MODE</span>
        </div>
      </footer>
    </div>
  );
};

export default SynchronizedViewportEngineeringOS_d56e12;
