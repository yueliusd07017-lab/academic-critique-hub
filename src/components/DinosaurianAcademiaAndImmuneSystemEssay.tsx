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

export default function DinosaurianAcademiaAndImmuneSystemEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("dinosaurian-academia-article-text");
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

  const englishTreatiseText = `Dinosaurian Academia, Editorial Transparency, and the Natural Immunity of Academic Freedom

I. Introduction: The Top-Journal Paradox and Academic Noise
In the contemporary research ecosystem, publication in a high-impact "top-tier" journal is celebrated as the ultimate badge of honor. Yet, a profound paradox defines this culture: once a paper is published, floods of congratulatory messages ensue, but virtually no one actually reads the work or expects to gain genuine intellectual insight from it. Everyone quietly knows that the vast majority of journal articles are academic noise—cargo-cult science designed solely for career metrics. If an article presents genuine theoretical breakthroughs (such as Wave Mechanics Theory) that genuinely elevate cognitive understanding, it is ignored if it does not offer shortcut publication tricks. Conversely, if a garbage paper is marketed as a "shortcut to top journals," crowds will swarm to read it.

II. The Rejection Badge of Honor and Editorial "Privacy" Hypocrisy
For mainstream researchers, journal rejection is treated as a humiliating scandal to be hidden in silence. For Dr. Yue Liu, however, rejection by mainstream journals is worn as a badge of honor—proof positive that the manuscript is not mediocre cargo-cult trash. 

When researchers or preprint platforms publish editorial correspondence and rejection letters to establish a public ledger of reason, mainstream editors and reviewers frequently protest, invoking "privacy laws." This begs a vital question: do privacy laws protect vulnerable authors or shield arbitrary editorial censorship? As explored in Dr. Liu's treatise (Balancing Transparency and Data Protection in Academic Publishing, Preprints.org 2025), exposing editorial correspondence is essential to maintaining accountability in scientific discourse. (As evidenced by recent administrative censorship on platforms like Sciencenet.cn, where critical treatises on Wave Mechanics Theory are routinely blocked under "audit failure," institutional gatekeepers fear transparency above all).

III. Dinosaurian Scientism vs. The Natural Immune System of Academic Freedom
Viewing the modern scientific establishment through the lens of evolutionary history reveals a striking parallel to the extinction of dinosaurs. Dinosaurs were the most massive and dominant terrestrial animals of their era, yet they perished because they lacked a resilient immune system against ecological shifts. 

Today, SCI metric scientism and bureaucratic peer review appear as colossal, invincible monoliths—operating like a heavily funded planned economy of citations and funding. Yet, they possess zero natural immunity against institutional mediocrity. True intellectual vitality does not reside in central planning or impact-factor monopolies, but in academic freedom, decentralized discourse, and the natural "immune system" of independent thinkers.

IV. Conclusion: The Triumph of Intellectual Liberty
Just as humanity survived global biological challenges through natural biological immunity rather than artificial containment, the future of science will not be saved by reforming another bureaucratic journal. It will be secured by dismantling the dinosaurian apparatus of metric scientism and restoring the unbridled liberty of the human intellect.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1 rounded-full border border-amber-200 font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Dinosaurian Academia & Natural Immunity</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          Dinosaurian Academia, Editorial Transparency, and the Natural Immunity of Academic Freedom
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-dinosaur")}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-dinosaur" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-dinosaur" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="dinosaurian-academia-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>I. Introduction: The Top-Journal Paradox and Academic Noise</h2>
          </div>
          <p>
            In the contemporary research ecosystem, publication in a high-impact "top-tier" journal is celebrated as the ultimate badge of honor. Yet, a profound paradox defines this culture: once a paper is published, floods of congratulatory messages ensue, but virtually no one actually reads the work or expects to gain genuine intellectual insight from it. Everyone quietly knows that the vast majority of journal articles are academic noise—cargo-cult science designed solely for career metrics.
          </p>
          <p>
            If an article presents genuine theoretical breakthroughs (such as Wave Mechanics Theory) that genuinely elevate cognitive understanding, it is ignored if it does not offer shortcut publication tricks. Conversely, if a garbage paper is marketed as a "shortcut to top journals," crowds will swarm to read it.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>II. The Rejection Badge of Honor and Editorial "Privacy" Hypocrisy</h2>
          </div>
          <p>
            For mainstream researchers, journal rejection is treated as a humiliating scandal to be hidden in silence. For Dr. Yue Liu, however, rejection by mainstream journals is worn as a badge of honor—proof positive that the manuscript is not mediocre cargo-cult trash.
          </p>
          <p>
            When researchers or preprint platforms publish editorial correspondence and rejection letters to establish a public ledger of reason, mainstream editors and reviewers frequently protest, invoking "privacy laws." This begs a vital question: do privacy laws protect vulnerable authors or shield arbitrary editorial censorship? As explored in Dr. Liu's treatise (<span className="italic">Balancing Transparency and Data Protection in Academic Publishing</span>, Preprints.org 2025), exposing editorial correspondence is essential to maintaining accountability in scientific discourse. As evidenced by recent administrative censorship on platforms like Sciencenet.cn, where critical treatises on Wave Mechanics Theory are routinely blocked under "audit failure," institutional gatekeepers fear transparency above all.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>III. Dinosaurian Scientism vs. The Natural Immune System of Academic Freedom</h2>
          </div>
          <p>
            Viewing the modern scientific establishment through the lens of evolutionary history reveals a striking parallel to the extinction of dinosaurs. Dinosaurs were the most massive and dominant terrestrial animals of their era, yet they perished because they lacked a resilient immune system against ecological shifts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Colossal Monoliths</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Today, SCI metric scientism and bureaucratic peer review appear as colossal, invincible monoliths—operating like a heavily funded planned economy of citations and funding.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Decentralized Immunity</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Yet, they possess zero natural immunity against institutional mediocrity. True intellectual vitality resides in academic freedom, decentralized discourse, and the natural "immune system" of independent thinkers.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>IV. Conclusion: The Triumph of Intellectual Liberty</h2>
          </div>
          <p>
            Just as humanity survived global biological challenges through natural biological immunity rather than artificial containment, the future of science will not be saved by reforming another bureaucratic journal. It will be secured by dismantling the dinosaurian apparatus of metric scientism and restoring the unbridled liberty of the human intellect.
          </p>
        </section>
      </div>
    </article>
  );
}
