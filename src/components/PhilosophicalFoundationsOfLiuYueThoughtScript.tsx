import React, { useState } from "react";
import { ShieldAlert, Copy, Check, Compass, BookOpen, Video, FileText, Flame, Sparkles, GitBranch } from "lucide-react";

export default function PhilosophicalFoundationsOfLiuYueThoughtScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("philosophical-foundations-liu-yue-article-text");
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

  const youtubeSafeDescription = `Title: Philosophical Foundations of Liu Yue's Thought: Metaphysical Idealism vs. Dialectical Materialist Alchemy

What philosophical divide explains why modern SCI publishing stifles breakthroughs while rewarding 23,300+ empty papers? Dr. Yue Liu presents the complete philosophical bedrock of Liu Yue's Thought (going beyond Popper, Feyerabend, and Hacking to dismantle academic monopolies):

1. DIALECTICAL MATERIALISM (ALCHEMY) VS. IDEALISTIC METAPHYSICS (SCIENCE):
- Alchemy's philosophy (Dialectical Materialism): Claims the world shifts endlessly ("today's river is not yesterday's river," ad hoc case-by-case rules, math is too mechanical to capture Nature, today's truth expires tomorrow, only experiment decides). On this foundation arose SCI Impact Factors, consensus peer review, and the worship of "experiment never errs" that blocks new ideas and protects sacred SCI journals from correction.
- Science's true philosophy (Idealistic Metaphysics): Idealism holds that objective, invariant natural laws exist and can be known (H2O in China equals H2O in America; energy, mass, angular momentum conservation, Second Law of Thermodynamics, wave-particle duality). Metaphysics holds that essential truth is simple, invariant, and universal (Definite and Multiple Proportions hold everywhere; today's river IS yesterday's river in essence; Nature never violates mathematical logic).

2. SCIENTIFIC VICTORIES ARE VICTORIES OF LOGIC:
From hydrogen spectral formulas to Bohr and Quantum Mechanics; electron spin and NMR line splitting; overthrowing Phlogiston via quantitative mass equations; Conservation of Mass to Dalton's atoms, Valence Bond Theory, and Band Theory; Rutherford's nuclear theory above scattering counts; and Microwave Absorption's shift from Impedance Matching to Wave Mechanics Theory—science progresses through conceptual logic, often reaching heights experiment cannot touch.

3. THEORY ABOVE EXPERIMENT AND LOGIC ABOVE STATISTICS:
The "experiment, hypothesis, experiment" loop reduces science to alchemy. Meanwhile, planned-economy academia still cannot synthesize one piece of living meat, wood, or hair—while free-market Nature built ecosystems and natural immunity (natural immunity, not isolation alone, ended COVID-19 spread).

4. PURE WATER HAS NO FISH — ALLOW ERRORS, PROTECT CORRECTION:
Science does NOT fear errors existing; science fears FORBIDDING the correction of errors. Sanctifying SCI journals destroys error-recognition across academia.

TIMESTAMPS:
00:00 - Scene 1: Prologue — Two Rival Philosophies: Dialectical Materialism vs. Idealistic Metaphysics
02:45 - Scene 2: Idealistic Metaphysics — Why H2O, Conservation Laws & Math Are Eternal Truths
05:10 - Scene 3: Landmarks of Science — Why Bohr, Phlogiston, Dalton & Band Theory Are Victories of Logic
07:45 - Scene 4: Theory Above Experiment & Free-Market Nature vs. Planned-Economy Academia
10:35 - Scene 5: Pure Water Has No Fish — Why Science Fears Suppression More Than Mistakes
12:55 - Scene 6: Beyond Popper, Feyerabend & Hacking — Reclaiming Metaphysical Science
14:40 - Scene 7: Epilogue — Leave Consensus Dogma Behind

Key References Cited:
- Liu, Y., Philosophical Battle Between Dialectical Materialism and Idealistic Metaphysics (2025). SSRN: https://ssrn.com/abstract=5447975
- Liu, Y., Challenge to Scientific Orthodoxy Through Metaphysical Idealism (2025). SSRN: https://ssrn.com/abstract=5514958
- Liu, Y., Primacy of Problem Formulation: SSRN 5709303 & 5784682
- Liu, Y., Misapplication of Statistical Methods (SSRN 5376778); Replication Crisis (DOI: 10.20944/preprints202507.1953.v1)
- Liu, Y., Theoretical Poverty (SSRN 5463155); Necessity of Error (SSRN 5744422 & 5491906)
- Liu, Y., Academic Games (SSRN 5684424); Breakthroughs Not Born From Journals (SSRN 5720702)
- Liu, Y. & Liu, Y., Illusion of Quality Control (SSRN 5436920); Publishing Mythology (SSRN 5478626)
- Liu, Y., Untouchable Crisis (ai.viXra: 2509.0016); Error Silence (DOI: 10.20944/preprints202507.2515.v1 & .2152.v1)
- Academic Critique Hub: https://github.com/academic-critique/hub

#MetaphysicalIdealism #LiuYueThought #PhilosophyOfScience #WaveMechanics #PeerReviewCrisis #NecessityOfError`;

  const spokenScriptText = `[Scene 1: Prologue — Two Philosophies at War Inside Modern Science]
Today we examine the deepest bedrock beneath Liu Yue's Thought—why it goes beyond Karl Popper, Paul Feyerabend, and Ian Hacking to dismantle academic monopolies at their philosophical root!
Here is the secret almost nobody dares to say out loud:
**Modern science is built on the philosophy of alchemy—and alchemy's philosophy is Dialectical Materialism!**
Look at what that philosophy preaches: it insists the world changes incessantly; no simple, universal principle can summarize it; every case demands ad-hoc treatment—"one case, one rule." It declares mathematics rigid and mechanical, incapable of capturing living Nature. It teaches that today's river is not yesterday's river, today's truth expires tomorrow, and ultimate truth cannot be known! Therefore, ONLY experiment has the final vote: "Experiments never err; only theories err!"
On that exact philosophical foundation, academia erected SCI Impact Factors and consensus peer review—strangling new ideas with "insufficient experimental evidence," shielding broken mainstream theories behind piles of "supporting data," and sanctifying SCI journals as infallible scripture that forbids correction!

[Scene 2: Liu Yue's Philosophical Foundation — Science Is Idealistic Metaphysics]
Liu Yue's Thought breaks that spell with one bold, uncompromising declaration:
**True science is grounded in Idealistic Metaphysics!**
Why **Idealism**? Because Nature runs according to its own invariant, rational laws—and those laws CAN be known by the human mind! Objective truth exists! Water in China and water in the United States are both H-two-O, forever unchanging! And truth is not singular: Conservation of Energy, Conservation of Mass, Conservation of Angular Momentum, the Second Law of Thermodynamics, and Wave-Particle Duality stand as eternal pillars of reality!
And why **Metaphysics**? Because metaphysics IS the true methodology of science!
Today's truth remains tomorrow's truth! The Law of Definite Proportions and the Law of Multiple Proportions hold identically in America and in China! Metaphysics deliberately looks past surface noise to grasp things as simple, invariant, and unified: at the level of essence, today's river IS yesterday's river! Surface appearances shift endlessly, yet the underlying logic is clean and simple!
Every real scientific method you learned from elementary school through university IS metaphysical science—and **mathematics is its beating heart, because Nature can NEVER violate mathematical logic!**

[Scene 3: History of Science — Every Real Leap Is a Victory of Logic, Not Alchemy]
Verify this across the entire history of science!
From a unifying mathematical formula for hydrogen spectral lines to Bohr's atomic model and Quantum Mechanics—that was a triumph of **logic**, NOT empirical data hoarding!
From electron loops in non-uniform magnetic fields to electron spin, spectral line splitting, and the quantum mechanical interpretation of NMR spectra—what shines through is the piercing power of **theoretical logic**!
Phlogiston theory was the triumph of alchemical experiments; what overthrew Phlogiston was introducing quantitative mass conservation—a triumph of **mathematical logic**!
Look at the real chain of progress: from alchemy to Conservation of Mass and balanced chemical equations; from alchemy to Definite and Multiple Proportions; to Dalton's Atomic Theory; to quantum molecular orbitals; from localized Valence Bond Theory to delocalized Solid-State Band Theory! Rutherford's nuclear model towers vastly above his raw alpha-scattering counts! And today, replacing Impedance Matching confusion with Microwave Absorption Wave Mechanics Theory and the exact inverse frequency-thickness law is that exact same victory of science over alchemy!
Many peaks of pure theoretical beauty sit in a mathematical heaven where crude laboratory instruments can never reach!

[Scene 4: Theory Above Experiment & Free-Market Nature vs. Planned-Economy Academia]
Look at the endless treadmill taught in textbooks today: "experiment, hypothesis, experiment, new hypothesis, more experiment." That loop strangles theory and reduces science back to alchemy!
Major breakthroughs happen when **logic formulates the decisive problem first**—NOT when labs hoard raw measurements—yet mainstream gatekeepers trap innovators in a vicious circle: they block dissenting evidence from publishing, then demand "mainstream-approved evidence" before listening!
Compare modern academia's central planning with Nature itself!
Human academia runs like a **planned economy**: endless committees, grants, and top-down rubrics. Yet for all its planned laboratories, modern planned science still cannot synthesize one real piece of living meat, one living plank of wood, or one single living hair!
**Nature, by contrast, operates like a free market!** Across an ocean of spontaneous natural laws and dynamic checks and balances, life blooms into plants, animals, and intricate immune systems! Lockdowns alone could never halt COVID-19 transmission—it was human natural immunity, operating under Nature's free-market laws, that resolved the pandemic!

[Scene 5: "Pure Water Has No Fish" — Science Fears Suppression, Never Mistakes]
An ancient proverb warns: *"Water that is too pure holds no fish."*
Genuine science MUST allow errors to exist! Modern publishing, however, is terrified of admitting published errors—so terrified that it blocks scholars from correcting mistakes inside SCI journals!
Hear this clearly: **Science does NOT fear the existence of errors; science fears FORBIDDING the correction of errors!**
By turning SCI journals and peer review into sacred idols that must never be embarrassed, modern academia has stripped scientists of the very ability to recognize mistakes! As documented across our papers on *The Theoretical Poverty of Modern Academia*, *The Necessity of Error*, and *The Illusion of Quality Control*, an ecosystem that bans open correction dies intellectually!

[Scene 6: Beyond Popper, Feyerabend & Hacking]
That is why Liu Yue's Thought goes further than Popper, Feyerabend, and Hacking combined.
Hacking elevated laboratory practice; Feyerabend rejected method without establishing metaphysical truth; Popper praised theory yet left empirical falsification on the throne and feared error inside journals less than we think.
Liu Yue restores Idealistic Metaphysics as science's rightful home, places **logic above statistics** and **theory above experiment**, defends the **necessity of error and open correction**, and tears down the monopoly that says truth needs consensus permission!

[Scene 7: Epilogue — The Victory of Metaphysical Science]
Never apologize for seeking invariant truth, simple unifying laws, and fearless mathematical logic.
Science belongs to open critical minds—not sacred journals. Thank you for watching.`;

  const fivePillars = [
    {
      title: "1. Dialectical Materialism (Alchemy) vs. Idealistic Metaphysics (Science)",
      detail: "Alchemy treats Nature as endlessly mutable beyond simple laws and declares 'experiment never errs.' Science rests on Idealistic Metaphysics: invariant truth exists (H2O, conservation laws, Definite Proportions), today's river is yesterday's river in essence, and Nature obeys mathematical logic."
    },
    {
      title: "2. Victories of Theoretical Logic Over Data Piling",
      detail: "Hydrogen spectra to Bohr and Quantum Mechanics, electron spin & NMR, overthrowing Phlogiston via quantitative mass equations, Dalton -> Valence Bond -> Band Theory, Rutherford's nuclear theory, and Wave Mechanics over Impedance Matching."
    },
    {
      title: "3. Theory Above Experiment (SSRN 5709303 & 5784682)",
      detail: "The 'experiment-hypothesis-experiment' treadmill suffocates inquiry. Asking the right question via logic drives progress before experimental validation."
    },
    {
      title: "4. Logic Above Statistics & Planned Academia vs. Free-Market Nature",
      detail: "Centrally planned academia still cannot synthesize living meat, wood, or hair. Nature operates as a self-balancing free market—where natural immunity, not isolation alone, resolved COVID-19."
    },
    {
      title: "5. 'Pure Water Has No Fish': Allow Errors, Protect Correction",
      detail: "Science does not fear mistakes existing; it fears banning error correction. Sanctifying SCI journals and peer review destroys scientists' capacity to spot falsehood (SSRN 5744422, 5491906, 5436920)."
    }
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="philosophical-foundations-liu-yue-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HF &bull; Philosophy of Liu Yue&apos;s Thought
          </span>
          <span className="bg-indigo-100 text-indigo-900 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200">
            Idealistic Metaphysics &bull; Free-Market Nature &bull; Necessity of Error
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Philosophical Foundations of Liu Yue&apos;s Thought: Metaphysical Idealism vs. Dialectical Materialist Alchemy
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Going beyond Popper, Feyerabend, and Hacking to dismantle academic monopolies: why modern science trapped itself in Dialectical Materialist alchemy, why real science is Idealistic Metaphysics, why Nature works like a free market rather than a planned academy, and why forbidding error correction kills discovery.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Companion to Essay HE
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-hf")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-hf" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-hf" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-hf")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-hf" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-hf" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "All Copied!" : "Copy Full Package"}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================== */}
      {/* PART I: FIVE PHILOSOPHICAL MODULES & CITATION LEDGER                       */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Compass className="w-6 h-6 text-indigo-700" />
          <h2>Part I: Five Pillars of Liu Yue&apos;s Philosophical Foundation</h2>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {fivePillars.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1">
              <h3 className="font-sans font-bold text-slate-950 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-700 shrink-0" />
                <span>{item.title}</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50/80 border border-amber-300 p-5 rounded-xl space-y-2">
          <h3 className="font-sans font-bold text-amber-950 text-sm flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
            The Water Proverb &amp; Sacred Journal Trap (水至清而无鱼)
          </h3>
          <p className="text-sm text-slate-800">
            Treating SCI journals and peer review as infallible sanctuaries strips researchers of the ability to recognize falsehood. Science must permit mistakes—and fiercely defend every scholar&apos;s right to publish corrections.
          </p>
        </div>

        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl border border-slate-700 space-y-2">
          <div className="font-sans font-bold text-amber-300 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>Complete Primary Works Cited (SSRN, Preprints.org, viXra, Substack)</span>
          </div>
          <ul className="text-xs font-mono text-slate-200 space-y-1.5">
            <li>&bull; Liu, Y., Dialectical Materialism vs. Idealistic Metaphysics: SSRN 5447975 &amp; Challenge Through Metaphysical Idealism: SSRN 5514958</li>
            <li>&bull; Liu, Y., Primacy of Problem Formulation: SSRN 5709303 &amp; Popperian Expansion: SSRN 5784682</li>
            <li>&bull; Liu, Y., Statistical Bias Against Theory: SSRN 5376778 &amp; Replication Crisis: Preprints.org DOI: 10.20944/preprints202507.1953.v1</li>
            <li>&bull; Liu, Y., Theoretical Poverty (SSRN 5463155); Necessity of Error (SSRN 5744422 &amp; 5491906); Academic Games (SSRN 5684424)</li>
            <li>&bull; Liu, Y., Major Breakthroughs Not Born From Journals (SSRN 5720702); Eliminating Science &amp; Nature (yueliusd.substack.com, 2025)</li>
            <li>&bull; Liu, Y. &amp; Liu, Y., Illusion of Quality Control (SSRN 5436920); Publishing Mythology (SSRN 5478626)</li>
            <li>&bull; Liu, Y., Untouchable Crisis (ai.viXra: 2509.0016); Academic Silence &amp; Resistance (DOI: 10.20944/preprints202507.2515.v1 &amp; .2152.v1)</li>
          </ul>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 7-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-rose-700" />
            <h2>Part II: Complete 7-Scene Digital Avatar Broadcast Script (~15 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-hf-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-hf-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-hf-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
          </button>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-5 font-serif text-sm leading-relaxed whitespace-pre-wrap border border-slate-700 max-h-[540px] overflow-y-auto">
          {spokenScriptText}
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART III: 100% YOUTUBE-SAFE DESCRIPTION                                    */}
      {/* ========================================================================== */}
      <section className="space-y-4 font-sans">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <FileText className="w-6 h-6 text-rose-700" />
            <h2>Part III: 100% YouTube-Safe Description (Zero &lt; or &gt; Characters)</h2>
          </div>
          <button
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-hf-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-hf-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-hf-bottom" ? "Copied!" : "Copy Clean Description"}
          </button>
        </div>
        <p className="text-xs text-slate-500">
          Zero angle brackets (&lt; or &gt;) and under 5,000 characters so YouTube Studio accepts it cleanly without validation errors.
        </p>
        <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 border border-slate-700">
          {youtubeSafeDescription}
        </pre>
      </section>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          Philosophical Foundations of Liu Yue&apos;s Thought &bull; Essay HF &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Idealistic Metaphysics
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Free-Market Nature
          </span>
          <span className="bg-indigo-100 text-indigo-900 px-2.5 py-1 rounded-md font-semibold">
            Necessity of Error
          </span>
        </div>
      </div>
    </article>
  );
}
