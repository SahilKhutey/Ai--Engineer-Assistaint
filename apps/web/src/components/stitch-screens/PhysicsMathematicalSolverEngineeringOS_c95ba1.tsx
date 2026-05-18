import React, { useState, useEffect, useRef } from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const PhysicsMathematicalSolverEngineeringOS_c95ba1 = () => {
  const { 
    intent, 
    updateVariable, 
    runAnalysis, 
    simulationState,
    osStatus,
    reasoningTrace
  } = useEngineeringStore();

  const [isSolving, setIsSolving] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleVariableChange = (id: string, value: string) => {
    updateVariable(id, value);
  };

  const handleSolve = async () => {
    setIsSolving(true);
    await runAnalysis();
    setTimeout(() => setIsSolving(false), 3000);
  };

  // Auto-scroll logs
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [reasoningTrace, simulationState]);

  return (
    <div className="bg-[#0b0e15] text-[#e1e2ec] font-['Inter'] h-screen flex flex-col overflow-hidden selection:bg-blue-500/30">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 h-[48px] bg-[#10131a]/70 backdrop-blur-xl border-b border-[#424754]/30 shrink-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#adc6ff]">deployed_code</span>
          <h1 className="font-bold text-lg tracking-tighter text-[#adc6ff] uppercase">ANTIGRAVITY_OS</h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6 font-mono text-[11px] tracking-widest">
            <span className="text-[#c2c6d6] hover:bg-[#363941]/20 px-2 py-1 transition-colors cursor-pointer rounded">PROJECTS</span>
            <span className="text-[#4cd7f6] font-bold bg-[#363941]/10 px-2 py-1 rounded">SIMULATIONS</span>
            <span className="text-[#c2c6d6] hover:bg-[#363941]/20 px-2 py-1 transition-colors cursor-pointer rounded">AI AGENTS</span>
          </nav>
          <div className="font-mono text-[10px] text-[#adc6ff] border-l border-[#424754] pl-6 uppercase">
            GPU: {((simulationState?.gpu?.cluster_load_pct || 0) * 100).toFixed(0)}% | SIM: {simulationState?.solver?.load_pct > 0 ? 'ACTIVE' : 'READY'}
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 lg:ml-64 mt-[48px] p-4 grid grid-cols-12 gap-4 overflow-y-auto custom-scrollbar">
        {/* Solver Configuration Panel */}
        <section className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          <div className="bg-[#1a2330]/40 backdrop-blur-md rounded-lg border border-[#202B3C] overflow-hidden flex flex-col shadow-2xl">
            <div className="h-7 bg-[#272a31]/50 flex items-center justify-between px-4 border-b border-[#202B3C]">
              <span className="font-mono text-[10px] text-[#c2c6d6] tracking-[0.2em] font-bold uppercase">SOLVER_CONFIGURATION_v4.2</span>
              <div className="flex gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isSolving ? 'bg-[#4cd7f6] animate-pulse' : 'bg-[#adc6ff]'}`} />
                <span className="w-2 h-2 rounded-full bg-[#424754]" />
              </div>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Base Variables (Bound to intent.variables) */}
              <div className="space-y-6">
                <h3 className="font-mono text-[11px] text-[#adc6ff] tracking-[0.15em] font-bold uppercase border-l-2 border-[#adc6ff] pl-3">BASE_VARIABLES</h3>
                <div className="space-y-4">
                  {intent.variables.length > 0 ? intent.variables.map((v: any) => (
                    <div key={v.id} className="flex items-center gap-4 group">
                      <label className="font-mono text-[10px] text-[#c2c6d6] w-28 uppercase tracking-wider group-hover:text-[#adc6ff] transition-colors">{v.label} ({v.id})</label>
                      <div className="relative flex-1 flex items-center gap-2">
                        <input 
                          className="bg-[#0b0e15] border border-[#424754] rounded-md px-3 py-2 font-mono text-xs text-[#4cd7f6] w-full focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6]/20 transition-all" 
                          type="text" 
                          value={v.value}
                          onChange={(e) => handleVariableChange(v.id, e.target.value)}
                        />
                        <span className="font-mono text-[10px] text-[#8c909f] w-8">{v.unit}</span>
                      </div>
                    </div>
                  )) : (
                    <div className="text-[10px] font-mono text-[#8c909f] italic">No active variables in current workspace.</div>
                  )}
                </div>
              </div>

              {/* Universal Constants */}
              <div className="space-y-6">
                <h3 className="font-mono text-[11px] text-[#ffb786] tracking-[0.15em] font-bold uppercase border-l-2 border-[#ffb786] pl-3">UNIVERSAL_CONSTANTS</h3>
                <div className="space-y-1">
                  {[
                    { label: 'GRAVITATIONAL (G)', value: '6.67430e-11' },
                    { label: 'BOLTZMANN (k)', value: '1.38064e-23' },
                    { label: 'LIGHT_SPEED (c)', value: '299,792,458' },
                  ].map((constant) => (
                    <div key={constant.label} className="flex items-center justify-between p-2 hover:bg-[#ffb786]/5 transition-colors border-b border-[#424754]/20">
                      <span className="font-mono text-[10px] text-[#c2c6d6] tracking-tight">{constant.label}</span>
                      <span className="font-mono text-[10px] text-[#ffb786] font-bold">{constant.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Matrix Input Section */}
          <div className="bg-[#1a2330]/40 backdrop-blur-md rounded-lg border border-[#202B3C] overflow-hidden flex-1 flex flex-col shadow-2xl">
            <div className="h-7 bg-[#272a31]/50 flex items-center justify-between px-4 border-b border-[#202B3C]">
              <span className="font-mono text-[10px] text-[#c2c6d6] tracking-[0.2em] font-bold uppercase">COORDINATE_TRANSFORM_TENSOR [4x4]</span>
              <span className="font-mono text-[10px] text-[#4cd7f6] font-bold tracking-widest">DET: 0.992</span>
            </div>
            <div className="p-8 flex items-center justify-center flex-1">
              <div className="grid grid-cols-4 gap-3 w-full max-w-xl">
                {Array.from({ length: 16 }).map((_, i) => (
                  <input 
                    key={i}
                    className={`bg-[#0b0e15] border border-[#424754] rounded-md text-center py-4 font-mono text-xs focus:border-[#adc6ff] focus:ring-1 focus:ring-[#adc6ff]/20 outline-none transition-all ${
                      i % 5 === 0 ? 'text-[#adc6ff] font-bold bg-[#adc6ff]/5' : 'text-[#8c909f]'
                    }`} 
                    type="text" 
                    defaultValue={i % 5 === 0 ? '1.000' : '0.000'}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Visualization and Actions */}
        <section className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          {/* Visualization Panel */}
          <div className="bg-[#1a2330]/40 backdrop-blur-md rounded-lg h-72 overflow-hidden flex flex-col relative border border-[#202B3C] shadow-2xl">
            <div className="h-7 bg-[#272a31]/50 flex items-center px-4 border-b border-[#202B3C]">
              <span className="font-mono text-[10px] text-[#c2c6d6] tracking-[0.2em] font-bold uppercase">TELEMETRY_VIEWPORT</span>
            </div>
            <div className="flex-1 bg-black/40 relative group cursor-crosshair">
              <img 
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
                src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDwVq642RytjMUPue2oUykNcsuNL6JgUmoczLlhL_x6spyA7Ti17OcozziDgkGNQCcwuBKSqc8kMB8YM-nQAB03TPtvOnlvk4suRAIKBJxX35knpSpwxrURxa9nvScEjE3mJDGqvsOR1JRgHL9Gq11j6Vak7hxYwToGFEzo2tm3Wd6q33GvQhKahaE2gx53m-k05YFy7NMFkTdCz_967tLrMaiwHj7Rob221Ca69bMP-MoooBVrj0q6Fh6J17QKMUDcy8u2P82RbGiL" 
              />
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #4cd7f6 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2 bg-[#10131a]/80 px-2 py-1 rounded border border-[#424754]/50">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10B981]"></span>
                  <span className="font-mono text-[10px] text-[#e1e2ec] font-bold tracking-widest">LIVE_FEED</span>
                </div>
              </div>
              {/* HUD HUD */}
              <div className="absolute bottom-4 right-4 text-right space-y-1">
                <div className="text-[10px] font-mono text-[#4cd7f6] font-bold tracking-tighter">FPS: {simulationState?.solver?.fps || '60.0'}</div>
                <div className="text-[10px] font-mono text-[#8c909f] tracking-tighter">TSTEP: {simulationState?.solver?.timestep_s?.toExponential(2) || '1.25e-4'}s</div>
              </div>
            </div>
          </div>

          {/* Compute Action */}
          <button 
            onClick={handleSolve}
            disabled={isSolving}
            className="bg-[#adc6ff] hover:bg-[#adc6ff]/90 text-[#001a42] font-mono text-[11px] font-bold h-14 rounded-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(173,198,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <span className={`material-symbols-outlined transition-transform group-hover:rotate-12 ${isSolving ? 'animate-spin' : ''}`} data-icon={isSolving ? 'RefreshCw' : 'rocket_launch'}>
              {isSolving ? 'RefreshCw' : 'rocket_launch'}
            </span>
            <span className="tracking-[0.2em]">{isSolving ? 'SOLVING_REALITY...' : 'INITIALIZE_COMPUTE_SEQUENCE'}</span>
          </button>

          {/* Symbols Library */}
          <div className="bg-[#1a2330]/40 backdrop-blur-md rounded-lg flex-1 overflow-hidden flex flex-col border border-[#202B3C] shadow-2xl">
            <div className="h-7 bg-[#272a31]/50 flex items-center px-4 border-b border-[#202B3C]">
              <span className="font-mono text-[10px] text-[#c2c6d6] tracking-[0.2em] font-bold uppercase">SYMBOLS_LIBRARY</span>
            </div>
            <div className="p-4 grid grid-cols-5 gap-2">
              {['∑', '∫', '∂', '∇', 'Δ', 'π', 'Ω', 'λ', 'μ', '∞'].map((symbol) => (
                <button 
                  key={symbol}
                  className="aspect-square flex items-center justify-center bg-[#1d2027] border border-[#424754]/50 text-[#adc6ff] font-mono text-lg hover:bg-[#adc6ff] hover:text-[#001a42] transition-all rounded"
                >
                  {symbol}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Solver Output Terminal */}
        <section className="col-span-12 bg-[#0b0e15] rounded-lg h-56 overflow-hidden flex flex-col border border-[#202B3C] shadow-2xl">
          <div className="h-7 bg-[#272a31]/50 flex items-center justify-between px-4 border-b border-[#202B3C]">
            <span className="font-mono text-[10px] text-[#c2c6d6] tracking-[0.2em] font-bold uppercase">REAL_TIME_COMPUTATION_LOGS</span>
            <span className="font-mono text-[10px] text-[#8c909f] tracking-widest uppercase">UPTIME: {osStatus?.uptime || 0}s</span>
          </div>
          <div 
            ref={scrollRef}
            className="flex-1 p-4 font-mono text-[11px] space-y-1.5 overflow-y-auto bg-black/30 custom-scrollbar"
          >
            {reasoningTrace.slice(-20).map((log, i) => (
              <div key={i} className="flex gap-4 group">
                <span className="text-[#8c909f] opacity-50 shrink-0">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
                <span className={`transition-colors ${log.agent === 'PHYSICS' ? 'text-[#4cd7f6]' : 'text-[#e1e2ec] group-hover:text-white'}`}>
                  <span className="font-bold">[{log.agent}]:</span> {log.thought}
                </span>
              </div>
            ))}
            {reasoningTrace.length === 0 && (
              <div className="space-y-1.5 opacity-50">
                <div className="flex gap-4 text-[#4cd7f6]"><span className="shrink-0">[00:00:01]</span><span>SYS_INIT: Primary solver modules loaded successfully.</span></div>
                <div className="flex gap-4"><span className="shrink-0">[00:00:02]</span><span>ENV_CHECK: Atmospheric pressure constant at 101.325 kPa.</span></div>
                <div className="flex gap-4 text-[#adc6ff] font-bold italic animate-pulse"><span className="shrink-0">[--:--:--]</span><span>AWAITING_INPUT_SEQUENCE...</span></div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* CSS Utilities */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0b0e15;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #32353c;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #424754;
        }
      `}</style>
    </div>
  );
};

export default PhysicsMathematicalSolverEngineeringOS_c95ba1;
