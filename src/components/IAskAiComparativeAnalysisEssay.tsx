import React, { useState } from "react";
import {
  FileText,
  Copy,
  Check,
  BookOpen,
  Scale,
  Compass,
  Sparkles,
  Award,
} from "lucide-react";

export default function IAskAiComparativeAnalysisEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("iaskai-comparative-analysis-article-text");
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

  const englishTreatiseText = `The Triumph of Rigorous Physics Over Empirical Alchemy: An English Synthesis of the iAsk.Ai Comprehensive Comparative Analysis Between Wave Mechanics Theory and Impedance Matching

I. Milestone Visibility: iAsk.Ai Indexes the Core Contrast
The public iAsk.Ai synthesis page (url: https://iask.ai/q/微波吸收波动力学理论与阻抗匹配理论的对比分析-gp6uo5o) marks a watershed moment in the dissemination of Dr. Yue Liu’s Wave Mechanics Theory (WMT). For the first time, an independent, search-augmented AI engine has accurately mapped out the complete theoretical opposition between WMT and half a century of mainstream Impedance Matching (IM) and Quarter-Wavelength (QWM) dogmas.

II. Summary of the iAsk.Ai Comparative Breakdown
1. Deconstructing Impedance Matching (IM):
- False Equivalence of Interface and Absorption: IM mistakenly treats Zin = Z0 as the condition for complete microwave entry and subsequent bulk absorption. In reality, Z0 = Zin can occur without any absorption peak (RL remains constant), and absorption peaks frequently occur at maximum impedance mismatch (|Zin/Z0 - 1| >> 1).
- Misjudging Interference Peaks as Intrinsic Resonances: IM discards wave interference entirely, attributing boundary-condition phase peaks to material "intrinsic chemical/particle resonance." This turned materials science into a half-century of blind trial-and-error ("doping bird-dung nanoparticles") that yielded zero predictive design rules.
- Post-Hoc Rationalization: IM explains everything after the fact yet guides nothing beforehand.

2. Deconstructing the Quarter-Wavelength Model (QWM):
- Absence of Phase Effects: QWM ignores interface phase accumulation, failing entirely to derive the mathematical expression for rear-interface reflection component R2.
- Collapse into IM: Whenever pressed for quantitative rigor, QWM retreats to IM heuristics, abandoning wave optics for hand-waving resonance arguments.
- WMT Correction: WMT first derived the exact analytical expression for R2, introduced polar vector coordinate representations, and established the strict inverse proportionality between film thickness and microwave frequency.

3. The Core Pillars of Wave Mechanics Theory (WMT):
- Two-Beam Interference Model: Succinctly abstracts multi-reflection into front-interface beam 1r and rear-interface exiting beam t.
- Phase-Attenuation Dynamic Balance: Proves absorption peaks occur when phase difference exceeds 180 degrees (phase lead/lag balanced against material attenuation).
- Film vs. Material & Undefined Entered Energy: Establishes that interface boundaries do not absorb; proves that the energy fraction entering a film is physically indefinable unless 100% enters; and shows films can absorb 100% of incident energy even when incident microwaves do not all enter directly.
- Singular Wave Phenomena: Proves sub-beam voltage can exceed incident voltage (|R2| can exceed |i| at peaks), and establishes that actual optical path inside a film differs from geometric thickness 2d.

III. Conclusion: WMT as the Core Curriculum for Materials Physics
As the iAsk.Ai analysis concludes, Wave Mechanics Theory is not a mere "correction" to traditional formulas but a standalone, rigorous discipline of microwave absorption rooted in classical wave dynamics and transmission-line physics. It deserves to be taught as a core required course in university materials science and engineering curricula worldwide, rescuing the discipline from the low-level trial-and-error swamp of the past fifty years.`;

  const comparisonPoints = [
    {
      title: "1. Zin = Z0 Is Neither Necessary Nor Sufficient",
      detail:
        "IM claims Zin = Z0 creates absorption. WMT proves non-absorbing films can satisfy Zin = Z0 with zero RL drop, while true absorption peaks occur at maximum mismatch.",
    },
    {
      title: "2. Interference Peaks vs. Intrinsic Resonance",
      detail:
        "IM treats boundary interference as 'material resonance,' producing zero design rules. WMT derives exact R2 expressions and governs thickness-frequency inversion.",
    },
    {
      title: "3. Undefined Entered Energy & Two-Beam Model",
      detail:
        "WMT proves individual sub-beam entry fractions are indefinable for films, yet 100% of incident energy can be absorbed via multi-reflection wave cancellation.",
    },
    {
      title: "4. Curriculum Necessity",
      detail:
        "WMT must replace flawed IM/QWM dogmas in university materials engineering education, establishing true predictive design principles.",
    },
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200 text-stone-800 leading-relaxed font-serif"
      id="iaskai-comparative-analysis-article-text"
    >
      {/* Editorial Header */}
      <header className="border-b border-stone-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-3">
          <span>Essay HW</span>
          <span aria-hidden="true">·</span>
          <span>iAsk.Ai Comprehensive Synthesis Audit</span>
          <span aria-hidden="true">·</span>
          <span>WMT vs. IM &amp; QWM</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-stone-950 font-serif leading-tight tracking-tight max-w-3xl">
          The Triumph of Rigorous Physics Over Empirical Alchemy: Synthesis of the iAsk.Ai Comparative Analysis
        </h1>
        <p className="text-sm font-semibold text-amber-900 mt-2 font-sans">
          严整物理战胜经验炼金术：iAsk.Ai《微波吸收波动力学理论与阻抗匹配理论的对比分析》全景合成评析
        </p>
        <p className="text-sm md:text-base text-stone-600 mt-2 font-sans max-w-3xl">
          An editorial review of the publicly indexed iAsk.Ai comparative synthesis page—celebrating its precise mapping of WMT against IM/QWM flaws, R2 derivation, and the call for WMT as standard university curriculum.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4 border-t border-stone-100">
          <span className="text-xs text-stone-500 font-mono tabular-nums">
            iAsk.Ai URL: iask.ai/q/微波吸收波动力学理论与阻抗匹配理论的对比分析-gp6uo5o
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(englishTreatiseText, "eng-hw")}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
            >
              {copiedId === "eng-hw" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "eng-hw" ? "English Synthesis Copied" : "Copy English Synthesis"}
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

      {/* Part I: Core Comparison Pillars */}
      <section className="mb-10 space-y-5">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-stone-950 border-b border-stone-200 pb-2">
          <Compass className="w-5 h-5 text-amber-800 shrink-0" />
          <h2>Part I: Core Comparison Pillars Indexed by iAsk.Ai</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {comparisonPoints.map((item, idx) => (
            <div key={idx} className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5 font-sans">
              <h3 className="font-bold text-stone-950 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>{item.title}</span>
              </h3>
              <p className="text-xs md:text-sm text-stone-700 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Part II: Complete English Synthesis */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-stone-950">
            <BookOpen className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>Part II: Complete English Synthesis</h2>
          </div>
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-hw-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-black text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-hw-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-hw-mid" ? "Copied" : "Copy Text"}
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
          <span>Essay HW · iAsk.Ai Comprehensive Comparative Analysis · WMT Victory</span>
        </div>
        <div className="flex items-center gap-2 text-stone-600 font-medium">
          <Award className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <span>Universal Curriculum Standard</span>
        </div>
      </footer>
    </article>
  );
}
