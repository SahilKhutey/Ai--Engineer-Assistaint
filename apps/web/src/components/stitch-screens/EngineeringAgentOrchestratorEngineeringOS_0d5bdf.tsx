'use client';


import {
  Terminal,
  Settings,
  Activity,
  Brain,
  BarChart3,
  Workflow,
  History,
  HardDrive,
  Zap,
  FlaskConical,
  Sparkles,
  Plus,
  Play,
  Power,
  LayoutGrid,
  Waves,
  Cpu,
  Factory,
  Rocket,
  Thermometer,
  Code,
  RefreshCw,
  Wind} from 'lucide-react';
import React from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * EngineeringAgentOrchestrator v3.2 (Phase 55 Hardened)
 * 
 * The central Terminal for multi-agent coordination within the Engineering OS.
 * Real-time Activity of agent health, confidence, and shared reasoning traces.
 */
const EngineeringAgentOrchestratorEngineeringOS_0d5bdf = () => {
  const { 
    orchestrationState, 
    reasoningTrace, 
    osStatus,
    pushEvent,
    addNotification
  } = useEngineeringStore();

  const {
    agents = [
      { id: 'AGENT_01', name: 'Structural_Agent', status: 'Analyzing Fatigue Patterns', confidence: 0.98, icon: <LayoutGrid /> },
      { id: 'AGENT_02', name: 'CFD_Agent', status: 'Optimizing Boundary Layers', confidence: 0.94, icon: <Wind /> },
      { id: 'AGENT_03', name: 'Thermal_Agent', status: 'IDLE - Awaiting Load Case', confidence: 0, icon: <Thermometer /> },
      { id: 'AGENT_04', name: 'Manufacturing_Agent', status: 'Validating Toolpaths', confidence: 0.96, icon: <Factory /> }
    ],
    syncStatus = 'ACTIVE'
  } = orchestrationState || {};

  const handleAssignMission = () => {
    pushEvent?.('MISSION_ASSIGNED', { missionId: 'ALPHA_SYNCH_01', timestamp: Date.now() });
    addNotification?.({
      title: 'MISSION_ASSIGNED',
      message: 'New orchestration protocol initiated for all active agents.',
      type: 'INFO',
      domain: 'WORKFLOW'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-8 flex justify-between items-center bg-black/60 backdrop-blur-xl border-b border-white/5 z-50 shrink-0">
         <div className="flex items-center gap-4">
            <Code className="text-[#adc6ff] w-5 h-5" />
            <span className="font-mono text-[18px] text-[#adc6ff] uppercase tracking-tighter font-black italic">ENGINEERING_OS // ORCHESTRATOR</span>
         </div>
         <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8 font-mono text-[11px] font-bold text-white/40 uppercase tracking-widest">
               <span className="hover:text-white cursor-pointer transition-colors">PROJECTS</span>
               <span className="hover:text-white cursor-pointer transition-colors">SIMULATIONS</span>
               <span className="text-[#4cd7f6] font-black border-b-2 border-[#4cd7f6] pb-1">AI_AGENTS</span>
               <span className="hover:text-white cursor-pointer transition-colors">MANUFACTURING</span>
            </nav>
            <div className="px-3 py-1 bg-[#adc6ff]/5 border border-[#adc6ff]/20 rounded font-mono text-[10px] text-[#adc6ff] font-bold tracking-widest">
               GPU: {(osStatus?.kernelLoad || 74.2).toFixed(1)}% | SIM: ACTIVE
            </div>
         </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
         
         {/* 2. SIDE NAVIGATION */}
         <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl flex flex-col hidden md:flex shrink-0">
            <div className="p-6 border-b border-white/5">
               <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM_CORE</span>
            </div>
            <nav className="flex-1 py-4 flex flex-col gap-1">
               <SideNavItem icon={<Terminal />} label="Projects" />
               <SideNavItem icon={<FlaskConical />} label="Simulations" />
               <SideNavItem icon={<Cpu />} label="AI Agents" active />
               <SideNavItem icon={<Factory />} label="Digital Twin" />
               <SideNavItem icon={<Rocket />} label="Manufacturing" />
            </nav>
         </aside>

         {/* 3. MAIN WORKSPACE */}
         <main className="flex-1 p-8 overflow-y-auto custom-scrollbar bg-black/20 relative">
            
            {/* Orchestration RefreshCw Status */}
            <section className="mb-8">
               <div className="bg-black/40 p-4 border border-white/5 rounded-2xl flex items-center justify-between shadow-2xl backdrop-blur-3xl">
                  <div className="flex items-center gap-4">
                     <div className="relative flex h-3 w-3">
                        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75" />
                        <div className="relative inline-flex rounded-full h-3 w-3 bg-[#4cd7f6]" />
                     </div>
                     <h2 className="font-mono text-[18px] font-black uppercase tracking-widest text-white/80">COORDINATION_SYNC: {syncStatus}</h2>
                  </div>
                  <div className="flex gap-4">
                     <button 
                        onClick={handleAssignMission}
                        className="px-6 py-2 bg-[#4cd7f6] text-black font-black text-[10px] uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_#4cd7f6] active:scale-95 transition-all"
                     >
                        ASSIGN_MISSION
                     </button>
                     <button className="px-6 py-2 border border-white/10 text-white/40 font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all">
                        REBOOT_AGENT_CORES
                     </button>
                  </div>
               </div>
            </section>

            {/* Agent Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
               {agents.map((agent: any) => (
                  <AgentCard key={agent.id} id={agent.id} name={agent.name} status={agent.status} confidence={agent.confidence} icon={agent.icon} />
               ))}
            </section>

            {/* Bottom Section: Trace & Visualization */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
               
               {/* Shared Reasoning Trace */}
               <section className="lg:col-span-2 border border-white/5 bg-black/40 rounded-3xl flex flex-col shadow-2xl overflow-hidden backdrop-blur-3xl">
                  <div className="px-8 py-4 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                     <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">SHARED_REASONING_TRACE</span>
                     <span className="text-[10px] font-black text-[#4cd7f6] uppercase tracking-widest animate-pulse">REAL_TIME_FEED</span>
                  </div>
                  <div className="p-8 space-y-4 font-mono text-[12px] h-[400px] overflow-y-auto custom-scrollbar">
                     {reasoningTrace.length > 0 ? [...reasoningTrace].reverse().map((trace, i) => (
                        <TraceItem key={i} timestamp={new Date(trace.timestamp).toLocaleTimeString()} agent={trace.agent} thought={trace.thought} />
                     )) : (
                        <div className="h-full flex flex-col items-center justify-center text-white/5 gap-4">
                           <RefreshCw className="w-12 h-12 animate-spin" />
                           <span className="text-[10px] font-black uppercase tracking-[0.4em]">WAITING_FOR_AGENT_COGNITION...</span>
                        </div>
                     )}
                     <div className="animate-pulse flex gap-4 items-start text-white/20">
                        <span className="shrink-0">[{new Date().toLocaleTimeString()}]</span>
                        <span>_</span>
                     </div>
                  </div>
                  <div className="p-4 bg-white/[0.02] border-t border-white/5">
                     <button className="w-full text-[10px] font-black text-[#4cd7f6] uppercase tracking-[0.3em] hover:bg-white/5 p-2 rounded-xl transition-all text-left px-6">
                        VIEW_MULTI_AGENT_CONSENSUS
                     </button>
                  </div>
               </section>

               {/* Mission Visualization */}
               <section className="border border-white/5 bg-black/40 rounded-3xl flex flex-col shadow-2xl overflow-hidden backdrop-blur-3xl">
                  <div className="px-8 py-4 bg-white/[0.02] border-b border-white/5 flex items-center">
                     <span className="text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">MISSION_VISUALIZATION</span>
                  </div>
                  <div className="flex-1 relative overflow-hidden group">
                     <img 
                        alt="Mission Visualization" 
                        className="w-full h-full object-cover opacity-40 mix-blend-screen transition-transform duration-[20000ms] group-hover:scale-125" 
                        src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuA2LtN4VFhifLRzyc_PuAJxqvgYm78FI7EcVk6Tzd1FQPy7dpEbdTnlNWLNMHkms42YgTqNChPfZPs-zNAN7xk_e1y1LlxkM2hb6RWyFukZo4F6vQVYFVarQuQh_XhqMiZdq98ZXD-MlZ-sJJtNLLy40u_RhoQXAzMy6N9ZRTwa3jffEGDUBQgPZPMPoSEPj3ww1IWngwEUIRSLG6iZY_c-BTzV3e88m0HagD-dMMplmOjh6GaaGGu7Z0TBcs94feyLzTUtBl4CN0Sf" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                     <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="bg-black/60 p-6 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
                           <span className="block text-[10px] font-black text-[#4cd7f6] uppercase tracking-widest mb-2">SIMULATION_TARGET</span>
                           <span className="font-mono text-[16px] font-black text-white uppercase tracking-tight">FUSELAGE_STRESS_TEST_V4.2</span>
                        </div>
                     </div>
                  </div>
               </section>

            </div>

         </main>
      </div>

      <style jsx>{`
         .scanline-overlay {
            background: linear-gradient(to bottom, transparent 50%, rgba(76, 215, 246, 0.05) 50%);
            background-size: 100% 4px;
         }
      `}</style>
    </div>
  );
};

const SideNavItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-4 px-6 py-4 transition-all cursor-pointer group ${active ? 'bg-[#4cd7f6]/10 text-[#4cd7f6] border-l-4 border-[#4cd7f6]' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
     <div className="group-hover:scale-110 transition-transform">{icon}</div>
     <span className="text-[12px] font-black uppercase tracking-widest">{label}</span>
  </div>
);

const AgentCard = ({ id, name, status, confidence, icon }: any) => (
  <div className={`p-6 bg-black/40 border border-white/5 rounded-3xl flex flex-col gap-4 relative group hover:bg-white/[0.02] transition-all shadow-2xl backdrop-blur-3xl ${confidence === 0 ? 'opacity-40' : 'opacity-100'}`}>
     <div className="flex justify-between items-start">
        <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{id}</span>
        <div className={`text-[#4cd7f6] transition-transform group-hover:scale-110`}>{icon}</div>
     </div>
     <h3 className="font-mono text-[18px] font-black text-[#4cd7f6] uppercase tracking-tight">{name}</h3>
     <div className="space-y-2">
        <div className="flex justify-between text-[11px] font-mono">
           <span className="text-white/40">Status</span>
           <span className="text-[#4cd7f6] text-right truncate pl-4">{status}</span>
        </div>
        <div className="flex justify-between text-[11px] font-mono">
           <span className="text-white/40">Confidence</span>
           <span className="text-[#4cd7f6] font-black">{(confidence * 100).toFixed(0)}%</span>
        </div>
     </div>
     <div className="w-full bg-white/5 h-[2px] rounded-full overflow-hidden">
        <div className="bg-[#4cd7f6] h-full shadow-[0_0_8px_#4cd7f6] transition-all duration-1000" style={{ width: `${confidence * 100}%` }} />
     </div>
  </div>
);

const TraceItem = ({ timestamp, agent, thought }: any) => (
  <div className="flex gap-6 items-start group">
     <span className="text-white/20 shrink-0 font-mono">[{timestamp}]</span>
     <span className="text-[#4cd7f6] font-black uppercase tracking-widest shrink-0">{agent}:</span>
     <span className="text-white/80 italic leading-relaxed font-medium">"{thought}"</span>
  </div>
);

export default EngineeringAgentOrchestratorEngineeringOS_0d5bdf;
