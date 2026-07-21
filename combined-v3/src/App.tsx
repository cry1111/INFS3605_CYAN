/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import LanguageSelector from './components/LanguageSelector';
import PrivacyModal from './components/PrivacyModal';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import InteractiveRoadmap from './components/InteractiveRoadmap';
import EducationalContent from './components/EducationalContent';
import InteractiveDiagrams from './components/InteractiveDiagrams';
import SupportResources from './components/SupportResources';
import Glossary from './components/Glossary';
import References from './components/References';
import Footer from './components/Footer';
import { ChatWidget } from './components/Chat/ChatWidget';

import { Language, AccessibilitySettings } from './types';
import { UI_TRANSLATIONS } from './data/translations';

export default function App() {
  // App States
  const [language, setLanguage] = useState<Language | null>(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [hasAcceptedPrivacy, setHasAcceptedPrivacy] = useState(false);
  
  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('what-is-fh');

  // Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearchIndex, setActiveSearchIndex] = useState(0);
  const [totalSearchMatches, setTotalSearchMatches] = useState(0);

  // Accessibility settings
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>({
    contrast: 'normal',
    textSize: 'normal',
    reducedMotion: false
  });

  // Apply root HTML font-size scaling for true zoom-in accessibility
  useEffect(() => {
    const root = document.documentElement;
    if (accessibility.textSize === 'large') {
      root.style.fontSize = '125%';
    } else if (accessibility.textSize === 'extra-large') {
      root.style.fontSize = '150%';
    } else {
      root.style.fontSize = '100%';
    }
    // Clean up on unmount or reset
    return () => {
      root.style.fontSize = '100%';
    };
  }, [accessibility.textSize]);

  // Handle language selected
  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsPrivacyOpen(true);
  };

  // Handle privacy accepted
  const handleAcceptPrivacy = () => {
    setHasAcceptedPrivacy(true);
    setIsPrivacyOpen(false);
  };

  // Scroll spy observer
  useEffect(() => {
    if (!hasAcceptedPrivacy) return;

    const sections = [
      'what-is-fh',
      'testing-journey',
      'why-referred',
      'pre-test-counselling',
      'genetic-test',
      'understanding-results',
      'insurance-moratorium',
      'support-resources',
      'glossary',
      'references'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hasAcceptedPrivacy, language]);

  // Search Match Highlighter observer
  useEffect(() => {
    if (!searchQuery.trim()) {
      setTotalSearchMatches(0);
      setActiveSearchIndex(0);
      return;
    }

    // Small delay to let React DOM render marks
    const timer = setTimeout(() => {
      const matches = document.querySelectorAll('.search-match');
      setTotalSearchMatches(matches.length);
      setActiveSearchIndex(0);

      // Clean old active indicators
      matches.forEach((el) => {
        el.classList.remove('ring-4', 'ring-blue-600', 'bg-amber-400', 'scale-110', 'z-40');
      });

      // Highlight the first match
      if (matches.length > 0) {
        matches[0].classList.add('ring-4', 'ring-blue-600', 'bg-amber-400', 'scale-110', 'z-40');
        matches[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [searchQuery, language]);

  // Search Traversal Controls
  const handleNextSearch = () => {
    const matches = document.querySelectorAll('.search-match');
    if (matches.length === 0) return;

    // Clean old active match
    matches[activeSearchIndex]?.classList.remove('ring-4', 'ring-blue-600', 'bg-amber-400', 'scale-110', 'z-40');

    const nextIdx = (activeSearchIndex + 1) % matches.length;
    setActiveSearchIndex(nextIdx);

    // Apply new highlight
    matches[nextIdx]?.classList.add('ring-4', 'ring-blue-600', 'bg-amber-400', 'scale-110', 'z-40');
    matches[nextIdx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handlePrevSearch = () => {
    const matches = document.querySelectorAll('.search-match');
    if (matches.length === 0) return;

    // Clean old active match
    matches[activeSearchIndex]?.classList.remove('ring-4', 'ring-blue-600', 'bg-amber-400', 'scale-110', 'z-40');

    const prevIdx = (activeSearchIndex - 1 + matches.length) % matches.length;
    setActiveSearchIndex(prevIdx);

    // Apply new highlight
    matches[prevIdx]?.classList.add('ring-4', 'ring-blue-600', 'bg-amber-400', 'scale-110', 'z-40');
    matches[prevIdx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // If language hasn't been selected yet, render welcome gate
  if (language === null) {
    return <LanguageSelector onSelectLanguage={handleSelectLanguage} />;
  }

  // If user selected language but hasn't accepted privacy terms, hold gate
  if (!hasAcceptedPrivacy) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <PrivacyModal 
          isOpen={isPrivacyOpen}
          language={language}
          onAccept={handleAcceptPrivacy}
        />
      </div>
    );
  }

  // Accessibility styling flags
  const contrastClass = accessibility.contrast === 'high' ? 'theme-high-contrast bg-white text-slate-950 font-semibold' : 'bg-slate-50 text-slate-700';
  const textSizeClass = accessibility.textSize === 'large' 
    ? 'theme-large-text' 
    : accessibility.textSize === 'extra-large' 
      ? 'theme-extra-large-text' 
      : '';
  const motionClass = accessibility.reducedMotion ? 'theme-reduced-motion' : '';

  return (
    <div className={`min-h-screen transition-colors duration-200 selection:bg-blue-200/60 ${contrastClass} ${textSizeClass} ${motionClass}`}>
      
      {/* GLOBAL BANNER OR ANNOUNCEMENT */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-[11px] font-semibold tracking-wide flex items-center justify-center gap-2">
        <span className="bg-blue-800 px-2 py-0.5 rounded-sm text-[9px] uppercase font-mono">Singapore Patient Portal</span>
        <span>A companion guide for Familial Hypercholesterolaemia (FH) referral journeys.</span>
      </div>

      {/* NAVBAR */}
      <Navbar 
        language={language}
        onLanguageChange={setLanguage}
        accessibility={accessibility}
        onAccessibilityChange={(settings) => setAccessibility(prev => ({ ...prev, ...settings }))}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalSearchMatches={totalSearchMatches}
        activeSearchIndex={activeSearchIndex}
        onNavigateSearch={(dir) => dir === 'next' ? handleNextSearch() : handlePrevSearch()}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onResetLanguage={() => setLanguage(null)}
      />

      {/* MAIN LAYOUT CANVAS */}
      <div className="max-w-7xl mx-auto flex items-start gap-8 px-4 md:px-6 py-6 relative">
        
        {/* DESKTOP COLLAPSIBLE SIDEBAR */}
        <Sidebar 
          language={language}
          activeSection={activeSection}
          onClose={() => setSidebarOpen(false)}
          isOpen={sidebarOpen}
        />

        {/* PRIMARY SCROLLABLE VIEWPORT */}
        <main className="flex-1 min-w-0 space-y-16 pb-24">
          
          {/* HERO GREETING & CLINICAL COMPLIANCE */}
          <Hero 
            language={language} 
            onStartLearning={() => {
              const el = document.getElementById('educational-content');
              if (el) {
                const headerOffset = 80;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            onExploreJourney={() => {
              const el = document.getElementById('testing-journey');
              if (el) {
                const headerOffset = 80;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
          />

          {/* ROADMAP SECTION */}
          <InteractiveRoadmap language={language} searchQuery={searchQuery} />

          {/* COMPREHENSIVE EDUCATIONAL CARDS */}
          <EducationalContent language={language} searchQuery={searchQuery} />

          {/* INTERACTIVE SIMULATIONS (Clearance / Pedigree Inheritance) */}
          <InteractiveDiagrams language={language} />

          {/* SUPPORT RESOURCES & REGISTRY LINKS */}
          <SupportResources language={language} searchQuery={searchQuery} />

          {/* GLOSSARY */}
          <Glossary language={language} searchQuery={searchQuery} />

          {/* REFERENCES & BIBLIOGRAPHY */}
          <References language={language} />

        </main>
      </div>

      {/* FOOTER */}
      <Footer language={language} />

      {/* FLOATING CLINICAL AI ASSISTANT */}
      <ChatWidget />

    </div>
  );
}
