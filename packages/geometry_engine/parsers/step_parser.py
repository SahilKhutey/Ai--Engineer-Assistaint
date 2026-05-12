try:
    from OCC.Core.STEPControl import STEPControl_Reader
    from OCC.Core.TopExp import TopExp_Explorer
    from OCC.Core.TopAbs import TopAbs_FACE
    OCC_AVAILABLE = True
except ImportError:
    OCC_AVAILABLE = False

class STEPParser:
    def parse(self, file_path: str):
        if not OCC_AVAILABLE:
            return {"error": "python-occ-core not installed", "faces_count": 0}
            
        reader = STEPControl_Reader()
        reader.ReadFile(file_path)
        reader.TransferRoots()
        shape = reader.OneShape()
        
        faces = []
        explorer = TopExp_Explorer(shape, TopAbs_FACE)
        while explorer.More():
            faces.append(explorer.Current())
            explorer.Next()
            
        return {
            "shape": shape,
            "faces_count": len(faces)
        }
