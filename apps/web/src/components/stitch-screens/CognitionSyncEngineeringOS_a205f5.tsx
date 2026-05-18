'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const CognitionSyncEngineeringOS_a205f5 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const dataStreamLines = [
    { text: 'CALCULATING: σ = P * r / t + S_eff', color: 'text-[#e1e2ec]/40' },
    { text: 'IF (stress_total > yield_allowance) { RUN optimization_loop_v4 }', color: 'text-[#4cd7f6]/80' },
    { text: 'CHECK: ASTM_A516_GRADE_70_PROPERTIES', color: 'text-[#e1e2ec]/40' },
    { text: 'VALIDATING_VECTOR_MAPPING [442, 901, 211, 004]', color: 'text-[#adc6ff]' },
    { text: 'DERIVING: ∂u/∂t + (u·∇)u = -1/ρ ∇p + ν∇²u', color: 'text-[#e1e2ec]/40' },
    { text: 'ISO_12100:2010_RISK_ASSESSMENT_PASS', color: 'text-[#e1e2ec]/40' },
    { text: 'TENSOR_RANK_CHECK: 4th_ORDER_SYMMETRIC', color: 'text-[#e1e2ec]/40' },
    { text: 'INTEGRATING_SYSTEM_THERMODYNAMICS', color: 'text-[#4cd7f6]/60' },
    { text: 'ASME_BPVC_VIII_1_UG-27_CALC', color: 'text-[#e1e2ec]/40' },
    { text: 'P = (S * E * t) / (R + 0.6 * t)', color: 'text-[#e1e2ec]/40' },
    { text: 'WAITING_FOR_INTERRUPT_SIGNAL...', color: 'text-[#e1e2ec]/20' },
    { text: 'RECURSIVE_VALIDATION_ACTIVE', color: 'text-[#e1e2ec]/20' },
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
          {['DIAGNOSTICS', 'COGNITION', 'LOGS'].map((item, i) => (
            <button key={item} className={`font-mono text-[10px] font-black uppercase tracking-widest h-[48px] px-2 transition-all ${i === 1 ? 'text-[#adc6ff] border-b-2 border-[#adc6ff] italic' : 'text-[#8c909f] hover:text-[#e1e2ec] hover:bg-[#32353c]/50'}`}>
              {item}
            </button>
          ))}
        </nav>
        <button className="material-symbols-outlined text-[#8c909f] hover:text-[#adc6ff] transition-all text-[22px]">settings_input_component</button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#191b23] border-r border-[#424754]/30 hidden lg:flex flex-col py-6 shrink-0 z-40">
          <div className="px-6 mb-8">
            <h2 className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.2em] italic opacity-50">SYSTEM_NAV</h2>
          </div>
          <nav className="flex flex-col space-y-1">
            {[
              { label: 'Telemetry', icon: 'BarChart3' },
              { label: 'Qubit_Map', icon: 'Share2' },
              { label: 'Circuit_Editor', icon: 'account_tree', active: true },
              { label: 'Stability_Log', icon: 'history_edu' },
              { label: 'System_Health', icon: 'monitor_heart' },
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
        </aside>

        {/* Main Content Workspace */}
        <main className="flex-1 relative overflow-hidden bg-[#0b0f14] flex flex-col p-[1px] gap-[1px] bg-[#202b3c]/30 group">
          {/* HUD Status Bar */}
          <div className="h-10 bg-[#1d2027] border-b border-[#424754]/50 flex items-center justify-between px-6 shrink-0 z-10">
            <div className="flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6] animate-pulse"></div>
              <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.2em] italic">ACTIVE_REASONING_CORE</span>
            </div>
            <div className="flex gap-8 font-mono text-[10px] text-[#8c909f] font-black italic uppercase tracking-widest">
              <span>UPTIME: 00:04:12:88</span>
              <span>LATENCY: 4.2ms</span>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-12 gap-[1px] overflow-hidden">
            {/* Centerpiece: Neural Network Visualization */}
            <section className="col-span-12 lg:col-span-8 bg-[#0b0e15] relative group/viz overflow-hidden">
              <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#4cd7f6 1px, transparent 1px), linear-gradient(90deg, #4cd7f6 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>
              
              <div className="absolute top-10 left-10 z-20 max-w-lg">
                <h1 className="font-mono text-5xl font-black text-[#e1e2ec] tracking-tighter italic leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                  SYNTHESIZING_<br/>ENGINEERING_LOGIC
                </h1>
              </div>

              <img 
                className="w-full h-full object-cover opacity-50 grayscale group-hover/viz:grayscale-0 group-hover/viz:scale-110 transition-all duration-[10000ms] ease-linear" 
                src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuAzV3Kk-KAGKFguzJPyweLl0OIMhc7F4rRE-tLV4L-iT87GdydQW4rWBs3XShmSoGfSFh42C8iKqiYUXhHc46CqPOtJ_zBz_PsNbYZm-j1rYArtGOwuljkWJHu4RvobZwAyc3JjmljkeBRRqT-wXDeTIla3Ved7cG0jfHOfr85-HWt1FLwve-L-lT3dInIx1UhFjATUqu1s8xDbmDuvRcVJqEGiQzJV-Ujt8yYau0OJ92RwrJ6JlIcr4oPiDj8KolDxQpCbix-O_yma" 
                alt="Neural Reasoning" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e15] to-transparent opacity-80"></div>

              <div className="absolute bottom-10 left-10 flex flex-col gap-3 z-20">
                <div className="px-6 py-2 bg-[#03b5d3]/10 border border-[#4cd7f6]/30 rounded-xl backdrop-blur-md shadow-2xl">
                  <span className="font-mono text-[11px] text-[#4cd7f6] font-black uppercase tracking-widest italic">VALIDATING_ASME_SEC_VIII</span>
                </div>
                <div className="px-6 py-2 bg-[#4d8eff]/10 border border-[#4d8eff]/30 rounded-xl backdrop-blur-md shadow-2xl">
                  <span className="font-mono text-[11px] text-[#adc6ff] font-black uppercase tracking-widest italic">CROSS_REFERENCING_ISO_9001_STDS</span>
                </div>
              </div>
            </section>

            {/* Right Side: Data Stream & Terminal */}
            <section className="col-span-12 lg:col-span-4 flex flex-col gap-[1px] bg-[#202b3c]/30">
              {/* Stream Panel */}
              <div className="flex-1 bg-[#1d2027]/80 backdrop-blur-xl p-8 flex flex-col gap-4 overflow-hidden relative group/stream">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">ENGINEERING_STREAM</span>
                  <span className="material-symbols-outlined text-[#8c909f] text-[18px] animate-spin-slow">RefreshCw</span>
                </div>
                <div className="flex-1 flex flex-col gap-2 font-mono text-[12px] overflow-hidden uppercase italic">
                  {dataStreamLines.map((line, i) => (
                    <p key={i} className={`${line.color} font-black tracking-tight group-hover/stream:translate-x-1 transition-transform`} style={{ transitionDelay: `${i * 50}ms` }}>
                      {line.text}
                    </p>
                  ))}
                </div>

                {/* Glassmorphic HUD */}
                <div className="absolute bottom-8 right-8 left-8 bg-[#0b0e15]/90 backdrop-blur-2xl border-2 border-[#424754]/50 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:border-[#adc6ff]/50">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-[#4cd7f6] text-[24px] animate-spin">cyclone</span>
                      <span className="font-mono text-[11px] text-[#e1e2ec] font-black uppercase tracking-widest italic">COGNITION_CORE_INITIALIZING</span>
                    </div>
                    <div className="w-full bg-[#1d2027] h-1.5 rounded-full overflow-hidden shadow-inner">
                      <div className="bg-[#4cd7f6] h-full w-3/4 shadow-[0_0_15px_#4cd7f6]"></div>
                    </div>
                    <div className="flex justify-between font-mono text-[10px] text-[#8c909f] font-black italic tracking-widest">
                      <span>74.2% SYNCED</span>
                      <span className="text-[#ffb4ab]">ERR_RATE: 0.00001%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Subsystem Panel */}
              <div className="h-1/3 bg-[#1d2027]/80 backdrop-blur-xl p-8 flex flex-col gap-8 shrink-0">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#adc6ff] text-[24px]">HardDrive</span>
                  <span className="font-mono text-[11px] text-[#adc6ff] font-black uppercase tracking-[0.2em] italic">SUBSYSTEM_ALLO_09</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0b0e15] border border-[#424754]/50 p-6 rounded-2xl shadow-inner group/stat hover:border-[#adc6ff]/30 transition-all">
                    <span className="block font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic mb-2 opacity-50">L3_CACHE</span>
                    <span className="font-mono text-[24px] text-[#e1e2ec] font-black italic tracking-tighter">128 MB</span>
                  </div>
                  <div className="bg-[#0b0e15] border border-[#424754]/50 p-6 rounded-2xl shadow-inner group/stat hover:border-[#ffb4ab]/30 transition-all">
                    <span className="block font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic mb-2 opacity-50">TEMP</span>
                    <span className="font-mono text-[24px] text-[#ffb4ab] font-black italic tracking-tighter">42.8°C</span>
                  </div>
                </div>
                <button className="mt-auto w-full h-12 bg-[#1d2027] border-2 border-[#424754] text-[#e1e2ec] font-mono text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-[#4cd7f6]/10 hover:border-[#4cd7f6] transition-all flex items-center justify-center gap-4 italic group/btn shadow-xl">
                  <span>OVERRIDE_INIT</span>
                  <span className="material-symbols-outlined text-[20px] group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
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

export default CognitionSyncEngineeringOS_a205f5;
