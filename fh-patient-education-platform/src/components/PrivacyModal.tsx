/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { ShieldCheck, Info, FileText, Scale, X } from 'lucide-react';

interface PrivacyModalProps {
  language: Language;
  isOpen: boolean;
  onAccept: () => void;
}

export default function PrivacyModal({ language, isOpen, onAccept }: PrivacyModalProps) {
  const [subView, setSubView] = useState<'summary' | 'privacy' | 'terms'>('summary');
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="privacy-modal-overlay" className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-slate-100"
        >
          {/* Header */}
          <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {subView === 'summary' && (
                <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              )}
              {subView === 'privacy' && (
                <div className="p-2 rounded-lg bg-teal-100 text-teal-700">
                  <FileText className="w-5 h-5" />
                </div>
              )}
              {subView === 'terms' && (
                <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
                  <Scale className="w-5 h-5" />
                </div>
              )}
              <h2 className="text-lg md:text-xl font-sans font-bold text-slate-900">
                {subView === 'summary' && t.privacyTitle}
                {subView === 'privacy' && t.privacyFullTitle}
                {subView === 'terms' && t.termsFullTitle}
              </h2>
            </div>
            {subView !== 'summary' && (
              <button
                onClick={() => setSubView('summary')}
                className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
                aria-label="Back to summary"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 overflow-y-auto flex-1 text-slate-600 leading-relaxed text-sm space-y-4">
            {subView === 'summary' && (
              <div className="space-y-4">
                <p className="text-slate-700 font-medium">
                  {t.privacyText}
                </p>

                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 space-y-2">
                  <div className="flex items-start gap-2 font-semibold">
                    <Info className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>How we handle your data:</span>
                  </div>
                  <ul className="list-disc list-inside pl-2 space-y-1 text-xs text-blue-900/90 leading-relaxed">
                    <li>This portal runs <strong>entirely in your browser</strong>.</li>
                    <li>No patient names, clinical identifiers, or IP addresses are logged.</li>
                    <li>Search queries are processed locally and never sent to a cloud server.</li>
                    <li>Language selections are kept in local storage for a seamless experience.</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => setSubView('privacy')}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors text-xs font-semibold cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-slate-500" />
                    {t.viewPrivacy}
                  </button>
                  <button
                    onClick={() => setSubView('terms')}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors text-xs font-semibold cursor-pointer"
                  >
                    <Scale className="w-4 h-4 text-slate-500" />
                    {t.viewTerms}
                  </button>
                </div>
              </div>
            )}

            {subView === 'privacy' && (
              <div className="space-y-3 prose max-w-none text-slate-600">
                <h3 className="text-slate-800 font-bold text-base">1. Data Minimization & Privacy</h3>
                <p>
                  This portal is designed to provide high-quality, anonymous health education. We do not require any user registration, sign-in credentials, or personal identification. Any information entered inside interactive modules remains transiently within local browser memory.
                </p>
                <h3 className="text-slate-800 font-bold text-base">2. Local Storage Usage</h3>
                <p>
                  We store only non-identifying application preferences (your preferred language choice and accessibility settings, such as contrast mode and text scale) inside your local web browser cookies/localStorage. This prevents you from needing to re-configure the page upon refreshing.
                </p>
                <h3 className="text-slate-800 font-bold text-base">3. External Connections</h3>
                <p>
                  This portal does not transmit tracking scripts or host-marketing analytics cookies. External hyperlinks are provided to help connect you with verified local healthcare systems (such as HealthHub and Singapore Heart Foundation). When clicking external links, please refer to their respective privacy disclosures.
                </p>
              </div>
            )}

            {subView === 'terms' && (
              <div className="space-y-3 prose max-w-none text-slate-600">
                <h3 className="text-slate-800 font-bold text-base">1. Educational Scope & Disclaimer</h3>
                <p>
                  All content, illustrations, interactive trees, and roadmaps displayed on this website are compiled solely for patient education. They are tailored to explain Familial Hypercholesterolaemia (FH) and genomic testing concepts in general terms to foster understanding and prepare for pre-test consultations.
                </p>
                <p className="font-semibold text-slate-800">
                  This educational content does not constitute professional medical advice, clinical diagnostics, or personalized medical treatment.
                </p>
                <h3 className="text-slate-800 font-bold text-base">2. Consult Your Clinical Team</h3>
                <p>
                  Do not make any alterations to your medication, physical lifestyle, or screening procedures based purely on this website's general content. Any clinical decisions, pedigree interpretations, or symptom evaluations must be conducted in collaboration with your primary cardiologist, GP, or genetic counsellor.
                </p>
                <h3 className="text-slate-800 font-bold text-base">3. Permitted Usage</h3>
                <p>
                  Patients, families, medical practitioners, and students are welcome to use, print, and navigate this material freely for personal, clinical preparation, or academic purposes. Commercially redistributing this content is strictly prohibited.
                </p>
              </div>
            )}
          </div>

          {/* Footer controls */}
          <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex justify-end gap-3 shrink-0">
            {subView !== 'summary' ? (
              <button
                onClick={() => setSubView('summary')}
                className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors text-sm font-semibold cursor-pointer"
              >
                Back to Summary
              </button>
            ) : (
              <button
                onClick={onAccept}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold text-sm shadow-sm transition-colors cursor-pointer"
              >
                {t.agreeContinue}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
