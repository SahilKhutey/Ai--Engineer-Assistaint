class ExplanationGenerator:
    def generate(self, risk_level, confidence, recommendations, load_path, warnings):
        summary = f"Engineering Risk: {risk_level.upper()} (Confidence: {confidence*100:.0f}%)\n\n"
        
        summary += f"Load Path Analysis: The system identifies the primary load path as '{load_path.get('primary_load_path')}'. "
        summary += f"High stress is expected at the '{load_path.get('critical_interface')}'.\n\n"
        
        if warnings:
            summary += "Key Warnings:\n"
            for w in warnings:
                summary += f"- {w}\n"
            summary += "\n"
            
        if recommendations:
            summary += "Recommendations:\n"
            for r in recommendations:
                summary += f"- {r}\n"
                
        return summary
