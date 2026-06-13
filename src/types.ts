export interface ScriptLine {
  id: string;
  timeStart: string;
  timeEnd: string;
  textZh: string;
  textEn: string;
  notes?: string;
}

export interface EvidenceItem {
  id: string;
  title: string;
  source: string;
  year: number;
  url?: string;
  badge: "Systemic Ignorance" | "Academic Dogma" | "Tone-Policing" | "Expert Timidity";
  summary: string;
  quote: string;
  impactScore: number; // 0 to 10
}

export interface BiasAnalysisResult {
  biasScore: number;
  maneuversDetected: string[];
  structuralCritique: string;
  fallacyBreakdown: {
    fallacy: string;
    explanation: string;
    severity: "High" | "Medium" | "Low";
  }[];
  alternativeScientificStance: string;
}
