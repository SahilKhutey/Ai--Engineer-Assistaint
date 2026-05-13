import pytest
from packages.physics_core.validation.validator import RealityValidator

def test_energy_conservation_enforcement():
    """
    Validates that the OS rejects perpetual motion or energy creation.
    """
    validator = RealityValidator()
    
    # Valid Case: Energy is conserved (1000 in = 950 out + 50 loss)
    assert validator.validate_conservation_laws(
        initial_state={"mass": 10.0, "energy": 1000.0},
        final_state={"mass": 10.0, "energy": 950.0} # Heat loss is allowed
    ) is True
    
    # Invalid Case: Energy is created (1000 in -> 1100 out)
    with pytest.raises(ValueError, match="PHYSICS_VIOLATION: Energy creation detected"):
        validator.validate_conservation_laws(
            initial_state={"mass": 10.0, "energy": 1000.0},
            final_state={"mass": 10.0, "energy": 1100.0}
        )

def test_material_realism_yield_check():
    """
    Ensures designs that exceed physical yield limits are rejected.
    """
    validator = RealityValidator()
    
    # Case: Stress (200MPa) < Yield (300MPa) -> Realizable
    result = validator.validate_material_realism(stress_mpa=200, yield_mpa=300)
    assert result["status"] == "PHYSICALLY_REALIZABLE"
    
    # Case: Stress (400MPa) > Yield (300MPa) -> Impossible
    result = validator.validate_material_realism(stress_mpa=400, yield_mpa=300)
    assert result["status"] == "IMPOSSIBLE"
    assert "exceeds Yield" in result["reason"]

def test_numerical_stability_divergence():
    """
    Rejects unstable/divergent numerical solutions.
    """
    validator = RealityValidator()
    
    # Converging history: [1.0, 0.5, 0.1, 1e-6]
    assert validator.check_stability([1.0, 0.5, 0.1, 1e-6]) is True
    
    # Diverging history: [0.1, 0.5, 1.0, 5.0]
    with pytest.raises(RuntimeError, match="NUMERICAL_INSTABILITY"):
        validator.check_stability([0.1, 0.5, 1.0, 5.0])
