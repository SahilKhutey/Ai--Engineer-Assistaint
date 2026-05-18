'use client';

import React, { useMemo } from 'react';
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
  Waves,
  Power,
  GitBranch,
  History,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  Network,
  AlertTriangle,
  Play,
  RefreshCw,
  Terminal,
  Grid,
  Eye,
  Layers,
  Box,
  CheckCircle2,
  Info,
  BarChart3,
  Binary,
  Scale,
  Gauge,
  Clock,
  Thermometer,
  Sparkles,
  FolderOpen,
  Fingerprint,
  Filter,
  Cpu,
  HardDrive,
  Share2,
  User
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * SpectroscopySpectrumEngine v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity spectral analysis workspace for real-time photonics and chemical detection.
 * Refactored to a sovereign React component with 60Hz real-time state binding.
 */
const SpectroscopySpectrumEngineEngineeringOS_9cb089 = () => {
  const { opticsState, osStatus, pushEvent, orchestrationState } = useEngineeringStore();
  const { fidelity = 0.99 } = opticsState || {};
  const { kernelLoad = 0.74 } = osStatus || {};
  const { latency_ms = 12.4 } = orchestrationState || {};

  // Procedural spectrum path generation for real-time "alive" feel
  const spectrumPath = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 800; i += 10) {
      const noise = Math.sin(i * 0.05 + Date.now() * 0.002) * 20;
      const baseHeight = 280 - (Math.exp(-Math.pow(i - 500, 2) / 5000) * 200);
      points.push(`${i},${Math.max(20, baseHeight + noise)}`);
    }
    return `M0,280 Q${points.join(' T')}`;
  }, [Date.now()]);

  const handleAction = (action: string) => {
    pushEvent?.('SPECTROSCOPY_ACTION_TRIGGERED', { action, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-blue-500/30 animate-in fade-in duration-1000 pb-16 md:pb-0">
      {/* Cockpit Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-2xl">
             <Terminal className="w-4 h-4 text-blue-400" />
          </div>
          <h1 className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono text-blue-400">QUANTUM_COMMAND_OS // SPECTROSCOPY_v3.2</h1>
        </div>
        <div className="flex items-center gap-8">
           <nav className="hidden md:flex gap-6">
              <NavButton label="SPECTRUM_ENGINE" active />
              <NavButton label="NEURAL_ARRAY" />
              <NavButton label="FLUX_STABILITY" />
           </nav>
           <div className="flex items-center gap-4 border-l border-white/10 pl-6 h-6">
              <div className="flex flex-col items-end">
                 <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">CORE_TEMP</span>
                 <span className="text-[11px] font-mono font-black text-emerald-400">34.2 °C</span>
              </div>
              <Settings className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAVIGATION (v3.2 Hardened) */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-6 hidden lg:flex shrink-0">
          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_NAV</span>
          <nav className="flex flex-col gap-2">
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="Telemetry" active />
            <SidebarItem icon={<Network className="w-4 h-4" />} label="Qubit_Map" />
            <SidebarItem icon={<GitBranch className="w-4 h-4" />} label="Circuit_Editor" />
            <SidebarItem icon={<History className="w-4 h-4" />} label="Stability_Log" />
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="System_Health" />
          </nav>

          <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
             <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[9px] font-black text-white/20 uppercase tracking-widest text-blue-400">ENGINE_LOAD</span>
                   <span className="text-[11px] font-mono font-black text-white">{(kernelLoad * 100).toFixed(0)}%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                   <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${kernelLoad * 100}%` }} />
                </div>
             </div>
          </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 flex flex-col p-4 gap-4 overflow-y-auto custom-scrollbar relative">
          
          <div className="grid grid-cols-12 gap-4">
            
            {/* Spectral Intensity Plot */}
            <section className="col-span-12 lg:col-span-8 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] overflow-hidden flex flex-col h-[420px] shadow-2xl relative group">
               <header className="h-10 px-8 flex justify-between items-center border-b border-white/5 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] animate-pulse" />
                     <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">LIVE_SPECTRAL_INTENSITY_PLOT</span>
                  </div>
                  <div className="flex gap-4 items-center">
                     <span className="text-[9px] font-mono font-black text-blue-400/40 tracking-widest">SAMPLE_ID: QX-990</span>
                     <Maximize2 className="w-3.5 h-3.5 text-white/10 hover:text-white transition-colors cursor-pointer" />
                  </div>
               </header>
               <div className="flex-1 p-8 flex flex-col relative">
                  <div className="flex-1 border-l border-b border-white/10 relative">
                     {/* SVG Spectrum Chart */}
                     <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
                        <path 
                          d={spectrumPath} 
                          fill="none" 
                          stroke="#3b82f6" 
                          strokeWidth="2" 
                          className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                        />
                        <path 
                          d={`${spectrumPath} L800,300 L0,300 Z`} 
                          fill="url(#spectrum-fade)" 
                          opacity="0.1" 
                        />
                        <defs>
                           <linearGradient id="spectrum-fade" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="transparent" />
                           </linearGradient>
                        </defs>
                        {/* Peak Labels */}
                        <circle cx="500" cy="50" fill="#22d3ee" r="4" className="animate-pulse" />
                        <text className="font-mono text-[10px] fill-cyan-400 font-black tracking-widest italic" x="515" y="45">PEAK_EMISSION: 582nm</text>
                     </svg>
                     {/* Gridlines */}
                     <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 pointer-events-none opacity-[0.05]">
                        {Array.from({ length: 32 }).map((_, i) => (
                           <div key={i} className="border-r border-t border-white" />
                        ))}
                     </div>
                  </div>
                  <div className="h-4 spectrum-gradient w-full mt-4 rounded-full relative group overflow-hidden border border-white/5">
                     <div className="absolute inset-0 flex justify-between px-4 pointer-events-none">
                        <span className="text-[8px] font-mono font-black text-white/60 tracking-widest mix-blend-difference">400nm</span>
                        <span className="text-[8px] font-mono font-black text-white/60 tracking-widest mix-blend-difference">500nm</span>
                        <span className="text-[8px] font-mono font-black text-white/60 tracking-widest mix-blend-difference">600nm</span>
                        <span className="text-[8px] font-mono font-black text-white/60 tracking-widest mix-blend-difference">700nm</span>
                     </div>
                     {/* Wavelength Heatmap Cursor */}
                     <div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_#fff] left-[58%] z-10 animate-pulse" />
                  </div>
               </div>
            </section>

            {/* Mathematical Engine Constants */}
            <section className="col-span-12 lg:col-span-4 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] overflow-hidden flex flex-col h-[420px] shadow-2xl group">
               <header className="h-10 px-8 flex items-center border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">MATHEMATICAL_DATA</span>
               </header>
               <div className="flex-1 p-8 flex flex-col justify-center items-center gap-10 bg-black/20 relative overflow-hidden">
                  <div className="text-center z-10 space-y-2">
                     <p className="font-mono text-white/20 text-[10px] uppercase tracking-[0.4em]">WAVE_EQUATION</p>
                     <h3 className="font-mono text-4xl font-black text-blue-400 tracking-tighter italic drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">c = f · λ</h3>
                     <div className="flex justify-center gap-8 mt-6">
                        <div className="text-left space-y-1">
                           <span className="block text-[8px] font-black text-white/10 uppercase tracking-widest">f (freq)</span>
                           <span className="font-mono text-[12px] font-black text-cyan-400 tracking-tighter">5.17e14 Hz</span>
                        </div>
                        <div className="text-left space-y-1">
                           <span className="block text-[8px] font-black text-white/10 uppercase tracking-widest">λ (wave)</span>
                           <span className="font-mono text-[12px] font-black text-cyan-400 tracking-tighter">580.4 nm</span>
                        </div>
                     </div>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  <div className="grid grid-cols-2 gap-4 w-full z-10">
                     <DataBlock label="REFRACT_INDEX" value="1.458" />
                     <DataBlock label="PHOTON_E" value="2.14 eV" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
               </div>
            </section>

            {/* Material Fingerprint Library */}
            <section className="col-span-12 lg:col-span-5 flex flex-col gap-4">
               <div className="bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] p-8 space-y-6 shadow-2xl overflow-hidden relative">
                  <div className="flex justify-between items-center relative z-10">
                     <h2 className="text-[10px] font-black text-white uppercase tracking-[0.4em] flex items-center gap-3">
                        <Fingerprint className="w-4 h-4 text-blue-400" />
                        MATERIAL_FINGERPRINT_LIB
                     </h2>
                     <button className="text-[9px] font-black text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full hover:bg-blue-500/10 transition-all uppercase tracking-widest">UPDATE_INDEX</button>
                  </div>
                  <div className="space-y-2 relative z-10">
                     <FingerprintItem 
                       title="SILICA_DIOXIDE_V4" 
                       match="98.2%" 
                       img="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCb78dNxC6qgTl23IaprFbyjlklsjTPQ3_LeJOrTMfH-McS75_3Oxpn1rOxqa1NMqDY3CMv8gL5R7CiMjVjvxDpmOpBK0Nzl9JeCi2QnEjY-DDQ4h7EKirq-LlpmowRGjpzYpUa10IPwJYy8Bf5x6on6iu0BhqtiUB5hJjaXu7u8c3H-cPsGCTCyXjBQjToNmTrGOhpgSzAiIBUQjkOPeytGx1IS0zcvly2eB4DS3xFMt5XiSbCeNYel3lTtDk1hFqLx_xCUtasy4lZ"
                       active
                     />
                     <FingerprintItem 
                       title="GRAPHENE_OXIDE_RES" 
                       match="MATCH_FAIL" 
                       img="https://lh3.googleusercontent.com/aida-Globe/AB6AXuCePG16jYk0C1y9X43r5fm8czZW7kaTfrSWT5XHfwhdJ5AojWG-4zqNglPwC5v93SARq4CjjtCGA0DvbJXGgCKnnybuA5TrP9fBcnttHJCpBE-C1YjGOT8lwbyasog878eoDJB4WKW_cnubD3gki3fwInmeKY6rEUEXZsMYGWXKcWvj2M-XyKMrUrKYbNJfGNhfL4QfAaoxztUDrdBA4pjwgApYfrZlgYWxI18pTnqz16SoEL94sj5Osxtf-rLnOZQz-yoVHe1NQIy9"
                       color="text-rose-400"
                     />
                     <FingerprintItem 
                       title="TITANIUM_ALLOY_Z2" 
                       match="84.5%" 
                       img="https://lh3.googleusercontent.com/aida-Globe/AB6AXuA5iwucZ4Pc2reOWFfb598ABT0PbL5ReyQw_jr-eNjG9RsLW9F9MVWQuYzWLhIERm9AiIwyZXQfNubZ6UebKi3jZ_RfQ0Os8ZoTXVbVvpLWgOhp2AszMitpDmI-KplfiaHl3RwwQ5NzLyufPkRcDR_AQub6Mz7GSXXXnno9cwV91gUiTKI85hQdp_7WImZjOvM33UAlTK5bHqWsreHJSVUUtHzU1AV2a3gxyy-RyMrkGx9x13hUc3JunkPIf9jrGGWNPGiguZb4i9OJ"
                     />
                  </div>
               </div>
            </section>

            {/* Absorption Bands Analysis */}
            <section className="col-span-12 lg:col-span-7 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-[40px] overflow-hidden flex flex-col h-full min-h-[340px] shadow-2xl">
               <header className="h-10 px-8 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">ABSORPTION_BANDS_ANALYSIS</span>
                  <div className="flex items-center gap-4">
                     <Filter className="w-3.5 h-3.5 text-white/10" />
                     <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">SORT: BY_CONFIDENCE</span>
                  </div>
               </header>
               <div className="flex-1 overflow-x-auto custom-scrollbar">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-white/[0.02] border-b border-white/5">
                           <th className="py-4 px-8 text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">ELEMENT_REF</th>
                           <th className="py-4 px-8 text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">WAVELENGTH (λ)</th>
                           <th className="py-4 px-8 text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">BAND_WIDTH</th>
                           <th className="py-4 px-8 text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">STATUS</th>
                           <th className="py-4 px-8 text-[9px] font-black text-white/20 uppercase tracking-[0.4em] text-right">MAGNITUDE</th>
                        </tr>
                     </thead>
                     <tbody className="font-mono text-[11px] font-black tracking-tighter">
                        <TableRow element="Sodium (Na-D)" wave="589.3 nm" width="0.6 nm" status="Detected" mag="0.923" color="text-emerald-400" />
                        <TableRow element="Hydrogen-α" wave="656.3 nm" width="1.2 nm" status="Detected" mag="0.714" color="text-emerald-400" />
                        <TableRow element="Oxygen (O2)" wave="760.8 nm" width="4.5 nm" status="Trace" mag="0.105" color="text-white/40" />
                        <TableRow element="Carbon_Monoxide" wave="4.67 μm" width="--" status="Absent" mag="0.000" color="text-rose-500" />
                        <TableRow element="Nitrogen (N2)" wave="337.1 nm" width="0.2 nm" status="Detected" mag="0.455" color="text-emerald-400" />
                     </tbody>
                  </table>
               </div>
            </section>

          </div>

        </main>
      </div>

      {/* System Status Overlay */}
      <div className="fixed bottom-4 right-4 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-2xl px-6 py-3 flex items-center gap-8 z-[100] hidden md:flex shadow-2xl border-l-4 border-blue-500">
         <StatusIndicator label="LASER_LINK" status="STABLE" color="bg-emerald-500" />
         <StatusIndicator label="SYNC_RATE" status={`${latency_ms}ms`} color="bg-blue-500" />
         <StatusIndicator label="BUFFER" status="88%" color="bg-amber-500" />
      </div>

      {/* Mobile Control Navigation */}
      <nav className="fixed bottom-0 left-0 w-full h-16 bg-black/80 backdrop-blur-2xl border-t border-white/5 flex md:hidden items-center justify-around px-6 z-50">
         <div className="p-2 text-white/20 hover:text-white transition-all"><LayoutGrid className="w-5 h-5" /></div>
         <div className="p-3 bg-blue-500 rounded-full text-white shadow-[0_0_20px_#3b82f6]"><Waves className="w-5 h-5" /></div>
         <div className="p-2 text-white/20 hover:text-white transition-all"><Activity className="w-5 h-5" /></div>
         <div className="p-2 text-white/20 hover:text-white transition-all"><Power className="w-5 h-5" /></div>
      </nav>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .scanline {
          background: linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 50%, transparent 50%);
          background-size: 100% 4px;
        }
        .spectrum-gradient {
          background: linear-gradient(to right, #4a00e0, #0000ff, #00ff00, #ffff00, #ff0000);
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

const NavButton = ({ label, active }: any) => (
  <button className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 transition-all ${active ? 'text-blue-400 border-b-2 border-blue-500/50' : 'text-white/40 hover:text-white'}`}>
    {label}
  </button>
);

const SidebarItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all cursor-pointer group ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-xl' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
    <div className="group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-[11px] font-black uppercase tracking-[0.2em]">{label}</span>
  </div>
);

const DataBlock = ({ label, value }: any) => (
  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-[24px] space-y-2 group hover:border-blue-500/20 transition-all">
     <span className="text-[9px] font-black text-white/10 uppercase tracking-widest block">{label}</span>
     <div className="text-[18px] font-mono font-black text-white tracking-tighter">{value}</div>
  </div>
);

const FingerprintItem = ({ title, match, img, active, color }: any) => (
  <div className={`flex items-center gap-6 p-4 rounded-[28px] border transition-all cursor-pointer group ${active ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}>
     <div className="w-12 h-12 shrink-0 bg-black/40 rounded-2xl border border-white/5 overflow-hidden group-hover:scale-110 transition-transform">
        <img src={img} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
     </div>
     <div className="flex-1 min-w-0 space-y-1">
        <div className="flex justify-between items-baseline">
           <span className="text-[11px] font-black text-white uppercase tracking-widest truncate">{title}</span>
           <span className={`text-[11px] font-mono font-black italic tracking-tighter ${color || 'text-blue-400'}`}>{match}</span>
        </div>
        <div className="flex gap-1.5">
           <div className={`w-8 h-1 rounded-full ${active ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]' : 'bg-white/5'}`} />
           <div className={`w-4 h-1 rounded-full ${active ? 'bg-blue-500/40' : 'bg-white/5'}`} />
           <div className="w-12 h-1 rounded-full bg-white/5" />
        </div>
     </div>
  </div>
);

const TableRow = ({ element, wave, width, status, mag, color }: any) => (
  <tr className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
     <td className="py-4 px-8 text-blue-400 group-hover:text-blue-300">{element}</td>
     <td className="py-4 px-8 text-white/40 group-hover:text-white/60">{wave}</td>
     <td className="py-4 px-8 text-white/40 group-hover:text-white/60">{width}</td>
     <td className="py-4 px-8">
        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-current bg-current/5 ${color}`}>
           {status}
        </span>
     </td>
     <td className="py-4 px-8 text-right text-blue-400/60 font-mono italic">{mag}</td>
  </tr>
);

const StatusIndicator = ({ label, status, color }: any) => (
  <div className="flex items-center gap-3">
     <div className={`w-1.5 h-1.5 rounded-full ${color} animate-pulse shadow-[0_0_8px_currentColor]`} />
     <div className="flex flex-col">
        <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">{label}</span>
        <span className="text-[10px] font-mono font-black text-white">{status}</span>
     </div>
  </div>
);

export default SpectroscopySpectrumEngineEngineeringOS_9cb089;
