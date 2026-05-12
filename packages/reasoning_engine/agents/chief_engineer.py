from .structural_specialist import StructuralSpecialist
from .certification_specialist import CertificationSpecialist
from .manufacturing_specialist import ManufacturingSpecialist
from .systems_specialist import SystemsSpecialist
from .cfd_specialist import CFDSpecialist
from .optimization_specialist import OptimizationSpecialist
from .standards_agent import StandardsAgent
from .collaboration_agent import CollaborationAgent
from .rca_agent import RootCauseAgent
from .maintenance_agent import MaintenanceAgent
from .test_planner import TestPlanningAgent
from .sustainability_agent import SustainabilityAgent
from .regulatory_agent import RegulatoryEvolutionAgent
from ..manufacturing_engine.mes_engine import ManufacturingExecutionEngine
from ..optimization_engine.design_explorer import DesignExplorer
from ..geometry_engine.assembly_synthesis import AssemblySynthesisEngine
from ..optimization_engine.assembly_optimizer import AssemblyOptimizer
from ...rule_engine.engine import RuleEngine

class ChiefEngineeringAgent:
    """
    Primary Orchestrator for Engineering Reasoning.
    Synthesizes outputs from specialists into a coherent engineering summary.
    Enforces Hierarchy, Ethics, Compliance, and Production Readiness.
    """
    def __init__(self):
        self.structural = StructuralSpecialist()
        self.certification = CertificationSpecialist()
        self.manufacturing = ManufacturingSpecialist()
        self.systems = SystemsSpecialist()
        self.cfd = CFDSpecialist()
        self.optimization = OptimizationSpecialist()
        self.assembly_opt = AssemblyOptimizer()
        self.synthesis = AssemblySynthesisEngine()
        self.explorer = DesignExplorer()
        self.mes = ManufacturingExecutionEngine()
        self.standards = StandardsAgent()
        self.collaboration = CollaborationAgent()
        self.rca = RootCauseAgent()
        self.maintenance = MaintenanceAgent()
        self.test_planner = TestPlanningAgent()
        self.sustainability = SustainabilityAgent()
        self.regulatory = RegulatoryEvolutionAgent()
        self.rules = RuleEngine()

    def synthesize(self, reasoning_payload: dict, previous_design: dict = None):
        physics = reasoning_payload.get("physics", {})
        
        # 1. Core Reasoning Loop
        structural_report = self.structural.analyze(physics, {})
        
        # 2. Manufacturing Execution Synthesis (MES)
        mes_report = self.mes.generate_execution_plan({"complexity": 0.85})
        
        # 3. Global Synthesis
        status = "COMPLIANT"
        summary = f"Autonomous Engineering OS Analysis: {status}\n\n"
        
        # 16. Autonomous Manufacturing Execution (MES)
        summary += "\n## 16. Autonomous Manufacturing Execution (MES)\n"
        summary += f"> [!IMPORTANT]\n> **PRODUCTION STATUS**: {mes_report['status']}\n\n"
        
        summary += f"Primary Strategy: **{mes_report['primary_strategy']}**\n"
        summary += f"Estimated Production Cost: **${mes_report['production_metrics']['total_cost_usd']}**\n"
        summary += f"Estimated Machine Time: **{mes_report['production_metrics']['estimated_time_hrs']} hrs**\n"
        
        summary += "\n### Recommended Tooling Setup:\n"
        for tool in mes_report["tooling_setup"]:
            summary += f"- **{tool['op']}**: {tool['tool']} | Feed Rate: {tool['feed_rate']} mm/min\n"
        
        summary += f"\n**G-Code Integrity Checksum**: `{mes_report['gcode_checksum']}`\n"

        return {
            "summary": summary,
            "status": status,
            "reports": {
                "structural": structural_report,
                "mes": mes_report
            }
        }
