import React, { useState } from 'react';
import { Translation, Language } from '../types';
import { Menu, X, Search, ChevronRight, Activity, BookOpen, Stethoscope, MessageCircleQuestion, Dna, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  t: Translation;
  currentLanguage: Language;
  onLanguageChange: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  children: React.ReactNode;
  isChatbotOpen: boolean;
  onToggleChatbot: () => void;
}

export default function Layout({ 
  t, 
  currentLanguage, 
  onLanguageChange, 
  searchQuery, 
  onSearchChange,
  children,
  isChatbotOpen,
  onToggleChatbot
}: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'roadmap', label: t.fhRoadmap, icon: Activity },
    { id: 'about-fh', label: t.aboutFh, icon: BookOpen },
    { id: 'genetic-testing', label: t.geneticTesting, icon: Dna },
    { id: 'pre-test-counselling', label: t.preTestCounselling, icon: Stethoscope },
    { id: 'faqs', label: t.faqs, icon: MessageCircleQuestion },
    { id: 'educational-resources', label: t.educationalResources, icon: FileText },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans text-slate-800">
      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden md:flex w-16 flex-none bg-white border-r border-slate-200 flex-col items-center py-6 gap-8 z-10">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          FH
        </div>
        
        <nav className="flex-1 flex flex-col gap-6 items-center w-full">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="p-2 text-slate-400 hover:text-blue-600 cursor-pointer rounded-lg hover:bg-slate-50 transition-colors"
              title={item.label}
            >
              <item.icon className="w-6 h-6" />
            </button>
          ))}
        </nav>

        <div className="mt-auto mb-2 text-slate-400 text-xs font-bold uppercase cursor-pointer hover:text-blue-600" onClick={onLanguageChange}>
          {currentLanguage.substring(0, 2)}
        </div>
      </aside>

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col relative transition-all duration-300 ${isChatbotOpen ? 'md:mr-[35%]' : ''}`}>
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between z-20 shadow-none">
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              <Menu size={24} />
            </button>
            <h1 className="ml-2 text-xl font-bold text-blue-700">FH<span className="text-blue-500">Journey</span></h1>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-end md:justify-start">
            <div className="relative w-full max-w-md hidden md:block">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 pointer-events-none">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md leading-5 bg-slate-50 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <button 
              className="md:hidden p-2 text-slate-600 hover:text-blue-600 focus:outline-none"
              onClick={() => {
                const searchInput = document.getElementById('mobile-search');
                if (searchInput) searchInput.focus();
              }}
            >
              <Search size={24} />
            </button>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-2">
              <button onClick={onLanguageChange} className={`px-3 py-1 text-xs font-medium rounded ${currentLanguage === 'en' ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-100' : 'text-slate-500 hover:bg-slate-100'}`}>English</button>
              <button onClick={onLanguageChange} className={`px-3 py-1 text-xs font-medium rounded ${currentLanguage === 'zh' ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-100' : 'text-slate-500 hover:bg-slate-100'}`}>Mandarin</button>
              <button onClick={onLanguageChange} className={`px-3 py-1 text-xs font-medium rounded ${currentLanguage === 'ta' ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-100' : 'text-slate-500 hover:bg-slate-100'}`}>Tamil</button>
              <button onClick={onLanguageChange} className={`px-3 py-1 text-xs font-medium rounded ${currentLanguage === 'ms' ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-100' : 'text-slate-500 hover:bg-slate-100'}`}>Malay</button>
            </div>
            {!isChatbotOpen && (
              <button
                onClick={onToggleChatbot}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-semibold shadow-sm"
              >
                <MessageCircleQuestion size={16} />
                <span>{t.chatbot}</span>
              </button>
            )}
          </div>
        </header>
          
          {/* Mobile Search Bar (visible on focus or always on mobile) */}
          <div className="md:hidden px-4 py-3 bg-white border-b border-slate-200">
             <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  id="mobile-search"
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
          </div>

        {/* Main Scrollable Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-6 flex flex-col gap-6">
          <div className="w-full mx-auto flex flex-col gap-4 md:gap-6 pb-20 md:pb-6">
            {/* Medical Disclaimer Banner */}
            <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg flex items-start gap-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                <p className="text-[10px] md:text-xs text-amber-800">
                  <strong>{t.disclaimerTitle}:</strong> {t.disclaimer}
                </p>
              </div>
            </div>

            {children}
          </div>
        </main>
        
        {/* Floating Action Button for Mobile Chatbot */}
        {!isChatbotOpen && (
          <button
            onClick={onToggleChatbot}
            className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 z-40 transition-transform transform hover:scale-105"
            aria-label="Open AI Assistant"
          >
            <MessageCircleQuestion size={28} />
          </button>
        )}

      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-800 bg-opacity-50 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white z-50 shadow-xl flex flex-col md:hidden"
            >
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
                <h1 className="text-2xl font-bold text-blue-700">FH<span className="text-blue-500">Journey</span></h1>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-800 focus:outline-none"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4 space-y-2 bg-slate-50">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center space-x-4 p-4 text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-colors text-left shadow-sm"
                  >
                    <item.icon size={20} className="text-blue-600" />
                    <span className="font-semibold text-sm">{item.label}</span>
                  </button>
                ))}
              </nav>
              <div className="p-6 border-t border-slate-200 bg-white">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onLanguageChange();
                  }}
                  className="w-full py-3 px-4 font-semibold text-blue-700 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-100"
                >
                  Change Language
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
