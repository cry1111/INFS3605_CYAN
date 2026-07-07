import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  onSelectLanguage: (lang: Language) => void;
}

export default function LanguageSelector({ onSelectLanguage }: LanguageSelectorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans text-slate-800">
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 max-w-md w-full text-center space-y-6 flex flex-col items-center">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-sm shadow-blue-200 mb-2">
          FH
        </div>
        <h1 className="text-xl font-bold text-slate-900">
          Please select your preferred language
        </h1>
        <p className="text-xs text-slate-500 font-medium">
          请选择您的首选语言<br/>
          உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்<br/>
          Sila pilih bahasa pilihan anda
        </p>
        
        <div className="grid grid-cols-1 gap-3 mt-8 w-full">
          <button 
            onClick={() => onSelectLanguage('en')}
            className="w-full py-3 px-4 border border-blue-200 bg-blue-50 text-blue-700 rounded-lg font-bold hover:bg-blue-100 transition-colors"
            aria-label="Select English"
          >
            English
          </button>
          <button 
            onClick={() => onSelectLanguage('zh')}
            className="w-full py-3 px-4 border border-slate-200 bg-slate-50 text-slate-700 rounded-lg font-semibold hover:bg-slate-100 hover:border-slate-300 transition-colors"
            aria-label="选择中文 (Select Mandarin)"
          >
            中文 (Mandarin)
          </button>
          <button 
            onClick={() => onSelectLanguage('ta')}
            className="w-full py-3 px-4 border border-slate-200 bg-slate-50 text-slate-700 rounded-lg font-semibold hover:bg-slate-100 hover:border-slate-300 transition-colors"
            aria-label="தமிழ் தேர்ந்தெடுக்கவும் (Select Tamil)"
          >
            தமிழ் (Tamil)
          </button>
          <button 
            onClick={() => onSelectLanguage('ms')}
            className="w-full py-3 px-4 border border-slate-200 bg-slate-50 text-slate-700 rounded-lg font-semibold hover:bg-slate-100 hover:border-slate-300 transition-colors"
            aria-label="Pilih Bahasa Melayu (Select Malay)"
          >
            Bahasa Melayu (Malay)
          </button>
        </div>
      </div>
    </div>
  );
}
