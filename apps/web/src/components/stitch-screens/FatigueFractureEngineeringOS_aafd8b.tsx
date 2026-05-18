import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const FatigueFractureEngineeringOS_aafd8b = () => {
  const { structuralState, simulationState, osStatus } = useEngineeringStore();

  const telemetryData = [
    { label: 'Current Load (kN)', value: '842.09', color: 'text-[#4cd7f6]' },
    { label: 'Stress Ratio (R)', value: '0.10', color: 'text-[#e1e2ec]' },
    { label: 'Material', value: 'Al-7075-T6', color: 'text-[#adc6ff]' },
    { label: 'Crack Length (a₀)', value: '4.22 mm', color: 'text-[#ffb4ab]' },
    { label: 'Fracture Toughness (Kc)', value: '28.5 MPa√m', color: 'text-[#e1e2ec]' },
  ];

  const nodes = [
    { id: '#4128', value: 412.0, status: 'CRITICAL', color: '#ffb4ab' },
    { id: '#4129', value: 382.4, status: 'AlertTriangle', color: '#ffb786' },
    { id: '#4130', value: 210.5, status: 'NOMINAL', color: '#10B981' },
    { id: '#4131', value: 188.2, status: 'NOMINAL', color: '#10B981' },
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
          <div className="font-mono text-[10px] text-[#adc6ff] bg-[#adc6ff]/5 px-3 py-1 rounded border border-[#adc6ff]/20 uppercase tracking-widest font-bold">
            GPU: {((simulationState?.gpu?.cluster_load_pct || 0) * 100).toFixed(0)}% | SIM: {simulationState?.solver?.load_pct > 0 ? 'ACTIVE' : 'READY'}
          </div>
          <span className="material-symbols-outlined text-[#8c909f] cursor-pointer hover:bg-[#272a31]/50 p-1 rounded transition-all">settings</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden pt-[48px]">
        {/* NavigationDrawer */}
        <aside className="w-64 border-r border-[#424754]/30 bg-[#0b0e15] hidden lg:flex flex-col py-6 shrink-0 z-40 shadow-2xl">
          <div className="px-6 mb-6 font-mono text-[10px] text-[#8c909f] tracking-widest font-bold uppercase opacity-50">SYSTEM_CORE</div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'Projects', icon: 'folder_open', active: false },
              { label: 'Simulations', icon: 'model_training', active: true },
              { label: 'AI Agents', icon: 'smart_toy', active: false },
              { label: 'Digital Twin', icon: 'precision_manufacturing', active: false },
              { label: 'Manufacturing', icon: 'factory', active: false },
            ].map((item) => (
              <div 
                key={item.label}
                className={`flex items-center gap-4 px-4 py-3 rounded transition-all cursor-pointer group ${
                  item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-l-2 border-[#4cd7f6] font-bold shadow-lg' : 'text-[#8c909f] hover:bg-[#272a31]/50 hover:text-[#e1e2ec]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
                <span className="font-mono text-[11px] tracking-tight uppercase">{item.label}</span>
              </div>
            ))}
          </nav>
          <div className="px-6 pt-6 border-t border-[#424754]/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse"></div>
              <span className="font-mono text-[10px] text-[#8c909f] uppercase tracking-widest">Kernel 0.4.2-Live</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-[#10131a] p-8 relative">
          {/* Cockpit Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-50 overflow-hidden">
            <div className="w-full h-full bg-[linear-gradient(to_bottom,transparent_50%,#adc6ff_51%,transparent_52%)] bg-[length:100%_4px]"></div>
          </div>

          <div className="max-w-[1600px] mx-auto flex flex-col gap-8 relative z-10">
            {/* Critical Alert Header */}
            <div className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-lg flex items-center justify-between border-l-4 border-l-[#ffb4ab] shadow-2xl animate-pulse-subtle">
              <div>
                <span className="font-mono text-[10px] text-[#ffb4ab] font-bold tracking-[0.3em] block mb-2 uppercase">CRITICAL_SYSTEM_ALERT</span>
                <h2 className="font-bold text-[#e1e2ec] text-[24px] tracking-tighter uppercase">Fatigue & Fracture Engine: WR-092 Analysis</h2>
              </div>
              <div className="text-right">
                <span className="font-mono text-[10px] text-[#8c909f] font-bold block mb-1 uppercase tracking-widest">STATUS: CRITICAL_LOAD</span>
                <span className="font-mono text-2xl text-[#ffb4ab] font-bold tracking-tighter italic">14,200 CYC UNTIL FAILURE</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
              {/* Left Column: 3D Visualization & Curves */}
              <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
                {/* 3D Wireframe Panel */}
                <div className="bg-[#0b0e15] border border-[#424754]/50 rounded-lg h-[500px] relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    <span className="font-mono text-[9px] text-[#e1e2ec] bg-[#1d2027] px-3 py-1 border border-[#424754] uppercase tracking-widest font-bold">3D_WIREFRAME_VIEW: WING_ROOT_CONN_04</span>
                    <span className="font-mono text-[9px] text-[#4cd7f6] bg-[#03b5d3]/10 px-3 py-1 border border-[#03b5d3]/30 uppercase tracking-widest font-bold animate-pulse">CRITICAL CRACK REGION DETECTED</span>
                  </div>
                  
                  <img 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen group-hover:scale-105 transition-transform duration-[10s]" 
                    src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200" 
                    alt="Aerospace Wireframe"
                  />
                  
                  {/* Stress Point Indicator */}
                  <div className="absolute top-[60%] left-[55%] flex items-center gap-4 group cursor-help z-20">
                    <div className="w-6 h-6 rounded-full bg-[#ffb4ab] animate-ping opacity-40"></div>
                    <div className="bg-[#ffb4ab]/90 backdrop-blur-md text-[#690005] p-3 px-4 border border-[#ffb4ab] rounded shadow-2xl">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest">STRESS_CONCENTRATION: 412.0 MPa</span>
                    </div>
                  </div>

                  {/* Viewport Controls */}
                  <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                    {['rotate_90_degrees_ccw', 'zoom_in', 'layers'].map(icon => (
                      <button key={icon} className="bg-[#1d2027]/80 backdrop-blur-md border border-[#424754] p-2 text-[#4cd7f6] hover:bg-[#4cd7f6]/20 transition-all rounded">
                        <span className="material-symbols-outlined text-[20px]">{icon}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Analysis Curves */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[280px]">
                  {/* S-N Curve */}
                  <div className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-lg flex flex-col shadow-xl">
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-mono text-[10px] text-[#8c909f] font-bold uppercase tracking-widest">S-N_CURVE (STRESS_VS_CYCLES)</span>
                      <span className="material-symbols-outlined text-[18px] text-[#8c909f] cursor-help">info</span>
                    </div>
                    <div className="flex-1 relative border-l border-b border-[#424754]/50 overflow-hidden">
                      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M 0 10 L 25 25 C 50 40 75 70 100 90" fill="none" stroke="#4cd7f6" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(76,215,246,0.5)]" />
                        <circle cx="70" cy="70" r="2.5" fill="#ffb4ab" className="animate-pulse" />
                      </svg>
                    </div>
                  </div>

                  {/* Paris Law Curve */}
                  <div className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 p-6 rounded-lg flex flex-col shadow-xl">
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-mono text-[10px] text-[#8c909f] font-bold uppercase tracking-widest">PARIS_LAW (da/dN_VS_ΔK)</span>
                      <span className="material-symbols-outlined text-[18px] text-[#8c909f] cursor-pointer hover:text-white transition-colors">open_in_new</span>
                    </div>
                    <div className="flex-1 relative border-l border-b border-[#424754]/50 overflow-hidden">
                      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <line x1="0" y1="90" x2="100" y2="10" stroke="#adc6ff" strokeWidth="2" strokeDasharray="4" className="drop-shadow-[0_0_8px_rgba(173,198,255,0.5)]" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Telemetry & Parameters */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
                {/* Telemetry Panel */}
                <div className="bg-[#1d2027]/70 backdrop-blur-md border border-[#424754]/50 rounded-lg shadow-2xl overflow-hidden">
                  <div className="p-3 px-6 bg-[#272a31]/50 border-b border-[#424754]/30 flex justify-between items-center">
                    <span className="font-mono text-[10px] text-[#e1e2ec] font-bold uppercase tracking-widest">TELEMETRY_FEED: RT-SIM</span>
                    <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]"></div>
                  </div>
                  <div className="p-6 space-y-4">
                    {telemetryData.map((item) => (
                      <div key={item.label} className="flex justify-between items-center py-2 border-b border-[#424754]/20 last:border-0 group">
                        <span className="font-mono text-[11px] text-[#8c909f] uppercase tracking-tighter group-hover:text-[#e1e2ec] transition-colors">{item.label}</span>
                        <span className={`font-mono text-[13px] font-bold ${item.color}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Factors Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'K_FACTOR', value: '1.42', icon: 'LayoutGrid', color: '#4cd7f6' },
                    { label: 'C_CONSTANT', value: '6.2e-12', icon: 'Sigma', color: '#adc6ff' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#1d2027]/70 border border-[#424754]/50 p-5 rounded-lg shadow-xl flex flex-col justify-between aspect-[3/2] hover:bg-[#272a31] transition-all">
                      <span className="font-mono text-[9px] text-[#8c909f] font-bold uppercase tracking-widest">{stat.label}</span>
                      <div className="flex items-baseline justify-between mt-2">
                        <span className="font-mono text-2xl font-bold text-[#e1e2ec] tracking-tighter italic">{stat.value}</span>
                        <span className="material-symbols-outlined text-[20px]" style={{ color: stat.color }}>{stat.icon}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Node Inspection Table */}
                <div className="bg-[#1d2027]/70 border border-[#424754]/50 rounded-lg shadow-2xl flex flex-col flex-1 max-h-[300px]">
                  <div className="p-4 px-6 border-b border-[#424754]/30">
                    <span className="font-mono text-[11px] text-[#e1e2ec] font-bold uppercase tracking-widest">STRESS_NODE_INSPECTION</span>
                  </div>
                  <div className="overflow-y-auto custom-scrollbar flex-1">
                    <table className="w-full text-left font-mono text-[11px]">
                      <thead className="sticky top-0 bg-[#272a31] z-10">
                        <tr>
                          <th className="p-3 px-6 text-[#8c909f] font-bold uppercase tracking-tighter">NODE_ID</th>
                          <th className="p-3 px-6 text-[#8c909f] font-bold uppercase tracking-tighter">VALUE (MPa)</th>
                          <th className="p-3 px-6 text-[#8c909f] font-bold uppercase tracking-tighter text-center">STAT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {nodes.map((node) => (
                          <tr key={node.id} className="border-b border-[#424754]/10 hover:bg-[#32353c] transition-all group">
                            <td className="p-3 px-6 text-[#e1e2ec] font-bold">{node.id}</td>
                            <td className="p-3 px-6" style={{ color: node.color }}>{node.value.toFixed(1)}</td>
                            <td className="p-3 px-6 text-center">
                              <div className="w-2 h-2 rounded-full mx-auto animate-pulse" style={{ backgroundColor: node.color, boxShadow: `0 0 8px ${node.color}` }}></div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="p-6 bg-[#03b5d3]/5 border border-[#03b5d3]/20 rounded-lg flex flex-col gap-4 shadow-xl">
                  <p className="font-mono text-[11px] text-[#8c909f] leading-relaxed italic">
                    Structural integrity threshold reached. Fracture propagation predicted to accelerate within 2,500 flight hours.
                  </p>
                  <button className="w-full bg-[#03b5d3] text-[#001f26] py-4 font-mono text-[11px] font-bold rounded shadow-[0_0_20px_rgba(3,181,211,0.3)] hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest">
                    INITIATE_MITIGATION_PROTOCOL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s infinite ease-in-out;
        }
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

export default FatigueFractureEngineeringOS_aafd8b;
