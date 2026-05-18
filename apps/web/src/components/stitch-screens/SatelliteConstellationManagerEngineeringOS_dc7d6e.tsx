'use client';

import React from 'react';
import {
  Rocket,
  Signal,
  Globe,
  Activity,
  Gauge,
  Thermometer,
  Settings,
  Terminal,
  BarChart3,
  TrendingUp,
  Cpu,
  Zap,
  Layers,
  Play,
  Info,
  AlertTriangle,
  MoveUp,
  Wind,
  Compass,
  Crosshair,
  Map,
  Target,
  RefreshCcw,
  Radio,
  Grid,
  Antenna,
  ShieldCheck,
  MoreVertical,
  Code,
  Satellite
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * SatelliteConstellationManager v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity mission control workspace for Radio constellations.
 * Refactored to a sovereign React component with real-time state binding.
 */
const SatelliteConstellationManagerEngineeringOS_dc7d6e = () => {
  const { aerospaceState, pushEvent } = useEngineeringStore();
  const { 
    orbital = {
      periapsis_km: 408.2,
      velocity_kms: 7.66,
      propellantMass_pct: 82.4
    },
    constellation = {
      coverage: 98.2,
      activeNodes: 142,
      health: 'NOMINAL',
      drift_ms: 0.042
    }
  } = aerospaceState || {};

  const handleAction = (action: string) => {
    pushEvent?.('SAT_ACTION_TRIGGERED', { action, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-blue-500/30 animate-in fade-in duration-1000">
      {/* Visual Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <Rocket className="w-4 h-4 text-blue-400" />
          </div>
          <h1 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono text-blue-400">MISSION CONTROL CENTER</h1>
        </div>
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-3 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3b82f6]" />
              <span className="text-[10px] font-mono font-black text-blue-400 uppercase tracking-widest">SYSTEM LINK: ACTIVE</span>
           </div>
           <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAVIGATION (DESKTOP) */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-6 hidden lg:flex shrink-0">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">OS: SAT-Terminal</span>
          <nav className="flex flex-col gap-2">
            <SidebarItem icon={<Globe className="w-4 h-4" />} label="Orbital Tracking" />
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="Radio Health" />
            <SidebarItem icon={<Grid className="w-4 h-4" />} label="Constellation" active />
            <SidebarItem icon={<Antenna className="w-4 h-4" />} label="Link Analysis" />
            <SidebarItem icon={<Terminal className="w-4 h-4" />} label="System Logs" />
          </nav>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar relative">
          
          {/* Viewport Section */}
          <section className="relative min-h-[400px] rounded-3xl overflow-hidden border border-white/5 bg-black/40 group shadow-2xl">
            <header className="absolute top-0 w-full h-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between px-6 z-20 backdrop-blur-md">
              <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">L-ORBIT VIEWPORT // ALPHA-7 MAPPING</span>
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              </div>
            </header>

            <div className="absolute inset-0 z-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCnSSFPuxRVLPwh1lFceqzlhMIguJ9wwys40TLoBN7br6KNnltdBbv9u_cdAO2oPnloRuosyLXUjN1V2I2fGbQduYvq3t5zMzAUvEqBgn-BYZnzwGOstdJrrOdo1O3Y0XEyI7YseIECUAM-aoefSxPz9DypGKfp7MW1wFCDFsrEfjU2SasXA7EzD13LmIfyy9B80EGYhG1XU2Fi9Ff9EmyXcC6g30O-IVtVLUo69r2ZHGwC1Bl34VirZ3yaKwKDhkQurDT17_-Ojj4p" 
                className="w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-[10000ms] group-hover:scale-110"
              />
              
              {/* HUD Overlays */}
              <div className="absolute top-16 left-8 flex flex-col gap-4 z-10">
                <div className="bg-black/60 p-4 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl">
                  <p className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em] mb-1">SELECTED ASSET</p>
                  <p className="text-[12px] font-mono font-black text-white">NODE-IDX: SV-2924</p>
                  <p className="text-[10px] font-mono text-white/40 mt-1 uppercase">ALT: {orbital.periapsis_km.toFixed(2)} KM</p>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 flex gap-4 z-10">
                <div className="bg-black/60 p-4 border border-blue-500/40 backdrop-blur-xl rounded-2xl shadow-2xl">
                  <p className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em] mb-1">CONSTELLATION STATUS</p>
                  <p className="text-[14px] font-mono font-black text-white uppercase tracking-widest">{constellation.coverage.toFixed(1)}% COVERAGE</p>
                </div>
              </div>
            </div>
          </section>

          {/* BarChart3 Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Health Card */}
            <div className="bg-black/40 border border-white/5 rounded-[32px] overflow-hidden backdrop-blur-3xl shadow-2xl flex flex-col">
              <header className="h-10 bg-white/[0.02] border-b border-white/5 flex items-center px-6">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Active Constellation Health</span>
              </header>
              <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">STATION KEEPING</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                      <span className="text-[11px] font-mono font-black text-emerald-400">NOMINAL</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">POWER BUDGET</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono font-black text-blue-400">94.2%</span>
                      <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: '94.2%' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">NADIR POINTING ACCURACY</span>
                    <span className="text-[11px] font-mono font-black text-white">0.002°</span>
                  </div>
                  <div className="flex gap-1 items-end h-8 overflow-hidden">
                    {[0.4, 0.6, 0.45, 0.75, 0.9, 0.8, 0.5, 0.6, 0.4, 0.7, 0.3].map((h, i) => (
                      <div key={i} className="flex-1 bg-blue-500/20 hover:bg-blue-500 transition-all rounded-t-sm" style={{ height: `${h * 100}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Orbital Drift Table */}
            <div className="bg-black/40 border border-white/5 rounded-[32px] overflow-hidden backdrop-blur-3xl shadow-2xl flex flex-col">
              <header className="h-10 bg-white/[0.02] border-b border-white/5 flex items-center px-6">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Orbital Drift BarChart3</span>
              </header>
              <div className="p-4 overflow-hidden flex-1">
                <table className="w-full text-left font-mono text-[11px]">
                  <thead>
                    <tr className="text-white/20 uppercase tracking-widest border-b border-white/5">
                      <th className="px-4 py-2 font-black">ASSET_ID</th>
                      <th className="px-4 py-2 font-black text-right">DRIFT (M/S)</th>
                      <th className="px-4 py-2 font-black text-right">ECCENTRICITY</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <DriftRow id="SV-2921" drift="+0.042" driftColor="text-rose-400" eccentricity="0.00012" />
                    <DriftRow id="SV-2924" drift="0.000" eccentricity="0.00008" />
                    <DriftRow id="SV-3012" drift="-0.015" driftColor="text-blue-400" eccentricity="0.00041" />
                    <DriftRow id="SV-3015" drift="0.002" eccentricity="0.00002" />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Upcoming Maneuvers */}
            <div className="bg-black/40 border border-white/5 rounded-[32px] overflow-hidden backdrop-blur-3xl shadow-2xl flex flex-col">
              <header className="h-10 bg-white/[0.02] border-b border-white/5 flex items-center px-6">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Upcoming Maneuvers</span>
              </header>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                 <div className="space-y-4">
                    <ManeuverItem 
                      id="SV-2921" 
                      type="THRUST_SEQ // T-MINUS" 
                      time="00:42:12" 
                      label="Inclination Correction" 
                      active 
                    />
                    <ManeuverItem 
                      id="SV-3012" 
                      type="UPCOMING" 
                      time="04:12:00" 
                      label="Collision Avoidance" 
                    />
                 </div>
                 <button className="w-full py-4 bg-blue-500/10 border border-blue-500/20 text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] rounded-2xl hover:bg-blue-500 hover:text-white transition-all active:scale-[0.98] shadow-2xl mt-4">
                    Clock NEW MANEUVER
                 </button>
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
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
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

const DriftRow = ({ id, drift, driftColor = 'text-white/60', eccentricity }: any) => (
  <tr className="hover:bg-white/[0.02] transition-colors cursor-pointer group">
    <td className="px-4 py-3 font-black text-white/60 group-hover:text-white">{id}</td>
    <td className={`px-4 py-3 text-right font-black ${driftColor}`}>{drift}</td>
    <td className="px-4 py-3 text-right text-white/40">{eccentricity}</td>
  </tr>
);

const ManeuverItem = ({ id, type, time, label, active }: any) => (
  <div className={`p-4 rounded-2xl border transition-all ${active ? 'bg-blue-500/10 border-blue-500/20' : 'bg-black/20 border-white/5 opacity-60 hover:opacity-100'}`}>
     <div className="flex justify-between items-start mb-2">
        <span className={`text-[8px] font-black uppercase tracking-widest ${active ? 'text-blue-400' : 'text-white/20'}`}>{type}</span>
        <span className={`font-mono font-black ${active ? 'text-blue-400' : 'text-white/40'}`}>{time}</span>
     </div>
     <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${active ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-white/20'}`}>
           <Satellite className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
           <p className={`text-[11px] font-black uppercase tracking-widest truncate ${active ? 'text-white' : 'text-white/40'}`}>{id} {label}</p>
        </div>
     </div>
  </div>
);

export default SatelliteConstellationManagerEngineeringOS_dc7d6e;
