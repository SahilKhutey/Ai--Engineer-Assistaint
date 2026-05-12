class VoiceFeedbackGenerator:
    """
    Generates concise, spoken engineering reports for multimodal feedback.
    """
    def generate_report(self, physics_context: dict, reasoning: str):
        max_stress = physics_context.get("max_stress_mpa", 0)
        safety_factor = physics_context.get("safety_factor", 0)
        status = physics_context.get("status", "unknown")
        
        report = f"Structural analysis complete. "
        report += f"The maximum stress detected is {max_stress:.1f} megapascals. "
        report += f"With a safety factor of {safety_factor:.2f}, the design is currently considered {status}. "
        
        # Add a concise summary from reasoning
        if "nominal" in status:
            report += "Design meets standard requirements."
        else:
            report += "Caution. Stress concentrations exceed safety thresholds."
            
        return report

class EngineeringVoiceEngine:
    def __init__(self):
        self.generator = VoiceFeedbackGenerator()

    def get_voice_payload(self, physics_context: dict, reasoning: str):
        return {
            "spoken_text": self.generator.generate_report(physics_context, reasoning),
            "is_alert": physics_context.get("status") == "risk"
        }
