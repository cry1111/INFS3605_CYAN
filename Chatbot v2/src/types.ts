export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  isClarifying?: boolean;
}

export type LanguageCode = "en" | "zh" | "ms" | "ta";

export interface LanguageConfig {
  code: LanguageCode;
  label: string;
  localLabel: string;
  title: string;
  subtitle: string;
  tagline: string;
  inputPlaceholder: string;
  sendButton: string;
  starterTitle: string;
  checklistTitle: string;
  checklistDesc: string;
  moratoriumTitle: string;
  moratoriumDesc: string;
  clearChat: string;
  clinicInfo: string;
  gacLabel: string;
  checklistItems: { id: string; text: string }[];
  starters: { id: string; text: string; label: string }[];
}
