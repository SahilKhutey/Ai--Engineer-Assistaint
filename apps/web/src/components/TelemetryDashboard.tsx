import React from 'react';

interface WorkerStatus {
    id: string;
    task: string;
    load: number;
    memory: string;
    status: 'IDLE' | 'BUSY' | 'OFFLINE';
}

const TelemetryDashboard: React.FC<{ workers: WorkerStatus[] }> = ({ workers }) => {
    return (
        <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl shadow-inner font-mono">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-cyan-400 text-lg font-bold tracking-widest uppercase">
                    Compute Bus Telemetry
                </h2>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-slate-500 text-[10px] uppercase font-bold">Bus Active</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {workers.map((worker) => (
                    <div 
                        key={worker.id}
                        className="p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-all group"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <p className="text-slate-500 text-[10px] uppercase font-bold">Node ID</p>
                                <p className="text-slate-300 text-xs font-bold">{worker.id}</p>
                            </div>
                            <span className={`px-2 py-0.5 rounded text-[8px] font-bold ${
                                worker.status === 'BUSY' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                                worker.status === 'IDLE' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                                'bg-red-500/10 text-red-500 border border-red-500/20'
                            }`}>
                                {worker.status}
                            </span>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <div className="flex justify-between text-[9px] text-slate-500 mb-1 font-bold uppercase">
                                    <span>Compute Load</span>
                                    <span>{worker.load}%</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-cyan-500 transition-all duration-500"
                                        style={{ width: `${worker.load}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="flex justify-between border-t border-slate-800 pt-2">
                                <div>
                                    <p className="text-slate-500 text-[8px] uppercase font-bold">Task</p>
                                    <p className="text-cyan-500 text-[10px] truncate max-w-[120px]">{worker.task}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-slate-500 text-[8px] uppercase font-bold">RAM</p>
                                    <p className="text-slate-300 text-[10px]">{worker.memory}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TelemetryDashboard;
