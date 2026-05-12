class PhysicsReasoner:
    def estimate_bending_risk(self, force, length, thickness, modulus):
        # Qualitative bending risk estimation
        if thickness == 0: return 'high'
        
        # Flexural Rigidity ~ E * I, where I ~ thickness^3
        rigidity_index = modulus * (thickness ** 3)
        load_moment = force * length
        
        ratio = load_moment / rigidity_index if rigidity_index > 0 else float('inf')
        
        if ratio > 0.1: # Heuristic threshold
            return 'high'
        elif ratio > 0.01:
            return 'medium'
        return 'low'
