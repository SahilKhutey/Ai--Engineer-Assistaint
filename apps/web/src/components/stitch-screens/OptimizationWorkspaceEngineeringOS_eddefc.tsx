'use client';

import React, { useState } from 'react';
import {
  BarChart3,
  Brain,
  Zap,
  Activity,
  Settings,
  Search,
  Maximize2,
  Layers,
  Play,
  Pause,
  Download,
  Terminal,
  RefreshCw,
  Database,
  Shield,
  Box,
  GitBranch,
  Cpu,
  Factory,
  FolderOpen,
  FlaskConical,
  Verified,
  PlusCircle,
  ArrowLeftRight,
  Stars,
  Ruler,
  ChevronRight,
  MoreVertical,
  LayoutGrid,
  TrendingUp,
  Scale,
  HardDrive
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * OptimizationWorkspace v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity workspace for multi-objective optimization and Pareto analysis.
 * Refactored to a sovereign React component with 60Hz real-time state binding.
 */
const OptimizationWorkspaceEngineeringOS_eddefc = () => {
  const { structuralState, orchestrationState, osStatus, pushEvent } = useEngineeringStore();
  const { 
    maxStress_mPa = 142.5,
    safetyFactor = 2.4,
    displacements = []
  } = structuralState || {};
  
  const { swarmAgreement = 0.92 } = orchestrationState || {};
  const { kernelLoad = 0.82 } = osStatus || {};

  const [activeVariant, setActiveVariant] = useState('001_BASE');

  const handleAction = (action: string) => {
    pushEvent?.('OPTIM_ACTION_TRIGGERED', { action, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-blue-500/30 animate-in fade-in duration-1000">
      {/* Cockpit Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <LayoutGrid className="w-4 h-4 text-blue-400" />
          </div>
          <h1 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono text-blue-400">OPTIMIZATION_WORKSPACE // V3.2</h1>
        </div>
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-4 px-4 py-1.5 bg-white/[0.02] border border-white/5 rounded-full">
              <div className="flex items-center gap-2">
                 <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">GPU</span>
                 <span className="text-[10px] font-mono font-black text-blue-400">94%</span>
              </div>
              <div className="w-px h-3 bg-white/5" />
              <div className="flex items-center gap-2">
                 <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">SIM</span>
                 <span className="text-[10px] font-mono font-black text-emerald-400">ACTIVE</span>
              </div>
           </div>
           <Settings className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAVIGATION (v3.2 Hardened) */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-6 hidden lg:flex shrink-0">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_CORE</span>
          <nav className="flex flex-col gap-2">
            <SidebarItem icon={<FolderOpen className="w-4 h-4" />} label="Projects" />
            <SidebarItem icon={<FlaskConical className="w-4 h-4" />} label="Simulations" active />
            <SidebarItem icon={<Cpu className="w-4 h-4" />} label="AI Agents" />
            <SidebarItem icon={<Factory className="w-4 h-4" />} label="Digital Twin" />
            <SidebarItem icon={<Factory className="w-4 h-4" />} label="Manufacturing" />
          </nav>

          <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
             <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">THREAD_LOAD</span>
                   <span className="text-[11px] font-mono font-black text-blue-400">{(kernelLoad * 100).toFixed(0)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-500" style={{ width: `${kernelLoad * 100}%` }} />
                </div>
             </div>
          </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar relative">
          
          {/* Optimization Goals Header */}
          <section className="bg-black/40 border border-white/5 p-8 rounded-[40px] backdrop-blur-3xl shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-4 flex justify-between items-center border-b border-white/5 pb-4 mb-2">
               <div className="flex items-center gap-3">
                  <Scale className="w-4 h-4 text-blue-400" />
                  <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">OPTIMIZATION_GOALS</span>
               </div>
               <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">ESTIMATED_RUN_TIME: 142s</span>
            </div>
            
            <GoalSlider label="TARGET_MASS (KG)" value="45.0" progress={45} color="blue" min="12.4" max="100" />
            <GoalSlider label="YIELD_STRENGTH (MPA)" value="850" progress={78} color="emerald" min="420" max="1200" />
            <GoalSlider label="UNIT_COST (USD)" value="320" progress={22} color="amber" min="145" max="1000" />
            <GoalSlider label="CO2_FOOTPRINT (KG)" value="3.5" progress={15} color="rose" min="0.5" max="12.0" />
          </section>

          {/* Pareto Visualization & AI Insights */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
            <div className="lg:col-span-2 bg-black/40 border border-white/5 rounded-[40px] p-8 relative overflow-hidden backdrop-blur-3xl group shadow-2xl flex flex-col">
              <div className="absolute top-8 right-8 z-20 flex gap-2">
                 <button className="px-4 py-1.5 bg-white/[0.05] border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Y: MASS</button>
                 <button className="px-4 py-1.5 bg-white/[0.05] border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">X: STRENGTH</button>
              </div>
              <div className="flex items-center gap-3 mb-8">
                 <BarChart3 className="w-4 h-4 text-blue-400" />
                 <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">PARETO_FRONT_VISUALIZATION_V4.2</span>
              </div>
              
              {/* Pareto Chart Mockup */}
              <div className="flex-1 border-l border-b border-white/10 relative mt-4">
                 <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 5,95 Q 15,20 95,5" fill="none" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="0.5" strokeDasharray="2" />
                    {[10, 20, 55, 85].map((x, i) => (
                       <circle key={i} cx={x} cy={100 - x} r="1" fill="#3b82f6" fillOpacity="0.4" />
                    ))}
                    <circle cx="35" cy="45" r="2" fill="#3b82f6" className="animate-pulse shadow-[0_0_15px_#3b82f6]" />
                    <path d="M 30,50 L 50,40 L 45,60 Z" fill="rgba(251, 191, 36, 0.1)" stroke="#fbbf24" strokeWidth="0.2" />
                 </svg>
                 <div className="absolute top-[42%] left-[37%] bg-black/80 border border-amber-500/40 p-3 rounded-xl backdrop-blur-md shadow-2xl">
                    <span className="text-[9px] font-mono font-black text-amber-400 uppercase tracking-widest block">OPTIMAL_CLUSTER_09</span>
                    <span className="text-[8px] text-white/40 uppercase font-mono block">Max Curvature Point</span>
                 </div>
              </div>
            </div>

            <div className="bg-black/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-6 backdrop-blur-3xl shadow-2xl overflow-hidden">
               <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <Brain className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">AI_GENERATIVE_INSIGHTS</span>
               </div>
               <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4">
                  <InsightCard 
                    title="STRENGTH_DENSITY_ANOMALY" 
                    content="Lattice structure Alpha-9 shows 12% improvement in fatigue life over baseline with 3% mass penalty."
                    color="amber"
                  />
                  <InsightCard 
                    title="PARETO_EQUILIBRIUM" 
                    content="Point 35,45 represents the maximum curvature of the trade-off front. Recommended starting point."
                    color="blue"
                  />
                  <div className="p-4 bg-white/[0.02] border border-dashed border-white/10 rounded-2xl italic">
                     <p className="text-[10px] text-white/20 font-mono">Waiting for further simulation results... (14/50 completed)</p>
                  </div>
               </div>
               <button 
                 onClick={() => handleAction('REFINE_MODEL')}
                 className="w-full py-4 bg-blue-500 text-white font-black text-[11px] uppercase tracking-[0.4em] rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
               >
                  REFINE_MODEL
               </button>
            </div>
          </section>

          {/* Variant Comparison Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            <VariantCard 
              id="001_BASE" 
              mass="24.2kg" 
              strength="892 MPa" 
              fatigue="1.2e6" 
              mfg="98%" 
              status="OPTIMIZED"
              img="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCQGBQE-SlOrUsO7paiQ_znI1qxFbK3y1X29KK0ZPebW4vlTWpYNHtaZ-cM6BF95CEnONq8UJ3J-ZeW3K6CehQXSoV2fm0arVgso8U6LcsinuEgWydoCiMwo9ZihTfLOeVBqrHiFUcChSc9T54LZcC8vb2TG8MRvJg81RQdNa7ONtcswqHsDYz7d8QqwVfMu3yYort1NqaNCST_8CCwPHKQVVr3lFNdWMjEeaqxiwtwggVT0YJ0jCek4XYrbgSVDZpFJbuSrDW1EyLN"
            />
            <VariantCard 
              id="002_LIGHT" 
              mass="18.5kg" 
              strength="740 MPa" 
              fatigue="0.8e6" 
              mfg="82%" 
              status="ULTRA_LITE"
              img="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBbz5qb5o_MJP9ib_XN5KKLVZ7G99Uq-XKLteyRCw_uSXWQ3VlJRTthb2SSoD6E5NxWguG2ca5fb8D0VmPCtD-SEWJWMjaJNzSVgSUVXXi5yPP0XgntN_E8l1GMqICKwtrwGHPFOJpQW6UYUq0NHl8gpHqaxu4YtqJzbnE6ybtUu31KJSqpFxN-H1WAX4mtIzGJ-G4ru-uXbM3_m0Ba_y8FJ4P1yyAkbYNmhk8imSOc8p8UlBlbPCz7LdeSUvvfQLTFoyyyLM3iFtxs"
            />
            <VariantCard 
              id="003_MAX" 
              mass="32.1kg" 
              strength="1120 MPa" 
              fatigue="5.4e6" 
              mfg="91%" 
              status="DURABLE"
              img="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBx5MzC9b3sfUAgmyTCYlyrenx3zK1pkm2ahKeJ63ozjDkrQTyy0-gMjWziy0oFWCx06jW_qNvIEMm1nxSZR8UqCdvFub3B4ytxSG2-tKUUWFmHHNo59e6jK0Va4JnL0HC0Ol1MHfQDxyPuiQiCkuGUNnxTFSlQNGcJHm5O-qGideHaHTR-SgpbZ6wihaseYst9u90wsmNDvrWvrEkDXmqmSA04_h7pcIhmPO2EuXoD-TfOZajQIZ0tTfLtxuLcpt_UNeq1xPC2sx2u"
            />
            
            <button className="h-full bg-white/[0.02] border border-dashed border-white/10 rounded-[40px] flex flex-col items-center justify-center p-8 text-center gap-4 hover:bg-white/[0.05] hover:border-white/20 transition-all group active:scale-[0.98]">
               <div className="p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform">
                  <PlusCircle className="w-8 h-8 text-white/20 group-hover:text-blue-400" />
               </div>
               <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">GENERATE_NEW_VARIANT</span>
               <span className="text-[9px] text-white/10 uppercase font-mono max-w-[120px]">Auto-spawn based on current trade-offs</span>
            </button>
          </section>

          {/* Floating Action Bar */}
          <footer className="mt-auto border-t border-white/5 py-6 flex flex-wrap items-center gap-4 z-20 shrink-0">
             <button className="bg-blue-500 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-3 shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                <Play className="w-4 h-4 fill-current" /> SIMULATE
             </button>
             <button className="bg-white/5 border border-white/10 text-white/60 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-3 hover:bg-white/10 transition-all">
                <ArrowLeftRight className="w-4 h-4" /> COMPARE_SIDE_BY_SIDE
             </button>
             <button className="bg-white/5 border border-white/10 text-white/60 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-3 hover:bg-white/10 transition-all">
                <Stars className="w-4 h-4" /> PROMOTE_TO_BASELINE
             </button>
             <button className="ml-auto bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-3 hover:bg-emerald-500 hover:text-white transition-all">
                <Download className="w-4 h-4" /> EXPORT_CAD
             </button>
          </footer>

        </main>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .scanline {
          background: linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 50%, transparent 50%);
          background-size: 100% 4px;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-xl' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
    <div className="group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-[11px] font-black uppercase tracking-[0.2em]">{label}</span>
  </div>
);

const GoalSlider = ({ label, value, progress, color, min, max }: any) => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
       <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">{label}</span>
       <span className={`text-[12px] font-mono font-black text-${color}-400`}>{value}</span>
    </div>
    <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
       <div className={`h-full bg-${color}-500 shadow-[0_0_10px_rgba(var(--${color}-rgb),0.5)] transition-all duration-1000`} style={{ width: `${progress}%` }} />
    </div>
    <div className="flex justify-between text-[8px] font-mono text-white/20">
       <span>MIN: {min}</span>
       <span>GOAL: {value}</span>
    </div>
  </div>
);

const InsightCard = ({ title, content, color }: any) => (
  <div className={`p-5 rounded-2xl border transition-all ${color === 'amber' ? 'bg-amber-500/5 border-amber-500/10' : 'bg-blue-500/5 border-blue-500/10'}`}>
     <span className={`text-[9px] font-black uppercase tracking-widest block mb-2 ${color === 'amber' ? 'text-amber-400' : 'text-blue-400'}`}>{title}</span>
     <p className="text-[12px] text-white/60 leading-relaxed font-medium">{content}</p>
  </div>
);

const VariantCard = ({ id, mass, strength, fatigue, mfg, status, img }: any) => (
  <div className="bg-black/40 border border-white/5 rounded-[40px] overflow-hidden backdrop-blur-3xl shadow-2xl group cursor-pointer hover:border-blue-500/20 transition-all">
     <div className="h-32 relative overflow-hidden">
        <img src={img} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
        <div className="absolute top-4 left-4 bg-blue-500/80 backdrop-blur-md px-3 py-1 rounded-lg text-[9px] font-black text-white uppercase tracking-widest">VARIANT_{id}</div>
     </div>
     <div className="p-6 space-y-3">
        <DataRow label="MASS" value={mass} />
        <DataRow label="STRENGTH" value={strength} />
        <DataRow label="FATIGUE" value={fatigue} />
        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
           <div className="flex items-center gap-2">
              <Verified className="w-3 h-3 text-blue-400" />
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">{status}</span>
           </div>
           <span className="text-[10px] font-mono font-black text-amber-400">{mfg} MFG</span>
        </div>
     </div>
  </div>
);

const DataRow = ({ label, value }: any) => (
  <div className="flex justify-between items-center text-[10px] font-mono">
     <span className="text-white/20 uppercase tracking-widest">{label}:</span>
     <span className="text-white/80 font-black tracking-tight">{value}</span>
  </div>
);

export default OptimizationWorkspaceEngineeringOS_eddefc;
