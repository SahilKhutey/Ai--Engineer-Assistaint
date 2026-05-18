'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const ManufacturingLogisticsQueueEngineeringOS_cfa4a1 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const resources = [
    { name: 'GPU/CLUSTERS', status: 'ACTIVE', color: 'text-[#4cd7f6]', indicator: 'bg-[#4cd7f6]', pulse: true },
    { name: 'PRINTER_01', status: 'OCCUPIED', color: 'text-[#ffb786]', indicator: 'bg-[#ffb786]', pulse: false },
    { name: 'CNC_MILL_04', status: 'OFFLINE', color: 'text-[#8c909f]', indicator: 'bg-[#8c909f]', pulse: false, opacity: 'opacity-60' },
    { name: 'EDM_STATION', status: 'IDLE', color: 'text-[#4cd7f6]', indicator: 'bg-[#4cd7f6]', pulse: false },
  ];

  const jobs = [
    { id: 'TBN-9022-X4', type: '3D PRINTING (SLS)', material: 'Ti-6Al-4V', completion: '14:22:05', progress: 64.8, status: 'CRITICAL', statusColor: 'bg-[#93000a] text-[#ffdad6] border-[#ffb4ab]/30' },
    { id: 'MCH-4811-Q2', type: 'CNC MILLING (5-AXIS)', material: 'AL-7075', completion: '19:45:00', progress: 12.1, status: 'STABLE', statusColor: 'bg-[#03b5d3]/20 text-[#4cd7f6] border-[#4cd7f6]/20' },
    { id: 'EDM-0051-K9', type: 'WIRE EDM PRECISION', material: 'INCONEL-718', completion: 'SUSPENDED', progress: 0, status: 'DEFERRED', statusColor: 'bg-[#32353c] text-[#8c909f] border-[#424754]/30' },
  ];

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 h-[48px] bg-[#10131a]/80 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 shadow-[0_0_20px_rgba(173,198,255,0.05)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff]">deployed_code</span>
          <h1 className="font-mono text-[14px] font-black text-[#adc6ff] uppercase tracking-tighter italic">ANTIGRAVITY_OS</h1>
        </div>
        <div className="flex items-center gap-12">
          <nav className="hidden md:flex gap-10 font-mono text-[10px] font-black tracking-widest text-[#8c909f]">
            {['Projects', 'Simulations', 'AI Agents', 'Digital Twin'].map(item => (
              <span key={item} className="hover:text-[#e1e2ec] cursor-pointer transition-colors uppercase">{item}</span>
            ))}
            <span className="text-[#4cd7f6] border-b-2 border-[#4cd7f6] pb-1 uppercase">Manufacturing</span>
          </nav>
          <div className="hidden lg:block border-l border-[#424754]/50 pl-8 font-mono text-[10px] text-[#adc6ff] font-black italic uppercase tracking-widest">
            GPU: 94% | SIM: ACTIVE
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-[48px] overflow-hidden">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/30 hidden lg:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-8">
            <h2 className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest opacity-50 italic">SYSTEM_CORE</h2>
          </div>
          <nav className="flex flex-col space-y-1">
            {[
              { label: 'Projects', icon: 'folder_open', active: false },
              { label: 'Simulations', icon: 'model_training', active: false },
              { label: 'AI Agents', icon: 'smart_toy', active: false },
              { label: 'Digital Twin', icon: 'precision_manufacturing', active: false },
              { label: 'Manufacturing', icon: 'factory', active: true },
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

        {/* Main Workspace */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 custom-scrollbar bg-[#10131a] relative group">
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02]" style={{ background: 'linear-gradient(to bottom, transparent 50%, #adc6ff 50%)', backgroundSize: '100% 4px' }}></div>

          <div className="relative z-10 grid grid-cols-12 gap-6 max-w-[1600px] mx-auto">
            {/* Header / Actions */}
            <div className="col-span-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-4">
              <div>
                <h3 className="font-mono text-[11px] text-[#4cd7f6] font-black uppercase tracking-[0.2em] mb-2 italic">LOGISTICS_QUEUE</h3>
                <h2 className="font-mono text-4xl font-black text-[#e1e2ec] tracking-tighter uppercase italic">Active Manufacturing Stream</h2>
              </div>
              <button className="bg-[#adc6ff] text-[#002e6a] font-mono text-[11px] font-black tracking-widest px-8 py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-3 shadow-[0_10px_30px_-5px_rgba(173,198,255,0.4)] uppercase">
                <span className="material-symbols-outlined text-[20px]">swap_vert</span>
                RE-PRIORITIZE JOBS
              </button>
            </div>

            {/* Top Grid: Stats & History */}
            <section className="col-span-12 lg:col-span-4 bg-[#1d2027]/50 backdrop-blur-xl p-8 rounded-2xl border border-[#424754]/50 flex flex-col gap-8 shadow-2xl">
              <div className="flex justify-between items-start border-b border-[#424754]/30 pb-4">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">RESOURCE ALLOCATION</span>
                <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">settings_input_component</span>
              </div>
              <div className="space-y-3">
                {resources.map((res) => (
                  <div key={res.name} className={`flex justify-between items-center p-4 bg-[#0b0e15] rounded-xl border border-[#424754]/30 transition-all hover:border-[#4cd7f6]/30 ${res.opacity || ''}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${res.indicator} ${res.pulse ? 'animate-pulse shadow-[0_0_8px_#4cd7f6]' : ''}`}></div>
                      <span className="font-mono text-[12px] font-black text-[#e1e2ec] tracking-tighter uppercase italic">{res.name}</span>
                    </div>
                    <span className={`${res.color} font-mono text-[11px] font-black italic uppercase tracking-widest`}>{res.status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6 border-t border-[#424754]/30">
                <div className="flex justify-between mb-3 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">
                  <span>QUEUE LOAD</span>
                  <span className="text-[#4cd7f6]">78%</span>
                </div>
                <div className="w-full h-1.5 bg-[#0b0e15] rounded-full overflow-hidden border border-[#424754]/30">
                  <div className="h-full bg-[#4cd7f6] w-[78%] shadow-[0_0_10px_rgba(76,215,246,0.6)]"></div>
                </div>
              </div>
            </section>

            <section className="col-span-12 lg:col-span-8 bg-[#1d2027]/50 backdrop-blur-xl p-8 rounded-2xl border border-[#424754]/50 shadow-2xl flex flex-col">
              <div className="flex justify-between items-center mb-10 border-b border-[#424754]/30 pb-4">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">MANUFACTURING History (24H)</span>
                <div className="flex gap-2">
                  <span className="w-3.5 h-3.5 bg-[#4cd7f6] rounded shadow-[0_0_8px_rgba(76,215,246,0.4)]"></span>
                  <span className="w-3.5 h-3.5 bg-[#adc6ff]/50 rounded border border-[#adc6ff]/20"></span>
                  <span className="w-3.5 h-3.5 bg-[#ffb786] rounded shadow-[0_0_8px_rgba(255,183,134,0.4)]"></span>
                </div>
              </div>
              <div className="relative flex-1 min-h-[200px] border-b border-l border-[#424754]/50 mb-10 flex items-end px-4 gap-1.5">
                {[25, 33, 66, 50, 75, 100, 66, 50, 25, 20].map((h, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 transition-all duration-1000 ${
                      i < 3 ? 'bg-[#4cd7f6]/20 border-t-2 border-[#4cd7f6]' : 
                      i < 5 ? 'bg-[#ffb786]/20 border-t-2 border-[#ffb786]' : 
                      i < 7 ? 'bg-[#adc6ff]/20 border-t-2 border-[#adc6ff]' : 
                      'bg-[#4cd7f6]/20 border-t-2 border-[#4cd7f6]'
                    }`}
                    style={{ height: `${h}%` }}
                  ></div>
                ))}
                <div className="absolute -bottom-8 w-full flex justify-between font-mono text-[10px] text-[#8c909f] font-bold tracking-tighter">
                  {['00:00', '06:00', '12:00', '18:00', '23:59'].map((t: any) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </section>

            {/* Bottom Grid: Job Cards */}
            <div className="col-span-12 mt-10">
              <div className="flex items-center gap-10 mb-8 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest border-b border-[#424754]/30 pb-1">
                <span className="text-[#adc6ff] border-b-2 border-[#adc6ff] pb-2 cursor-pointer italic">ALL JOBS (12)</span>
                {['CRITICAL (3)', 'STABLE (7)', 'DEFERRED (2)'].map(label => (
                  <span key={label} className="hover:text-[#e1e2ec] cursor-pointer transition-colors pb-2">{label}</span>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <div key={job.id} className="bg-[#1d2027]/50 backdrop-blur-xl p-6 rounded-2xl border border-[#424754]/50 hover:border-[#4cd7f6]/50 transition-all cursor-pointer group shadow-xl">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="font-mono text-[18px] font-black text-[#e1e2ec] tracking-tighter italic uppercase group-hover:text-[#4cd7f6] transition-colors">{job.id}</h4>
                        <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest mt-1 block">{job.type}</span>
                      </div>
                      <span className={`${job.statusColor} font-mono text-[9px] font-black px-3 py-1 rounded-full border tracking-widest italic uppercase`}>{job.status}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mb-8 border-y border-[#424754]/20 py-4">
                      <div>
                        <span className="block font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest mb-1.5">MATERIAL</span>
                        <span className="font-mono text-[12px] text-[#adc6ff] font-black italic uppercase">{job.material}</span>
                      </div>
                      <div>
                        <span className="block font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest mb-1.5">EST. COMPLETION</span>
                        <span className="font-mono text-[12px] text-[#e1e2ec] font-black italic uppercase tracking-tighter">{job.completion}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between font-mono text-[10px] font-black uppercase tracking-widest">
                        <span className="text-[#8c909f]">PROGRESS</span>
                        <span className={job.progress > 0 ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}>{job.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#0b0e15] rounded-full overflow-hidden border border-[#424754]/30">
                        <div 
                          className={`h-full transition-all duration-1000 ${job.progress > 0 ? 'bg-[#4cd7f6] shadow-[0_0_10px_rgba(76,215,246,0.6)]' : 'bg-[#424754]'}`}
                          style={{ width: `${job.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Visual Feed Card */}
                <div className="col-span-1 md:col-span-2 xl:col-span-3 bg-[#1d2027]/50 backdrop-blur-xl rounded-2xl border border-[#424754]/50 overflow-hidden relative group/feed shadow-2xl h-[300px]">
                  <img 
                    className="w-full h-full object-cover opacity-40 grayscale group-hover/feed:grayscale-0 group-hover/feed:scale-105 transition-all duration-[2000ms] linear" 
                    src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBVAreKfrsGnrV9TuXsyfGmrfyqD7HddDXVcEGtDDPWAw91NyBUoh2wIV7bexnN1t2GJZAqGwpjC0gvdRurlT8VhM8EqOgK6CMjYcqWEWV0zZdCsGJ09RTGIGL-n9cU01yoKz68FdQhNGSSFKcwcKGGzrnGkZ8Res7Rk1pV1K-6asmtQuoGBy2RypLiisSqvFJy6o0mgaVNLp2DzCLrCeGluV-HjtoO7wyCTrdAsvaUATN2tiuVe4WkdBp5GtWLelw4_ZlGPPfDIa5B" 
                    alt="Manufacturing Visualization" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-8 left-8">
                    <h5 className="font-mono text-2xl font-black text-[#e1e2ec] tracking-tighter uppercase italic">Visualizing TBN-9022-X4</h5>
                    <p className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.2em] mt-2 italic">LIVE FEED FROM PRINTER_01 CAM</p>
                  </div>
                  <div className="absolute top-8 right-8 flex items-center gap-3 bg-[#10131a]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-[#424754]/50 shadow-2xl">
                    <div className="w-2 h-2 rounded-full bg-[#ffb4ab] animate-pulse shadow-[0_0_10px_#ffb4ab]"></div>
                    <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest italic">REC: 10:44:02</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Floating UI HUD */}
      <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-4">
        {[
          { label: 'NETWORK', value: 'STABLE: 12ms', dot: 'bg-[#4cd7f6]' },
          { label: 'STORAGE', value: '84% FULL', dot: 'bg-[#ffb786]' },
        ].map((hud) => (
          <div key={hud.label} className="bg-[#1d2027]/90 backdrop-blur-xl p-4 rounded-xl border border-[#424754]/50 flex items-center gap-6 shadow-2xl transition-all hover:translate-x-[-8px]">
            <div className="flex items-center gap-3">
              <span className={`w-1.5 h-1.5 rounded-full ${hud.dot}`}></span>
              <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">{hud.label}</span>
            </div>
            <span className="font-mono text-[10px] text-[#e1e2ec] font-black italic">{hud.value}</span>
          </div>
        ))}
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

export default ManufacturingLogisticsQueueEngineeringOS_cfa4a1;
