'use client';

import React, { useEffect } from 'react';
import { 
  Bell, X, AlertTriangle, ShieldAlert, CheckCircle, 
  Info, Activity, Zap, Shield, Lock, Unlock,
  ShieldCheck, AlertCircle, RefreshCw, Sparkles,
  Target, TrendingUp, Layers, Fingerprint, Search,
  ChevronRight, Binary, Terminal, Globe, Maximize
} from 'lucide-react';
import { useEngineeringStore, Notification } from '@/store/useEngineeringStore';

/**
 * NotificationItem v3.2 (Phase 55 Hardened)
 * 
 * High-fidelity glassmorphic notification component with reality-linked telemetry.
 * Featuring Phase 55 aesthetics and sub-picowatt residual observability.
 */
const NotificationItem = ({ notification, onRemove }: { notification: Notification, onRemove: (id: string) => void }) => {
  const { id, title, message, type, domain, timestamp } = notification;

  const typeConfig = {
    INFO: { icon: Info, color: 'blue', label: 'SYSTEM_INTEL_v3.2' },
    SUCCESS: { icon: CheckCircle, color: 'emerald', label: 'SOVEREIGN_SYNC' },
    WARNING: { icon: AlertTriangle, color: 'amber', label: 'REALITY_DRIFT' },
    ERROR: { icon: AlertCircle, color: 'rose', label: 'KERNEL_FAULT_LOCKED' },
    CRITICAL: { icon: ShieldAlert, color: 'rose', label: 'SECURITY_LOCKDOWN' }
  };

  const config = typeConfig[type as keyof typeof typeConfig] || typeConfig.INFO;
  const color = config.color;

  const [timeStr, setTimeStr] = React.useState<string>('');

  React.useEffect(() => {
    setTimeStr(new Date(timestamp).toLocaleTimeString([], { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    }));
  }, [timestamp]);

  return (
    <div className={`
      w-[480px] bg-[#080B10]/98 border border-${color}-500/30 rounded-[32px] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-[60px] 
      animate-in slide-in-from-right-20 fade-in duration-1000 overflow-hidden group relative perspective-2000 hover:scale-[1.02] transition-all duration-700
    `}>
      {/* 1. MASTER SOVEREIGN DECORATION */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 via-transparent to-transparent opacity-50 pointer-events-none`} />
      <div className={`absolute -top-10 -right-10 w-48 h-48 bg-${color}-500/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none`} />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      {/* 2. DURATION PROGRESS INDICATOR (v3.2) */}
      <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-${color}-600 to-${color}-400 shadow-[0_0_20px_rgba(var(--${color}-rgb),0.8)] animate-shrink-width`} style={{ width: '100%' }} />

      <div className="relative z-10 flex gap-8">
        {/* SOVEREIGN ICON CONTAINER */}
        <div className="flex flex-col items-center gap-4">
          <div className={`p-4 bg-${color}-500/10 rounded-[22px] border border-${color}-500/30 h-fit shadow-2xl group-hover:scale-110 group-hover:rotate-12 group-hover:border-${color}-500/60 transition-all duration-700 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <config.icon className={`w-8 h-8 text-${color}-400 group-hover:animate-pulse relative z-10`} />
          </div>
          <div className={`w-[1px] flex-1 bg-gradient-to-b from-${color}-500/40 via-${color}-500/10 to-transparent rounded-full shadow-[0_0_10px_rgba(var(--${color}-rgb),0.2)]`} />
        </div>

        {/* SOVEREIGN CONTENT CONTAINER */}
        <div className="flex-1 space-y-5">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                 <span className={`text-[11px] font-black text-${color}-400 uppercase tracking-[0.4em] font-mono drop-shadow-[0_0_8px_rgba(var(--${color}-rgb),0.4)]`}>
                   {domain ? `${domain}_v3.2_CORE` : config.label}
                 </span>
                 <div className={`w-2 h-2 rounded-full bg-${color}-400/40 animate-pulse`} />
                 <span className="text-[9px] text-white/20 font-mono font-black tracking-[0.3em] uppercase">PKT_ID: 0x{id.slice(-8).toUpperCase()}</span>
              </div>
              <h4 className="text-[16px] font-black text-white uppercase tracking-widest leading-tight group-hover:text-blue-100 transition-all duration-700">
                {title}
              </h4>
            </div>
            <button 
              onClick={() => onRemove(id)}
              className="text-white/10 hover:text-white hover:bg-white/10 p-2.5 rounded-xl transition-all duration-500 hover:rotate-90 group/close"
            >
              <X className="w-5 h-5 group-hover:scale-110" />
            </button>
          </div>
          
          <p className="text-[13px] text-[#adc6ff]/60 leading-relaxed font-mono font-medium selection:bg-blue-500/40 group-hover:text-white/80 transition-colors duration-700 italic">
            "{message}"
          </p>
          
          {/* SOVEREIGN ACTION & TELEMETRY FOOTER (v3.2) */}
          <div className="flex justify-between items-center pt-5 border-t border-white/5 relative">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                 <span className="text-[10px] text-white/40 font-mono font-black uppercase tracking-widest">
                    TS: {timeStr}.018ms
                 </span>
                 <span className="text-[8px] text-[#adc6ff]/10 uppercase font-mono font-black italic mt-0.5">Sovereign_RealTime_Verification</span>
              </div>
              <div className="h-6 w-px bg-white/5" />
              <div className="flex items-center gap-2.5 opacity-40 group-hover:opacity-100 transition-all duration-1000 translate-x-[-10px] group-hover:translate-x-0">
                <Target className={`w-4 h-4 text-${color}-400 shadow-[0_0_10px_rgba(var(--${color}-rgb),0.5)]`} />
                <span className={`text-[10px] text-${color}-400 font-black uppercase tracking-[0.2em]`}>Phase_55_Active</span>
              </div>
            </div>
            <button className={`flex items-center gap-3 px-6 py-2 bg-${color}-500/10 border border-${color}-500/30 rounded-[18px] text-[10px] font-black text-${color}-400 uppercase tracking-widest hover:bg-${color}-500 hover:text-white hover:shadow-[0_0_30px_rgba(var(--${color}-rgb),0.6)] transition-all duration-500 shadow-2xl active:scale-95 group/btn overflow-hidden relative`}>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-2">Kernel_Audit <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * NotificationSystem v3.2 (Phase 55 Advanced - Sovereign Cognition Hub)
 * 
 * Centralized high-fidelity notification hub for real-time engineering 
 * orchestration, security hardening alerts, and sovereign symbolic convergence.
 */
const NotificationSystem = () => {
  const { notifications, removeNotification } = useEngineeringStore();

  return (
    <div className="fixed top-[calc(var(--engos-topbar-h)+2rem)] right-12 z-[9999] flex flex-col gap-8 pointer-events-none max-h-[calc(100vh-var(--engos-topbar-h)-4rem)] overflow-y-auto scrollbar-hide">
      <div className="contents pointer-events-auto">
        {notifications.map((n) => (
          <NotificationItem 
            key={n.id} 
            notification={n} 
            onRemove={removeNotification} 
          />
        ))}
      </div>
      
      {/* SOVEREIGN MASTER ALERT MINI-HUB (v3.2) */}
      {notifications.length > 0 && (
         <div className="flex justify-end pr-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 pointer-events-auto">
            <div className="px-8 py-4 bg-[#0B0F14]/95 border border-blue-500/40 rounded-[28px] flex items-center gap-6 backdrop-blur-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group hover:border-blue-400 hover:scale-105 transition-all duration-700 cursor-pointer relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-rose-500/10 opacity-30 pointer-events-none" />
               <div className="relative group/bell">
                  <Bell className="w-6 h-6 text-blue-400 animate-bounce group-hover/bell:rotate-12 transition-transform" />
                  <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-[#0B0F14] shadow-[0_0_10px_rgba(244,63,94,0.8)] animate-pulse" />
               </div>
               <div className="flex flex-col">
                 <span className="text-[12px] text-white font-black uppercase tracking-[0.4em]">
                    {notifications.length} SOVEREIGN_STREAMS_ACTIVE
                 </span>
                 <span className="text-[9px] text-blue-400/40 uppercase font-mono font-black tracking-[0.3em] mt-1 italic">Master Orchestrator Phase_55 Synchronized</span>
               </div>
               <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-500" />
            </div>
         </div>
      )}
    </div>
  );
};

export default NotificationSystem;
