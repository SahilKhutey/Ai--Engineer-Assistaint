import pint

class UnitRegistry:
    """
    Singleton Unit Registry for the Engineering OS.
    Ensures dimensional consistency across all mathematical operations.
    """
    _instance = None
    ureg = pint.UnitRegistry()

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(UnitRegistry, cls).__new__(cls)
        return cls._instance

    @classmethod
    def quantity(cls, value, unit_str: str):
        """Creates a unit-aware quantity."""
        return cls.ureg.Quantity(value, unit_str)

    @classmethod
    def validate_dimensions(cls, q1, q2, operation: str):
        """Validates if two quantities are dimensionally compatible for an operation."""
        if operation in ["add", "subtract"]:
            if not q1.check(q2.dimensionality):
                raise ValueError(f"Dimensional Mismatch: Cannot {operation} {q1.units} and {q2.units}")
        return True

# Global Unit Helper
units = UnitRegistry().ureg
Q_ = UnitRegistry().quantity
