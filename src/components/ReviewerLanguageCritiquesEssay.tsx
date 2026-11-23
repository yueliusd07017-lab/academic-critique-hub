import React, { useState } from "react";
import {
  FileWarning,
  Copy,
  Check,
  BookOpen,
  Scale,
  Quote,
  Bot,
  MessageSquareQuote,
} from "lucide-react";

export default function ReviewerLanguageCritiquesEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("reviewer-language-critiques-article-text");
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

  const englishTreatiseText = `On Peer Reviewers' Language Critiques: Why "Poor English" Is So Often a Pretext for Failing to Understand—or Refusing to Engage—the Science

I. The Anatomy of a Convenience Excuse: Physica Scripta (PHYSSCR-121253)
In scholarly publishing, non-native authors frequently receive a familiar verdict whenever a manuscript challenges mainstream orthodoxy: "The English is unreadable." Consider the documented Decision Letter for manuscript PHYSSCR-121253 (analyzed in "Analysis of the Physica Scripta Editorial Board Rejection," July 26, 2023—Rejected without addressing the science):

"Referee 3: The English is very poor and does not help the reader to get the meaning. The manuscript may be suitable for mathematical journals rather than physical journals."

Pause and examine the logical contradiction packed into those two sentences.
First, to reject a paper solely on language grounds, the prose would have to be so mangled that a specialist cannot decipher what the authors are saying. Yet if a submission were genuinely unintelligible, a competent journal editor would issue an immediate desk rejection rather than dispatch it to external peer review.
Second, Referee 3 claims in the first sentence that the English "does not help the reader to get the meaning"—yet in the very next sentence diagnoses the paper as "suitable for mathematical journals rather than physical journals." Clearly, the referee grasped enough meaning to recognize rigorous mathematical derivation, felt unwilling or unable to engage those derivations on physical grounds, and reached for "poor English" as a convenient exit.

Every manuscript we submit undergoes more than a dozen rounds of intensive back-and-forth revision between me and Professor Michael G. B. Drew—a native British scientist who has published roughly a thousand SCI papers. Those rounds refine both physics and prose (in fact, many of our sharpest theoretical arguments emerge precisely during revision). Knowing my own limitations in English, I readily acknowledge that when the initial draft originates from me, occasional minor grammatical slips can survive even a dozen collaborative passes. Yet a manuscript vetted over a dozen times with a native British veteran is never remotely incomprehensible.

II. When a Native Scholar Pushes Back: The Materials Chemistry and Physics Precedent
Why should authors never automatically kneel before a reviewer's linguistic verdict?
In an earlier submission to Materials Chemistry and Physics, a referee compiled a long list of supposed language "errors" and recommended rejection for poor English. Conscious that English is not my native tongue, I was initially ready to concede and accept the blame.
Professor Drew refused to surrender. He went through the referee's alleged language "errors" line by line and rebutted them point by point—demonstrating that the reviewer's own "corrections" were arbitrary or mistaken. The manuscript was re-evaluated and ultimately published.

III. The Diagnostic Law: "Well-Written" vs. "Poor English" (JMMM 2010)
Compare that rejection tactic with our early hydrothermal ferrite paper—Liu Y, Drew MGB, Wang J, Zhang M, Liu Y, "Efficiency and purity control in the preparation of pure and/or aluminum-doped barium ferrites by hydrothermal methods using ferrous ions as reactants," Journal of Magnetism and Magnetic Materials 322(3) (2010) 366-374. After earlier drafts had been rejected multiple times, Drew merged them into a single coherent manuscript and rewrote it directly. The reviewers praised the paper as "well written"—meaning both the science and the English stood out cleanly.

Decades of publishing across both reactions reveal an empirical rule:
- Whenever referees actually understand our manuscript, they report that it is well written.
- Whenever referees complain that our English is "very poor," more often than not the English itself is not the real obstacle—the referee simply never understood the physical or mathematical content of the paper.

IV. The AI English-Scorer Illusion: 70-80 vs. 95
Today, several preprint platforms offer automated English screening and limited AI-generated rewrites. Our Drew-vetted manuscripts typically receive automated scores of 70 to 80. After applying the platform's AI rewrite suggestions, the same automated checker raises its score to roughly 95.
When I showed these scores to Professor Drew, his assessment was immediate and decisive: the AI awards inflated marks to its own sanitized style, whereas the AI-revised version is actually LESS idiomatic and authentic than our original prose. Coming from a native British chemist with roughly a thousand peer-reviewed papers—without whose generous collaboration I could scarcely have published in English SCI journals at all—that judgment carries far more weight than any algorithmic score. Mechanized style checkers reward bland, homogenized phrasing over crisp scientific precision.

V. Reviewers Are Fallible on Language Too
As Robert L. Glass wryly captured in his classic satire, "A Letter from the Frustrated Author of a Journal Paper" (Journal of Systems and Software 54(1), 2000, p. 1, DOI: 10.1016/S0164-1212(00)00020-0), peer reviewers are frequently arbitrary, inconsistent, and wrong—and that fallibility extends directly to their judgments of English prose.

This is not to pretend any manuscript is linguistically flawless. Whenever I re-read our papers, I can still spot places worth tightening, because the base draft was written by a non-native hand. But minor imperfections never stop a serious reader from following explicit equations and physical definitions. When a reviewer uses "very poor English" to avoid addressing the science, the critique reveals far more about the reviewer's comprehension—or evasion—than about the manuscript's prose.`;

  const diagnosticPoints = [
    {
      index: "01. The Desk-Rejection Test",
      detail:
        "If prose were truly unreadable, an editor would desk-reject it immediately. Passing editorial screening proves the English is intelligible; citing 'poor English' after peer review exposes an evasion of scientific arguments.",
    },
    {
      index: "02. The Contradiction in PHYSSCR-121253",
      detail:
        "Referee 3 claimed the English 'does not help the reader to get the meaning' while simultaneously declaring the paper 'suitable for mathematical journals'—proving the math was understood well enough to dodge.",
    },
    {
      index: "03. The Comprehension Correlation",
      detail:
        "From JMMM 2010 onward, whenever referees grasp the physics, they call our papers well written; when they fail to follow rigorous derivations (or resist Wave Mechanics), they blame the English.",
    },
    {
      index: "04. AI Scorers vs. 1,000-Paper Mastery",
      detail:
        "Automated checkers score Drew-vetted prose 70–80 and AI-sanitized rewrites ~95. As Drew noted, algorithms flatter their own output while stripping authentic British scientific idiom.",
    },
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200 text-stone-800 leading-relaxed font-serif"
      id="reviewer-language-critiques-article-text"
    >
      {/* Editorial Header */}
      <header className="border-b border-stone-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-3">
          <span>Essay HT</span>
          <span aria-hidden="true">·</span>
          <span>Peer Review Epistemology &amp; Academic English</span>
          <span aria-hidden="true">·</span>
          <span>PHYSSCR-121253 · Mater. Chem. Phys. · JMMM 2010 · Glass (2000)</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-extrabold text-stone-950 font-serif leading-tight tracking-tight max-w-3xl">
          On Peer Reviewers&apos; Language Critiques: Why &ldquo;Poor English&rdquo; Is So Often a Pretext for Avoiding the Science
        </h1>
        <p className="text-sm font-semibold text-amber-900 mt-2 font-sans">
          谈审稿人的语言评语：为什么“英文不好”往往只是看不懂科学内容或不愿正面回应的借口
        </p>
        <p className="text-sm md:text-base text-stone-600 mt-2 font-sans max-w-3xl">
          An empirical critique of linguistic gatekeeping in peer review—drawing on <em>Physica Scripta</em> decision records, Prof. M. G. B. Drew&apos;s point-by-point rebuttals in <em>Materials Chemistry and Physics</em>, the <em>JMMM</em> 2010 benchmark, automated preprint AI-checker scores, and Robert L. Glass (2000).
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4 border-t border-stone-100">
          <span className="text-xs text-stone-500 font-mono tabular-nums">
            Glass (2000) DOI: 10.1016/S0164-1212(00)00020-0 · JMMM 2010, 322(3), 366–374
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(englishTreatiseText, "eng-ht")}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
            >
              {copiedId === "eng-ht" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "eng-ht" ? "English Essay Copied" : "Copy English Essay"}
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

      {/* Part I: Documentary Case Study */}
      <section className="mb-10 space-y-5">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-stone-950 border-b border-stone-200 pb-2">
          <FileWarning className="w-5 h-5 text-amber-800 shrink-0" />
          <h2>Part I: Documentary Evidence &amp; Four Core Observations</h2>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-stone-500 font-semibold">
            <Quote className="w-4 h-4 text-amber-800 shrink-0" />
            <span>Exhibit A · Decision Letter PHYSSCR-121253 (July 26, 2023) — Rejected Without Addressing the Science</span>
          </div>
          <blockquote className="text-sm md:text-base font-serif italic text-stone-900 leading-relaxed pt-1">
            &ldquo;Referee 3: The English is very poor and does not help the reader to get the meaning. The manuscript may be suitable for mathematical journals rather than physical journals.&rdquo;
          </blockquote>
          <p className="text-xs font-sans text-stone-600 pt-1">
            Self-contradiction: claiming not to &ldquo;get the meaning&rdquo; while simultaneously classifying the manuscript as mathematical rather than physical—and bypassing editorial desk-rejection logic altogether.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {diagnosticPoints.map((item, idx) => (
            <div key={idx} className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5 font-sans">
              <h3 className="font-bold text-stone-950 text-sm">{item.index}</h3>
              <p className="text-xs md:text-sm text-stone-700 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Part II: Case Ledger */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-stone-950 border-b border-stone-200 pb-2">
          <MessageSquareQuote className="w-5 h-5 text-amber-800 shrink-0" />
          <h2>Part II: Comparative Ledger of Language Verdicts</h2>
        </div>

        <div className="overflow-x-auto border border-stone-200 rounded-xl font-sans">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead className="bg-stone-100 text-stone-900 border-b border-stone-200">
              <tr>
                <th className="py-3 px-4 font-semibold">Case / Record</th>
                <th className="py-3 px-4 font-semibold">Reviewer / Checker Verdict</th>
                <th className="py-3 px-4 font-semibold">Actual Reality &amp; Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 bg-white text-stone-700 tabular-nums">
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-950">Physica Scripta (PHYSSCR-121253)</td>
                <td className="py-3 px-4">&ldquo;Very poor English&rdquo;; push to math journals</td>
                <td className="py-3 px-4">Passed desk screening &amp; 12+ co-revisions with Drew; used to avoid addressing theoretical physics derivation.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-950">Mater. Chem. Phys. Submission</td>
                <td className="py-3 px-4">Rejected with long list of language &ldquo;errors&rdquo;</td>
                <td className="py-3 px-4">Drew rebutted the referee&apos;s linguistic claims point by point; manuscript was re-reviewed and published.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-950">J. Magn. Magn. Mater. 322(3) (2010) 366–374</td>
                <td className="py-3 px-4">Praised as &ldquo;well written&rdquo;</td>
                <td className="py-3 px-4">Drew merged earlier drafts and rewrote directly; once referees understood the science, language praise followed naturally.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-950">Preprint AI Language Checkers</td>
                <td className="py-3 px-4">Original: 70–80 · AI Rewrite: ~95</td>
                <td className="py-3 px-4">Drew observed AI inflates scores on its own homogenized output, which is actually less idiomatic than original prose.</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-stone-950">Glass (2000), J. Syst. Softw. 54(1): 1</td>
                <td className="py-3 px-4">Satire of capricious peer review</td>
                <td className="py-3 px-4">Confirms reviewers are frequently wrong—in grammar critiques no less than technical judgments.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Part III: Complete English Essay */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-300 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-stone-950">
            <BookOpen className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>Part III: Complete English Essay</h2>
          </div>
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-ht-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-black text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-ht-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-ht-mid" ? "Copied" : "Copy Text"}
          </button>
        </div>

        <div className="bg-stone-900 text-stone-100 rounded-xl p-6 md:p-8 font-serif text-sm md:text-base leading-relaxed whitespace-pre-wrap border border-stone-700 tracking-[0.01em]">
          {englishTreatiseText}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 pt-6 border-t border-stone-200 font-sans text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Scale className="w-4 h-4 text-stone-400 shrink-0" />
          <span>Essay HT · Peer Review Language Critiques · Comprehension Over Pretext</span>
        </div>
        <div className="flex items-center gap-2 text-stone-600 font-medium">
          <Bot className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <span>Human British Prose vs. Algorithmic Smoothing</span>
        </div>
      </footer>
    </article>
  );
}
