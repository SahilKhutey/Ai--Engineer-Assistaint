'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const CoordinateFieldEngineEngineeringOS_3f113e = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#4d8eff] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
          <h1 className="font-mono text-[14px] font-black text-[#4d8eff] tracking-tighter uppercase italic">KINETIC_OS // DYNAMICS_LAYER</h1>
        </div>
        <div className="flex items-center gap-12">
          <nav className="hidden md:flex gap-8">
            {['TELEMETRY', 'TRANSFORMS', 'FIELD_MODES'].map((item, idx) => (
              <button key={item} className={`font-mono text-[10px] font-black uppercase tracking-[0.2em] italic transition-all hover:text-[#4d8eff] ${idx === 0 ? 'text-[#4d8eff]' : 'text-[#8c909f]'}`}>
                {item}
              </button>
            ))}
          </nav>
          <button className="material-symbols-outlined text-[#8c909f] hover:text-[#e1e2ec] transition-colors p-2 rounded-xl">settings_input_component</button>
        </div>
      </header>

      {/* Main Container Shell */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/50 flex flex-col hidden md:flex shrink-0 z-20 shadow-2xl">
          <div className="p-8">
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">SYSTEM_INDEX</span>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'Telemetry', icon: 'Activity', active: true },
              { label: 'Kinematics', icon: 'Share2', active: false },
              { label: 'AI_Stability', icon: 'Brain', active: false },
              { label: 'Command_Log', icon: 'terminal', active: false },
              { label: 'System_Sync', icon: 'sync_alt', active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest italic transition-all group ${
                  item.active 
                    ? 'bg-[#4d8eff]/10 text-[#4d8eff] border border-[#4d8eff]/30 shadow-lg shadow-[#4d8eff]/5' 
                    : 'text-[#8c909f] hover:text-[#e1e2ec] hover:bg-[#1d2027]'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] transition-transform group-hover:scale-110 ${item.active ? 'text-[#4d8eff]' : 'text-[#8c909f]'}`}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 bg-[#0B0F14] relative p-4 gap-4 overflow-y-auto custom-scrollbar">
          {/* Bento Grid LayoutGrid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1">
            {/* Left Panel: Matrix Controls & Transforms */}
            <section className="lg:col-span-4 flex flex-col gap-4">
              {/* Rotation Matrix Panel */}
              <div className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] overflow-hidden shadow-2xl flex flex-col group/matrix">
                <header className="h-12 px-8 bg-[#0b0e15]/50 flex items-center justify-between border-b border-[#424754]/50">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">ROTATION_MATRIX_Rz(θ)</span>
                  <div className="flex gap-2">
                    <span className="material-symbols-outlined text-[#8c909f] text-[16px]">remove</span>
                    <span className="material-symbols-outlined text-[#8c909f] text-[16px]">close</span>
                  </div>
                </header>
                <div className="p-8 flex flex-col gap-8">
                  <div className="grid grid-cols-3 gap-2 font-mono text-[11px] text-center italic font-black">
                    {['cos(φ)', '-sin(φ)', '0', 'sin(φ)', 'cos(φ)', '0', '0', '0', '1'].map((term, idx) => (
                      <div key={idx} className="bg-[#0b0e15] p-4 border-2 border-[#424754]/30 rounded-2xl shadow-inner text-[#4cd7f6] group-hover/matrix:border-[#4cd7f6]/30 transition-colors">{term}</div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    <label className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50 ml-4">Rotation Angle (φ)</label>
                    <div className="px-2">
                      <input 
                        className="w-full accent-[#4cd7f6] bg-[#0b0e15] h-2 rounded-full appearance-none shadow-inner border border-[#424754]/50" 
                        type="range" 
                        min="-3.14" 
                        max="3.14" 
                        step="0.01" 
                      />
                    </div>
                    <div className="flex justify-between font-mono text-[10px] font-black italic text-[#4cd7f6] px-4 opacity-60 uppercase tracking-widest">
                      <span>-π</span>
                      <span className="bg-[#4cd7f6]/10 px-3 py-1 rounded-full border border-[#4cd7f6]/30 animate-pulse">0.42 rad</span>
                      <span>+π</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Space Mapping Profiles */}
              <div className="bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] overflow-hidden shadow-2xl flex flex-col flex-1">
                <header className="h-12 px-8 bg-[#0b0e15]/50 flex items-center border-b border-[#424754]/50">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">SPACE_MAPPING_PROFILES</span>
                </header>
                <div className="p-4 flex flex-col gap-2 overflow-y-auto custom-scrollbar flex-1">
                  {[
                    { id: 'CARTESIAN_TO_SPHERICAL', desc: 'Active Transformation Node', active: true },
                    { id: 'CYLINDRICAL_PROJECTION', desc: 'Standby Mode', active: false },
                    { id: 'POLAR_RADIAL_FIELD', desc: 'Disabled', active: false },
                  ].map((profile) => (
                    <div 
                      key={profile.id} 
                      className={`flex items-center justify-between p-6 rounded-[30px] border-2 transition-all cursor-pointer group/profile ${
                        profile.active 
                          ? 'bg-[#4d8eff]/10 border-[#4d8eff]/50 shadow-lg shadow-[#4d8eff]/5' 
                          : 'bg-[#0b0e15] border-[#424754]/50 opacity-60 hover:opacity-100 hover:border-[#adc6ff]/30'
                      }`}
                    >
                      <div className="flex flex-col gap-1">
                        <span className={`font-mono text-[12px] font-black italic uppercase ${profile.active ? 'text-[#4d8eff]' : 'text-[#e1e2ec]'}`}>{profile.id}</span>
                        <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60">{profile.desc}</span>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${profile.active ? 'bg-[#10B981] animate-pulse shadow-[0_0_10px_#10B981]' : 'bg-[#424754]'}`}></div>
                    </div>
                  ))}
                </div>
                <div className="p-8 border-t border-[#424754]/50">
                  <button className="w-full bg-[#4d8eff] text-[#002e6a] py-5 rounded-[30px] font-mono text-[11px] font-black uppercase tracking-widest italic shadow-[0_15px_30px_-10px_rgba(77,142,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group/init">
                    <span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform duration-500">add_circle</span>
                    INITIALIZE TRANSFORM
                  </button>
                </div>
              </div>
            </section>

            {/* Center Panel: 3D Viewport */}
            <section className="lg:col-span-8 flex flex-col gap-4">
              <div className="relative bg-[#0b0e15] border-2 border-[#424754]/50 rounded-[50px] flex-1 min-h-[500px] overflow-hidden group/viewport cursor-crosshair shadow-2xl">
                {/* HUD Overlays */}
                <div className="absolute top-8 left-8 p-8 bg-[#10131a]/80 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[30px] shadow-2xl z-10 space-y-4 animate-in slide-in-from-left duration-700">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] text-[#4d8eff] font-black uppercase tracking-[0.3em] italic">FIELD_INTENSITY</span>
                    <span className="font-mono text-2xl font-black text-[#e1e2ec] italic tracking-tighter">14.82 Tesla</span>
                    <div className="w-full bg-[#0b0e15] h-2 rounded-full overflow-hidden mt-2 shadow-inner border border-[#424754]/20">
                      <div className="bg-[#4d8eff] w-[72%] h-full shadow-[0_0_15px_#4d8eff] transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 flex flex-col gap-4 items-end z-10 animate-in slide-in-from-bottom duration-1000">
                  <div className="flex gap-3">
                    {['Camera', '3d_rotation', 'grid_on'].map((icon) => (
                      <button key={icon} className="w-12 h-12 flex items-center justify-center bg-[#10131a]/80 backdrop-blur-xl border-2 border-[#424754]/50 rounded-2xl text-[#8c909f] hover:text-[#4d8eff] hover:border-[#4d8eff]/50 transition-all shadow-xl active:scale-90">
                        <span className="material-symbols-outlined text-[20px]">{icon}</span>
                      </button>
                    ))}
                  </div>
                  <div className="bg-[#10131a]/80 backdrop-blur-xl border-2 border-[#424754]/50 px-6 py-2 rounded-full font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic shadow-2xl">
                    FPS: 144 // TRI: 1.2M // FRM: 0.002ms
                  </div>
                </div>

                {/* Simulation Viewport */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    alt="3D Field Engine Viewport" 
                    className="w-full h-full object-cover opacity-60 mix-blend-screen scale-110 group-hover/viewport:scale-100 transition-all duration-[5000ms]" 
                    src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDn6yMw8Ep5CZ5N4KReBzPwmaWd5RKb-bAC48TitZg_I8llPulCG1KyLoutoJiNePXvC3GSOzV2FDkPEn8YC-4Zh5ELRGOb6DInZy0ehuItbqHp1su4VO_7DyNgTEww2eAtLY_n4fRaicLmY6fotiTiwtW42pveO0a9SvvtypEla37VFNEHh9OpcTNmyg_HTTll1eucRmoC5B_ocpux5oVAtsc-GlU6Abrg1fSkoBBwWWgodKK3SzxI8G-Xu1pciEVWGaA2uBYWtbBB" 
                  />
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4d8eff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                  
                  {/* SVG Axis Overlay */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 animate-pulse duration-[3000ms]" viewBox="0 0 1000 1000">
                    <line x1="500" y1="500" x2="800" y2="300" stroke="#EF4444" strokeWidth="3" /> {/* X-Axis */}
                    <line x1="500" y1="500" x2="500" y2="100" stroke="#10B981" strokeWidth="3" /> {/* Y-Axis */}
                    <line x1="500" y1="500" x2="200" y2="700" stroke="#4d8eff" strokeWidth="3" /> {/* Z-Axis */}
                  </svg>
                </div>

                {/* Viewport Header */}
                <header className="absolute top-0 right-0 h-12 px-8 flex items-center gap-8 bg-[#10131a]/50 backdrop-blur-xl border-l border-b border-[#424754]/50 rounded-bl-[30px] font-mono text-[10px] font-black uppercase tracking-[0.2em] italic z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6] animate-pulse"></div>
                    <span className="text-[#e1e2ec]">FLUID_VELOCITY_ISO</span>
                  </div>
                  <div className="w-px h-4 bg-[#424754]/50"></div>
                  <span className="text-[#8c909f]">RENDER: VULKAN_1.2</span>
                </header>
              </div>

              {/* Bottom Telemetry Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-in slide-in-from-bottom duration-700">
                {[
                  { l: 'Linear Velocity', v: '24.5', u: 'm/s', c: 'text-[#4cd7f6]' },
                  { l: 'Angular Accel', v: '±1.08', u: 'rad/s²', c: 'text-[#adc6ff]' },
                  { l: 'Mass Tensor', v: '412.0', u: 'kg·m²', c: 'text-[#e1e2ec]' },
                  { l: 'Flux Divergence', v: '0.002', u: '∇·B', c: 'text-[#ffb4ab]' },
                ].map((metric) => (
                  <div key={metric.l} className="bg-[#1d2027] border-2 border-[#424754]/50 p-6 rounded-[30px] flex flex-col gap-2 shadow-2xl hover:border-[#adc6ff]/30 transition-all">
                    <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">{metric.l}</span>
                    <div className="flex items-baseline gap-2">
                      <span className={`font-mono text-2xl font-black italic tracking-tighter ${metric.c}`}>{metric.v}</span>
                      <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase italic opacity-40">{metric.u}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
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

export default CoordinateFieldEngineEngineeringOS_3f113e;
