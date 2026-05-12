"use client";

import React from 'react';
import { FileCode, Activity, PlayCircle, Database, Package, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 flex flex-col bg-[var(--background-secondary)] border-r border-[var(--border)]">
      {/* Section: Project Files */}
      <div className="p-4 border-b border-[var(--border)]">
        <h3 className="text-[10px] font-bold text-[var(--foreground-secondary)] uppercase tracking-widest mb-4 flex items-center justify-between">
          Project Files
          <span className="text-[var(--ai-action)] hover:cursor-pointer">+</span>
        </h3>
        <div className="space-y-1">
          <div className="flex items-center gap-2 p-2 rounded-md bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--foreground)]">
            <FileCode size={14} className="text-blue-400" />
            <span className="truncate">bracket_v2.stl</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-md hover:bg-white/5 text-xs text-[var(--foreground-secondary)] transition-colors cursor-pointer">
            <FileCode size={14} />
            <span className="truncate">base_plate.step</span>
          </div>
        </div>
      </div>

      {/* Section: Analysis Tools */}
      <div className="p-4 border-b border-[var(--border)]">
        <h3 className="text-[10px] font-bold text-[var(--foreground-secondary)] uppercase tracking-widest mb-4">Analysis Tools</h3>
        <div className="space-y-1">
          <button className="w-full flex items-center justify-between p-2 rounded-md bg-[var(--ai-action)]/10 border border-[var(--ai-action)]/30 text-xs text-[var(--ai-action)] text-left">
            <div className="flex items-center gap-2">
              <Activity size={14} />
              <span>Structural</span>
            </div>
            <ChevronRight size={12} />
          </button>
          <button className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-white/5 text-xs text-[var(--foreground-secondary)] text-left transition-colors">
            <Package size={14} />
            <span>Manufacturability</span>
          </button>
          <button className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-white/5 text-xs text-[var(--foreground-secondary)] text-left transition-colors">
            <Database size={14} />
            <span>Materials Lib</span>
          </button>
        </div>
      </div>

      {/* Section: Simulations */}
      <div className="p-4 flex-1">
        <h3 className="text-[10px] font-bold text-[var(--foreground-secondary)] uppercase tracking-widest mb-4">Simulations</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 w-2 h-2 rounded-full bg-[var(--safe)]"></div>
            <div>
              <p className="text-[11px] text-[var(--foreground)] font-medium">Job #4210 - Static</p>
              <p className="text-[9px] text-[var(--foreground-secondary)]">COMPLETED - 12s ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3 opacity-50">
            <div className="mt-1 w-2 h-2 rounded-full bg-[var(--simulation)] animate-pulse"></div>
            <div>
              <p className="text-[11px] text-[var(--foreground)] font-medium">Job #4211 - FEM</p>
              <p className="text-[9px] text-[var(--foreground-secondary)]">QUEUED...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / System Status */}
      <div className="p-4 bg-black/20 text-[9px] font-mono text-[var(--foreground-secondary)]/50 border-t border-[var(--border)]">
        <div className="flex justify-between">
          <span>GPU_MEM:</span>
          <span className="text-[var(--safe)]">2.4 / 16 GB</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>PARSER_READY:</span>
          <span className="text-[var(--safe)]">YES</span>
        </div>
      </div>
    </aside>
  );
}
