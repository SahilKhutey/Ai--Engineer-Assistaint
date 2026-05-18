'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const MasterMathWorkspaceEngineeringOS_065d6b = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#4d8eff] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
          <h1 className="font-mono text-[14px] font-black text-[#4d8eff] tracking-tighter uppercase italic">ANTIGRAVITY_OS</h1>
        </div>
        
        {/* Global Equation Terminal Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 hidden md:block">
          <div className="flex items-center bg-[#0b0e15] border-2 border-[#424754]/50 px-6 py-2 rounded-2xl group focus-within:border-[#4d8eff] transition-all shadow-inner">
            <span className="material-symbols-outlined text-[#8c909f] group-focus-within:text-[#4d8eff] mr-4 text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            <input 
              className="bg-transparent border-none focus:ring-0 w-full font-mono text-[13px] text-[#4d8eff] placeholder:text-[#8c909f]/50 font-black italic uppercase tracking-tight" 
              placeholder="solve thermal expansion for titanium wing" 
              type="text" 
            />
            <span className="font-mono text-[10px] text-[#8c909f] ml-4 px-3 py-1 border border-[#424754]/50 rounded-xl bg-[#1d2027] font-black italic uppercase tracking-widest">EXE</span>
          </div>
        </div>

        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_10px_#4cd7f6]"></div>
            <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic">GPU: 94% | SIM: ACTIVE</span>
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
              { label: 'Projects', icon: 'folder_open', active: true },
              { label: 'Simulations', icon: 'model_training', active: false },
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
            
            <div className="mt-8 pt-8 border-t border-[#424754]/30 space-y-4">
              <span className="px-4 font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">DOMAINS</span>
              <div className="space-y-1">
                {[
                  { label: 'Structural', active: true, status: 'bg-[#10B981]' },
                  { label: 'Thermal', active: true, status: 'bg-[#10B981]' },
                  { label: 'CFD', active: false, status: 'bg-[#424754]' },
                ].map((Globe) => (
                  <button key={Globe.label} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all group ${Globe.active && Globe.label === 'Thermal' ? 'bg-[#1d2027] text-[#4cd7f6]' : 'text-[#8c909f] hover:bg-[#1d2027]/50 hover:text-[#e1e2ec]'}`}>
                    <span className="font-mono text-[11px] font-black italic uppercase tracking-widest">{Globe.label}</span>
                    <div className={`w-2 h-2 rounded-full ${Globe.status} ${Globe.active ? 'animate-pulse shadow-[0_0_8px_currentColor]' : ''}`}></div>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Workspace Canvas */}
        <main className="flex-1 flex flex-col min-w-0 bg-[#0B0F14] relative overflow-hidden">
          {/* Multi-Pane Content Area */}
          <div className="flex-1 flex overflow-hidden">
            {/* Left: Mathematical Workspace */}
            <section className="flex-1 flex flex-col overflow-hidden bg-[#10131a] border-r border-[#424754]/50">
              <header className="h-10 bg-[#0b0e15]/50 px-8 flex items-center justify-between border-b border-[#424754]/50 shadow-xl relative z-10">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">MATHEMATICAL_WORKSPACE_V2.0</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-[#424754] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#424754] rounded-full"></div>
                </div>
              </header>
              <div className="flex-1 p-8 overflow-y-auto custom-scrollbar space-y-8">
                {/* Equation Block 1 */}
                <div className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] p-10 border-l-[12px] border-l-[#4cd7f6] relative group/math shadow-2xl transition-all hover:border-[#4cd7f6]/30">
                  <div className="absolute top-8 right-10 flex gap-4 opacity-0 group-hover/math:opacity-100 transition-all">
                    <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4d8eff] text-[20px]">content_copy</button>
                    <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4d8eff] text-[20px]">settings</button>
                  </div>
                  <div className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic opacity-50 mb-8">INPUT_01 // LINEAR_THERMAL_EXPANSION</div>
                  <div className="font-mono text-4xl font-black text-[#e1e2ec] italic tracking-tighter text-center py-10 drop-shadow-2xl">
                    ΔL = α · L₀ · ΔT
                  </div>
                  <div className="mt-8 border-t-2 border-[#424754]/20 pt-8 flex items-center justify-between">
                    <div className="flex gap-8 font-mono text-[10px] font-black italic uppercase tracking-widest text-[#8c909f]">
                      <span>SOLVING FOR: <span className="text-[#4cd7f6]">ΔL</span></span>
                      <span className="hidden md:inline">METHOD: <span className="text-[#e1e2ec]">SYMBOLIC_REDUCTION</span></span>
                    </div>
                    <span className="font-mono text-[10px] text-[#ffb786] font-black uppercase tracking-[0.2em] italic animate-pulse">LIVE_VALIDATION_PASSED</span>
                  </div>
                </div>

                {/* Interactive Visuals */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  <div className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] overflow-hidden shadow-2xl h-[320px] flex flex-col group/viz transition-all hover:border-[#4d8eff]/30">
                    <header className="h-10 bg-[#0b0e15]/50 px-8 flex items-center justify-between border-b border-[#424754]/50">
                      <span className="font-mono text-[10px] text-[#4d8eff] font-black uppercase tracking-[0.3em] italic">VECTOR_FIELD_PROJECTION</span>
                      <button className="material-symbols-outlined text-[#8c909f] text-[16px]">open_in_full</button>
                    </header>
                    <div className="flex-1 relative bg-[#0b0e15] overflow-hidden group-hover/viz:scale-[1.02] transition-transform duration-[2000ms]">
                      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4d8eff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <svg className="w-full h-full" viewBox="0 0 400 200">
                          <path d="M 0 150 Q 100 50 200 120 T 400 30" fill="none" stroke="#4cd7f6" strokeWidth="3" className="drop-shadow-[0_0_10px_#4cd7f6]"></path>
                          <path d="M 0 170 Q 150 120 250 160 T 400 80" fill="none" stroke="#adc6ff" strokeDasharray="8 4" strokeWidth="2" className="opacity-40"></path>
                          <circle cx="200" cy="120" fill="#4cd7f6" r="6" className="animate-ping opacity-40"></circle>
                          <circle cx="200" cy="120" fill="#4cd7f6" r="4" className="shadow-[0_0_15px_#4cd7f6]"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] overflow-hidden shadow-2xl h-[320px] flex flex-col group/stress transition-all hover:border-[#4cd7f6]/30">
                    <header className="h-10 bg-[#0b0e15]/50 px-8 flex items-center justify-between border-b border-[#424754]/50">
                      <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.3em] italic">STRESS_DISTRIBUTION</span>
                      <button className="material-symbols-outlined text-[#8c909f] text-[16px]">settings_input_component</button>
                    </header>
                    <div className="flex-1 bg-[#0b0e15] relative overflow-hidden group-hover/stress:scale-[1.02] transition-transform duration-[5000ms]">
                      <img 
                        className="w-full h-full object-cover opacity-50 grayscale contrast-125 mix-blend-screen scale-110" 
                        src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuC7iynIXaOT_4exW-D-PTcjXmPHwXdM__1WL5jjwcThh2FDN7qVzHIsutY1zaVumDnVlpKd0rKNqUifxei2xMTgqVz0yMYRmYbU-u5KBvK6j77aansLOemRjUzGctq2M4_Xvq9VZiW5xNh2_5ZNXoepl6vbKaazuKe_oJ9EPb_nOwqp8mT9ur_9OIOxU_ksw8Z5Ho8A0xcBGWV_by4PRMe7d5K79bHwwsKgMvMYyV1ZQloum38K2WeZiUfFyud-SvUDs0GeEa3vPr-O" 
                        alt="Stress Map" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e15] via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Complex Equation 2 */}
                <div className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] p-10 border-l-[12px] border-l-[#ffb786] relative group/ns shadow-2xl transition-all hover:border-[#ffb786]/30">
                  <div className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic opacity-50 mb-8">INPUT_02 // NAVIER-STOKES_CONVERGENCE</div>
                  <div className="font-mono text-3xl font-black text-[#e1e2ec] italic tracking-tighter text-center py-10 bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[30px] shadow-inner group-hover/ns:border-[#ffb786]/20 transition-all">
                    ρ(∂u/∂t + u·∇u) = -∇p + μ∇²u + f
                  </div>
                  <div className="mt-8 flex gap-4">
                    <div className="px-4 py-2 bg-[#ffb4ab]/10 text-[#ffb4ab] border-2 border-[#ffb4ab]/30 rounded-2xl font-mono text-[10px] font-black italic uppercase tracking-widest animate-pulse">SINGULARITY_DETECTED</div>
                    <div className="px-4 py-2 bg-[#4cd7f6]/10 text-[#4cd7f6] border-2 border-[#4cd7f6]/30 rounded-2xl font-mono text-[10px] font-black italic uppercase tracking-widest">MESH_REF_REQUIRED</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Right: AI Engineering Reasoning */}
            <section className="w-[450px] flex flex-col bg-[#0b0e15] border-l border-[#424754]/50 hidden lg:flex shrink-0">
              <header className="h-10 bg-[#1d2027]/50 px-8 flex items-center border-b border-[#424754]/50">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">ENGINEERING_REASONING_CORE</span>
              </header>
              <div className="flex-1 p-8 space-y-8 overflow-y-auto custom-scrollbar">
                <div className="flex items-center gap-4 text-[#4cd7f6]">
                  <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>Brain</span>
                  <span className="font-mono text-[12px] font-black italic uppercase tracking-[0.2em]">SYSTEM_ANALYSIS</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#1d2027] border-2 border-l-[8px] border-[#424754]/50 border-l-[#ffb786] p-6 rounded-2xl space-y-3 shadow-xl transition-all hover:border-[#ffb786]/30">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] text-[#8c909f] font-black italic">09:42:12 // CRITICAL</span>
                      <div className="w-2 h-2 rounded-full bg-[#ffb786] animate-pulse"></div>
                    </div>
                    <p className="font-mono text-[11px] text-[#e1e2ec] font-black italic leading-relaxed uppercase tracking-tighter">
                      Potential instability detected in Wing-Section-A. Thermal expansion α exceeds limit for current Zap assembly material.
                    </p>
                    <button className="text-[#ffb786] font-mono text-[10px] font-black italic uppercase tracking-widest hover:underline pt-2">RUN_RE-SOLVER</button>
                  </div>

                  <div className="bg-[#1d2027] border-2 border-l-[8px] border-[#424754]/50 border-l-[#4cd7f6] p-6 rounded-2xl space-y-3 shadow-xl transition-all hover:border-[#4cd7f6]/30">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] text-[#8c909f] font-black italic">09:41:05 // INFO</span>
                      <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse opacity-40"></div>
                    </div>
                    <p className="font-mono text-[11px] text-[#e1e2ec] font-black italic leading-relaxed uppercase tracking-tighter">
                      Equation 01 successfully mapped to CAD metadata. L₀ set to 4.250m based on Project-Icarus-V4.
                    </p>
                  </div>

                  <div className="bg-[#0b0e15] border-2 border-dashed border-[#424754]/50 p-6 rounded-2xl italic">
                    <p className="font-mono text-[11px] text-[#8c909f] font-black italic uppercase tracking-widest opacity-40 animate-pulse">
                      Listening for input... Suggesting 'optimize weight for stiffness'
                    </p>
                  </div>
                </div>

                {/* Real-time Gauges */}
                <div className="grid grid-cols-2 gap-4 pt-8">
                  {[
                    { l: 'SOLVER_LOAD', v: '88.4%', c: 'text-[#4cd7f6]', p: '88%' },
                    { l: 'CONFIDENCE', v: '0.9992', c: 'text-[#4d8eff]', p: '99.9%' },
                  ].map((gauge) => (
                    <div key={gauge.l} className="bg-[#1d2027] border-2 border-[#424754]/50 p-6 rounded-[30px] flex flex-col items-center gap-3 shadow-2xl">
                      <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">{gauge.l}</span>
                      <span className={`font-mono text-xl font-black italic tracking-tighter ${gauge.c}`}>{gauge.v}</span>
                      <div className="w-full bg-[#0b0e15] h-1.5 rounded-full overflow-hidden shadow-inner border border-[#424754]/20">
                        <div className={`h-full ${gauge.c.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor]`} style={{ width: gauge.p }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variable Terminal (Bottom Bar) */}
          <footer className="h-20 bg-[#1d2027] border-t-2 border-[#424754]/50 flex shrink-0 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)] z-30">
            <div className="w-64 border-r border-[#424754]/50 flex items-center px-8 bg-[#0b0e15]/50 shrink-0">
              <span className="font-mono text-[11px] font-black text-[#4d8eff] italic uppercase tracking-[0.2em]">VARIABLE_DOCK</span>
              <span className="material-symbols-outlined text-[#8c909f] ml-auto text-[20px]">Ruler</span>
            </div>
            <div className="flex-1 flex items-center px-10 gap-12 overflow-x-auto whitespace-nowrap custom-scrollbar selection:bg-[#4cd7f6]/30">
              {[
                { s: 'α', v: '23.1e-6', u: '' },
                { s: 'L₀', v: '4.250', u: 'm' },
                { s: 'ΔT', v: '180', u: 'K' },
              ].map((v) => (
                <div key={v.s} className="flex items-center gap-4 group/var">
                  <span className="font-mono text-lg font-black text-[#8c909f] italic opacity-60 group-hover/var:text-[#4cd7f6] transition-colors">{v.s}:</span>
                  <div className="flex items-center gap-2">
                    <input 
                      className="w-32 bg-[#0b0e15] border-2 border-[#424754]/50 text-[#4cd7f6] font-mono text-[13px] font-black italic rounded-xl h-10 px-4 focus:border-[#4cd7f6] focus:ring-4 focus:ring-[#4cd7f6]/10 outline-none transition-all shadow-inner" 
                      type="text" 
                      defaultValue={v.v} 
                    />
                    {v.u && <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase italic opacity-40">{v.u}</span>}
                  </div>
                </div>
              ))}
              <div className="ml-auto flex gap-4 shrink-0">
                <button className="bg-[#4d8eff] text-[#002e6a] px-8 h-12 rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest italic shadow-[0_15px_30px_-10px_rgba(77,142,255,0.4)] hover:scale-105 active:scale-95 transition-all">RECOMPUTE_SYSTEM</button>
                <button className="bg-[#0b0e15] border-2 border-[#424754]/50 text-[#8c909f] px-8 h-12 rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest italic hover:text-[#e1e2ec] hover:border-[#424754] transition-all">EXPORT_LATEX</button>
              </div>
            </div>
          </footer>
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

export default MasterMathWorkspaceEngineeringOS_065d6b;
