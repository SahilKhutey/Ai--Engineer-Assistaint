'use client'

import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Stage, Grid, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useMemo } from 'react'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { useEditorStore } from '@/store/useEditorStore'
import * as THREE from 'three'

function LoadedModel({ url }: { url: string }) {
  const { analysisResults } = useEditorStore()
  const geometry = useLoader(STLLoader, url)
  
  // Center geometry
  useMemo(() => {
    geometry.computeBoundingBox()
    geometry.center()
    
    if (analysisResults) {
      const count = geometry.attributes.position.count
      const colors = new Float32Array(count * 3)
      const positions = geometry.attributes.position.array
      
      // Heuristic Stress Mapping for Demo
      const riskLevel = analysisResults.risk_level || 'low'
      const intensityScale = riskLevel === 'high' ? 1.5 : 0.8
      
      for (let i = 0; i < count; i++) {
        const x = positions[i * 3]
        const y = positions[i * 3 + 1]
        const z = positions[i * 3 + 2]
        const dist = Math.sqrt(x*x + y*y + z*z) / 50 
        
        const intensity = Math.min(1, dist * intensityScale)
        colors[i * 3] = intensity      // R
        colors[i * 3 + 1] = 1 - intensity // G
        colors[i * 3 + 2] = 0.2        // B
      }
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    }
  }, [geometry, analysisResults])

  return (
    <mesh geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial 
        vertexColors={!!analysisResults}
        color={analysisResults ? 'white' : '#3A4A5E'} 
        metalness={0.7} 
        roughness={0.3}
        envMapIntensity={1}
      />
    </mesh>
  )
}

function DefaultBox() {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[2, 1, 1]} />
      <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

export default function CADViewer() {
  const { uploadedFileUrl } = useEditorStore()

  return (
    <div className="w-full h-full bg-[#05070A]">
      <Canvas shadows gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[15, 15, 15]} fov={35} />
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} contactShadow={{ opacity: 0.8, blur: 2 }}>
            {uploadedFileUrl ? <LoadedModel url={uploadedFileUrl} /> : <DefaultBox />}
          </Stage>
          <Grid 
            infiniteGrid 
            fadeDistance={100} 
            fadeStrength={5} 
            cellSize={1} 
            sectionSize={5} 
            sectionColor="#1A2030" 
            cellColor="#0F1420" 
          />
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  )
}
