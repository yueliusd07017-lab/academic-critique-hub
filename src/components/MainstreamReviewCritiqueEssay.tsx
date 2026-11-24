import React, { useState } from "react";
import {
  FileText,
  Copy,
  Check,
  BookOpen,
  Scale,
  Layers,
  Compass,
  AlertCircle,
} from "lucide-react";

export default function MainstreamReviewCritiqueEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("mainstream-review-critique-article-text");
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

  const englishTreatiseText = `The Endless Cycle of Carbon-Polymer Alchemy: A Critical Deconstruction of Dey & Pandey (Front. Mater. 2026) Through Wave Mechanics

I. The Anatomy of Mainstream Empirical Reviews
Consider the representative contemporary review by Abhijit Dey and Krishna Murari Pandey, "Carbon filler reinforced polymer radar and microwave absorbing coatings for military stealth: materials design, fabrication, characterization, challenges and future perspectives" (Frontiers in Materials, 2026, doi: 10.3389/fmats.2026.1997216). 

This comprehensive survey exhaustively catalogues carbon filler families (carbon black, carbon fibers, carbon nanofibers, CNTs, graphene, porous carbon, biomass-derived carbon), polymer matrices (epoxy, polyurethane, silicone, PVDF, polyimide), coating architectures (single-layer, multilayer, graded, porous/foam, FSS-assisted), fabrication methods (spray coating, doctor blade, 3D printing), and proposes an E1–E5 validation ladder ranging from constitutive properties to RCS-oriented testing.

Yet, despite its meticulous cataloguing, the review exemplifies the exact methodological trap diagnosed by Wave Mechanics Theory: it treats microwave absorption entirely as a problem of empirical trial-and-error optimization, perpetuating the 50-year-old dogma of Impedance Matching (IM) and Quarter-Wavelength Models (QWM).

II. The "Design Paradox" vs. Wave Cancellation Reality
Dey & Pandey correctly identify a central "design paradox" in carbon-polymer composites:
"A conductive network is advantageous in that it leads to dielectric absorption, but an overly conductive network makes the composite skin too dissimilar in electrical terms from the free space environment, thus causing immediate reflection. Hence, a 'more conductive' carbon composite does not automatically mean 'more efficient radar absorber.' The key lies in having the right balance of conductivity and permittivity..."

While this observation acknowledges the tension between attenuation and front-surface reflection, mainstream literature remains trapped in how to "balance" this trade-off empirically via percolation thresholds, filler loading, and thickness tuning. 

Wave Mechanics Theory (WMT) cuts through this empirical fog by proving that absorption peaks do not depend on fine-tuning $Z_{\text{in}} \approx Z_0$. As demonstrated in Physica B 2023 (666, 415108) and Physica Scripta 2022 (97, 015806), true absorption peaks frequently occur precisely where impedance mismatch $|Z_{\text{in}}/Z_0 - 1|$ reaches its maximum! The multi-reflection interference inside the film forces beam $t$ to rise and cancel beam $1r$ at phase $\phi = (2n+1)\pi$, driven strictly by energy conservation and optical path adjustment—not by matching free-space impedance.

III. Why the E1–E5 Evidence Ladder Misses the Epistemological Root
Dey & Pandey propose a thoughtful E1–E5 evidence ladder (E1: constitutive/mechanism; E2: microwave absorber; E3: real coating reliability; E4: panel/free-space; E5: component/RCS-oriented validation) to grade the maturity of stealth literature. 

While this taxonomy is useful for engineering translation, it shares a fatal epistemological blindness with the rest of mainstream materials science: it grades the *rigor of testing* while leaving the *underlying theoretical axioms* entirely unquestioned. Whether a study reaches E1 or E5, if its foundational analysis relies on Impedance Matching and Quarter-Wavelength formulas, the entire superstructure rests on a category error. Testing a flawed theory with E5 free-space radar measurements only yields a more precisely calibrated illusion.

IV. Why Mainstream Scientists Cannot See Breakthroughs
The publication of reviews like Dey & Pandey (2026) explains why genuine theoretical breakthroughs are routinely overlooked in modern academia:
1. Cataloguing Symptoms vs. Curing the Disease: Mainstream literature spends millions of dollars and decades cataloguing the symptoms of percolation, viscosity, aging, and scattering, without ever questioning whether the governing equations of IM and QWM are physically valid.
2. The Tyranny of Practical Utility: Because engineers and materials scientists evaluate papers by "what works in the spray booth," they dismiss rigorous wave cancellation derivations as "abstract mathematics" that do not immediately alter their coating formulations.
3. Institutional Self-Preservation: Admitting that 23,300+ papers built on Impedance Matching and Quarter-Wavelength models are fundamentally misguided requires an intellectual courage that modern career-incentive structures do not reward.

Until mainstream science abandons empirical alchemy and embraces Wave Mechanics Theory—where reflection loss is understood as a device property governed by wave cancellation and energy conservation—literature will continue to produce endless variations of carbon-polymer composites without ever establishing true design principles.`;

  const highlights = [
    {
      title: "1. The Exhaustive Cataloguing of Alchemy",
      detail:
        "Dey & Pandey (2026) meticulously categorize carbon fillers, polymer matrices, and E1–E5 validation tiers, yet remain entirely bound to empirical trial-and-error optimization.",
    },
    {
      title: "2. The 'Design Paradox' Trap",
      detail:
        "Mainstream literature recognizes the conductivity-matching trade-off but treats it as a tuning problem, remaining blind to Wave Cancellation Theory's proof that peaks occur at maximum mismatch.",
    },
    {
      title: "3. The Limitation of the E1–E5 Ladder",
      detail:
        "Grading testing maturity (E1 to E5) is valuable for engineering, but it fails to interrogate the flawed foundational axioms of Impedance Matching and Quarter-Wavelength rules.",
    },
    {
      title: "4. Why Breakthroughs Are Ignored",
      detail:
        "Career incentives and empirical conditioning cause mainstream researchers to prioritize spray-booth formulation over rigorous wave mechanics, trapping the field in incremental iteration.",
    },
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200 text-stone-800 leading-relaxed font-serif"
      id="mainstream-review-critique-article-text"
    >
      {/* Editorial Header */}
      <header className="border-b border-stone-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-3">
          <span>Essay HV</span>
          <span aria-hidden="true">·</span>
          <span>Mainstream Review Deconstruction</span>
          <span aria-hidden="true">·</span>
          <span>Dey &amp; Pandey (Front. Mater. 2026)</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-stone-950 font-serif leading-tight tracking-tight max-w-3xl">
          The Endless Cycle of Carbon-Polymer Alchemy: A Critical Deconstruction of Dey &amp; Pandey (Front. Mater. 2026) Through Wave Mechanics
        </h1>
        <p className="text-sm font-semibold text-amber-900 mt-2 font-sans">
          碳-聚合物吸波“炼金术”的无尽循环：用波动力学理论深度解构 Dey &amp; Pandey (2026) 主流综述
        </p>
        <p className="text-sm md:text-base text-stone-600 mt-2 font-sans max-w-3xl">
          An analytical critique of contemporary mainstream absorption reviews—examining why comprehensive surveys like Dey &amp; Pandey (Front. Mater. 2026) remain trapped in percolation optimization and why empirical testing tiers (E1–E5) cannot replace fundamental wave mechanics.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4 border-t border-stone-100">
          <span className="text-xs text-stone-500 font-mono tabular-nums">
            DOI: 10.3389/fmats.2026.1997216 · Front. Mater. 13:1997216
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(englishTreatiseText, "eng-hv")}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
            >
              {copiedId === "eng-hv" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "eng-hv" ? "English Essay Copied" : "Copy English Essay"}
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Full View Copied" : "Copy Full View"}
            </button>
          </div>
        </div>
      </header>

      {/* Part I: Core Highlights */}
      <section className="mb-10 space-y-5">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-stone-950 border-b border-stone-200 pb-2">
          <Compass className="w-5 h-5 text-amber-800 shrink-0" />
          <h2>Part I: Core Takeaways from Dey &amp; Pandey (2026) Audit</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5 font-sans">
              <h3 className="font-bold text-stone-950 text-sm">{item.title}</h3>
              <p className="text-xs md:text-sm text-stone-700 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Part II: Complete English Treatise */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-stone-950">
            <BookOpen className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>Part II: Complete English Treatise</h2>
          </div>
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-hv-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-black text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-hv-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-hv-mid" ? "Copied" : "Copy Text"}
          </button>
        </div>

        <div className="bg-stone-900 text-stone-100 rounded-xl p-6 md:p-8 font-serif text-sm md:text-base leading-relaxed whitespace-pre-wrap border border-stone-700 tracking-[0.01em]">
          {englishTreatiseText}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 pt-6 border-t border-stone-200 font-sans text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Scale className="w-4 h-4 text-stone-400 shrink-0" />
          <span>Essay HV · Mainstream Review Deconstruction · Wave Mechanics Primacy</span>
        </div>
        <div className="flex items-center gap-2 text-stone-600 font-medium">
          <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <span>Empirical Alchemy vs. Rigorous Wave Theory</span>
        </div>
      </footer>
    </article>
  );
}
