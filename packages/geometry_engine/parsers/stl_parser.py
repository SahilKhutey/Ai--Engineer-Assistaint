import trimesh

class STLParser:
    def parse(self, file_path: str):
        mesh = trimesh.load_mesh(file_path)
        return {
            "mesh": mesh,
            "vertices_count": len(mesh.vertices),
            "faces_count": len(mesh.faces),
            "bounds": mesh.bounds.tolist(),
            "volume": float(mesh.volume),
            "surface_area": float(mesh.area),
            "center_mass": mesh.center_mass.tolist()
        }
