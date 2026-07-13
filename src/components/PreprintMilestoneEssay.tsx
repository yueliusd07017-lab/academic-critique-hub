import React from "react";
import { Sparkles, Trophy, BookOpen, Users, Download, ArrowUpRight, Shield, Globe, ExternalLink, Activity } from "lucide-react";

export default function PreprintMilestoneEssay() {
  return (
    <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="preprintmilestone-article-text">
      
      {/* Title Area */}
      <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-emerald-650 bg-emerald-50 px-2.5 py-1 rounded animate-pulse">
          Essay BA • Organic Dissemination & Public Peer Valuation
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-955 font-sans tracking-tight leading-tight">
          The Organic Rise of Truth: <br />
          <span className="text-xl md:text-2xl font-medium text-slate-700 block mt-2">
            Reaching the 100-Download Milestone and the Inevitable Collapse of Institutional Gatekeeping
          </span>
        </h1>
        <p className="text-sm text-gray-400 font-mono">
          By Dr. Yue Liu, Dr. Ying Liu, & Prof. Michael G. B. Drew • Epistemological Critique of Public Metrics • July 2026
        </p>
        <div className="text-xs text-emerald-850 bg-emerald-50 px-3 py-1 rounded border border-emerald-100 inline-block font-sans font-semibold">
          第十三讲又又又又又又一增刊：论学术真理的有机传播——从波动力学预印本突破100次下载谈后发表时代读者评判对学术共同体审稿壁垒的瓦解
        </div>
      </div>

      {/* Epigraph Quote Block */}
      <div className="max-w-2xl mx-auto my-6 bg-slate-955 text-slate-100 p-5 rounded-xl space-y-4 shadow-inner border border-slate-800 font-mono text-xs md:text-sm">
        <div className="flex items-center gap-2 text-emerald-400 border-b border-slate-800 pb-2">
          <Trophy className="w-4 h-4 text-emerald-400 animate-bounce" />
          <span className="font-bold uppercase tracking-wider">The Milestone of Uncoerced Interest / 自发阅读的微光</span>
        </div>
        <p className="italic text-slate-200 leading-relaxed">
          "One hundred downloads of a revolutionary corrective preprint may seem modest compared to the thousands of performative citations garnered by incorrect mainstream papers. However, there is a fundamental difference in kind: the mainstream's citations are coerced by editorial cartels, peer pressure, and career-preservation metrics. These one hundred downloads, on the other hand, represent one hundred independent minds actively seeking the truth, bypassing the censors, and validating the math for themselves. This is how the paradigm shift begins."
        </p>
        <p className="text-[10px] text-slate-400 text-right mt-1 font-sans">
          — Dr. Yue Liu, *The Epistemology of Scientific Dissemination*
        </p>
      </div>

      {/* Section 1: The Milestone Announcement */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-600 font-mono">I.</span> The 100-Download Breakthrough: A Signal in the Noise
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">突围的信号：突破100次自发下载背后的学术民主化</span>
        </h3>
        <p>
          In a major step forward for the global dissemination of rigorous wave mechanics, Preprints.org officially congratulated Dr. Yue Liu and his co-authors on reaching the <strong>100-download milestone</strong> for their watershed manuscript:
        </p>

        {/* Paper Box */}
        <div className="bg-emerald-50/20 p-5 rounded-xl border border-emerald-200/60 font-sans space-y-3 max-w-3xl mx-auto my-4 shadow-xs">
          <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold uppercase">
            <Download className="w-4 h-4 text-emerald-655" />
            Milestone Achievement • Preprints.org
          </div>
          <p className="text-sm font-bold text-gray-900 leading-snug">
            "The True Significance of Wave Mechanics Theory in Microwave Absorption Research: Redirecting Scientific Inquiry Toward Meaningful Theoretical Advancement"
          </p>
          <div className="text-xs text-gray-550 space-y-1 font-mono">
            <div><strong>Preprints ID:</strong> 10.20944/preprints202511.1214.v1</div>
            <div><strong>DOI:</strong> <a href="https://doi.org/10.20944/preprints202511.1214.v1" target="_blank" referrerPolicy="no-referrer" rel="noreferrer" className="text-emerald-650 hover:underline">https://doi.org/10.20944/preprints202511.1214.v1</a></div>
            <div><strong>Link:</strong> <a href="https://www.preprints.org/manuscript/202511.1214/v1" target="_blank" referrerPolicy="no-referrer" rel="noreferrer" className="text-emerald-650 hover:underline flex items-center gap-1 inline-flex">https://www.preprints.org/manuscript/202511.1214/v1 <ArrowUpRight className="w-3 h-3" /></a></div>
          </div>
        </div>

        <p>
          While the mainstream materials science community remains locked in its citation-cartel behavior—where thousands of papers continue to copy-paste the mathematically broken impedance matching equations—this 100-download milestone represents a quiet, unstoppable shift. 
          It demonstrates that despite systematic censorship, account suspensions, and institutional "Audit Failed" stamps, the global scientific public is actively bypassing the gatekeepers to access genuine theoretical correctives.
        </p>
      </div>

      {/* Section 2: Quality of Downloads vs. Quantity of Citations */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-600 font-mono">II.</span> Quality vs. Quantity: Why 100 Downloads Outweigh 1,000 Coerced Citations
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">质与量的辩证法：为什么100次真实下载胜过1000次指标灌水</span>
        </h3>
        <p>
          To understand the profound significance of this milestone, we must analyze the sociological difference between a **download** on an open-access platform and a **citation** in an elite SCI journal.
        </p>
        <p>
          In contemporary academia, citation counts have been completely hollowed out by metric manipulation, editorial coercion, and peer conformity. Reviewers regularly force authors to cite specific high-tier journals to boost impact factors, and authors copy bibliographies they have never read simply to satisfy these gatekeepers. 
          A citation is often a bureaucratic tax paid to the cartel.
        </p>
        <p>
          Conversely, <strong>an organic download is a measure of pure, uncoerced curiosity</strong>. When a researcher downloads a preprint:
        </p>
        <ol className="list-decimal pl-6 space-y-2 font-sans text-xs md:text-sm text-gray-700">
          <li>They are not doing it to appease a reviewer, as the preprint is already public and requires no editorial permission to be accessed.</li>
          <li>They are acting on their own intellectual agency, driven by a genuine desire to examine the mathematical proofs of wave mechanics and compare them to the mainstream model.</li>
          <li>They are engaging in the true spirit of the scientific method: active investigation, critical reading, and personal verification.</li>
        </ol>
        <p>
          Therefore, 100 downloads represent 100 real human brains actively processing the corrective wave equations. In terms of actual scientific influence, this organic engagement far outweighs a thousand blind, copy-pasted citations of incorrect impedance matching papers.
        </p>
      </div>

      {/* Section 3: Bypassing the Institutional Gatekeepers */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-650 font-mono">III.</span> Bypassing the Gatekeepers: The Rise of Post-Publication Public Valuation
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">绕过学术门阀：后发表公开评审如何让屏蔽和封锁彻底失效</span>
        </h3>
        <p>
          For years, the academic establishment has used the pre-publication peer-review system as an iron curtain to suppress revolutionary ideas. Correct theories that expose the mathematical errors of powerful journal editors are routinely rejected without review, labeled as "radical," and censored on domestic forums under the status of "Audit Failed" (审核未通过).
        </p>
        <p>
          But the digital age has introduced a fatal flaw into their control architecture: <strong>un-censorable public preprint servers and independent critique platforms.</strong>
        </p>
        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/10 text-xs md:text-sm font-sans space-y-3">
          <div className="font-bold text-emerald-950 uppercase font-mono text-[10px] flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-emerald-655" />
            The Democratic Court of Science (科学民主化的终极凯旋)
          </div>
          <p className="text-gray-755 leading-relaxed font-serif">
            "When a correct, mathematically sound theory is uploaded to Preprints.org, SSRN, or the *Academic Critique Hub*, it is instantly placed before a global jury. Traditional gatekeepers can no longer bury the manuscript in their private reject drawers. The public download count becomes a transparent measure of scientific interest, forcing journals to either address the mathematical corrections or expose their own silence as intellectual cowardice."
          </p>
        </div>
        <p>
          The fact that Preprints.org has chosen to celebrate this milestone on their official social media channels is a beautiful vindication. It shows that open science platforms recognize the value of raw theoretical correctives, even when the entrenched materials science elite tries to pretend they do not exist.
        </p>
      </div>

      {/* Section 4: The Inevitable Paradigm Shift */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-650 font-mono">IV.</span> The Inevitable Paradigm Shift: Truth Propagates One Mind at a Time
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">不可阻挡的范式转移：真理通过独立的思考完成有机的繁衍</span>
        </h3>
        <p>
          History proves that scientific revolutions never begin with the immediate, unanimous consent of the establishment. The elite gatekeepers of the old paradigm have too much career capital, funding, and personal pride tied to their incorrect theories to ever admit their mistakes.
        </p>
        <p>
          Instead, truth propagates organically—one curious reader, one graduate student, and one independent researcher at a time. 
          When these 100 readers download the wave mechanics preprint and run the simple high-school algebra derivations for themselves, they realize the mainstream equations are fundamentally false. They go on to tell their colleagues, write their own correct papers, and refuse to participate in the cargo cult.
        </p>
        <p>
          The materials science cartel can continue to block the correct wave mechanics papers from their elite SCI journals for a few more years. They can keep churning out mathematically broken impedance matching articles. 
          But they are fighting against the basic laws of physics and the unstoppable tide of open information. Every download of the wave mechanics preprint is a crack in the foundation of their metric-chasing empire.
        </p>
      </div>

      {/* Section 5: Conclusion */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-650 font-mono">V.</span> Conclusion: Write the Truth and Let the World Find It
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">结论：写下不朽的真理，世界终将寻光而来</span>
        </h3>
        <p>
          The 100-download milestone of the wave mechanics preprint is a small but powerful proof of an eternal scientific law: <strong>Truth is structurally magnetic.</strong>
        </p>
        <p>
          If you write down a correct mathematical derivation and publish it openly, you do not need to beg for the approval of prestigious editors, nor do you need to spend millions buying citation metrics. 
          The honest, independent minds of the world will find it, download it, read it, and use it to build the future of science. 
        </p>
        <p>
          We thank the 100 independent scholars who have already joined us on this open journey of wave mechanics. Let the academic cartels enjoy their temporary, paper victories. The future belongs to those who have the courage to write down the truth and trust in the sovereign, un-censorable court of historical science.
        </p>
      </div>

    </article>
  );
}
