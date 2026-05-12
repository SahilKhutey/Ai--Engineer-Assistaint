import datetime
import uuid

class ProjectEngine:
    """
    Engineering Design Versioning & Project Management.
    Manages 'Design Branches' and 'Audit Trails' for collaborative engineering.
    """
    def __init__(self):
        self.projects = {}

    def create_project(self, name: str, lead_engineer: str):
        project_id = str(uuid.uuid4())
        self.projects[project_id] = {
            "name": name,
            "lead": lead_engineer,
            "created_at": datetime.datetime.now().isoformat(),
            "branches": {
                "main": {
                    "head": None,
                    "history": []
                }
            }
        }
        return project_id

    def commit_design(self, project_id: str, branch: str, synthesis_report: dict, author: str):
        """
        Commits a specific design synthesis to the project history (Design Checkpoint).
        """
        if project_id not in self.projects:
            return None
            
        commit = {
            "id": str(uuid.uuid4()),
            "author": author,
            "timestamp": datetime.datetime.now().isoformat(),
            "synthesis": synthesis_report,
            "status": synthesis_report.get("status"),
            "compliance_audit": synthesis_report.get("reports", {}).get("compliance", {})
        }
        
        self.projects[project_id]["branches"][branch]["history"].append(commit)
        self.projects[project_id]["branches"][branch]["head"] = commit["id"]
        
        return commit["id"]

    def fork_design(self, project_id: str, source_branch: str, new_branch_name: str):
        """
        Forks the engineering design for parallel experimentation (e.g., 'alt-material-study').
        """
        if project_id not in self.projects: return None
        
        source = self.projects[project_id]["branches"][source_branch]
        self.projects[project_id]["branches"][new_branch_name] = {
            "head": source["head"],
            "history": list(source["history"])
        }
        return new_branch_name
