import React from "react";
import { ShieldAlert, AlertTriangle, FileX, Scale, UserX, HelpCircle, BookOpen, Award, CheckCircle2, Flame, Ban } from "lucide-react";

export default function ArbitraryGatekeepingEssay() {
  return (
    <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="arbitrarygatekeeping-article-text">
      
      {/* Header Banner */}
      <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-rose-650 bg-rose-50 px-2.5 py-1 rounded">
          Essay CK • Institutional Double Standards & Peer Review Tyranny
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
          Draconian for Scholars, Capricious for Authorities: <br />
          <span className="text-xl md:text-2xl font-medium text-rose-800 block mt-2">
            How Mainstream Academic Gatekeepers Substitute Procedural Theater for Scientific Truth
          </span>
        </h1>
        <p className="text-sm text-gray-400 font-mono">
          By Dr. Yue Liu, Dr. Ying Liu, & Prof. Michael G. B. Drew • Epistemological Critique • July 2026
        </p>
        <div className="text-xs text-rose-900 bg-rose-50 px-3 py-1 rounded border border-rose-100 inline-block font-sans font-semibold">
          第二十六讲：严以律普通人，宽以待权威官僚——学术期刊审稿与Appal机制中的任意性与双重标准
        </div>
      </div>

      {/* Quote Block / Epigraph */}
      <div className="max-w-2xl mx-auto my-6 bg-slate-900 text-slate-100 p-5 rounded-xl space-y-4 shadow-inner border border-slate-800 font-mono text-xs md:text-sm">
        <div className="flex items-center gap-2 text-rose-400 border-b border-slate-800 pb-2">
          <Scale className="w-4 h-4 text-rose-400" />
          <span className="font-bold uppercase tracking-wider">The Institutional Double Standard / 学术官僚的双重标准</span>
        </div>
        <p className="italic text-slate-200 leading-relaxed">
          "When judging young scholars and ordinary researchers, academic gatekeepers project an aura of extreme rigor, weaponizing endless administrative formalities. Yet when evaluating their own editorial decisions and disproven mainstream dogmas, they act with complete ignorance, arbitrariness, and lawlessness—substituting opaque procedural forms for scientific substance."
        </p>
        <p className="text-[10px] text-slate-400 text-right mt-1 font-sans">
          — Dr. Yue Liu, *The Pathology of Peer Review Gatekeeping*, Substack 2026
        </p>
      </div>

      {/* Section 1: The Asymmetry of Standards */}
      <div className="space-y-4 pt-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">I.</span> The Asymmetry of Standards: Professional Rigor as a One-Way Weapon
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">规矩的非对称性：只约束普通人，不约束权威与平台</span>
        </h3>
        <p>
          A glaring paradox dominates modern academic publishing: when mainstream institutions evaluate submissions from independent scholars or junior researchers, they display an almost tyrannical level of perfectionism. They enforce microscopic compliance with formatting, citation, reference styles, and institutional approvals.
        </p>
        <p>
          Yet, as recent public controversies and legal analyses demonstrate, the moment these same institutional gatekeepers are called to account for their own behavior, their aura of scientific rigor instantly vanishes. Beneath the professional mask lies complete ignorance, lawlessness, and arbitrary rule-breaking.
        </p>
      </div>

      {/* Section 2: Arbitrary Rejections of Disruptive Manuscripts */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">II.</span> The Capricious Reviewer: Rejection Without Counter-Proof
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">任意的审稿人：缺乏科学证据的断言式拒稿</span>
        </h3>
        <p>
          When a manuscript containing a genuinely disruptive theoretical breakthrough (such as the exact mathematical disproof of thin-film impedance matching by Wave Mechanics) is submitted to an SCI journal, peer reviewers frequently resort to lazy, dogmatic rejection lines:
        </p>
        <div className="bg-rose-50/90 rounded-xl p-4 border border-rose-200 space-y-3 font-sans text-xs md:text-sm my-3">
          <h5 className="font-bold text-rose-950 flex items-center gap-2 font-mono uppercase">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            The Fallacy of the Consensus Shield (共识盾牌的逻辑缺陷):
          </h5>
          <p className="text-rose-900 leading-relaxed font-serif">
            Reviewers arbitrarily declare: <em>"You have not provided sufficient evidence to counter tens of thousands of previously published papers."</em>
          </p>
          <ul className="list-disc pl-5 space-y-1 text-rose-850">
            <li>
              <strong>No Counter-Evidence Provided:</strong> The reviewer offers zero specific mathematical or physical counter-proof from those "thousands of papers" to refute the author's derivation.
            </li>
            <li>
              <strong>Substituting Quantity for Truth:</strong> The reviewer assumes that because 20,000+ papers repeat a formula, the volume of papers proves the formula correct—ignoring that if the fundamental premise is flawed, 20,000 papers are merely 20,000 instances of propagated error.
            </li>
            <li>
              <strong>Arbitrary Rejection Opinions:</strong> Lacking any valid scientific ground to disprove the manuscript, the reviewer nonetheless capriciously issues a negative recommendation.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 3: The Rubber-Stamping Editor & Procedural Bait-and-Switch */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">III.</span> Rubber-Stamping Editors & The Appeal Bait-and-Switch
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">随意的编辑与申诉陷阱：以“程序合规”代替“技术核查”</span>
        </h3>
        <p>
          The corruption of gatekeeping extends seamlessly from reviewer to editor:
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-4 font-sans text-xs md:text-sm">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h5 className="font-bold text-slate-900 flex items-center gap-1.5 text-xs font-mono uppercase">
              <FileX className="w-4 h-4 text-slate-700 shrink-0" />
              1. Editorial Negligence & Rubber-Stamping
            </h5>
            <p className="text-slate-800 leading-relaxed font-serif text-xs">
              Journal editors do not verify whether the reviewer actually produced valid technical arguments. They uncritically rubber-stamp the negative conclusion, wrapping the rejection under the sanitized umbrella of "standard peer review."
            </p>
          </div>

          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-2">
            <h5 className="font-bold text-amber-900 flex items-center gap-1.5 text-xs font-mono uppercase">
              <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
              2. The Procedural Substitution Trick
            </h5>
            <p className="text-amber-950 leading-relaxed font-serif text-xs">
              When an author submits a formal Appeal demonstrating that the reviewer's comments contain zero scientific substance, the editorial office delays for weeks before responding: <em>"The review process strictly complied with peer review procedures; appeal rejected."</em>
            </p>
          </div>
        </div>
        <p>
          This is a classic <strong>procedural bait-and-switch</strong>. Authors never appeal the <em>administrative procedure</em>—which is completely opaque to them anyway. Authors appeal the <strong>scientific validity of the rejection grounds</strong>. By swapping a technical appeal for a procedural rubber stamp, the editorial board evades its scientific responsibility.
        </p>
      </div>

      {/* Section 4: Blacklisting & The Destruction of Scholarly Integrity */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">IV.</span> Blacklisting: Punishing the Whistleblower
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">任性的拉黑与抹杀：将纠错者污名化为“麻烦制造者”</span>
        </h3>
        <p>
          If an author persists in insisting upon scientific honesty and repeatedly appeals arbitrary rejections, the journal industry deploys its ultimate weapon: <strong>blacklisting and persona non grata labeling</strong>.
        </p>
        <div className="bg-slate-900 text-slate-100 p-4.5 rounded-xl border border-slate-800 font-sans text-xs md:text-sm space-y-3 my-3 shadow-md">
          <h5 className="font-bold text-rose-400 flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
            <Ban className="w-4 h-4 text-rose-400" />
            The Institutional Blacklisting Mechanism (学术垄断体的封杀逻辑):
          </h5>
          <p className="text-slate-200 leading-relaxed font-serif">
            Publishing consortia informally flag persistent authors across sister journals as "troublemakers" or "uncooperative submitters." Instead of celebrating a scholar who refuses to tolerate errors, the system brands them an outcast.
          </p>
          <p className="text-slate-300 leading-relaxed">
            This is precisely how the critical edges of courageous researchers are systematically ground down by institutional tyranny—forcing young scholars into docility, conformity, and ultimate participation in paper-mill noise.
          </p>
        </div>
      </div>

      {/* Section 5: Conclusion */}
      <div className="space-y-4 text-left pt-4 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">V.</span> Conclusion: Reason Belongs to First Principles, Not Gatekeeper Whims
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">结论：真理属于第一性原理，绝不隶属于审稿官僚的任性</span>
        </h3>
        <p>
          Academic publishing can only recover its soul when it abandons this double standard. Procedural compliance is meaningless if it serves only to insulate disproven dogmas from mathematical scrutiny.
        </p>
        <p className="font-bold text-center text-slate-900 border-t border-gray-100 pt-4 font-sans text-sm md:text-base">
          "A journal that rejects mathematical counter-proofs without technical grounds is not a guardian of science, but a gatekeeper of dogma. Real science lives on public ledgers of reason, where first principles outlast every arbitrary blacklist."
        </p>
      </div>

    </article>
  );
}
