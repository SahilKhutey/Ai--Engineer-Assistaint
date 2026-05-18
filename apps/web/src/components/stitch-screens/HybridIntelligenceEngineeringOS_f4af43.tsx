'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const HybridIntelligenceEngineeringOS_f4af43 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const clusterNodes = [
    { id: 'A1', status: 'online' }, { id: 'A2', status: 'online' }, { id: 'A3', status: 'idle' }, { id: 'A4', status: 'online' },
    { id: 'B1', status: 'error' }, { id: 'B2', status: 'online' }, { id: 'B3', status: 'online' }, { id: 'B4', status: 'online' },
  ];

  const reasoningLogs = [
    { time: '14:22:01', msg: 'HEURISTIC: Cross-referencing turbulent flow Database with qubit state #44.', color: 'text-[#e1e2ec]', border: 'border-[#424754]' },
    { time: '14:22:04', msg: 'INFERENCE: Sub-atomic variance indicates structural micro-fracture potential at Mach 2.4.', color: 'text-[#adc6ff]', border: 'border-[#adc6ff]/40' },
    { time: '14:22:08', msg: 'ACTION: Re-mapping Hamiltonian vectors to compensate for thermal stress gradients.', color: 'text-[#e1e2ec]', border: 'border-[#424754]' },
    { time: '14:22:15', msg: 'RESOLUTION: Optimal lattice structure identified. Structural integrity +12% vs classical models.', color: 'text-[#4cd7f6]', border: 'border-[#4cd7f6]/40' },
  ];

  return (
    <div className="bg-[#0b0f14] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#adc6ff]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 h-[48px] bg-[#0b0f14]/80 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 shadow-[0_0_20px_rgba(173,198,255,0.05)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff]">terminal</span>
          <h1 className="font-mono text-[14px] font-black text-[#adc6ff] uppercase tracking-widest italic">QUANTUM_COMMAND_OS_v2.0.4</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 px-4 py-1.5 bg-[#32353c]/30 rounded-xl border border-[#424754]/50 shadow-inner group cursor-default">
            <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_8px_#4cd7f6]"></div>
            <span className="font-mono text-[10px] text-[#adc6ff] font-bold uppercase tracking-widest italic">QPU_STABLE</span>
          </div>
          <button className="material-symbols-outlined text-[#8c909f] hover:text-[#e1e2ec] hover:bg-[#363941] transition-all p-2 rounded-xl">
            settings_input_component
          </button>
        </div>
      </header>

      <div className="flex flex-1 pt-[48px] overflow-hidden">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#191b23] border-r border-[#424754]/30 hidden lg:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-8">
            <h2 className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">SYSTEM_NAV</h2>
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
                className={`flex items-center gap-4 px-6 py-3.5 transition-all cursor-pointer ${
                  item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-l-2 border-[#4cd7f6] font-bold shadow-[inset_4px_0_10px_rgba(76,215,246,0.1)]' : 'text-[#8c909f] hover:bg-[#1d2027] hover:text-[#e1e2ec]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
                <span className="font-mono text-[11px] uppercase tracking-tight">{item.label}</span>
              </div>
            ))}
          </nav>
          <div className="mt-auto px-6 py-6 border-t border-[#424754]/30 bg-[#0b0e15]/30">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic">RESOURCE_ALLOC</span>
              <span className="font-mono text-[11px] text-[#adc6ff] font-black italic">82%</span>
            </div>
            <div className="h-1.5 bg-[#32353c] rounded-full overflow-hidden border border-[#424754]/20 shadow-inner">
              <div className="h-full bg-[#adc6ff] shadow-[0_0_10px_#adc6ff] w-[82%]"></div>
            </div>
          </div>
        </aside>

        {/* Main Content Workspace */}
        <main className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-[#0b0f14] relative group">
          {/* Dashboard Grid */}
          <div className="grid grid-cols-12 gap-6 auto-rows-min max-w-[1600px] mx-auto">
            
            {/* Hybrid Balance Gauge */}
            <section className="col-span-12 lg:col-span-4 bg-[#1d2027]/50 backdrop-blur-xl rounded-2xl border border-[#424754]/50 flex flex-col shadow-2xl overflow-hidden group/gauge">
              <header className="h-10 px-6 border-b border-[#424754]/50 flex items-center justify-between bg-[#1d2027] shrink-0">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">HYBRID_BALANCE_GAUGE</span>
                <span className="material-symbols-outlined text-[16px] text-[#8c909f] hover:text-[#4cd7f6] cursor-help">info</span>
              </header>
              <div className="p-8 flex-1 flex flex-col items-center justify-center">
                <div className="relative w-56 h-56 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90 transform drop-shadow-[0_0_15px_rgba(76,215,246,0.1)]">
                    <circle className="text-[#32353c]" cx="112" cy="112" fill="transparent" r="100" stroke="currentColor" strokeWidth="6"></circle>
                    <circle className="text-[#4cd7f6] transition-all duration-1000 ease-out" cx="112" cy="112" fill="transparent" r="100" stroke="currentColor" strokeDasharray="628.3" strokeDashoffset="219.9" strokeWidth="10" strokeLinecap="round"></circle>
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="font-mono text-[28px] text-[#4cd7f6] font-black italic tracking-tighter">65/35</span>
                    <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">GPU : QPU</span>
                  </div>
                </div>
                <div className="w-full mt-10 grid grid-cols-2 gap-4">
                  <div className="bg-[#0b0e15]/50 p-4 border border-[#424754]/30 rounded-2xl shadow-inner group-hover/gauge:border-[#4cd7f6]/20 transition-all">
                    <div className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest mb-2 italic">Classical HPC</div>
                    <div className="font-mono text-[16px] text-[#adc6ff] font-black italic tracking-tighter uppercase">42.1 TFLOPS</div>
                  </div>
                  <div className="bg-[#0b0e15]/50 p-4 border border-[#424754]/30 rounded-2xl shadow-inner group-hover/gauge:border-[#4cd7f6]/20 transition-all">
                    <div className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest mb-2 italic">Quantum QPU</div>
                    <div className="font-mono text-[16px] text-[#4cd7f6] font-black italic tracking-tighter uppercase">5400 shots/s</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Hamiltonian Mapping Visual */}
            <section className="col-span-12 lg:col-span-8 bg-[#1d2027]/50 backdrop-blur-xl rounded-2xl border border-[#424754]/50 flex flex-col shadow-2xl overflow-hidden group/viz">
              <header className="h-10 px-6 border-b border-[#424754]/50 flex items-center justify-between bg-[#1d2027] shrink-0">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">HAMILTONIAN_MAPPING : AEROSPACE_WING_LAMINAR</span>
                <span className="material-symbols-outlined text-[18px] text-[#8c909f] hover:text-[#4cd7f6] cursor-pointer">Maximize2</span>
              </header>
              <div className="relative h-96 bg-[#000] overflow-hidden">
                <img 
                  className="w-full h-full object-cover opacity-60 mix-blend-screen group-hover/viz:scale-105 transition-all duration-[10000ms] ease-out" 
                  src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBkioSXA1A1-G8o1VwFBNh1NwhenhIDtE6XhqYjatLX3BbgZleXsfoWO3ZL0qa1amJAVlIYt4c8qywjwKi5Hp1XcbIDh5UQxs4FAvow95CjTAqkvl59fK2-0cnGkymTQmFm7znVTdA7Y5nlb_6wXnM3sAJKg4AI9X5eI91XTV1DxG1n_9UK5R73naMHBzSIbxb52BFOoLcT9o3lIU4fwOBP4tXar65Rg7GlLzwojL0I16ha9eF3zUokJ0Th4A7ziyaGspBrjSgi9VZ9" 
                  alt="Aerospace Hamiltonian Map" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-transparent to-transparent opacity-90"></div>
                
                {/* HUD Overlays */}
                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  <div className="bg-[#0b0e15]/80 backdrop-blur-md p-4 border border-[#424754]/50 rounded-2xl shadow-2xl transition-all hover:translate-x-[-4px]">
                    <div className="font-mono text-[9px] text-[#adc6ff] font-black uppercase tracking-widest italic mb-2">NODES_ACTIVE</div>
                    <div className="font-mono text-[22px] text-[#e1e2ec] font-black italic tracking-tighter leading-none">1,024</div>
                  </div>
                  <div className="bg-[#0b0e15]/80 backdrop-blur-md p-4 border border-[#424754]/50 rounded-2xl shadow-2xl transition-all hover:translate-x-[-4px]">
                    <div className="font-mono text-[9px] text-[#4cd7f6] font-black uppercase tracking-widest italic mb-2">ENTANGLEMENT_DENSITY</div>
                    <div className="font-mono text-[22px] text-[#e1e2ec] font-black italic tracking-tighter leading-none">0.884</div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 p-6 bg-[#0b0e15]/80 backdrop-blur-md border border-[#adc6ff]/30 rounded-2xl max-w-sm shadow-2xl transition-all hover:translate-y-[-4px]">
                  <h4 className="font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-[0.2em] italic mb-3">OPTIMIZATION_TRACE</h4>
                  <p className="font-mono text-[12px] text-[#e1e2ec] leading-relaxed uppercase italic opacity-80">
                    Applying QAOA Layer 4... Topology mapping for wing-spar density confirmed. Divergence reduced by 14.2% via quantum-enhanced stochastic descent.
                  </p>
                </div>
              </div>
            </section>

            {/* QAOA Controls Panel */}
            <section className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#1d2027]/50 backdrop-blur-xl rounded-2xl border border-[#424754]/50 flex flex-col shadow-2xl group/controls">
              <header className="h-10 px-6 border-b border-[#424754]/50 flex items-center justify-between bg-[#1d2027] shrink-0">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">QAOA_TOPOLOGY_CONTROLS</span>
                <span className="material-symbols-outlined text-[#adc6ff] text-[18px]">SlidersHorizontal</span>
              </header>
              <div className="p-8 space-y-8 flex-1">
                <div className="space-y-4">
                  <div className="flex justify-between font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">
                    <span>P-DEPTH (LAYERS)</span>
                    <span className="text-[#adc6ff]">8</span>
                  </div>
                  <div className="h-1.5 bg-[#0b0e15] relative rounded-full shadow-inner">
                    <div className="absolute h-full bg-[#adc6ff] rounded-full w-[60%] shadow-[0_0_10px_#adc6ff]"></div>
                    <div className="absolute h-4 w-4 bg-[#adc6ff] rounded-full top-1/2 -translate-y-1/2 left-[60%] -translate-x-1/2 border-2 border-[#1d2027] cursor-pointer hover:scale-125 transition-all shadow-xl"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">
                    <span>CONVERGENCE_THRESHOLD</span>
                    <span className="text-[#adc6ff]">0.0012</span>
                  </div>
                  <div className="h-1.5 bg-[#0b0e15] relative rounded-full shadow-inner">
                    <div className="absolute h-full bg-[#adc6ff] rounded-full w-[30%] shadow-[0_0_10px_#adc6ff]"></div>
                    <div className="absolute h-4 w-4 bg-[#adc6ff] rounded-full top-1/2 -translate-y-1/2 left-[30%] -translate-x-1/2 border-2 border-[#1d2027] cursor-pointer hover:scale-125 transition-all shadow-xl"></div>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <button className="flex-1 h-12 bg-[#adc6ff] text-[#002e6a] font-mono text-[11px] font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_-5px_rgba(173,198,255,0.4)] italic">
                    INITIALIZE_SWEEP
                  </button>
                  <button className="w-12 h-12 border border-[#424754]/50 flex items-center justify-center rounded-xl hover:bg-[#32353c]/50 text-[#8c909f] hover:text-[#e1e2ec] transition-all shadow-xl">
                    <span className="material-symbols-outlined text-[20px]">refresh</span>
                  </button>
                </div>
              </div>
            </section>

            {/* AI Reasoning Traces */}
            <section className="col-span-12 md:col-span-6 lg:col-span-5 bg-[#1d2027]/50 backdrop-blur-xl rounded-2xl border border-[#424754]/50 flex flex-col shadow-2xl group/logs">
              <header className="h-10 px-6 border-b border-[#424754]/50 flex items-center justify-between bg-[#1d2027] shrink-0">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">AI_REASONING_LOG</span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffb786] animate-pulse shadow-[0_0_8px_#ffb786]"></div>
              </header>
              <div className="p-8 flex-1 overflow-y-auto max-h-[320px] custom-scrollbar font-mono text-[12px] space-y-4">
                {reasoningLogs.map((log, i) => (
                  <div key={i} className={`flex gap-6 border-l-2 ${log.border} pl-6 py-1 hover:bg-[#adc6ff]/5 transition-all cursor-default group/logitem`}>
                    <span className="text-[#8c909f] shrink-0 font-bold italic">[{log.time}]</span>
                    <span className={`${log.color} font-bold uppercase tracking-tight leading-relaxed opacity-80 group-hover/logitem:opacity-100 transition-all`}>{log.msg}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Status Panel */}
            <section className="col-span-12 lg:col-span-3 bg-[#1d2027]/50 backdrop-blur-xl rounded-2xl border border-[#424754]/50 flex flex-col shadow-2xl overflow-hidden group/nodes">
              <header className="h-10 px-6 border-b border-[#424754]/50 flex items-center justify-between bg-[#1d2027] shrink-0">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">CLUSTER_NODES</span>
                <span className="material-symbols-outlined text-[#8c909f] text-[16px]">grid_view</span>
              </header>
              <div className="p-6 grid grid-cols-4 gap-3 flex-1 items-start">
                {clusterNodes.map((node) => (
                  <div 
                    key={node.id}
                    className={`aspect-square flex items-center justify-center rounded-lg border transition-all duration-500 cursor-help ${
                      node.status === 'online' ? 'bg-[#4cd7f6]/10 border-[#4cd7f6]/30 text-[#4cd7f6] shadow-[0_0_10px_rgba(76,215,246,0.1)]' :
                      node.status === 'error' ? 'bg-[#ffb4ab]/10 border-[#ffb4ab]/30 text-[#ffb4ab] animate-pulse' :
                      'bg-[#32353c]/10 border-[#424754]/30 text-[#8c909f]'
                    }`}
                  >
                    <span className="font-mono text-[11px] font-black italic uppercase tracking-tighter">{node.id}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto p-5 border-t border-[#424754]/30 flex justify-between items-center bg-[#0b0e15]/40 group-hover/nodes:bg-[#adc6ff]/5 transition-all shrink-0">
                <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic">GLOBAL_LATENCY</span>
                <span className="font-mono text-[12px] text-[#4cd7f6] font-black italic tracking-tighter">4.2ms</span>
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

export default HybridIntelligenceEngineeringOS_f4af43;
