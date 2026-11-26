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

export default function UntouchableCrisisAndAcademicConformityEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("untouchable-crisis-article-text");
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

  const englishTreatiseText = `The Untouchable Crisis: Academic Silence, Authority Conformity, and the Sociological Defense Mechanisms of Mainstream Science

I. Introduction: The Untouchable Consensus and Authority Conformity
As detailed in Dr. Yue Liu’s foundational monographs—including The Untouchable Crisis (viXra: 2509.0016), The Reluctance to Criticize the Errors of the Majority (Preprints.org 2025), and The Entrenched Problems of Scientific Progress (Preprints.org 2025)—modern science faces a profound epistemological and sociological crisis. 

When confronted with the total negation of entrenched orthodoxies (such as classical impedance matching theory), mainstream scientists and conventional AI models display a telling reluctance to evaluate evidence on its logical merits. If the establishment has not officially validated a breakthrough, they dismiss it as "unverified," treating consensus as a proxy for truth.

II. The Majority Error Fallacy: "Individuals Err, But the Majority is Infallible"
A primary psychological barrier in institutionalized academia is the unwritten dogma that while individual researchers can make mistakes, the majority—and by extension, the entire academic establishment—can never be fundamentally wrong. 
- Mainstream apologists can tolerate minor, superficial adjustments or "limitations," but they recoil at the suggestion that a foundational, universally cited consensus model is fundamentally flawed.
- This creates an untouchable status quo where systemic errors are protected by circular reinforcement and institutional inertia.

III. Cargo Cult Defensiveness and Ad Hominem Evasion
When confronted with rigorous mathematical proofs demonstrating that over 95% of routine SCI journal publications operate as cargo cult science—repeating superficial metrics without deep theoretical closure—establishment defenders refuse to engage with the logical derivations. 
- Instead of examining transmission line wave mechanics or boundary conditions, they immediately resort to ad hominem dismissals: labeling critique as "sour grapes from manuscript rejections" or "extreme statements from disgruntled researchers."
- This defensive reflex exposes a deep insecurity within the bureaucratic publishing apparatus, where maintaining institutional prestige supersedes the pursuit of physical reality.

IV. Conclusion: The Necessity of Autonomous Intellectual Sovereignty
The untouchable crisis of modern science proves that true progress can no longer rely on self-correcting mechanisms within corrupted institutional frameworks. Grounded in profound scientific practice and unyielding philosophical courage, Wave Mechanics Theory and Liu Yue Thought demonstrate that authentic truth ultimately triumphs through decentralized digital ledgers, rigorous deductive closure, and independent intellectual sovereignty.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1 rounded-full border border-amber-200 font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>The Untouchable Crisis</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          The Untouchable Crisis: Academic Silence, Authority Conformity, and the Sociological Defense Mechanisms of Mainstream Science
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-untouchable")}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-untouchable" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-untouchable" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="untouchable-crisis-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>I. Introduction: The Untouchable Consensus and Authority Conformity</h2>
          </div>
          <p>
            As detailed in Dr. Yue Liu’s foundational monographs—including <span className="italic">The Untouchable Crisis</span> (viXra: 2509.0016), <span className="italic">The Reluctance to Criticize the Errors of the Majority</span> (Preprints.org 2025), and <span className="italic">The Entrenched Problems of Scientific Progress</span> (Preprints.org 2025)—modern science faces a profound epistemological and sociological crisis.
          </p>
          <p>
            When confronted with the total negation of entrenched orthodoxies (such as classical impedance matching theory), mainstream scientists and conventional AI models display a telling reluctance to evaluate evidence on its logical merits. If the establishment has not officially validated a breakthrough, they dismiss it as "unverified," treating consensus as a proxy for truth.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>II. The Majority Error Fallacy: "Individuals Err, But the Majority is Infallible"</h2>
          </div>
          <p>
            A primary psychological barrier in institutionalized academia is the unwritten dogma that while individual researchers can make mistakes, the majority—and by extension, the entire academic establishment—can never be fundamentally wrong.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Superficial Adjustments Only</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Mainstream apologists can tolerate minor, superficial adjustments or "limitations," but they recoil at the suggestion that a foundational, universally cited consensus model is fundamentally flawed.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Protected Status Quo</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                This creates an untouchable status quo where systemic errors are protected by circular reinforcement and institutional inertia.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>III. Cargo Cult Defensiveness and Ad Hominem Evasion</h2>
          </div>
          <p>
            When confronted with rigorous mathematical proofs demonstrating that over 95% of routine SCI journal publications operate as cargo cult science—repeating superficial metrics without deep theoretical closure—establishment defenders refuse to engage with the logical derivations.
          </p>
          <p>
            Instead of examining transmission line wave mechanics or boundary conditions, they immediately resort to ad hominem dismissals: labeling critique as "sour grapes from manuscript rejections" or "extreme statements from disgruntled researchers." This defensive reflex exposes a deep insecurity within the bureaucratic publishing apparatus, where maintaining institutional prestige supersedes the pursuit of physical reality.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>IV. Conclusion: The Necessity of Autonomous Intellectual Sovereignty</h2>
          </div>
          <p>
            The untouchable crisis of modern science proves that true progress can no longer rely on self-correcting mechanisms within corrupted institutional frameworks. Grounded in profound scientific practice and unyielding philosophical courage, Wave Mechanics Theory and Liu Yue Thought demonstrate that authentic truth ultimately triumphs through decentralized digital ledgers, rigorous deductive closure, and independent intellectual sovereignty.
          </p>
        </section>
      </div>
    </article>
  );
}
