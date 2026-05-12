import re

class EngineeringEntityExtractor:
    def extract(self, query):
        entities = {}
        query = query.lower()
        
        # 1. Load Extraction
        # Matches: "20kg", "200n", "150 newtons"
        load_match = re.search(r'(\d+(?:\.\d+)?)\s*(kg|n|lb|newtons)', query)
        if load_match:
            val = float(load_match.group(1))
            unit = load_match.group(2)
            if unit == 'kg':
                entities['load_n'] = val * 9.81
                entities['original_load'] = f"{val}kg"
            elif unit == 'lb':
                entities['load_n'] = val * 4.448
                entities['original_load'] = f"{val}lb"
            else:
                entities['load_n'] = val
                entities['original_load'] = f"{val}N"

        # 2. Material Extraction
        materials = ['pla', 'petg', 'aluminum', 'steel', 'abs', 'carbon fiber']
        for material in materials:
            if material in query:
                entities['material'] = material

        return entities
