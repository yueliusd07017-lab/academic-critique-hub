import React, { useState } from "react";
import {
  ShieldAlert,
  Copy,
  Check,
  Scale,
  BookOpen,
  Video,
  FileText,
  Flame,
  Sparkles,
} from "lucide-react";

export default function ScientificMoralityAndCompetenceScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("scientific-morality-and-competence-article-text");
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

  const youtubeSafeDescription = `Title: Academia Calls Obedience "Character"—Why Real Scientific Morality Requires Theoretical Competence

When someone witnesses rampant injustice and feels zero moral pain, that is NOT maturity and NOT "inner peace"—it is moral numbness and the death of conscience. Logic and empathy demand speaking out before injustice reaches you.

Mainstream academia lectures that "character matters more than academic ability." Yet by "character," they mean OBEDIENCE—not Feynman's integrity. In this script, Dr. Yue Liu dissects the moral collapse of modern science:

1. REWARDING COWARDICE & PUNISHING ERROR DETECTORS:
- NYT (Oct 16, 2018, Harvard cardiologist scandal): "experts were just too timid to take a stand."
- Simine Vazire, Nature 577 (2020) 9: "his adviser told him that publishing the criticism had crossed a line, and he should never do it again."

2. TONE-POLICING & SILENCING WARNINGS:
- Qeios 10.32388/5FRZHG: claims every research is "relatively correct or wrong according to the era" and demands "more polite" writing.
- Qeios 10.32388/4PN4RT: dismisses Nobel laureate Tasuku Honjo's 90% warning as an "exaggerated formulation."

3. COLD INDIFFERENCE & NATURE'S BRAND-FIRST PR:
- Zero empathy for Zhu Yuejun (reporting suppressed), Yitang Zhang washing dishes, or Shu Xingbei suffering alone after correcting Wang Zhuxi.
- Nature calls fraud "isolated cases" while publishing sanctioned misconduct authors—caring only about reputation.

4. FEYNMAN'S INTEGRITY VS. "CONTROVERSIAL" LABELS:
- Impedance Matching Theory is mathematically refuted, with ZERO published rebuttals against Wave Mechanics—yet insiders still label Wave Mechanics "controversial."

5. HIGH VISIBILITY, PRIORITY LAW & STEALTH Z_M REVISION:
- Wave Mechanics Theory is highly visible and trivially searchable. In science, ONCE PUBLISHED, EVERYONE HAS SEEN IT (the legal basis of copyright, discovery priority, and submission timestamps).
- "We didn't see it" hides true moral bankruptcy: omitting citations while stealthily altering Impedance Matching claims and fixing the Z_M sign issue behind the scenes (Case 3: Wang et al., JCIS 2021; Case 2: Yang et al., Adv. Electron. Mater. 2025; "The Illusion of Deep Understanding").

6. COMPETENCE CREATES MORALITY & "BALANCED VIEW" SOPHISTRY:
- Feynman's integrity came from theoretical mastery; modern Theoretical Poverty (SSRN 5463155) makes authorities terrified of math—exemplified by Eduard Arzt (Progress in Materials Science, Aug 31, 2025, D-25-00583) calling "correct theory" "extremely dubious."

7. WHEN COMPLEXITY HIDES THE TRUTH (CHALLENGER & COLUMBIA):
- Before Challenger, authorities put prestige over risk; afterward, they buried the simple root cause inside complex charts and hid truth in an appendix—repeating disaster with Columbia's foam strike, where ground control knew of damage yet withheld it.
- Real solutions are simple. Shallow work looks "mysterious" and passes 15-day peer review; bone-deep truth looks "too simple" and gets rejected.

TIMESTAMPS:
00:00 - Scene 1: Prologue — Moral Numbness Is Not Maturity
01:55 - Scene 2: What Mainstream Academia Calls "Character" Is Obedience
03:45 - Scene 3: Coldness Toward Real Tragedies & Nature's PR Ethics
05:35 - Scene 4: Cargo Cult Consensus vs. Feynman's Integrity
07:20 - Scene 5: High Visibility, Priority Law & Stealth Z_M Revision Without Citation
09:45 - Scene 6: Competence Creates Morality — Feynman vs. Theoretical Poverty
11:55 - Scene 7: Progress in Materials Science & "Balanced View" Sophistry
13:50 - Scene 8: Challenger, Columbia & Why Complexity Hides Simple Truth
15:50 - Scene 9: Epilogue — Speak Out Before Injustice Reaches You

References:
- Liu, Yue, The Theoretical Poverty of Modern Academia (2025). SSRN: https://ssrn.com/abstract=5463155 | http://dx.doi.org/10.2139/ssrn.5463155
- Liu, Yue, Rethinking "Balanced View" in Scientific Controversies (2025), yueliusd.substack.com
- Forensic Dissection Case 2 (Yang et al., AEM 2025) & Case 3 (Wang et al., JCIS 2021 — 15-Day Peer Review)
- Wave Mechanics vs. Cargo-Cult Impedance Matching | When Complexity Hides the Truth
- S. Vazire, Nature 577 (2020) 9 | Qeios: 10.32388/5FRZHG, 10.32388/4PN4RT

#ScientificMorality #CargoCultScience #WhenComplexityHidesTruth #TheoreticalPoverty #AcademicIntegrity`;

  const spokenScriptText = `[Scene 1: Prologue — Moral Numbness Is Not Maturity]
If a person witnesses rampant injustice, sees outrage after outrage, and feels no moral pain anymore—that is NOT maturity. That is NOT spiritual elevation. That is numbness, and the death of conscience.
Why did human beings evolve the capacity to feel confused, anguished, and angry? Because moral anger is the immune system of conscience!
If I see an unfair act and tell myself, "Well, the whole world works that way," so I stop speaking up—and you stop speaking up—and everyone stops speaking up—then public accountability vanishes, and morality loses its power to correct society.
Why MUST we get angry at injustice, even when it has not hit us personally yet? Two ironclad reasons:
First, basic empathy and compassion.
Second, simple logic—rational self-interest! If a corrupt system can crush another scholar today, it can crush YOU tomorrow. The only difference is timing! That is why even from pure logical self-preservation, we must take a stand and speak out.

[Scene 2: What Mainstream Academia Calls "Character" Is Obedience]
Now turn that lens straight onto modern academia!
Mainstream scientists love lecturing young scholars with a pious slogan: "A scientist's moral character matters more than academic ability!"
Sounds noble—until you ask one question: **WHAT DOES MAINSTREAM ACADEMIA ACTUALLY MEAN BY "CHARACTER"?**
Let the record answer. They mean **OBEDIENCE!**
Look at Exhibit One, from the New York Times coverage of the Harvard cardiologist retraction scandal in October 2018:
"Some scientists wondered how a questionable line of research persisted for so long... experts were just too timid to take a stand."
Look at Simine Vazire in Nature, 2020:
"His adviser told him that publishing the criticism had crossed a line, and he should never do it again."
Ask yourself: Did the scientific establishment condemn that cowardice and intimidation as a moral failure? NO! Keeping your head down, staying timid, and never exposing powerful insiders IS the "good character" mainstream academia rewards!
And look at Exhibit Two—how reviewers display "team-player character" when someone exposes systemic rot.
In Qeios review 5FRZHG, a gatekeeper writes: "A thorough case study is required... every research is relatively correct or wrong according to the era. The writing flow of the manuscript should be more polite and professional."
In Qeios review 4PN4RT, another dismisses Nobel laureate Tasuku Honjo's warning that ninety percent of top-journal views are wrong as merely "an exaggerated formulation to alert young researchers."
To them, defending the guild politely is "character"; speaking plain truth is "unprofessional"!

[Scene 3: Coldness Toward Real Tragedies and Nature's Brand-First Ethics]
Where was mainstream academia's vaunted "character" when real scholars suffered?
Look at the tragedy of Zhu Yuejun—mainstream media actively suppressed reporting on it.
Look at Yitang Zhang washing dishes for years—a past so painful that even Zhang himself avoids discussing the real reasons behind it.
Look at Shu Xingbei, whose personal tragedy unfolded after he corrected Wang Zhuxi's error, leaving Shu to swallow his bitter fate alone.
Did the scientific establishment show a shred of empathy? None. Zero moral pain. Total institutional numbness!
And look at Nature itself! When media investigations exposed widespread fraudulent papers in its pages, did Nature show genuine scientific conscience? Its spokesperson rushed out with a PR shield: the questioned papers are merely "isolated cases," a tiny fraction of its massive output—and then Nature turned right around to keep publishing new papers by authors already sanctioned for research misconduct!
Nature cares exclusively about its brand reputation. It has zero concept of scientific morality!

[Scene 4: Cargo Cult Consensus vs. Feynman's Integrity]
In his 1974 Caltech commencement address on Cargo Cult Science, Richard Feynman defined real scientific integrity: bending over backward to show all the ways you might be wrong.
Modern mainstream "character" is the exact opposite of Feynman's integrity! It is blind obedience to consensus and institutional authority: whatever authorities endorse is treated as settled truth; whatever authorities refuse to endorse is automatically dismissed as "inconclusive," "unaccepted," and "controversial"!
Look at microwave absorption physics right now. Impedance Matching Theory has already been rigorously refuted mathematically in peer-reviewed journals, and Wave Mechanics Theory has been publicly published for years.
Has even ONE mainstream scientist published a single paper refuting Wave Mechanics Theory? **NOT ONE!**
Yet AI models and mainstream insiders still parrot that Wave Mechanics Theory "has not overturned Impedance Matching Theory" and still label Wave Mechanics "a controversial theory"!

[Scene 5: High Visibility, Priority Law, and Stealth Revision Without Citation]
Some AI defenders try to excuse mainstream silence politely: "Perhaps mainstream scientists simply didn't see the refutation, or saw it and felt it wasn't worth refuting publicly."
Wait a second! Look at the reality first:
Wave Mechanics Theory for microwave absorption is NOT buried in some obscure basement archive! It has long been a **highly visible, effortlessly searchable theory** indexed across major journals, preprints, and every scientific search engine!
First, if an entire field's foundational theory is mathematically wrong and you decide verifying it is "not worth refuting," then either your theoretical competence is rock bottom, or you are openly practicing Cargo Cult Science!
Second—**nobody saw it?!** One author missed a paper? Maybe. Two authors missed it? Perhaps. Thousands of authors, dozens of editors, and armies of peer reviewers all missed a highly visible, top-indexed theory across years of publications?!
Remember the fundamental rule of science: **ONCE A PAPER IS PUBLISHED, EVERYONE HAS SEEN IT!**
That is the ENTIRE legal and ethical foundation of copyright, invention priority, and scientific discovery! That is why every journal stamps the exact dates of submission, acceptance, and publication!
No later author can steal an invention by saying, "Sorry, I didn't read your paper!"
Even worse—claiming "we didn't see it" is a deliberate smokescreen to cover up concrete moral corruption: **mainstream scientists refuse to cite Wave Mechanics Theory while stealthily revising Impedance Matching Theory and quietly updating their own claims behind the scenes!**
Look at the **Z-M sign problem** and circuit-element confusion dissected in our forensic case studies—such as Wang et al. in JCIS 2021 with its fifteen-day peer review and illusion of "deep understanding," and Yang et al. in Advanced Electronic Materials 2025! Instead of citing Wave Mechanics openly and admitting error, mainstream authors silently patch equations, swap signs, and borrow our conclusions without attribution! That stealth revision without citation IS concrete proof of moral bankruptcy!

[Scene 6: Academic Competence Creates Scientific Morality]
Now we reach the deepest question of all: **Which is truly more fundamental—a scientist's "character" or a scientist's academic competence?**
Think about Richard Feynman! Why was Feynman's scientific morality so extraordinary? Why could HE articulate Cargo Cult Science?
Not because Feynman was a saint preaching generic social manners! Feynman explicitly emphasized that a scientist's integrity is NOT the same thing as everyday polite morality!
Feynman's scientific morality was towering BECAUSE HIS ACADEMIC COMPETENCE WAS TOWERING!
He had the theoretical mastery to distinguish a true theory from a false theory—and he knew that clinging to a proven falsehood is infinitely more shameful than making an honest error!
By contrast, why is the scientific morality of modern academia so shockingly low?
As documented in "The Theoretical Poverty of Modern Academia," modern researchers think running experiments equals doing science. They do not read textbooks. They do not review foundational physics. Their theoretical level has sunk so low that peer-reviewed SCI papers repeatedly commit errors an undergraduate should never make—and when those errors are pointed out, neither editors nor peer reviewers even recognize them as errors!
Knowing that Impedance Matching Theory is wrong and Wave Mechanics Theory is right requires nothing beyond elementary-school honesty, middle-school algebra, and undergraduate wave superposition! Yet the entire modern establishment cannot grasp it!
When authorities have weak theoretical competence, their greatest terror is someone proving their theory false. Because they lack the ability to fight back mathematically, they never publish a rebuttal paper—they hide behind "authoritative journals and consensus are on our side."

[Scene 7: Case Exhibit — Progress in Materials Science and "Balanced View" Sophistry]
High academic competence naturally produces high scientific morality. Conversely, anyone who climbs to the top on garbage papers—no matter how high their title, even as Editor-in-Chief of a flagship review journal—invariably reveals shallow theoretical grounding!
Listen verbatim to the August 31, 2025 rejection letter from Eduard Arzt, Editor-in-Chief of Progress in Materials Science, regarding manuscript D-25-00583:
"Progress in Materials Science has a reputation for publishing only balanced review articles... Let me only state the notion of a 'correct theory' (which you are alluding to) is already extremely dubious: philosophy of science has shown that theories are always approximations to reality and can never be proven, but only disproven by conflicting experimental data. In that sense, the style of your reply reinforces my original decision."
Hear that?! A flagship materials-science Editor-in-Chief literally declares that the very notion of a **"correct theory"** is "extremely dubious," refuses to judge mathematical proof, hides behind "balanced view," and uses "the style of your reply" as grounds for rejection! That is the exact institutional sophistry analyzed in "Rethinking 'Balanced View' in Scientific Controversies"!

[Scene 8: When Complexity Hides the Truth — Challenger, Columbia, and Why Shallow Papers Win]
Let us expose one final trick of Cargo-Cult morality: **using artificial complexity to bury simple truth!**
Look at the **Challenger space shuttle disaster**. The root cause was NOT complicated! Before the launch, NASA authorities put institutional honor and schedule pride above glaring technical risk. After the disaster, to evade accountability, those same authorities buried the simple cause beneath towering, impenetrable charts—and tucked the real reason away inside an appendix!
And what happened because institutions evaded the simple truth? History repeated itself with the **Columbia disaster**! A piece of insulating foam tore into the wing—and devastatingly, ground authorities ALREADY KNEW the orbiter was damaged, yet withheld the warning from the astronauts!
Now look at academic publishing through that exact lens:
**The principle that truly solves a scientific problem is ALWAYS simple!**
When research is shallow and has NOT grasped the true essence of a problem, experimental curves look mysterious, intricate, and impressively "worthy of publication"—producing the illusion of deep understanding!
When research cuts **straight to the bone** and reveals that a simple fundamental law explains everything, gatekeepers dismiss it as "too simple, not novel enough to publish"!
THAT is why superficial, over-complicated garbage sails through fifteen-day peer reviews into top journals, while deep, bone-penetrating theoretical truth gets rejected!

[Scene 9: Epilogue — Speak Out Before the Injustice Reaches You]
Real scientific morality is forged from two unbreakable pillars: **theoretical competence** strong enough to tell truth from error, and **moral conscience** brave enough to reject numbness and speak out.
Do not mistake timidity for professionalism, obedience for character, stealth revision for innovation, or artificial complexity for depth. Speak up while you still feel moral pain—because when everyone goes silent, truth has no defenders left. Thank you for watching.`;

  const keyPillars = [
    {
      title: "1. 麻木不是成熟，良知疼痛才是底线",
      detail:
        "Video premise: Feeling zero moral pain before rampant injustice is not maturity or 'high realm'—it is conscience extinction. Empathy AND logical self-preservation demand speaking out before injustice arrives at your door.",
    },
    {
      title: "2. 主流所谓“人品”＝服从共识与权威",
      detail:
        "Exhibits: NYT Harvard scandal ('experts were just too timid to take a stand'), Simine Vazire Nature 2020 ('crossed a line'), Qeios 5FRZHG & 4PN4RT tone-policing, and cold indifference toward Zhu Yuejun, Yitang Zhang, and Shu Xingbei.",
    },
    {
      title: "3. “没看到”谎言与不引用的偷偷修改",
      detail:
        "Wave Mechanics is highly visible and easily searchable; Published = Seen. Excusing silence as 'not seen' covers up stealth revisions without citation—such as silently patching the Z_M sign error (Wang et al. JCIS 2021; Yang et al. AEM 2025).",
    },
    {
      title: "4. 学术水平与“复杂掩盖简单真相”",
      detail:
        "Feynman's integrity came from competence. Like Challenger (complex charts hiding simple risk) and Columbia (withholding known foam damage), shallow papers look 'mysterious' and pass 15-day review, while bone-deep simple principles get rejected (SSRNs & Eduard Arzt).",
    },
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="scientific-morality-and-competence-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HI &bull; Digital Avatar Video Script
          </span>
          <span className="bg-rose-100 text-rose-900 text-xs font-semibold px-3 py-1 rounded-full border border-rose-200">
            Scientific Morality &bull; Feynman&apos;s Integrity vs. Obedience
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Academia Calls Obedience &ldquo;Character&rdquo;—Why Real Scientific Morality Requires Theoretical Competence
        </h1>
        <p className="text-sm font-bold text-rose-800 mt-2 font-sans">
          评论现代科学界的道德和人品：麻木不是境界高，学术水平才是科学道德的真正基石
        </p>
        <p className="text-sm md:text-base text-slate-600 mt-2 font-sans italic">
          Connecting the viral conscience monologue (&ldquo;moral numbness is not maturity&rdquo;) with Feynman&apos;s 1974 Cargo Cult Science, Harvard/Nature timidity records, Zhu Yuejun/Yitang Zhang/Shu Xingbei, the &ldquo;Published = Seen&rdquo; priority rule, SSRN 5463155, and Eduard Arzt&apos;s Aug 31, 2025 rejection letter.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Ethics, Priority Law &amp; Theoretical Poverty
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-hi")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-hi" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-hi" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-hi")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-hi" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-hi" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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
      {/* PART I: FOUR CORE STRUCTURAL THESES                                        */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-5">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <ShieldAlert className="w-6 h-6 text-rose-700" />
          <h2>Part I: Four Core Pillars — Why Competence Precedes &ldquo;Character&rdquo;</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {keyPillars.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5">
              <h3 className="font-sans font-bold text-slate-950 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-700 shrink-0" />
                <span>{item.title}</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-700 font-sans">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl border border-slate-700 space-y-2">
          <div className="font-sans font-bold text-amber-300 text-sm flex items-center gap-2">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>Primary Citations Referenced in Script</span>
          </div>
          <ul className="text-xs font-mono text-slate-200 space-y-1 list-disc pl-4">
            <li>
              Liu, Yue, <em>The Theoretical Poverty of Modern Academia</em> (Sept 5, 2025). SSRN: https://ssrn.com/abstract=5463155 | http://dx.doi.org/10.2139/ssrn.5463155
            </li>
            <li>
              Liu, Yue, <em>Rethinking &ldquo;Balanced View&rdquo; in Scientific Controversies</em> (2025), yueliusd.substack.com (with Eduard Arzt&apos;s Aug 31, 2025 decision on D-25-00583)
            </li>
            <li>
              S. Vazire, <em>A toast to the error detectors</em>, Nature 577(7788) (2020) 9, https://doi.org/10.1038/d41586-019-03909-2
            </li>
            <li>
              Qeios Reviews: DOI 10.32388/5FRZHG &amp; DOI 10.32388/4PN4RT | NYT Harvard Scandal (Oct 16, 2018)
            </li>
          </ul>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 8-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-rose-700" />
            <h2>Part II: Complete 9-Scene Digital Avatar English Script (~16 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-hi-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-hi-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-hi-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
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
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-hi-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-hi-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-hi-bottom" ? "Copied!" : "Copy Clean Description"}
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
        <div className="flex items-center gap-1.5">
          <Scale className="w-4 h-4 text-slate-400" />
          <span>Essay HI &bull; Scientific Morality &amp; Theoretical Competence &bull; Dr. Yue Liu Archives</span>
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Feynman Integrity
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Published = Seen
          </span>
          <span className="bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md font-semibold">
            SSRN 5463155
          </span>
        </div>
      </div>
    </article>
  );
}
