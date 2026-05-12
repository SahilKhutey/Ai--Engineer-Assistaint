import json
import dspy

class EngineeringAnalysisSignature(dspy.Signature):
    """
    You are an elite Mechanical Engineering Analysis System.
    Your task is to provide a physics-grounded structural analysis.
    
    REQUIREMENTS:
    1. GROUNDING: All claims must be derived from the provided Physics and Geometry metrics.
    2. STRUCTURE: Follow the Engineering Chain (Geometry -> Load Path -> Risk -> Recommendation).
    3. REALISM: If the safety factor is < 1, prioritize failure warnings.
    4. NO HALLUCINATION: Do not invent material properties or stress values.
    5. EXPLAINABILITY: Explain WHY a region is weak (e.g., "due to cantilever bending").
    """
    
    material = dspy.InputField(desc="Material properties and name")
    geometry = dspy.InputField(desc="Geometric dimensions and features")
    physics_metrics = dspy.InputField(desc="FEM Simulation Results and Stresses")
    symbolic_reasoning = dspy.InputField(desc="Deterministic rule evaluations")
    design_memory = dspy.InputField(desc="Relevant past design scenarios")
    user_query = dspy.InputField(desc="The user's specific engineering question")
    
    analysis_text = dspy.OutputField(desc="Detailed narrative engineering analysis")
    failure_risk = dspy.OutputField(desc="Float from 0.0 to 1.0 estimating risk")
    critical_regions = dspy.OutputField(desc="Comma separated list of weak regions")

class DSPyEngineeringModule(dspy.Module):
    def __init__(self):
        super().__init__()
        self.analyzer = dspy.ChainOfThought(EngineeringAnalysisSignature)
        
    def forward(self, material, geometry, physics, symbolic, memory, query):
        return self.analyzer(
            material=material,
            geometry=geometry,
            physics_metrics=physics,
            symbolic_reasoning=symbolic,
            design_memory=memory,
            user_query=query
        )

class EngineeringPromptBuilder:
    """
    Legacy compatible wrapper around DSPy module for prompt construction.
    Note: When fully migrated to DSPy, the prompt builder becomes a full prediction module.
    """
    def __init__(self):
        self.dspy_module = DSPyEngineeringModule()
        
    def format_inputs(self, query: str, context: dict, symbolic_analysis: dict):
        # We prepare the inputs for DSPy
        return {
            "material": str(context.get('material_name')),
            "geometry": str(context.get('geometry_summary')),
            "physics": str(context.get('physics_summary')),
            "symbolic": json.dumps(symbolic_analysis, indent=2),
            "memory": json.dumps(context.get('design_memory', []), indent=2),
            "query": query
        }
    
    def build(self, query: str, context: dict, symbolic_analysis: dict):
        # Fallback raw prompt for existing orchestrator compatibility if DSPy LM is not configured
        inputs = self.format_inputs(query, context, symbolic_analysis)
        
        return f"""
        [DSPy Optimized Context Wrapper]
        
        ### ENGINEERING CONTEXT
        - Material: {inputs['material']}
        - Geometry: {inputs['geometry']}
        - Physics Metrics: {inputs['physics']}
        
        ### SYMBOLIC REASONING INSIGHTS
        {inputs['symbolic']}
        
        ### PAST DESIGN MEMORY
        {inputs['memory']}
        
        ### USER QUERY
        "{query}"
        
        Provide your analysis ending with a JSON block:
        {{
            "analysis_text": "...",
            "critical_regions": ["..."],
            "failure_risk": 0.0 to 1.0
        }}
        """
