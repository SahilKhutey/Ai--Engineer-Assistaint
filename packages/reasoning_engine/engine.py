from llm.engineering_llm import (
    EngineeringLLM
)
from ontology_engine.engine import (
    OntologyEngine
)

class ReasoningEngine:
    def __init__(self):
        self.llm = EngineeringLLM()
        self.ontology = OntologyEngine()

    def analyze(self, geometry_context: dict, physics_context: dict, payload: dict, design_memory: list = None):
        """
        Orchestrates the reasoning process based on structural contexts, design memory, and ontology knowledge.
        """
        memory_context = ""
        if design_memory:
            memory_context = "\nDESIGN MEMORY (SIMILAR CASES/STANDARDS):\n" + "\n".join([str(m) for m in design_memory])

        # Graph-based knowledge lookup
        material_name = payload.get('material_data', {}).get('name', 'Steel')
        ontology_context = self.ontology.get_ontology_context(material_name)

        prompt = f"""
        ENGINEERING ANALYSIS REQUEST:
        {payload.get('question')}

        {ontology_context}

        STRUCTURAL CONTEXT:
        - Dimensions: {geometry_context.get('dimensions')}
        - Features: {geometry_context.get('features')}
        
        PHYSICS CONTEXT:
        - Max Stress: {physics_context.get('max_stress_mpa')} MPa
        - Max Displacement: {physics_context.get('max_displacement_mm')} mm
        - Safety Factor: {physics_context.get('safety_factor')}
        - Status: {physics_context.get('status')}

        GENERATIVE OPTIMIZATION:
        - Weight Reduction Potential: {payload.get('optimization_data', {}).get('weight_reduction_potential_pct', 0):.1f}%
        - Strategy: {payload.get('optimization_data', {}).get('optimization_strategy', 'N/A')}

        MATERIAL & SUSTAINABILITY (LCA):
        - Selected Material: {payload.get('material_data', {}).get('name')}
        - Estimated Mass: {payload.get('lca_data', {}).get('mass_kg', 0):.3f} kg
        - CO2 Footprint: {payload.get('lca_data', {}).get('co2_footprint_kg', 0):.2f} kg CO2
        - Estimated Cost: ${payload.get('lca_data', {}).get('estimated_cost_usd', 0):.2f}

        MULTI-OBJECTIVE TRADE-OFFS (PARETO):
        - Variants Analyzed: {len(payload.get('pareto_data', []))}
        - Key Options: {', '.join([v['name'] for v in payload.get('pareto_data', [])])}

        DIGITAL TWIN & SENSOR FUSION:
        - Measured Strain: {payload.get('sensor_data', {}).get('strain_micro', 0)} microstrain
        - Calibrated Stress: {payload.get('twin_data', {}).get('calibrated_max_stress', 0):.2f} MPa
        - Sensor Health: {payload.get('twin_data', {}).get('sensor_health')}
        - Prediction to Failure: {payload.get('twin_data', {}).get('prediction_to_failure_cycles')} cycles

        {memory_context}

        As an elite structural engineer, provide a professional analysis.
        Use the Digital Twin data to assess the real-world health of the component and suggest any immediate maintenance or operational limits.
        Include sections on 'Structural Health Monitoring', 'Sustainability & Material Choice', and 'Generative Design Recommendations'.
        """
        return self.llm.generate(prompt)
