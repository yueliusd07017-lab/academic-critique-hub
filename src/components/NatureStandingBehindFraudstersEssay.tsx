import React from "react";
import { AlertTriangle, BookOpen, Building2, Flame, HelpCircle, Scale, ShieldAlert, Sparkles, Users, XCircle } from "lucide-react";

export default function NatureStandingBehindFraudstersEssay() {
  return (
    <article
      className="prose max-w-none text-slate-800 leading-relaxed font-serif text-sm md:text-base space-y-8 animate-fade-in"
      id="nature-standing-behind-fraudsters-article-text"
    >
      {/* Title & Metadata Header */}
      <div className="text-center space-y-4 pb-8 border-b border-slate-200 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-rose-100 text-rose-900 border border-rose-300">
          <ShieldAlert className="w-4 h-4 text-rose-700 animate-pulse" />
          Institutional Investigation • Nature Cancer (30 October 2026) &amp; Misconduct Rehabilitation
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
          What Is <em>Nature</em> Trying to Prove?
          <span className="block text-xl md:text-2xl font-serif font-normal text-rose-900 mt-2">
            Five Months After Formal Misconduct Sanctions &amp; Removal as Dean, Ping Wang’s Team Publishes in <em>Nature Cancer</em>—Exposing the Shared Interests Between Luxury Journals and Sanctioned Powerbrokers
          </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-500 font-mono">
          <span><strong>Author:</strong> Dr. Yue Liu (刘跃)</span>
          <span>•</span>
          <span><strong>Case Study:</strong> <em>Nature Cancer</em>, Published 30 October 2026</span>
          <span>•</span>
          <span><strong>Prior Sanction:</strong> May 2026 (Tongji University Misconduct Ruling)</span>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs md:text-sm text-amber-900 text-left font-sans space-y-2">
          <p className="font-bold flex items-center gap-2 text-amber-950">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            The Five Piercing Questions:
          </p>
          <p>
            <em>Nature</em>到底想证明什么？<em>Nature</em>一而再地为造假者站台，<em>Nature</em>到底是在做什么？<em>Nature</em>想证明它发现了人才？<em>Nature</em>想证明它一而再地鉴别出了不能埋没的成果？还是<em>Nature</em>有什么隐情，是因为<em>Nature</em>和造假者有共同的利益？<br />
            <span className="text-amber-800 italic">
              (What is Nature trying to prove? By repeatedly standing behind authors sanctioned for misconduct, what is Nature actually doing? Is it trying to prove it discovered talent? That it repeatedly identified “unburiable” breakthroughs? Or does Nature have a hidden agenda—because Nature and fraudsters share common interests?)
            </span>
          </p>
        </div>
      </div>

      {/* Section 1: The Factual Timeline */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            01
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            The Five-Month Turnaround: From Official Misconduct Sanction to <em>Nature Cancer</em>
          </h2>
        </div>

        <p>
          The facts of the case are stark and undeniable:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
          <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-5 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-rose-700">May 2026 • Official Misconduct Sanction</span>
            <h3 className="text-base font-bold text-rose-950 m-0">
              Removed as Dean &amp; Demoted for <em>Nature</em> Paper Misconduct
            </h3>
            <p className="text-xs md:text-sm text-rose-900 leading-relaxed">
              In May 2026, following an official investigation into research misconduct in his team’s <em>Nature</em> paper, Ping Wang (王平) was found guilty of academic misconduct and failure of corresponding-author oversight (通讯作者失察失管). He was <strong>removed from his post as Dean of the School of Life Sciences and Technology at Tongji University</strong> (免去同济大学生命科学与技术学院院长职务), <strong>demoted by two ranks</strong> (降岗两级), and <strong>barred from applying for grants or titles for 24 months</strong> (取消申报资格24个月).
            </p>
          </div>

          <div className="bg-indigo-50/70 border border-indigo-200 rounded-xl p-5 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-indigo-700">30 October 2026 • Red-Carpet Rehabilitation</span>
            <h3 className="text-base font-bold text-indigo-950 m-0">
              New Publication in <em>Nature Cancer</em>
            </h3>
            <p className="text-xs md:text-sm text-indigo-900 leading-relaxed">
              Just <strong>five months later</strong>, on October 30, 2026, <em>Nature Cancer</em> published online a new research article by Ping Wang’s team (jointly with Xin Ge of Tongji University and Xinxiang Li of Fudan University): <em>“GALE is a tumor-intrinsic checkpoint of cell-mediated killing”</em> (Zezhi Shan, Dongdong Wang, Zening Zheng, Zilan Ye, Shiyu Mao, Longyan Xie, Yaxu Li, Yadong Guo, Linjun Weng, Qi Wu, Yanjin Wang, Qiao Ran, Yanrong Yang, Tingting Niu, Li Li, Dakui Luo, Junyong Weng, Lei Yu, Liming Wei, Xin Ge, Xinxiang Li &amp; Ping Wang), claiming that CRISPR screening identified GALE as promoting N-glycosylation of CD155 and CEACAM1 to enhance TIGIT/TIM3 binding and weaken CD226 activation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Answering the Five Questions */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            02
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            Deconstructing <em>Nature</em>’s Motives: Talent Discovery or Cartel Complicity?
          </h2>
        </div>

        <p>
          When a flagship <em>Nature</em> portfolio journal rushes to publish a senior corresponding author just five months after his own university stripped him of his deanship and demoted him for misconduct in a <em>Nature</em> paper, we must ask: <strong>what is <em>Nature</em> actually doing?</strong>
        </p>

        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Is <em>Nature</em> trying to prove it “discovered talent” or “identified unburiable breakthroughs”?</strong>
            <p className="mt-1">
              No. Genuine scientific talent is demonstrated by theoretical rigor, reproducibility, and intellectual honesty—not by producing high-throughput CRISPR/flow-cytometry/mouse-organoid packages from a laboratory whose previous <em>Nature</em> paper was just formally ruled fraudulent. If <em>Nature</em> genuinely cared about “not burying talent,” it would not systematically reject fundamental theoretical corrections (such as the wave mechanics of microwave absorption) while rolling out the red carpet for sanctioned labs.
            </p>
          </li>
          <li>
            <strong>Mutual Face-Saving &amp; Retroactive Brand Protection:</strong>
            <p className="mt-1">
              When a <em>Nature</em> paper is officially ruled fraudulent, <em>Nature</em>’s own editorial vetting and peer-review prestige are indicted. By publishing a new <em>Nature Cancer</em> paper by the exact same PI five months later, the <em>Nature</em> portfolio sends a calculated institutional message: <em>“The previous misconduct was merely a minor technicality by subordinates; our chosen star PI is still a world-class Nature-caliber scientist.”</em> Rehabilitating the sanctioned author is, first and foremost, <strong>rehabilitating <em>Nature</em>’s own brand</strong>.
            </p>
          </li>
          <li>
            <strong>The Asymmetric Shield of Corresponding Authorship:</strong>
            <p className="mt-1">
              In modern academic feudalism, the principal investigator enjoys an asymmetric shield. When a paper is praised, the PI claims the lion’s share of credit, grants, and administrative power. When the paper is exposed for fraud, the PI pleads mere “oversight failure” (失察失管), sacrifices junior authors, absorbs a temporary 24-month administrative penalty, and immediately resumes publishing in <em>Nature</em> sub-journals to maintain lab funding and academic standing.
            </p>
          </li>
          <li>
            <strong>The Shared Interests of the Luxury-Journal Cartel:</strong>
            <p className="mt-1">
              The deepest answer to <em>“Does Nature have a hidden agenda—because Nature and fraudsters share common interests?”</em> is <strong>yes</strong>. Luxury journals like <em>Nature</em> and <em>Nature Cancer</em> operate on a business model driven by Impact Factor, citation volume, media buzz, and Article Processing Charges (APCs) / institutional subscriptions. Well-funded, well-connected labs at elite institutions (such as Tongji and Fudan) reliably supply trendy, citation-generating biomedical narratives (CRISPR screens, immune checkpoints, patient organoids). Neither the journal nor the sanctioned powerbroker has any interest in disrupting this mutually profitable pipeline.
            </p>
          </li>
        </ol>
      </section>

      {/* Section 3: The Epistemological Contrast */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4 font-sans">
        <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2 m-0">
          <Scale className="w-5 h-5 text-indigo-700" />
          The Verdict of History
        </h2>
        <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
          History will judge this contrast mercilessly. On one hand, independent scientists who point out elementary mathematical and physical errors in mainstream papers are stonewalled by peer review, rejected without refutation, and even blocked by platform moderation (“审核未通过”). On the other hand, an author formally sanctioned and removed as Dean for research misconduct in a <em>Nature</em> paper is welcomed back into <em>Nature Cancer</em> within five months. This proves beyond doubt that modern luxury-journal publishing is not an arbiter of scientific truth—it is an <strong>interest-driven cartel</strong>.
        </p>
      </section>
    </article>
  );
}
