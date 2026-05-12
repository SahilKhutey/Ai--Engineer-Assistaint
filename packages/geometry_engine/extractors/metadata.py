import os
import time

class MetadataExtractor:
    @staticmethod
    def extract(path: str):
        stats = os.stat(path)
        return {
            "filename": os.path.basename(path),
            "size_kb": stats.st_size / 1024,
            "created": time.ctime(stats.st_ctime),
            "format": os.path.splitext(path)[1].upper().replace(".", "")
        }
