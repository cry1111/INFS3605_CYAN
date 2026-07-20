/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import Highlight from './Highlight';
import { 
  Heart, 
  Dna, 
  Sparkles, 
  Eye, 
  Activity, 
  HelpCircle, 
  ArrowRight,
  TrendingDown,
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertTriangle,
  FileSpreadsheet,
  Syringe,
  Timer,
  Lightbulb,
  ShieldCheck,
  BriefcaseMedical,
  MessageCircleQuestion,
  HelpCircle as QuestionIcon
} from 'lucide-react';

interface EducationalContentProps {
  language: Language;
  searchQuery: string;
}

export default function EducationalContent({ language, searchQuery }: EducationalContentProps) {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const [activeTab, setActiveTab] = useState<'fh' | 'lifestyle'>('fh');

  return (
    <div className="space-y-16">
      
      {/* SECTION: WHAT IS FH? */}
      <section id="what-is-fh" className="scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
            Medical Explainer
          </span>
          <h2 className="text-3xl font-sans font-extrabold text-slate-900 tracking-tight mt-3">
            <Highlight text={t.whatIsFHTitle} query={searchQuery} />
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            <Highlight text={t.whatIsFHIntro} query={searchQuery} />
          </p>
        </div>

        {/* COMPARISON TABS (FH vs Lifestyle) */}
        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/60 max-w-4xl mx-auto">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('fh')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'fh' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <Highlight text={t.diffFHHeader} query={searchQuery} />
            </button>
            <button
              onClick={() => setActiveTab('lifestyle')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'lifestyle' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <Highlight text={t.diffLifestyleHeader} query={searchQuery} />
            </button>
          </div>

          <div className="p-4 md:p-6 bg-white rounded-xl border border-slate-100 mt-3 shadow-xs">
            {activeTab === 'fh' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="space-y-4">
                  <h3 className="font-sans font-extrabold text-slate-900 text-lg flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <Highlight text={t.diffFHHeader} query={searchQuery} />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    FH is caused by a genetic spelling change present at birth. The liver cannot clear cholesterol naturally, so LDL cholesterol level is consistently above 5.5 mmol/L. It runs in biological families.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <Highlight text={t.diffFHPoint1} query={searchQuery} />
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <Highlight text={t.diffFHPoint2} query={searchQuery} />
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <Highlight text={t.diffFHPoint3} query={searchQuery} />
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                      <Highlight text={t.diffFHPoint4} query={searchQuery} />
                    </li>
                  </ul>
                </div>

                {/* Conceptual DNA visual placeholder */}
                <div className="bg-slate-50 border border-slate-150 p-6 rounded-xl flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 animate-pulse">
                    <Dna className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    GENETIC BLUEPRINT (DNA)
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                    Your DNA acts as a set of cellular recipes. A variation in the <strong>LDLR</strong> gene alters how your cell receptors process bad cholesterol.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="space-y-4">
                  <h3 className="font-sans font-extrabold text-slate-900 text-lg flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                    <Highlight text={t.diffLifestyleHeader} query={searchQuery} />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Most high cholesterol develops in adulthood and is linked to environmental habits. It responds exceptionally well to diet, regular physical exercise, and smoking cessation.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-slate-400 shrink-0" />
                      <Highlight text={t.diffLifestylePoint1} query={searchQuery} />
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-slate-400 shrink-0" />
                      <Highlight text={t.diffLifestylePoint2} query={searchQuery} />
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-slate-400 shrink-0" />
                      <Highlight text={t.diffLifestylePoint3} query={searchQuery} />
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-slate-400 shrink-0" />
                      <Highlight text={t.diffLifestylePoint4} query={searchQuery} />
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-150 p-6 rounded-xl flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                    <Activity className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    LIFESTYLE ELEMENTS
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                    Factors like diet, saturated fats, physical activity, and stress alter liver lipid production over time.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* PHYSICAL SIGNS CARDS */}
        <div className="mt-12 bg-white rounded-3xl p-6 md:p-8 border border-slate-150">
          <h3 className="text-xl font-sans font-bold text-slate-900 text-center mb-2">
            <Highlight text={t.symptomsTitle} query={searchQuery} />
          </h3>
          <p className="text-slate-500 text-xs text-center mb-8 max-w-2xl mx-auto">
            <Highlight text={t.symptomsIntro} query={searchQuery} />
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-slate-100 bg-slate-50/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-slate-900 text-sm">
                <Highlight text={t.symptom1} query={searchQuery} />
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                <Highlight text={t.symptom1Desc} query={searchQuery} />
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-100 bg-slate-50/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-slate-900 text-sm">
                <Highlight text={t.symptom2} query={searchQuery} />
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                <Highlight text={t.symptom2Desc} query={searchQuery} />
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-100 bg-slate-50/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-slate-900 text-sm">
                <Highlight text={t.symptom3} query={searchQuery} />
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                <Highlight text={t.symptom3Desc} query={searchQuery} />
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 text-center text-xs font-semibold">
            <Highlight text={t.symptomReassurance} query={searchQuery} />
          </div>
        </div>
      </section>

      {/* SECTION: WHY WAS I REFERRED? */}
      <section id="why-referred" className="scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
            Your Medical Referral
          </span>
          <h2 className="text-3xl font-sans font-extrabold text-slate-900 tracking-tight mt-3">
            <Highlight text={t.whyReferredTitle} query={searchQuery} />
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            <Highlight text={t.whyReferredIntro} query={searchQuery} />
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-xs hover:shadow-md transition-all space-y-3">
            <span className="text-xs font-mono font-bold text-blue-600">Primary Rule</span>
            <h3 className="font-sans font-bold text-slate-900 text-sm">
              <Highlight text={t.refReason1} query={searchQuery} />
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <Highlight text={t.refReason1Desc} query={searchQuery} />
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-xs hover:shadow-md transition-all space-y-3">
            <span className="text-xs font-mono font-bold text-blue-600">First-Degree</span>
            <h3 className="font-sans font-bold text-slate-900 text-sm">
              <Highlight text={t.refReason2} query={searchQuery} />
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <Highlight text={t.refReason2Desc} query={searchQuery} />
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-xs hover:shadow-md transition-all space-y-3">
            <span className="text-xs font-mono font-bold text-blue-600">Cardiology Event</span>
            <h3 className="font-sans font-bold text-slate-900 text-sm">
              <Highlight text={t.refReason3} query={searchQuery} />
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <Highlight text={t.refReason3Desc} query={searchQuery} />
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-150 shadow-xs hover:shadow-md transition-all space-y-3">
            <span className="text-xs font-mono font-bold text-blue-600">Treatment Resistance</span>
            <h3 className="font-sans font-bold text-slate-900 text-sm">
              <Highlight text={t.refReason4} query={searchQuery} />
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <Highlight text={t.refReason4Desc} query={searchQuery} />
            </p>
          </div>
        </div>

        {/* WHY GENETIC TESTING SECTION */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200/60">
          <div className="space-y-4">
            <h3 className="text-xl font-sans font-bold text-slate-900 flex items-center gap-2">
              <Dna className="w-5 h-5 text-blue-600 animate-pulse" />
              <Highlight text={t.whyTestTitle} query={searchQuery} />
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              <Highlight text={t.whyTestIntro} query={searchQuery} />
            </p>

            <div className="p-4 rounded-xl bg-white border border-slate-150 space-y-3">
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <Highlight text={t.testBenefitTitle} query={searchQuery} />
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 pl-1">
                <li><strong>1. <Highlight text={t.testBenefit1} query={searchQuery} />:</strong> <Highlight text={t.testBenefit1Desc} query={searchQuery} /></li>
                <li><strong>2. <Highlight text={t.testBenefit2} query={searchQuery} />:</strong> <Highlight text={t.testBenefit2Desc} query={searchQuery} /></li>
                <li><strong>3. <Highlight text={t.testBenefit3} query={searchQuery} />:</strong> <Highlight text={t.testBenefit3Desc} query={searchQuery} /></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 lg:border-l lg:border-slate-200 lg:pl-8 flex flex-col justify-between">
            <div className="p-4 rounded-xl bg-white border border-slate-150 space-y-3">
              <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <Highlight text={t.testLimitTitle} query={searchQuery} />
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 pl-1">
                <li><strong>1. <Highlight text={t.testLimit1} query={searchQuery} />:</strong> <Highlight text={t.testLimit1Desc} query={searchQuery} /></li>
                <li><strong>2. <Highlight text={t.testLimit2} query={searchQuery} />:</strong> <Highlight text={t.testLimit2Desc} query={searchQuery} /></li>
              </ul>
            </div>

            <div className="p-3.5 bg-blue-50 text-blue-900 border border-blue-100 rounded-xl text-xs font-semibold">
              Tip: The genetic counsellor will explore these pros and cons with you to ensure you feel 100% comfortable before signing consent.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PRE-TEST COUNSELLING */}
      <section id="pre-test-counselling" className="scroll-mt-20">
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-150 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
              Counselling Overview
            </span>
            <h2 className="text-3xl font-sans font-extrabold text-slate-900 tracking-tight mt-3">
              <Highlight text={t.counsellingTitle} query={searchQuery} />
            </h2>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
              <Highlight text={t.counsellingIntro} query={searchQuery} />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100/50 space-y-3">
                <h3 className="font-sans font-bold text-slate-900 text-base flex items-center gap-2">
                  <BriefcaseMedical className="w-5 h-5 text-blue-600" />
                  <Highlight text={t.counsellingRole} query={searchQuery} />
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <Highlight text={t.counsellingRoleDesc} query={searchQuery} />
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 space-y-3">
                <h3 className="font-sans font-bold text-slate-900 text-sm">
                  <Highlight text={t.counsellingWhatHappens} query={searchQuery} />
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold shrink-0">•</span>
                    <span><Highlight text={t.counsellingWhat1} query={searchQuery} /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold shrink-0">•</span>
                    <span><Highlight text={t.counsellingWhat2} query={searchQuery} /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold shrink-0">•</span>
                    <span><Highlight text={t.counsellingWhat3} query={searchQuery} /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold shrink-0">•</span>
                    <span><Highlight text={t.counsellingWhat4} query={searchQuery} /></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Questions patient can ask */}
            <div className="bg-slate-900 text-slate-200 p-6 md:p-8 rounded-2xl space-y-4 shadow-md">
              <h3 className="font-sans font-extrabold text-white text-base flex items-center gap-2">
                <MessageCircleQuestion className="w-5 h-5 text-teal-400" />
                <Highlight text={t.questionsToAsk} query={searchQuery} />
              </h3>
              
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="p-3 bg-slate-800 rounded-lg border border-slate-700/60 hover:bg-slate-700 hover:text-white transition-colors">
                  <strong>Q1:</strong> <Highlight text={t.q1} query={searchQuery} />
                </li>
                <li className="p-3 bg-slate-800 rounded-lg border border-slate-700/60 hover:bg-slate-700 hover:text-white transition-colors">
                  <strong>Q2:</strong> <Highlight text={t.q2} query={searchQuery} />
                </li>
                <li className="p-3 bg-slate-800 rounded-lg border border-slate-700/60 hover:bg-slate-700 hover:text-white transition-colors">
                  <strong>Q3:</strong> <Highlight text={t.q3} query={searchQuery} />
                </li>
                <li className="p-3 bg-slate-800 rounded-lg border border-slate-700/60 hover:bg-slate-700 hover:text-white transition-colors">
                  <strong>Q4:</strong> <Highlight text={t.q4} query={searchQuery} />
                </li>
              </ul>
              
              <p className="text-[10px] text-slate-400 leading-normal text-center pt-2">
                Tip: You can print this page or write these down in your phone to ask during your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE GENETIC TEST */}
      <section id="genetic-test" className="scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
            Clinical Procedure
          </span>
          <h2 className="text-3xl font-sans font-extrabold text-slate-900 tracking-tight mt-3">
            <Highlight text={t.theTestTitle} query={searchQuery} />
          </h2>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            <Highlight text={t.theTestSubtitle} query={searchQuery} />
          </p>
        </div>

        {/* Illustrated Step-by-Step flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-5 rounded-2xl border border-slate-150 text-center space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mx-auto">
              01
            </div>
            <h3 className="font-sans font-bold text-slate-900 text-sm">
              <Highlight text={t.testStep1} query={searchQuery} />
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <Highlight text={t.testStep1Desc} query={searchQuery} />
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-150 text-center space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mx-auto">
              02
            </div>
            <h3 className="font-sans font-bold text-slate-900 text-sm">
              <Highlight text={t.testStep2} query={searchQuery} />
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <Highlight text={t.testStep2Desc} query={searchQuery} />
            </p>
            <div className="inline-flex items-center gap-1 text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-sm font-mono font-bold">
              <Syringe className="w-3 h-3" /> NO FASTING REQUIRED
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-150 text-center space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mx-auto">
              03
            </div>
            <h3 className="font-sans font-bold text-slate-900 text-sm">
              <Highlight text={t.testStep3} query={searchQuery} />
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <Highlight text={t.testStep3Desc} query={searchQuery} />
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-150 text-center space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mx-auto">
              04
            </div>
            <h3 className="font-sans font-bold text-slate-900 text-sm">
              <Highlight text={t.testStep4} query={searchQuery} />
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              <Highlight text={t.testStep4Desc} query={searchQuery} />
            </p>
            <div className="inline-flex items-center gap-1 text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-sm font-mono font-bold">
              <Timer className="w-3 h-3" /> 4 TO 8 WEEKS
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: UNDERSTANDING RESULTS */}
      <section id="understanding-results" className="scroll-mt-20">
        <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 md:p-10 border border-slate-850 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-teal-400 bg-slate-800 px-3 py-1.5 rounded-full uppercase tracking-wider">
              Diagnostic Outcomes
            </span>
            <h2 className="text-3xl font-sans font-extrabold text-white tracking-tight mt-3">
              <Highlight text={t.resultsTitle} query={searchQuery} />
            </h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              <Highlight text={t.resultsIntro} query={searchQuery} />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Positive */}
            <div className="bg-slate-800/80 rounded-2xl border border-emerald-500/30 p-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-emerald-950 text-emerald-400 text-[10px] font-mono font-extrabold uppercase tracking-wider">
                Positive (Detected)
              </div>
              <h3 className="font-sans font-bold text-white text-base leading-tight">
                <Highlight text={t.resPositive} query={searchQuery} />
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <Highlight text={t.resPositiveMeaning} query={searchQuery} />
              </p>
              <div className="space-y-2 border-t border-slate-700 pt-3">
                <span className="block text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{t.resPositiveNext}</span>
                <ul className="text-xs text-slate-300 pl-2 list-disc space-y-1">
                  <li><Highlight text={t.resPositiveNext1} query={searchQuery} /></li>
                  <li><Highlight text={t.resPositiveNext2} query={searchQuery} /></li>
                </ul>
              </div>
            </div>

            {/* Negative */}
            <div className="bg-slate-800/80 rounded-2xl border border-blue-500/30 p-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-blue-950 text-blue-400 text-[10px] font-mono font-extrabold uppercase tracking-wider">
                Negative (No Variant)
              </div>
              <h3 className="font-sans font-bold text-white text-base leading-tight">
                <Highlight text={t.resNegative} query={searchQuery} />
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <Highlight text={t.resNegativeMeaning} query={searchQuery} />
              </p>
              <div className="space-y-2 border-t border-slate-700 pt-3">
                <span className="block text-[10px] font-bold text-blue-400 uppercase tracking-widest">{t.resPositiveNext}</span>
                <ul className="text-xs text-slate-300 pl-2 list-disc space-y-1">
                  <li><Highlight text={t.resNegativeNext1} query={searchQuery} /></li>
                  <li><Highlight text={t.resNegativeNext2} query={searchQuery} /></li>
                </ul>
              </div>
            </div>

            {/* VUS */}
            <div className="bg-slate-800/80 rounded-2xl border border-amber-500/30 p-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-amber-950 text-amber-400 text-[10px] font-mono font-extrabold uppercase tracking-wider">
                Uncertain (VUS)
              </div>
              <h3 className="font-sans font-bold text-white text-base leading-tight">
                <Highlight text={t.resVus} query={searchQuery} />
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <Highlight text={t.resVusMeaning} query={searchQuery} />
              </p>
              <div className="space-y-2 border-t border-slate-700 pt-3">
                <span className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest">{t.resPositiveNext}</span>
                <ul className="text-xs text-slate-300 pl-2 list-disc space-y-1">
                  <li><Highlight text={t.resVusNext1} query={searchQuery} /></li>
                  <li><Highlight text={t.resVusNext2} query={searchQuery} /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: INSURANCE MORATORIUM */}
      <section id="insurance-moratorium" className="scroll-mt-20">
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-150 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
              Singapore Policy
            </span>
            <h2 className="text-3xl font-sans font-extrabold text-slate-900 tracking-tight mt-3">
              <Highlight text={t.insuranceTitle} query={searchQuery} />
            </h2>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
              <Highlight text={t.insuranceIntro} query={searchQuery} />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="font-sans font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <Highlight text={t.insPoint1} query={searchQuery} />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <Highlight text={t.insPoint1Desc} query={searchQuery} />
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="font-sans font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <Highlight text={t.insPoint2} query={searchQuery} />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <Highlight text={t.insPoint2Desc} query={searchQuery} />
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="font-sans font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <Highlight text={t.insPoint3} query={searchQuery} />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <Highlight text={t.insPoint3Desc} query={searchQuery} />
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="font-sans font-bold text-slate-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <Highlight text={t.insPoint4} query={searchQuery} />
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <Highlight text={t.insPoint4Desc} query={searchQuery} />
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 text-center text-xs font-semibold">
            <Highlight text={t.insDisclaimer} query={searchQuery} />
          </div>
        </div>
      </section>

    </div>
  );
}

