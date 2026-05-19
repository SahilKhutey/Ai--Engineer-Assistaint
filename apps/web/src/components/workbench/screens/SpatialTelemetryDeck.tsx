'use client';

import React, { useState, useEffect } from 'react';
import { useEngineeringStore } from '../../../store/useEngineeringStore';
import { Activity, Sliders, Play, Settings, RefreshCw, Zap, ShieldAlert, MonitorPlay } from 'lucide-react';

export default function SpatialTelemetryDeck() {
  const { spatialTelemetry, reasoningLogs, addReasoningLog } = useEngineeringStore();
  const [resetting, setResetting] = useState(false);

  // Core controls matching telemetry inputs
  const [jointA1, setJointA1] = useState(48.2);
  const [jointB4, setJointB4] = useState(92.1);
  const [viewAngle, setViewAngle] = useState(45);

  // Decompose real-time spatial parameters with store/sim fallbacks
  const {
    status = 'NOMINAL',
    transforms = {
      position: { x: 0.0, y: 1.2, z: -0.4 },
      rotation: { w: 1.0, x: 0.0, y: 0.0, z: 0.0 }
    },
    vslam = { featureCount: 1480, confidence: 0.96 }
  } = spatialTelemetry || {};

  const stabilityPercentage = Math.round(vslam.confidence * 100);

  // Synchronize joint torque parameters with the backend kinematics solver in real-time
  useEffect(() => {
    const controller = new AbortController();
    const runKinematics = async () => {
      try {
        await fetch('http://localhost:8000/api/analysis/solve', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify({
            domain: 'SPATIAL',
            joint_a1: jointA1,
            joint_b4: jointB4
          })
        });
      } catch (err) {
        // Suppress network logs from aborted requests
      }
    };
    
    const timeout = setTimeout(runKinematics, 100);
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [jointA1, jointB4]);

  const handleResetView = () => {
    setResetting(true);
    setViewAngle(45);
    setJointA1(48.2);
    setJointB4(92.1);
    addReasoningLog('Spatial Telemetry digital twin viewport reset to nominal centroid targets.', 'info');
    setTimeout(() => setResetting(false), 800);
  };

  const handleOverrideJoint = (joint: string, val: number) => {
    if (joint === 'A-1') {
      setJointA1(val);
      addReasoningLog(`Spatial override: Setting Joint A-1 mechanical torque constraint to ${val.toFixed(1)} Nm.`, 'warning');
    } else if (joint === 'B-4') {
      setJointB4(val);
      addReasoningLog(`Spatial override: Setting Joint B-4 mechanical torque constraint to ${val.toFixed(1)} Nm.`, 'warning');
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: '16px', height: '100%', overflowY: 'auto', padding: '16px' }}>
      
      {/* Position Matrix Bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
        <div className="glass-panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>SPATIAL VECTOR X/Y/Z</span>
            <Activity size={16} color="var(--color-blue)" />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 'bold', color: 'var(--text-primary)' }}>
            [{transforms.position.x.toFixed(2)}, {transforms.position.y.toFixed(2)}, {transforms.position.z.toFixed(2)}]
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Positional Lock Target</span>
        </div>

        <div className="glass-panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>VSLAM FEATURES DETECTED</span>
            <MonitorPlay size={16} color="var(--color-green)" />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 'bold', color: 'var(--color-green)' }}>
            {vslam.featureCount} Keypoints
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Uplink Reliability: Nominal</span>
        </div>

        <div className="glass-panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>VSLAM CONFIDENCE INDEX</span>
            <ShieldAlert size={16} color="var(--color-yellow)" />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 'bold', color: 'var(--color-yellow)' }}>
            {(vslam.confidence * 100).toFixed(1)}% Accuracy
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Tracking Stability Status</span>
        </div>
      </div>

      {/* Interactive Digital Twin Deck */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '16px', minHeight: '400px' }}>
        
        {/* Wireframe Digital Twin Visualizer */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap size={15} color="var(--color-blue)" />
              <h3 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Centroid Tracking HUD</h3>
            </div>
            <span style={{ fontSize: '10px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>ROT_W: {transforms.rotation.w.toFixed(2)}</span>
          </div>

          <div style={{ flex: 1, position: 'relative', background: '#070a14', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {/* Visual HUD Ring overlays */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle, rgba(59, 130, 246, 0.02) 20%, transparent 80%)' }} />
            
            {/* Dynamic visual preview representation (Using high quality imagery or structural blueprint mockups) */}
            <div style={{ position: 'relative', width: '80%', height: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
                style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.3, mixBlendMode: 'screen', filter: 'drop-shadow(0px 0px 30px rgba(59,130,246,0.3))' }}
                alt="Centroid Twin Preview"
              />
              <div style={{ position: 'absolute', width: '220px', height: '220px', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '50%', animation: 'spin 15s linear infinite' }} />
              <div style={{ position: 'absolute', width: '140px', height: '140px', border: '1px dashed rgba(76, 215, 246, 0.15)', borderRadius: '50%' }} />
            </div>

            {/* Position Tracking Cursor */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
              <div style={{ width: '32px', height: '32px', border: '2px solid var(--color-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--color-blue)', borderRadius: '50%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry Heatmap and Integrity Gauges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Torque Heatmap Controller Card */}
          <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sliders size={15} color="var(--color-purple)" />
              <h3 style={{ fontSize: '13px', textTransform: 'uppercase' }}>Torque Controls</h3>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Joint A-1 Torque</span>
                <span style={{ fontWeight: 'bold', color: 'var(--color-blue)' }}>{jointA1.toFixed(1)} Nm</span>
              </div>
              <input
                type="range"
                min="0"
                max="150"
                value={jointA1}
                onChange={(e) => handleOverrideJoint('A-1', Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-blue)' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Joint B-4 Torque</span>
                <span style={{ fontWeight: 'bold', color: jointB4 > 100 ? 'var(--color-red)' : 'var(--color-purple)' }}>{jointB4.toFixed(1)} Nm</span>
              </div>
              <input
                type="range"
                min="0"
                max="150"
                value={jointB4}
                onChange={(e) => handleOverrideJoint('B-4', Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-purple)' }}
              />
            </div>
          </div>

          {/* Neural link Integrity Card */}
          <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '10px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', alignSelf: 'flex-start', marginBottom: '12px' }}>
              NEURAL UPLINK INTEGRITY
            </span>

            <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.03)" strokeWidth="4" fill="transparent" />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="var(--color-blue)"
                  strokeWidth="6"
                  fill="transparent"
                  strokeDasharray="263.8"
                  strokeDashoffset={263.8 - (263.8 * stabilityPercentage) / 100}
                  style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                />
              </svg>
              <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '20px', fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>{stabilityPercentage}%</span>
                <span style={{ fontSize: '8px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>STABLE</span>
              </div>
            </div>

            <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '16px', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>VSLAM Latency:</span>
                <span>0.42 ms</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Refresh rate:</span>
                <span style={{ color: 'var(--color-green)' }}>60 Hz</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', width: '100%', marginTop: '12px' }}>
              <button
                onClick={handleResetView}
                disabled={resetting}
                style={{
                  width: '100%',
                  background: 'var(--bg-surface)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '4px',
                  color: 'var(--text-primary)',
                  padding: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}
              >
                {resetting ? <RefreshCw className="animate-spin" size={10} /> : <Settings size={10} />}
                RESET HUD
              </button>
              
              <button
                onClick={() => addReasoningLog('Spatial transforms logging exported successfully.', 'success')}
                style={{
                  width: '100%',
                  background: 'var(--color-blue)',
                  border: 'none',
                  borderRadius: '4px',
                  color: '#ffffff',
                  padding: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}
              >
                <Play size={10} />
                EXPORT LOGS
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
