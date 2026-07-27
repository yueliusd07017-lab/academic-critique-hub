import React from "react";
import { Award, Brain, Scale, ShieldAlert, Sparkles, Compass, AlertTriangle, FileX, Zap, BookOpen } from "lucide-react";

export default function FieldsVsNobelEssay() {
  return (
    <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="fieldsvsnobel-article-text">
      
      {/* Header Banner */}
      <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-rose-650 bg-rose-50 px-2.5 py-1 rounded">
          Essay CN • Philosophy of Science & Epistemology of Scientific Honors
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
          Why the Fields Medal Better Represents Human Intellectual Progress Than the Nobel Prize: <br />
          <span className="text-xl md:text-2xl font-medium text-rose-800 block mt-2">
            Logic as Pure Science, Empirical Distortions, and the Fatal Arbitrariness of Institutional Rules
          </span>
        </h1>
        <p className="text-sm text-gray-400 font-mono">
          By Dr. Yue Liu, Dr. Ying Liu, & Prof. Michael G. B. Drew • Epistemological Critique • July 2026
        </p>
        <div className="text-xs text-rose-900 bg-rose-50 px-3 py-1 rounded border border-rose-100 inline-block font-sans font-semibold">
          第二十九讲：为何菲尔茨奖比诺贝尔奖更代表人类思想的进步——兼论学术奖项的人性缺陷与体制任性
        </div>
      </div>

      {/* Quote Block / Epigraph */}
      <div className="max-w-2xl mx-auto my-6 bg-slate-900 text-slate-100 p-5 rounded-xl space-y-4 shadow-inner border border-slate-800 font-mono text-xs md:text-sm">
        <div className="flex items-center gap-2 text-rose-400 border-b border-slate-800 pb-2">
          <Brain className="w-4 h-4 text-rose-400" />
          <span className="font-bold uppercase tracking-wider">The Epistemological Essence of Scientific Progress</span>
        </div>
        <p className="italic text-slate-200 leading-relaxed">
          "Science in its purest form is not the mechanical accumulation of laboratory routine—it is theory, thought, and strict logical deduction. Because mathematics is pure logic, the Fields Medal inherently honors theoretical innovation. When mainstream academia succumbs to the reductionist fallacy that 'doing experiments equals doing science,' the Nobel Prize is heavily distorted by empirical bias, whereas mathematics remains insulated by first principles."
        </p>
        <p className="text-[10px] text-slate-400 text-right mt-1 font-sans">
          — Dr. Yue Liu, *Critique of Scientific Awards and Theoretical Primacy*, July 2026
        </p>
      </div>

      {/* Section 1: The Popular Misconception */}
      <div className="space-y-4 pt-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">I.</span> The Popular Misconception: Breadth vs. Depth of Thought
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">大众误区：领域广度不等于思想深度</span>
        </h3>
        <p>
          It is widely asserted in public discourse that the Fields Medal and the Nobel Prize are peer honors of equal stature. Many even assume that the Nobel Prize superiorly represents overall scientific progress because its umbrella spans physics, chemistry, medicine, and economics, whereas the Fields Medal is restricted "merely" to mathematics.
        </p>
        <p>
          This is a fundamental misunderstanding of the epistemology of science. Scientific progress is not measured by the multi-disciplinary breadth of institutional coverage, but by the <strong>depth, rigor, and originality of theoretical thought</strong>.
        </p>
      </div>

      {/* Section 2: Science as Theory & Logic */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">II.</span> Mathematics as Pure Logic: Insulated from Empirical Fetishism
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">数学作为纯粹逻辑：不受“实验决定论”偏见之毒害</span>
        </h3>
        <p>
          At its core, genuine science consists of theoretical frameworks constructed upon logical necessity. Theory is thought; logic is the soul of theory.
        </p>
        <div className="bg-rose-50/90 rounded-xl p-4 border border-rose-200 space-y-3 font-sans text-xs md:text-sm my-3">
          <h5 className="font-bold text-rose-950 flex items-center gap-2 font-mono uppercase">
            <Scale className="w-4 h-4 text-rose-600" />
            The Empirical Reductionist Trap (做实验不等于做科学):
          </h5>
          <p className="text-rose-900 leading-relaxed font-serif">
            When modern scientific culture degenerates into the dogma that <em>"experimentation is the sole criterion of truth,"</em> empirical awards like the Nobel Prize become vulnerable to systemic bias. Committees increasingly reward incremental experimental data collection, tool engineering, and empirical trial-and-error over fundamental theoretical leaps.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-rose-850">
            <li>
              <strong>Mathematics as Pure Theory:</strong> Mathematics is pure logic. It is immune to the illusion that trial-and-error experimentation equals scientific discovery.
            </li>
            <li>
              <strong>First-Principles Insulation:</strong> Because mathematical breakthroughs cannot be faked through brute-force laboratory grinding, the Fields Medal remains naturally anchored to pure conceptual innovation.
            </li>
          </ul>
        </div>
      </div>

      {/* Section 3: Human Bias & Flaws in Prize Rules */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">III.</span> Human Stubbornness and Arbitrary Clauses: Structural Defects in Both Awards
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">奖项的形式缺陷：人为规定掩盖体制失误与任性</span>
        </h3>
        <p>
          All academic awards are chosen by human committees, and thus all reflect human cognitive bias, stubbornness, and administrative politics. While both awards recognize major leaps, both suffer from severe structural defects that prevent them from fully representing human intellectual advancement.
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-4 font-sans text-xs md:text-sm">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h5 className="font-bold text-slate-900 flex items-center gap-1.5 text-xs font-mono uppercase">
              <Award className="w-4 h-4 text-slate-700 shrink-0" />
              1. The Fields Age-40 Limit: A Fatal Formalism
            </h5>
            <p className="text-slate-800 leading-relaxed font-serif text-xs">
              Restricting the Fields Medal strictly to scientists under age 40 is an arbitrary administrative boundary. Why should a major theoretical breakthrough achieved by a senior mathematician be disqualified? Prioritizing age limits over pure intellectual merit reflects human prejudice—perhaps an attempt to compensate for missed past awards or an act of senior deference, but a structural flaw nonetheless.
            </p>
          </div>

          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-2">
            <h5 className="font-bold text-amber-900 flex items-center gap-1.5 text-xs font-mono uppercase">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
              2. The Nobel Living-Recipient Clause: Hiding Delays
            </h5>
            <p className="text-amber-950 leading-relaxed font-serif text-xs">
              The Nobel rule prohibiting posthumous awards is an admission of institutional failure. Truly disruptive theoretical leaps often take decades to overcome incumbent academic hostility (Planck's principle: "science advances one funeral at a time"). By refusing posthumous awards, the committee covers up its own tardiness in recognizing revolutionary ideas, forfeiting its claim to embody humanity's highest progress.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: When Committees Substitute Arbitrariness for Truth */}
      <div className="space-y-4 text-left">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">IV.</span> Administrative Arrogance vs. Theoretical Truth
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">委员会的任性：当行政规章凌驾于思想创新之上</span>
        </h3>
        <p>
          When a foundational theoretical breakthrough occurs after an award's founding, but the committee fails to recognize it in a timely manner, that is a failure of the committee, not of the innovator.
        </p>
        <div className="bg-slate-900 text-slate-100 p-4.5 rounded-xl border border-slate-800 font-sans text-xs md:text-sm space-y-3 my-3 shadow-md">
          <h5 className="font-bold text-rose-400 flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
            <FileX className="w-4 h-4 text-rose-400" />
            The Pathology of Self-Defending Committees (奖项委员会的防御性条款):
          </h5>
          <p className="text-slate-200 leading-relaxed font-serif">
            Instead of correcting their own oversights, prize committees invent bureaucratic rules to excuse their delays. When an institution places its own administrative rules above pure theoretical innovation, it reveals that it prioritizes its own pride and self-defense over scientific truth.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The moment a committee abandons theoretical innovation as its supreme criterion, it voluntarily surrenders its right to represent the pinnacle of human progress.
          </p>
        </div>
      </div>

      {/* Section 5: Conclusion */}
      <div className="space-y-4 text-left pt-4 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-rose-955 border-b border-gray-100 pb-1.5">
          <span className="text-rose-600 font-mono">V.</span> Conclusion: Maintaining Sobriety Toward Human Laurels
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">结论：清醒看待光环，唯有逻辑与真理永恒</span>
        </h3>
        <p>
          The Fields Medal stands closer to pure intellectual progress than the Nobel Prize because it operates in the realm of pure logic and mathematics, far less susceptible to empirical noise and laboratory trial-and-error fetishism.
        </p>
        <p>
          Yet both awards remain human constructs, burdened by arbitrary rules and committee vanity. True scientific progress is created not by medal committees, but by independent thinkers who stand firmly on first principles, regardless of whether human institutions choose to crown them.
        </p>
        <p className="font-bold text-center text-slate-900 border-t border-gray-100 pt-4 font-sans text-sm md:text-base">
          "Awards belong to human committees and their administrative whims. Truth belongs to first principles. When we look past institutional halos, we see that science advances through the sheer power of original thought, never through medal ceremonies."
        </p>
      </div>

    </article>
  );
}
