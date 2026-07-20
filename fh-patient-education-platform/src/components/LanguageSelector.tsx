/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { LANG_NAMES } from '../data/translations';
import { Globe, HeartHandshake } from 'lucide-react';

interface LanguageSelectorProps {
  onSelectLanguage: (lang: Language) => void;
}

const LANGUAGE_DATA: { code: Language; glyph: string; sub: string; color: string }[] = [
  { code: 'en', glyph: 'A', sub: 'English Language', color: 'from-blue-500 to-indigo-600' },
  { code: 'zh', glyph: '文', sub: '简体中文 (Mandarin)', color: 'from-teal-500 to-emerald-600' },
  { code: 'ta', glyph: 'த', sub: 'தமிழ் (Tamil)', color: 'from-pink-500 to-rose-600' },
  { code: 'ms', glyph: 'M', sub: 'Bahasa Melayu (Malay)', color: 'from-amber-500 to-orange-600' },
];

export default function LanguageSelector({ onSelectLanguage }: LanguageSelectorProps) {
  return (
    <div id="language-selection-container" className="min-h-screen bg-slate-50 flex flex-col justify-between p-6 md:p-12">
      {/* Upper Brand Info */}
      <div className="max-w-4xl mx-auto w-full text-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6"
        >
          <HeartHandshake className="w-4 h-4" />
          <span>Singapore Genomic Assessment Resource</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-tight"
        >
          FH Patient Education Portal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-slate-600 text-lg mt-3 max-w-2xl mx-auto"
        >
          An educational platform helping patients referred for Familial Hypercholesterolaemia (FH) prepare for pre-test genetic counselling.
        </motion.p>
      </div>

      {/* Main Selector Grid */}
      <div className="max-w-4xl mx-auto w-full my-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-slate-100"
        >
          <h2 className="text-xl md:text-2xl font-sans font-semibold text-slate-800 text-center mb-8 flex items-center justify-center gap-2">
            <Globe className="w-5 h-5 text-blue-500" />
            Please select your preferred language
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LANGUAGE_DATA.map((lang, index) => (
              <motion.button
                key={lang.code}
                id={`lang-btn-${lang.code}`}
                onClick={() => onSelectLanguage(lang.code)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="group relative flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-white text-left shadow-xs transition-all hover:border-blue-300 hover:shadow-md cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              >
                {/* Visual Script Glyph */}
                <div className={`w-14 h-14 rounded-lg bg-linear-to-br ${lang.color} flex items-center justify-center text-white text-2xl font-bold shadow-xs group-hover:scale-105 transition-transform`}>
                  {lang.glyph}
                </div>

                {/* Text Labels */}
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {LANG_NAMES[lang.code]}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang.sub}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Trust Badge Footer */}
      <div className="max-w-4xl mx-auto w-full text-center mb-6">
        <p className="text-xs text-slate-400">
          All materials provided in this portal are reviewed by genetic counsellors and are clinically validated.
        </p>
      </div>
    </div>
  );
}
