'use client';


import {
  Terminal,
  Settings,
  Activity,
  Brain,
  BarChart3,
  Workflow,
  History,
  HardDrive,
  Zap,
  FlaskConical,
  Sparkles,
  Plus,
  Play,
  Power,
  LayoutGrid,
  Waves,
  Calculator,
  Camera,
  Circle,
  Eye,
  Grid,
  Maximize2,
  Minimize2,
  RotateCw,
  Settings2,
  Timer,
  ZoomIn} from 'lucide-react';
import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * OpticsCommandCenter v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity optical systems Terminal and control shell.
 * Bound to 60Hz optics telemetry, wavefront error streams, and AI reasoning kernels.
 * Features a real-time 3D ray propagation workspace and interferometry wavefront maps.
 */
const OpticsCommandCenterEngineeringOS_759ea7 = () => {
  const { 
    opticsState, 
    reasoningTrace, 
    osStatus 
  } = useEngineeringStore();

  const {
    geometric = { refractiveIndex: 1.52, focalLength_mm: 50 },
    wavefront = { rmsError_nm: 0.045 },
    diffraction = { efficiency: 0.92 }
  } = opticsState || {};

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 bg-black/60 border-b border-white/5 flex justify-between items-center z-50 shrink-0 backdrop-blur-3xl">
         <div className="flex items-center gap-4">
            <Eye className="text-[#4cd7f6] w-5 h-5" />
            <h1 className="font-mono text-[16px] font-black text-[#4cd7f6] uppercase tracking-[0.1em]">OPTICAL_INTEL_LAYER_V3.2</h1>
         </div>
         <div className="hidden md:flex gap-12 items-center">
            <TopMetric label="FOCAL_LENGTH" value={`${geometric.focalLength_mm.toFixed(2)}mm`} />
            <TopMetric label="RMS_ERROR" value={`${wavefront.rmsError_nm.toFixed(3)}λ`} />
            <div className="flex items-center gap-3 px-4 py-1 bg-[#4cd7f6]/10 border border-[#4cd7f6]/20 rounded-lg">
               <div className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]" />
               <span className="text-[10px] font-black text-[#4cd7f6] uppercase tracking-widest">LOCKED</span>
            </div>
         </div>
         <Settings2 className="text-[#4cd7f6] cursor-crosshair hover:text-white transition-colors" />
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-20 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col py-8 gap-2 hidden md:flex shrink-0">
            <nav className="flex flex-col gap-4">
               <SideNavItem icon={<Circle />} label="LENSES" active />
               <SideNavItem icon={<Camera />} label="IMAGING" />
               <SideNavItem icon={<Sparkles />} label="LASERS" />
               <SideNavItem icon={<Waves />} label="WAVES" />
               <SideNavItem icon={<Calculator />} label="CALC" />
            </nav>
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 overflow-hidden grid grid-cols-12 grid-rows-6 gap-px bg-white/5 relative">
            
            {/* Primary 3D Workspace */}
            <section className="col-span-12 lg:col-span-8 row-span-4 bg-[#0B0F14] relative overflow-hidden group">
               <div className="h-8 bg-white/[0.02] border-b border-white/5 px-4 flex items-center justify-between z-10 relative">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">3D_RAY_PROPAGATION_WORKSPACE</span>
                  <div className="flex gap-4">
                     <Minimize2 className="text-white/20 hover:text-white cursor-pointer" />
                     <Maximize2 className="text-white/20 hover:text-white cursor-pointer" />
                  </div>
               </div>
               <div className="absolute inset-0 flex items-center justify-center p-12">
                  <img 
                     className="w-full h-full object-cover opacity-60 rounded-3xl grayscale mix-blend-screen transition-transform duration-[30000ms] group-hover:scale-110" 
                     src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuA0iAp4wf-1jwSKYg2g4-Iu3geRA_jhgBaeJM3JIVs1_1_xJ9-zLeiJ5N3cQ6oR7y_Ypgzu6iyxZ9Fo9ZxYpMtbHBP0-y46CsntGKPX-dfri0PZrWg-hgLFJR4iF7237oKGPk4DX4IvzhqQOriLoWiqx7A6738t6Qw7GcuRnL545TxHTboXaY4-MNToiMK1DmW4T9ivDPMbVkGioGd5wTCPafPzqIIv27OXIhLLzauUHhx6sBQpBb7p3hvoPUMgn3W3EYmq0OKWLYN9" 
                     alt="Ray Tracing Visual"
                  />
                  <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between">
                     <div className="flex justify-between items-start">
                        <FormulaBox label="SNELL'S_LAW" value="n₁ sin θ₁ = n₂ sin θ₂" />
                        <FormulaBox label="LENS_EQUATION" value="1/f = 1/d₀ + 1/dᵢ" right />
                     </div>
                     <div className="flex justify-center gap-6 pointer-events-auto">
                        <ViewBtn icon={<RotateCw />} />
                        <ViewBtn icon={<ZoomIn />} />
                        <ViewBtn icon={<Grid />} />
                     </div>
                  </div>
               </div>
            </section>

            {/* Wavefront Telemetry Panel */}
            <aside className="col-span-12 lg:col-span-4 row-span-3 bg-[#0B0F14] border-l border-white/5 flex flex-col p-8 space-y-8">
               <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-[#4cd7f6] uppercase tracking-[0.4em]">WAVEFRONT_ANALYSIS</span>
               </div>
               <div className="aspect-square relative rounded-3xl bg-black/40 border border-white/5 overflow-hidden shadow-2xl group">
                  <img 
                     className="w-full h-full object-cover opacity-40 mix-blend-screen transition-transform duration-[10000ms] group-hover:scale-110" 
                     src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCvC9Z-nFkQUm4HGf3wO6bhOwJrj3O-Jv8nZPKCCdtHXRV-eMPVOMJNviUeuaG54FXXlxjp-iwGvMfWUST4zxx0Xe4byWIl9uDDtcKgXO5x2lx9ahzxW2uTq3oV6eJgeqA6h3RsFvGOai62QzXevt2BaD1jRH5RtHqaaHs_sLz6o28jpTONYNtC-Ha0sUFYPx8qVcywmHlyGfurBmQ8vpmGZja6kj22vObIjVZp6B-bQqf4bpOdqq6UP-vWSWpPbWvCTLgHcSmMC7L3" 
                     alt="Wavefront Map"
                  />
                  <div className="absolute bottom-6 left-6 flex flex-col">
                     <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">RMS_ERROR</span>
                     <span className="text-xl font-mono font-black text-[#4cd7f6]">{wavefront.rmsError_nm.toFixed(3)} λ</span>
                  </div>
               </div>
               <div className="space-y-4">
                  <TeleRow label="Spherical Aberration" value="+0.012" color="#f59e0b" />
                  <TeleRow label="Coma" value="-0.004" color="#4cd7f6" />
                  <TeleRow label="Astigmatism" value="0.000" color="white" />
               </div>
               <div className="flex-1 border-t border-white/5 pt-6">
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-widest block mb-4">LIVE_STREAM_TELEMETRY</span>
                  <div className="flex items-end gap-1 h-12">
                     {Array.from({ length: 16 }).map((_, i) => (
                        <div 
                           key={i} 
                           className="flex-1 bg-gradient-to-t from-[#4cd7f6] to-transparent rounded-t-sm opacity-40"
                           style={{ height: `${Math.random() * 100}%` }}
                        />
                     ))}
                  </div>
               </div>
            </aside>

            {/* Refractive Index Table */}
            <aside className="col-span-12 lg:col-span-4 row-span-3 bg-[#0B0F14] border-t border-white/5 flex flex-col">
               <div className="h-8 bg-white/[0.02] border-b border-white/5 px-6 flex items-center">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">REFRACTIVE_INDICES_MATRIX</span>
               </div>
               <div className="flex-1 overflow-auto custom-scrollbar">
                  <table className="w-full text-left font-mono text-[11px]">
                     <thead className="sticky top-0 bg-[#0B0F14] border-b border-white/5 z-10">
                        <tr>
                           <Th>MATERIAL_ID</Th>
                           <Th>INDEX_(n)</Th>
                           <Th>ABBE_(V)</Th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-white/[0.02]">
                        <Tr id="BK7_BOROSILICATE" n="1.5168" v="64.17" />
                        <Tr id="F2_FLINT_GLASS" n="1.6200" v="36.37" />
                        <Tr id="SF11_DENSE_FLINT" n="1.7847" v="25.76" />
                        <Tr id="F_SILICA_UV" n="1.4585" v="67.82" />
                        <Tr id="CAF2_CRYSTAL" n="1.4338" v="95.23" />
                     </tbody>
                  </table>
               </div>
            </aside>

            {/* AI Optical Reasoning Log */}
            <footer className="col-span-12 lg:col-span-8 row-span-2 bg-[#0B0F14] border-t border-white/5 flex flex-col overflow-hidden">
               <div className="h-8 bg-white/[0.02] border-b border-white/5 px-6 flex items-center justify-between">
                  <span className="text-[9px] font-black text-[#4cd7f6] uppercase tracking-[0.4em]">AI_OPTICAL_REASONING_LOG</span>
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_10px_#4cd7f6]" />
                     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">NEURAL_PROCESSING_ACTIVE</span>
                  </div>
               </div>
               <div className="flex-1 p-6 font-mono text-[12px] overflow-y-auto custom-scrollbar space-y-2 bg-black/40">
                  {reasoningTrace.slice(-5).map((trace, i) => (
                     <div key={i} className="flex gap-4">
                        <span className="text-[#4cd7f6] opacity-40 shrink-0">[{new Date(trace.timestamp).toLocaleTimeString()}]</span>
                        <p className="text-white/60">{trace.thought}</p>
                     </div>
                  ))}
                  {reasoningTrace.length === 0 && (
                     <>
                        <ReasoningRow time="09:44:21.03" msg="Initializing system-wide ray trace for active aperture..." color="#4cd7f6" />
                        <ReasoningRow time="09:44:21.45" msg="AlertTriangle: Edge aberration detected in secondary lens cluster at 14.5mm radius." color="#f59e0b" />
                        <ReasoningRow time="09:44:22.12" msg="Calculating corrective shift for surface curvature S4." color="#4cd7f6" />
                        <ReasoningRow time="09:44:22.89" msg="AI Suggestion: Increase refractive index n2 to 1.545 to compensate for chromatic shift." color="#adc6ff" />
                        <ReasoningRow time="09:44:23.05" msg="Focal point stability confirmed at 99.98%." color="#10b981" />
                     </>
                  )}
                  <div className="text-[#10b981] font-black mt-4 uppercase tracking-[0.2em]">&gt; SYSTEM STATUS: OPTIMIZED</div>
               </div>
            </footer>
         </main>
      </div>

      {/* 4. BOTTOM NAV (Mobile) */}
      <footer className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 md:hidden px-4 bg-black/80 backdrop-blur-3xl rounded-t-[32px] border-t border-white/5">
         <div className="bg-[#4cd7f6] text-black rounded-2xl w-12 h-12 flex items-center justify-center shadow-[0_0_20px_#4cd7f640]"><BarChart3 /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#4cd7f6] transition-colors"><Eye /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#4cd7f6] transition-colors"><Terminal /></div>
         <div className="text-white/20 w-12 h-12 flex items-center justify-center hover:text-[#4cd7f6] transition-colors"><Timer /></div>
      </footer>

      <style jsx>{`
         .scanline-overlay {
            background: linear-gradient(to bottom, transparent 50%, rgba(76, 215, 246, 0.05) 50%);
            background-size: 100% 4px;
         }
      `}</style>
    </div>
  );
};

