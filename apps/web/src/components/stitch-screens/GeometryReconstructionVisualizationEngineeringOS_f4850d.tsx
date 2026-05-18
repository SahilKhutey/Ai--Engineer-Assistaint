'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const GeometryReconstructionVisualizationEngineeringOS_f4850d = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30 antialiased">
      {/* TopAppBar Anchor */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#4d8eff] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
          <h1 className="font-mono text-[14px] font-black text-[#4d8eff] tracking-tighter uppercase italic">ANTIGRAVITY_OS</h1>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_10px_#4cd7f6]"></div>
            <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic">GPU: 94% | SIM: ACTIVE</span>
          </div>
        </div>
      </header>

      {/* Main Container Shell */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/50 flex flex-col hidden md:flex shrink-0 z-20 shadow-2xl">
          <div className="p-8">
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">SYSTEM_CORE</span>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'Projects', icon: 'folder_open', active: false },
              { label: 'Simulations', icon: 'model_training', active: true },
              { label: 'AI Agents', icon: 'smart_toy', active: false },
              { label: 'Digital Twin', icon: 'precision_manufacturing', active: false },
              { label: 'Manufacturing', icon: 'factory', active: false },
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
        <main className="flex-1 p-4 grid grid-cols-12 grid-rows-[1fr_auto] gap-4 overflow-hidden bg-[#10131a] relative">
          {/* Left Column: Status & Logs */}
          <aside className="col-span-12 lg:col-span-3 flex flex-col gap-4 h-full overflow-hidden">
            {/* RECONSTRUCTION_ENGINE Status Panel */}
            <section className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] overflow-hidden shadow-2xl transition-all group/status">
              <header className="h-12 bg-[#0b0e15]/50 px-8 flex items-center justify-between border-b border-[#424754]/50">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">RECONSTRUCTION_ENGINE</span>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]"></div>
                  <span className="font-mono text-[9px] text-[#10B981] font-black italic">LIVE</span>
                </div>
              </header>
              <div className="p-8 space-y-6">
                {[
                  { label: 'VOXEL_DENSITY', value: '0.0024mm³', color: 'text-[#4cd7f6]' },
                  { label: 'POINT_COUNT', value: '14.82M', color: 'text-[#4cd7f6]' },
                  { label: 'NEURAL_CONFIDENCE', value: '99.2%', color: 'text-[#4cd7f6]' },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-end border-b-2 border-[#424754]/20 pb-4">
                    <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60">{stat.label}</span>
                    <span className={`font-mono text-xl font-black italic tracking-tighter ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
                <div className="pt-4 space-y-3">
                  <div className="h-2 w-full bg-[#0b0e15] rounded-full overflow-hidden shadow-inner border border-[#424754]/20">
                    <div className="h-full bg-[#4cd7f6] shadow-[0_0_15px_#4cd7f6] transition-all duration-1000" style={{ width: '84%' }}></div>
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">SYS_STABILITY</span>
                    <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-widest italic animate-pulse">NOMINAL</span>
                  </div>
                </div>
              </div>
            </section>

            {/* GEOMETRY_LOG Terminal */}
            <section className="bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[40px] flex-1 overflow-hidden flex flex-col shadow-2xl group/log">
              <header className="h-12 bg-[#1d2027]/50 px-8 flex items-center border-b border-[#424754]/50">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">GEOMETRY_LOG</span>
              </header>
              <div className="flex-1 p-8 font-mono text-[11px] font-black italic space-y-4 overflow-y-auto custom-scrollbar selection:bg-[#4cd7f6]/30">
                <p className="text-[#8c909f] opacity-60">[14:20:01] INITIALIZING POINT_CLOUD_BUFFER...</p>
                <p className="text-[#e1e2ec]">[14:20:05] FETCHING KERNEL_DATA: 0x82FA9...</p>
                <p className="text-[#e1e2ec]">[14:20:12] MESHING_OPERATOR: READY</p>
                <p className="text-[#4cd7f6]">[14:20:30] PHASE_03: TOPOLOGICAL_MAPPING COMPLETE</p>
                <p className="text-[#4d8eff] animate-pulse">[14:20:45] PHASE_04: VOLUMETRIC_SOLVING IN_PROGRESS</p>
                <p className="text-[#e1e2ec]">[14:21:02] SURFACE_NORMAL_CALCULATION_COMPLETE</p>
                <p className="text-[#e1e2ec]">[14:21:05] VOXEL_GRID_REFINEMENT (ITERATION 44)</p>
                <p className="text-[#e1e2ec]">[14:21:08] EDGE_DETECTION_PASS (NEURAL_ENGINE)</p>
                <p className="text-[#e1e2ec]">[14:21:12] NORM_ALIGN: OFFSET +/- 0.0002</p>
                <p className="text-[#4cd7f6] animate-pulse">_</p>
              </div>
            </section>
          </aside>

          {/* Center Viewport: 3D Scene */}
          <section className="col-span-12 lg:col-span-9 relative bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[50px] overflow-hidden flex items-center justify-center shadow-2xl group/viewport">
            {/* Background 3D Viewport Simulation */}
            <div className="absolute inset-0 z-0">
              <img 
                className="w-full h-full object-cover opacity-40 mix-blend-screen scale-110 group-hover/viewport:scale-100 transition-all duration-[10000ms]" 
                src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCtawvjRIA4vuUEhMfpmkz5GrTXfhuKe-nfHPMlQJwQEw4jQDrGTl1ixj9kVLZ00dHpAfQNN_N70LQPJOfxkwghiM7X7FtFD5kbf1gDFd8n-GDZi2BYb7PGumaSx7qGsKBTTKixjGv0Pghp2Z7KViAdF6wEbQQGz2AXHL1kPo-Pw83PFN-TsbuCFblNXO_fLkks6cNeEFsi_LkO3JNhmHnSLPtkO6_LweuWNVpa4MuH29sNXf92HpYonsWiCtoCwyBO3cfNVAWzHqHl" 
                alt="3D Component Reconstruction" 
              />
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4d8eff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            {/* Overlay HUD Elements */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 pointer-events-none z-10">
              <div className="flex justify-between items-start">
                <div className="bg-[#10131a]/80 backdrop-blur-xl border-2 border-[#424754]/50 p-6 rounded-[30px] shadow-2xl pointer-events-auto transition-all hover:border-[#4cd7f6]/30 animate-in slide-in-from-left duration-700">
                  <div className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic mb-3 opacity-50">COORD_SYSTEM</div>
                  <div className="font-mono text-[#4cd7f6] text-[12px] font-black italic leading-loose tracking-widest">
                    X: 124.992<br/>Y: -12.443<br/>Z: 44.021
                  </div>
                </div>
                <div className="bg-[#10131a]/80 backdrop-blur-xl border-2 border-[#424754]/50 p-6 rounded-[30px] shadow-2xl pointer-events-auto text-right transition-all hover:border-[#4d8eff]/30 animate-in slide-in-from-right duration-700">
                  <div className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic mb-3 opacity-50">FRAME_RATE</div>
                  <div className="font-mono text-[#4d8eff] text-[12px] font-black italic tracking-widest">
                    144 FPS / 6.9ms
                  </div>
                </div>
              </div>

              {/* Central Progress Gauge */}
              <div className="flex flex-col items-center justify-center animate-in zoom-in duration-1000">
                <div className="relative w-72 h-72 flex items-center justify-center group/gauge">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-[#1d2027]" cx="144" cy="144" fill="transparent" r="130" stroke="currentColor" strokeWidth="6"></circle>
                    <circle className="text-[#4cd7f6] drop-shadow-[0_0_20px_rgba(76,215,246,0.4)]" cx="144" cy="144" fill="transparent" r="130" stroke="currentColor" strokeDasharray="816.8" strokeDashoffset="130.7" strokeWidth="12" strokeLinecap="round"></circle>
                  </svg>
                  <div className="absolute flex flex-col items-center text-center">
                    <span className="font-mono text-6xl font-black text-[#e1e2ec] italic tracking-tighter drop-shadow-2xl">84%</span>
                    <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.4em] italic mt-2 animate-pulse">VOLUMETRIC_SOLVING</span>
                  </div>
                </div>
              </div>

              {/* Viewport Controls */}
              <div className="flex justify-center gap-4 pointer-events-auto animate-in slide-in-from-bottom duration-1000">
                {[
                  { label: 'ORTHOGRAPHIC', icon: 'Camera' },
                  { label: 'WIRE_OVERLAY', icon: 'layers' },
                ].map((btn) => (
                  <button key={btn.label} className="bg-[#10131a]/80 backdrop-blur-xl border-2 border-[#424754]/50 hover:bg-[#1d2027] hover:border-[#4cd7f6]/50 px-8 py-4 rounded-[20px] flex items-center gap-4 text-[#e1e2ec] transition-all shadow-2xl active:scale-95 group/btn">
                    <span className="material-symbols-outlined text-[20px] text-[#4cd7f6] group-hover/btn:scale-110 transition-transform">{btn.icon}</span>
                    <span className="font-mono text-[11px] font-black uppercase tracking-widest italic">{btn.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom Action Bar */}
          <footer className="col-span-12 flex items-center justify-between bg-[#1d2027] border-2 border-[#424754]/50 p-6 rounded-[40px] shadow-2xl relative z-20 animate-in slide-in-from-bottom duration-700">
            <div className="flex items-center gap-12">
              <div className="flex flex-col gap-1 px-4">
                <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">ENGINE_STATE</span>
                <span className="font-mono text-[#4cd7f6] font-black italic uppercase tracking-widest text-[11px]">SOLVING_GEOMETRY_04</span>
              </div>
              <div className="h-10 w-px bg-[#424754]/50"></div>
              <div className="flex flex-col gap-1 px-4">
                <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">EST_TIME_REMAINING</span>
                <span className="font-mono text-[#4d8eff] font-black italic tracking-widest text-[11px]">00:14:22:04</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[20px] text-[#e1e2ec] font-mono text-[11px] font-black uppercase tracking-widest italic hover:bg-[#ffb4ab]/10 hover:border-[#ffb4ab]/50 transition-all flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#ffb4ab]">pause_circle</span>
                PAUSE_RECONSTRUCTION
              </button>
              <button className="px-8 py-4 bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[20px] text-[#e1e2ec] font-mono text-[11px] font-black uppercase tracking-widest italic hover:bg-[#1d2027] hover:border-[#4d8eff]/50 transition-all flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#4d8eff]">Grid</span>
                VIEW_NORMAL_MAPS
              </button>
              <button className="px-10 py-4 bg-[#4cd7f6] text-[#003640] rounded-[20px] font-mono text-[11px] font-black uppercase tracking-widest italic hover:scale-105 active:scale-95 shadow-[0_15px_30px_-10px_rgba(76,215,246,0.5)] transition-all flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                FINALIZE_MESH
              </button>
            </div>
          </footer>
        </main>
      </div>

      {/* Global Polish: Scanlines */}
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

export default GeometryReconstructionVisualizationEngineeringOS_f4850d;
