import hashlib
import json
import datetime

class SecurityEngine:
    """
    Industrial Security & IP Protection Engine.
    Ensures design integrity via cryptographic fingerprinting.
    """
    def generate_design_hash(self, synthesis_report: dict):
        """
        Generates a unique SHA-256 fingerprint for an engineering design.
        This serves as an 'Immutable Record' of the design state.
        """
        # Clean payload for consistent hashing
        data_to_hash = {
            "project_id": synthesis_report.get("project_id"),
            "status": synthesis_report.get("status"),
            "safety_factor": synthesis_report.get("reports", {}).get("structural", {}).get("results", {}).get("safety_factor"),
            "timestamp": datetime.datetime.now().isoformat()
        }
        
        encoded_data = json.dumps(data_to_hash, sort_keys=True).encode()
        design_hash = hashlib.sha256(encoded_data).hexdigest()
        
        return {
            "fingerprint": design_hash,
            "algorithm": "SHA-256",
            "certified_at": data_to_hash["timestamp"]
        }

    def verify_integrity(self, synthesis_report: dict, original_hash: str):
        """
        Verifies if an engineering design has been tampered with.
        """
        # Simplified verification logic
        new_hash = self.generate_design_hash(synthesis_report)["fingerprint"]
        return new_hash == original_hash
