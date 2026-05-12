'use client'
import CADViewer from '../components/CADViewer'
import AIChat from '../components/AIChat'
import { useEngineeringStore } from '../store/useEngineeringStore'
import { Activity, Play, Shield, Zap, Leaf, DollarSign, Users, BarChart2, Radio } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const { analysisResult, isAnalyzing, runAnalysis, initSocket, collaboratorCount } = useEngineeringStore()
  const [selectedMaterial, setSelectedMaterial] = useState('structural_steel')
  const [isLiveTwin, setIsLiveTwin] = useState(false)

  useEffect(() => {
    initSocket()
  }, [initSocket])

  const handleRunSimulation = () => {
    runAnalysis(undefined, selectedMaterial)
  }

  return (
    <main className="h-screen bg-black text-white overflow-hidden font-sans">
      {/* Header */}
      <header className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-950/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <Zap size={18} className="text-white" />
          </div>
          <h1 className="text-lg font-bold tracking-tight">ANTIGRAVITY <span className="text-zinc-500 font-normal">OS</span></h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsLiveTwin(!isLiveTwin)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-[10px] font-bold uppercase tracking-widest ${isLiveTwin ? 'bg-red-500/20 border-red-500/50 text-red-400' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}
          >
            <Radio size={14} className={isLiveTwin ? 'animate-pulse' : ''} />
            {isLiveTwin ? 'Digital Twin: LIVE' : 'Digital Twin: OFF'}
          </button>

          <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
            <Users size={14} className="text-blue-400" />
            <span className="text-[10px] font-mono font-bold text-zinc-400">{collaboratorCount} ACTIVE</span>
          </div>

          <select 
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          >
            {materials.map(m => (
              <option key={m.id} value={m.id}>{m.name}</option>
            ))}
          </select>

          <button 
            onClick={handleRunSimulation}
            disabled={isAnalyzing}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 text-white px-4 py-2 rounded-md transition-all font-medium text-sm"
          >
            {isAnalyzing ? (
              <Activity className="animate-spin" size={16} />
            ) : (
              <Play size={16} fill="currentColor" />
            )}
            {isAnalyzing ? 'Analyzing...' : 'Run Simulation'}
          </button>
        </div>
      </header>

      <div className="grid grid-cols-12 h-[calc(100vh-3.5rem)]">
        {/* Left Sidebar: Metrics */}
        <aside className="col-span-2 border-r border-zinc-800 p-6 bg-zinc-950/30 overflow-y-auto scrollbar-hide">
          <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Structural Insights</h2>
          
          {analysisResult ? (
            <div className="space-y-8">
              {/* Digital Twin Panel */}
              {isLiveTwin && (
                <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg space-y-3">
                   <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-red-400 uppercase tracking-tighter">Live Sensor Feed</span>
                     <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
                   </div>
                   <div>
                     <label className="text-[9px] text-zinc-500 uppercase block mb-1">Measured Strain</label>
                     <div className="text-xl font-mono font-bold text-zinc-200">
                       {analysisResult.twin.measured_stress_mpa.toFixed(1)} <span className="text-xs font-normal text-zinc-500">MPa (EQ)</span>
                     </div>
                   </div>
                   <div>
                     <label className="text-[9px] text-zinc-500 uppercase block mb-1">Est. Cycles to Failure</label>
                     <div className="text-lg font-mono font-bold text-blue-400">
                       {analysisResult.twin.prediction_to_failure_cycles.toLocaleString()}
                     </div>
                   </div>
                </div>
              )}

              <div>
                <label className="text-xs text-zinc-400 block mb-1">Safety Factor</label>
                <div className={`text-2xl font-mono font-bold ${analysisResult.physics.safety_factor > 1.5 ? 'text-green-400' : 'text-red-400'}`}>
                  {analysisResult.physics.safety_factor.toFixed(2)}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800">
                <h3 className="text-[10px] font-bold text-zinc-500 uppercase mb-4 tracking-widest">Sustainability (LCA)</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Leaf size={14} className="text-green-500" />
                      <span className="text-xs">CO2 Footprint</span>
                    </div>
                    <span className="text-sm font-mono font-bold text-zinc-200">{analysisResult.lca.co2_footprint_kg.toFixed(2)}kg</span>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg border flex items-center gap-3 ${analysisResult.verification.overall_status === 'CERTIFIED' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                <Shield size={20} />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-zinc-500">System Status</span>
                  <span className="text-sm font-bold uppercase tracking-tight">{analysisResult.verification.overall_status}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-sm text-zinc-600 italic">
              Select material and run analysis to generate insights.
            </div>
          )}
        </aside>

        {/* Center: CAD Workspace */}
        <section className="col-span-7 relative bg-zinc-950">
          <div className="absolute top-6 left-6 z-10">
             <div className="bg-zinc-900/80 backdrop-blur border border-zinc-800 p-4 rounded-xl w-64 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart2 size={14} className="text-blue-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Pareto Front Explorer</span>
                </div>
                {analysisResult?.pareto && (
                  <div className="h-32 w-full bg-black/50 rounded-lg border border-zinc-800 relative overflow-hidden p-2">
                     {analysisResult.pareto.map((v: any) => (
                       <div key={v.id} className={`absolute w-2 h-2 rounded-full cursor-pointer transition-all ${v.is_selected ? 'bg-blue-500' : 'bg-zinc-700'}`} style={{ left: `${(v.weight_kg / 100) * 80}%`, bottom: `${(v.safety_factor / 5) * 80}%` }} />
                     ))}
                  </div>
                )}
             </div>
          </div>
          <CADViewer />
        </section>

        {/* Right Sidebar: AI Assistant */}
        <aside className="col-span-3 border-l border-zinc-800 bg-zinc-950/30">
          <AIChat />
        </aside>
      </div>
    </main>
  )
}

const materials = [
    { id: 'structural_steel', name: 'Structural Steel' },
    { id: 'aluminum_6061', name: 'Aluminum 6061' },
    { id: 'titanium_grade_5', name: 'Titanium Grade 5' },
    { id: 'carbon_fiber_composite', name: 'Carbon Fiber' }
]
