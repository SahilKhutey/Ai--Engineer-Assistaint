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
  Box,
  CheckCircle,
  Home,
  Layers,
  Share2,
  Circle,
  Grid,
  Hexagon,
  RefreshCcw,
  Search,
  Snowflake} from 'lucide-react';
import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * GlobalHomeDashboard v3.5 (Phase 55 Hardened)
 * 
 * The central intelligence Share2 of the Antigravity Engineering OS.
 * Aggregates real-time telemetry from all engineering domains into a unified mission-ready view.
 * Fully sovereign, high-fidelity React implementation.
 */
const GlobalHomeDashboardEngineeringOS_0f3781 = () => {
  const { 
    homeState, 
    osStatus,
    pushEvent,
    addNotification
  } = useEngineeringStore();

  const { 
    cluster = { load_pct: 74.2, active_nodes: 128, total_nodes: 512 },
    metrics = { voltage_mv: 48.24, entanglement_fid: 0.992, cryo_mk: 0.015 },
    twins = [
      { id: 'REACTOR_CORE_v4', latency_ms: 4, status: 'SYNCED' },
      { id: 'TURBINE_ASSEM_H1', latency_ms: 12, status: 'WARN' },
      { id: 'COMPUTE_CLUSTER_B', latency_ms: 0.8, status: 'OPTIMAL' }
    ]
  } = homeState || {};

  const handleCommandExecute = () => {
    pushEvent?.('AI_COMMAND_EXECUTED', { timestamp: Date.now() });
    addNotification?.({
      title: 'COMMAND_ACCEPTED',
      message: 'Intelligence engine processing natural language query.',
      type: 'INFO',
      domain: 'WORKFLOW'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-8 border-b border-white/5 bg-black/40 backdrop-blur-md flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-[#4cd7f6]" />
              <span className="text-[11px] font-black text-[#4cd7f6] uppercase tracking-[0.4em] font-mono">QUANTUM_COMMAND_OS_v3.5</span>
           </div>
        </div>
        <nav className="flex gap-8 h-full items-center">
           <button className="text-[10px] font-black text-[#4cd7f6] border-b-2 border-[#4cd7f6] h-full px-4 tracking-widest uppercase transition-all">HUB_OVERVIEW</button>
           <button className="text-[10px] font-black text-white/20 hover:text-white h-full px-4 tracking-widest uppercase transition-colors">SIM_STACK</button>
           <button className="text-[10px] font-black text-white/20 hover:text-white h-full px-4 tracking-widest uppercase transition-colors">CLUSTER_METRICS</button>
        </nav>
        <div className="flex items-center gap-6">
           <Settings className="w-5 h-5 text-white/20 hover:text-[#4cd7f6] cursor-pointer transition-all hover:rotate-90 duration-500" />
           <div className="px-4 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-2 shadow-2xl">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">SYSTEM_OPTIMAL</span>
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 shrink-0">
            <div className="flex flex-col gap-4">
               <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_NAV</span>
               <nav className="flex flex-col gap-1">
                  <SideNavItem icon={<Activity />} label="Telemetry" active />
                  <SideNavItem icon={<Share2 />} label="Qubit_Map" />
                  <SideNavItem icon={<Layers />} label="Circuit_Editor" />
                  <SideNavItem icon={<History />} label="Stability_Log" />
               </nav>
            </div>

            <div className="mt-auto bg-white/[0.02] border border-white/5 p-6 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
               <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">CLUSTER_LOAD</span>
                  <span className="text-[12px] font-mono font-black text-[#4cd7f6]">{cluster.load_pct.toFixed(1)}%</span>
               </div>
               <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-[#4cd7f6] shadow-[0_0_15px_#4cd7f6] transition-all duration-1000" style={{ width: `${cluster.load_pct}%` }} />
               </div>
               <div className="flex justify-between text-[10px] font-black text-white/20 uppercase tracking-widest">
                  <span>ACTIVE_NODES</span>
                  <span className="text-[#4cd7f6] font-mono font-bold">{cluster.active_nodes} / {cluster.total_nodes}</span>
               </div>
            </div>
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 flex flex-col min-w-0 p-8 gap-8 overflow-y-auto custom-scrollbar relative">
            <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
            
            {/* AI Terminal Palette */}
            <section className="bg-black/40 border border-[#4cd7f6]/20 rounded-[40px] p-8 flex flex-col gap-6 shadow-2xl backdrop-blur-3xl group transition-all hover:border-[#4cd7f6]/40 shrink-0">
               <div className="flex items-center gap-4">
                  <Brain className="w-6 h-6 text-[#4cd7f6] animate-pulse" />
                  <span className="text-[11px] font-black text-[#4cd7f6] uppercase tracking-[0.5em]">QUANTUM_AI_COMMAND</span>
               </div>
               <div className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                  <input className="w-full bg-black/40 border border-white/5 px-16 py-5 rounded-[32px] font-mono text-[16px] text-white focus:ring-2 focus:ring-[#4cd7f6]/50 focus:border-[#4cd7f6]/50 transition-all placeholder:text-white/10 outline-none" placeholder="Initiate natural language engineering query..." />
                  <button 
                    onClick={handleCommandExecute}
                    className="absolute right-4 top-1/2 -translate-y-1/2 px-10 py-3 bg-[#4cd7f6] text-black font-black text-[11px] uppercase tracking-widest rounded-2xl hover:shadow-[0_0_20px_#4cd7f6] active:scale-95 transition-all"
                  >
                    EXECUTE_CMD
                  </button>
               </div>
               <div className="flex gap-8 text-[11px] font-mono text-white/20 overflow-x-auto custom-scrollbar pb-2 uppercase tracking-widest">
                  <span>Suggested: "Optimize thermal dissipation for cluster 07"</span>
                  <span className="text-white/5">|</span>
                  <span>"Map latency bottlenecks in mesh grid B"</span>
               </div>
            </section>

            {/* Global Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 shrink-0">
               <MetricCard label="NODE_VOLTAGE" value={`${metrics.voltage_mv.toFixed(2)}mV`} status="STABLE" icon={<Zap className="w-5 h-5" />} color="blue" />
               <MetricCard label="ENTANGLEMENT_RATE" value={`${metrics.entanglement_fid.toFixed(3)}FID`} status="+0.04% RefreshCw" icon={<Share2 className="w-5 h-5" />} color="emerald" />
               <MetricCard label="CRYO_TEMP" value={`${metrics.cryo_mk.toFixed(3)}mK`} status="NOMINAL" icon={<Snowflake className="w-5 h-5" />} color="orange" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 shrink-0">
               {/* Simulation Queue */}
               <section className="lg:col-span-4 bg-black/40 border border-white/5 rounded-[40px] p-8 flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden h-[450px]">
                  <div className="flex justify-between items-center mb-8">
                     <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em]">SIMULATION_QUEUE</span>
                     <BarChart3 className="w-5 h-5 text-white/20" />
                  </div>
                  <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4">
                     <SimItem label="HYDR_CRACK_001" progress={67} status="RUNNING" icon={<FlaskConical className="w-5 h-5" />} color="blue" />
                     <SimItem label="FLUID_DYN_NAV_B" progress={0} status="PENDING" icon={<Activity className="w-5 h-5" />} color="white/20" />
                     <SimItem label="STRESS_TEST_CORE_A" progress={0} status="QUEUED: 12m" icon={<Home className="w-5 h-5" />} color="white/20" />
                  </div>
               </section>

               {/* Digital Twins */}
               <section className="lg:col-span-8 bg-black/40 border border-white/5 rounded-[40px] p-8 flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden h-[450px]">
                  <div className="flex justify-between items-center mb-8">
                     <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em]">ACTIVE_DIGITAL_TWINS ({twins.length})</span>
                     <Layers className="w-5 h-5 text-white/20" />
                  </div>
                  <div className="flex-1 overflow-x-auto custom-scrollbar flex gap-6 pb-6">
                     {twins.map((t: any) => (
                        <TwinCard key={t.id} id={t.id} latency={t.latency_ms} status={t.status} />
                     ))}
                     <div className="w-72 border-2 border-dashed border-white/5 rounded-[32px] flex flex-col items-center justify-center gap-6 text-white/10 hover:text-[#4cd7f6]/40 hover:border-[#4cd7f6]/20 transition-all cursor-pointer shrink-0 hover:bg-[#4cd7f6]/5 group">
                        <Box className="w-10 h-10 group-hover:scale-110 transition-transform" />
                        <span className="text-[11px] font-black uppercase tracking-[0.4em]">INITIALIZE_NEW_TWIN</span>
                     </div>
                  </div>
               </section>
            </div>

            {/* Compute Utilization & Materials */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 shrink-0 pb-12">
               <section className="lg:col-span-6 bg-black/40 border border-white/5 rounded-[40px] p-8 flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                     <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em]">COMPUTE_CLUSTER_UTILIZATION</span>
                     <span className="text-[10px] font-mono text-[#4cd7f6] uppercase tracking-[0.3em] font-black">NODES: {cluster.active_nodes} / {cluster.total_nodes}</span>
                  </div>
                  <div className="grid grid-cols-16 gap-3">
                     {Array.from({ length: 128 }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`aspect-square rounded-[3px] ${i < cluster.active_nodes / 4 ? 'bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6]' : 'bg-white/5'} transition-all duration-500 hover:scale-125 cursor-crosshair`} 
                        />
                     ))}
                  </div>
               </section>

               <section className="lg:col-span-6 bg-black/40 border border-white/5 rounded-[40px] p-8 flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                     <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em]">MATERIAL_DB_QUICK_ACCESS</span>
                     <button className="text-[10px] font-black text-[#4cd7f6] uppercase tracking-[0.3em] hover:underline">BROWSE_ALL</button>
                  </div>
                  <div className="space-y-2">
                     <MaterialRow label="TITANIUM_GRAD_5_ELC" density="4.43 g/cm³" icon={<Grid className="w-5 h-5 text-white/40" />} />
                     <MaterialRow label="AEROGEL_SILICA_X2" density="0.003 g/cm³" icon={<Circle className="w-5 h-5 text-white/40" />} />
                     <MaterialRow label="CARBON_NANOTUBE_STRAND" density="1.3 g/cm³" icon={<Hexagon className="w-5 h-5 text-white/40" />} />
                     <MaterialRow label="GRAPHENE_LATTICE_V8" density="2.26 g/cm³" icon={<Power className="w-5 h-5 text-white/40" />} />
                  </div>
               </section>
            </div>

         </main>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(76, 215, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .scanline-overlay {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
        }
        .grid-cols-16 {
          grid-template-columns: repeat(16, minmax(0, 1fr));
        }
      `}</style>
    </div>
  );
};

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`px-6 py-4 rounded-2xl flex items-center gap-5 transition-all cursor-pointer group ${active ? 'bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/20 shadow-xl' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform">{icon}</div>
     <span className="text-[12px] font-black uppercase tracking-[0.3em]">{label}</span>
  </div>
);

const MetricCard = ({ label, value, status, icon, color }: any) => {
  const colors: any = {
    blue: 'text-[#4cd7f6] border-[#4cd7f6]/10 bg-[#4cd7f6]/5',
    emerald: 'text-emerald-400 border-emerald-500/10 bg-emerald-500/5',
    orange: 'text-orange-400 border-orange-500/10 bg-orange-500/5',
  };
  return (
    <div className={`p-10 border rounded-[48px] flex flex-col gap-6 shadow-2xl backdrop-blur-3xl transition-all hover:scale-[1.05] duration-500 cursor-pointer ${colors[color]}`}>
       <div className="flex justify-between items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">{label}</span>
          {icon}
       </div>
       <div className="text-4xl font-mono font-black tracking-tighter text-white">{value}</div>
       <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-current animate-pulse shadow-[0_0_10px_currentColor]" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] font-mono">{status}</span>
       </div>
    </div>
  );
};

const SimItem = ({ label, progress, status, icon, color }: any) => (
  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-[32px] flex items-center gap-6 group hover:bg-white/[0.04] transition-all cursor-pointer">
     <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-[#4cd7f6] transition-colors shadow-inner">
        {icon}
     </div>
     <div className="flex-1 space-y-3">
        <div className="flex justify-between items-end">
           <span className="text-[12px] font-mono font-black text-white/80 uppercase tracking-tighter">{label}</span>
           <span className="text-[10px] font-black text-[#4cd7f6] uppercase tracking-widest">{status === 'RUNNING' ? `${progress}%` : status}</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
           <div className={`h-full bg-[#4cd7f6] shadow-[0_0_15px_#4cd7f6] transition-all duration-1000`} style={{ width: `${progress}%` }} />
        </div>
     </div>
  </div>
);

const TwinCard = ({ id, latency, status }: any) => (
  <div className="w-72 p-8 bg-white/[0.02] border border-white/5 rounded-[40px] flex flex-col gap-8 shrink-0 group hover:bg-white/[0.04] transition-all hover:border-[#4cd7f6]/20 shadow-2xl relative overflow-hidden cursor-pointer">
     <div className="absolute top-0 right-0 w-32 h-32 bg-[#4cd7f6]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-all duration-1000" />
     <div className="h-32 bg-black/40 rounded-3xl overflow-hidden relative shadow-inner">
        <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBkSmS-kWxQTaPWo4B_gehhvlcH0yayhvVSzXkhhpGWfS84a9ebiryHNU7fLsMNyeiHAZWsU2t-fMcChzehdHJwIfMjsrFdnkYdS7-sjjfBA8TEHb0LihjWVg0Jq8HgFt4oBFxTUWN4w-qhhlaEzQtiaXHX-OC8_LpXoOc9bjBRVI9uosqPYheA0bNrZPSTCXQzv19VllRz4FVX2tcYQ_3j2pBj3oskhMn3OEiz6lG_rj-neyi-5_FYSr3EMqt1FtHXePJDw0UrIsQM" className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000" />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-16 h-16 border-2 border-white/5 rounded-full animate-spin border-t-[#4cd7f6]" />
        </div>
     </div>
     <div className="space-y-6">
        <div className="flex justify-between items-start">
           <span className="text-[13px] font-mono font-black text-white/80 uppercase tracking-tighter">{id}</span>
           {status === 'OPTIMAL' ? <CheckCircle className="w-5 h-5 text-emerald-400" /> : <RefreshCcw className="w-5 h-5 text-[#4cd7f6] animate-spin" />}
        </div>
        <div className="space-y-2">
           <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] font-mono">SYNC_LATENCY: {latency}ms</div>
           <div className="flex gap-3">
              <span className="px-3 py-1 bg-[#4cd7f6]/10 border border-[#4cd7f6]/20 rounded-md text-[9px] font-black text-[#4cd7f6] uppercase tracking-widest">PHYSICS_LOCKED</span>
              <span className="px-3 py-1 bg-white/5 rounded-md text-[9px] font-black text-white/40 uppercase tracking-widest">THERMAL_PASS</span>
           </div>
        </div>
     </div>
  </div>
);

const MaterialRow = ({ label, density, icon }: any) => (
  <div className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 group hover:bg-white/[0.02] px-6 rounded-2xl transition-all cursor-pointer">
     <div className="flex items-center gap-6">
        <div className="group-hover:scale-125 transition-transform duration-500">{icon}</div>
        <span className="text-[12px] font-mono font-black text-white/60 group-hover:text-white transition-colors uppercase tracking-widest">{label}</span>
     </div>
     <span className="text-[11px] font-mono text-white/20 font-bold">{density}</span>
  </div>
);

export default GlobalHomeDashboardEngineeringOS_0f3781;
