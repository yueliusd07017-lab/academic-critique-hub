import React, { useState } from "react";
import { ShieldAlert, Copy, Check, Bot, Video, FileText, Flame, Compass, Scale, Layers, FlaskConical, Cpu } from "lucide-react";

export default function ForensicDissectionFinalePart2Script() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("forensic-dissection-finale-part2-article-text");
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

  const youtubeSafeDescription = `Title: Why AI & Mainstream Gatekeepers Defend Cargo Cult Science: Re-Examining Xiaowei's Self-Q&A | Forensic Dissection Series Finale (Part 2)

Welcome to Part 2 of our two-part Series Finale for "Why Modern Science Is in a Dark Age" (Forensic Dissection Series).

In Part 1, we audited the eight foundational pillars of our investigation—authority worship, sub-undergraduate blunders in SCI flagship journals, retaliation against error detectors, and public censorship proving the establishment is protecting pseudoscience rather than consensus.

In Part 2, Dr. Yue Liu re-examines a complete transcript of "Xiaowei's Self-Q&A" (WeChat AI, Nov 5)—showing how, just like mainstream scientists, AI generates plausible-sounding apologies for Cargo Cult Science without ever reading the primary Wave Mechanics papers:

1. POPULAR ADOPTION IS NOT AN "ACADEMIC DEBATE":
Xiaowei claims Dr. Liu's theory is "controversial" because most papers still use Impedance Matching. Continuing to publish a refuted dogma while refusing to answer mathematical refutations is NOT a scientific controversy—it is Cargo Cult Science!

2. TRANSMISSION LINE THEORY vs. IMPEDANCE MATCHING THEORY vs. WAVE MECHANICS THEORY:
- Transmission Line Theory is a foundational electromagnetic theory; it contains NO conceptual system for material microwave absorption.
- Impedance Matching Theory is a FALSE discipline theory built on misinterpreting Transmission Line Theory's Zin = Z0 condition. It treats |Zin| = |Z0| as letting all waves enter the material to be absorbed by attenuation, treats film peaks as intrinsic material resonances, and possesses ZERO wave-superposition formulas. Calling its errors "isolated simplified teaching" is the exact same alibi used when journals call misconduct "isolated cases."
- Wave Mechanics Theory is the true discipline theory of microwave absorption: distinguishing film from material (J. Magn. Magn. Mater. 2024, 593, 171850), proving peaks arise from destructive interference between r1 and r2, proving RL = negative infinity at Zin = Z0, proving from the inward-spiral polar plot of |R2| and |RL| that a film generally has AT MOST ONE Zin = Z0 peak (while most peaks cannot satisfy Zin = Z0), proving peaks occur at phase differences above 180 degrees, and replacing the qualitative Quarter-Wavelength model with the exact inverse frequency-thickness law.

3. WHO CONFUSED SUFFICIENT AND NECESSARY CONDITIONS — AND XIAOWEI'S STRAWMAN:
- Impedance Matching Theory—not Wave Mechanics—confused sufficient and necessary conditions: a lossless material with Zin = Z0 exhibits zero absorption peak, and most real absorption peaks do NOT occur at Zin = Z0!
- Worse, Xiaowei invents a false quote claiming Dr. Liu says "even if all waves enter the film, strong reflection occurs periodically with thickness." Wave Mechanics NEVER said that! When all incident waves enter without internal two-beam interference (material attenuation alone), reflection decreases monotonically with thickness without creating peaks—one of Wave Mechanics' core proofs against Impedance Matching!

4. "ALREADY IN MAXWELL'S EQUATIONS" FALLACY:
By Xiaowei's logic, Newtonian mechanics isn't a new theory because it uses calculus, magnetism physics isn't a discipline theory because it uses basic physics, and quantum mechanics isn't a new theory because it combines wave mechanics with wave-particle duality! Building a rigorous discipline theory on Transmission Line foundations does NOT erase its originality.

5. FILM FORCES MATERIAL ABSORPTION & ENERGY CONSERVATION:
Just as integrated circuits are built from sand yet raw sand cannot perform circuit logic, film absorption is NOT equal to bulk dielectric/magnetic loss (A = 1 - |RL|^2). The film forces its constituent material to absorb energy according to destructive interference requirements, while rapid relaxation keeps permittivity and permeability invariant.

6. LOGIC OVERTHROWS FALSE THEORIES — NOT NEW FABRICATION RECIPES:
Demand for "missing VNA calibration, filler ratios, and independent replication packages" misses how science works. The same historical planetary observations used for geocentrism proved heliocentrism. Refuting Impedance Matching requires NO new experimental recipes—Wave Mechanics proves Impedance Matching false using mainstream scientists' OWN published data and rigorous math!

7. MATERIAL DESIGN POWER vs. 50 YEARS OF POST-HOC CURVE FITTING:
For over half a century, Impedance Matching produced zero predictive design rules—one experiment never guided the next. Wave Mechanics lets engineers compute absorption peaks directly from permittivity, permeability, and thickness d, determine target frequency-dispersion profiles for bandwidth, and design thinner absorbers systematically.

8. THE REAL REASON NOBODY PUBLISHES A REFUTATION:
Mainstream researchers do not ignore Wave Mechanics because refuting it has "low ROI for daily lab work." Claiming you have no time to verify whether your foundational theory is wrong is the textbook definition of Richard Feynman's Cargo Cult Science. The logical proof is already complete; what is stalled is an entire establishment practicing pseudoscience!

TIMESTAMPS:
00:00 - Scene 1: Prologue — Why AI Parrots Cargo Cult Apologetics Without Reading the Papers
02:05 - Scene 2: Silence Is Not a "Controversy" — Popularity vs. Mathematical Truth
04:10 - Scene 3: Three Distinct Theories — Transmission Line vs. Impedance Matching vs. Wave Mechanics
06:45 - Scene 4: Exposing the Strawman & Sufficient-vs-Necessary Inversion
09:05 - Scene 5: The "Nothing New Beyond Maxwell" Fallacy & Film vs. Material Physics
11:25 - Scene 6: The "Replication Package" Excuse — Refuting Dogma Using Mainstream Data
13:45 - Scene 7: 50 Years of Zero Design Rules vs. Predictive Wave Mechanics Design
15:40 - Scene 8: Epilogue — "Low ROI" Confessions & Closing the Forensic Dissection Series

Key References Cited:
- Liu, Y., Liu, Y., Drew, M. G. B., Wave Mechanics of Microwave Absorption in Films - Distinguishing Film from Material, J. Magn. Magn. Mater. 2024, 593, 171850
- Liu, Y., Liu, Y., Drew, M. G. B., Recognizing Problems in Publications Concerned with Microwave Absorption Film and Providing Corrections: A Focused Review, Ind. Eng. Chem. Res. 2025, 64(7), 3635-3650
- Liu, Y., Liu, Y., Drew, M. G. B., Physica Scripta 2021/2022; J. Appl. Phys. 2023
- Liu, Y., The Theoretical Poverty of Modern Academia, SSRN 5463155 (2025)
- Academic Critique Hub: https://github.com/academic-critique/hub

#WaveMechanics #ImpedanceMatchingMyth #CargoCultScience #ScientificMethod #MicrowaveAbsorption #PhilosophyOfScience #AcademicCritique`;

  const spokenScriptText = `[Scene 1: Prologue — Why AI Parrots Cargo Cult Apologetics Without Reading the Papers]
Welcome to Part Two—the final chapter—of our Forensic Dissection Series: Why Modern Science Is in a Dark Age.
In Part One, we audited the eight foundational pillars of our investigation and exposed how public censorship and flagship fraud-rehabilitation tear off the painted mask of modern academia.
Today, we put a complete transcript of mainstream apologetics under the forensic microscope: the November 5th Self-Q-and-A generated by Xiaowei—WeChat's AI assistant.
Why examine an AI Q-and-A? Because just like mainstream scientists, AI refuses to read the primary Wave Mechanics literature and instead strings together plausible-sounding excuses from prevailing dogma! Even worse, Xiaowei dismisses our debates with AI by saying they "lack signed critiques from independent human scholars"—completely ignoring WHY we turned to AI in the first place! Mainstream experts fled mathematical debate, forcing us to debate AI. What that revealed is devastating: human specialists in their own field ought to possess deeper insight than a general AI, yet mainstream scientists perform even worse than AI—while blaming the challenger for the establishment's own cowardice!

[Scene 2: Popular Adoption Is Not an "Academic Debate"]
Look at Xiaowei's very first claim: it asserts that Dr. Yue Liu's views are "highly controversial," because "most microwave absorption papers still use the traditional Impedance Matching model."
Hold everything! Repeating a broken model while refusing to answer a single mathematical refutation is NOT an "academic debate"!
If side A publishes rigorous proofs showing that side B's foundational equations violate physics, and side B ignores the proofs, deletes accounts, blocks posts, and keeps publishing the same errors without ever refuting side A, there is NO "dispute" between two valid schools! Using silent majority compliance to pretend there is a "debate" is pure whitewashing of Cargo Cult Science.

[Scene 3: Three Distinct Theories — Transmission Line vs. Impedance Matching vs. Wave Mechanics]
Next, Xiaowei repeats the establishment's favorite shell game: confusing three completely distinct theories.
Let us draw the bright lines once and for all.
First: Transmission Line Theory is a foundational electromagnetic theory. It derives input impedance Z-in and computes multilayer boundary reflection coefficients. However, Transmission Line Theory itself has ZERO conceptual system for material microwave absorption.
Second: Impedance Matching Theory IS a discipline theory for microwave absorption—and its conceptual system is completely WRONG! It misinterprets the transmission-line condition Z-in equals Z-0 to claim that when the magnitude of Z-in matches Z-0, all incident microwaves enter the material, where material attenuation absorbs them—and it treats film absorption peaks as intrinsic material resonance frequencies! It has NO concept and NO mathematical formula of wave superposition!
Xiaowei excuses these blunders by saying "this is only an individual's simplified pedagogical explanation—not the whole field's fault." That is the exact same alibi Nature uses when calling widespread misconduct "isolated cases"! Worse still, if you quietly patch Impedance Matching's errors by stealing Wave Mechanics concepts without attribution, Impedance Matching turns INTO Wave Mechanics Theory! That isn't "reconciling frameworks"—it is shameless academic theft!
Third: Wave Mechanics Theory is the true, rigorous discipline theory of microwave absorption! It splits film reflection into front-interface reflection r-one and back-interface-plus-path reflection r-two; gives the first exact complex formula for beam R-two; proves absorption peaks come from destructive wave cancellation rather than material resonance; introduces inward-spiral polar plots of R-two and RL under energy conservation; shows absorption peaks occur at phase differences strictly greater than one hundred eighty degrees due to the balance between phase and attenuation; and replaces the qualitative Quarter-Wavelength model—which mentioned interference in words while possessing no R-two formula in math—with the exact inverse relationship between film thickness and frequency!

[Scene 4: Exposing the Strawman and Sufficient-vs-Necessary Inversion]
Watch how Xiaowei embarrasses itself on two technical points when parroting hostile prompts.
First, Xiaowei claims AI evaluations showed Dr. Liu "confused sufficient and necessary conditions." Wrong! It is Impedance Matching Theory that confuses sufficient and necessary conditions! Transmission Line Theory shows reflection loss reaches negative infinity at Z-in equals Z-0. Yet Z-in equals Z-0 does NOT guarantee an absorption peak! For a non-absorbing lossless material in a metal-backed film, Z-in varies with thickness and can cross Z-0 with ZERO absorption! Even better, our inward-spiral polar curve proves a real absorbing film generally has AT MOST ONE peak at Z-in equals Z-0—nearly all other absorption peaks CANNOT occur at Z-in equals Z-0!
Second, Xiaowei invents a blatant strawman, claiming Dr. Liu says "even if all waves enter the film, strong reflection occurs and absorption oscillates periodically with thickness." Wave Mechanics NEVER said that! If all incident waves enter the material with zero internal two-beam interference, reflection decreases monotonically with thickness and NEVER produces absorption peaks—one of our exact mathematical proofs showing why Impedance Matching fails!

[Scene 5: The "Nothing New Beyond Maxwell" Fallacy & Film vs. Material Physics]
Xiaowei also asks: "If interference, standing waves, and phase already come from Maxwell's equations and transmission lines, why call it a new theory?"
Think about how absurd that objection is! By that logic, Newtonian mechanics isn't a new theory because it relies on calculus! Magnetism physics isn't a discipline theory because it relies on basic physics! And quantum mechanics isn't a new theory because it merely binds classical wave mechanics to wave-particle duality! Using a foundational mathematical tool does NOT strip a discipline theory of its identity or originality.
And look at Xiaowei's next cliché: "Interference only redistributes fields; you still need dielectric or magnetic loss to turn waves into heat!"
Of course loss is needed—just as integrated circuits are made from sand! Does that mean you can throw raw sand on a motherboard and call it a processor?! Our 2024 Journal of Magnetism and Magnetic Materials paper proves mathematically that film absorption A equals one minus RL-squared is NOT equal to the material's intrinsic dielectric or magnetic loss! The film structure forces its constituent material to absorb energy strictly according to destructive interference requirements, while rapid relaxation keeps the ground-state population dominant so permittivity and permeability stay constant before and after absorption.

[Scene 6: The "Replication Package" Excuse — Refuting Dogma With Mainstream Data]
Listen to Xiaowei's loudest excuse: "Wave Mechanics is not completely proven because we lack independent replication, unmade structure predictions, VNA calibration specs, and full filler-preparation recipes!"
This exposes the exact empiricist superstition keeping academia trapped in medieval alchemy!
First, defining a theory as "not thoroughly proven" until mainstream peers accept it is pure circular dogma—meaning truth is decided by headcount, not mathematics!
Second, did Copernicus or Kepler need brand-new telescope manufacturing recipes to overthrow geocentrism? No! The very planetary observations used to claim the Sun orbited the Earth were the exact data that proved geocentrism false!
Likewise, overthrowing Impedance Matching requires ZERO new VNA settings or proprietary filler recipes! Our peer-reviewed SCI articles, Substack essays, and YouTube forensic videos overthrow Impedance Matching completely using mainstream scientists' OWN published experimental data and rigorous mathematical logic! A true theory is true from every angle; a false theory collapses from every angle—and any dataset claimed to "support" a false theory is false support, even when both theories plot the identical RL curve!

[Scene 7: 50 Years of Zero Design Rules vs. Predictive Wave Mechanics Design]
Xiaowei claims mainstream Impedance Matching "already has strong predictive power across multilayer films."
Really?! Impedance Matching dominated microwave absorption for over half a century, burning billions in research grants across tens of thousands of papers. Name ONE general material design rule it discovered! Under Impedance Matching, experiment one never guided experiment two—it is a post-hoc excuse, an all-purpose curve-fitting balm that "explains" everything backward and predicts nothing forward!
Meanwhile, Wave Mechanics Theory actually solves the problem Xiaowei falsely claims it lacks: give Wave Mechanics a set of permittivity, permeability, and thickness values, and it calculates every absorption peak and intensity BEFORE you run the experiment! Better yet, it turns research into genuine science: first choose target permittivity and permeability for your application, derive the required frequency-dispersion curves for your target bandwidth, synthesize materials matching those electromagnetic parameters, and apply the inverse thickness-frequency law to design thinner absorbers. Every experiment guides the next!

[Scene 8: Epilogue — "Low ROI" Confessions & Closing the Series]
Finally, read Xiaowei's most chilling admission about why mainstream researchers refuse to publish rebuttals: "Validating derivations and conditions has too low a return on investment for researchers doing daily material design."
Stop and let that confession sink in! You build your entire career, grant proposals, and thousands of papers on a theory—someone publishes mathematical proof that the theory is fundamentally wrong—and your excuse for refusing to check is that finding out the truth has a "low return on investment"?!
That sentence alone is the living portrait of Richard Feynman's Cargo Cult Science!
What is truly stalled today is not theoretical verification. The logical proof is already complete, published, and crystal clear. What is stalled is an entire scientific establishment practicing pseudoscience—and a silent majority waiting for permission instead of reading the equations for themselves.
This concludes Part Two of our Series Finale and brings our Forensic Dissection Series—Why Modern Science Is in a Dark Age—to its close. Thank you for watching, questioning dogma, and standing up for mathematical truth.`;

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="forensic-dissection-finale-part2-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay GX &bull; Series Finale Part 2
          </span>
          <span className="bg-indigo-100 text-indigo-900 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200">
            Re-Examining Xiaowei&apos;s Self-Q&amp;A &bull; Wave Mechanics vs. Cargo Cult Apologetics
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Forensic Dissection Series Finale (Part 2): Dismantling Xiaowei&apos;s Self-Q&amp;A — Why AI Apologetics Exposes Mainstream Cargo Cult Science
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          A point-by-point cross-examination of the November 5 WeChat AI (&ldquo;Xiaowei&rdquo;) Q&amp;A transcript through the lens of our entire Forensic Dissection Series, separating Transmission Line foundations, false Impedance Matching dogma, and Wave Mechanics Theory, complete with an 8-Scene Digital Avatar Broadcast Script and 100% YouTube-Safe Description.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Forensic Dissection Series Finale Part 2
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-finale2")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-finale2" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-finale2" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-finale2")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-finale2" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-finale2" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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
      {/* PART I: FORENSIC CROSS-EXAMINATION OF XIAOWEI'S SELF-Q&A                   */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Bot className="w-6 h-6 text-indigo-700" />
          <h2>Part I: Systematic Re-Examination of Xiaowei&apos;s (WeChat AI) Self-Q&amp;A (Nov 5)</h2>
        </div>

        {/* Section 1 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <Cpu className="w-4 h-4 text-slate-700 shrink-0" />
            1. Parroting Without Reading Primary Papers &amp; The &ldquo;No Signed Human Critique&rdquo; Alibi
          </h3>
          <p className="text-sm text-slate-700">
            Like mainstream scientists, Xiaowei never actually reads Wave Mechanics Theory&apos;s primary literature; it generates plausible-sounding rhetoric by free-associating from mainstream training slogans. Worse, when Xiaowei complains that Dr. Liu&apos;s debates with AI &ldquo;lack signed critiques from independent human scholars,&rdquo; it flips reality upside down: Dr. Liu only turned to AI because mainstream scholars fled rigorous mathematical debate. While AI naturally outperforms laypeople, domain experts ought to surpass AI in depth&mdash;yet mainstream specialists proved even less capable than AI, and blaming Dr. Liu for the lack of signed human rebuttals blames the challenger for the establishment&apos;s silence.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <Scale className="w-4 h-4 text-rose-700 shrink-0" />
            2. Continuing a Refuted Model Without Rebuttal Is Cargo Cult Science, Not an &ldquo;Academic Controversy&rdquo;
          </h3>
          <p className="text-sm text-slate-700">
            Xiaowei argues that Dr. Liu&apos;s theory is &ldquo;highly controversial and not widely accepted&rdquo; because most papers still use Impedance Matching, framing journal rejection as &ldquo;normal peer review&rdquo; and public silence as a &ldquo;normal academic dispute.&rdquo; Yet continuing to publish a mathematically refuted model without ever publishing a counter-proof&mdash;while banning incisive corrections, revoking submission accounts, and rubber-stamping sub-undergraduate blunders in SCI journals&mdash;is not a debate between rival schools. It is <strong>Cargo Cult Science</strong> pretending refutation never occurred.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-indigo-50/60 border border-indigo-200 p-5 rounded-xl space-y-3">
          <h3 className="font-sans font-bold text-indigo-950 text-base flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-700 shrink-0" />
            3. Three Distinct Frameworks: Transmission Line Theory vs. Impedance Matching Theory vs. Wave Mechanics Theory
          </h3>
          <ul className="list-disc pl-5 text-sm text-slate-800 space-y-2">
            <li>
              <strong>Transmission Line Theory (Foundational Theory):</strong> Correctly models electromagnetic wave propagation, derives <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub>, and computes multilayer reflection under various boundaries. However, Transmission Line Theory is a general foundation; it has <strong>no conceptual system for material microwave absorption</strong>.
            </li>
            <li>
              <strong>Impedance Matching Theory (False Discipline Theory):</strong> Built on <em>misinterpreting</em> Transmission Line Theory&apos;s <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> formula. Its core dogma asserts that when |<em>Z</em><sub>in</sub>| = |<em>Z</em><sub>0</sub>|, incident microwaves enter the material completely and are absorbed if material attenuation is strong enough, treating absorption peaks as intrinsic material resonance frequencies. It possesses <strong>no wave-superposition concepts or formulas</strong>. Excusing these foundational errors as &ldquo;isolated simplified teaching&rdquo; repeats the exact fallacy of dismissing journal fraud as &ldquo;isolated cases.&rdquo; Quietly importing Wave Mechanics corrections into Impedance Matching simply converts it <em>into</em> Wave Mechanics Theory.
            </li>
            <li>
              <strong>Wave Mechanics Theory (True Discipline Theory of Microwave Absorption):</strong> Just as Newtonian mechanics is not erased because it uses calculus, magnetism physics is a complete discipline despite resting on basic physics, and quantum mechanics is a distinct revolution despite pairing classical wave equations with wave-particle duality, Wave Mechanics Theory builds a comprehensive discipline framework specifically for absorbing materials:
              <ul className="list-[circle] pl-5 mt-1.5 space-y-1 text-slate-700">
                <li>Splits film reflection into front-interface beam <em>r</em><sub>1</sub> and back-interface + bulk-path beam <em>r</em><sub>2</sub>, first establishing the <strong>exact complex mathematical expression for <em>R</em><sub>2</sub> (<em>r</em><sub>2</sub>)</strong> (without which the Quarter-Wavelength model talked vaguely about interference while perpetually relapsing into Impedance Matching resonance).</li>
                <li>First proves |<em>RL</em>| absorption peaks arise strictly from <strong>destructive interference</strong> between <em>r</em><sub>1</sub> and <em>r</em><sub>2</sub> at phase differences &gt; 180&deg; (balancing phase effect against attenuation power), replacing the qualitative Quarter-Wavelength model with the exact <strong>inverse frequency&ndash;thickness law</strong>.</li>
                <li>First proves neither the material, nor the film, nor the interfaces absorb microwaves via intrinsic resonance; rather, <strong>the film forces its material to absorb according to destructive interference requirements</strong> (<em>J. Magn. Magn. Mater.</em> 2024, 593, 171850), while rapid ground-state relaxation keeps &varepsilon;<sub><em>r</em></sub> and &mu;<sub><em>r</em></sub> constant. (Saying dielectric/magnetic loss is still needed so wave theory adds nothing is like claiming we can compute directly on raw sand because integrated circuits are built from sand!)</li>
                <li>First establishes fixed-frequency inward-spiral polar plots of |<em>R</em><sub>2</sub>| and |<em>RL</em>| governed by energy conservation, proving <em>RL</em> &rarr; &minus;&infin; occurs at <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub>, that a film generally has <strong>at most one</strong> peak at <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub>, and that most absorption peaks cannot occur at <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub>.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-amber-950 text-base flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
            4. Reversing the Charge: Who Confused Sufficient &amp; Necessary Conditions + Xiaowei&apos;s Strawman
          </h3>
          <p className="text-sm text-slate-800">
            Xiaowei repeats the claim that Dr. Liu &ldquo;confused sufficient and necessary conditions.&rdquo; In reality, <strong>Impedance Matching Theory commits that exact logical fallacy</strong>: while <em>RL</em> = &minus;&infin; implies <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub>, satisfying <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> does NOT guarantee an absorption peak (e.g., a lossless non-absorbing metal-backed film crosses <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> as thickness varies with zero absorption!), and nearly all other real peaks occur where <em>Z</em><sub>in</sub> &ne; <em>Z</em><sub>0</sub>. Furthermore, Xiaowei fabricates a strawman claiming Dr. Liu argues &ldquo;even if all microwaves enter the film, strong reflection occurs periodically with thickness.&rdquo; Wave Mechanics never claimed this: if all incident waves enter without internal two-beam interference, reflection decreases monotonically with thickness without forming peaks&mdash;one of the decisive refutations of Impedance Matching!
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700 shrink-0" />
            5. The &ldquo;Replication Package &amp; Full Proof&rdquo; Fallacy: Logic + Mainstream Data Refute False Theories
          </h3>
          <p className="text-sm text-slate-700">
            Xiaowei insists a theory is &ldquo;far from thoroughly proven&rdquo; without &ldquo;independent replication, full VNA/filler recipes, and peer consensus&rdquo;&mdash;effectively defining scientific truth as mainstream approval. Yet did heliocentrism require brand-new material recipes? The very planetary data previously cited for geocentrism refuted geocentrism! Wave Mechanics refutes Impedance Matching rigorously using <strong>logic and mainstream scientists&apos; own published data</strong>. Any true theory holds from every angle; any false theory fails from every angle&mdash;and &ldquo;experimental support&rdquo; for a false theory is counterfeit support even though both theories plot the same mathematical <em>RL</em> curve.
          </p>
        </div>

        {/* Section 6 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <Compass className="w-4 h-4 text-indigo-700 shrink-0" />
            6. Predictive Material Design vs. Fifty Years of Post-Hoc Curve Fitting
          </h3>
          <p className="text-sm text-slate-700">
            Over fifty years under Impedance Matching produced <strong>zero material design laws</strong>&mdash;millions in funding spent on tens of thousands of papers where no experiment guided the next, serving only as post-hoc rationalization to publish articles. Contrary to Xiaowei&apos;s claim that Wave Mechanics lacks predictive rules, Wave Mechanics takes known (&varepsilon;<sub><em>r</em></sub>, &mu;<sub><em>r</em></sub>, <em>d</em>) and calculates every absorption peak and amplitude in advance, letting engineers first specify target permittivity/permeability and frequency-dispersion curves for bandwidth, then apply the inverse thickness&ndash;frequency law to engineer thinner films systematically.
          </p>
        </div>

        {/* Section 7 */}
        <div className="bg-rose-50/70 border border-rose-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-rose-950 text-base">
            7. The &ldquo;Low ROI&rdquo; Confession: What Is Truly Stalled Is Not Logic, But Cargo Cult Science
          </h3>
          <p className="text-sm text-rose-950 font-semibold">
            Xiaowei unwittingly confesses the truth when explaining why no scholar publishes a mathematical check: verifying whether the field&apos;s foundational equations are right or wrong supposedly offers &ldquo;low return on investment for people doing daily material design.&rdquo; Refusing to check whether your core premise is false because verification doesn&apos;t pay off is the purest confession of Feynman&apos;s Cargo Cult Science. The logical refutation is already complete; what remains stalled is an entire establishment practicing pseudoscience.
          </p>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 8-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-indigo-700" />
            <h2>Part II: Complete 8-Scene Digital Avatar Broadcast Script (~16 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-finale2-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-finale2-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-finale2-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
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
            <FileText className="w-6 h-6 text-indigo-700" />
            <h2>Part III: 100% YouTube-Safe Description (Zero &lt; or &gt; Characters)</h2>
          </div>
          <button
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-finale2-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-finale2-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-finale2-bottom" ? "Copied!" : "Copy Clean Description"}
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
          Forensic Dissection Series &bull; Finale Part 2 &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Xiaowei Q&amp;A Re-Audit
          </span>
          <span className="bg-indigo-100 text-indigo-900 px-2.5 py-1 rounded-md font-semibold">
            3 Theories Separated
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Logic Over Consensus
          </span>
        </div>
      </div>
    </article>
  );
}
