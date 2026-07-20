/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';
import { SUPPORT_RESOURCES, UI_TRANSLATIONS } from '../data/translations';
import Highlight from './Highlight';
import { PhoneCall, Globe, ArrowUpRight, Award, HelpCircle } from 'lucide-react';

interface SupportResourcesProps {
  language: Language;
  searchQuery: string;
}

export default function SupportResources({ language, searchQuery }: SupportResourcesProps) {
  const resources = SUPPORT_RESOURCES[language] || SUPPORT_RESOURCES.en;
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  return (
    <section 
      id="support-resources" 
      className="scroll-mt-20 my-8"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
          Community & Care
        </span>
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 mt-2">
          <Highlight text={t.navSupport} query={searchQuery} />
        </h2>
        <p className="text-slate-500 text-xs mt-1.5 max-w-lg mx-auto">
          Contact details and digital platforms reviewed for Singapore families facing inherited lipid conditions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl border border-slate-150 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Tag & Icon */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-sm uppercase tracking-wider">
                  <Highlight text={res.tag} query={searchQuery} />
                </span>
                <Award className="w-4 h-4 text-slate-300" />
              </div>

              <h3 className="font-sans font-bold text-slate-900 text-sm md:text-base leading-snug">
                <Highlight text={res.name} query={searchQuery} />
              </h3>
              
              <p className="text-slate-600 text-xs leading-relaxed">
                <Highlight text={res.description} query={searchQuery} />
              </p>
            </div>

            {/* Actions / Contacts */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-500 text-[11px] font-medium font-mono">
                <PhoneCall className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{res.contact}</span>
              </div>


              <a 
                href={res.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-bold transition-colors w-full cursor-pointer border border-slate-250/20"
              >
                <span>Visit Portal</span>
                <Globe className="w-3.5 h-3.5" />
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
