'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const KernelDebuggerEngineeringOS_8f0fa8 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const hexLines = [
    { addr: '00001010', hex: '48 89 E5 48 83 EC 20 48 8D 05 00 00 00', color: 'text-[#4cd7f6]' },
    { addr: '00001020', hex: 'B8 00 00 00 00 E8 D2 FE FF FF 48 8D 05', color: 'text-[#4cd7f6]' },
    { addr: '00001030', hex: '6E 00 00 00 48 89 45 F8 48 8B 45 F8 48', color: 'text-[#e1e2ec]' },
    { addr: '00001040', hex: '83 C0 08 48 89 45 F0 48 8B 45 F0 48 8B', color: 'text-[#4cd7f6]' },
    { addr: '00001050', hex: 'FF FF FF FF 00 00 00 00 00 00 00 00 00', color: 'text-[#ffb4ab]' },
    { addr: '00001060', hex: '48 89 E5 48 83 EC 20 48 8D 05 00 00 00', color: 'text-[#4cd7f6]' },
    { addr: '00001070', hex: '48 89 E5 48 83 EC 20 48 8D 05 00 00 00', color: 'text-[#4cd7f6]' },
    { addr: '00001080', hex: 'B8 00 00 00 00 E8 D2 FE FF FF 48 8D 05', color: 'text-[#4cd7f6]' },
  ];

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#adc6ff]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">terminal</span>
          <h1 className="font-mono text-[12px] font-black text-[#adc6ff] uppercase tracking-widest italic">QUANTUM_COMMAND_OS_v2.0.4</h1>
        </div>
        <nav className="hidden lg:flex items-center gap-8">
          {['SYMB_SOLVER', 'CLUSTER_MGR', 'V_MEMORY'].map((item, i) => (
            <button key={item} className={`font-mono text-[10px] font-black uppercase tracking-widest h-[48px] px-2 transition-all ${i === 0 ? 'text-[#adc6ff] border-b-2 border-[#adc6ff] italic' : 'text-[#8c909f] hover:text-[#e1e2ec] hover:bg-[#32353c]/50'}`}>
              {item}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 px-4 py-1.5 bg-[#191b23] border border-[#424754]/50 rounded-xl shadow-inner">
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]"></div>
            <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic">KERNEL_STABLE</span>
          </div>
          <button className="material-symbols-outlined text-[#8c909f] hover:text-[#adc6ff] transition-all text-[22px]">settings_input_component</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#191b23] border-r border-[#424754]/30 hidden lg:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-8">
            <h2 className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.2em] italic opacity-50">SYSTEM_NAV</h2>
          </div>
          <nav className="flex flex-col space-y-1">
            {[
              { label: 'Telemetry', icon: 'BarChart3', active: false },
              { label: 'Qubit_Map', icon: 'Share2', active: false },
              { label: 'Circuit_Editor', icon: 'account_tree', active: true },
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
                <span className="font-mono text-[11px] uppercase tracking-tight italic">{item.label}</span>
              </div>
            ))}
          </nav>
          <div className="mt-auto px-6 pb-6">
            <div className="bg-[#1d2027] p-4 border border-[#424754]/50 rounded-2xl shadow-2xl">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic">CPU LOAD</span>
                <span className="font-mono text-[10px] text-[#4cd7f6] font-black italic">44.2%</span>
              </div>
              <div className="w-full bg-[#0b0e15] h-1.5 rounded-full overflow-hidden shadow-inner">
                <div className="bg-[#4cd7f6] h-full shadow-[0_0_10px_#4cd7f6]" style={{ width: '44.2%' }}></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Workspace */}
        <main className="flex-1 p-6 grid grid-cols-12 gap-6 overflow-hidden bg-[#0b0f14] relative group">
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02]" style={{ background: 'linear-gradient(to bottom, transparent 50%, #adc6ff 50%)', backgroundSize: '100% 4px' }}></div>

          {/* SYMBOLIC VIEWPORT */}
          <section className="col-span-12 lg:col-span-8 row-span-4 bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-2xl flex flex-col shadow-[0_0_40px_rgba(173,198,255,0.1)] overflow-hidden transition-all hover:scale-[1.005]">
            <header className="h-10 flex items-center justify-between px-6 bg-[#1d2027] border-b border-[#424754]/50 shrink-0">
              <span className="font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-[0.2em] italic">SYMBOLIC_VIEWPORT // FLUID_DYNAMICS</span>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[18px] text-[#8c909f] hover:text-[#adc6ff] cursor-pointer transition-all">unfold_more</span>
                <span className="material-symbols-outlined text-[18px] text-[#8c909f] hover:text-[#ffb4ab] cursor-pointer transition-all">close</span>
              </div>
            </header>
            <div className="flex-1 relative flex items-center justify-center bg-[#0b0e15] p-12 overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4d8eff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
              <div className="z-10 text-center space-y-12 max-w-2xl">
                <div>
                  <h2 className="font-mono text-4xl font-black text-[#adc6ff] mb-8 tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(173,198,255,0.4)]">Navier-Stokes Symbolic Solver</h2>
                  <div className="bg-[#1d2027]/80 p-10 border-2 border-[#4d8eff]/30 rounded-3xl backdrop-blur-2xl shadow-2xl relative group/equation transition-all hover:border-[#4d8eff]/50">
                    <span className="font-mono text-3xl text-[#e1e2ec] leading-loose font-black italic tracking-tighter block drop-shadow-[0_0_10px_rgba(225,226,236,0.3)] group-hover:scale-105 transition-transform">
                      ∂u/∂t + (u·∇)u = -1/ρ ∇p + ν∇²u
                    </span>
                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-[#4d8eff] text-[#00285d] font-mono text-[9px] font-black uppercase rounded-full italic shadow-lg">ACTIVE_COMPUTE</div>
                  </div>
                </div>
                <div className="flex justify-center gap-12">
                  <div className="text-left px-8 py-4 bg-[#1d2027]/50 rounded-2xl border-l-4 border-[#4cd7f6] shadow-xl">
                    <span className="block font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic mb-2">CONVERGENCE</span>
                    <span className="font-mono text-[24px] text-[#4cd7f6] font-black italic tracking-tighter">0.00042</span>
                  </div>
                  <div className="text-left px-8 py-4 bg-[#1d2027]/50 rounded-2xl border-l-4 border-[#ffb786] shadow-xl">
                    <span className="block font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic mb-2">RESIDUAL_ERR</span>
                    <span className="font-mono text-[24px] text-[#ffb786] font-black italic tracking-tighter">1.2e-7</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 w-64 h-40 bg-[#1d2027] border-2 border-[#424754]/50 rounded-2xl overflow-hidden shadow-2xl group/preview transition-all hover:scale-110">
                <img className="w-full h-full object-cover grayscale brightness-50 contrast-150 opacity-40 group-hover/preview:opacity-80 transition-all duration-[20s] linear" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDvx6PKy98-w8q2LcHjQqtWHdjnGUweAjjtDH501VyLFeVoMRY5kcAzLdn9Mac7IEByfkfBmXn5Bh31ZrhcSYKgzovZ_2Eip677SU7uob7Kf47Cq7DmJIdVZbMYS62tm4TZB9BWZ8KYFAG_BtIr9e-5rKt1PeVz5i-oIGI0yNrAWcm_asYKabG7Skzs1rOoZ4uuIMZsB808gXBARWnOw47udFaYdQwXRopv2MzeTYKjLAsLCe4XqmfEi9v3evg65vUWDCQ61KzT6tQU" alt="Fluid Preview" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e15] to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-[10px] text-[#adc6ff] bg-[#0b0e15]/80 px-3 py-1 rounded-full font-black uppercase tracking-widest italic shadow-lg">SIM_LIVE_FEED</span>
                </div>
              </div>
            </div>
          </section>

          {/* HEX DUMP */}
          <section className="col-span-12 lg:col-span-4 row-span-3 bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-2xl flex flex-col shadow-2xl overflow-hidden transition-all hover:translate-y-[-4px]">
            <header className="h-10 flex items-center justify-between px-6 bg-[#1d2027] border-b border-[#424754]/50 shrink-0">
              <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-widest italic">HEX_DUMP // SOLVER_STATE</span>
              <span className="font-mono text-[9px] text-[#8c909f] font-black italic">ADDR: 0x7FFF5400</span>
            </header>
            <div className="flex-1 p-6 font-mono text-[12px] overflow-y-auto custom-scrollbar bg-[#0b0e15]/80">
              <div className="grid grid-cols-[90px_1fr] gap-y-3">
                {hexLines.map((line, i) => (
                  <React.Fragment key={i}>
                    <span className="text-[#8c909f]/50 font-black italic">{line.addr}:</span>
                    <span className={`${line.color} font-black tracking-widest opacity-80 group-hover:opacity-100 transition-opacity`}>{line.hex}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* DEBUGGING Terminal */}
          <section className="col-span-12 lg:col-span-8 row-span-2 bg-[#1d2027]/50 backdrop-blur-xl border border-[#ffb4ab]/30 rounded-2xl flex flex-col shadow-[0_0_40px_rgba(255,180,171,0.1)] overflow-hidden transition-all hover:scale-[1.005]">
            <header className="h-10 flex items-center justify-between px-6 bg-[#93000a]/20 border-b border-[#ffb4ab]/20 shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ffb4ab] text-[20px]">bug_report</span>
                <span className="font-mono text-[10px] text-[#ffb4ab] font-black uppercase tracking-widest italic">DEBUG_CONSOLE // STACK_TRACE</span>
              </div>
              <span className="font-mono text-[10px] text-[#ffb4ab] font-black animate-pulse italic">CRITICAL_EXCEPTION</span>
            </header>
            <div className="flex-1 p-6 font-mono text-[12px] overflow-y-auto custom-scrollbar bg-[#0b0e15]">
              <div className="space-y-2 uppercase italic">
                <p className="text-[#8c909f] opacity-60">[0.0042s] Initializing solver kernel...</p>
                <p className="text-[#8c909f] opacity-60">[0.0189s] Loading mesh: /mnt/sim/fluid_mesh_v9.bin</p>
                <p className="text-[#ffb4ab] font-black mt-4 drop-shadow-[0_0_8px_rgba(255,180,171,0.5)]">&gt;&gt;&gt; FATAL ERROR: SEGMENTATION_FAULT in FLUID_MESH_GEN</p>
                <div className="ml-8 text-[#ffb4ab]/70 font-black space-y-1">
                  <p>at solver_core.cpp:442 (Thread #12)</p>
                  <p>at navier_stokes_integrator.h:112</p>
                  <p>at mesh_iterator.cpp:77</p>
                </div>
                <p className="text-[#e1e2ec] opacity-50 mt-4">Signal 11 received. Dumping HardDrive states to /var/log/kernel_debug_0x77.log</p>
                <div className="flex items-center gap-3 mt-6 text-[#4cd7f6]">
                  <span className="font-black">&gt;</span>
                  <span className="w-2 h-5 bg-[#4cd7f6] animate-pulse shadow-[0_0_8px_#4cd7f6]"></span>
                </div>
              </div>
            </div>
          </section>

          {/* AI DIAGNOSTICS */}
          <section className="col-span-12 lg:col-span-4 row-span-3 bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-2xl flex flex-col shadow-[0_0_40px_rgba(76,215,246,0.1)] overflow-hidden transition-all hover:translate-y-[-4px]">
            <header className="h-10 flex items-center justify-between px-6 bg-[#03b5d3]/10 border-b border-[#4cd7f6]/20 shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[20px]">smart_toy</span>
                <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic">AI_DIAGNOSTICS</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6] animate-pulse"></div>
            </header>
            <div className="flex-1 p-8 flex flex-col gap-8">
              <div className="bg-[#0b0e15] p-6 border border-[#4cd7f6]/20 rounded-3xl relative shadow-inner group/insight">
                <div className="absolute -left-1 top-6 w-1.5 h-12 bg-[#4cd7f6] rounded-full shadow-[0_0_15px_#4cd7f6]"></div>
                <p className="font-mono text-[14px] text-[#4cd7f6] leading-relaxed font-black uppercase italic group-hover:scale-[1.02] transition-transform">
                  "Detected singularity in pressure gradient at Node_774. Suggesting adaptive mesh refinement at the boundary layer interface."
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="w-full h-14 flex items-center justify-center gap-4 bg-[#4cd7f6] text-[#003640] rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_-5px_rgba(76,215,246,0.4)] italic">
                  <span className="material-symbols-outlined text-[20px]">auto_fix</span>
                  APPLY_MESH_REFINEMENT
                </button>
                <button className="w-full h-14 flex items-center justify-center gap-4 bg-[#1d2027] border border-[#424754]/50 text-[#8c909f] rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest hover:text-[#e1e2ec] hover:border-[#adc6ff]/50 transition-all shadow-xl italic">
                  <span className="material-symbols-outlined text-[20px]">terminal</span>
                  RE_RUN_LAST_TRACE
                </button>
              </div>
              <div className="mt-auto pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic">PROBABILITY_SUCCESS</span>
                  <span className="font-mono text-[12px] text-[#4cd7f6] font-black italic">88%</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex-1 bg-[#0b0e15] h-2 rounded-full overflow-hidden shadow-inner">
                    <div className="bg-[#4cd7f6] h-full shadow-[0_0_15px_#4cd7f6]" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* FAB - Run Solver */}
      <button className="fixed bottom-10 right-10 w-20 h-20 bg-[#df7412] text-[#311400] rounded-full flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(223,116,18,0.5)] hover:scale-110 active:scale-90 transition-all z-50 border-4 border-[#ffb786]/50 group">
        <span className="material-symbols-outlined text-[48px] fill-current group-hover:rotate-12 transition-transform">play_arrow</span>
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

export default KernelDebuggerEngineeringOS_8f0fa8;
