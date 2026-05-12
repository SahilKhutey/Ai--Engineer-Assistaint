from ai_engine.nlp.intent_classifier import EngineeringIntentClassifier

def test_failure_prediction_intent():
    classifier = EngineeringIntentClassifier()
    result = classifier.classify('Can this survive 20kg?')
    assert result == 'failure_prediction'

def test_material_recommendation_intent():
    classifier = EngineeringIntentClassifier()
    result = classifier.classify('What material should I use for high heat?')
    assert result == 'material_recommendation'
