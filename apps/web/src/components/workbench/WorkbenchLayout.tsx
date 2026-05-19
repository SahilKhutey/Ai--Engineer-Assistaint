'use client';

import React, { useEffect, useRef } from 'react';
import { useEngineeringStore } from '../../store/useEngineeringStore';
import SystemProcessMonitor from './screens/SystemProcessMonitor';
import QuantumCommand from './screens/QuantumCommand';
import OrbitalFabricationQueue from './screens/OrbitalFabricationQueue';
import SimulationSyncConflictResolver from './screens/SimulationSyncConflictResolver';
import TurbulenceMesh from './screens/TurbulenceMesh';
import SpatialTelemetryDeck from './screens/SpatialTelemetryDeck';
import QuantumCircuit from './screens/QuantumCircuit';
import NotificationSettings from './screens/NotificationSettings';
import { LayoutGrid, Cpu, Sliders, Database, Wifi, WifiOff, Users, Clock, Compass, Terminal, ShieldAlert, Hammer, Activity, Wind } from 'lucide-react';

export default function WorkbenchLayout() {
  const { 
    activeScreen, 
    setActiveScreen, 
    wsStatus, 
    telemetry, 
    reasoningLogs, 
    userCount, 
    connect, 
    disconnect 
  } = useEngineeringStore();

  const logsEndRef = useRef<HTMLDivElement>(null);

  // Initialize sovereign WS bridge connection on mount
  useEffect(() => {
    connect();
    return () => disconnect();
  }, [connect, disconnect]);

  // Scroll to bottom of reasoning log panel automatically when new reasoning entries arrive
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [reasoningLogs]);

  // Get active screen component
  const renderScreen = () => {
    switch (activeScreen) {
      case 'SystemProcessMonitor':
        return <SystemProcessMonitor />;
      case 'QuantumCommand':
        return <QuantumCommand />;
      case 'OrbitalFabricationQueue':
        return <OrbitalFabricationQueue />;
      case 'SimulationSyncConflictResolver':
        return <SimulationSyncConflictResolver />;
      case 'TurbulenceMesh':
        return <TurbulenceMesh />;
      case 'SpatialTelemetryDeck':
        return <SpatialTelemetryDeck />;
      case 'QuantumCircuit':
        return <QuantumCircuit />;
      case 'NotificationSettings':
        return <NotificationSettings />;
      default:
        return <SystemProcessMonitor />;
    }
  };

  const getStatusIcon = () => {
    if (wsStatus === 'connected') return <Wifi size={14} color="var(--color-green)" />;
    if (wsStatus === 'connecting') return <WifiOff size={14} color="var(--color-yellow)" className="animate-pulse" />;
    return <WifiOff size={14} color="var(--color-red)" />;
  };

  return (
    <div className="t-layout-container" style={{ background: 'var(--bg-space)' }}>
      
      {/* Top Global Bar */}
      <header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 16px', 
        borderBottom: '1px solid var(--border-industrial)',
        background: 'var(--bg-panel)',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ 
            width: '18px', 
            height: '18px', 
            background: 'var(--color-blue)', 
            borderRadius: '3px',
            boxShadow: 'var(--glow-blue)'
          }} />
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontWeight: 'bold', 
            letterSpacing: '0.05em', 
            color: 'var(--text-primary)',
            fontSize: '13px'
          }}>ANTIGRAVITY OS v3.5_SOVEREIGN</span>
        </div>

        {/* Global Breadcrumbs & State Trackers */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Compass size={12} color="var(--color-blue)" />
            <span>LOC: WORKSPACE / CORE / SIMULATOR</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Users size={12} />
            <span>TERMINAL_LINKS: {userCount}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {getStatusIcon()}
            <span style={{ color: wsStatus === 'connected' ? 'var(--color-green)' : 'var(--text-secondary)' }}>
              CORE_BUS: {wsStatus.toUpperCase()}
            </span>
          </div>
        </div>
      </header>

      {/* Main Split Layout */}
      <div className="t-layout-main">
        
        {/* Left Sidebar - Navigation & Explorer */}
        <aside style={{ 
          borderRight: '1px solid var(--border-industrial)', 
          background: 'var(--bg-panel)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto'
        }}>
          
          {/* Workstation Module Index Header */}
          <div style={{ 
            padding: '12px 16px', 
            borderBottom: '1px solid rgba(255,255,255,0.03)',
            fontSize: '10px',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)'
          }}>
            SYSTEM MODULE INDEX
          </div>

          {/* Module Selections */}
          <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            
            <button 
              onClick={() => setActiveScreen('SystemProcessMonitor')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                background: activeScreen === 'SystemProcessMonitor' ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                border: '1px solid',
                borderColor: activeScreen === 'SystemProcessMonitor' ? 'var(--color-blue)' : 'transparent',
                borderRadius: '4px',
                color: activeScreen === 'SystemProcessMonitor' ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                transition: 'all 0.15s ease'
              }}
            >
              <Cpu size={14} color="var(--color-blue)" />
              <span>System Process Monitor</span>
            </button>

            <button 
              onClick={() => setActiveScreen('QuantumCommand')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                background: activeScreen === 'QuantumCommand' ? 'rgba(124, 92, 255, 0.1)' : 'transparent',
                border: '1px solid',
                borderColor: activeScreen === 'QuantumCommand' ? 'var(--color-purple)' : 'transparent',
                borderRadius: '4px',
                color: activeScreen === 'QuantumCommand' ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                transition: 'all 0.15s ease'
              }}
            >
              <Sliders size={14} color="var(--color-purple)" />
              <span>Quantum Stress Command</span>
            </button>

            <button 
              onClick={() => setActiveScreen('OrbitalFabricationQueue')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                background: activeScreen === 'OrbitalFabricationQueue' ? 'rgba(168, 85, 247, 0.1)' : 'transparent',
                border: '1px solid',
                borderColor: activeScreen === 'OrbitalFabricationQueue' ? 'var(--color-purple)' : 'transparent',
                borderRadius: '4px',
                color: activeScreen === 'OrbitalFabricationQueue' ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                transition: 'all 0.15s ease'
              }}
            >
              <Hammer size={14} color="var(--color-purple)" />
              <span>Orbital Fabrication Queue</span>
            </button>

            <button 
              onClick={() => setActiveScreen('SimulationSyncConflictResolver')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                background: activeScreen === 'SimulationSyncConflictResolver' ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
                border: '1px solid',
                borderColor: activeScreen === 'SimulationSyncConflictResolver' ? 'var(--color-green)' : 'transparent',
                borderRadius: '4px',
                color: activeScreen === 'SimulationSyncConflictResolver' ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                transition: 'all 0.15s ease'
              }}
            >
              <Activity size={14} color="var(--color-green)" />
              <span>Simulation Sync & Resolver</span>
            </button>

            <button 
              onClick={() => setActiveScreen('TurbulenceMesh')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                background: activeScreen === 'TurbulenceMesh' ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                border: '1px solid',
                borderColor: activeScreen === 'TurbulenceMesh' ? 'var(--color-blue)' : 'transparent',
                borderRadius: '4px',
                color: activeScreen === 'TurbulenceMesh' ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                transition: 'all 0.15s ease'
              }}
            >
              <Wind size={14} color="var(--color-blue)" />
              <span>Turbulence CFD Mesh</span>
            </button>

            <button 
              onClick={() => setActiveScreen('SpatialTelemetryDeck')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                background: activeScreen === 'SpatialTelemetryDeck' ? 'rgba(124, 92, 255, 0.1)' : 'transparent',
                border: '1px solid',
                borderColor: activeScreen === 'SpatialTelemetryDeck' ? 'var(--color-purple)' : 'transparent',
                borderRadius: '4px',
                color: activeScreen === 'SpatialTelemetryDeck' ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                transition: 'all 0.15s ease'
              }}
            >
              <Compass size={14} color="var(--color-purple)" />
              <span>Spatial Telemetry Deck</span>
            </button>

            <button 
              onClick={() => setActiveScreen('QuantumCircuit')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                background: activeScreen === 'QuantumCircuit' ? 'rgba(168, 85, 247, 0.1)' : 'transparent',
                border: '1px solid',
                borderColor: activeScreen === 'QuantumCircuit' ? 'var(--color-purple)' : 'transparent',
                borderRadius: '4px',
                color: activeScreen === 'QuantumCircuit' ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                transition: 'all 0.15s ease'
              }}
            >
              <Sliders size={14} color="var(--color-purple)" />
              <span>Quantum Qubit Circuit</span>
            </button>

            <button 
              onClick={() => setActiveScreen('NotificationSettings')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                background: activeScreen === 'NotificationSettings' ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
                border: '1px solid',
                borderColor: activeScreen === 'NotificationSettings' ? 'var(--color-green)' : 'transparent',
                borderRadius: '4px',
                color: activeScreen === 'NotificationSettings' ? 'var(--text-primary)' : 'var(--text-secondary)',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                transition: 'all 0.15s ease'
              }}
            >
              <ShieldAlert size={14} color="var(--color-green)" />
              <span>Notification Logic</span>
            </button>

          </div>

          {/* Simulated Workspace Files Tree */}
          <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.03)', padding: '12px 16px' }}>
            <div style={{ fontSize: '10px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
              RESOURCES EXPLORER
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
              <div>📁 docs/product/Design.md</div>
              <div>📁 docs/product/Screens.md</div>
              <div>📁 kernels/realtime_sync/</div>
              <div style={{ color: 'var(--text-accent)' }}>⚡ SovereignPhysicsKernel.py</div>
            </div>
          </div>

        </aside>

        {/* Central Dashboard Telemetry Content Viewport */}
        <main style={{ 
          background: 'var(--bg-space)',
          position: 'relative',
          overflowY: 'hidden'
        }}>
          {renderScreen()}
        </main>

        {/* Right Sidebar - AI Reasoner Console Logs */}
        <aside style={{ 
          borderLeft: '1px solid var(--border-industrial)', 
          background: 'var(--bg-panel)',
          display: 'grid',
          gridTemplateRows: 'auto 1fr',
          overflow: 'hidden'
        }}>
          
          <div style={{ 
            padding: '12px 16px', 
            borderBottom: '1px solid rgba(255,255,255,0.03)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Terminal size={14} color="var(--color-purple)" />
            <span style={{ 
              fontSize: '11px', 
              fontFamily: 'var(--font-mono)', 
              color: 'var(--text-primary)',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}>AI Reasoning Stream</span>
          </div>

          {/* Scrolling Logs Window */}
          <div style={{ 
            padding: '16px', 
            overflowY: 'auto', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            background: 'rgba(0,0,0,0.1)'
          }}>
            {reasoningLogs.map((log) => (
              <div key={log.id} style={{
                borderLeft: '2px solid',
                borderColor: 
                  log.type === 'success' ? 'var(--color-green)' :
                  log.type === 'warning' ? 'var(--color-yellow)' :
                  log.type === 'critical' ? 'var(--color-red)' : 'var(--color-blue)',
                paddingLeft: '8px',
                lineHeight: '1.4'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '9px', marginBottom: '2px' }}>
                  <span>[SYSTEM_{log.type.toUpperCase()}]</span>
                  <span suppressHydrationWarning>{new Date(log.timestamp).toLocaleTimeString()}</span>
                </div>
                <div style={{ 
                  color: 
                    log.type === 'success' ? 'var(--color-green)' :
                    log.type === 'warning' ? 'var(--color-yellow)' :
                    log.type === 'critical' ? 'var(--color-red)' : 'var(--text-primary)'
                }}>
                  {log.message}
                </div>
              </div>
            ))}
            <div ref={logsEndRef} />
          </div>

        </aside>

      </div>

    </div>
  );
}
