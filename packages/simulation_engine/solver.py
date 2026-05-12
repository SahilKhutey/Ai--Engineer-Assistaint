import numpy as np
import skfem as fem
from skfem.models.elasticity import linear_elasticity

class FEMSolver:
    @staticmethod
    def solve_static(mesh_data: dict, material: dict, boundary_conditions: dict):
        """
        Solves [K]{u} = {F} using scikit-fem Linear Elasticity.
        """
        nodes = np.array(mesh_data["nodes"]) # shape (3, N_nodes)
        elements = np.array(mesh_data["elements"]) # shape (8, N_elements)
        
        if len(nodes) == 0 or len(elements) == 0:
            return {"error": "Empty mesh"}

        # 1. Create Mesh
        mesh = fem.MeshHex(nodes, elements)
        
        # 2. Material Properties
        E = material.get("youngs_modulus_pa", 2e9)
        nu = material.get("poissons_ratio", 0.33)
        
        # Lame parameters
        lambda_ = E * nu / ((1 + nu) * (1 - 2 * nu))
        mu = E / (2 * (1 + nu))
        
        # 3. Create Function Space (Vector basis for 3D displacements)
        element = fem.ElementVector(fem.ElementHex1())
        basis = fem.Basis(mesh, element)
        
        # 4. Assemble Global Stiffness Matrix
        K = fem.asm(linear_elasticity(lambda_, mu), basis)
        
        # 5. Boundary Conditions
        # For MVP, assume the min-X face is fixed (Cantilever)
        # Find nodes where x <= min(x) + threshold
        x_coords = nodes[0, :]
        min_x = np.min(x_coords)
        # Using a larger epsilon (50% of pitch) to ensure we catch the boundary nodes
        fixed_nodes = np.where(x_coords <= min_x + 5.0)[0] 
        
        # Get degrees of freedom for fixed nodes (x, y, z components)
        fixed_dofs = basis.nodal_dofs[:, fixed_nodes].flatten()
        
        # 6. Load Vector
        f = np.zeros(basis.N)
        # For MVP, apply a vertical (-Z) load on the max-X face
        max_x = np.max(x_coords)
        loaded_nodes = np.where(x_coords >= max_x - 5.0)[0]
        load_z_dofs = basis.nodal_dofs[2, loaded_nodes] # Z-component dofs
        
        load_n = boundary_conditions.get("force_n", 100.0)
        # Distribute load evenly across loaded nodes
        if len(load_z_dofs) > 0:
            nodal_force = -load_n / len(load_z_dofs)
            f[load_z_dofs] = nodal_force
            
        # 7. Solve Ku = f
        from scipy.sparse.linalg import spsolve
        A, b = fem.condense(K, f, D=fixed_dofs)
        print(f"DEBUG: Solving system with {A.shape[0]} equations...")
        u = spsolve(A, b)
        
        # Extract nodal displacements (magnitude)
        u_vectors = u[basis.nodal_dofs] # shape (3, N_nodes)
        disp_mag = np.linalg.norm(u_vectors, axis=0)
        
        # Approximate stress field based on displacements (simplified for MVP)
        # A true Von Mises calculation requires strain projection, but for speed
        # we estimate it based on displacement gradients.
        stress_field = disp_mag * E / (np.max(x_coords) - min_x)
        
        return {
            "max_stress_mpa": float(np.max(stress_field) / 1e6),
            "avg_stress_mpa": float(np.mean(stress_field) / 1e6),
            "max_displacement_mm": float(np.max(disp_mag) * 1000),
            "stress_field": stress_field.tolist(),
            "displacement_field": disp_mag.tolist()
        }

