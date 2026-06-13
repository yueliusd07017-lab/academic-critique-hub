import React, { useState } from "react";
import { videoScriptData } from "../data";
import { ScriptLine } from "../types";
import { FileText, PlayCircle, Info, ChevronRight, CheckCircle2 } from "lucide-react";

export default function BilingualScriptSection() {
  const [selectedLineId, setSelectedLineId] = useState<string | null>("s1");

  const activeLine = videoScriptData.find((l) => l.id === selectedLineId);

  // Expose specific commentary context for specific video sections
  const getContextNote = (id: string) => {
    switch (id) {
      case "s4":
        return "Remarkably, one of the exposed papers claimed a male patient suffered from 'uterine-cervix cervical cancer' during pregnancy. These clerical and peer-review failures represent a complete absence of baseline cognitive filters in top publications.";
      case "s5":
        return "Using identical mouse photographs with altered brightness to simulate a 'dose-dependent response' reflects standard 'paper-mill' products. It is simple to prove via automated pixel-hunting but exposes an industry of peer-reviewed cosmetics.";
      case "s7":
        return "Even after the universities fired the specific authors, the whistleblower's commercial sponsorships and audience reach were crippled (shadowbanned). This reflects high institutional defense mechanisms.";
      case "s13":
        case "s14":
        return "Woodpecker theory: The woodpecker is forced to leave the forest because they make the collective decay look bad, while the administrative authorities protect the remaining tree-dwellers from total reform.";
      default:
        return "A clear example of grassroots error detection triumphing on public forums because the visual evidence remains irrefutable to the public eye.";
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm " id="bilingual-script-section">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100 mb-2">
            <PlayCircle className="w-3.5 h-3.5" /> Whistleblower Video Script
          </span>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight font-sans">
            Bilingual Script & Grassroots Exposure
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Original Chinese video script translated into polished academic English.
          </p>
        </div>
        <div className="text-xs text-gray-400 font-mono self-end sm:self-auto">
          Duration: 00:56s • Whistleblower: \"Geng Tongxue\"
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Timeline Scroll */}
        <div className="lg:col-span-7 space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {videoScriptData.map((line) => {
            const isSelected = selectedLineId === line.id;
            return (
              <button
                key={line.id}
                onClick={() => setSelectedLineId(line.id)}
                className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 border flex gap-3 group relative ${
                  isSelected
                    ? "bg-amber-50/50 border-amber-300 shadow-sm"
                    : "bg-gray-50/30 border-gray-100 hover:bg-gray-50 hover:border-gray-200"
                }`}
                id={`script-btn-${line.id}`}
              >
                {isSelected && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-l-xl" />
                )}
                
                <span className="text-xs font-mono text-amber-600 font-semibold mt-1 bg-white px-1.5 py-0.5 rounded border border-gray-100 h-fit shadow-2xs">
                  {line.timeStart.slice(3, 8)}
                </span>

                <div className="space-y-2 flex-1">
                  <p className={`text-sm font-medium font-sans leading-relaxed transition-colors ${
                    isSelected ? "text-gray-900" : "text-gray-700 group-hover:text-gray-950"
                  }`}>
                    {line.textZh}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed italic font-serif">
                    {line.textEn}
                  </p>
                </div>

                <div className="flex items-center self-center text-gray-300 group-hover:text-amber-500 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Deep-Dive Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gray-50/60 rounded-xl p-5 border border-gray-100">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-mono block mb-2">
              Deep Analysis • Selected Timestamp
            </span>
            {activeLine ? (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center gap-1.5 text-xs text-amber-700 font-bold font-mono">
                  <span>{activeLine.timeStart}</span>
                  <span>➜</span>
                  <span>{activeLine.timeEnd}</span>
                </div>

                <div className="border-l-2 border-gray-200 pl-3 py-1 italic text-xs text-gray-600 font-serif leading-relaxed">
                  " {activeLine.textEn} "
                </div>

                <div className="space-y-3 bg-white p-4 rounded-lg border border-gray-100 shadow-3xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
                    <Info className="w-3.5 h-3.5 text-amber-500" />
                    <span>Real-World Fraud Context</span>
                  </div>
                  <p className="text-xs text-gray-650 leading-relaxed font-sans">
                    {getContextNote(activeLine.id)}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400 text-sm">
                Click any script quote to examine academic context
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-150 text-[11px] text-gray-500 leading-relaxed font-sans space-y-2">
            <div className="flex gap-1.5 items-start">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
              <span>
                <strong>Pixel-Hunting Triumph</strong>: Shows why mechanical image errors are successfully purged by administrative actions because they represent a public relations liability.
              </span>
            </div>
            <div className="flex gap-1.5 items-start">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
              <span>
                <strong>Systemic Backlash</strong>: Shadowbanning Geng Tongxue demonstrates that exposing systemic metrics challenges a multi-billion dollar academic publication cartel.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
