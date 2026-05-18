import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const RFMicrowaveEngineeringOS_b32d35 = () => {
  const { signalState, electromagneticState, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4d8eff]/30">
      {/* TopAppBar */}
      <header className="h-12 bg-[#1d2027] flex items-center justify-between px-6 z-50 border-b border-[#424754]/50 shrink-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#adc6ff]">settings_input_component</span>
          <h1 className="font-mono text-[13px] font-bold text-[#4cd7f6] tracking-tighter uppercase">EM_UNIFIED_OS_v4.2</h1>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${osStatus?.physicsSync ? 'bg-[#10B981] shadow-[0_0_8px_#10B981]' : 'bg-[#ffb4ab]'} animate-pulse`}></div>
            <span className="font-mono text-[10px] text-[#adc6ff] font-bold tracking-widest uppercase">
              {osStatus?.physicsSync ? 'SYSTEM_NOMINAL' : 'SYNC_LOST'}
            </span>
          </div>
          <span className="material-symbols-outlined text-[#adc6ff] cursor-pointer hover:bg-[#363941]/50 p-1.5 rounded transition-colors" data-icon="Sliders">Sliders</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* NavigationDrawer (Left) */}
        <aside className="w-24 bg-[#191b23] border-r border-[#424754]/30 flex flex-col py-6 gap-2 shrink-0">
          <div className="px-2 mb-6 text-center">
            <h2 className="font-mono text-[9px] text-[#8c909f] tracking-tighter font-bold uppercase">PHYSICS</h2>
          </div>
          <nav className="flex flex-col gap-2 px-2">
            {[
              { label: 'Terminal', icon: 'dashboard_customize', active: false },
              { label: 'Circuit', icon: 'HardDrive', active: true },
              { label: 'Power', icon: 'ev_station', active: false },
              { label: 'RF/Microwave', icon: 'settings_input_antenna', active: false },
            ].map((item) => (
              <div 
                key={item.label}
                className={`flex flex-col items-center py-4 cursor-pointer transition-all rounded-lg group ${
                  item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border border-[#03b5d3]/30 shadow-lg' : 'text-[#8c909f] hover:bg-[#272a31]/50 hover:text-[#e1e2ec]'
                }`}
              >
                <span className={`material-symbols-outlined mb-1 text-xl ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
                <span className="font-mono text-[8px] text-center uppercase tracking-tighter">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 bg-[#10131a] relative overflow-hidden">
          {/* Grid Background */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(#4cd7f6 1px, transparent 1px), linear-gradient(90deg, #4cd7f6 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }} 
          />

          {/* Center Viewport Illustration Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-24">
            <img 
              alt="3D Radiation Pattern" 
              className="w-full h-full object-contain opacity-30 mix-blend-screen grayscale" 
              src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDh0IVppXgHPY1EaIMF48gm_-GLfMpzsD1jLpb9TnfyFJJBvC8fwqzOGCycWAEYwJTSeymxsldkkDqjn_Z1oizVoTOrEd6-aJHRMM_fWhP7n6P_Q3rY7Trmi6lwKZ3hfHeBFs54DkNLVecyH6-1iO2i94jr9Irq9tCwYupRE7UE3-MpOQwMyMM64piHSWLZFefF_wIuyHl-ig6geSFMO2cHi2WcgeSOKYMsafv2UxU2Q98wy70jK3YjvK-NzL4RW-ran5BcXJErjx2X" 
            />
          </div>

          {/* Data Overlay Grid */}
          <div className="absolute inset-0 p-6 grid grid-cols-12 grid-rows-6 gap-6">
            {/* Panel: Wave Verification */}
            <section className="col-span-3 row-span-2 bg-[#1a2330]/50 backdrop-blur-md rounded border border-[#202B3C] overflow-hidden flex flex-col shadow-2xl">
              <div className="h-7 bg-[#272a31]/50 flex items-center justify-between px-3 border-b border-[#202B3C]">
                <span className="font-mono text-[9px] text-[#c2c6d6] tracking-[0.2em] font-bold uppercase">WAVE_VERIFICATION (c=fλ)</span>
                <span className="material-symbols-outlined text-[12px] text-[#8c909f] cursor-pointer hover:text-white">close</span>
              </div>
              <div className="flex-1 p-4 flex flex-col justify-center gap-4">
                <div className="flex justify-between items-baseline border-b border-[#424754]/20 pb-2">
                  <span className="font-mono text-[10px] text-[#8c909f] tracking-widest uppercase">FREQ [f]</span>
                  <span className="font-mono text-lg text-[#4cd7f6] font-bold tracking-tight">{signalState?.waveform?.carrier_GHz?.toFixed(2) || '12.45'} GHz</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-[#424754]/20 pb-2">
                  <span className="font-mono text-[10px] text-[#8c909f] tracking-widest uppercase">LAMBDA [λ]</span>
                  <span className="font-mono text-lg text-[#adc6ff] font-bold tracking-tight">{(299.792 / (signalState?.waveform?.carrier_GHz || 12.45)).toFixed(2)} mm</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-[10px] text-[#8c909f] tracking-widest uppercase">VELOCITY [c]</span>
                  <span className="font-mono text-sm text-[#e1e2ec] font-bold">299,792,458 m/s</span>
                </div>
              </div>
            </section>

            {/* Panel: SNR Telemetry */}
            <section className="col-span-3 row-start-3 row-span-2 bg-[#1a2330]/50 backdrop-blur-md rounded border border-[#202B3C] overflow-hidden flex flex-col shadow-2xl">
              <div className="h-7 bg-[#272a31]/50 flex items-center justify-between px-3 border-b border-[#202B3C]">
                <span className="font-mono text-[9px] text-[#c2c6d6] tracking-[0.2em] font-bold uppercase">LINK_STABILITY_INDEX</span>
                <span className="material-symbols-outlined text-[14px] text-[#10B981]">check_circle</span>
              </div>
              <div className="flex-1 p-3 flex flex-col gap-2 overflow-y-auto custom-scrollbar">
                {signalState?.links?.map((link: any) => (
                  <div 
                    key={link.id}
                    className="flex items-center justify-between font-mono text-[10px] py-2 px-3 border border-[#424754]/10 rounded bg-[#10131a]/30 hover:bg-[#10131a]/50 transition-colors"
                  >
                    <span className="text-[#8c909f] tracking-tighter truncate w-24 uppercase">{link.name}</span>
                    <span className={`font-bold ${link.status === 'STABLE' ? 'text-[#4cd7f6]' : 'text-[#ffb4ab]'}`}>
                      {link.latency}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Panel: RCS Analysis */}
            <section className="col-start-10 col-span-3 row-span-3 bg-[#0B0F14] rounded border border-[#202B3C] overflow-hidden flex flex-col shadow-2xl">
              <div className="h-7 bg-[#272a31]/50 flex items-center justify-between px-3 border-b border-[#202B3C]">
                <span className="font-mono text-[9px] text-[#c2c6d6] tracking-[0.2em] font-bold uppercase">RCS_HEATMAP</span>
                <span className="material-symbols-outlined text-[14px] text-[#adc6ff]">Radio</span>
              </div>
              <div className="flex-1 relative overflow-hidden">
                <img 
                  alt="RCS Heatmap" 
                  className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuAo0S-ZW9aqaZG_Bceu3AGVFWGxfd9hgNW-slAZ7QUVtbDaJFLMTD0Ye5xvixwdTTNBc9sHC9zhhDred2qR7uop4IMiHplOJ0ZT4fHZRp9qEx4B-U_eNZblRf5XDyNTIRhrduaMv6TQfl5wKDxo9hQ1hmj6Sx2UWurIxDTdvXXH4vUSJW3fbg_jyIjqooAzpCU-mCmpRW6T5QSK84kEJybmgYhLEAWznDv3PHq4uagFGIikpaT3yAAKL-leFPI7BRERqDWFlKq0Fnnh" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[#adc6ff] font-bold tracking-widest bg-[#10131a]/80 px-2 py-1 rounded border border-[#424754]/50">
                  MEAN_RCS: {(electromagneticState?.antenna?.gain_dBi || -24.5).toFixed(1)} dBsm
                </div>
              </div>
            </section>

            {/* Panel: Frequency Globe Grid */}
            <section className="col-start-4 col-span-6 row-start-5 row-span-2 bg-[#1a2330]/50 backdrop-blur-md rounded border border-[#202B3C] overflow-hidden flex flex-col shadow-2xl">
              <div className="h-7 bg-[#272a31]/50 flex items-center justify-between px-3 border-b border-[#202B3C]">
                <span className="font-mono text-[9px] text-[#c2c6d6] tracking-[0.2em] font-bold uppercase">FREQ_DOMAIN_KERNEL</span>
                <div className="flex gap-4 font-mono text-[9px] text-[#8c909f] uppercase tracking-widest">
                  <span>RES: 100kHz</span>
                  <span>BW: {signalState?.waveform?.noise_rms?.toFixed(1) || '500'}MHz</span>
                </div>
              </div>
              <div className="flex-1 overflow-auto custom-scrollbar">
                <table className="w-full text-left font-mono text-[10px] border-collapse">
                  <thead className="sticky top-0 bg-[#272a31] z-10">
                    <tr className="border-b border-[#424754]/30 text-[#8c909f]">
                      <th className="p-3 font-bold uppercase tracking-widest">BIN_ID</th>
                      <th className="p-3 font-bold uppercase tracking-widest">CENTER_f</th>
                      <th className="p-3 font-bold uppercase tracking-widest">MAGNITUDE</th>
                      <th className="p-3 font-bold uppercase tracking-widest">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#424754]/10">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i} className="hover:bg-[#adc6ff]/5 transition-colors group">
                        <td className="p-3 text-[#c2c6d6]">B-{(100 + i).toString()}</td>
                        <td className="p-3 text-[#e1e2ec] font-bold">{(12.1 + i * 0.1).toFixed(2)} GHz</td>
                        <td className="p-3 text-[#4cd7f6] font-bold">{(signalState?.waveform?.strength_dBm - i * 2.1).toFixed(1)} dBm</td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? 'bg-[#ffb4ab]' : 'bg-[#10B981]'}`} />
                            <span className={`uppercase font-bold tracking-tighter ${i % 3 === 0 ? 'text-[#ffb4ab]' : 'text-[#10B981]'}`}>
                              {i % 3 === 0 ? 'DRIFT' : 'LOCKED'}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Floating Controls */}
            <div className="col-start-1 col-span-3 row-start-5 row-span-2 bg-[#1a2330]/40 backdrop-blur-md rounded border border-[#202B3C] p-4 flex flex-col gap-3 shadow-2xl">
              <button className="bg-[#adc6ff] text-[#001a42] font-mono text-[10px] font-bold py-3 rounded-md flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(173,198,255,0.2)] hover:shadow-[0_0_25px_rgba(173,198,255,0.4)] transition-all active:scale-[0.98] uppercase tracking-widest">
                <span className="material-symbols-outlined text-base">play_arrow</span> RUN_EM_PROPAGATION
              </button>
              <button className="border border-[#424754]/50 hover:bg-[#32353c]/50 text-[#e1e2ec] font-mono text-[10px] font-bold py-3 rounded-md flex items-center justify-center gap-2 transition-all active:scale-[0.98] uppercase tracking-widest">
                <span className="material-symbols-outlined text-base">save</span> EXPORT_PHYSICS_MODEL
              </button>
            </div>
          </div>

          {/* Right Floating Propagation Map Widget */}
          <div className="absolute right-6 top-32 bg-[#1a2330]/60 backdrop-blur-xl rounded-lg w-56 p-4 flex flex-col gap-5 border border-[#202B3C] shadow-2xl">
            <h3 className="font-mono text-[10px] text-[#8c909f] tracking-widest font-bold uppercase">PROP_VECTOR_MAP</h3>
            <div className="h-36 bg-[#0b0e15] rounded overflow-hidden relative border border-[#424754]/30">
              <img 
                alt="Global Coverage" 
                className="w-full h-full object-cover opacity-20 grayscale" 
                src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuB0HBnS9GlI4COBk7N7n3tlUdbnA0-MG78zRX8zVIqpU0-ueY4E5fgLKed8V1VXSZb_PvqS-If8gU119pMd7Bp0S4CIJiCeuneih3ZlTegV7Iqn-O3yhMJqarMRp9OeIH5uKwkgUloCUQ7C_aup16b2bmivfmwIAe7Xvz15UwZl4IapR80INK5dYTnCCVXojAr9G2AqwOiSWEmDS9yui3eouq1lajE1ZvngNu-HngNw2JoLL2t_70PONWxVwRRYywGltkecauaD-Sn2" 
              />
              <div className="absolute inset-0 bg-[#4d8eff]/5 mix-blend-overlay" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#4cd7f6]/5 rounded-full" />
              <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]" />
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: 'AZIMUTH', value: '142.5°' },
                { label: 'ELEVATION', value: '45.0°' },
                { label: 'POLARITY', value: 'RHCP' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between font-mono text-[10px] border-b border-[#424754]/10 pb-1">
                  <span className="text-[#8c909f] tracking-tighter uppercase">{row.label}</span>
                  <span className="text-[#e1e2ec] font-bold">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Terminal Shell */}
      <footer className="h-14 bg-[#0b0e15] border-t border-[#424754]/30 flex justify-around items-center px-12 z-50 shrink-0">
        {[
          { label: 'AI_CMD', icon: 'terminal', active: false },
          { label: 'LOGS', icon: 'list_alt', active: false },
          { label: 'TELEMETRY', icon: 'query_stats', active: true },
          { label: 'DEVICES', icon: 'developer_board', active: false },
          { label: 'NETWORK', icon: 'settings_ethernet', active: false },
        ].map((item) => (
          <div 
            key={item.label}
            className={`flex flex-col items-center justify-center p-2 cursor-pointer transition-all gap-1 ${
              item.active ? 'text-[#adc6ff] border-t-2 border-[#adc6ff] -mt-0.5' : 'text-[#8c909f] hover:text-[#e1e2ec]'
            }`}
          >
            <span className="material-symbols-outlined text-lg">{item.icon}</span>
            <span className="font-mono text-[9px] font-bold tracking-widest">{item.label}</span>
          </div>
        ))}
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0b0e15;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #424754;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

export default RFMicrowaveEngineeringOS_b32d35;
