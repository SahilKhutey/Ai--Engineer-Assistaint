import trimesh
import numpy as np

class FEMMesher:
    @staticmethod
    def generate_hex_mesh(mesh: trimesh.Trimesh, pitch_mm=5.0):
        """
        Generates a Hexahedral (Voxel) mesh suitable for scikit-fem's MeshHex.
        Uses trimesh voxelization for robust 3D solid mechanics without complex tet-meshing.
        """
        # 1. Voxelize the mesh
        voxel_size = pitch_mm / 1000.0 # Convert to meters
        voxels = mesh.voxelized(pitch=voxel_size)
        
        # Get active voxel coordinates
        points = voxels.points # Nx3 array of voxel centers
        
        if len(points) == 0:
             return {"node_count": 0, "element_count": 0, "nodes": [], "elements": []}

        # 2. For each voxel, generate 8 corner nodes
        # We need a unique list of nodes and an element connectivity list
        nodes_dict = {}
        elements = []
        node_idx = 0
        
        half_p = voxel_size / 2.0
        # 8 corners offset from center
        offsets = np.array([
            [-half_p, -half_p, -half_p],
            [ half_p, -half_p, -half_p],
            [ half_p,  half_p, -half_p],
            [-half_p,  half_p, -half_p],
            [-half_p, -half_p,  half_p],
            [ half_p, -half_p,  half_p],
            [ half_p,  half_p,  half_p],
            [-half_p,  half_p,  half_p]
        ])
        
        for center in points:
            elem_nodes = []
            for offset in offsets:
                # Round to avoid floating point mismatch
                pos = np.round(center + offset, decimals=6)
                pos_tuple = tuple(pos)
                if pos_tuple not in nodes_dict:
                    nodes_dict[pos_tuple] = node_idx
                    node_idx += 1
                elem_nodes.append(nodes_dict[pos_tuple])
            elements.append(elem_nodes)
            
        nodes_array = np.array(list(nodes_dict.keys())) # (N_nodes, 3)
        
        return {
            "node_count": len(nodes_array),
            "element_count": len(elements),
            "type": "HEX8",
            "nodes": nodes_array.T.tolist(), # scikit-fem wants (3, N_nodes)
            "elements": np.array(elements).T.tolist() # scikit-fem wants (8, N_elements)
        }

