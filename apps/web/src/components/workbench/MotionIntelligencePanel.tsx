'use client';

import React, { useState } from 'react';
import { 
  Cpu, Zap, Activity, Info, AlertTriangle, ShieldCheck, 
  Settings, ChevronRight, Binary, Target, Navigation,
  TrendingUp, Layers, Box, Move, RefreshCw, BarChart3
} from 'lucide-react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

const MotionIntelligencePanel = () => {
  const { motionState, updateJoint, updateDynamics } = useEngineeringStore();
  const [activeTab, setActiveTab] = useState<'KINEMATICS' | 'DYNAMICS' | 'CONTROL'>('KINEMATICS');

  const { joints, pose, dynamics, stabilityScore } = motionState;

  return (
    <div className="flex-1 flex flex-col overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 1. MOTION TABS */}
      <div className="flex bg-[#0B0F14] border-b border-[#adc6ff]/10">
        {[
          { id: 'KINEMATICS', label: 'Kinematics', icon: Binary },
          { id: 'DYNAMICS', label: 'Dynamics', icon: Move },
          { id: 'CONTROL', label: 'Control', icon: Cpu }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`
              flex-1 py-3 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-widest transition-all
              ${activeTab === tab.id ? 'text-[#adc6ff] bg-[#adc6ff]/5 border-b-2 border-[#adc6ff]' : 'text-[#adc6ff]/30 hover:text-[#adc6ff]/60'}
            `}
          >
            <tab.icon className="w-3 h-3" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
        
        {/* TAB 1: KINEMATICS ENGINE */}
        {activeTab === 'KINEMATICS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <div className="flex items-center justify-between">
                   <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Joint Articulation (FK)</h3>
                   <span className="text-[8px] text-[#adc6ff]/20 font-mono">DOF: {joints.length}</span>
                </div>
                <div className="space-y-4">
                   {joints.map((joint) => (
                      <div key={joint.id} className="space-y-1">
                         <div className="flex justify-between text-[9px] text-[#adc6ff]/40 uppercase font-mono">
                            <span>{joint.id} Angle</span>
                            <span className="text-[#f0f4ff]">{joint.angle}°</span>
                         </div>
                         <input 
                           type="range" min={joint.limit[0]} max={joint.limit[1]} step="1" 
                           value={joint.angle}
                           onChange={(e) => updateJoint(joint.id, parseInt(e.target.value))}
                           className="w-full accent-[#adc6ff]" 
                         />
                      </div>
                   ))}
                </div>
             </section>

             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">End-Effector Pose (World)</h3>
                <div className="grid grid-cols-3 gap-2">
                   {['x', 'y', 'z', 'roll', 'pitch', 'yaw'].map((axis) => (
                      <div key={axis} className="p-3 bg-[#0B0F14] border border-[#adc6ff]/10 rounded-xl space-y-1">
                         <p className="text-[8px] text-[#adc6ff]/40 uppercase font-bold">{axis}</p>
                         <p className="text-[10px] font-mono font-bold text-[#f0f4ff]">{pose[axis as keyof typeof pose].toFixed(3)}</p>
                      </div>
                   ))}
                </div>
                <button className="w-full py-2 bg-[#adc6ff]/10 border border-[#adc6ff]/20 rounded-xl text-[9px] text-[#adc6ff] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#adc6ff]/20 transition-all">
                  <Target className="w-3 h-3" /> Solve Inverse Kinematics
                </button>
             </section>
          </div>
        )}

        {/* TAB 2: RIGID BODY DYNAMICS */}
        {activeTab === 'DYNAMICS' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">Inertia & Loading</h3>
                <div className="p-4 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl space-y-4">
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-[#adc6ff] uppercase flex items-center gap-2">
                        <Box className="w-4 h-4" /> Mass Distribution
                      </span>
                      <span className="text-[12px] font-mono font-bold text-[#f0f4ff]">{dynamics.mass} kg</span>
                   </div>
                   <div className="p-3 bg-[#0B0F14] border border-[#adc6ff]/5 rounded-xl space-y-2">
                      <p className="text-[8px] text-[#adc6ff]/40 uppercase">Inertia Tensor [kg·m²]</p>
                      <div className="grid grid-cols-3 gap-1 font-mono text-[9px] text-blue-400/60">
                         {dynamics.inertia.flat().map((v, i) => (
                           <div key={i} className="bg-[#adc6ff]/5 p-1 rounded text-center">{v}</div>
                         ))}
                      </div>
                   </div>
                </div>
             </section>

             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">External Force Vectors</h3>
                <div className="h-32 bg-[#080B10] border border-[#adc6ff]/10 rounded-2xl relative overflow-hidden flex items-center justify-center">
                   <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent" />
                   <Move className="w-12 h-12 text-[#adc6ff]/10 animate-pulse" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-blue-400 shadow-[0_0_10px_blue]" />
                   <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-4 h-px bg-blue-400" />
                   <p className="absolute bottom-2 text-[8px] text-[#adc6ff]/20 font-mono uppercase">Gravity Field Active: 9.81 m/s²</p>
                </div>
             </section>
          </div>
        )}

        {/* TAB 3: CONTROL DYNAMICS (PID) */}
        {activeTab === 'CONTROL' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
             <section className="space-y-3">
                <h3 className="text-[10px] font-bold text-emerald-400/40 uppercase tracking-[0.2em]">Stability Intelligence</h3>
                <div className="p-4 bg-emerald-400/5 border border-emerald-400/20 rounded-2xl space-y-4">
                   <div className="flex justify-between items-end">
                      <div className="space-y-1">
                         <p className="text-[8px] text-emerald-400/60 uppercase">Stability Margin</p>
                         <p className="text-xl font-mono font-bold text-emerald-100">{(stabilityScore * 100).toFixed(1)}%</p>
                      </div>
                      <ShieldCheck className="w-6 h-6 text-emerald-400" />
                   </div>
                   <div className="h-1 bg-emerald-400/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400" style={{ width: `${stabilityScore * 100}%` }} />
                   </div>
                </div>
             </section>

             <section className="space-y-4">
                <h3 className="text-[10px] font-bold text-[#adc6ff]/40 uppercase tracking-[0.2em]">PID Controller Tuning</h3>
                {['Proportional (Kp)', 'Integral (Ki)', 'Derivative (Kd)'].map((p) => (
                  <div key={p} className="space-y-1">
                     <div className="flex justify-between text-[9px] text-[#adc6ff]/40 uppercase font-mono">
                        <span>{p}</span>
                        <span className="text-[#f0f4ff]">1.00</span>
                     </div>
                     <input type="range" className="w-full accent-emerald-400" />
                  </div>
                ))}
             </section>

             <section className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl flex items-start gap-3">
                <Activity className="w-4 h-4 text-blue-400 shrink-0" />
                <p className="text-[10px] text-blue-100/60 font-mono italic">
                   Bode Plot Analysis: Phase margin stable at 45°. Gain margin verified for Mach-2 flight regime.
                </p>
             </section>
          </div>
        )}

      </div>

      {/* 3. AI MOTION REASONING FOOTER */}
      <div className="p-4 bg-[#adc6ff]/5 border-t border-[#adc6ff]/10 space-y-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2 text-[9px] text-blue-400 font-bold uppercase tracking-widest">
              <Zap className="w-3 h-3" /> Motion Intelligence Hub
           </div>
           <button className="text-[9px] text-[#adc6ff]/40 font-mono uppercase hover:text-[#adc6ff] transition-colors">
              Recalibrate
           </button>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-[#adc6ff] text-[#0B0F14] py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(173,198,255,0.2)]">
            Finalize Trajectory
          </button>
          <button className="px-4 py-2 border border-[#adc6ff]/20 rounded-xl text-[#adc6ff] hover:bg-[#adc6ff]/10 transition-all">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotionIntelligencePanel;
