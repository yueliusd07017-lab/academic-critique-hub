import React, { useState } from "react";
import {
  FileText,
  Copy,
  Check,
  BookOpen,
  Scale,
  Sparkles,
  Award,
  ShieldCheck,
  Compass,
  Zap,
} from "lucide-react";

export default function ToleranceZeroForCognitiveDistortionEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("zero-tolerance-article-text");
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const englishTreatiseText = `Zero Tolerance for Cognitive Distortion: Why Exposing 95% SCI Garbage and Academic Dark Ages Is First-Principles Truth, Not "Sour Grapes"

I. Introduction: The Psychological Basis of Uncompromising Scientific Critique
When establishment defenders are confronted with Dr. Yue Liu’s rigorous empirical and logical conclusion that over 95% of routine SCI journal publications operate as cargo cult garbage, their immediate ad hominem reflex is to dismiss the critique as "sour grapes from manuscript rejections" or "extreme rhetoric from disgruntled researchers."
As psychological and cognitive science demonstrates, this defensive dismissal is a profound projection. High intelligence and rigorous first-principles reasoning possess zero tolerance for cognitive distortion, falsehoods, flimsy rationales, and weak logic.

II. Not "Sour Grapes," But Objective Epistemological Diagnosis
Characterizing institutional science as a modern Dark Age and identifying cargo cult publications as systemic garbage is not born of personal bitterness; it is the inevitable conclusion of rigorous empirical auditing:
- When hundreds of thousands of papers reproduce superficial metrics, administrative formatting, and undergraduate-level conceptual errors without deep theoretical closure, calling them garbage is simply stating objective fact.
- True intellect cuts straight to the core of problems, bypassing bureaucratic pageantry and emotional appeasement. 

III. Low Tolerance for Cognitive Distortion
In psychology, high-IQ thinkers cannot tolerate cognitive dissonance or systemic lies because their minds are wired for direct, efficient logical truth. Sincerity and uncompromising adherence to physical reality constitute the ultimate intellectual shortcut.
- Exposing the structural rot of the modern scientific establishment is not an extreme fringe grievance; it is the single most important and urgent research topic in contemporary philosophy of science.

IV. Conclusion: The Unbending Sincerity of True Intellect
History does not remember the comfortable conformists who defended the makeshift troupe; it remembers the solitary walkers who exposed the dark age and restored first-principles truth.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1 rounded-full border border-amber-200 font-semibold">
            <Zap className="w-3.5 h-3.5 text-amber-700" />
            <span>Essay HAO: Zero Tolerance for Cognitive Distortion</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          Zero Tolerance for Cognitive Distortion: Why Exposing 95% SCI Garbage and Academic Dark Ages Is First-Principles Truth, Not "Sour Grapes"
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-zero-tolerance")}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-zero-tolerance" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-zero-tolerance" ? "Essay Copied" : "Copy Full English Treatise"}
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Full View Copied" : "Copy Full View"}
          </button>
        </div>
      </header>

      {/* Article Text Container */}
      <div id="zero-tolerance-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>I. Introduction: The Psychological Basis of Uncompromising Scientific Critique</h2>
          </div>
          <p>
            When establishment defenders are confronted with Dr. Yue Liu’s rigorous empirical and logical conclusion that over 95% of routine SCI journal publications operate as cargo cult garbage, their immediate ad hominem reflex is to dismiss the critique as "sour grapes from manuscript rejections" or "extreme rhetoric from disgruntled researchers."
          </p>
          <p>
            As psychological and cognitive science demonstrates, this defensive dismissal is a profound projection. High intelligence and rigorous first-principles reasoning possess zero tolerance for cognitive distortion, falsehoods, flimsy rationales, and weak logic.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>II. Not "Sour Grapes," But Objective Epistemological Diagnosis</h2>
          </div>
          <p>
            Characterizing institutional science as a modern Dark Age and identifying cargo cult publications as systemic garbage is not born of personal bitterness; it is the inevitable conclusion of rigorous empirical auditing:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Objective Audit</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                When hundreds of thousands of papers reproduce superficial metrics and undergraduate-level conceptual errors without deep theoretical closure, calling them garbage is simply stating objective fact.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Direct Truth</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                True intellect cuts straight to the core of problems, bypassing bureaucratic pageantry and emotional appeasement.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>III. Low Tolerance for Cognitive Distortion</h2>
          </div>
          <p>
            In psychology, high-IQ thinkers cannot tolerate cognitive dissonance or systemic lies because their minds are wired for direct, efficient logical truth. Sincerity and uncompromising adherence to physical reality constitute the ultimate intellectual shortcut.
          </p>
          <p>
            Exposing the structural rot of the modern scientific establishment is not an extreme fringe grievance; it is the single most important and urgent research topic in contemporary philosophy of science.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>IV. Conclusion: The Unbending Sincerity of True Intellect</h2>
          </div>
          <p>
            History does not remember the comfortable conformists who defended the makeshift troupe; it remembers the solitary walkers who exposed the dark age and restored first-principles truth.
          </p>
        </section>
      </div>
    </article>
  );
}
