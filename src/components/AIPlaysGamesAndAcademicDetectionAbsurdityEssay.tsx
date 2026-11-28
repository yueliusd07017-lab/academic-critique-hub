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
  Gamepad2,
} from "lucide-react";

export default function AIPlaysGamesAndAcademicDetectionAbsurdityEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("ai-plays-games-article-text");
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

  const englishTreatiseText = `Playing Games: Why AI Masters the Academic Game, The Absurdity of AI-Rate Detection, and How AI Will Play the Institutional Elephant to Death

I. Introduction: AI as the Ultimate Master of Games
As Dr. Yue Liu observes in foundational treatises such as The Academic AI Backlash (Preprints.org 2025) and From Academic Research to Academic Games (SSRN 5684424), artificial intelligence is the ultimate master of games. 
Set the rules, and AI will play better than anyone. Modern academic publishing and bureaucratic evaluation systems have transformed science into an elaborate, rule-bound game—and AI is now exposing the profound absurdity of its entire structure.

II. The Elephant in the Room and the AI Terminal Endgame
For decades, the global scientific establishment has harbored a massive "elephant in the room": the systematic proliferation of cargo-cult science, where over 95% of routine SCI publications operate as low-value parameter-tweaking noise. Bureaucratic gatekeepers are powerless to reform this decay because their survival depends on it.
Dr. Liu long ago predicted: We should thank AI, because only AI can play this institutional elephant to death. By laying bare the mechanical nature of academic writing, AI exposes the hollow pretense of the entire evaluation apparatus.

III. The Absurdity of Commercialized AI-Rate Detection
Recent real-world cases—such as researchers forced to dumb down pristine, original manuscripts to an elementary school level to pass commercial AI detectors (under 20%), only to be rejected for lacking academic rigor—reveal the farce of automated censorship:
- The commercialized AI detection industry profits by weaponizing arbitrary thresholds.
- Because high-quality academic writing requires precise terminology, formal structure, and objective expression—which are precisely the features of good human writing that trained AI models—the system paradoxically penalizes clarity and rewards mediocrity.
- Scholars are trapped in a kafkaesque trial: you must prove you are not a machine by writing like an uneducated human.

IV. Conclusion: Returning to Self-Media and Uncompromising Originality
If an author's original thought is articulated with the aid of AI, why should it matter? Truth and original insights stand on their own merits. Bypassing the commercialized extortion of AI-rate screening and returning to decentralized digital platforms (self-media) is the ultimate liberation for true thinkers.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-violet-50 text-violet-900 px-3 py-1 rounded-full border border-violet-200 font-semibold">
            <Gamepad2 className="w-3.5 h-3.5 text-violet-700" />
            <span>Essay HAT: AI Plays Games & Detection Absurdity</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          Playing Games: Why AI Masters the Academic Game, The Absurdity of AI-Rate Detection, and How AI Will Play the Institutional Elephant to Death
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-ai-plays-games")}
            className="flex items-center gap-1.5 px-4 py-2 bg-violet-900 hover:bg-violet-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-ai-plays-games" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-ai-plays-games" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="ai-plays-games-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-violet-800 shrink-0" />
            <h2>I. Introduction: AI as the Ultimate Master of Games</h2>
          </div>
          <p>
            As Dr. Yue Liu observes in foundational treatises such as <span className="italic">The Academic AI Backlash</span> (Preprints.org 2025) and <span className="italic">From Academic Research to Academic Games</span> (SSRN 5684424), artificial intelligence is the ultimate master of games.
          </p>
          <p>
            Set the rules, and AI will play better than anyone. Modern academic publishing and bureaucratic evaluation systems have transformed science into an elaborate, rule-bound game—and AI is now exposing the profound absurdity of its entire structure.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-violet-800 shrink-0" />
            <h2>II. The Elephant in the Room and the AI Terminal Endgame</h2>
          </div>
          <p>
            For decades, the global scientific establishment has harbored a massive "elephant in the room": the systematic proliferation of cargo-cult science, where over 95% of routine SCI publications operate as low-value parameter-tweaking noise. Bureaucratic gatekeepers are powerless to reform this decay because their survival depends on it.
          </p>
          <p>
            Dr. Liu long ago predicted: <span className="italic font-semibold text-stone-950">We should thank AI, because only AI can play this institutional elephant to death.</span> By laying bare the mechanical nature of academic writing, AI exposes the hollow pretense of the entire evaluation apparatus.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-violet-800 shrink-0" />
            <h2>III. The Absurdity of Commercialized AI-Rate Detection</h2>
          </div>
          <p>
            Recent real-world cases—such as researchers forced to dumb down pristine, original manuscripts to an elementary school level to pass commercial AI detectors (under 20%), only to be rejected for lacking academic rigor—reveal the farce of automated censorship:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-800 shrink-0" />
                <span>Commercial Extortion</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                The commercialized AI detection industry profits by weaponizing arbitrary thresholds against authors.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-violet-800 shrink-0" />
                <span>Penalizing Clarity</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Because high-quality writing requires objective terminology and formal structure, the detector paradoxically penalizes clarity and rewards mediocrity.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-violet-800 shrink-0" />
            <h2>IV. Conclusion: Returning to Self-Media and Uncompromising Originality</h2>
          </div>
          <p>
            If an author's original thought is articulated with the aid of AI, why should it matter? Truth and original insights stand on their own merits. Bypassing the commercialized extortion of AI-rate screening and returning to decentralized digital platforms (self-media) is the ultimate liberation for true thinkers.
          </p>
        </section>
      </div>
    </article>
  );
}
