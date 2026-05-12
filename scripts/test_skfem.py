import numpy as np
import skfem as fem
from skfem.models.elasticity import linear_elasticity

def test_skfem():
    print("Testing skfem basic assembly...")
    try:
        # Create a tiny mesh
        m = fem.MeshHex()
        print(f"Mesh created: {m}")
        
        e = fem.ElementVector(fem.ElementHex1())
        basis = fem.Basis(m, e)
        print(f"Basis created with {basis.N} DOFs")
        
        K = fem.asm(linear_elasticity(1.0, 1.0), basis)
        print(f"Stiffness matrix assembled: {K.shape}")
        print("[OK] skfem is functional.")
    except Exception as e:
        print(f"[FAIL] skfem test failed: {e}")

if __name__ == "__main__":
    test_skfem()