const TopMetric = ({ label, value }: any) => (
  <div className="flex flex-col items-end">
     <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">{label}</span>
     <span className="text-[12px] font-mono font-black text-[#4cd7f6]">{value}</span>
  </div>
);

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`flex flex-col items-center justify-center py-6 cursor-pointer transition-all group ${active ? 'bg-[#4cd7f6]/10 text-[#4cd7f6] border-l-4 border-[#4cd7f6]' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform">{icon}</div>
     <span className="text-[9px] font-black uppercase tracking-widest mt-2">{label}</span>
  </div>
);

const FormulaBox = ({ label, value, right }: any) => (
  <div className={`bg-black/60 p-4 border border-white/5 backdrop-blur-3xl rounded-xl shadow-2xl ${right ? 'text-right' : ''}`}>
     <p className="text-[8px] font-black text-[#4cd7f6] uppercase tracking-widest mb-1">{label}</p>
     <p className="text-[11px] font-mono font-black text-white">{value}</p>
  </div>
);

const ViewBtn = ({ icon }: any) => (
  <button className="bg-black/60 border border-white/10 p-3 text-[#4cd7f6] hover:bg-[#4cd7f6] hover:text-black transition-all rounded-xl shadow-2xl active:scale-95">
     {icon}
  </button>
);

const TeleRow = ({ label, value, color }: any) => (
  <div className="flex justify-between items-center py-1 border-b border-white/5">
     <span className="text-[11px] font-black text-white/40">{label}</span>
     <span className="text-[11px] font-mono font-black" style={{ color }}>{value}</span>
  </div>
);

const ReasoningRow = ({ time, msg, color }: any) => (
  <div className="flex gap-4">
     <span className="text-[#4cd7f6] opacity-40 shrink-0">[{time}]</span>
     <p className="text-white/60" style={{ color: `${color}80` }}>{msg}</p>
  </div>
);

const Th = ({ children }: any) => (
  <th className="px-6 py-4 text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">{children}</th>
);

const Tr = ({ id, n, v }: any) => (
  <tr className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
     <td className="px-6 py-4 text-[#4cd7f6] font-black">{id}</td>
     <td className="px-6 py-4 text-white font-black">{n}</td>
     <td className="px-6 py-4 text-white/40">{v}</td>
  </tr>
);

export default OpticsCommandCenterEngineeringOS_759ea7;
