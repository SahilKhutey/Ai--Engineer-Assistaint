import { create } from 'zustand'

interface EditorState {
  uploadedFileUrl: string | null
  analysisResults: any | null
  geometryFeatures: any | null
  materials: any[] | null
  loading: boolean
  
  setUploadedFileUrl: (url: string | null) => void
  setAnalysisResults: (results: any) => void
  setGeometryFeatures: (features: any) => void
  setMaterials: (materials: any[]) => void
  setLoading: (loading: boolean) => void
}

export const useEditorStore = create<EditorState>((set) => ({
  uploadedFileUrl: null,
  analysisResults: null,
  geometryFeatures: null,
  materials: null,
  loading: false,

  setUploadedFileUrl: (url) => set({ uploadedFileUrl: url }),
  setAnalysisResults: (results) => set({ analysisResults: results }),
  setGeometryFeatures: (features) => set({ geometryFeatures: features }),
  setMaterials: (materials) => set({ materials }),
  setLoading: (loading) => set({ loading }),
}))
