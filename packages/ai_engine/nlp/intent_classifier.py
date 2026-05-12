class EngineeringIntentClassifier:
    def classify(self, query):
        query = query.lower()
        if any(x in query for x in ['survive', 'break', 'fail', 'safe']):
            return 'failure_prediction'
        if 'bend' in query or 'deflect' in query:
            return 'stiffness_analysis'
        if 'optimize' in query or 'lighter' in query:
            return 'optimization'
        if 'make' in query or 'print' in query or 'manufacture' in query:
            return 'manufacturability'
        if 'material' in query or 'choose' in query:
            return 'material_recommendation'
        return 'general_engineering'
