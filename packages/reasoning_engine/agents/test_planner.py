class TestPlanningAgent:
    """
    Expert Agent for Physical Validation & Verification (V&V).
    Designs physical test plans to validate simulation results.
    """
    def generate_validation_plan(self, synthesis_report: dict):
        """
        Generates a physical test plan based on peak stress and failure risks.
        """
        print("[V&V] Designing physical validation plan...")
        
        # 1. Identify Critical Instrumentation Points
        # Placing strain gauges at peak stress nodes identified in simulation.
        instrumentation = [
            {
                "sensor": "Strain_Gauge_SG01",
                "location": "Primary_Boom_Root",
                "rationale": "Peak Von-Mises Stress (210MPa) detected in simulation.",
                "target_range": "0-1000 microstrain"
            },
            {
                "sensor": "Thermocouple_TC01",
                "location": "Motor_Mount_Interface",
                "rationale": "High thermal-structural coupling zone.",
                "target_range": "0-150°C"
            }
        ]
        
        # 2. Test Procedure Generation
        procedure = [
            "1. Zero all instrumentation in ambient conditions.",
            "2. Apply incremental static load (0-500N) in 50N steps.",
            "3. Hold at 1.5x design load for 60 seconds (Factor of Safety check).",
            "4. Record hysteresis data during unloading phase."
        ]
        
        return {
            "specialty": "Validation & Verification (V&V)",
            "instrumentation_map": instrumentation,
            "test_procedure": procedure,
            "validation_confidence_required": 0.95,
            "success_criteria": "Measured strain within ±10% of simulation prediction at all nodes."
        }
