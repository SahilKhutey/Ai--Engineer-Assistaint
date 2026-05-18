'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  Cpu,
  Zap,
  Activity,
  ShieldCheck,
  Network,
  Globe,
  Settings2,
  Box,
  ChevronRight,
  Loader2,
  Power,
  LayoutGrid,
  Waves,
  Binary,
  Cog
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * SystemInitializationEngineeringOS_ddb640 (Phase 58 Hardened)
 * 
 * High-fidelity system bootloader and initialization environment.
 * Features holographic rotating HUDs, real-time kernel log streaming, and hardware telemetry.
 * Integrated with osStatus for real-time HardDrive and CPU clustering.
 */
const SystemInitializationEngineeringOS_ddb640 = () => {
  const { osStatus, pushEvent } = useEngineeringStore();
  const [bootProgress, setBootProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const logEndRef = useRef<HTMLDivElement>(null);

  const gpuLoad = ((osStatus?.kernelLoad || 0.94) * 100).toFixed(0);
  const uptime = osStatus?.uptime || '142:08:12:04';

  const bootSequence = [
    "[ 0.000000] Linux version 6.5.0-quantum-Terminal (gcc version 12.3.0)",
    "[ 0.001245] INIT_KERNEL... OK",
    "[ 0.045612] MOUNT_PHYSICS_CORE... LOADED (0.45s)",
    "[ 0.128741] SYNCING_CLUSTER_04... SUCCESS",
    "[ 0.254110] ATTACHING NEURAL_MESH_INTERFACE...",
    "[ 0.312009] ALLOCATING BUFFER: 16384KB...",
    "[ 0.450122] QUANTUM_ENTANGLEMENT_SERVICE: ONLINE",
    "[ 0.587412] CHECKING HARDWARE INTEGRITY...",
    "[ 0.652119] STREAMING TELEMETRY_DATA_PACKETS...",
    "[ 0.721440] VIRTUAL_ENV_STABILITY: 99.998%",
    "[ 0.852101] ORCHESTRATION_KERNEL: READY",
    "[ 0.991204] SYSTEM_READY_FOR_ENGAGEMENT"
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLogs(prev => [...prev, bootSequence[currentLine]]);
        setBootProgress(((currentLine + 1) / bootSequence.length) * 100);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f14] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-[#adc6ff]/30">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(#202B3C 1px, transparent 1px), linear-gradient(90deg, #202B3C 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute inset-0 scanline pointer-events-none opacity-10" />

      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-[#202b3c] bg-[#10131a]/70 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-[#adc6ff]" />
          <h1 className="text-[14px] font-bold text-[#adc6ff] tracking-[0.2em] uppercase leading-none">QUANTUM_COMMAND_OS_v2.0.4</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_8px_#4cd7f6]" />
            <span className="text-[10px] font-mono font-bold text-[#adc6ff] tracking-widest uppercase">CORE_TEMP: 34.2°C</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings2 className="w-3.5 h-3.5 text-[#8c909f]" />
            <span className="text-[10px] font-mono font-bold text-[#adc6ff] tracking-widest uppercase">UPLINK: ACTIVE</span>
          </div>
        </div>
      </header>

      {/* 2. MAIN INITIALIZATION CANVAS */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        
        {/* Central Holographic Unit */}
        <div className="relative flex flex-col items-center">
          
          {/* Progress Rings */}
          <div className="relative w-80 h-80 md:w-[480px] md:h-[480px] flex items-center justify-center">
            {/* Rotating Rings */}
            <div className="absolute inset-0 border-2 border-dashed border-[#adc6ff]/10 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-10 border border-[#4cd7f6]/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute inset-20 border-2 border-dotted border-[#adc6ff]/10 rounded-full animate-[spin_60s_linear_infinite]" />
            
            {/* Inner Core */}
            <div className="z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#10131a]/80 backdrop-blur-3xl border border-[#202b3c] shadow-[0_0_100px_rgba(173,198,255,0.1)] flex flex-col items-center justify-center text-center p-8 group">
              <div className="w-24 h-24 mb-6 rounded-2xl bg-[#adc6ff]/10 border border-[#adc6ff]/30 flex items-center justify-center text-[#adc6ff] group-hover:scale-110 transition-transform duration-500">
                <Cog className="w-12 h-12 animate-[spin_10s_linear_infinite]" />
              </div>
              <h2 className="text-[28px] font-bold text-[#e1e2ec] tracking-tighter leading-none mb-2">ANTIGRAVITY_OS</h2>
              <div className="flex items-center gap-2 font-mono text-[11px] text-[#4cd7f6] uppercase tracking-widest">
                <Loader2 className="w-3 h-3 animate-spin" />
                INITIALIZING_SYSTEM...
              </div>
              {/* Progress Bar under logo */}
              <div className="w-full h-1 bg-[#202b3c] mt-6 rounded-full overflow-hidden">
                <div className="h-full bg-[#4cd7f6] shadow-[0_0_10px_#4cd7f6] transition-all duration-1000" style={{ width: `${bootProgress}%` }} />
              </div>
            </div>

            {/* Scanning Radio Bar */}
            <div className="absolute top-0 left-1/2 w-0.5 h-1/2 bg-gradient-to-b from-[#4cd7f6] to-transparent origin-bottom animate-[spin_4s_linear_infinite]" />
          </div>

          {/* Terminal Log Window */}
          <section className="mt-12 w-full max-w-3xl bg-[#1d2027]/80 backdrop-blur-xl border border-[#202b3c] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            <header className="h-10 px-6 bg-[#272a31] border-b border-[#202b3c] flex items-center justify-between">
              <span className="text-[10px] font-bold text-[#adc6ff] uppercase tracking-[0.2em] flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                BOOT_SEQUENCE_LOG
              </span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#424754]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#424754]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#424754]" />
              </div>
            </header>
            <div className="h-56 p-6 font-mono text-[11px] overflow-y-auto custom-scrollbar bg-[#0b0e15]/60">
              {logs.map((log, i) => (
                <div key={i} className="flex gap-4 mb-1 animate-in fade-in slide-in-from-left-2 duration-300">
                  <span className="text-[#8c909f] shrink-0">{log.split(']')[0]}]</span>
                  <span className={`${log.includes('OK') || log.includes('SUCCESS') ? 'text-[#4cd7f6]' : 'text-[#e1e2ec]'}`}>
                    {log.split(']')[1]}
                  </span>
                </div>
              ))}
              <div ref={logEndRef} />
              {bootProgress < 100 && (
                <div className="flex items-center gap-2 text-[#4cd7f6] animate-pulse mt-2">
                  <ChevronRight className="w-3 h-3" />
                  <span>EXECUTING_MODULE_SYNC...</span>
                </div>
              )}
            </div>
          </section>
        </div>

      </main>

      {/* 3. BOTTOM TECHNICAL FOOTER */}
      <footer className="h-24 bg-[#10131a]/90 backdrop-blur-2xl border-t border-[#202b3c] px-12 flex items-center z-50">
        <div className="grid grid-cols-4 gap-12 w-full">
          
          <FooterMetric 
            label="MEMORY_UTIL" 
            value="12.4GB / 64GB" 
            percent={19} 
            color="bg-[#adc6ff]" 
            subValue="ECC_ENABLED // SWAP: 0.0%" 
          />

          <div className="flex flex-col gap-2">
            <header className="flex justify-between items-center text-[10px] font-bold text-[#8c909f] uppercase tracking-widest">
              <span>CPU_THREAD_LOAD</span>
              <span className="text-[#4cd7f6]">42%</span>
            </header>
            <div className="flex gap-1 h-2">
              {[1, 1, 1, 1, 0, 0, 0, 0].map((v, i) => (
                <div key={i} className={`flex-1 rounded-sm ${v ? 'bg-[#4cd7f6]' : 'bg-[#202b3c]'} ${v ? 'opacity-' + (100 - i * 10) : ''}`} />
              ))}
            </div>
            <span className="text-[9px] font-mono text-[#8c909f] uppercase">AVG_FREQ: 4.85GHz</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-[#8c909f] uppercase tracking-widest mb-1">ACTIVE_NODES</span>
            <div className="flex gap-2">
              {[1, 1, 1, 0, 0, 0].map((v, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${v ? 'bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6]' : 'bg-[#202b3c]'}`} />
              ))}
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-[#8c909f] uppercase">
              <span>LATENCY: 4ms</span>
              <span className="text-[#adc6ff]">SYNC_OK</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-[#8c909f] uppercase tracking-widest mb-1">STABILITY_VECTOR</span>
            <div className="h-8 w-full border-b border-l border-[#202b3c] flex items-end px-1 pb-1 relative">
              <svg className="w-full h-full" viewBox="0 0 100 20">
                <polyline 
                  fill="none" 
                  points="0,15 10,12 20,18 30,5 40,8 50,2 60,10 70,5 80,12 90,8 100,10" 
                  stroke="#adc6ff" 
                  strokeWidth="1.5" 
                  className="animate-[dash_10s_linear_infinite]"
                />
              </svg>
            </div>
            <span className="text-[9px] font-mono text-[#8c909f] uppercase">VAR: 0.0024</span>
          </div>

        </div>
      </footer>

      {/* Floating Decorative Elements */}
      <div className="fixed top-1/4 left-12 w-48 p-4 border-l-2 border-[#adc6ff]/30 pointer-events-none space-y-2">
        <span className="text-[9px] font-bold text-[#adc6ff] uppercase tracking-widest block opacity-60">DATA_STREAM_A</span>
        <div className="font-mono text-[10px] text-[#adc6ff] leading-tight opacity-40">
          0x45FF82<br/>0x9912BA<br/>0x12CC01<br/>0x889FA2
        </div>
      </div>

      <style jsx>{`
        .scanline {
          background: linear-gradient(to bottom, transparent 50%, rgba(173, 198, 255, 0.05) 50%);
          background-size: 100% 4px;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #32353c; border-radius: 10px; }
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
      `}</style>
    </div>
  );
};

const FooterMetric = ({ label, value, percent, color, subValue }: any) => (
  <div className="flex flex-col gap-2">
    <header className="flex justify-between items-center text-[10px] font-bold text-[#8c909f] uppercase tracking-widest">
      <span>{label}</span>
      <span className="text-[#e1e2ec] font-mono">{value}</span>
    </header>
    <div className="h-2 w-full bg-[#202b3c] rounded-full overflow-hidden border border-[#202b3c]">
      <div className={`h-full ${color} transition-all duration-1000 shadow-[0_0_8px_currentcolor]`} style={{ width: `${percent}%` }} />
    </div>
    <span className="text-[9px] font-mono text-[#8c909f] uppercase">{subValue}</span>
  </div>
);

export default SystemInitializationEngineeringOS_ddb640;
