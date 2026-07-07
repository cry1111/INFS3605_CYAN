import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Dna, 
  Heart, 
  ShieldCheck, 
  DollarSign, 
  CheckSquare, 
  Globe, 
  Send, 
  RefreshCw, 
  AlertCircle, 
  Calendar, 
  ChevronRight, 
  Info, 
  Phone, 
  MapPin, 
  Sparkles,
  Bookmark,
  ExternalLink,
  ClipboardList
} from "lucide-react";
import { Message, LanguageCode } from "./types";
import { LANGUAGES } from "./data";

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "resources">("chat");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem("gac_checklist_v1");
    return saved ? JSON.parse(saved) : {};
  });

  const chatEndRef = useRef<HTMLDivElement>(null);
  const currentLang = LANGUAGES[language];

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Persist checklist state
  useEffect(() => {
    localStorage.setItem("gac_checklist_v1", JSON.stringify(checkedItems));
  }, [checkedItems]);

  // Handle toggling checklist items
  const handleToggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Helper to parse suggested questions and clean assistant responses
  const parseAssistantMessage = (content: string) => {
    const lines = content.split("\n");
    const mainLines: string[] = [];
    const suggestedQuestions: string[] = [];
    let inSuggested = false;

    const markers = [
      "you might also want to ask",
      "you might want to ask",
      "你可能还想问",
      "anda juga mungkin ingin bertanya",
      "நீங்கள் கேட்க விரும்பலாம்",
      "you may also want to ask"
    ];

    for (const line of lines) {
      const lowerLine = line.toLowerCase().trim();
      if (markers.some(marker => lowerLine.includes(marker))) {
        inSuggested = true;
        continue;
      }

      if (inSuggested) {
        const trimmed = line.trim();
        if (trimmed.startsWith("-") || trimmed.startsWith("*") || /^\d+\./.test(trimmed)) {
          const question = trimmed.replace(/^[-*\s\d.]+\s*/, "").trim();
          if (question) {
            suggestedQuestions.push(question);
          }
        } else if (trimmed === "") {
          continue;
        } else {
          mainLines.push(line);
        }
      } else {
        mainLines.push(line);
      }
    }

    return {
      cleanContent: mainLines.join("\n").trim(),
      suggestedQuestions
    };
  };

  // Detect language and switch if needed
  const detectLanguage = (text: string): LanguageCode => {
    // Basic heuristics for language detection
    const chineseRegex = /[\u4e00-\u9fa5]/;
    const tamilRegex = /[\u0b80-\u0bff]/;
    const malayKeywords = ["apa", "siapa", "bagaimana", "mengapa", "ujian", "kos", "insurans", "kaunseling", "pesakit", "boleh"];
    
    if (chineseRegex.test(text)) {
      return "zh";
    }
    if (tamilRegex.test(text)) {
      return "ta";
    }
    
    const lowerText = text.toLowerCase();
    const hasMalay = malayKeywords.some(keyword => lowerText.split(/\s+/).includes(keyword));
    if (hasMalay) {
      return "ms";
    }
    
    return language; // default to current language if undetected
  };

  // Send a message
  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    // Detect language of the input
    const detectedLang = detectLanguage(text);
    if (detectedLang !== language) {
      setLanguage(detectedLang);
    }

    const newUserMessage: Message = {
      id: Math.random().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error("Failed to get response from server");
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: Math.random().toString(),
        role: "assistant",
        content: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        id: Math.random().toString(),
        role: "assistant",
        content: "Sorry, I am unable to connect to the GAC server right now. Please verify your connection or try again shortly.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Triggering starter card
  const handleStarterClick = (text: string) => {
    sendMessage(text);
  };

  // Clear chat
  const handleClearChat = () => {
    setMessages([]);
  };

  // Helper to render text with **bold** markers
  const renderBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-[#4A4F3D]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F7F2] text-[#333333] flex flex-col font-sans">
      
      {/* HEADER BAR */}
      <header className="bg-white/80 border-b border-[#D1D9C5] shadow-xs sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6B705C] flex items-center justify-center border border-[#5D634F] text-white shadow-xs">
              <Dna className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#4A4F3D] tracking-tight flex items-center gap-1.5">
                {currentLang.title}
                <span className="bg-[#6B705C] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Patient Portal
                </span>
              </h1>
              <p className="text-xs text-[#8A9178] font-medium">
                {currentLang.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {/* Language Selector */}
            <div className="bg-[#E8EDE0] p-1 rounded-xl flex gap-1 border border-[#D1D9C5]">
              {Object.keys(LANGUAGES).map((key) => {
                const lang = LANGUAGES[key];
                return (
                  <button
                    key={key}
                    onClick={() => setLanguage(key as LanguageCode)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition ${
                      language === key 
                        ? "bg-white text-[#4A4F3D] shadow-xs" 
                        : "text-[#6B705C] hover:text-[#4A4F3D]"
                    }`}
                  >
                    {lang.localLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE TAB SELECTOR */}
      <div className="sm:hidden bg-white border-b border-[#D1D9C5] flex sticky top-[73px] z-30">
        <button
          onClick={() => setActiveTab("chat")}
          className={`flex-1 py-3 text-sm font-semibold border-b-2 text-center transition ${
            activeTab === "chat" 
              ? "border-[#6B705C] text-[#4A4F3D] bg-[#E8EDE0]/30" 
              : "border-transparent text-[#8A9178]"
          }`}
        >
          Assistant Chat
        </button>
        <button
          onClick={() => setActiveTab("resources")}
          className={`flex-1 py-3 text-sm font-semibold border-b-2 text-center transition ${
            activeTab === "resources" 
              ? "border-[#6B705C] text-[#4A4F3D] bg-[#E8EDE0]/30" 
              : "border-transparent text-[#8A9178]"
          }`}
        >
          Resources & Checklist
        </button>
      </div>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: CHAT INTERFACE (Takes 8 cols) */}
        <div className={`lg:col-span-8 flex flex-col bg-white rounded-2xl border border-[#D1D9C5] shadow-sm h-[calc(100vh-160px)] md:h-[calc(100vh-190px)] overflow-hidden ${
          activeTab === "chat" ? "flex" : "hidden sm:flex"
        }`}>
          
          {/* Chat Messages Log */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#F7F9F5] space-y-4">
            {messages.length === 0 ? (
              // STARTER SCREEN
              <div className="h-full flex flex-col justify-center items-center text-center max-w-2xl mx-auto px-4 py-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-16 h-16 rounded-3xl bg-[#E8EDE0] flex items-center justify-center border border-[#D1D9C5] text-[#6B705C] mb-4 shadow-sm"
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>
                
                <h2 className="text-xl font-extrabold text-[#4A4F3D] tracking-tight mb-2">
                  {currentLang.starterTitle}
                </h2>
                <p className="text-sm text-[#8A9178] leading-relaxed mb-8">
                  {currentLang.tagline} Use the quick links below to explore standard topics, or type any question regarding FH, the testing process, subsidies, or your upcoming pre-test genetic counselling appointment.
                </p>

                {/* STARTER GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                  {currentLang.starters.map((starter) => (
                    <button
                      key={starter.id}
                      onClick={() => handleStarterClick(starter.text)}
                      className="bg-white hover:bg-[#6B705C] hover:text-white hover:border-[#6B705C] text-left p-4 rounded-xl border border-[#D1D9C5] shadow-xs transition duration-200 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#F5F7F2] text-[#6B705C] flex items-center justify-center group-hover:bg-[#E8EDE0]/50 transition">
                          {starter.id === "what_is_fh" && <Heart className="w-4.5 h-4.5" />}
                          {starter.id === "testing_process" && <Dna className="w-4.5 h-4.5" />}
                          {starter.id === "cost" && <DollarSign className="w-4.5 h-4.5" />}
                          {starter.id === "insurance" && <ShieldCheck className="w-4.5 h-4.5" />}
                          {starter.id === "why_test" && <Bookmark className="w-4.5 h-4.5" />}
                          {starter.id === "faqs" && <Info className="w-4.5 h-4.5" />}
                        </div>
                        <span className="text-xs md:text-sm font-semibold transition group-hover:text-white">{starter.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#A5A58D] group-hover:text-white transform group-hover:translate-x-0.5 transition" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // ACTIVE CHAT
              <div className="space-y-4">
                {messages.map((m, index) => {
                  const isUser = m.role === "user";
                  const isLatest = index === messages.length - 1;
                  const { cleanContent, suggestedQuestions } = parseAssistantMessage(m.content);
                  const lines = cleanContent.split("\n");

                  return (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
                    >
                      <div className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-4 py-3 shadow-xs ${
                        isUser 
                          ? "bg-[#6B705C] text-white rounded-br-none" 
                          : "bg-white text-[#333333] border border-[#D1D9C5] rounded-bl-none shadow-sm"
                      }`}>
                        {/* Header info */}
                        <div className="flex items-center gap-1.5 mb-1.5 text-[10px] font-medium tracking-wide">
                          {isUser ? (
                            <span className="text-[#E8EDE0]">PATIENT</span>
                          ) : (
                            <span className="text-[#6B705C] flex items-center gap-0.5 font-bold">
                              <Dna className="w-3 h-3" /> GAC ADVISOR
                            </span>
                          )}
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400">{m.timestamp}</span>
                        </div>

                        {/* Main message content */}
                        {isUser ? (
                          <p className="text-sm leading-relaxed whitespace-pre-line">{m.content}</p>
                        ) : (
                          <div className="space-y-2 text-sm leading-relaxed text-[#333333]">
                            {lines.map((line, i) => {
                              const content = line.trim();
                              if (!content) return <div key={i} className="h-1" />;

                              // Heading 3 / Subheaders
                              if (content.startsWith("###")) {
                                const title = content.replace(/^###\s*/, "");
                                return (
                                  <h4 key={i} className="font-bold text-[#4A4F3D] text-sm mt-3 mb-1 flex items-center gap-1.5 border-b border-[#D1D9C5] pb-1">
                                    {title}
                                  </h4>
                                );
                              }
                              if (content.startsWith("##") || content.startsWith("#")) {
                                const title = content.replace(/^##?\s*/, "");
                                return (
                                  <h3 key={i} className="font-bold text-[#4A4F3D] text-base mt-4 mb-2">
                                    {title}
                                  </h3>
                                );
                              }

                              // Bullet item
                              const isBullet = content.startsWith("-") || content.startsWith("*");
                              if (isBullet) {
                                const bulletText = content.replace(/^[-*]\s*/, "");
                                return (
                                  <div key={i} className="flex items-start gap-1.5 ml-2 pl-0.5 my-0.5">
                                    <span className="text-[#6B705C] font-black mt-1 text-[10px]">•</span>
                                    <span className="flex-1 text-[#5D634F]">
                                      {renderBoldText(bulletText)}
                                    </span>
                                  </div>
                                );
                              }

                              // Normal paragraph
                              return (
                                <p key={i} className="my-1">
                                  {renderBoldText(line)}
                                </p>
                              );
                            })}
                          </div>
                        )}

                        {/* Suggested Follow-up Questions rendered as clickable pills */}
                        {!isUser && isLatest && suggestedQuestions.length > 0 && !isLoading && (
                          <div className="mt-4 pt-3 border-t border-[#D1D9C5]">
                            <p className="text-[11px] font-bold text-[#4A4F3D] uppercase tracking-wider mb-2 flex items-center gap-1">
                              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" /> You might also want to ask:
                            </p>
                            <div className="flex flex-col gap-1.5">
                              {suggestedQuestions.map((q, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => sendMessage(q)}
                                  className="text-left text-xs bg-[#F5F7F2] hover:bg-[#6B705C] text-[#6B705C] hover:text-white font-medium px-3 py-2 rounded-xl transition duration-150 border border-[#D1D9C5] flex items-center justify-between group"
                                >
                                  <span>{q}</span>
                                  <ChevronRight className="w-3.5 h-3.5 text-[#6B705C] group-hover:text-white transform group-hover:translate-x-0.5 transition" />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}

                {/* Typing Loader */}
                {isLoading && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-white border border-[#D1D9C5] rounded-2xl rounded-bl-none px-4 py-3 shadow-xs max-w-[80%]">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#6B705C] mb-1.5">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>SingHealth GAC Agent is responding...</span>
                      </div>
                      <div className="flex gap-1 py-1.5 pl-1.5">
                        <span className="w-2.5 h-2.5 bg-[#6B705C] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2.5 h-2.5 bg-[#B7B7A4] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2.5 h-2.5 bg-[#E8EDE0] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
            )}
          </div>

          {/* Input Panel */}
          <div className="p-3 md:p-4 border-t border-[#D1D9C5] bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage(inputText);
                }}
                disabled={isLoading}
                placeholder={currentLang.inputPlaceholder}
                className="flex-1 bg-[#F5F7F2] border border-[#D1D9C5] text-sm rounded-xl px-4 py-3 text-gray-800 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-[#6B705C] focus:border-[#6B705C] disabled:opacity-50 transition"
              />
              <button
                onClick={() => sendMessage(inputText)}
                disabled={isLoading || !inputText.trim()}
                className="bg-[#6B705C] hover:bg-[#4A4F3D] text-white font-semibold rounded-xl px-4 py-3 transition shadow-sm disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
              >
                <span>{currentLang.sendButton}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between mt-2.5 px-1">
              <span className="text-[10px] text-[#8A9178] flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Not a clinical advisor. Consult your GP or Counsellor.
              </span>
              {messages.length > 0 && (
                <button
                  onClick={handleClearChat}
                  className="text-[10px] font-bold text-red-700 hover:text-red-800 transition cursor-pointer"
                >
                  {currentLang.clearChat}
                </button>
              )}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: RESOURCE HUB & APPOINTMENT CHECKLIST (Takes 4 cols) */}
        <div className={`lg:col-span-4 space-y-6 ${
          activeTab === "resources" ? "block" : "hidden sm:block"
        }`}>
          
          {/* Appointment Preparation Checklist Card */}
          <div className="bg-white rounded-2xl border border-[#D1D9C5] p-5 shadow-xs">
            <h3 className="text-sm font-bold text-[#4A4F3D] uppercase tracking-wide mb-2 flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-[#6B705C]" />
              {currentLang.checklistTitle}
            </h3>
            <p className="text-xs text-[#8A9178] mb-4">{currentLang.checklistDesc}</p>
            
            <div className="space-y-3">
              {currentLang.checklistItems.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => handleToggleCheck(item.id)}
                  className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition duration-150 ${
                    checkedItems[item.id] 
                      ? "bg-[#F5F7F2]/60 border-[#D1D9C5] text-gray-400" 
                      : "bg-white border-[#D1D9C5] hover:border-[#6B705C] text-gray-800"
                  }`}
                >
                  <div className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center mt-0.5 transition ${
                    checkedItems[item.id] 
                      ? "bg-[#6B705C] border-[#6B705C] text-white" 
                      : "border-[#D1D9C5] bg-white"
                  }`}>
                    {checkedItems[item.id] && <span className="text-[10px] font-bold">✓</span>}
                  </div>
                  <span className={`text-xs leading-relaxed font-medium ${
                    checkedItems[item.id] ? "line-through text-gray-400" : ""
                  }`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Static Insurance Moratorium Factsheet Card */}
          <div className="bg-gradient-to-br from-[#4A4F3D] to-[#6B705C] text-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-bold tracking-wide uppercase mb-2.5 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#E8EDE0]" />
              {currentLang.moratoriumTitle}
            </h3>
            <p className="text-xs text-[#F5F7F2]/90 leading-relaxed mb-4">
              {currentLang.moratoriumDesc}
            </p>

            <div className="bg-[#4A4F3D]/40 rounded-xl p-3 border border-[#F5F7F2]/20 space-y-2.5">
              <div className="flex justify-between items-center text-xs pb-1.5 border-b border-[#F5F7F2]/10">
                <span className="text-[#E8EDE0] font-medium">Life Insurance</span>
                <span className="font-bold text-white">S$2,000,000</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-1.5 border-b border-[#F5F7F2]/10">
                <span className="text-[#E8EDE0] font-medium">Critical Illness</span>
                <span className="font-bold text-white">S$500,000</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-1.5 border-b border-[#F5F7F2]/10">
                <span className="text-[#E8EDE0] font-medium">Disability Income</span>
                <span className="font-bold text-white">S$10,000/mth</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#E8EDE0] font-medium">Long-Term Care</span>
                <span className="font-bold text-white">S$3,000/mth</span>
              </div>
            </div>
            
            <p className="text-[9px] text-[#E8EDE0]/90 leading-relaxed mt-3.5 italic">
              * Moratorium applies to predictive tests. Clinical medical history or clinical symptoms must still be disclosed if requested by your insurer.
            </p>
          </div>

          {/* Contact & Location Card */}
          <div className="bg-white rounded-2xl border border-[#D1D9C5] p-5 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-[#4A4F3D] uppercase tracking-wide pb-1.5 border-b border-[#D1D9C5] flex items-center gap-2">
              <MapPin className="w-4.5 h-4.5 text-[#6B705C]" />
              {currentLang.clinicInfo}
            </h3>

            <div className="space-y-3.5 text-xs text-gray-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8A9178] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#4A4F3D]">Genomic Assessment Centre (GAC)</p>
                  <p>Outpatient Clinic, SingHealth Tower</p>
                  <p>10 Hospital Boulevard</p>
                  <p>Singapore 168582</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8A9178] shrink-0" />
                <p className="font-semibold text-[#4A4F3D]">+65 6225 5554</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#8A9178] shrink-0" />
                <a 
                  href="https://www.singhealth.com.sg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-semibold text-[#6B705C] hover:text-[#4A4F3D] hover:underline flex items-center gap-0.5"
                >
                  Visit GAC Website <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#E8EDE0] border-t border-[#D1D9C5] py-4 text-center mt-8">
        <div className="max-w-7xl mx-auto px-4 text-[11px] text-[#5D634F] leading-relaxed space-y-1">
          <p>© 2026 SingHealth Genomic Assessment Centre (GAC). All rights reserved.</p>
          <p>Educational informational portal. This assistant does not diagnose diseases or provide medical recommendations. Always consult qualified clinical advisors.</p>
        </div>
      </footer>

    </div>
  );
}
