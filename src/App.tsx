import React, { useState } from "react";
import BilingualScriptSection from "./components/BilingualScriptSection";
import AcademicCommentary from "./components/AcademicCommentary";
import SystemicFlowChart from "./components/SystemicFlowChart";
import BiasAnalyzer from "./components/BiasAnalyzer";
import IntegratedArticle from "./components/IntegratedArticle";
import YoutubeHub from "./components/YoutubeHub";
import { BookOpen, FileText, Activity, Brain, ArrowDown, GraduationCap, ShieldAlert, AlertTriangle, Newspaper, Youtube } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"article" | "youtube" | "commentary" | "script" | "matrix" | "analyzer">("article");
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    // Obtain the direct domain of the loaded iframe
    let rawUrl = window.location.href;
    // Automatically replace dev domain with pre (public) domain to guarantee a VPN-free link
    if (rawUrl.includes("ais-dev-")) {
      rawUrl = rawUrl.replaceAll("ais-dev-", "ais-pre-");
    }
    navigator.clipboard.writeText(rawUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans selection:bg-slate-900 selection:text-white pb-12" id="app-container">
      
      {/* Top Academic Banner */}
      <div className="bg-slate-900 text-slate-200 border-b border-slate-950 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-white tracking-wider uppercase">
              Scientific Integrity & Epistemology Forum
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-gray-400">
            <span>Vol. VIII, No. 6</span>
            <span className="hidden sm:inline">•</span>
            <span>June 2026</span>
            <span className="hidden sm:inline">•</span>
            <button
              onClick={handleCopyLink}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded transition-all font-sans font-bold text-[10.5px] cursor-pointer shadow-2xs ${
                copiedLink 
                  ? "bg-emerald-600 text-white" 
                  : "bg-amber-400 text-slate-950 hover:bg-amber-500 font-extrabold"
              }`}
            >
              {copiedLink ? "✓ Address Copied!" : "📋 Copy Direct Sharing Link (复制无墙分享链接)"}
            </button>
          </div>
        </div>
      </div>

      {/* Main Editorial Hero */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center space-y-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-sans leading-tight">
            The Pixel Hunt <span className="font-serif font-light italic text-gray-500">and</span> The Golden Silence
          </h1>
          <p className="text-base text-gray-500 leading-relaxed font-serif max-w-2xl mx-auto">
            Why is structural scientific fraud met with institutional indifference, while localized graphic errors trigger immediate public purification? An empirical study of grassroots vs. academic gatekeeping.
          </p>
        </div>

        {/* Conceptual Alert Box */}
        <div className="max-w-3xl mx-auto bg-amber-50/40 border border-amber-200/50 rounded-2xl p-4 flex gap-3 text-left">
          <div className="p-2 rounded-lg bg-amber-100/60 text-amber-700 h-fit">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-amber-900 uppercase tracking-widest font-mono">
              The Woodpecker Dilemma
            </h4>
            <p className="text-xs text-amber-850/95 leading-relaxed font-sans">
              "The woodpecker that tears open a wound will be forced to leave the forest. But the grubs inside the tree trunk have never decreased." This dashboard explores how administrative cartels manage whistleblowers while maintaining the academic gold rush.
            </p>
          </div>
        </div>
      </header>

      {/* Primary Tab Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex overflow-x-auto gap-1 border-b border-gray-250 pb-px font-sans custom-scrollbar">

          <button
            onClick={() => setActiveTab("article")}
            className={`flex items-center gap-2 py-3 px-4.5 text-xs font-bold leading-none border-b-2 transition whitespace-nowrap uppercase tracking-wider ${
              activeTab === "article"
                ? "border-slate-900 text-slate-900 font-extrabold"
                : "border-transparent text-gray-400 hover:text-gray-900 hover:border-gray-300"
            }`}
            id="tab-article"
          >
            <Newspaper className="w-4 h-4 shrink-0" />
            1. Full Integrated Essay
          </button>

          <button
            onClick={() => setActiveTab("youtube")}
            className={`flex items-center gap-2 py-3 px-4.5 text-xs font-bold leading-none border-b-2 transition whitespace-nowrap uppercase tracking-wider ${
              activeTab === "youtube"
                ? "border-slate-900 text-slate-900 font-extrabold"
                : "border-transparent text-gray-400 hover:text-gray-900 hover:border-gray-300"
            }`}
            id="tab-youtube"
          >
            <Youtube className="w-4 h-4 shrink-0" />
            2. YouTube Video Suite
          </button>
          
          <button
            onClick={() => setActiveTab("commentary")}
            className={`flex items-center gap-2 py-3 px-4.5 text-xs font-bold leading-none border-b-2 transition whitespace-nowrap uppercase tracking-wider ${
              activeTab === "commentary"
                ? "border-slate-900 text-slate-900 font-extrabold"
                : "border-transparent text-gray-400 hover:text-gray-900 hover:border-gray-300"
            }`}
            id="tab-commentary"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            3. Scholarly Commentary
          </button>

          <button
            onClick={() => setActiveTab("script")}
            className={`flex items-center gap-2 py-3 px-4.5 text-xs font-bold leading-none border-b-2 transition whitespace-nowrap uppercase tracking-wider ${
              activeTab === "script"
                ? "border-slate-900 text-slate-900 font-extrabold"
                : "border-transparent text-gray-400 hover:text-gray-950 hover:border-gray-350"
            }`}
            id="tab-script"
          >
            <FileText className="w-4 h-4 shrink-0" />
            4. Chinese Script Drafts
          </button>

          <button
            onClick={() => setActiveTab("matrix")}
            className={`flex items-center gap-2 py-3 px-4.5 text-xs font-bold leading-none border-b-2 transition whitespace-nowrap uppercase tracking-wider ${
              activeTab === "matrix"
                ? "border-slate-900 text-slate-900 font-extrabold"
                : "border-transparent text-gray-400 hover:text-gray-900 hover:border-gray-300"
            }`}
            id="tab-matrix"
          >
            <Activity className="w-4 h-4 shrink-0" />
            5. Response Matrix
          </button>

          <button
            onClick={() => setActiveTab("analyzer")}
            className={`flex items-center gap-2 py-3 px-4.5 text-xs font-bold leading-none border-b-2 transition whitespace-nowrap uppercase tracking-wider ${
              activeTab === "analyzer"
                ? "border-slate-900 text-slate-900 font-extrabold"
                : "border-transparent text-gray-400 hover:text-gray-900 hover:border-gray-300"
            }`}
            id="tab-analyzer"
          >
            <Brain className="w-4 h-4 shrink-0" />
            6. AI Rhetoric Analyzer
          </button>

        </div>
      </nav>

      {/* Main Content Areas */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6">

        {activeTab === "article" && (
          <div className="space-y-6">
            <IntegratedArticle />
          </div>
        )}

        {activeTab === "youtube" && (
          <div className="space-y-6">
            <YoutubeHub />
          </div>
        )}
        
        {activeTab === "commentary" && (
          <div className="space-y-6">
            <AcademicCommentary />
          </div>
        )}

        {activeTab === "script" && (
          <div className="space-y-6">
            <BilingualScriptSection />
          </div>
        )}

        {activeTab === "matrix" && (
          <div className="space-y-6">
            <SystemicFlowChart />
          </div>
        )}

        {activeTab === "analyzer" && (
          <div className="space-y-6">
            <BiasAnalyzer />
          </div>
        )}

      </main>

      {/* Footer Tribute and Contact */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <ShieldAlert className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider font-mono">
                Academic Honesty Forum • Yue Liu
              </span>
            </div>
            <p className="text-[11px] text-gray-500 max-w-md font-sans">
              Dedicated to exposing citation syndicates, paradigm gatekeeping, and defending objectivewave physics. Challenge superstition with slow, logical, transparent verification.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1 font-mono text-[10px] text-gray-400">
            <span>CITATIONS & CORRESPONDENCE</span>
            <a
              href="mailto:yueliusd@163.com"
              className="text-gray-700 hover:text-slate-950 underline font-semibold text-xs"
            >
              yueliusd@163.com
            </a>
            <span>SSRN Author Citation Index: Oct 2025</span>
          </div>
        </div>

        <div className="text-center text-[10px] text-gray-300 mt-8 pt-4 border-t border-gray-100 font-mono">
          © 2026 Academic Integrity Forum. Written on behalf of Yue Liu's critical treatises. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}
