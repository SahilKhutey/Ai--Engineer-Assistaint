from geometry_engine.pipeline import (
    GeometryPipeline
)
from physics_engine.engine import (
    PhysicsEngine
)
from reasoning_engine.engine import (
    ReasoningEngine
)
from engineering_rag.memory_engine import (
    DesignMemoryEngine
)
from llm.engineering_llm import (
    EngineeringLLM
)
from voice_engine.main import (
    EngineeringVoiceEngine
)
from optimization_engine.engine import (
    OptimizationEngine
)
from material_engine.engine import (
    MaterialEngine
)
from verification_engine.engine import (
    VerificationEngine
)
from report_engine.engine import (
    EngineeringReportEngine
)
from pareto_engine.engine import (
    ParetoEngine
)
from digital_twin.engine import (
    DigitalTwinEngine
)
import os

class EngineeringOrchestrator:
    def __init__(self):
        self.geometry = GeometryPipeline()
        self.physics = PhysicsEngine()
        self.reasoning = ReasoningEngine()
        self.memory = DesignMemoryEngine()
        self.llm = EngineeringLLM()
        self.voice = EngineeringVoiceEngine()
        self.optimizer = OptimizationEngine()
        self.material = MaterialEngine()
        self.verifier = VerificationEngine()
        self.reporter = EngineeringReportEngine()
        self.pareto = ParetoEngine()
        self.twin = DigitalTwinEngine()

    async def run(
        self,
        payload
    ):
        # 1. Base Engineering Pipeline
        material_id = payload.get("material_id", "structural_steel")
        material_data = self.material.get_material(material_id)
        geometry_context = self.geometry.process(payload)
        geometry_context["material"] = material_data

        physics_context = self.physics.evaluate(geometry_context)
        optimization_context = self.optimizer.optimize(physics_context, geometry_context)
        lca_context = self.material.calculate_lca(
            material_id, 
            optimization_context.get("optimized_volume_mm3", 0)
        )

        # 2. Digital Twin & Sensor Fusion
        sensor_data = payload.get("sensor_data", {"strain_micro": 0})
        twin_context = self.twin.fuse_sensor_data(physics_context, sensor_data)

        # 3. Verification & Compliance
        verification_context = self.verifier.verify(physics_context, geometry_context)

        # 4. Multi-Objective Variants
        base_result = {
            "physics": physics_context,
            "lca": lca_context,
            "material": material_data
        }
        pareto_variants = self.pareto.generate_variants(base_result)

        # 5. AI Reasoning
        enhanced_payload = {
            **payload,
            "optimization_data": optimization_context,
            "lca_data": lca_context,
            "material_data": material_data,
            "verification_data": verification_context,
            "twin_data": twin_context
        }
        
        reasoning = self.reasoning.analyze(
            geometry_context,
            physics_context,
            enhanced_payload,
            []
        )

        return {
            'geometry': {
                'dimensions': geometry_context['dimensions'],
                'features': geometry_context['features'],
                'mesh': geometry_context['mesh_data'],
                'material': material_data
            },
            'physics': physics_context,
            'optimization': optimization_context,
            'lca': lca_context,
            'twin': twin_context,
            'verification': verification_context,
            'pareto': pareto_variants,
            'reasoning': reasoning,
            'voice_payload': self.voice.get_voice_payload(physics_context, reasoning)
        }
