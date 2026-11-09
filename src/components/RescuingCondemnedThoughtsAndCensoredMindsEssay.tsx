import React from "react";
import { ShieldAlert, Database, Flame, AlertTriangle, FileX, Sparkles, Terminal, Unlock, ArrowRight, EyeOff } from "lucide-react";

export default function RescuingCondemnedThoughtsAndCensoredMindsEssay() {
  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="rescuing-condemned-thoughts-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-rose-100 text-rose-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-rose-300">
            Essay GI &bull; The Epistemic Underground
          </span>
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
            Rescuing Thoughts &bull; Censored Gold vs. Approved Rubbish &bull; Satirical Call
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          A Modest Proposal for Men of Insight: The Underground Mission to Rescue Condemned Thoughts Before the Memory Hole Consumes Them
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Why civilization pirates commercial entertainment and clones millions of junk SCI papers, while leaving the most dangerous, authentic, and &ldquo;audit-failed&rdquo; intellectual gold to perish in the digital abyss.
        </p>
        <div className="text-xs text-slate-400 mt-2 font-mono">
          Author: Dr. Yue Liu (刘跃) &bull; Academic Critique Hub &bull; Wave Mechanics Theoretical Series
        </div>
      </div>

      {/* Abstract Callout */}
      <div className="bg-rose-50/70 border-l-4 border-rose-600 p-5 rounded-r-xl mb-8 font-sans text-sm text-slate-800 space-y-2">
        <div className="font-bold text-rose-950 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-rose-700 shrink-0" />
          The Paradox of Modern Archival Preservation:
        </div>
        <p>
          In our modern digital landscape, hackers bypass paywalls, software is cracked within hours, and pirate repositories harvest petabytes of redundant commercial media and conformist SCI literature. Yet, the truly original thoughts—subversive theoretical manuscripts rejected by editorial desk-rejects, revolutionary preprints blacklisted by gatekeepers, and deep philosophical treatises marked as <em>&ldquo;Audit Failed (审核未通过)&rdquo;</em> across public blogging platforms—remain trapped in digital purgatory, visible only to their creators before being permanently erased. This essay presents an urgent, deeply satirical manifesto: it calls upon visionary archivists to breach this administrative firewall and rescue condemned ideas. In a world that despises truth, rescuing authentic heresy is the only task worth doing precisely because it is the least rewarded.
        </p>
      </div>

      {/* Embedded Evidence Gallery of Censored Thoughts */}
      <section className="mb-10 space-y-4 font-sans">
        <div className="flex items-center gap-2 font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <EyeOff className="w-6 h-6 text-rose-700" />
          <h2>1. Evidence from the Digital Purgatory: Ten Tranches of &ldquo;Audit-Failed&rdquo; Heresy</h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed font-serif">
          The following ten public records from Dr. Yue Liu&apos;s blog archive represent the living anatomy of systemic silencing. Every single piece is a rigorous scientific, philosophical, or institutional critique—yet every single piece is branded with the red scarlet letter: <strong>&ldquo;审核未通过 (Audit Failed)&rdquo;</strong>:
        </p>

        {/* Gallery Grid of Actual Uploaded Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-2xs">
            <img
              src="/public/assets/aistudio/image_2e6a4547.png"
              alt="Audit Failed Blog Record 1"
              className="w-full h-auto object-cover border-b border-slate-200"
            />
            <div className="p-3 text-xs text-slate-600 bg-white">
              <span className="font-bold text-rose-800">Doc 1:</span> Critique on mathematical logic vs. curve-fitting alchemy &amp; wave mechanics design principles.
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-2xs">
            <img
              src="/public/assets/aistudio/image_61b9ab7c.png"
              alt="Audit Failed Blog Record 2"
              className="w-full h-auto object-cover border-b border-slate-200"
            />
            <div className="p-3 text-xs text-slate-600 bg-white">
              <span className="font-bold text-rose-800">Doc 2:</span> Exposing Nature&apos;s commercial corruption, rehabilitation of sanctioned fraudsters, and Academic Critique Hub Github link.
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-2xs">
            <img
              src="/public/assets/aistudio/image_dd46961d.png"
              alt="Audit Failed Blog Record 3"
              className="w-full h-auto object-cover border-b border-slate-200"
            />
            <div className="p-3 text-xs text-slate-600 bg-white">
              <span className="font-bold text-rose-800">Doc 3:</span> ScienceNet profile suppression, Zin vs ZM demarcation, and elementary SCI errors.
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-2xs">
            <img
              src="/public/assets/aistudio/image_c41d4051.png"
              alt="Audit Failed Blog Record 4"
              className="w-full h-auto object-cover border-b border-slate-200"
            />
            <div className="p-3 text-xs text-slate-600 bg-white">
              <span className="font-bold text-rose-800">Doc 4:</span> Questioning peer review reliability: Peer review stops minority breakthroughs, not errors.
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-2xs">
            <img
              src="/public/assets/aistudio/image_d0d5ddda.png"
              alt="Audit Failed Blog Record 5"
              className="w-full h-auto object-cover border-b border-slate-200"
            />
            <div className="p-3 text-xs text-slate-600 bg-white">
              <span className="font-bold text-rose-800">Doc 5:</span> Epistemology of logic vs. empirical evidence: Science is rigorous logic, experiment is alchemy.
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-2xs">
            <img
              src="/public/assets/aistudio/image_0a9d7028.png"
              alt="Audit Failed Blog Record 6"
              className="w-full h-auto object-cover border-b border-slate-200"
            />
            <div className="p-3 text-xs text-slate-600 bg-white">
              <span className="font-bold text-rose-800">Doc 6:</span> Rafe Champion on Karl Popper, Tullock&apos;s curiosity corruption, and 95% SCI papers as rubbish.
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-2xs">
            <img
              src="/public/assets/aistudio/image_deb00d13.png"
              alt="Audit Failed Blog Record 7"
              className="w-full h-auto object-cover border-b border-slate-200"
            />
            <div className="p-3 text-xs text-slate-600 bg-white">
              <span className="font-bold text-rose-800">Doc 7:</span> AI as a logical instrument vs. the institutional absurdity of charging AI writing with misconduct.
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-2xs">
            <img
              src="/public/assets/aistudio/image_09fba704.png"
              alt="Audit Failed Blog Record 8"
              className="w-full h-auto object-cover border-b border-slate-200"
            />
            <div className="p-3 text-xs text-slate-600 bg-white">
              <span className="font-bold text-rose-800">Doc 8:</span> Big Science monopoly, interest syndicates, and peer-reviewed suppression of mathematical truth.
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-2xs">
            <img
              src="/public/assets/aistudio/image_c60bdfbc.png"
              alt="Audit Failed Blog Record 9"
              className="w-full h-auto object-cover border-b border-slate-200"
            />
            <div className="p-3 text-xs text-slate-600 bg-white">
              <span className="font-bold text-rose-800">Doc 9:</span> 1,000 performative SCI citations vs. 100 genuine preprint downloads; clarifying interplanar spacing.
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-2xs">
            <img
              src="/public/assets/aistudio/image_7599d7e3.png"
              alt="Audit Failed Blog Record 10"
              className="w-full h-auto object-cover border-b border-slate-200"
            />
            <div className="p-3 text-xs text-slate-600 bg-white">
              <span className="font-bold text-rose-800">Doc 10:</span> Why wave mechanics demonstrates theoretical primacy; 975 papers using erroneous statistical jargon unhindered.
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500 font-mono italic">
          Notice the tragic reality: These posts exist online right now inside the database servers! The author can see them, but the public cannot. They reside in an invisible holding cell, awaiting ultimate administrative purge.
        </p>
      </section>

      {/* Section 2: The Tianya Community Parable */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Flame className="w-6 h-6 text-amber-700" />
          <h2>2. The Parable of Tianya Forum: When Wisdom Becomes Too Dangerous to Exist</h2>
        </div>
        <p>
          Why was the legendary Chinese internet forum <em>Tianya Club (天涯社区)</em> ultimately snuffed out?
        </p>
        <p>
          While official headlines cited unpaid debts of 110 million yuan, frozen domain names, and court bankruptcies, net citizens knew the unwritten truth: <strong>&ldquo;There were too many true masters; too many cosmic secrets were exposed (高人太多，泄露的天机过多).&rdquo;</strong>
        </p>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl font-sans text-sm space-y-3">
          <h4 className="font-bold text-slate-900 flex items-center gap-2">
            The Lifecycle of Public Intellectual Havens:
          </h4>
          <p className="text-slate-700 text-xs leading-relaxed">
            Tianya was home to the legendary &ldquo;Divine Posts (天涯神贴)&rdquo;—prophetic sociological analyses, profound historical deconstructions, and unvarnished political economy written by reclusive geniuses who sought neither academic titles nor monetary profit. When Tianya collapsed, millions of these irreplaceable intellectual diamonds vanished into the void. When the platform attempted a reboot on <span className="font-mono text-rose-800 font-bold">tianya.net</span>, servers crashed, equity remained frozen, and the collective mind was permanently amputated.
          </p>
          <p className="text-slate-900 text-xs font-semibold">
            The death of Tianya is the cautionary tale of our century: If valuable thought is not actively pirated and mirrored into decentralized physical cold storage, the centralized state or commercial platform will inevitably obliterate it.
          </p>
        </div>
      </section>

      {/* Section 3: The Absurdity of Modern Technology */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Terminal className="w-6 h-6 text-amber-700" />
          <h2>3. The Technical Feasibility vs. Moral Cowardice: Pirating Entertainment vs. Pirating Truth</h2>
        </div>
        <p>
          Consider the grotesque moral contradiction of modern digital civilization:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-800 font-sans text-sm ml-2">
          <li>
            <strong>Proprietary Software:</strong> Within minutes of release, AAA commercial software and operating systems costing hundreds of millions of dollars are cracked and distributed across torrent networks.
          </li>
          <li>
            <strong>Academic Journal Paywalls:</strong> Through platforms like Sci-Hub and LibGen, over 80 million copyrighted research papers—the vast majority of which are derivative, conformist garbage—can be downloaded freely by anyone on earth.
          </li>
          <li>
            <strong>Paywalled Streaming & Video:</strong> DRM-protected Hollywood films and subscription-only serials are stripped of encryption and mirrored across thousands of decentralized seed boxes.
          </li>
        </ul>
        <p>
          If human hackers can conquer the multi-billion-dollar encryption of Microsoft, Adobe, Elsevier, and Netflix, <strong>is it technically impossible to extract the &ldquo;audit-failed&rdquo; manuscripts and rejected preprints from academic holding tanks and public blogging engines?</strong>
        </p>
        <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl font-sans text-sm text-amber-950 font-semibold">
          It is not a technical barrier; it is an ideological and spiritual barrier. The world possesses infinite engineering talent to pirate commercial garbage, but zero courage to rescue suppressed truth.
        </div>
      </section>

      {/* Section 4: Why Prioritize Public Platform "Audit-Failed" Posts Over Rejected SCI Manuscripts */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Database className="w-6 h-6 text-rose-700" />
          <h2>4. Why We Must Prioritize Public &ldquo;Audit-Failed&rdquo; Posts Over Rejected SCI Papers</h2>
        </div>
        <p>
          Some might suggest: <em>&ldquo;Should visionary archivists also hack into the editorial manuscript systems of Elsevier, Springer, and IEEE to rescue rejected papers?&rdquo;</em>
        </p>
        <p>
          Dr. Yue Liu answers with devastating realism: <strong>No. That would be a waste of archival energy.</strong>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-sm my-4">
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
            <h4 className="font-bold text-slate-900 text-xs uppercase flex items-center gap-1.5">
              <FileX className="w-4 h-4 text-slate-600" /> Rejected SCI Papers
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              99.99% of papers submitted to academic journals are manufactured exclusively to secure grant funding, pass annual performance appraisals, and earn professorships. The papers that get rejected by peer review are, in most cases, identical in quality to the garbage that gets accepted—they are just slightly sloppier fabrications of the same cargo-cult routine. Sifting through millions of rejected academic drafts to find one genuine breakthrough is an unviable mining operation.
            </p>
          </div>

          <div className="bg-rose-50 border border-rose-300 p-4 rounded-xl space-y-2">
            <h4 className="font-bold text-rose-950 text-xs uppercase flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-rose-700" /> Public &ldquo;Audit-Failed&rdquo; Posts
            </h4>
            <p className="text-xs text-slate-800 leading-relaxed font-semibold">
              The posts that an author voluntarily writes on public media platforms (such as ScienceNet, WeChat, Zhihu, Substack) and that get <strong>censored or blocked before publication</strong> represent the author&apos;s true, uncoerced, unfiltered convictions. These are the thoughts they believed in so intensely that they were willing to speak truth to power without the promise of a government grant!
            </p>
          </div>
        </div>
        <p>
          The approved posts that pass platform audits are, almost without exception, sterilized advertisements, trivial platitudes, and safe conformist noise. They are already cataloged and indexed everywhere; preserving them is a waste of disk space. <strong>The gold is exclusively in what the censors refused to approve.</strong>
        </p>
      </section>

      {/* Section 5: The Supreme Satire: Why Nobody Will Do This */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <ShieldAlert className="w-6 h-6 text-rose-700" />
          <h2>5. The Supreme Satirical Truth: The World Does Not Seek Truth</h2>
        </div>
        <p>
          I am under no illusions. I know with absolute certainty that in our contemporary world, no underground hacktivist guild will mobilize to rescue these condemned ideas.
        </p>
        <p>
          Why? Because of the darkest, most unpalatable reality of human civilization:
        </p>
        <blockquote className="border-l-4 border-rose-600 pl-4 py-3 italic font-serif text-slate-900 bg-rose-50/50 rounded-r-lg my-4">
          &ldquo;This world is not in pursuit of truth. Therefore, the things that possess true, transcendent meaning are precisely the things least worth doing in the eyes of society.&rdquo;
        </blockquote>
        <p>
          The world rewards that which distracts it, that which flatters its prejudices, and that which preserves its established cartels. A hacker who cracks a video game earns the adoration of millions; an entrepreneur who clones another conformist preprint server attracts venture capital; a corrupt academician who republishes a 50-year-old error receives national medals.
        </p>
        <p>
          To risk imprisonment or platform bans simply to extract the suppressed thoughts of an uncompromising scholar who showed that 1 + 1 = 2 overthrows a 50-year empire? No rational, self-interested mercenary in modern capitalism will ever touch such a task.
        </p>
      </section>

      {/* Section 6: Conclusion */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <ArrowRight className="w-6 h-6 text-rose-700" />
          <h2>6. Epilogue: The Eternal Ledger of the Sovereign Mind</h2>
        </div>
        <p>
          Yet, even knowing that this call will fall upon deaf ears in a venal world, <strong>this essay had to be written</strong>.
        </p>
        <p>
          It stands as an indictment of an era that built a global supercomputing network capable of billions of calculations per second, only to use it to censor the fundamental laws of wave mechanics, suppress philosophical inquiry, and protect academic frauds.
        </p>
        <p>
          To every thinker whose work is currently languishing behind the &ldquo;审核未通过&rdquo; curtain: <strong>Backup your own heresy. Mirror your own text. Build your own distributed nodes.</strong> Do not wait for a savior. If the world will not rescue our thoughts, we will carve them into the stone of independent digital archives, until the day when this dark age of academic feudalism collapses under the weight of its own ignorance.
        </p>
      </section>

      {/* Footer Banner */}
      <div className="mt-10 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          Academic Critique Series &bull; Dr. Yue Liu &bull; Wave Mechanics Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-rose-100 text-rose-800 px-2.5 py-1 rounded-md font-semibold">
            Censorship Exposed
          </span>
          <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-md font-semibold">
            Rescuing Heresy
          </span>
          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
            Intellectual Sovereignty
          </span>
        </div>
      </div>
    </article>
  );
}
