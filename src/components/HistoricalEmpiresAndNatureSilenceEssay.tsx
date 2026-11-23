import React, { useState } from "react";
import {
  Flame,
  Copy,
  Check,
  BookOpen,
  Scale,
  AlertTriangle,
  Sparkles,
  Landmark,
  ShieldAlert,
} from "lucide-react";

export default function HistoricalEmpiresAndNatureSilenceEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("historical-empires-nature-silence-article-text");
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const englishEssayText = `Three Fallen Empires, Goodhart's Law, and Nature's "Isolated Case" Illusion: Why Academia Stays Silent While Fraudsters Are Shielded

I. Yue Liu's Three Core Contributions as a Unified Diagnosis
To understand why an entire global scientific establishment remains silent when Nature repeatedly dismisses systemic corruption as "isolated bad-apple cases"—and repeatedly stands behind compromised authors—we must view Dr. Yue Liu's three major contributions not as separate projects, but as one integrated diagnosis:
1. Wave Mechanics Theory of Microwave Absorption: Proved with exact Maxwellian and transmission-line mathematics that an entire flagship empirical literature (23,300+ papers built on Impedance Matching and Quarter-Wavelength dogma) collapsed into mathematical illusion.
2. Liu Yue's Thought (Excluding Experiment From the Definition of Science): Exposed the epistemological engine that protected those 23,300 errors—reducing science proper to Axioms + Logic while relegating empirical data-gathering to an auxiliary craft ("alchemy"), thereby stripping gatekeepers of their "no new data, no critique" veto.
3. The Systemic Verdict (>95% SCI Garbage, Cargo Cult Science, and the New Dark Age): Documented in Preprints 202507.2515.v1, 202507.2152.v1, viXra 2509.0016, and SSRN 5679442 / 5684424 / 5720702 that modern peer-reviewed publishing has degenerated from error-correcting inquiry into the most autocratic censorship era in scientific history.

II. Mapping the Video's Three Historical Parables Directly Onto Nature & Modern Academia

1. Baghdad 1979 & 2003 (Fear Purges & the Information Cocoon -> Editorial Gatekeeping & Reputation Shielding):
In 1979, a brutal loyalty purge taught subordinates that dissent equals suicide. Subordinates then manufactured fake blueprints and victory reports to match the leader's expectations until tanks entered Baghdad while the Information Minister proclaimed total victory.
Today, when Nature declares misconduct "rare isolated cases" while standing behind high-profile insiders and suppressing structural critiques (SSRN 5679442, The New Dark Age), it builds the exact same information cocoon. Young researchers—just as Simine Vazire documented in Nature (2020) when an advisor warned a student that publishing error detection had "crossed a line"—quickly learn that pointing out institutional flaws is career suicide. Journals keep broadcasting "breakthrough victories" while fundamental logic rots underneath.

2. Soviet 1959 Ryazan Miracle (Goodhart's Law -> Impact Factor, Citation Quotas & >95% Garbage):
Under Goodhart's Law ("when a metric becomes a target, it ceases to be a good metric"), Ryazan leader Larionov tripled meat output on paper to win Gold Star medals and Pravda praise by slaughtering dairy cows, breeding stock, and plow oxen—causing famine the very next spring.
In modern academic games (SSRN 5684424, From Academic Research to Academic Games), Impact Factor, H-index, grant counts, and CNS trophies became the target. Like Larionov, paper mills and flagship labs slaughter science's breeding stock—mathematical rigor, conceptual definitions, and open refutation—to churn out glossy, unfalsifiable curves (>95% SCI garbage). Nature praising "exceptional isolated fraudsters" instead of questioning the KPI factory is Moscow reading Larionov's fake meat tables while praising the system's superiority.

3. Ming Dynasty 1627–1644 Chongzhen Court (Punishing Truth-Tellers & Rewarding High Slogans -> Why Academia Stays Dead Silent):
Emperor Chongzhen replaced 50 grand secretaries in 17 years, executed Minister Chen Xinjia for trying pragmatic peace talks, and drove generals Lu Xiangsheng and Sun Chuanting to ruin—because high-sounding moral slogans were safe while practical truth-tellers took the blame. Rational courtiers chose "shrewd collective silence" until Chongzhen died crying "My ministers betrayed me!"
This explains 100% why the entire academic community shows ZERO public reaction when Nature shields fraudsters or rejects fundamental mathematical refutations (Preprints 202507.2515.v1, viXra 2509.0016): Silence and conformity have become the rational scholar's optimal survival strategy. Calling out the "elephant in the room" costs grants, fellowships, and journal access; applauding the Emperor's new clothes preserves tenure.

III. Breaking the Cocoon: Why Eliminating Science & Nature Would Liberate Technology
As Dr. Liu demonstrated in "The Hypothetical Elimination of Science and Nature Journals" and SSRN 5720702 ("Major Scientific Breakthroughs Are Not Born From Journals"), microchips, AI, relativity, and quantum mechanics did not emerge from CNS gatekeeping—and erasing those journals tomorrow would not halt technological civilization. A system's fatal danger is never making a mistake; it is destroying its error-correction mechanism. The elephant in the room grows silently in the dark until it crushes the floor—unless independent thinkers break the silence with uncompromising logic.`;

  const contributions = [
    {
      num: "Contribution 1",
      title: "Wave Mechanics Theory of Microwave Absorption",
      note: "Exposes how 23,300+ mainstream papers confused film device parameters (RL) with material properties—replacing Impedance Matching & QWM with Maxwellian wave cancellation.",
    },
    {
      num: "Contribution 2",
      title: "Liu Yue's Thought (Science = Axioms + Logic; Experiment != Science)",
      note: "Draws a categorical line between science proper and empirical trial-and-error ('alchemy'), disarming the gatekeepers' 'no new data, no critique' veto.",
    },
    {
      num: "Contribution 3",
      title: ">95% SCI Garbage, Cargo Cult & New Dark Age Verdict",
      note: "Diagnoses institutional collapse across Preprints 202507.2515.v1 / 2152.v1, viXra 2509.0016, and SSRN 5679442 / 5684424 / 5720702.",
    },
  ];

  const empireMappings = [
    {
      empire: "1. Baghdad (1979 & 2003): Fear Cocoon & Victory Broadcasts",
      academicParallel:
        "Just as fake blueprints filled the palace while the Information Minister broadcast 'total victory,' Nature suppresses systemic critiques and claims misconduct is 'isolated cases' while shielding prestige.",
    },
    {
      empire: "2. Soviet Ryazan Miracle (1959): Goodhart's Law KPI Famine",
      academicParallel:
        "Slaughtering breeding cows and plow oxen to triple meat numbers on paper = slaughtering mathematical rigor and error-correction to hit Impact Factor, citation, and CNS paper quotas (>95% SCI garbage).",
    },
    {
      empire: "3. Ming Chongzhen Court (1627–1644): Shrewd Collective Silence",
      academicParallel:
        "Executing pragmatic truth-tellers (Chen Xinjia) and rewarding high slogans turned silence into survival. That explains why academia remains mute even when Nature repeatedly shields fraudsters.",
    },
  ];

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="historical-empires-nature-silence-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay HQ &bull; Historical Parallels &amp; Nature&apos;s Silence
          </span>
          <span className="bg-rose-100 text-rose-900 text-xs font-semibold px-3 py-1 rounded-full border border-rose-200">
            Three Contributions &bull; Goodhart&apos;s Law &amp; Academic Silence
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Three Fallen Empires, Goodhart&apos;s Law, and Why Academia Stays Silent While Nature Shields Fraudsters
        </h1>
        <p className="text-sm font-bold text-rose-800 mt-2 font-sans">
          刘跃的三大贡献与历史铁律：从萨达姆信息茧房、苏联“梁赞奇迹”到崇祯“诸臣误朕”——解剖 Nature 声称造假是个案、连续为造假者站台而学术界却集体失声的制度根源
        </p>
        <p className="text-sm md:text-base text-slate-600 mt-2 font-sans italic">
          Synthesizing Yue Liu&apos;s Three Major Contributions and seven 2025 preprints/essays (Preprints, viXra, Substack, SSRN) with the historical iron law of destroyed error-correction mechanisms.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
          <span className="text-xs text-slate-400 font-mono">
            SSRN 5679442 &bull; 5684424 &bull; 5720702 &bull; Preprints 202507.2515 / 2152 &bull; viXra 2509.0016
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(englishEssayText, "eng-hq")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "eng-hq" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "eng-hq" ? "English Essay Copied!" : "Copy English Synthesis"}
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Full View Copied!" : "Copy Full View"}
            </button>
          </div>
        </div>
      </div>

      {/* Part I: Three Major Contributions */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Landmark className="w-6 h-6 text-rose-700" />
          <h2>Part I: Yue Liu&apos;s Three Major Contributions as One Integrated Diagnosis</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {contributions.map((c, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5 font-sans">
              <div className="text-xs font-black uppercase tracking-wider text-rose-700">{c.num}</div>
              <h3 className="font-bold text-slate-950 text-sm">{c.title}</h3>
              <p className="text-xs text-slate-700">{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Part II: Three Historical Empires -> Nature & Academic Silence */}
      <section className="mb-10 space-y-4">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <ShieldAlert className="w-6 h-6 text-amber-700" />
          <h2>Part II: Three Historical Mirrors Explaining Nature&apos;s Spin &amp; Academia&apos;s Silence</h2>
        </div>
        <div className="space-y-3.5">
          {empireMappings.map((m, idx) => (
            <div key={idx} className="bg-amber-50/50 border border-amber-200 p-4 rounded-xl space-y-1.5 font-sans">
              <h3 className="font-bold text-amber-950 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{m.empire}</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-700">{m.academicParallel}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Part III: Full English Critical Treatise */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <BookOpen className="w-6 h-6 text-rose-700" />
            <h2>Part III: Full English Synthesis Essay</h2>
          </div>
          <button
            onClick={() => handleCopyText(englishEssayText, "eng-hq-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "eng-hq-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-hq-mid" ? "Copied!" : "Copy English Text"}
          </button>
        </div>
        <div className="bg-slate-900 text-slate-100 rounded-xl p-6 font-serif text-sm md:text-base leading-relaxed whitespace-pre-wrap border border-slate-700">
          {englishEssayText}
        </div>
      </section>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Scale className="w-4 h-4 text-slate-400" />
          <span>Essay HQ &bull; Institutional Blindness, Goodhart&apos;s Law &amp; The New Dark Age</span>
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Three Contributions
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Error-Correction Collapse
          </span>
        </div>
      </div>
    </article>
  );
}
