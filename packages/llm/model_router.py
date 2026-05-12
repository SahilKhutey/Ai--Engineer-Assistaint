class ModelRouter:
    """
    Routes engineering tasks to the optimal local or cloud model.
    """
    def __init__(self):
        self.local_mapping = {
            "reasoning": "llama3",
            "code": "deepseek-coder",
            "extraction": "qwen2.5",
            "fast": "mistral",
            "embedding": "nomic-embed-text"
        }

    def get_model(self, task: str):
        """
        Returns the model name for a given task.
        """
        return self.local_mapping.get(task, "llama3")

    def should_use_local(self, task: str, complexity: float = 0.5):
        """
        Logic to determine if a task should be handled locally vs cloud.
        (e.g., Simple extraction is better handled locally).
        """
        if task in ["extraction", "fast"]:
            return True
        return False
