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

export default function ConstantPermittivityWaveCancellationEssay() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("constant-permittivity-article-text");
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

  const englishTreatiseText = `Why Material Permittivity and Permeability Remain Constant Regardless of Microwave Absorption Peaks: A Wave Cancellation Perspective

I. Introduction: The Invariance of Constitutive Parameters
Within the framework of classical electrodynamics and transmission line theory, a fundamental and robust assumption is maintained: whether a thin film exhibits pronounced microwave reflection loss peaks (absorption peaks) or not, the complex permittivity ($\epsilon_r = \epsilon' - j\epsilon''$) and complex permeability ($\mu_r = \mu' - j\mu''$) of the absorbing material remain constant as intrinsic linear properties. 

This treatise examines the quantum mechanical, statistical, and electrodynamic reasons why macroscopic material constants do not fluctuate with macroscopic interference peaks, and clarifies the distinction between wave-cancellation resonance and material composition.

II. Quantum Statistical Ground State Dominance and Relaxation Dynamics
On a microscopic level, solid and composite materials consist of vast ensembles of atoms, molecules, and crystal lattices. Under standard experimental microwave irradiation intensities and ambient temperatures:
1. Thermal Equilibrium and Population Ratio: According to Boltzmann statistics, the thermal energy ($k_B T$) vastly exceeds the quantum energy of microwave photons ($h\nu$). Consequently, the vast majority of molecules and dipoles reside strictly in the electronic and vibrational ground state.
2. Ultra-Fast Relaxation Rates: When a microwave photon is absorbed, a molecule transitions momentarily to an excited state or dipolar orientation, but it almost instantaneously dissipates that energy via thermal relaxation (on the picosecond to nanosecond timescale) and returns to the ground state.
3. Ensemble Averaging: Because relaxation rates are vastly faster than continuous photon influx, the fraction of excited-state molecules at any given moment is negligible. Thus, macroscopic polarizability and magnetization—which represent ensemble averages over quantum states—are overwhelmingly dominated by ground-state properties, ensuring that constitutive parameters remain invariant.

III. Linear Response Theory and Constitutive Invariance
In macroscopic electrodynamics, complex permittivity and permeability are linear response coefficients connecting internal electric and magnetic fields ($\mathbf{D} = \epsilon_0 \epsilon_r \mathbf{E}$ and $\mathbf{B} = \mu_0 \mu_r \mathbf{H}$). 
- These parameters reflect the electronic band structure, chemical bonding, and atomic density of the medium.
- In standard transmission line models, the material is treated as a linear and time-invariant (LIT) medium. While wave interference creates spatial nodes and anti-nodes of electric field intensity ($\mathbf{|E|}$), altering the local work done (Joule heating and dielectric dissipation), it does not alter the fundamental quantum energy levels, electronic polarizability, or magnetic susceptibility of the constituent atoms.

IV. Wave Interference vs. Impedance Matching Misconceptions
A common misconception in superficial literature is that microwave absorption peaks are guaranteed by input impedance matching ($Z_{in} \approx Z_0$). However, as rigorously established by wave cancellation theory (Liu et al., Physica Scripta 2022; Physica B 2023):
- $Z_{in} = Z_0$ is merely a mathematical boundary condition for zero front-surface reflection; it does not guarantee absorption (if $\epsilon'' = 0$ and $\mu'' = 0$, energy enters and reflects out with zero dissipation).
- Furthermore, many efficient absorption peaks occur precisely where $Z_{in}$ deviates significantly from $Z_0$, driven entirely by multi-reflection phase cancellation and effective optical path length tuning.
- Because absorption peaks are system-level electrodynamic resonances arising from boundary interference rather than sudden microscopic state transitions, the material's intrinsic constitutive parameters ($\epsilon_r$ and $\mu_r$) remain completely constant across frequencies and absorption states.

Conclusion
In transmission line theory and wave cancellation mechanics, material permittivity and permeability remain constant because they are invariant quantum-mechanical linear response properties governed by ground-state statistical dominance. Microwave absorption peaks are emergent macroscopic phenomena of wave interference and multi-reflection trapping, not spectroscopic alterations of the material's intrinsic electromagnetic constants.`;

  return (
    <article className="bg-white border border-stone-200 rounded-2xl p-6 md:p-10 shadow-sm max-w-4xl mx-auto space-y-8 font-serif text-stone-900 leading-relaxed">
      {/* Header */}
      <header className="border-b border-stone-200 pb-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-stone-500 uppercase tracking-widest">
          <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1 rounded-full border border-amber-200 font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Constant Permittivity & Wave Cancellation</span>
          </span>
          <span>Author: Dr. Yue Liu</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold font-sans text-stone-950 tracking-tight leading-snug">
          Why Material Permittivity and Permeability Remain Constant Regardless of Microwave Absorption Peaks: A Wave Cancellation Perspective
        </h1>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => handleCopyText(englishTreatiseText, "eng-constant-perm")}
            className="flex items-center gap-1.5 px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-lg text-xs font-semibold transition cursor-pointer whitespace-nowrap shrink-0"
          >
            {copiedId === "eng-constant-perm" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "eng-constant-perm" ? "Essay Copied" : "Copy Full English Treatise"}
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
      <div id="constant-permittivity-article-text" className="space-y-6 text-stone-800 text-sm md:text-base leading-relaxed">
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Compass className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>I. Introduction: The Invariance of Constitutive Parameters</h2>
          </div>
          <p>
            Within the framework of classical electrodynamics and transmission line theory, a fundamental and robust assumption is maintained: whether a thin film exhibits pronounced microwave reflection loss peaks (absorption peaks) or not, the complex permittivity (<span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">&epsilon;_r = &epsilon;' - j&epsilon;''</span>) and complex permeability (<span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">&mu;_r = &mu;' - j&mu;''</span>) of the absorbing material remain constant as intrinsic linear properties.
          </p>
          <p>
            This treatise examines the quantum mechanical, statistical, and electrodynamic reasons why macroscopic material constants do not fluctuate with macroscopic interference peaks, and clarifies the distinction between wave-cancellation resonance and material composition.
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Scale className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>II. Quantum Statistical Ground State Dominance and Relaxation Dynamics</h2>
          </div>
          <p>
            On a microscopic level, solid and composite materials consist of vast ensembles of atoms, molecules, and crystal lattices. Under standard experimental microwave irradiation intensities and ambient temperatures:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-800 text-xs md:text-sm">
            <li>
              <strong>Thermal Equilibrium & Population Ratio:</strong> According to Boltzmann statistics, thermal energy (<span className="font-mono">k_B T</span>) vastly exceeds the quantum energy of microwave photons (<span className="font-mono">h&nu;</span>). Consequently, the vast majority of molecules and dipoles reside strictly in the ground state.
            </li>
            <li>
              <strong>Ultra-Fast Relaxation Rates:</strong> When a microwave photon is absorbed, a molecule transitions momentarily to an excited state or dipolar orientation, but it almost instantaneously dissipates that energy via thermal relaxation (picosecond to nanosecond timescale) and returns to the ground state.
            </li>
            <li>
              <strong>Ensemble Averaging:</strong> Because relaxation rates are vastly faster than continuous photon influx, excited-state populations remain negligible. Macroscopic polarizability and magnetization thus remain overwhelmingly dominated by ground-state properties.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <Award className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>III. Linear Response Theory and Constitutive Invariance</h2>
          </div>
          <p>
            In macroscopic electrodynamics, complex permittivity and permeability are linear response coefficients connecting internal electric and magnetic fields (<span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">D = &epsilon;_0 &epsilon;_r E</span> and <span className="font-mono bg-stone-100 px-1 py-0.5 rounded text-stone-900">B = &mu;_0 &mu;_r H</span>).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-sans">
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Constitutive Invariance</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                These parameters reflect electronic band structure, chemical bonding, and atomic density. Wave interference alters local field work (Joule heating), but does not alter intrinsic quantum energy levels.
              </p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-1.5">
              <h4 className="font-bold text-stone-950 text-xs md:text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Linear Time-Invariant Media</span>
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Standard transmission line models treat media as LIT. Constitutive parameters describe how media respond to fields, but absorbed energy magnitude depends on boundary interference, not parameter shifts.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-2 font-sans font-bold text-lg text-stone-950 border-b border-stone-200 pb-2">
            <BookOpen className="w-5 h-5 text-amber-800 shrink-0" />
            <h2>IV. Wave Interference vs. Impedance Matching Misconceptions</h2>
          </div>
          <p>
            As rigorously established by wave cancellation theory (Liu et al., Physica Scripta 2022; Physica B 2023):
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-800 text-xs md:text-sm">
            <li>
              <strong>Z_in = Z_0 Misconception:</strong> <span className="font-mono">Z_in = Z_0</span> is merely a mathematical condition for zero front reflection; it does not guarantee absorption (if <span className="font-mono">&epsilon;'' = 0</span>, energy enters and reflects out with zero dissipation).
            </li>
            <li>
              <strong>Interference-Driven Peaks:</strong> Many efficient absorption peaks occur where <span className="font-mono">Z_in</span> deviates significantly from <span className="font-mono">Z_0</span>, driven entirely by multi-reflection phase cancellation and path length tuning.
            </li>
          </ul>
        </section>

        <section className="bg-stone-50 border border-stone-200 p-5 rounded-xl space-y-2 mt-6">
          <h3 className="font-sans font-bold text-stone-950 text-sm">Conclusion</h3>
          <p className="text-xs md:text-sm text-stone-700 leading-relaxed">
            In transmission line theory and wave cancellation mechanics, material permittivity and permeability remain constant because they are invariant quantum-mechanical linear response properties governed by ground-state statistical dominance. Microwave absorption peaks are emergent macroscopic phenomena of wave interference and multi-reflection trapping, not spectroscopic alterations of material constants.
          </p>
        </section>
      </div>
    </article>
  );
}
