import React from 'react';

interface DesignCheckpoint {
    id: string;
    author: string;
    timestamp: string;
    status: 'COMPLIANT' | 'NON_COMPLIANT' | 'REJECTED';
    synthesis_summary: string;
}

const DesignTimeline: React.FC<{ history: DesignCheckpoint[] }> = ({ history }) => {
    return (
        <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl shadow-xl font-mono">
            <h2 className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                Engineering Design History
            </h2>

            <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
                {history.map((checkpoint) => (
                    <div key={checkpoint.id} className="relative pl-10 group">
                        {/* Timeline Node */}
                        <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-slate-950 z-10 transition-colors ${
                            checkpoint.status === 'COMPLIANT' ? 'bg-emerald-500' : 
                            checkpoint.status === 'REJECTED' ? 'bg-red-500' : 'bg-amber-500'
                        }`}></div>

                        <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-all">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="text-slate-300 text-[11px] font-bold">Checkpoint {checkpoint.id.slice(0, 8)}</p>
                                    <p className="text-slate-500 text-[9px] uppercase tracking-tighter">
                                        {new Date(checkpoint.timestamp).toLocaleString()}
                                    </p>
                                </div>
                                <span className="text-slate-500 text-[10px] font-bold">@{checkpoint.author}</span>
                            </div>

                            <p className="text-slate-400 text-[10px] leading-relaxed mb-3 line-clamp-2">
                                {checkpoint.synthesis_summary}
                            </p>

                            <div className="flex items-center gap-3">
                                <span className={`text-[8px] font-bold px-2 py-0.5 rounded ${
                                    checkpoint.status === 'COMPLIANT' ? 'bg-emerald-500/10 text-emerald-400' : 'text-red-400 bg-red-500/10'
                                }`}>
                                    {checkpoint.status}
                                </span>
                                <button className="text-[9px] text-cyan-500 hover:text-cyan-400 font-bold uppercase transition-colors">
                                    Restore Design
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DesignTimeline;
