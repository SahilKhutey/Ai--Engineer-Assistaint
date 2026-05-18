'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const LinkBudgetCommsAnalysisEngineeringOS_95c3b7 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const telemetry = [
    { time: '14:22:01.03', source: '[TX]', text: 'CARRIER_LOCK_STABLE', color: 'text-[#4cd7f6]' },
    { time: '14:22:01.45', source: '[TX]', text: 'PILOT_TONE_ACTIVE', color: 'text-[#4cd7f6]' },
    { time: '14:22:02.12', source: '[RX]', text: 'ACK_SEQ: 0xFF2A1B', color: 'text-[#adc6ff]' },
    { time: '14:22:03.01', source: '[SYS]', text: 'THERMAL_STAB: 22.4C', color: 'text-[#ffb786]' },
    { time: '14:22:03.88', source: '[RX]', text: 'POWER_MGMT_RECV: NOMINAL', color: 'text-[#adc6ff]' },
    { time: '14:22:04.22', source: '[TX]', text: 'BURST_MODE_STANDBY', color: 'text-[#4cd7f6]' },
    { time: '14:22:04.90', source: '[WARN]', text: 'FADE_MARGIN_LOW: 2.1dB', color: 'text-[#ffb4ab]' },
    { time: '14:22:05.11', source: '[TX]', text: 'RECONFIGURING_QAM_MAP', color: 'text-[#4cd7f6]' },
  ];

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 h-[48px] bg-[#10131a] border-b border-[#424754]/50 flex justify-between items-center px-6 shadow-[0_0_20px_rgba(173,198,255,0.05)] shrink-0">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff]">rocket_launch</span>
          <h1 className="font-mono text-[14px] font-black text-[#adc6ff] uppercase tracking-tighter italic">MISSION CONTROL CENTER</h1>
        </div>
        <div className="flex items-center gap-12">
          <nav className="hidden md:flex gap-8">
            <span className="font-mono text-[10px] text-[#8c909f] hover:text-[#e1e2ec] transition-colors cursor-pointer uppercase tracking-widest">TELEMETRY</span>
            <span className="font-mono text-[10px] text-[#adc6ff] font-black cursor-pointer uppercase tracking-widest border-b-2 border-[#adc6ff]">COMMS ANALYSIS</span>
            <span className="font-mono text-[10px] text-[#8c909f] hover:text-[#e1e2ec] transition-colors cursor-pointer uppercase tracking-widest">TRAJECTORY</span>
          </nav>
          <span className="material-symbols-outlined text-[#adc6ff] cursor-pointer hover:scale-110 transition-transform">settings_input_component</span>
        </div>
      </header>

      <div className="flex flex-1 pt-[48px] overflow-hidden">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/30 hidden md:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-6">
            <p className="font-mono text-[10px] text-[#ffb786] font-black uppercase tracking-widest italic">OS: SAT-Terminal</p>
          </div>
          <nav className="flex flex-col space-y-1">
            {[
              { label: 'Orbital Tracking', icon: 'language', active: false },
              { label: 'Radio Health', icon: 'monitor_heart', active: false },
              { label: 'Constellation', icon: 'grid_view', active: false },
              { label: 'Link Analysis', icon: 'settings_input_antenna', active: true },
              { label: 'System Logs', icon: 'terminal', active: false },
            ].map((item) => (
              <div 
                key={item.label}
                className={`flex items-center gap-4 px-6 py-3 transition-all cursor-pointer group ${
                  item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-l-2 border-[#4cd7f6] font-bold shadow-[inset_4px_0_10px_rgba(76,215,246,0.1)]' : 'text-[#8c909f] hover:bg-[#1d2027] hover:text-[#e1e2ec]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
                <span className="font-mono text-[11px] uppercase tracking-tight">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Workspace Canvas */}
        <main className="flex-1 overflow-hidden bg-[#10131a] p-4 flex flex-col xl:flex-row gap-4">
          {/* Left Column: Controls */}
          <section className="w-full xl:w-[320px] flex flex-col gap-4 shrink-0">
            <div className="bg-[#1d2027]/50 backdrop-blur-xl p-5 rounded-xl border border-[#424754]/30 flex flex-col gap-5 shadow-2xl">
              <div className="flex justify-between items-center border-b border-[#424754]/30 pb-3 mb-1">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">LINK PARAMETERS</span>
                <span className="material-symbols-outlined text-[#8c909f] text-[18px]">SlidersHorizontal</span>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] text-[#adc6ff] font-black uppercase tracking-widest">CARRIER FREQUENCY (GHZ)</label>
                  <div className="flex items-center gap-4">
                    <input className="flex-1 h-1 bg-[#0b0e15] rounded-full appearance-none cursor-pointer accent-[#adc6ff]" type="range" />
                    <span className="font-mono text-[12px] text-[#4cd7f6] font-black w-14 text-right italic">24.500</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] text-[#adc6ff] font-black uppercase tracking-widest">MODULATION SCHEME</label>
                  <select className="bg-[#0b0e15] border border-[#424754]/50 rounded-lg font-mono text-[11px] p-2.5 focus:ring-1 focus:ring-[#4cd7f6] outline-none text-[#e1e2ec] appearance-none cursor-pointer hover:border-[#4cd7f6]/50 transition-colors uppercase">
                    <option>QPSK</option>
                    <option selected>16QAM</option>
                    <option>64QAM</option>
                    <option>BPSK</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[9px] text-[#adc6ff] font-black uppercase tracking-widest">ANTENNA GAIN (DBI)</label>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-10 bg-[#0b0e15] border border-[#424754]/50 flex items-center px-4 font-mono text-[12px] text-[#e1e2ec] rounded-lg shadow-inner italic font-black">
                      42.5
                    </div>
                    <div className="flex flex-col gap-1">
                      <button className="bg-[#272a31] hover:bg-[#4cd7f6]/20 p-1.5 rounded-md border border-[#424754]/50 transition-colors group">
                        <span className="material-symbols-outlined text-[14px] text-[#8c909f] group-hover:text-[#4cd7f6]">expand_less</span>
                      </button>
                      <button className="bg-[#272a31] hover:bg-[#4cd7f6]/20 p-1.5 rounded-md border border-[#424754]/50 transition-colors group">
                        <span className="material-symbols-outlined text-[14px] text-[#8c909f] group-hover:text-[#4cd7f6]">expand_more</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1d2027]/50 backdrop-blur-xl p-5 rounded-xl border border-[#424754]/30 flex flex-col gap-4 shadow-2xl">
              <div className="flex justify-between items-center border-b border-[#424754]/30 pb-3">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">LINK HEALTH</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_10px_#10b981]"></span>
                  <span className="font-mono text-[10px] text-[#10b981] font-black uppercase">LOCKED</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">SIGNAL/NOISE</span>
                  <span className="font-mono text-xl font-black text-[#adc6ff] italic tracking-tighter">18.4 dB</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">PKT LOSS</span>
                  <span className="font-mono text-xl font-black text-[#ffb4ab] italic tracking-tighter">0.002%</span>
                </div>
              </div>
            </div>
          </section>

          {/* Center Column: Viewport */}
          <section className="flex-1 flex flex-col gap-4 min-w-0">
            <div className="bg-[#1d2027]/50 backdrop-blur-xl rounded-xl border border-[#424754]/30 flex flex-col flex-1 shadow-2xl overflow-hidden">
              <div className="bg-[#272a31]/50 px-5 py-3 flex justify-between items-center border-b border-[#424754]/30 shrink-0">
                <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest">SIGNAL WAVEFORM VIEWPORT</span>
                <div className="flex gap-6">
                  <span className="font-mono text-[10px] text-[#8c909f] font-bold uppercase tracking-widest">SPAN: 250 MHz</span>
                  <span className="font-mono text-[10px] text-[#8c909f] font-bold uppercase tracking-widest">RBW: 10 kHz</span>
                </div>
              </div>
              <div className="flex-1 relative m-5 border border-[#424754]/30 rounded-lg overflow-hidden bg-[#0b0e15] group/viewport">
                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#4cd7f6 1px, transparent 1px), linear-gradient(90deg, #4cd7f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                
                {/* Spectrum Visualization */}
                <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 800 400" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="spectrumGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#4cd7f6', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#4cd7f6', stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M0,350 L100,345 L150,352 L200,340 L250,355 L300,100 L350,80 L400,90 L450,85 L500,110 L550,340 L600,350 L700,345 L800,355" 
                    fill="none" 
                    stroke="#4cd7f6" 
                    strokeWidth="2" 
                    className="drop-shadow-[0_0_12px_rgba(76,215,246,0.6)]"
                  ></path>
                  <path 
                    d="M300,100 L350,80 L400,90 L450,85 L500,110 L500,400 L300,400 Z" 
                    fill="url(#spectrumGrad)" 
                    className="opacity-20"
                  ></path>
                </svg>

                {/* HUD Elements */}
                <div className="absolute top-4 left-4 bg-[#1d2027]/80 backdrop-blur-md p-3 rounded-lg border border-[#4cd7f6]/30 pointer-events-none shadow-xl transform group-hover/viewport:translate-x-1 group-hover/viewport:translate-y-1 transition-transform">
                  <p className="font-mono text-[11px] text-[#4cd7f6] font-black uppercase tracking-widest italic">PEAK: -64.2 dBm</p>
                  <p className="font-mono text-[11px] text-[#4cd7f6] font-black uppercase tracking-widest italic mt-1">CF: 24.5002 GHz</p>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-6 text-[9px] font-mono font-black text-[#8c909f] uppercase tracking-widest opacity-60">
                  <span>TRACE A: LIVE</span>
                  <span>TRACE B: MAX HOLD</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 h-48 shrink-0">
              <div className="bg-[#1d2027]/50 backdrop-blur-xl p-5 rounded-xl border border-[#424754]/30 flex flex-col shadow-2xl">
                <header className="flex justify-between items-center mb-4 shrink-0">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">BIT ERROR RATE (BER)</span>
                  <span className="font-mono text-[11px] text-[#adc6ff] font-black tracking-tighter uppercase italic">1e-7 TARGET</span>
                </header>
                <div className="flex-1 flex items-end gap-1 px-2 pb-2 overflow-hidden">
                  {[20, 35, 45, 60, 85, 40, 20, 15].map((h, i) => (
                    <div 
                      key={i} 
                      className={`flex-1 transition-all duration-1000 ${i >= 2 && i <= 5 ? 'bg-[#adc6ff] shadow-[0_0_8px_rgba(173,198,255,0.4)]' : 'bg-[#272a31]'} rounded-t-sm`} 
                      style={{ height: `${h}%`, opacity: i >= 2 && i <= 5 ? 1 : 0.3 }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="bg-[#1d2027]/50 backdrop-blur-xl p-5 rounded-xl border border-[#424754]/30 flex flex-col items-center justify-center shadow-2xl group hover:border-[#ffb786]/30 transition-all">
                <header className="w-full flex justify-between items-center mb-2 shrink-0">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">LATENCY OFFSET</span>
                  <span className="material-symbols-outlined text-[18px] text-[#ffb786] group-hover:rotate-12 transition-transform">Clock</span>
                </header>
                <div className="flex-1 flex flex-col justify-center items-center gap-1">
                  <span className="font-mono text-4xl font-black text-[#ffb786] italic tracking-tighter drop-shadow-[0_0_15px_rgba(255,183,134,0.3)]">
                    124.8<span className="text-xl text-[#8c909f] ml-1 uppercase">ms</span>
                  </span>
                  <div className="w-full bg-[#0b0e15] h-1.5 rounded-full mt-2 overflow-hidden border border-[#424754]/30">
                    <div className="bg-[#ffb786] w-3/4 h-full shadow-[0_0_8px_#ffb786]"></div>
                  </div>
                  <p className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.2em] mt-2">STABILITY: NOMINAL</p>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Telemetry */}
          <section className="w-full xl:w-[320px] flex flex-col gap-4 shrink-0">
            <div className="bg-[#1d2027]/50 backdrop-blur-xl rounded-xl border border-[#424754]/30 flex flex-col flex-1 shadow-2xl overflow-hidden min-h-[300px]">
              <div className="bg-[#272a31]/50 px-5 py-3 flex justify-between items-center border-b border-[#424754]/30 shrink-0">
                <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest">LIVE TELEMETRY FEED</span>
                <button className="text-[#4cd7f6] hover:text-white font-mono text-[9px] font-black uppercase tracking-widest transition-colors">CLEAR</button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-3 font-mono text-[11px]">
                {telemetry.map((item, i) => (
                  <div key={i} className="flex gap-4 group cursor-default hover:bg-[#adc6ff]/5 p-1 rounded transition-colors">
                    <span className="text-[#424754] font-bold group-hover:text-[#8c909f]">{item.time}</span>
                    <span className={`${item.color} font-black tracking-tighter uppercase shrink-0`}>{item.source}</span>
                    <span className="text-[#8c909f] group-hover:text-[#e1e2ec] transition-colors uppercase tracking-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1d2027]/50 backdrop-blur-xl rounded-xl border border-[#424754]/30 h-48 relative overflow-hidden shadow-2xl group/map">
              <img 
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDsYOHXdOD_5Az75mI-FpVTyxCE-QYz3p18ySjAqdXXlH8w14i4iN0_-f5K-KHIVb9GigS6StzV7pMJaumIYpFoZ5ESOVlt41vnA7nNGUL8vFQGYb_OsZdmxlBNY9-rXQE07Rk17_zQUmEYgWqb60zIzfK8syyquwgmw_nRa0Y-E_izSD2fn84Uht68edP0C2Iyd5sW-p8gwD6Ov0B5lIL9uvnpCaOS3MjxhziQKxrfRugWd8zL4zcl_ZZCpCc7U1inT2KAxdSzS0pa" 
                alt="Svalbard Ground Station" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4">
                <p className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest">LOCATION: SVALBARD_GS2</p>
                <p className="font-mono text-[11px] text-[#adc6ff] font-bold mt-0.5 tracking-tighter italic">78.22° N, 15.64° E</p>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#10131a]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#adc6ff]/30 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#adc6ff] animate-pulse shadow-[0_0_8px_#adc6ff]"></span>
                <span className="font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-widest">UPLINK_ON</span>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Global FAB */}
      <button className="fixed bottom-10 right-10 bg-[#adc6ff] text-[#002e6a] p-5 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 transition-all z-50 group border-2 border-[#adc6ff]/50">
        <span className="material-symbols-outlined text-[28px] font-black">Zap</span>
        <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-[#1d2027]/90 backdrop-blur-md border border-[#424754]/50 px-4 py-2 rounded-lg font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl">
          INITIATE_BURST_MODE
        </span>
      </button>

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

export default LinkBudgetCommsAnalysisEngineeringOS_95c3b7;
