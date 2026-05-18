'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const AntigravityOSSpec_7095c8 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#8b5cf6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#8b5cf6] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>policy</span>
          <h1 className="font-mono text-[14px] font-black text-[#8b5cf6] tracking-tighter uppercase italic">ANTIGRAVITY_OS // PRODUCT_SPECIFICATION</h1>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse shadow-[0_0_10px_#8b5cf6]"></div>
            <span className="font-mono text-[10px] text-[#8b5cf6] font-black uppercase tracking-widest italic">VERSION: 4.0.0_ALPHA</span>
          </div>
        </div>
      </header>

      {/* Main Container Shell */}
      <div className="flex-1 overflow-y-auto p-12 bg-[#10131a] relative custom-scrollbar">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8b5cf6 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        
        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          {/* Header Section */}
          <section className="text-center space-y-6">
            <div className="inline-block px-8 py-3 bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 rounded-full font-mono text-[12px] font-black text-[#8b5cf6] uppercase tracking-[0.4em] italic mb-4 animate-in fade-in slide-in-from-top duration-700">
              MISSION_MANIFESTO
            </div>
            <h2 className="text-7xl font-black tracking-tighter text-[#e1e2ec] italic uppercase drop-shadow-2xl animate-in fade-in slide-in-from-bottom duration-1000">
              Antigravity Engineering OS
            </h2>
            <p className="text-2xl font-mono font-black italic text-[#8c909f] max-w-3xl mx-auto leading-relaxed uppercase tracking-tight">
              AI-Native Engineering Intelligence Platform. A unified operating environment for CAD, simulation, and digital twin Activity.
            </p>
          </section>

          {/* Core Philosophy Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[50px] p-12 space-y-8 shadow-2xl hover:border-[#8b5cf6]/30 transition-all group">
              <header className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#8b5cf6] text-[32px]">Brain</span>
                <h3 className="font-mono text-[14px] font-black text-[#8b5cf6] uppercase tracking-[0.3em] italic">DESIGN_PHILOSOPHY</h3>
              </header>
              <div className="space-y-6">
                <div className="p-8 bg-[#0b0e15] border border-[#424754]/50 rounded-[30px] group-hover:border-[#8b5cf6]/20 transition-all">
                  <p className="font-mono text-xl font-black italic text-[#e1e2ec] leading-relaxed uppercase tracking-tighter">
                    "NASA Mission Control + Unreal Engine + Bloomberg Terminal."
                  </p>
                </div>
                <ul className="space-y-4">
                  {['Progressive depth', 'AI as copilot', 'Spatial interaction', 'Validation-first'].map((p) => (
                    <li key={p} className="flex items-center gap-4 group/item">
                      <div className="w-2 h-2 rounded-full bg-[#8b5cf6] group-hover/item:scale-150 transition-transform"></div>
                      <span className="font-mono text-[12px] font-black uppercase tracking-widest italic text-[#8c909f] group-hover/item:text-[#e1e2ec] transition-colors">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[50px] p-12 space-y-8 shadow-2xl hover:border-[#4cd7f6]/30 transition-all group">
              <header className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[32px]">palette</span>
                <h3 className="font-mono text-[14px] font-black text-[#4cd7f6] uppercase tracking-[0.3em] italic">VISUAL_IDENTITY</h3>
              </header>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { l: 'ACTIVE_SYS', c: 'bg-[#3B82F6]', hex: '#3B82F6' },
                  { l: 'SIM_ACTIVE', c: 'bg-[#06B6D4]', hex: '#06B6D4' },
                  { l: 'VALIDATED', c: 'bg-[#10B981]', hex: '#10B981' },
                  { l: 'AI_INTEL', c: 'bg-[#8B5CF6]', hex: '#8B5CF6' },
                  { l: 'AlertTriangle', c: 'bg-[#F59E0B]', hex: '#F59E0B' },
                  { l: 'CRITICAL', c: 'bg-[#EF4444]', hex: '#EF4444' },
                ].map((color) => (
                  <div key={color.l} className="flex items-center gap-4 p-4 bg-[#0b0e15] rounded-2xl border border-[#424754]/50 group-hover:border-[#4cd7f6]/20 transition-all">
                    <div className={`w-10 h-10 rounded-xl shadow-lg ${color.c}`}></div>
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] font-black text-[#8c909f] uppercase tracking-widest">{color.l}</span>
                      <span className="font-mono text-[11px] font-black text-[#e1e2ec]">{color.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Core Screens Generation Plan */}
          <section className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[60px] p-16 space-y-12 shadow-2xl hover:border-[#10B981]/30 transition-all group/manifest">
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-[#10B981] text-[48px]">grid_view</span>
                <h3 className="font-mono text-[20px] font-black text-[#10B981] uppercase tracking-[0.4em] italic">CORE_ARCHITECTURE_WORKSPACE</h3>
              </div>
              <div className="bg-[#10B981]/10 px-6 py-2 rounded-full border border-[#10B981]/30 font-mono text-[10px] font-black text-[#10B981] animate-pulse uppercase tracking-[0.2em] italic">
                READY_FOR_DEPLOYMENT
              </div>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: 'Mission Control Dashboard', d: 'Global overview, main viewport, and AI Terminal bar.', icon: 'dashboard' },
                { t: 'Structural Analysis', d: 'FEM stress heatmaps, deformation fields, and AI summary.', icon: 'LayoutGrid' },
                { t: 'Digital Twin Terminal', d: 'Real-time telemetry, sensor topology, and maintenance.', icon: 'settings_input_component' },
                { t: 'Optimization Workspace', d: 'Trade-off exploration, NSGA-II, and comparison.', icon: 'trending_up' },
                { t: 'Agent Orchestration', d: 'Specialized AI engineering agents (Structural, CFD).', icon: 'smart_toy' },
                { t: 'Mathematical Truth', d: 'Numerical stream validation and solver behavior logs.', icon: 'Sigma' },
              ].map((screen, idx) => (
                <div key={screen.t} className="bg-[#0b0e15] border-2 border-[#424754]/50 p-8 rounded-[40px] space-y-6 hover:border-[#10B981]/50 hover:-translate-y-2 transition-all shadow-xl group/card">
                  <div className="w-16 h-16 rounded-[20px] bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#10B981] text-[32px] group-hover/card:scale-110 transition-transform">{screen.icon}</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-mono text-lg font-black text-[#e1e2ec] italic uppercase tracking-tighter leading-tight group-hover/card:text-[#10B981] transition-colors">{screen.t}</h4>
                    <p className="font-mono text-[11px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60 leading-relaxed">{screen.d}</p>
                  </div>
                  <div className="pt-4 flex justify-between items-center opacity-30 group-hover/card:opacity-100 transition-opacity">
                    <span className="font-mono text-[9px] text-[#10B981] font-black">PHASE_0{idx + 1}</span>
                    <span className="material-symbols-outlined text-[#10B981] text-[18px]">arrow_forward</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Global Polish: Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[101] bg-[#8b5cf6]/5 mix-blend-overlay opacity-10"></div>
      <div className="fixed inset-0 pointer-events-none z-[102] opacity-[0.02]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>

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

export default AntigravityOSSpec_7095c8;
