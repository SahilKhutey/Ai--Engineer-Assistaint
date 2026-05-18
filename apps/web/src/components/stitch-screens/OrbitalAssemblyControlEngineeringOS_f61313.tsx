'use client';

import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Settings,
  Brain,
  Maximize2,
  MoreVertical,
  TrendingUp,
  Database,
  Shield,
  Zap,
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
  Box,
  CheckCircle2,
  Info,
  BarChart3,
  Binary,
  Scale,
  Gauge,
  Clock,
  Thermometer,
  Sparkles,
  FolderOpen,
  FlaskConical,
  Cpu,
  Fingerprint,
  Filter,
  HardDrive,
  Share2,
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
  Hammer,
  Wrench,
  Anchor,
  Move,
  Camera} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * OrbitalAssemblyControl v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity mission-control interface for orbital manufacturing and assembly.
 * Refactored to a sovereign React component with 60Hz real-time state binding.
 */
const OrbitalAssemblyControlEngineeringOS_f61313 = () => {
  const { aerospaceState, structuralState, osStatus, pushEvent, addNotification } = useEngineeringStore();
  const { altitude_km = 408.2, velocity_km_s = 7.66 } = aerospaceState || {};
  const { integrity = 0.998, load_factor = 0.12 } = structuralState || {};
  const { kernelLoad = 0.94 } = osStatus || {};

  const [activeJoint, setActiveJoint] = useState('NODE_07');
  const [pitch, setPitch] = useState(0.041);
  const [yaw, setYaw] = useState(-0.002);

  const handleWeldAction = () => {
    pushEvent?.('ASSEMBLY_WELD_EXECUTED', { joint: activeJoint, timestamp: Date.now() });
    addNotification?.({
      title: 'WELD_COMPLETE',
      message: `Joint ${activeJoint} structural seal verified at 99.9% integrity.`,
      type: 'SUCCESS'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-blue-500/30 animate-in fade-in duration-1000">
      {/* Cockpit Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 cockpit-grid pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-2xl">
             <Boxes className="w-4 h-4 text-blue-400" />
          </div>
          <h1 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono text-blue-400">ANTIGRAVITY_OS // ASSEMBLY_v3.2</h1>
        </div>
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono font-black text-white/20 uppercase tracking-widest">GPU: {(kernelLoad * 100).toFixed(0)}% | SIM: ACTIVE</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
           </div>
           <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-6">
              <Settings className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
           </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar relative">
        
        {/* 2. 3D WIREFRAME VIEWPORT */}
        <section className="h-[320px] bg-black/40 backdrop-blur-3xl border-b border-white/5 flex flex-col relative shrink-0">
           <div className="absolute top-6 left-8 z-20 flex flex-col gap-3">
              <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-xl shadow-2xl">
                 <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">VIEWPORT: ASSEMBLY_ALPHA_9</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
                 <span className="text-[9px] font-mono font-black text-emerald-400 tracking-widest uppercase">LIVE_TELEMETRY</span>
              </div>
           </div>

           <div className="flex-1 relative overflow-hidden group">
              <img 
                className="w-full h-full object-cover opacity-20 grayscale brightness-50 group-hover:scale-105 transition-transform duration-[10000ms]" 
                src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCLNWe_k1THoxwj1ufVS5uq_WVUuRFwtVqThcN1-mnHADk1hG7Bkm7Yg_5VlXUcT5N46ed1W5T9B-OwkerEp2Hf5qRoUP9fA5s71s5ozW9w7Ph8UwKJi_OcT2EMAMpmUUSvNeuWEb8XXhjNZheZRyVmGcG8bDSOPcf4XH724pI7g4QcXhx_cRnI56yXpansvO61MXJ3SyqxnjH9MSLA2kxArc3YHamRQyjJ7uE25kRzMG6wr5c5zX8ingaMUAdo40tfSbjiBQhFBPlj" 
              />
              {/* HUD Overlays */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="w-48 h-48 border border-blue-500/10 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                    <div className="w-32 h-32 border border-blue-500/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-[1px] h-16 bg-blue-500/40" />
                    <div className="absolute h-[1px] w-16 bg-blue-500/40" />
                 </div>
              </div>
              {/* Floating Coordinates */}
              <div className="absolute bottom-6 right-8 text-right space-y-1">
                 <CoordRow label="X" val="+48.291.02" />
                 <CoordRow label="Y" val="-12.449.88" />
                 <CoordRow label="Z" val="+00.112.54" />
              </div>
           </div>

           <div className="flex h-10 border-t border-white/5 bg-white/[0.01]">
              <ViewportControl icon={<RotateCw className="w-3.5 h-3.5" />} label="ORBIT" />
              <ViewportControl icon={<ZoomIn className="w-3.5 h-3.5" />} label="ZOOM" />
              <ViewportControl icon={<Camera className="w-3.5 h-3.5" />} label="CAM_04" />
           </div>
        </section>

        {/* 3. AI GUIDANCE */}
        <section className="p-4 bg-white/[0.02] border-b border-white/5 relative z-10">
           <div className="flex items-center gap-3 mb-2 px-4">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">AI_GUIDANCE_SYSTEM</span>
           </div>
           <div className="p-4 bg-black/40 border border-blue-500/20 rounded-[24px] shadow-inner">
              <p className="text-[11px] font-mono font-black text-blue-400 leading-relaxed uppercase">
                 <span className="text-white/20">LOG:</span> Docking Sequence: v-bar approach optimized. Structural integrity check passed. Next phase: Truss expansion at Node 07.
              </p>
           </div>
        </section>

        {/* 4. CONTROL GRID */}
        <section className="p-4 grid grid-cols-2 gap-4 relative z-10 pb-20 md:pb-8">
           {/* Alignment Precision */}
           <div className="col-span-2 p-8 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] shadow-2xl group">
              <div className="flex justify-between items-center mb-6">
                 <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">JOINT_ALIGNMENT_PRECISION</h4>
                 <span className="text-[12px] font-mono font-black text-blue-400 tracking-tighter italic">{(integrity * 100).toFixed(1)}%</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <div className="flex justify-between text-[9px] font-mono font-black text-white/20 uppercase tracking-widest">
                       <span>AXIS_PITCH</span>
                       <span className="text-blue-400">{pitch.toFixed(3)}°</span>
                    </div>
                    <input 
                      type="range" 
                      min="-1" 
                      max="1" 
                      step="0.001" 
                      value={pitch} 
                      onChange={(e) => setPitch(parseFloat(e.target.value))}
                      className="w-full h-1 bg-white/5 rounded-full appearance-none accent-blue-500 hover:accent-blue-400 transition-all cursor-pointer"
                    />
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between text-[9px] font-mono font-black text-white/20 uppercase tracking-widest">
                       <span>AXIS_YAW</span>
                       <span className="text-blue-400">{yaw.toFixed(3)}°</span>
                    </div>
                    <input 
                      type="range" 
                      min="-1" 
                      max="1" 
                      step="0.001" 
                      value={yaw} 
                      onChange={(e) => setYaw(parseFloat(e.target.value))}
                      className="w-full h-1 bg-white/5 rounded-full appearance-none accent-blue-500 hover:accent-blue-400 transition-all cursor-pointer"
                    />
                 </div>
              </div>
           </div>

           {/* Integrity Heatmap */}
           <div className="p-8 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] shadow-2xl flex flex-col h-[220px]">
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-4">STRUCT_INTEGRITY_MAP</h4>
              <div className="flex-1 grid grid-cols-4 grid-rows-4 gap-1 p-2 bg-black/20 rounded-[20px] border border-white/5">
                 {Array.from({ length: 16 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`rounded-sm transition-all duration-500 ${
                        i === 6 || i === 9 ? 'bg-amber-500/40 border border-amber-500/20 animate-pulse' : 
                        'bg-blue-500/20 border border-blue-500/10'
                      }`} 
                    />
                 ))}
              </div>
              <div className="mt-3 flex justify-between text-[8px] font-black text-white/20 uppercase tracking-widest">
                 <span>NOMINAL</span>
                 <span className="text-amber-500">STRESS_WARN</span>
              </div>
           </div>

           {/* Stress Distribution */}
           <div className="p-8 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] shadow-2xl flex flex-col h-[220px]">
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-4">STRESS_DISTRIBUTION</h4>
              <div className="flex-1 flex items-end gap-1 bg-black/20 p-4 rounded-[20px] border border-white/5 relative overflow-hidden">
                 <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,80 Q25,20 50,70 T100,30" fill="none" stroke="#3b82f6" strokeWidth="2" className="drop-shadow-[0_0_8px_#3b82f6]" />
                 </svg>
                 {Array.from({ length: 12 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-blue-500/10 hover:bg-blue-500/30 transition-all cursor-pointer border-t border-blue-500/20" 
                      style={{ height: `${20 + Math.random() * 60}%` }} 
                    />
                 ))}
              </div>
              <div className="mt-3 text-[9px] font-mono font-black text-blue-400 uppercase tracking-widest italic">
                 RMS_ERR: 0.0031
              </div>
           </div>

           {/* Large Control Buttons */}
           <button 
             onClick={handleWeldAction}
             className="py-8 bg-blue-500 text-white rounded-[40px] flex flex-col items-center justify-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-[1.02] active:scale-95 transition-all group overflow-hidden relative"
           >
              <Hammer className="w-6 h-6 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] relative z-10">EXECUTE_WELD</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
           </button>
           <button className="py-8 bg-white/5 border border-white/10 text-white/40 rounded-[40px] flex flex-col items-center justify-center gap-3 hover:bg-white/10 hover:text-white transition-all active:scale-95 group">
              <Anchor className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em]">SAFE_DOCK</span>
           </button>
        </section>
      </div>

      {/* Mobile Control Navigation */}
      <nav className="fixed bottom-0 left-0 w-full h-16 bg-black/80 backdrop-blur-2xl border-t border-white/5 flex md:hidden items-center justify-around px-6 z-50">
         <div className="p-2 text-white/20 hover:text-white transition-all"><Terminal className="w-5 h-5" /></div>
         <div className="p-2 text-white/20 hover:text-white transition-all"><BarChart3 className="w-5 h-5" /></div>
         <div className="p-3 bg-blue-500 rounded-full text-white shadow-[0_0_20px_#3b82f6]"><Boxes className="w-5 h-5" /></div>
         <div className="p-2 text-white/20 hover:text-white transition-all"><Move className="w-5 h-5" /></div>
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

const CoordRow = ({ label, val }: any) => (
  <div className="flex items-baseline gap-2 justify-end">
     <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{label}:</span>
     <span className="text-[12px] font-mono font-black text-white tracking-tighter italic">{val}</span>
  </div>
);

const ViewportControl = ({ icon, label }: any) => (
  <button className="flex-1 border-r border-white/5 last:border-0 hover:bg-white/5 transition-colors flex items-center justify-center gap-3 group">
     <div className="text-white/20 group-hover:text-blue-400 transition-colors">{icon}</div>
     <span className="text-[9px] font-black text-white/20 group-hover:text-white transition-colors uppercase tracking-widest">{label}</span>
  </button>
);

const SidebarItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-xl' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
    <div className="group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-[11px] font-black uppercase tracking-[0.2em]">{label}</span>
  </div>
);

export default OrbitalAssemblyControlEngineeringOS_f61313;
