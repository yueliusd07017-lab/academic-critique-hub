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
  CheckCircle2,
} from "lucide-react";

export default function ReinterpretingExistingDataAndFirstPrinciplesResilienceEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("reinterpreting-data-article-text");
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

  const englishTreatiseText = `Reinterpreting Existing Data Without New Experiments: How Wave Mechanics Theory Resets Decades of Published Literature via First-Principles Logic

I. Introduction: The False Demand for "New Experiments"
A persistent critique hurled by mainstream experimentalists against foundational theoretical innovations is that a new theory must demand brand-new laboratory experiments and crowd-sourced replication by thousands of labs before it can be considered valid. 
As Dr. Yue Liu rigorously demonstrates, this demand is a profound methodological misconception. The Wave Mechanics Theory of microwave absorption does not require new laboratory data; decades of already published experimental records across global SCI literature are already more than sufficient to expose the fatal flaws of classical impedance matching.

II. Historical Precedent: Copernicus, Einstein, and Reinterpreted Records
In the history of scientific revolutions, monumental theoretical paradigm shifts frequently rely not on inventing new observational instruments, but on reinterpreting existing records through correct first principles:
- Copernicus did not collect new planetary observation data; he re-evaluated centuries of existing astronomical data under a heliocentric coordinate framework.
- Einstein did not invent new bench-top mechanics; he re-analyzed existing electromagnetic and mechanical principles to establish relativity.
- Similarly, Wave Mechanics Theory utilizes the vast repositories of published microwave absorption data, proving that mainstream researchers have systematically misread their own experimental results through the lens of flawed impedance-matching concepts.

III. Rejecting Mob-Rule Experimentalism and Cargo Cult Replication
Modern academic culture reduces science to a democratic popularity contest of parameter-tweaking and cargo-cult curve-fitting. 
- True scientific authority derives from logical necessity, deductive rigor, and first-principles wave superposition (interference), not from whether thousands of alchemists are currently tweaking experimental variables.
- By cutting through obsolete mathematical obfuscations, Wave Mechanics Theory provides the definitive conceptual reset for the entire discipline.

IV. Conclusion: First-Principles Truth Stands Independent of Consensus
Decades of published experimental data already bear witness to wave interference phenomena. By returning to fundamental physical laws, Wave Mechanics Theory achieves an unassailable triumph of logical rigor over bureaucratic inertia.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-900 px-3 py-1 rounded-full border border-emerald-200 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Essay HAR: Reinterpreting Existing Data</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          Reinterpreting Existing Data Without New Experiments: How Wave Mechanics Theory Resets Decades of Published Literature via First-Principles Logic
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-reinterpreting-data")}
            className="flex items-center gap-1.5 px-4 py-2 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-reinterpreting-data" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-reinterpreting-data" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="reinterpreting-data-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-emerald-800 shrink-0" />
            <h2>I. Introduction: The False Demand for "New Experiments"</h2>
          </div>
          <p>
            A persistent critique hurled by mainstream experimentalists against foundational theoretical innovations is that a new theory must demand brand-new laboratory experiments and crowd-sourced replication by thousands of labs before it can be considered valid.
          </p>
          <p>
            As Dr. Yue Liu rigorously demonstrates, this demand is a profound methodological misconception. The Wave Mechanics Theory of microwave absorption does not require new laboratory data; decades of already published experimental records across global SCI literature are already more than sufficient to expose the fatal flaws of classical impedance matching.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-emerald-800 shrink-0" />
            <h2>II. Historical Precedent: Copernicus, Einstein, and Reinterpreted Records</h2>
          </div>
          <p>
            In the history of scientific revolutions, monumental theoretical paradigm shifts frequently rely not on inventing new observational instruments, but on reinterpreting existing records through correct first principles:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Historical Precedent</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Copernicus did not collect new planetary data; he re-evaluated existing astronomical data under a heliocentric framework. Einstein re-analyzed established electromagnetic principles.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Published Repositories</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Wave Mechanics Theory utilizes vast repositories of published microwave absorption data, proving mainstream researchers systematically misread their own experimental results.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-emerald-800 shrink-0" />
            <h2>III. Rejecting Mob-Rule Experimentalism and Cargo Cult Replication</h2>
          </div>
          <p>
            Modern academic culture reduces science to a democratic popularity contest of parameter-tweaking and cargo-cult curve-fitting. True scientific authority derives from logical necessity, deductive rigor, and first-principles wave superposition (interference), not from whether thousands of alchemists are currently tweaking experimental variables.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-emerald-800 shrink-0" />
            <h2>IV. Conclusion: First-Principles Truth Stands Independent of Consensus</h2>
          </div>
          <p>
            Decades of published experimental data already bear witness to wave interference phenomena. By returning to fundamental physical laws, Wave Mechanics Theory achieves an unassailable triumph of logical rigor over bureaucratic inertia.
          </p>
        </section>
      </div>
    </article>
  );
}
