import React, { useState } from "react";
import { BookOpen, Award, CheckCircle2, Copy, FileText, Share2, CornerRightDown, BookMarked, HelpCircle, ShieldX, Sparkles } from "lucide-react";

export default function IntegratedArticle() {
  const [activeArticle, setActiveArticle] = useState<"asymmetry" | "darkage" | "systemic" | "freedom" | "metaphysics" | "tyranny">("asymmetry");

  const handleCopy = (textId: string) => {
    const el = document.getElementById(textId);
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      alert("Article copied to clipboard!");
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-6 md:space-y-8 animate-fade-in" id="integrated-article-comp">
      
      {/* Header Panel */}
      <div className="border-b border-gray-100 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
            <BookOpen className="w-3.5 h-3.5 text-slate-900" /> Master Editorial Article
          </span>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight font-sans">
            Integrated Academic Analysis
          </h2>
          <p className="text-sm text-gray-500 font-serif font-light">
            Critiques of grassroots whistleblowing, systemic gatekeeping, and the autocratic censorship of modern scientific publishing.
          </p>
        </div>
        
        <button
          onClick={() => handleCopy(
            activeArticle === "asymmetry" ? "master-article-text" :
            activeArticle === "darkage" ? "darkage-article-text" :
            activeArticle === "systemic" ? "systemic-article-text" :
            activeArticle === "freedom" ? "freedom-article-text" :
            activeArticle === "metaphysics" ? "metaphysics-article-text" :
            "tyranny-article-text"
          )}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-950 text-white font-semibold font-sans py-2.5 px-4 rounded-xl text-xs transition duration-250 self-start md:self-auto shrink-0 shadow-2xs cursor-pointer"
          id="copy-article-btn"
        >
          <Copy className="w-3.5 h-3.5" />
          Copy Active English Essay (复制当前文章)
        </button>
      </div>

      {/* Dual Article Swapper Toggle */}
      <div className="space-y-2">
        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
          Select Master Scholarly Essay / 选择核心学术论文
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveArticle("asymmetry")}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-sans text-xs font-bold uppercase transition tracking-wider cursor-pointer ${
              activeArticle === "asymmetry"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
            id="toggle-article-asymmetry"
          >
            <BookMarked className="w-4 h-4 shrink-0" />
            Essay A: Asymmetry
          </button>
          <button
            onClick={() => setActiveArticle("darkage")}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-sans text-xs font-bold uppercase transition tracking-wider cursor-pointer ${
              activeArticle === "darkage"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
            id="toggle-article-darkage"
          >
            <ShieldX className="w-4 h-4 shrink-0 text-red-500" />
            Essay B: Dark Age
          </button>
          <button
            onClick={() => setActiveArticle("systemic")}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-sans text-xs font-bold uppercase transition tracking-wider cursor-pointer ${
              activeArticle === "systemic"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
            id="toggle-article-systemic"
          >
            <HelpCircle className="w-4 h-4 shrink-0 text-amber-500" />
            Essay C: Systemic
          </button>
          <button
            onClick={() => setActiveArticle("freedom")}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-sans text-xs font-bold uppercase transition tracking-wider cursor-pointer ${
              activeArticle === "freedom"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
            id="toggle-article-freedom"
          >
            <Sparkles className="w-4 h-4 shrink-0 text-amber-500 animate-pulse" />
            Essay D: Freedom
          </button>
          <button
            onClick={() => setActiveArticle("metaphysics")}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-sans text-xs font-bold uppercase transition tracking-wider cursor-pointer ${
              activeArticle === "metaphysics"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
            id="toggle-article-metaphysics"
          >
            <Sparkles className="w-4 h-4 shrink-0 text-violet-500 animate-pulse" />
            Essay E: Metaphysics
          </button>
          <button
            onClick={() => setActiveArticle("tyranny")}
            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-sans text-xs font-bold uppercase transition tracking-wider cursor-pointer ${
              activeArticle === "tyranny"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
            id="toggle-article-tyranny"
          >
            <Sparkles className="w-4 h-4 shrink-0 text-emerald-500 animate-pulse" />
            Essay F: Tyranny of Consensus
          </button>
        </div>
      </div>

      {/* Article 1: The Asymmetry of Disbelief */}
      {activeArticle === "asymmetry" && (
        <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="master-article-text">
          
          {/* Title Area */}
          <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-950 font-sans tracking-tight leading-tight">
              The Asymmetry of Disbelief: Why Grassroots Pixel-Hunting Prompts Scapegoating While Foundational Theoretical Critique Meets "The Golden Silence"
            </h1>
            <p className="text-sm text-gray-400 font-mono">
              By Dr. Yue Liu • Corresponding Academic Treatise • June 2026
            </p>
            <div className="text-xs text-amber-600 bg-amber-50/50 px-3 py-1 rounded border border-amber-100/50 inline-block font-sans font-medium">
              Featuring cases in Wave-Electromagnetic Physics & Data Science Bias
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight">
              I. Introduction: The Whistleblower’s Shadowban and the Academic Paradox
            </h3>
            <p>
              In the modern academic apparatus, truth remains the declared objective, yet the machinery of its preservation operates with a selective, defensive hierarchy. 
              The recent suppression of a grassroots scientific whistleblower in China—known commonly as <strong>“Geng Tongxue”</strong>—reveals a profound operational paradox. 
              Armed with nothing more than bespoke data-scraping scripts and an unyielding commitment to physical realism, this investigator exposed numerous fabrications across several premier research universities. 
              His findings bordered on the surreal: papers claiming male patients suffered from uterine-cervical cancer during active pregnancies, files depicting mice with past-life weights, and western blots duplicate-imaged with mere adjustments in contrast or exposure to pass as unique experimental variables.
            </p>
            <p>
              By any traditional ethical script, Geng should have received national medals and institutional praise. 
              Instead, the system executed its classic behavioral protocol: keeping his account technically active to simulate open-mindedness while permanently shadow-limiting his content and banning commercial partnerships. 
              His audience of over two million was effectively cut off. 
              This "soft disposal" of a critic is far more insidious than outright deplatforming. 
              It reflects a deeper structural reality: the administrative state and elite scientific hierarchies maintain a system that is highly reactive to localized visual errors, yet absolutely defensive of systemic theoretical errors.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight">
              II. The Two Tracks of Scientific Deconstruction: Grassroots vs. Scholarly Scrutiny
            </h3>
            <p>
              To understand this reaction, we must distinguish between two separate tracks of scientific critique:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 font-sans">
              <div className="p-4 rounded-xl border border-gray-150 bg-gray-50/50 space-y-2">
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block font-mono">
                  Track A: Grassroots Pixel-Hunting & Clerical Purging
                </span>
                <p className="text-xs text-gray-750 leading-relaxed">
                  Focuses on manual errors (brightened mice images, duplicate blots, impossible math). These errors cross the boundary of deep domain expertise and enter the realm of public common sense. Anyone can understand a copy-paste error. This creates immediate public embarrassment and forces administrators to act.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-gray-150 bg-gray-50/50 space-y-2">
                <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block font-mono">
                  Track B: Foundational Logical & Physics Scrutiny
                </span>
                <p className="text-xs text-gray-750 leading-relaxed">
                  Focuses on mathematical inconsistency and physical fallacies. For instance, demonstrating that the celebrated <em>microwave-absorbing impedance matching theory</em> violates baseline wave-boundary mechanics. This requires advanced scientific competence; thus, the public cannot participate or exert pressure.
                </p>
              </div>
            </div>
            <p>
              Because grassroots pixel-hunting involves public validation, the academic establishment responds with <strong>Sacrificial Scapegoating</strong>. 
              An individual postdoc is dismissed, a single paper is retracted, and the university issues a statement claiming "the robust self-correcting engine of science has successfully prevailed." 
              The system itself remains unquestioned. 
              However, when a core paradigm or theoretical framework is proven to be mathematically invalid, the elite community retreats to <strong>"The Golden Silence"</strong>. 
              No arguments are offered. 
              No proofs are submitted. 
              Instead, the critical paper is ignored because its validation would collapse entire citation cartels and invalidate decades of institutional grants.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight">
              III. Empirical Evidence of Systematic Gatekeeping & "The Golden Silence"
            </h3>
            <p>
              This defensive silence isn't a speculative theory; it is documented across multiple major research disciplines:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-xs md:text-sm font-sans text-gray-750">
              <li>
                <strong>Wave-Electromagnetic Materials</strong>: For half a century, microwave-absorbing coatings have relied on the "impedance matching theory of microwave absorption" (which misinterprets correct results of transmission-line theory). 
                Subsequent proofs have established that while transmission-line theory itself is correct (and yields correct results for films with or without metal backings), the microwave absorption impedance matching theory misinterprets its results, leading to a completely flawed understanding of material absorption mechanisms. 
                This misinterpretation violates baseline electromagnetic wave physics at metal-backed boundaries, converting correct math into pseudo-scientific conclusions. 
                Yet, instead of confronting the physical logic, peer reviewers bypass the refutation, opting for <strong>Tone-Policing</strong> and warning authors that their critique should "be more polite and professional according to the era."
              </li>
              <li>
                <strong>Citation Integrity (Yue Liu, August 2025)</strong>: Publisher preprints (SSRN 5392646) detail how publishing houses maintain systematic citation cartels. 
                They rely on self-citation metrics to bolster artificial journal prestige while filtering out foundational peer commentaries that challenge the core scientific conclusions.
              </li>
              <li>
                <strong>Data Science and Anomaly Detection</strong>: Professor Eamonn Keogh has forcefully demonstrated that at least 95% of published works in Time Series Anomaly Detection (TSAD) are deeply flawed due to inappropriate benchmarks and trivial success metrics. 
                When presented with simple, visual, and irrefutable proofs, the data science community simply chose to look the other way (the "head-in-the-sand" reaction).
              </li>
              <li>
                <strong>Cardiology (Harvard Retractions)</strong>: The Pierro Anversa case at Harvard Medical School resulted in the retraction of 31 high-impact cardiac stem-cell papers. 
                The fraud went unchecked for over ten years simply because, as noted by the New York Times, "experts were just too timid to take a stand" against an established authority.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight">
              IV. Tone-Policing: The Defensive Firewall of the Academic Elite
            </h3>
            <p>
              When pressed to respond to foundational criticism, reviewers often transition from physical science to social etiquette. 
              A peer reviewer on <i>Qeios</i>, when confronted with a direct physical proof invalidating published materials, responded with classic behavioral deflection: 
              <q className="italic text-gray-600 block pl-4 my-2 border-l-2 border-slate-350 bg-slate-50 p-2 rounded-r-lg font-sans text-xs">
                "While you are demanding that journal papers are wrong, a thorough case study is required. Moreover, the word 'research' itself signifies that facts are re-searching. Therefore, every research is relatively correct or wrong according to the era. The writing flow of the manuscript should be more polite."
              </q>
              This rhetoric is a direct attempt to shift the focus from mathematical falsity to stylistic conformity. 
              By claiming that "every research is relatively correct according to the era," the gatekeeper attempts to dissolve absolute physical realism into safe academic relativism. 
              As Simine Vazire observed in her Nature column (2020), young postdocs are consistently warned by senior advisers that public criticism "crosses a line" and will ruin their careers.
            </p>
            <p>
              Nobel laureate Honjo Tasuku famously highlighted that 90% of views published in top-tier journals like <i>Cell, Nature, and Science</i> (CNS) are actually incorrect or non-reproducible. 
              While some senior editors claim this 90% rule is "an exaggeration meant only to keep students alert," the reality is that the peer-review system is designed to maximize prestige indicators and grant cycles rather than verify structural logic.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight">
              V. Conclusion: Moving Beyond "Academic Alchemy"
            </h3>
            <p>
              As long as academic evaluation relies exclusively on publication counts, credentialism ("hats"), and peer-review loops, scientific integrity will remain superficial. 
              We will continue to fire individual researchers who commit clumsy image manipulation while funding entire labs dedicated to high-impact theoretical alchemy. 
              True scientific progress resides in "slow science"—the unsuperstitious, rigorous cross-examination of baseline logic and wave-physical consistency. 
              Until we value structural proof over citation cycles, the woodpeckers of truth will continue to be driven from the forest, leaving the grubs of fraud to consume the tree from within.
            </p>
          </div>
        </article>
      )}

      {/* Article 2: The New Dark Age of Science */}
      {activeArticle === "darkage" && (
        <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="darkage-article-text">
          
          {/* Title Area */}
          <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-extrabold text-red-950 font-sans tracking-tight leading-tight">
              The New Dark Age: Modern Academic Publishing as the Most Autocratic Censorship Era in Scientific History
            </h1>
            <p className="text-sm text-gray-400 font-mono">
              By Dr. Yue Liu • Landmark Philosophical & Empirical Treatise • October 2025
            </p>
            <div className="text-xs text-red-650 bg-red-50/60 px-3.5 py-1 rounded border border-red-100 inline-block font-sans font-bold">
              SSRN Paper Ref: Abstract 5679442 • Case Criticism on Theoretical Theft & Complicit Silence
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-red-950">
              I. The Inversion of Publishability: Brainless Reports vs. Intellectual Innovations
            </h3>
            <p>
              The defining symptom of a civilization entering a Dark Age is not the absolute absence of intellectual activity, but the utter degradation of its quality standards. Today, the scientific establishment has completely lost the capacity to recognize what constitutes an important paper, let alone a valid coordinate of publishable research.
            </p>
            <p>
              The modern standard has undergone an absolute, fatal inversion. Consider the modern SCI catalog: it is dominated by massive, mindless laboratory experimental data-reports. These works present hundreds of tables and run thousands of hyper-complex characterization spectra (TEM, XRD, XPS), yet they contain <strong>zero cognitive originality or conceptual innovation</strong>. Apart from serving as mindless decorative footnotes to the reigning paradigms of established academic authorities, they do not think. 
            </p>
            <p>
              In a rational system, a data dump void of theoretical soul would be rejected immediately as scientifically insignificant. Yet in today's landscape, because they offer no intellectual friction and comfortably mimic existing "consensus," these reports are rubber-stamped with premium placements. If an error is eventually exposed, the authors simply shrug and declare, <em>"But others have done this too on high-tier journals,"</em> substituting peer-loop safety for physical truth.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-red-950">
              II. Cosmetic Rejection Pretexts and the Suspicion of Intellectual Plagiarism
            </h3>
            <p>
              Conversely, whenever a manuscript attempts a genuine, paradigm-shattering conceptual advance, it is rejected under the guise of <strong>"lethal cosmetic defects."</strong>
            </p>
            <p>
              We witness a recurring, highly dishonest practice: peer reviewers and editors rejecting outstanding theoretical breakthroughs over minor, easily restorable superficial flaws. Rejection templates cite improper styling, margin inconsistencies, unpolished grammar, minor typos, or formatting errors in bibliographies (e.g., incomplete citation tags or AI-scraping remnants). 
            </p>
            <div className="p-4.5 bg-red-50/40 border border-red-150 rounded-xl space-y-3 font-sans text-xs md:text-sm my-4">
              <span className="font-bold text-red-900 block uppercase tracking-wider font-mono text-[11px]">
                The Law of Restorable Defects vs. Intellectual Theft
              </span>
              <p className="text-gray-700 leading-relaxed">
                If a manuscript possesses a revolutionary intellectual spark, no cosmetic flaw can be a valid reason for rejection. <strong>Cosmetic flaws are 100% restorable.</strong> The ethical duty of a peer reviewer is to identify these minor defects and guide the author to polish and restore them—not to use them as a convenient executioner's hand. 
              </p>
              <p className="text-gray-700 leading-relaxed">
                When reviewers leverage restorable flaws to desk-reject novel ideas, they enter the territory of academic dishonesty. Gatekeepers use these pretexts to kill the paper, copy the uncredited breakthroughs, fix the superficial defects themselves, and publish the stolen ideas through their own network of collaborative cronies.
              </p>
            </div>
            <p className="text-sm leading-relaxed font-serif">
              This is not a hypothetical anxiety. We must directly address a highly suspicious case in point: the paper titled <strong>"Deep understanding of impedance matching and quarter wavelength theory in electromagnetic wave absorption"</strong> by T. Wang, G. Chen, J. Zhu, H. Gong, L. Zhang and H. Wu (<i>Journal of Colloid and Interface Science</i>, 2021, Vol. 595, Pages 1-5). 
            </p>
            <p className="text-sm leading-relaxed font-serif pl-4 border-l-3 border-red-400 italic bg-amber-50/30 py-2.5 rounded-r">
              The Authors of Wang et al. (2021) adopted the highly specific variable symbol <strong>"$Z_M$"</strong> to represent the characteristic impedance of materials. In electromagnetic physics, $Z_M$ is a highly unique and anomalous notation—first introduced and consistently maintained as a signature mark in the pioneering critical works of Dr. Yue Liu. To find the exact notation adopted, combined with an extremely rapid review-to-publication cycle (less than a few weeks) and a complete, deliberate omission or refusal to cite Dr. Liu's well-circulated prior treatises, presents a classic, suspicious signature of rapid concept hijacking. (See also Yang et al., <i>On the Quality Criteria for Microwave Absorbing Materials</i>, 2025, DOI: 10.1002/aelm.202500239).
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-red-950">
              III. The Normalization of Misconduct and Complicit Field Silence
            </h3>
            <p>
              Why are such intellectual manipulations treated as standard procedures? Because modern academia operates under a state of systemic impunity.
            </p>
            <p>
              In microwave absorption materials research, the rigorous wave-physics proofs laid down by Dr. Liu completely exposed the flawed "impedance matching theory of microwave absorption." While transmission-line theory itself is completely accurate (and applying it to films with or without a metal backing yields correct outputs), the microwave absorption impedance matching theory misinterprets these outputs, leading to a fundamentally erroneous understanding of the actual microwave absorption mechanism. Applied under electromagnetic boundary conditions for metal-backed films, this misinterpretation produces pseudoscientific calculations, yet high-impact SCI journals continue to print thousands of these error-ridden papers every month.
            </p>
            <p>
              When these errors are systematically exposed on public channels, no editorial board comes forward to resolve them. The incorrect papers stream out in mass, while correct theories are aggressively frozen out. There is no open, peer-reviewed debate. Under this regime, <strong>silence replaces refutation</strong>.
            </p>
            <div className="p-4 bg-slate-900 text-slate-100 rounded-xl space-y-2 font-sans my-4">
              <p className="text-xs font-semibold leading-relaxed">
                "When you accuse an editor of blocking a correct paper to shield their own published errors, the system fires back with its ultimate defensive shield: 'You are accusing the entire field of academic dishonesty!' 
              </p>
              <p className="text-xs text-amber-300 font-medium leading-relaxed">
                But we must ask: Is the entire field dishonest? The answer is a clear, mathematical yes. When a whole field knows a mathematical proof has invalidated their equations, yet they keep publishing those errors to protect their citation counts while starving out the correct proof, that is the literal definition of organic, institutionalized academic misconduct."
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-red-950">
              IV. Epistemological Censorship: Worse Than the Medieval Inquisition
            </h3>
            <p>
              This state of absolute, institutionalized gatekeeping is why we term this era the <strong>New Dark Age</strong>. In fact, when evaluated on its mechanisms of truth-suppression, the modern academic publishing industry is far more autocratic and hostile to truth than the Medieval Inquisition.
            </p>
            <p>
              When the Catholic Church prosecuted Galileo Galilei, they did not hide behind anonymous desk-rejection letters signed as "Reviewer 2." Galileo was given a formal, written trial. The Church's mathematical and theological objections were formally structured, documented, and debated in open forums. Galileo was allowed to publish his arguments, and his critiques were entered into historical records.
            </p>
            <p>
              The modern academic publishing cartel provides no such luxury. Behind a wall of double-anonymous peer review, commercial gatekeepers operate with absolute autocracy. They can kill a paper with zero physics justification, hide behind "polite tone guidelines," and blacklist critics in backrooms without leaving a single trace on public records. This is a system where the "Golden Silence" prevents a court of scientific debate from ever taking place. 
            </p>
            <div className="p-4.5 bg-amber-50/40 border border-amber-200/50 rounded-xl space-y-3 font-sans text-xs md:text-sm my-4">
              <span className="font-bold text-amber-900 block uppercase tracking-wider font-mono text-[11px]">
                The Collusion of Preprint Archives: The "Reputational Damage" Proxy
              </span>
              <p className="text-gray-700 leading-relaxed">
                This censorship loop is further reinforced by a shocking, modern alignment: the systemic gatekeeping of preprint servers. Under pressure from commercial publishing networks, many major preprint platforms have enacted policies stating that critical or corrective peer commentaries (such as Letters to the Editor targeting published journal papers) cannot be hosted unless they have already been peer-reviewed and accepted by the target journal itself.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The administrative pretext used is that exposing mathematical or physical flaws in a published journal article "carries a threat of reputational damage to the original authors." This argument is a complete logical fallacy. Points of physical debate, mathematical falsification, and logical scrutiny of a public scientific paper are normal, objective scholarly disagreements—not personal defamation. 
              </p>
              <p className="text-gray-700 leading-relaxed">
                When both the original paper and the critical rebuttal Letter are openly posted in parallel, the broader scientific community has the absolute capacity and expert standards to judge the truth for themselves. It is not the moral or operational business of a preprint host to act as a reputational gatekeeper. If the critic's Letter is scientifically incorrect, it will not damage the original authors' status; instead, it will only expose the critic's own physical and mathematical incompetence. By weaponizing "reputational protection" as an excuse to lock out un-peer-reviewed critiques, preprint channels are actively participating in freezing out objective peer accountability.
              </p>
            </div>
            <p>
              Until we dismantle the metrics-based citation syndicates and return to a system where papers are judged by hard logical integrity rather than stylistic compliance, modern scientific progress remains an illusion—an academic winter pretending to be a spring, running quietly in the dark.
            </p>
          </div>
        </article>
      )}

      {/* Article 3: Isolated Cases or Systemic Disease? */}
      {activeArticle === "systemic" && (
        <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="systemic-article-text">
          
          {/* Title Area */}
          <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
              Isolated Aberrations or Systemic Disease? Why Science and Nature Frame Scientific Fraud as Individual Failures While Complicitly Printing 95% Junk
            </h1>
            <p className="text-sm text-gray-400 font-mono">
              By Dr. Yue Liu • Landmark Structural & Philosophical Critique • June 2026
            </p>
            <div className="text-xs text-amber-700 bg-amber-50/50 px-3 py-1 rounded border border-amber-100 inline-block font-sans font-bold">
              A Refutation of the "Isolated Incident" Defense in Modern Academic Publishing
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight">
              I. The Whistleblower in the Spotlight: Geng Tongxue and the "Science" Paradox
            </h3>
            <p>
              When a dedicated whistleblower uses data-scraping algorithms to expose hundreds of fabricated results, the academic establishment is forced to react. Recently, the Chinese digital detective known as <strong>“Geng Tongxue”</strong> was profiled by the leading international journal <i>Science</i>. 
              The coverage was framed in a familiar, comfortable vernacular: Geng was represented as an exceptional, isolated crusader cleaning up isolated "bad apples" across several institutions.
            </p>
            <p>
              This is the ultimate self-defense script of the scientific elite. By celebrating individual whistleblowers who hunt down comical visual aberrations—duplicate western blot strips, copy-pasted cell photos, or reports claiming pregnant male patients suffered from cervical cancer—the apex journals like <i>Science</i> and <i>Nature</i> establish an illusion of robust integrity and active self-purges. 
              The narrative suggests: "The error-purging woodpecker represents the scientific engine self-correcting." 
            </p>
            <p>
              However, this performs a major trick. It diverts focus from the much larger, darker reality. 
              While the system happily sacrifices a few clumsy researchers over photogenic pixel-hunting scandals to maintain public relations, it remains absolutely defensive and silent when confronting systemic theoretical corruption which keeps its multi-billion-dollar publishing conveyor belts running.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight">
              II. The Four Great Scandals and the Limits of Localised Purging
            </h3>
            <p>
              Throughout the last two decades, science has witnessed spectacular cases of system-approved fraud. These cases are treated by administrative cartels as pathological outliers:
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 font-sans text-xs my-4 leading-relaxed">
              <p>
                ➔ <strong>The Jan Hendrik Schön Incident (2002)</strong>: A physics prodigy at Bell Labs who published breakthrough nanoscale triodes in <i>Nature</i> and <i>Science</i> every 8 days. He kept zero raw data and deleted conflicting variables in software. Peer-reviewers suspended basic critical filters because his metrics flattered their journals.
              </p>
              <p>
                ➔ <strong>The Hwang Woo-suk Stem Cell Miracle (2005)</strong>: Seoul National University's national hero who published fabricated human-cloned embryonic stem cell lines in <i>Science</i>. The entire Korean government protected his work under national interest, demonstrating how easily metrics-concredentialism blindfolds regulators.
              </p>
              <p>
                ➔ <strong>The Shinichi Fujimura Paleolithic Planting (2000)</strong>: An amateur archaeologist who buried old stone age relics in dig sites at dawn. His discoveries pushed back human history in Japan to 600,000 years, forcing history textbooks to be rewritten, until hidden Mainichi Shimbun camera rolls caught him red-handed.
              </p>
              <p>
                ➔ <strong>The Sylvain Lesné Alzheimer's Deception (2006-2022)</strong>: A neuroscientist whose 2006 <i>Nature</i> paper on Aβ*56 became the bedrock of global Alzheimer's research and billion-dollar drug trials, until forensic audits proved he systematically copy-pasted and spliced protein band graphics.
              </p>
            </div>
            <p>
              While these four scandals are indeed horrific, they enjoy one feature that makes them "safe" for the scientific elite: they are clearly personal, individual acts of fabrication. 
              By retracting these papers, firing the researchers, and publishing solemn editorials, <i>Science</i> and <i>Nature</i> preserve the myth that the publishing machine is fundamentally intact—it was just individual "rogues" who slipped through.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight">
              III. The Real Crisis: Elon Musk’s 95% Junk Indictment and Zombie Science
            </h3>
            <p>
              The most profound threat to scientific progress is not spectacular, photogenic fraud. It is the silent epidemic of what tech leader <strong>Elon Musk</strong> repeatedly criticized: the fact that <strong>over 95% of SCI-indexed, high-impact papers are redundant, useless, or outright incorrect junk</strong>.
            </p>
            <p>
              Unlike spectacular image-splicing scandals, this 95% "junk pile" is highly formatted, grammatically perfect, and entirely uncontroversial. 
              They are the "zombie data-reports" that dominate modern materials science, biomedical trials, and machine learning. 
              These papers carry zero cognitive originality or physical originality; they are written by labs purely to convert government grant dollars into publication index counts. 
              They exist strictly to satisfy rigid university promotion quotas—particularly in hospital systems and clinical academies. 
            </p>
            <p>
              Here resides the deepest irony of modern academic publishing: <strong>While a paper is immediately retracted if it contains a copy-pasted Western blot strip, it is never retracted for being absolute garbage.</strong> 
              No paper has ever been pulled back because its conceptual innovation is zero, or because its underlying wave-physics logic violates elementary conservation laws. 
              As long as the format is polished, the spelling is correct, and the citations politely flatter the reigning experts, high-impact journals continue to print thousands of these garbage papers every month. In fact, entire scientific directories have collapsed into "citation cartels", where everyone agrees to cite each other's useless papers to mutual commercial benefit.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-slate-900">
              IV. Systemic Complicity: When Silence Replaces Refutation
            </h3>
            <p>
              Why are these zombie papers printed with premium placement? Because the commercial publishers—the cartels of Wiley, Elsevier, and the CNS apex—operate as transaction processors. Under the Article Processing Charge (APC) model, publishers reap immense margins by scaling publication volume. 
              The expansion of "Special Issues" and the corporate takeover of publishers like Hindawi (culminating in 11,300+ retractions after paper-mill infiltration) represent the literal industrialization of scientific waste.
            </p>
            <p>
              As Dr. Yue Liu documented in his critiques of electromagnetic materials, whenever a rigorous physical proof demonstrates that thousands of published papers rely on mathematically invalid equations (spawned by the flawed microwave absorption impedance matching theory which misinterprets otherwise correct transmission line results for metal-backed absorbers), the scientific elite retreats into <strong>"The Golden Silence"</strong>. 
              No open debate is permitted. Editorial boards ignore the proofs and freeze out critical preprints. 
              To acknowledge the error would destroy the citation networks and grant portfolios of the very experts who sit on peer review panels.
            </p>
            <p>
              Thus, we arrive at the central conclusion: Geng Tongxue's Science profile and the exposure of the 4 grand scandals provide a safe, convenient distraction. 
              They let the public believe that scientific fraud is an occasional, localized human aberration. 
              The reality is that <strong>modern academic publishing has become a systemically corrupt industry</strong>—a metrics game where commercial cartels and academic elites agree to trade junk, enforce complicit silence, and suppress true intellectual progress. 
              Until we cease valuing metrics over absolute logical truth, modern science remains trapped in its darkest, winter epoch.
            </p>
          </div>
        </article>
      )}

      {/* Article 4: Scientific Freedom & The War on Science */}
      {activeArticle === "freedom" && (
        <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="freedom-article-text">
          
          {/* Title Area */}
          <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-extrabold text-blue-955 font-sans tracking-tight leading-tight">
              Scientific Freedom: The Elixir of Civilization — Resisting the Institutional "War on Science" inside Modern Peer-Review Bureaucracies
            </h1>
            <p className="text-sm text-gray-400 font-mono">
              By Dr. Yue Liu & Dr. Donald W. Braben (Posthumous Dialogical Synthesis) • June 2026
            </p>
            <div className="text-xs text-blue-700 bg-blue-50 px-3.5 py-1 rounded border border-blue-100 inline-block font-sans font-bold">
              Cognitive Resonance • WILEY-INTERSCIENCE 2008 & YouTube: "The War on Science"
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-blue-955">
              I. Introduction: The Industrialization of the Scientific Mind
            </h3>
            <p>
              In his legendary 2008 treatise, <em>Scientific Freedom: The Elixir of Civilization</em> (published by Wiley-Interscience), British physicist Donald W. Braben sounded a dire alarm: civilization’s most critical engine of progress—unconstrained, paradigm-shattering scientific discoverability—was undergoing systematic suffocation. 
              Our era is marked by a deep, structural pathology: the rise of a highly bureaucratized scientific machinery that pays lip service to "innovation" while aggressively policing the boundaries of consensus. 
              This phenomenon is brilliantly analyzed in the celebrated documentary and public critiques surrounding <strong>"The War on Science"</strong>. 
              These critiques demonstrate how modern peer-review panels, commercial metrics cartels, and state-administered funding models have transformed the organic lookup for objective natural laws into a risk-averse, highly protective corporate game of metrics farming.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-blue-955">
              II. The Venture Research Paradigm: When Trust Preceded Metrics
            </h3>
            <p>
              Braben’s insights were not merely speculative; they were born from a decade of running British Petroleum’s legendary <strong>Venture Research Unit (1980–1990)</strong>. 
              This unit operated on a basic, revolutionary hypothesis: that foundational discoveries can neither be planned, predicted, nor evaluated by peer consensus. 
              Instead of requiring researchers to submit exhaustive project milestone sheets, three-year deliverables, and expected citation trajectories, Braben funded <em>the people themselves</em>. 
              He selected scholars with high-risk, non-conformist ideas who were actively rejected by orthodox funding peer systems, granting them absolute intellectual freedom to self-direct and follow raw logical consistency.
            </p>
            <div className="p-4 bg-blue-50/55 border border-blue-150 rounded-xl space-y-2 font-sans text-xs md:text-sm my-4">
              <span className="font-bold text-blue-900 block uppercase tracking-wider font-mono text-[11px]">
                The Radical Return of Braben's Venture Research Unit (VRU)
              </span>
              <p className="text-gray-750 leading-relaxed">
                Under the VRU protocol, peer review was completely bypassed in favor of direct, deep intellectual dialogue. 
                Braben’s team selected individuals who stood at the absolute margins of current consensus. 
                They did not ask, <em>"Is this work popular?"</em> but rather, <em>"Is this researcher's logic mathematically robust and physically sound?"</em>
              </p>
              <p className="text-gray-750 leading-relaxed">
                The returns were staggering: this small, trust-based funding model yielded monumental breakthroughs in materials science, biochemistry, and physical mathematics, proving that when scientific freedom is maximized, genuine civilization-altering breakthroughs naturally emerge without any administrative milestones or peer indicators.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-blue-955">
              III. The Metamorphosis of Peer Review: From Collegial Help to Inquisitorial Censorship
            </h3>
            <p>
              Modern science has inverted Braben’s oasis of venture trust, establishing what the modern "War on Science" exposes as an autocratic peer-review hegemony. 
              Peer review, historically conceived in the early Royal Society as an informal mechanism for correcting spelling or offering constructive domain feedback, has metastasized into an absolute, double-anonymous filter of intellectual conformity. 
              Under this state-approved regime, the peer review process functions not as a validator of objective truth, but as a defensive shield for reigning citation cartels:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-xs md:text-sm font-sans text-gray-750">
              <li>
                <strong>Consensus over Realism:</strong> To receive funding or publication, a scholar must frame their findings to align with the existing theories of the review panel. 
                If a researcher mathematically proves that a cornerstone theory (such as the microwave absorption impedance matching model) is physically and mathematically invalid under boundary conditions, the peer review gatekeepers do not engage in debate—they issue anonymous "tone-policing" rejections, demanding that the author "be more polite according to the era" while ensuring the correct proof remains frozen.
              </li>
              <li>
                <strong>The Elimination of Solo Ingenuity:</strong> Braben consistently argued that major intellectual breakthroughs are born from individual, solo scholars courageously challenging prevailing assumptions. 
                Modern academia, however, systematically starves solo scholars of resources, redirecting billions to multi-institutional, highly administrative mega-collaborations. 
                These conglomerates write massive, highly polished data-reports that excel in compliance metrics but contain absolute zero conceptual soul to advance civilization.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-blue-955">
              IV. The Convergence of Critiques: Yue Liu’s "New Dark Age" and Braben’s Stagnation
            </h3>
            <p>
              There is a profound, non-coincidental symmetry between Braben’s structural critique and Dr. Yue Liu’s essays on the <em>New Academic Dark Age</em>. 
              Both understand that when academia transforms from an organic search for truth into a transactional metrics game, several severe pathologies are normalized:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 font-sans">
              <div className="p-4 rounded-xl border border-gray-150 bg-gray-50/50 space-y-2">
                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block font-mono">
                  1. The Overproduction of "Zombie Science" (Musk's 95% Rule)
                </span>
                <p className="text-xs text-gray-750 leading-relaxed">
                  As tech entrepreneur Elon Musk and other external critics have forcefully noted, over 95% of high-impact SCI articles represent redundant, useless, or outright incorrect "zombie data." They are written to satisfy mechanical publication quotas, not to discover truth.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-gray-150 bg-gray-50/50 space-y-2">
                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block font-mono">
                  2. The "Golden Silence" of Epistemological Defense
                </span>
                <p className="text-xs text-gray-750 leading-relaxed">
                  If a paper contains an obvious cosmetic flaw (like Geng Tongxue's exposed duplicate blots), the system self-corrects with performative local retractions. But if the entire conceptual framework of a field is shown to be mathematically false, the elite cartels maintain a "Golden Silence," freezing out critical commentaries to protect their multi-billion dollar portfolios.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-gray-150 bg-gray-50/50 space-y-2">
                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block font-mono">
                  3. The Weaponization of Administrative Shields
                </span>
                <p className="text-xs text-gray-750 leading-relaxed">
                  Modern preprint servers and platforms, under pressure from commercial publishing giants, are actively shielding established journals from corrective peer feedback under the guise of "preventing reputational damage." In doing so, they treat intellectual critique as personal defamation, entirely converting a community of open, scientific cross-examination into an autocratic corporate state.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-blue-955">
              V. Reclaiming Scientific Freedom: Reclaiming the Elixir of Progress
            </h3>
            <p>
              Braben concluded that the "elixir of civilization" is scientific freedom—the right of an individual scholar to follow their logical proofs, challenge prevailing consensus, and publish without being subjected to anonymous gatekeeping and metric coercion. 
              To break the cycle of the modern "War on Science," we must implement direct, structural corrections:
            </p>
            <p>
              First, we must reclaim <strong>Academic "Wu Wei" (科学无为而治)</strong> by de-prioritizing mechanical citation metrics, and evaluating research of materials solely by mathematical and wave-physical correctness under boundary conditions. 
              Second, we must recognize that paper-mills and redundant databases are the natural outcomes of an era that has banned true, individual non-conformists. 
              And last, we must protect the right of researchers to publish raw intellectual proofs on open, democratic channels (including leveraging AI writing equalizers to break formatting monopolies), allowing truth to be judged in the courtyard of open scientific debate rather than backroom cartel collusion.
            </p>
            <p className="italic text-gray-500 text-xs text-center border-t border-gray-100 pt-4">
              "We must restore the freedom to fail, the freedom to innovate, and the freedom to stand alone in our logical truths. Without this elixir, our scientific spring remains locked under an administrative winter."
            </p>
          </div>
        </article>
      )}

      {/* Article 5: Metaphysics & Theoretical Primacy */}
      {activeArticle === "metaphysics" && (
        <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="metaphysics-article-text">
          
          {/* Title Area */}
          <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-extrabold text-indigo-950 font-sans tracking-tight leading-tight">
              Theoretical Primacy over Radical Empiricism: Why Science is an Idealist Metaphysical Journey, Not a High-Tech Gathering of Zombie Data
            </h1>
            <p className="text-sm text-gray-400 font-mono">
              By Dr. Yue Liu • Corresponding Academic Treatise • June 2026
            </p>
            <div className="text-xs text-indigo-700 bg-indigo-50 px-3.5 py-1 rounded border border-indigo-100 inline-block font-sans font-bold">
              Synthesizing SSRN: 5379953, 5447975, & 5514958 • Dialectical Resonance with Aristotle, Kant, & Quine
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-indigo-955">
              I. The Etymological Re-centering of Metaphysics (还原“形而上学”的本质)
            </h3>
            <p>
              In contemporary state-approved education and standard textbooks, the term <strong>“metaphysics” (形而上学)</strong> has been reduced to a crude, performative caricature: a static, isolated, and one-sided worldview that stands as the absolute enemy of dialectics. 
              This standard explanation, regurgitated on countless student exam papers to secure automatic points, is an intellectual betrayal of the highest order. 
              In authentic world philosophy, metaphysics (arising from Andronicus of Rhodes' compilation <em>ta meta ta phusika</em>—the writings "after" or "beyond" physics) represents the search for the ultimate essence of reality.
            </p>
            <p>
              When the Japanese scholar Tetsujiro Inoue translated this foreign concept in 1890, he drew from the deep, poetic waters of the <em>Book of Changes (周易)</em>: <strong>“The metaphysical is called the Tao; the physical is called the vessel” (形而上者谓之道，形而下者谓之器)</strong>. 
              Metaphysics is the study of the <em>Tao</em>—the invisible, eternal, invariant mathematical and logical laws that govern all natural phenomena—transcending the mere physical <em>vessels</em> of transient objects. 
              To reject metaphysics is to reject the very search for the mathematical soul of the cosmos, reducing humanity’s cognitive quest to a blind cataloging of material debris.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-indigo-955">
              II. Aristotle's Ontology versus the "High-Tech Alchemy" of Modern Laboratories
            </h3>
            <p>
              As the founder of formalized metaphysics, Aristotle divided human knowledge into theoretical, practical, and creative categories, establishing <strong>Theoretical Science (comprising Mathematics, Physics, and First Philosophy)</strong> as the highest crown of intellect. 
              Within this hierarchy, First Philosophy—or ontology—studies "existence as existence" (Being as Being). 
              Crucially, Aristotle proved that a physical object is a combination of <em>Matter (hyle)</em> and <em>Form (morphe)</em>, asserting that <strong>Form is the eternal, immutable soul (ousia/essence)</strong> of the object, while matter is simply its transient, decaying potential.
            </p>
            <p>
              Modern academic laboratories have completely inverted this classical wisdom. 
              Under the reigning empirical orthodoxy, research has devolved into what is best described as **High-Tech Alchemy (高科技现代炼金术)**. 
              Armies of graduate student-laborers spend billions operating advanced diagnostic machinery—TEMs, SEMs, XRDs, and impedance matching tools—collecting mountain ranges of raw empirical observation. 
              Yet, this data-gathering is devoid of any conceptual spirit or mathematical rigor. 
              They synthesize material variations, plot complex curves, and publish them in "impact-factor" journals without ever questioning the core wave-physical models that dictate their boundary conditions. 
              These papers are synthetic "zombie science": they worship the material vessel while remaining entirely blind to the governing geometric form.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-indigo-955">
              III. Kant's Copernican Revolution & The Illusory Authority of Pure Measurement
            </h3>
            <p>
              In his towering 1781 work, <em>The Critique of Pure Reason</em>, Immanuel Kant executed his celebrated **"Copernican inversion."** 
              Kant demonstrated that space, time, and causality are not external realities waiting to be passively compiled by our senses; rather, they are the <em>a priori</em> internal cognitive structures of the human mind. 
              In Kant's immortal formulation, **human reason is the legislator of nature** ("man-made laws for nature"). 
              We can never know the "thing-in-itself" (Ding an sich) in its raw, sensory isolation; we only ever comprehend the representations modeled by our conceptual framework.
            </p>
            <p>
              This insight devastates the modern empirical requirement that "every theoretical critique must provide immediate experimental validation." 
              When a theoretical physicist mathematically proves that a widely accepted experimental model (such as the traditional microwave absorption impedance-matching equation) contains a fatal boundary-condition violation, the empirical status quo demands: <em>"Where are your dynamic experimental samples?"</em> 
              This is a profound epistemological category error. 
              It treats a flawed, subjective sensory measurement as the ultimate arbiter, failing to see that **theory holds absolute primacy**. 
              If the mathematical design—the Form—is logically self-contradictory under Euler's conditions, no amount of high-tech laboratory measurement can ever validate it. 
              A thousand material illusions cannot make a mathematical lie true.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-indigo-955">
              IV. Wittgenstein's Mistake & Quine's Salvation: Ontological Commitment in Science
            </h3>
            <p>
              In the early 20th century, logical positivists and the early Ludwig Wittgenstein sought to completely eliminate metaphysics from human discourse, classifying it as a "linguistic disease" or a misuse of language. 
              Wittgenstein declared that meaningful sentences must conform either to pure logical tautologies (analytical) or to direct empirical facts (synthetic), warning that *"we must remain silent about the ineffable."* 
              Yet, this iconoclastic purge was stopped by the American pragmatist Willard Van Orman Quine.
            </p>
            <p>
              Quine dismantled the logical positivist project by rejecting its "two dogmas": the strict boundary between the analytic and the synthetic, and the belief that scientific theories can be reduced to isolated experimental observations. 
              Under Quine's **"Web of Belief" (知识信念之网)**, science and metaphysics form an inseparable organic continuum. 
              Every scientific theory must inevitably make **"Ontological Commitments" (本体论承诺)**—it must presuppose the existence of unobservable, abstract entities (such as fields, wave-functions, electron spins, and real numbers) to operate. 
              Metaphysics acts not as an enemy of science, but as its essential strategic guide, establishing the foundational axioms that make physical modeling mathematically elegant, coherent, and possible.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-indigo-955">
              V. The Clash of Realisms: Reclaiming Metaphysical Idealism in Wave Mechanics
            </h3>
            <p>
              The contemporary crisis in materials science is, at its root, a philosophical battle between **Dialectical Materialism** (misinterpreted as the mechanical storage of raw experimental measurements) and **Idealistic Metaphysics** (the recognition that pure mathematical logic dictates natural laws). 
              In Dr. Yue Liu's critical treatises—including the widely discussed SSRN papers 5379953, 5447975, and 5514958—this conflict is brought to a sharp focal point:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 font-sans">
              <div className="p-4 rounded-xl border border-indigo-150 bg-indigo-50/25 space-y-2">
                <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block font-mono">
                  The Illusion of Empirical Orthodoxy
                </span>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Modern journals operate under an empirical bias, treating a colorful microscope capture (TEM) or a fabricated noise-filtered line plot (XRD) as "ironclad evidence," even when the accompanying physical explanation violates the fundamental wave mechanics equations of Maxwell and Schrodinger. This is material fetishism, producing millions of papers with zero conceptual soul.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-indigo-150 bg-indigo-50/25 space-y-2">
                <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-wider block font-mono">
                  The Truth of Metaphysical Idealism
                </span>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Genuine scientific advancement is made by asserting theoretical primacy. Like Aristotle's Form and Kant's cognitive laws, wave mechanics is an idealist metaphysical framework of mathematics. Universal laws exist as invariant relations of logic; the task of the true explorer is to seek this Tao, not to bury it under a mountain of high-impact SCI metrics.
                </p>
              </div>
            </div>
            <p>
              To break free from this Academic Dark Age, the scientific community must muster the courage to transcend the limits of sensory reductionism. 
              We must restore the SVIP status of first philosophy, recognizing that mathematical symmetry, logical consistency, and wave-theoretical correctness are far more real than any raw, unanalyzed peak on an oscilloscope. 
              Only by reclaiming Metaphysical Idealism can we liberate science from its industrial winter and restore it to its rightful place—as the pure, creative elixir of human civilization.
            </p>
            <p className="italic text-indigo-500 text-xs text-center border-t border-indigo-100 pt-4">
              "The physical vessel may decay and be forgotten; but the mathematical Form—the eternal Tao of the wave—remains forever invariant across the cosmos."
            </p>
          </div>
        </article>
      )}

      {/* Article 6: The Tyranny of Consensus and Mediocrity */}
      {activeArticle === "tyranny" && (
        <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="tyranny-article-text">
          
          {/* Title Area */}
          <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-950 font-sans tracking-tight leading-tight">
              The Tyranny of Consensus and Mediocrity: In Defense of Direct, Edge-Heavy Truths over Complicit Scholarly Compromise
            </h1>
            <p className="text-sm text-gray-400 font-mono">
              By Dr. Yue Liu • Critical Epistemological Treatise • June 2026
            </p>
            <div className="text-xs text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded border border-emerald-100 inline-block font-sans font-bold animate-pulse">
              Academic Critique Hub • Countering Tone-Policing & Comprehensive Score-Card Decay
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-emerald-950">
              I. The Fallacy of Refinement: Polite Cowardice as the Mainstream Standard
            </h3>
            <p>
              In contemporary scientific circles, a comfortable but highly destructive consensus has taken root: any research or critique that expresses itself with absolute certainty, uncompromising edge, or intense rhetorical vigor is immediately dismissed as "paroid," "extreme," or "uncared-for." 
              Conversely, the establishment treats polite behavior, neutral phrasing, and smooth, middle-of-the-road compromises as the hallmarks of academic "refinement" and "high stature" (格局). 
              A refined scholar is expected to "balance all perspectives," speak with circular, non-committal roundness, and avoid taking a hard, absolute stand on any intellectual battlefield.
            </p>
            <p>
              This is a profound epistemological deception. This artificial "balance" is the supreme shield of mediocrity—a mechanism designed <strong>not to look for truth, but to protect errors</strong> from lethal falsification. 
              By demanding that critiques remain polite and rounded, the establishment shifts the battlefield from hard mathematical and physical reality to social behavior. 
              This polite cowardice is precisely how incorrect, corrupted research lines survive for decades. 
              As documented during the monumental scandal surrounding the cardiologist <strong>Piero Anversa</strong>, whose lab at Harvard Medical School falsified cardiac stem-cell data for over fifteen years before 31 papers were retracted, the scientific community chose silence over confrontation. 
              As reported in <i>The New York Times</i>, <strong>"some scientists wondered how a questionable line of research persisted for so long... experts were just too timid to take a stand."</strong> 
              When "academic refinement" is equated with silence, politeness becomes a direct accessory to scientific fraud.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-emerald-950">
              II. The Invariant Imperative: Why Some Truths Must Be Stated in Extremes
            </h3>
            <p>
              The physical universe behaves according to absolute, invariant principles, not human diplomatic compromises. Certain truths cannot be rounded off or expressed with "middle-of-the-road balance." They must be stated in extreme, absolute, and uncompromising terms:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 font-sans">
              <div className="p-4 rounded-xl border border-emerald-150 bg-emerald-50/20 space-y-2">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block font-mono">
                  1. Real Physical Impossibility
                </span>
                <p className="text-xs text-gray-700 leading-relaxed">
                  The statement that <strong>"a perpetual motion machine can absolutely never be built"</strong> is an extreme statement. It admits no middle ground, no subtle exceptions, and no polite compromises. It is an absolute, uncompromising reality dictated by the Second Law of Thermodynamics, which stands as an invariant, eternal truth of nature.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-emerald-150 bg-emerald-50/20 space-y-2">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block font-mono">
                  2. Theoretical Falsehood
                </span>
                <p className="text-xs text-gray-750 leading-relaxed">
                  In microwave physics, the <strong>"impedance matching theory of microwave absorption"</strong> is not simply "imperfect" or "relatively correct under specific conditions." It is <strong>completely, 100% incorrect</strong> when applied to metal-backed absorbers. Conversely, the wave mechanics theory of microwave absorption is absolutely correct. There is no middle ground between them.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-emerald-150 bg-emerald-50/20 space-y-2">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block font-mono">
                  3. The Law of Non-Contradiction
                </span>
                <p className="text-xs text-gray-750 leading-relaxed">
                  Wrong is wrong; wrong from any angle is wrong. Right is right; right from any angle is right. A theory that is "somewhat right and somewhat wrong" is a theory that has failed to touch the underlying ontological essence of the physical phenomenon. Seeking middle-of-the-road balance in physics is equivalent to mixing pure water with mud and calling it a compromise.
                </p>
              </div>
            </div>
            <p>
              When a theory is wrong, it does not deserve polite "relative correctness according to the era." 
              It deserves to be demolished. 
              The task of the true explorer is to state these truths with uncompromising sharpness, carving away the soft, polite mud of consensus to reveal the hard, unchanging bedrock of physical reality.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-emerald-950">
              III. The Comprehensive-Score Decay: How Grid-Scoring Eliminates Brilliance
            </h3>
            <p>
              Modern academic evaluation has been colonized by a highly industrial, corporate bookkeeping model: the **"Comprehensive Merit Matrix" (综合评价、全面打分)**. 
              Under this regime, whenever a manuscript is submitted, reviewers use a checklist of rigid criteria to calculate a normalized, balanced score. 
              They look at styling, word count, sample size, citation formatting, bibliographic alignment, and rhetorical conformity.
            </p>
            <p>
              The result of this comprehensive grid-scoring is a complete, systemic disaster. 
              By averaging all parameters, the system systematically grinds away any edge, personality, or unique intellectual character. 
              The truly groundbreaking, revolutionary ideas—which are inevitably raw, physically intense, and accompanied by minor stylistic or formatting blemishes—receive low comprehensive scores because they do not tick the standard bureaucratic boxes. 
              Conversely, highly polished, impeccably formatted, but conceptually vacant reports receive maximum scores. 
              <strong>This is why over 95% of published SCI papers are essentially professional garbage.</strong> 
              They are built using professional paper-mill templates that possess "immaculate format and ample data" but contain zero new ideas.
            </p>
            <div className="bg-slate-955 text-slate-100 p-5 rounded-2xl border border-slate-800 space-y-3 font-sans my-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 block font-bold">
                The Hierarchy of Publishable Value
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h5 className="text-xs font-bold text-red-400 uppercase font-mono">
                    ❌ The High-Score Zombie Paper
                  </h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Zero innovative thought. Complies 100% with reigning consensus. Exquisite formatting, flawless tables, abundant characterization lines, and zero typos. Received a 95% comprehensive score from peer-reviewers, yet has zero intellectual value and remains a waste of tree pulp.
                  </p>
                </div>
                <div className="space-y-1">
                  <h5 className="text-xs font-bold text-emerald-400 uppercase font-mono">
                    ✓ The Imperfect Breakthrough Paper
                  </h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Possesses a genuine, revolutionary new idea built on honest experimental foundations. May contain minor cosmetic blemishes: typos, formatting oversights, linguistic awkwardness, or even minor AI assistance footprints (like LLM phrases or hallucinated reference tags). These defects are 100% restorable and do not justify rejection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-emerald-950">
              IV. The Honest Data Principle: Original Ideas Must Build on Physical Realism
            </h3>
            <p>
              While we must tolerate and actively restore cosmetic errors, we must maintain an absolute, zero-tolerance boundary against **Data Fabrication and Falsification**. 
              This is the critical difference between the "Imperfect Breakthrough" and "Paper-Mill Alchemy."
            </p>
            <p>
              A valuable, authentic new idea is naturally born from wrestling with the raw, stubborn resistance of physical reality. 
              If the underlying experimental data is fabricated or falsified—such as copying western blots, copying SEM microstructures, or simulating values to fit a prediction—the researcher is no longer interacting with nature. 
              They are interacting with their own social expectations. 
              <strong>A fabricated dataset can never yield a valuable new scientific thought</strong>, because any theory extracted from fraud is simply an echo of the author's own tactical calculations. 
              Therefore, those who fabricate data must be systematically and permanently purged from the scientific forest, whereas those who bring forward sharp, innovative theories—regardless of how raw their formatting or intense their tone—must be aggressively protected and published.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight text-emerald-950">
              V. Conclusion: Restore the Edge of Scientific Inquiry
            </h3>
            <p>
              To rescue science from its current state of industrial mediocrity, we must shatter the comprehensive-scoring tables and reject the tyranny of defensive politeness. 
              When evaluating a manuscript, editorial offices must look at only one question: <strong>Does this work present a genuine, original intellectual idea?</strong> 
              If it does, the paper must be published, and all minor stylistic blemishes should be repaired as a matter of routine clerical assistance. 
              The task of science is to preserve the sharp, masculine vigor of intellectual courage, not to polish flat, polite, and high-scoring garbage. 
              Only by defending the absolute, edge-heavy expression of physical truth can we restore scientific freedom and secure the progress of our civilization.
            </p>
            <p className="italic text-emerald-600 text-xs text-center border-t border-emerald-100 pt-4">
              "Truth has edges; it is not smooth or round. To grind down these edges in the name of scholastic consensus is to ensure that science remains a flat, silent desert."
            </p>
          </div>
        </article>
      )}

      {/* Substack Call to Action */}
      <div className="p-4.5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
        <h4 className="text-sm font-bold text-slate-900 font-sans">
          Support Yue Liu’s Critical Scientific Treatises:
        </h4>
        <div className="flex flex-col sm:flex-row flex-wrap gap-2">
          <a
            href="https://ssrn.com/abstract=5679442"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            className="text-xs bg-white text-slate-800 hover:bg-gray-100 px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-1.5 font-bold transition shadow-3xs"
          >
            The New Dark Age (SSRN 5679442) <Share2 className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://yueliusd.substack.com/p/when-silence-replaces-refutation-73f"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            className="text-xs bg-white text-slate-800 hover:bg-gray-100 px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-1.5 font-medium transition"
          >
            When Silence Replaces Refutation <Share2 className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://yueliusd.substack.com/p/the-hypothesis-of-modern-academia"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            className="text-xs bg-white text-slate-800 hover:bg-gray-100 px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-1.5 font-medium transition"
          >
            The Silent Fire Brigade Essay <Share2 className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://yueliusd.substack.com/p/why-modern-science-is-a-dark-age"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            className="text-xs bg-white text-slate-800 hover:bg-gray-100 px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-1.5 font-medium transition"
          >
            Why Modern Science is a Dark Age <Share2 className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://ssrn.com/abstract=5379953"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            className="text-xs bg-indigo-50 text-indigo-800 border border-indigo-200 hover:bg-indigo-100 px-4 py-2 rounded-lg flex items-center gap-1.5 font-bold transition shadow-3xs"
          >
            Theoretical Primacy (SSRN 5379953) <Share2 className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://ssrn.com/abstract=5447975"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            className="text-xs bg-indigo-50 text-indigo-800 border border-indigo-200 hover:bg-indigo-100 px-4 py-2 rounded-lg flex items-center gap-1.5 font-bold transition shadow-3xs"
          >
            Materialism vs Metaphysics (SSRN 5447975) <Share2 className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://ssrn.com/abstract=5514958"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            className="text-xs bg-indigo-50 text-indigo-800 border border-indigo-200 hover:bg-indigo-100 px-4 py-2 rounded-lg flex items-center gap-1.5 font-bold transition shadow-3xs"
          >
            Metaphysical Idealism (SSRN 5514958) <Share2 className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </div>
  );
}
