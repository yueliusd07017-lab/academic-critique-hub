import React, { useState } from "react";
import { Award, BookOpen, CheckCircle2, Copy, FileText, Share2, Sparkles } from "lucide-react";

interface ScriptSegment {
  time: string;
  cn: string;
  en: string;
}

export default function ItifCritiqueEssay() {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyText = () => {
    const el = document.getElementById("itifcritique-article-text");
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const scriptSegments: ScriptSegment[] = [
    {
      time: "00:00:00 - 00:00:03",
      cn: "美国的科研体制推崇自由 而科学家凭着好奇心去探索",
      en: "The American scientific research system champions freedom, where scientists explore driven purely by curiosity."
    },
    {
      time: "00:00:03 - 00:00:07",
      cn: "这种东西被全世界奉为楷模 结果却被自家总统处处针对",
      en: "This paradigm has been revered as a model worldwide, yet it has faced relentless targeting by its own president."
    },
    {
      time: "00:00:08 - 00:00:11",
      cn: "特朗普一会儿卡科研预算 一会儿裁科研雇员",
      en: "Trump blocks research budgets one moment, and slashes scientific personnel the next."
    },
    {
      time: "00:00:12 - 00:00:13",
      cn: "主流媒体都拿他当傻子",
      en: "Mainstream media treated him as a complete fool."
    },
    {
      time: "00:00:13 - 00:00:16",
      cn: "但美国智库ITIF却说 美国的科研体制",
      en: "However, the American think tank ITIF argued that the US scientific research system..."
    },
    {
      time: "00:00:17 - 00:00:20",
      cn: "早就该动刀了 他打不到硬仗 没法跟中国竞争",
      en: "...is long overdue for surgical reform; it cannot fight tough battles and cannot compete with China."
    },
    {
      time: "00:00:20 - 00:00:23",
      cn: "我以为他是硬洗 准备看乐子 结果呢？",
      en: "I thought it was just blatant narrative spinning and was ready to watch for amusement. But the result?"
    },
    {
      time: "00:00:23 - 00:00:27",
      cn: "他说 美国的问题在于太强调基础研究 不重视工程运用",
      en: "It claims that America's problem lies in over-emphasizing basic research while neglecting engineering application."
    },
    {
      time: "00:00:28 - 00:00:29",
      cn: "我一想 觉得有点道理",
      en: "When I thought about it, it actually made some sense."
    },
    {
      time: "00:00:29 - 00:00:30",
      cn: "还记得生活大爆炸吗？",
      en: "Remember 'The Big Bang Theory'?"
    },
    {
      time: "00:00:30 - 00:00:35",
      cn: "里面那个Sheldon研究的弦理论已经走入了死胡同 但这不妨碍他笑话",
      en: "Sheldon's research in String Theory has hit a dead end, but that doesn't stop him from mocking..."
    },
    {
      time: "00:00:35 - 00:00:38",
      cn: "航天工程Howard 说的是修理工",
      en: "...aerospace engineer Howard, calling him a mere 'repairman.'"
    },
    {
      time: "00:00:38 - 00:00:43",
      cn: "然而鄙视链底端的Howard才是四人组里面对美国国家实力贡献最大的人",
      en: "Yet, Howard, at the bottom of this academic hierarchy, is the one who contributes the most to American national power among the group."
    },
    {
      time: "00:00:43 - 00:00:48",
      cn: "这种象牙塔间的傲慢导致纯科学崇拜取代了国家使命感",
      en: "This ivory-tower arrogance has allowed 'pure science' worship to displace a sense of national mission."
    },
    {
      time: "00:00:48 - 00:05:08",
      cn: "那ITIF的报告呢 实际上是在反思所谓的科学家自治 是否已经陷入了治理精英主义的自嗨 跟国家科技进步失去了联系？",
      en: "The ITIF report, in reality, is a reflection on so-called 'scientific self-governance'—asking if it has degenerated into an elitist self-indulgence detached from genuine national technological progress."
    },
    {
      time: "00:00:57 - 00:01:00",
      cn: "那么 要批评一个事物 我就得知道它是怎么来的",
      en: "Now, to criticize something, I must first understand how it came to be."
    },
    {
      time: "00:01:00 - 00:01:06",
      cn: "那美国现行的科研体制的成型于 二战之后 战前美国科研主要是靠基金会",
      en: "The current US research system took shape after WWII. Before the war, US research relied mostly on private foundations..."
    },
    {
      time: "00:01:06 - 00:01:10",
      cn: "和企业 政府支持非常有限 只占GDP of 0.1%左右",
      en: "...and corporations. Government support was highly limited, accounting for only around 0.1% of GDP."
    },
    {
      time: "00:01:10 - 00:01:15",
      cn: "那战争期间 雷达、青霉素、原子弹这三项技术发明",
      en: "During the war, three major technological breakthroughs—radar, penicillin, and the atomic bomb—"
    },
    {
      time: "00:01:15 - 00:01:18",
      cn: "让美国意识到了科技对提升国家实力",
      en: "...made the United States realize just how critical science and technology are to enhancing national power."
    },
    {
      time: "00:01:18 - 00:01:21",
      cn: "有多么的关键 所以决定大力支持科研",
      en: "Realizing this vital importance, the government decided to heavily support scientific research."
    },
    {
      time: "00:01:21 - 00:01:24",
      cn: "那战时负责科研的官员范内尔布什就提交了",
      en: "Vannevar Bush, the official in charge of wartime research, submitted..."
    },
    {
      time: "00:01:24 - 00:01:27",
      cn: "一份著名的报告《科学：无尽的前沿》",
      en: "...his famous report, 'Science: The Endless Frontier.'"
    },
    {
      time: "00:01:27 - 00:01:32",
      cn: "这份文件直接奠定了美国乃至整个西方80年来的科研制度",
      en: "This document directly laid the cornerstone of the scientific research system for the US and the entire West for the next 80 years."
    },
    {
      time: "00:01:32 - 00:01:37",
      cn: "开创了战后时代一种由科学家主导而不是国家目标主导的科研范式",
      en: "It initiated a post-war paradigm dominated by scientists rather than defined national goals."
    },
    {
      time: "00:01:37 - 00:01:42",
      cn: "由个人自主决定研究方向 各自在各自的领域自由发挥",
      en: "Individuals autonomously select their research directions, freely expressing themselves in their respective domains."
    },
    {
      time: "00:01:42 - 00:01:46",
      cn: "那它的核心的是一种线性的创新模式 就是基础研究",
      en: "At its core lies a linear model of innovation: Basic Research..."
    },
    {
      time: "00:01:46 - 00:01:49",
      cn: "到了应用 研究到商业开放",
      en: "...leads to Applied Research, which then leads to Commercial Development."
    },
    {
      time: "00:01:49 - 00:01:52",
      cn: "政府只管支持最左边的基础研究",
      en: "The government only funds basic research on the far left of this spectrum..."
    },
    {
      time: "00:01:52 - 00:01:55",
      cn: "因为它投入大、周期长 没有直接的商业回报",
      en: "...because it requires massive investment, has long cycles, and offers no immediate commercial returns..."
    },
    {
      time: "00:01:55 - 00:01:57",
      cn: "私人资本是不会投的",
      en: "...making it unattractive to private capital."
    },
    {
      time: "00:01:57 - 00:02:00",
      cn: "那么国家巨大的科研预算要怎么分配呢？",
      en: "So how should this massive national research budget be allocated?"
    },
    {
      time: "00:02:00 - 00:02:05",
      cn: "建立首席研究员制度 首席研究员相当于这个领域的国王 他来决定预算",
      en: "Establish the Principal Investigator (PI) system. The PI acts as the 'king' of their domain, deciding how the budget..."
    },
    {
      time: "00:02:05 - 00:02:08",
      cn: "该怎么花 国家无权过问 也没有办法",
      en: "...is spent. The state has no say and no control."
    },
    {
      time: "00:02:08 - 00:02:13",
      cn: "成果考核官员懂什么 就不要外行管理内行了 那又怎么考核呢？",
      en: "As for performance evaluation, what do administrators know? Let's avoid amateurs managing experts. So how do they evaluate?"
    },
    {
      time: "00:02:13 - 00:02:14",
      cn: "论文就是KPI",
      en: "Papers are the sole KPI."
    },
    {
      time: "00:02:14 - 00:02:17",
      cn: "于是就形成了全球范围的学术交流",
      en: "Thus, global-scale academic exchange took shape."
    },
    {
      time: "00:02:17 - 00:02:21",
      cn: "那科学确实打破了国界 形成了这个学术权力的闭环",
      en: "Science indeed broke national boundaries, completing this closed loop of academic power."
    },
    {
      time: "00:02:21 - 00:02:25",
      cn: "国家只有发钱的义务 发完钱就隐身 没有验收的权力",
      en: "The state only has the obligation to distribute money, disappearing right after, without the power of validation."
    },
    {
      time: "00:02:25 - 00:02:29",
      cn: "美国国家科学基金会NSF国家卫生研究院NIH",
      en: "The National Science Foundation (NSF) and the National Institutes of Health (NIH)..."
    },
    {
      time: "00:02:29 - 00:02:34",
      cn: "独立于行政官僚体系 作为纯粹的发钱机器供养科研项目",
      en: "...exist independently of the executive bureaucracy, acting as pure cash-dispensing machines to feed research projects."
    },
    {
      time: "00:02:34 - 00:02:37",
      cn: "那科学家拿到了项目经费 就凭好奇心去探索",
      en: "Once scientists secure project funding, they explore based on curiosity..."
    },
    {
      time: "00:02:37 - 00:02:40",
      cn: "保证出成果 而成果可能造福全人类",
      en: "...promising output, which is believed to eventually benefit all of humanity."
    },
    {
      time: "00:02:41 - 00:02:44",
      cn: "然而 现实中的产业和科技史告诉我们 这套线性逻辑",
      en: "However, real-world industry and technological history tell us that this linear logic..."
    },
    {
      time: "00:02:44 - 00:02:47",
      cn: "即便不是完全错误 也存在很大的盲区",
      en: "...if not entirely wrong, contains immense blind spots."
    },
    {
      time: "00:02:47 - 00:02:50",
      cn: "因为创新不是单向的 实践中",
      en: "Because innovation is not unidirectional. In practice..."
    },
    {
      time: "00:02:50 - 00:02:53",
      cn: "往往是技术引领科学 而不是科学应用技术",
      en: "...it is often technology that leads science, rather than science merely applying technology."
    },
    {
      time: "00:02:54 - 00:02:59",
      cn: "比如说是蒸汽机催生了热力学 是望远镜催生了光学 而不是反过来",
      en: "For example, the steam engine birthed thermodynamics, and the telescope birthed optics—not the other way around."
    },
    {
      time: "00:02:59 - 00:03:02",
      cn: "许多基础研究的养料必须来自产业",
      en: "The nutrients for many basic research breakthroughs must come from industry."
    },
    {
      time: "00:03:02 - 00:03:06",
      cn: "没有真实世界的数据反馈 理论研究就是闭门造车",
      en: "Without feedback from real-world data, theoretical research is merely constructing castles in the air."
    },
    {
      time: "00:03:06 - 00:03:10",
      cn: "后来有一个颠覆线性逻辑的矩阵 它有两个维度 一个呢",
      en: "Later, a matrix emerged to disrupt this linear logic. It has two dimensions: one..."
    },
    {
      time: "00:03:10 - 00:03:15",
      cn: "是底层原理 比如说这个寻找引力波 一个呢是实践应用",
      en: "...is fundamental understanding (e.g., detecting gravitational waves), and the other is practical use..."
    },
    {
      time: "00:03:15 - 00:03:18",
      cn: "比如说发明灯泡 那两个不粘 就属于纯粹的分类",
      en: "...such as inventing the light bulb. Projects that lack both fall into pure categorization."
    },
    {
      time: "00:03:18 - 00:03:23",
      cn: "而对人类贡献最大的创新属于理论联系应用 就是巴斯德象限",
      en: "Yet the innovations that contribute most to humanity belong to 'use-inspired basic research,' namely Pasteur's Quadrant."
    },
    {
      time: "00:03:23 - 00:03:28",
      cn: "因为巴斯德为了防止葡萄酒变酸 研究微生物原理 带着功利的目的",
      en: "To prevent wine from spoiling, Pasteur investigated microbiological principles. Driven by a utilitarian goal..."
    },
    {
      time: "00:03:28 - 00:03:32",
      cn: "取得了基础科学的发现 然后又发明了巴氏消毒法 反哺了产业",
      en: "...he achieved foundational scientific discoveries and then invented pasteurization, feeding back into industry."
    },
    {
      time: "00:03:32 - 00:03:34",
      cn: "总之就是完全不符合线性逻辑",
      en: "In short, it completely defies the linear model."
    },
    {
      time: "00:03:34 - 00:03:36",
      cn: "那么至于布什为什么要整这套东西呢？",
      en: "So why did Bush construct this framework in the first place?"
    },
    {
      time: "00:03:36 - 00:03:40",
      cn: "有人说是为了混经费 这个姑且不说 但确实他的成功",
      en: "Some say it was to secure funding; letting that aside, his success..."
    },
    {
      time: "00:03:40 - 00:03:44",
      cn: "有赖于一个特殊的历史时期 就是战后美国工业一枝独秀",
      en: "...depended on a unique historical window: post-war American industry stood completely unchallenged."
    },
    {
      time: "00:03:45 - 00:03:50",
      cn: "那么实际上冷战最激烈的时候呢 苏联卫星刺激的美国科研一度是回归使命导向",
      en: "In fact, at the height of the Cold War, the Sputnik shock briefly pushed US research back to a mission-driven model."
    },
    {
      time: "00:03:50 - 00:03:53",
      cn: "但后来金融化又导致制造业流向海外",
      en: "But subsequent financialization led to the offshoring of manufacturing."
    },
    {
      time: "00:03:53 - 00:03:56",
      cn: "产跟研没法儿结合 于是纯科学又回潮了",
      en: "Since production and research could no longer integrate, 'pure science' made a massive comeback."
    },
    {
      time: "00:03:56 - 00:04:01",
      cn: "这套制度经过八十多年 如今在大国竞争的背景下又显得不合时宜了",
      en: "After more than 80 years, this system now appears archaic against the backdrop of great-power competition."
    },
    {
      time: "00:04:01 - 00:04:03",
      cn: "所以ITIF呢 就从五个方面去批评它",
      en: "Thus, the ITIF criticizes it from five distinct angles:"
    },
    {
      time: "00:04:03 - 00:04:06",
      cn: "第一 重科学轻工程",
      en: "First: Valuing science over engineering."
    },
    {
      time: "00:04:06 - 00:04:09",
      cn: "布什文件里面科学提了119次 技术只提了五次",
      en: "In Bush's document, 'science' is mentioned 119 times, whereas 'technology' is mentioned only 5 times."
    },
    {
      time: "00:04:09 - 00:04:14",
      cn: "在它的设计里面 经费本来就是给科学研究的 而不是给工程应用的",
      en: "In his design, funds were structurally designated for scientific research, not engineering applications."
    },
    {
      time: "00:04:14 - 00:04:18",
      cn: "所以美国联邦研究经费呢 是给工程学的 只有不到16%的",
      en: "As a result, less than 16% of US federal research funding is allocated to engineering."
    },
    {
      time: "00:04:19 - 00:04:23",
      cn: "但科工 科工光有理论突破 没有工业生产是不行的",
      en: "But science and engineering require both: having only theoretical breakthroughs without industrial production is untenable."
    },
    {
      time: "00:04:23 - 00:04:28",
      cn: "第二个就是过于强调基础研究 而随着这个实体工业的空心化",
      en: "Second: Over-emphasizing basic research. With the hollowing out of physical industries..."
    },
    {
      time: "00:04:28 - 00:04:32",
      cn: "学术产出和产业落地之间存在巨大的断层 导致",
      en: "...there is a massive chasm between academic output and industrial realization. Consequently..."
    },
    {
      time: "00:04:32 - 00:04:36",
      cn: "实体产业接不住从象牙塔里面溢出来的知识",
      en: "...the domestic physical industry cannot capture the knowledge overflowing from the ivory tower."
    },
    {
      time: "00:04:36 - 00:04:39",
      cn: "那美国政府资助的往往是理论概念阶段的早期研究",
      en: "The US government primarily funds early-stage research at the conceptual level..."
    },
    {
      time: "00:04:40 - 00:04:44",
      cn: "私营部门承接的是比较成熟的研究 往往已经有原型样机",
      en: "...while the private sector takes over mature research that has already reached prototyping..."
    },
    {
      time: "00:04:44 - 00:04:47",
      cn: "而进入了测试阶段 所以中间存在着巨大的空白",
      en: "...and testing. This leaves an enormous 'valley of death' in between."
    },
    {
      time: "00:04:47 - 00:04:49",
      cn: "那许多技术呢 就因为缺乏资金而夭折",
      en: "Consequently, many promising technologies perish due to a lack of bridge funding."
    },
    {
      time: "00:04:49 - 00:04:52",
      cn: "那么这也导致许多基础研究的成果",
      en: "This also means that since US domestic industry cannot capture these basic research fruits..."
    },
    {
      time: "00:04:52 - 00:04:55",
      cn: "美国产业接不住就外溢的中国等其他国家",
      en: "...they spill over to other countries like China."
    },
    {
      time: "00:04:55 - 00:04:58",
      cn: "利用美国科学家发现的知识来发展本国经济",
      en: "These nations then leverage the knowledge discovered by American scientists to grow their own economies."
    },
    {
      time: "00:04:59 - 00:05:02",
      cn: "基础研究很难设防 而应用研究容易申请专利",
      en: "Basic research is notoriously difficult to gatekeep, while applied research easily lends itself to patents."
    },
    {
      time: "00:05:03 - 00:05:06",
      cn: "所以美国啊 钱花了不少 却在为别人创造价值",
      en: "Thus, the US spends huge amounts of money but ends up creating value for others."
    },
    {
      time: "00:05:06 - 00:05:09",
      cn: "第三就是资助的领域过于宽泛",
      en: "Third: Funding is spread too thin."
    },
    {
      time: "00:05:09 - 00:05:12",
      cn: "没有聚焦于提升国家经济实力的产业",
      en: "It is not focused on strategic industries that bolster national economic power."
    },
    {
      time: "00:05:12 - 00:05:15",
      cn: "以色列和韩国就属于典型的任务区驱动工业技术",
      en: "Israel and South Korea represent typical mission-driven industrial tech support..."
    },
    {
      time: "00:05:15 - 00:05:19",
      cn: "占政府研发支出的30%左右 美国只有1%",
      en: "...allocating around 30% of government R&D to it, whereas the US allocates a mere 1%."
    },
    {
      time: "00:05:19 - 00:05:21",
      cn: "第四就是产业参与度太低",
      en: "Fourth: Low industry participation."
    },
    {
      time: "00:05:21 - 00:05:25",
      cn: "因为二战后政府接过了科研账单 所以70年代产业界",
      en: "Because the government footed the research bill after WWII, industry's contribution..."
    },
    {
      time: "00:05:25 - 00:05:28",
      cn: "对于科研的贡献份额跌到只剩3% 后来",
      en: "...to university research fell to a tiny 3% in the 1970s."
    },
    {
      time: "00:05:28 - 00:05:31",
      cn: "在90年代又回升到7% 现在大概是6%",
      en: "It bounced back to 7% in the 1990s, and is currently around 6%."
    },
    {
      time: "00:05:31 - 00:05:35",
      cn: "第五呢 就是资助时间太短 科研项目缺乏长期资金",
      en: "Fifth: Funding cycles are too short. Projects lack long-term, stable capital..."
    },
    {
      time: "00:05:35 - 00:05:39",
      cn: "得以不断地去申请续期 难以应对重大复杂的挑战",
      en: "...forcing scientists to constantly apply for renewals, making it hard to tackle complex, grand challenges."
    },
    {
      time: "00:05:39 - 00:05:43",
      cn: "而中国呢 则提供稳定的资助机制 为大规模",
      en: "China, on the other hand, provides stable, institutional funding..."
    },
    {
      time: "00:05:43 - 00:05:47",
      cn: "研究项目保驾护航 是高风险高回报的项目得以持续推进",
      en: "...shielding large-scale research and allowing high-risk, high-reward projects to progress continuously."
    },
    {
      time: "00:05:47 - 00:05:52",
      cn: "那么 ITIF就主张构建一种新的国家主导的研究模式",
      en: "Consequently, the ITIF advocates for a new state-led research paradigm."
    },
    {
      time: "00:05:52 - 00:05:56",
      cn: "它目标很明确 就是在科技经济战中击败中国",
      en: "Its objective is crystal clear: to defeat China in the tech-economic struggle."
    },
    {
      time: "00:05:56 - 00:05:59",
      cn: "科学家能证明你的项目有利于打败中国 那就能得到经费",
      en: "If scientists can prove their projects help outcompete China, they get funded."
    },
    {
      time: "00:06:00 - 00:06:04",
      cn: "与产业合作越紧密 商业化越积极的支持力度就越大",
      en: "The closer the collaboration with industry and the more proactive the commercialization, the stronger the support."
    },
    {
      time: "00:06:04 - 00:06:07",
      cn: "像研究这个性别之类的社会科学 对不起 经费有限",
      en: "As for social sciences like gender studies? I'm afraid their funding will be severely limited."
    },
    {
      time: "00:06:07 - 00:06:08",
      cn: "那ITIF呢？",
      en: "What about ITIF's worldview?"
    },
    {
      time: "00:06:08 - 00:06:13",
      cn: "历来强调一个概念 就是国家实力产业 实际上遵循的就是战争",
      en: "It has always stressed a concept: the 'National Power Industry.' In essence, it follows a wartime..."
    },
    {
      time: "00:06:13 - 00:06:17",
      cn: "动员的逻辑 就是军工加两用 加战略赋能",
      en: "...mobilization logic: military-industrial, dual-use, and strategic enablement."
    },
    {
      time: "00:06:17 - 00:06:22",
      cn: "那其他那些对战时都没有用 放弃了也不影响争霸了 国家就可以不拿钱",
      en: "Anything useless in wartime can be abandoned without affecting hegemony; the state simply won't fund it."
    },
    {
      time: "00:06:22 - 00:06:26",
      cn: "也就是说 它不支持漫无目的的科学探索 主张聚焦",
      en: "That is, it opposes aimless scientific exploration, arguing instead for a laser focus..."
    },
    {
      time: "00:06:26 - 00:06:30",
      cn: "关键技术领域 尤其是加大对工程学的资助力度",
      en: "...on key tech areas, particularly ramping up funding for engineering."
    },
    {
      time: "00:06:30 - 00:06:33",
      cn: "此外 它号召美国科研体制学习中国 搞更多的研究中心",
      en: "Moreover, it calls on the US system to learn from China by establishing major research centers."
    },
    {
      time: "00:06:33 - 00:06:39",
      cn: "这样可以大规模、持续深入研究 而不要围绕个人申领的单个项目搞半天",
      en: "This enables large-scale, continuous, in-depth research, rather than scattering energy on individual projects won by solitary PIs..."
    },
    {
      time: "00:06:39 - 00:06:43",
      cn: "只有几个教授在捣鼓 比如说电池研究 在美国的现状就是这个样子",
      en: "...where only a couple of professors tinker in isolation. Take battery research, which is exactly like this in the US today."
    },
    {
      time: "00:06:43 - 00:06:48",
      cn: "只有当研究规模化、资助长期化 才有利于创新 and 构建产业集群",
      en: "Only when research is scaled and funding is long-term can it catalyze innovation and build powerful industrial clusters."
    },
    {
      time: "00:06:49 - 00:06:53",
      cn: "最后就是这个博士教育也说要搞产业为导向 不要纯粹的培养教授",
      en: "Finally, it argues that doctoral education must be industry-oriented, rather than purely grooming future professors."
    },
    {
      time: "00:06:53 - 00:06:58",
      cn: "要学习中国国防七子关注产业需求 能给实际问题提供解决方案的",
      en: "It suggests learning from China's 'Seven Sons of National Defense,' focusing on industrial demand to solve real problems."
    },
    {
      time: "00:06:58 - 00:07:01",
      cn: "比如说真空激光焊接就应该授予博士",
      en: "For instance, a breakthrough in vacuum laser welding should absolutely merit a PhD."
    },
    {
      time: "00:07:01 - 00:07:05",
      cn: "除此之外 他还主张美国科研体系要多追踪中国的发展动向",
      en: "Beyond this, it urges the US system to aggressively track China's technological trajectory."
    },
    {
      time: "00:07:05 - 00:07:09",
      cn: "过去的情报呢 是侧重于商业应用 那么这是创新成果已经落地了",
      en: "In the past, intelligence focused on commercial applications—meaning after innovations had already landed."
    },
    {
      time: "00:07:10 - 00:07:13",
      cn: "美国属于后知后觉还是得关注早期的研究",
      en: "This leaves the US reactive. Instead, it must monitor early-stage research..."
    },
    {
      time: "00:07:13 - 00:07:16",
      cn: "专利和资金趋势来预测中国技术变革",
      en: "...patents, and funding trends to anticipate China's technological shifts."
    },
    {
      time: "00:07:16 - 00:07:20",
      cn: "实际上 你别看美国媒体总是喷特朗普政府对科学宣战啊",
      en: "In reality, despite the mainstream media crying that Trump is 'waging a war on science'..."
    },
    {
      time: "00:07:20 - 00:07:23",
      cn: "他实际上是对科学家宣战",
      en: "...he is actually waging a war on scientists."
    },
    {
      time: "00:07:23 - 00:07:27",
      cn: "再精确一点 应该说他是在对由科学家主导、崇尚",
      en: "To be more precise, he is waging a war on the globalized academic system..."
    },
    {
      time: "00:07:27 - 00:07:31",
      cn: "自由探索 以基础研究为核心的全球化的科学学术体系宣战",
      en: "...which is scientist-led, values free exploration, and centers around basic research."
    },
    {
      time: "00:07:32 - 00:07:37",
      cn: "那美国实际上要做的是走向一个政治挂帅或者说由官员掌舵的战时科技体制",
      en: "What the US is actually pivoting toward is a politics-first, or bureaucrat-steered, wartime technological mobilization."
    },
    {
      time: "00:07:37 - 00:07:43",
      cn: "他通过控制资金分配 要求科学界重新的依附于国家意志 服从于国防",
      en: "By controlling resource allocation, it demands that the scientific community re-align with national will and serve national defense..."
    },
    {
      time: "00:07:43 - 00:07:46",
      cn: "国安需要极度强调国家实力领域的产学研结合",
      en: "...and national security, with an extreme emphasis on integrating research, academia, and industry in power-projection sectors."
    },
    {
      time: "00:07:47 - 00:07:53",
      cn: "而美国要走的实际上就是中国一直在走的这条路 就是科研产业一体化",
      en: "The path the US is trying to take is actually the very path China has long walked: the integration of research and industry."
    },
    {
      time: "00:07:53 - 00:07:56",
      cn: "科研从来不是纯科学 而是服务于国家的战略需求",
      en: "Research is never just 'pure science'; it is a vital engine serving the strategic needs of the nation."
    },
    {
      time: "00:07:56 - 00:08:00",
      cn: "它跟国家安全和产业发展原本就是紧密结合的",
      en: "It has always been deeply and inextricably bound with national security and industrial expansion."
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-8 text-slate-100" id="itifcritique-article-text">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Special Scholarly Treatise
          </span>
          <span className="bg-slate-800 text-slate-400 text-xs px-2.5 py-1 rounded-full font-mono font-medium">
            ESSAY AG (ITIF Critiques)
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          The Alchemy of Modern Science and the ITIF Delusion:
          <span className="block text-cyan-400 text-xl md:text-2xl mt-2 font-normal font-sans">
            Why Systemic Freedom is the True Engine of Foundational Discovery
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-slate-800 pb-4">
          <div>
            By <span className="font-bold text-slate-200">Academic Critique Hu</span>
          </div>
          <div>•</div>
          <div>Published: July 2026</div>
          <div>•</div>
          <div className="font-mono">Reference: Braben, D. W. (2008). Scientific Freedom. Wiley</div>
        </div>
      </div>

      {/* Abstract Box */}
      <div className="bg-slate-950 border-l-4 border-cyan-500 p-5 rounded-r-xl space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-sans">Executive Summary (Abstract)</h3>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-serif italic">
          "The American Information Technology and Innovation Foundation (ITIF) recently issued a sweeping report claiming that the post-WWII American scientific paradigm—built on the legacy of Vannevar Bush's 'Science: The Endless Frontier' and characterized by curiosity-driven, scientist-led autonomous exploration—is an archaic luxury that the United States can no longer afford. ITIF argues that to win the great-power tech struggle, research must be stripped of its aimless, ivory-tower indulgence and re-aligned with strict government-directed wartime mobilization, prioritizing applied engineering over basic research. This critique exposes the dangerous fallacy of the ITIF doctrine. By treating modern science as a mature, predictive engineering discipline rather than the raw 'alchemy' that it truly is, ITIF mistakes the symptom for the cause. If we treat scientific leaders as mere 'utility managers' who consume rather than create software, we extinguish the prime mover of global discovery. Strategic missions can coordinate existing knowledge, but only absolute, systemic intellectual freedom can uncover the unknown."
        </p>
      </div>

      {/* Section 1 */}
      <div className="space-y-4 font-serif text-sm md:text-base text-slate-300 leading-relaxed">
        <h2 className="text-lg md:text-xl font-bold text-white font-sans flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-cyan-400 font-mono">I.</span> The Alchemical Reality of Modern Scientific Enterprise
        </h2>
        <p>
          The fundamental flaw of modern science policy—and the fatal error of the ITIF report—is the failure to recognize that <strong>modern scientific research is almost entirely akin to alchemy</strong>. 
          In popular imagination and textbook mythology, science is portrayed as an organized, highly predictive enterprise where elegant theories systematically dictate real-world applications. 
          In practice, scientific breakthroughs remain overwhelmingly empirical, stochastic, and driven by raw trial-and-error. 
          We call our contemporary endeavors "science," but when we look closely at material synthesis, battery development, or drug discovery, we find researchers blindly mixing ingredients in high-throughput ovens, hoping for a statistical anomaly. This is not predictive physics; it is structured, expensive alchemy.
        </p>
        <p>
          When the ITIF report complains that billions of federal research dollars "overflow" from the ivory towers without sparking immediate domestic manufacturing booms, they misdiagnose the disease. 
          The problem is not that basic research is inherently "useless." Rather, it is that modern peer-review and academic credentialism have turned "basic research" into a massive "academic water-pouring" guild. 
          Real basic research requires daring, high-risk conceptual leaps. But under the current administrative state, researchers are forced to publish endless incremental papers to satisfy bureaucratic KPIs. 
          Instead of exploring "the endless frontier," they are simply optimizing the margins of existing alchemical recipes.
        </p>
      </div>

      {/* Section 2 */}
      <div className="space-y-4 font-serif text-sm md:text-base text-slate-300 leading-relaxed">
        <h2 className="text-lg md:text-xl font-bold text-white font-sans flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-cyan-400 font-mono">II.</span> The ITIF Distortion: Portraying Oppressed Freedom as the Mainstream
        </h2>
        <p>
          The ITIF report engages in a profound rhetorical distortion: <strong>it portrays the ideal of absolute "academic freedom" as the reigning, unchallenged mainstream of modern research</strong>, and places the blame for economic stagnation at its feet. 
          They paint a picture of a nation where thousands of eccentric scientists like <i>Sheldon Cooper</i> from <i>The Big Bang Theory</i> are lavished with public funds to ponder useless string theories while looking down on the engineering "repairmen" like <i>Howard Wolowitz</i>. 
          They present "scientists' self-governance" as an elitist, self-indulgent clique that must be broken by political mandates.
        </p>
        <p>
          This is a complete inversion of reality. In truth, <strong>genuine scientific freedom and individual, curiosity-driven theoretical inquiry are heavily suppressed by the modern academic hierarchy</strong>. 
          Today's scientists do not enjoy the sovereign freedom to follow their curiosity. They are hostages to a highly centralized, administrative machine that distributes funding via peer-review panels that punish non-consensus thinking. 
          If a contemporary researcher proposes a radically new physical framework that challenges the reigning orthodoxy, they are systematically denied funding, blacklisted by journals, and pushed out of the field. 
          ITIF dresses up the "mainstream alchemy"—which is already heavily institutionalized, mission-co-opted, and bureaucratic—as a bullied underdog, while demanding the total elimination of the tiny, remaining pockets of intellectual liberty.
        </p>
      </div>

      {/* Section 3 */}
      <div className="space-y-4 font-serif text-sm md:text-base text-slate-300 leading-relaxed">
        <h2 className="text-lg md:text-xl font-bold text-white font-sans flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="text-cyan-400 font-mono">III.</span> The Software Analogy: Using Versus Developing
        </h2>
        <p>
          To understand why the ITIF's obsession with applied engineering over foundational theory is self-defeating, we must look to the digital domain. 
          <strong>"If everyone merely seeks to use software, no one will develop or create software."</strong>
        </p>
        <p>
          Developing countries and rising economic competitors can often survive, and indeed thrive, by taking existing "software" (unpatented basic scientific discoveries) and focusing all their efforts on building high-efficiency "applications" (applied engineering and manufacturing clusters). 
          They are, in effect, highly skilled consumers of foundational knowledge. 
          However, if the global innovation leaders—the nations at the absolute frontier of science—also adopt this utilitarian mindset and decide to <i>only use and never develop</i>, the world's scientific engine loses its prime mover. 
          When you turn all your theoreticians into "repairmen" and "utility managers," you run out of new software to deploy. 
          As Donald W. Braben brilliantly demonstrated in his seminal work <i>Scientific Freedom: The Elixir of Civilization</i> (Wiley, 2008), the true miracles of industrial civilization were not born from state-directed engineering missions, but from unconstrained, high-risk, non-consensus discoveries that created entirely new industries.
        </p>
      </div>

      {/* Section 4 - Bilingual Video Script Display */}
      <div className="space-y-6">
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div>
              <h3 className="text-sm font-bold text-white font-sans flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Bilingual Video Transcript & Commentary
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                A line-by-line, segment-by-segment analysis contrasting the ITIF report with global strategic realities.
              </p>
            </div>
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-3 rounded-lg text-xs transition duration-200 cursor-pointer shadow-sm"
              id="copy-itif-critique-btn"
            >
              <Copy className="w-3.5 h-3.5" />
              {copySuccess ? "Copied!" : "Copy Full Bilingual Script"}
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950 max-h-[500px] overflow-y-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-[10px] md:text-xs font-bold text-slate-300 font-sans tracking-wider uppercase">
                <th className="p-3 w-20 md:w-28 border-r border-slate-800">Timestamp</th>
                <th className="p-3 w-1/2 border-r border-slate-800">Original Chinese Transcript (中文视频脚本)</th>
                <th className="p-3 w-1/2">Professional English Translation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs md:text-sm">
              {scriptSegments.map((segment, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition">
                  <td className="p-3 font-mono text-[10px] text-cyan-400 font-semibold align-top border-r border-slate-800 bg-slate-950/80">
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

      {/* Concluding Box */}
      <div className="bg-slate-900/60 border border-cyan-500/20 p-6 rounded-xl space-y-3">
        <h4 className="text-sm font-bold text-white font-sans flex items-center gap-1.5">
          <Award className="w-4 h-4 text-cyan-400" />
          The Final Verdict
        </h4>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-serif">
          The ITIF's vision is a blueprint for the total homogenization of scientific progress. By copying state-directed industrial models and stripping away the messy, unpredictable freedom of the researcher, they secure temporary industrial efficiency at the cost of long-term civilization-scale stagnation. Modern science must not surrender its ultimate weapon—intellectual non-consensus—to the altar of geopolitical panic. We must restore true scientific freedom, dismantle the peer-review cartels, and recognize that science is not a predictable asset sheet, but an endless, alchemical quest into the unknown.
        </p>
      </div>
    </div>
  );
}
