'use client'

import { useState } from 'react'
import axios from 'axios'
import { Upload, FileCode, CheckCircle2 } from 'lucide-react'
import { useEditorStore } from '@/store/useEditorStore'

export default function CADUploader() {
  const { setUploadedFileUrl, setGeometryFeatures } = useEditorStore()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleUpload(file: File) {
    setLoading(true)
    setSuccess(false)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await axios.post(
        'http://localhost:8000/api/upload',
        formData
      )
      
      const { filename, analysis } = res.data
      setUploadedFileUrl(`http://localhost:8000/uploads/${filename}`)
      setGeometryFeatures(analysis)
      setSuccess(true)
    } catch (err) {
      console.error('Upload failed', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
        {loading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 
         success ? <CheckCircle2 className="text-green-500" /> : <Upload size={20} />}
      </div>
      
      <div className="space-y-1">
        <div className="text-sm font-medium">Upload CAD Geometry</div>
        <div className="text-[10px] text-zinc-500 uppercase tracking-tighter">STL or STEP supported</div>
      </div>

      <label className="w-full mt-2 cursor-pointer bg-white text-black py-2 rounded-lg text-xs font-bold hover:bg-zinc-200 transition-colors">
        {loading ? 'UPLOADING...' : 'SELECT FILE'}
        <input
          type="file"
          className="hidden"
          accept=".stl,.step,.stp"
          onChange={(e) => {
            if (!e.target.files?.[0]) return
            handleUpload(e.target.files[0])
          }}
        />
      </label>
    </div>
  )
}
