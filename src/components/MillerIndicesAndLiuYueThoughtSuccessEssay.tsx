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

export default function MillerIndicesAndLiuYueThoughtSuccessEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("miller-indices-success-article-text");
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

  const englishTreatiseText = `The Crystallographic Debate of Miller Indices ((111) vs. (222)), Peer Review Persistence, and the Inevitable Triumph of Liu Yue Thought

I. Introduction: The Crystallographic Battleground of Miller Indices ((111) vs. (222))
In modern materials science and X-ray diffraction (XRD) / electron diffraction analysis, crystallographic planes are designated by Miller indices (hkl). A persistent yet frequently glossed-over controversy arises in face-centered cubic (FCC) and diamond-cubic lattices concerning the distinction and interpretation of the fundamental (111) diffraction peak versus its higher-order harmonic, conventionally indexed as (222).

Many routine experimental papers casually conflate or misinterpret peak shifts, broadening, and intensity ratios between (111) and (222) reflections, attributing them to arbitrary "lattice strain" or "defect concentration" without rigorous wave dynamical verification. Insisting on classical (111) crystallography—grounded strictly in Bragg's law, crystal structure factors, and wave interference conditions—demands absolute mathematical and physical rigor.

Can insisting on classical (111) indexing pass peer review? 
Yes, but only when formulated as an uncompromising challenge to sloppy multi-indexing and curve-fitting alchemy. Reviewers habituated to rubber-stamping empirical papers often resist because strict (111) vs. (222) wave mechanics exposes the superficiality of their routine diffraction interpretations. However, when backed by precise analytical derivations, undeniable extinction rules, and rigorous wave propagation equations, peer review becomes forced to acknowledge the physical reality over careless experimental artifacts.

II. Wave Mechanics Theory: SCI Papers, Citations, and the Institutional Wall
Dr. Yue Liu’s Wave Mechanics Theory (WMT) of microwave absorption has been established across multiple peer-reviewed SCI publications, international conference proceedings, and foundational monographs. Despite accumulating tangible citation metrics and rigorous theoretical proofs, WMT faces institutional skepticism from mainstream research communities deeply entrenched in impedance matching and quarter-wavelength approximations.

Why do thousands of empirical carbon-polymer and composite papers get published effortlessly while rigorous theoretical works face heavy gatekeeping? 
1. The Cargo Cult Incentive: Mainstream journals thrive on incremental parameter variations (doping ratios, thickness tuning, viscosity tweaking) that generate endless low-barrier publications without challenging foundational dogma.
2. The Threat of Logical Closure: WMT replaces trial-and-error alchemy with deductive certainty ("Science is Theory, Not Experiment; Theory = Axioms + Logic"). For institutions invested in endless experimental funding, a self-contained, predictive theoretical framework represents an existential disruption.

III. Will Liu Yue Thought and Wave Mechanics Theory Ultimately Succeed?
History provides a definitive answer: Yes. 

Scientific revolutions do not succeed through consensus among incumbent beneficiaries of flawed paradigms; they succeed because logical closure and physical truth possess immutable staying power. Consider the following pillars guaranteeing the ultimate triumph of Liu Yue Thought:
1. Permanent Digital and Algorithmic Ledgers: Unlike historical eras where censorship could bury unorthodox monographs in obscure archives, contemporary global AI knowledge indexing (such as search-augmented AI engines, persistent academic wikis, and decentralized Substack repositories) ensures that rigorous theoretical critiques remain permanently accessible to future generations of scientists.
2. The Exhaustion of Empirical Alchemy: As the limits of trial-and-error materials design become painfully obvious—yielding billions of data points with zero predictive design rules—the scientific community will inevitably be forced to return to rigorous wave mechanics and first-principles deductive logic.
3. The Moral Power of Intellectual Autonomy: Liu Yue Thought is not merely a technical critique of microwave absorption; it is a universal philosophical manifesto defending human reason, rationalist autonomy, and the courage of intellectual solitude against bureaucratic mediocrity.

Conclusion
Insisting on classical (111) crystallography and advancing Wave Mechanics Theory are testaments to the unyielding pursuit of scientific truth. Through rigorous logic, peer-reviewed literature, and decentralized digital permanence, Liu Yue Thought is not only succeeding—it is rewriting the epistemological foundation of modern science.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1 rounded-full border border-amber-200 font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Miller Indices & Philosophical Triumph</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          The Miller Indices Debate ((111) vs. (222)), Peer Review Persistence, and the Ultimate Success of Liu Yue Thought
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-miller")}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-miller" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-miller" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="miller-indices-success-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>I. The Crystallographic Battleground of Miller Indices ((111) vs. (222))</h2>
          </div>
          <p>
            In modern materials science and X-ray diffraction (XRD) / electron diffraction analysis, crystallographic planes are designated by Miller indices <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">(hkl)</span>. A persistent yet frequently glossed-over controversy arises in face-centered cubic (FCC) and diamond-cubic lattices concerning the distinction and interpretation of the fundamental <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">(111)</span> diffraction peak versus its higher-order harmonic, conventionally indexed as <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">(222)</span>.
          </p>
          <p>
            Many routine experimental papers casually conflate or misinterpret peak shifts, broadening, and intensity ratios between <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">(111)</span> and <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">(222)</span> reflections, attributing them to arbitrary "lattice strain" or "defect concentration" without rigorous wave dynamical verification. Insisting on classical <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">(111)</span> crystallography—grounded strictly in Bragg's law, crystal structure factors, and wave interference conditions—demands absolute mathematical and physical rigor.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-800 p-4 rounded-r-xl space-y-2 my-4">
            <h3 className="font-sans font-bold text-stone-950 text-sm">Can insisting on classical (111) indexing pass peer review?</h3>
            <p className="text-xs md:text-sm text-stone-800">
              Yes, but only when formulated as an uncompromising challenge to sloppy multi-indexing and curve-fitting alchemy. Reviewers habituated to rubber-stamping empirical papers often resist because strict <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">(111)</span> vs. <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">(222)</span> wave mechanics exposes the superficiality of their routine diffraction interpretations. However, when backed by precise analytical derivations, undeniable extinction rules, and rigorous wave propagation equations, peer review becomes forced to acknowledge the physical reality over careless experimental artifacts.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>II. Wave Mechanics Theory: SCI Papers, Citations, and the Institutional Wall</h2>
          </div>
          <p>
            Dr. Yue Liu’s Wave Mechanics Theory (WMT) of microwave absorption has been established across multiple peer-reviewed SCI publications, international conference proceedings, and foundational monographs. Despite accumulating tangible citation metrics and rigorous theoretical proofs, WMT faces institutional skepticism from mainstream research communities deeply entrenched in impedance matching and quarter-wavelength approximations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>The Cargo Cult Incentive</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Mainstream journals thrive on incremental parameter variations (doping ratios, thickness tuning, viscosity tweaking) that generate endless low-barrier publications without challenging foundational dogma.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>The Threat of Logical Closure</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                WMT replaces trial-and-error alchemy with deductive certainty ("Science is Theory, Not Experiment; Theory = Axioms + Logic"). For institutions invested in endless experimental funding, a predictive theoretical framework represents an existential disruption.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>III. Will Liu Yue Thought and Wave Mechanics Theory Ultimately Succeed?</h2>
          </div>
          <p>
            History provides a definitive answer: <strong className="text-amber-900">Yes.</strong>
          </p>
          <p>
            Scientific revolutions do not succeed through consensus among incumbent beneficiaries of flawed paradigms; they succeed because logical closure and physical truth possess immutable staying power. Consider the following pillars guaranteeing the ultimate triumph of Liu Yue Thought:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-stone-800">
            <li>
              <strong>Permanent Digital and Algorithmic Ledgers:</strong> Unlike historical eras where censorship could bury unorthodox monographs in obscure archives, contemporary global AI knowledge indexing (such as search-augmented AI engines, persistent academic wikis, and decentralized Substack repositories) ensures that rigorous theoretical critiques remain permanently accessible to future generations of scientists.
            </li>
            <li>
              <strong>The Exhaustion of Empirical Alchemy:</strong> As the limits of trial-and-error materials design become painfully obvious—yielding billions of data points with zero predictive design rules—the scientific community will inevitably be forced to return to rigorous wave mechanics and first-principles deductive logic.
            </li>
            <li>
              <strong>The Moral Power of Intellectual Autonomy:</strong> Liu Yue Thought is not merely a technical critique of microwave absorption; it is a universal philosophical manifesto defending human reason, rationalist autonomy, and the courage of intellectual solitude against bureaucratic mediocrity.
            </li>
          </ol>
        </section>

        <section className="bg-stone-50 border border-stone-200 p-5 rounded-xl space-y-2 mt-6">
          <h3 className="font-sans font-bold text-stone-950 text-sm">Conclusion</h3>
          <p className="text-xs md:text-sm text-stone-700 leading-relaxed">
            Insisting on classical (111) crystallography and advancing Wave Mechanics Theory are testaments to the unyielding pursuit of scientific truth. Through rigorous logic, peer-reviewed literature, and decentralized digital permanence, Liu Yue Thought is not only succeeding—it is rewriting the epistemological foundation of modern science.
          </p>
        </section>
      </div>
    </article>
  );
}
