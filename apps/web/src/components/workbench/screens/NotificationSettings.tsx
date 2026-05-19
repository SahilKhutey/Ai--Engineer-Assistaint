'use client';

import React, { useState, useEffect } from 'react';
import { useEngineeringStore } from '../../../store/useEngineeringStore';
import { Sliders, ShieldAlert, Brain, ToggleLeft, ToggleRight, Radio, RefreshCw, CheckSquare } from 'lucide-react';

export default function NotificationSettings() {
  const { addReasoningLog } = useEngineeringStore();
  const [severityDb, setSeverityDb] = useState(0.84);
  const [autonomyMode, setAutonomyMode] = useState<'MANUAL' | 'HYBRID' | 'FULL_AI'>('HYBRID');

  // Toggle alert triggers
  const [physicsSolver, setPhysicsSolver] = useState(true);
  const [aiEngine, setAiEngine] = useState(false);
  const [clusterHealth, setClusterHealth] = useState(true);

  // Live signal waves pulse animation values
  const [waveHeights, setWaveHeights] = useState([30, 50, 70, 40, 25, 60, 80, 30, 45, 75, 40, 60, 30, 65, 45]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveHeights((prev) => prev.map((h) => Math.max(10, Math.min(100, h + (Math.random() - 0.5) * 15))));
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const handleCommitChanges = () => {
    addReasoningLog(`Notification logic settings committed successfully. Active autonomy model set to ${autonomyMode}. Severity ceiling set to ${severityDb.toFixed(2)} dB.`, 'success');
  };

  const handleResetDefaults = () => {
    setSeverityDb(0.84);
    setAutonomyMode('HYBRID');
    setPhysicsSolver(true);
    setAiEngine(false);
    setClusterHealth(true);
    addReasoningLog('Notification thresholds restored to default factory nominal states.', 'info');
  };

  return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: '16px', height: '100%', overflowY: 'auto', padding: '16px' }}>
      
      {/* Title block */}
      <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px', borderLeft: '4px solid var(--color-blue)' }}>
        <span style={{ fontSize: '10px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>SIGNAL_ROUTING_MANAGEMENT</span>
        <h2 style={{ fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Notification Logic Configuration</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '16px', minHeight: '400px' }}>
        
        {/* Toggle Domain list */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontSize: '10px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
            DOMAIN SIGNAL OVERRIDES
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* Physics toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'rgba(0,0,0,0.15)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: physicsSolver ? 'var(--color-blue)' : 'var(--text-secondary)' }} />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Physics Boundary Solver</div>
                  <div style={{ fontSize: '9px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Sub-atomic boundary grid delta logs</div>
                </div>
              </div>
              <button onClick={() => { setPhysicsSolver(!physicsSolver); addReasoningLog(`Signal routing for Physics alerts toggled ${!physicsSolver ? 'ON' : 'OFF'}.`, 'info'); }} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: physicsSolver ? 'var(--color-blue)' : 'var(--text-secondary)' }}>
                {physicsSolver ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
              </button>
            </div>

            {/* AI Engine toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'rgba(0,0,0,0.15)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: aiEngine ? 'var(--color-yellow)' : 'var(--text-secondary)' }} />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 'bold' }}>AI Logic Matrix</div>
                  <div style={{ fontSize: '9px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Neural weights anomalies & drift indicators</div>
                </div>
              </div>
              <button onClick={() => { setAiEngine(!aiEngine); addReasoningLog(`Signal routing for AI Engine alerts toggled ${!aiEngine ? 'ON' : 'OFF'}.`, 'info'); }} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: aiEngine ? 'var(--color-yellow)' : 'var(--text-secondary)' }}>
                {aiEngine ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
              </button>
            </div>

            {/* Cluster toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', background: 'rgba(0,0,0,0.15)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: clusterHealth ? 'var(--color-green)' : 'var(--text-secondary)' }} />
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Cluster Node Diagnostics</div>
                  <div style={{ fontSize: '9px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>Thermals, sync errors, and connection packet drops</div>
                </div>
              </div>
              <button onClick={() => { setClusterHealth(!clusterHealth); addReasoningLog(`Signal routing for Cluster diagnostics toggled ${!clusterHealth ? 'ON' : 'OFF'}.`, 'info'); }} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: clusterHealth ? 'var(--color-green)' : 'var(--text-secondary)' }}>
                {clusterHealth ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
              </button>
            </div>

          </div>

          {/* Action trigger deck */}
          <div style={{ marginTop: 'auto', display: 'flex', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
            <button
              onClick={handleResetDefaults}
              style={{
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--text-primary)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px',
                padding: '8px 16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <RefreshCw size={12} />
              RESET NOMINAL DEFAULTS
            </button>
            
            <button
              onClick={handleCommitChanges}
              style={{
                background: 'var(--color-blue)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: 'var(--glow-blue)',
                marginLeft: 'auto'
              }}
            >
              <CheckSquare size={12} />
              COMMIT LOGIC OVERRIDES
            </button>
          </div>
        </div>

        {/* Sidebar sliders and real-time waves */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Severity Threshold Slider Card */}
          <div className="glass-panel" style={{ padding: '16px', borderLeft: '4px solid var(--color-yellow)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '12px' }}>
              <span style={{ fontSize: '10px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>SEVERITY_THRESHOLD</span>
              <span style={{ fontSize: '18px', fontFamily: 'var(--font-mono)', fontWeight: 'bold', color: 'var(--color-yellow)' }}>{severityDb.toFixed(2)}_dB</span>
            </div>
            
            <input
              type="range"
              min="0"
              max="2"
              step="0.05"
              value={severityDb}
              onChange={(e) => setSeverityDb(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--color-yellow)' }}
            />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', marginTop: '8px' }}>
              <span>NOMINAL_ALERT</span>
              <span>CRITICAL_LOCK</span>
            </div>
          </div>

          {/* Autonomy Selection Card */}
          <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '10px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>COGNITIVE_AUTONOMY_LEVEL</span>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
              {(['MANUAL', 'HYBRID', 'FULL_AI'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => {
                    setAutonomyMode(mode);
                    addReasoningLog(`Shifted sovereign cognition decision model to ${mode}.`, 'warning');
                  }}
                  style={{
                    background: autonomyMode === mode ? 'var(--color-blue)' : 'rgba(0,0,0,0.2)',
                    color: autonomyMode === mode ? '#ffffff' : 'var(--text-secondary)',
                    border: '1px solid',
                    borderColor: autonomyMode === mode ? 'var(--color-blue)' : 'rgba(255,255,255,0.05)',
                    borderRadius: '4px',
                    padding: '6px 0',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {mode}
                </button>
              ))}
            </div>

            <p style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', lineHeight: '1.4', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.2)', padding: '8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.02)', margin: 0 }}>
              {autonomyMode === 'MANUAL' && 'Requires direct console manual approval to broadcast telemetry logs.'}
              {autonomyMode === 'HYBRID' && 'Autonomous alerts dispatch for critical exceptions while buffering low level parameters.'}
              {autonomyMode === 'FULL_AI' && 'Deep learning reasoning loops autonomously triage, solve, and close open cluster reports.'}
            </p>
          </div>

          {/* Real-time Oscillating wave HUD Card */}
          <div className="glass-panel" style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '12px' }}>
              <span style={{ fontSize: '10px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>LIVE_SIGNAL_WAVE</span>
              <Radio size={14} color="var(--color-blue)" className="animate-pulse" />
            </div>

            <div style={{ flex: 1, display: 'flex', alignItems: 'end', gap: '4px', padding: '0 4px', background: '#070a14', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.02)', overflow: 'hidden', minHeight: '80px' }}>
              {waveHeights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    background: 'var(--color-blue)',
                    borderRadius: '2px 2px 0 0',
                    transition: 'height 0.1s ease',
                    boxShadow: '0 0 6px var(--color-blue)',
                    opacity: 0.2 + (h / 100) * 0.8
                  }}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
