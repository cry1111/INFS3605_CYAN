import React, { useState } from 'react';
import { Shield, EyeOff, ClipboardList, CheckCircle } from 'lucide-react';
import { translations } from '../translations';
import { PrivacyPolicyModal, TermsOfUseModal } from './TermsModals';

interface PrivacyTermsPopupProps {
  lang: 'en' | 'zh' | 'ms' | 'ta';
  onDismiss: () => void;
}

export const PrivacyTermsPopup: React.FC<PrivacyTermsPopupProps> = ({ lang, onDismiss }) => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const t = translations[lang];

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8 relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 to-indigo-600" />
        
        <div className="flex items-start gap-4 mb-5">
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-700 shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              {t.privacyTitle}
            </h2>
            <p className="text-slate-600 text-xs mt-1">
              {t.privacyIntro}
            </p>
          </div>
        </div>

        {/* Highlighted Key Points */}
        <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-sm mb-6">
          <div className="flex gap-3">
            <EyeOff className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-slate-800 text-xs">
                {lang === 'zh' && "100% 离线与隐私保护"}
                {lang === 'ms' && "100% Luar Talian & Peribadi"}
                {lang === 'ta' && "100% ஆஃப்லைன் & தனிப்பட்டது"}
                {lang === 'en' && "100% Offline & Private"}
              </h4>
              <p className="text-slate-600 text-xs mt-1">
                {t.privacyBody}
              </p>
            </div>
          </div>

          <div className="flex gap-3 pt-3 border-t border-slate-200">
            <ClipboardList className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-slate-800 text-xs">
                {lang === 'zh' && "使用条款要点"}
                {lang === 'ms' && "Syarat Penggunaan Ringkas"}
                {lang === 'ta' && "பயன்பாட்டு விதிமுறைகள் சுருக்கம்"}
                {lang === 'en' && "Terms of Use Overview"}
              </h4>
              <p className="text-slate-600 text-xs mt-1">
                {lang === 'zh' && "本平台仅作为辅助科普工具，不进行临床处方或紧急救治，也不存储您的测试结果。"}
                {lang === 'ms' && "Portal ini untuk rujukan sahaja, bukan nasihat kecemasan, dan tidak menyimpan jawapan anda."}
                {lang === 'ta' && "இந்த தளம் ஒரு கல்வி ஆதாரம் மட்டுமே, மருத்துவ அவசர தேவைகளுக்கானது அல்ல."}
                {lang === 'en' && "This portal provides supplementary educational guidance. It is not an active screening device, cannot process medical emergencies, and never logs your answers."}
              </p>
            </div>
          </div>
        </div>

        {/* Standardized Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-500 mb-8 px-1">
          <a
            href="#privacy-policy"
            onClick={(e) => {
              e.preventDefault();
              setIsPrivacyOpen(true);
            }}
            className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 focus:outline-hidden"
          >
            {t.privacyLinkText}
          </a>
          <a
            href="#terms-of-use"
            onClick={(e) => {
              e.preventDefault();
              setIsTermsOpen(true);
            }}
            className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 focus:outline-hidden"
          >
            {t.termsLinkText}
          </a>
        </div>

        {/* Action Button */}
        <button
          onClick={onDismiss}
          className="w-full py-3.5 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-semibold rounded-xl text-sm transition-all duration-150 flex items-center justify-center gap-2 shadow-xs hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
          id="accept-terms-btn"
        >
          <CheckCircle className="w-4 h-4" />
          <span>{t.understandBtn}</span>
        </button>

        {/* Detail Modals */}
        <PrivacyPolicyModal
          isOpen={isPrivacyOpen}
          onClose={() => setIsPrivacyOpen(false)}
          lang={lang}
        />
        <TermsOfUseModal
          isOpen={isTermsOpen}
          onClose={() => setIsTermsOpen(false)}
          lang={lang}
        />
      </div>
    </div>
  );
};
