import React from "react";
import { Sparkles, ShieldAlert, BookOpen, AlertTriangle, Users, MessageSquare, Eye, HelpCircle, FileText, CheckCircle2, Award, Info } from "lucide-react";

export default function CitationReliabilityCommentary() {
  return (
    <article className="prose max-w-none text-gray-800 leading-relaxed font-serif text-sm md:text-base space-y-6 animate-fade-in" id="citationreliability-article-text">
      
      {/* Title Area */}
      <div className="text-center space-y-3 pb-6 border-b border-gray-100 max-w-3xl mx-auto">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-emerald-650 bg-emerald-50 px-2.5 py-1 rounded">
          Essay AW • Commentary on Peeref & Citation Sociology
        </span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-950 font-sans tracking-tight leading-tight">
          The Citation Ritual: <br />
          <span className="text-xl md:text-2xl font-medium text-slate-700 block mt-2">
            Why High Citation Counts Reflect Peer Conformity, Selective Blindness, and Institutional Fear, Not Actual Readership
          </span>
        </h1>
        <p className="text-sm text-gray-400 font-mono">
          By Dr. Yue Liu, Dr. Ying Liu, & Prof. Michael G. B. Drew • Epistemological Critique of Academic Metrics • July 2026
        </p>
        <div className="text-xs text-emerald-850 bg-emerald-50 px-3 py-1 rounded border border-emerald-100 inline-block font-sans font-semibold">
          第十三讲又又又一增刊：论学术文献引用的虚无本质与马太效应——从Peeref提问到SCI同行评审对学术权威的迷信与自我审查
        </div>
      </div>

      {/* Epigraph Quote Block */}
      <div className="max-w-2xl mx-auto my-6 bg-slate-955 text-slate-100 p-5 rounded-xl space-y-4 shadow-inner border border-slate-800 font-mono text-xs md:text-sm">
        <div className="flex items-center gap-2 text-emerald-450 border-b border-slate-800 pb-2">
          <MessageSquare className="w-4 h-4 text-emerald-450" />
          <span className="font-bold uppercase tracking-wider">The Illusion of Citing / 象征性引用的仪式感</span>
        </div>
        <p className="italic text-slate-200 leading-relaxed">
          "The question 'Do you read every paper you cite?' is a psychological trap. Of course, researchers will claim they do. But if you reformulate the question to ask if they believe *other* authors read their citations, the veil immediately drops. Citations have mutated from intellectual links of genuine comprehension into tactical shields used to satisfy peer review, appease editorial cartels, and reinforce mainstream dogmas."
        </p>
        <p className="text-[10px] text-slate-400 text-right mt-1 font-sans">
          — Dr. Yue Liu, *The Epistemological Mechanics of Citation Cartels*
        </p>
      </div>

      {/* Section 1: Flawed Survey Design and Social Desirability Bias */}
      <div className="space-y-4 pt-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-650 font-mono">I.</span> The Trap of Self-Reporting: Social Desirability vs. Academic Reality
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">调查设计的硬伤：为什么问卷无法测出真实的学术水份</span>
        </h3>
        <p>
          The ongoing discussion on Peeref—posing the question, <em>"Do you read every paper you cite?"</em>—addresses a critical, burning pathology in modern science. However, the survey’s very design suffers from a classic sociological flaw: <strong>social desirability bias</strong>. 
        </p>
        <p>
          When asked directly about their own integrity, no academic will openly admit to lazy practices. Almost every respondent will reflexively answer "Yes," even if they only skimmed the abstract or copied the reference block from an intermediate review paper. To extract an accurate, scientifically reliable projection of academic behavior, the inquiry must be reformulated:
        </p>
        <p className="bg-slate-50 p-4 rounded-xl border border-slate-205 text-slate-800 font-sans italic text-xs md:text-sm">
          <strong>Corrected Question Design:</strong> "In your objective professional assessment, do you believe that the vast majority of published authors have thoroughly and critically read every single paper listed in their bibliographies?"
        </p>
        <p>
          If this corrected question were posed, the statistical outcome would be vastly different—revealing a widespread, consensus-based understanding that citations in modern literature are highly performative, superficial, and decoupled from genuine intellectual consumption.
        </p>
      </div>

      {/* Section 2: Performative Citation and Elite Journal Fetishism */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-650 font-mono">II.</span> Performative Citations: Appeasing the Gatekeepers of "High-Impact" Tiers
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">投机性引用：顺应影响因子的硬性指引、用大咖文献作为护身符</span>
        </h3>
        <p>
          Why do authors routinely cite papers they have not carefully read or understood? The answer lies in the systemic pressures of contemporary academic publishing. 
        </p>
        <p>
          Mainstream guidelines, editorial demands, and institutional reviews actively coerce researchers into following a rigid citation template. Authors are instructed to prioritize:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm text-gray-700 font-sans">
          <li><strong>Citing High-Impact Elite Journals:</strong> To artificially inflate the journal's prestige metrics.</li>
          <li><strong>Citing Very Recent Literature:</strong> To project a superficial "cutting-edge" relevance, ignoring classic foundational proofs.</li>
          <li><strong>Citing Academic Superstars (Big Bosses):</strong> To curry favor with potential referees and avoid offending entrenched gatekeepers.</li>
        </ul>
        <p>
          This compliance-driven citation mechanism ensures that the citation list is constructed as a **bureaucratic defense shield** to smooth the path of peer review, rather than a transparent reflection of the literature that actually guided the intellectual discovery.
        </p>
      </div>

      {/* Section 3: The Negligence of Peer Review */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-650 font-mono">III.</span> Blind Spots in Review: Why Peer Reviewers Do Not Validate Bibliographies
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">审查的真空：同行评审不看引用文献、反常识观点遭无视</span>
        </h3>
        <p>
          Citations are supposedly vetted during the peer-review process, but this is largely a myth. 
          While some dedicated reviewers occasionally check specific references, the overwhelming majority do not verify whether a cited paper actually supports the manuscript's claim, or whether the cited paper itself is mathematically correct.
        </p>
        <p>
          This negligence becomes highly partisan when a manuscript presents a revolutionary, anti-consensus thesis:
        </p>
        <div className="p-4 rounded-xl border border-emerald-150 bg-emerald-50/10 text-xs md:text-sm font-sans space-y-3">
          <p className="text-gray-750 leading-relaxed font-serif italic border-l-2 border-emerald-450 pl-3">
            "When a pioneering submission seeks to demolish a mainstream consensus (such as the impedance matching theory in microwave absorption) and provides absolute, unassailable mathematical proofs of its historical foundations, establishment reviewers are blinded by their own confirmation bias. Because they dislike the conclusion, they refuse to read the cited historical papers or verify the derivations. Instead of scientific engagement, they resort to superficial, polite rejections to keep the truth from being printed."
          </p>
        </div>
      </div>

      {/* Section 4: The Accumulation of Error and Dr. Yue Liu's Citation Critique */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-650 font-mono">IV.</span> The Cascade of Unchecked Errors: Exposing the Cargo Cult Ecosystem
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">低级错误的疯狂繁衍：学术造假与盲目引用的学术灾难</span>
        </h3>
        <p>
          True scientific research demands meticulous, painstaking critical reading. However, the modern "publish-or-perish" machine incentivizes the mass assembly of low-quality, "cargo cult" papers. Authors copy-paste both text structures and bibliography blocks, leading to the rapid proliferation of mathematically false dogmas while correct, clarifying treatises are actively boycotted.
        </p>
        <p>
          This fatal phenomenon has been mathematically analyzed and exposed in Dr. Yue Liu's major sociological study:
        </p>
        <div className="bg-emerald-50/30 p-4 rounded-xl border border-emerald-250 font-sans space-y-2">
          <p className="text-xs text-gray-750 leading-relaxed">
            <strong>Yue Liu, "Self-Citation Versus External Citation in Academic Publishing: A Critical Analysis of Citation Reliability, Publication Biases, And Scientific Quality Assessment" (August 14, 2025). SSRN: <a href="https://ssrn.com/abstract=5392646" target="_blank" referrerPolicy="no-referrer" rel="noreferrer" className="text-emerald-700 hover:underline">https://ssrn.com/abstract=5392646</a>.</strong>
          </p>
          <p className="text-[11px] text-gray-550 italic leading-relaxed">
            This work proves that when the academic community ceases to thoroughly read their cited sources, high citation counts cease to represent scientific quality. Instead, citation counts become a metric of peer conformity and publication bias.
          </p>
        </div>
        <p>
          This metric-gaming has terrifying consequences. Low-level, elementary physics errors are routinely published in elite SCI journals and then cited repeatedly by thousands of uncritical authors. 
          As documented in the watershed corrective paper 
          <a href="https://doi.org/10.1007/s10854-021-07496-9" target="_blank" referrerPolicy="no-referrer" rel="noreferrer" className="text-emerald-650 font-mono font-bold hover:underline mx-1">
            (https://doi.org/10.1007/s10854-021-07496-9)
          </a>, 
          a single, mathematically trivial mistake in microwave absorption theory was reproduced and cited <strong>91 separate times</strong> across prestigious SCI journals. This is definitive, objective proof that the authors of these 91 papers did not perform basic due diligence, did not have the professional competence to evaluate the equations they copied, and did not read the references they cited.
        </p>
      </div>

      {/* Section 5: The Atmosphere of Fear and Retaliation */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-650 font-mono">V.</span> The Atmosphere of Fear: Why Scholars Hide Corrections and Avoid Citing Truth
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">沉默的合谋：对学术权威的恐惧、自我审查与批评机制的丧失</span>
        </h3>
        <p>
          Modern academics are trapped in a climate of professional terror. They will actively avoid citing negative results or exposing mainstream errors out of a well-founded fear of retaliation by powerful journal editors and review cartels. 
        </p>
        <p>
          As reported in a chilling article in <em>Nature</em>:
        </p>
        <blockquote className="border-l-4 border-rose-400 bg-rose-50/50 p-4 rounded-r-xl italic font-serif text-xs md:text-sm my-4 text-gray-750">
          “Last month, I got a private Twitter message from a postdoc bruised by the clash between science as it is and how it should be. He had published a commentary in which he pointed out errors in a famous researcher’s paper. The critique was accurate, important and measured — a service to his field. But it caused him problems: his adviser told him that publishing the criticism had crossed a line, and he should never do it again.“ 
          <span className="block text-[10px] text-gray-400 font-sans text-right mt-1">— Nature (https://doi.org/10.1038/d41586-019-03909-2)</span>
        </blockquote>
        <p>
          This suppression leads to the long-term persistence of highly questionable and fraudulent research. When Harvard University finally called for the retraction of dozens of fraudulent studies by a highly celebrated, noted cardiologist, the scientific world asked how such obvious, fabricated data could persist for years in high-impact journals. The New York Times reported: 
          <em className="text-slate-700 italic">"experts were just too timid to take a stand"</em> (http://www.staradvertiser.com/2018/10/16/news/harvard-calls-for-retraction-of-dozens-of-studies-by-noted-cardiologist/). 
        </p>
        <p>
          The academic herd is not a community of truth-seekers; it is a bureaucracy of career-protectionists.
        </p>
      </div>

      {/* Section 6: Journal Superstition vs. Scientific Integrity */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-650 font-mono">VI.</span> Peer-Review Fetishism: Treating Prestige as a Substitute for Active Brainpower
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">盲目崇拜唯SCI论：将同行评审神圣化、丧失独立思考的学术奴性</span>
        </h3>
        <p>
          The ultimate tragedy of contemporary academia is the total surrender of independent thought to journal brands. Instead of actively using their own brains to evaluate the logical rigor and experimental reproducibility of an article, scientists rely on the journal's logo as an intellectual shortcut. They assume that if a paper is published in <em>Nature</em>, <em>Science</em>, or <em>Cell</em>, it is an immutable, sacred truth.
        </p>
        <p>
          This superstition is protected by aggressive, tone-policing reviews designed to silence dissent. For example, when correct whistleblowers point out fatal errors in mainstream literature, reviewers routinely dismiss them with bureaucratic fluff:
        </p>
        <blockquote className="border-l-4 border-emerald-400 bg-emerald-50/20 p-4 rounded-r-xl italic font-sans text-xs my-4 text-gray-750">
          “While you are demanding that journal papers are wrong, a thorough case study is required... The writing flow of the manuscript should be more polite and professional.” 
          <span className="block text-[10px] text-gray-400 text-right mt-1">— Reviewer comment (https://doi.org/10.32388/5FRZHG)</span>
        </blockquote>
        <p>
          Reviewers actively try to minimize the famous warning by Nobel laureate <strong>Tasuku Honjo</strong>, who stated that <strong>"90% of the views published in top magazines like Nature, Science, and Cell are wrong."</strong> Conformists claim this statement is just an "exaggeration to alert young researchers," stating:
        </p>
        <blockquote className="border-l-4 border-slate-350 bg-slate-50 p-4 rounded-r-xl italic font-sans text-xs my-4 text-gray-700">
          “I do not support the claim that 90% of journal articles are false... I see this sentence as an exaggerated formulation to alert young researchers that they should not blindly follow superstition.”
          <span className="block text-[10px] text-gray-400 text-right mt-1">— Conformist Reviewer (https://doi.org/10.32388/4PN4RT)</span>
        </blockquote>
        <p>
          This is defensive cognitive dissonance. By pathologizing Honjo’s warning as an "exaggeration," the academic elite protects its fragile bubble from bursting. They continue to cite incorrect high-tier papers while blackballing correct low-tier treatises, ensuring that modern academic publishing remains a massive, metric-driven cargo cult.
        </p>
      </div>

      {/* Section 7: Conclusion */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-955 font-sans tracking-tight flex items-center gap-2 text-emerald-955 border-b border-gray-100 pb-1.5">
          <span className="text-emerald-650 font-mono">VII.</span> Conclusion: Bypassing the Metric-Chasing Cargo Cult
          <span className="text-xs font-sans text-gray-400 font-normal ml-auto">结论：戳破指标神话，用真正的独立思考重塑学术尊严</span>
        </h3>
        <p>
          The answer to the Peeref inquiry is clear and devastating: <strong>No, the academic community does not read the papers they cite.</strong> The modern citation index is not a measure of intellectual influence; it is a graph of systemic conformity, fear-driven silence, and commercialized metric-gaming.
        </p>
        <p>
          For the independent researcher, there is only one path to scientific integrity: completely reject the superstition of journal tiers, ignore the artificial lure of citation counts, and use your own brain to critically evaluate the math and the physics of every paper. True science is not established by counting the consensus of unread citations; it is established by the lonely, unassailable light of mathematical logic and empirical truth.
        </p>
      </div>

    </article>
  );
}
