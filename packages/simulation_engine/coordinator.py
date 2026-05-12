from .mesher import FEMMesher
from .solver import FEMSolver
import trimesh

class SimulationCoordinator:
    @staticmethod
    async def run_fem_simulation(project_id: str, geometry_data: dict, material: dict = None):
        """
        Coordinates the full FEM pipeline.
        1. Mesh Generation
        2. Solving
        3. Result Synthesis
        """
        # Load mesh from geometry data (assuming STL path or mesh object)
        # For MVP, we use the geometry_data directly if possible
        
        # Placeholder mesh object
        mesh = trimesh.creation.box() # Mock
        
        # 1. Mesh
        mesh_data = FEMMesher.generate_hex_mesh(mesh)
        
        # 2. Solve
        material = material or {"youngs_modulus_pa": 2e9, "name": "PLA"}
        results = FEMSolver.solve_static(mesh_data, material, {})
        
        return {
            "project_id": project_id,
            "status": "completed",
            "results": results,
            "mesh_stats": {
                "nodes": mesh_data["node_count"],
                "elements": mesh_data["element_count"]
            }
        }
