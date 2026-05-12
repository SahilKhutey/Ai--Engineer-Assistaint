from .intent_parser import IntentParser
from .context_builder import ContextBuilder
from .geometry_reasoner import GeometryReasoner
from .load_path import LoadPathAnalyzer
from .physics_reasoner import PhysicsReasoner
from .rule_reasoner import RuleReasoner
from .risk_engine import RiskEngine
from .confidence_engine import ConfidenceEngine
from .recommendation_engine import RecommendationEngine
from .explainer import ExplanationGenerator
from ml.failure_predictor import FailurePredictor

class ReasoningEngine:
    def __init__(self):
        self.intent_parser = IntentParser()
        self.context_builder = ContextBuilder()
        self.geometry_reasoner = GeometryReasoner()
        self.load_path_analyzer = LoadPathAnalyzer()
        self.physics_reasoner = PhysicsReasoner()
        self.rule_reasoner = RuleReasoner()
        self.risk_engine = RiskEngine()
        self.confidence_engine = ConfidenceEngine()
        self.recommendation_engine = RecommendationEngine()
        self.explainer = ExplanationGenerator()
        self.ml_predictor = FailurePredictor()

    async def analyze(self, query: str, geometry: dict, physics: dict, rules: list):
        # 1. Parse Intent
        intent = self.intent_parser.parse(query)
        
        # 2. Build Context
        context = self.context_builder.build(geometry, physics, rules, query, intent)
        
        # 3. Geometry Reasoning
        geo_insights = self.geometry_reasoner.analyze(geometry)
        
        # 4. Load Path Analysis
        load_path = self.load_path_analyzer.estimate(geometry, intent)
        
        # 5. Rule Reasoning
        warnings = self.rule_reasoner.evaluate(context)
        
        # 6. ML Risk Prediction
        ml_features = {
            "aspect_ratio": geometry.get('structural', {}).get('aspect_ratio', 0),
            "safety_factor": physics.get('safety_factor', 2.0),
            "thickness": geometry.get('structural', {}).get('characteristic_thickness_mm', 0)
        }
        ml_result = self.ml_predictor.predict(ml_features)
        
        # 7. Risk Calculation
        risk_level = self.risk_engine.calculate(geo_insights, physics)
        
        # 8. Confidence Estimation
        confidence = self.confidence_engine.estimate(context)
        
        # 9. Recommendations
        recommendations = self.recommendation_engine.generate(risk_level, geo_insights, rules)
        
        # 10. Final Explanation
        explanation = self.explainer.generate(risk_level, confidence, recommendations, load_path, warnings)
        
        return {
            "explanation": explanation,
            "risk_level": risk_level,
            "ml_risk": ml_result,
            "confidence": confidence,
            "recommendations": recommendations,
            "load_path": load_path,
            "intent": intent,
            "geo_insights": geo_insights
        }
