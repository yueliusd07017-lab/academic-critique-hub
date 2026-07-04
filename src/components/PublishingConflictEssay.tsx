import React, { useState } from "react";
import { BookOpen, Copy, Sparkles, Scale, Award, Heart, HelpCircle, AlertTriangle, Cpu, TrendingUp, RefreshCw } from "lucide-react";

interface MathFormula {
  id: string;
  title: string;
  latex: string;
  description: string;
  significance: string;
}

export default function PublishingConflictEssay() {
  const [copySuccess, setCopySuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<"thermo" | "pedagogy" | "publishing">("thermo");

  const handleCopyText = () => {
    const el = document.getElementById("publishingconflict-article-text");
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const formulas: MathFormula[] = [
    {
      id: "formula-12-14",
      title: "Equations 12 & 14: The Interlinked Identity of dS(T,V) and dS(T,P)",
      latex: "dS(T, V) = \\left[ \\left(\\frac{\\partial S}{\\partial T}\\right)_P + \\left(\\frac{\\partial S}{\\partial P}\\right)_T \\left(\\frac{\\partial P}{\\partial T}\\right)_V \\right] dT + \\left(\\frac{\\partial S}{\\partial P}\\right)_T \\left(\\frac{\\partial P}{\\partial V}\\right)_T dV = dS(T, P)",
      description: "Explicitly reveals that entropy S is a state function and its change is completely independent of the path. Developed via the chain rule, Maxwell relations, and exact differentials.",
      significance: "Dr. Liu's favorite formulation showing the deep mathematical connection between constant-volume and constant-pressure entropy expressions."
    },
    {
      id: "formula-25-26",
      title: "Equations 25 & 26: Path Independence of Entropy Change (ΔS)",
      latex: "\\Delta S = C_v \\ln\\frac{T_2}{T_1} + nR \\ln\\frac{V_2}{V_1} = C_p \\ln\\frac{T_2}{T_1} - nR \\ln\\frac{P_2}{P_1}",
      description: "The integrated form of Equations 12 and 14 for an ideal gas, proving mathematically that ΔS is identical regardless of the thermodynamic path chosen (isobaric vs. isochoric transitions).",
      significance: "Demonstrates that thermodynamic concepts and mathematical structures are inseparable in teaching physical rigor."
    },
    {
      id: "formula-34",
      title: "Equation 34: Concept-Mathematical Equivalence",
      latex: "\\left(\\frac{\\partial S}{\\partial T}\\right)_P = \\left(\\frac{\\partial S}{\\partial T}\\right)_V + \\left(\\frac{\\partial S}{\\partial V}\\right)_T \\left(\\frac{\\partial V}{\\partial T}\\right)_P",
      description: "Directly relates the isobaric entropy change to isochoric entropy change plus the volumetric correction. Dr. Liu proves this can be derived seamlessly either through pure mathematical chain rules or through physical thermodynamic concepts (via Eqs. 7, 8, and 32).",
      significance: "Highlights that mathematical structure is not a detour from physical concepts, but their most complete and elegant expression."
    },
    {
      id: "formula-48-53",
      title: "Equations 48 - 53: Independent Jacobian Determinant Derivation",
      latex: "J = \\frac{\\partial(x, y)}{\\partial(u, v)} = \\begin{vmatrix} \\left(\\frac{\\partial x}{\\partial u}\\right)_v & \\left(\\frac{\\partial x}{\\partial v}\\right)_u \\\\ \\left(\\frac{\\partial y}{\\partial u}\\right)_v & \\left(\\frac{\\partial y}{\\partial v}\\right)_u \\end{vmatrix}",
      description: "An elegant mathematical framework independently developed by Dr. Yue Liu without referencing external literature, using Cramer's rule to transition thermodynamic state variables through determinants.",
      significance: "Provides students with advanced mathematical tools to solve complex, multi-variable thermodynamic problems systematically."
    },
    {
      id: "formula-water-anomaly",
      title: "Equations 35 - 38: Resolving the 0–4°C Water Anomaly of (Cp - Cv)",
      latex: "C_p - C_v = -T \\frac{\\left[ \\left(\\frac{\\partial V}{\\partial T}\\right)_P \\right]^2}{\\left(\\frac{\\partial V}{\\partial P}\\right)_T} = \\frac{\\alpha_P^2 TV}{\\kappa_T} \\ge 0",
      description: "Addresses the reviewer's query regarding contradictory experimental measurements of Cp - Cv in different literature. Proves theoretically that even when water contracts in volume as temperature increases from 0 to 4°C (thermal expansion coefficient α_P < 0), Cp - Cv is strictly non-negative.",
      significance: "A supreme demonstration of theoretical physics resolving experimental disputes and elevating the overall quality of the peer-reviewed work."
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-8 text-slate-100" id="publishingconflict-article-text">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Lecture 6: Ideological Clash
          </span>
          <span className="bg-slate-800 text-slate-400 text-xs px-2.5 py-1 rounded-full font-mono font-medium">
            ESSAY AJ (AJP 2020 Publication & SSRN 5470606)
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Conflict of Interest in Academic Publishing:
          <span className="block text-amber-400 text-xl md:text-2xl mt-2 font-normal font-sans">
            How the Pursuit of Academic Consensus Suppresses Philosophical Rigor and Educational Truth
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-slate-800 pb-4">
          <div>
            Epistemological Critique by <span className="font-bold text-slate-200">Dr. Yue Liu</span>
          </div>
          <div>•</div>
          <div>Published in AJP: <a href="https://doi.org/10.1119/10.0000305" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">AJP 2020 (88, 51)</a></div>
          <div>•</div>
          <div>Available on SSRN: <a href="https://ssrn.com/abstract=5470606" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">SSRN 5470606</a></div>
        </div>
      </div>

      {/* Abstract and Paradigm Box */}
      <div className="bg-slate-950 border-l-4 border-amber-500 p-5 rounded-r-xl space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">Explanatory Synopsis & Reflective Paradox</h3>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-serif italic">
          "This treatise explores the fundamental clash between the individual pursuit of uncompromising scientific truth and the institutional framework of academic publishing. Grounded in Dr. Yue Liu's 2020 publication in the American Journal of Physics, we explore a fascinating duality: while academic editors systematically polish texts to align with established professional standards—removing intense, confrontational rhetoric to foster a cooperative scholarly consensus—this collective mechanism coexists with moments of profound intellectual enhancement. Indeed, as demonstrated by a reviewer's challenging query on the 0–4°C water heat capacity anomaly, constructive peer dialogue can act as a powerful counter-example to skepticism, directly elevating theoretical precision. True scientific progress requires a synthesis of individual scientific courage and responsible collective peer-evaluation."
        </p>
      </div>

      {/* Tabs Selector */}
      <div className="flex border-b border-slate-800">
        <button
          onClick={() => setActiveTab("thermo")}
          className={`py-3 px-4 font-sans text-xs md:text-sm font-bold uppercase tracking-wider transition border-b-2 ${
            activeTab === "thermo"
              ? "border-amber-400 text-amber-400 font-extrabold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          I. Thermodynamic Rigor
        </button>
        <button
          onClick={() => setActiveTab("pedagogy")}
          className={`py-3 px-4 font-sans text-xs md:text-sm font-bold uppercase tracking-wider transition border-b-2 ${
            activeTab === "pedagogy"
              ? "border-b-2 border-amber-400 text-amber-400 font-extrabold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          II. The Pedagogical Betrayal
        </button>
        <button
          onClick={() => setActiveTab("publishing")}
          className={`py-3 px-4 font-sans text-xs md:text-sm font-bold uppercase tracking-wider transition border-b-2 ${
            activeTab === "publishing"
              ? "border-b-2 border-amber-400 text-amber-400 font-extrabold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          III. Consensus vs. Conflict
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === "thermo" && (
        <div className="space-y-6 animate-fade-in">
          <div className="prose max-w-none font-serif text-sm md:text-base text-slate-300 leading-relaxed space-y-4">
            <h3 className="text-lg font-bold text-white font-sans flex items-center gap-2">
              <Cpu className="w-5 h-5 text-amber-400" /> Connecting Thermodynamic Paths: Method A & The Jacobian
            </h3>
            <p>
              In our paper published in the <i>American Journal of Physics</i> (2020, 88), we established that the relationship between heat capacities at constant pressure ($C_p$) and constant volume ($C_v$) can be derived through multiple, interconnected mathematical paths. 
              The power of this methodology lies in proving that seemingly disparate approaches converge on the exact same physical reality.
            </p>
            <p>
              We are most proud of establishing the direct connection between $dS(T,P)$ and $dS(T,V)$ (Equations 12 and 14), proving that entropy's path-independence is not just a hand-waving conceptual statement, but a mathematically tight identity. Furthermore, we independently developed the Jacobian determinant transformation (Equations 48–53) from first principles, utilizing Cramer's rule without relying on standard secondary literature, which provides an advanced tool for students to conquer multi-variable thermal relations.
            </p>
          </div>

          {/* Interactive Formulas Panel */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 md:p-6 space-y-4">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-sans">
              Theoretical Highlights & Formulas from AJP 2020
            </h4>
            <div className="divide-y divide-slate-800 space-y-4">
              {formulas.map((formula) => (
                <div key={formula.id} className="pt-4 first:pt-0 space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs md:text-sm font-bold text-slate-200 font-sans flex items-center gap-1">
                      <Scale className="w-3.5 h-3.5 text-amber-500" />
                      {formula.title}
                    </h5>
                    <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                      {formula.id === "formula-water-anomaly" ? "Reviewer Breakthrough" : "Core Proof"}
                    </span>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 font-mono text-center text-xs md:text-sm text-amber-300 overflow-x-auto">
                    {formula.latex}
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    <strong>Description:</strong> {formula.description}
                  </p>
                  <p className="text-xs text-slate-400 font-sans italic">
                    <strong>Significance:</strong> {formula.significance}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Water Anomaly Resolution */}
          <div className="bg-indigo-950/20 border border-indigo-900/40 p-5 rounded-xl space-y-2">
            <h4 className="text-sm font-bold text-indigo-400 font-sans flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" /> A Supreme Peer-Review Counterexample: Resolving the Cp - Cv Water Anomaly (0 - 4°C)
            </h4>
            <p className="text-xs md:text-sm text-slate-300 font-serif leading-relaxed">
              During the peer review process, a reviewer posed an intriguing and deep question: <i>"Different published experimental reports show contradictory measurements of $C_p - C_v$ around 0 to 4°C—some reporting positive values, others reporting negative. Is this mere experimental error, or is there a physical reason?"</i>
            </p>
            <p className="text-xs md:text-sm text-slate-300 font-serif leading-relaxed">
              Although Dr. Yue Liu has often expressed profound skepticism and distrust toward peer review mechanisms, this specific event stands as a magnificent <strong>counterexample (一个宝贵的反例)</strong>. It demonstrates that the peer-review system, at its best, can directly partner with authors to polish and elevate the caliber of a manuscript. 
            </p>
            <p className="text-xs md:text-sm text-slate-300 font-serif leading-relaxed">
              In response to this question, our paper resolved the debate theoretically (Equations 35–38). For water in this range, the volume decreases as temperature rises at constant pressure ($\alpha_P &lt; 0$). However, because the internal energy of liquid water is heavily dependent on volume, the term $(\partial U/\partial T)_P - (\partial U/\partial T)_V$ in Equation 28 is no longer zero. Our theoretical proofs demonstrated that $C_p - C_v \ge 0$ remains strictly valid in all cases, confirming that the negative experimental measurements in the literature were indeed erroneous artifacts. This reviewer-induced resolution vastly elevated the value and scientific completeness of our final publication.
            </p>
          </div>
        </div>
      )}

      {activeTab === "pedagogy" && (
        <div className="space-y-4 font-serif text-sm md:text-base text-slate-300 leading-relaxed animate-fade-in">
          <h3 className="text-lg font-bold text-white font-sans flex items-center gap-2 border-b border-slate-800 pb-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" /> The Myth of Math-Avoidant Science Education
          </h3>
          <p>
            The original manuscript we submitted to the <i>American Journal of Physics</i> carried a massive, passionate philosophical argument regarding the decay of modern science education. 
            We observed that modern textbook writers and curriculum designers have developed a dogmatic obsession with "simplification." 
            They strive to explain highly complex physical concepts using purely intuitive, verbal descriptions, while actively avoiding and blunting rigorous mathematical derivations.
          </p>
          <div className="bg-slate-950 border-l-4 border-amber-500 p-4 rounded-r-lg my-4 font-sans text-xs md:text-sm text-slate-200 space-y-2">
            <p className="font-bold text-amber-400 uppercase tracking-wider text-[10px]">From the Original Uncensored Manuscript:</p>
            <p className="italic leading-relaxed">
              "The ultimate purpose of higher education is not to pamper students with superficial, simplified summaries under the guise of 'student-centered care.' Such methods leave students with the illusion of knowledge, while rendering them entirely incompetent when facing actual, complex physical problems. Authentic physical concepts must be established through mathematical rigor; skipping the math means denying students the very methods by which scientific truths are discovered."
            </p>
          </div>
          <p>
            We advocated for "Focus on Methodology" (讲解方法). While a teacher in a classroom might introduce a single, easy method to guide students through the door, a comprehensive textbook is obligated to present multiple, interconnected mathematical paths. 
            A simple method provides quick access; a complex, rigorous mathematical structure (such as the Jacobian method) builds the intellectual muscle and theoretical capacity required for genuine research. 
            To strip textbooks of mathematics is to commit academic sabotage.
          </p>
        </div>
      )}

      {activeTab === "publishing" && (
        <div className="space-y-4 font-serif text-sm md:text-base text-slate-300 leading-relaxed animate-fade-in">
          <h3 className="text-lg font-bold text-white font-sans flex items-center gap-2 border-b border-slate-800 pb-2">
            <Scale className="w-5 h-5 text-amber-400" /> A Balanced Perspective on Systemic Consensus and Editorial Realities
          </h3>
          <p>
            When our AJP article was accepted, the editors performed an incredibly thorough, meticulous, line-by-line rewrite of our entire text. 
            On one hand, this process was an act of outstanding professional responsibility. The editors dedicated immense effort to polishing our grammar and structure, ensuring the manuscript read with utmost precision and complied perfectly with the journal's elevated presentation style. As our esteemed co-author, Professor Drew, rightly noted, these modifications made the paper read "beautifully and professionally." We hold the editors' diligence in high, sincere regard.
          </p>
          <p>
            Indeed, our article's successful acceptance and publication represents a profound validation of our core ideals: <strong>the editors accepted our work precisely because they recognized and valued our unique, non-consensus teaching methodology and physical vision.</strong> Had they fundamentally disagreed with our core premise, the paper would have been instantly desk-rejected ("秒拒"). This acknowledgment proves that established journals are capable of appreciating and hosting pioneering, dissenting thoughts.
          </p>
          <p>
            At the same time, this process systematically removed our extensive, direct philosophical critique of the "math-avoidant" trends in modern physical education. We recognize that this is not an issue with any specific editor, but a reflection of the core, defining philosophy of global academic publishing: a system designed to build cooperative consensus, present ideas in a manner that is universally acceptable, and minimize controversial disputes that might bring administrative or scholastic trouble in the future.
          </p>
          <p>
            For a researcher seeking to express their insights and make a meaningful impact, accepting this professional reality is a necessary and constructive trade-off. We adapt to the consensus standards of the community as a bridge to share our deeper truths, while recognizing that independent platforms offer a complementary space to voice our unvarnished, sharp-edged ideals.
          </p>
          <p>
            This systemic experience inspired our theoretical preprint on SSRN: <i>Conflict of Interest in Academic Publishing: A Question of Accountability in the Pursuit of Truth</i> (SSRN 5470606), where we modeled these two coexisting publishing philosophies.
          </p>
          <div className="bg-red-950/20 border border-red-900/40 p-5 rounded-xl space-y-4">
            <h4 className="text-sm font-bold text-rose-400 font-sans flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-500 animate-pulse" />
              The Sunk-Cost of Falsehood and the Fear of Self-Correction
            </h4>
            <p className="text-xs md:text-sm text-slate-300 font-serif leading-relaxed">
              The deep resistance to self-correction in modern academia stems from its vast, systemic vested interests: 
              <strong> 这么多学术权威是靠造假晋升的，所以整个学术界都怕纠错、都怕打假。这就是为什么现代学术界打假、纠错的阻力这么大。</strong>
              When an entire elite class has built their reputations, titles, and multi-million-dollar grant portfolios upon flawed foundations, error correction is no longer viewed as a healthy scientific utility, but as an existential threat to the cartel.
            </p>
            <p className="text-xs md:text-sm text-slate-300 font-serif leading-relaxed">
              Consequently, fundamental, wave-physics conclusions—such as 
              <i> "interfaces do not absorb microwaves" (界面不吸收微波)</i>, 
              <i> "when a bulk material does not absorb microwaves, its corresponding thin film cannot absorb microwaves either" (材料不吸收微波，膜也不会吸收微波)</i>, and 
              <i> "when incident microwaves fully enter a material, no wave absorption peak can ever be generated" (入射微波全部进入材料时绝不会产生微波吸收峰)</i>
              —are not merely "relatively correct" models dependent on specific, cherry-picked experimental data. They are <strong>absolute physical facts and universal, mathematically proven conclusions (是理论严格证明的普适结论，绝不是相对正确，而是绝对正确)</strong>.
            </p>
            <p className="text-xs md:text-sm text-slate-300 font-serif leading-relaxed">
              Yet, in a consensus-driven academic publishing market, these absolutely correct physical laws are met with cold indifference: 
              <strong> 但是绝对正确的理论没人关心、没有人引用、没有人看。相反，靠经验数据拟合、在物理和数学上千疮百孔的“阻抗匹配理论”文章却大量发表、大量被引用。</strong>
              This tragic inversion of values—where mathematically flawless truths are sidelined while convenient, data-fitted fictions are celebrated—reveals the true moral and intellectual decay of modern institutional science.
            </p>
          </div>
          <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-sans">
              Coexisting Ideologies in Academic Knowledge Networks
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans leading-relaxed">
              <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800 space-y-2">
                <span className="text-amber-400 font-bold uppercase tracking-wider block">1. The Collective Consensus Model (The Establishment)</span>
                <p className="text-slate-300">
                  <strong>Core Directive:</strong> Cultivate harmony, ensure widespread professional acceptability, and present refined results that the community can collectively endorse without extreme friction.<br />
                  <strong>Result:</strong> Responsible editors polish and restructure manuscripts to align with community standards. While some sharp educational critiques are omitted to avoid unnecessary disputes, it maintains a highly unified and cooperative knowledge base.
                </p>
              </div>
              <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800 space-y-2">
                <span className="text-indigo-400 font-bold uppercase tracking-wider block">2. The Individual Truth-Seeking Model (The Arena)</span>
                <p className="text-slate-300">
                  <strong>Core Directive:</strong> Focus on direct corrections of textbooks, expose theoretical anomalies with raw precision, and speak with a highly unique, unvarnished voice.<br />
                  <strong>Result:</strong> Valued as an active intellectual catalyst. It challenges the community to re-evaluate dogmas, and acts as a constructive check on systemic complacency.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-amber-955/25 border border-amber-900/40 p-5 rounded-xl space-y-4">
            <h4 className="text-sm font-bold text-amber-400 font-sans flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              The Pedagogical Mandate: Learning Capacity Over Metric-Driven "Innovation"
            </h4>
            <p className="text-xs md:text-sm text-slate-300 font-serif leading-relaxed italic border-l-4 border-amber-500 pl-3">
              "The creation of new knowledge is only part of education. Education mainly concerns learning, learning ability, and the ability to apply knowledge to solve real problems."
              <br />
              <span className="text-xs text-amber-400/90 block mt-1 font-sans not-italic font-bold">
                — Section 3 of Supporting Information, "Anodic Polarization Curves Revisited" (Journal of Chemical Education, 2013)
              </span>
            </p>
            <p className="text-xs md:text-sm text-slate-300 font-serif leading-relaxed">
              This statement exposes a tragic systemic flaw in modern academic training. Universities have largely transformed into metric-obsessed paper factories that prioritize superficial "novelty" over rigorous theoretical foundations. Graduate students are forced to "innovate" and publish speculative findings before they have even mastered basic wave mechanics, classical kinetics, or thermodynamic equations.
            </p>
            <p className="text-xs md:text-sm text-slate-300 font-serif leading-relaxed">
              True scientific education must center on <strong>learning capacity, critical thinking, and the absolute power to apply proven, rigorous physical principles to solve real-world problems</strong>. Innovation cannot be manufactured by bureaucratic quotas; it is the natural, inevitable outcome of a mind that has fully inherited, audited, and internalized the masterworks of science.
            </p>
          </div>
          <p>
            We recognize that to publish within established journals, one must naturally adapt to the collective expectations of the publishing consensus. This is a reasonable and necessary trade-off for community-wide collaboration. However, when an independent scholar reaches a stage of career security or intellectual self-reliance where they no longer depend on mainstream approval, they can fully reclaim their unvarnished voice. Both paths serve science: one preserves and refines the shared consensus, while the other courageously points to the raw frontier.
          </p>
        </div>
      )}

      {/* Copy Script / Copy Article Section */}
      <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-amber-500 animate-pulse" />
          <span className="text-xs text-slate-400 font-sans">
            Independent Scientific Integrity • Dr. Yue Liu & Prof. Drew (AJP 2020)
          </span>
        </div>
        <button
          onClick={handleCopyText}
          className="flex items-center justify-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition duration-200 cursor-pointer shadow-sm"
          id="copy-publishingconflict-essay-btn"
        >
          <Copy className="w-3.5 h-3.5" />
          {copySuccess ? "Copied to Clipboard!" : "Copy Full Essay Text"}
        </button>
      </div>
    </div>
  );
}
