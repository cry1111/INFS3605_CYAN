import React, { useState } from 'react';
import { Translation } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQProps {
  t: Translation;
  searchQuery: string;
}

export default function FAQ({ t, searchQuery }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    
    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <span key={i} className="bg-yellow-200 font-medium">{part}</span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col w-full h-full">
      <h3 className="text-sm font-bold text-blue-700 mb-4 uppercase tracking-wider">{t.faqTitle}</h3>
      
      <div className="flex flex-col gap-3">
        {t.faqsList.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div key={index} className="flex flex-col">
              <button
                className="w-full p-3 bg-slate-50 rounded-lg border border-slate-100 cursor-pointer text-left focus:outline-none hover:bg-slate-100 transition-colors flex justify-between items-center"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-xs font-semibold text-slate-800">
                  {highlightText(faq.question)}
                </span>
                <span className="text-blue-600 ml-4 flex-shrink-0">
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pt-2 pb-3 text-xs text-slate-600 leading-relaxed border-l-2 border-blue-200 ml-2 mt-1">
                      {highlightText(faq.answer)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
