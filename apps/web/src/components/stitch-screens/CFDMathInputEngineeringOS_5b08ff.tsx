'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const CFDMathInputEngineeringOS_5b08ff = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#4d8eff] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
          <h1 className="font-mono text-[14px] font-black text-[#4d8eff] tracking-tighter uppercase italic">ANTIGRAVITY_OS // CFD_CORE</h1>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_10px_#4cd7f6]"></div>
            <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic">LIVE_KERN_STABILITY: 99.8%</span>
          </div>
          <div className="bg-[#0b0e15] px-4 py-1.5 border border-[#424754]/50 rounded-xl">
            <span className="font-mono text-[10px] text-[#adc6ff] font-black italic uppercase tracking-widest">GPU: 94% | SIM: ACTIVE</span>
          </div>
        </div>
      </header>

      {/* Main Container Shell */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/50 flex flex-col hidden md:flex shrink-0 z-20 shadow-2xl">
          <div className="p-8">
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">SYSTEM_CORE</span>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'Projects', icon: 'folder_open', active: false },
              { label: 'Simulations', icon: 'model_training', active: true },
              { label: 'AI Agents', icon: 'smart_toy', active: false },
              { label: 'Digital Twin', icon: 'precision_manufacturing', active: false },
              { label: 'Manufacturing', icon: 'factory', active: false },
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

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden bg-[#10131a] relative">
          {/* Equation Terminal Bar (Persistent) */}
          <section className="bg-[#1d2027]/80 backdrop-blur-2xl border-b border-[#424754]/50 px-8 py-4 flex items-center justify-between shadow-2xl z-30">
            <div className="flex items-center gap-8">
              <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">GOVERNING_EQ:</span>
              <div className="bg-[#0b0e15] px-6 py-3 rounded-2xl border-2 border-[#424754]/50 font-mono text-[13px] font-black italic tracking-tighter flex items-center gap-8 shadow-inner">
                <span className="text-[#4cd7f6]">∂ρ/∂t + ∇ · (ρu) = 0</span>
                <div className="w-px h-6 bg-[#424754]/50"></div>
                <span className="text-[#adc6ff]">ρ(∂u/∂t + u · ∇u) = -∇p + μ∇²u + f</span>
              </div>
            </div>
            <button className="bg-[#4d8eff] text-[#002e6a] px-8 py-3 rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest italic shadow-[0_10px_20px_-5px_rgba(77,142,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group/exec">
              <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform duration-500">play_arrow</span>
              EXECUTE_SOLVER
            </button>
          </section>

          {/* Grid LayoutGrid */}
          <div className="flex-1 p-8 grid grid-cols-12 gap-6 overflow-y-auto custom-scrollbar">
            {/* Left Column: Properties & Input */}
            <section className="col-span-12 lg:col-span-4 space-y-6">
              {/* Fluid Properties Panel */}
              <div className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] overflow-hidden shadow-2xl transition-all hover:border-[#adc6ff]/30 group/props">
                <header className="h-12 bg-[#0b0e15]/50 px-8 flex items-center justify-between border-b border-[#424754]/50">
                  <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.3em] italic">FLUID_PROPERTIES</span>
                  <span className="material-symbols-outlined text-[#8c909f] text-[18px]">settings</span>
                </header>
                <div className="p-8 space-y-8">
                  {[
                    { label: 'DENSITY (ρ) [kg/m³]', value: '1.225' },
                    { label: 'VISCOSITY (μ) [Pa·s]', value: '1.789e-5' },
                  ].map((field) => (
                    <div key={field.label} className="space-y-3">
                      <label className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50 ml-4">{field.label}</label>
                      <input 
                        className="w-full bg-[#0b0e15] border-2 border-[#424754]/50 rounded-2xl p-4 font-mono text-[13px] font-black italic text-[#4cd7f6] focus:border-[#4cd7f6] focus:ring-4 focus:ring-[#4cd7f6]/10 outline-none transition-all shadow-inner" 
                        type="text" 
                        defaultValue={field.value} 
                      />
                    </div>
                  ))}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'INLET VEL (U)', value: '45.0' },
                      { label: 'MACH NO (Ma)', value: '0.13' },
                    ].map((field) => (
                      <div key={field.label} className="space-y-3">
                        <label className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50 ml-4">{field.label}</label>
                        <input 
                          className="w-full bg-[#0b0e15] border-2 border-[#424754]/50 rounded-2xl p-4 font-mono text-[13px] font-black italic text-[#4cd7f6] focus:border-[#4cd7f6] focus:ring-4 focus:ring-[#4cd7f6]/10 outline-none transition-all shadow-inner" 
                          type="text" 
                          defaultValue={field.value} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Numerical Stability Panel */}
              <div className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] overflow-hidden shadow-2xl transition-all hover:border-[#4cd7f6]/30 group/stability">
                <header className="h-12 bg-[#0b0e15]/50 px-8 flex items-center justify-between border-b border-[#424754]/50">
                  <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.3em] italic">NUMERICAL_STABILITY</span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-[#4cd7f6] rounded-full animate-pulse shadow-[0_0_8px_#4cd7f6]"></div>
                    <div className="w-2 h-2 bg-[#4cd7f6] rounded-full opacity-30"></div>
                  </div>
                </header>
                <div className="p-8 space-y-6">
                  {[
                    { label: 'Courant Number (CFL)', value: '0.42 [SAFE]', color: 'text-[#4cd7f6]' },
                    { label: 'Peclet Number (Pe)', value: '124.8', color: 'text-[#e1e2ec]' },
                    { label: 'Grid Orthogonality', value: '0.98', color: 'text-[#e1e2ec]' },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center border-b-2 border-[#424754]/20 pb-4">
                      <span className="font-mono text-[11px] text-[#8c909f] font-black italic uppercase opacity-60">{row.label}</span>
                      <span className={`font-mono text-[11px] font-black italic uppercase ${row.color}`}>{row.value}</span>
                    </div>
                  ))}
                  <div className="pt-4 flex items-center gap-6">
                    <div className="flex-1 bg-[#0b0e15] h-2 rounded-full overflow-hidden shadow-inner border border-[#424754]/20">
                      <div className="bg-[#4cd7f6] h-full w-[88%] shadow-[0_0_15px_#4cd7f6] transition-all duration-1000"></div>
                    </div>
                    <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic animate-pulse">STABLE</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Middle Column: Visualizations & Models */}
            <section className="col-span-12 lg:col-span-8 space-y-6">
              {/* Bento Grid: Model Visualizations */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-fit">
                {[
                  { id: 'MODEL_K_EPSILON', desc: 'Robust, two-equation model for high Reynolds number industrial flows.', img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuBUmwb4KWqFQHNHVTbnKAdiJMvVQY3Yznj3oBJNlrVa9ODHKogiXcNwnnL365HRGToq8HB8X7A-U-egqnicI6Pknb1gtyOdGZgzfgxJvt2sXtXB4tW0L2yC6CAhTQIDYhDb5GHXlrFJSjBDJruG2N3Lsfm_6prGeVvSQhfQBMN2fhP0IXRw90b9NJJbc2FuXMhLLIN8ssiuOJqbFSOLC3zOoS6iDoWt0aQP5mJTQZiXZH6DEurKNNl4UlHnHTRBSIoRnFErXN85Sw0B', active: true },
                  { id: 'LARGE_EDDY_SIM', desc: 'Captures unsteady flow structures with filtered sub-grid scale modeling.', img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuCe1Kjp_KY70ywrP5no7afSQpE8EDSFYfdTofqH-5TfXC4V-myz69O4edCfb2Lu2nwli1XF1GD1KG2BSkE63A-KJE9u8fu_dbd-DdpIFqrN0rmW4kcxuSrV_8ii9PNf7oE7czmxWW46BXddzGAIdZr4nRUmQ-kvGDiFEkYNLR9YIm9pqn4p15pZvkU29yalT7Ne-q3w6nRHJFw4OC9k3Pwp82btEZ6R2K9vEA46OXOtw4_MHd2lvIHTIcX1W-07OW-Tz1M1vQ_8gSL0', active: false },
                  { id: 'DIRECT_NUM_SIM', desc: 'Full resolution of Navier-Stokes without empirical modeling. Extreme CPU cost.', img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuATb-GYG221ew-aOaTkuMxDBIoc_1n0MeTLUK3ivVl4nZ3VnJyvp70WBcY-sLr2vuXa4dUiUGUNYY7HdXRxggCOs-mszAagSpjCBQjv7aubdZFmEYumUSh1nqQH536k8UPMJCIkuUNeikWmxeCM6ljNlRhMO1VpDSYuME_X4rRE-ICp8QTXSpHCmzdhZFCONJpktNHFC5Hr_8j1I7Letl0L3c8BymTuh5QFErV02k5yMFNq1CjNB91EqS1-W8ar9P5Rmy5QaZ70gTRJ', active: false },
                ].map((model) => (
                  <div key={model.id} className={`bg-[#1d2027] border-2 rounded-[40px] overflow-hidden shadow-2xl transition-all group/card flex flex-col h-[280px] ${model.active ? 'border-[#4cd7f6] scale-105 z-10' : 'border-[#424754]/50 opacity-60 hover:opacity-100 hover:border-[#adc6ff]/30'}`}>
                    <header className={`h-10 px-6 flex items-center justify-between ${model.active ? 'bg-[#4cd7f6]/10' : 'bg-[#0b0e15]/30'}`}>
                      <span className={`font-mono text-[9px] font-black uppercase tracking-[0.2em] italic ${model.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{model.id}</span>
                      {model.active && <span className="material-symbols-outlined text-[#4cd7f6] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>}
                    </header>
                    <div className="relative flex-1 overflow-hidden">
                      <img 
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[5000ms] group-hover/card:scale-110 ${model.active ? 'opacity-70' : 'opacity-30 grayscale'}`} 
                        src={model.img} 
                        alt={model.id} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1d2027] via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className={`font-mono text-[10px] font-black italic leading-relaxed ${model.active ? 'text-[#e1e2ec]' : 'text-[#8c909f]'}`}>{model.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Equation Editor Area */}
              <div className="bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[50px] p-12 space-y-12 relative overflow-hidden shadow-2xl group/editor">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4d8eff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                
                <header className="absolute top-8 right-12 flex gap-4">
                  <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic bg-[#1d2027] px-3 py-1.5 rounded-xl border border-[#424754]/50">EDITOR_MODE: SYMBOLIC</span>
                  <span className="font-mono text-[9px] text-[#4d8eff] font-black uppercase tracking-widest italic bg-[#4d8eff]/10 px-3 py-1.5 rounded-xl border border-[#4d8eff]/30 animate-pulse">LATEX_SYNCED</span>
                </header>

                <div className="space-y-16 py-10 text-center relative z-10">
                  <div className="space-y-6">
                    <h3 className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.4em] italic opacity-50">CONTINUITY_EQUATION</h3>
                    <div className="font-mono text-3xl font-black text-[#e1e2ec] tracking-widest bg-[#1d2027]/80 backdrop-blur-xl py-8 rounded-[40px] border-2 border-[#424754]/50 inline-block px-20 shadow-2xl transition-all hover:border-[#4cd7f6]/30">
                      \frac{"{"}\partial \rho{"}"}{"{"}\partial t{"}"} + \nabla \cdot (\rho \mathbf{"{"}u{"}"}) = 0
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.4em] italic opacity-50">MOMENTUM_CONSERVATION</h3>
                    <div className="font-mono text-3xl font-black text-[#4cd7f6] tracking-widest bg-[#1d2027]/80 backdrop-blur-xl py-8 rounded-[40px] border-2 border-[#4cd7f6]/30 inline-block px-20 shadow-[0_0_50px_rgba(76,215,246,0.1)] transition-all hover:scale-105">
                      \rho \left( \frac{"{"}\partial \mathbf{"{"}u{"}"}{"}"}{"{"}\partial t{"}"} + \mathbf{"{"}u{"}"} \cdot \nabla \mathbf{"{"}u{"}"} \right) = -\nabla p + \mu \nabla^2 \mathbf{"{"}u{"}"} + \mathbf{"{"}f{"}"}
                    </div>
                  </div>
                </div>

                {/* Term Operators */}
                <div className="grid grid-cols-4 gap-4 relative z-10 pt-8">
                  {[
                    { sym: '∂/∂t', label: 'UNSTEADY' },
                    { sym: 'u · ∇u', label: 'ADVECTION' },
                    { sym: '∇p', label: 'PRESSURE' },
                    { sym: 'μ∇²u', label: 'DIFFUSION' },
                  ].map((op) => (
                    <button key={op.label} className="bg-[#1d2027] border-2 border-[#424754]/50 p-6 rounded-[30px] text-center shadow-xl transition-all hover:bg-[#4d8eff]/10 hover:border-[#4d8eff]/50 hover:scale-105 active:scale-95 group/op">
                      <span className="font-mono text-lg font-black text-[#4d8eff] italic tracking-tighter group-hover/op:scale-110 transition-transform block">{op.sym}</span>
                      <p className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic mt-2 opacity-50">{op.label}</p>
                    </button>
                  ))}
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

export default CFDMathInputEngineeringOS_5b08ff;
