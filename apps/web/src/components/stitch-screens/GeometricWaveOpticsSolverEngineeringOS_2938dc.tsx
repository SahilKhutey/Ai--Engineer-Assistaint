'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const GeometricWaveOpticsSolverEngineeringOS_2938dc = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>Eye</span>
          <h1 className="font-mono text-[14px] font-black text-[#4cd7f6] tracking-tighter uppercase italic">OPTICAL_INTEL_LAYER_V2.04</h1>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic">MODE: SIMULATION_ACTIVE</span>
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_10px_#10B981]"></div>
          </div>
          <button className="material-symbols-outlined text-[#8c909f] hover:text-[#e1e2ec] transition-colors p-2 rounded-xl">settings_input_component</button>
        </div>
      </header>

      {/* Main Container Shell */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* NavigationDrawer (Left) */}
        <nav className="w-24 bg-[#0b0e15] border-r border-[#424754]/50 flex flex-col pt-8 hidden md:flex shrink-0 z-20 shadow-2xl">
          <div className="px-4 mb-8 text-center">
            <span className="font-mono text-[9px] text-[#ffb786] font-black uppercase tracking-[0.2em] italic">MODULE</span>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { label: 'Lenses', icon: 'panorama_fish_eye', active: true },
              { label: 'Imaging', icon: 'camera', active: false },
              { label: 'Lasers', icon: 'Sparkles', active: false },
              { label: 'Wavefronts', icon: 'waves', active: false },
              { label: 'Computation', icon: 'Calculator', active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex flex-col items-center py-6 gap-2 transition-all group ${
                  item.active 
                    ? 'bg-[#4cd7f6]/10 text-[#4cd7f6] border-l-4 border-[#4cd7f6] shadow-lg shadow-[#4cd7f6]/5' 
                    : 'text-[#8c909f] hover:text-[#e1e2ec] hover:bg-[#1d2027]'
                }`}
              >
                <span className={`material-symbols-outlined text-[24px] transition-transform group-hover:scale-110 ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>
                  {item.icon}
                </span>
                <span className="font-mono text-[9px] font-black uppercase italic tracking-tighter">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 flex overflow-hidden bg-[#10131a] relative">
          {/* Center Viewport: Ray Tracing */}
          <section className="flex-1 relative bg-[#0b0e15] overflow-hidden group/viewport cursor-crosshair">
            {/* Viewport Label */}
            <header className="absolute top-0 left-0 w-full z-10 px-6 py-3 bg-gradient-to-b from-[#0b0e15] to-transparent">
              <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">VIEWPORT_01 // INTERACTIVE_RAY_TRACER</span>
            </header>

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4cd7f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            {/* Ray Visualization */}
            <div className="absolute inset-0 flex items-center justify-center p-24">
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 800 600">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <line x1="0" y1="300" x2="350" y2="300" stroke="#4cd7f6" strokeWidth="2" strokeDasharray="10 5" className="opacity-40" />
                <path d="M 350 300 Q 400 300 450 350 T 800 450" stroke="#4cd7f6" strokeWidth="3" fill="none" filter="url(#glow)" className="transition-all duration-1000" />
                <line x1="0" y1="310" x2="350" y2="310" stroke="#4cd7f6" strokeWidth="2" strokeDasharray="10 5" className="opacity-40" />
                <path d="M 350 310 Q 400 310 450 360 T 800 460" stroke="#4cd7f6" strokeWidth="3" fill="none" filter="url(#glow)" className="transition-all duration-1000" />
              </svg>

              {/* Lens Object */}
              <div className="relative w-64 h-80 bg-[#1d2027]/40 backdrop-blur-2xl border-2 border-[#4cd7f6]/40 rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(76,215,246,0.1)] transition-all group/lens hover:border-[#4cd7f6] hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4cd7f6]/10 to-transparent rounded-full"></div>
                <div className="bg-[#0b0e15] px-4 py-2 border border-[#4cd7f6]/30 rounded-xl shadow-2xl z-20">
                  <span className="font-mono text-[11px] text-[#4cd7f6] font-black italic uppercase">BICONVEX_L1</span>
                </div>
                <span className="font-mono text-[10px] text-[#8c909f] mt-3 font-black italic uppercase tracking-widest opacity-60">f = 50.0mm</span>
                <div className="w-px h-full absolute left-1/2 -translate-x-1/2 bg-[#4cd7f6]/20 z-10"></div>
              </div>
            </div>

            {/* Coordinate HUD */}
            <div className="absolute bottom-10 left-10 p-6 bg-[#10131a]/80 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[24px] shadow-2xl z-20 space-y-2 font-mono text-[11px] font-black italic uppercase tracking-tighter">
              <div className="flex justify-between gap-8 border-b border-[#424754]/30 pb-2">
                <span className="text-[#8c909f] opacity-60">X_POS:</span>
                <span className="text-[#4cd7f6]">+124.55</span>
              </div>
              <div className="flex justify-between gap-8 border-b border-[#424754]/30 pb-2">
                <span className="text-[#8c909f] opacity-60">Y_POS:</span>
                <span className="text-[#4cd7f6]">-012.30</span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-[#8c909f] opacity-60">ROT:</span>
                <span className="text-[#4cd7f6]">0.00°</span>
              </div>
            </div>
          </section>

          {/* Right Side Panel: Wavefronts & Metrics */}
          <aside className="w-[450px] bg-[#0b0e15] border-l border-[#424754]/50 flex flex-col shrink-0 z-30 shadow-2xl overflow-y-auto custom-scrollbar">
            {/* AlertTriangle Header */}
            <div className="bg-[#ffb4ab]/10 p-8 border-b border-[#ffb4ab]/30 flex items-start gap-6 animate-in slide-in-from-right duration-700">
              <span className="material-symbols-outlined text-[#ffb4ab] text-[28px]">report_problem</span>
              <div className="space-y-1">
                <h3 className="font-mono text-[12px] text-[#ffb4ab] font-black uppercase tracking-[0.2em] italic">CRITICAL_WARNING_09</h3>
                <p className="font-mono text-[11px] text-[#8c909f] font-black italic leading-relaxed opacity-80">Wavefront distortion exceeds acceptable threshold (λ/4 Rayleigh limit violated).</p>
              </div>
            </div>

            {/* Wavefront Map */}
            <section className="p-8 border-b border-[#424754]/30 space-y-6">
              <header className="flex justify-between items-center">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">WAVEFRONT_MAP_ZERNIKE</span>
                <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] transition-colors text-[18px]">zoom_in</button>
              </header>
              <div className="aspect-square w-full rounded-[40px] relative overflow-hidden bg-[#000] border-2 border-[#424754]/50 group/map shadow-2xl">
                <img 
                  alt="Wavefront Map" 
                  className="w-full h-full object-cover opacity-80 mix-blend-screen scale-110 group-hover/map:scale-100 transition-all duration-[5000ms]" 
                  src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDWtajVXWQa54O7zetP9mNGDGS8mf3nylkfD1Sb5aG_bQapH_51zCZNGI-OFHOBr3xsCsWQn69uapfatqsQSELg4ZO3Frr5_Q2OTIRszFINdQwSysXTj-IFbwPQHLiizxvriIfdoRhELtxPHt4MryU826Og-_VgU6TN7vav7veBuP9gAI8t3kYKXOqUMMs0hRfwNaPaP8PmuaIBVOYCW-8UncNUjneLif6tNw9AFq8RA9shUT2PX3vvu_z4lhbkD8c3KReUx7WYS4C7" 
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-px bg-[#4cd7f6]/30"></div>
                  <div className="h-full w-px bg-[#4cd7f6]/30 absolute left-1/2"></div>
                </div>
              </div>
            </section>

            {/* Interference Metrics */}
            <section className="p-8 space-y-10 flex-1">
              <div className="space-y-6">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic block">FRINGE_ANALYSIS (d sin θ = mλ)</span>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { l: 'SLIT_SPACING (d)', v: '1.25 μm' },
                    { l: 'WAVELENGTH (λ)', v: '632.8 nm' },
                  ].map((metric) => (
                    <div key={metric.l} className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[24px] p-6 shadow-xl transition-all hover:border-[#4cd7f6]/30">
                      <span className="font-mono text-[8px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50 block mb-2">{metric.l}</span>
                      <span className="font-mono text-lg font-black text-[#4cd7f6] italic tracking-tighter">{metric.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Gauges */}
              <div className="space-y-8">
                {[
                  { label: 'COHERENCE_LENGTH', value: '88', color: 'bg-[#4cd7f6]', shadow: 'shadow-[0_0_15px_#4cd7f6]' },
                  { label: 'STREHL_RATIO', value: '62', color: 'bg-[#ffb786]', shadow: 'shadow-[0_0_15px_#ffb786]' },
                ].map((gauge) => (
                  <div key={gauge.label} className="space-y-3">
                    <div className="flex justify-between font-mono text-[10px] font-black italic tracking-widest uppercase">
                      <span className="text-[#8c909f] opacity-60">{gauge.label}</span>
                      <span className={gauge.label === 'STREHL_RATIO' ? 'text-[#ffb786]' : 'text-[#4cd7f6]'}>
                        {gauge.label === 'STREHL_RATIO' ? `0.${gauge.value}` : `${gauge.value}%`}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#0b0e15] rounded-full overflow-hidden shadow-inner border border-[#424754]/20">
                      <div className={`h-full ${gauge.color} ${gauge.shadow} transition-all duration-1000`} style={{ width: `${gauge.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Refractive Index Table */}
              <div className="space-y-6 pt-8">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic block">REFRACTIVE_INDEX_LIB</span>
                <div className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[30px] overflow-hidden shadow-2xl">
                  <table className="w-full text-left font-mono">
                    <thead className="bg-[#0b0e15]/50 border-b border-[#424754]/30">
                      <tr className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60">
                        <th className="px-6 py-4">MATERIAL</th>
                        <th className="px-6 py-4 text-right">INDEX (n)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#424754]/20 font-mono text-[11px] font-black italic uppercase tracking-tighter">
                      {[
                        { m: 'BK7_CROWN', n: '1.5168' },
                        { m: 'SF11_FLINT', n: '1.7847' },
                        { m: 'F_SILICA', n: '1.4585' },
                      ].map((row) => (
                        <tr key={row.m} className="hover:bg-[#4cd7f6]/5 transition-colors cursor-crosshair group/row">
                          <td className="px-6 py-4 text-[#e1e2ec] group-hover/row:text-[#4cd7f6] transition-colors">{row.m}</td>
                          <td className="px-6 py-4 text-right text-[#4cd7f6]">{row.n}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </aside>
        </main>
      </div>

      {/* Global Telemetry Bar */}
      <footer className="h-20 bg-[#10131a] border-t border-[#424754]/50 flex justify-center items-center gap-16 px-12 z-[60] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)] fixed bottom-0 left-0 w-full">
        {[
          { label: 'Telemetry', icon: 'BarChart3', active: true },
          { label: 'RayTrace', icon: 'Sparkles', active: false },
          { label: 'Logs', icon: 'terminal', active: false },
          { label: 'Uptime', icon: 'timer', active: false },
        ].map((item) => (
          <button key={item.label} className={`flex flex-col items-center gap-1 transition-all group ${item.active ? 'text-[#4cd7f6] scale-110' : 'text-[#8c909f] opacity-40 hover:opacity-100 hover:scale-110'}`}>
            <span className={`material-symbols-outlined text-[28px] ${item.active ? 'drop-shadow-[0_0_10px_rgba(76,215,246,0.5)]' : ''}`}>{item.icon}</span>
            <span className="font-mono text-[9px] font-black uppercase italic tracking-widest">{item.label}</span>
          </button>
        ))}
      </footer>

      {/* Polish: HUD Status Elements */}
      <div className="fixed bottom-24 right-10 z-[100] animate-in fade-in slide-in-from-bottom duration-1000">
        <div className="bg-[#10131a]/90 backdrop-blur-2xl border-2 border-[#424754]/50 px-8 py-4 rounded-[24px] flex gap-10 shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6] animate-pulse"></span>
            <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest italic">GPU_ACCEL: ON</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#ffb786] shadow-[0_0_10px_#ffb786]"></span>
            <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest italic">TEMP: 42°C</span>
          </div>
        </div>
      </div>

      {/* Global HUD Polish */}
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

export default GeometricWaveOpticsSolverEngineeringOS_2938dc;
