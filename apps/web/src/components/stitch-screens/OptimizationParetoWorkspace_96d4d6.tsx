'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const OptimizationParetoWorkspace_96d4d6 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#4d8eff] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
          <h1 className="font-mono text-[14px] font-black text-[#4d8eff] tracking-tighter uppercase italic">ANTIGRAVITY_OS</h1>
        </div>
        <div className="flex items-center gap-12">
          <nav className="hidden lg:flex items-center gap-12">
            {['TELEMETRY', 'OPTIMIZATION', 'ARCHIVE'].map((nav) => (
              <button key={nav} className={`font-mono text-[10px] font-black uppercase tracking-[0.2em] italic transition-all ${nav === 'OPTIMIZATION' ? 'text-[#4cd7f6] drop-shadow-[0_0_10px_#4cd7f6]' : 'text-[#8c909f] hover:text-[#e1e2ec]'}`}>
                {nav}
              </button>
            ))}
          </nav>
          <div className="font-mono text-[10px] text-[#4d8eff] border-l border-[#424754]/50 pl-12 font-black uppercase tracking-widest italic animate-pulse">
            GPU: 94% | SIM: ACTIVE
          </div>
        </div>
      </header>

      {/* Main Container Shell */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/50 flex flex-col hidden lg:flex shrink-0 z-20 shadow-2xl">
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
          <div className="p-8 mt-auto border-t border-[#424754]/30">
            <div className="bg-[#1d2027] p-6 rounded-[30px] border-2 border-[#424754]/50 shadow-inner">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">THREAD_LOAD</span>
                <span className="font-mono text-[10px] text-[#4cd7f6] font-black italic">82%</span>
              </div>
              <div className="h-1.5 bg-[#0b0e15] rounded-full border border-[#424754]/30 overflow-hidden shadow-inner">
                <div className="h-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]" style={{ width: '82%' }}></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Workspace Canvas */}
        <main className="flex-1 overflow-y-auto bg-[#10131a] relative p-8 space-y-8 custom-scrollbar">
          {/* Top: Objective & Constraint Configuration */}
          <section className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] p-8 grid grid-cols-1 md:grid-cols-4 gap-12 shadow-2xl transition-all hover:border-[#4d8eff]/20 group/config">
            <div className="md:col-span-4 flex justify-between items-center border-b border-[#424754]/30 pb-4">
              <span className="font-mono text-[11px] text-[#e1e2ec] font-black uppercase tracking-[0.4em] italic">OPTIMIZATION_GOALS</span>
              <span className="font-mono text-[10px] text-[#ffb786] font-black italic uppercase animate-pulse">ESTIMATED_RUN_TIME: 142s</span>
            </div>
            {[
              { l: 'TARGET_MASS (KG)', v: 45, m: 12.4, g: 45.0, c: 'accent-[#4d8eff]' },
              { l: 'YIELD_STRENGTH (MPA)', v: 78, m: 420, g: 850, c: 'accent-[#4cd7f6]' },
              { l: 'UNIT_COST (USD)', v: 22, m: 145, g: 320, c: 'accent-[#ffb786]' },
              { l: 'CO2_FOOTPRINT (KG)', v: 15, m: 12.0, g: 3.5, c: 'accent-[#4d8eff]' },
            ].map((goal) => (
              <div key={goal.l} className="space-y-4">
                <label className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60 ml-4">{goal.l}</label>
                <input className={`w-full h-1.5 bg-[#0b0e15] rounded-full border border-[#424754]/50 cursor-pointer ${goal.c}`} type="range" defaultValue={goal.v} />
                <div className="flex justify-between font-mono text-[9px] font-black italic opacity-40 px-2 uppercase tracking-tighter">
                  <span>MIN: {goal.m}</span>
                  <span>GOAL: {goal.g}</span>
                </div>
              </div>
            ))}
          </section>

          {/* Center: Pareto & Insights */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[500px]">
            {/* Pareto Chart */}
            <div className="lg:col-span-8 bg-[#1d2027] border-2 border-[#424754]/50 rounded-[50px] p-10 relative overflow-hidden shadow-2xl flex flex-col group/pareto hover:border-[#4cd7f6]/30 transition-all">
              <header className="flex items-center justify-between mb-8 z-10 relative">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>BarChart3</span>
                  <span className="font-mono text-[12px] font-black text-[#e1e2ec] uppercase tracking-[0.3em] italic">PARETO_FRONT_VISUALIZATION_V4.2</span>
                </div>
                <div className="flex gap-4">
                  <button className="bg-[#0b0e15] px-6 py-2 rounded-xl font-mono text-[10px] font-black border border-[#424754]/50 text-[#8c909f] hover:text-[#4cd7f6] transition-all uppercase italic">Y: MASS</button>
                  <button className="bg-[#0b0e15] px-6 py-2 rounded-xl font-mono text-[10px] font-black border border-[#424754]/50 text-[#8c909f] hover:text-[#4cd7f6] transition-all uppercase italic">X: STRENGTH</button>
                </div>
              </header>
              <div className="flex-1 relative border-l-2 border-b-2 border-[#424754]/50 bg-[#0b0e15] rounded-bl-3xl overflow-hidden group-hover/pareto:bg-[#0b0e15]/50 transition-all duration-1000 animate-in zoom-in-95 duration-1000">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#424754 1px, transparent 1px), linear-gradient(90deg, #424754 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 5,95 Q 15,20 95,5" fill="none" stroke="#4cd7f6" strokeDasharray="2 1" strokeWidth="0.5" className="animate-pulse" />
                  {[
                    { x: 10, y: 85 }, { x: 20, y: 65 }, { x: 35, y: 45, main: true }, { x: 55, y: 25 }, { x: 85, y: 12 }
                  ].map((pt, i) => (
                    <g key={i}>
                      <circle cx={pt.x} cy={pt.y} r={pt.main ? 2.5 : 1.5} className={`${pt.main ? 'fill-[#4cd7f6] animate-ping opacity-40' : 'fill-[#adc6ff] opacity-60'}`} />
                      <circle cx={pt.x} cy={pt.y} r={pt.main ? 1.2 : 0.8} className={`${pt.main ? 'fill-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]' : 'fill-[#adc6ff]'}`} />
                    </g>
                  ))}
                  {/* AI Insight Shade */}
                  <path d="M 30,50 L 50,40 L 45,60 Z" fill="#ffb786" fillOpacity="0.15" stroke="#ffb786" strokeWidth="0.2" className="animate-pulse" />
                </svg>
                <div className="absolute top-[40%] left-[35%] bg-[#1d2027]/90 backdrop-blur-xl border border-[#4cd7f6]/50 p-4 rounded-2xl shadow-2xl animate-in fade-in duration-1000 delay-500">
                  <span className="font-mono text-[9px] text-[#4cd7f6] font-black uppercase italic tracking-widest block mb-1">OPTIMAL_CLUSTER_09</span>
                  <div className="h-0.5 bg-[#4cd7f6] w-full shadow-[0_0_10px_#4cd7f6]"></div>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="lg:col-span-4 bg-[#1d2027] border-2 border-[#424754]/50 rounded-[50px] p-10 flex flex-col gap-8 shadow-2xl group/insights hover:border-[#ffb786]/30 transition-all">
              <header className="flex items-center gap-4 border-b border-[#424754]/30 pb-6">
                <span className="material-symbols-outlined text-[#ffb786] text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>Brain</span>
                <span className="font-mono text-[12px] font-black text-[#e1e2ec] uppercase tracking-[0.3em] italic">AI_GENERATIVE_INSIGHTS</span>
              </header>
              <div className="flex-1 overflow-y-auto space-y-6 custom-scrollbar pr-2">
                {[
                  { t: 'STRENGTH_DENSITY_ANOMALY', c: 'border-[#ffb786]', text: 'Lattice structure Alpha-9 shows 12% improvement in fatigue life over baseline with 3% mass penalty. Highly manufacturable via SLM.', bg: 'bg-[#ffb786]/10' },
                  { t: 'PARETO_EQUILIBRIUM', c: 'border-[#4cd7f6]', text: 'Point 35,45 represents the maximum curvature of the trade-off front. Recommended starting point for refinement.', bg: 'bg-[#4cd7f6]/10' },
                ].map((insight) => (
                  <div key={insight.t} className={`${insight.bg} border-l-[8px] ${insight.c} p-6 rounded-[30px] space-y-2 transition-all hover:translate-x-2`}>
                    <p className="font-mono text-[11px] text-[#e1e2ec] font-black italic uppercase tracking-widest">{insight.t}</p>
                    <p className="font-mono text-[12px] text-[#8c909f] font-black italic leading-relaxed uppercase tracking-tighter opacity-80">{insight.text}</p>
                  </div>
                ))}
                <div className="p-6 bg-[#0b0e15] border-2 border-dashed border-[#424754]/50 rounded-[30px] italic">
                  <p className="font-mono text-[10px] text-[#8c909f] font-black italic uppercase tracking-widest opacity-40 animate-pulse text-center">Waiting for further simulation results... (14/50 completed)</p>
                </div>
              </div>
              <button className="w-full bg-[#adc6ff] py-5 rounded-[25px] font-mono text-[11px] font-black text-[#002e6a] uppercase tracking-widest italic shadow-[0_15px_30px_-10px_rgba(173,198,255,0.4)] hover:scale-105 active:scale-95 transition-all">REFINE_MODEL</button>
            </div>
          </section>

          {/* Bottom: Variant Comparison */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              { t: 'VARIANT_001_BASE', s: 'OPTIMIZED', icon: 'verified', fill: true, m: '24.2kg', str: '892 MPa', fat: '1.2e6 cycles', mfg: '98%', img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuCQGBQE-SlOrUsO7paiQ_znI1qxFbK3y1X29KK0ZPebW4vlTWpYNHtaZ-cM6BF95CEnONq8UJ3J-ZeW3K6CehQXSoV2fm0arVgso8U6LcsinuEgWydoCiMwo9ZihTfLOeVBqrHiFUcChSc9T54LZcC8vb2TG8MRvJg81RQdNa7ONtcswqHsDYz7d8QqwVfMu3yYort1NqaNCST_8CCwPHKQVVr3lFNdWMjEeaqxiwtwggVT0YJ0jCek4XYrbgSVDZpFJbuSrDW1EyLN', color: 'text-[#4d8eff]' },
              { t: 'VARIANT_002_LIGHT', s: 'ULTRA_LITE', icon: 'Zap', fill: false, m: '18.5kg', str: '740 MPa', fat: '0.8e6 cycles', mfg: '82%', img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuBbz5qb5o_MJP9ib_XN5KKLVZ7G99Uq-XKLteyRCw_uSXWQ3VlJRTthb2SSoD6E5NxWguG2ca5fb8D0VmPCtD-SEWJWMjaJNzSVgSUVXXi5yPP0XgntN_E8l1GMqICKwtrwGHPFOJpQW6UYUq0NHl8gpHqaxu4YtqJzbnE6ybtUu31KJSqpFxN-H1WAX4mtIzGJ-G4ru-uXbM3_m0Ba_y8FJ4P1yyAkbYNmhk8imSOc8p8UlBlbPCz7LdeSUvvfQLTFoyyyLM3iFtxs', color: 'text-[#4cd7f6]' },
              { t: 'VARIANT_003_MAX', s: 'DURABLE', icon: 'shield', fill: false, m: '32.1kg', str: '1120 MPa', fat: '5.4e6 cycles', mfg: '91%', img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuBx5MzC9b3sfUAgmyTCYlyrenx3zK1pkm2ahKeJ63ozjDkrQTyy0-gMjWziy0oFWCx06jW_qNvIEMm1nxSZR8UqCdvFub3B4ytxSG2-tKUUWFmHHNo59e6jK0Va4JnL0HC0Ol1MHfQDxyPuiQiCkuGUNnxTFSlQNGcJHm5O-qGideHaHTR-SgpbZ6wihaseYst9u90wsmNDvrWvrEkDXmqmSA04_h7pcIhmPO2EuXoD-TfOZajQIZ0tTfLtxuLcpt_UNeq1xPC2sx2u', color: 'text-[#ffb786]' },
            ].map((variant) => (
              <div key={variant.t} className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] overflow-hidden group shadow-2xl hover:border-[#4cd7f6]/30 transition-all hover:-translate-y-2 duration-500 cursor-pointer">
                <div className="h-40 w-full bg-[#0b0e15] overflow-hidden relative border-b border-[#424754]/30">
                  <img src={variant.img} alt={variant.t} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0" />
                  <div className={`absolute top-6 left-6 px-4 py-2 bg-[#0b0e15]/80 backdrop-blur-xl border border-[#424754]/50 rounded-xl font-mono text-[9px] font-black italic tracking-widest ${variant.color} uppercase`}>
                    {variant.t}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { l: 'MASS', v: variant.m },
                      { l: 'STRENGTH', v: variant.str },
                    ].map(st => (
                      <div key={st.l} className="bg-[#0b0e15] p-4 rounded-2xl border border-[#424754]/30">
                        <p className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50 mb-1">{st.l}</p>
                        <p className="font-mono text-[13px] text-[#4cd7f6] font-black italic tracking-tighter">{st.v}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center gap-2">
                      <span className={`material-symbols-outlined text-[18px] ${variant.color}`} style={{ fontVariationSettings: variant.fill ? "'FILL' 1" : "'FILL' 0" }}>{variant.icon}</span>
                      <span className={`font-mono text-[10px] font-black italic uppercase tracking-widest ${variant.color}`}>{variant.s}</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#ffb786] font-black italic tracking-tighter uppercase opacity-60">{variant.mfg} MFG</span>
                  </div>
                </div>
              </div>
            ))}
            <button className="bg-[#0b0e15] border-2 border-dashed border-[#424754]/50 rounded-[40px] flex flex-col items-center justify-center p-8 gap-4 opacity-40 hover:opacity-100 hover:border-[#4cd7f6]/50 hover:bg-[#1d2027] transition-all group/new cursor-pointer">
              <span className="material-symbols-outlined text-4xl text-[#4cd7f6] group-hover:scale-110 transition-transform">add_circle</span>
              <div className="text-center">
                <p className="font-mono text-[12px] text-[#e1e2ec] font-black uppercase tracking-widest italic">GENERATE_NEW_VARIANT</p>
                <p className="font-mono text-[9px] text-[#8c909f] font-black italic uppercase opacity-60 mt-2">Auto-spawn based on current trade-offs</p>
              </div>
            </button>
          </section>

          {/* Action Floating Bar */}
          <div className="flex flex-wrap items-center gap-6 mt-8 border-t-2 border-[#424754]/30 pt-8 pb-12">
            <button className="bg-[#adc6ff] px-10 h-14 rounded-[20px] font-mono text-[11px] font-black text-[#002e6a] uppercase tracking-widest italic shadow-[0_15px_30px_-10px_rgba(173,198,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span> SIMULATE
            </button>
            <button className="bg-[#1d2027] border-2 border-[#424754]/50 px-8 h-14 rounded-[20px] font-mono text-[11px] font-black text-[#e1e2ec] uppercase tracking-widest italic hover:bg-[#272a31] transition-all flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px]">compare_arrows</span> COMPARE_SIDE_BY_SIDE
            </button>
            <button className="bg-[#1d2027] border-2 border-[#424754]/50 px-8 h-14 rounded-[20px] font-mono text-[11px] font-black text-[#e1e2ec] uppercase tracking-widest italic hover:bg-[#272a31] transition-all flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span> PROMOTE_TO_BASELINE
            </button>
            <button className="ml-auto bg-[#4cd7f6] px-10 h-14 rounded-[20px] font-mono text-[11px] font-black text-[#003640] uppercase tracking-widest italic shadow-[0_15px_30px_-10px_rgba(76,215,246,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px]">download</span> EXPORT_CAD
            </button>
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

export default OptimizationParetoWorkspace_96d4d6;
