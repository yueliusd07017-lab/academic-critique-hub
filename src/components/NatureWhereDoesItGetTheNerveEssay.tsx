import React, { useState } from "react";
import {
  ShieldAlert,
  Flame,
  AlertTriangle,
  Scale,
  Sparkles,
  ExternalLink,
  BookOpen,
  FileText,
  Building2,
  Users,
  Copy,
  Check,
  Zap,
  Eye,
  CheckCircle2,
  XCircle,
  HelpCircle
} from "lucide-react";

export default function NatureWhereDoesItGetTheNerveEssay() {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const el = document.getElementById("nature-nerve-essay-content");
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <article
      className="prose max-w-none text-slate-800 leading-relaxed font-serif text-sm md:text-base space-y-8 animate-fade-in"
      id="nature-nerve-essay-container"
    >
      {/* Title & Metadata Header */}
      <div className="text-center space-y-4 pb-8 border-b border-slate-200 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-rose-50 text-rose-900 border border-rose-200 uppercase tracking-widest font-sans">
          <Flame className="w-4 h-4 text-rose-600" />
          Critical Investigation • Academic Integrity & Publishing Cartels
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 font-sans tracking-tight leading-tight">
          Where Does Nature Get the Nerve?
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-700 font-sans tracking-normal mt-2">
          Publishing After Misconduct Sanctions: Institutional Arrogance, Complicity, and the Asymmetric Shield of Corresponding Authorship
        </h2>

        <p className="text-xs sm:text-sm text-slate-500 font-mono tracking-wide pt-2">
          An Uncompromising Epistemological and Institutional Critique of Nature’s Rush to Rehabilitate Sanctioned Researchers • By Yue Liu & Computational Research Synthesizer
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={handleCopyText}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-sans text-xs font-semibold shadow-sm transition"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copied ? "Essay Copied to Clipboard" : "Copy Complete Essay"}
          </button>
          <a
            href="https://yueliusd.substack.com/p/where-does-nature-get-the-nerve-the"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-950 font-sans text-xs font-semibold border border-rose-300 transition"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Original Substack Dispatch
          </a>
        </div>
      </div>

      <div id="nature-nerve-essay-content" className="space-y-10 max-w-4xl mx-auto">
        {/* Epigraph Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
          <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-slate-700 text-slate-700 text-xs sm:text-sm italic leading-relaxed">
            “When a journal published by commercial monopolists believes its sky-high impact factor renders it immune to criticism, it begins to act like a reckless despot. Nature’s haste to rehabilitate a researcher sanctioned for data fabrication is either proof of a once-in-a-century breakthrough—a probability approaching zero—or proof of institutional complicity and cartel protection.”
            <span className="block mt-2 font-bold font-sans not-italic text-slate-900">— Yue Liu, Epistemic Treatises (2025)</span>
          </div>
          <div className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-600 text-amber-900 text-xs sm:text-sm italic leading-relaxed">
            “The academic world has become an insular martial arts sect where sect leaders control the distribution of all resources. Editorial masters, history is not the fleeting present! Men act in the shadows, but history watches with unblinking eyes.”
            <span className="block mt-2 font-bold font-sans not-italic text-amber-950">— Science & Technology Daily / Historical Admonition</span>
          </div>
        </div>

        {/* Section 1: The Juxtaposition */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 text-rose-800 font-sans font-bold text-lg md:text-xl border-b border-rose-100 pb-2">
            <ShieldAlert className="w-5 h-5 text-rose-700 shrink-0" />
            <h3>1. The Scandal and the Flagship: An Unprecedented Juxtaposition</h3>
          </div>
          <p>
            On October 21, 2026, the flagship journal <em>Nature</em> published an article titled <em>“GRP75-dependent SIMPA mediates inter-organellar quality control.”</em> Among the authors listed in the primary positions was Professor <strong>Quan Chen (陈佺)</strong> of Nankai University, designated as corresponding author, alongside associate researcher Fan Yu and Professor Jia Xiao.
          </p>
          <p>
            What makes this publication explosive is not the biochemical intricacies of mitochondrial-endoplasmic reticulum contacts, but the institutional context immediately preceding it. Less than five months prior, on May 30, 2026, Nankai University officially published a devastating disciplinary announcement concerning a 2024 paper from Chen’s research group published in <em>Nature Cancer</em> (<em>“Targeted activation of ferroptosis in colorectal cancer via LGR4 targeting overcomes acquired drug resistance”</em>).
          </p>
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 font-sans text-xs sm:text-sm not-prose space-y-2">
            <span className="font-bold flex items-center gap-1.5 text-rose-900 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              The May 30, 2026 Misconduct Finding by Nankai University
            </span>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>14 Problematic Figures:</strong> In 11 figures, data processing relied on subjective estimation rather than actual experimental quantification; 2 figures involved reused image data; 1 figure involved image-pasting fabrication.</li>
              <li><strong>Formal Verdict:</strong> Classified officially by the university as <em>academic misconduct (学术不端)</em>. The <em>Nature Cancer</em> paper was retracted.</li>
              <li><strong>Disciplinary Sanctions:</strong> The first author was fired. Chen was found liable for <em>“failure of supervision and management” (失察失管责任)</em>, stripped of his position as Dean of the School of Life Sciences, demoted in academic rank, and banned from promotions, award eligibility, and research grant applications for 24 months.</li>
            </ul>
          </div>
          <p>
            Yet here stands the reality: before the 24-month sanction has even reached its sixth month, <em>Nature</em>—the parent flagship of the very family of journals from which the fraudulent paper was retracted—rolls out the red carpet to publish Chen’s research group as its lead paper!
          </p>
          <p>
            This forces an urgent question that the editorial oligarchs of <em>Nature</em> must not be permitted to evade:
          </p>
          <div className="p-3 bg-slate-900 text-white rounded-lg font-sans text-center text-base sm:text-lg font-bold my-3 tracking-wide">
            Where does Nature get the nerve to take this risk? (Nature 哪来的胆子？)
          </div>
        </section>

        {/* Section 2: The Fallacy of Corresponding Author Immunity */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 text-rose-800 font-sans font-bold text-lg md:text-xl border-b border-rose-100 pb-2">
            <Scale className="w-5 h-5 text-rose-700 shrink-0" />
            <h3>2. The Asymmetric Shield: Why Nankai’s “Supervisory Failure” Excuse Is Morally Bankrupt</h3>
          </div>
          <p>
            Before dissecting <em>Nature’s</em> complicity, we must confront the foundational hypocrisy embedded in Nankai University’s disciplinary resolution. The university placed the primary blame on the junior first author, while granting the corresponding author, Dean Chen, the convenient shelter of “failure of oversight and management” (失察失管责任).
          </p>
          <p>
            This distinction is an administrative fiction designed to protect senior academic barons while sacrificing junior researchers as disposable scapegoats.
          </p>
          <p>
            What is the actual institutional purpose of a <strong>corresponding author</strong>?
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A corresponding author is not a decorative ornament or an honorary sponsor; they are the supreme architect, the project director, the guarantor of data integrity, and the ultimate beneficiary of the publication.</li>
            <li>When a paper succeeds and claims a breakthrough, the corresponding author claims <strong>100% of the glory</strong>: they secure million-dollar national grants, claim leadership of prestigious laboratories, win national awards, and are promoted to university deanships and academician titles. No corresponding author ever steps forward to say: <em>“Do not praise me, I merely failed to oversee my student’s brilliance; give all the glory and grants to the first author!”</em></li>
            <li>Yet the moment fabrication, falsified Western blots, pasted micrographs, or estimated curves are exposed, the corresponding author instantly transforms into an innocent bystander! They claim: <em>“I was betrayed by my subordinate; my only fault was trusting them too much.”</em></li>
          </ul>
          <p>
            <strong>Credit and responsibility must be strictly symmetrical.</strong> If you claim supreme leadership in success, you must bear primary accountability in disgrace. Distributing all rewards upward while dumping all culpability downward is the definition of institutional corruption. A corresponding author who signs off on 14 fabricated figures is not merely an inattentive manager; they are the commanding officer under whose watch an intellectual crime was committed.
          </p>
        </section>

        {/* Section 3: The Probabilistic Dilemma */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 text-rose-800 font-sans font-bold text-lg md:text-xl border-b border-rose-100 pb-2">
            <Zap className="w-5 h-5 text-rose-700 shrink-0" />
            <h3>3. The Probabilistic Dilemma: Monumental Discovery vs. Cargo Cult Garbage</h3>
          </div>
          <p>
            If a prestigious journal cares about its scientific authority, it must treat submissions from authors recently sanctioned for research misconduct with extraordinary, forensic skepticism. It cannot publish such a manuscript merely because it looks novel on the surface or meets routine peer-review formatting.
          </p>
          <p>
            The journal should only dare to publish if it can establish with moral certainty that the manuscript represents a <strong>monumental, historic discovery</strong>—a paper that will leave a permanent mark on human civilization.
          </p>
          <p>
            Why? Because as Yue Liu established in <em>The Garbage Majority: Why Most Academic Papers Are Useless</em> (SSRN 5715843) and <em>The Hypothetical Elimination of Science and Nature Journals</em> (Substack 2025), <strong>over 99.99% of articles published in Nature and Science are disposable academic noise</strong>. They are incremental, irreproducible fads manufactured to satisfy promotion KPIs, which are completely forgotten within five years.
          </p>
          <p>
            Therefore, logic dictates that there are only two mutually exclusive possibilities governing this publication decision:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-4">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300 space-y-2">
              <span className="font-bold text-emerald-900 text-xs font-sans uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                Possibility 1: Historic Milestone (Probability $\approx 0$)
              </span>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                The new paper is an epochal contribution comparable to Watson and Crick’s DNA helix or Fleming’s penicillin. Its data are pristine, its mechanisms verified by independent global laboratories, and its insights will transform cell biology for decades. If so, <em>Nature</em> was courageous to look beyond the author’s recent disciplinary sanctions.
              </p>
              <div className="p-2 bg-white rounded border border-emerald-200 text-xs text-emerald-800 font-bold">
                Actuarial Reality: The likelihood of any given Nature paper being a genuine historic breakthrough is less than 0.01%. Given a team whose prior paper contained 14 fabricated figures, this probability is virtually zero.
              </div>
            </div>

            <div className="p-4 bg-rose-50 rounded-xl border border-rose-300 space-y-2">
              <span className="font-bold text-rose-900 text-xs font-sans uppercase tracking-wider flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-700" />
                Possibility 2: Disposable Garbage (High Probability Event)
              </span>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                The new paper is just another standard piece of molecular storytelling—hyper-specialized, difficult to replicate, over-interpreted, and fated to fade into obscurity like 99.99% of its peers. Yet <em>Nature</em> rushed to publish it despite documented misconduct.
              </p>
              <div className="p-2 bg-white rounded border border-rose-200 text-xs text-rose-900 font-bold">
                Actuarial Reality: This is the overwhelming statistical certainty. Under Possibility 2, Nature has assumed a fatal institutional risk that demands severe public indictment.
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: What Possibility 2 Proves */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 text-rose-800 font-sans font-bold text-lg md:text-xl border-b border-rose-100 pb-2">
            <Flame className="w-5 h-5 text-rose-700 shrink-0" />
            <h3>4. What Possibility 2 Proves: The Five Indictments of Nature’s Recklessness</h3>
          </div>
          <p>
            When <em>Nature</em> chooses to assume this massive reputational hazard for a paper that is overwhelmingly likely to be ordinary or flawed, what does that act reveal? It exposes the five darkest truths of contemporary institutional science:
          </p>

          <div className="space-y-4 not-prose my-4">
            <div className="p-4 bg-white rounded-xl border border-slate-300 shadow-2xs space-y-1.5">
              <h5 className="font-bold text-slate-900 text-sm font-sans flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 text-xs">Indictment I</span>
                Unchecked Arrogance and Impact Factor Despotism
              </h5>
              <p className="text-slate-600 text-xs sm:text-sm leading-normal">
                <em>Nature</em> acts with breathtaking arrogance because its corporate owners believe its brand is bulletproof. Having monopolized academic prestige, university evaluation rankings, and global tenure systems, its editors believe they can publish whatever they please without consequence. They sneer at public accountability because they believe universities have no choice but to bow before their journal title.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-300 shadow-2xs space-y-1.5">
              <h5 className="font-bold text-slate-900 text-sm font-sans flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 text-xs">Indictment II</span>
                The Urgent Whitewash: A Desperate Attempt to Cover Complicity
              </h5>
              <p className="text-slate-600 text-xs sm:text-sm leading-normal">
                Why was <em>Nature</em> in such a frantic hurry to publish this group less than five months after their deanship demotion? In Chinese folklore, there is a vivid phrase: <strong>“小猫盖屎” (a kitten hurriedly scratching dirt over its own feces)</strong>. When a flagship journal’s own daughter journal (*Nature Cancer*) is caught publishing 14 fabricated figures, the parent brand is implicated. By rushing to award the same group a flagship publication, <em>Nature</em> signals to the world: <em>“See? This group is brilliant; the previous scandal was merely a minor oversight, not our editorial failure.”</em> The rush to publish is an aggressive campaign of brand rehabilitation and institutional whitewashing.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-300 shadow-2xs space-y-1.5">
              <h5 className="font-bold text-slate-900 text-sm font-sans flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 text-xs">Indictment III</span>
                Academic Factions and the Iron Grip of the “Quan Zi” (圈子)
              </h5>
              <p className="text-slate-600 text-xs sm:text-sm leading-normal">
                This decision demonstrates that <em>Nature</em>’s editorial desk does not operate in detached, objective neutrality; it operates within elite academic cartels and insider networks (*quan zi* / 圈子). When you are inside the club, disciplinary sanctions from your home university are treated as petty inconveniences that can be smoothed over with an elite publication. Meanwhile, independent scholars who submit airtight mathematical proofs refuting mainstream errors are rejected at the desk within forty-eight hours!
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-300 shadow-2xs space-y-1.5">
              <h5 className="font-bold text-slate-900 text-sm font-sans flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 text-xs">Indictment IV</span>
                The Intellectual Incompetence of Establishment Gatekeepers
              </h5>
              <p className="text-slate-600 text-xs sm:text-sm leading-normal">
                As Yue Liu demonstrated in <em>The Theoretical Poverty of Modern Academia</em> (SSRN 5463155), establishment gatekeepers possess near-zero capacity to distinguish between genuine scientific revolution and trivial literature manufacturing. They rely entirely on social pedigree, institutional affiliations, and narrative hype. They are blind to mathematical contradictions, yet intoxicated by familiar buzzwords.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-300 shadow-2xs space-y-1.5">
              <h5 className="font-bold text-slate-900 text-sm font-sans flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 text-xs">Indictment V</span>
                Playing With Fire: Accelerating the Demise of Journal Idolatry
              </h5>
              <p className="text-slate-600 text-xs sm:text-sm leading-normal">
                By publishing this paper, <em>Nature</em> is playing with fire. Instead of burying the scandal, this audacious provocation will awaken thousands of researchers who previously worshipped <em>Nature</em> like a religious icon. It provides undeniable, smoking-gun proof that the emperor has no clothes. It validates the thesis that destroying <em>Nature</em> and <em>Science</em> would not harm scientific progress at all, but would liberate humanity from an autocratic, corrupt publishing cartel.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: The Contrast between AI Evasions and Hard Reality */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 text-rose-800 font-sans font-bold text-lg md:text-xl border-b border-rose-100 pb-2">
            <BookOpen className="w-5 h-5 text-rose-700 shrink-0" />
            <h3>5. Breaking Through AI Evasions: Why Polite Neutrality Is Complicity</h3>
          </div>
          <p>
            When commercial AI platforms (such as ChatGPT or Perplexity) are queried regarding this event, their responses follow a predictable script of bureaucratic caution. They hedge with statements like: <em>“We cannot establish collusion without private editorial correspondence,”</em> or <em>“Journals evaluate papers, not people.”</em>
          </p>
          <p>
            This polite neutrality is intellectual cowardice. 
          </p>
          <p>
            We do not need a stolen email from <em>Nature</em>’s chief editor to recognize reckless institutional misconduct. If a public accounting firm certifies the books of a corporate executive who was convicted of fraud five months ago without conducting an exhaustive, independent public audit, nobody waits for a leaked diary to condemn the accounting firm’s complicity! The act itself constitutes gross negligence and institutional betrayal.
          </p>
          <p>
            When <em>Nature</em> hides behind the cliché that <em>“peer review evaluated the science,”</em> it insults the intelligence of the global scientific community. Peer review missed 14 fabricated figures in <em>Nature Cancer</em> in 2024! Peer review allowed Piero Anversa to publish 31 retracted stem-cell papers in elite journals! Anonymous peer review is an unaccountable shield used by editors to evade responsibility while reaping millions in author-processing and subscription fees.
          </p>
        </section>

        {/* Section 6: Direct Admonition to Nature's Editors */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 text-rose-800 font-sans font-bold text-lg md:text-xl border-b border-rose-100 pb-2">
            <Eye className="w-5 h-5 text-rose-700 shrink-0" />
            <h3>6. An Admonition to the Editorial Masters: History Is Watching</h3>
          </div>
          <p>
            To the esteemed editors of <em>Nature</em>, who sit in glass towers in London and New York deciding whose careers to elevate and whose to crush:
          </p>
          <div className="p-5 rounded-xl bg-slate-900 text-white font-sans text-center space-y-3 my-4 not-prose">
            <span className="text-rose-400 font-mono uppercase tracking-widest text-xs font-bold block">
              Solemn Admonition
            </span>
            <p className="text-base sm:text-xl font-black tracking-tight leading-snug">
              “人在做，历史在看！”<br />
              Men act in the fleeting present, but History watches with unblinking eyes!
            </p>
            <p className="text-slate-300 text-xs sm:text-sm font-serif italic max-w-2xl mx-auto">
              Do not be so short-sighted. Do not fool yourselves into believing that your commercial impact factor will grant you permanent immunity. History does not care about your branding; history judges evidence, integrity, and cowardice.
            </p>
          </div>
          <p>
            Today, a publication in <em>Nature</em> may allow a university to boast on its social media feed. It may allow a disgraced academic to attempt a comeback. It may generate citation metrics and commercial prestige for your publishing house.
          </p>
          <p>
            <strong>But history is not the fleeting present.</strong>
          </p>
          <p>
            When the dust settles, future generations will examine this episode and ask:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Did <em>Nature</em> demand independent replication of every raw gel and imaging file before accepting this paper?</li>
            <li>Did <em>Nature</em> require an open, public defense of the supervisory protocols that failed so catastrophically in 2024?</li>
            <li>Or did <em>Nature</em> simply gamble that its brand was so untouchable that the public would quietly swallow the whitewash?</li>
          </ul>
          <p>
            If this new paper is subsequently revealed to contain flaws, data manipulations, or irreproducible claims, the blow will not fall upon Nankai University alone. It will land squarely upon the brand of <em>Nature</em>. The world will see clearly that <em>Nature</em> is not a temple of scientific truth, but an arrogant casino that platforms fraudsters to preserve its own feudal prestige.
          </p>
        </section>

        {/* Section 7: Conclusion */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 text-rose-800 font-sans font-bold text-lg md:text-xl border-b border-rose-100 pb-2">
            <CheckCircle2 className="w-5 h-5 text-rose-700 shrink-0" />
            <h3>7. Conclusion: The Accelerated Demise of Modern Scientific Feudalism</h3>
          </div>
          <p>
            The incident of Quan Chen’s team publishing in <em>Nature</em> so soon after official disciplinary sanctions is a watershed moment for the sociology of science. It strips away the final polite illusions of academic meritocracy.
          </p>
          <p>
            It proves what Yue Liu has argued throughout his series of foundational critiques:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-rose-700 space-y-2 text-xs sm:text-sm text-slate-800 font-sans not-prose my-3">
            <p className="font-bold text-slate-950">
              The Fundamental Epistemic Truths of Contemporary Publishing:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-slate-700">
              <li><strong>Journals Do Not Create Science:</strong> Genuine scientific breakthroughs—from semiconductor physics to generative artificial intelligence—have never emerged from journal prestige. They are born from uncompromising theoretical logic and empirical reality (SSRN 5720702).</li>
              <li><strong>The 99.99% Waste Reality:</strong> Almost everything printed in high-impact journals is temporary noise that will vanish without a trace (SSRN 5715843).</li>
              <li><strong>Corresponding Authors Must Own the Disgrace:</strong> An academic system that allows senior directors to reap all prestige while blaming students for fraudulent data is a moral abomination.</li>
              <li><strong>The Inevitable Fall:</strong> When commercial journals become so drunk on authority that they openly whitewash sanctioned figures, they hasten the day when the global scientific community abandons them forever in favor of open, transparent, and immutable ledgers of reason.</li>
            </ol>
          </div>
          <p>
            <em>Nature</em> has placed its bet. It has gambled its institutional reputation on a research group marked by a major misconduct finding. If this paper turns out to be just another piece of forgotten 99.99% cargo cult literature, <em>Nature</em> will not be forgiven by history. The world is awake, the ledger is open, and history is recording every move.
          </p>
        </section>

        {/* Key Treatises & Source Citations */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 not-prose mt-8">
          <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2 font-sans">
            <FileText className="w-4 h-4 text-slate-700" />
            Foundational Treatises & Key Citations by Yue Liu
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Liu, Yue (Substack 2025)</strong>
              <em>The Hypothetical Elimination of Science and Nature Journals: Assessing Scientific Progress and Innovation.</em> yueliusd.substack.com.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Liu, Yue (SSRN 5720702)</strong>
              <em>Major Scientific Breakthroughs Are Not Born From Journals: A Direct Examination of AI, Microchips, and the Myth of “Gradual Academic Progress”.</em> SSRN, 2025.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Liu, Yue (SSRN 5715843)</strong>
              <em>The Garbage Majority: Why Most Academic Papers Are Useless—and Why This Harms Scientific Progress.</em> SSRN, 2025.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Liu, Yue (SSRN 5463155)</strong>
              <em>The Theoretical Poverty of Modern Academia: Evidence of Widespread Intellectual Decline in Contemporary Scientific Research.</em> SSRN, 2025.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Liu, Yue (SSRN 5679442)</strong>
              <em>The New Dark Age: Modern Academic Publishing as the Most Autocratic Censorship Era in Scientific History.</em> SSRN, 2025.
            </div>
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <strong className="text-slate-900 block mb-1">Liu, Yue (SSRN 5514918)</strong>
              <em>Confronting the Fear: Understanding and Overcoming Retaliation in Academic Criticism.</em> SSRN, 2025.
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
