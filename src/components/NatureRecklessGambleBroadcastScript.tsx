import React, { useState } from "react";
import { Video, Copy, Check, Play, Globe, ShieldAlert, AlertTriangle, Layers, Monitor, Sparkles } from "lucide-react";

export default function NatureRecklessGambleBroadcastScript() {
  const [copied, setCopied] = useState(false);

  const scriptText = `Title: Why Is It Nature That Has Corrupted the Academic Environment? 
Sub-title: The Scandal of Rehabilitating Sanctioned Fraudsters & The Destruction of Scientific Ecology
Presenter: AI Avatar / Senior Scientific Whistleblower
Format: Professional Digital Human Video / Full-Screen Scrolling Teleprompter (16:9 / 9:16)
Estimated Duration: 5 - 6 minutes

[00:00 - 00:35] SCENE 1: THE COLD HOOK & THE SCANDAL
[Visual: High-impact dark background. Red warning badge: "ACADEMIC WHISTLEBLOWING". Flashing headlines of Nature & Nature Communications.]
[Teleprompter / Avatar]:
"Why has Nature become the greatest corrupter of modern scientific integrity?
In any civilization governed by ethical principles, when a powerful researcher is formally investigated, convicted of scientific fraud, and sanctioned for severe research misconduct, they face permanent professional disgrace.
Yet today, before the ink on official misconduct verdicts has even dried, Nature and its sub-journals have rushed to publish new papers from these very same sanctioned powerbrokers. Not once, but twice.
What is Nature trying to prove? Where does Nature get the nerve to stand behind convicted scientific fraudsters while the entire global scientific community watches in stunned silence?"

[00:35 - 01:25] SCENE 2: THE ANATOMY OF TOTAL IMMUNITY & RESTORED POWER
[Visual: Diagram showing the academic power cycle: Top Journal Publication -> Peer Reviewer -> Grant Panelist -> Institutional Retaliation.]
[Teleprompter / Avatar]:
"Let us look at the terrifying real-world consequence of Nature's reckless gamble.
When a sanctioned fraudster is rehabilitated by Nature with a fresh publication, what actually happens?
Immediately, their academic power is restored.
Tomorrow, that very same fraudster sits on grant review committees.
Tomorrow, that very same fraudster is invited by prestigious journals to serve as an anonymous peer reviewer.
Think about the nightmare this creates for the academic ecosystem!
If you are an honest scientist, if you are a graduate student or an early-career researcher who dares to expose errors, who will review your next grant proposal? The fraudster.
Who will review your next journal submission? The fraudster.
When an error-detector knows that their research funding and future career will fall directly into the hands of the very person they criticized, who will ever dare to whistleblow again?"

[01:25 - 02:15] SCENE 3: THE ASYMMETRIC WARFARE AGAINST ERROR-DETECTORS
[Visual: Quote on screen from Nature (2020) by Simine Vazire: "His adviser told him that publishing the criticism had crossed a line, and he should never do it again."]
[Citation overlay: S. Vazire, Nature 577 (2020) 9 & Dr. Yue Liu, SSRN: 5514918]
[Teleprompter / Avatar]:
"This is not a hypothetical concern. It is the grim reality documented by Simine Vazire in Nature itself, in her famous editorial 'A toast to the error detectors':
'His adviser told him that publishing the criticism had crossed a line, and he should never do it again.'
Read Dr. Yue Liu’s groundbreaking treatise, 'Confronting the Fear: Understanding and Overcoming Retaliation in Academic Criticism' (SSRN: 5514918).
The retaliation against whistleblowers is completely asymmetric.
The honest error-detector risks loss of employment, blocked grants, and blacklisting.
Meanwhile, the powerful fraudster who fabricates data receives million-dollar grants, maintains academic titles, and gets rolled out onto the red carpet of Nature’s front pages!
Is this scientific peer review? Or is this an organized crime cartel protecting its feudal lords?"

[02:15 - 03:05] SCENE 4: THE HARVARD CONTRAST & THE FAILURE OF REPUTATIONAL RUIN
[Visual: New York Times headline: "Harvard calls for retraction of dozens of studies by noted cardiologist. Experts were just too timid to take a stand."]
[Teleprompter / Avatar]:
"In 2018, when Harvard University called for the retraction of 31 papers by a noted cardiologist, the New York Times asked a haunting question:
How could a questionable line of research persist for so long?
The answer was devastating: 'Experts were just too timid to take a stand.'
Why were experts timid? Because when academic authorities commit fraud, institutions protect them!
Have you ever seen an ordinary junior researcher caught falsifying data ever get published in Nature again? Never! They are expelled, disgraced, and erased.
Why then, when the offender is a senior laboratory director with millions in state funding and extensive academic networks, does Nature eagerly open its doors to rehabilitate them?
By laundering the reputation of sanctioned fraudsters, Nature is sending a toxic message to every laboratory on Earth:
If you are small, follow the rules; if you are powerful, fraud carries zero consequences."

[03:05 - 04:00] SCENE 5: THE 50-YEAR CARGO CULT & THE CRIME OF CITATION EVASION
[Visual: Graphics showing wave reflection on metal-backed film. 1+1=2. Citing Dr. Yue Liu's Wave Mechanics Series.]
[Teleprompter / Avatar]:
"This institutional corruption is not an isolated incident—it is the direct fruit of a rotten culture where journals prioritize commercial impact factors over physical truth.
For half a century, mainstream journals allowed the 'impedance matching' fallacy to dominate microwave absorption—a theory that violates freshman undergraduate wave mechanics and can be dismantled with 1 + 1 = 2 logic.
And when independent pioneers like Dr. Yue Liu finally published the first-principles wave cancellation theory in 2022, what did the academic cartel do?
They practiced the disgraceful crime of 'Citation Evasion'—refusing to cite the original whistleblower, while quietly lifting the theory and publishing it in 2025 as their own 'new quality criteria'!
An academic cartel that steals ideas from whistleblowers while opening its arms to convicted fraudsters has ceased to be a temple of science. It has become a commercial paper mill."

[04:00 - 05:00] SCENE 6: CALL TO ACTION & HISTORICAL VERDICT
[Visual: Text overlay: "History Will Judge Nature's Reckless Gamble. Stand with True Science."]
[Teleprompter / Avatar]:
"History will not judge scientists by the impact factor of the journals they published in.
History will judge whether you stood for empirical truth or knelt before corrupt power.
Nature may possess billions in corporate backing, and academic cartels may enforce cowardly silence.
But nature's laws do not obey editorial boards.
To every young scholar, to every honest researcher:
Do not outsource your intellectual sovereignty to Nature or any commercial gatekeeper.
Demand personal accountability.
Demand that fraudsters remain permanently stripped of their peer review and grant evaluation powers.
Read the unabridged academic critique treatises in the Academic Critique Hub (Essays EQ, ER, FK, FM, GF, and GG).
Support truth. Expose corruption. Stand firm with first-principles science."`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(scriptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="nature-reckless-gamble-broadcast-script-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-rose-100 text-rose-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-rose-300 flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-rose-700" />
            Essay GH &bull; YouTube / TikTok Broadcast Script
          </span>
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
            Digital Human (Avatar) &bull; Teleprompter &bull; Whistleblower
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Broadcast Script: Why Is It Nature That Has Corrupted the Academic Environment?
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Complete, production-ready English video script designed for AI digital human generation (TikTok Symphony, HeyGen, CapCut) or full-screen teleprompter reading.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-3 border-t border-slate-100 font-sans text-xs text-slate-500">
          <div>Author: Dr. Yue Liu (刘跃) &bull; Academic Critique Hub</div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold px-4 py-2 rounded-lg transition shadow-xs cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
            {copied ? "Script Copied!" : "Copy Full Script for TikTok Symphony / Avatar"}
          </button>
        </div>
      </div>

      {/* Production Guide Box */}
      <div className="bg-slate-50 border border-slate-300 p-5 rounded-xl mb-8 font-sans text-sm space-y-3">
        <div className="font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-600" />
          Recommended Free & High-Quality Production Tools:
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1">
              <Monitor className="w-3.5 h-3.5 text-rose-600" /> TikTok Symphony Studio
            </div>
            <p className="text-slate-600">
              <a href="https://ads.tiktok.com/creative/creativestudio/create" target="_blank" rel="noreferrer" className="text-rose-600 underline font-semibold">
                Symphony Creative Studio
              </a>
              : Free AI digital avatars, multi-language speech, and auto-captions.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-indigo-600" /> CapCut / 剪映 Desktop
            </div>
            <p className="text-slate-600">
              Free built-in AI Voice (ElevenLabs quality), word-by-word highlight subtitles, and bold teleprompter overlays.
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-emerald-600" /> HeyGen / D-ID Free Tier
            </div>
            <p className="text-slate-600">
              Photorealistic digital human avatars in formal scholar suit or broadcast studio setting.
            </p>
          </div>
        </div>
      </div>

      {/* Script Sections */}
      <div className="space-y-8 font-sans text-sm">
        {/* Section 1 */}
        <section className="border border-slate-200 rounded-xl p-5 bg-white space-y-3 shadow-2xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-bold text-rose-900 font-mono text-xs uppercase bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              Scene 1 &bull; 00:00 - 00:35 &bull; The Cold Hook
            </span>
            <span className="text-xs text-slate-400">High Tension &bull; Warning Banners</span>
          </div>
          <div className="text-xs text-slate-500 font-mono italic">
            [Visual: High-impact dark background. Red alert badge: &ldquo;ACADEMIC WHISTLEBLOWING&rdquo;. Flashing headlines of Nature and Nature Communications.]
          </div>
          <p className="text-slate-900 font-serif text-base leading-relaxed pl-3 border-l-2 border-rose-500">
            &ldquo;Why has Nature become the greatest corrupter of modern scientific integrity? In any civilization governed by ethical principles, when a powerful researcher is formally investigated, convicted of scientific fraud, and sanctioned for severe research misconduct, they face permanent professional disgrace. Yet today, before the ink on official misconduct verdicts has even dried, Nature and its sub-journals have rushed to publish new papers from these very same sanctioned powerbrokers. Not once, but twice. What is Nature trying to prove? Where does Nature get the nerve to stand behind convicted scientific fraudsters while the entire global scientific community watches in stunned silence?&rdquo;
          </p>
        </section>

        {/* Section 2 */}
        <section className="border border-slate-200 rounded-xl p-5 bg-white space-y-3 shadow-2xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-bold text-slate-900 font-mono text-xs uppercase bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              Scene 2 &bull; 00:35 - 01:25 &bull; Restored Power Cycle
            </span>
            <span className="text-xs text-slate-400">Academic Feudalism Explained</span>
          </div>
          <div className="text-xs text-slate-500 font-mono italic">
            [Visual: Graphic workflow: Top Journal Publication &rarr; Peer Reviewer Status &rarr; Grant Committee &rarr; Whistleblower Career Death.]
          </div>
          <p className="text-slate-900 font-serif text-base leading-relaxed pl-3 border-l-2 border-amber-500">
            &ldquo;Let us look at the terrifying real-world consequence of Nature&apos;s reckless gamble. When a sanctioned fraudster is rehabilitated by Nature with a fresh publication, what actually happens? Immediately, their academic power is restored. Tomorrow, that very same fraudster sits on grant review committees. Tomorrow, that very same fraudster is invited by prestigious journals to serve as an anonymous peer reviewer. Think about the nightmare this creates for the academic ecosystem! If you are an honest scientist, if you are a graduate student or an early-career researcher who dares to expose errors, who will review your next grant proposal? The fraudster. Who will review your next journal submission? The fraudster. When an error-detector knows that their research funding and future career will fall directly into the hands of the very person they criticized, who will ever dare to whistleblow again?&rdquo;
          </p>
        </section>

        {/* Section 3 */}
        <section className="border border-slate-200 rounded-xl p-5 bg-white space-y-3 shadow-2xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-bold text-rose-900 font-mono text-xs uppercase bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              Scene 3 &bull; 01:25 - 02:15 &bull; Asymmetric Retaliation
            </span>
            <span className="text-xs text-slate-400">Citing Vazire (Nature 2020) &amp; Yue Liu (SSRN 5514918)</span>
          </div>
          <div className="text-xs text-slate-500 font-mono italic">
            [Visual: Full-screen quote card: &ldquo;His adviser told him that publishing the criticism had crossed a line, and he should never do it again.&rdquo; — Nature 2020.]
          </div>
          <p className="text-slate-900 font-serif text-base leading-relaxed pl-3 border-l-2 border-rose-500">
            &ldquo;This is not a hypothetical concern. It is the grim reality documented by Simine Vazire in Nature itself, in her famous editorial &apos;A toast to the error detectors&apos;: &apos;His adviser told him that publishing the criticism had crossed a line, and he should never do it again.&apos; Read Dr. Yue Liu&apos;s groundbreaking treatise, &apos;Confronting the Fear: Understanding and Overcoming Retaliation in Academic Criticism&apos; (SSRN: 5514918). The retaliation against whistleblowers is completely asymmetric. The honest error-detector risks loss of employment, blocked grants, and blacklisting. Meanwhile, the powerful fraudster who fabricates data receives million-dollar grants, maintains academic titles, and gets rolled out onto the red carpet of Nature&apos;s front pages! Is this scientific peer review? Or is this an organized crime cartel protecting its feudal lords?&rdquo;
          </p>
        </section>

        {/* Section 4 */}
        <section className="border border-slate-200 rounded-xl p-5 bg-white space-y-3 shadow-2xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-bold text-slate-900 font-mono text-xs uppercase bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              Scene 4 &bull; 02:15 - 03:05 &bull; The Harvard Contrast
            </span>
            <span className="text-xs text-slate-400">New York Times &bull; Harvard Retractions</span>
          </div>
          <div className="text-xs text-slate-500 font-mono italic">
            [Visual: NYT headline from 2018: &ldquo;Harvard calls for retraction of dozens of studies by noted cardiologist... experts were just too timid to take a stand.&rdquo;]
          </div>
          <p className="text-slate-900 font-serif text-base leading-relaxed pl-3 border-l-2 border-indigo-500">
            &ldquo;In 2018, when Harvard University called for the retraction of 31 papers by a noted cardiologist, the New York Times asked a haunting question: How could a questionable line of research persist for so long? The answer was devastating: &apos;Experts were just too timid to take a stand.&apos; Why were experts timid? Because when academic authorities commit fraud, institutions protect them! Have you ever seen an ordinary junior researcher caught falsifying data ever get published in Nature again? Never! They are expelled, disgraced, and erased. Why then, when the offender is a senior laboratory director with millions in state funding and extensive academic networks, does Nature eagerly open its doors to rehabilitate them? By laundering the reputation of sanctioned fraudsters, Nature is sending a toxic message to every laboratory on Earth: If you are small, follow the rules; if you are powerful, fraud carries zero consequences.&rdquo;
          </p>
        </section>

        {/* Section 5 */}
        <section className="border border-slate-200 rounded-xl p-5 bg-white space-y-3 shadow-2xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-bold text-amber-900 font-mono text-xs uppercase bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Scene 5 &bull; 03:05 - 04:00 &bull; The Cargo Cult &amp; Citation Evasion
            </span>
            <span className="text-xs text-slate-400">50-Year Impedance Matching &bull; Normalized Plagiarism</span>
          </div>
          <div className="text-xs text-slate-500 font-mono italic">
            [Visual: 1+1=2 graphic. Wave mechanics formula. Citations to Yue Liu 2022 vs. Yang et al. AELM 2025.]
          </div>
          <p className="text-slate-900 font-serif text-base leading-relaxed pl-3 border-l-2 border-amber-500">
            &ldquo;This institutional corruption is not an isolated incident—it is the direct fruit of a rotten culture where journals prioritize commercial impact factors over physical truth. For half a century, mainstream journals allowed the &apos;impedance matching&apos; fallacy to dominate microwave absorption—a theory that violates freshman undergraduate wave mechanics and can be dismantled with 1 + 1 = 2 logic. And when independent pioneers like Dr. Yue Liu finally published the first-principles wave cancellation theory in 2022, what did the academic cartel do? They practiced the disgraceful crime of &apos;Citation Evasion&apos;—refusing to cite the original whistleblower, while quietly lifting the theory and publishing it in 2025 as their own &apos;new quality criteria&apos;! An academic cartel that steals ideas from whistleblowers while opening its arms to convicted fraudsters has ceased to be a temple of science. It has become a commercial paper mill.&rdquo;
          </p>
        </section>

        {/* Section 6 */}
        <section className="border border-slate-200 rounded-xl p-5 bg-white space-y-3 shadow-2xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-bold text-rose-900 font-mono text-xs uppercase bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              Scene 6 &bull; 04:00 - 05:00 &bull; The Historical Call to Arms
            </span>
            <span className="text-xs text-slate-400">Moral Verdict &bull; Final Takeaway</span>
          </div>
          <div className="text-xs text-slate-500 font-mono italic">
            [Visual: Full screen title: &ldquo;History Will Judge Nature&apos;s Reckless Gamble. Stand with True Science.&rdquo; Academic Critique Hub URL.]
          </div>
          <p className="text-slate-900 font-serif text-base leading-relaxed pl-3 border-l-2 border-rose-500">
            &ldquo;History will not judge scientists by the impact factor of the journals they published in. History will judge whether you stood for empirical truth or knelt before corrupt power. Nature may possess billions in corporate backing, and academic cartels may enforce cowardly silence. But nature&apos;s laws do not obey editorial boards. To every young scholar, to every honest researcher: Do not outsource your intellectual sovereignty to Nature or any commercial gatekeeper. Demand personal accountability. Demand that fraudsters remain permanently stripped of their peer review and grant evaluation powers. Read the unabridged academic critique treatises in the Academic Critique Hub (Essays EQ, ER, FK, FM, GF, and GG). Support truth. Expose corruption. Stand firm with first-principles science.&rdquo;
          </p>
        </section>
      </div>

      {/* Cross-Link Treatises */}
      <div className="mt-10 pt-6 border-t border-slate-200 font-sans text-xs text-slate-600 space-y-3">
        <div className="font-bold text-slate-900 uppercase tracking-wide">
          Directly Referenced Treatises in the Academic Critique Hub:
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md border border-slate-200 font-mono">
            Essay FM: Why Nature Corrupts Academia
          </span>
          <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md border border-slate-200 font-mono">
            Essay FK: Nature Standing Behind Fraudsters
          </span>
          <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md border border-slate-200 font-mono">
            Essay EQ: Where Does Nature Get the Nerve?
          </span>
          <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md border border-slate-200 font-mono">
            Essay ER: History Will Judge Nature&apos;s Reckless Gamble
          </span>
        </div>
      </div>
    </article>
  );
}
