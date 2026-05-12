class RecommendationEngine:
    def generate(self, risk_level, insights, rules):
        recommendations = []
        
        if risk_level in ['high', 'medium']:
            for item in insights:
                if item.get('feature') == 'cantilever':
                    recommendations.append("Add support gussets or ribs at the mounting base to reduce bending stress.")
                if item.get('feature') == 'slender_walls':
                    recommendations.append("Increase wall thickness or add internal honeycombing for better buckling resistance.")
                    
        for rule in rules:
            if rule.get('recommendation'):
                recommendations.append(rule['recommendation'])
                
        return list(set(recommendations)) # Deduplicate
