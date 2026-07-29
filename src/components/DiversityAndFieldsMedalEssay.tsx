import React from "react";
import { ShieldAlert, AlertTriangle, Scale, Brain, Flame, FileX, Zap, CheckCircle2, XCircle, Building2, Lock, Quote, Sparkles, Compass, Globe2, HeartHandshake, EyeOff } from "lucide-react";

export default function DiversityAndFieldsMedalEssay() {
  return (
    <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="diversityfieldsmedal-article-text">
      
      {/* Header Banner */}
      <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-rose-650 bg-rose-50 px-2.5 py-1 rounded">
          Essay DC • Diversity in Scientific Ecosystems vs. Monolithic Institutional Gatekeeping
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
          Diversity Is the Oxygen of Scientific Innovation: <br />
          <span className="text-xl md:text-2xl font-medium text-rose-800 block mt-2">
            What the Fields Medals of Hong Wang and Yu Deng Reveal About Institutional Conformity, Academic Censorship, and the Tyranny of Monolithic Peer Review
          </span>
        </h1>
        <p className="text-sm text-gray-400 font-mono">
          By Dr. Yue Liu, Dr. Ying Liu, & Prof. Michael G. B. Drew • Epistemological Treatise • July 2026
        </p>
        <div className="text-xs text-rose-900 bg-rose-50 px-3 py-1 rounded border border-rose-100 inline-block font-sans font-semibold">
          第四十四讲：从王虹与邓煜斩获菲尔茨奖看科研生态多样性——打破体制化审查、学术网暴与期刊门阀控制
        </div>
      </div>

      {/* Quote Block / Epigraph */}
      <div className="max-w-2xl mx-auto my-6 bg-slate-900 text-slate-100 p-5 rounded-xl space-y-4 shadow-inner border border-slate-800 font-mono text-xs md:text-sm">
        <div className="flex items-center gap-2 text-rose-400 border-b border-slate-800 pb-2">
          <Globe2 className="w-4 h-4 text-rose-400" />
          <span className="font-bold uppercase tracking-wider">The Paradox of Academic Talent & Environmental Fit</span>
        </div>
        <p className="italic text-slate-200 leading-relaxed font-serif text-xs md:text-sm">
          "When a researcher achieves monumental breakthroughs abroad, domestic institutions lament the 'brain drain.' Yet when that same researcher walked those domestic halls, they were not seen as an elite talent—they were dismissed as an awkward Zhang San, an inept Li Si, or someone who couldn't toast liquor at official banquets. Had Hong Wang stayed locked at Peking University, discouraged and denied even a basic recommendation letter, her Fields Medal potential would have been suffocated under administrative burdens. Diversity is not a luxury; it is the essential oxygen that allows unconventional genius to escape institutional conformity."
        </p>
        <p className="text-[10px] text-slate-400 text-right mt-1 font-sans">
          — Dr. Yue Liu, *Wu Wei Governance: A Philosophical Framework for Addressing the Academic Research Crisis*, SSRN: 5421094
        </p>
      </div>

      {/* Section 1: The Case Study of Wang Hong & Deng Yu */}
      <div className="space-y-4 pt-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">I.</span> The Case Study of Wang Hong & Deng Yu: Freedom from Administrative Conformity
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">案例分析：王虹与邓煜的超越——从被否定到问鼎菲尔茨奖</span>
        </h3>
        <p>
          The recent Fields Medal recognitions awarded to mathematicians Hong Wang (王虹) and Yu Deng (邓煜) offer profound empirical lessons regarding the necessity of academic diversity and environmental freedom.
        </p>
        <p>
          Consider their actual trajectories:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 font-serif">
          <li>
            <strong>Hong Wang's Struggle at Peking University:</strong> During her undergraduate years at Peking University, Hong Wang was deeply discouraged. She doubted whether she possessed mathematical talent and briefly interned at an architecture firm. When applying for graduate study abroad, she could not even obtain a recommendation letter from the PKU School of Mathematical Sciences, having to secure one from a professor in her previous space science department.
          </li>
          <li>
            <strong>The French & US Ecosystem Transformation:</strong> Upon moving to France, her advisor placed her in an environment completely free from administrative chores, grant paperwork, and rigid performance evaluations. CNRS allowed her to immerse herself fully in research. Later recommended to MIT and now holding dual positions at NYU's Courant Institute and CNRS, she flourished in a system that respected her unique cognitive tempo.
          </li>
          <li>
            <strong>Yu Deng's Trajectory & Domestic Censorship:</strong> Yu Deng transferred from PKU after two years to MIT and became a tenured professor at the University of Chicago. When media interviewed him following his award and asked whether young scholars should study abroad, Deng gave a balanced recommendation suggesting a period of international academic exposure. Unbelievably, <em>Peking University's official public account censored and deleted this exact sentence from their report!</em>
          </li>
        </ul>

        <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 font-sans text-xs md:text-sm space-y-2 my-3">
          <h5 className="font-bold text-rose-950 flex items-center gap-2 font-mono uppercase">
            <EyeOff className="w-4 h-4 text-rose-600" />
            The Pathology of Institutional Self-Flattery & Censorship (体制的虚伪与事实删改):
          </h5>
          <p className="text-rose-900 leading-relaxed font-serif">
            When French President Emmanuel Macron congratulated Hong Wang and expressed hope that her achievement would inspire female scientists, domestic media excised Macron's quote. When Yu Deng suggested international exposure, the university erased his words. This compulsion to sanitize reality reveals a terrified institutional establishment that prefers ideological purity over truth.
          </p>
        </div>
      </div>

      {/* Section 2: Diversity as Environmental Fit */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">II.</span> Diversity Is Environmental Fit: Escaping Monolithic Evaluation Metrics
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">多样性的实质：选择最适合发展的土壤，破除单一评价牢笼</span>
        </h3>
        <p>
          No single institution or national system possesses a monopoly on scientific truth. Researchers have distinct cognitive styles:
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-4 font-sans text-xs md:text-sm">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h5 className="font-bold text-slate-900 flex items-center gap-1.5 text-xs font-mono uppercase">
              <Compass className="w-4 h-4 text-slate-700 shrink-0" />
              1. Diverse Research Traditions
            </h5>
            <p className="text-slate-800 leading-relaxed font-serif text-xs">
              Some scientists excel in long-term theoretical solitude; others thrive in rapid experimental collaboration. Some require zero administrative oversight; others benefit from structured team infrastructure. True diversity guarantees that every scholar can seek the ecosystem where their specific talent is nurtured rather than crushed.
            </p>
          </div>

          <div className="p-4 bg-rose-50/90 border border-rose-200 rounded-xl space-y-2">
            <h5 className="font-bold text-rose-950 flex items-center gap-1.5 text-xs font-mono uppercase">
              <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
              2. The Tragedy of Monolithic Metrics
            </h5>
            <p className="text-rose-900 leading-relaxed font-serif text-xs">
              When a university evaluates scholars based solely on grant overheads, SCI volume, and social networking skills at banquet dinners, it inevitably elevates conformists while alienating transformative thinkers. As the commentary noted: when a scholar leaves, institutions cry "brain drain," yet when they were present, they were treated as an awkward outcast.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: When Journals Control Science */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">III.</span> The Modern Crisis: When Journal Editors Dictate What Counts as Science
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">期刊统治下的研究贫瘠：反驳“这只是你个人观点”的投机辞令</span>
        </h3>
        <p>
          In contemporary academia, what gets researched is no longer decided by independent thinkers pursuing physical truth. It is dictated by journal editors and peer-review cartels enforcing mainstream consensus.
        </p>
        <p>
          As detailed in Dr. Yue Liu's treatises:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-800 font-serif">
          <li>
            <em>Confronting the Fear: Understanding and Overcoming Retaliation in Academic Criticism</em> (SSRN: 5514918)
          </li>
          <li>
            <em>Wu Wei Governance: A Philosophical Framework for Addressing the Academic Research Crisis and Institutional Gatekeeping</em> (SSRN: 5421094)
          </li>
          <li>
            <em>Major Scientific Breakthroughs Are Not Born From Journals: A Direct Examination of AI, Microchips, and the Myth of "Gradual Academic Progress"</em> (SSRN: 5720702)
          </li>
        </ul>
        <p>
          When peer review enforces strict conformity, researchers stop asking: <em>"What is physically true?"</em> and start asking: <em>"What will the editor accept?"</em> The result is an impoverished, single-crop academic ecosystem where 95% of SCI articles are derivative fluff.
        </p>

        <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2 font-mono text-xs md:text-sm my-4 border border-slate-800">
          <h5 className="font-bold text-rose-400 flex items-center gap-2 uppercase tracking-wider text-xs">
            <Zap className="w-4 h-4 text-rose-400" />
            Refusing the AI Apologist Escape Line: "That Is Just Your Personal Opinion"
          </h5>
          <p className="text-slate-200 leading-relaxed font-serif text-xs md:text-sm">
            AI tools like ChatGPT often attempt to neutralize sharp critiques by inserting condescending disclaimers like <em>"Please note this is only the author's personal view."</em> <br /><br />
            <strong>Every scientific discovery in human history began as an individual's independent derivation!</strong> Einstein's special relativity was "just one clerk's opinion" in 1905; Planck's quantum hypothesis was "just one physicist's opinion" in 1900. To constantly dismiss independent critical thinking as "mere personal opinion" while elevating journal editorial consensus as "objective truth" is a contemptuous slap in the face to genuine scientific innovation.
          </p>
        </div>
      </div>

      {/* Section 4: Conclusion */}
      <div className="space-y-4 text-left pt-4 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">IV.</span> Conclusion: Protecting the Ecosystem of Independent Thought
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">结论：捍卫独立思考的多元生态，破除学术门阀统治</span>
        </h3>
        <p>
          The Field Medals of Hong Wang and Yu Deng prove that breakthroughs require institutional environments that grant freedom, strip away administrative friction, and respect individual cognitive paths.
        </p>
        <p>
          When mainstream academic journals function as gatekeepers of dead orthodoxy—suppressing corrective Wave Mechanics and protecting disproven impedance matching formulas—the solution is not to conform. The solution is to champion ecosystem diversity, publish full rejection letters openly, and rely steadfastly on first-principles mathematics.
        </p>
        <p className="font-bold text-center text-slate-900 border-t border-gray-100 pt-4 font-sans text-sm md:text-base">
          "True genius does not bow to editorial gatekeepers or banquet toast etiquette. Science advances when independent minds find diverse soils in which to flourish, guided only by elementary logic and the unyielding laws of nature."
        </p>
      </div>

    </article>
  );
}
