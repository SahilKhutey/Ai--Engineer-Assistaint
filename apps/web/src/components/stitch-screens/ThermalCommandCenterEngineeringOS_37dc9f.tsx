'use client';

import React from 'react';
import {
  Thermometer,
  Activity,
  Gauge,
  Settings,
  BarChart3,
  TrendingUp,
  Cpu,
  Zap,
  Layers,
  Play,
  Info,
  AlertTriangle,
  ShieldAlert,
  Waves,
  Flame,
  Wind,
  Droplets,
  Target,
  RefreshCcw,
  Signal,
  Terminal,
  Grid,
  MoreVertical,
  History
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * ThermalCommandCenter v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity thermal management workspace with real-time heat flux telemetry.
 * Refactored to a sovereign React component with real-time state binding.
 */
const ThermalCommandCenterEngineeringOS_37dc9f = () => {
  const { thermalState, pushEvent } = useEngineeringStore();
  const { 
    coreTemp = 1244.8, 
    heatFlux = 0.941,
    Sliders = [
      { id: 'S_001', temp: 1120.4, flux: 0.45, status: 'NOMINAL' },
      { id: 'S_002', temp: 1450.2, flux: 0.94, status: 'HOTSPOT' },
      { id: 'S_003', temp: 1098.9, flux: 0.39, status: 'NOMINAL' },
      { id: 'S_004', temp: 1105.1, flux: 0.41, status: 'NOMINAL' }
    ]
  } = thermalState || {};

  const handleAction = (action: string) => {
    pushEvent?.('THERMAL_ACTION_TRIGGERED', { action, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-rose-500/30 animate-in fade-in duration-1000">
      {/* Visual Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-1.5 bg-rose-500/10 rounded-lg border border-rose-500/20">
            <Terminal className="w-4 h-4 text-rose-400" />
          </div>
          <h1 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono">QUANTUM_COMMAND_OS // THERMAL_WS</h1>
        </div>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_#f43f5e]" />
              <span className="text-[10px] font-mono font-black text-rose-400">HS_WARN:01</span>
           </div>
           <Settings className="w-4 h-4 text-white/20 hover:text-rose-400 transition-colors cursor-pointer" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAVIGATION (DESKTOP) */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-6 hidden lg:flex shrink-0">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_NAV</span>
          <nav className="flex flex-col gap-2">
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="Telemetry" />
            <SidebarItem icon={<Zap className="w-4 h-4" />} label="Qubit_Map" active />
            <SidebarItem icon={<Layers className="w-4 h-4" />} label="Circuit_Editor" />
            <SidebarItem icon={<History className="w-4 h-4" />} label="Stability_Log" />
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="System_Health" />
          </nav>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
          
          {/* 3D Thermal Workspace Hero */}
          <section className="relative aspect-Camera rounded-3xl overflow-hidden border border-white/5 bg-black/40 group shadow-2xl">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuB0lb20BJkEZBxOK3oQxX9u9bSGl71jUhRmBplEjSoCdF1_qwtQwMCh2PGhRRPAlH7jGwAwadxtOLDcjp5JUyf2ygzkFU3hvHzF34x2ueThzzKVG5S0Ken0JyHwoUHkSkDvKCFvF32KZcosCOZYKCzN11a1tmcY_6xq9FVcap29A17h3YqO35UbQ7WUZCw069yiDHweN8hWTbV9Tf4xvpq1n3X5lda2WMdXy4wa_UoM0bnhYSCUbq7zWiaz9PfmpKBzJhpbPo9R43nL" 
                className="w-full h-full object-cover opacity-40 grayscale brightness-50 group-hover:scale-105 transition-transform duration-[10000ms]"
              />
            </div>
            
            {/* HUD Overlays */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none z-10">
               <div className="flex justify-between items-start">
                  <div className="bg-black/60 p-4 border border-white/10 backdrop-blur-xl rounded-2xl">
                     <p className="text-[9px] font-black text-rose-400 uppercase tracking-[0.4em] mb-1">WORKSPACE_VIEW_09</p>
                     <p className="text-[11px] font-mono font-black text-blue-400 uppercase">VECTOR: HEAT_FLUX_MAP</p>
                  </div>
                  <div className="bg-rose-500/10 p-4 border border-rose-500/40 backdrop-blur-xl rounded-2xl flex flex-col items-end">
                     <p className="text-[9px] font-black text-rose-500 uppercase tracking-[0.4em] mb-1">HOTSPOT_DETECTED</p>
                     <p className="text-[11px] font-mono font-black text-white">POS: X:442.1 Y:12.8 Z:99.0</p>
                  </div>
               </div>

               <div className="flex justify-between items-end">
                  <div className="bg-black/60 p-6 border-l-2 border-rose-500 backdrop-blur-xl rounded-r-2xl">
                     <p className="text-[10px] font-mono font-black text-white/40 italic mb-2">Fourier Heat Conduction</p>
                     <p className="text-2xl font-mono font-black text-rose-400 tracking-widest">q = -k ∇T</p>
                     <p className="text-[10px] font-mono text-white/20 mt-2">k = 210 W/(m·K) [Al-6061-T6]</p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                     <div className="w-48 h-2 bg-gradient-to-r from-blue-500 via-emerald-500 via-orange-500 to-rose-600 rounded-full border border-white/10 shadow-lg" />
                     <div className="flex justify-between w-48 text-[9px] font-mono font-black text-white/40 px-1 uppercase tracking-widest">
                        <span>293K</span>
                        <span>1450K</span>
                     </div>
                  </div>
               </div>
            </div>
          </section>

          {/* Bento Grid LayoutGrid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Core Temp */}
            <div className="bg-black/40 border border-white/5 p-6 rounded-[32px] backdrop-blur-3xl flex flex-col gap-4 group hover:border-rose-500/20 transition-all">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">CORE_TEMP</span>
                <TrendingUp className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-mono font-black text-rose-400 tracking-tighter">{coreTemp.toFixed(1)}</span>
                <span className="text-sm font-black text-white/20 uppercase">K</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 shadow-[0_0_15px_#f43f5e] transition-all duration-1000" style={{ width: '88%' }} />
              </div>
              <p className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">+2.4% FROM BASELINE</p>
            </div>

            {/* Heat Flux */}
            <div className="bg-black/40 border border-white/5 p-6 rounded-[32px] backdrop-blur-3xl flex flex-col gap-4 group hover:border-rose-500/20 transition-all">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">HS_INTENSITY</span>
                <Flame className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform animate-pulse" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-mono font-black text-rose-500 tracking-tighter">{heatFlux.toFixed(3)}</span>
                <span className="text-sm font-black text-white/20 uppercase">MW/m²</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 shadow-[0_0_15px_#f43f5e] transition-all duration-1000" style={{ width: '94%' }} />
              </div>
              <p className="text-[9px] font-black text-rose-400 uppercase tracking-widest">CRITICAL THRESHOLD NEAR</p>
            </div>

            {/* AI Reasoning */}
            <div className="md:col-span-2 lg:col-span-1 bg-black/40 border border-white/5 p-6 rounded-[32px] backdrop-blur-3xl flex flex-col gap-4 group hover:border-blue-500/20 transition-all">
               <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                  <div className="w-1.5 h-4 bg-blue-500 rounded-full" />
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">AI_THERMAL_REASONING</span>
                  <Activity className="ml-auto w-4 h-4 text-blue-400/40 animate-pulse" />
               </div>
               <div className="flex-1 space-y-4 overflow-y-auto max-h-[160px] custom-scrollbar pr-2">
                  <div className="flex gap-4">
                     <span className="text-[9px] font-black text-blue-400 uppercase shrink-0 mt-1">[ADJUSTMENT]</span>
                     <p className="text-[11px] font-medium text-white/60 leading-relaxed">Increase coolant flow to Channel_04 by 12.5% to mitigate nozzle wall ablation.</p>
                  </div>
                  <div className="flex gap-4 opacity-60">
                     <span className="text-[9px] font-black text-white/40 uppercase shrink-0 mt-1">[REASONING]</span>
                     <p className="text-[11px] font-medium text-white/40 leading-relaxed">Transient CFD analysis indicates a stagnation point shift due to thrust vectoring gimbal at T+450s.</p>
                  </div>
               </div>
               <button className="w-full py-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-500 hover:text-white transition-all active:scale-[0.98]">
                  EXECUTE_COOLING_ADJUSTMENT
               </button>
            </div>
          </div>

          {/* Sensor Array Table */}
          <section className="bg-black/40 border border-white/5 rounded-[40px] overflow-hidden backdrop-blur-3xl shadow-2xl">
            <header className="h-10 bg-white/[0.02] flex items-center px-8 justify-between border-b border-white/5">
              <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">SENSOR_ARRAY_B12</span>
              <MoreVertical className="w-4 h-4 text-white/20" />
            </header>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-[11px]">
                <thead>
                  <tr className="bg-white/[0.02] text-white/20 uppercase tracking-widest border-b border-white/5">
                    <th className="px-8 py-4 font-black">ID</th>
                    <th className="px-8 py-4 font-black">TEMP</th>
                    <th className="px-8 py-4 font-black">FLUX</th>
                    <th className="px-8 py-4 font-black">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {Sliders.map((sensor: any) => (
                    <tr key={sensor.id} className={`hover:bg-white/[0.02] transition-colors ${sensor.status === 'HOTSPOT' ? 'bg-rose-500/5' : ''}`}>
                      <td className={`px-8 py-4 font-black ${sensor.status === 'HOTSPOT' ? 'text-rose-400' : 'text-white/60'}`}>{sensor.id}</td>
                      <td className={`px-8 py-4 ${sensor.status === 'HOTSPOT' ? 'text-rose-400' : 'text-blue-400/80'}`}>{sensor.temp.toFixed(1)}K</td>
                      <td className={`px-8 py-4 ${sensor.status === 'HOTSPOT' ? 'text-rose-400' : 'text-white/40'}`}>{sensor.flux.toFixed(2)}</td>
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-2">
                           <div className={`w-1.5 h-1.5 rounded-full ${sensor.status === 'HOTSPOT' ? 'bg-rose-500 animate-pulse' : 'bg-emerald-500'}`} />
                           <span className={`text-[10px] font-black uppercase tracking-widest ${sensor.status === 'HOTSPOT' ? 'text-rose-400' : 'text-emerald-400'}`}>
                              {sensor.status}
                           </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* System Logs */}
          <section className="bg-black/40 border border-white/5 p-8 rounded-[40px] backdrop-blur-3xl shadow-2xl">
            <h2 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-4">SYSTEM_LOG_T_ALPHA</h2>
            <div className="space-y-2 font-mono text-[10px] opacity-60">
              <LogItem time="08:44:12" type="INIT" message="Thermal Workspace Synced" />
              <LogItem time="08:45:01" type="CFD" message="Solving Reynolds-Averaged Navier-Stokes..." color="text-blue-400" />
              <LogItem time="08:45:22" type="WARN" message="Local thermal flux excursion detected at Sector 7G" color="text-rose-400" />
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
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all cursor-pointer group ${active ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20 shadow-xl' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
    <div className="group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-[11px] font-black uppercase tracking-[0.2em]">{label}</span>
  </div>
);

const LogItem = ({ time, type, message, color = 'text-white' }: any) => (
  <div className="flex gap-4 border-b border-white/[0.02] pb-2 last:border-0">
    <span className="text-white/20 shrink-0">{time}</span>
    <span className={`font-black uppercase shrink-0 ${color === 'text-white' ? 'text-blue-400' : color}`}>[{type}]</span>
    <span className={color}>{message}</span>
  </div>
);

export default ThermalCommandCenterEngineeringOS_37dc9f;
