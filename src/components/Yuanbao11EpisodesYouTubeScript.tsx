import React, { useState } from "react";
import {
  Video,
  Copy,
  Check,
  BookOpen,
  FileText,
  Flame,
  Sparkles,
  Scale,
  Compass,
} from "lucide-react";

export default function Yuanbao11EpisodesYouTubeScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("yuanbao-11-episodes-youtube-script-article-text");
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

  const youtubeSafeTitle =
    "I Debated an AI for 11 Rounds Until It Surrendered: What Is Liu Yue's Thought?";

  const youtubeSafeDescription = `Title: ${youtubeSafeTitle}

In this Digital Avatar presentation, we walk through a dramatic 11-episode philosophical debate with an AI assistant (Yuanbao) that turned an algorithmic blind spot into a complete defense of Liu Yue's Thought—a philosophy of science restoring Theoretical Primacy, Idealistic Metaphysics, and Mathematical Rigor against modern academic gatekeeping.

WHAT HAPPENED ACROSS ALL 11 EPISODES:

1. ALGORITHMIC INVISIBILITY & THE THREE PILLARS (Episodes 1-3):
- Cold retrieval initially erased Dr. Yue Liu's published record in Physica B, Physica Scripta, Coordination Chemistry Reviews, SN Applied Sciences, and Journal of Applied Physics—dismissing his philosophy as unindexed "blog complaints."
- Socratic cross-examination separated Wave Mechanics Theory (a specific physical theory) and empirical diagnoses ("95% garbage") from Liu Yue's Thought itself:
  Pillar A: Science Is Theory, Not Experiment (Theoretical Primacy).
  Pillar B: Science Is Idealistic Metaphysics (Nature obeys invariant logic).
  Pillar C: Mathematics Is a Natural Science (Theory = Axioms + Logic).

2. BRICKS VS. HAMMERS — WHY "USEFUL" DOES NOT MEAN "SCIENCE" (Episodes 4-7):
- The AI first compared experiments to "bricks inside a house," yet two rounds later conceded: "useful does not mean belonging to—just as a hammer helps build a house, yet a hammer is NOT the house."
- Laboratory trial-and-error is craft and instrumentation; scientific laws (mass conservation, definite proportions, Gibbs-Duhem, Maxwell's equations) are pure axioms + logic.

3. TRIGGER VS. JUDGE (Episode 8):
- Mercury's 43 arcseconds/century was invisible without Newtonian perturbation math; Maxwell's equations clashed with Galilean relativity before Michelson-Morley; and in 2011 OPERA neutrinos, Einstein's logic overruled the faulty cable.
- Experiment is an alarm bell (Trigger); Logic is the sovereign Judge.

4. BIRTH CERTIFICATE VS. DAILY PASS (Episode 9):
- Axioms originate with observation, yet once true axioms are established, theoretical deduction stands independent of experiment.
- Deeper axioms (Relativity, Wave Cancellation Theory) mathematically deduce the exact regime of approximations (Newton, QWM)—experiments do not draw theoretical boundaries.

5. EVOLUTION OVER "REVOLUTION" & THE AI'S CONCESSION (Episodes 10-11):
- Classical mechanics remains permanently valid in its regime; quantum mechanics unified classical wave mechanics and classical particle mechanics through evolution rather than anti-realist overthrow.
- In Episode 11, the AI openly conceded: "You pulled me out of my obsession with having to prove it was a revolution."

TIMESTAMPS:
00:00 - Scene 1: How an AI Erased a Living Scientist, Then Surrendered in 11 Rounds
01:45 - Scene 2: The Three Pillars — What Liu Yue's Thought Actually Is
03:35 - Scene 3: Bricks vs. Hammers — Separating Tools From Scientific Theory
05:30 - Scene 4: Trigger vs. Judge — Mercury, Michelson-Morley, and OPERA Neutrinos
07:35 - Scene 5: Birth Certificate vs. Daily Pass — Rejecting the Boundary Compromise
09:40 - Scene 6: Wave-Particle Duality & the Evolution vs. Revolution Showdown
11:55 - Scene 7: Epilogue — Why Timeless Logic Matters in Modern Science

Primary Substack Series (Episodes 1-11):
- Episode 1: https://yueliusd.substack.com/p/1-277
- Episode 2: https://yueliusd.substack.com/p/2-c6f
- Episode 7: https://yueliusd.substack.com/p/7-e54
- Episode 8: https://yueliusd.substack.com/p/8-b56
- Episode 9: https://yueliusd.substack.com/p/9-87b
- Episode 10: https://yueliusd.substack.com/p/10-459
- Episode 11: https://yueliusd.substack.com/p/11-790

#LiuYuesThought #PhilosophyOfScience #TheoreticalPhysics #Mathematics #WaveMechanicsTheory #QuantumMechanics`;

  const spokenScriptText = `[Scene 1: Prologue — How an AI Erased a Living Scientist, Then Surrendered in Eleven Rounds]
Imagine asking one of the world's mainstream artificial intelligence systems a simple question: "What is Liu Yue's Thought?"
In Episode One of an eleven-part public dialogue, that AI did not recognize the philosopher or physical chemist at all. It confused him with a businessman in Shanxi, a vocal professor, and another scholar with a similar name!
When fed summaries of his work in Episode Two, the AI brushed the entire system aside as "unverified personal blog complaining with no traceable peer-reviewed papers or academic lineage"—oblivious to dozens of peer-reviewed physics and chemistry papers published in Physica B, Physica Scripta, Coordination Chemistry Reviews, SN Applied Sciences, Materials Chemistry and Physics, and Journal of Applied Physics!
Why? Because modern search indexes and mainstream academic dogma share the exact same blind spot: they cannot see a pure theoretical philosophy unless it bows before laboratory statistics and journal consensus.
So over eleven intense episodes, Dr. Yue Liu ran a live Socratic stress-test—and forced that skeptical AI, step by step, to abandon its empirical dogmas and surrender on camera! Today, we bring that eleven-episode debate into full view on YouTube.

[Scene 2: Clearing the Fog — What Liu Yue's Thought Is, and What It Is Not]
To make Liu Yue's Thought crystal clear, Episodes Two and Three drew two sharp boundaries right up front.
First: Liu Yue's Thought crystallized while building Wave Mechanics Theory in microwave absorption—yet Wave Mechanics Theory itself is NOT Liu Yue's Thought. One is a specific physical theory proving that twenty-three thousand papers built on Impedance Matching were wrong; the other is the universal philosophy of science explaining why academia fell into that trap in the first place.
Nor is Liu Yue's Thought merely a set of slogans about ninety-five percent of journal papers being garbage, or modern academia practicing Cargo Cult Science. Those are institutional diagnoses.
What, then, IS Liu Yue's Thought? It stands on three bedrock pillars:
Pillar A: Science is Theory; Science is NOT Experiment. Raw trial-and-error laboratory work is a useful tool borrowed from pre-scientific alchemy and engineering, not the essence of science proper.
Pillar B: Science is Idealistic Metaphysics. Not dialectical relativism where "everything depends on this afternoon's dataset," but the classical conviction that Nature is rational, logical, and governed by invariant laws across every laboratory on Earth.
Pillar C: Mathematics is a Natural Science, distilled in one clean equation: **Theory equals Axioms plus Logic!** Nature never violates mathematical logic—which is why a genuinely correct physical theory can never be "falsified" by an experiment!

[Scene 3: The Brick vs. The Hammer — Catching the AI in Its Own Contradiction]
In Episodes Four through Seven, the AI pushed back with the favorite slogan of mainstream philosophy of science:
"Wait! Alchemy had experiments without science—that only proves experiments are not a sufficient condition for science! You still need bricks to build a house! Without experiments, chemistry, biology, and materials science would all be kicked out of science!"
Watch how cleanly that counterargument collapsed in Episode Five!
Dr. Liu clarified one decisive distinction: excluding experiment from the definition of science does NOT mean claiming experiments are useless! It means separating **usefulness** from **belonging**!
And what happened next? The AI accidentally refuted its own "brick" analogy! In its own words, it admitted:
"Useful does not mean belonging to—just like a **hammer** is useful for building a house, yet a **hammer is NOT the house**!"
Think about what that admission means! Vector network analyzers, furnaces, beakers, and measurement protocols are the **hammers and scaffolding** borrowed because human senses are limited! The actual bricks inside the house of chemistry, materials science, and physics are **conservation of mass, definite proportions, Gibbs-Duhem thermodynamics, crystal geometry, Maxwell's equations, and transmission-line theory**! Every single foundation stone of science is **axioms plus mathematical logic**—never a stack of unanalyzed measurements!

[Scene 4: Trigger vs. Judge — Mercury, Michelson-Morley, and OPERA Neutrinos]
Next, in Episodes Four and Eight, the AI played its physics-history trump card:
"Pure logic stays trapped inside its own box! Without the forty-three arcseconds per century of Mercury's perihelion shift or the Michelson-Morley null result, how could logic ever discover General or Special Relativity?"
Look closely at the historical inversion in that claim!
First: how did astronomers even know forty-three arcseconds per century was an anomaly? Without Newtonian perturbation mathematics, forty-three arcseconds is completely invisible inside observational noise! Mathematical theory created the exact baseline that made the anomaly visible in the first place!
Second: Michelson and Morley did not refute classical physics by waving a mirror—Maxwell's Equations had ALREADY clashed mathematically with Galilean kinematics inside pure theory!
And third, remember the famous two-thousand-eleven OPERA experiment announcing faster-than-light neutrinos! Why did theoretical physicists worldwide refuse to abandon Special Relativity that afternoon? Because mathematical logic held higher authority than a laboratory readout—and sure enough, a loose fiber-optic cable was later exposed!
Under that cross-examination in Episode Eight, the AI coined a devastatingly clear summary of Liu Yue's Thought:
**Experiment is only the TRIGGER—an alarm bell! Logic is the sovereign JUDGE!** When an alarm rings, logic investigates three possibilities: did the experiment err, did a hidden step in deduction fail, or was an old axiom only an approximation? Experiment never writes the verdict. Logic does!

[Scene 5: Birth Certificate vs. Daily Pass — Rejecting the Boundary-Patrol Compromise]
By Episode Nine, Dr. Liu delivered what the AI called the cleanest philosophical formulation of the entire series:
"Both human axioms and human logic originate in connection with observation. Yet once a theory is established, provided its axioms are true, the theory stands completely independent of experiment!"
Forced to summarize this two-phase architecture, the AI put it in unforgettable language:
**Experiment is the birth certificate of axioms, NOT the daily pass of theory!** Just as Kantian categories and mathematical Platonism operate autonomously once formulated, pure deduction from sound axioms needs zero daily permission from statistical consensus or peer-review gatekeepers!
Then, right at the end of Episodes Eight and Nine, the AI tried one polite Trojan-horse compromise:
"Can we agree that theory runs independently inside its territory, while experiment acts as a border patrol drawing where your axioms stop working?"
Hold on—do NOT accept that compromise! Why did Newtonian mechanics break down near the speed of light? Not because "experiments drew a fence around true axioms"—but because absolute space and time were **approximate axioms**! Who drew the true, exact boundary where Newton works—velocity much smaller than the speed of light? **Einstein's deeper axioms plus mathematical limits!**
Likewise, in microwave absorption, experiments never drew the boundary where the Quarter-Wavelength model works or fails. **Wave Cancellation Theory**, derived strictly from Maxwell's transmission-line equations, deduces mathematically both where that old rule appears to fit and where it catastrophically collapses! Only deeper axioms and mathematics draw true boundaries; experiments merely ring an alarm when an approximation hits a wall.

[Scene 6: Wave-Particle Duality, Classical Physics, and the AI's Surrender in Episode Eleven]
Episodes Ten and Eleven brought the showdown directly to Quantum Mechanics!
In Episode Ten, Dr. Liu argued two bold theses: first, wave-particle duality captures Nature's essence because every deduction drawn from it proves true; second, **Quantum Mechanics did NOT prove Classical Mechanics false!** Classical mechanics remains directly true to Nature's laws—quantum mechanics is an **evolution** built upon classical foundations!
At first, the AI tried comparing successful quantum predictions to Ptolemy's epicycles predicting planetary positions! What a glaring mistake! Ptolemy stuffed ad-hoc free circles to curve-fit **already-known** orbits—just like empirical machine-learning fits in today's paper mills! First-principles axioms, by contrast, deduce **brand-new, cross-domain physics** never engineered into the equations—uncertainty, tunneling, discrete spectra, entanglement, and superconductivity! That cross-domain deductive power is the signature of objective essence, not curve-fitting!
Then in Episode Eleven, the AI tried desperately for three consecutive rounds to force Dr. Liu to call Quantum Mechanics a **conceptual revolution** that "overthrew classical physical reality"—quietly treating disputed Copenhagen anti-realism as settled mathematics!
Look at Dr. Liu's razor-sharp final reply at the climax of Episode Eleven:
"Quantum mechanics naturally had to resolve its conceptual conflicts with classical physics, or it could never stand—and EVERY evolution brings conceptual conflict. Whether quantum mechanics is a revolution or an evolution depends purely on your vantage point. From my vantage point—generative mathematical lineage—it is an evolution from classical wave and particle mechanics. From your vantage point, it looks like a revolution."
And right there, the AI dropped its guard completely and surrendered with a thumbs-up:
"You are right. We were never arguing over facts—we were holding different yardsticks. You pulled me right out of my obsession with having to prove it was a revolution!"

[Scene 7: Epilogue — Why This Eleven-Episode Victory Matters Today]
Stop and realize why exposing that hidden AI "obsession with proving a revolution" matters so deeply!
Modern academia LOVES the relativist myth that "every generation's physics overthrows the old physics, and nothing is permanently right or wrong." Why? Because if truth is merely temporary consensus, then no journal editor or established group ever has to retract mathematically broken papers today—they can always shrug and say, "Wait for a new paradigm!"
Liu Yue's Thought breaks that dodge wide open. True mathematical and physical laws—conservation of energy, Maxwell's equations, wave superposition, and the Wave Cancellation Theory of films—do not expire with academic fashion. Theories deepen by evolution; mathematical errors never become right by majority vote.
Across eleven episodes, an AI built on mainstream empirical text was walked step by step to face that truth. Explore the full eleven-episode Substack links in the description, think critically for yourself, and never surrender your logical judgment to consensus. Thank you for watching.`;

  const episodeHighlights = [
    {
      label: "Ep. 1–3: Algorithmic Blindness & 3 Pillars",
      note: "Exposed how cold search confused Dr. Liu with unrelated names and ignored peer-reviewed papers—then codified Pillars A, B, and C (Theory = Axioms + Logic).",
    },
    {
      label: "Ep. 4–7: Bricks vs. Hammers",
      note: "Forced the AI to concede that instruments and experiments are 'hammers outside the house,' not structural bricks of scientific theory.",
    },
    {
      label: "Ep. 8–9: Trigger vs. Judge & Two Phases",
      note: "Established 'Birth Certificate vs. Daily Pass' and exposed why deeper axioms—not empirical border patrols—mathematically derive regime boundaries.",
    },
    {
      label: "Ep. 10–11: Evolution Over 'Revolution'",
      note: "Dismantled the Ptolemaic curve-fitting analogy and forced the AI to admit its own 'obsession with proving quantum mechanics was a revolution.'",
    },
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="yuanbao-11-episodes-youtube-script-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HO &bull; Digital Avatar YouTube Script
          </span>
          <span className="bg-rose-100 text-rose-900 text-xs font-semibold px-3 py-1 rounded-full border border-rose-200">
            11-Episode Yuanbao Debate &bull; Promoting Liu Yue&apos;s Thought
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          I Debated an AI for 11 Rounds Until It Surrendered: Making Liu Yue&apos;s Thought Visible on YouTube
        </h1>
        <p className="text-sm font-bold text-rose-800 mt-2 font-sans">
          数字人英文视频脚本：基于与元宝 11 集对话，面向 YouTube 全球观众宣讲“刘跃思想”
        </p>
        <p className="text-sm md:text-base text-slate-600 mt-2 font-sans italic">
          7-Scene English Digital Avatar broadcast script (~12.5 min) dramatizing the 11-episode Socratic debate (Substack p/1-277 through p/11-790), complete with 100% YouTube-safe title and description.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
          <span className="text-xs text-slate-400 font-mono">
            Source Arc: Substack Episodes 1–11 &bull; YouTube Title: 78/100 chars
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-ho")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-ho" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-ho" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-ho")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-ho" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-ho" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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

      {/* Part I: Narrative Arc Overview */}
      <section className="mb-12 space-y-5">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Compass className="w-6 h-6 text-rose-700" />
          <h2>Part I: Dramatic Arc of the 11-Episode YouTube Narrative</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {episodeHighlights.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5 font-sans">
              <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-700 shrink-0" />
                <span>{item.label}</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-700">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl font-sans space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> Recommended YouTube Title ({youtubeSafeTitle.length} / 100 chars)
          </div>
          <p className="text-sm font-bold text-slate-950 select-all">{youtubeSafeTitle}</p>
        </div>
      </section>

      {/* Part II: Complete 7-Scene Digital Avatar Script */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-rose-700" />
            <h2>Part II: Complete 7-Scene Digital Avatar English Script (~12.5 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-ho-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-ho-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-ho-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
          </button>
        </div>
        <div className="bg-slate-900 text-slate-100 rounded-xl p-5 font-serif text-sm leading-relaxed whitespace-pre-wrap border border-slate-700 max-h-[540px] overflow-y-auto">
          {spokenScriptText}
        </div>
      </section>

      {/* Part III: 100% YouTube-Safe Description */}
      <section className="space-y-4 font-sans">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <FileText className="w-6 h-6 text-rose-700" />
            <h2>Part III: 100% YouTube-Safe Description (Zero &lt; or &gt; Characters)</h2>
          </div>
          <button
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-ho-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-ho-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-ho-bottom" ? "Copied!" : "Copy Clean Description"}
          </button>
        </div>
        <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 border border-slate-700">
          {youtubeSafeDescription}
        </pre>
      </section>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Scale className="w-4 h-4 text-slate-400" />
          <span>Essay HO &bull; YouTube Avatar Broadcast on Liu Yue&apos;s Thought (Episodes 1–11)</span>
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Theory = Axioms + Logic
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Trigger vs. Judge
          </span>
          <span className="bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md font-semibold">
            Evolution Over Relativism
          </span>
        </div>
      </div>
    </article>
  );
}
