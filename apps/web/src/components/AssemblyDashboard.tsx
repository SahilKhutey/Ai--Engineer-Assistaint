import React from 'react';

interface ComponentHealth {
    id: string;
    name: string;
    type: string;
    fused_strain: number;
    rul_pct: number;
    status: 'NOMINAL' | 'DEGRADED' | 'CRITICAL';
}

const AssemblyDashboard: React.FC<{ assembly: ComponentHealth[] }> = ({ assembly }) => {
    return (
        <div className="p-8 bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl font-mono">
            <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-6">
                <div>
                    <h2 className="text-cyan-400 text-xl font-bold tracking-widest uppercase">
                        Assembly Mission Control
                    </h2>
                    <p className="text-slate-500 text-xs mt-1 uppercase font-bold tracking-tighter">
                        Fleet-Level Structural Health Monitoring
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <p className="text-slate-500 text-[10px] uppercase font-bold">Assembly Health</p>
                        <p className="text-emerald-400 text-lg font-bold">94.2%</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-slate-800 flex items-center justify-center">
                        <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assembly.map((part) => (
                    <div 
                        key={part.id}
                        className="relative p-6 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-300"
                    >
                        {/* Status Glow */}
                        <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] -mr-16 -mt-16 opacity-20 ${
                            part.status === 'NOMINAL' ? 'bg-emerald-500' :
                            part.status === 'DEGRADED' ? 'bg-amber-500' : 'bg-red-500'
                        }`}></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter mb-1">{part.type}</p>
                                    <h3 className="text-slate-200 text-sm font-bold tracking-wide">{part.name}</h3>
                                </div>
                                <span className={`text-[9px] font-bold px-2 py-1 rounded border ${
                                    part.status === 'NOMINAL' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                    part.status === 'DEGRADED' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                                    'bg-red-500/10 text-red-400 border-red-500/20'
                                }`}>
                                    {part.status}
                                </span>
                            </div>

                            <div className="space-y-6">
                                {/* Health Circular Gauge (Simplified) */}
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle cx="32" cy="32" r="28" fill="none" stroke="#1e293b" strokeWidth="4" />
                                            <circle 
                                                cx="32" cy="32" r="28" fill="none" 
                                                stroke={part.status === 'NOMINAL' ? '#10b981' : part.status === 'DEGRADED' ? '#f59e0b' : '#ef4444'} 
                                                strokeWidth="4" 
                                                strokeDasharray="175.9"
                                                strokeDashoffset={175.9 * (1 - part.rul_pct / 100)}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-300">
                                            {Math.round(part.rul_pct)}%
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-[9px] uppercase font-bold">Remaining Life</p>
                                        <p className="text-slate-300 text-xs font-bold">{part.rul_pct > 0 ? `${Math.round(part.rul_pct * 365 / 100)} Days` : 'EXPIRED'}</p>
                                    </div>
                                </div>

                                {/* Real-time Metrics */}
                                <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-4">
                                    <div>
                                        <p className="text-slate-500 text-[8px] uppercase font-bold">Fused Strain</p>
                                        <p className="text-cyan-400 text-xs font-bold">{part.fused_strain.toExponential(2)} ε</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-[8px] uppercase font-bold">ID</p>
                                        <p className="text-slate-400 text-[10px]">{part.id.slice(0, 8)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AssemblyDashboard;
