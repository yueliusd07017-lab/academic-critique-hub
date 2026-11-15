import React, { useState } from "react";
import { ShieldAlert, Copy, Check, AlertTriangle, Calculator, Scale, BookOpen, MessageSquareWarning, Video, FileText } from "lucide-react";

export default function ForensicDissectionThreeZinZMConfusionEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("forensic-dissection-zin-zm-three-papers-article-text");
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

  const youtubeSafeDescription = `Title: Three "Innovative" Ways to Confuse Zin and ZM in 2024 SCI Journals (Appl. Phys. A x2 & ChemistrySelect) | Forensic Dissection Series Case 7

Welcome to Episode 7 of our Forensic Dissection Series: "Why Modern Science Is in a Dark Age."

In this seventh forensic investigation, Dr. Yue Liu dissects THREE 2024 peer-reviewed SCI articles published in Springer's Applied Physics A and Wiley's ChemistrySelect—each inventing its own bizarre, sub-undergraduate way to confuse film input impedance (Zin) with infinite-medium characteristic impedance (ZM), and interface reflection (RM) with film reflection loss (RL):

1. PAPER [55] — Saikia, Saikia, Bhattacharyya (Appl. Phys. A 2024, 130(3), 189 | DOI: 10.1007/s00339-024-07339-4):
In Section 4.1 (p. 4), the authors write A = 1 - R - T, A = 1 - R (metal-backed), and Eq. (3) R = (ZL - Z0)/(ZL + Z0), claiming R = |S11|^2—and immediately define ZL = Z0 * sqrt(mu_eff / eps_eff) = ZM!
Wait: for a metal-backed absorber, the load impedance ZL MUST be the film input impedance Zin, NOT the infinite-medium characteristic impedance ZM! Worse still, in Eq. (4) on the very same page, they retrieve Zin/Z0 from S11, oblivious to contradicting Eq. (3)!

2. PAPER [56] — Singh, Dash, Nath (Appl. Phys. A 2024, 130(3), 171 | DOI: 10.1007/s00339-024-07331-y):
Innovating in the opposite direction inside the very same journal issue! In Section 1.1 (p. 3), they write the single-interface boundary relation 1 + phi = T (which holds exclusively for interface reflection RM and interface transmission T), and then in Eqs. (9)-(11) immediately define phi = (Zin - Z0)/(Zin + Z0) and RL = 20 log10|phi|! They literally stuffed the film reflection coefficient RL into the formula reserved for the single-interface reflection coefficient RM.

3. PAPER [57] — Prima Hardianto et al. (ChemistrySelect 2024, 9(7), e202304748 | DOI: 10.1002/slct.202304748):
On page 7—while ironically citing Liu, Zhao, Drew, Liu (AIP Adv. 2018, 8, 015223)—the authors propose Eq. (5): RL = -20 log |(sqrt(mu_r/eps_r) - 1)/(sqrt(mu_r/eps_r) + 1)| = -20 log|RM|, and expand it into Eq. (8) to fit experimental 1 mm film RL curves reaching -32.66 dB at 11.33 GHz!
An interface absorbs ZERO microwaves! Defining film reflection loss RL via a thickness-free interface reflection formula RM completely erases film thickness d, the metal back-plate, and two-beam interference!

4. WHAT THIS PROVES ABOUT SCI PEER REVIEW & "CARGO CULT SCIENCE":
- Over 95% of so-called "SCI innovations" today are nothing more than novel permutations of sub-undergraduate blunders endorsed by peer reviewers and journal editors.
- Refutes institutional excuses archived in Qeios peer-review records:
  * Qeios 10.32388/4PN4RT (denying 90% falsehood applies to peer-reviewed journals while dismissing Nobel laureate Tasuku Honjo's CNS warning as exaggeration).
  * Qeios 10.32388/5FRZHG (claiming every research is "relatively correct or wrong according to the era" and demanding polite tone).
- Because Impedance Matching Theory itself was founded on confusing Zin with ZM and film with material, these 2024 exhibits prove its 50-year reign is NOT an "unintentional mistake"—it is systemic Cargo Cult Science.

TIMESTAMPS:
00:00 - Scene 1: Prologue — Why Today's Case Destroys the "Rigorous SCI Peer Review" Myth
01:45 - Scene 2: Paper [55] Saikia et al. (Appl. Phys. A 2024, 130:189) — Replacing Zin with ZM
03:45 - Scene 3: Paper [56] Singh et al. (Appl. Phys. A 2024, 130:171) — Confusing Interface RM with Film RL
05:35 - Scene 4: Paper [57] Prima Hardianto et al. (ChemistrySelect 2024) — Curve-Fitting 1 mm Films with Interface RM
07:35 - Scene 5: Three Creative Blunders — Why Over 95% of "SCI Innovation" Is Garbage
09:15 - Scene 6: Rebutting Qeios Gatekeepers — Neither "Non-Peer-Reviewed" Nor "Relatively Correct"
11:05 - Scene 7: Epilogue — Why Impedance Matching Is Cargo Cult Science, Not an Innocent Mistake

Primary References Dissected:
- [55] S. Saikia, H. Saikia, N. S. Bhattacharyya, Appl. Phys. A 2024, 130(3), 189 (DOI: 10.1007/s00339-024-07339-4)
- [56] P. P. Singh, A. K. Dash, G. Nath, Appl. Phys. A 2024, 130(3), 171 (DOI: 10.1007/s00339-024-07331-y)
- [57] Y. Prima Hardianto et al., ChemistrySelect 2024, 9(7), e202304748 (DOI: 10.1002/slct.202304748)
- [66] Y. Liu, K. Zhao, M. G. B. Drew, Y. Liu, AIP Adv. 2018, 8, 015223
- Qeios Review Records: DOI: 10.32388/4PN4RT and DOI: 10.32388/5FRZHG
- Academic Critique Hub: https://github.com/academic-critique/hub

#CargoCultScience #PeerReviewCrisis #MicrowaveAbsorption #WaveMechanics #ImpedanceMatchingMyth #ScientificMethod #SCIPublications`;

  const spokenScriptText = `[Scene 1: Prologue — Why Today's Case Destroys the Myth of SCI Peer Review]
Welcome back to Episode Seven of our Forensic Dissection Series: Why Modern Science Is in a Dark Age.
Apologists for the academic establishment love to tell us two comforting stories. First, that peer-reviewed SCI journals maintain rigorous scientific standards, so gross theoretical falsehoods only appear in unvetted preprints. Second, that the fifty-year dominance of Impedance Matching Theory in microwave absorption was merely an innocent, unintentional historical oversight.
Today, we put three 2024 peer-reviewed SCI papers on the autopsy table—two from Springer's Applied Physics A and one from Wiley's ChemistrySelect.
What makes this trio extraordinary is that they did not make the same typo. Each research team independently invented its own bespoke, creative way to confuse the input impedance of a film, Z-in, with the characteristic impedance of an infinite medium, Z-M—or to confuse interface reflection with film reflection. Errors that no competent undergraduate in physics or electrical engineering should ever commit passed straight through peer reviewers and journal editors. Let us examine Exhibit One.

[Scene 2: Paper 55 — Saikia et al., Applied Physics A 2024, 130:189]
Our first exhibit is Paper 55, by Saikia, Saikia, and Bhattacharyya, published in Applied Physics A in 2024, Volume 130, Issue 3, Article 189.
Turn to Section 4.1 on page 4. For a metal-backed meta-structure absorber, where transmission T equals zero, they write energy conservation cleanly: Equation 1, A equals 1 minus R minus T, reducing to Equation 2, A equals 1 minus R.
So far, standard. Then they claim absorption increases by reducing reflectance R, which they equate to the magnitude squared of S-1-1. And they write Equation 3: R equals Z-L minus Z-zero, divided by Z-L plus Z-zero. Wait—notice first that they forgot to take the magnitude squared!
Even worse, look at how they immediately define the load impedance Z-L right underneath Equation 3: they define Z-L as Z-zero times the square root of effective permeability over effective permittivity! That is Z-M—the characteristic wave impedance of a semi-infinite bulk material!
For a metal-backed absorber, Z-L in the reflection formula must be the input impedance of the film, Z-in, which depends on film thickness and the metal backing—never Z-M! And to top off the comedy, on the exact same page in Equation 4, they retrieve normalized impedance Z from S-1-1, which mathematically yields Z-in over Z-zero—completely contradicting Equation 3! Putting Z-M where Z-in belongs is an undergraduate failure, yet Springer published it as SCI research.

[Scene 3: Paper 56 — Singh et al., Applied Physics A 2024, 130:171]
Now flip to our second exhibit—published in the exact same 2024 issue of Applied Physics A, Article 171, by Singh, Dash, and Nath.
Remarkably, Paper 56 innovates in the exact opposite direction! Look at Section 1.1 on page 3. The authors begin by writing the single-interface electromagnetic boundary relation: one plus phi equals T—where phi is supposed to be the single-interface reflection coefficient R-M, and T is the single-interface transmission coefficient.
Read the next three lines! In Equations 9 through 11, they immediately define phi as Z-in minus Z-zero, divided by Z-in plus Z-zero, and define Reflection Loss RL as twenty log base ten of the magnitude of phi!
Wait a minute! For a metal-backed film, whose reflection coefficient is governed by Z-in, there is a perfect metal reflector behind the film—transmittance into the metal backing is identically zero! The identity one plus R-M equals T applies only across a single boundary between two media, governed by Z-M, never to a metal-backed film governed by Z-in! By stuffing film reflection RL into the slot reserved for interface reflection R-M, Singh and colleagues committed a textbook category error between an interface and a film—and passed the exact same journal's peer review.

[Scene 4: Paper 57 — Prima Hardianto et al., ChemistrySelect 2024]
Our third exhibit is Paper 57, by Prima Hardianto and co-authors, published in Wiley's ChemistrySelect in 2024.
And here is the sharpest irony of all: on page 7, right after citing our own 2018 AIP Advances paper establishing wave mechanics and phase cancellation, the authors unveil Equation 5 as the centerpiece of their modified theoretical model!
Look at Equation 5 on your screen: Reflection Loss RL equals minus twenty log of the magnitude of square root of mu-r over epsilon-r minus one, divided by square root of mu-r over epsilon-r plus one!
Wait—that fraction inside the absolute value is literally R-M, the reflection coefficient of a single infinite-medium interface! There is no film thickness d anywhere in Equation 5! There is no metal back-plate!
An interface absorbs zero microwaves! An interface has no volume, no thickness, and no back-reflected beam R-2 to interfere with front reflection r-1! Yet the authors expand this thickness-free interface equation into Equation 8 and use it to curve-fit their experimental 1-millimeter film reflection loss peaks hitting minus 32.66 decibels at 11.33 gigahertz! Using a single-interface formula to model two-beam film interference is yet another stunningly original way to erase Z-in and replace it with Z-M.

[Scene 5: Why Over 95 Percent of SCI Innovation Is Garbage]
Pause and step back to appreciate the pattern across Papers 55, 56, and 57.
They did not copy and paste the same clerical mistake. Each group invented its own unique, mathematically incoherent permutation of error:
Paper 55 plugs Z-M into the Z-in slot of reflectance while retrieving Z-in from S-1-1 on the same page.
Paper 56 takes the single-interface equation one plus R-M equals T and plugs film RL via Z-in into R-M.
Paper 57 deletes Z-in completely and curve-fits 1-millimeter film absorption resonances with the thickness-free interface formula R-M.
When today's credentialed experts possess theoretical competence below the undergraduate level, their only remaining avenue of creativity is inventing brand-new ways to confuse Z-in and Z-M! That is why more than ninety-five percent of modern SCI innovations are garbage innovations—and they are not just written by confused authors, they are certified by peer reviewers and published by SCI editors! What credibility does SCI peer review have left?

[Scene 6: Rebutting Qeios Gatekeepers and Relativistic Sophistry]
Whenever whistleblowers expose this collapse, institutional gatekeepers reach for the exact excuses preserved in Qeios peer-review records.
In Qeios review 10.32388/4PN4RT, a reviewer protested: I do not support the claim that ninety percent of journal articles are false—that may apply to non-peer-reviewed publications, and even Nobel laureate Tasuku Honjo's warning about ninety percent of top journal claims being wrong is just an exaggerated formulation.
Really? Papers 55, 56, and 57 are not unvetted blog posts. They are peer-reviewed SCI articles in Springer and Wiley journals!
And in Qeios review 10.32388/5FRZHG, another gatekeeper lectured that the word re-search means every study is relatively correct or wrong according to the era, and demanded a more polite tone!
No! Confusing film input impedance Z-in with bulk impedance Z-M, or confusing an interface that absorbs zero energy with a one-millimeter film, is not relatively correct in any era! It is objectively false in Maxwell's electrodynamics in 1873, in 2024, and forever! Calling for polite phrasing while ignoring mathematical absurdity is pure institutional evasion.

[Scene 7: Epilogue — Cargo Cult Science, Not an Innocent Mistake]
This brings us to the deepest conclusion of Episode Seven.
Mainstream Impedance Matching Theory was born precisely from confusing Z-in with Z-M and confusing a film with a material. For years, apologists asked us to believe that its fifty-year reign was merely an unintentional mistake that slipped past everyone in normal science.
Papers 55, 56, and 57 shatter that excuse beyond repair. When 2024 SCI journals routinely reward authors who swap Z-in for Z-M, replace interface R-M with film RL, and fit one-millimeter absorbers with zero-thickness interface equations—while peer reviewers applaud and years of published mathematical refutations are ignored—we are no longer witnessing innocent errors. We are witnessing an entrenched system of pseudoscience and Cargo Cult Science.
Thank you for watching Episode Seven. Subscribe and share this forensic archive with anyone who still mistakes an SCI journal stamp for scientific truth.`;

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="forensic-dissection-zin-zm-three-papers-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-rose-100 text-rose-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-rose-300 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
            Essay GU &bull; Forensic Dissection Case 7
          </span>
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
            Appl. Phys. A (2024) &times; 2 &bull; ChemistrySelect (2024) &bull; Z<sub>in</sub> vs. Z<sub>M</sub> Confusion
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Forensic Dissection Case 7: Three &ldquo;Innovative&rdquo; Ways to Confuse Z<sub>in</sub> and Z<sub>M</sub> in 2024 SCI Journals — Undergraduate Blunders, Peer-Review Collapse, and Why Cargo Cult Science Is Not an Innocent Mistake
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Complete forensic essay, 7-Scene Digital Avatar Video Script, and 100% YouTube-Safe Description exposing Saikia et al. (Appl. Phys. A 2024, 130:189), Singh et al. (Appl. Phys. A 2024, 130:171), and Prima Hardianto et al. (ChemistrySelect 2024, e202304748).
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Wave Mechanics Theoretical Archives &bull; Forensic Case 7
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-case7")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-case7" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-case7" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-case7")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-case7" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-case7" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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

      {/* Abstract / Lead */}
      <div className="bg-rose-50/70 border-l-4 border-rose-700 p-5 rounded-r-xl mb-8 font-sans text-sm text-slate-800 space-y-2">
        <div className="font-bold text-rose-950 flex items-center gap-2">
          <Scale className="w-5 h-5 text-rose-700 shrink-0" />
          Sub-Undergraduate Errors Dressed Up as SCI &ldquo;Innovation&rdquo;
        </div>
        <p>
          Mainstream gatekeepers constantly assure the public that peer-reviewed SCI journals enforce rigorous expert screening and that systemic errors are merely rare or &ldquo;unintentional historical oversights.&rdquo; Three 2024 articles published in respected Springer and Wiley SCI journals&mdash;<em>Applied Physics A</em> and <em>ChemistrySelect</em>&mdash;demolish that illusion. Each paper independently invents a bizarre, mutually distinct way of confusing the <strong>input impedance of a film (<em>Z</em><sub>in</sub>)</strong> with the <strong>characteristic impedance of an infinite medium (<em>Z</em><sub>M</sub>)</strong>, or confusing the <strong>interface reflection coefficient (<em>R</em><sub>M</sub>)</strong> with the <strong>film reflection coefficient (<em>RL</em>)</strong>. Errors that no competent undergraduate in physics or electrical engineering should commit are passing reviewers and editors effortlessly&mdash;proving that Impedance Matching&apos;s half-century reign is not an &ldquo;unintentional mistake,&rdquo; but the inevitable fruit of widespread <strong>Cargo Cult Science</strong>.
        </p>
      </div>

      {/* ========================================================================== */}
      {/* PART I: FORENSIC ANALYSIS OF THE THREE 2024 SCI PAPERS                     */}
      {/* ========================================================================== */}
      <section className="mb-10 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Calculator className="w-6 h-6 text-rose-700" />
          <h2>Part I: Three Distinct 2024 SCI Case Studies in Conflating Z<sub>in</sub>, Z<sub>M</sub>, R<sub>M</sub>, and RL</h2>
        </div>

        {/* Case [55] */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-3">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            Case [55]: Saikia et al. (Appl. Phys. A 2024, 130:189) — Replacing Z<sub>in</sub> with Z<sub>M</sub> in Metal-Backed Absorber Reflectance
          </h3>
          <p className="text-xs font-mono text-slate-500">
            Saikia, S.; Saikia, H.; Bhattacharyya, N. S. &ldquo;Revertible wideband hydrogel-based meta-structure absorber,&rdquo; <em>Appl. Phys. A: Mater. Sci. Process.</em> 2024, 130 (3), 189 (DOI: 10.1007/s00339-024-07339-4).
          </p>
          <p className="text-sm text-slate-700">
            In Section 4.1 (p. 4), the authors write the energy conservation equation for a metal-backed meta-structure absorber (<em>T</em> = |<em>S</em><sub>21</sub>|<sup>2</sup> = 0):
          </p>
          <div className="bg-white border border-slate-200 p-3.5 rounded-lg font-mono text-xs text-slate-900 space-y-1">
            <div>Eq. (1): A(&omega;) = 1 &minus; R(&omega;) &minus; T(&omega;) &nbsp;&rarr;&nbsp; Eq. (2): A(&omega;) = 1 &minus; R(&omega;)</div>
            <div>Eq. (3): R(&omega;) = (Z<sub>L</sub>(&omega;) &minus; Z<sub>0</sub>(&omega;)) / (Z<sub>L</sub>(&omega;) + Z<sub>0</sub>(&omega;)) &nbsp; [with R = |S<sub>11</sub>|<sup>2</sup> claimed!]</div>
            <div className="text-rose-800 font-bold">Immediately defined as: Z<sub>L</sub>(&omega;) = Z<sub>0</sub>(&omega;) &radic;(&mu;<sub>eff</sub> / &epsilon;<sub>eff</sub>) &nbsp;&equiv;&nbsp; Z<sub>M</sub>!</div>
          </div>
          <p className="text-sm text-slate-700">
            Here, <em>Z</em><sub>L</sub> ought strictly to be the <strong>film input impedance <em>Z</em><sub>in</sub></strong> (and reflectance is |(<em>Z</em><sub>in</sub> &minus; <em>Z</em><sub>0</sub>)/(<em>Z</em><sub>in</sub> + <em>Z</em><sub>0</sub>)|<sup>2</sup>, not the unsigned ratio itself!). Instead, the authors define <em>Z</em><sub>L</sub> as <em>Z</em><sub>M</sub> = <em>Z</em><sub>0</sub>&radic;(&mu;<sub>eff</sub>/&epsilon;<sub>eff</sub>)&mdash;the characteristic wave impedance of a semi-infinite medium, which knows nothing about film thickness or the metal back-plate! Worse still, in Eq. (4) on the very same page, they retrieve normalized <em>Z</em> from <em>S</em><sub>11</sub> (which is <em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>), completely oblivious to the contradiction between Eqs. (3) and (4). Inserting <em>Z</em><sub>M</sub> where <em>Z</em><sub>in</sub> belongs is an elementary blunder no physics undergraduate should survive, yet Springer&apos;s peer review canonized it as an &ldquo;innovation.&rdquo;
          </p>
        </div>

        {/* Case [56] */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-3">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            Case [56]: Singh et al. (Appl. Phys. A 2024, 130:171) — Redefining Interface Reflection Coefficient R<sub>M</sub> as Film Reflection Loss RL
          </h3>
          <p className="text-xs font-mono text-slate-500">
            Singh, P. P.; Dash, A. K.; Nath, G. &ldquo;Dielectric characterization analysis of natural fiber based hybrid composite for microwave absorption in X-band frequency,&rdquo; <em>Appl. Phys. A: Mater. Sci. Process.</em> 2024, 130 (3), 171 (DOI: 10.1007/s00339-024-07331-y).
          </p>
          <p className="text-sm text-slate-700">
            Paper [56] innovates in the <em>opposite</em> direction from Paper [55]! In Section 1.1 (p. 3), right after writing the boundary relation for a <strong>single interface</strong>:
          </p>
          <div className="bg-white border border-slate-200 p-3.5 rounded-lg font-mono text-xs text-slate-900 space-y-1">
            <div>1 + &phi; = T &nbsp;&nbsp;(where &phi; is the interface reflection coefficient R<sub>M</sub>, and T is the interface transmission coefficient)</div>
            <div className="text-rose-800 font-bold">Eqs. (9)&ndash;(11) immediately define: &phi; = (Z<sub>in</sub> &minus; Z<sub>0</sub>)/(Z<sub>in</sub> + Z<sub>0</sub>), &nbsp; RL = 20 log<sub>10</sub>|&phi;|</div>
          </div>
          <p className="text-sm text-slate-700">
            The identity 1 + <em>R</em><sub>M</sub> = <em>T</em> holds exclusively across a single boundary interface between two media (where <em>R</em><sub>M</sub> = (<em>Z</em><sub>M</sub> &minus; <em>Z</em><sub>0</sub>)/(<em>Z</em><sub>M</sub> + <em>Z</em><sub>0</sub>)). For a metal-backed film with total reflection coefficient &phi; = <em>RL</em> = (<em>Z</em><sub>in</sub> &minus; <em>Z</em><sub>0</sub>)/(<em>Z</em><sub>in</sub> + <em>Z</em><sub>0</sub>), transmittance into the perfect conductor is identically zero! By substituting the <strong>film reflection coefficient <em>RL</em></strong> into the spot reserved for the <strong>interface reflection coefficient <em>R</em><sub>M</sub></strong>, Singh et al. committed a textbook category confusion between interface and film&mdash;and published it in the very same 2024 issue of <em>Applied Physics A</em>!
          </p>
        </div>

        {/* Case [57] */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-3">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            Case [57]: Prima Hardianto et al. (ChemistrySelect 2024) — Defining Film RL Directly Using Interface Reflection R<sub>M</sub>
          </h3>
          <p className="text-xs font-mono text-slate-500">
            Prima Hardianto, Y.; Nur Iman, R.; Hidayat, A.; Mufti, N.; Hidayat, N.; Sunaryono, S.; Amrillah, T.; Ari Adi, W.; Taufiq, A. &ldquo;A Facile Route Preparation of Fe<sub>3</sub>O<sub>4</sub>/MWCNT/ZnO/PANI Nanocomposite...,&rdquo; <em>ChemistrySelect</em> 2024, 9 (7), e202304748 (DOI: 10.1002/slct.202304748).
          </p>
          <p className="text-sm text-slate-700">
            On page 7, while ironically citing <em>Liu, Zhao, Drew, and Liu (AIP Adv. 2018, 8, 015223)</em> [66], the authors unveil Equation (5) as the centerpiece of their &ldquo;modified theoretical model&rdquo;:
          </p>
          <div className="bg-white border border-slate-200 p-3.5 rounded-lg font-mono text-xs text-rose-900 font-bold text-center">
            Eq. (5): &nbsp; RL = &minus;20 log | (&radic;(&mu;<sub>r</sub>/&epsilon;<sub>r</sub>) &minus; 1) / (&radic;(&mu;<sub>r</sub>/&epsilon;<sub>r</sub>) + 1) | &nbsp;&equiv;&nbsp; &minus;20 log |R<sub>M</sub>|!
          </div>
          <p className="text-sm text-slate-700">
            They then expand Eq. (5) into Eq. (8) to fit their 1 mm experimental <em>RL</em> curves (which hit &minus;32.66 dB at 11.33 GHz)! <strong>An interface absorbs zero microwaves.</strong> You cannot define the reflection loss <em>RL</em> of an absorbing film using the single-interface reflection coefficient <em>R</em><sub>M</sub> = (<em>Z</em><sub>M</sub> &minus; <em>Z</em><sub>0</sub>)/(<em>Z</em><sub>M</sub> + <em>Z</em><sub>0</sub>), which contains no thickness <em>d</em> and no metal-backing reflection whatsoever! Fitting two-beam film interference peaks with a thickness-free interface reflection formula is another staggering &ldquo;innovation&rdquo; in <em>Z</em><sub>in</sub>/<em>Z</em><sub>M</sub> conflation.
          </p>
        </div>
      </section>

      {/* Section 2: What This Proves About SCI Review */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <BookOpen className="w-6 h-6 text-indigo-700" />
          <h2>2. The Essence of &ldquo;SCI Innovation&rdquo;: Why Over 95% of SCI Novelty Is Garbage</h2>
        </div>
        <p>
          Notice what makes Papers [55], [56], and [57] so devastating as forensic evidence: <strong>they did not copy the same mechanical typo.</strong> Each research team invented its own bespoke, creative permutation of error&mdash;errors so mathematically incoherent that an ordinary undergraduate could scarcely dream them up:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-sm md:text-base text-slate-800 ml-2">
          <li>Paper [55] places <em>Z</em><sub>M</sub> into the metal-backed <em>Z</em><sub>in</sub> slot of Eq. (3) while computing <em>Z</em><sub>in</sub> from <em>S</em><sub>11</sub> in Eq. (4).</li>
          <li>Paper [56] writes the single-interface rule 1 + <em>R</em><sub>M</sub> = <em>T</em> and substitutes the film reflection <em>RL</em> (via <em>Z</em><sub>in</sub>) into <em>R</em><sub>M</sub>.</li>
          <li>Paper [57] erases <em>Z</em><sub>in</sub> altogether and curve-fits 1 mm film <em>RL</em> resonances using the single-interface formula <em>R</em><sub>M</sub>.</li>
        </ul>
        <p>
          When today&apos;s credentialed &ldquo;experts&rdquo; possess theoretical competence below the undergraduate level, their only remaining form of creativity is inventing novel ways to confuse <em>Z</em><sub>in</sub> and <em>Z</em><sub>M</sub>. And this indictment extends far beyond the authors: <strong>peer reviewers endorsed these papers, and journal editors published them in prestigious Springer and Wiley SCI titles.</strong>
        </p>
        <p>
          How, in the face of such exhibits, can anyone still claim that SCI peer review is rigorous, that SCI publications represent vetted scientific breakthroughs, or that SCI dogma must remain immune to correction? What real distinction remains between SCI journals and unvetted outlets?
        </p>
      </section>

      {/* Section 3: Rebutting Qeios Relativism */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <MessageSquareWarning className="w-6 h-6 text-amber-700" />
          <h2>3. Exposing the Peer-Review Shield: &ldquo;90% Falsehood&rdquo; Denial &amp; Relativistic Sophistry</h2>
        </div>
        <p>
          Whenever whistleblowers present evidence of this systemic breakdown, institutional gatekeepers deploy the exact excuses archived in Qeios review records:
        </p>
        <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-xl font-sans text-xs md:text-sm space-y-3 text-slate-800">
          <p>
            <strong>Qeios Review 1 (DOI: 10.32388/4PN4RT):</strong> <em>&ldquo;I do not support the claim that 90% of journal articles are false. This may be true to some extent for the non-peer-reviewed publications... According to Nobel laureate Honjo Tasuku, 90% of the views published by top magazines like CNS are wrong. As I said before, I see this sentence as an exaggerated formulation...&rdquo;</em>
          </p>
          <p>
            <strong>Qeios Review 2 (DOI: 10.32388/5FRZHG):</strong> <em>&ldquo;Moreover, the word &lsquo;research&rsquo; itself signifies that facts are re-searching. Therefore, every research is relatively correct or wrong according to the era. The writing flow of the manuscript should be more polite and professional.&rdquo;</em>
          </p>
        </div>
        <p>
          Papers [55], [56], and [57] were all <strong>peer-reviewed SCI articles</strong>&mdash;not unvetted preprints. And confusing <em>Z</em><sub>in</sub> with <em>Z</em><sub>M</sub> or an interface with an absorbing film is <strong>not</strong> &ldquo;relatively correct according to the era&rdquo;; it is objectively false in Maxwell&apos;s electrodynamics in every era! Calling for politeness while refusing to acknowledge mathematical error is pure institutional evasion.
        </p>
      </section>

      {/* Section 4: Not an Innocent Mistake — Cargo Cult Science */}
      <section className="mb-14 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <ShieldAlert className="w-6 h-6 text-rose-700" />
          <h2>4. Conclusion: Impedance Matching&apos;s Half-Century Reign Is Not an &ldquo;Unintentional Mistake&rdquo;</h2>
        </div>
        <p>
          At its root, mainstream microwave absorption <strong>Impedance Matching Theory</strong> was born precisely from conflating <em>Z</em><sub>in</sub> with <em>Z</em><sub>M</sub> and confusing a <strong>film</strong> with a <strong>material</strong>. Apologists like to excuse the fifty-year dominance of Impedance Matching Theory as merely an &ldquo;unintentional historical oversight&rdquo;&mdash;arguing that no one happened to notice a subtle mistake in normal science.
        </p>
        <p className="font-semibold text-slate-950">
          Cases [55], [56], and [57] shatter that excuse completely. When flagship SCI journals in 2024 routinely publish authors who replace <em>Z</em><sub>in</sub> with <em>Z</em><sub>M</sub>, overwrite interface reflection <em>R</em><sub>M</sub> with film <em>RL</em>, and curve-fit 1 mm absorbers with interface equations while peer reviewers and editors applaud&mdash;all while ignoring years of published mathematical refutations&mdash;you can no longer hide behind &ldquo;unintentional errors.&rdquo; That is the unmistakable signature of an entire academic establishment practicing <strong>pseudoscience</strong> and <strong>Cargo Cult Science</strong>.
        </p>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 7-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-rose-700" />
            <h2>Part II: Complete 7-Scene Digital Avatar Broadcast Script (~12.5 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-case7-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-case7-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-case7-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
          </button>
        </div>

        {/* Scene 1 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-700 text-white rounded-full flex items-center justify-center text-xs">1</span>
              Scene 1: Prologue — Destroying the Myth of &ldquo;Rigorous SCI Peer Review&rdquo;
            </span>
            <span className="text-xs font-mono text-slate-400">00:00 &ndash; 01:45</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200">
              <strong className="text-slate-900 block mb-1">Visual / B-Roll:</strong>
              Title cards of <em>Applied Physics A</em> (2024, 130:189 &amp; 130:171) and <em>ChemistrySelect</em> (2024, e202304748). Split screen showing Z<sub>in</sub> vs. Z<sub>M</sub>.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200">
              <strong className="text-slate-900 block mb-1">On-Screen Caption:</strong>
              &ldquo;Case 7: Three 2024 SCI Papers Invent Three New Ways to Fail Basic Electrodynamics.&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-rose-700 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-rose-950">Spoken Narration:</p>
            <p>
              &ldquo;Welcome back to Episode Seven of our Forensic Dissection Series: <em>Why Modern Science Is in a Dark Age</em>.
            </p>
            <p>
              Apologists for the academic establishment love to tell us two comforting stories. First, that peer-reviewed SCI journals maintain rigorous scientific standards, so gross theoretical falsehoods only appear in unvetted preprints. Second, that the fifty-year dominance of Impedance Matching Theory in microwave absorption was merely an innocent, unintentional historical oversight.
            </p>
            <p>
              Today, we put three 2024 peer-reviewed SCI papers on the autopsy table&mdash;two from Springer&apos;s <em>Applied Physics A</em> and one from Wiley&apos;s <em>ChemistrySelect</em>. What makes this trio extraordinary is that they did not make the same typo. Each research team independently invented its own bespoke, creative way to confuse the input impedance of a film, <em>Z</em><sub>in</sub>, with the characteristic impedance of an infinite medium, <em>Z</em><sub>M</sub>&mdash;or to confuse interface reflection with film reflection. Errors that no competent undergraduate in physics or electrical engineering should ever commit passed straight through peer reviewers and journal editors. Let us examine Exhibit One.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 2 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-700 text-white rounded-full flex items-center justify-center text-xs">2</span>
              Scene 2: Paper [55] — Replacing Z<sub>in</sub> with Z<sub>M</sub> (Appl. Phys. A 2024, 130:189)
            </span>
            <span className="text-xs font-mono text-slate-400">01:45 &ndash; 03:45</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200">
              <strong className="text-slate-900 block mb-1">Visual / B-Roll:</strong>
              Highlight Section 4.1 p. 4 of Saikia et al. (DOI: 10.1007/s00339-024-07339-4): Eqs. (1)&ndash;(3), red circle around Z<sub>L</sub> = Z<sub>0</sub>&radic;(&mu;<sub>eff</sub>/&epsilon;<sub>eff</sub>), contrasted with Eq. (4) S<sub>11</sub> retrieval.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200">
              <strong className="text-slate-900 block mb-1">On-Screen Caption:</strong>
              &ldquo;Paper [55]: Inserts Infinite-Medium Z<sub>M</sub> into Eq. (3), Then Retrieves Z<sub>in</sub> in Eq. (4)!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-amber-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-amber-950">Spoken Narration:</p>
            <p>
              &ldquo;Our first exhibit is Paper 55, by Saikia, Saikia, and Bhattacharyya, published in <em>Applied Physics A</em> in 2024, Volume 130, Issue 3, Article 189.
            </p>
            <p>
              Turn to Section 4.1 on page 4. For a metal-backed meta-structure absorber, where transmission <em>T</em> equals zero, they write energy conservation cleanly: Equation 1, <em>A</em> equals 1 minus <em>R</em> minus <em>T</em>, reducing to Equation 2, <em>A</em> equals 1 minus <em>R</em>. Then they claim absorption increases by reducing reflectance <em>R</em>, which they equate to |<em>S</em><sub>11</sub>|<sup>2</sup>. And they write Equation 3: <em>R</em> equals (<em>Z</em><sub>L</sub> minus <em>Z</em><sub>0</sub>) divided by (<em>Z</em><sub>L</sub> plus <em>Z</em><sub>0</sub>)&mdash;forgetting the magnitude squared right away!
            </p>
            <p>
              Even worse, look at how they define the load impedance <em>Z</em><sub>L</sub> right underneath Equation 3: they define <em>Z</em><sub>L</sub> as <em>Z</em><sub>0</sub> times the square root of effective permeability over effective permittivity! That is <em>Z</em><sub>M</sub>&mdash;the characteristic wave impedance of a semi-infinite bulk material! For a metal-backed absorber, <em>Z</em><sub>L</sub> in the reflection formula must be the input impedance of the film, <em>Z</em><sub>in</sub>, which depends on film thickness and the metal backing&mdash;never <em>Z</em><sub>M</sub>! And to top off the comedy, on the exact same page in Equation 4, they retrieve normalized impedance <em>Z</em> from <em>S</em><sub>11</sub>, which yields <em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>&mdash;completely contradicting Equation 3! Putting <em>Z</em><sub>M</sub> where <em>Z</em><sub>in</sub> belongs is an undergraduate failure, yet Springer published it as SCI research.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 3 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-700 text-white rounded-full flex items-center justify-center text-xs">3</span>
              Scene 3: Paper [56] — Confusing Interface R<sub>M</sub> with Film RL (Appl. Phys. A 2024, 130:171)
            </span>
            <span className="text-xs font-mono text-slate-400">03:45 &ndash; 05:35</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200">
              <strong className="text-slate-900 block mb-1">Visual / B-Roll:</strong>
              Highlight Section 1.1 p. 3 of Singh et al. (DOI: 10.1007/s00339-024-07331-y): &ldquo;1 + &phi; = T&rdquo; stacked directly above Eqs. (9)&ndash;(11) defining &phi; = (Z<sub>in</sub> &minus; Z<sub>0</sub>)/(Z<sub>in</sub> + Z<sub>0</sub>).
            </div>
            <div className="p-3 bg-white rounded border border-slate-200">
              <strong className="text-slate-900 block mb-1">On-Screen Caption:</strong>
              &ldquo;Paper [56]: Stuffs Metal-Backed Film RL into Single-Interface Identity 1 + R<sub>M</sub> = T!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-indigo-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-indigo-950">Spoken Narration:</p>
            <p>
              &ldquo;Now flip to our second exhibit&mdash;published in the exact same 2024 issue of <em>Applied Physics A</em>, Article 171, by Singh, Dash, and Nath.
            </p>
            <p>
              Remarkably, Paper 56 innovates in the exact opposite direction! Look at Section 1.1 on page 3. The authors begin by writing the single-interface electromagnetic boundary relation: 1 + &phi; = <em>T</em>&mdash;where &phi; is supposed to be the single-interface reflection coefficient <em>R</em><sub>M</sub>, and <em>T</em> is the single-interface transmission coefficient.
            </p>
            <p>
              Read the next three lines! In Equations 9 through 11, they immediately define &phi; as (<em>Z</em><sub>in</sub> &minus; <em>Z</em><sub>0</sub>)/(<em>Z</em><sub>in</sub> + <em>Z</em><sub>0</sub>), and define Reflection Loss <em>RL</em> as 20 log<sub>10</sub>|&phi;|&mdash;wait a minute! For a metal-backed film governed by <em>Z</em><sub>in</sub>, there is a perfect metal reflector behind the film&mdash;transmittance into the metal backing is identically zero! The identity 1 + <em>R</em><sub>M</sub> = <em>T</em> applies only across a single boundary between two media governed by <em>Z</em><sub>M</sub>, never to a metal-backed film governed by <em>Z</em><sub>in</sub>! By stuffing film reflection <em>RL</em> into the slot reserved for interface reflection <em>R</em><sub>M</sub>, Singh and colleagues committed a textbook category error between an interface and a film&mdash;and passed the exact same journal&apos;s peer review.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 4 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-700 text-white rounded-full flex items-center justify-center text-xs">4</span>
              Scene 4: Paper [57] — Curve-Fitting 1 mm Films with Interface R<sub>M</sub> (ChemistrySelect 2024)
            </span>
            <span className="text-xs font-mono text-slate-400">05:35 &ndash; 07:35</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200">
              <strong className="text-slate-900 block mb-1">Visual / B-Roll:</strong>
              Show ChemistrySelect 2024 p. 7 citing Liu et al. (AIP Adv. 2018) [66], then zoom on Eq. (5) RL = &minus;20 log|R<sub>M</sub>| and the 1 mm curve fit reaching &minus;32.66 dB at 11.33 GHz.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200">
              <strong className="text-slate-900 block mb-1">On-Screen Caption:</strong>
              &ldquo;Paper [57]: An Interface Absorbs ZERO Microwaves&mdash;Yet They Fit 1 mm RL Peaks Using R<sub>M</sub>!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-rose-700 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-rose-950">Spoken Narration:</p>
            <p>
              &ldquo;Our third exhibit is Paper 57, by Prima Hardianto and co-authors, published in Wiley&apos;s <em>ChemistrySelect</em> in 2024.
            </p>
            <p>
              And here is the sharpest irony of all: on page 7, right after citing our own 2018 <em>AIP Advances</em> paper establishing wave mechanics and phase cancellation, the authors unveil Equation 5 as the centerpiece of their &lsquo;modified theoretical model&rsquo;: Reflection Loss <em>RL</em> equals &minus;20 log |(&radic;(&mu;<sub>r</sub>/&epsilon;<sub>r</sub>) &minus; 1)/(&radic;(&mu;<sub>r</sub>/&epsilon;<sub>r</sub>) + 1)|!
            </p>
            <p>
              Wait&mdash;that fraction inside the absolute value is literally <em>R</em><sub>M</sub>, the reflection coefficient of a single infinite-medium interface! There is no film thickness <em>d</em> anywhere in Equation 5! There is no metal back-plate! An interface absorbs zero microwaves! An interface has no volume, no thickness, and no back-reflected beam <em>R</em><sub>2</sub> to interfere with front reflection <em>r</em><sub>1</sub>! Yet the authors expand this thickness-free interface equation into Equation 8 and use it to curve-fit their experimental 1-millimeter film reflection loss peaks hitting &minus;32.66 dB at 11.33 GHz! Using a single-interface formula to model two-beam film interference is yet another stunningly original way to erase <em>Z</em><sub>in</sub> and replace it with <em>Z</em><sub>M</sub>.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 5 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-700 text-white rounded-full flex items-center justify-center text-xs">5</span>
              Scene 5: Why Over 95% of &ldquo;SCI Innovation&rdquo; Is Garbage
            </span>
            <span className="text-xs font-mono text-slate-400">07:35 &ndash; 09:15</span>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-800 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken Narration:</p>
            <p>
              &ldquo;Pause and step back to appreciate the pattern across Papers 55, 56, and 57. They did not copy and paste the same clerical mistake. Each group invented its own unique, mathematically incoherent permutation of error: Paper 55 plugs <em>Z</em><sub>M</sub> into the <em>Z</em><sub>in</sub> slot of reflectance while retrieving <em>Z</em><sub>in</sub> from <em>S</em><sub>11</sub> on the same page; Paper 56 takes the single-interface equation 1 + <em>R</em><sub>M</sub> = <em>T</em> and plugs film <em>RL</em> via <em>Z</em><sub>in</sub> into <em>R</em><sub>M</sub>; Paper 57 deletes <em>Z</em><sub>in</sub> completely and curve-fits 1-millimeter film absorption resonances with the thickness-free interface formula <em>R</em><sub>M</sub>. When today&apos;s credentialed experts possess theoretical competence below the undergraduate level, their only remaining avenue of creativity is inventing brand-new ways to confuse <em>Z</em><sub>in</sub> and <em>Z</em><sub>M</sub>! That is why more than ninety-five percent of modern SCI innovations are garbage innovations&mdash;certified by peer reviewers and published by SCI editors! What credibility does SCI peer review have left?&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 6 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-700 text-white rounded-full flex items-center justify-center text-xs">6</span>
              Scene 6: Rebutting Qeios Relativism &amp; &ldquo;90% Falsehood&rdquo; Denial
            </span>
            <span className="text-xs font-mono text-slate-400">09:15 &ndash; 11:05</span>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-amber-700 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-amber-950">Spoken Narration:</p>
            <p>
              &ldquo;Whenever whistleblowers expose this collapse, institutional gatekeepers reach for the exact excuses preserved in Qeios peer-review records. In Qeios review 10.32388/4PN4RT, a reviewer protested: &lsquo;I do not support the claim that ninety percent of journal articles are false&mdash;that may apply to non-peer-reviewed publications,&rsquo; and dismissed Nobel laureate Tasuku Honjo&apos;s warning about ninety percent of top journal views being wrong as an &lsquo;exaggerated formulation.&rsquo; Really? Papers 55, 56, and 57 are not unvetted blog posts; they are peer-reviewed SCI articles in Springer and Wiley journals! And in Qeios review 10.32388/5FRZHG, another gatekeeper lectured that the word re-search means every study is &lsquo;relatively correct or wrong according to the era,&rsquo; and demanded a more polite tone! No! Confusing film input impedance <em>Z</em><sub>in</sub> with bulk impedance <em>Z</em><sub>M</sub>, or confusing an interface that absorbs zero energy with a 1-millimeter film, is not relatively correct in any era! It is objectively false in Maxwell&apos;s electrodynamics in 1873, in 2024, and forever! Calling for polite phrasing while ignoring mathematical absurdity is pure institutional evasion.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 7 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-700 text-white rounded-full flex items-center justify-center text-xs">7</span>
              Scene 7: Epilogue — Cargo Cult Science, Not an Innocent Mistake
            </span>
            <span className="text-xs font-mono text-slate-400">11:05 &ndash; 12:30</span>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-950 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken Narration:</p>
            <p>
              &ldquo;This brings us to the deepest conclusion of Episode Seven. Mainstream Impedance Matching Theory was born precisely from confusing <em>Z</em><sub>in</sub> with <em>Z</em><sub>M</sub> and confusing a film with a material. For years, apologists asked us to believe that its fifty-year reign was merely an unintentional mistake that slipped past everyone in normal science. Papers 55, 56, and 57 shatter that excuse beyond repair. When 2024 SCI journals routinely reward authors who swap <em>Z</em><sub>in</sub> for <em>Z</em><sub>M</sub>, replace interface <em>R</em><sub>M</sub> with film <em>RL</em>, and fit 1-millimeter absorbers with zero-thickness interface equations&mdash;while peer reviewers applaud and years of published mathematical refutations are ignored&mdash;we are no longer witnessing innocent errors. We are witnessing an entrenched system of pseudoscience and Cargo Cult Science. Thank you for watching Episode Seven. Subscribe and share this forensic archive with anyone who still mistakes an SCI journal stamp for scientific truth.&rdquo;
            </p>
          </div>
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
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-case7-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-case7-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-case7-bottom" ? "Copied!" : "Copy Clean Description"}
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
          Forensic Dissection Series &bull; Episode 7 &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Appl. Phys. A 2024
          </span>
          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
            ChemistrySelect 2024
          </span>
          <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md font-semibold">
            Zin vs. ZM Conflation
          </span>
        </div>
      </div>
    </article>
  );
}
