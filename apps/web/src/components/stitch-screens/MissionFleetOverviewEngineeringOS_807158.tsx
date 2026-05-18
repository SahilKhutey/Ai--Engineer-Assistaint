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
  Cpu,
  Factory,
  FolderOpen,
  Code,
  Wind,
  Satellite} from 'lucide-react';
import React, { useState } from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * MissionFleetOverview v3.5 (Phase 55 Hardened)
 * 
 * Comprehensive fleet management and logistical Activity for global engineering operations.
 * Aggregates telemetry from deep space assets and orbital infrastructure.
 */
const MissionFleetOverviewEngineeringOS_807158 = () => {
  const { 
    aerospaceState, 
    osStatus, 
    distributedCompute,
    addNotification,
    pushEvent 
  } = useEngineeringStore();

  const fleetMetrics = [
    { label: 'O2_LEVELS_AGGREGATE', value: '98.4%', status: 'NOMINAL', icon: <Wind />, color: 'cyan' },
    { label: 'POWER_RESERVES', value: '72.1%', status: 'CHARGING', icon: <Zap />, color: 'orange' },
    { label: 'COMMS_LINK', value: 'DSN_4', status: 'LOCKED', icon: <Satellite />, color: 'blue' },
  ];

  const handleDiagnostics = (missionId: string) => {
    pushEvent?.('FLEET_DIAGNOSTICS_INITIATED', { missionId, timestamp: Date.now() });
    addNotification?.({
      title: 'FLEET_DIAGNOSTICS_INITIATED',
      message: `Analyzing subsystem health for ${missionId}...`,
      type: 'INFO',
      domain: 'AEROSPACE'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-8 border-b border-white/5 bg-black/40 backdrop-blur-md flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] font-mono">FLEET_CONTROL_v3.5</span>
           </div>
           <div className="h-4 w-px bg-white/10" />
           <div className="flex gap-6">
              <span className="text-[10px] font-black text-blue-400 border-b border-blue-400 cursor-pointer py-1 uppercase tracking-widest font-mono">FLEET_OVERVIEW</span>
              <span className="text-[10px] font-black text-white/20 hover:text-white cursor-pointer py-1 uppercase tracking-widest font-mono transition-colors">TELEMETRY</span>
              <span className="text-[10px] font-black text-white/20 hover:text-white cursor-pointer py-1 uppercase tracking-widest font-mono transition-colors">LOGISTICS</span>
           </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-lg text-[9px] font-black text-blue-400 uppercase tracking-widest font-mono">
              GPU: 94% | SIM: ACTIVE
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAV */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 shrink-0">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_CORE</span>
              <nav className="flex flex-col gap-1">
                 <SideNavItem icon={<FolderOpen />} label="Projects" active />
                 <SideNavItem icon={<FlaskConical />} label="Simulations" />
                 <SideNavItem icon={<Cpu />} label="AI Agents" />
                 <SideNavItem icon={<Factory />} label="Digital Twin" />
                 <SideNavItem icon={<Factory />} label="Manufacturing" />
              </nav>
           </div>
        </aside>

        {/* 3. MAIN DASHBOARD */}
        <main className="flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar p-8 gap-8 relative">
           <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
           
           {/* Schematic Viewport */}
           <section className="bg-black/40 border border-white/5 rounded-[40px] h-[400px] relative overflow-hidden shadow-2xl backdrop-blur-3xl group shrink-0">
              <div className="absolute top-8 left-8 z-10 flex items-center gap-4 bg-black/60 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
                 <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] font-mono">REAL-TIME_SCHEMATIC :: INNER_SYSTEM</span>
              </div>
              <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDHOyigypyH982ifl04JN4doT0bfXU6dQ6Brs9n9F35EjvsadKUskTqOTnXss1XHaCVRytuKqD3qGKfUZg1W0MtS4OEAW8U9ph5fKcAIsUALf-MoCPcQ0VItphCWROIixwdi946bFzlOp7cb1pnVq6gE8sekBzJm7-2Xs2_vyvYiKU0psfGw9Eb0pycAyZvv1vSYzMAdOUvWSobDhCzPNWC2mCoS9Po0YFnjC805sRrVbsKNqnjYr-kFR_ICjkr2gUWnTGUD9syZxZ2" className="w-full h-full object-cover grayscale mix-blend-screen opacity-60 group-hover:scale-105 transition-all duration-[5000ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
              <div className="absolute bottom-8 right-8 text-right space-y-1">
                 <div className="text-xl font-mono font-black text-blue-400">ZOOM: 1.4 AU</div>
                 <div className="text-[9px] font-mono font-black text-white/20 uppercase tracking-widest">CENTER: SOL_BARYCENTER</div>
              </div>
           </section>

           {/* Fleet Metrics */}
           <section className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
              {fleetMetrics.map((m, i) => (
                <div key={i} className="bg-black/40 border border-white/5 rounded-[32px] p-8 flex flex-col gap-4 shadow-2xl backdrop-blur-3xl group hover:bg-white/[0.02] transition-all">
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">{m.label}</span>
                      <div className="text-blue-400/40">{m.icon}</div>
                   </div>
                   <div className="flex items-end gap-4">
                      <span className={`text-3xl font-mono font-black ${m.color === 'cyan' ? 'text-cyan-400' : m.color === 'orange' ? 'text-orange-400' : 'text-blue-400'}`}>{m.value}</span>
                      <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-widest pb-1">{m.status}</span>
                   </div>
                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                      <div className={`h-full ${m.color === 'cyan' ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : m.color === 'orange' ? 'bg-orange-400 shadow-[0_0_10px_#fb923c]' : 'bg-blue-500 shadow-[0_0_10px_#3b82f6]'} transition-all duration-1000`} style={{ width: m.value }} />
                   </div>
                </div>
              ))}
           </section>

           {/* Mission Cards Grid */}
           <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
              <MissionCard 
                 title="MARS_COLONY_X" 
                 id="MSC-1099-ALPHA" 
                 status="STABLE" 
                 distance="0.428 AU" 
                 velocity="24,510 KM/S" 
                 eta="42:11:05:12" 
                 color="cyan" 
                 onDiag={() => handleDiagnostics('MARS_COLONY_X')}
              />
              <MissionCard 
                 title="EUROPA_DRILL_ALPHA" 
                 id="JUP-0402-DELTA" 
                 status="MANEUVERING" 
                 distance="4.219 AU" 
                 velocity="18,122 KM/S" 
                 eta="ION_DRIVE: 84%" 
                 color="orange" 
                 onDiag={() => handleDiagnostics('EUROPA_DRILL_ALPHA')}
              />
              <MissionCard 
                 title="TITAN_ATMOS_SURVEY" 
                 id="SAT-8821-EPSILON" 
                 status="STABLE" 
                 distance="9.441 AU" 
                 velocity="12,004 KM/S" 
                 eta="1.24 HOURS" 
                 color="blue" 
                 onDiag={() => handleDiagnostics('TITAN_ATMOS_SURVEY')}
              />
              <MissionCard 
                 title="VOYAGER_3_PROBE" 
                 id="EXT-0001-OMEGA" 
                 status="LOW_POWER" 
                 distance="121.22 AU" 
                 velocity="17,043 KM/S" 
                 eta="CRITICAL: 2.1K" 
                 color="rose" 
                 onDiag={() => handleDiagnostics('VOYAGER_3_PROBE')}
                 critical
              />
           </section>
        </main>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .scanline-overlay {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
        }
      `}</style>
    </div>
  );
};

const MissionCard = ({ title, id, status, distance, velocity, eta, color, onDiag, critical }: any) => {
  const colors: any = {
    cyan: 'border-cyan-400 hover:shadow-cyan-400/10',
    orange: 'border-orange-400 hover:shadow-orange-400/10',
    blue: 'border-blue-500 hover:shadow-blue-500/10',
    rose: 'border-rose-500 hover:shadow-rose-500/10'
  };
  return (
    <div className={`bg-black/40 border border-white/5 rounded-[40px] p-8 flex flex-col gap-6 shadow-2xl backdrop-blur-3xl transition-all duration-500 group cursor-pointer border-t-2 ${colors[color]} ${critical ? 'opacity-80 grayscale hover:grayscale-0' : ''}`}>
       <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
             <h3 className="text-xl font-mono font-black text-white uppercase tracking-tighter">{title}</h3>
             <span className="text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">ID: {id}</span>
          </div>
          <span className={`px-3 py-1 bg-${color}-500/10 text-${color}-400 border border-${color}-500/20 rounded-lg text-[9px] font-black uppercase tracking-widest font-mono`}>{status}</span>
       </div>
       <div className="space-y-4">
          <DataRow label="DISTANCE_TO_EARTH" value={distance} />
          <DataRow label="CURRENT_VELOCITY" value={velocity} />
          <DataRow label="ETA_TRANSIT" value={eta} highlight={color} />
       </div>
       <div className="h-px bg-white/5 w-full" />
       <div className="flex gap-4">
          <button 
            onClick={(e) => { e.stopPropagation(); onDiag(); }}
            className="flex-1 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all font-mono"
          >
             DIAGNOSTICS
          </button>
          <button className={`flex-1 py-3 bg-${color === 'rose' ? 'rose' : 'blue'}-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:opacity-80 transition-all font-mono shadow-lg`}>
             TELEMETRY
          </button>
       </div>
    </div>
  );
};

const DataRow = ({ label, value, highlight }: any) => (
  <div className="flex justify-between items-center font-mono">
     <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{label}</span>
     <span className={`text-[12px] font-black ${highlight === 'cyan' ? 'text-cyan-400' : highlight === 'orange' ? 'text-orange-400' : highlight === 'rose' ? 'text-rose-400' : 'text-white/60'}`}>{value}</span>
  </div>
);

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`px-6 py-3.5 rounded-2xl flex items-center gap-4 transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-lg' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform duration-500">{icon}</div>
     <span className="text-[11px] font-black uppercase tracking-[0.2em] font-mono">{label}</span>
  </div>
);

export default MissionFleetOverviewEngineeringOS_807158;
