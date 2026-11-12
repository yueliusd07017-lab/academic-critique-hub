import React, { useState } from "react";
import { Video, ShieldAlert, Copy, Check, BookOpen, Scale, FileText, Skull, AlertTriangle, Compass, Calculator, CheckCircle2 } from "lucide-react";

export default function ForensicDissectionZhang2020JPDScript() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const youtubeSafeDescription = `Title: Deconstructing Zhang et al. (J. Phys. D 2020): Why Eq. (6) Is Mathematically Invalid & Why "Experimentally Proven" Falsehoods Expose Modern Alchemy | Forensic Dissection Series Case 5

Welcome to Episode 5 of our Forensic Dissection Series: "Why Modern Science Is in a Dark Age."

Can an invalid mathematical derivation yield an erroneous formula that is then "experimentally proven" by statistical data fitting in a flagship physics journal?

In this fifth forensic autopsy, Dr. Yue Liu dissects:
S. Zhang, T. Wang, M. Gao, P. Wang, H. Pang, L. Qiao, and F. Li, "Strict proof and applicable range of the quarter-wavelength model for microwave absorbers", Journal of Physics D: Applied Physics 2020, 53(26), 265004 (DOI: 10.1088/1361-6463/ab79da).

The authors claimed to establish a "strict proof" of the quarter-wavelength model and derived Equation (6) and Equation (9) to predict peak-thickness deviations. Remarkably, they claimed experimental measurements "confirmed" their invalid Equation (9)!

In this episode and treatise, Dr. Yue Liu exposes:

1. WHY EQUATION (6) (psi = psi1 + theta = 2n*pi) IS FATALLY WRONG:
- Non-Constant A Violation: Zhang et al. freeze A = |Zin/Z0| as a constant during differentiation. As proven in Mater. Chem. Phys. 2022 (290, 126521), A is a dynamic function of psi1, thickness d, and frequency nu.
- Breakdown in Lossless and Matched Limits: When mu_r'' = eps_r'' = 0 (no loss) or mu_r = eps_r (wave impedance equal to air), |RL| has ZERO absorption minima whatsoever—yet Zhang's Eq. (6) and (9) falsely predict absorption peaks!
- Maxima vs. Minima Inversion and Attenuation Shift: From wave mechanics (Mater. Chem. Phys. 2022, 291, 126601; Optics & Laser Tech. 2024, 178, 111211), pure phase cancellation places |RL| minima at 180 degrees ((2n+1)*pi) and maxima at 360 degrees (2n*pi). Because material attenuation decays monotonically with thickness, the actual |RL| minimum is always shifted PAST 180 degrees (greater than 180 deg) and the maximum shifts BEFORE 360 degrees (less than 360 deg). Only in lossless media does the minimum sit at 180 degrees!
- Contradiction with |Zin/Z0| Plots: As shown in Physica B 2023 (666, 415108, Figs. 5c, 5d, 6) and Physica Scripta 2022 (97, 015806, Fig. 5b), extrema of |Zin| and |RL| do NOT coincide, do not occur at 180 degrees, and absorption peaks regularly occur where |Zin/Z0| is far greater than 1!

2. THE ILLUSION OF "EXPERIMENTAL VERIFICATION":
How did Zhang et al. use experimental data to "prove" a mathematically invalid Equation (9)?
Because statistical fitting without underlying logical causality is spurious! Just as 10,000+ papers fitting the same pattern cannot validate impedance matching, statistical correlation between unrelated quantities proves nothing.

3. WHY QUALITATIVE LOGIC IS SUPERIOR TO BLIND QUANTITATIVE FITTING:
Quantitative calculation of RL predicts peak coordinates, yet it never revealed why minima consistently shift above 180 degrees and maxima below 360 degrees. Qualitative deductive logic uncovered this universal law first, and experimental data obeyed it!
Science is rigorous logic and theory; ungrounded experiment is alchemy.

TIMESTAMPS:
00:00 - Scene 1: Prologue — "Strict Proof" in J. Phys. D & The Alchemy Paradox
02:15 - Scene 2: The Calculus Blunder Behind Eq. (6): Freezing Variable A
04:50 - Scene 3: Lossless & Matched Counterexamples (Zero Minima vs. False Peaks)
07:10 - Scene 4: Why Real Minima Shift Past 180 Degrees (Attenuation vs. Phase)
09:40 - Scene 5: Physica B & Physica Scripta Proof: |Zin/Z0| Far Greater Than 1
12:00 - Scene 6: The Delusion of "Experimentally Proven" False Mathematics
14:20 - Scene 7: Epilogue — Why Qualitative Logic Commands Experiment

Primary Theoretical References:
- Zhang et al., J. Phys. D: Appl. Phys. 2020, 53(26), 265004 (DOI: 10.1088/1361-6463/ab79da)
- Liu, Liu, Drew, Mater. Chem. Phys. 2022, 290, 126521 (Part 3: Inverse Relationship)
- Liu, Liu, Drew, Mater. Chem. Phys. 2022, 291, 126601 (Part 2: Real Mechanism)
- Liu, Liu, Drew, Physica Scripta 2022, 97(1), 015806 (DOI: 10.1088/1402-4896/ac3b42)
- Liu, Yin, Drew, Liu, Physica B: Condensed Matter 2023, 666, 415108
- Liu, Liu, Drew, Optics and Laser Technology 2024, 178, 111211
- Liu, Y., SSRN 5376778 (2025) & Preprints.org 10.20944/preprints202507.1953.v1
- Academic Critique Hub: https://github.com/academic-critique/hub

#AcademicIntegrity #WaveMechanics #PeerReviewCrisis #ScientificMethod #DeductiveLogic #CargoCultScience #QuarterWavelength`;

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="forensic-dissection-zhang2020-jpd-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-rose-100 text-rose-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-rose-300 flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-rose-700" />
            Essay GQ &bull; Forensic Dissection Case 5
          </span>
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
            J. Phys. D 2020 &bull; Invalid Eq. (6) &amp; Eq. (9) &bull; Deductive Logic vs. Alchemy
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Forensic Dissection Case 5: Deconstructing Zhang et al. (J. Phys. D 2020) — Why Equation (6) (&psi; = &psi;<sub>1</sub> + &theta; = 2n&pi;) Is Mathematically Invalid &amp; How Experimental Statistics &ldquo;Verify&rdquo; Falsehoods
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Complete Analytical English Essay on the Mathematical Collapse of Equation (6), Full 7-Scene Digital Avatar Video Broadcast Script, and 100% YouTube-Compliant Metadata.
        </p>
        <div className="text-xs text-slate-400 mt-2 font-mono">
          Author: Dr. Yue Liu (刘跃) &bull; Wave Mechanics Theoretical Archives &bull; Forensic Case 5
        </div>
      </div>

      {/* Abstract Callout */}
      <div className="bg-rose-50/70 border-l-4 border-rose-600 p-5 rounded-r-xl mb-8 font-sans text-sm text-slate-800 space-y-2">
        <div className="font-bold text-rose-950 flex items-center gap-2">
          <Skull className="w-5 h-5 text-rose-700 shrink-0" />
          The Supreme Irony of Modern Empiricism: Using Experiments to &ldquo;Prove&rdquo; Broken Calculus
        </div>
        <p>
          In 2020, Zhang et al. published <em>&ldquo;Strict proof and applicable range of the quarter-wavelength model for microwave absorbers&rdquo;</em> in the <em>Journal of Physics D: Applied Physics</em> (53, 265004, DOI: 10.1088/1361-6463/ab79da). By freezing a dynamic input impedance amplitude <em>A</em> = |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| as a constant during partial differentiation, they derived the mathematically invalid <strong>Equation (6)</strong> (&psi; = &psi;<sub>1</sub> + &theta; = 2<em>n</em>&pi;) and constructed <strong>Equation (9)</strong> to predict deviations from the quarter-wavelength model—and then triumphantly used experimental data to &ldquo;verify&rdquo; Equation (9)! This forensic treatise proves in rigorous detail why Equation (6) is false from every angle, and why claiming that <em>&ldquo;experiments cannot be wrong, only theories can be wrong&rdquo;</em> reduces modern science to medieval alchemy.
        </p>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl mb-8 font-sans">
        <div className="text-xs text-slate-600">
          <strong>Package Contents:</strong> Part I: Rigorous Mathematical Critique of Eq. (6) &bull; Part II: 7-Scene Broadcast Script &bull; Part III: Safe YouTube Description
        </div>
        <button
          onClick={() => handleCopyText(youtubeSafeDescription, "desc-zhang2020")}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition shadow-xs cursor-pointer"
        >
          {copiedSection === "desc-zhang2020" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copiedSection === "desc-zhang2020" ? "Description Copied!" : "Copy Safe YouTube Description"}
        </button>
      </div>

      {/* ========================================================================== */}
      {/* PART I: COMPLETE ENGLISH ANALYTICAL ESSAY ON WHY EQUATION (6) IS WRONG    */}
      {/* ========================================================================== */}
      <section className="space-y-6 mb-14">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 font-sans font-bold text-xl text-slate-950">
          <Calculator className="w-6 h-6 text-indigo-700" />
          <h2>Part I: Rigorous Theoretical Essay — Why Equation (6) (&psi; = &psi;<sub>1</sub> + &theta; = 2n&pi;) in Zhang et al. (2020) Is Mathematically and Physically Wrong</h2>
        </div>

        <p>
          In Section 2.3.1 of Zhang et al. (<em>J. Phys. D: Appl. Phys.</em> 2020, 53, 265004), the authors purport to provide a &ldquo;strict proof&rdquo; of the quarter-wavelength model. Expressing the normalized input impedance as <em>Z</em><sub>p</sub> = <em>A</em> exp(&minus;<em>j</em>&psi;), where <em>A</em> = |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| and &psi; = &psi;<sub>1</sub> + &theta;, they hold <em>A</em> constant while differentiating the reflection coefficient magnitude |&Gamma;| with respect to &psi;, arriving at their cornerstone <strong>Equation (6)</strong>:
        </p>

        <div className="bg-rose-50 border border-rose-300 p-4 rounded-xl text-center font-mono text-sm font-bold text-rose-950">
          Equation (6) [Ref. 6]: &nbsp;&nbsp; &psi; = &psi;<sub>1</sub> + &theta; = 2<em>n</em>&pi; &nbsp;&nbsp; (claimed condition for |RL| peak minima)
        </div>

        <p>
          As definitively refuted in <strong>Liu, Liu, and Drew (<em>Materials Chemistry and Physics</em> 2022, 290, 126521)</strong>—where Eq. (6) of Ref. [6] is analyzed as Equation (17*)—this derivation is fundamentally broken on five independent mathematical and physical grounds:
        </p>

        {/* Sub-point 1 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            1. Multivariate Calculus Violation: A (= |Z<sub>in</sub>/Z<sub>0</sub>|) Is Not a Constant
          </h3>
          <p className="text-sm leading-relaxed text-slate-700">
            Zhang et al. justify freezing <em>A</em> by claiming that <em>&ldquo;A changes slowly and monotonically with f&rdquo;</em> near peak frequencies, and therefore treat &part;<em>A</em>/&part;&psi; &equiv; 0. This is mathematically illegitimate. As demonstrated explicitly in <em>Mater. Chem. Phys.</em> 2022, 290, 126521 (Eqs. 5, 11*, 17*, and 18):
          </p>
          <blockquote className="border-l-4 border-indigo-600 pl-4 py-2 italic text-slate-800 bg-white rounded-r text-xs md:text-sm">
            &ldquo;If A in equation (11*) were a constant, then the condition for the minimum of |RL(x<sub>1</sub><sup>&minus;</sup>)| with respect to &psi; could be obtained from equation (18)... As is apparent from equation (5), A is not a constant since both &alpha;<sub>P</sub> and &alpha;<sub>j</sub> are affected by &psi;<sub>1</sub>, d, and &nu;. This is why the derivations provided in Ref. [6] lead to a series of wrong conclusions.&rdquo;
          </blockquote>
          <p className="text-sm leading-relaxed text-slate-700">
            Because <em>A</em> and |<em>RL</em>| vary simultaneously as coupled functions of thickness <em>d</em>, frequency &nu;, and phase angle &psi;<sub>1</sub>, one cannot freeze <em>A</em> to locate extrema of |<em>RL</em>|. In fact, directly differentiating |<em>RL</em>| with respect to &psi; proves that the true extrema do NOT occur at &psi; = <em>n</em>&pi;.
          </p>
        </div>

        {/* Sub-point 2 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            2. Decisive Counterexamples: Zero Minima When &mu;<sub>r</sub>&Prime; = &epsilon;<sub>r</sub>&Prime; = 0 or &mu;<sub>r</sub> = &epsilon;<sub>r</sub>
          </h3>
          <p className="text-sm leading-relaxed text-slate-700">
            Any valid necessary condition must hold across physical boundary limits. Test Equation (6) under two elementary regimes where &psi;<sub>1</sub> = 0:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 ml-1">
            <li>
              <strong>Lossless Limit (&mu;<sub>r</sub>&Prime; = &epsilon;<sub>r</sub>&Prime; = 0):</strong> The film absorbs zero microwaves; |<em>RL</em>(<em>x</em><sub>1</sub><sup>&minus;</sup>)| &equiv; 1 (a flat constant) across all <em>d</em> and &nu;. There are <strong>zero absorption minima</strong> at any &psi;, yet Eq. (6) still predicts peaks!
            </li>
            <li>
              <strong>Matched Wave Impedance Limit (&mu;<sub>r</sub> = &epsilon;<sub>r</sub>):</strong> Front-interface reflection <em>r</em><sub>1</sub> vanishes completely. |<em>RL</em>(<em>x</em><sub>1</sub><sup>&minus;</sup>)| is a purely <strong>monotonic exponential decay</strong> with increasing thickness <em>d</em>—again displaying <strong>no minima at all</strong>.
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-slate-800 font-semibold">
            Hence, replacing |tan(&theta;)| with |tan(<em>n</em>&pi; &minus; &psi;<sub>1</sub>)| via Eq. (17*)/Eq. (6) does not guarantee minima of |<em>RL</em>|.
          </p>
        </div>

        {/* Sub-point 3 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            3. Peak–Valley Inversion and the Attenuation Shift (&gt; 180&deg; for Minima, &lt; 360&deg; for Maxima)
          </h3>
          <p className="text-sm leading-relaxed text-slate-700">
            From our rigorous Eq. (18) in <em>Mater. Chem. Phys.</em> 290 (2022) 126521, solving &psi; = &psi;<sub>1</sub> + &theta; = <em>n</em>&pi; under the idealized non-attenuating limit (where |<em>R</em><sub>2</sub>| is held constant) places |<em>RL</em>| <strong>minima at (2<em>n</em>+1)&pi; (180&deg; destructive phase difference)</strong> and |<em>RL</em>| <strong>maxima at 2<em>n</em>&pi; (360&deg; constructive phase difference)</strong>, because the phase of <em>RL</em> closely tracks the phase difference between front and back reflections <em>r</em><sub>1</sub> and <em>r</em><sub>2</sub>. Zhang et al. inverted peak and valley conditions by asserting &psi; = 2<em>n</em>&pi; for minima!
          </p>
          <p className="text-sm leading-relaxed text-slate-700">
            Even more profoundly, as proven in <strong>Liu, Liu, Drew (<em>Mater. Chem. Phys.</em> 2022, 291, 126601; <em>Optics and Laser Technology</em> 2024, 178, 111211)</strong>, real absorbing films exhibit <strong>material attenuation</strong>:
          </p>
          <div className="bg-white border border-slate-200 p-3.5 rounded-lg text-xs md:text-sm space-y-1.5 text-slate-700 font-sans">
            <p>
              &bull; <strong>Pure Phase-Angle Effect (constant |R<sub>2</sub>|):</strong> At 180&deg; and 360&deg;, the rate of change of |<em>RL</em>| with phase angle is zero. Between 180&deg; and 270&deg;, the positive phase-angle slope increases; between 270&deg; and 360&deg;, it decreases, as demanded by energy conservation.
            </p>
            <p>
              &bull; <strong>Material Attenuation Effect:</strong> Because bulk attenuation parameters are intrinsic material properties, the rate at which attenuation reduces |<em>R</em><sub>2</sub>| (and pulls |<em>RL</em>| downward) with increasing thickness/phase angle is a <strong>constant negative rate</strong>.
            </p>
            <p className="font-semibold text-indigo-950">
              &bull; Net Result: When the phase difference crosses 180&deg;, the positive phase-angle slope starts from zero while the negative attenuation slope is still active, pushing |RL| further down! Thus, true |RL| minima always occur at phase differences strictly GREATER than 180&deg; (&gt; 180&deg;), and true maxima occur strictly LESS than 360&deg; (&lt; 360&deg;). Only in a completely lossless film (where |RL| = 1) does the phase boundary remain pinned at 180&deg;!
            </p>
          </div>
        </div>

        {/* Sub-point 4 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            4. Direct Contradiction with |Z<sub>in</sub>/Z<sub>0</sub>| Profiles in Physica B (2023) &amp; Physica Scripta (2022)
          </h3>
          <p className="text-sm leading-relaxed text-slate-700">
            Zhang et al. assumed |<em>Z</em><sub>in</sub>| (= <em>A</em>) varies slowly and monotonically across absorption peaks and tracks the same boundary condition as |<em>RL</em>|. Numerical and theoretical verification in our peer-reviewed publications demolishes this assumption:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-700 ml-1">
            <li>
              <strong><em>Physica B: Condensed Matter</em> 2023, 666, 415108 (Figs. 5c, 5d, and Fig. 6):</strong> The extrema of |<em>Z</em><sub>in</sub>| and the extrema of |<em>RL</em>| do NOT occur at the same position, and neither occurs at 180&deg; phase difference. Furthermore, at the first |<em>RL</em>| absorption peak in Figs. 5c and 5d, |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| hits a local peak <strong>far greater than 1</strong>—meaning absorption peaks occur precisely where <em>Z</em><sub>in</sub> deviates maximally from <em>Z</em><sub>0</sub>, flatly refuting impedance matching theory!
            </li>
            <li>
              <strong><em>Physica Scripta</em> 2022, 97(1), 015806 (Fig. 5b):</strong> Both of the first two |<em>RL</em>| absorption peaks occur at thickness/frequency coordinates where |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| is far greater than 1.
            </li>
          </ul>
        </div>

        {/* Sub-point 5: Epistemological Critique */}
        <div className="bg-indigo-50/70 border border-indigo-200 p-5 rounded-xl space-y-3">
          <h3 className="font-sans font-bold text-indigo-950 text-base flex items-center gap-2">
            <Compass className="w-5 h-5 text-indigo-700 shrink-0" />
            5. The Epistemological Lesson: Why Science Is Deductive Logic, Not Statistical Alchemy
          </h3>
          <p className="text-sm leading-relaxed text-slate-800">
            The deepest irony of Zhang et al. (2020) is that after deriving the mathematically invalid Equation (6) and compounding it into Equation (9), the authors successfully used experimental data to &ldquo;prove&rdquo; that Equation (9) predicts deviations from the quarter-wavelength model! This exposes five fatal illusions of modern empiricist dogma:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-slate-800 ml-1">
            <li>
              <strong>Statistical Correlation Without Logical Causality Is Spurious:</strong> As proved in <em>The Misapplication of Statistical Methods</em> (SSRN 5376778) and <em>Why Are Research Findings Supported by Experimental Data Often False?</em> (Preprints.org 10.20944/preprints202507.1953.v1), if no causal logic links two variables, statistical data can still fabricate an illusion of agreement. Ten thousand papers using the same confirmation-biased template do not prove impedance matching.
            </li>
            <li>
              <strong>One Counterexample Refutes a Dogma:</strong> A single rigorous counterexample invalidates a universal claim and opens new scientific horizons. Gatekeepers who reject single counterexamples while demanding &ldquo;mountains of counter-evidence&rdquo; ensure that opposing evidence can never accumulate.
            </li>
            <li>
              <strong>|Z<sub>in</sub>| = |Z<sub>0</sub>| at Strong Peaks Does Not Validate Impedance Matching Mechanism:</strong> Even where the deepest absorption peak satisfies |<em>Z</em><sub>in</sub>| = |<em>Z</em><sub>0</sub>|, that mathematical equality arises from two-beam destructive wave interference (<em>RL</em> = 0), not from incident waves entering the bulk film without front reflection.
            </li>
            <li>
              <strong>Qualitative Theoretical Logic Outranks Quantitative Curve-Fitting:</strong> Quantitative formulas compute peak positions, yet never explained <em>why</em> minima shift past 180&deg; and maxima shift below 360&deg;. It was pure <strong>qualitative deductive logic</strong> that predicted this invariant law, and experimental measurements subsequently confirmed it!
            </li>
            <li>
              <strong>Theory Judges Experiment, Not Vice Versa:</strong> Experiments cannot violate valid mathematical logic. Purely empirical trial-and-error untethered from first-principles logic is medieval alchemy; true science is uncompromising logical deduction.
            </li>
          </ol>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 7-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <div className="space-y-8">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 font-sans font-bold text-xl text-slate-950">
          <Video className="w-6 h-6 text-rose-600" />
          <h2>Part II: The Complete Digital Avatar Broadcast Script (7 Scenes)</h2>
        </div>

        {/* Scene 1 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">1</span>
              Scene 1: Prologue — The &ldquo;Strict Proof&rdquo; in J. Phys. D &amp; The Alchemy Paradox
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~130 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Senior mathematical physicist, calm, piercing, standing before a chalkboard filled with calculus equations.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Title page of <em>J. Phys. D: Appl. Phys.</em> 2020 (53, 265004): &ldquo;Strict proof and applicable range of the quarter-wavelength model...&rdquo; Zoom in on Eq. (6) and Eq. (9).
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;How Can Experimental Data &lsquo;Verify&rsquo; a Mathematically Broken Equation?!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-rose-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-rose-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Welcome back to Episode Five of our Forensic Dissection Series: <em>Why Modern Science Is in a Dark Age</em>.
            </p>
            <p className="leading-relaxed">
              Today, we investigate one of the most devastating ironies in modern physics publishing.
            </p>
            <p className="leading-relaxed">
              In 2020, the prestigious <em>Journal of Physics D: Applied Physics</em> published a paper by S. Zhang, Fashen Li, and colleagues boldly titled: <em>&lsquo;Strict proof and applicable range of the quarter-wavelength model for microwave absorbers.&rsquo;</em>
            </p>
            <p className="leading-relaxed">
              Their goal was to provide a rigorous mathematical derivation—culminating in Equation (6) and Equation (9)—to predict why real absorption peaks deviate from the quarter-wavelength formula.
            </p>
            <p className="leading-relaxed">
              Here is the shocking twist: Equation (6) is mathematically invalid! It violates elementary multivariable calculus. Every conclusion derived from it—including Equation (9)—is physically wrong!
            </p>
            <p className="leading-relaxed">
              Yet, in their paper, the authors presented experimental measurements that supposedly <strong>proved</strong> Equation (9) worked!
            </p>
            <p className="leading-relaxed">
              How can laboratory experiments verify a mathematically broken formula? Join us today as we expose the dark secret behind modern empirical fetishism.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 2 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">2</span>
              Scene 2: The Calculus Blunder Behind Equation (6) — Freezing Variable A
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~145 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Writing differential equations step by step, exposing the illicit assumption.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Quote from Zhang et al.: &ldquo;we assumed that A remained unchanged near peak frequencies...&rdquo; Refutation from Liu et al. (Mater. Chem. Phys. 2022, 290, 126521): A = |Zin/Z0| depends on &psi;1, d, and &nu;.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Calculus Fraud: You Cannot Treat a Coupled Variable A as a Constant!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-indigo-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-indigo-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Let us examine how Zhang et al. derived their infamous Equation (6).
            </p>
            <p className="leading-relaxed">
              They express the normalized input impedance in polar form as <em>Z</em><sub>p</sub> = <em>A</em> times exp(&minus;<em>j</em>&psi;), where <em>A</em> is the amplitude ratio |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>|, and &psi; is the sum &psi;<sub>1</sub> + &theta;.
            </p>
            <p className="leading-relaxed">
              Then, to find the minimum of reflection loss |<em>RL</em>| with respect to the phase &psi;, they write: <em>&lsquo;We assumed that A remained unchanged near peak frequencies in the following differentiations.&rsquo;</em>
            </p>
            <p className="leading-relaxed">
              By freezing <em>A</em> as a constant, they take the derivative, set sin(&psi;) equal to zero, and triumphantly declare Equation (6): &psi; = &psi;<sub>1</sub> + &theta; = 2<em>n</em>&pi;!
            </p>
            <p className="leading-relaxed">
              This is a catastrophic calculus error! As Dr. Yue Liu and Michael Drew proved in <em>Materials Chemistry and Physics</em> (2022, 290, 126521): <em>A</em> is NOT a constant! Both the real and imaginary components determining <em>A</em> are tightly coupled functions of film thickness <em>d</em>, frequency &nu;, and phase &psi;<sub>1</sub>!
            </p>
            <p className="leading-relaxed">
              Freezing a rapidly varying variable during differentiation just to force a convenient answer is not a &lsquo;strict proof&rsquo;—it is mathematical fabrication.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 3 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">3</span>
              Scene 3: Lossless &amp; Matched Counterexamples — Zero Minima vs. False Peaks
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~130 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Testing the formula against exact physical boundary limits.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Plot 1: &mu;r&Prime; = &epsilon;r&Prime; = 0 showing flat horizontal line |RL| = 1. Plot 2: &mu;r = &epsilon;r showing smooth monotonic decay of |RL| with zero peaks.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Two Simple Tests Destroy Eq. (6): Zero Loss and Equal Impedance Have NO Peaks!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-amber-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-amber-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Want immediate proof that Equation (6) is false? Test it against two trivial physical limits where &psi;<sub>1</sub> equals zero!
            </p>
            <p className="leading-relaxed">
              First, consider a completely lossless material where the imaginary permeability and permittivity are zero: &mu;<sub>r</sub>&Prime; = &epsilon;<sub>r</sub>&Prime; = 0. The film absorbs nothing! Across every single thickness and frequency, the reflection coefficient |<em>RL</em>| is identically equal to one. There are zero minima anywhere! Yet Zhang&apos;s Equation (6) blindly predicts absorption peaks!
            </p>
            <p className="leading-relaxed">
              Second, consider the case where permeability equals permittivity: &mu;<sub>r</sub> = &epsilon;<sub>r</sub>. Here, front reflection vanishes, and as film thickness increases, |<em>RL</em>| follows a smooth, monotonic exponential decay with <strong>zero absorption minima at all</strong>!
            </p>
            <p className="leading-relaxed">
              Yet Equation (6) and its replacement of tan(&theta;) continue predicting discrete peaks where none exist. Even more astonishingly, Zhang et al. placed minima at &psi; = 2<em>n</em>&pi;—which in phase-difference coordinates actually corresponds to reflection MAXIMA, whereas destructive cancellation occurs at odd multiples (2<em>n</em>+1)&pi; (180 degrees)!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 4 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">4</span>
              Scene 4: Why Real Minima Always Shift Past 180 Degrees
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~145 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Explaining the interplay between phase cancellation and bulk attenuation with serene authority.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Curve animation from Mater. Chem. Phys. 2022 (291, 126601): Phase derivative = 0 at 180&deg;, negative constant attenuation slope pushes minimum past 180&deg;, maximum below 360&deg;.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Attenuation Shift Law: Minima Occur Past 180&deg;; Maxima Below 360&deg;!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Now let us reveal the true mathematical physics of where absorption minima actually occur—a law discovered through rigorous qualitative logic in <em>Materials Chemistry and Physics</em> (2022, 291, 126601) and <em>Optics and Laser Technology</em> (2024, 178, 111211).
            </p>
            <p className="leading-relaxed">
              Consider the two forces shaping the reflection loss curve:
            </p>
            <p className="leading-relaxed">
              First, the pure <strong>phase-angle interference effect</strong> (holding |<em>R</em><sub>2</sub>| constant): Exactly at 180 degrees phase difference, destructive interference reaches its trough, so the slope with respect to angle is zero. From 180 to 270 degrees, this upward slope grows steeper.
            </p>
            <p className="leading-relaxed">
              Second, the <strong>material attenuation effect</strong>: As thickness increases, bulk absorption pulls the back-reflected amplitude |<em>R</em><sub>2</sub>| downward at a steady, negative constant rate determined by the material&apos;s intrinsic properties.
            </p>
            <p className="leading-relaxed">
              What happens right at 180 degrees? The upward slope of the phase effect is zero, while the downward pull of material attenuation is still active! Therefore, total |<em>RL</em>| continues dropping past 180 degrees until the upward phase slope cancels the downward attenuation slope!
            </p>
            <p className="leading-relaxed">
              Thus, by pure mathematical logic: <strong>Absorption minima always occur at phase differences strictly GREATER than 180 degrees, and maxima occur strictly LESS than 360 degrees!</strong> Only when material loss is zero does the minimum sit at 180 degrees—precisely where absorption doesn&apos;t exist!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 5 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">5</span>
              Scene 5: Physica B &amp; Physica Scripta Proof — When |Z<sub>in</sub>/Z<sub>0</sub>| Is Far Greater Than 1
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~135 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Displaying exact plotted figures from Dr. Liu&apos;s published counter-proofs.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Plots from Physica B 2023 (666, 415108, Figs. 5c, 5d, 6) and Physica Scripta 2022 (97, 015806, Fig. 5b) showing |RL| absorption peaks coinciding with huge |Zin/Z0| spikes.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Peak Absorption Where |Zin/Z0| Deviates MAXIMALLY From 1!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-rose-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-rose-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Even more devastating for Zhang et al.&apos;s assumption that |<em>Z</em><sub>in</sub>| remains flat and passive near absorption peaks are the exact numerical plots published by Liu et al. in <em>Physica B: Condensed Matter</em> (2023, 666, 415108) and <em>Physica Scripta</em> (2022, 97, 015806).
            </p>
            <p className="leading-relaxed">
              Look at Figures 5c, 5d, and 6 of <em>Physica B</em>, and Figure 5b of <em>Physica Scripta</em>:
            </p>
            <p className="leading-relaxed">
              First, the extrema of |<em>Z</em><sub>in</sub>| and the extrema of |<em>RL</em>| do not occur at the same frequency or thickness, and neither occurs at 180 degrees phase difference!
            </p>
            <p className="leading-relaxed">
              Second, at the first strong |<em>RL</em>| absorption peaks in those curves, the ratio |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| shoots up to a massive peak <strong>far greater than one</strong>!
            </p>
            <p className="leading-relaxed">
              Think about what that means: The material achieves strong microwave absorption precisely at the point where its input impedance deviates <strong>maximally</strong> from air impedance! That single counterexample shatters both Zhang et al.&apos;s calculus shortcut and fifty years of impedance matching dogma.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 6 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">6</span>
              Scene 6: The Delusion of &ldquo;Experimentally Proven&rdquo; False Mathematics
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~135 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Exposing the epistemological rot of &ldquo;experiment cannot be wrong.&rdquo;
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Citations to SSRN 5376778 and Preprints.org (2025); quote: &ldquo;10,000 papers from one template prove nothing; 1 counterexample invalidates the dogma.&rdquo;
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Statistics Without Causal Logic Is Pure Spurious Illusion!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-emerald-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-emerald-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;How, then, could Zhang et al. use experimental data to &lsquo;verify&rsquo; Equation (9)—a formula built on broken calculus?
            </p>
            <p className="leading-relaxed">
              This is the ultimate indictment of the modern mantra: <em>&lsquo;Experiments cannot be wrong; only theories can be wrong.&rsquo;</em>
            </p>
            <p className="leading-relaxed">
              As Dr. Yue Liu demonstrated in his statistical philosophy papers, statistics can only validate a relationship when a genuine logical and physical connection already exists. When no true causal link exists, curve-fitting experimental data creates pure spurious illusions—no matter how high the R-squared value looks!
            </p>
            <p className="leading-relaxed">
              In microwave absorption, over ten thousand papers claim experimental verification of impedance matching simply by copying the same superficial template while ignoring every contradiction. Yet when a lone scholar uncovers a decisive mathematical counterexample, journal gatekeepers reject it, demanding &lsquo;massive statistical evidence&rsquo; to overturn ten thousand papers!
            </p>
            <p className="leading-relaxed">
              Notice the Catch-22: If you refuse to publish single counterexamples because they lack volume, opposing evidence can never accumulate! That is how academic cartels protect dead dogmas.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 7 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">7</span>
              Scene 7: Epilogue — Why Qualitative Logic Commands Experiment
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~120 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Unyielding defense of theoretical reason and scientific sovereignty.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Banner: &ldquo;Science Is Logic; Experiment Without Logic Is Alchemy.&rdquo; Link to Academic Critique Hub.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Qualitative Logic Discovers Universal Truths Quantitative Plots Miss!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-900 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Most researchers dismiss qualitative analysis as inferior to quantitative calculation. In reality, <strong>qualitative logical analysis is often far deeper!</strong>
            </p>
            <p className="leading-relaxed">
              Numerical computers can evaluate the reflection loss formula and plot exact peak numbers. Yet quantitative numbers alone never revealed the universal law that absorption minima shift past 180 degrees and maxima shift below 360 degrees.
            </p>
            <p className="leading-relaxed">
              It was rigorous qualitative logical reasoning that uncovered that invariant truth—and when we checked the experimental numbers afterward, the data obeyed the logic without exception!
            </p>
            <p className="leading-relaxed">
              Even the reflection loss formula itself could never have been discovered by blind experimental trial and error. It is a triumph of theoretical deduction from Maxwell&apos;s equations.
            </p>
            <p className="leading-relaxed">
              Remember this fundamental truth: <strong>Science is logic; science is theory. Experiment divorced from logic is medieval alchemy.</strong>
            </p>
            <p className="leading-relaxed">
              Explore the complete mathematical derivations of Equation (6) and the full wave-mechanics archive on our Academic Critique Hub. Stay rigorous, question every authority, and never let statistical illusions blind your reason. Thank you for watching.&rdquo;
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
            <FileText className="w-6 h-6 text-rose-600" />
            <h2>Part III: 100% YouTube-Safe Description (Zero &lt; or &gt; Characters)</h2>
          </div>
          <button
            onClick={() => handleCopyText(youtubeSafeDescription, "desc-zhang2020-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedSection === "desc-zhang2020-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedSection === "desc-zhang2020-bottom" ? "Copied!" : "Copy Clean Description"}
          </button>
        </div>
        <p className="text-xs text-slate-500">
          Note: This description strictly avoids all angle brackets (&lt; and &gt;) to eliminate YouTube Studio&apos;s red validation error box (anti-XSS filter). It contains complete timestamps, primary references, and DOIs ready for upload.
        </p>
        <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 border border-slate-700">
          {youtubeSafeDescription}
        </pre>
      </section>

      {/* Footer Banner */}
      <div className="mt-12 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          Forensic Dissection Series &bull; Episode 5 &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-rose-100 text-rose-800 px-2.5 py-1 rounded-md font-semibold">
            J. Phys. D 2020
          </span>
          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
            Invalid Eq. (6)
          </span>
          <span className="bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded-md font-semibold">
            Deductive Logic
          </span>
        </div>
      </div>
    </article>
  );
}
