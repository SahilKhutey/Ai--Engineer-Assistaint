import { create } from 'zustand'

interface EngineeringState {
  analysisResult: any | null
  isAnalyzing: boolean
  isListening: boolean
  collaboratorCount: number
  socket: WebSocket | null
  setAnalysisResult: (result: any) => void
  setIsAnalyzing: (status: boolean) => void
  setIsListening: (status: boolean) => void
  initSocket: () => void
  runAnalysis: (query?: string, materialId?: string) => Promise<void>
  speak: (text: string) => void
}

export const useEngineeringStore = create<EngineeringState>((set, get) => ({
  analysisResult: null,
  isAnalyzing: false,
  isListening: false,
  collaboratorCount: 1,
  socket: null,

  setAnalysisResult: (result) => set({ analysisResult: result }),
  setIsAnalyzing: (status) => set({ isAnalyzing: status }),
  setIsListening: (status) => set({ isListening: status }),
  
  initSocket: () => {
    if (get().socket) return

    const ws = new WebSocket('ws://localhost:8000/ws/engineering')
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      
      if (data.type === 'ANALYSIS_COMPLETE') {
        set({ analysisResult: data.payload, isAnalyzing: false })
        if (data.payload.voice_payload?.spoken_text) {
          get().speak(data.payload.voice_payload.spoken_text)
        }
      } else if (data.type === 'USER_JOINED' || data.type === 'USER_LEFT') {
        set({ collaboratorCount: data.count })
      }
    }

    ws.onclose = () => {
      console.log("Socket closed. Reconnecting...")
      setTimeout(() => get().initSocket(), 3000)
    }

    set({ socket: ws })
  },

  runAnalysis: async (query, materialId = 'structural_steel') => {
    set({ isAnalyzing: true })
    try {
      await fetch('http://localhost:8000/api/analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question: query || "Run structural analysis", 
          pitch_mm: 10.0,
          material_id: materialId
        })
      })
      // No polling needed now! WebSocket will push the result.
    } catch (error) {
      console.error("Analysis trigger failed:", error)
      set({ isAnalyzing: false })
    }
  },

  speak: (text) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.pitch = 1.0
      utterance.rate = 1.0
      utterance.volume = 0.8
      window.speechSynthesis.speak(utterance)
    }
  }
}))
