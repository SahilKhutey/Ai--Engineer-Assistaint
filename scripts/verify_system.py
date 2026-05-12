import requests
import os
import sys

BASE_URL = "http://localhost:8000"

def test_endpoint(name, method, path, data=None, files=None):
    print(f"Testing {name} [{method}] {path}...")
    try:
        if method == "GET":
            response = requests.get(f"{BASE_URL}{path}")
        else:
            response = requests.post(f"{BASE_URL}{path}", json=data, files=files)
        
        if response.status_code == 200:
            print(f"[OK] {name} Success")
            return response.json()
        else:
            print(f"[ERROR] {name} Failed: {response.status_code} - {response.text}")
            return None
    except Exception as e:
        print(f"[ERROR] {name} Exception: {str(e)}")
        return None

def verify_all():
    print("=== Antigravity System Verification ===\n")
    
    # 1. Root
    test_endpoint("Root API", "GET", "/")
    
    # 2. Materials
    materials = test_endpoint("Materials List", "GET", "/api/materials")
    
    # 3. Upload (Mock)
    # Creating a tiny mock STL for testing
    with open("test_part.stl", "w") as f:
        f.write("solid test\nfacet normal 0 0 0\nouter loop\nvertex 0 0 0\nvertex 1 0 0\nvertex 0 1 0\nendloop\nendfacet\nendsolid test")
    
    with open("test_part.stl", "rb") as f:
        upload_res = test_endpoint("CAD Upload", "POST", "/api/upload", files={"file": f})
    os.remove("test_part.stl")
    
    if upload_res:
        # 4. Analysis
        payload = {
            "material_id": "pla",
            "load_newtons": 100,
            "geometry_data": upload_res["analysis"]["features"],
            "query": "Is this safe?"
        }
        analysis_res = test_endpoint("Engineering Analysis", "POST", "/api/analyze", data=payload)
        
        if analysis_res:
            # 5. Report Generation
            report_payload = {
                "analysis_data": analysis_res.get("physics", {}), # Simplified for test
                "filename": "verification_report"
            }
            test_endpoint("PDF Report Generation", "POST", "/api/report/generate", data=report_payload)

if __name__ == "__main__":
    verify_all()
