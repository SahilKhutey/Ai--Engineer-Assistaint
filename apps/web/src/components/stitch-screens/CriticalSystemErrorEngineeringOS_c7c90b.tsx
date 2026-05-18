'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const CriticalSystemErrorEngineeringOS_c7c90b = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#ffb4ab]/30">
      {/* CRITICAL_FAILURE Watermark */}
      <div className="fixed inset-0 flex items-center justify-center opacity-[0.03] select-none z-0 pointer-events-none">
        <span className="font-mono text-[15vw] leading-none font-black tracking-tighter uppercase italic">CRITICAL_FAILURE</span>
      </div>

      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">deployed_code</span>
          <h1 className="font-mono text-[12px] font-black text-[#adc6ff] uppercase tracking-[0.2em] italic">ANTIGRAVITY_OS</h1>
        </div>
        <div className="flex items-center gap-12">
          <span className="font-mono text-[10px] text-[#ffb4ab] font-black uppercase tracking-widest italic animate-pulse">SYSTEM_STATUS: COMPROMISED</span>
          <span className="font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-widest italic opacity-50">GPU: 94% | SIM: ACTIVE</span>
        </div>
      </header>

      {/* Main Content Workspace */}
      <main className="flex-1 flex flex-col items-center justify-center p-12 z-10 relative space-y-12 animate-in fade-in zoom-in duration-500">
        {/* Error Core Section */}
        <div className="w-full max-w-5xl flex flex-col items-center gap-12">
          {/* AlertTriangle Icon Cluster */}
          <div className="relative flex items-center justify-center group">
            <div className="absolute w-48 h-48 bg-[#ffb4ab]/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute inset-0 border-4 border-[#ffb4ab]/20 rounded-full animate-ping opacity-20 duration-[3s]"></div>
            <span className="material-symbols-outlined text-[140px] text-[#ffb4ab] leading-none drop-shadow-[0_0_30px_rgba(255,180,171,0.4)]" style={{ fontVariationSettings: "'FILL' 1" }}>AlertTriangle</span>
          </div>

          {/* Headline */}
          <div className="text-center space-y-4">
            <h1 className="font-mono text-5xl font-black text-[#ffb4ab] tracking-tighter uppercase italic drop-shadow-[0_0_20px_rgba(255,180,171,0.3)]">KERNEL_PANIC: CLUSTER_DISCONNECT</h1>
            <p className="font-mono text-[14px] text-[#8c909f] font-black italic uppercase tracking-widest opacity-60">HEX_ERR_CODE: 0x000F7A221 // THREAD_FATAL_EXCEPTION</p>
          </div>

          {/* Bento Diagnostic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[
              { id: '01', label: 'MODULE_ALPHA', status: 'CORE_VOLTAGE: UNSTABLE' },
              { id: '02', label: 'MODULE_BRAVO', status: 'NETWORK_SYNC: LOST' },
              { id: '03', label: 'MODULE_GAMMA', status: 'AI_ENGINE: UNRESPONSIVE' },
            ].map((card) => (
              <div key={card.id} className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#ffb4ab]/20 p-8 rounded-3xl flex flex-col gap-6 hover:border-[#ffb4ab]/40 transition-all group shadow-xl">
                <div className="flex items-center justify-between border-b border-[#424754]/30 pb-4">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">{card.label}</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab] animate-pulse shadow-[0_0_12px_#ffb4ab]"></div>
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">STATUS_FEED</p>
                  <p className="font-mono text-[14px] text-[#ffb4ab] font-black italic uppercase tracking-tight">{card.status}</p>
                </div>
              </div>
            ))}
          </div>

          {/* System Logs Terminal */}
          <div className="w-full bg-[#0b0e15] border-2 border-[#424754]/50 rounded-3xl overflow-hidden flex flex-col h-64 shadow-inner relative group/Terminal">
            <header className="h-10 bg-[#1d2027] border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 relative z-10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[16px] text-[#ffb4ab]">terminal</span>
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">TRACE_LOG.SH</span>
              </div>
              <span className="font-mono text-[9px] text-[#8c909f] font-black italic opacity-40">L: 4410 | C: 12</span>
            </header>
            <div className="flex-1 p-8 font-mono text-[12px] text-[#8c909f] overflow-y-auto space-y-3 custom-scrollbar relative z-10">
              <p className="italic"><span className="text-[#ffb4ab] font-black">[CRITICAL]</span> Thread 0x14A failed at HardDrive address 0x0021A</p>
              <p className="italic"><span className="text-[#ffb4ab] font-black">[CRITICAL]</span> Buffer overflow in subsystem NeuralMesh</p>
              <p className="italic"><span className="text-[#e1e2ec] font-black opacity-40">[RETRY]</span> Attempting auto-relink on Cluster 4... FAILED</p>
              <p className="italic"><span className="text-[#ffb4ab] font-black">[CRITICAL]</span> Emergency shutdown protocol bypassed by system override</p>
              <p className="italic"><span className="text-[#e1e2ec] font-black opacity-40">[INFO]</span> Cold restart requested by root...</p>
              <p className="animate-pulse text-[#ffb4ab] font-black text-xl italic mt-4">_</p>
            </div>
            {/* Scanline effect for Terminal */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-20" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 2px' }}></div>
          </div>

          {/* Action Cluster */}
          <div className="flex flex-col md:flex-row gap-6 w-full pt-4">
            <button className="flex-1 h-16 bg-[#ffb4ab] text-[#690005] rounded-2xl font-mono text-[12px] font-black uppercase tracking-[0.2em] italic hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_50px_-10px_rgba(255,180,171,0.4)] flex items-center justify-center gap-4 group">
              <span className="material-symbols-outlined text-[24px] group-hover:rotate-180 transition-transform duration-700">refresh</span>
              ATTEMPT_SYSTEM_RECOVERY
            </button>
            <button className="flex-1 h-16 border-2 border-[#424754] bg-[#1d2027]/50 text-[#e1e2ec] rounded-2xl font-mono text-[12px] font-black uppercase tracking-[0.2em] italic hover:bg-[#1d2027] transition-all flex items-center justify-center gap-4">
              <span className="material-symbols-outlined text-[24px]">cancel</span>
              ABORT_SESSION
            </button>
          </div>
        </div>
      </main>

      {/* HUD Corner Accents */}
      <div className="fixed inset-0 pointer-events-none z-50 p-8 opacity-20">
        <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-[#ffb4ab]"></div>
        <div className="absolute top-8 right-8 w-12 h-12 border-t-4 border-r-4 border-[#ffb4ab]"></div>
        <div className="absolute bottom-8 left-8 w-12 h-12 border-b-4 border-l-4 border-[#ffb4ab]"></div>
        <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-[#ffb4ab]"></div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #424754;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

export default CriticalSystemErrorEngineeringOS_c7c90b;
