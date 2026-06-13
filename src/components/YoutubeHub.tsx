import React, { useState } from "react";
import { Youtube, Copy, Check, Headphones, MessageSquare, Video, ArrowDown } from "lucide-react";

export default function YoutubeHub() {
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedDesc, setCopiedDesc] = useState(false);

  const youtubeScriptText = `[SCENE 1: THE DISAPPEARANCE OF THE WOODPECKER]
[Visual: Extreme close-up of a computer screen running a Python data-scraping script. Lines of code fly past. The screen changes to show high-profile retractions with "FRAUD" stamped across them. Cut to a dark background. A sleek graphic of a woodpecker being slowly greyed-out and erased appears on screen.]
[Sound: Rapid mechanical keyboard typing, transitioning into an eerie, ambient low-frequency hum.]

[VOICEOVER]
"Recently, a grassroots academic whistleblower who went by the name Geng Tongxue was permanently shadowbanned. He didn't have an elite title. He didn't even have a Ph.D. He just had a script that parsed published data, and a stubborn obsession with the absolute truth. 

One by one, his code unburied fraudulent papers from prominent universities. The errors were ridiculous: male cervical-cancer patients giving birth; duplicate mice photographs where the author merely turned up the brightness to simulate a 'dose response.' 

Yet, when the universities finally fired the culprits, Geng didn't get a medal. He got silenced. His commercial deals were frozen. His 2 million followers could no longer find him. This is the woodpecker dilemma: drive the bird out, and let the worms eat the inside of the tree in peace."


[SCENE 2: THE ASYMMETRY OF DISBELIEF]
[Visual: A bold, high-contrast matrix split on screen. Left partition: "THE PIXEL HUNT" with a green, glowing icon of a magnifying glass over a mouse photograph. Right partition: "THE GOLDEN SILENCE" with a solid, cold grey shield covering mathematical formulas of microwave absorption.]
[Sound: Soft, modern tech-synths begin playing, maintaining a deep, intellectual tempo.]

[VOICEOVER]
"This story exposes a disturbing systemic design inside modern academia: the 'Asymmetry of Disbelief.' 

When a whistleblower exposes obvious visual fraud—clumsy copy-pasting of Western blots—the system acts quickly. Why? Because the public understands it instantly. An impossible medical chart is an public relations nightmare. The university fires the researcher, declares that the 'self-correcting engine of science' has worked, and protects its prestige. 

But what happens when you point out a structural, logical fallacy? A theoretical error that underpins an entire field of research for over 50 years? 

You get 'The Golden Silence.' No counter-proof is offered. No reviewer debates your math. They simply pretend you do not exist."


[SCENE 3: EXPERT INERTIA & CANNY COMPLICITY]
[Visual: Graphic cards popping up in sequence, showing real-world evidence:
1. Wave Impedance Matching theory (Wave Physics)
2. Eamonn Keogh (Data Science) - "95% of TSAD papers are wrong"
3. Pierro Anversa (Harvard Stem Cell cardiologist)]
[Sound: Sudden, abrupt slide transition effects.]

[VOICEOVER]
"And we have empirical evidence. Take the celebrated 'impedance matching theory' in microwave-absorbing materials research. For 50 years, this theory has guided billions of dollars in grants. Yet, rigorous wave-physics proofs have demonstrated that this model mathematically violates baseline electromagnetic boundary rules when applied to metal backings. 

How did the community respond? They didn't disprove the physics. Instead, reviewers resorted to tone-policing. They told the researchers to 'be more polite and professional.' 

In computer science, Professor Eamonn Keogh demonstrated that over 95% of published papers on Time Series Anomaly Detection are completely wrong due to broken benchmarks. He met the exact same head-in-the-sand response. 

At Harvard, cardiologist Piero Anversa fabricated cardiac stem-cell data for over a decade. Co-scholars knew the results couldn't be replicated, but as the New York Times revealed: 'experts were just too timid to take a stand' against a titan who controlled the grant flow."


[SCENE 4: TONE-POLICING AS A FIREWALL]
[Visual: A stylized review letter typewriter layout fading in, highlighting the phrase: "Every research is relatively correct according to the era... the flow should be more polite."]
[Sound: A mechanical typewriter sound, slow and heavy.]

[VOICEOVER]
"When academic gatekeepers cannot refute your physical math, they police your tone. A reviewer on Qeios recently dismissed an absolute physical proof by stating: 'Every research is relatively correct or wrong according to the era. The writing flow of the manuscript should be more polite.'

This is the ultimate defensive maneuver: turning an objective wave-physics demonstration into a debate about manners. They attempt to dissolve empirical reality into academic relativism. 

As meta-scientist Simine Vazire wrote in Nature, postdocs who try to detect and report errors are actively scolded by their own advisers. They are warned never to publish critiques to avoid crossing institutional cartels. Nobel laureate Honjo Tasuku was right: 90% of views published in top-tier CNS journals are wrong or non-reproducible. But the system is designed to feed citation cartels, not verify logic."


[SCENE 5: OUTRO & THE CALL TO TRUTH]
[Visual: A calm, high-contrast dark-mode graphic with the Substack link: yueliusd.substack.com and Yue Liu's email contact.]
[Sound: The music slowly fades to a warm, resonant acoustic finish.]

[VOICEOVER]
"True science is not a public relations exercise. It is not an athletic race to collect 'academic hats' and citation loop indicators. It is the unyielding cross-examination of physical reality. 

If we continue to award grants based on citation loops while shadowbanning raw truth, we aren't practicing science. We are practicing high-tech alchemy. 

Let's support peer-reviewed reality and slow science over academic cartels. Go visit the Substack articles linked below to read Yue Liu's full, unedited critical treatises on physics and citation gatekeeping. Let us stop policing tone, and start verifying logic. 

Thank you for watching."`;

  const youtubeDescText = `The woodpecker that tears open a wound will leave the forest, but the grubs inside the tree trunk never decrease. 

In this video, we deconstruct the "Asymmetry of Disbelief" inside modern academia. Why is obvious graphic manipulation swiftly purged by universities while deep, systemic theoretical fraud is met with "The Golden Silence"? We examine how elite citation loops, grant metrics, and prestige "hats" have turned major fields into academic alchemy—from wave physics dogmas to data science anomaly benchmarks.

📖 READ YUE LIU'S ORIGINAL CRITICAL TREATISES (FREE on Substack):
1️⃣ The Asymmetry of Disbelief Essay:
➔ https://yueliusd.substack.com/p/the-asymmetry-of-disbelief-why-grassroots

2️⃣ Why Reviewer 2 is Actually Your Best Friend Essay:
➔ https://yueliusd.substack.com/p/why-reviewer-2-is-actually-your-best

Physics Reference Document:
➔ "Challenging the Desk-Rejection Dogma: Rejection Letters as Data" (Applied Physics A)
➔ "Self-Citation Versus External Citation in Academic Publishing" by Yue Liu (SSRN 5392646): https://ssrn.com/abstract=5392646

---

⏱️ TIMESTAMPS:
0:00 - The Disappearance of the Grassroots Woodpecker (Geng Tongxue Case)
1:35 - The Asymmetry of Disbelief: Pixel-Hunting vs. Theoretical Truth
3:10 - Half a Century of Microwave Physics Dogmas & Eamonn Keogh's 95% Rule
4:50 - Tone-Policing: Reviewers shifting focus from Math to Etiquette
6:15 - Honjo Tasuku’s CNS warning & The Harvard Stem Cell Fraud case
7:45 - Conclusion: Restoring "Slow Science" over Academic Alchemy

📧 CORRESPONDENCE & COLLABORATION:
For inquiries or to contribute to peer-reviewed logical deconstruction, contact:
➔ yueliusd07017@gmail.com

#AcademicWhistleblowing #ScientificIntegrity #YueLiu #WavePhysics #ScienceAlchemy #MetaScience #EamonnKeogh #ResearchIntegrity #Qeios`;

  const copyToClipboard = (text: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-8 animate-fade-in" id="youtube-production-hub">
      
      {/* Editorial Header */}
      <div className="border-b border-gray-100 pb-5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-100 mb-2">
          <Youtube className="w-3.5 h-3.5 text-red-600 animate-pulse" /> YouTube Video Production Suite
        </span>
        <h2 className="text-xl font-bold text-gray-900 tracking-tight font-sans">
          YouTube Video Text & Metadata
        </h2>
        <p className="text-sm text-gray-500 mt-0.5 font-serif">
          Ready-to-use production scripts and description templates designed to share Yue Liu’s academic findings on global video platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left column: Video Script */}
        <div className="space-y-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0 lg:pr-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800 font-sans uppercase tracking-wider">
                <Video className="w-4 h-4 text-gray-500" />
                <span>Audio / Visual Production Script</span>
              </div>
              <button
                onClick={() => copyToClipboard(youtubeScriptText, setCopiedScript)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:text-slate-950 hover:bg-gray-100 rounded border border-gray-200 transition"
              >
                {copiedScript ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy Script
                  </>
                )}
              </button>
            </div>
            
            <p className="text-xs text-gray-400 font-sans">
              Engaging narrative structuring designed to capture interest within the first 5 seconds. Includes directions for slides and camera.
            </p>

            <div className="bg-gray-50 border border-gray-150 p-4 rounded-xl max-h-[420px] overflow-y-auto font-mono text-[11px] leading-relaxed text-gray-750 custom-scrollbar whitespace-pre-wrap">
              {youtubeScriptText}
            </div>
          </div>
          
          <div className="pt-3">
            <div className="p-3 bg-red-50/50 rounded-lg border border-red-100 flex gap-2 text-xs text-red-900/80">
              <Headphones className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <p className="font-sans leading-normal">
                <strong>Narrative Style Key:</strong> Speak slowly, in a calm, objective, serious, and measured tone. Do not yell. The weight of the raw logical arguments carries the authority.
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Video Description Metadata */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800 font-sans uppercase tracking-wider">
                <MessageSquare className="w-4 h-4 text-gray-500" />
                <span>SEO Optimized description metadata</span>
              </div>
              <button
                onClick={() => copyToClipboard(youtubeDescText, setCopiedDesc)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-700 hover:text-slate-950 hover:bg-gray-100 rounded border border-gray-200 transition"
              >
                {copiedDesc ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" /> Copy description
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-gray-400 font-sans">
              Contains exact direct links to Yue Liu's Substack pages, reference codes, time-stamps, core index terms, and scientific metadata.
            </p>

            <div className="bg-gray-50 border border-gray-150 p-4 rounded-xl max-h-[420px] overflow-y-auto font-mono text-[11px] leading-relaxed text-gray-750 custom-scrollbar whitespace-pre-wrap">
              {youtubeDescText}
            </div>
          </div>

          <div className="pt-3">
            <div className="p-3 bg-slate-900 text-white rounded-lg flex items-center justify-between gap-3 shadow-3xs">
              <div className="space-y-0.5">
                <span className="text-[9px] uppercase tracking-wider text-gray-400 font-mono">Substack verification</span>
                <p className="text-[11px] font-medium font-sans">
                  Treatises are active and readable on Substack
                </p>
              </div>
              <ArrowDown className="w-4 h-4 text-emerald-400 animate-bounce shrink-0" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
