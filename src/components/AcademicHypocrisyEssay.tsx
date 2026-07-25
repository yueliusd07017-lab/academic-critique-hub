import React from "react";
import { ShieldAlert, AlertTriangle, Scale, BookOpen, Eye, FileText, Lock, UserX, ExternalLink, Flame } from "lucide-react";

export default function AcademicHypocrisyEssay() {
  return (
    <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="academichypocrisy-article-text">
      
      {/* Title Area */}
      <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-rose-800 bg-rose-50 px-2.5 py-1 rounded">
          Essay CH • Epistemic Hypocrisy & Institutional Shielding of Misconduct
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
          The Hypocrisy of Academic Integrity: <br />
          <span className="text-xl md:text-2xl font-medium text-rose-900 block mt-2">
            Authority Appropriation, Editorial Non-Engagement, and How Impossible Barriers of Proof Protect Plagiarism
          </span>
        </h1>
        <p className="text-sm text-gray-400 font-mono">
          By Dr. Yue Liu, Dr. Ying Liu, & Prof. Michael G. B. Drew • Epistemology & Scientific Sociology • July 2026
        </p>
        <div className="text-xs text-rose-900 bg-rose-50 px-3 py-1 rounded border border-rose-200 inline-block font-sans font-semibold">
          第四十三讲：论学术界假重诚信之虚伪——名人抹煞首创、采纳观点却拒绝引用、与高门槛庇护剽窃的闭环陷阱
        </div>
      </div>

      {/* Epigraph / Core Thesis Banner */}
      <div className="max-w-3xl mx-auto my-6 bg-slate-900 text-slate-100 p-5 rounded-xl space-y-3 shadow-inner border border-slate-800 font-sans text-xs md:text-sm">
        <div className="flex items-center gap-2 text-rose-400 border-b border-slate-800 pb-2 font-mono">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          <span className="font-bold uppercase tracking-wider text-xs">The Epistemic Asymmetry of Academic Justice</span>
        </div>
        <p className="text-slate-200 leading-relaxed font-serif italic">
          &quot;Modern academia severely enforces citation rules against vulnerable scholars, yet remains ostentatiously silent when institutional authorities quietly co-opt independent breakthroughs without citation. By demanding impossible insider evidence under threat of defamation, opaque peer-review systems actively insulate gatekeepers and plagiarists from public scrutiny.&quot;
        </p>
      </div>

      {/* Section 1: Celebrity Appropriation and the Erasure of Pioneers */}
      <div className="space-y-4 pt-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">I.</span> Authority Appropriation: How Celebrities Erase True Pioneers
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">现象一：权威名流抹煞首创与从众效应的盛宴</span>
        </h3>
        <p>
          Academia pretends to enforce meticulous attribution, demanding pedantic citation formats for minor sentences. Yet in practice, <strong>when an established academic celebrity repeats a breakthrough problem or concept originally formulated by an independent pioneer, the scientific herd immediately attributes the discovery to the celebrity.</strong>
        </p>
        <p>
          This reveals a double pathology:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 font-sans text-xs md:text-sm">
          <li>
            <strong>Editorial Disrespect for Priority:</strong> The academic authority deliberately omits the original pioneer, appropriating the breakthrough question into their own brand.
          </li>
          <li>
            <strong>Crowd Pursuit of Sensationalism:</strong> The academic community cares only for celebrity prestige (&quot;轰动效应&quot;), showing zero interest in authentic intellectual priority or historical truth.
          </li>
        </ul>
      </div>

      {/* Section 2: Quiet Co-optation and Editorial Non-Engagement */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">II.</span> When Silence Replaces Refutation: Non-Engagement as Institutional Defeat
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">现象二：当沉默取代反驳——回避反证并非争议未决，而是实质溃败</span>
        </h3>
        <p>
          When confronted with fatal logical refutations of mainstream orthodoxy, major journal editorial boards and incumbent research groups resort to systematic non-engagement (&quot;装聋作哑&quot;).
        </p>
        <p>
          As documented in Dr. Yue Liu&apos;s treatises (<em>When Silence Replaces Refutation</em> and <em>It Quietly Adopts Several of Our Core Criticisms...</em>), incumbent scholars frequently adopt independent critical insights, corrected models, and foundational objections, yet strictly refuse to cite the original source or answer the underlying contradiction.
        </p>

        {/* Deep Epistemological Critique Box: The Fallacy of "Unresolved Dispute" */}
        <div className="bg-slate-900 text-slate-100 p-4.5 rounded-xl border border-slate-800 font-sans text-xs md:text-sm space-y-3 my-4 shadow-md">
          <h5 className="font-bold text-rose-400 flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
            <Flame className="w-4 h-4 text-rose-400" />
            Epistemological Audit: Why Silent Non-Engagement Is Scientific Failure
          </h5>
          <p className="text-slate-200 leading-relaxed font-serif">
            A genuine scientific dispute exists only when both sides present publicly verifiable, logically sound counter-arguments. When one side (Wave-Mechanics) provides rigorous algebraic and wave-superposition proofs demonstrating the physical invalidity of a legacy model (Impedance Matching), and the incumbent side offers <strong>zero valid public refutations</strong>, the dispute is not &quot;ongoing.&quot; <strong>The legacy framework has lost on the merits.</strong>
          </p>
          <div className="bg-slate-800/90 p-3 rounded-lg border border-slate-700 text-slate-300 space-y-2 text-xs">
            <p className="font-bold text-amber-300">
              The Mandatory Duty of Academic Honesty (学术诚实的底线履约义务):
            </p>
            <p className="leading-relaxed">
              If incumbent researchers insist on continuing to publish articles using the challenged <em>Impedance Matching Theory</em> without refuting the counter-proof, basic academic integrity demands that they explicitly declare to readers:
            </p>
            <blockquote className="border-l-2 border-amber-400 pl-3 italic text-amber-100 my-1 bg-slate-950/50 py-1.5 px-2 rounded-r">
              &quot;A fatal mathematical counter-argument currently exists against this framework, which we have not yet refuted or addressed.&quot;
            </blockquote>
            <p className="leading-relaxed text-slate-400">
              Continuing to publish papers while hiding unrefuted fatal counter-evidence is not legitimate academic practice; it is <strong>Cargo Cult Science</strong> and institutional deception designed to protect prestige over truth.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-sans text-xs md:text-sm space-y-2.5 my-3">
          <h5 className="font-bold text-slate-900 flex items-center gap-2 text-rose-800 font-mono text-xs uppercase">
            <FileText className="w-4 h-4 text-rose-600" />
            Documented Case Studies of Quiet Co-optation & Rapid Pass-through
          </h5>
          <div className="space-y-2 text-slate-700">
            <div className="p-2.5 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block text-xs">
                1. T. Wang, G. Chen, J. Zhu, H. Gong, L. Zhang, & H. Wu (2021)
              </span>
              <p className="text-[11px] text-slate-600 leading-normal">
                <em>J. Colloid Interface Sci.</em> 595: 1-5 (DOI: 10.1016/j.jcis.2021.03.132). <br />
                <strong>Evidence:</strong> Re-examined impedance matching (Z<sub>M</sub>) using identical variable notation and analytical frameworks previously developed in Dr. Liu&apos;s rejected submissions. Fast-tracked through review in just 15 days (Received 8 March 2021, Accepted 23 March 2021) without citing the prior theoretical work.
              </p>
            </div>

            <div className="p-2.5 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block text-xs">
                2. S. Yang, P. Wu, Y. Sheng, Y. Dong, Z. Li, T. Wang, et al. (2025)
              </span>
              <p className="text-[11px] text-slate-600 leading-normal">
                <em>Advanced Electronic Materials</em> 11(14) (DOI: 10.1002/aelm.202500239). <br />
                <strong>Evidence:</strong> Followed the same pattern of adopting core critique angles regarding microwave absorption criteria while omitting citation to the original pioneer treatises.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: The Asymmetry of Proof */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">III.</span> The Asymmetry of Proof: Demanding Impossible Evidence to Shield Misconduct
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">现象三：举证门槛的荒谬性——以“防止诽谤”之名保护审稿不公</span>
        </h3>
        <p>
          When an independent author discovers clear textual, structural, or mathematical overlap in suspicious publications, the academic establishment erects formidable bureaucratic barriers.
        </p>
        <p>
          Because peer review operates inside a dark, opaque box, authors are denied access to confidential reviewer identities, internal editorial decision logs, and submission dates. Yet, when reporting plagiarism or co-optation, journals demand <strong>&quot;official, irrefutable insider proof&quot;</strong> before investigating—threatening the whistleblower with legal liability for defamation (&quot;诽谤嫌疑&quot;) if such confidential evidence cannot be produced.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-4 font-sans text-xs md:text-sm">
          <div className="bg-rose-50/70 p-4 rounded-xl border border-rose-200 space-y-2">
            <h5 className="font-bold text-rose-955 flex items-center gap-1.5">
              <UserX className="w-4 h-4 text-rose-700" />
              Opaque Institutional Barrier (黑箱体制与高压威吓)
            </h5>
            <ul className="space-y-1 text-rose-900 list-disc pl-4">
              <li>Keeps reviewer notes and fast-track processing completely hidden.</li>
              <li>Demands impossible insider proof from victimized authors.</li>
              <li>Threatens whistleblower with defamation allegations.</li>
              <li>Effectively serves as an institutional defense shield for plagiarists.</li>
            </ul>
          </div>

          <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 space-y-2">
            <h5 className="font-bold text-emerald-955 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-emerald-700" />
              Public Ledger Transparency (正义必须简单可行)
            </h5>
            <ul className="space-y-1 text-emerald-900 list-disc pl-4">
              <li>Lowers reporting barriers by displaying side-by-side evidence publicly.</li>
              <li>Allows the global scientific community to inspect notation overlaps (Z<sub>M</sub>).</li>
              <li>Replaces private editorial discretion with open, transparent peer judgment.</li>
              <li>Restores authentic integrity and accountability to scientific self-correction.</li>
            </ul>
          </div>
        </div>

        <blockquote className="bg-slate-900 border-l-4 border-rose-500 p-4 rounded-r-xl font-sans text-xs md:text-sm text-slate-100 my-4 space-y-2">
          <p className="font-bold text-rose-300">
            The Double-Standard Asymmetry of Academic Discipline:
          </p>
          <p className="text-slate-200 italic leading-relaxed">
            &quot;When academia is determined to discipline the weak, it becomes obsessively strict about citation; when it is determined to protect the powerful, the same misconduct is rebranded as mere &apos;citation irregularity.&apos; That asymmetry is not neutrality. It is hypocrisy.&quot;
          </p>
        </blockquote>

        <p className="text-rose-955 bg-rose-50/80 p-3.5 rounded-xl border border-rose-200 font-sans text-[13px] leading-relaxed">
          <strong>正义必须简单可行：</strong><br />
          在同行评审高度不透明的现代体制下，要求受害者拿出内部机密证据才能质疑，本质上就是对学术不正之风的庇护。科学社会需要建立公开、透明的对比平台，将串联证据置于公众监督之下，让事实说话，而不是用复杂的行政藩篱与诽谤威胁来封锁声音。
        </p>
      </div>

      {/* Section 4: Conclusion */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">IV.</span> Conclusion: Restoring Simple Justice to Science
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">结论：还科学以简单简明的公理与正义</span>
        </h3>
        <p>
          True academic integrity is not maintained through hollow editorial rhetoric or intimidating legal disclaimers. It requires an open environment where original priority is honored, editorial silence is exposed, and evidence of co-optation can be openly evaluated by the public ledger of reason.
        </p>
        <p className="font-bold text-center text-slate-900 border-t border-gray-100 pt-4 font-sans text-sm md:text-base">
          &quot;When institutional gatekeeping protects authority at the expense of truth, open public documentation becomes the ultimate guardian of scientific justice.&quot;
        </p>
      </div>

    </article>
  );
}
