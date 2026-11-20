import React, { useState } from "react";
import { ShieldAlert, Copy, Check, Compass, Scale, Video, FileText, Flame, BookOpen, GitBranch } from "lucide-react";

export default function LiuYueTheoryScienceIsLogicScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("liu-yue-theory-science-is-logic-article-text");
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

  const youtubeSafeDescription = `Title: What Is Liu Yue's Theory? Science Is Logic, Experiment Is Alchemy (The Chaos of Academia, Part 7)

Why does modern science insist on "sufficient experimental evidence" before allowing new ideas to be asked or published—and why does Liu Yue's Theory call modern academia a "New Age of Alchemy"?

In this comprehensive overview of Liu Yue's Thought (刘跃思想), Dr. Yue Liu presents the complete philosophical, logical, mathematical, and institutional core of his epistemological system:

1. SCIENCE IS LOGIC; EXPERIMENT IS ALCHEMY:
- Mainstream academia elevates experiment to the sole test of truth ("experiment to hypothesis to experiment"). Liu Yue's Theory separates science from experiment strictly: SCIENCE IS RIGOROUS LOGIC AND THEORY; EXPERIMENT IS ALCHEMY—an auxiliary craft for gathering empirical clues, NOT the essence of science.
- Galileo did NOT prove heavy and light bodies fall equally fast via vacuum tubes—he deduced it via pure logical thought experiments.
- Raw empirical perception tells us the Sun orbits Earth and chopsticks bend in water; rigorous logic reveals heliocentrism and optical truth.

2. WHY DEMANDING PRIOR EVIDENCE PROTECTS ACADEMIC MONOPOLIES:
- Requiring "abundant evidence" before allowing problem formulation suppresses paradigm-breaking dissent. Every scientific breakthrough starts with logic formulating a question BEFORE evidence accumulates.
- Just as a detective uses logic to suspect foul play in an apparent "suicide" without prior forensic evidence (leaving evidence collection to subsequent "alchemy"), rigorous logical arguments MUST NOT require prior experimental permission to be published or debated!

3. INSTITUTIONAL REALITY: PHYSICA SCRIPTA & ERROR DETECTORS:
- After publishing two foundational Quarter-Wavelength papers in Physica Scripta (2021, 96(12): 125003; 2022, 97(1): 015806), editorial reorganization removed the handling editor and replaced leadership—leading to blanket rejections of follow-up submissions.
- Combined with Simine Vazire's "A toast to the error detectors" (Nature 2020) and the NYT Harvard cardiology scandal ("experts were just too timid to take a stand"), demanding smoking-gun proof protects institutional silence. Recording these facts is a duty to history.

4. DISTINCTIVE PHILOSOPHICAL POSITION:
- Resolves the mainstream paradox over mathematics: Mathematics IS natural science because Nature never violates mathematical logic.
- True theory (axioms + logic) CANNOT be falsified by experiment—CORRECT THEORY IS THE SOLE STANDARD TO TEST EXPERIMENT.
- Genealogy: Unlike Ian Hacking's "experimental turn," Paul Feyerabend's "anything goes," or even Karl Popper (who left experimental falsification as final arbiter), Liu Yue's Theory expels experiment from the definition of science into alchemy and establishes an institutional liberation principle: logical refutation and theoretical deduction deserve immediate publication without experimental permission.

TIMESTAMPS:
00:00 - Scene 1: Prologue — Science Is Logic; Experiment Is Alchemy (The New Age of Alchemy)
02:15 - Scene 2: Galileo, Heliocentrism & Why Sensory "Evidence" Misleads Without Logic
04:30 - Scene 3: Problem Formulation Before Evidence (Breaking the Gag Rule on Innovation)
06:40 - Scene 4: The Detective vs. The Courtroom — Logic Needs Zero Prior Evidence to Question
08:45 - Scene 5: Physica Scripta Editorial Turnover & Why Leaving a Historical Record Matters
11:25 - Scene 6: Why Mathematics IS Natural Science & Correct Theory Tests Experiment
13:20 - Scene 7: Philosophical Genealogy — Beyond Popper, Feyerabend & Hacking
15:10 - Scene 8: Epilogue — A Theory of Liberation for Scientific Innovators

Key References Cited:
- Liu, Yue, Why Are Research Findings Supported by Experimental Data with High Probability Often False? Preprints.org, 2025, DOI: 10.20944/preprints202507.1953.v1
- Liu, Yue, The Misapplication of Statistical Methods in Liberal Arts: A Critical Analysis of Academic Publishing Bias Against Theoretical Research (Aug 1, 2025). SSRN: https://ssrn.com/abstract=5376778 | http://dx.doi.org/10.2139/ssrn.5376778
- Liu, Yue, Problem Formulation as the Primary Engine of Scientific Progress: A Popperian Expansion Inspired by Rafe Champion's Commentary (Nov 18, 2025). SSRN: https://ssrn.com/abstract=5784682 | http://dx.doi.org/10.2139/ssrn.5784682
- Liu, Yue, The Primacy of Problem Formulation in Scientific Inquiry (Nov 6, 2025). SSRN: https://ssrn.com/abstract=5709303 | http://dx.doi.org/10.2139/ssrn.5709303
- Liu Y, Liu Y, Drew MGB. Physica Scripta 2021, 96(12): 125003 (DOI: 10.21203/rs.3.rs-206241/v1) & 2022, 97(1): 015806
- Vazire, S., A toast to the error detectors, Nature 577(7788) (2020) 9, DOI: 10.1038/d41586-019-03909-2
- Academic Critique Hub: https://github.com/academic-critique/hub

#LiuYueTheory #ScienceIsLogic #ExperimentIsAlchemy #PhilosophyOfScience #KarlPopper #PhysicaScripta #TheoreticalPrimacy`;

  const spokenScriptText = `[Scene 1: Prologue — Science Is Logic; Experiment Is Alchemy]
What is Liu Yue's Theory?
If you had to summarize the entire philosophy in one crystal-clear sentence, it is this:
**Science is rigorous LOGIC; Experiment is ALCHEMY!**
Modern academia tells you the exact opposite: it insists that what science prizes above all else is abundant experimental evidence. It worships the treadmill of "experiment, hypothesis, more experiment, new hypothesis." It proclaims that experiments never lie while theories are always guilty until empirically approved.
In Liu Yue's Theory, that modern obsession proves one thing: **today's scientific establishment is living in a New Age of Alchemy!**
Alchemy prized empirical tinkering and abundant sensory evidence without rigorous theoretical logic. True science prizes airtight **logical rigor**—NOT piles of experimental evidence!
Of course science still makes use of alchemy—that is, laboratory experiments. But needing an auxiliary craft does NOT turn that craft into the essence of science! In Liu Yue's Theory, "experiment" and "alchemy" are equivalent concepts—and **experiment is strictly separated from science itself**!

[Scene 2: Galileo, Heliocentrism, and Why Eyes Deceive While Logic Sees]
Do you doubt that? Look straight at the greatest breakthroughs in human history.
Did Galileo prove that light and heavy objects fall at the exact same speed by dropping an iron ball and a feather inside a vacuum tube? No! Did Galileo even physically tie a heavy stone and a light stone together in an experiment? No!
Galileo discovered that law through **pure logical reasoning**! By imagining tying a heavy stone and a light stone together, he proved logically that the "heavier falls faster" dogma contradicts itself!
Or ask yourself about the sky above your head: if you obey raw "experimental evidence" and human observation, what moves across the sky every single day? The Sun rises in the east and sets in the west—all sensory evidence screams that the **Sun revolves around the Earth**!
How did humanity learn that the Earth orbits the Sun? Through **rigorous logical deduction**!
And when a straight chopstick sits half-submerged in a bowl of water, your eyes deliver irrefutable "experimental evidence" that the chopstick is bent! Only optical theory and logical reasoning prove it is straight!
Chasing raw evidence is alchemy. Seeing essence beyond sensory illusion through mathematical logic—that is science!

[Scene 3: Problem Formulation Must Never Wait for "Sufficient Evidence"]
Look at what happens when an academic cartel demands "abundant evidence" before allowing you even to ask a question or publish a critique:
It locks the gate in favor of consensus and suffocates every disruptive breakthrough in the cradle!
As demonstrated in *"Problem Formulation as the Primary Engine of Scientific Progress"* and *"The Primacy of Problem Formulation in Scientific Inquiry,"* scientific progress NEVER begins after piles of evidence are safely collected! Requiring sufficient evidence before you are permitted to ask a question can NEVER nurture genuine discovery!
Every single revolution in science begins when **rigorous logic formulates a sharp question WITHOUT prior evidence**—and only AFTERWARD does experimental alchemy go gather empirical confirmation!

[Scene 4: The Detective vs. The Courtroom — Logic Needs Zero Permission to Ask]
Compare a courtroom with a detective!
**Law prizes evidence—so law is alchemy.** Even if someone is truly a murderer, if physical evidence is insufficient, a court cannot convict him.
**Science prizes logic.** Suppose a detective hears a man plunged from a rooftop in an apparent "suicide." Does the detective sit on his hands saying, "Since I have no video evidence yet, logic forbids me from asking whether someone pushed him"?
Never! Rigorous logic *demands* asking—with ZERO prior evidence—whether someone pushed him off that building! Going out to dust for fingerprints afterward is the subsequent job of alchemy—not the job of scientific logic!
If pure logic identifies the culprit and he truly is the culprit, that is a valid scientific conclusion; if logic misidentifies him, that is simply a flaw in deduction, NOT a reason to ban logic!
Modern academia flips this completely upside down: it acts like a corrupt courtroom guarding academic monopolies—forbidding challengers from asking questions unless they first obtain the cartel's blessing of "abundant experimental proof"!

[Scene 5: Physica Scripta, Institutional Monopolies & Why History Demands a Record]
Look at how this plays out inside real scientific publishing—even when our own Wave Mechanics Theory derives exact truth straight from Maxwell's equations!
In 2021 and 2022, *Physica Scripta* published our two foundational papers dismantling the Quarter-Wavelength Model—proving that editors inside that journal understood our logic completely.
Yet suddenly, every subsequent submission we sent was flatly rejected! Why did the same editorial board suddenly lose the ability to read the exact same mathematics?!
Look at the public historical timeline: the editorial board was reorganized, the Editor-in-Chief changed, and the handling editor who accepted our two papers disappeared from the editorial roster!
Even a third-party investigator could never subpoena private backroom emails—and mainstream critics rush to yell, "Don't speak unless you have smoking-gun insider proof!"
Yet look at Simine Vazire's famous commentary in *Nature* 2020 (*"A toast to the error detectors"*): a postdoc who published an accurate, measured correction of a famous researcher's paper was scolded by his own adviser that criticizing authorities "crossed a line"! And look at the *New York Times* report on the Harvard cardiology scandal: *"experts were just too timid to take a stand."*
Everywhere in corrupted academia, truth-tellers like Zhu Yuejun are pushed aside while smooth, academically hollow bureaucrats seize editorial thrones! We leave these public records—not out of malice, but out of duty to history so future generations can learn!

[Scene 6: Why Mathematics IS Natural Science & Why Theory Tests Experiment]
Now watch what happens to classical philosophical paradoxes once you adopt Liu Yue's Theory!
Mainstream scientists tie themselves in knots over mathematics. On Monday, they call mathematical logic the very essence of natural science; on Tuesday, they declare **"Mathematics is NOT a natural science!"** Why? Because they worship Karl Popper's rule that science must be falsifiable by experiment—and mathematical theorems cannot be falsified by lab experiments!
Look how absurd that contradiction is: how can the *essence* of natural science NOT be natural science?!
Once Liu Yue's Theory expels experiment into alchemy and defines science as rigorous logic, that paradox evaporates instantly! **Mathematics IS natural science—its beating heart—precisely because Nature NEVER violates mathematical logic!**
And look at the reversal of falsification: **correct theory—built on true axioms and airtight logic—can NEVER be falsified by experiment!** Instead, **correct theory is the SOLE standard to test experiment!** It is true theory that falsifies experimental illusions—geocentrism, heavy-falls-faster myths, bent chopsticks, and Impedance Matching errors!

[Scene 7: Where Liu Yue's Theory Stands in the Philosophy of Science]
Notice precisely why Liu Yue's Theory is genuinely original—never just repeating "science needs logic":
Traditional philosophy of science—including the discovery-versus-justification distinction and Ian Hacking's "experimental turn"—still insists on defending experiment's sovereign place inside the definition of science.
Even **Karl Popper**, who elevated theory above induction, still kept experimental falsification seated as the final court of appeal.
And **Paul Feyerabend**, though anti-monopoly in spirit, drifted toward "anything goes" without strictly redefining experiment as alchemy under strict logical discipline.
**Liu Yue's Theory goes further than every predecessor:**
First, it **expels experiment out of the definition of science into alchemy**, assigning them a clean division of labor.
Second, it establishes a radical **institutional liberation rule**: **rigorous logical deduction and theoretical refutation MUST NOT require prior experimental permission to be published and debated!**
Where experimental proof demands expensive labs, monopolized grants, and editorial approval, **pure logic is free and sovereign!**

[Scene 8: Epilogue — The Manifesto of Free Scientific Thought]
Science is born from alchemy, yet transcends alchemy the moment rigorous theory takes command.
Do not let the New Age of Alchemy silence your mind behind demands for "more experimental permission." Sharpen your axioms, guard your logic, and let truth stand on reason alone.
Thank you for watching—and for defending real science.`;

  const corePillars = [
    {
      title: "1. Core Definition: Science = Logic; Experiment = Alchemy",
      detail: "Science is strictly separated from experiment. Experiment is an auxiliary evidence-finding craft (alchemy), whereas science is rigorous logical deduction and mathematical theory that penetrates beyond sensory illusion."
    },
    {
      title: "2. Classical Proofs: Galileo, Heliocentrism & Chopsticks",
      detail: "Galileo deduced equal free-fall via thought experiment (not vacuum tubes); logic proved heliocentrism over sensory geocentrism and straightened the optical illusion of a bent chopstick in water."
    },
    {
      title: "3. Institutional Liberation: Publish Logic Without Prior Evidence",
      detail: "Like a detective questioning an apparent suicide before forensic proof arrives, rigorous logical critiques and problem formulation MUST NOT require experimental permission or cartel consensus to publish."
    },
    {
      title: "4. Resolving Math Paradox & Reversing Falsification",
      detail: "Mathematics IS natural science because Nature never breaks mathematical logic. True theory (axioms + logic) is never falsified by experiment—true theory is the sole standard that falsifies bad experiments."
    }
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="liu-yue-theory-science-is-logic-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HE &bull; Chaos of Academia, Part 7 Synthesis
          </span>
          <span className="bg-indigo-100 text-indigo-900 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200">
            Liu Yue&apos;s Theory &bull; Science Is Logic, Experiment Is Alchemy
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          What Is Liu Yue&apos;s Theory? Science Is Logic, Experiment Is Alchemy — Why Scientific Thought Must Not Require Experimental Permission
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          A complete synthesis of Liu Yue&apos;s Thought (刘跃思想): separating science (logic) from alchemy (experiment), the Galileo and detective proofs, the <em>Physica Scripta</em> editorial turnover record, why mathematics IS natural science, and how Liu Yue goes beyond Popper, Feyerabend, and Hacking to dismantle academic monopolies.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Epistemology &amp; Scientific Manifesto
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-he")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-he" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-he" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-he")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-he" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-he" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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
      {/* PART I: OVERVIEW OF LIU YUE'S THOUGHT & PHILOSOPHICAL GENEALOGY            */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Compass className="w-6 h-6 text-indigo-700" />
          <h2>Part I: Architecture &amp; Originality of Liu Yue&apos;s Theory</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {corePillars.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
              <h3 className="font-sans font-bold text-slate-950 text-sm">{item.title}</h3>
              <p className="text-xs md:text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50/80 border border-amber-300 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-amber-950 text-base flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
            Institutional Record: <em>Physica Scripta</em> &amp; The Suppression of Error Detectors
          </h3>
          <p className="text-sm text-slate-800">
            After <em>Physica Scripta</em> published Liu&apos;s two foundational Quarter-Wavelength papers (2021, 96(12): 125003; 2022, 97(1): 015806), editorial reorganization removed the handling editor and brought new gatekeepers to power—resulting in systematic rejections of follow-up manuscripts. Together with Simine Vazire&apos;s <em>Nature</em> warning (<em>A toast to the error detectors</em>, 2020) and the <em>NYT</em> Harvard cardiology report (&ldquo;experts were just too timid to take a stand&rdquo;), demanding unattainable insider evidence shields academic monopolies from accountability.
          </p>
        </div>

        <div className="bg-indigo-50/80 border border-indigo-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-indigo-950 text-base flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-indigo-700 shrink-0" />
            Philosophical Genealogy: Going Beyond Popper, Feyerabend &amp; Hacking
          </h3>
          <p className="text-sm text-slate-800">
            Unlike the discovery/justification distinction or Ian Hacking&apos;s &ldquo;experimental turn&rdquo; (which defend experiment&apos;s autonomous status inside science), and going further than Paul Feyerabend (&ldquo;anything goes&rdquo;) and Karl Popper (who prioritized theory yet left empirical falsification as final judge), <strong>Liu Yue&apos;s Theory</strong> expels experiment from the definition of science into alchemy and champions an explicit institutional liberation thesis: <strong>logical refutations and theoretical deductions must never require prior experimental permission to be published and debated.</strong>
          </p>
        </div>

        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl border border-slate-700 space-y-2">
          <div className="font-sans font-bold text-amber-300 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>Primary Literature &amp; Archival Citations</span>
          </div>
          <ul className="text-xs font-mono text-slate-200 space-y-1.5">
            <li>&bull; Liu, Y., Preprints.org, 2025, DOI: 10.20944/preprints202507.1953.v1 (Replication Crisis &amp; Experimental Fallacy)</li>
            <li>&bull; Liu, Y., SSRN 5376778 (Aug 1, 2025) | http://dx.doi.org/10.2139/ssrn.5376778</li>
            <li>&bull; Liu, Y., SSRN 5784682 (Nov 18, 2025) &amp; SSRN 5709303 (Nov 6, 2025) (Primacy of Problem Formulation)</li>
            <li>&bull; Liu Y, Liu Y, Drew MGB, Phys. Scr. 2021, 96(12): 125003 (DOI: 10.21203/rs.3.rs-206241/v1) &amp; 2022, 97(1): 015806</li>
            <li>&bull; Vazire, S., Nature 577(7788) (2020) 9, DOI: 10.1038/d41586-019-03909-2; NYT Harvard Cardiology Report (16 Oct 2018)</li>
          </ul>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 8-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-rose-700" />
            <h2>Part II: Complete 8-Scene Digital Avatar Broadcast Script (~16 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-he-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-he-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-he-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
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
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-he-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-he-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-he-bottom" ? "Copied!" : "Copy Clean Description"}
          </button>
        </div>
        <p className="text-xs text-slate-500">
          Zero angle brackets (&lt; or &gt;) so YouTube Studio accepts it cleanly without validation errors.
        </p>
        <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 border border-slate-700">
          {youtubeSafeDescription}
        </pre>
      </section>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          What Is Liu Yue&apos;s Theory? &bull; Essay HE &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Science = Logic
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Experiment = Alchemy
          </span>
          <span className="bg-indigo-100 text-indigo-900 px-2.5 py-1 rounded-md font-semibold">
            Break Academic Monopolies
          </span>
        </div>
      </div>
    </article>
  );
}
