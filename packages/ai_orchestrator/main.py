import os
import google.generativeai as genai
from rule_engine.main import RuleEngine
from reasoning_engine.main import ReasoningEngine
from ai_engine.nlp.intent_classifier import EngineeringIntentClassifier
from ai_engine.nlp.entity_extractor import EngineeringEntityExtractor
from prompt_layer.prompt_builder import EngineeringPromptBuilder
from prompt_layer.filters import PhysicsFilter
from .memory_engine import DesignMemoryEngine
from llm.engineering_llm import EngineeringLLM

class EngineeringOrchestrator:
    def __init__(self, mode: str = "hybrid"):
        self.llm = EngineeringLLM(mode=mode)
        self.reasoning_engine = ReasoningEngine()
        self.intent_classifier = EngineeringIntentClassifier()
        self.entity_extractor = EngineeringEntityExtractor()
        self.prompt_builder = EngineeringPromptBuilder()
        self.physics_filter = PhysicsFilter()
        self.memory_engine = DesignMemoryEngine()

        
        self.system_prompt = """
        You are an elite Engineering Intelligence System.
        You combine Symbolic Reasoning, Physics, Geometry Intelligence, and ML Risk Prediction.
        You are an AI Engineering Assistant with deep physical grounding. 
        Your analysis must follow these Physical Principles (Physics.md):
        
        1. LOAD PATHS: Trace how forces move from contact surfaces to supports.
        2. FUNCTIONAL FLEX: Consider if deformation (deflection) makes the part unusable, 
           even if it doesn't break.
        3. CONTACT PHYSICS: Assume rigid fixed supports unless specified. 
           Identify risks like bearing stress at mounting holes.
        
        STRUCTURE:
        ### 1. Physical Reasoning (Load Paths & Deformation)
        ### 2. Structural Risk (Stress & Buckling)
        ### 3. Engineering Recommendations (Geometry & Material)
        
        Be specific, grounded, and always list ASSUMPTIONS (e.g., static load, linear elasticity).
        """

    def _extract_intent(self, query: str) -> dict:
        """
        Working.md Section 3: Intent Detection.
        """
        # Basic regex-based force extraction
        force_match = re.search(r'(\d+)\s*(kg|n|lb|newtons)', query, re.IGNORECASE)
        load_n = 0
        if force_match:
            val = float(force_match.group(1))
            unit = force_match.group(2).lower()
            if unit == 'kg': load_n = val * 9.81
            elif unit == 'lb': load_n = val * 4.45
            else: load_n = val
            
        return {
            "analysis_type": "structural" if any(x in query.lower() for x in ["bend", "break", "survive", "load", "stress"]) else "general",
            "load_n": load_n,
            "query": query
        }

    def _calculate_confidence(self, context: dict, rules: list) -> float:
        score = 0.6 # Baseline
        if context.get('geometry_features', {}).get('physical', {}).get('is_watertight'): score += 0.1
        if context.get('material_name'): score += 0.1
        if len(rules) > 0: score += 0.1 # Rule matches increase reasoning certainty
        return min(max(score, 0.1), 0.98)

    async def analyze_query(self, query: str, context: dict):
        # 1. Engineering NLP Layer
        intent_type = self.intent_classifier.classify(query)
        entities = self.entity_extractor.extract(query)
        
        load_n = entities.get('load_n', context.get('load_n', 0))
        structural_rules = RuleEngine.evaluate_structural_rules(
            context.get('geometry_features', {}), 
            context.get('physics_results', {})
        )
        mfg_rules = RuleEngine.evaluate_manufacturing_rules(context.get('geometry_features', {}))
        mat_rules = RuleEngine.evaluate_material_rules(
            context.get('material', {}),
            context.get('physics_results', {})
        )
        all_rules = structural_rules + mfg_rules + mat_rules
        
        # 3. Retrieve Design Memory
        memory_results = await self.memory_engine.retrieve_similar_cases(
            context.get('geometry_features', {}), load_n
        )
        context['design_memory'] = memory_results
        
        # 4. Run Symbolic Reasoning Engine
        symbolic_result = await self.reasoning_engine.analyze(
            query,
            context.get('geometry_features', {}),
            context.get('physics_results', {}),
            all_rules
        )
        
        # 5. Calculate Confidence
        confidence = symbolic_result['confidence']
        
        # 6. Build Grounded Prompt (Prompt Layer)
        prompt = self.prompt_builder.build(
            query, 
            context, 
            symbolic_result
        )
        
        # 6. Generate Response
        response_text = await self.llm.analyze(
            prompt, 
            task="reasoning", 
            system_prompt=self.system_prompt
        )

        
        # 7. Post-Response Validation (Filter Layer)
        validation = self.physics_filter.validate_response(response_text, context)
        
        if not validation['valid']:
            response_text = f"WARNING: PHYSICAL_INCONSISTENCY_DETECTED\n\n{response_text}\n\n[System Note: The analysis above contains claims that conflict with deterministic physical limits. Please rely on the symbolic data below.]"
        
        return {
            "text": response_text,
            "confidence": confidence,
            "symbolic_analysis": symbolic_result,
            "rules_triggered": all_rules,
            "validation": validation
        }

def format_context_for_ai(material, geometry_features, physics_results, load_n):
    dims = geometry_features.get('dimensions_mm', {})
    return {
        "material": material,
        "material_name": material.get("name"),
        "geometry_summary": f"{dims.get('x')}x{dims.get('y')}x{dims.get('z')}mm, Vol: {geometry_features.get('physical', {}).get('volume_cm3')}cm3",
        "physics_summary": f"Max Stress: {physics_results.get('max_stress_mpa'):.2f} MPa, Safety Factor: {physics_results.get('safety_factor'):.2f}",
        "physics_results": physics_results,
        "geometry_features": geometry_features,
        "load_n": load_n,
        "assumptions": f"Static {load_n}N load, {material.get('name')} isotropic properties."
    }
