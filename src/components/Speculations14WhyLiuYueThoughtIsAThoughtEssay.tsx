import React, { useState } from "react";
import {
  BookOpen,
  Copy,
  Check,
  Scale,
  Sparkles,
  Flame,
  AlertTriangle,
  Landmark,
} from "lucide-react";

export default function Speculations14WhyLiuYueThoughtIsAThoughtEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("speculations-14-why-thought-article-text");
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

  const fullEnglishArticle = `Why Liu Yue's Thought Qualifies as an Original Philosophy of Science — A Critical Commentary on Episode 14 and "Liu Yue's Theory: Science as Logic, Experiment as Alchemy"

1. From "Opinion" to "Thought": What Episode 14 and the AI Assessments Accomplished
When an unconventional thinker challenges academic orthodoxy, the easiest way for defenders of the status quo to dismiss the challenge is to call it "mere personal venting" rather than a coherent philosophy. What makes Episode 14 of "From Liu Yue's Thought to Quantum Mechanics" (https://yueliusd.substack.com/p/14) and the companion treatise "Liu Yue's Theory: Science as Logic, Experiment as Alchemy" (https://yueliusd.substack.com/p/liu-yues-theory-science-as-logic) so significant is that they force two independent analytical frameworks (DeepSeek and Yuanbao) to confront a simple taxonomic question without resorting to mainstream value judgments: Why does Liu Yue's Thought qualify as a genuine intellectual system—a "Thought"—rather than an isolated opinion?

Both analyses arrive at a remarkably clear verdict. As Yuanbao summarizes, a genuine Thought must possess five structural traits: (1) an explicit categorical redefinition ("what science is and is not"), (2) a deductive chain connecting definition to institutional ethics, (3) precise positioning within existing philosophical literature, (4) non-trivial metaphors carrying analytical weight rather than empty rhetoric, and (5) actionable consequences for how scientific inquiry should be organized. On every one of those five counts, Liu Yue's Thought passes decisively. DeepSeek captures this originality in one memorable line: "The ingredients are old; the combination is not."

2. Categorical Separation vs. Methodological Redistribution
Why is DeepSeek's formulation—"The separation is not methodological but categorical"—so essential? Because ordinary critiques of modern publishing merely complain that "papers have too much data and too little theory." That leaves the underlying hierarchy intact, treating science as a single amalgam where empirical data holds final veto power.

Liu Yue's Thought executes a clean surgical cut across four major traditions in the philosophy of science:
- Logical Empiricism (Reichenbach's discovery/justification distinction) separates theoretical structure from the messy path of discovery, yet keeps experimental confirmation inside the core of scientific justification.
- Ian Hacking's "experimental turn" grants experimentation a "life independent of theory"—but explicitly to elevate experiment's standing as a semi-autonomous branch of science.
- Karl Popper grants logical priority to theory over induction, yet leaves reproducible experiments on the judicial bench as the decisive tribunal of falsification.
- Paul Feyerabend fights methodological monopoly with counterinduction, yet dissolves standards into epistemological anarchism ("anything goes").

Dr. Yue Liu absorbs the anti-empiricist impulse across these lineages and drives it to its radical definitional conclusion: science proper is logical reasoning from axioms (Theory = Axioms + Logic), while experimentation is a distinct evidence-gathering craft ("alchemy"). Calling experiment "alchemy" is neither anti-laboratory bias nor historical ignorance—it is a categorical restoration. Alchemy had ovens, glassware, distillation, and empirical trial-and-error long before modern chemistry; what birthed chemistry as a science were mathematical proportions, mass conservation, and atomic theory. Experiment is therefore an indispensable auxiliary tool ("science needs alchemy"), never the essence of science itself.

3. The Institutional Breakthrough: Evidentiary Gatekeeping as Epistemic Monopoly
Where DeepSeek and Yuanbao both identify genuine philosophical novelty is in the institutional corollary drawn directly from this redefinition. If science is logical inquiry and experiment is a subordinate evidence-gathering enterprise, then a journal's demand for fresh laboratory datasets as a prerequisite for publishing a mathematical or conceptual refutation is not a "quality standard"—it is a category error enforcing institutional monopoly.

By demanding that a theorist submit new experimental data before criticizing an accepted framework (such as Impedance Matching Theory or the Quarter-Wavelength Model in microwave absorption, documented in Dr. Liu's Physica Scripta and Physica B papers), gatekeepers ensure that whoever controls laboratory funding and dataset volume dictates which logical questions are even allowed to be asked. A mathematical contradiction in an established paper does not wait for a new VNA scan to become a contradiction. Removing experiment from the definition of science removes the gatekeeper's primary pretext for silencing theoretical criticism.

4. Three Subtle Empiricist Retreats in DeepSeek's Summary That Must Be Corrected
While DeepSeek's English exposition is remarkably balanced and lucid, three subtle formulations quietly re-inject mainstream empiricism into Liu Yue's Thought and require explicit correction:

First, DeepSeek writes under "What the theory is not": "It does not deny that experiments can refute theories; it denies that the capacity to generate experimental refutations defines what science is." This accidentally projects Karl Popper back onto Dr. Yue Liu. A central tenet of Liu Yue's Thought (as articulated in Episodes 7–9 and "What Is Liu Yue's Thought?") is precisely that a genuinely correct theory derived by airtight logic from true axioms can NEVER be refuted by experiment, because Nature never violates mathematical logic. When an experiment appears to contradict a theory, the experiment merely sounds an alarm bell (a Trigger, not a Judge). Logical inquiry then diagnoses whether (a) the measurement or its interpretation erred (like bent chopsticks in water or the 2011 OPERA superluminal neutrino cable failure), (b) a hidden deductive step failed, or (c) an initial axiom was only an approximation. Conferring judicial "refutation" power on experiment directly contradicts the categorical sovereignty of logic.

Second, DeepSeek states: "And it does not propose that logical reasoning alone can establish empirical conclusions." This concedes too much to naive inductivism. Once valid physical axioms (such as Maxwell's equations, energy conservation, or Gibbs-Duhem thermodynamics) are established, mathematical logic regularly establishes concrete physical realities ahead of, or even in opposition to, prevailing experimental interpretations—from Dirac predicting the positron and Einstein deriving mass-energy equivalence to Liu, Liu, and Drew demonstrating from transmission-line theory that published experimental VNA datasets exhibit absorption peaks precisely at maximum impedance mismatch. Logic does not invent laboratory data, yet logic alone frequently determines which physical conclusions hold in nature and whether an experimental interpretation is valid.

Third, DeepSeek's introductory remark on Galileo—"thought experiments showed logic's power, while inclined-plane experiments provided empirical constraints"—glosses over Galileo's deepest epistemological point. In the Discorsi, Galileo refuted Aristotle's heavy-vs-light falling-body rule strictly by logical reductio ad absurdum before touching an inclined plane; and even his inclined-plane analysis relied on an idealized, strictly unobservable limit ("were all resistance and friction removed") supplied by pure geometric reasoning rather than raw observation.

5. Conclusion: A Provocation Built for Theoretical Freedom
"Why Is Liu Yue's Thought a Thought?" finds its sharpest answer right where Episode 14 lands. Whether every philosopher accepts "experiment = alchemy" as terminal vocabulary or not, the system cannot be waved away as informal complaint. It performs a rare philosophical double maneuver: it takes canonical debates over discovery, justification, falsification, and theoretical primacy, synthesizes them into a clean categorical distinction, and exposes the hidden political economy of modern peer review. An intellectual framework that explains why a logically irrefutable paper can be desk-rejected for lacking "new data"—and supplies a principled epistemological remedy—is not merely an opinion. It is a coherent, formidable philosophy of science.`;

  const coreAssessments = [
    {
      title: "1. Categorical vs. Methodological Cut",
      detail:
        "DeepSeek & Yuanbao recognize that separating science (axiomatic logic) from experiment ('alchemy') is not 'anti-data rhetoric'—it is a categorical boundary shift absent from Vienna Circle, Popper, Hacking, and Feyerabend.",
    },
    {
      title: "2. The Original Institutional Corollary",
      detail:
        "Demanding experimental datasets as the ticket to publish a logical refutation is a category mistake that lets data-threshold gatekeepers censor which theoretical questions can even be asked.",
    },
    {
      title: "3. Correcting DeepSeek's Popperian Slip",
      detail:
        "DeepSeek wrongly writes that Liu Yue 'does not deny experiments can refute theories.' In truth, valid logic from true axioms CANNOT be refuted by experiment; experiment only sounds an alarm while logic adjudicates.",
    },
    {
      title: "4. Restoring Logic's Physical Authority & Galileo",
      detail:
        "DeepSeek understates logic's reach into physical reality and Galileo's pure reductio ad absurdum. Valid physical axioms + math deduce physical conclusions independently and audit faulty experimental claims.",
    },
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="speculations-14-why-thought-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HP &bull; Critical Review of Episode 14
          </span>
          <span className="bg-emerald-100 text-emerald-900 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
            Science as Logic, Experiment as Alchemy &bull; Genealogy Audit
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Why Liu Yue&apos;s Thought Qualifies as an Original Philosophy of Science: Reviewing Episode 14 &amp; DeepSeek&apos;s Genealogy
        </h1>
        <p className="text-sm font-bold text-emerald-900 mt-2 font-sans">
          英文深度评论《从刘跃思想到量子力学的思辨 14》：为什么“刘跃思想”是一种思想？兼评 DeepSeek 英文长文的精准洞察与三处经验论残余
        </p>
        <p className="text-sm md:text-base text-slate-600 mt-2 font-sans italic">
          Commentary on Substack p/14 &amp; p/liu-yues-theory-science-as-logic analyzing Yuanbao&apos;s five structural criteria, DeepSeek&apos;s philosophical genealogy, and three subtle Popperian/inductivist slips that require correction.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
          <span className="text-xs text-slate-400 font-mono">
            Sources: Substack p/14 &bull; p/liu-yues-theory-science-as-logic
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(fullEnglishArticle, "eng-hp")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "eng-hp" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "eng-hp" ? "English Essay Copied!" : "Copy English Essay"}
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Full View Copied!" : "Copy Full Package"}
            </button>
          </div>
        </div>
      </div>

      {/* Part I: Key Analytical Highlights */}
      <section className="mb-10 space-y-5">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Landmark className="w-6 h-6 text-emerald-700" />
          <h2>Part I: Key Verdict &amp; Three Corrections at a Glance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {coreAssessments.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border space-y-1.5 font-sans ${
                idx >= 2 ? "bg-rose-50/50 border-rose-200" : "bg-slate-50 border-slate-200"
              }`}
            >
              <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2">
                {idx >= 2 ? (
                  <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0" />
                ) : (
                  <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
                )}
                <span>{item.title}</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Part II: Publication-Ready English Review Essay */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <BookOpen className="w-6 h-6 text-emerald-700" />
            <h2>Part II: Complete English Commentary Essay</h2>
          </div>
          <button
            onClick={() => handleCopyText(fullEnglishArticle, "eng-hp-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "eng-hp-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-hp-mid" ? "Copied!" : "Copy Essay Text"}
          </button>
        </div>
        <div className="bg-slate-900 text-slate-100 rounded-xl p-6 font-serif text-sm md:text-base leading-relaxed whitespace-pre-wrap border border-slate-700">
          {fullEnglishArticle}
        </div>
      </section>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Scale className="w-4 h-4 text-slate-400" />
          <span>Essay HP &bull; Commentary on Episode 14 &amp; Science as Logic, Experiment as Alchemy</span>
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Categorical Separation
          </span>
          <span className="bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-md font-semibold">
            Anti-Monopoly Ethics
          </span>
        </div>
      </div>
    </article>
  );
}
