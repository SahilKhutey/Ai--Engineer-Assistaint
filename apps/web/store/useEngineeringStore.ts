import { create } from 'zustand'

export type ViewMode = 'GEOMETRY' | 'SIMULATION' | 'THERMAL' | 'CFD' | 'OPTIMIZATION' | 'TWIN'

export type EngineeringDomain = 
  | 'AEROSPACE' | 'STRUCTURAL' | 'CFD' | 'THERMAL' 
  | 'ELECTRICAL' | 'CONTROLS' | 'ROBOTICS' | 'MATERIALS'
  | 'QUANTUM' | 'PROPULSION' | 'SPACE_SYSTEMS' | 'MANUFACTURING'
  | 'OPTIMIZATION' | 'SYMBOLIC'

export type InputType = 'SCALAR' | 'VECTOR' | 'TENSOR' | 'MATRIX' | 'PDE' | 'FIELD'

interface Variable {
  id: string
  label: string
  value: any
  unit: string
  domain: EngineeringDomain
  type: InputType
}

interface MaterialProperty {
  label: string
  value: number
  unit: string
  id: string
}

interface EngineeringState {
  // Master Architecture
  activeDomain: EngineeringDomain
  activeInputType: InputType
  viewMode: ViewMode
  isAnalyzing: boolean
  isListening: boolean
  
  // Optical & Photonic Intelligence Kernel
  opticalState: {
    geometric: {
      refractiveIndex: number
      focalLength_mm: number
      aperture_f: number
      distortionIndex: number
    },
    wavefront: {
      phase_rad: number
      rmsError_nm: number
      coherence_pct: number
      diffractionLimit: number
    },
    adaptive: {
      correctionFactor: number
      mirrorDeformation: number
      stabilityIndex: number
      atmosphericNoise: number
    },
    lasers: {
      gaussianProfile: number // 0-1 quality
      thermalLensing: number
      beamWaist_um: number
    },
    computational: {
      superResolution: number
      reconstructionQuality: number
      neuralDenoiseLevel: number
    },
    // Retained for backward compatibility
    spectrum: {
      range_nm: [number, number]
      peakIntensity: number
      absorptionBands: number[]
    },
    sensors: {
      exposure_ms: number
      noiseFloor_dB: number
      lidarPointDensity: number
      depthResolution_mm: number
    }
  }

  // Thermal & Energy Intelligence Kernel
  thermalState: {
    thermodynamics: {
      energyBalance_J: number
      entropy_JK: number
      systemPressure_MPa: number
      efficiency_pct: number
    },
    heatTransfer: {
      conduction_W: number
      convection_W: number
      radiation_W: number
      peakHeatFlux_Wm2: number
    },
    combustion: {
      flameTemp_K: number
      chamberPressure_MPa: number
      thermalInstability: number // 0-1 stability
      exhaustHeat_W: number
    },
    cryogenics: {
      boiloffRate_kgs: number
      tankTemp_K: number
      superconductorState: 'NORMAL' | 'SUPERCONDUCTING'
      insulationQuality: number
    },
    materials: {
      expansionFactor: number
      thermalStress_MPa: number
      ablationDepth_mm: number
      fatigueLevel: number
    }
  }

  // Spatial & Geometric Intelligence Kernel
  spatialState: {
    vectors: {
      activeVector_v: [number, number, number]
      magnitude: number
      dotProduct: number
      crossProduct_n: [number, number, number]
    },
    transformations: {
      activeFrame: 'CARTESIAN' | 'SPHERICAL' | 'CYLINDRICAL'
      rotationMatrix: number[][]
      quaternion_q: [number, number, number, number]
    },
    fields: {
      velocityFieldIntensity: number
      divergence: number
      curl: [number, number, number]
      activeFlowType: 'LAMINAR' | 'TURBULENT'
    },
    tensors: {
      stressTensor_Pa: number[][]
      strainIndex: number
      anisotropyFactor: number
    },
    dynamics: {
      acceleration_ms2: [number, number, number]
      angularMomentum_kgm2s: [number, number, number]
      torque_Nm: [number, number, number]
    }
  }

