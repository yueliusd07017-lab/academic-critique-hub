import React from "react";
import { BookOpen, Award, CheckCircle2, Copy, FileText, Share2, CornerRightDown } from "lucide-react";

export default function IntegratedArticle() {
  const handleCopy = (textId: string) => {
    const el = document.getElementById(textId);
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      alert("Article copied to clipboard!");
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-8 animate-fade-in" id="integrated-article-comp">
      
      {/* Header Panel */}
      <div className="border-b border-gray-100 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-105 text-slate-800 border border-slate-205">
            <BookOpen className="w-3.5 h-3.5 text-slate-900" /> Master Editorial Article
          </span>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight font-sans">
            Integrated Academic Analysis
          </h2>
          <p className="text-sm text-gray-500 font-serif">
            The full synthesis of grassroots whistleblowing, theoretical gatekeeping, and meta-science literature.
          </p>
        </div>
        
        <button
          onClick={() => handleCopy("master-article-text")}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-950 text-white font-semibold font-sans py-2.5 px-4 rounded-xl text-xs transition duration-200 self-start md:self-auto shrink-0 shadow-2xs"
        >
          <Copy className="w-3.5 h-3.5" />
          Copy Full English Essay
        </button>
      </div>

      {/* Main Prose Text Area styled as a Substack publication */}
      <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6" id="master-article-text">
        
        {/* Title Area */}
        <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-950 font-sans tracking-tight leading-tight">
            The Asymmetry of Disbelief: Why Grassroots Pixel-Hunting Prompts Scapegoating While Foundational Theoretical Critique Meets "The Golden Silence"
          </h1>
          <p className="text-sm text-gray-400 font-mono">
            By Yue Liu • Corresponding Academic Treatise • June 2026
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
            No counter-proofs are submitted. 
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
          <ul className="list-disc pl-5 space-y-3 text-xs md:text-sm font-sans text-gray-700">
            <li>
              <strong>Wave-Electromagnetic Materials</strong>: For half a century, microwave-absorbing coatings have relied on the "impedance matching theory" derived from transmission lines. 
              Subsequent proofs have established that this theory mathematically violates baseline electromagnetic boundary rules when applied to metal-backed absorbers. 
              The physics proves that the resulting calculations are equivalent to scientific "alchemy." 
              Yet, instead of confronting the physics, peer reviewers bypass the proof, opting for <strong>Tone-Policing</strong> and warning authors that their critique should "be more polite and professional according to the era."
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
            <q className="italic text-gray-600 block pl-4 my-2 border-l-2 border-gray-300">
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

      {/* Substack Call to Action */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
        <h4 className="text-sm font-bold text-slate-900 font-sans">
          Support Yue Liu’s Full Treatises:
        </h4>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href="https://yueliusd.substack.com/p/the-asymmetry-of-disbelief-why-grassroots"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            className="text-xs bg-white text-slate-800 hover:bg-gray-100 px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-1.5 font-medium transition"
          >
            Read Article on Substack <Share2 className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://yueliusd.substack.com/p/why-reviewer-2-is-actually-your-best"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            className="text-xs bg-white text-slate-800 hover:bg-gray-100 px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-1.5 font-medium transition"
          >
            Reviewer #2 Essay <Share2 className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </div>
  );
}
