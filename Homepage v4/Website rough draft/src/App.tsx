import React, { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import Layout from './components/Layout';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import EducationalContent from './components/EducationalContent';
import Chatbot from './components/Chatbot';
import { Language } from './types';
import { translations } from './data/content';

export default function App() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  if (!language) {
    return <LanguageSelector onSelectLanguage={setLanguage} />;
  }

  const t = translations[language];

  return (
    <>
      <Layout
        t={t}
        currentLanguage={language}
        onLanguageChange={() => setLanguage(null)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isChatbotOpen={isChatbotOpen}
        onToggleChatbot={() => setIsChatbotOpen(!isChatbotOpen)}
      >
        <section id="roadmap" className="h-full">
          <Roadmap t={t} searchQuery={searchQuery} />
        </section>
        
        <EducationalContent t={t} searchQuery={searchQuery} />
        
        <section id="faqs" className="h-full">
          <FAQ t={t} searchQuery={searchQuery} />
        </section>

      </Layout>

      <Chatbot 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
        t={t} 
      />
    </>
  );
}

