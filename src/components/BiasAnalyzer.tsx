import React, { useState } from "react";
import { BiasAnalysisResult } from "../types";
import { AlertCircle, Brain, Sparkles, Check, Play, RefreshCw, Send, HelpCircle } from "lucide-react";

const PRESET_MANUSCRIPTS = [
  {
    id: "p1",
    label: "Defensive Tone-Policing Feedback",
    contextType: "Journal Reviewer comment",
    text: "While you are demanding that journal papers are wrong, a thorough case study is required. Moreover, the word 'research' itself signifies that facts are re-searching. Therefore, every research is relatively correct or wrong according to the era. The writing flow of the manuscript should be more polite and professional."
  },
  {
    id: "p2",
    label: "Dismissal of Systemic Metrics",
    contextType: "Editor-in-Chief Letter",
    text: "I do not support the claim that 90% of journal articles are false. This may be true to some extent for the non-peer-reviewed publications, but still, 90% is more of an exaggeration than a scientific statement. According to Nobel laureate Honjo Tasuku, 90% of top magazine publications are wrong, but I see this sentence as an exaggerated formulation to alert young researchers."
  },
  {
    id: "p3",
    label: "Dogma Defense & Consolidation",
    contextType: "Author Rebuttal",
    text: "Our wave impedance matching calculation has been supported by hundreds of peer-reviewed articles in materials research for fifty years. Your critique that it violates wave physics at the metal boundary represents a niche mathematical point that doesn't affect the practical usefulness. Science is a consensus, not just physical nitpicking."
  }
];

