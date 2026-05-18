'use client';

import React from 'react';
import {
  Box,
  Terminal,
  Activity,
  Zap,
  Layers,
  Settings,
  Search,
  Brain,
  Maximize2,
  Camera,
  ChevronRight,
  Database,
  ShieldCheck,
  RefreshCw,
  Eye,
  MousePointer2,
  Ruler,
  Mic,
  ShieldAlert,
  Cpu
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * XREngineeringMode v3.2 (Phase 58 Hardened)
 * 
 * High-fidelity XR engineering workspace for spatial reasoning and digital twins.
 * Refactored to a sovereign React component with real-time state binding.
 */
const XREngineeringModeEngineeringOS_bddb4f = () => {
  const { osStatus, uiState, pushEvent } = useEngineeringStore();
  const { kernelLoad = 0.94, uptime = 0 } = osStatus || {};

  const handleAction = (action: string) => {
    pushEvent?.('XR_ACTION_TRIGGERED', { action, timestamp: Date.now() });
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
            <Box className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-[12px] font-black text-white uppercase tracking-[0.4em] font-mono">ENGINEERING_OS // XR_MODE</span>
        </div>
        <div className="flex items-center gap-8">
           <nav className="hidden md:flex gap-8">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest cursor-default">ENGINEERING_XR</span>
              <span className="text-[10px] font-black text-white/20 hover:text-white uppercase tracking-widest cursor-pointer transition-colors">SIMULATIONS</span>
              <span className="text-[10px] font-black text-white/20 hover:text-white uppercase tracking-widest cursor-pointer transition-colors">MANUFACTURING</span>
           </nav>
           <div className="px-4 py-1.5 bg-blue-500/10 border border-blue-400/30 rounded-lg text-[10px] font-mono font-black text-blue-400 tracking-widest shadow-2xl">
              GPU: {(kernelLoad * 100).toFixed(0)}% | SIM: ACTIVE
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. SIDE NAVIGATION (LOCKED) */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 hidden lg:flex shrink-0">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-2">SYSTEM_CORE</span>
            <nav className="flex flex-col gap-2">
              <SidebarItem icon={<Database className="w-4 h-4" />} label="Projects" />
              <SidebarItem icon={<Activity className="w-4 h-4" />} label="Simulations" active />
              <SidebarItem icon={<Brain className="w-4 h-4" />} label="AI Agents" />
              <SidebarItem icon={<Layers className="w-4 h-4" />} label="Digital Twin" />
            </nav>
          </div>
        </aside>

        {/* 3. MAIN WORKSPACE (CANVAS) */}
        <main className="flex-1 flex flex-col min-w-0 relative overflow-hidden">
          
          {/* Spatial Viewport */}
          <section className="flex-1 relative flex items-center justify-center p-8 overflow-hidden bg-black/20">
             <div className="relative w-full h-full max-w-6xl rounded-[48px] overflow-hidden border border-white/5 shadow-2xl group">
                {/* 3D Scene Mockup (High Fidelity Placeholder) */}
                <img 
                  src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuB6SBa22EqfzyRephGEOCpo0j-zYjLWs1mC7rLJvUxjPYzTMU4vg2jhoIud29cyZAtTxDlOoeCMbpCwtwCQICxNl5Fd_-kqa-Q3GdcH1xY4pC26ySl2x60OxPWomAYGoDQpjE-3n7OgjfD0cpijLYCywikghEQ_kJc-dOSg1sSHL27-1z6DwbMG5eQxyl3TaumCewIBosuZIqI68VAHFaHe_HMxjAewrPT_FqIXFqbndzZA0aDT18WPUV35HqCtv4Y_1ANpUsQlieBV" 
                  className="w-full h-full object-cover opacity-60 mix-blend-screen grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-[2000ms] scale-105 group-hover:scale-100"
                />
                
                {/* Holographic HUD Overlays */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                   <div className="w-3/4 h-3/4 border-2 border-blue-500/10 rounded-full animate-pulse blur-sm" />
                   <div className="absolute w-[60%] h-[60%] border border-blue-400/20 rounded-full animate-[spin_30s_linear_infinite]" />
                </div>

                {/* Data Points */}
                <div className="absolute top-1/2 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_20px_#3b82f6]">
                   <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/80 border border-blue-500/20 rounded-full text-[10px] font-mono font-black text-blue-400 backdrop-blur-xl">
                      PLANE_X_042 // ACTIVE
                   </div>
                </div>

                {/* Floating Toggles */}
                <div className="absolute top-12 right-12 flex flex-col gap-4">
                   <div className="bg-black/60 border border-white/10 p-6 rounded-[32px] backdrop-blur-2xl space-y-4 shadow-2xl">
                      <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] block mb-2">SIMULATION_LAYERS</span>
                      <LayerToggle label="Stress Heatmap" active />
                      <LayerToggle label="Flow Lines" />
                      <LayerToggle label="Deformation" />
                   </div>
                </div>

                {/* Gesture Control Legend */}
                <div className="absolute left-12 bottom-12 grid grid-cols-2 gap-4">
                   <ControlTile icon={<RefreshCw className="w-5 h-5" />} label="Orbit" />
                   <ControlTile icon={<Layers className="w-5 h-5" />} label="Explode" />
                   <ControlTile icon={<MousePointer2 className="w-5 h-5" />} label="Section" active />
                   <ControlTile icon={<Ruler className="w-5 h-5" />} label="Measure" />
                </div>

                {/* XR Session Info */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2">
                   <div className="px-8 py-3 bg-black/60 border border-white/5 rounded-full backdrop-blur-2xl flex items-center gap-10 shadow-2xl">
                      <div className="flex flex-col items-center">
                         <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">LATENCY</span>
                         <span className="text-[12px] font-mono font-black text-blue-400">4ms</span>
                      </div>
                      <div className="flex flex-col items-center">
                         <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">REFRESH</span>
                         <span className="text-[12px] font-mono font-black text-blue-400">120Hz</span>
                      </div>
                      <div className="flex flex-col items-center">
                         <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">STATUS</span>
                         <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-black text-emerald-400 uppercase">CO-PRESENCE</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* 4. FOOTER Terminal BAR */}
          <footer className="h-14 bg-black/60 border-t border-white/5 backdrop-blur-xl flex items-center px-10 gap-10 z-50 shrink-0">
             <div className="flex items-center gap-4 flex-1">
                <div className="flex gap-1.5 items-end h-6">
                   <div className="w-1 h-3 bg-blue-500/40 animate-[pulse_1s_infinite_0s]" />
                   <div className="w-1 h-5 bg-blue-500/80 animate-[pulse_1s_infinite_0.2s]" />
                   <div className="w-1 h-4 bg-blue-500 animate-[pulse_1s_infinite_0.4s]" />
                   <div className="w-1 h-2 bg-blue-500/20 animate-[pulse_1s_infinite_0.6s]" />
                </div>
                <span className="text-[11px] font-mono font-black text-blue-400 uppercase tracking-[0.4em] animate-pulse">
                   Awaiting AI Engineering Terminal...
                </span>
             </div>
             <div className="flex items-center gap-8">
                <div className="flex flex-col items-end">
                   <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">UPLINK_PROTOCOL</span>
                   <span className="text-[10px] font-mono font-black text-white uppercase tracking-widest">CRYPTO_SECURE_v7</span>
                </div>
                <button 
                  onClick={() => handleAction('TERMINATE_SESSION')}
                  className="px-6 py-2 bg-rose-500/10 border border-rose-500/20 text-rose-500 font-black text-[10px] uppercase tracking-widest rounded-lg hover:bg-rose-500 hover:text-white transition-all active:scale-95 shadow-2xl"
                >
                   TERMINATE_SESSION
                </button>
             </div>
          </footer>
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

const LayerToggle = ({ label, active }: any) => (
  <button className={`w-full px-6 py-3 rounded-xl border flex items-center justify-between gap-8 transition-all group ${active ? 'bg-blue-500/10 border-blue-500/40 text-blue-400' : 'bg-white/5 border-white/5 text-white/40 hover:bg-white/10 hover:text-white'}`}>
    <span className="text-[11px] font-mono font-black uppercase tracking-tighter">{label}</span>
    <div className={`w-2 h-2 rounded-full ${active ? 'bg-blue-400 animate-pulse shadow-[0_0_10px_#3b82f6]' : 'bg-white/10'}`} />
  </button>
);

const ControlTile = ({ icon, label, active }: any) => (
  <div className={`w-20 h-20 flex flex-col items-center justify-center gap-3 rounded-[24px] border backdrop-blur-2xl transition-all cursor-pointer group ${active ? 'bg-blue-500/10 border-blue-500/40 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)]' : 'bg-black/60 border-white/5 text-white/20 hover:text-blue-400 hover:border-blue-500/20'}`}>
     <div className="group-hover:scale-110 transition-transform">{icon}</div>
     <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
  </div>
);

export default XREngineeringModeEngineeringOS_bddb4f;
