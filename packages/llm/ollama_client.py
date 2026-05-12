import httpx
import json

class OllamaClient:
    """
    Local AI Runtime Layer using Ollama REST API.
    """
    def __init__(self, base_url: str = "http://localhost:11434"):
        self.base_url = base_url

    async def generate(self, model: str, prompt: str, system: str = None, stream: bool = False):
        """
        Generates a response from the local Ollama model.
        """
        url = f"{self.base_url}/api/generate"
        payload = {
            "model": model,
            "prompt": prompt,
            "stream": stream
        }
        if system:
            payload["system"] = system

        async with httpx.AsyncClient(timeout=120.0) as client:
            if stream:
                return self._stream_generate(client, url, payload)
            else:
                response = await client.post(url, json=payload)
                response.raise_for_status()
                return response.json().get("response", "")

    async def _stream_generate(self, client, url, payload):
        async with client.stream("POST", url, json=payload) as response:
            async for line in response.aiter_lines():
                if line:
                    chunk = json.loads(line)
                    yield chunk.get("response", "")
                    if chunk.get("done"):
                        break

    async def get_embeddings(self, model: str, prompt: str):
        """
        Retrieves embeddings from a local model (e.g., nomic-embed-text).
        """
        url = f"{self.base_url}/api/embed"
        payload = {
            "model": model,
            "input": prompt
        }
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(url, json=payload)
            response.raise_for_status()
            # The new API returns 'embeddings' (plural) for 'input'
            embs = response.json().get("embeddings", [])
            return embs[0] if embs else []
