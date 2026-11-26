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
  FileX,
} from "lucide-react";

export default function CreativeErrorsAndEditorialGaslightingEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("creative-errors-article-text");
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

  const englishTreatiseText = `"Creative" Errors and Editorial Gaslighting: Why Peer Review Gatekeepers Defend Undergraduate-Level Blunders Instead of Correcting Them

I. Introduction: The Myth of the "Overburdened" Peer Review System
When foundational, undergraduate-level conceptual errors surface in prestigious journals like Nature or specialized SCI outlets, mainstream apologists frequently excuse the failure as the result of an "overburdened" peer review system. 
As Dr. Yue Liu rigorously exposes, this is a profound misdiagnosis. The persistence of basic blunders is not caused by fatigue; it is maintained by institutional gatekeeping, editorial incompetence, and active resistance to self-correction.

II. The Catalog of "Creative" Scientific Errors
In metric-driven publishing, researchers constantly invent "creative" ways to violate basic physical laws under the guise of novelty:
- Impedance Swapping: Creatively substituting Z_in for Z_M when discussing media properties, and Z_M for Z_in when discussing films.
- Thickness-Dependent Permittivity: Repeatedly publishing claims that complex permittivity is an extrinsic function of sample thickness d.
- Reflection Loss Mischaracterization: Claiming that Reflection Loss (RL) is characterized by the direct superposition of counter-propagating incident and total reflected waves (standing waves), whereas RL is actually determined by comparing the incident wave against the coherent superposition of the co-directional reflected waves originating from the front and back parallel interfaces of the film.
- Standing-Wave Confusion: Creatively confusing standing waves inside lossy layers with unhindered propagating waves.
- Crystallographic Absurdities: Claiming that all carbon atoms in a diamond lattice possess indistinguishable crystallographic environments.

III. Editorial Gaslighting and the Burden of Private Communication
When independent critics submit rigorous refutations to correct these fatal errors, elite journals routinely engage in institutional gaslighting:
- Editors and reviewers—unable to grasp basic undergraduate physics—reject correction manuscripts out of hand.
- Instead of evaluating mathematical derivations, journals shift the burden onto the critic, demanding that they first "communicate privately with the original authors."
- This bureaucratic loop shields compromised authors and protects high-impact brand prestige at the expense of scientific truth.

IV. Conclusion: The Collapse of Institutional Self-Correction
The refusal of elite journals to process basic error corrections proves that modern academic publishing has abandoned first-principles truth in favor of administrative prestige. Genuine scientific progress requires bypassing these corrupted gatekeepers entirely.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-rose-50 text-rose-900 px-3 py-1 rounded-full border border-rose-200 font-semibold">
            <FileX className="w-3.5 h-3.5 text-rose-700" />
            <span>Essay HAN: "Creative" Errors & Editorial Gaslighting</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          "Creative" Errors and Editorial Gaslighting: Why Peer Review Gatekeepers Defend Undergraduate-Level Blunders Instead of Correcting Them
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-creative-errors")}
            className="flex items-center gap-1.5 px-4 py-2 bg-rose-900 hover:bg-rose-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-creative-errors" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-creative-errors" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="creative-errors-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-rose-800 shrink-0" />
            <h2>I. Introduction: The Myth of the "Overburdened" Peer Review System</h2>
          </div>
          <p>
            When foundational, undergraduate-level conceptual errors surface in prestigious journals like Nature or specialized SCI outlets, mainstream apologists frequently excuse the failure as the result of an "overburdened" peer review system.
          </p>
          <p>
            As Dr. Yue Liu rigorously exposes, this is a profound misdiagnosis. The persistence of basic blunders is not caused by fatigue; it is maintained by institutional gatekeeping, editorial incompetence, and active resistance to self-correction.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-rose-800 shrink-0" />
            <h2>II. The Catalog of "Creative" Scientific Errors</h2>
          </div>
          <p>
            In metric-driven publishing, researchers constantly invent "creative" ways to violate basic physical laws under the guise of novelty:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-800 shrink-0" />
                <span>Electromagnetic Swapping</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Creatively substituting Z_in for Z_M, treating complex permittivity as a thickness function, and misrepresenting Reflection Loss (RL) as standing-wave superposition rather than front-and-back interface reflection superposition.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-800 shrink-0" />
                <span>Wave & Lattice Absurdities</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Confusing standing waves with traveling waves and claiming all carbon atoms in a diamond lattice possess indistinguishable crystallographic environments.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-rose-800 shrink-0" />
            <h2>III. Editorial Gaslighting and the Burden of Private Communication</h2>
          </div>
          <p>
            When independent critics submit rigorous refutations to correct these fatal errors, elite journals routinely engage in institutional gaslighting. Editors and reviewers—unable to grasp basic undergraduate physics—reject correction manuscripts and demand that critics first "communicate privately with the original authors."
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-rose-800 shrink-0" />
            <h2>IV. Conclusion: The Collapse of Institutional Self-Correction</h2>
          </div>
          <p>
            The refusal of elite journals to process basic error corrections proves that modern academic publishing has abandoned first-principles truth in favor of administrative prestige. Genuine scientific progress requires bypassing these corrupted gatekeepers entirely.
          </p>
        </section>
      </div>
    </article>
  );
}
