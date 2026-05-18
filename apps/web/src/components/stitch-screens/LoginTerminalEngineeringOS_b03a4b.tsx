'use client';


import {
  Terminal,
  Settings,
  Activity,
  Brain,
  BarChart3,
  Workflow,
  History,
  HardDrive,
  Zap,
  FlaskConical,
  Sparkles,
  Plus,
  Play,
  Power,
  LayoutGrid,
  Waves,
  ChevronRight,
  Code,
  Key,
  AtSign,
  Globe,
  User} from 'lucide-react';
import React, { useState } from 'react';
import { useEngineeringStore } from '@/store/useEngineeringStore';

/**
 * LoginTerminal v3.5 (Phase 55 Hardened)
 * 
 * The entry point for the Sovereign Engineering Intelligence Suite.
 * Features a high-fidelity authentication interface with real-time kernel status
 * and generative mesh visualizations.
 */
const LoginTerminalEngineeringOS_b03a4b = () => {
  const { osStatus, distributedCompute, addNotification, pushEvent } = useEngineeringStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pushEvent?.('AUTH_INITIATED', { identity: email, timestamp: Date.now() });
    addNotification?.({
      title: 'AUTH_SEQUENCE_INITIATED',
      message: 'Validating cryptographic credentials against local cluster...',
      type: 'INFO',
      domain: 'SECURITY'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0B0F14] text-[#e1e2ec] font-sans overflow-hidden relative animate-in fade-in duration-1000">
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-50 opacity-10" />
      
      {/* 1. TOP APP BAR */}
      <header className="h-12 px-8 border-b border-white/5 bg-black/40 backdrop-blur-md flex justify-between items-center z-50 shrink-0">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-3">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] font-mono">ENGINEERING_OS_v3.5</span>
           </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-lg text-[9px] font-black text-blue-400 uppercase tracking-widest font-mono">
              GPU: 94% | SIM: ACTIVE
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* 2. LEFT: GENERATIVE MESH VISUAL */}
        <section className="hidden lg:flex flex-1 relative bg-black/40 overflow-hidden border-r border-white/5 items-center justify-center">
           <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]" />
           
           <div className="relative w-[500px] h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 border border-white/5 rounded-full" />
              <div className="absolute inset-8 border border-blue-500/10 rounded-full animate-spin-slow" />
              <div className="absolute inset-16 border border-cyan-400/10 rounded-full animate-reverse-spin" />
              
              <div className="z-10 bg-black/60 border border-white/10 p-10 rounded-[40px] backdrop-blur-3xl text-center space-y-4 shadow-2xl">
                 <div className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] font-mono">SIMULATION_CORE_V4</div>
                 <div className="text-2xl font-mono font-black text-white uppercase tracking-tighter">READY_STATE: OPTIMAL</div>
              </div>

              {/* Data Stream Metrics */}
              <div className="absolute bottom-[-100px] left-[-50px] right-[-50px] flex justify-between">
                 <div className="flex flex-col gap-2">
                    <div className="h-1 w-40 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" style={{ width: '65%' }} />
                    </div>
                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">PHYSICS_ENGINE_LOAD</span>
                 </div>
                 <div className="flex flex-col gap-2 text-right items-end">
                    <div className="h-1 w-40 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" style={{ width: '12%' }} />
                    </div>
                    <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">NETWORK_LATENCY_MS</span>
                 </div>
              </div>
           </div>

           <img src="https://lh3.googleusercontent.com/aida-Globe/AB6AXuD1VISVoJ1XNRSvCmmeCSGnPxCeEfGN4Nui4rR0V1CAScyDiCDJapM7deW0u42oa5LR4JKUyOibWqKiSwbms1D7O-4U0WSkOUmZNWo4Em9aq5RI7ohiGQQoWew1DEB9MNrIMwJK8nivO91zhmJaXxMWEyrFeplCj7K26nANZuQMiAIdQdBmdVDsVKucRHl7tNJbIUT0QkhEC8KLWL9wWPKIcW4dRG-OIxO4P11WLXGOmktxWugRRei9IChhHl9DnYDbtj3qbx9YBjz6" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-overlay opacity-20 pointer-events-none" />
        </section>

        {/* 3. RIGHT: AUTHENTICATION PANEL */}
        <section className="w-full lg:w-[500px] flex flex-col bg-black/60 backdrop-blur-3xl shadow-2xl z-10 border-l border-white/5">
           {/* Header Status Bar */}
           <div className="h-14 border-b border-white/5 flex items-center justify-between px-10 shrink-0">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse" />
                 <span className="text-[10px] font-black text-white uppercase tracking-widest font-mono">CLUSTER: SECURE</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                 <span className="text-[10px] font-black text-white uppercase tracking-widest font-mono">AI: SYNCED</span>
              </div>
           </div>

           <div className="flex-1 flex flex-col justify-center px-12 py-12 space-y-12">
              <div className="space-y-4">
                 <h1 className="text-4xl font-black text-white uppercase tracking-tighter">AWAITING_AUTH</h1>
                 <p className="text-[14px] leading-relaxed text-white/40 font-mono italic">Initialize biometric or credential sequence to access the workspace.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] font-mono">IDENTITY_HEX</label>
                    <div className="relative group">
                       <input 
                         type="email" 
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-[14px] font-mono text-blue-400 placeholder:text-white/10 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all" 
                         placeholder="USER_IDENT@CLUSTER.OS" 
                       />
                       <AtSign className="absolute right-6 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-blue-400 transition-colors w-5 h-5" />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <div className="flex justify-between items-center">
                       <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] font-mono">CYPHER_KEY</label>
                       <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest cursor-pointer hover:underline">RECOVER</span>
                    </div>
                    <div className="relative group">
                       <input 
                         type="password" 
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-[14px] font-mono text-blue-400 placeholder:text-white/10 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all" 
                         placeholder="••••••••••••" 
                       />
                       <Key className="absolute right-6 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-blue-400 transition-colors w-5 h-5" />
                    </div>
                 </div>

                 <button 
                   type="submit"
                   className="w-full bg-blue-600 text-white py-5 font-black text-[12px] uppercase tracking-[0.4em] rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 active:scale-95 flex items-center justify-center gap-4 group"
                 >
                    LAUNCH_WORKSPACE
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                 </button>
              </form>

              <div className="flex items-center gap-6 opacity-20">
                 <div className="h-px bg-white flex-1" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] font-mono">EXTERNAL_LINK_NODES</span>
                 <div className="h-px bg-white flex-1" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                 <SocialButton icon={<User />} label="GOOGLE" />
                 <SocialButton icon={<Code />} label="GITHUB" />
              </div>

              <button className="w-full flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/5 transition-all group">
                 <div className="flex items-center gap-4">
                    <Globe className="w-5 h-5 text-white/20 group-hover:text-blue-400" />
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest font-mono group-hover:text-white transition-colors">ENTERPRISE_SSO_PORTAL</span>
                 </div>
                 <ChevronRight className="w-5 h-5 text-white/10 group-hover:text-blue-400" />
              </button>
           </div>

           <footer className="p-10 border-t border-white/5 bg-black/40 space-y-4 shrink-0">
              <div className="flex justify-between text-[9px] font-mono font-black text-white/20 uppercase tracking-widest">
                 <span>SYS_ARCH: X64_ARM_HYBRID</span>
                 <span>BUILD_24.09.1</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                 <div className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" style={{ width: '82%' }} />
              </div>
           </footer>
        </section>
      </div>

      <style jsx>{`
        .grid-pattern {
          background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .scanline-overlay {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
        }
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        .animate-reverse-spin {
          animation: spin 20s linear infinite reverse;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const SocialButton = ({ icon, label }: any) => (
  <button className="flex items-center justify-center gap-4 border border-white/5 bg-white/[0.02] py-4 rounded-2xl text-[10px] font-black text-white/40 uppercase tracking-widest font-mono hover:bg-white/5 hover:text-white transition-all">
     {React.cloneElement(icon, { className: 'w-5 h-5' })}
     {label}
  </button>
);

export default LoginTerminalEngineeringOS_b03a4b;
