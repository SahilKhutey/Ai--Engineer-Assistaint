class ContextBuilder:
    def build(self, geometry, physics, rules, user_query, intent):
        return {
            'geometry': geometry,
            'physics': physics,
            'rules': rules,
            'query': user_query,
            'intent': intent,
            'material': geometry.get('material', 'unknown')
        }
