import React, { useState } from "react";
import {
  Flame,
  Copy,
  Check,
  BookOpen,
  Scale,
  Sparkles,
  Landmark,
  ShieldCheck,
} from "lucide-react";

export default function AcademicCandorAndDepthEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("academic-candor-and-depth-article-text");
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

  const englishTreatiseText = `Academic Candor as the Highest Intellectual Depth: Why Radical Plain-Speaking Requires a Lifetime of Rigor

I. The Paradox of Extreme Candor
In worldly affairs—and especially in modern academia—extreme candor is routinely misread by smooth operators as naivete, "lack of diplomacy," or poor emotional intelligence. As the companion reflection observes, however, those who lay every card face up on the table (playing an open hand, without hidden calculations) are rarely simpletons. Far more often, their intellectual horizon has already surpassed conventional politics.

When Dr. Yue Liu—fully acquainted with how modern grant panels, journal gatekeepers, and peer-review cliques operate—nevertheless puts his Three Major Contributions openly on the record without hedging:
1. Establishing the Wave Mechanics Theory of microwave absorption (refuting 23,300+ papers built on Impedance Matching and Quarter-Wavelength errors);
2. Formulating Liu Yue's Thought (excluding empirical trial-and-error from the definition of science proper: Theory = Axioms + Logic);
3. Issuing the unvarnished institutional verdict (>95% of SCI papers are garbage; modern academia is practicing Cargo Cult Science and has entered a New Dark Age);

such uncompromising plain-speaking is sustained by two rare pillars: a lifetime-forged cognitive capacity capable of seeing through all three layers at once, and rock-solid theoretical grounding (底气) that fears no cross-examination.

II. Why Only Genuine Grounding Can Afford an Open Hand
Notice who can—and who cannot—afford to play an open hand in scholarship:
- Those resting on shaky curves, vague definitions, or plagiarized patchwork CANNOT afford candor. They require ceremonial "politeness," strategic ambiguity ("every study is relatively right or wrong according to its era"), anonymous peer-review shields, and stealth corrections made without citing critics.
- By contrast, when an argument rests on Maxwell's Equations, transmission-line derivations, conservation of energy, and first-principles axioms, there is nothing to hide. Putting all three theses transparently on the table forces every debate back onto logic rather than backroom lobbying.

III. Academic Candor as an Automatic Filter for Genuine Scholars
The video's deepest observation applies directly to scientific discourse: "Behind apparent directness lies a silent screening mechanism—those capable of matching that candor stay; those crooked in heart or trapped in schemes drift away on their own."
Academic candor acts as an uncompromising epistemological filter:
- Conscientious scientists—like long-time collaborator M. G. B. Drew and rigorous physical chemists—engage directly with the equations, signs, and boundary conditions.
- Academic politicians and consensus defenders cannot answer the mathematics, so they flee the table by whining about "tone," hiding behind anonymous rejections, or resorting to silence ("not responding").

IV. Living With Clarity Rather Than Cowardly Calculation
Modern academia confuses timid conformity ("do not cross a line," "preserve institutional face") with "scientific character." Feynman defined true scientific integrity as "utter honesty—bending over backwards to show how you might be wrong." That IS radical academic candor. Those who compromise truth to collect praise spend their careers defending an illusion; those brave enough to lay all cards cleanly on the table live lucidly—and build work that outlasts their era.`;

  const insights = [
    {
      title: "1. Not Naivete—Rock-Solid Grounding (底气)",
      detail:
        "Seeing Wave Mechanics errors, the epistemological root (Liu Yue's Thought), and institutional rot (>95% garbage) takes a lifetime of mastery; stating them without hedging requires confidence in airtight mathematics.",
    },
    {
      title: "2. Open Cards Expose Backroom Hedging",
      detail:
        "Weak scholarship hides behind 'diplomatic' relativism, anonymous gatekeeping, and silent self-correction. Transparent plain-speaking strips away all rhetorical armor.",
    },
    {
      title: "3. Automatic Epistemic Screening (筛选同道)",
      detail:
        "Just as the video notes that candor filters companions, explicit scientific plain-speaking attracts truth-seekers who check equations while repelling sophists who flee into silence.",
    },
    {
      title: "4. True Character = Feynman's Utter Honesty",
      detail:
        "Academia calls obedience 'character'; real scientific morality is fearless candor—refusing tactical silence so one's thought remains lucid and historically uncompromised.",
    },
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="academic-candor-and-depth-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HR &bull; Academic Candor &amp; Cognitive Depth
          </span>
          <span className="bg-amber-100 text-amber-950 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
            学术坦诚 &bull; Open Hand vs. Academic Calculation
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Academic Candor as the Highest Intellectual Depth: Playing an Open Hand With a Lifetime of Grounding
        </h1>
        <p className="text-sm font-bold text-amber-900 mt-2 font-sans">
          论“学术坦诚”：把坦诚活成最高级学术定力与底气——为什么敢把三大贡献“全打明牌”的人，境界早已超越圆滑世故
        </p>
        <p className="text-sm md:text-base text-slate-600 mt-2 font-sans italic">
          Philosophical reflection uniting Yue Liu&apos;s Three Major Contributions with the psychology of extreme candor: open-card integrity as both epistemic courage and an automatic filter for genuine scholars.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
          <span className="text-xs text-slate-400 font-mono">
            Three Major Contributions &bull; Feynman Utter Honesty &bull; Epistemic Clarity
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(englishTreatiseText, "eng-hr")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "eng-hr" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "eng-hr" ? "English Essay Copied!" : "Copy English Essay"}
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Full View Copied!" : "Copy Full View"}
            </button>
          </div>
        </div>
      </div>

      {/* Part I: Four Core Reflections */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Landmark className="w-6 h-6 text-amber-700" />
          <h2>Part I: Anatomy of Academic Candor (学术坦诚的四重底蕴)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {insights.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5 font-sans">
              <h3 className="font-bold text-slate-950 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{item.title}</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Part II: Full English Essay */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <BookOpen className="w-6 h-6 text-amber-700" />
            <h2>Part II: Full English Essay on Academic Candor</h2>
          </div>
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-hr-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "eng-hr-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-hr-mid" ? "Copied!" : "Copy Text"}
          </button>
        </div>
        <div className="bg-slate-900 text-slate-100 rounded-xl p-6 font-serif text-sm md:text-base leading-relaxed whitespace-pre-wrap border border-slate-700">
          {englishTreatiseText}
        </div>
      </section>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Scale className="w-4 h-4 text-slate-400" />
          <span>Essay HR &bull; Academic Candor &amp; Lifetime Intellectual Grounding</span>
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Open-Hand Rigor
          </span>
          <span className="bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Screening by Truth
          </span>
        </div>
      </div>
    </article>
  );
}
