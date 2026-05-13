ENGINEERING_KNOWLEDGE = {
    "AEROSPACE": {
        "description": "Atmospheric flight and aerodynamics",
        "formulas": [
            "Lift: L = 0.5 * rho * v^2 * S * Cl",
            "Drag: D = 0.5 * rho * v^2 * S * Cd",
            "Mach Number: M = v / a"
        ],
        "symbols": ["rho", "v", "S", "Cl", "Cd", "a"]
    },
    "MECHANICAL": {
        "description": "Machines, structures, and dynamics",
        "formulas": [
            "Stress: sigma = F / A",
            "Strain: epsilon = delta_L / L",
            "Hooke's Law: sigma = E * epsilon"
        ],
        "symbols": ["F", "A", "sigma", "epsilon", "E"]
    },
    "QUANTUM": {
        "description": "Atomic and subatomic physics",
        "formulas": [
            "Schrodinger: H * psi = E * psi",
            "Uncertainty: delta_x * delta_p >= h_bar / 2"
        ],
        "symbols": ["psi", "H", "h_bar", "E"]
    },
    "PROPULSION": {
        "description": "Rocketry and jet engines",
        "formulas": [
            "Thrust: T = m_dot * v_e + (p_e - p_a) * A_e",
            "Tsiolkovsky: delta_v = v_e * ln(m0 / mf)"
        ],
        "symbols": ["m_dot", "v_e", "p_e", "p_a", "m0", "mf"]
    },
    "SPACE_SYSTEMS": {
        "description": "Orbital mechanics and satellite systems",
        "formulas": [
            "Kepler: T^2 = (4*pi^2 / GM) * a^3",
            "Escape Velocity: v = sqrt(2GM / r)"
        ],
        "symbols": ["G", "M", "r", "a", "T"]
    },
    "ROBOTICS": {
        "description": "Kinematics and autonomous control",
        "formulas": [
            "Jacobian: J = d(pos) / d(theta)",
            "Torque: tau = M(q)*q_dd + C(q,q_d)*q_d + G(q)"
        ],
        "symbols": ["q", "tau", "M", "J"]
    }
}
