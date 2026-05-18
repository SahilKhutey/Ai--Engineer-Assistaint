'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const GravityCommandCenterEngineeringOS_d13d48 = () => {
  const { simulationState, osStatus } = useEngineeringStore();

  const metrics = [
    { label: 'ECCENTRICITY', val: '0.00045', unit: 'e', status: 'NOMINAL', color: 'text-[#adc6ff]', progress: 5 },
    { label: 'INCLINATION', val: '28.502°', unit: 'INC', status: 'CALIBRATED', color: 'text-[#4cd7f6]', progress: 75 },
    { label: 'DELTA-V_BUDGET', val: '3,124.8', unit: 'M/S', status: 'AlertTriangle', color: 'text-[#ffb786]', progress: 50, AlertTriangle: true },
  ];

  const logEntries = [
    { time: '14:22:01', type: 'ANALYSIS', text: 'Detecting high-energy gravity well shift in sector 4G. Re-calculating transfer window for LEO-2.', color: 'text-[#adc6ff]' },
    { time: '14:22:05', type: 'PROPOSAL', text: 'Utilize Venus gravity-assist (VGA) at T+242 days. Reduces Delta-V requirements by 1.2km/s.', color: 'text-[#adc6ff]' },
    { time: '14:22:12', type: 'OPTIMIZATION', text: 'Hohmann transfer trajectory confirmed. Eccentricity tolerance matched to 0.0001σ accuracy.', color: 'text-[#4cd7f6]', active: true },
    { time: '14:22:18', type: 'SYSTEM', text: 'Injecting neural-mesh data into orbital map. Waiting for commander confirmation...', color: 'text-[#e1e2ec]/60' },
  ];

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-[48px] bg-[#10131a]/90 backdrop-blur-md border-b border-[#424754]/50 shrink-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#adc6ff]">terminal</span>
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#adc6ff] uppercase">QUANTUM_COMMAND_OS_v2.0.4</span>
        </div>
        <nav className="hidden md:flex gap-8 font-mono text-[10px] tracking-widest font-bold">
          <span className="text-[#adc6ff] border-b-2 border-[#adc6ff] pb-1 cursor-pointer">WORKSPACE</span>
          <span className="text-[#8c909f] hover:text-[#e1e2ec] cursor-pointer transition-colors pb-1">TRAJECTORY</span>
          <span className="text-[#8c909f] hover:text-[#e1e2ec] cursor-pointer transition-colors pb-1">DYNAMICS</span>
        </nav>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 px-3 py-1 bg-[#272a31]/50 rounded border border-[#424754]/30">
            <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse"></div>
            <span className="font-mono text-[10px] text-[#e1e2ec]/60 font-bold tracking-widest uppercase">LATTICE_SYNC: ACTIVE</span>
          </div>
          <span className="material-symbols-outlined text-[#8c909f] cursor-pointer hover:text-[#adc6ff] transition-colors">settings_input_component</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden pt-[48px]">
        {/* NavigationDrawer */}
        <aside className="w-64 border-r border-[#424754]/30 bg-[#191b23] hidden lg:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-6">
            <h2 className="font-mono text-[10px] text-[#8c909f] tracking-widest font-bold uppercase opacity-50">SYSTEM_NAV</h2>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'Telemetry', icon: 'BarChart3', active: true },
              { label: 'Qubit_Map', icon: 'Share2', active: false },
              { label: 'Circuit_Editor', icon: 'account_tree', active: false },
              { label: 'Stability_Log', icon: 'history_edu', active: false },
              { label: 'System_Health', icon: 'monitor_heart', active: false },
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
          <div className="px-6 pb-6">
            <div className="p-4 bg-[#10131a] rounded-lg border border-[#424754]/50 space-y-3">
              <p className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">CORE_STABILITY</p>
              <div className="h-1 bg-[#272a31] rounded-full overflow-hidden relative border border-[#424754]/30">
                <div className="absolute left-0 top-0 h-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]" style={{ width: '88%' }}></div>
              </div>
              <div className="flex justify-between font-mono text-[10px] text-[#4cd7f6] font-bold tracking-tighter">
                <span>88.42%</span>
                <span>0.002σ</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 overflow-hidden bg-[#0b0e15] grid grid-cols-12 grid-rows-6 p-6 gap-6 relative">
          {/* Gravity Workspace */}
          <section className="col-span-12 lg:col-span-8 row-span-4 bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded overflow-hidden relative group shadow-2xl">
            <header className="h-10 bg-[#272a31]/50 border-b border-[#424754]/30 flex items-center justify-between px-6 z-10 relative">
              <span className="font-mono text-[10px] text-[#e1e2ec] tracking-widest font-bold uppercase">3D_GRAVITY_WORKSPACE // SPACETIME_TOPOLOGY</span>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[18px] text-[#8c909f] cursor-pointer hover:text-white transition-colors">zoom_in</span>
                <span className="material-symbols-outlined text-[18px] text-[#8c909f] cursor-pointer hover:text-white transition-colors">layers</span>
                <span className="material-symbols-outlined text-[18px] text-[#8c909f] cursor-pointer hover:text-white transition-colors">Maximize2</span>
              </div>
            </header>
            <div className="w-full h-full bg-[#0b0e15] relative flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #adc6ff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              
              {/* Gravity Well Simulation */}
              <div className="relative w-[500px] h-[500px] flex items-center justify-center">
                {/* Planetary Core */}
                <div className="w-24 h-24 rounded-full bg-[#191b23] border border-[#adc6ff]/40 shadow-[0_0_80px_rgba(173,198,255,0.2)] relative z-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#adc6ff]/20 to-transparent rounded-full animate-pulse"></div>
                </div>
                {/* Gravity Rings */}
                <div className="absolute w-[200px] h-[200px] rounded-full border border-[#adc6ff]/10 border-dashed animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute w-[350px] h-[350px] rounded-full border border-[#4cd7f6]/10 border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
                <div className="absolute w-[500px] h-[500px] rounded-full border border-[#adc6ff]/5 border-dashed"></div>
                
                {/* Trajectory Arc */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 500 500">
                  <path d="M 50 250 Q 250 50 450 250" fill="none" stroke="#4cd7f6" strokeDasharray="6 4" strokeWidth="2" className="opacity-60" />
                  <circle cx="450" cy="250" fill="#4cd7f6" r="5" className="shadow-[0_0_15px_#4cd7f6]" />
                  <path d="M 450 250 L 465 235 M 450 250 L 465 265" stroke="#4cd7f6" strokeWidth="2" />
                </svg>

                {/* HUD Tags */}
                <div className="absolute top-[15%] right-[5%] p-4 bg-[#10131a]/80 backdrop-blur-xl border-l-2 border-t border-[#adc6ff]/40 rounded-tr shadow-2xl z-30">
                  <p className="font-mono text-[10px] text-[#adc6ff] font-black tracking-widest uppercase mb-1">OBJECT_ID: TERRA_PRIMARY</p>
                  <p className="font-mono text-[14px] text-[#e1e2ec] font-bold">MASS: 5.972e24 KG</p>
                </div>
              </div>

              {/* HUD Coordinate Overlays */}
              <div className="absolute bottom-6 left-6 flex gap-4">
                {['COORD_X: 124.5501', 'COORD_Y: -44.0922', 'COORD_Z: 0.0211'].map(coord => (
                  <div key={coord} className="px-4 py-2 bg-[#10131a]/80 backdrop-blur-xl border border-[#424754]/50 rounded font-mono text-[10px] text-[#4cd7f6] font-bold shadow-lg">
                    {coord}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Real-time Telemetry */}
          <section className="col-span-12 lg:col-span-4 row-span-4 bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded flex flex-col shadow-2xl overflow-hidden">
            <header className="h-10 bg-[#272a31]/50 border-b border-[#424754]/30 flex items-center px-6">
              <span className="font-mono text-[10px] text-[#e1e2ec] tracking-widest font-bold uppercase">ORBITAL_DYNAMICS_TELEMETRY</span>
            </header>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar">
              {metrics.map(m => (
                <div key={m.label} className="p-4 bg-[#10131a]/50 border border-[#424754]/30 rounded-lg group hover:border-[#4cd7f6]/50 transition-all shadow-lg relative overflow-hidden">
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <span className="font-mono text-[9px] text-[#8c909f] font-black tracking-widest uppercase">{m.label}</span>
                    <div className="flex items-center gap-2">
                      {m.AlertTriangle && <span className="material-symbols-outlined text-[#ffb786] text-[14px] animate-pulse">AlertTriangle</span>}
                      <span className={`font-mono text-[10px] font-black uppercase ${m.color}`}>{m.status}</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2 relative z-10">
                    <span className={`font-mono text-3xl font-black italic tracking-tighter ${m.color}`}>{m.val}</span>
                    <span className="font-mono text-[11px] text-[#8c909f] font-bold uppercase">{m.unit}</span>
                  </div>
                  <div className="mt-4 h-1.5 bg-[#191b23] rounded-full overflow-hidden relative border border-[#424754]/30">
                    <div className={`absolute left-0 top-0 h-full transition-all duration-[2s] ${m.color.replace('text-', 'bg-')} opacity-60`} style={{ width: `${m.progress}%` }}></div>
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-[#424754]/30 text-center space-y-2">
                <p className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.4em] opacity-40">GRAVITATIONAL_EQUATION_v2</p>
                <p className="font-mono text-2xl text-[#adc6ff] font-bold italic tracking-tighter">F = G (m₁m₂ / r²)</p>
              </div>
            </div>
          </section>

          {/* AI Spacetime Reasoning Log */}
          <section className="col-span-12 lg:col-span-7 row-span-2 bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded flex flex-col overflow-hidden shadow-2xl">
            <header className="h-10 bg-[#272a31]/50 border-b border-[#424754]/30 flex items-center px-6 justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">Brain</span>
                <span className="font-mono text-[10px] text-[#e1e2ec] tracking-widest font-bold uppercase">AI_SPACETIME_REASONING_LOG</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse"></div>
                <span className="font-mono text-[9px] text-[#4cd7f6] font-black uppercase tracking-widest">REASONING_ENGINE: ONLINE</span>
              </div>
            </header>
            <div className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-3">
              {logEntries.map((log, i) => (
                <div key={i} className={`flex gap-4 p-3 rounded transition-all ${log.active ? 'bg-[#03b5d3]/5 border-l-2 border-[#4cd7f6]' : 'opacity-80 hover:opacity-100 hover:bg-[#10131a]/50'}`}>
                  <span className="font-mono text-[10px] text-[#4cd7f6] font-bold shrink-0">[{log.time}]</span>
                  <div className="flex-1 font-mono text-[12px] leading-relaxed">
                    <span className={`${log.color} font-black uppercase tracking-widest mr-2`}>{log.type}:</span>
                    <span className="text-[#8c909f] group-hover:text-[#e1e2ec]">{log.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-12 bg-[#10131a] border-t border-[#424754]/30 px-6 flex items-center gap-4 shrink-0">
              <span className="text-[#4cd7f6] font-mono font-bold text-lg">&gt;</span>
              <input className="bg-transparent border-none outline-none focus:ring-0 text-[#e1e2ec] font-mono text-[12px] w-full placeholder:text-[#8c909f]/30" placeholder="AWAITING Terminal INPUT..." type="text"/>
            </div>
          </section>

          {/* Auxiliary Data Grid */}
          <section className="col-span-12 lg:col-span-5 row-span-2 grid grid-cols-2 gap-6">
            <div className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded p-4 flex flex-col gap-4 shadow-2xl">
              <div className="flex justify-between items-center border-b border-[#424754]/30 pb-3">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">PLANETARY_GRID</span>
                <span className="material-symbols-outlined text-[18px] text-[#adc6ff]">Globe</span>
              </div>
              <div className="flex-1 relative bg-[#0b0e15] rounded overflow-hidden border border-[#424754]/20 group">
                <img className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-[2s] group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuD1zdwCvZx3Hbhs71Z2O3UZw-CZjWgsM6dP6cR7_YFhUSrSrFeIryWoZTkg_EhQLfJ2avKPYXeDPcz6KL31pnJb5FIHEku4oaDg-hgpMW13RqvaVJhgZPUB9Ow_D0PzU-G9_L2temYANXw8umihjAk7s3wZBlG25E4FRHP_xjferROyEUe0cCoYhIEQSC-3wc_41d-3eGnOBvyzf8sZ_bi8Kvccj9aBuyMA2t3alBPYVKxB035VRqnf2BqstStdzFHR8hPVxzwxwBUM" alt="Planet" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e15] via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded p-4 flex flex-col gap-4 shadow-2xl">
              <div className="flex justify-between items-center border-b border-[#424754]/30 pb-3">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">VECTOR_ARRAY</span>
                <span className="material-symbols-outlined text-[18px] text-[#4cd7f6]">explore</span>
              </div>
              <div className="flex-1 flex flex-col justify-around py-2 font-mono text-[11px] space-y-2">
                {[
                  { label: 'VX:', val: '+7.82', unit: 'KM/S' },
                  { label: 'VY:', val: '-0.12', unit: 'KM/S' },
                  { label: 'VZ:', val: '+0.04', unit: 'KM/S' },
                ].map(v => (
                  <div key={v.label} className="flex items-center justify-between p-2 bg-[#10131a]/50 rounded border border-[#424754]/20">
                    <span className="text-[#8c909f] font-bold">{v.label}</span>
                    <span className="text-[#4cd7f6] font-black">{v.val} <span className="opacity-40 text-[9px]">{v.unit}</span></span>
                  </div>
                ))}
                <button className="w-full mt-4 py-2 border border-[#4cd7f6]/40 text-[#4cd7f6] font-mono text-[9px] font-black uppercase tracking-widest hover:bg-[#4cd7f6]/10 transition-all rounded shadow-inner">MANUAL_OVERRIDE</button>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Floating Calibration HUD */}
      <div className="fixed bottom-8 right-8 hidden lg:block z-[60] pointer-events-none group">
        <div className="bg-[#1d2027]/90 backdrop-blur-2xl border border-[#4cd7f6]/40 p-5 rounded-xl w-72 pointer-events-auto shadow-[0_0_50px_rgba(76,215,246,0.15)] group-hover:border-[#4cd7f6] transition-all">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-1.5 h-8 bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]"></div>
            <div>
              <p className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">Spacetime_Drift</p>
              <p className="font-mono text-[11px] text-[#e1e2ec] font-black">CALIBRATING_SENSORS...</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { label: 'SENSOR_A', val: '1.0003', prog: 100 },
              { label: 'SENSOR_B', val: '0.9998', prog: 99.9 },
            ].map((s: any) => (
              <div key={s.label} className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono text-[#4cd7f6] font-bold uppercase tracking-tighter">
                  <span className="opacity-60">{s.label}</span>
                  <span>{s.val}</span>
                </div>
                <div className="h-1 bg-[#10131a] rounded-full overflow-hidden border border-[#424754]/30">
                  <div className="h-full bg-[#4cd7f6] shadow-[0_0_5px_#4cd7f6]" style={{ width: `${s.prog}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default GravityCommandCenterEngineeringOS_d13d48;
