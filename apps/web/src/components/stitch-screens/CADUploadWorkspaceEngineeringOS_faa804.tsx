'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const CADUploadWorkspaceEngineeringOS_faa804 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
          <h1 className="font-mono text-[14px] font-black text-[#adc6ff] tracking-tighter uppercase italic">ANTIGRAVITY_OS</h1>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 px-4 py-1.5 bg-[#191b23] border border-[#424754]/50 rounded-xl shadow-inner">
            <span className="font-mono text-[9px] text-[#adc6ff] font-black uppercase tracking-widest italic opacity-50">GPU: 94% | SIM: ACTIVE</span>
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]"></div>
          </div>
        </div>
      </header>

      {/* NavigationDrawer & Main Content Shell */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* NavigationDrawer */}
        <aside className="w-64 bg-[#0b0e15] border-r border-[#424754]/50 flex flex-col hidden md:flex shrink-0 z-20">
          <div className="p-6">
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">SYSTEM_CORE</span>
          </div>
          <nav className="flex-1 px-3 space-y-1">
            {[
              { label: 'Projects', icon: 'folder_open', active: false },
              { label: 'Simulations', icon: 'model_training', active: false },
              { label: 'AI Agents', icon: 'smart_toy', active: false },
              { label: 'Digital Twin', icon: 'precision_manufacturing', active: false },
              { label: 'Manufacturing', icon: 'factory', active: true },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest italic transition-all group ${
                  item.active 
                    ? 'bg-[#03b5d3]/10 text-[#4cd7f6] border border-[#4cd7f6]/30 shadow-lg shadow-[#4cd7f6]/5' 
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

        {/* Main Workspace */}
        <main className="flex-1 overflow-y-auto bg-[#10131a] relative custom-scrollbar">
          <div className="p-10 max-w-7xl mx-auto space-y-10 pb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Section Header */}
            <header className="space-y-2">
              <span className="font-mono text-[11px] text-[#4cd7f6] font-black uppercase tracking-[0.3em] italic">SUBSYSTEM: MANUFACTURING_CORE / INGESTION</span>
              <h2 className="font-mono text-4xl font-black text-[#e1e2ec] tracking-tighter uppercase italic drop-shadow-xl">CAD Geometry Workspace</h2>
            </header>

            {/* Bento Grid LayoutGrid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Geometry Ingestion Zone (Primary) */}
              <div className="lg:col-span-8 space-y-10">
                {/* Drop Zone */}
                <section className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 p-16 rounded-[40px] flex flex-col items-center justify-center text-center gap-10 min-h-[450px] relative overflow-hidden group/drop shadow-2xl transition-all hover:border-[#4cd7f6]/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4cd7f6]/5 via-transparent to-transparent opacity-0 group-hover/drop:opacity-100 transition-opacity pointer-events-none"></div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#4cd7f6]/20 rounded-full blur-[60px] animate-pulse opacity-0 group-hover/drop:opacity-100 transition-opacity"></div>
                    <div className="w-24 h-24 rounded-[32px] bg-[#10131a] border-2 border-[#424754] flex items-center justify-center text-[#4cd7f6] shadow-2xl relative z-10 group-hover/drop:-translate-y-2 transition-transform duration-500">
                      <span className="material-symbols-outlined text-5xl">upload_file</span>
                    </div>
                  </div>

                  <div className="space-y-4 relative z-10">
                    <h3 className="font-mono text-xl font-black text-[#e1e2ec] italic tracking-tight uppercase group-hover/drop:text-[#4cd7f6] transition-colors">DRAG & DROP GEOMETRY</h3>
                    <p className="font-mono text-[11px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60">SUPPORTED: .STEP, .IGES, .OBJ, .STL (MAX 2GB)</p>
                  </div>

                  <button className="px-10 py-4 bg-[#1d2027] border-2 border-[#424754] text-[#adc6ff] rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest italic hover:bg-[#424754]/50 hover:border-[#adc6ff]/50 transition-all relative z-10">
                    BROWSE LOCAL CLUSTER
                  </button>

                  {/* Progress Indicator */}
                  <div className="w-full max-w-md space-y-4 relative z-10 pt-4">
                    <div className="flex justify-between font-mono text-[10px] text-[#4cd7f6] font-black italic uppercase tracking-widest">
                      <span>NEURAL_RECONSTRUCTION_PHASE</span>
                      <span>68%</span>
                    </div>
                    <div className="h-3 w-full bg-[#0b0e15] border border-[#424754]/50 rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-[#4cd7f6] shadow-[0_0_20px_#4cd7f6] rounded-full relative" style={{ width: '68%' }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Validation Checklist */}
                <section className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[32px] overflow-hidden shadow-2xl">
                  <header className="h-10 bg-[#1d2027] px-6 flex items-center justify-between border-b border-[#424754]/50 relative z-10">
                    <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">VALIDATION_CHECKLIST</span>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#ffb4ab]/20 border border-[#ffb4ab]/50"></div>
                      <div className="w-2 h-2 rounded-full bg-[#4cd7f6]/20 border border-[#4cd7f6]/50"></div>
                    </div>
                  </header>
                  <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    {[
                      { label: 'GEOMETRY INTEGRITY', status: 'PASS [HASH_MATCH]', icon: 'check_circle', active: true },
                      { label: 'MANIFOLD CHECK', status: 'CLOSED_VOLUME: TRUE', icon: 'check_circle', active: true },
                      { label: 'WALL THICKNESS', status: 'COMPUTING...', icon: 'RefreshCw', active: false, pulse: true },
                    ].map((item) => (
                      <div key={item.label} className={`flex items-center gap-4 p-5 bg-[#0b0e15] border-2 rounded-2xl transition-all ${item.active ? 'border-[#4cd7f6]/20' : 'border-[#424754]/30'}`}>
                        <span className={`material-symbols-outlined text-[20px] ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'} ${item.pulse ? 'animate-spin' : ''}`}>
                          {item.icon}
                        </span>
                        <div className="flex flex-col gap-1">
                          <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-tight italic">{item.label}</span>
                          <span className={`font-mono text-[9px] font-black italic uppercase ${item.active ? 'text-[#4cd7f6]/70' : 'text-[#8c909f]'}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Metadata & Config (Secondary) */}
              <aside className="lg:col-span-4 space-y-10">
                <section className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 rounded-[32px] overflow-hidden shadow-2xl flex flex-col h-full group/config">
                  <header className="h-10 bg-[#1d2027] px-6 flex items-center border-b border-[#424754]/50 shrink-0">
                    <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">PART_METADATA</span>
                  </header>
                  <div className="p-8 space-y-8 flex-1 overflow-y-auto custom-scrollbar">
                    <div className="space-y-3">
                      <label className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic opacity-50">PART ID</label>
                      <input className="w-full bg-[#0b0e15] border-2 border-[#424754] focus:border-[#4cd7f6] focus:ring-0 text-[#e1e2ec] font-mono text-[12px] font-black italic uppercase rounded-2xl px-6 h-14 transition-all shadow-inner" type="text" defaultValue="AG-7742-X-INGEST" />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic opacity-50">MATERIAL COMPOSITION</label>
                      <div className="relative group/select">
                        <select className="w-full bg-[#0b0e15] border-2 border-[#424754] focus:border-[#4cd7f6] focus:ring-0 text-[#e1e2ec] font-mono text-[12px] font-black italic uppercase rounded-2xl px-6 h-14 appearance-none transition-all shadow-inner">
                          <option>Ti-6Al-4V (Grade 5 Titanium)</option>
                          <option>Al-7075 (Aerospace Aluminum)</option>
                          <option>Inconel 718</option>
                          <option>CFRP (Pre-preg)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-6 top-4 pointer-events-none text-[#8c909f]">expand_more</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic opacity-50">REVISION LEVEL</label>
                      <div className="flex gap-2 p-1 bg-[#0b0e15] rounded-[20px] border-2 border-[#424754] shadow-inner">
                        {['DEV', 'BETA', 'PROD'].map((rev) => (
                          <button key={rev} className={`flex-1 py-3 rounded-[14px] font-mono text-[10px] font-black italic uppercase transition-all ${rev === 'BETA' ? 'bg-[#03b5d3] text-[#001f26] shadow-lg' : 'text-[#8c909f] hover:text-[#e1e2ec] hover:bg-[#1d2027]'}`}>
                            {rev}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8 border-t border-[#424754]/30 space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.2em] italic">PREVIEW_GEN</span>
                        <span className="px-3 py-1 bg-[#4cd7f6]/10 text-[#4cd7f6] text-[9px] font-black italic rounded border border-[#4cd7f6]/30 animate-pulse uppercase tracking-widest">LIVE_FEED</span>
                      </div>
                      <div className="aspect-square w-full bg-[#0b0e15] border-2 border-[#424754] rounded-[24px] overflow-hidden relative shadow-inner group/preview">
                        <img className="w-full h-full object-cover opacity-40 grayscale group-hover/preview:grayscale-0 group-hover/preview:opacity-80 transition-all duration-1000 scale-110 group-hover/preview:scale-100" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCxczXebgZpZp-kzkPXPgeLt4l7L0AGZlUF9XzhN4_K1QRU9rg5K2IGlCDpZmXaUaJhTZUJg32Q9-0UMKsZLMQX1r9zIopp5V4RJxFyUwPAKvJvXMJaIGGbqM5ti1vQLbOQOWGaSpOwmr5YGoKT_bIQKrhmS07o-b5XQ9jkcIXLF0MJLufOrIUiTq_s283xZhjfKQUKmalLkdQQ-uHBKqvufsCnTxF1R_qsnNXm1tFRYqdO8egScdYzuRUyVT8HXbir_HxML4WWd77b" alt="3D CAD Preview" />
                        <div className="absolute inset-0 border-2 border-[#4cd7f6]/10 pointer-events-none transition-all group-hover/preview:border-[#4cd7f6]/30"></div>
                        <div className="absolute bottom-4 left-4 flex gap-2">
                          <div className="bg-[#10131a]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#424754]/50 text-[9px] font-mono text-[#4cd7f6] font-black italic uppercase shadow-xl">X: 142.4mm</div>
                          <div className="bg-[#10131a]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#424754]/50 text-[9px] font-mono text-[#4cd7f6] font-black italic uppercase shadow-xl">Y: 88.1mm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </main>
      </div>

      {/* Footer Actions */}
      <footer className="fixed bottom-0 left-0 md:left-64 right-0 z-[60] bg-[#1d2027]/90 backdrop-blur-xl border-t border-[#424754]/50 px-10 h-24 flex items-center justify-between shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic opacity-50">SYSTEM_HEALTH</span>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_12px_#4cd7f6] animate-pulse"></div>
              <span className="font-mono text-[10px] text-[#4cd7f6] font-black italic uppercase tracking-widest">OPTIMAL_BANDWIDTH</span>
            </div>
          </div>
          <div className="h-10 w-[2px] bg-[#424754]/30"></div>
          <button className="flex items-center gap-3 text-[#8c909f] hover:text-[#e1e2ec] transition-all font-mono text-[10px] font-black uppercase tracking-widest italic group/opt">
            <span className="material-symbols-outlined text-[18px] group-hover/opt:rotate-90 transition-transform">settings</span>
            ADVANCED_OPTIONS
          </button>
        </div>
        <div className="flex items-center gap-6">
          <button className="px-8 py-4 font-mono text-[11px] font-black uppercase tracking-widest italic text-[#e1e2ec] border-2 border-[#424754] rounded-2xl hover:bg-[#ffb4ab]/10 hover:border-[#ffb4ab]/30 hover:text-[#ffb4ab] transition-all">
            ABORT_INGESTION
          </button>
          <button className="px-12 py-4 bg-[#4cd7f6] text-[#003640] font-black font-mono text-[11px] uppercase tracking-widest italic rounded-2xl shadow-[0_15px_30px_-10px_rgba(76,215,246,0.5)] hover:scale-[1.05] active:scale-[0.95] transition-all">
            INITIALIZE_PROCESSING
          </button>
        </div>
      </footer>

      {/* Polish: Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
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

export default CADUploadWorkspaceEngineeringOS_faa804;