export default function BiasAnalyzer() {
  const [inputText, setInputText] = useState<string>(PRESET_MANUSCRIPTS[0].text);
  const [contextType, setContextType] = useState<string>(PRESET_MANUSCRIPTS[0].contextType);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<BiasAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const selectPreset = (preset: typeof PRESET_MANUSCRIPTS[0]) => {
    setInputText(preset.text);
    setContextType(preset.contextType);
    setResult(null);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!inputText.trim()) {
      setError("Please provide a text or select a preset to analyze.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/gemini/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: inputText,
          contextType: contextType
        })
      });

      if (!response.ok) {
        const errDetails = await response.json();
        throw new Error(errDetails.error || "Failed to contact academic critique server.");
      }

      const data: BiasAnalysisResult = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred during analysis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm" id="bias-analyzer-section">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-5 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 mb-2">
            <Brain className="w-3.5 h-3.5" /> Server-Side AI Agent
          </span>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight font-sans">
            AI Academic Bias & Rhetoric Deconstructor
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Evaluate defensive maneuvers, tone-policing, and dogma defense logic using server-side Gemini intelligence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Input Form */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest font-mono block mb-3">
              Preset Real-World Materials
            </span>
            <div className="space-y-2">
              {PRESET_MANUSCRIPTS.map((p) => {
                const isSelected = inputText === p.text;
                return (
                  <button
                    key={p.id}
                    onClick={() => selectPreset(p)}
                    className={`w-full text-left p-3 rounded-lg border text-xs transition relative font-sans ${
                      isSelected
                        ? "bg-slate-100/80 border-slate-350 font-medium text-slate-900 shadow-3xs"
                        : "bg-gray-50/50 border-gray-100 text-gray-600 hover:bg-gray-50 hover:border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-center gap-2">
                      <span className="truncate">{p.label}</span>
                      <span className="text-[9px] font-mono uppercase text-gray-400 bg-white px-1.5 py-0.5 rounded border border-gray-100">
                        {p.contextType.split(" ")[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4 pt-1">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-gray-700 font-sans">
                Analyze Custom Academic Text:
              </label>
              <input
                type="text"
                value={contextType}
                onChange={(e) => setContextType(e.target.value)}
                placeholder="e.g. Reviewer block"
                className="text-[10px] uppercase font-mono tracking-wider text-right border-b border-gray-200 focus:border-slate-400 focus:outline-none py-0.5 px-1 bg-transparent max-w-[150px]"
              />
            </div>

            <textarea
              rows={5}
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                setResult(null);
                setError(null);
              }}
              placeholder="Paste reviewer notes, academic rebuttals, or papers challenging logical consistency..."
              className="w-full p-4 rounded-xl border border-gray-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 text-xs font-mono leading-relaxed bg-gray-50/20 custom-scrollbar"
            />

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full bg-slate-900 hover:bg-slate-950 text-white font-semibold font-sans py-3 px-5 rounded-xl text-xs transition duration-200 flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                  Deconstructing Rhetoric...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  Initiate Logical Analysis
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="p-3.5 bg-red-50 border border-red-100 text-red-700 rounded-xl flex items-start gap-2.5 text-xs font-sans">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
              <span>{error}</span>
            </div>
          )}
        </div>

        {/* Right Output results Panel */}
        <div className="lg:col-span-7 bg-gray-50/50 rounded-2xl border border-gray-100 p-5 flex flex-col justify-between min-h-[400px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-4 py-24 my-auto">
              <Brain className="w-12 h-12 text-slate-350 animate-pulse" />
              <div className="text-center space-y-1">
                <p className="text-xs font-bold text-gray-700 font-sans">Deconstructing Academic Cartel Logic...</p>
                <p className="text-[11px] text-gray-400 font-mono">Running @google/genai with 'gemini-3.5-flash'</p>
              </div>
            </div>
          ) : result ? (
            <div className="space-y-6 animate-fade-in">
              {/* Header metrics */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-150">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 block">
                    Institutional Bias Index
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-bold font-sans tracking-tight text-gray-900">
                      {result.biasScore}
                    </span>
                    <span className="text-xs text-gray-400">/ 100</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 text-right justify-end max-w-[280px]">
                  {result.maneuversDetected.map((m, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-2 py-0.5 text-[9px] uppercase tracking-wider font-bold rounded bg-slate-900 text-white font-mono"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Precise Logical critique */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono block">
                  Precise Rhetorical Deconstruction
                </span>
                <p className="text-xs text-slate-850 font-serif leading-relaxed italic border-l-2 border-slate-300 pl-3">
                  "{result.structuralCritique}"
                </p>
              </div>

              {/* Fallacy breakdown list */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono block">
                  Identified Logic Flaws
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {result.fallacyBreakdown.map((fall, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg border border-gray-150 bg-white shadow-3xs space-y-1"
                    >
                      <div className="flex justify-between items-center gap-2">
                        <span className="text-xs font-bold text-gray-800 font-sans truncate">
                          {fall.fallacy}
                        </span>
                        <span className={`text-[9px] font-mono px-1 rounded uppercase font-semibold ${
                          fall.severity === "High" ? "bg-red-50 text-red-600 border border-red-100" :
                          fall.severity === "Medium" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                          "bg-blue-50 text-blue-600 border border-blue-100"
                        }`}>
                          {fall.severity}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-500 leading-normal font-sans">
                        {fall.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Honest Scientific Response */}
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 font-sans">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>The Intellectual Honesty Path</span>
                </div>
                <p className="text-[11px] text-emerald-900/80 leading-relaxed font-serif">
                  {result.alternativeScientificStance}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 py-24 my-auto">
              <Send className="w-10 h-10 text-gray-300 animate-bounce" />
              <div className="text-center space-y-1 px-4">
                <h4 className="text-xs font-bold text-gray-700 font-sans">Awaiting Rhetorical Submissions</h4>
                <p className="text-[11px] text-gray-400 font-sans max-w-sm mx-auto leading-relaxed">
                  Select a template on the left or type custom peer feedback. Click "Initiate Logical Analysis" to launch the AI process.
                </p>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-gray-100 text-[10px] text-gray-400 font-mono flex items-center justify-between">
            <span>Powered by models/gemini-3.5-flash</span>
            <span>Real-time response schema enabled</span>
          </div>
        </div>
      </div>
    </div>
  );
}
