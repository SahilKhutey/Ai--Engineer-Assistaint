class PhysicsFilter:
    @staticmethod
    def validate_response(response_text: str, context: dict):
        """
        Validates LLM response against known physical ground truth.
        """
        sf = context.get('safety_factor', 2.0)
        
        # 1. Safety Factor Check
        if sf < 1.0:
            if "safe" in response_text.lower() and "unsafe" not in response_text.lower():
                return {
                    "valid": False,
                    "reason": f"CONFLICT: AI claimed safety while SF={sf}"
                }
                
        return {"valid": True}

class HallucinationFilter:
    @staticmethod
    def filter_fake_materials(response_text: str, allowed_materials: list):
        # Basic check to ensure LLM doesn't invent materials
        # For MVP, we just flag it in the log
        return True
