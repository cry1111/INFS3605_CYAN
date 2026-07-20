/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { 
  Heart, 
  HelpCircle, 
  Info, 
  Mail, 
  Phone, 
  MapPin, 
  AlertCircle,
  FileText,
  Accessibility,
  MessageSquarePlus,
  CheckCircle,
  X
} from 'lucide-react';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  
  // State for sub-modals
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'issue' | 'accessibility' | null>(null);
  
  // Issue feedback form state
  const [issueDescription, setIssueDescription] = useState('');
  const [issueSubmitted, setIssueSubmitted] = useState(false);

  const handleIssueSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (issueDescription.trim()) {
      setIssueSubmitted(true);
      setTimeout(() => {
        setIssueSubmitted(false);
        setIssueDescription('');
        setModalType(null);
      }, 2000);
    }
  };

  return (
    <footer id="portal-footer" className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left column: branding & support */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              <Heart className="w-4 h-4 fill-white/10" />
            </div>
            <span className="font-sans font-bold text-white text-sm tracking-tight">
              FH GENETIC EDUCATION
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            {t.footerDisclaimer}
          </p>
          <p className="text-[10px] text-slate-500 font-mono">
            {t.footerLastUpdated} • Singapore Genomic Assessment Resource Group
          </p>
        </div>

        {/* Center column: contacts */}
        <div className="md:col-span-4 space-y-3">
          <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
            Supportive Contacts
          </span>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>Outram Road, Singapore 169608</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>Genomic Hotlines: +65 6223 8899</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>Email: genetics@singhealth.com.sg</span>
            </div>
          </div>
        </div>

        {/* Right column: policies links */}
        <div className="md:col-span-3 space-y-3">
          <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
            Institutional Policies
          </span>
          <div className="flex flex-col gap-2 text-xs">
            <button
              onClick={() => setModalType('privacy')}
              className="text-left hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.viewPrivacy}</span>
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="text-left hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.viewTerms}</span>
            </button>
            <button
              onClick={() => setModalType('accessibility')}
              className="text-left hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Accessibility className="w-3.5 h-3.5" />
              <span>{t.footerAccessibility}</span>
            </button>
            <button
              onClick={() => setModalType('issue')}
              className="text-left hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>{t.footerReportIssue}</span>
            </button>
          </div>
        </div>

      </div>

      {/* MODAL LIGHTBOX OVERLAYS */}
      {modalType && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden flex flex-col max-h-[85vh]">
            
            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-100 px-5 py-4 flex items-center justify-between">
              <h3 className="font-sans font-bold text-slate-900 text-sm uppercase tracking-wider">
                {modalType === 'privacy' && t.viewPrivacy}
                {modalType === 'terms' && t.viewTerms}
                {modalType === 'accessibility' && t.footerAccessibility}
                {modalType === 'issue' && t.footerReportIssue}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Scrollable content body */}
            <div className="p-6 overflow-y-auto text-xs text-slate-600 space-y-4 leading-relaxed">
              {modalType === 'privacy' && (
                <div className="space-y-3">
                  <p className="font-bold text-slate-800">Singapore Genomic Education Portal Privacy Standards</p>
                  <p>All clinical content has been prepared to respect the Personal Data Protection Act (PDPA) of Singapore.</p>
                  <p>We do not collect or transmit medical cookies, diagnosis files, blood test levels, or patient identity fields. Any lookup is processed transiently in browser session limits.</p>
                </div>
              )}

              {modalType === 'terms' && (
                <div className="space-y-3">
                  <p className="font-bold text-slate-800">Terms & Educational Indemnities</p>
                  <p>Information displayed here serves as clinical companion reading material right after genetic referrals and preceding counselling sessions.</p>
                  <p>This portal is strictly informative. Patients must coordinate final drug therapies, cascade letters, or diagnosis queries directly with authorized clinical geneticists.</p>
                </div>
              )}

              {modalType === 'accessibility' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-3 bg-blue-50 text-blue-800 rounded-lg border border-blue-100 font-semibold mb-2">
                    <Accessibility className="w-5 h-5 text-blue-600" />
                    <span>WCAG 2.2 AA Compliant Standards</span>
                  </div>
                  <p>This portal has been customized to satisfy Web Content Accessibility Guidelines (WCAG 2.2 AA):</p>
                  <ul className="list-disc list-inside space-y-1.5 pl-1 font-medium">
                    <li>Supports contrast alterations to improve readability for low-vision patients.</li>
                    <li>Accommodates typography scales (Up to 150%) to suit elderly patients.</li>
                    <li>Allows reducing transitional animation effects for vestibular sensitivity.</li>
                    <li>Supports screen-readers through semantic HTML structure and ARIA labels.</li>
                  </ul>
                </div>
              )}

              {modalType === 'issue' && (
                <div className="space-y-4">
                  {issueSubmitted ? (
                    <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-100 text-center space-y-3 text-emerald-800">
                      <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                      <h4 className="font-bold text-sm">Issue Feedback Received</h4>
                      <p className="text-[11px] text-emerald-900/90">Thank you! Your feedback will help improve health literacy portals. We are processing this locally.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleIssueSubmit} className="space-y-4">
                      <div className="p-3 bg-blue-50 text-blue-800 rounded-lg border border-blue-100 flex items-start gap-2">
                        <AlertCircle className="w-4.5 h-4.5 text-blue-600 shrink-0 mt-0.5" />
                        <p className="text-[11px] leading-relaxed">Found a typo, language error, or visual glitch? Please help us improve. Feedback stays anonymous.</p>
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[10px] font-mono font-bold uppercase text-slate-500">
                          Description of Issue
                        </label>
                        <textarea
                          rows={4}
                          value={issueDescription}
                          onChange={(e) => setIssueDescription(e.target.value)}
                          placeholder="Please describe what you encountered (e.g., 'Tamil spelling error on stage 3' or 'Contrast toggle doesn't update sidebar link'.)"
                          className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-hidden text-xs text-slate-800 bg-slate-50 focus:bg-white"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold text-xs transition-colors cursor-pointer"
                      >
                        Submit Feedback Report
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-slate-50 px-5 py-3.5 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}

    </footer>
  );
}
