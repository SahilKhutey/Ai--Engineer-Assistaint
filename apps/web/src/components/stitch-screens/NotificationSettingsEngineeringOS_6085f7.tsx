'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const NotificationSettingsEngineeringOS_6085f7 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#adc6ff]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">Sliders</span>
          <h1 className="font-mono text-[12px] font-black text-[#adc6ff] uppercase tracking-widest italic">SIGNAL_COMMAND_v4.0</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 px-4 py-1.5 bg-[#191b23] border border-[#424754]/50 rounded-xl shadow-inner">
            <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic">SYSTEM_STATUS</span>
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]"></div>
          </div>
          <button className="material-symbols-outlined text-[#8c909f] hover:text-[#adc6ff] transition-all text-[22px]">settings_input_component</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#191b23] border-r border-[#424754]/30 hidden lg:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-8">
            <h2 className="font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-[0.2em] italic opacity-50">CORE_DOMAINS</h2>
          </div>
          <nav className="flex flex-col space-y-1">
            {[
              { label: 'PHYSICS_STREAM', icon: 'blur_on' },
              { label: 'AI_CORE', icon: 'Brain' },
              { label: 'INFRA_GRID', icon: 'Share2' },
              { label: 'MFG_LOGS', icon: 'precision_manufacturing' },
            ].map((item) => (
              <div 
                key={item.label}
                className="flex items-center gap-4 px-6 py-3.5 transition-all cursor-pointer text-[#8c909f] hover:bg-[#1d2027] hover:text-[#e1e2ec] border-l-2 border-transparent hover:border-[#adc6ff]"
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span className="font-mono text-[11px] uppercase tracking-tight italic">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Workspace */}
        <main className="flex-1 overflow-y-auto custom-scrollbar p-10 bg-[#0b0f14] relative group">
          <div className="max-w-5xl mx-auto space-y-10">
            {/* Header / Title */}
            <header className="space-y-2 border-l-4 border-[#4cd7f6] pl-8">
              <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">SIGNAL_ROUTING_MANAGEMENT</span>
              <h1 className="font-mono text-4xl font-black text-[#e1e2ec] tracking-tighter uppercase italic">NOTIFICATION_LOGIC_CONFIG</h1>
            </header>

            {/* Settings Bento Grid */}
            <div className="grid grid-cols-12 gap-8">
              {/* Routing Toggles */}
              <section className="col-span-12 lg:col-span-7 bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-3xl overflow-hidden shadow-2xl transition-all hover:scale-[1.005]">
                <header className="h-10 bg-[#1d2027] border-b border-[#424754]/50 flex items-center justify-between px-6 shrink-0">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">DOMAIN_SIGNAL_TOGGLES</span>
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#424754]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#424754]"></div>
                  </div>
                </header>
                <div className="p-8 space-y-2">
                  {[
                    { label: 'Physics Solver', desc: 'Sub-atomic collision delta alerts', icon: 'vibration', color: 'text-[#adc6ff]', active: true },
                    { label: 'AI Logic Engine', desc: 'Neural weights drift & inference lag', icon: 'Brain', color: 'text-[#4cd7f6]', active: false },
                    { label: 'Cluster Health', desc: 'Node thermal status & load balancing', icon: 'developer_board', color: 'text-[#ffb786]', active: true },
                  ].map((item, i) => (
                    <div key={item.label} className={`flex items-center justify-between p-6 hover:bg-[#1d2027] transition-all rounded-2xl group border-b border-[#424754]/20 last:border-0`}>
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-[#0b0e15] rounded-2xl flex items-center justify-center shadow-inner">
                          <span className={`material-symbols-outlined text-[24px] ${item.color}`}>{item.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-mono text-[13px] text-[#e1e2ec] font-black italic">{item.label}</h3>
                          <p className="font-mono text-[10px] text-[#8c909f] font-black italic uppercase tracking-tight opacity-60">{item.desc}</p>
                        </div>
                      </div>
                      <button className={`w-12 h-6 rounded-full relative transition-all duration-300 ${item.active ? 'bg-[#adc6ff] shadow-[0_0_15px_rgba(173,198,255,0.4)]' : 'bg-[#32353c] border border-[#424754]'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${item.active ? 'left-7 shadow-lg' : 'left-1 bg-[#8c909f]'}`}></div>
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Controls Sidebar */}
              <section className="col-span-12 lg:col-span-5 space-y-8">
                {/* Severity Slider */}
                <div className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-3xl p-8 shadow-2xl border-l-4 border-l-[#ffb786] transition-all hover:translate-x-1">
                  <div className="flex justify-between items-end mb-6">
                    <span className="font-mono text-[10px] text-[#ffb786] font-black uppercase tracking-widest italic">SEVERITY_THRESHOLD</span>
                    <span className="font-mono text-[24px] text-[#ffb786] font-black italic tracking-tighter">0.84_dB</span>
                  </div>
                  <div className="h-1.5 bg-[#0b0e15] relative rounded-full mb-4 shadow-inner">
                    <div className="absolute h-full bg-[#ffb786] rounded-full w-[84%] shadow-[0_0_15px_#ffb786]"></div>
                    <div className="absolute h-4 w-4 bg-[#ffb786] rounded-full top-1/2 -translate-y-1/2 left-[84%] -translate-x-1/2 border-4 border-[#1d2027] shadow-xl"></div>
                  </div>
                  <div className="flex justify-between font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">
                    <span>NOMINAL</span>
                    <span>CRITICAL</span>
                  </div>
                </div>

                {/* Autonomy Level */}
                <div className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-3xl overflow-hidden shadow-2xl transition-all hover:translate-x-1">
                  <header className="h-10 bg-[#1d2027] border-b border-[#424754]/50 flex items-center px-6 shrink-0">
                    <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">COGNITION_AUTONOMY_LEVEL</span>
                  </header>
                  <div className="p-8 space-y-6">
                    <div className="grid grid-cols-3 gap-2">
                      {['MANUAL', 'HYBRID', 'FULL_AI'].map((mode, i) => (
                        <button key={mode} className={`h-11 font-mono text-[10px] font-black uppercase tracking-widest italic rounded-xl border transition-all ${i === 1 ? 'bg-[#4cd7f6] text-[#003640] border-transparent shadow-[0_5px_15px_rgba(76,215,246,0.3)]' : 'bg-[#1d2027] text-[#8c909f] border-[#424754]/50 hover:text-[#e1e2ec] hover:border-[#adc6ff]/50'}`}>
                          {mode}
                        </button>
                      ))}
                    </div>
                    <p className="font-mono text-[10px] text-[#8c909f] font-black italic uppercase tracking-tight leading-relaxed opacity-60 bg-[#0b0e15] p-4 rounded-2xl shadow-inner border border-[#424754]/20">
                      Hybrid mode allows autonomous routing for nominal signals while requesting human override for delta events {">"} 0.9 severity.
                    </p>
                  </div>
                </div>

                {/* Wave HUD */}
                <div className="bg-[#0b0e15] border border-[#424754]/50 rounded-3xl p-8 h-40 relative overflow-hidden shadow-2xl group/wave transition-all hover:scale-[1.02]">
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#4cd7f6 1px, transparent 1px), linear-gradient(90deg, #4cd7f6 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic">REAL_TIME_SIGNAL_WAVE</span>
                    <div className="flex items-end gap-1.5 h-16">
                      {[4, 7, 9, 5, 3, 8, 11, 4, 6, 10, 5, 8, 4, 9, 6].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#4cd7f6] rounded-full animate-pulse shadow-[0_0_10px_#4cd7f6]" style={{ height: `${h * 8}%`, animationDelay: `${i * 100}ms` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Bottom Commit Action */}
              <section className="col-span-12 bg-[#1d2027]/50 backdrop-blur-xl border-t-2 border-[#adc6ff]/30 border-x border-b border-[#424754]/50 rounded-3xl p-8 flex flex-wrap items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:border-[#adc6ff]/50">
                <div className="flex gap-12">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60">ACTIVE_FILTERS</span>
                    <p className="font-mono text-[18px] text-[#e1e2ec] font-black italic tracking-tighter">12_VECTORS</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60">LATENCY_COST</span>
                    <p className="font-mono text-[18px] text-[#4cd7f6] font-black italic tracking-tighter">0.024ms</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="h-12 px-10 rounded-2xl border-2 border-[#424754] text-[#e1e2ec] font-mono text-[11px] font-black uppercase tracking-widest italic hover:bg-[#1d2027] transition-all">RESET_TO_DEFAULTS</button>
                  <button className="h-12 px-10 rounded-2xl bg-[#adc6ff] text-[#002e6a] font-mono text-[11px] font-black uppercase tracking-widest italic hover:scale-[1.05] active:scale-[0.95] transition-all shadow-[0_10px_30px_-5px_rgba(173,198,255,0.4)]">COMMIT_CHANGES</button>
                </div>
              </section>
            </div>
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

export default NotificationSettingsEngineeringOS_6085f7;
