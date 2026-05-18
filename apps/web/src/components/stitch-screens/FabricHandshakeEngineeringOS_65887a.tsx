'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const FabricHandshakeEngineeringOS_65887a = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const nodes = [
    { name: 'NODE_ALPHA', status: 'SYNCING', icon: 'refresh' },
    { name: 'NODE_BETA', status: 'SYNCING', icon: 'refresh' },
    { name: 'NODE_GAMMA', status: 'SYNCING', icon: 'refresh' },
  ];

  const bars = [
    { height: '65%', color: 'bg-[#4cd7f6]' },
    { height: '82%', color: 'bg-[#adc6ff]' },
    { height: '41%', color: 'bg-[#4cd7f6]' },
  ];

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-[48px] bg-[#10131a]/90 backdrop-blur-md border-b border-[#424754]/50 shrink-0">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff]">terminal</span>
          <span className="font-mono text-[11px] font-black tracking-widest text-[#adc6ff] uppercase">QUANTUM_COMMAND_OS_v2.0.4</span>
        </div>
        <div className="flex items-center gap-10">
          <nav className="hidden md:flex gap-8 h-full items-center">
            {['TELEMETRY', 'QUBIT_MAP', 'LOGS'].map((item, i) => (
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
          <span className="material-symbols-outlined text-[#8c909f] cursor-pointer hover:text-[#adc6ff] transition-colors">settings_input_component</span>
        </div>
      </header>

      <div className="flex flex-1 pt-[48px] overflow-hidden">
        {/* NavigationDrawer */}
        <aside className="w-64 border-r border-[#424754]/30 bg-[#191b23] hidden md:flex flex-col py-6 shrink-0 z-40 shadow-2xl">
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
          <div className="mt-auto px-6 py-6 border-t border-[#424754]/30">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center font-mono text-[10px] text-[#8c909f] font-black">
                <span>CPU_LOAD</span>
                <span>42%</span>
              </div>
              <div className="h-1 bg-[#272a31] w-full rounded-full overflow-hidden">
                <div className="h-full bg-[#4cd7f6] w-[42%] shadow-[0_0_8px_rgba(76,215,246,0.5)]"></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Workspace Canvas */}
        <main className="flex-1 relative overflow-hidden bg-[#0b0e15] flex flex-col group">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#424754 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          {/* Top Status Area */}
          <div className="z-10 flex flex-col md:flex-row justify-between items-start p-8 gap-6 pointer-events-none">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 bg-[#1d2027]/80 backdrop-blur-xl px-6 py-3 border border-[#424754]/50 rounded-xl shadow-2xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4cd7f6] shadow-[0_0_15px_#4cd7f6]"></span>
                </span>
                <h2 className="font-mono text-[18px] font-black text-[#4cd7f6] uppercase tracking-tighter italic">UPLINKING_TO_SOVEREIGN_FABRIC</h2>
              </div>
              <div className="font-mono text-[11px] text-[#8c909f] pl-6 uppercase font-black tracking-widest animate-pulse">PHASE_04: SYNCING_CLUSTER_TOPOLOGY</div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {nodes.map(node => (
                <div key={node.name} className="bg-[#1d2027]/80 backdrop-blur-md border border-[#424754]/50 p-4 rounded-xl min-w-[140px] shadow-lg border-b-2 border-b-[#4cd7f6]/30">
                  <div className="font-mono text-[10px] text-[#8c909f] mb-1 font-black uppercase tracking-widest">{node.name}</div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12px] text-[#4cd7f6] font-bold tracking-tighter uppercase">{node.status}</span>
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[16px] animate-spin-slow">{node.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization Core */}
          <div className="flex-1 relative flex items-center justify-center p-12 overflow-hidden">
            <div className="w-full h-full relative border border-[#424754]/50 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#10131a]/50 group-hover:scale-[1.01] transition-transform duration-1000">
              <img className="w-full h-full object-cover mix-blend-luminosity opacity-40 grayscale group-hover:opacity-60 transition-opacity duration-1000 scale-110" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBYer-pIzFghMEr7rkK7CYwSuYhItNbZ61kxeGmtUXUSKDG56Lv2Xe39wiPEkTAwtQRFXDDXsRynht7f5zqFHD1Y5o7nnw9SqhXv6_UERuAfzXz3RSR2ri1eg09ImSK2sqRujoUUXjdGokJGjnflKCQp6oIafi19GZxjhl0AmybndlZ-TVaMSveVVk6pQrs6qUOK2K87qienUIzZ2rbhBium0D1doptTny50yYrlsaH331jo-8ZqBmpYV0FQPVVdNNZ16poc2EMSYCI" alt="Global Network Topology" />
              
              {/* SVG Topology Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_10px_rgba(76,215,246,0.3)]">
                <path d="M 200,300 Q 400,150 600,350" fill="none" opacity="0.6" stroke="#4cd7f6" strokeWidth="2" className="animate-dash" strokeDasharray="1000" strokeDashoffset="1000"></path>
                <path d="M 600,350 Q 800,500 1100,200" fill="none" opacity="0.4" stroke="#adc6ff" strokeWidth="2" className="animate-dash" strokeDasharray="1000" strokeDashoffset="1000" style={{ animationDelay: '0.5s' }}></path>
                <path d="M 300,500 Q 650,450 900,600" fill="none" opacity="0.3" stroke="#4cd7f6" strokeDasharray="8 8" strokeWidth="1.5"></path>
              </svg>

              {/* HUD Overlays */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 pointer-events-none font-mono">
                <div className="flex justify-between items-start">
                  <div className="text-[#8c909f] text-[10px] font-black uppercase tracking-[0.3em] bg-[#1d2027]/80 px-4 py-2 rounded border border-[#424754]/30">Global_Handshake_Active [029.33]</div>
                  <div className="text-[#4cd7f6] text-[10px] font-black uppercase tracking-widest bg-[#1d2027]/80 px-4 py-2 rounded border border-[#424754]/30 shadow-[0_0_20px_rgba(76,215,246,0.1)]">STREAMING::SECURE</div>
                </div>
                <div className="flex justify-end items-end gap-6 h-40">
                  {bars.map((bar, i) => (
                    <div key={i} className="h-full w-2 bg-[#424754]/30 relative rounded-full overflow-hidden shadow-inner border border-[#424754]/10">
                      <div className={`absolute bottom-0 w-full ${bar.color} transition-all duration-[2s] ease-out shadow-[0_0_10px_rgba(76,215,246,0.3)]`} style={{ height: bar.height }}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Data Center */}
          <div className="bg-[#1d2027] border-t border-[#424754]/50 p-4 flex flex-col md:flex-row justify-between items-center gap-4 shrink-0 shadow-2xl z-20">
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">LATENCY:</span>
                <span className="font-mono text-[14px] text-[#4cd7f6] font-black italic tracking-tighter">4ms</span>
              </div>
              <div className="flex items-center gap-3 border-l border-[#424754]/30 pl-10">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">THROUGHPUT:</span>
                <span className="font-mono text-[14px] text-[#4cd7f6] font-black italic tracking-tighter">482 GB/S</span>
              </div>
              <div className="flex items-center gap-3 border-l border-[#424754]/30 pl-10">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest">ENCRYPTION:</span>
                <span className="font-mono text-[14px] text-[#adc6ff] font-black italic tracking-tighter uppercase">AES-QUANTUM-256</span>
              </div>
            </div>
            <div className="flex gap-8 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-tighter opacity-70">
              <div className="hover:text-[#adc6ff] transition-colors">FRAME_TIME: 1.2ms</div>
              <div className="hover:text-[#adc6ff] transition-colors">BUFFER: 0.02%</div>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
        .animate-dash {
          animation: dash 3s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default FabricHandshakeEngineeringOS_65887a;
