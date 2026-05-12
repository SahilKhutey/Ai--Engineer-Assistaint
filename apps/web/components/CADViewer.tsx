'use client'
import { useRef, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { useEngineeringStore } from '../store/useEngineeringStore'

function HeatmapMesh() {
  const { analysisResult } = useEngineeringStore()
  
  const geometry = useMemo(() => {
    if (!analysisResult?.geometry?.mesh) return null
    
    const { nodes } = analysisResult.geometry.mesh
    const stressField = analysisResult.physics.stress_field
    const removalMask = analysisResult.optimization?.removal_mask || []
    
    const bufferGeo = new THREE.BufferGeometry()
    const positions: number[] = []
    const colors: number[] = []
    
    const maxStress = Math.max(...stressField)
    const colorScale = (val: number, isRemoved: boolean) => {
      if (isRemoved) return new THREE.Color(0x111111) // Ghosted material
      const t = val / (maxStress || 1)
      return new THREE.Color().setHSL(0.7 * (1 - t), 1, 0.5)
    }

    nodes[0].forEach((_: any, i: number) => {
      positions.push(nodes[0][i], nodes[1][i], nodes[2][i])
      const color = colorScale(stressField[i], removalMask[i] === 1)
      colors.push(color.r, color.g, color.b)
    })

    bufferGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    bufferGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    
    return bufferGeo
  }, [analysisResult])

  if (!geometry) return <mesh><boxGeometry /><meshStandardMaterial color="#333" /></mesh>

  return (
    <points geometry={geometry}>
      <pointsMaterial size={0.005} vertexColors />
    </points>
  )
}

export default function CADViewer() {
  return (
    <div className="h-full w-full bg-zinc-950">
      <Canvas shadowMap>
        <PerspectiveCamera makeDefault position={[0.2, 0.2, 0.2]} />
        <OrbitControls />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[1, 1, 1]} />
        
        <HeatmapMesh />
        
        <gridHelper args={[1, 20, 0x444444, 0x222222]} rotation={[Math.PI / 2, 0, 0]} />
      </Canvas>
    </div>
  )
}
