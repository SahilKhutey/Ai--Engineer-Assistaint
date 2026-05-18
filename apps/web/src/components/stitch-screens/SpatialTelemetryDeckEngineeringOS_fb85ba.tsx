'use client';

import React from 'react';
import {
  Terminal,
  Settings,
  FolderOpen,
  Factory,
  Activity,
  Cpu,
  Layers,
  ChevronRight,
  Share2,
  Download,
  Zap,
  Globe,
  ShieldCheck,
  Gauge
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * SpatialTelemetryDeckEngineeringOS_fb85ba (Phase 58 Hardened)
 * 
 * High-fidelity spatial telemetry dashboard for XR/XR-integrated systems.
 * Features torque heatmaps, neural link stability, and real-time latency profiling.
 */
const SpatialTelemetryDeckEngineeringOS_fb85ba = () => {
  const { aerospaceState, structuralState, osStatus, pushEvent } = useEngineeringStore();

  // Real-time values mapped from store
  const cpuLoad = (osStatus?.kernelLoad || 0.94) * 100;
  const isSimActive = osStatus?.status === 'ACTIVE';
  const stability = 91; // Mocked or from neural state
  const latency = 0.45; // ms
  const jitter = 0.02; // ms

  const handleAction = (action: string) => {
    pushEvent?.('SPATIAL_TELEM_ACTION', { action, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#10131a] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-[#4cd7f6]/30">
      {/* Visual Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-[#424754] bg-[#10131a]/70 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4 cursor-pointer active:opacity-80">
          <Zap className="w-5 h-5 text-[#adc6ff]" />
          <h1 className="text-[20px] font-bold text-[#adc6ff] tracking-tighter leading-none">ANTIGRAVITY_OS</h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-[11px] font-bold text-[#4cd7f6] uppercase tracking-[0.2em]">Spatial Telemetry</span>
          <span className="text-[11px] font-bold text-[#c2c6d6] hover:bg-white/5 px-2 py-1 rounded transition-colors cursor-pointer uppercase tracking-[0.2em]">BarChart3</span>
          <span className="text-[11px] font-bold text-[#c2c6d6] hover:bg-white/5 px-2 py-1 rounded transition-colors cursor-pointer uppercase tracking-[0.2em]">Systems Control</span>
        </div>
        <div className="text-[10px] font-mono font-bold text-[#adc6ff] tracking-widest bg-[#1d2027] px-4 py-1 rounded border border-[#424754] shadow-xl">
          GPU: {cpuLoad.toFixed(0)}% | SIM: {isSimActive ? 'ACTIVE' : 'IDLE'}
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. NAVIGATION DRAWER */}
        <aside className="w-64 border-r border-[#424754] bg-[#0b0e15] flex flex-col hidden md:flex shrink-0">
          <div className="p-6 border-b border-[#424754]">
            <span className="text-[10px] font-bold text-[#e1e2ec] uppercase tracking-[0.4em]">SYSTEM_CORE</span>
          </div>
          <nav className="flex-1 p-2 flex flex-col gap-1">
            <NavItem icon={<FolderOpen className="w-4 h-4" />} label="Projects" active />
            <NavItem icon={<Activity className="w-4 h-4" />} label="Simulations" />
            <NavItem icon={<Activity className="w-4 h-4" />} label="AI Agents" />
            <NavItem icon={<Activity className="w-4 h-4" />} label="Digital Twin" />
            <NavItem icon={<Factory className="w-4 h-4" />} label="Manufacturing" />
          </nav>
          <div className="p-4 bg-[#191b23] border-t border-[#424754]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#10B981] animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-[#c2c6d6] uppercase tracking-widest">UPLINK: STABLE</span>
            </div>
          </div>
        </aside>

        {/* 3. MAIN CONTENT CANVAS */}
        <main className="flex-1 relative overflow-hidden bg-[#10131a] flex flex-col">
          
          {/* Central 3D Digital Twin Simulation */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-4/5 h-4/5 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-contain opacity-40 mix-blend-screen filter drop-shadow-[0_0_30px_rgba(173,198,255,0.2)]"
                alt="Digital Twin Preview"
              />
              {/* HUD Overlay rings */}
              <div className="absolute w-[600px] h-[600px] border border-[#adc6ff]/10 rounded-full animate-pulse" />
              <div className="absolute w-[400px] h-[400px] border border-[#4cd7f6]/5 rounded-full border-dashed" />
            </div>
          </div>

          {/* Floating UI Panels */}
          <div className="relative z-10 grid grid-cols-12 gap-4 p-8 h-full content-start pointer-events-none">
            
            {/* Torque Heatmap Panel */}
            <div className="col-span-12 lg:col-span-3 bg-[#1a2330]/80 backdrop-blur-xl border border-[#202B3C] rounded-2xl p-0 flex flex-col pointer-events-auto h-fit shadow-2xl overflow-hidden">
              <div className="h-8 px-4 flex items-center justify-between border-b border-[#424754] bg-[#1d2027]/50">
                <span className="text-[10px] font-bold text-[#adc6ff] uppercase tracking-widest">TORQUE HEATMAP</span>
                <Settings className="w-3.5 h-3.5 text-[#c2c6d6] cursor-pointer hover:text-[#adc6ff] transition-colors" />
              </div>
              <div className="p-4 space-y-4">
                <TorqueJoint label="Joint A-1" value={48.2} status="nominal" />
                <TorqueJoint label="Joint B-4" value={92.1} status="AlertTriangle" />
                <div className="mt-4 border border-[#424754] rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bbbda500302a?auto=format&fit=crop&q=80&w=600" 
                    className="w-full h-24 object-cover opacity-60 grayscale contrast-125"
                    alt="Heatmap Graph"
                  />
                </div>
              </div>
            </div>

            {/* Spacer for Center */}
            <div className="col-span-12 lg:col-span-6 h-64 lg:h-auto" />

            {/* Neural Link Panel */}
            <div className="col-span-12 lg:col-span-3 bg-[#1a2330]/80 backdrop-blur-xl border border-[#202B3C] rounded-2xl p-0 flex flex-col pointer-events-auto h-fit shadow-2xl overflow-hidden">
              <div className="h-8 px-4 flex items-center justify-between border-b border-[#424754] bg-[#1d2027]/50">
                <span className="text-[10px] font-bold text-[#adc6ff] uppercase tracking-widest">NEURAL LINK STABILITY</span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#4cd7f6]" />
                  <div className="w-2 h-2 rounded-full bg-[#4cd7f6]/20" />
                </div>
              </div>
              <div className="p-6 flex flex-col items-center gap-6">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle className="text-[#272a31]" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="2" />
                    <circle 
                      className="text-[#4cd7f6] drop-shadow-[0_0_8px_rgba(76,215,246,0.5)]" 
                      cx="64" cy="64" fill="transparent" r="58" 
                      stroke="currentColor" strokeWidth="4" 
                      strokeDasharray="364" strokeDashoffset={364 - (364 * (stability / 100))}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[24px] font-bold text-[#e1e2ec] tracking-tighter">{stability}%</span>
                    <span className="text-[9px] font-bold text-[#c2c6d6] uppercase tracking-widest">STABLE</span>
                  </div>
                </div>
                <div className="w-full space-y-2">
                  <div className="flex justify-between text-[11px] font-mono text-[#c2c6d6] font-bold">
                    <span className="uppercase tracking-widest">RefreshCw Rate</span>
                    <span className="text-[#4cd7f6]">1.2ms</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-[#c2c6d6] font-bold">
                    <span className="uppercase tracking-widest">Integrity</span>
                    <span className="text-[#4cd7f6]">NOMINAL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Latency Profile Panel (Bottom Left) */}
            <div className="col-span-12 lg:col-span-4 bg-[#1a2330]/80 backdrop-blur-xl border border-[#202B3C] rounded-2xl p-0 flex flex-col pointer-events-auto mt-auto mb-8 shadow-2xl overflow-hidden">
              <div className="h-8 px-4 flex items-center justify-between border-b border-[#424754] bg-[#1d2027]/50">
                <span className="text-[10px] font-bold text-[#adc6ff] uppercase tracking-widest">LATENCY PROFILE</span>
                <span className="text-[10px] font-mono font-bold text-[#4cd7f6] uppercase tracking-widest animate-pulse">LIVE_FETCH</span>
              </div>
              <div className="p-6 flex gap-8">
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#c2c6d6] uppercase tracking-[0.2em] mb-1">GLOBAL_RTT</span>
                    <span className="text-[24px] font-mono font-bold text-[#4cd7f6] tracking-tighter">{latency}ms</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#c2c6d6] uppercase tracking-[0.2em] mb-1">JITTER</span>
                    <span className="text-[14px] font-mono font-bold text-[#e1e2ec] tracking-tighter">{jitter}ms</span>
                  </div>
                </div>
                <div className="flex-1 border-l border-[#424754] pl-8 flex items-center justify-center">
                   <Activity className="w-full h-12 text-[#4cd7f6] opacity-40" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Terminal Log */}
          <footer className="mt-auto bg-[#1a2330]/90 backdrop-blur-2xl border-t border-[#424754] p-2 flex items-center justify-between pointer-events-auto z-50">
            <div className="flex items-center gap-6">
              <div className="bg-[#1d2027] px-4 py-1.5 border border-[#424754] rounded-lg flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6]" />
                <span className="text-[11px] font-mono font-bold text-[#4cd7f6] uppercase tracking-widest">XR_SYNC: ESTABLISHED</span>
              </div>
              <div className="flex gap-6 text-[10px] font-mono font-bold text-[#8c909f] uppercase tracking-widest">
                <span>POS_LOCK: 0.0, 1.2, -0.4</span>
                <span className="hidden md:inline text-white/20">|</span>
                <span className="hidden md:inline">USER: ADMIN_CORE_01</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-[#03b5d3] text-[#001f26] px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#4cd7f6] transition-all shadow-[0_0_15px_rgba(76,215,246,0.3)] active:scale-95">
                RESET VIEW
              </button>
              <button className="border border-[#424754] px-4 py-1.5 rounded-lg text-[10px] font-bold text-[#c2c6d6] uppercase tracking-widest hover:bg-white/5 transition-all active:scale-95">
                LOG_EXPORT
              </button>
            </div>
          </footer>
        </main>
      </div>

      {/* FAB */}
      <button className="fixed bottom-24 right-8 z-[100] w-14 h-14 bg-[#adc6ff] text-[#002e6a] rounded-full shadow-[0_0_30px_rgba(173,198,255,0.5)] flex items-center justify-center hover:scale-110 active:scale-90 transition-all md:bottom-8">
        <Zap className="w-8 h-8 fill-current" />
      </button>

      <style jsx>{`
        .scanline {
          background: linear-gradient(to bottom, transparent 50%, rgba(173, 198, 255, 0.05) 50%);
          background-size: 100% 4px;
        }
      `}</style>
    </div>
  );
};

const NavItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-6 py-3 cursor-pointer transition-all border-l-2 ${
    active 
    ? 'bg-[#03b5d3]/20 text-[#4cd7f6] border-[#4cd7f6] font-bold' 
    : 'text-[#c2c6d6] border-transparent hover:text-[#e1e2ec] hover:bg-white/5'
  }`}>
    <div className={active ? 'scale-110' : ''}>{icon}</div>
    <span className="text-[11px] font-bold uppercase tracking-widest">{label}</span>
  </div>
);

const TorqueJoint = ({ label, value, status }: any) => (
  <div className="space-y-1.5">
    <div className="flex justify-between items-center text-[11px] font-bold">
      <span className="text-[#c2c6d6] uppercase tracking-widest">{label}</span>
      <span className={status === 'AlertTriangle' ? 'text-[#ffb4ab]' : 'text-[#4cd7f6]'}>{value} Nm</span>
    </div>
    <div className="w-full h-1.5 bg-[#1d2027] rounded-full overflow-hidden">
      <div 
        className={`h-full transition-all duration-1000 ${status === 'AlertTriangle' ? 'bg-[#ffb4ab]' : 'bg-[#4cd7f6]'}`} 
        style={{ width: `${(value / 100) * 100}%` }}
      />
    </div>
  </div>
);

export default SpatialTelemetryDeckEngineeringOS_fb85ba;
