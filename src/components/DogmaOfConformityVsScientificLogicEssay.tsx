import React from "react";
import {
  Scale,
  AlertTriangle,
  BookOpen,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  FileText,
  Zap,
  Eye,
  Lightbulb,
  Bot,
  Globe,
  Award,
  Sparkles,
  Compass,
  ShieldCheck,
  Flame,
  Layers,
  Copy,
  GitCompare,
  Terminal,
  Cpu,
  Ban,
  History,
  FileSearch,
  Trash2,
  Quote,
  FlaskConical,
  Binary,
  Swords,
  Crosshair,
  Shuffle,
  Unlock,
  Key
} from "lucide-react";

export default function DogmaOfConformityVsScientificLogicEssay() {
  return (
    <article
      className="max-w-4xl mx-auto space-y-8 font-serif text-slate-800 leading-relaxed text-sm md:text-base selection:bg-rose-100 selection:text-rose-900"
      id="dogma-of-conformity-article-text"
    >
      {/* Title & Header */}
      <div className="text-center space-y-4 border-b border-slate-200 pb-6 font-sans">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200 uppercase tracking-widest">
          <FlaskConical className="w-3.5 h-3.5" />
          Essay FC • Epistemological Anarchism & Scientific Logic
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          The Dogma of Conformity vs. The Rebellious Essence of Science:
        </h1>
        <h2 className="text-lg md:text-2xl font-semibold text-rose-950 font-sans tracking-tight">
          Why Science Is Rigorous Logic, Experiment Is Modern Alchemy, and Dogmatism Is the Death of Truth
        </h2>
        <p className="text-slate-600 font-serif italic text-xs md:text-sm max-w-3xl mx-auto">
          An Epistemological Deconstruction of the "Experiment–Hypothesis–Experiment" Orthodoxy,
          Paul Feyerabend’s Anarchism ("Anything Goes"), and the Primacy of Kaleidoscopic Metaphysics over Formulaic Dialectics
        </p>
        <p className="text-xs text-slate-500 font-mono">
          By Dr. Yue Liu, Dr. Ying Liu, & Prof. Michael G. B. Drew • October 2026
        </p>

        {/* Substack & SSRN Links Banner */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-rose-900 bg-rose-50 px-3 py-2 rounded-lg border border-rose-100 font-sans font-semibold">
          <span className="font-bold text-slate-900">Primary Treatises & Critical Literature:</span>
          <a
            href="https://yueliusd.substack.com/p/the-chaos-of-academia-part-7-science"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-rose-700 hover:text-rose-950 underline font-mono"
          >
            Substack: Chaos of Academia VII <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="https://yueliusd.substack.com/p/liu-yues-theory-science-as-logic"
            target="_blank"
            rel="noreferrer"
            className="inline-center gap-1 text-rose-700 hover:text-rose-950 underline font-mono"
          >
            Substack: Science Is Logic, Experiment Is Alchemy <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="https://ssrn.com/abstract=5784682"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-rose-700 hover:text-rose-950 underline font-mono"
          >
            SSRN: 5784682 (Problem Formulation as Engine) <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="https://ssrn.com/abstract=5709303"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-rose-700 hover:text-rose-950 underline font-mono"
          >
            SSRN: 5709303 (Primacy of Question Over Validation) <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Epigraph Block: The Inviolable Axiom */}
      <div className="bg-slate-950 text-slate-100 p-6 rounded-xl space-y-4 shadow-lg border border-slate-800 font-sans">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-rose-400" />
            <span>The Foundational Axiom of Liu Yue’s Theory</span>
          </div>
          <span className="font-mono text-amber-300">Epistemological Demarcation</span>
        </div>
        <blockquote className="border-l-4 border-rose-600 pl-4 py-1 italic font-serif text-slate-200 text-sm md:text-base leading-relaxed">
          “凡事只要教条了，就已经不是科学了。科学是逻辑、科学最重要的是提出问题而不是积累实验数据、科学是思辨而不是被动的实验观察。科学是善于提出新颖的想法。实验是炼金术。科学是形而上学不是辩证法。针对不同的问题，有不同的形而上学方法，形而上学的逻辑是千变万化的。而辩证法对于所有事物只有一种套路：这也对那也对，这也不对那也不对——万变不离其宗。”
        </blockquote>
        <div className="text-xs text-slate-400 font-mono text-right">
          — Dr. Yue Liu, <em>Treatise on Scientific Logic vs. Academic Conformism</em> (2026)
        </div>
      </div>

      {/* Section 1: The Modern Dogma of Mechanical Science */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-slate-900 font-sans font-bold text-lg md:text-xl">
          <Ban className="w-5 h-5 text-rose-700" />
          <h2>1. The Modern Dogma: The Mechanical "Experiment–Hypothesis–Experiment" Myth</h2>
        </div>
        <p>
          Contemporary academic training drills a single, rigid formula into the minds of university students and junior researchers:
          science is defined as an unyielding cycle of <strong>“Experiment &rarr; Hypothesis &rarr; Experiment”</strong>.
          We are instructed that this mechanical loop is the sole legitimate pathway to truth.
          Under this doctrine, researchers are taught to obey established academic authorities, conform strictly to prevailing paradigms,
          and never formulate thoughts that contradict consensus.
        </p>
        <p>
          This dogma preaches an insidious form of scientific conformism (<em>墨守成规</em>). It convinces generations of scholars that
          science can be practiced like assembly-line clerical work: take a known material, synthesize a chemical variant, measure its
          properties in an automated spectrometer, fit the resulting curves to standard formulas, and publish the output.
          Original thought is quietly criminalized; speculative boldness is branded as arrogance; and adherence to institutional protocol is mistaken for rigor.
        </p>
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2 text-xs md:text-sm font-sans">
          <div className="font-bold text-rose-950 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-700" />
            <span>The Death of Science Through Dogmatization (凡事只要教条了，就已经不是科学了)</span>
          </div>
          <p className="font-serif text-slate-700 leading-relaxed">
            The moment any method, paradigm, or institutional routine becomes an untouchable dogma, it ceases to be science.
            Science by its very nature is an open, self-correcting, and disruptive enterprise.
            The moment an academic establishment says: <em>“You must not question this premise,”</em> or <em>“You must obtain laboratory evidence before you are permitted to identify a mathematical contradiction,”</em>
            the enterprise has degenerated into scholastic theology and feudal guild control.
          </p>
        </div>
      </section>

      {/* Section 2: Science Is Logic; Experiment Is Alchemy */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-slate-900 font-sans font-bold text-lg md:text-xl">
          <Binary className="w-5 h-5 text-rose-700" />
          <h2>2. Science Is Logic and Speculation; Experiment Is Modern Alchemy</h2>
        </div>
        <p>
          To understand why modern academia is drowning in unreproducible literature, one must grasp Liu Yue’s fundamental demarcation:
          <strong>Science is Logic; Experiment is Alchemy (科学是逻辑，实验是炼金术).</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs md:text-sm my-4">
          <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl space-y-2 shadow-xs">
            <div className="font-bold text-rose-950 border-b border-rose-200 pb-1 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-rose-700" />
              <span>SCIENCE = Pure Logical Reasoning & Speculation (思辨)</span>
            </div>
            <p className="font-serif text-slate-700 leading-relaxed text-xs">
              Science is the art of <strong>formulating profound questions (提出问题)</strong> rather than compiling instrument readouts.
              It is speculative thinking (<em>思辨</em>), first-principles deduction, and the courage to uncover latent contradictions.
              As Albert Einstein famously observed: <em>“The formulation of a problem is often more essential than its solution, which may be merely a matter of mathematical or experimental skill.”</em>
              Science begins in the intellect; its bedrock is the logical invariance of 1+1=2.
            </p>
          </div>

          <div className="p-4 bg-slate-100 border border-slate-300 rounded-xl space-y-2 shadow-xs">
            <div className="font-bold text-slate-900 border-b border-slate-200 pb-1 flex items-center gap-1.5">
              <FlaskConical className="w-4 h-4 text-slate-700" />
              <span>EXPERIMENT = Alchemy (Evidence-Gathering Craft)</span>
            </div>
            <p className="font-serif text-slate-700 leading-relaxed text-xs">
              Experimentation, in its unreflective empirical mode, is an operational craft—the mechanical collection of sensory or instrumental data.
              Historical alchemy was packed with experiments: alchemists spent lifetimes boiling retorts, mixing powders, and recording colors.
              Yet alchemy was not science, because it lacked logical first principles and mathematical conservation laws.
              Experiment gathers raw data for questions posed by science, but the act of gathering data is not itself science.
            </p>
          </div>
        </div>

        <p>
          Today’s materials science laboratories have become computerized alchemical workshops.
          Equipped with millions of dollars of advanced autoclaves and vector network analyzers, researchers synthesize infinite variations of
          composites (graphene, MXene, MOFs), record arbitrary reflection loss curves, and fit them to mathematically invalid formulas
          such as the 50-year-old impedance matching condition <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> and quarter-wavelength interference.
          Because they possess mountains of "experimental data," they claim scientific validity.
          In truth, data fitting on a false theoretical foundation is merely modern alchemical divination.
        </p>
      </section>

      {/* Section 3: Metaphysics vs. Dialectics */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-slate-900 font-sans font-bold text-lg md:text-xl">
          <Layers className="w-5 h-5 text-rose-700" />
          <h2>3. Metaphysics vs. Dialectics: Kaleidoscopic Rigor vs. Formulaic Evasion</h2>
        </div>
        <p>
          One of the deepest insights in Liu Yue’s epistemology is the sharp distinction between authentic scientific metaphysics and dialectical sophistry:
          <strong>Science is Metaphysics, NOT Dialectics (科学是形而上学不是辩证法).</strong>
        </p>

        <div className="space-y-4 my-4">
          {/* Metaphysics Card */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs md:text-sm">
            <h3 className="font-sans font-bold text-slate-900 flex items-center gap-2 text-sm border-b border-slate-200 pb-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>The Metaphysical Nature of Science: Kaleidoscopic Logic (千变万化)</span>
            </h3>
            <p className="font-serif text-slate-700 leading-relaxed">
              In the philosophy of science, genuine metaphysics refers to the construction of precise, well-defined conceptual entities,
              exact boundary conditions, and deductive structures that isolate invariant physical essences from empirical chaos.
              Crucially: <strong>for different problems, there are completely different metaphysical methods.</strong>
            </p>
            <p className="font-serif text-slate-700 leading-relaxed">
              The logic of metaphysics is kaleidoscopic (*千变万化*):
              in boundary electrodynamics, it delineates the distinct impedance relations across interfaces (<em>Z</em><sub>1</sub>, <em>Z</em><sub>2</sub>, <em>Z</em><sub>3</sub>);
              in bulk materials, it isolates intrinsic propagation attenuation;
              in thermodynamics, it enforces exact differential relations.
              Each specific physical problem demands its own rigorous, tailored, and falsifiable metaphysical framework.
            </p>
          </div>

          {/* Dialectics Card */}
          <div className="p-4 bg-rose-50/60 border border-rose-200 rounded-xl space-y-2 text-xs md:text-sm">
            <h3 className="font-sans font-bold text-rose-950 flex items-center gap-2 text-sm border-b border-rose-200 pb-1.5">
              <Crosshair className="w-4 h-4 text-rose-700" />
              <span>The Intellectual Poverty of Dialectics: A Universal Formula of Evasion (万变不离其宗)</span>
            </h3>
            <p className="font-serif text-slate-700 leading-relaxed">
              In stark contrast, dialectics applies a single, monotonous formula to every problem under the sun:
              <br />
              <strong className="text-rose-900 italic">“This is right, and that is also right; this is not right, and that is also not right” (这也对那也对；这也不对那也不对).</strong>
            </p>
            <p className="font-serif text-slate-700 leading-relaxed">
              No matter what the subject is, dialectical logic never changes (<em>万变不离其宗</em>).
              It dissolves exact boundaries into vague, equivocating mush.
              When mainstream peer reviewers are confronted with the undeniable mathematical refutation of impedance matching by wave mechanics,
              they retreat into dialectical sophistry:
              <em>“Wave mechanics has merit, but impedance matching is also valid from a practical perspective; both theories complement each other!”</em>
            </p>
            <p className="font-serif text-slate-700 leading-relaxed font-semibold text-rose-950">
              This is pure intellectual bankruptcy. A mathematical contradiction cannot be "dialectically balanced."
              Either <em>Z</em><sub>in</sub> is the input impedance of a backed film, or it is the intrinsic impedance of an infinite medium; it cannot be both.
              Metaphysics demands categorical precision; dialectics provides an alibi for cowardice.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Paul Feyerabend's Epistemological Anarchism */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-slate-900 font-sans font-bold text-lg md:text-xl">
          <Shuffle className="w-5 h-5 text-rose-700" />
          <h2>4. Paul Feyerabend’s Epistemological Anarchism: "Anything Goes" (怎么都行)</h2>
        </div>
        <p>
          The belief that science progresses via an orderly, prescribed "scientific method" was definitively dismantled by the philosopher of science
          <strong>Paul Feyerabend</strong> in his revolutionary works <em>Against Method</em> (1975) and <em>Farewell to Reason</em> (1987).
        </p>

        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl border border-slate-800 space-y-4 font-mono text-xs shadow-md">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-amber-400 font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Unlock className="w-4 h-4 text-amber-400" />
              <span>Feyerabend’s Maxim: The Shattering of Methodological Monopolies</span>
            </div>
            <span className="text-rose-400 font-sans text-xs">"Anything Goes"</span>
          </div>
          <div className="space-y-3 font-serif text-slate-200 text-xs md:text-sm leading-relaxed">
            <p>
              • <strong>No Universal Method Exists:</strong> Feyerabend scrutinized the history of scientific revolutions and demonstrated that there is not a single rule, however plausible or firmly grounded in epistemology, that has not been violated at some time or another.
            </p>
            <p>
              • <strong>Breakthroughs Require Rule-Breaking:</strong> Such violations are not accidental glitches; they are necessary for progress. If scientists had insisted on the consensus methods and evidence standards of their day, Copernicus, Galileo, and Einstein would have been silenced immediately.
            </p>
            <p>
              • <strong>Rationality as an Idol and a Shackle:</strong> The idolization of a single "scientific method" is an ideological weapon used by academic cartels to suppress heterodox thinking and maintain institutional control over research funding.
            </p>
            <p>
              • <strong>The Liberating Principle ("Anything Goes"):</strong> As Feyerabend famously proclaimed, if one insists on a universal principle for scientific progress, the only principle that can be defended under all circumstances and in all stages of human development is: <em>anything goes</em> (怎么都行).
            </p>
          </div>
        </div>

        <p>
          Feyerabend’s epistemological anarchism perfectly converges with Liu Yue’s philosophy.
          True scientific discovery is an act of intellectual rebellion.
          The requirement that all new thought must conform to the prescribed "experiment-hypothesis-experiment" assembly line
          turns the republic of science into a totalitarian monastery where high priests demand obedience to holy texts.
        </p>
      </section>

      {/* Section 5: Demanding Experimental Permission Protects Academic Monopolies */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-slate-900 font-sans font-bold text-lg md:text-xl">
          <ShieldAlert className="w-5 h-5 text-rose-700" />
          <h2>5. How Demanding Experimental Permission Protects Academic Monopolies</h2>
        </div>
        <p>
          Why do mainstream journals, peer reviewers, and funding agencies stubbornly demand "experimental verification" whenever an outsider
          or whistleblower presents an airtight mathematical refutation of an established theory?
        </p>
        <p>
          As detailed in <em>The Chaos of Academia, Part 7: Science Requires Rigorous Logic, Not Merely Abundant Evidence</em> (SSRN: 5784682, 5709303),
          the demand for evidence is an <strong>asymmetric instrument of suppression</strong>:
        </p>

        <div className="p-5 bg-rose-50 border border-rose-200 rounded-xl space-y-3 text-xs md:text-sm font-sans text-slate-800">
          <div className="font-bold text-rose-950 flex items-center gap-2 text-sm border-b border-rose-200 pb-1">
            <Swords className="w-4 h-4 text-rose-700" />
            <span>The Feudal Gatekeeping Mechanism</span>
          </div>
          <ul className="list-disc pl-5 space-y-2 font-serif text-slate-700 text-xs">
            <li>
              <strong>Monopolizing the Means of "Evidence Production":</strong> Academic incumbents control tens of millions of dollars in national grants, state laboratories, postdoctoral teams, and instrument time. By demanding that no theoretical challenge may be published without new laboratory data, they effectively price independent scholars out of the market of ideas.
            </li>
            <li>
              <strong>Evading Logical Accountability:</strong> When Liu, Liu, and Drew demonstrated that <em>Z</em><sub>in</sub> = <em>Z</em><sub>0</sub> implies zero interfacial reflection, and that microwave absorption in metal-backed films is caused by multi-beam wave interference rather than quarter-wavelength resonance, mainstream defenders could not point out a single error in the algebra. Instead, they demanded: <em>“Where are your newly synthesized experimental samples?”</em>
            </li>
            <li>
              <strong>The Absurdity of the Demand:</strong> Demanding experimental proof for a mathematical proof is like demanding that someone perform a physical measurement to verify that 1 + 1 = 2. When a theory is internally contradictory, no amount of experimental data can resurrect it.
            </li>
          </ul>
        </div>

        <p>
          Demanding experimental permission before allowing theoretical questions to be voiced is a totalitarian perversion of science.
          Science progresses when questions are posed freely on the basis of logic.
          Evidence is gathered to investigate questions; it cannot be used as a barbed-wire fence to prevent questions from being asked.
        </p>
      </section>

      {/* Section 6: Historical Vindication: Thought Overrides Sensation */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-slate-900 font-sans font-bold text-lg md:text-xl">
          <History className="w-5 h-5 text-rose-700" />
          <h2>6. Historical Vindication: Great Advances Occur Through Deductive Logic, Not Sensory Data</h2>
        </div>
        <p>
          The history of science confirms that the greatest breakthroughs occurred not by conforming to consensus evidence, but by overthrowing it through rigorous deductive logic:
        </p>

        <div className="space-y-3 font-serif text-slate-800 text-xs md:text-sm">
          {/* Galileo */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h3 className="font-sans font-bold text-slate-900 flex items-center gap-1.5">
              <Key className="w-4 h-4 text-amber-600" />
              <span>Galileo Overturned Aristotle by Logic, Not by Dropping Cannonballs</span>
            </h3>
            <p className="leading-relaxed text-xs">
              For nearly two thousand years, the entire civilized world possessed overwhelming "experimental evidence" that heavier objects fall faster than lighter ones—every child saw a rock fall faster than a feather.
              Galileo destroyed Aristotle not with a vacuum chamber (which did not exist), but with pure, irrefutable logical contradiction:
            </p>
            <div className="bg-white p-3 rounded-lg border border-slate-200 italic font-mono text-xs text-slate-700">
              Suppose a heavy stone H falls faster than a light stone L. Tie them together: (H+L). Since L is slower, it should retard H, so (H+L) must fall slower than H alone. But simultaneously, (H+L) is heavier than H, so it must fall faster than H alone. An assumption that yields both "slower" and "faster" is an absolute logical impossibility.
            </div>
            <p className="leading-relaxed text-xs">
              Logic alone settled the question forever. Galileo did not require an experimental grant from the Medici court to know that gravity acts uniformly on all masses in a vacuum.
            </p>
          </div>

          {/* Copernicus */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h3 className="font-sans font-bold text-slate-900 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-blue-600" />
              <span>Copernicus vs. Geocentric "Sensory Evidence"</span>
            </h3>
            <p className="leading-relaxed text-xs">
              Direct sensory observation has always "proven" geocentrism: every morning, humanity directly observes the sun moving across the sky while the Earth feels motionless.
              If science were merely the accumulation of observational evidence, geocentrism would remain gospel.
              Copernicus, Kepler, and Newton overthrew millennia of observational consensus because mathematical elegance and gravitational logic superseded sensory appearance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Conclusion: A Manifesto for the Rebellious Soul of Science */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-slate-900 font-sans font-bold text-lg md:text-xl">
          <Sparkles className="w-5 h-5 text-rose-700" />
          <h2>7. Conclusion: Breaking the Chains of Academic Scholasticism</h2>
        </div>
        <p>
          To declare that <strong>science is logic, experiment is alchemy, and dogmatism is the death of truth</strong> is not a rejection of empirical reality;
          it is the rescue of genuine scientific inquiry from bureaucratic scholasticism.
        </p>
        <p>
          When academic institutions reduce science to conformist data gathering, they produce an ecosystem where:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
          <li>Peer reviewers act as corporate censors guarding entrenched paradigms.</li>
          <li>Over 95% of published SCI papers become unreproducible cargo-cult noise.</li>
          <li>Elementary algebraic errors persist for over half a century because nobody is permitted to challenge academic authorities.</li>
          <li>Dialectical equivocation replaces sharp logical clarity.</li>
        </ul>

        {/* Closing Credo Banner */}
        <div className="p-5 bg-slate-950 text-slate-100 rounded-xl border border-rose-900 space-y-3 font-sans text-xs md:text-sm shadow-xl mt-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-amber-400 font-mono font-bold uppercase tracking-wider">
            <span>The Epistemological Creed of Liu Yue’s Theory</span>
            <span className="text-rose-400 text-xs">Logic Over Consensus</span>
          </div>
          <p className="font-serif text-slate-200 text-xs md:text-sm leading-relaxed italic">
            “True science is born of rebellious speculation, fearless logical derivation, and the audacity to challenge consecrated dogma.
            It does not beg for experimental permission from academic monopolies.
            For different problems, we employ kaleidoscopic metaphysical methods; we reject the formulaic cop-outs of dialectics.
            We embrace Feyerabend’s revolutionary truth: there is no sacred method, and progress belongs to those who dare to think.
            Restore the sovereignty of pure logic, and the paper empires of modern academic scholasticism will crumble.”
          </p>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-slate-200 pt-6 text-center font-sans text-xs text-slate-500 space-y-1">
        <p className="font-semibold text-slate-700">
          Published as Essay FC in the Critical Treatises Series on Epistemological Philosophy & Academic Reform
        </p>
        <p>
          Full Treatises and Archival Records Available via Substack, SSRN, Preprints.org, and Research Square
        </p>
      </div>
    </article>
  );
}
