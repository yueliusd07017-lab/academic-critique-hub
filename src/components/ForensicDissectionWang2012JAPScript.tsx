import React, { useState } from "react";
import { Video, ShieldAlert, Sparkles, Copy, Check, BookOpen, Layers, Zap, Scale, FileText, ExternalLink, ArrowRight, Skull, AlertTriangle, Compass, Clock, GraduationCap } from "lucide-react";

export default function ForensicDissectionWang2012JAPScript() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const youtubeSafeDescription = `Title: Deconstructing Wang et al. (JAP 2012 & IEEE 2015): The "Energy Difference" Delusion, Scalar Subtraction vs. Wave Mechanics | Forensic Dissection Series Case 4

Welcome to Episode 4 of our Forensic Dissection Series: "Why Modern Science Is in a Dark Age."

Can you imagine a paper published in the flagship Journal of Applied Physics (AIP) and IEEE Transactions on Magnetics that literally subtracts scalar energies like grade-school arithmetic to calculate wave interference?

In this fourth forensic autopsy, Dr. Yue Liu examines:
- T. Wang, R. Han, G. Tan, J. Wei, L. Qiao, and F. Li, "Reflection loss mechanism of single layer absorber for flake-shaped carbonyl-iron particle composite", Journal of Applied Physics 2012, 112, 104903 (DOI: 10.1063/1.4767365).
- T. Wang, H. Wang, G. Tan, L. Wang, and L. Qiao, IEEE Transactions on Magnetics 2015, 51, 2800405.

In these flagship papers, the authors explicitly conclude:
"Through analyzing and calculating the energy of the electromagnetic waves reflected from the air-absorber and absorber-metal plate interfaces, it was concluded that the intensity of the reflection loss peak is determined by the energy difference of the two waves."

This represents one of the most astonishing physics blunders ever canonized in top-tier literature.

In this episode, Dr. Yue Liu exposes:

1. THE "ENERGY DIFFERENCE" DELUSION (Table I Autopsy):
Waves superimpose their vector electric field amplitudes and phases: E_total = E1 + E2.
Energy is proportional to the square of the complex field amplitude: I = |E1 + E2|^2 = I1 + I2 + 2*sqrt(I1*I2)*cos(delta_theta).
Yet Wang et al. literally subtracted scalar energies: E11-short = |EAA - EAM|! Subtracting scalar energies directly violates the wave superposition principle taught in high school physics!

2. THE STANDING WAVE VS. CANCELLATION CATEGORY ERROR:
Over a dozen high-impact SCI papers (in Carbon, ACS AMI, CEJ, JMCC, Phys. Status Solidi) claim that "the incident wave and the reflected wave are 180 degrees out of phase, canceling each other out at the interface."
The Forensic Truth: Two waves traveling in OPPOSITE directions do NOT cancel out; they form a STANDING WAVE! Destructive cancellation occurs ONLY between the two waves traveling in the SAME direction (back into air) from the front and back interfaces. Conflating standing waves with reflection cancellation reveals that mainstream authorities never understood wave optics!

3. THE ALCHEMY OF "THICKNESS-DEPENDENT" PERMITTIVITY:
Permittivity is an intensive bulk material property. Yet mainstream literature repeatedly claims that permittivity is a function of film thickness, confusing sample holder boundary artifacts with intrinsic material properties.

4. "UNEDUCATED IN FUNDAMENTALS, BUT GIFTED AT WILD ANALOGIES":
Why do modern SCI journals reject foundational mathematical proofs while accepting papers with cartoon analogies (Chang'e flying to the moon, Calabash Brothers on journal covers)?
Because modern academia rewards superficial curve-fitting and commercial game-playing over rigorous first-principles physics.

5. WHY PLANCK'S PRINCIPLE FAILED IN MODERN SCI PUBLISHING:
Max Planck observed that science advances funeral by funeral as old authorities pass away. But commercial SCI publishing invented the Impact Factor cartel! When academic "sect leaders" pass away, their disciples inherit grants and perpetuate the same flawed cargo cult to protect their vested interests.

TIMESTAMPS:
00:00 - Scene 1: Prologue & The Flagship AIP/IEEE Scandal
02:15 - Scene 2: The "Energy Difference" Delusion & Table I Autopsy
04:40 - Scene 3: Standing Waves vs. Cancellation: Elementary Optics Blunder
07:15 - Scene 4: The Alchemy of "Thickness-Dependent" Permittivity
09:35 - Scene 5: "Uneducated in Fundamentals, Skilled at Wild Analogies"
11:55 - Scene 6: Why Planck's Principle Failed in SCI Academia
14:10 - Scene 7: Epilogue: The Inevitable Verdict of History

Primary Theoretical References:
- Wang et al., J. Appl. Phys. 2012, 112, 104903 (DOI: 10.1063/1.4767365)
- Wang et al., IEEE Trans. Magn. 2015, 51, 2800405 (DOI: 10.1109/TMAG.2015.2443793)
- Liu, Drew, Liu, J. Appl. Phys. 2023, 134, 045304 (DOI: 10.1063/5.0153612)
- Liu, Liu, Drew, Physica Scripta 2021, 96, 125003 (DOI: 10.1088/1402-4896/ac1398)
- Liu, Drew, Li, Liu, Mater. Chem. Phys. 2020, 243, 122624 (DOI: 10.1016/j.matchemphys.2019.122624)
- Academic Critique Hub: https://github.com/academic-critique/hub

#AcademicIntegrity #WaveMechanics #PeerReviewCrisis #ScientificMethod #CargoCultScience #FirstPrinciples #PhysicsScandal`;

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="forensic-dissection-wang2012-jap-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-rose-100 text-rose-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-rose-300 flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-rose-700" />
            Essay GP &bull; Forensic Dissection Case 4
          </span>
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
            J. Appl. Phys. 2012 &bull; IEEE Trans. Magn. 2015 &bull; The &ldquo;Energy Difference&rdquo; Fallacy
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Forensic Dissection Case 4: Deconstructing Wang et al. (JAP 2012 &amp; IEEE 2015) — The &ldquo;Energy Difference&rdquo; Delusion, Scalar Subtraction vs. Wave Mechanics, and the Epistemological Collapse of Flagship SCI Journals
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Autopsy of T. Wang et al., <em>J. Appl. Phys.</em> 112, 104903 (2012) and <em>IEEE Trans. Magn.</em> 51, 2800405 (2015): Exposing scalar energy subtraction in wave interference, confusing standing waves with absorption cancellation, and why commercial SCI publishing enables cargo-cult physics to survive Planck&apos;s funeral principle.
        </p>
        <div className="text-xs text-slate-400 mt-2 font-mono">
          Author: Dr. Yue Liu (刘跃) &bull; Academic Critique Series &bull; Forensic Case 4
        </div>
      </div>

      {/* Abstract Callout */}
      <div className="bg-rose-50/70 border-l-4 border-rose-600 p-5 rounded-r-xl mb-8 font-sans text-sm text-slate-800 space-y-2">
        <div className="font-bold text-rose-950 flex items-center gap-2">
          <Skull className="w-5 h-5 text-rose-700 shrink-0" />
          The Ultimate Physics Scandal: Subtracting Scalar Energies to Model Wave Interference!
        </div>
        <p>
          Can you imagine a paper published in the <em>Journal of Applied Physics</em> (American Institute of Physics) and <em>IEEE Transactions on Magnetics</em> that calculates wave interference by literally subtracting scalar energies (|<em>E</em><sub>AA</sub> &minus; <em>E</em><sub>AM</sub>|) like grade-school arithmetic? In these flagship publications, the authors assert that <em>&ldquo;the intensity of the reflection loss peak is determined by the energy difference of the two waves.&rdquo;</em> This is an error that should disqualify a high school physics student. Yet it was written by established professors, endorsed by anonymous peer reviewers, approved by editors, cited for over a decade, and emulated across dozens of subsequent papers in <em>Carbon</em>, <em>ACS AMI</em>, and <em>CEJ</em>. This forensic autopsy demonstrates that modern science is trapped in a dark age of cargo-cult publishing where fundamental wave mechanics has been replaced by ritual alchemy.
        </p>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl mb-8 font-sans">
        <div className="text-xs text-slate-600">
          <strong>Production Toolkit:</strong> Full 7-Scene Broadcast Script &bull; Spoken Narration &bull; On-Screen Captions &bull; YouTube Metadata
        </div>
        <button
          onClick={() => handleCopyText(youtubeSafeDescription, "desc-wang2012")}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition shadow-xs cursor-pointer"
        >
          {copiedSection === "desc-wang2012" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copiedSection === "desc-wang2012" ? "Description Copied!" : "Copy Safe YouTube Description"}
        </button>
      </div>

      {/* SCRIPT SECTION */}
      <div className="space-y-8">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 font-sans font-bold text-xl text-slate-950">
          <Video className="w-6 h-6 text-rose-600" />
          <h2>Part I: The Complete Digital Avatar Broadcast Script (7 Scenes)</h2>
        </div>

        {/* Scene 1 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">1</span>
              Scene 1: Prologue — The Flagship AIP &amp; IEEE Scandal
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~135 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Senior forensic scientist / investigative scholar in dark formal suit, holding printouts of flagship physics journals.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Covers of <em>Journal of Applied Physics</em> (AIP) and <em>IEEE Transactions on Magnetics</em>; zoom in on author affiliations and paper titles.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Subtracting Scalar Energies in a Physics Flagship? The Scandal of JAP 2012!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-rose-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-rose-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Welcome back to Episode Four of our Forensic Dissection Series: <em>Why Modern Science Is in a Dark Age</em>.
            </p>
            <p className="leading-relaxed">
              If an undergraduate physics student took an exam on wave optics and calculated the interference of two waves by literally subtracting their scalar energies—writing that the intensity equals Energy One minus Energy Two—what grade would they receive?
            </p>
            <p className="leading-relaxed">
              They would receive an immediate, unequivocal zero.
            </p>
            <p className="leading-relaxed">
              Yet today, we are going to expose a scandal that should shake your faith in the entire academic peer-review system: In 2012, the American Institute of Physics published a paper in its flagship <em>Journal of Applied Physics</em> (Vol. 112, 104903), authored by Tao Wang, Fashen Li, and their group. In 2015, they repeated the exact same claim in <em>IEEE Transactions on Magnetics</em>.
            </p>
            <p className="leading-relaxed">
              In these prestigious flagship journals, the authors explicitly conclude: <em>&lsquo;Through analyzing and calculating the energy of the electromagnetic waves reflected from the air-absorber and absorber-metal plate interfaces, it was concluded that the intensity of the reflection loss peak is determined by the energy difference of the two waves.&rsquo;</em>
            </p>
            <p className="leading-relaxed">
              Think about that! Subtracting scalar energies in a physics flagship journal!
            </p>
            <p className="leading-relaxed">
              How could professors write this? How could peer reviewers approve it? How could editors publish it? And how could hundreds of subsequent papers cite it without a single person pointing out that wave interference does not work by scalar subtraction?&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 2 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">2</span>
              Scene 2: The &ldquo;Energy Difference&rdquo; Delusion — Table I Autopsy
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~145 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Analytical, pointing at equations and highlighting mathematical blunders with a red laser pointer.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Table I from Wang et al. (2012) on screen. Circle the column: E11-short = |EAA - EAM|; show wave formula: I = |E1 + E2|&sup2; = I1 + I2 + 2&radic;(I1 I2)cos(&Delta;&theta;).
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Wave Interference Adds Field Vectors, NOT Scalar Energies!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-indigo-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-indigo-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Let us perform a forensic autopsy on Table I of Wang et al. (2012).
            </p>
            <p className="leading-relaxed">
              In this table, the authors define the incident beam energy as one. They denote the energy reflected from the front air-absorber interface as <em>E</em><sub>AA</sub>, and the energy reflected from the back metal plate as <em>E</em><sub>AM</sub>.
            </p>
            <p className="leading-relaxed">
              Then, look at how they calculate the total reflected energy <em>E</em><sub>11-short</sub>! They literally write:
              <em>E</em><sub>11-short</sub> equals the absolute value of <em>E</em><sub>AA</sub> minus <em>E</em><sub>AM</sub>!
            </p>
            <p className="leading-relaxed">
              And they write: the absorbed energy <em>E</em><sub>loss</sub> equals one minus the sum of <em>E</em><sub>AA</sub> plus <em>E</em><sub>AM</sub>!
            </p>
            <p className="leading-relaxed">
              This is pure physics hallucination!
            </p>
            <p className="leading-relaxed">
              As Dr. Yue Liu and Michael Drew demonstrated in their 2023 <em>Journal of Applied Physics</em> corrective paper (Vol. 134, 045304):
              Waves do NOT superimpose their scalar energies! Waves superimpose their <strong>complex electric and magnetic field vectors</strong>: <strong>E</strong><sub>total</sub> = <strong>E</strong><sub>1</sub> + <strong>E</strong><sub>2</sub>.
            </p>
            <p className="leading-relaxed">
              The resulting energy intensity is proportional to the square of the vector sum, which includes the cross-interference term: <em>I</em> = <em>I</em><sub>1</sub> + <em>I</em><sub>2</sub> + 2&radic;(<em>I</em><sub>1</sub><em>I</em><sub>2</sub>) cos(&Delta;&theta;).
            </p>
            <p className="leading-relaxed">
              Depending on the phase difference &Delta;&theta;, the resulting energy can be zero, or it can be four times the energy of a single beam! Subtracting scalar energies directly ignores the phase of the electromagnetic field. It is a blunder that violates Young&apos;s double-slit experiment from 1801!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 3 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">3</span>
              Scene 3: The Standing Wave Fallacy — Elementary Optics Confusion
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~150 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Demonstrating wave vectors with 3D ray-tracing animations.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Ray-tracing animation: Incident wave (+z) vs. total reflected wave (-z) forming a standing wave. Contrast with front reflected ray (-z) and back metal-reflected ray (-z) canceling in phase.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Opposite Waves Create Standing Waves! Same-Direction Waves Interfere!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-amber-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-amber-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;This brings us to a pervasive category error that has poisoned over a dozen high-impact SCI papers across <em>Carbon</em>, <em>ACS Applied Materials &amp; Interfaces</em>, <em>Chemical Engineering Journal</em>, and <em>Physica B</em>.
            </p>
            <p className="leading-relaxed">
              Look at what authors routinely write in these prestigious journals:
              <em>&lsquo;When an electromagnetic wave is incident on an absorber backed by a metal plate, the incident and reflected waves are 180 degrees out of phase, resulting in total cancellation of the waves at the interface.&rsquo;</em>
            </p>
            <p className="leading-relaxed">
              How can professors writing about microwaves not understand basic optics?
            </p>
            <p className="leading-relaxed">
              The incident wave travels forward in the plus-z direction. The total reflected wave travels backward in the minus-z direction. Two waves traveling in **opposite directions** do NOT destructively cancel! When two counter-propagating waves meet, they form a **standing wave**!
            </p>
            <p className="leading-relaxed">
              What actually cancels in an absorbing film?
            </p>
            <p className="leading-relaxed">
              The wave reflected from the front air-absorber interface travels in the minus-z direction. The wave reflected from the back metal plate ALSO travels in the minus-z direction! It is these **two waves traveling in the EXACT SAME DIRECTION** that interfere destructively when their phase difference is 180 degrees!
            </p>
            <p className="leading-relaxed">
              Reflection Loss measures the ratio of total energy escaping backward into space relative to the incident energy. Strong absorption means the total backward-escaping wave amplitude is zero. It does NOT mean the incident wave and reflected wave cancelled each other! Conflating standing waves with destructive reflection cancellation is a blunder that would fail a high school student.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 4 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">4</span>
              Scene 4: The Alchemy of &ldquo;Thickness-Dependent&rdquo; Permittivity
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~135 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Shocked, incredulous, holding up a rejection letter from a modern journal editor.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Excerpts from Hou et al. (Carbon 2024, Fig. 4); Wang et al. (EPJ 2022); Bao et al. (Nano Research 2023); JEMS rejection letter: &ldquo;permittivity is independent of thickness... this is not true from our experience...&rdquo;
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Permittivity Is an Intensive Property! It Does NOT Change with Thickness!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;The intellectual breakdown does not stop at wave superposition. It extends into the most basic definitions of material properties.
            </p>
            <p className="leading-relaxed">
              In thermodynamic physics, dielectric permittivity &epsilon; and magnetic permeability &mu; are **intensive physical properties**. Just like density, melting point, or electrical conductivity, an intrinsic material parameter does not depend on the geometric thickness or shape of the sample!
            </p>
            <p className="leading-relaxed">
              Yet in today&apos;s SCI literature—including Hou et al. in <em>Carbon</em> (2024, Impact Factor over 10), Wang et al. in <em>EPJ</em> (2022), and Bao et al. in <em>Nano Research</em> (2023)—authors routinely claim that measured permittivity is a function of film thickness!
            </p>
            <p className="leading-relaxed">
              Even worse, when Dr. Yue Liu submitted a corrective manuscript pointing out that permittivity is independent of thickness, the reviewer for the <em>Journal of Electronic Materials</em> wrote in their rejection letter:
              <em>&lsquo;The first point cited is that permittivity is independent of thickness. However, this is not true from our experience on thin samples.&rsquo;</em>
            </p>
            <p className="leading-relaxed">
              Think about the level of theoretical degradation! A peer reviewer rejects a corrective paper because they cannot distinguish between intrinsic material parameters and measurement fixture boundary resonance artifacts! When experimenters treat transmission line waveguide errors as new material physics, science has formally regressed to medieval alchemy.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 5 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">5</span>
              Scene 5: &ldquo;Uneducated in Fundamentals, Skilled at Wild Analogies&rdquo;
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~140 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Incisive, exposing the psychological pathology of modern research paper factories.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Collage of top journal covers featuring Chinese cartoon characters (Calabash Brothers 葫芦娃, Chang&apos;e 嫦娥奔月); quote from Dr. Yue Liu: &ldquo;Uneducated in fundamentals, but gifted at wild innovation.&rdquo;
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Cartoons on Journal Covers vs. Zero Mastery of Undergraduate Physics!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-rose-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-rose-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Why do these errors occur with such staggering frequency?
            </p>
            <p className="leading-relaxed">
              Dr. Yue Liu diagnosed this syndrome with devastating accuracy in his monograph, <em>The Primacy of Theoretical Foundations</em>:
              Modern SCI scientists represent a distinct academic pathology: **They never learned the fundamental concepts taught in undergraduate physics, but they are exceptionally gifted at drawing wild, superficial analogies!**
            </p>
            <p className="leading-relaxed">
              Because they never mastered the rigorous mathematical foundations of wave mechanics, they rely on metaphorical storytelling.
            </p>
            <p className="leading-relaxed">
              They confuse input impedance with characteristic impedance, and call it an innovation. They treat wave superposition as scalar energy subtraction, and call it an insight. They treat measurement resonance artifacts as thickness-dependent permittivity, and call it a discovery.
            </p>
            <p className="leading-relaxed">
              Today, top international journals feature cartoon folklore like Chang&apos;e flying to the moon and the Calabash Brothers on their covers, celebrating fanciful artistic metaphors while systematically desk-rejecting papers that perform rigorous mathematical derivations.
            </p>
            <p className="leading-relaxed">
              When an academic community prioritizes visual storytelling over deductive mathematical logic, it ceases to be a scientific discipline. It becomes an entertainment industry for grant recipients.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 6 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">6</span>
              Scene 6: Why Planck&apos;s Funeral Principle Failed in Modern Academia
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~135 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Deep sociological reflection on the institutional mechanisms of academic corruption.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Portrait of Max Planck; quote from <em>Science and Technology Daily</em> (2018): &ldquo;Academia resembles a martial arts sect where authorities act as sect leaders...&rdquo;; network graph of citation cartels.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Impact Factors Replaced Funerals: How Error Became Immortal!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-emerald-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-emerald-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Max Planck famously observed in his scientific autobiography:
              <em>&lsquo;A new scientific truth does not triumph by convincing its opponents, but rather because its opponents eventually die, and a new generation grows up that is familiar with it.&rsquo;</em>
            </p>
            <p className="leading-relaxed">
              In Newton&apos;s or Planck&apos;s era, when an academic authority defending a flawed theory died, the error died with them because no one had a financial incentive to defend it.
            </p>
            <p className="leading-relaxed">
              But modern commercial SCI academia solved that problem!
            </p>
            <p className="leading-relaxed">
              Modern academia invented the **SCI Impact Factor and Grant Feudalism Game**. As China&apos;s official <em>Science and Technology Daily</em> exposed on its front page in 2018: Academia has become a faction-ridden martial arts world where academic authorities act like &lsquo;sect leaders.&rsquo; As more flawed papers are published, thousands of researchers jump on the bandwagon. Everyone becomes a stakeholder.
            </p>
            <p className="leading-relaxed">
              When an old authority retires, their hand-picked students inherit the editorial boards, the national grant committees, and the citation cartels. The error no longer dies with the authority—it becomes immortalized through commercial journal metrics!
            </p>
            <p className="leading-relaxed">
              This is why 95% of SCI papers in fields like microwave absorption are demonstrably flawed, yet continue to be cited hundreds of times. The system is designed to protect the sect, not to discover the truth.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 7 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">7</span>
              Scene 7: Epilogue — The Inevitable Verdict of History
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~125 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Dignified, steadfast, holding a copy of Morris Kline&apos;s *Mathematical Thought from Ancient to Modern Times*.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Morris Kline quote; Academic Critique Hub URL; comparison table of Case 1, 2, 3, 4; sunrise over an ancient library.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;History Makes Its Own Evaluations: Fashions Fade, Truth Endures.&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-900 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Let us conclude with the immortal words of the great mathematician and historian of science, Morris Kline:
            </p>
            <p className="leading-relaxed italic">
              &lsquo;The history of mathematics teaches us that many subjects which aroused tremendous enthusiasm and engaged the attention of the best mathematicians ultimately faded into oblivion... Indeed, one of the interesting questions that history answers is what survives. History makes its own and sounder evaluations.&rsquo;
            </p>
            <p className="leading-relaxed">
              History is the ultimate, incorruptible judge.
            </p>
            <p className="leading-relaxed">
              It consistently proves that what is overhyped by prominent contemporary scholars is often merely the commercial promotion of mediocrity, while that which is suppressed and persecuted by academic gatekeepers often turns out to be pure, enduring gold.
            </p>
            <p className="leading-relaxed">
              No matter how many millions of dollars in national grants are poured into flawed impedance matching, no matter how many hundreds of citations are manufactured in high-impact journals, theories built on subtracting scalar energies and confusing standing waves will fade into the dustbin of history.
            </p>
            <p className="leading-relaxed">
              Wave mechanics will stand. Mathematical logic will prevail.
            </p>
            <p className="leading-relaxed">
              Read the complete forensic analyses, examine the primary data, and download our open-access literature on the Academic Critique Hub. Think independently, reject academic cargo cults, and stand with the truth. Thank you for watching.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* FORENSIC COMPARISON TABLE */}
      <section className="mt-12 space-y-4 font-sans">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 font-bold text-xl text-slate-950">
          <Scale className="w-6 h-6 text-indigo-700" />
          <h2>Part II: Forensic Evidence &amp; Mathematical Autopsy Ledger</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-300 rounded-lg">
            <thead className="bg-slate-900 text-white uppercase tracking-wider">
              <tr>
                <th className="p-3">Flagship Paper Claim (Wang et al. / Mainstream)</th>
                <th className="p-3">Physical &amp; Mathematical Truth (Wave Mechanics)</th>
                <th className="p-3">First-Principles Citation</th>
                <th className="p-3">Forensic Diagnosis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-slate-50">
              <tr>
                <td className="p-3 font-bold text-slate-900">
                  Reflected intensity is determined by scalar energy difference: <em>E</em><sub>11-short</sub> = |<em>E</em><sub>AA</sub> &minus; <em>E</em><sub>AM</sub>|.
                </td>
                <td className="p-3 text-slate-700">
                  Waves superimpose complex field vectors <strong>E</strong> = <strong>E</strong><sub>1</sub> + <strong>E</strong><sub>2</sub>. Energy includes phase cross-terms: <em>I</em> = <em>I</em><sub>1</sub> + <em>I</em><sub>2</sub> + 2&radic;(<em>I</em><sub>1</sub><em>I</em><sub>2</sub>)cos(&Delta;&theta;).
                </td>
                <td className="p-3 text-slate-700">
                  <em>J. Appl. Phys.</em> 2023 (134, 045304)
                </td>
                <td className="p-3 text-rose-900 font-semibold">
                  Elementary physics blunder: Subtracting scalar energies violates wave optics.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">
                  Incident and reflected waves are 180&deg; out of phase and cancel at the front interface.
                </td>
                <td className="p-3 text-slate-700">
                  Opposite-traveling waves form STANDING WAVES! Destructive cancellation occurs ONLY between co-propagating reflected waves from front and back interfaces.
                </td>
                <td className="p-3 text-slate-700">
                  <em>Physica Scripta</em> 2021 (96, 125003)
                </td>
                <td className="p-3 text-rose-900 font-semibold">
                  Category error: Conflating standing waves with reflection cancellation.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">
                  Measured permittivity and permeability are functions of sample thickness.
                </td>
                <td className="p-3 text-slate-700">
                  Permittivity &epsilon; and permeability &mu; are intensive bulk material properties, invariant with thickness or sample holder geometry.
                </td>
                <td className="p-3 text-slate-700">
                  <em>Carbon</em> 2024 deconstruction; <em>J. Mater. Sci.</em> 2022
                </td>
                <td className="p-3 text-amber-900 font-semibold">
                  Alchemy: Mistaking waveguide boundary resonance errors for intrinsic material physics.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">
                  Zero reflection requires zero occurrences of all reflection orders (<em>r</em>, <em>r</em><sub>1</sub>, <em>r</em><sub>2</sub> = 0).
                </td>
                <td className="p-3 text-slate-700">
                  Zero reflection occurs via destructive phase interference between non-zero interface reflections, NOT by vanishing reflection orders.
                </td>
                <td className="p-3 text-slate-700">
                  <em>Surfaces and Interfaces</em> 2023 (40, 103022)
                </td>
                <td className="p-3 text-rose-900 font-semibold">
                  Conceptual blindness: Fails to understand wave cancellation singularity.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">
                  Academic cartels perpetuate flawed impedance matching through 200+ citations.
                </td>
                <td className="p-3 text-slate-700">
                  Commercial Impact Factor gaming has replaced Planck&apos;s funeral principle, turning flawed physics into an immortal grant-seeking industry.
                </td>
                <td className="p-3 text-slate-700">
                  <em>Science &amp; Technology Daily</em> (2018); SSRN (2025)
                </td>
                <td className="p-3 text-slate-900 font-semibold">
                  Sociological confirmation of Cargo Cult Science.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* YOUTUBE SAFE DESCRIPTION PREVIEW */}
      <section className="mt-12 space-y-4 font-sans">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <FileText className="w-6 h-6 text-rose-600" />
            <h2>Part III: 100% YouTube-Safe Description (Zero &lt; or &gt; Characters)</h2>
          </div>
          <button
            onClick={() => handleCopyText(youtubeSafeDescription, "desc-wang2012-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedSection === "desc-wang2012-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedSection === "desc-wang2012-bottom" ? "Copied!" : "Copy Clean Description"}
          </button>
        </div>
        <p className="text-xs text-slate-500">
          Note: This description strictly avoids all angle brackets (&lt; and &gt;) to eliminate YouTube Studio&apos;s red validation error box (anti-XSS filter). It contains complete timestamps, quotes, and primary DOIs ready for publication.
        </p>
        <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 border border-slate-700">
          {youtubeSafeDescription}
        </pre>
      </section>

      {/* Footer Banner */}
      <div className="mt-12 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          Forensic Dissection Series &bull; Episode 4 &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-rose-100 text-rose-800 px-2.5 py-1 rounded-md font-semibold">
            JAP 2012 &amp; IEEE 2015
          </span>
          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
            Energy Difference Delusion
          </span>
          <span className="bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded-md font-semibold">
            Wave Superposition
          </span>
        </div>
      </div>
    </article>
  );
}
