'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const KnowledgeDetailEngineeringOS_2ae6d2 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#4d8eff] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          <h1 className="font-mono text-[14px] font-black text-[#4d8eff] tracking-tighter uppercase italic">QUANTUM_COMMAND_OS_v2.0.4</h1>
        </div>
        <div className="flex items-center gap-12">
          <nav className="hidden lg:flex items-center gap-12">
            {['RETRIEVAL_CORE', 'DIAGNOSTICS'].map((nav) => (
              <button key={nav} className={`font-mono text-[10px] font-black uppercase tracking-[0.2em] italic transition-all ${nav === 'RETRIEVAL_CORE' ? 'text-[#4cd7f6] drop-shadow-[0_0_10px_#4cd7f6]' : 'text-[#8c909f] hover:text-[#e1e2ec]'}`}>
                {nav}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-4 border-l border-[#424754]/50 pl-12">
            <span className="material-symbols-outlined text-[#8c909f] hover:text-[#4d8eff] cursor-pointer transition-colors text-[20px]">settings_input_component</span>
          </div>
        </div>
      </header>

      {/* Main Container Shell */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/50 flex flex-col hidden lg:flex shrink-0 z-20 shadow-2xl">
          <div className="p-8">
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">SYSTEM_NAV</span>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            {[
              { label: 'Telemetry', icon: 'BarChart3', active: false },
              { label: 'Qubit_Map', icon: 'Share2', active: true },
              { label: 'Circuit_Editor', icon: 'account_tree', active: false },
              { label: 'Stability_Log', icon: 'history_edu', active: false },
              { label: 'System_Health', icon: 'monitor_heart', active: false },
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
        <main className="flex-1 overflow-y-auto bg-[#10131a] relative p-8 lg:p-12 space-y-10 custom-scrollbar">
          {/* Dossier Header Section */}
          <header className="flex flex-wrap justify-between items-end gap-8 border-b-2 border-[#424754]/30 pb-8 group/header">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[#4cd7f6]">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>folder_special</span>
                <span className="font-mono text-[12px] font-black uppercase tracking-[0.4em] italic">RETRIEVED_DOSSIER: ENGR-SIM-4492-X</span>
              </div>
              <h1 className="font-mono text-5xl font-black text-[#e1e2ec] italic tracking-tighter uppercase drop-shadow-2xl transition-all group-hover/header:translate-x-2">
                Cryogenic_Coupler_Efficiency_Report
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 px-6 py-2 bg-[#10B981]/10 border-2 border-[#10B981]/30 rounded-2xl font-mono text-[10px] font-black text-[#10B981] animate-pulse uppercase tracking-widest italic shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981]"></span>
                PHYSICS_VALIDATED
              </div>
              <button className="bg-[#1d2027] border-2 border-[#424754]/50 text-[#e1e2ec] font-mono text-[11px] font-black uppercase tracking-widest italic px-8 h-12 rounded-2xl hover:border-[#4cd7f6]/50 hover:bg-[#272a31] transition-all flex items-center gap-3 shadow-xl">
                <span className="material-symbols-outlined text-[18px]">download</span>
                EXPORT_RAW
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* AI Explainability */}
            <section className="lg:col-span-12 bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] overflow-hidden shadow-2xl group/explain hover:border-[#4cd7f6]/30 transition-all">
              <header className="h-10 px-8 bg-[#0b0e15]/50 flex justify-between items-center border-b border-[#424754]/50">
                <span className="font-mono text-[10px] text-[#4cd7f6] font-black uppercase tracking-[0.3em] italic flex items-center gap-3">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>Brain</span>
                  AI_EXPLAINABILITY
                </span>
                <span className="material-symbols-outlined text-[#8c909f] text-[18px] cursor-pointer">keyboard_arrow_up</span>
              </header>
              <div className="p-10 flex flex-col md:flex-row gap-12 items-start bg-gradient-to-br from-transparent to-[#4cd7f6]/5 transition-all group-hover/explain:to-[#4cd7f6]/10">
                <div className="flex-1">
                  <p className="font-mono text-[14px] text-[#8c909f] font-black italic leading-relaxed uppercase tracking-tighter">
                    Document <span className="text-[#4d8eff]">ENGR-SIM-4492-X</span> identifies a 14.2% discrepancy in thermal dissipation between theoretical models and real-time telemetry. AI analysis suggests the variance correlates with <span className="text-[#ffb786]">Sub-zero Flux Fluctuations</span> observed in Project Ares. Relevance score: <span className="text-[#4d8eff]">0.982/1.000</span>.
                  </p>
                </div>
                <div className="w-full md:w-80 space-y-4 bg-[#0b0e15] p-8 rounded-[30px] border-2 border-[#424754]/50 shadow-inner group-hover/explain:border-[#4cd7f6]/20 transition-all">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60">SIM_CONFIDENCE</span>
                    <span className="font-mono text-[13px] text-[#4d8eff] font-black italic tracking-tighter">94.8%</span>
                  </div>
                  <div className="h-2 w-full bg-[#1d2027] rounded-full overflow-hidden border border-[#424754]/30">
                    <div className="h-full bg-[#4d8eff] shadow-[0_0_15px_#4d8eff] transition-all duration-1000" style={{ width: '94.8%' }}></div>
                  </div>
                  <div className="flex justify-between font-mono text-[9px] font-black italic opacity-40 uppercase tracking-tighter">
                    <span>0.00</span>
                    <span>1.00</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Comparison View */}
            <section className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#424754]/30 rounded-[50px] overflow-hidden border-2 border-[#424754]/50 shadow-2xl shadow-black/50">
              {/* Variant A */}
              <div className="bg-[#1d2027] p-10 space-y-8 group/varA hover:bg-[#272a31] transition-all">
                <header className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-[#4d8eff] font-black uppercase tracking-[0.3em] italic px-4 py-1.5 bg-[#4d8eff]/10 border-2 border-[#4d8eff]/30 rounded-xl">VARIANT_A: CURRENT</span>
                  <span className="font-mono text-[10px] text-[#8c909f] font-black italic opacity-40">2023.10.12_08:00</span>
                </header>
                <div className="bg-[#0b0e15] p-6 rounded-[35px] border-2 border-[#424754]/50 group-hover/varA:border-[#4d8eff]/30 transition-all shadow-inner">
                  <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-40 mb-3 block px-4">HEAT_MAP_VISUALIZATION</span>
                  <div className="relative h-48 bg-[#10131a] rounded-[25px] overflow-hidden group/imgA">
                    <img className="w-full h-full object-cover opacity-60 mix-blend-screen scale-110 group-hover/imgA:scale-125 transition-transform duration-[10000ms]" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDtitJicTkXNhudFf0GTsXDW46Sgoan7nTgTpLh9K5Sro7tDAn3wyTEHK7jHHup1E5f-RdMSYZsiFdYeu7NkqRn71tt7mH1kg3vZsDRczFtFY-SW2Sey4JxYu-FZZh75RBjVFdJXRdTcSAv19E7MIWu66tSuSxSawKipK-B48dlK4df5IS7HPLq2rbMhlVHHTjQA_U1QmL-247U2eryUQtrFxlaV-TZ48Y_jUYPTVs3X8f5VAv3AXCnMJxKfELr3eUzMKGYTbd9f21w" alt="Heat Map A" />
                    <div className="absolute inset-0 border border-[#4d8eff]/20 pointer-events-none"></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                      <div className="w-full h-px bg-[#4d8eff]"></div>
                      <div className="h-full w-px bg-[#4d8eff] absolute"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 px-4">
                  {[
                    { l: 'FLUX_STABILITY', v: '98.22%', c: 'text-[#4d8eff]' },
                    { l: 'LOAD_RATIO', v: '1.442 GHZ', c: 'text-[#4d8eff]' },
                    { l: 'TEMP_MAX', v: '12.4K', c: 'text-[#ef4444]' },
                  ].map(stat => (
                    <div key={stat.l} className="flex justify-between items-center group/stat transition-all">
                      <span className="font-mono text-[11px] text-[#8c909f] font-black italic uppercase tracking-tighter opacity-60 group-hover/stat:opacity-100">{stat.l}:</span>
                      <span className={`font-mono text-[13px] font-black italic tracking-tight ${stat.c}`}>{stat.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Variant B */}
              <div className="bg-[#1d2027] p-10 space-y-8 group/varB hover:bg-[#272a31] transition-all">
                <header className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic px-4 py-1.5 bg-[#424754]/30 border-2 border-[#424754]/50 rounded-xl opacity-60">VARIANT_B: HISTORICAL</span>
                  <span className="font-mono text-[10px] text-[#8c909f] font-black italic opacity-40">2023.09.28_14:30</span>
                </header>
                <div className="bg-[#0b0e15] p-6 rounded-[35px] border-2 border-[#424754]/50 group-hover/varB:border-[#8c909f]/30 transition-all shadow-inner">
                  <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-40 mb-3 block px-4">HEAT_MAP_VISUALIZATION</span>
                  <div className="relative h-48 bg-[#10131a] rounded-[25px] overflow-hidden group/imgB grayscale contrast-125">
                    <img className="w-full h-full object-cover opacity-30 mix-blend-screen scale-110 group-hover/imgB:scale-125 transition-transform duration-[10000ms]" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBf8CU-8JYEhpFRj3mnUPcaaM-KhhLghLgaBsietVclHUxncaAxRYXKHx3Df_p6S-pcLq33rIgE5krqORrtHnHCnmCgGzNlzGvxtIX8JIgzkNONK_gAGw9LP3Tqm3dywjq_yL2aESKJg9UcqqNc_Y4RcwSI_JmXiuG9zADUnPPytf_CSBs1Qh6Q7JQ3ke7vdY4DLtEBAO1JX66oH80B1FxgoJPn9LhNOMJO_FQMVREsM6NhQ8YP9LS-XV-NfV2k6QQiLlD9W5AWd0kY" alt="Heat Map B" />
                  </div>
                </div>
                <div className="space-y-3 px-4">
                  {[
                    { l: 'FLUX_STABILITY', v: '92.10%', c: 'text-[#e1e2ec]' },
                    { l: 'LOAD_RATIO', v: '1.210 GHZ', c: 'text-[#e1e2ec]' },
                    { l: 'TEMP_MAX', v: '22.8K', c: 'text-[#e1e2ec]' },
                  ].map(stat => (
                    <div key={stat.l} className="flex justify-between items-center group/stat transition-all opacity-60 hover:opacity-100">
                      <span className="font-mono text-[11px] text-[#8c909f] font-black italic uppercase tracking-tighter">{stat.l}:</span>
                      <span className={`font-mono text-[13px] font-black italic tracking-tight ${stat.c}`}>{stat.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Simulation Log Stream */}
            <section className="lg:col-span-4 bg-[#1d2027] border-2 border-[#424754]/50 rounded-[40px] flex flex-col overflow-hidden shadow-2xl group/logs hover:border-[#4d8eff]/30 transition-all min-h-[400px]">
              <header className="h-10 px-8 bg-[#0b0e15]/50 flex items-center border-b border-[#424754]/50 shrink-0">
                <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.3em] italic">SIMULATION_LOG_STREAM</span>
              </header>
              <div className="flex-1 p-8 font-mono text-[11px] space-y-2 overflow-y-auto custom-scrollbar bg-[#0b0e15]/50 group-hover:bg-[#0b0e15]/20 transition-all">
                {[
                  { id: '001', tag: '[INIT]', msg: 'SYSTEM_READY...', color: 'text-[#4cd7f6]' },
                  { id: '002', tag: '[EXEC]', msg: 'FETCH_DATA_PACKET_ID: 0x992F', color: 'text-[#4cd7f6]' },
                  { id: '003', tag: '[LOAD]', msg: 'COUP_EFF_COEF = 0.88721', color: 'text-[#4cd7f6]' },
                  { id: '004', tag: '[WARN]', msg: 'THERMAL_THRESHOLD_APPROACHING', color: 'text-[#ffb786]' },
                  { id: '005', tag: '[INFO]', msg: 'RE-CALIBRATING_SENSORS...', color: 'text-[#4cd7f6]' },
                  { id: '006', tag: '[DONE]', msg: 'PARITY_CHECK_COMPLETE', color: 'text-[#4cd7f6]' },
                  { id: '007', tag: '[EXEC]', msg: 'VAL_CHECKSUM: AB44-C29X', color: 'text-[#4cd7f6]' },
                ].map(log => (
                  <div key={log.id} className="flex gap-6 group/line hover:bg-[#4cd7f6]/5 px-2 rounded transition-colors">
                    <span className="opacity-30 font-black shrink-0">{log.id}</span>
                    <span className={`${log.color} font-black shrink-0 italic tracking-widest`}>{log.tag}</span>
                    <span className="text-[#8c909f] font-black uppercase tracking-tighter truncate">{log.msg}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-[#0b0e15] border-t border-[#424754]/50 shrink-0">
                <div className="flex items-center gap-4 bg-[#1d2027] px-6 py-3 rounded-2xl border border-[#424754]/50 focus-within:border-[#4cd7f6] transition-all shadow-inner">
                  <div className="w-1.5 h-4 bg-[#4cd7f6] animate-pulse"></div>
                  <input className="bg-transparent border-none focus:ring-0 text-[#4cd7f6] font-mono text-[12px] w-full font-black italic uppercase placeholder-[#4cd7f6]/30 tracking-tight" placeholder="COMMAND_ENTRY..." type="text" />
                </div>
              </div>
            </section>

            {/* Technical Specs Panel */}
            <section className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { l: 'TOTAL_QUERY_TIME', v: '0.024s', color: 'text-[#4cd7f6]' },
                { l: 'DATA_INTEGRITY', v: '0.9999', color: 'text-[#4d8eff]' },
                { l: 'PEER_NODES', v: '12_ACTIVE', color: 'text-[#e1e2ec]' },
                { l: 'CACHE_STATUS', v: 'L3_HOT', color: 'text-[#ffb786]' },
              ].map((spec) => (
                <div key={spec.l} className="bg-[#1d2027] border-2 border-[#424754]/50 p-8 rounded-[35px] shadow-2xl transition-all hover:scale-105 hover:border-[#4cd7f6]/20 group/spec">
                  <div className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50 mb-3 group-hover/spec:opacity-100 transition-opacity">{spec.l}</div>
                  <div className={`font-mono text-2xl font-black italic tracking-tighter ${spec.color} drop-shadow-xl`}>{spec.v}</div>
                </div>
              ))}
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

export default KnowledgeDetailEngineeringOS_2ae6d2;
