import React, { useState } from "react";
import { ShieldAlert, Copy, Check, Scale, BookOpen, Video, FileText, Flame, History, MessageSquareWarning, BarChart3, Lock } from "lucide-react";

export default function ForensicDissectionFinalePart1Script() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("forensic-dissection-finale-part1-article-text");
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

  const youtubeSafeDescription = `Title: Why Over 95% of SCI Papers Are Garbage: Authority Worship, Public Censorship & The Metrics Trap | Forensic Dissection Series Finale (Part 1)

Welcome to Part 1 of our two-part Series Finale for "Why Modern Science Is in a Dark Age" (Forensic Dissection Series).

Across eight forensic autopsies—from Carbon (2024), Adv. Electron. Mater. (2025), J. Colloid Interface Sci. (2021), J. Appl. Phys. (2012), J. Phys. D (2020), J. Alloys Compd. (2025), Appl. Phys. A (2024) x2, and ChemistrySelect (2024) to Crystallography Reviews (2017)—we demonstrated why over 95% of SCI articles today are theoretical garbage and why modern academia is trapped in Cargo Cult Science.

In Part 1 of our Conclusion, Dr. Yue Liu directly answers the hardest questions mainstream gatekeepers raise against this series—and presents documented proof of public media censorship:

1. SELF-AUDIT OF OUR THESIS: IS OUR EVIDENCE FLAWED, EXTREME, OR INCONTROVERTIBLE?
Mainstream scientists reject the 95%+ indictment and demand "large-scale random sampling." Yet when flagship papers in top journals (earning 340+ citations, national grants, and 3-to-15-day peer review) fail undergraduate math and physics—while Wave Mechanics Theory is rejected and critics are stripped of submission accounts—our forensic evidence stands rock-solid.

2. CATALOG OF SUB-UNDERGRADUATE ERRORS IN SCI FLAGSHIP JOURNALS:
- Ignoring the mathematical definition of Reflection Loss (RL) while publishing microwave absorption papers.
- Confusing unidirectional traveling waves with standing waves inside a film.
- Treating vector wave superposition as scalar energy subtraction/addition.
- Replacing film input impedance (Zin) with bulk wave impedance (ZM) and confusing interface reflection (RM) with film RL.
- Treating material permittivity and permeability as functions of thickness d (or freezing d during differentiation).

3. AUTHORITY WORSHIP VS. TRUTH (THE NESPOLO MILLER INDEX PARADOX):
When an IUCr Commission founder and J. Appl. Cryst. editor (Nespolo 2015/2017) proposed a convoluted redefinition of Miller indices breaking the Law of Rational Indices, the IUCr Online Dictionary adopted it immediately. Had a "nobody" proposed that nonsense, it would have been laughed out of peer review—while mathematically rigorous Wave Mechanics Theory remains ostracized!

4. THE DEATH OF GENUINE REVIEW ARTICLES:
Real reviews exist to uncover errors and foundational insights in prior literature. Yet in an ecosystem of 95%+ garbage papers, can you find a SINGLE mainstream scientist's review exposing foundational errors? Whitewashing broken theories inside 340-citation "Perspectives" is textbook pseudoscience.

5. PROGRESS OR REGRESSION SINCE ISAAC NEWTON?
Instrumentally, modern labs are far ahead of Newton's era. Theoretically and logically, academia has suffered catastrophic regression: the elementary conceptual blunders passing SCI peer review today would never have survived error-detectors in Newton's scientific community.

6. HOW 95%+ GARBAGE SURVIVES: INTIMIDATION OF ERROR DETECTORS:
As documented in:
- New York Times (Oct 16, 2018) on the Harvard/Anversa scandal: "...some scientists wondered how a questionable line of research persisted for so long ... experts were just too timid to take a stand."
- Simine Vazire, "A toast to the error detectors", Nature 577(7788), 9 (2020) (DOI: 10.1038/d41586-019-03909-2): a postdoc who published an accurate, measured commentary correcting a famous researcher was warned by his adviser that criticizing a senior scientist "crossed a line, and he should never do it again."

7. PUBLIC MEDIA CENSORSHIP — WHAT MODERN ACADEMIA NEEDS MOST IS INCISIVE CRITICISM:
Documented screenshots from public science media (ScienceNet / KeXueWang) prove suppression goes far beyond journals:
- Posts solving real physics via Wave Mechanics Theory, criticizing the regression to medieval alchemy, and calling for incisive academic criticism are stamped "Failed Review" (Shenhe Weitongguo).
- Posts and comments addressing critiques or denials of quantum mechanics and relativity—including Dr. Liu's defense of quantum angular momentum against classical mechanical reductionism and replies on Einstein's 1905 papers—are stamped "Failed Review."
- Even a reply explaining why institutional peer-review rejection letters are not shielded by individual privacy law, and a philosophical remark that conformity never yields innovation, are censored.
What is the modern scientific establishment protecting, and what is it suppressing?

8. THE METRICS PARADOX — CITATIONS & YOUTUBE VIEWS VS. SCIENTIFIC TRUTH:
Flawed Impedance Matching papers earn hundreds of citations; rigorous Substack essays and YouTube forensic videos exposing the truth attract tiny audiences. Both academia (citations/Impact Factor) and digital platforms (views/clicks) judge value by popularity metrics rather than substantive truth. Popularity statistics will never guide genuine scientific progress.

Stay tuned for Part 2 of our Series Finale (addressing Xiaowei's Q&A).

TIMESTAMPS:
00:00 - Scene 1: Prologue — Answering Mainstream Objections to Our 95%+ Thesis
02:05 - Scene 2: Audit of Evidence — Sub-Undergraduate Errors vs. Censorship of Wave Mechanics
04:15 - Scene 3: Authority Worship — Why Nespolo's Broken Definition Won While Wave Mechanics Was Blocked
06:15 - Scene 4: Where Are the Real Review Articles? Whitewashing Pseudoscience
08:05 - Scene 5: Newton's Era vs. Today — Technological Progress, Theoretical Regression
09:50 - Scene 6: Why Garbage Persists — Retaliation Against Error Detectors (Vazire, Nature 2020)
12:00 - Scene 7: Public Media Censorship — What Is Modern Science Protecting vs. Suppressing?
14:25 - Scene 8: Epilogue — The Tyranny of Popularity Metrics (Citations & YouTube Views vs. Truth)

Key References Cited:
- Harvard / Anversa Scandal: New York Times (16 Oct 2018), http://www.staradvertiser.com/2018/10/16/news/harvard-calls-for-retraction-of-dozens-of-studies-by-noted-cardiologist/
- Vazire, S., "A toast to the error detectors", Nature 577(7788), 9 (2020) (DOI: 10.1038/d41586-019-03909-2)
- Liu, Y., Major Scientific Breakthroughs Are Not Born From Journals, SSRN 5720702 (2025)
- Liu, Y., The Theoretical Poverty of Modern Academia, SSRN 5463155 (2025)
- Liu, Y., Liu, Y., Drew, M. G. B., SN Appl. Sci. 2020, 2(4), 755; Physica Scripta 2021/2022; J. Appl. Phys. 2023; JMMM 2024; Ind. Eng. Chem. Res. 2025, 64(7), 3635-3650
- Academic Critique Hub: https://github.com/academic-critique/hub

#CargoCultScience #PeerReviewCrisis #ScientificMethod #WaveMechanics #ErrorDetectors #AcademicCensorship #PhilosophyOfScience`;

  const spokenScriptText = `[Scene 1: Prologue — Answering Mainstream Objections to Our 95 Percent Thesis]
Welcome to Part One of the Series Finale for our Forensic Dissection Series: Why Modern Science Is in a Dark Age.
Across eight forensic case studies—spanning Carbon, Advanced Electronic Materials, Journal of Colloid and Interface Science, Journal of Applied Physics, Journal of Physics D, Journal of Alloys and Compounds, Applied Physics A, ChemistrySelect, and Crystallography Reviews—we have defended a bold, uncompromising thesis: more than ninety-five percent of modern SCI articles are theoretical garbage, modern academia is practicing Cargo Cult Science, and contemporary science is trapped in an authoritarian Dark Age.
Naturally, mainstream scientists violently reject this conclusion. They demand statistical surveys and accuse us of bias.
So today, before closing this series, let us put our own investigation on trial and answer five direct questions:
Are there flaws in our reasoning? Is our stance extreme or one-sided? Can our evidence withstand rigorous cross-examination? Does our critique cut to the bone? And how credible are our conclusions?
When every single flagship exhibit pulled from prestigious SCI journals—boasting national grants, hundreds of citations, and three-to-fifteen-day peer reviews—collapses under freshman mathematics while real theoretical solutions are blacklisted, our evidence does not suffer from exaggeration. It exposes a systemic collapse that polite statistics try to hide.

[Scene 2: Empirical Audit — Sub-Undergraduate Errors vs. Censored Breakthroughs]
Look at the concrete exhibits documented across Episodes One through Eight. We did not hunt for obscure errors in predatory journals. We documented sub-undergraduate blunders committed jointly by authors, peer reviewers, and journal editors in top SCI outlets:
Researchers publishing microwave absorption papers who do not even know the mathematical definition of Reflection Loss;
Experts who confuse unidirectional traveling waves with standing waves inside an absorbing film;
Gatekeepers who replace complex wave superposition with scalar energy subtraction;
Authors who substitute bulk wave impedance Z-M into film input impedance Z-in, and stuff film reflection loss into single-interface reflection formulas;
And specialists who pretend material permittivity and permeability are functions of film thickness, or freeze thickness during partial differentiation!
Meanwhile, what happens to genuinely deep, rigorous theoretical science that actually solves the physics—namely, the Wave Mechanics Theory of microwave absorption? It is blocked from flagship journals, ignored by consensus cliques, and conscientious scholars who insist on pointing out mathematical truth even have their journal submission accounts stripped away! That contrast alone proves our critique cuts directly to the bone.

[Scene 3: Authority Worship — Why Nespolo's Broken Definition Won While Wave Mechanics Was Blocked]
Consider the devastating contrast we uncovered in Episode Eight between authority worship and objective logic.
When Professor Massimo Nespolo—an editor of the Journal of Applied Crystallography and founder of an IUCr commission—proposed a convoluted, backward redefinition of Miller indices that broke the Law of Rational Indices and turned BCC (111) planes into (222), mainstream crystallography immediately embraced it and enshrined it in the official IUCr Online Dictionary of Crystallography!
Now ask yourself honestly: if an unknown researcher—a scientific nobody—had submitted that exact clunky, counter-intuitive redefinition of Miller indices, would the IUCr and mainstream journals have adopted it? Of course NOT! It would have been laughed out of the editorial office in five minutes!
Yet look at the opposite experiment: Wave Mechanics Theory is mathematically exact, derived rigorously from Maxwell's equations and transmission line theory, and resolves decades of microwave absorption anomalies. Because it challenges entrenched dogma without establishment patronage, mainstream academia still refuses to accept it! Modern science does not judge ideas by logic; it judges ideas by status!

[Scene 4: The Death of Genuine Review Articles]
What is the fundamental purpose of a scientific review article?
A real review exists to audit prior literature, expose unresolved contradictions, clarify obscured foundations, and extract genuine theoretical insights.
Look around modern SCI journals today. Every week brings glossy "Perspective" and "Review" papers—like the 340-citation Carbon Perspective we dissected in Case One—praising hundreds of experimental plots as triumphant breakthroughs.
Can you point to even ONE review written by a mainstream scientist in microwave absorption that serves as a genuine critical review—identifying the foundational mathematical blunders staring right at them?
In an ecosystem where over ninety-five percent of SCI papers are garbage, producing hundreds of glowing "reviews" that see ZERO foundational errors—while repeating physical impossibilities—is not innocent oversight. It is pseudoscience dressed in luxury citations!

[Scene 5: Progress or Regression Since Isaac Newton?]
Let us ask a deeply unsettling historical question: compared with the era of Isaac Newton, has modern science progressed or regressed?
Of course, our experimental instruments, electron microscopes, vector network analyzers, and computers have advanced beyond Newton's wildest dreams.
Yet compare the two eras in theoretical mastery and the ability to recognize fundamental error!
Did the grotesque mathematical and conceptual blunders documented in our Forensic Dissection Series ever survive open scrutiny in Newton's scientific community? When leading scientists in Newton's age debated calculus, optics, or celestial mechanics, could someone confuse a film with an infinite medium, freeze a dependent variable during differentiation, or fail to calculate complex phase angles—and still be hailed as a top authority?
No! In theoretical depth, logical rigor, and error-detection integrity, modern academia has suffered a historic regression behind Newton's era.

[Scene 6: Why 95 Percent Garbage Survives — Intimidation of Error Detectors]
How on earth can ninety-five percent of published papers remain garbage for decades?
Because academic criticism has been systematically outlawed! If fearless, open scientific criticism were truly welcomed, could sub-undergraduate blunders survive fifty years? Never!
Listen to two mainstream confessions that confirm our indictment word for word.
First, in the October 16, 2018 New York Times report on the Harvard and Piero Anversa cardiac stem-cell scandal—forcing dozens of retractions—we read: "some scientists wondered how a questionable line of research persisted for so long... experts were just too timid to take a stand."
Second, in Nature, Volume 577, January 2020, editor Simine Vazire wrote in "A toast to the error detectors": "Last month, I got a private Twitter message from a postdoc bruised by the clash between science as it is and how it should be. He had published a commentary in which he pointed out errors in a famous researcher's paper. The critique was accurate, important and measured—a service to his field. But it caused him problems: his adviser told him that publishing the criticism had crossed a line, and he should never do it again."
When accurate, measured criticism of a famous researcher "crosses a line," science ceases to be science—it becomes an authoritarian guild protecting garbage!

[Scene 7: Public Media Censorship — What Academia Needs Most Is Incisive Criticism]
And do not imagine this suppression stays locked inside private peer-review systems. It now governs public scientific media as well!
What modern academia needs most today is incisive, uncompromising criticism. Yet look at our documented moderation logs on ScienceNet—one of China's premier public science platforms.
Four substantive blog essays are stamped with the red label "Failed Review"—literally blocked from public view:
Articles applying Wave Mechanics Theory to concrete microwave absorber design;
Essays warning that conflating first-principles mathematical logic with phenomenological curve fitting drags science back to medieval alchemy;
Articles quoting our Forensic Dissection of Carbon under the title "Modern Academia Needs This Kind of Incisive Academic Criticism"—blocked!
Even more revealing: posts and replies touching critiques or denials of relativity and quantum mechanics are stamped "Failed Review"—including our own essay defending quantum angular momentum against shallow classical orbital reductionism, and two replies asking whether Einstein's 1905 miracle-year papers passed peer review!
Even a reply explaining why institutional rejection letters from journals like Carbon are NOT shielded by individual privacy law, and a comment noting that "conformity never produces innovation; new ideas emerge by resisting mainstream thought," were BOTH blocked as "Failed Review"!
Stop and ask yourself the ultimate question of this series: What exactly is modern science protecting, and what is it suppressing?
It is protecting institutional authority, consensus orthodoxy, and the secrecy of erroneous peer review. And it is suppressing incisive mathematical criticism, first-principles problem-solving, and independent thought itself!

[Scene 8: Epilogue — The Tyranny of Popularity Metrics vs. Truth]
Finally, look at the cruel paradox governing our audience and digital algorithms today.
Papers promoting the mathematically invalid Impedance Matching Theory rack up hundreds of citations and endless grant money. Meanwhile, Substack essays and YouTube forensic videos that honestly expose the flaws and solve the physics attract only tiny audiences.
Worse still, platforms like YouTube—mirroring academic citation indices—determine a video's value purely by how many people click and watch!
Think about that! A statistical system that ignores substantive truth and worships only surface popularity numbers—whether SCI Impact Factors, citation counts, or YouTube view counts—cannot tell truth from mass delusion! Popularity algorithms will never guide genuine scientific progress.
Real science belongs to those willing to think independently, read primary equations, exercise incisive criticism, and defend mathematical truth even when standing completely alone.
Thank you for watching Part One of our Series Finale. In Part Two, we will close the series by addressing Xiaowei's questions in a direct Q&A self-examination. Until then, keep thinking rigorously.`;

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="forensic-dissection-finale-part1-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay GW &bull; Series Finale Part 1
          </span>
          <span className="bg-rose-100 text-rose-900 text-xs font-semibold px-3 py-1 rounded-full border border-rose-200">
            95%+ Garbage Thesis Audit &bull; Authority Worship &bull; Censorship &amp; Metrics Paradox
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Forensic Dissection Series Finale (Part 1): Why Over 95% of SCI Papers Are Garbage, Authority Worship, Public Censorship, and the Tyranny of Popularity Metrics
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          A rigorous eight-pillar epistemological audit of our forensic investigation, contrasting Newtonian theoretical standards with modern Cargo Cult Science and documented ScienceNet censorship, complete with an 8-Scene Digital Avatar Broadcast Script and 100% YouTube-Safe Description.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Forensic Dissection Series Finale Part 1
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-finale1")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-finale1" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-finale1" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-finale1")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-finale1" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-finale1" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
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
      {/* PART I: EIGHT-PILLAR SERIES CONCLUSION & SELF-AUDIT                        */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Scale className="w-6 h-6 text-rose-700" />
          <h2>Part I: Eight Pillars Closing the Forensic Dissection Series (Part 1)</h2>
        </div>

        {/* Point 1 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base">
            1. Putting Our Thesis on Trial: Is the 95%+ Garbage Claim Flawed, Extreme, or Incontrovertible?
          </h3>
          <p className="text-sm text-slate-700">
            The central thesis of this series&mdash;that 99.99% of microwave absorption papers and over 95% of SCI papers are garbage, and that modern science has entered an authoritarian Dark Age of Cargo Cult Science&mdash;will never be accepted by mainstream gatekeepers, who reflexively demand &ldquo;comprehensive statistical data.&rdquo; Yet when we audit our own methodology honestly (Are our arguments flawed? One-sided? Able to withstand scrutiny? Incisive? Credible?), the answer is decisive: every case study was drawn from flagship journals (<em>Carbon</em>, <em>Adv. Electron. Mater.</em>, <em>JCIS</em>, <em>JAP</em>, <em>J. Phys. D</em>, <em>Appl. Phys. A</em>, <em>ChemistrySelect</em>, <em>Crystallogr. Rev.</em>), backed by national grants, hundreds of citations, and lightning peer review&mdash;and every single one collapsed under basic mathematics. That proves systemic rot, not cherry-picking.
          </p>
        </div>

        {/* Point 2 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base">
            2. Catalog of Sub-Undergraduate Errors vs. Censorship of Real Science
          </h3>
          <p className="text-sm text-slate-700">
            Across Cases 1&ndash;8, authors, reviewers, and editors jointly ratified blunders no undergraduate should survive: publishing absorption research without knowing the definition of <em>RL</em>; confusing unidirectional traveling waves with standing waves; treating wave superposition as scalar energy subtraction; replacing <em>Z</em><sub>in</sub> with <em>Z</em><sub>M</sub> and interface <em>R</em><sub>M</sub> with film <em>RL</em>; and treating &varepsilon;<sub><em>r</em></sub> and &mu;<sub><em>r</em></sub> as functions of thickness <em>d</em> or freezing variables during differentiation. Meanwhile, mathematically rigorous <strong>Wave Mechanics Theory</strong> is rejected, and real scholars have their journal submission accounts revoked.
          </p>
        </div>

        {/* Point 3 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base">
            3. Authority Worship vs. Logic: The Nespolo Miller Index Double Standard
          </h3>
          <p className="text-sm text-slate-700">
            Because Nespolo was an established authority (<em>J. Appl. Cryst.</em> editor, IUCr commission founder), his convoluted redefinition of Miller indices&mdash;forcing non-coprime indices like (222) and violating the Law of Rational Indices&mdash;was immediately adopted into the IUCr Online Dictionary of Crystallography. Had an unknown scholar proposed that backward definition, it would have been rejected outright. Conversely, Wave Mechanics Theory&mdash;logically and mathematically airtight&mdash;remains ostracized because it lacks institutional patronage.
          </p>
        </div>

        {/* Point 4 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-700 shrink-0" />
            4. The Collapse of Review Articles: Where Is Even One Genuine Mainstream Review?
          </h3>
          <p className="text-sm text-slate-700">
            A review article exists to diagnose errors in prior research and deliver foundational insights. Yet inside an ecosystem flooded with 95%+ broken papers, mainstream &ldquo;review&rdquo; and &ldquo;perspective&rdquo; articles spot zero foundational flaws while glorifying impossible physics. Calling that &ldquo;scientific review&rdquo; is pure pseudoscience.
          </p>
        </div>

        {/* Point 5 */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <History className="w-4 h-4 text-amber-700 shrink-0" />
            5. Regression Since Isaac Newton&apos;s Era
          </h3>
          <p className="text-sm text-slate-700">
            Modern laboratories wield instruments Newton could never imagine, yet theoretically academia has regressed sharply. The elementary mathematical and conceptual errors passing flagship SCI peer review today could never have survived the theoretical standards and sharp error-detection scrutiny of Newton&apos;s scientific community.
          </p>
        </div>

        {/* Point 6 */}
        <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-xl space-y-3">
          <h3 className="font-sans font-bold text-amber-950 text-base flex items-center gap-2">
            <MessageSquareWarning className="w-4 h-4 text-amber-700 shrink-0" />
            6. How 95%+ Garbage Persists: Silencing Criticism &amp; Retaliating Against Error Detectors
          </h3>
          <p className="text-sm text-slate-800">
            If fearless academic criticism were permitted, 95%+ garbage could never exist. Mainstream records admit why fraud and error endure:
          </p>
          <blockquote className="bg-white p-3.5 rounded-lg border-l-4 border-amber-600 text-xs md:text-sm italic text-slate-700">
            &ldquo;...some scientists wondered how a questionable line of research persisted for so long &hellip; experts were just too timid to take a stand.&rdquo; &mdash; <em>New York Times</em> (16 Oct 2018, Harvard / Anversa retractions)
          </blockquote>
          <blockquote className="bg-white p-3.5 rounded-lg border-l-4 border-rose-600 text-xs md:text-sm italic text-slate-700">
            &ldquo;Last month, I got a private Twitter message from a postdoc bruised by the clash between science as it is and how it should be. He had published a commentary in which he pointed out errors in a famous researcher&rsquo;s paper. The critique was accurate, important and measured &mdash; a service to his field. But it caused him problems: his adviser told him that publishing the criticism had crossed a line, and he should never do it again.&rdquo; &mdash; S. Vazire, &ldquo;A toast to the error detectors,&rdquo; <em>Nature</em> 577(7788), 9 (2020)
          </blockquote>
        </div>

        {/* Point 7 -> Metrics Paradox, Point 8 -> Public Censorship */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-slate-700 shrink-0" />
            7. The Metrics Paradox: Citations &amp; YouTube Views vs. Substantive Truth
          </h3>
          <p className="text-sm text-slate-700">
            Flawed Impedance Matching papers attract hundreds of citations, while rigorous Substack articles and YouTube forensic videos exposing the truth attract tiny audiences. Both academia (citations/Impact Factor) and YouTube (view counts/clicks) measure value by superficial popularity metrics while ignoring substance. Popularity statistics can never guide real scientific progress.
          </p>
        </div>

        {/* Point 8 */}
        <div className="bg-rose-50/70 border border-rose-200 p-5 rounded-xl space-y-4">
          <h3 className="font-sans font-bold text-rose-950 text-base flex items-center gap-2">
            <Lock className="w-4 h-4 text-rose-700 shrink-0" />
            8. What Modern Academia Needs Most Is Incisive Criticism: Public Media Censorship &amp; What Science Is Protecting vs. Suppressing
          </h3>
          <p className="text-sm text-slate-800">
            Suppression is no longer confined to closed journal peer review; it operates openly across public scientific platforms. Documented ScienceNet (科学网) moderation logs show that posts solving real physical problems and calling for sharp critique are systematically stamped <strong>&ldquo;Failed Review&rdquo; (审核未通过)</strong>:
          </p>
          <ul className="list-disc pl-5 text-sm text-slate-800 space-y-1.5">
            <li>
              <strong>Problem-solving Wave Mechanics Theory blocked:</strong> Articles presenting concrete absorber design via Wave Mechanics Theory (<em>回答小微（微信AI）的自问自答（4）</em>), warning against regression into medieval alchemy, and calling for incisive critique (<em>现代学术界需要这种尖锐的学术评论</em>) were all stamped <strong>审核未通过</strong>.
            </li>
            <li>
              <strong>Relativity &amp; Quantum Mechanics discussions blocked:</strong> Posts and replies concerning critiques or denials of relativity and quantum mechanics&mdash;even Dr. Liu&apos;s essay defending quantum angular momentum against shallow classical orbital reductionism (<em>经典机械论的浅薄 vs. 量子角动量</em>) and comments on Einstein&apos;s 1905 papers (<code>[547]</code>, <code>[548]</code>)&mdash;were stamped <strong>审核未通过</strong>.
            </li>
            <li>
              <strong>Peer-review transparency &amp; anti-conformity blocked:</strong> Reply <code>[550]</code> explaining why erroneous institutional rejection letters (e.g., <em>Carbon</em>) are not protected by individual privacy law, reply <code>[549]</code> reviewing mainstream SCI physics articles, and even comment <code>[3]/[551]</code> stating that <em>&ldquo;conformity never yields innovation; new ideas emerge from resisting mainstream thought&rdquo;</em> were all blocked.
            </li>
          </ul>
          <p className="text-sm font-bold text-rose-950">
            Core Indictment: What is the modern scientific establishment protecting (institutional authority, consensus conformity, and hidden peer-review blunders), and what is it suppressing (incisive academic criticism, Wave Mechanics problem-solving, and independent thought)?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <figure className="bg-white p-2.5 rounded-lg border border-rose-200 space-y-1.5">
              <img
                src="/assets/aistudio/image_be954c5d.png"
                alt="ScienceNet blog moderation log showing Wave Mechanics Theory, anti-alchemy, quantum angular momentum, and sharp criticism articles stamped Failed Review"
                className="w-full rounded border border-slate-200 object-contain"
              />
              <figcaption className="text-xs text-slate-600 font-sans">
                Exhibit A: ScienceNet posts on Wave Mechanics, quantum angular momentum vs. classical reductionism, and incisive criticism stamped <strong>审核未通过</strong>.
              </figcaption>
            </figure>
            <figure className="bg-white p-2.5 rounded-lg border border-rose-200 space-y-1.5">
              <img
                src="/assets/aistudio/image_6b83128a.png"
                alt="ScienceNet comments log [547]-[551] stamped Failed Review"
                className="w-full rounded border border-slate-200 object-contain"
              />
              <figcaption className="text-xs text-slate-600 font-sans">
                Exhibit B: Comments <code>[547]&ndash;[551]</code> (including Einstein&apos;s 1905 peer review, <em>Carbon</em> rejection privacy, and mainstream SCI physics reviews) stamped <strong>审核未通过</strong>.
              </figcaption>
            </figure>
            <figure className="bg-white p-2.5 rounded-lg border border-rose-200 space-y-1.5">
              <img
                src="/assets/aistudio/image_e97819c7.png"
                alt="Blocked ScienceNet comment [3]/[551] on conformity vs innovation"
                className="w-full rounded border border-slate-200 object-contain"
              />
              <figcaption className="text-xs text-slate-600 font-sans">
                Exhibit C: Blocked comment <code>[3]/[551]</code>: &ldquo;Conformity never yields innovation; new ideas emerge from resisting mainstream orthodoxy.&rdquo;
              </figcaption>
            </figure>
            <figure className="bg-white p-2.5 rounded-lg border border-rose-200 space-y-1.5">
              <img
                src="/assets/aistudio/image_4b7bc011.png"
                alt="Reply [550] on privacy law vs institutional rejection letters and [1]/[549] on error-correction difficulty"
                className="w-full rounded border border-slate-200 object-contain"
              />
              <figcaption className="text-xs text-slate-600 font-sans">
                Exhibit D: Blocked reply <code>[550]</code> arguing institutional rejection errors fall outside personal privacy law, alongside NYT and Vazire (<em>Nature</em> 2020) citations.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 8-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-rose-700" />
            <h2>Part II: Complete 8-Scene Digital Avatar Broadcast Script (~15.5 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-finale1-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-finale1-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-finale1-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
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
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-finale1-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-finale1-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-finale1-bottom" ? "Copied!" : "Copy Clean Description"}
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
          Forensic Dissection Series &bull; Finale Part 1 &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            95%+ Thesis Audit
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Error Detectors Silenced
          </span>
          <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md font-semibold">
            Metrics vs. Truth
          </span>
        </div>
      </div>
    </article>
  );
}
