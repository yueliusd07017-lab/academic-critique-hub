import React, { useState } from "react";
import { ShieldAlert, Copy, Check, BarChart3, Layers, Compass, AlertTriangle, Video, FileText, Flame } from "lucide-react";

export default function Why23300PapersYieldedZeroDesignRulesScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("why-23300-papers-zero-design-rules-article-text");
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

  const youtubeSafeDescription = `Title: Why 23,300+ Impedance Matching Papers Produced ZERO Material Design Rules | Akinay (2023) & Yang et al. (Adv. Electron. Mater. 2025)

A bibliometric review by Akinay et al. (ChemPhysMater 2023, 2(3), 197-206) examined 23,300 microwave absorption documents published between 1990 and 2020 alone—led by China and the United States, with Journal of Alloys and Compounds (592 papers) at number one, and graphene and TiO2 as top target materials.

Tens of thousands of publicly funded papers—nearly all guided by Impedance Matching Theory and required to claim "material innovation"—yet mainstream authorities still admit the field's core bottlenecks remain unbroken!

Why did 23,300+ papers produce ZERO reliable material screening or design laws?

1. THE INSIDER CONFESSION — YANG ET AL. (ADV. ELECTRON. MATER. 2025):
In "On the Quality Criteria for Microwave Absorbing Materials" (Adv. Electron. Mater. 2025, 11(14), e202500239), mainstream authors leak the industry secret:
- "The current array of MA materials in the literature is diverse, and the notion that 'everything can be wave-absorbing' is not an exaggeration ... all can serve as 'a promising candidate of MA materials' ..."
- "In other words, the majority of researchers continue to lack a well-defined framework for determining what qualifies as a better MA material. This has perpetuated the misconception that 'everything can be microwave-absorbing'."
Under Impedance Matching Theory, synthesizing virtually ANY material (just like doping bird droppings into a nanomaterial) can be plotted and published as a "promising candidate"!

2. AN INFLUENTIAL FALSE THEORY DIRECTED TENS OF THOUSANDS OF GARBAGE PAPERS:
Why did half a century of massive funding fail to produce screening or improvement laws from Impedance Matching or Quarter-Wavelength Theory? Because an influential WRONG theory directed the entire field!

3. "ULTRATHIN MATERIALS" vs. ULTRATHIN FILMS:
Yang et al. complain about achieving strong low-frequency absorption with "ultrathin materials." Yet a FILM can be ultrathin—what on earth is an "ultrathin material"?! Confusing device-structure films (thickness d) with intrinsic material properties (permittivity and permeability) is why mainstream scientists fail to solve low-frequency thickness challenges.

4. THE KILLER CONTRADICTION INSIDE IMPEDANCE MATCHING ITSELF:
Impedance Matching Theory claims that making permittivity equal permeability (epsilon_r = mu_r) lets all incident waves enter the material, while raising imaginary permittivity and permeability increases attenuation.
Ask yourself: IF Impedance Matching Theory were true, why has NO ONE among 23,300+ papers spent fifty years researching which chemical compositions and crystal structures yield epsilon_r = mu_r with huge imaginary parts?!
Because the theory itself is FALSE! Even when 100 percent of incident waves enter a film AND material attenuation increases, microwave absorption is STILL not guaranteed to increase! Only Wave Mechanics Theory—via destructive interference between front and back film beams and exact permittivity-permeability frequency response design—turns microwave absorption into true predictive science.

5. HOW DO WE JUDGE SCIENTIFIC PROGRESS — AND PROVE OVER 95% OF SCI PAPERS ARE GARBAGE?
- Does paper volume equal scientific prosperity? Do publication counts, SCI citations, or YouTube click counts decide truth or information value?
- Does the count of 23,300+ papers prove Impedance Matching succeeded? Mainstream scientists cite the sheer count of papers as "sufficient experimental support," then absurdly demand that any challenger provide an equal quantity of experimental data inside a single paper to refute it!
- How do you judge whether 95%+ of SCI papers are garbage? Simply check whether such an enormous body of papers spanning more than HALF A CENTURY delivered key material-design principles or genuine breakthroughs! Zero design principles across 50+ years proves structurally why over 95% of SCI articles are Cargo Cult garbage.

TIMESTAMPS:
00:00 - Scene 1: 23,300 Papers (1990-2020) — Does Paper Volume Equal Scientific Prosperity?
02:10 - Scene 2: Yang et al. (2025) Leak the Secret — "Everything Can Be Wave-Absorbing"
04:30 - Scene 3: Why Impedance Matching Manufactures Garbage Papers Instead of Laws
06:35 - Scene 4: "Ultrathin Materials" — Confusing Film Structure With Intrinsic Material
08:30 - Scene 5: The Unasked Question That Destroys Impedance Matching (epsilon_r = mu_r)
10:45 - Scene 6: Proving 95%+ SCI Garbage — Paper Counts, Citations & The Equal-Data Demand
13:05 - Scene 7: Epilogue — Wave Mechanics Shows How Experiment One Guides Experiment Two

Key References Cited:
- Akinay, Y., Gunes, U., Colak, B., Cetin, T., ChemPhysMater 2023, 2(3), 197-206 (DOI: 10.1016/j.chphma.2022.10.002)
- Yang, S., Wu, P., Sheng, Y., Dong, Y., Li, Z., Wang, T., Qiao, L., Li, F., Adv. Electron. Mater. 2025, 11(14), 2500239 (DOI: 10.1002/aelm.202500239)
- Liu, Y., Liu, Y., Drew, M. G. B., Wave Mechanics of Microwave Absorption in Films - Distinguishing Film from Material, J. Magn. Magn. Mater. 2024, 593, 171850
- Liu, Y., Liu, Y., Drew, M. G. B., Recognizing Problems in Publications Concerned with Microwave Absorption Film and Providing Corrections: A Focused Review, Ind. Eng. Chem. Res. 2025, 64(7), 3635-3650
- Academic Critique Hub: https://github.com/academic-critique/hub

#ImpedanceMatchingMyth #WaveMechanics #CargoCultScience #MicrowaveAbsorption #AdvElectronMater #ScientificMethod #MaterialsScience`;

  const spokenScriptText = `[Scene 1: 23,300 Papers — Does Paper Volume Equal Scientific Prosperity?]
How do we actually judge scientific progress? Does an explosion in published paper count equal scientific prosperity? Do paper volume, SCI citation counts, or click counts determine the truth and value of information?
Look at a stunning bibliometric statistic published by mainstream researchers in ChemPhysMater in 2023.
Between just 1990 and 2020—not even counting earlier decades or the surge since 2021—Scopus indexed twenty-three thousand three hundred documents on electromagnetic wave and microwave absorption! China ranked first, the United States second, Journal of Alloys and Compounds led with five hundred ninety-two papers, and graphene and titanium dioxide topped the material charts.
Every single one of those tens of thousands of papers claimed "material innovation," consumed massive public funding, and relied on one guiding orthodoxy: Impedance Matching Theory!
Yet stop and ask two devastating questions:
First, does publishing twenty-three thousand three hundred papers decide the success of Impedance Matching Theory?!
Second, if tens of thousands of "innovative" materials were published, why do mainstream authorities still admit today that the field's core bottlenecks remain completely unbroken?!

[Scene 2: Yang et al. (2025) Leak the Industry Secret]
In 2025, an insider paper in Advanced Electronic Materials—"On the Quality Criteria for Microwave Absorbing Materials"—accidentally leaked the hidden truth behind those twenty-three thousand papers!
Read their exact words:
"The current array of MA materials in the literature is diverse, and the notion that 'everything can be wave-absorbing' is not an exaggeration ... all can serve as 'a promising candidate of MA materials' ..."
And read their admission right below it:
"The majority of researchers continue to lack a well-defined framework for determining what qualifies as a better MA material. This has perpetuated the misconception that 'everything can be microwave-absorbing'."
Let us translate that plain English into plain truth! Just as doping a tiny speck of bird droppings into graphene used to yield a publishable nanomaterial paper, under Impedance Matching Theory, ANY material you synthesize absorbs microwaves—and ANY random composite can be turned into a shiny SCI article claiming to be a "promising candidate"!

[Scene 3: Why a False Theory Manufactures Tens of Thousands of Garbage Papers]
Think about what happened over more than half a century! Tens of thousands of papers were published, all concluding that everything absorbs microwaves, every compound can be made into a promising absorber, and every lab synthesis justifies another journal publication.
Yet out of all twenty-three thousand three hundred papers, what genuinely valuable design laws did the field extract?!
Did Impedance Matching Theory or the Quarter-Wavelength model give engineers a universal screening law to reject bad materials, or a causal principle explaining how to modify crystal composition to systematically improve absorption?!
ZERO! Not a single one! In fifty years, experiment one could never reliably guide experiment two—because the foundational theory guiding all twenty-three thousand papers is flat-out WRONG! When a broken theory tells you every plot with a reflection dip counts as "matching," an influential wrong theory becomes an industrial assembly line for tens of thousands of garbage papers!

[Scene 4: "Ultrathin Materials" — Confusing Film Structure With Intrinsic Material]
Even while complaining about the mess, look closely at the conceptual blind spot inside Yang and co-authors' own 2025 diagnosis! They lament the difficulty of "achieving strong low-frequency absorption with ultrathin materials."
Wait a second! A FILM can be ultrathin—what on earth is an "ultrathin material"?!
Intrinsic material properties—permittivity epsilon-r and permeability mu-r—do NOT depend on thickness! What changes with thickness d is the wave interference inside a metal-backed FILM!
Because mainstream gatekeepers refuse to distinguish FILM from MATERIAL—refusing to adopt Wave Mechanics Theory—they chase mythical "ultrathin materials" instead of solving the wave-interference equations for ultrathin films!

[Scene 5: The Unasked Question That Destroys Impedance Matching]
Now consider the single simplest proof exposing why Impedance Matching Theory is bankrupt—a question none of those twenty-three thousand papers dare ask!
According to Impedance Matching Theory, two things guarantee maximum microwave absorption:
First, making relative permittivity equal relative permeability—epsilon-r equals mu-r—so one hundred percent of incident microwaves enter the material;
Second, increasing the imaginary parts of permittivity and permeability so the material maximizes internal attenuation!
Hold everything! IF Impedance Matching Theory were actually true, then the entire global physics and chemistry community would have had one crystal-clear mission for the past fifty years: systematically studying what chemical compositions and crystal structures produce epsilon-r equal to mu-r together with massive imaginary parts!
Why has NO ONE across twenty-three thousand papers built a real chemistry-and-structure design program around creating high-loss epsilon-r equals mu-r materials?!
Because the premise itself is FALSE! Even when one hundred percent of incident microwaves enter a film AND even when you increase material attenuation, microwave absorption is STILL NOT guaranteed to increase! Under Wave Mechanics Theory, absorption peaks at negative-infinity reflection loss come from destructive interference between front-interface and back-interface reflected beams—NOT from blind wave entry plus bulk attenuation!

[Scene 6: Proving 95%+ SCI Garbage — Paper Counts, Citations & The Equal-Data Trap]
Now tie this directly to the central thesis of our series: how can anyone claim that over ninety-five percent of modern SCI articles are garbage?
You do not need an impossible lifetime poll to prove it! Look at the absurd logic mainstream defenders use right now:
First, they point to twenty-three thousand three hundred Impedance Matching papers and say, "Look! All those papers prove Impedance Matching has massive experimental support!"
And then they turn around and tell critics: "If you want to overthrow a theory backed by tens of thousands of experimental papers, you must provide an EQUAL amount of new experimental data inside a single paper!"
Think about how ridiculous that demand is! Paper counts, SCI citations, and click counts do NOT determine the truth of information! Counting twenty-three thousand false interpretations as "experimental support" does not make a broken equation true—it only proves twenty-three thousand papers misread their data!
How do we truly judge whether over ninety-five percent of SCI articles are garbage? We ask ONE simple historical question:
Across MORE THAN HALF A CENTURY, did that colossal mountain of richly funded papers give us the key principles for designing microwave absorbing materials?! Did it achieve genuine scientific breakthroughs?!
Yang and co-authors' 2025 paper just answered that for us: ZERO screening laws, ZERO design principles, and "everything can be microwave-absorbing"! When half a century of tens of thousands of SCI papers produces zero fundamental design progress, that proves beyond a shadow of a doubt that more than ninety-five percent of those SCI articles are Cargo Cult garbage!

[Scene 7: Epilogue — Wave Mechanics Turns Blind Trial-and-Error Into Real Science]
Contrast fifty years of sterile paper inflation with how Wave Mechanics Theory actually guides material design:
First, fix the engineering requirement—choose the target complex permittivity and permeability values and frequency-dispersion profile needed for your target frequency and bandwidth;
Second, synthesize materials specifically engineered to hit those electromagnetic dispersion curves;
Third, apply the exact inverse thickness-frequency interference relation of films to shrink film thickness systematically at lower frequencies.
That is real science—where experiment one directly illuminates experiment two! Twenty-three thousand Cargo Cult papers could never replace one correct equation. Thank you for watching.`;

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="why-23300-papers-zero-design-rules-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay GZ &bull; Bibliometric &amp; Theoretical Autopsy
          </span>
          <span className="bg-rose-100 text-rose-900 text-xs font-semibold px-3 py-1 rounded-full border border-rose-200">
            23,300+ Papers (Akinay 2023) &bull; &ldquo;Everything Can Be Absorbing&rdquo; (Yang 2025) &bull; Zero Design Rules
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Why 23,300+ Impedance Matching Papers Yielded ZERO Material Design Laws: From Akinay (2023) to Yang et al. (Adv. Electron. Mater. 2025)
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Why paper volume, SCI citations, and click counts never measure scientific truth&mdash;examining how 23,300+ publications across half a century still left mainstream researchers admitting &ldquo;everything can be microwave-absorbing,&rdquo; exposing the &ldquo;equal experimental volume&rdquo; fallacy, the film-vs-material blind spot, and the unasked &epsilon;<sub><em>r</em></sub> = &mu;<sub><em>r</em></sub> contradiction&mdash;complete with a 7-Scene Digital Avatar Broadcast Script and 100% YouTube-Safe Description.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Companion to Essays GN, GK, GJ, FI, EW
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-23k")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-23k" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-23k" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-23k")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-23k" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-23k" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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
      {/* PART I: FORENSIC ANALYSIS OF THE 23,300-PAPER PARADOX                      */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <BarChart3 className="w-6 h-6 text-rose-700" />
          <h2>Part I: Half a Century of Mass Publication vs. Zero Material Design Principles</h2>
        </div>

        {/* Section 1 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-3">
          <h3 className="font-sans font-bold text-slate-950 text-base">
            1. 23,300 Documents (1990&ndash;2020): Industrial Scale Guided by One False Theory
          </h3>
          <p className="text-sm text-slate-700">
            In <em>ChemPhysMater</em> 2023, 2(3), 197&ndash;206 (DOI: <code>10.1016/j.chphma.2022.10.002</code>), Akinay et al. analyzed <strong>23,300 microwave absorption documents</strong> indexed in Scopus from 1990 to 2020&mdash;led by China and the United States, with <em>Journal of Alloys and Compounds</em> topping the field (592 papers) and graphene and TiO<sub>2</sub> as the most studied materials. Virtually every single paper operated under Impedance Matching Theory and had to claim &ldquo;material innovation&rdquo; to pass review. Yet despite massive funding and tens of thousands of claimed innovations, mainstream leaders still lament that fundamental bottlenecks remain unbroken!
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-xl space-y-3">
          <h3 className="font-sans font-bold text-amber-950 text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
            2. Yang et al. (Adv. Electron. Mater. 2025) Leak the Secret: &ldquo;Everything Can Be Wave-Absorbing&rdquo;
          </h3>
          <p className="text-sm text-slate-800">
            In <em>Advanced Electronic Materials</em> 2025, 11(14), 2500239 (DOI: <code>10.1002/aelm.202500239</code>), Yang, Wu, Sheng, Dong, Li, Wang, Qiao, and Li unintentionally reveal why tens of thousands of papers were produced without breakthroughs:
          </p>
          <blockquote className="bg-white p-3.5 rounded-lg border-l-4 border-amber-600 text-xs md:text-sm italic text-slate-700">
            &ldquo;The current array of MA materials in the literature is diverse, and the notion that &lsquo;everything can be wave-absorbing&rsquo; is not an exaggeration &hellip; all can serve as &lsquo;a promising candidate of MA materials&rsquo; &hellip; In other words, the majority of researchers continue to lack a well-defined framework for determining what qualifies as a better MA material. This has perpetuated the misconception that &lsquo;everything can be microwave-absorbing&rsquo;.&rdquo;
          </blockquote>
          <p className="text-sm text-slate-800">
            Just as doping a microscopic speck of bird droppings into a nanomaterial used to spawn an &ldquo;innovative&rdquo; publication, under Impedance Matching Theory <strong>any synthesized substance absorbs microwaves and can be written up as a &ldquo;promising candidate&rdquo;</strong>. Out of 23,300+ papers, not one reliable screening law or material-improvement rule emerged from Impedance Matching or Quarter-Wavelength Theory&mdash;because an influential <strong>wrong theory</strong> can manufacture tens of thousands of garbage papers while discovering zero physics!
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-700 shrink-0" />
            3. What on Earth Is an &ldquo;Ultrathin Material&rdquo;? Confusing Film Structure With Intrinsic Material
          </h3>
          <p className="text-sm text-slate-700">
            Even in diagnosing the crisis, Yang et al. target &ldquo;achieving strong low-frequency absorption with ultrathin materials.&rdquo; Yet <strong>a film can be ultrathin; there is no such thing as an &ldquo;ultrathin material.&rdquo;</strong> Intrinsic material parameters (&varepsilon;<sub><em>r</em></sub>, &mu;<sub><em>r</em></sub>) do not depend on sample thickness. What governs low-frequency absorption is two-beam destructive wave interference across a metal-backed <em>film</em> of thickness <em>d</em>. Failing to separate <em>film</em> from <em>material</em> guarantees perpetual confusion.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-rose-50/70 border border-rose-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-rose-950 text-base flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-700 shrink-0" />
            4. The Killer Contradiction Inside Impedance Matching: Why Did Nobody Chase &varepsilon;<sub>r</sub> = &mu;<sub>r</sub> With High Loss?
          </h3>
          <p className="text-sm text-slate-800">
            According to Impedance Matching Theory, setting &varepsilon;<sub><em>r</em></sub> = &mu;<sub><em>r</em></sub> guarantees all incident microwaves enter the material, and raising the imaginary parts (&varepsilon;<sub><em>r</em></sub>&Prime;, &mu;<sub><em>r</em></sub>&Prime;) maximizes attenuation. <strong>If that theory were actually valid, why has nobody across 23,300+ papers spent fifty years systematically mapping which chemical compositions and crystal structures yield &varepsilon;<sub><em>r</em></sub> = &mu;<sub><em>r</em></sub> with giant imaginary components?!</strong> Because the theory itself is false! Even if 100% of incident waves enter a medium AND even if attenuation increases, microwave absorption is STILL not guaranteed to increase!
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-slate-700 shrink-0" />
            5. Judging Scientific Progress &amp; Proving 95%+ SCI Garbage: Paper Volume Is Not Prosperity
          </h3>
          <p className="text-sm text-slate-700">
            How do we judge scientific progress? Paper volume does not equal scientific prosperity; publication counts, SCI citations, and click counts never decide the value or truth of information; and 23,300+ papers never prove Impedance Matching succeeded. Mainstream scientists cite those tens of thousands of papers as &ldquo;abundant experimental support,&rdquo; then absurdly demand that challengers provide an <em>equal volume of new experimental data inside a single paper</em> to refute it! Yet proving 95%+ of SCI papers are garbage requires only one decisive audit: check whether this enormous corpus spanning <strong>more than half a century</strong> produced key material-design principles or genuine innovative breakthroughs. Half a century of tens of thousands of papers yielding zero design laws proves structurally why over 95% of SCI papers are Cargo Cult garbage.
          </p>
        </div>

        {/* Section 6 */}
        <div className="bg-indigo-50/60 border border-indigo-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-indigo-950 text-base flex items-center gap-2">
            <Compass className="w-4 h-4 text-indigo-700 shrink-0" />
            6. How Wave Mechanics Actually Enables Cumulative Scientific Material Design
          </h3>
          <p className="text-sm text-slate-800">
            Wave Mechanics Theory restores true causal research: (1) establish target (&varepsilon;<sub><em>r</em></sub>, &mu;<sub><em>r</em></sub>) values and required frequency-dispersion behavior from bandwidth specs; (2) synthesize materials engineered for those exact electromagnetic spectra; and (3) apply the inverse film thickness&ndash;frequency interference relation to design thinner low-frequency absorbers. Experiment one genuinely guides experiment two.
          </p>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 7-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-rose-700" />
            <h2>Part II: Complete 7-Scene Digital Avatar Broadcast Script (~14.5 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-23k-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-23k-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-23k-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
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
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-23k-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-23k-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-23k-bottom" ? "Copied!" : "Copy Clean Description"}
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
          Bibliometric &amp; Theoretical Autopsy &bull; Essay GZ &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            23,300+ Papers Audited
          </span>
          <span className="bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md font-semibold">
            Film vs. Material
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Wave Mechanics Design
          </span>
        </div>
      </div>
    </article>
  );
}
