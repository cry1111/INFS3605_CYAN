import React from 'react';
import { Heart, Globe } from 'lucide-react';

interface LanguageSelectorProps {
  onSelect: (lang: 'en' | 'zh' | 'ms' | 'ta') => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelect }) => {
  const options = [
    { code: 'en' as const, label: 'English', native: 'English', desc: 'Patient Guide' },
    { code: 'zh' as const, label: '中文 (Mandarin)', native: '简体中文', desc: '患者教育指南' },
    { code: 'ms' as const, label: 'Bahasa Melayu', native: 'Bahasa Melayu', desc: 'Panduan Pesakit' },
    { code: 'ta' as const, label: 'தமிழ் (Tamil)', native: 'தமிழ்', desc: 'நோயாளி வழிகாட்டி' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 md:p-8">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600" />
      
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg border border-slate-200 p-6 md:p-12 text-center relative overflow-hidden">
        {/* Soft decorative background circles */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-indigo-50/50 rounded-full blur-2xl pointer-events-none" />

        <div className="relative">
          {/* Singapore/Clinical Branding Emblem */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-6 border border-blue-100">
            <Heart className="w-8 h-8 text-blue-700 fill-blue-100/40 animate-pulse" />
          </div>

          <h1 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Singapore National FH Portal
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed">
            Patient Information and Genetic Testing Support Guide for Familial Hypercholesterolaemia
          </p>

          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100/50 px-3.5 py-1.5 rounded-full w-fit mx-auto mb-10">
            <Globe className="w-3.5 h-3.5" />
            <span>SELECT YOUR LANGUAGE • 选择语言 • PILIH BAHASA • மொழி தேர்வு</span>
          </div>

          {/* Grid of 4 Language Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {options.map((opt) => (
              <button
                key={opt.code}
                onClick={() => onSelect(opt.code)}
                className="group flex flex-col items-center justify-center p-5 bg-slate-50 hover:bg-blue-50/40 border border-slate-200 hover:border-blue-400 rounded-2xl transition-all duration-200 shadow-xs hover:shadow-md text-center focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                id={`lang-btn-${opt.code}`}
              >
                <span className="font-display text-lg font-bold text-slate-800 group-hover:text-blue-900 transition-colors">
                  {opt.label}
                </span>
                <span className="text-xs text-blue-700 group-hover:text-blue-800 font-medium mt-1">
                  {opt.native}
                </span>
                <span className="text-2xs text-slate-500 mt-2 uppercase tracking-wider group-hover:text-slate-600">
                  {opt.desc}
                </span>
              </button>
            ))}
          </div>

          {/* Minimal Safe Healthcare Disclaimer Footer */}
          <div className="mt-12 pt-6 border-t border-slate-100 text-3xs text-slate-400 max-w-md mx-auto leading-normal">
            Coordinated supplementary educational health portal. Always seek clinical advice from your GP. 
            All patient interactions remain strictly confidential and offline-first on this device.
          </div>
        </div>
      </div>
    </div>
  );
};
