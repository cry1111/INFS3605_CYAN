import React, { useState } from 'react';
import { Translation } from '../types';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RoadmapProps {
  t: Translation;
  searchQuery: string;
}

export default function Roadmap({ t, searchQuery }: RoadmapProps) {
  const [activeStage, setActiveStage] = useState<string>(t.stages[0].id);

  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <span key={i} className="bg-yellow-200 font-medium text-slate-900">{part}</span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col w-full h-full">
      <h2 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">{t.roadmapTitle}</h2>
      
      <div className="overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide">
        <div className="flex items-start justify-between relative min-w-max px-2">
          <div className="absolute top-5 left-10 right-10 h-0.5 bg-slate-100 z-0"></div>
          
          {t.stages.map((stage, index) => {
            const isActive = activeStage === stage.id;
            const isCompleted = t.stages.findIndex(s => s.id === activeStage) > index;
            
            let circleClass = "bg-slate-100 text-slate-400";
            if (isActive) circleClass = "bg-blue-600 text-white";
            else if (isCompleted) circleClass = "bg-green-500 text-white";

            // Clean up the title (e.g. "1. GP Referral" -> "GP Referral")
            const shortTitle = stage.title.replace(/^\d+\.\s*/, '');

            return (
              <div 
                key={stage.id} 
                className="flex flex-col items-center gap-3 relative z-10 w-24 cursor-pointer group"
                onClick={() => setActiveStage(stage.id)}
              >
                <div className={`w-10 h-10 rounded-full ${circleClass} flex items-center justify-center font-bold ring-4 ring-white shadow-sm transition-all group-hover:ring-blue-100 group-hover:scale-110`}>
                  {index + 1}
                </div>
                <p className={`text-[10px] font-bold text-center leading-tight uppercase px-1 ${isActive ? 'text-blue-700' : 'text-slate-500 group-hover:text-slate-700'}`}>
                  {highlightText(shortTitle)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 p-5 bg-slate-50 border border-slate-100 rounded-lg flex-1 min-h-[160px]">
        {t.stages.map((stage) => {
          if (stage.id !== activeStage) return null;
          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col h-full"
            >
              <h3 className="text-sm font-bold text-slate-900 mb-2">{highlightText(stage.title)}</h3>
              <p className="text-xs text-blue-700 font-semibold mb-3">{highlightText(stage.description)}</p>
              <div className="text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3 mt-auto">
                {highlightText(stage.details)}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
