'use client';

import React, { useState, useEffect } from 'react';
import EngineeringViewer from '../src/components/EngineeringViewer';
import TelemetryDashboard from '../src/components/TelemetryDashboard';
import DesignTimeline from '../src/components/DesignTimeline';
import AssemblyDashboard from '../src/components/AssemblyDashboard';

export default function EngineeringCockpit() {
  const [synthesisData, setSynthesisData] = useState<any>(null);
  const [status, setStatus] = useState('SYSTEM_IDLE');
  
  // Mock Data for Initial Load
  useEffect(() => {
    setSynthesisData({
      status: 'NOMINAL',
      global_confidence: 0.94,
      reports: {
        structural: { results: { safety_factor: 2.1 } }
      }
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 p-4 font-mono selection:bg-cyan-500/30">
      {/* 1. GLOBAL NAVIGATION & STATUS */}
      <nav className="flex items-center justify-between mb-6 px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(8,145,178,0.4)]">
            <span className="text-white font-black text-xl italic">A</span>
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-[0.3em] uppercase text-slate-100">Antigravity OS</h1>
            <p className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest animate-pulse">Engineering Intelligence Active</p>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-slate-500 text-[8px] uppercase font-bold">Orchestrator Status</span>
            <span className="text-xs text-emerald-400 font-bold tracking-widest">{status}</span>
          </div>
          <div className="h-8 w-[1px] bg-slate-800"></div>
          <button className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-cyan-500 hover:text-white transition-all">
            Deploy Cluster
          </button>
        </div>
      </nav>

      {/* 2. MAIN COCKPIT LAYOUT */}
      <div className="grid grid-cols-12 gap-6 h-[calc(100vh-160px)]">
        
        {/* LEFT COLUMN: Intelligence & History */}
        <div className="col-span-12 lg:col-span-3 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
          <DesignTimeline history={[
            { id: 'CHKP_01', author: 'S.KHUTEY', timestamp: new Date().toISOString(), status: 'COMPLIANT', synthesis_summary: 'Initial structural optimization of drone frame.' },
            { id: 'CHKP_02', author: 'AI_AGENT', timestamp: new Date().toISOString(), status: 'COMPLIANT', synthesis_summary: 'Generative refinement of primary webbing for 12% mass reduction.' }
          ]} />
          
          <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-md">
            <h3 className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">Core Constraints</h3>
            <div className="space-y-4">
              {[
                { label: 'Min Safety Factor', val: '1.5', unit: 'FoS' },
                { label: 'Max Mass Target', val: '0.85', unit: 'kg' },
                { label: 'Thermal Limit', val: '400', unit: '°C' }
              ].map(c => (
                <div key={c.label} className="flex justify-between items-end border-b border-slate-800/50 pb-2">
                  <span className="text-slate-500 text-[10px] font-bold uppercase">{c.label}</span>
                  <span className="text-cyan-400 text-xs font-bold">{c.val} <span className="text-[8px] text-slate-600">{c.unit}</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Spatial Workspace */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
          <div className="flex-grow">
            <EngineeringViewer data={synthesisData} />
          </div>
          
          {/* Natural Language Intent Console */}
          <div className="h-24 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 focus-within:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-cyan-500">
               <span className="text-lg font-bold">/</span>
            </div>
            <input 
              type="text" 
              placeholder="ENTER ENGINEERING INTENT (e.g. 'Optimize the bracket for 500N vertical load using Aluminum 6061')"
              className="flex-grow bg-transparent border-none outline-none text-slate-200 font-mono text-sm placeholder:text-slate-600"
            />
            <button className="px-6 py-3 bg-cyan-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-cyan-500 shadow-lg shadow-cyan-900/20 transition-all">
              Execute
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Telemetry & Fleet */}
        <div className="col-span-12 lg:col-span-3 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
          <TelemetryDashboard workers={[
            { id: 'NODE_ALPHA', task: 'FEM_SOLVER', load: 84, memory: '12.4GB', status: 'BUSY' },
            { id: 'NODE_BETA', task: 'IDLE', load: 2, memory: '1.1GB', status: 'IDLE' }
          ]} />
          
          <AssemblyDashboard assembly={[
            { id: 'PART_01', name: 'Main Rotor Hub', type: 'Primary Structural', fused_strain: 0.00014, rul_pct: 92, status: 'NOMINAL' },
            { id: 'PART_02', name: 'Battery Rack', type: 'Support Frame', fused_strain: 0.00008, rul_pct: 98, status: 'NOMINAL' }
          ]} />
        </div>

      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #334155; }
      `}</style>
    </main>
  );
}
