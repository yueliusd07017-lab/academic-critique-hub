import React from "react";
import { AlertTriangle, BookOpen, Flame, HelpCircle, Scale, ShieldAlert, Sparkles, Users, XCircle, ArrowRight, ShieldCheck, HeartHandshake, Compass, UserX } from "lucide-react";

export default function TragedyOfConscientiousScholarsEssay() {
  return (
    <article
      className="prose max-w-none text-slate-800 leading-relaxed font-serif text-sm md:text-base space-y-8 animate-fade-in"
      id="tragedy-conscientious-scholars-article-text"
    >
      {/* Title & Metadata Header */}
      <div className="text-center space-y-4 pb-8 border-b border-slate-200 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-rose-100 text-rose-900 border border-rose-300">
          <ShieldAlert className="w-4 h-4 text-rose-700 animate-pulse" />
          The Martyrdom of Intellectual Integrity • Companion to Essays FO, FN &amp; FM
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
          The Tragic Fate of Conscientious Scholars in a Dark Academic Era:
          <span className="block text-xl md:text-2xl font-serif font-normal text-rose-900 mt-2">
            Why Those with Too Much Responsibility Offend Everyone—From Shu Xingbei and Zhu Yuejun to the Narrow Escape of Yitang Zhang
          </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-500 font-mono">
          <span><strong>Author:</strong> Dr. Yue Liu (刘跃)</span>
          <span>•</span>
          <span><strong>Historical Echoes:</strong> Shu Xingbei, Zhu Yuejun, Yitang Zhang, Huang Wanli</span>
          <span>•</span>
          <span><strong>Theme:</strong> Why Integrity Is Persecuted in a Sycophantic Academic Ecology</span>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs md:text-sm text-amber-900 text-left font-sans space-y-2">
          <p className="font-bold flex items-center gap-2 text-amber-950">
            <Flame className="w-4 h-4 text-amber-600" />
            The Bitter Paradox of Conscientiousness:
          </p>
          <p>
            为什么说责任心太重的人往往会得罪很多人？因为他们脑子里面天天想的是如何把事情做好，而不是把谁哄好；他们眼里容不得任何沙子，那些混日子的、偷奸耍滑的在他们面前讨不到任何好处，自然浑身不舒服。<br />
            <strong>可惜的是，这种责任心重的人，如果遇上黑暗的现代科学界时代，如果遇不到真正赏识他的知音，他的下场往往会极其惨烈！</strong>
          </p>
        </div>
      </div>

      {/* Section 1: The Anatomy of Conscientiousness */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            01
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            The Fundamental Conflict: Doing the Work Right vs. Pleasing the Powerful
          </h2>
        </div>

        <p>
          In a healthy scientific civilization, the sole criterion of merit is <strong>truth, rigorous proof, and whether the work is done right</strong>. But in a decayed, feudal academic environment—an era dominated by grant cartels, impact factors, and sycophantic peer networks—the dominant rule is inverted:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs md:text-sm">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
            <span className="font-mono font-bold uppercase text-slate-600">The Sycophantic Majority (混日子与逢迎者)</span>
            <p className="text-slate-700 leading-relaxed">
              Their daily calculation is never <em>“how to find the truth”</em>, but <em>“how to please the powerful (把谁哄好)”</em>. They cite the dean’s invalid papers, parrot flawed textbook formulas without verification, overlook colleagues’ fabricated data, and maintain cozy reciprocal review circles. In return, they receive grants, professorships, and institutional safety.
            </p>
          </div>

          <div className="bg-rose-50/70 border border-rose-300 rounded-xl p-5 space-y-2">
            <span className="font-mono font-bold uppercase text-rose-800">The Conscientious Scholar (责任心重的人)</span>
            <p className="text-rose-950 leading-relaxed font-bold">
              They care only about <em>“how to do the work right (如何把事做好)”</em>. Their eyes cannot tolerate a single grain of sand. When an equation is wrong, they say it is wrong; when an interpretation violates wave physics, they dismantle it; when a dean fabricates figures, they refuse to applaud. Because the opportunistic and the incompetent can extract no unearned favors from them, they become an intolerable thorn in the side of the mediocre majority.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Historical Martyrs of Truth */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            02
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            Historical Bloodstains: From Shu Xingbei and Zhu Yuejun to the Narrow Escape of Yitang Zhang
          </h2>
        </div>

        <p>
          History demonstrates that when a conscientious scientist meets an era of academic corruption or ideological dogma, the institutional revenge is merciless:
        </p>

        <div className="space-y-4 font-sans">
          {/* Shu Xingbei */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-950 m-0">
                1. Shu Xingbei (束星北) — Publicly Correcting Wang Zhuxi (王竹溪) and Paying with His Life’s Work
              </h3>
              <span className="text-xs font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                The Genius Crushed
              </span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-serif">
              Widely acknowledged as China’s foremost theoretical physicist of his generation (teacher of Nobel laureate Tsung-Dao Lee), Shu Xingbei had zero tolerance for scientific sloppiness. In 1952 at Shandong University, when academician Wang Zhuxi delivered a physics report on thermodynamics and statistical mechanics containing errors, Shu walked up to the blackboard, wiped it clean, pointed out Wang’s mistakes formula by formula, and lectured for an hour without sparing any pride. 
              In a culture prioritizing hierarchical “face” over scientific truth, Shu’s uncompromising conscientiousness was treated as treason. He was purged, stripped of his research rights, forced into physical labor repairing weather instruments and cleaning latrines for decades, and his peak creative intellect was deliberately strangled by the collective establishment.
            </p>
          </div>

          {/* Zhu Yuejun */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-950 m-0">
                2. Zhu Yuejun (朱跃军) — The Tragedy of Standing Firm Against Institutional Mediocrity
              </h3>
              <span className="text-xs font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                Ostracized for Principles
              </span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-serif">
              Like Shu, Zhu Yuejun represented those rare researchers who refused to play along with academic games, refused to compromise on experimental and theoretical integrity, and insisted on holding everyone to rigorous standards. Because he could not be bought or flattered, the mediocre clique surrounding him felt constantly threatened. Denied resources, excluded from peer circles, and isolated by the administrative machinery, his life stands as a grim testimony to how modern research units crush those whose only crime was taking science too seriously.
            </p>
          </div>

          {/* Yitang Zhang */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 shadow-2xs">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-950 m-0">
                3. Yitang Zhang (张益唐) — The Miraculous Escape from the Meat Grinder
              </h3>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Exile &amp; Vindication
              </span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-serif">
              During his PhD under T. T. Moh at Purdue, Yitang Zhang discovered that an acclaimed algebraic geometry result by his advisor was deeply flawed. Zhang refused to hide the flaw to guarantee an easy career path; as a result, he received no recommendation letter from his advisor and was cast into the academic wilderness. For decades, one of the greatest mathematical minds of the 21st century delivered sandwiches at Subway, worked as an accountant, and lived in near-poverty as a low-paid lecturer. 
              Zhang “escaped with his life” only because the twin prime conjecture proof in 2013 was an undeniable mathematical earthquake that could not be suppressed by local gatekeepers. Had he not solved one of history’s greatest unsolved problems in solitary exile, he would have been buried in total silence—just another forgotten casualty of academic revenge.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The Modern Dark Age */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            03
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            Why the Modern Academic Dark Age Is Even More Merciless
          </h2>
        </div>

        <p>
          In the contemporary era dominated by SCI indicators, <em>Nature</em>-worship, and institutional corporatization, the fate of the conscientious scholar is even bleaker than in earlier centuries:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm text-slate-800">
          <li>
            <strong>Totalitarian Peer-Review Gatekeeping:</strong> In Newton’s or Einstein’s time, a thinker could publish independently or communicate directly with peers. Today, three anonymous peer reviewers—frequently the very authors of the flawed papers being criticized—can anonymously veto groundbreaking corrections under the cowardly pretext that “the tone is too sharp” or “it lacks broad interest.”
          </li>
          <li>
            <strong>Platform Moderation &amp; The Erasure of Dissent:</strong> As preserved in <strong>Essay FJ</strong> (<em>The Unapproved Ledger</em>), even reasoned criticisms posted on public scientific platforms like ScienceNet are marked <strong>“审核未通过” (Failed Moderation)</strong> to protect institutional pride and academician networks.
          </li>
          <li>
            <strong>The Rewards for Fraud, The Gallows for Truth:</strong> While confirmed fraudsters who fabricate data are welcomed back to <em>Nature</em> within five months and re-appointed as grant judges (<strong>Essay FK</strong>, <strong>Essay FM</strong>), honest scholars who rigorously derive wave physics and expose 50 years of cargo-cult impedance matching are systematically frozen out of funding, promotion, and recognition.
          </li>
        </ul>
      </section>

      {/* Section 4: Conclusion - History Is the Ultimate Arbiter */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4 font-sans">
        <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2 m-0">
          <Scale className="w-5 h-5 text-indigo-700" />
          The Final Solace: Conscience Outlives the Cartel
        </h2>

        <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
          It is true that in a dark academic age, those with too much responsibility often suffer a tragic fate. They are slandered by the sycophants, marginalized by administrators, and denied the honors monopolized by paper-mill careerists.
        </p>

        <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
          Yet history never remembers the names of the university presidents who suppressed Shu Xingbei, nor the grant committee chairmen who forced Yitang Zhang to deliver sandwiches, nor the anonymous reviewers who rejected wave mechanics to defend impedance matching.
        </p>

        <p className="text-xs md:text-sm font-bold text-rose-950 border-t border-slate-200 pt-3 m-0">
          History remembers only those who refused to bow to authority, who held their ground on the bedrock of logic and natural truth, and who bore the cross of academic solitude so that genuine science might survive the dark age.
        </p>
      </section>
    </article>
  );
}
