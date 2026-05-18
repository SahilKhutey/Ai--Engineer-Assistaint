'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const FlowFieldAnalyticsEngineeringOS_04f163 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0f14] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#adc6ff]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#1d2027]/80 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">terminal</span>
          <h1 className="font-mono text-[14px] font-black text-[#adc6ff] tracking-tighter uppercase italic">NEURAL_OS_v1.0</h1>
          <span className="bg-[#4d8eff]/10 border border-[#4d8eff]/30 text-[#adc6ff] px-3 py-0.5 rounded-full font-mono text-[9px] font-black uppercase tracking-widest italic ml-4">LIVE_KERNEL_SESSION</span>
        </div>
        <div className="flex items-center gap-12">
          <nav className="hidden lg:flex gap-10">
            {['FLOW_ANALYSIS', 'MESH_TOPOLOGY', 'SOLVER_LOGS'].map((item, i) => (
              <button key={item} className={`font-mono text-[10px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'text-[#adc6ff] border-b-2 border-[#adc6ff] pb-0.5 italic' : 'text-[#8c909f] hover:text-[#e1e2ec]'}`}>
                {item}
              </button>
            ))}
          </nav>
          <button className="material-symbols-outlined text-[#8c909f] hover:text-[#adc6ff] transition-all text-[22px]">settings_input_component</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#191b23] border-r border-[#424754]/30 hidden lg:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-8">
            <h2 className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.2em] italic opacity-50">DOMAIN_ORBITAL</h2>
          </div>
          <nav className="flex flex-col space-y-1">
            {[
              { label: 'STRUCTURAL', icon: 'LayoutGrid', active: false },
              { label: 'FLUID_DYNAMICS', icon: 'Wind', active: true },
              { label: 'THERMAL_SYST', icon: 'Thermometer', active: false },
              { label: 'ELECTROMAGNETIC', icon: 'electric_bolt', active: false },
            ].map((item) => (
              <div 
                key={item.label}
                className={`flex items-center gap-4 px-6 py-3.5 transition-all cursor-pointer ${
                  item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-l-2 border-[#4cd7f6] font-bold shadow-[inset_4px_0_10px_rgba(76,215,246,0.1)]' : 'text-[#8c909f] hover:bg-[#1d2027] hover:text-[#e1e2ec]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
                <span className="font-mono text-[11px] uppercase tracking-tight italic">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content Workspace */}
        <main className="flex-1 overflow-hidden flex flex-col bg-[#0b0f14] relative group">
          <div className="flex-1 grid grid-cols-12 gap-[1px] h-full p-[1px] bg-[#202b3c]/30">
            {/* Left Controls Panel */}
            <section className="col-span-12 lg:col-span-3 flex flex-col gap-6 p-6 overflow-y-auto bg-[#191b23]/80 backdrop-blur-xl shrink-0">
              {/* Streamline Controls */}
              <div className="bg-[#1d2027] border border-[#424754]/50 rounded-2xl p-6 shadow-2xl transition-all hover:translate-x-1">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic">Streamline Controls</span>
                  <span className="material-symbols-outlined text-[#8c909f] text-[18px]">SlidersHorizontal</span>
                </div>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">
                      <span>Density</span>
                      <span className="text-[#4cd7f6]">85%</span>
                    </div>
                    <div className="h-1 bg-[#0b0e15] relative rounded-full">
                      <div className="absolute h-full bg-[#4cd7f6] rounded-full w-[85%] shadow-[0_0_10px_#4cd7f6]"></div>
                      <div className="absolute h-3 w-3 bg-[#4cd7f6] rounded-full top-1/2 -translate-y-1/2 left-[85%] -translate-x-1/2 border-2 border-[#1d2027]"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">
                      <span>Opacity</span>
                      <span className="text-[#4cd7f6]">0.62</span>
                    </div>
                    <div className="h-1 bg-[#0b0e15] relative rounded-full">
                      <div className="absolute h-full bg-[#4cd7f6] rounded-full w-[62%] shadow-[0_0_10px_#4cd7f6]"></div>
                      <div className="absolute h-3 w-3 bg-[#4cd7f6] rounded-full top-1/2 -translate-y-1/2 left-[62%] -translate-x-1/2 border-2 border-[#1d2027]"></div>
                    </div>
                  </div>
                  <button className="w-full h-11 bg-[#1d2027] border border-[#424754] text-[#8c909f] hover:bg-[#4cd7f6] hover:text-[#003640] hover:border-transparent transition-all rounded-xl flex items-center justify-center gap-3 font-mono text-[10px] font-black uppercase tracking-widest italic shadow-lg">
                    <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                    INIT_PARTICLE_TRACE
                  </button>
                </div>
              </div>

              {/* Scalar Field Selector */}
              <div className="bg-[#1d2027] border border-[#424754]/50 rounded-2xl p-6 shadow-2xl transition-all hover:translate-x-1">
                <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic block mb-6">Scalar Field Mapping</span>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-4 bg-[#03b5d3]/10 border border-[#4cd7f6]/30 rounded-xl cursor-pointer shadow-inner">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">Gauge</span>
                      <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest italic">VELOCITY_MAG</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6] animate-pulse"></div>
                  </div>
                  {[
                    { icon: 'compress', label: 'STATIC_PRESSURE' },
                    { icon: 'device_thermostat', label: 'TEMPERATURE_GRAD' }
                  ].map(field => (
                    <div key={field.label} className="flex items-center justify-between p-4 hover:bg-[#1d2027] hover:border-[#424754]/50 border border-transparent rounded-xl cursor-pointer group transition-all">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-[#8c909f] text-[20px] group-hover:text-[#e1e2ec] transition-colors">{field.icon}</span>
                        <span className="font-mono text-[10px] text-[#8c909f] group-hover:text-[#e1e2ec] font-black uppercase tracking-widest italic transition-colors">{field.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Summary */}
              <div className="bg-[#1d2027] border border-[#424754]/50 rounded-2xl p-6 shadow-2xl flex-1 transition-all hover:translate-x-1">
                <span className="font-mono text-[10px] text-[#ffb786] font-black uppercase tracking-widest italic block mb-6">Aerodynamic Performance</span>
                <div className="space-y-6">
                  {[
                    { label: 'L/D RATIO (CL/CD)', val: '14.821', color: 'text-[#ffb786]' },
                    { label: 'REYNOLDS NUMBER (RE)', val: '2.45e6', color: 'text-[#ffb786]' },
                    { label: 'STALL_MARGIN_ALPHA', val: '3.2° [CRITICAL]', color: 'text-[#ffb4ab]' }
                  ].map(stat => (
                    <div key={stat.label} className="border-b border-[#424754]/30 pb-4">
                      <div className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic mb-2 opacity-60">{stat.label}</div>
                      <div className={`font-mono text-[18px] font-black italic tracking-tighter ${stat.color}`}>{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Main Simulation Viewport */}
            <section className="col-span-12 lg:col-span-9 relative bg-[#0b0e15] overflow-hidden group/viz">
              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]" style={{ background: 'linear-gradient(to bottom, transparent 50%, #4cd7f6 50%)', backgroundSize: '100% 4px' }}></div>
              
              {/* Visual HUD Elements */}
              <div className="absolute top-8 left-8 z-20 space-y-4">
                <div className="bg-[#0b0e15]/80 backdrop-blur-md border border-[#424754]/50 px-6 py-3 rounded-2xl flex items-center gap-4 shadow-2xl">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_10px_#4cd7f6]"></div>
                  <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic">FRAME_BUFFER_STREAMING</span>
                </div>
                <div className="bg-[#0b0e15]/80 backdrop-blur-md border border-[#424754]/50 px-6 py-3 rounded-2xl flex items-center gap-4 shadow-2xl">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-70">ITERATION_N:</span>
                  <span className="font-mono text-[14px] text-[#adc6ff] font-black italic tracking-tighter">1,204,452</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 z-20">
                <div className="bg-[#0b0e15]/80 backdrop-blur-md border border-[#424754]/50 p-6 rounded-2xl shadow-2xl flex flex-col gap-4">
                  <div className="flex items-center gap-6">
                    <div className="w-40 h-2 bg-gradient-to-r from-[#002e6a] via-[#4cd7f6] to-[#ffb786] rounded-full shadow-inner"></div>
                    <span className="font-mono text-[11px] text-[#e1e2ec] font-black italic">0.0 - 450 m/s</span>
                  </div>
                  <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">VELOCITY_MAGNITUDE_SCALE</span>
                </div>
              </div>

              {/* Simulation Visual */}
              <div className="absolute inset-0 z-0 group-hover/viz:scale-105 transition-transform duration-[20s] ease-linear">
                <img className="w-full h-full object-cover opacity-50 mix-blend-screen drop-shadow-[0_0_20px_rgba(76,215,246,0.3)]" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBbdFdSPHzNe3EMc8ew7H64PsYZ0KZv8SoXf-vxuHlLsoawtgb93tpEVvvAMwPfcAVS8LzvK9x-AWkUfAenblpdKCBKxJXWBri7kXNYALhQnpqKeMHd-aAqoEOCJs65rjZYiSg4-VssXo5m-ewzDe-oha3QyB52nDLO119kjPhDqsqtJUE0MoUN4gBas_rKtmJ9hFgRpyxZT5U1w4ROityS4ksoxGbQYIxHe8qL290EeXoH_leBvq9vL1V5YEJ6gJIL5aJWHOziACFB" alt="Fluid Flow Visualization" />
              </div>

              {/* Grid Lines */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#4cd7f6 1px, transparent 1px), linear-gradient(90deg, #4cd7f6 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>

              {/* Export Engine Overlay */}
              <div className="absolute bottom-8 right-8 z-30">
                <div className="bg-[#0b0e15]/90 backdrop-blur-2xl border-2 border-[#424754]/50 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-80 group/export transition-all hover:border-[#adc6ff]/50">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="material-symbols-outlined text-[#adc6ff] text-[24px]">cloud_download</span>
                    <span className="font-mono text-[11px] text-[#e1e2ec] font-black uppercase tracking-[0.2em] italic">EXPORT_ENGINE</span>
                  </div>
                  <div className="space-y-6">
                    <div className="flex flex-col gap-3">
                      <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60">OUTPUT_FORMAT</span>
                      <div className="relative">
                        <select className="bg-[#1d2027] border border-[#424754] text-[#e1e2ec] font-mono text-[11px] font-bold italic rounded-xl w-full py-3 px-4 appearance-none focus:outline-none focus:border-[#adc6ff]/50">
                          <option>HDF5_ARRAY_V3</option>
                          <option>CSV_TABULAR</option>
                          <option>JSON_SCALAR</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#8c909f] pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    <button className="w-full h-12 bg-[#4d8eff] text-[#00285d] hover:scale-[1.02] active:scale-[0.98] transition-all rounded-xl font-mono text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-4 italic shadow-[0_10px_20px_-5px_rgba(77,142,255,0.4)]">
                      <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                      COMPILE_AND_SEND
                    </button>
                  </div>
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

export default FlowFieldAnalyticsEngineeringOS_04f163;
