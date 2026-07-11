import React from "react";
import { ShieldAlert, MessageSquare, Swords, Flame, FileText, Ban, HelpCircle, Eye, RefreshCw, CheckCircle2 } from "lucide-react";

export default function DutyToFightBackEssay() {
  return (
    <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="dutytofightback-article-text">
      
      {/* Title Area */}
      <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-indigo-650 bg-indigo-50 px-2.5 py-1 rounded">
          Essay AY • Academic Ethics & Scientific Counter-Attacks
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-955 font-sans tracking-tight leading-tight">
          The Moral Duty to Fight Back in Science: <br />
          <span className="text-xl md:text-2xl font-medium text-slate-700 block mt-2">
            Why Silence is Not "Gentlemanly," Censorship is Not "Integrity," and Post-Publication Debate is the True Peer Review
          </span>
        </h1>
        <p className="text-sm text-gray-400 font-mono">
          By Dr. Yue Liu, Dr. Ying Liu, & Prof. Michael G. B. Drew • Philosophical & Ethical Critique • July 2026
        </p>
        <div className="text-xs text-indigo-850 bg-indigo-50 px-3 py-1 rounded border border-indigo-100 inline-block font-sans font-semibold">
          第十三讲又又又又又一增刊：论学术批评中的反击、伪绅士风度与学术不端——从热力学、晶体学到微波吸收波动力学对费曼“草包族科学”特征的全面对照
        </div>
      </div>

      {/* Epigraph Quote Block */}
      <div className="max-w-2xl mx-auto my-6 bg-slate-955 text-slate-100 p-5 rounded-xl space-y-4 shadow-inner border border-slate-800 font-mono text-xs md:text-sm">
        <div className="flex items-center gap-2 text-indigo-400 border-b border-slate-800 pb-2">
          <Swords className="w-4 h-4 text-indigo-400" />
          <span className="font-bold uppercase tracking-wider">The Illusion of Silent Dignity / 沉默不是格局，反击才是捍卫</span>
        </div>
        <p className="italic text-slate-200 leading-relaxed">
          "If others publicly accuse you of error and you remain silent despite knowing you are correct, you are not acting as a 'gentleman' who is above the fray. Your silence is either a quiet admission of error or a coward's retreat that permits falsehoods to corrupt the public record. In scientific inquiry, silence in the face of false criticism is a form of academic misconduct. Correct viewpoints are never afraid of open confrontation. True nobility consists not of polite acquiescence, but of fighting unyielding battles until the mathematical truth is fully and publicly displayed."
        </p>
        <p className="text-[10px] text-slate-400 text-right mt-1 font-sans">
          — Dr. Yue Liu, *The Epistemological Obligation of Scientific Dissent*
        </p>
      </div>

      {/* Section 1: The Philosophy of Scientific Retaliation */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-indigo-955 border-b border-gray-100 pb-1.5">
          <span className="text-indigo-650 font-mono">I.</span> To Fight or To Submit: The Illusion of "Silent Dignity"
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">反击还是妥协：所谓“沉默体面”背后的道德真空</span>
        </h3>
        <p>
          If you are falsely accused or publicly declared wrong, how do you respond? If you possess absolute conviction in your mathematical and physical models, do you stand and fight, or do you remain silent? 
        </p>
        <p>
          In modern society, a passive-aggressive culture often praises silence as a sign of high class, "gentlemanly behavior," or "having a grander perspective" (有格局). We are told that engaging with critics "lowers our status." 
          But in the rigorous domain of science, this is a dangerous fallacy. <strong>Silence is not gentlemanly; it is complicity.</strong> If you remain silent when your correct models are accused of error, you allow falsified dogmas to be taught to students, printed in textbooks, and funded by public money. 
        </p>
        <p>
          Even worse, if you recognize that your own published work is incorrect, yet you remain silent, refuse to issue corrections, and continue to cite your own flawed results, you are committing active <strong>academic misconduct</strong>. 
          True scientific integrity requires that both sides lay out their parameters in the open. A correct theory has nothing to fear from a false one; truth is self-evident when placed in direct, un-censored contrast with error. 
        </p>
      </div>

      {/* Section 2: Case Study 1 - Thermodynamics */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-indigo-955 border-b border-gray-100 pb-1.5">
          <span className="text-indigo-650 font-mono">II.</span> Case Study 1: The Gibbs-Duhem Equation and the Fallacy of "Conceptual Confusion"
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">案例一：热力学全微分与偏微分之争——坚守投稿直至真理发表</span>
        </h3>
        <p>
          For years, mainstream thermodynamicists repeatedly published papers claiming that the change in Gibbs free energy $dG$ and the chemical affinity derivative $\partial G/\partial \xi$ are fundamentally distinct. They argued that $dG$ is a total differential containing multiple non-zero partial terms and different dimensional units.
        </p>
        <p>
          However, the classical <strong>Gibbs-Duhem equation</strong> strictly guarantees that the secondary partial derivatives in the differential expansion of $dG$ sum to zero under equilibrium conditions, establishing a direct mathematical relationship between the total and partial representations. 
          When we submitted our rigorous mathematical derivations exposing this error, the mainstream gatekeepers blocked our publication. They claimed our paper "confused total and partial differentials" and would "cause conceptual confusion among students."
        </p>
        <p>
          We were rejected by journal after journal. Had we accepted the reviews silently, we would have validated their incorrect assertions. Instead, we refused to submit. We persisted, continuously revising and submitting, until our corrective work was finally published in a peer-reviewed international journal:
        </p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-sans space-y-2 text-xs md:text-sm">
          <p className="text-gray-800 leading-relaxed font-semibold">
            Liu Ying, Liu Yue, Drew Michael G. B. "Natural mathematical derivation of the Gibbs-Duhem Equation related to ΔG and ∂G/∂ξ", International Journal of Thermophysics, 2022, 43, 73. DOI: <a href="https://doi.org/10.1007/s10765-022-02998-y" target="_blank" referrerPolicy="no-referrer" rel="noreferrer" className="text-indigo-650 hover:underline">10.1007/s10765-022-02998-y</a>.
          </p>
          <p className="text-gray-550 italic text-[11px]">
            By persisting until publication, we ensured that both the mainstream's claims and our mathematical corrective are openly visible. Let the readers, not anonymous referees, act as the ultimate judge.
          </p>
        </div>
        <p>
          Even if our paper had been wrong (which it is not), the scientific community is not so fragile that a single publication would permanently confuse students about derivatives. Real science welcomes the open contrast of opposing views.
        </p>
      </div>

      {/* Section 3: Case Study 2 - Crystallography */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-indigo-955 border-b border-gray-100 pb-1.5">
          <span className="text-indigo-650 font-mono">III.</span> Case Study 2: Crystallographic Spacing and the Illusion of Arbitrary Reviews
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">案例二：晶体学面间距计算公式纠错——用最终发表刺破权威审稿高墙</span>
        </h3>
        <p>
          In 2017, we published a comprehensive review on crystallographic lattice spacing calculations:
          <br /><strong className="text-xs text-gray-700">Ying Liu, Yue Liu, Drew MGB. "Review: Comparison of calculations for interplanar distances in a crystal lattice." Crystallography Reviews 2017, 23(4): 252-301.</strong>
        </p>
        <p>
          Immediately, a prominent mainstream authority, Massimo Nespolo, published a highly critical comment claiming our review was incorrect:
          <br /><strong className="text-xs text-gray-750 italic">Nespolo M (2017) "Comments on the article ‘Comparison of calculations for interplanar distances in a crystal lattice’." Crystallogr Rev 23(4):302–303.</strong>
        </p>
        <p>
          Nespolo's critique itself contained fatal conceptual flaws. Yet, when we attempted to publish our rebuttal, our manuscript was repeatedly blocked and rejected by crystallography journals controlled by the establishment. 
          Once again, we refused to be silenced in the name of "academic harmony" or "deference to authorities." We kept submitting until our rebuttal was published in full:
        </p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-sans space-y-2 text-xs md:text-sm">
          <p className="text-gray-800 leading-relaxed font-semibold">
            Ying Liu, Yue Liu, Drew MGB. "Review: Clarifications of concepts concerning interplanar spacing in crystals with reference to recent publications." SN Applied Sciences 2020, 2(4): 755. DOI: <a href="https://doi.org/10.1007/s42452-020-2511-x" target="_blank" referrerPolicy="no-referrer" rel="noreferrer" className="text-indigo-655 hover:underline">10.1007/s42452-020-2511-x</a>.
          </p>
        </div>
        <p>
          This case proves that <strong>pre-publication peer review is often nothing more than academic censorship</strong>. The true peer review only begins *after* publication, when both opposing views are preserved in ink and exposed to the critical intellect of global readers.
        </p>
      </div>

      {/* Section 4: Case Study 3 - Microwave Absorption and Cargo Cult Science */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-indigo-955 border-b border-gray-100 pb-1.5">
          <span className="text-indigo-650 font-mono">IV.</span> Case Study 3: Microwave Absorption, Cowardly Peer Reviews, and Feynman's Cargo Cult Sieve
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">案例三：微波吸收理论——对照费曼“草包族科学”的五个伪科学特质</span>
        </h3>
        <p>
          The most egregious manifestation of this scientific rot is the materials science community's defensive posture regarding **microwave absorption theory**. 
          We have mathematically demonstrated that the mainstream **impedance matching theory** is physically incorrect, and that the only valid framework is **wave mechanics**. 
        </p>
        <p>
          Yet, the mainstream continues to churn out thousands of impedance matching papers while active wave mechanics manuscripts are blocked, and whistleblower accounts are suspended. 
          If these mainstream experts possess genuine confidence in their models, why do they only write their criticisms in anonymous, secret peer-review reports hidden behind "privacy laws"? Why do they never dare to write their refutations of wave mechanics in their own published, public articles? 
          They hide because they know their reviews are mathematically indefensible.
        </p>
        <p>
          While conversational AI models (like ChatGPT) attempt to defend this silence as standard academic selection, the behavior of the microwave absorption establishment perfectly aligns with **Richard Feynman's definition of Cargo Cult Science (草包族科学)** across five distinct criteria:
        </p>

        {/* Feynman's 5 Criteria list */}
        <div className="space-y-4 my-6 font-sans">
          <div className="p-4 rounded-xl border border-rose-150 bg-rose-50/10 space-y-2">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block font-mono">
              a) Intentional Concealment of Adverse Data and Contrary Views
            </span>
            <p className="text-xs text-gray-750 leading-relaxed font-serif">
              Feynman stated that true science requires reporting all details, even those that might make your theory look wrong. Yet, when someone proves that the impedance matching formula is false, mainstream authors continue to write papers as if no dissenting wave mechanics model exists—deliberately keeping their readers in the dark.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-rose-150 bg-rose-50/10 space-y-2">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block font-mono">
              b) Massive Replication of Known Error Over Correct Alternatives
            </span>
            <p className="text-xs text-gray-750 leading-relaxed font-serif">
              In Cargo Cult Science, old rituals are repeated endlessly regardless of outcome. Despite the correct wave mechanics theory being fully established and mathematically proven, mainstream journals ignore it and continue to publish hundreds of repetitive papers using the broken impedance matching equations.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-rose-150 bg-rose-50/10 space-y-2">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block font-mono">
              c) Fudging and Truncating Deviant Experimental Data
            </span>
            <p className="text-xs text-gray-750 leading-relaxed font-serif">
              Feynman warned against selecting only the data that fits mainstream authority. In microwave experiments, the absorption peak does not match the exact point of |Z_in| = |Z_0|, nor does total transmission equal total absorption. Mainstream scientists ignore these key anomalies, dismissing them as "experimental error" to keep their incorrect theories intact.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-rose-150 bg-rose-50/10 space-y-2">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block font-mono">
              d) Blind Obedience to Authority Without Personal Replication
            </span>
            <p className="text-xs text-gray-750 leading-relaxed font-serif">
              Cargo cultists blindly follow literature templates. When challenged on the validity of impedance matching, mainstream authors do not perform basic wave-superposition control experiments; they simply point to the vast volume of past papers, treating consensus as a substitute for rigorous physical testing.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-rose-150 bg-rose-50/10 space-y-2">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block font-mono">
              e) Loss of the Fundamental Capacity for Self-Doubt
            </span>
            <p className="text-xs text-gray-750 leading-relaxed font-serif">
              Science is the systematic process of questioning your own assumptions. By actively silencing whistleblowers and hiding critical peer-review feedback behind privacy blocks, the materials science establishment has abandoned the scientific method, degenerating into a purely bureaucratic, metric-worshiping cargo cult.
            </p>
          </div>
        </div>
      </div>

      {/* Section 5: Conclusion */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-indigo-955 border-b border-gray-100 pb-1.5">
          <span className="text-indigo-650 font-mono">V.</span> Conclusion: The Verdict of the Open Court
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">结论：走上公开法庭，让数学真理作终极裁决</span>
        </h3>
        <p>
          Science does not advance through polite silence, administrative consensus, or private editorial compromises. 
          When a system has fallen into theoretical decay, the only honorable, gentlemanly course of action is <strong>uncompromising public confrontation</strong>.
        </p>
        <p>
          We will continue to publish our proofs, we will continue to expose their cowardice, and we will continue to upload their anonymous, indefensible review comments for the world to see. 
          Let the mainstream experts cling to their secret review panels and protective citation rings. 
          The unyielding mathematical physics of wave mechanics, the Gibbs-Duhem equation, and crystallographic spacing do not care about editorial face-saving. Truth belongs to those who stand in the light, present their derivations in full, and let the open court of history deliver the final, un-censorable verdict.
        </p>
      </div>

    </article>
  );
}
