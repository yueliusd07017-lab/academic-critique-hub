import React, { useState } from "react";
import { ShieldAlert, Copy, Check, Image, Sparkles, Video, FileText, Flame, Eye } from "lucide-react";

export default function GlossyCartoonsVsWaveMechanicsScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("glossy-cartoons-vs-wave-mechanics-article-text");
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

  const youtubeSafeDescription = `Title: Pretty Pictures, Shallow Theory: How Glossy Flagship Cartoons Mislead Microwave Absorption Science | Forensic Epistemology

Why do top SCI flagship journals—Advanced Functional Materials, Chemical Engineering Journal, Small Structures, Nano-Micro Letters, Materials & Design, IJEM, and Nature sub-journals—eagerly publish dazzling 3D cartoons of hollow spheres, bionic algae, pinecones, honeycombs, multiple-scattering zig-zags, and 3D rainbow waterfall plots, while rejecting plain, mathematically rigorous Wave Mechanics Theory papers?

In this visual forensic investigation, Dr. Yue Liu audits ten recent flagship-journal graphics side by side and exposes the uncomfortable truth behind academia's love affair with eye-catching artwork:

1. THE CORE PHYSICAL REALITY THEY HIDE:
In a metal-backed absorber film, microwave absorption peaks measured by Reflection Loss (RL) are primarily the result of WAVE INTERFERENCE between the front-interface reflected beam (r1) and back-interface reflected beam (r2). Explaining film RL absorption peaks purely as intrinsic "material microstructure cartoons"—zig-zag multiple scattering, hollow-cavity resonances, 1D/2D coupling, bionic shapes, or dipole dumbbells—is scientifically MISLEADING.

2. SHALLOW THEORY + HYPERACTIVE FREE-ASSOCIATION:
When researchers lack first-principles theoretical depth, they compensate with hyperactive visual storytelling: turning ordinary thickness-dependent interference valleys (RL dips like -59.6 dB or -64.87 dB) into theatrical 3D graphics while confusing film device physics with intrinsic material properties.

3. TEN RECENT FLAGSHIP-JOURNAL EXHIBITS AUDITED:
- Adv. Funct. Mater. 2025 (Wang et al., DOI: 10.1002/adfm.202521010): Ag NWs/N-doped rGO aerogels freeze-drying cartoons.
- Chem. Eng. J. 2025 (Zhu, Wang, Zhang et al., DOI: 10.1016/j.cej.2025.164056): Cf/Fe foam "1D-2D Coupling", "Vertical Resonating" & "Inter-unit Resonating" schematics.
- Int. J. Extrem. Manuf. 2023 (Huang et al., Li & Novoselov teams, DOI: 10.1088/2631-7990/acdb0c): Laser-induced graphene sphere cartoons paired with broadband RL narratives.
- Small Structures 2024 (DOI: 10.1002/sstr.202400666): "Biomimetic gradient light-absorption of blue-green algae", CST rainbow globes, "Optimal Matching Model", and "Hollow-cavity Resonance Effect".
- Acta Phys.-Chim. Sin. 2026 (DOI: 10.1016/j.actphy.2026.100276): Glowing sci-fi cover laser and cartoonish bouncing electron arrows.
- Adv. Compos. Hybrid Mater. 2025 (Liu et al., DOI: 10.1007/s42114-024-01145-5): Recycled synthesis cascades paired with 3D rainbow RL valleys.
- Nano-Micro Lett. 2025 (Wang et al., DOI: 10.1007/s40820-024-01591-2): "Lessons from Nature" bionic absorber schematics.
- Materials & Design 2025 (PII: S0264127525008408): Core-shell zig-zag "multiple scattering" arrows, stealth jets, galvanic cell cartoons, and corn-silk schematics.
- Adv. Funct. Mater. 2022 & 2023 (H. Wu et al., 2200544 & 2212604): Cartoonish dipole polarization characters & 3d-orbital narratives.
- Nature sub-journal showcase: RuO2/Glass metasurface thermal-plume demo.

4. SYSTEMIC ROT BEYOND ONE FIELD:
When cultural mythology like "Chang'e Flying to the Moon" and cartoons like "Calabash Brothers" land on the covers of top flagship journals, it proves the crisis is NOT isolated to microwave absorption: modern publishing rewards theatrical packaging while suffocating plain, penetrating mathematical science.

5. FROM RESEARCHERS TO PROFESSIONAL COPYWRITERS — AND THE EDITOR-IN-CHIEF INVERSION:
These papers do not read like they were written by experts solving hard physics—they read like the output of professional copywriters or paper-mill writing squads. Even if researchers wrote them personally, it means they no longer know how to do real research: mainstream scientists have degenerated into commercial scriptwriters. And that is why today's "experts" invite journal Editors-in-Chief to instruct scientists on how to pick hot topics and write papers—instead of editors consulting researchers on what truth matters.

TIMESTAMPS:
00:00 - Scene 1: Prologue — Why Dazzling Flagship Graphics Reveal a Broken Research Direction
02:15 - Scene 2: Pretty Pictures vs. Physics — Film Wave Interference Disguised as "Material Magic"
04:30 - Scene 3: Inside Flagship Exhibits (AFM, CEJ, IJEM, Small Structures) — Art Replaces Math
07:05 - Scene 4: Rainbow Waterfalls & Zig-Zag Arrows (ACHM, NML, Materials & Design, Wu et al.)
09:45 - Scene 5: Shallow Theory, Rich Free-Association — Why Glossy Fairy Tales Beat Rigorous Science
11:45 - Scene 6: Paper-Mill Copywriting, "Chang'e & Calabash Brothers" Covers, and the Editor-in-Chief Inversion
14:10 - Scene 7: Epilogue — When Scientists Become Copywriters and Garbage Wears Flagship Gold

Key References Cited:
- Wang, W. et al., Adv. Funct. Mater. 2025 (DOI: 10.1002/adfm.202521010)
- Zhu, S., Wang, L., Zhang, Q. et al., Chem. Eng. J. 2025 (DOI: 10.1016/j.cej.2025.164056)
- Huang, Y. H. et al., Int. J. Extrem. Manuf. 2023, 5, 035503 (DOI: 10.1088/2631-7990/acdb0c)
- Small Structures 2024 (DOI: 10.1002/sstr.202400666); Acta Phys.-Chim. Sin. 2026 (DOI: 10.1016/j.actphy.2026.100276)
- Liu, S. et al., Adv. Compos. Hybrid Mater. 2025, 8, 144 (DOI: 10.1007/s42114-024-01145-5)
- Wang, D. et al., Nano-Micro Lett. 2025, 17, 100 (DOI: 10.1007/s40820-024-01591-2); Mater. Des. 2025 (S0264127525008408)
- Wu, H. et al., Adv. Funct. Mater. 2022, 2200544 & 2023, 33, 2212604
- Liu, Y., Liu, Y., Drew, M. G. B., J. Magn. Magn. Mater. 2024, 593, 171850; Ind. Eng. Chem. Res. 2025, 64(7), 3635-3650
- Academic Critique Hub: https://github.com/academic-critique/hub

#WaveMechanics #CargoCultScience #ScientificPublishing #MicrowaveAbsorption #AdvFunctMater #MaterialsScience #PeerReviewCrisis`;

  const spokenScriptText = `[Scene 1: Prologue — Why Dazzling Flagship Graphics Reveal a Broken Research Direction]
Take a close look at the images scrolling across your screen right now.
You are looking at actual published schematics, covers, and mechanism cartoons pulled from today's highest-prestige SCI journals: Advanced Functional Materials, Chemical Engineering Journal, Small Structures, Nano-Micro Letters, Materials and Design, Acta Physico-Chimica Sinica, International Journal of Extreme Manufacturing, and a Nature sub-journal.
They are undeniably gorgeous! Glowing lasers, iridescent hollow spheres, biomimetic blue-green algae, stealth jets, 3D rainbow waterfalls, and comic-book dipoles bouncing between nanosheets.
Now ask yourself the single most uncomfortable question in modern materials science:
Do these dazzling pictures reveal profound physical laws—or are they high-budget distraction theater covering up a research field whose entire direction is wrong?!

[Scene 2: Pretty Pictures vs. Physics — Film Interference Disguised as "Material Magic"]
Let us cut straight through the artistic varnish to the hard physics.
In virtually every single microwave absorption paper shown here, what quantity are authors measuring and celebrating with those neon-colored 3D valleys reading minus fifty-nine decibels or minus sixty-four decibels? They are plotting the Reflection Loss—RL—of a metal-backed absorbing FILM!
As Wave Mechanics Theory proves rigorously from Maxwell's equations, those sharp absorption peaks in metal-backed films are primarily the result of WAVE INTERFERENCE—destructive cancellation between beam r-one reflected from the front surface and beam r-two reflected from the metal backplate!
They are NOT caused by microwaves playing pinball inside hollow cages, bowing to bionic algae geometries, or wrestling cartoon dipole characters!
Explaining film wave-interference peaks purely through intrinsic "material structure stories" is scientifically misleading! These glossy graphics prove that an entire multi-billion-dollar field has marched in the wrong theoretical direction!

[Scene 3: Inside Flagship Exhibits — When Art Replaces Mathematics]
Look at our first batch of exhibits directly from flagship 2023 to 2025 papers.
In Advanced Functional Materials 2025, freeze-dried graphene aerogels with silver nanowires become an ornate manufacturing storyboard. In Chemical Engineering Journal 2025, carbon-iron foams are decorated with schematic labels like "1D-2D Coupling," "Vertical Resonating," and "Inter-unit Resonating." Even in International Journal of Extreme Manufacturing—co-authored by top academician and Nobel-laureate teams—laser-induced graphene is rendered as glowing red and green chemical spheres shooting across an atomic mesh!
Turn the page to Small Structures 2024 on microspherical structural absorbers: you get a dazzling green schematic titled "Biomimetic gradient light-absorption structure of blue-green algae," flanked by finite-element rainbow globes claiming "Optimal Matching Model," "Hollow-cavity Resonance Effect," and "Multi-shell Synergistic Enhancement"!
Did any of those rainbow globes calculate the complex amplitude and phase of beam r-two—or distinguish film interference from intrinsic material attenuation?! No! The prettier the rendering, the shallower the underlying wave mechanics!

[Scene 4: Rainbow Waterfalls & Zig-Zag Arrows Across Flagship Reviews]
Now watch what happens when these graphics multiply across recent review papers in Advanced Composites and Hybrid Materials 2025, Nano-Micro Letters 2025 ("Lessons from Nature"), Materials and Design 2025, and Acta Physico-Chimica Sinica 2026!
Page after page repeats the exact same formulaic assembly line: step one, draw shiny spheres, hexagons, corn silk, honeycombs, or pinecones; step two, paste a 3D rainbow waterfall of Reflection Loss dips at 1.5 millimeters; step three, draw zig-zag lightning bolts labeled "Multiple scattering," "Multiple reflection," "Dipole polarization," and "Interfacial polarization"!
Even in Advanced Functional Materials 2022 and 2023, microscopic loss mechanisms are illustrated with literal tug-of-war cartoon characters!
Anyone with freshman wave optics should pause and notice what is missing from EVERY SINGLE ONE of these diagrams: Maxwell's boundary phases, the complex two-beam interference equation for films, and the mathematical proof that a film forces its material to absorb according to destructive interference!

[Scene 5: Shallow Theory, Hyperactive Free-Association — Why Glossy Fairy Tales Beat Rigorous Science]
Why are these theatrical schematics welcomed with open arms by top journals, while plain, deep, penetrating, problem-solving papers on Wave Mechanics Theory are rejected, suppressed, or blacklisted?!
Because dazzling, superficial, concocted experimental fairy tales immediately seduce exhausted editors and shallow peer reviewers!
Think about what those graphics actually confess: they reveal researchers whose **theoretical depth is extraordinarily shallow**, paired with **hyperactively rich free-association**! Whenever you cannot solve the differential equations of wave interference in a film, your imagination fills the vacuum with pinball arrows, hollow resonators, and bionic poetry—and journals mistake expensive Blender illustrations for breakthroughs!
Meanwhile, plain, rigorous theoretical work that strips away the fairy tale and reveals the exact mathematical truth threatens tens of thousands of glossy papers—so the gatekeepers lock the door!

[Scene 6: Paper-Mill Copywriters, Cultural Cartoons, and the Editor-in-Chief Inversion]
And do not imagine for one second that this illness is confined to microwave absorption!
Look closely at the writing style alongside those covers: these flagship papers do not sound like they were written by genuine experts grappling with unsolved physical problems. They read like the polished template of professional copywriters—or the assembly-line writing teams inside commercial paper mills!
And here is the even bleaker possibility: if university researchers actually wrote these papers themselves, it means they have forgotten how to conduct real scientific inquiry altogether! The vocation of the mainstream scientist has degenerated into that of a professional copywriter!
And that explains one of the strangest inversions in modern academia—something everyone treats as normal today, even though it turns science completely upside down:
Why do "research experts" routinely invite journal editors—especially Editors-in-Chief—to give keynote lectures instructing scientists on how to choose hot topics and how to write papers, instead of editors coming to genuine researchers to ask what problems matter?!
Because when science degenerates into copywriting and cover-art theater—where mythological tropes like "Chang'e Flying to the Moon" and cartoon characters like the "Calabash Brothers" literally become flagship journal covers—you no longer consult nature or mathematics. You consult the Editor-in-Chief to find out what storyline sells!

[Scene 7: Epilogue — When Scientists Become Copywriters and Garbage Wears Flagship Gold]
So let us return to the opening question and answer it without flinching:
Do these gorgeous flagship-journal images reveal deep physical insights—or do they severely mislead microwave absorption research?
Look past the glowing shaders, the rainbow plots, the Editor-approved buzzwords, and the prestigious journal logos. When scientists abandon first-principles physics to become commercial copywriters, what they produce is cognitively shallow, physically false, and acts as high-misdirection propaganda—turning tens of thousands of Cargo Cult papers into visual spectacles while genuine theoretical breakthroughs are forced into the margins.
True science needs zero sci-fi cartoons and zero copywriting coaches. It needs honest mathematics, open criticism, and the courage to call glossy nonsense by its real name. Thank you for watching.`;

  const exhibits = [
    {
      journal: "Advanced Functional Materials (2025)",
      citation: "Wang, W. et al., \"Multi-scale engineering for enhancing broadband microwave absorption, electromagnetic shielding and infrared stealth of Ag NWs/N-doped rGO aerogels\", DOI: 10.1002/adfm.202521010",
      critique: "Ornate freeze-drying schematics and multi-scale TEM/EDS montages presented as intrinsic broadband absorption mechanisms while omitting wave-interference film physics."
    },
    {
      journal: "Chemical Engineering Journal (2025)",
      citation: "Zhu, S., Wang, L., Zhang, Q. et al., \"Ultra-Broadband Cf/Fe Microwave Attenuation Composite Foam Facilitated by 1D/2D Coupling and Metamaterial Designing\", DOI: 10.1016/j.cej.2025.164056",
      critique: "Cartoon blocks depicting \"1D-2D Coupling\", \"Magnetoelectric Coupling\", \"Vertical Resonating\", and \"Inter-unit Resonating\" mapped onto RL film curves."
    },
    {
      journal: "Int. J. Extrem. Manuf. (2023)",
      citation: "Huang, Y. H. et al. (Lin Li & K. S. Novoselov teams), \"A direct laser-synthesized magnetic metamaterial for low-frequency wideband passive microwave absorption\", Int. J. Extrem. Manuf. 5, 035503, DOI: 10.1088/2631-7990/acdb0c",
      critique: "High-prestige laser-induced graphene sphere illustrations paired with \"precise impedance modulation\" claims rather than film destructive-interference equations."
    },
    {
      journal: "Small Structures / Wiley (2024)",
      citation: "\"Top-Level Electromagnetic Design of Multishell Resonant Cavity for Microspherical Microwave Structural Absorbers\", DOI: 10.1002/sstr.202400666",
      critique: "\"Biomimetic gradient light-absorption of blue-green algae\" alongside CST rainbow spheres labeled \"Optimal Matching Model\", \"Hollow-cavity Resonance Effect\", and \"Optimal Loss Capacity\"."
    },
    {
      journal: "Acta Physico-Chimica Sinica (2026)",
      citation: "Vol. 42, Issue 6, 100276: CoZn-C/MWCNTs composites from bimetallic MOFs, DOI: 10.1016/j.actphy.2026.100276",
      critique: "Sci-fi laser cover artwork and cartoonish glowing electron paths bouncing along nanotube clusters."
    },
    {
      journal: "Adv. Compos. Hybrid Mater. (2025) & Nano-Micro Lett. (2025)",
      citation: "Liu, S. et al., Adv. Compos. Hybrid Mater. 8, 144 (DOI: 10.1007/s42114-024-01145-5); Wang, D. et al., Nano-Micro Lett. 17, 100 (DOI: 10.1007/s40820-024-01591-2)",
      critique: "Industrial montage of recycled 3D synthesis cascades juxtaposed with 3D rainbow RL valleys (-59.6 dB, -64.87 dB) and bionic \"Lessons from Nature\" narratives."
    },
    {
      journal: "Materials & Design (2025) & Adv. Funct. Mater. (2022/2023)",
      citation: "Mater. Des. (PII: S0264127525008408); H. Wu et al., Adv. Funct. Mater. 2022, 2200544 & 2023, 33, 2212604",
      critique: "Zig-zag multiple-scattering arrows inside core-shells, pinecones, stealth jets, corn silk schematics, and literal comic dipole characters substituting for wave mechanics."
    },
    {
      journal: "Nature Sub-Journal Showcase",
      citation: "RuO2/Glass Metasurface: 2–12 GHz broadband microwave absorption at 25–1000 °C",
      critique: "Theatrical glowing thermal-plume video demonstrations masking fundamental gaps between material attenuation and wave-mechanics film behavior."
    }
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="glossy-cartoons-vs-wave-mechanics-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HA &bull; Flagship Visual Forensics
          </span>
          <span className="bg-rose-100 text-rose-900 text-xs font-semibold px-3 py-1 rounded-full border border-rose-200">
            Pretty Pictures vs. Shallow Theory &bull; High-Misdirection Cartoons
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Pretty Pictures, Shallow Theory: How Glossy Flagship Cartoons Mislead Microwave Absorption Science
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          A forensic visual audit of ten flagship-journal exhibits (<em>Adv. Funct. Mater.</em>, <em>Chem. Eng. J.</em>, <em>IJEM</em>, <em>Small Structures</em>, <em>Nano-Micro Lett.</em>, <em>Mater. Des.</em>, <em>Acta Phys.-Chim. Sin.</em>, <em>Adv. Compos. Hybrid Mater.</em>, and a <em>Nature</em> sub-journal)&mdash;exposing why shallow theory + rich free-association wins cover art while Wave Mechanics is blocked&mdash;complete with a 7-Scene Digital Avatar Broadcast Script and 100% YouTube-Safe Description.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Visual Forensics &amp; Publishing Critique
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-glossy")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-glossy" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-glossy" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-glossy")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-glossy" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-glossy" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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
      {/* PART I: VISUAL EXHIBITS & THEORETICAL INDICTMENT                           */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Eye className="w-6 h-6 text-rose-700" />
          <h2>Part I: Documented Flagship Graphics &amp; The Misdirection Diagnosis</h2>
        </div>

        <div className="bg-rose-50/70 border border-rose-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-rose-950 text-base flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-700 shrink-0" />
            Core Diagnosis: Shallow Theoretical Depth + Hyperactive Free-Association
          </h3>
          <p className="text-sm text-slate-800">
            Absorption peaks in metal-backed absorbers are primarily the result of <strong>wave interference</strong>, not intrinsic material cartoons. Explaining film <em>RL</em> dips via decorative hollow spheres, zig-zag scattering arrows, bionic algae, or comic-book dipoles severely misleads the entire field. Yet misleading, superficial, artfully illustrated stories dazzle flagship editors&mdash;just as &ldquo;Chang&apos;e Flying to the Moon&rdquo; (嫦娥奔月) and &ldquo;Calabash Brothers&rdquo; (葫芦娃) appear on flagship covers&mdash;while plain, mathematically penetrating Wave Mechanics Theory papers struggle to see print.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {exhibits.map((ex, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2 font-sans font-bold text-slate-950 text-sm">
                <Image className="w-4 h-4 text-indigo-700 shrink-0" />
                <span>Exhibit {idx + 1}: {ex.journal}</span>
              </div>
              <p className="text-xs font-mono text-slate-600">{ex.citation}</p>
              <p className="text-sm text-slate-700">{ex.critique}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50/80 border border-amber-300 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-amber-950 text-base flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-700 shrink-0" />
            Degeneration Into Copywriters, Paper-Mill Packaging &amp; The Editor-in-Chief Inversion
          </h3>
          <p className="text-sm text-slate-800">
            Read closely, these flagship papers do not read like the work of experts investigating real physical laws&mdash;they read like output from <strong>professional copywriters</strong> or the <strong>assembly-line writing squads of paper mills</strong> (论文工厂). Even if university researchers wrote them personally, that verdict is equally damning: it proves they no longer know how to do genuine scientific research, and that the profession of the mainstream scientist has degenerated into that of a <strong>professional writer/packager</strong>.
          </p>
          <p className="text-sm text-slate-800">
            This single fact explains one of the most absurd inversions in modern academia: <strong>why "research experts" invite journal editors (usually Editors-in-Chief) to lecture scientists on how to choose topics and how to write papers&mdash;rather than editors consulting genuine researchers on scientific frontiers.</strong> Real scientists ask nature and mathematics what is true; copywriter-scientists ask the Editor-in-Chief what storyline sells.
          </p>
        </div>

        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl border border-slate-700 space-y-2">
          <div className="flex items-center gap-2 font-sans font-bold text-amber-300 text-sm">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>The Systemic Cover-Art Syndrome</span>
          </div>
          <p className="text-sm text-slate-200">
            Do these gorgeous flagship-journal images reveal anything profound, or are they high-misdirection garbage masquerading as breakthroughs? Across modern publishing, visual spectacle and copywriter packaging routinely substitute for mathematical rigor.
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
            onClick={() => handleCopyText(spokenScriptText, "script-glossy-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-glossy-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-glossy-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
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
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-glossy-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-glossy-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-glossy-bottom" ? "Copied!" : "Copy Clean Description"}
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
          Visual Forensics &amp; Flagship Cover Critique &bull; Essay HA &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            10 Flagship Exhibits
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Art vs. Wave Interference
          </span>
          <span className="bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md font-semibold">
            Systemic Cover Theater
          </span>
        </div>
      </div>
    </article>
  );
}
