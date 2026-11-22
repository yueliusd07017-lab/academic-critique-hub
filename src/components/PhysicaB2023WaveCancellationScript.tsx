import React, { useState } from "react";
import {
  Waves,
  Copy,
  Check,
  BookOpen,
  Video,
  FileText,
  Flame,
  Sparkles,
  Compass,
} from "lucide-react";

export default function PhysicaB2023WaveCancellationScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("physica-b-2023-wave-cancellation-article-text");
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

  const youtubeSafeDescription = `Title: Why Impedance Matching Fails Even at Maximum Mismatch (Physica B 2023 Wave Cancellation Explained)

In this Digital Avatar scientific walkthrough, Dr. Yue Liu breaks down the landmark paper:
Ying Liu, Xiangbin Yin, Michael G. B. Drew, Yue Liu, "Microwave absorption of film explained accurately by wave cancellation theory," Physica B: Condensed Matter 666 (2023) 415108 (DOI: 10.1016/j.physb.2023.415108 | Preprint: https://doi.org/10.21203/rs.3.rs-2616469/v2)
along with Fig. 5 of Physica Scripta 97(1) (2022) 015806.

KEY BREAKTHROUGHS EXPLAINED:

1. HOW THE FILM FORCES THE MATERIAL TO ABSORB VIA ENERGY CONSERVATION (BEAMS 1r & t):
- Reflection loss RL(x1-) is a device property of a film, NOT a material property. Metal-backed BaFe11.8Ce0.2O19/PPy absorbs 88.90% at 3.21 GHz while only 63.8% penetrates the isolated front interface—and without metal backing (WMB) it absorbs 33.03%.
- Contrary to Impedance Matching (IM) claiming absorption peaks occur when transmitted beam t is weakest, Wave Cancellation Theory (WCT) proves beam t MUST BE STRONGEST at |RL| minima!
- At destructive interference phase phi = (2n + 1)pi, beam t must cancel beam 1r while still returning the energy required by conservation to open space—achieved by increasing back-and-forth reflection cycles inside the film. At phi = 2n*pi (in-phase), only a weak beam t is needed.
- You CANNOT sum squared amplitudes |1r|^2 + |t|^2 to get reflected energy. Small penetration (weak beam t) + weak attenuation alpha_P can still produce massive absorption peaks via multi-reflection cancellation, whereas IM's large penetration yields weak 1r, tiny |RM|, and shallow peaks.

2. FIGURE 5 POLAR INWARD SPIRAL — WHY Zin = Z0 PEAKS ARE ULTRA-RARE:
- In polar plot Fig. 5b (Cu@ZnFe2O4 at 4.74 GHz), |R2(alpha_j d)| traces a deformed inward spiral whose cycle-to-cycle envelope decays via exp(-alpha_P d) while RL = RM + R2 orbits RM—a polar view that makes |R2| look deceptively monotonic, whereas Fig. 5d reveals |R2| actually oscillates up and down due to the angular phase effect, peaking at B and D!
- Consequently, most absorption valleys can NEVER pass through the origin Zin = Z0 (where R2 = -RM). True Zin = Z0 peaks are extraordinarily rare special coincidences.

3. ABSORPTION PEAKS AT MAXIMUM IMPEDANCE MISMATCH (PHYSICA B FIG. 5d & PHYSICA SCRIPTA 2022 FIG. 5):
- In Physica B Fig. 5d (Points B & D, d = lambda_M/4 and 3*lambda_M/4) and Physica Scripta 2022 Fig. 5b, the first two absorption peaks occur RIGHT WHERE |Zin/Z0 - 1| hits its MAXIMUM (|Zin/Z0| spiking ~14.5 and ~4.7)—while |Zin/Z0| near 1 shows ZERO absorption peak!
- In Physica Scripta 2022 Fig. 5a (12.73 GHz, ZM exceeds Z0, violating QWM since peaks occur at n*lambda_M/2), RL peaks appear where |Zin/Z0| drops far below 1 (~0.5), whereas |Zin/Z0| = 1 crossings yield no peak.
- Eqs. (6)-(8) explain why: a strong out-of-phase beam t raises voltage |V| and suppresses current |I|, driving |Zin| far above Z0 at the peak!

TIMESTAMPS:
00:00 - Scene 1: Prologue — Why Physica B 2023 Separates Film From Material
02:05 - Scene 2: Beams 1r & t — How Energy Conservation Forces Absorption
05:10 - Scene 3: Fig. 5 Polar Inward Spiral — Why Zin = Z0 Peaks Are Ultra-Rare
07:25 - Scene 4: Peaks at Maximum Mismatch (Physica B Fig. 5d & Physica Scripta Fig. 5)
10:15 - Scene 5: Complex Numbers, |Zin + Z0|, and Replacing IM & QWM with WCT

References:
- Y. Liu, X. Yin, M. G. B. Drew, Y. Liu, Physica B: Condensed Matter 666 (2023) 415108 (https://doi.org/10.1016/j.physb.2023.415108)
- Research Square Preprint & Comments/Responses: https://doi.org/10.21203/rs.3.rs-2616469/v2
- Y. Liu, Y. Liu, M. G. B. Drew, Physica Scripta 97(1) (2022) 015806 (Fig. 5a & 5b)

#WaveCancellationTheory #PhysicaB #ImpedanceMatching #QuarterWavelength #MicrowaveAbsorption #Physics`;

  const spokenScriptText = `[Scene 1: Prologue — Why Physica B 2023 Separates Film From Material Forever]
Welcome to a deep visual breakdown of our 2023 Physica B paper: "Microwave absorption of film explained accurately by wave cancellation theory," published in Volume 666, Article 415108—along with its companion milestone in Physica Scripta 2022, Volume 97, Article 015806.
Why does this paper dismantle fifty years of mainstream microwave-absorption dogma?
Because mainstream Impedance Matching Theory and Quarter-Wavelength Theory confuse a **DEVICE**—a film with thickness d and two parallel interfaces—with a uniform **MATERIAL**!
Look at hard experimental numbers right from Section 2.5 of Physica B:
For a film at 3.21 gigahertz with thickness 5.90 millimeters, only 63.8 percent of incident energy penetrates the isolated front interface—yet the metal-backed film absorbs **88.90 percent** of the total incident energy! Remove the metal backing, and the exact same film absorbs only **33.03 percent**!
How can 88.90 percent of incident energy be absorbed when only 63.8 percent enters at the front interface? Not through "material resonance," and not through Impedance Matching—only through **Wave Cancellation Theory**!

[Scene 2: How the Film Forces the Material to Absorb via Energy Conservation]
Let us walk through the exact physics of how a film **FORCES** its material to absorb microwaves according to the demands of wave interference and energy conservation!
When microwaves strike the front interface as incident beam i, part reflects immediately as beam 1-r, while microwaves inside the film bounce back and forth between the front and rear interfaces to emerge back into open space as total transmitted beam t.
Reflection loss R-L at the front interface is simply the wave superposition of beams 1-r and t. And by energy conservation, the energy absorbed by the film equals incident energy minus the energy returned to open space by that resultant beam!
Crucially—you CANNOT calculate the energy returned to open space by adding the squared amplitudes of beams 1-r and t! That is a textbook mathematical blunder repeated across mainstream papers!
Now watch what happens at the two phase extremes:
When beams 1-r and t are IN PHASE—at phase difference phi equals 2-n-pi—a **WEAK** beam t is plenty to return the required energy to open space, because beam 1-r adds constructively with it!
Now flip the phase to destructive interference—**phi equals (2n + 1) pi**! Here, beam 1-r and beam t are out of phase by pi and cancel each other out!
To return the energy demanded by energy conservation while simultaneously canceling beam 1-r, **beam t MUST become the STRONGEST right at the absorption peak!**
How does the film make beam t stronger? By increasing the number of **back-and-forth reflection cycles** inside the film!
Wait—notice the shocking consequence! Even for a material with small penetration and weak intrinsic attenuation alpha-P, a large number of internal reflection cycles forced by wave interference and energy conservation produces a HUGE absorption peak!
Conversely, the huge penetration demanded by Impedance Matching shrinks beam 1-r and makes reflection coefficient R-M tiny—yielding only a shallow absorption minimum!
For a lossless film that absorbs nothing, any number of reflections still yields zero absorption. For an absorbing film, the back-and-forth cycle count—and thus the total energy extracted from the wave—is dictated directly by wave cancellation and energy conservation! And that angular phase law yields the exact inverse relationship in Wave Cancellation Theory that must replace the flawed Quarter-Wavelength Model!

[Scene 3: Figure 5 Polar Coordinates — Why Z-in Equals Z-zero Peaks Are Extraordinarily Rare]
Now turn to **Figure 5** of our Physica B paper—one of the clearest geometric proofs in electromagnetic materials physics!
Remember that reflection loss equals R-M plus R-two, where beam 1-r gives constant vector R-M, and beam t gives spiral vector R-two!
Look at **Figure 5b**, plotting the magnitude of R-two as a function of phase angle alpha-j-d in polar coordinates for copper-zinc-ferrite at 4.74 gigahertz.
At first glance, the **deformed INWARD SPIRAL** in Figure 5b makes it look as though |R-two| shrinks monotonically toward zero as film thickness d increases! Wait—do NOT be fooled by the polar geometry!
Look directly over at **Figure 5d**! Plotting |R-two| linearly against phase shows that **|R-two| is NOT a monotonically decreasing function—it oscillates UP AND DOWN!** Why? Because **material attenuation exp(-alpha-P d)** only tends to pull the overall cycle-to-cycle envelope downward, whereas the **film's angular phase effect**—multi-reflection interference inside beam t—forces |R-two| to **surge UPWARD to local maxima at points B and D** where beams 1-r and t are out of phase, and drop to a valley at point C where they are in phase! That up-and-down angular oscillation is what deforms the spiral in Figure 5b, hiding its outward bulges in polar coordinates until you inspect Figure 5d!
Meanwhile, in **Figure 5a**, total reflection loss |R-L| orbits around the endpoint of vector R-M!
Stop and look at that deformed inward spiral geometry! For |R-L| to hit zero—which is the exact condition **Z-in equals Z-zero**—the inward-winding trajectory of R-two must pass directly through the exact point minus R-M, hitting the origin O-1!
Because the spiral winds inward cycle by cycle as attenuation grows while R-M stays fixed, almost all trajectories miss that exact origin completely! Most absorption peaks—where R-two points roughly opposite to R-M at phi equals pi or 3-pi—occur along the bulging outer loops of the spiral **far from zero**!
That polar-plus-Cartesian pair proves visually why true **Z-in equals Z-zero** absorption peaks are extraordinarily rare!

[Scene 4: Absorption Peaks Occurring at MAXIMUM Impedance Mismatch]
Now look at **Figure 5d** of Physica B—and compare it directly with **Figure 5 of our 2022 Physica Scripta Part 2 paper**!
In mainstream Impedance Matching Theory, an absorption peak is supposed to occur where Z-in is closest to Z-zero—where |Z-in over Z-zero minus 1| approaches zero!
Now look at the actual physics of **Figure 5d** in Physica B (and **Figure 5b** of Physica Scripta 2022) at 4.74 gigahertz:
Follow thickness d from zero upward. At point B—one quarter wavelength, phi equals pi—and point D—three quarter wavelengths, phi equals 3-pi—**|R-L| hits its FIRST TWO ABSORPTION PEAKS!**
And what are **|R-two|** and **|Z-in over Z-zero minus 1|** doing at those exact two peaks?!
They are NOT at zero! **They hit their MAXIMUM VALUES!** In Physica Scripta Figure 5b, at the first absorption peak around 9 millimeters, |Z-in over Z-zero| spikes all the way up to nearly **14**—deviating the MOST from 1! At the second peak around 26.8 millimeters, it spikes up to **4.7**! Meanwhile, right around 14 to 21 millimeters—where |Z-in over Z-zero| actually equals 1 and Impedance Matching claims "perfect matching"—there is **NO ABSORPTION PEAK AT ALL!**
Even more astonishing, look at **Figure 5a** of Physica Scripta 2022 at 12.73 gigahertz, where material impedance Z-M exceeds Z-zero! Not only do the absorption peaks violate Quarter-Wavelength Theory by appearing at half-wavelength multiples—around 7.5, 15, and 22.5 millimeters—every single absorption peak occurs where |Z-in over Z-zero| plunges down to its **lowest mismatch around 0.5**, while the crossings at |Z-in over Z-zero| equals 1 show ZERO peaks!
Why does Z-in shoot sky-high right at an absorption peak when Z-M is less than Z-zero? Equations 6 through 8 of Physica B give the elementary answer: to cancel beam 1-r at phi equals pi, a huge out-of-phase beam t increases total front-interface voltage |V| and suppresses total current |I|—forcing |Z-in| equals |V| over |I| to become huge right at maximum absorption!

[Scene 5: Complex Numbers, |Z-in + Z-zero|, and Replacing IM and QWM]
Mainstream defenders tried one last patch: "What if we replace |Z-in| equals |Z-zero| with complex Z-in equals Z-zero?"
Section 2.6 and Figure 4 of Physica B prove even that fails! Reflection loss depends on the ratio |Z-in minus Z-zero| divided by **|Z-in plus Z-zero|**! Ignoring the denominator |Z-in plus Z-zero|—and confusing real hyperbolic tangent with complex modulus of hyperbolic tangent—blinded the entire field to why intense peaks form right at large impedance mismatch!

[Scene 6: Epilogue — From Device Confusion Back to Solid Physics]
Every paradox in microwave absorption disappears the moment we stop assigning film property R-L to bulk materials. Absorption peaks do not come from material resonance or "maximum entry"—they come from wave cancellation between beams 1-r and t, governed by energy conservation and phase geometry.
It is time to replace Impedance Matching and Quarter-Wavelength dogma with Wave Cancellation Theory. Thank you for watching.`;

  const coreHighlights = [
    {
      num: "1. Film Forces Material Absorption",
      detail:
        "At RL minima (φ = (2n+1)π), beam t is STRONGEST—not weakest—achieved by increasing back-and-forth reflection cycles as required by energy conservation to both return energy to open space and cancel beam 1r.",
    },
    {
      num: "2. Fig. 5b Polar Inward Spiral",
      detail:
        "While polar Fig. 5b makes |R2(α_j d)| appear to spiral inward monotonically under attenuation exp(-α_P d), Fig. 5d reveals |R2| actually oscillates up and down (peaking at B & D) due to the film's angular effect—proving most loops miss origin Zin = Z0.",
    },
    {
      num: "3. Peaks at Maximum |Zin - Z0|",
      detail:
        "In Physica B Fig. 5d (Points B & D) and Physica Scripta 2022 Fig. 5b, the first two peaks occur where |Zin/Z0 - 1| hits its MAXIMUM (~14.5 & ~4.7); in Physica Scripta Fig. 5a, peaks hit at |Zin/Z0| ≈ 0.45 while |Zin/Z0| = 1 has zero peak.",
    },
    {
      num: "4. Eqs. (6)–(8) Voltage/Current Proof",
      detail:
        "When ZM < Z0, a strong beam t in phase with incident beam i raises |V(x1-)| and shrinks |I(x1-)|, driving |Zin| = |V/I| far above Z0 right at maximum absorption.",
    },
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="physica-b-2023-wave-cancellation-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HM &bull; Physica B 2023 Paper Walkthrough
          </span>
          <span className="bg-rose-100 text-rose-900 text-xs font-semibold px-3 py-1 rounded-full border border-rose-200">
            Physica B 666 (2023) 415108 &bull; Polar |R₂| &amp; Peaks at Max Mismatch
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Why Impedance Matching Fails Even at Maximum Mismatch: Decoding Physica B 2023 Wave Cancellation Theory
        </h1>
        <p className="text-sm font-bold text-rose-800 mt-2 font-sans">
          解读《Physica B 2023》经典论文：能量守恒下的多轮反射、|R₂| 内螺旋极坐标图与最大阻抗失配处的吸收峰
        </p>
        <p className="text-sm md:text-base text-slate-600 mt-2 font-sans italic">
          Digital Avatar English script interpreting Ying Liu, Xiangbin Yin, M. G. B. Drew &amp; Yue Liu (Physica B 666, 2023, 415108) and Fig. 5 of Physica Scripta 97(1) (2022) 015806.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
          <span className="text-xs text-slate-400 font-mono">
            DOI: 10.1016/j.physb.2023.415108 &bull; Preprint: 10.21203/rs.3.rs-2616469/v2
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-hm")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-hm" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-hm" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-hm")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-hm" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-hm" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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
      {/* PART I: KEY BREAKTHROUGHS & FIGURE 5 EXHIBIT                               */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-5">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Compass className="w-6 h-6 text-rose-700" />
          <h2>Part I: Key Results &amp; Primary Figure Exhibit</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {coreHighlights.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5 font-sans">
              <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-700 shrink-0" />
                <span>{item.num}</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 space-y-3 font-sans">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-amber-950">
            <span>Figure 5 from Physica Scripta 97(1) (2022) 015806 — Direct Experimental Counterexample</span>
            <span className="bg-slate-900 text-white px-2.5 py-0.5 rounded">Peaks at Max |Zin/Z0| Deviation</span>
          </div>
          <img
            src="/assets/aistudio/image_f1eb71b7.png"
            alt="Figure 5 from Physica Scripta 2022 showing RL absorption peaks occurring where |Zin/Z0| deviates farthest from 1"
            className="w-full max-w-2xl mx-auto rounded-lg border border-slate-300 shadow-sm bg-white"
          />
          <p className="text-xs text-slate-700">
            <strong>(a)</strong> 12.73 GHz (<em>Z</em><sub>M</sub> &gt; <em>Z</em><sub>0</sub>, contrary to QWM): RL valleys appear at <em>d</em> = <em>n</em>&lambda;<sub>M</sub>/2 where |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| drops to ~0.45, while crossings at |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| = 1 yield zero peaks.{" "}
            <strong>(b)</strong> 4.74 GHz (Cu@ZnFe<sub>2</sub>O<sub>4</sub>, same film as <em>Physica B</em> 2023 Fig. 5): the first two RL valleys occur precisely where |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| spikes to ~14.5 and ~4.7—maximum mismatch—while the |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| &approx; 1 zone has no absorption peak.
          </p>
        </div>

        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl border border-slate-700 font-sans text-xs space-y-1">
          <div className="font-bold text-amber-300 flex items-center gap-2">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>Primary Articles Interpreted</span>
          </div>
          <p className="font-mono">
            Ying Liu, Xiangbin Yin, M. G. B. Drew, Yue Liu, <em>Microwave absorption of film explained accurately by wave cancellation theory</em>, Physica B: Condensed Matter 666 (2023) 415108 (Preprint: Research Square DOI 10.21203/rs.3.rs-2616469/v2).
          </p>
          <p className="font-mono">
            Yue Liu, Ying Liu, M. G. B. Drew, <em>A theoretical investigation of the quarter-wavelength model — part 2: verification and extension</em>, Physica Scripta 97(1) (2022) 015806.
          </p>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 6-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-rose-700" />
            <h2>Part II: Complete 6-Scene Digital Avatar English Script (~12.5 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-hm-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-hm-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-hm-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
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
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-hm-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-hm-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-hm-bottom" ? "Copied!" : "Copy Clean Description"}
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
        <div className="flex items-center gap-1.5">
          <Waves className="w-4 h-4 text-slate-400" />
          <span>Essay HM &bull; Physica B 666 (2023) 415108 &bull; Wave Cancellation Walkthrough</span>
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Polar |R₂| Spiral
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Energy Conservation
          </span>
          <span className="bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md font-semibold">
            Physica Scripta Fig. 5
          </span>
        </div>
      </div>
    </article>
  );
}
