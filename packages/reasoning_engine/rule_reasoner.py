class RuleReasoner:
    def evaluate(self, context):
        warnings = []
        geometry = context.get('geometry', {})
        rules = context.get('rules', []) # Pre-evaluated rules from RuleEngine
        
        for rule in rules:
            if rule.get('severity') == 'high':
                warnings.append(f"CRITICAL: {rule.get('message')}")
            else:
                warnings.append(f"WARNING: {rule.get('message')}")
                
        return warnings
