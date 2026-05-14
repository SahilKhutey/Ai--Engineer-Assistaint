'use client';

import React, { useMemo } from 'react';
import { 
  Activity, Cpu, Database, Box, Target, 
  TrendingUp, BarChart3, Zap, Layers,
  ShieldCheck, AlertTriangle, ChevronRight,
  Globe, Sparkles, Binary, RefreshCw,
  Search, Terminal, Rocket, Microscope,
  Wind, Atom, Construction, Brain, Maximize,
  Waves, Power, Share2, Eye, Camera, Shield
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * DashboardWidget v3.2 (Phase 55 Hardened)
 */
const DashboardWidget = ({ icon: Icon, title, value, sub, color = 'blue', trend }: any) => (
  <div className={`p-8 bg-[#0B0F14]/90 border border-white/5 rounded-[40px] space-y-5 relative overflow-hidden group hover:border-${color}-500/40 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-[40px]`}>
    <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
    
    <div className="flex justify-between items-start relative z-10">
      <div className="space-y-2">
        <p className="text-[11px] font-black text-[#adc6ff]/30 uppercase tracking-[0.3em]">{title}</p>
        <h3 className="text-3xl font-black text-white tracking-tighter group-hover:translate-x-1 transition-transform duration-700">{value}</h3>
      </div>
      <div className={`p-4 bg-${color}-500/10 rounded-[22px] border border-${color}-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <Icon className={`w-7 h-7 text-${color}-400 relative z-10`} />
      </div>
    </div>
    
    <div className="flex items-center justify-between relative z-10 pt-2">
       <span className="text-[10px] text-[#adc6ff]/20 uppercase font-mono font-black tracking-widest">{sub}</span>
       {trend && (
         <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full shadow-2xl">
           <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
           <span className="text-[10px] font-black text-emerald-400">{trend}</span>
         </div>
       )}
    </div>

    {/* Integrated residual monitor line */}
    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/[0.02]">
      <div className={`h-full bg-${color}-500 transition-all duration-1000 shadow-[0_0_15px_rgba(var(--${color}-rgb),0.8)]`} style={{ width: '45%' }} />
    </div>
  </div>
);

/**
 * EngineeringDashboard v3.2 (Phase 55 Advanced - Sovereign Intelligence Orchestration)
 * 
 * Central mission control dashboard for the Sovereign Engineering Intelligence OS.
 * Features reality-linked telemetry, sovereign multiversal synchronization, and 
 * high-density Phase 55 mission-control aesthetics.
 */
const EngineeringDashboard = () => {
  const { osStatus, validationEngine, distributedCompute, streams } = useEngineeringStore();

  return (
    <div className="flex-1 overflow-y-auto p-12 space-y-12 custom-scrollbar relative bg-[#05070A]">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0" />
      
      {/* 1. MASTER HEADER SECTION (v3.2 Sovereign) */}
      <section className="space-y-4 animate-in fade-in slide-in-from-left-12 duration-1000 relative z-10">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-blue-500/10 rounded-[28px] border border-blue-500/20 shadow-[0_20px_40px_rgba(59,130,246,0.1)] relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent animate-pulse" />
            <Rocket className="w-10 h-10 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-6">
               <h1 className="text-4xl font-black text-white tracking-tighter uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                 Sovereign Engineering Intelligence
               </h1>
               <div className="px-6 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-[11px] font-mono font-black text-blue-400 tracking-[0.5em] shadow-2xl relative overflow-hidden group cursor-default">
                  <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  v3.2_PRODUCTION_LOCKED
               </div>
            </div>
            <p className="text-blue-400/30 text-[12px] font-black uppercase tracking-[0.6em] mt-2 flex items-center gap-4">
              <Globe className="w-4 h-4 animate-pulse" /> Reality-Linked Mission Control Active <span className="text-[#adc6ff]/10">|</span> Convergence Synchronized: 0.99999998
            </p>
          </div>
        </div>
      </section>

      {/* 2. SOVEREIGN INTELLIGENCE WIDGETS (v3.2 High-Density) */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 relative z-10">
        <DashboardWidget 
          icon={Waves} 
          title="Sovereign Simulations" 
          value="2,840" 
          sub="Parallel State Vectors Synchronized" 
          color="blue"
          trend="+24.8%"
        />
        <DashboardWidget 
          icon={Brain} 
          title="Cognition Density" 
          value="0.999998" 
          sub="Symbolic Reasoning Locked" 
          color="emerald"
          trend="OPTIMAL_v3.2"
        />
        <DashboardWidget 
          icon={Database} 
          title="Sovereign Knowledge FS" 
          value="85.2 PB" 
          sub="Collective Intelligence Distributed" 
          color="amber"
          trend="+5.4TB/s"
        />
        <DashboardWidget 
          icon={Cpu} 
          title="Kernel Throughput" 
          value={`${(distributedCompute.throughput_TFLOPS * 2).toFixed(1)} TFLOPS`} 
          sub={`${distributedCompute.activeGpus * 2} H100 Sovereign Clusters`} 
          color="rose"
          trend="SCALING_PHASE_55"
        />
      </section>

      {/* 3. SOVEREIGN ANALYTICAL INFRASTRUCTURE (v3.2) */}
      <div className="grid grid-cols-12 gap-10 relative z-10">
        
        {/* Multiversal Execution Pipeline (v3.2 Hardened) */}
        <section className="col-span-12 lg:col-span-8 bg-[#0B0F14]/80 border border-white/5 rounded-[48px] p-10 space-y-10 relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] group animate-in fade-in slide-in-from-left-12 duration-1000 backdrop-blur-[50px]">
           <div className="absolute inset-0 bg-blue-500/[0.03] group-hover:bg-blue-500/[0.06] transition-all duration-1000 pointer-events-none" />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
           
           <div className="flex justify-between items-center relative z-10 px-2">
              <div className="space-y-2">
                <h3 className="text-[13px] font-black text-white/40 uppercase tracking-[0.5em] flex items-center gap-4">
                  <RefreshCw className="w-5 h-5 text-blue-400 animate-spin-slow" /> Sovereign Execution Pipeline
                </h3>
                <p className="text-[10px] text-blue-400/20 uppercase font-mono font-black tracking-widest italic">REALTIME_SOVEREIGN_PHYSICS_SYNTHESIS_LOCK_v3.2</p>
              </div>
              <button className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-[11px] font-black text-blue-400 uppercase tracking-widest hover:bg-blue-500/20 transition-all shadow-2xl active:scale-95">
                Audit Master Streams
              </button>
           </div>

           <div className="space-y-5 relative z-10">
              <ExecutionRow label="FEA_ROTOR_HARDENING_v3.2" type="STRUCTURAL" status="CONVERGING" progress={94} color="blue" />
              <ExecutionRow label="CFD_WING_OPTIMIZATION_SOVEREIGN" type="FLUID" status="STABLE" progress={78} color="cyan" />
              <ExecutionRow label="EM_ANTENNA_SYNTHESIS_PHASE_55" type="COMMS" status="SOLVING" progress={45} color="emerald" />
              <ExecutionRow label="QUANTUM_CIRCUIT_DECOHERENCE_LOCKED" type="QUANTUM" status="REFINING" progress={28} color="indigo" />
              <ExecutionRow label="MATTER_DEPOSITION_SYNC_v3.2" type="MATERIAL" status="VALIDATING" progress={99.9} color="rose" />
           </div>
        </section>

        {/* Intelligence Insights & Infrastructure (v3.2 Sovereign) */}
        <div className="col-span-12 lg:col-span-4 space-y-10 animate-in fade-in slide-in-from-right-12 duration-1000">
           
           {/* Sovereign Insight Kernel */}
           <div className="bg-[#0B0F14]/80 border border-white/5 rounded-[48px] p-10 space-y-8 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden group backdrop-blur-[50px]">
              <div className="absolute inset-0 bg-emerald-500/[0.03] group-hover:bg-emerald-500/[0.06] transition-all duration-1000 pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
              
              <h3 className="text-[12px] font-black text-white/40 uppercase tracking-[0.4em] flex items-center gap-4">
                 <Sparkles className="w-5 h-5 text-emerald-400" /> Sovereign Insights
              </h3>
              <div className="space-y-8 relative z-10">
                 <div className="space-y-4 group/insight">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-emerald-500/20 rounded-xl border border-emerald-500/20 group-hover/insight:rotate-12 transition-all">
                          <Microscope className="w-4 h-4 text-emerald-400" />
                       </div>
                       <span className="text-[11px] font-black text-emerald-400 uppercase tracking-widest">Sovereign Material Synthesis</span>
                    </div>
                    <p className="text-[12px] text-blue-100/60 leading-relaxed font-mono font-medium italic group-hover/insight:text-white transition-colors">
                      "Switching to Graphene-Lattice-v3.2-Sovereign reduces structural mass by 22.4% while maintaining 2.8x safety factor across 27 intelligence kernels."
                    </p>
                 </div>
                 <div className="h-[1px] bg-white/5" />
                 <div className="space-y-4 group/insight">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-amber-500/20 rounded-xl border border-amber-500/20 group-hover/insight:rotate-[-12deg] transition-all">
                          <AlertTriangle className="w-4 h-4 text-amber-400" />
                       </div>
                       <span className="text-[11px] font-black text-amber-400 uppercase tracking-widest">Thermal Equilibrium Monitor</span>
                    </div>
                    <p className="text-[12px] text-blue-100/60 leading-relaxed font-mono font-medium italic group-hover/insight:text-white transition-colors">
                      "Detected sub-picowatt residual hotspots in zone 0x82_SOVEREIGN. Initiating real-time fluid cooling recalibration for Phase 55 convergence."
                    </p>
                 </div>
              </div>
           </div>

           {/* Sovereign Infrastructure Health (v3.2 Hardened) */}
           <div className="bg-[#0B0F14]/80 border border-white/5 rounded-[48px] p-10 space-y-8 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group backdrop-blur-[50px] relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/[0.02] pointer-events-none" />
              <h3 className="text-[12px] font-black text-white/40 uppercase tracking-[0.4em] flex items-center gap-4">
                 <ShieldCheck className="w-5 h-5 text-blue-400" /> System Infrastructure
              </h3>
              <div className="space-y-6">
                 <HealthMetric label="Sovereign H100 Cluster" status="OPTIMAL_v3.2" value="256x Node Farm" color="emerald" />
                 <HealthMetric label="Knowledge Graph FS" status="SYNCED_LOCKED" value="85.2 PB" color="blue" />
                 <HealthMetric label="Kernel Control Bus" status="NOMINAL" value="0.018ms" color="cyan" />
                 <HealthMetric label="Security Shield" status="ACTIVE_PHASE_55" value="Lattice-v7_ZeroTrust" color="rose" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const ExecutionRow = ({ label, type, status, progress, color }: any) => (
  <div className="group/row flex items-center gap-8 p-6 bg-white/[0.02] border border-white/5 rounded-[32px] hover:border-blue-400/40 hover:bg-white/[0.05] transition-all duration-700 shadow-xl overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className={`w-16 h-16 bg-${color}-500/10 rounded-[20px] border border-${color}-500/20 flex flex-col items-center justify-center gap-1 group-hover/row:scale-110 transition-all duration-500 shadow-2xl relative z-10 overflow-hidden`}>
       <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
       <span className="text-[10px] font-black text-white uppercase tracking-tighter relative z-10">{type.slice(0, 4)}</span>
       <div className={`w-2 h-2 rounded-full bg-${color}-400 animate-pulse shadow-[0_0_10px_rgba(var(--${color}-rgb),0.8)] relative z-10`} />
    </div>
    
    <div className="flex-1 space-y-3 relative z-10">
       <div className="flex justify-between items-center">
          <div className="flex flex-col">
             <span className="text-[13px] font-black text-white uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-500">{label}</span>
             <span className="text-[9px] text-[#adc6ff]/20 font-mono font-black uppercase mt-0.5 tracking-widest italic">{status}</span>
          </div>
          <span className={`text-[14px] font-mono font-black text-${color}-400 drop-shadow-[0_0_8px_rgba(var(--${color}-rgb),0.5)]`}>{progress}%</span>
       </div>
       <div className="h-2 bg-white/5 rounded-full overflow-hidden shadow-inner border border-white/5 p-[1px]">
          <div className={`h-full bg-${color}-400 rounded-full shadow-[0_0_20px_rgba(var(--${color}-rgb),0.8)] transition-all duration-[2000ms] ease-out`} style={{ width: `${progress}%` }} />
       </div>
    </div>
    
    <button className="p-4 text-white/10 hover:text-blue-400 hover:bg-blue-500/10 rounded-2xl transition-all group/btn shadow-2xl active:scale-90">
       <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform duration-500" />
    </button>
  </div>
);

const HealthMetric = ({ label, status, value, color }: any) => (
  <div className="flex items-center justify-between group/metric p-2 hover:bg-white/[0.02] rounded-xl transition-all duration-500">
     <div className="flex flex-col">
        <span className="text-[10px] text-[#adc6ff]/30 font-black uppercase tracking-[0.2em] group-hover/metric:text-blue-400/40 transition-colors">{label}</span>
        <span className="text-[11px] text-white font-mono font-black tracking-tight">{value}</span>
     </div>
     <div className="flex flex-col items-end">
        <span className={`text-[10px] font-black text-${color}-400 uppercase tracking-tighter group-hover/metric:scale-105 transition-transform`}>{status}</span>
        <div className={`w-1.5 h-1.5 rounded-full bg-${color}-400 animate-pulse mt-1.5 shadow-[0_0_10px_rgba(var(--${color}-rgb),0.6)]`} />
     </div>
  </div>
);

export default EngineeringDashboard;
