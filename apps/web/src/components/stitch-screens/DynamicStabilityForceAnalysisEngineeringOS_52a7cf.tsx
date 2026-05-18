'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const DynamicStabilityForceAnalysisEngineeringOS_52a7cf = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
          <h1 className="font-mono text-[14px] font-black text-[#4cd7f6] tracking-tighter uppercase italic">NEURAL_KINEMATICS_OS_V2</h1>
        </div>
        <div className="flex items-center gap-12">
          <nav className="hidden md:flex gap-8">
            {['OVERVIEW', 'DYNAMICS', 'CALIBRATION'].map((item, idx) => (
              <button key={item} className={`font-mono text-[10px] font-black uppercase tracking-[0.2em] italic transition-all hover:text-[#4cd7f6] ${idx === 1 ? 'text-[#4cd7f6] border-b-2 border-[#4cd7f6]' : 'text-[#8c909f]'}`}>
                {item}
              </button>
            ))}
          </nav>
          <button className="material-symbols-outlined text-[#8c909f] hover:text-[#e1e2ec] transition-colors p-2 rounded-xl">settings_input_component</button>
        </div>
      </header>

      {/* Main Container Shell */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/50 flex flex-col hidden lg:flex shrink-0 z-20 shadow-2xl">
          <div className="p-8">
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">CORE_TELEMETRY</span>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'Kinematics', icon: 'settings_accessibility', active: false },
              { label: 'Dynamics', icon: 'BarChart3', active: true },
              { label: 'AI_Stability', icon: 'psychology_alt', active: false },
              { label: 'System_Sync', icon: 'sync_alt', active: false },
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
        <main className="flex-1 overflow-y-auto p-8 bg-[#10131a] relative flex flex-col gap-8 custom-scrollbar">
          {/* Header Panel */}
          <section className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] px-10 py-6 flex justify-between items-center shadow-2xl relative z-10 animate-in fade-in duration-700">
            <div>
              <h2 className="font-mono text-xl font-black text-[#e1e2ec] tracking-tighter uppercase italic">Dynamic Stability & Force Analysis</h2>
              <p className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60">Real-time Inertial Load & ZMP Activity Engine</p>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_10px_#10B981]"></div>
                <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest italic">LIVE_TELEMETRY</span>
              </div>
              <div className="bg-[#0b0e15] px-4 py-2 border border-[#424754]/50 rounded-xl">
                <span className="font-mono text-[10px] text-[#4cd7f6] font-black italic uppercase">ID: NKV2-409-STABLE</span>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-12 gap-8 flex-1">
            {/* Stability Center of Mass (CoM) Visualization */}
            <section className="col-span-12 lg:col-span-7 bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] relative overflow-hidden group/viewport shadow-2xl flex flex-col min-h-[400px]">
              <header className="h-10 bg-[#1d2027] px-8 flex items-center justify-between border-b border-[#424754]/50 shrink-0">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">STABILITY_COM_VIEW</span>
                <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] transition-colors text-[18px]">Maximize2</button>
              </header>
              <div className="flex-1 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#202B3C 1px, transparent 1px), linear-gradient(90deg, #202B3C 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                
                <img className="w-full h-full object-cover opacity-30 mix-blend-screen scale-110 group-hover/viewport:scale-100 transition-all duration-[3000ms]" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuC2sjmIHKsiWjeke8PDihmGvz_XKK2NfjjH19TbPrsvQJ3SYVdo48NU3UHXVzzEefrEDDgW2OkajT6tYAFWnxsFwWwpYRZLp4QKye8SEya9kgJJSgz5G4N_OWaQvCshUDIRtvNdq2rwVJ9PzzKDFTSNejZ7NwGyCicVP8jO4dTTHeK4TYpQTpiezG7Je77c_UaiUXPTt5nDzLq2LgBpsYSPB03rmVfOe57mLSTfzQMxQp7gpAiQd97K9Oiu1Fw0xlUn9_mACS63H6Ib" alt="Kinematic model" />
                
                {/* HUD Overlays */}
                <div className="absolute top-10 left-10 p-6 bg-[#10131a]/80 backdrop-blur-xl border-2 border-[#424754]/50 rounded-2xl shadow-2xl z-20">
                  <div className="space-y-3 font-mono text-[11px] font-black italic uppercase tracking-tighter">
                    <div className="flex justify-between gap-8 border-b border-[#424754]/30 pb-2">
                      <span className="text-[#8c909f] opacity-60">X_AXIS</span>
                      <span className="text-[#4cd7f6]">0.042m</span>
                    </div>
                    <div className="flex justify-between gap-8 border-b border-[#424754]/30 pb-2">
                      <span className="text-[#8c909f] opacity-60">Y_AXIS</span>
                      <span className="text-[#4cd7f6]">-0.015m</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-[#8c909f] opacity-60">Z_AXIS</span>
                      <span className="text-[#4cd7f6]">0.892m</span>
                    </div>
                  </div>
                </div>

                {/* Force Vectors */}
                <div className="absolute bottom-10 right-10 flex gap-4 z-20">
                  {[
                    { l: 'FX', v: '142.4N', c: 'text-[#ffb786]' },
                    { l: 'FY', v: '12.1N', c: 'text-[#ffb786]' },
                    { l: 'FZ', v: '784.8N', c: 'text-[#4cd7f6]' },
                  ].map((force) => (
                    <div key={force.l} className="bg-[#10131a]/80 backdrop-blur-xl p-4 border-2 border-[#424754]/50 rounded-2xl text-center w-24 shadow-2xl group/force transition-all hover:border-[#4cd7f6]/50">
                      <div className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-40 mb-1">{force.l}</div>
                      <div className={`font-mono text-[12px] font-black italic ${force.c}`}>{force.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* AI Alert Panel & ZMP Violations */}
            <section className="col-span-12 lg:col-span-5 flex flex-col gap-8">
              <div className="flex-1 bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] flex flex-col shadow-2xl overflow-hidden group/ai">
                <header className="h-10 bg-[#1d2027] px-8 flex items-center border-b border-[#424754]/50 shrink-0">
                  <span className="font-mono text-[10px] text-[#ffb4ab] font-black uppercase tracking-[0.3em] italic">AI_STABILITY_WATCH</span>
                </header>
                <div className="p-8 flex-1 overflow-y-auto custom-scrollbar space-y-6">
                  {[
                    { label: 'ZMP_THRESHOLD_VIOLATION', desc: 'Margin decreased to 0.008m at T+14:22:04. Stability bias detected in Left Posterior.', color: 'text-[#ffb4ab]', icon: 'AlertTriangle', bgColor: 'bg-[#ffb4ab]/10', borderColor: 'border-[#ffb4ab]/30' },
                    { label: 'TRAJECTORY_SYNC_COMPLETE', desc: 'Predicted CoM path aligned with actual kinematics. Variance < 0.2%.', color: 'text-[#4cd7f6]', icon: 'info', bgColor: 'bg-[#4cd7f6]/10', borderColor: 'border-[#4cd7f6]/30' },
                    { label: 'JOINT_THERMAL_NOMINAL', desc: 'All 12 kinematic actuators operating within 45°C - 52°C range.', color: 'text-[#e1e2ec]', icon: 'check_circle', bgColor: 'bg-[#e1e2ec]/5', borderColor: 'border-[#e1e2ec]/20' },
                  ].map((alert) => (
                    <div key={alert.label} className={`flex gap-6 p-6 ${alert.bgColor} border-2 ${alert.borderColor} rounded-[24px] group/alert transition-all hover:scale-[1.02] cursor-help shadow-lg`}>
                      <span className={`material-symbols-outlined ${alert.color} text-[24px]`}>{alert.icon}</span>
                      <div className="space-y-1">
                        <div className={`font-mono text-[11px] ${alert.color} font-black uppercase tracking-widest italic`}>{alert.label}</div>
                        <div className="font-mono text-[11px] text-[#8c909f] font-black italic leading-relaxed opacity-80">{alert.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini Gauge Grid */}
              <div className="grid grid-cols-2 gap-8 h-40">
                {[
                  { label: 'LOAD_INDEX', value: '84.2', unit: '%', color: 'bg-[#4cd7f6]', textColor: 'text-[#4cd7f6]' },
                  { label: 'INERTIAL_COEFF', value: '0.92', unit: 'σ', color: 'bg-[#ffb786]', textColor: 'text-[#ffb786]' },
                ].map((gauge) => (
                  <div key={gauge.label} className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[30px] p-8 flex flex-col justify-between shadow-2xl group/gauge transition-all hover:border-[#adc6ff]/30">
                    <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">{gauge.label}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-mono text-3xl font-black text-[#e1e2ec] italic tracking-tighter">{gauge.value}</span>
                      <span className="font-mono text-sm text-[#8c909f] font-black italic opacity-50 uppercase tracking-widest">{gauge.unit}</span>
                    </div>
                    <div className="h-2 w-full bg-[#0b0e15] rounded-full overflow-hidden relative shadow-inner">
                      <div className={`absolute top-0 left-0 h-full ${gauge.color} transition-all duration-1000`} style={{ width: gauge.label === 'LOAD_INDEX' ? '84.2%' : '92%' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Joint Torques Table */}
            <section className="col-span-12 lg:col-span-8 bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] shadow-2xl overflow-hidden group/table">
              <header className="h-10 bg-[#1d2027] px-8 flex items-center border-b border-[#424754]/50 shrink-0">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">JOINT_TORQUE_MATRIX (N·M)</span>
              </header>
              <div className="overflow-auto custom-scrollbar max-h-[400px]">
                <table className="w-full text-left font-mono">
                  <thead className="bg-[#10131a]/80 sticky top-0 z-10 border-b border-[#424754]/50">
                    <tr>
                      <th className="px-8 py-4 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">JOINT_ID</th>
                      <th className="px-8 py-4 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">POSITION (RAD)</th>
                      <th className="px-8 py-4 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">VELOCITY (R/S)</th>
                      <th className="px-8 py-4 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">TORQUE (N·M)</th>
                      <th className="px-8 py-4 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">LOAD_GRAPH</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#424754]/30 font-mono text-[12px] font-black italic uppercase tracking-tighter">
                    {[
                      { id: 'HIP_PITCH_L', pos: '-0.245', vel: '1.24', torque: '42.82', levels: [10, 20, 100, 75, 50] },
                      { id: 'KNEE_PITCH_L', pos: '1.082', vel: '-0.45', torque: '118.45', levels: [100, 75, 75, 100, 100] },
                      { id: 'ANKLE_ROLL_L', pos: '0.012', vel: '0.02', torque: '12.18', levels: [10, 10, 10, 10, 10] },
                      { id: 'HIP_PITCH_R', pos: '0.452', vel: '-1.12', torque: '38.92', levels: [40, 60, 50, 40, 30] },
                    ].map((joint) => (
                      <tr key={joint.id} className="hover:bg-[#4cd7f6]/5 group/row transition-all cursor-crosshair">
                        <td className="px-8 py-6 text-[#4cd7f6] group-hover/row:text-[#adc6ff] transition-colors">{joint.id}</td>
                        <td className="px-8 py-6 text-[#e1e2ec] opacity-80">{joint.pos}</td>
                        <td className="px-8 py-6 text-[#e1e2ec] opacity-80">{joint.vel}</td>
                        <td className="px-8 py-6 text-[#ffb786]">{joint.torque}</td>
                        <td className="px-8 py-6">
                          <div className="flex gap-1 items-end h-6 w-32 group-hover/row:scale-110 transition-transform">
                            {joint.levels.map((lvl, i) => (
                              <div key={i} className="flex-1 bg-[#4cd7f6] rounded-t-sm shadow-[0_0_8px_rgba(76,215,246,0.3)] transition-all duration-700" style={{ height: `${lvl}%`, opacity: lvl / 100 }}></div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Inertial Load Graphs */}
            <section className="col-span-12 lg:col-span-4 bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] shadow-2xl flex flex-col overflow-hidden group/waveform">
              <header className="h-10 bg-[#1d2027] px-8 flex items-center border-b border-[#424754]/50 shrink-0">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">INERTIAL_LOAD_WAVEFORM</span>
              </header>
              <div className="p-8 flex-1 relative flex flex-col gap-6 overflow-hidden">
                <div className="flex-1 bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[30px] relative overflow-hidden shadow-inner group-hover/waveform:border-[#4cd7f6]/30 transition-all cursor-crosshair">
                  <svg className="absolute inset-0 w-full h-full p-8" preserveAspectRatio="none" viewBox="0 0 400 200">
                    <path 
                      className="drop-shadow-[0_0_15px_#4cd7f6] transition-all duration-1000" 
                      d="M0 100 Q 50 20, 100 100 T 200 100 T 300 100 T 400 100" 
                      fill="none" 
                      stroke="#4cd7f6" 
                      strokeWidth="2"
                    ></path>
                    <path 
                      className="opacity-40 transition-all duration-1000" 
                      d="M0 120 Q 50 180, 100 120 T 200 120 T 300 120 T 400 120" 
                      fill="none" 
                      stroke="#ffb786" 
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                  <div className="absolute top-6 left-6 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-[2px] bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6]"></div>
                      <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">X_INERTIA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-[2px] bg-[#ffb786] shadow-[0_0_8px_#ffb786]"></div>
                      <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">Y_INERTIA</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Global Control Bar */}
      <footer className="h-20 bg-[#10131a] border-t border-[#424754]/50 flex justify-center items-center gap-16 px-12 z-[60] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)]">
        {[
          { label: 'Live_Feed', icon: 'Sliders', active: true },
          { label: 'Log_Stream', icon: 'list_alt', active: false },
          { label: 'Cmd_Shell', icon: 'terminal', active: false },
          { label: 'Alerts', icon: 'AlertTriangle', active: false },
        ].map((item) => (
          <button key={item.label} className={`flex flex-col items-center gap-1 transition-all group ${item.active ? 'text-[#4cd7f6] scale-110' : 'text-[#8c909f] opacity-40 hover:opacity-100 hover:scale-110'}`}>
            <span className={`material-symbols-outlined text-[28px] ${item.active ? 'drop-shadow-[0_0_10px_rgba(76,215,246,0.5)]' : ''}`}>{item.icon}</span>
            <span className="font-mono text-[9px] font-black uppercase italic tracking-widest">{item.label}</span>
          </button>
        ))}
      </footer>

      {/* Polish: HUD Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>
      <div className="fixed inset-0 pointer-events-none z-[101] bg-[#4cd7f6]/5 mix-blend-overlay opacity-10"></div>

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

export default DynamicStabilityForceAnalysisEngineeringOS_52a7cf;
