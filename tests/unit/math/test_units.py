import pytest
from packages.math_core.units import units, Q_

def test_unit_dimensional_consistency():
    """
    Validates that the math core prevents invalid unit operations.
    """
    force = Q_(10, "newton")
    mass = Q_(2, "kilogram")
    
    # Correct Operation: F = m * a -> a = F / m
    acceleration = force / mass
    assert acceleration.units == units.meter / units.second**2
    assert acceleration.magnitude == 5.0
    
    # Invalid Operation: Adding Force to Mass should fail
    with pytest.raises(Exception):
        invalid_op = force + mass

def test_conversion_accuracy():
    """
    Ensures accurate conversion between metric and imperial systems.
    """
    length_m = Q_(1, "meter")
    length_in = length_m.to("inch")
    
    assert np.allclose(length_in.magnitude, 39.3701, atol=1e-4)
