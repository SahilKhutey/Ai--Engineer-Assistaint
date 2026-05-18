'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const OptimizationMathInputEngineeringOS_257ffe = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#4d8eff] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          <h1 className="font-mono text-[14px] font-black text-[#4d8eff] tracking-tighter uppercase italic">NEURAL_OS_v1.0</h1>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_10px_#4cd7f6]"></div>
            <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic">SYSTEM_OPTIMAL</span>
          </div>
          <button className="material-symbols-outlined text-[#8c909f] hover:text-[#e1e2ec] transition-colors p-2 rounded-xl">settings_input_component</button>
        </div>
      </header>

      {/* Main Container Shell */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/50 flex flex-col hidden md:flex shrink-0 z-20 shadow-2xl">
          <div className="p-8">
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">DOMAIN_ORBITAL</span>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'STRUCTURAL', icon: 'LayoutGrid', active: true },
              { label: 'FLUID_DYNAMICS', icon: 'Wind', active: false },
              { label: 'THERMAL_SYST', icon: 'Thermometer', active: false },
              { label: 'ELECTROMAGNETIC', icon: 'electric_bolt', active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest italic transition-all group ${
                  item.active 
                    ? 'bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/30 shadow-lg shadow-[#4cd7f6]/5' 
                    : 'text-[#8c909f] hover:text-[#e1e2ec] hover:bg-[#1d2027]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] transition-transform group-hover:scale-110 ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Workspace Canvas */}
        <main className="flex-1 overflow-y-auto bg-[#10131a] relative p-8 space-y-8 custom-scrollbar">
          {/* Header Panel */}
          <section className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] p-8 flex justify-between items-center shadow-2xl transition-all hover:border-[#4d8eff]/30 group/header">
            <div>
              <h2 className="font-mono text-2xl font-black text-[#4d8eff] italic tracking-tighter uppercase">MULTI-OBJECTIVE OPTIMIZATION CONFIG</h2>
              <p className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic mt-2 opacity-50">CORE: GENETIC_ALGORITHM_V4 // SEED: 0x88FF21</p>
            </div>
            <button className="bg-[#4cd7f6] text-[#003640] px-10 py-4 rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest italic shadow-[0_15px_30px_-10px_rgba(76,215,246,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              EXECUTE_OPTIMIZATION
            </button>
          </section>

          <div className="grid grid-cols-12 gap-8 max-w-[1600px] mx-auto">
            {/* Left Column: Parameters & Constraints */}
            <section className="col-span-12 lg:col-span-4 flex flex-col gap-8">
              {/* Objective Sigma Panel */}
              <div className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] overflow-hidden shadow-2xl flex flex-col group/obj">
                <header className="h-12 px-8 bg-[#0b0e15]/50 flex items-center justify-between border-b border-[#424754]/50">
                  <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.3em] italic">OBJECTIVE_FUNCTIONS</span>
                  <span className="material-symbols-outlined text-[#8c909f] text-[20px] hover:text-[#4cd7f6] cursor-pointer transition-colors">add_circle</span>
                </header>
                <div className="p-8 flex flex-col gap-6">
                  {[
                    { label: 'Minimize2 Mass', sym: 'f(x)₁', val: '∫ (ρ * A(x)) dx', color: 'text-[#4cd7f6]' },
                    { label: 'Maximize Strength', sym: 'f(x)₂', val: 'max(σ_yield / σ_von_mises)', color: 'text-[#ffb786]' },
                  ].map((obj) => (
                    <div key={obj.label} className="p-6 bg-[#0b0e15] rounded-[30px] border-2 border-[#424754]/50 shadow-inner group-hover/obj:border-[#4d8eff]/20 transition-all">
                      <div className="flex justify-between items-center mb-4">
                        <span className={`font-mono text-[11px] font-black italic uppercase ${obj.color}`}>{obj.label}</span>
                        <span className="font-mono text-[10px] text-[#8c909f] font-black italic opacity-40">{obj.sym}</span>
                      </div>
                      <input 
                        className="w-full bg-transparent border-none focus:ring-0 font-mono text-[13px] text-[#e1e2ec] p-0 font-black italic tracking-tight" 
                        type="text" 
                        defaultValue={obj.val} 
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Boundary Constraints */}
              <div className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] overflow-hidden shadow-2xl group/const">
                <header className="h-12 px-8 bg-[#0b0e15]/50 flex items-center border-b border-[#424754]/50">
                  <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.3em] italic">BOUNDARY_CONSTRAINTS</span>
                </header>
                <div className="p-8 space-y-6">
                  {[
                    { label: 'Stress Limit', val: '< 250 MPa', color: 'text-[#4cd7f6]' },
                    { label: 'Cost Ceiling', val: '$12.5k / unit', color: 'text-[#4cd7f6]' },
                    { label: 'Safety Factor', val: '> 1.5', color: 'text-[#ffb786]' },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center border-b-2 border-[#424754]/20 pb-4">
                      <span className="font-mono text-[11px] text-[#8c909f] font-black italic uppercase opacity-60">{row.label}</span>
                      <span className={`font-mono text-[11px] font-black italic uppercase tracking-widest ${row.color}`}>{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GA Engine Params */}
              <div className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] overflow-hidden shadow-2xl group/ga">
                <header className="h-12 px-8 bg-[#0b0e15]/50 flex items-center border-b border-[#424754]/50">
                  <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.3em] italic">GA_ENGINE_PARAMS</span>
                </header>
                <div className="p-8 grid grid-cols-2 gap-6">
                  {[
                    { l: 'POPULATION', v: '5000' },
                    { l: 'MUTATION_RATE', v: '0.025' },
                    { l: 'GENERATIONS', v: '250' },
                    { l: 'CROSSOVER_PROB', v: '0.85' },
                  ].map((param) => (
                    <div key={param.l} className="space-y-3">
                      <label className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50 ml-4">{param.l}</label>
                      <input 
                        className="w-full bg-[#0b0e15] border-2 border-[#424754]/50 rounded-2xl p-4 font-mono text-[13px] font-black italic text-[#4cd7f6] focus:border-[#4cd7f6] focus:ring-4 focus:ring-[#4cd7f6]/10 outline-none transition-all shadow-inner" 
                        type="text" 
                        defaultValue={param.v} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Right Column: Visualization & Reasoning */}
            <section className="col-span-12 lg:col-span-8 flex flex-col gap-8">
              {/* Pareto Front Visualization */}
              <div className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[50px] flex-1 min-h-[450px] flex flex-col overflow-hidden shadow-2xl group/pareto transition-all hover:border-[#4cd7f6]/30">
                <header className="h-12 px-8 bg-[#0b0e15]/50 flex items-center justify-between border-b border-[#424754]/50">
                  <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.3em] italic">PARETO_FRONT_FRONTIER_ANALYSIS</span>
                  <div className="flex gap-4">
                    <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] text-[18px]">Maximize2</button>
                    <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] text-[18px]">more_vert</button>
                  </div>
                </header>
                <div className="flex-1 p-12 relative overflow-hidden flex items-center justify-center">
                  {/* Chart Grid */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4cd7f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                  
                  <div className="w-full h-full relative z-10 border-l-2 border-b-2 border-[#424754]/50 flex items-end p-8 animate-in zoom-in duration-1000">
                    {/* Curved Plot Area */}
                    <div className="w-full h-full flex items-end relative">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200">
                        <path 
                          className="drop-shadow-[0_0_20px_rgba(76,215,246,0.4)]" 
                          d="M 50 180 Q 200 170 350 20" 
                          fill="none" 
                          stroke="#4cd7f6" 
                          strokeWidth="4" 
                          strokeLinecap="round" 
                        />
                        {[
                          { x: 120, y: 165 },
                          { x: 200, y: 130 },
                          { x: 280, y: 70, best: true }
                        ].map((pt, i) => (
                          <g key={i}>
                            <circle 
                              cx={pt.x} 
                              cy={pt.y} 
                              r={pt.best ? "8" : "5"} 
                              className={`${pt.best ? 'fill-[#4cd7f6] animate-pulse drop-shadow-[0_0_15px_#4cd7f6]' : 'fill-[#adc6ff] opacity-60'}`} 
                            />
                            {pt.best && (
                              <text x={pt.x + 15} y={pt.y - 15} fill="#4cd7f6" className="font-mono text-[10px] font-black italic uppercase tracking-widest">BEST_TRADE_OFF</text>
                            )}
                          </g>
                        ))}
                      </svg>
                      {/* Axis Labels */}
                      <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">MASS [KG] →</span>
                      <span className="absolute top-1/2 -left-20 -rotate-90 -translate-y-1/2 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">STRENGTH [N] →</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Reasoning Panel */}
              <div className="bg-[#1d2027] border-2 border-l-[12px] border-[#424754]/50 border-l-[#4cd7f6] rounded-[40px] p-10 space-y-6 shadow-2xl group/reasoning transition-all hover:border-[#4cd7f6]/30">
                <header className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>Brain</span>
                  <span className="font-mono text-[12px] font-black text-[#e1e2ec] uppercase tracking-[0.3em] italic">NEURAL_REASONING_CORE</span>
                </header>
                <div className="space-y-4">
                  <p className="font-mono text-[11px] text-[#4cd7f6] font-black italic uppercase tracking-widest animate-pulse opacity-60">&gt; ANALYZING SYMBOLIC RELATIONS...</p>
                  <p className="font-mono text-[13px] text-[#e1e2ec] font-black italic leading-relaxed uppercase tracking-tighter">
                    Detected non-linear coupling between <span className="text-[#4cd7f6]">f(x)₁</span> and <span className="text-[#ffb786]">f(x)₂</span>. Suggesting a refinement to the Safety Factor constraint: Current limit of 1.5 might restrict global optima Search. Consider dynamic scaling based on local curvature.
                  </p>
                  <div className="p-8 bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[30px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-inner">
                    <span className="font-mono text-[11px] text-[#8c909f] font-black italic uppercase tracking-widest opacity-60">"Would you like to auto-adjust constraints for higher convergence rate?"</span>
                    <div className="flex gap-4 shrink-0">
                      <button className="px-8 py-3 bg-[#4cd7f6]/10 text-[#4cd7f6] border-2 border-[#4cd7f6]/30 rounded-2xl font-mono text-[10px] font-black uppercase tracking-widest italic hover:bg-[#4cd7f6]/20 transition-all">ACCEPT</button>
                      <button className="px-8 py-3 bg-[#0b0e15] border-2 border-[#424754]/50 text-[#8c909f] rounded-2xl font-mono text-[10px] font-black uppercase tracking-widest italic hover:text-[#e1e2ec] transition-all">IGNORE</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Global Polish: Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[101] bg-[#4cd7f6]/5 mix-blend-overlay opacity-10"></div>
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

export default OptimizationMathInputEngineeringOS_257ffe;
