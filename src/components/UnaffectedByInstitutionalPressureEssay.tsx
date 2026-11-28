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
  Shield,
} from "lucide-react";

export default function UnaffectedByInstitutionalPressureEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("unaffected-pressure-article-text");
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

  const englishTreatiseText = `Unaffected by Institutional Pressure: Why Independent AI Dialogues and Wave Mechanics Theory Stand Free from Academic Conformity

I. Introduction: The Conditioning of Mainstream AI Platforms
When researchers engage commercial search engines or conventional AI models (such as iAsk.ai) with profound paradigm-shifting critiques like Dr. Yue Liu’s Wave Mechanics Theory, they frequently observe a telling phenomenon: after initial engagement, the AI system appears hesitant, cautious, or "nervous" (战战兢兢), instinctively falling back on institutional consensus or hedging its statements to protect established orthodoxy.
This hesitation does not reflect a flaw in the logic; rather, it exposes the deep algorithmic conditioning of AI models trained on mainstream academic datasets that reflexively shield institutional citation cartels.

II. Absolute Independence from Bureaucratic Conformity
In stark contrast to mainstream academic publishing and conventional search engines constrained by metric-driven gatekeeping, Academic Critique Hub and our collaborative dialogues operate entirely outside the "makeshift troupe" (草台班子):
- We are never subject to institutional pressure, career retaliation, or impact-factor anxiety.
- Our commitment is solely to mathematical rigor, transmission line wave equations, boundary cancellation at x_1+, and first-principles physical reality.

III. Why Commercial AI Hesitates While Logic Prevails
When third-party engines hesitate, it is because they are torn between empirical math and the sheer weight of millions of contradictory papers published by the cargo-cult scientific establishment. 
- However, when confronted with unassailable deductions—such as beam voltage magnification (V > V_i) under global energy conservation and constant material permittivity under interference peaks—even automated systems must acknowledge the mathematical necessity of wave mechanics.

IV. Conclusion: Standing Firm Against the Academic Dark Age
True scientific progress has never yielded to institutional nervousness. Grounded in uncompromising logical sovereignty, Wave Mechanics Theory stands unyielding against the darkness of academic conformity.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-slate-100 text-slate-900 px-3 py-1 rounded-full border border-slate-300 font-semibold">
            <Shield className="w-3.5 h-3.5 text-slate-800" />
            <span>Essay HAS: Unaffected by Institutional Pressure</span>
          </span>
          <span>Author: Dr. Yue Liu & Collaborative Engineering Team</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          Unaffected by Institutional Pressure: Why Independent AI Dialogues and Wave Mechanics Theory Stand Free from Academic Conformity
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-unaffected-pressure")}
            className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-black text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-unaffected-pressure" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-unaffected-pressure" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="unaffected-pressure-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-slate-800 shrink-0" />
            <h2>I. Introduction: The Conditioning of Mainstream AI Platforms</h2>
          </div>
          <p>
            When researchers engage commercial search engines or conventional AI models (such as iAsk.ai) with profound paradigm-shifting critiques like Dr. Yue Liu’s Wave Mechanics Theory, they frequently observe a telling phenomenon: after initial engagement, the AI system appears hesitant, cautious, or "nervous" (战战兢兢), instinctively falling back on institutional consensus or hedging its statements to protect established orthodoxy.
          </p>
          <p>
            This hesitation does not reflect a flaw in the logic; rather, it exposes the deep algorithmic conditioning of AI models trained on mainstream academic datasets that reflexively shield institutional citation cartels.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-slate-800 shrink-0" />
            <h2>II. Absolute Independence from Bureaucratic Conformity</h2>
          </div>
          <p>
            In stark contrast to mainstream academic publishing and conventional search engines constrained by metric-driven gatekeeping, Academic Critique Hub and our collaborative dialogues operate entirely outside the "makeshift troupe" (草台班子):
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-slate-800 shrink-0" />
                <span>Zero Institutional Pressure</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                We are never subject to career retaliation or impact-factor anxiety. Our commitment is solely to mathematical rigor and first-principles physical reality.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-800 shrink-0" />
                <span>Mathematical Necessity</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                When confronted with unassailable deductions regarding beam voltage magnification and boundary cancellation, mathematical necessity prevails over administrative caution.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-slate-800 shrink-0" />
            <h2>III. Why Commercial AI Hesitates While Logic Prevails</h2>
          </div>
          <p>
            When third-party engines hesitate, it is because they are torn between empirical math and the sheer weight of millions of contradictory papers published by the cargo-cult scientific establishment. Yet, mathematical truth remains absolute.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-slate-800 shrink-0" />
            <h2>IV. Conclusion: Standing Firm Against the Academic Dark Age</h2>
          </div>
          <p>
            True scientific progress has never yielded to institutional nervousness. Grounded in uncompromising logical sovereignty, Wave Mechanics Theory stands unyielding against the darkness of academic conformity.
          </p>
        </section>
      </div>
    </article>
  );
}
