/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { ROADMAP_STAGES, UI_TRANSLATIONS } from '../data/translations';
import Highlight from './Highlight';
import { 
  FileText, 
  MessagesSquare, 
  Syringe, 
  FileHeart, 
  Pill, 
  Network, 
  CalendarCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Info
} from 'lucide-react';

interface InteractiveRoadmapProps {
  language: Language;
  searchQuery: string;
}

const STAGE_ICONS = [
  FileText,        // 01 Referral
  MessagesSquare,  // 02 Pre-Test Counselling
  Syringe,         // 03 Genetic Testing
  FileHeart,       // 04 Results & Counselling
  Pill,            // 05 Tailored Treatment
  Network,         // 06 Cascade Screening
  CalendarCheck,   // 07 Ongoing Care
];

export default function InteractiveRoadmap({ language, searchQuery }: InteractiveRoadmapProps) {
  const stages = ROADMAP_STAGES[language] || ROADMAP_STAGES.en;
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);

  const activeStage = stages[selectedStageIndex];
  const ActiveIcon = STAGE_ICONS[selectedStageIndex];

  return (
    <section 
      id="testing-journey" 
      className="bg-white rounded-3xl p-6 md:p-10 shadow-md border border-slate-150 scroll-mt-20 my-8"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-900 tracking-tight">
          <Highlight text={t.roadmapTitle} query={searchQuery} />
        </h2>
        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
          <Highlight text={t.roadmapSubtitle} query={searchQuery} />
        </p>
      </div>

      {/* Progress Bar & Indicators (Desktop: Horizontal) */}
      <div className="hidden md:block relative mb-12">
        {/* Track Line */}
        <div className="absolute top-8 left-[7%] right-[7%] h-0.5 bg-slate-100 z-0">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-blue-500"
            initial={{ width: '0%' }}
            animate={{ width: `${(selectedStageIndex / (stages.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Milestone Circles */}
        <div className="relative z-10 flex justify-between items-center px-4">
          {stages.map((stage, idx) => {
            const Icon = STAGE_ICONS[idx];
            const isSelected = selectedStageIndex === idx;
            const isCompleted = idx < selectedStageIndex;

            return (
              <button
                key={stage.id}
                id={`roadmap-node-${idx}`}
                onClick={() => setSelectedStageIndex(idx)}
                className="flex flex-col items-center focus:outline-hidden group cursor-pointer"
                style={{ width: '13%' }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm ${
                    isSelected 
                      ? 'bg-blue-600 border-blue-600 text-white ring-4 ring-blue-50' 
                      : isCompleted
                        ? 'bg-teal-50 border-teal-500 text-teal-600'
                        : 'bg-white border-slate-200 text-slate-400 group-hover:border-slate-400'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                
                {/* Step & Label */}
                <span className={`text-[10px] font-mono font-bold mt-2.5 tracking-wider ${isSelected ? 'text-blue-600' : 'text-slate-400'}`}>
                  STAGE {stage.step}
                </span>
                <span className={`text-xs font-bold text-center mt-0.5 truncate w-full ${isSelected ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                  <Highlight text={stage.title} query={searchQuery} />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress Bar & Indicators (Mobile: Connected chips) */}
      <div className="md:hidden flex gap-2 overflow-x-auto pb-4 mb-6" aria-label="Timeline navigation">
        {stages.map((stage, idx) => {
          const isSelected = selectedStageIndex === idx;
          const Icon = STAGE_ICONS[idx];
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStageIndex(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border shrink-0 font-sans text-xs font-bold cursor-pointer transition-all ${
                isSelected 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-xs' 
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{stage.step}. <Highlight text={stage.title} query={searchQuery} /></span>
            </button>
          );
        })}
      </div>

      {/* Expandable Disclosure Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-50 rounded-2xl border border-slate-200/60 p-6 md:p-8 flex flex-col lg:flex-row gap-6 items-start"
        >
          {/* Visual Stage Banner */}
          <div className="w-full lg:w-1/3 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px] font-mono font-extrabold tracking-widest uppercase">
              STAGE {activeStage.step} of 07
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shrink-0">
                <ActiveIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-sans font-bold text-slate-900 leading-tight">
                  <Highlight text={activeStage.title} query={searchQuery} />
                </h3>
                <p className="text-slate-500 text-xs mt-0.5">
                  <Highlight text={activeStage.shortDesc} query={searchQuery} />
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed pt-2">
              <Highlight text={activeStage.fullDesc} query={searchQuery} />
            </p>
          </div>

          {/* Details / Action Checklist Panel */}
          <div className="w-full lg:w-2/3 bg-white rounded-xl border border-slate-200/50 p-5 md:p-6 space-y-4 shadow-xs">
            <h4 className="text-sm font-sans font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4.5 h-4.5 text-teal-600" />
              Key Details & Preparation Tips:
            </h4>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeStage.details.map((detail, dIdx) => (
                <li 
                  key={dIdx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 hover:bg-blue-50/20 border border-slate-100 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 animate-pulse" />
                  <span className="text-xs text-slate-700 leading-relaxed">
                    <Highlight text={detail} query={searchQuery} />
                  </span>
                </li>
              ))}
            </ul>

            {/* Supportive callout */}
            <div className="p-3 bg-teal-50/50 rounded-lg border border-teal-100 flex items-start gap-2.5 text-teal-800">
              <Info className="w-4.5 h-4.5 text-teal-600 shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed font-medium">
                Ask your counsellor about details on <strong>Stage {activeStage.step}</strong> during your pre-test session. There is no obligation to proceed at any step.
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

