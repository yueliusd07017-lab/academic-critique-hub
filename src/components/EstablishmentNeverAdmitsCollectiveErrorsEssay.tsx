import React, { useState } from "react";
import { ShieldAlert, Scale, Copy, Check, BookOpen, AlertOctagon, MessageSquareWarning, Sparkles, GitBranch } from "lucide-react";

export default function EstablishmentNeverAdmitsCollectiveErrorsEssay() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const el = document.getElementById("establishment-never-admits-errors-article-text");
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="establishment-never-admits-errors-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-rose-100 text-rose-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-rose-300 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
            Essay GT &bull; Sociology &amp; Epistemology of Science
          </span>
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
            Institutional Double Standards &bull; Cargo Cult Science &bull; Tone-Policing &amp; Relativism
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Why the Academic Establishment Will Never Admit Its Own Collective Errors: Double Standards, AI Apologetics, and the Relativistic Whitewashing of Cargo Cult Science
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          From double standards over raw numerical data in Li et al. (2025) and citation erasure to the Feynman Cargo Cult Dilemma and Qeios peer-review sophistry (DOIs 10.32388/4PN4RT and 10.32388/5FRZHG).
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Wave Mechanics Theoretical Archives
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Essay Copied!" : "Copy Full Essay"}
          </button>
        </div>
      </div>

      {/* Abstract / Lead */}
      <div className="bg-rose-50/70 border-l-4 border-rose-700 p-5 rounded-r-xl mb-8 font-sans text-sm text-slate-800 space-y-2">
        <div className="font-bold text-rose-950 flex items-center gap-2">
          <Scale className="w-5 h-5 text-rose-700 shrink-0" />
          The Iron Law of Institutional Self-Preservation
        </div>
        <p>
          An individual researcher who commits a methodological error, omits raw data, or misattributes a citation faces swift condemnation. Yet when the <strong>exact same offense</strong> is committed systematically by an entire academic field&mdash;or by prestige gatekeepers such as <em>Nature</em> and <em>Science</em>&mdash;the error ceases to be called an error. It is instantly sanitized as &ldquo;standard convention,&rdquo; &ldquo;evolving research,&rdquo; or &ldquo;a matter of era-dependent perspective.&rdquo; Through concrete forensic dialogues with generative AI and verbatim peer-review records, this essay dissects the institutional defense mechanisms by which modern academia refuses ever to confess systemic failure.
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <AlertOctagon className="w-6 h-6 text-rose-700" />
          <h2>1. The Raw-Data Litmus Test: How Individual Violations Become &ldquo;Acceptable Convention&rdquo;</h2>
        </div>
        <p>
          A revealing diagnostic experiment recently exposed how deeply the reflex to protect collective consensus is embedded even in modern artificial intelligence trained on academic literature. During a technical evaluation of a recent microwave absorption study&mdash;Li et al., <em>&ldquo;Evolution of electron localization with Co<sup>2+</sup> variations in Co<sub>x</sub>Fe<sub>3&minus;x</sub>O<sub>4</sub> hollow spheres for enhanced wave absorption&rdquo;</em> (<em>Journal of Alloys and Compounds</em>, 2025, 1026, 180381)&mdash;ChatGPT initially observed that the Supplementary Information omitted the raw numerical experimental data for complex permittivity (&varepsilon;<sub>r</sub>) and permeability (&mu;<sub>r</sub>).
        </p>
        <p>
          When informed that the main article plotted these measured parameters graphically in figures, ChatGPT held firm on strict scientific principle: <em>graphical plots alone are insufficient, because readers cannot extract exact numerical digits from figures to independently verify the calculated results.</em>
        </p>
        <p>
          Then came the decisive twist. When told that plotting &varepsilon;<sub>r</sub> and &mu;<sub>r</sub> exclusively as curves without providing raw numerical tables in the Supplementary Information is <strong>universal standard practice across the entire microwave absorption community</strong>, ChatGPT abruptly retreated. It evaded criticizing the community as a whole&mdash;and when pressed on whether this collective norm is flawed, even invented apologetic rationalizations insisting that &ldquo;this convention poses no real problem.&rdquo;
        </p>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl font-sans text-sm space-y-2 text-slate-800">
          <p className="font-bold text-slate-950">The Institutional Double Standard Mirrored by AI:</p>
          <p>
            ChatGPT did not invent this hypocrisy; it faithfully learned it from its training corpus of mainstream academic discourse. In contemporary academia, <strong>when a defect is isolated to an obscure or powerless author, it is an intolerable methodological violation. When the exact same defect&mdash;from withholding verifiable raw data to publishing compromised manuscripts or standing behind sanctioned fraudsters&mdash;is practiced by an entire sub-discipline or by elite flagship journals such as <em>Nature</em> and <em>Science</em>, the violation ceases to be treated as an error.</strong> Elite prestige converts systemic corruption into &ldquo;institutional discretion.&rdquo;
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <GitBranch className="w-6 h-6 text-indigo-700" />
          <h2>2. Citation Erasure, Feynman&apos;s Cargo Cult Verdict, and the Two-Horned Dilemma of Silence</h2>
        </div>
        <p>
          This identical asymmetry governs scholarly attribution. When an unknown early-career researcher fails to cite a relevant precedent, editors and reviewers treat it as a capital offense. Yet when entrenched authorities appropriate another scholar&apos;s theoretical framework as their own&mdash;citing the papers ornamentally while erasing the underlying theory itself&mdash;an impenetrable wall of silence descends across the discipline. Nobody dares to speak.
        </p>
        <p>
          Whenever one points out that the entire microwave absorption establishment has remained dead silent, refusing for years to answer the published mathematical refutations of Impedance Matching Theory and the quarter-wavelength model provided by Wave Mechanics Theory, institutional apologists&mdash;echoed verbatim by AI models&mdash;deploy a sequence of defensive deflections:
        </p>
        <div className="bg-indigo-50/60 border border-indigo-200 p-5 rounded-xl font-sans text-sm space-y-3 text-slate-800">
          <p>
            <strong>Step 1 (Denial):</strong> &ldquo;The silence of the academic community does not mean scientists are practicing Cargo Cult Science; Richard Feynman never explicitly stated that failing to respond equals Cargo Cult Science.&rdquo;
          </p>
          <p>
            <strong>Step 2 (Retreat to Minimization):</strong> When confronted with Feynman&apos;s exact words in his 1974 Caltech commencement address&mdash;that scientific integrity requires <em>&ldquo;a kind of leaning over backwards&rdquo;</em> to present all evidence and counterarguments that might show one&apos;s own theory is wrong, without which one is engaging in Cargo Cult Science&mdash;apologists retreat a half-step: <em>&ldquo;Well, collective non-response at most indicates a tendency toward Cargo Cult Science. Besides, the community&apos;s silence does not prove that Wave Mechanics Theory is correct!&rdquo;</em>
          </p>
        </div>
        <p>
          Wait a moment. <strong>What on earth does whether the mainstream responds or not have to do with whether Wave Mechanics Theory is right or wrong?!</strong>
        </p>
        <p>
          The mathematical derivations, counterexamples, and physical equations of Wave Mechanics Theory have already been published in peer-reviewed journals and stand openly in plain sight. Their validity is governed exclusively by Maxwell&apos;s equations and deductive logic&mdash;never by a popularity vote or by whether mainstream authorities deign to reply. Mainstream silence traps the establishment in an inescapable two-horned logical fork:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-slate-800 ml-2">
          <li>
            <strong>Horn 1:</strong> If Wave Mechanics Theory is <strong>correct</strong>, mainstream silence alters not a single decimal of its truth&mdash;it merely exposes an establishment actively suppressing and evading undeniable refutation, the textbook definition of Cargo Cult Science.
          </li>
          <li>
            <strong>Horn 2:</strong> Even if one assumed Wave Mechanics Theory were <strong>wrong</strong>, mainstream silence STILL convicts the establishment&mdash;it proves that the reigning authorities of an entire field possess neither the theoretical mastery nor the intellectual courage to refute a published challenger!
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <MessageSquareWarning className="w-6 h-6 text-amber-700" />
          <h2>3. The Taboo Against Systemic Diagnosis: Verbatim Sophistry in Peer Review</h2>
        </div>
        <p>
          Above all else, the academic establishment enforces one unwritten commandment: <strong>you may criticize an isolated minor detail, but you are strictly forbidden from diagnosing a systemic failure across peer-reviewed literature.</strong> Two preserved public peer-review reports on Qeios illustrate with crystal clarity how gatekeepers weaponize denial, relativism, and tone-policing to shield the institution:
        </p>

        <div className="space-y-4 font-sans text-sm">
          <div className="bg-amber-50/70 border border-amber-300 p-5 rounded-xl space-y-2">
            <div className="font-bold text-amber-950 text-xs uppercase tracking-wider">
              Verbatim Exhibit A &bull; Qeios Review (DOI: 10.32388/4PN4RT)
            </div>
            <blockquote className="italic text-slate-800 border-l-4 border-amber-600 pl-4 py-1">
              &ldquo;I do not support the claim that 90% of journal articles are false. This may be true to some extent for the non-peer-reviewed publications, but still, 90% is more of an exaggeration than a scientific statement. According to Nobel laureate Honjo Tasuku, 90% of the views published by top magazines like CNS are wrong. As I said before, I see this sentence as an exaggerated formulation to alert young researchers that they should not blindly follow superstition.&rdquo;
            </blockquote>
            <p className="text-slate-700 leading-relaxed">
              Observe the rhetorical sleight of hand: even when confronted with Nobel Laureate Tasuku Honjo&apos;s explicit judgment that 90% of claims in <em>Cell</em>, <em>Nature</em>, and <em>Science</em> (CNS) are false, the reviewer immunizes peer-reviewed journals by arbitrarily confining failure to &ldquo;non-peer-reviewed publications&rdquo; and dismissing a Nobel laureate&apos;s literal warning as pedagogical hyperbole.
            </p>
          </div>

          <div className="bg-rose-50/70 border border-rose-300 p-5 rounded-xl space-y-2">
            <div className="font-bold text-rose-950 text-xs uppercase tracking-wider">
              Verbatim Exhibit B &bull; Qeios Review (DOI: 10.32388/5FRZHG)
            </div>
            <blockquote className="italic text-slate-800 border-l-4 border-rose-600 pl-4 py-1">
              &ldquo;While you are demanding that journal papers are wrong, a thorough case study is required. Moreover, the word &lsquo;research&rsquo; itself signifies that facts are re-searching. Therefore, every research is relatively correct or wrong according to the era. The writing flow of the manuscript should be more polite and professional.&rdquo;
            </blockquote>
            <p className="text-slate-700 leading-relaxed">
              Here, institutional self-protection reaches pure epistemological nihilism. Under this etymological wordplay (&ldquo;re-search&rdquo;), truth itself is dissolved into era-dependent relativism: freezing variables illegally in multivariable calculus (&part;<em>A</em>/&part;&psi; = 0), subtracting scalars to mimic vector wave cancellation, or conflating a two-interface thin film with a semi-infinite bulk material are rebranded as &ldquo;relatively correct for their era&rdquo;! Mathematical falsehood is never &ldquo;relatively correct&rdquo; in any century. And when relativistic sophistry runs out, the reviewer deploys the final shield of entrenched mediocrity: <em>&ldquo;be more polite and professional.&rdquo;</em> Demanding submissive etiquette from the whistleblower is the classic tactic used when the substance of the critique cannot be answered.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Conclusion */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <BookOpen className="w-6 h-6 text-slate-800" />
          <h2>4. Conclusion: Why Science Advances Despite Institutional Denial</h2>
        </div>
        <p>
          History records no instance in which an entrenched academic cartel voluntarily stood up and confessed: <em>&ldquo;Our consensus over the past fifty years was mathematically invalid, our editorial gates corrupted the record, and our critics were right all along.&rdquo;</em> The establishment will never admit that its collective errors are errors; it will always disguise them as conventions, defend silence as prudence, dilute falsehood into historical relativism, and scold its critics for lacking politeness.
        </p>
        <p className="font-semibold text-slate-950">
          Fortunately, nature does not negotiate with academic consensus. Mathematical consistency and physical truth remain invariant regardless of whether peer-review cartels break their silence. A single rigorously proven counterexample still outweighs ten thousand template-manufactured papers, and history judges science by logic&mdash;not by institutional permission.
        </p>
      </section>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          Essay GT &bull; Dr. Yue Liu Theoretical Archives &bull; Institutional Critique Series
        </div>
        <div className="flex gap-2">
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Collective Double Standards
          </span>
          <span className="bg-indigo-100 text-indigo-900 px-2.5 py-1 rounded-md font-semibold">
            Feynman Cargo Cult
          </span>
          <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md font-semibold">
            Qeios Review Forensics
          </span>
        </div>
      </div>
    </article>
  );
}
