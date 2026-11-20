import React, { useState } from "react";
import { ShieldAlert, Copy, Check, Lightbulb, BookOpen, Video, FileText, Flame, Cpu } from "lucide-react";

export default function BreakingConsensusAndTrueTheoryScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("breaking-consensus-and-true-theory-article-text");
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

  const youtubeSafeDescription = `Title: Breaking Consensus, Garbage Harm & Why True Theory Built AI, Chips and Drones (While Journal "Theories" Fail)

What really makes a thinker great? Why do garbage papers harm science far more deeply than outright data fraud? And why are critics completely wrong when they claim "theory is useless"?

In this philosophical and scientific synthesis, Dr. Yue Liu connects four pivotal insights across epistemology, history, and engineering:

1. ANYONE CAN BECOME A THINKER—IF YOU BREAK CONSENSUS:
People celebrate Karl Popper and great thinkers without knowing WHY they became great. Every true thinker in their own era was a minority—never mainstream. The cleverest people rush to flatter power and chase academic fashion; genuine thinkers are often dismissed as the "slowest" or most stubborn, simply because they refuse to obey consensus. Once your mind escapes consensus shackles, original ideas pour out naturally. Anyone—including YOU—can become a thinker.

2. THE KOREAN PALACE PARABLE ("HAS THE WORLD EVER TRULY UNDERSTOOD DEMOCRACY AND FREEDOM?"):
Tourists pack Korea's royal palaces believing they love history. Yet almost everyone inside those halls fantasizes about being the ancient emperor—when in reality they would not even qualify as a palace attendant, and the "history" they recite is merely the consensus script handed down by mainstream academia.

3. GARBAGE PAPERS CAUSE GREATER HARM THAN OUTRIGHT DATA FRAUD:
Fraud shocks people visibly, while GARBAGE PAPERS cause colossal, INVISIBLE harm—you do not even know you are being harmed. In microwave absorption, genuine progress depends on designing materials from WAVE INTERFERENCE physics. Yet waves of glossy garbage papers ("Pretty Pictures, Shallow Theory") misdirect billions in funding into mythical material-structure cartoons.

4. TRUE THEORY BUILT AI, CHIPS & DRONES — JOURNAL GARBAGE IS NOT THEORY:
Many cynics claim "theory is useless" because academic journals churn out thousands of useless papers and Impedance Matching Theory ruled for 50+ years without yielding a single material design rule. That misses the root cause!
- Without Newton's era foundational theories, humanity would still be stuck in medieval alchemy.
- Without circuit theory and transmission-line theory, there is NO automatic control.
- Without Boolean / logical algebra (0 and 1 logic), there are NO integrated circuits—no AI, no microchips, no drones!
True theory earns its place in TEXTBOOKS. What modern journals publish is overwhelmingly garbage—false notions like Impedance Matching Theory that have ZERO qualification to enter textbooks!

TIMESTAMPS:
00:00 - Scene 1: Prologue — Why Great Thinkers (Like Popper) Were Always Minorities
02:15 - Scene 2: The Korean Palace Parable & the Illusion of Consensus History
04:20 - Scene 3: Why Garbage Papers Inflict Far Worse Invisible Harm Than Data Fraud
06:45 - Scene 4: "Theory Is Useless"? How True Theory Built AI, Microchips & Drones
09:20 - Scene 5: Textbook Theory vs. Journal Garbage (Why Impedance Matching Never Belongs in Textbooks)
11:15 - Scene 6: Epilogue — Break Consensus and Reclaim Real Theory

Key References Cited:
- Liu, Yue, The Primacy of Theoretical Foundations: Why Textbooks and Monographs Matter more than Journal Literature in Scientific Progress (Sept 9, 2025). SSRN: https://ssrn.com/abstract=5465615 | http://dx.doi.org/10.2139/ssrn.5465615
- Liu, Yue, Theoretical Primacy in Scientific Inquiry: A Critique of the Empirical Orthodoxy in Modern Research (Aug 5, 2025). SSRN: https://ssrn.com/abstract=5379953 | http://dx.doi.org/10.2139/ssrn.5379953
- Pretty Pictures, Shallow Theory: How Glossy Flagship Cartoons Mislead Microwave Absorption Science
- Has the World Ever Truly Understood Democracy and Freedom?
- Academic Critique Hub: https://github.com/academic-critique/hub

#TheoreticalPrimacy #BreakConsensus #KarlPopper #TextbooksMatter #CargoCultScience #WaveMechanics #EngineeringPhysics`;

  const spokenScriptText = `[Scene 1: Prologue — What Really Makes a Thinker Great?]
Many people admire Karl Popper and other great thinkers in human history. Yet very few stop to ask a simple question: WHY did those people become great thinkers in the first place?
Here is the uncomfortable truth: in his or her own era, EVERY genuine thinker was a minority—NEVER part of mainstream thought! What turned them into thinkers was NOT higher IQ scores or institutional awards. It was a single decisive act: they dared to break free from the shackles of mainstream consensus!
Think about what happens the moment your mind refuses to stay inside consensus cages: new ideas begin to emerge one after another, naturally and relentlessly!
In fact, great thinkers are rarely the "cleverest" people in society. Why? Because the "cleverest" people all rush off to flatter authority, chase hot grants, and parrot whatever the establishment rewards! The ones who become genuine thinkers are often the supposedly "slowest," most stubborn people—the ones too honest to pretend an emperor has clothes!
That means ANYONE can become a thinker—including YOU watching right now—the moment you summon the courage to shatter the chains of consensus!

[Scene 2: The Korean Palace Parable — Consensus Tourism vs. True Freedom]
If you want to see how consensus captures everyday minds, walk into a royal palace in South Korea.
You will see crowds everywhere—and you might think, "Wow, everyone here truly loves and understands history!"
Wait a minute! Touring a few restored imperial halls does NOT mean you understand history! Watch how most visitors think the second they step inside those gates: regardless of their station in modern life, almost everyone immediately imagines themselves as the ancient EMPEROR!
They never pause to realize that if they actually lived in that dynasty, they wouldn't even qualify to be a lowly palace attendant! And the "history" they proudly recite inside those walls is nothing more than the consensus script spoon-fed to them by today's mainstream establishment!
As we asked in *"Has the World Ever Truly Understood Democracy and Freedom?"*—mistaking consensus choreography for independent thought leaves human cognition tragically impoverished!

[Scene 3: Why Garbage Papers Inflict Far Greater Harm Than Data Fraud]
Now bring that same insight into modern science.
Most people believe outright data fraud—fabricated numbers or doctored images—causes far worse harm than ordinary "garbage papers."
They are completely wrong! In reality, GARBAGE PAPERS cause the greatest destruction of all! Why? Because their volume is astronomical, and their damage is INVISIBLE—you do not even realize you are being harmed!
Take microwave absorption research as a textbook exhibit. The true, productive scientific path is understanding wave-interference absorption so engineers can design films and materials that actually meet real-world performance specs.
Instead, as documented in *"Pretty Pictures, Shallow Theory,"* tens of thousands of flagship garbage papers dazzle readers with hollow spheres and bionic cartoons—fooling the entire field into blaming film interference peaks on imaginary material structures! Massive public research grants are poured year after year into chasing ghosts—and nobody inside the consensus even sees the wound!

[Scene 4: Answering "Theory Is Useless" — What Actually Built AI, Microchips & Drones]
Because modern journals are buried under such garbage, a dangerous cynicism has spread across engineers and the public: people say, *"Theory is useless!"*
Look at their reasoning: academic journals publish millions of "theoretical" papers that cannot guide a single real-world engineering project! For over fifty years, Impedance Matching Theory ruled microwave absorption without yielding ONE useful material design rule—it was useful only for printing papers!
So critics conclude: forget theory! Stick to trial-and-error!
Hold on—that diagnosis misses the root cause completely!
Can you honestly look at modern civilization and say theory is useless?!
Every pillar of modern technology—artificial intelligence, semiconductor microchips, autonomous drones—stands directly on foundational theories established since Newton's era! Without Newton-era foundational physics and mathematics, humanity would still be stuck in medieval alchemy, blindly mixing powders!
Without circuit theory and transmission-line theory, there would be NO modern automatic control! Without Boolean logical algebra—without understanding pure zero-and-one logic—there would be NO integrated circuits, NO microchips, NO AI, and NO drones!

[Scene 5: Textbook Theory vs. Journal Garbage]
So why does modern academic "theory" feel useless while Newton-era theory transformed the planet?!
The answer is crystal clear:
The theories established from Newton's era onward are humanity's crowning achievements—because they are TRUE, they earned their place in **TEXTBOOKS**!
By contrast, what modern academic journals churn out and label "theory" is NOT theory at all! Overwhelmingly, modern journal literature is **garbage**! Erroneous models like Impedance Matching Theory have ZERO scientific validity and ZERO qualification to ever enter a serious textbook!
Only **CORRECT theory** illuminates experiment and guides real engineering! **WRONG theory**—like Impedance Matching Theory—does nothing except misdirect minds, waste billions in funding, and squander human talent!
As argued in *"The Primacy of Theoretical Foundations"* and *"Theoretical Primacy in Scientific Inquiry,"* textbooks and monographs preserving rigorous first-principles theory matter infinitely more to scientific progress than an ocean of trendy journal literature!

[Scene 6: Epilogue — Break Consensus and Reclaim Real Theory]
Do not confuse modern journal garbage with real scientific theory—and do not confuse consensus obedience with real thinking.
Test every equation by logic, defend true textbook foundations, and never fear standing in the minority. Because every genuine breakthrough begins the moment you refuse to worship consensus.
Thank you for watching.`;

  const pillars = [
    {
      title: "1. What Makes a Thinker (Popper & Anyone Including You)",
      detail: "Every great thinker was a non-mainstream minority in their own era. The cleverest chase power and fashion; thinkers break consensus shackles—unleashing an endless stream of original ideas."
    },
    {
      title: "2. The Korean Palace Parable & Consensus Illusions",
      detail: "Crowding royal halls does not equal knowing history. Visitors fantasize about being emperors while repeating mainstream-fed scripts—echoing 'Has the World Ever Truly Understood Democracy and Freedom?'."
    },
    {
      title: "3. Invisible Harm of Garbage Papers > Data Fraud",
      detail: "Data fraud is visible; garbage papers inflict colossal, invisible harm by steering vast research funding into false cartoons instead of wave-interference material design."
    },
    {
      title: "4. True Textbook Theory vs. Journal Garbage",
      detail: "Newtonian foundations, circuit/transmission-line theory, and Boolean 0/1 algebra built AI, chips, and drones. Journal garbage like Impedance Matching Theory has zero right to enter textbooks."
    }
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="breaking-consensus-and-true-theory-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HD &bull; Breaking Consensus &amp; True Theory
          </span>
          <span className="bg-indigo-100 text-indigo-900 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200">
            Textbooks &gt; Journal Garbage &bull; Why True Theory Built AI &amp; Chips
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Breaking Consensus, Garbage Harm, and Why True Theory Built AI, Chips &amp; Drones (While Journal &ldquo;Theories&rdquo; Fail)
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Why anyone who defies consensus can become a thinker like Popper, the Korean palace illusion of history and freedom, why invisible garbage papers out-damage outright fraud, and why textbook Newtonian/circuit/Boolean theory—not journal garbage—powers modern technology.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; SSRN Theoretical Primacy Archives
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-hd")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-hd" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-hd" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-hd")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-hd" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-hd" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "All Copied!" : "Copy Full Package"}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================== */}
      {/* PART I: FOUR CORE THESES & TEXTBOOK VS JOURNAL DISTINCTION                 */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Lightbulb className="w-6 h-6 text-indigo-700" />
          <h2>Part I: Consensus, Invisible Garbage Harm &amp; The Primacy of True Theory</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {pillars.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
              <h3 className="font-sans font-bold text-slate-950 text-sm">{item.title}</h3>
              <p className="text-xs md:text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-50/80 border border-indigo-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-indigo-950 text-base flex items-center gap-2">
            <Cpu className="w-4 h-4 text-indigo-700 shrink-0" />
            Why &ldquo;Theory Is Useless&rdquo; Misses the Root Cause
          </h3>
          <p className="text-sm text-slate-800">
            Without Newton-era foundational physics, humanity would still be trapped in <strong>medieval alchemy</strong>. Without <strong>circuit theory</strong> and <strong>transmission-line theory</strong>, automatic control could not exist. Without <strong>Boolean logical algebra</strong> (0 and 1 logic), there would be no integrated circuits, no microchips, no AI, and no drones. Those real theories belong in <strong>textbooks</strong>. Modern journals mostly print <strong>garbage</strong>—wrong constructs like Impedance Matching Theory that waste funding and have no right to enter any textbook.
          </p>
        </div>

        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl border border-slate-700 space-y-2">
          <div className="font-sans font-bold text-amber-300 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>Primary Theoretical Citations (SSRN)</span>
          </div>
          <ul className="text-xs font-mono text-slate-200 space-y-1.5">
            <li>
              &bull; Liu, Yue, <em>The Primacy of Theoretical Foundations: Why Textbooks and Monographs Matter more than Journal Literature in Scientific Progress</em> (September 09, 2025). SSRN: https://ssrn.com/abstract=5465615 | http://dx.doi.org/10.2139/ssrn.5465615
            </li>
            <li>
              &bull; Liu, Yue, <em>Theoretical Primacy in Scientific Inquiry: A Critique of the Empirical Orthodoxy in Modern Research</em> (August 05, 2025). SSRN: https://ssrn.com/abstract=5379953 | http://dx.doi.org/10.2139/ssrn.5379953
            </li>
          </ul>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 6-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-rose-700" />
            <h2>Part II: Complete 6-Scene Digital Avatar Broadcast Script (~12.5 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-hd-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-hd-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-hd-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
          </button>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-5 font-serif text-sm leading-relaxed whitespace-pre-wrap border border-slate-700 max-h-[540px] overflow-y-auto">
          {spokenScriptText}
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART III: 100% YOUTUBE-SAFE DESCRIPTION                                    */}
      {/* ========================================================================== */}
      <section className="space-y-4 font-sans">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <FileText className="w-6 h-6 text-rose-700" />
            <h2>Part III: 100% YouTube-Safe Description (Zero &lt; or &gt; Characters)</h2>
          </div>
          <button
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-hd-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-hd-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-hd-bottom" ? "Copied!" : "Copy Clean Description"}
          </button>
        </div>
        <p className="text-xs text-slate-500">
          Zero angle brackets (&lt; or &gt;) so YouTube Studio accepts it cleanly without validation errors.
        </p>
        <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 border border-slate-700">
          {youtubeSafeDescription}
        </pre>
      </section>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          Breaking Consensus &amp; True Textbook Theory &bull; Essay HD &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Popper &amp; Minority Thought
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Invisible Garbage Harm
          </span>
          <span className="bg-indigo-100 text-indigo-900 px-2.5 py-1 rounded-md font-semibold">
            Textbooks &gt; Journals
          </span>
        </div>
      </div>
    </article>
  );
}
