"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid, Stage, PerspectiveCamera, Center, useHelper } from '@react-three/drei';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

interface ViewerProps {
  modelUrl?: string;
  stressData?: any;
}

const Model = ({ url }: { url: string }) => {
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);
  
  useEffect(() => {
    if (url) {
      const loader = new STLLoader();
      loader.load(url, (geo) => {
        geo.computeVertexNormals();
        setGeometry(geo);
      });
    }
  }, [url]);

  if (!geometry) return null;

  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial 
        color="#808080" 
        metalness={0.8} 
        roughness={0.2} 
        envMapIntensity={1}
      />
    </mesh>
  );
};

export default function EngineeringViewer({ modelUrl, stressData }: ViewerProps) {
  return (
    <div className="w-full h-full bg-black relative overflow-hidden rounded-xl border border-white/10">
      {/* 3D Scene */}
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[50, 50, 50]} fov={50} />
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
        
        <Stage intensity={0.5} environment="city" adjustCamera={false}>
          <Center top>
            {modelUrl ? (
              <Model url={modelUrl} />
            ) : (
              <mesh>
                <boxGeometry args={[10, 10, 10]} />
                <meshStandardMaterial color="#1e293b" wireframe />
              </mesh>
            )}
          </Center>
        </Stage>

        <Grid
          infiniteGrid
          fadeDistance={100}
          fadeStrength={5}
          cellSize={10}
          sectionSize={50}
          sectionColor="#3b82f6"
          sectionThickness={1.5}
          cellColor="#1e293b"
        />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1} intensity={1} castShadow />
      </Canvas>

      {/* Overlays */}
      <div className="absolute top-4 left-4 z-10 space-y-2">
        <div className="glass-panel p-3 rounded-lg text-xs font-mono">
          <p className="text-blue-400 font-bold uppercase tracking-widest mb-1">View Mode</p>
          <div className="flex gap-2">
            <button className="bg-blue-600 px-2 py-1 rounded">Solid</button>
            <button className="bg-slate-800 px-2 py-1 rounded opacity-50">Stress Heatmap</button>
            <button className="bg-slate-800 px-2 py-1 rounded opacity-50">Wireframe</button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10 glass-panel p-2 rounded-lg text-[10px] font-mono text-white/40">
        AXIS: X-RED | Y-GREEN | Z-BLUE
      </div>
    </div>
  );
}
