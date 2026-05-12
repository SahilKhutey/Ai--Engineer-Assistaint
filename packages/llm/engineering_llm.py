import ollama

class EngineeringLLM:
    def generate(
        self,
        prompt
    ):
        response = ollama.generate(
            model='deepseek-v3.1:671b-cloud',
            prompt=prompt
        )
        return response['response']

    def embed(self, text: str):
        """
        Generates text embeddings using Ollama.
        """
        response = ollama.embeddings(
            model='nomic-embed-text', # Using a standard embedding model
            prompt=text
        )
        return response['embedding']
