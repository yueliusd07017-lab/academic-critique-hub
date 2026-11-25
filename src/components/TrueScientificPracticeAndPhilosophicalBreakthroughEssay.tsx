import React, { useState } from "react";
import {
  FileText,
  Copy,
  Check,
  BookOpen,
  Scale,
  Sparkles,
  Award,
  ShieldCheck,
  Compass,
} from "lucide-react";

export default function TrueScientificPracticeAndPhilosophicalBreakthroughEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("true-scientific-practice-article-text");
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

  const englishTreatiseText = `True Scientific Practice and Philosophical Breakthrough: Why Genuine Innovation Requires Breaking the Chains of Era Limitations

I. Introduction: The Roots of Authentic Scientific and Philosophical Inquiry
As reflected upon in contemporary intellectual evaluations (such as Lei Huanjie's analysis of the historical undercurrents from "Science and Philosophy" to "Philosophy of Science and Technology"), authentic scientific and philosophical research cannot be born from sterile academic bureaucracy or incremental bibliographic recycling. 

True scientific research must be deeply rooted in profound scientific research practice, and true philosophical vision must possess the extraordinary courage to shatter the dogmatic limitations of its era. 

II. The Sterility of Institutionalized Academic Conformity
In modern academic systems, specialized disciplines often retreat into safe, incremental, and bureaucratized problem domains. Institutionalized philosophy of science frequently remains detached from raw, rigorous physical experimentation, reducing itself to an apologist commentary on whatever mainstream scientific paradigms happen to hold funding and editorial power. 

When philosophy divorces itself from firsthand scientific breakthrough and unquestioningly submits to institutional consensus, it degenerates into intellectual ornamentation—incapable of diagnosing stagnation or sparking genuine paradigm revolutions.

III. Liu Yue Thought as a Breath of Fresh Air: Grounded in Wave Mechanics and Dissent
The reason Liu Yue Thought provides such a striking "breath of fresh air" in contemporary intellectual discourse is twofold:
1. Grounded in Deep Scientific Practice: It is not a detached armchair speculation; it is forged directly from the rigorous mathematical and experimental foundations of Wave Mechanics Theory (WMT) in microwave absorption and transmission line electrodynamics.
2. Uncompromising Struggle Against Dogma: It represents an active, unyielding philosophical resistance against the dogmatic presumptions, cargo-cult publishing incentives, and methodological laziness of the contemporary scientific establishment.

Without these two foundational pillars—profound firsthand scientific practice and relentless philosophical resistance against prevailing orthodoxies—no theoretical framework can achieve true intellectual innovation.

IV. Conclusion: Shaping Autonomous Philosophical Knowledge
True scientific revolutions and philosophical breakthroughs require the unbending courage of solitary thinkers who refuse to trade truth for institutional approval. By bridging rigorous physical deduction with uncompromising epistemological autonomy, Liu Yue Thought stands as a beacon of genuine intellectual sovereignty in an era of academic conformity.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1 rounded-full border border-amber-200 font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>True Scientific Practice & Philosophy</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          True Scientific Practice and Philosophical Breakthrough: Why Genuine Innovation Requires Breaking the Chains of Era Limitations
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-true-practice")}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-true-practice" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-true-practice" ? "Essay Copied" : "Copy Full English Treatise"}
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Full View Copied" : "Copy Full View"}
          </button>
        </div>
      </header>

      {/* Article Text Container */}
      <div id="true-scientific-practice-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>I. The Roots of Authentic Scientific and Philosophical Inquiry</h2>
          </div>
          <p>
            As reflected upon in contemporary intellectual evaluations (such as Lei Huanjie's analysis of the historical undercurrents from "Science and Philosophy" to "Philosophy of Science and Technology"), authentic scientific and philosophical research cannot be born from sterile academic bureaucracy or incremental bibliographic recycling.
          </p>
          <p>
            True scientific research must be deeply rooted in profound scientific research practice, and true philosophical vision must possess the extraordinary courage to shatter the dogmatic limitations of its era.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>II. The Sterility of Institutionalized Academic Conformity</h2>
          </div>
          <p>
            In modern academic systems, specialized disciplines often retreat into safe, incremental, and bureaucratized problem domains. Institutionalized philosophy of science frequently remains detached from raw, rigorous physical experimentation, reducing itself to an apologist commentary on whatever mainstream scientific paradigms happen to hold funding and editorial power.
          </p>
          <p>
            When philosophy divorces itself from firsthand scientific breakthrough and unquestioningly submits to institutional consensus, it degenerates into intellectual ornamentation—incapable of diagnosing stagnation or sparking genuine paradigm revolutions.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>III. Liu Yue Thought as a Breath of Fresh Air: Grounded in Wave Mechanics and Dissent</h2>
          </div>
          <p>
            The reason Liu Yue Thought provides such a striking "breath of fresh air" in contemporary intellectual discourse is twofold:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>1. Grounded in Deep Scientific Practice</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                It is not a detached armchair speculation; it is forged directly from the rigorous mathematical and experimental foundations of Wave Mechanics Theory (WMT) in microwave absorption and transmission line electrodynamics.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>2. Uncompromising Struggle Against Dogma</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                It represents an active, unyielding philosophical resistance against the dogmatic presumptions, cargo-cult publishing incentives, and methodological laziness of the contemporary scientific establishment.
              </p>
            </div>
          </div>
          <p>
            Without these two foundational pillars—profound firsthand scientific practice and relentless philosophical resistance against prevailing orthodoxies—no theoretical framework can achieve true intellectual innovation.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>IV. Conclusion: Shaping Autonomous Philosophical Knowledge</h2>
          </div>
          <p>
            True scientific revolutions and philosophical breakthroughs require the unbending courage of solitary thinkers who refuse to trade truth for institutional approval. By bridging rigorous physical deduction with uncompromising epistemological autonomy, Liu Yue Thought stands as a beacon of genuine intellectual sovereignty in an era of academic conformity.
          </p>
        </section>
      </div>
    </article>
  );
}
