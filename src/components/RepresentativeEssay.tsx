import React, { useState } from "react";
import { Award, BookOpen, CheckCircle2, Copy, FileText, Share2, Sparkles, AlertTriangle, ShieldCheck } from "lucide-react";

interface ScriptSegment {
  time: string;
  cn: string;
  en: string;
}

export default function RepresentativeEssay() {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyText = () => {
    const el = document.getElementById("representative-article-text");
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const scriptSegments: ScriptSegment[] = [
    {
      time: "00:00:00 - 00:00:15",
      cn: "休克尔分子轨道法是一种极其简化的量子化学方法。但是在化学中、特别是有机化学中，它却表现得非常成功，其内在原因究竟是什么？",
      en: "The Hückel molecular orbital (HMO) method is an extremely simplified quantum chemistry approximation. Yet, it has achieved extraordinary success in chemistry, particularly organic chemistry. What is the deep underlying reason for this?"
    },
    {
      time: "00:00:15 - 00:00:25",
      cn: "已经证明，傅里叶级数展开是一个在各个领域都极其成功的数学方法。",
      en: "It has been mathematically demonstrated that the Fourier series expansion is a universally successful method across diverse physical domains."
    },
    {
      time: "00:00:25 - 00:00:55",
      cn: "类似于薛定谔的波动力学与海森堡的矩阵力学是等价的物理理论体系，从形式上看，休克尔分子轨道法和傅里叶级数展开根本不同。但是，两者本质上是同一个物理事件的两种不同的表达方法。这就是为什么两套不同的方法都有非常成功的相同的本质。",
      en: "Just as Schrödinger's wave mechanics and Heisenberg's matrix mechanics are mathematically equivalent physical systems, the Hückel molecular orbital method and Fourier series expansion appear completely different in form. In reality, they are two different expressions of the exact same physical truth. This underlying mathematical equivalence explains why both methods enjoy the same profound, fundamental success."
    },
    {
      time: "00:00:55 - 00:01:20",
      cn: "如果一个人是真正做学问的，那么他的每一篇论文，无论近五年发表的还是以前发表的，无论发表在什么刊物，都可以作为他的代表作，也都可以代表他的学术水平。仅仅用五篇近期论文，根本代表不了他的水平。",
      en: "If a person is a genuine scholar, every single one of their papers—whether published recently or decades ago, and regardless of the journal—can serve as a representative work that reflects their academic caliber. Restricting evaluation to five recent papers is a complete failure to capture their lifetime achievement."
    },
    {
      time: "00:01:20 - 00:01:45",
      cn: "所谓的‘代表作制度’建立在这样一个荒谬的前提上：一个人发表了100篇论文，只有五篇能拿得出手的，其它都是垃圾。这个制度的前提，就是直接假定这个学者是一个‘垃圾文章发表的高手’。",
      en: "The premise of the so-called 'representative works system' is fundamentally absurd: it assumes that out of 100 papers a scholar publishes, only five are respectable, while the other 95 are garbage. This system implicitly presumes that every scholar is merely a master of producing trash literature."
    },
    {
      time: "00:01:45 - 00:02:10",
      cn: "甚至这拿得出手的五篇文章，仅仅是因为它们是发表在顶刊上的垃圾文章。很多作者一生发表的最好、最得意的文章，并不是发表在最高等级刊物上的那些论文。这充分说明，SCI顶刊和同行评审并没有学术界吹嘘的那么神圣。",
      en: "Worse still, these five 'respectable' papers are often selected merely because they are high-profile trash published in prestigious journals. Indeed, the best and most profound works of many prominent authors were not published in top-tier journals. This proves that high-impact SCI journals and peer-review systems are far from being sacred or infallible."
    },
    {
      time: "00:02:10 - 00:02:35",
      cn: "但如果你去统计一下，几乎所有人提供的五篇代表作，都是他们发表在最顶级刊物的文章，而不是他们自己最满意的、真正具有科学创新的文章。这是因为当今学术界只认期刊的档次，没有人在意文章的真正质量。",
      en: "Yet, statistical observation reveals that almost everyone submits representative works published in top-tier journals, rather than the papers they are personally most satisfied with or those containing genuine scientific innovation. This is because modern academia is obsessed with journal tiers and impact factors, while turning a blind eye to the actual substance of the work."
    },
    {
      time: "00:02:35 - 00:03:00",
      cn: "我们的讲座系列，就是要建立一种新的学术风尚：是骡子是马，拿出来溜一溜。不敢拿出来溜、不敢接受公开审视的论文，无论发表在多么顶级的期刊上，大概率是垃圾。如果是金子，无论发表在什么期刊上都注定会闪光。代表作制度，见他妈的鬼去吧！",
      en: "The purpose of our lecture series is to establish a courageous new scholarly culture: 'Is it a mule or a horse? Take it out and show it!' Work that cannot withstand open public scrutiny—regardless of how prestigious the journal—is highly likely trash. Real gold, however, will shine brilliantly no matter where it is published. To hell with the representative works system!"
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-8 text-slate-100" id="representative-article-text">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Special Scholarly Treatise
          </span>
          <span className="bg-slate-800 text-slate-400 text-xs px-2.5 py-1 rounded-full font-mono font-medium">
            ESSAY AH (Fourier vs. Hückel & Representative Works)
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Fourier Series Expansion and Hückel Orbital Theory:
          <span className="block text-emerald-400 text-xl md:text-2xl mt-2 font-normal font-sans">
            The Absurdity of the "Representative Works" System and the Demystification of Journal Aristocracy
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-slate-800 pb-4">
          <div>
            By <span className="font-bold text-slate-200">Yue Liu, Ying Liu & Michael G. B. Drew</span>
          </div>
          <div>•</div>
          <div>Journal Reference: J. Math. Chem. (2013) 51:503–531</div>
          <div>•</div>
          <div className="font-mono">DOI: 10.1007/s10910-012-0092-9</div>
        </div>
      </div>

      {/* Abstract Box */}
      <div className="bg-slate-950 border-l-4 border-emerald-500 p-5 rounded-r-xl space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-sans">Scholarly Abstract</h3>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-serif italic">
          "Hückel Molecular Orbital (HMO) theory is an extremely simplified quantum chemical method. Yet, its extraordinary success, particularly in organic chemistry, has long puzzled theorists given its omission of electron-electron interactions and non-neighboring overlaps. In this treatise, we mathematically prove that the trigonometric methods of Hückel theory map directly onto the more general mathematical framework of Fourier series expansion. HMO theory and Fourier series represent two different formalisms of the same underlying physical truth—much like Schrödinger's wave mechanics and Heisenberg's matrix mechanics are equivalent representations. This structural isomorphism demonstrates that HMO theory's success is rooted in the universal mathematical properties of periodic systems. Building on this rigorous foundation, we challenge the modern administrative 'representative works' system. If a researcher's intellectual output is genuine, every single paper—regardless of its publication date or journal ranking—stands as a valid representative of their academic caliber. The administrative mandate that limits a scholar's lifetime contribution to 'five recent high-impact papers' rests on the absurd premise that the remaining 95% of their lifework is garbage. We demystify the sacred status of high-impact SCI journals and advocate for an open, substantive scholarly review culture."
        </p>
      </div>

      {/* Section 1 */}
      <div className="space-y-4 font-serif text-sm md:text-base text-slate-300 leading-relaxed">
        <h2 className="text-lg md:text-xl font-bold text-white font-sans flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-emerald-400 font-mono">I.</span> The Isomorphism of Hückel Orbital Theory and Fourier Series Expansion
        </h2>
        <p>
          The Hückel molecular orbital (HMO) method is a cornerstone of organic chemistry. Despite its severe approximations—most notably, considering only immediate neighboring interactions ($\beta$) and ignoring explicit inter-electronic repulsion—it yields surprisingly accurate results for conjugated $\pi$-electron systems. 
          To find the underlying reason for this success, we analyze the secular equations of Hückel theory for a conjugated straight chain:
        </p>
        <div className="bg-slate-950 p-4 rounded-xl my-4 overflow-x-auto font-mono text-center text-xs md:text-sm text-emerald-300 border border-slate-800">
          c<sub>j-1</sub>&beta; + c<sub>j</sub>(&alpha; - E) + c<sub>j+1</sub>&beta; = 0
        </div>
        <p>
          By defining a dimensionless parameter y = (E - &alpha;) / &beta; = 2 cos &theta;, the secular equations can be converted into a system of difference equations. 
          In our paper published in the <i>Journal of Mathematical Chemistry</i>, we demonstrated that this system can be mapped directly onto the one-dimensional crystal wave function with periodicity <i>a</i>:
        </p>
        <div className="bg-slate-950 p-4 rounded-xl my-4 overflow-x-auto font-mono text-center text-xs md:text-sm text-emerald-300 border border-slate-800">
          &Psi;(x) = &Sigma;<sub>j=1</sub><sup>N</sup> k<sub>j</sub> (1/&radic;L) e<sup>i (j 2&pi; / a) x</sup>
        </div>
        <p>
          The conjugated system is, in essence, a finite, limited periodic system. Thus, Hückel orbital theory is mathematically equivalent to a special, discrete case of Fourier series expansion. 
          Just as wave mechanics and matrix mechanics represent two structurally different but physically equivalent formulations of quantum theory, the Hückel formalism and the Fourier trigonometric framework are two representations of the same physical reality. 
          The success of HMO theory is not a fluke of approximation; it is guaranteed by the deep mathematical properties of periodic Fourier expansions.
        </p>
      </div>

      {/* Section 2 */}
      <div className="space-y-4 font-serif text-sm md:text-base text-slate-300 leading-relaxed">
        <h2 className="text-lg md:text-xl font-bold text-white font-sans flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-emerald-400 font-mono">II.</span> The Epistemological Absurdity of the "Representative Works" System
        </h2>
        <p>
          The realization that genuine scientific work is structurally unified by universal physical laws reveals the complete absurdity of modern administrative evaluation tools, particularly the "Representative Works" system. 
          Under this system, academic panels evaluate an entire career by asking the candidate to submit exactly five (or a similarly small, arbitrary number of) "representative papers," typically restricted to the last five years.
        </p>
        <p>
          This practice rests on an insulting and logically incoherent premise. If a scholar publishes 100 papers over a career, and only five of them are deemed "presentable" or representative of their true caliber, the system is implicitly assuming that the other 95 papers are total garbage. 
          It presumes that the scholar is a professional polluter of academic databases—a master of churning out "trash articles" to inflate their bibliography, save for five lucky anomalies.
        </p>
        <p>
          In a healthy, honest academic environment, <strong>every single paper a scholar publishes must represent their academic standard</strong>. 
          Whether a paper was written five years ago, twenty years ago, or published in a niche, specialized journal, if it represents a sincere, rigorous attempt to uncover truth, it is a representative work. 
          To suggest that a scholar's intellectual worth can be sliced, diced, and restricted to five recent high-impact PDFs is to reduce science to a tactical marketing campaign.
        </p>
      </div>

      {/* Section 3 */}
      <div className="space-y-4 font-serif text-sm md:text-base text-slate-300 leading-relaxed">
        <h2 className="text-lg md:text-xl font-bold text-white font-sans flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-emerald-400 font-mono">III.</span> The Fallacy of Journal Aristocracy and Peer Review
        </h2>
        <p>
          Why do scholars submit to this administrative farce? Because the modern academic apparatus has replaced substantive intellectual peer evaluation with "Journal Aristocracy." 
          If you conduct a statistical audit of the "representative papers" submitted by researchers, you will discover an alarming pattern: <strong>almost no one submits the paper they are personally most proud of or the one containing their most radical and authentic breakthrough</strong>. 
          Instead, they submit the papers published in the journals with the highest Impact Factors (Nature, Science, high-tier JACS, etc.).
        </p>
        <p>
          This is because the modern academic bureaucracy does not actually read the work. They do not understand the physics or the chemistry; they only count the impact factors and look at the brand names of the journals. 
          Yet, history and experience prove that SCI top-tier status is not sacred. Many of the most transformative, paradigm-shifting papers in scientific history were rejected by the "prestigious" journals of their day and published in modest, specialized venues. 
          Conversely, a shocking percentage of papers in "top-tier" journals are highly polished, fashionable, but ultimately empty "academic water-pouring" exercises that contribute nothing to the fundamental progress of human knowledge.
        </p>
      </div>

      {/* Section 4 - Bilingual Video Script Display */}
      <div className="space-y-6">
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white font-sans flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                Bilingual Video Transcript & Commentary
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Lecture 5: The Absurdity of the Representative Works System — Line-by-Line Presentation.
              </p>
            </div>
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition duration-200 cursor-pointer shadow-sm"
              id="copy-representative-script-btn"
            >
              <Copy className="w-3.5 h-3.5" />
              {copySuccess ? "Copied!" : "Copy Full Bilingual Script"}
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950 max-h-[500px] overflow-y-auto custom-scrollbar" id="representative-script-scroll-box">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-[10px] md:text-xs font-bold text-slate-300 font-sans tracking-wider uppercase">
                <th className="p-3 w-20 md:w-28 border-r border-slate-800">Timestamp</th>
                <th className="p-3 w-1/2 border-r border-slate-800">Original Chinese Lecture (第五讲：中文视频脚本)</th>
                <th className="p-3 w-1/2">Professional English Translation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs md:text-sm">
              {scriptSegments.map((segment, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition" id={`representative-segment-row-${idx}`}>
                  <td className="p-3 font-mono text-[10px] text-emerald-400 font-semibold align-top border-r border-slate-800 bg-slate-950/80">
                    {segment.time}
                  </td>
                  <td className="p-3 text-slate-300 font-sans font-medium leading-relaxed align-top border-r border-slate-800">
                    {segment.cn}
                  </td>
                  <td className="p-3 text-slate-200 italic leading-relaxed align-top">
                    {segment.en}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Comparison/Dilemma Highlight */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-950 border border-red-900/40 p-5 rounded-xl space-y-2" id="representative-criticism-card">
          <div className="flex items-center gap-2 text-rose-400 font-bold font-sans text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            The Bureaucratic Ideology
          </div>
          <p className="text-xs text-slate-300 font-serif leading-relaxed">
            - <strong>Presumed Garbage Ratio</strong>: Assumes that 95% of a researcher's output is filler. Encourages publishing "garbage on high hills" (top journals) rather than sustained, steady quality.<br />
            - <strong>KPI Aristocracy</strong>: Academic impact is judged by journal cover brand rather than replication, utility, or mathematical elegance.<br />
            - <strong>Short-term Opportunism</strong>: Forces scholars to follow fashionable, safe topics that guarantee quick high-impact publication, abandoning long-term, high-risk conceptual explorations.
          </p>
        </div>
        <div className="bg-slate-950 border border-emerald-900/40 p-5 rounded-xl space-y-2" id="representative-rectification-card">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-sans text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            The True Scholarly Ethos
          </div>
          <p className="text-xs text-slate-300 font-serif leading-relaxed">
            - <strong>Dignity of Every Publication</strong>: Any paper worth publishing must stand as a testament to the author's academic integrity. No "filler" papers allowed.<br />
            - <strong>"Is it a Mule or a Horse?"</strong>: Substantive peer evaluation—requiring judges to actually read and openly debate the papers under public scrutiny.<br />
            - <strong>Aesthetic Integrity</strong>: Like HMO theory and Fourier series, science shines because of mathematical beauty and descriptive truth, not the marketing badge of an editorial board.
          </p>
        </div>
      </div>

      {/* Concluding Box */}
      <div className="bg-slate-900/60 border border-emerald-500/20 p-6 rounded-xl space-y-3" id="representative-final-verdict-box">
        <h4 className="text-sm font-bold text-white font-sans flex items-center gap-1.5">
          <Award className="w-4 h-4 text-emerald-400" />
          The Final Verdict
        </h4>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-serif">
          Our lecture series seeks to establish a clean, fearless style of academic accountability. If you publish a paper, it must represent you. If your work is genuine gold, it will shine with mathematical and physical truth regardless of the prestige of the printing press that published it. Those who hide behind high-impact journal names but refuse to subject their actual methods to public, line-by-line inspection are exposing the fragility of their claims. Let us judge the horse by its running, the mule by its pulling, and let the representative works system—along with its gatekeeping journal aristocracy—be thrown into the dustbin of history.
        </p>
      </div>
    </div>
  );
}
