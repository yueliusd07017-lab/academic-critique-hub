import React, { useState } from "react";
import { ShieldAlert, Copy, Check, AlertTriangle, Calculator, Scale, BookOpen, Video, FileText, Layers } from "lucide-react";

export default function ForensicDissectionNespolo2017CrystRevScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("forensic-dissection-nespolo2017-crystrev-article-text");
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

  const youtubeSafeDescription = `Title: Deconstructing Nespolo (Crystallogr. Rev. 2017): When an IUCr Editor Skips Reading, Redefines Miller Indices Wrongly & Confuses Symmetry with Lattice Environment | Forensic Dissection Series Case 8

Welcome to Episode 8 of our Forensic Dissection Series: "Why Modern Science Is in a Dark Age."

Applying our forensic method reveals that 99.99% of microwave absorption papers—and over 95% of SCI publications across academia—are theoretical garbage, leaving deep, rigorous theory like Wave Mechanics suppressed in a global era of Cargo Cult Science (SSRN 5720702).
To prove that this rot is NOT confined to microwave absorption, Case 8 dissects an elite crystallography exhibit outside our primary field:

Target Paper Dissected:
Massimo Nespolo, "Comments on the article 'Comparison of calculations for interplanar distances in a crystal lattice', by Ying Liu, Yue Liu & Michael G. B. Drew", Crystallography Reviews 2017, 23(4), 302-303 (DOI: 10.1080/0889311X.2017.1339034).
- Received: 30 May 2017 | Accepted: 02 June 2017 (3-day turnaround!) | Published online: 18 June 2017.
- Author Credentials: Professor at Universite de Lorraine, founder & former chair of the IUCr Commission on Mathematical and Theoretical Crystallography, and Editor of Journal of Applied Crystallography.

Four Core Forensic Blunders Exposed in Nespolo (2017) & Rebutted in Liu, Liu, Drew (SN Appl. Sci. 2020, 2:755):

1. ATTACKING WITHOUT READING & TRIVIALIZING FOUNDATIONAL DERIVATIONS:
Nespolo claimed Liu et al. (Cryst. Rev. 2017, 23:252-301) "missed" the reciprocal metric tensor formula and dismissed elementary geometric derivations as "unnecessary complication."
- Reality: You CANNOT build reciprocal-lattice concepts without elementary direct-space geometry! As proven in Liu et al. (Am. J. Phys. 2020, 88, 51-59), hiding foundational mathematical derivations behind memorized definitions is intellectual laziness—teaching surface shortcuts while destroying true understanding.
- Mainstream Bias: Commenting without reading the paper mirrors how mainstream gatekeepers (and AI chatbots trained on mainstream dogma) judge papers by camp or journal impact factor instead of reading the equations.

2. BACKWARD REDEFINITION OF MILLER INDICES & DESTRUCTION OF THE LAW OF RATIONAL INDICES:
Nespolo declared that Miller indices take co-prime integers ONLY in primitive cells, claiming (111) in a BCC (cI) cell must be called (222)—a flawed definition later adopted by the IUCr Online Dictionary of Crystallography!
- Classical Law of Rational Indices: Miller indices (hkl) denote plane orientation (ratios h:k:l) and MUST be co-prime integers in every unit cell. In hx + ky + lz = N for BCC (111), planes through (1/2, 1/2, 1/2), (1, 0, 0), and (1/2, -1/2, 1/2) give N = 1.5, 1, and 0.5—all rational numbers, completely self-consistent!
- Nespolo's distortion forces N to be an integer, forcing you to write the plane equation BEFORE finding Miller indices and breaking fundamental lattice equivalence.

3. CONFUSING WYCKOFF SITE SYMMETRY WITH LATTICE TRANSLATIONAL EQUIVALENCE:
Nespolo mocked Liu et al.'s statement on diamond ("The environment around carbon A is different from that around carbon B"), claiming two symmetrically equivalent atoms in one asymmetric unit cannot have different environments.
- Reality: In crystallography, lattice environment is defined strictly by TRANSLATIONAL symmetry, NOT inversion, screw axes, or glide planes! Translating atom A to atom B by (1/4, 1/4, 1/4) does NOT map diamond onto itself (as proven immediately when A and B are occupied by S2- and Zn2+ in sphalerite!).

4. PEDANTIC DOGMATISM OVER "DIAMOND LATTICE" VS. "LATTICE COMPLEX D":
Banning the universally useful term "diamond lattice" while approving "lattice complex D", "CsCl lattice", "lattice energy", and "lattice dynamics" is pure terminological contradiction.

TIMESTAMPS:
00:00 - Scene 1: Prologue — Why 95%+ of SCI Papers Are Garbage Beyond Microwave Absorption
02:00 - Scene 2: The Elite Pedigree & 3-Day Acceptance of Nespolo (Crystallogr. Rev. 2017)
03:50 - Scene 3: Judging Without Reading & Why Metric Tensors Cannot Replace Geometric Roots
06:00 - Scene 4: Miller Indices & The Law of Rational Indices — Why BCC (111) Is NOT (222)!
08:30 - Scene 5: Diamond Carbons A vs. B — Symmetry Equivalence vs. Translational Environment
10:35 - Scene 6: "Diamond Lattice" Pedantry & How Mainstream Crystallography Canonized Error
12:15 - Scene 7: Epilogue — Cargo Cult Science in a Modern Dark Age

Primary References:
- Nespolo, M., Crystallogr. Rev. 2017, 23(4), 302-303 (DOI: 10.1080/0889311X.2017.1339034)
- Liu, Y., Liu, Y., Drew, M. G. B., Crystallogr. Rev. 2017, 23(4), 252-301 (DOI: 10.1080/0889311X.2017.1323332)
- Liu, Y., Liu, Y., Drew, M. G. B., SN Appl. Sci. 2020, 2(4), 755 (DOI: 10.1007/s42452-020-2498-5)
- Liu, Y., Liu, Y., Drew, M. G. B., Am. J. Phys. 2020, 88(1), 51-59
- IUCr Online Dictionary of Crystallography (Miller indices, citing Nespolo 2015 J. Appl. Cryst. 48, 1290-1298)
- Liu, Y., Major Scientific Breakthroughs Are Not Born From Journals, SSRN 5720702 (2025)
- Academic Critique Hub: https://github.com/academic-critique/hub

#Crystallography #MillerIndices #CargoCultScience #PeerReviewCrisis #ScientificMethod #DiamondLattice #CrystallographyReviews`;

  const spokenScriptText = `[Scene 1: Prologue — Beyond Microwave Absorption: Proving 95 Percent of SCI Papers Are Broken]
Welcome back to Episode Eight of our Forensic Dissection Series: Why Modern Science Is in a Dark Age.
We cannot dissect every single journal article one by one. Yet once you apply our forensic lens systematically across the literature, you quickly see why 99.99 percent of microwave absorption papers—and more than ninety-five percent of SCI articles across all disciplines—are theoretical garbage.
And because superficial garbage sails effortlessly through peer review, truly deep foundational work like Wave Mechanics Theory is rejected and buried. Modern academia is practicing Cargo Cult Science.
Until today, our forensic series focused on microwave absorption. Critics might ask: surely real theoretical physics and classic disciplines like mathematical crystallography still enforce elite standards?
To shatter that illusion, today's Episode Eight steps outside microwave absorption into an iconic exhibit in crystallography—written by none other than a top international editor and founder of the IUCr Commission on Mathematical and Theoretical Crystallography!

[Scene 2: The Elite Pedigree and Three-Day Peer Review of Nespolo 2017]
In 2017, Ying Liu, Michael Drew, and I published a comprehensive 50-page theoretical review in Crystallography Reviews, titled Comparison of calculations for interplanar distances in a crystal lattice.
Immediately following our paper in the exact same volume and issue—pages 302 to 303—Professor Massimo Nespolo published a two-page critique titled Comments on the article Comparison of calculations for interplanar distances in a crystal lattice.
Look closely at Nespolo's credentials: MSc in Chemistry from Torino, Doctor of Science from the University of Tokyo, Professor at the University of Lorraine in France, Editor of the Journal of Applied Crystallography, and founder and former chair of the IUCr Commission on Mathematical and Theoretical Crystallography!
And look at the publication stamp at the top of page 2: Received May 30, 2017. Accepted June 2, 2017! Three days from submission to acceptance! Yet despite that elite pedigree and lightning-fast rubber stamp, Nespolo's two-page comment contains four textbook blunders that expose exactly how modern mainstream scientists read, reason, and gatekeep!

[Scene 3: Judging Without Reading and Hiding Behind Metric Tensor Shortcuts]
Let us examine Blunder Number One.
Nespolo opens his comment with a sweeping accusation: In a recent article, Liu et al. discuss at length various methods to compute interplanar distances, with unnecessarily cumbersome formulae. Quite surprisingly, in their discussion the simplest and most general method is missing—referring to the reciprocal-space metric tensor formula. He then claims our elementary geometric derivations were not published previously simply because geometric derivation is an unnecessary complication of that simple metric tensor formula!
Wait a minute! Did Professor Nespolo actually read our 50-page paper?!
Our 2017 review literally derives reciprocal-lattice concepts directly from elementary geometry and direct-space vector algebra! How could reciprocal-space formulas be missing when the entire goal of the paper is constructing them from the ground up?!
Reading without reading—skimming a paper and rushing to criticize—is endemic among mainstream scientists! It is the exact same pathology we saw when AI chatbots refused to read our Wave Mechanics derivations and blindly repeated mainstream dogma, judging papers by journal impact factor or tribal camp!
Furthermore, Nespolo commits a catastrophic pedagogical error. The simplicity of the reciprocal metric tensor does NOT magically bypass direct-space geometry! Its compactness exists ONLY because all the hard geometric and algebraic derivations have been compressed out of sight!
As we demonstrated in the American Journal of Physics in 2020, education is not merely memorizing shorthand definitions—education is teaching how knowledge is built from first principles! Dismissing foundational derivations because a shortcut looks simpler is like a cat kicking sand over its mess: you cover up the math quickly, your students memorize a formula, and because they never understood the roots, errors inevitably erupt later!

[Scene 4: Twisting Miller Indices and Destroying the Law of Rational Indices]
Look at how immediately Nespolo's own misunderstanding erupts in Blunder Number Two!
Nespolo declares: Miller indices always take relatively prime integers values only when a primitive unit cell is used, not when multiple cells are adopted. And he attacks our body-centered cubic example, claiming: In an I-centered cell, the Miller indices of this family of planes are 2-2-2, not 1-1-1!
Let us dismantle this error with crystal-clear mathematics!
In classical crystallography, Miller indices h-k-l specify the orientation of an entire family of parallel lattice planes—their ratios h to k to l—and NOT the equation of one individual plane! By the Law of Rational Indices, any lattice plane cuts crystal axes at rational fractions, guaranteeing that Miller indices are ALWAYS uniquely defined as co-prime integers—having no common factor greater than one—regardless of whether you choose a primitive or centered unit cell!
Let us verify the 1-1-1 planes in a body-centered cubic cell using the plane equation h-x plus k-y plus l-z equals N, as we showed in SN Applied Sciences in 2020:
First, take the 1-1-1 plane passing through the body center one-half, one-half, one-half. Its intercepts on the axes are three-halves, three-halves, three-halves—giving x plus y plus z equals 1.5! Here N is 1.5.
Second, the adjacent 1-1-1 plane through 1, 0, 0 has intercepts 1, 1, 1—giving x plus y plus z equals 1!
Third, the plane through one-half, minus one-half, one-half gives x plus y plus z equals 0.5!
Simply plug any lattice node coordinate into x plus y plus z equals N, and N is ALWAYS a rational number! That is 100 percent consistent with the Law of Rational Indices!
Why did Nespolo demand 2-2-2 instead of 1-1-1? Because he twisted the definition by insisting that N in h-x plus k-y plus l-z equals N MUST be an integer! Under Nespolo's backward redefinition, you cannot even identify Miller indices without first writing down the plane equation and forcing N to be whole—completely mangling the Law of Rational Indices and inviting massive confusion!
Even more astonishingly, mainstream crystallography actually adopted Nespolo's flawed redefinition straight into the official IUCr Online Dictionary of Crystallography! When the entire international dictionary abandons the Law of Rational Indices for an unnecessary complication, you see just how low modern theoretical standards have fallen.

[Scene 5: Diamond Atoms A and B — Confusing Wyckoff Symmetry with Lattice Environment]
Now examine Blunder Number Three.
Nespolo mocks a crucial statement in our 2017 review about diamond: The environment around a carbon A is different from that around a carbon B.
Nespolo scoffs: The structure of diamond contains only one atom in the asymmetric unit; it is obviously simply impossible to have different environments around two physically distinct but symmetrically equivalent atoms!
Here, an editor of the Journal of Applied Crystallography exposes that he confuses Wyckoff site symmetry with lattice translational equivalence!
Yes, carbon atoms A and B at 0, 0, 0 and one-quarter, one-quarter, one-quarter are related by an inversion center, a four-one screw axis, and a diamond glide plane—so diamond's asymmetric unit has only one atom.
HOWEVER, in lattice theory, what defines whether two points share the same lattice environment? Translation symmetry—and ONLY translation symmetry! Not inversion, not rotation, not reflection!
If you translate the entire diamond crystal along the vector from carbon A to carbon B—namely one-quarter, one-quarter, one-quarter—does the crystal shift into itself? NO! The tetrahedral bonds point the opposite way!
As we proved in SN Applied Sciences 2020, replace carbon A with sulfur and carbon B with zinc to form zinc blende, and their distinct physical environments jump right out at you! Two sites can belong to the exact same Wyckoff site by point or glide symmetry while having completely DIFFERENT translational environments—which is precisely why A and B cannot both be lattice nodes in diamond's face-centered cubic lattice!

[Scene 6: Pedantic Dogmatism Over "Diamond Lattice"]
Finally, look at Blunder Number Four—pure terminological pedantry.
Nespolo attacks our discussion of the face-centered diamond lattice, declaring: There exists no such a thing like a diamond lattice; the lattice of diamond is c-F. The structure of diamond corresponds to lattice complex D. I hope that the confusion between lattice and structure can now be avoided!
Who issued a decree that the word lattice may only be spoken for the 14 Bravais lattices?!
As we documented in SN Applied Sciences 2020, crystallography universally employs broader structural lattice terminology: lattice energy, lattice dynamics, rock salt lattice, CsCl lattice, and yes—diamond lattice, widely used in textbooks and research for MgCu2, spinel MgAl2O4, and zinc blende!
To insist that "lattice complex D" and "CsCl lattice" are acceptable while outlawing "diamond lattice" is self-contradictory gatekeeping disguised as rigor.

[Scene 7: Epilogue — Cargo Cult Science Across Academia]
Step back and look at the whole picture of Case Eight.
We did not pick an obscure student preprint. We dissected an article by an IUCr commission founder and journal editor, accepted in three days by Crystallography Reviews—and canonized into the IUCr Online Dictionary of Crystallography!
Yet it misread the target paper, dismissed foundational geometric derivations, broke the Law of Rational Indices by forcing non-co-prime Miller indices, confused Wyckoff symmetry with translational lattice nodes, and engaged in pedantic word-policing.
Just as in microwave absorption, modern academia no longer rewards deep comprehension from first principles. It rewards credentialed jargon, shallow shortcuts, three-day insider peer review, and blind conformity. That is why over 95 percent of SCI publications today represent Cargo Cult Science—and why restoring truth in science requires dismantling authority with logic, mathematics, and primary evidence.
Thank you for watching Episode Eight of our Forensic Dissection Series. Subscribe and share this archive to keep real science alive.`;

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="forensic-dissection-nespolo2017-crystrev-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-amber-100 text-amber-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-amber-300 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
            Essay GV &bull; Forensic Dissection Case 8
          </span>
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
            Crystallogr. Rev. 2017 &bull; SN Appl. Sci. 2020 &bull; Beyond Microwave Absorption
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Forensic Dissection Case 8: Deconstructing Nespolo (Crystallogr. Rev. 2017) — 3-Day Peer Review, Unread Critiques, Broken Miller Indices &amp; Confusing Symmetry with Lattice Nodes
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Proof that Cargo Cult Science extends far beyond microwave absorption: dissecting an IUCr Commission founder and <em>J. Appl. Cryst.</em> editor&apos;s four textbook blunders, plus complete 7-Scene Digital Avatar Broadcast Script and 100% YouTube-Safe Description.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Wave Mechanics &amp; Crystallography Archives &bull; Forensic Case 8
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-case8")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-case8" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-case8" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-case8")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-case8" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-case8" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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

      {/* Abstract / Context Banner */}
      <div className="bg-amber-50/70 border-l-4 border-amber-700 p-5 rounded-r-xl mb-8 font-sans text-sm text-slate-800 space-y-2">
        <div className="font-bold text-amber-950 flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-700 shrink-0" />
          Why Dissect a Crystallography Paper? Proving 95%+ of All SCI Research Is Systemic Cargo Cult Science
        </div>
        <p>
          We cannot dissect every journal article individually, yet applying our forensic protocol across the field proves beyond reasonable doubt that 99.99% of microwave absorption papers&mdash;and over 95% of SCI papers across modern academia&mdash;are theoretical garbage. Because shallow papers sail effortlessly through peer review, rigorous foundational works like Wave Mechanics Theory face systemic suppression, leaving modern science trapped in a Dark Age (<em>SSRN 5720702</em>; <em>Substack 2025</em>). To demonstrate that this collapse is <strong>not</strong> unique to microwave absorption, Case 8 turns the forensic scalpel on classical crystallography: <strong>M. Nespolo (<em>Crystallogr. Rev.</em> 2017, 23(4), 302&ndash;303)</strong>, accepted in just <strong>3 days</strong> (Received 30 May 2017; Accepted 2 June 2017) by an elite IUCr Commission founder and <em>Journal of Applied Crystallography</em> editor, and fully refuted in <strong>Ying Liu, Yue Liu, and M. G. B. Drew (<em>SN Appl. Sci.</em> 2020, 2(4), 755)</strong>.
        </p>
      </div>

      {/* ========================================================================== */}
      {/* PART I: FOUR FORENSIC BLUNDERS IN NESPOLO (2017)                           */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Calculator className="w-6 h-6 text-amber-700" />
          <h2>Part I: Four Foundational Blunders in Nespolo (<em>Crystallogr. Rev.</em> 2017)</h2>
        </div>

        {/* Flaw 1 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-3">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            1. Judging Without Reading &amp; Trivializing First-Principles Derivations
          </h3>
          <p className="text-sm text-slate-700">
            Nespolo claimed that Liu et al. (<em>Crystallogr. Rev.</em> 2017, 23:252&ndash;301) discussed &ldquo;unnecessarily cumbersome formulae&rdquo; while &ldquo;the simplest and most general method [metric tensor Eq. (1)] is missing,&rdquo; adding that elementary geometric derivations had not appeared earlier simply because they were &ldquo;an unnecessary complication of the very simple formula (1).&rdquo;
          </p>
          <p className="text-sm text-slate-700">
            <strong>Forensic Rebuttal:</strong> How could a paper whose central task is deriving reciprocal-lattice equations from elementary direct-space geometry be &ldquo;missing&rdquo; reciprocal-lattice concepts? Nespolo clearly never read the paper carefully before attacking it&mdash;mirroring the exact habit of mainstream gatekeepers (and AI systems parroting mainstream consensus) who praise or attack papers strictly by tribal camp and journal impact factor. Worse, the simplicity of the reciprocal metric tensor did <em>not</em> arise from thin air: it rests entirely upon direct-space geometry! You cannot bypass mathematical foundations. As argued in <em>Liu, Liu, Drew (Am. J. Phys. 2020, 88(1), 51&ndash;59)</em>, science education is not memorizing surface definitions (&ldquo;covering cat feces with sand&rdquo; / 小猫盖屎); real mastery requires deriving concepts from their roots. (Note also that Nespolo&apos;s Eq. (1) abuses double-bar norm notation ||<strong>r</strong>*||<sup>2</sup> when single bars |<strong>r</strong>*|<sup>2</sup> are mathematically exact.)
          </p>
        </div>

        {/* Flaw 2 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-3">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <Layers className="w-4 h-4 text-rose-600 shrink-0" />
            2. Breaking the Law of Rational Indices &amp; Forcing Non-Coprime Miller Indices (222) Over (111)
          </h3>
          <p className="text-sm text-slate-700">
            Nespolo insisted: <em>&ldquo;Miller indices always take relatively prime integers values only when a primitive unit cell is used, not when multiple cells are adopted... In an I-centred cell, the Miller indices of this family of planes are (222), not (111).&rdquo;</em> Shockingly, the IUCr <em>Online Dictionary of Crystallography</em> (<code>dictionary.iucr.org/Miller_indices</code>) actually canonized this flawed redefinition!
          </p>
          <div className="bg-white border border-slate-200 p-4 rounded-lg font-mono text-xs text-slate-900 space-y-1.5">
            <div>Plane equation in BCC (cI) for (111): &nbsp; h x + k y + l z = N &nbsp;&rarr;&nbsp; x + y + z = N</div>
            <div>&bull; Plane via body-center node (1/2, 1/2, 1/2): intercepts (3/2, 3/2, 3/2) &rarr; N = 1.5 (rational!)</div>
            <div>&bull; Plane via corner node (1, 0, 0): intercepts (1, 1, 1) &rarr; N = 1</div>
            <div>&bull; Plane via node (1/2, &minus;1/2, 1/2): intercepts (1/2, 1/2, 1/2) &rarr; N = 0.5 (rational!)</div>
          </div>
          <p className="text-sm text-slate-700">
            <strong>Forensic Rebuttal:</strong> Classical Miller indices (<em>hkl</em>) represent plane <strong>orientation</strong> (<em>h:k:l</em>) and are strictly co-prime integers in <em>all</em> coordinate systems, guaranteed by the <strong>Law of Rational Indices</strong>, where <em>N</em> can be any rational number in non-primitive cells. Nespolo&apos;s redefinition forces <em>N</em> in <em>hx + ky + lz = N</em> to be an integer, requiring one to write the plane equation <em>before</em> determining Miller indices&mdash;an absurd complication (&ldquo;taking off one&apos;s trousers just to fart&rdquo;) that obscures lattice equivalence and directly spawned published errors claiming uneven lattice-plane spacing and missing lattice planes (Fan 2012, 2016).
          </p>
        </div>

        {/* Flaw 3 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-3">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-600 shrink-0" />
            3. Diamond Atoms A and B: Confusing Wyckoff Site Symmetry with Translational Lattice Environment
          </h3>
          <p className="text-sm text-slate-700">
            Nespolo attacked Liu et al.&apos;s statement on diamond (&ldquo;The environment around a carbon A is different from that around a carbon B&rdquo;), objecting that diamond has only one atom in its asymmetric unit and claiming two symmetrically equivalent atoms cannot have different environments.
          </p>
          <p className="text-sm text-slate-700">
            <strong>Forensic Rebuttal:</strong> Nespolo confuses <strong>Wyckoff site symmetry</strong> (inversion center <em>I</em>, 4<sub>1</sub> screw, diamond glide <em>d</em>) with <strong>lattice translational equivalence</strong>! In crystallography, the environment defining a Bravais lattice node is governed strictly by <strong>translation symmetry</strong>, NOT arbitrary symmetry operations. Translating atom A(0,0,0) to atom B(1/4,1/4,1/4) does <em>not</em> map the crystal onto itself (its tetrahedral coordination orientation flips!). Replacing A and B with S<sup>2&minus;</sup> and Zn<sup>2+</sup> in cubic sphalerite (ZnS) immediately proves their environments are physically distinct with respect to translation (<em>SN Appl. Sci.</em> 2020, Sect. 2.4, Figs. 3&ndash;4).
          </p>
        </div>

        {/* Flaw 4 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-700 shrink-0" />
            4. Pedantic Contradiction Over &ldquo;Diamond Lattice&rdquo; vs. &ldquo;Lattice Complex D&rdquo;
          </h3>
          <p className="text-sm text-slate-700">
            Nespolo asserted that &ldquo;there exists no such a thing like a &lsquo;diamond lattice&rsquo;, the lattice of diamond is cF&rdquo; while promoting &ldquo;lattice complex D.&rdquo; Yet crystallography routinely uses &ldquo;lattice&rdquo; in broader structural contexts&mdash;<em>lattice energy</em>, <em>lattice dynamics</em>, <em>rock salt lattice</em>, <em>CsCl lattice</em>, and <em>diamond lattice</em> (e.g., for MgCu<sub>2</sub>, spinel MgAl<sub>2</sub>O<sub>4</sub>, and ZnS). Approving &ldquo;lattice complex D&rdquo; and &ldquo;CsCl lattice&rdquo; while forbidding &ldquo;diamond lattice&rdquo; is arbitrary terminological dogmatism (<em>SN Appl. Sci.</em> 2020, Sect. 2.5).
          </p>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 7-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-amber-700" />
            <h2>Part II: Complete 7-Scene Digital Avatar Broadcast Script (~13.5 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-case8-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-case8-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-case8-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
          </button>
        </div>

        {/* Scene 1 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-amber-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-amber-700 text-white rounded-full flex items-center justify-center text-xs">1</span>
              Scene 1: Prologue — Beyond Microwave Absorption: Proving 95% of SCI Papers Are Broken
            </span>
            <span className="text-xs font-mono text-slate-400">00:00 &ndash; 02:00</span>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-amber-700 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-amber-950">Spoken Narration:</p>
            <p>
              &ldquo;Welcome back to Episode Eight of our Forensic Dissection Series: <em>Why Modern Science Is in a Dark Age</em>. We cannot dissect every single journal article one by one. Yet once you apply our forensic lens systematically across the literature, you quickly see why 99.99 percent of microwave absorption papers&mdash;and more than ninety-five percent of SCI articles across all disciplines&mdash;are theoretical garbage. And because superficial garbage sails effortlessly through peer review, truly deep foundational work like Wave Mechanics Theory is rejected and buried. Modern academia is practicing Cargo Cult Science. Until today, our forensic series focused on microwave absorption. Critics might ask: surely real theoretical physics and classic disciplines like mathematical crystallography still enforce elite standards? To shatter that illusion, today&apos;s Episode Eight steps outside microwave absorption into an iconic exhibit in crystallography&mdash;written by none other than a top international editor and founder of the IUCr Commission on Mathematical and Theoretical Crystallography!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 2 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-amber-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-amber-700 text-white rounded-full flex items-center justify-center text-xs">2</span>
              Scene 2: The Elite Pedigree &amp; 3-Day Acceptance of Nespolo (Crystallogr. Rev. 2017)
            </span>
            <span className="text-xs font-mono text-slate-400">02:00 &ndash; 03:50</span>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-rose-700 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-rose-950">Spoken Narration:</p>
            <p>
              &ldquo;In 2017, Ying Liu, Michael Drew, and I published a comprehensive 50-page theoretical review in <em>Crystallography Reviews</em>, titled <em>Comparison of calculations for interplanar distances in a crystal lattice</em>. Immediately following our paper in the exact same volume and issue&mdash;pages 302 to 303&mdash;Professor Massimo Nespolo published a two-page critique titled <em>Comments on the article &lsquo;Comparison of calculations for interplanar distances in a crystal lattice&rsquo;</em>. Look closely at Nespolo&apos;s credentials: MSc in Chemistry from Torino, Doctor of Science from the University of Tokyo, Professor at the University of Lorraine in France, Editor of the <em>Journal of Applied Crystallography</em>, and founder and former chair of the IUCr Commission on Mathematical and Theoretical Crystallography! And look at the publication stamp at the top of page 2: Received May 30, 2017. Accepted June 2, 2017! Three days from submission to acceptance! Yet despite that elite pedigree and lightning-fast rubber stamp, Nespolo&apos;s two-page comment contains four textbook blunders that expose exactly how modern mainstream scientists read, reason, and gatekeep!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 3 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-amber-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-amber-700 text-white rounded-full flex items-center justify-center text-xs">3</span>
              Scene 3: Judging Without Reading &amp; Why Metric Tensors Cannot Replace Geometric Roots
            </span>
            <span className="text-xs font-mono text-slate-400">03:50 &ndash; 06:00</span>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-indigo-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-indigo-950">Spoken Narration:</p>
            <p>
              &ldquo;Let us examine Blunder Number One. Nespolo opens his comment with a sweeping accusation: &lsquo;In a recent article, Liu et al. discuss at length various methods to compute interplanar distances, with unnecessarily cumbersome formulae. Quite surprisingly, in their discussion the simplest and most general method is missing&rsquo;&mdash;referring to the reciprocal-space metric tensor formula. He then claims our elementary geometric derivations were not published previously simply because geometric derivation is an unnecessary complication of that simple metric tensor formula! Wait a minute! Did Professor Nespolo actually read our 50-page paper?! Our 2017 review literally derives reciprocal-lattice concepts directly from elementary geometry and direct-space vector algebra! How could reciprocal-space formulas be missing when the entire goal of the paper is constructing them from the ground up?! Reading without reading&mdash;skimming a paper and rushing to criticize&mdash;is endemic among mainstream scientists! It is the exact same pathology we saw when AI chatbots refused to read our Wave Mechanics derivations and blindly repeated mainstream dogma, judging papers by journal impact factor or tribal camp! Furthermore, Nespolo commits a catastrophic pedagogical error. The simplicity of the reciprocal metric tensor does NOT magically bypass direct-space geometry! Its compactness exists ONLY because all the hard geometric and algebraic derivations have been compressed out of sight! As we demonstrated in the <em>American Journal of Physics</em> in 2020, education is not merely memorizing shorthand definitions&mdash;education is teaching how knowledge is built from first principles! Dismissing foundational derivations because a shortcut looks simpler is like a cat kicking sand over its mess: you cover up the math quickly, your students memorize a formula, and because they never understood the roots, errors inevitably erupt later!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 4 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-amber-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-amber-700 text-white rounded-full flex items-center justify-center text-xs">4</span>
              Scene 4: Miller Indices &amp; The Law of Rational Indices — Why BCC (111) Is NOT (222)!
            </span>
            <span className="text-xs font-mono text-slate-400">06:00 &ndash; 08:30</span>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-rose-700 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-rose-950">Spoken Narration:</p>
            <p>
              &ldquo;Look at how immediately Nespolo&apos;s own misunderstanding erupts in Blunder Number Two! Nespolo declares: Miller indices always take relatively prime integers values only when a primitive unit cell is used, not when multiple cells are adopted. And he attacks our body-centered cubic example, claiming: In an I-centered cell, the Miller indices of this family of planes are 2-2-2, not 1-1-1! Let us dismantle this error with crystal-clear mathematics! In classical crystallography, Miller indices <em>h-k-l</em> specify the orientation of an entire family of parallel lattice planes&mdash;their ratios <em>h</em> to <em>k</em> to <em>l</em>&mdash;and NOT the equation of one individual plane! By the Law of Rational Indices, any lattice plane cuts crystal axes at rational fractions, guaranteeing that Miller indices are ALWAYS uniquely defined as co-prime integers&mdash;having no common factor greater than one&mdash;regardless of whether you choose a primitive or centered unit cell! Let us verify the 1-1-1 planes in a body-centered cubic cell using the plane equation <em>hx + ky + lz = N</em>, as we showed in <em>SN Applied Sciences</em> in 2020: First, take the 1-1-1 plane passing through the body center one-half, one-half, one-half. Its intercepts on the axes are three-halves, three-halves, three-halves&mdash;giving <em>x + y + z = 1.5</em>! Here <em>N</em> is 1.5. Second, the adjacent 1-1-1 plane through 1, 0, 0 has intercepts 1, 1, 1&mdash;giving <em>x + y + z = 1</em>! Third, the plane through one-half, minus one-half, one-half gives <em>x + y + z = 0.5</em>! Simply plug any lattice node coordinate into <em>x + y + z = N</em>, and <em>N</em> is ALWAYS a rational number! That is 100 percent consistent with the Law of Rational Indices! Why did Nespolo demand 2-2-2 instead of 1-1-1? Because he twisted the definition by insisting that <em>N</em> in <em>hx + ky + lz = N</em> MUST be an integer! Under Nespolo&apos;s backward redefinition, you cannot even identify Miller indices without first writing down the plane equation and forcing <em>N</em> to be whole&mdash;completely mangling the Law of Rational Indices and inviting massive confusion! Even more astonishingly, mainstream crystallography actually adopted Nespolo&apos;s flawed redefinition straight into the official IUCr Online Dictionary of Crystallography! When the entire international dictionary abandons the Law of Rational Indices for an unnecessary complication, you see just how low modern theoretical standards have fallen.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 5 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-amber-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-amber-700 text-white rounded-full flex items-center justify-center text-xs">5</span>
              Scene 5: Diamond Carbons A vs. B — Symmetry Equivalence vs. Translational Environment
            </span>
            <span className="text-xs font-mono text-slate-400">08:30 &ndash; 10:35</span>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-emerald-700 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-emerald-950">Spoken Narration:</p>
            <p>
              &ldquo;Now examine Blunder Number Three. Nespolo mocks a crucial statement in our 2017 review about diamond: &lsquo;The environment around a carbon A is different from that around a carbon B.&rsquo; Nespolo scoffs: &lsquo;The structure of diamond contains only one atom in the asymmetric unit; it is obviously simply impossible to have different environments around two physically distinct but symmetrically equivalent atoms!&rsquo; Here, an editor of the <em>Journal of Applied Crystallography</em> exposes that he confuses Wyckoff site symmetry with lattice translational equivalence! Yes, carbon atoms A and B at 0, 0, 0 and one-quarter, one-quarter, one-quarter are related by an inversion center, a four-one screw axis, and a diamond glide plane&mdash;so diamond&apos;s asymmetric unit has only one atom. HOWEVER, in lattice theory, what defines whether two points share the same lattice environment? Translation symmetry&mdash;and ONLY translation symmetry! Not inversion, not rotation, not reflection! If you translate the entire diamond crystal along the vector from carbon A to carbon B&mdash;namely one-quarter, one-quarter, one-quarter&mdash;does the crystal shift into itself? NO! The tetrahedral bonds point the opposite way! As we proved in <em>SN Applied Sciences</em> 2020, replace carbon A with sulfur and carbon B with zinc to form zinc blende, and their distinct physical environments jump right out at you! Two sites can belong to the exact same Wyckoff site by point or glide symmetry while having completely DIFFERENT translational environments&mdash;which is precisely why A and B cannot both be lattice nodes in diamond&apos;s face-centered cubic lattice!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 6 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-amber-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-amber-700 text-white rounded-full flex items-center justify-center text-xs">6</span>
              Scene 6: &ldquo;Diamond Lattice&rdquo; Pedantry &amp; Arbitrary Gatekeeping
            </span>
            <span className="text-xs font-mono text-slate-400">10:35 &ndash; 12:15</span>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-800 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken Narration:</p>
            <p>
              &ldquo;Finally, look at Blunder Number Four&mdash;pure terminological pedantry. Nespolo attacks our discussion of the face-centered diamond lattice, declaring: &lsquo;There exists no such a thing like a diamond lattice; the lattice of diamond is c-F. The structure of diamond corresponds to lattice complex D. I hope that the confusion between lattice and structure can now be avoided!&rsquo; Who issued a decree that the word lattice may only be spoken for the 14 Bravais lattices?! As we documented in <em>SN Applied Sciences</em> 2020, crystallography universally employs broader structural lattice terminology: lattice energy, lattice dynamics, rock salt lattice, CsCl lattice, and yes&mdash;diamond lattice, widely used in textbooks and research for MgCu<sub>2</sub>, spinel MgAl<sub>2</sub>O<sub>4</sub>, and zinc blende! To insist that &lsquo;lattice complex D&rsquo; and &lsquo;CsCl lattice&rsquo; are acceptable while outlawing &lsquo;diamond lattice&rsquo; is self-contradictory gatekeeping disguised as rigor.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 7 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-amber-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-amber-700 text-white rounded-full flex items-center justify-center text-xs">7</span>
              Scene 7: Epilogue — Cargo Cult Science Across Academia
            </span>
            <span className="text-xs font-mono text-slate-400">12:15 &ndash; 13:45</span>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-950 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken Narration:</p>
            <p>
              &ldquo;Step back and look at the whole picture of Case Eight. We did not pick an obscure student preprint. We dissected an article by an IUCr commission founder and journal editor, accepted in three days by <em>Crystallography Reviews</em>&mdash;and canonized into the IUCr Online Dictionary of Crystallography! Yet it misread the target paper, dismissed foundational geometric derivations, broke the Law of Rational Indices by forcing non-co-prime Miller indices, confused Wyckoff symmetry with translational lattice nodes, and engaged in pedantic word-policing. Just as in microwave absorption, modern academia no longer rewards deep comprehension from first principles. It rewards credentialed jargon, shallow shortcuts, three-day insider peer review, and blind conformity. That is why over 95 percent of SCI publications today represent Cargo Cult Science&mdash;and why restoring truth in science requires dismantling authority with logic, mathematics, and primary evidence. Thank you for watching Episode Eight of our Forensic Dissection Series. Subscribe and share this archive to keep real science alive.&rdquo;
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
            <FileText className="w-6 h-6 text-amber-700" />
            <h2>Part III: 100% YouTube-Safe Description (Zero &lt; or &gt; Characters)</h2>
          </div>
          <button
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-case8-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-case8-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-case8-bottom" ? "Copied!" : "Copy Clean Description"}
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
          Forensic Dissection Series &bull; Episode 8 &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md font-semibold">
            Crystallogr. Rev. 2017
          </span>
          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
            SN Appl. Sci. 2020
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Beyond Microwave Absorption
          </span>
        </div>
      </div>
    </article>
  );
}
