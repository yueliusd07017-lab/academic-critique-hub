import React from "react";
import { Sparkles, ShieldAlert, Cpu, Bot, GitCompare, HelpCircle, BookOpen, Landmark, Lock, Scale, Zap, FileText, AlertTriangle } from "lucide-react";

export default function PaperMillsAndCopyrightEssay() {
  return (
    <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="papermillscopyright-article-text">
      
      {/* Title Area */}
      <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-705 bg-amber-50 px-2.5 py-1 rounded">
          Essay BR • Institutional Philosophy & Root-Cause Epistemology
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
          Paper Mills, Copyright Transfer, and Fabricated Data: <br />
          <span className="text-xl md:text-2xl font-medium text-amber-900 block mt-2">
            The Root-Cause Epistemology of Systemic Academic Decay
          </span>
        </h1>
        <p className="text-sm text-gray-400 font-mono">
          By Dr. Yue Liu, Dr. Ying Liu, & Prof. Michael G. B. Drew • Institutional Epistemology • July 2026
        </p>
        <div className="text-xs text-amber-900 bg-amber-50 px-3 py-1 rounded border border-amber-200 inline-block font-sans font-semibold">
          第二十七讲：论文工厂、版权转让与数据造假——论现代学术界舍本求末的程序审查与制度腐败的根本病因
        </div>
      </div>

      {/* Epigraph Quote Block */}
      <div className="max-w-2xl mx-auto my-6 bg-slate-900 text-slate-100 p-5 rounded-xl space-y-4 shadow-inner border border-slate-800 font-mono text-xs md:text-sm">
        <div className="flex items-center gap-2 text-amber-400 border-b border-slate-800 pb-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span className="font-bold uppercase tracking-wider">Root-Cause vs. Procedural Distraction / 治本与治标的认识论对立</span>
        </div>
        <p className="italic text-slate-200 leading-relaxed">
          "Blaming paper mills, ghostwriters, or self-citations while SCI journals publish thousands of intellectually barren, metric-driven reports every day is treating the symptom while nourishing the disease. Paper mills do not create academic decay; they are the natural economic marketplace spawned by a corrupt publication cartel that values paper volume over original theoretical thought. When journals eliminate the market for academic garbage, paper mills will vanish overnight."
        </p>
        <p className="text-[10px] text-slate-400 text-right mt-1 font-sans">
          — Dr. Yue Liu, *Paper Mills, Copyright Transfer, and Fabricated Data*, Substack 2026
        </p>
      </div>

      {/* Section 1: The Root Cause of Paper Mills */}
      <div className="space-y-4 pt-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-amber-955 border-b border-gray-100 pb-1.5">
          <span className="text-amber-700 font-mono">I.</span> The Root Cause of Paper Mills: Demand-Driven Markets for Journal Garbage
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">论文工厂的根源：学术期刊发表垃圾论文创造了强劲市场</span>
        </h3>
        <p>
          In contemporary academic discourse, commercial "paper mills" (论文工厂) are routinely vilified by editorial boards as the ultimate threat to scientific integrity. 
          Publishers spend millions developing AI screeners, policing submission IPs, and launching retractions to hunt down paper mill products.
        </p>
        <p>
          This outrage completely misses the root cause. <strong>Paper mills did not cause the decay of modern science; they are the market reaction to it.</strong>
        </p>
        <p>
          In a capitalist society, projects are subcontracted, patents are bought and sold, and consulting firms sell ideas every day. 
          Why do paper mills thrive in academia? 
          Because modern SCI journals themselves publish vast oceans of metric-driven, incremental garbage every month. 
          When an evaluation system demands that every researcher publish 5 to 10 SCI papers a year for promotion, grants, or graduation, a massive commercial demand for paper production is artificially created. 
          If journals routinely published low-value, formulaic experimental reports, why should a commercial paper mill be blamed for mass-producing the exact same formulaic reports?
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-3 font-sans text-xs md:text-sm">
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2">
            <h5 className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              Surface Proceduralism (只许官府放火)
            </h5>
            <p className="text-slate-600 leading-relaxed">
              Journals prosecute individual paper mills and buyers while continuing to profit from publishing thousands of mindless, consensus-compliant experimental clutter.
            </p>
          </div>
          <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200 space-y-2">
            <h5 className="font-bold text-amber-955 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-700"></span>
              Root-Cause Solution (从源头治理)
            </h5>
            <p className="text-amber-900 leading-relaxed">
              Eliminate the market for academic garbage. If journals reject formulaic, idea-free reports and publish only genuine theoretical breakthroughs, paper mill products become instantly unsellable.
            </p>
          </div>
        </div>

        <p className="text-amber-950 bg-amber-50/80 p-3.5 rounded-xl border border-amber-200 font-sans text-[13px] leading-relaxed">
          <strong>舍本求末的制度批判：</strong><br />
          学术期刊大量发表毫无理论创新的垃圾文章，为论文工厂创造了无限商机。
          如果期刊坚持只发表有真正理论思想价值的论文，论文工厂制造的套路化垃圾根本无处可卖。
          现代学术界不从源头上反思SCI影响因子异化和期刊自身发表垃圾文章的罪魁祸首，却把全部责任推给论文工厂，这正是“只许官府放火，不许百姓点灯”的货拜族（Cargo Cult）典型例证。
        </p>
      </div>

      {/* Section 2: Self-Citation & Reviewer Citations */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-amber-955 border-b border-gray-100 pb-1.5">
          <span className="text-amber-700 font-mono">II.</span> Self-Citation and Reviewer Citations: Misplaced Criminalization of Metric Fever
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">自引与审稿人引用的被污名化：SCI指标崇拜下的本末倒置</span>
        </h3>
        <p>
          A similar procedural absurdity surrounds the demonization of **self-citations** and **reviewer self-citations**. 
          Publishing databases now penalize authors or reviewers who cite their own published work, labeling it "coercive citation" or "citation manipulation."
        </p>
        <p>
          Why was self-citation defined as "misconduct" in the first place? 
          Not because self-referencing is inherently unscientific—a pioneer developing a long-term theoretical framework naturally needs to build upon their previous foundational papers. 
          Self-citation was turned into a crime solely because modern academia worships **SCI Impact Factors**, turning citation counts into currency for cash bonuses, university rankings, and career promotions.
        </p>
        <p className="text-gray-700 italic">
          根子在于源头的SCI影响因子与学术游戏化。
          当引用量变成了直接套现的货币，学术界便开始疯狂制定各类“限制自引”的细枝末节规定。
          治水不治源，反而去惩罰正常的学术继承引用，这是典型的抓小放大、舍本求末。
        </p>
      </div>

      {/* Section 3: Data Fabrication vs. Conceptual Emptiness */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-amber-955 border-b border-gray-100 pb-1.5">
          <span className="text-amber-700 font-mono">III.</span> Data Fabrication vs. Conceptual Emptiness: The False Dichotomy of Garbage Papers
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">数据造假与思想空洞：两类学术垃圾的虚妄区别</span>
        </h3>
        <p>
          Consider the traditional definition of "academic fraud": fabricating data, photoshop splicing of EM images, or copying spectral curves. 
          In modern Cargo Cult academia, a paper with real experimental data is celebrated as "honest science," while a paper with spliced data is condemned as "fraudulent misconduct."
        </p>
        <p>
          From a foundational theoretical perspective, this distinction is largely superficial. 
          When 95% of published papers in a discipline (such as thin-film microwave absorption) repeat the erroneous impedance matching formula, **both the "honest data" paper and the "fabricated data" paper are consensus-compliant garbage**. 
          Neither provides a single new idea; both reinforce a mathematically dead dogma.
        </p>
        <p className="text-rose-900 bg-rose-50/50 p-3.5 rounded-xl border border-rose-105 font-sans text-[13px] leading-relaxed">
          <strong>垃圾文章的本质统一：</strong><br />
          在货拜族科学环境中，真正的理论创新（如波动力学理论推翻阻抗匹配）被刊物无情封杀，而无数只是“换个材料做实验”的报告被大量发表。
          在这种环境下，有些作者为了让曲线符合主流共识而修图造假，有些作者费尽心思做真实实验——但两者的产物在思想价值上毫无区别，都是符合主流错误的学术噪声。
          用“造假与否”来区分两类毫无思想内核的垃圾文章，除了给程序官僚增加审查指标外，对推动科学真理没有任何积极意义。
        </p>
      </div>

      {/* Section 4: Lu Xun's Metaphor & Systemic Critique */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-amber-955 border-b border-gray-100 pb-1.5">
          <span className="text-amber-700 font-mono">IV.</span> Lu Xun's "Roof and Window" Metaphor: Forcing Radical Truth into Public Discourse
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">鲁迅“拆屋开窗”的隐喻：以极端的彻底批判打破学术温水煮青蛙</span>
        </h3>
        <p>
          When academic critics present polite, incremental suggestions—such as "let's refine peer-review guidelines" or "let's add AI disclosure statements"—the institutional cartel nods politely and changes nothing. 
          This illustrates the famous insight of the great Chinese thinker **Lu Xun (鲁迅)**:
        </p>
        <blockquote className="border-l-4 border-amber-600 pl-4 italic text-gray-800 bg-amber-50/30 py-2 rounded-r my-2 font-sans text-xs md:text-sm">
          "The human disposition always likes compromise. If you say, 'This room is too dark; we must open a window here,' everyone will oppose you. But if you propose to tear off the roof, they will come to compromise and agree to open the window."
          <br />
          <span className="text-[11px] font-semibold text-amber-900 block mt-1 font-mono">
            — Lu Xun, *Ills of the Age* (1927)
          </span>
        </blockquote>
        <p>
          By declaring that **the entire modern publishing ecosystem operates as Cargo Cult Science**, and by exposing how metric fever, paper mill witch-hunts, and editorial gatekeeping protect a corrupt status quo, we tear off the roof. 
          Only by confronting the full magnitude of systemic decay do researchers begin to realize that minor procedural patches are useless—and that genuine scientific progress requires returning to **first-principles theoretical reasoning and uncompromising intellectual honesty**.
        </p>
      </div>

      {/* Section 5: Conclusion */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-amber-955 border-b border-gray-100 pb-1.5">
          <span className="text-amber-700 font-mono">V.</span> Conclusion: Cure the Disease, Stop Nursing the Symptoms
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">结论：拔除论文工厂与指标祸根，让科学回归思想本身</span>
        </h3>
        <p>
          Paper mills, copyright transfers, self-citation panics, and data tinkering are not isolated individual sins—they are the natural symptoms of a broken, metric-obsessed publication machine. 
          When journals stop rewarding data volume and start publishing only rigorous, original theoretical ideas, the market for academic fraud will collapse overnight.
        </p>
        <p>
          We call upon the global scientific community to abandon procedural theater, tear down the artificial barriers of Cargo Cult gatekeeping, and restore the absolute supremacy of **ideas, logic, and truth**.
        </p>
        <p className="font-bold text-center text-slate-900 border-t border-gray-100 pt-4 font-sans text-sm md:text-base">
          "Cure the disease at its root: when journals publish only genuine theoretical truth, paper mills and metric games will die of starvation."
        </p>
      </div>

    </article>
  );
}
