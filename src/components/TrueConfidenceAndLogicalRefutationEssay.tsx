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

export default function TrueConfidenceAndLogicalRefutationEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("true-confidence-article-text");
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

  const englishTreatiseText = `Prologue: Absolute Confidence and the Exposure of Institutional Evasion

I dare to seek more channels to promote Wave Mechanics Theory because I am fundamentally unafraid of encountering unexpected counter-arguments against it.

Wrong is wrong, and error can never defeat correctness. Any new perspective attempting to refute Wave Mechanics Theory only provides me with more ammunition. This is why the correct never fears the erroneous. No matter what unpredictable reason you raise, I am not afraid—that is true confidence. As long as you are wrong, I believe I can refute whatever reasons you find.

For instance, Xiaowei argued that Z_in = Z_0 in impedance matching theory already accounts for interference, and that interpreting Z_in = Z_0 as the condition where the maximum microwave energy enters the material is merely an individual's mistake—mainstream scientists do not take responsibility for it, and that is why they neither refute nor accept Wave Mechanics Theory. This was a perspective I had not previously anticipated.

"Z_in approaching Z_0 represents more incident wave energy entering the material" is an error of impedance matching theory. But when mainstream scientists realize this is an error, they instead claim it is an individual's erroneous cognition for which mainstream scientists are not responsible, and use this as the excuse why mainstream scientists neither refute nor accept Wave Mechanics Theory.

They claim that in impedance matching theory, Z_in = Z_0 was always meant to be an interference absorption peak, and that saying "Z_in = Z_0 means all incident microwave energy enters the material" is merely a misunderstanding. As long as it's a misunderstanding, it is not the view of mainstream scientists.

My new ammunition is to relentlessly critique whether mainstream scientists actually recognized Z_in = Z_0 as an interference absorption peak. If they truly recognized it as such, they would never have misattributed interference absorption peaks as "resonance absorption." Even if this error wasn't made by mainstream scientists but by individuals—"whenever something is wrong, mainstream scientists claim it wasn't done by them"—then you mainstream scientists should have been able to design materials through structural control to obtain targeted permittivity and permeability. Yet for half a century, you have never thought or acted along this line, which proves definitively that you never treated the absorption peak at Z_in = Z_0 as an interference peak.

Exposing Institutional Evasion: Why Mainstream Apologists Cannot Escape Accountability Through the “Individual Mistake” Defense

I. The Tactical Retreat of Mainstream Apologists
When confronted with the fundamental fallacies of classical impedance matching theory, mainstream apologists frequently attempt a tactical retreat. Rather than defending erroneous interpretations—such as equating Z_in = Z_0 with maximum microwave energy entering the medium—they disown them as mere "individual misunderstandings," claiming that mainstream science bears no responsibility for such errors and that true impedance matching has always understood Z_in = Z_0 as an interference absorption peak.

This clever maneuver attempts to explain away why mainstream institutions neither refute nor accept Wave Mechanics Theory: by dismissing the error as peripheral, they pretend the core theory remains unassailable.

II. The Dual Fatal Flaws of the "Individual Mistake" Defense
Dr. Yue Liu’s rigorous critical analysis demolishes this institutional evasion through two devastating logical counter-strokes:

1. The Contradiction of Interference vs. Resonance: 
If mainstream scientists genuinely recognized Z_in = Z_0 as an interference condition, why have thousands of mainstream publications across five decades consistently misattributed interference phenomena to "resonance absorption" (such as Debye relaxation, interfacial polarization, and magnetic resonance)? If they truly understood interference, their vocabulary and mechanism models would reflect wave mechanics rather than chaotic trial-and-error curve fitting.

2. The Fifty-Year Material Design Vacuum: 
Even if apologists insist that the misinterpretation was limited to "individual researchers," the ultimate proof lies in empirical reality. If impedance matching truly understood the interference condition Z_in = Z_0, why has the mainstream community failed for over half a century to predict or synthesize materials with targeted, predetermined complex permittivity and permeability? The complete absence of predictive material design rules over 50 years proves definitively that they never understood interference at all.

III. The Absolute Triumph of Deductive Logic
This confrontation exposes the hollow core of institutional authority. When challenged by first-principles wave mechanics, mainstream science alternates between arrogant dogmatism and defensive disavowal. 

However, error cannot hide behind bureaucratic disclaimers. As long as a theoretical framework lacks predictive power and relies on post-hoc rationalizations, every defense mechanism deployed by apologists merely adds new ammunition to the definitive critique of Wave Mechanics Theory.

Conclusion
Shifting blame to "individual mistakes" while retaining 50 years of failed experimental alchemy is the ultimate admission of intellectual bankruptcy. True science is defined by deductive closure and predictive design—standards that Wave Mechanics Theory fulfills and that classical impedance matching can never evade.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1 rounded-full border border-amber-200 font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Author's Prologue & Institutional Critique</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          Absolute Confidence, the "Individual Mistake" Defense, and the Fifty-Year Material Design Vacuum
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-confidence")}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-confidence" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-confidence" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="true-confidence-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        {/* Author's Prologue Box */}
        <section className="bg-amber-50 border-l-4 border-amber-800 p-5 rounded-r-xl space-y-3 font-serif">
          <h3 className="font-sans font-bold text-amber-950 text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
            <span>Author's Prologue (作者序言)</span>
          </h3>
          <p className="text-xs md:text-sm text-stone-800 leading-relaxed italic">
            I dare to seek more channels to promote Wave Mechanics Theory because I am fundamentally unafraid of encountering unexpected counter-arguments against it.
          </p>
          <p className="text-xs md:text-sm text-stone-800 leading-relaxed italic">
            Wrong is wrong, and error can never defeat correctness. Any new perspective attempting to refute Wave Mechanics Theory only provides me with more ammunition. This is why the correct never fears the erroneous. No matter what unpredictable reason you raise, I am not afraid—that is true confidence. As long as you are wrong, I believe I can refute whatever reasons you find.
          </p>
          <p className="text-xs md:text-sm text-stone-800 leading-relaxed italic">
            For instance, Xiaowei argued that <span className="font-mono bg-amber-100 px-1 py-0.5 rounded">Z_in = Z_0</span> in impedance matching theory already accounts for interference, and that interpreting <span className="font-mono bg-amber-100 px-1 py-0.5 rounded">Z_in = Z_0</span> as the condition where the maximum microwave energy enters the material is merely an individual's mistake—mainstream scientists do not take responsibility for it, and that is why they neither refute nor accept Wave Mechanics Theory. This was a perspective I had not previously anticipated.
          </p>
          <p className="text-xs md:text-sm text-stone-800 leading-relaxed italic">
            "Z_in approaching Z_0 represents more incident wave energy entering the material" is an error of impedance matching theory. But when mainstream scientists realize this is an error, they instead claim it is an individual's erroneous cognition for which mainstream scientists are not responsible, and use this as the excuse why mainstream scientists neither refute nor accept Wave Mechanics Theory.
          </p>
          <p className="text-xs md:text-sm text-stone-800 leading-relaxed italic">
            They claim that in impedance matching theory, <span className="font-mono bg-amber-100 px-1 py-0.5 rounded">Z_in = Z_0</span> was always meant to be an interference absorption peak, and that saying "<span className="font-mono bg-amber-100 px-1 py-0.5 rounded">Z_in = Z_0</span> means all incident microwave energy enters the material" is merely a misunderstanding. As long as it's a misunderstanding, it is not the view of mainstream scientists.
          </p>
          <p className="text-xs md:text-sm text-stone-800 leading-relaxed italic font-semibold">
            My new ammunition is to relentlessly critique whether mainstream scientists actually recognized <span className="font-mono bg-amber-100 px-1 py-0.5 rounded">Z_in = Z_0</span> as an interference absorption peak. If they truly recognized it as such, they would never have misattributed interference absorption peaks as "resonance absorption." Even if this error wasn't made by mainstream scientists but by individuals—"whenever something is wrong, mainstream scientists claim it wasn't done by them"—then you mainstream scientists should have been able to design materials through structural control to obtain targeted permittivity and permeability. Yet for half a century, you have never thought or acted along this line, which proves definitively that you never treated the absorption peak at <span className="font-mono bg-amber-100 px-1 py-0.5 rounded">Z_in = Z_0</span> as an interference peak.
          </p>
        </section>

        <section className="space-y-3 pt-4">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>I. The Tactical Retreat of Mainstream Apologists</h2>
          </div>
          <p>
            When confronted with the fundamental fallacies of classical impedance matching theory, mainstream apologists frequently attempt a tactical retreat. Rather than defending erroneous interpretations—such as equating <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">Z_in = Z_0</span> with maximum microwave energy entering the medium—they disown them as mere "individual misunderstandings," claiming that mainstream science bears no responsibility for such errors and that true impedance matching has always understood <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">Z_in = Z_0</span> as an interference absorption peak.
          </p>
          <p>
            This clever maneuver attempts to explain away why mainstream institutions neither refute nor accept Wave Mechanics Theory: by dismissing the error as peripheral, they pretend the core theory remains unassailable.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>II. The Dual Fatal Flaws of the "Individual Mistake" Defense</h2>
          </div>
          <p>
            Dr. Yue Liu’s rigorous critical analysis demolishes this institutional evasion through two devastating logical counter-strokes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>1. The Contradiction of Interference vs. Resonance</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                If mainstream scientists genuinely recognized <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">Z_in = Z_0</span> as an interference condition, why have thousands of mainstream publications across five decades consistently misattributed interference phenomena to "resonance absorption" (such as Debye relaxation, interfacial polarization, and magnetic resonance)? If they truly understood interference, their vocabulary and mechanism models would reflect wave mechanics rather than chaotic trial-and-error curve fitting.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>2. The Fifty-Year Material Design Vacuum</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Even if apologists insist that the misinterpretation was limited to "individual researchers," the ultimate proof lies in empirical reality. If impedance matching truly understood the interference condition <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">Z_in = Z_0</span>, why has the mainstream community failed for over half a century to predict or synthesize materials with targeted, predetermined complex permittivity and permeability? The complete absence of predictive material design rules over 50 years proves definitively that they never understood interference at all.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>III. The Absolute Triumph of Deductive Logic</h2>
          </div>
          <p>
            This confrontation exposes the hollow core of institutional authority. When challenged by first-principles wave mechanics, mainstream science alternates between arrogant dogmatism and defensive disavowal.
          </p>
          <p>
            However, error cannot hide behind bureaucratic disclaimers. As long as a theoretical framework lacks predictive power and relies on post-hoc rationalizations, every defense mechanism deployed by apologists merely adds new ammunition to the definitive critique of Wave Mechanics Theory.
          </p>
        </section>

        <section className="bg-stone-50 border border-stone-200 p-5 rounded-xl space-y-2 mt-6">
          <h3 className="font-sans font-bold text-stone-950 text-sm">Conclusion</h3>
          <p className="text-xs md:text-sm text-stone-700 leading-relaxed">
            Shifting blame to "individual mistakes" while retaining 50 years of failed experimental alchemy is the ultimate admission of intellectual bankruptcy. True science is defined by deductive closure and predictive design—standards that Wave Mechanics Theory fulfills and that classical impedance matching can never evade.
          </p>
        </section>
      </div>
    </article>
  );
}
