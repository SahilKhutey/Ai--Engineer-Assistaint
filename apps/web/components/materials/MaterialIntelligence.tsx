'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Database, TrendingDown, Scale, DollarSign, Activity } from 'lucide-react'
import { useEditorStore } from '@/store/useEditorStore'

export default function MaterialIntelligence() {
  const { geometryFeatures, analysisResults } = useEditorStore()
  const [materials, setMaterials] = useState<any[]>([])
  const [selectedMaterial, setSelectedMaterial] = useState<string>('pla')

  useEffect(() => {
    const fetchMaterials = async () => {
      const res = await axios.get('http://localhost:8000/api/materials')
      setMaterials(res.data.materials)
    }
    fetchMaterials()
  }, [])

  if (!geometryFeatures) return null

  return (
    <div className="flex flex-col h-full bg-[#070B14] p-6 border-l border-zinc-800 overflow-y-auto">
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Database size={20} className="text-blue-500" />
          Material Intelligence
        </h2>
        <p className="text-[10px] text-zinc-500 font-mono mt-1 uppercase tracking-widest">Comparative Analysis Engine</p>
      </div>

      <div className="space-y-6">
        {/* Material Selection */}
        <div>
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 block">Primary Material</label>
          <select 
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
            className="w-full bg-[#0B1020] border border-zinc-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-500/50"
          >
            {materials.map(m => (
              <option key={m.id} value={m.id}>{m.name}</option>
            ))}
          </select>
        </div>

        {/* Comparison Table */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Structural Performance</label>
          <div className="grid grid-cols-2 gap-4">
            <div className="technical-card">
              <div className="data-label flex items-center gap-1"><Scale size={10} /> Density</div>
              <div className="data-value">{materials.find(m => m.id === selectedMaterial)?.density_kg_m3} <span className="text-[10px]">kg/m³</span></div>
            </div>
            <div className="technical-card">
              <div className="data-label flex items-center gap-1"><Activity size={10} /> Stiffness</div>
              <div className="data-value">{(materials.find(m => m.id === selectedMaterial)?.youngs_modulus_pa / 1e9).toFixed(1)} <span className="text-[10px]">GPa</span></div>
            </div>
            <div className="technical-card">
              <div className="data-label flex items-center gap-1"><DollarSign size={10} /> Cost Index</div>
              <div className="data-value text-blue-500">x{materials.find(m => m.id === selectedMaterial)?.cost_index}</div>
            </div>
            <div className="technical-card">
              <div className="data-label flex items-center gap-1"><TrendingDown size={10} /> Yield</div>
              <div className="data-value">{(materials.find(m => m.id === selectedMaterial)?.yield_strength_pa / 1e6).toFixed(0)} <span className="text-[10px]">MPa</span></div>
            </div>
          </div>
        </div>

        {/* What-If Analysis */}
        {analysisResults && (
          <div className="mt-10 pt-6 border-t border-zinc-800">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">What-If Simulation</h3>
            <div className="space-y-4">
              {materials.map(m => {
                const currentYield = m.yield_strength_pa / 1e6
                const maxStress = analysisResults.physics?.max_stress_mpa || 0
                const sf = currentYield / maxStress
                const isSafe = sf > 1.2
                
                return (
                  <div key={m.id} className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
                    <div>
                      <div className="text-xs font-medium text-white">{m.name}</div>
                      <div className="text-[10px] text-zinc-500 font-mono">EST_SF: {sf.toFixed(2)}</div>
                    </div>
                    <div className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest ${isSafe ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                      {isSafe ? 'Pass' : 'Fail'}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
