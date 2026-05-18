'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const ClusterOrchestratorEngineeringOS_300186 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const nodes = Array.from({ length: 64 }, (_, i) => ({
    id: i + 1,
    status: i === 14 ? 'error' : [2, 6, 11].includes(i) ? 'peak' : 'idle',
  }));

  const logs = [
    { time: '14:22:01.04', id: 'ERR_NODE_15', event: 'HARDWARE_FAILURE: Cooling system offline at sector 4.', status: 'CRITICAL', color: 'text-[#ffb4ab]' },
    { time: '14:20:55.12', id: 'NET_DROP_09', event: 'Inbound fabric latency spike > 120ms detected.', status: 'AlertTriangle', color: 'text-[#ffb786]' },
    { time: '14:18:22.45', id: 'SEC_AUDIT', event: "User 'ADMIN_01' initiated deployment 'SIM_ALPHA'.", status: 'INFO', color: 'text-[#8c909f]' },
  ];

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-[48px] bg-[#10131a]/90 backdrop-blur-md border-b border-[#424754]/50 shrink-0">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff]">terminal</span>
          <span className="font-mono text-[11px] font-black tracking-widest text-[#adc6ff] uppercase">QUANTUM_COMMAND_OS_v2.0.4</span>
        </div>
        <div className="hidden md:flex gap-10 h-full items-center">
          <nav className="flex h-full items-center gap-8">
            {['Telemetry', 'Qubit_Map', 'Circuit_Editor'].map((item, i) => (
              <a 
                key={item} 
                href="#" 
                className={`font-mono text-[10px] font-black h-[48px] flex items-center px-2 transition-all ${
                  i === 0 ? 'text-[#adc6ff] border-b-2 border-[#adc6ff]' : 'text-[#8c909f] hover:text-[#e1e2ec]'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] text-[#4cd7f6] font-bold">Uptime: 1024:12:09</span>
          <button className="material-symbols-outlined text-[#8c909f] hover:text-[#adc6ff] transition-colors">settings_input_component</button>
        </div>
      </header>

      <div className="flex flex-1 pt-[48px] overflow-hidden">
        {/* NavigationDrawer */}
        <aside className="w-64 border-r border-[#424754]/30 bg-[#191b23] hidden md:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-6">
            <span className="font-mono text-[10px] text-[#e1e2ec] font-black tracking-widest uppercase opacity-50">SYSTEM_NAV</span>
          </div>
          <nav className="flex flex-col space-y-1 px-4">
            {[
              { label: 'Telemetry', icon: 'BarChart3', active: true },
              { label: 'Qubit_Map', icon: 'Share2', active: false },
              { label: 'Circuit_Editor', icon: 'account_tree', active: false },
              { label: 'Stability_Log', icon: 'history_edu', active: false },
              { label: 'System_Health', icon: 'monitor_heart', active: false },
            ].map((item) => (
              <a 
                key={item.label}
                href="#"
                className={`flex items-center gap-4 px-4 py-3 rounded transition-all ${
                  item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-l-2 border-[#4cd7f6] font-bold' : 'text-[#8c909f] hover:bg-[#272a31]/50 hover:text-[#e1e2ec]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
                <span className="font-mono text-[11px] tracking-tight uppercase">{item.label}</span>
              </a>
            ))}
          </nav>
          <div className="mt-auto px-6 pt-6 border-t border-[#424754]/30">
            <div className="bg-[#1d2027] p-4 rounded-xl border border-[#424754]/30 shadow-inner">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">FABRIC_HEALTH</span>
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6]"></span>
              </div>
              <div className="h-1 bg-[#0b0e15] rounded-full overflow-hidden">
                <div className="h-full bg-[#4cd7f6] w-4/5 shadow-[0_0_8px_#4cd7f6]"></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Workspace */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#10131a] relative group custom-scrollbar">
          <div className="grid grid-cols-12 gap-6 h-full max-h-[calc(100vh-140px)]">
            {/* Compute Stats */}
            <div className="col-span-12 grid grid-cols-3 gap-6 shrink-0">
              <section className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-xl shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">TOTAL_COMPUTE_POWER</h3>
                  <span className="material-symbols-outlined text-[#adc6ff] text-[18px]">HardDrive</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-black italic tracking-tighter text-[#adc6ff]">842.04</span>
                  <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase">PFLOPS</span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[#8c909f]">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  <span className="font-mono text-[9px] font-bold uppercase">+12.4% FROM PREVIOUS CYCLE</span>
                </div>
              </section>
              <section className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-xl shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">DATA_FABRIC_SPEED</h3>
                  <span className="material-symbols-outlined text-[#4cd7f6] text-[18px]">Gauge</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-black italic tracking-tighter text-[#4cd7f6]">1,240</span>
                  <span className="font-mono text-[10px] text-[#adc6ff] font-black uppercase">GB/s</span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[#8c909f]">
                  <span className="material-symbols-outlined text-[14px]">Zap</span>
                  <span className="font-mono text-[9px] font-bold uppercase">LATENCY: 0.024ms (STABLE)</span>
                </div>
              </section>
              <section className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-xl shadow-2xl flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-2 border-[#adc6ff] pl-4">
                    <div className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest mb-1">NODES_ACTIVE</div>
                    <div className="font-mono text-2xl font-black text-[#adc6ff]">58/64</div>
                  </div>
                  <div className="border-l-2 border-[#ffb786] pl-4">
                    <div className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest mb-1">LOAD_AVG</div>
                    <div className="font-mono text-2xl font-black text-[#ffb786]">74.2%</div>
                  </div>
                </div>
              </section>
            </div>

            {/* Nodes Map */}
            <section className="col-span-12 lg:col-span-8 bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded-xl flex flex-col overflow-hidden shadow-2xl h-[500px]">
              <header className="h-10 bg-[#272a31]/50 border-b border-[#424754]/30 px-6 flex items-center justify-between shrink-0">
                <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest">FABRIC_SCHEMATIC :: NODE_ARRAY_2D</span>
                <div className="flex gap-6">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#adc6ff] rounded-sm shadow-[0_0_8px_#adc6ff]"></span>
                    <span className="text-[9px] font-mono font-black uppercase tracking-widest text-[#8c909f]">IDLE</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#ffb786] rounded-sm shadow-[0_0_8px_#ffb786]"></span>
                    <span className="text-[9px] font-mono font-black uppercase tracking-widest text-[#8c909f]">PEAK</span>
                  </span>
                </div>
              </header>
              <div className="p-8 flex-1 overflow-auto custom-scrollbar flex items-center justify-center bg-[#0b0e15]">
                <div className="grid grid-cols-8 gap-3 aspect-square w-full max-w-[450px]">
                  {nodes.map(node => (
                    <div 
                      key={node.id} 
                      className={`border border-[#424754]/30 flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-500 hover:scale-110 hover:z-10 cursor-pointer ${
                        node.status === 'error' ? 'bg-[#93000a]/20 border-[#ffb4ab] animate-pulse' : 
                        node.status === 'peak' ? 'bg-[#df7412]/20 border-[#ffb786] shadow-[0_0_15px_rgba(223,116,18,0.2)]' : 
                        'bg-[#adc6ff]/5 border-[#424754]/50'
                      }`}
                    >
                      <span className="text-[8px] font-mono text-[#8c909f] font-black mb-1">{node.id.toString().padStart(2, '0')}</span>
                      <span className={`material-symbols-outlined text-[16px] ${
                        node.status === 'error' ? 'text-[#ffb4ab]' : 
                        node.status === 'peak' ? 'text-[#ffb786]' : 
                        'text-[#adc6ff]'
                      }`}>developer_board</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Terminal */}
            <section className="col-span-12 lg:col-span-4 bg-[#0b0e15] border border-[#424754]/50 rounded-xl flex flex-col shadow-2xl h-[500px]">
              <header className="h-10 bg-[#272a31]/50 border-b border-[#424754]/30 px-6 flex items-center shrink-0">
                <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest">ORCHESTRATION_TERMINAL</span>
              </header>
              <div className="flex-1 p-6 font-mono text-[11px] text-[#4cd7f6] overflow-y-auto custom-scrollbar space-y-3">
                <p className="text-[#8c909f] opacity-50 uppercase tracking-widest italic">Initializing Cluster Fabric connection...</p>
                <div className="flex gap-2">
                  <span className="text-[#adc6ff] font-black">&gt;</span>
                  <span className="uppercase font-bold">DEPLOY_SIMULATION --target cluster_alpha</span>
                </div>
                <p className="text-[#e1e2ec] uppercase">[ORCHESTRATOR] Initializing handshake with 64 nodes.</p>
                <p className="text-[#e1e2ec] uppercase">[ORCHESTRATOR] Scaling compute environment to 32 nodes;</p>
                <p className="text-[#e1e2ec] uppercase">[FABRIC] Allocated resources: 4.2TB vRAM / 512 vCPU</p>
                <p className="text-[#4cd7f6] font-bold uppercase">[FABRIC] Latency: 0.024ms. Connection secure.</p>
                <div className="flex gap-2">
                  <span className="text-[#adc6ff] font-black">&gt;</span>
                  <span className="uppercase font-bold">RUN --batch_process_04</span>
                </div>
                <p className="text-[#e1e2ec] uppercase">[ORCHESTRATOR] Batch started. Processing 1.2M packets/s.</p>
                <div className="flex gap-1 items-center animate-pulse">
                  <span className="text-[#adc6ff] font-black">&gt;</span>
                  <span className="bg-[#adc6ff] w-2 h-4"></span>
                </div>
              </div>
              <div className="p-4 border-t border-[#424754]/30 bg-[#1d2027]/50">
                <input 
                  className="w-full bg-transparent border-none focus:ring-0 font-mono text-[11px] text-[#adc6ff] placeholder:text-[#8c909f]/30 uppercase font-black" 
                  placeholder="ENTER Terminal..." 
                  type="text"
                />
              </div>
            </section>

            {/* Incident Log */}
            <section className="col-span-12 bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded-xl overflow-hidden shadow-2xl shrink-0">
              <header className="h-10 bg-[#272a31]/50 border-b border-[#424754]/30 px-6 flex items-center justify-between shrink-0">
                <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest">INCIDENT_LOG_v2.0</span>
                <span className="font-mono text-[10px] text-[#ffb4ab] font-black animate-pulse uppercase tracking-widest">3 ACTIVE CRITICALS</span>
              </header>
              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left font-mono text-[11px]">
                  <thead className="bg-[#0b0e15] text-[#8c909f] border-b border-[#424754]/30">
                    <tr>
                      <th className="px-6 py-3 font-black uppercase tracking-widest">TIMESTAMP</th>
                      <th className="px-6 py-3 font-black uppercase tracking-widest">ID</th>
                      <th className="px-6 py-3 font-black uppercase tracking-widest">EVENT</th>
                      <th className="px-6 py-3 font-black uppercase tracking-widest">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#424754]/10 bg-[#0b0e15]/20">
                    {logs.map((log, i) => (
                      <tr key={i} className="hover:bg-[#adc6ff]/5 transition-colors group">
                        <td className="px-6 py-4 text-[#8c909f] font-bold">{log.time}</td>
                        <td className="px-6 py-4 text-[#4cd7f6] font-black tracking-tighter italic">{log.id}</td>
                        <td className="px-6 py-4 text-[#e1e2ec] uppercase group-hover:text-[#4cd7f6] transition-colors">{log.event}</td>
                        <td className="px-6 py-4">
                          <span className={`${log.color} flex items-center gap-2 font-black italic tracking-widest`}>
                            <span className={`w-2 h-2 rounded-full ${log.status === 'CRITICAL' ? 'bg-[#ffb4ab] animate-pulse shadow-[0_0_8px_#ffb4ab]' : 'bg-current'}`}></span>
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
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

export default ClusterOrchestratorEngineeringOS_300186;
