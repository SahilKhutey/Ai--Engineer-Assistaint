'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const CollaborationSettingsEngineeringOS_4debcf = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* Sidebar Navigation Drawer */}
      <aside className="w-64 bg-[#10131a] border-r border-[#424754]/50 flex flex-col shrink-0 z-50 shadow-2xl">
        <div className="p-8">
          <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.3em] italic">SYSTEM_INDEX</span>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {[
            { label: 'Telemetry', icon: 'Activity', active: false },
            { label: 'Kinematics', icon: 'Share2', active: false },
            { label: 'AI_Stability', icon: 'Brain', active: true },
            { label: 'Command_Log', icon: 'terminal', active: false },
            { label: 'System_Sync', icon: 'sync_alt', active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest italic transition-all group ${
                item.active 
                  ? 'bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/30' 
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

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0b0e15] relative">
        {/* Top App Bar */}
        <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-8 shrink-0 z-50 shadow-2xl relative">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">precision_manufacturing</span>
            <h1 className="font-mono text-[12px] font-black text-[#adc6ff] uppercase tracking-[0.2em] italic">KINETIC_OS // DYNAMICS_LAYER</h1>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3 text-[#4cd7f6] animate-pulse">
              <div className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]"></div>
              <span className="font-mono text-[10px] font-black uppercase tracking-widest italic">Uplink Active</span>
            </div>
            <button className="material-symbols-outlined text-[#8c909f] hover:text-[#e1e2ec] transition-colors p-2 rounded-xl">settings_input_component</button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar relative z-10 animate-in fade-in duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Controls Panel */}
            <section className="col-span-12 lg:col-span-7 space-y-8">
              <div className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 p-8 rounded-[32px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#adc6ff]"></div>
                <header className="flex justify-between items-center mb-10">
                  <h2 className="font-mono text-[11px] text-[#adc6ff] font-black uppercase tracking-[0.3em] italic flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px]">security</span> COLLABORATION_PROTOCOL
                  </h2>
                  <span className="font-mono text-[10px] text-[#8c909f] font-black italic opacity-40">SECURE_CHANNEL: 0x44F2</span>
                </header>
                <div className="space-y-4">
                  {[
                    { label: 'Globe Reasoning', desc: 'Expose logic chains to external observers', active: true },
                    { label: 'Shared Viewport Control', desc: 'Multi-user synchronization of observation vector', active: false },
                    { label: 'AI-Mediated Conflict Resolution', desc: 'Neural arbitration for concurrent state changes', active: true },
                  ].map((toggle) => (
                    <div key={toggle.label} className="flex items-center justify-between p-6 bg-[#0b0e15] border border-[#424754]/30 rounded-2xl hover:border-[#adc6ff]/30 transition-all group/item">
                      <div className="space-y-1">
                        <p className="font-mono text-[13px] text-[#e1e2ec] font-black italic group-hover/item:text-[#adc6ff] transition-colors">{toggle.label}</p>
                        <p className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">{toggle.desc}</p>
                      </div>
                      <button className={`relative inline-flex h-6 w-12 items-center rounded-full transition-all border-2 ${toggle.active ? 'bg-[#adc6ff]/20 border-[#adc6ff]/50' : 'bg-[#1d2027] border-[#424754]'}`}>
                        <span className={`inline-block h-4 w-4 rounded-full transition-all ${toggle.active ? 'translate-x-6 bg-[#adc6ff] shadow-[0_0_12px_#adc6ff]' : 'translate-x-1 bg-[#424754]'}`}></span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secure Handover Section */}
              <div className="bg-gradient-to-br from-[#adc6ff]/10 to-transparent border-2 border-[#adc6ff]/30 p-12 rounded-[40px] shadow-2xl flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden group/handover">
                <div className="absolute inset-0 bg-[#adc6ff]/5 blur-[100px] opacity-0 group-hover/handover:opacity-100 transition-opacity pointer-events-none"></div>
                <span className="material-symbols-outlined text-[#adc6ff] text-[64px] animate-pulse drop-shadow-[0_0_20px_rgba(173,198,255,0.4)]" style={{ fontVariationSettings: "'FILL' 1" }}>vibration</span>
                <div className="space-y-4 relative z-10">
                  <h3 className="font-mono text-2xl font-black text-[#adc6ff] uppercase tracking-tighter italic">System Handover Pending</h3>
                  <p className="font-mono text-[13px] text-[#8c909f] font-black italic max-w-lg mx-auto opacity-80 uppercase leading-relaxed tracking-tight">Relinquish master simulation authority to designated high-clearance personnel. This action is irreversible for the current cycle.</p>
                </div>
                <button className="bg-[#adc6ff] text-[#00285d] font-mono text-[12px] font-black px-12 py-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(173,198,255,0.4)] hover:scale-[1.05] active:scale-[0.95] transition-all flex items-center gap-4 italic tracking-[0.2em] relative z-10">
                  <span className="material-symbols-outlined">key_visualizer</span>
                  SECURE HANDOVER
                </button>
              </div>
            </section>

            {/* Personnel List Panel */}
            <section className="col-span-12 lg:col-span-5 space-y-8">
              <div className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[32px] flex flex-col h-full shadow-2xl overflow-hidden group/personnel">
                <header className="p-6 border-b border-[#424754]/30 flex justify-between items-center bg-[#10131a]/50">
                  <h2 className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic flex items-center gap-3">
                    <span className="material-symbols-outlined text-[18px]">group</span> ACTIVE MISSION PERSONNEL
                  </h2>
                  <span className="bg-[#03b5d3]/20 text-[#4cd7f6] px-3 py-1 rounded-full text-[9px] font-black italic uppercase border border-[#4cd7f6]/30">LIVE: 04</span>
                </header>
                <div className="flex-1 divide-y divide-[#424754]/30 overflow-y-auto custom-scrollbar">
                  {[
                    { name: 'Dr. Elias Vance', role: 'Structural', RefreshCw: '12ms', status: 'Online', color: 'text-[#4cd7f6]', borderColor: 'border-[#4cd7f6]/30', img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuDj6bj20s-SMzerKRY-IpaMJPR4OUmEuKqow-2OAY8McO5uGrTj6x7cdUw6PeEM8qyjw1eXiw7JZYf040sfyb_Fuwid6KqIoptnTSAZ07CVguAI6RxDPET7CA2WEDdsbwU4cf_6Xt82rjHCMcE4Fdy1cRMUykxH97MZSSd9SE4TCp7MFY29IEDJM_kpRM6KxBn59gxWSuAr51occY5rprlu5PgcbdEZn8FJEGvrIVqxRhEkQmDGbYKtau2fa4AiXnQwwxuUsek4_bHg' },
                    { name: 'Sarah Chen', role: 'Thermal', RefreshCw: 'Active', status: 'Online', color: 'text-[#ffb786]', borderColor: 'border-[#ffb786]/30', img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuBOkvcYdQ_jivJlY0tkIvg_wmLGrKiDDyv9lEQ0viM9X55MOPSq3XhPZ0AMr0N1y4qx1WPYA9ngY9ANp9CWYS9vOCjDxs_ZHGHhnlKvyrOvp0Ez8VRYn3uXQ6ZD5GaUZO5CwaiJbhovE2wamqxpLTApioetRegmkuasXZ0vswpiFWaDl6ft_tYVezqhPrNJTmMd1TTnjjGL8lenfTcW2z-YEENv1HLo7TG93ndsQ-o6kg78n64GmJfXzzt9LwI78QT37prPGStVr7NN' },
                    { name: 'CORE_AI_NODE_7', role: 'AI Architect', RefreshCw: 'Processing', status: 'AI_LINK', color: 'text-[#adc6ff]', borderColor: 'border-[#adc6ff]/30', ai: true },
                    { name: 'Marcus Thorne', role: 'External', RefreshCw: 'Standby', status: 'Inactive', color: 'text-[#8c909f]', borderColor: 'border-[#424754]', opacity: 'opacity-50', img: 'https://lh3.googleusercontent.com/aida-Globe/AB6AXuBY3jUKz1LIZvHvPnFS2uE47akXKBTD3NYQANo5TTJz8lN-cSQaE-GeyexyOhbA7xUwd2BwU9zE6Uj7wfv-eJVWo0NuBZRHbhmSFaaD8cZ2vO7lfBCGSNAzSXrV2OcGeMMiQ3lp25p1-Y7YBzOMtXtC3bMpjRhJbS9uMdBU9T-OCAZ0meMuq3yaZtG0o-P_XStczL3WSjcMMjK94pMVXsfepP4p8f5FmthBPSb4bOPp4QkY75k0DYrJqWWFGv3O82UXQmY3_bxM-asY' },
                  ].map((person) => (
                    <div key={person.name} className={`p-6 flex items-center gap-6 hover:bg-[#1d2027] transition-all group/item ${person.opacity || ''}`}>
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#424754] group-hover/item:border-[#4cd7f6]/50 transition-all shrink-0 bg-[#0b0e15] flex items-center justify-center">
                        {person.ai ? (
                          <span className="material-symbols-outlined text-[#adc6ff] text-3xl animate-pulse">smart_toy</span>
                        ) : (
                          <img className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all" src={person.img} alt={person.name} />
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-center">
                          <p className="font-mono text-[14px] text-[#e1e2ec] font-black italic">{person.name}</p>
                          <span className={`font-mono text-[9px] ${person.color} border ${person.borderColor} px-2 py-0.5 rounded-full uppercase italic font-black`}>{person.role}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${person.status === 'Inactive' ? 'bg-[#424754]' : 'bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]'}`}></div>
                          <p className="font-mono text-[10px] text-[#8c909f] font-black italic uppercase tracking-tighter">{person.RefreshCw}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-8 bg-[#10131a]/50 shrink-0">
                  <button className="w-full border-2 border-dashed border-[#424754] hover:border-[#4cd7f6]/50 hover:bg-[#4cd7f6]/5 transition-all py-4 rounded-2xl flex items-center justify-center gap-3 text-[#8c909f] hover:text-[#4cd7f6] group/Plus">
                    <span className="material-symbols-outlined text-[20px] group-hover/Plus:rotate-90 transition-transform">person_add</span>
                    <span className="font-mono text-[11px] font-black uppercase tracking-[0.2em] italic">Invite Authorized Personnel</span>
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Sessions', value: '12', color: 'text-[#e1e2ec]' },
              { label: 'RefreshCw Stability', value: '99.9%', color: 'text-[#4cd7f6]' },
              { label: 'Network Jitter', value: '2.4ms', color: 'text-[#e1e2ec]' },
              { label: 'System Load', value: '44%', color: 'text-[#ffb786]' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#1d2027]/50 backdrop-blur-xl p-6 rounded-3xl border-2 border-[#424754]/50 shadow-2xl flex flex-col gap-2 hover:border-[#4cd7f6]/30 transition-all group">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic opacity-50 group-hover:opacity-80 transition-opacity">{stat.label}</span>
                <span className={`font-mono text-2xl font-black italic tracking-tighter ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Global Control Bar */}
        <nav className="h-20 bg-[#1d2027]/90 backdrop-blur-xl border-t border-[#424754]/50 flex justify-center items-center gap-16 px-12 z-50 shrink-0 rounded-t-[40px] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)]">
          <button className="text-[#8c909f] hover:text-[#4cd7f6] hover:scale-125 active:scale-95 transition-all p-3 rounded-2xl group">
            <span className="material-symbols-outlined text-[28px]">play_arrow</span>
          </button>
          <button className="text-[#4cd7f6] scale-125 hover:scale-150 active:scale-95 transition-all p-4 rounded-3xl bg-[#4cd7f6]/10 border border-[#4cd7f6]/30 shadow-[0_0_30px_#4cd7f6/20]">
            <span className="material-symbols-outlined text-[32px]">pause</span>
          </button>
          <button className="text-[#8c909f] hover:text-[#ffb4ab] hover:scale-125 active:scale-95 transition-all p-3 rounded-2xl">
            <span className="material-symbols-outlined text-[28px]">stop</span>
          </button>
          <button className="text-[#8c909f] hover:text-[#adc6ff] hover:scale-125 active:scale-95 transition-all p-3 rounded-2xl">
            <span className="material-symbols-outlined text-[28px]">emergency_home</span>
          </button>
        </nav>
      </div>

      {/* Right Side Telemetry Drawer */}
      <aside className="w-80 bg-[#10131a] border-l border-[#424754]/50 flex flex-col hidden xl:flex shrink-0 z-50 shadow-2xl">
        <header className="p-8 border-b border-[#424754]/30 shrink-0">
          <h2 className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">Conflict_Log</h2>
        </header>
        <div className="flex-1 p-8 space-y-8 overflow-y-auto custom-scrollbar font-mono text-[11px] font-black italic">
          {[
            { time: '14:22:01', msg: 'Escalation requested by node_7', sub: 'Status: APPROVED', color: 'text-[#adc6ff]', border: 'border-[#adc6ff]/30' },
            { time: '14:18:44', msg: 'Viewport RefreshCw established: s_chen', sub: 'Latency: 0.04ms', color: 'text-[#e1e2ec]', border: 'border-[#424754]' },
            { time: '14:15:30', msg: 'Collision in kinetic_matrix_A', sub: 'AI arbitration required', color: 'text-[#ffb786]', border: 'border-[#ffb786]/30' },
            { time: '14:10:12', msg: 'Mission personnel joined: Vance', sub: 'Key: PUB_5548_99', color: 'text-[#4cd7f6]', border: 'border-[#4cd7f6]/30' },
          ].map((log, idx) => (
            <div key={idx} className={`border-l-4 ${log.border} pl-6 py-2 space-y-1 group hover:border-l-8 transition-all`}>
              <p className={log.color}>[{log.time}] {log.msg}</p>
              <p className="text-[#8c909f] opacity-50 uppercase tracking-tight text-[9px]">{log.sub}</p>
            </div>
          ))}
        </div>
        <footer className="p-8 bg-[#0b0e15] border-t border-[#424754]/30 shrink-0 space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">Matrix_Stability</span>
            <span className="font-mono text-[10px] text-[#4cd7f6] font-black italic">ACTIVE</span>
          </div>
          <div className="h-1.5 w-full bg-[#1d2027] rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-[#4cd7f6] shadow-[0_0_12px_#4cd7f6] rounded-full" style={{ width: '80%' }}></div>
          </div>
        </footer>
      </aside>

      {/* Polish: HUD Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>

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

export default CollaborationSettingsEngineeringOS_4debcf;
