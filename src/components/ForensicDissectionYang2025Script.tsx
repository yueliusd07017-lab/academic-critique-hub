import React, { useState } from "react";
import { Video, ShieldAlert, Sparkles, Copy, Check, BookOpen, Layers, Zap, Scale, FileText, ExternalLink, ArrowRight, Skull, AlertTriangle, Compass } from "lucide-react";

export default function ForensicDissectionYang2025Script() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const youtubeSafeDescription = `Title: Deconstructing Yang et al. (Adv. Electron. Mater. 2025): National Grants, Citation Erasure, the |Zin/Z0| = 1 Fallacy & Wave Mechanics | Forensic Dissection Series Case 2

Welcome to Episode 2 of our Forensic Dissection Series: "Why Modern Science Is in a Dark Age."

In 2025, the prestigious Wiley journal Advanced Electronic Materials published an ambitious paper:
S. Yang, P. Wu, Y. Sheng, Y. Dong, Z. Li, T. Wang, L. Qiao, and F. Li, "On the Quality Criteria for Microwave Absorbing Materials", Adv. Electron. Mater. 2025, 11(14), 2500239 (DOI: 10.1002/aelm.202500239).

Backed by multiple elite Chinese state grants (NSFC U23A20547, National Key R&D Program YFB3501302, and Baiyunobo State Key Lab), the authors open with an astonishingly candid confession:
After half a century of research and tens of thousands of SCI papers, the microwave absorption field has arrived at the absurd conclusion that "everything can be wave-absorbing... and all can serve as a promising candidate."

Yet, not a single reliable rule for screening or designing materials has ever emerged from impedance matching or quarter-wavelength models. Why? Because the underlying theories are physically false!

In this forensic investigation, Dr. Yue Liu exposes:

1. THE SMOKING GUN OF CITATION ERASURE:
Yang et al. proclaim as their revelation: "RL is a parameter of the absorbing device and should not be used to evaluate the intrinsic quality of a material."
Yet this exact principle was mathematically derived and experimentally verified years earlier by Dr. Yue Liu et al. (AIP Advances 2018; Materials Chemistry and Physics 2020).
Yang et al. credit Xiaobo Chen (2019) for questioning RL, but Chen (2019, J. Materiomics, Ref [102]) explicitly cited Liu et al. (2018)! Yang et al. cite Chen while erasing the original pioneer Liu et al., even while adopting Liu's unique non-standard notation "ZM".

2. THE IMPEDANCE MATCHING ILLUSION (epsilon = mu):
Impedance matching claims setting epsilon = mu guarantees all microwave enters the film, and increasing loss increases absorption.
Wave mechanics proves: When epsilon = mu, front reflection r1 = 0, eliminating two-beam destructive interference and producing ZERO absorption peaks!

3. THE MODULUS FALLACY: 0.98 to 1.02 |Zin/Z0|:
Yang et al. propose 0.98 to 1.02 of |Zin/Z0| as "perfect matching". As proven in Figure 4.8 of Liu et al. (Elsevier 2024), multiple thicknesses satisfy |Zin/Z0| = 1 with zero absorption peaks, because Zin/Z0 is a complex number requiring both amplitude and phase cancellation.

4. THE INADVERTENT TRIUMPH OF WAVE MECHANICS:
Yang et al. define the "absorption thickness factor" (fmtm)p to select epsilon and mu for thickness reduction. This is nothing other than Dr. Yue Liu's inverse relationship (fm * tm = const) from wave mechanics! Yang et al. inadvertently prove that wave mechanics, not impedance matching, is the only framework capable of guiding real material design.

TIMESTAMPS:
00:00 - Scene 1: The Half-Century Paradox & "Everything Absorbs" Bubble
02:15 - Scene 2: The Smoking Gun of Citation Erasure & Concept Laundering
04:40 - Scene 3: Why epsilon = mu Produces ZERO Absorption Peaks
06:55 - Scene 4: The Quarter-Wavelength Fallacy vs. Wave Cancellation
08:45 - Scene 5: The Modulus Trap: 0.98 to 1.02 |Zin/Z0|
10:30 - Scene 6: How (fmtm)p Proves Wave Mechanics Guides Design
12:15 - Scene 7: The Epistemological Crisis of Modern SCI Academia

Primary Theoretical References:
- Yang et al., Adv. Electron. Mater. 2025, 11(14), 2500239 (DOI: 10.1002/aelm.202500239)
- Liu et al., AIP Advances 2018, 8, 015223 (DOI: 10.1063/1.5016091)
- Liu et al., Mater. Chem. Phys. 2020, 243, 122624 (DOI: 10.1016/j.matchemphys.2019.122624)
- Liu et al., Surfaces and Interfaces 2023, 40, 103022 (DOI: 10.1016/j.surfin.2023.103022)
- Liu et al., J. Appl. Phys. 2023, 134, 045304 (DOI: 10.1063/5.0153612)
- Liu et al., J. Magn. Magn. Mater. 2024, 593, 171850 (DOI: 10.1016/j.jmmm.2024.171850)
- Liu et al., Chapter 4, Porous Nanocomposites (Elsevier 2024), pp. 59-90.
- Academic Critique Hub: https://github.com/academic-critique/hub

#AcademicIntegrity #MicrowaveAbsorption #ScientificMethod #PeerReviewCrisis #WaveMechanics #CitationLaundering #FirstPrinciples`;

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="forensic-dissection-yang2025-aelm-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-rose-100 text-rose-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-rose-300 flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-rose-700" />
            Essay GN &bull; Forensic Dissection Case 2
          </span>
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
            Adv. Electron. Mater. 2025 (Wiley) &bull; Citation Erasure &bull; The (fmtm)p Factor
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Forensic Dissection Case 2: Deconstructing Yang et al. (Adv. Electron. Mater. 2025) — National Grants, Citation Erasure, the |Z<sub>in</sub>/Z<sub>0</sub>| = 1 Fallacy, and How Wave Mechanics Actually Guides Material Design
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Complete English Broadcast Script for Digital Avatar / Video Generation (TikTok Symphony, Clipchamp, HeyGen) &amp; 100% YouTube-Compliant Video Description.
        </p>
        <div className="text-xs text-slate-400 mt-2 font-mono">
          Author: Dr. Yue Liu (刘跃) &bull; Wave Mechanics Theoretical Archives &bull; Series Case 2
        </div>
      </div>

      {/* Abstract Callout */}
      <div className="bg-rose-50/70 border-l-4 border-rose-600 p-5 rounded-r-xl mb-8 font-sans text-sm text-slate-800 space-y-2">
        <div className="font-bold text-rose-950 flex items-center gap-2">
          <Skull className="w-5 h-5 text-rose-700 shrink-0" />
          Case 2 Overview: S. Yang et al., Advanced Electronic Materials 2025 (DOI: 10.1002/aelm.202500239)
        </div>
        <p>
          Supported by China&apos;s National Natural Science Foundation (U23A20547) and National Key R&amp;D Program (YFB3501302), Yang et al. acknowledge the scandalous reality that after 50 years, the microwave absorption field has degenerated into the dogma that <em>&ldquo;everything can be wave-absorbing.&rdquo;</em> Yet while attempting to formulate &ldquo;quality criteria,&rdquo; the authors commit textbook citation erasure—absorbing Dr. Yue Liu&apos;s foundational discoveries that Reflection Loss (RL) characterizes the device rather than the material, citing downstream papers while scrubbing the original discoverers, copying Liu&apos;s signature non-standard variable symbol <em>Z</em><sub>M</sub>, and falling into the 0.98 &lt; |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| &lt; 1.02 modulus trap. Paradoxically, their primary valid contribution—the absorption thickness factor (<em>f</em><sub>m</sub><em>t</em><sub>m</sub>)<sub>p</sub>—is a direct borrowing of Dr. Liu&apos;s inverse relationship, proving that wave mechanics alone can guide material design.
        </p>
      </div>

      {/* Quick Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl mb-8 font-sans">
        <div className="text-xs text-slate-600">
          <strong>Production Toolkit:</strong> Full 7-Scene Broadcast Script &bull; Spoken Narration &bull; On-Screen Graphics &bull; YouTube Metadata
        </div>
        <button
          onClick={() => handleCopyText(youtubeSafeDescription, "desc")}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition shadow-xs cursor-pointer"
        >
          {copiedSection === "desc" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copiedSection === "desc" ? "Description Copied!" : "Copy Safe YouTube Description"}
        </button>
      </div>

      {/* SCRIPT SECTION */}
      <div className="space-y-8">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 font-sans font-bold text-xl text-slate-950">
          <Video className="w-6 h-6 text-rose-600" />
          <h2>Part I: The Complete Digital Avatar Broadcast Script (7 Scenes)</h2>
        </div>

        {/* Scene 1 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">1</span>
              Scene 1: Prologue — The &ldquo;Everything Absorbs&rdquo; Bubble &amp; National Grants
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~135 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Dignified senior scientist / academic forensic analyst in dark blazer, calm, authoritative, analytical eye contact.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Cover of <em>Advanced Electronic Materials</em> 2025 (Wiley); text callouts of NSFC Grant U23A20547; montage of thousands of SCI papers claiming &ldquo;promising absorber&rdquo;.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Over 50 Years, 50,000 Papers... Zero Valid Material Design Principles!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-rose-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-rose-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Welcome back to Episode Two of our Forensic Dissection Series: <em>Why Modern Science Is in a Dark Age</em>.
            </p>
            <p className="leading-relaxed">
              Today, we examine a high-profile paper published in 2025 in the prestigious Wiley journal <em>Advanced Electronic Materials</em>, authored by S. Yang, Fashen Li, and their colleagues. This work was bankrolled by top-tier funding: the National Natural Science Foundation of China, the National Key Research and Development Program, and a National Key Laboratory.
            </p>
            <p className="leading-relaxed">
              In their opening paragraphs, the authors make an astonishingly candid confession. They write: <em>&lsquo;The notion that everything can be wave-absorbing is not an exaggeration... all can serve as a promising candidate of microwave absorbing materials.&rsquo;</em>
            </p>
            <p className="leading-relaxed">
              Think about the gravity of that admission! For more than half a century, tens of thousands of professors, postdocs, and doctoral candidates have published tens of thousands of SCI articles claiming that their newly synthesized compound is a &lsquo;promising candidate.&rsquo; Yet after millions of research hours and billions in state funding, the field cannot provide a single reliable rule to synthesize or screen materials using impedance matching or quarter-wavelength models.
            </p>
            <p className="leading-relaxed">
              Why? Because the foundational theory they have relied on for fifty years is physically, mathematically, and epistemologically false.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 2 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">2</span>
              Scene 2: The Smoking Gun — Citation Erasure &amp; Concept Hijacking
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~145 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Incisive, stern, gesturing toward evidence document on screen.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Side-by-side timeline: Liu et al. (AIP Advances 2018) &rarr; Chen et al. (2019 citing Liu Ref 102) &rarr; Yang et al. (2025 citing Chen but deleting Liu!).
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;The Smoking Gun: Citing the Downstream Review to Erase the Original Discoverer!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-indigo-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-indigo-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;In science, there is an unwritten moral line: you never present someone else&apos;s pioneering breakthrough as your own original insight. In a community obsessed with priority, claiming someone else&apos;s discovery without attribution should terminate an academic reputation. Yet in today&apos;s cargo-cult academia, citation erasure is an everyday weapon.
            </p>
            <p className="leading-relaxed">
              On page 2, Yang et al. grandly declare: <em>&lsquo;It is vital to emphasize that RL is a parameter of the absorbing device and should not be used to evaluate the intrinsic quality of a material.&rsquo;</em>
            </p>
            <p className="leading-relaxed">
              They present this as an urgent new revelation. But whose discovery was it?
            </p>
            <p className="leading-relaxed">
              Back in 2018, Dr. Yue Liu, Michael Drew, and their team published a landmark treatise in <em>AIP Advances</em> (2018, 8, 015223), mathematically proving that reflection loss is an interface-dependent device parameter, and showing that increasing film thickness can counter-intuitively decrease absorptivity. In 2020, Dr. Liu published in <em>Materials Chemistry and Physics</em> (2020, 243, 122624) explicitly establishing that RL cannot evaluate the intrinsic quality of a material!
            </p>
            <p className="leading-relaxed">
              Here is the smoking gun: Yang et al. cite Dr. Xiaobo Chen&apos;s 2019 review as their source for questioning RL. But if you open Chen&apos;s 2019 paper in the <em>Journal of Materiomics</em>, Chen explicitly cited Dr. Yue Liu&apos;s 2018 paper as Reference 102! Yang et al. deliberately cited the secondary review while completely scrubbing the original discoverer from their references.
            </p>
            <p className="leading-relaxed">
              Even more telling: Yang et al. adopted the highly specific, non-standard variable symbol <em>Z</em><sub>M</sub> to denote material characteristic impedance. In microwave literature, <em>Z</em><sub>M</sub> is an anomalous notation coined and championed exclusively by Dr. Yue Liu. To copy the notation, borrow the core thesis, and erase the author—this is the signature of modern academic laundering.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 3 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">3</span>
              Scene 3: The Impedance Matching Mirage — Why ε = μ Produces Zero Absorption Peaks
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~130 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Explaining wave equations with chalkboard-style animated wave diagrams.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Diagram of two-beam interference: front reflected beam r1 and back metal-reflected beam r2. Formula: r1 = (ZM - Z0)/(ZM + Z0) = 0.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;When Permittivity Equals Permeability: Zero Reflection, Zero Interference, ZERO ABSORPTION PEAK!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-amber-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-amber-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Now let us dissect the theoretical errors that Yang et al. cling to.
            </p>
            <p className="leading-relaxed">
              Like the rest of the mainstream, Yang et al. assume that according to impedance matching theory, when dielectric permittivity equals magnetic permeability (&epsilon;<sub>r</sub> = &mu;<sub>r</sub>), the material impedance matches air, all incident microwaves enter the sample, and increasing the imaginary loss parameters will maximize absorption.
            </p>
            <p className="leading-relaxed">
              This sounds intuitively reasonable to a novice, but from first-principles wave mechanics, it is utterly wrong!
            </p>
            <p className="leading-relaxed">
              As proven by Liu et al. in <em>Surfaces and Interfaces</em> (2023, 40, 103022) and the <em>Journal of Applied Physics</em> (2023, 134, 045304): An absorption peak in a metal-backed film is NOT produced by bulk attenuation. It is produced by destructive wave interference between the reflection from the front air-material interface and the reflection from the back metal interface!
            </p>
            <p className="leading-relaxed">
              When &epsilon;<sub>r</sub> equals &mu;<sub>r</sub>, the material impedance <em>Z</em><sub>M</sub> equals the air impedance <em>Z</em><sub>0</sub>. Therefore, the reflection coefficient at the front interface <em>r</em><sub>1</sub> is exactly zero! There is no front reflection to cancel the back-reflected beam. Destructive interference is rendered mathematically impossible.
            </p>
            <p className="leading-relaxed">
              Consequently, when permittivity equals permeability, a metal-backed film produces <strong>NO ABSORPTION PEAK WHATSOEVER</strong>! Mainstream researchers have spent fifty years chasing &epsilon; = &mu;, completely oblivious that the very condition they idolize eliminates absorption peaks entirely!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 4 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">4</span>
              Scene 4: The Quarter-Wavelength Fallacy &amp; Multi-Peak Phantom
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~120 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Critical and precise, holding up spectral curve comparison.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Frequency-thickness inverse relationship curve: f_m * t_m = const vs. flawed tm = (2n+1)lambda/4 formula.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Periodic Peaks Are Boundary Interference, NOT Intrinsic Material Resonances!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Next, consider the quarter-wavelength model. Yang et al. write that the quarter-wavelength theory explains why RL peaks shift to lower frequencies as sample thickness increases.
            </p>
            <p className="leading-relaxed">
              Mainstream scientists genuinely believe they can use the quarter-wavelength formula to discover materials with &lsquo;continuous intrinsic multi-peak resonance&rsquo; to widen bandwidth. But materials with continuous intrinsic multi-peak absorption barely exist in nature!
            </p>
            <p className="leading-relaxed">
              Why, then, does virtually every material backed by a metal plate show periodic multiple absorption peaks?
            </p>
            <p className="leading-relaxed">
              Because those peaks are NOT intrinsic material properties! As established in the <em>Journal of Magnetism and Magnetic Materials</em> (2024, 593, 171850), the multiple peaks are the periodic mathematical solution to phase cancellation across the film boundaries. The shift to lower frequency with increasing thickness is governed by the <strong>wave-mechanics inverse relationship</strong> (<em>f</em><sub>m</sub> &middot; <em>t</em><sub>m</sub> &approx; const), which replaces the flawed quarter-wavelength equation.
            </p>
            <p className="leading-relaxed">
              Attributing these periodic peaks to material resonance is like looking at Newton&apos;s rings through a microscope and concluding that glass has a microscopic ring-shaped atomic structure!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 5 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">5</span>
              Scene 5: The Modulus Trap — 0.98 to 1.02 |Zin/Z0| Is an Illusion
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~130 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Pointing to complex plane polar plot (R2 inward spiral).
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Figure 4.8 from Elsevier (2024): Complex plane showing circles of |Zin/Z0| = 1 with zero absorption vs. the single point Zin/Z0 = 1 + 0i.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;The Modulus Fallacy: |Zin/Z0| = 1 Does NOT Equal Perfect Matching!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-rose-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-rose-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Here is where Yang et al. walk directly into a mathematical trap.
            </p>
            <p className="leading-relaxed">
              On page 4, they propose that when the impedance deviation is constrained between 0.98 and 1.02 of the modulus—meaning 0.98 &lt; |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| &lt; 1.02—the absorber can be regarded as having achieved &lsquo;perfect matching.&rsquo;
            </p>
            <p className="leading-relaxed">
              This is a fatal mathematical blunder. <em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub> is a <strong>complex number</strong>, possessing both an amplitude modulus and a phase angle!
            </p>
            <p className="leading-relaxed">
              In Figure 4.8 of Dr. Yue Liu&apos;s 2024 Elsevier book chapter, this is proven beyond dispute: A material can satisfy |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| = 1 at multiple thicknesses while having <strong>zero absorption peaks</strong>! Why? Because if the phase angle is non-zero, the reflected waves do not cancel in phase. Perfect matching does NOT mean the modulus equals one; it requires the complex difference |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub> &minus; 1| to equal zero!
            </p>
            <p className="leading-relaxed">
              Dr. Xiaobo Chen had previously claimed that extremely sharp minimal RL values were &lsquo;computational artifacts&rsquo; of frequency step size. But wave mechanics explains the real physics: at the exact singularity of complete wave cancellation, reflection loss approaches negative infinity. That is not an artifact of code; it is the mathematical singularity of destructive interference! By proposing a loose modulus band of 0.98 to 1.02, Yang et al. merely swept the underlying phase physics under the rug.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 6 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">6</span>
              Scene 6: The Unwitting Triumph — How (fmtm)p Proves Wave Mechanics Guides Design
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~135 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Reflective, highlighting the grand irony with intellectual triumph.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Equation: (fm * tm)p = const; chemical structure diagrams showing functional group tuning of epsilon and mu.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;The Ultimate Irony: Their Best Parameter Is Liu&apos;s Wave-Mechanics Inverse Law!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-emerald-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-emerald-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Now we come to the most fascinating twist in Yang et al.&apos;s entire paper.
            </p>
            <p className="leading-relaxed">
              Towards the end of their article, the authors attempt to provide a practical quality criterion for microwave materials. They define what they call the <em>&lsquo;absorption thickness factor&rsquo;</em>—written as (<em>f</em><sub>m</sub><em>t</em><sub>m</sub>)<sub>p</sub>—which is the product of the perfect matching frequency and matching thickness. They show that by choosing materials with smaller values of this product, one can design much thinner absorbing films.
            </p>
            <p className="leading-relaxed">
              Look closely at what they did! What is this (<em>f</em><sub>m</sub><em>t</em><sub>m</sub>)<sub>p</sub> factor?
            </p>
            <p className="leading-relaxed">
              It is <strong>the exact inverse relationship between frequency and film thickness</strong> that Dr. Yue Liu published in <em>Physica B</em> and <em>Materials Chemistry and Physics</em> to overthrow the quarter-wavelength model!
            </p>
            <p className="leading-relaxed">
              Wave mechanics has always taught: to design real materials, researchers must investigate what chemical compositions, functional groups, or porous microstructures increase or decrease &epsilon; and &mu;, and how to tailor their frequency dispersion so that the product <em>f</em><sub>m</sub> &middot; <em>t</em><sub>m</sub> is minimized.
            </p>
            <p className="leading-relaxed">
              Impedance matching was completely powerless to guide this. By adopting the product of frequency and thickness as their central criterion, Yang et al. unwittingly abandoned impedance matching and proved that <strong>wave mechanics is the only theoretical framework capable of guiding real-world material design!</strong>&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 7 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">7</span>
              Scene 7: Epilogue — The Choice Between Alchemy and Honest Science
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~110 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Solemn, inspiring, direct address to the global scientific community.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Academic Critique Hub interface, links to open-access preprints, quote by Richard Feynman on Cargo Cult Science.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Break the Silence. Honor First Principles. Return to Real Science.&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-900 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;This concludes our second forensic case.
            </p>
            <p className="leading-relaxed">
              What does the paper of Yang et al. teach us about modern academia?
            </p>
            <p className="leading-relaxed">
              It proves that when a discipline rests on false physics, no amount of national grant money, no prestigious journal banners, and no tens of thousands of graduate theses can produce real technological progress. It merely creates an echo chamber where researchers copy each other&apos;s notations, cite secondary reviews to erase the true discoverers, and dress up curve-fitting as innovation.
            </p>
            <p className="leading-relaxed">
              Science does not advance through prestige, funding grants, or peer-review cartel protection. Science advances only through mathematical rigor, intellectual honesty, and strict obedience to physical first principles.
            </p>
            <p className="leading-relaxed">
              Read the complete mathematical derivations and primary literature on our Academic Critique Hub. Share this video with colleagues who care about truth in science. Until next time, stay vigilant, stay honest, and never surrender your independent intellect.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* FORENSIC EVIDENCE COMPARISON TABLE */}
      <section className="mt-12 space-y-4 font-sans">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 font-bold text-xl text-slate-950">
          <Scale className="w-6 h-6 text-indigo-700" />
          <h2>Part II: Forensic Evidence &amp; Priority Ledger</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-300 rounded-lg">
            <thead className="bg-slate-900 text-white uppercase tracking-wider">
              <tr>
                <th className="p-3">Core Theoretical Point</th>
                <th className="p-3">Pioneering Work by Dr. Yue Liu et al.</th>
                <th className="p-3">Yang et al. (Adv. Electron. Mater. 2025)</th>
                <th className="p-3">Forensic Assessment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-slate-50">
              <tr>
                <td className="p-3 font-bold text-slate-900">RL is a Device Parameter, NOT Material Property</td>
                <td className="p-3 text-slate-700">
                  <em>AIP Advances</em> 2018 (8, 015223);<br />
                  <em>Mater. Chem. Phys.</em> 2020 (243, 122624)
                </td>
                <td className="p-3 text-slate-700">
                  Claims: <em>&ldquo;RL is a parameter of the absorbing device and should not be used to evaluate the intrinsic quality of a material.&rdquo;</em>
                </td>
                <td className="p-3 text-rose-900 font-semibold">
                  Direct citation erasure. Cites Chen 2019 who explicitly cited Liu 2018 (Ref [102]), but Yang omits Liu.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Material Impedance Symbol <em>Z</em><sub>M</sub></td>
                <td className="p-3 text-slate-700">
                  Coined and consistently utilized across all papers since 2018 as standard distinction from <em>Z</em><sub>0</sub> and <em>Z</em><sub>in</sub>.
                </td>
                <td className="p-3 text-slate-700">
                  Adopts <em>Z</em><sub>M</sub> alongside <em>Z</em><sub>in</sub> and <em>Z</em><sub>0</sub>.
                </td>
                <td className="p-3 text-rose-900 font-semibold">
                  Smoking gun: Uncredited adoption of unique non-standard variable nomenclature.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Condition &epsilon;<sub>r</sub> = &mu;<sub>r</sub> Eliminates Peaks</td>
                <td className="p-3 text-slate-700">
                  <em>Surfaces and Interfaces</em> 2023 (40, 103022);<br />
                  <em>J. Appl. Phys.</em> 2023 (134, 045304)
                </td>
                <td className="p-3 text-slate-700">
                  Still assumes &epsilon;<sub>r</sub> = &mu;<sub>r</sub> is ideal for entering media and increasing attenuation.
                </td>
                <td className="p-3 text-amber-900 font-semibold">
                  Theoretical blindness: When &epsilon; = &mu;, front reflection <em>r</em><sub>1</sub> = 0, so two-beam wave cancellation cannot occur.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Modulus Trap |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| &approx; 1</td>
                <td className="p-3 text-slate-700">
                  <em>Porous Nanocomposites</em> (Elsevier 2024), Ch. 4, Fig. 4.8.
                </td>
                <td className="p-3 text-slate-700">
                  Proposes 0.98 &lt; |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| &lt; 1.02 as criterion for perfect matching.
                </td>
                <td className="p-3 text-rose-900 font-semibold">
                  Mathematical error: Ignores phase angle. A film can satisfy |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| = 1 with zero absorption.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">Frequency-Thickness Inverse Law (<em>f</em><sub>m</sub> &middot; <em>t</em><sub>m</sub>)</td>
                <td className="p-3 text-slate-700">
                  <em>Mater. Chem. Phys.</em> 2022 (290, 126521);<br />
                  <em>Physica B</em> 2023 (666, 415108)
                </td>
                <td className="p-3 text-slate-700">
                  Defines &ldquo;absorption thickness factor&rdquo; (<em>f</em><sub>m</sub><em>t</em><sub>m</sub>)<sub>p</sub> to select &epsilon; and &mu; for thin films.
                </td>
                <td className="p-3 text-emerald-900 font-semibold">
                  Inadvertent adoption of wave mechanics: Proves wave mechanics—not impedance matching—is what guides material design.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* YOUTUBE METADATA DISPLAY */}
      <section className="mt-12 space-y-4 font-sans">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <FileText className="w-6 h-6 text-rose-600" />
            <h2>Part III: 100% YouTube-Safe Description (Zero &lt; or &gt; Characters)</h2>
          </div>
          <button
            onClick={() => handleCopyText(youtubeSafeDescription, "desc-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedSection === "desc-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedSection === "desc-bottom" ? "Copied!" : "Copy Clean Description"}
          </button>
        </div>
        <p className="text-xs text-slate-500">
          Note: This description strictly avoids all angle brackets (&lt; and &gt;) to eliminate YouTube Studio&apos;s red validation error box (anti-XSS filter). It contains complete timestamps, quotes, and primary DOIs ready for publication.
        </p>
        <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 border border-slate-700">
          {youtubeSafeDescription}
        </pre>
      </section>

      {/* Footer Banner */}
      <div className="mt-12 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          Forensic Dissection Series &bull; Episode 2 &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-rose-100 text-rose-800 px-2.5 py-1 rounded-md font-semibold">
            Adv. Electron. Mater. 2025
          </span>
          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
            Citation Erasure
          </span>
          <span className="bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded-md font-semibold">
            Wave Mechanics
          </span>
        </div>
      </div>
    </article>
  );
}
