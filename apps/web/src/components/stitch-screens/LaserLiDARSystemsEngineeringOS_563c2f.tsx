'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const LaserLiDARSystemsEngineeringOS_563c2f = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const logs = [
    { time: '08:42:11', status: 'OK', text: 'SYNCHRONIZING TOF CLOCK...', color: 'text-[#4cd7f6]' },
    { time: '08:42:12', status: 'COMPLETE', text: 'RESOLVING SPATIAL COORDINATES... d=ct/2 CALC', color: 'text-[#4cd7f6]' },
    { time: '08:42:12', status: 'OK', text: 'POINT_CLOUD BUFF_SIZE: 1024MB', color: 'text-[#4cd7f6]' },
    { time: '08:42:14', status: 'AlertTriangle', text: 'OPTIC_TEMP_VARIANCE_DETECTED', color: 'text-[#ffb786]' },
    { time: '08:42:15', status: 'OK', text: 'STREAMING ASYNC_DATA_v2.0', color: 'text-[#4cd7f6]' },
  ];

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none z-[100] opacity-[0.03]" style={{ background: 'linear-gradient(to bottom, transparent 50%, #adc6ff 50%)', backgroundSize: '100% 4px' }}></div>

      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 h-[48px] bg-[#10131a]/90 backdrop-blur-md border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff]">terminal</span>
          <span className="font-mono text-[10px] font-black tracking-[0.2em] text-[#adc6ff] uppercase italic">QUANTUM_COMMAND_OS_v2.0.4</span>
        </div>
        <nav className="hidden md:flex gap-10">
          {['OPERATIONS', 'LOGISTICS', 'BarChart3'].map((item, i) => (
            <a 
              key={item} 
              href="#" 
              className={`font-mono text-[10px] font-black tracking-widest transition-all ${
                i === 0 ? 'text-[#adc6ff] border-b-2 border-[#adc6ff] py-1' : 'text-[#8c909f] hover:text-[#e1e2ec]'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-[#8c909f] hover:text-[#adc6ff] transition-colors cursor-pointer">settings_input_component</span>
        </div>
      </header>

      <div className="flex flex-1 pt-[48px] overflow-hidden">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#191b23] border-r border-[#424754]/30 hidden md:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-6">
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest opacity-50">SYSTEM_NAV</span>
          </div>
          <nav className="flex flex-col space-y-1">
            {[
              { label: 'Telemetry', icon: 'BarChart3', active: true },
              { label: 'Qubit_Map', icon: 'Share2', active: false },
              { label: 'Circuit_Editor', icon: 'account_tree', active: false },
              { label: 'Stability_Log', icon: 'history_edu', active: false },
              { label: 'System_Health', icon: 'monitor_heart', active: false },
            ].map((item) => (
              <div 
                key={item.label}
                className={`flex items-center gap-4 px-6 py-3 transition-all cursor-pointer ${
                  item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-l-2 border-[#4cd7f6] font-bold' : 'text-[#8c909f] hover:bg-[#272a31]/50 hover:text-[#e1e2ec]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
                <span className="font-mono text-[11px] uppercase tracking-tight">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-[#10131a]">
          <div className="grid grid-cols-12 gap-6 h-full max-w-[1600px] mx-auto">
            {/* Header / Terminal Summary */}
            <header className="col-span-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#424754]/50 pb-6 mb-2">
              <div>
                <h1 className="font-mono text-4xl font-black text-[#adc6ff] uppercase tracking-tighter italic">LiDAR_ENGINE_CMD</h1>
                <div className="flex items-center gap-3 mt-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6] animate-pulse"></span>
                  <span className="font-mono text-[11px] text-[#8c909f] font-bold uppercase tracking-widest">ACTIVE_SENSING_GRID: SYNCED [d = ct/2]</span>
                </div>
              </div>
              <div className="flex gap-4 mt-6 md:mt-0">
                <div className="bg-[#1d2027] border border-[#424754]/50 p-4 rounded-xl flex flex-col min-w-[140px]">
                  <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest mb-1">E2-E1=hf</span>
                  <span className="font-mono text-[12px] text-[#4cd7f6] font-black italic tracking-widest">GAIN_PRINCIPLE</span>
                </div>
                <div className="bg-[#1d2027] border border-[#424754]/50 p-4 rounded-xl flex flex-col min-w-[140px]">
                  <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest mb-1">Thermal State</span>
                  <span className="font-mono text-[12px] text-[#ffb786] font-black italic tracking-widest">294.15K NOMINAL</span>
                </div>
              </div>
            </header>

            {/* LiDAR Viewport */}
            <section className="col-span-12 lg:col-span-8 h-[600px] bg-[#0b0e15] border border-[#424754]/50 rounded-2xl relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-full p-6 z-10 flex justify-between items-start pointer-events-none">
                <div className="flex flex-col gap-2">
                  <div className="px-4 py-1.5 bg-[#10131a]/80 backdrop-blur-md border border-[#4cd7f6]/30 text-[#4cd7f6] font-mono text-[10px] font-black rounded uppercase tracking-[0.2em] shadow-lg">
                    Live_3D_Environment_Stream
                  </div>
                  <div className="text-[10px] text-[#8c909f] font-mono font-black uppercase tracking-widest opacity-60">FPS: 60.0 | VERTICES: 4.2M | LATENCY: 0.12ms</div>
                </div>
                <div className="flex gap-2 pointer-events-auto">
                  <button className="bg-[#1d2027]/80 backdrop-blur-md p-2.5 rounded-lg border border-[#424754]/50 hover:border-[#adc6ff] transition-all">
                    <span className="material-symbols-outlined text-[20px] text-[#adc6ff]">view_in_ar</span>
                  </button>
                  <button className="bg-[#1d2027]/80 backdrop-blur-md p-2.5 rounded-lg border border-[#424754]/50 hover:border-[#adc6ff] transition-all">
                    <span className="material-symbols-outlined text-[20px] text-[#adc6ff]">grid_on</span>
                  </button>
                </div>
              </div>

              {/* Simulated Point Cloud Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  className="w-full h-full object-cover opacity-50 grayscale contrast-125 brightness-75 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-[10000ms] linear" 
                  src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCjoWaiUcArWrtvKcliczBYuOgcl95rAWohqggSJhDuendeB6XiC-V7WC9-li2tiysudvQnnV-DB5cW2DtB_TSHVMQ8qkqOwwT4GstPBGUtZ74DHWpdvWO_qJPyh_HRngeSiCNh3jujpqW1LsxAOV7MB5Z4RkfyXPoIBHvaMfoGm0RpiVdqH6gjqFoiyNPsd9c65_kwjxBRi3QV3tpJnIRgz0cq18giMPCwZHsLqQ9rHYIR_P9pFhoaJ5uH1GVYNHYhYKI8UmFLYzPM" 
                  alt="LiDAR Point Cloud" 
                />
                
                {/* HUD Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Reticle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#4cd7f6]/10 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 border border-[#4cd7f6]/30 border-dashed rounded-full animate-spin"></div>
                    <div className="absolute w-[1px] h-full bg-[#4cd7f6]/10"></div>
                    <div className="absolute h-[1px] w-full bg-[#4cd7f6]/10"></div>
                  </div>
                  
                  {/* Floating Data */}
                  <div className="absolute bottom-6 left-6 p-4 bg-[#10131a]/60 backdrop-blur-md border border-[#424754]/50 rounded-xl font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest leading-loose shadow-2xl">
                    COORD_X: 42.9281<br/>
                    COORD_Y: 11.2003<br/>
                    COORD_Z: 00.1294
                  </div>
                </div>
              </div>
            </section>

            {/* Controls Side Panel */}
            <aside className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              {/* Beam Profile */}
              <section className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 p-6 rounded-2xl shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">Beam_Intensity_Profile</span>
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">filter_center_focus</span>
                </div>
                <div className="h-32 bg-[#0b0e15] border border-[#424754]/50 rounded-lg flex items-end gap-1 px-4 py-2 overflow-hidden relative group/hist">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4cd7f6]/5 to-transparent"></div>
                  {[20, 35, 55, 85, 100, 80, 45, 20].map((h, i) => (
                    <div 
                      key={i} 
                      className={`flex-1 transition-all duration-1000 ${i >= 3 && i <= 5 ? 'bg-[#4cd7f6] shadow-[0_0_15px_rgba(76,215,246,0.6)]' : 'bg-[#424754]/30'}`} 
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div className="flex flex-col gap-1 border-l-2 border-[#adc6ff] pl-3">
                    <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">PEAK_POWER</span>
                    <span className="font-mono text-[14px] text-[#e1e2ec] font-black italic tracking-widest">12.4 GW/cm²</span>
                  </div>
                  <div className="flex flex-col gap-1 border-l-2 border-[#adc6ff] pl-3">
                    <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">BEAM_WAIST</span>
                    <span className="font-mono text-[14px] text-[#e1e2ec] font-black italic tracking-widest">0.82 mm</span>
                  </div>
                </div>
              </section>

              {/* System Parameters */}
              <section className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 p-6 rounded-2xl shadow-2xl flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">System_Parameters</span>
                  <span className="material-symbols-outlined text-[#8c909f] text-[20px]">SlidersHorizontal</span>
                </div>
                {[
                  { label: 'PULSE_DURATION', value: '12.5 fs' },
                  { label: 'REPETITION_RATE', value: '80.0 MHz' },
                  { label: 'GAIN_RATIO', value: '1.42' },
                ].map((param) => (
                  <div key={param.label} className="space-y-3">
                    <div className="flex justify-between font-mono text-[10px] font-black uppercase tracking-widest">
                      <span className="text-[#8c909f]">{param.label}</span>
                      <span className="text-[#adc6ff] italic">{param.value}</span>
                    </div>
                    <input className="w-full h-1 bg-[#0b0e15] rounded-full appearance-none accent-[#adc6ff] cursor-pointer" type="range" />
                  </div>
                ))}
                <button className="mt-4 w-full py-4 bg-[#adc6ff] text-[#002e6a] font-mono text-[12px] font-black rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_-10px_rgba(173,198,255,0.4)] uppercase tracking-widest">
                  ENGAGE_EMISSION
                </button>
              </section>
            </aside>

            {/* Bottom Panels */}
            <section className="col-span-12 md:col-span-6 bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-2xl overflow-hidden shadow-2xl border-l-[6px] border-l-[#ffb4ab]">
              <header className="bg-[#ffb4ab]/10 h-8 px-6 flex items-center justify-between border-b border-[#424754]/30">
                <span className="font-mono text-[10px] text-[#ffb4ab] font-black tracking-[0.2em] uppercase">THERMAL_LENSING_ALERT</span>
                <span className="material-symbols-outlined text-[16px] text-[#ffb4ab] animate-pulse">AlertTriangle</span>
              </header>
              <div className="p-6 flex gap-6 items-center">
                <div className="w-24 h-24 rounded-full border-4 border-[#ffb4ab]/20 flex items-center justify-center relative shrink-0">
                  <div className="absolute inset-0 rounded-full border-t-4 border-[#ffb4ab] animate-spin"></div>
                  <span className="font-mono text-2xl font-black text-[#ffb4ab] italic tracking-tighter">84%</span>
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[11px] text-[#e1e2ec] font-bold leading-relaxed uppercase tracking-tight">
                    CRITICAL: Focal shift detected in optic L1. Thermal expansion coefficient exceeded normal threshold. Compensation sequence required.
                  </p>
                  <button className="mt-4 px-4 py-2 border border-[#ffb4ab]/30 text-[#ffb4ab] font-mono text-[10px] font-black rounded-lg hover:bg-[#ffb4ab]/10 transition-colors uppercase tracking-widest">
                    EXECUTE_COOLING_CYCLE
                  </button>
                </div>
              </div>
            </section>

            <section className="col-span-12 md:col-span-6 bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-2xl flex flex-col shadow-2xl">
              <header className="bg-[#272a31]/50 h-8 px-6 flex items-center justify-between border-b border-[#424754]/30">
                <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest">Data_Stream_Log</span>
                <span className="material-symbols-outlined text-[16px] text-[#8c909f]">terminal</span>
              </header>
              <div className="p-6 font-mono text-[11px] space-y-2 max-h-[140px] overflow-y-auto custom-scrollbar">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-4 group">
                    <span className="text-[#424754] font-bold group-hover:text-[#8c909f] transition-colors shrink-0">[{log.time}]</span>
                    <span className="text-[#e1e2ec] font-black uppercase tracking-tight group-hover:text-[#adc6ff] transition-colors">{log.text}</span>
                    <span className={`${log.color} font-black italic ml-auto`}>{log.status}</span>
                  </div>
                ))}
              </div>
            </section>
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

export default LaserLiDARSystemsEngineeringOS_563c2f;
