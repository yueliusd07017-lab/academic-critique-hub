import React, { useState } from "react";
import { ShieldAlert, Copy, Check, MessageSquareOff, BookOpen, Video, FileText, Flame, Sparkles } from "lucide-react";

export default function SilenceInScienceIsCargoCultScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("silence-in-science-cargo-cult-article-text");
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

  const youtubeSafeDescription = `Title: "Not Responding" Works on Trolls—In Science, Refusing Public Challenges Is Being a Troll
中文标题：对于流氓可以不回应，但是在科学里不回应就是耍流氓（Feynman's Cargo Cult Science & Refuting Xiaowei Parts 5 & 6）

Social media psychology videos celebrate "not responding" as ultimate maturity: read-ignore your ex, ignore snide coworkers, and guard your peace. In interpersonal drama, silence sets healthy boundaries.

IN SCIENCE, HOWEVER, REFUSING TO ANSWER PUBLIC CHALLENGES IS RICHARD FEYNMAN'S EXACT DEFINITION OF CARGO CULT SCIENCE (PSEUDOSCIENCE).

In this sharp dissection answering Xiaowei (WeChat AI Self-Q&A Parts 5 & 6), Dr. Yue Liu exposes the three mainstream excuses used to justify academic silence:

1. EXCUSE ONE — "PUBLIC DEBATE HAS LOW ROI":
Mainstream claim: "Checking mathematical derivations, experimental conditions, and applicability ranges line by line has poor ROI for researchers doing everyday material design."
Reality: When the guiding theory itself is WRONG, refusing to investigate where it is wrong and calling foundational verification "low ROI work" is textbook Cargo Cult Science.

2. EXCUSE TWO — "NOT WORTHY OF PUBLIC RESPONSE":
Mainstream claim: "Scholars do not view this as a new controversy worthy of public response, rather than organized suppression."
Reality: When Impedance Matching Theory IS a false theory, dismissing its refutation as "unworthy of response" exposes a fatal truth—mainstream scientists possess such low theoretical competence that they literally cannot tell right physics from wrong physics.

3. EXCUSE THREE — "INTERFERENCE IS ALREADY IN TRANSMISSION-LINE MODELS":
Mainstream claim: "Interference, standing waves, and thickness effects are already inside classical electromagnetism and transmission-line theory; input impedance depends on thickness, frequency, and boundary conditions."
Reality: Even AFTER the errors of Impedance Matching Theory are laid out explicitly, mainstream scientists still cannot understand Wave Mechanics Theory and still do not know where Impedance Matching went wrong—proving the Theoretical Poverty of Modern Academia (SSRN 5463155).

TIMESTAMPS:
00:00 - Scene 1: Prologue — Why "Not Responding" Works in Life, But Proves Pseudoscience in Science
02:20 - Scene 2: Excuse #1 ("Low ROI") — Textbook Cargo Cult Science
04:30 - Scene 3: Excuse #2 ("Not Worth Responding") — Unable to Distinguish Truth From Error
06:45 - Scene 4: Excuse #3 ("Already in Transmission Lines") — Theoretical Poverty Exposed
09:20 - Scene 5: Pop-Psychology Silence vs. Feynman's Scientific Integrity
11:05 - Scene 6: Epilogue — Real Scientists Answer; Cargo Cult Priests Stay Silent

Key References Cited:
- Liu, Yue, The Theoretical Poverty of Modern Academia: Evidence of Widespread Intellectual Decline in Contemporary Scientific Research (Sept 5, 2025). SSRN: https://ssrn.com/abstract=5463155 | http://dx.doi.org/10.2139/ssrn.5463155
- Answering Xiaowei (WeChat AI) Self-Q&A (Parts 5 & 6)
- Richard Feynman, "Cargo Cult Science" (Caltech Commencement Address, 1974)
- Academic Critique Hub: https://github.com/academic-critique/hub

#CargoCultScience #RichardFeynman #AcademicSilence #TheoreticalPoverty #WaveMechanics #PeerReviewCrisis`;

  const spokenScriptText = `[Scene 1: Prologue — Why "Not Responding" Works in Life, But Proves Pseudoscience in Science]
Open YouTube or short-video platforms today and you will see millions of views on relationship psychology videos with titles like: *"Not Responding Is the Highest-Level Maturity!"*
Wait—let us admit what those videos get right! When an ex sends a toxic message, when a petty colleague gossips in a group chat, or when a relative crosses your personal boundary, smiling calmly and refusing to respond IS wisdom! Protecting your peace from emotional trolls is healthy life boundary-setting!
**NOW WATCH WHAT HAPPENS WHEN MAINSTREAM SCIENTISTS IMPORT THAT POP-PSYCHOLOGY TRICK INTO SCIENCE!**
In interpersonal drama, strategic silence protects your mood.
In science, under **Richard Feynman's explicit definition**, **refusing to respond to valid, published public challenges is the unmistakable hallmark of Cargo Cult Science—pseudoscience!**
In everyday life, ignoring a troll sets a healthy boundary; in science, refusing to answer a public challenge IS being a troll! Science has zero right to treat mathematical refutations like a nagging ex-boyfriend and hit "read and ignore"!

[Scene 2: Excuse #1 — "Public Debate Has Low ROI"]
Look straight at the defenses recited by Xiaowei—the WeChat AI reflecting mainstream consensus—in Parts 5 and 6 of its self-Q&A.
Here is Excuse Number One:
*"Public debate has low ROI: an effective response requires checking mathematical derivations, experimental conditions, and applicability ranges item by item. For researchers doing everyday material design, the input-output ratio is simply not worth it."*
Wait—read that excuse again!
Your entire discipline's guiding theory is **WRONG**! Twenty-three thousand papers are misinterpreting reflection loss! And your defense for never checking the math is that verifying whether your foundational theory is right or wrong has **"LOW RETURN ON INVESTMENT"**?!
Imagine civil engineers refusing to check whether their bridge-load formula has a fatal sign error because checking the calculus "has low ROI for everyday bridge painters"!
That single excuse is Feynman's Cargo Cult Science caught red-handed!

[Scene 3: Excuse #2 — "Mainstream Scholars View It as Unworthy of Public Response"]
Now look at Excuse Number Two offered in defense of mainstream silence:
*"Mainstream scholars simply do not regard this as a new controversy worthy of public response, rather than carrying out organized suppression."*
Think carefully about the logic of that statement!
Impedance Matching Theory IS mathematically false—every derivation in Wave Mechanics Theory proves it rigorously. When a field's foundational theory is WRONG, declaring that exposing its error is **"not worthy of public response"** leaves only two possibilities:
Either the mainstream cognitive consensus is completely wrong, OR **mainstream scientists' theoretical competence has sunk so low that they literally CANNOT distinguish a correct theory from a wrong theory!**
In daily life, you ignore an argument because it is beneath you. In academia, you ignore a mathematical refutation because you have neither the honesty to concede nor the competence to refute it!

[Scene 4: Excuse #3 — "Interference Is Already Inside Classical Transmission-Line Models"]
Now look at Excuse Number Three—the most revealing confession of all:
*"The mainstream framework can already explain these phenomena: interference, standing waves, and thickness effects are already contained within classical electromagnetic theory and transmission-line models. Input impedance itself also depends on thickness, frequency, and boundary conditions."*
Pause and marvel at what that excuse actually proves!
Yes—classical transmission-line equations always contained wave interference! That is precisely WHY we derived **Wave Mechanics Theory** directly from transmission-line theory!
The scandal is that mainstream Impedance Matching Theory **completely mangled** transmission-line physics—equating Z-in equals Z-zero with interface matching, confusing the film with the material, and misinterpreting r-one and r-two wave interference!
Saying "interference was already in Maxwell and transmission lines" AFTER we explicitly pointed out how Impedance Matching violates them proves ONE thing only: **even when the exact errors of Impedance Matching Theory are handed to them on a plate, mainstream scientists STILL do not understand Wave Mechanics Theory, and STILL have no idea where Impedance Matching went wrong!**
That is not "already solved." That is textbook **Theoretical Poverty**—documented rigorously in *"The Theoretical Poverty of Modern Academia"*!

[Scene 5: Social-Drama Silence vs. Feynman's Scientific Duty]
So compare the two worlds side by side!
In social-media psychology: "Not responding is confidence—when someone challenges you, just smile politely and ignore them."
In Feynman's science: Scientific integrity means leaning over backward to examine EVERY published flaw, EVERY counter-derivation, EVERY condition under which your cherished consensus might be wrong!
When an academic establishment adopts the "read-and-ignore" strategy of social-media ego defense—calling foundational verification "low ROI" while continuing to spend billions on broken theories—it stops being science and becomes Cargo Cult ritual!

[Scene 6: Epilogue — Truth Does Not Fear Debate]
True confidence in science NEVER hides behind arrogant silence. It steps into the arena, checks every equation line by line, and admits errors the moment logic demands it.
Silence can silence a noisy chat group—but in science, silence only confesses bankruptcy. Thank you for watching.`;

  const threeExcuses = [
    {
      excuse: "Excuse 1: 'Checking derivations & conditions has low ROI for everyday material design.'",
      diagnosis: "Text-book Feynman Cargo Cult Science: When the guiding theory itself is false, treating foundational truth-verification as 'low ROI work' prioritizes paper assembly-lines over reality."
    },
    {
      excuse: "Excuse 2: 'Mainstream scholars view this as unworthy of public response, not suppression.'",
      diagnosis: "Theoretical Incompetence Exposed: Dismissing mathematical refutation of a false theory proves mainstream scholars cannot tell true physics from false physics."
    },
    {
      excuse: "Excuse 3: 'Interference, standing waves & thickness effects are already in transmission-line models.'",
      diagnosis: "Symptom of Theoretical Poverty (SSRN 5463155): Even after Impedance Matching's exact errors are shown, mainstream scholars fail to grasp Wave Mechanics or locate where Impedance Matching fails."
    }
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="silence-in-science-cargo-cult-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HG &bull; Answering Xiaowei (Parts 5 &amp; 6)
          </span>
          <span className="bg-rose-100 text-rose-900 text-xs font-semibold px-3 py-1 rounded-full border border-rose-200">
            Feynman&apos;s Criterion &bull; Why Academic Silence Is Cargo Cult Science
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          &ldquo;Not Responding&rdquo; Works on Trolls—In Science, Refusing Public Challenges Is Being a Troll
        </h1>
        <p className="text-sm font-bold text-rose-800 mt-2 font-sans">
          对于流氓可以不回应，但是在科学里不回应就是耍流氓
        </p>
        <p className="text-sm md:text-base text-slate-600 mt-2 font-sans italic">
          Why importing pop-psychology &ldquo;strategic silence&rdquo; into physics destroys scientific integrity: dismantling Xiaowei&apos;s three excuses (&ldquo;low ROI,&rdquo; &ldquo;unworthy of response,&rdquo; &ldquo;already in transmission-line theory&rdquo;) as Cargo Cult Science and symptoms of Theoretical Poverty (SSRN 5463155).
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Feynman Epistemology &amp; Xiaowei Audit
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-hg")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-hg" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-hg" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-hg")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-hg" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-hg" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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
      {/* PART I: SILENCE IN LIFE VS. SILENCE IN SCIENCE                             */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <MessageSquareOff className="w-6 h-6 text-rose-700" />
          <h2>Part I: Pop-Psychology Silence vs. Feynman&apos;s Cargo Cult Criterion</h2>
        </div>

        <div className="bg-rose-50/75 border border-rose-200 p-5 rounded-xl space-y-2">
          <h3 className="font-sans font-bold text-rose-950 text-base flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-700 shrink-0" />
            Boundary-Setting in Everyday Life vs. Pseudoscience in Academia
          </h3>
          <p className="text-sm text-slate-800">
            Viral psychology videos advise &ldquo;not responding&rdquo; to toxic exes or petty coworkers as poised boundary-setting. In science, however, Richard Feynman established the exact opposite rule: <strong>refusing to answer public theoretical critiques and hiding behind silence is the essence of Cargo Cult Science.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {threeExcuses.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-sans font-bold text-slate-950 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-700 shrink-0" />
                <span>{item.excuse}</span>
              </h4>
              <p className="text-xs md:text-sm text-slate-700">{item.diagnosis}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl border border-slate-700 space-y-2">
          <div className="font-sans font-bold text-amber-300 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>Primary Citation on Theoretical Poverty</span>
          </div>
          <p className="text-xs font-mono text-slate-200">
            Liu, Yue, <em>The Theoretical Poverty of Modern Academia: Evidence of Widespread Intellectual Decline in Contemporary Scientific Research</em> (September 05, 2025). SSRN: https://ssrn.com/abstract=5463155 | http://dx.doi.org/10.2139/ssrn.5463155
          </p>
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
            onClick={() => handleCopyText(spokenScriptText, "script-hg-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-hg-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-hg-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
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
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-hg-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-hg-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-hg-bottom" ? "Copied!" : "Copy Clean Description"}
          </button>
        </div>
        <p className="text-xs text-slate-500">
          Zero angle brackets (&lt; or &gt;) and under 5,000 characters so YouTube Studio accepts it cleanly without validation errors.
        </p>
        <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 border border-slate-700">
          {youtubeSafeDescription}
        </pre>
      </section>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          Academic Silence Is Cargo Cult Science &bull; Essay HG &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Feynman&apos;s Criterion
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Xiaowei Parts 5 &amp; 6
          </span>
          <span className="bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md font-semibold">
            Theoretical Poverty
          </span>
        </div>
      </div>
    </article>
  );
}
