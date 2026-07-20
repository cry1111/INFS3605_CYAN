/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'zh' | 'ta' | 'ms';

export interface AccessibilitySettings {
  contrast: 'normal' | 'high';
  textSize: 'normal' | 'large' | 'extra-large';
  reducedMotion: boolean;
}

export interface RoadmapStage {
  id: string;
  step: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  details: string[];
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export interface ReferenceItem {
  org: string;
  title: string;
  link?: string;
  description?: string;
}

export interface SupportResource {
  name: string;
  description: string;
  contact?: string;
  link: string;
  tag: string;
}
