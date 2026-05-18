'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const PlanetaryAssetLogisticsEngineeringOS_cbb562 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();
  // aerospaceState is not in EngineeringState schema — use local fallback
  const aerospaceState: any = null;

  const resources = [
    { label: 'POWER_GRID (RTG-01)', val: 92.4, color: 'bg-[#4cd7f6]' },
    { label: 'HELIUM-3 STOCKPILE', val: 41.8, color: 'bg-[#ffb786]' },
    { label: 'H2O RESERVES', val: 68.2, color: 'bg-[#adc6ff]' },
  ];

  const crew = [
    { name: 'CDR. VANCE', status: 'NOMINAL', bpm: 72, o2: 98, temp: 36.7, img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuAwpl1VZ6Q1_IkQixn08KS8LkblOkufsExdG9ATxUQSs8T33vUFNXI27XIzsTXGGJH-yxGK9sFVyG6lAk9rS6RNQJ5A7bYcQvhmsfathc4mrBEABG_EM9yrAwNLExIU8wBnk4tTf2pTyxVi4M1zcS4iIdqGrZUqgDRmuX2GPCTjTZrYnJG-u73HgtW1wAibRJeb_jN314tjcLdLg_2sTMSXTBLLcExGynQbqv1vs5pTpb69O_K8uk3eJwAG02xV521JxAhlb6uKXS4h' },
    { name: 'DR. ARIS', status: 'NOMINAL', bpm: 68, o2: 99, temp: 36.5, img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuATZVXS55JoNA6plaGbwzosVAp5QK50TkvHCCBwrj4CCAxi9ydZqqcKgUqS9VDh6CE3QhcxgSFebxJERrJRGs7KtBgZGVyCVq3GYiS7VQXKrzIwLyfsNtYOcSbVOMd0b_NbYWchHUSwyozo_SB4Qxgo0-kzCS4YzvtaavNccJXCqiBaY5jVgXS9jqKN4sNKHdaHLWaakQFl5Z9ggkG3wCg-a25XTZXtG-OsPmlJ2tZFW6dDRtmuGjG8_YkCuVTlkKujuFj6GM8uEHLn' },
  ];

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-[48px] bg-[#10131a]/70 backdrop-blur-xl border-b border-[#424754]/50 shrink-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#adc6ff]">deployed_code</span>
          <span className="font-bold text-[20px] tracking-tighter text-[#adc6ff] uppercase">ANTIGRAVITY_OS</span>
        </div>
        <nav className="hidden md:flex gap-8 font-mono text-[10px] tracking-widest font-bold">
          <span className="text-[#4cd7f6] cursor-pointer uppercase">PLANETARY_LOGISTICS</span>
          <span className="text-[#8c909f] hover:text-[#e1e2ec] cursor-pointer transition-colors uppercase">SURFACE_MAP</span>
          <span className="text-[#8c909f] hover:text-[#e1e2ec] cursor-pointer transition-colors uppercase">ASSET_INDEX</span>
        </nav>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] text-[#adc6ff] font-bold">GPU: 94% | SIM: ACTIVE</span>
          <button className="bg-[#93000a] text-[#ffdad6] font-mono text-[10px] font-black px-4 py-1.5 rounded border border-[#ffb4ab]/30 hover:bg-[#ffb4ab] hover:text-[#690005] transition-all uppercase tracking-widest">EMERGENCY OVERRIDE</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden pt-[48px]">
        {/* NavigationDrawer */}
        <aside className="w-64 border-r border-[#424754]/30 bg-[#0b0e15] hidden lg:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-6">
            <h2 className="font-mono text-[10px] text-[#e1e2ec] tracking-widest font-bold uppercase opacity-60">SYSTEM_CORE</h2>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'Projects', icon: 'folder_open', active: false },
              { label: 'Simulations', icon: 'model_training', active: true },
              { label: 'AI Agents', icon: 'smart_toy', active: false },
              { label: 'Digital Twin', icon: 'precision_manufacturing', active: false },
              { label: 'Manufacturing', icon: 'factory', active: false },
            ].map((item) => (
              <div 
                key={item.label}
                className={`flex items-center gap-4 px-4 py-3 rounded transition-all cursor-pointer group ${
                  item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-l-2 border-[#4cd7f6] font-bold' : 'text-[#8c909f] hover:bg-[#272a31]/50 hover:text-[#e1e2ec]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
                <span className="font-mono text-[11px] tracking-tight uppercase">{item.label}</span>
              </div>
            ))}
          </nav>
          <div className="px-6 py-4 bg-[#1d2027]/50 border-t border-[#424754]/30">
            <div className="text-[10px] font-mono text-[#8c909f] mb-1 font-bold uppercase">LOCAL TIME: 04:22:19 LST</div>
            <div className="text-[10px] font-mono text-[#4cd7f6] font-black italic">LAT: 14.5° N | LON: 175.4° E</div>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-[#0b0e15] p-6 space-y-6 relative">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#4cd7f6 1px, transparent 1px), linear-gradient(90deg, #4cd7f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-[1600px] mx-auto space-y-6 relative z-10">
            <div className="grid grid-cols-12 gap-6">
              {/* Map View (Hero Component) */}
              <div className="col-span-12 lg:col-span-8 h-[500px] relative bg-[#1d2027]/70 backdrop-blur-md border border-[#4cd7f6]/30 rounded-lg overflow-hidden group shadow-2xl">
                <header className="h-8 bg-[#272a31]/80 border-b border-[#424754]/50 flex items-center justify-between px-6 z-10 relative">
                  <span className="font-mono text-[10px] text-[#4cd7f6] font-black tracking-widest uppercase">TACTICAL_SURFACE_NAV // SECTOR_04_JEZERO</span>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6] animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-[#424754]"></div>
                  </div>
                </header>
                <div className="w-full h-full relative">
                  <img className="w-full h-full object-cover opacity-60 mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-[10s]" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDGOoJGc8-TuCENyro4F0vjiBQbOZQoEwwJjZXVZu5i36rQjZYSGp4qgOOOgnuxJrNllI67DH6rQfLJRXTg8e7rl46YsZ9Bqmub9GmV4CViQqsk1ARrMlAIbgW-waEpkvaKCIoIAd153-lYrJhh7a0VeBt1EuGotQn7NN1tiu8qTp2x_SPm7C3TwEQche58GFL4GxvxLmEx4ySqtO6-K1j_ha2B03Q9nWnuGIjUBNPdTf-F-9wH4hlxL6H0Te7c0y043qpL5J00EKow" alt="Planetary Map" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e15] to-transparent pointer-events-none opacity-40"></div>
                  {/* Map Overlays */}
                  <div className="absolute bottom-6 left-6 p-4 bg-[#10131a]/90 backdrop-blur-xl border border-[#4cd7f6]/50 rounded-lg shadow-2xl">
                    <div className="font-mono text-[10px] text-[#4cd7f6] font-black tracking-widest mb-3 uppercase">ACTIVE ASSETS</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></span>
                        <span className="font-mono text-[11px] text-[#e1e2ec] font-bold">ROVER_ARCHIMEDES [STATIONARY]</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#ffb786]"></span>
                        <span className="font-mono text-[11px] text-[#ffb786] font-bold">HAB_UNIT_ALPHA [POWER_LOW]</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-12 right-6 flex flex-col gap-2">
                    {['Plus', 'remove', 'layers'].map(icon => (
                      <button key={icon} className="w-10 h-10 bg-[#1d2027]/80 backdrop-blur-xl border border-[#424754] flex items-center justify-center text-[#e1e2ec] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/50 transition-all rounded shadow-lg">
                        <span className="material-symbols-outlined text-[20px]">{icon}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resource Levels & Logs */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                <div className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-lg flex-1 flex flex-col gap-6 shadow-2xl">
                  <div className="flex justify-between items-center border-b border-[#424754]/30 pb-3">
                    <span className="font-mono text-[10px] text-[#e1e2ec] font-black tracking-widest uppercase">CRITICAL_RESOURCES</span>
                    <span className="material-symbols-outlined text-[#8c909f] text-[18px]">Activity</span>
                  </div>
                  <div className="space-y-6">
                    {resources.map(res => (
                      <div key={res.label}>
                        <div className="flex justify-between font-mono text-[11px] mb-2 font-bold uppercase tracking-tight">
                          <span className="text-[#8c909f]">{res.label}</span>
                          <span className={`${res.color.replace('bg-', 'text-')}`}>{res.val}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#10131a] rounded-full overflow-hidden border border-[#424754]/30 relative">
                          <div className={`h-full ${res.color} shadow-[0_0_8px_currentColor] opacity-60`} style={{ width: `${res.val}%`, color: res.color.includes('4cd7f6') ? '#4cd7f6' : res.color.includes('b786') ? '#ffb786' : '#adc6ff' }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto grid grid-cols-2 gap-4">
                    <div className="bg-[#10131a]/50 p-4 border border-[#424754]/30 rounded group hover:border-[#4cd7f6]/30 transition-all">
                      <div className="text-[9px] font-mono text-[#8c909f] font-black uppercase tracking-widest mb-1">OUTSIDE TEMP</div>
                      <div className="text-2xl font-mono text-[#4cd7f6] font-black italic">-72°C</div>
                    </div>
                    <div className="bg-[#10131a]/50 p-4 border border-[#424754]/30 rounded group hover:border-[#ffb4ab]/30 transition-all">
                      <div className="text-[9px] font-mono text-[#8c909f] font-black uppercase tracking-widest mb-1">RADIATION</div>
                      <div className="text-2xl font-mono text-[#ffb4ab] font-black italic">12 mSv/h</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-lg h-[220px] flex flex-col shadow-2xl">
                  <div className="flex justify-between items-center border-b border-[#424754]/30 pb-3 mb-4">
                    <span className="font-mono text-[10px] text-[#e1e2ec] font-black tracking-widest uppercase">MISSION_LOG_STREAM</span>
                    <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></div>
                  </div>
                  <div className="flex-1 overflow-y-auto custom-scrollbar space-y-2 font-mono text-[11px]">
                    {[
                      { time: '12:44:02', msg: 'COMMS_LINK established with ORBITER_V', color: 'text-[#8c909f]' },
                      { time: '12:43:58', msg: 'ROVER_ARCHIMEDES: Sampling sequence complete', color: 'text-[#4cd7f6]' },
                      { time: '12:42:10', msg: 'AIRLOCK_B: Pressure stabilized at 101.3kPa', color: 'text-[#8c909f]' },
                      { time: '12:40:05', msg: 'LOW_POWER_ALERT: Sector 7 secondary arrays offline', color: 'text-[#ffb4ab]' },
                      { time: '12:38:22', msg: 'CREW_04: Entering REM sleep cycle', color: 'text-[#8c909f]' },
                    ].map((log, i) => (
                      <div key={i} className="flex gap-4 p-1 hover:bg-[#10131a]/30 transition-colors rounded">
                        <span className="text-[#424754] font-black shrink-0">[{log.time}]</span>
                        <span className={`${log.color} font-bold`}>{log.msg}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Crew Health Vitals */}
              <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {crew.map(member => (
                  <div key={member.name} className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-lg border-l-4 border-l-[#4cd7f6] group hover:border-[#4cd7f6] transition-all shadow-xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-[#4cd7f6]/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-[2s]"></div>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="w-12 h-12 rounded-lg bg-[#0b0e15] overflow-hidden border border-[#424754] group-hover:border-[#4cd7f6]/50 transition-all">
                        <img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src={member.img} alt={member.name} />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-[#4cd7f6] font-black uppercase tracking-widest">{member.name}</div>
                        <div className="text-[14px] font-bold text-[#e1e2ec]">STATUS: {member.status}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 relative z-10">
                      {[
                        { label: 'BPM', val: member.bpm, color: 'text-[#4cd7f6]' },
                        { label: 'O2 %', val: member.o2, color: 'text-[#4cd7f6]' },
                        { label: 'TEMP', val: member.temp, color: 'text-[#adc6ff]' },
                      ].map(vital => (
                        <div key={vital.label} className="bg-[#10131a]/50 p-3 rounded border border-[#424754]/30 group-hover:border-[#4cd7f6]/20 transition-all text-center">
                          <div className="text-[8px] text-[#8c909f] font-mono font-black uppercase mb-1">{vital.label}</div>
                          <div className={`text-lg font-mono font-black ${vital.color} italic`}>{vital.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                {/* Rover Card */}
                <div className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-lg border-l-4 border-l-[#ffb786] group hover:border-[#ffb786] transition-all shadow-xl relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-[#ffb786]/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-[2s]"></div>
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-[#0b0e15] flex items-center justify-center border border-[#424754] group-hover:border-[#ffb786]/50 transition-all">
                      <span className="material-symbols-outlined text-[#ffb786] text-[24px]">precision_manufacturing</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#ffb786] font-black uppercase tracking-widest">ARCHIMEDES-04</div>
                      <div className="text-[14px] font-bold text-[#e1e2ec]">STATUS: DRILLING</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 relative z-10">
                    {[
                      { label: 'BATT', val: '84%', color: 'text-[#ffb786]' },
                      { label: 'LAT', val: '14.2', color: 'text-[#ffb786]' },
                      { label: 'Gauge', val: '0.0', color: 'text-[#adc6ff]' },
                    ].map(vital => (
                      <div key={vital.label} className="bg-[#10131a]/50 p-3 rounded border border-[#424754]/30 group-hover:border-[#ffb786]/20 transition-all text-center">
                        <div className="text-[8px] text-[#8c909f] font-mono font-black uppercase mb-1">{vital.label}</div>
                        <div className={`text-lg font-mono font-black ${vital.color} italic`}>{vital.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Systems Summary */}
                <div className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-lg flex items-center justify-center shadow-xl relative group">
                  <div className="text-center relative z-10">
                    <div className="font-mono text-[#8c909f] text-[10px] font-black uppercase tracking-[0.2em] mb-4">NETWORK_STABILITY</div>
                    <div className="flex gap-2 justify-center mb-4">
                      {[1, 2, 3, 4, 5].map((i: any) => (
                        <div key={i} className={`w-4 h-8 rounded-sm ${i <= 3 ? 'bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]' : 'bg-[#424754]/30'}`}></div>
                      ))}
                    </div>
                    <div className="text-mono text-[#4cd7f6] text-[12px] font-black italic tracking-widest">SIGNAL: -88 dBm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer HUD */}
      <footer className="h-8 bg-[#0b0f14] border-t border-[#424754]/30 flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse"></div>
            <span className="font-mono text-[9px] text-[#8c909f] uppercase tracking-widest font-bold">LST_SYNC: 0.002s</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#8c909f] text-[14px]">Globe</span>
            <span className="font-mono text-[9px] text-[#8c909f] uppercase tracking-widest font-bold opacity-40">SITE: JEZERO_CRATER_A</span>
          </div>
        </div>
        <div className="font-mono text-[9px] text-[#adc6ff] font-bold uppercase tracking-widest">
           VER: 4.8.2-STABLE // {new Date().toISOString().replace('T', ' ').split('.')[0]} UTC
        </div>
      </footer>

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

export default PlanetaryAssetLogisticsEngineeringOS_cbb562;
