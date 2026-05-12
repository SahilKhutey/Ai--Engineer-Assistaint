import numpy as np

class SignalConditioner:
    """Noise reduction and signal cleaning for raw sensor telemetry."""
    @staticmethod
    def clean(signal: list):
        if not signal: return 0.0
        # Simple moving average for noise rejection
        return float(np.mean(signal[-5:]))

class StateEstimator:
    """
    Kalman Filter foundation for Sensor Fusion.
    Estimates the 'True' state by combining Physics (Process) and Sensors (Measurement).
    """
    def __init__(self):
        self.state_estimate = 0.0
        self.error_covariance = 1.0
        self.process_noise = 0.01
        self.measurement_noise = 0.1

    def update(self, simulation_value: float, sensor_value: float):
        # 1. Prediction (Process)
        self.error_covariance += self.process_noise
        
        # 2. Update (Measurement)
        kalman_gain = self.error_covariance / (self.error_covariance + self.measurement_noise)
        self.state_estimate = self.state_estimate + kalman_gain * (sensor_value - self.state_estimate)
        self.error_covariance = (1 - kalman_gain) * self.error_covariance
        
        return self.state_estimate

class RULPredictor:
    """
    Remaining Useful Life (RUL) Predictor.
class KalmanFilter:
    """
    Standard Kalman Filter for State Estimation.
    Used to reconcile noisy sensor data with physics-based predictions.
    """
    def __init__(self, dim_x=2, dim_z=1):
        self.x = np.zeros((dim_x, 1)) # State [pos, vel]
        self.P = np.eye(dim_x) * 100.0 # Covariance
        self.F = np.eye(dim_x) # State Transition
        self.H = np.zeros((dim_z, dim_x)) # Measurement Function
        self.R = np.eye(dim_z) * 0.1 # Measurement Noise
        self.Q = np.eye(dim_x) * 0.01 # Process Noise

    def predict(self):
        self.x = np.dot(self.F, self.x)
        self.P = np.dot(np.dot(self.F, self.P), self.F.T) + self.Q

    def update(self, z):
        y = z - np.dot(self.H, self.x) # Residual
        S = np.dot(self.H, np.dot(self.P, self.H.T)) + self.R
        K = np.dot(np.dot(self.P, self.H.T), np.linalg.inv(S)) # Kalman Gain
        self.x = self.x + np.dot(K, y)
        self.P = self.P - np.dot(np.dot(K, self.H), self.P)

class DigitalTwinEngine:
    """
    Real-Time Digital Twin & Multi-Sensor Fusion.
    Monitors assembly health by fusing telemetry with physics models.
    """
    def __init__(self):
        self.filters = {
            "structural_strain": KalmanFilter(dim_x=2, dim_z=1),
            "thermal_state": KalmanFilter(dim_x=2, dim_z=1)
        }
        # Configure measurement functions (e.g., mapping sensor to strain)
        self.filters["structural_strain"].H = np.array([[1, 0]])
        self.filters["thermal_state"].H = np.array([[1, 0]])

    def sync_state(self, telemetry: dict, sim_data: dict):
        """
        Fuses real-time sensor streams with simulation results.
        """
        results = {}
        
        # 1. Structural Strain Fusion
        strain_sensor = telemetry.get("strain_gauge_01", 0)
        sim_strain = sim_data.get("physics", {}).get("max_strain", 0)
        
        kf = self.filters["structural_strain"]
        kf.predict()
        kf.update(np.array([[strain_sensor]]))
        
        fused_strain = kf.x[0, 0]
        results["fused_strain"] = round(float(fused_strain), 6)
        
        # 2. Remaining Useful Life (RUL) Prediction
        # Based on cumulative damage model (Miner's Rule approximation)
        cycle_count = telemetry.get("load_cycles", 0)
        fatigue_limit = 10**6 # Simulated cycles for Aluminum
        usage_ratio = (cycle_count / fatigue_limit) * (fused_strain / sim_strain if sim_strain > 0 else 1.0)
        rul_pct = max(0, 100 * (1.0 - usage_ratio))
        
        results["remaining_useful_life_pct"] = round(rul_pct, 1)
        results["health_status"] = "NOMINAL" if rul_pct > 80 else "DEGRADED" if rul_pct > 20 else "CRITICAL"
        
        return results
