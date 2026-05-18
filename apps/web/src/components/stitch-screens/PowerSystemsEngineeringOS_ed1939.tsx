'use client';

import React, { useState } from 'react';
import {
  Activity,
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
  Battery,
  Cpu,
  Terminal,
  Sliders,
  Radio,
  LayoutDashboard,
  Plug,
  Antenna,
  SlidersHorizontal,
  List,
  CircuitBoard,
  Thermometer,
  Gauge,
  AlertOctagon,
  Sparkles,
  FolderOpen,
  FlaskConical,
  Workflow,
  Settings2,
  Factory,
  CheckCircle2,
  Info,
  BarChart3,
  Binary
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * PowerSystemsEngineering v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity aerospace Terminal bar for real-time power distribution and grid stability.
 * Refactored to a sovereign React component with 60Hz real-time state binding.
 */
const PowerSystemsEngineeringOS_ed1939 = () => {
  const { osStatus, pushEvent, propulsionState } = useEngineeringStore();
  const { kernelLoad = 0.94 } = osStatus || {};
  const gpuTemp = 60;
  const networkThroughput = 4.2;
  const { coreTemp_K = 2850 } = propulsionState || {};

  const handleAction = (action: string) => {
    pushEvent?.('POWER_ACTION_TRIGGERED', { action, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-blue-500/30 animate-in fade-in duration-1000 pb-20 md:pb-0">
      {/* Cockpit Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
             <CircuitBoard className="w-4 h-4 text-blue-400" />
          </div>
          <h1 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono text-blue-400">EM_UNIFIED_OS // POWER_SYSTEMS_v3.2</h1>
        </div>
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-4 px-4 py-1.5 bg-white/[0.02] border border-white/5 rounded-full">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                 <span className="text-[10px] font-mono font-black text-white uppercase tracking-widest">UPLINK_STABLE</span>
              </div>
           </div>
                       <Sliders className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAVIGATION (v3.2 Hardened) */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-6 hidden lg:flex shrink-0">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">PHYSICS_DOMAINS</span>
          <nav className="flex flex-col gap-2">
            <SidebarItem icon={<LayoutDashboard className="w-4 h-4" />} label="Terminal Center" />
            <SidebarItem icon={<CircuitBoard className="w-4 h-4" />} label="Circuit Engine" active />
            <SidebarItem icon={<Plug className="w-4 h-4" />} label="Power Systems" />
            <SidebarItem icon={<Antenna className="w-4 h-4" />} label="RF/Microwave" />
          </nav>

          <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
             <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">KERNEL_LOAD</span>
                   <span className="text-[11px] font-mono font-black text-blue-400">{(kernelLoad * 100).toFixed(0)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${kernelLoad * 100}%` }} />
                </div>
             </div>
          </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto custom-scrollbar">
          
          <div className="grid grid-cols-12 gap-6">
            
            {/* Primary Heatmap Panel */}
            <section className="col-span-12 lg:col-span-8 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[32px] overflow-hidden flex flex-col group">
               <header className="h-12 px-8 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">P=VI_EFFICIENCY_HEATMAP_v4</span>
                  <div className="flex gap-4">
                     <Maximize2 className="w-3.5 h-3.5 text-white/10 hover:text-white cursor-pointer" />
                     <MoreVertical className="w-3.5 h-3.5 text-white/10" />
                  </div>
               </header>
               <div className="p-8 h-[400px] relative">
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none dot-pattern" />
                  <div className="w-full h-full flex items-center justify-center relative">
                     <img 
                       src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuAi70c4SwJwoRkN3wj9qjxuzwsgkqtA748U-E2pjZhRPizH8GaeAksgWyMMXcvo0djS3ngMB755MxrSmyYy4Gn3AGEbJ0rKkbZOF4tW-Heb09KQuOpoq90EV2uc2_RfG0AgEHUzYvC6kpgz2FS-UkbVFTsN0ECt915GC6Uky2Kp8P5-nOakzpdy-vWVnqEqWX9oxg4u5DO9A2J9HI_H3gzwso0BWeGrhC2U7QfLaZDKexADA2zYjd0lSvtJOfVGlx_TmZG3vBIE2f6b" 
                       className="w-full h-full object-cover rounded-[24px] opacity-80 group-hover:scale-[1.02] transition-transform duration-[10000ms]"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  </div>
               </div>
            </section>

            {/* AI Threat Detection Panel */}
            <section className="col-span-12 lg:col-span-4 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[32px] overflow-hidden flex flex-col">
               <header className="h-12 px-8 flex items-center border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">AI_THREAT_DETECTION</span>
               </header>
               <div className="p-4 flex-grow space-y-2 overflow-y-auto custom-scrollbar">
                  <AlertItem 
                    type="CRITICAL" 
                    title="THERMAL_RUNAWAY_RISK" 
                    desc="Module B-12 shows 4% abnormal impedance. Battery aging exceeds threshold. Recommendation: Shed load immediately." 
                    color="rose"
                  />
                  <AlertItem 
                    type="AlertTriangle" 
                    title="AC_DC_LOSS_SPIKE" 
                    desc="Conversion efficiency dropped to 89.2% at Grid-Node 04. Check inverter synchronization." 
                    color="amber"
                  />
                  <AlertItem 
                    type="INFO" 
                    title="AI_OPTIMIZATION_ACTIVE" 
                    desc="Load balancing redirected 400kW to reserve bank alpha. Overall stability improved +2.4%." 
                    color="blue"
                    icon={<Sparkles className="w-4 h-4" />}
                  />
               </div>
            </section>

            {/* Battery SoC Curves */}
            <section className="col-span-12 md:col-span-6 lg:col-span-4 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[32px] overflow-hidden flex flex-col">
               <header className="h-12 px-8 flex items-center border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">BATTERY_SOC_CURVES</span>
               </header>
               <div className="p-8 space-y-8">
                  <ProgressMetric label="NODE_A1_CHARGE" value={82.4} color="blue" />
                  <ProgressMetric label="NODE_B5_RESERVE" value={41.0} color="cyan" />
                  <div className="h-24 pt-4 border-t border-white/5 group">
                     <img 
                       src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCESzUXNBCtOUJKYqOpoheDCw3OcFP7pDU_9lnX0Kn6Hr6F7lu7s_DnpnSr1fAUauyCRsNQFLBY0SvWfYA44-i89tN25QtUbyTFXhJfpU0CkLN23iN-PGcsGk097b0SlTdrwK6Dxx3YjQrOBCBzhqEvGMCCWeMYTAzR5Uo9WeJ_M3KF3wSJ-3OOhEg0FxLlRFqO75g2GjjXRzI3Mua72iF5eAYoc3rylOTXil1F5inEA61vfddsEzJ2cWGmBOu8tIioX_q41Ir5deem" 
                       className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 transition-opacity"
                     />
                  </div>
               </div>
            </section>

            {/* Grid Stability Telemetry */}
            <section className="col-span-12 md:col-span-6 lg:col-span-4 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[32px] overflow-hidden flex flex-col">
               <header className="h-12 px-8 flex items-center border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">GRID_STABILITY_TELEMETRY</span>
               </header>
               <div className="p-8 space-y-3">
                  <TelemetryRow label="AC_CONV_INPUT" value="1.21 GW" />
                  <TelemetryRow label="DC_STORAGE_BUS" value="450.2 MW" />
                  <TelemetryRow label="THERMAL_LOSS_Y" value="12.4%" color="text-rose-400" />
                  <TelemetryRow label="GRID_FREQUENCY" value="60.002 Hz" color="text-blue-400" />
                  <TelemetryRow label="REACTIVE_PWR" value="0.05 VAR" />
                  <div className="pt-6">
                     <div className="grid grid-cols-4 gap-2">
                        <StatusBlock color="emerald" active />
                        <StatusBlock color="emerald" active />
                        <StatusBlock color="amber" active />
                        <StatusBlock color="white" />
                     </div>
                     <p className="text-[9px] font-black text-white/20 uppercase tracking-widest mt-3">NODE_DISTRIBUTION_STATUS</p>
                  </div>
               </div>
            </section>

            {/* Load Balancing Control */}
            <section className="col-span-12 md:col-span-12 lg:col-span-4 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[32px] p-8 flex flex-col gap-6">
               <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">LOAD_BALANCING_AUTO_MTX</span>
                  <SlidersHorizontal className="w-4 h-4 text-blue-400 cursor-pointer" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <ControlButton label="MANUAL_OVERRIDE" value="DISENGAGED" color="white" />
                  <ControlButton label="ECO_MODE_V3" value="ACTIVE" color="blue" active />
               </div>
               <div className="flex-grow bg-white/[0.02] rounded-[24px] border border-white/5 p-6 relative flex items-center gap-6 group hover:border-blue-500/20 transition-all">
                  <div className="w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                  <div>
                     <span className="text-[14px] font-mono font-black text-blue-400 block uppercase tracking-tighter">CALIBRATING_GRID...</span>
                     <p className="text-[11px] text-white/40 font-medium">Est. Stability Delta: +0.42%</p>
                  </div>
               </div>
            </section>

          </div>

        </main>
      </div>

      {/* Mobile Footer Navigation */}
      <footer className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-black/80 backdrop-blur-2xl border-t border-white/5 flex items-center justify-around px-6 z-50">
         <MobileNavItem icon={<Terminal className="w-5 h-5" />} label="AI_CMD" />
         <MobileNavItem icon={<List className="w-5 h-5" />} label="LOGS" />
         <MobileNavItem icon={<BarChart3 className="w-5 h-5" />} label="TELEMETRY" active />
         <MobileNavItem icon={<CircuitBoard className="w-5 h-5" />} label="DEVICES" />
      </footer>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .dot-pattern {
          background-image: radial-gradient(circle at 2px 2px, #424754 1px, transparent 0);
          background-size: 24px 24px;
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

const AlertItem = ({ type, title, desc, color, icon }: any) => (
  <div className={`p-4 rounded-2xl border-l-2 flex gap-4 transition-all hover:translate-x-1 cursor-pointer ${color === 'rose' ? 'bg-rose-500/5 border-rose-500 hover:bg-rose-500/10' : color === 'amber' ? 'bg-amber-500/5 border-amber-500 hover:bg-amber-500/10' : 'bg-blue-500/5 border-blue-500 hover:bg-blue-500/10'}`}>
     <div className={`${color === 'rose' ? 'text-rose-500' : color === 'amber' ? 'text-amber-500' : 'text-blue-500'}`}>
        {icon || <AlertTriangle className="w-4 h-4" />}
     </div>
     <div className="space-y-1">
        <p className={`text-[11px] font-black uppercase tracking-widest ${color === 'rose' ? 'text-rose-400' : color === 'amber' ? 'text-amber-400' : 'text-blue-400'}`}>{type}: {title}</p>
        <p className="text-[10px] text-white/40 font-medium leading-relaxed">{desc}</p>
     </div>
  </div>
);

const ProgressMetric = ({ label, value, color }: any) => (
  <div className="space-y-3">
     <div className="flex justify-between items-baseline">
        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{label}</span>
        <span className={`text-[18px] font-mono font-black ${color === 'blue' ? 'text-blue-400' : 'text-cyan-400'}`}>{value}%</span>
     </div>
     <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full transition-all duration-1000 ${color === 'blue' ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'bg-cyan-500 shadow-[0_0_10px_#06b6d4]'}`} style={{ width: `${value}%` }} />
     </div>
  </div>
);

const TelemetryRow = ({ label, value, color }: any) => (
  <div className="flex justify-between items-center py-2 border-b border-white/5 group">
     <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">{label}</span>
     <span className={`text-[12px] font-mono font-black tracking-tight ${color || 'text-white'}`}>{value}</span>
  </div>
);

const StatusBlock = ({ color, active }: any) => (
  <div className={`h-8 rounded-lg border transition-all ${active ? (color === 'emerald' ? 'bg-emerald-500/20 border-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.2)]' : 'bg-amber-500/20 border-amber-500/40 shadow-[0_0_8px_rgba(245,158,11,0.2)]') : 'bg-white/[0.02] border-white/5'}`} />
);

const ControlButton = ({ label, value, color, active }: any) => (
  <button className={`p-4 rounded-[24px] border text-left flex flex-col justify-between h-28 transition-all hover:scale-[1.02] active:scale-[0.98] ${active ? (color === 'blue' ? 'bg-blue-500/10 border-blue-500/40' : 'bg-white/10 border-white/40') : 'bg-white/[0.02] border-white/5'}`}>
     <span className={`text-[9px] font-black uppercase tracking-[0.2em] ${active ? (color === 'blue' ? 'text-blue-400' : 'text-white') : 'text-white/20'}`}>{label}</span>
     <span className={`text-[14px] font-mono font-black tracking-tighter ${active ? 'text-white' : 'text-white/40'}`}>{value}</span>
  </button>
);

const MobileNavItem = ({ icon, label, active }: any) => (
  <div className={`flex flex-col items-center gap-1 p-2 transition-all ${active ? 'text-blue-400 scale-110' : 'text-white/20'}`}>
     {icon}
     <span className="text-[8px] font-black tracking-widest uppercase">{label}</span>
  </div>
);

export default PowerSystemsEngineeringOS_ed1939;
