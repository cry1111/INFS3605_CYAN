import React from 'react';

const TOPICS = [
  "What is FH?",
  "What does the testing process involve?",
  "What does it cost?",
  "How does this affect my insurance?",
  "Why should I get tested?",
  "Other FAQs"
];

interface StarterTopicsProps {
  onSelect: (topic: string) => void;
}

export function StarterTopics({ onSelect }: StarterTopicsProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 text-center mt-12 mb-8">
      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-[20px] flex items-center justify-center mb-6 shadow-sm border border-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10.5 13.5A2.5 2.5 0 0 0 8 16v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a2.5 2.5 0 0 0-2.5-2.5h-3z"></path>
          <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
        </svg>
      </div>
      <h2 className="text-xl font-extrabold text-slate-900 mb-2">Singapore GAC FH Assistant</h2>
      <p className="text-slate-600 text-xs mb-8 max-w-sm leading-relaxed">
        Ask me anything about Familial Hypercholesterolaemia (FH), genomic testing, clinic services, or Singapore insurance policies.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-xl mx-auto">
        {TOPICS.map((topic, i) => (
          <button
            key={i}
            onClick={() => onSelect(topic)}
            className="text-left px-4 py-3 rounded-[16px] border border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/55 text-slate-800 hover:text-blue-900 transition-all shadow-sm flex justify-between items-center group cursor-pointer"
          >
            <span className="font-semibold text-xs">{topic}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-all text-blue-600 -translate-x-1.5 group-hover:translate-x-0">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
