'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const AlertDetailThermalHotspotEngineeringOS_7a0cef = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">Sliders</span>
          <h1 className="font-mono text-[12px] font-black text-[#adc6ff] uppercase tracking-[0.2em] italic">SIGNAL_COMMAND_v4.0</h1>
        </div>
        <div className="flex items-center gap-12">
          <div className="hidden md:flex gap-6 font-mono text-[10px] font-black uppercase tracking-widest italic">
            <span className="text-[#8c909f] hover:text-[#e1e2ec] transition-colors cursor-pointer">SYST_LOG</span>
            <span className="text-[#4cd7f6] bg-[#4cd7f6]/10 px-3 py-1 rounded-full border border-[#4cd7f6]/30">CRIT_ALERT_042</span>
            <span className="text-[#8c909f] hover:text-[#e1e2ec] transition-colors cursor-pointer">NET_STATE</span>
          </div>
          <button className="material-symbols-outlined text-[#8c909f] hover:text-[#e1e2ec] transition-colors p-2 rounded-xl">settings_input_component</button>
        </div>
      </header>

      {/* Main Container Shell */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/50 flex flex-col hidden md:flex shrink-0 z-20">
          <div className="p-8">
            <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.3em] italic">CORE_DOMAINS</span>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'PHYSICS_STREAM', icon: 'blur_on', active: false },
              { label: 'AI_CORE', icon: 'Brain', active: false },
              { label: 'INFRA_GRID', icon: 'Share2', active: true },
              { label: 'MFG_LOGS', icon: 'precision_manufacturing', active: false },
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
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#10131a] relative custom-scrollbar">
          <div className="p-8 max-w-7xl mx-auto space-y-8 pb-32 animate-in fade-in duration-700">
            {/* Alert Header Banner */}
            <div className="bg-[#93000a]/10 border-2 border-[#ffb4ab]/30 rounded-[32px] p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffb4ab]/10 to-transparent pointer-events-none"></div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="bg-[#ffb4ab] rounded-2xl p-4 animate-pulse shadow-[0_0_30px_rgba(255,180,171,0.5)]">
                  <span className="material-symbols-outlined text-[#690005] text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>AlertTriangle</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#ffb4ab] font-black uppercase tracking-[0.2em] italic">CRITICAL_EVENT</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab]"></div>
                    <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60">ID: THERM_8829_AX</span>
                  </div>
                  <h1 className="font-mono text-3xl font-black text-[#e1e2ec] tracking-tighter uppercase italic drop-shadow-xl">Critical Thermal Event: Sector 7-G</h1>
                </div>
              </div>
              <div className="flex flex-col items-end relative z-10">
                <span className="font-mono text-4xl font-black text-[#ffb4ab] italic tracking-tighter drop-shadow-[0_0_20px_rgba(255,180,171,0.3)]">184.2°C</span>
                <span className="font-mono text-[11px] text-[#ffb4ab] font-black uppercase tracking-widest italic opacity-80">+42% ABOVE THRESHOLD</span>
              </div>
            </div>

            {/* Bento Grid LayoutGrid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* 3D Workspace Viewport */}
              <div className="lg:col-span-8 bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] overflow-hidden flex flex-col shadow-2xl group/viewport">
                <header className="h-10 bg-[#1d2027] px-8 flex items-center justify-between border-b border-[#424754]/50 shrink-0">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">3D_WORKSPACE_VIEWPORT</span>
                  <div className="flex gap-4">
                    <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] transition-colors text-[18px]">Camera</button>
                    <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] transition-colors text-[18px]">zoom_in</button>
                    <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] transition-colors text-[18px]">Maximize2</button>
                  </div>
                </header>
                <div className="relative flex-grow min-h-[500px] bg-[#0b0e15]">
                  <img className="w-full h-full object-cover opacity-60 mix-blend-screen scale-110 group-hover/viewport:scale-100 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDHOXgxld7TRN4vL3Kp44vhMumyd-BsTRzzWc_O1vYZg3I4jyCqgoio74WaroZeMen0rRVaP5e4f8fb_IVIezr_m5UZJ9vRmu0k6qBcGygCL-gP5LP2eSBJTr_Akr5Ci0E8b9Ow7RbvlLs_ekRH2fqIt2krpeN3N0Hfo1pTKPHrTJojcdm9Ys8Y9blCoRrKzUEMZ8dz-USlnzr_lefEsFB8S_w60hc8X9P5V__G9NpAZH13mskPjfAszNmcsR_EEVHXfPvG3-wvCrlH" alt="Thermal 3D Model" />
                  
                  {/* HUD Overlays */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-64 h-64 border-4 border-[#ffb4ab]/20 rounded-full flex items-center justify-center animate-ping"></div>
                    <div className="absolute w-48 h-48 border-2 border-[#ffb4ab]/50 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-4 h-4 bg-[#ffb4ab] rounded-full shadow-[0_0_30px_#ffb4ab]"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 bg-[#10131a]/80 backdrop-blur-xl p-6 border-2 border-[#424754]/50 rounded-2xl shadow-2xl">
                    <div className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic mb-2">COORDINATES</div>
                    <div className="font-mono text-[12px] text-[#e1e2ec] font-black italic uppercase tracking-tighter">X: 142.09 | Y: 882.11 | Z: 12.00</div>
                  </div>
                </div>
              </div>

              {/* Thermal Gradient Chart */}
              <div className="lg:col-span-4 bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] flex flex-col shadow-2xl group/chart">
                <header className="h-10 bg-[#1d2027] px-8 flex items-center justify-between border-b border-[#424754]/50 shrink-0">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">THERMAL_GRADIENT</span>
                  <span className="material-symbols-outlined text-[#8c909f] text-[18px]">show_chart</span>
                </header>
                <div className="p-8 flex-grow flex flex-col gap-8">
                  <div className="h-64 relative flex items-end gap-1.5 px-4 overflow-hidden group/wave">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ffb4ab]/10 to-transparent pointer-events-none"></div>
                    {[20, 25, 40, 65, 85, 95, 100, 70, 45, 30, 20, 15].map((height, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 bg-[#ffb4ab]/20 rounded-t-lg transition-all duration-700 hover:bg-[#ffb4ab]/50 ${i === 6 ? 'bg-[#ffb4ab] shadow-[0_0_20px_#ffb4ab] animate-pulse' : ''}`} 
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: 'MEAN_TEMP', value: '112.4°C', color: 'text-[#e1e2ec]' },
                      { label: 'PEAK_RISE', value: '+14.2°/MIN', color: 'text-[#ffb4ab]' },
                      { label: 'COOL_CAP', value: '08.2%', color: 'text-[#4cd7f6]' },
                    ].map((stat) => (
                      <div key={stat.label} className="flex justify-between items-center border-b border-[#424754]/30 pb-3 group/stat">
                        <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic group-hover/stat:text-[#e1e2ec] transition-colors">{stat.label}</span>
                        <span className={`font-mono text-[14px] font-black italic uppercase ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Remediation Plan */}
              <div className="lg:col-span-12 bg-[#03b5d3]/5 backdrop-blur-xl border-2 border-[#4cd7f6]/30 rounded-[40px] p-10 shadow-2xl relative overflow-hidden group/ai">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#4cd7f6]/10 blur-[100px] pointer-events-none transition-all group-hover/ai:scale-150"></div>
                <div className="flex flex-col md:flex-row gap-12 relative z-10">
                  <div className="flex-grow space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-[#4cd7f6] text-[32px] animate-bounce" style={{ fontVariationSettings: "'FILL' 1" }}>Brain</span>
                      <span className="font-mono text-[13px] text-[#4cd7f6] font-black uppercase tracking-[0.4em] italic">AI_REMEDIATION_PLAN_v2.1</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { step: '01', text: 'Reroute active physics calculations to INFRA_GRID-B to reduce localized CPU load.' },
                        { step: '02', text: 'Increase Liquid Nitrogen flow to Sector 7-G coolant injectors by 200%.' },
                        { step: '03', text: 'Isolate power cluster ALPHA-9 until thermal equilibrium is restored below 85.0°C.' },
                      ].map((plan) => (
                        <div key={plan.step} className="bg-[#10131a]/60 p-6 rounded-[24px] border-2 border-[#424754]/50 hover:border-[#4cd7f6]/50 transition-all group/item shadow-inner">
                          <div className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic mb-4 opacity-50 group-hover/item:text-[#4cd7f6] transition-colors">STEP_{plan.step}</div>
                          <p className="font-mono text-[12px] text-[#e1e2ec] font-black italic uppercase leading-relaxed tracking-tight group-hover/item:text-[#4cd7f6] transition-colors">{plan.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-4 min-w-[200px]">
                    <button className="bg-[#4cd7f6] text-[#003640] font-mono text-[11px] font-black uppercase tracking-widest italic py-5 px-10 rounded-2xl shadow-[0_15px_30px_-10px_rgba(76,215,246,0.5)] hover:scale-[1.05] active:scale-[0.95] transition-all flex items-center justify-center gap-3">
                      <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                      EXECUTE_FIX
                    </button>
                    <button className="bg-[#1d2027] border-2 border-[#424754] text-[#8c909f] font-mono text-[11px] font-black uppercase tracking-widest italic py-4 px-10 rounded-2xl hover:bg-[#ffb4ab]/10 hover:border-[#ffb4ab]/30 hover:text-[#ffb4ab] transition-all">
                      DISMISS_ADVICE
                    </button>
                  </div>
                </div>
              </div>

              {/* Sensor Telemetry Table */}
              <div className="lg:col-span-12 bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] overflow-hidden shadow-2xl group/table">
                <header className="h-12 bg-[#1d2027] px-10 flex items-center justify-between border-b border-[#424754]/50 shrink-0">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">SENSOR_TELEMETRY</span>
                  <div className="flex gap-10">
                    <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic animate-pulse">AUTO_REFRESH: 500MS</span>
                    <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] transition-colors text-[18px]">download</button>
                  </div>
                </header>
                <div className="overflow-x-auto custom-scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#424754]/50 bg-[#10131a]/50">
                        <th className="p-8 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">SENSOR_ID</th>
                        <th className="p-8 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">LOCATION</th>
                        <th className="p-8 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">VALUE</th>
                        <th className="p-8 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">DEVIATION</th>
                        <th className="p-8 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-[12px] font-black italic uppercase divide-y divide-[#424754]/20">
                      {[
                        { id: 'TH_7G_01', loc: 'Rack A-14 (Core)', val: '184.2°C', dev: '+94.2', status: 'OVER_LIMIT', color: 'text-[#ffb4ab]', pulse: true },
                        { id: 'TH_7G_02', loc: 'Rack A-15 (Aux)', val: '142.1°C', dev: '+52.1', status: 'AlertTriangle', color: 'text-[#ffb786]' },
                        { id: 'PR_7G_99', loc: 'Main Valve 02', val: '42.2 PSI', dev: '-1.4', status: 'NOMINAL', color: 'text-[#4cd7f6]' },
                        { id: 'TH_7G_03', loc: 'Ambient Intake', val: '22.4°C', dev: '±0.0', status: 'STABLE', color: 'text-[#8c909f]' },
                      ].map((row) => (
                        <tr key={row.id} className="hover:bg-[#4cd7f6]/5 transition-all group/row cursor-crosshair">
                          <td className="p-8 text-[#e1e2ec] group-hover/row:text-[#4cd7f6] transition-colors">{row.id}</td>
                          <td className="p-8 text-[#8c909f]">{row.loc}</td>
                          <td className={`p-8 ${row.color}`}>{row.val}</td>
                          <td className={`p-8 ${row.color}`}>{row.dev}</td>
                          <td className="p-8">
                            <span className={`flex items-center gap-3 ${row.color}`}>
                              <span className={`w-2 h-2 rounded-full ${row.color === 'text-[#ffb4ab]' ? 'bg-[#ffb4ab]' : (row.color === 'text-[#ffb786]' ? 'bg-[#ffb786]' : (row.color === 'text-[#4cd7f6]' ? 'bg-[#4cd7f6]' : 'bg-[#424754]'))} ${row.pulse ? 'animate-pulse shadow-[0_0_10px_rgba(255,180,171,0.5)]' : ''}`}></span>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Polish: HUD Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>
      <div className="fixed inset-0 pointer-events-none z-[101] bg-[#4cd7f6]/5 mix-blend-overlay opacity-20"></div>

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

export default AlertDetailThermalHotspotEngineeringOS_7a0cef;
