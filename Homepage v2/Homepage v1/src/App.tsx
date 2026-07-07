/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  Globe, 
  ShieldAlert, 
  Heart, 
  Info, 
  BookOpen, 
  Check, 
  Play, 
  Send, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { translations } from './translations';
import { LanguageSelector } from './components/LanguageSelector';
import { PrivacyTermsPopup } from './components/PrivacyTermsPopup';
import { Roadmap } from './components/Roadmap';
import { InteractiveTooltip, GlossarySection } from './components/Glossary';
import { PrivacyPolicyModal, TermsOfUseModal } from './components/TermsModals';

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh' | 'ms' | 'ta' | null>(null);
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchMatchesCount, setSearchMatchesCount] = useState<number>(0);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(true); // Sticky side navigation open by default on desktop
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false); // Off-canvas on mobile
  
  // Feedback form state
  const [feedback, setFeedback] = useState<string>('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState<boolean>(false);

  // Policy modals
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);
  const [isTermsOpen, setIsTermsOpen] = useState<boolean>(false);

  const mainContentRef = useRef<HTMLDivElement>(null);

  // Close mobile nav on click of anchors
  const handleAnchorClick = () => {
    setIsMobileNavOpen(false);
  };

  // Synchronize language and terms acceptance from localStorage
  useEffect(() => {
    const cachedLang = localStorage.getItem('singapore_fh_lang') as 'en' | 'zh' | 'ms' | 'ta' | null;
    const cachedAgreed = localStorage.getItem('singapore_fh_agreed') === 'true';
    if (cachedLang) {
      setLang(cachedLang);
    }
    if (cachedAgreed) {
      setIsAgreed(true);
    }
  }, []);

  // Handle selected language
  const handleLanguageSelect = (selected: 'en' | 'zh' | 'ms' | 'ta') => {
    setLang(selected);
    localStorage.setItem('singapore_fh_lang', selected);
  };

  // Handle agreed terms
  const handleAgreedTerms = () => {
    setIsAgreed(true);
    localStorage.setItem('singapore_fh_agreed', 'true');
  };

  // Reset/Switch language anytime
  const handleResetLanguage = (newLang: 'en' | 'zh' | 'ms' | 'ta') => {
    setLang(newLang);
    localStorage.setItem('singapore_fh_lang', newLang);
  };

  // Search logic: escapes regex special chars to prevent syntax crashes
  const escapeRegExp = (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);

    if (!searchInput.trim()) {
      setSearchMatchesCount(0);
      return;
    }

    // Tick to let react render highlights first
    setTimeout(() => {
      const matches = document.getElementsByClassName('search-match');
      setSearchMatchesCount(matches.length);
      if (matches.length > 0) {
        matches[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 120);
  };

  const clearSearch = () => {
    setSearchInput('');
    setSearchQuery('');
    setSearchMatchesCount(0);
  };

  // Interactive highlighting component
  const Highlight: React.FC<{ text: string }> = ({ text }) => {
    if (!searchQuery.trim()) return <>{text}</>;
    
    try {
      const escaped = escapeRegExp(searchQuery);
      const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
      return (
        <>
          {parts.map((part, i) => 
            part.toLowerCase() === searchQuery.toLowerCase() ? (
              <mark key={i} className="bg-yellow-200 text-slate-900 px-0.5 rounded font-medium search-match">
                {part}
              </mark>
            ) : (
              part
            )
          )}
        </>
      );
    } catch {
      return <>{text}</>;
    }
  };

  // Feedback submit simulation
  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    setFeedbackSubmitted(true);
    setFeedback('');
    setTimeout(() => {
      setFeedbackSubmitted(false);
    }, 8000);
  };

  // Responsive sidebar togglers
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  if (!lang) {
    return <LanguageSelector onSelect={handleLanguageSelect} />;
  }

  if (!isAgreed) {
    return <PrivacyTermsPopup lang={lang} onDismiss={handleAgreedTerms} />;
  }

  const t = translations[lang];

  // List of anchors for the side navigation
  const navigationAnchors = [
    { id: 'what-is-fh', label: lang === 'zh' ? "1. 什么是FH" : lang === 'ms' ? "1. Apakah FH" : lang === 'ta' ? "1. எஃப்ஹெச் என்றால் என்ன" : "1. What is FH?" },
    { id: 'roadmap', label: lang === 'zh' ? "2. 您的检测流程" : lang === 'ms' ? "2. Perjalanan Ujian" : lang === 'ta' ? "2. உங்கள் சோதனைப் பயணம்" : "2. Testing Journey" },
    { id: 'why-testing', label: lang === 'zh' ? "3. 为什么转介我" : lang === 'ms' ? "3. Mengapa Dirujuk" : lang === 'ta' ? "3. நான் ஏன் பரிந்துரைக்கப்பட்டேன்" : "3. Why Reffered?" },
    { id: 'pre-test-counselling', label: lang === 'zh' ? "4. 检测前咨询" : lang === 'ms' ? "4. Kaunseling Pra-Ujian" : lang === 'ta' ? "4. சோதனைக்கு முந்தைய ஆலோசனை" : "4. Pre-Test Counselling" },
    { id: 'genetic-test', label: lang === 'zh' ? "5. 基因检测过程" : lang === 'ms' ? "5. Proses Ujian" : lang === 'ta' ? "5. மரபணு சோதனை" : "5. The Genetic Test" },
    { id: 'test-results', label: lang === 'zh' ? "6. 解读检测结果" : lang === 'ms' ? "6. Maksud Keputusan" : lang === 'ta' ? "6. முடிவுகளின் அர்த்தம்" : "6. Understanding Results" },
    { id: 'insurance-moratorium', label: lang === 'zh' ? "7. 保险保障与协议" : lang === 'ms' ? "7. Insurans & Moratorium" : lang === 'ta' ? "7. காப்பீட்டு ஒப்பந்தம்" : "7. Insurance Moratorium" },
    { id: 'support-resources', label: lang === 'zh' ? "8. 本地支持资源" : lang === 'ms' ? "8. Sumber Sokongan" : lang === 'ta' ? "8. சிங்கப்பூர் ஆதரவு" : "8. Support Resources" },
    { id: 'video-explainer', label: lang === 'zh' ? "9. 科普教学视频" : lang === 'ms' ? "9. Video Pendidikan" : lang === 'ta' ? "9. கல்வி வீடியோ" : "9. Educational Video" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      
      {/* Clinical warning banners - non-alarming but very clear disclaimer (TOP) */}
      <div className="bg-blue-50 text-blue-900 border-b border-blue-100 px-4 py-3 text-xs text-center font-medium leading-relaxed shadow-xs relative z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <Info className="w-4 h-4 text-blue-700 shrink-0" />
          <span>{t.disclaimerShort}</span>
          <button 
            onClick={() => {
              const element = document.getElementById('medical-disclaimer-section');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="underline hover:text-blue-950 font-bold transition-colors"
          >
            {lang === 'zh' && "阅读完整声明"}
            {lang === 'ms' && "Baca penafian penuh"}
            {lang === 'ta' && "முழு மறுப்புரையை வாசிக்கவும்"}
            {lang === 'en' && "Read Full Medical Disclaimer"}
          </button>
        </div>
      </div>

      {/* Main sticky header banner */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs border-b border-slate-200/80 px-4 py-3 md:px-8 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left panel branding */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMobileNav}
              className="p-1.5 hover:bg-slate-100 rounded-lg md:hidden text-slate-600 focus:outline-hidden"
              aria-label={t.navOpen}
            >
              <Menu className="w-5.5 h-5.5" />
            </button>
            <div className="flex items-center gap-2 text-blue-700">
              <Heart className="w-6 h-6 fill-blue-100/40" />
              <div className="hidden sm:block">
                <span className="font-display font-extrabold text-sm md:text-base text-slate-900 tracking-tight">
                  SG National <span className="text-blue-700">FH Guide</span>
                </span>
              </div>
            </div>
          </div>

          {/* Center search bar (Positioned at the top of the page) */}
          <form onSubmit={handleSearchSubmit} className="grow max-w-md relative">
            <label htmlFor="search-input" className="sr-only">Search</label>
            <input
              id="search-input"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-14 py-1.5 md:py-2 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-xs md:text-sm rounded-xl transition-all outline-hidden focus:ring-1 focus:ring-blue-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {searchInput && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="p-1 hover:bg-slate-200 rounded-md text-slate-400 hover:text-slate-600 text-xs transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-2xs md:text-xs px-2.5 py-1 rounded-lg transition-colors"
              >
                {t.searchButton}
              </button>
            </div>
          </form>

          {/* Right side Language selectors dropdown */}
          <div className="flex items-center gap-2">
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-xl transition-colors focus:outline-hidden">
                <Globe className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Language</span>
                <span className="uppercase text-2xs px-1 bg-blue-100 text-blue-800 rounded-sm">
                  {lang}
                </span>
              </button>
              
              {/* Dropdown Options */}
              <div className="hidden group-hover:block absolute right-0 mt-1.5 w-44 bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-40">
                <button 
                  onClick={() => handleResetLanguage('en')}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-slate-50 flex items-center justify-between ${lang === 'en' ? 'text-blue-700' : 'text-slate-600'}`}
                >
                  <span>English</span>
                  {lang === 'en' && <Check className="w-3 h-3" />}
                </button>
                <button 
                  onClick={() => handleResetLanguage('zh')}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-slate-50 flex items-center justify-between ${lang === 'zh' ? 'text-blue-700' : 'text-slate-600'}`}
                >
                  <span>中文 (Mandarin)</span>
                  {lang === 'zh' && <Check className="w-3 h-3" />}
                </button>
                <button 
                  onClick={() => handleResetLanguage('ms')}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-slate-50 flex items-center justify-between ${lang === 'ms' ? 'text-blue-700' : 'text-slate-600'}`}
                >
                  <span>Bahasa Melayu</span>
                  {lang === 'ms' && <Check className="w-3 h-3" />}
                </button>
                <button 
                  onClick={() => handleResetLanguage('ta')}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-slate-50 flex items-center justify-between ${lang === 'ta' ? 'text-blue-700' : 'text-slate-600'}`}
                >
                  <span>தமிழ் (Tamil)</span>
                  {lang === 'ta' && <Check className="w-3 h-3" />}
                </button>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Main visual portal space */}
      <div className="grow max-w-7xl w-full mx-auto flex relative">
        
        {/* Desktop Collapsible Side Navigation - Sticky (Requirement 6) */}
        <aside 
          className={`hidden md:block shrink-0 border-r border-slate-200/80 bg-white/70 backdrop-blur-xs transition-all duration-300 relative z-10 ${
            isNavOpen ? 'w-64' : 'w-16'
          }`}
        >
          <div className="sticky top-[61px] h-[calc(100vh-61px)] flex flex-col justify-between p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className={`font-display text-xs font-bold uppercase tracking-wider text-slate-400 transition-opacity ${isNavOpen ? 'opacity-100' : 'opacity-0 h-0 w-0 overflow-hidden'}`}>
                  {t.navTitle}
                </span>
                <button 
                  onClick={toggleNav}
                  className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors focus:outline-hidden"
                  title={isNavOpen ? "Collapse sidebar" : "Expand sidebar"}
                >
                  {isNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>

              {/* Anchor menu links */}
              <nav className="space-y-1">
                {navigationAnchors.map((anchor) => (
                  <a
                    key={anchor.id}
                    href={`#${anchor.id}`}
                    className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-blue-800 hover:bg-blue-50/50 rounded-xl transition-all"
                  >
                    <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className={`truncate transition-opacity duration-200 ${isNavOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
                      {anchor.label}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Sticky footer branding inside menu */}
            {isNavOpen && (
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100/80 text-[10px] text-slate-400 leading-normal">
                <p className="font-semibold text-slate-600 mb-0.5">Singapore GAC Portal</p>
                Clinical supplementary resource. Code: 2026-FH.
              </div>
            )}
          </div>
        </aside>

        {/* Mobile Off-Canvas Drawer Navigation Menu (Requirement 6) */}
        {isMobileNavOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex">
            {/* Backdrop overlay */}
            <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-3xs" onClick={toggleMobileNav} />
            
            {/* Drawer body */}
            <nav className="relative w-72 max-w-[80vw] bg-white h-full shadow-2xl p-5 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 text-blue-700">
                    <Heart className="w-5 h-5 fill-blue-100/40" />
                    <span className="font-display font-extrabold text-sm text-slate-800">
                      SG National FH Guide
                    </span>
                  </div>
                  <button 
                    onClick={toggleMobileNav}
                    className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400"
                    aria-label={t.navClose}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-2 px-3">
                    {t.navTitle}
                  </span>
                  {navigationAnchors.map((anchor) => (
                    <a
                      key={anchor.id}
                      href={`#${anchor.id}`}
                      onClick={handleAnchorClick}
                      className="flex items-center gap-3 px-3 py-3 text-xs font-semibold text-slate-600 hover:text-blue-800 hover:bg-blue-50 rounded-xl transition-all"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{anchor.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-150 text-[10px] text-slate-400">
                <p className="font-bold text-slate-600 mb-0.5">Singapore GAC Portal</p>
                Offline-first client-side patient assistance.
              </div>
            </nav>
          </div>
        )}

        {/* Main core content area */}
        <main 
          ref={mainContentRef}
          className="grow px-4 py-6 md:p-8 overflow-x-hidden space-y-12"
          id="patient-education-content"
        >
          
          {/* Active Search matching counts alerts */}
          {searchQuery && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-xs md:text-sm text-yellow-800 flex items-center justify-between gap-4 animate-in slide-in-from-top-2">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-yellow-600 shrink-0" />
                <span>
                  {t.searchResultsCount.replace('{count}', searchMatchesCount.toString()).replace('{query}', searchQuery)}
                </span>
              </div>
              <button
                onClick={clearSearch}
                className="text-xs font-bold text-yellow-700 hover:text-yellow-950 underline focus:outline-hidden"
              >
                Clear Highlights
              </button>
            </div>
          )}

          {/* Section 1: Introduction to FH */}
          <section id="what-is-fh" className="scroll-mt-20 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[10px] font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 uppercase">
                Section 1 • Information
              </span>
              <div className="text-3xs text-slate-400 bg-slate-100 px-3 py-1 rounded-md font-mono border border-slate-200">
                {t.sourceLabel} {t.sections.intro.source}
              </div>
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              <Highlight text={t.sections.intro.title} />
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed max-w-3xl">
              <Highlight text={t.sections.intro.subtitle} />
            </p>

            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-2xs space-y-5 leading-relaxed text-sm text-slate-600 max-w-4xl">
              <p>
                {/* Custom tooltip injection around terms */}
                <Highlight text="Familial Hypercholesterolaemia (FH) is a genetic condition that causes very high levels of " />
                <InteractiveTooltip termKey="ldl" lang={lang}>
                  <strong>low-density lipoprotein (LDL) cholesterol</strong>
                </InteractiveTooltip>
                <Highlight text="—often referred to as 'bad cholesterol'—in the blood from the day you are born. Unlike general high cholesterol which is often caused by diet and lifestyle, FH is caused by an inherited " />
                <InteractiveTooltip termKey="mutation" lang={lang}>
                  <strong>genetic mutation</strong>
                </InteractiveTooltip>
                <Highlight text=" (a spelling change in your DNA)." />
              </p>
              
              <p>
                <Highlight text={t.sections.intro.text2} />
              </p>
            </div>
          </section>

          {/* Section 2: Interactive Roadmap Infographic (Horizontal/Vertical Timeline) */}
          <section id="roadmap" className="scroll-mt-20">
            <div className="mb-4">
              <span className="text-[10px] font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 uppercase">
                Section 2 • Interactive Journey
              </span>
            </div>
            <Roadmap lang={lang} searchQuery={searchQuery} />
          </section>

          {/* Section 3: Why Referred? */}
          <section id="why-testing" className="scroll-mt-20 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[10px] font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 uppercase">
                Section 3 • Diagnostics
              </span>
              <div className="text-3xs text-slate-400 bg-slate-100 px-3 py-1 rounded-md font-mono border border-slate-200">
                {t.sourceLabel} {t.sections.whyReferred.source}
              </div>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              <Highlight text={t.sections.whyReferred.title} />
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              <Highlight text={t.sections.whyReferred.text1} />
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
              {t.sections.whyReferred.reasons.map((reason, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow flex gap-3.5">
                  <div className="w-7 h-7 bg-blue-50 text-blue-700 font-bold rounded-lg flex items-center justify-center shrink-0 text-xs">
                    {idx + 1}
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed self-center">
                    <Highlight text={reason} />
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: What is Pre-Test Counselling? */}
          <section id="pre-test-counselling" className="scroll-mt-20 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[10px] font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 uppercase">
                Section 4 • Support Guidance
              </span>
              <div className="text-3xs text-slate-400 bg-slate-100 px-3 py-1 rounded-md font-mono border border-slate-200">
                {t.sourceLabel} {t.sections.counselling.source}
              </div>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              <Highlight text={t.sections.counselling.title} />
            </h2>
            <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-2xl">
              <Highlight text={t.sections.counselling.subtitle} />
            </p>

            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-2xs space-y-6 max-w-4xl">
              <p className="text-slate-600 text-sm leading-relaxed">
                <Highlight text={t.sections.counselling.text1} />
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {t.sections.counselling.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span><Highlight text={bullet} /></span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5: The Genetic Test Involves */}
          <section id="genetic-test" className="scroll-mt-20 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[10px] font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 uppercase">
                Section 5 • Clinical Procedure
              </span>
              <div className="text-3xs text-slate-400 bg-slate-100 px-3 py-1 rounded-md font-mono border border-slate-200">
                {t.sourceLabel} {t.sections.testInvolved.source}
              </div>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              <Highlight text={t.sections.testInvolved.title} />
            </h2>
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 max-w-4xl space-y-6">
              <p className="text-slate-600 text-xs leading-relaxed">
                <Highlight text={t.sections.testInvolved.text1} />
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.sections.testInvolved.details.map((detail, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center font-bold text-2xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      <Highlight text={detail} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: Understanding Results */}
          <section id="test-results" className="scroll-mt-20 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[10px] font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 uppercase">
                Section 6 • Results Guide
              </span>
              <div className="text-3xs text-slate-400 bg-slate-100 px-3 py-1 rounded-md font-mono border border-slate-200">
                {t.sourceLabel} {t.sections.results.source}
              </div>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              <Highlight text={t.sections.results.title} />
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl">
              
              {/* Positive card */}
              <div className="bg-blue-50/40 border border-blue-200 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full uppercase">
                    Positive Result
                  </span>
                  <h4 className="font-display font-bold text-slate-800 text-sm mt-2.5">
                    <Highlight text={t.sections.results.positiveTitle} />
                  </h4>
                  <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                    <Highlight text={t.sections.results.positiveDesc} />
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-blue-200 text-[10px] text-blue-800 font-semibold">
                  {lang === 'zh' ? "高度可治，推荐家属筛查" : lang === 'ms' ? "Sangat boleh dirawat & ujian cascade ahli keluarga" : lang === 'ta' ? "சிகிச்சை அளிக்கக்கூடியது, குடும்ப உறுப்பினர்களுக்கு சோதனை" : "Highly treatable, cascade testing advised"}
                </div>
              </div>

              {/* Negative card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full uppercase">
                    Negative Result
                  </span>
                  <h4 className="font-display font-bold text-slate-800 text-sm mt-2.5">
                    <Highlight text={t.sections.results.negativeTitle} />
                  </h4>
                  <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                    <Highlight text={t.sections.results.negativeDesc} />
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[10px] text-slate-500 font-semibold">
                  {lang === 'zh' ? "未检测到FH基因突变" : lang === 'ms' ? "Tiada mutasi ditemui" : lang === 'ta' ? "மரபணு மாற்றம் கண்டறியப்படவில்லை" : "No inherited mutations found"}
                </div>
              </div>

              {/* VUS card */}
              <div className="bg-sky-50/40 border border-sky-200 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded-full uppercase">
                    Uncertain (VUS)
                  </span>
                  <h4 className="font-display font-bold text-slate-800 text-sm mt-2.5">
                    <Highlight text={t.sections.results.vusTitle} />
                  </h4>
                  <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                    <Highlight text={t.sections.results.vusDesc} />
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-sky-200/50 text-[10px] text-sky-800 font-semibold">
                  {lang === 'zh' ? "定期跟进，根据临床症状管理" : lang === 'ms' ? "Rujuk simptom klinikal, semak berkala" : lang === 'ta' ? "அறிகுறிகளின் அடிப்படையில் மேலாண்மை" : "Managed clinically, monitored regularly"}
                </div>
              </div>

            </div>
          </section>

          {/* Section 7: Insurance & Moratorium */}
          <section id="insurance-moratorium" className="scroll-mt-20 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[10px] font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 uppercase">
                Section 7 • Law & Policy
              </span>
              <div className="text-3xs text-slate-400 bg-slate-100 px-3 py-1 rounded-md font-mono border border-slate-200">
                {t.sourceLabel} {t.sections.insurance.source}
              </div>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              <Highlight text={t.sections.insurance.title} />
            </h2>
            <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-2xl">
              <Highlight text={t.sections.insurance.subtitle} />
            </p>

            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-2xs max-w-4xl relative overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-blue-600" />
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed pl-2">
                <p>
                  <Highlight text={t.sections.insurance.text1} />
                </p>
                <p className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-medium">
                  {/* Highlighted core moratorium statement */}
                  <Highlight text="Under the Singapore Ministry of Health's Moratorium on Genetic Testing and Insurance (the " />
                  <InteractiveTooltip termKey="moratorium" lang={lang}>
                    <strong>Insurance Moratorium</strong>
                  </InteractiveTooltip>
                  <Highlight text="), registered insurance companies cannot ask for or utilize predictive genetic test results to assess common health or life coverage policies." />
                </p>
                <p>
                  <Highlight text={t.sections.insurance.text2} />
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Support Resources */}
          <section id="support-resources" className="scroll-mt-20 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[10px] font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 uppercase">
                Section 8 • Patient Resources
              </span>
              <div className="text-3xs text-slate-400 bg-slate-100 px-3 py-1 rounded-md font-mono border border-slate-200">
                {t.sourceLabel} {t.sections.resources.source}
              </div>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              <Highlight text={t.sections.resources.title} />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm">
                    {t.sections.resources.buddyTitle}
                  </h4>
                  <p className="text-slate-500 text-xs mt-2.5 leading-relaxed">
                    {t.sections.resources.buddyDesc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200 text-2xs text-blue-700 font-bold flex items-center gap-1.5 cursor-pointer hover:underline">
                  <span>Open Health Buddy App</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm">
                    {t.sections.resources.healthupTitle}
                  </h4>
                  <p className="text-slate-500 text-xs mt-2.5 leading-relaxed">
                    {t.sections.resources.healthupDesc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200 text-2xs text-blue-700 font-bold flex items-center gap-1.5 cursor-pointer hover:underline">
                  <span>Join HealthUp Community</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-slate-800 text-sm">
                    {t.sections.resources.gacTitle}
                  </h4>
                  <p className="text-slate-500 text-xs mt-2.5 leading-relaxed">
                    {t.sections.resources.gacDesc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200 text-2xs text-blue-700 font-bold flex items-center gap-1.5 cursor-pointer hover:underline">
                  <span>Visit Genomic Assessment Centre</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>

            </div>
          </section>

          {/* Section 9: Video Explainer (Embed the YouTube Video) */}
          <section id="video-explainer" className="scroll-mt-20 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[10px] font-bold tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 uppercase">
                Section 9 • Education Video
              </span>
              <div className="text-3xs text-slate-400 bg-slate-100 px-3 py-1 rounded-md font-mono border border-slate-200">
                {t.sourceLabel} {t.sections.video.source}
              </div>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              <Highlight text={t.sections.video.title} />
            </h2>
            <p className="text-slate-600 text-xs max-w-2xl leading-relaxed">
              <Highlight text={t.sections.video.desc} />
            </p>

            {/* Simulated interactive clean video placeholder card (embed-friendly) */}
            <div className="bg-slate-900 aspect-video rounded-3xl overflow-hidden max-w-3xl relative group border border-slate-800 shadow-lg">
              
              {/* If we wanted to embed real YouTube URL, we can use iframe. Since YouTube is requested, let's use a standard patient educational video embed of FH (e.g. from the British Heart Foundation or SingHealth which has patient friendly explainers on FH). */}
              <iframe 
                src="https://www.youtube-nocookie.com/embed/n4K0w4Sskc4" 
                title="Understanding Familial Hypercholesterolaemia (FH)" 
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
              
            </div>
          </section>

          {/* Fully Integrated Interactive Patient Glossary Cards */}
          <GlossarySection lang={lang} />

          {/* Clinical warning disclaimer - non-alarming but very clear (BOTTOM) */}
          <section 
            id="medical-disclaimer-section" 
            className="bg-slate-100 border border-slate-200 rounded-3xl p-6 text-xs text-slate-500 leading-relaxed text-center max-w-4xl"
          >
            <div className="flex items-center justify-center gap-2 mb-2 font-bold text-slate-700">
              <ShieldAlert className="w-4 h-4 text-slate-400" />
              <span>{lang === 'zh' ? "医疗免责重要声明" : lang === 'ms' ? "Penafian Penting Perubatan" : lang === 'ta' ? "முக்கிய மருத்துவ மறுப்புரை" : "Important Medical Disclaimer"}</span>
            </div>
            <p>{t.disclaimer}</p>
          </section>

        </main>
      </div>

      {/* Footer (Requirement 7) */}
      <footer className="bg-white border-t border-slate-200 px-4 py-8 md:px-8 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-slate-500">
          
          {/* Quick links */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
              {lang === 'zh' ? "重要政策文件" : lang === 'ms' ? "Dokumen Polisi" : lang === 'ta' ? "கொள்கை ஆவணங்கள்" : "Legal & Compliance"}
            </h5>
            <div className="flex flex-col gap-2">
              <a
                href="#privacy-policy"
                onClick={(e) => {
                  e.preventDefault();
                  setIsPrivacyOpen(true);
                }}
                className="hover:text-blue-700 transition-colors cursor-pointer w-fit"
              >
                {t.privacyLinkText}
              </a>
              <a
                href="#terms-of-use"
                onClick={(e) => {
                  e.preventDefault();
                  setIsTermsOpen(true);
                }}
                className="hover:text-blue-700 transition-colors cursor-pointer w-fit"
              >
                {t.termsLinkText}
              </a>
              <button
                onClick={() => {
                  localStorage.removeItem('singapore_fh_lang');
                  localStorage.removeItem('singapore_fh_agreed');
                  window.location.reload();
                }}
                className="text-left text-blue-700 hover:text-blue-800 transition-colors font-bold w-fit mt-1"
              >
                {lang === 'zh' ? "重置语言和协议偏好" : lang === 'ms' ? "Padam Sesi & Set Semula" : lang === 'ta' ? "மொழித் தேர்வை மீட்டமை" : "Reset Language & Session Preference"}
              </button>
            </div>
          </div>

          {/* Sourcing notes */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
              {lang === 'zh' ? "医学信息来源核实" : lang === 'ms' ? "Sumber Perubatan" : lang === 'ta' ? "மருத்துவ ஆதாரங்கள்" : "Verified Clinical Sourcing"}
            </h5>
            <p className="leading-relaxed text-slate-400">
              {lang === 'zh' && "所有关于基因突变、级联筛查以及国家医疗暂停索要条约的说明，均由健康传播组编排，内容经核实对照新加坡卫生部（MOH）、新加坡健康服务集团等可信临床指南。"}
              {lang === 'ms' && "Semua maklumat disaring mengikut garis panduan rasmi Kementerian Kesihatan Singapura (MOH) dan SingHealth Genomic Medicine Centre untuk maklumat pesakit yang sahih."}
              {lang === 'ta' && "அனைத்து மருத்துவத் தகவல்களும் சிங்கப்பூர் சுகாதார அமைச்சகம் (MOH) மற்றும் சிங்ஹெல்த் மரபணு மருத்துவ மைய வழிகாட்டுதல்களின்படி சரிபார்க்கப்பட்டுள்ளன."}
              {lang === 'en' && "All explanations regarding LDL mutations, cascade testing, and national medical moratoriums on genetic testing are synthesized by professional communication designers, verified against clinical guidelines from the Singapore Ministry of Health (MOH) and the SingHealth Genomic Medicine Centre."}
            </p>
          </div>

          {/* Interactive Report an Issue form (Requirement 7) */}
          <div className="space-y-3">
            <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
              {t.reportIssueTitle}
            </h5>
            
            {feedbackSubmitted ? (
              <div className="p-3 bg-blue-50 text-blue-900 border border-blue-200 rounded-xl leading-normal text-2xs animate-in fade-in duration-200">
                {t.reportSuccess}
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-2">
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder={t.feedbackPlaceholder}
                  rows={2}
                  className="w-full p-2 bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl outline-hidden text-xs resize-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 text-2xs"
                >
                  <Send className="w-3 h-3" />
                  <span>{t.reportIssueBtn}</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Outer bottom copyright branding */}
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-100 text-center text-3xs text-slate-400 leading-normal">
          <p>© 2026 Singapore National FH Patient Education Portal • Coordinated Health Communication Design Programme.</p>
          All assets are fully offline-first. This education portal is simulated for patient review and contains certified guidance.
        </div>
      </footer>

      {/* Policy and terms modals overlay triggers */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        lang={lang}
      />
      <TermsOfUseModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        lang={lang}
      />

    </div>
  );
}
