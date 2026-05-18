import React, { useState } from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const KinematicsDashboardEngineeringOS_d2a34e = () => {
  const { 
    motionState, 
    updateMotion, 
    spatialState, 
    roboticsState,
    thermalState,
    osStatus
  } = useEngineeringStore();

  const [activePoseMode, setActivePoseMode] = useState<'FORWARD' | 'INVERSE'>('FORWARD');

  const handleJointChange = (id: string, angle: number) => {
    const newJoints = motionState.joints.map((j: any) => 
      j.id === id ? { ...j, angle } : j
    );
    updateMotion({ joints: newJoints });
  };

  return (
    <div className="bg-[#0B0F14] text-[#e1e2ec] font-['Inter'] flex flex-col h-screen overflow-hidden selection:bg-cyan-500/30">
      {/* TopAppBar */}
      <header className="bg-[#0b0e15]/80 backdrop-blur-xl border-b border-[#424754]/30 flex justify-between items-center px-6 h-16 z-50 shrink-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#adc6ff]">precision_manufacturing</span>
          <h1 className="font-mono text-[11px] font-bold text-[#adc6ff] tracking-[0.2em] uppercase">KINETIC_OS // DYNAMICS_LAYER</h1>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 items-center">
            <span className="font-mono text-[11px] tracking-widest text-[#adc6ff] cursor-pointer hover:text-white transition-colors">MECHANISMS</span>
            <span className="font-mono text-[11px] tracking-widest text-[#c2c6d6] cursor-pointer hover:text-white transition-colors">ROBOTS</span>
            <span className="font-mono text-[11px] tracking-widest text-[#c2c6d6] cursor-pointer hover:text-white transition-colors">AIRCRAFT</span>
          </div>
          <span className="material-symbols-outlined text-[#adc6ff] cursor-pointer p-2 hover:bg-[#32353c]/50 rounded">settings_input_component</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* NavigationDrawer (Left) */}
        <nav className="w-64 border-r border-[#424754]/20 bg-[#0B0F14] hidden md:flex flex-col gap-1 py-6 shrink-0">
          <div className="px-6 mb-6">
            <h2 className="font-mono text-[11px] text-[#4cd7f6] tracking-widest font-bold">SYSTEM_INDEX</h2>
          </div>
          {[
            { label: 'Telemetry', icon: 'Activity', active: false },
            { label: 'Kinematics', icon: 'Share2', active: true },
            { label: 'AI_Stability', icon: 'Brain', active: false },
            { label: 'Command_Log', icon: 'terminal', active: false },
            { label: 'System_Sync', icon: 'sync_alt', active: false },
          ].map((item) => (
            <a 
              key={item.label}
              className={`flex items-center gap-3 px-6 py-3 font-mono text-xs uppercase tracking-tighter transition-all ${
                item.active 
                  ? 'bg-[#4d8eff]/10 text-[#adc6ff] border-l-2 border-[#adc6ff] font-bold' 
                  : 'text-[#8c909f] hover:text-[#e1e2ec] hover:bg-[#272a31]/30'
              }`} 
              href="#"
            >
              <span className="material-symbols-outlined text-sm">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Main Workspace */}
        <main className="flex-1 flex flex-col overflow-hidden bg-[#0B0F14] relative">
          {/* Grid Background Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(#4cd7f6 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
          />
          
          <div className="flex-1 grid grid-cols-12 grid-rows-6 gap-px bg-[#424754]/20 h-full overflow-hidden">
            {/* 3D Viewport Area */}
            <div className="col-span-12 md:col-span-8 row-span-4 bg-[#0b0e15] relative overflow-hidden group">
              <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                <div className="bg-[#1d2027]/80 border border-[#424754]/30 px-3 py-1.5 rounded flex items-center gap-3 backdrop-blur-md">
                  <span className={`w-2 h-2 rounded-full ${osStatus?.physicsSync ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  <span className="font-mono text-[10px] tracking-widest">LIVE_JNT_STREAM</span>
                </div>
              </div>

              <img 
                alt="Robotic Arm Kinematics" 
                className="w-full h-full object-cover opacity-40 grayscale brightness-[0.4] contrast-125" 
                src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBV5paIp7eABNuwh_Usr5ujVP34u4vzTjqzhxVFuzo3bxrDOiRsqtDmcxLNPOCsz7AInazuGziRiWyc8KTmPYt7ZKeY-Q_lRQpAj_GYbt7Ia6y4lAJfjgwocWswOUnjVHNN6SwBH7LHaSb41Lntwq71ZShDe5UhbAFbMUb9f9SoRWBHLSKOfbT8wTUoK7yFmll_OpeTh8-3Vj2-YZC-qrMH3wWMcO6q15XwQBVY5V83eh0eLYmfe-bYiWTPik1bXj5c6JzwogqBD1tG" 
              />
              
              {/* HUD Elements */}
              <div className="absolute inset-0 pointer-events-none border border-[#adc6ff]/10 m-6" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#adc6ff]/5 rounded-full animate-pulse" />
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[#4cd7f6] text-[10px] tracking-widest font-bold">VECTOR_MAGNITUDE: {roboticsState?.kinematics?.velocity_mps?.toFixed(3) || '0.000'} m/s</span>
                  <div className="w-64 h-1 bg-[#191b23] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#4cd7f6] transition-all duration-300 shadow-[0_0_8px_rgba(76,215,246,0.5)]" 
                      style={{ width: `${(roboticsState?.kinematics?.velocity_mps || 0) * 50}%` }}
                    />
                  </div>
                </div>
                <div className="flex gap-2 pointer-events-auto">
                  <button className="bg-[#1d2027] border border-[#424754]/50 p-2 hover:bg-[#4d8eff]/20 transition-colors rounded">
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                  </button>
                  <button className="bg-[#1d2027] border border-[#424754]/50 p-2 hover:bg-[#4d8eff]/20 transition-colors rounded">
                    <span className="material-symbols-outlined text-sm">3d_rotation</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Control Panel (Right Side) */}
            <div className="col-span-12 md:col-span-4 row-span-6 bg-[#0b0e15] border-l border-[#424754]/30 flex flex-col">
              <div className="h-16 border-b border-[#424754]/30 px-6 flex items-center justify-between shrink-0">
                <h3 className="font-mono text-[11px] text-[#e1e2ec] tracking-widest font-bold">MOTION_CONTROLS</h3>
                <span className="material-symbols-outlined text-[#8c909f] text-sm">SlidersHorizontal</span>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
                {/* Joint Sliders (Dynamic from motionState) */}
                {motionState?.joints?.map((joint: any) => (
                  <div key={joint.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] text-[#8c909f] uppercase tracking-widest">{joint.id}</span>
                      <span className="font-mono text-xs text-[#adc6ff] font-bold">{joint.angle.toFixed(1)}°</span>
                    </div>
                    <input 
                      className="w-full accent-[#adc6ff] h-1 bg-[#32353c] rounded-full cursor-pointer" 
                      type="range"
                      min="-180"
                      max="180"
                      step="0.1"
                      value={joint.angle}
                      onChange={(e) => handleJointChange(joint.id, parseFloat(e.target.value))}
                    />
                  </div>
                ))}

                {/* Pose Viewer Section (Bound to spatialState) */}
                <div className="bg-[#1a2330]/50 backdrop-blur-md p-4 rounded border border-[#424754]/50 space-y-4 shadow-xl">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-[10px] text-[#4cd7f6] tracking-widest font-bold">ACTIVE_POSE_DATA</span>
                    <span className="px-2 py-0.5 bg-[#03b5d3]/10 text-[#4cd7f6] font-mono text-[9px] border border-[#03b5d3]/30 font-bold uppercase">
                      {spatialState?.status || 'IDLE'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                    {[
                      { label: 'POS_X', value: spatialState?.transforms?.position?.x?.toFixed(4) || '0.0000' },
                      { label: 'POS_Y', value: spatialState?.transforms?.position?.y?.toFixed(4) || '0.0000' },
                      { label: 'POS_Z', value: spatialState?.transforms?.position?.z?.toFixed(4) || '0.0000' },
                      { label: 'QUAT_W', value: spatialState?.transforms?.rotation?.w?.toFixed(4) || '1.0000' },
                    ].map((metric) => (
                      <div key={metric.label} className="flex flex-col">
                        <span className="text-[9px] text-[#8c909f] font-mono tracking-widest">{metric.label}</span>
                        <span className="text-sm font-mono text-[#e1e2ec] font-bold tracking-tight">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Forward/Inverse Toggle */}
                <div className="grid grid-cols-2 gap-px bg-[#424754]/50 p-px rounded overflow-hidden shadow-lg mt-4">
                  <button 
                    className={`py-3 font-mono text-[10px] tracking-widest font-bold transition-all ${
                      activePoseMode === 'FORWARD' ? 'bg-[#adc6ff] text-[#001a42]' : 'bg-[#1d2027] text-[#8c909f] hover:bg-[#32353c]'
                    }`}
                    onClick={() => setActivePoseMode('FORWARD')}
                  >
                    FORWARD
                  </button>
                  <button 
                    className={`py-3 font-mono text-[10px] tracking-widest font-bold transition-all ${
                      activePoseMode === 'INVERSE' ? 'bg-[#adc6ff] text-[#001a42]' : 'bg-[#1d2027] text-[#8c909f] hover:bg-[#32353c]'
                    }`}
                    onClick={() => setActivePoseMode('INVERSE')}
                  >
                    INVERSE
                  </button>
                </div>

                {/* AI Stability Log */}
                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ffb4ab] text-sm">AlertTriangle</span>
                    <span className="font-mono text-[10px] text-[#ffb4ab] tracking-widest font-bold">AI_INTELLIGENCE_REPORT</span>
                  </div>
                  <div className="bg-[#93000a]/10 border border-[#93000a]/30 p-3 rounded flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono text-[#ffdad6] italic underline decoration-[#ffb4ab]/30">DETECTED: "OSCILLATION_RISK"</span>
                    <p className="text-[10px] font-mono text-[#ffdad6] opacity-80 leading-relaxed">
                      Phase lag in {motionState?.joints?.[0]?.id || 'MASTER'} joint detected. Recommendation: Increase dampening to 0.42.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-[#424754]/30 bg-[#0B0F14]/50 backdrop-blur-sm">
                <button 
                  className="w-full bg-[#03b5d3] text-[#001f26] font-mono text-[11px] font-bold py-4 rounded-md flex items-center justify-center gap-3 active:scale-[0.98] transition-all shadow-[0_0_15px_rgba(3,181,211,0.3)] hover:shadow-[0_0_25px_rgba(3,181,211,0.5)]"
                >
                  <span className="material-symbols-outlined text-lg">play_arrow</span>
                  EXECUTE SEQUENCE
                </button>
              </div>
            </div>

            {/* Telemetry Widgets (Bottom Rows) */}
            <div className="col-span-12 md:col-span-8 row-span-2 grid grid-cols-3 gap-px bg-[#424754]/20 border-t border-[#424754]/30">
              {/* Velocity Field */}
              <div className="bg-[#0b0e15] p-6 border-r border-[#424754]/20 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-mono text-[10px] text-[#8c909f] tracking-widest font-bold">VELOCITY_FIELD</h4>
                  <span className="material-symbols-outlined text-[#4cd7f6] text-sm">insights</span>
                </div>
                <div className="flex-1 flex items-end gap-[2px]">
                  {[40, 60, 85, 70, 45, 30, 50, 90, 55, 75, 40, 65].map((h, i) => (
                    <div 
                      key={i}
                      className="flex-1 bg-[#4cd7f6]/40 transition-all duration-500 hover:bg-[#4cd7f6]/80" 
                      style={{ height: `${h}%`, animation: `pulse-bar ${1.5 + i * 0.1}s infinite ease-in-out` }} 
                    />
                  ))}
                </div>
              </div>

              {/* System Health */}
              <div className="bg-[#0b0e15] p-6 border-r border-[#424754]/20 flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-mono text-[10px] text-[#8c909f] tracking-widest font-bold">CORE_THERMALS</h4>
                  <span className="material-symbols-outlined text-[#ffb786] text-sm">Thermometer</span>
                </div>
                <div className="space-y-4 flex-1 justify-center flex flex-col">
                  <div>
                    <div className="flex justify-between font-mono text-[10px] mb-1.5 uppercase">
                      <span className="text-[#8c909f]">PROCESSOR_01</span>
                      <span className="text-[#ffb786] font-bold">{(thermalState?.physics?.temperature - 273.15 + 12).toFixed(1)}°C</span>
                    </div>
                    <div className="w-full h-1 bg-[#1d2027] rounded-full overflow-hidden">
                      <div className="h-full bg-[#ffb786] shadow-[0_0_8px_rgba(255,183,134,0.5)]" style={{ width: '42%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-mono text-[10px] mb-1.5 uppercase">
                      <span className="text-[#8c909f]">SERVO_DRIVE</span>
                      <span className="text-[#adc6ff] font-bold">{(thermalState?.physics?.temperature - 273.15).toFixed(1)}°C</span>
                    </div>
                    <div className="w-full h-1 bg-[#1d2027] rounded-full overflow-hidden">
                      <div className="h-full bg-[#adc6ff] shadow-[0_0_8px_rgba(173,198,255,0.5)]" style={{ width: '31%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Network/Latency */}
              <div className="bg-[#0b0e15] p-6 flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-mono text-[10px] text-[#8c909f] tracking-widest font-bold">LINK_STABILITY</h4>
                  <span className="material-symbols-outlined text-[#adc6ff] text-sm">wifi_tethering</span>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-3">
                  {[
                    { label: 'LATENCY', value: '12ms', color: '#adc6ff' },
                    { label: 'PACKET_LOSS', value: '0.00%', color: '#adc6ff' },
                    { label: 'BANDWIDTH', value: '1.2GB/s', color: '#adc6ff' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center font-mono text-[10px] border-b border-[#424754]/10 pb-1">
                      <span className="text-[#8c909f] tracking-wider">{stat.label}:</span>
                      <span className="font-bold" style={{ color: stat.color }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse-bar {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.1); }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0b0e15;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #424754;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

export default KinematicsDashboardEngineeringOS_d2a34e;
