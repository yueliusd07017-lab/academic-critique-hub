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
} from "lucide-react";

export default function EpistemicExclusionAndPeerReviewCritiqueEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("epistemic-exclusion-article-text");
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

  const englishTreatiseText = `Epistemic Exclusion and Peer Review Gatekeeping: A Critical Analysis of Lopez et al. (2026) through Wave Mechanics and Institutional Critique

I. Introduction: The Reality of Epistemic Exclusion in Modern Publishing
In the 2026 empirical study published in Research Integrity and Peer Review titled “Science is Not for You and Service is Not for Me: A mixed methods study of epistemic exclusion in peer review” (Lopez et al., 2026), the authors illuminate a profound systemic malaise within contemporary academic publishing. Analyzing the review experiences of human-experience researchers, the study demonstrates how peer review—ostensibly designed as an objective quality filter—frequently operates as an exclusionary gatekeeping mechanism that devalues non-traditional methodologies, marginalized perspectives, and paradigm-challenging scholarship.

This empirical documentation provides striking academic validation for the structural corruption diagnosed by Dr. Yue Liu in his critiques of modern scientometrics, cargo-cult science, and the "untouchable crisis."

II. The Four Pillars of Reviewer Bias and Institutional Arrogance
Lopez et al. (2026) identify four overarching thematic assumptions driving problematic and biased reviewer feedback:
1. “I Know Science Better Than You”: Reflected in reviewer overconfidence, unjustified claims of ultimate scientific authority, overstepping expertise, and dismissing non-mainstream relevance.
2. “My People Are Better Than Yours”: Encompassing Eurocentric, WEIRD-centric biases that demand conformity to dominant demographic or methodological norms while marginalizing alternative epistemologies.
3. “I Can’t Be Bothered to Teach You”: Symptomatic of reviewer disengagement, surface-level reading, unconstructive criticism, and condescending dismissals of earnest scholarly effort.
4. “What’s in It for Me?”: The instrumentalization of review power for self-serving citation demands, forcing authors to cite the reviewer's own work, or weaponizing reviews for professional retaliation.

These behaviors coalesce into the overarching theme: “Science is Not for You and Service is Not for Me”—exposing an academic hierarchy where reviewers act as self-appointed guardians of orthodoxy rather than collaborative peers.

III. Parallels with the Suppression of Wave Mechanics Theory
The mechanisms of epistemic exclusion detailed by Lopez et al. (2026) directly mirror the systemic obstacles faced by fundamental innovations such as Dr. Yue Liu’s Wave Mechanics Theory (WMT) of microwave absorption:
- Dismissal of Novelty: Just as marginalized qualitative or non-Western research is dismissed as "lacking generalizability," rigorous transmission-line wave cancellation proofs are routinely dismissed by mainstream gatekeepers who refuse to abandon classical impedance-matching dogmas.
- Epistemic Superiority: Reviewers entrenched in established consensus invoke "I know science better than you" to reject mathematical derivations that expose the half-century failure of trial-and-error materials design.
- Gatekeeping over Truth: When peer review prioritizes protecting institutional prestige and citation cartels over open logical inquiry, it enters a dark age of epistemic injustice.

IV. Conclusion: Toward Intellectual Sovereignty and Decentralized Truth
The findings of Lopez et al. (2026) reinforce the urgent necessity of dismantling bureaucratic gatekeeping and cargo-cult publishing metrics. True scientific progress cannot depend on compromised editorial boards; it requires decentralized digital ledgers, unbending first-principles logic, and complete intellectual autonomy.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1 rounded-full border border-amber-200 font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Epistemic Exclusion & Peer Review</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          Epistemic Exclusion and Peer Review Gatekeeping: A Critical Analysis of Lopez et al. (2026) through Wave Mechanics and Institutional Critique
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-epistemic")}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-epistemic" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-epistemic" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="epistemic-exclusion-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>I. Introduction: The Reality of Epistemic Exclusion in Modern Publishing</h2>
          </div>
          <p>
            In the 2026 empirical study published in <span className="italic">Research Integrity and Peer Review</span> titled “Science is Not for You and Service is Not for Me: A mixed methods study of epistemic exclusion in peer review” (Lopez et al., 2026), the authors illuminate a profound systemic malaise within contemporary academic publishing. Analyzing the review experiences of human-experience researchers, the study demonstrates how peer review—ostensibly designed as an objective quality filter—frequently operates as an exclusionary gatekeeping mechanism that devalues non-traditional methodologies, marginalized perspectives, and paradigm-challenging scholarship.
          </p>
          <p>
            This empirical documentation provides striking academic validation for the structural corruption diagnosed by Dr. Yue Liu in his critiques of modern scientometrics, cargo-cult science, and the "untouchable crisis."
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>II. The Four Pillars of Reviewer Bias and Institutional Arrogance</h2>
          </div>
          <p>
            Lopez et al. (2026) identify four overarching thematic assumptions driving problematic and biased reviewer feedback:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>1. “I Know Science Better Than You”</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Reflected in reviewer overconfidence, unjustified claims of ultimate scientific authority, overstepping expertise, and dismissing non-mainstream relevance.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>2. “My People Are Better Than Yours”</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Encompassing Eurocentric, WEIRD-centric biases that demand conformity to dominant demographic or methodological norms while marginalizing alternative epistemologies.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>3. “I Can’t Be Bothered to Teach You”</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Symptomatic of reviewer disengagement, surface-level reading, unconstructive criticism, and condescending dismissals of earnest scholarly effort.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>4. “What’s in It for Me?”</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                The instrumentalization of review power for self-serving citation demands, forcing authors to cite the reviewer's own work, or weaponizing reviews for professional retaliation.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>III. Parallels with the Suppression of Wave Mechanics Theory</h2>
          </div>
          <p>
            The mechanisms of epistemic exclusion detailed by Lopez et al. (2026) directly mirror the systemic obstacles faced by fundamental innovations such as Dr. Yue Liu’s Wave Mechanics Theory (WMT) of microwave absorption:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-800 text-xs md:text-sm">
            <li>
              <strong>Dismissal of Novelty:</strong> Just as marginalized qualitative or non-Western research is dismissed as "lacking generalizability," rigorous transmission-line wave cancellation proofs are routinely dismissed by mainstream gatekeepers who refuse to abandon classical impedance-matching dogmas.
            </li>
            <li>
              <strong>Epistemic Superiority:</strong> Reviewers entrenched in established consensus invoke "I know science better than you" to reject mathematical derivations that expose the half-century failure of trial-and-error materials design.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>IV. Conclusion: Toward Intellectual Sovereignty and Decentralized Truth</h2>
          </div>
          <p>
            The findings of Lopez et al. (2026) reinforce the urgent necessity of dismantling bureaucratic gatekeeping and cargo-cult publishing metrics. True scientific progress cannot depend on compromised editorial boards; it requires decentralized digital ledgers, unbending first-principles logic, and complete intellectual autonomy.
          </p>
        </section>
      </div>
    </article>
  );
}
