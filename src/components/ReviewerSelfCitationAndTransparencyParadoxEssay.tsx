import React from "react";
import { Scale, AlertTriangle, BookOpen, ExternalLink, ShieldAlert, CheckCircle2, FileText, Zap, Eye, Lightbulb, Bot, Globe, Award, HelpCircle, Layers } from "lucide-react";

export default function ReviewerSelfCitationAndTransparencyParadoxEssay() {
  return (
    <article className="max-w-4xl mx-auto space-y-8 font-serif text-slate-800 leading-relaxed text-sm md:text-base selection:bg-rose-100 selection:text-rose-900" id="reviewer-self-citation-transparency-essay">
      {/* Title & Header Header */}
      <div className="text-center space-y-4 border-b border-slate-200 pb-6 font-sans">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200 uppercase tracking-widest">
          <ShieldAlert className="w-3.5 h-3.5" />
          Critical Commentary & Epistemological Defense
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
          The Tip of the Iceberg in Academic Degeneration: Review Mills, the Transparency Paradox, and the Misguided Demonization of Self-Citation
        </h1>
        <p className="text-slate-600 font-serif italic text-xs md:text-sm max-w-3xl mx-auto">
          A Jurisprudential and Epistemological Critique of Coerced Citations, Journal Opacity, and the Metric-Driven Decay of Modern SCI Science
        </p>
        <p className="text-xs text-slate-500 font-mono">
          By Dr. Yue Liu, Dr. Ying Liu, & Prof. Michael G. B. Drew • August 2026
        </p>
        
        {/* Substack & SSRN Links Banner */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-rose-900 bg-rose-50 px-3 py-2 rounded-lg border border-rose-100 font-sans font-semibold">
          <span className="font-bold text-slate-900">Featured SSRN Legal & Epistemological Treatises:</span>
          <a
            href="https://ssrn.com/abstract=5524363"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-rose-700 hover:text-rose-950 underline font-mono"
          >
            SSRN: 5524363 (Reviewer Self-Citation Rights) <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="https://ssrn.com/abstract=5392646"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-rose-700 hover:text-rose-950 underline font-mono"
          >
            SSRN: 5392646 (Self vs. External Citation Reliability) <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Featured Primary Research References Corpus Box */}
      <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-4 md:p-5 text-xs font-sans text-amber-950 space-y-2 shadow-xs">
        <div className="flex items-center gap-2 font-bold text-amber-900 uppercase tracking-wider border-b border-amber-200/80 pb-1.5">
          <BookOpen className="w-4 h-4 text-amber-700" />
          <span>Core Reference Corpus for this Critical Commentary</span>
        </div>
        <ul className="space-y-1.5 font-serif text-slate-800 text-xs leading-relaxed">
          <li>
            • <strong>Liu, Y. (2025).</strong> <em>Editorial Authority vs. Reviewer Integrity: The Case for Reviewer Self-Citation Rights.</em> SSRN Electronic Journal, DOI: <a href="https://dx.doi.org/10.2139/ssrn.5524363" target="_blank" rel="noreferrer" className="text-amber-800 underline font-mono font-bold">10.2139/ssrn.5524363</a>.
          </li>
          <li>
            • <strong>Liu, Y. (2025).</strong> <em>Self-Citation Versus External Citation in Academic Publishing: A Critical Analysis of Citation Reliability, Publication Biases, And Scientific Quality Assessment.</em> SSRN Electronic Journal, DOI: <a href="https://dx.doi.org/10.2139/ssrn.5392646" target="_blank" rel="noreferrer" className="text-amber-800 underline font-mono font-bold">10.2139/ssrn.5392646</a>.
          </li>
          <li>
            • <strong>Liu, Y., Liu, Y., & Drew, M. G. B. (2025).</strong> <em>Paper Mills as Legitimate Commercial Transactions, Copyright Transfers, and the Cargo Cult Mania of Scientific Pretense.</em> Qeios, DOI: <a href="https://doi.org/10.32388/M4GGKZ" target="_blank" rel="noreferrer" className="text-amber-800 underline font-mono">10.32388/M4GGKZ</a>.
          </li>
        </ul>
      </div>

      {/* Executive Abstract Box */}
      <div className="bg-slate-900 text-slate-100 p-6 rounded-xl space-y-3 shadow-md border border-slate-800 font-sans">
        <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
          <Zap className="w-4 h-4 text-rose-400" />
          <span className="font-bold">Abstract & Executive Thesis</span>
        </div>
        <p className="text-slate-300 font-serif text-xs md:text-sm leading-relaxed">
          The public exposure of automated "review mills"—such as the high-profile case of Prof. Börsch receiving copy-pasted review reports requiring coerced citations to unrelated Alzheimer’s studies—is merely the <strong>visible tip of a colossal academic iceberg</strong>. What remains unexposed is a far more pervasive, systemic tragedy: modern science has entered a Dark Age of <em>Cargo Cult Science</em>, where over 95% of published SCI papers consist of meaningless data accumulation devoid of theoretical innovation. Furthermore, the public vilification of open-access publishers like MDPI highlights a profound institutional hypocrisy: <strong>the Transparency Paradox</strong>. MDPI is targeted not because its peer review is inherently dirtier than traditional journals, but because it makes review reports transparently public. Meanwhile, closed-door journals hide their corrupt peer reviews behind impenetrable black boxes. Crucially, while conventional commentary blindly demonizes all self-citations, a rigorous legal analysis reveals that <strong>authors and reviewers possess an intrinsic, unalienable right to cite their own relevant work</strong> because they know their intellectual trajectory best. Self-citation was never inherently corrupt; it became distorted solely because the academic establishment converted SCI impact factors and citation counts into hard commercial currency for career advancement.
        </p>
      </div>

      {/* Section I: The Exposed Iceberg vs. The Deep Dark Age of Cargo Cult Academia */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-slate-900 font-sans font-bold text-lg md:text-xl">
          <Layers className="w-5 h-5 text-rose-700" />
          <h2>Section I: The Exposed Iceberg vs. The Dark Age of Cargo Cult Science</h2>
        </div>
        <p>
          The case of Prof. Borsch—a biophysical chemist at the University of Jena whose solid, 15-month study on ATP-generating enzymes was slapped with a degrading yellow warning banner by MDPI—has ignited widespread outrage across the academic community. Prof. Börsch had received what he termed the "laziest peer review" of his 30-year career: a reviewer copied paragraphs from his abstract, issued generic demands to shorten the conclusions and fix grammar, and forcibly demanded the insertion of two references on Alzheimer’s disease completely unrelated to ATP synthase enzymes.
        </p>
        <p>
          When Spanish researcher Oviedo-García uncovered that this exact copy-pasted review template appeared across 85 (and later 263) peer review reports, a systematic "review mill" was exposed. Yet, the publisher’s response was perversely backwards: instead of punishing the reviewer or the editor who oversaw this scheme, MDPI slapped warning labels on the innocent authors' published papers and subjected them to unauthorized re-review using unrevised manuscript drafts.
        </p>
        <div className="p-4 bg-rose-50 border-l-4 border-rose-600 rounded-r-lg space-y-2 text-rose-950 font-sans text-xs md:text-sm">
          <div className="font-bold flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>The Tip of the Iceberg Delusion</span>
          </div>
          <p className="font-serif text-slate-800 leading-relaxed">
            What the public and science journalists observe in cases like the Börsch review mill is merely 5% of the crisis—the superficial operational friction of metric-gaming. <strong>The unexposed 95% is infinitely more devastating: modern academia is trapped in a profound Dark Age of Cargo Cult Science.</strong> Over 95% of SCI articles published today are useless academic garbage—methodological alchemy where routine experimental data are produced purely to satisfy publication quotas, lacking any fundamental theoretical breakthrough or logical rigor.
          </p>
        </div>
      </section>

      {/* Section II: The Transparency Paradox — Why Openness Makes You Look "Dirtier" */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-slate-900 font-sans font-bold text-lg md:text-xl">
          <Eye className="w-5 h-5 text-rose-700" />
          <h2>Section II: The Transparency Paradox — How Open Review Reverses Public Perception</h2>
        </div>
        <p>
          A central insight highlighted in the video analysis is what can be defined as <strong>The Transparency Paradox of Academic Publishing</strong>:
        </p>
        <blockquote className="border-l-4 border-slate-800 pl-4 py-2 my-4 bg-slate-50 italic text-slate-700 text-sm font-serif">
          "These journals are not caught because they are the dirtiest; they are caught because they publish their peer review reports openly... Transparency itself makes you look dirtier. This is the most perverted dilemma in academic publishing today: whoever is more transparent is more easily singled out as a target."
        </blockquote>
        <p>
          Publishers like MDPI, PeerJ, and PLOS ONE pioneered open peer review, attaching review reports and editorial communications directly to published articles. It was precisely this public disclosure that allowed detectives like Oviedo-García and PubPeer contributors to run textual comparison algorithms and catch review mills red-handed.
        </p>
        <p>
          Conversely, traditional "legacy" subscription journals maintain a impenetrable wall of secrecy. Peer review reports in high-impact closed journals remain forever hidden behind editorial curtains. The absence of public review-mill scandals in traditional closed journals is <strong>not evidence of editorial purity, but proof of institutional opacity</strong>. The current academic system creates a perverse disincentive: it rewards closed-door secrecy and penalizes those who dare to make peer review transparent to the scientific public.
        </p>
      </section>

      {/* Section III: Divergence — The Legal and Epistemic Right to Reviewer Self-Citation */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-slate-900 font-sans font-bold text-lg md:text-xl">
          <Scale className="w-5 h-5 text-rose-700" />
          <h2>Section III: Divergence from Mainstream Dogma — In Defense of Self-Citation Rights</h2>
        </div>
        <p>
          Where our critical analysis fundamentally diverges from the mainstream narrative presented in the video is in the treatment of <strong>self-citation</strong>. Conventional academic ethics blindly treats all reviewer self-citation as a corrupt sin, operating on the unexamined orthodoxy that "citing oneself is inherently biased, while only external citations represent impartial consensus."
        </p>
        <p>
          This conventional view is jurisprudentially and epistemologically flawed, as established in the foundational works of Dr. Yue Liu:
        </p>
        
        {/* Dual Paper Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs md:text-sm my-4">
          <div className="p-4 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 space-y-2">
            <div className="text-amber-400 font-bold flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>1. Reviewer Self-Citation Rights (SSRN: 5524363)</span>
            </div>
            <p className="font-serif text-slate-300 text-xs leading-relaxed">
              In <em>Editorial Authority vs. Reviewer Integrity: The Case for Reviewer Self-Citation Rights</em>, Dr. Yue Liu proves that <strong>authors and reviewers have the fundamental right to cite and recommend their own prior work</strong>. Because researchers possess the deepest expert knowledge of their own intellectual trajectory and methodologies, recommending relevant self-citations that directly clarify, support, or correct a manuscript is a legitimate epistemic contribution—not misconduct.
            </p>
          </div>
          <div className="p-4 bg-slate-900 text-slate-100 rounded-xl border border-slate-800 space-y-2">
            <div className="text-rose-400 font-bold flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <Award className="w-4 h-4 text-rose-400" />
              <span>2. Self vs. External Reliability (SSRN: 5392646)</span>
            </div>
            <p className="font-serif text-slate-300 text-xs leading-relaxed">
              In <em>Self-Citation Versus External Citation in Academic Publishing</em>, Dr. Yue Liu demonstrates that <strong>external citations are frequently far more biased, superficial, and corrupt than self-citations</strong>. External citations in SCI papers are overwhelmingly routine "courtesy citations," citation rings, or unread superficial mentions. Self-citations, by contrast, frequently reflect genuine methodological continuity and deep theoretical development.
            </p>
          </div>
        </div>

        <p>
          The dogmatic prohibition against self-citation forces authors and reviewers into an absurd performance of hypocrisy: scholars are coerced into citing inferior or irrelevant third-party papers simply to project a false illusion of "impartiality." The true violation in review mills is <strong>coercion and irrelevance</strong> (forcing a wastewater paper to cite Alzheimer's research), NOT the act of self-citation itself.
        </p>
      </section>

      {/* Section IV: The Convergence — SCI Metric Fetishism Weaponizes Citation into Currency */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-slate-900 font-sans font-bold text-lg md:text-xl">
          <Lightbulb className="w-5 h-5 text-rose-700" />
          <h2>Section IV: The Convergence — SCI Metric Worship Weaponizes Citations</h2>
        </div>
        <p>
          Where our perspective fully aligns with the video commentary is in identifying the true root cause of citation gaming: <strong>the transformation of citation metrics into academic hard currency</strong>.
        </p>
        <p>
          Self-citation was never inherently an ethical crime. It became a pathological problem only when university administrations, hiring committees, funding agencies, and global ranking algorithms turned citation counts, h-indexes, and SCI Impact Factors into the sole yardstick for professional survival:
        </p>
        <ul className="list-disc pl-6 space-y-2 font-serif text-slate-800">
          <li>
            <strong>Citations as Tenure Currency:</strong> When promotions, grants, faculty appointments, and lab space depend strictly on numerical citation thresholds, academics are rationally incentivized to trade citations as commodities.
          </li>
          <li>
            <strong>Review Power as a Trading Table:</strong> Peer review authority is one of the few places in the academic machinery where a reviewer holds direct leverage over an author. When metrics dictate survival, peer review naturally devolves into a transactional bazaar.
          </li>
          <li>
            <strong>The Review Mill Evolution:</strong> Ring-fenced syndicates (such as the cluster of Italian oncologists citing their own work across 170 papers with editorial complicity) are not isolated moral failures; they are the natural, inevitable free-market response to a system that measures scientific worth by citation tallies rather than logical truth.
          </li>
        </ul>
      </section>

      {/* Section V: Institutional Injustice and The Path to True Epistemological Integrity */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-slate-900 font-sans font-bold text-lg md:text-xl">
          <Globe className="w-5 h-5 text-rose-700" />
          <h2>Section V: Institutional Injustice and the Path to True Epistemological Integrity</h2>
        </div>
        <p>
          Perhaps the most harrowing aspect of the Börsch scandal is the total institutional cowardice of academic publishers and funding agencies. Prof. Börsch did everything right: he spent 15 months conducting solid science, politely declined the reviewer's coercive citations, and published his paper. Yet, when the review mill was exposed, the journal branded his paper with a warning label, causing immense emotional distress and career damage to his young PhD student.
        </p>
        <p>
          As Oxford Professor Dorothy Bishop remarked: <em>"Innocent authors are simply treated as fodder, doing the dirty work for reviewers while reviewers reap the citations."</em>
        </p>
        
        <div className="p-5 bg-slate-950 text-slate-100 rounded-xl border border-rose-900 space-y-3 font-sans text-xs md:text-sm my-4 shadow-lg">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-amber-400 font-mono font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-amber-400" />
              <span>Epistemological Reform Roadmap</span>
            </div>
            <span className="text-rose-400 text-xs">Abolish Cargo Cult Metrics</span>
          </div>
          <p className="font-serif text-slate-300 text-xs leading-relaxed">
            To rescue scientific publishing from its current Dark Age, the global research community must enact four structural reforms:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 font-serif text-slate-200 text-xs leading-relaxed">
            <li>
              <strong>Abolish Citation-Count & Impact-Factor Evaluation:</strong> Discontinue the use of citation metrics and h-indexes in faculty hiring, tenure evaluation, and grant allocation.
            </li>
            <li>
              <strong>Protect Legitimate Author & Reviewer Self-Citation Rights:</strong> Recognize that authors and reviewers have the absolute right to cite relevant self-work (*SSRN: 5524363*), rejecting dogmatic anti-self-citation taboos.
            </li>
            <li>
              <strong>Mandate Universal Open Peer Review:</strong> Force ALL traditional closed-door journals to publish unedited peer review reports and editorial communications, eliminating the Transparency Paradox.
            </li>
            <li>
              <strong>Shift Evaluation to First-Principles Truth:</strong> Judge scientific papers exclusively on object-level mathematical logic, physical derivations, and experimental reproducibility, rather than journal brand prestige or citation tallies.
            </li>
          </ol>
        </div>
      </section>

      {/* Summary Concluding Statement */}
      <div className="border-t border-slate-200 pt-6 text-center font-sans text-xs text-slate-500 space-y-1">
        <p className="font-semibold text-slate-700">
          Published as part of Dr. Yue Liu's Academic Epistemology & Legal Jurisprudence Series
        </p>
        <p>
          Preprints & Legal Treatises Available via SSRN, Qeios, Preprints.org, and Substack
        </p>
      </div>
    </article>
  );
}
