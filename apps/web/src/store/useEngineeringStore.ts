import { create } from 'zustand'

export type ViewMode = 'GEOMETRY' | 'SIMULATION' | 'THERMAL' | 'CFD' | 'OPTIMIZATION' | 'TWIN'

export type EngineeringDomain = 
  | 'AEROSPACE' | 'STRUCTURAL' | 'FLUID' | 'THERMAL' | 'GEOMETRY'
  | 'ELECTROMAGNETIC' | 'COMMS' | 'ROBOTICS' | 'MATERIAL'
  | 'QUANTUM' | 'PROPULSION' | 'SPACE_SYSTEMS' | 'MANUFACTURING'
  | 'OPTIMIZATION' | 'SYMBOLIC' | 'MATERIALIZATION' | 'SECURITY' | 'MOLECULAR' | 'ACOUSTIC' | 'COGNITION'
  | 'GRAVITY' | 'NUCLEAR' | 'OPTICS' | 'MOTION' | 'PHOTONIC' | 'SPATIAL' | 'WORKFLOW'

export type InputType = 'SCALAR' | 'VECTOR' | 'TENSOR' | 'MATRIX' | 'PDE' | 'FIELD'

export interface Notification {
  id: string
  title: string
  message: string
  type: 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR' | 'CRITICAL'
  timestamp: number
  domain?: EngineeringDomain
  duration?: number
}

interface Variable {
  id: string
  label: string
  value: any
  unit: string
  domain: EngineeringDomain
  type: InputType
}

interface EngineeringState {
  // Master Architecture
  activeDomain: EngineeringDomain
  activeInputType: InputType
  viewMode: ViewMode
  isAnalyzing: boolean
  isListening: boolean
  
  // v3.1 Notification System
  notifications: Notification[]

  // v3.1 Multiversal Synchronization
  multiversalSync: {
    activeTimeline: string
    convergenceFidelity: number
    realityPersistence: boolean
    lastSync_void: number
  }

  // Phase 54: Engineering Cognition Runtime
  workflowState: {
    activeWorkflow: 'MASTER' | 'GEOMETRY' | 'SIMULATION' | 'AI_COGNITION' | 'COMPUTE' | 'TWIN' | 'VALIDATION' | 'MANUFACTURING' | 'XR'
    status: 'IDLE' | 'PLANNING' | 'MESHING' | 'SOLVING' | 'SYNCHRONIZING' | 'OPTIMIZING' | 'VALIDATING' | 'VISUALIZING' | 'MANUFACTURING'
    progress: number
    currentStep: string
    eventBus: { id: string, type: string, data: any, timestamp: number }[]
  }

  simulationGraph: {
    nodes: { id: string, type: 'GEOMETRY' | 'SOLVER' | 'VALIDATOR' | 'VISUALIZER', status: 'READY' | 'BUSY' | 'ERROR' }[]
    edges: { source: string, target: string, weight: number }[]
    activeGraphId: string
    executionPipeline: string[]
  }

  distributedCompute: {
    clusterStatus: 'ONLINE' | 'OFFLINE' | 'SCALING'
    activeGpus: number
    nodeDistribution: { nodeId: string, load: number, temperature: number }[]
    schedulerStatus: 'IDLE' | 'ALLOCATING' | 'EXECUTING'
    throughput_TFLOPS: number
  }

  digitalTwin: {
    activeTwinId: string
    telemetryStream: { sensorId: string, value: number, timestamp: number }[]
    syncResidual_ms: number
    anomalyScore: number
    predictiveMaintenance: { component: string, ttf_days: number, probability: number }[]
  }

  validationEngine: {
    layers: { id: string, name: string, status: 'PASSED' | 'FAILED' | 'PENDING', message: string }[]
    safetyFactor_v: number
    standardsCompliance: string[]
    aiHallucinationShield: number // 0-1
  }

  engineeringMemory: {
    patterns: { id: string, description: string, confidence: number, type: 'DESIGN' | 'FAILURE' | 'MATERIAL' | 'OPTIMIZATION' }[]
    lastLearnedContext: string
    intelligenceDensity: number
  }

  // Domain Intelligence Kernels (v3.2 Standardized to 'State' suffix for Phase 55)
  aerospaceState: any
  fluidState: any;
  symbolicState: any
  circuitState: any
  propulsionState: any
  cryogenicState: any
  combustionState: any
  terminalState: any
  physicsState: any
  materialsState: any
  signalState: {
    links: Array<{ id: string, name: string, latency: string, status: 'STABLE' | 'DEGRADED' | 'FAILED', network: string }>;
    waveform: { strength_dBm: number, noise_rms: number, carrier_GHz: number, offset_Hz: number };
    encoding: string;
    redundancy: number;
  };
  intelligenceState: any;
  electromagneticState: any
  commsState: any
  molecularState: any
  structuralState: any
  thermalState: any
  acousticState: any
  gravityState: any
  materialState: any
  quantumState: any
  nuclearState: any
  opticsState: any
  motionState: any
  photonicState: any
  roboticsState: any
  securityState: any
  spatialState: any
  geometryState: any
  materializationState: any
  homeState: any
  simulationState: any
  orchestrationState: any
  reasoningTrace: { agent: string, thought: string, timestamp: number }[]

