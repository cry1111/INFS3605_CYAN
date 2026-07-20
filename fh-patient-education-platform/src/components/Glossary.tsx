/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from '../types';
import { GLOSSARY_ITEMS, UI_TRANSLATIONS } from '../data/translations';
import Highlight from './Highlight';
import { Plus, Minus, BookOpen, Search } from 'lucide-react';

interface GlossaryProps {
  language: Language;
  searchQuery: string;
}

export default function Glossary({ language, searchQuery }: GlossaryProps) {
  const glossary = GLOSSARY_ITEMS[language] || GLOSSARY_ITEMS.en;
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  
  // Track expanded index
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section 
      id="glossary" 
      className="scroll-mt-20 my-8 bg-white rounded-3xl p-6 md:p-10 border border-slate-150 shadow-xs"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
          Quick Lookup
        </span>
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 mt-2">
          <Highlight text={t.glossaryTitle} query={searchQuery} />
        </h2>
        <p className="text-slate-500 text-xs mt-1.5">
          <Highlight text={t.glossarySub} query={searchQuery} />
        </p>
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto divide-y divide-slate-150 border-t border-b border-slate-150">
        {glossary.map((item, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div key={idx} className="py-2.5">
              <button
                id={`glossary-btn-${idx}`}
                onClick={() => toggleAccordion(idx)}
                className="w-full py-3 flex items-center justify-between text-left focus:outline-hidden group cursor-pointer"
                aria-expanded={isExpanded}
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="font-sans font-bold text-slate-900 text-sm md:text-base group-hover:text-blue-600 transition-colors">
                    <Highlight text={item.term} query={searchQuery} />
                  </span>
                </div>
                
                {/* Visual state indicator */}
                <div className={`p-1.5 rounded-full bg-slate-50 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all ${isExpanded ? 'rotate-180 bg-blue-50 text-blue-600' : ''}`}>
                  {isExpanded ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-40 opacity-100 mt-2 mb-4 pl-11 pr-4' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                  <Highlight text={item.definition} query={searchQuery} />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

