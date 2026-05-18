'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const MultiAgentTradeoffExplorerEngineeringOS_69f1fc = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const scatterPoints = Array.from({ length: 40 }).map((_, i) => ({
    x: 50 + Math.random() * 700,
    y: 50 + Math.random() * 400,
    id: i
  }));

  const paretoPoints = [
    { x: 80, y: 445 },
    { x: 200, y: 380 },
    { x: 350, y: 270 },
    { x: 520, y: 160 },
    { x: 680, y: 80 },
  ];

  const simulationLogs = [
    { id: 'AGENT_ID_042', time: '12:44:02', msg: 'Thermal stability threshold exceeded. Rejecting variant.', color: 'text-[#4cd7f6]' },
    { id: 'SYSTEM_MAIN', time: '12:43:59', msg: '56 new optimal candidates found in sector G-4.', color: 'text-[#ffb786]' },
    { id: 'AGENT_ID_089', time: '12:43:55', msg: 'Structural mass optimization completed for Tier-2.', color: 'text-[#4cd7f6]', opacity: 'opacity-50' },
  ];

  return (
    <div className="bg-[#0b0f14] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#adc6ff]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 h-[48px] bg-[#10131a]/80 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 shadow-[0_0_20px_rgba(173,198,255,0.05)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff]">rocket_launch</span>
          <h1 className="font-mono text-[14px] font-black text-[#adc6ff] uppercase tracking-tighter italic">MISSION CONTROL CENTER</h1>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 px-4 py-1.5 bg-[#191b23]/80 rounded-xl border border-[#424754]/50 shadow-inner group cursor-default">
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]"></div>
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">System Live</span>
          </div>
          <button className="material-symbols-outlined text-[#adc6ff] hover:text-[#e1e2ec] hover:bg-[#363941] transition-all p-2 rounded-xl">
            settings_input_component
          </button>
        </div>
      </header>

      <div className="flex flex-1 pt-[48px] overflow-hidden">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#191b23] border-r border-[#424754]/30 hidden lg:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-8">
            <h2 className="font-mono text-[10px] text-[#ffb786] font-black uppercase tracking-[0.2em] italic opacity-50">OS: SAT-Terminal</h2>
          </div>
          <nav className="flex flex-col space-y-1">
            {[
              { label: 'Orbital Tracking', icon: 'language', active: true },
              { label: 'Radio Health', icon: 'monitor_heart', active: false },
              { label: 'Constellation', icon: 'grid_view', active: false },
              { label: 'Link Analysis', icon: 'settings_input_antenna', active: false },
              { label: 'System Logs', icon: 'terminal', active: false },
            ].map((item) => (
              <div 
                key={item.label}
                className={`flex items-center gap-4 px-6 py-3.5 transition-all cursor-pointer ${
                  item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-l-2 border-[#4cd7f6] font-bold shadow-[inset_4px_0_10px_rgba(76,215,246,0.1)]' : 'text-[#8c909f] hover:bg-[#1d2027] hover:text-[#e1e2ec]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
                <span className="font-mono text-[11px] uppercase tracking-tight">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content Workspace */}
        <main className="flex-1 p-6 overflow-hidden flex flex-col gap-6 bg-[#0b0f14] relative group">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between bg-[#1d2027]/50 backdrop-blur-xl p-6 border border-[#424754]/50 rounded-2xl shadow-2xl transition-all hover:translate-x-2">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.2em] mb-2 italic">Trade-off Analysis</span>
              <h2 className="font-mono text-2xl font-black text-[#e1e2ec] tracking-tighter uppercase italic">MULTI-AGENT PARETO EXPLORER</h2>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-end">
                <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest mb-1 italic">Active Agents</span>
                <span className="font-mono text-[24px] text-[#adc6ff] font-black italic tracking-tighter">1,024</span>
              </div>
              <div className="flex flex-col items-end border-l border-[#424754]/30 pl-8">
                <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest mb-1 italic">Solutions Scanned</span>
                <span className="font-mono text-[24px] text-[#4cd7f6] font-black italic tracking-tighter">24,592</span>
              </div>
            </div>
          </div>

          {/* Pareto Explorer Grid */}
          <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
            {/* Visualization Panel */}
            <section className="col-span-12 lg:col-span-9 bg-[#1d2027]/30 backdrop-blur-xl border border-[#424754]/50 rounded-2xl relative overflow-hidden flex flex-col shadow-2xl group/viz">
              <div className="absolute inset-0 p-12 flex flex-col pointer-events-none z-10">
                <div className="flex-1 flex items-end justify-start relative">
                  {/* Axis Labels */}
                  <div className="absolute -left-12 top-1/2 -rotate-90 origin-center text-[#8c909f] font-mono text-[10px] font-black uppercase tracking-[0.3em] italic">
                    Thermal Stability (K/s)
                  </div>
                  <div className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 text-[#8c909f] font-mono text-[10px] font-black uppercase tracking-[0.3em] italic">
                    Structural Mass (kg)
                  </div>
                  
                  {/* SVG Plot */}
                  <svg className="w-full h-full overflow-visible pointer-events-auto" viewBox="0 0 800 500">
                    {/* Grid Background */}
                    <defs>
                      <pattern id="paretoGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#202b3c" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#paretoGrid)" />
                    
                    {/* Axis Lines */}
                    <line stroke="#424754" strokeWidth="2" x1="0" x2="800" y1="500" y2="500"></line>
                    <line stroke="#424754" strokeWidth="2" x1="0" x2="0" y1="0" y2="500"></line>
                    
                    {/* Data Points */}
                    <g className="text-[#8c909f]/30">
                      {scatterPoints.map((p) => (
                        <circle key={p.id} cx={p.x} cy={p.y} fill="currentColor" r="2.5"></circle>
                      ))}
                    </g>
                    
                    {/* Pareto Front Curve */}
                    <path 
                      d="M 50,450 Q 150,440 300,300 T 750,50" 
                      fill="none" 
                      opacity="0.5" 
                      stroke="#adc6ff" 
                      strokeDasharray="8,8" 
                      strokeWidth="3"
                    ></path>
                    
                    {/* Pareto Optimal Highlights */}
                    {paretoPoints.map((p, i) => (
                      <circle 
                        key={i} 
                        cx={p.x} 
                        cy={p.y} 
                        fill="#4cd7f6" 
                        r="6" 
                        className="animate-pulse shadow-[0_0_10px_#4cd7f6] cursor-pointer hover:scale-150 transition-all duration-300"
                      ></circle>
                    ))}
                    
                    {/* Selection Highlight */}
                    <g className="cursor-pointer group/highlight">
                      <circle cx="350" cy="270" fill="none" r="14" stroke="#adc6ff" strokeWidth="2" className="animate-[ping_3s_infinite]"></circle>
                      <circle cx="350" cy="270" fill="none" r="14" stroke="#adc6ff" strokeWidth="2"></circle>
                      <line stroke="#adc6ff" strokeDasharray="4,4" strokeWidth="1.5" x1="350" x2="350" y1="270" y2="500"></line>
                      <line stroke="#adc6ff" strokeDasharray="4,4" strokeWidth="1.5" x1="0" x2="350" y1="270" y2="270"></line>
                    </g>
                  </svg>
                </div>
              </div>
              
              {/* HUD Overlays */}
              <div className="absolute top-8 right-8 flex flex-col gap-3 z-20">
                <div className="bg-[#0b0e15]/80 backdrop-blur-md p-6 border border-[#424754]/50 rounded-2xl shadow-2xl flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-12">
                    <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic">X-Axis</span>
                    <span className="font-mono text-[11px] text-[#adc6ff] font-black italic tracking-tighter uppercase">Structural Mass</span>
                  </div>
                  <div className="flex items-center justify-between gap-12">
                    <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic">Y-Axis</span>
                    <span className="font-mono text-[11px] text-[#adc6ff] font-black italic tracking-tighter uppercase">Thermal Stab.</span>
                  </div>
                  <div className="border-t border-[#424754]/30 pt-4">
                    <label className="flex items-center gap-3 cursor-pointer group/check">
                      <div className="w-4 h-4 bg-[#0b0e15] border border-[#424754] rounded flex items-center justify-center transition-all group-hover/check:border-[#4cd7f6]">
                        <div className="w-2 h-2 bg-[#4cd7f6] rounded-sm"></div>
                      </div>
                      <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest italic opacity-70">Show Pareto Front</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 z-20 transition-all hover:translate-y-[-4px]">
                <div className="flex items-center gap-4 bg-[#0b0e15]/80 backdrop-blur-md border border-[#424754]/50 px-6 py-3 rounded-2xl shadow-2xl">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[20px] animate-bounce">info</span>
                  <p className="font-mono text-[11px] text-[#8c909f] font-bold italic uppercase tracking-tight opacity-90">
                    Hover over data points to inspect specific agent configurations.
                  </p>
                </div>
              </div>
            </section>

            {/* Sidebar Controls */}
            <aside className="col-span-12 lg:col-span-3 flex flex-col gap-6">
              <div className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
                <header className="bg-[#1d2027] px-6 h-10 border-b border-[#424754]/50 flex justify-between items-center shrink-0">
                  <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest italic">Agent Controls</span>
                  <span className="material-symbols-outlined text-[#8c909f] text-[18px]">SlidersHorizontal</span>
                </header>
                <div className="p-6 flex flex-col gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">
                      <span>MUTATION RATE</span>
                      <span className="text-[#4cd7f6]">4.2%</span>
                    </div>
                    <div className="h-1.5 bg-[#0b0e15] relative rounded-full shadow-inner">
                      <div className="absolute h-full bg-[#4cd7f6] rounded-full w-[42%] shadow-[0_0_10px_#4cd7f6]"></div>
                      <div className="absolute h-4 w-4 bg-[#4cd7f6] rounded-full top-1/2 -translate-y-1/2 left-[42%] -translate-x-1/2 border-2 border-[#1d2027] cursor-pointer hover:scale-125 transition-all"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">
                      <span>CONVERGENCE TOL.</span>
                      <span className="text-[#4cd7f6]">0.001</span>
                    </div>
                    <div className="h-1.5 bg-[#0b0e15] relative rounded-full shadow-inner">
                      <div className="absolute h-full bg-[#4cd7f6] rounded-full w-[30%] shadow-[0_0_10px_#4cd7f6]"></div>
                      <div className="absolute h-4 w-4 bg-[#4cd7f6] rounded-full top-1/2 -translate-y-1/2 left-[30%] -translate-x-1/2 border-2 border-[#1d2027] cursor-pointer hover:scale-125 transition-all"></div>
                    </div>
                  </div>
                  <button className="w-full h-12 bg-[#4cd7f6] text-[#003640] font-mono text-[11px] font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_-5px_rgba(76,215,246,0.4)] flex justify-center items-center gap-3 italic mt-2">
                    <span className="material-symbols-outlined text-[20px]">refresh</span>
                    REGENERATE FRONT
                  </button>
                </div>
              </div>

              <div className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-2xl flex-1 flex flex-col overflow-hidden shadow-2xl">
                <header className="bg-[#1d2027] px-6 h-10 border-b border-[#424754]/50 flex justify-between items-center shrink-0">
                  <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest italic">Simulation Log</span>
                  <span className="material-symbols-outlined text-[#8c909f] text-[18px]">history</span>
                </header>
                <div className="p-6 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
                  {simulationLogs.map((log, i) => (
                    <div key={i} className={`p-4 bg-[#0b0e15]/50 border border-[#424754]/30 rounded-2xl shadow-inner group-hover:border-[#4cd7f6]/20 transition-all ${log.opacity}`}>
                      <div className="flex justify-between font-mono text-[10px] ${log.color} font-black italic mb-2 tracking-widest uppercase">
                        <span>{log.id}</span>
                        <span className="text-[#8c909f]">{log.time}</span>
                      </div>
                      <p className="font-mono text-[12px] text-[#e1e2ec] leading-relaxed uppercase italic opacity-70">
                        {log.msg}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Variant Comparison Drawer */}
          <section className="bg-[#1d2027]/80 backdrop-blur-2xl border border-[#424754]/50 rounded-2xl p-6 shadow-2xl z-40">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-[#424754]/30 pb-4">
                <h3 className="font-mono text-[11px] text-[#adc6ff] font-black uppercase tracking-[0.2em] italic">Selected Variant Comparison</h3>
                <div className="flex gap-6">
                  <button className="text-[#8c909f] hover:text-[#adc6ff] transition-all flex items-center gap-2 font-mono text-[10px] font-black uppercase italic group">
                    <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">ios_share</span> EXPORT DATA
                  </button>
                  <button className="text-[#8c909f] hover:text-[#ffb4ab] transition-all flex items-center gap-2 font-mono text-[10px] font-black uppercase italic group">
                    <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">delete</span> CLEAR SELECTION
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-36">
                {[
                  { id: 'VAR-2901-A', mass: '1,420 kg', stab: '98.4%', sf: '1.82 SF', sfColor: 'text-[#10b981]', active: false, img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuDl8kl3sfVb8O7UJuXG3RpIRaAsExe29QMAYqgU6BR7BcMXwNpWSF-f0g407QbQ9HnX_PM3XJzFXGU5V7IEi9YzlyoHHosNdAyU9EuUf7S3kE_Ce0baHY7iirYS09NmqZjdl6b4AN0_2EKA884jq9wV-ohflpYC2tJZ86pdT7VMGVdRSNMFH9UeRgRXK2MACFdYnve9d1FZAtIO2yF9jMuj26sNKlNvgPT2DhvcMuVfpnuL8SxL6g1ufI25kh_ihw0TwwCdO_AhBSXQ' },
                  { id: 'VAR-4512-C', mass: '1,280 kg', stab: '99.1%', sf: '2.05 SF', sfColor: 'text-[#10b981]', active: true, tag: 'PARETO OPTIMAL', img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuCS7BzoCfDRpJ-WilbUjetJnB5ZczG7bKKnXx67RoQGOl9JT2xcju2lU8fj3geXFL9KqhB4ngG1bLnqWaHs8v3Rp0eplH4IGcJuwH7V3JrDHWKeCQrBpt2k_KPsRVQ5ahf85rCs8HyisOF9GxA8sf58wVx3lex7idUDJ_A6Cq4DiX5w9Q7yUCove4Ccd9S6M8k8HlGbd1MGQBJ0uIhBgeNFzujPQutVdMeQHUgJlq73nxdWiLVx9Sn0ZOnCWUyKO6or-yrrz06S1yGz' },
                  { id: 'VAR-8110-X', mass: '945 kg', stab: '82.2%', sf: '1.15 SF', sfColor: 'text-[#ffb4ab]', active: false, img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuAO7UWqxZPf9lZjXDsXq-zdzVFW0TtebEgilxTBTI81hKX6WGhzoh9lGowtFA3BuIfQMUn3qhX6c6LvWg4hYBA5RqMm5SWSFISWoqmGxFZdy-nkwNbXxV1WMzdcFbZ79pT_4sOWIBJ-ZpYPZI-OjWHDGbt9Sd4GfdMysaWd-MGl-RtKwzZGSlwIV9Kr2TDGTKWfsBEyB1qqmpF_BHAcfiYZdYHubN4Ik3uqeJ8iE9CTnvG1VlvVJz3tMc9tLMGUHiHtkispQPJHA6ZZ' }
                ].map((item, i) => (
                  <div key={i} className={`group/item relative flex items-center gap-6 p-4 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    item.active ? 'bg-[#03b5d3]/10 border-[#4cd7f6] shadow-[0_0_30px_rgba(76,215,246,0.15)]' : 'bg-[#0b0e15]/50 border-[#424754]/30 hover:border-[#adc6ff]/50'
                  }`}>
                    {item.tag && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4cd7f6] text-[#003640] font-mono text-[9px] font-black px-3 py-0.5 rounded-full shadow-lg italic z-10">{item.tag}</div>}
                    <div className="w-24 h-24 bg-[#10131a] rounded-xl border border-[#424754]/50 overflow-hidden shrink-0 relative shadow-2xl group-hover/item:border-[#adc6ff]/30 transition-all">
                      <img className="w-full h-full object-cover mix-blend-screen opacity-60 group-hover/item:scale-110 group-hover/item:opacity-80 transition-all duration-700" src={item.img} alt={item.id} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-transparent opacity-60"></div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between h-full py-1">
                      <div>
                        <span className="font-mono text-[10px] text-[#4cd7f6] font-black italic tracking-widest">{item.id}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic">Safety:</span>
                          <span className={`font-mono text-[11px] font-black italic ${item.sfColor}`}>{item.sf}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#0b0e15]/80 p-2 border border-[#424754]/30 rounded-lg shadow-inner">
                          <p className="text-[8px] font-mono text-[#8c909f] font-black uppercase tracking-widest italic mb-0.5">MASS</p>
                          <p className="font-mono text-[10px] text-[#e1e2ec] font-black italic tracking-tighter leading-none">{item.mass}</p>
                        </div>
                        <div className="bg-[#0b0e15]/80 p-2 border border-[#424754]/30 rounded-lg shadow-inner">
                          <p className="text-[8px] font-mono text-[#8c909f] font-black uppercase tracking-widest italic mb-0.5">STAB</p>
                          <p className="font-mono text-[10px] text-[#e1e2ec] font-black italic tracking-tighter leading-none">{item.stab}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
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

export default MultiAgentTradeoffExplorerEngineeringOS_69f1fc;