  // Material Intelligence
  materialIntelligence: {
    activeMaterialId: string
    activeMaterialData: any | null
    fatigueLifeCycles: number | null
    stressPoints: { strain: number, stress: number }[]
    safetyFactor: number
    
    // Advanced Material Systems
    microstructure: {
      averageGrainSize_um: number
      orientationAnisotropy: number // 0 to 1
      defectDensity: number
      phases: { name: string, percentage: number }[]
    }
    compositeStack: {
      id: string
      angle: number 
      thickness_mm: number
      materialId: string
    }[]
    delaminationRisk: number
  }

  // Quantum Intelligence Kernel
  quantumState: {
    qubits: { id: string, state: [number, number], phase: number }[]
    circuit: { gate: string, targets: string[] }[]
    entanglementMap: [string, string][]
    activeAlgorithm: 'VQE' | 'QAOA' | 'GROVER' | 'SHOR' | 'QML'
    coherenceTime_ms: number
    fidelity: number
    
    // Molecular & Security Systems
    molecular: {
      orbitals: { id: string, density: number, energy: number }[]
      bondStability: number
      predictedLattice: string
      dftEnergy_hartree: number
      vqeConvergence: number
    }
    security: {
      keyStatus: 'STABLE' | 'ROTATING' | 'INTERCEPTED'
      securityScore: number
      qkdFidelity: number
    }
    qml: {
      networkDepth: number
      anomalyScore: number
      trainingStatus: 'OPTIMIZING' | 'STABLE' | 'DRIFTING'
    }
    sensors: {
      sensitivity_pT: number 
      gravityGradient: number
      clockDrift_ns: number
    }
  }

  // Motion Intelligence Kernel
  motionState: {
    joints: { id: string, angle: number, velocity: number, limit: [number, number] }[]
    pose: { x: number, y: number, z: number, roll: number, pitch: number, yaw: number }
    dynamics: {
      mass: number
      inertia: number[][] // 3x3 tensor
      centerOfMass: [number, number, number]
      appliedForces: { vector: [number, number, number], point: [number, number, number] }[]
    }
    constraints: { type: string, targetId: string, status: 'LOCKED' | 'SOLVING' | 'VIOLATED' }[]
    stabilityScore: number
  }

  // Fluid Intelligence Kernel
  fluidState: {
    physics: {
      density: number
      viscosity: number
      machNumber: number
      reynoldsNumber: number
    }
    solver: {
      residuals: number[]
      convergenceRate: number
      status: 'IDLE' | 'SOLVING' | 'CONVERGED' | 'DIVERTED'
    }
    turbulence: {
      model: 'K-EPSILON' | 'K-OMEGA' | 'LES' | 'DNS'
      intensity: number
    }
    combustion: {
      flameTemp_K: number
      stability: number
      reactionRate: number
    }
  }

  // Aerospace Intelligence Kernel
  aerospaceState: {
    aircraft: {
      wingspan_m: number
      fuselageLength_m: number
      airfoil: string
      mass_kg: number
    }
    flightDynamics: {
      altitude_m: number
      velocity_mps: number
      machNumber: number
      attitude: { pitch: number, roll: number, yaw: number }
      angle_of_attack: number
    }
    propulsion: {
      type: 'TURBOFAN' | 'ROCKET' | 'ION'
      thrust_kN: number
      fuel_kg: number
      thermalLoad: number
    }
    orbital: {
      periapsis_km: number
      apoapsis_km: number
      inclination_deg: number
      deltaV_mps: number
    }
    avionics: {
      autopilotStatus: 'ARMED' | 'DISENGAGED' | 'ACTIVE'
      systemHealth: number
    }
  }

  // Gravity & Spacetime Intelligence Kernel
  gravityState: {
    field: {
      primaryMass_kg: number
      radius_km: number
      potential_Jkg: number
      localG_mps2: number
    }
    orbitalElements: {
      eccentricity: number
      semimajorAxis_km: number
      inclination_deg: number
      argPeriapsis_deg: number
      trueAnomaly_deg: number
    }
    relativity: {
      timeDilationFactor: number
      spacetimeCurvature: number // G_mu_nu representative
      gravitationalLensing: number
      eventHorizonRadius_m: number
    }
    nBody: {
      activeBodies: number
      stabilityIndex: number
      perturbationScore: number
    }
  }

