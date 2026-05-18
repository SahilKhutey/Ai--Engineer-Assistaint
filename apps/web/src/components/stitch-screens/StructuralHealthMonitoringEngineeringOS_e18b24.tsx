'use client';

import React, { useState } from 'react';
import {
  Activity,
  Settings,
  Search,
  Brain,
  Maximize2,
  MoreVertical,
  LayoutGrid,
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
  Hourglass,
  BarChart3,
  Binary,
  ShieldAlert,
  Box,
  Eye,
  Layers,
  Trash2,
  CheckCircle2,
  Info,
  Terminal,
  FolderOpen,
  Factory,
  ZoomIn,
  RotateCw,
  Scan,
  Thermometer,
  Gauge,
  AlertOctagon,
  TrendingDown,
  ChevronDown,
  Cpu,
  ChevronUp
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * StructuralHealthMonitoring v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity aerospace Terminal bar for real-time structural integrity and fatigue analysis.
 * Refactored to a sovereign React component with 60Hz real-time state binding.
 */
const StructuralHealthMonitoringEngineeringOS_e18b24 = () => {
  const { structuralState, osStatus, pushEvent } = useEngineeringStore();
  const { 
    maxStress_mPa = 482.4,
    safetyFactor = 2.4,
    displacements = []
  } = structuralState || {};
  
  const { kernelLoad = 0.94 } = osStatus || {};

  const handleAction = (action: string) => {
    pushEvent?.('STRUCT_ACTION_TRIGGERED', { action, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-blue-500/30 animate-in fade-in duration-1000 pb-20 lg:pb-0">
      {/* Cockpit Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
             <Shield className="w-4 h-4 text-blue-400" />
          </div>
          <h1 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono text-blue-400">ENGINEERING_OS // STRUCTURAL_MONITORING_v3.2</h1>
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
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="Simulations" active />
            <SidebarItem icon={<Brain className="w-4 h-4" />} label="AI Agents" />
            <SidebarItem icon={<Settings className="w-4 h-4" />} label="Digital Twin" />
            <SidebarItem icon={<Factory className="w-4 h-4" />} label="Manufacturing" />
          </nav>

          <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
             <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[9px] font-black text-white/20 uppercase tracking-widest text-blue-400">NODES_ONLINE</span>
                   <span className="text-[11px] font-mono font-black text-white">42/42</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                   <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: '100%' }} />
                </div>
             </div>
          </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar relative">
          
          <div className="grid grid-cols-12 gap-0 flex-1">
            
            {/* Hero 3D Viewport Area */}
            <section className="col-span-12 xl:col-span-8 bg-[#0B0F14] relative min-h-[400px] lg:min-h-[600px] overflow-hidden group">
               <header className="absolute top-0 left-0 w-full h-12 px-6 flex justify-between items-center z-10 bg-black/40 backdrop-blur-md border-b border-white/5">
                  <div className="flex items-center gap-3">
                     <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_#3b82f6]" />
                     <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">LIVE_3D_TELEMETRY // HPT_BLADE_UNIT_7</span>
                  </div>
                  <div className="flex gap-4">
                     <ZoomIn className="w-3.5 h-3.5 text-white/20 hover:text-white cursor-pointer" />
                     <RotateCw className="w-3.5 h-3.5 text-white/20 hover:text-white cursor-pointer" />
                     <Scan className="w-3.5 h-3.5 text-white/20 hover:text-white cursor-pointer" />
                  </div>
               </header>
               
               <div className="w-full h-full flex items-center justify-center p-12">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCmuL0Xm_nsaQcLlLWOrnfnrQg2lRs5j1Yddgv0cFsfFHa7hX0QgsYWJPxBeFiwBybZt8o0wwsmMHSwiUM_JjaEo6CxjvyNT-ODrxtRzond4yyLKgX0YYA58TSX6hDpQplrrbDGDDw3RQ822scQrOPKMGTcONnmTR6c8Ci8b5GdUJyOUQfsVuigWTISwsfePJWOIz6JDrAXFNq3E0PvJrVioWvON0mIYyKYkCilqdfXs--Rd-Ym3aM43uTwNN4MVtGVAHyxKxTPwlrp" 
                    className="w-full h-full object-contain opacity-80 mix-blend-screen group-hover:scale-105 transition-transform duration-[10000ms]"
                  />
               </div>

               {/* HUD Overlays */}
               <div className="absolute bottom-12 left-12 flex flex-col gap-4">
                  <HUDMetric label="PEAK_STRESS" value={`${maxStress_mPa.toFixed(1)} MPa`} color="rose" />
                  <HUDMetric label="TEMP_GRADIENT" value="1140°K" color="amber" />
               </div>
            </section>

            {/* Right Side Sidebar (Fatigue & AI Alerts) */}
            <aside className="col-span-12 xl:col-span-4 bg-[#0B0F14] border-l border-white/5 flex flex-col">
               
               {/* Fatigue Life Panel */}
               <div className="p-8 border-b border-white/5 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-8">
                     <div className="flex items-center gap-3">
                        <Hourglass className="w-4 h-4 text-blue-400" />
                        <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">FATIGUE_LIFE_TELEMETRY</span>
                     </div>
                     <span className="text-[9px] font-mono text-white/20">REF: SN-9921</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                     <DataMiniCard label="CYCLES_TO_FAILURE" value="12,480" unit="CYC" color="blue" />
                     <DataMiniCard label="CRACK_GROWTH_RATE" value="0.042" unit="MM/K" color="amber" />
                  </div>

                  <div className="flex-1 min-h-[120px] flex items-end gap-1 px-4 bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden group">
                     {[40, 45, 42, 60, 55, 75, 90, 30, 25, 20, 35, 50, 65, 80, 70, 45, 30, 20, 40, 55, 70, 85, 90, 80, 60, 40, 30, 50, 75, 95].map((h, i) => (
                        <div key={i} className={`flex-1 transition-all duration-700 ${i === 6 ? 'bg-blue-500 shadow-[0_0_12px_#3b82f6]' : 'bg-white/10 hover:bg-white/20'}`} style={{ height: `${h}%` }} />
                     ))}
                  </div>
               </div>

               {/* AI Predictive Alerts */}
               <div className="p-8 bg-white/[0.01]">
                  <div className="flex justify-between items-center mb-6">
                     <div className="flex items-center gap-3">
                        <AlertOctagon className="w-4 h-4 text-rose-500" />
                        <span className="text-[11px] font-black text-rose-400 uppercase tracking-[0.4em]">PREDICTIVE_ALERTS</span>
                     </div>
                     <div className="bg-rose-500/10 border border-rose-500/30 px-3 py-1 rounded-lg text-[9px] font-black text-rose-400 tracking-widest uppercase">HIGH_PRIORITY</div>
                  </div>
                  <div className="space-y-4">
                     <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">FAILURE_PROBABILITY</span>
                        <span className="text-[12px] font-mono font-black text-rose-400">8.4%</span>
                     </div>
                     <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">USEFUL_LIFE_REMAINING</span>
                        <span className="text-[12px] font-mono font-black text-blue-400">342 HRS</span>
                     </div>
                     <p className="text-[12px] text-white/40 leading-relaxed font-medium italic">
                        Anomalous vibration detected at 14kHz. Suggests early-stage delamination in Unit 7 root section. Clock inspection within next 50 cycles.
                     </p>
                  </div>
               </div>
            </aside>
          </div>

          {/* Bottom Data Row (Gauges & Matrix) */}
          <section className="grid grid-cols-1 lg:grid-cols-3 border-t border-white/5">
             
             {/* Modal Analysis */}
             <div className="p-8 border-r border-white/5">
                <div className="flex justify-between items-center mb-6">
                   <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">MODAL_ANALYSIS (PSD)</span>
                   <Maximize2 className="w-3.5 h-3.5 text-white/10" />
                </div>
                <div className="h-32 border-l border-b border-white/10 relative group">
                   <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                      <path d="M0 80 L50 75 L100 40 L120 90 L180 20 L220 85 L280 60 L320 10 L360 85 L400 70" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="opacity-60 group-hover:opacity-100 transition-opacity" />
                      <circle cx="180" cy="20" r="3" fill="#3b82f6" className="animate-pulse" />
                   </svg>
                   <span className="absolute top-2 left-[185px] text-[9px] font-black font-mono text-blue-400 uppercase tracking-widest">PEAK_MOD_2</span>
                </div>
             </div>

             {/* Sensor Matrix */}
             <div className="p-8 border-r border-white/5">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-6 block">SENSOR_NODE_STATUS</span>
                <div className="grid grid-cols-2 gap-3">
                   <SensorNode id="SG_01" status="CONNECTIVE" color="emerald" />
                   <SensorNode id="SG_02" status="CONNECTIVE" color="emerald" />
                   <SensorNode id="ACC_01" status="SIGNAL_LOSS" color="rose" />
                   <SensorNode id="ACC_02" status="DEGRADED" color="amber" />
                </div>
             </div>

             {/* System Logs */}
             <div className="p-8">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-6 block">SYSTEM_LOGS</span>
                <div className="space-y-2 h-32 overflow-y-auto custom-scrollbar font-mono text-[10px]">
                   <LogLine time="14:02:11" type="AlertTriangle" color="text-rose-400" content="STRESS_LIMIT_WARNING @ NODE_22" />
                   <LogLine time="14:02:10" type="INFO" color="text-white/20" content="CALIBRATION_ROUTINE_COMPLETE" />
                   <LogLine time="14:02:08" type="INFO" color="text-white/20" content="DATA_STREAM_STABILIZED" />
                   <LogLine time="14:01:55" type="ERROR" color="text-rose-500" content="PACKET_LOSS_DET_PORT_3" />
                   <LogLine time="14:01:50" type="INFO" color="text-white/20" content="THERMAL_EQUILIBRIUM_REACHED" />
                </div>
             </div>

          </section>

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

const HUDMetric = ({ label, value, color }: any) => (
  <div className="bg-black/60 border border-white/10 px-6 py-3 rounded-[24px] backdrop-blur-3xl shadow-2xl flex flex-col group hover:border-blue-500/20 transition-all">
     <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-1">{label}</span>
     <span className={`text-2xl font-mono font-black tracking-tighter italic ${color === 'rose' ? 'text-rose-400' : 'text-amber-400'}`}>{value}</span>
  </div>
);

const DataMiniCard = ({ label, value, unit, color }: any) => (
  <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl space-y-1 group hover:border-blue-500/20 transition-all">
     <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{label}</span>
     <div className="flex items-baseline gap-2">
        <span className={`text-[18px] font-mono font-black tracking-tight ${color === 'blue' ? 'text-blue-400' : 'text-amber-400'}`}>{value}</span>
        <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">{unit}</span>
     </div>
  </div>
);

const SensorNode = ({ id, status, color }: any) => (
  <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex items-center gap-3 group hover:border-white/10 transition-all cursor-pointer">
     <div className={`w-1.5 h-1.5 rounded-full ${color === 'emerald' ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : color === 'rose' ? 'bg-rose-500 shadow-[0_0_8px_#f43f5e]' : 'bg-amber-500 shadow-[0_0_8px_#f59e0b]'} animate-pulse`} />
     <div className="flex flex-col">
        <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{id}</span>
        <span className={`text-[10px] font-mono font-black ${color === 'emerald' ? 'text-emerald-400' : color === 'rose' ? 'text-rose-400' : 'text-amber-400'}`}>{status}</span>
     </div>
  </div>
);

const LogLine = ({ time, type, color, content }: any) => (
  <div className="flex gap-4 border-b border-white/5 pb-1 last:border-0 group cursor-default">
     <span className="text-white/10 group-hover:text-white/30 transition-colors">{time}</span>
     <span className={`${color} font-black`}>[{type}]</span>
     <span className="text-white/40 flex-1">{content}</span>
  </div>
);

export default StructuralHealthMonitoringEngineeringOS_e18b24;
