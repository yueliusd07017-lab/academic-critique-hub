import React, { useState } from "react";
import {
  FileText,
  Copy,
  Check,
  BookOpen,
  Scale,
  AlertTriangle,
  Table2,
  Layers,
} from "lucide-react";

export default function IAskAiSixEpisodesCritiqueEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [tbl1Error, setTbl1Error] = useState(false);
  const [tbl2Error, setTbl2Error] = useState(false);

  const handleCopy = () => {
    const el = document.getElementById("iaskai-six-episodes-critique-article-text");
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

  const englishEssayText = `Critical Review of the 6-Episode Dialogue with iAsk.Ai on Liu Yue's Thought: Visibility Milestones, Historical Anchors, and Five Hidden Distortions (Including the Missing Episode 3 Tables)

I. A Visibility Milestone: Third-Party AI Engines Indexing Liu Yue's Thought
Across the six-episode exchange archived on Substack (iaskai1 through iaskai6), the most significant external development appears right at the opening of Episode 1: when asked "What is Liu Yue's Thought?", iAsk.Ai directly retrieved, indexed, and cited Dr. Yue Liu's own Substack monographs—including Essay HP ("Why Liu Yue's Thought Qualifies as an Original Philosophy of Science") and Essay HK ("Philosophical Foundations of Liu Yue's Thought"). Independent search-augmented AI systems are now recognizing and synthesizing Liu Yue's Thought as a named philosophical framework.

II. Episode-by-Episode Map (Episodes 1–6)
- Episode 1: Broad web-indexed encyclopedia synthesis covering the core axiom ("Science is logic; experiment is alchemy"), four anti-empiricist theses, critique of peer review, and standard mainstream caveats.
- Episode 2: Detailed breakdown of "Idealistic Metaphysics vs. Dialectical Materialism," correctly explaining why Dr. Liu defines scientific truth as invariant across space and time (e.g., H2O everywhere) and elevates mathematics above blind empirical trial-and-error.
- Episode 3 (Weakest & Most Distorted): Compares Liu Yue with Descartes/Leibniz, Kuhn, Feynman, Popper, and Lakatos, and inserts two summary tables—yet reveals severe AI hallucination when Dr. Liu supplies only a section title ("Three Subtle Empiricist Retreats in DeepSeek's Summary") without the underlying text.
- Episode 4 (Sharp Correction): After Dr. Liu clarifies that experimental "alchemy" is useful during discovery while completed "Axioms + Logic" theory stands independent of experiment, iAsk.Ai accurately links this two-stage distinction to Hans Reichenbach's Context of Discovery vs. Context of Justification and Einstein/Dirac's mathematical realism.
- Episode 5 (Best Historical Anchoring): Drawing on Dr. Liu's dual theses—(a) alchemy had experiments without science until theoretical frameworks emerged, and (b) science succeeds through metaphysics ("simplifying complexity into invariant laws") rather than "anything-goes" dialectics—iAsk.Ai connects the framework cleanly to Alexandre Koyré, Immanuel Kant's Critique of Pure Reason, and René Descartes' Discourse on the Method.
- Episode 6: Concludes that Liu Yue's Thought genuinely qualifies as a coherent original philosophy (clear ontological boundaries, sharp institutional diagnosis, and clear philosophical lineage), while slipping back into standard Popperian disclaimers at the end.

III. Dissecting the Two Episode 3 Tables & Five Traps to Watch Out For
When the two embedded table images from Episode 3 are examined directly alongside the text, five critical distortions emerge:

1. Strawmanning "Experiment as Illusion" (Both Episode 3 Tables):
Both tables claim Liu Yue "despises experiment as an unreliable hallucination" ("视实验为不可靠的幻觉"). That is a caricature that Dr. Liu himself had to correct in Episode 4: useful empirical craft ("alchemy") can assist human discovery, but usefulness does not make it science, nor can sense-data overturn valid "Axioms + Logic."

2. Pure AI Hallucination on DeepSeek's Critique (Episode 3, Section 4):
Lacking the actual text of Essay HP, iAsk.Ai guessed purely from the title and fabricated three fake criticisms (claiming DeepSeek compromised on "S-parameter thickness optimization" and "experimental correction of logic"). In reality, Essay HP corrected DeepSeek on Popper's misuse of "refute," the physical authority of logic, and Galileo's pure reductio ad absurdum.

3. Amateur Apologetics for "Phenomenological S-Parameters" (Episode 3):
iAsk.Ai asserts that in "strongly phenomenological" microwave absorption, a theory without measured S-parameter thickness scans cannot form a closed loop—utterly missing that Wave Mechanics Theory rigorously uses Maxwell's equations and transmission-line theory with measured constitutive parameters while exposing mathematical errors in impedance matching and quarter-wavelength curve fitting.

4. Asymmetric Framing of Popper vs. Liu Yue (Table 2):
Table 2 labels Liu Yue's framework a mere "rationalist backlash" while idealizing Popper as "welcoming open rational criticism and competition"—ignoring Dr. Liu's core critique that Popperian falsificationism is weaponized by modern SCI gatekeepers to suppress theoretical criticism prior to experimental data collection.

5. Terminological Drift & Fabricated Citations:
Episode 6 mistakenly summarizes Dr. Liu's "Idealistic Metaphysics" as "materialist rationalism" ("唯物理性主义"), and several auxiliary citations generated by the search wrapper reflect unverified bibliographic patchwork rather than genuine academic sources.`;

  const episodeSummaries = [
    {
      ep: "Episode 1 · Indexation",
      summary:
        "Retrieves Substack Essays HP & HK directly; outlines 'Science is logic, experiment is alchemy,' mathematics as natural science, and peer-review critique, wrapped in mainstream caveats.",
    },
    {
      ep: "Episode 2 · Idealistic Metaphysics",
      summary:
        "Articulates why natural science rests on invariant universal laws (H2O, conservation laws) and simple metaphysical laws rather than dialectical relativism.",
    },
    {
      ep: "Episode 3 · Tables & Hallucination",
      summary:
        "Presents two comparison tables (Popper, Kuhn, Logical Positivism, Descartes-Leibniz), but hallucinates DeepSeek's three retreats from a title alone and misstates microwave S-parameter physics.",
    },
    {
      ep: "Episode 4 · Discovery vs. Justification",
      summary:
        "Incorporates Dr. Liu's clarification ('useful alchemy ≠ science; completed theory stands independent of experiment') and maps it to Reichenbach, Einstein, and Dirac.",
    },
    {
      ep: "Episode 5 · Koyré, Kant & Descartes",
      summary:
        "Connects 'alchemy had experiments before science' and 'science triumphs via metaphysics, not dialectics' to Alexandre Koyré, Kant's legislative reason, and Descartes' method.",
    },
    {
      ep: "Episode 6 · Verdict & Retreat",
      summary:
        "Affirms Liu Yue's Thought qualifies as a genuine, coherent philosophy by three rigorous criteria, though its closing sentence lapses back into Popperian orthodoxy and miswrites 'idealistic' as 'materialist'.",
    },
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200 text-stone-800 leading-relaxed font-serif"
      id="iaskai-six-episodes-critique-article-text"
    >
      {/* Editorial Header */}
      <header className="border-b border-stone-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-3">
          <span>Essay HU</span>
          <span aria-hidden="true">·</span>
          <span>iAsk.Ai 6-Episode Review</span>
          <span aria-hidden="true">·</span>
          <span>Substack iaskai1 – iaskai6</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-stone-950 font-serif leading-tight tracking-tight max-w-3xl">
          Analyzing the 6-Episode Dialogue with iAsk.Ai on Liu Yue&apos;s Thought &amp; Dissecting the Episode 3 Tables
        </h1>
        <p className="text-sm font-semibold text-amber-900 mt-2 font-sans">
          《与 iAsk.Ai 讨论刘跃思想（1–6集）》全辑评析：网络可见度里程碑、思想史锚点与第3集两张表格的隐蔽曲解
        </p>
        <p className="text-sm md:text-base text-stone-600 mt-2 font-sans max-w-3xl">
          A complete synthesis and diagnostic audit of all six iAsk.Ai episodes—preserving the two missing comparative tables from Episode 3 and exposing five hidden empiricist distortions and AI hallucinations.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4 border-t border-stone-100">
          <span className="text-xs text-stone-500 font-mono tabular-nums">
            Sources: yueliusd.substack.com/p/iaskai1 through iaskai6
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(englishEssayText, "eng-hu")}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
            >
              {copiedId === "eng-hu" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "eng-hu" ? "English Analysis Copied" : "Copy English Analysis"}
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Full View Copied" : "Copy Full View"}
            </button>
          </div>
        </div>
      </header>

      {/* Part I: Episode 3 Tables Preserved & Audited */}
      <section className="mb-10 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-stone-950 border-b border-stone-200 pb-2">
          <Table2 className="w-5 h-5 text-amber-800 shrink-0" />
          <h2>Part I: Preserved Tables from Episode 3 (Original Screenshots &amp; Audit)</h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Table 1 */}
          <figure className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3">
            <div className="text-xs font-sans font-semibold uppercase tracking-wider text-stone-500">
              Table 1 (Episode 3) · Philosophical Schools vs. Liu Yue&apos;s Position
            </div>
            {tbl1Error ? (
              <div className="h-44 bg-stone-100 border border-stone-200 rounded-lg flex flex-col items-center justify-center text-stone-500 text-xs font-sans p-4 text-center">
                <Layers className="w-6 h-6 mb-2 text-stone-400" />
                <span>Episode 3 Table 1: Logical Positivism, Popperian Falsificationism, and Cartesian-Leibnizian Rationalism vs. Liu Yue</span>
              </div>
            ) : (
              <img
                src="/assets/aistudio/image_7767d7a5.png"
                alt="iAsk.Ai Episode 3 Table 1 comparing Logical Positivism, Popperian Falsificationism, and Cartesian-Leibnizian Rationalism against Liu Yue's positions"
                referrerPolicy="no-referrer"
                onError={() => setTbl1Error(true)}
                className="w-full rounded-lg border border-stone-200 bg-white object-contain"
              />
            )}
            <figcaption className="text-xs font-serif text-stone-600 italic leading-relaxed">
              Audit of Table 1 — Correctly highlights alignment with Descartes–Leibniz rationalism and rejection of Popperian falsification, but caricatures Liu Yue as dismissing experiment as mere &ldquo;unreliable hallucination&rdquo; (corrected in Episode 4: useful tool/alchemy during discovery, not science proper).
            </figcaption>
          </figure>

          {/* Table 2 */}
          <figure className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-3">
            <div className="text-xs font-sans font-semibold uppercase tracking-wider text-stone-500">
              Table 2 (Episode 3) · Popper vs. Thomas Kuhn vs. Liu Yue
            </div>
            {tbl2Error ? (
              <div className="h-44 bg-stone-100 border border-stone-200 rounded-lg flex flex-col items-center justify-center text-stone-500 text-xs font-sans p-4 text-center">
                <Layers className="w-6 h-6 mb-2 text-stone-400" />
                <span>Episode 3 Table 2: Karl Popper, Thomas Kuhn, and Liu Yue across Boundary, Experiment, and Academic System</span>
              </div>
            ) : (
              <img
                src="/assets/aistudio/image_7a445046.png"
                alt="iAsk.Ai Episode 3 Table 2 comparing Karl Popper, Thomas Kuhn, and Liu Yue across boundaries of science, attitude toward experiment, and view of academic institutions"
                referrerPolicy="no-referrer"
                onError={() => setTbl2Error(true)}
                className="w-full rounded-lg border border-stone-200 bg-white object-contain"
              />
            )}
            <figcaption className="text-xs font-serif text-stone-600 italic leading-relaxed">
              Audit of Table 2 — Accurately contrasts Popper&apos;s falsifiability and Kuhn&apos;s paradigm consensus against Liu Yue&apos;s logical closure, yet frames Liu Yue merely as a &ldquo;rationalist backlash&rdquo; while romanticizing Popperian open competition and ignoring how falsificationism is abused by SCI gatekeepers.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Part II: 6-Episode Structural Map */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-stone-950 border-b border-stone-200 pb-2">
          <FileText className="w-5 h-5 text-amber-800 shrink-0" />
          <h2>Part II: 6-Episode Structural Map</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {episodeSummaries.map((item, idx) => (
            <div key={idx} className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5 font-sans">
              <h3 className="font-bold text-stone-950 text-sm">{item.ep}</h3>
              <p className="text-xs md:text-sm text-stone-700 leading-relaxed">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Part III: Complete Critical Analysis */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-stone-950">
            <BookOpen className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>Part III: Full English Critical Review</h2>
          </div>
          <button
            onClick={() => handleCopyText(englishEssayText, "eng-hu-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-black text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-hu-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-hu-mid" ? "Copied" : "Copy Text"}
          </button>
        </div>

        <div className="bg-stone-900 text-stone-100 rounded-xl p-6 md:p-8 font-serif text-sm md:text-base leading-relaxed whitespace-pre-wrap border border-stone-700 tracking-[0.01em]">
          {englishEssayText}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 pt-6 border-t border-stone-200 font-sans text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Scale className="w-4 h-4 text-stone-400 shrink-0" />
          <span>Essay HU · iAsk.Ai 6-Episode Audit · Tables Restored</span>
        </div>
        <div className="flex items-center gap-2 text-stone-600 font-medium">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <span>Visibility Verified · Hallucinations Flagged</span>
        </div>
      </footer>
    </article>
  );
}
