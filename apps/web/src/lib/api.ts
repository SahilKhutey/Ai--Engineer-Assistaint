import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface AnalysisRequest {
  material_id: string;
  load_newtons: float;
  geometry_data: any;
  query?: string;
}

export const api = {
  getMaterials: async () => {
    const response = await axios.get(`${API_BASE}/materials`);
    return response.data;
  },

  uploadCad: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(`${API_BASE}/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },

  runAnalysis: async (data: AnalysisRequest) => {
    const response = await axios.post(`${API_BASE}/analyze`, data);
    return response.data;
  }
};
