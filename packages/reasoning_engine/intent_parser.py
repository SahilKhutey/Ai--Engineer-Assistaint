import re

class IntentParser:
    def parse(self, query: str):
        query = query.lower()
        
        # Detect load values
        force_match = re.search(r'(\d+)\s*(kg|n|lb|newtons)', query)
        load_n = 0
        if force_match:
            val = float(force_match.group(1))
            unit = force_match.group(2)
            if unit == 'kg': load_n = val * 9.81
            else: load_n = val

        return {
            'failure_analysis': any(x in query for x in ['survive', 'break', 'fail', 'safe']),
            'load_detected': load_n > 0,
            'load_n': load_n,
            'optimization': 'optimize' in query or 'lighter' in query,
            'manufacturability': 'print' in query or 'make' in query or 'manufacture' in query
        }
