import React, { useState } from "react";
import { ShieldAlert, Copy, Check, PenTool, Scale, Video, FileText, Flame, Layers } from "lucide-react";

export default function ResearchersVsCopywritersGarbageProofScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("researchers-vs-copywriters-garbage-article-text");
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

  const youtubeSafeDescription = `Title: Copywriters, Not Scientists: The Ironclad Logical Proof That Over 95% of SCI Papers Are Garbage

When critics state that over 95 percent of modern SCI papers are garbage, mainstream scientists immediately demand "mainstream-approved statistical data." Given the ocean of millions of published papers, auditing every article one by one is an impossible census—and demanding it is a rhetorical shield.

Fortunately, LOGIC is more decisive than brute-force headcounts. In this episode, Dr. Yue Liu synthesizes seven cumulative proofs—and introduces a devastating new structural proof built directly on our audit of glossy flagship-journal cartoons ("Pretty Pictures, Shallow Theory") and Yang et al. (Adv. Electron. Mater. 2025):

1. RESEARCHERS VS. PROFESSIONAL COPYWRITERS:
When handed raw experimental materials (numbers and microscopy images), a genuine RESEARCHER digs into those materials to uncover physical problems and extract deep laws. A COPYWRITER simply arranges and decorates those numbers and glossy 3D cartoons into an eye-catching, publishable story. Modern academia is no longer led by problem-solvers—it has turned into a guild of copywriters.

2. THE DOUBLE INVERSION OF TOPIC SELECTION & "OUT OF SCOPE" GATEKEEPING:
- Authors no longer decide what scientific problem is worth solving; they invite journal Editors-in-Chief to instruct them on which hot topics sell and how to package raw data into a trendy narrative.
- Editors no longer scan submissions to discover genuine breakthroughs; they enforce pre-set templates of what is permissible—summarily rejecting inconvenient, paradigm-correcting work as "out of scope."
- When manuscript selection checks conformity to pre-set templates instead of scientific value, an academic system MUST—by mathematical and logical necessity—produce over 95 percent garbage.

3. CUMULATIVE PROOFS ACROSS THIS SERIES:
- Forensic paper-by-paper autopsy (Yang et al., Adv. Electron. Mater. 2025; "everything can be wave-absorbing"—even bird-dropping-doped nanomaterials yielding RL peaks via film interference).
- Hyper-inflation of journals & mandatory "novelty" per paper.
- Mass PhD/Master's SCI graduation quotas driving systemic data fabrication.
- Contrast with Newton's era (zero SCI Impact Factors, zero coercive peer review, open intellectual clash).
- Admissions by Elon Musk and Nobel laureates that over 90 percent of top-journal papers are wrong.
- Scholarly cowardice against correcting obvious errors & intergenerational citation cartels.

4. WHY STATISTICAL FETISHISM SUPPRESSES INNOVATION:
Modern science worships statistical headcounts and experimental piles while dismissing first-principles logic and theoretical proof. Refusing logic unless backed by an impossible statistical census inevitably suffocates true breakthroughs and rewards industrial garbage.

TIMESTAMPS:
00:00 - Scene 1: Prologue — Why Demanding an Impossible Paper-by-Paper Census Is a Shield for Garbage
02:00 - Scene 2: The Cumulative Logical Proofs (From Yang et al. 2025 to Newton's Era & Musk)
04:35 - Scene 3: Researchers vs. Copywriters — What Happens When Scientists Receive Raw Data?
07:05 - Scene 4: Editors Preset the Mold, Authors Beg for Topic Orders ("Out of Scope" Censorship)
09:30 - Scene 5: Why This Inverted System Must Mathematically Produce Over 95% Garbage
11:15 - Scene 6: Logic Beats Brute-Force Statistics — Why Data-Worship Crushes Innovation
12:50 - Scene 7: Epilogue — Reclaiming Science From Copywriters

Key References Cited:
- Forensic Dissection Case 2: Deconstructing Yang et al. (Adv. Electron. Mater. 2025)
- Pretty Pictures, Shallow Theory: How Glossy Flagship Cartoons Mislead Microwave Absorption Science
- Liu, Y., Liu, Y., Drew, M. G. B., Ind. Eng. Chem. Res. 2025, 64(7), 3635-3650 (DOI: 10.1021/acs.iecr.4c04544)
- Liu, Y., Liu, Y., Drew, M. G. B., J. Magn. Magn. Mater. 2024, 593, 171850
- Academic Critique Hub: https://github.com/academic-critique/hub

#ScientificPublishing #CargoCultScience #WaveMechanics #PeerReviewCrisis #AcademicReform #PhilosophyOfScience #SCI`;

  const spokenScriptText = `[Scene 1: Prologue — The Impossible Census Demand]
Whenever you tell the academic establishment that over ninety-five percent of modern SCI papers are garbage, mainstream scientists immediately play their favorite trump card.
They fold their arms and say: "Show me mainstream-approved statistical data! Unless you statistically audit the millions of published papers one by one, your claim is just extreme, unscientific rhetoric!"
Stop and think about how dishonest that demand is! Modern academia floods the world with millions of papers every single year. Auditing every single paper one by one is a physically impossible census—and they know it!
Fortunately, human civilization does not need an infinite statistical survey to know when an assembly line is broken. Pure, airtight LOGIC proves far more decisively than brute-force headcounts!

[Scene 2: Seven Cumulative Proofs Already Standing on the Record]
Before introducing our sharpest logical proof today, look at how seven independent lines of evidence in this series already converge on the exact same verdict:
First, forensic paper-by-paper dissection—which applies universally across the literature. Look at Forensic Dissection Case 2 on Yang et al. in Advanced Electronic Materials 2025: the era of "everything can be wave-absorbing," where even nanomaterials doped with bird droppings can produce impressive Reflection Loss peaks simply through film wave interference!
Second, the sheer number of journals and papers paired with the rigid rule that EVERY paper must claim "innovation"—an impossible quota that guarantees mass fabrication of pseudo-novelty.
Third, millions of Master's and PhD candidates forced to publish SCI papers just to graduate—turning desperation into systemic data manipulation.
Fourth, the stark contrast with Newton's era: no SCI Impact Factors, no anonymous peer-review gatekeeping—journals were clean arenas for honest intellectual clash, never bureaucratic career scoreboards.
Fifth, blunt admissions from inside the elite itself: Elon Musk and Nobel laureates openly stating that over ninety percent of papers even in flagship journals are wrong.
Sixth, universal scholarly cowardice—scientists terrified to correct errors or take a principled stand even in small disputes.
And seventh, intergenerational vested interests passing down power, funding, and citation cartels like a hereditary guild!

[Scene 3: Researchers vs. Copywriters — What Happens When Scientists Receive Raw Data?]
Now let us add the decisive logical proof revealed by our previous forensic audit: "Pretty Pictures, Shallow Theory: How Glossy Flagship Cartoons Mislead Microwave Absorption Science."
Watch closely what happens the moment a modern scientist sits down with raw experimental materials—a table of numbers and a folder of microscopy images.
What does a genuine RESEARCHER do with those raw materials?
A real researcher treats numbers and images as clues to an unsolved physical puzzle! A researcher asks: What deep mechanism am I missing? Do my equations actually describe this film? Where does my assumption contradict Maxwell or thermodynamics? A researcher digs downward into the hidden information inside the data!
Now watch what a modern flagship-journal scientist actually does with the exact same numbers and images:
They do NOT investigate the underlying problem at all! Instead, they organize the numbers, call a graphic designer for shiny 3D hollow spheres, zig-zag lightning arrows, and neon waterfall plots, and stitch the materials into an attractive, marketable article!
Let us call this spade by its real name: a person who digs for truth inside raw materials is a RESEARCHER. A person who packages raw materials into an appealing story is a COPYWRITER!
Modern academia is no longer driven by problem researchers—its mainstream practitioners have degenerated into professional copywriters!

[Scene 4: Editors Preset the Mold, Authors Beg for Topic Orders]
Once you recognize that scientists have turned into copywriters, look at how the entire publishing pipeline operates—and see why over ninety-five percent garbage is not an accident, but a mathematical certainty!
Ask yourself: Who chooses scientific topics today?
Do researchers decide what deep problem of nature deserves twenty years of study? No! Today's "research experts" invite journal editors—especially flagship Editors-in-Chief—to give keynote talks telling scientists WHICH hot topics to chase, WHICH directions to avoid, and HOW to turn experimental fragments into a storyline that gets accepted!
And look at the other side of the desk: What are journal editors doing?
Are editors reading incoming manuscripts with open minds to discover unexpected breakthroughs? No! Editors pre-set a rigid template of what kind of paper is allowed to be published and what kind of paper is forbidden!
If your manuscript solves the actual physics—if your plain Wave Mechanics equations expose the errors inside ten thousand trendy papers—does the editor evaluate the truth of your logic? Not a chance! Because it violates the journal's pre-set storyline, it gets instantly rejected with two arrogant words: "OUT OF SCOPE"!
Manuscript selection today ignores scientific value and enforces pre-set commercial templates!

[Scene 5: The Ironclad Logical Proof of Over 95% Garbage]
Put those two halves together and let pure logic speak:
On one side, authors act as copywriters begging editors for topic orders and packaging raw data into fashionable fairy tales.
On the other side, editors ignore scientific truth and reject everything outside their pre-set fashionable templates.
What can such a closed loop possibly produce?!
Can a factory designed for commercial storytelling—where genuine problem-solving is flagged "out of scope"—accidentally output high-value foundational science? Impossible! By airtight logical necessity, a system where copywriter-authors feed template-enforcing editors MUST generate over ninety-five percent garbage papers!
You do not need to read ten million papers one by one to know the water is poisoned when you have already photographed the chemical pipe dumping poison into the reservoir!

[Scene 6: Logic vs. Statistical Fetishism — Why Experiment-Worship Crushes Innovation]
And here is the deepest tragedy tying this entire series together:
LOGIC proves far more decisively than brute-force statistics. First-principles mathematics proves far more reliably than a thousand sloppy measurements.
Yet modern science suffers from a fatal epistemological disease: it believes ONLY in statistical headcounts and refuses to trust logic; it believes ONLY in piles of experimental plots and refuses to trust theoretical derivation!
Whenever you present an airtight logical proof exposing a broken theory, the establishment sneers: "Where is your statistical census across ten thousand papers? Where are ten thousand experimental samples?"
Think about what that attitude guarantees: demanding consensus statistics before accepting truth is the exact engine that crushes breakthrough innovation—because every true breakthrough starts as a minority of ONE—while guaranteeing that millions of visually slick, empty, cargo-cult papers keep rolling off the press!

[Scene 7: Epilogue — Reclaiming Science From Copywriters]
So when mainstream gatekeepers demand an impossible statistical census before admitting the crisis, hand them this simple logical mirror:
Real science is built by researchers who interrogate data for truth—not copywriters who decorate data for Editors-in-Chief.
Until academia abandons pre-set templates, ends Impact Factor worship, and restores logic and open criticism above statistical conformity, the ninety-five percent garbage tide will only keep rising.
Thank you for watching—and for defending real science.`;

  const cumulativeProofs = [
    {
      title: "1. Universal Forensic Dissection (Case 2: Yang et al. 2025)",
      detail: "Applying rigorous wave mechanics paper by paper exposes the absurd 'everything can be wave-absorbing' illusion—where even bird-dropping-doped nanomaterials exhibit RL valleys purely from film interference."
    },
    {
      title: "2. Forced Novelty Across Millions of Papers",
      detail: "Hyper-expansion of journals paired with the bureaucratic mandate that every single paper must claim 'innovation' logically forces mass fabrication of pseudo-novelty."
    },
    {
      title: "3. Degree-Quota Fabrication Engine",
      detail: "Tying millions of PhD and Master's degrees to compulsory SCI quotas turns students into desperate output machines, driving systemic data manipulation."
    },
    {
      title: "4. Contrast With Newton's Era",
      detail: "Without SCI Impact Factors or coercive peer review, journals in Newton's time served as clean arenas for intellectual collision rather than career scoreboards."
    },
    {
      title: "5. Elite Inside Admissions",
      detail: "Even Elon Musk and Nobel laureates publicly acknowledge that over 90% of flagship top-journal papers are wrong."
    },
    {
      title: "6. Cowardice & Intergenerational Cartels",
      detail: "Modern scholars dare not correct errors or take sides even in minor disputes, while vested interests inherit and defend broken frameworks across generations."
    }
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="researchers-vs-copywriters-garbage-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HB &bull; Logical Proof of &gt;95% Garbage
          </span>
          <span className="bg-rose-100 text-rose-900 text-xs font-semibold px-3 py-1 rounded-full border border-rose-200">
            Researchers vs. Copywriters &bull; Logic Over Statistical Fetishism
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Copywriters, Not Scientists: The Ironclad Logical Proof That Over 95% of SCI Papers Are Garbage
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Why demanding a brute-force census across millions of papers is an evasion tactic—how turning raw data into pretty cartoons exposes researchers as commercial copywriters, how Editors-in-Chief dictate topics via pre-set &ldquo;out of scope&rdquo; templates, and why logic beats blind statistical fetishism.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Epistemology &amp; Systemic Logic Series
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-hb")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-hb" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-hb" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-hb")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-hb" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-hb" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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
      {/* PART I: LOGICAL PROOF MATRIX & STRUCTURAL ANATOMY                          */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Scale className="w-6 h-6 text-rose-700" />
          <h2>Part I: Why Logic Proves &gt;95% Garbage Without an Impossible Census</h2>
        </div>

        {/* Contrast: Researcher vs. Copywriter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-50/70 border border-emerald-200 p-5 rounded-xl space-y-2">
            <h3 className="font-sans font-bold text-emerald-950 text-sm flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-700 shrink-0" />
              What a Real Researcher Does With Raw Data
            </h3>
            <p className="text-sm text-slate-800">
              Upon receiving experimental numbers and microscopy images, a genuine <strong>researcher</strong> mines those materials to <strong>uncover physical problems</strong>, extract deep hidden laws, and test where existing theory fails.
            </p>
          </div>
          <div className="bg-rose-50/80 border border-rose-200 p-5 rounded-xl space-y-2">
            <h3 className="font-sans font-bold text-rose-950 text-sm flex items-center gap-2">
              <PenTool className="w-4 h-4 text-rose-700 shrink-0" />
              What Modern SCI Scientists Do (Copywriters)
            </h3>
            <p className="text-sm text-slate-800">
              Instead of investigating physical problems inside data, modern scientists act as <strong>copywriters (写手)</strong>: they organize raw numbers and glossy 3D cartoons to decorate them into an <strong>eye-catching, publishable article</strong>.
            </p>
          </div>
        </div>

        {/* Editor Preset & Scope Inversion */}
        <div className="bg-amber-50/80 border border-amber-300 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-amber-950 text-base flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
            The Double Inversion: Editor-Dictated Topics &amp; Pre-Set &ldquo;Out of Scope&rdquo; Templates
          </h3>
          <p className="text-sm text-slate-800">
            Researchers no longer identify worthy problems from nature; they ask <strong>journal editors</strong> what topics to pursue, what topics to drop, and how to turn raw data into a publishable story. Meanwhile, editors do not search submissions for valuable discoveries—they <strong>pre-set rigid templates</strong> of permissible papers and reject everything else as <strong>&ldquo;out of scope.&rdquo;</strong>
          </p>
          <p className="text-sm text-slate-900 font-semibold">
            When selection ignores scientific value and enforces pre-set templates fed by copywriters, logic guarantees that over 95% of published output is garbage.
          </p>
        </div>

        {/* Cumulative 6 Prior Proofs Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {cumulativeProofs.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1">
              <h4 className="font-sans font-bold text-slate-950 text-sm">{item.title}</h4>
              <p className="text-xs md:text-sm text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Logic vs Statistical Fetishism */}
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl border border-slate-700 space-y-2">
          <div className="font-sans font-bold text-amber-300 text-sm">
            Logic Beats Statistical Fetishism (Why Data-Worship Suppresses Innovation)
          </div>
          <p className="text-sm text-slate-200">
            Logic proves systemic failure far more decisively than an impossible paper-by-paper census. Yet modern science worships statistical headcounts and experimental piles while rejecting pure logic and theory—a bias that inevitably crushes true innovation while mass-producing garbage.
          </p>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 7-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-rose-700" />
            <h2>Part II: Complete 7-Scene Digital Avatar Broadcast Script (~13.5 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-hb-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-hb-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-hb-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
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
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-hb-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-hb-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-hb-bottom" ? "Copied!" : "Copy Clean Description"}
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
          Logical Proof of &gt;95% SCI Garbage &bull; Essay HB &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Researchers vs. Copywriters
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Pre-Set Template Gatekeeping
          </span>
          <span className="bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md font-semibold">
            Logic Beats Statistics
          </span>
        </div>
      </div>
    </article>
  );
}
