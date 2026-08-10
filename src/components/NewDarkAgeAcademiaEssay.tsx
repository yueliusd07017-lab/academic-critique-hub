import React from "react";
import { Brain, ShieldAlert, Zap, AlertTriangle, FileText, ExternalLink, CheckCircle2, Lock, Flame, Award, Globe } from "lucide-react";

export default function NewDarkAgeAcademiaEssay() {
  return (
    <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="newdarkageacademia-article-text">
      
      {/* Header Banner */}
      <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-rose-650 bg-rose-50 px-2.5 py-1 rounded">
          Essay EB • Epistemological Treatise on Academic Degeneration & Institutional Dark Ages
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
          The New Dark Age of Academia: <br />
          <span className="text-xl md:text-2xl font-medium text-rose-800 block mt-2">
            Why Modern Science Is Terminally Ill, Incapable of Self-Correction, and Practicing Cargo Cult Science
          </span>
        </h1>
        <p className="text-sm text-gray-400 font-mono">
          By Dr. Yue Liu, Dr. Ying Liu, & Prof. Michael G. B. Drew • August 2026
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-rose-900 bg-rose-50 px-3 py-1.5 rounded border border-rose-100 font-sans font-semibold">
          <span>第六十九讲：现代科学界为何病入膏肓：避坑避事、学术游戏与“伽利略存在不等于中世纪不黑暗”的终极审判</span>
          <a
            href="https://yueliusd.substack.com/p/the-new-dark-age-of-academia-why"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-rose-700 hover:text-rose-955 underline font-mono ml-2"
          >
            Substack Essay <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Top 1% O-DataMap Badge */}
      <div className="max-w-3xl mx-auto my-4 bg-emerald-950 text-emerald-100 p-4 rounded-xl border border-emerald-800 flex items-center gap-4 shadow-md font-sans">
        <Award className="w-8 h-8 text-emerald-400 shrink-0" />
        <div className="space-y-1 text-xs md:text-sm">
          <div className="font-bold text-emerald-300 font-mono uppercase tracking-wider">
            O-DataMap Civilizational Recognition (Top 1%)
          </div>
          <p className="text-emerald-100 font-serif leading-relaxed italic">
            "Your unwavering career work corrects longstanding critical errors in microwave absorption film research to reset the field... Your most significant work ranks in the <strong>top 1% of human civilization</strong>, acting as a powerful engine for global innovation."
          </p>
        </div>
      </div>

      {/* Abstract & Executive Epistemological Thesis */}
      <div className="max-w-3xl mx-auto my-6 bg-slate-900 text-slate-100 p-5 rounded-xl space-y-4 shadow-inner border border-slate-800 font-mono text-xs md:text-sm">
        <div className="flex items-center gap-2 text-rose-400 border-b border-slate-800 pb-2">
          <Brain className="w-4 h-4 text-rose-400 shrink-0" />
          <span className="font-bold uppercase tracking-wider">Abstract & Executive Epistemological Thesis</span>
        </div>
        <p className="text-slate-300 font-serif text-xs leading-relaxed">
          Modern academia presents itself as an enlightened, self-correcting enterprise. In reality, it has degenerated into the most autocratic censorship era in scientific history. Overturning a half-century-old dominant theory using elementary 1+1=2 wave superposition logic should command world attention. Instead, mainstream journals suppress dissenting manuscripts, delete accounts, and flood SCI databases with thousands of disproven impedance-matching articles. Direct email outreach to thousands of professors and specialists yielded deafening silence—not because they failed to see the proof, but because researchers actively refuse to enter "troubled waters" (是非之地). When career survival depends strictly on paper counts, citation games, and institutional funding, truth is abandoned. The counter-argument that "some real scientists still exist today" is mathematically irrelevant: <strong>Galileo existed in the 17th century, but Galileo's existence did not make the Middle Ages any less dark.</strong> Modern academia is terminally ill, practicing ritualistic Cargo Cult Science while over 95% of SCI papers are useless academic garbage.
        </p>
      </div>

      {/* Section 1: The Attention Paradox */}
      <div className="space-y-4 text-left pt-2">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">I.</span> The Attention Paradox: Overturning 50 Years of Orthodoxy Met With Institutional Silence
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">一、关注度悖论：颠覆半世纪传统被封杀与屏蔽</span>
        </h3>
        <p>
          If a scientific work overturns a theoretical framework that has dominated a field for more than half a century, it represents a momentous breakthrough. Such an achievement ought to command publication in top-tier journals like <em>Science</em> and <em>Nature</em>, as well as general specialist journals and preprint archives. The fact that top journals refuse to publish such work while printing thousands of flawed papers highlights the complete collapse of quality control.
        </p>
        <p>
          In microwave absorption, our wave-mechanics theory established with <strong>1 + 1 = 2</strong> logical necessity that the conventional impedance-matching framework (Z<sub>in</sub> = Z<sub>0</sub>) is physically erroneous. Yet mainstream academia continuously suppresses wave mechanics, revokes platform accounts, and publishes vast numbers of impedance-matching articles that completely ignore published refutations.
        </p>
      </div>

      {/* Section 2: The Empirical Proof of Avoidance */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">II.</span> The Empirical Proof of Avoidance: Ignored Outreach & Funding Distortion
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">二、不可辩驳的回避证据：巨量邮件石沉大海与经费逆淘汰</span>
        </h3>
        <p>
          Because mainstream journals actively suppress wave mechanics and grant agencies lavish funding on disproven impedance-matching projects while denying funding to wave-mechanics researchers, traditional conference presentation was blocked by financial starvation.
        </p>
        <p>
          To bridge this artificial divide, Dr. Yue Liu conducted a massive direct email campaign—contacting thousands of microwave absorption specialists, non-specialist materials researchers, and leading physics professors worldwide, clearly presenting the published wave-mechanics proofs and inviting open debate.
        </p>
        <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-3 font-mono text-xs md:text-sm my-3 border border-slate-800">
          <div className="text-rose-400 font-bold uppercase text-xs flex items-center gap-2 border-b border-slate-800 pb-1.5">
            <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
            The Empirical Verdict of the Ignored Emails:
          </div>
          <ul className="space-y-2 font-serif text-xs text-slate-300 leading-relaxed list-disc pl-5">
            <li>
              <strong>Massive Silence Is Not Ignorance:</strong> The near-total lack of email replies from thousands of academics does not mean they did not receive or understand the material. It proves that researchers <strong>actively refuse to touch a controversial truth</strong> (不敢涉足是非之地).
            </li>
            <li>
              <strong>Institutional Cowardice:</strong> Scholars recognize that acknowledging wave mechanics threatens their own funding, relationships with journal editors, and previous publications built on impedance matching.
            </li>
            <li>
              <strong>Public Searchability Ignored:</strong> Even though wave mechanics is extensively available on Substack, SSRN, and YouTube, academics intentionally avert their eyes to preserve their professional safety.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 3: The Root Cause */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">III.</span> The Root Cause: Paper-Centric Academia & The Punishment of Error Detectors
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">三、病态根源：以发文章为最高目标的学术游戏与纠错机制惩罚</span>
        </h3>
        <p>
          Why is modern academia terminally ill? Because publishing papers and acquiring grants have replaced the search for physical truth as the primary objective of scientific life (Y. Liu, <em>From Academic Research to Academic Games</em>, SSRN 5684424).
        </p>
        <p>
          Two famous real-world documented cases prove that modern academia actively suppresses error detection:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 font-mono text-xs">
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2">
            <div className="font-bold text-rose-950 font-sans flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0" />
              1. Harvard Cardiology Retraction Scandal (NYT, 2018)
            </div>
            <p className="font-serif text-xs text-slate-800 leading-relaxed">
              When decades of fabricated stem cell research were exposed, experts admitted that questionable research persisted for so long simply because <em>"experts were just too timid to take a stand."</em>
            </p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="font-bold text-slate-900 font-sans flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-slate-700 shrink-0" />
              2. Simine Vazire: "A Toast to the Error Detectors" (Nature, 2020)
            </div>
            <p className="font-serif text-xs text-slate-800 leading-relaxed">
              A postdoc published an accurate commentary correcting a famous scholar's paper. Rather than praise, his advisor warned him that <em>"publishing the criticism had crossed a line, and he should never do it again."</em>
            </p>
          </div>
        </div>
        <p>
          When error detection is treated as a career-ending offense and experts are too timid to take a stand, truth cannot survive.
        </p>
      </div>

      {/* Section 4: Galileo in the Dark Ages — Refuting the "Good Scientists Still Exist" Myth */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">IV.</span> The Fallacy of Isolated Exception: "Galileo Existed, But the Middle Ages Were Still Dark"
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">四、驳斥“仍有人做真科学”套路：伽利略存在不等于中世纪不黑暗</span>
        </h3>
        <p>
          Defenders of modern academia often object: <em>"You cannot say the entire scientific community is doing Cargo Cult Science because there are still honest researchers doing real work."</em>
        </p>
        <p>
          This argument is logically naive.
        </p>
        <div className="p-4 bg-slate-950 text-slate-100 rounded-xl space-y-3 font-serif text-xs md:text-sm my-3 border border-slate-800">
          <div className="font-mono font-bold text-amber-400 text-xs uppercase flex items-center gap-2 border-b border-slate-800 pb-1.5">
            <Globe className="w-4 h-4 text-amber-400 shrink-0" />
            The Historical Analogy: Institutional Dark Age vs. Individual Genius
          </div>
          <p className="text-slate-300 leading-relaxed">
            Galileo Galilei and Johannes Kepler lived and worked in the 17th century during the shadow of medieval inquisitorial censorship. Does the existence of Galileo prove that the Middle Ages were an era of scientific enlightenment? <strong>Absolutely not.</strong>
          </p>
          <p className="text-slate-300 leading-relaxed">
            A "Dark Age" is not defined by the total absence of brilliant minds. A Dark Age is defined by <strong>an institutional system that suppresses truth, rewards ritualistic dogma, and persecutes those who point out elementary contradictions.</strong> Modern academia, with its peer-review cartels and SCI publication games, is the contemporary equivalent of the Inquisition.
          </p>
        </div>
      </div>

      {/* Section 5: The Published Corpus on Academic Collapse */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">V.</span> Key Reference Corpus: Treatises on Academic Degeneration
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">五、学术崩塌论著文献库</span>
        </h3>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 font-mono text-xs text-slate-800 my-3">
          <ul className="space-y-1.5 text-xs font-serif leading-relaxed text-slate-700">
            <li>• <strong>Y. Liu</strong>, <em>The New Dark Age: Modern Academic Publishing as the Most Autocratic Censorship Era in Scientific History</em>, SSRN: 5679442 (2025).</li>
            <li>• <strong>Y. Liu</strong>, <em>From Academic Research to Academic Games: How Modern Science Lost Its Way</em>, SSRN: 5684424 (2025).</li>
            <li>• <strong>Y. Liu</strong>, <em>The Hypothetical Elimination of Science and Nature Journals: Assessing Scientific Progress and Innovation</em>, Substack (2025).</li>
            <li>• <strong>Y. Liu</strong>, <em>Major Scientific Breakthroughs Are Not Born From Journals: A Direct Examination of AI, Microchips, and the Myth of "Gradual Academic Progress"</em>, SSRN: 5720702 (2025).</li>
            <li>• <strong>Y. Liu</strong>, <em>Why 95% of Papers in Top-Tier SCI Journals Are Garbage: A Critical Analysis of Academic Publishing Collapse</em>, SSRN: 5918342 (2025).</li>
            <li>• <strong>Y. Liu</strong>, <em>The Garbage Majority: Why Most Academic Papers Are Useless—and Why This Harms Scientific Progress</em>, SSRN: 5715843 (2025).</li>
            <li>• <strong>Y. Liu</strong>, <em>Self-Citation Versus External Citation in Academic Publishing: A Critical Analysis of Citation Reliability</em>, SSRN: 5392646 (2025).</li>
          </ul>
        </div>
      </div>

      {/* Section 6: Conclusion */}
      <div className="space-y-4 text-left pt-4 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">VI.</span> Conclusion: Modern Academia Is Terminally Ill
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">六、总结：现代科学界不可救药</span>
        </h3>
        <p>
          When an entire scientific field turns a blind eye to 1+1=2 physical derivations, when thousands of researchers ignore direct outreach out of fear for their careers, and when journals protect disproven doctrine for profit and prestige, the system has lost its moral and intellectual right to judge scientific truth.
        </p>
        <div className="p-4 bg-slate-950 text-amber-300 rounded-xl space-y-3 font-mono text-xs md:text-sm my-3 border border-slate-800 text-center font-bold">
          "Saying that over 95% of SCI papers are useless garbage and that modern academia is practicing Cargo Cult Science is not an exaggeration—it is an exact, mathematically justified diagnosis of a terminally ill system."
        </div>
      </div>

    </article>
  );
}
