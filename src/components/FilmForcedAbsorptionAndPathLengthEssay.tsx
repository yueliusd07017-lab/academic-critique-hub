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

export default function FilmForcedAbsorptionAndPathLengthEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("film-forced-absorption-article-text");
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

  const englishTreatiseText = `How Films Force Complete Absorption: Effective Optical Path Length, Multi-Reflection Trapping, and the Collapse of Impedance Matching

I. Introduction: How a Film Forces Its Material to Absorb Microwaves
In classical microwave absorption research, it is commonly assumed that a material absorbs microwaves purely based on its bulk attenuation constant and thickness. However, as demonstrated by Dr. Yue Liu and co-workers, a finite thin-film device behaves fundamentally differently from a bulk material. The film actively "forces" the lossy medium to absorb microwave energy through multi-reflection wave interference and boundary cancellation.

Let fM represent the total forward-propagating microwave beam and bM the backward-propagating beam within the film, with the front interface at x1. The emergent beam r2 into free space is strictly governed by wave interference. If the material were infinitely thick, microwaves would attenuate over a standard path length d1. But in a finite film, energy conservation requires that the final constituent beam of bM at x1+ has zero intensity. This ensures that the amplitude of r2 satisfies the interference requirement, regardless of whether all or only part of the incident microwave energy is absorbed by the film. Even if the film absorbs only a portion of the incident energy, energy conservation still requires the final split beam at x1+ to be zero, ensuring that no further reflections disrupt the interference condition. Through continuous multi-reflection trapping, microwaves circulate until dissipation is complete.

II. Two Definitive Facts that Dethrone Impedance Matching
This electrodynamic reality establishes two profound facts:
1. Incident Microwaves Need Not Fully Enter the Film: Because energy is repeatedly trapped and circulated through the lossy medium via multi-reflection interference, even partial initial entry is sufficient for cumulative attenuation to dissipate 100% of the incident energy.
2. Impedance Matching Rests on Undefined Physics: Conventional impedance matching assumes maximum absorption requires complete entry ($\Gamma_{01} = 0$). However, unless all incident microwave energy crosses the boundary unconditionally, defining an isolated "energy component that enters the film" is physically impossible due to continuous forward/backward wave superposition. Thus, impedance matching theory is built on an undefined physical quantity (Liu, Drew, Liu, J. Appl. Phys. 2023, 134, 045304).

III. The d << d1 Paradox: Why Wave Interference Generates Absorption Peaks
A crucial proof established in the JMMM 2024 monograph (593, 171850) addresses the case where physical film thickness d is much smaller than the standard material attenuation length ($d \ll d_1$):
- If microwaves simply attenuated across an optical path length equal to d1, total absorption would be a weak, monotonic function of film thickness d, producing zero resonant absorption peaks.
- The experimental reality of sharp, periodic absorption peaks occurs precisely because wave interference forces the effective optical path length inside the film cavity to deviate from d1, resulting in periodic oscillatory absorption peaks even in ultra-thin films.

Conclusion
Through rigorous transmission line theory and wave cancellation principles, Dr. Yue Liu’s work proves that microwave absorption is governed by film interference and multi-reflection trapping rather than surface impedance matching.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1 rounded-full border border-amber-200 font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Film-Forced Absorption & Optical Path</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          How Films Force Complete Absorption: Effective Optical Path Length, Multi-Reflection Trapping, and the Collapse of Impedance Matching
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-film-path")}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-film-path" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-film-path" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="film-forced-absorption-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>I. Introduction: How a Film Forces Its Material to Absorb Microwaves</h2>
          </div>
          <p>
            In classical microwave absorption research, it is commonly assumed that a material absorbs microwaves purely based on its bulk attenuation constant and thickness. However, as demonstrated by Dr. Yue Liu and co-workers, a finite thin-film device behaves fundamentally differently from a bulk material. The film actively "forces" the lossy medium to absorb microwave energy through multi-reflection wave interference and boundary cancellation.
          </p>
          <p>
            Let <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">fM</span> represent the total forward-propagating microwave beam and <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">bM</span> the backward-propagating beam within the film, with the front interface at <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">x1</span>. The emergent beam <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">r2</span> into free space is strictly governed by wave interference. If the material were infinitely thick, microwaves would attenuate over a standard path length <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">d1</span>. But in a finite film, energy conservation requires that the final constituent beam of <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">bM</span> at <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">x1+</span> has zero intensity. This ensures that the amplitude of <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">r2</span> satisfies the interference requirement, regardless of whether all or only part of the incident microwave energy is absorbed by the film. Even if the film absorbs only a portion of the incident energy, energy conservation still requires the final split beam at <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">x1+</span> to be zero, ensuring that no further reflections disrupt the interference condition.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>II. Two Definitive Facts that Dethrone Impedance Matching</h2>
          </div>
          <p>
            This electrodynamic reality establishes two profound facts:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>1. Incident Microwaves Need Not Fully Enter</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Because energy is repeatedly trapped and circulated through the lossy medium via multi-reflection interference, even partial initial entry is sufficient for cumulative attenuation to dissipate 100% of incident energy.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>2. Impedance Matching Rests on Undefined Physics</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Conventional impedance matching assumes maximum absorption requires complete entry (<span className="font-mono">&Gamma;01 = 0</span>). However, unless all energy crosses unconditionally, defining an isolated "entering energy component" is physically impossible (Liu, Drew, Liu, J. Appl. Phys. 2023, 134, 045304).
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>III. The d &lt;&lt; d1 Paradox: Why Wave Interference Generates Absorption Peaks</h2>
          </div>
          <p>
            A crucial proof established in the JMMM 2024 monograph (<span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">593, 171850</span>) addresses the case where physical film thickness <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">d</span> is much smaller than standard material attenuation length (<span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">d &lt;&lt; d1</span>):
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-800 text-xs md:text-sm">
            <li>
              <strong>Monotonic Failure:</strong> If microwaves simply attenuated across an optical path length equal to <span className="font-mono">d1</span>, total absorption would be a weak, monotonic function of film thickness <span className="font-mono">d</span>, producing zero resonant absorption peaks.
            </li>
            <li>
              <strong>Interference Oscillation:</strong> The experimental reality of sharp, periodic absorption peaks occurs precisely because wave interference forces the effective optical path length inside the film cavity to deviate from <span className="font-mono">d1</span>, resulting in periodic oscillatory absorption peaks even in ultra-thin films.
            </li>
          </ul>
        </section>

        <section className="bg-stone-50 border border-stone-200 p-5 rounded-xl space-y-2 mt-6">
          <h3 className="font-sans font-bold text-stone-950 text-sm">Conclusion</h3>
          <p className="text-xs md:text-sm text-stone-700 leading-relaxed">
            Through rigorous transmission line theory and wave cancellation principles, Dr. Yue Liu’s work proves that microwave absorption is governed by film interference and multi-reflection trapping rather than surface impedance matching.
          </p>
        </section>
      </div>
    </article>
  );
}
