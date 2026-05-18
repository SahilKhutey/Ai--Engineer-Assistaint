'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const NotificationCenterEngineeringOS_7c6855 = () => {
  const { notifications: Bell, osStatus, pushEvent, clearNotifications } = useEngineeringStore();

  const handleClearAll = () => {
    clearNotifications?.();
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'CRITICAL': return 'AlertTriangle';
      case 'AlertTriangle': return 'HardDrive';
      case 'SUCCESS': return 'check_circle';
      case 'INFO': return 'info';
      default: return 'Sliders';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'CRITICAL': return 'text-[#ffb4ab] border-[#ffb4ab]/30 bg-[#ffb4ab]/5 glow-red';
      case 'AlertTriangle': return 'text-[#ffb786] border-[#ffb786]/30 bg-[#ffb786]/5 glow-amber';
      case 'SUCCESS': return 'text-[#10B981] border-[#10B981]/30 bg-[#10B981]/5 glow-green';
      default: return 'text-[#4cd7f6] border-[#4cd7f6]/30 bg-[#4cd7f6]/5 glow-blue';
    }
  };

  return (
    <div className="bg-[#0b0f15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#10131a] text-[#adc6ff] border-b border-[#424754]/50 flex items-center justify-between px-6 h-[48px] shrink-0">
        <div className="flex items-center gap-3 cursor-pointer group">
          <span className="material-symbols-outlined text-[#adc6ff] group-hover:scale-110 transition-transform">Sliders</span>
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#4cd7f6] uppercase">SIGNAL_COMMAND_v4.0</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 px-4 py-1 bg-[#1d2027] rounded border border-[#424754] group">
            <div className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_8px_rgba(76,215,246,0.6)] animate-pulse"></div>
            <span className="font-mono text-[10px] text-[#4cd7f6] font-bold tracking-widest uppercase">SYSTEM_LIVE</span>
          </div>
          <span className="material-symbols-outlined text-[#adc6ff] cursor-pointer hover:bg-[#32353c] transition-colors p-1.5 rounded">settings_input_component</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden pt-[48px]">
        {/* NavigationDrawer */}
        <aside className="w-24 bg-[#191b23] border-r border-[#424754]/50 flex flex-col py-8 shrink-0 z-40 hidden md:flex">
          <div className="px-4 mb-8 text-center">
            <span className="font-mono text-[9px] text-[#adc6ff] opacity-40 font-bold uppercase tracking-widest">DOMAINS</span>
          </div>
          <nav className="flex-1 flex flex-col gap-6">
            {[
              { label: 'PHYSICS', icon: 'blur_on' },
              { label: 'AI_CORE', icon: 'Brain' },
              { label: 'INFRA', icon: 'Share2' },
              { label: 'LOGS', icon: 'precision_manufacturing' },
            ].map((item) => (
              <div 
                key={item.label}
                className="flex flex-col items-center justify-center py-4 text-[#8c909f] hover:text-[#e1e2ec] hover:bg-[#272a31]/50 transition-all cursor-pointer group"
              >
                <span className="material-symbols-outlined mb-2 group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="font-mono text-[8px] font-bold tracking-widest uppercase">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden bg-[#0b0e15] relative">
          {/* Filter Bar */}
          <div className="bg-[#10131a]/80 backdrop-blur-md border-b border-[#424754]/30 px-6 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4">
              <button className="px-4 py-1.5 bg-[#03b5d3] text-[#001f26] font-mono text-[10px] font-black rounded flex items-center gap-2 uppercase tracking-widest hover:brightness-110 shadow-[0_0_15px_rgba(3,181,211,0.2)]">
                <span className="material-symbols-outlined text-[16px]">filter_alt</span> ALL_SIGNALS
              </button>
              <div className="h-4 w-px bg-[#424754]/50"></div>
              {['PHYSICS', 'AI_STREAM', 'INFRA_GRID', 'MFG_CELLS'].map(filter => (
                <button key={filter} className="px-3 py-1 hover:bg-[#272a31]/50 text-[#8c909f] hover:text-[#e1e2ec] font-mono text-[10px] font-bold transition-all uppercase tracking-widest">
                  {filter}
                </button>
              ))}
            </div>
            <button 
              onClick={handleClearAll}
              className="font-mono text-[10px] font-black text-[#ffb4ab] px-4 py-1.5 border border-[#ffb4ab]/30 hover:bg-[#ffb4ab]/10 transition-all flex items-center gap-2 uppercase tracking-widest rounded"
            >
              <span className="material-symbols-outlined text-[16px]">terminal</span> sudo clear -all
            </button>
          </div>

          {/* Notification Grid/Feed */}
          <div className="flex-1 overflow-y-auto p-6 space-y-12 custom-scrollbar relative">
            {/* Section: CRITICAL_ALERTS */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 border-b border-[#ffb4ab]/20 pb-2 mb-6">
                <span className="w-1 h-4 bg-[#ffb4ab] shadow-[0_0_8px_#ffb4ab]"></span>
                <h2 className="font-mono text-[11px] font-black text-[#ffb4ab] uppercase tracking-[0.3em]">CRITICAL_ALERTS [SEC_OVR]</h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {((Bell?.filter(n => n.type === 'CRITICAL') || []) as any[]).concat([
                  { id: 'CRIT_091_FAIL', timestamp: '14:22:01.004', title: 'THERMAL_RUNAWAY_DETECTED', message: 'Heat signature exceeded 120°C in Sector 7B. Predicted cascade failure of neighboring logic gates within 180s. Emergency coolant bypass recommended.', type: 'CRITICAL', domain: 'SECURITY' },
                  { id: 'SYNC_ERR_90', timestamp: '14:19:44.291', title: 'COLLISION_MESH_VOID', message: 'Particle simulation decoupled from infrastructure clock. Null pointer detected in spatial grid. System attempting to re-anchor reality buffer.', type: 'CRITICAL', domain: 'MOTION' }
                ]).map((alert: any, i) => (
                  <div key={alert.id || i} className="bg-[#191b23]/80 backdrop-blur-sm border border-[#ffb4ab]/30 p-6 rounded-lg flex flex-col md:flex-row gap-6 hover:bg-[#1d2027] transition-all group shadow-2xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-[#ffb4ab]/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="flex flex-col min-w-[160px] md:border-r border-[#424754]/50 md:pr-6 shrink-0">
                      <span className="font-mono text-[#ffb4ab] font-black text-[12px] mb-1">{alert.id || 'CRIT_AUTO_SYS'}</span>
                      <span className="font-mono text-[10px] text-[#8c909f] font-bold">{alert.timestamp}</span>
                      <span className="font-mono text-[9px] text-[#e1e2ec]/40 mt-3 font-black uppercase tracking-widest">ID: {alert.domain || 'UNKNOWN'}_NODE</span>
                    </div>
                    <div className="flex-1 relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="material-symbols-outlined text-[#ffb4ab] text-[20px] animate-pulse">AlertTriangle</span>
                        <h3 className="font-bold text-[#e1e2ec] text-[16px] tracking-tight uppercase">{alert.title}</h3>
                      </div>
                      <p className="font-mono text-[12px] text-[#8c909f] leading-relaxed">
                        <span className="text-[#ffb4ab] font-black uppercase tracking-tighter opacity-80 mr-2">AI_REASONING:</span>
                        {alert.message}
                      </p>
                    </div>
                    <div className="flex items-start shrink-0">
                      <span className="material-symbols-outlined text-[#8c909f] cursor-pointer hover:text-[#4cd7f6] transition-all hover:scale-110">open_in_full</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: SYSTEM_WARNINGS */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 border-b border-[#ffb786]/20 pb-2 mb-6">
                <span className="w-1 h-4 bg-[#ffb786] shadow-[0_0_8px_#ffb786]"></span>
                <h2 className="font-mono text-[11px] font-black text-[#ffb786] uppercase tracking-[0.3em]">SYSTEM_WARNINGS [THR_HIGH]</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#191b23]/80 backdrop-blur-sm border border-[#424754]/50 p-6 rounded-lg flex flex-col md:flex-row gap-6 hover:bg-[#1d2027] transition-all group shadow-xl">
                  <div className="flex flex-col min-w-[160px] md:border-r border-[#424754]/50 md:pr-6 shrink-0">
                    <span className="font-mono text-[#ffb786] font-black text-[12px] mb-1">WARN_402_MEM</span>
                    <span className="font-mono text-[10px] text-[#8c909f] font-bold">14:15:30.122</span>
                    <span className="font-mono text-[9px] text-[#e1e2ec]/40 mt-3 font-black uppercase tracking-widest">ID: AI_CORE_A</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-[#ffb786] text-[20px]">HardDrive</span>
                      <h3 className="font-bold text-[#e1e2ec] text-[16px] tracking-tight uppercase">VRAM_THROTTLING_ACTIVE</h3>
                    </div>
                    <p className="font-mono text-[12px] text-[#8c909f] leading-relaxed">
                      <span className="text-[#ffb786] font-black uppercase tracking-tighter opacity-80 mr-2">AI_REASONING:</span>
                      Large language model context window nearing hardware limit. Garbage collection scheduled for T-minus 12s. Minor latency spike expected.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Cognition & Load */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Cognition Logs */}
              <div className="lg:col-span-2 space-y-4">
                 <div className="flex items-center gap-3 border-b border-[#adc6ff]/20 pb-2 mb-6">
                  <span className="w-1 h-4 bg-[#adc6ff] shadow-[0_0_8px_#adc6ff]"></span>
                  <h2 className="font-mono text-[11px] font-black text-[#adc6ff] uppercase tracking-[0.3em]">COGNITION_LOGS [INF_NEURAL]</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { time: '14:08:12', type: 'COG_UP', tag: 'PATTERN_MATCH_FOUND', msg: 'Anomaly in MFG_LINE_4 resolved via heuristic re-ordering. 3.2% efficiency gain projected.' },
                    { time: '14:02:55', type: 'COG_LRN', tag: 'WEIGHT_OPTIMIZATION', msg: 'Re-calibrating sensory feedback from orbital array. Zero-point energy fluctuations normalized.' },
                  ].map((log, i) => (
                    <div key={i} className="bg-[#191b23]/60 border border-[#424754]/30 p-4 rounded-lg flex gap-4 hover:border-[#adc6ff]/30 transition-all group">
                      <div className="flex flex-col border-r border-[#424754]/30 pr-4 shrink-0">
                        <span className="font-mono text-[10px] text-[#8c909f] font-bold">{log.time}</span>
                        <span className="font-mono text-[#adc6ff] font-black text-[10px] mt-1">{log.type}</span>
                      </div>
                      <div className="flex-1">
                        <span className="font-mono text-[9px] text-[#e1e2ec] font-black uppercase tracking-widest block mb-1 opacity-60">{log.tag}</span>
                        <p className="font-mono text-[11px] text-[#8c909f] leading-snug italic group-hover:text-[#e1e2ec] transition-colors">"{log.msg}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Board Card */}
              <div className="bg-[#1d2027]/80 backdrop-blur-xl border border-[#424754]/50 rounded-xl p-6 flex flex-col shadow-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none duration-1000">
                  <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBe8Lz3wZqx_a_xmLRiYNE6-CZjtUAO4HboXqpEnA43uvugf2BSLAZ443S5MBMSIAyc2WFE8s3K58NZ_PTzExfj3CyFlgFzh1mzRiK-hsEoyGDSFI17iB9o0TqdpmBbwFGgwFN3j4Pj1f2NDMly1lN6SOIAI27D5ed_zjs-cS2y7Q8_YYiCnVMroMMFVXBb5hFwhaUJgKSL4kgCWAdfakmV5dSsoniYbdT5rVCbzl-cbnt3G12NHOPszUfow7jKXq-FCQ0M-HkL53QO" alt="Background" />
                </div>
                <div className="relative z-10 space-y-6">
                  <h3 className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.3em]">ACTIVE_MODULES</h3>
                  <ul className="space-y-3">
                    {[
                      { label: 'GRAVITY_WELL', stat: 'ONLINE', color: 'text-[#4cd7f6]' },
                      { label: 'NEURAL_MESH', stat: 'ONLINE', color: 'text-[#4cd7f6]' },
                      { label: 'QUANTUM_BUS', stat: 'ERR_404', color: 'text-[#ffb4ab] underline decoration-dotted font-black' },
                      { label: 'HVAC_CORE', stat: 'WARN', color: 'text-[#ffb786] font-bold' },
                    ].map((mod) => (
                      <li key={mod.label} className="flex items-center justify-between border-b border-[#424754]/20 pb-2 group-hover:border-[#424754]/50 transition-all">
                        <span className="font-mono text-[11px] text-[#8c909f] font-bold">{mod.label}</span>
                        <span className={`font-mono text-[11px] ${mod.color} uppercase tracking-tighter`}>{mod.stat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <h4 className="font-mono text-[9px] text-[#8c909f] uppercase tracking-widest font-black mb-3">SYSTEM_LOAD_MAP</h4>
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 65, 55, 95, 70, 45, 50, 80, 30, 90].map((h, i) => (
                        <div 
                          key={i} 
                          className={`flex-1 rounded-t-sm transition-all duration-1000 ${h > 80 ? 'bg-[#ffb4ab] shadow-[0_0_8px_rgba(255,180,171,0.4)]' : 'bg-[#4cd7f6]/30 group-hover:bg-[#4cd7f6]/50'}`} 
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
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
            <span className="font-mono text-[9px] text-[#8c909f] uppercase tracking-widest font-bold">SIGNAL_LATENCY: 12ms</span>
          </div>
          <div className="flex items-center gap-2">
             <span className="material-symbols-outlined text-[#8c909f] text-[14px]">Globe</span>
            <span className="font-mono text-[9px] text-[#8c909f] uppercase tracking-widest font-bold opacity-40">REGION: US-EAST-CORE</span>
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
        .glow-red { box-shadow: 0 0 15px rgba(255, 180, 171, 0.05); }
        .glow-amber { box-shadow: 0 0 15px rgba(255, 183, 134, 0.05); }
      `}</style>
    </div>
  );
};

export default NotificationCenterEngineeringOS_7c6855;
