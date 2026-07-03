import React, { useState } from "react";
import { Award, BookOpen, CheckCircle2, Copy, FileText, Share2, Sparkles, AlertTriangle, ShieldCheck, Scale, Users, Users2, HelpCircle } from "lucide-react";

interface ScriptSegment {
  time: string;
  cn: string;
  en: string;
}

export default function CollectiveSupremacyEssay() {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyText = () => {
    const el = document.getElementById("collectivesupremacy-article-text");
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const scriptSegments: ScriptSegment[] = [
    {
      time: "00:00:00 - 00:00:03",
      cn: "1992年3月23日，德国弗赖堡，一栋不起眼的民居里，一群学生围在一位老人的床前。",
      en: "On March 23, 1992, in an unremarkable house in Freiburg, Germany, a group of students gathered around an elderly man's bed."
    },
    {
      time: "00:00:03 - 00:00:14",
      cn: "老人刚从床上挣扎着坐起来，喘着粗气，叫儿子把他这辈子写的书全搬了出来。",
      en: "The old man struggled to sit up, gasping for breath, and asked his son to bring out all the books he had written in his lifetime."
    },
    {
      time: "00:00:14 - 00:00:23",
      cn: "他一页一页地翻，一本一本的递到来探望的学生手里。",
      en: "He turned them page by page, handing them one by one to the visiting students."
    },
    {
      time: "00:00:24 - 00:00:28",
      cn: "忽然开口说了一句话，让整个屋子彻底安静下来：",
      en: "Suddenly, he spoke a sentence that brought absolute silence to the entire room:"
    },
    {
      time: "00:00:29 - 00:00:40",
      cn: "“凯恩斯被我搞死了，缪尔达尔也被我搞死了，康德拉杰夫甚至在书里被我严重的揭露，最后落得个悲惨的下场。我跟计划经济斗了一辈子——”",
      en: "'Keynes was dismantled by me, Myrdal was dismantled by me, and Kondratiev was so severely exposed in my writings that he met a tragic end. I have fought against the planned economy my entire life—'"
    },
    {
      time: "00:00:40 - 00:00:47",
      cn: "“你们知道我写出的最精华的东西是什么吗？”这个老人叫哈耶克，而这一天是他生命里的最后一天。",
      en: "'Do you know what the absolute essence of my writings is?' This old man was Friedrich Hayek, and this day was the final day of his life."
    },
    {
      time: "00:00:53 - 00:01:03",
      cn: "屋里静得只剩翻书和咳嗽的声音。等了很久，没有人敢接话。哈耶克自己沙哑地开了口，像是自言自语：",
      en: "The room fell so quiet that only the sound of rustling pages and dry coughing remained. After a long wait, no one dared to respond. Hayek himself spoke in a hoarse voice, as if talking to himself:"
    },
    {
      time: "00:01:03 - 00:01:12",
      cn: "“记住这一点：当权力以正义之名行垄断资源分配时，贫穷就会披着道德的外衣降临。”",
      en: "'Remember this: when power, in the name of justice, monopolizes the distribution of resources, poverty descends under the guise of morality.'"
    },
    {
      time: "00:01:12 - 00:01:18",
      cn: "“如果制度无法制约那些汲取财富的人，繁荣终将崩塌。”",
      en: "'If institutions cannot restrain those who extract wealth, prosperity will eventually collapse.'"
    },
    {
      time: "00:01:18 - 00:01:24",
      cn: "“任何让分配权凌驾于创造力之上的制度都注定被淘汰。”",
      en: "'Any system that allows allocative power to overrule creativity is destined to be phased out.'"
    },
    {
      time: "00:01:24 - 00:01:29",
      cn: "“因为人类进步的真正动力，永远只属于那些创造价值的人。”",
      en: "'Because the true driving force of human progress always belongs exclusively to those who create actual value.'"
    },
    {
      time: "00:01:30 - 00:01:38",
      cn: "话音刚落，在场的人恍然大悟。可他们还没来得及说出口，哈耶克已经永远闭上了眼睛。",
      en: "As soon as the words fell, those present suddenly understood. But before they could speak, Hayek had closed his eyes forever."
    },
    {
      time: "00:01:38 - 00:01:48",
      cn: "这个诺奖得主一辈子只向人们证明一件事：人类的繁荣来自于自由主义，而不是集体主义。",
      en: "This Nobel laureate spent his entire life proving just one thing: human prosperity comes from liberalism and individual liberty, never from collectivism."
    },
    {
      time: "00:01:48 - 00:01:59",
      cn: "哈耶克年轻的时候，欧洲正剧烈震荡。一战让旧秩序碎了一地，新技术让人越来越狂妄，信奉乌托邦的精英们痛骂资本主义，幻想着用科学主义建造人间天堂。",
      en: "When Hayek was young, Europe was in violent turmoil. WWI had shattered the old order, and new technologies made people increasingly arrogant. Elite believers in utopianism cursed capitalism, dreaming of building a heaven on earth using scientism."
    },
    {
      time: "00:02:04 - 00:02:13",
      cn: "大萧条以来，苏联的威权神话反而成了香饽饽。那时候的哈耶克考入维也纳大学，本来是个温和的社会主义者。他很幸运遇上了奥地利学派的米塞斯，读完那本《社会主义》，哈耶克整个人被击穿了。",
      en: "Since the Great Depression, the authoritarian myth of the Soviet Union had become highly popular. The young Hayek, entering the University of Vienna, was originally a mild socialist. Fortunately, he encountered Ludwig von Mises of the Austrian School. After reading Mises' 'Socialism', Hayek was completely transformed."
    },
    {
      time: "00:02:22 - 00:02:29",
      cn: "他开始反思那些听起来极其美好的计划和许诺真的能实现吗？他心里有了答案，但说出来没几个人信。",
      en: "He began to reflect: can those beautiful plans and promises really be realized? He had the answer in his heart, but very few believed him when he spoke it."
    },
    {
      time: "00:02:29 - 00:02:37",
      cn: "经济大萧条时期，哈耶克站出来发起论战，他说：用货币和财政刺激经济，说白了就是饮鸩止渴。",
      en: "During the Great Depression, Hayek stood up to launch a great debate. He argued: stimulating the economy with monetary and fiscal expansion is, frankly, drinking poison to quench thirst."
    },
    {
      time: "00:02:37 - 00:02:49",
      cn: "“因为它扭曲真实的消费需求，把资本误导到上游。等虚假消费膨胀到耗光储蓄，就只能继续降息印钞，恶性循环拉满通货膨胀，最终引爆大萧条。”",
      en: "'Because it distorts real consumer demand, misleading capital into upstream malinvestments. When artificial consumption expands and drains real savings, they can only keep lowering rates and printing money, maxing out the vicious cycle of inflation and ultimately triggering a deeper depression.'"
    },
    {
      time: "00:02:59 - 00:03:07",
      cn: "可当时没人在意这番话，全世界只觉得他在胡言乱语。即便如此，他从没放弃过信念。",
      en: "Yet at the time, no one paid attention to these words; the world thought he was talking nonsense. Even so, he never abandoned his convictions."
    },
    {
      time: "00:03:07 - 00:03:18",
      cn: "时间来到1974年12月，瑞典诺贝尔奖颁奖典礼。哈耶克站上领奖台，当着全球各路大咖的面直接开喷，他喷的不是别人，正是给他颁奖的诺奖评委会。",
      en: "Time moved to December 1974, at the Nobel Prize ceremony in Sweden. Standing at the podium in front of global dignitaries, Hayek directly unleashed his criticism—targeting none other than the Nobel Committee itself."
    },
    {
      time: "00:03:19 - 00:03:34",
      cn: "他说设立诺贝尔经济学奖这件事本身就是个天大的错误。因为一旦有了这个奖，大多数经济学家满脑子就只想着怎么拿奖，完全忘了自己真正该干什么。",
      en: "He stated that the very establishment of the Nobel Prize in Economics was a colossal mistake. Because once this prize existed, most economists would think only of how to win it, completely forgetting their true scientific duties."
    },
    {
      time: "00:03:34 - 00:03:46",
      cn: "更让人没想到的是，他话说得再难听，底下坐着的诺奖评委们愣是大气都不敢出。事实上，这不是他第一次公开怼人，圈子里叫他“第一喷子”真不是白叫的。",
      en: "What was even more remarkable was that no matter how harsh his words were, the Nobel judges sitting below didn't dare to utter a peep. Indeed, this wasn't his first public challenge; his reputation as academia's premier critic was well-earned."
    },
    {
      time: "00:03:50 - 00:04:00",
      cn: "当时经济学界有句话：没被哈耶克喷过的人，根本没资格称大师。凯恩斯主义红遍全球那会儿，美国靠凯恩斯的指导走出大萧条、攒下财富、打赢二战，就在这种时候，哈耶克偏要当面跟凯恩斯一决雌雄。",
      en: "There was a saying in economics back then: if you haven't been critiqued by Hayek, you have no right to be called a master. When Keynesianism was at its peak—guiding America out of the depression, building wealth, and winning WWII—Hayek insisted on going head-to-head with John Maynard Keynes."
    },
    {
      time: "00:04:14 - 00:04:21",
      cn: "俩人在报纸上打嘴仗，交火激烈到什么程度？后来被人称为经济学界的世界大战。",
      en: "The two engaged in a public war of words in the newspapers. How fierce was the crossfire? It was later dubbed the World War of Economics."
    },
    {
      time: "00:04:21 - 00:04:34",
      cn: "不光是凯恩斯，奥斯卡·兰格、米尔顿·弗里德曼，凡是你能叫上名字的二十世纪经济学流派的掌门人，几乎全被他喷了一遍。而且被喷完之后，他们还必须承认，哈耶克说得非常有道理。",
      en: "Not just Keynes—Oskar Lange, Milton Friedman, and virtually every leader of 20th-century economic schools was subjected to his criticism. And after being critiqued, they had to admit that Hayek made profound sense."
    },
    {
      time: "00:04:41 - 00:04:47",
      cn: "真正让人后背发凉的是80年代末，他的预言一个接一个应验：苏联经济陷入停滞，东欧阵营相继崩溃。",
      en: "What truly sends shivers down one's spine is that in the late 1980s, his predictions came true one after another: the Soviet economy stagnated, and the Eastern Bloc collapsed."
    },
    {
      time: "00:04:51 - 00:04:58",
      cn: "1991年苏维埃帝国轰然倒塌，他书里写过的每一个警示都变成了现实。",
      en: "In 1991, the Soviet empire collapsed overnight. Every warning he had penned turned into historical reality."
    },
    {
      time: "00:04:59 - 00:05:09",
      cn: "当苏联解体的消息传来，这个老人平静地对学生说：“我不是预言家，我只是看清了人性的规律。”",
      en: "When news of the collapse arrived, the old man calmly told his students: 'I am no prophet; I have simply understood the laws of human nature.'"
    },
    {
      time: "00:05:09 - 00:05:13",
      cn: "他花了半个世纪孤独坚守，终于等来了历史的公正判决。",
      en: "He spent half a century in lonely perseverance, finally receiving the just verdict of history."
    },
    {
      time: "00:05:14 - 00:05:23",
      cn: "1992年3月23日，九十三岁的哈耶克安详离世。他留给这个世界四句话，至今还在警醒着人们：",
      en: "On March 23, 1992, the 93-year-old Hayek passed away peacefully. He left the world four warnings that continue to echo today:"
    },
    {
      time: "00:05:23 - 00:05:33",
      cn: "“第一句：金钱是人类发明的最伟大的自由工具。只有金钱才会向穷人开放，而权力永远不会。”",
      en: "'First: Money is one of the greatest instruments of freedom ever invented by man. It is open to the poor, whereas power is never open to them.'"
    },
    {
      time: "00:05:33 - 00:05:41",
      cn: "“第二句：一个富人掌权的国家，远远比一个掌权之后才能成为富人的国家要好得多。”",
      en: "'Second: A country where the wealthy hold power is infinitely better than one where people must acquire power first in order to become wealthy.'"
    },
    {
      time: "00:05:41 - 00:05:49",
      cn: "“第三句：愿意放弃自由来换取保障的人，最终既得不到自由也得不到保障。”",
      en: "'Third: Those who would give up essential liberty to purchase a little temporary safety deserve neither liberty nor safety.'"
    },
    {
      time: "00:05:50 - 00:05:57",
      cn: "“第四句：如果一个人不需要服从任何人，只服从法律，那么他就是自由的。”",
      en: "'Fourth: If a person does not have to obey any individual but only the law, then they are truly free.'"
    },
    {
      time: "00:05:57 - 00:06:04",
      cn: "这个在众人皆醉时独自清醒的思想者，不畏惧孤立，只对真理负责。",
      en: "This thinker, who stayed sober while the crowd was intoxicated, feared no isolation and held himself accountable only to the truth."
    },
    {
      time: "00:06:04 - 00:06:17",
      cn: "当我们在信息解放中度日、在集体狂热中迷失时，哈耶克留下的不仅仅是理论，更是一种勇气——敢于质疑的勇气，坚持独立思考的勇气，相信真理终将显现的勇气。",
      en: "As we live through informational liberation yet get lost in collective hysteria, Hayek leaves us not just a set of theories, but a profound form of courage: the courage to question, to think independently, and to trust that truth will ultimately prevail."
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-8 text-slate-100" id="collectivesupremacy-article-text">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Anti-Collectivism Landmark Treatise
          </span>
          <span className="bg-slate-800 text-slate-400 text-xs px-2.5 py-1 rounded-full font-mono font-medium">
            ESSAY L (The Fallacy of Collective Supremacy & Checks and Balances)
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          The Fallacy of Collective Supremacy:
          <span className="block text-indigo-400 text-xl md:text-2xl mt-2 font-normal font-sans">
            How Teamwork Ideology Undermines Scientific Progress and Why Modern Academia Lacks a Checks and Balances Mechanism
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-slate-800 pb-4">
          <div>
            Theoretical & Philosophical Critique by <span className="font-bold text-slate-200">Dr. Yue Liu</span>
          </div>
          <div>•</div>
          <div>Available on SSRN: <a href="https://ssrn.com/abstract=5664450" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">SSRN 5664450</a></div>
          <div>•</div>
          <div className="font-mono text-indigo-400 font-semibold">Lecture 7: The Myth of Collaboration and Collective Censorship</div>
        </div>
      </div>

      {/* Abstract Box */}
      <div className="bg-slate-950 border-l-4 border-indigo-500 p-5 rounded-r-xl space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-sans">Scholarly Abstract</h3>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-serif italic">
          "Modern scientific institutions heavily promote 'teamwork collaboration' and collective consensus as the supreme methods of inquiry. In this treatise, we mathematically and sociologically debunk this paradigm, demonstrating that teamwork ideology serves as an administrative refuge for mediocrity. High-ranking academic authorities, who often acquire status through superficial publishing metrics rather than genuine physical comprehension, exploit large collaborative teams as shields against criticism. Inside a collective structure, individual accountability vanishes, and the sheer volume of the group is leveraged to suppress whistleblowers. This is particularly evident in the complete absence of any checks and balances mechanism in contemporary academia. When basic, objective errors—such as mistakes in junior-high algebra or undergraduate wave superposition principles—are exposed, the establishment refuses to admit error, offer apologies, or self-correct. Instead, they weaponize collective power to enforce a 'golden silence' and ban dissenting voices. Drawing parallels to Friedrich Hayek’s lifelong struggle against economic collectivism and central planning, we argue that genuine scientific breakthroughs are inherently individualistic. Progress requires the decentralization of academic judgment and the reinstatement of rigorous personal accountability over peer-agreed consensus."
        </p>
      </div>

      {/* Authority Checks & Balances Crisis Highlight */}
      <div className="bg-rose-950/20 border border-rose-900/40 p-5 rounded-xl space-y-3">
        <div className="flex items-center gap-2 text-rose-400">
          <Scale className="w-5 h-5" />
          <h3 className="text-sm font-bold uppercase tracking-wider font-sans">The Core Institutional Diagnosis: Zero Checks & Balances</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-300 font-serif leading-relaxed">
          In any functional civil system, there exists a separation of powers and a checks-and-balances mechanism to prevent absolute tyranny and self-concluding corruption. 
          But in the modern scientific community, <strong>no such mechanism exists</strong>. 
          When an independent researcher exposes a blatant error in a highly-cited textbook or a top-tier journal—errors so elementary they violate junior-high school mathematics or basic undergraduate wave superposition principles—the reaction of the academic establishment is collective stonewalling:
        </p>
        <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pl-2 font-mono">
          <li><span className="text-rose-400">No one cares</span>: Editors and peer-review cartels refuse to process correction manuscripts.</li>
          <li><span className="text-rose-400">No one admits mistakes</span>: The original authors ignore the proofs, relying on their institutional status to maintain their careers.</li>
          <li><span className="text-rose-400">No one apologizes</span>: Whistleblowers who provide unambiguous mathematical corrections are banned from blogs, while the errors continue to be taught to the next generation of students.</li>
        </ul>
        <p className="text-xs text-slate-300 font-serif italic">
          This collective refusal to self-correct exposes the dark core of modern science: it is not a pursuit of objective physical laws, but a self-protecting medieval guild that values consensus and power over mathematical truth.
        </p>
      </div>

      {/* Section 1 */}
      <div className="space-y-4 font-serif text-sm md:text-base text-slate-300 leading-relaxed">
        <h2 className="text-lg md:text-xl font-bold text-white font-sans flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-indigo-400 font-mono">I.</span> Collectivism as a Shield for Theoretical Competence Failure
        </h2>
        <p>
          The contemporary academic doctrine asserts that because modern science has become "too advanced," lone geniuses are a relic of the past, and only large, multi-disciplinary teams can achieve breakthroughs. 
          But as we prove in our SSRN preprint, <i>The Fallacy of Collective Supremacy</i> (SSRN 5664450), this teamwork ideology is a mirage designed to mask a collapse in individual theoretical competence.
        </p>
        <p>
          When an entire scientific discipline stop reading standard classical textbooks and instead feeds on high-impact, peer-reviewed "fast food" publications, their ability to comprehend basic physical principles deteriorates. 
          Inside a massive team, no single individual is solely responsible for the physical validity of the equations. 
          If the foundational theory is later shown to be mathematically false—such as the "impedance matching" theory violating wave superposition—the authors retreat behind the shield of the collective: 
          "Our paper was co-authored by 20 experts, reviewed by 3 journals, and cited 500 times; therefore, it must be correct." 
          The scale of the team is weaponized as an instrument of social intimidation, replacing physical proof with a count of academic heads.
        </p>
      </div>

      {/* Bilingual Video Script Display Panel */}
      <div className="space-y-6">
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white font-sans flex items-center gap-1.5">
                <Users className="w-4 h-4 text-indigo-400 animate-pulse" />
                Lecture 7 Video Transcript: Hayek’s Dying Warning
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Bilingual script illustrating the historic battle between individual liberty and collective resource monopoly.
              </p>
            </div>
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition duration-200 cursor-pointer shadow-sm"
              id="copy-collectivesupremacy-script-btn"
            >
              <Copy className="w-3.5 h-3.5" />
              {copySuccess ? "Copied!" : "Copy Full Bilingual Script"}
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950 max-h-[500px] overflow-y-auto custom-scrollbar" id="collectivesupremacy-script-scroll-box">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-[10px] md:text-xs font-bold text-slate-300 font-sans tracking-wider uppercase">
                <th className="p-3 w-20 md:w-28 border-r border-slate-800">Timestamp</th>
                <th className="p-3 w-1/2 border-r border-slate-800">Chinese Lecture Transcript (第七讲：中文视频脚本)</th>
                <th className="p-3 w-1/2">Professional English Translation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs md:text-sm">
              {scriptSegments.map((segment, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition" id={`collectivesupremacy-segment-row-${idx}`}>
                  <td className="p-3 font-mono text-[10px] text-indigo-400 font-semibold align-top border-r border-slate-800 bg-slate-950/80">
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
          <span className="text-indigo-400 font-mono">II.</span> The Hayek Parallel: Morality-masked Resource Monopolies
        </h2>
        <p>
          The philosophical parallel to this academic decay is found in Friedrich Hayek’s economic treatises. 
          Hayek dedicated his life to demonstrating that when a centralized authority—under the banner of social "justice" or "the collective good"—monopolizes the distribution of resources, it inevitably breeds destruction and poverty. 
          The planning committee believes it can replace the organic, decentralized intelligence of the free market with its own central designs. 
          Similarly, modern scientific funding bodies and "team-science" managers believe they can plan scientific breakthroughs from the top down by assembling massive research cartels.
        </p>
        <p>
          The result is the same: the complete smothering of creative, disruptive individual intelligence. 
          When resource allocation (funding, publication, jobs) is entirely monopolized by mainstream academic oligarchs, the system rewards only those who conform to the established consensus. 
          It incentivizes "academic water-pouring" and safe, incremental studies that never threaten the status of the gatekeepers. 
          As Hayek warned on his deathbed: <i>"Any system that allows allocative power to overrule creativity is destined to be phased out."</i>
        </p>
      </div>

      {/* Conceptual Duality: Planned Consensus vs Individual Rigor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-950 border border-red-900/40 p-5 rounded-xl space-y-2" id="collectivesupremacy-consensus-card">
          <div className="flex items-center gap-2 text-rose-400 font-bold font-sans text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            The Central-Planned Consensus
          </div>
          <p className="text-xs text-slate-300 font-serif leading-relaxed">
            - <strong>Collectivist Supremacy</strong>: Relies on peer-review cartels, co-authorship cartels, and impact metrics to validate claims, shielding authors from direct individual physical responsibility.<br />
            - <strong>Suppression of Critique</strong>: Erases basic, textbook-level corrections of wave superposition to prevent the collapse of the lucrative, consensus-supported "impedance matching" paper mills.<br />
            - <strong>Allocative Overlordship</strong>: Allocates funds and platform access based on elite connections and conformity to the "consensual path," driving out genuine independent innovators.
          </p>
        </div>
        <div className="bg-slate-950 border border-indigo-900/40 p-5 rounded-xl space-y-2" id="collectivesupremacy-individual-card">
          <div className="flex items-center gap-2 text-indigo-400 font-bold font-sans text-xs uppercase tracking-wider">
            <Users2 className="w-4 h-4" />
            The Decentralized Truth Seekers
          </div>
          <p className="text-xs text-slate-300 font-serif leading-relaxed">
            - <strong>Individual Responsibility</strong>: Every equation and proof must stand on its own mathematical merits, independently verifiable by anyone with an undergraduate textbook.<br />
            - <strong>Hayekian Liberty</strong>: Rejects top-down scientific "planning" and "student-centered conformist education," demanding instead raw theoretical competence and open, uncensored debate.<br />
            - <strong>Absolute Physical Reality</strong>: Understands that in the court of physical nature, there are no compromised negotiations; a single individual showing a mathematical error renders a thousand-expert consensus completely worthless.
          </p>
        </div>
      </div>

      {/* Concluding Box */}
      <div className="bg-slate-900/60 border border-indigo-500/20 p-6 rounded-xl space-y-3" id="collectivesupremacy-final-verdict-box">
        <h4 className="text-sm font-bold text-white font-sans flex items-center gap-1.5">
          <Award className="w-4 h-4 text-indigo-400" />
          The Final Verdict of Lecture 7
        </h4>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-serif">
          The ultimate warning of this treatise is a direct challenge to the modern collectivist scientific apparatus: <strong>Without a robust checks and balances mechanism, and without the courage to admit basic mistakes, your scientific community is rotting from within.</strong> 
          You can continue to force researchers into large teams, you can continue to hand out multi-million dollar grants to collaborative cartels, and you can continue to ban independent whistleblowers from your state-controlled blogs. 
          But you cannot rewrite the laws of physics. 
          Your "impedance matching" formulas will still violate wave superposition, and your textbooks will still teach mathematically false definitions. 
          The truth does not care about your teamwork or your elite consensus. 
          As Hayek and Yue Liu have demonstrated, real progress is driven only by those who have the individual courage to stand against the crowd, look at the physical facts, and declare: <i>Let the collective consensus burn, but let the truth prevail.</i>
        </p>
      </div>
    </div>
  );
}
