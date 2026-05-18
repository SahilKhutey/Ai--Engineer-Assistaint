'use client';

import React from 'react';
import {
  Flame,
  Activity,
  Gauge,
  Settings,
  Terminal,
  BarChart3,
  TrendingUp,
  Cpu,
  Layers,
  Play,
  Info,
  AlertTriangle,
  MoveUp,
  Compass,
  Crosshair,
  Map,
  Target,
  Rocket,
  RefreshCcw,
  Radio,
  Database,
  ShieldCheck,
  Share2,
  Camera,
  Clock,
  Maximize2,
  Minimize2,
  ChevronRight,
  Waves,
  Droplets,
  Wind,
  Zap,
  Box,
  Snowflake,
  ZapOff,
  ShieldAlert,
  FlameKindling
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * CombustionHighTempSystems v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity combustion intelligence workspace with real-time flame front telemetry.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const CombustionHighTempSystemsEngineeringOS_6205c6 = () => {
  const { combustionState } = useEngineeringStore();
  const { 
    thermal = { peakTemp_K: 3842.1, heatFlux_MWm2: 12.5, thermalLoad_pct: 98.2, thermalShock_pct: 85.0 },
    physics = { mixRatio: 2.14, reynolds: 1.2e6 },
    zones = { core_K: 2800, edge_K: 1100, shock_K: 4500, ambi_K: 298.0 }
  } = combustionState || {};

  return (
    <div className="flex-1 flex flex-col bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. TOP STATUS BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex justify-between items-center z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
            <span className="text-[10px] font-black text-orange-400 uppercase tracking-[0.4em]">COMBUSTION_SOLVER_v3.2</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${thermal.thermalLoad_pct > 95 ? 'bg-rose-500 shadow-[0_0_10px_#f43f5e]' : 'bg-emerald-500'} animate-pulse`} />
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${thermal.thermalLoad_pct > 95 ? 'text-rose-400' : 'text-emerald-400'}`}>
                  STATUS: {thermal.thermalLoad_pct > 95 ? 'CRITICAL' : 'NOMINAL'}
                </span>
             </div>
             <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">TEMP_LMT: 3450K</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">Q_VAL: {(thermal.heatFlux_MWm2 * 0.33).toFixed(1)} GJ/s</span>
           <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
        </div>
      </header>

      <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar p-8 gap-8 animate-in fade-in duration-1000">
        
        {/* Critical Alert Banner */}
        {thermal.thermalLoad_pct > 95 && (
          <div className="bg-rose-500/10 border border-rose-500/20 p-6 rounded-[32px] flex items-center gap-6 shadow-2xl backdrop-blur-3xl">
             <ShieldAlert className="w-8 h-8 text-rose-500 animate-pulse" />
             <div className="flex-1">
                <span className="text-[10px] font-black text-rose-400 uppercase tracking-[0.4em] block mb-1">THERMAL_LIMIT_EXCEEDED</span>
                <p className="text-[14px] font-mono text-white/80">AlertTriangle: Thermal load approaching material survivability threshold. Peak temperature at {thermal.peakTemp_K.toFixed(0)}K.</p>
             </div>
             <div className="flex gap-4">
                <button className="px-6 py-2 bg-white/5 text-white/40 font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all border border-white/5">DIAGNOSTICS</button>
                <button className="px-6 py-2 bg-rose-500 text-white font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-rose-400 transition-all active:scale-95 shadow-2xl shadow-rose-500/20">EMERGENCY_VENT</button>
             </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* 3D Flame Front Visualization */}
           <div className="lg:col-span-8 bg-black/40 border border-white/5 rounded-[48px] overflow-hidden flex flex-col shadow-2xl backdrop-blur-3xl group">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-orange-400 uppercase tracking-[0.4em]">3D_FLAME_FRONT_VIZ</span>
                 <BarChart3 className="w-3 h-3 text-white/20" />
              </div>
              <div className="relative aspect-Camera w-full bg-black/40 overflow-hidden">
                 <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuC1DJ7vm1bbsUvW5_evOad1orl3w2pWAQFang-FJv3Fxs5EZFTulO6D8Hvq2aeflucx04YgxFDp0SdY0Vxmuy_YMX7myQiCTFSil1Bb0lNuJrk1tI5VNw7fFnnJhGIAOgSO08L_alqWuMJuyNToepsDaleQzlQlyxJmC2OolcUEoWOXRU8TLQCrp2-lPWmgRRKMA-MlZmr93rE0IrAthfM4ef7W7riuCujbPvjiiCRIP4NorX5rwp40C-co1gSMKpwbUQd6MXEZe4zT" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 scale-110 group-hover:scale-100" />
                 <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
                 
                 {/* HUD Overlays */}
                 <div className="absolute top-8 left-8 p-6 bg-black/60 backdrop-blur-3xl border border-white/5 rounded-3xl flex flex-col gap-2 shadow-2xl">
                    <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest opacity-60">COORDS_SURFACE</span>
                    <div className="font-mono text-[12px] text-white/80">
                       X: 0.442nm<br/>Y: 1.092nm<br/>Z: 0.003nm
                    </div>
                 </div>

                 <div className="absolute bottom-8 right-8 flex flex-col items-end gap-6">
                    <div className="flex gap-8">
                       <div className="border-r border-white/10 pr-8 text-right">
                          <span className="block text-[10px] font-black text-orange-400/60 uppercase tracking-widest mb-1">PEAK_TEMP</span>
                          <span className="block text-[32px] font-mono font-black text-white tracking-tighter">{thermal.peakTemp_K.toFixed(1)} K</span>
                       </div>
                       <div className="text-right">
                          <span className="block text-[10px] font-black text-rose-400/60 uppercase tracking-widest mb-1">HEAT_FLUX</span>
                          <span className="block text-[32px] font-mono font-black text-white tracking-tighter">{thermal.heatFlux_MWm2.toFixed(1)} MW/m²</span>
                       </div>
                    </div>
                    <div className="px-6 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 font-black text-[10px] uppercase tracking-widest rounded-full backdrop-blur-xl">
                       REYNOLDS: {physics.reynolds.toExponential(1)} // LAMINAR_STABLE
                    </div>
                 </div>
              </div>
           </div>

           {/* Side Metrics */}
           <div className="lg:col-span-4 flex flex-col gap-8">
              <MetricBox label="THERMAL_ENERGY (Q)" value="4.2 GJ/s" sub="Transport Validation [PASS]" color="orange" />
              <MetricBox label="THERMAL_SHOCK" value={`ΔT_${thermal.thermalShock_pct.toFixed(0)}%`} sub="Limit: 90% Survivability" color="rose" alert={thermal.thermalShock_pct > 80} />
              
              <div className="bg-black/40 border border-white/5 rounded-[48px] p-10 flex flex-col gap-6 shadow-2xl backdrop-blur-3xl flex-1">
                 <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">PLUME_ZONES</span>
                    <TrendingUp className="w-4 h-4 text-orange-400 opacity-40" />
                 </div>
                 <div className="space-y-6">
                    <ZoneRow label="CORE" value={`${zones.core_K.toFixed(1)}K`} progress={65} color="orange" />
                    <ZoneRow label="EDGE" value={`${zones.edge_K.toFixed(1)}K`} progress={25} color="blue" />
                    <ZoneRow label="SHOCK" value={`${zones.shock_K.toFixed(1)}K`} progress={95} color="rose" />
                    <ZoneRow label="AMBI" value={`${zones.ambi_K.toFixed(1)}K`} progress={5} color="emerald" />
                 </div>
              </div>
           </div>
        </div>

        {/* Telemetry Stream */}
        <section className="bg-black/40 border border-white/5 rounded-[48px] p-8 flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden">
           <div className="flex items-center gap-4 border-b border-white/5 pb-4 mb-4">
              <Terminal className="w-4 h-4 text-orange-400" />
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYS_TELEMETRY_LOG</span>
           </div>
           <div className="space-y-2 font-mono text-[12px] h-32 overflow-y-auto custom-scrollbar">
              <LogLine time="14:22:01" type="INIT" msg="IGNITION_SEQUENCE_ESTABLISHED" color="orange" />
              <LogLine time="14:22:03" type="MIX" msg={`O2_RATIO: ${physics.mixRatio.toFixed(2)}_STABLE`} color="white/40" />
              <LogLine time="14:22:05" type="WARN" msg="TEMP_SPIKE: DETECTED_SEC_3" color="orange" />
              <LogLine time="14:22:08" type="ERR" msg="SHOCK_REGION_MAP: OUT_OF_BOUNDS" color="rose" />
              <LogLine time="14:22:10" type="PROC" msg="RECALCULATING_TRAJECTORY_VECTORS..." color="white/20" />
           </div>
        </section>

      </main>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(249, 115, 22, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>
    </div>
  );
};

const MetricBox = ({ label, value, sub, color, alert }: any) => {
  const colors: any = {
    orange: 'border-orange-500/10 bg-orange-500/5 text-orange-400',
    rose: 'border-rose-500/10 bg-rose-500/5 text-rose-400',
  };
  return (
    <div className={`p-10 border rounded-[48px] backdrop-blur-3xl shadow-2xl transition-all hover:scale-[1.02] duration-500 flex flex-col gap-2 ${alert ? 'border-rose-500/40 bg-rose-500/10' : colors[color]}`}>
       <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{label}</span>
       <div className="text-[32px] font-mono font-black tracking-tighter text-white">{value}</div>
       <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{sub}</span>
    </div>
  );
};

const ZoneRow = ({ label, value, progress, color }: any) => {
  const colors: any = {
    orange: 'bg-orange-500 shadow-[0_0_10px_#f97316]',
    blue: 'bg-blue-500 shadow-[0_0_10px_#3b82f6]',
    rose: 'bg-rose-500 shadow-[0_0_10px_#f43f5e]',
    emerald: 'bg-emerald-500 shadow-[0_0_10px_#10b981]',
  };
  return (
    <div className="space-y-2">
       <div className="flex justify-between items-end">
          <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{label}</span>
          <span className="text-[12px] font-mono font-black text-white">{value}</span>
       </div>
       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <div className={`h-full ${colors[color]} transition-all duration-1000`} style={{ width: `${progress}%` }} />
       </div>
    </div>
  );
};

const LogLine = ({ time, type, msg, color }: any) => (
  <div className="flex gap-4">
    <span className="text-white/20">[{time}]</span>
    <span className={`text-${color} font-black w-16`}>{type}:</span>
    <span className="text-white/60">{msg}</span>
  </div>
);

export default CombustionHighTempSystemsEngineeringOS_6205c6;
