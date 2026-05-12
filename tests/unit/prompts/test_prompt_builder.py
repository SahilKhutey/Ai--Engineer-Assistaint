from prompt_layer.prompt_builder import EngineeringPromptBuilder

def test_prompt_contains_context():
    builder = EngineeringPromptBuilder()
    context = {
        "material_name": "Aluminum",
        "geometry_summary": "Large bracket",
        "physics_summary": "SF=2.5"
    }
    symbolic_result = {"explanation": "Symbolic check passed"}
    
    prompt = builder.build("Analyze this", context, symbolic_result)
    
    assert "Aluminum" in prompt
    assert "SF=2.5" in prompt
    assert "Symbolic check passed" in prompt
