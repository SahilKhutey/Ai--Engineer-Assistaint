import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const SearchAnalyticsEngineeringOS_8b2df6 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const domains = [
    { name: 'Quantum Grav', act: '88%', color: 'bg-[#4cd7f6]/40' },
    { name: 'Thermal Dyn', act: '45%', color: 'bg-[#4cd7f6]/80' },
    { name: 'Cryogenic_V2', act: '92%', color: 'bg-[#4cd7f6]/90' },
    { name: 'Optic_Relay', act: '70%', color: 'bg-[#4cd7f6]/70' },
    { name: 'Lidar_Array', act: '95%', color: 'bg-[#4cd7f6]/90' },
  ];

  const queries = [
    { time: '14:02:11', id: 'get.qubit_fidelity.9', node: 'LAB_01', type: 'READ' },
    { time: '14:01:55', id: 'fetch.thermal_leak.iso', node: 'REMOTE_A', type: 'READ' },
    { time: '14:00:22', id: 'run.simulation_alpha_v2', node: 'HPC_NODE', type: 'WRITE' },
    { time: '13:58:45', id: 'search.vacuum_seal_failure', node: 'LAB_04', type: 'READ' },
    { time: '13:55:12', id: 'list.power_states.all', node: 'CORE_01', type: 'READ' },
  ];

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-[48px] bg-[#10131a]/90 backdrop-blur-md border-b border-[#424754]/30 shrink-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#adc6ff]">terminal</span>
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#adc6ff] uppercase">QUANTUM_COMMAND_OS_v2.0.4</span>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-6 font-mono text-[10px] tracking-widest font-bold">
            <span className="text-[#adc6ff] border-b-2 border-[#adc6ff] pb-1 cursor-pointer">BarChart3</span>
            <span className="text-[#8c909f] hover:text-[#e1e2ec] cursor-pointer transition-colors pb-1">ARCHIVE</span>
            <span className="text-[#8c909f] hover:text-[#e1e2ec] cursor-pointer transition-colors pb-1">NODES</span>
          </nav>
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
              { label: 'Telemetry', icon: 'BarChart3', active: false },
              { label: 'Qubit_Map', icon: 'Share2', active: true },
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
        </aside>

        {/* Main Dashboard Canvas */}
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-[#0b0e15] p-6 space-y-6">
          <div className="max-w-[1600px] mx-auto space-y-6">
            
            {/* Global Pulse Header */}
            <section className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-lg flex items-center justify-between shadow-2xl">
              <div className="flex items-center gap-12">
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-[#8c909f] uppercase tracking-widest font-bold mb-1">Core Search Latency</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[#4cd7f6] text-2xl font-bold">14.2ms</span>
                    <span className="font-mono text-[10px] text-[#10B981] font-black uppercase">NOMINAL</span>
                  </div>
                </div>
                <div className="w-px h-10 bg-[#424754]/30"></div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-[#8c909f] uppercase tracking-widest font-bold mb-1">Index Coverage</span>
                  <span className="font-mono text-[#adc6ff] text-2xl font-bold">99.98%</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#10131a]/50 px-4 py-2 rounded-full border border-[#424754]/30">
                <div className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse"></div>
                <span className="font-mono text-[10px] text-[#e1e2ec] font-bold tracking-widest uppercase">CO-PILOT AI: SYNCED</span>
              </div>
            </section>

            <div className="grid grid-cols-12 gap-6">
              {/* Active Research Domains Heatmap */}
              <div className="col-span-12 lg:col-span-8 bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded-lg flex flex-col shadow-2xl overflow-hidden min-h-[400px]">
                <header className="h-10 bg-[#272a31]/50 border-b border-[#424754]/30 flex items-center justify-between px-6">
                  <span className="font-mono text-[10px] text-[#e1e2ec] tracking-widest font-bold uppercase">ACTIVE RESEARCH DOMAINS [HEATMAP]</span>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-[18px] text-[#8c909f] cursor-pointer hover:text-white transition-colors">Maximize2</span>
                    <span className="material-symbols-outlined text-[18px] text-[#8c909f] cursor-pointer hover:text-white transition-colors">settings</span>
                  </div>
                </header>
                <div className="flex-1 p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {/* Heatmap Grid */}
                  {Array.from({ length: 24 }).map((_, i) => {
                    const Globe = domains[i % domains.length];
                    const isVisible = i % 3 === 0;
                    return (
                      <div 
                        key={i} 
                        className={`p-3 border rounded transition-all duration-500 cursor-help flex flex-col justify-end ${
                          isVisible ? `${Globe.color} border-[#4cd7f6]/30 shadow-inner scale-[0.98] hover:scale-100` : 'bg-[#10131a]/50 border-[#424754]/20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100'
                        }`}
                      >
                        {isVisible && (
                          <>
                            <span className="font-mono text-[10px] text-white font-bold truncate uppercase">{Globe.name}</span>
                            <span className="font-mono text-[8px] text-white/60 font-black mt-1">{Globe.act} ACT</span>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* AI Co-Pilot: Knowledge Gaps */}
              <div className="col-span-12 lg:col-span-4 bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded-lg flex flex-col shadow-2xl overflow-hidden">
                <header className="h-10 bg-[#272a31]/50 border-b border-[#424754]/30 flex items-center px-6">
                  <span className="font-mono text-[10px] text-[#ffb786] tracking-widest font-bold uppercase">AI CO-PILOT: KNOWLEDGE GAPS</span>
                </header>
                <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
                  {[
                    { label: 'Ion Trapping Latency', status: 'CRITICAL', color: 'text-[#ffb4ab]', border: 'border-l-[#ffb4ab]', desc: "System identifies 42% search failure rate on queries relating to 'Vacuum Pressure' vs 'Gate Fidelity'. No indexed data found post-v1.8.4." },
                    { label: 'Sub-Zero Core Alignment', status: 'MODERATE', color: 'text-[#8c909f]', border: 'border-l-[#8c909f]', desc: "Sparse telemetry data for operational states below 0.002 Kelvin. Engineering docs missing calibration steps." },
                  ].map((gap) => (
                    <div key={gap.label} className={`p-4 bg-[#10131a]/50 border-l-2 ${gap.border} rounded-r shadow-lg group hover:bg-[#10131a] transition-all`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-xs text-[#e1e2ec] font-bold">{gap.label}</span>
                        <span className={`${gap.color} text-[9px] font-black tracking-widest uppercase`}>{gap.status}</span>
                      </div>
                      <p className="font-['Inter'] text-[12px] text-[#8c909f] leading-relaxed italic">{gap.desc}</p>
                      {gap.status === 'CRITICAL' && (
                        <button className="mt-3 font-mono text-[9px] text-[#ffb4ab] uppercase tracking-widest font-bold hover:underline">INITIATE RE-INDEXING</button>
                      )}
                    </div>
                  ))}
                  
                  <div className="mt-auto border border-[#4cd7f6]/20 p-4 rounded bg-[#03b5d3]/5 backdrop-blur-sm group hover:border-[#4cd7f6]/50 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-[#4cd7f6] text-[16px] animate-pulse">auto_awesome</span>
                      <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest">SUGGESTED ACTION</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#adc6ff] leading-relaxed">Merge 'Thermal_A' and 'Cryo_B' datasets to resolve structural ambiguity.</span>
                  </div>
                </div>
              </div>

              {/* Engineering Database Accessibility */}
              <div className="col-span-12 lg:col-span-4 bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded-lg flex flex-col shadow-2xl overflow-hidden h-[340px]">
                <header className="h-10 bg-[#272a31]/50 border-b border-[#424754]/30 flex items-center px-6">
                  <span className="font-mono text-[10px] text-[#e1e2ec] tracking-widest font-bold uppercase">Database ACCESSIBILITY</span>
                </header>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    {[
                      { label: 'SYSTEM_KERN', val: 85, color: 'bg-[#4cd7f6]' },
                      { label: 'ENV_TELEMETRY', val: 62, color: 'bg-[#4cd7f6]' },
                      { label: 'QUANT_SIM_X', val: 94, color: 'bg-[#4cd7f6]' },
                      { label: 'BIO_FEEDBACK', val: 31, color: 'bg-[#ffb4ab]' },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center gap-4 group">
                        <span className="font-mono text-[9px] text-[#8c909f] w-24 text-right font-bold tracking-tighter uppercase group-hover:text-white transition-colors">{stat.label}</span>
                        <div className="flex-1 h-2 bg-[#10131a] rounded-full overflow-hidden border border-[#424754]/30 relative">
                          <div 
                            className={`h-full ${stat.color} transition-all duration-[2s] ease-out rounded-full shadow-[0_0_8px_currentColor] opacity-80`} 
                            style={{ width: `${stat.val}%`, color: stat.color.includes('4cd7f6') ? '#4cd7f6' : '#ffb4ab' }}
                          ></div>
                        </div>
                        <span className="font-mono text-[10px] w-8 text-[#adc6ff] font-bold">{stat.val}%</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[#424754]/30 pt-4 flex justify-around">
                    <div className="text-center">
                      <div className="font-mono text-[#4cd7f6] text-xl font-bold italic tracking-tighter">4.8PB</div>
                      <div className="font-mono text-[8px] text-[#8c909f] font-black uppercase tracking-widest">TOTAL INDEXED</div>
                    </div>
                    <div className="text-center">
                      <div className="font-mono text-[#adc6ff] text-xl font-bold italic tracking-tighter">21.4k</div>
                      <div className="font-mono text-[8px] text-[#8c909f] font-black uppercase tracking-widest">DAILY QUERIES</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Activity: Priority Queries */}
              <div className="col-span-12 lg:col-span-8 bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded-lg flex flex-col shadow-2xl overflow-hidden h-[340px]">
                <header className="h-10 bg-[#272a31]/50 border-b border-[#424754]/30 flex items-center px-6">
                  <span className="font-mono text-[10px] text-[#e1e2ec] tracking-widest font-bold uppercase">TEAM ACTIVITY: PRIORITY QUERIES</span>
                </header>
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                  <table className="w-full text-left border-collapse font-mono text-[11px]">
                    <thead className="sticky top-0 bg-[#10131a] z-10">
                      <tr className="border-b border-[#424754]/50">
                        <th className="p-4 px-6 text-[#8c909f] font-black uppercase tracking-widest text-[9px]">TIMESTAMP</th>
                        <th className="p-4 px-6 text-[#8c909f] font-black uppercase tracking-widest text-[9px]">QUERY_ID</th>
                        <th className="p-4 px-6 text-[#8c909f] font-black uppercase tracking-widest text-[9px]">NODE_ORIGIN</th>
                        <th className="p-4 px-6 text-[#8c909f] font-black uppercase tracking-widest text-[9px]">STAT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {queries.map((q, i) => (
                        <tr key={i} className="border-b border-[#424754]/10 hover:bg-[#32353c]/50 transition-all group cursor-pointer">
                          <td className="p-4 px-6 text-[#8c909f] opacity-60">[{q.time}]</td>
                          <td className="p-4 px-6 text-[#4cd7f6] font-bold">{q.id}</td>
                          <td className="p-4 px-6 text-[#adc6ff] font-bold uppercase tracking-tighter">{q.node}</td>
                          <td className="p-4 px-6">
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded ${q.type === 'WRITE' ? 'bg-[#ffb4ab]/10 text-[#ffb4ab] border border-[#ffb4ab]/30' : 'bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/30'}`}>
                              {q.type}
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

      {/* Floating Terminal Trigger */}
      <button className="fixed bottom-6 right-6 h-12 px-6 bg-[#1d2027]/80 backdrop-blur-xl border border-[#4cd7f6]/30 rounded-lg flex items-center gap-4 shadow-[0_0_30px_rgba(76,215,246,0.15)] hover:bg-[#32353c] transition-all z-[60] group hidden md:flex">
        <span className="material-symbols-outlined text-[#4cd7f6] group-hover:scale-110 transition-transform">search</span>
        <span className="font-mono text-[11px] text-[#e1e2ec] font-bold uppercase tracking-widest">OPEN COMMAND_INTERFACE</span>
        <div className="flex items-center gap-1 ml-2">
          <span className="font-mono text-[9px] bg-[#424754]/50 text-[#8c909f] px-1.5 py-0.5 rounded font-bold">CTRL</span>
          <span className="font-mono text-[9px] bg-[#424754]/50 text-[#8c909f] px-1.5 py-0.5 rounded font-bold">K</span>
        </div>
      </button>

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

export default SearchAnalyticsEngineeringOS_8b2df6;
