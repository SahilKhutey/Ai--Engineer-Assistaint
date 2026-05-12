'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, Waves } from 'lucide-react';
import { useEditorStore } from '../../store/useEditorStore';

const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);
  const recognitionRef = useRef<any>(null);
  
  const { analysisResults, materials } = useEditorStore();

  useEffect(() => {
    // Initialize WebSocket
    socketRef.current = new WebSocket('ws://localhost:8000/api/voice/ws');
    
    socketRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.response_text) {
        setResponse(data.response_text);
        speak(data.response_text);
      }
    };

    // Initialize Web Speech API for STT
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      
      recognitionRef.current.onresult = (event: any) => {
        const current = event.resultIndex;
        const resultTranscript = event.results[current][0].transcript;
        setTranscript(resultTranscript);
        
        if (event.results[current].isFinal) {
          sendToBackend(resultTranscript);
        }
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      socketRef.current?.close();
      recognitionRef.current?.stop();
    };
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setTranscript('');
      setResponse('');
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const sendToBackend = (text: string) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({
        text,
        context: {
          physics_results: analysisResults?.physics,
          material: materials.find(m => m.id === analysisResults?.material_id)
        }
      }));
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className={`bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4 transition-all duration-300 ${isListening || response ? 'w-80 opacity-100' : 'w-16 opacity-80'}`}>
        <div className="flex items-center justify-between gap-4">
          {isListening && (
            <div className="flex-1">
              <div className="flex gap-1 items-center mb-1">
                <Waves className="w-4 h-4 text-blue-400 animate-pulse" />
                <span className="text-xs text-slate-400 font-mono uppercase tracking-tighter">Listening...</span>
              </div>
              <p className="text-sm text-slate-200 line-clamp-2">{transcript || 'Say something engineering...'}</p>
            </div>
          )}
          
          {!isListening && response && (
            <div className="flex-1">
              <div className="flex gap-1 items-center mb-1">
                <Volume2 className={`w-4 h-4 ${isSpeaking ? 'text-green-400 animate-bounce' : 'text-slate-400'}`} />
                <span className="text-xs text-slate-400 font-mono uppercase tracking-tighter">Assistant</span>
              </div>
              <p className="text-sm text-slate-200 line-clamp-3">{response}</p>
            </div>
          )}

          <button 
            onClick={toggleListening}
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isListening ? 'bg-red-500 shadow-lg shadow-red-500/20' : 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20'}`}
          >
            {isListening ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;
