'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const PhysicsDerivationProofsEngineeringOS_b02f73 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const constants = [
    { symbol: 'c', name: 'Gauge of Light', value: '299,792,458' },
    { symbol: 'G', name: 'Gravitational', value: '6.674e-11' },
    { symbol: 'μ₀', name: 'Permeability', value: '1.256e-6' },
  ];

  const variables = [
    { label: 'TEMP_K', value: '273.15' },
    { label: 'PRESS_PA', value: '101,325' },
    { label: 'DENSITY', value: '1.225' },
    { label: 'VISCOSITY', value: '1.78e-5' },
  ];

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 h-[48px] bg-[#10131a]/80 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 shadow-[0_0_20px_rgba(173,198,255,0.05)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff]">deployed_code</span>
          <h1 className="font-mono text-[14px] font-black text-[#adc6ff] uppercase tracking-tighter italic">ENGINEERING_OS</h1>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 bg-[#0b0e15] px-4 py-1.5 rounded-full border border-[#424754]/50">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]"></span>
            <span className="font-mono text-[10px] text-[#adc6ff] font-black tracking-widest uppercase">GPU: 94% | SIM: ACTIVE</span>
          </div>
          <div className="hidden md:flex gap-6 font-mono text-[10px] font-black tracking-widest text-[#8c909f]">
            <span className="hover:text-[#e1e2ec] cursor-pointer transition-colors uppercase">Terminal</span>
            <span className="hover:text-[#e1e2ec] cursor-pointer transition-colors uppercase">Network</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-[48px] overflow-hidden">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/30 hidden lg:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-8">
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest opacity-50 italic">SYSTEM_CORE</span>
          </div>
          <nav className="flex flex-col space-y-1">
            {[
              { label: 'Projects', icon: 'folder_open', active: false },
              { label: 'Simulations', icon: 'model_training', active: true },
              { label: 'AI Agents', icon: 'smart_toy', active: false },
              { label: 'Digital Twin', icon: 'precision_manufacturing', active: false },
              { label: 'Manufacturing', icon: 'factory', active: false },
            ].map((item) => (
              <div 
                key={item.label}
                className={`flex items-center gap-4 px-6 py-3.5 transition-all cursor-pointer ${
                  item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-l-2 border-[#4cd7f6] font-bold shadow-[inset_4px_0_10px_rgba(76,215,246,0.1)]' : 'text-[#8c909f] hover:bg-[#1d2027] hover:text-[#e1e2ec]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
                <span className="font-mono text-[11px] uppercase tracking-tight">{item.label}</span>
              </div>
            ))}
          </nav>
          <div className="mt-auto p-6 border-t border-[#424754]/30">
            <div className="bg-[#1d2027] p-4 rounded-xl border border-[#424754]/30">
              <p className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.2em] mb-2.5 italic">Kernel Status</p>
              <div className="h-1 bg-[#0b0e15] rounded-full overflow-hidden border border-[#424754]/20">
                <div className="h-full bg-[#4cd7f6] w-2/3 shadow-[0_0_8px_#4cd7f6]"></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Workspace: Whiteboard Area */}
        <main className="flex-1 overflow-y-auto p-8 lg:p-12 custom-scrollbar bg-[#10131a] relative group">
          {/* HUD Watermark */}
          <div className="fixed top-20 right-10 opacity-20 pointer-events-none z-0">
            <span className="font-mono text-[10px] text-[#8c909f] font-black block text-right tracking-[0.3em] uppercase">SYMB_ENGINE_V4.2</span>
            <span className="font-mono text-[10px] text-[#8c909f] font-black block text-right tracking-[0.3em] uppercase mt-1">COORDINATE: [34.2, -118.4, 0.003]</span>
          </div>

          {/* Grid Background Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #4cd7f6 1px, transparent 1px), linear-gradient(to bottom, #4cd7f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          <div className="relative z-10 max-w-5xl mx-auto space-y-12 pb-20">
            {/* Step 01: Mass Conservation */}
            <section className="relative group/step">
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[11px] text-[#4cd7f6] font-black uppercase tracking-[0.2em] italic">STEP 01</span>
                <div className="h-[1px] flex-1 bg-[#424754]/30"></div>
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">MASS_CONSERVATION</span>
              </div>
              <div className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 p-10 rounded-2xl shadow-2xl relative overflow-hidden group-hover/step:border-[#4cd7f6]/30 transition-all">
                <div className="absolute top-0 left-0 w-[4px] h-full bg-[#adc6ff]"></div>
                <div className="font-mono text-4xl font-black text-[#e1e2ec] mb-8 text-center italic tracking-tight">
                  {"\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\mathbf{u}) = 0"}
                </div>
                <div className="flex items-center gap-4 justify-center">
                  <span className="px-4 py-1.5 bg-[#0b0e15] border border-[#424754]/50 rounded-lg font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-widest italic shadow-inner">Incompressible Flow</span>
                  <span className="px-4 py-1.5 bg-[#0b0e15] border border-[#424754]/50 rounded-lg font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic shadow-inner">Eulerian Frame</span>
                </div>
              </div>
            </section>

            {/* Step 02: Momentum Flux */}
            <section className="relative group/step">
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[11px] text-[#4cd7f6] font-black uppercase tracking-[0.2em] italic">STEP 02</span>
                <div className="h-[1px] flex-1 bg-[#424754]/30"></div>
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">MOMENTUM_FLUX_TENSOR</span>
              </div>
              <div className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 p-10 rounded-2xl shadow-2xl relative overflow-hidden group-hover/step:border-[#4cd7f6]/30 transition-all">
                <div className="absolute top-0 left-0 w-[4px] h-full bg-[#4d8eff]"></div>
                <div className="font-mono text-2xl font-black text-[#e1e2ec] mb-8 text-center italic leading-relaxed tracking-tighter">
                  {"\\rho \\left( \\frac{\\partial \\mathbf{u}}{\\partial t} + \\mathbf{u} \\cdot \\nabla \\mathbf{u} \\right) = -\\nabla p + \\mu \\nabla^2 \\mathbf{u} + \\mathbf{f}"}
                </div>
                <div className="p-5 bg-[#0b0e15]/50 border border-[#424754]/50 rounded-xl flex items-center gap-4 shadow-inner">
                  <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">info</span>
                  <span className="font-mono text-[11px] text-[#8c909f] font-bold uppercase tracking-tight leading-relaxed">
                    External force vector {"$\\mathbf{f}$"} assumed constant in localized gravity field.
                  </span>
                </div>
              </div>
            </section>

            {/* AI Suggestion */}
            <section className="relative group/step">
              <div className="flex items-center gap-4 mb-3">
                <span className="font-mono text-[11px] text-[#a78bfa] font-black uppercase tracking-[0.2em] italic">AI_SUGGESTION</span>
                <div className="h-[1px] flex-1 bg-[#a78bfa]/20"></div>
                <span className="font-mono text-[10px] text-[#a78bfa] font-black uppercase tracking-widest italic opacity-50">SYMBOLIC_PROOF</span>
              </div>
              <div className="bg-[#19112a]/40 backdrop-blur-xl border border-[#a78bfa]/30 p-10 rounded-2xl shadow-[0_0_40px_rgba(167,139,250,0.1)] relative overflow-hidden group-hover/step:border-[#a78bfa]/60 transition-all">
                <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a78bfa] opacity-20"></span>
                  <span className="relative inline-flex rounded-full h-8 w-8 bg-[#a78bfa]/20 border border-[#a78bfa]/40 items-center justify-center">
                    <span className="material-symbols-outlined text-[16px] text-[#a78bfa] font-black">auto_awesome</span>
                  </span>
                </div>
                <h4 className="font-mono text-[10px] text-[#a78bfa] font-black uppercase tracking-widest mb-6 italic">PROPOSED SIMPLIFICATION</h4>
                <div className="font-mono text-2xl font-black text-[#e1e2ec] mb-10 text-center italic tracking-tight">
                  {"\\nabla \\cdot \\mathbf{T} = \\eta \\Delta \\mathbf{v} - \\text{grad} \\, p"}
                </div>
                <div className="space-y-3">
                  {[
                    'Apply Reynolds Transport Theorem to Volumetric Integral',
                    'Cancel viscous terms for high Mach number regime'
                  ].map(task => (
                    <div key={task} className="flex items-center gap-4 p-3 bg-[#10131a]/60 border border-[#a78bfa]/10 rounded-xl hover:bg-[#a78bfa]/10 hover:border-[#a78bfa]/30 transition-all cursor-pointer group/task">
                      <span className="material-symbols-outlined text-[#a78bfa] text-[20px] font-black group-hover/task:scale-110 transition-transform">check_circle</span>
                      <span className="font-mono text-[11px] text-[#e1e2ec] font-bold uppercase tracking-tight">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Right Side Panel: Inspector */}
        <aside className="w-80 bg-[#1d2027]/50 backdrop-blur-xl border-l border-[#424754]/30 flex flex-col shrink-0 z-40">
          <header className="h-[48px] border-b border-[#424754]/30 flex items-center justify-between px-6 shrink-0">
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">Inspector</span>
            <span className="material-symbols-outlined text-[#8c909f] text-[18px] cursor-pointer hover:text-[#adc6ff] transition-colors">settings</span>
          </header>
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-8">
            {/* Active Constants */}
            <section>
              <h3 className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">numbers</span>
                ACTIVE_CONSTANTS
              </h3>
              <div className="space-y-2">
                {constants.map((c) => (
                  <div key={c.symbol} className="bg-[#0b0e15]/50 border border-[#424754]/30 p-4 rounded-xl flex justify-between items-center group hover:bg-[#10131a] transition-all border-l-2 border-l-[#adc6ff]/30 hover:border-l-[#adc6ff]">
                    <div>
                      <span className="font-mono text-[14px] text-[#4cd7f6] font-black italic">{c.symbol}</span>
                      <span className="font-mono text-[9px] text-[#8c909f] font-bold uppercase tracking-widest ml-3 opacity-60">{c.name}</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#e1e2ec] font-black tracking-tighter">{c.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* System Variables */}
            <section>
              <h3 className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]">variables</span>
                SYSTEM_VARIABLES
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {variables.map((v) => (
                  <div key={v.label} className="bg-[#0b0e15]/50 border border-[#424754]/30 p-4 rounded-xl flex flex-col gap-1 hover:border-[#adc6ff]/30 transition-all shadow-inner">
                    <span className="font-mono text-[8px] text-[#8c909f] font-black uppercase tracking-widest italic">{v.label}</span>
                    <span className="font-mono text-[14px] text-[#adc6ff] font-black italic tracking-tighter">{v.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Dependency Map Mini-view */}
            <section className="bg-[#0b0e15]/50 border border-[#424754]/30 p-4 rounded-2xl shadow-inner group/map">
              <p className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.2em] mb-4 italic">DEPENDENCY_MAP</p>
              <div className="h-32 w-full relative overflow-hidden rounded-xl border border-[#424754]/50">
                <img 
                  className="w-full h-full object-cover opacity-20 grayscale group-hover/map:scale-110 group-hover/map:opacity-40 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDkKY6G27LbvKyxa7trHUHi9Ydrm_ZJ4kfnWyNpmgWHUWb7So1X64igTNSdZgQ4afnQ_CImU3D9B9zJ2wG5_ejcn4IuckmohBjQTwSwy-M3JWGVpvK93BHCO0qBUg5MmS9UAf7LWaf1cYlyPhSJb3djek90yHpmZJ8DZJ-y2Rm2gZbISB2hQgEgbw2_66RXk7Owxo0ZBsguXuRlHSAIekncYp7sQzRDuEWo7RHc0X3WExNlfkZmMQB0aeZGsq9cg8UFcHNQBaNhn9Sj" 
                  alt="Dependency Map" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#10131a]/40 backdrop-blur-[2px]">
                  <span className="bg-[#1d2027] px-4 py-1.5 border border-[#424754]/50 font-mono text-[9px] text-[#adc6ff] font-black uppercase tracking-widest italic shadow-2xl rounded-full">Render Graph Active</span>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Actions */}
          <footer className="p-6 border-t border-[#424754]/30 space-y-3 shrink-0">
            <button className="w-full py-4 bg-[#4cd7f6] text-[#003640] font-mono text-[11px] font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_-5px_rgba(76,215,246,0.4)]">
              <span className="material-symbols-outlined text-[20px]">terminal</span>
              EXECUTE_SOLVER
            </button>
            <button className="w-full py-4 bg-transparent border border-[#424754]/50 text-[#8c909f] font-mono text-[11px] font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 hover:bg-[#424754]/20 hover:text-[#e1e2ec] transition-all">
              <span className="material-symbols-outlined text-[20px]">ios_share</span>
              EXPORT_LATEX
            </button>
          </footer>
        </aside>
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

export default PhysicsDerivationProofsEngineeringOS_b02f73;
