'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const CADPLMPartBrowserEngineeringOS_6055e8 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] min-h-screen w-full flex flex-col overflow-x-hidden relative selection:bg-[#4cd7f6]/30 pb-20">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 sticky top-0 shadow-2xl">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
          <h1 className="font-mono text-[14px] font-black text-[#adc6ff] tracking-tighter uppercase italic">ANTIGRAVITY_OS</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 px-4 py-1.5 bg-[#191b23] border border-[#424754]/50 rounded-xl shadow-inner">
            <span className="font-mono text-[9px] text-[#adc6ff] font-black uppercase tracking-widest italic opacity-50">GPU: 94% | SIM: ACTIVE</span>
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]"></div>
          </div>
        </div>
      </header>

      {/* Main Content Workspace */}
      <main className="flex-1 flex flex-col animate-in fade-in duration-700">
        {/* 3D Viewer Panel */}
        <section className="relative w-full aspect-Camera bg-[#0b0e15] overflow-hidden border-b border-[#424754]/50 group/viewer">
          <img alt="Jet Engine Turbine Component" className="w-full h-full object-cover opacity-50 mix-blend-screen grayscale group-hover/viewer:grayscale-0 transition-all duration-1000 scale-110 group-hover/viewer:scale-100" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBJgg7zYPqJhqkvmongpIUfY124IsXeZ4tL7VHxe7Pbna6IcQ7i8bL1Q2-kcepCCSHRNaqw95LXwCbsuTVTjsANuDu9MneDWcYMVDGJ1e59rVUKYfEJPomlDEREQKqcEkeBUYMw_bgtPiBbqcbaRJCuqusbhmDmDqfceXHMjkXK-EdttBxCRm7eobp0V0wyVAInLnMipFRVc18CT_8bup1yPOzInAVqpJMJk2X0Cjb5FS7wke2gohzW8WDhIEaq1dpX0MX7FH_kdaLZ" />
          
          {/* Overlay HUD Controls */}
          <div className="absolute inset-0 p-8 pointer-events-none flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-[#1d2027]/80 backdrop-blur-xl border border-[#424754]/50 p-5 rounded-2xl flex flex-col gap-2 shadow-2xl pointer-events-auto group/coord">
                <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.2em] italic">VIEWPORT_A1</span>
                <span className="font-mono text-[11px] text-[#8c909f] font-black italic opacity-60">COORD: X24.2 Y12.8 Z0.0</span>
              </div>
              <button className="bg-[#1d2027]/80 backdrop-blur-xl border border-[#424754]/50 px-6 py-3 rounded-2xl flex items-center gap-3 text-[#e1e2ec] hover:border-[#4cd7f6]/50 transition-all pointer-events-auto shadow-2xl group/btn">
                <span className="material-symbols-outlined text-[20px] text-[#4cd7f6] group-hover/btn:rotate-45 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>settings_input_component</span>
                <span className="font-mono text-[11px] font-black uppercase tracking-widest italic">EXPLODED_VIEW</span>
              </button>
            </div>
            
            <div className="flex justify-center gap-8 pointer-events-auto">
              <div className="flex items-center gap-6 bg-[#1d2027]/80 backdrop-blur-xl border border-[#424754]/50 px-8 py-4 rounded-full shadow-2xl">
                <button className="material-symbols-outlined text-[#4cd7f6] hover:scale-125 transition-transform">rotate_left</button>
                <button className="material-symbols-outlined text-[#4cd7f6] hover:scale-125 transition-transform">zoom_in</button>
                <div className="w-[1px] h-6 bg-[#424754]/50"></div>
                <button className="material-symbols-outlined text-[#4cd7f6] hover:scale-125 transition-transform">3d_rotation</button>
                <button className="material-symbols-outlined text-[#4cd7f6] hover:scale-125 transition-transform">layers</button>
              </div>
            </div>
          </div>
        </section>

        {/* Metadata Panel */}
        <section className="max-w-6xl mx-auto w-full p-8 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center bg-[#1d2027]/50 backdrop-blur-xl p-8 rounded-3xl border border-[#424754]/50 shadow-2xl gap-6">
            <div className="space-y-2">
              <h2 className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic opacity-50">COMPONENT_ID</h2>
              <p className="font-mono text-3xl font-black text-[#4cd7f6] italic tracking-tighter">TBN-9022-X4</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#03b5d3]/10 text-[#4cd7f6] border border-[#4cd7f6]/30 font-mono text-[11px] font-black italic uppercase shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_8px_#4cd7f6]"></span>
                REV_D - STABLE
              </span>
            </div>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1d2027]/50 backdrop-blur-xl p-8 rounded-3xl border border-[#424754]/50 shadow-2xl group hover:border-[#4cd7f6]/30 transition-all">
              <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic block mb-4 opacity-50">MATERIAL_SPEC</span>
              <p className="font-mono text-2xl font-black text-[#e1e2ec] italic group-hover:text-[#4cd7f6] transition-colors">Ti-6Al-4V</p>
              <span className="font-mono text-[10px] text-[#8c909f] font-black italic mt-4 block uppercase opacity-40">GRADE 5 TITANIUM</span>
            </div>
            <div className="bg-[#1d2027]/50 backdrop-blur-xl p-8 rounded-3xl border border-[#424754]/50 shadow-2xl group hover:border-[#4cd7f6]/30 transition-all">
              <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic block mb-4 opacity-50">NET_WEIGHT</span>
              <p className="font-mono text-2xl font-black text-[#e1e2ec] italic group-hover:text-[#4cd7f6] transition-colors">42.84 kg</p>
              <span className="font-mono text-[10px] text-[#8c909f] font-black italic mt-4 block uppercase opacity-40">TOLERANCE ±0.05</span>
            </div>
          </div>

          {/* Lifecycle History */}
          <div className="bg-[#1d2027]/50 backdrop-blur-xl p-8 rounded-3xl border border-[#424754]/50 shadow-2xl space-y-8">
            <header className="flex items-center justify-between border-b border-[#424754]/30 pb-4">
              <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">LIFECYCLE_TIMELINE</span>
              <span className="material-symbols-outlined text-[#8c909f] text-[20px]">history</span>
            </header>
            <div className="relative flex flex-col gap-10 pl-8">
              <div className="absolute left-3.5 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#4cd7f6] via-[#4cd7f6]/50 to-[#424754]/20"></div>
              
              {[
                { label: 'DESIGN_FINALIZED', date: '2023.10.24 // ARCHIVE_V4', active: true },
                { label: 'SIMULATION_PASSED', date: '2023.11.02 // STRESS_THERMAL', active: true },
                { label: 'MANUFACTURING_QUEUED', date: 'PENDING_ALLOCATION', active: false },
              ].map((step, idx) => (
                <div key={step.label} className="relative flex items-center gap-6 group/step">
                  <div className={`absolute left-[-26px] w-4 h-4 rounded-full border-2 ${step.active ? 'bg-[#4cd7f6] border-[#4cd7f6] shadow-[0_0_12px_#4cd7f6]' : 'bg-[#1d2027] border-[#424754]'} transition-all`}></div>
                  <div className="space-y-1">
                    <p className={`font-mono text-[11px] font-black uppercase tracking-widest italic ${step.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{step.label}</p>
                    <p className="font-mono text-[12px] text-[#8c909f] font-black italic opacity-60">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Cluster */}
          <div className="flex flex-col md:flex-row gap-6 pt-4">
            <button className="flex-1 h-16 bg-[#4cd7f6] text-[#003640] rounded-2xl font-mono text-[12px] font-black uppercase tracking-[0.2em] italic flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_50px_-10px_rgba(76,215,246,0.4)] group">
              <span className="material-symbols-outlined text-[24px] group-hover:animate-spin">model_training</span>
              SEND TO SIMULATION
            </button>
            <button className="flex-1 h-16 border-2 border-[#424754] bg-[#1d2027]/50 text-[#e1e2ec] rounded-2xl font-mono text-[12px] font-black uppercase tracking-[0.2em] italic flex items-center justify-center gap-4 hover:bg-[#1d2027] transition-all">
              <span className="material-symbols-outlined text-[24px]">view_in_ar</span>
              OPEN IN XR
            </button>
          </div>
        </section>
      </main>

      {/* Polish: HUD scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>
    </div>
  );
};

export default CADPLMPartBrowserEngineeringOS_6055e8;
