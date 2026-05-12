import trimesh
import numpy as np

class GeometryPipeline:
    def process(self, payload: dict):
        """
        Processes CAD payload to extract dimensions and generate an engineering mesh.
        """
        # 1. Load Geometry (Assume a placeholder box for now if no mesh provided)
        # In production, we'd load the STL/STEP from the upload service
        mesh = trimesh.creation.box(extents=[0.12, 0.04, 0.02])
        
        # 2. Extract Basic Dimensions
        dimensions = {
            'length': float(mesh.extents[0] * 1000),
            'width': float(mesh.extents[1] * 1000),
            'height': float(mesh.extents[2] * 1000)
        }
        
        # 3. Generate Analysis Mesh (HEX8)
        mesher = FEMMesher()
        pitch = payload.get("pitch_mm", 5.0)
        hex_mesh = mesher.generate_hex_mesh(mesh, pitch_mm=pitch)
        
        return {
            'dimensions': dimensions,
            'features': {'cantilever': True},
            'mesh_data': hex_mesh
        }

class FEMMesher:
    @staticmethod
    def generate_hex_mesh(mesh: trimesh.Trimesh, pitch_mm=5.0):
        """
        Generates a Hexahedral (Voxel) mesh suitable for scikit-fem's MeshHex.
        """
        voxel_size = pitch_mm / 1000.0 # Convert to meters
        voxels = mesh.voxelized(pitch=voxel_size)
        points = voxels.points 
        
        if len(points) == 0:
             return {"node_count": 0, "element_count": 0, "nodes": [], "elements": []}

        nodes_dict = {}
        elements = []
        node_idx = 0
        half_p = voxel_size / 2.0
        offsets = np.array([
            [-half_p, -half_p, -half_p], [ half_p, -half_p, -half_p],
            [ half_p,  half_p, -half_p], [-half_p,  half_p, -half_p],
            [-half_p, -half_p,  half_p], [ half_p, -half_p,  half_p],
            [ half_p,  half_p,  half_p], [-half_p,  half_p,  half_p]
        ])
        
        for center in points:
            elem_nodes = []
            for offset in offsets:
                pos = np.round(center + offset, decimals=6)
                pos_tuple = tuple(pos)
                if pos_tuple not in nodes_dict:
                    nodes_dict[pos_tuple] = node_idx
                    node_idx += 1
                elem_nodes.append(nodes_dict[pos_tuple])
            elements.append(elem_nodes)
            
        nodes_array = np.array(list(nodes_dict.keys()))
        
        return {
            "node_count": len(nodes_array),
            "element_count": len(elements),
            "type": "HEX8",
            "nodes": nodes_array.T.tolist(),
            "elements": np.array(elements).T.tolist()
        }
