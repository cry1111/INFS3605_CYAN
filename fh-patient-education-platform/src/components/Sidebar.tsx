/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { 
  Dna, 
  HelpCircle, 
  Milestone, 
  UserRoundCheck, 
  ClipboardCheck, 
  TrendingUp, 
  ShieldAlert, 
  HeartHandshake, 
  BookOpen, 
  Bookmark,
  X,
  Compass
} from 'lucide-react';

interface SidebarProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

interface NavItem {
  id: string;
  labelKey: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'what-is-fh', labelKey: 'navWhatIsFH', icon: HelpCircle },
  { id: 'testing-journey', labelKey: 'navJourney', icon: Milestone },
  { id: 'why-referred', labelKey: 'navWhyReferred', icon: Compass },
  { id: 'pre-test-counselling', labelKey: 'navCounselling', icon: UserRoundCheck },
  { id: 'genetic-test', labelKey: 'navTest', icon: ClipboardCheck },
  { id: 'understanding-results', labelKey: 'navResults', icon: Dna },
  { id: 'insurance-moratorium', labelKey: 'navInsurance', icon: ShieldAlert },
  { id: 'support-resources', labelKey: 'navSupport', icon: HeartHandshake },
  { id: 'glossary', labelKey: 'navGlossary', icon: BookOpen },
  { id: 'references', labelKey: 'navReferences', icon: Bookmark },
];

export default function Sidebar({ language, isOpen, onClose, activeSection }: SidebarProps) {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  const handleScrollTo = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Mobile drawer backdrop overlay */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs md:hidden"
        />
      )}

      {/* Main navigation drawer */}
      <aside
        id="side-navigation-drawer"
        className={`fixed md:sticky top-0 md:top-16 left-0 h-screen md:h-[calc(100vh-4rem)] w-64 z-50 md:z-30 bg-white border-r border-slate-200 shadow-xl md:shadow-none flex flex-col justify-between transition-transform duration-300 ease-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        {/* Top bar (Mobile only) */}
        <div className="px-6 h-16 shrink-0 flex items-center justify-between border-b border-slate-100 md:hidden bg-slate-50">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600" />
            <span className="font-sans font-bold text-sm text-slate-800 uppercase tracking-wider">
              {t.navTitle}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
            aria-label="Close navigation panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable links panel */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          <span className="hidden md:block px-3 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">
            Navigation Menu
          </span>
          <nav className="space-y-1.5" aria-label="Portal section directory">
            {NAV_ITEMS.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleScrollTo(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer group focus:outline-hidden ${isActive ? 'bg-blue-50 text-blue-700 shadow-xs border-l-4 border-blue-600 pl-2' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                  <IconComponent className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-105 ${isActive ? 'text-blue-700' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  <span className="truncate">{t[item.labelKey]}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Brand footer inside drawer */}
        <div className="p-4 border-t border-slate-100 shrink-0 bg-slate-50/50">
          <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100/40 text-center">
            <span className="block text-[10px] font-mono font-bold text-blue-700 uppercase tracking-wider">
              MOH APPROVED
            </span>
            <p className="text-[10px] text-slate-500 mt-1 leading-normal">
              Educational reference framework for pre-test genomic education.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
