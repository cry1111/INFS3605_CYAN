/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';
import { REFERENCE_ITEMS, UI_TRANSLATIONS } from '../data/translations';
import { Bookmark, ExternalLink, Shield } from 'lucide-react';

interface ReferencesProps {
  language: Language;
}

export default function References({ language }: ReferencesProps) {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  return (
    <section 
      id="references" 
      className="scroll-mt-20 my-8 bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200/60"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl shrink-0 hidden sm:block">
          <Bookmark className="w-6 h-6" />
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-sans font-bold text-slate-900 tracking-tight">
              {t.referencesTitle}
            </h2>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              {t.referencesDisclaimer}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REFERENCE_ITEMS.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl border border-slate-200/50 flex flex-col justify-between hover:shadow-xs transition-shadow"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                    {item.org}
                  </span>
                  <h3 className="font-sans font-extrabold text-slate-900 text-xs md:text-sm leading-snug">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {item.link && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex justify-end">
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                    >
                      <span>Official Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Educational Youtube Reference */}
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-0.5 text-center sm:text-left">
              <span className="block font-bold">Interactive Learning Recommendation</span>
              <p className="text-blue-900/90 text-[11px]">We recommend viewing SingHealth's patient informational brochures and accompanying educational videos before attending your counselling sessions.</p>
            </div>
            <span className="text-[10px] font-mono font-bold bg-blue-100 px-3 py-1.5 rounded-sm uppercase tracking-wider shrink-0 text-blue-700">
              Highly Recommended
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
