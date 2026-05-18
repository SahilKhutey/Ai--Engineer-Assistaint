'use client';

import React from 'react';
import {
  Radio,
  Settings,
  Activity,
  Brain,
  Network,
  Calendar,
  Clock,
  Bell,
  CheckCircle2,
  Gauge,
  History,
  Terminal
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * SignalAnalytics v4.0 (Phase 55 Hardened)
 * 
 * Mission-critical workspace for system health and signal telemetry BarChart3.
 * Features real-time MTTR tracking, alert density heatmaps, 
 * and Globe-specific resource distribution Activity.
 */
const SignalAnalyticsEngineeringOS_0183c3 = () => {
  const { 
    osStatus, 
    pushEvent, 
    addNotification 
  } = useEngineeringStore();

  const availability = 99.982;
  const mttr = "14m 22s";
  const resourceLoad = osStatus?.kernelLoad ? (osStatus.kernelLoad * 100).toFixed(1) : "78.4";

  const handleDomainSelect = (Globe: string) => {
    pushEvent?.('SIGNAL_DOMAIN_SELECTED', { Globe, timestamp: Date.now() });
    addNotification?.({
      title: 'DOMAIN_FOCUS_ACTIVE',
      message: `Analyzing health metrics for ${Globe}. Fetching historical telemetry...`,
      type: 'INFO',
      domain: 'COMMS'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-14 px-8 border-b border-white/5 bg-black/40 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
           <Radio className="w-5 h-5 text-blue-400" />
           <h1 className="font-mono text-[14px] font-black text-blue-400 uppercase tracking-[0.3em]">SIGNAL_COMMAND // v4.0</h1>
        </div>
        <div className="flex items-center gap-6">
           <div className="flex flex-col items-end">
              <span className="text-[8px] font-black text-white/20 uppercase tracking-widest font-mono">SYSTEM_STATUS</span>
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
                 <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-widest">OPERATIONAL</span>
              </div>
           </div>
           <Settings className="w-5 h-5 text-white/20 hover:text-blue-400 cursor-pointer transition-colors" />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. NAVIGATION DRAWER */}
        <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col p-6 gap-8 shrink-0">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">CORE_DOMAINS</span>
              <nav className="flex flex-col gap-1">
                 <SideNavItem icon={<Activity className="w-4 h-4" />} label="Physics_Stream" onClick={() => handleDomainSelect('PHYSICS')} />
                 <SideNavItem icon={<Brain className="w-4 h-4" />} label="AI_Core" onClick={() => handleDomainSelect('AI_CORE')} />
                 <SideNavItem icon={<Network className="w-4 h-4" />} label="Infra_Grid" onClick={() => handleDomainSelect('INFRA')} />
                 <SideNavItem icon={<Settings className="w-4 h-4" />} label="MFG_Logs" onClick={() => handleDomainSelect('MFG')} />
              </nav>
           </div>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 overflow-y-auto p-8 bg-grid-pattern relative custom-scrollbar space-y-8">
           
           {/* Dashboard Header */}
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
              <div>
                 <span className="text-[10px] font-black text-amber-400 uppercase tracking-[0.4em] font-mono">TELEMETRY_HISTORY</span>
                 <h2 className="text-[32px] font-mono font-black text-white tracking-tighter uppercase">SYSTEM_HEALTH_ANALYTICS</h2>
              </div>
              <div className="bg-white/[0.02] border border-white/5 px-6 py-3 rounded-2xl flex items-center gap-4 backdrop-blur-md">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-widest font-mono">TIMEFRAME:</span>
                 <span className="text-[12px] font-mono font-black text-blue-400">LAST_24_HOURS</span>
                 <Calendar className="w-4 h-4 text-blue-400" />
              </div>
           </div>

           {/* Stats Bento Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard icon={<Clock />} label="MEAN_TIME_TO_RESOLUTION" value={mttr} subValue="-12.4% FROM PREV" trend="down" color="blue" />
              <StatCard icon={<Bell />} label="TOTAL_ALERTS_24H" value="142" subValue="8 CRITICAL / 134 AlertTriangle" color="amber" />
              <StatCard icon={<CheckCircle2 />} label="AVAILABILITY_INDEX" value={`${availability}%`} subValue="STABLE SINCE 0400Z" color="emerald" />
              <StatCard icon={<Gauge />} label="PEAK_RESOURCE_LOAD" value={`${resourceLoad}%`} subValue="BUFFER: 21.6%" color="cyan" />
           </div>

           {/* Visual BarChart3 Section */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Alert Density Chart Panel */}
              <section className="lg:col-span-2 bg-black/40 border border-white/5 rounded-[40px] shadow-2xl backdrop-blur-3xl overflow-hidden">
                 <div className="h-10 px-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">ALERT_DENSITY_24H_HISTORY</span>
                    <div className="flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-white/5" />
                       <div className="w-2 h-2 rounded-full bg-white/5" />
                    </div>
                 </div>
                 <div className="p-10">
                    <div className="flex items-end justify-between h-48 gap-1.5 px-2">
                       {[20, 35, 15, 45, 80, 100, 60, 30, 25, 10, 15, 20, 40, 55, 70, 40, 25, 15, 10, 30, 45, 35, 20, 15].map((h, i) => (
                          <div 
                             key={i} 
                             className={`w-full transition-all duration-500 rounded-t-[4px] cursor-pointer group relative ${h === 100 ? 'bg-rose-500' : 'bg-amber-400/20 hover:bg-amber-400'}`} 
                             style={{ height: `${h}%` }}
                          >
                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-[10px] font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">{h} Alerts</div>
                          </div>
                       ))}
                    </div>
                    <div className="flex justify-between mt-6 text-[10px] font-mono font-black text-white/20 uppercase tracking-widest px-2">
                       <span>00:00</span>
                       <span>06:00</span>
                       <span>12:00</span>
                       <span>18:00</span>
                       <span>23:59</span>
                    </div>
                 </div>
              </section>

              {/* Node Health Summary */}
              <section className="bg-black/40 border border-white/5 rounded-[40px] shadow-2xl backdrop-blur-3xl overflow-hidden flex flex-col p-10 gap-8">
                 <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em]">DOMAIN_DISTRIBUTION</span>
                 <div className="flex-1 flex flex-col justify-center gap-8">
                    <ProgressMetric label="INFRA_GRID" value={42} color="blue" />
                    <ProgressMetric label="AI_CORE" value={28} color="cyan" />
                    <ProgressMetric label="PHYSICS_STREAM" value={18} color="amber" />
                    <ProgressMetric label="MFG_LOGS" value={12} color="white" />
                 </div>
              </section>
           </div>

           {/* Critical Event Log */}
           <section className="bg-black/40 border border-white/5 rounded-[40px] shadow-2xl backdrop-blur-3xl overflow-hidden">
              <div className="h-10 px-8 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <History className="w-4 h-4 text-rose-500" />
                    <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">CRITICAL_EVENT_LOG</span>
                 </div>
                 <span className="text-[10px] font-mono font-black text-white/20 uppercase tracking-widest">AUTO_REFRESH: ACTIVE (5S)</span>
              </div>
              <div className="overflow-x-auto p-6">
                 <table className="w-full text-left">
                    <thead className="border-b border-white/5 text-[10px] font-mono font-black text-white/20 uppercase tracking-widest">
                       <tr>
                          <th className="p-4">TIMESTAMP</th>
                          <th className="p-4">EVENT_ID</th>
                          <th className="p-4">Globe</th>
                          <th className="p-4">SEVERITY</th>
                          <th className="p-4 text-right">RESOLUTION_STATUS</th>
                       </tr>
                    </thead>
                    <tbody className="font-mono text-[12px] font-bold">
                       <EventRow time="2023.10.27 14:22:05" id="#ERR_INF_042" Globe="INFRA_GRID" severity="CRITICAL" status="RESOLVED (12m)" />
                       <EventRow time="2023.10.27 13:05:12" id="#ERR_AI_098" Globe="AI_CORE" severity="AlertTriangle" status="RESOLVED (4m)" AlertTriangle />
                       <EventRow time="2023.10.27 11:40:00" id="#ERR_PHS_221" Globe="PHYSICS_STREAM" severity="CRITICAL" status="PENDING_REVIEW" error />
                       <EventRow time="2023.10.27 09:12:45" id="#ERR_MFG_002" Globe="MFG_LOGS" severity="AlertTriangle" status="RESOLVED (22s)" AlertTriangle />
                    </tbody>
                 </table>
              </div>
           </section>

        </main>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .scanline-overlay {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
        }
      `}</style>
    </div>
  );
};

const SideNavItem = ({ icon, label, onClick }: any) => (
  <div 
     onClick={onClick}
     className="flex items-center gap-4 px-6 py-4 rounded-2xl transition-all cursor-pointer group text-white/20 hover:bg-white/5 hover:text-white"
  >
     <div className="group-hover:scale-125 transition-transform duration-500">{icon}</div>
     <span className="text-[11px] font-black uppercase tracking-[0.3em] font-mono">{label}</span>
  </div>
);

const StatCard = ({ icon, label, value, subValue, trend, color }: any) => (
  <div className="bg-black/40 border border-white/5 p-6 rounded-[32px] shadow-2xl backdrop-blur-3xl flex flex-col justify-between min-h-[140px] group hover:border-blue-500/20 transition-all">
     <div className="flex items-center justify-between">
        <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">{label}</span>
        <div className={`transition-transform group-hover:rotate-12 ${color === 'blue' ? 'text-blue-400' : color === 'amber' ? 'text-amber-400' : color === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'}`}>
           {React.cloneElement(icon, { className: 'w-4 h-4' })}
        </div>
     </div>
     <div>
        <div className="text-[24px] font-mono font-black tracking-tighter text-white">{value}</div>
        <div className="flex items-center gap-2 mt-1">
           {trend === 'down' && <span className="w-2 h-2 bg-emerald-500 rounded-full" />}
           <span className={`text-[10px] font-mono font-black uppercase tracking-widest ${trend === 'down' ? 'text-emerald-400' : 'text-white/40'}`}>{subValue}</span>
        </div>
     </div>
  </div>
);

const ProgressMetric = ({ label, value, color }: any) => (
  <div className="space-y-3">
     <div className="flex justify-between text-[10px] font-mono font-black">
        <span className="text-white/40 uppercase tracking-widest">{label}</span>
        <span className="text-white">{value}%</span>
     </div>
     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full shadow-2xl transition-all duration-1000 ${color === 'blue' ? 'bg-blue-400' : color === 'cyan' ? 'bg-cyan-400' : color === 'amber' ? 'bg-amber-400' : 'bg-white/40'}`} style={{ width: `${value}%` }} />
     </div>
  </div>
);

const EventRow = ({ time, id, Globe, severity, status, error, AlertTriangle }: any) => (
  <tr className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group cursor-pointer">
     <td className="p-4 text-white/20 group-hover:text-white">{time}</td>
     <td className="p-4 text-blue-400">{id}</td>
     <td className="p-4 text-white/60">{Globe}</td>
     <td className="p-4">
        <span className={`text-[9px] px-3 py-1 rounded-full font-black uppercase tracking-widest border ${error ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : AlertTriangle ? 'bg-amber-400/10 text-amber-400 border-amber-400/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
           {severity}
        </span>
     </td>
     <td className="p-4 text-right">
        <span className={`text-[12px] font-mono font-black ${error ? 'text-rose-400' : 'text-emerald-400'}`}>{status}</span>
     </td>
  </tr>
);

export default SignalAnalyticsEngineeringOS_0183c3;
