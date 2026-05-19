import { create } from 'zustand';

export interface TelemetryData {
  kernelLoad: number;
  uptime: number;
  compliance: string;
}

export interface ReasoningLog {
  id: string;
  message: string;
  timestamp: number;
  type: 'info' | 'success' | 'warning' | 'critical';
}

export interface FluidsTelemetry {
  velocity?: number;
  pressure?: number;
  flowRate?: number;
  reynoldsNumber?: number;
  turbulenceIndex?: number;
  stability?: number;
  peclet?: number;
  reynolds?: number;
  mach?: number;
  cellCount?: number;
  iterations?: number;
}

export interface StructuralTelemetry {
  maxStressPa?: number;
  deflectionMeters?: number;
  safetyFactor?: number;
  bucklingRisk?: boolean;
}

export interface AerospaceTelemetry {
  aircraft?: { mass_kg: number; wingSpan_m: number; length_m: number };
  flightDynamics?: {
    machNumber: number;
    velocity_mps: number;
    attitude: { pitch: number; roll: number; yaw: number };
    altitude_m: number;
  };
  propulsion?: { thrust_kN: number; fuelFlow_kgs: number; coreTemp_K: number };
  orbital?: { periapsis_km: number; apoapsis_km: number; inclination_deg: number };
  avionics?: { status: string; redundancy: number };
}

export interface SpatialTelemetry {
  status?: string;
  transforms?: {
    position: { x: number; y: number; z: number };
    rotation: { w: number; x: number; y: number; z: number };
  };
  vslam?: { featureCount: number; confidence: number };
}

export interface QuantumTelemetry {
  fidelity?: number;
  coherenceTime_ms?: number;
  qubits?: { count: number; active: number };
  entanglement?: { state: string };
}

export interface ThermalTelemetry {
  physics?: { temperature: number; heatFlux: number };
  thermodynamics?: { efficiency_pct: number; systemPressure_MPa: number; entropy_JK: number; enthalpy_J: number };
  heatTransfer?: { conduction_Wmk: number; convection_Wm2K: number };
}

interface EngineeringState {
  // Telemetry States
  telemetry: TelemetryData;
  reasoningLogs: ReasoningLog[];
  fluidsTelemetry: FluidsTelemetry;
  structuralTelemetry: StructuralTelemetry;
  aerospaceTelemetry: AerospaceTelemetry;
  spatialTelemetry: SpatialTelemetry;
  quantumTelemetry: QuantumTelemetry;
  thermalTelemetry: ThermalTelemetry;
  userCount: number;
  
  // App States
  activeScreen: string;
  activeFilters: string[];
  wsStatus: 'disconnected' | 'connecting' | 'connected';
  
  // Actions
  setActiveScreen: (screenId: string) => void;
  setFilters: (filters: string[]) => void;
  addReasoningLog: (message: string, type?: ReasoningLog['type']) => void;
  clearReasoningLogs: () => void;
  
  // Connection Manager
  connect: () => void;
  disconnect: () => void;

  // Reference Screen Compatibility
  simulationState?: any;
  distributedCompute?: any;
  osStatus?: any;
  aerospaceState?: any;
  structuralState?: any;
  pushEvent?: (type: string, payload: any) => void;
  fluidState?: any;
  reasoningTrace?: any;
  quantumState?: any;
  addNotification?: (notification: any) => void;
}

let socket: WebSocket | null = null;

