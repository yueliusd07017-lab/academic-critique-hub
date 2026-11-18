import React, { useState } from "react";
import { ShieldAlert, Copy, Check, Compass, Scale, Video, FileText, Flame, Search } from "lucide-react";

export default function ScienceBrokenBeyondFraudGarbageScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("science-broken-beyond-fraud-garbage-article-text");
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

  const youtubeSafeDescription = `Title: "Is Science Broken?" Beyond Data Fraud: Garbage Papers, Cargo Cult Science & Returning to Newton's Era

Across YouTube and social media, creators are asking the biggest questions of our time:
- Academia is BROKEN! Harvard Fake Cancer Research Scandal Explained
- Is Science Broken? Fraud, Data Tweaking, and the Credibility Crisis
- Is Peer Review Broken? (Especially in Medicine)
- Why Has There Been No Progress in Physics Since 1973?
- Can Science Be Saved?

In this episode, Dr. Yue Liu exposes the critical blind spot shared by nearly all mainstream discussions of the science crisis:

1. GARBAGE PAPERS ARE FAR MORE REPRESENTATIVE THAN DATA FRAUD:
Focusing exclusively on doctored images, p-hacking, or Harvard fake cancer data lets the academic establishment blame "a few rogue cheaters." The real crisis is NOT isolated data fabrication—it is GARBAGE PAPERS: peer-reviewed, statistically clean, flagship-journal articles that contain zero physical insight and produce zero design principles. Garbage papers prove that the ENTIRE mainstream scientific community is practicing pseudoscience—Cargo Cult Science.

2. THE FOUR TRUE SYMPTOMS OF BROKEN SCIENCE:
- Editorial "OUT OF SCOPE" gatekeeping that desk-rejects paradigm-correcting physics without evaluating mathematical truth.
- Scientists inviting journal Editors-in-Chief to teach them what topics to research and how to package stories.
- Researchers degenerating into professional COPYWRITERS ("写手") who stitch raw numbers into "Chang'e Flying to the Moon" and "Calabash Brothers" cartoons.
- An entire field performing Cargo Cult Science—as documented across our trilogy:
  * Why 23,300+ Impedance Matching Papers Yielded ZERO Material Design Laws
  * Pretty Pictures, Shallow Theory: How Glossy Flagship Cartoons Mislead Microwave Absorption Science
  * Copywriters, Not Scientists: The Ironclad Logical Proof That Over 95% of SCI Papers Are Garbage

3. DETECTING PSEUDOSCIENCE FROM LOGIC AND CONCLUSIONS—NOT JUST STATISTICS:
Catching image duplication or statistical anomalies is NOT enough. Even if every raw spectrum and curve is unedited, a paper whose LOGIC and CONCLUSIONS violate physical law—equating Zin with ZM, conflating film interference with standing waves, turning wave superposition into energy addition, or claiming permittivity depends on film thickness—is structurally false pseudoscience. Placing logical validity and theoretical conclusions above statistical headcounts is the only path back to Newton's era.

TIMESTAMPS:
00:00 - Scene 1: Prologue — Why "Harvard Fake Data" & "Peer Review Crisis" Videos Miss the Bigger Crisis
02:10 - Scene 2: Garbage Papers vs. Fraud Papers — Why Garbage Proves the Whole Establishment Practices Pseudoscience
04:30 - Scene 3: Four X-Rays of Broken Science ("Out of Scope," Editor-Guided Topics, Copywriters & Cargo Cult)
07:20 - Scene 4: Why Catching Fraud by Statistics Is Not Enough — Exposing False Papers Through Logic & Conclusions
10:00 - Scene 5: From Physics Stagnation Since 1973 to 23,300+ Papers Yielding Zero Design Laws
11:55 - Scene 6: How Science Returns to Newton's Era (Logic Over Templates & Impact Factors)
13:25 - Scene 7: Epilogue — Can Science Be Saved?

Key References & Trilogy Cited:
- Why 23,300+ Impedance Matching Papers Yielded ZERO Material Design Laws (Akinay 2023 & Yang et al. 2025)
- Pretty Pictures, Shallow Theory: How Glossy Flagship Cartoons Mislead Microwave Absorption Science
- Copywriters, Not Scientists: The Ironclad Logical Proof That Over 95% of SCI Papers Are Garbage
- Liu, Y., Liu, Y., Drew, M. G. B., Ind. Eng. Chem. Res. 2025, 64(7), 3635-3650 (DOI: 10.1021/acs.iecr.4c04544)
- Academic Critique Hub: https://github.com/academic-critique/hub

#IsScienceBroken #CargoCultScience #PeerReviewBroken #TheoreticalPhysics #ScientificPublishing #WaveMechanics #NewtonianScience`;

  const spokenScriptText = `[Scene 1: Prologue — What "Academia Is Broken" Videos Keep Missing]
Right now, the internet is flooded with viral documentaries asking the exact same urgent questions:
"Academia is BROKEN! Harvard Fake Cancer Research Scandal Explained."
"Is Science Broken? Fraud, Data Tweaking, and the Credibility Crisis."
"Is Peer Review Broken?"
"Why Has There Been No Progress in Physics Since 1973?"
"Can Science Be Saved?"
And let us give credit where credit is due: exposing photoshopped microscopy slides and doctored clinical trials is important work.
Yet almost every single one of those videos misses the real disease!
Because if you diagnose why modern science is broken ONLY by hunting for outright data fraud, you hand the establishment the easiest excuse on Earth: "Oh, that was just a handful of unethical cheaters—the rest of our peer-reviewed system is sound!"
Nothing could be further from the truth! To understand why modern science is fundamentally broken, you must look not merely at fake-data papers—you must look at GARBAGE PAPERS!

[Scene 2: Why Garbage Papers Are Far More Representative Than Fraud Papers]
Stop and compare outright data fraud against ordinary, mainstream-approved garbage papers.
A fake-data paper violates the rules of the current game. By contrast, a GARBAGE PAPER follows every single institutional rule! It passes peer review cleanly, sports real instrument measurements, boasts gorgeous 3D cartoons, sits proudly inside Nature, Advanced Functional Materials, or Chemical Engineering Journal—and yet contains ZERO real discovery and produces ZERO scientific progress!
That is why garbage papers are infinitely more representative than fake-data scandals!
A rogue cheat copying a Western blot proves one lab lied. Twenty-three thousand peer-reviewed garbage papers producing zero material design rules prove something far more terrifying:
They prove that the ENTIRE mainstream scientific community is practicing pseudoscience! They prove that modern academia as a whole is performing Richard Feynman's Cargo Cult Science!

[Scene 3: The Four Diagnostic X-Rays of a Broken Scientific Establishment]
Do not judge whether science is broken by looking at isolated Harvard scandals alone. Look directly at the four structural organs of everyday academic life that we have documented across our recent trilogy:
*"Why 23,300+ Impedance Matching Papers Yielded ZERO Material Design Laws,"*
*"Pretty Pictures, Shallow Theory: How Glossy Flagship Cartoons Mislead Microwave Absorption Science,"*
and *"Copywriters, Not Scientists: The Ironclad Logical Proof That Over 95% of SCI Papers Are Garbage."*
Look at what those three investigations reveal:
First, look at journal editorial offices wielding the rubber stamp of **"OUT OF SCOPE."** When first-principles Wave Mechanics papers refute tens of thousands of broken articles, editors do not test the math—they lock the door with "out of scope" because truth violates their pre-set template!
Second, look at "top researchers" inviting journal Editors-in-Chief to lecture scientists on **what topics to research**, what topics to avoid, and how to package fragments into publishable stories!
Third, look at how **researchers have degenerated into copywriters**—spinning "Chang'e Flying to the Moon" and "Calabash Brothers" graphics out of raw measurements instead of interrogating physical law!
And fourth, look at the whole establishment marching in lockstep in **Cargo Cult Science**—celebrating Impact Factors while running away from logic!

[Scene 4: Beyond Statistical Fraud-Hunting — Detecting False Science From Logic & Conclusions]
Here is the methodological revolution science desperately needs right now:
Look at how today's integrity sleuths operate. They hunt for fraud almost exclusively using statistical anomalies, p-value clustering, or pixel-level image forensics!
Just as hunting for fraud only through statistical numbers is hopelessly insufficient, exposing modern broken science requires something far deeper:
Science MUST learn to identify false, pseudoscientific papers directly from their **LOGIC** and their **CONCLUSIONS**!
Think about what that means! Suppose every curve measured on a Vector Network Analyzer in a flagship microwave absorption paper is one hundred percent real, undoctored experimental data.
Yet the authors conclude that input impedance Z-in equals material impedance Z-M; they conclude that film wave-interference peaks are standing waves of incident and reflected beams; they treat wave superposition as simple energy addition; or they claim the material's intrinsic permittivity changes with sample thickness!
Every raw pixel is "genuine"—yet by **logic and physical conclusion**, the paper is fundamentally FALSE! It is Cargo Cult pseudoscience masquerading as empirical truth!
Until academia treats logical and conceptual falsehood in conclusions with the same severity as photoshopped images, garbage pseudoscience will keep dominating flagship journals!

[Scene 5: From Physics Stagnation Since 1973 to 23,300 Empty Papers]
Now you finally understand why physics commentators ask why theoretical physics has stalled since 1973, and why medical peer review keeps collapsing!
When a culture worships experimental headcounts, statistical consensus, glossy illustrations, and "out of scope" editorial conformity while dismissing rigorous logical refutation, fundamental breakthroughs become structurally impossible!
You get exactly what Akinay and co-authors' 2023 bibliometric survey unintentionally confessed: twenty-three thousand three hundred papers over half a century yielding ZERO material design laws—while researchers claiming "everything can be wave-absorbing" keep winning cover art!

[Scene 6: How Science Returns to Newton's Era]
So how do we break the spell? How does science actually return to Newton's era?
Remember what made Newton's era clean and revolutionary:
In Newton's time, there were NO SCI Impact Factors, NO editorial "out of scope" template censorship, NO Editors-in-Chief telling physicists what fashionable topics to write about, and NO copywriters dressing empty experiments in cartoons!
Journals existed for one purpose only: as open arenas where ideas collided on the battlefield of **logic, mathematics, and honest physical conclusions**!
To return to Newton's era, science must judge every paper—and expose every false or pseudoscientific paper—primarily by checking whether its **logic holds** and whether its **conclusions survive first-principles scrutiny**, NOT whether its statistics satisfy a cartel or its cover art dazzles an editor!

[Scene 7: Epilogue — Can Science Be Saved?]
Can science be saved?
Not if we keep treating data fraud as an occasional crime while worshipping ninety-five percent garbage papers as "normal science."
Science can only be saved when we stop tolerating Cargo Cult copywriting, strip journals of pre-set ideological gatekeeping, and restore **logic and theoretical truth** to the throne they held in Newton's day.
Thank you for watching—and for standing with real science.`;

  const fourOrgans = [
    {
      title: "1. Editorial 'Out of Scope' Gatekeeping",
      detail: "Paradigm-correcting theoretical papers are desk-rejected not because their math is flawed, but because they violate the journal's pre-set fashionable template."
    },
    {
      title: "2. Editors Teaching Scientists What to Research",
      detail: "Researchers invite Editors-in-Chief to dictate hot topics and storytelling angles instead of asking Nature what fundamental mysteries demand explanation."
    },
    {
      title: "3. Researchers Degenerated Into Copywriters",
      detail: "Handed raw numbers and images, scientists stitch 'Chang'e' cartoons and rainbow RL plots while conflating Zin/ZM, film/interface, and superposition/energy."
    },
    {
      title: "4. Whole Establishment in Cargo Cult Science",
      detail: "23,300+ impedance-matching papers yielding ZERO design laws prove that garbage—not isolated data cheating—is the true face of modern pseudoscience."
    }
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="science-broken-beyond-fraud-garbage-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HC &bull; Beyond Data Fraud
          </span>
          <span className="bg-rose-100 text-rose-900 text-xs font-semibold px-3 py-1 rounded-full border border-rose-200">
            Garbage Papers &bull; Cargo Cult Science &bull; Returning to Newton&apos;s Era
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          &ldquo;Is Science Broken?&rdquo; Beyond Data Fraud: Garbage Papers, Cargo Cult Science, and Returning to Newton&apos;s Era
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Answering viral &ldquo;Academia is Broken / Harvard Fake Data / Physics Stalled Since 1973 / Can Science Be Saved?&rdquo; critiques: why garbage papers are far more representative than data fraud, why statistical fraud-hunting isn&apos;t enough, and how exposing false logic and conclusions restores Newtonian science.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Synthesis of Trilogy (Essays GZ, HA, HB)
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-hc")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-hc" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-hc" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-hc")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-hc" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-hc" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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
      {/* PART I: DIAGNOSIS & METHODOLOGY TO RETURN TO NEWTON'S ERA                  */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Compass className="w-6 h-6 text-rose-700" />
          <h2>Part I: Why Garbage Papers (Not Just Fraud) Prove Science Is Broken</h2>
        </div>

        <div className="bg-rose-50/70 border border-rose-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-rose-950 text-base flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-700 shrink-0" />
            Garbage Papers Are More Representative Than Fake-Data Scandals
          </h3>
          <p className="text-sm text-slate-800">
            Viral discussions about Harvard fake cancer data, image duplication, and medical peer-review collapse spotlight criminal rule-breakers&mdash;allowing the establishment to dismiss them as isolated bad apples. <strong>Garbage papers</strong>, by contrast, follow every modern publishing rule, pass peer review cleanly, and appear in top flagships with zero physical breakthroughs. They prove the <strong>entire scientific establishment is practicing pseudoscience (Cargo Cult Science)</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {fourOrgans.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1">
              <h4 className="font-sans font-bold text-slate-950 text-sm">{item.title}</h4>
              <p className="text-xs md:text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50/80 border border-amber-300 p-5 rounded-xl space-y-2">
            <h3 className="font-sans font-bold text-amber-950 text-sm flex items-center gap-2">
              <Search className="w-4 h-4 text-amber-700 shrink-0" />
              Beyond Statistical Sleuthing
            </h3>
            <p className="text-xs md:text-sm text-slate-800">
              Catching fabricated science solely via pixel forensics or statistical numbers is <strong>not enough</strong>. Science must identify false, pseudoscientific papers directly from their <strong>internal logic</strong> and <strong>physical conclusions</strong>&mdash;even when every experimental spectrum is genuine.
            </p>
          </div>
          <div className="bg-slate-900 text-slate-100 p-5 rounded-xl border border-slate-700 space-y-2">
            <h3 className="font-sans font-bold text-amber-300 text-sm flex items-center gap-2">
              <Scale className="w-4 h-4 shrink-0" />
              Returning to Newton&apos;s Era
            </h3>
            <p className="text-xs md:text-sm text-slate-200">
              Only by elevating <strong>logical rigor and first-principles conclusions</strong> above statistical conformity, Impact Factors, and &ldquo;out of scope&rdquo; editorial templates can science recover the clean intellectual honesty of Newton&apos;s age.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 7-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-rose-700" />
            <h2>Part II: Complete 7-Scene Digital Avatar Broadcast Script (~14.5 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-hc-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-hc-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-hc-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
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
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-hc-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-hc-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-hc-bottom" ? "Copied!" : "Copy Clean Description"}
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
          Is Science Broken? Beyond Data Fraud &bull; Essay HC &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Garbage &gt; Fraud
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Logic &amp; Conclusions
          </span>
          <span className="bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md font-semibold">
            Return to Newton&apos;s Era
          </span>
        </div>
      </div>
    </article>
  );
}
