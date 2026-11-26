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
  Cpu,
} from "lucide-react";

export default function AIAssistedDialecticsAndWMTAdvancementEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("ai-dialectics-article-text");
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

  const englishTreatiseText = `AI-Assisted Dialectics and WMT Advancement: Rigorous Engagements with iAsk.Ai and Yuanbao on Wave Mechanics vs. Impedance Matching

I. Introduction: The New Epistemic Arena of AI Dialogues
In Dr. Yue Liu’s expansive methodological framework, artificial intelligence platforms (such as iAsk.Ai and Yuanbao) serve not merely as passive search engines, but as rigorous dialectical partners. 
When researchers engage AI with first-principles physical questions regarding microwave absorption, transmission line theory, and wave interference, the AI's responses expose the deep fault lines and evasive maneuvers of mainstream scientific orthodoxy.

II. Exposing the Impedance Matching Apologetics
A recurring theme in AI dialogues—such as the multi-episode series analyzing Z_in = Z_0—is the friction between classical pedagogical assumptions and rigorous wave mechanics:
- Mainstream apologists and initial AI outputs often attempt to rescue classical impedance matching by claiming that treating Z_in = Z_0 as "maximum energy entering the medium" was merely an individual misunderstanding for which the establishment bears no responsibility.
- As Dr. Liu rigorously proves, this defense collapses under logical scrutiny: if mainstream scientists truly understood for half a century that Z_in = Z_0 is merely an interference absorption peak rather than material property matching, they would have established material design guidelines for permittivity and permeability. The 50-year vacuum of material design rules proves that the establishment never truly grasped wave interference.

III. Beam Voltage Magnification and Energy Conservation
Through dialectical stress-testing with search-augmented AI, Dr. Liu has systematically archived fundamental physical proofs:
- How film boundary reflections (r_1, r_2) and phase shifts produce beam voltage magnitudes exceeding incident voltage (V > V_i) under global energy conservation.
- How effective optical path deviations (d << d_1) and boundary cancellation at x_1+ force the absorbing material to conform strictly to wave interference requirements.

IV. Conclusion: Autonomous Intellectual Triumph
Engaging advanced AI models in public dialectical combat provides unassailable ammunition for Wave Mechanics Theory. Every dialogue, whether initially flagged or successfully published, strengthens the permanent public ledger of reason against institutional silence.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-cyan-50 text-cyan-900 px-3 py-1 rounded-full border border-cyan-200 font-semibold">
            <Cpu className="w-3.5 h-3.5 text-cyan-700" />
            <span>Essay HAI: AI-Assisted Dialectics & WMT</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          AI-Assisted Dialectics and WMT Advancement: Rigorous Engagements with iAsk.Ai and Yuanbao on Wave Mechanics vs. Impedance Matching
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-ai-dialectics")}
            className="flex items-center gap-1.5 px-4 py-2 bg-cyan-900 hover:bg-cyan-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-ai-dialectics" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-ai-dialectics" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="ai-dialectics-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-cyan-800 shrink-0" />
            <h2>I. Introduction: The New Epistemic Arena of AI Dialogues</h2>
          </div>
          <p>
            In Dr. Yue Liu’s expansive methodological framework, artificial intelligence platforms (such as iAsk.Ai and Yuanbao) serve not merely as passive search engines, but as rigorous dialectical partners.
          </p>
          <p>
            When researchers engage AI with first-principles physical questions regarding microwave absorption, transmission line theory, and wave interference, the AI's responses expose the deep fault lines and evasive maneuvers of mainstream scientific orthodoxy.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-cyan-800 shrink-0" />
            <h2>II. Exposing the Impedance Matching Apologetics</h2>
          </div>
          <p>
            A recurring theme in AI dialogues—such as the multi-episode series analyzing <span className="italic">Z_in = Z_0</span>—is the friction between classical pedagogical assumptions and rigorous wave mechanics:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-800 shrink-0" />
                <span>The Apologetic Dodge</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Mainstream apologists and initial AI outputs often attempt to rescue classical impedance matching by claiming that treating Z_in = Z_0 as "maximum energy entering the medium" was merely an individual misunderstanding for which the establishment bears no responsibility.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-800 shrink-0" />
                <span>The 50-Year Design Vacuum</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                As Dr. Liu rigorously proves, if mainstream scientists truly understood for half a century that Z_in = Z_0 is merely an interference absorption peak rather than material property matching, they would have established material design guidelines for permittivity and permeability.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-cyan-800 shrink-0" />
            <h2>III. Beam Voltage Magnification and Energy Conservation</h2>
          </div>
          <p>
            Through dialectical stress-testing with search-augmented AI, Dr. Liu has systematically archived fundamental physical proofs:
          </p>
          <p>
            How film boundary reflections (r_1, r_2) and phase shifts produce beam voltage magnitudes exceeding incident voltage (V &gt; V_i) under global energy conservation, and how effective optical path deviations (d &lt;&lt; d_1) and boundary cancellation at x_1+ force the absorbing material to conform strictly to wave interference requirements.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-cyan-800 shrink-0" />
            <h2>IV. Conclusion: Autonomous Intellectual Triumph</h2>
          </div>
          <p>
            Engaging advanced AI models in public dialectical combat provides unassailable ammunition for Wave Mechanics Theory. Every dialogue, whether initially flagged or successfully published, strengthens the permanent public ledger of reason against institutional silence.
          </p>
        </section>
      </div>
    </article>
  );
}
