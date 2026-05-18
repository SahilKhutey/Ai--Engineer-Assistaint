'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const ControlDynamicsEngineeringOS_598dfa = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
          <h1 className="font-mono text-[14px] font-black text-[#adc6ff] tracking-tighter uppercase italic">KINETIC_OS // DYNAMICS_LAYER</h1>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-4 px-4 py-1.5 bg-[#191b23] border border-[#424754]/50 rounded-xl shadow-inner">
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]"></div>
            <span className="font-mono text-[9px] text-[#10B981] font-black uppercase tracking-widest italic opacity-80">STATUS: NOMINAL</span>
          </div>
          <button className="material-symbols-outlined text-[#8c909f] hover:text-[#e1e2ec] transition-colors p-2 rounded-xl">settings_input_component</button>
        </div>
      </header>

      {/* Main Container Shell */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/50 flex flex-col hidden md:flex shrink-0 z-20 shadow-2xl">
          <div className="p-8">
            <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.3em] italic">SYSTEM_INDEX</span>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'Telemetry', icon: 'Activity', active: true },
              { label: 'Kinematics', icon: 'Share2', active: false },
              { label: 'AI_Stability', icon: 'Brain', active: false },
              { label: 'Command_Log', icon: 'terminal', active: false },
              { label: 'System_Sync', icon: 'sync_alt', active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest italic transition-all group ${
                  item.active 
                    ? 'bg-[#4d8eff]/10 text-[#adc6ff] border border-[#4d8eff]/30 shadow-lg shadow-[#4d8eff]/5' 
                    : 'text-[#8c909f] hover:text-[#e1e2ec] hover:bg-[#1d2027]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] transition-transform group-hover:scale-110 ${item.active ? 'text-[#adc6ff]' : 'text-[#8c909f]'}`}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="p-8 bg-[#10131a]/50 border-t border-[#424754]/30">
            <div className="p-5 bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[20px] shadow-inner group/eqn transition-all hover:border-[#4cd7f6]/50">
              <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50 block mb-3">CORE_EQUATION</span>
              <code className="font-mono text-[#4cd7f6] text-[12px] font-black italic tracking-tighter group-hover/eqn:text-[#adc6ff] transition-colors leading-relaxed">
                mx'' + cx' + kx = F(t)
              </code>
            </div>
          </div>
        </aside>

        {/* Main Workspace Area */}
        <main className="flex-1 overflow-y-auto p-8 bg-[#10131a] relative flex flex-col gap-8 custom-scrollbar">
          {/* Header Dashboard Panel */}
          <section className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] px-10 py-6 flex justify-between items-center shadow-2xl relative z-10 animate-in fade-in duration-700">
            <div className="flex items-center gap-6">
              <div className="w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_15px_#10B981] animate-pulse"></div>
              <h2 className="font-mono text-[12px] text-[#e1e2ec] font-black uppercase tracking-[0.2em] italic">CONTROL DYNAMICS // ACTIVE_STABILITY_PROTOCOL</h2>
            </div>
            <div className="flex gap-16">
              <div className="flex flex-col items-end gap-1">
                <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">SAMPLING_RATE</span>
                <span className="font-mono text-xl font-black text-[#4cd7f6] italic tracking-tighter">2000 Hz</span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">LATENCY_MS</span>
                <span className="font-mono text-xl font-black text-[#4cd7f6] italic tracking-tighter">0.42 ms</span>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-12 gap-8 flex-1">
            {/* Stability Indicators & PID Controls */}
            <section className="col-span-12 lg:col-span-3 flex flex-col gap-8">
              {/* PID Control Panel */}
              <div className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] flex flex-col shadow-2xl overflow-hidden group/pid">
                <header className="h-10 bg-[#1d2027] px-8 flex items-center justify-between border-b border-[#424754]/50 shrink-0">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">PID_CONTROLLER_GAIN</span>
                  <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] transition-colors text-[18px]">settings</button>
                </header>
                <div className="p-8 space-y-8 flex-1">
                  {[
                    { label: 'PROPORTIONAL (Kp)', value: '12.45', progress: 65, color: 'text-[#adc6ff]', accent: 'accent-[#adc6ff]' },
                    { label: 'INTEGRAL (Ki)', value: '0.82', progress: 30, color: 'text-[#4cd7f6]', accent: 'accent-[#4cd7f6]' },
                    { label: 'DERIVATIVE (Kd)', value: '4.12', progress: 45, color: 'text-[#ffb786]', accent: 'accent-[#ffb786]' },
                  ].map((gain) => (
                    <div key={gain.label} className="space-y-4 group/item">
                      <div className="flex justify-between items-center">
                        <label className={`font-mono text-[10px] ${gain.color} font-black uppercase tracking-widest italic opacity-70 group-hover/item:opacity-100 transition-opacity`}>{gain.label}</label>
                        <span className="font-mono text-[12px] text-[#e1e2ec] font-black italic">{gain.value}</span>
                      </div>
                      <input className={`w-full h-2 bg-[#0b0e15] border border-[#424754]/50 rounded-full appearance-none cursor-crosshair ${gain.accent}`} type="range" defaultValue={gain.progress} />
                    </div>
                  ))}
                  <button className="w-full py-5 bg-[#4d8eff]/10 border-2 border-[#4d8eff]/30 text-[#adc6ff] font-mono text-[10px] font-black uppercase tracking-widest italic hover:bg-[#4d8eff]/20 hover:border-[#adc6ff] active:scale-[0.98] transition-all rounded-2xl shadow-xl mt-4">
                    Execute Auto-SlidersHorizontal
                  </button>
                </div>
              </div>

              {/* State Space Matrix */}
              <div className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] flex flex-col shadow-2xl overflow-hidden group/matrix">
                <header className="h-10 bg-[#1d2027] px-8 flex items-center border-b border-[#424754]/50 shrink-0">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">STATE_SPACE_MATRICES [A,B,C,D]</span>
                </header>
                <div className="p-8 space-y-8 flex-1 overflow-y-auto custom-scrollbar">
                  <div className="relative p-6 bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[30px] shadow-inner group/val">
                    <div className="absolute inset-y-6 left-4 w-[2px] bg-[#4cd7f6]/30"></div>
                    <div className="absolute inset-y-6 right-4 w-[2px] bg-[#4cd7f6]/30"></div>
                    <div className="grid grid-cols-2 gap-y-6 text-center font-mono text-[13px] font-black italic tracking-tighter">
                      <span className="text-[#e1e2ec] hover:text-[#4cd7f6] transition-colors">-0.124</span>
                      <span className="text-[#e1e2ec] hover:text-[#4cd7f6] transition-colors">1.000</span>
                      <span className="text-[#e1e2ec] hover:text-[#4cd7f6] transition-colors">-9.810</span>
                      <span className="text-[#e1e2ec] hover:text-[#4cd7f6] transition-colors">-0.452</span>
                    </div>
                    <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-40 mt-6 block text-center">SYSTEM_MATRIX_A</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {['B', 'C'].map((m) => (
                      <div key={m} className="bg-[#0b0e15] border-2 border-[#424754]/50 p-6 rounded-[24px] text-center group/sub shadow-inner hover:border-[#4cd7f6]/50 transition-all">
                        <span className="font-mono text-[14px] text-[#4cd7f6] font-black italic block mb-2">{m === 'B' ? '0.00' : '1.00'}</span>
                        <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-40">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Central Visualization Share2 */}
            <section className="col-span-12 lg:col-span-6 flex flex-col gap-8">
              {/* Bode Plot / Frequency Response */}
              <div className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] flex flex-col shadow-2xl flex-1 overflow-hidden group/visuals">
                <header className="h-10 bg-[#1d2027] px-8 flex items-center justify-between border-b border-[#424754]/50 shrink-0">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">FREQUENCY_RESPONSE // BODE_DIAGRAM</span>
                  <div className="flex gap-8">
                    <span className="font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-widest italic">PHASE_MARGIN: 42.5°</span>
                    <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic">GAIN_MARGIN: 12.1dB</span>
                  </div>
                </header>
                <div className="flex-1 relative overflow-hidden bg-[#0b0e15]/50 group-hover/visuals:bg-[#0b0e15]/30 transition-all">
                  {/* Grid System */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#202B3C 1px, transparent 1px), linear-gradient(90deg, #202B3C 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                  
                  {/* Bode SVG Curves */}
                  <svg className="absolute inset-0 w-full h-full p-12" preserveAspectRatio="none" viewBox="0 0 400 200">
                    <path 
                      className="drop-shadow-[0_0_15px_#adc6ff]" 
                      d="M0,150 Q100,140 180,80 T300,40 T400,20" 
                      fill="none" 
                      stroke="#adc6ff" 
                      strokeWidth="2"
                    ></path>
                    <path 
                      d="M0,180 Q120,170 200,100 T350,60 T400,50" 
                      fill="none" 
                      opacity="0.4" 
                      stroke="#4cd7f6" 
                      strokeDasharray="8 4" 
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                  
                  <div className="absolute bottom-10 right-10 flex flex-col items-end pointer-events-none opacity-40">
                    <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic mb-2">Hz RANGE</span>
                    <span className="font-mono text-[11px] text-[#e1e2ec] font-black italic tracking-tighter">10⁻¹ — 10³</span>
                  </div>
                </div>

                <div className="h-[180px] bg-[#1d2027] border-t border-[#424754]/50 p-8 grid grid-cols-2 gap-8 shrink-0">
                  <div className="bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[30px] flex items-center justify-center relative overflow-hidden group/locus shadow-inner hover:border-[#adc6ff]/50 transition-all cursor-crosshair">
                    <img className="w-full h-full object-cover opacity-20 grayscale scale-110 group-hover/locus:scale-100 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBJlPxJZHJBkqDsewLZMzKOBrf50MpjmLtkOG2m51AItMKRsJGYnOEN0y02no2jHs9cmc3JEpn_74Ro6gnfgIJlyclighfTi7xfXltXR25U3KyU64WlJdzu9LUmsDaCie6-INbtmet3SQGv-e8N9WE6Xi8y1qwzelekOXfZ_9Py3CP-NiQs1HDxYYyB1icN9ddl0oSyPWFdHs_r4aOG9-VcJZbruEyYMxkp9Ak0rwH9P07SaRonbYjcUs9lULwCY0yQ3d7HZPbYpcEm" alt="Root Locus" />
                    <span className="absolute font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-widest italic drop-shadow-lg opacity-80 group-hover/locus:opacity-100 transition-opacity">ROOT_LOCUS_VIEW</span>
                  </div>
                  <div className="bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[30px] flex items-center justify-center relative overflow-hidden group/nyquist shadow-inner hover:border-[#4cd7f6]/50 transition-all cursor-crosshair">
                    <img className="w-full h-full object-cover opacity-15 scale-110 group-hover/nyquist:scale-100 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCzAo3SssXo_avL3cysaC9Fgeas4U1w63xIHOY7Pv7DknGBkJf5VQKWsjidIpKc95oVJscIETJJbPMOfY3ouK5k30JJYBIkWyQSKMvkqujuG8352avJR-y8GGXIbP-3roIgZwR3R6_lbQGD71dQVxbSoivWL7Bh2IowKQshVMEi4H6IjFOtZ5uEc6Wr9fuICc1Ks1RDLUoWAvGiLW-zOWV1CMXgSgx6_XKmfFy-7333kIYHniwHmCsIJaE0cOhKZQsD0RhUVjffD1_7" alt="Nyquist" />
                    <span className="absolute font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic drop-shadow-lg opacity-80 group-hover/nyquist:opacity-100 transition-opacity">NYQUIST_STABILITY</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Real-time Telemetry & MPC */}
            <section className="col-span-12 lg:col-span-3 flex flex-col gap-8">
              {/* MPC Prediction */}
              <div className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] flex flex-col shadow-2xl h-1/2 overflow-hidden group/mpc">
                <header className="h-10 bg-[#1d2027] px-8 flex items-center border-b border-[#424754]/50 shrink-0">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">MPC_PREDICTION_HORIZON</span>
                </header>
                <div className="p-10 flex flex-col h-full overflow-hidden">
                  <div className="flex justify-between items-baseline mb-8">
                    <span className="font-mono text-4xl font-black text-[#adc6ff] italic tracking-tighter drop-shadow-[0_0_15px_rgba(173,198,255,0.3)]">98.4%</span>
                    <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">CONFIDENCE</span>
                  </div>
                  <div className="flex-1 flex items-end gap-2 pb-8 px-2">
                    {[40, 45, 60, 55, 70, 75, 80, 85, 90, 95].map((h, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-t-xl transition-all duration-700 hover:scale-x-110 ${i > 4 ? 'bg-[#4cd7f6]/40 border-x-2 border-[#4cd7f6]/20' : 'bg-[#adc6ff]/20'}`} 
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.2em] italic opacity-60 animate-pulse mt-auto">Trajectory Optimization Active</span>
                </div>
              </div>

              {/* Vibration Activity */}
              <div className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] flex flex-col shadow-2xl h-1/2 overflow-hidden group/vibe">
                <header className="h-10 bg-[#1d2027] px-8 flex items-center border-b border-[#424754]/50 shrink-0">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">VIBRATION_MONITORING_RMS</span>
                </header>
                <div className="p-10 space-y-10 flex-1 flex flex-col overflow-y-auto custom-scrollbar">
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { l: 'X_AXIS', v: '0.02g', c: 'text-[#e1e2ec]' },
                      { l: 'Y_AXIS', v: '0.05g', c: 'text-[#e1e2ec]' },
                      { l: 'Z_AXIS', v: '0.42g', c: 'text-[#ffb4ab]' },
                    ].map((axis) => (
                      <div key={axis.l} className="text-center group/axis transition-transform hover:scale-110">
                        <span className={`font-mono text-[14px] font-black italic block mb-2 ${axis.c}`}>{axis.v}</span>
                        <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-40">{axis.l}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[30px] overflow-hidden relative shadow-inner group-hover/vibe:border-[#ffb4ab]/30 transition-all">
                    <svg className="absolute inset-0 w-full h-full p-4" preserveAspectRatio="none" viewBox="0 0 100 40">
                      <polyline 
                        fill="none" 
                        points="0,20 10,22 20,18 30,25 40,15 50,20 60,35 70,5 80,20 90,22 100,20" 
                        stroke="#ffb4ab" 
                        strokeWidth="1"
                        className="drop-shadow-[0_0_10px_#ffb4ab]"
                      ></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Footer Global Controls */}
      <footer className="h-24 bg-[#10131a] border-t border-[#424754]/50 px-12 flex justify-center items-center gap-20 z-[60] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)]">
        {[
          { icon: 'play_arrow', active: false },
          { icon: 'pause', active: true },
          { icon: 'stop', active: false },
          { icon: 'emergency_home', active: false },
        ].map((item, idx) => (
          <React.Fragment key={idx}>
            <button className={`material-symbols-outlined text-[32px] transition-all hover:scale-125 active:scale-90 ${item.active ? 'text-[#4cd7f6] drop-shadow-[0_0_15px_rgba(76,215,246,0.5)]' : 'text-[#8c909f] opacity-40 hover:opacity-100'}`}>
              {item.icon}
            </button>
            {idx === 2 && <div className="w-[2px] h-8 bg-[#424754]/30"></div>}
          </React.Fragment>
        ))}
      </footer>

      {/* Polish: HUD Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>
      <div className="fixed inset-0 pointer-events-none z-[101] bg-[#4cd7f6]/5 mix-blend-overlay opacity-10"></div>

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

export default ControlDynamicsEngineeringOS_598dfa;
