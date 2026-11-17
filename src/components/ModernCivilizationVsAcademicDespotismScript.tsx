import React, { useState } from "react";
import { ShieldAlert, Copy, Check, Landmark, Scale, Coins, Cpu, Video, FileText, Flame, Sparkles } from "lucide-react";

export default function ModernCivilizationVsAcademicDespotismScript() {
  const [copied, setCopied] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = () => {
    const el = document.getElementById("modern-civilization-vs-academic-despotism-article-text");
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

  const youtubeSafeDescription = `Title: Why Science Has Never Seen the Sunlight of Modern Civilization: Locke, Montesquieu, Adam Smith & Hayek vs. SCI Despotism

Human civilization was not built by emperors or generals, nor merely by industrialists. Four thinkers—John Locke, Montesquieu, Adam Smith, and Friedrich Hayek—never commanded armies or invented a machine, yet wrote the four core "source code" laws of modern civilization.

Yet a breathtaking paradox defines our age: civilization and despotism coexist in the exact same era! While society outside enjoys the fruits of those four Enlightenment principles, the scientific establishment has NEVER seen their sunlight. Today's scientists still live under the feudal shackles of SCI Impact Factors and unchecked Peer Review.

In this video, Dr. Yue Liu confronts the four pillars of modern civilization against the dark-age despotism of contemporary academia:

1. JOHN LOCKE — POWER BELONGS TO EVERY INDIVIDUAL, NOT ACADEMIC AUTHORITIES:
Locke established that life, liberty, and property are innate; institutions are merely "security guards" hired by individuals. When a security guard starts robbing the homeowner, the homeowner has the right to fire them. If your rice bowl sits in someone else's hands, your knees can never belong to yourself. Yet in modern science, power is NOT held by individual researchers—it is hoarded by academic authorities, research teams, journals, and grant cliques through SCI Impact Factors and peer review.

2. MONTESQUIEU — IRON CAGES FOR POWER, NEVER BEGGING FOR "MORAL SAINTS":
Montesquieu understood human darkness: everyone with power is prone to abuse it. Hoping for "clean editors" or "fair reviewers" is as futile as ancients begging for a moral emperor. Yet peer review operates without external checks or accountability—allowing gatekeepers to suppress breakthroughs and revoke critics' accounts with impunity.

3. ADAM SMITH & WU WEI GOVERNANCE — WHY GARBAGE PAPERS WOULD VANISH WITHOUT SCI CURRENCY:
Critics ask: "Under Wu Wei governance (academic laissez-faire without gatekeeping), wouldn't garbage papers flood even worse?"
Look at Adam Smith's insight: people respond to real market incentives, not moral sermons. Right now, centralized SCI Impact Factor pricing turns paper counts into artificial currency for grants, titles, and survival! If journal publication counts NO LONGER represented real achievement—and tangible, verifiable scientific innovation were the sole hard currency—WHO would break their neck rushing to fabricate or publish garbage papers? Nobody!

4. FRIEDRICH HAYEK — THE FATAL CONCEIT OF AN OMNISCIENT ACADEMIC CENTRAL BRAIN:
As technology surged, top academic authorities sold society a grand illusion: that an omniscient "central brain" (peer-review elites, funding committees, and impact-factor algorithms) can plan, compute, and allocate scientific truth like a precision clock to build a flawless research utopia. As Hayek warned in The Road to Serfdom, human knowledge is radically dispersed; central planning always leads to information distortion, tyranny, and scarcity—paving the road to academic hell with "quality-control" intentions!

5. FRAGILE PORCELAIN — HOLDING AI WHILE LIVING IN A FEUDAL JUNGLE:
Modern civilization is fragile porcelain. Without those four foundational protections inside science itself, even researchers holding the latest smartphones, vector network analyzers, and AI remain trapped in a brutal pre-Enlightenment jungle where the powerful devour truth-tellers.

TIMESTAMPS:
00:00 - Scene 1: Prologue — How Civilization and Despotism Coexist in the Same Era
02:05 - Scene 2: John Locke — Individual Scientific Sovereignty vs. Rice-Bowl Tyranny
04:20 - Scene 3: Montesquieu — Why Begging for "Ethical Reviewers" Fails Without Checks on Power
06:25 - Scene 4: Adam Smith & Wu Wei Governance — Would Free Science Really Flood With Garbage Papers?
08:55 - Scene 5: Friedrich Hayek — The Grand Illusion of an Omniscient Academic "Central Brain"
11:30 - Scene 6: Epilogue — Holding AI Tools Inside an Unenlightened Scientific Jungle

Key References Cited:
- Liu, Y., The Principle of Wu Wei in Scientific Governance (SSRN 5421094, 2025)
- Liu, Y., Major Scientific Breakthroughs Are Not Born From Journals (SSRN 5720702, 2025)
- Liu, Y., The Theoretical Poverty of Modern Academia (SSRN 5463155, 2025)
- Hayek, F. A., The Road to Serfdom (1944); Locke, J., Two Treatises of Government (1689); Montesquieu, The Spirit of the Laws (1748); Smith, A., The Wealth of Nations (1776)
- Academic Critique Hub: https://github.com/academic-critique/hub

#PhilosophyOfScience #AcademicFreedom #WuWei #PeerReviewCrisis #Hayek #JohnLocke #CargoCultScience`;

  const spokenScriptText = `[Scene 1: Prologue — How Civilization and Despotism Coexist in the Same Era]
Who actually built modern civilization? Not emperors or generals, and not even industrial giants alone.
There were four thinkers who never commanded an army and never invented a single machine—yet through pure ideas, they wrote the underlying source code of the modern world: John Locke, Montesquieu, Adam Smith, and Friedrich Hayek.
Each solved one of humanity's four deadliest knots: Who holds power? How is power restrained? How is wealth created? And why does human reason turn arrogant?
Yet today we witness one of the strangest ironies in human history: modern civilization and medieval despotism coexist side by side in the exact same era!
Outside in constitutional society, people enjoy the fruits of those four thinkers. Yet inside the scientific establishment, it is as if that entire Enlightenment never happened! Modern science has never seen the sunlight of those four ideas. Researchers today—even with supercomputers and AI—still live trapped inside the feudal shackles of SCI Impact Factors and unchecked peer review!

[Scene 2: John Locke — Individual Scientific Sovereignty vs. Rice-Bowl Tyranny]
First enters the Englishman John Locke, who drew an absolute moral boundary.
Before Locke, humanity obeyed one supposedly sacred rule for millennia: everything under heaven belongs to the ruler; ordinary citizens are merely subjects and private property of the crown.
Locke shattered that lie by proclaiming natural rights: life, liberty, and property belong to every individual by birth. And what are governing institutions for? Not to rule over you—they are simply a "property security company" hired by citizens to protect their natural rights! If the security guard stops doing his job—or worse, starts robbing the homeowners—the owners have every right to fire that guard and hire another!
Locke's sharpest insight was making private independence the ultimate foundation of liberty: if your rice bowl sits in someone else's hands, your knees can never belong to yourself.
Now look at modern science! In genuine science, intellectual power must belong to EVERY individual thinker—NOT to academic authorities and NOT to grant-hoarding teams! Yet through SCI Impact Factors and peer review, power is locked tightly in the hands of academic authorities! When a scholar's livelihood, grants, and publication rights sit in the hands of journal gatekeepers, independent researchers cannot keep their knees straight—and the hired "security guards" of scientific publishing openly rob pioneers and cancel their accounts!

[Scene 3: Montesquieu — Iron Cages for Power, Never Begging for Moral Saints]
Wait—even after recognizing individual rights, the security guard still holds weapons! If the guard decides to act like a bandit, who stops him?
For thousands of years, the ancients only prayed for a "wise emperor" or an incorruptible judge—begging power-holders to restrain themselves out of personal morality. History proved that was like climbing a tree to catch a fish.
Then came the French thinker Montesquieu, who forged an iron cage for power. Looking squarely at human darkness, he delivered an immortal verdict: everyone who possesses power is prone to abuse it—that is an eternal law of human experience. Montesquieu did not believe in the tears of saints; he believed only in institutional chains—separating powers so ambition checks ambition and power restrains power.
Now compare that with modern academia! Whenever scandals erupt—ghost reviews, stolen ideas, 340-citation nonsense, or retaliatory rejections—the establishment only preaches "reviewer ethics" and begs editors to act morally. It NEVER dismantles the unchecked monopoly of peer review or creates external accountability! Without institutional checks, every peer-review committee turns into a lawless bandit court.

[Scene 4: Adam Smith & Wu Wei Governance — Would Free Science Really Flood With Garbage Papers?]
Once power is caged, humanity faced its third knot: how to escape poverty.
Before Adam Smith, nations saw global wealth as fixed—a zero-sum game of conquest and plunder. Smith overturned human economics with The Wealth of Nations: the brewer brews your beer and the baker bakes your bread not out of saintly charity, but out of self-interest inside a free competitive market, guided by an invisible hand into prosperity for all. Wealth is created through free exchange—not plundered, and not engineered by top-down decrees!
Now pause and hear the loudest objection raised when we propose Wu Wei governance—letting free scientific inquiry operate without authoritarian SCI gatekeeping:
"Hold on! Under Wu Wei governance, wouldn't garbage papers flood the world even worse?!"
STOP and apply Adam Smith's logic! WHY do tens of thousands of researchers churn out garbage papers today?! Because centralized academic power declared that SCI journal publication counts and Impact Factors ARE the official currency for degrees, promotions, and million-dollar grants!
Ask yourself this simple question: if academic journal papers no longer represented scientific achievement—if real, verifiable, substantive innovation were the ONLY hard currency in science—WHO on earth would break their neck rushing to write or publish garbage papers?!
Nobody! No sane human spends months fabricating plots for zero reward when artificial central pricing is removed and genuine value speaks for itself!

[Scene 5: Friedrich Hayek — The Fatal Conceit of an Omniscient Academic Central Brain]
By the twentieth century, humanity faced its deadliest enemy—the one Friedrich Hayek spent his life fighting: the hubris of central reason!
As technology surged, top academic authorities painted a dazzling illusion—making society believe humanity can manage science and society like a precision watch, run by one omniscient central brain that uniformly calculates, plans, and allocates funding, truth, and careers to build a flawless scientific utopia!
Against that madness, Hayek sounded the alarm in The Road to Serfdom. Human knowledge is infinitely complex and radically dispersed. No central committee, no Ministry of Metrics, and no supercomputer can calculate in advance where real breakthroughs will emerge! Any top-down grand plan—no matter how noble its "quality-control" slogans sound—inevitably collapses through information distortion and the arrogance of power! As Hayek warned, the road to hell is paved with good intentions—those obsessed with engineering paradise by central decree turn science into a sterile prison!

[Scene 6: Epilogue — Holding AI Tools Inside an Unenlightened Scientific Jungle]
Look back at what these four thinkers gave civilization: Locke gave us human backbone and dignity; Montesquieu gave us safety from arbitrary fear; Adam Smith gave us the key to real creation; and Hayek delivered the sharp wake-up slap to keep human reason humble.
Modern civilization is not automatic—it is an extraordinarily fragile piece of porcelain.
If we abandon these four guardrails—if we allow SCI Impact Factors and unchecked peer review to rule science with an omniscient central brain—then even while holding the latest smartphone, operating billion-dollar lab equipment, and chatting with cutting-edge AI, the scientific mind remains trapped in a savage jungle where power devours truth!
It is time to bring the sunlight of Locke, Montesquieu, Adam Smith, and Hayek into the gates of science—to restore power to the individual thinker, cage gatekeeping monopoly, judge only substantive innovation, and finally end the dark age of Cargo Cult Science. Thank you for watching.`;

  return (
    <article
      className="p-6 md:p-10 max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 text-slate-800 leading-relaxed font-serif"
      id="modern-civilization-vs-academic-despotism-article-text"
    >
      {/* Header Banner */}
      <div className="border-b border-slate-200 pb-6 mb-8 font-sans">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Essay GY &bull; Philosophy of Science &amp; Enlightenment Governance
          </span>
          <span className="bg-amber-100 text-amber-950 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
            Locke &bull; Montesquieu &bull; Adam Smith &bull; Hayek vs. SCI &amp; Peer Review
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-serif leading-tight tracking-tight">
          Why Science Has Never Seen the Sunlight of Modern Civilization: Locke, Montesquieu, Adam Smith &amp; Hayek Against SCI Despotism
        </h1>
        <p className="text-sm md:text-base text-slate-600 mt-3 font-sans italic">
          Why civilization and despotism coexist in the same era, why power in science belongs to every individual rather than authorities, why Wu Wei governance eliminates garbage-paper incentives, and why Hayek&apos;s critique of the &ldquo;omniscient central brain&rdquo; exposes modern scientific gatekeeping&mdash;complete with a 6-Scene Digital Avatar Broadcast Script and 100% YouTube-Safe Description.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <span className="text-xs text-slate-400 font-mono">
            Author: Dr. Yue Liu (刘跃) &bull; Wu Wei Governance &amp; Enlightenment Treatise
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCopyText(spokenScriptText, "script-civ")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "script-civ" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "script-civ" ? "Spoken Script Copied!" : "Copy Avatar Spoken Script"}
            </button>
            <button
              onClick={() => handleCopyText(youtubeSafeDescription, "yt-civ")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copiedId === "yt-civ" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedId === "yt-civ" ? "YouTube Desc Copied!" : "Copy YouTube Description"}
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded-lg text-xs font-bold transition cursor-pointer font-sans"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "All Copied!" : "Copy Full Package"}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================== */}
      {/* PART I: FOUR THINKERS VS. THE SCIENTIFIC DARK AGE                          */}
      {/* ========================================================================== */}
      <section className="mb-12 space-y-6">
        <div className="flex items-center gap-2 font-sans font-bold text-xl text-slate-900 border-b border-slate-200 pb-2">
          <Sparkles className="w-6 h-6 text-amber-700" />
          <h2>Part I: Four Thinkers Who Wrote Civilization&apos;s Source Code&mdash;And Why Science Stayed in the Dark</h2>
        </div>

        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl space-y-2 border border-slate-700">
          <h3 className="font-sans font-bold text-amber-300 text-base">
            The Central Paradox: Civilization and Despotism Coexisting in the Same Era
          </h3>
          <p className="text-sm text-slate-200">
            The ideas of Locke, Montesquieu, Adam Smith, and Hayek represent the core moral and institutional progress of human civilization. Yet remarkably, that civilizational progress seems never to have existed inside the scientific world! It is extraordinary that constitutional civilization and feudal despotism can coexist in the exact same historical moment: outside, citizens appeal to individual rights and free exchange; inside academia, researchers remain chained under SCI Impact Factors and unchecked peer review&mdash;never having seen the sunlight of those four thinkers.
          </p>
        </div>

        {/* 1. Locke */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <Landmark className="w-4 h-4 text-slate-700 shrink-0" />
            1. John Locke: Power Belongs to Every Individual Scholar, Not Authorities or Teams
          </h3>
          <p className="text-sm text-slate-700">
            Locke shattered the millennia-old dogma that subjects belong to the monarch, establishing that life, liberty, and property are innate&mdash;and institutions are merely hired &ldquo;property security guards&rdquo; whom homeowners may fire the moment guards start robbing them. Crucially, if your rice bowl rests in someone else&apos;s hand, your knees can never belong to yourself. In science, intellectual sovereignty must belong to <strong>every individual researcher</strong>, not academic authorities or grant teams; yet SCI Impact Factors and gatekept peer review concentrate power in authorities&apos; hands and reduce independent scholars to dependency.
          </p>
        </div>

        {/* 2. Montesquieu */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <Scale className="w-4 h-4 text-rose-700 shrink-0" />
            2. Montesquieu: Iron Cages for Unchecked Peer Review, Never &ldquo;Moral Saints&rdquo;
          </h3>
          <p className="text-sm text-slate-700">
            Recognizing that everyone who holds power is prone to abuse it, Montesquieu rejected hoping for benevolent saints and demanded institutional chains dividing legislative, executive, and judicial authority so power checks power. Academic publishing has never learned Montesquieu&apos;s lesson: whenever bias, citation extortion, or wrongful rejection occurs, journals call only for &ldquo;ethical integrity&rdquo; while keeping peer review completely unaccountable behind closed doors.
          </p>
        </div>

        {/* 3. Adam Smith & Wu Wei */}
        <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-amber-950 text-base flex items-center gap-2">
            <Coins className="w-4 h-4 text-amber-700 shrink-0" />
            3. Adam Smith &amp; Wu Wei Governance (无为而治): Why Garbage Papers Vanish When Real Innovation Is Hard Currency
          </h3>
          <p className="text-sm text-slate-800">
            Adam Smith showed that free exchange&mdash;rather than zero-sum plunder or central commands&mdash;channels individual effort through an invisible hand into genuine creation. Gatekeepers object to academic <em>Wu Wei</em> governance (自由学术治理): <em>&ldquo;Under Wu Wei governance, wouldn&apos;t garbage papers flood even worse?&rdquo;</em> Dr. Liu&apos;s answer cuts straight to the economic root: <strong>If academic journal papers no longer represented scientific achievement&mdash;and tangible, substantive innovation were the only hard currency&mdash;who would still break their neck rushing to publish garbage papers?!</strong> Only artificial central pricing via SCI Impact Factors manufactures demand for worthless articles.
          </p>
        </div>

        {/* 4. Hayek */}
        <div className="bg-rose-50/70 border border-rose-200 p-5 rounded-xl space-y-2.5">
          <h3 className="font-sans font-bold text-rose-950 text-base flex items-center gap-2">
            <Cpu className="w-4 h-4 text-rose-700 shrink-0" />
            4. Friedrich Hayek: The Fatal Conceit of an Omniscient Academic &ldquo;Central Brain&rdquo;
          </h3>
          <p className="text-sm text-slate-800">
            As science and technology raced ahead, top academic authorities painted a grand illusion: making society believe humanity can operate like a precision clock governed by an omniscient central brain&mdash;peer-review oligarchs, funding committees, and bibliometric quotas&mdash;uniformly calculating, planning, and allocating scientific truth to build a flawless utopia. Hayek exposed this fatal conceit in <em>The Road to Serfdom</em>: real knowledge is vast and radically dispersed; no central brain or supercomputer can calculate every genuine discovery in advance, and engineering perfection from above inevitably breeds distortion, tyranny, and scientific sterility.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2">
          <h3 className="font-sans font-bold text-slate-950 text-base flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-slate-700 shrink-0" />
            5. Fragile Porcelain: Holding AI While Living Inside an Unenlightened Jungle
          </h3>
          <p className="text-sm text-slate-700">
            Modern civilization is fragile porcelain. Compared with Locke, Montesquieu, Adam Smith, and Hayek, the scientific community still lives in pre-Enlightenment darkness. Even while researchers grip smartphones, modern instruments, and AI tools, stripping away individual sovereignty and institutional checks leaves the scientific spirit trapped in a lawless jungle where entrenched authorities silence truth.
          </p>
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART II: COMPLETE 6-SCENE DIGITAL AVATAR BROADCAST SCRIPT                 */}
      {/* ========================================================================== */}
      <section className="mb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-2 font-sans">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <Video className="w-6 h-6 text-amber-700" />
            <h2>Part II: Complete 6-Scene Digital Avatar Broadcast Script (~13 Min)</h2>
          </div>
          <button
            onClick={() => handleCopyText(spokenScriptText, "script-civ-mid")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "script-civ-mid" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "script-civ-mid" ? "Copied Spoken Script!" : "Copy Spoken Narration Only"}
          </button>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-5 font-serif text-sm leading-relaxed whitespace-pre-wrap border border-slate-700 max-h-[540px] overflow-y-auto">
          {spokenScriptText}
        </div>
      </section>

      {/* ========================================================================== */}
      {/* PART III: 100% YOUTUBE-SAFE DESCRIPTION                                    */}
      {/* ========================================================================== */}
      <section className="space-y-4 font-sans">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
          <div className="flex items-center gap-2 font-bold text-xl text-slate-950">
            <FileText className="w-6 h-6 text-amber-700" />
            <h2>Part III: 100% YouTube-Safe Description (Zero &lt; or &gt; Characters)</h2>
          </div>
          <button
            onClick={() => handleCopyText(youtubeSafeDescription, "yt-civ-bottom")}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-black text-white rounded text-xs font-bold transition cursor-pointer"
          >
            {copiedId === "yt-civ-bottom" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedId === "yt-civ-bottom" ? "Copied!" : "Copy Clean Description"}
          </button>
        </div>
        <p className="text-xs text-slate-500">
          Zero angle brackets (&lt; or &gt;) so YouTube Studio accepts it cleanly without validation errors.
        </p>
        <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 border border-slate-700">
          {youtubeSafeDescription}
        </pre>
      </section>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-slate-200 font-sans text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          Enlightenment &amp; Scientific Governance &bull; Essay GY &bull; Dr. Yue Liu Theoretical Archives
        </div>
        <div className="flex gap-2">
          <span className="bg-slate-900 text-white px-2.5 py-1 rounded-md font-semibold">
            Individual Sovereignty
          </span>
          <span className="bg-amber-100 text-amber-950 px-2.5 py-1 rounded-md font-semibold">
            Wu Wei Governance
          </span>
          <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md font-semibold">
            Hayek vs. SCI Central Brain
          </span>
        </div>
      </div>
    </article>
  );
}
