import React from "react";
import { Sparkles, ShieldAlert, Award, AlertTriangle, BookOpen, Quote, HelpCircle, Flame, EyeOff } from "lucide-react";

export default function NucleiLocationEssay() {
  return (
    <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="nucleilocation-article-text">
      
      {/* Title Area */}
      <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-emerald-655 bg-emerald-50 px-2.5 py-1 rounded">
          Essay AO • Orbital Theory & Peer-Review Abuse
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-955 font-sans tracking-tight leading-tight">
          Where Should the Nuclei Be Located? <br />
          <span className="text-xl md:text-2xl font-medium text-slate-700 block mt-2">
            The Fundamental Nodal Error in Chemistry Textbooks and the Dark Networks of Anonymous Peer-Review Plagiarism
          </span>
        </h1>
        <p className="text-sm text-gray-400 font-mono">
          By Dr. Yue Liu, Ying Liu, & Prof. Michael G. B. Drew • Theoretical and Pedagogical Audit • July 2026
        </p>
        <div className="text-xs text-emerald-850 bg-emerald-50 px-3 py-1 rounded border border-emerald-100 inline-block font-sans font-semibold">
          第十讲：原子核在分子轨道中的位置之谜——教材中的概念性谬误、不透明评审下的剽窃默契与学术门阀的悄然蚕食
        </div>
      </div>

      {/* Epigraph Quote Block */}
      <div className="max-w-2xl mx-auto my-6 bg-slate-950 text-slate-100 p-5 rounded-xl space-y-4 shadow-inner border border-slate-800 font-mono text-xs md:text-sm">
        <div className="flex items-center gap-2 text-emerald-405 border-b border-slate-800 pb-2">
          <ShieldAlert className="w-4 h-4 text-emerald-400" />
          <span className="font-bold uppercase tracking-wider">The Double-Edged Sword of Academic Secrecy / 评审门阀的两头吃</span>
        </div>
        <p className="italic text-slate-200 leading-relaxed">
          "The modern peer-review apparatus acts both as a gatekeeper to suppress revolutionary insights and as a private buffet for establishment insiders. When a grassroots scholar submits a paper correcting a prestigious textbook's mathematical error, the manuscript is rejected under a veil of anonymous silence. Shortly after, the error is quietly corrected in new editions of the giant's textbook, and contemporary journals rush to publish 'pioneering' papers using the identical models and symbols—systematically erasing the original author from history."
        </p>
        <p className="text-[10px] text-slate-400 text-right mt-1 font-sans">
          — Theoretical Chemical Education Case Files (JCE 2005 vs. BNU Textbook vs. JCIS 2021)
        </p>
      </div>

      {/* Section 1: The Core Scientific Discovery */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-655 font-mono">I.</span> The Orbital Misconception: Why Molecular Nuclei Cannot Live at Nodal Surfaces
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">分子轨道节点的物理真相：原子核不在节点（节面）处的严格数学证明</span>
        </h3>
        <p>
          In 2005, a seminal paper authored by Ying Liu, Yue Liu, and Michael G. B. Drew was published in the <em>Journal of Chemical Education</em> (Vol. 82, No. 2, pp. 320–322) addressing a widespread, fundamental error in atomic and molecular orbital diagrams taught in elite universities worldwide.
        </p>
        <p>
          For decades, mainstream inorganic and physical chemistry textbooks printed pictorial representations of molecular and hybrid orbitals placing the atomic nuclei directly at the **nodal points or nodal planes** of the wavefunctions. For example, in drawings of $p-p$ orbital combinations, $s-p$ overlaps, or $sp$ hybrid orbitals, the nucleus was visually centered at the point of zero electron density (the node), implying that the wavefunction value $\Psi$ at the nucleus is exactly zero.
        </p>
        <p>
          This is a conceptual and physical impossibility. While the angular wave function of an isolated atomic orbital has nodes where the value is zero, this rule **breaks down completely in molecular and hybrid systems:**
        </p>
        <div className="p-4.5 rounded-xl border border-slate-200 bg-slate-50 my-4 space-y-3 font-sans text-xs md:text-sm">
          <span className="font-bold text-slate-850 uppercase tracking-wider block font-mono text-emerald-800">
            The Physics of Overlapping Wavefunctions (波函数叠加与原子核位置):
          </span>
          <p className="text-gray-800 font-serif leading-relaxed">
            Let there be two nuclei, 1 and 2, forming a diatomic molecule. When the nuclei approach each other from infinity, the molecular bonding (σ) and antibonding (σ*) orbitals are constructed by summing the atomic wavefunctions: Ψ_mol = ψ_1 ± ψ_2. 
          </p>
          <p className="text-gray-800 font-serif leading-relaxed">
            At the position of nucleus 1, the individual atomic wavefunction of atom 1, $\psi_1$, is zero due to its angular node (for a $p_x$ orbital). However, the atomic wavefunction of the neighboring atom 2, $\psi_2$, is **non-zero** at this spatial coordinate. Therefore:
            <span className="block text-center my-2 font-mono text-base font-bold text-slate-900 bg-white p-2 rounded border border-slate-100">
              Ψ_mol(nucleus_1) = ψ_1(nucleus_1) ± ψ_2(nucleus_1) = 0 ± ψ_2(nucleus_1) ≠ 0
            </span>
            Consequently, the total molecular wavefunction at the position of nucleus 1 is positive (for bonding) or negative (for antibonding)—but **never zero**. The nucleus does not lie on a node, and the standard pictorial diagrams in prestigious textbooks are qualitatively misleading.
          </p>
        </div>
        <p>
          This paper used exact numerical calculations based on the hydrogenic wave equations to plot the precise values of molecular wave functions across varying internuclear distances ($2 a_0, 5 a_0, 50 a_0$), proving that inward and outward orbital "tails" emerge as nuclei approach, showing that the wave function value at the nucleus is physically non-zero.
        </p>
      </div>

      {/* Section 2: Case Study A - The Rejection and Quiet Correction */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-655 font-mono">II.</span> Chinese Academic Feudalism: The BNU Textbook and "Chemistry Bulletin" Rejection
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">案例一：《化学通报》拒稿黑幕与北师大《无机化学》的“无声洗稿”修正</span>
        </h3>
        <p>
          Before publishing this definitive correction in the international *Journal of Chemical Education*, the authors submitted their manuscript to a prominent domestic Chinese journal, *Chemistry Bulletin* (《化学通报》). 
        </p>
        <p>
          The paper was flatly rejected. The real reason for the rejection was not scientific validity, but **the protection of domestic academic giants.** 
          Specifically, the authors had pointed out that the highly influential "Inorganic Chemistry" (《无机化学》) textbook compiled by the chemistry faculty at Beijing Normal University (北京师范大学, BNU)—a textbook used by millions of Chinese college students over multiple generations and editions—contained this exact, misleading nodal-position error.
        </p>
        <p>
          To challenge a textbook compiled by BNU was to challenge the highest echelon of domestic chemistry authorities. The peer-review system of *Chemistry Bulletin*, dominated by the very same network of establishment editors, quickly killed the manuscript. 
        </p>
        <div className="bg-amber-50/45 border border-amber-200/55 p-4.5 rounded-xl space-y-2 font-sans text-xs">
          <div className="flex items-center gap-1.5 text-amber-850 font-bold uppercase tracking-wider font-mono">
            <AlertTriangle className="w-4 h-4 text-amber-655" />
            The Silent Correction without Citation (窃书不算偷？权力的傲慢与悄然修改)
          </div>
          <p className="text-gray-800 font-serif leading-relaxed text-sm">
            "Following the rejection of our manuscript, a shocking development occurred. In the subsequent editions of the Beijing Normal University 'Inorganic Chemistry' textbook, the egregious orbital nodal error was quietly corrected to match our paper's analysis. Yet, the authors of the BNU textbook never cited our 2005 JCE paper, nor did they acknowledge the original correction submitted to Chemistry Bulletin. It is highly suspected that the reviewer who rejected our paper was none other than an editor or author of the BNU textbook, who used their anonymous power to steal our correction while suppressing our publication."
          </p>
        </div>
        <p>
          This is late-stage academic feudalism in action: using peer review as an intelligence-gathering network to debug one’s own authoritative products, while starving the original independent discoverers of credit.
        </p>
      </div>

      {/* Section 3: Case Study B - The 15-Day Miracle and Symbol Theft */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-655 font-mono">III.</span> The 15-Day Peer-Review Miracle: The JCIS 2021 Coordination Front-Running
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">案例二：JCIS 2021“光速”发表神迹，高度重合的符号ZM与提前占位嫌疑</span>
        </h3>
        <p>
          The practice of anonymous peer-reviewers front-running independent manuscripts is not restricted to textbook corrections. It extends deep into modern material science and electromagnetic wave absorption.
        </p>
        <p>
          In 2021, a paper titled *“Deep understanding of impedance matching and quarter wavelength theory in electromagnetic wave absorption”* was published in the *Journal of Colloid and Interface Science* (JCIS 2021, Vol. 595, pp. 1–5, DOI: 10.1016/j.jcis.2021.03.132) by Tao Wang et al. 
        </p>
        <p>
          This paper addressed several of the exact same conceptual flaws in Reflection Loss (RL) formulas and transmission line theory that Dr. Yue Liu had pioneered and disseminated in various preprints and submitted works. Most alarmingly, the JCIS authors used the highly specific, non-standard symbol **$Z_M$** to denote the "characteristic impedance of the absorber" (rather than the standard Z_c or Z_att used in electrical engineering textbooks). This exact $Z_M$ notation is identical to the customized system developed by Dr. Yue Liu.
        </p>
        <p>
          To ensure their paper was published ahead of Dr. Liu's, the authors of the JCIS paper appeared to benefit from an extraordinary, highly anomalous peer-review timeline:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-4 font-mono text-center text-xs">
          <div className="p-3 rounded-lg bg-slate-900 text-white">
            <span className="block text-[9px] text-slate-400 uppercase">Received</span>
            <span className="font-bold text-sm">March 8, 2021</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-100 text-slate-800">
            <span className="block text-[9px] text-slate-500 uppercase">Revised</span>
            <span className="font-bold text-sm">March 22, 2021</span>
          </div>
          <div className="p-3 rounded-lg bg-emerald-950 text-emerald-300">
            <span className="block text-[9px] text-emerald-400 uppercase">Accepted</span>
            <span className="font-bold text-sm">March 23, 2021</span>
          </div>
          <div className="p-3 rounded-lg bg-indigo-950 text-indigo-300">
            <span className="block text-[9px] text-indigo-400 uppercase">Online</span>
            <span className="font-bold text-sm">March 26, 2021</span>
          </div>
        </div>
        <p>
          For a highly technical theoretical dispute paper in a premier Elsevier journal, **a total turn-around time of 15 days from submission to final acceptance is practically impossible under ordinary circumstances.** It strongly implies a coordinated "green-light" review, where friendly editors and peer reviewers (who were likely reviewing and blocking Dr. Liu’s papers) rushed to pass the manuscript through to establish chronological priority.
        </p>
      </div>

      {/* Section 4: Case Study C - The Strategy of Silent Co-optation */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-655 font-mono">IV.</span> Late-Stage Co-optation: Wiley 2025 and the Erosion of Scientific Self-Correction
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">案例三：AELM 2025的无声蚕食与Substack声讨“当沉默代替了反驳”</span>
        </h3>
        <p>
          This structural theft is not an isolated historical incident; it is an ongoing, active strategy that has reached a peak in recent years. In 2025, a paper titled *“On the Quality Criteria for Microwave Absorbing Materials”* was published in the prestigious journal *Advanced Electronic Materials* (Wiley 2025, Vol. 11, Issue 14, DOI: 10.1002/aelm.202500239) by Shengyu Yang et al.
        </p>
        <p>
          As detailed in Dr. Yue Liu’s open Substack critiques—specifically *"When Silence Replaces Refutation"* and *"It quietly adopts several of our core criticisms of RL while systematically refusing to cite"*—this recent work quietly integrates the exact, core criticisms of the Reflection Loss (RL) evaluation paradigm that Dr. Liu has championed for years.
        </p>
        <p>
          In their paper, the authors admit that relying solely on minimum RL values is flawed, that "perfect matching" can make any mediocre material show artificial negative-infinity peaks, and that robust intrinsic parameters must be used instead. They adopt Dr. Liu's exact conceptual foundation. Yet, **they systematically and deliberately refuse to cite Dr. Liu's pioneering publications or SSRN preprints.**
        </p>
        <div className="p-4.5 rounded-xl border border-red-200 bg-red-50/20 my-4 space-y-2">
          <span className="text-xs font-bold text-red-850 uppercase tracking-wider block font-mono">
            The Conspiracy of Absolute Silence (学术门阀的“无声冷处理”霸权):
          </span>
          <p className="text-xs md:text-sm text-gray-800 font-serif leading-relaxed italic">
            "When elite cartels cannot logically refute your corrections, they do not debate you. They do not write counter-arguments. Instead, they deploy the weapon of absolute silence. They block your submissions during peer review, quietly rewrite their own papers to incorporate your theories, and publish them in elite journals while ensuring your name is completely omitted from the references. They hope that by freezing you out of the citation record, they can rewrite history and claim your lifelong work as their own 'independent' discovery."
          </p>
        </div>
        <p>
          This is the most insidious form of scientific censorship. It does not burn books; it simply denies the original author their citation, starving their academic identity until they are effectively erased from the record.
        </p>
      </div>

      {/* Section 5: Conclusion */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-655 font-mono">V.</span> The Inviolable Ledger of Truth: Why Plagiarists Can Never Outrun Reality
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">天道无亲，常与善人：客观规律对门阀抄袭者的终极审判</span>
        </h3>
        <p>
          The academic barons believe that their control over elite journals, funding budgets, and anonymous review networks grants them the power to write the history of science. They believe that by quietly correcting their textbooks and front-running papers in JCIS or AELM, they have successfully looted the intellectual gold of independent scholars.
        </p>
        <p>
          They are wrong. The physical laws of the universe are not governed by the administrative decrees of Wiley, Elsevier, or Chemistry Bulletin. 
        </p>
        <p>
          Whether it is the non-zero wave function at the molecular nucleus published in **JCE 2005**, or the mathematical exposing of the transmission line RL limits, Dr. Yue Liu’s rigorous, pen-and-paper derivations stand as an permanent, unalterable record of reality. A thousand silent adoptions, rushed 15-day review miracles, and plagiarized textbook revisions cannot erase the original ink of the independent mind. In the court of objective reality, the cartels are already bankrupt, and history will record their names not as pioneers, but as late-stage scavengers.
        </p>
      </div>

    </article>
  );
}
