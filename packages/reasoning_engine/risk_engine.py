class RiskEngine:
    def calculate(self, insights, physics_results):
        score = 0
        
        # 1. Geometry Risks
        for item in insights:
            if item['risk'] == 'high': score += 3
            elif item['risk'] == 'medium': score += 1
            
        # 2. Physics Risks
        sf = physics_results.get('safety_factor', 2.0)
        if sf < 1.0: score += 5
        elif sf < 1.5: score += 2
        
        if score >= 5: return 'high'
        elif score >= 2: return 'medium'
        return 'low'
