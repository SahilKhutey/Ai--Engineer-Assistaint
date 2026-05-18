'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const ManufacturingResourceLogisticsEngineeringOS_3edafb = () => {
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
      <main className="flex-1 max-w-6xl mx-auto w-full p-8 space-y-8 animate-in fade-in duration-700">
        {/* System Health Banner */}
        <section className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 p-6 rounded-3xl flex justify-between items-center shadow-2xl group">
          <div className="flex items-center gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] shadow-[0_0_12px_#10b981] animate-pulse"></div>
            <span className="font-mono text-[11px] text-[#4cd7f6] font-black uppercase tracking-widest italic">STATION_LOGISTICS_NOMINAL</span>
          </div>
          <span className="font-mono text-[10px] text-[#8c909f] font-black italic opacity-40 uppercase">LC-8842-X</span>
        </section>

        {/* Bento Grid: Inventory & Telemetry */}
        <div className="grid grid-cols-1 gap-8">
          {/* Map View: Drone Proximity */}
          <section className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[400px] group/map relative">
            <header className="h-10 bg-[#1d2027] border-b border-[#424754]/50 flex items-center px-6 shrink-0 relative z-10">
              <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">GEO_SPATIAL_PROXIMITY [DRONE_TRACKER]</span>
            </header>
            <div className="flex-1 relative bg-[#0b0e15] overflow-hidden">
              <img className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale group-hover/map:grayscale-0 group-hover/map:opacity-50 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCwvs-VZLN9OM4NRnqO3Ahpt6CTlBQxcR-KZnL8ghJOEiTM3aAz4-6WYqj1xyf3-F5EVJ7507mJFv2QYSdkxcQVWO2ouHU_yAjWCOjHPg1Id4-BLvMwLCe3tK0OCx9ncLBokOBJbc-SONP8sTDtomJkJpdQDU9CHhUbYK120IyFs8KFdXkqXlovsq3J_1w6YfCK9rwTdqyYsP04ODbeL1EglgOzIoWmEjn6A_CSrb4W8hymbyuhKOMNTuRAKrMne_cFYhIA-jBO8nxZ" alt="Lunar Mining Radio View" />
              
              {/* HUD Overlays */}
              <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(#4cd7f6 1px, transparent 1px), linear-gradient(90deg, #4cd7f6 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#4cd7f6]/20 rounded-full flex items-center justify-center">
                <div className="absolute w-40 h-40 border border-[#4cd7f6]/10 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-[#4cd7f6] rounded-full shadow-[0_0_15px_#4cd7f6]"></div>
              </div>

              {/* Drone Markers */}
              <div className="absolute top-20 right-40 flex flex-col items-center group/drone animate-pulse">
                <span className="material-symbols-outlined text-[#4cd7f6] text-[24px] rotate-45">navigation</span>
                <div className="bg-[#0b0e15]/80 backdrop-blur-md px-3 py-1 rounded border border-[#4cd7f6]/30 mt-2 shadow-xl">
                  <span className="font-mono text-[9px] text-[#4cd7f6] font-black uppercase tracking-widest italic">D-102: IN_TRANSIT</span>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Resource Stockpiles */}
            <section className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-3xl p-8 shadow-2xl space-y-8">
              <header className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">MATERIAL_RESERVES</span>
                <button className="material-symbols-outlined text-[#8c909f] hover:text-[#4cd7f6] transition-all">settings_input_component</button>
              </header>
              <div className="space-y-10">
                {[
                  { label: 'Iron Stockpile', value: '84,200 KG', percent: 84, color: 'bg-[#4cd7f6]', shadow: 'shadow-[0_0_15px_#4cd7f6]' },
                  { label: 'Silica Reserves', value: '31,105 KG', percent: 31, color: 'bg-[#4cd7f6]', shadow: 'shadow-[0_0_15px_#4cd7f6]' },
                  { label: 'Xenon Gas Level', value: '12.4% CRITICAL', percent: 12, color: 'bg-[#ffb4ab]', shadow: 'shadow-[0_0_15px_#ffb4ab]', animate: 'animate-pulse' },
                ].map((item) => (
                  <div key={item.label} className="space-y-3">
                    <div className="flex justify-between font-mono text-[12px] font-black italic">
                      <span className="text-[#e1e2ec] opacity-80 uppercase tracking-tight">{item.label}</span>
                      <span className={item.percent < 20 ? 'text-[#ffb4ab]' : 'text-[#4cd7f6]'}>{item.value}</span>
                    </div>
                    <div className="h-5 bg-[#0b0e15] border border-[#424754]/50 rounded-xl relative overflow-hidden shadow-inner">
                      <div className={`h-full ${item.color} ${item.shadow} ${item.animate || ''} rounded-full transition-all duration-1000`} style={{ width: `${item.percent}%` }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Active Manufacturing Sprints */}
            <section className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-3xl p-8 shadow-2xl space-y-8 flex flex-col">
              <header className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic">ACTIVE_MANUFACTURING</span>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-4 bg-[#4cd7f6] rounded-full"></div>
                  <div className="w-1.5 h-4 bg-[#4cd7f6] rounded-full opacity-40"></div>
                </div>
              </header>
              <div className="flex-1 divide-y divide-[#424754]/30">
                {[
                  { label: 'Hull Segment-A7', queue: '001', status: '72%', rem: '2.4h REM', active: true },
                  { label: 'Coolant Loop Assembly', queue: '002', status: 'STBY', rem: 'RES_LOCK', active: false },
                  { label: 'Thruster Nozzle-B', queue: '003', status: 'WAIT', rem: 'QUEUE', active: false },
                ].map((item) => (
                  <div key={item.label} className="py-6 flex justify-between items-center group cursor-pointer hover:bg-[#1d2027] transition-all px-4 -mx-4 rounded-2xl">
                    <div className="space-y-1">
                      <h3 className="font-mono text-[13px] text-[#e1e2ec] font-black italic group-hover:text-[#4cd7f6] transition-colors">{item.label}</h3>
                      <p className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">Print Queue: {item.queue}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className={`font-mono text-[14px] font-black italic ${item.active ? 'text-[#4cd7f6]' : 'text-[#8c909f]'}`}>{item.status}</p>
                      <p className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-40">{item.rem}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Feedstock Intake Log */}
          <section className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-3xl p-8 shadow-2xl space-y-6">
            <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.2em] italic block">FEEDSTOCK_INTAKE_LOG</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'REGOLITH_722', value: '+140kg', icon: 'database' },
                { label: 'HELIUM_3_EXTRACT', value: '+12kg', icon: 'database' },
              ].map((log) => (
                <div key={log.label} className="p-5 flex items-center justify-between bg-[#0b0e15] border border-[#424754]/50 rounded-2xl shadow-inner group hover:border-[#4cd7f6]/30 transition-all">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[#4cd7f6] text-[20px] group-hover:scale-110 transition-transform">{log.icon}</span>
                    <span className="font-mono text-[11px] text-[#e1e2ec] font-black italic opacity-80">{log.label}</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#4cd7f6] font-black italic">{log.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Polish: HUD scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)', backgroundSize: '100% 4px' }}></div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ManufacturingResourceLogisticsEngineeringOS_3edafb;
