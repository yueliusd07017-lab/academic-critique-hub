import React from "react";
import { Sparkles, ShieldAlert, AlertTriangle, Eye, GitCompare, HelpCircle, BookOpen, Landmark, UserCheck } from "lucide-react";

export default function DoExpertsAlwaysKnowBetterEssay() {
  return (
    <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="expertsknowbetter-article-text">
      
      {/* Title Area */}
      <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-650 bg-amber-50 px-2.5 py-1 rounded">
          Essay BM • Epistemological Sociology & Sovereign Right to Reason
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
          Do Experts Always Know Better? <br />
          <span className="text-xl md:text-2xl font-medium text-amber-800 block mt-2">
            Paper Mills, Cargo Cult Science, and the Sovereign Right to Question Authority
          </span>
        </h1>
        <p className="text-sm text-gray-400 font-mono">
          By Dr. Yue Liu, Dr. Ying Liu, & Prof. Michael G. B. Drew • Theoretical Epistemology • July 2026
        </p>
        <div className="text-xs text-amber-900 bg-amber-50 px-3 py-1 rounded border border-amber-100 inline-block font-sans font-semibold">
          第二十二讲：专家一定比圈外人明智吗？——论学术界“货拜族科学”的盲从本质，并捍卫公民不经官方许可用双眼见证真理的理智主权
        </div>
      </div>

      {/* Epigraph Quote Block */}
      <div className="max-w-2xl mx-auto my-6 bg-slate-900 text-slate-100 p-5 rounded-xl space-y-4 shadow-inner border border-slate-800 font-mono text-xs md:text-sm">
        <div className="flex items-center gap-2 text-amber-400 border-b border-slate-800 pb-2">
          <Landmark className="w-4 h-4 text-amber-400" />
          <span className="font-bold uppercase tracking-wider">The Democratic Sovereignty of Reason / 理性的民主主权</span>
        </div>
        <p className="italic text-slate-200 leading-relaxed">
          "A recurring pattern in modern science is the demand that ordinary people defer to official authority. In principle, this sounds reasonable. In practice, it has become a mechanism for neutralizing independent judgment. Scientific authority does not own truth, and a prestigious journal's brand does not guarantee reality. Science was founded on the belief that human reason is universal—not that only prestigious institutions are allowed to think."
        </p>
        <p className="text-[10px] text-slate-400 text-right mt-1 font-sans">
          — Dr. Yue Liu, *From Academic Research to Academic Games: How Modern Science Lost its Way*, SSRN 2025
        </p>
      </div>

      {/* Section 1: The Insider-Outsider Tension */}
      <div className="space-y-4 pt-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-amber-955 border-b border-gray-100 pb-1.5">
          <span className="text-amber-600 font-mono">I.</span> The Insider-Outsider Alliance: Whittling Away at the Closed Circle
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">圈内外的联手：砸向紧密学术利益链的一记重锤</span>
        </h3>
        <p>
          A short video recently attracted considerable attention. It documented devastating public allegations of image duplication and paper buying in elite national academic laboratories. 
          While the specific details of the case are shocking, the most striking aspect of the discussion was not the identity of the accused targets. 
          Rather, it was a simple remark made by a commentator: 
          <em>"Actually, who the target is no longer matters, because that circle is no longer clean."</em>
        </p>
        <p>
          Equally revealing is the social mechanism behind the disclosure. 
          The whistleblower who published the video reported that the critical evidence was provided directly by a doctoral graduate from a premier institution (Peking University). 
          This illustrates a profound shift in academic politics: <strong>the traditional wall of silence is beginning to crack from within</strong>. 
          Frustrated insiders, bruised by the clash between what science should be and what it actually is, are increasingly bypassing the corrupted channels of internal peer review and going straight to independent whistleblowers outside the academy. 
          When thousands of "student whistleblowers" choose to partner with public commentators rather than trust their own university administrators, they are declaring that the formal system has lost its legitimacy.
        </p>
        <p className="text-gray-700 italic">
          打假博主的视频之所以引起轰动，最耐人寻味的不是被举报的学术权力顶峰团队，而是其背后爆料线索的来源：一位顶尖学府（北京大学）的博士生。
          这说明，千万个不甘与谎言为伍、在理想与骨感现实之间挣扎的“圈内人”，已经开始将证据直接交给“圈外人”进行曝光。
          学术界靠圈子文化和信息封锁来维系自净神话的防线已经千疮百孔，内部的正直之士宁愿求助于外部舆论，也彻底对机构内部的官僚程序失去了信心。
        </p>
      </div>

      {/* Section 2: Do Citizens Need Official Permission to Think? */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-amber-955 border-b border-gray-100 pb-1.5">
          <span className="text-amber-600 font-mono">II.</span> Do We Need Official Permission to Think? Trusting Observation Over Decrees
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">我们需要官方认可才能思考吗？论纯粹理智对权威垄断的蔑视</span>
        </h3>
        <p>
          Whenever a glaring case of academic fraud is exposed, the establishment reacts with remarkable consistency. 
          They demand procedural obedience: 
          <em>"We must wait for the formal institutional investigation." "We must wait for Nature to issue its retraction." "We must not jump to conclusions without official consensus."</em> 
          This is an appeal to authority that insults human intelligence. 
          While formal investigations are necessary to determine administrative punishments or legal sanctions, **scientific reasoning does not require editorial permission**.
        </p>
        <p>
          If publicly available scientific data contains two identical microscopic noise patterns rotated by 180 degrees, any person who understands basic high-school geometry can see the fraud. 
          We do not need <em>Nature</em> to authorize our logic. 
          We do not need an official university seal to tell us that two independent physical experiments cannot produce identical pixel noise. 
          To expect citizens and scholars to suspend their own cognitive functions until an elite journal decides to admit its embarrassment is a form of intellectual slavery.
        </p>
        <p className="text-rose-900 bg-rose-50/50 p-3.5 rounded-xl border border-rose-105 font-sans text-[13px] leading-relaxed">
          <strong>皇帝到底穿没穿衣服：</strong><br />
          当审稿人在审阅作者揭露学术界大范围错误的证据时，往往会强词夺理：“如果你要说期刊文献都错了，你必须提供更详尽、更有分量的公开文献支持；或者辩称‘所有研究在特定时代都是相对正确的’。” 
          这种说辞滑稽至极：既得利益集团利用其控制的同行评审不让揭露错误的铁证发表，反过来又嘲笑说你没有公开文献作依据。
          一边是幼童指出皇帝没有穿衣服，一边是傲慢的大臣（审稿专家）逼迫你拿出官方正式官宣“皇帝没穿衣服”的文件。这种对理性的剥夺，正是整个现代学术界在做“货拜族科学”（Cargo Cult Science）的最铁证。
        </p>
      </div>

      {/* Section 3: The Sacred Illusion of SCI and Peer Review */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-amber-955 border-b border-gray-100 pb-1.5">
          <span className="text-amber-600 font-mono">III.</span> The Sacred Illusion of SCI and Peer Review: The Relic of "Academic Games"
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">被神圣化的发表游戏：同行评审如何扼杀真理</span>
        </h3>
        <p>
          Modern science has elevated journal publication into a quasi-sacred status. 
          The scientific journal is no longer treated as a humble platform for exchanging thoughts and debating theories; it has been transformed into a global currency for metric-based appraisal. 
          Hiring, promotion, funding, and intellectual reputation are tied to the brand of the journal where a paper appears, rather than what the paper actually proves.
        </p>
        <p>
          This produces a serious distortion. 
          When a top journal publishes a paper, many people assume the paper must be important. 
          If a paper appears outside the elite system—such as on preprint repositories—it is dismissed. 
          But prestige measures social acceptance and cartel relationships, not truth. 
          Worse, the prestige system actively blocks the correction of errors:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-750 font-sans">
          <li>
            <strong>Prestige over Correction:</strong> Elite journals can easily publish flawed papers because they are backed by powerful "citation cartels." Once published, those incorrect papers are cited thousands of times by followers who blindly copy the formulas, while correcting papers are rejected without review.
          </li>
          <li>
            <strong>The Stifling of Dissent:</strong> Independent theories are routinely dismissed because they "do not use parameters aligned with peer-reviewed literature templates" or because they "are too disruptive of the established consensus." Critics are forced into a Catch-22: they must use the broken, incorrect framework to prove the framework is broken.
          </li>
          <li>
            <strong>Cargo Cult Citation:</strong> Wrong articles are heavily cited by peer networks, while corrections are ignored. The metrics reward popularity, not correctness, rendering peer review completely blind to low-level textbook errors.
          </li>
        </ul>
        <p className="text-amber-900 bg-amber-50/50 p-3 rounded-xl border border-amber-100 font-sans text-[13px] leading-relaxed">
          <strong>论文工厂与虚假繁荣：</strong><br />
          只要能在顶刊发表，无论造假还是灌水，所有人都会打破脑袋去钻营。
          研究者为了迎合期刊风格只盯着最新的文献，却看不起那些沉淀在大学教材、基础波动力学里的金科玉律。
          这直接导致了现代学者理论水平的急剧贫瘠。例如，在微波吸收材料领域，整个学术界长达半个多世纪里，用初中代数和波叠加原理就能一眼识破的“阻抗匹配”低级错误，竟然被奉为权威真理，毫无阻碍地疯狂发表了几万篇文献。这就是“货拜族科学”对人类理智最彻底的羞辱。
        </p>
      </div>

      {/* Section 4: Academic Environment & Timidity */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-amber-955 border-b border-gray-100 pb-1.5">
          <span className="text-amber-600 font-mono">IV.</span> The Silent Sickness: Timidity, Advisor Sanctions, and the Demise of Peer Review
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">沉默的病灶：导师的警告与沉默的同盟</span>
        </h3>
        <p>
          Why do modern scientists refuse to correct these obvious mathematical errors? 
          It is not because they are intellectually incapable; it is because they are terrified. 
          As documented in the New York Times, when Harvard called for the retraction of dozens of fraudulent studies by a noted cardiologist, experts wondered: 
          <em>"How did a questionable line of research persist for so long? Experts were just too timid to take a stand."</em>
        </p>
        <p>
          This systemic timidity is actively beat into young researchers by their advisors. 
          In a famous commentary in <em>Nature</em> titled "A toast to the error detectors," Simine Vazire noted a message from a postdoc who had pointed out errors in a famous researcher's paper: 
          <em>"The critique was accurate, important, and measured—a service to his field. But it caused him problems: his advisor told him that publishing the criticism had crossed a line, and he should never do it again."</em>
        </p>
        <p>
          In today's academic environment, pointing out that an elite researcher is wrong is treated as a severe social offense. 
          It is viewed as "unpolite," "unprofessional," or "destructive to academic harmony." 
          Young scholars are explicitly taught that their career survival depends on maintaining the illusions of the cartel, even when those illusions violate university-level textbooks. 
          Under this rule, review articles are no longer written to extract profound insights and innovate theories; they are written as secondary literature to inflate SCI metrics and distribute mutual praises among the members of the cartel.
        </p>
        <p className="bg-slate-900 text-slate-150 p-4 rounded-xl text-xs space-y-2 font-mono border border-slate-800">
          <span className="text-amber-400 font-bold block text-center">
            The Epistemic Illusion of Consensus / 共识的认知虚妄
          </span>
          "A person of shallow theoretical foundation can only make a living by running routine experiments and publishing garbage papers. Because they have no capacity to evaluate what is theoretically correct, they cling desperately to 'mainstream consensus.' Feynman had the theoretical depth to recognize a fake; if a theory was wrong, he admitted it, because to a true scientist, sticking to a mistake is the ultimate shame. Today's academic courtiers, lacking that depth, view the whistleblower as a threat because they cannot survive without the protective screen of collective ignorance."
        </p>
      </div>

      {/* Section 5: Case Analysis */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-amber-955 border-b border-gray-100 pb-1.5">
          <span className="text-amber-600 font-mono">V.</span> Empirical Indictment: Case Studies of Systemic Blindness
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">案例分析：低级错误如何一路绿灯，真理如何被系统性绞杀</span>
        </h3>
        <p>
          Lest this critique be dismissed as abstract philosophy, we must examine concrete case studies that prove the complete failure of modern peer review:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-750 font-sans">
          <li>
            <strong>The Electrical-Optical Conductivity Blunder (K. A. Aly, 2022):</strong> Whistleblower K. A. Aly documented that a textbook-level physical error had been repeated as an "innovation" 91 times across SCI-indexed papers in a major materials science journal. The peer-review system let a freshman error slip past 91 separate times, yet routinely blocks papers that attempt to correct it.
          </li>
          <li>
            <strong>Six Textbook Mistakes (Gezerlis & Williams, 2021):</strong> In the <em>American Journal of Physics</em>, researchers exposed six major textbook-level mathematical mistakes that have been widely taught in computational physics, showing that institutional consensus routinely codifies errors.
          </li>
          <li>
            <strong>The 95% Failure in Time Series Anomaly Detection (Keogh, 2022):</strong> Prof. Eamonn Keogh at UCR demonstrated that at least 95% of published papers on Time Series Anomaly Detection are completely wrong due to flawed benchmarks and circular logic. When pointed out, Keogh noted, "the community offers no counterarguments, but just ignores the problem (the head-in-the-sand response)."
          </li>
        </ul>
        <p>
          This is exactly what has occurred in the field of microwave absorption. 
          The mainstream continues to publish thousands of papers utilizing the scientifically bankrupt "impedance matching" theory, completely ignoring the mathematically correct wave mechanics corrections. 
          When we submit papers correcting these basic errors, editors issue desk-rejections with circular, nonsensical justifications: "Your paper does not contain new experimental data," "The impedance matching theory has been supported by thousands of highly cited papers, so your view is too minority," or "Your criticism does not improve our journal's impact factor." 
          This is a textbook demonstration of Cargo Cult Science.
        </p>
      </div>

      {/* Section 6: The Way Forward */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-amber-955 border-b border-gray-100 pb-1.5">
          <span className="text-amber-600 font-mono">VI.</span> Rebuilding the Academic Ecosystem: From Authentication to Dialogue
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">重建健康的学术生态：从“成果鉴定所”回归“思想交锋地”</span>
        </h3>
        <p>
          How do we cure this civilizational sickness? 
          We must start by stripping journals of their role as the "arbiters of truth" or "qualification certifiers." 
          A scientific journal is not a temple of divine decree; it is merely an open post office—a platform for the clashing of thoughts and theories. 
          As outlined in Dr. Yue Liu's *Wu Wei Governance* framework, we must separate scientific evaluation from bureaucratic metrics and return to open, decentralised critical inquiry.
        </p>
        <p>
          We must stop treating mistakes as a toxic threat to "academic integrity." 
          Making mistakes is the natural, inevitable, and essential nutrient for scientific progress. 
          As Karl Popper argued, science progresses through conjectures and refutations. 
          The tragedy of modern science is not that incorrect papers are published—that has happened throughout history. 
          The tragedy is that **we have built an evaluation system that makes correcting those mistakes impossible**. 
          By deifying the "peer-reviewed consensus" and weaponizing SCI metrics, we have banned error correction and replaced it with institutional survival games.
        </p>
        <p className="text-amber-950 bg-amber-50/50 p-3.5 rounded-xl border border-amber-205 font-sans text-[13px] leading-relaxed">
          <strong>理性的终极呼唤：</strong><br />
          科学最核心的动力是“提出问题”，而不是提供讨好官僚体系的“充分证据”。
          我们必须培育一种极其包容的质疑氛围：对于学术权威的质疑，即使质疑错了，也没有什么了不起。
          如果只有手握百分之百必胜把握的人才敢挑战学术权力，那么学术圈的错误共识将永远坚不可摧。
          质疑不应该需要非凡的英雄主义勇气，质疑应当成为人类心智最日常的自然呼吸。
        </p>
      </div>

      {/* Section 7: Conclusion */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-amber-955 border-b border-gray-100 pb-1.5">
          <span className="text-amber-600 font-mono">VII.</span> Conclusion: Reclaiming the Right to Reason
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">结论：夺回我们独立理性的思想主权</span>
        </h3>
        <p>
          The paper-mill phenomenon and the elite academic scandals are not isolated accidents. 
          They are the visible diagnostic symptoms of an academic civilization that has substituted authority for observation, and prestige for logic. 
          If science wants to recover its credibility, it must recover the courage to let questions be asked before the official verdict arrives.
        </p>
        <p>
          The emperor's clothes do not become real because the courtiers sing in chorus. 
          The public does not need a palace announcement to use its eyes. 
          We will continue to trust our own reason, bypass the decadent gates of the cartels, publish our mathematical proofs in the open, and let future generations decide where the truth lies.
        </p>
        <p className="font-bold text-center text-slate-900 border-t border-gray-100 pt-4 font-sans text-sm md:text-base">
          "Science was founded on the belief that human reason is universal—not that only prestigious institutions are allowed to think."
        </p>
      </div>

    </article>
  );
}
