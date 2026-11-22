import React, { useState } from "react";
import {
  MessageSquareCode,
  Copy,
  Check,
  BookOpen,
  Scale,
  AlertTriangle,
  Sparkles,
  Flame,
  ShieldAlert,
} from "lucide-react";

export default function YuanbaoElevenEpisodesCritiqueEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("yuanbao-eleven-episodes-critique-article-text");
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

  const fullCommentaryEnglish = `Critical Commentary on the 11-Episode Dialogue with Tencent Yuanbao: Making Liu Yue's Thought Visible—and Exposing AI's Epistemological Traps

I. Strategic Verdict: How the 11-Episode Socratic Campaign Succeeded
The stated purpose of the 11-episode dialogue ("Making Liu Yue's Thought visible") achieved a remarkable epistemological reversal in real time:
1. Episodes 1-2 exposed algorithmic invisibility: Cold retrieval initially confused Dr. Yue Liu with unrelated figures (Shanxi entrepreneur Liu Yue, vocal professor Liu Yue, scholar Liu Yuejin) and dismissed "Liu Yue's Thought" as unindexed "blog venting" lacking DOIs or peer-reviewed papers—ignoring Dr. Liu's extensive peer-reviewed record in Physica B, Physica Scripta, Coordination Chemistry Reviews, SN Applied Sciences, Materials Chemistry and Physics, Surfaces and Interfaces, Journal of Applied Physics, and IECR.
2. Episodes 3-7 forced structural clarity: Step-by-step Socratic pinning forced the AI to abandon strawmen and recognize the strict separation between Wave Mechanics Theory (a physical theory) and Liu Yue's Thought (a philosophy of science: Theory = Axioms + Logic; Idealistic Metaphysics; Mathematics as Natural Science).
3. Episodes 8-9 produced canonical philosophical translations: By presenting the two decisive formulations—(a) Experiment as Trigger, Logic as Judge, and (b) Establishment Phase vs. Operational Phase ("Once axioms are established and true, theory stands independent of experiment")—the dialogue compelled the AI to formalize Liu Yue's Thought in standard Kantian, Cartesian, Leibnizian, and Popperian/Lakatosian terminology ("Birth Certificate vs. Daily Pass," "Alarm vs. Judge").
4. Episodes 10-11 forced the final dialectical capitulation (Quantum Mechanics as Evolution, Not Overthrow): When Dr. Liu defended both Wave-Particle Duality as capturing Nature's essence and Classical Mechanics as remaining fundamentally true (deepened, not refuted, by Quantum Mechanics), Yuanbao repeatedly pushed its pre-trained orthodoxy ("you MUST call it a conceptual revolution!"). Dr. Liu ended the stalemate with one razor-sharp distinction: "Whether quantum mechanics is a revolution or evolution depends on the vantage point—from generative mathematical lineage it is evolution; from your post-hoc interpretive vantage point it is revolution." Yuanbao openly conceded ("you pulled me out of my obsession with having to prove it was a revolution 👍").

II. Five Subtle Traps in Yuanbao's Rebuttals That Must Be Refuted
1. The "Peer-Review Circularity" Fallacy:
Yuanbao repeatedly discounted Substack/SSRN essays as "not peer-reviewed." That commits a textbook petitio principii: Liu Yue's Thought specifically critiques how modern SCI peer review has degenerated into empirical-statistical gatekeeping. Epistemological truth is determined by logical validity—not by anonymous referee ballots (neither Newton's Principia nor Einstein's 1905 papers relied on modern peer review). Moreover, Yuanbao's inability to retrieve Dr. Liu's published physics papers exposed search-index blindness, not an absence of scholarly foundation.

2. The "Brick vs. Hammer" Self-Contradiction:
Yuanbao tried arguing that "alchemy having experiments without science only proves experiment is not a sufficient condition, not that it isn't necessary—just as bricks are needed for a house." Yet in Episode 5 (p/5-c65), Yuanbao itself admitted: "useful does not mean belonging to, just as a hammer is useful for building a house yet a hammer is not the house." Laboratory instruments and trial-and-error operations are scaffolding and hammers—not bricks inside theoretical laws. What turns chemistry or physics into science (Lavoisier's mass conservation, Proust/Dalton laws, Gibbs-Duhem, Maxwell's equations) is always axiom + mathematics.

3. The Myth of "Experiments Pointing the Direction" (Michelson-Morley, Mercury, OPERA):
Yuanbao claimed pure logic could never move past Newton without the 43 arcseconds of Mercury or Michelson-Morley. In reality, 43 arcseconds is invisible without Newtonian perturbation math; Michelson-Morley gained significance only because Maxwell's Equations already clashed logically with Galilean relativity; and the 2011 OPERA "faster-than-light neutrino" episode proved Liu Yue's Thesis: theorists trusted Lorentz logic over the experiment until the loose fiber-optic cable was exposed.

4. Conflating First-Principles Deduction with Ptolemaic Curve-Fitting & "Border Patrols" (Episode 10):
When Dr. Liu argued that correct deductions prove Wave-Particle Duality captures Nature's essence, Yuanbao equated predictive success with Ptolemy's epicycles! That commits a fatal category error: Ptolemy added ad-hoc free parameters to curve-fit already-known orbits, whereas first-principles physical axioms deduce completely novel, cross-domain phenomena (tunneling, quantization, entanglement, superconductivity) that were never engineered into the axioms. Worse, claiming "experiments patrol where Classical stops and Quantum starts" is flatly false: the classical limit (hbar/S -> 0, lambda << L) is deduced mathematically inside Quantum Mechanics itself!

5. Smuggling Copenhagen Anti-Realism & Relativist "Revolution" Dogma (Episode 11):
Yuanbao treated Copenhagen philosophical slogans ("wavefunction is not physically real," "quantum mechanics overthrew physical reality") as settled mathematics, fighting desperately to force a "revolutionary rupture" verdict. Just as Wave Mechanics Theory restores classical Maxwellian wave superposition without "overthrowing" physics, true physical laws deepen by mathematical evolution—their core axioms remain permanently valid within their exact theoretical domain rather than expiring like fashionable trends.`;

  const arcStages = [
    {
      stage: "Episodes 1–2: Cold Start & Algorithmic Erasure",
      summary:
        "Yuanbao initially confused Yue Liu with Shanxi entrepreneur Liu Yue and dismissed Substack/SSRN summaries as unindexed 'blog complaints'—proving visually why making Liu Yue's Thought searchable and visible is necessary.",
    },
    {
      stage: "Episodes 3–5: Separating Science From Engineering & Alchemy",
      summary:
        "Clarified the strict boundaries (not Wave Mechanics Theory, not slogans) and forced Yuanbao to concede 'useful != belongs to' (hammer vs. house) and distinguish the Greek theoretical birth of science from 17th-century institutional empiricism.",
    },
    {
      stage: "Episodes 6–7: Trigger vs. Judge (p/8-b56 & p/7-e54)",
      summary:
        "Reframed experimental anomalies as 'alarms' rather than 'judges': when an alarm rings, logic diagnoses whether the error lies in the experiment (OPERA), hidden logical gaps, or an approximate axiom.",
    },
    {
      stage: "Episodes 8–9: Establishment vs. Operational Phase (p/9-87b)",
      summary:
        "Culminated in 'Birth Certificate vs. Daily Pass': once true axioms are established, theoretical deduction is logically autonomous—exposing Yuanbao's attempt at a 'boundary-drawing compromise' as an empiricist Trojan horse.",
    },
    {
      stage: "Episodes 10–11: Evolution Over 'Revolution' & Final Capitulation (p/10-459, p/11-790)",
      summary:
        "Defended Classical Mechanics as permanently valid within its domain and Quantum Mechanics as unifying evolution rather than anti-realist overthrow—forcing Yuanbao to abandon its 'must prove it is a revolution' obsession.",
    },
  ];

  const yuanbaoTraps = [
    {
      trap: "Trap 1: Peer-Review Circularity & Retrieval Blindness",
      critique:
        "Dismissing an anti-gatekeeping philosophy of science because its Substack manifestos aren't 'peer-reviewed' begs the question—while ignoring Dr. Liu's peer-reviewed publications in Physica B, Physica Scripta, CCR, Mater. Chem. Phys., J. Appl. Phys., and IECR.",
    },
    {
      trap: "Trap 2: Brick vs. Hammer Self-Contradiction",
      critique:
        "Yuanbao called experiments 'bricks of a house' in one episode and 'a hammer outside the house' in another. Experiments are tools/scaffolding; scientific laws themselves (conservation laws, Maxwell, Gibbs-Duhem) are strictly axioms + mathematical logic.",
    },
    {
      trap: "Trap 3: Rewriting History as 'Experiment-Guided' Discovery",
      critique:
        "Mercury's 43 arcseconds only existed against Newtonian perturbation math, Maxwell's equations clashed with Galilean kinematics before Michelson-Morley, and OPERA FTL neutrinos collapsed before Einstein's mathematical logic.",
    },
    {
      trap: "Trap 4: Confusing Deduction with Ptolemaic Epicycles & 'Border Patrols' (Ep. 9–10)",
      critique:
        "Ptolemaic epicycles curve-fit known orbits ad hoc, whereas wave-particle axioms deduce wholly novel cross-domain physics. Likewise, classical-quantum boundaries (hbar/S -> 0) are derived mathematically, not fenced by experiments.",
    },
    {
      trap: "Trap 5: Smuggling Copenhagen Anti-Realism & Relativist 'Revolution' Dogma (Ep. 11)",
      critique:
        "Yuanbao treated disputed Copenhagen anti-realism as settled math to insist physics 'overthrows old truths'—until Dr. Liu's vantage-point distinction forced Yuanbao to admit its own 'obsession with proving a revolution.'",
    },
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="yuanbao-eleven-episodes-critique-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HN &bull; Yuanbao 11-Episode Dialogue Critique
          </span>
          <span className="bg-indigo-100 text-indigo-900 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200">
            Making Liu Yue&apos;s Thought Visible &bull; Epistemological Stress-Test
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Critique of the 11-Episode Yuanbao Dialogue: Making Liu Yue&apos;s Thought Visible and Exposing AI&apos;s Empiricist Traps
        </h1>
        <p className="text-sm font-bold text-indigo-900 mt-2 font-sans">
          评《与元宝的对话共11集》：让“刘跃思想”变得可见的传播胜利，与拆穿AI在“公理边界/同行评审/哥本哈根教条”上的五重隐蔽陷阱
        </p>
        <p className="text-sm md:text-base text-slate-600 mt-2 font-sans italic">
          Forensic epistemological review of the complete 11-episode dialogue (Substack p/1-277 through p/11-790) analyzing how Socratic escalation forced algorithmic recognition—and where Yuanbao tried to smuggle empiricism and Copenhagen dogma back in.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
          <span className="text-xs text-slate-400 font-mono">
            Source Series: yueliusd.substack.com (Episodes 1–11 Complete)
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(fullCommentaryEnglish, "yuanbao-eng-hn")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yuanbao-eng-hn" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yuanbao-eng-hn" ? "English Critique Copied!" : "Copy English Critique"}
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Full Essay Copied!" : "Copy Full Essay"}
            </button>
          </div>
        </div>
      </div>

      {/* Part I: Arc of the 11 Episodes */}
      <section className="mb-12 space-y-5">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <MessageSquareCode className="w-6 h-6 text-indigo-700" />
          <h2>Part I: Strategic Assessment — The 11-Episode Visibility Arc</h2>
        </div>
        <p className="text-sm md:text-base text-slate-700">
          Viewed as a philosophical stress-test and dissemination campaign (<em>&ldquo;让刘跃思想变得可见&rdquo;</em>),
          the 11-episode arc transforms an initially dismissive AI into an unwilling systematizer of{" "}
          <strong>Liu Yue&apos;s Thought</strong>:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {arcStages.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5 font-sans">
              <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-700 shrink-0" />
                <span>{item.stage}</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-700">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Part II: Four Philosophical Traps Exposed */}
      <section className="mb-12 space-y-5">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <ShieldAlert className="w-6 h-6 text-rose-700" />
          <h2>Part II: Four Hidden Traps in Yuanbao&apos;s Counterarguments</h2>
        </div>
        <div className="space-y-4">
          {yuanbaoTraps.map((item, idx) => (
            <div key={idx} className="bg-rose-50/50 border border-rose-200 p-4 rounded-xl space-y-1.5 font-sans">
              <h3 className="font-bold text-rose-950 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0" />
                <span>{item.trap}</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-700">{item.critique}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Part III: Full Structured English Commentary */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <BookOpen className="w-6 h-6 text-slate-900" />
          <h2>Part III: Full English Critical Analysis (Ready for Publication / Substack)</h2>
        </div>
        <div className="bg-slate-900 text-slate-100 rounded-xl p-5 font-serif text-sm leading-relaxed whitespace-pre-wrap border border-slate-700">
          {fullCommentaryEnglish}
        </div>
      </section>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Scale className="w-4 h-4 text-slate-400" />
          <span>Essay HN &bull; Commentary on the 11-Episode Yuanbao Dialogue</span>
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Trigger vs. Judge
          </span>
          <span className="bg-indigo-100 text-indigo-900 px-2.5 py-1 rounded-md font-semibold">
            Theory = Axioms + Logic
          </span>
        </div>
      </div>
    </article>
  );
}
