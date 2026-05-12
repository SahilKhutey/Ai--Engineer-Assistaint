'use client'
import { useEngineeringStore } from '../store/useEngineeringStore'
import { MessageSquare, Terminal, Mic, MicOff } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function AIChat() {
  const { analysisResult, isAnalyzing, runAnalysis, isListening, setIsListening } = useEngineeringStore()
  const [recognition, setRecognition] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).webkitSpeechRecognition) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition
      const rec = new SpeechRecognition()
      rec.continuous = false
      rec.interimResults = false
      rec.lang = 'en-US'

      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        console.log("Voice Command:", transcript)
        runAnalysis(transcript)
        setIsListening(false)
      }

      rec.onerror = () => setIsListening(false)
      rec.onend = () => setIsListening(false)

      setRecognition(rec)
    }
  }, [runAnalysis, setIsListening])

  const toggleListening = () => {
    if (isListening) {
      recognition?.stop()
    } else {
      setIsListening(true)
      recognition?.start()
    }
  }

  return (
    <div className="flex flex-col h-full bg-zinc-950/50 backdrop-blur-xl">
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare size={16} className="text-blue-500" />
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            Engineering Intel
          </h2>
        </div>
        <div className="flex items-center gap-1">
          <div className={`w-1.5 h-1.5 rounded-full ${isAnalyzing ? 'bg-blue-500 animate-pulse' : 'bg-zinc-700'}`} />
          <span className="text-[9px] font-mono text-zinc-600">L3_SOLVER_ACTIVE</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {isAnalyzing ? (
          <div className="space-y-3">
            <div className="h-3 w-full bg-zinc-900 rounded-full animate-pulse" />
            <div className="h-3 w-[90%] bg-zinc-900 rounded-full animate-pulse" />
            <div className="h-3 w-[40%] bg-zinc-900 rounded-full animate-pulse" />
          </div>
        ) : analysisResult ? (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <div className="flex items-center gap-2 mb-2">
               <Terminal size={12} className="text-zinc-500" />
               <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Analysis Report</span>
             </div>
             <div className="text-sm leading-relaxed text-zinc-300 font-light border-l-2 border-blue-600/30 pl-4 py-1">
              {analysisResult.reasoning}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-zinc-700 text-center px-10">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full" />
              <Terminal size={40} className="relative opacity-20" />
            </div>
            <p className="text-[10px] uppercase tracking-widest font-bold mb-2">System Idle</p>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Waiting for structural input or voice command...
            </p>
          </div>
        )}
      </div>

      <div className="p-4 bg-zinc-950/80 border-t border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="flex-1 relative group">
            <input 
              type="text" 
              placeholder="Query design parameters..."
              className="w-full bg-zinc-900/50 border border-zinc-800/50 rounded-lg py-2.5 px-4 text-xs focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-zinc-700"
            />
            <div className="absolute right-3 top-2.5">
               <kbd className="text-[9px] bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-700">ENTER</kbd>
            </div>
          </div>
          
          <button 
            onClick={toggleListening}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${isListening ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'}`}
          >
            {isListening ? <MicOff size={18} /> : <Mic size={18} />}
          </button>
        </div>
      </div>
    </div>
  )
}
