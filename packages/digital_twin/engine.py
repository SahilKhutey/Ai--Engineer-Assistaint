import numpy as np

class DigitalTwinEngine:
    """
    Real-Time Digital Twin & Sensor Fusion Engine.
    Synchronizes physical sensor data with the FEA simulation.
    """
    def __init__(self):
        self.live_state = {
            "strain_micro": 0.0,
            "temperature_c": 22.0,
            "vibration_rms": 0.05
        }

    def fuse_sensor_data(self, physics_context: dict, sensor_data: dict):
        """
        Adjusts the simulation results based on real-world sensor measurements.
        Uses a simple 'Correction Factor' approach for the Digital Twin.
        """
        simulated_max_stress = physics_context.get("max_stress_mpa", 0)
        real_strain = sensor_data.get("strain_micro", 0)
        
        # Heuristic: Convert microstrain to MPa (approx for steel)
        # Stress = Strain * E
        measured_stress_mpa = (real_strain * 1e-6) * 200e3 # MPa
        
        # Calculate Deviation
        deviation = measured_stress_mpa - simulated_max_stress
        
        # Digital Twin Calibration
        calibrated_stress = simulated_max_stress + (deviation * 0.5) # Weighted fusion
        
        return {
            "measured_stress_mpa": float(measured_stress_mpa),
            "simulated_max_stress": float(simulated_max_stress),
            "calibrated_max_stress": float(calibrated_stress),
            "sensor_health": "OPTIMAL" if real_strain < 2000 else "CRITICAL_STRAIN",
            "prediction_to_failure_cycles": int(1e6 / (calibrated_stress + 1e-3)) # Simple fatigue proxy
        }
