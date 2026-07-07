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
      <div className="w-16 h-16 bg-[#e1e8dc] text-[#4a6741] rounded-[24px] flex items-center justify-center mb-6 shadow-sm shadow-[#2c332a]/5">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10.5 13.5A2.5 2.5 0 0 0 8 16v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a2.5 2.5 0 0 0-2.5-2.5h-3z"></path>
          <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"></path>
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-[#2c332a] mb-2">Welcome to GAC FH Support</h2>
      <p className="text-[#7a8072] text-sm mb-8 max-w-md leading-relaxed">
        I can help you understand Familial Hypercholesterolaemia (FH), genetic testing, and what to expect at your pre-test counselling appointment.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl mx-auto">
        {TOPICS.map((topic, i) => (
          <button
            key={i}
            onClick={() => onSelect(topic)}
            className="text-left px-5 py-4 rounded-[24px] border border-[#e1e0d5] bg-white hover:border-[#d1d0c5] hover:bg-[#e1e8dc] text-[#2c332a] hover:text-[#4a6741] transition-all shadow-sm flex justify-between items-center group"
          >
            <span className="font-medium text-sm">{topic}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity text-[#4a6741] -translate-x-2 group-hover:translate-x-0">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
