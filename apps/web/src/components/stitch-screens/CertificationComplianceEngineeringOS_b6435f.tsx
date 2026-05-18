'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const CertificationComplianceEngineeringOS_b6435f = () => {
  const { validationEngine, distributedCompute, osStatus } = useEngineeringStore();

  const compliancePercentage = validationEngine?.layers?.length > 0 
    ? Math.floor((validationEngine.layers.filter(l => l.status === 'PASSED').length / validationEngine.layers.length) * 100) 
    : 84;

  const validationLayers = validationEngine?.layers?.length > 0 ? validationEngine.layers : [
    { id: 'FAA_25', name: 'FAA Part 25', status: 'PASSED', message: 'REV_09.22.X' },
    { id: 'ASME_VIII', name: 'ASME BPVC SEC VIII', status: 'PENDING', message: 'STRESS_LEVEL_REVIEW' },
    { id: 'ISO_9001', name: 'ISO 9001:2015', status: 'PASSED', message: 'MFG_QUAL_VERIFIED' },
    { id: 'AISC_360', name: 'AISC 360-16 LRFD', status: 'FAILED', message: 'ACTION_REQ' },
  ];

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] min-h-screen w-full flex flex-col overflow-x-hidden relative selection:bg-[#adc6ff]/30 pb-20">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 sticky top-0 shadow-2xl">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">deployed_code</span>
          <h1 className="font-mono text-[12px] font-black text-[#adc6ff] uppercase tracking-[0.2em] italic">CERTIFICATION_CORE // {osStatus?.physicsSync ? 'REALTIME' : 'STAGING'}</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 px-4 py-1.5 bg-[#191b23] border border-[#424754]/50 rounded-xl shadow-inner">
            <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic">OS_LOAD: {Math.floor((osStatus?.kernelLoad || 0) * 100)}% | STATUS: {osStatus?.physicsSync ? 'SYNCED' : 'LATENT'}</span>
            <div className={`w-2 h-2 rounded-full ${osStatus?.physicsSync ? 'bg-[#10b981]' : 'bg-amber-500'} animate-pulse shadow-[0_0_8px_currentColor]`}></div>
          </div>
        </div>
      </header>

      {/* Main Content Workspace */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-8 space-y-8 animate-in fade-in duration-700">
        {/* Compliance Status Overview */}
        <section className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#adc6ff]/5 blur-[100px] pointer-events-none"></div>
          
          <div className="flex justify-between items-start mb-10 relative z-10">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-[0.3em] italic">GLOBAL_COMPLIANCE_VECTOR</span>
              <div className="flex items-baseline gap-2">
                <h2 className="font-mono text-6xl font-black text-[#adc6ff] tracking-tighter italic">{compliancePercentage}</h2>
                <span className="font-mono text-2xl text-[#adc6ff] font-black opacity-50">%</span>
              </div>
            </div>
            <div className="text-right space-y-1">
              <span className="font-mono text-[13px] text-[#4cd7f6] font-black italic block uppercase">Sovereign Validation</span>
              <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">SHIELD_DENSITY: {validationEngine?.aiHallucinationShield ? (validationEngine.aiHallucinationShield * 100).toFixed(1) : 98.4}%</span>
            </div>
          </div>

          <div className="relative h-4 bg-[#0b0e15] rounded-full overflow-hidden border border-[#424754]/30 shadow-inner group-hover:border-[#adc6ff]/30 transition-all">
            <div className="absolute inset-y-0 left-0 bg-[#4cd7f6] shadow-[0_0_20px_#4cd7f6] transition-all duration-1000" style={{ width: `${compliancePercentage}%` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="flex justify-between mt-4 font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60">
            <span>0.00 SIM_VALIDATION</span>
            <span>TARGET: 100.00</span>
          </div>
        </section>

        {/* Regulatory Standards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {validationLayers.map((layer: any) => (
            <div key={layer.id} className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 p-8 rounded-3xl flex flex-col justify-between aspect-square hover:scale-[1.05] hover:border-[#adc6ff]/30 transition-all shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#adc6ff 1px, transparent 1px), linear-gradient(90deg, #adc6ff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-60">LAYER_{layer.id.split('_')[0]}</span>
                  <div className={`w-2.5 h-2.5 rounded-full ${layer.status === 'PASSED' ? 'bg-[#10b981]' : layer.status === 'FAILED' ? 'bg-[#ff4b4b]' : 'bg-[#ffb786]'} animate-pulse shadow-[0_0_10px_currentColor]`}></div>
                </div>
                <h3 className="font-mono text-2xl font-black text-[#e1e2ec] italic tracking-tighter mb-4">{layer.name}</h3>
                <div className="space-y-4">
                  <p className="font-mono text-[10px] text-[#8c909f] font-black uppercase italic tracking-tight opacity-70">{layer.message}</p>
                  <span className={`inline-block px-4 py-1.5 ${layer.status === 'PASSED' ? 'bg-[#10b981]' : layer.status === 'FAILED' ? 'bg-[#ff4b4b]' : 'bg-[#ffb786]'} text-[#000] font-mono text-[10px] font-black rounded-xl uppercase tracking-widest italic shadow-lg`}>
                    {layer.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Validation Evidence Log */}
        <section className="bg-[#1d2027]/50 backdrop-blur-xl border border-[#424754]/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[400px]">
          <header className="h-12 bg-[#1d2027] border-b border-[#424754]/50 flex items-center justify-between px-8 shrink-0">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[18px] text-[#4cd7f6]">terminal</span>
              <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">VALIDATION_LOG_STREAM</span>
            </div>
            <div className="flex gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#424754]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#424754]"></div>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto p-8 space-y-4 custom-scrollbar">
            {validationEngine?.layers?.map((log: any, i: number) => (
              <div key={i} className={`flex gap-6 p-6 bg-[#0b0e15]/40 rounded-2xl border-l-4 ${log.status === 'PASSED' ? 'border-[#4cd7f6]' : 'border-[#ff4b4b]'} hover:bg-[#0b0e15]/60 transition-all group`}>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`font-mono text-[11px] font-black italic ${log.status === 'PASSED' ? 'text-[#adc6ff]' : 'text-[#ff4b4b]'}`}>{log.status}</span>
                    <span className="font-mono text-[10px] text-[#8c909f] font-black italic opacity-40">{new Date().toLocaleTimeString()}</span>
                  </div>
                  <p className={`font-mono text-[12px] leading-relaxed italic ${log.status === 'PASSED' ? 'text-[#e1e2ec] opacity-80' : 'text-[#ff4b4b]'}`}>{log.message}</p>
                </div>
              </div>
            )) || (
              <div className="flex flex-col items-center justify-center h-full text-white/20 font-mono text-[10px] uppercase tracking-[0.4em]">
                No live validation telemetry...
              </div>
            )}
          </div>
        </section>
        {/* CTA Section */}
        <section className="pt-8">
          <button className="w-full h-16 bg-[#adc6ff] text-[#002e6a] rounded-2xl font-mono text-[12px] font-black uppercase tracking-[0.3em] italic flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_50px_-10px_rgba(173,198,255,0.4)] group">
            <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            ENGINEERING SIGN-OFF
          </button>
        </section>
      </main>

      {/* Polish: HUD scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}></div>

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

export default CertificationComplianceEngineeringOS_b6435f;

