class ConfidenceEngine:
    def estimate(self, context):
        confidence = 0.85 # Baseline
        
        geometry = context.get('geometry', {})
        if not geometry.get('physical', {}).get('is_watertight'):
            confidence -= 0.2
            
        if context.get('material') == 'unknown':
            confidence -= 0.15
            
        if not context.get('intent', {}).get('load_detected'):
            confidence -= 0.1
            
        return max(0.1, min(0.98, confidence))
