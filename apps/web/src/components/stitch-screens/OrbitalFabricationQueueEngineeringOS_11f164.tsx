import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const OrbitalFabricationQueueEngineeringOS_11f164 = () => {
  const { 
    thermalState, 
    osStatus, 
    simulationState 
  } = useEngineeringStore();

  // manufacturingState is not in EngineeringState schema — use mock data
  const activeTasks = [
    { id: 'TR-101', label: 'Structural Truss Alpha', progress: 74.2, material: 'Titanium-6Al-4V', mass: 14.2, totalMass: 19.0, eta: '04:12:45' },
    { id: 'SOL-202', label: 'Solar Array Frame', progress: 22.8, material: 'Titanium-6Al-4V', mass: 8.4, totalMass: 36.5, eta: '18:55:10' }
  ];

  return (
    <div className="bg-[#10131a] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 h-[48px] bg-[#10131a]/70 backdrop-blur-xl border-b border-[#424754]/30 shrink-0">
        <div className="flex items-center gap-2 cursor-pointer active:opacity-80">
          <span className="material-symbols-outlined text-[#adc6ff]">deployed_code</span>
          <h1 className="font-bold text-[18px] tracking-tighter text-[#adc6ff] uppercase">ANTIGRAVITY_OS</h1>
        </div>
        <div className="font-mono text-[10px] text-[#adc6ff] bg-[#adc6ff]/5 px-3 py-1 rounded border border-[#adc6ff]/20 uppercase tracking-widest font-bold">
          GPU: {((simulationState?.gpu?.cluster_load_pct || 0) * 100).toFixed(0)}% | SIM: {simulationState?.solver?.load_pct > 0 ? 'ACTIVE' : 'READY'}
        </div>
      </header>

      {/* NavigationDrawer (Left) */}
      <aside className="fixed left-0 top-[48px] bottom-0 z-40 hidden lg:flex flex-col w-64 bg-[#0b0e15] border-r border-[#424754]/30">
        <div className="p-6">
          <span className="font-mono text-[10px] text-[#8c909f] tracking-widest font-bold uppercase">SYSTEM_CORE</span>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {[
            { label: 'Projects', icon: 'folder_open', active: false },
            { label: 'Simulations', icon: 'model_training', active: false },
            { label: 'AI Agents', icon: 'smart_toy', active: false },
            { label: 'Digital Twin', icon: 'precision_manufacturing', active: false },
            { label: 'Manufacturing', icon: 'factory', active: true },
          ].map((item) => (
            <div 
              key={item.label}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all cursor-pointer group ${
                item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border-l-2 border-[#4cd7f6] font-bold' : 'text-[#8c909f] hover:bg-[#272a31]/50 hover:text-[#e1e2ec]'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.icon}</span>
              <span className="font-mono text-[11px] tracking-tight uppercase">{item.label}</span>
            </div>
          ))}
        </nav>
        <div className="p-6 border-t border-[#424754]/30">
          <div className="p-4 bg-[#1d2027] rounded-lg border border-[#424754]/20 flex items-center gap-4 shadow-lg group">
            <div className="w-9 h-9 rounded bg-[#adc6ff] flex items-center justify-center text-[#001a42] font-bold shadow-[0_0_10px_rgba(173,198,255,0.3)]">JD</div>
            <div className="flex flex-col overflow-hidden">
              <span className="font-mono text-[10px] text-[#e1e2ec] font-bold tracking-widest truncate uppercase">ADMIN_SEC_0</span>
              <span className="font-mono text-[9px] text-[#8c909f] truncate">J. DOE</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="pt-[48px] lg:pl-64 flex-1 h-screen overflow-y-auto custom-scrollbar">
        {/* Hero Telemetry Panel */}
        <section className="p-6">
          <div className="bg-[#1d2027] border border-[#424754]/50 rounded-lg shadow-2xl overflow-hidden group">
            <div className="h-7 flex items-center justify-between px-4 bg-[#272a31]/50 border-b border-[#424754]/30">
              <span className="font-mono text-[9px] text-[#8c909f] uppercase tracking-widest font-bold">System_Health // Orbital_Node_01</span>
              <div className="flex gap-2">
                <div className={`w-2 h-2 rounded-full ${osStatus?.physicsSync ? 'bg-[#4cd7f6]' : 'bg-[#ffb4ab]'} animate-pulse`}></div>
                <div className="w-2 h-2 rounded-full bg-[#424754]"></div>
              </div>
            </div>
            <div className="relative h-48 w-full bg-[#0b0e15] overflow-hidden cursor-crosshair">
              <img 
                className="w-full h-full object-cover opacity-40 grayscale group-hover:opacity-50 transition-opacity duration-1000" 
                src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuD-85_AT8Qz87CDXI7TM0joP99rOOk50sC7-7XyHFBwvF17DAorraZt923WG1zQH_hmkaYPo3v49ogBtLRf0FzKnfj6g1hBB6_GGz9Xr1u78SzuUsyyVZayfzbgpioFcSzYU1ChHjO_DQg_M-2DY0bTGDsHWM0FaJnSNeyGdNOMxzwDNhL-tIpdmO5onkKEAFX-8yNrhsJoovE-INHKq1VTwxmc4M-O2ao7GE0wCpGgfIp3DKASzMwPY6ijsS3s4HR_4QJs3_E_oJHc" 
                alt="Orbital Station"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d2027] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex flex-col">
                <span className="font-mono text-2xl text-[#4cd7f6] font-bold tracking-tighter shadow-sm">FAB_UNIT_ACTIVE</span>
                <span className="font-mono text-[10px] text-[#8c909f] tracking-widest uppercase">LOCATION: LEO_ORBIT_SEC_4 // {osStatus?.uptime || 0}s</span>
              </div>
            </div>
          </div>
        </section>

        {/* Active Fabrication Queue */}
        <section className="px-6 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="font-mono text-[11px] text-[#e1e2ec] tracking-[0.2em] font-bold uppercase">ACTIVE_FABRICATION_QUEUE</h2>
            <span className="font-mono text-[10px] text-[#4cd7f6] font-bold uppercase">{activeTasks.length}_TASKS_RUNNING</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeTasks.map((task: any) => (
              <div 
                key={task.id}
                className="bg-[#1d2027]/60 backdrop-blur-md border border-[#424754]/40 p-5 rounded-lg hover:border-[#4cd7f6]/50 transition-all shadow-xl group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-mono text-[14px] text-[#4cd7f6] font-bold uppercase tracking-tight group-hover:text-white transition-colors">{task.label}</h3>
                    <p className="font-mono text-[10px] text-[#8c909f] tracking-tighter uppercase mt-1">MATERIAL: {task.material}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xl text-[#e1e2ec] font-bold">{task.progress.toFixed(1)}%</span>
                    <div className="flex items-center gap-2 mt-1 justify-end">
                      <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_10px_#10B981]"></div>
                      <span className="font-mono text-[9px] text-[#10B981] font-bold tracking-widest uppercase">PRINTING</span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-[#0b0e15] h-1.5 rounded-full overflow-hidden mb-6 border border-[#424754]/20">
                  <div 
                    className="bg-[#4cd7f6] h-full shadow-[0_0_12px_rgba(76,215,246,0.6)] transition-all duration-1000 ease-out" 
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#424754]/20">
                  <div>
                    <p className="font-mono text-[8px] text-[#8c909f] tracking-widest uppercase mb-1">EST_COMPLETION</p>
                    <p className="font-mono text-[11px] text-[#e1e2ec] font-bold">{task.eta}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[8px] text-[#8c909f] tracking-widest uppercase mb-1">MASS_CONSUMED</p>
                    <p className="font-mono text-[11px] text-[#e1e2ec] font-bold">{task.mass}kg / {task.totalMass}kg</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Thermal Management Section */}
        <section className="p-6">
          <div className="bg-[#1d2027] border border-[#424754]/50 rounded-lg shadow-2xl overflow-hidden flex flex-col">
            <div className="h-8 flex items-center px-4 bg-[#272a31]/50 border-b border-[#424754]/30">
              <span className="material-symbols-outlined text-[#ffb786] mr-2 text-lg">Thermometer</span>
              <span className="font-mono text-[10px] text-[#ffb786] tracking-widest font-bold uppercase">THERMAL_MANAGEMENT_CORE</span>
            </div>
            <div className="p-6 grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <span className="font-mono text-[9px] text-[#8c909f] tracking-widest uppercase font-bold opacity-60">RADIATOR_FLOW_VELOCITY</span>
                <div className="font-mono text-2xl text-[#e1e2ec] font-bold">92.4 <span className="text-[12px] text-[#8c909f] font-normal tracking-tighter uppercase ml-1">L/MIN</span></div>
                <div className="h-1.5 bg-[#0b0e15] w-full overflow-hidden rounded-full border border-[#424754]/30">
                  <div className="bg-[#ffb786] h-full shadow-[0_0_8px_#ffb786]" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="space-y-3">
                <span className="font-mono text-[9px] text-[#8c909f] tracking-widest uppercase font-bold opacity-60">VACUUM_THERMAL_DELTA</span>
                <div className="font-mono text-2xl text-[#e1e2ec] font-bold">{(thermalState?.physics?.temperature - 273.15).toFixed(1)} <span className="text-[12px] text-[#8c909f] font-normal tracking-tighter uppercase ml-1">°C</span></div>
                <div className="h-1.5 bg-[#0b0e15] w-full overflow-hidden rounded-full border border-[#424754]/30">
                  <div className="bg-[#4cd7f6] h-full shadow-[0_0_8px_#4cd7f6]" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Heat Dissipation Visualization */}
            <div className="px-6 pb-6">
              <div className="h-24 bg-[#0b0e15]/50 border border-[#424754]/30 rounded-md flex items-end justify-between px-2 py-1 gap-1">
                {[40, 50, 45, 60, 70, 85, 100, 75, 65, 55, 40, 30].map((h, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 transition-all duration-700 ${i === 6 ? 'bg-[#ffb786] shadow-[0_0_12px_#ffb786]' : 'bg-[#ffb786]/20 hover:bg-[#ffb786]/50'}`} 
                    style={{ height: `${h}%`, animation: `pulse-heat ${2 + i * 0.1}s infinite ease-in-out` }} 
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 font-mono text-[9px] text-[#8c909f] tracking-widest font-bold uppercase">
                <span>-15M</span>
                <span>-10M</span>
                <span>-5M</span>
                <span className="text-[#ffb786]">LIVE_TELEMETRY</span>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal Palette Bento Grid */}
        <section className="px-6 pb-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'FAB_HEAD_T', value: '2450°C', status: 'STABLE', color: 'text-[#4cd7f6]' },
            { label: 'VAC_STABILITY', value: '99.99%', status: 'NOMINAL', color: 'text-[#e1e2ec]' },
            { label: 'AXIS_LOCKED', value: 'TRUE', status: 'ACTIVE', color: 'text-[#adc6ff]' },
            { label: 'POWER_LOAD', value: '4.2kW', status: 'OPTIMAL', color: 'text-[#ffb786]' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#1d2027]/50 border border-[#424754]/30 p-5 rounded-lg flex flex-col justify-between aspect-[3/2] shadow-xl hover:bg-[#272a31]/50 transition-colors">
              <span className="font-mono text-[9px] text-[#8c909f] tracking-widest uppercase font-bold">{stat.label}</span>
              <span className={`font-mono text-2xl font-bold ${stat.color} tracking-tighter`}>{stat.value}</span>
              <span className="font-mono text-[10px] text-[#10B981] font-bold tracking-widest">{stat.status}</span>
            </div>
          ))}
        </section>
      </main>

      {/* FAB (Queue Screen) */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#03b5d3] text-[#001f26] rounded-full shadow-[0_0_20px_rgba(3,181,211,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 border-4 border-[#10131a] group">
        <span className="material-symbols-outlined text-[32px] group-hover:rotate-90 transition-transform">Plus</span>
      </button>

      <style>{`
        @keyframes pulse-heat {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.6; transform: scaleY(1.05); }
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

export default OrbitalFabricationQueueEngineeringOS_11f164;
