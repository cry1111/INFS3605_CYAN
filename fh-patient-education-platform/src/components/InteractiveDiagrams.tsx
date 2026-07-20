/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { 
  Users, 
  Layers, 
  TrendingDown, 
  HelpCircle, 
  ChevronRight, 
  CheckCircle,
  Dna,
  Heart,
  Plus,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface InteractiveDiagramsProps {
  language: Language;
}

export default function InteractiveDiagrams({ language }: InteractiveDiagramsProps) {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  
  // States
  const [ldlMode, setLdlMode] = useState<'healthy' | 'fh'>('healthy');
  const [selectedFamilyMember, setSelectedFamilyMember] = useState<'father' | 'mother' | 'child1' | 'child2' | null>('father');

  return (
    <section id="interactive-diagrams" className="space-y-16 py-8">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
          Visual Learning Labs
        </span>
        <h2 className="text-3xl font-sans font-extrabold text-slate-900 tracking-tight mt-3">
          {t.diagramsSectionTitle}
        </h2>
        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
          {t.diagramsSectionSub}
        </p>
      </div>

      {/* 1. LDL CLEARANCE DIAGRAM */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-150 shadow-xs">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="text-xl font-sans font-bold text-slate-900 flex items-center justify-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            {t.ldlClearanceTitle}
          </h3>
          <p className="text-slate-500 text-xs mt-1">
            {t.ldlClearanceDesc}
          </p>
        </div>

        {/* Interactive Clearance Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">SELECT VIEWING MODE:</span>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setLdlMode('healthy')}
                  className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer ${ldlMode === 'healthy' ? 'bg-emerald-50 border-emerald-300 text-emerald-950 ring-2 ring-emerald-50' : 'border-slate-100 hover:bg-slate-50 text-slate-600'}`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3.5 h-3.5 rounded-full ${ldlMode === 'healthy' ? 'bg-emerald-600' : 'bg-slate-300'}`} />
                    <span className="text-xs font-bold">{t.ldlHealthyLabel}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1.5">
                    Clearance rate: 100% (Arteries remain clean and open)
                  </p>
                </button>

                <button
                  onClick={() => setLdlMode('fh')}
                  className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer ${ldlMode === 'fh' ? 'bg-rose-50 border-rose-300 text-rose-950 ring-2 ring-rose-50' : 'border-slate-100 hover:bg-slate-50 text-slate-600'}`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3.5 h-3.5 rounded-full ${ldlMode === 'fh' ? 'bg-rose-600' : 'bg-slate-300'}`} />
                    <span className="text-xs font-bold">{t.ldlFhLabel}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1.5">
                    Clearance rate: 20-50% (Arteries prone to fatty plaques)
                  </p>
                </button>
              </div>
            </div>

            {/* Action text */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 text-xs text-slate-600 leading-relaxed">
              {ldlMode === 'healthy' ? t.ldlHealthyAction : t.ldlFhAction}
            </div>
          </div>

          {/* Animation Simulator Column */}
          <div className="lg:col-span-8 bg-slate-900 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between text-slate-100 relative overflow-hidden shadow-inner">
            
            {/* Legend indicators */}
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase text-slate-400 relative z-10 bg-slate-950/40 p-2.5 rounded-md self-start">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>LDL Particles (Cholesterol)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-2 border border-blue-400 bg-blue-950 rounded-sm" />
                <span>LDL Receptors (Hepatocytes)</span>
              </div>
            </div>

            {/* Simulated Vessel Area */}
            <div className="my-6 relative flex-1 min-h-[160px] flex items-center justify-between">
              
              {/* Bloodstream flow area */}
              <div className="w-2/3 border-r-2 border-dashed border-slate-700/60 pr-4 relative min-h-full flex flex-col justify-center">
                <span className="absolute -rotate-90 left-0 text-[8px] tracking-widest font-mono text-slate-500 uppercase">BLOODSTREAM</span>
                
                {/* Floating particles */}
                <div className="flex flex-wrap gap-3 pl-6 justify-center items-center py-2 max-w-sm mx-auto">
                  {ldlMode === 'healthy' ? (
                    // Fewer floating particles (healthy clearance)
                    Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ x: [0, 10, -5, 0], y: [0, -8, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 + i, ease: 'easeInOut' }}
                        className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-white flex items-center justify-center text-[7px] text-black font-extrabold shadow-sm"
                      >
                        L
                      </motion.div>
                    ))
                  ) : (
                    // Huge cluster of particles (FH buildup)
                    Array.from({ length: 24 }).map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ x: [0, 5, -8, 0], y: [0, 8, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 3 + (i % 5), ease: 'easeInOut' }}
                        className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-white flex items-center justify-center text-[7px] text-black font-extrabold shadow-sm"
                      >
                        L
                      </motion.div>
                    ))
                  )}
                </div>
              </div>

              {/* Liver Cell wall with Receptors */}
              <div className="w-1/3 pl-4 flex flex-col justify-center items-center h-full relative">
                <span className="absolute right-0 text-[8px] tracking-widest font-mono text-slate-500 uppercase">LIVER CELLS</span>
                
                {/* Receptors row */}
                <div className="flex flex-col gap-4">
                  {ldlMode === 'healthy' ? (
                    // Full set of active receptors
                    Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <div className="w-6 h-3 bg-blue-900 border border-blue-400 rounded-md relative flex items-center justify-center">
                          <span className="block w-2 h-1 bg-teal-400 rounded-full" />
                        </div>
                        <span className="text-[8px] font-mono text-slate-400">ACTIVE</span>
                      </div>
                    ))
                  ) : (
                    // Only 1 working receptor, others blank/missing
                    <div className="space-y-4">
                      <div className="flex items-center gap-1.5 opacity-100">
                        <div className="w-6 h-3 bg-blue-900 border border-blue-400 rounded-md relative flex items-center justify-center">
                          <span className="block w-2 h-1 bg-teal-400 rounded-full" />
                        </div>
                        <span className="text-[8px] font-mono text-teal-400 font-bold">1 ACTIVE</span>
                      </div>
                      <div className="flex items-center gap-1.5 opacity-30">
                        <div className="w-6 h-3 bg-slate-800 border border-slate-600 rounded-md flex items-center justify-center" />
                        <span className="text-[8px] font-mono text-rose-500 font-bold uppercase">MISSING</span>
                      </div>
                      <div className="flex items-center gap-1.5 opacity-30">
                        <div className="w-6 h-3 bg-slate-800 border border-slate-600 rounded-md flex items-center justify-center" />
                        <span className="text-[8px] font-mono text-rose-500 font-bold uppercase">MISSING</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Interactive hint */}
            <div className="text-[10px] text-center font-mono text-slate-400 mt-2 bg-slate-950/40 p-2 rounded-md">
              {ldlMode === 'healthy' 
                ? 'Observation: Active receptors absorb LDL quickly, leaving blood vessels clean.' 
                : 'Observation: Lack of receptors prevents clearance. LDL accumulates in arterial pathways.'
              }
            </div>

          </div>
        </div>
      </div>

      {/* 2. FAMILY INHERITANCE TREE */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-150 shadow-xs">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="text-xl font-sans font-bold text-slate-900 flex items-center justify-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            {t.familyTreeTitle}
          </h3>
          <p className="text-slate-500 text-xs mt-1">
            {t.familyTreeDesc}
          </p>
        </div>

        {/* Tree visualizer sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive tree diagram box */}
          <div className="lg:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200/60 flex flex-col justify-between min-h-[340px]">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest text-center block mb-4">
              {t.familyTreeInstruct}
            </span>

            {/* Interactive Grid nodes */}
            <div className="space-y-8 flex flex-col justify-center items-center">
              
              {/* Row 1: Parents */}
              <div className="flex justify-center items-center gap-12 relative w-full max-w-sm">
                
                {/* Father Node */}
                <button
                  onClick={() => setSelectedFamilyMember('father')}
                  className={`w-36 p-3 rounded-xl border text-center transition-all cursor-pointer ${selectedFamilyMember === 'father' ? 'bg-rose-50 border-rose-300 ring-4 ring-rose-100/50 scale-105' : 'bg-white border-slate-200 hover:border-slate-300'}`}
                >
                  <span className="text-[9px] font-mono font-bold text-rose-600">AFFECTED FATHER</span>
                  <div className="font-sans font-extrabold text-slate-800 text-xs mt-1">
                    {t.parentFhLabel.split('(')[0]}
                  </div>
                  <div className="mt-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-rose-100 text-rose-800 font-mono text-[9px] font-bold">
                    Ff (Mutated copy)
                  </div>
                </button>

                {/* Connection line helper */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-0.5 bg-slate-300 -z-0" />

                {/* Mother Node */}
                <button
                  onClick={() => setSelectedFamilyMember('mother')}
                  className={`w-36 p-3 rounded-xl border text-center transition-all cursor-pointer ${selectedFamilyMember === 'mother' ? 'bg-emerald-50 border-emerald-300 ring-4 ring-emerald-100/50 scale-105' : 'bg-white border-slate-200 hover:border-slate-300'}`}
                >
                  <span className="text-[9px] font-mono font-bold text-slate-400">NORMAL MOTHER</span>
                  <div className="font-sans font-extrabold text-slate-800 text-xs mt-1">
                    {t.parentHealthyLabel}
                  </div>
                  <div className="mt-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 font-mono text-[9px] font-bold">
                    ff (Healthy copies)
                  </div>
                </button>

              </div>

              {/* Vertical connection stem */}
              <div className="w-0.5 h-6 bg-slate-300 -mt-2 -mb-2" />

              {/* Row 2: Children */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                
                {/* Child 1: Unaffected */}
                <button
                  onClick={() => setSelectedFamilyMember('child1')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${selectedFamilyMember === 'child1' ? 'bg-emerald-50 border-emerald-300 ring-4 ring-emerald-100/50 scale-105' : 'bg-white border-slate-200 hover:border-slate-300'}`}
                >
                  <span className="text-[9px] font-mono font-bold text-slate-400">CHILD (50% CHANCE)</span>
                  <div className="font-sans font-extrabold text-slate-800 text-xs mt-1">
                    {t.childHealthyLabel.split('(')[0]}
                  </div>
                  <div className="mt-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 font-mono text-[9px] font-bold">
                    ff (Normal)
                  </div>
                </button>

                {/* Child 2: Affected */}
                <button
                  onClick={() => setSelectedFamilyMember('child2')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${selectedFamilyMember === 'child2' ? 'bg-rose-50 border-rose-300 ring-4 ring-rose-100/50 scale-105' : 'bg-white border-slate-200 hover:border-slate-300'}`}
                >
                  <span className="text-[9px] font-mono font-bold text-rose-600">CHILD (50% CHANCE)</span>
                  <div className="font-sans font-extrabold text-slate-800 text-xs mt-1">
                    {t.childFhLabel.split('(')[0]}
                  </div>
                  <div className="mt-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-rose-100 text-rose-800 font-mono text-[9px] font-bold">
                    Ff (Inherited FH)
                  </div>
                </button>

              </div>

            </div>

            <p className="text-[10px] text-center text-slate-400 font-mono mt-4 leading-normal">
              Note: 'F' represents the FH mutated gene copy (dominant), and 'f' is normal (recessive). One dominant copy triggers the physical clinical condition.
            </p>
          </div>

          {/* Interactive details column */}
          <div className="lg:col-span-5 bg-slate-900 text-slate-100 rounded-2xl p-6 flex flex-col justify-between shadow-lg">
            <AnimatePresence mode="wait">
              {selectedFamilyMember === 'father' && (
                <motion.div
                  key="father"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-950 px-2 py-1 rounded-sm uppercase">FATHER CARRIER (Ff)</span>
                  <h4 className="text-lg font-sans font-bold text-white">{t.parentFhLabel}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.patientFhDesc}
                  </p>
                  <div className="p-3 rounded-lg bg-slate-800 text-[11px] text-slate-300 border-l-4 border-rose-500">
                    Because the father carries one working gene and one mutated gene (Ff), he has high cholesterol and passes down either copy randomly.
                  </div>
                </motion.div>
              )}

              {selectedFamilyMember === 'mother' && (
                <motion.div
                  key="mother"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-1 rounded-sm uppercase">MOTHER NORMAL (ff)</span>
                  <h4 className="text-lg font-sans font-bold text-white">{t.parentHealthyLabel}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.patientHealthyDesc}
                  </p>
                  <div className="p-3 rounded-lg bg-slate-800 text-[11px] text-slate-300 border-l-4 border-emerald-500">
                    The mother carries two healthy copies of the receptor gene (ff). She has normal baseline cholesterol levels.
                  </div>
                </motion.div>
              )}

              {selectedFamilyMember === 'child1' && (
                <motion.div
                  key="child1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-1 rounded-sm uppercase">CHILD - HEALTHY (ff)</span>
                  <h4 className="text-lg font-sans font-bold text-white">{t.childHealthyLabel}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.childHealthyDesc}
                  </p>
                  <div className="p-3 rounded-lg bg-slate-800 text-[11px] text-slate-300 border-l-4 border-emerald-500">
                    This child inherited a normal copy from the father and a normal copy from the mother. They are entirely clear of FH.
                  </div>
                </motion.div>
              )}

              {selectedFamilyMember === 'child2' && (
                <motion.div
                  key="child2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-950 px-2 py-1 rounded-sm uppercase">CHILD - INHERITED FH (Ff)</span>
                  <h4 className="text-lg font-sans font-bold text-white">{t.childFhLabel}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.childFhDesc}
                  </p>
                  <div className="p-3 rounded-lg bg-slate-800 text-[11px] text-slate-300 border-l-4 border-rose-500">
                    This child inherited the father's mutated gene copy. Early detection and cholesterol-lowering medication will restore their heart attack risk to normal.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="pt-4 border-t border-slate-800 text-[10px] text-slate-400 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Click on other members to view different genotypes in Autosomal Dominant inheritance.</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. BENEFITS OF TREATMENT COMPREHENSIVE CARDS */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-150 shadow-xs">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-xl font-sans font-bold text-slate-900 flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-rose-500" />
            {t.benefitsTitle}
          </h3>
          <p className="text-slate-500 text-xs mt-1">
            {t.benefitsDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card: Without Treatment */}
          <div className="bg-rose-50/40 rounded-2xl border border-rose-200/60 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                ✕
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-900 text-sm">
                  {t.benefitsNoTreatment}
                </h4>
                <span className="text-[10px] font-mono text-rose-600 font-bold uppercase tracking-wider">Unchecked Vascular Build-Up</span>
              </div>
            </div>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-2.5 text-xs text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span>{t.benefitsNoTreatment1}</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span>{t.benefitsNoTreatment2}</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold text-rose-950">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 inline-block -mt-0.5 mr-1" />
                <span>{t.benefitsNoTreatment3}</span>
              </li>
            </ul>
          </div>

          {/* Card: With Treatment */}
          <div className="bg-emerald-50/40 rounded-2xl border border-emerald-200/60 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-sans font-bold text-slate-900 text-sm">
                  {t.benefitsWithTreatment}
                </h4>
                <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider">Active Clinical Protection</span>
              </div>
            </div>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-2.5 text-xs text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>{t.benefitsWithTreatment1}</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>{t.benefitsWithTreatment2}</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold text-emerald-950">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 inline-block -mt-0.5 mr-1" />
                <span>{t.benefitsWithTreatment3}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  );
}
