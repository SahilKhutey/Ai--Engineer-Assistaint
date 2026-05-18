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
  Globe,
  Hand,
  HelpCircle,
  Move,
  Radio} from 'lucide-react';
import React, { useState } from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * HolographicMissionControl v3.5 (Phase 55 Hardened)
 * 
 * A spatial intelligence interface for global engineering operations.
 * Visualizes orbital assets, constellation health, and XR-ready gesture mapping.
 */
const HolographicMissionControlEngineeringOS_aabe9d = () => {
  const { 
    aerospaceState, 
    osStatus, 
    distributedCompute,
    addNotification 
  } = useEngineeringStore();

  const [gestures, setGestures] = useState({
    dragRotate: true,
    zoomScaler: false,
    freezeFrame: true
  });

  const handleCalibrate = () => {
    addNotification?.({
      title: 'SPATIAL_CALIBRATION_INITIATED',
      message: 'Aligning Hand-tracking vectors with global coordinate system...',
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
              <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] font-mono">MISSION_CONTROL_v3.5</span>
           </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest font-mono font-bold">GPU: 94% | SIM: ACTIVE</span>
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
           <div className="mt-auto flex flex-col gap-3">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-widest font-mono">ENV_SCAN: 100%</span>
              </div>
              <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">UPTIME: 142:09:11</span>
           </div>
        </aside>

        {/* 3. SPATIAL CANVAS */}
        <main className="flex-1 relative overflow-hidden flex items-center justify-center bg-[#0B0F14]">
           <div className="absolute inset-0 z-0 opacity-40">
              <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuDayupsOSlkyPLjhMATgNXO1iGXNbio2e4JwPa5f2725uGexQ3iaBId1YeaBoy_6P8XXmx0biz4gMDgmHaiEygQrar_N6Nxd8Wk9vUQPEWp_Xf9iCD24X6yFMGICS2dURHHZQnNep2ODF1FFc5ysSMGlM2qYgTT4J9I9sBwAcl6WgDUc-jw-9ngOXTnIH3Kd4C174G4Fo3yewt3t7STg33QGaIkUz5dc2fUcgCLlmYkaG2hs6iFW0v_4nlPcGB7NdoLHDIqTDMuzDqh" className="w-full h-full object-cover grayscale mix-blend-screen transition-all duration-[5000ms] hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
           </div>

           {/* Spatial HUD Panels */}
           <div className="relative z-10 w-full h-full p-12 flex justify-between items-center pointer-events-none">
              
              {/* Left Panel: Telemetry */}
              <div className="w-80 space-y-6 arc-panel-left pointer-events-auto">
                 <GlassPanel title="ORBITAL_VECTORS" icon={<Settings />}>
                    <div className="space-y-6">
                       <div className="flex justify-between items-end">
                          <div className="flex flex-col gap-1">
                             <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">SATELLITE_ID</span>
                             <span className="text-xl font-mono font-black text-blue-400">{aerospaceState.satelliteStatus[0]?.id || 'XJ-99_ALPHA'}</span>
                          </div>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                          <div className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-all duration-1000" style={{ width: '78%' }} />
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div className="bg-black/40 border border-white/5 p-4 rounded-2xl flex flex-col gap-1">
                             <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">VELOCITY</span>
                             <span className="text-sm font-mono font-black text-white">{aerospaceState.velocity.toFixed(2)} KM/S</span>
                          </div>
                          <div className="bg-black/40 border border-white/5 p-4 rounded-2xl flex flex-col gap-1">
                             <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">TrendingUp</span>
                             <span className="text-sm font-mono font-black text-white">{aerospaceState.TrendingUp.toFixed(0)} KM</span>
                          </div>
                       </div>
                    </div>
                 </GlassPanel>

                 <GlassPanel title="ACTIVE_SENSORS">
                    <div className="space-y-2">
                       <SensorItem icon={<Radio />} label="LIDAR_ARRAY_01" status="LIVE" />
                       <SensorItem icon={<HelpCircle />} label="INFRARED_CORE" status="LIVE" />
                       <SensorItem icon={<Waves />} label="SPECTRAL_SCAN" status="CALIB" />
                    </div>
                 </GlassPanel>
              </div>

              {/* Central Hologram */}
              <div className="hidden lg:flex flex-col items-center gap-12 group">
                 <div className="relative w-80 h-80 flex items-center justify-center">
                    <div className="absolute inset-0 border-[2px] border-blue-500/10 rounded-full" />
                    <div className="absolute inset-0 border-t-[4px] border-blue-500 rounded-full animate-spin-slow" />
                    <div className="absolute inset-8 border-[1px] border-cyan-400/20 rounded-full animate-reverse-spin" />
                    <div className="text-center space-y-2 z-10 transition-transform duration-1000 group-hover:scale-110">
                       <Globe className="text-blue-500/40 w-12 h-12 mb-4 mx-auto" />
                       <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] font-mono">CONSTELLATION</p>
                       <p className="text-2xl font-mono font-black text-blue-400 uppercase tracking-tighter">OMEGA_GRID</p>
                    </div>
                 </div>
              </div>

              {/* Right Panel: Gestures */}
              <div className="w-80 space-y-6 arc-panel-right pointer-events-auto">
                 <GlassPanel title="GESTURE_MAPPING" icon={<Sparkles />}>
                    <div className="space-y-4">
                       <GestureItem 
                          icon={<Move />} 
                          label="DRAG_ROTATE" 
                          desc="Map global axis to Hand position." 
                          active={gestures.dragRotate} 
                          onToggle={() => setGestures(prev => ({ ...prev, dragRotate: !prev.dragRotate }))}
                       />
                       <GestureItem 
                          icon={<Sparkles />} 
                          label="ZOOM_SCALER" 
                          desc="Two-finger ZoomIn to adjust scale." 
                          active={gestures.zoomScaler} 
                          onToggle={() => setGestures(prev => ({ ...prev, zoomScaler: !prev.zoomScaler }))}
                       />
                       <GestureItem 
                          icon={<Hand />} 
                          label="FREEZE_FRAME" 
                          desc="Open palm gesture to halt updates." 
                          active={gestures.freezeFrame} 
                          onToggle={() => setGestures(prev => ({ ...prev, freezeFrame: !prev.freezeFrame }))}
                       />
                    </div>
                 </GlassPanel>
                 
                 <button 
                    onClick={handleCalibrate}
                    className="w-full py-4 bg-blue-600 text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                 >
                    CALIBRATE_SPATIAL_SENSORS
                 </button>
              </div>
           </div>

           {/* Environmental Stats Overlay */}
           <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end pointer-events-none z-20">
              <div className="bg-black/40 border-l-2 border-blue-500 p-6 backdrop-blur-xl rounded-r-3xl">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">STREAM_LATENCY</span>
                 <div className="text-3xl font-mono font-black text-blue-400 uppercase">{Math.floor(osStatus.kernelLoad * 100)} MS</div>
              </div>
              <div className="flex gap-12 bg-black/40 border-r-2 border-cyan-400 p-6 backdrop-blur-xl text-right rounded-l-3xl">
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">ACTIVE_NODES</span>
                    <div className="text-xl font-mono font-black text-cyan-400 uppercase">4,092 / 5,000</div>
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">SYSTEM_HEALTH</span>
                    <div className="text-xl font-mono font-black text-emerald-400 uppercase">NOMINAL</div>
                 </div>
              </div>
           </div>
        </main>
      </div>

      <style jsx>{`
        .scanline-overlay {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
        }
        .arc-panel-left {
          transform: perspective(1000px) rotateY(15deg) translateZ(50px);
        }
        .arc-panel-right {
          transform: perspective(1000px) rotateY(-15deg) translateZ(50px);
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animate-reverse-spin {
          animation: spin 12s linear infinite reverse;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const GlassPanel = ({ title, icon, children }: any) => (
  <div className="bg-black/60 border border-white/5 rounded-3xl p-8 backdrop-blur-3xl shadow-2xl space-y-6">
     <div className="flex justify-between items-center border-b border-white/5 pb-4">
        <span className="text-[11px] font-black text-white uppercase tracking-[0.4em] font-mono">{title}</span>
        {icon && React.cloneElement(icon, { className: 'w-4 h-4 text-white/20' })}
     </div>
     {children}
  </div>
);

const SensorItem = ({ icon, label, status }: any) => (
  <div className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl cursor-pointer transition-all group">
     {React.cloneElement(icon, { className: 'w-4 h-4 text-blue-400' })}
     <span className="text-[11px] font-black text-white/60 group-hover:text-white transition-colors font-mono">{label}</span>
     <span className={`ml-auto text-[9px] font-black font-mono ${status === 'LIVE' ? 'text-emerald-400' : 'text-orange-400'}`}>{status}</span>
  </div>
);

const GestureItem = ({ icon, label, desc, active, onToggle }: any) => (
  <div className={`p-4 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3 transition-all ${active ? 'bg-blue-500/5 border-blue-500/20' : 'opacity-40 grayscale'}`}>
     <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
           {React.cloneElement(icon, { className: 'w-4 h-4 text-blue-400' })}
           <span className="text-[11px] font-black text-white uppercase tracking-widest font-mono">{label}</span>
        </div>
        <div 
          onClick={onToggle}
          className={`w-8 h-4 rounded-full relative p-0.5 cursor-pointer transition-colors ${active ? 'bg-blue-600' : 'bg-white/10'}`}
        >
           <div className={`w-3 h-3 bg-white rounded-full transition-transform ${active ? 'translate-x-4' : 'translate-x-0'}`} />
        </div>
     </div>
     <p className="text-[10px] text-white/20 leading-tight font-mono">{desc}</p>
  </div>
);

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`px-6 py-3.5 rounded-2xl flex items-center gap-4 transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-lg' : 'text-white/20 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform duration-500">{icon}</div>
     <span className="text-[11px] font-black uppercase tracking-[0.2em] font-mono">{label}</span>
  </div>
);

export default HolographicMissionControlEngineeringOS_aabe9d;
