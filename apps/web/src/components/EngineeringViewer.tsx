import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, Html } from '@react-three/drei';
import { ARButton, XR, Controllers, Hands, Interactive } from '@react-three/xr';

const SpatialInspector = ({ children }: { children: React.ReactNode }) => {
    const [hover, setHover] = useState(false);
    const [scale, setScale] = useState(1);

    return (
        <Interactive
            onSelect={() => setScale(scale === 1 ? 1.5 : 1)}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
        >
            <group scale={scale}>
                {children}
                {hover && (
                    <Html distanceFactor={10}>
                        <div className="bg-black/80 text-cyan-400 p-2 rounded border border-cyan-500/50 backdrop-blur-md">
                            <p className="text-xs font-mono">[SPATIAL_NODE_ACTIVE]</p>
                        </div>
                    </Html>
                )}
            </group>
        </Interactive>
    );
};

const EngineeringViewer: React.FC<{ data: any }> = ({ data }) => {
    const [xrMode, setXrMode] = useState(false);

    return (
        <div className="relative w-full h-full bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
            {/* XR Integration Controls */}
            <div className="absolute top-4 right-4 z-50 flex gap-2">
                <ARButton className="!bg-cyan-600 !hover:bg-cyan-500 !text-white !font-bold !px-4 !py-2 !rounded-lg !shadow-lg !transition-all" />
                <button 
                    onClick={() => setXrMode(!xrMode)}
                    className="px-4 py-2 bg-slate-900/80 border border-slate-700 rounded-lg text-slate-300 hover:text-cyan-400 transition-colors backdrop-blur-md"
                >
                    {xrMode ? 'EXIT XR' : 'ENTER XR WORKSPACE'}
                </button>
            </div>

            <Canvas shadows gl={{ antialias: true, alpha: true }}>
                <XR>
                    <PerspectiveCamera makeDefault position={[5, 5, 5]} />
                    <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />
                    <Controllers />
                    <Hands />
                    
                    <Suspense fallback={<Html center><div className="text-cyan-500 animate-pulse font-mono">INITIALIZING_SPATIAL_CORE...</div></Html>}>
                        <Stage intensity={0.5} environment="city" adjustCamera={false}>
                            <SpatialInspector>
                                <mesh castShadow receiveShadow>
                                    <boxGeometry args={[2, 2, 2]} />
                                    <meshStandardMaterial 
                                        color={data?.status === 'CRITICAL' ? '#ef4444' : '#0ea5e9'} 
                                        roughness={0.1}
                                        metalness={0.8}
                                        emissive={data?.status === 'CRITICAL' ? '#450a0a' : '#082f49'}
                                        emissiveIntensity={0.5}
                                    />
                                </mesh>
                            </SpatialInspector>
                        </Stage>
                    </Suspense>

                    <ambientLight intensity={0.4} />
                    <pointLight position={[10, 10, 10]} intensity={1} castShadow />
                    <gridHelper args={[20, 20, 0x334155, 0x1e293b]} position={[0, -2, 0]} />
                </XR>
            </Canvas>

            {/* Industrial Overlay */}
            <div className="absolute bottom-4 left-4 p-4 bg-slate-900/80 border border-slate-700 rounded-lg backdrop-blur-md">
                <h3 className="text-cyan-400 font-bold mb-1 tracking-wider uppercase text-sm">Spatial Telemetry</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Status</p>
                        <p className={`text-xs font-mono font-bold ${data?.status === 'CRITICAL' ? 'text-red-400' : 'text-emerald-400'}`}>
                            {data?.status || 'INITIALIZING'}
                        </p>
                    </div>
                    <div>
                        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">XR Layer</p>
                        <p className="text-xs text-cyan-500 font-mono font-bold">ACTIVE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngineeringViewer;
