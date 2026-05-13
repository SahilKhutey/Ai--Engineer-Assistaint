'use client';

import React, { useState } from 'react';
import { 
  Plane, Rocket, Navigation, Cpu, Activity, Zap, 
  Settings, Target, TrendingUp, Layers, Globe, 
  Flame, Gauge, ShieldCheck, AlertTriangle, Radio
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const AerospaceIntelligencePanel = () => {
  const { aerospaceState, updateFlight, updatePropulsion } = useEngineeringStore();
  const [activeTab, setActiveTab] = useState<'AIRCRAFT' | 'FLIGHT' | 'PROPULSION' | 'ORBITAL'>('FLIGHT');

  const { aircraft, flightDynamics, propulsion, orbital, avionics } = aerospaceState;

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. AEROSPACE TABS */}
      <div className="flex bg-[#0B0F14] border-b border-[#adc6ff]/10 overflow-x-auto custom-scrollbar">
        {[
          { id: 'FLIGHT', label: 'Flight Systems', icon: Navigation },
          { id: 'AIRCRAFT', label: 'Design', icon: Plane },
          { id: 'PROPULSION', label: 'Propulsion', icon: Flame },
          { id: 'ORBITAL', label: 'Orbital', icon: Globe }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`
              flex-none px-6 py-3 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-widest transition-all
              ${activeTab === tab.id ? 'text-[#adc6ff] bg-[#adc6ff]/5 border-b-2 border-[#adc6ff]' : 'text-[#adc6ff]/30 hover:text-[#adc6ff]/60'}
            `}
          >
            <tab.icon className="w-3 h-3" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
        
        {/* TAB 1: FLIGHT DYNAMICS (6DOF) */}
        {activeTab === 'FLIGHT' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">6DOF Primary Flight Display</h3>
                <div className="grid grid-cols-2 gap-3">
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Altitude (MSL)</p>
                      <p className="text-2xl font-mono font-bold text-[#f0f4ff]">{flightDynamics.altitude_m.toLocaleString()} m</p>
                   </div>
                   <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl flex flex-col items-center justify-center space-y-2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">Velocity (IAS)</p>
                      <p className="text-2xl font-mono font-bold text-[#f0f4ff]">{flightDynamics.velocity_mps} m/s</p>
                      <span className="text-[9px] text-blue-400 font-bold">Mach {flightDynamics.machNumber}</span>
                   </div>
                </div>

                <div className="p-4 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-[9px] text-[#adc6ff]/40 uppercase font-bold tracking-widest">Attitude Orientation</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                   </div>
                   <div className="grid grid-cols-3 gap-2">
                      {Object.entries(flightDynamics.attitude).map(([axis, val]) => (
                        <div key={axis} className="p-2 bg-[#080B10] rounded-xl border border-[#adc6ff]/5 text-center">
                           <p className="text-[7px] text-[#adc6ff]/40 uppercase">{axis}</p>
                           <p className="text-[10px] font-mono text-[#f0f4ff] font-bold">{val}°</p>
                        </div>
                      ))}
                   </div>
                </div>
             </section>

             <section className="p-3 bg-emerald-400/5 border border-emerald-400/20 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <Cpu className="w-4 h-4 text-emerald-400" />
                   <span className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest">Autopilot: {avionics.autopilotStatus}</span>
                </div>
                <div className="flex items-center gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                   <span className="text-[8px] text-emerald-400 uppercase font-bold">Healthy</span>
                </div>
             </section>
          </div>
        )}

        {/* TAB 2: AIRCRAFT DESIGN & LOADS */}
        {activeTab === 'AIRCRAFT' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Parametric Airframe Build</h3>
                <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl space-y-4">
                   <div className="flex justify-between items-end">
                      <div className="space-y-1">
                         <p className="text-[8px] text-[#adc6ff]/60 uppercase">Airfoil Profile</p>
                         <p className="text-sm font-mono font-bold text-[#adc6ff]">{aircraft.airfoil}</p>
                      </div>
                      <Layers className="w-6 h-6 text-[#adc6ff]/20" />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                         <p className="text-[8px] text-[#adc6ff]/40 uppercase">Wingspan</p>
                         <p className="text-xs font-mono font-bold text-[#f0f4ff]">{aircraft.wingspan_m} m</p>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[8px] text-[#adc6ff]/40 uppercase">MTOW</p>
                         <p className="text-xs font-mono font-bold text-[#f0f4ff]">{aircraft.mass_kg.toLocaleString()} kg</p>
                      </div>
                   </div>
                </div>
             </section>

             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Structural Margin (Aeroelasticity)</h3>
                <div className="p-3 bg-red-400/5 border border-red-400/20 rounded-xl flex items-start gap-3">
                   <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                   <p className="text-[10px] text-red-100/60 font-mono italic">
                      High flutter risk detected at Mach 1.9. Recommendation: Increase wing sweep or stiffen spar assembly.
                   </p>
                </div>
             </section>
          </div>
        )}

        {/* TAB 3: PROPULSION SYSTEMS */}
        {activeTab === 'PROPULSION' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-amber-400/40 uppercase tracking-[0.2em]">Engine Performance Telemetry</h3>
                <div className="p-4 bg-amber-400/5 border border-amber-400/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <Flame className="w-4 h-4 text-amber-400" />
                         <span className="text-[10px] font-bold text-amber-100 uppercase">{propulsion.type} CORE</span>
                      </div>
                      <span className="text-[12px] font-mono font-bold text-amber-400">{propulsion.thrust_kN} kN</span>
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between text-[8px] text-amber-400/40 uppercase font-bold">
                         <span>Thermal Load</span>
                         <span>{(propulsion.thermalLoad * 100).toFixed(0)}%</span>
                      </div>
                      <div className="h-1 bg-amber-400/10 rounded-full overflow-hidden">
                         <div className="h-full bg-amber-400" style={{ width: `${propulsion.thermalLoad * 100}%` }} />
                      </div>
                   </div>
                   <div className="p-3 bg-[#0B0F14] border border-amber-400/10 rounded-xl">
                      <p className="text-[8px] text-amber-400/40 uppercase mb-1">Fuel Remaining</p>
                      <p className="text-sm font-mono font-bold text-amber-100">{propulsion.fuel_kg} kg</p>
                   </div>
                </div>
             </section>
          </div>
        )}

        {/* TAB 4: ORBITAL MECHANICS */}
        {activeTab === 'ORBITAL' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-blue-400/40 uppercase tracking-[0.2em]">Orbital Path Propagation</h3>
                <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl space-y-4">
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-blue-100 uppercase tracking-widest flex items-center gap-2">
                         <Globe className="w-4 h-4" /> LEO Trajectory
                      </span>
                      <span className="text-[9px] text-blue-400/40 font-mono">INC: {orbital.inclination_deg}°</span>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#0B0F14] border border-blue-500/10 rounded-xl">
                         <p className="text-[8px] text-blue-400/40 uppercase">Periapsis</p>
                         <p className="text-xs font-mono font-bold text-blue-100">{orbital.periapsis_km} km</p>
                      </div>
                      <div className="p-3 bg-[#0B0F14] border border-blue-500/10 rounded-xl">
                         <p className="text-[8px] text-blue-400/40 uppercase">Apoapsis</p>
                         <p className="text-xs font-mono font-bold text-blue-100">{orbital.apoapsis_km} km</p>
                      </div>
                   </div>
                   <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl flex justify-between items-center">
                      <span className="text-[9px] text-blue-100 font-bold uppercase">Delta-V Budget</span>
                      <span className="text-[12px] font-mono font-bold text-blue-400">{orbital.deltaV_mps} m/s</span>
                   </div>
                </div>
             </section>
          </div>
        )}

      </div>

      {/* 3. AEROSPACE MISSION FOOTER */}
      <div className="p-4 bg-[#adc6ff]/5 border-t border-[#adc6ff]/10 space-y-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2 text-[9px] text-blue-400 font-bold uppercase tracking-widest">
              <Zap className="w-3 h-3" /> Mission Intelligence
           </div>
           <span className="text-[9px] text-[#adc6ff]/40 font-mono">MISSION_ACTIVE</span>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-[#adc6ff] text-[#0B0F14] py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(173,198,255,0.2)]">
            Execute Maneuver
          </button>
          <button className="px-4 py-2 border border-[#adc6ff]/20 rounded-xl text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AerospaceIntelligencePanel;
