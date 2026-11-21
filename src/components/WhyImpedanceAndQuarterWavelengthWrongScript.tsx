import React, { useState } from "react";
import {
  ShieldAlert,
  Copy,
  Check,
  Waves,
  BookOpen,
  Video,
  FileText,
  Flame,
  Sparkles,
} from "lucide-react";

export default function WhyImpedanceAndQuarterWavelengthWrongScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("why-impedance-quarter-wavelength-wrong-article-text");
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

  const youtubeSafeDescription = `Title: Why Impedance Matching & Quarter-Wavelength Theories Are Wrong (Wave Mechanics Refutes AI)

Both Impedance Matching Theory and Wave Mechanics Theory grow out of transmission-line theory for metal-backed films. Yet transmission-line theory itself has no conceptual framework for microwave-absorbing materials—each theory built its own conceptual system on top of the math.

Impedance Matching Theory misunderstood the transmission-line result (RL approaching minus infinity at Zin = Z0), discarded wave interference completely, and imagined that matching |Zin| to |Z0| lets maximum energy enter a material to be absorbed by intrinsic resonance.

Wave Mechanics Theory proves that Impedance Matching confused FILM absorption with MATERIAL absorption. Absorption peaks arise purely from destructive wave interference—NOT from material attenuation along the travel path. Using the exact expression for R2 and polar plots of |R2|, Wave Mechanics proves peaks occur where the optical path difference between front- and back-interface reflections exceeds 180 degrees (refuting naive Quarter-Wavelength cancellation), that full wave entry yields ZERO peak, and that the film forces the material to absorb according to interference demands.

In this Digital Avatar script, Dr. Yue Liu refutes all six mainstream and AI defenses (A through F):

A. ARE IMPEDANCE MATCHING AND WAVE MECHANICS EQUIVALENT VIA Zin = Z0?
No! Impedance Matching historically used |Zin| = |Z0|; mainstream authors only switched to Zin = Z0 stealthily AFTER Wave Mechanics—without citing it. Neither transmission-line theory, Impedance Matching, nor Quarter-Wavelength Theory had the R2 equation.

B. THE REAL WATERSHED TEST: INTERFERENCE PEAK VS. ATTENUATION PEAK
The true test is whether absorption peaks come from wave interference or material attenuation. For 50+ years, mainstream science NEVER published a single calculation proving peaks come from attenuation rather than interference.

C. "ONLY INDIVIDUALS MISUNDERSTOOD" & THE 50-YEAR DESIGN PROOF
If scientists truly viewed the Zin = Z0 peak as thickness-dependent interference, they would have deduced required permittivity and permeability from thickness—nobody did for 50+ years until Wave Mechanics! Stealthily fixing the ZM sign error without citation exposes moral bankruptcy.

D. "MAYBE SCIENTISTS DIDN'T SEE IT" — THE DUPLICATE-SUBMISSION RULE
Science forbids duplicate submission because ONCE PUBLISHED ONCE, THE ENTIRE COMMUNITY HAS SEEN IT. One person may miss a paper; the community as a whole MUST see it and rebut it if wrong.

E. "IMPEDANCE MATCHING IS USEFUL FOR MATERIAL DESIGN"
50+ years produced ZERO design rules! A false theory cannot design materials—it is only useful for writing papers.

F. AI XIAOWEI: "INTERFERENCE ONLY REDISTRIBUTES ENERGY; MATERIAL ATTENUATION ABSORBS"
Refuted in Physica B 666 (2023) 415108 (DOI: 10.21203/rs.3.rs-2616469/v2): Total absorption (RL approaching minus infinity) does NOT require 100% entry. As long as energy remains unabsorbed, the final internal beam is non-zero and keeps bouncing inside the film until absorbed—only hitting zero when |r2| = |r1| cancels completely. Interference dictates the optical path length, and transmission-line theory guarantees it automatically! Permittivity and permeability stay constant because ground states dominate and excited states immediately release heat and relax back to ground state.

TIMESTAMPS:
00:00 - Scene 1: Prologue — Two Conceptual Systems Born From Transmission-Line Math
02:10 - Scene 2: How Impedance Matching & Quarter-Wavelength Abandoned Interference
04:15 - Scene 3: Wave Mechanics Core — R2 Polar Interference & Phase Beyond 180 Degrees
06:35 - Scene 4: Refuting AI (A) — Why Zin = Z0 Does Not Make Two Theories Equivalent
08:50 - Scene 5: Refuting AI (B & C) — The Watershed Test & 50-Year Blindness
11:30 - Scene 6: Refuting AI (D) — Duplicate Submission Law, Priority & Stealth ZM Fixes
13:45 - Scene 7: Refuting AI (E) — False Theories Only Design Papers, Never Materials
15:10 - Scene 8: Refuting AI (F) — How Films Force Absorption & Why Constants Stay Fixed

Reference Cited in Objection F:
- Ying Liu, Xiangbin Yin, M. G. B. Drew, Yue Liu, Physica B: Condensed Matter 666 (2023) 415108 (Research Square: https://doi.org/10.21203/rs.3.rs-2616469/v2)

#WaveMechanics #ImpedanceMatching #QuarterWavelength #MicrowaveAbsorption #PhysicaB #CargoCultScience`;

  const spokenScriptText = `[Scene 1: Prologue — One Transmission-Line Equation, Two Opposite Worlds]
Both mainstream Impedance Matching Theory and Wave Mechanics Theory for microwave absorption are built on transmission-line theory, primarily addressing metal-backed absorbing films.
Wait carefully! Transmission-line theory itself is general electrical physics—it contains NO conceptual framework specifically built for microwave-absorbing materials.
So both Impedance Matching Theory and Wave Mechanics Theory constructed their own distinct conceptual systems on top of transmission-line equations.
From transmission-line theory, the reflection-loss minimum—approaching minus infinity—occurs at Z-in equals Z-zero.
Everything splits right there! One theory misunderstood that equation and built fifty years of wrong physics; the other inherited its wave physics and corrected the entire field!

[Scene 2: How Impedance Matching and Quarter-Wavelength Abandoned Interference]
Look at how Impedance Matching Theory operates:
Misreading the Z-in equals Z-zero formula, Impedance Matching claims that when the magnitude of Z-in approaches the magnitude of Z-zero, impedance matches, the maximum fraction of incident microwaves enters the material, and if the material has strong attenuation, all entering waves get absorbed to produce a huge peak! And why does the peak appear where magnitude of Z-in approaches magnitude of Z-zero? According to Impedance Matching, that is determined by the material's **intrinsic resonant frequency**!
In doing so, Impedance Matching completely threw wave interference out the window!
What about Quarter-Wavelength Theory? Although it pays lip service to two reflected beams canceling out, it lacks any exact wave-superposition equation like R-two—so the moment real analysis begins, it collapses right back into Impedance Matching, blaming interference peaks on intrinsic material resonance, dielectric loss, and magnetic loss!

[Scene 3: Wave Mechanics Core — Film vs. Material, R-Two, and Phase Over 180 Degrees]
Now look at the conceptual framework of Wave Mechanics Theory:
First, Impedance Matching fatally confused the microwave absorption of a **FILM** with the microwave absorption of a **MATERIAL**!
Wave Mechanics proves that microwave absorption peaks are caused purely by **destructive wave interference**! Material attenuation along the microwave's travel path does NOT generate absorption peaks!
If one hundred percent of incident microwaves entered a film with no front-back interference, ZERO absorption peak would occur!
If the material itself absorbs zero energy, the film absorbs zero energy.
At magnitude of Z-in equals magnitude of Z-zero, there does not necessarily exist an absorption peak—and where an absorption peak DOES occur, magnitude of Z-in equals magnitude of Z-zero does not necessarily hold!
For the very first time, Wave Mechanics analyzed absorption using exact interference between the reflections from the front and back interfaces of the film—deriving the exact analytical formula for **R-two** and mapping the magnitude of R-two in polar coordinates!
That polar representation proved the decisive power of phase: the true absorption peak occurs where the optical path difference between the two beams exceeds **180 degrees**—directly refuting naive Quarter-Wavelength cancellation!
Peak strength is NOT determined by "how much wave enters times attenuation capacity." Instead, **the film forces the material to absorb microwaves in exact proportion to what wave interference demands!** Interfaces absorb zero microwaves, and the energy fraction "entering the film" cannot even be uniquely defined!
Wave Mechanics fully inherited transmission-line interference; Impedance Matching and Quarter-Wavelength completely abandoned it. Mainstream scientists have published ZERO rebuttals of Wave Mechanics—yet they continue flooding journals with Impedance Matching papers!

[Scene 4: Refuting AI Argument A — Does Z-in = Z-zero Make Both Theories Equivalent?]
Recently, several AI models defending mainstream consensus raised six objections—A through F. Let us dismantle every single one!
**AI Objection A:** *"In Impedance Matching Theory, Z-in equals Z-zero already contains interference—so Impedance Matching and Wave Mechanics are mathematically equivalent!"*
Pure historical amnesia!
First, Impedance Matching papers historically ALWAYS used **magnitude of Z-in equals magnitude of Z-zero**—ignoring phase! Mainstream authors only began quietly writing Z-in equals Z-zero *after* Wave Mechanics Theory was published—while refusing to cite Wave Mechanics!
Second, neither transmission-line theory, Impedance Matching, nor Quarter-Wavelength Theory contained the **R-two expression**. Transmission-line theory used voltage-current continuity or infinite-beam sums; Impedance Matching had zero wave superposition; Quarter-Wavelength had no R-two equation.
Third, Z-in equals Z-zero is simply a conclusion of transmission-line theory inherited by both frameworks. Checking Z-in equals Z-zero against experimental curves proves ZERO equivalence between Impedance Matching and Wave Mechanics!

[Scene 5: Refuting AI Arguments B & C — The Real Watershed Test and 50 Years of Blindness]
**AI Objection B & C:** *"Only a few individuals misunderstood 'maximum wave entry'; mainstream Impedance Matching just says matching at Z-in equals Z-zero yields maximum absorption."*
Stop right there! Look at the REAL watershed dividing the two theories—not Z-in equals Z-zero, **but whether the absorption peak is caused by WAVE INTERFERENCE or MATERIAL ATTENUATION!**
Even if an AI silently edits magnitude of Z-in into complex Z-in equals Z-zero and washes its hands of "individual mistakes," Impedance Matching STILL owes the world one missing proof: **show a single calculation or experiment proving the peak at Z-in equals Z-zero is caused by material attenuation or intrinsic resonance rather than wave interference!** In fifty years, mainstream science has NEVER produced that proof!
Wait—take this logic one step further! If Impedance Matching actually regarded the Z-in equals Z-zero peak as an **interference peak**, it would immediately equal Wave Mechanics Theory! And mainstream scientists would have realized that the peak depends on **film thickness**—so they would have spent fifty years asking: *"At this required thickness, what permittivity and permeability produce this interference peak, and which materials possess them?"*
**Did mainstream science think like that for over half a century?** NEVER! Not until Wave Mechanics Theory was established! That proves conclusively that mainstream science ALWAYS treated Z-in equals Z-zero as an intrinsic material resonance peak, never an interference peak!
And quietly patching Impedance Matching equations behind closed doors—like fixing the **Z-M sign error** without citing Wave Mechanics—is textbook moral bankruptcy!

[Scene 6: Refuting AI Argument D — Duplicate Submission Law Proves "Published Equals Seen"]
**AI Objection D:** *"Maybe mainstream scientists didn't see Wave Mechanics Theory, or saw it and thought it wasn't worth refuting publicly."*
Think about the most basic rule in academic publishing: **WHY do journals strictly forbid duplicate submission—submitting the same manuscript to two journals at once?**
Because the entire foundation of science rests on one iron rule: **ONCE A PAPER IS PUBLISHED ONCE, EVERYONE IN SCIENCE IS DEEMED TO HAVE SEEN IT—there is no need to publish it a second time!**
That is also why every journal timestamps submission, acceptance, and publication dates for copyright and discovery priority. No later author can steal an invention by saying, "Sorry, I didn't see your paper!"
Wave Mechanics Theory is highly visible and trivially searchable across major journals and databases. Can one author miss a paper? Sure. Two? Maybe. Thousands of authors, dozens of editors, and armies of peer reviewers across years? Impossible!
In science, an individual can miss a paper—**the scientific community as a whole MUST have seen it.** An individual need not publish a rebuttal—**the scientific community as a whole MUST rebut a published refutation if it believes it is wrong!**
Declaring a foundational refutation "not worth refuting" while secretly altering Z-M signs without citation is either catastrophic theoretical incompetence or pure **Cargo Cult Science**!

[Scene 7: Refuting AI Argument E — False Theories Only Design Papers, Never Materials]
**AI Objection E:** *"Impedance Matching is simple and very useful for material design!"*
Really? **Show the evidence!** Across more than fifty years, name **ONE** genuine material-design rule derived from Impedance Matching Theory! Not one! Wave Mechanics Theory actually provides quantitative principles for material design—Impedance Matching never did!
AI has confused **twenty-three thousand papers chanting Impedance Matching** with **scientific usefulness for material design**!
Ask yourself a common-sense question: **HOW CAN A FALSE THEORY POSSIBLY GUIDE REAL MATERIAL DESIGN?**
A wrong theory is useless for designing materials. A wrong theory is ONLY useful for churning out papers!

[Scene 8: Refuting AI Argument F — How the Film Forces Material Absorption and Why Constants Stay Fixed]
Finally, let us answer **AI Objection F**, raised by WeChat AI Xiaowei:
*"Interference only changes the energy distribution; actual microwave absorption is still accomplished by material attenuation—dielectric loss and magnetic loss!"*
That claim completely misses the physics we proved in **Physica B: Condensed Matter, 2023, Volume 666, Article 415108**—along with its Research Square preprint comments and responses!
Look at the exact physical mechanism of how a film **FORCES** the material to absorb microwaves according to the demands of wave interference:
Take reflection loss approaching minus infinity—complete absorption—as an example.
Even though NOT all incident microwaves "enter" the film—in fact, the fraction entering the film cannot even be uniquely defined—**one hundred percent of the incident microwave energy IS absorbed by the material!** Total absorption by the film does NOT require one hundred percent of incident waves to "enter" on impact!
Why? Think physically! As long as the incident microwave energy has NOT been completely absorbed by the film, the intensity of the final circulating beam inside the film is **NOT zero**! And because its intensity is non-zero, that beam **keeps reflecting back and forth inside the film** until ALL required energy has been absorbed by the material!
Only when all energy is absorbed does that final internal beam drop to **zero**—and at that exact moment, the magnitude of reflected beam R-two equals the magnitude of front-interface beam R-one, so the two reflected waves **completely cancel each other out**!
In other words, **the effective optical path length of microwaves inside the film is dictated entirely by wave interference!** Whether it takes fewer bounces or more bounces—for reflection loss at minus infinity OR any intermediate value—the interference requirement between R-two and R-one dictates the exact instant the final beam drops to zero! You do not even have to track those bounces manually—**transmission-line theory automatically guarantees** that the final beam hits zero at the exact moment interference demands!
THAT is how the film forces the material to absorb microwaves to satisfy wave interference!
And one more crucial question that seals the physics: **Why do permittivity and permeability stay constant whether an absorption peak occurs or not?**
Because under experimental conditions, the vast majority of material states remain in the **ground state**! When ground states absorb microwave photons and transition to excited states, those excited states immediately release their energy as heat and relax straight back to the ground state!
So before excitation, during excitation, and throughout converting microwave energy into heat, permittivity and permeability remain true **constants**! That is WHY transmission-line theory holds rigorously—a physical fact verified across every real-world application of transmission-line engineering! Thank you for watching.`;

  const aiRefutations = [
    {
      code: "AI Objection A",
      claim: "Zin = Z0 already includes interference, so Impedance Matching and Wave Mechanics are equivalent.",
      rebuttal:
        "Impedance Matching historically used |Zin| = |Z0| and omitted phase; authors switched to Zin = Z0 stealthily only after Wave Mechanics without citing it. Neither transmission-line theory, Impedance Matching, nor Quarter-Wavelength had the exact R2 equation. Sharing Zin = Z0 from transmission-line theory does not make their conceptual systems equivalent.",
    },
    {
      code: "AI Objection B",
      claim: "Experimental Zin = Z0 peaks prove Impedance Matching works.",
      rebuttal:
        "Zin = Z0 cannot distinguish the two theories. The true watershed is whether the peak is caused by wave interference (proven via R2 in Wave Mechanics) or material attenuation/intrinsic resonance (for which mainstream science has ZERO calculations in 50+ years).",
    },
    {
      code: "AI Objection C",
      claim: "'Maximum microwave entry' was merely a few individuals' error; mainstream Impedance Matching only relies on Zin = Z0.",
      rebuttal:
        "If mainstream scholars truly knew the Zin = Z0 peak was thickness-dependent interference, they would have deduced required ε & μ from target thickness—yet for 50+ years nobody thought that way until Wave Mechanics! Quietly patching the ZM sign error without citing Wave Mechanics proves moral bankruptcy.",
    },
    {
      code: "AI Objection D",
      claim: "Mainstream scholars may not have seen Wave Mechanics or thought it unworthy of public rebuttal.",
      rebuttal:
        "Why does science ban duplicate submission? Because ONCE PUBLISHED, EVERYONE HAS SEEN IT (also the basis of copyright, priority, and timestamps). One scholar can miss a paper; the entire field cannot. Calling a wrong/right dispute 'unworthy of rebuttal' is Cargo Cult Science.",
    },
    {
      code: "AI Objection E",
      claim: "Impedance Matching is simple and useful for designing materials.",
      rebuttal:
        "50+ years of Impedance Matching produced ZERO real material design rules (Wave Mechanics actually yields them). Confusing a flood of papers with engineering utility ignores reality: a false theory cannot design materials—it only designs papers.",
    },
    {
      code: "AI Objection F",
      claim: "AI Xiaowei: Interference only redistributes energy; microwave absorption is still done by dielectric/magnetic loss.",
      rebuttal:
        "Refuted in Physica B 666 (2023) 415108 (DOI: 10.21203/rs.3.rs-2616469/v2): Total absorption does NOT require 100% wave entry. Any unabsorbed energy keeps the final internal beam non-zero, forcing it to keep bouncing inside the film until completely absorbed—dropping to zero exactly when |r2| = |r1| cancels completely. Interference sets the optical path length (automatically guaranteed by transmission-line theory). Ground-state dominance & instant thermal relaxation keep ε and μ constant.",
    },
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="why-impedance-quarter-wavelength-wrong-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HL &bull; Digital Avatar Video Script
          </span>
          <span className="bg-rose-100 text-rose-900 text-xs font-semibold px-3 py-1 rounded-full border border-rose-200">
            Wave Mechanics vs. Impedance Matching &amp; Quarter-Wavelength
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Why Impedance Matching &amp; Quarter-Wavelength Theories Are Wrong (Wave Mechanics Refutes AI Objections A–F)
        </h1>
        <p className="text-sm font-bold text-rose-800 mt-2 font-sans">
          主流微波吸收理论（阻抗匹配与四分之一波长理论）为什么是错误的：传输线继承、R₂极坐标干涉与逐条反驳AI六问（含小微F问）
        </p>
        <p className="text-sm md:text-base text-slate-600 mt-2 font-sans italic">
          Why sharing the transmission-line result Z_in = Z_0 does NOT make Impedance Matching equivalent to Wave Mechanics; why film absorption is NOT material absorption; how the duplicate-submission rule destroys the &ldquo;we didn&apos;t see it&rdquo; excuse; and why false theories only design papers, never materials.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Wave Mechanics Physics &amp; AI Audit
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-hl")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-hl" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-hl" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-hl")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-hl" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-hl" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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
      {/* PART I: FIVE AI OBJECTIONS DISMANTLED                                      */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-5">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Waves className="w-6 h-6 text-rose-700" />
          <h2>Part I: Six AI &amp; Mainstream Defenses Dismantled (A–F)</h2>
        </div>

        <div className="bg-rose-50/75 border border-rose-200 p-4 rounded-xl text-sm text-slate-800 font-sans space-y-1.5">
          <div className="font-bold text-rose-950 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-700 shrink-0" />
            <span>Core Physics Breakthrough (Not Present in Raw Transmission-Line Theory)</span>
          </div>
          <p>
            Wave Mechanics first solved metal-backed film absorption via exact interference between front- and back-interface beams (deriving the analytical <strong>R₂</strong> expression &amp; polar plots of <strong>|R₂|</strong>), proving peaks occur at optical path difference <strong>&gt; 180&deg;</strong>, full wave entry yields zero peak, interfaces absorb zero microwaves, and the film forces the material to absorb according to wave interference.
          </p>
        </div>

        <div className="space-y-3.5">
          {aiRefutations.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5 font-sans">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-slate-900 text-white text-[11px] font-bold px-2 py-0.5 rounded uppercase">
                  {item.code}
                </span>
                <span className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                  {item.claim}
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-700">{item.rebuttal}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl border border-slate-700 font-sans text-xs flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-300 shrink-0" />
          <span>
            Key Principle: Banning duplicate submission + copyright/priority timestamps prove <strong>Published = Seen by the Entire Scientific Community</strong>.
          </span>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 7-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-rose-700" />
            <h2>Part II: Complete 8-Scene Digital Avatar English Script (~17 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-hl-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-hl-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-hl-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
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
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-hl-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-hl-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-hl-bottom" ? "Copied!" : "Copy Clean Description"}
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
          Essay HL &bull; Why Impedance Matching &amp; Quarter-Wavelength Are Wrong &bull; Dr. Yue Liu Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            R2 Interference
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            AI Audit A–F
          </span>
          <span className="bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md font-semibold">
            Published = Seen
          </span>
        </div>
      </div>
    </article>
  );
}
