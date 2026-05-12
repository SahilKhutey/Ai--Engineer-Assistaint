import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface AnalysisRequest {
  material_id: string;
  load_newtons: number;
  geometry_data: any;
  query?: string;
  job_id?: string;
}

export const api = {
  getMaterials: async () => {
    const response = await axios.get(`${API_BASE}/api/materials`);
    return response.data;
  },

  uploadCad: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(`${API_BASE}/api/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  runAnalysis: async (data: AnalysisRequest) => {
    const response = await axios.post(`${API_BASE}/api/analysis`, data);
    return response.data;
  },

  getAnalysisStatus: async (jobId: string) => {
    const response = await axios.get(`${API_BASE}/api/analysis/status/${jobId}`);
    return response.data;
  }
};
