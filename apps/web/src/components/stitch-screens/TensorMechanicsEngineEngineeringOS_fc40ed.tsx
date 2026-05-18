'use client';

import React, { useState } from 'react';
import {
  Settings2,
  Settings,
  Activity,
  Network,
  Brain,
  Terminal,
  RefreshCw,
  Maximize2,
  X,
  AlertTriangle,
  Plus,
  Play,
  Pause,
  Square,
  Home
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * TensorMechanicsEngine v3.5 (Phase 55 Hardened)
 * 
 * High-fidelity workspace for continuum mechanics and multidimensional tensor analysis.
 * Integrates real-time structural telemetry with explainable AI reasoning 
 * to monitor structural integrity and anisotropic strain mapping.
 */
const TensorMechanicsEngineEngineeringOS_fc40ed = () => {
  const { 
    structuralState, 
    osStatus, 
    reasoningTrace, 
    pushEvent, 
    addNotification 
  } = useEngineeringStore();

  const maxStress = structuralState?.maxStress_mPa || 142.42;
  const safetyFactor = structuralState?.safetyFactor || 2.4;
  const engineStability = ((osStatus?.kernelLoad || 0.998) * 100).toFixed(1);

  const handleExecuteInquiry = (query: string) => {
    pushEvent?.('TENSOR_INQUIRY_EXECUTED', { query, timestamp: Date.now() });
    addNotification?.({
      title: 'INQUIRY_RECEIVED',
      message: `Analyzing continuum field for: ${query}...`,
      type: 'INFO',
      domain: 'STRUCTURAL'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3">
              <Settings2 className="text-blue-400 w-5 h-5" />
              <h1 className="font-mono text-[14px] font-black text-blue-400 uppercase tracking-[0.3em]">KINETIC_OS // TENSOR_ENGINE</h1>
           </div>
           <nav className="hidden lg:flex gap-8 ml-8">
              <HeaderLink label="SOLVER" active />
              <HeaderLink label="NETWORK" />
              <HeaderLink label="LIBRARIES" />
           </nav>
        </div>
        <div className="flex items-center gap-6">
           <Settings className="w-5 h-5 text-white/20 hover:text-blue-400 cursor-pointer transition-colors" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAV */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 shrink-0">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">SYSTEM_INDEX</span>
              <nav className="flex flex-col gap-1">
                 <SideNavItem icon={<Activity />} label="Telemetry" active />
                 <SideNavItem icon={<Network />} label="Kinematics" />
                 <SideNavItem icon={<Brain />} label="AI_Stability" />
                 <SideNavItem icon={<Terminal />} label="Command_Log" />
                 <SideNavItem icon={<RefreshCw />} label="System_Sync" />
              </nav>
           </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar relative">
           <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
              
              {/* Left Column: Visualization & Metrics */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                 
                 {/* 3D Tensor Field Visualization */}
                 <section className="bg-black/40 border border-white/5 rounded-[40px] h-[480px] relative overflow-hidden group shadow-2xl backdrop-blur-3xl">
                    <div className="h-10 absolute top-0 left-0 w-full z-10 flex justify-between items-center px-8 bg-white/[0.02] border-b border-white/5">
                       <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">3D_TENSOR_FIELD_VISUALIZATION // CONTINUUM_MAP_V4</span>
                       <div className="flex gap-4">
                          <Maximize2 className="w-3 h-3 text-white/20 hover:text-white cursor-pointer" />
                          <X className="w-3 h-3 text-white/20 hover:text-white cursor-pointer" />
                       </div>
                    </div>
                    
                    <img 
                       className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000" 
                       src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDMmCiyO1Vs_fqpJjBpAV67dP6h837rPwJhgtVR-HU38YGmrgO9Ri4whV1yKevvowAIlQikj__hflTNNb4V4xh2e1wDSe2A-Yl8pXxxmWiODGyCrvdi4h17ajQjTT7_VgcbZrh1uNM_Nz3yNb1ocga-3jQJA3KDDaWWbt09Q3oPnhlDjDR6FVEdR1eY2qX3O3qTHFQ3Tjpekyxq8LCgpK-Y8w18TNErTotFDKmII2qVAN9MLlpJeaJ5b3HNZBIzbldV4TngZY4psTV2" 
                       alt="Tensor Field"
                    />

                    <div className="absolute bottom-8 right-8 flex flex-col items-end">
                       <div className="bg-black/80 border border-emerald-500/40 p-4 rounded-2xl backdrop-blur-md shadow-2xl">
                          <div className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse" />
                             <span className="text-[10px] font-mono font-black text-white uppercase tracking-widest">ENGINE_STABILITY: {engineStability}%</span>
                          </div>
                       </div>
                    </div>

                    <div className="absolute top-16 left-8 bg-black/60 border-l-2 border-blue-400 p-4 backdrop-blur-md">
                       <div className="space-y-1">
                          <TensorMetric label="T_XX" value={`${maxStress.toFixed(1)} MPa`} />
                          <TensorMetric label="T_YY" value="-34.1 MPa" />
                          <TensorMetric label="T_ZZ" value="89.2 MPa" />
                       </div>
                    </div>
                 </section>

                 {/* Bottom Metrics Row */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Anisotropic Strain Mapping */}
                    <div className="bg-black/40 border border-white/5 p-8 rounded-[40px] shadow-2xl backdrop-blur-3xl">
                       <div className="mb-6">
                          <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">ANISOTROPIC_STRAIN_MAPPING</span>
                       </div>
                       <div className="flex items-end gap-6 h-32">
                          <StrainBar label="LATERAL_X" value="0.042ε" progress={40} color="cyan" />
                          <StrainBar label="AXIAL_Y" value="0.089ε" progress={75} color="amber" />
                          <StrainBar label="SHEAR_Z" value="0.011ε" progress={20} color="blue" />
                       </div>
                    </div>

                    {/* Critical Stability Watch */}
                    <div className="bg-black/40 border border-rose-500/10 p-8 rounded-[40px] shadow-2xl backdrop-blur-3xl">
                       <div className="flex justify-between items-start mb-6">
                          <span className="text-[11px] font-black text-rose-400 uppercase tracking-[0.4em]">CRITICAL_STABILITY_WATCH</span>
                          <AlertTriangle className="text-rose-500 animate-pulse w-5 h-5" />
                       </div>
                       <div className="space-y-4">
                          <StabilityMetric label="FORCE_BALANCE" value="UNSTABLE [+4.2N]" color="rose" />
                          <StabilityMetric label="COORD_DRIFT" value="0.003mm/s" color="rose" />
                          <StabilityMetric label="MOMENT_FLUX" value="NOMINAL" color="white" />
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full bg-rose-500 shadow-[0_0_10px_#f43f5e]" style={{ width: '85%' }} />
                          </div>
                       </div>
                    </div>

                 </div>
              </div>

              {/* Right Column: AI Reasoning Trace */}
              <div className="lg:col-span-4 h-full">
                 <div className="bg-black/40 border border-white/5 rounded-[40px] flex flex-col h-full shadow-2xl backdrop-blur-3xl overflow-hidden">
                    <div className="h-12 px-8 bg-white/[0.02] border-b border-white/5 flex items-center gap-4">
                       <Brain className="w-5 h-5 text-blue-400" />
                       <span className="text-[11px] font-black text-white uppercase tracking-[0.4em]">EXPLAINABLE_AI_REASONING</span>
                    </div>
                    <div className="flex-1 p-8 space-y-8 overflow-y-auto custom-scrollbar">
                       {reasoningTrace.length > 0 ? [...reasoningTrace].reverse().slice(0, 10).map((trace, i) => (
                          <ReasoningBubble key={i} trace={trace} active={i === 0} />
                       )) : (
                          <div className="space-y-8">
                             <ReasoningBubble 
                               trace={{ 
                                  timestamp: Date.now() - 120000, 
                                  agent: 'COGNITIVE_MODULE_7', 
                                  thought: "Analysis of the Cauchy stress tensor indicates a local singularity at Vertex_882. This suggests a potential structural rupture if force balance is not re-distributed across the anisotropic matrix." 
                               }} 
                               active 
                             />
                             <ReasoningBubble 
                               trace={{ 
                                  timestamp: Date.now() - 60000, 
                                  agent: 'FIELD_COUPLING_LOGIC', 
                                  thought: "Thermal-Mechanical coupling detected. Coefficient of expansion for current material preset (Titanium_G5) exceeds stable delta. Recommending cooling cycle." 
                               }} 
                             />
                          </div>
                       )}
                    </div>
                    <div className="p-8 border-t border-white/5 bg-black/20">
                       <div className="flex items-center gap-4 bg-black/60 border border-white/10 p-3 rounded-2xl shadow-inner group">
                          <Terminal className="w-4 h-4 text-white/20 group-hover:text-blue-400" />
                          <input 
                             onKeyDown={(e: any) => e.key === 'Enter' && handleExecuteInquiry(e.target.value)}
                             className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-[12px] font-mono font-black text-white placeholder:text-white/10 uppercase tracking-widest"
                             placeholder="EXECUTE_INQUIRY..."
                          />
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </main>
      </div>

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-8 right-8 lg:hidden">
         <button className="w-14 h-14 bg-blue-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
            <Plus className="w-6 h-6" />
         </button>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .scanline-overlay {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
        }
      `}</style>
    </div>
  );
};

const HeaderLink = ({ label, active }: any) => (
  <a className={`text-[11px] font-black uppercase tracking-[0.15em] transition-colors ${active ? 'text-blue-400' : 'text-white/20 hover:text-white'}`} href="#">
     {label}
  </a>
);

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`px-6 py-4 rounded-2xl flex items-center gap-6 transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-2xl' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-125 transition-transform duration-500">{icon}</div>
     <span className="text-[11px] font-black uppercase tracking-[0.3em] font-mono">{label}</span>
  </div>
);

const TensorMetric = ({ label, value }: any) => (
  <div className="flex gap-4 items-center">
     <span className="text-[10px] font-mono font-black text-blue-400/60 uppercase w-12">{label}:</span>
     <span className="text-[11px] font-mono font-black text-blue-400">{value}</span>
  </div>
);

const StrainBar = ({ label, value, progress, color }: any) => (
  <div className="flex-1 flex flex-col gap-3 group">
     <div className="flex-1 bg-black/60 border border-white/5 rounded-xl relative overflow-hidden shadow-inner">
        <div className={`absolute bottom-0 left-0 w-full transition-all duration-1000 ${color === 'cyan' ? 'bg-cyan-400/20 shadow-[0_0_15px_#22d3ee40]' : color === 'amber' ? 'bg-amber-500/20 shadow-[0_0_15px_#f59e0b40]' : 'bg-blue-500/20 shadow-[0_0_15px_#3b82f640]'}`} style={{ height: `${progress}%` }} />
        <div className="absolute inset-0 flex items-center justify-center">
           <span className={`text-[14px] font-mono font-black tracking-tighter ${color === 'cyan' ? 'text-cyan-400' : color === 'amber' ? 'text-amber-400' : 'text-blue-400'}`}>{value}</span>
        </div>
     </div>
     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest text-center group-hover:text-white transition-colors">{label}</span>
  </div>
);

const StabilityMetric = ({ label, value, color }: any) => (
  <div className="flex justify-between items-center text-[10px] font-mono font-black">
     <span className="text-white/20 uppercase tracking-widest">{label}:</span>
     <span className={color === 'rose' ? 'text-rose-400' : 'text-white'}>{value}</span>
  </div>
);

const ReasoningBubble = ({ trace, active }: any) => (
  <div className="flex flex-col gap-3">
     <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono font-black text-blue-400">[{new Date(trace.timestamp).toLocaleTimeString([], { hour12: false })}]</span>
        <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{trace.agent}</span>
     </div>
     <p className={`text-[13px] leading-relaxed font-mono italic p-5 border-l-2 rounded-r-2xl transition-all ${active ? 'bg-blue-500/10 border-blue-400 text-white' : 'bg-white/[0.02] border-white/10 text-white/40'}`}>
        "{trace.thought}"
     </p>
  </div>
);

export default TensorMechanicsEngineEngineeringOS_fc40ed;
