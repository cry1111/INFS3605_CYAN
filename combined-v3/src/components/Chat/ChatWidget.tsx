import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Minimize2, Send, Loader2, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from './ChatMessage';
import { StarterTopics } from './StarterTopics';
import { Message } from '../../types';

// Generate a random session ID
const sessionId = Math.random().toString(36).substring(2, 15);

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const modelMessageId = (Date.now() + 1).toString();
    const modelMessagePlaceholder: Message = {
      id: modelMessageId,
      role: 'model',
      text: ''
    };
    setMessages(prev => [...prev, modelMessagePlaceholder]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Response body is not readable');
      }

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        
        // Keep the last partial line in the buffer
        buffer = lines.pop() || '';

        for (const line of lines) {
          const cleanedLine = line.trim();
          if (!cleanedLine) continue;

          if (cleanedLine.startsWith('data: ')) {
            const dataStr = cleanedLine.slice(6).trim();
            if (dataStr === '[DONE]') {
              break;
            }
            try {
              const data = JSON.parse(dataStr);
              if (data.text) {
                setMessages(prev => {
                  return prev.map(msg => {
                    if (msg.id === modelMessageId) {
                      return { ...msg, text: msg.text + data.text };
                    }
                    return msg;
                  });
                });
              } else if (data.error) {
                throw new Error(data.error);
              }
            } catch (e) {
              console.error('Error parsing line:', cleanedLine, e);
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => {
        return prev.map(msg => {
          if (msg.id === modelMessageId) {
            return {
              ...msg,
              text: msg.text || 'Sorry, I encountered an error connecting to the service. Please try again.'
            };
          }
          return msg;
        });
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans flex items-end gap-4 pointer-events-none flex-row-reverse">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="bg-[#f8f7f2] border border-[#e1e0d5] rounded-[24px] shadow-2xl w-[92vw] sm:w-[500px] h-[820px] max-h-[93vh] flex flex-col overflow-hidden pointer-events-auto"
          >
            {/* Header */}
            <header className="bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white px-5 py-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center text-white shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10.5 13.5A2.5 2.5 0 0 0 8 16v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a2.5 2.5 0 0 0-2.5-2.5h-3z"></path>
                    <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
                  </svg>
                </div>
                <div>
                  <h1 className="font-bold text-sm leading-tight">SingHealth GAC AI</h1>
                  <p className="text-[10px] text-teal-100 font-medium">FH Testing Info Assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
                  title="Close Assistant"
                >
                  <X size={18} />
                </button>
              </div>
            </header>

            {/* Main Chat Area */}
            <main className="flex-1 overflow-y-auto px-4 py-6">
              <div className="flex flex-col gap-4">
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
                        <div className="flex gap-3 p-4 bg-white border border-[#e1e0d5] rounded-[24px] rounded-tl-none shadow-sm items-center">
                          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-teal-50 text-[#0d9488] rounded-full">
                            <Loader2 size={16} className="animate-spin" />
                          </div>
                          <div className="flex gap-1.5 items-center px-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]/40 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]/40 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0d9488]/40 animate-bounce" style={{ animationDelay: '300ms' }}></span>
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
            <footer className="p-3 bg-white border-t border-[#e1e0d5]">
              <form 
                onSubmit={handleSubmit}
                className="flex items-end gap-2 bg-[#f8f7f2] border border-[#e1e0d5] rounded-[18px] p-1.5 focus-within:border-[#0d9488]/50 focus-within:ring-2 focus-within:ring-[#0d9488]/10 transition-all"
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
                  className="flex-1 bg-transparent resize-none outline-none py-2 px-3 text-xs text-[#2c332a] placeholder:text-[#7a8072]"
                  rows={1}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="flex-shrink-0 w-9 h-9 bg-[#0d9488] text-white rounded-full flex items-center justify-center hover:bg-[#0f766e] disabled:opacity-50 disabled:hover:bg-[#0d9488] transition-colors"
                >
                  <Send size={14} className="ml-0.5" />
                </button>
              </form>
              <p className="text-[9px] text-[#7a8072] italic text-center mt-2 px-2">
                Educational information only. Does not replace professional medical advice.
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white w-14 h-14 rounded-full items-center justify-center shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-teal-500/20 pointer-events-auto shrink-0 ${
          isOpen ? 'hidden sm:flex' : 'flex'
        }`}
        title={isOpen ? "Close Assistant" : "Open SingHealth GAC Assistant"}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="relative">
            <MessageSquare size={24} />
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-rose-500 rounded-full border-2 border-white animate-pulse"></span>
          </div>
        )}
      </motion.button>
    </div>
  );
}
