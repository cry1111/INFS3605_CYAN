import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { StarterTopics } from './components/StarterTopics';
import { Message } from './types';

// Generate a random session ID
const sessionId = Math.random().toString(36).substring(2, 15);

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await response.json();
      
      const modelMessage: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: data.text 
      };
      
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'Sorry, I encountered an error connecting to the service. Please try again.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div className="flex flex-col h-screen bg-[#f8f7f2] text-[#2c332a] font-sans overflow-hidden">
      {/* Header */}
      <header className="h-20 bg-white/30 backdrop-blur-sm border-b border-[#e1e0d5] px-6 lg:px-10 py-4 flex items-center gap-4 sticky top-0 z-10">
        <div className="w-10 h-10 bg-[#4a6741] rounded-lg flex items-center justify-center text-white shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            <path d="M10.5 13.5A2.5 2.5 0 0 0 8 16v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a2.5 2.5 0 0 0-2.5-2.5h-3z"></path>
            <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
          </svg>
        </div>
        <div>
          <h1 className="font-bold text-xl leading-tight">SingHealth GAC</h1>
          <p className="text-xs text-[#7a8072] font-medium">FH Genetic Testing Assistant</p>
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 overflow-y-auto px-4 py-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {messages.length === 0 ? (
            <StarterTopics onSelect={sendMessage} />
          ) : (
            <>
              {messages.map(msg => (
                <ChatMessage 
                  key={msg.id} 
                  role={msg.role} 
                  text={msg.text} 
                  onFollowUpClick={sendMessage} 
                />
              ))}
              {isLoading && (
                <div className="flex w-full justify-start">
                  <div className="flex gap-3 p-4 bg-white border border-[#e1e0d5] rounded-[32px] rounded-tl-none shadow-sm items-center">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#e1e8dc] text-[#4a6741] rounded-full">
                      <Loader2 size={18} className="animate-spin" />
                    </div>
                    <div className="flex gap-1.5 items-center px-2">
                      <span className="w-2 h-2 rounded-full bg-[#4a6741]/40 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 rounded-full bg-[#4a6741]/40 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 rounded-full bg-[#4a6741]/40 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </main>

      {/* Input Area */}
      <footer className="p-4 lg:px-10 lg:pb-10 pt-0">
        <div className="max-w-4xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="flex items-end gap-2 bg-white border border-[#e1e0d5] rounded-[24px] p-2 focus-within:border-[#4a6741]/50 focus-within:ring-4 focus-within:ring-[#4a6741]/10 transition-all shadow-lg shadow-[#2c332a]/5 relative"
          >
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              placeholder="Ask about FH or genetic testing..."
              className="flex-1 bg-transparent resize-none outline-none py-3 px-4 text-sm text-[#2c332a] placeholder:text-[#7a8072]"
              rows={1}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="flex-shrink-0 w-12 h-12 bg-[#4a6741] text-white rounded-full flex items-center justify-center hover:bg-[#3d5536] disabled:opacity-50 disabled:hover:bg-[#4a6741] transition-colors"
            >
              <Send size={18} className="ml-1" />
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-[11px] text-[#7a8072] italic max-w-2xl mx-auto">
              This assistant provides educational information based on SingHealth and Ministry of Health resources. It does not replace professional medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
