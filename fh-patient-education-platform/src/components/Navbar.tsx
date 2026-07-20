/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, AccessibilitySettings } from '../types';
import { UI_TRANSLATIONS, LANG_NAMES } from '../data/translations';
import { 
  Heart, 
  Search, 
  ChevronUp, 
  ChevronDown, 
  Languages, 
  Accessibility, 
  Menu, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  accessibility: AccessibilitySettings;
  onAccessibilityChange: (settings: Partial<AccessibilitySettings>) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeSearchIndex: number;
  totalSearchMatches: number;
  onNavigateSearch: (direction: 'prev' | 'next') => void;
  onToggleSidebar: () => void;
  onResetLanguage: () => void;
}

export default function Navbar({
  language,
  onLanguageChange,
  accessibility,
  onAccessibilityChange,
  searchQuery,
  onSearchChange,
  activeSearchIndex,
  totalSearchMatches,
  onNavigateSearch,
  onToggleSidebar,
  onResetLanguage
}: NavbarProps) {
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showAccessDropdown, setShowAccessDropdown] = useState(false);
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  return (
    <header 
      id="portal-header"
      className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-xs backdrop-blur-md bg-opacity-95"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand & Menu Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            id="sidebar-toggle-btn"
            onClick={onToggleSidebar}
            className="p-2 -ml-2 rounded-lg hover:bg-slate-100 text-slate-700 transition-colors md:hidden cursor-pointer"
            aria-label="Toggle Side Navigation"
          >
            <Menu className="w-6 h-6" />
          </button>

          <button 
            id="brand-logo-btn"
            onClick={onResetLanguage}
            className="flex items-center gap-2 text-left cursor-pointer group focus:outline-hidden"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-white/15 heart-pulse" />
            </div>
            <div>
              <span className="block font-sans font-extrabold text-sm text-slate-900 tracking-tight leading-none">
                FH GENETIC
              </span>
              <span className="block text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest mt-0.5 leading-none">
                Education Portal
              </span>
            </div>
          </button>
        </div>

        {/* Center: Search Engine */}
        <div className="flex-1 max-w-md mx-auto hidden md:block">
          <div className="relative flex items-center">
            <div className="absolute left-3 text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="global-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-24 py-2 border border-slate-200 rounded-full text-sm bg-slate-50 hover:bg-slate-100/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-slate-800 transition-all placeholder:text-slate-400"
            />
            
            {/* Search Match Navigators */}
            {searchQuery && (
              <div className="absolute right-2 flex items-center gap-1.5 bg-white border border-slate-100 shadow-xs rounded-full py-0.5 px-2">
                <span className="text-[10px] font-mono font-bold text-slate-500">
                  {totalSearchMatches > 0 
                    ? `${activeSearchIndex + 1}/${totalSearchMatches}`
                    : '0'
                  }
                </span>
                <div className="flex items-center gap-0.5 border-l border-slate-100 pl-1.5">
                  <button
                    onClick={() => onNavigateSearch('prev')}
                    disabled={totalSearchMatches === 0}
                    className="p-1 rounded-full hover:bg-slate-100 text-slate-600 disabled:opacity-30 cursor-pointer"
                    title={t.prev}
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigateSearch('next')}
                    disabled={totalSearchMatches === 0}
                    className="p-1 rounded-full hover:bg-slate-100 text-slate-600 disabled:opacity-30 cursor-pointer"
                    title={t.next}
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Controls & Translation */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Accessibility panel */}
          <div className="relative">
            <button
              id="accessibility-panel-btn"
              onClick={() => {
                setShowAccessDropdown(!showAccessDropdown);
                setShowLangDropdown(false);
              }}
              className={`p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors flex items-center justify-center cursor-pointer ${showAccessDropdown ? 'bg-slate-100 text-blue-600' : ''}`}
              title={t.accessibility}
              aria-expanded={showAccessDropdown}
              aria-haspopup="true"
            >
              <Accessibility className="w-5 h-5" />
            </button>

            {showAccessDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl py-3 z-50 text-xs text-slate-700 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-1.5 border-b border-slate-100 font-semibold text-slate-950 uppercase tracking-wider text-[10px]">
                  {t.accessibility} Controls
                </div>
                
                {/* Text Size */}
                <div className="p-3 border-b border-slate-100 space-y-2">
                  <span className="block font-medium text-slate-500">Text Scaling</span>
                  <div className="grid grid-cols-3 gap-1">
                    {(['normal', 'large', 'extra-large'] as const).map((sz) => (
                      <button
                        key={sz}
                        onClick={() => onAccessibilityChange({ textSize: sz })}
                        className={`py-1.5 rounded-md border text-center font-medium capitalize cursor-pointer ${accessibility.textSize === sz ? 'bg-blue-50 border-blue-200 text-blue-700' : 'border-slate-200 hover:bg-slate-50'}`}
                      >
                        {sz === 'normal' && '100%'}
                        {sz === 'large' && '125%'}
                        {sz === 'extra-large' && '150%'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contrast Toggle */}
                <div className="p-3 border-b border-slate-100 space-y-2">
                  <span className="block font-medium text-slate-500">Contrast Mode</span>
                  <div className="grid grid-cols-2 gap-1">
                    <button
                      onClick={() => onAccessibilityChange({ contrast: 'normal' })}
                      className={`py-1.5 rounded-md border text-center font-medium cursor-pointer ${accessibility.contrast === 'normal' ? 'bg-blue-50 border-blue-200 text-blue-700' : 'border-slate-200 hover:bg-slate-50'}`}
                    >
                      {t.contrastNormal}
                    </button>
                    <button
                      onClick={() => onAccessibilityChange({ contrast: 'high' })}
                      className={`py-1.5 rounded-md border text-center font-bold cursor-pointer ${accessibility.contrast === 'high' ? 'bg-blue-900 border-blue-900 text-white shadow-xs' : 'border-slate-200 hover:bg-slate-50'}`}
                    >
                      {t.contrastHigh}
                    </button>
                  </div>
                </div>

                {/* Reduced Motion Toggle */}
                <div className="p-3 flex items-center justify-between">
                  <span className="font-medium text-slate-500">Motion Effects</span>
                  <button
                    onClick={() => onAccessibilityChange({ reducedMotion: !accessibility.reducedMotion })}
                    className={`px-3 py-1.5 rounded-md border font-medium cursor-pointer ${!accessibility.reducedMotion ? 'bg-teal-50 border-teal-200 text-teal-700' : 'bg-slate-100 border-slate-200 text-slate-600'}`}
                  >
                    {!accessibility.reducedMotion ? t.motionOn : t.motionOff}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Language selection switcher */}
          <div className="relative">
            <button
              id="language-switcher-btn"
              onClick={() => {
                setShowLangDropdown(!showLangDropdown);
                setShowAccessDropdown(false);
              }}
              className={`p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors flex items-center justify-center gap-1 cursor-pointer ${showLangDropdown ? 'bg-slate-100 text-blue-600' : ''}`}
              aria-label="Switch Language"
              aria-expanded={showLangDropdown}
              aria-haspopup="true"
            >
              <Languages className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase hidden lg:inline-block">
                {language}
              </span>
            </button>

            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {(['en', 'zh', 'ta', 'ms'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      onLanguageChange(lang);
                      setShowLangDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-semibold cursor-pointer flex items-center justify-between hover:bg-slate-50 ${language === lang ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-700'}`}
                  >
                    <span>{LANG_NAMES[lang]}</span>
                    {language === lang && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                  </button>
                ))}
                <div className="border-t border-slate-100 mt-1 pt-1">
                  <button
                    onClick={() => {
                      onResetLanguage();
                      setShowLangDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800 cursor-pointer"
                  >
                    {t.backToWelcome}
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Subheader Search (Mobile Only) */}
      <div className="md:hidden border-t border-slate-100 px-4 py-2 bg-slate-50 flex items-center justify-between gap-2">
        <div className="relative flex-1">
          <div className="absolute left-3 top-2.5 text-slate-400">
            <Search className="w-3.5 h-3.5" />
          </div>
          <input
            id="mobile-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-8 pr-20 py-1.5 border border-slate-200 rounded-full text-xs bg-white focus:outline-hidden text-slate-800"
          />
          {searchQuery && (
            <div className="absolute right-2 top-1.5 flex items-center gap-1 bg-white border border-slate-100 rounded-full py-0.5 px-1.5">
              <span className="text-[9px] font-mono font-semibold text-slate-500">
                {totalSearchMatches > 0 
                  ? `${activeSearchIndex + 1}/${totalSearchMatches}`
                  : '0'
                }
              </span>
              <div className="flex gap-0.5 border-l border-slate-100 pl-1">
                <button
                  onClick={() => onNavigateSearch('prev')}
                  className="p-0.5 hover:bg-slate-50 text-slate-500 disabled:opacity-25"
                  disabled={totalSearchMatches === 0}
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <button
                  onClick={() => onNavigateSearch('next')}
                  className="p-0.5 hover:bg-slate-50 text-slate-500 disabled:opacity-25"
                  disabled={totalSearchMatches === 0}
                >
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
