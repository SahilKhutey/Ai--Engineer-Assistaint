'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const CombustionPropulsionEngineeringOS_cb8e80 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const pressureSpectrum = [
    { height: 'h-12', opacity: 'bg-[#4cd7f6]/20' },
    { height: 'h-20', opacity: 'bg-[#4cd7f6]/40' },
    { height: 'h-24', opacity: 'bg-[#4cd7f6]/60' },
    { height: 'h-10', opacity: 'bg-[#ffb786]' },
    { height: 'h-16', opacity: 'bg-[#4cd7f6]/40' },
    { height: 'h-8', opacity: 'bg-[#4cd7f6]/20' },
    { height: 'h-14', opacity: 'bg-[#4cd7f6]/10' },
    { height: 'h-18', opacity: 'bg-[#4cd7f6]/30' },
    { height: 'h-6', opacity: 'bg-[#4cd7f6]/20' },
  ];

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#adc6ff]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 h-[48px] bg-[#10131a]/80 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 shadow-[0_0_20px_rgba(173,198,255,0.05)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff]">terminal</span>
          <h1 className="font-mono text-[14px] font-black text-[#adc6ff] uppercase tracking-tighter italic">NEURAL_OS_v1.0</h1>
        </div>
        <button className="material-symbols-outlined text-[#adc6ff] hover:bg-[#363941] transition-colors p-2 rounded-xl border border-transparent hover:border-[#424754]/50">
          settings_input_component
        </button>
      </header>

      <main className="flex-1 pt-[48px] pb-32 px-6 overflow-y-auto custom-scrollbar flex flex-col gap-6 max-w-4xl mx-auto w-full relative group">
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02]" style={{ background: 'linear-gradient(to bottom, transparent 50%, #adc6ff 50%)', backgroundSize: '100% 4px' }}></div>

        {/* Live Combustion Header Panel */}
        <section className="mt-6 z-10">
          <div className="bg-[#1d2027]/50 backdrop-blur-xl rounded-2xl p-6 border-l-4 border-[#ffb786] border border-[#424754]/50 shadow-2xl flex justify-between items-start transition-all hover:translate-x-2">
            <div>
              <p className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.2em] mb-2 italic">OPERATIONAL_DOMAIN</p>
              <h1 className="font-mono text-2xl font-black text-[#ffb786] tracking-tighter uppercase italic">REACTING_FLOW_SIM</h1>
            </div>
            <div className="flex items-center gap-3 bg-[#0b0e15]/80 px-4 py-2 rounded-xl border border-[#424754]/50 shadow-inner">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_8px_#4cd7f6]"></div>
              <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic">LIVE_TELEMETRY</span>
            </div>
          </div>
        </section>

        {/* Flame Front Visualization */}
        <section className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 shadow-2xl z-10 group/viz">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-60 grayscale group-hover/viz:grayscale-0 group-hover/viz:scale-110 transition-all duration-[10000ms] linear" 
              src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuC9HWKOqIDpA4RQj6B0i1iaOIqI-Xvgc0FFQ-tSXWmOZ0fMt9hxFgeepaqgHEMzp4IJ5Yd3PPHBg89kZcbZ-LjbqtETXND7ku_P21T2V--o2KO7AIFU-V3MeY5Djbmz6yC4LOyDS31llscXpghW9szJRsq7xFxq9ZLqN6_7jePXIe6P9KePj_vvTFiQL3FHHTHMhTAokFss_TRHPfyk2zxrncFL9WYkOJPg5xZFFQzPprNn205wGAI8giYsH4WmJvtvj7_DFusg16zx" 
              alt="Combustion Visualization" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-transparent to-transparent opacity-80"></div>
          </div>
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
              <div className="bg-[#0b0e15]/80 backdrop-blur-md p-5 rounded-2xl border border-[#424754]/50 shadow-2xl">
                <p className="font-mono text-[10px] text-[#ffb786] font-black uppercase tracking-widest italic mb-2">FLAME_FRONT_MAP</p>
                <p className="font-mono text-[18px] text-[#e1e2ec] font-black italic tracking-tighter">T_MAX: 3450K</p>
              </div>
              <span className="material-symbols-outlined text-[#e1e2ec] bg-[#32353c]/60 backdrop-blur-md p-3 rounded-full hover:scale-110 cursor-pointer transition-all border border-[#424754]/50 shadow-2xl">Maximize2</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0b0e15]/80 backdrop-blur-md p-5 rounded-2xl border border-[#424754]/50 shadow-2xl">
                <p className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest mb-2 italic">STAGNATION_P</p>
                <p className="font-mono text-[20px] text-[#4cd7f6] font-black italic tracking-tighter uppercase">15.2 MPa</p>
              </div>
              <div className="bg-[#0b0e15]/80 backdrop-blur-md p-5 rounded-2xl border border-[#424754]/50 shadow-2xl">
                <p className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest mb-2 italic">MACH_EXIT</p>
                <p className="font-mono text-[20px] text-[#ffb786] font-black italic tracking-tighter uppercase">3.82 M</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Combustion Safety Readout */}
        <section className="bg-[#1d2027]/50 backdrop-blur-xl rounded-2xl p-8 border border-[#424754]/50 shadow-2xl z-10 group/intel">
          <div className="flex items-center gap-4 mb-6 border-b border-[#424754]/30 pb-4">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[24px]">psychology_alt</span>
            <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.2em] italic">AI_COMBUSTION_SAFETY_PROTOCOL</span>
          </div>
          <p className="font-mono text-[13px] text-[#e1e2ec] mb-8 leading-relaxed italic uppercase opacity-80">
            <span className="text-[#4cd7f6] font-black mr-2">ANALYSIS:</span> Reactive flow stabilized. H2/O2 mixing efficiency at 98.4%. No thermal boundary layer violations detected in sub-sector 7G. Recommended cooling purge in 120s.
          </p>
          <div className="flex gap-2">
            {[1, 2, 3].map((i: any) => <div key={i} className="h-1.5 flex-1 bg-[#4cd7f6] rounded-full shadow-[0_0_8px_#4cd7f6]"></div>)}
            <div className="h-1.5 flex-1 bg-[#424754] rounded-full opacity-30"></div>
          </div>
        </section>

        {/* FFT Pressure Spectrum */}
        <section className="bg-[#1d2027]/50 backdrop-blur-xl rounded-2xl p-8 border border-[#424754]/50 shadow-2xl z-10">
          <div className="flex justify-between items-center mb-10 border-b border-[#424754]/30 pb-4">
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">FFT_PRESSURE_SPECTRUM</span>
            <span className="font-mono text-[10px] text-[#ffb4ab] font-black uppercase tracking-widest italic">INSTABILITY_ALERT: LOW</span>
          </div>
          <div className="h-32 flex items-end gap-1 px-2 border-b border-l border-[#424754]/30">
            {pressureSpectrum.map((bar, i) => (
              <div 
                key={i} 
                className={`flex-1 ${bar.height} ${bar.opacity} rounded-t-lg transition-all duration-1000 hover:scale-x-110 hover:brightness-125`}
              ></div>
            ))}
          </div>
          <div className="flex justify-between mt-4 font-mono text-[9px] text-[#8c909f] font-bold tracking-tighter uppercase">
            {['0 Hz', '1.2 kHz', '2.4 kHz', '3.6 kHz', '5.0 kHz'].map(f => <span key={f}>{f}</span>)}
          </div>
        </section>

        {/* Chemical Kinetics */}
        <section className="grid grid-cols-2 gap-6 z-10">
          {[
            { label: 'KINETICS: H2', val: '0.142', unit: 'mol/m³', color: 'bg-[#4cd7f6]', width: 'w-1/4' },
            { label: 'KINETICS: O2', val: '0.084', unit: 'mol/m³', color: 'bg-[#ffb786]', width: 'w-3/4' },
          ].map(k => (
            <div key={k.label} className="bg-[#1d2027]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#424754]/50 shadow-2xl hover:border-[#4cd7f6]/30 transition-all">
              <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest block mb-4 italic">{k.label}</span>
              <div className="flex items-end gap-3 mb-4">
                <span className="font-mono text-[24px] text-[#e1e2ec] font-black italic tracking-tighter">{k.val}</span>
                <span className="font-mono text-[10px] text-[#8c909f] font-black mb-2 lowercase">{k.unit}</span>
              </div>
              <div className="w-full h-1.5 bg-[#0b0e15] rounded-full overflow-hidden border border-[#424754]/20 shadow-inner">
                <div className={`h-full ${k.color} ${k.width} shadow-[0_0_10px_currentColor]`}></div>
              </div>
            </div>
          ))}
        </section>

        {/* Plume Expansion BarChart3 */}
        <section className="bg-[#1d2027]/50 backdrop-blur-xl rounded-2xl p-8 border border-[#424754]/50 shadow-2xl z-10 overflow-hidden relative group/plume">
          <header className="flex justify-between items-center mb-8 border-b border-[#424754]/30 pb-4">
            <h3 className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.2em] italic">EXHAUST_PLUME_EXPANSION</h3>
            <span className="material-symbols-outlined text-[#8c909f] text-[18px]">query_stats</span>
          </header>
          <div className="space-y-4">
            {[
              { label: 'VECTOR_ALIGNMENT', val: '0.02° DEV', color: 'text-[#4cd7f6]' },
              { label: 'RECOMBINATION_RATE', val: 'HIGH_FLUX', color: 'text-[#ffb786]' },
              { label: 'NOZZLE_FLOW_SEP', val: 'NONE', color: 'text-[#e1e2ec]' },
            ].map(row => (
              <div key={row.label} className="flex justify-between items-center p-3 hover:bg-[#adc6ff]/5 rounded-xl transition-all">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">{row.label}</span>
                <span className={`font-mono text-[11px] font-black italic tracking-tighter ${row.color}`}>{row.val}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 w-full z-50 h-[80px] px-8 bg-[#10131a]/90 backdrop-blur-xl border-t border-[#424754]/50 flex justify-around items-center shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.5)]">
        {[
          { label: 'Terminal', icon: 'keyboard_command_key', active: false },
          { label: 'WORKSPACE', icon: 'function', active: true },
          { label: 'REASONING', icon: 'psychology_alt', active: false },
          { label: 'TELEMETRY', icon: 'query_stats', active: false },
          { label: 'LOGS', icon: 'list_alt', active: false },
        ].map(item => (
          <button 
            key={item.label}
            className={`flex flex-col items-center justify-center gap-1.5 transition-all group ${item.active ? 'scale-110' : 'opacity-40 hover:opacity-100'}`}
          >
            <div className={`p-2.5 rounded-xl transition-all ${item.active ? 'bg-[#4d8eff] text-[#00285d] shadow-[0_0_20px_rgba(77,142,255,0.4)]' : 'text-[#8c909f] group-hover:bg-[#1d2027]'}`}>
              <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
            </div>
            <span className={`font-mono text-[9px] font-black tracking-widest uppercase italic ${item.active ? 'text-[#adc6ff]' : 'text-[#8c909f]'}`}>{item.label}</span>
          </button>
        ))}
      </nav>

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

export default CombustionPropulsionEngineeringOS_cb8e80;
