'use client';

import React, { useEffect, useState } from 'react';
import { useEngineeringStore } from '../../../store/useEngineeringStore';
import { Activity, ShieldAlert, Cpu, Layers, Disc, Settings } from 'lucide-react';

interface ProcessItem {
  pid: string;
  name: string;
  duty_cycle: string;
  status: string;
  cpu_load: number;
  memory: string;
}

export default function SystemProcessMonitor() {
  const { telemetry, wsStatus } = useEngineeringStore();
  const [processes, setProcesses] = useState<ProcessItem[]>([]);
  const [sineOffset, setSineOffset] = useState(0);

  // Fetch active OS thread processes from the backend kernel telemetry endpoint
  useEffect(() => {
    let active = true;
    const fetchProcesses = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/analysis/system/processes');
        const data = await response.json();
        if (active) {
          setProcesses(data.processes);
        }
      } catch (err) {
        // Fallback local processes if backend offline
        const localList = [
          { pid: "0x140", name: "SovereignPhysicsKernel", duty_cycle: "60Hz deterministic", status: "DETERMINISTIC_LOCK", cpu_load: 25.4, memory: "124 MB" },
          { pid: "0x2C4", name: "OrchestratedScheduler", duty_cycle: "10Hz polling", status: "POLLED_STANDBY", cpu_load: 5.2, memory: "42 MB" },
          { pid: "0x3F8", name: "SovereignRedisBridge", duty_cycle: "Event-Driven", status: "LISTENING", cpu_load: 2.1, memory: "18 MB" },
          { pid: "0x4A2", name: "APIUvicornServer", duty_cycle: "HTTP Request/Response", status: "NOMINAL_STABLE", cpu_load: 1.2, memory: "94 MB" }
        ];
        setProcesses(localList);
      }
    };

    fetchProcesses();
    const interval = setInterval(fetchProcesses, 2000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  // Telemetry Oscilloscope animation loop (fluctuates with active load)
  useEffect(() => {
    let animId: number;
    const updateSine = () => {
      setSineOffset((prev) => (prev + 0.1) % (Math.PI * 2));
      animId = requestAnimationFrame(updateSine);
    };
    animId = requestAnimationFrame(updateSine);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Format uptime (Seconds to HH:MM:SS)
  const formatUptime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  // Generate real-time sine path based on backend load
  const generateSinePath = () => {
    const points = [];
    const amplitude = 25 + (telemetry.kernelLoad * 150); // Scale with kernel load
    const frequency = 0.05;
    for (let x = 0; x <= 450; x += 5) {
      const y = 50 + Math.sin(x * frequency + sineOffset) * amplitude;
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: '16px', height: '100%', overflowY: 'auto', padding: '16px' }}>
      
      {/* Telemetry Header Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
        
        <div className="glass-panel" style={{ padding: '16px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>KERNEL LOAD</span>
            <Cpu size={16} color="var(--color-blue)" />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 'bold', color: 'var(--text-primary)' }}>
            {(telemetry.kernelLoad * 100).toFixed(2)}%
          </div>
          <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', marginTop: '8px', overflow: 'hidden' }}>
            <div style={{ width: `${Math.min(telemetry.kernelLoad * 100, 100)}%`, height: '100%', background: 'var(--color-blue)', transition: 'width 0.3s ease' }} />
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>SYSTEM UPTIME</span>
            <Activity size={16} color="var(--color-green)" />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 'bold', color: 'var(--color-green)' }} className="glow-text-green">
            {formatUptime(telemetry.uptime)}
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Nominal Core Clock</span>
        </div>

        <div className="glass-panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>COMPLIANCE LOCK</span>
            <ShieldAlert size={16} color="var(--color-yellow)" />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 'bold', color: 'var(--color-yellow)', textTransform: 'uppercase' }}>
            {telemetry.compliance || 'OFFLINE'}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Phase-61 Hardened Bridge
          </div>
        </div>

      </div>

      {/* Main Analysis Block */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '16px', minHeight: '350px' }}>
        
        {/* Oscilloscope Visualizer Card */}
        <div className="glass-panel scanline" style={{ padding: '16px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Disc size={16} color="var(--color-blue)" className="animate-glow-purple" />
            <h3 style={{ fontSize: '14px', textTransform: 'uppercase' }}>Sovereign Telemetry Oscillator</h3>
          </div>
          
          <div style={{ flex: 1, border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', background: '#070a14', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
            {/* Blueprint Grid Lines */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            {/* Interactive Socket Status Indicator */}
            <div style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(0,0,0,0.4)', padding: '4px 8px', borderRadius: '3px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: wsStatus === 'connected' ? 'var(--color-green)' : 'var(--color-red)' }} />
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>SOCKET_{wsStatus.toUpperCase()}</span>
            </div>

            <svg viewBox="0 0 450 100" style={{ width: '90%', height: '80%', overflow: 'visible', zIndex: 2 }}>
              <path
                d={generateSinePath()}
                fill="none"
                stroke="var(--color-blue)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ filter: 'drop-shadow(0px 0px 6px rgba(59,130,246,0.8))' }}
              />
            </svg>
          </div>
        </div>

        {/* Active OS Process Threads Sidebar Panel */}
        <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={16} color="var(--color-blue)" className="animate-pulse" />
            <h3 style={{ fontSize: '13px', textTransform: 'uppercase' }}>Active Processes</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto', flex: 1, paddingRight: '4px' }}>
            {processes.map((proc) => (
              <div
                key={proc.pid}
                style={{
                  background: 'rgba(7, 10, 20, 0.6)',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--text-accent)', fontWeight: 'bold' }}>{proc.name}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '10px' }}>{proc.pid}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Status:</span>
                  <span style={{ color: proc.status === 'DETERMINISTIC_LOCK' || proc.status === 'NOMINAL_STABLE' ? 'var(--color-green)' : 'var(--color-yellow)' }}>
                    {proc.status}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Duty:</span>
                  <span style={{ color: 'var(--text-primary)' }}>{proc.duty_cycle}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>CPU / Mem:</span>
                  <span style={{ color: 'var(--color-blue)', fontWeight: 'bold' }}>
                    {proc.cpu_load.toFixed(1)}% / {proc.memory}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
