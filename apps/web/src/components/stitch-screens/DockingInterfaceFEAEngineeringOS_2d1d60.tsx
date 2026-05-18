'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const DockingInterfaceFEAEngineeringOS_2d1d60 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] min-h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
          <h1 className="font-mono text-[14px] font-black text-[#adc6ff] tracking-tighter uppercase italic">KINETIC_OS // DYNAMICS_LAYER</h1>
        </div>
        <div className="flex items-center gap-12">
          <button className="material-symbols-outlined text-[#8c909f] hover:text-[#e1e2ec] transition-colors p-2 rounded-xl">settings_input_component</button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-8 space-y-8 overflow-y-auto custom-scrollbar animate-in fade-in duration-700">
        {/* Collision Vector Schematic */}
        <section className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] relative overflow-hidden h-[300px] flex flex-col shadow-2xl group/viewport">
          <header className="h-10 bg-[#1d2027] px-8 flex items-center justify-between border-b border-[#424754]/50 shrink-0">
            <span className="font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-[0.3em] italic">Collision_Vector_Schematic</span>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_10px_#4cd7f6]"></div>
              <span className="font-mono text-[10px] text-[#4cd7f6] font-black italic">LIVE_FEED</span>
            </div>
          </header>
          <div className="flex-1 relative flex items-center justify-center overflow-hidden">
            {/* Vector Grid LayoutGrid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#202B3C 1px, transparent 1px), linear-gradient(90deg, #202B3C 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <img className="w-64 h-64 object-contain opacity-60 filter grayscale brightness-125 contrast-125 scale-110 group-hover/viewport:scale-100 transition-all duration-[2000ms]" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDH2u6K5PAd-3hQkt7OZPp1PHHnUjtLtV9-Hc_AfIxGsHuxGLTbXVZOlt39xxKgA2hVXF_8cbE97AmWYrTO6bcC4JFbhOnLIUNV2-3v-OteZpcIHhM3cM3RhtZRLXJD9s81CazZ_e_x4WpcQeoD83pjWi-SD5w9-5z4GQthTWLTivnKyG6aAdkkUPMkq14si2NUmZZUXyEMsumLySANmm-zN0eCxXI1wkClmMn11Njkz_cAoZix9CCOYN_8R24FSrnV21t0UNsnnUYX" alt="Spacecraft Docking" />
            
            {/* Overlay HUD Data */}
            <div className="absolute top-10 left-10 space-y-3 z-20">
              {['X: +0.024m', 'Y: -0.009m', 'Z: +1.280m'].map((coord) => (
                <div key={coord} className="bg-[#10131a]/80 backdrop-blur-md px-3 py-1 border border-[#4cd7f6]/30 rounded-lg font-mono text-[11px] text-[#4cd7f6] font-black italic shadow-xl">
                  {coord}
                </div>
              ))}
            </div>
            <div className="absolute bottom-10 right-10 z-20">
              <div className="bg-[#10131a]/80 backdrop-blur-md px-4 py-2 border border-[#ffb786]/30 rounded-xl font-mono text-[11px] text-[#ffb786] font-black italic shadow-xl uppercase tracking-widest">
                VELOCITY: 0.12 m/s
              </div>
            </div>

            {/* Center Crosshair */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="w-16 h-16 border-2 border-[#4cd7f6]/30 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-2 h-2 bg-[#4cd7f6] rounded-full shadow-[0_0_15px_#4cd7f6]"></div>
              </div>
              <div className="absolute w-px h-24 bg-[#4cd7f6]/20"></div>
              <div className="absolute h-px w-24 bg-[#4cd7f6]/20"></div>
            </div>
          </div>
        </section>

        {/* Interface Load Meters */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { label: 'Interface_Torque', unit: 'N·m', value: '1,240.4', progress: 64, color: 'bg-[#4cd7f6]', shadow: 'shadow-[0_0_20px_rgba(76,215,246,0.4)]' },
            { label: 'Structural_Load', unit: 'Newtons', value: '8,922', progress: 42, color: 'bg-[#ffb786]', shadow: 'shadow-[0_0_20px_rgba(255,183,134,0.4)]' },
          ].map((meter) => (
            <div key={meter.label} className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[30px] p-8 shadow-2xl group/meter transition-all hover:border-[#adc6ff]/30">
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">{meter.label}</span>
                <span className="font-mono text-[10px] text-[#4cd7f6] font-black italic">{meter.unit}</span>
              </div>
              <div className="flex items-end gap-8 h-20">
                <div className="w-4 bg-[#0b0e15] h-full rounded-full overflow-hidden relative shadow-inner border border-[#424754]/30">
                  <div className={`absolute bottom-0 left-0 w-full ${meter.color} ${meter.shadow} transition-all duration-1000`} style={{ height: `${meter.progress}%` }}></div>
                </div>
                <div className="flex-1 font-mono text-4xl font-black text-[#e1e2ec] italic tracking-tighter drop-shadow-xl">
                  {meter.value}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Structural Health Checklist */}
        <section className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] shadow-2xl overflow-hidden group/checks">
          <header className="h-10 bg-[#1d2027] px-8 flex items-center border-b border-[#424754]/50 shrink-0">
            <span className="font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-[0.3em] italic">Latch_Mechanism_Status</span>
          </header>
          <div className="divide-y divide-[#424754]/30">
            {[
              { label: 'Soft-Capture_Petals_Deployed', status: 'NOMINAL', icon: 'check_circle', color: 'text-[#4cd7f6]', fill: true },
              { label: 'Radial_Latch_Alignment', status: 'NOMINAL', icon: 'check_circle', color: 'text-[#4cd7f6]', fill: true },
              { label: 'Hard-Capture_Interface_Seq', status: 'PENDING', icon: 'hourglass_empty', color: 'text-[#ffb786]', fill: false },
              { label: 'Umbilical_Data_Bridge', status: 'STANDBY', icon: 'radio_button_unchecked', color: 'text-[#8c909f]', fill: false },
            ].map((check) => (
              <div key={check.label} className={`flex items-center justify-between px-8 py-6 transition-all hover:bg-[#4cd7f6]/5 group/row cursor-crosshair ${check.status === 'PENDING' ? 'bg-[#ffb786]/5' : ''}`}>
                <div className="flex items-center gap-6">
                  <span className={`material-symbols-outlined ${check.color} text-[24px]`} style={{ fontVariationSettings: check.fill ? "'FILL' 1" : "'FILL' 0" }}>{check.icon}</span>
                  <span className="font-mono text-[11px] text-[#e1e2ec] font-black italic uppercase tracking-tighter group-hover/row:text-[#4cd7f6] transition-colors">{check.label}</span>
                </div>
                <span className={`font-mono text-[11px] font-black italic ${check.color}`}>{check.status}</span>
              </div>
            ))}
          </div>
        </section>

        {/* AI Reasoning Log */}
        <section className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[40px] shadow-2xl overflow-hidden group/ai">
          <header className="h-12 bg-[#adc6ff]/10 px-8 flex items-center justify-between border-b border-[#adc6ff]/20 shrink-0">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">Brain</span>
              <span className="font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-[0.2em] italic">Structural_Load_Path_Analysis</span>
            </div>
            <span className="font-mono text-[10px] text-[#adc6ff] opacity-40 italic">v4.02 // KINETIC-AI</span>
          </header>
          <div className="p-8 font-mono text-[11px] font-black italic space-y-6 text-[#8c909f] leading-relaxed max-h-[300px] overflow-y-auto custom-scrollbar">
            <div className="flex gap-4">
              <span className="text-[#adc6ff] shrink-0">[14:22:01]</span>
              <p>Detecting initial contact on petal segment A-3. Energy dissipation dampers engaged at 45% capacity. Transferring kinetic load to primary frame longitudinal struts.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#adc6ff] shrink-0">[14:22:05]</span>
              <p>Finite Element Analysis (FEA) confirms stress distribution is within <span className="text-[#4cd7f6]">±0.04%</span> of predicted model. No localized deformation detected at bulkhead interface points.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-[#ffb786] shrink-0">[14:22:08]</span>
              <p>Initiating soft-capture sequence. AI suggesting 200ms delay in latch closure to account for minor angular deviation on Z-axis.</p>
            </div>
          </div>
          <footer className="px-8 py-4 bg-[#0b0e15]/50 border-t border-[#424754]/30 flex justify-between items-center">
            <span className="font-mono text-[9px] text-[#4cd7f6] font-black uppercase tracking-widest italic animate-pulse">LOG_STREAM_ACTIVE</span>
            <div className="flex gap-2">
              <div className="w-1 h-1 bg-[#4cd7f6]"></div>
              <div className="w-1 h-1 bg-[#4cd7f6]/40"></div>
              <div className="w-1 h-1 bg-[#4cd7f6]/40"></div>
            </div>
          </footer>
        </section>

        {/* System Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
          <button className="bg-[#1d2027] border-2 border-[#424754] text-[#e1e2ec] py-6 px-10 rounded-[30px] font-mono text-[12px] font-black uppercase tracking-widest italic flex items-center justify-center gap-4 hover:border-[#ffb4ab] hover:text-[#ffb4ab] active:scale-[0.98] transition-all group/abort">
            <span className="material-symbols-outlined text-[24px] group-hover:rotate-180 transition-transform duration-500">backspace</span>
            ABORT_SEQ
          </button>
          <button className="bg-[#4d8eff] text-[#002e6a] py-6 px-10 rounded-[30px] font-mono text-[12px] font-black uppercase tracking-widest italic flex items-center justify-center gap-4 shadow-[0_15px_30px_-10px_rgba(77,142,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all group/execute">
            <span className="material-symbols-outlined text-[24px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">rocket_launch</span>
            EXECUTE_HARD_CAPTURE
          </button>
        </div>
      </main>

      {/* Global Control Bar */}
      <footer className="h-24 bg-[#10131a] border-t border-[#424754]/50 flex justify-center items-center gap-16 px-12 z-[60] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)] fixed bottom-0 left-0 w-full">
        {[
          { icon: 'play_arrow', active: true },
          { icon: 'pause', active: false },
          { icon: 'stop', active: false },
          { icon: 'emergency_home', active: false },
        ].map((item, idx) => (
          <button key={idx} className={`material-symbols-outlined text-[32px] transition-all hover:scale-125 active:scale-90 ${item.active ? 'text-[#4cd7f6] drop-shadow-[0_0_15px_rgba(76,215,246,0.5)]' : 'text-[#8c909f] opacity-40 hover:opacity-100'}`}>
            {item.icon}
          </button>
        ))}
      </footer>

      {/* Polish: HUD Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>
      <div className="fixed inset-0 pointer-events-none z-[101] bg-[#4cd7f6]/5 mix-blend-overlay opacity-10"></div>

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

export default DockingInterfaceFEAEngineeringOS_2d1d60;
