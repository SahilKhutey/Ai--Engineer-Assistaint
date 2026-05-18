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
  Camera,
  Cpu,
  Factory,
  FolderOpen,
  Maximize2,
  Bug,
  Code} from 'lucide-react';
import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * DigitalTwinCommandCenter v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity mission control for complex engineering digital twins.
 * Real-time synchronization of sensor topology, 3D model telemetry, and failure predictions.
 */
const DigitalTwinCommandCenterEngineeringOS_c036ff = () => {
  const { 
    homeState, 
    thermalState, 
    osStatus, 
    pushEvent, 
    addNotification 
  } = useEngineeringStore();

  const {
    twins = [
      { id: 'REACTOR_CORE_v4', latency_ms: 4, status: 'SYNCED' },
      { id: 'TURBINE_ASSEM_H1', latency_ms: 12, status: 'WARN' },
      { id: 'COMPUTE_CLUSTER_B', latency_ms: 0.8, status: 'OPTIMAL' }
    ],
    metrics = { voltage_mv: 48.24, entanglement_fid: 0.992, throughput_gbs: 12.4 }
  } = homeState || {};

  const {
    status: thermalStatus = 'NOMINAL',
    boundaryLayer = { separation_detected: false }
  } = thermalState || {};

  const Sliders = [
    { id: 'SENSOR_A01', status: 'ONLINE', color: '#10B981' },
    { id: 'SENSOR_B09', status: 'AlertTriangle', color: '#ffb786' },
    { id: 'SENSOR_C04', status: 'ONLINE', color: '#10B981' },
    { id: 'SENSOR_D12', status: 'DEGRADED', color: '#ffb4ab' },
    { id: 'SENSOR_E22', status: 'ONLINE', color: '#10B981' }
  ];

  const handleForecast = () => {
    pushEvent?.('AI_FORECAST_INITIATED', { target: 'BEARING_4_THERMAL', timestamp: Date.now() });
    addNotification?.({
      title: 'FORECAST_ACTIVE',
      message: 'AI engine computing 48h thermal drift projections.',
      type: 'INFO',
      domain: 'SPATIAL'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 flex justify-between items-center bg-black/60 backdrop-blur-xl border-b border-white/5 z-50 shrink-0">
         <div className="flex items-center gap-4">
            <Code className="text-[#adc6ff] w-5 h-5" />
            <h1 className="font-mono text-[18px] text-[#adc6ff] uppercase tracking-tighter font-black italic">ENGINEERING_OS // DIGITAL_TWIN</h1>
         </div>
         <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8 font-mono text-[11px] font-bold text-white/40 uppercase tracking-widest">
               <span className="hover:text-white cursor-pointer transition-colors">SYS_CORE</span>
               <span className="text-[#4cd7f6] font-black border-b-2 border-[#4cd7f6] pb-1">DIGITAL_TWIN</span>
               <span className="hover:text-white cursor-pointer transition-colors">MANUFACTURING</span>
            </nav>
            <div className="font-mono text-[11px] font-bold text-[#adc6ff] border-l border-white/10 pl-8">
               GPU: {(osStatus?.kernelLoad || 74.2).toFixed(1)}% | SIM: ACTIVE
            </div>
         </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col hidden md:flex shrink-0">
            <div className="p-6">
               <h2 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-6">SYSTEM_CORE</h2>
               <nav className="flex flex-col gap-1">
                  <SideNavItem icon={<FolderOpen />} label="Projects" />
                  <SideNavItem icon={<FlaskConical />} label="Simulations" />
                  <SideNavItem icon={<Cpu />} label="AI Agents" />
                  <SideNavItem icon={<Factory />} label="Digital Twin" active />
                  <SideNavItem icon={<Factory />} label="Manufacturing" />
               </nav>
            </div>
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 p-6 overflow-y-auto custom-scrollbar bg-black/20 relative">
            
            {/* Global Health Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
               <div className="md:col-span-2 p-8 bg-black/40 border border-white/5 rounded-2xl flex items-center justify-between shadow-2xl backdrop-blur-3xl">
                  <div>
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] block mb-2">GLOBAL_HEALTH_INDEX</span>
                     <div className="flex items-baseline gap-4">
                        <span className="text-4xl font-black text-[#adc6ff] tracking-tighter">92%</span>
                        <span className="text-[11px] font-mono text-[#4cd7f6] font-bold">+0.4% SINCE_0800</span>
                     </div>
                  </div>
                  <div className="text-right">
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] block mb-2">TELEMETRY_STREAM</span>
                     <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_10px_#10B981]" />
                        <span className="font-mono text-[14px] text-white/80 font-bold uppercase tracking-widest">ACTIVE_LINK_01</span>
                     </div>
                  </div>
               </div>
               <div className="p-8 bg-black/40 border border-white/5 rounded-2xl flex flex-col justify-center shadow-2xl backdrop-blur-3xl">
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] block mb-3">THROUGHPUT</span>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden shadow-inner">
                     <div className="bg-[#4cd7f6] h-full shadow-[0_0_10px_#4cd7f6]" style={{ width: '78%' }} />
                  </div>
                  <span className="font-mono text-[12px] text-white/40 mt-3 font-bold uppercase tracking-widest">{metrics.throughput_gbs} GB/s SYNCED</span>
               </div>
            </section>

            {/* Bento Grid LayoutGrid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto">
               
               {/* Sensor Topology */}
               <section className="lg:col-span-4 bg-black/40 border border-white/5 rounded-2xl flex flex-col shadow-2xl overflow-hidden backdrop-blur-3xl">
                  <div className="h-10 px-6 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                     <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">SENSOR_TOPOLOGY</span>
                     <Settings className="text-[16px] text-white/20 cursor-pointer hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                     {Sliders.map((sensor) => (
                        <div key={sensor.id} className="flex items-center justify-between p-4 hover:bg-white/[0.02] cursor-pointer border-b border-white/5 last:border-0 group transition-all">
                           <span className="font-mono text-[13px] text-white/60 group-hover:text-white transition-colors font-bold uppercase tracking-widest">{sensor.id}</span>
                           <div className="flex items-center gap-3">
                              <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: sensor.color }}>{sensor.status}</span>
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: sensor.color, boxShadow: `0 0 8px ${sensor.color}` }} />
                           </div>
                        </div>
                     ))}
                  </div>
               </section>

               {/* Engineering Model 3D Preview */}
               <section className="lg:col-span-5 bg-black/40 border border-white/5 rounded-2xl flex flex-col shadow-2xl overflow-hidden relative backdrop-blur-3xl">
                  <div className="h-10 px-6 flex items-center justify-between bg-white/[0.02] border-b border-white/5 z-10 relative">
                     <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">ENGINEERING_MODEL_3D</span>
                     <div className="flex gap-4">
                        <Camera className="text-[18px] text-white/20 cursor-pointer hover:text-white transition-colors" />
                        <Maximize2 className="text-[18px] text-white/20 cursor-pointer hover:text-white transition-colors" />
                     </div>
                  </div>
                  <div className="flex-1 bg-black/20 relative group overflow-hidden">
                     <img 
                        alt="3D Wireframe Model" 
                        className="w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-[10000ms] group-hover:scale-110" 
                        src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBkSmS-kWxQTaPWo4B_gehhvlcH0yayhvVSzXkhhpGWfS84a9ebiryHNU7fLsMNyeiHAZWsU2t-fMcChzehdHJwIfMjsrFdnkYdS7-sjjfBA8TEHb0LihjWVg0Jq8HgFt4oBFxTUWN4w-qhhlaEzQtiaXHX-OC8_LpXoOc9bjBRVI9uosqPYheA0bNrZPSTCXQzv19VllRz4FVX2tcYQ_3j2pBj3oskhMn3OEiz6lG_rj-neyi-5_FYSr3EMqt1FtHXePJDw0UrIsQM" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent pointer-events-none" />
                     
                     {/* Anomaly Detection UI Overlay */}
                     {thermalStatus === 'CRITICAL' && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-rose-500/20 blur-3xl animate-pulse" />
                     )}
                     
                     <div className="absolute bottom-6 left-6 p-4 bg-black/60 border border-white/10 backdrop-blur-xl rounded-xl font-mono text-[11px] shadow-2xl">
                        <div className="text-[#adc6ff] font-bold">X: 142.09</div>
                        <div className="text-[#adc6ff] font-bold">Y: 28.11</div>
                        <div className="text-[#adc6ff] font-bold">Z: -12.44</div>
                     </div>
                  </div>
               </section>

               {/* Failure Prediction & AI Insights */}
               <section className="lg:col-span-3 flex flex-col gap-6">
                  
                  {/* Failure Prediction */}
                  <div className="bg-black/40 border border-white/5 rounded-2xl flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden">
                     <div className="h-10 px-6 flex items-center bg-white/[0.02] border-b border-white/5">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">FAILURE_PREDICTION</span>
                     </div>
                     <div className="p-6 space-y-6">
                        <div>
                           <span className="text-[10px] font-black text-white/20 uppercase tracking-widest block mb-2">REMAINING_USEFUL_LIFE</span>
                           <div className="text-3xl font-mono font-black text-[#4cd7f6] tracking-tight">840 HRS</div>
                        </div>
                        <div>
                           <span className="text-[10px] font-black text-white/20 uppercase tracking-widest block mb-2">ANOMALY_PROBABILITY</span>
                           <div className="text-3xl font-mono font-black text-rose-400 tracking-tight">2%</div>
                        </div>
                     </div>
                  </div>

                  {/* AI Insights */}
                  <div className="bg-black/40 border border-white/5 rounded-2xl flex flex-col shadow-2xl backdrop-blur-3xl overflow-hidden flex-1">
                     <div className="h-10 px-6 flex items-center bg-white/[0.02] border-b border-white/5">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">AI_ENGINE_INSIGHT</span>
                     </div>
                     <div className="p-6 bg-[#ffb786]/5 border-l-4 border-[#ffb786] h-full flex flex-col">
                        <p className="font-mono text-[13px] text-[#ffb786] leading-relaxed italic mb-8">
                           "Thermal drift detected in Bearing_4. Heat signature exceeds baseline by 12.4%. Maintenance recommended in next 48h to avoid catastrophic deformation."
                        </p>
                        <div className="mt-auto space-y-3">
                           <InsightButton label="AI_FORECAST" icon={<History />} primary onClick={handleForecast} />
                           <InsightButton label="REPLAY_TIMELINE" icon={<HardDrive />} />
                           <InsightButton label="DIAGNOSTIC_REPORT" icon={<Bug />} />
                        </div>
                     </div>
                  </div>
               </section>

            </div>
         </main>
      </div>

      <style jsx>{`
         .scanline-overlay {
            background: linear-gradient(to bottom, transparent 50%, rgba(76, 215, 246, 0.05) 50%);
            background-size: 100% 4px;
         }
      `}</style>
    </div>
  );
};

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-6 py-4 transition-all cursor-pointer rounded-xl group ${active ? 'bg-[#4cd7f6]/10 text-[#4cd7f6] border-l-4 border-[#4cd7f6]' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform">{icon}</div>
     <span className="text-[12px] font-bold uppercase tracking-widest">{label}</span>
  </div>
);

const InsightButton = ({ label, icon, primary, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-mono text-[10px] font-black uppercase tracking-widest active:scale-[0.98] ${primary ? 'bg-[#4cd7f6] text-black shadow-lg hover:shadow-[#4cd7f6]/20' : 'border border-white/10 text-white/40 hover:bg-white/5 hover:text-white'}`}
  >
    {icon}
    {label}
  </button>
);

export default DigitalTwinCommandCenterEngineeringOS_c036ff;
