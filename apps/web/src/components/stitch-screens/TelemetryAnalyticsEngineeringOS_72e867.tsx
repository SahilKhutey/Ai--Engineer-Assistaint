'use client';

import React, { useState, useEffect } from 'react';
import {
  Zap,
  Activity,
  Thermometer,
  Gauge,
  Terminal,
  Settings,
  ShieldAlert,
  Cpu,
  BarChart3,
  RefreshCcw,
  Bell,
  Maximize2,
  ChevronRight,
  Box,
  Clock,
  Database,
  ArrowUpRight,
  ArrowDownRight,
  Search
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * TelemetryAnalyticsEngineeringOS_72e867 (Phase 58 Hardened)
 * 
 * High-density BarChart3 cockpit for engineering telemetry.
 * Features real-time sparklines for vibration, thermal flux, and pressure.
 * Integrated with physicsState, thermalState, and osStatus.
 */
const TelemetryAnalyticsEngineeringOS_72e867 = () => {
  const { physicsState, thermalState, osStatus, pushEvent } = useEngineeringStore();
  
  // Rolling time-series buffers for dynamic telemetry rendering
  const [vibrationHistory, setVibrationHistory] = useState<number[]>(Array(24).fill(40));
  const [thermalHistory, setThermalHistory] = useState<number[]>(Array(24).fill(60));
  const [pressureHistory, setPressureHistory] = useState<number[]>(Array(24).fill(50));

  // Dynamic values mapped from store with premium defaults
  const gpuLoad = ((osStatus?.kernelLoad || 0.05) * 100).toFixed(0);
  const uptime = osStatus?.uptime ? `${Math.floor(osStatus.uptime / 3600)}h ${Math.floor((osStatus.uptime % 3600) / 60)}m ${osStatus.uptime % 60}s` : '142:08:12:04';
  
  const vibration = physicsState?.vitals?.vibration || 314.52;
  const thermalFlux = thermalState?.physics?.heatFlux || 45.2;
  const pressure = physicsState?.vitals?.pressure || 101.3;

  // Append new telemetry inputs to history buffers on change
  useEffect(() => {
    // Standardize to percentage heights for Sparkline rendering
    const normalizedVibration = Math.max(10, Math.min(100, ((vibration - 250) / 150) * 100));
    setVibrationHistory(prev => [...prev.slice(1), normalizedVibration]);
  }, [vibration]);

  useEffect(() => {
    const normalizedThermal = Math.max(10, Math.min(100, ((thermalFlux - 30) / 30) * 100));
    setThermalHistory(prev => [...prev.slice(1), normalizedThermal]);
  }, [thermalFlux]);

  useEffect(() => {
    const normalizedPressure = Math.max(10, Math.min(100, ((pressure - 90) / 20) * 100));
    setPressureHistory(prev => [...prev.slice(1), normalizedPressure]);
  }, [pressure]);

  const handleRefresh = () => {
    pushEvent?.('TELEMETRY_REFRESH', { timestamp: Date.now(), source: 'ANALYTICS_BOARD' });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0b0f14] text-[#e1e2ec] font-sans overflow-hidden selection:bg-[#4cd7f6]/30">
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-[#202b3c] bg-[#10131a]/70 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-5 h-5 text-[#adc6ff]" />
          <h1 className="text-[18px] font-bold text-[#adc6ff] tracking-tighter leading-none">ANTIGRAVITY_OS</h1>
          <div className="flex items-center gap-2 ml-6 px-3 py-1 bg-[#4cd7f6]/10 border border-[#4cd7f6]/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse shadow-[0_0_8px_#4cd7f6]" />
            <span className="text-[10px] font-bold text-[#4cd7f6] uppercase tracking-widest">LIVE_ANALYTICS</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold text-[#adc6ff] tracking-widest uppercase font-mono">GPU: {gpuLoad}% | SIM: ACTIVE</span>
            <span className="text-[9px] text-[#8c909f] font-mono tracking-tighter uppercase">UPTIME: {uptime}</span>
          </div>
          <button onClick={handleRefresh} className="p-2 hover:bg-[#adc6ff]/10 rounded-lg transition-all active:scale-90 text-[#adc6ff]">
            <RefreshCcw className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* 2. MAIN SCROLLABLE CONTENT */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar pb-24 lg:pb-8 bg-[#0b0e15]/40">
        
        <div className="grid grid-cols-12 gap-6">
          
          {/* Left Column: Real-time Sparklines */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
            
            <AnalyticsChart 
              label="Vibration (Hz)" 
              value={vibration.toFixed(2)} 
              unit="HZ" 
              subValue="MAX: 442.8 | MIN: 12.1"
              data={vibrationHistory}
              color="text-[#adc6ff]"
              barColor="bg-[#adc6ff]"
            />

            <AnalyticsChart 
              label="Thermal Flux (W/m²)" 
              value={thermalFlux.toFixed(2)} 
              unit="W/m²" 
              subValue="CRIT_THRESHOLD: 8.5K"
              data={thermalHistory}
              color="text-[#ffb786]"
              barColor="bg-[#ffb786]"
            />

            <AnalyticsChart 
              label="Atmospheric Pressure (Pa)" 
              value={`${pressure.toFixed(2)}`} 
              unit="PA" 
              subValue="DELTA_Δ: -0.04%"
              data={pressureHistory}
              color="text-[#4cd7f6]"
              barColor="bg-[#4cd7f6]"
            />

          </div>

          {/* Right Column: Stats & Events */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            
            {/* Statistical Summary */}
            <section className="bg-[#1d2027] border border-[#202b3c] rounded-2xl overflow-hidden shadow-2xl">
              <header className="bg-[#272a31] px-6 py-3 border-b border-[#202b3c] flex justify-between items-center">
                <h3 className="text-[11px] font-bold text-[#adc6ff] uppercase tracking-widest flex items-center gap-2">
                  <Database className="w-3.5 h-3.5" />
                  STATISTICAL_SUMMARY
                </h3>
                <Settings className="w-3.5 h-3.5 text-[#8c909f] cursor-pointer" />
              </header>
              <div className="p-6 grid grid-cols-2 gap-4">
                <StatCard label="MEAN_VAL" value="1.0428e+3" />
                <StatCard label="VARIANCE_σ²" value="0.00034" />
                <StatCard label="KURTOSIS_K" value="3.1205" />
                <StatCard label="SKEWNESS" value="-0.0012" />
              </div>
            </section>

            {/* Anomalous Event Log */}
            <section className="bg-[#1d2027] border border-[#202b3c] rounded-2xl overflow-hidden shadow-2xl flex-1 flex flex-col min-h-[400px]">
              <header className="bg-[#272a31] px-6 py-3 border-b border-[#202b3c] flex justify-between items-center">
                <h3 className="text-[11px] font-bold text-[#ffb4ab] uppercase tracking-widest flex items-center gap-2">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  ANOMALOUS_EVENT_LOG
                </h3>
                <Bell className="w-3.5 h-3.5 text-[#ffb4ab] animate-pulse" />
              </header>
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <table className="w-full text-left font-mono text-[11px]">
                  <thead className="bg-[#10131a]/50 sticky top-0 z-10">
                    <tr>
                      <th className="px-6 py-3 text-[#8c909f] uppercase tracking-widest font-bold">Time</th>
                      <th className="px-6 py-3 text-[#8c909f] uppercase tracking-widest font-bold">Event</th>
                      <th className="px-6 py-3 text-[#8c909f] uppercase tracking-widest font-bold text-right">Prio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#202b3c]/50">
                    <EventRow time="12:44:02.1" event="FLUX_SPIKE_SECTOR_7" prio="CRITICAL" color="text-[#ffb4ab] bg-[#93000a]/20 border-[#ffb4ab]/30" />
                    <EventRow time="12:44:08.4" event="RESONANCE_PASSIVE" prio="NOMINAL" color="text-[#adc6ff] bg-[#adc6ff]/10 border-[#adc6ff]/20" />
                    <EventRow time="12:44:15.9" event="VALVE_04_MICRO_LEAK" prio="WARNING" color="text-[#ffb786] bg-[#df7412]/20 border-[#ffb786]/30" />
                    <EventRow time="12:44:22.0" event="BUFFER_SYNC_DONE" prio="INFO" color="text-[#4cd7f6] bg-[#4cd7f6]/10 border-[#4cd7f6]/20" />
                    <EventRow time="12:44:28.2" event="CORE_TEMP_LIMIT" prio="WARNING" color="text-[#ffb786] bg-[#df7412]/20 border-[#ffb786]/30" />
                  </tbody>
                </table>
              </div>
            </section>

            {/* Hardware Status Visualization */}
            <div className="bg-[#1d2027] rounded-2xl overflow-hidden border border-[#202b3c] shadow-2xl relative group h-48">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[10s] ease-linear"
                alt="Hardware Telemetry Visualization"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#adc6ff] uppercase tracking-widest">LIVE_VIDEO_FEED</span>
                  <span className="text-[12px] font-mono font-bold text-[#e1e2ec]">CAM_012 // CORE_ARRAY</span>
                </div>
                <Search className="w-5 h-5 text-[#adc6ff] cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>

          </div>

        </div>

      </main>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #32353c; border-radius: 10px; }
      `}</style>
    </div>
  );
};

const AnalyticsChart = ({ label, value, unit, subValue, data, color, barColor }: any) => (
  <section className="bg-[#1d2027] border border-[#202b3c] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
    <header className="bg-[#272a31] px-6 py-3 border-b border-[#202b3c] flex justify-between items-center">
      <span className="text-[11px] font-bold text-[#adc6ff] uppercase tracking-widest">{label}</span>
      <span className="text-[10px] font-mono text-[#8c909f]">{subValue}</span>
    </header>
    <div className="p-6 flex items-end gap-6 h-48">
      <div className="flex-1 flex items-end gap-1 h-full">
        {data.map((d: number, i: number) => (
          <div 
            key={i} 
            className={`w-full ${barColor} opacity-40 hover:opacity-100 transition-all duration-300 rounded-t-sm`}
            style={{ height: `${d}%` }}
          />
        ))}
      </div>
      <div className="w-48 flex flex-col justify-end items-end text-right">
        <div className={`text-[32px] font-mono font-bold ${color} tracking-tighter leading-none mb-1`}>
          {value}
        </div>
        <span className="text-[10px] font-bold text-[#8c909f] uppercase tracking-widest">{unit}_REALTIME</span>
      </div>
    </div>
  </section>
);

const StatCard = ({ label, value }: any) => (
  <div className="p-4 bg-[#0b0e15]/60 border border-[#202b3c] rounded-xl flex flex-col gap-1 group hover:border-[#adc6ff]/30 transition-all">
    <span className="text-[9px] font-bold text-[#8c909f] uppercase tracking-[0.2em]">{label}</span>
    <span className="text-[14px] font-mono font-bold text-[#e1e2ec] group-hover:text-[#adc6ff] transition-colors">{value}</span>
  </div>
);

const EventRow = ({ time, event, prio, color }: any) => (
  <tr className="hover:bg-white/5 cursor-pointer group transition-colors">
    <td className="px-6 py-4 text-[#8c909f] group-hover:text-[#adc6ff] transition-colors">{time}</td>
    <td className="px-6 py-4 text-[#e1e2ec] font-bold">{event}</td>
    <td className="px-6 py-4 text-right">
      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${color}`}>
        {prio}
      </span>
    </td>
  </tr>
);

export default TelemetryAnalyticsEngineeringOS_72e867;
