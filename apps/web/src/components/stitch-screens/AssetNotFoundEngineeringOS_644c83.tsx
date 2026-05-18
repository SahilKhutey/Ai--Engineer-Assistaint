'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const AssetNotFoundEngineeringOS_644c83 = () => {
  const { simulationState, distributedCompute, osStatus } = useEngineeringStore();

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen w-full flex flex-col overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* TopAppBar */}
      <header className="h-[48px] bg-[#10131a]/90 backdrop-blur-xl border-b border-[#424754]/50 flex justify-between items-center px-6 shrink-0 z-50 shadow-2xl relative">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">deployed_code</span>
          <h1 className="font-mono text-[12px] font-black text-[#adc6ff] uppercase tracking-[0.2em] italic">ANTIGRAVITY_OS</h1>
        </div>
        <div className="flex items-center gap-12">
          <span className="font-mono text-[10px] text-[#adc6ff] font-black uppercase tracking-widest italic opacity-50">GPU: 94% | SIM: ACTIVE</span>
        </div>
      </header>

      {/* Main Content Workspace */}
      <main className="flex-1 flex items-center justify-center p-12 relative overflow-hidden group">
        {/* Background Grid & Wireframe Decorations */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#202b3c 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
        
        {/* Asymmetric Technical Fragments */}
        <div className="absolute top-[15%] left-[10%] w-[300px] h-[300px] border border-[#424754]/30 rotate-12 pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] border border-[#4cd7f6]/10 -rotate-6 pointer-events-none flex items-center justify-center">
          <div className="w-1/2 h-1/2 border border-[#4cd7f6]/5 rotate-45 animate-spin-slow"></div>
        </div>

        {/* 404 Failure Interface */}
        <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row gap-20 items-center animate-in fade-in zoom-in duration-700">
          {/* Left Column: Visual Error */}
          <div className="flex-1 flex flex-col items-center md:items-end justify-center text-center md:text-right space-y-6">
            <div className="relative select-none">
              <h1 className="text-[180px] md:text-[240px] font-black leading-none tracking-tighter text-[#1d2027] italic">
                404
              </h1>
              <span className="absolute top-0 left-0 text-[#4cd7f6]/10 -translate-x-2 translate-y-2 text-[180px] md:text-[240px] font-black leading-none tracking-tighter italic">404</span>
              <span className="absolute top-0 left-0 text-[#ffb4ab]/10 translate-x-2 -translate-y-2 text-[180px] md:text-[240px] font-black leading-none tracking-tighter italic">404</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#ffb4ab]"></div>
              <p className="font-mono text-[12px] text-[#ffb4ab] font-black tracking-[0.3em] italic uppercase">PART_GEOMETRY_UNDEFINED</p>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="hidden md:block w-[2px] h-[400px] bg-gradient-to-b from-transparent via-[#424754]/50 to-transparent"></div>

          {/* Right Column: Terminal Details */}
          <div className="flex-1 flex flex-col items-center md:items-start space-y-8 w-full max-w-md">
            <div className="bg-[#1d2027]/50 backdrop-blur-xl border-2 border-[#424754]/50 p-8 rounded-3xl shadow-2xl relative overflow-hidden group/diagnostic">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffb4ab]/5 blur-3xl pointer-events-none"></div>
              <header className="flex justify-between items-center mb-6 border-b border-[#424754]/30 pb-4 relative z-10">
                <span className="font-mono text-[10px] text-[#8c909f] font-black uppercase tracking-widest italic">DIAGNOSTIC_REPORT</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ffb4ab] animate-pulse shadow-[0_0_8px_#ffb4ab]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#424754]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#424754]"></div>
                </div>
              </header>
              <div className="space-y-6 relative z-10">
                <p className="font-mono text-[13px] text-[#e1e2ec] font-black italic opacity-80 leading-relaxed uppercase tracking-tight">
                  The requested sector or asset does not exist in the current cluster. System integrity check suggests a missing reference in the spatial database.
                </p>
                <div className="bg-[#0b0e15] p-6 rounded-2xl border-l-4 border-[#4cd7f6] font-mono text-[11px] text-[#4cd7f6] italic space-y-2 shadow-inner">
                  <code className="block opacity-90 tracking-tight">&gt; ERROR_CODE: 0x82F_NULL_POINTER</code>
                  <code className="block opacity-90 tracking-tight">&gt; STACK_TRACE: VOID_REACHED</code>
                  <code className="block opacity-90 tracking-tight">&gt; LOCATION: UNKNOWN_NODE_404</code>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a className="flex-1 h-14 bg-[#4cd7f6] text-[#003640] rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest italic flex items-center justify-center gap-3 hover:scale-[1.05] active:scale-[0.95] transition-all shadow-[0_10px_30px_-5px_rgba(76,215,246,0.4)] group/btn" href="/">
                <span className="material-symbols-outlined text-[20px]">home</span>
                RETURN_TO_COMMAND
              </a>
              <button className="h-14 px-8 border-2 border-[#424754] bg-[#1d2027]/50 text-[#e1e2ec] rounded-2xl font-mono text-[11px] font-black uppercase tracking-widest italic hover:bg-[#1d2027] hover:border-[#adc6ff]/50 transition-all flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-[20px]">terminal</span>
                REBOOT_SHELL
              </button>
            </div>
          </div>
        </div>

        {/* Wireframe Fragment Image */}
        <div className="absolute right-[-10%] top-[20%] opacity-20 hidden xl:block pointer-events-none group-hover:opacity-30 transition-opacity duration-1000">
          <img alt="Technical Schematic" className="w-[600px] animate-spin-slow-reverse" src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuAYrBEw56w_G5QSMQGcPCDyurwU15amc_L9MIRysbrES5KXgOyxNSb_A53C7g08EKtOSiI_b3fDLr-FIiLe0KCd_ljEEJeIPz_q1eHfsNbI98Oy5yjz5XxBenkWV9z5ogmwcGK_ekMpntbxmd09TLT4hLQrK7YNYYwKgj-i3WGGQWpOrjhsWIgZHgz6EXvYrgtunrlSw7ShonDXfqy8yiO8xFA4DJc1w1KS1y_fUenv2wwWONZ0m_aKPBxgphRRKWjaxAKD9i9Sp6Ng" />
        </div>
      </main>

      {/* Footer Status Bar */}
      <footer className="h-[32px] bg-[#0b0e15]/80 backdrop-blur-xl border-t border-[#424754]/50 px-6 flex items-center justify-between z-50 shrink-0">
        <div className="flex items-center gap-8">
          <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">Local Cluster: SEC-04-A</span>
          <span className="font-mono text-[9px] text-[#8c909f] font-black uppercase tracking-widest italic opacity-50">Uptime: 1042:12:04</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] text-[#4cd7f6] font-black uppercase tracking-widest italic">ENCRYPTED_LINK_ESTABLISHED</span>
          <div className="w-1.5 h-1.5 bg-[#4cd7f6] rounded-full shadow-[0_0_8px_#4cd7f6]"></div>
        </div>
      </footer>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AssetNotFoundEngineeringOS_644c83;