  // Electromagnetic Intelligence Kernel
  electricalState: {
    circuits: {
      voltage_V: number
      current_A: number
      resistance_Ohm: number
      power_W: number
      frequency_Hz: number
    }
    emFields: {
      electricField_Vm: number
      magneticFlux_T: number
      currentDensity_Am2: number
      dielectricConstant: number
    }
    powerSystems: {
      load_percentage: number
      efficiency: number
      batteryLevel: number
      thermalLoss_W: number
    }
    rfSystems: {
      frequency_GHz: number
      bandwidth_MHz: number
      snr_dB: number
      gain_dBi: number
    }
    plasma: {
      confinementStability: number
      ionTemperature_keV: number
    }
  }

  // Nuclear Engineering Kernel
  nuclearEngine: {
    type: 'FUSION' | 'FISSION'
    status: 'ACTIVE' | 'IDLE' | 'CRITICAL' | 'SHUTDOWN'
    
    // Fission-specific
    fission: {
      reactivity: number // delta-k
      neutronFlux: number
      controlRodPosition: number
      moderatorTemp_K: number
    }
    
    // Fusion-specific
    fusion: {
      plasmaTemp_keV: number
      confinementTime_s: number
      magneticField_T: number
      stabilityIndex: number // 0-1
      tripleProduct: number
    }
    
    // Shared Energy Systems
    thermalHydraulics: {
      coolantFlow_kg_s: number
      coreTemp_K: number
      pressure_MPa: number
    }
    
    shielding: {
      radiationDose_mSv: number
      attenuationFactor: number
      leakageDetection: boolean
    }
  }

  // Space Systems Kernel
  spaceSystems: {
    orbit: {
      apogee_km: number
      perigee_km: number
      inclination_deg: number
      period_min: number
    }
    propulsion: {
      fuelMass_kg: number
      dryMass_kg: number
      specificImpulse_s: number
      deltaV_ms: number
    }
  }

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

  // Infrastructure
  collaboratorCount: number
  socket: WebSocket | null

  // Actions
  setDomain: (domain: EngineeringDomain) => void
  setViewMode: (mode: ViewMode) => void
  setCommand: (cmd: string) => void
  updateVariable: (id: string, value: any) => void
  addEquation: (eq: string) => void
  runAnalysis: (query?: string) => Promise<void>
  initSocket: () => void
  uploadFile: (file: File) => Promise<void>
  speak: (text: string) => void
}

