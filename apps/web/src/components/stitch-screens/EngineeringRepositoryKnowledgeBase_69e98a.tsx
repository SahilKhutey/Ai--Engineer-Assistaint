'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const EngineeringRepositoryKnowledgeBase_69e98a = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  const repositoryEntries = [
    { id: 'PROPULSION_LOG_X7_092', author: 'ENG_SYS_441', cat: 'PROPULSION', catColor: 'text-[#ffb786] bg-[#df7412]/10 border-[#df7412]/30', time: '2024.05.12 14:22:01', status: 'LIVE', active: false },
    { id: 'TENSILE_SPEC_BETA_9', author: 'MAT_SCI_012', cat: 'SPECIFICATION', catColor: 'text-[#adc6ff] bg-[#4d8eff]/10 border-[#4d8eff]/30', time: '2024.05.12 11:05:44', status: 'LIVE', active: true },
    { id: 'NEURAL_ARC_PAPER_V4', author: 'AI_CORE_771', cat: 'RESEARCH', catColor: 'text-[#c2c6d6] bg-[#424754]/20 border-[#424754]/30', time: '2024.05.11 23:59:12', status: 'ARCHIVED', active: false },
    { id: 'THERMAL_SHIELD_FAILURE_ANALYSIS', author: 'EXT_SAFETY_09', cat: 'FAILURE_LOG', catColor: 'text-[#ffb4ab] bg-[#93000a]/10 border-[#93000a]/30', time: '2024.05.11 18:41:20', status: 'CRITICAL', active: false },
    { id: 'KINETIC_DAMPENER_CALIB', author: 'ENG_SYS_441', cat: 'SPECIFICATION', catColor: 'text-[#adc6ff] bg-[#4d8eff]/10 border-[#4d8eff]/30', time: '2024.05.11 12:10:00', status: 'LIVE', active: false },
    { id: 'HYDRAULIC_FLUID_CONDUCTIVITY', author: 'MAT_SCI_012', cat: 'RESEARCH', catColor: 'text-[#c2c6d6] bg-[#424754]/20 border-[#424754]/30', time: '2024.05.10 09:15:33', status: 'ARCHIVED', active: false },
  ];

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#adc6ff]/30">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-[80px] bg-[#191b23] border-r border-[#424754]/30 flex flex-col py-6 shrink-0 z-50">
          <div className="px-4 mb-10 text-center">
            <div className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest opacity-50 mb-1 italic">V4</div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] mx-auto shadow-[0_0_8px_#4cd7f6] animate-pulse"></div>
          </div>
          <nav className="flex-1 flex flex-col items-center gap-6">
            {[
              { icon: 'database', label: 'Repo', active: true },
              { icon: 'menu_book', label: 'Docs', active: false },
              { icon: 'history', label: 'Logs', active: false },
              { icon: 'account_tree', label: 'Graph', active: false },
            ].map((item) => (
              <button 
                key={item.label}
                className={`group relative p-3 rounded-xl transition-all ${item.active ? 'bg-[#03b5d3]/10 text-[#4cd7f6] shadow-[0_0_15px_rgba(76,215,246,0.1)]' : 'text-[#8c909f] hover:text-[#e1e2ec] hover:bg-[#1d2027]'}`}
              >
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                <span className="absolute left-full ml-4 px-3 py-1.5 bg-[#1d2027] border border-[#424754]/50 text-[#e1e2ec] font-mono text-[10px] font-black uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50 shadow-2xl">
                  {item.label}
                </span>
              </button>
            ))}
            <button className="mt-4 p-3 bg-[#4d8eff] text-[#00285d] rounded-xl hover:scale-110 active:scale-95 transition-all shadow-lg group relative">
              <span className="material-symbols-outlined text-[24px]">Plus</span>
              <span className="absolute left-full ml-4 px-3 py-1.5 bg-[#1d2027] border border-[#424754]/50 text-[#e1e2ec] font-mono text-[10px] font-black uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50 shadow-2xl">
                NEW_QUERY
              </span>
            </button>
          </nav>
          <div className="flex flex-col items-center gap-6 mt-auto">
            <button className="text-[#8c909f] hover:text-[#e1e2ec] transition-all">
              <span className="material-symbols-outlined text-[24px]">settings</span>
            </button>
          </div>
        </aside>

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top App Bar */}
          <header className="h-[48px] bg-[#10131a]/80 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 shadow-2xl z-40">
            <div className="flex items-center gap-8">
              <div className="font-mono text-[16px] font-black tracking-tighter text-[#adc6ff] uppercase italic">KNOWLEDGE_BASE_OS</div>
              <div className="h-4 w-[1px] bg-[#424754]"></div>
              <nav className="flex items-center gap-4 font-mono text-[10px] text-[#8c909f] font-bold uppercase tracking-widest italic">
                <span className="hover:text-[#adc6ff] cursor-pointer transition-colors">Root</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="hover:text-[#adc6ff] cursor-pointer transition-colors">Repository</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-[#4cd7f6] border-b-2 border-[#4cd7f6] pb-0.5">Assets</span>
              </nav>
            </div>
            <div className="flex items-center gap-8">
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#8c909f] text-[18px] group-focus-within:text-[#adc6ff] transition-colors">Search</span>
                <input 
                  className="bg-[#0b0e15] border border-[#424754]/50 rounded-xl pl-12 pr-4 py-2 font-mono text-[11px] text-[#e1e2ec] focus:outline-none focus:border-[#adc6ff]/50 focus:ring-1 focus:ring-[#adc6ff]/20 w-80 transition-all shadow-inner" 
                  placeholder="FILTER_ASSETS..." 
                  type="text"
                />
              </div>
              <div className="flex items-center gap-4">
                {['BarChart3', 'Share2', 'settings'].map(icon => (
                  <button key={icon} className="material-symbols-outlined text-[#8c909f] hover:text-[#adc6ff] transition-all text-[22px]">{icon}</button>
                ))}
              </div>
              <div className="w-8 h-8 rounded-full border border-[#adc6ff]/30 overflow-hidden shadow-2xl hover:scale-110 transition-all cursor-pointer">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDPP701RpHJs3zdQ5hS_VxuSwkrgsBWcWCjYQEKxpUWEa82nJEmfF3zsssKtT16X7q9AuE52uxqND6_qL-q3PUffUd5bWm42Ocumv_7Rnm-_sr-He4vV3xSZrWFm5FoNfGi_ZToo9ijCn3GV5s_w-6nC1_uA8kUD2fc_zyfRdrW35n8L1sap3ZYj0PXzvC8cpb_qDsC_F0qfpLApPIbq3NNNceUpz9z_6dgsXzKnSMpNIG6C3M61K8MheLAj7aoMA-YNIKVAzNtVqf_" alt="User" />
              </div>
            </div>
          </header>

          <main className="flex-1 flex overflow-hidden">
            {/* Table View */}
            <section className="flex-1 flex flex-col min-w-0 bg-[#0b0e15] border-r border-[#424754]/30 relative group/table">
              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.01]" style={{ background: 'linear-gradient(to bottom, transparent 50%, #adc6ff 50%)', backgroundSize: '100% 4px' }}></div>
              
              <div className="h-10 flex items-center px-6 bg-[#1d2027]/50 border-b border-[#424754]/30 shrink-0 z-10">
                <div className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.2em] flex items-center gap-3 italic">
                  <span className="material-symbols-outlined text-[16px]">view_list</span>
                  DATAGRID_VIEW: ACTIVE_LAYER
                </div>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar z-10">
                <table className="w-full border-collapse text-left">
                  <thead className="sticky top-0 bg-[#1d2027] z-20 shadow-xl">
                    <tr className="border-b border-[#424754]/50">
                      {['Document Identifier', 'Author ID', 'Category', 'Last RefreshCw', 'Status'].map(h => (
                        <th key={h} className="py-4 px-6 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#424754]/20">
                    {repositoryEntries.map((row) => (
                      <tr 
                        key={row.id}
                        className={`transition-all cursor-pointer group/row ${row.active ? 'bg-[#4d8eff]/5 border-l-2 border-[#adc6ff]' : 'hover:bg-[#1d2027]/50'}`}
                      >
                        <td className="py-4 px-6 font-mono text-[11px] text-[#adc6ff] font-bold italic tracking-tight group-hover/row:translate-x-1 transition-transform">{row.id}</td>
                        <td className="py-4 px-6 font-mono text-[11px] text-[#8c909f] font-medium opacity-80">{row.author}</td>
                        <td className="py-4 px-6">
                          <span className={`px-3 py-1 rounded-lg font-mono text-[9px] font-black uppercase tracking-widest italic border shadow-sm ${row.catColor}`}>
                            {row.cat}
                          </span>
                        </td>
                        <td className="py-4 px-6 font-mono text-[10px] text-[#8c909f] font-medium opacity-60 italic">{row.time}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${
                              row.status === 'LIVE' ? 'bg-[#10b981] text-[#10b981]' : 
                              row.status === 'CRITICAL' ? 'bg-[#ffb4ab] text-[#ffb4ab] animate-pulse' : 
                              'bg-[#424754] text-[#424754] opacity-50'
                            }`}></div>
                            <span className={`font-mono text-[10px] font-black uppercase italic tracking-widest ${
                              row.status === 'LIVE' ? 'text-[#10b981]' : 
                              row.status === 'CRITICAL' ? 'text-[#ffb4ab]' : 
                              'text-[#8c909f] opacity-50'
                            }`}>{row.status}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer Terminal Bar */}
              <div className="h-[40px] bg-[#1d2027]/80 backdrop-blur-md border-t border-[#424754]/50 flex items-center justify-between px-6 shrink-0 z-10">
                <div className="flex items-center gap-8 font-mono text-[10px] text-[#8c909f] font-black italic opacity-70">
                  <span>ENTRIES: 1,024</span>
                  <span>FILTERED: 6</span>
                  <span>LATENCY: 12ms</span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="font-mono text-[10px] font-black uppercase tracking-widest px-4 py-1 border border-[#424754]/50 text-[#8c909f] hover:bg-[#32353c] hover:text-[#e1e2ec] transition-all rounded-lg italic">EXPORT_CSV</button>
                  <button className="font-mono text-[10px] font-black uppercase tracking-widest px-4 py-1 bg-[#4d8eff] text-[#00285d] hover:scale-105 active:scale-95 transition-all rounded-lg italic shadow-lg">BULK_SYNC</button>
                </div>
              </div>
            </section>

            {/* Document Preview Panel */}
            <aside className="w-[450px] bg-[#1d2027] border-l border-[#424754]/50 flex flex-col shrink-0 z-30 group/preview">
              <header className="h-[48px] bg-[#1d2027] border-b border-[#424754]/50 flex items-center justify-between px-6 shrink-0">
                <div className="font-mono text-[10px] text-[#e1e2ec] font-black uppercase tracking-[0.2em] italic">DOCUMENT_PREVIEW</div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-[18px] text-[#8c909f] hover:text-[#adc6ff] cursor-pointer transition-all">open_in_full</span>
                  <span className="material-symbols-outlined text-[18px] text-[#8c909f] hover:text-[#ffb4ab] cursor-pointer transition-all">close</span>
                </div>
              </header>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-10">
                {/* Wireframe Render Card */}
                <div className="relative aspect-square w-full bg-[#0b0e15] border border-[#424754]/50 rounded-2xl overflow-hidden group/viz shadow-2xl">
                  <img 
                    className="w-full h-full object-cover mix-blend-screen opacity-40 group-hover/viz:scale-110 group-hover/viz:opacity-60 transition-all duration-[10000ms] linear" 
                    src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCWd8RVDwO5Spc47_QXxNrPt5Wd8epL8Pz47NG6K5gY0_Hb7IWOi8YnO0hiuvEDAMZiXclOp5GKeY4cFg4L0WiMJeI1lLaRWdQbTuwhedElNMuqj7l8E1qB0Jybg9bd8rOKCdUkA9zvWuEhmsJvQAmX3E8yAuCpojx_VfWsqBfHfPY889l6CO3nvkyzX9Bb5LudJiR6fcE7jX7eqNMtFmN7qsFzEiw0YuMLCEI2tnoDyFdGtGpc778gXzQ7qbd21zf15WQCc6UZQUuO" 
                    alt="Technical Model Preview" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e15] to-transparent opacity-60"></div>
                  <div className="absolute top-6 right-6 flex flex-col gap-2">
                    <span className="px-3 py-1 bg-[#03b5d3]/10 border border-[#4cd7f6]/30 text-[#4cd7f6] font-mono text-[9px] font-black uppercase rounded-lg backdrop-blur-md shadow-lg">LOD: 100%</span>
                    <span className="px-3 py-1 bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] font-mono text-[9px] font-black uppercase rounded-lg backdrop-blur-md shadow-lg">GPU: ACTIVE</span>
                  </div>
                  <div className="absolute bottom-6 left-6 font-mono text-[10px] text-[#4cd7f6] font-black italic opacity-50 uppercase tracking-widest">
                    RENDER_ENGINE: VULKAN_V4
                  </div>
                </div>

                {/* AI Insights Section */}
                <div className="space-y-6">
                  <div className="font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-[0.2em] italic border-b border-[#adc6ff]/20 pb-2">AI_INSIGHTS</div>
                  <div className="space-y-4">
                    <div className="p-6 bg-[#93000a]/5 border border-[#ffb4ab]/20 rounded-2xl shadow-xl transition-all hover:bg-[#93000a]/10">
                      <div className="flex items-center gap-3 text-[#ffb4ab] font-mono text-[10px] font-black mb-3 uppercase tracking-widest italic">
                        <span className="material-symbols-outlined text-[18px]">AlertTriangle</span>
                        FAILURE_POINT_DETECTED
                      </div>
                      <p className="font-mono text-[12px] text-[#e1e2ec] opacity-80 leading-relaxed uppercase italic">
                        Stress concentration at Joint B-12 exceeds safety threshold by 14.2%. Structural integrity compromised under thermal load.
                      </p>
                    </div>
                    <div className="p-6 bg-[#03b5d3]/5 border border-[#4cd7f6]/20 rounded-2xl shadow-xl transition-all hover:bg-[#03b5d3]/10">
                      <div className="flex items-center gap-3 text-[#4cd7f6] font-mono text-[10px] font-black mb-3 uppercase tracking-widest italic">
                        <span className="material-symbols-outlined text-[18px]">link</span>
                        SEMANTIC_CORRELATION
                      </div>
                      <p className="font-mono text-[12px] text-[#e1e2ec] opacity-80 leading-relaxed uppercase italic">
                        Linked to <span className="text-[#adc6ff] hover:underline cursor-pointer">TENSILE_SPEC_BETA_9</span> through shared material ID: TI-6AL-4V.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metadata Table */}
                <div className="space-y-6 bg-[#0b0e15]/40 p-6 rounded-2xl border border-[#424754]/30">
                  <div className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic opacity-60">SYSTEM_METADATA</div>
                  <div className="grid grid-cols-2 gap-y-6 gap-x-8 font-mono">
                    {[
                      { label: 'FILE_TYPE', val: 'PDF / CAD_INTER' },
                      { label: 'CHECKSUM_SHA256', val: 'E92A...BF12' },
                      { label: 'DIMENSIONS', val: '3452x8910 px' },
                      { label: 'STORAGE_NODE', val: 'CLUSTER_ALPHA' },
                    ].map(meta => (
                      <div key={meta.label}>
                        <div className="text-[9px] text-[#8c909f] font-black uppercase mb-1 opacity-50 italic">{meta.label}</div>
                        <div className="text-[11px] text-[#e1e2ec] font-bold italic tracking-tight truncate">{meta.val}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action HUD */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <button className="h-12 bg-[#32353c] border border-[#424754]/50 rounded-xl font-mono text-[10px] font-black text-[#e1e2ec] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#363941] active:scale-95 transition-all shadow-xl italic">
                    <span className="material-symbols-outlined text-[20px]">Download</span>
                    PULL_ASSET
                  </button>
                  <button className="h-12 bg-[#32353c] border border-[#424754]/50 rounded-xl font-mono text-[10px] font-black text-[#e1e2ec] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#363941] active:scale-95 transition-all shadow-xl italic">
                    <span className="material-symbols-outlined text-[20px]">edit</span>
                    FORK_SPEC
                  </button>
                </div>
              </div>
            </aside>
          </main>
        </div>
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

export default EngineeringRepositoryKnowledgeBase_69e98a;
