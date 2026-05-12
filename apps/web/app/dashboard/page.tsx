import ChatInterface from '@/components/chat/ChatInterface'
import MaterialIntelligence from '@/components/materials/MaterialIntelligence'
import VoiceAssistant from '../../components/chat/VoiceAssistant'
import CADViewer from '@/components/viewer/CADViewer'
import CADUploader from '@/components/upload/CADUploader'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#0B1020] text-white overflow-hidden">
      {/* Navigation Sidebar */}
      <aside className="w-[250px] border-r border-zinc-800 p-6 flex flex-col bg-[#070B14]">
        <div className="text-xl font-bold mb-10 flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black text-sm">AE</div>
          Assistant
        </div>
        
        <nav className="flex-1 space-y-4">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Active Model</div>
          <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 cursor-pointer hover:border-zinc-600 transition-all flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-blue-500"></div>
             Bracket_V1.stl
          </div>
        </nav>

        <div className="mt-auto p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
           <CADUploader />
        </div>
      </aside>

      {/* Main CAD Viewer */}
      <main className="flex-1 relative bg-black border-r border-zinc-800">
        <div className="absolute top-6 left-6 z-10 p-3 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 text-xs font-mono text-zinc-400">
          VIEWPORT: STRESS_ANALYSIS_READY
        </div>
        <CADViewer />
      </main>

      {/* Material Intelligence Panel */}
      <aside className="w-[350px] border-r border-zinc-800">
        <MaterialIntelligence />
      </aside>

      {/* AI Engineering Chat */}
      <section className="w-[400px] flex flex-col bg-[#070B14]">
        <ChatInterface />
      </section>

      <VoiceAssistant />
    </div>
  )
}
