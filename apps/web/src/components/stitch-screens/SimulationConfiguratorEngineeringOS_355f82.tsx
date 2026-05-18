'use client';

import React, { useState } from 'react';
import {
  Settings,
  Cpu,
  Factory,
  ZoomIn,
  RotateCcw,
  CheckSquare,
  FileUp,
  Terminal,
  Play,
  ChevronUp,
  ChevronDown,
  Activity
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * SimulationConfiguratorEngineeringOS_355f82 (Phase 58 Hardened)
 * 
 * High-fidelity simulation configuration workspace.
 * Features real-time physics parameter orchestration and 3D mesh preview diagnostics.
 */
const SimulationConfiguratorEngineeringOS_355f82 = () => {
  const { physicsState, orchestrationState, osStatus, pushEvent } = useEngineeringStore();
  const [meshDensity, setMeshDensity] = useState('FINE');

  // Real-time values mapped from store
  const gravity = physicsState?.constants?.gravity || 9.80665;
  const viscosity = physicsState?.fluid?.viscosity || 1.789e-5;
  const atmDensity = physicsState?.fluid?.density || 1.225;
  const cpuLoad = (osStatus?.kernelLoad || 0.94) * 100;
  const isSimActive = orchestrationState?.status === 'ACTIVE';

  const handleAction = (action: string, payload?: any) => {
    pushEvent?.('SIM_CONFIG_ACTION', { action, payload, timestamp: Date.now() });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#10131a] text-[#e1e2ec] font-sans overflow-hidden relative selection:bg-blue-500/30">
      {/* Visual Overlays */}
      <div className="absolute inset-0 scanline pointer-events-none z-50 opacity-[0.03]" />
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0 opacity-[0.05]" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-6 border-b border-[#424754] bg-[#10131a]/70 backdrop-blur-xl flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-4">
          <Activity className="w-5 h-5 text-[#adc6ff]" />
          <h1 className="text-[20px] font-bold text-[#adc6ff] tracking-tighter leading-none">ANTIGRAVITY_OS</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 px-3 py-1 bg-white/[0.02] border border-white/10 rounded-full">
            <span className="text-[10px] font-mono font-bold text-[#4cd7f6] uppercase tracking-widest">
              GPU: {cpuLoad.toFixed(0)}% | SIM: {isSimActive ? 'ACTIVE' : 'IDLE'}
            </span>
            <div className={`h-2 w-2 rounded-full ${isSimActive ? 'bg-[#4cd7f6] animate-pulse shadow-[0_0_8px_#4cd7f6]' : 'bg-gray-500'}`} />
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. NAVIGATION DRAWER */}
        <aside className="w-64 border-r border-[#424754] bg-[#0b0e15] flex flex-col p-4 gap-4 hidden lg:flex shrink-0">
          <span className="text-[10px] font-bold text-[#e1e2ec]/40 uppercase tracking-[0.4em] px-4">SYSTEM_CORE</span>
          <nav className="flex flex-col gap-1">
            <NavItem icon={<Terminal className="w-4 h-4" />} label="Projects" />
            <NavItem icon={<Activity className="w-4 h-4" />} label="Simulations" active />
            <NavItem icon={<Cpu className="w-4 h-4" />} label="AI Agents" />
            <NavItem icon={<Settings className="w-4 h-4" />} label="Digital Twin" />
            <NavItem icon={<Factory className="w-4 h-4" />} label="Manufacturing" />
          </nav>
        </aside>

        {/* 3. MAIN WORKSPACE */}
        <main className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar relative">
          <div className="grid grid-cols-12 gap-4">
            
            {/* Left Column: Physics Parameters */}
            <section className="col-span-12 xl:col-span-4 flex flex-col gap-4">
              <div className="bg-[#1a2330]/70 backdrop-blur-xl border border-[#202B3C] rounded-xl overflow-hidden flex flex-col shadow-2xl transition-all hover:shadow-blue-500/5">
                <header className="h-8 bg-[#32353c] px-4 flex items-center justify-between border-b border-[#424754]">
                  <span className="text-[10px] font-bold text-[#4cd7f6] uppercase tracking-widest">Physics_Engine_Params</span>
                  <Settings className="w-3.5 h-3.5 text-[#e1e2ec]/40 cursor-pointer hover:text-[#adc6ff] transition-colors" />
                </header>
                <div className="p-4 space-y-6">
                  <PhysicsSlider label="GRAVITY_CONSTANT" value={gravity} unit="m/s²" color="blue" />
                  <PhysicsSlider label="DYNAMIC_VISCOSITY" value={viscosity} unit="Pa·s" color="cyan" isScientific />
                  <PhysicsSlider label="ATM_DENSITY" value={atmDensity} unit="kg/m³" color="blue" />
                </div>
              </div>

              <div className="bg-[#1a2330]/70 backdrop-blur-xl border border-[#202B3C] rounded-xl overflow-hidden shadow-2xl">
                <header className="h-8 bg-[#32353c] px-4 flex items-center border-b border-[#424754]">
                  <span className="text-[10px] font-bold text-[#4cd7f6] uppercase tracking-widest">Boundary_Conditions</span>
                </header>
                <div className="p-4 grid grid-cols-2 gap-4">
                  <CoordinateInput label="X_COORDINATE" value={124.50} />
                  <CoordinateInput label="Y_COORDINATE" value={88.20} />
                  
                  <div className="col-span-2 relative aspect-Camera bg-[#0b0e15] border border-[#424754] rounded-lg overflow-hidden group">
                    <div className="absolute inset-0 opacity-20 pointer-events-none grid-pattern-small" />
                    <img 
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
                      className="w-full h-full object-cover opacity-40 grayscale contrast-125 mix-blend-screen transition-transform duration-[10000ms] group-hover:scale-110"
                      alt="Turbine Engineering"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-[#4cd7f6] rounded-full animate-pulse flex items-center justify-center shadow-[0_0_15px_#4cd7f6]">
                        <div className="w-1.5 h-1.5 bg-[#4cd7f6] rounded-full" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 text-[9px] font-bold text-[#e1e2ec]/40 px-2 py-0.5 bg-[#10131a]/80 rounded border border-white/5 uppercase tracking-widest">VIEW_AXIS: ISO_FRONT</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Middle Column: Mesh Density & Preview */}
            <section className="col-span-12 xl:col-span-8 flex flex-col gap-4">
              <div className="bg-[#1a2330]/70 backdrop-blur-xl border border-[#202B3C] rounded-xl overflow-hidden flex-1 min-h-[500px] flex flex-col shadow-2xl">
                <header className="h-10 bg-[#32353c] px-6 flex items-center justify-between border-b border-[#424754]">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-[#4cd7f6] uppercase tracking-[0.4em]">Mesh_Preview_Active</span>
                    <span className="text-[10px] font-mono bg-[#4cd7f6]/10 text-[#4cd7f6] px-2 py-0.5 rounded border border-[#4cd7f6]/30 font-bold uppercase tracking-widest">LOD_HIGH</span>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#e1e2ec]/40 font-bold tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-[#4cd7f6] shadow-[0_0_8px_#4cd7f6]" />
                      NODES: 2.4M
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#e1e2ec]/40 font-bold tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-[#adc6ff] shadow-[0_0_8px_#adc6ff]" />
                      CELLS: 8.1M
                    </div>
                  </div>
                </header>
                
                <div className="flex-1 relative bg-[#0b0e15] overflow-hidden">
                  <div className="absolute inset-0 opacity-10 pointer-events-none grid-pattern-large" />
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2000" 
                    className="w-full h-full object-cover opacity-30 grayscale mix-blend-screen transition-transform duration-[20000ms] hover:scale-105"
                    alt="Finite Element Mesh"
                  />
                  
                  {/* Overlay HUD */}
                  <div className="absolute top-6 left-6 p-6 bg-[#1a2330]/80 backdrop-blur-xl border-l-4 border-l-[#4cd7f6] border border-white/5 rounded-r-2xl pointer-events-none shadow-2xl">
                    <p className="text-[10px] font-bold text-[#4cd7f6] uppercase tracking-[0.4em] mb-4">DIAGNOSTICS</p>
                    <div className="space-y-2 text-[11px] font-mono text-[#e1e2ec]/60 font-bold uppercase tracking-widest">
                      <p className="flex justify-between gap-8">SKW_RATIO: <span className="text-[#4cd7f6]">0.12 [OPTIMAL]</span></p>
                      <p className="flex justify-between gap-8">ASPECT_RATIO: <span className="text-[#4cd7f6]">1.04 [VALID]</span></p>
                      <p className="flex justify-between gap-8">NON_ORTHO: <span className="text-[#4cd7f6]">12.4° [OK]</span></p>
                    </div>
                  </div>

                  {/* Mesh Density Selector Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 h-14 bg-[#1a2330]/90 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center px-6 gap-8 shadow-2xl">
                    <span className="text-[10px] font-bold text-[#e1e2ec]/40 whitespace-nowrap uppercase tracking-[0.3em]">MESH_DENSITY:</span>
                    <div className="flex-1 flex gap-2">
                      {['COARSE', 'MEDIUM', 'FINE', 'ULTRA'].map((d) => (
                        <button 
                          key={d}
                          onClick={() => setMeshDensity(d)}
                          className={`flex-1 h-8 rounded-lg font-mono text-[10px] font-bold tracking-widest transition-all ${
                            meshDensity === d 
                            ? 'bg-[#4cd7f6] text-[#003640] shadow-[0_0_15px_#4cd7f6]' 
                            : 'bg-white/5 text-[#e1e2ec]/40 hover:bg-white/10 hover:text-[#e1e2ec]'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                    <div className="h-6 w-px bg-white/10" />
                    <div className="flex gap-2">
                      <button className="p-2 bg-white/5 border border-white/5 rounded-lg text-[#e1e2ec]/40 hover:text-[#4cd7f6] hover:bg-[#4cd7f6]/10 transition-all">
                        <ZoomIn className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-white/5 border border-white/5 rounded-lg text-[#e1e2ec]/40 hover:text-[#4cd7f6] hover:bg-[#4cd7f6]/10 transition-all">
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex gap-4 h-16">
                <button 
                  onClick={() => handleAction('VALIDATE_MESH')}
                  className="flex-1 bg-[#1a2330]/70 backdrop-blur-xl border border-[#4cd7f6]/30 rounded-2xl flex items-center justify-center gap-4 group hover:bg-[#4cd7f6]/10 transition-all active:scale-[0.98] shadow-2xl shadow-blue-500/5"
                >
                  <CheckSquare className="w-5 h-5 text-[#4cd7f6] group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-bold text-[#e1e2ec] uppercase tracking-[0.4em] group-hover:text-[#4cd7f6]">VALIDATE_MESH</span>
                </button>
                <button 
                  onClick={() => handleAction('EXPORT_SOLVER')}
                  className="flex-1 bg-[#4cd7f6] rounded-2xl flex items-center justify-center gap-4 transition-all hover:bg-[#acedff] active:scale-[0.98] shadow-[0_0_30px_rgba(76,215,246,0.3)] group"
                >
                  <FileUp className="w-5 h-5 text-[#003640] group-hover:translate-x-1 transition-transform" />
                  <span className="text-[11px] font-bold text-[#003640] uppercase tracking-[0.4em]">EXPORT_SOLVER_FILE</span>
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* FAB */}
      <button 
        onClick={() => handleAction('RUN_SIMULATION')}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#4cd7f6] text-[#003640] rounded-full shadow-[0_0_30px_rgba(76,215,246,0.5)] flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-[100] group"
      >
        <Play className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" />
      </button>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(76, 215, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .grid-pattern-small {
          background-image: radial-gradient(#4cd7f6 1px, transparent 0);
          background-size: 20px 20px;
        }
        .grid-pattern-large {
          background-image: linear-gradient(#202B3C 1px, transparent 1px), linear-gradient(90deg, #202B3C 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .scanline {
          background: linear-gradient(to bottom, rgba(76, 215, 246, 0.05) 50%, transparent 50%);
          background-size: 100% 4px;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0b0e15;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #424754;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

const NavItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-6 py-3 cursor-pointer transition-all border-l-2 ${
    active 
    ? 'bg-[#03b5d3]/20 text-[#4cd7f6] border-[#4cd7f6] font-bold shadow-xl' 
    : 'text-[#c2c6d6] border-transparent hover:text-[#e1e2ec] hover:bg-[#32353c]'
  }`}>
    <div className={active ? 'scale-110' : ''}>{icon}</div>
    <span className="text-[12px] font-mono uppercase tracking-widest">{label}</span>
  </div>
);

const PhysicsSlider = ({ label, value, unit, color, isScientific }: any) => (
  <div className="space-y-2 group/slider">
    <div className="flex justify-between items-end px-1">
      <label className="text-[9px] font-bold text-[#8c909f] uppercase tracking-widest group-hover/slider:text-[#adc6ff] transition-colors">{label}</label>
      <span className={`text-[11px] font-mono font-bold text-${color === 'blue' ? '[#adc6ff]' : '[#4cd7f6]'}`}>
        {isScientific ? value.toExponential(3) : value.toFixed(5)} {unit}
      </span>
    </div>
    <div className="relative h-1.5 flex items-center">
      <div className="absolute inset-0 bg-[#32353c] rounded-full border border-white/5" />
      <div 
        className={`absolute inset-y-0 left-0 bg-gradient-to-r from-${color === 'blue' ? '[#005ac2]' : '[#004e5c]'} to-${color === 'blue' ? '[#adc6ff]' : '[#4cd7f6]'} rounded-full shadow-[0_0_10px_rgba(76,215,246,0.3)]`} 
        style={{ width: '65%' }}
      />
      <div className="absolute left-[65%] w-3 h-3 bg-white rounded-full border-2 border-[#4cd7f6] -translate-x-1/2 shadow-xl cursor-pointer hover:scale-125 transition-transform" />
    </div>
  </div>
);

const CoordinateInput = ({ label, value }: any) => (
  <div className="space-y-2 group/input">
    <span className="text-[9px] font-bold text-[#8c909f] uppercase tracking-widest group-hover/input:text-[#adc6ff] transition-colors">{label}</span>
    <div className="relative">
      <input 
        className="w-full bg-[#0b0e15] border border-[#424754] p-2 font-mono text-[#4cd7f6] text-xs rounded-lg focus:border-[#4cd7f6] focus:outline-none focus:ring-1 focus:ring-[#4cd7f6]/30 transition-all" 
        type="number" 
        defaultValue={value.toFixed(2)}
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col -gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
        <ChevronUp className="w-3 h-3 cursor-pointer hover:text-[#4cd7f6]" />
        <ChevronDown className="w-3 h-3 cursor-pointer hover:text-[#4cd7f6]" />
      </div>
    </div>
  </div>
);

export default SimulationConfiguratorEngineeringOS_355f82;
