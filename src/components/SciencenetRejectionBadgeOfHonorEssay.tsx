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
  AlertOctagon,
} from "lucide-react";

export default function SciencenetRejectionBadgeOfHonorEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("sciencenet-rejection-article-text");
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

  const englishTreatiseText = `Sciencenet "审核未通过" as a Badge of Honor: Institutional Censorship, Academic Fragility, and the Fear of Unrefutable Truth

I. Introduction: The Sciencenet Rejection Paradox
As documented in Dr. Yue Liu’s ongoing Sciencenet blog archives—featuring treatises such as "与iAsk.Ai讨论刘跃思想" (Discussions with iAsk.Ai on Liu Yue Thought) and "学术坦诚是要有底气的" (Academic Candor Requires True Confidence)—official moderation statuses on traditional academic blogging platforms frequently mark submissions as "审核未通过" (Audit Not Passed / Censored). 
For conventional institutional gatekeepers, such red flags are intended to suppress heresy. For Dr. Liu, every rejected or censored post serves as a badge of honor, proving that entrenched dogmas cannot withstand the uncompromising light of wave mechanics logic.

II. Why True Confidence Does Not Fear Counter-Arguments
As Dr. Liu eloquently asserts: "I dare to seek more channels to propagate wave mechanics theory precisely because I do not fear encountering unexpected counter-arguments."
- True is true, and errors can never successfully refute truth. 
- Any new perspective or unexpected objection only provides additional ammunition to demonstrate the robustness of wave mechanics.
- When mainstream apologists claim that classical impedance matching (Z_in = Z_0) was "merely an individual misunderstanding" rather than institutional error, they inadvertently reveal their own intellectual cowardice. If true scientific confidence existed, they would welcome open public debate rather than administrative censorship.

III. The Psychological Fragility of Bureaucratic Science
The systemic knee-jerk reaction of flagging critical discussions as "审核未通过" highlights the profound fragility of modern academic bureaucracy:
- When administrative platforms block open critiques of cargo cult publishing and 95% garbage SCI papers, they expose themselves not as arbiters of truth, but as fearful defenders of institutional privilege.
- Silencing rigorous physical derivations regarding beam voltage magnification (V > V_i) and boundary cancellation at x_1+ does not invalidate wave mechanics; it merely seals the doom of outdated classical dogmas.

IV. Conclusion: History Records Every Act of Suppression
Censorship and rejection notices cannot erase mathematical necessity. By proudly publishing and archiving every dialogue, dialogue critique, and foundational treatise, Dr. Liu ensures that history permanently records the contrast between fearful institutional suppression and unbending scientific truth.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-rose-50 text-rose-900 px-3 py-1 rounded-full border border-rose-200 font-semibold">
            <AlertOctagon className="w-3.5 h-3.5 text-rose-700" />
            <span>Essay HAH: Sciencenet Badge of Honor</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          Sciencenet "审核未通过" as a Badge of Honor: Institutional Censorship, Academic Fragility, and the Fear of Unrefutable Truth
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-sciencenet")}
            className="flex items-center gap-1.5 px-4 py-2 bg-rose-900 hover:bg-rose-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-sciencenet" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-sciencenet" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="sciencenet-rejection-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-rose-800 shrink-0" />
            <h2>I. Introduction: The Sciencenet Rejection Paradox</h2>
          </div>
          <p>
            As documented in Dr. Yue Liu’s ongoing Sciencenet blog archives—featuring treatises such as <span className="italic">与iAsk.Ai讨论刘跃思想</span> (Discussions with iAsk.Ai on Liu Yue Thought) and <span className="italic">学术坦诚是要有底气的</span> (Academic Candor Requires True Confidence)—official moderation statuses on traditional academic blogging platforms frequently mark submissions as <span className="font-semibold text-rose-900">“审核未通过”</span> (Audit Not Passed / Censored).
          </p>
          <p>
            For conventional institutional gatekeepers, such red flags are intended to suppress heresy. For Dr. Liu, every rejected or censored post serves as a badge of honor, proving that entrenched dogmas cannot withstand the uncompromising light of wave mechanics logic.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-rose-800 shrink-0" />
            <h2>II. Why True Confidence Does Not Fear Counter-Arguments</h2>
          </div>
          <p>
            As Dr. Liu eloquently asserts: <span className="italic font-semibold text-stone-950">"I dare to seek more channels to propagate wave mechanics theory precisely because I do not fear encountering unexpected counter-arguments."</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-800 shrink-0" />
                <span>Invulnerability of Truth</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                True is true, and errors can never successfully refute truth. Any new perspective or unexpected objection only provides additional ammunition to demonstrate the robustness of wave mechanics.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-800 shrink-0" />
                <span>Evasion of Mainstream Apologists</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                When mainstream apologists claim that classical impedance matching (Z_in = Z_0) was "merely an individual misunderstanding" rather than institutional error, they inadvertently reveal their own intellectual cowardice.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-rose-800 shrink-0" />
            <h2>III. The Psychological Fragility of Bureaucratic Science</h2>
          </div>
          <p>
            The systemic knee-jerk reaction of flagging critical discussions as <span className="font-semibold text-rose-900">“审核未通过”</span> highlights the profound fragility of modern academic bureaucracy:
          </p>
          <p>
            When administrative platforms block open critiques of cargo cult publishing and 95% garbage SCI papers, they expose themselves not as arbiters of truth, but as fearful defenders of institutional privilege. Silencing rigorous physical derivations regarding beam voltage magnification (V &gt; V_i) and boundary cancellation at x_1+ does not invalidate wave mechanics; it merely seals the doom of outdated classical dogmas.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-rose-800 shrink-0" />
            <h2>IV. Conclusion: History Records Every Act of Suppression</h2>
          </div>
          <p>
            Censorship and rejection notices cannot erase mathematical necessity. By proudly publishing and archiving every dialogue, dialogue critique, and foundational treatise, Dr. Liu ensures that history permanently records the contrast between fearful institutional suppression and unbending scientific truth.
          </p>
        </section>
      </div>
    </article>
  );
}
