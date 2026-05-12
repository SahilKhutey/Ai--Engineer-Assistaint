"use client";

import React, { useState } from 'react';
import { Send, Upload, Info, AlertTriangle, ShieldCheck, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { api } from '@/lib/api';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  type?: 'text' | 'engineering_report';
  confidence?: number;
  assumptions?: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Hello. I'm your AI Engineering Assistant. Upload a CAD model (STL) to begin your structural analysis.",
      type: 'text'
    }
  ]);
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeGeometry, setActiveGeometry] = useState<any>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setMessages(prev => [...prev, { role: 'user', content: `Uploaded ${file.name}` }]);
    setIsAnalyzing(true);

    try {
      const uploadRes = await api.uploadCad(file);
      setActiveGeometry(uploadRes.features);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Geometry parsed successfully. Dimensions: ${uploadRes.features.dimensions_mm.max.toFixed(2)}mm. What analysis should I perform?` 
      }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Error parsing geometry. Please ensure it's a valid STL." }]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isAnalyzing) return;
    
    const userQuery = input;
    setMessages(prev => [...prev, { role: 'user', content: userQuery }]);
    setInput('');
    setIsAnalyzing(true);

    try {
      const result = await api.runAnalysis({
        material_id: 'al6061', // Default for MVP
        load_newtons: 200,      // Default or extracted from query
        geometry_data: activeGeometry,
        query: userQuery
      });

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: result.ai_analysis,
        confidence: result.confidence,
        assumptions: `Static load, Material: ${result.material.name}`
      }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Analysis failed. Please check the backend connection." }]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex flex-col h-full glass-panel rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-[var(--border)] bg-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isAnalyzing ? 'bg-yellow-500 animate-pulse' : 'bg-[var(--ai-action)]'}`}></div>
          <span className="font-mono text-xs font-bold tracking-tight">ENGINEERING_ORCHESTRATOR_V1.0</span>
        </div>
        {isAnalyzing && <span className="text-[10px] font-mono text-yellow-500 animate-pulse">ANALYZING...</span>}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] p-3 rounded-lg text-sm font-sans leading-relaxed whitespace-pre-wrap ${
                msg.role === 'user' 
                ? 'bg-[var(--ai-action)]/20 border border-[var(--ai-action)]/30 text-white shadow-lg shadow-purple-500/10' 
                : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)]'
              }`}>
                {msg.content}
                
                {msg.confidence && (
                  <div className="mt-3 pt-3 border-t border-[var(--border)] space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[var(--foreground-secondary)] uppercase">Confidence Score</span>
                      <span className="text-[var(--safe)] font-bold">{(msg.confidence * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full h-1 bg-[var(--border)] rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--safe)] transition-all duration-1000" style={{ width: `${msg.confidence * 100}%` }} />
                    </div>
                    {msg.assumptions && (
                      <div className="bg-black/20 p-2 rounded text-[10px] text-[var(--foreground-secondary)] italic">
                        {msg.assumptions}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-4 bg-white/5 border-t border-[var(--border)]">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
            placeholder={activeGeometry ? "Ask an engineering question..." : "Upload geometry first..."}
            disabled={isAnalyzing}
            className="w-full bg-black/50 border border-[var(--border)] rounded-lg p-3 pr-24 text-sm focus:outline-none focus:border-[var(--ai-action)]/50 resize-none h-20 font-sans transition-all disabled:opacity-50"
          />
          <div className="absolute right-2 bottom-2 flex gap-2">
            <label className="p-2 hover:bg-white/10 rounded-md transition-colors text-white/60 cursor-pointer">
              <input type="file" className="hidden" accept=".stl" onChange={handleFileUpload} disabled={isAnalyzing} />
              <Upload size={18} />
            </label>
            <button 
              onClick={handleSend}
              disabled={isAnalyzing || !input.trim()}
              className="p-2 bg-[var(--ai-action)] hover:bg-[#6c48ff] disabled:opacity-50 disabled:bg-slate-700 rounded-md transition-all text-white shadow-lg shadow-purple-500/20"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
