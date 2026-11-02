import React from "react";
import { AlertTriangle, CheckCircle, Flame, Layers, ShieldAlert, Sparkles, BookOpen, ExternalLink, Zap, Terminal, FileCode, Scale, Compass } from "lucide-react";

export default function Zhang2020QuarterWavelengthCritiqueEssay() {
  return (
    <article className="prose max-w-none text-slate-800 leading-relaxed font-serif text-sm md:text-base space-y-8 animate-fade-in" id="zhang2020-critique-article-text">
      
      {/* Title & Metadata Header */}
      <div className="text-center space-y-4 pb-8 border-b border-slate-200 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-rose-100 text-rose-900 border border-rose-300">
          <ShieldAlert className="w-4 h-4 text-rose-700 animate-pulse" />
          Rigorous Deconstruction of Ref. [6] • Journal of Physics D: Applied Physics (2020)
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
          The Illusion of Experimental Verification for Mathematically Invalid Theories:
          <span className="block text-xl md:text-2xl font-serif font-normal text-rose-900 mt-2">
            A Critical Deconstruction of Zhang et al. (2020), Empirical Fetishism, and the Epistemological Primacy of Deductive Logic
          </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-500 font-mono">
          <span><strong>Author:</strong> Dr. Yue Liu &amp; Collaborators</span>
          <span>•</span>
          <span><strong>Focus:</strong> Wave Mechanics vs. Pseudo-Mathematical Empiricism</span>
          <span>•</span>
          <span><strong>Reference:</strong> Zhang et al., <em>J. Phys. D: Appl. Phys.</em> 53 (2020) 265004</span>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs md:text-sm text-amber-900 text-left font-sans space-y-2">
          <p className="font-bold flex items-center gap-2 text-amber-950">
            <Zap className="w-4 h-4 text-amber-600" />
            Key Epistemological Thesis:
          </p>
          <p>
            Mainstream modern science has fallen into a degenerate state of <strong>empirical fetishism</strong> and <strong>cargo cult alchemy</strong>, dogmatically preaching that <em>“experiment is the sole criterion of truth”</em> and <em>“experiments cannot be wrong, only theories can be wrong.”</em> In Zhang et al. (2020), an invalid mathematical derivative—holding a variable quantity $A$ falsely constant—yielded erroneous formulas that were nevertheless claimed to be “experimentally proven” by selective data fitting. When false mathematics can be “proven” by experiment, it proves that ungrounded empirical data is alchemy, whereas genuine science is uncompromising logical deduction.
          </p>
        </div>
      </div>

      {/* Abstract / Executive Summary */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4">
        <h2 className="text-lg md:text-xl font-bold text-slate-900 font-sans flex items-center gap-2 m-0">
          <BookOpen className="w-5 h-5 text-indigo-700" />
          Executive Summary &amp; Verbatim Refutation
        </h2>
        <p className="text-slate-700 leading-relaxed italic">
          “Equation (17*) shown here is a copy of equation (6) in Ref. [6] and was derived there from equation (11*) and was wrongly concluded to be a condition for the minima of |RL(x₁⁻)| … If A in equation (11*) were a constant, then the condition for the minimum of |RL(x₁⁻)| with respect to ψ could be obtained from equation (18) … As is apparent from equation (5), A is not a constant since both α_P and α_j are affected by ψ₁, d, and ν. This is why the derivations provided in Ref. [6] lead to a series of wrong conclusions … However, when μᵣ″ = εᵣ″ = 0 and μᵣ = εᵣ, |RL(x₁⁻)| does not have any minima when ψ₁ = 0. The film does not absorb microwaves and RL(x₁⁻) = −1 for all values of d and ν. This demonstrates that equation (17*) is not a necessary condition for the minima of |RL(x₁⁻)|.”
        </p>
        <p className="text-xs text-slate-500 font-mono text-right m-0">
          — Ying Liu, Yue Liu, Michael G. B. Drew, <em>Materials Chemistry and Physics</em> 290 (2022) 126521
        </p>
      </section>

      {/* Section 1: The Fatal Mathematical Error in Zhang et al. (2020) */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            01
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            The Fatal Mathematical Derivation of Equation (6): Peak-Valley Inversion, Attenuation Shift, and Multivariate Calculus Violations
          </h2>
        </div>
        <p>
          In 2020, S. Zhang, T. Wang, M. Gao, P. Wang, H. Pang, L. Qiao, and F. Li published a high-profile paper titled 
          <em>“Strict proof and applicable range of the quarter-wavelength model for microwave absorbers”</em> in the 
          <em>Journal of Physics D: Applied Physics</em> (Vol. 53, 265004, DOI: 10.1088/1361-6463/ab79da). The stated ambition of the authors was to establish a “strict mathematical proof” 
          of the quarter-wavelength model (QWM) and to derive a generalized analytical formula—their Equation (9)—that would calculate 
          the revised peak absorption thickness <em>d</em><sub>rev</sub> when non-zero phase shifts occur at the absorber interface.
        </p>
        <p>
          However, as demonstrated conclusively by Liu, Liu, and Drew (<em>Materials Chemistry and Physics</em> 290, 2022, 126521), 
          the mathematical foundation of Zhang et al.’s entire paper collapses at its foundational step: <strong>Equation (6)</strong>.
        </p>
        
        <div className="bg-white border-2 border-rose-200 rounded-xl p-5 shadow-xs space-y-4 font-mono text-xs md:text-sm">
          <div className="font-bold text-rose-950 font-sans text-sm flex items-center gap-2">
            <Terminal className="w-4 h-4 text-rose-600" />
            Step-by-Step Deconstruction of Formula (6): &psi; = &psi;<sub>1</sub> + &theta; = 2n&pi;
          </div>
          <p className="text-slate-700">
            Zhang et al. express the normalized input impedance in polar coordinates as:
          </p>
          <div className="bg-slate-50 p-3 rounded-lg text-center overflow-x-auto text-slate-900 font-semibold">
            <em>Z</em><sub>p</sub> = <em>A</em> &middot; <em>e</em><sup>&minus;<em>j</em>&psi;</sup>, &emsp; where <em>A</em> = |<em>Z</em><sub>p</sub>| = |<em>Z</em><sub>in</sub>| / <em>Z</em><sub>0</sub>, &emsp; and &psi; = &psi;<sub>1</sub> + &theta;
          </div>
          <p className="text-slate-700">
            Crucially, <strong><em>A</em> in Ref. [6] is the magnitude of the normalized input impedance |<em>Z</em><sub>in</sub>|</strong>, NOT |<em>RL</em>|. 
            The reflection coefficient magnitude |&Gamma;| = |<em>RL</em>| is:
          </p>
          <div className="bg-slate-50 p-3 rounded-lg text-center overflow-x-auto text-slate-900 font-semibold">
            |<em>RL</em>|<sup>2</sup> = |&Gamma;|<sup>2</sup> = [1 + <em>A</em><sup>2</sup> &minus; 2<em>A</em> cos(&psi;)] / [1 + <em>A</em><sup>2</sup> + 2<em>A</em> cos(&psi;)]
          </div>
          <p className="text-slate-700">
            To locate the absorption peak (minimum of |<em>RL</em>|), Zhang et al. freeze <em>A</em> as a constant, differentiate |&Gamma;|<sup>2</sup> with respect to &psi;, and set it to zero:
          </p>
          <div className="bg-rose-50 border border-rose-200 p-3 rounded-lg text-center overflow-x-auto text-rose-900 font-bold">
            &part;|&Gamma;|<sup>2</sup> / &part;&psi; = [4<em>A</em>(1 &minus; <em>A</em><sup>2</sup>) sin(&psi;)] / [1 + <em>A</em><sup>2</sup> + 2<em>A</em> cos(&psi;)]<sup>2</sup> = 0 
            &implies; sin(&psi;) = 0 &implies; &psi; = 2<em>n</em>&pi; &emsp; [Equation (6) in Ref. 6]
          </div>
          
          <div className="bg-slate-900 text-slate-200 p-4 rounded-xl border border-slate-700 font-mono text-xs space-y-2">
            <span className="text-amber-400 font-bold block uppercase tracking-wider text-[11px]">
              Verbatim Rationalization in Zhang et al. (J. Phys. D 2020, 53, 265004):
            </span>
            <p className="italic text-rose-300">
              &ldquo;Therefore, the phase angle of Z<sub>p</sub> should meet the condition &psi; = 2n&pi; (e<sup>&minus;j&psi;</sup> = 1) if an RL peak appears.&rdquo;
            </p>
            <p className="italic text-slate-300">
              &ldquo;On the other hand, as mentioned above, A refers to the amplitude ratio E/H of the plane wave on the inner side of the vacuum-absorber interface; so, A changes little around each RL peak frequency according to its physical significance. This is supported by the observation that A changes slowly and monotonically with f in the application frequency range in the absorption materials. Hence, we assumed that A remained unchanged near peak frequencies in the following differentiations. Then, the derivatives of |&Gamma;| versus &psi; yielded Eq. (6).&rdquo;
            </p>
          </div>

          <div className="border-t border-rose-200 pt-3 space-y-3 font-sans text-xs md:text-sm text-slate-800">
            <h4 className="font-bold text-rose-950 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              Four Irrefutable Proofs Why Equation (6) is Mathematically and Physically False:
            </h4>
            
            <div className="bg-rose-50/70 p-3 rounded-lg space-y-2 border border-rose-100">
              <strong className="text-rose-900 font-mono text-xs block">
                1. The Inversion of Peak and Valley: Destructive Interference Occurs at (2n+1)&pi;, NOT 2n&pi;
              </strong>
              <p className="text-slate-700 text-xs leading-relaxed">
                From Equation (18) of Liu, Liu, and Drew (<em>Mater. Chem. Phys.</em> 2022, 290, 126521):
                <br />
                <span className="font-mono block text-center py-1 font-bold text-slate-900">
                  &psi; = &psi;<sub>1</sub> + &theta; = <em>n</em>&pi;
                </span>
                The phase difference between the front-interface reflection <em>r</em><sub>1</sub> and the substrate-returning wave <em>r</em><sub>2</sub> is essentially the phase of <em>RL</em>. 
                The relationship between absolute value and square root must take a positive or negative sign according to the physical problem. 
                Based on wave mechanics, an <strong>absorption peak</strong> requires <strong>destructive interference</strong> between the emergent waves, which physically demands a phase difference of <strong>180&deg;</strong>:
                <br />
                <span className="font-mono block text-center py-1 font-bold text-emerald-800">
                  |<em>RL</em>| minimum (absorption peak) occurs at &psi; = (2<em>n</em> + 1)&pi; (180&deg;, 540&deg;, ...)
                </span>
                <span className="font-mono block text-center py-1 font-bold text-rose-800">
                  |<em>RL</em>| maximum (reflection maximum, absorption valley) occurs at &psi; = 2<em>n</em>&pi; (0&deg;, 360&deg;, ...)
                </span>
                Zhang et al. claimed an absorption peak appears at &psi; = 2<em>n</em>&pi; (<em>e</em><sup>&minus;<em>j</em>&psi;</sup> = 1). This is <strong>precisely the MAXIMUM of |RL| (maximum reflection, minimum absorption)</strong>, NOT the minimum! Zhang et al. literally inverted the physical extremum itself!
              </p>
            </div>

            <div className="bg-rose-50/70 p-3 rounded-lg space-y-2 border border-rose-100">
              <strong className="text-rose-900 font-mono text-xs block">
                2. Equation (5) and Real Data Prove A = |Z<sub>in</sub>| Is NOT a Constant: The Shock of |Z<sub>in</sub>/Z<sub>0</sub>| &gt;&gt; 1 at Absorption Peaks
              </strong>
              <p className="text-slate-700 text-xs leading-relaxed">
                Zhang et al. claimed <em>A</em> &ldquo;changes little around each RL peak&rdquo; and &ldquo;remained unchanged in differentiations.&rdquo; 
                This assumption is categorically refuted by both rigorous mathematics and published empirical data:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
                <li>
                  <strong>Mathematical Proof (Eq. 5 in Liu et al. 2022):</strong> 
                  <em>A</em> = |<em>Z</em><sub>in</sub>| is an explicit function of attenuation &alpha;<sub>P</sub>, phase delay &alpha;<sub>j</sub>, thickness <em>d</em>, frequency &nu;, and interfacial phase &psi;<sub>1</sub>. 
                  Because &alpha;<sub>P</sub>, &alpha;<sub>j</sub>, and &psi; are linked through complex dispersion, <strong><em>A</em> varies dynamically with &psi; (&part;<em>A</em> / &part;&psi; &ne; 0)</strong>. Freezing <em>A</em> in differentiation violates basic multivariable calculus.
                </li>
                <li>
                  <strong>Extrema Misalignment (Physica B 2023, 666, 415108):</strong> 
                  As demonstrated in Figs. 5c, 5d, and 6 of Ying Liu, Xiangbin Yin, M. G. B. Drew, and Yue Liu, 
                  <strong>the extrema of |Z<sub>in</sub>| and the extrema of |RL| do NOT occur at the same position</strong>! Nor do they occur at a phase difference of 180&deg;.
                </li>
                <li>
                  <strong>The Ultimate Refutation of Impedance Matching:</strong> 
                  When the extrema of |<em>Z</em><sub>in</sub>| and |<em>RL</em>| happen to occur in close proximity (for |<em>Z</em><sub>M</sub>| &lt; |<em>Z</em><sub>0</sub>|), 
                  the extremum of |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| is a <strong>MAXIMUM greater than 1</strong>! 
                  At this point, <strong><em>Z</em><sub>in</sub> deviates the MOST from <em>Z</em><sub>0</sub>, yet |<em>RL</em>| reaches its MINIMUM (maximum absorption peak)</strong>! 
                  This is shown directly at the first absorption peak in Figs. 5c and 5d of <em>Physica B</em> (2023). 
                  Furthermore, in Fig. 5b of Liu, Liu, and Drew (<em>Physica Scripta</em> 2022, 97, 015806), the values of |<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| corresponding to the first two |<em>RL</em>| absorption peaks are <strong>both far greater than 1 (|<em>Z</em><sub>in</sub>/<em>Z</em><sub>0</sub>| &gt;&gt; 1)</strong>! 
                  This completely shatters the impedance matching dogma that absorption peaks require <em>Z</em><sub>in</sub> &approx; <em>Z</em><sub>0</sub>.
                </li>
              </ul>
            </div>

            <div className="bg-rose-50/70 p-3 rounded-lg space-y-2 border border-rose-100">
              <strong className="text-rose-900 font-mono text-xs block">
                3. Material Attenuation Shifts the True Minimum to &psi; &gt; 180&deg; (&psi; &gt; &pi;)
              </strong>
              <p className="text-slate-700 text-xs leading-relaxed">
                In reality, microwaves undergo continuous attenuation as they propagate through lossy media. Because of this material attenuation, |<em>RL</em>| varies continuously with &psi;, and <strong>at &psi; = <em>n</em>&pi; there is no guarantee that |<em>RL</em>| is invariant with respect to &psi;</strong>. 
                When attenuation causes |<em>RL</em>| (and <em>A</em>) to vary with &psi;, it is only at a phase angle <strong>strictly greater than 180&deg; (&psi; &gt; 180&deg;)</strong> that the total derivative <em>d</em>|<em>RL</em>|/<em>d</em>&psi; can equal zero. 
                By directly differentiating |<em>RL</em>| with respect to &psi; while accounting for attenuation, one deduces that the absorption peak resides at a phase angle (approximately equal to the phase difference) greater than 180&deg;.
              </p>
            </div>

            <div className="bg-rose-50/70 p-3 rounded-lg space-y-2 border border-rose-100">
              <strong className="text-rose-900 font-mono text-xs block">
                4. The Lossless Paradox: The Only Case Where A Is Constant Has No Minima
              </strong>
              <p className="text-slate-700 text-xs leading-relaxed">
                Only when the material and film do <strong>NOT absorb microwaves</strong> (&mu;<sub>r</sub>&Prime; = &epsilon;<sub>r</sub>&Prime; = 0, purely real constitutive parameters) does |<em>RL</em>| become constant across phase space. 
                <strong>Only in this lossless case does the minimum of |RL| appear exactly at 180&deg;, and ONLY in this case could treating A as a constant be mathematically permissible!</strong>
                However, in this exact lossless limit, the film does not absorb microwaves at all: |<em>RL</em>| = 1 (0 dB reflection) identically across all thicknesses <em>d</em> and frequencies &nu; (proved in Fig. 6(a) and (b) of Liu et al. 2022). 
                <strong>No absorption minimum exists anywhere!</strong> 
                Thus: where <em>A</em> is truly constant, no absorption peak exists; where absorption peaks exist, <em>A</em> is never constant. Equation (6) is an unphysical absurdity.
              </p>
            </div>

          </div>
        </div>

        {/* Detailed Breakdown of Cascading Errors: From Eq. (6) to Eq. (9) */}
        <div className="bg-rose-950/10 border-2 border-rose-300 rounded-xl p-5 space-y-4 font-sans text-xs md:text-sm">
          <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
            <Layers className="w-5 h-5 text-rose-700" />
            Cascading Fallacies: Multiple Mathematical &amp; Physical Errors from Equation (6) to Equation (9)
          </div>
          <p className="text-slate-800 leading-relaxed">
            The theoretical breakdown of Zhang et al. is not confined to Equation (6). The entire mathematical bridge constructed between 
            <strong>Equation (6)</strong> and their celebrated analytical formula <strong>Equation (9)</strong>:
          </p>
          <div className="bg-white p-3 rounded-lg border border-rose-200 text-center font-mono text-xs md:text-sm text-slate-900 font-bold">
            <em>d</em><sub>rev</sub> = [(2<em>n</em> + 1)<em>c</em>] / [4&nu; Re(&radic;(&mu;<sub>r</sub>&epsilon;<sub>r</sub>))] &minus; [&psi;<sub>1</sub> <em>c</em>] / [4&pi;&nu; Re(&radic;(&mu;<sub>r</sub>&epsilon;<sub>r</sub>))] &emsp; [Equation (9) in Ref. 6]
          </div>
          <p className="text-slate-800 leading-relaxed">
            is riddled with further mathematical inconsistencies, ad-hoc insertions, and physical contradictions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="bg-white p-3.5 rounded-lg border border-rose-200 space-y-1.5">
              <span className="font-bold font-mono text-xs text-rose-900 block">
                A. The Parity Sleight-of-Hand: 2n&pi; in Eq. (6) &rarr; (2n+1) in Eq. (9)
              </span>
              <p className="text-slate-600 text-xs leading-relaxed">
                Equation (6) explicitly asserts &psi; = &psi;<sub>1</sub> + &theta; = 2<em>n</em>&pi;. 
                Solving directly for propagation phase yields &theta; = 2<em>n</em>&pi; &minus; &psi;<sub>1</sub>. 
                Substituting &theta; = [4&pi;&nu;<em>d</em> / <em>c</em>] Re(&radic;(&mu;<sub>r</sub>&epsilon;<sub>r</sub>)) yields a numerator with <strong>2n</strong>, NOT <strong>(2n+1)</strong>! 
                Where did (2<em>n</em>+1) come from? Zhang et al. arbitrarily grafted the odd integer from the classical quarter-wavelength dogma into their formula to ensure it superficially resembled the traditional model when &psi;<sub>1</sub> &rarr; 0!
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-lg border border-rose-200 space-y-1.5">
              <span className="font-bold font-mono text-xs text-rose-900 block">
                B. Smuggling the Metal Backing &pi; Phase Shift
              </span>
              <p className="text-slate-600 text-xs leading-relaxed">
                Reflection at a perfect metal backing produces a 180&deg; (&pi;) phase reversal. If this boundary phase is properly summed, the round-trip condition is &theta; + &psi;<sub>1</sub> + &pi; = 2<em>m</em>&pi;, which yields (2<em>n</em>+1)&pi;. 
                Zhang et al. omitted this physical boundary phase when deriving Equation (6), arrived at 2<em>n</em>&pi;, and then surreptitiously smuggled it back into Equation (9) without reconciling the mathematical contradiction.
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-lg border border-rose-200 space-y-1.5">
              <span className="font-bold font-mono text-xs text-rose-900 block">
                C. Discarding the Attenuation Constant &alpha;<sub>P</sub>
              </span>
              <p className="text-slate-600 text-xs leading-relaxed">
                The propagation constant is complex: &gamma; = &alpha;<sub>P</sub> + <em>j</em>&beta; = <em>j</em>(2&pi;&nu;/<em>c</em>)&radic;(&mu;<sub>r</sub>&epsilon;<sub>r</sub>). 
                In deriving Equation (9), Zhang et al. completely discarded the imaginary attenuation constant &alpha;<sub>P</sub>, relying solely on Re(&radic;(&mu;<sub>r</sub>&epsilon;<sub>r</sub>)). 
                By discarding attenuation, their derivation strips out the very physical mechanism responsible for microwave dissipation.
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-lg border border-rose-200 space-y-1.5">
              <span className="font-bold font-mono text-xs text-rose-900 block">
                D. Linearizing an Inherently Non-Linear System
              </span>
              <p className="text-slate-600 text-xs leading-relaxed">
                Transmission line input impedance <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> &radic;(&mu;/&epsilon;) tanh(&gamma;<em>d</em>) is a non-linear transcendental hyperbolic function. 
                Decoupling interfacial phase &psi;<sub>1</sub> from thickness <em>d</em> into a simple linear subtractive offset (&minus;&psi;<sub>1</sub><em>c</em> / 4&pi;&nu;...) is an ad-hoc linear truncation that has no rigorous foundation in electrodynamics.
              </p>
            </div>
          </div>
        </div>

        <p>
          Because both Equation (6) and the algebraic bridge to Equation (9) are mathematically and physically broken, 
          Equation (9) cannot claim to be a valid physical law or a strict proof.
        </p>

        {/* Peer Review Blindness Case Study: Saikia et al. 2024 */}
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl border border-slate-700 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-700 pb-2">
            <span className="text-amber-400 font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2">
              <FileCode className="w-4 h-4 text-amber-400" />
              Symptom of Institutional Theoretical Poverty: The Saikia et al. (2024) Case
            </span>
            <span className="text-xs text-slate-400 font-mono">Appl. Phys. A (2024) 130:189</span>
          </div>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            The failure of peer review to detect mathematical fallacies in Zhang et al. (2020) is not an isolated incident; it is systemic. 
            Consider a recent paper published in Springer’s <em>Applied Physics A</em>: 
            <strong>S. Saikia, H. Saikia, N. S. Bhattacharyya, “Revertible wideband hydrogel-based meta-structure absorber”, <em>Appl. Phys. A</em> 2024, 130(3), 189.</strong>
          </p>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs text-rose-300 space-y-2">
            <p className="text-slate-400 italic">Verbatim excerpt from Saikia et al. (2024) Section 4:</p>
            <p>
              &ldquo;Impedance matching, i.e. <em>Z</em><sub>L</sub>(&omega;) = <em>Z</em><sub>0</sub>(&omega;) &radic;(&mu;<sub>eff</sub> / &epsilon;<sub>eff</sub>) ... 
              The normalized impedance at the air-absorber interface can be retrieved from S-parameters using the following equation: 
              <em>Z</em> = <em>Z</em>&prime; + <em>jZ</em>&Prime; = &radic;[((1+<em>S</em><sub>11</sub>)<sup>2</sup> &minus; <em>S</em><sub>21</sub><sup>2</sup>) / ((1&minus;<em>S</em><sub>11</sub>)<sup>2</sup> &minus; <em>S</em><sub>21</sub><sup>2</sup>)] = (1+<em>S</em><sub>11</sub>)/(1&minus;<em>S</em><sub>11</sub>) ... 
              Unity or maximum absorption is achieved when <em>Z</em>&prime; = 1 and <em>Z</em>&Prime; = 0.&rdquo;
            </p>
          </div>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            <strong>The Undergraduate Category Error:</strong> Saikia et al. define impedance matching using <em>Z</em><sub>L</sub> (the intrinsic characteristic impedance of the medium <em>Z</em><sub>M</sub> = &radic;(&mu;/&epsilon;)), and in the very next line equate it directly to <em>Z</em> = (1+<em>S</em><sub>11</sub>)/(1&minus;<em>S</em><sub>11</sub>), which is the input impedance <em>Z</em><sub>in</sub> of a metal-backed film! 
            They conflate an intrinsic material property (<em>Z</em><sub>M</sub>) with a boundary-dependent structural system impedance (<em>Z</em><sub>in</sub>). 
            This is an elementary category mistake that any physics undergraduate should be failed for, yet it was published without friction in an SCI journal. 
            When peer review welcomes such blatant blunders as &ldquo;cutting-edge research&rdquo; while actively censoring the wave mechanics theory that exposes them, peer review ceases to be a guardian of science and becomes a cartel protecting institutional ignorance.
          </p>
        </div>
      </section>

      {/* Section 2: The Satire of "Empirical Verification" and Cargo Cult Alchemy */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            02
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            The Satire of “Experimental Verification”: How False Math Gets “Proven” by Data
          </h2>
        </div>
        <p>
          Here lies the supreme irony and the deepest sociological scandal of modern scientific publishing. 
          Despite Equation (9) being derived from a completely invalid mathematical step, Zhang et al. presented extensive 
          experimental data (Figs. 1–5 in their paper) showing that their calculated {"$d_\\text{rev}$"} curves closely aligned with 
          experimental green data points across various ferrite and carbonyl iron composites. 
          They triumphantly claimed:
        </p>
        <blockquote className="border-l-4 border-amber-500 pl-4 py-2 italic text-slate-700 bg-amber-50/50 rounded-r-lg">
          “The calculation results of equation (9) are in good agreement with the experimental data, which indicates that our revision of QWM is accurate and applicable.”
        </blockquote>
        <p>
          Stop and reflect on what this means. 
          A formula whose derivation violates basic high-school calculus, which produces false conditions for non-existent minima, 
          was declared <strong>“experimentally confirmed”</strong> by peer-reviewed reviewers and published in an authoritative physics journal.
        </p>
        <p>
          This provides the ultimate, biting satire of the sacred cow of modern academia: 
          the dogma that <em>“experiment is the sole criterion of truth”</em> (实践是检验真理的唯一标准) and 
          <em>“experiments cannot be wrong, only theories can be wrong.”</em>
        </p>
        <p>
          As Yue Liu demonstrated in his foundational epistemological treatise, 
          <em>“Why Are Research Findings Supported by Experimental Data with High Probability Often False? — Critical Analysis of the Replication Crisis and Statistical Bias in Scientific Literature”</em> 
          (Preprints.org 2025, DOI: 10.20944/preprints202507.1953.v1; SSRN: 5376778):
        </p>
        <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl space-y-3 font-sans">
          <h3 className="text-amber-400 font-bold text-base flex items-center gap-2 m-0">
            <Flame className="w-5 h-5 text-amber-400" />
            The Alchemy of Empirical Curve-Fitting
          </h3>
          <p className="text-sm leading-relaxed text-slate-300">
            Experimental data without rigorous deductive logic is nothing more than <strong>medieval alchemy</strong>. 
            In complex multivariable systems like electromagnetic scattering and materials chemistry, there are virtually infinite degrees of freedom—sample thickness, porosity, interfacial roughness, instrument noise, batch variations, and frequency sweeps. 
            By selectively picking datasets, tuning arbitrary fitting parameters, or exploiting coincidental overlapping ranges, 
            <strong>any false theory, no matter how mathematically absurd, can be fitted to look “in good agreement with experiment.”</strong>
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            If experimental agreement could validate a theory, then Zhang et al.’s mathematical error would have to be accepted as correct! 
            The fact that the math is undeniably wrong, yet the data fits, is categorical proof that 
            <strong>data fitting is not truth</strong>. Data is mere phenomenon; logic is the governing law.
          </p>
        </div>
      </section>

      {/* Section 3: The Gatekeeping Catch-22 Paradox */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            03
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            The “Accumulation of Counter-Evidence” Paradox: Gatekeeping Bureaucracy vs. Karl Popper
          </h2>
        </div>
        <p>
          When foundational critics like Yue Liu submit papers pointing out that impedance matching and the quarter-wavelength model 
          are fundamentally flawed, journal editors and peer reviewers deploy a disingenuous bureaucratic catch-22:
        </p>
        <div className="border border-slate-200 bg-slate-50 rounded-xl p-5 space-y-2 font-mono text-xs md:text-sm text-slate-800">
          <p className="font-bold text-indigo-950 font-sans flex items-center gap-2">
            <Scale className="w-4 h-4 text-indigo-600" />
            The Peer Review Catch-22 Trap:
          </p>
          <p className="italic text-slate-700">
            “The impedance matching theory and the quarter-wavelength model are well-established paradigms supported by tens of thousands of published SCI papers over four decades. Overturning such an established framework requires overwhelming, extraordinary evidence and a massive accumulation of counter-evidence across the literature. A single paper cannot overturn thousands.”
          </p>
        </div>
        <p>
          This is an intellectually bankrupt sophism designed to maintain an unassailable monopoly for incumbent academic cliques. 
          The logical vicious cycle operates as follows:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700">
          <li><strong>Step 1:</strong> The establishment demands an <em>“accumulation of counter-evidence”</em> before allowing any criticism to be deemed valid.</li>
          <li><strong>Step 2:</strong> Whenever an individual scholar produces an airtight theoretical proof or experimental counterexample, the gatekeepers reject it on the grounds that <em>“it contradicts the established 10,000 papers.”</em></li>
          <li><strong>Step 3:</strong> Because every individual counter-paper is suppressed at the gates of peer review, counter-evidence is <strong>never allowed to accumulate in the literature</strong>!</li>
          <li><strong>Step 4:</strong> The establishment then points to the absence of accumulated counter-literature as “proof” that the mainstream paradigm remains unchallenged!</li>
        </ol>
        <p>
          In the philosophy of science established by <strong>Karl Popper</strong>, science proceeds by <strong>falsification</strong>, not by democratic vote or paper count. 
          A universal proposition:
        </p>
        <div className="text-center font-mono text-slate-900 bg-slate-100 py-3 rounded-lg font-bold">
          {`\\forall x \\, (P(x) \\implies Q(x))`}
        </div>
        <p>
          is not validated by ten thousand white swans. 
          <strong>A single black swan falsifies the entire universal proposition instantly.</strong>
          In electromagnetic wave mechanics, the presence of a single counterexample—such as a lossless film where $\psi_1 = 0$ yields no absorption minima, 
          or where $|Z_{"{in}"}| = |Z_0|$ fails to yield absorption, or where the mathematical derivative is demonstrably non-zero—proves with absolute finality 
          that the impedance matching condition is not a universal law of nature. 
          Demanding “ten thousand counter-papers” to refute a false mathematical formula is not science; it is the administrative defense mechanism of an academic cartel.
        </p>
      </section>

      {/* Section 4: Fitting |Zin| = |Z0| Does Not Prove Physical Mechanism */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            04
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            Mathematical Fitting Does Not Prove Physical Mechanism: The $|Z_{"{in}"}| = |Z_0|$ Fallacy
          </h2>
        </div>
        <p>
          A pervasive disease in materials science and applied physics is the conflation of 
          <strong>numerical coincidence</strong> with <strong>physical causality</strong>.
          Mainstream literature frequently plots {"$|Z_\\text{in}/Z_0|$"} against frequency, observes that {"$|Z_\\text{in}/Z_0| \\approx 1$"} in the vicinity of 
          a reflection loss peak, and concludes that <em>“impedance matching is the driving mechanism of microwave absorption.”</em>
        </p>
        <p>
          This is an elementary logical fallacy of the form <em>Post hoc ergo propter hoc</em> and false equivalence:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>
            <strong>Transmission Line Math vs. Interfacial Wave Physics:</strong> 
            The input impedance {"$Z_\\text{in} = Z_0 \\sqrt{\\mu_r/\\epsilon_r} \\tanh(j k d)$"} is an equivalent transmission-line parameter that bundles together 
            all multiple internal reflections into a single mathematical black box. 
            Equating {"$Z_\\text{in} = Z_0$"} is simply an algebraic re-statement that the net reflected wave amplitude is zero ($RL \to -\infty$). 
            It is a <em>description</em> of the boundary result, not an explanatory <em>physical mechanism</em>.
          </li>
          <li>
            <strong>The False Mechanism Claim:</strong> 
            Mainstream papers assert that when {"$|Z_\\text{in}| = |Z_0|$"}, electromagnetic waves “enter the absorber without reflection at the front surface and are fully absorbed inside the bulk.” 
            This claim is physically impossible. 
            At the front interface ($x = x_1$), the intrinsic impedance of the material is {"$\\eta = \\sqrt{\\mu/\\epsilon} \\neq Z_0$"}. 
            The incident wave <strong>always reflects</strong> at the front boundary with reflection coefficient {"$R_M = (\\eta - Z_0)/(\\eta + Z_0) \\neq 0$"}. 
            The wave that enters the film undergoes multiple reflections at the metal backing, returning to the front boundary as $R_2$.
          </li>
          <li>
            <strong>The Real Physical Mechanism is Destructive Wave Cancellation:</strong> 
            The true reason the net reflected power vanishes is that the wave reflected from the front surface ($R_1$) and the superposed waves emerging from the substrate ($R_2$) 
            interfere destructively with an exact $180^\circ$ phase difference ($R_1 = -R_2$). 
            Fitting {"$|Z_\\text{in}| = |Z_0|$"} merely restates that $R_1 + R_2 = 0$; it does not prove that waves entered without reflection, nor does it prove that impedance matching caused the absorption.
          </li>
        </ul>
      </section>

      {/* Section 5: Statistics vs. Logic - 180° Phase Cancellation */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            05
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            Statistics Can Only Confirm Pre-Existing Logic: The $180^\circ$ Wave Cancellation Axiom
          </h2>
        </div>
        <p>
          Modern data-driven researchers mistakenly believe that truth emerges from running large batches of statistical regressions across databases of materials. 
          This is an epistemological inversion.
        </p>
        <p>
          <strong>Statistics has no creative or truth-generating power.</strong> Statistics can only measure the correlation between variables whose causal connection has already been established by logic. 
          When logic is absent, statistical correlations are spurious noise.
        </p>
        <p>
          Consider the fundamental wave mechanics of destructive interference. 
          When an electromagnetic wave encounters a metal-backed film, the net reflection is:
        </p>
        <div className="text-center font-mono text-slate-900 bg-slate-50 py-3 rounded-lg border border-slate-200 font-bold">
          {`RL(d, \\nu) = \\frac{R_M - e^{-2\\gamma d}}{1 - R_M e^{-2\\gamma d}}`}
        </div>
        <p>
          For complete cancellation ($RL = 0$), it is an inescapable mathematical and physical necessity that the two emergent wave components must have:
        </p>
        <ol className="list-decimal pl-6 space-y-1 text-slate-700 font-medium">
          <li>Equal magnitudes: $|R_1| = |R_2|$</li>
          <li>Opposite phase: $\Delta \theta = \theta_1 - \theta_2 = (2n + 1)\pi = 180^\circ, 540^\circ, \dots$</li>
        </ol>
        <p>
          This $180^\circ$ phase cancellation is a <strong>deductive geometric and physical axiom</strong> derived directly from Maxwell’s equations and the principle of superposition. 
          It does not require permission from a p-value. It does not require validation by a regression analysis across 500 samples. 
          Whether an experimenter measures it or not, two out-of-phase waves of equal amplitude cancel each other. 
          To demand statistical “proof” for deductive wave interference is as absurd as demanding a clinical trial to prove that $1 + 1 = 2$.
        </p>
      </section>

      {/* Section 6: Interaction of Phase Effect and Material Attenuation */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            06
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            The Profound Discovery of Qualitative Logic: Phase Derivative vs. Attenuation Derivative
          </h2>
        </div>
        <p>
          Perhaps the most beautiful demonstration of the superiority of pure qualitative deductive logic over blind empiricism 
          is Yue Liu’s discovery of the <strong>phase-attenuation compound shift</strong> in microwave absorption films 
          (<em>Physica Scripta</em> 96, 2021, 125003; <em>Physica Scripta</em> 97, 2022, 015806; <em>J. Magn. Magn. Mater.</em> 593, 2024, 171850).
        </p>
        <p>
          For over four decades, thousands of experimentalists and theorists mechanically assumed that the minimum of reflection loss $|RL|$ 
          must occur exactly where the phase difference is $180^\circ$ (or the quarter-wavelength condition $\lambda/4$). 
          They spent decades running numerical simulations and measuring data, yet never understood why experimental absorption peaks persistently deviated 
          from the quarter-wavelength lines.
        </p>
        <p>
          Yue Liu solved this fundamental problem not through expensive synchrotron experiments, but through <strong>pure qualitative logical deduction</strong>:
        </p>

        <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6 space-y-4">
          <h3 className="text-base font-bold text-purple-950 font-sans flex items-center gap-2 m-0">
            <Compass className="w-5 h-5 text-purple-700" />
            The Qualitative Deductive Proof of the Phase Shift:
          </h3>
          <div className="space-y-3 text-slate-800 text-sm leading-relaxed">
            <p>
              <strong>1. The Extremum Property of Pure Phase Interference:</strong><br />
              Consider the reflection loss $|RL|$ as a function of the round-trip propagation phase $\theta = 2 \alpha_j d$ and material attenuation. 
              At pure phase opposition ($\theta = 180^\circ$ or $\pi$), the phase sensitivity vanishes:
              <span className="font-mono block text-center py-1 font-bold text-purple-900">
                {`\\left( \\frac{\\partial |RL|}{\\partial \\theta} \\right)_{\\theta = 180^\\circ} = 0`}
              </span>
              Similarly, at pure in-phase reflection ($\theta = 360^\circ$ or $2\pi$), the phase derivative is also zero:
              <span className="font-mono block text-center py-1 font-bold text-purple-900">
                {`\\left( \\frac{\\partial |RL|}{\\partial \\theta} \\right)_{\\theta = 360^\\circ} = 0`}
              </span>
            </p>
            <p>
              <strong>2. The Monotonic Material Attenuation Rate:</strong><br />
              However, the wave is propagating through a lossy medium. 
              As thickness $d$ or propagation path increases, the material attenuation factor {"$e^{-\\alpha_P d}$"} continuously and monotonically decreases the amplitude of the second wave component $|R_2|$:
              <span className="font-mono block text-center py-1 font-bold text-purple-900">
                {`\\frac{\\partial |R_2|}{\\partial d} < 0 \\quad \\text{everywhere (strictly negative rate)}`}
              </span>
            </p>
            <p>
              <strong>3. The Inevitable Compound Shift:</strong><br />
              Now combine the two effects! At $\theta = 180^\circ$, because the phase derivative is exactly zero, 
              <strong>the non-zero negative attenuation derivative dominates the total derivative</strong>:
              <span className="font-mono block text-center py-1 font-bold text-purple-900">
                {`\\frac{d |RL|}{d d} = \\underbrace{\\frac{\\partial |RL|}{\\partial \\theta}\\frac{\\partial \\theta}{\\partial d}}_{= 0 \\text{ at } 180^\\circ} + \\underbrace{\\frac{\\partial |RL|}{\\partial |R_2|}\\frac{\\partial |R_2|}{\\partial d}}_{\\neq 0} \\neq 0`}
              </span>
              As a direct, unassailable deductive consequence:
              <ul className="list-disc pl-6 space-y-1 mt-2 text-purple-950 font-semibold">
                <li>The true <strong>minimum</strong> of |RL| is pushed beyond 180&deg; ({"$\\theta_\\text{min} > 180^\\circ$"})!</li>
                <li>The true <strong>maximum</strong> of |RL| is pulled prior to 360&deg; ({"$\\theta_\\text{max} < 360^\\circ$"})!</li>
              </ul>
            </p>
          </div>
        </div>

        <p>
          Notice the profound epistemological lesson here:
          <strong>Not a single experimentalist discovered this truth in 40 years of empirical curve fitting.</strong> 
          Why? Because experimental data shows only the blurred final compound result. 
          Without qualitative logical dissection of the underlying mechanism—separating the phase derivative from the attenuation derivative—an experimenter sees only numbers, 
          and invents ad-hoc fudge factors or false mathematical approximations (like Zhang et al.’s Eq. (9)) to force their data into their preconceived quarter-wavelength dogma.
        </p>
      </section>

      {/* Section 7: Science is Logic; Experiment is Alchemy */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-700 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            07
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            Conclusion: Science Is Logic; Experiment Is Alchemy
          </h2>
        </div>
        <p>
          Modern academia has inverted the hierarchy of human thought. 
          It has elevated the physical laborer who operates an impedance analyzer above the theoretical thinker who deduces fundamental wave mechanics. 
          It has confused the gathering of empirical pebbles with the comprehension of universal physical laws.
        </p>
        <p>
          As Yue Liu formulated in his landmark critique, 
          <em>“The Chaos of Academia, Part 7: Liu Yue’s Theory — Science Is Logic; Experiment Is Alchemy”</em>:
        </p>
        <div className="bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 text-white rounded-2xl p-6 md:p-8 space-y-4 border border-rose-800 shadow-lg">
          <h3 className="text-xl font-bold text-amber-300 font-sans m-0">
            The Fundamental Distinction Between Science and Alchemy
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-slate-200">
            Alchemy was entirely obsessed with <strong>experimental results</strong>. 
            The alchemist mixed mercury, sulfur, and lead in a crucible, recorded that a yellow precipitate appeared, 
            and declared with absolute empirical certainty that lead was turning into gold. 
            The alchemist had all the “experimental evidence” in the world, but zero logical causality.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-slate-200">
            <strong>Science, by contrast, begins with uncompromising logical rigor.</strong> 
            A theory is not scientific because it has ten thousand experimental papers claiming to support it; 
            a theory is scientific because its internal logic is consistent, its causal chain is unbroken, and it withstands deductive scrutiny. 
            When a theory’s mathematical derivation is flawed—as in Zhang et al. (2020)—no amount of green experimental dots can rescue it from falsehood.
          </p>
          <div className="border-t border-rose-800/60 pt-4 flex items-center justify-between text-xs font-mono text-amber-300">
            <span>Qualitative Logic &gt; Superficial Quantitative Calculation</span>
            <span>Wave Mechanics &gt; Cargo Cult Impedance Matching</span>
          </div>
        </div>

        <p>
          The history of science will remember Zhang et al. (2020) not as a “strict proof of the quarter-wavelength model,” 
          but as a classic textbook monument to <strong>cargo cult science</strong>: 
          a paper where false calculus was sanctified by empirical curve-fitting, blessed by peer review, 
          and sheltered by an academic monopoly that fears genuine theoretical critique above all else. 
          Truth belongs to logic; everything else is merely noise in the laboratory.
        </p>
      </section>

      {/* Citations & References Panel */}
      <div className="border-t-2 border-slate-200 pt-6 space-y-4 font-sans text-xs md:text-sm">
        <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs font-mono">
          Authoritative References &amp; Cited Literature:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600">
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg space-y-1">
            <span className="font-bold text-rose-900 block">[Ref 6 in Dispute]</span>
            <p className="text-xs">
              S. Zhang, T. Wang, M. Gao, P. Wang, H. Pang, L. Qiao, F. Li, 
              <em>“Strict proof and applicable range of the quarter-wavelength model for microwave absorbers”</em>, 
              <em>J. Phys. D: Appl. Phys.</em> 53 (2020) 265004. DOI: 10.1088/1361-6463/ab79da.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg space-y-1">
            <span className="font-bold text-indigo-900 block">[Conclusive Refutation]</span>
            <p className="text-xs">
              Ying Liu, Yue Liu, Michael G. B. Drew, 
              <em>“A re-evaluation of the mechanism of microwave absorption in film Part 3: Inverse relationship”</em>, 
              <em>Materials Chemistry and Physics</em> 290 (2022) 126521.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg space-y-1">
            <span className="font-bold text-slate-900 block">[Epistemology &amp; Statistical Bias]</span>
            <p className="text-xs">
              Yue Liu, 
              <em>“Why Are Research Findings Supported by Experimental Data with High Probability Often False? — Critical Analysis of the Replication Crisis and Statistical Bias in Scientific Literature”</em>, 
              <em>Preprints.org</em> (2025), DOI: 10.20944/preprints202507.1953.v1; SSRN: 5376778.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg space-y-1">
            <span className="font-bold text-slate-900 block">[Wave Mechanics vs. Film Distinction]</span>
            <p className="text-xs">
              Yue Liu, Ying Liu, Michael G. B. Drew, 
              <em>“Wave Mechanics of Microwave Absorption in Films — Distinguishing Film from Material”</em>, 
              <em>Journal of Magnetism and Magnetic Materials</em> 593 (2024) 171850.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg space-y-1">
            <span className="font-bold text-emerald-900 block">[Wave Cancellation vs. |Zin| Discrepancy]</span>
            <p className="text-xs">
              Ying Liu, Xiangbin Yin, M. G. B. Drew, Yue Liu, 
              <em>“Microwave absorption of film explained accurately by wave cancellation theory”</em>, 
              <em>Physica B: Condensed Matter</em> 666 (2023) 415108. DOI: 10.1016/j.physb.2023.415108.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg space-y-1">
            <span className="font-bold text-purple-900 block">[QWM Part 2: |Zin/Z0| &gt;&gt; 1 at Peaks]</span>
            <p className="text-xs">
              Liu Y, Liu Y, Drew MGB, 
              <em>“A theoretical investigation of the quarter-wavelength model — part 2: verification and extension”</em>, 
              <em>Physica Scripta</em> 97(1) (2022) 015806. DOI: 10.1088/1402-4896/ac3c2a.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg space-y-1 md:col-span-2">
            <span className="font-bold text-amber-900 block">[Peer-Reviewed Zin vs ZM Confounding Example]</span>
            <p className="text-xs">
              S. Saikia, H. Saikia, N. S. Bhattacharyya, 
              <em>“Revertible wideband hydrogel-based meta-structure absorber”</em>, 
              <em>Appl. Phys. A: Mater. Sci. Process.</em> 130(3) (2024) 189. DOI: 10.1007/s00339-024-07334-y.
            </p>
          </div>
        </div>
      </div>

    </article>
  );
}
