import React, { useState } from "react";
import { flowDescription } from "../data";
import { Eye, ShieldX, Scan, ShieldAlert, CheckSquare, HelpCircle, Users, Activity } from "lucide-react";

export default function SystemicFlowChart() {
  const [activeTrack, setActiveTrack] = useState<"pixel" | "systemic">("pixel");

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm" id="systemic-flowchart-section">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-5 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-2">
            <Activity className="w-3.5 h-3.5" /> Conceptual Flow Map
          </span>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight font-sans">
            Institutional Response Matrix
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Divergent pathways: Why local visual fraud is swiftly resolved, while systemic theoretical challenge is silenced.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="inline-flex bg-gray-100 p-1 rounded-xl self-end md:self-auto border border-gray-150">
          <button
            onClick={() => setActiveTrack("pixel")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-sans transition-all flex items-center gap-1.5 ${
              activeTrack === "pixel"
                ? "bg-white text-slate-900 shadow-3xs"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-amber-500" />
            Grassroots Pixel-Hunt
          </button>
          <button
            onClick={() => setActiveTrack("systemic")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-sans transition-all flex items-center gap-1.5 ${
              activeTrack === "systemic"
                ? "bg-white text-slate-900 shadow-3xs"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <ShieldX className="w-3.5 h-3.5 text-indigo-500" />
            Systemic Logic Call-out
          </button>
        </div>
      </div>

      {/* Grid of comparison cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Dynamic Node Diagram */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-4 bg-slate-900 text-white rounded-xl space-y-3 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400 animate-ping" />
              <span className="text-[10px] tracking-widest font-mono text-gray-400 uppercase">
                The Academic Whistleblowing Dilemma
              </span>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold font-sans">
                {activeTrack === "pixel" ? flowDescription.pixelHunting.title : flowDescription.systemicScrutiny.title}
              </h4>
              <p className="text-xs text-gray-300 font-mono">
                {activeTrack === "pixel" ? flowDescription.pixelHunting.complexity : flowDescription.systemicScrutiny.complexity}
              </p>
            </div>
          </div>

          {/* Connected Steps */}
          <div className="space-y-4 relative border-l border-gray-150 pl-6 ml-3">
            
            {/* Step 1 */}
            <div className="relative">
              <span className="absolute -left-[30px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 border border-gray-200 text-[10px] font-bold text-gray-500 font-mono">
                1
              </span>
              <div className="space-y-1 bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block font-mono">
                  Core Targets
                </span>
                <p className="text-xs text-gray-700 font-sans">
                  {activeTrack === "pixel" ? flowDescription.pixelHunting.desc : flowDescription.systemicScrutiny.desc}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <span className="absolute -left-[30px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 border border-gray-200 text-[10px] font-bold text-gray-500 font-mono">
                2
              </span>
              <div className="space-y-1 bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block font-mono">
                  Public and Peer Interface
                </span>
                <p className="text-xs text-gray-700 font-sans">
                  {activeTrack === "pixel" ? flowDescription.pixelHunting.mechanism : flowDescription.systemicScrutiny.mechanism}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <span className="absolute -left-[30px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 border border-slate-900 text-[10px] font-bold text-white font-mono">
                3
              </span>
              <div className="space-y-1 bg-slate-50/100 p-3.5 rounded-lg border border-slate-200 shadow-3xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block font-mono">
                  Final Institutional Resolution
                </span>
                <p className="text-xs text-gray-800 font-serif leading-relaxed">
                  {activeTrack === "pixel" ? flowDescription.pixelHunting.consequence : flowDescription.systemicScrutiny.consequence}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Analytical Deep Dive */}
        <div className="lg:col-span-5 bg-indigo-50/30 border border-indigo-100/50 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Scan className="w-4 h-4 text-indigo-600" />
            <h4 className="text-sm font-bold text-indigo-950 font-sans">
              Critical Institutional Asymmetry
            </h4>
          </div>

          <p className="text-xs text-indigo-900/80 leading-relaxed font-sans">
            This flow defines the <strong>“Asymmetry of Disbelief”</strong> in scientific integrity. 
            Because elite journals and publication cartels are heavily reliant on high-impact metric systems and major grants, they have a vested interest in framing dishonesty as an <em>isolated, individual visual error</em> rather than a <em>systemic, paradigm-wide conceptual collapse</em>.
          </p>

          <div className="space-y-3.5 pt-2 border-t border-indigo-150">
            <div className="flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-indigo-950 font-sans">Why Localized Retractions are Favored</h5>
                <p className="text-[11px] text-indigo-900/70 leading-relaxed mt-0.5 font-sans">
                  They demonstrate that the administrative powers are "doing their job." The hierarchy uses them to reassure funders that bad apples are isolated.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Users className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-indigo-950 font-sans">Why Logical Challenges are Rejected</h5>
                <p className="text-[11px] text-indigo-900/70 leading-relaxed mt-0.5 font-sans">
                  A challenge to a 50-year-old dogma (like microwave absorption impedance matching) invalidates thousands of papers and millions in grants, meaning the entire peer-review core card-house collapses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
