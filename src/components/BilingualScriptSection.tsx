import React, { useState } from "react";
import { videoScriptData, fourScandalsScriptData } from "../data";
import { ScriptLine } from "../types";
import { FileText, PlayCircle, Info, ChevronRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function BilingualScriptSection() {
  const [activeScriptTab, setActiveScriptTab] = useState<"geng" | "scandals">("geng");
  const [selectedLineId, setSelectedLineId] = useState<string>("s1");

  const currentScriptData = activeScriptTab === "geng" ? videoScriptData : fourScandalsScriptData;
  const activeLine = currentScriptData.find((l) => l.id === selectedLineId) || currentScriptData[0];

  const handleTabChange = (tab: "geng" | "scandals") => {
    setActiveScriptTab(tab);
    setSelectedLineId(tab === "geng" ? "s1" : "fs1");
  };

  // Expose specific commentary context for specific video sections
  const getContextNote = (id: string) => {
    switch (id) {
      // Geng Tongxue Script Notes
      case "s4":
        return "Remarkably, one of the exposed papers claimed a male patient suffered from 'uterine-cervix cervical cancer' during pregnancy. These clerical and peer-review failures represent a complete absence of baseline cognitive filters in top publications.";
      case "s5":
        return "Using identical mouse photographs with altered brightness to simulate a 'dose-dependent response' reflects standard 'paper-mill' products. It is simple to prove via automated pixel-hunting but exposes an industry of peer-reviewed cosmetics.";
      case "s7":
        return "Even after the universities fired the specific authors, the whistleblower's commercial sponsorships and audience reach were crippled (shadowbanned). This reflects high institutional defense mechanisms.";
      case "s13":
      case "s14":
        return "Woodpecker theory: The woodpecker is forced to leave the forest because they make the collective decay look bad, while the administrative authorities protect the remaining tree-dwellers from total reform.";

      // Four Great Scandals / Milestones Notes
      case "fs3":
      case "fs4":
      case "fs5":
      case "fs6":
        return "For Jan Hendrik Schön, publishing at a rate of one Nature/Science paper every 8 days meant peer reviewers completely suspended disbelief. His raw data logs never existed, and his Nobel-level molecular transit claims were fabricated on graphics software.";
      case "fs11":
      case "fs16":
      case "fs17":
        return "South Korea's Hwang Woo-suk case shows how 'National Pride science' fosters extreme administrative blindness. Hwang's cloned cells were fabricated using photo duplicates of standard ovaries and fake DNA sequencing charts.";
      case "fs18":
      case "fs20":
      case "fs21":
      case "fs24":
        return "Amateur archaeologist Shinichi Fujimura, the 'Divine Hand', personally buried pre-bought stone age relics in his own dig sites at dawn. The Mainichi Shimbun's hidden camera footage exposed him, forcing Japan to pulldown and rewrite history textbooks.";
      case "fs26":
      case "fs28":
      case "fs34":
      case "fs35":
        return "Sylvain Lesné's 2006 Nature report on the Aβ*56 oligomer locked-in the amyloid hypothesis for Alzheimer's for 16 years, absorbing billions in funding and trial resources. Image forest forensics in 2022 confirmed his western blots were copy-pasted and spliced.";
      case "fs38":
      case "fs44":
      case "fs45":
        return "When Garfield's Journal Impact Factor (IF) became the terminal target for budgets, salaries, and appointments, standard scientific behavior aligned to print quantitative metrics rather than investigate real physics. Goodhart's Law prevailed.";
      case "fs49":
      case "fs50":
        return "Citation Cartels are networks of editors and authors who systematically trade mutual citations. Clarivate's 2018 metrics purge proved that journals can easily corrupt their indexing currency through self-citations and citation stacking.";
      case "fs54":
      case "fs57":
      case "fs61":
        return "The combination of the Article Processing Charge (APC) open-access model and 'Special Issues' acted as a Trojan Horse. Paper mills corrupted peer review by bribe-installing guest editors to pass thousands of synthetic manuscripts.";
      case "fs65":
      case "fs76":
      case "fs78":
        return "Elisabeth Bik, founder of Science Integrity Digest, resigned from her laboratory to manually sift through thousands of papers, exposing duplicate western blots. She transformed academic whistleblowing into a professional standard.";
      case "fs85":
      case "fs86":
      case "fs90":
      case "fs93":
        return "Wiley's $298 million acquisition of Egyptian pure-OA publisher Hindawi collapsed when data sleuths exposed systemic paper-mill infiltration. The resulting 11,300+ retractions led to the total dissolution of the Hindawi brand.";
      case "fs98":
      case "fs99":
      case "fs100":
        return "In 2024, Harvard's premier oncology institute, Dana-Farber, faced massive image manipulation claims of western blot copy-pasting, affecting executive-led papers. The institute applied for dozens of retractions and corrections.";
      case "fs106":
      case "fs108":
        return "The AI era has created a robotic arms race: Generative AI systems write papers with flawless prose, while publishers deploy tools like Proofig to read pixels. But this ignores Musk's warning that 95% of science is garbage water.";
      default:
        return "A clear example of how digital and metrics automation have turned scientific publishing into an industrial-scale manufacturing pipeline, shifting fraud from isolated individuals to systemic cartels.";
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm " id="bilingual-script-section">
      
      {/* Tab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-150 pb-5 mb-6 font-sans">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 mb-2">
            <PlayCircle className="w-3.5 h-3.5 text-slate-900" /> BILINGUAL AUDIO PATH
          </span>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight leading-none">
            Bilingual Script Timeline Translation
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Compare original scripts line-by-line with professional academic translations and context notes.
          </p>
        </div>
        
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 h-fit self-start sm:self-auto shrink-0">
          <button
            onClick={() => handleTabChange("geng")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeScriptTab === "geng"
                ? "bg-white text-slate-950 shadow-xs border border-gray-200"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            1. Whistleblower Geng
          </button>
          <button
            onClick={() => handleTabChange("scandals")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeScriptTab === "scandals"
                ? "bg-white text-slate-950 shadow-xs border border-gray-200"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            2. 4 Scandals & Milestones (14-min Audio)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Timeline Scroll */}
        <div className="lg:col-span-7 space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {currentScriptData.map((line) => {
            const isSelected = selectedLineId === line.id;
            return (
              <button
                key={line.id}
                onClick={() => setSelectedLineId(line.id)}
                className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 border flex gap-3 group relative cursor-pointer ${
                  isSelected
                    ? "bg-slate-50 border-slate-900 shadow-xs"
                    : "bg-gray-50/20 border-gray-100 hover:bg-gray-100/40 hover:border-gray-200"
                }`}
                id={`script-btn-${line.id}`}
              >
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-900 rounded-l-xl" />
                )}
                
                <span className="text-[10px] font-mono text-slate-600 font-bold mt-1 bg-white px-2 py-0.5 rounded border border-gray-150 h-fit shadow-3xs">
                  {line.timeStart.slice(3, 8)}
                </span>

                <div className="space-y-2 flex-1">
                  <p className={`text-sm font-semibold font-sans leading-relaxed transition-colors ${
                    isSelected ? "text-slate-950" : "text-slate-700 group-hover:text-slate-950"
                  }`}>
                    {line.textZh}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed italic font-serif">
                    {line.textEn}
                  </p>
                </div>

                <div className="flex items-center self-center text-gray-300 group-hover:text-slate-900 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Deep-Dive Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50/50 rounded-2xl p-5 border border-slate-200">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-gray-200 pb-2 font-sans">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                Selected Deep Dive Context
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-400 bg-white border px-2 py-0.5 rounded">
                Ref: {activeLine.id.toUpperCase()}
              </span>
            </div>

            {activeLine ? (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-1.5 text-xs text-slate-800 font-extrabold font-mono bg-white inline-flex px-2.5 py-1 rounded shadow-3xs border border-gray-200">
                  <span>{activeLine.timeStart}</span>
                  <span className="text-gray-400">➜</span>
                  <span>{activeLine.timeEnd}</span>
                </div>

                <div className="border-l-3 border-slate-900 pl-3.5 py-1 italic text-xs text-slate-600 font-serif leading-relaxed bg-amber-50/20 p-2 rounded-r">
                  " {activeLine.textEn} "
                </div>

                <div className="space-y-3 bg-white p-4.5 rounded-xl border border-gray-200 shadow-3xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 border-b border-gray-100 pb-2 font-sans">
                    <Info className="w-4 h-4 text-slate-950" />
                    <span>Real-World Fraud & Meta-Science Fact</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {getContextNote(activeLine.id)}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400 text-sm font-sans">
                Click any script quote to examine academic context
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 text-[11px] text-gray-500 leading-relaxed font-sans space-y-2.5">
            <div className="flex gap-2 items-start bg-white p-2.5 rounded-xl border border-gray-150">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span>
                <strong>Whistleblower purges vs. Silent Complicity</strong>: Administrative bodies quickly fire scapegoats for silly visual pixel duplicate tricks to protect institutional prestige, but hide in silence when entire theoretical frameworks are proven wrong.
              </span>
            </div>
            <div className="flex gap-2 items-start bg-white p-2.5 rounded-xl border border-gray-150">
              <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <span>
                <strong>Epidemic Scale of Water papers</strong>: The actual challenge facing science is the mass indexing of redundant, useless, or outright wrong data-reports (95% SCI junk) which never get retracted because they don't contain spectacular visual errors.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
