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
          The Twin Scandals • Nature (21 Oct 2026) &amp; Nature Cancer (30 Oct 2026)
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
          What Is <em>Nature</em> Trying to Prove?
          <span className="block text-xl md:text-2xl font-serif font-normal text-rose-900 mt-2">
            The Twin Scandals: After Being Stripped of Deanships for Fabricated Papers, Nankai’s Quan Chen Publishes in <em>Nature</em> Main Journal &amp; Tongji’s Ping Wang Publishes in <em>Nature Cancer</em>
          </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-500 font-mono">
          <span><strong>Author:</strong> Dr. Yue Liu (刘跃)</span>
          <span>•</span>
          <span><strong>Case 1 (Nature Main Journal):</strong> Quan Chen (南开陈佺), Published 21 October 2026</span>
          <span>•</span>
          <span><strong>Case 2 (Nature Cancer):</strong> Ping Wang (同济王平), Published 30 October 2026</span>
          <span>•</span>
          <span><strong>Reference:</strong> <a href="https://yueliusd.substack.com/p/where-does-nature-get-the-nerve-the" target="_blank" rel="noreferrer" className="underline text-indigo-700">Substack Treatise</a></span>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs md:text-sm text-amber-900 text-left font-sans space-y-2">
          <p className="font-bold flex items-center gap-2 text-amber-950">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            The Five Piercing Questions for <em>Nature</em>:
          </p>
          <p>
            <em>Nature</em>到底想证明什么？<em>Nature</em>一而再地为造假者站台，<em>Nature</em>到底是在做什么？<em>Nature</em>想证明它发现了人才？<em>Nature</em>想证明它一而再地鉴别出了不能埋没的成果？还是<em>Nature</em>有什么隐情，是因为<em>Nature</em>和造假者有共同的利益？<br />
            <span className="text-amber-800 italic">
              (What is Nature trying to prove? By repeatedly standing behind authors sanctioned for misconduct—not once, but in quick succession across both Nature main journal and Nature Cancer—what is Nature actually doing? Is it trying to prove it discovered talent? That it repeatedly identified “unburiable” breakthroughs? Or does Nature have a hidden agenda—because Nature and fraudsters share common interests?)
            </span>
          </p>
        </div>
      </div>

      {/* Section 1: The Twin Factual Timelines */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            01
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            The Identical Script: How Two Disgraced Deans Were Welcomed Back by <em>Nature</em> Within Nine Days
          </h2>
        </div>

        <p>
          Within just <strong>nine days in October 2026</strong>, <em>Nature</em> and its premier sister journal <em>Nature Cancer</em> performed back-to-back rehabilitations of two life science deans who had both been formally disciplined and removed for research misconduct:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
          {/* Twin Case 1: Quan Chen / Nankai */}
          <div className="bg-rose-50/70 border border-rose-300 rounded-xl p-5 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-rose-800">Scandal 1 • Nature Main Journal (21 Oct 2026)</span>
            <h3 className="text-base font-bold text-rose-950 m-0">
              Nankai Dean Quan Chen (陈佺): Sanctioned for Gross Image Fabrication, Crowned in <em>Nature</em> Main Journal
            </h3>
            <p className="text-xs text-rose-900 leading-relaxed">
              <strong>The Misconduct:</strong> In 2024, Quan Chen’s team published a ferroptosis paper in <em>Nature Cancer</em> that was exposed for grotesque image manipulation—estimated curves, duplicated panels, and copy-pasting. The official investigation concluded academic misconduct; Chen was found responsible for oversight failure (失察失管), <strong>removed from his position as Dean of the School of Life Sciences at Nankai University</strong>, demoted, barred from project applications for 24 months, and the paper was retracted.
            </p>
            <p className="text-xs text-rose-950 font-bold border-t border-rose-200 pt-2">
              <strong>The <em>Nature</em> Payoff:</strong> On October 21, 2026, <em>Nature</em> main journal published Chen’s team as corresponding author: <em>“GRP75-dependent SIMPA mediates inter-organellar quality control”</em> (Nature, Published 21 Oct 2026), celebrating it as his laboratory’s <strong>first flagship Nature paper</strong>!
            </p>
          </div>

          {/* Twin Case 2: Ping Wang / Tongji */}
          <div className="bg-indigo-50/70 border border-indigo-300 rounded-xl p-5 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-indigo-800">Scandal 2 • Nature Cancer (30 Oct 2026)</span>
            <h3 className="text-base font-bold text-indigo-950 m-0">
              Tongji Dean Ping Wang (王平): Disciplined in May 2026, Rehabilitated in <em>Nature Cancer</em> in October
            </h3>
            <p className="text-xs text-indigo-900 leading-relaxed">
              <strong>The Misconduct:</strong> In May 2026, following an official investigation into fabricated data in his team’s <em>Nature</em> paper, Ping Wang was found guilty of misconduct and failure of oversight. He was <strong>removed as Dean of the School of Life Sciences and Technology at Tongji University</strong>, demoted by two ranks, and barred from project applications for 24 months.
            </p>
            <p className="text-xs text-indigo-950 font-bold border-t border-indigo-200 pt-2">
              <strong>The <em>Nature</em> Payoff:</strong> Just five months later, on October 30, 2026, <em>Nature Cancer</em> published Wang’s team: <em>“GALE is a tumor-intrinsic checkpoint of cell-mediated killing”</em> (Nature Cancer, Published 30 Oct 2026).
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
