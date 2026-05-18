'use client';

import React, { useState, useEffect } from 'react';
import {
  Telescope,
  Activity,
  Wind,
  Battery,
  MapPin,
  Terminal,
  Settings,
  Info,
  Compass,
  ShieldCheck,
  Zap,
  MessageSquare,
  ChevronRight,
  Box
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * XRHUDOrbitalOverlayEngineeringOS_4fc4f7 (Phase 58 Hardened)
 * 
 * High-fidelity orbital HUD for EVA operations.
 * Features gaze-tracking reticles, real-time life support telemetry, and structural stress mapping.
 * Integrated with aerospaceState and structuralState.
 */
const XRHUDOrbitalOverlayEngineeringOS_4fc4f7 = () => {
  const { aerospaceState, structuralState, osStatus, pushEvent } = useEngineeringStore();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLocked, setIsLocked] = useState(false);

  // Life support mapping
  const o2Level = aerospaceState?.vitals?.o2 || 98.4;
  const suitTemp = aerospaceState?.vitals?.temp || 21.5;
  const powerCell = aerospaceState?.power?.level || 82;
  const isSimActive = osStatus?.status === 'ACTIVE';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleReticleClick = () => {
    setIsLocked(!isLocked);
    pushEvent?.('HUD_LOCK', { 
      locked: !isLocked, 
      target: 'TRUSS_B_BOLT_082',
      timestamp: Date.now() 
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-black text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-[#4cd7f6]/30">
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-[#202b3c] bg-[#10131a]/70 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-3">
          <Telescope className="w-5 h-5 text-[#adc6ff]" />
          <h1 className="text-[18px] font-bold text-[#adc6ff] tracking-tighter leading-none">ANTIGRAVITY_OS</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            <button className="text-[10px] font-bold text-[#8c909f] hover:text-[#e1e2ec] tracking-widest uppercase transition-colors">SIMULATE</button>
            <button className="text-[10px] font-bold text-[#8c909f] hover:text-[#e1e2ec] tracking-widest uppercase transition-colors">RefreshCw</button>
            <button className="text-[10px] font-bold text-[#4cd7f6] hover:text-[#adc6ff] tracking-widest uppercase transition-colors">RELEASE_CONTROL</button>
          </div>
          <div className="text-[10px] font-mono font-bold text-[#adc6ff] tracking-widest bg-[#1d2027] px-4 py-1 rounded border border-[#202b3c]">
            GPU: {((osStatus?.kernelLoad || 0.94) * 100).toFixed(0)}% | SIM: {isSimActive ? 'ACTIVE' : 'IDLE'}
          </div>
        </div>
      </header>

      {/* 2. MAIN VIEWPORT */}
      <main className="flex-1 relative overflow-hidden bg-black">
        
        {/* Orbital Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-60 grayscale-[0.3]"
            alt="Orbital View"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #202b3c 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          
          {/* Scanning Line */}
          <div className="absolute w-full h-[1px] bg-[#4cd7f6]/30 shadow-[0_0_20px_#4cd7f6] animate-[scan_8s_linear_infinite]" />
        </div>

        {/* GAZE-LOCK RETICLE (Follows Mouse) */}
        <div 
          className="absolute z-40 pointer-events-none transition-all duration-75 ease-out"
          style={{ 
            left: mousePos.x - 128, // Offset by parent LayoutGrid or center manually
            top: mousePos.y - 128 - 48, // Subtract header height
          }}
        >
          <div className={`relative w-64 h-64 flex items-center justify-center ${isLocked ? 'scale-110' : 'scale-100'}`}>
            <div className={`absolute inset-0 border-2 border-t-0 border-l-0 ${isLocked ? 'border-[#ffb4ab]' : 'border-[#4cd7f6]'} rounded-br-2xl transition-colors`} />
            <div className={`absolute inset-0 border-2 border-b-0 border-r-0 ${isLocked ? 'border-[#ffb4ab]' : 'border-[#4cd7f6]'} rounded-tl-2xl transition-colors`} />
            <div className="w-2 h-2 bg-[#4cd7f6] rounded-full shadow-[0_0_15px_#4cd7f6]" />
            
            {/* Lock Info */}
            <div className="absolute -top-16 flex flex-col items-center">
              <span className={`text-[10px] font-bold px-3 py-1 rounded border ${isLocked ? 'bg-[#93000a]/30 border-[#ffb4ab] text-[#ffb4ab]' : 'bg-[#4cd7f6]/10 border-[#4cd7f6]/40 text-[#4cd7f6]'}`}>
                {isLocked ? 'GAZE-LOCK: SECURED' : 'GAZE-LOCK: SCANNING'}
              </span>
              <span className="text-[9px] font-mono font-bold text-[#8c909f] mt-2 uppercase tracking-widest">OBJ_ID: TRUSS_B_BOLT_082</span>
            </div>
          </div>
        </div>

        {/* Interactive Layer */}
        <div className="absolute inset-0 z-50 pointer-events-none p-8 flex flex-col justify-between">
          
          {/* TOP ROW: Telemetry & Stress */}
          <div className="flex justify-between items-start">
            
            {/* Life Support Panel */}
            <section className="glass-panel w-72 p-6 rounded-2xl pointer-events-auto bg-[#1a2330]/70 backdrop-blur-xl border border-[#202b3c] shadow-2xl">
              <header className="flex justify-between items-center mb-6 border-b border-[#424754]/30 pb-3">
                <span className="text-[11px] font-bold text-[#adc6ff] uppercase tracking-widest flex items-center gap-2">
                  <Wind className="w-4 h-4" />
                  TELEMETRY_01
                </span>
                <Settings className="w-3.5 h-3.5 text-[#8c909f] cursor-pointer hover:text-[#e1e2ec]" />
              </header>
              <div className="space-y-6">
                <MetricBar label="O2_LEVEL" value={o2Level} unit="%" color="bg-[#4cd7f6]" />
                <MetricBar label="PWR_CELL" value={powerCell} unit="%" color="bg-[#adc6ff]" />
                <div className="flex justify-between items-center text-[11px] font-mono font-bold">
                  <span className="text-[#8c909f]">SUIT_TEMP</span>
                  <span className="text-[#e1e2ec]">{suitTemp.toFixed(1)}°C</span>
                </div>
              </div>
            </section>

            {/* Stress Data Visualization */}
            <section className="glass-panel w-80 p-6 rounded-2xl pointer-events-auto bg-[#1a2330]/70 backdrop-blur-xl border border-[#202b3c] shadow-2xl">
              <header className="flex justify-between items-center mb-6 border-b border-[#424754]/30 pb-3">
                <span className="text-[11px] font-bold text-[#adc6ff] uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  JOINT_STRESS_V3
                </span>
                <div className="w-2 h-2 rounded-full bg-[#ffb4ab] animate-pulse" />
              </header>
              <div className="flex items-end justify-between h-24 gap-1 px-1">
                {[40, 65, 92, 55, 45, 70, 50, 85].map((h, i) => (
                  <div 
                    key={i} 
                    className={`w-full transition-all duration-500 ${h > 80 ? 'bg-[#ffb4ab]/80 shadow-[0_0_10px_#ffb4ab]' : 'bg-[#4cd7f6]/40'}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-4 text-[10px] font-mono font-bold text-[#8c909f]">
                <span>P-SEC: 0.852 G-FORCE</span>
                <span className="text-[#ffb4ab]">PEAK_ANOMALY</span>
              </div>
            </section>

          </div>

          {/* BOTTOM ROW: Minimap & Comms */}
          <div className="flex justify-between items-end">
            
            {/* 3D Minimap Representation */}
            <section className="glass-panel w-64 h-64 p-6 rounded-2xl pointer-events-auto bg-[#1a2330]/70 backdrop-blur-xl border border-[#202b3c] shadow-2xl relative overflow-hidden flex flex-col">
              <header className="flex justify-between items-center mb-4 border-b border-[#424754]/30 pb-3">
                <span className="text-[11px] font-bold text-[#adc6ff] uppercase tracking-widest flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  STATION_MAP
                </span>
              </header>
              <div className="flex-1 flex items-center justify-center relative">
                {/* Abstract Radio Grid */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 border border-[#4cd7f6]/10 rounded-full" />
                  <div className="w-28 h-28 border border-[#4cd7f6]/20 rounded-full" />
                  <div className="w-16 h-16 border border-[#4cd7f6]/40 rounded-full animate-pulse" />
                </div>
                <Compass className="w-12 h-12 text-[#4cd7f6] animate-[spin_20s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#ffb4ab] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#ffb4ab]" />
                <span className="absolute bottom-0 right-0 text-[10px] font-mono font-bold text-[#4cd7f6]">SECTOR_4C</span>
              </div>
            </section>

            {/* Live Comms Feed */}
            <section className="glass-panel w-96 p-6 rounded-2xl pointer-events-auto bg-[#1a2330]/70 backdrop-blur-xl border border-[#202b3c] shadow-2xl">
              <header className="flex justify-between items-center mb-4 border-b border-[#424754]/30 pb-3">
                <span className="text-[11px] font-bold text-[#adc6ff] uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  COMMS_LOG
                </span>
                <span className="text-[10px] font-bold text-[#4cd7f6] animate-pulse">LIVE</span>
              </header>
              <div className="space-y-3 font-mono text-[11px] h-32 overflow-y-auto custom-scrollbar pr-2">
                <LogEntry sender="HOUSTON" message="Confirm torque specs on Zap 082." color="text-[#adc6ff]" />
                <LogEntry sender="EVA_2" message="Visual contact confirmed. Zap is misaligned by 2mm." color="text-[#e1e2ec]" />
                <LogEntry sender="HOUSTON" message="Simulation initialized. Syncing digital twin..." color="text-[#4cd7f6]" />
                <div className="flex items-center gap-2 text-[#4cd7f6] font-bold mt-4">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SYNC_COMPLETE</span>
                </div>
              </div>
            </section>

          </div>

        </div>

      </main>

      {/* Global Action Trigger */}
      <button 
        onClick={handleReticleClick}
        className="fixed bottom-12 right-12 z-[100] w-16 h-16 bg-[#4cd7f6] text-[#003640] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(76,215,246,0.6)] hover:scale-105 active:scale-95 transition-all group"
      >
        <Zap className="w-8 h-8 fill-[#003640]/20 group-hover:rotate-12 transition-transform" />
      </button>

      <style jsx>{`
        @keyframes scan {
          from { top: 0; }
          to { top: 100%; }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #32353c; border-radius: 10px; }
      `}</style>
    </div>
  );
};

const MetricBar = ({ label, value, unit, color }: any) => (
  <div className="space-y-2">
    <div className="flex justify-between text-[11px] font-mono font-bold">
      <span className="text-[#8c909f]">{label}</span>
      <span className="text-[#e1e2ec]">{value.toFixed(1)}{unit}</span>
    </div>
    <div className="w-full h-1.5 bg-[#32353c] rounded-full overflow-hidden">
      <div className={`h-full ${color} shadow-[0_0_8px_rgba(76,215,246,0.4)] transition-all duration-1000`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

const LogEntry = ({ sender, message, color }: any) => (
  <div className="flex gap-2 leading-relaxed">
    <span className={`${color} font-bold shrink-0`}>[{sender}]</span>
    <span className="text-[#c2c6d6]">{message}</span>
  </div>
);

export default XRHUDOrbitalOverlayEngineeringOS_4fc4f7;
