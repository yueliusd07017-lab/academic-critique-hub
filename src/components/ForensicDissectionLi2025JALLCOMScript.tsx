import React, { useState } from "react";
import { Video, Copy, Check, Calculator, Layers, Scale, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ForensicDissectionLi2025JALLCOMScript() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const youtubeSafeDescription = `Title: Deconstructing Li et al. (J. Alloys Compd. 2025): Basic Math Is Not Enough, Zin = Z0 Belongs to Transmission Line Theory & Third-Party Proof of Wave Mechanics | Forensic Dissection Series Case 6

Welcome to Episode 6 of our Forensic Dissection Series: "Why Modern Science Is in a Dark Age."

In this sixth case study, Dr. Yue Liu analyzes:
S. Li, S. Guo, G. Chen, Y. Cui, H. Yang, J. Qiu, Z. Wang, M. Dai, and S. Liu, "Evolution of electron localization with Co2+ variations in CoxFe3-xO4 hollow spheres for enhanced wave absorption", Journal of Alloys and Compounds 2025, Vol. 1026, 180381 (DOI: 10.1016/j.jallcom.2025.180381).

This case stands in sharp contrast to our previous five autopsies—and reveals an even deeper methodological crisis in modern materials science:

1. THE MINIMUM MATHEMATICAL THRESHOLD & "THEORETICAL POVERTY" (SSRN 5463155):
To conduct genuine research in microwave absorption, the bare minimum requirement is elementary complex-number arithmetic (addition, subtraction, multiplication, division), exponential functions, and trigonometry—enough to compute the amplitude and phase angle of beam R2 (or V(t, d-)/V(i, d-)) and the phase difference between front reflection r1 and back beam R2.
Yet the overwhelming majority of modern microwave absorption researchers lack even this basic competence! Confined to commercial VNA software and copy-pasted spreadsheet templates, they cannot perform independent calculations outside the template—making them incapable of judging whether Wave Mechanics Theory or Impedance Matching Theory is right. That is why contemporary academia suffers from severe "Theoretical Poverty" (Dr. Yue Liu, SSRN 5463155).

2. LI ET AL. (2025) HAVE THE MATH—BUT STILL CONFLATE TRANSMISSION LINE THEORY WITH IMPEDANCE MATCHING:
Unlike 99% of template papers, Li et al. actually computed complex R_M(d-), complex V(t, d-)/V(i, d-), their amplitude gap (0.0002 for CoFe2O4 at -72.3 dB), and their phase difference (approx. 180 degrees) in Table S3 and Fig. 7.
HOWEVER, mathematical computation alone is not enough! In Fig. 7(a, b) and Section 3.3, the authors still evaluate |Zin/Z0| as "impedance matching" and treat wave cancellation merely as a secondary explanation for why RLmin sits inside the |Zin/Z0| approx. 1 zone!
As proven in Liu, Drew, Liu (J. Appl. Phys. 2023, 134(4), 045303) and Liu, Liu, Drew (J. Magn. Magn. Mater. 2024, 593, 171850):
- Achieving maximum absorption at Zin = Z0 (where r1 and R2 cancel with equal amplitude and opposite phase) is an intrinsic consequence of TRANSMISSION LINE THEORY, NOT Impedance Matching Theory!
- Impedance Matching Theory was erected upon a catastrophic misreading of Zin = Z0: it completely abandoned wave superposition, conflated "film" with "material", and invented an unphysical narrative that incident wave penetration + material attenuation determine RL peaks via intrinsic composition and structure.

3. NOT A PARADIGM-CORRECTING PAPER—YET VALUABLE THIRD-PARTY VALIDATION:
Because Li et al. merely examine whether the strongest RL peak falls near Zin = Z0 without overturning the flawed film-vs-material conflation of impedance matching, their work does NOT set the paradigm right.
Nevertheless, Table S3 and Fig. 7 constitute important independent third-party experimental confirmation that Wave Mechanics Theory quantitatively predicts microwave absorption in real Co_xFe_{3-x}O4 ferrite films!

TIMESTAMPS:
00:00 - Scene 1: Prologue — Case 6: A Rare Paper That Can Do Complex Math!
02:10 - Scene 2: The Baseline Competency Crisis & "Theoretical Poverty" (SSRN 5463155)
04:45 - Scene 3: Inside Li et al. (2025) Table S3 — Checking Amplitudes and Phase Differences
07:15 - Scene 4: Why Having the Math Is Not Enough — Still Trapped by |Zin/Z0| = 1
09:45 - Scene 5: Zin = Z0 Belongs to Transmission Line Theory, Not Impedance Matching (JAP 2023 & JMMM 2024)
12:20 - Scene 6: Film vs. Material — How Impedance Matching Abandoned Wave Superposition
14:40 - Scene 7: Epilogue — Not Paradigm-Correcting, Yet Third-Party Proof of Wave Mechanics

Primary References:
- Li et al., J. Alloys Compd. 2025, 1026, 180381 (DOI: 10.1016/j.jallcom.2025.180381)
- Liu, Y., The Theoretical Poverty of Modern Academia, SSRN 5463155 (2025) (DOI: 10.2139/ssrn.5463155)
- Liu, Y., Drew, M.G.B., Liu, Y., J. Appl. Phys. 2023, 134(4), 045303 (DOI: 10.1063/5.0153608)
- Liu, Y., Liu, Y., Drew, M.G.B., J. Magn. Magn. Mater. 2024, 593, 171850
- Liu, Y., Liu, Y., Drew, M.G.B., Physica Scripta 2021, 96, 125003; 2022, 97, 015806
- Liu, Y., Yin, X., Drew, M.G.B., Liu, Y., Physica B: Condensed Matter 2023, 666, 415108
- Academic Critique Hub: https://github.com/academic-critique/hub

#WaveMechanics #TheoreticalPoverty #TransmissionLineTheory #ImpedanceMatchingMyth #MicrowaveAbsorption #ScientificMethod #PeerReviewCrisis`;

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="forensic-dissection-li2025-jallcom-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-cyan-100 text-cyan-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-cyan-300 flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-cyan-700" />
            Essay GS &bull; Forensic Dissection Case 6
          </span>
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
            J. Alloys Compd. 2025 &bull; Theoretical Poverty &bull; Zin = Z0 vs. Transmission Line Theory
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Forensic Dissection Case 6: Deconstructing Li et al. (J. Alloys Compd. 2025) — Complex Math Threshold, Why Z<sub>in</sub> = Z<sub>0</sub> Is Not Impedance Matching, and Third-Party Verification of Wave Mechanics
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          A rigorous methodological critique of S. Li et al. (Co<sub>x</sub>Fe<sub>3&minus;x</sub>O<sub>4</sub> hollow spheres, JALCOM 2025), complete 7-Scene Digital Avatar Video Script, and 100% YouTube-Safe Description.
        </p>
        <div className="text-xs text-slate-400 mt-2 font-mono">
          Author: Dr. Yue Liu (刘跃) &bull; Wave Mechanics Theoretical Archives &bull; Forensic Case 6
        </div>
      </div>

      {/* Abstract Callout */}
      <div className="bg-cyan-50/70 border-l-4 border-cyan-700 p-5 rounded-r-xl mb-8 font-sans text-sm text-slate-800 space-y-2">
        <div className="font-bold text-cyan-950 flex items-center gap-2">
          <Scale className="w-5 h-5 text-cyan-700 shrink-0" />
          Why Case 6 Is Unique: Competence in Complex Arithmetic Is Necessary, Yet Insufficient for Paradigm Correction
        </div>
        <p>
          In <em>Journal of Alloys and Compounds</em> (2025, 1026, 180381), Li et al. synthesized Co<sub>x</sub>Fe<sub>3&minus;x</sub>O<sub>4</sub> hollow spheres achieving <em>RL</em><sub>min</sub> = &minus;72.3 dB at 2.67 mm and 9.2 GHz. Unlike 99% of contemporary microwave absorption authors who are trapped by commercial software templates, Li et al. actually computed complex interface reflections <em>R</em><sub>M</sub>(<em>d</em><sup>&minus;</sup>), back-propagating beam sums <em>V</em>(<em>t</em>,<em>d</em><sup>&minus;</sup>)/<em>V</em>(<em>i</em>,<em>d</em><sup>&minus;</sup>), amplitude ratios, and phase differences in Table S3 and Fig. 7. Yet they still conflated |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| &approx; 1 with &ldquo;impedance matching&rdquo; and attributed absorption peaks to intrinsic composition/microstructure losses. This dissection establishes why <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> belongs solely to <strong>Transmission Line Theory</strong>, why Li et al. is not a paradigm-correcting paper, and why it nonetheless serves as valuable third-party verification of <strong>Wave Mechanics Theory</strong>.
        </p>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl mb-8 font-sans">
        <div className="text-xs text-slate-600">
          <strong>Package Contents:</strong> Part I: Theoretical Analysis &bull; Part II: 7-Scene Broadcast Script &bull; Part III: Safe YouTube Description
        </div>
        <button
          onClick={() => handleCopyText(youtubeSafeDescription, "desc-li2025")}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg text-xs font-bold transition shadow-xs cursor-pointer"
        >
          {copiedSection === "desc-li2025" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copiedSection === "desc-li2025" ? "Description Copied!" : "Copy Safe YouTube Description"}
        </button>
      </div>

      {/* ========================================================================== */}
      {/* PART I: RIGOROUS THEORETICAL ANALYSIS OF LI ET AL. (2025)                  */}
      {/* ========================================================================== */}
      <section className="space-y-6 mb-14">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 font-sans font-bold text-xl text-slate-950">
          <Calculator className="w-6 h-6 text-cyan-700" />
          <h2>Part I: Three Core Analytical Pillars on Li et al. (J. Alloys Compd. 2025)</h2>
        </div>

        {/* Pillar 1 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            1. The Elementary Math Threshold &amp; &ldquo;The Theoretical Poverty of Modern Academia&rdquo; (SSRN 5463155)
          </h3>
          <p className="text-sm leading-relaxed text-slate-700">
            To conduct genuine scientific research in microwave absorption, the bare minimum technical requirement is knowing how to execute <strong>complex number arithmetic (+, &minus;, &times;, &divide;), complex exponentials, and trigonometric transformations</strong>&mdash;specifically computing the <strong>amplitude and phase angle of beam <em>R</em><sub>2</sub></strong> (expressed as <em>V</em>(<em>t</em>,<em>d</em><sup>&minus;</sup>)/<em>V</em>(<em>i</em>,<em>d</em><sup>&minus;</sup>)) and the <strong>phase difference between front reflection <em>r</em><sub>1</sub> and back-reflected beam <em>R</em><sub>2</sub></strong>.
          </p>
          <p className="text-sm leading-relaxed text-slate-700">
            This is not an esoteric requirement; it is elementary undergraduate mathematics that any serious practitioner in electromagnetic absorption ought to master. Yet the overwhelming majority of modern researchers do <strong>not</strong> possess this basic competence. Restricted to canned commercial software or copy-pasted spreadsheet templates, they cannot freely compute custom quantities outside the pre-built script. Consequently, they lack the analytical capacity to judge whether Wave Mechanics Theory or Impedance Matching Theory is correct, leaving them with no choice but to repeat traditional textbook errors verbatim&mdash;precisely what Dr. Yue Liu diagnoses in <em>The Theoretical Poverty of Modern Academia: Evidence of Widespread Intellectual Decline in Contemporary Scientific Research</em> (SSRN 5463155, 2025).
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-3">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-700 shrink-0" />
            2. Math Competence Alone Is Not Enough: Why Z<sub>in</sub> = Z<sub>0</sub> Is Transmission Line Theory, Not Impedance Matching
          </h3>
          <p className="text-sm leading-relaxed text-slate-700">
            Credit must be given where due: Li et al. clearly possess the required complex-number computation skill. In <strong>Table S3</strong>, <strong>Figure 7(c, d)</strong>, and the <strong>Appendix</strong> of their paper, they explicitly compute:
          </p>
          <div className="bg-white border border-slate-200 p-4 rounded-lg text-xs font-mono text-slate-800 space-y-1">
            <div>&bull; CoFe<sub>2</sub>O<sub>4</sub> (x = 1, f = 9.2 GHz, d = 2.67 mm, RL<sub>min</sub> = &minus;72.3 dB): R<sub>M</sub>(d<sup>&minus;</sup>) = 0.5587e<sup>&minus;3.080i</sup>, V(t,d<sup>&minus;</sup>)/V(i,d<sup>&minus;</sup>) = 0.5589e<sup>0.059i</sup>, |&Delta;Amp| = 0.0002, Phase diff &approx; 180&deg;</div>
            <div>&bull; Co<sub>0.75</sub>Fe<sub>2.25</sub>O<sub>4</sub> (x = 0.75, f = 8.4 GHz, d = 3.10 mm, RL<sub>min</sub> = &minus;46.1 dB): R<sub>M</sub>(d<sup>&minus;</sup>) = 0.5724e<sup>&minus;3.090i</sup>, V(t)/V(i) = 0.5696e<sup>0.051i</sup>, Phase diff &approx; 180&deg;</div>
            <div>&bull; Co<sub>0.5</sub>Fe<sub>2.5</sub>O<sub>4</sub> (x = 0.5, d = 2.50 mm): Phase diff = 182.60&deg; &nbsp;|&nbsp; Co<sub>0.25</sub>Fe<sub>2.75</sub>O<sub>4</sub> (d = 2.00 mm): Phase diff = 182.37&deg; &nbsp;|&nbsp; Fe<sub>3</sub>O<sub>4</sub> (d = 1.50 mm): Phase diff = 181.91&deg;</div>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            Yet having this math competence is <strong>still insufficient</strong>. Look at Page 18 and Fig. 7(a, b): Li et al. still compute |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| as &ldquo;impedance matching properties,&rdquo; treating wave cancellation merely as an auxiliary explanation inside the |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| &approx; 1 band! As proven in <strong>Liu, Drew, Liu (<em>J. Appl. Phys.</em> 2023, 134(4), 045303)</strong> and <strong>Liu, Liu, Drew (<em>J. Magn. Magn. Mater.</em> 2024, 593, 171850)</strong>:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 ml-1">
            <li>
              <strong>Complete Cancellation &harr; Z<sub>in</sub> = Z<sub>0</sub>:</strong> Wave mechanics proves that when a film absorbs all incident microwaves, beams <em>r</em><sub>1</sub> and <em>R</em><sub>2</sub> cancel completely (equal amplitude, opposite phase), producing the strongest absorption peak at <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub>.
            </li>
            <li>
              <strong>Transmission Line Result &ne; Impedance Matching:</strong> Demonstrating that an optimal experimental peak satisfies <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> does <strong>not</strong> mean Impedance Matching Theory incorporated phase and wave superposition! Reaching peak absorption at <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> is a mathematical result of <strong>Transmission Line Theory</strong>, NOT Impedance Matching Theory.
            </li>
            <li>
              <strong>The Corruption of Z<sub>in</sub> = Z<sub>0</sub>:</strong> Impedance Matching Theory was built by misinterpreting Transmission Line Theory&apos;s condition <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub>. It <strong>abandoned wave superposition entirely</strong>, conflated <strong>film</strong> with <strong>material</strong>, and fabricated the dogma that &ldquo;more incident microwave energy entering the material + stronger intrinsic attenuation = stronger <em>RL</em>,&rdquo; claiming composition and microstructure govern peak intensity directly.
            </li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="bg-emerald-50/70 border border-emerald-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-emerald-950 text-base flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            3. Methodological Verdict: Not a Paradigm-Correcting Paper, Yet Valuable Third-Party Confirmation
          </h3>
          <p className="text-sm leading-relaxed text-slate-800">
            Evaluating Wave Mechanics Theory versus Impedance Matching Theory cannot stop at checking whether the strongest peak falls at <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub>. Because Li et al. (2025) only inspect whether optimal absorption peaks coincide with |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| &approx; 1 and continue narrating composition-driven loss mechanisms throughout the Abstract and Conclusions without refuting impedance matching&apos;s film-vs-material fallacy, this paper is <strong>not</strong> a paradigm-correcting (<em>拨乱反正</em>) treatise.
          </p>
          <p className="text-sm leading-relaxed text-slate-800 font-semibold">
            Nevertheless, by explicitly calculating <em>R</em><sub>M</sub>(<em>d</em><sup>&minus;</sup>), <em>V</em>(<em>t</em>,<em>d</em><sup>&minus;</sup>)/<em>V</em>(<em>i</em>,<em>d</em><sup>&minus;</sup>), and phase difference across five experimental compositions, Table S3 and Fig. 7 stand as clean, independent third-party validation of the quantitative accuracy of Wave Mechanics Theory.
          </p>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 7-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <div className="space-y-8">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 font-sans font-bold text-xl text-slate-950">
          <Video className="w-6 h-6 text-cyan-700" />
          <h2>Part II: The Complete Digital Avatar Broadcast Script (7 Scenes)</h2>
        </div>

        {/* Scene 1 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-cyan-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-cyan-700 text-white rounded-full flex items-center justify-center text-xs">1</span>
              Scene 1: Prologue — Case 6: A Rare Paper That Can Actually Compute Complex Numbers!
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~130 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Fair, sharp physical chemist highlighting a crucial distinction between computational competence and theoretical clarity.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Title page of <em>J. Alloys Compd.</em> 2025, 1026, 180381 (S. Li et al., Co<sub>x</sub>Fe<sub>3&minus;x</sub>O<sub>4</sub> hollow spheres, &minus;72.3 dB at 2.67 mm).
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Case 6 Is Different: They Did the Complex Math—Yet Missed the Root Fallacy!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-cyan-700 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-cyan-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Welcome back to Episode Six of our Forensic Dissection Series: <em>Why Modern Science Is in a Dark Age</em>.
            </p>
            <p className="leading-relaxed">
              In our first five episodes, we dissected papers that plagiarized notation, violated energy conservation, confused transmission lines with loads, and froze variables during partial differentiation.
            </p>
            <p className="leading-relaxed">
              Today&apos;s sixth case—a 2025 paper by Shu Li, Shaoli Guo, Shuai Liu, and colleagues in the <em>Journal of Alloys and Compounds</em>, studying Co<sub>x</sub>Fe<sub>3&minus;x</sub>O<sub>4</sub> hollow spheres—is remarkably different!
            </p>
            <p className="leading-relaxed">
              Why? Because unlike ninety-nine percent of microwave absorption researchers, these authors actually did the complex-number calculations required by Wave Mechanics Theory, and cited our foundational papers in <em>Physica Scripta</em> and <em>Physica B</em>!
            </p>
            <p className="leading-relaxed">
              Yet even here, a profound methodological flaw remains. Today we reveal why basic math is a necessary threshold—and why confusing Transmission Line Theory with Impedance Matching still prevents even mathematically capable authors from setting the paradigm straight.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 2 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-cyan-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-cyan-700 text-white rounded-full flex items-center justify-center text-xs">2</span>
              Scene 2: The Baseline Competency Crisis &amp; &ldquo;Theoretical Poverty&rdquo; (SSRN 5463155)
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~145 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Defining the minimum mathematical literacy required to enter microwave absorption research.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Citation to Dr. Yue Liu, <em>The Theoretical Poverty of Modern Academia</em> (SSRN 5463155); chalkboard showing complex arithmetic (+, &minus;, &times;, &divide;), exp(j&phi;), |R<sub>2</sub>|, and &Delta;&phi;(r<sub>1</sub>, R<sub>2</sub>).
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Why Template-Bound Researchers Cannot Judge Wave Mechanics vs. Impedance Matching!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-amber-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-amber-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;To perform genuine scientific research in microwave absorption, what is the bare minimum skill a researcher must have?
            </p>
            <p className="leading-relaxed">
              You must be able to calculate basic complex-number addition, subtraction, multiplication, division, complex exponentials, and trigonometric functions. Specifically, you must be able to compute the amplitude and phase angle of the back-reflected beam <em>R</em><sub>2</sub>, and the exact phase difference between beams <em>r</em><sub>1</sub> and <em>R</em><sub>2</sub>!
            </p>
            <p className="leading-relaxed">
              Is this a high bar? Not at all! It is elementary undergraduate mathematics. Yet it is the exact threshold required to judge whether Wave Mechanics Theory or Impedance Matching Theory is true!
            </p>
            <p className="leading-relaxed">
              Shockingly, the overwhelming majority of modern microwave absorption researchers lack this elementary ability! They only know how to feed permittivity and permeability into commercial software or pre-made spreadsheet templates for fixed calculations. Ask them to compute anything outside the template—like the phase of <em>R</em><sub>2</sub>—and they are completely helpless.
            </p>
            <p className="leading-relaxed">
              Because they cannot verify the math independently, they simply parrot traditional errors. That is why, in my 2025 SSRN paper <em>The Theoretical Poverty of Modern Academia</em>, I diagnosed contemporary science as suffering from widespread intellectual decline.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 3 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-cyan-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-cyan-700 text-white rounded-full flex items-center justify-center text-xs">3</span>
              Scene 3: Inside Li et al. (2025) Table S3 — Checking Amplitudes and Phase Differences
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~135 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Acknowledging honest numerical calculation while inspecting the numbers carefully.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Zoom in on Table S3 and Fig. 7(c, d) of Li et al. (2025): R<sub>M</sub>(d<sup>&minus;</sup>) = 0.5587e<sup>&minus;3.080i</sup> vs. V(t,d<sup>&minus;</sup>)/V(i,d<sup>&minus;</sup>) = 0.5589e<sup>0.059i</sup>, difference 0.0002, RL<sub>min</sub> = &minus;72.3 dB.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Table S3 Proof: Amplitude Gap = 0.0002 &amp; Phase Difference &approx; 180&deg; Yields &minus;72.3 dB!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-emerald-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-emerald-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Now look at what Li et al. actually achieved in their Supplementary Material and Figure 7.
            </p>
            <p className="leading-relaxed">
              Unlike template-driven authors, they derived the full reflection loss formula in their Appendix from Fresnel reflection <em>R</em><sub>M</sub>(<em>d</em><sup>&minus;</sup>) and the infinite sum of transmitted back-beams <em>V</em>(<em>t</em>,<em>d</em><sup>&minus;</sup>)/<em>V</em>(<em>i</em>,<em>d</em><sup>&minus;</sup>), and explicitly evaluated complex numbers for all five samples in Table S3!
            </p>
            <p className="leading-relaxed">
              Look at their top-performing sample, CoFe<sub>2</sub>O<sub>4</sub> at 9.2 gigahertz and 2.67 millimeters: the front reflection amplitude is 0.5587, while the total back-beam amplitude is 0.5589—an amplitude difference of just 0.0002! Meanwhile, their phase difference is 179.85 degrees, right at destructive cancellation!
            </p>
            <p className="leading-relaxed">
              Because the two reflected beams nearly match in amplitude and sit opposite in phase, they annihilate each other—producing an extraordinary reflection loss of minus 72.3 decibels!
            </p>
            <p className="leading-relaxed">
              Notice also that for Fe<sub>3</sub>O<sub>4</sub>, Co<sub>0.25</sub>Fe<sub>2.75</sub>O<sub>4</sub>, and Co<sub>0.5</sub>Fe<sub>2.5</sub>O<sub>4</sub>, the phase differences in Table S3 are 181.91, 182.37, and 182.60 degrees—all strictly above 180 degrees, matching our Wave Mechanics attenuation-shift prediction!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 4 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-cyan-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-cyan-700 text-white rounded-full flex items-center justify-center text-xs">4</span>
              Scene 4: Why Having the Math Is Not Enough — Still Trapped by |Z<sub>in</sub>/Z<sub>0</sub>| &approx; 1
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~135 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Exposing the conceptual contradiction inside Section 3.3 and Figure 7(a, b).
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Highlight Page 18 quote: &ldquo;...the impedance matching properties of the absorber were calculated in Fig. 7(a, b)... |Zin/Z0| values... are close to 1, but RLmin only occur at 8.4 GHz and 9.2 GHz...&rdquo;
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Why Did They Still Present |Zin/Z0| as &lsquo;Impedance Matching&rsquo;?&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-rose-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-rose-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;So if Li et al. already computed the exact wave-cancellation numbers in Table S3, why isn&apos;t their work a clean break from the past?
            </p>
            <p className="leading-relaxed">
              Because having complex arithmetic skill alone is still not enough! Look closely at Page 18 and Figures 7(a) and 7(b):
            </p>
            <p className="leading-relaxed">
              Right before invoking wave cancellation, they write: <em>&lsquo;To gain further insight... the impedance matching properties of the absorber were calculated in Fig. 7(a, b)... |Z<sub>in</sub>/Z<sub>0</sub>| values in the 8.0–9.2 GHz and 8.64–11.04 GHz ranges are close to 1, but the RL<sub>min</sub> only occur at 8.4 GHz and 9.2 GHz, respectively, which can be explained through the phase cancellation model.&rsquo;</em>
            </p>
            <p className="leading-relaxed">
              Do you see the subtle trap they fell into? They still treated |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| = 1 as the valid domain of &lsquo;impedance matching,&rsquo; and treated wave cancellation merely as a helper tool to pick the exact peak inside that matching window! And throughout the Abstract and Conclusions, they continued claiming that material composition and intrinsic dielectric/magnetic losses govern the absorption peak.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 5 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-cyan-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-cyan-700 text-white rounded-full flex items-center justify-center text-xs">5</span>
              Scene 5: Z<sub>in</sub> = Z<sub>0</sub> Belongs to Transmission Line Theory, Not Impedance Matching
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~150 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Delivering the decisive theoretical clarification from J. Appl. Phys. 2023 (134, 045303).
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Diagram: Transmission Line Theory yields RL = (Zin &minus; Z0)/(Zin + Z0) = r1 + R2. Zin = Z0 means RL = 0 (r1 + R2 = 0), NOT &ldquo;wave enters freely.&rdquo;
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Zin = Z0 Is a Theorem of Transmission Line Theory—Misread by Impedance Matching!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-indigo-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-indigo-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Let us state the mathematical truth with absolute clarity, as proved in our 2023 <em>Journal of Applied Physics</em> paper (134, 045303):
            </p>
            <p className="leading-relaxed">
              Wave mechanics proves that when a film absorbs all incident microwaves, the front-interface beam <em>r</em><sub>1</sub> and the back-reflected beam <em>R</em><sub>2</sub> cancel completely—equal amplitude, opposite phase—yielding the strongest absorption peak right where <em>Z</em><sub>in</sub> equals <em>Z</em><sub>0</sub>.
            </p>
            <p className="leading-relaxed">
              HOWEVER, observing that the strongest peak in experimental data satisfies <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> does NOT mean Impedance Matching Theory accounted for phase and wave superposition!
            </p>
            <p className="leading-relaxed">
              Why? Because obtaining the strongest absorption peak at <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> is an exact mathematical result of <strong>Transmission Line Theory</strong>, NOT Impedance Matching Theory!
            </p>
            <p className="leading-relaxed">
              Impedance Matching Theory was fabricated out of a catastrophic misinterpretation of Transmission Line Theory&apos;s <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> condition!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 6 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-cyan-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-cyan-700 text-white rounded-full flex items-center justify-center text-xs">6</span>
              Scene 6: Film vs. Material — How Impedance Matching Abandoned Wave Superposition
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~135 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Contrasting real film boundary interference against material-property storytelling.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Citation: Liu, Liu, Drew, <em>J. Magn. Magn. Mater.</em> 2024, 593, 171850 (&ldquo;Distinguishing Film from Material&rdquo;). Side-by-side split showing Film (2-interface wave interference) vs. Bulk Material (intrinsic permittivity/permeability).
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Impedance Matching Abandoned Wave Superposition &amp; Conflated Film with Material!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-700 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Look at what Impedance Matching Theory actually did once it stole <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> from Transmission Line Theory, as we exposed in <em>Journal of Magnetism and Magnetic Materials</em> (2024, 593, 171850):
            </p>
            <p className="leading-relaxed">
              It completely <strong>abandoned</strong> the wave superposition principle inside transmission line theory!
            </p>
            <p className="leading-relaxed">
              Instead, by confusing a two-interface <strong>film</strong> with a bulk <strong>material</strong>, it invented a false physical story: that <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> means more incident microwave energy enters the material, and that higher intrinsic material attenuation produces stronger reflection loss <em>RL</em>!
            </p>
            <p className="leading-relaxed">
              From there, mainstream authors concluded that chemical composition and microstructure directly create film absorption peaks—completely erasing wave interference! Once you leave wave superposition behind, you can no longer explain why thickness tunes peaks, why |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| often far exceeds one at absorption peaks, or why lossless matched films have no peaks at all!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 7 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-cyan-950 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-cyan-700 text-white rounded-full flex items-center justify-center text-xs">7</span>
              Scene 7: Epilogue — Not Paradigm-Correcting, Yet Valuable Third-Party Proof
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~125 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Balanced, rigorous final verdict guiding future researchers on how to truly advance the field.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Verdict card: &ldquo;Competent Complex Math &rarr; Verified Wave Mechanics | Retained |Zin/Z0| Framing &rarr; Not Paradigm-Correcting.&rdquo; Link to Academic Critique Hub.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Master the Math—Then Abandon the Flawed Impedance Matching Narrative!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-900 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;This brings us to our balanced, objective verdict on Li et al. (2025):
            </p>
            <p className="leading-relaxed">
              Comparing Wave Mechanics Theory against Impedance Matching Theory cannot stop at checking whether the strongest peak falls near <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub>. Because this paper only examined peak coincidence with <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> without challenging the flawed film-versus-material dogma of impedance matching, it is <strong>not</strong> a paradigm-correcting paper that sets the field straight.
            </p>
            <p className="leading-relaxed">
              At the same time, we welcome honest scientific computation! Because the authors mastered the complex arithmetic that ninety-nine percent of their peers avoid, their Table S3 and Figure 7 stand as valuable, independent third-party validation confirming the predictive accuracy of Wave Mechanics Theory on Co<sub>x</sub>Fe<sub>3&minus;x</sub>O<sub>4</sub> ferrite films.
            </p>
            <p className="leading-relaxed">
              To all young researchers watching: master complex numbers, exponentials, and phase angles—and then have the courage to discard the broken Impedance Matching narrative entirely. Thank you for watching Episode Six of our Forensic Dissection Series.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================== */}
      {/* PART III: YOUTUBE SAFE DESCRIPTION PREVIEW                                */}
      {/* ========================================================================== */}
      <section className="mt-12 space-y-4 font-sans">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <FileText className="w-6 h-6 text-cyan-700" />
            <h2>Part III: 100% YouTube-Safe Description (Zero &lt; or &gt; Characters)</h2>
          </div>
          <button
            onClick={() => handleCopyText(youtubeSafeDescription, "desc-li2025-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedSection === "desc-li2025-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedSection === "desc-li2025-bottom" ? "Copied!" : "Copy Clean Description"}
          </button>
        </div>
        <p className="text-xs text-slate-500">
          Note: This description strictly avoids all angle brackets (&lt; and &gt;) to eliminate YouTube Studio&apos;s red validation error box. Ready for direct copy-paste upload.
        </p>
        <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 border border-slate-700">
          {youtubeSafeDescription}
        </pre>
      </section>

      {/* Footer Banner */}
      <div className="mt-12 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          Forensic Dissection Series &bull; Episode 6 &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-cyan-100 text-cyan-900 px-2.5 py-1 rounded-md font-semibold">
            J. Alloys Compd. 2025
          </span>
          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
            SSRN 5463155
          </span>
          <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md font-semibold">
            Third-Party Validation
          </span>
        </div>
      </div>
    </article>
  );
}