export const useEngineeringStore = create<EngineeringState>((set, get) => ({
  activeDomain: 'AEROSPACE',
  activeInputType: 'SCALAR',
  viewMode: 'GEOMETRY',
  isAnalyzing: false,
  isListening: false,
  
  materialIntelligence: {
    activeMaterialId: 'ti-6al-4v',
    activeMaterialData: {
      name: "Ti-6Al-4V (Grade 5 Titanium)",
      density: 4430,
      youngs_modulus: 113e9,
      yield_strength: 880e6,
      fatigue_limit: 510e6,
      thermal_conductivity: 6.7
    },
    fatigueLifeCycles: 14200,
    stressPoints: [],
    safetyFactor: 2.4,
    microstructure: {
      averageGrainSize_um: 12.5,
      orientationAnisotropy: 0.15,
      defectDensity: 0.002,
      phases: [{ name: 'Alpha', percentage: 90 }, { name: 'Beta', percentage: 10 }]
    },
    compositeStack: [
      { id: 'p1', angle: 0, thickness_mm: 0.125, materialId: 'cfrp-high-mod' },
      { id: 'p2', angle: 45, thickness_mm: 0.125, materialId: 'cfrp-high-mod' },
      { id: 'p3', angle: -45, thickness_mm: 0.125, materialId: 'cfrp-high-mod' },
      { id: 'p4', angle: 90, thickness_mm: 0.125, materialId: 'cfrp-high-mod' }
    ],
    delaminationRisk: 0.12
  },

  quantumState: {
    qubits: [
      { id: 'q0', state: [1, 0], phase: 0 },
      { id: 'q1', state: [0, 1], phase: 0 }
    ],
    circuit: [
      { gate: 'Hadamard', targets: ['q0'] },
      { gate: 'CNOT', targets: ['q0', 'q1'] }
    ],
    entanglementMap: [['q0', 'q1']],
    activeAlgorithm: 'QAOA',
    coherenceTime_ms: 120,
    fidelity: 0.998,
    molecular: {
      orbitals: [
        { id: '1s', density: 0.95, energy: -13.6 },
        { id: '2s', density: 0.45, energy: -3.4 }
      ],
      bondStability: 0.88,
      predictedLattice: 'FCC',
      dftEnergy_hartree: -1.137,
      vqeConvergence: 0.995
    },
    security: {
      keyStatus: 'STABLE',
      securityScore: 0.99,
      qkdFidelity: 0.999
    },
    qml: {
      networkDepth: 8,
      anomalyScore: 0.04,
      trainingStatus: 'STABLE'
    },
    sensors: {
      sensitivity_pT: 0.5,
      gravityGradient: 0.00012,
      clockDrift_ns: 0.02
    }
  },

  motionState: {
    joints: [
      { id: 'j1', angle: 0, velocity: 0, limit: [-180, 180] },
      { id: 'j2', angle: 45, velocity: 0, limit: [-90, 90] },
      { id: 'j3', angle: -45, velocity: 0, limit: [-150, 150] },
      { id: 'j4', angle: 0, velocity: 0, limit: [-180, 180] }
    ],
    pose: { x: 1.2, y: 0.5, z: 0.8, roll: 0, pitch: 0, yaw: 0 },
    dynamics: {
      mass: 45.2,
      inertia: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
      centerOfMass: [0, 0, 0.4],
      appliedForces: []
    },
    constraints: [
      { type: 'Fixed', targetId: 'base', status: 'LOCKED' }
    ],
    stabilityScore: 0.98
  },

  fluidState: {
    physics: {
      density: 1.225, 
      viscosity: 1.789e-5,
      machNumber: 0.85,
      reynoldsNumber: 2.5e6
    },
    solver: {
      residuals: [1e-3, 1e-4, 5e-5, 1e-6],
      convergenceRate: 0.92,
      status: 'IDLE'
    },
    turbulence: {
      model: 'K-OMEGA',
      intensity: 0.05
    },
    combustion: {
      flameTemp_K: 2400,
      stability: 0.95,
      reactionRate: 0.88
    }
  },

  aerospaceState: {
    aircraft: {
      wingspan_m: 12.4,
      fuselageLength_m: 18.2,
      airfoil: 'NACA_64A010',
      mass_kg: 18000
    },
    flightDynamics: {
      altitude_m: 12000,
      velocity_mps: 510, 
      machNumber: 1.7,
      attitude: { pitch: 5, roll: 0, yaw: 0 },
      angle_of_attack: 2.4
    },
    propulsion: {
      type: 'TURBOFAN',
      thrust_kN: 85,
      fuel_kg: 4500,
      thermalLoad: 0.65
    },
    orbital: {
      periapsis_km: 400,
      apoapsis_km: 400,
      inclination_deg: 51.6,
      deltaV_mps: 1200
    },
    avionics: {
      autopilotStatus: 'ARMED',
      systemHealth: 0.99
    }
  },

  gravityState: {
    field: {
      primaryMass_kg: 5.972e24, // Earth
      radius_km: 6371,
      potential_Jkg: -62.5e6,
      localG_mps2: 9.806
    },
    orbitalElements: {
      eccentricity: 0.0001,
      semimajorAxis_km: 6771, // 400km LEO
      inclination_deg: 51.6,
      argPeriapsis_deg: 0,
      trueAnomaly_deg: 0
    },
    relativity: {
      timeDilationFactor: 1.0000000007,
      spacetimeCurvature: 1.0e-12,
      gravitationalLensing: 0.00001,
      eventHorizonRadius_m: 0
    },
    nBody: {
      activeBodies: 3,
      stabilityIndex: 0.995,
      perturbationScore: 0.02
    }
  },

  electricalState: {
    circuits: {
      voltage_V: 28,
      current_A: 15.5,
      resistance_Ohm: 1.8,
      power_W: 434,
      frequency_Hz: 400 // Aerospace standard
    },
    emFields: {
      electricField_Vm: 1200,
      magneticFlux_T: 0.15,
      currentDensity_Am2: 450,
      dielectricConstant: 1.0
    },
    powerSystems: {
      load_percentage: 65,
      efficiency: 0.94,
      batteryLevel: 0.88,
      thermalLoss_W: 26
    },
    rfSystems: {
      frequency_GHz: 12.5, // Ku-band
      bandwidth_MHz: 500,
      snr_dB: 18.5,
      gain_dBi: 42
    },
    plasma: {
      confinementStability: 0.92,
      ionTemperature_keV: 15
    }
  },

  updateElectrical: (params) => set((state) => ({
    electricalState: {
      ...state.electricalState,
      circuits: { ...state.electricalState.circuits, ...params }
    }
  })),

  updatePower: (params) => set((state) => ({
    electricalState: {
      ...state.electricalState,
      powerSystems: { ...state.electricalState.powerSystems, ...params }
    }
  })),

  updateRF: (params) => set((state) => ({
    electricalState: {
      ...state.electricalState,
      rfSystems: { ...state.electricalState.rfSystems, ...params }
    }
  })),

  updateOrbitalManeuver: (params) => set((state) => ({
    gravityState: {
      ...state.gravityState,
      orbitalElements: { ...state.gravityState.orbitalElements, ...params }
    }
  })),

  updateRelativity: (params) => set((state) => ({
    gravityState: {
      ...state.gravityState,
      relativity: { ...state.gravityState.relativity, ...params }
    }
  })),

  updateFlight: (params) => set((state) => ({
    aerospaceState: {
      ...state.aerospaceState,
      flightDynamics: { ...state.aerospaceState.flightDynamics, ...params }
    }
  })),

  updatePropulsion: (params) => set((state) => ({
    aerospaceState: {
      ...state.aerospaceState,
      propulsion: { ...state.aerospaceState.propulsion, ...params }
    }
  })),

  updateFluid: (params) => set((state) => ({
    fluidState: {
      ...state.fluidState,
      physics: { ...state.fluidState.physics, ...params }
    }
  })),

  runCFD: () => set((state) => ({
    fluidState: {
      ...state.fluidState,
      solver: { ...state.fluidState.solver, status: 'SOLVING' }
    }
  })),

  updateJoint: (id, angle) => set((state) => ({
    motionState: {
      ...state.motionState,
      joints: state.motionState.joints.map(j => j.id === id ? { ...j, angle } : j)
    }
  })),

  updateDynamics: (params) => set((state) => ({
    motionState: {
      ...state.motionState,
      dynamics: { ...state.motionState.dynamics, ...params }
    }
  })),

  nuclearEngine: {
    type: 'FUSION',
    status: 'ACTIVE',
    fission: {
      reactivity: 0.0001,
      neutronFlux: 1.2e14,
      controlRodPosition: 0.85,
      moderatorTemp_K: 580
    },
    fusion: {
      plasmaTemp_keV: 15,
      confinementTime_s: 2.5,
      magneticField_T: 5.4,
      stabilityIndex: 0.95,
      tripleProduct: 5.8e20
    },
    thermalHydraulics: {
      coolantFlow_kg_s: 1200,
      coreTemp_K: 1800,
      pressure_MPa: 15.5
    },
    shielding: {
      radiationDose_mSv: 0.05,
      attenuationFactor: 1e-8,
      leakageDetection: false
    }
  },

  updateNuclear: (params) => set((state) => ({
    nuclearEngine: {
      ...state.nuclearEngine,
      ...params
    }
  })),

  opticalState: {
    geometric: {
      refractiveIndex: 1.5168,
      focalLength_mm: 50,
      aperture_f: 1.8,
      distortionIndex: 0.02
    },
    wavefront: {
      phase_rad: 0,
      rmsError_nm: 25,
      coherence_pct: 0.98,
      diffractionLimit: 1.22
    },
    adaptive: {
      correctionFactor: 0.95,
      mirrorDeformation: 0.12,
      stabilityIndex: 0.99,
      atmosphericNoise: 0.05
    },
    lasers: {
      gaussianProfile: 0.99,
      thermalLensing: 0.02,
      beamWaist_um: 450
    },
    computational: {
      superResolution: 2.0,
      reconstructionQuality: 0.94,
      neuralDenoiseLevel: 0.15
    },
    spectrum: {
      range_nm: [400, 700],
      peakIntensity: 0.85,
      absorptionBands: [450, 520, 680]
    },
    sensors: {
      exposure_ms: 10,
      noiseFloor_dB: -85,
      lidarPointDensity: 1200,
      depthResolution_mm: 1.5
    }
  },

  updateOptics: (params) => set((state) => ({
    opticalState: {
      ...state.opticalState,
      geometric: { ...state.opticalState.geometric, ...params }
    }
  })),

  updateAdaptiveOptics: (params) => set((state) => ({
    opticalState: {
      ...state.opticalState,
      adaptive: { ...state.opticalState.adaptive, ...params }
    }
  })),

  updateComputationalOptics: (params) => set((state) => ({
    opticalState: {
      ...state.opticalState,
      computational: { ...state.opticalState.computational, ...params }
    }
  })),

  thermalState: {
    thermodynamics: {
      energyBalance_J: 4.5e6,
      entropy_JK: 1250,
      systemPressure_MPa: 12.5,
      efficiency_pct: 38.5
    },
    heatTransfer: {
      conduction_W: 12000,
      convection_W: 45000,
      radiation_W: 8500,
      peakHeatFlux_Wm2: 1.2e6
    },
    combustion: {
      flameTemp_K: 3200,
      chamberPressure_MPa: 10.2,
      thermalInstability: 0.05,
      exhaustHeat_W: 8.5e6
    },
    cryogenics: {
      boiloffRate_kgs: 0.02,
      tankTemp_K: 20.4, // LH2
      superconductorState: 'NORMAL',
      insulationQuality: 0.99
    },
    materials: {
      expansionFactor: 0.0012,
      thermalStress_MPa: 45,
      ablationDepth_mm: 0.5,
      fatigueLevel: 0.12
    }
  },

  updateThermal: (params) => set((state) => ({
    thermalState: {
      ...state.thermalState,
      thermodynamics: { ...state.thermalState.thermodynamics, ...params }
    }
  })),

  updateHeatFlow: (params) => set((state) => ({
    thermalState: {
      ...state.thermalState,
      heatTransfer: { ...state.thermalState.heatTransfer, ...params }
    }
  })),

  updateCombustion: (params) => set((state) => ({
    thermalState: {
      ...state.thermalState,
      combustion: { ...state.thermalState.combustion, ...params }
    }
  })),

  updateCryogenics: (params) => set((state) => ({
    thermalState: {
      ...state.thermalState,
      cryogenics: { ...state.thermalState.cryogenics, ...params }
    }
  })),

  spatialState: {
    vectors: {
      activeVector_v: [1, 2, 3],
      magnitude: 3.74,
      dotProduct: 0.85,
      crossProduct_n: [0, 1, 0]
    },
    transformations: {
      activeFrame: 'CARTESIAN',
      rotationMatrix: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
      quaternion_q: [0, 0, 0, 1]
    },
    fields: {
      velocityFieldIntensity: 45,
      divergence: 0.02,
      curl: [0, 0, 1],
      activeFlowType: 'LAMINAR'
    },
    tensors: {
      stressTensor_Pa: [[100, 0, 0], [0, 100, 0], [0, 0, 100]],
      strainIndex: 0.001,
      anisotropyFactor: 1.0
    },
    dynamics: {
      acceleration_ms2: [0, -9.81, 0],
      angularMomentum_kgm2s: [0, 0, 0],
      torque_Nm: [0, 0, 0]
    }
  },

  updateVectors: (params) => set((state) => ({
    spatialState: {
      ...state.spatialState,
      vectors: { ...state.spatialState.vectors, ...params }
    }
  })),

  updateTransformations: (params) => set((state) => ({
    spatialState: {
      ...state.spatialState,
      transformations: { ...state.spatialState.transformations, ...params }
    }
  })),

  updateFields: (params) => set((state) => ({
    spatialState: {
      ...state.spatialState,
      fields: { ...state.spatialState.fields, ...params }
    }
  })),

  updateMolecular: (params) => set((state) => ({
    quantumState: {
      ...state.quantumState,
      molecular: { ...state.quantumState.molecular, ...params }
    }
  })),

  updateQuantumSecurity: (params) => set((state) => ({
    quantumState: {
      ...state.quantumState,
      security: { ...state.quantumState.security, ...params }
    }
  })),

  updateQML: (params) => set((state) => ({
    quantumState: {
      ...state.quantumState,
      qml: { ...state.quantumState.qml, ...params }
    }
  })),

  updateQuantumSensors: (params) => set((state) => ({
    quantumState: {
      ...state.quantumState,
      sensors: { ...state.quantumState.sensors, ...params }
    }
  })),

  spaceSystems: {
    orbit: {
      apogee_km: 400,
      perigee_km: 400,
      inclination_deg: 51.6,
      period_min: 92.5
    },
    propulsion: {
      fuelMass_kg: 5000,
      dryMass_kg: 2000,
      specificImpulse_s: 320,
      deltaV_ms: 3100
    }
  },

  updateCompositePly: (id, angle) => set((state) => {
    const newStack = state.materialIntelligence.compositeStack.map(p => p.id === id ? { ...p, angle } : p);
    // Coupling Logic: If angle is far from 0/90, risk increases slightly for this demo
    const risk = 0.1 + (Math.abs(angle) / 180) * 0.4;
    return {
      materialIntelligence: {
        ...state.materialIntelligence,
        compositeStack: newStack,
        delaminationRisk: risk
      }
    };
  }),

  updateSpaceSystems: (params) => set((state) => ({
    spaceSystems: {
      ...state.spaceSystems,
      ...params
    }
  })),

  updateMicrostructure: (params) => set((state) => ({
    materialIntelligence: {
      ...state.materialIntelligence,
      microstructure: { ...state.materialIntelligence.microstructure, ...params }
    }
  })),

  intent: {
    command: '',
    equations: [],
    variables: [
      { id: 'E', label: "Young's Modulus", value: 210, unit: 'GPa', domain: 'STRUCTURAL', type: 'SCALAR' },
      { id: 'rho', label: 'Density', value: 7850, unit: 'kg/m³', domain: 'STRUCTURAL', type: 'SCALAR' },
      { id: 'mach', label: 'Mach Number', value: 0.85, unit: 'M', domain: 'AEROSPACE', type: 'SCALAR' }
    ],
    constraints: [],
    safety_goal: 1.8
  },

  validation: {
    errors: [],
    unitConsistency: true
  },

  analysisResult: null,
  streams: {
    telemetry: [],
    femResiduals: [0.0001, 0.0002, 0.0001, 0.00015, 0.00012, 0.0001, 0.00008, 0.00005, 0.00003, 0.00001]
  },

  collaboratorCount: 1,
  socket: null,

  setDomain: (domain) => {
    set({ activeDomain: domain })
    get().speak(`Activating ${domain.toLowerCase()} intelligence layer.`)
  },

  setViewMode: (viewMode) => set({ viewMode }),

  setCommand: (command) => set((state) => ({ intent: { ...state.intent, command } })),

  updateVariable: (id, value) => set((state) => ({
    intent: {
      ...state.intent,
      variables: state.intent.variables.map(v => v.id === id ? { ...v, value } : v)
    }
  })),

  addEquation: (eq) => set((state) => ({
    intent: { ...state.intent, equations: [...state.intent.equations, eq] }
  })),

  runAnalysis: async (query) => {
    set({ isAnalyzing: true })
    const { activeDomain, intent } = get()
    
    try {
      await fetch('http://localhost:8000/api/analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question: query || intent.command, 
          domain: activeDomain,
          math: {
            equations: intent.equations,
            variables: intent.variables
          }
        })
      })
    } catch (error) {
      console.error("Analysis failed:", error)
      set({ isAnalyzing: false })
    }
  },

  initSocket: () => {
    if (get().socket) return
    const ws = new WebSocket('ws://localhost:8000/ws/engineering')
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (data.type === 'ANALYSIS_COMPLETE') {
        set({ analysisResult: data.payload, isAnalyzing: false })
      } else if (data.type === 'TELEMETRY' || data.type === 'REASONING_TRACE') {
        set((state) => ({
          streams: {
            ...state.streams,
            telemetry: [...state.streams.telemetry.slice(-49), { ...data.payload, timestamp: new Date().toLocaleTimeString() }]
          }
        }))
      } else if (data.type === 'USER_JOINED' || data.type === 'USER_LEFT') {
        set({ collaboratorCount: data.count })
      }
    }
    set({ socket: ws })
  },

  uploadFile: async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    try {
      await fetch('http://localhost:8000/api/upload', {
        method: 'POST',
        body: formData
      })
      get().speak("Engineering asset ingested successfully.")
    } catch (error) {
      console.error("Upload failed:", error)
    }
  },

  speak: (text) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 1.1
      utterance.pitch = 0.9
      window.speechSynthesis.speak(utterance)
    }
  }
}))
