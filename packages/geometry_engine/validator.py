import trimesh

class GeometryValidator:
    @staticmethod
    def validate_mesh(mesh: trimesh.Trimesh):
        issues = []
        if not mesh.is_watertight:
            issues.append("Mesh is not watertight (has holes in the shell)")
        
        if not mesh.is_manifold:
            issues.append("Non-manifold geometry detected (degenerate edges/vertices)")
            
        if mesh.volume < 0:
            issues.append("Inverted normals detected (negative volume)")
            
        integrity_score = 1.0 - (len(issues) * 0.2)
        return {
            "is_valid": len(issues) == 0,
            "integrity_score": max(0, integrity_score),
            "issues": issues,
            "is_watertight": mesh.is_watertight,
            "is_manifold": mesh.is_manifold
        }
