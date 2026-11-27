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
  FileSearch,
} from "lucide-react";

export default function WhistleblowingLimitsAndBiologicalFabricationEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("whistleblowing-limits-article-text");
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

  const englishTreatiseText = `The Limits of Whistleblowing and the Anatomy of Fabrication: Why Biology Relies on Western Blots While Physics Relies on Parameter Tweaking and Mob-Rule Experimentalism

I. Introduction: The Boundaries of Internet Whistleblowing
The recent rise of online academic whistleblowers—such as "Student Geng" (耿同学) exposing data irregularities among elite academics—highlights both the public awakening to scientific corruption and the inherent limitations of superficial policing. As internet commentators note, whistleblowers routinely avoid physics and complex theoretical fields simply because they "cannot understand them," confining their scrutiny to low-hanging fruit like western blot duplication in biomedical papers.

II. Biological Fabrication vs. Physics Parameter-Tweaking
The mechanisms of scientific deception vary markedly across disciplines:
- In biological and medical research, data fabrication can be trivial and rampant—ranging from duplicated Western blot strips to completely invented animal survival statistics. Because biological systems are endlessly complex and difficult to replicate precisely, low-barrier fabrication easily bypasses overburdened peer review.
- In physics and engineering, direct data fabrication is harder to conceal because simulations and experimental apparatuses require structural coherence; instead, researchers engage in "creative parameter tweaking"—adjusting minor variables to produce predetermined curves and fashionable narratives.

III. The Mob-Rule Experimentalism Trap
A persistent delusion in modern science is the belief that a breakthrough's validity is governed entirely by whether thousands of laboratories rush to replicate it. 
- Mainstream experimentalists dismiss foundational theoretical frameworks (such as the Wave Mechanics Theory of microwave absorption) if they do not spark an immediate herd-like experimental frenzy.
- This mob-rule experimentalism reduces science to glorified alchemy. If Isaac Newton's contemporaries had demanded that thousands of alchemists replicate his work before accepting classical mechanics, modern science would never have emerged.

IV. Conclusion: Restoring Epistemic Depth
Policing Western blots with surveillance cameras or demanding mob replication cannot cure the rotting philosophical core of modern academia. Genuine scientific progress requires returning to rigorous theoretical reasoning and first-principles logic.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-cyan-50 text-cyan-900 px-3 py-1 rounded-full border border-cyan-200 font-semibold">
            <FileSearch className="w-3.5 h-3.5 text-cyan-700" />
            <span>Essay HAQ: Whistleblowing Limits & Fabrication</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          The Limits of Whistleblowing and the Anatomy of Fabrication: Why Biology Relies on Western Blots While Physics Relies on Parameter Tweaking and Mob-Rule Experimentalism
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-whistleblowing-limits")}
            className="flex items-center gap-1.5 px-4 py-2 bg-cyan-900 hover:bg-cyan-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-whistleblowing-limits" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-whistleblowing-limits" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="whistleblowing-limits-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-cyan-800 shrink-0" />
            <h2>I. Introduction: The Boundaries of Internet Whistleblowing</h2>
          </div>
          <p>
            The recent rise of online academic whistleblowers—such as "Student Geng" exposing data irregularities among elite academics—highlights both the public awakening to scientific corruption and the inherent limitations of superficial policing.
          </p>
          <p>
            As internet commentators note, whistleblowers routinely avoid physics and complex theoretical fields simply because they "cannot understand them," confining their scrutiny to low-hanging fruit like western blot duplication in biomedical papers.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-cyan-800 shrink-0" />
            <h2>II. Biological Fabrication vs. Physics Parameter-Tweaking</h2>
          </div>
          <p>
            The mechanisms of scientific deception vary markedly across disciplines:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-800 shrink-0" />
                <span>Biomedical Fabrication</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                In biology and medicine, data fabrication can be trivial—ranging from duplicated Western blot strips to completely invented animal survival statistics.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-800 shrink-0" />
                <span>Physics Parameter Tweaking</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                In physics and engineering, researchers engage in "creative parameter tweaking"—adjusting minor variables to produce predetermined curves and fashionable narratives.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-cyan-800 shrink-0" />
            <h2>III. The Mob-Rule Experimentalism Trap</h2>
          </div>
          <p>
            A persistent delusion in modern science is the belief that a breakthrough's validity is governed entirely by whether thousands of laboratories rush to replicate it. Mainstream experimentalists dismiss foundational theoretical frameworks if they do not spark an immediate herd-like experimental frenzy.
          </p>
          <p>
            This mob-rule experimentalism reduces science to glorified alchemy. If Isaac Newton's contemporaries had demanded that thousands of alchemists replicate his work before accepting classical mechanics, modern science would never have emerged.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-cyan-800 shrink-0" />
            <h2>IV. Conclusion: Restoring Epistemic Depth</h2>
          </div>
          <p>
            Policing Western blots with surveillance cameras or demanding mob replication cannot cure the rotting philosophical core of modern academia. Genuine scientific progress requires returning to rigorous theoretical reasoning and first-principles logic.
          </p>
        </section>
      </div>
    </article>
  );
}
