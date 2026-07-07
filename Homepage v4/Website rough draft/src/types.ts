export type Language = 'en' | 'zh' | 'ta' | 'ms';

export interface Translation {
  languageSelection: string;
  disclaimer: string;
  disclaimerTitle: string;
  home: string;
  fhRoadmap: string;
  aboutFh: string;
  geneticTesting: string;
  preTestCounselling: string;
  faqs: string;
  educationalResources: string;
  chatbot: string;
  searchPlaceholder: string;
  roadmapTitle: string;
  roadmapSubtitle: string;
  faqTitle: string;
  aboutFhTitle: string;
  testingTitle: string;
  counsellingTitle: string;
  resourcesTitle: string;
  chatbotTitle: string;
  chatbotDisclaimer: string;
  chatbotInputPlaceholder: string;
  stages: RoadmapStage[];
  faqsList: FAQItem[];
  aboutFhContent: ContentSection[];
  testingContent: ContentSection[];
  counsellingContent: ContentSection[];
  resourcesContent: ContentSection[];
}

export interface RoadmapStage {
  id: string;
  title: string;
  description: string;
  details: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  title: string;
  content: string;
}
