import React, { useState } from "react";
import { Award, BookOpen, CheckCircle2, Copy, FileText, Share2, Sparkles, AlertTriangle, ShieldAlert, Ban, MessageSquare, Search, BookMarked } from "lucide-react";

interface ScriptSegment {
  time: string;
  cn: string;
  en: string;
}

export default function AuthorityParadoxEssay() {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyText = () => {
    const el = document.getElementById("authority-article-text");
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const scriptSegments: ScriptSegment[] = [
    {
      time: "00:00:00 - 00:00:05",
      cn: "1981年澳大利亚珀斯皇家医院的一间小实验室里，病理学家罗宾·沃伦已经独自做了很久。",
      en: "In 1981, in a small laboratory at the Royal Perth Hospital in Perth, Australia, pathologist Robin Warren had been working in isolation for a very long time."
    },
    {
      time: "00:00:05 - 00:00:09",
      cn: "他非说自己在胃粘膜标本里看到了一种歪歪扭扭的蓝色细菌。",
      en: "He stubbornly insisted that he could see a curved, twisted blue bacterium inside gastric mucosal biopsy specimens."
    },
    {
      time: "00:00:09 - 00:00:14",
      cn: "胃里是强酸，教科书白纸黑字写着不可能有活菌。",
      en: "The stomach contains highly concentrated acid; medical textbooks stated in black and white that no live bacteria could ever survive there."
    },
    {
      time: "00:00:14 - 00:00:17",
      cn: "没有人跟他争辩，大家只是礼貌地点头，然后换个方向走开。",
      en: "No one bothered to argue with him. Peers merely nodded with polite condescension, then turned and walked away."
    },
    {
      time: "00:00:17 - 00:00:21",
      cn: "直到一个刚轮转过来的实习医生推开了他办公室的门。",
      en: "Until a junior resident doctor, newly rotated into his department, pushed open the door of his office."
    },
    {
      time: "00:00:21 - 00:00:26",
      cn: "这个年轻人叫巴里·马歇尔，三十岁出头，一脸什么都不怕的莽撞劲儿。",
      en: "This young man was Barry Marshall—in his early thirties, possessing a reckless demeanor that feared absolutely nothing."
    },
    {
      time: "00:00:27 - 00:00:29",
      cn: "沃伦把标本推到显微镜下。",
      en: "Warren pushed the specimen plate directly under the lens of the microscope."
    },
    {
      time: "00:00:29 - 00:00:33",
      cn: "马歇尔凑过去看了一眼，没有扭头走掉，而是说了句让沃伦等了太久的话：",
      en: "Marshall leaned in and took a look. Instead of turning away in disbelief, he uttered the very words Warren had been waiting a lifetime to hear:"
    },
    {
      time: "00:00:34 - 00:00:37",
      cn: "“这要是真的，整个消化科的教科书都得重写。”",
      en: "'If this is true, the entire textbook of gastroenterology will have to be completely rewritten.'"
    },
    {
      time: "00:00:37 - 00:00:42",
      cn: "两人一拍即合，从胃溃疡病人的活检样本里反复分离这种细菌。",
      en: "The two hit it off instantly, embarking on a relentless campaign to isolate this bacterium from the stomach tissue of ulcer patients."
    },
    {
      time: "00:00:42 - 00:00:45",
      cn: "常规培养四十八小时无菌生长就扔掉，这是实验室的铁规矩。",
      en: "Discarding cultures after exactly forty-eight hours if no microbial growth was observed—this was the laboratory's ironclad rule."
    },
    {
      time: "00:00:46 - 00:00:49",
      cn: "转机出现在1982年的复活节假期，一摞废弃的培养品被遗忘在角落的托盘里，没人记得去倒。",
      en: "The turning point came during the Easter holiday of 1982, when a stack of discarded culture plates was forgotten on a tray in the corner, with no one remembering to dump them."
    },
    {
      time: "00:00:53 - 00:00:59",
      cn: "五天后，他们回来打开瓶盖的一瞬间，那些歪歪扭扭的菌落终于密密麻麻地铺满了介质表面。",
      en: "Five days later, the moment they returned and opened the lids, those curved colonies had finally spread densely across the surface of the agar."
    },
    {
      time: "00:01:00 - 00:01:03",
      cn: "它不是在胃酸里活不下来，它只是长得慢，比谁都有耐心。",
      en: "It wasn't that the organism couldn't survive in gastric acid; it was simply slow-growing—more patient than anyone else."
    },
    {
      time: "00:01:03 - 00:01:06",
      cn: "马歇尔后来在笔记里写道：“那天我明白了——”",
      en: "Marshall later recorded in his private journal: 'On that historic day, I realized—'"
    },
    {
      time: "00:01:06 - 00:01:10",
      cn: "“有些东西需要用命去等，有些东西需要用命去证。”",
      en: "'Some things require a lifetime of waiting, while other things demand that you put your life on the line to prove them.'"
    },
    {
      time: "00:01:10 - 00:01:14",
      cn: "他们把这个发现写成论文，投出去，被退回来，再投，再退。",
      en: "They drafted their revolutionary discovery into a manuscript and submitted it—only to be rejected, resubmitted, and summarily rejected again."
    },
    {
      time: "00:01:14 - 00:01:18",
      cn: "1983年的国际胃肠病学会上，马歇尔站上讲台，还没来得及把数据放完，笑声和嘘声就响起来了。",
      en: "At the 1983 international gastroenterology conference, Marshall stood at the podium. Before he could even finish displaying his slides, mocking laughter and loud jeers erupted from the audience."
    },
    {
      time: "00:01:21 - 00:01:24",
      cn: "一位权威当场用“无稽之谈”来评价他们的发现。",
      en: "An established mainstream authority on the spot dismissed their paradigm-shifting findings as 'utter nonsense.'"
    },
    {
      time: "00:01:25 - 00:01:28",
      cn: "动物实验的结果也让情况雪上加霜，小鼠的胃无论怎么接种都留不下来。",
      en: "Animal testing only worsened their plight; no matter how they inoculated the mice, the human pathogen failed to colonize their stomachs."
    },
    {
      time: "00:01:28 - 00:01:32",
      cn: "他没有时间等更好的实验设计，也没有力气再跟每一个嘲笑他的人重复解释了。",
      en: "He lacked the time to wait for a perfect experimental design, and lacked the physical energy to repeat explanations to every mocking skeptic."
    },
    {
      time: "00:01:35 - 00:01:41",
      cn: "1984年7月，他把自己关在实验室里，从病人的胃黏膜里分离出一株纯培养的幽门螺杆菌。",
      en: "In July 1984, he locked himself in his laboratory and isolated a pure culture of Helicobacter pylori taken directly from a patient's inflamed stomach lining."
    },
    {
      time: "00:01:41 - 00:01:45",
      cn: "倒进一碗牛肉汤，在培养基里搅了搅 抖起来，灌进了自己的喉咙。",
      en: "He poured the bacterial solution into a bowl of beef broth, stirred it thoroughly, and gulped the entire concoction down his throat."
    },
    {
      time: "00:01:45 - 00:01:51",
      cn: "那味道他后来只说了一句：“像放了一个月烂掉的鸡蛋和臭肉搅在一起。”",
      en: "Of the taste, he later remarked dryly: 'It was like a rotten egg and spoiled meat left for a month blended together.'"
    },
    {
      time: "00:01:51 - 00:01:54",
      cn: "喝下去的第三天，肠胃安静得可以。",
      en: "On the third day following ingestion, his digestive tract remained deceptively quiet."
    },
    {
      time: "00:01:54 - 00:01:59",
      cn: "第五天凌晨，他被腹部一阵痉挛从床上抓了起来，冲进卫生间狂呕吐不止。",
      en: "In the early hours of the fifth day, he was violently awakened by sudden abdominal spasms and rushed to the bathroom, vomiting uncontrollably."
    },
    {
      time: "00:01:59 - 00:02:02",
      cn: "他妈妈后来来看他，一进门就闻到了一股无法描述的气味，她说那像是死人的味道。",
      en: "When his mother visited him, she detected an indescribable odor the moment she entered, describing it as smelling of death itself."
    },
    {
      time: "00:02:05 - 00:02:09",
      cn: "妻子让他去沙发睡，他抱着被子躺在客厅里，捂着肚子，忽然笑出了声。",
      en: "Banished by his wife to sleep on the sofa, he lay in the living room clutching his blanket, holding his aching stomach, and suddenly broke into a triumphant laugh."
    },
    {
      time: "00:02:12 - 00:02:13",
      cn: "感染成功了。",
      en: "The infection was a resounding success."
    },
    {
      time: "00:02:13 - 00:02:17",
      cn: "第十天，同事把胃镜从他喉咙里推了进去，屏幕上那片曾经粉嫩光滑的胃黏膜已经肿得通红。",
      en: "On the tenth day, a colleague pushed an endoscope down his throat. On the monitor, his once pink, smooth stomach lining was severely swollen and red."
    },
    {
      time: "00:02:21 - 00:02:25",
      cn: "布满了密密麻麻的糜烂和渗血，像一块被扯破的丝绸。",
      en: "It was densely carpeted with micro-erosions and active bleeding, resembling a piece of violently shredded silk."
    },
    {
      time: "00:02:25 - 00:02:29",
      cn: "幽门螺杆菌阳性胃炎急性发作。他从一个健康人变成了一例教科书级别的胃病患者。",
      en: "Acute Helicobacter pylori-positive gastritis. He had transformed from a perfectly healthy individual into a textbook-level gastric case."
    },
    {
      time: "00:02:29 - 00:02:34",
      cn: "但那是他一生中最得意的一个早晨。",
      en: "Yet, that was undisputed as the single most satisfying morning of his life."
    },
    {
      time: "00:02:34 - 00:02:36",
      cn: "他立刻开始服用抗生素。",
      en: "He immediately commenced an aggressive regimen of broad-spectrum antibiotics."
    },
    {
      time: "00:02:36 - 00:02:39",
      cn: "两周之后再做胃镜，胃壁光滑如初。",
      en: "Two weeks later, a follow-up endoscopy revealed that his gastric wall was completely pristine once again."
    },
    {
      time: "00:02:39 - 00:02:44",
      cn: "病理切片显示菌群完全消失，这意味着那些被切掉半个胃、在消化科病房里辗转几十年的老病号，只需要几块钱的抗生素就能彻底治愈。",
      en: "Pathological slices showed the bacteria had been completely eradicated. This meant that patients who routinely underwent partial gastrectomies and suffered in hospital wards for decades could be cured for mere pennies with simple antibiotics."
    },
    {
      time: "00:02:49 - 00:02:53",
      cn: "可即便他把实验数据、胃镜照片和病理报告全部摊开，医学界的沉默和冷笑仍然比回应更多。",
      en: "But even when he laid out the experimental raw data, endoscopy slides, and pathology reports, the medical establishment responded with icy silence and dismissive sneers rather than validation."
    },
    {
      time: "00:02:57 - 00:03:01",
      cn: "制药公司的说客们依旧在各大医院派发抗酸剂的宣传册，手术室里，胃切除手术仍旧排得满满当当。",
      en: "Pharmaceutical lobbyists continued to flood clinics with glossy antacid brochures, and operating rooms remained packed with high-revenue stomach-removal surgeries."
    },
    {
      time: "00:03:04 - 00:03:08",
      cn: "马歇尔没有时间耗在学术圈缓慢的自我修正里，他拿起电话簿开始给每一个愿意接电话的医生打过去，飞奔美国和欧洲。",
      en: "Realizing he had no time to waste on the glacial pace of academic self-correction, Marshall picked up the telephone book, called every clinic willing to answer, and traveled across the US and Europe."
    },
    {
      time: "00:03:12 - 00:03:17",
      cn: "在任何一间借来的会议室里讲课，他把自己的论文复印成传单，塞进会议资料袋的夹缝里，像一个穿着白大褂的推销员。",
      en: "Lecturing in any borrowed seminar room, he photocopied his research papers into flyers and stuffed them into conference folders like an itinerant door-to-door salesman in a white coat."
    },
    {
      time: "00:03:21 - 00:03:24",
      cn: "10年后，1994年，美国国立卫生研究院终于正式将幽门螺杆菌列为消化系统溃疡的首要致病因子。",
      en: "Ten years later, in 1994, the US National Institutes of Health (NIH) finally formally designated Helicobacter pylori as the primary cause of peptic ulcers."
    },
    {
      time: "00:03:28 - 00:03:32",
      cn: "4年后，全球治疗指南改写，胃切除手术量断崖式下跌。",
      en: "Four years after that, global clinical guidelines were rewritten, and the rate of gastrectomies crashed off a cliff."
    },
    {
      time: "00:03:33 - 00:03:37",
      cn: "2005年10月，马歇尔和沃伦共同获得诺贝尔生理学或医学奖。",
      en: "In October 2005, Marshall and Warren were jointly awarded the Nobel Prize in Physiology or Medicine."
    },
    {
      time: "00:03:37 - 00:03:41",
      cn: "颁奖词里用了“固执”这个词，但用的是感激的语气。",
      en: "The Nobel citation explicitly used the term 'obstinate'—but spoke it in a tone of eternal, humbled gratitude."
    },
    {
      time: "00:03:41 - 00:03:44",
      cn: "后来有人问他：喝下去的那一刻怕死吗？",
      en: "Later, an interviewer asked him: 'Weren't you terrified of dying at the very moment you swallowed that culture?'"
    },
    {
      time: "00:03:44 - 00:03:47",
      cn: "他说：“我想过最坏的结果是胃癌，但那需要20年。我有时间去证明，也有时间被证明是错的。”",
      en: "He replied: 'I reasoned that the absolute worst-case scenario was stomach cancer, but that would take twenty years. I had time to prove I was right, or time to be proven wrong.'"
    },
    {
      time: "00:03:48 - 00:03:54",
      cn: "“跟20年的沉默相比，疼几天算什么呢？”",
      en: "'Compared to twenty years of conspiratorial academic silence, what is a few days of gut-wrenching pain?'"
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-8 text-slate-100" id="authority-article-text">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-rose-500/10 text-rose-400 border border-rose-500/30 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Historical Whistleblower Treatise
          </span>
          <span className="bg-slate-800 text-slate-400 text-xs px-2.5 py-1 rounded-full font-mono font-medium">
            ESSAY AI (The Marshall-Warren Case Study & Academic Authority Trap)
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          The Helicobacter Pylori Paradigm and Academic Authority:
          <span className="block text-rose-400 text-xl md:text-2xl mt-2 font-normal font-sans">
            How Mainstream Gatekeepers Silence Reformers while Pretending Truth is "Polite and Evolutionary"
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-slate-800 pb-4">
          <div>
            Theoretical & Historical Treatise by <span className="font-bold text-slate-200">Dr. Yue Liu</span>
          </div>
          <div>•</div>
          <div>Academic Integrity Series</div>
          <div>•</div>
          <div className="font-mono text-rose-400 font-semibold">Lecture 6: Mainstream Obstruction & Systematic Censorship</div>
        </div>
      </div>

      {/* Reviewer / Preprint Controversy Box */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-slate-950 border-l-4 border-rose-500 p-5 rounded-r-xl space-y-3">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-rose-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 font-sans">The Mainstream Defensive Posture (Reviewer Feedback)</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-mono">
            <span className="text-slate-400 font-bold">Reviewer Statement (Qeios DOI: 10.32388/5FRZHG):</span><br />
            "While you are demanding that journal papers are wrong, a thorough case study is required. Moreover, the word “research” itself signifies that facts are re-searching. Therefore, every research is relatively correct or wrong according to the era. The writing flow of the manuscript should be more polite and professional."
          </p>
          <p className="text-xs text-slate-400 italic">
            → The classic defense mechanism: Rebranding systemic error as "just research re-searching in its era," and demanding "polite" language to sanitize the cover-up of objective mathematical truths.
          </p>
        </div>

        <div className="bg-slate-950 border-l-4 border-cyan-500 p-5 rounded-r-xl space-y-3">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-sans">The 90% Falsehood Reality (Nobel Endorsement)</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-mono">
            <span className="text-slate-400 font-bold">Nobel Laureate Tasuku Honjo (本庶佑) Quotation:</span><br />
            "According to Nobel laureate Honjo Tasuku, 90% of the views published by top magazines like Cell, Nature, and Science (CNS) are wrong. I do not support the claim that 90% of journal articles are false... but as I said before, I see this sentence as an exaggerated formulation to alert young researchers..."
          </p>
          <p className="text-xs text-slate-400 italic">
            → Mainstream buffers attempt to dilute this Nobel warning as "mere exaggeration to alert youth." In truth, it is an empirical, structural description of peer-reviewed consensus: highly polished, fashionably peer-reviewed error.
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="space-y-4 font-serif text-sm md:text-base text-slate-300 leading-relaxed">
        <h2 className="text-lg md:text-xl font-bold text-white font-sans flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-rose-400 font-mono">I.</span> The Systematic Erasure of Scientific Dissent (Censorship under ScienceNet)
        </h2>
        <p>
          History has repeatedly and brutally demonstrated that mainstream academic authorities do not act as the guardians of truth; instead, they are the single most formidable obstacle to genuine scientific progress. 
          When a grassroots researcher discovers a fatal error in textbook definitions—such as the massive structural errors in crystal interplanar spacing formulations or the misinterpretations of the Gibbs-Duhem equation—the mainstream response is never open debate. 
          It is first, cold silence; and second, systematic annihilation of the researcher’s public presence.
        </p>
        <p>
          In modern scientific platforms (such as the censorship experienced on ScienceNet/科学网), any attempt to expose the logical flaws of established academic cartels results in the immediate termination of the whistleblower's account. 
          The justification offered by the administrators is a masterpiece of intellectual hypocrisy: they assert that "peer-review errors are merely isolated, individual cases (个别现象)." 
          And yet, by banning the accounts of whistleblowers, they reveal the ultimate authoritarian paradox: <strong>they claim errors are merely individual anomalies, yet they strictly forbid anyone from speaking about these anomalies!</strong>
        </p>
        <p>
          They demand that your manuscript's writing flow be "polite and professional." They ask you to genuflect before the "period-relative" correctness of outdated studies. 
          But how can one be polite when the establishment is committing intellectual homicide, burying correct mathematical proof under a mountain of paper-mania, and denying the public the fruits of true scientific breakthrough?
        </p>
      </div>

      {/* Video Script Display Panel */}
      <div className="space-y-6">
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white font-sans flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-rose-400 animate-pulse" />
                Lecture 6 Video Transcript: The Barry Marshall Sacrifice
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Bilingual script documenting the historical obstruction of Helicobacter pylori by the medical cartel.
              </p>
            </div>
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition duration-200 cursor-pointer shadow-sm"
              id="copy-authority-script-btn"
            >
              <Copy className="w-3.5 h-3.5" />
              {copySuccess ? "Copied!" : "Copy Full Bilingual Script"}
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950 max-h-[550px] overflow-y-auto custom-scrollbar" id="authority-script-scroll-box">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-[10px] md:text-xs font-bold text-slate-300 font-sans tracking-wider uppercase">
                <th className="p-3 w-20 md:w-28 border-r border-slate-800">Timestamp</th>
                <th className="p-3 w-1/2 border-r border-slate-800">Chinese Lecture Transcript (第六讲：中文视频脚本)</th>
                <th className="p-3 w-1/2">Professional English Translation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs md:text-sm">
              {scriptSegments.map((segment, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition" id={`authority-segment-row-${idx}`}>
                  <td className="p-3 font-mono text-[10px] text-rose-400 font-semibold align-top border-r border-slate-800 bg-slate-950/80">
                    {segment.time}
                  </td>
                  <td className="p-3 text-slate-300 font-sans font-medium leading-relaxed align-top border-r border-slate-800">
                    {segment.cn}
                  </td>
                  <td className="p-3 text-slate-200 italic leading-relaxed align-top">
                    {segment.en}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 2 */}
      <div className="space-y-4 font-serif text-sm md:text-base text-slate-300 leading-relaxed">
        <h2 className="text-lg md:text-xl font-bold text-white font-sans flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-rose-400 font-mono">II.</span> Analysis of the Obstruction: 20 Years of Silence vs. Real-world Sacrifice
        </h2>
        <p>
          The saga of Warren and Marshall is not a historic anomaly; it is a textbook illustration of how peer-reviewed science actually functions under a gatekept cartel. 
          In 1981, when Warren saw the spiral bacteria on gastric mucosa and the textbooks claimed no life could exist in acid, his peers didn't even argue. 
          They simply smiled, nodded, and walked away. 
          This is what Dr. Yue Liu defines as the <strong>"Golden Silence"</strong>—the most devastating tool in the academic arsenal. 
          Mainstream experts will not review your corrections; they will not write counter-arguments. 
          They will simply act as if your work does not exist, safe in the knowledge that their high-impact CNS publications shield them from accountability.
        </p>
        <p>
          When Marshall finally ran out of energy trying to explain his work to people who only laughed and jeered, he took the ultimate risk: he drank the Helicobacter pylori culture himself. 
          He became a patient to prove the textbook wrong. 
          But even after showing them the inflamed, bleeding endoscopic pictures, the medical establishment remained silent. 
          Why? Because gastrectomies and expensive antacid medications were a highly profitable business model for both hospital operating rooms and pharmaceutical giants.
        </p>
        <p>
          This is the materialist truth of modern "consensual science." 
          It has nothing to do with objective physical laws, and everything to do with institutional power, career security, and commercial monopolies. 
          Marshall and Warren waited twenty years to be vindicated by a Nobel Prize, while millions of patients worldwide suffered unnecessary surgeries and painful ulcers. 
          How many other mathematical and physical corrections are today being silenced by the same mechanism?
        </p>
      </div>

      {/* Structural Comparison: Consensus vs Whistleblower */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-950 border border-red-900/40 p-5 rounded-xl space-y-2" id="authority-consensus-card">
          <div className="flex items-center gap-2 text-rose-400 font-bold font-sans text-xs uppercase tracking-wider">
            <Ban className="w-4 h-4 text-rose-400" />
            The Consensual Mainstream Cartel
          </div>
          <p className="text-xs text-slate-300 font-serif leading-relaxed">
            - <strong>Censorship Policy</strong>: "Your paper threatens established authorities. Delete your blog. Shut down your account. Silence your speech."<br />
            - <strong>The 'Individual Case' Escape</strong>: Claims all errors in top journals are isolated mistakes, yet blocks any public discussion of those specific mistakes to maintain the illusion of prestige.<br />
            - <strong>Politeness Mandate</strong>: Demands a polite and subservient tone from whistleblowers, treating structural corrections as a social offense rather than a quest for objective physical truth.
          </p>
        </div>
        <div className="bg-slate-950 border border-emerald-900/40 p-5 rounded-xl space-y-2" id="authority-reform-card">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-sans text-xs uppercase tracking-wider">
            <Award className="w-4 h-4 text-emerald-400" />
            The Peer-Reviewed Truth Seekers
          </div>
          <p className="text-xs text-slate-300 font-serif leading-relaxed">
            - <strong>"Is it a Mule or a Horse?"</strong>: Real-world empirical demonstration. Marshall did not wait for the academic committee's polite permission—he drank the pathogen.<br />
            - <strong>Tasuku Honjo’s Warning</strong>: 90% of views published in CNS are wrong. Do not blind-faith follow modern academic "superstition" or journal aristocracy.<br />
            - <strong>Durable Academic Integrity</strong>: If a paper contains mathematical or physical truth, it is golden. If it does not, no amount of editorial prestige or politeness can make it correct.
          </p>
        </div>
      </div>

      {/* Concluding Box */}
      <div className="bg-slate-900/60 border border-rose-500/20 p-6 rounded-xl space-y-3" id="authority-final-verdict-box">
        <h4 className="text-sm font-bold text-white font-sans flex items-center gap-1.5">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          The Final Verdict of Lecture 6
        </h4>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-serif">
          The message of this lecture is simple and uncompromising: <strong>To hell with academic gatekeepers and their self-serving censorship policies.</strong> 
          If our work is gold, it will shine under the brightest sun. If you think Yue Liu's mathematical proofs or Warren-Marshall's biological findings are incorrect, do not hide behind platform bans, silent treatment, or tone-policing. 
          Step out, write a formal refutation, and present your evidence in the public arena. 
          If you lack the courage to face open public scrutiny, then your "prestigious journals" are nothing but high-society brochures, and your academic titles are mere costume jewelry. 
          Truth is not an evolutionary compromise where facts are "re-searching relatively according to the era"—it is an uncompromising description of the physical universe, and we will defend it with every breath we take.
        </p>
      </div>
    </div>
  );
}
