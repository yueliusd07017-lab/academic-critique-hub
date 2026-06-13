import React, { useState } from "react";
import { academicEvidence } from "../data";
import { EvidenceItem } from "../types";
import { BookOpen, ExternalLink, Award, FileSpreadsheet, Quote, ArrowUpRight } from "lucide-react";

export default function AcademicCommentary() {
  const [selectedEvidenceId, setSelectedEvidenceId] = useState<string>("ev1");

  const selectedEvidence = academicEvidence.find((e) => e.id === selectedEvidenceId) || academicEvidence[0];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm" id="academic-commentary-section">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-5 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-2">
            <BookOpen className="w-3.5 h-3.5" /> Peer-Reviewed Commentary
          </span>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight font-sans">
            Formal Editorial & Scholarly Commentary
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Expanding empirical evidence on the systemic resistance of academic establishments to core logical corrections.
          </p>
        </div>
        <div className="text-xs text-gray-400 font-mono self-end md:self-auto bg-gray-50 px-2.5 py-1 rounded border border-gray-100">
          Ref: EN-COMMENTARY-2026-YLIU
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Side: The Essay Block */}
        <div className="xl:col-span-7 space-y-5 text-gray-800 leading-relaxed font-serif text-sm border-r border-gray-100 xl:pr-6 align-top">
          
          <h3 className="text-xl font-semibold text-gray-950 font-sans tracking-tight leading-snug">
            The Pixel Hunt vs. The Golden Silence:<br/>
            <span className="text-gray-500 text-sm font-normal">Why Academia Tolerates Systemic Theoretical Alchemy While Policing Local Glitches</span>
          </h3>

          <p>
            <span className="float-left text-5xl font-bold text-gray-950 mr-2 mt-1 leading-none font-sans">T</span>
            he case of grassroots whistleblowers like <span className="font-semibold text-gray-900">“Geng Tongxue”</span> highlights a deep, systemic paradox inside modern science. 
            When whistleblowers expose absurd local graphics deviations—such as male cervical cancer or copy-pasted Western Blot mouse panels—the media reacts with fervor, institutions issue swift retractions, and administrative commissions dismiss the culprits. 
            Yet, when scholars apply rigorous logical, mathematical, or wave-physical scrutiny to challenge standard, half-century-long paradigms, they encounter canny, institutional silence. 
            Why does science enthusiastically clean up the "pixels" while fiercely protecting the establishment's "dogmatic alchemy"?
          </p>

          <p>
            The reasons are dual-layered. First, a local pixel-clash or an impossible medical chart (like a pregnant male) can be understood by anyone. It crosses the boundary of domain expertise into the sphere of general common-sense. 
            However, pointing out a fundamental physical fallacy, such as the 
            <button 
              onClick={() => setSelectedEvidenceId("ev1")} 
              className={`font-semibold underline decoration-2 decoration-amber-400 cursor-pointer font-sans text-xs bg-amber-50/50 hover:bg-amber-100 px-1 py-0.5 rounded transition ${
                selectedEvidenceId === "ev1" ? "bg-amber-200" : ""
              }`}
            >
              Impedance Matching Dilemma in Microwave Absorption Theory
            </button>, 
            demands profound wave physics domain competence. 
            Because the grassroots public cannot confidently evaluate such core theoretical arguments, the establishment is saved from public relations pressure.
          </p>

          <p>
            Second, and most critically, local pixel-hunts do not threaten the core elite system. When an individual researcher is caught fabricating a blot, they are easily sacrificed. 
            The institution saves face, public relations declares that "the self-correcting engine of science has successfully completed its course," and the publication houses preserve their prestige. 
            But when a structural theoretical fallacy is exposed—one that has spawned thousands of high-impact SCI citations—an entire citation cartel faces complete demolition. 
            In these scenarios, acknowledging the logical error would mean admitting that half a century of literature, funded by millions in national grants, is essentially "expert alchemy." 
            To prevent this, the mainstream cartel enacts what we call <strong>"The Golden Silence"</strong>.
          </p>

          <p>
            As analyzed in his SSRN treatise, 
            <button 
              onClick={() => setSelectedEvidenceId("ev2")} 
              className={`font-semibold underline decoration-2 decoration-blue-400 cursor-pointer text-xs bg-blue-50/50 hover:bg-blue-100 px-1 py-0.5 rounded transition ${
                selectedEvidenceId === "ev2" ? "bg-blue-200" : ""
              }`}
            >
              Yue Liu (2025)
            </button> 
            exposes how citation loops are weaponized to filter out logical scrutiny. 
            Similarly, in computer science, 
            <button 
              onClick={() => setSelectedEvidenceId("ev3")} 
              className={`font-semibold underline decoration-2 decoration-purple-400 cursor-pointer text-xs bg-purple-50/50 hover:bg-purple-100 px-1 py-0.5 rounded transition ${
                selectedEvidenceId === "ev3" ? "bg-purple-200" : ""
              }`}
            >
              Eamonn Keogh (TSAD critique)
            </button> 
            unmasks how over 95% of published works in time-series anomaly detection suffer from fundamentally broken benchmarks. 
            When these structural issues are pointed out, the major scholarly community offers no logical objections; instead, they retreat into a "head-in-the-sand" posture.
          </p>

          <p>
            Furthermore, the academic system leverages <strong>Tone-Policing</strong> and <strong>Defensive Formalism</strong> to neutralize critiques. 
            Journal reviewers and pre-print evaluators (e.g., Qeios reviewers) frequently dismiss valid physical refutations by claiming "every research is relatively correct according to the era" or instructing critics to "be more polite and professional." 
            This shifts the battleground from wave-mechanical physics to behavioral manners. 
            Postdocs who try to speak up are actively warned that they are "crossing a line" to protect established cartels, as highlighted by 
            <button 
              onClick={() => setSelectedEvidenceId("ev4")} 
              className={`font-semibold underline decoration-2 decoration-red-400 cursor-pointer text-xs bg-red-50/50 hover:bg-red-100 px-1 py-0.5 rounded transition ${
                selectedEvidenceId === "ev4" ? "bg-red-200" : ""
              }`}
            >
              Simine Vazire (Nature 2020)
            </button>.
          </p>

          <p>
            This ensures that true scientific progress—what Nobel laureate 
            <button 
              onClick={() => setSelectedEvidenceId("ev5")} 
              className={`font-semibold underline decoration-2 decoration-green-400 cursor-pointer text-xs bg-green-50/50 hover:bg-green-100 px-1 py-0.5 rounded transition ${
                selectedEvidenceId === "ev5" ? "bg-green-200" : ""
              }`}
            >
              Honjo Tasuku
            </button> 
            calls "unsuperstitious, slow science"—is gatekept out of top-tier CNS journals. 
            Until we judge research by its strict logical and physical consistency rather than pixel-hunting and citation counts, we will remain trapped in an "alchemy crisis."
          </p>
        </div>

        {/* Right Side: Interactive Evidence Card / Citation panel */}
        <div className="xl:col-span-5 space-y-6 self-start">
          <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400 block">
            Evidence Vault & Reference index
          </span>

          <div className="bg-gray-50 border border-gray-150 rounded-xl p-5 shadow-3xs space-y-4">
            <div className="flex items-start justify-between gap-3">
              <span className={`px-2.5 py-1 rounded text-[11px] font-semibold font-mono ${
                selectedEvidence.badge === "Academic Dogma" ? "bg-amber-100 text-amber-800 border border-amber-200" :
                selectedEvidence.badge === "Systemic Ignorance" ? "bg-blue-100 text-blue-800 border border-blue-200" :
                selectedEvidence.badge === "Tone-Policing" ? "bg-red-100 text-red-800 border border-red-200" :
                "bg-green-100 text-green-800 border border-green-200"
              }`}>
                {selectedEvidence.badge}
              </span>

              <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                <span>IMPACT SCORE:</span>
                <span className="text-gray-800 font-bold bg-white px-1.5 py-0.5 border border-gray-100 rounded">
                  {selectedEvidence.impactScore}/10
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-bold text-gray-900 font-sans tracking-tight leading-tight">
                {selectedEvidence.title}
              </h4>
              <p className="text-xs text-gray-400 font-mono">
                Source: {selectedEvidence.source} ({selectedEvidence.year})
              </p>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed font-sans bg-white p-3.5 rounded border border-gray-100">
              <strong>Case Study:</strong> {selectedEvidence.summary}
            </p>

            <blockquote className="border-l-4 border-gray-300 pl-3.5 py-1 text-xs italic text-gray-500 font-serif leading-relaxed relative bg-gray-100/50 rounded-r">
              <Quote className="absolute -top-2.5 -left-1 w-6 h-6 text-gray-200/50 rotate-180 -z-0" />
              <span className="relative z-10 font-serif">"{selectedEvidence.quote}"</span>
            </blockquote>

            {selectedEvidence.url && (
              <a
                href={selectedEvidence.url}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gray-700 bg-white hover:bg-gray-100 transition px-3 py-2 rounded-lg border border-gray-200 shadow-3xs w-full justify-center font-medium font-sans"
              >
                Inspect Original SSRN / Journal Publication
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Quick-links list */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-2.5">
            <span className="text-[11px] font-semibold text-gray-400 font-mono uppercase block">
              Quick Select Proof Index
            </span>
            <div className="grid grid-cols-2 gap-2">
              {academicEvidence.map((e) => (
                <button
                  key={e.id}
                  onClick={() => setSelectedEvidenceId(e.id)}
                  className={`text-[11px] text-left p-2.5 rounded border transition-all truncate font-sans font-medium ${
                    selectedEvidenceId === e.id
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100"
                  }`}
                >
                  {e.id === "ev1" ? "Microwave Impedance Matching" :
                   e.id === "ev2" ? "Yue Liu (August 14, 2025)" :
                   e.id === "ev3" ? "Eamonn Keogh (TSAD)" :
                   e.id === "ev4" ? "Simine Vazire (Nature)" :
                   e.id === "ev5" ? "Honjo Tasuku (90% CNS)" :
                   "Piero Anversa (Harvard Retractions)"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
