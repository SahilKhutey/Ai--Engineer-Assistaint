'use client';

import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Grid, PerspectiveCamera, Environment } from '@react-three/drei';
import { 
  Maximize2, Minimize2, Layers, Cpu, Activity, 
  TrendingUp, BarChart3, Binary, Sigma 
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const WorkbenchViewport = () => {
  const { activeDomain, isAnalyzing, streams } = useEngineeringStore();
  const [showMathWorkspace, setShowMathWorkspace] = useState(true);

  return (
    <div className="flex-1 relative bg-[#080B10] group overflow-hidden">
      {/* 3D CANVAS LAYER */}
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[5, 5, 5]} fov={35} />
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5}>
             {/* CAD Assets would be rendered here */}
             <mesh>
               <boxGeometry args={[2, 0.1, 2]} />
               <meshStandardMaterial color="#adc6ff" metalness={0.8} roughness={0.2} wireframe={isAnalyzing} />
             </mesh>
          </Stage>
          <Grid 
            infiniteGrid 
            fadeDistance={20} 
            cellColor="#adc6ff" 
            sectionColor="#adc6ff" 
            sectionThickness={1.5} 
            cellThickness={0.5}
            sectionSize={5}
          />
        </Suspense>
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
        <Environment preset="night" />
      </Canvas>

      {/* MATHEMATICAL WORKSPACE OVERLAY */}
      {showMathWorkspace && (
        <div className="absolute inset-0 pointer-events-none p-6 flex gap-6">
          
          {/* LEFT: Tensor / Matrix Views */}
          <div className="w-64 flex flex-col gap-4">
             <div className="p-4 bg-[#0B0F14]/60 backdrop-blur-xl border border-[#adc6ff]/10 rounded-2xl pointer-events-auto animate-in slide-in-from-left-4 duration-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-[#adc6ff]/60 uppercase tracking-widest flex items-center gap-2">
                    <Binary className="w-3 h-3" /> State Matrix
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                </div>
                <div className="grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="aspect-square bg-[#adc6ff]/5 border border-[#adc6ff]/5 rounded flex items-center justify-center text-[7px] text-[#adc6ff]/20 font-mono">
                      {Math.random().toFixed(2)}
                    </div>
                  ))}
                </div>
             </div>

             <div className="p-4 bg-[#0B0F14]/60 backdrop-blur-xl border border-[#adc6ff]/10 rounded-2xl pointer-events-auto animate-in slide-in-from-left-6 duration-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-[#adc6ff]/60 uppercase tracking-widest flex items-center gap-2">
                    <Sigma className="w-3 h-3" /> Symbolic Solver
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] text-blue-100/60 font-mono italic">∂u/∂t + (u·∇)u = -1/ρ ∇p + ν∇²u</p>
                  <div className="h-px bg-[#adc6ff]/10 w-full" />
                  <p className="text-[9px] text-[#adc6ff]/40 uppercase tracking-tighter italic">Convergence: 98.4%</p>
                </div>
             </div>
          </div>

          {/* CENTER: AI Annotations (Placeholders) */}
          <div className="flex-1" />

          {/* RIGHT: Realtime Graphs */}
          <div className="w-80 flex flex-col gap-4">
            <div className="p-4 bg-[#0B0F14]/60 backdrop-blur-xl border border-[#adc6ff]/10 rounded-2xl pointer-events-auto animate-in slide-in-from-right-4 duration-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-[#adc6ff]/60 uppercase tracking-widest flex items-center gap-2">
                  <TrendingUp className="w-3 h-3" /> Residual Stream
                </span>
                <span className="text-[9px] text-[#adc6ff]/20 font-mono">LOG_10</span>
              </div>
              <div className="h-24 flex items-end gap-1 px-1">
                {streams.femResiduals.map((v, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-[#adc6ff]/20 rounded-t-sm transition-all hover:bg-[#adc6ff]" 
                    style={{ height: `${Math.log10(1/v) * 10}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#0B0F14]/60 backdrop-blur-xl border border-[#adc6ff]/10 rounded-2xl pointer-events-auto animate-in slide-in-from-right-6 duration-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold text-red-400/60 uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-3 h-3" /> Stability Plot
                </span>
              </div>
              <div className="h-20 border-b border-l border-red-400/10 relative overflow-hidden">
                <svg className="absolute inset-0 w-full h-full">
                  <path 
                    d="M 0 40 Q 50 10 100 50 T 200 30 T 300 60" 
                    fill="none" 
                    stroke="rgba(248, 113, 113, 0.5)" 
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEWPORT CONTROLS */}
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <button 
          onClick={() => setShowMathWorkspace(!showMathWorkspace)}
          className={`
            p-3 rounded-2xl border transition-all
            ${showMathWorkspace ? 'bg-[#adc6ff] border-[#adc6ff] text-[#0B0F14]' : 'bg-[#0B0F14]/60 backdrop-blur-xl border-[#adc6ff]/10 text-[#adc6ff]/40 hover:text-[#adc6ff]'}
          `}
        >
          <Layers className="w-4 h-4" />
        </button>
        <button className="p-3 bg-[#0B0F14]/60 backdrop-blur-xl border border-[#adc6ff]/10 rounded-2xl text-[#adc6ff]/40 hover:text-[#adc6ff] transition-all">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* DOMAIN INDICATOR */}
      <div className="absolute bottom-6 left-6 p-4 bg-[#0B0F14]/60 backdrop-blur-xl border border-[#adc6ff]/10 rounded-2xl flex items-center gap-4">
        <div className="p-3 bg-[#adc6ff]/10 rounded-xl">
          <Cpu className="w-5 h-5 text-[#adc6ff]" />
        </div>
        <div>
          <p className="text-[10px] text-[#adc6ff]/40 uppercase tracking-widest font-bold">Active Physical Kernel</p>
          <p className="text-lg text-[#f0f4ff] font-bold tracking-tight uppercase">{activeDomain}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkbenchViewport;
