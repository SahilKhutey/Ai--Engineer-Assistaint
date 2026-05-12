import numpy as np
import skfem as fem
from skfem.models.elasticity import linear_elasticity
from scipy.sparse.linalg import spsolve

class PhysicsEngine:
    def evaluate(self, geometry_context: dict):
        """
        Runs a FEA simulation on the provided mesh data.
        """
        mesh_data = geometry_context.get("mesh_data")
        if not mesh_data or mesh_data.get("node_count") == 0:
            return {"error": "No valid mesh for physics evaluation"}

        # 1. Material (Dynamic)
        material = geometry_context.get("material", {
            "youngs_modulus_pa": 200e9, 
            "poissons_ratio": 0.30,
            "yield_strength_mpa": 250
        })
        
        # 2. Solve using scikit-fem
        solver = FEMSolver()
        results = solver.solve_static(mesh_data, material, {"force_n": 1000.0})
        
        # Inject yield strength for safety factor calc
        results["yield_strength_mpa"] = material["yield_strength_mpa"]
        
        return results

class FEMSolver:
    @staticmethod
    def solve_static(mesh_data: dict, material: dict, boundary_conditions: dict):
        nodes = np.array(mesh_data["nodes"])
        elements = np.array(mesh_data["elements"])
        
        mesh = fem.MeshHex(nodes, elements)
        E = material.get("youngs_modulus_pa", 2e9)
        nu = material.get("poissons_ratio", 0.33)
        
        lambda_ = E * nu / ((1 + nu) * (1 - 2 * nu))
        mu = E / (2 * (1 + nu))
        
        element = fem.ElementVector(fem.ElementHex1())
        basis = fem.Basis(mesh, element)
        K = fem.asm(linear_elasticity(lambda_, mu), basis)
        
        # Boundary Conditions: Fixed at min-X
        x_coords = nodes[0, :]
        min_x = np.min(x_coords)
        fixed_nodes = np.where(x_coords <= min_x + 1e-6)[0]
        fixed_dofs = basis.nodal_dofs[:, fixed_nodes].flatten()
        
        # Loading: -Z force at max-X
        f = np.zeros(basis.N)
        max_x = np.max(x_coords)
        loaded_nodes = np.where(x_coords >= max_x - 1e-6)[0]
        load_z_dofs = basis.nodal_dofs[2, loaded_nodes]
        
        load_n = boundary_conditions.get("force_n", 100.0)
        if len(load_z_dofs) > 0:
            nodal_force = -load_n / len(load_z_dofs)
            f[load_z_dofs] = nodal_force
            
        A, b, x, I = fem.condense(K, f, D=fixed_dofs)
        u_internal = spsolve(A, b)
        u = np.zeros(basis.N)
        u[I] = u_internal
        # Dirichlet values x are handled by condense/spsolve for internal, 
        # but fixed dofs stay as 0 (unless we had non-zero BCs).
        # Since we assume x=0 for fixed face, u[fixed_dofs] = 0 is correct.
        
        u_vectors = u[basis.nodal_dofs]
        disp_mag = np.linalg.norm(u_vectors, axis=0)
        
        # Est. Stress
        stress_field = disp_mag * E / (np.max(x_coords) - min_x + 1e-9)
        
        yield_strength = material.get("yield_strength_mpa", 250) * 1e6
        return {
            "max_stress_mpa": float(np.max(stress_field) / 1e6),
            "max_displacement_mm": float(np.max(disp_mag) * 1000),
            "safety_factor": float(yield_strength / (np.max(stress_field) + 1e-9)), 
            "status": "nominal" if np.max(stress_field) < (yield_strength * 0.8) else "risk"
        }
