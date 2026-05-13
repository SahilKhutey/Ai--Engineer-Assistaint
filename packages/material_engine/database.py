MATERIAL_DATABASE = {
    "METALS": [
        {
            "id": "ti-6al-4v",
            "name": "Ti-6Al-4V (Grade 5 Titanium)",
            "density": 4430,
            "youngs_modulus": 113e9,
            "yield_strength": 880e6,
            "ultimate_strength": 950e6,
            "thermal_conductivity": 6.7,
            "thermal_expansion": 8.6e-6,
            "fatigue_limit": 510e6,
            "poisson_ratio": 0.34,
            "melting_point": 1660,
            "class": "METALS"
        },
        {
            "id": "inconel-718",
            "name": "Inconel 718 (Nickel Superalloy)",
            "density": 8190,
            "youngs_modulus": 200e9,
            "yield_strength": 1030e6,
            "ultimate_strength": 1240e6,
            "thermal_conductivity": 11.4,
            "thermal_expansion": 13.0e-6,
            "fatigue_limit": 600e6,
            "poisson_ratio": 0.3,
            "melting_point": 1336,
            "class": "METALS"
        }
    ],
    "COMPOSITES": [
        {
            "id": "cfrp-high-mod",
            "name": "CFRP (High Modulus Carbon Fiber)",
            "density": 1600,
            "youngs_modulus_longitudinal": 150e9,
            "youngs_modulus_transverse": 10e9,
            "shear_modulus": 5e9,
            "fiber_volume_fraction": 0.6,
            "class": "COMPOSITES"
        }
    ],
    "CERAMICS": [
        {
            "id": "sic",
            "name": "Silicon Carbide (SiC)",
            "density": 3210,
            "youngs_modulus": 410e9,
            "hardness_vickers": 2500,
            "class": "CERAMICS"
        }
    ],
    "SMART_MATERIALS": [
        {
            "id": "nitinol",
            "name": "Nitinol (Shape Memory Alloy)",
            "density": 6450,
            "transition_temp": 313,
            "class": "SMART_MATERIALS"
        }
    ]
}

def get_material(material_id):
    for category in MATERIAL_DATABASE.values():
        for material in category:
            if material["id"] == material_id:
                return material
    return None
