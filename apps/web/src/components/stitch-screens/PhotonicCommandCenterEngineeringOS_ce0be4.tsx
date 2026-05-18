import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const PhotonicCommandCenterEngineeringOS_ce0be4 = () => {
  const { 
    photonicState, 
    thermalState, 
    reasoningTrace, 
    simulationState,
    osStatus 
  } = useEngineeringStore();

  // Local fallback for optical parameters (opticalState not in store schema)
  const opticalState = {
    lens_array: [{ focalLength_mm: 50, aperture: 1.8 }]
  };

  return (
    <div className="bg-[#0B0F14] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(173,198,255,0)_50%,rgba(173,198,255,0.2)_50%)] bg-[length:100%_4px]" />

      {/* TopAppBar */}
      <header className="h-12 bg-[#10131a]/80 backdrop-blur-xl border-b border-[#424754]/30 flex justify-between items-center px-6 z-50 shrink-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#adc6ff]">terminal</span>
          <h1 className="font-mono text-[11px] font-bold text-[#adc6ff] tracking-[0.2em] uppercase">QUANTUM_COMMAND_OS_v2.0.4</h1>
        </div>
        <div className="hidden md:flex h-full items-center gap-1">
          {['TELEMETRY', 'WORKSPACE', 'ANALYSIS'].map((tab, i) => (
            <button 
              key={tab}
              className={`h-full px-6 font-mono text-[10px] tracking-widest transition-all hover:bg-[#363941]/30 ${
                i === 0 ? 'text-[#4cd7f6] border-b-2 border-[#4cd7f6]' : 'text-[#8c909f]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#1d2027] rounded border border-[#424754]/50">
            <span className={`w-2 h-2 rounded-full ${osStatus?.kernelLoad < 0.9 ? 'bg-[#4cd7f6]' : 'bg-[#ffb4ab]'} animate-pulse shadow-[0_0_8px_currentColor]`}></span>
            <span className="font-mono text-[9px] text-[#4cd7f6] font-bold uppercase tracking-tighter">SYSTEM_LIVE</span>
          </div>
          <span className="material-symbols-outlined text-[#adc6ff] cursor-pointer hover:text-white transition-colors" data-icon="settings">settings</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* NavigationDrawer (Left) */}
        <aside className="w-64 bg-[#191b23] border-r border-[#424754]/30 hidden md:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-6">
            <h2 className="font-mono text-[10px] text-[#8c909f] tracking-widest font-bold opacity-50 uppercase">SYSTEM_NAV</h2>
          </div>
          <nav className="flex flex-col gap-1">
            {[
              { label: 'Telemetry', icon: 'BarChart3', active: true },
              { label: 'Qubit_Map', icon: 'Share2', active: false },
              { label: 'Circuit_Editor', icon: 'account_tree', active: false },
              { label: 'Stability_Log', icon: 'history_edu', active: false },
              { label: 'System_Health', icon: 'monitor_heart', active: false },
            ].map((item) => (
              <a 
                key={item.label}
                className={`flex items-center gap-4 px-6 py-3 transition-all group ${
                  item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-l-2 border-[#4cd7f6]' : 'text-[#8c909f] hover:bg-[#272a31]/50 hover:text-[#e1e2ec]'
                }`} 
                href="#"
              >
                <span className={`material-symbols-outlined text-xl ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
                <span className="font-mono text-[11px] tracking-tight uppercase font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Micro Telemetry */}
          <div className="mt-auto px-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-[10px] text-[#8c909f] uppercase tracking-tighter">
                <span>CPU_LOAD</span>
                <span className="text-[#4cd7f6] font-bold">{(osStatus?.kernelLoad * 100 || 0).toFixed(1)}%</span>
              </div>
              <div className="w-full bg-[#32353c] h-1 rounded-full overflow-hidden">
                <div className="bg-[#4cd7f6] h-full transition-all duration-1000" style={{ width: `${(osStatus?.kernelLoad * 100 || 0)}%` }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-mono text-[10px] text-[#8c909f] uppercase tracking-tighter">
                <span>PHOTON_TEMP</span>
                <span className="text-[#ffb786] font-bold">{(thermalState?.physics?.temperature * 1000).toFixed(1)}mK</span>
              </div>
              <div className="w-full bg-[#32353c] h-1 rounded-full overflow-hidden">
                <div className="bg-[#ffb786] h-full" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Workspace */}
        <main className="flex-1 flex flex-col min-w-0 bg-[#0b0e15] relative">
          {/* Workspace Toolbar */}
          <div className="h-12 bg-[#1d2027]/50 border-b border-[#424754]/30 flex items-center justify-between px-6 shrink-0">
            <div className="flex gap-8">
              {[
                { label: 'FOCAL_LENGTH', value: `${opticalState?.lens_array?.[0]?.focalLength_mm || 50}mm`, color: 'text-[#4cd7f6]' },
                { label: 'APERTURE', value: `f/${opticalState?.lens_array?.[0]?.aperture || 1.8}`, color: 'text-[#4cd7f6]' },
                { label: 'REFRACTION_INDEX', value: (photonicState?.lattice?.couplingStrength || 1.458).toFixed(3), color: 'text-[#ffb786]' },
              ].map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="font-mono text-[8px] text-[#8c909f] tracking-widest uppercase">{m.label}</span>
                  <span className={`font-mono text-[12px] font-bold ${m.color}`}>{m.value}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1 border-r border-[#424754]/30 pr-4 mr-2">
                {['zoom_in', 'grid_on', 'layers'].map((icon) => (
                  <button key={icon} className="p-1.5 hover:bg-[#363941]/50 rounded text-[#8c909f] hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-lg">{icon}</span>
                  </button>
                ))}
              </div>
              <button className="bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/30 px-4 py-1.5 rounded font-mono text-[10px] font-bold flex items-center gap-2 hover:bg-[#4cd7f6]/20 active:scale-95 transition-all shadow-[0_0_15px_rgba(76,215,246,0.1)]">
                <span className="material-symbols-outlined text-[16px] fill-current">play_arrow</span>
                SIMULATE
              </button>
            </div>
          </div>

          {/* Central Viewport Area */}
          <div className="flex-1 relative overflow-hidden bg-black">
            <img 
              className="w-full h-full object-cover opacity-60 mix-blend-screen grayscale" 
              src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCUuMusgCsu36mmlE6LMWT4P731xkTUmx4FyLc5X2-wiQTm-hqiLabj9MVN5LZbZ-BhK7uvhugZa8Ongwi4-LcYA0on37I_uXExe7wRBkqBRPxRAu7NzJjSZWQMXr9zA1SCVF5SWSe8khxT9KiFD51376PNMXTDezBk8mEzmf1m7fjxad0daXHrcvtbXJiGz9xylXQoFmxnGJLvA9erStx4PCNrkrUpa8NWplBuntAHQfZGeFkIZqhhsW5cO1deAH0RgQmTbQ_7J9Oh" 
              alt="Optical Ray Tracing"
            />
            
            {/* HUD Overlays */}
            <div className="absolute inset-0 pointer-events-none flex flex-col p-8">
              <div className="flex justify-between items-start">
                <div className="bg-[#1a2330]/80 backdrop-blur-xl p-5 rounded-lg border border-[#202B3C] border-l-4 border-l-[#4cd7f6] w-64 shadow-2xl">
                  <span className="font-mono text-[10px] text-[#4cd7f6] block mb-3 font-bold tracking-widest uppercase">WAVEFRONT_ANALYSIS</span>
                  <div className="h-20 w-full flex items-end gap-1 px-1">
                    {[30, 50, 90, 60, 40, 95, 70, 45, 80, 55].map((h, i) => (
                      <div 
                        key={i} 
                        className="bg-[#4cd7f6]/40 flex-1 transition-all duration-500 hover:bg-[#4cd7f6]/80" 
                        style={{ height: `${h}%`, animation: `wave-pulse ${2 + i * 0.2}s infinite ease-in-out` }} 
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[9px] text-[#8c909f] mt-3 block tracking-widest">SIGMA: 0.0042 RMS // COHERENT</span>
                </div>

                <div className="flex flex-col gap-4 items-end">
                  <div className="bg-[#1a2330]/80 backdrop-blur-xl p-4 rounded-lg border border-[#202B3C] text-right shadow-2xl">
                    <span className="font-mono text-[9px] text-[#adc6ff] block mb-1 font-bold tracking-widest uppercase">TARGET_LOCK</span>
                    <span className="font-mono text-lg text-[#e1e2ec] font-bold tracking-tighter">X: 429.01 | Y: 112.55</span>
                  </div>
                  <div className="bg-[#1a2330]/80 backdrop-blur-xl p-4 rounded-lg border border-[#202B3C] flex items-center gap-4 shadow-2xl">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#ffb4ab]/30 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-[#ffb4ab] rounded-full animate-ping"></div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[9px] text-[#ffb4ab] block font-bold tracking-widest uppercase">ABERRATION_DETECTED</span>
                      <span className="font-mono text-[10px] text-[#e1e2ec] opacity-80 uppercase tracking-tighter">Zernike Z4: Astigmatism</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex justify-between items-end">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 border border-[#4cd7f6]/50 rounded-sm"></span>
                    <span className="font-mono text-[10px] text-[#e1e2ec] font-bold tracking-widest">COHERENCE_STABILITY: {(photonicState?.lattice?.purity * 100 || 99.8).toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-50">
                    <span className="w-4 h-4 border border-[#424754] rounded-sm"></span>
                    <span className="font-mono text-[10px] text-[#8c909f] tracking-widest uppercase">THERMAL_NOISE: -128dBm</span>
                  </div>
                </div>
                <div className="font-mono text-[56px] font-black text-[#4cd7f6]/10 tracking-tighter select-none leading-none">
                  PH-001X
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Data Panels */}
          <div className="h-64 grid grid-cols-1 md:grid-cols-3 bg-[#0b0e15] border-t border-[#424754]/30 shrink-0">
            {/* AI Reasoning Log (Bound to reasoningTrace) */}
            <div className="bg-[#10131a] border-r border-[#424754]/20 flex flex-col">
              <div className="h-7 bg-[#1d2027] px-4 flex items-center justify-between border-b border-[#424754]/30">
                <span className="font-mono text-[9px] text-[#8c909f] tracking-widest font-bold uppercase">AI_OPTICAL_REASONING_LOG</span>
                <span className="material-symbols-outlined text-[16px] text-[#4cd7f6]">Brain</span>
              </div>
              <div className="flex-1 p-4 font-mono text-[10px] overflow-y-auto custom-scrollbar space-y-2.5">
                {reasoningTrace.slice(-10).map((log, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[#4cd7f6] shrink-0 opacity-70">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                    <span className={`${log.agent === 'OPTICAL' ? 'text-white' : 'text-[#c2c6d6]'}`}>
                      {log.thought}
                    </span>
                  </div>
                ))}
                {reasoningTrace.length === 0 && (
                  <div className="italic text-[#8c909f]">Awaiting optical synthesis telemetry...</div>
                )}
              </div>
            </div>

            {/* EM Spectrum & Photon Density */}
            <div className="bg-[#10131a] border-r border-[#424754]/20 flex flex-col">
              <div className="h-7 bg-[#1d2027] px-4 flex items-center justify-between border-b border-[#424754]/30">
                <span className="font-mono text-[9px] text-[#8c909f] tracking-widest font-bold uppercase">EM_SPECTRUM_TELEMETRY</span>
                <span className="material-symbols-outlined text-[16px] text-[#adc6ff]">query_stats</span>
              </div>
              <div className="flex-1 p-6 flex flex-col gap-6">
                <div className="relative h-12 flex items-center">
                  <div className="w-full h-2 bg-gradient-to-r from-blue-900 via-[#4cd7f6] via-[#10B981] via-yellow-500 to-red-600 opacity-40 rounded-full blur-sm" />
                  <div className="absolute inset-0 flex justify-around items-center px-4">
                    {[1, 2, 3, 4, 5].map((i: any) => (
                      <div key={i} className={`w-0.5 h-10 ${i === 3 ? 'bg-[#4cd7f6] shadow-[0_0_15px_#4cd7f6]' : 'bg-[#424754]/40'}`} />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1d2027]/50 p-3 rounded border border-[#424754]/20 flex flex-col gap-1">
                    <span className="font-mono text-[8px] text-[#8c909f] tracking-widest uppercase">PHOTON_DENSITY</span>
                    <span className="font-mono text-sm text-[#4cd7f6] font-bold">{(photonicState?.lattice?.couplingStrength * 1e12 || 1.24).toFixed(2)}e12 s⁻¹</span>
                  </div>
                  <div className="bg-[#1d2027]/50 p-3 rounded border border-[#424754]/20 flex flex-col gap-1">
                    <span className="font-mono text-[8px] text-[#8c909f] tracking-widest uppercase">PEAK_WAVELENGTH</span>
                    <span className="font-mono text-sm text-[#ffb786] font-bold">532.14 nm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* System Controls */}
            <div className="bg-[#10131a] flex flex-col">
              <div className="h-7 bg-[#1d2027] px-4 flex items-center justify-between border-b border-[#424754]/30">
                <span className="font-mono text-[9px] text-[#8c909f] tracking-widest font-bold uppercase">QUICK_COMMANDS</span>
                <span className="material-symbols-outlined text-[16px] text-[#8c909f]">SlidersHorizontal</span>
              </div>
              <div className="flex-1 p-4 grid grid-cols-2 gap-3">
                {[
                  { label: 'AUTO_ALIGN', icon: 'auto_fix', color: 'text-[#4cd7f6]' },
                  { label: 'RECALIBRATE', icon: 'refresh', color: 'text-[#adc6ff]' },
                  { label: 'CAPTURE_LOG', icon: 'photo_camera', color: 'text-[#ffb786]' },
                ].map((cmd) => (
                  <button 
                    key={cmd.label}
                    className="bg-[#1d2027] border border-[#424754]/30 hover:bg-[#32353c]/50 p-3 rounded flex flex-col items-center justify-center gap-2 transition-all active:scale-[0.95] group"
                  >
                    <span className={`material-symbols-outlined text-xl ${cmd.color} group-hover:scale-110 transition-transform`}>{cmd.icon}</span>
                    <span className="font-mono text-[8px] font-bold tracking-widest uppercase">{cmd.label}</span>
                  </button>
                ))}
                <button className="bg-[#93000a]/10 border border-[#93000a]/40 hover:bg-[#93000a]/20 p-3 rounded flex flex-col items-center justify-center gap-2 transition-all active:scale-[0.95] group">
                  <span className="material-symbols-outlined text-xl text-[#ffb4ab] group-hover:animate-pulse">power_settings_new</span>
                  <span className="font-mono text-[8px] font-bold tracking-widest uppercase text-[#ffb4ab]">EMERGENCY_SHUTOFF</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        @keyframes wave-pulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.05); }
        }
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

export default PhotonicCommandCenterEngineeringOS_ce0be4;
