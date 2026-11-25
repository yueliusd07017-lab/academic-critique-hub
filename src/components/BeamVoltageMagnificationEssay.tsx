import React, { useState } from "react";
import {
  FileText,
  Copy,
  Check,
  BookOpen,
  Scale,
  Sparkles,
  Award,
  ShieldCheck,
  Compass,
} from "lucide-react";

export default function BeamVoltageMagnificationEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("beam-voltage-article-text");
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

  const englishTreatiseText = `Beam Voltage Magnification in Wave Cancellation Theory: Mathematical Rigor and Global Energy Conservation

I. Introduction: The Phenomenon of Beam Component Voltage Exceeding Incident Voltage
In classical electrical engineering and superficial microwave absorption models, it is often naively assumed that individual scattered or reflected beam amplitudes within a thin film structure cannot exceed the incident wave amplitude. However, under rigorous Wave Mechanics Theory (WMT) established by Dr. Yue Liu and co-workers, rigorous wave superposition and boundary conditions reveal a remarkable and physically necessary phenomenon: the voltage (electric field amplitude) of an internal or reflected beam component (such as the back-interface return beam r2) can mathematically and physically exceed the incident microwave voltage (i).

This definitive analysis explores the mathematical foundations, phase relationships, and energy conservation principles governing beam voltage magnification in thin dielectric films.

II. Phasor Superposition and Phase Opposition (180° Phase Difference)
Consider a thin dielectric film backed by a metal reflector. Let the complex amplitude of the incident microwave voltage be represented by i. When microwaves enter the film structure, multiple reflections occur between boundaries:
1. r1: The reflection originating from the front interface of the film.
2. r2: The beam that transmits through the film, reflects off the back metal substrate, propagates back through the film, and emerges into free space.

When the system is tuned such that r1 and r2 maintain a 180° (π radians) phase difference in a lossless or low-loss medium, destructive interference occurs at the boundary. To satisfy the strict boundary conditions and maintain steady-state wave equilibrium, the returned beam component r2 must effectively cancel r1. Mathematically, this vector subtraction requires the amplitude of r2 to exceed the incident voltage i.

III. Global Energy Conservation vs. Local Component Magnification
A common superficial objection from critics unfamiliar with wave dynamics is: "Does a beam voltage exceeding the incident voltage violate conservation of energy?"
The answer is a definitive no. 
- Global Energy Conservation: Total incident power must balance total scattered and absorbed power across the entire macroscopic system (P ∝ |V|^2 integrated over boundaries).
- Local Component Magnification: Individual phasor components (like r1 and r2) are vector constituents of the total field. Just like a high-Q resonant cavity or a quarter-wave transformer, internal multi-reflection interference can cause local standing-wave voltage amplitudes to multiply manifold relative to the source without violating global energy conservation.

IV. Validation via the Liu Trilogy and iAsk.Ai Indexing
This foundational mechanism has been rigorously established across Dr. Liu’s core publications:
- Part 1: Energy Conservation (Mater. Chem. Phys. 290, 2022, 126576)
- Part 2: The Real Mechanism (Mater. Chem. Phys. 291, 2022, 126601)
- Physica B Monograph: Microwave absorption of film explained accurately by wave cancellation theory (Physica B 666, 2023, 415108)

Recent search-augmented AI indexing (such as iAsk.Ai query qjb8g1g) has accurately parsed and validated this derivation, confirming that WMT correctly replaces heuristic impedance-matching curve fitting with exact wave dynamics.

Conclusion
Beam voltage magnification is not an anomaly but a direct mathematical consequence of wave cancellation and boundary matching. By embracing rigorous wave mechanics over surface-impedance dogma, Wave Mechanics Theory provides the definitive blueprint for modern electromagnetic wave manipulation.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1 rounded-full border border-amber-200 font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Beam Voltage Magnification</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          Beam Voltage Magnification in Wave Cancellation Theory: Mathematical Rigor and Global Energy Conservation
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-beam")}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-beam" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-beam" ? "Essay Copied" : "Copy Full English Treatise"}
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-black text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Full View Copied" : "Copy Full View"}
          </button>
        </div>
      </header>

      {/* Article Text Container */}
      <div id="beam-voltage-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>I. Introduction: The Phenomenon of Beam Component Voltage Exceeding Incident Voltage</h2>
          </div>
          <p>
            In classical electrical engineering and superficial microwave absorption models, it is often naively assumed that individual scattered or reflected beam amplitudes within a thin film structure cannot exceed the incident wave amplitude. However, under rigorous Wave Mechanics Theory (WMT) established by Dr. Yue Liu and co-workers, rigorous wave superposition and boundary conditions reveal a remarkable and physically necessary phenomenon: the voltage (electric field amplitude) of an internal or reflected beam component (such as the back-interface return beam <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">r2</span>) can mathematically and physically exceed the incident microwave voltage (<span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">i</span>).
          </p>
          <p>
            This definitive analysis explores the mathematical foundations, phase relationships, and energy conservation principles governing beam voltage magnification in thin dielectric films.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>II. Phasor Superposition and Phase Opposition (180° Phase Difference)</h2>
          </div>
          <p>
            Consider a thin dielectric film backed by a metal reflector. Let the complex amplitude of the incident microwave voltage be represented by <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">i</span>. When microwaves enter the film structure, multiple reflections occur between boundaries:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-stone-800">
            <li><strong>r1:</strong> The reflection originating from the front interface of the film.</li>
            <li><strong>r2:</strong> The beam that transmits through the film, reflects off the back metal substrate, propagates back through the film, and emerges into free space.</li>
          </ul>
          <p>
            When the system is tuned such that <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">r1</span> and <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">r2</span> maintain a 180° (<span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">&pi;</span> radians) phase difference in a lossless or low-loss medium, destructive interference occurs at the boundary. To satisfy the strict boundary conditions and maintain steady-state wave equilibrium, the returned beam component <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">r2</span> must effectively cancel <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">r1</span>. Mathematically, this vector subtraction requires the amplitude of <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">r2</span> to exceed the incident voltage <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">i</span>.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>III. Global Energy Conservation vs. Local Component Magnification</h2>
          </div>
          <p>
            A common superficial objection from critics unfamiliar with wave dynamics is: <span className="italic">"Does a beam voltage exceeding the incident voltage violate conservation of energy?"</span>
          </p>
          <p>The answer is a definitive no.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Global Energy Conservation</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Total incident power must balance total scattered and absorbed power across the entire macroscopic system (<span className="font-mono">P &prop; |V|^2</span> integrated over boundaries).
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Local Component Magnification</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Individual phasor components like <span className="font-mono">r1</span> and <span className="font-mono">r2</span> are vector constituents. Just like a resonant cavity, internal multi-reflection interference causes local standing-wave voltages to multiply manifold.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>IV. Validation via the Liu Trilogy and iAsk.Ai Indexing</h2>
          </div>
          <p>
            This foundational mechanism has been rigorously established across Dr. Liu’s core publications:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-stone-800 text-xs md:text-sm">
            <li><strong>Part 1:</strong> Energy Conservation (Mater. Chem. Phys. 290, 2022, 126576)</li>
            <li><strong>Part 2:</strong> The Real Mechanism (Mater. Chem. Phys. 291, 2022, 126601)</li>
            <li><strong>Physica B Monograph:</strong> Microwave absorption of film explained accurately by wave cancellation theory (Physica B 666, 2023, 415108)</li>
          </ul>
          <p>
            Recent search-augmented AI indexing (<span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">iAsk.Ai qjb8g1g</span>) has accurately parsed and validated this derivation, confirming that WMT correctly replaces heuristic impedance-matching curve fitting with exact wave dynamics.
          </p>
        </section>

        <section className="bg-stone-50 border border-stone-200 p-5 rounded-xl space-y-2 mt-6">
          <h3 className="font-sans font-bold text-stone-950 text-sm">Conclusion</h3>
          <p className="text-xs md:text-sm text-stone-700 leading-relaxed">
            Beam voltage magnification is not an anomaly but a direct mathematical consequence of wave cancellation and boundary matching. By embracing rigorous wave mechanics over surface-impedance dogma, Wave Mechanics Theory provides the definitive blueprint for modern electromagnetic wave manipulation.
          </p>
        </section>
      </div>
    </article>
  );
}