  // Mathematical Truth
  intent: {
    command: string
    equations: string[]
    variables: Variable[]
    constraints: string[]
    safety_goal: number
  }

  // Realtime Validation
  validation: {
    errors: { id: string, level: 'CRITICAL' | 'WARNING' | 'ERROR', message: string }[]
    unitConsistency: boolean
  }

  // Telemetry & Results
  analysisResult: any | null
  streams: {
    telemetry: any[]
    femResiduals: number[]
  }
  symbolicTruth: {
    proofs: { id: string, statement: string, verified: boolean }[]
    residuals: number[]
  }

  // Infrastructure
  collaboratorCount: number
  socket: WebSocket | null
  osStatus: {
    kernelLoad: number
    physicsSync: boolean
    aiConfidence: number
    uptime: number
    status?: string
  }

  // v3.2 UI Orchestration
  uiState: {
    activeScreenId: string | null
    isSidebarOpen: boolean
  }

  // Actions
  setScreen: (id: string | null) => void
  toggleSidebar: () => void
  setDomain: (domain: EngineeringDomain) => void
  setViewMode: (mode: ViewMode) => void
  setCommand: (cmd: string) => void
  updateVariable: (id: string, value: any) => void
  addEquation: (eq: string) => void
  generateReport: (filename: string) => Promise<void>
  runAnalysis: (query?: string) => Promise<void>
  initSocket: () => void
  uploadFile: (file: File) => Promise<void>
  setIsListening: (isListening: boolean) => void
  speak: (text: string) => void
  pushEvent: (type: string, data: any) => void
  updateTwinTelemetry: (telemetry: any) => void
  updateDistributedNodes: (nodes: any[]) => void
  updateManufacturing: (payload: any) => void

  // Notification Actions
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void

  // Domain Actions (Standardized to update *State)
  updateAerospace: (p: any) => void
  updateFluid: (p: any) => void
  updateElectromagnetic: (p: any) => void
  updateComms: (p: any) => void
  updateMolecular: (p: any) => void
  updateStructural: (p: any) => void
  updateThermal: (p: any) => void
  updateAcoustic: (p: any) => void
  updateGravity: (p: any) => void
  updateMaterial: (p: any) => void
  updateQuantum: (p: any) => void
  updateNuclear: (p: any) => void
  updateOptics: (p: any) => void
  updateMotion: (p: any) => void
  updatePhotonic: (p: any) => void
  updateRobotics: (p: any) => void
  updateSecurity: (p: any) => void
  updateSpatial: (p: any) => void
  updateGeometry: (p: any) => void
  updateMaterialization: (p: any) => void
  startMaterialization: () => void
  updateFlight: (p: any) => void // Alias for updateAerospace
  runCFD: (p?: any) => void // Alias for updateFluid

  // Workflow Actions
  setWorkflow: (workflow: EngineeringState['workflowState']['activeWorkflow']) => void
  updateWorkflowStatus: (status: EngineeringState['workflowState']['status'], step?: string) => void
  addSimulationNode: (node: EngineeringState['simulationGraph']['nodes'][0]) => void
  addValidationLayer: (layer: EngineeringState['validationEngine']['layers'][0]) => void
  recordMemoryPattern: (pattern: EngineeringState['engineeringMemory']['patterns'][0]) => void
  syncTimeline: (timelineId: string) => void
  addSymbolicProof: (proof: { statement: string, verified: boolean }) => void
  startSimulationTicker: () => () => void
}

