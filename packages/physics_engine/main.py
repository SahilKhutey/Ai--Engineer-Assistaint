import numpy as np

class BeamAnalyzer:
    """
    Simplified physics engine for heuristic mechanical analysis.
    Uses Euler-Bernoulli beam theory for basic deflection and stress estimation.
    """

    @staticmethod
    def calculate_cantilever_deflection(force_n, length_m, youngs_modulus_pa, moment_inertia_m4):
        """
        δ = (F * L^3) / (3 * E * I)
        """
        if youngs_modulus_pa <= 0 or moment_inertia_m4 <= 0:
            return 0
        return (force_n * (length_m**3)) / (3 * youngs_modulus_pa * moment_inertia_m4)

    @staticmethod
    def calculate_cantilever_max_stress(force_n, length_m, c_m, moment_inertia_m4):
        """
        σ = (M * c) / I
        M = F * L
        """
        if moment_inertia_m4 <= 0:
            return 0
        bending_moment = force_n * length_m
        return (bending_moment * c_m) / moment_inertia_m4

    @staticmethod
    def calculate_torsional_stress(torque_nm, radius_m, polar_moment_inertia_m4):
        """
        τ = (T * r) / J
        """
        if polar_moment_inertia_m4 <= 0:
            return 0
        return (torque_nm * radius_m) / polar_moment_inertia_m4

    @staticmethod
    def calculate_shear_stress(force_n, area_m2):
        """
        τ = V / A
        """
        if area_m2 <= 0:
            return 0
        return force_n / area_m2

    @staticmethod
    def estimate_euler_buckling(youngs_modulus_pa, moment_inertia_m4, length_m, k=2.0):
        """
        Pcr = (π^2 * E * I) / (KL)^2
        k=2.0 for cantilever (fixed-free)
        """
        if length_m <= 0:
            return float('inf')
        return (np.pi**2 * youngs_modulus_pa * moment_inertia_m4) / (k * length_m)**2

    @staticmethod
    def estimate_rectangular_inertia(width_m, height_m):
        """
        I = (b * h^3) / 12
        """
        return (width_m * (height_m**3)) / 12

    @staticmethod
    def check_safety_factor(max_stress_pa, yield_strength_pa):
        if max_stress_pa <= 0:
            return float('inf')
        return yield_strength_pa / max_stress_pa

def run_analysis_heuristics(material, geometry_data, load_n):
    """
    Entry point for the symbolic reasoning layer.
    """
    # Dimensions extraction
    dims = geometry_data.get("dimensions_mm", {})
    l = dims.get("max", 100) / 1000
    w = dims.get("y", 20) / 1000 # Width
    h = dims.get("z", 10) / 1000 # Height
    area = w * h
    
    e = material.get("youngs_modulus_pa")
    yield_s = material.get("yield_strength_pa")
    
    # 1. Bending Analysis
    i = BeamAnalyzer.estimate_rectangular_inertia(w, h)
    c = h / 2
    deflection = BeamAnalyzer.calculate_cantilever_deflection(load_n, l, e, i)
    bending_stress = BeamAnalyzer.calculate_cantilever_max_stress(load_n, l, c, i)
    
    # 2. Shear Analysis
    shear_stress = BeamAnalyzer.calculate_shear_stress(load_n, area)
    
    # 3. Buckling Analysis
    p_critical = BeamAnalyzer.estimate_euler_buckling(e, i, l)
    buckling_ratio = load_n / p_critical if p_critical > 0 else 0
    
    # Combined Safety Factor (Simplified)
    max_stress = max(bending_stress, shear_stress)
    safety_factor = BeamAnalyzer.check_safety_factor(max_stress, yield_s)
    
    # 4. Functional Flex Check (Physics.md Section 11)
    flex_ratio = deflection / l if l > 0 else 0
    functional_failure = flex_ratio > 0.05 # >5% deflection is usually a functional failure
    
    return {
        "max_deflection_mm": deflection * 1000,
        "flex_ratio_pct": flex_ratio * 100,
        "bending_stress_mpa": bending_stress / 1e6,
        "shear_stress_mpa": shear_stress / 1e6,
        "p_critical_n": p_critical,
        "buckling_risk": "high" if buckling_ratio > 0.5 else "low",
        "safety_factor": safety_factor,
        "is_safe": safety_factor > 2.0 and not functional_failure,
        "functional_failure": functional_failure,
        "failure_risk": "low" if safety_factor > 3.0 else "medium" if safety_factor > 1.5 else "high"
    }
