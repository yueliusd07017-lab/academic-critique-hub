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
  Theater,
} from "lucide-react";

export default function MakeshiftTroupeAndExpertIncompetenceEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("makeshift-troupe-article-text");
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

  const englishTreatiseText = `The Makeshift Troupe and Expert Incompetence: Why Top-Tier Metrics Mask Elementary Theoretical Blunders and Institutional Spectacle

I. Introduction: Professor Yang Feng’s Epiphany and the Academic "Makeshift Troupe"
As articulated by Professor Yang Feng of Shanghai Jiao Tong University, modern academia frequently operates not as a pristine temple of pure truth, but as a "makeshift troupe" (草台班子) driven by manufactured prestige, bureaucratic theatrics, and self-serving alliances. 
When researchers transition from viewing science as naive outsiders (seeing mountains as mountains) to navigating it as internal participants, they encounter a bewildering landscape of superficial performance, reciprocal patronage, and entrenched conceptual blunders.

II. Elementary Theoretical Blunders in High-Impact Literature
A startling paradox of modern high-impact (SCI) publishing is the routine survival of undergraduate-level errors across prestigious journals:
- Impedance Conflation: Confusing input impedance (Z_in) with the characteristic medium impedance (Z_M).
- Wave Phenomena Confusion: Conflating standing waves with forward-propagating traveling waves, or defining reflection loss (RL) as the superposition of incident and reflected fields rather than front-interface power ratios.
- Extrinsic Material Parameters: Treating complex permittivity (epsilon_r) and permeability (mu_r) as functions of sample thickness d.
- Crystallographic Basis Inversion: Conflating diamond lattice inequivalent carbon sites or misinterpreting Miller indices like (111) vs (222).
Despite these fundamental violations, authors publishing such papers enjoy elite career advancement, top-tier grants, and prestigious professorships.

III. The Illusion of Administrative Confidence
Why do experts holding weak theoretical foundations exhibit absolute confidence? Because their evaluative standards are decoupled from physical reality:
- They measure success through proxy metrics: Journal Impact Factors, National Natural Science Foundation grants, Level-2 professorship titles, and unanimous peer-review voting.
- As one senior review expert candidly instructed a research administrator: "We rank them, and if anyone complains, tell them to see me." 

IV. Conclusion: Feynman’s Reality vs. The Makeshift Troupe
Science cannot be fooled by administrative decrees or theatrical consensus. True scholarship requires adhering to Richard Feynman's standard—where objective physical reality takes precedence over institutional public relations and bureaucratic convenience.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-indigo-50 text-indigo-900 px-3 py-1 rounded-full border border-indigo-200 font-semibold">
            <Theater className="w-3.5 h-3.5 text-indigo-700" />
            <span>Essay HAK: The Makeshift Troupe & Incompetence</span>
          </span>
          <span>Author: Dr. Yue Liu & Prof. Yang Feng Insights</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          The Makeshift Troupe and Expert Incompetence: Why Top-Tier Metrics Mask Elementary Theoretical Blunders and Institutional Spectacle
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-makeshift")}
            className="flex items-center gap-1.5 px-4 py-2 bg-indigo-900 hover:bg-indigo-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-makeshift" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-makeshift" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="makeshift-troupe-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-indigo-800 shrink-0" />
            <h2>I. Introduction: Professor Yang Feng’s Epiphany and the Academic "Makeshift Troupe"</h2>
          </div>
          <p>
            As articulated by Professor Yang Feng of Shanghai Jiao Tong University, modern academia frequently operates not as a pristine temple of pure truth, but as a <span className="font-semibold text-indigo-950">"makeshift troupe"</span> (草台班子) driven by manufactured prestige, bureaucratic theatrics, and self-serving alliances.
          </p>
          <p>
            When researchers transition from viewing science as naive outsiders (seeing mountains as mountains) to navigating it as internal participants, they encounter a bewildering landscape of superficial performance, reciprocal patronage, and entrenched conceptual blunders.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-indigo-800 shrink-0" />
            <h2>II. Elementary Theoretical Blunders in High-Impact Literature</h2>
          </div>
          <p>
            A startling paradox of modern high-impact (SCI) publishing is the routine survival of undergraduate-level errors across prestigious journals:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-800 shrink-0" />
                <span>Electromagnetic Conflations</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Confusing input impedance (Z_in) with characteristic medium impedance (Z_M), treating standing waves as traveling waves, and modeling intrinsic constitutive parameters as thickness functions.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-800 shrink-0" />
                <span>Crystallographic Flaws</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Conflating diamond lattice inequivalent carbon sites or misinterpreting Miller index reflections such as (111) vs (222).
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-indigo-800 shrink-0" />
            <h2>III. The Illusion of Administrative Confidence</h2>
          </div>
          <p>
            Why do experts holding weak theoretical foundations exhibit absolute confidence? Because their evaluative standards are decoupled from physical reality. They measure success through proxy metrics (Impact Factors, national grants, senior professorship titles, and unanimous peer-review voting) rather than logical rigor.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-indigo-800 shrink-0" />
            <h2>IV. Conclusion: Feynman’s Reality vs. The Makeshift Troupe</h2>
          </div>
          <p>
            Science cannot be fooled by administrative decrees or theatrical consensus. True scholarship requires adhering to Richard Feynman's standard—where objective physical reality takes precedence over institutional public relations and bureaucratic convenience.
          </p>
        </section>
      </div>
    </article>
  );
}
