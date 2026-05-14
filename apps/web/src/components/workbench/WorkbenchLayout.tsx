'use client';

import React, { useEffect } from 'react';
import WorkbenchToolbox from './WorkbenchToolbox';
import WorkbenchViewport from './WorkbenchViewport';
import WorkbenchCognition from './WorkbenchCognition';
import VariableConsole from './VariableConsole';
import EquationCommandBar from './EquationCommandBar';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * WorkbenchLayout v3.2 (Phase 55 Advanced - Sovereign Orchestration Shell)
 * 
 * Master layout framework for the Engineering Intelligence Suite.
 * Orchestrates 27 intelligence domains within a high-density glassmorphism environment.
 * Features sub-millisecond layout reflows and reality-linked state synchronization.
 */
const WorkbenchLayout = () => {
  const { initSocket } = useEngineeringStore();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  return (
    <div className="h-screen w-screen bg-[#080B10] text-[#f0f4ff] flex flex-col overflow-hidden selection:bg-blue-500/30 font-sans antialiased relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-50" />
      
      {/* 1. SOVEREIGN INTENT LAYER (Equation Command Bar) */}
      <div className="relative z-40">
        <EquationCommandBar />
      </div>

      <div className="flex-1 flex overflow-hidden relative z-30">
        {/* 2. KERNEL ORCHESTRATION HUB (Workbench Toolbox) */}
        <WorkbenchToolbox />

        {/* 3. PRIMARY VISUALIZATION KERNEL (Viewport + Bottom Infrastructure) */}
        <div className="flex-1 flex flex-col relative overflow-hidden">
          <WorkbenchViewport />
          
          {/* 4. SOVEREIGN BOTTOM DOCK (Variable Hub + Cognition Runtime) */}
          <div className="h-[320px] border-t border-[#adc6ff]/10 flex bg-[#0B0F14]/95 backdrop-blur-[60px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] relative z-40">
            <VariableConsole />
            <WorkbenchCognition />
          </div>
        </div>
      </div>

      {/* 5. GLOBAL MISSION-CONTROL AESTHETICS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=JetBrains+Mono:wght@400;700;800&display=swap');

        :root {
          --glass-bg: rgba(11, 15, 20, 0.85);
          --glass-border: rgba(173, 198, 255, 0.1);
          --accent-blue: #3b82f6;
          --accent-emerald: #10b981;
          --accent-rose: #f43f5e;
        }

        body {
          margin: 0;
          padding: 0;
          background: #080B10;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.15);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.4);
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }

        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }

        /* High-density typography utilities */
        .font-mono {
          font-family: 'JetBrains Mono', monospace !important;
        }

        /* Glassmorphism utility */
        .glass-panel {
          background: var(--glass-bg);
          backdrop-filter: blur(40px);
          border: 1px solid var(--glass-border);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        /* Reality link glow */
        .reality-glow {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
        }
      `}</style>
    </div>
  );
};

export default WorkbenchLayout;
