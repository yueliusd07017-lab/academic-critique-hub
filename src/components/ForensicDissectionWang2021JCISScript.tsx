import React, { useState } from "react";
import { Video, ShieldAlert, Sparkles, Copy, Check, BookOpen, Layers, Zap, Scale, FileText, ExternalLink, ArrowRight, Skull, AlertTriangle, Compass, Clock, GraduationCap } from "lucide-react";

export default function ForensicDissectionWang2021JCISScript() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  const youtubeSafeDescription = `Title: Deconstructing Wang et al. (JCIS 2021): The Illusion of "Deep Understanding", 15-Day Peer Review & Circuit Element Confusion | Forensic Dissection Series Case 3

Welcome to Episode 3 of our Forensic Dissection Series: "Why Modern Science Is in a Dark Age."

In 2021, the Journal of Colloid and Interface Science (JCIS, Elsevier) published a paper with a breathtakingly ambitious title:
T. Wang, G. Chen, J. Zhu, H. Gong, L. Zhang, and H. Wu, "Deep understanding of impedance matching and quarter wavelength theory in electromagnetic wave absorption", J. Colloid Interface Sci. 2021, 595, 1-5 (DOI: 10.1016/j.jcis.2021.03.132).

This 5-page article boasts:
- 219+ citation index citations
- Funding from 3 National Natural Science Foundation of China grants (51872238, 21806129, 52074227)
- An astonishing peer-review speed: Received March 8, 2021; Revised March 22; Accepted March 23 (accepted in just 15 days!).

Book clubs in the humanities read literature to the bone. But do graduate student literature seminars (组会) in the natural sciences actually read papers with critical thinking? If they do, how could a paper containing elementary undergraduate blunders and category confusions accumulate over 200 citations?

In this third forensic dissection, Dr. Yue Liu exposes:

1. THE 15-DAY REVIEW & SUSPICIOUS NOTATION THEFT (ZM):
The authors suddenly adopt the non-standard variable symbol "ZM" to denote material characteristic impedance alongside Zin and Z0. ZM was uniquely coined and consistently championed by Dr. Yue Liu's team across years of suppressed manuscripts. Why did authors who never used ZM suddenly publish it in a 15-day flash review?

2. CATEGORY CONFUSION ON TRANSMISSION LINE "LOAD":
Wang et al. claim that treating the absorber as a load "ignores the metal backing" and assert that the metal backing acts as the load (ZL = 0).
The Forensic Truth: In microwave absorption, the physical system under test is the metal-backed film! Its input impedance is Zin, which already mathematically incorporates the metal backplate. Treating the film as a load terminating the free-space line does NOT ignore the backplate; calling the zero-impedance metal the "useful load" reveals a total failure to grasp transmission line modeling!

3. THE CENTIMETER-SCALE "STRAW MAN" ON QUARTER-WAVELENGTH:
Wang et al. claim critics doubt quarter-wavelength theory because vacuum wavelength (2-18 GHz) is in centimeters while absorbers are millimeters.
The Forensic Truth: No serious physicist doubts quarter-wavelength theory because of millimeter thickness (wavelength naturally compresses inside dielectrics). The fatal flaw of the quarter-wavelength model is that it COMPLETELY IGNORES INTERFACIAL PHASE JUMPS! Periodic peaks are boundary interference phenomena, not intrinsic material resonances.

4. SLANDERING TRANSMISSION LINE THEORY AS "INACCURATE":
Wang et al. claim that in multilayer absorbers, "it is difficult to know whether EMW will penetrate... which may lead to inaccurate calculation results."
The Forensic Truth: Transmission line theory is exact, closed, and rigorous. It automatically accounts for all multiple reflections and penetrations. Portraying closed mathematical electrodynamics as a dialectical approximation exposes theoretical incompetence.

5. THE QUARTER-WAVE TRANSFORMER FALSE ANALOGY (Eq. 4):
Wang et al. drag in the classical transformer equation Z01 = sqrt(Z0 * ZL) to defend quarter-wavelength absorption.
The Forensic Truth: Matching two finite transmission lines is a totally different boundary problem from a lossy film terminated at a metal short circuit. As proven in Applied Physics A (2024, 130, 212), the matching condition in microwave absorption does NOT involve Eq. (4).

TIMESTAMPS:
00:00 - Scene 1: The Literature Reading Paradox & 219 Citations
02:10 - Scene 2: The 15-Day Lightning Review & The ZM Notation
04:30 - Scene 3: What Is the "Load"? Bizarre Circuit Element Confusion
07:05 - Scene 4: The Centimeter-Scale Straw Man & Phase Jumps
09:20 - Scene 5: Slandering Exact Transmission Line Mathematics
11:35 - Scene 6: The Quarter-Wave Transformer False Analogy
13:40 - Scene 7: "Poor at Fundamentals, Skilled at Wild Analogies"

Primary References:
- Wang et al., J. Colloid Interface Sci. 2021, 595, 1-5 (DOI: 10.1016/j.jcis.2021.03.132)
- Liu et al., Mater. Chem. Phys. 2020, 243, 122624 (DOI: 10.1016/j.matchemphys.2019.122624)
- Liu et al., Surfaces and Interfaces 2023, 40, 103024 (DOI: 10.1016/j.surfin.2023.103024)
- Liu et al., Applied Physics A 2024, 130, 212 (DOI: 10.1007/s00339-024-07361-9)
- Academic Critique Hub: https://github.com/academic-critique/hub

#AcademicIntegrity #PeerReviewCrisis #MicrowaveAbsorption #ScientificMethod #TransmissionLine #CargoCultScience`;

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="forensic-dissection-wang2021-jcis-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-rose-100 text-rose-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-rose-300 flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-rose-700" />
            Essay GO &bull; Forensic Dissection Case 3
          </span>
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
            JCIS 2021 &bull; 219 Citations &bull; 15-Day Review &bull; The ZM Notation
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Forensic Dissection Case 3: Deconstructing Wang et al. (JCIS 2021) — The Illusion of &ldquo;Deep Understanding&rdquo;, 15-Day Peer Review, and Circuit Element Confusion
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Autopsy of T. Wang et al., <em>J. Colloid Interface Sci.</em> 2021 (595, 1–5): Exposing category errors in transmission line modeling, the centimeter-scale quarter-wavelength straw man, and the archetype of modern SCI authors: <em>&ldquo;Uneducated in fundamentals, but gifted at wild analogies.&rdquo;</em>
        </p>
        <div className="text-xs text-slate-400 mt-2 font-mono">
          Author: Dr. Yue Liu (刘跃) &bull; Academic Critique Series &bull; Forensic Case 3
        </div>
      </div>

      {/* Abstract Callout */}
      <div className="bg-rose-50/70 border-l-4 border-rose-600 p-5 rounded-r-xl mb-8 font-sans text-sm text-slate-800 space-y-2">
        <div className="font-bold text-rose-950 flex items-center gap-2">
          <Skull className="w-5 h-5 text-rose-700 shrink-0" />
          The Paradox of 219 Citations: Do Graduate Seminars Actually Read Literature?
        </div>
        <p>
          In humanities reading groups, participants dissect every line of a classic text with rigorous scrutiny. But what happens in natural science research groups? Graduate seminars (组会) read papers every week. If they actually understood the physics, how could a 5-page paper in the <em>Journal of Colloid and Interface Science</em> (JCIS 2021, 595, 1–5)—which received peer-review acceptance in an astonishing <strong>15 days</strong>—accumulate over <strong>219 citations</strong> despite containing elementary circuit element confusions, straw-man defenses of the quarter-wavelength model, and uncredited adoption of Dr. Yue Liu&apos;s unique non-standard notation <em>Z</em><sub>M</sub>? This case exemplifies the intellectual rot of contemporary academia: researchers who fail to grasp sophomore electromagnetism, yet excel at superficial curve-fitting and bizarre analogies.
        </p>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl mb-8 font-sans">
        <div className="text-xs text-slate-600">
          <strong>Production Toolkit:</strong> Full 7-Scene Broadcast Script &bull; Spoken Narration &bull; On-Screen Captions &bull; YouTube Metadata
        </div>
        <button
          onClick={() => handleCopyText(youtubeSafeDescription, "desc-wang")}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition shadow-xs cursor-pointer"
        >
          {copiedSection === "desc-wang" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copiedSection === "desc-wang" ? "Description Copied!" : "Copy Safe YouTube Description"}
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
              Scene 1: Prologue — The &ldquo;Literature Reading&rdquo; Paradox &amp; 219 Citations
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~130 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Academic investigator in front of a seminar room with empty desks, inquiring, incisive.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              JCIS 2021 cover; title &ldquo;Deep understanding of impedance matching...&rdquo;; citation counter displaying &ldquo;219+ Citations&rdquo;; three NSFC grant numbers highlighted.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Do Graduate Seminars Actually Read Literature, or Just Copy-Paste Citations?&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-rose-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-rose-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Welcome back to Episode Three of our Forensic Dissection Series: <em>Why Modern Science Is in a Dark Age</em>.
            </p>
            <p className="leading-relaxed">
              In the humanities and classical philosophy, there are reading clubs where scholars scrutinize every paragraph of a great book to its very marrow. But what about the natural sciences? Every week, thousands of university research groups hold graduate literature seminars. Students project papers onto screens; professors nod in agreement.
            </p>
            <p className="leading-relaxed">
              But here is the burning question: Do they actually read the papers? If they read them, do they truly understand what they are reading?
            </p>
            <p className="leading-relaxed">
              Because if they did, how on earth could a paper titled <em>&lsquo;Deep understanding of impedance matching and quarter wavelength theory in electromagnetic wave absorption&rsquo;</em>—published in 2021 in the <em>Journal of Colloid and Interface Science</em> by Tao Wang and colleagues—accumulate over <strong>219 citations</strong>?
            </p>
            <p className="leading-relaxed">
              This five-page paper was funded by three separate National Natural Science Foundation of China grants. Yet, as we will demonstrate today through first-principles physics, the paper contains <strong>zero deep understanding</strong>. It is a catastrophic tangle of sophomore-level category confusions, textbook misunderstandings, and straw-man apologetics.
            </p>
            <p className="leading-relaxed">
              When papers like this become high-citation classics, can we still trust that the vast majority of SCI publications are anything more than academic garbage?&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 2 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">2</span>
              Scene 2: The 15-Day Lightning Review &amp; The Suspicious ZM Notation
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~135 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Analytical, pointing out publication dates and suspicious mathematical notation.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Timeline graphic: Received March 8 &rarr; Revised March 22 &rarr; Accepted March 23 (15 days!). Zoom in on equation showing <em>Z</em><sub>M</sub>.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Accepted in 15 Days! The Smoking Gun of Stolen Non-Standard Notation &lsquo;ZM&rsquo;&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-indigo-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-indigo-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;First, let us examine the publishing timeline of this paper:
            </p>
            <p className="leading-relaxed">
              Received on March 8th, 2021. Revised on March 22nd. Accepted on March 23rd.
            </p>
            <p className="leading-relaxed">
              From submission to final acceptance in just <strong>fifteen days</strong>! In an international journal where ordinary peer review takes months, this paper sailed through as if on a VIP fast-track.
            </p>
            <p className="leading-relaxed">
              And what appears right on the first page? The authors write: <em>&lsquo;Some people think that the input impedance Zin is equivalent to the characteristic impedance ZM of the absorber...&rsquo;</em>
            </p>
            <p className="leading-relaxed">
              Notice that variable: <strong>ZM</strong>!
            </p>
            <p className="leading-relaxed">
              In standard microwave engineering and transmission line textbooks, characteristic impedance is denoted as <em>Z</em><sub>0</sub>, <em>Z</em><sub>c</sub>, or &eta;. The notation <strong>ZM</strong> is a highly unique, non-standard symbol—first coined and consistently championed by Dr. Yue Liu&apos;s team to prevent the confusion between film input impedance and material wave impedance.
            </p>
            <p className="leading-relaxed">
              How did an author group that had never used <em>Z</em><sub>M</sub> suddenly adopt this exact idiosyncratic notation? When independent scientists submit groundbreaking corrective papers, their manuscripts are repeatedly desk-rejected by anonymous gatekeepers. Then, astonishingly, those exact same non-standard notations and conceptual distinctions reappear in a rival paper, rushed through peer review in two weeks! In an opaque peer-review system, this pattern cries out for public scrutiny.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 3 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">3</span>
              Scene 3: Category Error 1 — What Is the &ldquo;Load&rdquo; in Microwave Absorption?
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~140 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Holding a transmission line circuit diagram, demonstrating circuit topology.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Circuit diagram: Free space transmission line (Z0) terminated by metal-backed film. Input impedance Zin at the interface. Metal plate short-circuit (ZL = 0).
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Category Error: The Metal Has ZERO Impedance! The Film IS the Load!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-amber-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-amber-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Now, let us examine the first major category error.
            </p>
            <p className="leading-relaxed">
              Wang et al. attack unnamed researchers, claiming they &lsquo;confuse circuit elements.&rsquo; They write that some people treat the absorber as a load, and that this supposedly &lsquo;ignores the role of the metal backing.&rsquo; Wang et al. claim that instead, the absorber is a transmission line and the metal backing acts as the load!
            </p>
            <p className="leading-relaxed">
              This statement reveals a breathtaking misunderstanding of transmission line physics!
            </p>
            <p className="leading-relaxed">
              A metal backplate is a perfect electrical conductor. Its impedance is zero! A zero-impedance short circuit has zero energy dissipation; by itself, it absorbs nothing.
            </p>
            <p className="leading-relaxed">
              In real-world microwave absorption, what is the actual physical object under investigation? It is the **metal-backed film**! From the perspective of incident microwave energy arriving through air (impedance <em>Z</em><sub>0</sub>), the entire metal-backed film acts as the terminating load, and its terminal impedance is precisely the input impedance <em>Z</em><sub>in</sub>!
            </p>
            <p className="leading-relaxed">
              The hyperbolic tangent formula for <em>Z</em><sub>in</sub> already incorporates the reflection from the metal backing! Treating the metal-backed film as a load with impedance <em>Z</em><sub>in</sub> does NOT ignore the metal backing. Claiming that the metal is the &lsquo;useful load&rsquo; and that treating the film as a load ignores the plate proves that Wang et al. did not even understand what physical system was being measured!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 4 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">4</span>
              Scene 4: The Centimeter-Scale Straw Man &amp; The Interfacial Phase Blindness
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~135 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Dismissing a straw man argument with sharp mathematical clarity.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Quote callout: &ldquo;vacuum quarter wavelength is centimeters, absorbers are millimeters...&rdquo; Contrast with wave equation showing boundary phase jumps &Delta;&theta;1 and &Delta;&theta;2.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;The Straw Man: It&apos;s NOT About Millimeters! It&apos;s About INTERFACIAL PHASE JUMPS!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Next, consider the bizarre straw man that Wang et al. construct to defend the quarter-wavelength model.
            </p>
            <p className="leading-relaxed">
              They write: <em>&lsquo;Some people doubt the validity of the quarter wavelength theory. The main reason is that most of the quarter wavelength of EMW in the frequency range of 2–18 GHz in vacuum is distributed in the centimeter scale. However, the thickness of wave absorbers currently used is generally in the millimeter scale... There is no doubt that the quarter wavelength theory is correct...&rsquo;</em>
            </p>
            <p className="leading-relaxed">
              What an absurd straw man! No qualified physicist ever doubted the quarter-wavelength model because the vacuum wavelength is in centimeters! Every sophomore undergraduate knows that inside a dielectric medium, wavelength compresses by the refractive index: &lambda;<sub>m</sub> = &lambda;<sub>0</sub> / &radic;(&epsilon;<sub>r</sub>&mu;<sub>r</sub>).
            </p>
            <p className="leading-relaxed">
              The true, fatal reason why the quarter-wavelength model is wrong has nothing to do with millimeter scales!
            </p>
            <p className="leading-relaxed">
              The fatal flaw is that **the quarter-wavelength formula assumes the phase difference between front and back reflections is solely determined by geometric propagation path length, completely ignoring the complex interfacial phase jumps at the front and back boundaries!**
            </p>
            <p className="leading-relaxed">
              Because it ignores interface phase shifts, the quarter-wavelength formula systematically misidentifies peak positions. Vaguely invoking &lsquo;multiple reflections&rsquo; cannot cure a formula that is blind to boundary value physics.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 5 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">5</span>
              Scene 5: Slandering Exact Transmission Line Mathematics as &ldquo;Unreliable&rdquo;
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~130 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Defending the power of deductive mathematical physics against pop-dialectical hedging.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Text excerpt from JCIS page 3: &ldquo;it is difficult to know whether EMW will penetrate... which may lead to inaccurate calculation results...&rdquo;
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Mathematics Is Exact: Transmission Line Theory Needs No Dialectical Guesswork!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-rose-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-rose-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;On page 3, Wang et al. venture into an even more embarrassing discussion.
            </p>
            <p className="leading-relaxed">
              Discussing multilayer films, they write that <em>&lsquo;it is difficult to determine whether EMW can penetrate... Because it is difficult to know whether EMW will penetrate before the test, it is necessary to assume that the transmission end point is known... which may lead to inaccurate calculation results.&rsquo;</em>
            </p>
            <p className="leading-relaxed">
              They portray transmission line theory as if it were some clumsy, uncertain heuristic that might fail if waves bounce too many times!
            </p>
            <p className="leading-relaxed">
              This is pure theoretical ignorance.
            </p>
            <p className="leading-relaxed">
              Transmission line theory is an exact, mathematically closed deduction of Maxwell&apos;s equations! When you write down the boundary transfer matrices, the mathematics automatically and rigorously sums an infinite series of internal multiple reflections and transmissions. You do not need to guess whether the wave penetrates, or count how many times it bounces!
            </p>
            <p className="leading-relaxed">
              The mathematical output is rigorous and unconditional. That is the triumph of deductive theoretical physics. Trying to turn exact electrodynamics into a vague guessing game merely proves the authors never learned transmission line theory.&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 6 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">6</span>
              Scene 6: The Quarter-Wave Transformer False Analogy (Equation 4)
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~130 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Exposing mechanical formula-copying and false equivalencies.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Equation 4 from Wang et al.: Z01 = sqrt(Z0 * ZL). Contrast with lossy film on metal backing. Citation to Applied Physics A (2024, 130, 212).
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;False Equivalence: An Impedance Transformer Is NOT an Absorbing Film!&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-emerald-600 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-emerald-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;Finally, Wang et al. attempt their grand proof of quarter-wavelength theory by citing Equation 4: the classical formula for a quarter-wave impedance transformer, where <em>Z</em><sub>01</sub> equals the geometric mean of the transmission line impedance and load impedance: <em>Z</em><sub>01</sub> = &radic;(<em>Z</em><sub>0</sub> &middot; <em>Z</em><sub>L</sub>).
            </p>
            <p className="leading-relaxed">
              They assert that this proves the quarter-wavelength matching layer!
            </p>
            <p className="leading-relaxed">
              This is another textbook case of mechanical formula-copying without physical comprehension.
            </p>
            <p className="leading-relaxed">
              A quarter-wave impedance transformer is designed to match two lossless transmission lines of finite impedances <em>Z</em><sub>0</sub> and <em>Z</em><sub>L</sub> to eliminate reflection. But in microwave absorption, the film is attached to a metal backplate whose impedance is **zero**! If <em>Z</em><sub>L</sub> = 0, the geometric mean &radic;(<em>Z</em><sub>0</sub> &middot; 0) is zero!
            </p>
            <p className="leading-relaxed">
              As Dr. Yue Liu proved in *Applied Physics A* (2024, 130, 212), the matching condition in microwave absorbing films does NOT involve the impedance transformer relation Equation 4. Invoking a transmission line transformer to defend the quarter-wavelength absorption model is like using the blueprint of a water turbine to explain how an airplane wing generates lift!&rdquo;
            </p>
          </div>
        </div>

        {/* Scene 7 */}
        <div className="bg-slate-50 border border-slate-300 rounded-xl p-5 space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-rose-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-xs">7</span>
              Scene 7: Epilogue — &ldquo;Uneducated in Fundamentals, but Gifted at Wild Analogies&rdquo;
            </span>
            <span className="text-xs font-mono text-slate-400">Duration: ~120 sec</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Avatar Persona:</span>
              Authoritative, thought-provoking conclusion on the collapse of peer review standards.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Visual Backdrop &amp; B-Roll:</span>
              Quote by Dr. Yue Liu: &ldquo;They never mastered basic principles, but excel at wild innovation...&rdquo; Citation to SSRN monograph. Hub interface.
            </div>
            <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">On-Screen Caption / Overlay:</span>
              &ldquo;Demand Intellectual Honesty. Read Literature with Critical Rigor.&rdquo;
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border-l-4 border-slate-900 font-serif text-sm text-slate-800 space-y-2">
            <p className="font-sans font-bold text-xs uppercase tracking-wide text-slate-950">Spoken English Narration:</p>
            <p className="leading-relaxed">
              &ldquo;This brings us to the profound cultural lesson of Wang et al. (JCIS 2021).
            </p>
            <p className="leading-relaxed">
              As Dr. Yue Liu diagnosed in his landmark essay, <em>The Primacy of Theoretical Foundations</em>:
              Modern SCI authors represent an alarming academic archetype: <strong>They never mastered the basic concepts that an undergraduate physics student should know, but they are exceptionally gifted at drawing wild, superficial analogies!</strong>
            </p>
            <p className="leading-relaxed">
              They confuse input impedance with characteristic impedance, and call it an innovation. They treat wave superposition as simple scalar energy addition, and call it an insight. They treat permittivity as a function of film thickness, and call it a discovery.
            </p>
            <p className="leading-relaxed">
              And when a paper packed with these elementary blunders is published in fifteen days and cited over two hundred times, it confirms that peer review has collapsed into a ceremonial rubber stamp.
            </p>
            <p className="leading-relaxed">
              If graduate students and professors continue to cite papers without reading them critically, the scientific community is no longer doing science—it is performing ritual alchemy.
            </p>
            <p className="leading-relaxed">
              It is time to restore rigorous reading, demand intellectual accountability, and return to first-principles wave mechanics. Read the complete forensic reports on our Academic Critique Hub. Until next time, think for yourself, question authority, and defend the truth.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* FORENSIC COMPARISON TABLE */}
      <section className="mt-12 space-y-4 font-sans">
        <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2 font-bold text-xl text-slate-950">
          <Scale className="w-6 h-6 text-indigo-700" />
          <h2>Part II: Forensic Evidence &amp; Conceptual Contrast Ledger</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-300 rounded-lg">
            <thead className="bg-slate-900 text-white uppercase tracking-wider">
              <tr>
                <th className="p-3">Claim in Wang et al. (JCIS 2021)</th>
                <th className="p-3">Physical &amp; Mathematical Reality</th>
                <th className="p-3">First-Principles Citation</th>
                <th className="p-3">Forensic Diagnosis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-slate-50">
              <tr>
                <td className="p-3 font-bold text-slate-900">
                  Metal backing acts as the load; treating absorber as load ignores the metal.
                </td>
                <td className="p-3 text-slate-700">
                  Metal has zero impedance (short circuit). The actual device under test is the metal-backed film, whose terminal load impedance is <em>Z</em><sub>in</sub>, which already includes the backplate.
                </td>
                <td className="p-3 text-slate-700">
                  <em>Mater. Chem. Phys.</em> 2020 (243, 122624)
                </td>
                <td className="p-3 text-rose-900 font-semibold">
                  Category error: Confuses mathematical derivation trick with physical device under test.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">
                  Doubts about quarter-wavelength are because vacuum wavelength is in centimeters while films are in millimeters.
                </td>
                <td className="p-3 text-slate-700">
                  Wavelength naturally compresses in dielectrics (&lambda;<sub>m</sub> = &lambda;<sub>0</sub>/n). The real failure is that the quarter-wavelength model completely ignores interfacial phase jumps!
                </td>
                <td className="p-3 text-slate-700">
                  <em>Surfaces and Interfaces</em> 2023 (40, 103024)
                </td>
                <td className="p-3 text-rose-900 font-semibold">
                  Straw man fallacy: Fabricates a fake objection to avoid confronting phase cancellation physics.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">
                  Multilayer films make penetration hard to know, leading to inaccurate calculations.
                </td>
                <td className="p-3 text-slate-700">
                  Transmission line transfer matrices are exact, closed deductions of Maxwell&apos;s equations; they unconditionally account for all infinite internal reflections without heuristic guessing.
                </td>
                <td className="p-3 text-slate-700">
                  <em>J. Appl. Phys.</em> 2023 (134, 045303)
                </td>
                <td className="p-3 text-amber-900 font-semibold">
                  Theoretical incompetence: Slanders exact electrodynamics as uncertain dialectical guesswork.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">
                  Equation 4 (<em>Z</em><sub>01</sub> = &radic;(<em>Z</em><sub>0</sub> &middot; <em>Z</em><sub>L</sub>)) proves quarter-wavelength matching in absorbing films.
                </td>
                <td className="p-3 text-slate-700">
                  An impedance transformer matches two finite transmission lines. In microwave absorption on metal, <em>Z</em><sub>L</sub> = 0, rendering Eq. 4 mathematically irrelevant.
                </td>
                <td className="p-3 text-slate-700">
                  <em>Applied Physics A</em> 2024 (130, 212)
                </td>
                <td className="p-3 text-rose-900 font-semibold">
                  False analogy: Blind formula-copying without understanding boundary value conditions.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900">
                  Adoption of non-standard notation <em>Z</em><sub>M</sub> for material impedance.
                </td>
                <td className="p-3 text-slate-700">
                  <em>Z</em><sub>M</sub> was uniquely coined and maintained by Dr. Yue Liu&apos;s team to demarcate material wave impedance from <em>Z</em><sub>in</sub> and <em>Z</em><sub>0</sub>.
                </td>
                <td className="p-3 text-slate-700">
                  Yue Liu archives (2018–2020)
                </td>
                <td className="p-3 text-rose-900 font-semibold">
                  Smoking gun: Rapid 15-day review paper adopting unique uncredited notation of suppressed authors.
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
            onClick={() => handleCopyText(youtubeSafeDescription, "desc-wang-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedSection === "desc-wang-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedSection === "desc-wang-bottom" ? "Copied!" : "Copy Clean Description"}
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
          Forensic Dissection Series &bull; Episode 3 &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-rose-100 text-rose-800 px-2.5 py-1 rounded-md font-semibold">
            JCIS 2021
          </span>
          <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
            219 Citations
          </span>
          <span className="bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded-md font-semibold">
            Category Errors
          </span>
        </div>
      </div>
    </article>
  );
}
