'use client'

import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { Send, Bot, User, ShieldCheck, AlertTriangle, Info } from 'lucide-react'
import { useEditorStore } from '@/store/useEditorStore'

export default function ChatInterface() {
  const { geometryFeatures, setAnalysisResults, analysisResults } = useEditorStore()
  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || !geometryFeatures) return

    const userMsg = { role: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await axios.post('http://localhost:8000/api/analyze', {
        material_id: 'pla_standard', // Defaulting for MVP
        load_newtons: 200,           // Defaulting for MVP
        geometry_data: geometryFeatures,
        query: input
      })

      const botMsg = { 
        role: 'bot', 
        text: res.data.analysis,
        physics: res.data.physics,
        rules: res.data.rules_triggered
      }
      setMessages(prev => [...prev, botMsg])
      setAnalysisResults(res.data)
    } catch (err) {
      console.error('Analysis failed', err)
      setMessages(prev => [...prev, { role: 'bot', text: 'Error: Could not perform structural analysis.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleDownloadReport = async () => {
    if (!analysisResults) return
    try {
      const res = await axios.post('http://localhost:8000/api/report/generate', {
        analysis_data: analysisResults.symbolic_analysis,
        filename: `report_${Date.now()}`
      })
      window.open(res.data.report_url, '_blank')
    } catch (err) {
      console.error('Report generation failed', err)
    }
  }

  return (
    <div className="flex flex-col h-full bg-[#070B14]">
      {/* Header */}
      <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-[#0B1020]">
        <div>
          <h2 className="font-semibold text-white">Engineering Reasoning</h2>
          <p className="text-[10px] text-zinc-500 font-mono">HYBRID_AI_ACTIVE | PHYSICS_GROUNDED</p>
        </div>
        <div className="flex gap-4 items-center">
          {analysisResults && (
            <button 
              onClick={handleDownloadReport}
              className="text-[10px] font-bold text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-widest border border-blue-500/30 px-2 py-1 rounded"
            >
              Export PDF
            </button>
          )}
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-hide">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50">
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <Bot className="text-zinc-400" />
            </div>
            <p className="text-sm text-zinc-500 max-w-[200px]">
              Upload a model and ask about its structural integrity.
            </p>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] p-4 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-white text-black font-medium' 
                : 'bg-zinc-900 border border-zinc-800 text-zinc-300'
            }`}>
              {m.role === 'bot' && (
                <div className="flex items-center gap-2 mb-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                   <Bot size={12} />
                   System Insight
                </div>
              )}
              <div className="whitespace-pre-wrap leading-relaxed">{m.text}</div>
              
              {m.physics && (
                <div className="mt-4 pt-4 border-t border-zinc-800 grid grid-cols-2 gap-4">
                  <div className="p-3 bg-black/50 rounded-lg border border-zinc-800">
                    <div className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Safety Factor</div>
                    <div className={`text-lg font-bold ${m.physics.safety_factor < 1 ? 'text-red-500' : 'text-green-500'}`}>
                      {m.physics.safety_factor.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-3 bg-black/50 rounded-lg border border-zinc-800">
                    <div className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Max Stress</div>
                    <div className="text-lg font-bold text-white">
                      {m.physics.max_stress_mpa.toFixed(1)} <span className="text-xs font-normal text-zinc-500">MPa</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
              <span className="text-xs text-zinc-500 font-mono">SIMULATING_PHYSICS...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-6 border-t border-zinc-800 bg-[#0B1020]">
        {!geometryFeatures && (
          <div className="mb-4 text-[10px] text-amber-500 font-bold uppercase tracking-widest flex items-center gap-2">
            <AlertTriangle size={12} />
            No Geometry Detected - Upload CAD to enable analysis
          </div>
        )}
        <div className="relative group">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={!geometryFeatures || loading}
            placeholder={geometryFeatures ? "Ask about structural integrity..." : "Waiting for CAD upload..."} 
            className="w-full bg-[#070B14] border border-zinc-800 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all disabled:opacity-50"
          />
          <button 
            onClick={handleSend}
            disabled={!geometryFeatures || loading || !input.trim()}
            className="absolute right-3 top-3 p-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-30"
          >
            <Send size={18} />
          </button>
        </div>
        <div className="mt-4 flex gap-4 text-[10px] text-zinc-600 font-mono">
          <div className="flex items-center gap-1"><ShieldCheck size={10} /> PHYSICS_VALIDATED</div>
          <div className="flex items-center gap-1"><Info size={10} /> ML_RISK_CALIBRATED</div>
        </div>
      </div>
    </div>
  )
}
