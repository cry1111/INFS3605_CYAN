/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { ShieldAlert, BookOpen, Milestone, ArrowDown } from 'lucide-react';

interface HeroProps {
  language: Language;
  onStartLearning: () => void;
  onExploreJourney: () => void;
}

export default function Hero({ language, onStartLearning, onExploreJourney }: HeroProps) {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  return (
    <section 
      id="portal-hero-section"
      className="relative overflow-hidden bg-radial from-blue-50/75 via-white to-white py-12 md:py-20 border-b border-slate-100"
    >
      {/* Absolute Decorative Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-50/50 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        {/* Supportive Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Singapore Clinical Guidelines Companion</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-slate-900 tracking-tight leading-tight"
        >
          {t.heroTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-slate-600 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          {t.heroSub}
        </motion.p>

        {/* Reassuring Clinical Notice Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 max-w-xl mx-auto text-left flex items-start gap-3 shadow-xs"
        >
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-900 leading-relaxed font-medium">
            <strong>{t.heroNotice}</strong>
          </p>
        </motion.div>

        {/* Actions Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={onStartLearning}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            {t.btnStart}
          </button>
          
          <button
            onClick={onExploreJourney}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-sans font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Milestone className="w-4 h-4 text-blue-500" />
            {t.btnExplore}
          </button>
        </motion.div>

        {/* Bottom micro-interaction page hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-1.5 text-slate-400 text-[10px] font-mono tracking-wider"
        >
          <span>{t.scrollHint}</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </motion.div>

      </div>
    </section>
  );
}
