class GeometryReasoner:
    def analyze(self, geometry):
        insights = []
        
        # Cantilever check
        topology = geometry.get('structural', {}).get('topology')
        if topology == 'cantilever':
            insights.append({
                'risk': 'high',
                'feature': 'cantilever',
                'reason': 'Large unsupported span detected. Bending stress will be concentrated at the root.'
            })
            
        # Slenderness check
        if geometry.get('structural', {}).get('is_slender'):
            insights.append({
                'risk': 'medium',
                'feature': 'slender_walls',
                'reason': 'High aspect ratio walls detected. Risk of local buckling under compression.'
            })
            
        return insights
