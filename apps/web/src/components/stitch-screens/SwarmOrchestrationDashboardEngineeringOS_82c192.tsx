'use client';

import React from 'react';
import {
  Rocket,
  Activity,
  Gauge,
  Map,
  Settings,
  Terminal,
  BarChart3,
  TrendingUp,
  Cpu,
  Zap,
  Layers,
  Play,
  Info,
  AlertTriangle,
  MoveUp,
  Share2,
  Radio,
  Database,
  ShieldCheck,
  Maximize2,
  ChevronRight,
  Waves,
  Box,
  Hash,
  Globe,
  Users,
  Brain,
  ZapOff
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * SwarmOrchestrationDashboard v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity Radio swarm intelligence workspace with real-time consensus and telemetry.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const SwarmOrchestrationDashboardEngineeringOS_82c192 = () => {
  const { orchestrationState, signalState, reasoningTrace } = useEngineeringStore();
  const { 
    swarmAgreement = 0.924, 
    activeAgents = 12, 
    latency_ms = 14.2,
    fleetStatus = 'NOMINAL'
  } = orchestrationState || {};

  return (
    <div className="flex-1 flex flex-col bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. TOP STATUS BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex justify-between items-center z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">MISSION_CONTROL_CENTER</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex gap-4">
             <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">NODE: SAT-772</span>
             <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">STATUS: {fleetStatus}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Share2 className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
          <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
          <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
            <span className="text-[9px] font-mono text-blue-400 font-bold uppercase tracking-widest">v3.2_SECURE</span>
          </div>
        </div>
      </header>

      <main className="flex-1 grid grid-cols-12 min-h-0 overflow-hidden">
        
        {/* 2. SWARM VIEWPORT (Left/Center) */}
        <section className="col-span-12 lg:col-span-8 relative bg-black/20 flex flex-col overflow-hidden animate-in fade-in duration-1000">
           <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
           
           <div className="h-8 px-6 flex items-center bg-white/[0.02] border-b border-white/5 justify-between backdrop-blur z-10">
             <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">SWARM_VIEWPORT_01: REL: EARTH_ORBIT_L4</span>
             <div className="flex gap-4 items-center">
                <span className="text-[9px] font-mono text-blue-400/60 uppercase">AGREEMENT: {(swarmAgreement * 100).toFixed(1)}%</span>
                <div className="h-3 w-32 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${swarmAgreement * 100}%` }} />
                </div>
             </div>
           </div>

           {/* Rendering Area */}
           <div className="flex-1 relative flex items-center justify-center p-12">
              <div className="w-full h-full border border-blue-500/10 rounded-[48px] relative group overflow-hidden bg-black/60 backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-screen pointer-events-none grayscale select-none group-hover:grayscale-0 transition-all duration-1000">
                  <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCL3HZvGa13hfmwh1Me5LMmM0z-QP1bkyq6dK-IGGaCOzDHMXRFL2lwYoKhHQS_f64V9AjCxTLHFjGkr6MyJx3jjI3dmO6RKrDlAKcQ4luu7jAngXeufwZhYvHETKN3kNomOnEPY3sprhOo4KQY0AcRhFuh5YGLNQ9BEBwjyqegPsWeEg4dq8axNKCiE7zBE3LG5nOVWZrQqM_e1YDuDUUInL3hjI4rYBFPM6GkcIWT-SxBtnpkHX63Nx3D21knIN392PdJuOQxTcOE" className="w-full h-full object-cover" />
                </div>

                {/* HUD Elements */}
                <div className="absolute top-12 left-12 flex flex-col gap-4">
                   <div className="p-4 bg-black/80 border border-blue-500/20 backdrop-blur-2xl rounded-2xl flex flex-col gap-2">
                      <span className="text-[8px] font-black text-blue-400 uppercase tracking-[0.4em]">VECTOR_FIELD</span>
                      <div className="w-32 h-20 flex items-center justify-center relative">
                         <div className="absolute inset-0 border border-white/5 rounded-lg overflow-hidden">
                            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10">
                               {Array.from({ length: 16 }).map((_, i) => <div key={i} className="border-[0.5px] border-white" />)}
                            </div>
                         </div>
                         <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                      </div>
                   </div>
                </div>

                <div className="absolute bottom-12 right-12 p-8 bg-black/80 border border-blue-500/20 backdrop-blur-2xl rounded-[32px] shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 text-blue-400">
                    <Globe className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">FLEET_TELEMETRY</span>
                  </div>
                  <div className="space-y-2">
                     <TelemetryRow label="X_VECTOR" value="+12.42" />
                     <TelemetryRow label="Y_VECTOR" value="-08.11" />
                     <TelemetryRow label="LATENCY" value={`${latency_ms.toFixed(1)}ms`} color="blue" />
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="w-[80%] h-[80%] border border-blue-500/5 rounded-full animate-[spin_60s_linear_infinite]" />
                   <div className="absolute w-[60%] h-[60%] border border-blue-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                </div>
              </div>
           </div>

           {/* AI Reasoning Log */}
           <div className="h-44 border-t border-white/5 bg-black/40 p-6 font-mono text-[11px] overflow-y-auto custom-scrollbar backdrop-blur-3xl">
              <div className="flex items-center gap-3 text-blue-400/60 mb-4 border-b border-white/5 pb-2">
                 <Terminal className="w-3 h-3" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em]">CONSENSUS_LOGIC_STREAM</span>
              </div>
              <div className="space-y-2">
                 {reasoningTrace?.slice(-5).map((trace, i) => (
                   <div key={i} className="flex gap-4 opacity-80 hover:opacity-100 transition-opacity">
                      <span className="text-white/20 shrink-0">[{new Date(trace.timestamp).toLocaleTimeString()}]</span>
                      <span className="text-blue-400 font-bold shrink-0">{trace.agent}</span>
                      <span className="text-white/60">{trace.thought}</span>
                   </div>
                 )) || (
                   <>
                     <div className="text-emerald-400/60">[14:22:01] ANALYZING ORBITAL DRIFT IN A-04...</div>
                     <div className="text-white/40">[14:22:04] CONSENSUS REACHED: INITIATING DELTA-V CORRECTION</div>
                     <div className="text-blue-400/60">[14:22:09] BROADCASTING THRUST VECTORS TO NODES [A01-A12]</div>
                   </>
                 )}
              </div>
           </div>
        </section>

        {/* 3. AGENT PULSE & PERFORMANCE (Right) */}
        <aside className="col-span-12 lg:col-span-4 bg-black/40 border-l border-white/5 flex flex-col backdrop-blur-3xl overflow-y-auto custom-scrollbar">
           
           <div className="p-8 border-b border-white/5 space-y-8">
              <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3">
                <Users className="w-3 h-3" />
                AGENT_PULSE ({activeAgents})
              </h3>
              <div className="grid grid-cols-4 gap-2">
                 {Array.from({ length: 12 }).map((_, i) => (
                   <div key={i} className="aspect-square bg-white/[0.02] border border-white/5 rounded-xl flex flex-col items-center justify-center gap-1 group hover:border-blue-500/40 transition-all cursor-pointer">
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 3 ? 'bg-rose-500 animate-pulse' : 'bg-emerald-500'} shadow-[0_0_8px_rgba(16,185,129,0.3)]`} />
                      <span className="text-[8px] font-mono text-white/20 group-hover:text-blue-400">A-{String(i+1).padStart(2, '0')}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="p-8 border-b border-white/5 space-y-8">
              <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3">
                <Brain className="w-3 h-3" />
                CONSENSUS_STABILITY
              </h3>
              <div className="bg-blue-500/5 border border-blue-500/10 p-6 rounded-[32px] space-y-4">
                 <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">AGREEMENT_IDX</span>
                    <span className="text-[20px] font-mono font-black text-blue-400">{(swarmAgreement * 100).toFixed(1)}%</span>
                 </div>
                 <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-all duration-1000" style={{ width: `${swarmAgreement * 100}%` }} />
                 </div>
              </div>
           </div>

           <div className="p-8 flex-1 space-y-8">
              <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] flex items-center gap-3">
                <BarChart3 className="w-3 h-3" />
                DELTA-V_DISTRIBUTION
              </h3>
              <div className="h-48 flex items-end gap-1.5 border-b border-l border-white/5 p-4 relative overflow-hidden bg-white/[0.01] rounded-2xl">
                 <div className="absolute inset-0 grid-pattern opacity-5" />
                 {[45, 65, 55, 95, 42, 48, 52, 50, 47, 55, 49, 51].map((h, i) => (
                   <div key={i} className={`flex-1 rounded-t-[4px] transition-all duration-1000 ${h > 80 ? 'bg-rose-500 shadow-[0_0_15px_#f43f5e]' : 'bg-blue-500/40 group-hover:bg-blue-400'}`} style={{ height: `${h}%` }} />
                 ))}
              </div>
              <p className="text-[9px] font-mono text-white/20 text-center uppercase tracking-widest">FUEL_EXPENDITURE_PER_ORBITAL_PERIOD</p>

              <button className="w-full py-5 bg-blue-500 text-white font-black text-[12px] uppercase tracking-[0.4em] rounded-[24px] shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4">
                 <Play className="w-5 h-5 fill-current" />
                 INIT_REORIENTATION
              </button>
           </div>

        </aside>
      </main>

      <style jsx>{`
        .grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>
    </div>
  );
};

const TelemetryRow = ({ label, value, color = 'white' }: any) => (
  <div className="flex justify-between items-center text-[10px] font-mono gap-12">
    <span className="text-white/30 uppercase tracking-widest">{label}:</span>
    <span className={`text-${color === 'white' ? 'white/80' : color + '-400'} font-black`}>{value}</span>
  </div>
);

export default SwarmOrchestrationDashboardEngineeringOS_82c192;
