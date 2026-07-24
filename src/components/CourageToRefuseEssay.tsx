import React from "react";
import { ShieldAlert, Flame, Award, AlertTriangle, BookOpen, Scale, Sparkles, CheckCircle2, Zap } from "lucide-react";

export default function CourageToRefuseEssay() {
  return (
    <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="couragetorefuse-article-text">
      
      {/* Title Area */}
      <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded">
          Essay BT • Epistemological Integrity & Moral Courage
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
          The Highest Form of Pride Is What You Have Refused: <br />
          <span className="text-xl md:text-2xl font-medium text-indigo-900 block mt-2">
            Anger as Conscience, Academia as a "Makeshift Troupe," and the Moral Right to Challenge Consensus
          </span>
        </h1>
        <p className="text-sm text-gray-400 font-mono">
          By Dr. Yue Liu, Dr. Ying Liu, & Prof. Michael G. B. Drew • Scientific Epistemology • July 2026
        </p>
        <div className="text-xs text-indigo-900 bg-indigo-50 px-3 py-1 rounded border border-indigo-200 inline-block font-sans font-semibold">
          第二十九讲：拒绝的最高骄傲——论骂人的底气、愤怒中的良知与学术界“草台班子”的本质解构
        </div>
      </div>

      {/* Epigraph Quote Block */}
      <div className="max-w-2xl mx-auto my-6 bg-slate-900 text-slate-100 p-5 rounded-xl space-y-4 shadow-inner border border-slate-800 font-mono text-xs md:text-sm">
        <div className="flex items-center gap-2 text-indigo-400 border-b border-slate-800 pb-2">
          <Award className="w-4 h-4 text-indigo-400" />
          <span className="font-bold uppercase tracking-wider">The Highest Pride / 拒绝与批判的真核价值</span>
        </div>
        <p className="italic text-slate-200 leading-relaxed">
          "A person's greatest pride is not what honors or titles they have accumulated, but what compromises they have refused to make. To fiercely call out an entire discipline for practicing Cargo Cult Science is not vulgarity—it is anger born of an unextinguished conscience. And the moral right to express such righteous anger rests upon having built an unassailable theoretical foundation that overthrows decades of dogma."
        </p>
        <p className="text-[10px] text-slate-400 text-right mt-1 font-sans">
          — Dr. Yue Liu, *The Courage to Refuse*, Substack 2026
        </p>
      </div>

      {/* Section 1: The Confidence to Criticize */}
      <div className="space-y-4 pt-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-indigo-955 border-b border-gray-100 pb-1.5">
          <span className="text-indigo-600 font-mono">I.</span> The Substance Behind the Outrage: Why Criticism Requires Intellectual Confidence
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">骂人也需要底气：严密理论建树赋予彻底批判的合法性</span>
        </h3>
        <p>
          Anyone can complain in frustration, and anyone can hurl insults at established authorities. 
          However, fierce public critique carries weight only when it is backed by genuine, unassailable theoretical achievement.
        </p>
        <p>
          When we declare that <strong>95% of published SCI papers in thin-film microwave absorption are metric-driven garbage</strong> and that the mainstream community is trapped in Cargo Cult Science, this is not mindless posturing. 
          This confidence stems from having developed the <em>Wave-Mechanics Theory of Microwave Absorption</em>—a rigorous mathematical framework grounded in fundamental wave superposition principles that definitively overthrows the flawed impedance matching model that dominated textbooks for fifty years.
        </p>
        <p>
          Mainstream academic authorities, backed by lavish research grants, administrative titles, and journal gatekeeping power, can afford to maintain a polite, polished, "gentlemanly" facade while perpetuating mathematically dead errors. 
          Independent scientists who possess true theoretical breakthroughs have something far more potent than institutional funding: <strong>the absolute confidence of mathematical truth</strong>.
        </p>
      </div>

      {/* Section 2: True Pride Is What You Refused */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-indigo-955 border-b border-gray-100 pb-1.5">
          <span className="text-indigo-600 font-mono">II.</span> The Highest Pride Is What You Refused: Rejecting Imperial Titles for Theoretical Truth
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">人生最大的骄傲：不是拥过什么，而是拒绝了什么</span>
        </h3>
        <p>
          Modern academia conditions researchers to measure their worth by external accumulation: 
          impact factors, prestigious grants, university chairs, and editorial honors.
        </p>
        <p>
          Yet history demonstrates that the highest form of human pride is not what you have collected, but what you have had the moral courage to refuse:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 font-sans text-xs md:text-sm">
          <li>Refusing to blindly repeat an erroneous dogma simply because 23,300+ papers cite it;</li>
          <li>Refusing to slice research into minimal publishable units to inflate citation counts;</li>
          <li>Refusing to exchange intellectual independence for institutional rewards and peer approval;</li>
          <li>Refusing to stay silent when witnessing widespread scientific stagnation.</li>
        </ul>
        <p className="text-indigo-950 bg-indigo-50/80 p-3.5 rounded-xl border border-indigo-200 font-sans text-[13px] leading-relaxed">
          <strong>学术独立的真谛：</strong><br />
          主流权威拥有的头衔与经费，终究是体制赐予的暂存之物。
          放弃错误理论、推翻阻抗匹配、在滔滔世浪中坚持第一性原理，这才是真正不可剥夺的人生最高骄傲。
          历史终将记住那些拒绝盲从的智者，而不是那些在错误共识中分一杯羹的庸才。
        </p>
      </div>

      {/* Section 3: Anger as Conscience */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-indigo-955 border-b border-gray-100 pb-1.5">
          <span className="text-indigo-600 font-mono">III.</span> Anger Is Not Vulgarity: It Is the Sound of an Unextinguished Conscience
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">愤怒不是粗俗：良知尚未泯灭的道德情感回应</span>
        </h3>
        <p>
          Critique is often dismissed by institutional guardians as "unprofessional" or "overly angry." 
          This confuses emotional delivery with intellectual validity.
        </p>
        <p>
          Anger is not vulgarity. 
          <strong>When you are still capable of experiencing intense anger in the face of what you know to be persistent injustice and mathematical fraud, it proves that your conscience is still alive.</strong>
        </p>
        <p>
          Indifference and polite compliance are far more dangerous than anger. Polite indifference signals that a researcher has made peace with lies, surrendered to metric games, and accepted systemic corruption as normal. 
          As long as a scientist feels burning outrage when high-school physics principles are violated in top-tier journals, their moral and intellectual compass remains uncorrupted.
        </p>
      </div>

      {/* Section 4: Academia as a "Makeshift Troupe" */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-indigo-600 font-mono">IV.</span> Academia as a "Makeshift Troupe" (草台班子): Insiders Acknowledge Structural Mediocrity
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">学术界是个草台班子：圈内人的清醒觉察与体制虚妄解构</span>
        </h3>
        <p>
          While grass-roots researchers are routinely intimidated by the shiny facade of peer-reviewed journals, seasoned insiders harbor no such illusions. 
          As retired journal chief editors and senior university professors (such as Prof. Yang Feng from Shanghai Jiao Tong University) candidly observe in private and public settings:
        </p>
        <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-gray-800 bg-slate-50 py-2.5 rounded-r my-3 font-sans text-xs md:text-sm">
          "Modern academia is essentially a makeshift troupe (草台班子)—a ragtag crew putting on a elaborate performance of rigour."
        </blockquote>
        <p>
          When peer review is reduced to superficial formatting checks, when reviewers demand citations to their own papers, and when journals accept formulaic reports without checking underlying wave mechanics, the image of "sacred peer-reviewed science" collapses. 
          It is an elaborate theatrical troupe where everyone pretends that incremental paper production equals scientific discovery.
        </p>
      </div>

      {/* Section 5: The Diamond-Clean Record */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-indigo-955 border-b border-gray-100 pb-1.5">
          <span className="text-indigo-600 font-mono">V.</span> Spotless Integrity as Unshakeable Armor: The Legacy of Purity
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">纯洁如钻石的个人记录：无懈可击的立身之本</span>
        </h3>
        <p>
          In the viral reflection by social commentator Prof. Nie Shengzhe, a senior 70-year-old former film studio director offered a surprising piece of advice:
        </p>
        <p className="italic text-gray-700 bg-indigo-50/50 p-3 rounded-lg border border-indigo-200 text-xs md:text-sm font-sans">
          "If you don't speak with fierce, sharp, and satirical conviction, your words carry no weight in a noisy world. But you can only afford to do this because your own personal record, your scholarship, and your ethics are as clean as a diamond. If you had engaged in plagiarism, ghostwriting, or metric fraud, your opponents would have dug it up and destroyed you long ago."
        </p>
        <p>
          This carries a vital lesson for every independent whistle-blower. 
          To challenge a corrupt academic apparatus, your personal integrity must be absolute. 
          When your scholarship is free from plagiarism, free from data fabrication, and anchored in rigorous logic, no army of online trolls or institutional gatekeepers can dismantle your work. 
          The deeper they dig into your publications, the more clearly your theoretical consistency shines.
        </p>
      </div>

      {/* Section 6: Conclusion */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-indigo-955 border-b border-gray-100 pb-1.5">
          <span className="text-indigo-600 font-mono">VI.</span> Conclusion: Stand Firm, Reject Compromise, Defend Scientific Truth
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">结论：昂首挺胸，拒绝妥协，捍卫纯粹科学</span>
        </h3>
        <p>
          Scientific truth is not determined by institutional endorsement, funding volumes, or historical consensus. 
          It is determined by physical reality, mathematical logic, and first-principles reasoning.
        </p>
        <p>
          We do not need the permission of a "makeshift troupe" to speak the truth. 
          We wear our refusal of corrupt consensus as our highest badge of honor, and we remain fearlessly committed to restoring genuine intellectual integrity to modern science.
        </p>
        <p className="font-bold text-center text-slate-900 border-t border-gray-100 pt-4 font-sans text-sm md:text-base">
          "Civilization does not require the absence of anger; it requires that anger remain fiercely accountable to truth, logic, and unyielding conscience."
        </p>
      </div>

    </article>
  );
}
