'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const ComputationalImagingMetrologyEngineeringOS_69f80e = () => {
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
          <nav className="hidden md:flex gap-8">
            {['TELEMETRY', 'RECONSTRUCTION', 'METROLOGY'].map((item, idx) => (
              <button key={item} className={`font-mono text-[10px] font-black uppercase tracking-[0.2em] italic transition-all hover:text-[#4cd7f6] ${idx === 0 ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>
                {item}
              </button>
            ))}
          </nav>
          <button className="material-symbols-outlined text-[#8c909f] hover:text-[#e1e2ec] transition-colors p-2 rounded-xl">settings_input_component</button>
        </div>
      </header>

      {/* Main Container Shell */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/50 flex flex-col hidden md:flex shrink-0 z-20 shadow-2xl">
          <div className="p-8">
            <span className="font-mono text-[10px] text-[#ffb786] font-black uppercase tracking-[0.3em] italic">MODULE_SELECT</span>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'Lenses', icon: 'panorama_fish_eye', active: true },
              { label: 'Imaging', icon: 'camera', active: false },
              { label: 'Lasers', icon: 'Sparkles', active: false },
              { label: 'Wavefronts', icon: 'waves', active: false },
              { label: 'Computation', icon: 'Calculator', active: false },
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
        <main className="flex-1 overflow-hidden bg-[#10131a] relative flex flex-col">
          <div className="flex-1 p-6 grid grid-cols-12 grid-rows-6 gap-6 relative z-10 animate-in fade-in duration-700">
            {/* Main Viewport: Super-Resolution Reconstruction */}
            <section className="col-span-12 lg:col-span-8 row-span-4 bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] relative overflow-hidden group/viewport shadow-2xl">
              <header className="h-10 bg-[#1d2027] px-8 flex items-center justify-between border-b border-[#424754]/50 relative z-20 shrink-0">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">VIEWPORT_01: SUPER_RES_RECONSTRUCTION</span>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_10px_#4cd7f6]"></div>
                  <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] transition-colors text-[18px]">Maximize2</button>
                </div>
              </header>
              <div className="absolute inset-0 z-10">
                <img className="w-full h-full object-cover opacity-60 mix-blend-screen scale-110 group-hover/viewport:scale-100 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuAGIEHx2VjTHSUBHePe7-A08eC_-RxBmAWPfOf5YKj0EQwbTwIqxzNVWxs-KBGnAodkfdW4QR9wBfkk5dltUtRJdmnIe92nMvYgBkmbsvcBaS1WuWCsyrAL3xYonKF5cVCcR5QP1J6PW9MgaG7rxNiiX0eARGxUoTJMTJys6JD8XLZ2XLdJ8spZtY4zpBe8lNlsD-5XS23ytUzIdRHzHcMpyFwCHrm084cbBVow-f93-_Lxo6vvK2jDXMdtURluQlrOJ8CDIh9P828F" alt="Optical Recon" />
              </div>
              
              {/* HUD Overlay */}
              <div className="absolute inset-0 pointer-events-none z-20">
                <div className="absolute inset-0 border-[40px] border-transparent border-t-[#4cd7f6]/5 border-l-[#4cd7f6]/5"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-[#4cd7f6]/20 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-2 h-2 bg-[#4cd7f6] rounded-full shadow-[0_0_20px_#4cd7f6]"></div>
                  <div className="absolute inset-0 border-t-4 border-[#4cd7f6]/50 rounded-full animate-[spin_4s_linear_infinite]"></div>
                </div>
                {/* Coordinates */}
                <div className="absolute bottom-10 left-10 p-6 bg-[#10131a]/80 backdrop-blur-xl border-2 border-[#424754]/50 rounded-2xl shadow-2xl">
                  <div className="font-mono text-[9px] text-[#4cd7f6] font-black uppercase tracking-widest italic mb-2">COORD_VECTOR</div>
                  <div className="font-mono text-[11px] text-[#e1e2ec] font-black italic space-y-1 opacity-80 uppercase tracking-tighter leading-none">
                    <p>LAT: 34.0522° N</p>
                    <p>LON: 118.2437° W</p>
                    <p>ALT: 420.5 KM</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Side Panel: MTF & PSF Analysis */}
            <section className="col-span-12 lg:col-span-4 row-span-3 bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] flex flex-col shadow-2xl overflow-hidden group/analysis">
              <header className="h-10 bg-[#1d2027] px-8 flex items-center border-b border-[#424754]/50 shrink-0">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">MTF / PSF ANALYSIS</span>
              </header>
              <div className="flex-1 p-8 flex flex-col gap-8 overflow-hidden">
                {/* MTF Chart */}
                <div className="h-1/2 bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[24px] p-6 relative overflow-hidden group/mtf shadow-inner">
                  <span className="absolute top-4 right-6 font-mono text-[9px] text-[#8c909f] font-black uppercase italic tracking-widest opacity-40">Modulation Transfer</span>
                  <div className="w-full h-full flex items-end gap-1 px-2">
                    {[20, 45, 70, 85, 92, 80, 60, 30, 15, 10, 5].map((h, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 bg-[#4cd7f6]/20 rounded-t-lg transition-all duration-700 hover:bg-[#4cd7f6]/50 ${i === 4 ? 'bg-[#4cd7f6] shadow-[0_0_15px_#4cd7f6]' : ''}`} 
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                {/* PSF Visualization */}
                <div className="h-1/2 bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[24px] p-6 flex items-center justify-center relative overflow-hidden shadow-inner group/psf">
                  <span className="absolute top-4 right-6 font-mono text-[9px] text-[#8c909f] font-black uppercase italic tracking-widest opacity-40">Point Spread Function</span>
                  <div className="w-40 h-40 rounded-full bg-gradient-radial from-[#4cd7f6]/40 via-transparent to-transparent flex items-center justify-center animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-[#4cd7f6] shadow-[0_0_40px_#4cd7f6] relative">
                      <div className="absolute inset-0 bg-[#4cd7f6] rounded-full blur-xl opacity-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Digital Twin Status */}
            <section className="col-span-12 lg:col-span-4 row-span-3 bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] flex flex-col shadow-2xl overflow-hidden">
              <header className="h-10 bg-[#1d2027] px-8 flex items-center border-b border-[#424754]/50 shrink-0">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">DIGITAL_TWIN_TELEMETRY</span>
              </header>
              <div className="p-8 space-y-6 flex-1 overflow-y-auto custom-scrollbar">
                {[
                  { label: 'Sensor Drift', value: '+0.042mrad/h', icon: 'AlertTriangle', color: 'text-[#ffb4ab]', bgColor: 'bg-[#ffb4ab]/10', borderColor: 'border-[#ffb4ab]/30' },
                  { label: 'Calibration Instability', value: 'Δσ: 0.82', icon: 'error_outline', color: 'text-[#ffb786]', bgColor: 'bg-[#ffb786]/10', borderColor: 'border-[#ffb786]/30' },
                ].map((stat) => (
                  <div key={stat.label} className={`flex items-center justify-between p-5 border-2 ${stat.bgColor} ${stat.borderColor} rounded-[20px] transition-all hover:scale-[1.02] cursor-help`}>
                    <div className="flex items-center gap-4">
                      <span className={`material-symbols-outlined ${stat.color} text-[24px]`}>{stat.icon}</span>
                      <span className="font-mono text-[11px] text-[#e1e2ec] font-black italic uppercase tracking-tighter">{stat.label}</span>
                    </div>
                    <span className={`font-mono text-[12px] font-black italic ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
                
                <div className="pt-6 border-t border-[#424754]/30 space-y-4">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic opacity-50">BEAM_PROPAGATION_ENGINE</span>
                  <div className="p-6 bg-[#0b0e15] border-2 border-[#424754]/50 rounded-2xl shadow-inner group/code">
                    <code className="font-mono text-[#4cd7f6] text-[13px] font-black italic tracking-tighter group-hover:text-[#adc6ff] transition-colors leading-relaxed">
                      w(z) = w₀ √[1 + (λz/πw₀²)²]
                    </code>
                  </div>
                </div>
              </div>
            </section>

            {/* Optical Material Grid */}
            <section className="col-span-12 lg:col-span-8 row-span-2 bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] flex flex-col shadow-2xl overflow-hidden group/material">
              <header className="h-10 bg-[#1d2027] px-8 flex items-center border-b border-[#424754]/50 shrink-0">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">MATERIAL_MATRIX_N(λ)</span>
              </header>
              <div className="flex-1 overflow-auto custom-scrollbar">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#10131a]/50 sticky top-0 z-10 border-b border-[#424754]/50">
                      <th className="p-6 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">SUBSTRATE</th>
                      <th className="p-6 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">INDEX (n)</th>
                      <th className="p-6 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">DISPERSION (Vd)</th>
                      <th className="p-6 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">THERMAL (dn/dT)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#424754]/20 font-mono text-[12px] font-black italic uppercase">
                    {[
                      { name: 'Fused Silica (7980)', n: '1.4585', vd: '67.8', dn: '12.8 x 10⁻⁶' },
                      { name: 'Calcium Fluoride (CaF2)', n: '1.4338', vd: '95.1', dn: '-10.6 x 10⁻⁶' },
                      { name: 'Germanium (Ge)', n: '4.0026', vd: 'N/A', dn: '396 x 10⁻⁶' },
                    ].map((mat) => (
                      <tr key={mat.name} className="hover:bg-[#4cd7f6]/5 transition-all group/row cursor-crosshair">
                        <td className="p-6 text-[#e1e2ec] group-hover/row:text-[#4cd7f6] transition-colors">{mat.name}</td>
                        <td className="p-6 text-[#4cd7f6]">{mat.n}</td>
                        <td className="p-6 text-[#ffb786]">{mat.vd}</td>
                        <td className="p-6 text-[#8c909f] group-hover/row:text-[#e1e2ec] transition-colors">{mat.dn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Global Control Bar */}
      <footer className="h-20 bg-[#10131a] border-t border-[#424754]/50 flex justify-center items-center gap-16 px-12 z-50 shrink-0 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)]">
        {[
          { label: 'Telemetry', icon: 'BarChart3', active: true },
          { label: 'RayTrace', icon: 'Sparkles', active: false },
          { label: 'Logs', icon: 'terminal', active: false },
          { label: 'Uptime', icon: 'timer', active: false },
        ].map((item) => (
          <button key={item.label} className={`flex flex-col items-center gap-1 transition-all group ${item.active ? 'text-[#4cd7f6] scale-110' : 'text-[#8c909f] hover:text-[#e1e2ec] opacity-60 hover:opacity-100 hover:scale-110'}`}>
            <span className={`material-symbols-outlined text-[28px] ${item.active ? 'drop-shadow-[0_0_10px_rgba(76,215,246,0.5)]' : ''}`}>{item.icon}</span>
            <span className="font-mono text-[10px] font-black uppercase italic tracking-widest">{item.label}</span>
          </button>
        ))}
      </footer>

      {/* Polish: HUD Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>
      <div className="fixed inset-0 pointer-events-none z-[101] bg-[#4cd7f6]/5 mix-blend-overlay opacity-20"></div>

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
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ComputationalImagingMetrologyEngineeringOS_69f80e;
