import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const CompositeEngineeringEngineeringOS_0028ff = () => {
  const { materialState, structuralState, simulationState, osStatus } = useEngineeringStore();

  const layers = [
    { id: 'P_24', angle: 0, material: 'CFRP', status: 'ACTIVE', color: '#4cd7f6' },
    { id: 'P_23', angle: 45, material: 'CFRP', status: 'IDLE', color: '#adc6ff' },
    { id: 'P_22', angle: -45, material: 'CFRP', status: 'IDLE', color: '#adc6ff' },
    { id: 'P_21', angle: 90, material: 'CFRP', status: 'IDLE', color: '#ffb786' },
    { id: 'P_04', angle: 0, material: 'CFRP', status: 'IDLE', color: '#4cd7f6' },
    { id: 'P_01', angle: 0, material: 'CFRP', status: 'IDLE', color: '#4cd7f6' },
  ];

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 h-[48px] bg-[#10131a]/70 backdrop-blur-xl border-b border-[#424754]/30 shrink-0">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#adc6ff]">deployed_code</span>
          <h1 className="font-bold text-[20px] tracking-tighter text-[#adc6ff] uppercase">ANTIGRAVITY_OS</h1>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-4 font-mono text-[10px] tracking-widest font-bold">
            <span className="text-[#4cd7f6] cursor-pointer border-b border-[#4cd7f6]">SIMULATION</span>
            <span className="text-[#8c909f] hover:text-[#e1e2ec] cursor-pointer transition-colors">MATERIALS</span>
            <span className="text-[#8c909f] hover:text-[#e1e2ec] cursor-pointer transition-colors">REPORTS</span>
          </nav>
          <div className="font-mono text-[10px] text-[#adc6ff] bg-[#adc6ff]/5 px-3 py-1 rounded border border-[#adc6ff]/20 uppercase tracking-widest font-bold">
            GPU: {((simulationState?.gpu?.cluster_load_pct || 0) * 100).toFixed(0)}% | SIM: {simulationState?.solver?.load_pct > 0 ? 'ACTIVE' : 'READY'}
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden pt-[48px]">
        {/* NavigationDrawer */}
        <aside className="w-64 border-r border-[#424754]/30 bg-[#0b0e15] hidden lg:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-6">
            <h2 className="font-mono text-[10px] text-[#8c909f] tracking-widest font-bold uppercase">SYSTEM_CORE</h2>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'Projects', icon: 'folder_open', active: true },
              { label: 'Simulations', icon: 'model_training', active: false },
              { label: 'AI Agents', icon: 'smart_toy', active: false },
              { label: 'Digital Twin', icon: 'precision_manufacturing', active: false },
              { label: 'Manufacturing', icon: 'factory', active: false },
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
          <div className="px-6 pt-6 border-t border-[#424754]/30">
            <div className="flex justify-between items-center mb-2 font-mono text-[10px]">
              <span className="text-[#8c909f] uppercase tracking-widest font-bold">UPTIME</span>
              <span className="text-[#4cd7f6] font-bold">{(osStatus?.uptime || 0)}s</span>
            </div>
            <div className="w-full bg-[#424754]/30 h-[2px] rounded-full overflow-hidden">
              <div className="bg-[#4cd7f6] h-full w-4/5 animate-pulse shadow-[0_0_8px_#4cd7f6]"></div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-[#10131a] p-8">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#424754]/30 pb-6 gap-4">
              <div>
                <span className="font-mono text-[#adc6ff] text-[10px] tracking-[0.3em] font-bold uppercase block mb-2">PROJECT: CFRP_AERO_WINC_78X</span>
                <h2 className="font-bold text-[#e1e2ec] text-[28px] tracking-tighter uppercase">COMPOSITE_LAYUP_ANALYSIS</h2>
              </div>
              <div className="flex gap-3">
                <button className="bg-[#272a31] border border-[#424754] px-6 py-3 flex items-center gap-2 font-mono text-[10px] font-bold hover:bg-[#32353c] transition-all rounded uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[18px]">refresh</span> RECALCULATE
                </button>
                <button className="bg-[#03b5d3] text-[#001f26] px-6 py-3 flex items-center gap-2 font-mono text-[10px] font-bold shadow-[0_0_20px_rgba(3,181,211,0.3)] hover:scale-[1.02] transition-all rounded uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[18px]">auto_awesome</span> OPTIMIZE LAYUP
                </button>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
              {/* Left Panel: Ply Stacking Visualization */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
                <div className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-lg flex flex-col h-[600px] shadow-2xl">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="font-mono text-[11px] text-[#e1e2ec] tracking-widest font-bold flex items-center gap-2 uppercase">
                      <span className="material-symbols-outlined text-[#4cd7f6]">layers</span> STACKING_SEQUENCE
                    </h3>
                    <span className="font-mono text-[11px] text-[#8c909f] font-bold">PLY_COUNT: 24</span>
                  </div>
                  
                  {/* Ply Stack Visual */}
                  <div className="flex-1 relative flex flex-col-reverse items-center justify-start py-6 overflow-y-auto custom-scrollbar gap-2 px-4">
                    {layers.map((layer, i) => (
                      <div 
                        key={layer.id}
                        className={`w-full max-w-[200px] h-10 bg-[#10131a]/80 border ${i === 0 ? 'border-[#4cd7f6] shadow-[0_0_15px_rgba(76,215,246,0.2)]' : 'border-[#424754]/50'} rounded flex items-center justify-between px-4 relative group cursor-pointer hover:bg-[#32353c] transition-all`}
                      >
                        <span className={`font-mono text-[10px] ${i === 0 ? 'text-[#4cd7f6] font-bold' : 'text-[#8c909f]'}`}>{layer.id}</span>
                        <div className="w-24 h-1.5 bg-[#424754]/30 rounded-full relative overflow-hidden">
                          <div 
                            className="absolute inset-0 transition-transform duration-500 h-full" 
                            style={{ 
                              backgroundColor: layer.color, 
                              transform: `skewX(${layer.angle === 0 ? -20 : layer.angle === 45 ? 20 : 0}deg)`,
                              width: '100%' 
                            }}
                          ></div>
                        </div>
                        <span className="font-mono text-[10px] text-[#e1e2ec] font-bold">{layer.angle}°</span>
                      </div>
                    ))}
                    <div className="w-full h-8 opacity-20 bg-gradient-to-t from-transparent to-[#424754] mb-2"></div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button className="bg-[#1d2027] border border-[#424754] py-3 font-mono text-[9px] font-bold hover:bg-[#32353c] transition-all rounded uppercase tracking-widest text-[#8c909f]">Plus LAYER</button>
                    <button className="bg-[#1d2027] border border-[#424754] py-3 font-mono text-[9px] font-bold hover:bg-[#32353c] transition-all rounded uppercase tracking-widest text-[#8c909f]">ROTATE FIBER</button>
                  </div>
                </div>

                <div className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-lg shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-mono text-[11px] text-[#e1e2ec] tracking-widest font-bold uppercase">DELAMINATION_PREDICTION</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#ffb4ab] animate-pulse shadow-[0_0_8px_#ffb4ab]"></div>
                      <span className="font-mono text-[10px] text-[#ffb4ab] font-bold uppercase tracking-widest">CRITICAL</span>
                    </div>
                  </div>
                  <div className="p-4 bg-[#ffb4ab]/5 border border-[#ffb4ab]/20 rounded-md">
                    <p className="font-mono text-[11px] text-[#ffb4ab] leading-relaxed">
                      High interlaminar shear detected at PLY_18 (45° interface). Tsai-Wu failure criterion exceeded at 88% load path.
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Panel: Anisotropic Stress Field */}
              <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
                <div className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-lg flex-1 flex flex-col min-h-[500px] relative overflow-hidden shadow-2xl">
                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <h3 className="font-mono text-[11px] text-[#e1e2ec] tracking-widest font-bold flex items-center gap-2 uppercase">
                      <span className="material-symbols-outlined text-[#adc6ff]">biotech</span> ANISOTROPIC_STRESS_MAP (σ_xy)
                    </h3>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#adc6ff]"></span>
                        <span className="font-mono text-[10px] text-[#8c909f] font-bold uppercase">TENSION</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#ffb786]"></span>
                        <span className="font-mono text-[10px] text-[#8c909f] font-bold uppercase">COMPRESSION</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 bg-[#0b0e15] rounded border border-[#424754]/30 flex items-center justify-center relative overflow-hidden group cursor-crosshair">
                    <img 
                      className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen group-hover:scale-110 transition-transform duration-[20s]" 
                      src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDGrW3dreQV1U8QJNe35gZ3F4dkCjdZLrXMOTTh7zLftgrjtcUywr58-fR-alLdF4wy_eWft6Xrm2Fa5qrAzmEzKFmGLIb6Epk3-1IdN3LgY6jfNSGmE-RA235rz4xLsrB2A0CuEyfCuG9USVEft8FzXIAWlLFEoa0OFDvVjgkNyeyczY_hKVRtNmlXZIBsqQ8i4n71xoDCFTojCJEzVLTdxflL96wt5inBY0-rDYskabxtoVB7Q5BxfM0G9rUPfvPPKMypDlNqzDUf" 
                      alt="Stress Map"
                    />
                    
                    {/* Simulated HUD Overlays */}
                    <div className="absolute inset-0 pointer-events-none p-6">
                      <div className="border border-[#4cd7f6]/10 w-full h-full relative">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#4cd7f6]/40"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#4cd7f6]/40"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#4cd7f6]/40"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#4cd7f6]/40"></div>
                        
                        {/* Stress Point */}
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="relative">
                            <div className="w-16 h-16 border border-[#ffb4ab]/30 rounded-full animate-ping"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#ffb4ab] rounded-full shadow-[0_0_15px_#ffb4ab]"></div>
                            <div className="absolute top-0 left-full ml-4 w-40 border-l border-t border-[#ffb4ab]/40 p-2 bg-[#10131a]/80 backdrop-blur-md rounded-tr-lg">
                              <span className="font-mono text-[10px] text-[#ffb4ab] font-bold uppercase tracking-widest">MAX_STRESS: 420.4 MPa</span>
                              <div className="mt-1 font-mono text-[8px] text-[#8c909f] uppercase tracking-tighter">NODE: 72,219 | LAYER: PLY_18</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data Readouts */}
                    <div className="absolute bottom-6 left-6 flex gap-4">
                      <div className="bg-[#10131a]/80 backdrop-blur-md border border-[#424754]/50 p-4 rounded min-w-[140px] shadow-2xl">
                        <span className="font-mono text-[9px] text-[#8c909f] font-bold uppercase tracking-widest">E_LONGITUDINAL</span>
                        <div className="font-mono text-[#4cd7f6] text-xl font-bold mt-1">145.2 GPa</div>
                      </div>
                      <div className="bg-[#10131a]/80 backdrop-blur-md border border-[#424754]/50 p-4 rounded min-w-[140px] shadow-2xl">
                        <span className="font-mono text-[9px] text-[#8c909f] font-bold uppercase tracking-widest">G_SHEAR</span>
                        <div className="font-mono text-[#4cd7f6] text-xl font-bold mt-1">5.8 GPa</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'FAILURE_INDEX', value: '0.68', status: 'NOMINAL', color: 'text-[#4cd7f6]' },
                    { label: 'FIBER_VOL_FRACTION', value: '62.5%', status: 'OPTIMAL', color: 'text-[#adc6ff]' },
                    { label: 'THERMAL_EXPANSION', value: '-0.1e-6', status: 'PPM/°C', color: 'text-[#ffb786]' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-5 rounded-lg shadow-2xl group hover:border-[#4cd7f6]/30 transition-all">
                      <span className="font-mono text-[10px] text-[#8c909f] tracking-widest font-bold uppercase block mb-2">{stat.label}</span>
                      <div className="flex items-baseline justify-between">
                        <span className={`font-mono text-2xl font-bold ${stat.color} tracking-tighter`}>{stat.value}</span>
                        <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest">{stat.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Event Log */}
              <div className="col-span-12 bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-lg shadow-2xl">
                <div className="flex items-center justify-between mb-4 border-b border-[#424754]/30 pb-3">
                  <h3 className="font-mono text-[11px] text-[#e1e2ec] tracking-widest font-bold uppercase">SIMULATION_EVENT_LOG</h3>
                  <span className="material-symbols-outlined text-[18px] text-[#8c909f] cursor-pointer hover:text-white transition-colors">settings</span>
                </div>
                <div className="font-mono text-[12px] space-y-2 max-h-32 overflow-y-auto custom-scrollbar">
                  {[
                    { time: '14:20:01', msg: 'RECALCULATING STIFFNESS MATRIX FOR 24-PLY SYMMETRIC STACK...', color: 'text-[#8c909f]' },
                    { time: '14:20:04', msg: 'AlertTriangle: INTERLAMINAR SHEAR IN PLY_18 EXCEEDS THRESHOLD.', color: 'text-[#ffb4ab] font-bold' },
                    { time: '14:20:08', msg: 'OPTIMIZATION ENGINE INITIALIZED. EXPLORING NEAR-OPTIMAL ORIENTATIONS...', color: 'text-[#8c909f]' },
                    { time: '14:20:12', msg: 'SUGGESTION: CHANGE PLY_18 TO 0°/90° CROSS-PLY INTERFACE.', color: 'text-[#4cd7f6] font-bold' },
                  ].map((log, i) => (
                    <div key={i} className="flex gap-6 py-1 border-b border-[#424754]/10 last:border-0">
                      <span className="text-[#4cd7f6] w-20 shrink-0 font-bold opacity-60">[{log.time}]</span>
                      <span className={`${log.color} uppercase tracking-tighter`}>{log.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

export default CompositeEngineeringEngineeringOS_0028ff;