export const useEngineeringStore = create<EngineeringState>((set, get) => ({
  activeDomain: 'AEROSPACE',
  activeInputType: 'SCALAR',
  viewMode: 'GEOMETRY',
  isAnalyzing: false,
  isListening: false,
  
  notifications: [],

  multiversalSync: {
    activeTimeline: 'SOURCE_0x01',
    convergenceFidelity: 1.0,
    realityPersistence: true,
    lastSync_void: Date.now()
  },

  workflowState: {
    activeWorkflow: 'MASTER',
    status: 'IDLE',
    progress: 0,
    currentStep: 'SYSTEM_READY',
    eventBus: []
  },

  simulationGraph: {
    nodes: [
      { id: 'geo-01', type: 'GEOMETRY', status: 'READY' },
      { id: 'solv-01', type: 'SOLVER', status: 'READY' },
      { id: 'val-01', type: 'VALIDATOR', status: 'READY' }
    ],
    edges: [],
    activeGraphId: 'graph_0x01',
    executionPipeline: ['MESHING', 'SOLVING', 'VALIDATING']
  },

  distributedCompute: {
    clusterStatus: 'OFFLINE',
    activeGpus: 0,
    nodeDistribution: [],
    schedulerStatus: 'IDLE',
    throughput_TFLOPS: 0
  },

  digitalTwin: {
    activeTwinId: 'NONE',
    telemetryStream: [],
    syncResidual_ms: 0,
    anomalyScore: 0,
    predictiveMaintenance: []
  },

  validationEngine: {
    layers: [
      { id: 'phys-val', name: 'Physical Validation', status: 'PENDING', message: 'Waiting for solver convergence' },
      { id: 'std-val', name: 'Standards Compliance', status: 'PENDING', message: 'NIST_800-171' },
      { id: 'ai-val', name: 'AI Hallucination Shield', status: 'PASSED', message: 'Weights verified' }
    ],
    safetyFactor_v: 2.5,
    standardsCompliance: ['ISO_9001', 'AS9100'],
    aiHallucinationShield: 0.999
  },

  engineeringMemory: {
    patterns: [
      { id: 'pat-01', description: 'Optimal titanium lattice for high-thermal stress', confidence: 0.98, type: 'DESIGN' }
    ],
    lastLearnedContext: 'MANIFOLD_OPTIMIZATION',
    intelligenceDensity: 0.85
  },

  // Domain State Defaults (v3.2 Phase 55 Structured)
  aerospaceState: { 
    aircraft: { mass_kg: 0, wingSpan_m: 0, length_m: 0 },
    flightDynamics: { machNumber: 0, velocity_mps: 0, attitude: { pitch: 0, roll: 0, yaw: 0 }, altitude_m: 0 },
    propulsion: { thrust_kN: 0, fuelFlow_kgs: 0, coreTemp_K: 0 },
    orbital: { periapsis_km: 0, apoapsis_km: 0, inclination_deg: 0 },
    avionics: { status: 'STANDBY', redundancy: 0 }
  },
  fluidState: { 
    status: 'IDLE',
    solver: { iterations: 0, residuals: 1e-6, stability: 0.92, type: 'k-EPSILON_RANS' },
    properties: { density: 1.225, viscosity: 1.78e-5, mach: 0.34, reynolds: 5.4e6 },
    telemetry: { lift_cl: 0.842, drag_cd: 0.0125, ld_ratio: 67.36 }
  },
  signalState: {
    links: [
      { id: 'B1', name: 'MARS_COLONY_ALPHA', latency: '03:14:22s', status: 'STABLE', network: 'Deep Space Network B1' },
      { id: 'B2', name: 'TITAN_REFINERY_GATE', latency: '01:18:04h', status: 'STABLE', network: 'Deep Space Network B2' },
      { id: 'B3', name: 'NEPTUNE_ORBITER_V', latency: '04:02:11h', status: 'FAILED', network: 'Deep Space Network B3' }
    ],
    waveform: { strength_dBm: -84.2, noise_rms: 2.1, carrier_GHz: 8.41, offset_Hz: 0.04 },
    encoding: 'QPSK-16',
    redundancy: 0.9999
  },
  intelligenceState: {
    patterns: [],
    lastLearnedContext: 'IDLE',
    intelligenceDensity: 0
  },
  electromagneticState: { 
    emFields: { electricField_Vm: 0, magneticField_T: 0 }, 
    fdtdSolver: { status: 'IDLE' },
    antenna: { gain_dBi: 0, vswr: 0 },
    signal: { snr_dB: 0, ber: 0 }
  },
  commsState: { 
    shannonSolver: { status: 'IDLE' }, 
    signal: { snr_dB: 38, bandwidth_MHz: 20 },
    channel: { capacity_Mbps: 150, latency_ms: 2 },
    protocol: { standard: '5G_SOVEREIGN', status: 'ENCRYPTED' }
  },
  molecularState: { 
    gromacsSolver: { status: 'IDLE' }, 
    atomic: { bondingEnergy_eV: -4.5, potential_V: 1.2 },
    lattice: { constant_A: 5.43, symmetry: 'FCC' },
    solubility: { coefficient: 0.82 }
  },
  structuralState: { 
    status: 'IDLE',
    mesh: { nodes: 1240500, elements: 450200, quality: 0.998 },
    stress: { max_MPa: 420.5, yield_MPa: 650.0, factorOfSafety: 1.54, life_cycles: 1.2e7 },
    buckling: { loadFactor: 2.45, mode: 1 },
    fatigue: { life_cycles: 1.2e7, damage_index: 0.042 },
    vibration: { naturalFreq_Hz: [14.2, 45.8, 88.2, 124.5], damping: 0.02 },
    telemetry: { load_factor: 1.42, thermal_delta: 24.5 },
    material: { name: 'Al-7075-T6', density: 2810 }
  },
  thermalState: { 
    physics: { temperature: 298.15, heatFlux: 0 }, 
    solver: { status: 'IDLE' },
    thermodynamics: { efficiency_pct: 88.4, systemPressure_MPa: 12.4, entropy_JK: 120, enthalpy_J: 450000 },
    heatTransfer: { conduction_Wmk: 45, convection_Wm2K: 15 },
    combustion: { adiabaticFlameTemp_K: 2450, pressure_bar: 45 },
    cryogenics: { boilingPoint_K: 77.3 },
    materials: { conductivity: 12, emissivity: 0.95 }
  },
  acousticState: { 
    waves: { amplitude_dB: 85, frequency_Hz: 440, impedance_Rayls: 415 }, 
    vibrations: { displacement_mm: 0.012, velocity_mps: 0.005, acceleration_mps2: 2.4 },
    metamaterials: { bulkModulus_GPa: 2.1, density_kgm3: 1.2 },
    environmental: { temperature_C: 22, pressure_Pa: 101325 },
    solver: { status: 'IDLE' }
  },
  gravityState: { 
    field: { localG_mps2: 9.80665, potential_Jkg: -6.25e7 }, 
    relativity: { timeDilationFactor: 1.0000000001, curvature: 1e-12 } 
  },
  materialState: { 
    properties: { youngsModulus_GPa: 210, yieldStrength_MPa: 350, toughness_Jm2: 45000 },
    lattice: { structure: 'BCC', dislocations: 1e8 }
  },
  quantumState: { 
    fidelity: 0.9999, 
    coherenceTime_ms: 120, 
    qubits: { count: 128, active: 124 },
    entanglement: { state: 'BELL_PAIR' }
  },
  nuclearState: { 
    status: 'IDLE', 
    fusion: { plasmaTemp_keV: 15.2, confinementTime_s: 2.4 }, 
    fission: { reactivity: 0.0001, neutronFlux: 1e14 } 
  },
  opticsState: { 
    geometric: { refractiveIndex: 1.52, focalLength_mm: 50 }, 
    wavefront: { rmsError_nm: 0.045 },
    diffraction: { efficiency: 0.92 }
  },
  motionState: { 
    joints: [ { id: 'j1', angle: 45, torque: 12 }, { id: 'j2', angle: -15, torque: 8 } ], 
    lagrangianSolver: { status: 'IDLE' },
    inverseKinematics: { precision_mm: 0.01 }
  },
  photonicState: { 
    phaseResidual: 1e-12, 
    status: 'IDLE',
    laser: { power_W: 1.5, wavelength_nm: 1550 },
    interferometer: { contrast: 0.98 }
  },
  roboticsState: { 
    kinematics: { velocity_mps: 1.2, path_deviation: 0.005 }, 
    status: 'IDLE',
    control: { p: 120, i: 15, d: 2 }
  },
  securityState: { 
    status: 'SECURE', 
    firewall: { blockedRequests: 0, status: 'ACTIVE' },
    encryption: { level: 'AES_256_SOVEREIGN', quantumSafe: true }
  },
  spatialState: { 
    status: 'IDLE', 
    transforms: { position: { x: 0, y: 0, z: 0 }, rotation: { w: 1, x: 0, y: 0, z: 0 } },
    vslam: { featureCount: 120, confidence: 0.99 }
  },
  geometryState: {
    status: 'IDLE',
    mesh: { vertices: 0, indices: 0, isWatertight: true },
    topology: { eulerNumber: 0, genus: 0, shells: 1 },
    features: { holes: 0, chamfers: 0, fillets: 0 }
  },
  materializationState: { 
    status: 'IDLE', 
    buildProgress: 0, 
    depositionRate_mms: 0, 
    activeDepositionResidual: 0, 
    layerIntegrity: 0, 
    thermalStability: 0, 
    depositionProtocol: 'LASER_SINTERING' 
  },
  homeState: {
    cluster: { load_pct: 0, active_nodes: 0, total_nodes: 0 },
    metrics: { voltage_mv: 0, entanglement_fid: 0, cryo_mk: 0 },
    twins: []
  },
  simulationState: {
    solver: { load_pct: 0, fps: 0, timestep_s: 0 },
    viewport: { max_stress_mpa: 0, safety_factor: 0, temp_delta_c: 0 },
    gpu: { cluster_load_pct: 0, temp_c: 0 },
    data_flow: { gbps: 0 }
  },
  orchestrationState: {
    syncStatus: 'IDLE',
    agents: [],
    mission: { id: 'NONE', target: 'NONE', status: 'IDLE' }
  },
  reasoningTrace: [],

  intent: {
    command: '',
    equations: [],
    variables: [],
    constraints: [],
    safety_goal: 1.8
  },

  validation: {
    errors: [],
    unitConsistency: true
  },

  analysisResult: null,
  streams: { telemetry: [], femResiduals: [] },
  symbolicTruth: { proofs: [], residuals: [] },
  symbolicState: {},
  circuitState: {},
  propulsionState: {},
  cryogenicState: {},
  combustionState: {},
  terminalState: {},
  physicsState: {},
  materialsState: {},
  collaboratorCount: 1,
  socket: null,
  osStatus: { kernelLoad: 0.05, physicsSync: true, aiConfidence: 0.98, uptime: 0, status: 'ACTIVE' },

  uiState: {
    activeScreenId: '69b6efd3546343e095ecad7e9ce3e09a',
    isSidebarOpen: true
  },

  // Actions
  setScreen: (id) => set((state) => ({ uiState: { ...state.uiState, activeScreenId: id } })),
  toggleSidebar: () => set((state) => ({ uiState: { ...state.uiState, isSidebarOpen: !state.uiState.isSidebarOpen } })),
  setDomain: (domain) => set({ activeDomain: domain }),
  setViewMode: (viewMode) => set({ viewMode }),
  setCommand: (command) => set((state) => ({ intent: { ...state.intent, command } })),
  updateVariable: (id, value) => set((state) => ({ intent: { ...state.intent, variables: state.intent.variables.map(v => v.id === id ? { ...v, value } : v) } })),
  addEquation: (eq) => set((state) => ({ intent: { ...state.intent, equations: [...state.intent.equations, eq] } })),
  
  generateReport: async (filename: string) => {
    const { analysisResult, addNotification } = get();
    if (!analysisResult) {
      addNotification({
        title: 'REPORT_FAULT',
        message: 'No analysis results found. Generate telemetry data first.',
        type: 'ERROR',
        domain: 'COGNITION'
      });
      return;
    }

    try {
      addNotification({
        title: 'REPORT_INITIATED',
        message: 'Synthesizing professional engineering certification dossier...',
        type: 'INFO',
        domain: 'COGNITION'
      });

      const response = await fetch('http://localhost:8000/api/report/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          analysis_data: analysisResult,
          filename: filename || `SOVEREIGN_REPORT_${Date.now()}`
        })
      });

      if (!response.ok) throw new Error('REPORT_BUS_FAULT');

      const result = await response.json();
      window.open(result.report_url, '_blank');
      
      addNotification({
        title: 'REPORT_MATERIALIZED',
        message: 'Sovereign certification dossier converged and opened in new viewport.',
        type: 'SUCCESS',
        domain: 'COGNITION'
      });
    } catch (error) {
      addNotification({
        title: 'REPORT_FAULT',
        message: 'Failed to synthesize engineering dossier. Phase vector mismatch.',
        type: 'ERROR',
        domain: 'COGNITION'
      });
    }
  },

  runAnalysis: async (query) => {
    const { intent, activeDomain, addNotification } = get();
    set({ isAnalyzing: true });

    try {
      const response = await fetch('http://localhost:8000/api/analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query || intent.command,
          domain: activeDomain,
          math: { equations: intent.equations, variables: intent.variables },
          sovereign_intent: true,
          fidelity: 1.0
        })
      });

      if (!response.ok) throw new Error('COGNITION_BUS_FAULT');

      const result = await response.json();
      addNotification({
        title: 'ANALYSIS_INITIATED',
        message: `Sovereign job ${result.job_id} dispatched to multiversal solver kernels.`,
        type: 'INFO',
        domain: 'COGNITION'
      });

    } catch (error) {
      set({ isAnalyzing: false });
      addNotification({
        title: 'COGNITION_FAULT',
        message: 'Failed to dispatch analysis to sovereign backend. Phase vector mismatch.',
        type: 'ERROR',
        domain: 'COGNITION'
      });
    }
  },

  initSocket: () => {
    const { socket, addNotification, updateTwinTelemetry, pushEvent } = get();
    if (socket) return;

    try {
      const ws = new WebSocket('ws://localhost:8000/ws/engineering');
      
      ws.onopen = () => {
        set({ socket: ws });
        addNotification({
          title: 'SOVEREIGN_LINK_ESTABLISHED',
          message: 'Sovereign infrastructure socket connected to Master Backend Cluster.',
          type: 'SUCCESS',
          domain: 'SECURITY'
        });
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('SOVEREIGN_INCOMING:', data);

        if (data.type === 'USER_JOINED' || data.type === 'USER_LEFT') {
          set({ collaboratorCount: data.count || data.payload?.count || 0 });
        } else if (data.type === 'ANALYSIS_RESULT' || data.type === 'ANALYSIS_COMPLETE') {
          const result = data.result || data.payload;
          set({ analysisResult: result, isAnalyzing: false });
          addNotification({
            title: 'ANALYSIS_CONVERGED',
            message: 'Multiversal physics simulation result converged. Reality persistence verified.',
            type: 'SUCCESS',
            domain: 'QUANTUM'
          });
        } else if (data.type === 'TELEMETRY_UPDATE') {
          const telemetry = data.telemetry || data.payload;
          updateTwinTelemetry(telemetry);
        } else if (data.type === 'DISTRIBUTED_UPDATE') {
          const nodes = data.nodes || data.payload?.nodes || [];
          get().updateDistributedNodes(nodes);
        } else if (data.type === 'MANUFACTURING_UPDATE') {
          get().updateManufacturing(data.payload);
        } else if (data.type === 'STATUS_UPDATE') {
          addNotification({
            title: `PHASE: ${data.payload.phase}`,
            message: data.payload.message,
            type: 'INFO',
            domain: 'COGNITION'
          });
        } else if (data.type === 'SPATIAL_UPDATE') {
          get().updateSpatial(data.payload);
        } else if (data.type === 'GEOMETRY_UPDATE') {
          get().updateGeometry(data.payload);
        } else if (data.type === 'COMMS_UPDATE') {
          get().updateComms(data.payload);
        } else if (data.type === 'MOTION_UPDATE') {
          get().updateMotion(data.payload);
        } else if (data.type === 'GRAVITY_UPDATE') {
          get().updateGravity(data.payload);
        } else if (data.type === 'AEROSPACE_UPDATE') {
          get().updateAerospace(data.payload);
        } else if (data.type === 'THERMAL_UPDATE') {
          get().updateThermal(data.payload);
        } else if (data.type === 'STRUCTURAL_UPDATE') {
          get().updateStructural(data.payload);
        } else if (data.type === 'ELECTROMAGNETIC_UPDATE') {
          get().updateElectromagnetic(data.payload);
        } else if (data.type === 'MATERIAL_UPDATE') {
          get().updateMaterial(data.payload);
        } else if (data.type === 'QUANTUM_UPDATE') {
          get().updateQuantum(data.payload);
        } else if (data.type === 'SOLVER_UPDATE') {
          set((state) => ({ fluidState: { ...state.fluidState, solver: { ...state.fluidState.solver, ...data.payload } } }));
        } else if (data.type === 'SYMBOLIC_UPDATE') {
          set((state) => ({ symbolicState: { ...state.symbolicState, ...data.payload } }));
        } else if (data.type === 'CIRCUIT_UPDATE') {
          set((state) => ({ circuitState: { ...state.circuitState, ...data.payload } }));
        } else if (data.type === 'PROPULSION_UPDATE') {
          set((state) => ({ propulsionState: { ...state.propulsionState, ...data.payload } }));
        } else if (data.type === 'AEROSPACE_UPDATE') {
          set((state) => ({ aerospaceState: { ...state.aerospaceState, ...data.payload } }));
        } else if (data.type === 'SIGNAL_UPDATE') {
          set((state) => ({ signalState: { ...state.signalState, ...data.payload } }));
        } else if (data.type === 'FLUID_UPDATE') {
          set((state) => ({ fluidState: { ...state.fluidState, ...data.payload } }));
        } else if (data.type === 'ELECTROMAGNETIC_UPDATE') {
          set((state) => ({ electromagneticState: { ...state.electromagneticState, ...data.payload } }));
        } else if (data.type === 'MATERIAL_UPDATE') {
          set((state) => ({ materialState: { ...state.materialState, ...data.payload } }));
        } else if (data.type === 'THERMAL_UPDATE') {
          set((state) => ({ thermalState: { ...state.thermalState, ...data.payload } }));
        } else if (data.type === 'CRYOGENIC_UPDATE') {
          set((state) => ({ cryogenicState: { ...state.cryogenicState, ...data.payload } }));
        } else if (data.type === 'COMBUSTION_UPDATE') {
          set((state) => ({ combustionState: { ...state.combustionState, ...data.payload } }));
        } else if (data.type === 'TERMINAL_UPDATE') {
          set((state) => ({ terminalState: { ...state.terminalState, ...data.payload } }));
        } else if (data.type === 'HOME_UPDATE') {
          set((state) => ({ homeState: { ...state.homeState, ...data.payload } }));
        } else if (data.type === 'SIMULATION_UPDATE') {
          set((state) => ({ simulationState: { ...state.simulationState, ...data.payload } }));
        } else if (data.type === 'ORCHESTRATION_UPDATE') {
          set((state) => ({ orchestrationState: { ...state.orchestrationState, ...data.payload } }));
        } else if (data.type === 'MATERIALIZATION_UPDATE') {
          set((state) => ({ materializationState: { ...state.materializationState, ...data.payload } }));
        } else if (data.type === 'TWIN_UPDATE') {
          set((state) => ({ digitalTwin: { ...state.digitalTwin, ...data.payload } }));
        } else if (data.type === 'OPTICS_UPDATE') {
          set((state) => ({ opticsState: { ...state.opticsState, ...data.payload } }));
        } else if (data.type === 'NUCLEAR_UPDATE') {
          set((state) => ({ nuclearState: { ...state.nuclearState, ...data.payload } }));
        } else if (data.type === 'ROBOTICS_UPDATE') {
          set((state) => ({ roboticsState: { ...state.roboticsState, ...data.payload } }));
        } else if (data.type === 'MOTION_UPDATE') {
          set((state) => ({ motionState: { ...state.motionState, ...data.payload } }));
        } else if (data.type === 'REASONING_TRACE') {
          console.log(`[REASONING][${data.payload.agent}]: ${data.payload.thought}`);
          set((state) => ({ reasoningTrace: [...state.reasoningTrace, { ...data.payload, timestamp: Date.now() }].slice(-50) }));
          get().pushEvent('REASONING_TRACE', data.payload);
        } else if (data.type === 'SOVEREIGN_EVENT') {
          pushEvent(data.event_type || data.type, data.data || data.payload);
        }
      };

      ws.onclose = () => {
        set({ socket: null });
        addNotification({
          title: 'SOVEREIGN_LINK_LOST',
          message: 'Sovereign infrastructure socket disconnected. Attempting phase recalibration.',
          type: 'ERROR',
          domain: 'SECURITY'
        });
        // Reconnect after 5s
        setTimeout(() => get().initSocket(), 5000);
      };

      ws.onerror = (err) => {
        console.error('SOVEREIGN_SOCKET_FAULT:', err);
      };

    } catch (error) {
      console.error('SOVEREIGN_INIT_FAULT:', error);
    }
  },

  uploadFile: async (file) => {
    const { addNotification } = get();
    const formData = new FormData();
    formData.append('file', file);

    try {
      addNotification({
        title: 'UPLOAD_INITIATED',
        message: `Uploading sovereign asset: ${file.name}`,
        type: 'INFO',
        domain: 'MATERIAL'
      });

      const response = await fetch('http://localhost:8000/api/upload/', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) throw new Error('UPLOAD_FAULT');

      const result = await response.json();
      addNotification({
        title: 'UPLOAD_SUCCESS',
        message: `Sovereign asset ${file.name} materialized in backend repository.`,
        type: 'SUCCESS',
        domain: 'MATERIAL'
      });
    } catch (error) {
      addNotification({
        title: 'UPLOAD_FAULT',
        message: `Failed to upload sovereign asset: ${file.name}`,
        type: 'ERROR',
        domain: 'MATERIAL'
      });
    }
  },
  setIsListening: (isListening) => set({ isListening }),
  speak: (text) => { if (typeof window !== 'undefined' && window.speechSynthesis) { const utterance = new SpeechSynthesisUtterance(text); window.speechSynthesis.speak(utterance); } },

  addNotification: (n) => set((state) => ({ notifications: [{ ...n, id: Math.random().toString(), timestamp: Date.now() }, ...state.notifications] })),
  removeNotification: (id) => set((state) => ({ notifications: state.notifications.filter(n => n.id !== id) })),
  clearNotifications: () => set({ notifications: [] }),

  // Domain Actions
  updateAerospace: (p) => set((state) => ({ aerospaceState: { ...state.aerospaceState, ...p } })),
  updateFluid: (p) => set((state) => ({ fluidState: { ...state.fluidState, ...p } })),
  updateElectromagnetic: (p) => set((state) => ({ electromagneticState: { ...state.electromagneticState, ...p } })),
  updateComms: (p) => set((state) => ({ commsState: { ...state.commsState, ...p } })),
  updateMolecular: (p) => set((state) => ({ molecularState: { ...state.molecularState, ...p } })),
  updateStructural: (p) => set((state) => ({ structuralState: { ...state.structuralState, ...p } })),
  updateThermal: (p) => set((state) => ({ thermalState: { ...state.thermalState, ...p } })),
  updateAcoustic: (p) => set((state) => ({ acousticState: { ...state.acousticState, ...p } })),
  updateGravity: (p) => set((state) => ({ gravityState: { ...state.gravityState, ...p } })),
  updateMaterial: (p) => set((state) => ({ materialState: { ...state.materialState, ...p } })),
  updateQuantum: (p) => set((state) => ({ quantumState: { ...state.quantumState, ...p } })),
  updateNuclear: (p) => set((state) => ({ nuclearState: { ...state.nuclearState, ...p } })),
  updateOptics: (p) => set((state) => ({ opticsState: { ...state.opticsState, ...p } })),
  updateMotion: (p) => set((state) => ({ motionState: { ...state.motionState, ...p } })),
  updatePhotonic: (p) => set((state) => ({ photonicState: { ...state.photonicState, ...p } })),
  updateRobotics: (p) => set((state) => ({ roboticsState: { ...state.roboticsState, ...p } })),
  updateSecurity: (p) => set((state) => ({ securityState: { ...state.securityState, ...p } })),
  updateSpatial: (p) => set((state) => ({ spatialState: { ...state.spatialState, ...p } })),
  updateGeometry: (p) => set((state) => ({ geometryState: { ...state.geometryState, ...p } })),
  updateMaterialization: (p) => set((state) => ({ materializationState: { ...state.materializationState, ...p } })),
  updateFlight: (p) => get().updateAerospace(p),
  runCFD: (p) => get().updateFluid(p || {}),
  
  startMaterialization: () => {
    const { addNotification } = get();
    set((state) => ({ materializationState: { ...state.materializationState, status: 'INITIALIZING', buildProgress: 0 } }));
    addNotification({ title: 'MATERIALIZATION_INIT', message: 'Engine initializing.', type: 'INFO', domain: 'MATERIALIZATION' });
    setTimeout(() => {
      set((state) => ({ materializationState: { ...state.materializationState, status: 'DEPOSITING', buildProgress: 0.1 } }));
    }, 2000);
  },

  setWorkflow: (workflow) => set((state) => ({ workflowState: { ...state.workflowState, activeWorkflow: workflow } })),
  updateWorkflowStatus: (status, step) => set((state) => ({ workflowState: { ...state.workflowState, status, currentStep: step || state.workflowState.currentStep } })),
  pushEvent: (type, data) => set((state) => ({ 
    workflowState: { 
      ...state.workflowState, 
      eventBus: [{ id: Math.random().toString(36).substr(2, 9), type, data, timestamp: Date.now() }, ...state.workflowState.eventBus.slice(0, 49)] 
    } 
  })),
  addSimulationNode: (node) => set((state) => ({ simulationGraph: { ...state.simulationGraph, nodes: [...state.simulationGraph.nodes, node] } })),
  updateTwinTelemetry: (telemetry) => set((state) => {
    const newTelemetry = Array.isArray(telemetry) ? telemetry : [telemetry];
    return { 
      digitalTwin: { ...state.digitalTwin, telemetryStream: [...newTelemetry, ...state.digitalTwin.telemetryStream].slice(0, 100) },
      streams: { ...state.streams, telemetry: [...newTelemetry, ...state.streams.telemetry].slice(0, 100) }
    };
  }),
  updateDistributedNodes: (nodes) => set((state) => ({
    distributedCompute: { 
      ...state.distributedCompute, 
      nodeDistribution: nodes.map(n => ({ nodeId: n.id, load: n.load, temperature: n.temp || 40 }))
    }
  })),
  updateManufacturing: (payload) => set((state) => ({
    materializationState: { ...state.materializationState, ...payload }
  })),
  addValidationLayer: (layer) => set((state) => ({ validationEngine: { ...state.validationEngine, layers: [...state.validationEngine.layers, layer] } })),
  recordMemoryPattern: (pattern) => set((state) => ({ engineeringMemory: { ...state.engineeringMemory, patterns: [...state.engineeringMemory.patterns, pattern] } })),
  syncTimeline: (timelineId) => set((state) => ({ multiversalSync: { ...state.multiversalSync, activeTimeline: timelineId, lastSync_void: Date.now() } })),
  addSymbolicProof: (proof) => set((state) => ({ symbolicTruth: { ...state.symbolicTruth, proofs: [{ id: Math.random().toString(36).substr(2, 9), ...proof }, ...state.symbolicTruth.proofs] } })),

  startSimulationTicker: () => {
    const ticker = setInterval(() => {
      const state = get();
      if (state.socket && state.socket.readyState === WebSocket.OPEN) return;

      set((s) => ({
        osStatus: {
          ...s.osStatus,
          kernelLoad: Math.max(0.05, Math.min(0.95, s.osStatus.kernelLoad + (Math.random() - 0.5) * 0.02)),
          uptime: s.osStatus.uptime + 1,
          gpuTemp: 60 + Math.random() * 10,
          networkThroughput: 4.2 + (Math.random() - 0.5) * 0.4
        },
        aerospaceState: {
          ...s.aerospaceState,
          flightDynamics: {
            ...s.aerospaceState.flightDynamics,
            machNumber: Math.max(0, s.aerospaceState.flightDynamics.machNumber + (Math.random() - 0.5) * 0.01),
            altitude_m: Math.max(0, s.aerospaceState.flightDynamics.altitude_m + (Math.random() - 0.5) * 10)
          }
        },
        thermalState: {
          ...s.thermalState,
          physics: {
            ...s.thermalState.physics,
            temperature: (s.thermalState?.physics?.temperature || 1244.8) + (Math.random() - 0.5) * 0.5
          }
        },
        fluidState: {
          ...s.fluidState,
          solver: {
            ...s.fluidState.solver,
            iterations: (s.fluidState?.solver?.iterations || 0) + 1,
            residuals: Math.max(1e-9, (s.fluidState?.solver?.residuals || 1e-6) * (0.99 + Math.random() * 0.02))
          }
        },
        quantumState: {
          ...s.quantumState,
          fidelity: Math.max(0.99, Math.min(1, (s.quantumState?.fidelity || 0.99) + (Math.random() - 0.5) * 0.0001))
        },
        propulsionState: {
          ...s.propulsionState,
          thrust_kN: Math.max(0, (s.propulsionState?.thrust_kN || 120.5) + (Math.random() - 0.5) * 2),
          coreTemp_K: Math.max(300, (s.propulsionState?.coreTemp_K || 2850) + (Math.random() - 0.5) * 5)
        },
        electromagneticState: {
          ...s.electromagneticState,
          emFields: {
            ...s.electromagneticState.emFields,
            magneticField_T: (s.electromagneticState?.emFields?.magneticField_T || 0.5) + (Math.random() - 0.5) * 0.05
          }
        },
        orchestrationState: {
          ...s.orchestrationState,
          swarmAgreement: Math.max(0.85, Math.min(0.99, (s.orchestrationState?.swarmAgreement || 0.92) + (Math.random() - 0.5) * 0.01)),
          activeAgents: 12 + Math.floor(Math.random() * 2),
          latency_ms: Math.max(5, (s.orchestrationState?.latency_ms || 14.2) + (Math.random() - 0.5) * 0.5)
        },
        structuralState: {
          ...s.structuralState,
          stress: {
            ...s.structuralState?.stress,
            max_MPa: Math.max(0, (s.structuralState?.stress?.max_MPa || 420.5) + (Math.random() - 0.5) * 1.5),
            factorOfSafety: Math.max(1.1, (s.structuralState?.stress?.factorOfSafety || 1.54) + (Math.random() - 0.5) * 0.05)
          }
        },
        spatialState: {
          ...s.spatialState,
          terrainDetail: Math.max(0.7, Math.min(1, (s.spatialState?.terrainDetail || 0.85) + (Math.random() - 0.5) * 0.01))
        },
        opticsState: {
          ...s.opticsState,
          wavefrontError_nm: Math.max(2, (s.opticsState?.wavefrontError_nm || 12.4) + (Math.random() - 0.5) * 0.5)
        }
      }));
    }, 1000 / 60);

    return () => clearInterval(ticker);
  }
}))
