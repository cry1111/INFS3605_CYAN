import React, { useState } from 'react';
import { translations } from '../translations';
import { 
  Stethoscope, 
  HeartHandshake, 
  Syringe, 
  FileSpreadsheet, 
  Users, 
  Clock, 
  ChevronRight, 
  ChevronDown,
  Pill,
  BookOpen
} from 'lucide-react';

interface RoadmapProps {
  lang: 'en' | 'zh' | 'ms' | 'ta';
  searchQuery: string;
}

export const Roadmap: React.FC<RoadmapProps> = ({ lang, searchQuery }) => {
  const [activeStep, setActiveStep] = useState<number>(1); // Default to Pre-Test Counselling (index 1)
  const t = translations[lang];
  const stepsData = t.sections.roadmap.steps;

  // Map step index to lucide icons
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Stethoscope className="w-5 h-5" />;
      case 1:
        return <HeartHandshake className="w-5 h-5" />;
      case 2:
        return <Syringe className="w-5 h-5" />;
      case 3:
        return <FileSpreadsheet className="w-5 h-5" />;
      case 4:
        return <Pill className="w-5 h-5" />;
      case 5:
        return <Users className="w-5 h-5" />;
      case 6:
        return <BookOpen className="w-5 h-5" />;
      default:
        return <Stethoscope className="w-5 h-5" />;
    }
  };

  // Safe helper to check search match
  const matchesSearch = (text: string) => {
    if (!searchQuery.trim()) return false;
    return text.toLowerCase().includes(searchQuery.toLowerCase());
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
            {t.sections.roadmap.title}
          </h3>
          <p className="text-slate-500 text-sm mt-1">
            {t.sections.roadmap.subtitle}
          </p>
        </div>
      </div>

      <p className="text-xs text-blue-700 bg-blue-50/50 border border-blue-100/50 px-4 py-2.5 rounded-xl mb-8 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
        <span>{t.sections.roadmap.clickHint}</span>
      </p>

      {/* Desktop Horizontal Track (hidden on mobile) */}
      <div className="hidden md:flex items-center justify-between relative mb-8 px-4">
        {/* Connection track background line */}
        <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
        {/* Filled connection track line for progress */}
        <div 
          className="absolute top-1/2 left-12 h-0.5 bg-gradient-to-r from-blue-700 to-blue-500 -translate-y-1/2 z-0 transition-all duration-300"
          style={{ width: `${(activeStep / (stepsData.length - 1)) * 80}%` }}
        />

        {stepsData.map((step, idx) => {
          const isActive = idx === activeStep;
          const isCompleted = idx < activeStep;
          const hasMatch = matchesSearch(step.title) || matchesSearch(step.desc) || matchesSearch(step.detail);

          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className="flex flex-col items-center relative z-10 focus:outline-hidden group"
              style={{ width: '13%' }}
              id={`roadmap-step-btn-${idx}`}
            >
              {/* Step circle node */}
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-200 shadow-xs ${
                  isActive 
                    ? 'bg-blue-700 border-blue-700 text-white ring-4 ring-blue-100' 
                    : isCompleted
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'bg-white border-slate-200 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600'
                } ${hasMatch ? 'animate-bounce ring-4 ring-yellow-300' : ''}`}
              >
                {getStepIcon(idx)}
              </div>

              {/* Step index badge */}
              <span className={`text-[10px] font-bold mt-2.5 px-2 py-0.5 rounded-full ${
                isActive ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-500'
              }`}>
                Step {idx + 1}
              </span>

              {/* Title label */}
              <span className={`text-xs font-bold mt-1.5 text-center leading-tight transition-colors ${
                isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'
              }`}>
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Desktop Selected Step Detail Panel (hidden on mobile) */}
      <div className="hidden md:block bg-slate-50 rounded-2xl border border-slate-200 p-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-700 rounded-t-2xl" />
        
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100/50 text-blue-700 rounded-xl">
                {getStepIcon(activeStep)}
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 border border-blue-100/50 rounded-full">
                  STAGE {activeStep + 1} OF {stepsData.length}
                </span>
                <h4 className="font-display text-lg font-bold text-slate-800 mt-1">
                  {stepsData[activeStep].title}
                </h4>
              </div>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              {stepsData[activeStep].detail}
            </p>
          </div>

          <div className="border-l border-slate-200 pl-6 space-y-4 flex flex-col justify-center">
            {/* Metadata tags */}
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-700">Estimated Duration</p>
                  <p className="text-slate-500">{stepsData[activeStep].duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-slate-600">
                <Users className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-700">Key Professional Involved</p>
                  <p className="text-slate-500">{stepsData[activeStep].who}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Stack / Accordion Timeline (hidden on desktop) */}
      <div className="md:hidden space-y-4">
        {stepsData.map((step, idx) => {
          const isOpen = idx === activeStep;
          const hasMatch = matchesSearch(step.title) || matchesSearch(step.desc) || matchesSearch(step.detail);

          return (
            <div 
              key={idx} 
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'border-blue-500 bg-blue-50/10 shadow-xs' 
                  : 'border-slate-200 bg-white hover:border-slate-300'
              } ${hasMatch ? 'ring-2 ring-yellow-300' : ''}`}
            >
              {/* Accordion header button */}
              <button
                onClick={() => setActiveStep(idx)}
                className="w-full p-4 flex items-start gap-3.5 text-left focus:outline-hidden"
                id={`roadmap-step-mobile-${idx}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                  isOpen 
                    ? 'bg-blue-700 border-blue-700 text-white' 
                    : 'bg-slate-50 border-slate-200 text-slate-500'
                }`}>
                  {getStepIcon(idx)}
                </div>

                <div className="grow">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400">
                      STEP {idx + 1}
                    </span>
                    {isOpen && (
                      <span className="text-[9px] font-extrabold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded-full border border-blue-100">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <h4 className="font-display font-bold text-slate-800 text-sm mt-0.5">
                    {step.title}
                  </h4>
                  {!isOpen && (
                    <p className="text-slate-500 text-xs mt-1 line-clamp-1">
                      {step.desc}
                    </p>
                  )}
                </div>

                <div className="text-slate-400 shrink-0 self-center">
                  {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </div>
              </button>

              {/* Accordion content body */}
              {isOpen && (
                <div className="px-4 pb-5 border-t border-slate-100 bg-slate-50/50 pt-4 space-y-4 text-xs text-slate-600 leading-relaxed">
                  <p>{step.detail}</p>
                  
                  {/* Metadata cards */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white p-3 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-500 font-bold mb-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Duration</span>
                      </div>
                      <p className="text-slate-700 font-medium">{step.duration}</p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-500 font-bold mb-1">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>Who</span>
                      </div>
                      <p className="text-slate-700 font-medium leading-tight">{step.who}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
