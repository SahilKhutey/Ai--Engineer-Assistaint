'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, PerspectiveCamera, Environment, 
  Float, ContactShadows, 
  BakeShadows, SoftShadows, Grid
} from '@react-three/drei';
import * as THREE from 'three';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * SovereignTerrainShader v3.2 (Phase 55 Hardened)
 * 
 * Procedural heightmap synthesis using multi-octave noise.
 * Includes PBR lighting fix for corrected normal distribution.
 */
const TerrainShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#1A2330') },
    uLightDir: { value: new THREE.Vector3(1, 1, 1).normalize() },
    uNoiseScale: { value: 0.05 },
    uAmplitude: { value: 2.5 },
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform float uTime;
    uniform float uNoiseScale;
    uniform float uAmplitude;

    // Classic 3D Noise
    float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
    vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
    float snoise(vec3 v){ 
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i); 
      vec4 p = permute( permute( permute( 
                 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
               + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 0.142857142857;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
    }

    float getHeight(vec2 p) {
      float h = 0.0;
      float freq = uNoiseScale;
      float amp = uAmplitude;
      for(int i = 0; i < 4; i++) {
        h += snoise(vec3(p * freq, 0.0)) * amp;
        freq *= 2.0;
        amp *= 0.5;
      }
      return h;
    }

    void main() {
      vUv = uv;
      vec3 pos = position;
      float h = getHeight(pos.xz);
      pos.y = h;
      vPosition = (modelMatrix * vec4(pos, 1.0)).xyz;
      
      // Compute normal via finite difference
      float eps = 0.1;
      float hL = getHeight(pos.xz + vec2(-eps, 0.0));
      float hR = getHeight(pos.xz + vec2(eps, 0.0));
      float hD = getHeight(pos.xz + vec2(0.0, -eps));
      float hU = getHeight(pos.xz + vec2(0.0, eps));
      vNormal = normalize(vec3(hL - hR, 2.0 * eps, hD - hU));
      vNormal = normalMatrix * vNormal;

      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform vec3 uColor;
    uniform vec3 uLightDir;

    void main() {
      vec3 N = normalize(vNormal);
      vec3 L = normalize(uLightDir);
      float diff = max(dot(N, L), 0.0);
      
      // High-density grid lines
      float grid = abs(sin(vPosition.x * 2.0) * sin(vPosition.z * 2.0));
      grid = smoothstep(0.95, 1.0, grid);
      
      vec3 color = mix(uColor, vec3(0.1, 0.3, 0.6), diff);
      color += grid * 0.1;
      
      // Height-based coloring
      float h = vPosition.y;
      color = mix(color, vec3(0.9, 0.9, 1.0), smoothstep(2.0, 3.5, h)); // Snow caps
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};

const ProceduralTerrain = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { osStatus, geometryState } = useEngineeringStore();

  useFrame((state) => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.ShaderMaterial;
      mat.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} receiveShadow castShadow>
      <planeGeometry args={[100, 100, 256, 256]} />
      <shaderMaterial 
        {...TerrainShader} 
        wireframe={!geometryState.watertight || osStatus.kernelLoad > 0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const EngineeringAssets = () => {
  const { spatialState } = useEngineeringStore();
  const pose = spatialState.pose || { x: 5, y: 4, z: 5 };
  
  // Anchored assets based on raycasting (simulated here)
  return (
    <group>
      <Float speed={2} rotationIntensity={0.5}>
        <mesh position={[pose.x, pose.y, pose.z]} castShadow>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#adc6ff" emissive="#3b82f6" emissiveIntensity={0.5} metalness={1} roughness={0} />
        </mesh>
      </Float>
      <Float speed={1.5} floatIntensity={2}>
        <mesh position={[-8, 6, -4]} castShadow>
          <dodecahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#4cd7f6" emissive="#03b5d3" emissiveIntensity={0.3} metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  );
};

const SovereignViewport: React.FC = () => {
  const { activeDomain } = useEngineeringStore();

  return (
    <div className="w-full h-full relative bg-[#05070A]">
      <Canvas shadows dpr={[1, 2]}>
        <SoftShadows size={25} samples={10} focus={0.5} />
        <PerspectiveCamera makeDefault position={[30, 30, 30]} fov={45} />
        <OrbitControls 
          enableDamping 
          dampingFactor={0.05} 
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.1} 
        />
        
        <color attach="background" args={['#05070A']} />
        <fog attach="fog" args={['#05070A', 30, 150]} />

        <ambientLight intensity={0.2} />
        <directionalLight 
          position={[50, 50, 50]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight position={[-20, 10, -20]} intensity={1} color="#3b82f6" />

        <ProceduralTerrain />
        <EngineeringAssets />

        <Grid 
          infiniteGrid 
          fadeDistance={100} 
          fadeStrength={5} 
          cellSize={1} 
          sectionSize={10} 
          sectionColor="#3b82f6" 
          sectionThickness={1.5}
          cellColor="#1d2027"
          position={[0, -0.1, 0]}
        />

        <Environment preset="night" />
        <ContactShadows position={[0, -0.1, 0]} opacity={0.4} scale={100} blur={2} far={4} />
        
        <BakeShadows />
      </Canvas>

      {/* Viewport Overlays */}
      <div className="absolute bottom-6 right-6 pointer-events-none text-right">
        <p className="text-[10px] font-black text-blue-400/30 uppercase tracking-[0.4em] mb-1">SOVEREIGN_RENDER_KERNEL</p>
        <p className="text-[14px] font-mono font-black text-white uppercase tracking-widest">PHASE_55_DETERMINISTIC_LOCK</p>
      </div>
      
      <div className="absolute top-6 right-6 flex flex-col gap-2">
         <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-[9px] font-black text-blue-400 uppercase tracking-widest backdrop-blur-md">
            LOD: MAXIMUM
         </div>
         <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-[9px] font-black text-emerald-400 uppercase tracking-widest backdrop-blur-md">
            DOMAIN: {activeDomain}
         </div>
      </div>
    </div>
  );
};

export default SovereignViewport;
