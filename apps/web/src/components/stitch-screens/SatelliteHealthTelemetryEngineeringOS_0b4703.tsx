'use client';

import {
  Rocket,
  Globe,
  Activity,
  LayoutGrid,
  Network,
  Terminal,
  Settings,
  Thermometer,
  Zap,
  Brain,
  RefreshCw,
  Sun,
  AlertTriangle,
  Code
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * SatelliteHealthTelemetry v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity mission control for Radio constellation health Activity.
 * Real-time synchronization of thermal distribution, battery analysis, 
 * and AI-driven fault prediction.
 */
const SatelliteHealthTelemetryEngineeringOS_0b4703 = () => {
  const { 
    aerospaceState, 
    thermalState, 
    osStatus,
    pushEvent,
    addNotification
  } = useEngineeringStore();

  const {
    diagnostics = { propulsion: 98, oxygen: 72, shield: 45, thermal_S3: 842 },
    trajectory = { TrendingUp: 542.1, velocity: 7.6, inclination: 53.21, eccentricity: 0.0002 }
  } = aerospaceState || {};

  const {
    status: thermalStatus = 'NOMINAL',
    coreTemp = 24.2,
    radiator_01 = 'ACTIVE'
  } = thermalState || {};

  const handleGenerateDiagnostic = () => {
    pushEvent?.('DIAGNOSTIC_CMD_GENERATED', { target: 'RCS_THRUSTER_A', timestamp: Date.now() });
    addNotification?.({
      title: 'DIAGNOSTIC_INITIATED',
      message: 'Valve actuator stress test sequence dispatched.',
      type: 'WARNING',
      domain: 'COMMS'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 flex justify-between items-center bg-black/60 border-b border-white/5 z-50 shrink-0">
         <div className="flex items-center gap-4">
            <Rocket className="text-[#adc6ff] w-5 h-5" />
            <h1 className="font-mono text-[16px] font-black text-[#adc6ff] uppercase tracking-[0.2em]">MISSION_CONTROL // SAT-OS-09_HEALTH</h1>
         </div>
         <div className="flex items-center gap-8">
            <div className="flex flex-col items-end">
               <span className="text-[9px] font-black text-[#ffb786] uppercase tracking-widest">System Status</span>
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-pulse" />
                  <span className="text-[11px] font-mono font-black text-[#4cd7f6]">NOMINAL</span>
               </div>
            </div>
            <Settings className="text-[#adc6ff] cursor-pointer hover:rotate-90 transition-all duration-500" />
         </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col py-6 gap-2 hidden md:flex shrink-0">
            <div className="px-6 mb-4 pb-4 border-b border-white/5">
               <span className="text-[10px] font-black text-[#ffb786] uppercase tracking-[0.4em]">OS: SAT-Terminal</span>
            </div>
            <nav className="flex flex-col gap-1">
               <SideNavItem icon={<Globe className="w-4 h-4" />} label="Orbital Tracking" />
               <SideNavItem icon={<Activity className="w-4 h-4" />} label="Radio Health" active />
               <SideNavItem icon={<LayoutGrid className="w-4 h-4" />} label="Constellation" />
               <SideNavItem icon={<Network className="w-4 h-4" />} label="Link Analysis" />
               <SideNavItem icon={<Terminal className="w-4 h-4" />} label="System Logs" />
            </nav>
            <div className="mt-auto p-6 space-y-6 border-t border-white/5 bg-white/[0.02]">
               <DrawerStat label="UPTIME" value="1,242:15:02" progress={88} color="#adc6ff" />
               <DrawerStat label="BANDWIDTH" value="4.2 GBPS" progress={42} color="#4cd7f6" />
            </div>
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 p-2 overflow-y-auto custom-scrollbar bg-black/20">
            <div className="grid grid-cols-12 gap-2 h-full">
               
               {/* Left Column: Telemetry Streams */}
               <div className="col-span-12 lg:col-span-3 flex flex-col gap-2">
                  
                  {/* Thermal Distribution */}
                  <Panel title="Thermal Distribution" icon={<Thermometer className="w-4 h-4" />}>
                     <div className="flex justify-between items-end border-b border-white/5 pb-2 mb-4">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">CORE TEMP</span>
                        <span className="text-xl font-mono font-black text-[#4cd7f6]">{coreTemp.toFixed(1)}°C</span>
                     </div>
                     <div className="h-16 w-full flex items-end gap-1 px-1 mb-6">
                        {[60, 75, 40, 90, 55, 80, 30, 65, 45, 70].map((h, i) => (
                           <div key={i} className="bg-[#4cd7f6]/40 w-full rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }} />
                        ))}
                     </div>
                     <div className="grid grid-cols-2 gap-2">
                        <SmallStat label="MIN/PEAK" value="-12.5 / 42.1" />
                        <SmallStat label="RADIATOR 1" value={radiator_01} color="#4cd7f6" />
                     </div>
                  </Panel>

                  {/* Battery Analysis */}
                  <Panel title="Battery Analysis" icon={<Zap className="w-4 h-4" />}>
                     <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">DOD (DEPTH OF DISCHARGE)</span>
                        <span className="text-xl font-mono font-black text-[#adc6ff]">14.8%</span>
                     </div>
                     <div className="relative h-3 bg-white/5 border border-white/5 rounded-full overflow-hidden mb-6">
                        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#adc6ff] to-[#4cd7f6]" style={{ width: '14.8%' }} />
                     </div>
                     <div className="space-y-2">
                        <DetailRow label="Bus Voltage" value="28.02V" />
                        <DetailRow label="Charge Current" value="+4.12A" color="#4cd7f6" />
                     </div>
                  </Panel>

                  {/* AI Fault Predictor */}
                  <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl overflow-hidden flex flex-col shadow-2xl backdrop-blur-3xl flex-grow">
                     <div className="h-8 bg-rose-500/20 px-4 flex items-center justify-between">
                        <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                           AI FAULT PREDICTOR
                        </span>
                        <Brain className="text-[16px] text-rose-400" />
                     </div>
                     <div className="p-4 flex flex-col gap-4">
                        <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl">
                           <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">PREDICTIVE ALERT: RCS THRUSTER A</p>
                           <p className="text-[12px] text-white/80 leading-tight">Stochastic drift detected in valve actuator. Failure probability: <span className="font-black">78%</span> within 14 Earth days.</p>
                           <button 
                              onClick={handleGenerateDiagnostic}
                              className="mt-4 w-full py-2 bg-rose-500 text-black font-black text-[10px] uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_#f43f5e] active:scale-95 transition-all"
                           >
                              GENERATE DIAGNOSTIC CMD
                           </button>
                        </div>
                        <div className="space-y-2">
                           <div className="flex items-center justify-between text-[10px] font-black text-white/40 uppercase tracking-widest">
                              <span>Sub-system Health Rating</span>
                              <span>92.4%</span>
                           </div>
                           <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-[#4cd7f6]" style={{ width: '92.4%' }} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Middle Column: 3D Visualization */}
               <div className="col-span-12 lg:col-span-6 flex flex-col gap-2">
                  <div className="bg-black/40 border border-white/5 rounded-2xl relative flex-grow min-h-[400px] overflow-hidden group shadow-2xl backdrop-blur-3xl">
                     <div className="h-10 absolute top-0 left-0 w-full z-10 flex items-center justify-between px-6 bg-black/40 backdrop-blur-xl border-b border-white/5">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Live Telemetry Visualization - SAT-OS-09</span>
                        <div className="flex gap-6">
                           <span className="text-[10px] font-mono font-black text-[#4cd7f6] uppercase tracking-widest">LAYER: THERMAL_HEATMAP</span>
                           <span className="text-[10px] font-mono font-black text-[#adc6ff] uppercase tracking-widest">WIRE_MODE: ACTIVE</span>
                        </div>
                     </div>
                     
                     <div className="absolute inset-0 flex items-center justify-center p-12">
                        <div className="relative w-full h-full border border-white/[0.05] rounded-full flex items-center justify-center">
                           <img 
                              className="w-full h-full object-contain opacity-40 mix-blend-screen transition-transform duration-[20000ms] group-hover:scale-110" 
                              src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuBrzCQalnKmvLxxim07-04I2LMZ7BEnhQtexya0d25tTw13EGetMafZZ7eWaCMi8Dn9stwrsHaYB-aZZoatImaPX_UK2DoxoG61GNQISHF9jMab9YgAo-e3sjiFkGxl0QmQy7XgHLaHwvViX41SI7ERYo_QH5Zo52RruZag9-6P4jcX0OIY3fM0fHO5Ji79LN3S_tuVSXaM-wf8v8SoGid1j_bLNsUo8Q5ScVSNAUWrrjhNSzG436EW_KOs1rzbwY0tt75GIknvdZfr" 
                              alt="Radio Wireframe"
                           />
                           {/* HUD Overlays */}
                           <div className="absolute inset-0 pointer-events-none">
                              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#adc6ff]/20 rounded-full animate-pulse flex items-center justify-center">
                                 <div className="w-16 h-16 border border-[#adc6ff]/10 rounded-full" />
                              </div>
                              <div className="absolute top-[20%] right-[15%] p-3 border-l-2 border-[#adc6ff] bg-black/40 backdrop-blur-xl">
                                 <p className="text-[9px] font-black text-[#adc6ff] uppercase tracking-widest">SOLAR_ARRAY_A</p>
                                 <p className="font-mono text-[12px] font-black text-white">PEAK: 12.2A</p>
                              </div>
                              <div className="absolute bottom-[20%] left-[20%] p-3 border-r-2 border-[#4cd7f6] bg-black/40 backdrop-blur-xl text-right">
                                 <p className="text-[9px] font-black text-[#4cd7f6] uppercase tracking-widest">RCS_CLUSTER_01</p>
                                 <p className="font-mono text-[12px] font-black text-white">P: 242.1 PSI</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Visual Legend */}
                     <div className="absolute bottom-6 left-6 p-4 bg-black/60 border border-white/10 rounded-2xl backdrop-blur-xl space-y-2 shadow-2xl">
                        <LegendItem color="#ffb4ab" label="HOTSPOT (>40°C)" shadow="#ffb4ab" />
                        <LegendItem color="#4cd7f6" label="NOMINAL (15-25°C)" shadow="#4cd7f6" />
                        <LegendItem color="#adc6ff" label="CRYO-POINT (< -20°C)" shadow="#adc6ff" />
                     </div>
                  </div>

                  {/* System Terminal Log */}
                  <div className="bg-black/40 border border-white/5 rounded-2xl overflow-hidden h-32 shadow-2xl backdrop-blur-3xl">
                     <div className="h-8 bg-white/[0.02] px-4 flex items-center border-b border-white/5">
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">System Terminal Log (T-0:00:15)</span>
                     </div>
                     <div className="p-4 h-[calc(100%-32px)] overflow-y-auto custom-scrollbar font-mono text-[11px] text-white/40 space-y-1">
                        <LogRow time="12:44:01.02" tag="SYSTEM" msg="Initializing sub-routine 'THERMAL_SWEEP'" color="#4cd7f6" />
                        <LogRow time="12:44:01.05" tag="HEARTBEAT" msg="ACK Received from Core Process A-02" color="white" />
                        <LogRow time="12:44:01.12" tag="AlertTriangle" msg="Signal attenuation in sector 4-B increased by 2.1db" color="#ffb786" />
                        <LogRow time="12:44:01.18" tag="CRITICAL" msg="RCS THRUSTER A valve latency out of bounds" color="#ffb4ab" />
                     </div>
                  </div>
               </div>

               {/* Right Column: Component Gauges */}
               <div className="col-span-12 lg:col-span-3 flex flex-col gap-2">
                  
                  {/* Reaction Wheels */}
                  <Panel title="Reaction Wheels" icon={<RefreshCw className="w-4 h-4" />}>
                     <div className="space-y-6">
                        <WheelStat label="WHEEL X" rpm="3,412" progress={68} color="#4cd7f6" />
                        <WheelStat label="WHEEL Y" rpm="1,245" progress={25} color="#4cd7f6" />
                        <WheelStat label="WHEEL Z" rpm="5,190" progress={90} color="#adc6ff" />
                     </div>
                  </Panel>

                  {/* Solar Array Output */}
                  <Panel title="Solar Array Output" icon={<Sun className="w-4 h-4" />}>
                     <div className="text-center py-4">
                        <div className="inline-flex flex-col mb-8">
                           <span className="text-3xl font-mono font-black text-[#ffb786] tracking-tighter">14.22 <span className="text-sm">kW</span></span>
                           <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mt-1">TOTAL PRODUCTION</span>
                        </div>
                        <div className="flex justify-around">
                           <CircleGauge label="PANEL A" percent={92} color="#ffb786" />
                           <CircleGauge label="PANEL B" percent={41} color="#ffb786" opacity={0.4} />
                           <CircleGauge label="PANEL C" percent={88} color="#ffb786" />
                        </div>
                     </div>
                  </Panel>

                  {/* Orbital Parameters */}
                  <div className="bg-[#adc6ff]/5 border border-[#adc6ff]/20 rounded-2xl flex-grow shadow-2xl backdrop-blur-3xl overflow-hidden">
                     <div className="h-8 bg-[#adc6ff]/10 px-4 flex items-center justify-between border-b border-[#adc6ff]/10">
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Orbital Parameters</span>
                        <Globe className="text-[16px] text-[#adc6ff]" />
                     </div>
                     <div className="p-4 grid grid-cols-2 gap-6">
                        <OrbitalStat label="TrendingUp" value={`${trajectory.TrendingUp} km`} />
                        <OrbitalStat label="VELOCITY" value={`${trajectory.velocity} km/s`} />
                        <OrbitalStat label="INCLINATION" value={`${trajectory.inclination}°`} />
                        <OrbitalStat label="ECCENTRICITY" value={trajectory.eccentricity.toString()} />
                     </div>
                  </div>
               </div>

            </div>
         </main>
      </div>

      <style jsx>{`
         .scanline-overlay {
            background: linear-gradient(to bottom, transparent 50%, rgba(173, 198, 255, 0.05) 50%);
            background-size: 100% 4px;
         }
      `}</style>
    </div>
  );
};

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-6 py-4 transition-all cursor-pointer group ${active ? 'bg-[#4cd7f6]/10 text-[#4cd7f6] border-l-4 border-[#4cd7f6]' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform">{icon}</div>
     <span className="text-[12px] font-black uppercase tracking-widest">{label}</span>
  </div>
);

const DrawerStat = ({ label, value, progress, color }: any) => (
  <div className="space-y-2">
     <div className="flex justify-between text-[10px] font-black text-white/40 uppercase tracking-widest">
        <span>{label}</span>
        <span className="text-white/80">{value}</span>
     </div>
     <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
        <div className="h-full transition-all duration-1000" style={{ width: `${progress}%`, backgroundColor: color }} />
     </div>
  </div>
);

const Panel = ({ title, icon, children }: any) => (
  <div className="bg-black/40 border border-white/5 rounded-2xl overflow-hidden flex flex-col shadow-2xl backdrop-blur-3xl">
     <div className="h-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between px-4">
        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{title}</span>
        <div className="text-[16px] text-white/20">{icon}</div>
     </div>
     <div className="p-4">{children}</div>
  </div>
);

const SmallStat = ({ label, value, color }: any) => (
  <div className="bg-white/[0.02] p-3 border border-white/5 rounded-xl">
     <p className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">{label}</p>
     <p className="text-[11px] font-mono font-black" style={{ color: color || 'white' }}>{value}</p>
  </div>
);

const DetailRow = ({ label, value, color }: any) => (
  <div className="flex justify-between text-[11px] font-mono font-black uppercase tracking-tighter">
     <span className="text-white/40">{label}</span>
     <span style={{ color: color || 'white' }}>{value}</span>
  </div>
);

const LegendItem = ({ color, label, shadow }: any) => (
  <div className="flex items-center gap-3">
     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 8px ${shadow}` }} />
     <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{label}</span>
  </div>
);

const LogRow = ({ time, tag, msg, color }: any) => (
  <div className="flex gap-4">
     <span className="text-[#adc6ff] shrink-0">[{time}]</span>
     <span className="font-black shrink-0" style={{ color }}>{tag}:</span>
     <span className="text-white/60 truncate">{msg}</span>
  </div>
);

const WheelStat = ({ label, rpm, progress, color }: any) => (
  <div className="space-y-2">
     <div className="flex justify-between text-[11px] font-mono font-black uppercase tracking-tighter">
        <span className="text-white/40">{label}</span>
        <span style={{ color }}>{rpm} RPM</span>
     </div>
     <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
        <div className="h-full transition-all duration-1000 shadow-lg" style={{ width: `${progress}%`, backgroundColor: color, boxShadow: `0 0 8px ${color}` }} />
     </div>
  </div>
);

const CircleGauge = ({ label, percent, color, opacity = 1 }: any) => (
  <div className="flex flex-col items-center gap-2" style={{ opacity }}>
     <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-[10px] font-black" style={{ borderColor: color, color }}>
        {percent}%
     </div>
     <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">{label}</span>
  </div>
);

const OrbitalStat = ({ label, value }: any) => (
  <div className="space-y-1">
     <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">{label}</p>
     <p className="text-[13px] font-mono font-black text-white tracking-tighter">{value}</p>
  </div>
);

export default SatelliteHealthTelemetryEngineeringOS_0b4703;
