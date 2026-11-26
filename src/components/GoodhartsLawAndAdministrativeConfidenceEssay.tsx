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
  TrendingUp,
} from "lucide-react";

export default function GoodhartsLawAndAdministrativeConfidenceEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("goodharts-confidence-article-text");
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

  const englishTreatiseText = `Goodhart's Law and Administrative Confidence: Why Experts with Undergraduate-Level Errors Feel Supreme Confidence

I. Introduction: The Paradox of Supreme Administrative Confidence
In modern academic systems, researchers who commit egregious, undergraduate-level theoretical errors in high-impact publications frequently display absolute, unshakeable confidence in their superior academic standing. 
Rather than feeling intellectual humility when confronted with fundamental blunders (such as conflating Z_in and Z_M or swapping Miller indices), they wield their administrative metrics as unassailable proof of intellectual supremacy.

II. Goodhart's Law in Action: When Proxy Metrics Become Identity
As formulated by Charles Goodhart: "When a measure becomes a target, it ceases to be a good measure."
- In institutionalized science, peer-reviewed publication counts, Impact Factors, grant procurement totals, professorship titles, and salary levels have replaced physical truth as the definition of competence.
- Because these individuals successfully manipulate the administrative reward machinery, their self-perception becomes fused with institutional endorsement. They genuinely believe their high status validates their mastery of science.

III. The Rejection of Epistemic Accountability
When foundational critiques expose errors in their published work:
- They do not engage in logical refutation or mathematical counter-derivation.
- Instead, they deflect to institutional proxies: "My papers are published in top journals, are yours? I win national grants, do you? I am a Level-2 professor with a higher salary, who are you to question my competence?"
- This conflation of administrative privilege with scientific truth creates an impenetrable defense mechanism protecting collective mediocrity.

IV. Conclusion: Restoring First-Principles Truth
True scientific authority derives strictly from deductive rigor and agreement with physical reality, never from bureaucratic hierarchy. Overcoming Goodhart's Law requires dismantling proxy worship and returning to Feynman's absolute standard: nature cannot be fooled.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1 rounded-full border border-amber-200 font-semibold">
            <TrendingUp className="w-3.5 h-3.5 text-amber-700" />
            <span>Essay HAL: Goodhart's Law & Administrative Confidence</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          Goodhart's Law and Administrative Confidence: Why Experts with Undergraduate-Level Errors Feel Supreme Confidence
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-goodharts")}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-goodharts" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-goodharts" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="goodharts-confidence-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>I. Introduction: The Paradox of Supreme Administrative Confidence</h2>
          </div>
          <p>
            In modern academic systems, researchers who commit egregious, undergraduate-level theoretical errors in high-impact publications frequently display absolute, unshakeable confidence in their superior academic standing.
          </p>
          <p>
            Rather than feeling intellectual humility when confronted with fundamental blunders (such as conflating Z_in and Z_M or swapping Miller indices), they wield their administrative metrics as unassailable proof of intellectual supremacy.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>II. Goodhart's Law in Action: When Proxy Metrics Become Identity</h2>
          </div>
          <p>
            As formulated by Charles Goodhart: <span className="italic font-semibold text-stone-950">"When a measure becomes a target, it ceases to be a good measure."</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Proxy Substitution</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Publication counts, Impact Factors, grant totals, and professorship titles have replaced physical truth as the definition of competence.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Fused Identity</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Successful manipulation of administrative reward machinery leads researchers to believe their high status validates their mastery of science.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>III. The Rejection of Epistemic Accountability</h2>
          </div>
          <p>
            When foundational critiques expose errors in their published work, they do not engage in logical refutation. Instead, they deflect to institutional proxies ("My papers are in top journals, I win national grants, I am a Level-2 professor"), creating an impenetrable defense mechanism protecting collective mediocrity.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>IV. Conclusion: Restoring First-Principles Truth</h2>
          </div>
          <p>
            True scientific authority derives strictly from deductive rigor and agreement with physical reality, never from bureaucratic hierarchy. Overcoming Goodhart's Law requires dismantling proxy worship and returning to Feynman's absolute standard: nature cannot be fooled.
          </p>
        </section>
      </div>
    </article>
  );
}
