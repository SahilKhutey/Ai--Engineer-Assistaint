'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const ImagingQuantumPhotonicsEngineeringOS_43be18 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const probabilityField = Array.from({ length: 12 }, (_, i) => ({
    val: [20, 45, 80, 65, 90, 40, 30, 55, 75, 35, 25, 10][i]
  }));

  const depthMap = Array.from({ length: 24 }, (_, i) => ({
    opacity: [10, 20, 30, 25, 40, 60, 45, 30, 20, 40, 70, 80, 90, 60, 40, 20, 15, 30, 50, 70, 60, 40, 25, 10][i]
  }));

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-[48px] bg-[#10131a]/90 backdrop-blur-md border-b border-[#424754]/50 shrink-0">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff]">terminal</span>
          <span className="font-mono text-[11px] font-black tracking-widest text-[#adc6ff] uppercase">QUANTUM_COMMAND_OS_v2.0.4</span>
        </div>
        <div className="hidden md:flex gap-8 h-full items-center">
          <nav className="flex gap-8 h-full items-center">
            {['TELEMETRY', 'OPTICS', 'CALIBRATION'].map((item, i) => (
              <a 
                key={item} 
                href="#" 
                className={`font-mono text-[10px] font-black h-full flex items-center px-2 transition-all ${
                  i === 0 ? 'text-[#4cd7f6] border-b-2 border-[#4cd7f6]' : 'text-[#8c909f] hover:text-[#e1e2ec]'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-8">
          <span className="font-mono text-[10px] text-[#4cd7f6] font-bold">UPTIME: 42:01:14</span>
          <span className="material-symbols-outlined text-[#8c909f] cursor-pointer hover:text-[#4cd7f6] transition-colors">settings_input_component</span>
        </div>
      </header>

      <div className="flex flex-1 pt-[48px] overflow-hidden">
        {/* NavigationDrawer */}
        <aside className="w-64 border-r border-[#424754]/30 bg-[#191b23] hidden md:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-6">
            <span className="font-mono text-[10px] text-[#e1e2ec] font-black tracking-widest uppercase">SYSTEM_NAV</span>
          </div>
          <nav className="flex flex-col space-y-1 px-4">
            {[
              { label: 'Telemetry', icon: 'BarChart3', active: true },
              { label: 'Qubit_Map', icon: 'Share2', active: false },
              { label: 'Circuit_Editor', icon: 'account_tree', active: false },
              { label: 'Stability_Log', icon: 'history_edu', active: false },
              { label: 'System_Health', icon: 'monitor_heart', active: false },
            ].map((item) => (
              <a 
                key={item.label}
                href="#"
                className={`flex items-center gap-4 px-4 py-3 rounded transition-all ${
                  item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-l-2 border-[#4cd7f6] font-bold' : 'text-[#8c909f] hover:bg-[#272a31]/50 hover:text-[#e1e2ec]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
                <span className="font-mono text-[11px] tracking-tight uppercase">{item.label}</span>
              </a>
            ))}
          </nav>
          <div className="mt-auto px-6 pt-6 border-t border-[#424754]/30">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">CORE_TEMP</span>
              <div className="w-full h-1 bg-[#272a31] rounded-full overflow-hidden">
                <div className="bg-[#4cd7f6] w-[42%] h-full shadow-[0_0_8px_#4cd7f6]"></div>
              </div>
              <span className="font-mono text-[12px] text-[#4cd7f6] font-black">1.42 K</span>
            </div>
          </div>
        </aside>

        {/* Main Workspace (Bento Grid) */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#10131a] relative group">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#adc6ff_2px,#adc6ff_4px)]"></div>
          
          <div className="grid grid-cols-12 gap-6 h-full max-h-[calc(100vh-140px)] relative z-10">
            {/* Main Simulation View */}
            <section className="col-span-12 md:col-span-8 bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded-xl flex flex-col relative overflow-hidden group/view shadow-2xl">
              <header className="h-8 flex justify-between items-center px-4 bg-[#272a31]/50 border-b border-[#424754]/30 shrink-0">
                <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">Primary_Sensor_Feed: Single-Photon_Stream</span>
                <div className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_8px_#4cd7f6]"></span>
                  <span className="font-mono text-[9px] text-[#4cd7f6] font-black uppercase tracking-widest">LIVE_FEED</span>
                </div>
              </header>
              <div className="flex-1 relative flex items-center justify-center bg-[#0b0e15]">
                <img className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen scale-110 group-hover/view:scale-100 transition-transform duration-[20s]" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuC8Af53BeKFvao1vbWSrMWBq2AYgi7jNetZkaHwAyUPrkCPhqIKUjRR_OafTbh2sE4i_rlRgiwUWiZrJWyn3JcSi0OfyMf8S-PvQ4W7XCnkrgc7MBkHVO5_cl-UVZHxx4dvUQK_zCGRAsmSM8eFX1MhMXx1Bmuujmt4mf8JkSaLlWIFA3d_wCql1VeDUpL2wOo7mOLIQ3YnnfU_erxcvTGbRthnJVw6fArZmqWdYCdjv2ozUyc2EOChqm1KZGljivngVNZ7DuBe_wB9" alt="Photon Visualization" />
                <div className="absolute inset-8 pointer-events-none border border-[#adc6ff]/20"></div>
                <div className="z-10 text-center">
                  <h2 className="font-mono text-3xl text-[#4cd7f6] font-black tracking-tighter italic drop-shadow-[0_0_20px_rgba(76,215,246,0.3)]">E = hf</h2>
                  <p className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] mt-2">PHOTON_ENERGY_STABLE</p>
                </div>
                {/* HUD Elements */}
                <div className="absolute bottom-6 left-6 flex flex-col gap-2 pointer-events-none">
                  <div className="flex gap-4 items-center">
                    <span className="font-mono text-[9px] text-[#adc6ff] bg-[#adc6ff]/10 px-2 py-1 border border-[#adc6ff]/20 rounded font-black">LATENCY</span>
                    <span className="font-mono text-[12px] text-[#e1e2ec] font-bold">0.0024ms</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="font-mono text-[9px] text-[#adc6ff] bg-[#adc6ff]/10 px-2 py-1 border border-[#adc6ff]/20 rounded font-black">RESOLUTION</span>
                    <span className="font-mono text-[12px] text-[#e1e2ec] font-bold">4096 x 4096 (S.P.R)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Right Column Grid */}
            <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
              {/* Quantum Probability Fields */}
              <section className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded-xl flex flex-col overflow-hidden shadow-2xl flex-1">
                <header className="h-8 flex justify-between items-center px-4 bg-[#272a31]/50 border-b border-[#424754]/30 shrink-0">
                  <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">Quantum_Probability_Fields</span>
                  <span className="material-symbols-outlined text-[#8c909f] text-[16px]">grid_view</span>
                </header>
                <div className="p-6 flex-1 flex flex-col gap-6">
                  <div className="relative h-32 w-full bg-[#0b0e15] rounded-lg border border-[#424754]/30 overflow-hidden shadow-inner">
                    <div className="absolute inset-0 flex items-end">
                      {probabilityField.map((bar, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-[#4cd7f6]/40 border-t border-[#4cd7f6] transition-all duration-1000" 
                          style={{ height: `${bar.val}%`, opacity: 0.3 + (bar.val/200) }}
                        ></div>
                      ))}
                    </div>
                    <span className="absolute top-3 right-3 font-mono text-[9px] text-[#4cd7f6] font-black italic">ψ(x,t) DISTRIBUTION</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-[#424754]/30 rounded-lg bg-[#10131a] shadow-inner">
                      <span className="block font-mono text-[8px] text-[#8c909f] font-black uppercase tracking-widest mb-1">ENTANGLEMENT</span>
                      <span className="font-mono text-[13px] text-[#4cd7f6] font-bold">COHERENT_0.98</span>
                    </div>
                    <div className="p-4 border border-[#424754]/30 rounded-lg bg-[#10131a] shadow-inner">
                      <span className="block font-mono text-[8px] text-[#8c909f] font-black uppercase tracking-widest mb-1">PHOTON_COUNT</span>
                      <span className="font-mono text-[13px] text-[#4cd7f6] font-bold italic">1.4e12/sec</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Exposure Curve */}
              <section className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded-xl flex flex-col overflow-hidden shadow-2xl flex-1">
                <header className="h-8 flex justify-between items-center px-4 bg-[#272a31]/50 border-b border-[#424754]/30 shrink-0">
                  <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">Exposure_Curve_Log</span>
                  <span className="material-symbols-outlined text-[#8c909f] text-[16px]">waves</span>
                </header>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="flex-1 flex items-center justify-center border border-[#424754]/30 rounded-lg relative overflow-hidden bg-[#0b0e15] shadow-inner group/curve">
                    <svg className="w-full h-full px-2" viewBox="0 0 100 40">
                      <defs>
                        <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#adc6ff', stopOpacity: 0.3 }} />
                          <stop offset="100%" style={{ stopColor: '#adc6ff', stopOpacity: 0 }} />
                        </linearGradient>
                      </defs>
                      <path d="M0 35 Q 25 35, 50 20 T 100 5" fill="none" stroke="#adc6ff" strokeWidth="0.5" className="group-hover/curve:stroke-2 transition-all"></path>
                      <path d="M0 35 Q 25 35, 50 20 T 100 5 L 100 40 L 0 40 Z" fill="url(#grad)" stroke="none"></path>
                    </svg>
                    <span className="absolute bottom-3 left-3 font-mono text-[8px] text-[#8c909f] font-black uppercase">SENSITIVITY (eV)</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-[#424754]/30 pt-4">
                    <div className="flex flex-col">
                      <span className="font-mono text-[8px] text-[#8c909f] font-black uppercase tracking-widest">NOISE_THRESHOLD</span>
                      <span className="font-mono text-[14px] text-[#ffb4ab] font-bold">12.4 μV</span>
                    </div>
                    <button className="bg-[#1d2027] border border-[#424754] px-4 py-2 font-mono text-[10px] font-black uppercase tracking-widest text-[#e1e2ec] hover:bg-[#adc6ff]/10 hover:border-[#adc6ff]/50 transition-all rounded-lg active:scale-95 shadow-lg">
                      CALIBRATE
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* Bottom Row - Calibration Matrix */}
            <section className="col-span-12 bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded-xl flex flex-col overflow-hidden shadow-2xl h-48">
              <header className="h-8 flex justify-between items-center px-4 bg-[#272a31]/50 border-b border-[#424754]/30 shrink-0">
                <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">Optical_Calibration_Matrix</span>
                <span className="material-symbols-outlined text-[#8c909f] text-[16px]">query_stats</span>
              </header>
              <div className="flex-1 p-6 flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 flex flex-col gap-1 overflow-y-auto custom-scrollbar">
                  {[
                    { label: 'SENSOR_NODE_01', val: 'STABLE', color: 'text-[#4cd7f6]' },
                    { label: 'FOCAL_PLANE_Z', val: '11.042mm', color: 'text-[#4cd7f6]' },
                    { label: 'ABERRATION_COEFF', val: '0.003%', color: 'text-[#ffb786]' },
                    { label: 'SYNC_CLOCK_EXT', val: 'LOCKED', color: 'text-[#4cd7f6]' },
                  ].map(stat => (
                    <div key={stat.label} className="flex justify-between border-b border-[#424754]/10 py-2 group hover:bg-[#10131a]/50 px-2 transition-all">
                      <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-tighter">{stat.label}</span>
                      <span className={`font-mono text-[11px] font-bold ${stat.color}`}>{stat.val}</span>
                    </div>
                  ))}
                </div>
                <div className="flex-1 grid grid-cols-12 gap-1 bg-[#0b0e15] p-2 border border-[#424754]/30 rounded-lg shadow-inner">
                  {depthMap.map((pixel, i) => (
                    <div 
                      key={i} 
                      className="aspect-square transition-all duration-500 hover:scale-110 hover:z-10" 
                      style={{ 
                        backgroundColor: '#4cd7f6', 
                        opacity: pixel.opacity / 100,
                        border: '1px solid rgba(76, 215, 246, 0.2)'
                      }}
                    ></div>
                  ))}
                  {/* Fill the rest of the 12x? grid to look dense */}
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={`fill-${i}`} className="aspect-square bg-[#4cd7f6]/5 border border-[#4cd7f6]/10"></div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
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

export default ImagingQuantumPhotonicsEngineeringOS_43be18;
