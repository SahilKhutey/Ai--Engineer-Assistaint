'use client';

import React, { useEffect } from 'react';
import WorkbenchToolbox from './WorkbenchToolbox';
import WorkbenchViewport from './WorkbenchViewport';
import WorkbenchCognition from './WorkbenchCognition';
import VariableConsole from './VariableConsole';
import EquationCommandBar from './EquationCommandBar';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const WorkbenchLayout = () => {
  const { initSocket } = useEngineeringStore();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  return (
    <div className="h-screen w-screen bg-[#080B10] text-[#f0f4ff] flex flex-col overflow-hidden selection:bg-[#adc6ff]/30">
      
      {/* 1. GLOBAL EQUATION COMMAND BAR */}
      <EquationCommandBar />

      <div className="flex-1 flex overflow-hidden">
        {/* 2. DOMAIN PANEL (Toolbox Refactored) */}
        <WorkbenchToolbox />

        {/* 3. MATHEMATICAL WORKSPACE (Viewport + Symbolic) */}
        <div className="flex-1 flex flex-col">
          <WorkbenchViewport />
          
          {/* 4. VARIABLE CONSOLE & AI REASONING (Bottom Dock) */}
          <div className="h-64 border-t border-[#adc6ff]/10 flex bg-[#0B0F14]/90 backdrop-blur-2xl">
            <VariableConsole />
            <WorkbenchCognition />
          </div>
        </div>
      </div>

      {/* Global Aesthetics */}
      <style jsx global>{`
        @keyframes pulse-soft {
          0% { opacity: 0.4; }
          50% { opacity: 0.8; }
          100% { opacity: 0.4; }
        }
        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }
        ::-webkit-scrollbar {
          width: 3px;
          height: 3px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(173, 198, 255, 0.1);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(173, 198, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default WorkbenchLayout;
