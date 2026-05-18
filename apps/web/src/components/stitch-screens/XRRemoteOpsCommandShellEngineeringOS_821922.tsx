'use client';

import React, { useState } from 'react';
import {
  Terminal,
  ShieldAlert,
  Cpu,
  Activity,
  Zap,
  Radio,
  Mic,
  Camera,
  Settings2,
  Eye,
  Hand,
  Power,
  ChevronRight,
  Fingerprint,
  Network
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * XRRemoteOpsCommandShellEngineeringOS_821922 (Phase 58 Hardened)
 * 
 * Mission-critical XR Terminal shell for remote robotic operations.
 * Features real-time neural bridge telemetry, haptic impulse control, and emergency halt orchestration.
 */
const XRRemoteOpsCommandShellEngineeringOS_821922 = () => {
  const { osStatus, pushEvent } = useEngineeringStore();
  const [palmSensitivity, setPalmSensitivity] = useState(85);
  const [fingertipImpulse, setFingertipImpulse] = useState(40);
  const [kinestheticForce, setKinestheticForce] = useState(62);

  const isSimActive = (osStatus as any)?.status === 'ACTIVE';

  const handleEmergencyHalt = () => {
    pushEvent?.('EMERGENCY_HALT', { 
      source: 'XR_COMMAND_SHELL', 
      timestamp: Date.now(),
      priority: 'CRITICAL'
    });
    alert('CRITICAL: EMERGENCY HALT INITIATED');
  };

  const handleHapticChange = (type: string, val: number) => {
    if (type === 'palm') setPalmSensitivity(val);
    if (type === 'finger') setFingertipImpulse(val);
    if (type === 'force') setKinestheticForce(val);
    
    pushEvent?.('HAPTIC_ADJUST', { type, value: val, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-black text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-[#4cd7f6]/30">
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-[#424754]/50 bg-[#10131a]/70 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-3">
          <Network className="w-5 h-5 text-[#adc6ff]" />
          <h1 className="text-[18px] font-bold text-[#adc6ff] tracking-tighter leading-none">ANTIGRAVITY_OS</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#1d2027] border border-[#424754] rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_8px_#4cd7f6]" />
            <span className="text-[10px] font-mono font-bold text-[#adc6ff] tracking-widest uppercase">
              UPLINK: ACTIVE | LATENCY: 4.2ms
            </span>
          </div>
        </div>
      </header>

      {/* 2. MAIN CANVAS AREA */}
      <main className="flex-1 relative overflow-hidden flex flex-col">
        
        {/* Background Visualizer (Simulated Camera Feed) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 grayscale brightness-50"
            alt="Robotic Telemetry Feed"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />
          <div className="absolute inset-0 scanline pointer-events-none opacity-[0.03]" />
          
          {/* Circular HUD Reticle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[500px] h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 border border-[#4cd7f6]/10 rounded-full animate-pulse" />
              <div className="absolute inset-8 border border-[#4cd7f6]/5 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-16 border border-[#4cd7f6]/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            </div>
          </div>
        </div>

        {/* Floating Interface Overlays */}
        <div className="relative z-10 flex-1 grid grid-cols-12 gap-6 p-8 content-start h-full overflow-hidden">
          
          {/* Floating Terminal Window */}
          <div className="col-span-12 lg:col-span-4 bg-[#1a2330]/80 backdrop-blur-xl border border-[#202B3C] rounded-2xl flex flex-col shadow-2xl overflow-hidden h-[400px]">
            <div className="h-8 bg-[#1d2027]/50 flex items-center justify-between px-4 border-b border-[#424754]">
              <span className="text-[10px] font-bold text-[#adc6ff] uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-3 h-3" />
                TERMINAL.SHELL - REMOTE_ACCESS
              </span>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#424754]" />
                <div className="w-2 h-2 rounded-full bg-[#424754]" />
              </div>
            </div>
            <div className="flex-1 p-4 font-mono text-[11px] text-[#4cd7f6] overflow-y-auto space-y-2 custom-scrollbar bg-black/40">
              <p className="text-[#8c909f] opacity-50"># Establishing encrypted link to RX-700...</p>
              <p className="text-[#adc6ff] font-bold">&gt; link --Hand-tracking --haptic=85%</p>
              <p className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3" />
                [OK] Neural Bridge established.
              </p>
              <p className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3" />
                [OK] Calibration: Vector Alpha-9
              </p>
              
              <div className="mt-6 space-y-3">
                <p className="text-[#8c909f] text-[9px] font-bold uppercase tracking-widest border-b border-[#424754] pb-1">Live Telemetry Stream</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-[#adc6ff] pl-3 py-1 bg-[#adc6ff]/5 rounded-r">
                    <p className="text-[9px] text-[#8c909f] uppercase font-bold tracking-widest mb-1">Wrist_Rotate</p>
                    <p className="text-[16px] font-bold text-[#e1e2ec] tabular-nums">142.42°</p>
                  </div>
                  <div className="border-l-2 border-[#4cd7f6] pl-3 py-1 bg-[#4cd7f6]/5 rounded-r">
                    <p className="text-[9px] text-[#8c909f] uppercase font-bold tracking-widest mb-1">Grip_Force</p>
                    <p className="text-[16px] font-bold text-[#e1e2ec] tabular-nums">14.8N</p>
                  </div>
                </div>
              </div>
              <p className="animate-pulse mt-4">_</p>
            </div>
          </div>

          {/* Tracking & Control Stack */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
            
            {/* Tracking Status */}
            <div className="bg-[#1a2330]/80 backdrop-blur-xl border border-[#202B3C] rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[11px] font-bold text-[#adc6ff] uppercase tracking-widest flex items-center gap-2">
                  <Hand className="w-4 h-4" />
                  HAND_TRACKING
                </h3>
                <span className="px-2 py-0.5 bg-[#4cd7f6]/10 text-[#4cd7f6] text-[10px] font-bold rounded border border-[#4cd7f6]/20 animate-pulse">LIVE</span>
              </div>
              <div className="space-y-4">
                <StatusRow label="Confidence" value="99.8%" color="text-[#4cd7f6]" />
                <StatusRow label="Active Segments" value="24/24" color="text-[#4cd7f6]" />
                <StatusRow label="Gesture Lock" value="PRECISION" color="text-[#4cd7f6]" />
              </div>
            </div>

            {/* Haptics Controller */}
            <div className="bg-[#1a2330]/80 backdrop-blur-xl border border-[#202B3C] rounded-2xl p-6 shadow-2xl">
              <h3 className="text-[11px] font-bold text-[#adc6ff] uppercase tracking-widest flex items-center gap-2 mb-8">
                <Fingerprint className="w-4 h-4" />
                HAPTIC_FEEDBACK
              </h3>
              <div className="space-y-8">
                <HapticSlider label="Palm Sensitivity" value={palmSensitivity} onChange={(v: number) => handleHapticChange('palm', v)} />
                <HapticSlider label="Fingertip Impulse" value={fingertipImpulse} onChange={(v: number) => handleHapticChange('finger', v)} />
                <HapticSlider label="Kinesthetic Force" value={kinestheticForce} onChange={(v: number) => handleHapticChange('force', v)} />
              </div>
              <button className="w-full mt-10 py-3 bg-[#adc6ff]/10 border border-[#adc6ff]/30 text-[#adc6ff] font-bold text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-[#adc6ff]/20 active:scale-95 transition-all shadow-[0_0_20px_rgba(173,198,255,0.1)]">
                RECALIBRATE_SYSTEM
              </button>
            </div>
          </div>

          {/* Interaction Bar & Kill Switch */}
          <div className="col-span-12 mt-auto pb-8 flex items-center justify-center gap-12">
            
            <div className="flex gap-4">
              <RoundButton icon={<Camera className="w-6 h-6" />} active />
              <RoundButton icon={<Mic className="w-6 h-6" />} />
            </div>

            {/* Prominent Kill Switch */}
            <div className="flex flex-col items-center gap-3">
              <button 
                onClick={handleEmergencyHalt}
                className="group relative w-28 h-28 rounded-full border-4 border-[#ffb4ab]/20 p-2 active:scale-90 transition-all cursor-pointer"
              >
                <div className="w-full h-full rounded-full bg-[#93000a] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(147,0,10,0.6)] group-hover:shadow-[0_0_60px_rgba(147,0,10,0.8)] transition-all">
                  <Power className="w-10 h-10 text-white mb-1 fill-white/20" />
                  <span className="text-[10px] text-white font-black tracking-widest uppercase">KILL</span>
                </div>
                {/* Outer Glow Ring */}
                <div className="absolute -inset-2 border border-[#ffb4ab]/10 rounded-full animate-ping opacity-20" />
              </button>
              <span className="text-[10px] font-bold text-[#ffb4ab] uppercase tracking-widest px-3 py-1 bg-[#93000a]/20 rounded-lg border border-[#93000a]/30">EMERGENCY_HALT</span>
            </div>

            <div className="flex gap-4">
              <RoundButton icon={<Settings2 className="w-6 h-6" />} />
              <RoundButton icon={<Eye className="w-6 h-6" />} />
            </div>

          </div>

        </div>

      </main>

      <style jsx>{`
        .scanline {
          background: linear-gradient(to bottom, transparent 50%, rgba(173, 198, 255, 0.05) 50%);
          background-size: 100% 4px;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #424754; border-radius: 10px; }
      `}</style>
    </div>
  );
};

const StatusRow = ({ label, value, color }: any) => (
  <div className="flex justify-between items-end border-b border-[#424754]/30 pb-2 group">
    <span className="text-[11px] font-bold text-[#8c909f] uppercase tracking-widest group-hover:text-[#adc6ff] transition-colors">{label}</span>
    <span className={`font-mono text-[16px] font-bold ${color} tracking-tighter`}>{value}</span>
  </div>
);

const HapticSlider = ({ label, value, onChange }: any) => (
  <div className="space-y-3 group">
    <div className="flex justify-between items-center">
      <span className="text-[10px] font-bold text-[#8c909f] uppercase tracking-widest group-hover:text-[#adc6ff] transition-colors">{label}</span>
      <span className="text-[12px] font-mono font-bold text-[#4cd7f6]">{value}%</span>
    </div>
    <input 
      type="range" 
      min="0" max="100" 
      value={value} 
      onChange={(e) => onChange(parseInt(e.target.value))}
      className="w-full h-1 bg-[#32353c] rounded-lg appearance-none cursor-pointer accent-[#4cd7f6] hover:accent-[#adc6ff] transition-all"
    />
  </div>
);

const RoundButton = ({ icon, active }: any) => (
  <button className={`w-14 h-14 rounded-full flex items-center justify-center transition-all border ${
    active 
    ? 'bg-[#4cd7f6]/20 border-[#4cd7f6] text-[#4cd7f6] shadow-[0_0_20px_rgba(76,215,246,0.3)]' 
    : 'bg-[#1a2330]/80 border-[#202B3C] text-[#adc6ff] hover:bg-[#adc6ff]/10 hover:border-[#adc6ff]/50'
  } active:scale-90`}>
    {icon}
  </button>
);

export default XRRemoteOpsCommandShellEngineeringOS_821922;
