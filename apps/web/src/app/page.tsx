"use client";

import React, { useState } from 'react';
import EngineeringViewer from '@/components/EngineeringViewer';
import ChatInterface from '@/components/ChatInterface';
import Sidebar from '@/components/Sidebar';
import { Settings, Share2, Cpu, Maximize2, Layers } from 'lucide-react';

export default function Dashboard() {
  const [activeModel, setActiveModel] = useState<string | undefined>(undefined);

  return (
    <main className="flex flex-col h-screen w-screen overflow-hidden bg-[var(--background)] eng-grid text-[var(--foreground)]">
      
      {/* 1. Top Navigation */}
      <header className="h-12 border-b border-[var(--border)] bg-[var(--background)] flex items-center justify-between px-4 z-30">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[var(--ai-action)] rounded flex items-center justify-center font-bold text-xs shadow-[0_0_10px_rgba(124,92,255,0.4)]">E</div>
            <h1 className="text-xs font-bold uppercase tracking-wider">Engineering Assistant</h1>
          </div>
          <div className="h-4 w-px bg-[var(--border)] mx-2" />
          <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--foreground-secondary)]">
            <span className="hover:text-[var(--ai-action)] cursor-pointer transition-colors">PROJECT: DRONE_FRAME_V2</span>
            <span className="text-[var(--border)]">/</span>
            <span className="text-[var(--foreground)]">BRACKET_ANALYSIS</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded text-[10px] font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--safe)]"></div>
            SOLVER_IDLE
          </div>
          <button className="flex items-center gap-2 px-3 py-1 bg-[var(--ai-action)] hover:bg-[#6c48ff] rounded text-[10px] font-bold transition-all shadow-[0_0_15px_rgba(124,92,255,0.2)]">
            <Share2 size={12} />
            EXPORT_PDF
          </button>
          <button className="p-1.5 hover:bg-white/5 rounded transition-colors text-[var(--foreground-secondary)]">
            <Settings size={16} />
          </button>
        </div>
      </header>

      {/* 2. Main Content Area (Sidebar + Main Workspace) */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Workspace (Vertical stack of 3D Viewer and Chat) */}
        <div className="flex-1 flex flex-col relative overflow-hidden">
          
          {/* Main Canvas (3D Viewer) */}
          <section className="flex-1 relative">
            <EngineeringViewer modelUrl={activeModel} />
            
            {/* View Controls Floating Panel */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
              <div className="glass-panel p-2 rounded flex flex-col gap-2">
                <button title="Maximize" className="p-1.5 hover:bg-white/10 rounded transition-colors"><Maximize2 size={14}/></button>
                <button title="Layers" className="p-1.5 hover:bg-white/10 rounded transition-colors"><Layers size={14}/></button>
              </div>
            </div>

            {/* Geometry Info Floating Card */}
            <div className="absolute bottom-4 left-4 z-20 bg-[var(--surface)]/80 backdrop-blur-md border border-[var(--border)] p-3 rounded-lg w-56 font-mono">
              <h3 className="text-[9px] text-[var(--foreground-secondary)] mb-2 uppercase flex items-center gap-2">
                <Cpu size={10} /> Active Geometry
              </h3>
              <div className="space-y-1 text-[10px]">
                <div className="flex justify-between"><span>X_BREADTH</span> <span className="text-[var(--simulation)]">142.20 mm</span></div>
                <div className="flex justify-between"><span>Y_HEIGHT</span> <span className="text-[var(--simulation)]">48.50 mm</span></div>
                <div className="flex justify-between"><span>Z_DEPTH</span> <span className="text-[var(--simulation)]">12.00 mm</span></div>
                <div className="h-px bg-[var(--border)] my-1" />
                <div className="flex justify-between"><span>VOLUME</span> <span className="text-[var(--simulation)]">124.5 cm³</span></div>
              </div>
            </div>
          </section>

          {/* Bottom Panel (AI Chat) */}
          <section className="h-[35%] border-t border-[var(--border)] bg-[var(--background-secondary)]/50 backdrop-blur-lg flex overflow-hidden">
            <div className="flex-1 min-w-0 p-4 overflow-hidden">
               <ChatInterface />
            </div>
            {/* Analysis Summary (Right side of bottom panel) */}
            <div className="w-80 border-l border-[var(--border)] p-4 bg-black/10 overflow-y-auto">
              <h4 className="text-[9px] font-bold text-[var(--foreground-secondary)] uppercase tracking-widest mb-4">Risk Summary</h4>
              <div className="space-y-3">
                <div className="p-3 rounded bg-[var(--critical)]/10 border border-[var(--critical)]/20">
                  <p className="text-[10px] text-[var(--critical)] font-bold mb-1">HIGH STRESS AT MOUNTING_HOLE_A</p>
                  <p className="text-[9px] text-[var(--foreground-secondary)] leading-tight">Predicted stress exceeds yield strength of Aluminum 6061 near the bolted connection.</p>
                </div>
                <div className="p-3 rounded bg-[var(--warning)]/10 border border-[var(--warning)]/20">
                  <p className="text-[10px] text-[var(--warning)] font-bold mb-1">THIN WALL DETECTED</p>
                  <p className="text-[9px] text-[var(--foreground-secondary)] leading-tight">Rib thickness (2mm) may cause buckling under lateral load.</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="h-6 border-t border-[var(--border)] bg-[var(--background)] flex items-center justify-between px-4 text-[9px] font-mono text-[var(--foreground-secondary)]/40 z-30">
        <div>COORDINATES: METRIC_MM</div>
        <div className="flex gap-4">
          <span>LATENCY: 85ms</span>
          <span>SOLVER: HYBRID_REASONING_ENGINE_V2</span>
          <span>THROUGHPUT: 1.2 GB/s</span>
        </div>
      </footer>
    </main>
  );
}
