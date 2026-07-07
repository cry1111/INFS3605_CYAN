import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, AlertTriangle } from 'lucide-react';
import { Translation } from '../types';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translation;
}

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export default function Chatbot({ isOpen, onClose, t }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', parts: [{ text: input }] };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const historyForApi = [...messages, userMessage];

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history: historyForApi }),
      });

      if (!response.ok) throw new Error('Failed to fetch');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        let modelText = '';
        setMessages(prev => [...prev, { role: 'model', parts: [{ text: '' }] }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = JSON.parse(line.slice(6));
              modelText += data.text;
              setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].parts[0].text = modelText;
                return newMessages;
              });
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: 'Sorry, I encountered an error. Please try again later.' }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed top-0 right-0 h-full w-full sm:w-[35%] bg-white border-l border-slate-200 flex flex-col shadow-lg shadow-slate-200/50 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full hidden'}`}>
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <Bot size={16} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">{t.chatbotTitle}</h4>
            <p className="text-[10px] text-green-600 font-medium">Online now</p>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="text-slate-400 hover:text-slate-600 focus:outline-none"
          aria-label="Close chatbot"
        >
          <X size={20} />
        </button>
      </div>

      <div className="bg-amber-50 p-3 flex items-start space-x-2 border-b border-amber-100">
        <AlertTriangle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-[10px] text-amber-800 leading-tight"><strong>Important:</strong> {t.chatbotDisclaimer}</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-slate-50">
        {messages.length === 0 && (
          <div className="bg-white p-3 rounded-lg rounded-tl-none border border-slate-200 shadow-sm">
            <p className="text-xs leading-relaxed text-slate-800">Hello! I can answer questions about FH, genetic testing, and pre-test counselling. How can I help you today?</p>
          </div>
        )}
        
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] ${msg.role === 'user' ? 'bg-blue-600 text-white p-3 rounded-lg rounded-tr-none shadow-sm shadow-blue-100' : 'bg-white p-3 rounded-lg rounded-tl-none border border-slate-200 shadow-sm'}`}>
              <p className={`text-xs leading-relaxed whitespace-pre-wrap ${msg.role === 'user' ? 'text-white' : 'text-slate-800'}`}>{msg.parts[0].text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-lg rounded-tl-none border border-slate-200 shadow-sm flex items-center gap-1 h-10">
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <form onSubmit={handleSubmit} className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-lg">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.chatbotInputPlaceholder}
            className="flex-1 bg-transparent border-none text-xs focus:ring-0 focus:outline-none placeholder-slate-400 text-slate-800 px-2"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="text-blue-600 p-1 hover:text-blue-700 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors"
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </form>
        <p className="text-[9px] text-slate-400 mt-2 text-center">This AI provides education only. Consult a doctor for medical advice.</p>
      </div>
    </div>
  );
}
