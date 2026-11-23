import React, { useState } from "react";
import {
  Waves,
  Copy,
  Check,
  BookOpen,
  Scale,
  Layers,
  Compass,
  ArrowRightLeft,
} from "lucide-react";

export default function FilmForcedAbsorptionMechanismEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [fig1Error, setFig1Error] = useState(false);
  const [fig2Error, setFig2Error] = useState(false);

  const handleCopy = () => {
    const el = document.getElementById("film-forced-absorption-mechanism-article-text");
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

  const englishTreatiseText = `How a Film Forces Its Material to Absorb Microwaves According to Wave Interference: Decoding Fig. 1(a) and Fig. 2(b) of JMMM 2024 (593, 171850)

I. How Figure 2(b) Is Constructed: Separating Film Absorption from Equivalent Material Attenuation
To understand how a film differs fundamentally from its constituent material, consider Fig. 1(a) from Yue Liu, Ying Liu, and Michael G. B. Drew, "Wave Mechanics of Microwave Absorption in Films - Distinguishing Film from Material," Journal of Magnetism and Magnetic Materials 593 (2024) 171850:
- Beam i is the incident microwave beam striking front interface x1.
- Beam r1 is the immediate reflection at front interface x1.
- Beam fM is the total forward-propagating microwave beam inside the material (from x1 toward x2).
- Beam bM is the total backward-propagating microwave beam inside the material (from x2 toward x1).
- Beam r2 is the total beam exiting through front interface x1 back into open space (after reflection from rear interface x2), interfering with beam r1 to produce total reflection r.

How are the material attenuation curves A(M-MB) and A(M-WMB) in Fig. 2(b) computed alongside the film absorption curves A(MB) and A(WMB)?
1. From wave interference at x1-, the required intensity of exiting beam r2(x1-) is fixed.
2. From the transmission coefficient of front interface x1, the intensity of the internal backward total beam bM at x1+ is determined directly from r2(x1-).
3. Imagine microwaves propagating through an infinitely long block of the exact same material (eliminating rear-interface feedback): define d1 as the propagation path length required for the forward beam fM in that infinite material to attenuate until its intensity equals the intensity of bM at x1+.
4. In Fig. 2(b), the material absorption/attenuation curves—A(M-MB) for the metal-backed case and A(M-WMB) for the case without metal backing—are evaluated from this equivalent material optical path d1. By contrast, the film absorption curves are computed directly from transmission-line / scattering theory: A(MB) = 1 - |RL|^2 for the metal-backed film, and A(WMB) = 1 - |s11|^2 - |s21|^2 for the film without metal backing.

II. The Core Mechanism: How the Film Forces the Material to Absorb via Energy Conservation
Crucially, d1 is NOT equal to twice the film thickness (d1 != 2d), nor does the actual multi-reflection path length traversed by microwaves inside the film equal d1.
Why? Because if the wave returning to x1+ still carries nonzero intensity, reflection cannot terminate—the wave continues bouncing back and forth between front interface x1 and rear interface x2. In physical reality, the very last constituent sub-beam arriving at x1+ must vanish to zero intensity.

Thus, the true optical path length executed by the constituent sub-beams bouncing inside the film is governed strictly by energy conservation: under the constraint that total exiting beam r2 fulfills the wave-interference requirement with r1, internal reflections must continue until the final sub-beam at x1+ drops to zero:
- Consider the perfect absorption peak (RL -> -infinity, A = 1): Even though incident microwaves do not "all enter" at the front interface, 100% of incident microwave energy MUST be absorbed by the material before internal bouncing ends. Only when every bit of incident energy has been dissipated does the final sub-beam at x1+ drop to zero, allowing |r2| = |r1| with opposite phase so that r1 and r2 cancel completely.
- At absorption peaks (where A(MB) rises above the material baseline A(M-MB)), the actual path length traveled by microwaves inside the film is STRICTLY GREATER than d1.
- At absorption minima (local maxima of RL, where A(MB) dips below A(M-MB)), the actual path length traveled inside the film is STRICTLY LESS than d1.
- One does not have to sum infinite sub-beams manually to track this changing path length: the mathematics of transmission-line theory automatically guarantees that the internal optical path adjusts to satisfy both energy conservation and wave interference.

III. Two Crucial Physical Corollaries Beyond Energy Conservation
A. The Energy Fraction Entering a Film Cannot Be Defined (JAP 2023, 134(4), 045304)
Because a portion of the incident wave reflects immediately at x1 as beam r1 (so not all incident microwaves enter directly), yet the metal-backed film can nonetheless absorb 100% of the total incident energy (RL -> -infinity), individual component sub-beam intensities CANNOT be mapped onto fixed fractions of incident energy entering the film. In general, for a film with two parallel interfaces, "how much incident microwave energy enters the film" is physically indefinable—a conclusion rigorously established in Ying Liu, Michael G. B. Drew, and Yue Liu, Journal of Applied Physics 134(4) (2023) 045304 (DOI: 10.1063/5.0153612). Only in special cases—such as when all incident microwaves enter the film—can the energy entering the film be determined.

B. Why Changing Thickness Shifts Every Peak: Interference Device Peaks vs. Intrinsic Resonance
To satisfy the same energy-conservation condition (the final internal sub-beam vanishing at x1+), microwaves must traverse DIFFERENT optical paths inside films of different thicknesses d. Fix the microwave frequency nu: if an absorption peak appears at a particular thickness d, changing d alters the optical path inside the film and breaks the destructive interference condition between r1 and r2—so that same frequency is NO LONGER an absorption peak at the new thickness. This provides direct, irrefutable proof that absorption peaks of films are wave-interference peaks of the film device, NOT intrinsic material resonance peaks.`;

  const mechanismPillars = [
    {
      index: "01. Defining Path d₁ for Fig. 2(b)",
      detail:
        "Interference fixes r2(x1⁻), interface transmission fixes bM(x1⁺), and d₁ is the path length an infinitely long material needs for fM to attenuate to |bM(x1⁺)|. A(M-MB) and A(M-WMB) use d₁, while A(MB) = 1 - |RL|² and A(WMB) = 1 - |s₁₁|² - |s₂₁|².",
    },
    {
      index: "02. Actual Film Path ≠ d₁ and ≠ 2d",
      detail:
        "While internal energy remains nonzero at x1⁺, reflections keep cycling. Energy conservation demands the final sub-beam vanish at x1⁺—making actual film path > d₁ at peaks and < d₁ at RL maxima.",
    },
    {
      index: "03. Entering Energy Is Undefined (JAP 2023)",
      detail:
        "Since incident microwaves do not all enter across x1 yet 100% of incident energy can be absorbed at RL → −∞, entered energy is undefined in general—determinable only in special cases such as when all incident microwaves enter.",
    },
    {
      index: "04. Thickness Dependence Proves Interference",
      detail:
        "Changing thickness d at fixed frequency alters the internal optical path needed for the last sub-beam to vanish, destroying the prior peak—proving peaks arise from interference, not intrinsic resonance.",
    },
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200 text-stone-800 leading-relaxed font-serif"
      id="film-forced-absorption-mechanism-article-text"
    >
      {/* Editorial Header */}
      <header className="border-b border-stone-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-3">
          <span>Essay HS</span>
          <span aria-hidden="true">·</span>
          <span>Wave Mechanics Mechanism</span>
          <span aria-hidden="true">·</span>
          <span>JMMM 2024, 593, 171850 &amp; JAP 2023, 134(4), 045304</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-stone-950 font-serif leading-tight tracking-tight max-w-3xl">
          How a Film Forces Its Material to Absorb Microwaves According to Wave Interference
        </h1>
        <p className="text-sm font-semibold text-amber-900 mt-2 font-sans">
          膜的微波吸收机理：膜是如何强迫材料按干涉的要求吸收微波的（解析 JMMM 2024 图1a 与 图2b 中的等价光程 d₁、能量守恒与分量定义悖论）
        </p>
        <p className="text-sm md:text-base text-stone-600 mt-2 font-sans max-w-3xl">
          A precise physical breakdown of how Fig. 2(b) is constructed from Fig. 1(a), why actual internal multi-reflection paths diverge from both 2<em>d</em> and <em>d</em><sub>1</sub>, why entered energy is undefined for films, and why thickness-dependent peaks cannot be intrinsic material resonances.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4 border-t border-stone-100">
          <span className="text-xs text-stone-500 font-mono tabular-nums">
            DOI: 10.1016/j.jmmm.2024.171850 · DOI: 10.1063/5.0153612
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(englishTreatiseText, "eng-hs")}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
            >
              {copiedId === "eng-hs" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "eng-hs" ? "English Essay Copied" : "Copy English Essay"}
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

      {/* Part I: Primary Figures from JMMM 2024, 593, 171850 */}
      <section className="mb-10 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-stone-950 border-b border-stone-200 pb-2">
          <Compass className="w-5 h-5 text-amber-800 shrink-0" />
          <h2>Part I: Primary Figures from JMMM 2024 (593, 171850)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Fig. 1(a) */}
          <figure className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3">
            <div className="text-xs font-sans font-semibold uppercase tracking-wider text-stone-500">
              Fig. 1(a) · Metal-Backed Film Architecture
            </div>
            {fig1Error ? (
              <div className="h-56 bg-stone-100 border border-stone-200 rounded-lg flex flex-col items-center justify-center text-stone-500 text-xs font-sans p-4 text-center">
                <Waves className="w-6 h-6 mb-2 text-stone-400" />
                <span>Fig. 1(a): Film with Metal Back (MB) — Beams i, r1, fM, bM, r2, r</span>
              </div>
            ) : (
              <img
                src="/assets/aistudio/image_d32c61fd.png"
                alt="Fig. 1(a) Film with metal back (MB) showing incident beam i, front reflection r1, total forward beam fM, total backward beam bM, exiting beam r2, total reflection r, thickness d, and interfaces x1 and x2"
                referrerPolicy="no-referrer"
                onError={() => setFig1Error(true)}
                className="w-full rounded-lg border border-stone-200 bg-white object-contain"
              />
            )}
            <figcaption className="text-xs font-serif text-stone-600 italic leading-relaxed">
              Fig. 1(a) — Film with metal back (MB). <em>f</em><sub>M</sub> is the total forward beam inside the material, <em>b</em><sub>M</sub> is the total backward beam inside the material, <em>r</em>1 is the reflection from front interface <em>x</em><sub>1</sub>, and <em>r</em>2 is the total beam returning into open space from the rear of the film.
            </figcaption>
          </figure>

          {/* Fig. 2(b) */}
          <figure className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3">
            <div className="text-xs font-sans font-semibold uppercase tracking-wider text-stone-500">
              Fig. 2(b) · Film Absorption vs. Equivalent Material Attenuation
            </div>
            {fig2Error ? (
              <div className="h-56 bg-stone-100 border border-stone-200 rounded-lg flex flex-col items-center justify-center text-stone-500 text-xs font-sans p-4 text-center">
                <Layers className="w-6 h-6 mb-2 text-stone-400" />
                <span>Fig. 2(b): A(MB), A(M-MB), A(WMB), and A(M-WMB) vs. d/mm</span>
              </div>
            ) : (
              <img
                src="/assets/aistudio/image_81075c62.png"
                alt="Fig. 2(b) Absorption A vs film thickness d from 0 to 20 mm comparing oscillatory film absorption A(MB) and A(WMB) against monotonic material attenuation A(M-MB) and A(M-WMB) at 12.36325 GHz"
                referrerPolicy="no-referrer"
                onError={() => setFig2Error(true)}
                className="w-full rounded-lg border border-stone-200 bg-white object-contain"
              />
            )}
            <figcaption className="text-xs font-serif text-stone-600 italic leading-relaxed tabular-nums">
              Fig. 2(b) — <em>A</em>(MB) (= 1 &minus; |<em>RL</em>|<sup>2</sup>) and <em>A</em>(WMB) (= 1 &minus; |<em>s</em><sub>11</sub>|<sup>2</sup> &minus; |<em>s</em><sub>21</sub>|<sup>2</sup>) oscillate above and below the monotonic material baselines <em>A</em>(M-MB) and <em>A</em>(M-WMB) (computed using equivalent path <em>d</em><sub>1</sub>) at &nu; = 12.36325 GHz, &epsilon;<sub>r</sub> = 4.50 &minus; 2.73<em>j</em>, &mu;<sub>r</sub> = 1.26 &minus; 0.023<em>j</em>.
            </figcaption>
          </figure>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {mechanismPillars.map((item, idx) => (
            <div key={idx} className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5 font-sans">
              <h3 className="font-bold text-stone-950 text-sm">{item.index}</h3>
              <p className="text-xs md:text-sm text-stone-700 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Part II: Core Quantitative & Physical Comparison */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-stone-950 border-b border-stone-200 pb-2">
          <ArrowRightLeft className="w-5 h-5 text-amber-800 shrink-0" />
          <h2>Part II: Optical Path Comparison — Film Peak vs. Valley</h2>
        </div>

        <div className="overflow-x-auto border border-stone-200 rounded-xl font-sans">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead className="bg-stone-100 text-stone-900 border-b border-stone-200">
              <tr>
                <th className="py-3 px-4 font-semibold">Interference Regime</th>
                <th className="py-3 px-4 font-semibold">Film vs. Material Curve in Fig. 2(b)</th>
                <th className="py-3 px-4 font-semibold">Actual Film Path vs. <em>d</em><sub>1</sub></th>
                <th className="py-3 px-4 font-semibold">Energy-Conservation Condition at <em>x</em><sub>1</sub><sup>+</sup></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 bg-white text-stone-700 tabular-nums">
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-950">Absorption Peak (<em>RL</em> &rarr; &minus;&infin;)</td>
                <td className="py-3 px-4"><em>A</em>(MB) &gt; <em>A</em>(M-MB) (peaks at 1.0)</td>
                <td className="py-3 px-4 font-mono">Film Path &gt; <em>d</em><sub>1</sub></td>
                <td className="py-3 px-4">Extra multi-reflections run until 100% of incident energy is dissipated and last sub-beam hits 0, achieving |<em>r</em><sub>2</sub>| = |<em>r</em><sub>1</sub>|.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-950">Absorption Valley (<em>RL</em> Local Max)</td>
                <td className="py-3 px-4"><em>A</em>(MB) &lt; <em>A</em>(M-MB)</td>
                <td className="py-3 px-4 font-mono">Film Path &lt; <em>d</em><sub>1</sub></td>
                <td className="py-3 px-4">Fewer internal cycles suffice to return the higher conserved reflection energy while final sub-beam still drops to 0 at <em>x</em><sub>1</sub><sup>+</sup>.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-950">Thick Film Limit (<em>d</em> &rarr; &infin;)</td>
                <td className="py-3 px-4"><em>A</em>(MB), <em>A</em>(M-MB) &rarr; 1 &minus; |<em>R</em><sub>M</sub>|<sup>2</sup></td>
                <td className="py-3 px-4 font-mono"><em>r</em><sub>2</sub> &rarr; 0 (no rear return)</td>
                <td className="py-3 px-4">With <em>R</em><sub>M</sub>(<em>x</em><sub>1</sub><sup>&minus;</sup>) = &minus;0.35 + 0.12<em>j</em>, all curves converge to ~0.863; film collapses to semi-infinite material.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Part III: Complete English Treatise */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-stone-950">
            <BookOpen className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>Part III: Complete English Treatise</h2>
          </div>
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-hs-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-black text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-hs-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-hs-mid" ? "Copied" : "Copy Text"}
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
          <span>Essay HS · Wave Mechanics Mechanism · Distinguishing Film from Material</span>
        </div>
        <div className="flex items-center gap-3 text-stone-600 font-medium">
          <span>Energy Conservation</span>
          <span aria-hidden="true">·</span>
          <span>Undefined Entered Energy</span>
          <span aria-hidden="true">·</span>
          <span>Interference Peaks</span>
        </div>
      </footer>
    </article>
  );
}
