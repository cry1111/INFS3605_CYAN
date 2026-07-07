import React from 'react';
import { Translation, ContentSection } from '../types';

interface EducationalContentProps {
  t: Translation;
  searchQuery: string;
}

export default function EducationalContent({ t, searchQuery }: EducationalContentProps) {
  
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

  const renderItem = (item: ContentSection, idx: number, isHighlighted: boolean) => {
    if (isHighlighted) {
      return (
        <div key={idx} className="bg-blue-600 text-white border border-blue-700 rounded-xl p-5 shadow-sm flex flex-col h-full w-full">
          <h3 className="text-sm font-bold mb-4">{highlightText(item.title)}</h3>
          <p className="text-xs leading-relaxed opacity-90 mb-4">{highlightText(item.content)}</p>
          <div className="mt-auto p-4 bg-white/10 rounded-lg">
             <span className="text-xs font-bold">Learn more</span>
          </div>
        </div>
      );
    }
    return (
      <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col h-full w-full">
        <h3 className="text-sm font-bold text-blue-700 mb-4">{highlightText(item.title)}</h3>
        <p className="text-xs leading-relaxed text-slate-600">{highlightText(item.content)}</p>
      </div>
    );
  };

  return (
    <>
      <section id="about-fh" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="sm:col-span-2 lg:col-span-3">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">{t.aboutFhTitle}</h2>
        </div>
        {t.aboutFhContent.map((item, idx) => renderItem(item, idx, idx === 1))}
      </section>
      <section id="genetic-testing" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="sm:col-span-2 lg:col-span-3">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 mt-4">{t.testingTitle}</h2>
        </div>
        {t.testingContent.map((item, idx) => renderItem(item, idx, idx === 0))}
      </section>
      <section id="pre-test-counselling" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 mt-4">{t.counsellingTitle}</h2>
        </div>
        {t.counsellingContent.map((item, idx) => renderItem(item, idx, idx === 1))}
      </section>
      <section id="educational-resources" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 mt-4">{t.resourcesTitle}</h2>
        </div>
        {t.resourcesContent.map((item, idx) => renderItem(item, idx, idx === 0))}
      </section>
    </>
  );
}