export const useEngineeringStore = create<EngineeringState>((set, get) => ({
  // Default values
  telemetry: {
    kernelLoad: 0.0,
    uptime: 0,
    compliance: 'OFFLINE'
  },
  reasoningLogs: [
    {
      id: 'init',
      message: 'System telemetry listener standby...',
      timestamp: Date.now(),
      type: 'info'
    }
  ],
  fluidsTelemetry: {},
  structuralTelemetry: {},
  aerospaceTelemetry: {},
  spatialTelemetry: {},
  quantumTelemetry: {},
  thermalTelemetry: {},
  userCount: 0,
  activeScreen: 'SystemProcessMonitor',
  activeFilters: [
    'STATUS_UPDATE', 
    'REASONING_TRACE', 
    'FLUID_UPDATE', 
    'STRUCTURAL_UPDATE', 
    'AEROSPACE_UPDATE', 
    'SPATIAL_UPDATE', 
    'QUANTUM_UPDATE', 
    'THERMAL_UPDATE'
  ],
  wsStatus: 'disconnected',

  // Reference Screen Compatibility Defaults
  simulationState: { status: 'ACTIVE', progress: 100 },
  distributedCompute: { nodes: 12, jobs: 4 },
  osStatus: { kernelLoad: 0.12, status: 'ACTIVE' },
  aerospaceState: { mach: 0.32, altitude: 42000 },
  structuralState: { maxStress: 140e6 },
  pushEvent: (type, payload) => console.log(`[Event: ${type}]`, payload),
  fluidState: { solver: { iterations: 1240, residuals: 1e-6, stability: 0.82, type: 'PISO_ALGO' }, properties: { density: 1.225, viscosity: 1.78e-5, mach: 0.34, reynolds: 5.4e6 }, telemetry: { lift_cl: 0.842, drag_cd: 0.0125, ld_ratio: 67.36 } },
  reasoningTrace: [{ timestamp: Date.now(), message: 'System calibrating...' }],
  quantumState: { coherence: 0.984, entanglement_density: 0.88, qubit_temp_mk: 14.2 },
  addNotification: (notification) => console.log('[Notification]', notification),

  setActiveScreen: (screenId) => set({ activeScreen: screenId }),

  setFilters: (filters) => {
    set({ activeFilters: filters });
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ filter: filters }));
    }
  },

  addReasoningLog: (message, type = 'info') => set((state) => ({
    reasoningLogs: [
      ...state.reasoningLogs.slice(-99), // Keep last 100 logs
      {
        id: Math.random().toString(36).substring(7),
        message,
        timestamp: Date.now(),
        type
      }
    ]
  })),

  clearReasoningLogs: () => set({ reasoningLogs: [] }),

  connect: () => {
    if (socket) {
      if (socket.readyState === WebSocket.CONNECTING || socket.readyState === WebSocket.OPEN) {
        return;
      }
      socket.close();
    }

    set({ wsStatus: 'connecting' });
    const wsUrl = `ws://localhost:8000/ws/engineering?filter=${get().activeFilters.join(',')}`;
    
    try {
      socket = new WebSocket(wsUrl);

      socket.onopen = () => {
        set({ wsStatus: 'connected' });
        get().addReasoningLog('Sovereign telemetry bridge established successfully.', 'success');
      };

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          const topic = data.type;
          const payload = data.payload;

          switch (topic) {
            case 'STATUS_UPDATE':
              set({
                telemetry: {
                  kernelLoad: payload.kernelLoad || 0.05,
                  uptime: payload.uptime || 0,
                  compliance: payload.compliance || 'NOMINAL'
                }
              });
              break;

            case 'REASONING_TRACE':
              get().addReasoningLog(payload.message || '', payload.level || 'info');
              break;

            case 'FLUID_UPDATE':
              set({ fluidsTelemetry: payload });
              break;

            case 'STRUCTURAL_UPDATE':
              set({ structuralTelemetry: payload });
              break;

            case 'AEROSPACE_UPDATE':
              set({ aerospaceTelemetry: payload });
              break;

            case 'SPATIAL_UPDATE':
              set({ spatialTelemetry: payload });
              break;

            case 'QUANTUM_UPDATE':
              set({ quantumTelemetry: payload });
              break;

            case 'THERMAL_UPDATE':
              set({ thermalTelemetry: payload });
              break;

            case 'USER_JOINED':
              set({ userCount: data.count || 0 });
              get().addReasoningLog(`New terminal console attached. Total links: ${data.count}`, 'info');
              break;

            case 'USER_LEFT':
              set({ userCount: data.count || 0 });
              get().addReasoningLog(`Terminal console detached. Total links: ${data.count}`, 'warning');
              break;

            default:
              break;
          }
        } catch (err) {
          // Silent catch to handle malformed websocket data
        }
      };

      socket.onclose = () => {
        set({ wsStatus: 'disconnected' });
        get().addReasoningLog('Sovereign telemetry bridge closed. Attempting reconnect...', 'warning');
        // Simple auto-reconnect loop
        setTimeout(() => {
          if (get().wsStatus === 'disconnected') {
            get().connect();
          }
        }, 5000);
      };

      socket.onerror = () => {
        set({ wsStatus: 'disconnected' });
        get().addReasoningLog('Telemetry socket connection error.', 'critical');
      };

    } catch (e) {
      set({ wsStatus: 'disconnected' });
      get().addReasoningLog('Failed to initialize WebSocket client.', 'critical');
    }
  },

  disconnect: () => {
    if (socket) {
      socket.close();
      socket = null;
    }
    set({ wsStatus: 'disconnected' });
  }
}));
