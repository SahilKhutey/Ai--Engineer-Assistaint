'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const MotionPlanningEngineeringOS_39f917 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
          <h1 className="font-mono text-[14px] font-black text-[#4cd7f6] tracking-tighter uppercase italic">KINETIC_OS // DYNAMICS_LAYER</h1>
        </div>
        <div className="flex items-center gap-12">
          <nav className="hidden md:flex gap-8">
            {['DYNAMICS_CORE', 'PLANNING_V3', 'SIMULATION'].map((item, idx) => (
              <button key={item} className={`font-mono text-[10px] font-black uppercase tracking-[0.2em] italic transition-all hover:text-[#4cd7f6] ${idx === 0 ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>
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
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/50 flex flex-col hidden md:flex shrink-0 z-20 shadow-2xl">
          <div className="p-8">
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">SYSTEM_INDEX</span>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'Telemetry', icon: 'Activity', active: true },
              { label: 'Kinematics', icon: 'Share2', active: false },
              { label: 'AI_Stability', icon: 'Brain', active: false },
              { label: 'Command_Log', icon: 'terminal', active: false },
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
        <main className="flex-1 overflow-y-auto p-1 bg-[#424754]/30 grid grid-cols-12 gap-1 custom-scrollbar">
          {/* Left Column: 3D Visualization */}
          <section className="col-span-12 lg:col-span-8 bg-[#0b0e15] relative group/viewport overflow-hidden min-h-[600px] flex flex-col">
            <header className="absolute top-0 left-0 w-full z-10 px-8 py-4 bg-gradient-to-b from-[#0b0e15] to-transparent flex justify-between items-center">
              <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">PLANNING_VIEW_3D // RRT* REALTIME</span>
              <div className="flex gap-6">
                {['Camera', 'layers', 'open_in_full'].map((icon) => (
                  <button key={icon} className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] transition-colors text-[18px]">{icon}</button>
                ))}
              </div>
            </header>

            {/* Simulation Viewport */}
            <div className="flex-1 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4cd7f6 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <img 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110 group-hover/viewport:scale-100 transition-all duration-[5000ms]" 
                src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuAJAzN1I5gxerWktuk3dfDjEdnH73dlEb6Q_hFrxn4kQkfRC2BkYrKyV7dqfwep9Py2Lr110pZENeL2hbqjaC7RLZpFhPNBdd69HQA_Kd5H7kATOLw8mDoBN2nCapnxEsnFGNdD52v-iEqH7YpsTwY1KOxl1rsnxi6GhCwniUwTPYobKrHH06TFAjSYZ1IOrSSwVFqmnzd8Eo6BxUmQXJg56qQaWAm35mJ0T1PVm3x1EFrYmGhEUqouZkvFG6gKduyuGZZZ5ynnp46v" 
                alt="Motion Planning Simulation" 
              />
              
              {/* HUD Overlays */}
              <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start">
                  <div className="bg-[#10131a]/80 backdrop-blur-xl p-6 border-2 border-[#424754]/50 rounded-[30px] shadow-2xl animate-in slide-in-from-left duration-700">
                    <div className="text-[#4cd7f6] font-mono text-[9px] font-black uppercase italic tracking-widest mb-1">ALGORITHM_ACTIVE</div>
                    <div className="text-[#e1e2ec] font-mono text-xl font-black italic tracking-tighter uppercase">MPC // CONSTRAINED_OPTIMIZATION</div>
                  </div>
                  <div className="text-right bg-[#10131a]/80 backdrop-blur-xl p-6 border-2 border-[#424754]/50 rounded-[30px] shadow-2xl animate-in slide-in-from-right duration-700">
                    <div className="text-[#adc6ff] font-mono text-2xl font-black italic tracking-tighter drop-shadow-xl">0.0042s</div>
                    <div className="text-[#8c909f] font-mono text-[9px] font-black uppercase tracking-widest italic opacity-60">SOLVE_TIME</div>
                  </div>
                </div>

                <div className="flex gap-8 items-end animate-in slide-in-from-bottom duration-1000">
                  <div className="flex-1 border-t-2 border-[#4cd7f6]/30 h-24 relative">
                    <div className="absolute -top-1.5 left-[30%] w-3 h-3 rounded-full bg-[#4cd7f6] shadow-[0_0_15px_#4cd7f6] animate-pulse"></div>
                    <div className="font-mono text-[10px] text-[#4cd7f6] mt-4 font-black italic uppercase tracking-widest">FORCE_VECTORS (N)</div>
                  </div>
                  <div className="bg-[#10131a]/80 backdrop-blur-xl border-2 border-[#424754]/50 p-6 rounded-[30px] flex gap-10 shadow-2xl">
                    {[
                      { l: 'EPSILON', v: '0.024' },
                      { l: 'ITERATIONS', v: '1,402' },
                    ].map((stat) => (
                      <div key={stat.l}>
                        <div className="text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50 mb-1">{stat.l}</div>
                        <div className="text-[#e1e2ec] font-mono text-lg font-black italic tracking-tighter">{stat.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Metrics & Controls */}
          <section className="col-span-12 lg:col-span-4 flex flex-col gap-1 bg-[#424754]/30">
            {/* Statistics Panel */}
            <div className="bg-[#1d2027] p-8 space-y-8 animate-in slide-in-from-right duration-700">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981] animate-pulse"></div>
                <h2 className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.2em] italic">LIVE_DYNAMICS_METRICS</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'ENERGY_REDUCTION', value: '-14.2%', progress: 72, color: 'bg-[#adc6ff]', shadow: 'shadow-[0_0_10px_#adc6ff]' },
                  { label: 'SMOOTHNESS_RANK', value: '0.982', progress: 98, color: 'bg-[#4cd7f6]', shadow: 'shadow-[0_0_10px_#4cd7f6]' },
                ].map((metric) => (
                  <div key={metric.label} className="bg-[#0b0e15] p-6 border-2 border-[#424754]/50 rounded-[30px] shadow-2xl transition-all hover:border-[#adc6ff]/30">
                    <div className="text-[#8c909f] text-[9px] font-black uppercase tracking-widest italic opacity-50 mb-2">{metric.label}</div>
                    <div className="text-[#e1e2ec] font-mono text-xl font-black italic tracking-tighter">{metric.value}</div>
                    <div className="h-1.5 w-full bg-[#1d2027] mt-4 rounded-full overflow-hidden shadow-inner">
                      <div className={`${metric.color} ${metric.shadow} h-full transition-all duration-1000`} style={{ width: `${metric.progress}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collision Heatmap */}
            <div className="bg-[#1d2027] p-8 space-y-8 flex-1 animate-in slide-in-from-right duration-1000">
              <h3 className="font-mono text-[10px] text-[#ffb4ab] font-black uppercase tracking-[0.2em] italic flex items-center gap-4">
                <span className="material-symbols-outlined text-[20px]">report_problem</span>
                COLLISION_HEATMAP_ANALYSIS
              </h3>
              <div className="aspect-square bg-[#0b0e15] rounded-[40px] border-2 border-[#424754]/50 relative overflow-hidden shadow-2xl group/heatmap">
                {/* Heatmap Abstraction */}
                <div className="absolute inset-0 opacity-40 mix-blend-screen bg-gradient-to-tr from-[#ffb4ab]/40 via-transparent to-[#4cd7f6]/20"></div>
                <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-[#ffb4ab]/20 rounded-full blur-3xl border border-[#ffb4ab]/30 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-[#ffb4ab]/10 rounded-full blur-[60px]"></div>
                
                {/* Grid Overlay */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 pointer-events-none">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="border-r border-b border-[#4cd7f6]/5"></div>
                  ))}
                </div>
                <div className="absolute bottom-6 right-8 font-mono text-[9px] text-[#8c909f] font-black uppercase italic tracking-widest opacity-40">Z-LAYER_0.02</div>
              </div>

              {/* Force Impulse List */}
              <div className="space-y-1">
                {[
                  { id: 'VEC_04 // JOINT_A1', val: '42.8 Ns', color: 'text-[#ffb4ab]' },
                  { id: 'VEC_09 // END_EFF', val: '0.0 Ns', color: 'text-[#4cd7f6]' },
                  { id: 'VEC_12 // BASE_ROT', val: '1.2 Ns', color: 'text-[#4cd7f6]' },
                ].map((vec) => (
                  <div key={vec.id} className="flex justify-between items-center bg-[#0b0e15] p-4 px-6 border-2 border-[#424754]/50 rounded-2xl transition-all hover:bg-[#1d2027]">
                    <span className="font-mono text-[10px] text-[#8c909f] font-black italic tracking-widest uppercase opacity-60">{vec.id}</span>
                    <span className={`font-mono text-[12px] font-black italic ${vec.color}`}>{vec.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Control Actions */}
            <div className="bg-[#1d2027] p-8 space-y-4 border-t border-[#424754]/50 animate-in slide-in-from-bottom duration-700">
              <button className="w-full bg-[#4d8eff] text-[#002e6a] py-6 rounded-[30px] font-mono text-[11px] font-black uppercase tracking-widest italic shadow-[0_15px_30px_-10px_rgba(77,142,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all group/init">
                INITIATE_PATH_SOLVER
              </button>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-[#1d2027] border-2 border-[#424754]/50 text-[#e1e2ec] py-5 rounded-[24px] font-mono text-[10px] font-black uppercase tracking-widest italic hover:bg-[#424754]/30 hover:border-[#adc6ff]/30 transition-all">
                  RESET_ENV
                </button>
                <button className="bg-[#1d2027] border-2 border-[#424754]/50 text-[#e1e2ec] py-5 rounded-[24px] font-mono text-[10px] font-black uppercase tracking-widest italic hover:bg-[#424754]/30 hover:border-[#adc6ff]/30 transition-all">
                  EXPORT_CSV
                </button>
              </div>
            </div>
          </section>

          {/* Lower Bento Section */}
          <section className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-1 bg-[#424754]/30">
            <div className="md:col-span-4 bg-[#1d2027] p-8 space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">MULTI-AGENT_MAP</span>
                <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">Share2</span>
              </div>
              <div className="h-40 bg-[#0b0e15] rounded-[30px] overflow-hidden relative border-2 border-[#424754]/50 shadow-inner group/agentmap">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_#4cd7f6_3px,_transparent_3px)] bg-[length:40px_40px] opacity-10"></div>
                <div className="absolute top-1/2 left-1/4 flex flex-col items-center gap-2 group-hover/agentmap:translate-y-[-10px] transition-transform duration-1000">
                  <div className="w-3 h-3 rounded-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]"></div>
                  <div className="text-[9px] font-mono text-[#4cd7f6] font-black italic">AGENT_01</div>
                </div>
                <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center gap-2 group-hover/agentmap:translate-y-[10px] transition-transform duration-1000">
                  <div className="w-3 h-3 rounded-full bg-[#adc6ff] shadow-[0_0_10px_#adc6ff]"></div>
                  <div className="text-[9px] font-mono text-[#adc6ff] font-black italic">AGENT_02</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#1d2027] p-8 space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">SOLVER_LOG_HEX</span>
                <span className="material-symbols-outlined text-[#8c909f] text-[20px]">terminal</span>
              </div>
              <div className="font-mono text-[11px] text-[#8c909f] font-black italic leading-relaxed h-40 overflow-hidden space-y-1 p-6 bg-[#05070a]/50 border-2 border-[#424754]/50 rounded-[30px] custom-scrollbar">
                <p><span className="text-[#adc6ff] opacity-40">[12:04:01]</span> INFO: Initializing RRT* tree...</p>
                <p><span className="text-[#ffb4ab] opacity-40">[12:04:01]</span> WARN: Self-collision detected at theta_4 = -2.1 rad.</p>
                <p><span className="text-[#adc6ff] opacity-40">[12:04:02]</span> INFO: Path re-routing optimized for energy minimization.</p>
                <p><span className="text-[#adc6ff] opacity-40">[12:04:02]</span> INFO: Solving Jacobian matrix for end-effector constraints...</p>
                <p><span className="text-[#10B981] opacity-60">[12:04:03]</span> SUCCESS: 42 viable trajectories computed in 0.0082s.</p>
                <p><span className="text-[#adc6ff] opacity-40">[12:04:03]</span> INFO: Streaming motion plan to hardware buffer 0xA2...</p>
              </div>
            </div>

            <div className="md:col-span-3 bg-[#1d2027] p-8 flex flex-col justify-center gap-8">
              {[
                { label: 'CURRENT_DRAW', value: '4.24 Amps', icon: 'Zap', color: 'text-[#4cd7f6]' },
                { label: 'CYCLE_TIME', value: '1.082 sec', icon: 'timer', color: 'text-[#adc6ff]' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 group/stat transition-all hover:scale-105">
                  <div className="w-14 h-14 bg-[#0b0e15] border-2 border-[#424754]/50 rounded-2xl flex items-center justify-center text-[#8c909f] group-hover/stat:border-[#4cd7f6]/50 transition-all shadow-xl">
                    <span className={`material-symbols-outlined text-[28px] ${item.color}`}>{item.icon}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[#8c909f] font-mono text-[9px] font-black uppercase tracking-[0.2em] italic opacity-50">{item.label}</div>
                    <div className="font-mono text-xl font-black text-[#e1e2ec] italic tracking-tighter">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Global Control Bar */}
      <footer className="h-20 bg-[#10131a] border-t border-[#424754]/50 flex justify-center items-center gap-16 px-12 z-[60] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)] fixed bottom-0 left-0 w-full">
        {[
          { icon: 'play_arrow', active: false },
          { icon: 'pause', active: false },
          { icon: 'stop', active: true },
          { icon: 'emergency_home', active: false },
        ].map((item, idx) => (
          <button key={idx} className={`material-symbols-outlined text-[32px] transition-all hover:scale-125 active:scale-90 ${item.active ? 'text-[#4cd7f6] drop-shadow-[0_0_15px_rgba(76,215,246,0.5)]' : 'text-[#8c909f] opacity-40 hover:opacity-100'}`}>
            {item.icon}
          </button>
        ))}
      </footer>

      {/* Polish: HUD Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[101] bg-[#4cd7f6]/5 mix-blend-overlay opacity-10"></div>
      <div className="fixed inset-0 pointer-events-none z-[102] opacity-[0.02]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>

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

export default MotionPlanningEngineeringOS_39f917;
