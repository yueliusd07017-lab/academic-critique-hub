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
  FlaskConical,
} from "lucide-react";

export default function AlchemyVsTheoreticalReasoningEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("alchemy-reasoning-article-text");
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

  const englishTreatiseText = `Alchemy vs. Theoretical Reasoning: Why Modern Science Rejects Logic for Parameter-Tweaking Experiments and How This Exposes the Terminal Crisis of Academic Evaluation

I. Introduction: The Fallacy of "Replication as the Sole Arbitrator of Truth"
A common refrain among modern commentators and experimentalists is that a scientific theory's validity depends entirely on whether thousands of laboratories rush to replicate its experiments. Under this metric, if a foundational theoretical critique—such as the Wave Mechanics Theory of microwave absorption—receives silence from experimentalists tweaking parameters, mainstream apologists claim the theory is meaningless: "Whether your theory exists or not, we still run experiments and publish in top journals."
As Dr. Yue Liu rigorously demonstrates, this superficial dismissal exposes the deepest terminal illness of contemporary science: the absolute abandonment of theoretical reasoning in favor of modern alchemy.

II. Modern Parameter-Tweaking as High-Tech Alchemy
As discussed in recent analyses of academic paper mills and experimental practices, modern physical and biological publications largely consist of incremental parameter adjustments, curve-fitting, and arbitrary narrative storytelling:
- In physics and engineering, researchers tweak material thickness or composition, run routine simulations, and generate impedance matching curves without grasping underlying boundary value wave mechanics.
- In biology, authors adjust experimental dosages and manipulate Western blot figures.
- Because these papers require zero first-principles logical reasoning, thousands of labs can easily reproduce or manufacture similar incremental variations.

III. If Newton Had Waited for Consensus Replication
If the prevailing modern criterion—"if thousands of labs aren't trying to pick it apart, your theory has no value"—had governed the scientific revolution:
- Newtonian mechanics, Maxwellian electrodynamics, and quantum mechanics would never have been born.
- Pre-Newtonian alchemy and the phlogiston theory would have reigned supreme forever, because alchemists could endlessly run experiments and publish empirical observations with or without fundamental theoretical revolutions.
- When an entire academic establishment cares exclusively about experimental curve-fitting and refuses to engage in rigorous theoretical critique (such as evaluating Z_in vs Z_M), the silence of the herd does not invalidate the theory; it indicts the intellectual bankruptcy of the establishment.

IV. Conclusion: Restoring First-Principles Logical Rigor
Science is not a democratic popularity contest of experimental parameter-tweaking. True scientific progress requires unyielding logical思辨 (theoretical reasoning) to shatter stagnant dogmas, just as Wave Mechanics Theory shatters classical impedance matching.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-indigo-50 text-indigo-900 px-3 py-1 rounded-full border border-indigo-200 font-semibold">
            <FlaskConical className="w-3.5 h-3.5 text-indigo-700" />
            <span>Essay HAP: Alchemy vs. Theoretical Reasoning</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          Alchemy vs. Theoretical Reasoning: Why Modern Science Rejects Logic for Parameter-Tweaking Experiments and How This Exposes the Terminal Crisis of Academic Evaluation
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-alchemy-reasoning")}
            className="flex items-center gap-1.5 px-4 py-2 bg-indigo-900 hover:bg-indigo-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-alchemy-reasoning" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-alchemy-reasoning" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="alchemy-reasoning-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-indigo-800 shrink-0" />
            <h2>I. Introduction: The Fallacy of "Replication as the Sole Arbitrator of Truth"</h2>
          </div>
          <p>
            A common refrain among modern commentators and experimentalists is that a scientific theory's validity depends entirely on whether thousands of laboratories rush to replicate its experiments. Under this metric, if a foundational theoretical critique—such as the Wave Mechanics Theory of microwave absorption—receives silence from experimentalists tweaking parameters, mainstream apologists claim the theory is meaningless.
          </p>
          <p>
            As Dr. Yue Liu rigorously demonstrates, this superficial dismissal exposes the deepest terminal illness of contemporary science: the absolute abandonment of theoretical reasoning in favor of modern alchemy.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-indigo-800 shrink-0" />
            <h2>II. Modern Parameter-Tweaking as High-Tech Alchemy</h2>
          </div>
          <p>
            Modern physical and biological publications largely consist of incremental parameter adjustments, curve-fitting, and arbitrary narrative storytelling:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-800 shrink-0" />
                <span>Parameter Tweaking</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Researchers adjust material composition or biological dosages, run routine simulations, and generate curves without grasping underlying boundary value wave mechanics.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-800 shrink-0" />
                <span>Absence of Logic</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Because these papers require zero first-principles logical reasoning, thousands of labs can easily reproduce or manufacture similar incremental variations.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-indigo-800 shrink-0" />
            <h2>III. If Newton Had Waited for Consensus Replication</h2>
          </div>
          <p>
            If the prevailing modern criterion—"if thousands of labs aren't trying to pick it apart, your theory has no value"—had governed the scientific revolution, Newtonian mechanics and quantum mechanics would never have been born. Pre-Newtonian alchemy and phlogiston theory would have reigned supreme forever because alchemists could endlessly run experimental trials with or without fundamental theoretical revolutions.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-indigo-800 shrink-0" />
            <h2>IV. Conclusion: Restoring First-Principles Logical Rigor</h2>
          </div>
          <p>
            Science is not a democratic popularity contest of experimental parameter-tweaking. True scientific progress requires unyielding logical思辨 (theoretical reasoning) to shatter stagnant dogmas, just as Wave Mechanics Theory shatters classical impedance matching.
          </p>
        </section>
      </div>
    </article>
  );
}
