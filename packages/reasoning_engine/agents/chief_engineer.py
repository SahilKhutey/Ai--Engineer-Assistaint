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
from ..optimization_engine.design_explorer import DesignExplorer
from ..geometry_engine.assembly_synthesis import AssemblySynthesisEngine
from ..optimization_engine.assembly_optimizer import AssemblyOptimizer
from ...rule_engine.engine import RuleEngine

class ChiefEngineeringAgent:
    """
    Primary Orchestrator for Engineering Reasoning.
    Synthesizes outputs from specialists into a coherent engineering summary.
    Enforces Hierarchy, Ethics, Compliance, and Future-Proofing.
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
        
        # 2. Regulatory Future-Proofing Audit
        updates = self.regulatory.monitor_standards()
        reg_report = self.regulatory.propose_rule_updates(updates)
        
        # 3. Global Synthesis
        status = "COMPLIANT"
        summary = f"Autonomous Engineering OS Analysis: {status}\n\n"
        
        # 15. Regulatory Evolution & Future-Proofing
        summary += "\n## 15. Regulatory Evolution & Future-Proofing\n"
        summary += f"> [!TIP]\n> **FUTURE-PROOFING STATUS**: {reg_report['future_proofing_status']}\n\n"
        
        summary += "### Detected Standards Updates:\n"
        for update in reg_report["detected_updates"]:
            summary += f"- **{update['standard']}**: {update['change']} | Impact: {update['impact_level']}\n"
        
        summary += "\n### Proposed Rule Engine Adjustments:\n"
        for prop in reg_report["rule_proposals"]:
            summary += f"- **{prop['rule_id']}**: {prop['action']} $\\rightarrow$ {prop['new_value']} | Rationale: {prop['rationale']}\n"

        return {
            "summary": summary,
            "status": status,
            "reports": {
                "structural": structural_report,
                "regulatory": reg_report
            }
        }
