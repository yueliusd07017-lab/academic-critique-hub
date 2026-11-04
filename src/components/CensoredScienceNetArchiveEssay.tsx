import React from "react";
import { AlertTriangle, Archive, BookOpen, ExternalLink, FileWarning, Lock, MessageSquareOff, ShieldAlert, Sparkles } from "lucide-react";

export default function CensoredScienceNetArchiveEssay() {
  return (
    <article
      className="prose max-w-none text-slate-800 leading-relaxed font-serif text-sm md:text-base space-y-8 animate-fade-in"
      id="censored-sciencenet-article-text"
    >
      {/* Title & Metadata Header */}
      <div className="text-center space-y-4 pb-8 border-b border-slate-200 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-rose-100 text-rose-900 border border-rose-300">
          <MessageSquareOff className="w-4 h-4 text-rose-700 animate-pulse" />
          Permanent Censorship Archive • ScienceNet (科学网) “审核未通过” Records
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-950 font-sans tracking-tight leading-tight">
          The Unapproved Ledger:
          <span className="block text-xl md:text-2xl font-serif font-normal text-rose-900 mt-2">
            Preserving Censored Blog Posts &amp; Peer-Review Critiques (“审核未通过”) on SCI Journals, Institutional Privacy Shields, Textbooks vs. Journals, and the Stagnation of Physics
          </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-500 font-mono">
          <span><strong>Author:</strong> Dr. Yue Liu (刘跃)</span>
          <span>•</span>
          <span><strong>Platform:</strong> ScienceNet Blog (科学网博客)</span>
          <span>•</span>
          <span><strong>Status:</strong> 审核未通过 (Blocked by Platform Moderation)</span>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs md:text-sm text-amber-900 text-left font-sans space-y-2">
          <p className="font-bold flex items-center gap-2 text-amber-950">
            <Archive className="w-4 h-4 text-amber-600" />
            Why This Archive Exists:
          </p>
          <p>
            On November 4, 2026, multiple blog posts and reader replies by Dr. Yue Liu on ScienceNet (科学网)—addressing SCI journal errors, Zone 1 vs. Zone 4 plagiarism, the legal/ethical boundary of publishing erroneous institutional peer-review reports, the primacy of textbooks over journal literature, and why peer review has coincided with the stagnation of fundamental physics—were marked <strong>“审核未通过” (Failed Moderation / Unapproved)</strong>. To ensure that reasoned scientific criticism is never erased by algorithmic or administrative gatekeeping, every blocked post, reply, and screenshot is permanently preserved below in both original Chinese and English translation.
          </p>
        </div>
      </div>

      {/* Overview Screenshot */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 space-y-4 font-sans">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded">
            Primary Evidence • Moderation Status Overview
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col justify-between space-y-2">
            <img
              src="/assets/aistudio/image_0475468f.png"
              alt="ScienceNet blog list showing two posts marked 审核未通过"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-xs text-slate-600">
              <strong>Blog Posts Blocked:</strong> <em>“解读一篇试图区分Zin和ZM的主流SCI文章（审核未通过）”</em> (preserved in full in <strong>Essay FH</strong>) and <em>“不应该出现在SCI刊物中的错误（审核未通过）”</em>.
            </p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col justify-between space-y-2">
            <img
              src="/assets/aistudio/image_82f444ce.png"
              alt="ScienceNet comment moderation log showing replies 547, 548, 549, 550 marked 审核未通过"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-xs text-slate-600">
              <strong>Reader Replies Blocked:</strong> Replies <strong>[547]</strong>, <strong>[548]</strong>, <strong>[549]</strong>, and <strong>[550]</strong> all marked <em>“审核未通过”</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Record 1: 不应该出现在SCI刊物中的错误 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            01
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            Blocked Blog Post: “Errors That Should Never Appear in SCI Journals” (不应该出现在SCI刊物中的错误)
          </h2>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200">
          <img
            src="/assets/aistudio/image_95ceda5b.png"
            alt="Screenshot of blocked blog post 不应该出现在SCI刊物中的错误"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-bold font-sans text-slate-900">1) Are SCI Articles Really More Rigorous Than Ordinary Articles?</h3>
            <p className="text-xs md:text-sm text-slate-700">
              <strong>Original Text:</strong> 1) SCI 文章真的比普通文章过硬吗？ <em>(Referencing reply on https://doi.org/10.32388/4PN4RT)</em>: “I do not support the claim that 90% of journal articles are false. This may be true to some extent for the non-peer-reviewed publications, but still, 90% is more of an exaggeration than a scientific statement. According to Nobel laureate Honjo Tasuku, 90% of the views published by top magazines like CNS are wrong. As I said before, I see this sentence as an exaggerated formulation to alert young researchers that they should not blindly follow superstition.”
            </p>
          </div>

          <div className="space-y-2 border-t border-slate-200 pt-3">
            <h3 className="text-sm font-bold font-sans text-slate-900">2) What Does It Mean When a Zone 1 Top SCI Paper Plagiarizes a Zone 4 Paper?</h3>
            <p className="text-xs md:text-sm text-slate-700">
              <strong>Original Text:</strong> 2) SCI一区顶刊文章抄袭四区文章说明什么？<br />
              • 一区论文全篇抄袭四区论文！一作美美得国奖~ #学术不端 #论文抄袭 #论文造假 #科研 #学术 - 抖音<br />
              • <em>“A first-tier paper plagiarized the entire fourth-tier paper! The first author easily won the national award~”</em><br />
              • <em>“Wuhan University of Science and Technology National Scholarship Winner: A Zone 4 paper easily transformed into a Zone 1 TOP paper. Writing papers is really that simple!”</em><br />
              • <em>“How outrageous is it? Plagiarizing MDPI from Zone 4 can still get published in a top Zone 1 journal.”</em><br />
              • 一区文章和四区文章到底有什么不同？仅仅是一区文章的图还没有四区文章的清晰吗？ (What is the actual difference between a Zone 1 article and a Zone 4 article? Is it merely that the figures in the Zone 1 article are even less clear than those in the Zone 4 article?)
            </p>
          </div>

          <div className="space-y-1 border-t border-slate-200 pt-3">
            <h3 className="text-sm font-bold font-sans text-slate-900">3) These Errors Should Never Appear in SCI Journals (这些错误不应该出现在SCI刊物中)</h3>
          </div>
        </div>
      </section>

      {/* Record 2: Reply [550] - Institutional Peer Review & Privacy Law */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            02
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            Blocked Reply [550]: Why Erroneous Institutional Peer-Review Reports Are Not Protected by Privacy Law
          </h2>
        </div>

        <p className="text-xs font-mono text-slate-500">
          <strong>Thread:</strong> 解析一篇顶刊Carbon的邀请论文 • <strong>Replying to:</strong> 蒋大和 (2026-11-4 17:28)
        </p>

        <div className="bg-white p-3 rounded-xl border border-slate-200">
          <img
            src="/assets/aistudio/image_eb98c44d.png"
            alt="Screenshot of blocked reply 550 on Carbon and Journal of Electronic Materials peer review"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">Original Chinese</span>
            <p className="text-xs md:text-sm text-slate-800 leading-relaxed">
              “谢谢！提到的所有拒稿意见（几乎公布了绝大多数拒稿意见作为历史记录）的全部我都在公众平台上全文发布了，因为现在公布这些违背隐私法（期刊以这个理由不让公开错误的审稿意见），很多平台不给发，所以公布的平台只有科学上网才能看。我之所以不怕违法，是因为我认为公布机构的错误审稿意见不在隐私法保护范围之内。隐私法只是用与个人，不适用于机构。法律不能仅仅看法规，还要看法理。”
            </p>
          </div>
          <div className="bg-indigo-50/50 border border-indigo-200 rounded-xl p-4 space-y-2">
            <span className="text-xs font-mono font-bold text-indigo-700 uppercase">English Translation</span>
            <p className="text-xs md:text-sm text-slate-800 leading-relaxed">
              “Thank you! I have published the full text of all the rejection comments mentioned (nearly all of them, as a historical record) on public platforms. Because publishing these is deemed a violation of privacy law—journals use this excuse to forbid the public disclosure of erroneous peer-review comments—many platforms refuse to post them, so the platforms where they are published can only be accessed via VPN. The reason I do not fear violating the law is that I believe publishing erroneous peer-review comments of an <em>institution</em> does not fall within the scope of privacy law protection. Privacy law applies only to individuals, not to institutions. Law cannot be judged merely by statutory regulations; it must also be judged by jurisprudence (法理).”
            </p>
          </div>
        </div>
      </section>

      {/* Record 3: Reply [549] - Textbooks vs Journal Literature */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            03
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            Blocked Reply [549]: Why Textbooks and Monographs Matter More Than Journal Literature
          </h2>
        </div>

        <p className="text-xs font-mono text-slate-500">
          <strong>Thread:</strong> 点评几篇主流SCI物理刊物文章 • <strong>Replying to:</strong> 杨建亮 (2026-11-4 00:34)
        </p>

        <div className="bg-white p-3 rounded-xl border border-slate-200">
          <img
            src="/assets/aistudio/image_5bf03e8d.png"
            alt="Screenshot of blocked reply 549 on textbooks vs journal literature"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">Original Chinese</span>
            <p className="text-xs md:text-sm text-slate-800 leading-relaxed">
              “现代研究者为了发表文章只看期刊文献不看教材和学术专著：<br />
              <em>The Primacy of Theoretical Foundations: Why Textbooks and Monographs Matter more than Journal Literature in Scientific Progress</em> (September 09, 2025). Available at SSRN: https://ssrn.com/abstract=5465615<br />
              结果导致主流科学家的理论水平极低，低级错误被当作创新在SCI刊物上广泛流传、引用：<br />
              <em>The Theoretical Poverty of Modern Academia: Evidence of Widespread Intellectual Decline in Contemporary Scientific Research</em> (September 05, 2025). Available at SSRN: https://ssrn.com/abstract=5463155<br />
              实际上，教材中的是人类最深入研究的成就，现代期刊的理论几乎没有资格进入教材”
            </p>
          </div>
          <div className="bg-indigo-50/50 border border-indigo-200 rounded-xl p-4 space-y-2">
            <span className="text-xs font-mono font-bold text-indigo-700 uppercase">English Translation</span>
            <p className="text-xs md:text-sm text-slate-800 leading-relaxed">
              “Modern researchers, in order to publish papers, read only journal literature and neglect textbooks and scholarly monographs (SSRN: 5465615). As a result, the theoretical literacy of mainstream scientists has plummeted, and elementary errors are widely circulated and cited as ‘innovations’ in SCI journals (SSRN: 5463155). In reality, what is contained in textbooks represents humanity’s most deeply researched achievements; the theories in modern journals are barely qualified to enter textbooks.”
            </p>
          </div>
        </div>
      </section>

      {/* Record 4: Replies [547] & [548] - Einstein's Miracle Year, Peer Review, and Stagnation of Physics */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold font-mono text-sm shrink-0">
            04
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-sans tracking-tight m-0">
            Blocked Replies [547] &amp; [548]: Peer Review, Newton’s Era, and Why Physics Has Stagnated Since 1973
          </h2>
        </div>

        <p className="text-xs font-mono text-slate-500">
          <strong>Thread:</strong> 爱因斯坦奇迹年的5篇论文经过同行评议了吗？ • <strong>Replying to:</strong> 蒋大和 (2026-11-4 00:18 &amp; 00:25)
        </p>

        <div className="bg-white p-3 rounded-xl border border-slate-200">
          <img
            src="/assets/aistudio/image_7171dcee.png"
            alt="Screenshot of blocked replies 547 and 548 on peer review and stagnation of physics"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">Original Chinese ([547] &amp; [548])</span>
            <p className="text-xs md:text-sm text-slate-800 leading-relaxed">
              <strong>[547]:</strong> “只有思想交锋才会有创新。现代SCI期刊自持是‘严格评审的期刊’，把发表当成果，结果垃圾文章泛滥，鲜有创新。几十年后再回头看这个时代，就是一个垃圾泛滥的时代。根据马斯克的观点，99.99%的SCI文章是垃圾。论文改到崩溃，作者‘怒怼’审稿人，没想到怼人回复竟发了SCI”<br />
              <em>(Citing SSRN 5720702 &amp; “The Hypothetical Elimination of Science and Nature Journals”, yueliusd.substack.com)</em><br /><br />
              <strong>[548]:</strong> “牛顿时代，没有同行评议，产生了多少伟大的学科理论。现代有同行评议，为什么科学反而停滞了？”<br />
              <em>(Citing Liu, Yue, “Why Has Physics Come to a Standstill? The Case of Microwave Absorption Theory and the State of Scientific Progress”, 2025, yueliusd.substack.com &amp; YouTube: https://www.youtube.com/watch?v=hda0_31_dyc — “Why has there been no progress in physics since 1973?”)</em>
            </p>
          </div>
          <div className="bg-indigo-50/50 border border-indigo-200 rounded-xl p-4 space-y-2">
            <span className="text-xs font-mono font-bold text-indigo-700 uppercase">English Translation ([547] &amp; [548])</span>
            <p className="text-xs md:text-sm text-slate-800 leading-relaxed">
              <strong>[547]:</strong> “Only the clash of ideas produces innovation. Modern SCI journals pride themselves on being ‘rigorously peer-reviewed journals’ and treat publication itself as an achievement; the result is a flood of junk papers and scarcely any genuine innovation. Looking back at this era decades from now, it will be seen as an age overflowing with academic garbage. According to Elon Musk’s view, 99.99% of SCI articles are garbage.”<br /><br />
              <strong>[548]:</strong> “In Newton’s era, there was no peer review, yet how many great foundational theories were born! In the modern era, we have peer review—so why has science stagnated instead?”
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
