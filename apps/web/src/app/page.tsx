'use client';

import React, { Suspense, useMemo } from 'react';
import EngineeringDashboard from "../components/EngineeringDashboard";
import { useEngineeringStore } from "@/store/useEngineeringStore";
import indexData from "../components/stitch-screens/index.json";
import dynamic from 'next/dynamic';

export default function Home() {
  const { uiState } = useEngineeringStore();
  const { activeScreenId } = uiState;

  const screen = useMemo(() => 
    activeScreenId ? indexData.find(s => s.id === activeScreenId) : null
  , [activeScreenId]);

  const ActiveComponent = useMemo(() => {
    if (!screen) return null;
    return dynamic(() => import(`../components/stitch-screens/${screen.componentName}`), {
      loading: () => <div className="h-full flex items-center justify-center text-blue-500 font-mono text-[20px] animate-pulse">LOADING_SOVEREIGN_KERNEL...</div>,
      ssr: false
    });
  }, [screen?.id]);

  React.useEffect(() => {
    const { initSocket, startSimulationTicker } = useEngineeringStore.getState();
    initSocket();
    const stopTicker = startSimulationTicker();
    return () => {
      stopTicker();
    };
  }, []);

  return (
    <main className="flex-1 relative overflow-hidden flex flex-col h-full w-full">
      {ActiveComponent ? (
        <Suspense fallback={<div className="h-full flex items-center justify-center text-blue-500 font-mono text-[20px] animate-pulse">LOADING_SOVEREIGN_KERNEL...</div>}>
          <div className="flex-1 h-full w-full relative overflow-auto custom-scrollbar sovereign-screen-wrapper">
            <ActiveComponent />
          </div>
        </Suspense>
      ) : (
        <EngineeringDashboard />
      )}
    </main>
  );
}
