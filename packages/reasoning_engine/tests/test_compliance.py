import unittest
from packages.reasoning_engine.agents.standards_agent import StandardsAgent

class TestNASASTD8006(unittest.TestCase):
    """
    Automated Verification Suite for NASA-STD-8006 Compliance.
    Ensures the OS correctly identifies structural margin violations.
    """
    def setUp(self):
        self.agent = StandardsAgent()

    def test_critical_failure_margin(self):
        """Should fail if SF is below target SF (1.5)."""
        data = {
            "structural": {"results": {"safety_factor": 1.2}},
            "material": {"yield_strength": 250}
        }
        reqs = {"min_sf": 1.5}
        report = self.agent.verify_compliance(data, reqs)
        
        nasa_report = next(r for r in report["compliance_report"] if r["code"] == "NASA-STD-8006")
        self.assertEqual(nasa_report["status"], "FAILED")
        self.assertLess(float(nasa_report["metric"].split(": ")[1]), 0)

    def test_nominal_safety_margin(self):
        """Should pass if SF is above target SF."""
        data = {
            "structural": {"results": {"safety_factor": 2.0}},
            "material": {"yield_strength": 250}
        }
        reqs = {"min_sf": 1.5}
        report = self.agent.verify_compliance(data, reqs)
        
        nasa_report = next(r for r in report["compliance_report"] if r["code"] == "NASA-STD-8006")
        self.assertEqual(nasa_report["status"], "PASSED")
        self.assertGreaterEqual(float(nasa_report["metric"].split(": ")[1]), 0)

    def test_iso_traceability_violation(self):
        """Should flag if engineering assumptions are missing."""
        data = {
            "structural": {"assumptions": ["Linear", "Isotropic"], "results": {"safety_factor": 2.0}},
            "material": {"yield_strength": 250}
        }
        report = self.agent.verify_compliance(data, {"min_sf": 1.5})
        
        iso_report = next(r for r in report["compliance_report"] if r["code"] == "ISO 9001:2015")
        self.assertEqual(iso_report["status"], "FLAGGED")

if __name__ == "__main__":
    unittest.main()
