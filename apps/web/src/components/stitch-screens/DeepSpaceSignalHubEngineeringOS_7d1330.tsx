'use client';

import React from 'react';
import {
  Signal,
  Activity,
  Gauge,
  Thermometer,
  Settings,
  Terminal,
  BarChart3,
  TrendingUp,
  Cpu,
  Zap,
  Layers,
  Play,
  Info,
  AlertTriangle,
  MoveUp,
  Wind,
  Compass,
  Crosshair,
  Map,
  Target,
  Rocket,
  RefreshCcw,
  Radio,
  Database,
  ShieldCheck,
  Share2,
  Camera,
  Clock
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * DeepSpaceSignalHub v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity signal intelligence workspace with real-time Deep Space Network telemetry.
 * Refactored to integrate seamlessly with the sovereign Antigravity OS shell.
 */
const DeepSpaceSignalHubEngineeringOS_7d1330 = () => {
  const { signalState } = useEngineeringStore();
  const { 
    links = [],
    waveform = { strength_dBm: -84.2, noise_rms: 2.1, carrier_GHz: 8.41, offset_Hz: 0.04 },
    encoding = 'QPSK-16',
    redundancy = 0.9999
  } = signalState || {};

  return (
    <div className="flex-1 flex flex-col bg-transparent min-h-0 overflow-hidden">
      
      {/* 1. TOP STATUS BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-3xl flex justify-between items-center z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em]">DSN_NETWORK_HUB_01</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <nav className="hidden md:flex gap-6">
             <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] cursor-pointer">SIGNAL_MAP</span>
             <span className="text-[10px] font-black text-white/20 hover:text-white/40 uppercase tracking-[0.2em] cursor-pointer transition-colors">TELEMETRY_ARCHIVE</span>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-widest">GPU: 94% | SIM: ACTIVE</span>
          </div>
          <Settings className="w-4 h-4 text-white/20 hover:text-blue-400 transition-colors cursor-pointer" />
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden p-8 gap-8">
        
        {/* 2. SIGNAL DASHBOARD (Left) */}
        <div className="flex-1 flex flex-col gap-8 min-h-0">
           
           {/* Latency Summary */}
           <section className="bg-black/40 border border-white/5 rounded-[40px] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">LINK_LATENCY_SUMMARY</span>
                 <Share2 className="w-3 h-3 text-white/20" />
              </div>
              <div className="p-8 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
                 {links.map((link) => (
                    <div key={link.id} className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-all group">
                       <div className="flex flex-col gap-1">
                          <span className="text-[12px] font-black text-white group-hover:text-blue-400 transition-colors tracking-widest">{link.name}</span>
                          <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">{link.network}</span>
                       </div>
                       <div className="flex flex-col items-end gap-2">
                          <span className="text-[18px] font-mono font-black text-white tracking-tighter">{link.latency}</span>
                          <div className="flex items-center gap-2">
                             <div className={`w-1.5 h-1.5 rounded-full ${link.status === 'STABLE' ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]' : link.status === 'FAILED' ? 'bg-rose-500' : 'bg-amber-500'}`} />
                             <span className={`text-[9px] font-black uppercase tracking-widest ${link.status === 'STABLE' ? 'text-emerald-400' : link.status === 'FAILED' ? 'text-rose-400' : 'text-amber-400'}`}>{link.status}</span>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </section>

           {/* Waveform Analysis */}
           <section className="flex-1 bg-black/40 border border-white/5 rounded-[40px] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SIGNAL_WAVEFORM_ANALYSIS</span>
                 <div className="flex gap-4">
                    <span className="text-[9px] font-mono text-blue-400 font-bold uppercase tracking-widest">B_WIDTH: 2.4 GBPS</span>
                 </div>
              </div>
              <div className="flex-1 p-8 flex flex-col gap-8">
                 <div className="flex-1 bg-black/60 border border-white/5 rounded-[32px] relative overflow-hidden group">
                    <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
                       <path 
                         d={`M0 100 Q10 ${100 + 40 * Math.sin(Date.now() / 100)} 20 100 T40 100 T60 100 T80 100 T100 100 T120 50 T140 150 T160 100 T180 100 T200 80 T220 120 T240 100 T260 100 T280 100 T300 100 T320 30 T340 170 T360 100 T380 100 T400 100 T420 100 T440 90 T460 110 T480 100 T500 100 T520 100 T540 20 T560 180 T580 100 T600 100 T620 100 T640 100 T660 60 T680 140 T700 100 T720 100 T740 100 T760 100 T780 100 T800 100`} 
                         fill="none" 
                         stroke="#60a5fa" 
                         strokeWidth="1.5"
                         className="drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
                       />
                    </svg>
                    <div className="absolute top-6 left-8 flex gap-8">
                       <div className="flex flex-col">
                          <span className="text-[9px] text-white/20 font-black uppercase tracking-widest">SIGNAL_STRENGTH</span>
                          <span className="text-[16px] font-mono font-black text-blue-400">{waveform.strength_dBm.toFixed(1)} dBm</span>
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[9px] text-white/20 font-black uppercase tracking-widest">INTERFERENCE_NOISE</span>
                          <span className="text-[16px] font-mono font-black text-amber-400">{waveform.noise_rms.toFixed(2)}% RMS</span>
                       </div>
                    </div>
                 </div>
                 <div className="grid grid-cols-4 gap-4">
                    <LegendCard label="CARRIER" value={`${waveform.carrier_GHz} GHz`} color="blue" />
                    <LegendCard label="OFFSET" value={`${waveform.offset_Hz > 0 ? '+' : ''}${waveform.offset_Hz.toFixed(3)} Hz`} color="amber" />
                    <LegendCard label="ENCODING" value={encoding} color="emerald" />
                    <LegendCard label="REDUNDANCY" value={`${(redundancy * 100).toFixed(2)}%`} color="white" />
                 </div>
              </div>
           </section>
        </div>

        {/* 3. MISSION CONTROL (Right) */}
        <div className="w-full lg:w-[480px] flex flex-col gap-8">
           
           {/* Terminal Uplink */}
           <section className="flex-1 bg-black/40 border border-white/5 rounded-[40px] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">COMMAND_UPLINK_QUEUE</span>
                 <Database className="w-3 h-3 text-white/20" />
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
                 <table className="w-full text-left">
                    <thead className="text-[9px] font-black text-white/20 uppercase tracking-widest">
                       <tr>
                          <th className="p-4">UID</th>
                          <th className="p-4">ACTION</th>
                          <th className="p-4">STATUS</th>
                       </tr>
                    </thead>
                    <tbody className="text-[11px] font-mono">
                       <QueueRow id="#CX-9821" action="THRUST_VEC_ADJ" status="PENDING" color="blue" />
                       <QueueRow id="#CX-9820" action="LIDAR_RECAL" status="PENDING" color="blue" />
                       <QueueRow id="#CX-9799" action="PWR_HIBERNATE" status="EXECUTED" color="emerald" />
                       <QueueRow id="#CX-9798" action="BURST_TRANS" status="EXECUTED" color="emerald" />
                    </tbody>
                 </table>
              </div>
              <div className="p-6 bg-white/[0.01] border-t border-white/5 flex gap-4">
                 <button className="flex-1 py-4 bg-blue-500 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-blue-400 transition-all active:scale-[0.98] shadow-2xl shadow-blue-500/20">MANUAL_OVERRIDE</button>
                 <button className="px-6 py-4 border border-white/5 bg-white/[0.02] text-white/40 font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-white/5 transition-all">LOGS</button>
              </div>
           </section>

           {/* Live Feed */}
           <section className="h-[420px] bg-black/40 border border-white/5 rounded-[40px] backdrop-blur-3xl overflow-hidden flex flex-col shadow-2xl">
              <div className="h-10 px-8 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">LIVE_VISUAL_TELEMETRY</span>
                 <Camera className="w-3 h-3 text-white/20" />
              </div>
              <div className="p-8 flex flex-col gap-6 overflow-hidden">
                 <div className="relative h-48 rounded-[32px] overflow-hidden border border-white/5 group">
                    <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuA4P8LdkMOSjPekb6M4y5HXE3RXWpLJg1zc2tJw7ja-5pOEHsrvII_P4oQ038mF-K65RbKmZNW2kWu4QMOWMbu_pPNSeI85c1It54CdraJGOkbNiEGLjS1TBrr27e2Z7FRuJzVtxWEx9gt-6-5-RIkxP-1dfl8H_p95BXX_s7QeePO_tSg9Ij6M8L7rWqpZmUMpgfraIhxS41iEs24XaO7l5czTtJUKD8sG3wTPCv7V8i1rF7OfeBfPBMVr24ik8cVS0zqHD2epVaw6" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                       <span className="text-[10px] font-black text-white uppercase tracking-widest">LOC: MARS_QUAD_7</span>
                       <span className="text-[9px] font-mono text-emerald-400 animate-pulse">SYNCING_VISUAL_ARRAY...</span>
                    </div>
                 </div>
                 <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-[32px] p-6 overflow-y-auto custom-scrollbar space-y-3">
                    <EventLog time="14:02" type="WARN" msg="Ionospheric interference B2." color="amber" />
                    <EventLog time="14:05" type="INFO" msg="Burst received Neptune_V." color="blue" />
                    <EventLog time="14:10" type="SYS" msg="Phase array recal complete." color="emerald" />
                    <EventLog time="14:12" type="AI" msg="Signal degradation predicted." color="blue" />
                    <EventLog time="14:15" type="CRIT" msg="DSN_3 handshake failed." color="rose" />
                 </div>
              </div>
           </section>
        </div>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>
    </div>
  );
};

const LegendCard = ({ label, value, color }: any) => {
  const colors: any = {
    blue: 'border-blue-500/20 text-blue-400',
    amber: 'border-amber-500/20 text-amber-400',
    emerald: 'border-emerald-500/20 text-emerald-400',
    white: 'border-white/10 text-white/60',
  };
  return (
    <div className={`p-4 bg-white/[0.02] border rounded-2xl flex flex-col gap-1 ${colors[color]}`}>
      <span className="text-[8px] font-black uppercase tracking-widest opacity-40">{label}</span>
      <span className="text-[12px] font-mono font-black">{value}</span>
    </div>
  );
};

const QueueRow = ({ id, action, status, color }: any) => (
  <tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-all">
    <td className="p-4 text-blue-400/60">{id}</td>
    <td className="p-4 text-white font-black tracking-widest">{action}</td>
    <td className="p-4">
      <span className={`text-[9px] font-black px-3 py-1 rounded-full border border-${color}-500/20 bg-${color}-500/10 text-${color}-400`}>
        {status}
      </span>
    </td>
  </tr>
);

const EventLog = ({ time, type, msg, color }: any) => {
  const colors: any = {
    blue: 'text-blue-400',
    amber: 'text-amber-400',
    emerald: 'text-emerald-400',
    rose: 'text-rose-400',
  };
  return (
    <div className="flex gap-4 text-[10px] font-mono leading-relaxed">
      <span className="text-white/20">[{time}]</span>
      <span className={`${colors[color]} font-black`}>{type}:</span>
      <span className="text-white/60">{msg}</span>
    </div>
  );
};

export default DeepSpaceSignalHubEngineeringOS_7d1330;
