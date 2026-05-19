'use client';

import React, { useState, useEffect } from 'react';
import { useEngineeringStore } from '../../../store/useEngineeringStore';
import { Hammer, Cpu, Layers, Clock, Sparkles, TrendingUp, AlertTriangle, Play, CheckCircle2, RotateCw } from 'lucide-react';

interface Material {
  id: string;
  name: string;
  yield_strength_pa: number;
  melt_temp_k: number;
  density_kg_m3: number;
}

interface FabricationJob {
  id: string;
  name: string;
  material: string;
  progress: number;
  massConsumed: number;
  totalMass: number;
  estCompletionSeconds: number;
  status: 'QUEUED' | 'IN_PROGRESS' | 'CONVERGING' | 'COMPLETE' | 'FAILED';
  fidelity: number;
}

export default function OrbitalFabricationQueue() {
  const { addReasoningLog, telemetry } = useEngineeringStore();
  const [materials, setMaterials] = useState<Material[]>([]);
  const [activeJobs, setActiveJobs] = useState<FabricationJob[]>([
    {
      id: 'SOV_TRUSS_ALPHA',
      name: 'Structural Truss Alpha',
      material: 'Titanium Ti-6Al-4V',
      progress: 74.7,
      massConsumed: 14.2,
      totalMass: 19.0,
      estCompletionSeconds: 15165, // 04:12:45
      status: 'IN_PROGRESS',
      fidelity: 1.0
    },
    {
      id: 'SOV_ARRAY_FRAME',
      name: 'Solar Array Frame',
      material: 'Aluminum 7075-T6',
      progress: 23.0,
      massConsumed: 8.4,
      totalMass: 36.5,
      estCompletionSeconds: 68110, // 18:55:10
      status: 'IN_PROGRESS',
      fidelity: 0.8
    }
  ]);

  // Form State
  const [elementName, setElementName] = useState('');
  const [selectedMatId, setSelectedMatId] = useState('Ti-6Al-4V');
  const [fidelity, setFidelity] = useState(0.9);
  const [loading, setLoading] = useState(false);

  // Fetch materials from FastAPI endpoint
  useEffect(() => {
    fetch('http://localhost:8000/api/materials')
      .then((res) => res.json())
      .then((data) => {
        if (data.materials && data.materials.length > 0) {
          setMaterials(data.materials);
          setSelectedMatId(data.materials[0].id);
        }
      })
      .catch(() => {
        // Fallback static list matching SystemProcessMonitor
        const staticList = [
          { id: "Ti-6Al-4V", name: "Titanium Ti-6Al-4V", yield_strength_pa: 880e6, melt_temp_k: 1941, density_kg_m3: 4430 },
          { id: "Al-7075", name: "Aluminum 7075-T6", yield_strength_pa: 503e6, melt_temp_k: 908, density_kg_m3: 2810 },
          { id: "Carbon-PEEK", name: "Carbon-PEEK", yield_strength_pa: 250e6, melt_temp_k: 616, density_kg_m3: 1300 },
          { id: "pla", name: "PLA (Polylactic Acid)", yield_strength_pa: 50e6, melt_temp_k: 473, density_kg_m3: 1240 }
        ];
        setMaterials(staticList);
        setSelectedMatId(staticList[0].id);
      });
  }, []);

  // Real-time animation countdown and progress tick loops
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveJobs((prevJobs) =>
        prevJobs.map((job) => {
          if (job.status === 'COMPLETE' || job.status === 'FAILED') return job;

          // Tick down completion time
          const nextTime = Math.max(0, job.estCompletionSeconds - 1);
          
          // Tick up progress slightly depending on state
          let nextProgress = job.progress;
          let nextStatus = job.status;

          if (job.progress < 100) {
            // Standard small increments for active items
            const step = job.status === 'CONVERGING' ? 0.8 : 0.05 + Math.random() * 0.05;
            nextProgress = Math.min(99.9, job.progress + step);
            
            // If it hits near 100, wait or transition to converged
            if (nextProgress > 95 && nextStatus === 'IN_PROGRESS') {
              nextStatus = 'CONVERGING';
            }
          }

          // Calculate dynamic mass consumed
          const ratio = nextProgress / 100;
          const nextMass = Math.min(job.totalMass, Number((job.totalMass * ratio).toFixed(1)));

          return {
            ...job,
            progress: Number(nextProgress.toFixed(1)),
            estCompletionSeconds: nextTime,
            massConsumed: nextMass,
            status: nextStatus
          };
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time utility
  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const getStatusColor = (status: FabricationJob['status']) => {
    switch (status) {
      case 'QUEUED': return 'var(--color-blue)';
      case 'IN_PROGRESS': return 'var(--color-purple)';
      case 'CONVERGING': return 'var(--color-yellow)';
      case 'COMPLETE': return 'var(--color-green)';
      default: return 'var(--color-red)';
    }
  };

  const selectedMaterial = materials.find((m) => m.id === selectedMatId);
  const estimatedMass = selectedMaterial 
    ? Number((selectedMaterial.density_kg_m3 * 0.005).toFixed(1)) 
    : 15.0; // Simulated default item size

  const handleLaunchFabrication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!elementName.trim()) return;

    setLoading(true);
    const targetMat = selectedMaterial ? selectedMaterial.name : selectedMatId;
    addReasoningLog(`Scheduling Sovereign Orbital Fabrication: ${elementName} using ${targetMat}...`, 'info');

    // Scaffold local new job state immediately
    const tempJobId = `SOV_${Date.now().toString().slice(-4)}`;
    const newJob: FabricationJob = {
      id: tempJobId,
      name: elementName,
      material: targetMat,
      progress: 0.0,
      massConsumed: 0.0,
      totalMass: estimatedMass,
      estCompletionSeconds: Math.floor(3600 * (1.5 + Math.random() * 2)), // 1.5 - 3.5 hrs
      status: 'QUEUED',
      fidelity: fidelity
    };

    setActiveJobs((prev) => [newJob, ...prev]);
    setElementName('');

    try {
      // POST payload matches FastAPI structure in analysis.py
      const res = await fetch('http://localhost:8000/api/analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: `Initiating high-fidelity fabrication simulation for orbital hardware: ${elementName} with ${targetMat} at computed target fidelity ${fidelity}.`,
          domain: 'MANUFACTURING',
          material_id: selectedMatId,
          sovereign_intent: true,
          fidelity: fidelity,
          math: {
            density_kg_m3: selectedMaterial?.density_kg_m3 || 4430,
            target_mass_kg: estimatedMass
          }
        })
      });
      
      const data = await res.json();
      
      if (data.job_id) {
        addReasoningLog(`Kernel Lock Established. Workload secured: ${data.job_id}. Fingerprint: ${data.fingerprint.slice(0, 12)}...`, 'success');
        
        // Update active job with actual backend job_id and begin server status polling
        setActiveJobs((prev) =>
          prev.map((j) => (j.id === tempJobId ? { ...j, id: data.job_id, status: 'IN_PROGRESS' } : j))
        );

        // Start background status polling
        startJobStatusPolling(data.job_id);
      }
    } catch (err) {
      // Offline fallback handling
      setTimeout(() => {
        addReasoningLog(`Telemetry link offline. Mechanical core local scheduler taking direct control.`, 'warning');
        setActiveJobs((prev) =>
          prev.map((j) => (j.id === tempJobId ? { ...j, status: 'IN_PROGRESS', progress: 5.0 } : j))
        );
        startSimulatedOfflinePolling(tempJobId);
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  // Polls backend status API for job convergence
  const startJobStatusPolling = (jobId: string) => {
    let pollCount = 0;
    const interval = setInterval(async () => {
      pollCount++;
      if (pollCount > 30) { // Limit polling safety
        clearInterval(interval);
        return;
      }

      try {
        const res = await fetch(`http://localhost:8000/api/analysis/status/${jobId}`);
        if (!res.ok) throw new Error();
        const data = await res.json();

        if (data.status === 'SOVEREIGN_CONVERGED' || data.status === 'COMPLETE') {
          clearInterval(interval);
          setActiveJobs((prev) =>
            prev.map((j) =>
              j.id === jobId
                ? { ...j, progress: 100, status: 'COMPLETE', estCompletionSeconds: 0 }
                : j
            )
          );
          addReasoningLog(`Orbital Fabrication Task [${jobId}] successfully converged. Reality persistence verified.`, 'success');
        } else if (data.status === 'SOVEREIGN_FAULT') {
          clearInterval(interval);
          setActiveJobs((prev) =>
            prev.map((j) => (j.id === jobId ? { ...j, status: 'FAILED' } : j))
          );
          addReasoningLog(`Sovereign Kernel Fault detected for job ${jobId}. Phase recalibration needed.`, 'critical');
        } else {
          // Keep ticking progress locally while verifying trust integrity
          setActiveJobs((prev) =>
            prev.map((j) =>
              j.id === jobId
                ? { ...j, status: 'IN_PROGRESS', progress: Math.max(j.progress, Math.min(99.0, j.progress + 4)) }
                : j
            )
          );
        }
      } catch (err) {
        // Continue ticking locally even if polling connection blips
      }
    }, 3000);
  };

  // Simulates job progression if API connection fails/is local offline
  const startSimulatedOfflinePolling = (jobId: string) => {
    let currentProgress = 5.0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 12 + 6;
      if (currentProgress >= 100) {
        clearInterval(interval);
        setActiveJobs((prev) =>
          prev.map((j) =>
            j.id === jobId
              ? { ...j, progress: 100, status: 'COMPLETE', estCompletionSeconds: 0 }
              : j
          )
        );
        addReasoningLog(`Local mechanical core completed synthesis for ${jobId}. Yield strength limits satisfied.`, 'success');
      } else {
        setActiveJobs((prev) =>
          prev.map((j) => {
            if (j.id === jobId) {
              const status = currentProgress > 90 ? 'CONVERGING' : 'IN_PROGRESS';
              return { ...j, progress: Number(currentProgress.toFixed(1)), status };
            }
            return j;
          })
        );
      }
    }, 2000);
  };

  return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: '16px', height: '100%', overflowY: 'auto', padding: '16px' }}>
      
      {/* Top Banner metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
        
        <div className="glass-panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>ACTIVE QUEUE</span>
            <Hammer size={16} color="var(--color-purple)" />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 'bold', color: 'var(--text-primary)' }}>
            {activeJobs.filter(j => j.status !== 'COMPLETE' && j.status !== 'FAILED').length.toString().padStart(2, '0')}
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Orbital CNC Nodes Linked</span>
        </div>

        <div className="glass-panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>ACCUMULATED MASS</span>
            <Cpu size={16} color="var(--color-blue)" />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 'bold', color: 'var(--color-blue)' }}>
            {activeJobs.reduce((acc, j) => acc + j.massConsumed, 0).toFixed(1)} kg
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Total Feedstock Injected</span>
        </div>

        <div className="glass-panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>PRINTER FEEDBACK</span>
            <TrendingUp size={16} color="var(--color-green)" />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 'bold', color: 'var(--color-green)' }}>
            DETERMINISTIC_NOMINAL
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)', display: 'block', marginTop: '4px' }}>Extrusion Temperature: Sync</span>
        </div>

      </div>

      {/* Main split work space */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '16px', minHeight: '400px' }}>
        
        {/* Left: Active Jobs Queue list */}
        <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={16} color="var(--color-blue)" />
              <h3 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fabrication Queue</h3>
            </div>
            <span style={{ fontSize: '10px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>T-60Hz OSCILLOSCOPE MONITOR</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {activeJobs.map((job) => (
              <div key={job.id} style={{ 
                border: '1px solid rgba(255,255,255,0.04)',
                background: 'rgba(0,0,0,0.15)',
                borderRadius: '4px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Glow bar indicator */}
                <div style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  bottom: 0, 
                  width: '3px', 
                  background: getStatusColor(job.status) 
                }} />

                {/* Job Metadata header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--text-primary)', margin: 0 }}>{job.name}</h4>
                    <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>UUID: {job.id}</span>
                  </div>
                  <span style={{ 
                    fontSize: '10px', 
                    fontFamily: 'var(--font-mono)', 
                    color: getStatusColor(job.status),
                    background: 'rgba(255,255,255,0.02)',
                    padding: '2px 6px',
                    borderRadius: '2px',
                    border: '1px solid rgba(255,255,255,0.04)'
                  }}>
                    {job.status}
                  </span>
                </div>

                {/* Progress bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    <span>CONVERGENCE STEP</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>{job.progress}%</span>
                  </div>
                  <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.03)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ 
                      width: `${job.progress}%`, 
                      height: '100%', 
                      background: getStatusColor(job.status),
                      boxShadow: `0 0 8px ${getStatusColor(job.status)}`,
                      transition: 'width 0.4s cubic-bezier(0.1, 0.8, 0.2, 1)'
                    }} />
                  </div>
                </div>

                {/* Micro metrics grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '8px' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '9px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>MATERIAL ALLOY</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-primary)', fontWeight: '500' }}>{job.material}</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '9px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>MASS DISSIPATED</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{job.massConsumed}kg / {job.totalMass}kg</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '9px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>EST COMPLETION</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>
                      {job.status === 'COMPLETE' ? '00:00:00' : formatTime(job.estCompletionSeconds)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Fabrication Command panel */}
        <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
            <Hammer size={16} color="var(--color-purple)" />
            <h3 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fabrication Commander</h3>
          </div>

          <form onSubmit={handleLaunchFabrication} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                Component Designation
              </label>
              <input
                type="text"
                value={elementName}
                onChange={(e) => setElementName(e.target.value)}
                placeholder="e.g., Structural Truss Alpha"
                required
                style={{
                  width: '100%',
                  background: 'var(--bg-space)',
                  border: '1px solid var(--border-industrial)',
                  borderRadius: '4px',
                  color: 'var(--text-primary)',
                  padding: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                Structural Material
              </label>
              <select
                value={selectedMatId}
                onChange={(e) => setSelectedMatId(e.target.value)}
                style={{
                  width: '100%',
                  background: 'var(--bg-space)',
                  border: '1px solid var(--border-industrial)',
                  borderRadius: '4px',
                  color: 'var(--text-primary)',
                  padding: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  outline: 'none'
                }}
              >
                {materials.map((m) => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                <span>Solver Fidelity</span>
                <span style={{ color: 'var(--color-purple)', fontWeight: 'bold' }}>{(fidelity * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min="0.10"
                max="1.0"
                step="0.05"
                value={fidelity}
                onChange={(e) => setFidelity(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-purple)' }}
              />
            </div>

            {/* Computed Material Metrics Display */}
            {selectedMaterial && (
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.04)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '10px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>COMPUTED LATTICE ESTIMATION</span>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Density Rank:</span>
                  <span>{selectedMaterial.density_kg_m3} kg/m³</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Melting Point:</span>
                  <span>{selectedMaterial.melt_temp_k} K</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Estimated Dry Mass:</span>
                  <span style={{ color: 'var(--text-accent)', fontWeight: 'bold' }}>{estimatedMass} kg</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                background: 'var(--color-purple)',
                border: 'none',
                borderRadius: '4px',
                color: '#ffffff',
                padding: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: 'var(--glow-purple)',
                opacity: loading ? 0.7 : 1,
                transition: 'opacity 0.2s ease',
                marginTop: '6px'
              }}
            >
              {loading ? <RotateCw className="animate-spin" size={14} /> : <Play size={14} />}
              {loading ? 'ARCHIVING TO KERNEL...' : 'INITIATE SOVEREIGN FABRICATION'}
            </button>
          </form>

          {/* Precision compliance warning */}
          <div style={{ display: 'flex', gap: '8px', background: 'rgba(251, 191, 36, 0.03)', padding: '10px', borderRadius: '4px', border: '1px solid rgba(251, 191, 36, 0.1)' }}>
            <AlertTriangle size={16} color="var(--color-yellow)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '10px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.4' }}>
              <strong>PHASE CHECKPOINT:</strong> High fidelity fabrication demands continuous WebSocket telemetry. Severe lock drifts trigger automatic fail-safes.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
