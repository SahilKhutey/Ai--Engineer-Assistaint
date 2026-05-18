'use client';

import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';
import {
  Factory,
  Activity,
  Cpu,
  Zap,
  RotateCcw,
  Play,
  Scissors,
  Save,
  UserCheck,
  Settings,
  Maximize2,
  Camera,
  Terminal,
  Layers,
  ChevronRight,
  Box,
  ShieldCheck,
  Thermometer
} from 'lucide-react';

/**
 * ManufacturingWorkspace v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity manufacturing control Share2.
 * Refactored to integrate with 60Hz materialization telemetry and G-Code streams.
 */
const ManufacturingWorkspaceEngineeringOS_a3c58e = () => {
  const { materializationState, osStatus } = useEngineeringStore();
  const { 
    cncStatus = 'NOMINAL',
    dfmScore = 94.2,
    layerIntegrity = 0.9988,
    gcode = { current_line: 'N0000 IDLE', progress: 0, time_elapsed: '00:00', time_total: '00:00' },
    depositionProtocol = 'LASER_SINTERING'
  } = materializationState || {};

  const gcodeLines = [
    { line: 'N0010 G00 X0.0 Y0.0 Z5.0', status: 'OK', type: 'secondary' },
    { line: 'N0020 G01 Z-2.0 F100', status: 'OK', type: 'secondary' },
    { line: 'N0030 X10.0 Y0.0', status: 'OK', type: 'secondary' },
    { line: 'N0040 G03 X20.0 Y10.0 I0.0 J10.0', status: 'RUN', type: 'text-white' },
    { line: gcode.current_line, status: 'ACTIVE', type: 'primary' },
    { line: 'N0060 G01 X0.0 Y20.0', status: 'PEND', type: 'text-white/40' },
    { line: 'N0070 Y0.0', status: 'PEND', type: 'text-white/40' },
    { line: 'N0080 M30', status: 'PEND', type: 'text-white/40' },
  ];

  return (
    <div className="flex flex-col h-full bg-[#05070A] text-[#E1E2EC] font-sans overflow-hidden p-6 space-y-6 animate-in fade-in duration-1000">
      
      {/* 1. PRODUCTION STATUS HEADER */}
      <section className="bg-[#1D2027]/50 border border-white/5 backdrop-blur-3xl rounded-[40px] p-8 flex items-center justify-between shadow-2xl relative overflow-hidden group">
         <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
         <div className="flex items-center gap-12 relative z-10">
            <div className="flex flex-col">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-2">WORKCENTER_ID</span>
               <span className="text-2xl font-black font-mono tracking-tighter">FAC_UNIT_09-A</span>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="flex gap-10">
               <StatusIndicator label="CNC_STATUS" value={cncStatus} active={cncStatus === 'NOMINAL'} color="emerald" />
               <StatusIndicator label="DEPOSITION" value={depositionProtocol} active={true} color="blue" />
               <StatusIndicator label="ASSEMBLY" value="LIVE_CYCLE" active={true} color="purple" />
            </div>
         </div>
         <div className="flex items-center gap-6 relative z-10">
            <div className="flex flex-col items-end mr-6 border-r border-white/10 pr-12">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-1">SYNC_T</span>
               <span className="text-xl font-black font-mono text-blue-400">{(60 + Math.random() * 0.1).toFixed(2)}Hz</span>
            </div>
            <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
               <RotateCcw className="w-5 h-5 text-blue-400" />
            </button>
         </div>
      </section>

      {/* 2. MAIN BarChart3 GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
         
         {/* DFM & AI ADVISORY */}
         <section className="lg:col-span-4 bg-[#1D2027]/30 border border-white/5 rounded-[48px] flex flex-col overflow-hidden backdrop-blur-xl shadow-2xl relative">
            <header className="h-14 flex items-center px-8 bg-white/[0.02] border-b border-white/5 justify-between">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">DFM_ANALYTICS</span>
               <Settings className="w-4 h-4 text-white/20 cursor-pointer hover:rotate-90 transition-transform duration-500" />
            </header>
            <div className="flex-1 flex flex-col items-center justify-center p-8 relative">
               {/* Radial Gauge */}
               <div className="relative w-56 h-56 flex items-center justify-center group">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg className="w-full h-full transform -rotate-90">
                     <circle className="text-white/5" cx="112" cy="112" fill="transparent" r="100" stroke="currentColor" strokeWidth="12"></circle>
                     <circle 
                        className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]" 
                        cx="112" cy="112" fill="transparent" r="100" 
                        stroke="currentColor" strokeWidth="12"
                        strokeDasharray="628.3" 
                        strokeDashoffset={628.3 * (1 - dfmScore / 100)}
                        style={{ transition: 'stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                        strokeLinecap="round"
                     ></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <span className="text-6xl font-black text-white tracking-tighter">{dfmScore.toFixed(1)}%</span>
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mt-2">OPTIMAL_FIT</span>
                  </div>
               </div>

               {/* AI Advisory */}
               <div className="mt-12 w-full p-6 bg-blue-500/5 border border-blue-500/10 rounded-[32px] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
                  <div className="flex items-center gap-3 mb-3 relative z-10">
                     <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">AI_CO_PILOT_ADVISORY</span>
                  </div>
                  <p className="text-[13px] font-mono leading-relaxed text-white/70 relative z-10 italic">
                     {osStatus.kernelLoad > 0.8 
                        ? "SYSTEM_LOAD_CRITICAL: THROTTLING_ANALYTICS_TO_MAINTAIN_SYNC_LOCK."
                        : "Tooling Access Anomaly detected at Junction [Z-402]. Recommend offset adjustment or 5-axis re-orientation."}
                  </p>
               </div>
            </div>
         </section>

         {/* CNC SIMULATION & G-CODE */}
         <section className="lg:col-span-8 bg-[#1D2027]/30 border border-white/5 rounded-[48px] flex flex-col overflow-hidden backdrop-blur-xl shadow-2xl">
            <header className="h-14 flex items-center px-8 bg-white/[0.02] border-b border-white/5 justify-between">
               <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">CNC_SIMULATION_RUNTIME</span>
                  <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[8px] font-black text-emerald-400 uppercase tracking-widest animate-pulse">LIVE_STREAM</div>
               </div>
               <div className="flex gap-6">
                  <Camera className="w-4 h-4 text-white/20 cursor-pointer hover:text-white transition-colors" />
                  <Maximize2 className="w-4 h-4 text-white/20 cursor-pointer hover:text-white transition-colors" />
               </div>
            </header>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 min-h-0">
               <div className="border-r border-white/5 relative bg-black/40 overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)] pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     {/* 3D Toolpath Mock Visual */}
                     <div className="relative w-48 h-48">
                        <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-4 border border-blue-500/10 rounded-lg transform rotate-45 animate-pulse" />
                        <Box className="absolute inset-0 m-auto w-12 h-12 text-blue-500/20" />
                        {/* Dynamic Tool Tip */}
                        <div 
                           className="absolute w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-500"
                           style={{ 
                              top: `${50 + 20 * Math.sin(Date.now() / 1000)}%`,
                              left: `${50 + 20 * Math.cos(Date.now() / 1000)}%`
                           }}
                        />
                     </div>
                  </div>
                  <div className="absolute bottom-8 left-8 flex items-center gap-3 p-4 bg-black/60 border border-white/10 backdrop-blur-2xl rounded-2xl">
                     <Terminal className="w-4 h-4 text-blue-400" />
                     <span className="text-[10px] font-mono font-black text-white/60">V_ACCEL: 42.5m/s²</span>
                  </div>
               </div>
               <div className="flex flex-col bg-black/20 font-mono overflow-hidden">
                  <div className="p-6 border-b border-white/5 bg-white/[0.01] flex justify-between">
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">BLOCK_COMMAND_STREAM</span>
                     <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">SOVEREIGN_v3.2</span>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                     {gcodeLines.map((line, i) => (
                        <div key={i} className={`flex justify-between items-center p-4 rounded-2xl border transition-all ${line.type === 'primary' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400 shadow-xl' : 'bg-transparent border-transparent text-white/40'}`}>
                           <span className="text-[12px]">{line.line}</span>
                           <span className="text-[10px] font-black tracking-widest opacity-40">{line.status}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className="h-20 bg-white/[0.02] border-t border-white/5 flex items-center px-10 gap-10">
               <button className="p-4 bg-blue-500 rounded-2xl text-white shadow-xl hover:scale-110 active:scale-95 transition-all">
                  <Play className="w-5 h-5 fill-current" />
               </button>
               <div className="flex-1 flex flex-col gap-3">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-white/30">
                     <span>PROGRESS</span>
                     <span className="text-white">{gcode.progress.toFixed(1)}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden shadow-inner">
                     <div className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-all duration-500" style={{ width: `${gcode.progress}%` }} />
                  </div>
               </div>
               <div className="flex flex-col items-end">
                  <span className="text-[12px] font-mono font-black text-white">{gcode.time_elapsed} / {gcode.time_total}</span>
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] mt-1">EST_COMPLETION</span>
               </div>
            </div>
         </section>

      </div>

      {/* 3. LOWER CONTROL BAR */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         <div className="lg:col-span-3 bg-[#1D2027]/50 border border-white/5 rounded-[48px] p-8 flex items-center gap-12 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors pointer-events-none" />
            <div className="flex items-center gap-6 relative z-10 shrink-0">
               <div className="p-5 bg-blue-500/10 rounded-3xl border border-blue-500/20">
                  <Layers className="w-6 h-6 text-blue-400" />
               </div>
               <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 block mb-1">MATERIAL_INTEGRITY</span>
                  <div className="flex items-baseline gap-3">
                     <span className="text-3xl font-black text-white">{(layerIntegrity * 100).toFixed(4)}%</span>
                     <span className="text-[11px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> NOMINAL
                     </span>
                  </div>
               </div>
            </div>
            <div className="h-12 w-px bg-white/10 shrink-0" />
            <div className="flex-1 flex flex-col gap-4 relative z-10">
               <div className="flex justify-between text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">
                  <span>Lattice Thermal Stability</span>
                  <span className="text-blue-400">0.99978 RMS</span>
               </div>
               <div className="flex gap-2">
                  {[...Array(24)].map((_, i) => (
                     <div key={i} className={`flex-1 h-2 rounded-sm ${i < 18 ? 'bg-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.3)]' : 'bg-white/5'}`} />
                  ))}
               </div>
            </div>
         </div>

         <div className="bg-[#1D2027]/50 border border-white/5 rounded-[48px] p-6 flex flex-col gap-4 backdrop-blur-3xl shadow-2xl">
            <button className="flex-1 bg-blue-500 text-white rounded-[24px] font-black text-[11px] uppercase tracking-[0.4em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group">
               <Activity className="w-4 h-4 group-hover:animate-pulse" />
               EXECUTE_MATERIALIZATION
            </button>
            <button className="flex-1 border border-white/10 text-white/40 hover:text-white hover:bg-white/5 rounded-[24px] font-black text-[11px] uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4">
               <UserCheck className="w-4 h-4" />
               REQUEST_PEER_REVIEW
            </button>
         </div>
      </section>
    </div>
  );
};

const StatusIndicator = ({ label, value, active, color }: any) => {
  const colorMap: any = {
    emerald: 'bg-emerald-500 shadow-[0_0_15px_#10B981] border-emerald-500/20 text-emerald-400',
    blue: 'bg-blue-500 shadow-[0_0_15px_#3b82f6] border-blue-500/20 text-blue-400',
    purple: 'bg-purple-500 shadow-[0_0_15px_#a855f7] border-purple-500/20 text-purple-400'
  };

  return (
    <div className="flex items-center gap-4">
       <div className={`w-3 h-3 rounded-full ${active ? colorMap[color].split(' ')[0] : 'bg-white/10'} ${active ? 'animate-pulse' : ''} ${active ? colorMap[color].split(' ')[1] : ''}`} />
       <div className="flex flex-col">
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30">{label}</span>
          <span className={`text-[11px] font-black font-mono ${active ? colorMap[color].split(' ')[3] : 'text-white/20'}`}>{value}</span>
       </div>
    </div>
  );
};

export default ManufacturingWorkspaceEngineeringOS_a3c58e;
