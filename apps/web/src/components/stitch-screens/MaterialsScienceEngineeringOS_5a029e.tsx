'use client';

import React, { useState, useMemo } from 'react';
import {
  Terminal,
  Settings,
  Brain,
  Maximize2,
  MoreVertical,
  LayoutGrid,
  TrendingUp,
  Database,
  Shield,
  Zap,
  Waves,
  BarChart3,
  Power,
  Share2,
  History,
  HardDrive,
  Cpu,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Network,
  AlertTriangle,
  Play,
  RefreshCw,
  Grid,
  Eye,
  Layers,
  Sigma,
  Box,
  CheckCircle2,
  Info,
  BarChart,
  Binary,
  Scale,
  Gauge,
  Clock,
  Thermometer,
  Sparkles,
  FolderOpen,
  FlaskConical,
  Fingerprint,
  Filter,
  User,
  Rocket,
  Signal,
  Code,
  AlertCircle,
  XCircle,
  Navigation,
  Target,
  Activity,
  Boxes,
  Workflow,
  RotateCw,
  ZoomIn,
  Camera,
  Hammer,
  Wrench,
  Anchor,
  Move,
  Microscope,
  Atom,
  ClipboardList
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * MaterialsScienceEngineering v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity workbench for advanced materials simulation and metallurgical analysis.
 * Refactored to a sovereign React component with 60Hz real-time state binding.
 */
const MaterialsScienceEngineeringOS_5a029e = () => {
  const { physicsState, structuralState, osStatus, pushEvent, addNotification } = useEngineeringStore();
  const { temperature_k = 1200, yield_strength_mpa = 340.5 } = physicsState || {};
  const { integrity = 0.998 } = structuralState || {};
  const { kernelLoad = 0.94 } = osStatus || {};

  const [fatigueValue, setFatigueValue] = useState('340.5');
  const [creepValue, setCreepValue] = useState('1.42e-7');
  const [fractureValue, setFractureValue] = useState('78.2');

  const handleRecalculate = () => {
    pushEvent?.('MATERIAL_LAW_RECALCULATION', { 
      fatigue: fatigueValue, 
      creep: creepValue,
      timestamp: Date.now() 
    });
    addNotification?.({
      title: 'RECALCULATION_COMPLETE',
      message: 'Hysteresis model updated with new boundary parameters.',
      type: 'INFO'
    });
  };

  const hysteresisPath = useMemo(() => {
    // Generates a representative hysteresis loop path
    return "M 100 100 Q 150 20, 300 20 T 350 100 Q 300 180, 150 180 T 100 100";
  }, []);

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-blue-500/30 animate-in fade-in duration-1000">
      {/* Cockpit Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 cockpit-grid pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-2xl">
             <Atom className="w-4 h-4 text-blue-400" />
          </div>
          <h1 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono text-blue-400">MATERIALS_SCIENCE // v3.2</h1>
        </div>
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono font-black text-white/20 uppercase tracking-widest">KERNEL: {(integrity * 100).toFixed(1)}% | GPU: {(kernelLoad * 100).toFixed(0)}%</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
           </div>
           <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-6">
              <Settings className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAVIGATION */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-6 hidden lg:flex shrink-0">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_CORE</span>
          <nav className="flex flex-col gap-2">
            <SidebarItem icon={<FlaskConical className="w-4 h-4" />} label="Simulations" active />
            <SidebarItem icon={<FolderOpen className="w-4 h-4" />} label="Projects" />
            <SidebarItem icon={<Cpu className="w-4 h-4" />} label="AI Agents" />
            <SidebarItem icon={<Hammer className="w-4 h-4" />} label="Digital Twin" />
            <SidebarItem icon={<LayoutGrid className="w-4 h-4" />} label="Manufacturing" />
          </nav>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 p-6 gap-6 flex flex-col overflow-y-auto custom-scrollbar relative">
          
          <div className="grid grid-cols-12 gap-6 h-full min-h-[900px]">
            
            {/* Grain Structure BarChart3 */}
            <section className="col-span-12 lg:col-span-8 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] flex flex-col shadow-2xl overflow-hidden group h-[500px]">
               <header className="h-10 px-8 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">GRAIN_STRUCTURE_ANALYTICS</span>
                  <div className="flex gap-4">
                     <Maximize2 className="w-3.5 h-3.5 text-white/10 hover:text-white cursor-pointer transition-colors" />
                  </div>
               </header>
               <div className="flex-1 relative overflow-hidden bg-[#05070a] group">
                  <img 
                    className="w-full h-full object-cover mix-blend-screen opacity-40 group-hover:scale-110 transition-transform duration-[20000ms]" 
                    src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDEhrcCc36EzCRSRiAPwH7-uS8NEA8E3JYchtZaRW2_AysWHOMX-CgfSvVQD2tuIf-v-GAFOTGc3LRWYhWRu3Y2J-8pnAm2eQZEWF-YXoJ4KuMyCnDTvKyahT2Y10_TQLsYot-eRit2KEUDyV1TTZzkjSmTMuJe_KFMvKlvSy_6sgTu23JWFODkNh4bf02qcQS3LX4fGoxb0Mwphq0Ko16GxfYSIcWm-ZvZ0p2dQyYPnPgEfa-KtKL2UHI6qv7Tdxj5O87PjGowzAV0" 
                  />
                  <div className="absolute top-8 left-8 flex flex-col gap-3">
                     <div className="bg-black/80 backdrop-blur-md p-4 border border-blue-500/20 rounded-2xl shadow-2xl">
                        <span className="text-[8px] font-black text-blue-400 uppercase tracking-[0.4em] block mb-1">VIEWPORT_COORD</span>
                        <span className="text-[11px] font-mono font-black text-white tracking-tighter">X: 142.09 | Y: 89.12 | Z: 0.04</span>
                     </div>
                  </div>
                  <div className="absolute bottom-8 right-8">
                     <div className="bg-black/80 backdrop-blur-md p-6 border border-white/5 rounded-[32px] shadow-2xl min-w-[200px]">
                        <div className="space-y-3">
                           <AnalyticsRow label="GRAIN_SIZE" val="12.4 μm" color="text-blue-400" />
                           <AnalyticsRow label="ORIENTATION" val="FCC [111]" color="text-blue-400" />
                           <AnalyticsRow label="PHASE_DIST" val="94.2% α / 5.8% β" color="text-amber-500" />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Mechanical Inputs */}
            <section className="col-span-12 lg:col-span-4 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] flex flex-col shadow-2xl overflow-hidden group h-[500px]">
               <header className="h-10 px-8 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">MECHANICAL_INPUTS</span>
                  <Settings className="w-3.5 h-3.5 text-white/10" />
               </header>
               <div className="flex-1 p-8 flex flex-col gap-6">
                  <InputGroup 
                    label="FATIGUE_CURVE (S-N)" 
                    unit="MPa" 
                    val={fatigueValue} 
                    setVal={setFatigueValue} 
                    color="text-blue-400" 
                  />
                  <InputGroup 
                    label="CREEP_PARAM (ε̇)" 
                    unit="s⁻¹" 
                    val={creepValue} 
                    setVal={setCreepValue} 
                    color="text-amber-500" 
                  />
                  <InputGroup 
                    label="FRACTURE_TOUGHNESS (K1c)" 
                    unit="MPa√m" 
                    val={fractureValue} 
                    setVal={setFractureValue} 
                    color="text-white" 
                  />
                  
                  <div className="pt-6 border-t border-white/5 space-y-3">
                     <p className="text-[9px] font-mono font-black text-white/20 uppercase tracking-widest italic">Current Material Law:</p>
                     <div className="bg-black/40 p-6 flex items-center justify-center border border-white/5 rounded-[24px] shadow-inner">
                        <span className="text-blue-400 font-mono text-[14px] font-black italic tracking-tighter">σ = K · εⁿ · ε̇ᵐ</span>
                     </div>
                  </div>
                  
                  <button 
                    onClick={handleRecalculate}
                    className="mt-auto w-full bg-blue-500 text-white font-black text-[10px] py-4 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] uppercase tracking-[0.2em]"
                  >
                     RECALCULATE_ENGINE
                  </button>
               </div>
            </section>

            {/* Hysteresis Visualization */}
            <section className="col-span-12 lg:col-span-7 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] h-[350px] flex flex-col shadow-2xl overflow-hidden group">
               <header className="h-10 px-8 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">HYSTERESIS_VISUALIZATION</span>
                  <span className="text-[9px] font-mono font-black text-blue-400 tracking-widest animate-pulse uppercase">LIVE_FEED</span>
               </header>
               <div className="flex-1 p-8 flex gap-8">
                  <div className="flex-1 relative border-l border-b border-white/10 group-hover:border-white/20 transition-colors">
                     <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                        <path d="M 0 50 L 400 50 M 0 100 L 400 100 M 0 150 L 400 150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <path d="M 100 0 L 100 200 M 200 0 L 200 200 M 300 0 L 300 200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        <path 
                          d={hysteresisPath} 
                          fill="rgba(59, 130, 246, 0.05)" 
                          stroke="#3b82f6" 
                          strokeWidth="2" 
                          className="drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] animate-pulse" 
                        />
                        <circle cx="350" cy="100" fill="#f59e0b" r="4" className="shadow-[0_0_10px_#f59e0b]" />
                        <text fill="#f59e0b" fontFamily="JetBrains Mono" fontSize="10" fontWeight="bold" x="360" y="95">CRITICAL_YIELD</text>
                     </svg>
                     <div className="absolute top-0 right-0 p-4 bg-black/60 backdrop-blur-md border border-amber-500/20 rounded-[20px] shadow-2xl">
                        <span className="text-[8px] font-black text-amber-500 uppercase tracking-[0.4em] block mb-1">PRED_FATIGUE_LIFE</span>
                        <span className="text-[14px] font-mono font-black text-white tracking-tighter italic">1.2e+6 CYCLES</span>
                     </div>
                  </div>
                  <div className="w-20 flex flex-col justify-between items-center py-4">
                     <div className="h-full w-2.5 bg-white/5 rounded-full relative overflow-hidden border border-white/5 shadow-inner">
                        <div className="absolute bottom-0 w-full h-[75%] bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
                     </div>
                     <span className="text-[8px] font-black text-white/20 uppercase tracking-widest text-center mt-3">STRESS_LOAD</span>
                  </div>
               </div>
            </section>

            {/* AI Metallurgy Reasoning */}
            <section className="col-span-12 lg:col-span-5 bg-black/40 backdrop-blur-3xl border border-blue-500/20 rounded-[40px] h-[350px] flex flex-col shadow-2xl overflow-hidden group">
               <header className="h-10 px-8 flex justify-between items-center border-b border-blue-500/10 bg-blue-500/5">
                  <div className="flex items-center gap-3">
                     <Brain className="w-3.5 h-3.5 text-blue-400" />
                     <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">AI_METALLURGY_REASONING</span>
                  </div>
                  <span className="text-[9px] font-mono font-black text-white/20 uppercase tracking-widest italic">v4.0.2</span>
               </header>
               <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
                  <ReasoningAlert 
                    icon={<AlertCircle className="w-4 h-4" />} 
                    title="POTENTIAL_LATTICE_INSTABILITY" 
                    msg="Analysis of grain boundaries at 1200K suggests dislocation pile-up at α-β phase interfaces." 
                    type="error"
                  />
                  <div className="bg-white/[0.02] p-6 border border-white/5 rounded-[32px] space-y-4">
                     <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em] block">RECOMMENDATION_01</span>
                     <div className="flex gap-4">
                        <FlaskConical className="w-5 h-5 text-blue-400 shrink-0" />
                        <div className="space-y-2">
                           <p className="text-[12px] font-mono font-black text-white leading-relaxed italic uppercase">Increase Titanium-64 concentration by 0.8%wt.</p>
                           <p className="text-[11px] font-medium text-white/40 leading-relaxed italic">Goal: Stabilize beta phase grains and reduce crack propagation velocity by 12%.</p>
                        </div>
                     </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center px-2">
                     <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                        <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">NEURAL_NET: READY</span>
                     </div>
                     <button className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-2">
                        GENERATE_REPORT
                        <ChevronRight className="w-3.5 h-3.5" />
                     </button>
                  </div>
               </div>
            </section>

          </div>
        </main>
      </div>

      {/* Mobile Control Navigation */}
      <nav className="fixed bottom-0 left-0 w-full h-16 bg-black/80 backdrop-blur-2xl border-t border-white/5 flex md:hidden items-center justify-around px-6 z-50">
         <div className="p-2 text-white/20 hover:text-white transition-all"><Terminal className="w-5 h-5" /></div>
         <div className="p-2 text-white/20 hover:text-white transition-all"><ClipboardList className="w-5 h-5" /></div>
         <div className="p-3 bg-blue-500 rounded-full text-white shadow-[0_0_20px_#3b82f6]"><Atom className="w-5 h-5" /></div>
         <div className="p-2 text-white/20 hover:text-white transition-all"><FlaskConical className="w-5 h-5" /></div>
      </nav>

      <style jsx>{`
        .cockpit-grid {
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

const AnalyticsRow = ({ label, val, color }: any) => (
  <div className="flex justify-between items-baseline gap-4">
     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{label}</span>
     <span className={`text-[12px] font-mono font-black ${color} tracking-tighter italic text-right`}>{val}</span>
  </div>
);

const InputGroup = ({ label, unit, val, setVal, color }: any) => (
  <div className="space-y-3">
     <label className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em] block">{label}</label>
     <div className="flex items-center gap-4 group">
        <input 
          type="text" 
          value={val} 
          onChange={(e) => setVal(e.target.value)}
          className={`flex-1 bg-black/40 border border-white/5 px-6 py-4 rounded-2xl font-mono text-xl font-black italic tracking-tighter focus:border-blue-500/50 outline-none transition-all ${color}`} 
        />
        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest w-12">{unit}</span>
     </div>
  </div>
);

const ReasoningAlert = ({ icon, title, msg, type }: any) => (
  <div className={`p-6 border-l-4 rounded-r-[32px] rounded-l-[8px] space-y-2 ${
    type === 'error' ? 'bg-rose-500/5 border-rose-500/50' : 'bg-blue-500/5 border-blue-500/50'
  }`}>
     <div className="flex items-center gap-3">
        <div className={type === 'error' ? 'text-rose-500' : 'text-blue-500'}>{icon}</div>
        <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${type === 'error' ? 'text-rose-500' : 'text-blue-500'}`}>{title}</span>
     </div>
     <p className="text-[12px] text-white/60 leading-relaxed font-mono font-medium italic uppercase">{msg}</p>
  </div>
);

export default MaterialsScienceEngineeringOS_5a029e;
