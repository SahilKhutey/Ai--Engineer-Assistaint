'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const ElectricalControlMathEngineeringOS_d883f3 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#4d8eff] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
          <h1 className="font-mono text-[14px] font-black text-[#4d8eff] tracking-tighter uppercase italic">ANTIGRAVITY_OS // ELECTRICAL_CONTROL</h1>
        </div>
        <div className="flex items-center gap-8">
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
                    ? 'bg-[#4d8eff]/10 text-[#4d8eff] border border-[#4d8eff]/30 shadow-lg shadow-[#4d8eff]/5' 
                    : 'text-[#8c909f] hover:text-[#e1e2ec] hover:bg-[#1d2027]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] transition-transform group-hover:scale-110 ${item.active ? 'text-[#4d8eff]' : 'text-[#8c909f]'}`}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-1 bg-[#10131a] relative custom-scrollbar grid grid-cols-1 lg:grid-cols-2 gap-1 bg-[#424754]/30">
          
          {/* Left Column: Circuit & Maxwell */}
          <div className="flex flex-col gap-1">
            {/* Circuit Inputs */}
            <section className="bg-[#1d2027] p-8 space-y-8 animate-in slide-in-from-left duration-700">
              <header className="flex justify-between items-center">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">Circuit_Inputs_v1.0</span>
                <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] transition-colors text-[18px]">settings</button>
              </header>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { label: 'VOLTAGE (V)', value: '230.00', color: 'text-[#4cd7f6]' },
                  { label: 'CURRENT (I)', value: '12.45', color: 'text-[#4cd7f6]' },
                  { label: 'RESISTANCE (R)', value: '18.47', unit: 'Ω', color: 'text-[#adc6ff]' },
                ].map((input) => (
                  <div key={input.label} className="space-y-3">
                    <label className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic">{input.label}</label>
                    <div className="relative group/input">
                      <input 
                        type="text" 
                        readOnly 
                        value={input.value}
                        className={`w-full bg-[#0b0e15] border-2 border-[#424754]/50 rounded-2xl px-4 py-4 font-mono text-xl font-black ${input.color} italic shadow-inner transition-all focus:border-[#4cd7f6]/50 outline-none`}
                      />
                      {input.unit && <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[#8c909f] opacity-50">{input.unit}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-8 border-t border-[#424754]/30 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic">OHM'S LAW DERIVATION</span>
                  <span className="font-mono text-[12px] text-[#4cd7f6] font-black italic tracking-widest">V = I · R</span>
                </div>
                <div className="h-2 w-full bg-[#0b0e15] rounded-full overflow-hidden shadow-inner border border-[#424754]/20">
                  <div className="h-full bg-[#4cd7f6] shadow-[0_0_15px_rgba(76,215,246,0.6)] transition-all duration-1000" style={{ width: '72%' }}></div>
                </div>
              </div>
            </section>

            {/* Maxwell Equations */}
            <section className="bg-[#1d2027] p-8 space-y-8 flex-1 flex flex-col animate-in slide-in-from-left duration-1000">
              <header className="flex justify-between items-center">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">Maxwell_Field_Constants</span>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_10px_#10B981]"></div>
                  <span className="font-mono text-[10px] text-[#10B981] font-black uppercase tracking-widest italic">REALTIME</span>
                </div>
              </header>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'GAUSS_LAW', formula: '∇ · E = ρ / ε₀', items: [['PERMITTIVITY (ε₀)', '8.854e-12'], ['CHARGE DENSITY (ρ)', '1.442e-06']] },
                  { label: 'FARADAY_LAW', formula: '∇ × E = -∂B / ∂t', items: [['MAGNETIC_FLUX (B)', '0.982 T'], ['INDUCED_EMF', '42.1 V/m']] },
                ].map((panel) => (
                  <div key={panel.label} className="bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[30px] p-6 relative overflow-hidden group/equation transition-all hover:border-[#4cd7f6]/30 shadow-2xl">
                    <span className="absolute top-4 right-6 font-mono text-[8px] text-[#8c909f] font-black opacity-30 italic">{panel.label}</span>
                    <div className="mt-8 text-center space-y-6">
                      <p className="font-mono text-xl font-black text-[#adc6ff] italic tracking-tighter drop-shadow-xl">{panel.formula}</p>
                      <div className="space-y-2 text-left border-t border-[#424754]/30 pt-4">
                        {panel.items.map(([l, v]) => (
                          <div key={l} className="flex justify-between font-mono text-[9px] italic">
                            <span className="text-[#8c909f] font-black uppercase tracking-widest opacity-60">{l}</span>
                            <span className="text-[#e1e2ec] font-black">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-1 bg-[#0b0e15] rounded-[30px] border-2 border-[#424754]/50 relative overflow-hidden group/viz shadow-2xl">
                <header className="absolute top-0 w-full z-10 p-6 bg-gradient-to-b from-[#0b0e15] to-transparent">
                  <span className="font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-[0.2em] italic">VECTOR_FIELD_VISUALIZATION</span>
                </header>
                <img 
                  className="w-full h-full object-cover opacity-60 grayscale brightness-125 scale-110 group-hover/viz:scale-100 transition-all duration-[5000ms]" 
                  src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBEpIORiKyfBTqh-h9pgz4rqMES9Yd2_SxDKOrh-zONzBLsdR-fWBbGfcLUIf2OkCInAq93IBU6rdmMjW5jNNj8GEI1Xp9NYwbYY2XWrHgFgJFo8aYwekrYliNpcaL9WLVivWdKI1KPddBCRlQ-R7n8noqh1dI6NVzZDtLsWyY-y9cF7fy0NhMiAyPWNoRc4DSIvq0uZq392uxkDr_54VEACuycGcYHQJOrOUx_j4dhkOGp0_BgruReP7egZnc9QvVYidnh-S_rLtVc" 
                  alt="Vector Field" 
                />
                {/* HUD Scanlines */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>
              </div>
            </section>
          </div>

          {/* Right Column: Control Systems */}
          <div className="flex flex-col gap-1">
            {/* Control Logic Config */}
            <section className="bg-[#1d2027] p-8 space-y-8 animate-in slide-in-from-right duration-700">
              <header className="flex justify-between items-center">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">Control_Logic_Config</span>
                <span className="font-mono text-[10px] text-[#ffb786] font-black uppercase tracking-widest italic">STABILITY: NOMINAL</span>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic border-b border-[#424754]/50 pb-2">TRANSFER_FUNCTION H(s)</h3>
                  <div className="font-mono text-[#adc6ff] text-center p-8 bg-[#0b0e15] rounded-[30px] border-2 border-[#424754]/50 shadow-inner group/tf transition-all hover:border-[#4cd7f6]/30">
                    <p className="border-b-2 border-[#4d8eff]/30 pb-3 text-lg font-black italic tracking-tighter">10(s + 1)</p>
                    <p className="pt-3 text-lg font-black italic tracking-tighter">s² + 4s + 10</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic border-b border-[#424754]/50 pb-2">PID_GAIN_MATRIX</h3>
                  <div className="space-y-6">
                    {[
                      { l: 'Kp', v: '1.50', c: 'bg-[#4cd7f6]' },
                      { l: 'Ki', v: '0.05', c: 'bg-[#4cd7f6]' },
                      { l: 'Kd', v: '0.25', c: 'bg-[#4cd7f6]' },
                    ].map((pid) => (
                      <div key={pid.l} className="space-y-2">
                        <div className="flex justify-between items-baseline">
                          <span className="font-mono text-[11px] text-[#4cd7f6] font-black italic">{pid.l}:</span>
                          <span className="font-mono text-[12px] text-[#e1e2ec] font-black italic">{pid.v}</span>
                        </div>
                        <div className="h-1.5 w-full bg-[#0b0e15] rounded-full overflow-hidden shadow-inner">
                          <div className={`${pid.c} h-full rounded-full transition-all duration-1000`} style={{ width: `${parseFloat(pid.v) * 20}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Analysis Diagrams */}
            <section className="bg-[#1d2027] p-8 space-y-8 flex-1 flex flex-col animate-in slide-in-from-right duration-1000">
              <header className="flex justify-between items-center">
                <div className="flex gap-8">
                  <button className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.2em] italic border-b-2 border-[#4cd7f6] pb-1">BODE_PLOT</button>
                  <button className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic opacity-40 hover:opacity-100 transition-all pb-1">ROOT_LOCUS</button>
                </div>
                <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] transition-colors text-[18px]">Maximize2</button>
              </header>
              <div className="flex-1 bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[40px] relative overflow-hidden p-8 shadow-inner group/plot transition-all hover:border-[#4cd7f6]/30">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#4cd7f6 1px, transparent 1px), linear-gradient(90deg, #4cd7f6 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <svg className="absolute inset-0 w-full h-full p-12 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path 
                    className="drop-shadow-[0_0_15px_rgba(173,198,255,0.5)] transition-all duration-1000" 
                    d="M0,80 Q25,20 50,50 T100,20" 
                    fill="none" 
                    stroke="#adc6ff" 
                    strokeWidth="2"
                  ></path>
                  <path 
                    className="opacity-40 transition-all duration-1000" 
                    d="M0,95 Q30,85 50,88 T100,60" 
                    fill="none" 
                    stroke="#4cd7f6" 
                    strokeDasharray="4 4" 
                    strokeWidth="1.5"
                  ></path>
                </svg>
                <div className="absolute bottom-8 right-8 bg-[#1d2027]/80 backdrop-blur-xl p-4 border-2 border-[#424754]/50 rounded-2xl flex flex-col gap-3 shadow-2xl group/legend">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#adc6ff] rounded-sm shadow-[0_0_8px_#adc6ff]"></div>
                    <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic">Magnitude (dB)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 border-2 border-[#4cd7f6] border-dashed rounded-sm"></div>
                    <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic">Phase (Deg)</span>
                  </div>
                </div>
              </div>
              {/* AI Reasoning Panel */}
              <div className="bg-[#ffb786]/5 border-2 border-[#ffb786]/20 rounded-[30px] p-8 shadow-xl group/analyst transition-all hover:bg-[#ffb786]/10 hover:border-[#ffb786]/40 cursor-help">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-[#ffb786] text-[24px]">Brain</span>
                  <span className="font-mono text-[11px] text-[#ffb786] font-black uppercase tracking-[0.2em] italic">STABILITY_ANALYST</span>
                </div>
                <p className="font-mono text-[11px] text-[#e1e2ec] font-black italic leading-relaxed opacity-90">
                  Current phase margin of <span className="text-[#ffb786] underline decoration-dotted underline-offset-4">42.8°</span> at <span className="text-[#ffb786] underline decoration-dotted underline-offset-4">2.4 rad/s</span> suggests potential resonance. Recommendation: Increase <span className="text-[#4cd7f6]">Kd</span> by <span className="text-[#ffb786]">15%</span> to dampen overshoot and improve settling time below <span className="text-[#4cd7f6]">500ms</span>.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-12 right-12 w-16 h-16 bg-[#4cd7f6] rounded-full flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(76,215,246,0.6)] hover:scale-110 active:scale-90 transition-all z-[100] group/fab">
        <span className="material-symbols-outlined text-[#003640] text-3xl font-black group-hover:rotate-[360deg] transition-transform duration-700" style={{ fontVariationSettings: "'FILL' 1" }}>Zap</span>
      </button>

      {/* Polish: HUD Elements */}
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
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};

export default ElectricalControlMathEngineeringOS_d883f3;
