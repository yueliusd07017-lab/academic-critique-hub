import React, { useState } from "react";
import { Youtube, Copy, Check, Headphones, MessageSquare, Video, ArrowDown, PlaySquare, Compass, ChevronRight, ShieldX, ShieldAlert } from "lucide-react";

export default function YoutubeHub() {
  const [activeProject, setActiveProject] = useState<"project1" | "project2" | "project3" | "project4">("project1");
  const [copiedScript, setCopiedScript] = useState(false);
  const [copiedDesc, setCopiedDesc] = useState(false);

  // PROJECT 1 TEXTS (The Asymmetry of Disbelief - Whistleblower Video)
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
"And we have empirical evidence. Take the celebrated 'impedance matching theory of microwave absorption' inside materials research. While transmission-line theory itself is completely correct (and yields accurate conclusions for films), the microwave absorption impedance matching theory misinterprets its results. This misinterpretation mathematically violates baseline electromagnetic wave physics at metal boundaries, distorting the actual absorption mechanisms. Yet, this model has guided billions of dollars in research grants.

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
9:15 - Honjo Tasuku’s CNS warning & The Harvard Stem Cell Fraud case
9:45 - Conclusion: Restoring "Slow Science" over Academic Alchemy

📧 CORRESPONDENCE & COLLABORATION:
For inquiries or to contribute to peer-reviewed logical deconstruction, contact:
➔ yueliusd@163.com

#AcademicWhistleblowing #ScientificIntegrity #YueLiu #WavePhysics #ScienceAlchemy #MetaScience #EamonnKeogh #ResearchIntegrity #Qeios`;

  // PROJECT 2 TEXTS (Defining Important Research - Educational Video)
  const youtubeScriptText2 = `[SCENE 1: THE SCI IMPACT ILLUSION | 第一幕：名刊与指标的“共识幻象”]
[Visual: Opening shot of a highly polished, rotating heavy leather-bound journal. Suddenly, digital overlays of "SCI Impact Factor: 45.2", "Citations: 10,000+", and gold glitter stars explode onto the screen, gradually fading into a cold, dark-grey empty classroom. Bold text on screen: "Consensus ≠ Important".]
[Sound: Energetic fanfares of commercial triumph quickly transitioning into a low, deep, solemn clock ticking.]

[VOICEOVER]
"What makes scientific research truly important? If you ask a modern university dean, they will point to the SCI Impact Factor. If you ask a journal editor, they will show you citation statistics. 

But modern science has contracted a fatal systemic disease: we have confused consensus with importance. 

学术期刊本应是思想碰撞、真理传播的阵地。而如今，整个学术出版界却将‘高影响因子’奉为衡量重要性的至高标准。这在本质上，是将‘学术圈共识’等同于‘物理学重要性’。主流权威发声，就会引来大量跟风模仿。期刊越发表主流，引用越高，却使得学术思想单一、看似繁荣、思想上实际死气沉沉。

The result? Over 90% to 95% of papers published in prestigious top-tier journals are merely derivative, comfortable noise—safe, incremental, and ultimately dead on arrival. 

这也是为什么期刊总是热衷于邀请学术权威来撰写总结性的综述文章，而草根学者即便在底层拥有再深刻的学术洞见，也无法拥有落笔的审查权。这像极了内容平台：把访问量、浏览量作为重要的标志，实际上只是把共识当成了事实。"


[SCENE 2: THE REAL VALUE OF TRUTH | 第二幕：哪怕空无一人，真理依然是真理]
[Visual: Smooth transition to a blackboard divided into two sides. Left: "Impedance Matching Theory" surrounded by hundreds of cited tags, looking crowded but hollow. Right: "Wave Mechanics Theory", standing entirely alone in the dark under a single bright spotlight.]
[Sound: A subtle wind howling, symbolizing isolated pursuit.]

[VOICEOVER]
"True physical value is independent of the Herd Mentality. Think of wave physics.

在微波吸收与电磁屏蔽领域，即使全行业所有人都在追捧‘阻抗匹配理论’，即便‘波动力学理论’一时间没有一个人关注、门可罗雀，波动力学也仍然比阻抗匹配理论重要百倍。因为物理法则不因人的多寡而动摇。

As the great mathematician Morris Kline wrote in 1972: 'History teaches us that many subjects which aroused tremendous enthusiasm and engaged the attention of the best mathematicians ultimately faded into oblivion... Indeed one of the interesting questions that history answers is what survives. History makes its own and sounder evaluations.'

历史是最公正的。历史反复证明，那些在当世喧嚣尘上的东西往往是主流学者为了维护地盘而炒作的糟粕泡沫，而那些在当世被冷落甚至联合打压的，往往才是纯度最高、终将 surviving 留存下来的金子。

Famous Chinese economists also warned us. Zhang Weiying famously declared: 'Innovation is an idea that the majority of people do NOT agree with. If everyone agrees, it is merely common sense, not innovation.' 
And Xu Xiaonian warned: 'Innovation has no sudden windfalls (风口); chasing a windfall is the very antithesis of creation.' 

科研工作者可以出于生存需要根据SCI影响因子选择未来的研究方向；但期刊，作为科学真理的公正法庭，绝不能把影响因子高低作为挑选文章的标准！"


[SCENE 3: IN SCIENCE, THERE ARE NO SMALL MATTERS | 第三幕：科学无小事，微波反常揭露鸿沟]
[Visual: A magnifying glass focused on the edge of a thin metallic film. The display shows electromagnetic wave vectors reflection loss (RL). A visual flow chart shows how expanding this single mathematical outlier cracks open the 50-year-old impedance matching theory.]
[Sound: Sudden energetic synthesized electronic beats, representing a major conceptual breakthrough.]

[VOICEOVER]
"Never look down on an anomaly because it seems small. A microscopic physical mismatch is often the seismic fault line of an entire paradigm.

科学研究最关键的，是能够从细微的小事中敏锐抓住问题。

In our research, we chose not to let go of a seemingly trivial anomaly that mainstream reviewers called an unimportant cosmetic detail: 'Why is it that when micro-waves enter a film backing, the thicker matching film actually leads to a smaller and better Reflection Loss (RL)?' 

We held onto this thread, refusing to let go. Ultimately, this 'small question' unburied a giant fifty-year confusion inside materials science: the fundamental category error between 'a film properties' and 'inherent materials properties.' We demolished the classic micro-wave impedance matching theory and laid the foundations of the 'Wave Mechanics Theory.'

Even Erwin Schrödinger’s historic breakthrough was originally born of a single spark: he merely incorporated wave-particle duality into classical wave equations. From that single spark of conceptual connection—driven purely by mathematical logic—the grand temple of Quantum Mechanics was constructed."


[SCENE 4: LOGIC TRUMPS MASSIVE VOLUMES OF DATA | 第四幕：逻辑思辨，重于堆砌实验]
[Visual: Stylized historic imagery of Galileo standing in deep contemplation. A split-screen shows a massive pile of random laboratory charts versus a single, elegant line of mathematical proof.]
[Sound: Heavy, elegant cello chords, creating a meditative, high-class academic weight.]

[VOICEOVER]
"In modern research, scholars believe that if they pile up hundreds of tables, and run thousands of characterizations, their science becomes important. This is a delusion. Raw experimental data without a guiding logical spine is merely a high-tech junk heap.

在近代科学史上，严密的‘逻辑思辨’要比提供海量重复、缺乏洞见的实验证据，重要得多。

Without Ernest Rutherford’s airtight logical deduction of the atomic nucleus, his alpha scattering experiment data would still be just an unorganized, forgotten table in an old logbook. 

If physicists had not logically derived the spin of electrons through the movement of charged particles in non-uniform magnetic fields, spectral splitting would still be an unexplained mess. 

chemistry itself was nothing but alchemy, until Dalton and others elevated raw laboratory measurements into Laws of Mass Conservation and Definite Proportions—and finally into atomic-molecular logic.

Let us look at Galileo. Galileo likely never dropped lead balls from the Leaning Tower of Pisa. He won his battle through pure, airtight theoretical contemplation.

重的物体下落快，轻的物体下落慢，这符合常识。无数高杂质实验甚至会‘证明’重的落下更快。但这并不能证明常识就是真逻辑。

Galileo asked a brilliant logical question: If heavy objects fall faster and light objects fall slower, what happens if we tie them together?

If we tie them together, the lighter object should pull the heavier object, acting as a brake. The whole combination should fall slower than the heavy object alone. 
But the combined weight of both objects is greater than the heavy object alone, so the whole combined pair should fall faster than the heavy object alone!

This is an absolute, unavoidable logical paradox! 

The only consistent logical resolution is that heavy and light objects must fall at the exact same velocity. 

Nature will never tolerate self-contradictions in mathematical logic. If a theory is logically clean and mathematically secure, physical experiments will eventually catch up—just as astronauts proved when they dropped a feather and a steel hammer in the vacuum of the moon, watching them hit the dust in simultaneous glory."


[SCENE 5: OUTRO | 第五幕：拨云见日，学术精神的价值回归]
[Visual: The screen returns back to a clean dark slate design. High-contrast display of Yue Liu's key Substack essays and papers, with Email contact yueliusd@163.com and the SSRN link: https://ssrn.com/abstract=5434337.]
[Sound: The dark cello chord settles into a peaceful, bright, resonant acoustic guitar chord.]

[VOICEOVER]
"Science is not a high-status elite club. It is not an athletic race to gather citations and secure administrative 'hats.' It is a relentless, pure-hearted pursuit of the physical universe, tested by mathematical logic.

我们必须撕掉虚假的影响因子标签，重新呼唤那种独立思辨、科学求真的逻辑学风。

Go visit the Substack articles linked below to read Yue Liu's full, unedited critical treatises on physics, citation games, and the wave mechanics paradigm. Let us stop policing tone and start verifying logic.

感谢您的收看，我们下期节目再见。"`;

  const youtubeDescText2 = `History is the most impartial judge. It repeatedly proves that things that create tremendous commercial buzz in the present day are often mainstream academic bubbles designed to protect local territory, while those that are initially marginalized or suppressed are pure gold destined to survive.

In this video, we directly deconstruct the deep-seated flaws of modern academic evaluation and explore "What makes scientific research truly important?" Starting from the consensus illusion of SCI impact factors, we analyze how academia has degenerated into a metrics game for select interest cartels. Furthermore, we argue that in science, "a micro-anomaly can be a seismic fault line" and "airtight logical deduction is far more important than the mindless piling up of experimental data."

📖 READ DR. YUE LIU'S ORIGINAL CRITICAL TREATISES (FREE on Substack):
1️⃣ Core Academic Evaluation Critiques Series:
➔ Defining Important Research: The Confused Consensus in Modern Science: https://yueliusd.substack.com/p/defining-important-research-the-confused
➔ Redefining Importance & The Crisis of Replication: https://yueliusd.substack.com/p/redefining-importance-the-crisis
➔ What is Academic Criticism: A Definition: https://yueliusd.substack.com/p/what-is-academic-criticism-a-definition
➔ Why Journals Are Reluctant to Publish Critiques: https://yueliusd.substack.com/p/what-is-academic-criticism-a-definition

2️⃣ Reconceptualizing Review Articles & Meta-Science Research (SSRN):
➔ Redefining Review Articles: Beyond Balance Toward Theoretical Innovation: https://ssrn.com/abstract=5434337
➔ From Academic Research to Academic Games: How Modern Science Lost its Way: https://ssrn.com/abstract=5684424

---

⏱️ TIMESTAMPS:
0:00 - Introduction: The SCI Impact Illusion. Confusing Consensus with Physical Value
2:15 - Innovation is an Unpopular Idea: Insights from Zhang Weiying, Xu Xiaonian & Morris Kline
4:10 - The Real Mission of Peer Review: Rejecting Metrics for Hardcore Physical Logics
5:30 - No Small Matters in Science: Explaining the Microwave RL Outlier Paradox
7:05 - Schrödinger's Spark & The Birth of Quantum Wave Mechanics
8:20 - Pure Logical Pre-eminence: Why Galileo Never Needed to Drop Lead Balls from Pisa
10:35 - Summary: Breaking Institutional Barriers to Restore Rigor and Science Integrity

📧 COLLABORATION & INQUIRIES:
For academic discussions, criticism of peer-review bias, or research collaborations in electromagnetic wave physics, please contact us directly:
➔ yueliusd@163.com

#AcademicIntegrity #SCIImpactFactor #ScientificMethods #MetaScience #WaveMechanics #MicrowaveAbsorption #MorrisKline #Schrodinger #Galileo #PhilosophyOfScience #ResearchBias #AcademicFreedom`;

  // PROJECT 3 TEXTS (The New Dark Age of Modern Academia - YouTube Video)
  const youtubeScriptText3 = `[SCENE 1: THE DARK WINTER OF MODERN SCIENCE]
[Visual: Split screen. Left shows a giant mechanical library card index spinning at high speed, churning out heaps of identical paper sheets. Right shows a small rustic candle burning in a cold cell under a grey stone tower. Large overlay on screen: "THE NEW DARK AGE".]
[Sound: Sound of a heavy guillotine blade dropping down, transitioning into a howling freezing winter wind.]

[VOICEOVER]
"We are living in an era that pretends to be the golden age of scientific discovery. With millions of papers in the global index and billions of dollars in draft grants, we boast of our progress. But the tragic reality is that modern science has slipped into a cold, dark winter. 

The academic establishment no longer knows what makes scientific research important. An intellectual void is covered up by beautiful data reports with zero conceptual weight. In short, any paper that has a true, paradigm-shattering conceptual idea is actively blacklisted, while mindless, routine experimental documents with flawless formats are instantly accepted. Science has degenerated from an engine of truth into an autocratic metrics game."


[SCENE 2: THE COSMETIC EXECUTIONER & CONCEPT THEFT]
[Visual: Sleek layout showing a rejection letter with red stamps highlighting 'AI Formatting Remnants Limit', 'Styling Gap', 'Font Size Deviation', all flagged as 'Lethal Errors'. This transitions into a slow-motion animation showing ideas being extracted from a rejected paper and inserted into a peer review cartel’s own fresh draft.]
[Sound: A subtle clock ticking fast, with a digital static frequency overlay.]

[VOICEOVER]
"The gatekeeping is highly calculated. In today's scientific community, if a manuscript introduces a true, groundbreaking thought experiment or conceptual innovation, it is rejected almost immediately. Why? Under the hypocritical pretext of 'lethal cosmetic flaws.' A minor spelling error, a left-over AI copywriting prompt, a small styling gap—elements that are completely, 100% restorable! 

The ethical duty of a reviewer is to find these small errors and help the author lift the paper's style. But instead, they use cosmetic flaws as an executioner's pretext to reject the idea, steal it, fix those silly flaws themselves, and publish it under their own name. 

This is specifically evident in electromagnetic wave materials research. Dr. Yue Liu's wave mechanics theoretical breakthrough, which dismantled the seventy-year-old microwave-absorption impedance matching model (which misinterpreted correct transmission line results), was frequently rejected with zero physical reasons. Yet, in 2021, a paper published in the Journal of Colloid and Interface Science by Wang et al., suddenly adopted Yue Liu's highly specific signature variable notation '$Z_M$' to describe material characteristic impedance, enjoying an unnaturally rapid review-to-publication cycle while completely failing to cite Dr. Liu's pioneering work. This is the hallmark of modern intellectual hijacking."


[SCENE 3: THE TYRANNY OF BRAINLESS DATA-REPORTS]
[Visual: Graphic showing a large pile of laboratory machines (TEM, XRD, SEM) spitting out endless colorful heatmaps and element mapping graphs. The graphs contain high-vibrancy scientific illustrations but no theoretical soul.]
[Sound: Loud industrial factory presses thumping continuously.]

[VOICEOVER]
"What then, are the papers that DO get published? They are the trash data dumps. Works that present flawless experimental logs, high-fidelity characterization graphs, and zero conceptual innovation, serving merely as safe annotations to the established authorities of the field. 

These brainless data-reports are fundamentally unpublishable from a true scientific standpoint. Yet, they command the premium pages of top-tier SCI journals. 

This has normalized a deep-seated culture of systemic academic misconduct, where entire fields agree to cite each other's junk and look the other way, because pointing it out would mean admitting that their entire multi-million-dollar industry is academic alchemy."


[SCENE 4: AUTOCRATIC SILENCE VS. THE GALILEO SPIRIT]
[Visual: A bold comparison panel: A medieval scroll (Trial of Galileo, 1633) showing active, public ecclesiastical signatures and recorded arguments, pitted against a modern digital desk-rejection screen with an anonymous grey avatar labeled 'Reviewer #2' behind a giant steel firewall.]
[Sound: Low, resonant, ominous church bells tolling.]

[VOICEOVER]
"This is indeed an autocratic censorship era worse than the Medieval Inquisition. When Galileo challenged the geocentric model, the Catholic Church gave him a formal, public trial with written records. The theological and mathematical objections were entered into historical documents for public scrutiny. 

The modern academic publishing cartels, however, operate in absolute shadow. They can kill a career over unprovable preprints with one click of an anonymous button. There is no court of appeal, no formal record, and when challenged with rigorous physical math, they hide behind 'The Golden Silence.' 

Under this regime, silence replaces refutation. To protect their metrics and grant portfolios, entire fields remain complicitly silent while correct publications are locked away. Under this winter, can we not call academia deeply, structurally dark?"


[SCENE 5: BREAKING THE SHACKLE OF ALCHEMY]
[Visual: The text coordinates on screen fade back to slate dark. The email yueliusd@163.com and Dr. Yue Liu's Substack references appear in clean typography paired with a glowing SSRN author card.]
[Sound: The dark cello notes dissolve into a bright, encouraging acoustic string pattern.]

[VOICEOVER]
"True scientific progress cannot be measured by a journal's impact factor or a citation loop index. It is the unsuperstitious, cold-blooded observation of mathematical logic and wave-physical consistency. 

We must tear down the wall of anonymous gatekeepers, restore the primacy of intellectual innovation over cosmetic format loops, and reject the complicit silence of metrics cartels. Let us support slow, honest science over corporate academic alchemy. 

Visit Yue Liu's Substack essays and original SSRN treatises linked in the fields below. Let us stop policing format, and start verifying logic. 

Thank you for watching."`;

  const youtubeDescText3 = `Indeed, the modern community has lost all scientific benchmarks of what paper is important, what data is publishable, and what theories represent true progress. In this video, we expose how modern scientific publishing has entered the "New Dark Age"—a period dominated by autocratic censorship, peer-review cartels, and systemic intellectual theft that runs far deeper than simple pixel-manipulations.

📖 READ DR. YUE LIU'S CORE ENGLISH TREATISES (FREE on Substack):
1️⃣ The Strategic Censorship Series:
➔ The New Dark Age of Science Overview: https://yueliusd.substack.com/p/why-modern-science-is-a-dark-age
➔ If Academia Has Become Like This, Can We Not Call It Dark?: https://yueliusd.substack.com/p/if-academia-has-become-like-this-850
➔ When Silence Replaces Refutation & The Refusal of Debate: https://yueliusd.substack.com/p/when-silence-replaces-refutation-73f
➔ The Polished Façade & The Hypocrisy of Modern Journals: https://yueliusd.substack.com/p/the-polished-facade-and-the-silent

2️⃣ Core Academic Publishing Preprints (SSRN Network):
➔ "The New Dark Age: Modern Academic Publishing as the Most Autocratic Censorship Era in Scientific History": https://ssrn.com/abstract=5679442
➔ "Redefining Review Articles: Beyond Balance Toward Theoretical Innovation": https://ssrn.com/abstract=5434337

---

⏱️ TIMESTAMPS:
0:00 - Introduction: Entering the Modern New Dark Age of Science
1:50 - The Law of Restorable Defects: Why Cosmetic Rejections Mask Mind Theft
3:35 - Strategic Concept Theft Case Study: Wang et al. (2021) and the "$Z_M$" Footprint
5:45 - The Tyranny of Brainless Data-Reports: Why Journals Publish Safe Pseudo-Experiments
8:10 - Worse than the Inquisition: Galileo’s Trial vs. Modern Anonymous Backroom Censorship
10:15 - Conclusion: Breaking the Citation Syndicate loops to Support Slow Sciences

📧 COLLABORATION, INQUIRIES & DEBATES:
For direct academic disputes, electromagnetic boundary physics collaborations, or independent integrity verification, contact our desk:
➔ yueliusd@163.com

#AcademicIntegrity #ModernCensorship #YueLiu #IntellectualTheft #WavePhysics #ScienceAlchemy #PeerReviewCensorship #ScientificGatekeeping #ResearchEthics #PhilosophyOfScience #SSRN`;

  // PROJECT 4 TEXTS (The Privacy Illusion & Conflict of Interest - YouTube Video)
  const youtubeScriptText4 = `[SCENE 1: THE SHIELDS OF CORRUPTION | 第一幕：学术权贵与虚假的“隐私神像”]
[Visual: A heavy metal bank vault door with the words "PEER REVIEW - STRICTLY CONFIDENTIAL" embossed in gold leaf. The camera moves inside to reveal a group of faceless silhouettes in suits behind a desk. Digital stamps of "PRIVACY ACT" and "CONFIDENTIALITY" fly forward, stamping over glowing physical correction papers, turning them grey.]
[Sound: Heavy sound of a vault locking, followed by a dramatic, ominous synthesizer chord.]

[VOICEOVER]
"Who is privacy law actually designed to protect? 

In civilized society, privacy acts exist to shield vulnerable individuals from the crushing overreach of powerful institutions. But inside the secretive corridors of modern academic publishing, a grotesque inversion has occurred. 

编辑部、学术期刊和审稿人，正在以‘隐私法’和‘保密协议’为由，强行禁止学者公开错误的、甚至充满偏见与学术欺诈的审稿意见和退稿信。他们宣称，一旦公开，就‘损害了期刊的名誉’、‘侵犯了审稿人的声音’、‘破坏了同行评议制度的神圣声誉’。

This is an absolute fraud. They have weaponized privacy laws—which were meant to protect the weak—to build an impenetrable shield of immunity around the strong. They have turned a defensive human right into a corporate weapon of systemic censorship."


[SCENE 2: THE WEAK PARTY’S RIGHT TO JUSTICE | 第二幕：作者作为弱者，自愿剥离隐私保护的权利]
[Visual: An academic standing alone, holding a sheet of paper. As they try to show it to a public tribunal, hands from the shadows cover the paper, holding "NDA" and "Injunction" papers. Below them, a scale shows a massive commercial publishing house on one side, and a single young scientist on the other.]
[Sound: Fast mechanical clock ticking, growing louder with an urgent rhythmic pulse.]

[VOICEOVER]
"Let’s define the power dynamic in research. The journal is the corporate giant. The anonymous peer reviewer represents expert authority. The author is an individual—the weak party, often carrying zero administrative leverage.

同行评议的意见 and 决定，绝不是什么‘属于期刊独有’的秘密。它本质上是期刊向作者作出的、直接影响学者职业生涯、决定真理是否能够发表的‘裁判文书’。

When that decision is scientifically invalid, when it deliberately stalls an innovative discovery to protect an elite citation cartel, and when it actively damages the author’s fundamental interest—who is the victim? It is the author. 

If the victim of a bad decision holds the evidence of their own mistreatment, they have every ethical and physical right to disclose it. When the author voluntarily surrenders their own 'protection' of privacy and chooses to put their case under the public gaze, no journal has the moral or legal authority to force them silent.

而且，公布原本就公正合理的审稿意见，会损害期刊的声誉吗？绝不。如果审稿意见是公正、客观、理性的，期刊和审稿人不仅没有必要担心名誉受损，反而应当因其专业度而感到骄傲。

Anonymity was granted to reviewers to let them speak honest truth without fear. It was never meant to be a backroom license to commit intellectual robbery, enforce biased gatekeeping, and write scientifically illiterate reviews with absolute impunity. If a reviewer writes rubbish, exposing their words is not defamation; it is an academic audit."


[SCENE 3: THE PRETEXT OF INTEREST | 第三幕：“利益冲突”的伪善定义与防弹衣]
[Visual: A split screen. On the left: "Conflict of Interest" originally defined as a warning label over raw data. On the right: "Conflict of Interest" utilized as a giant concrete wall that blocks a paper titled "CORRECTIONS OF ERRORS IN HIGH-IMPACT PAPERS" from passing into the printer.]
[Sound: Sharp, metallic electronic clangs, symbolizing bureaucratic censorship.]

[VOICEOVER]
"If the weaponization of 'privacy' represents the shield, then the perversion of 'Conflict of Interest' has become the academic firewall.

‘利益冲突’（Conflict of Interest）初衷是为了保障透明度，提醒读者作者的观点是否可能受到商业资助、人际关系的偏见影响。然而，在现代学术出版商的手中，利益冲突被彻底工具化，成了阻挠发表学术纠错论文（Letter to the editor）的完美说辞。

In a cynical maneuver, journals claim that publishing critical rebuttals that point out severe physical fallacies in their *own* previously published papers creates an 'administrative and financial conflict of interest.' 

They argue that because correction letters challenge the correctness of their own 'brand' and undermine their editorial metrics, the journal lacks 'neutral interest' to host such debates. Thus, to evade reputational liability, they desk-reject critiques before peer reviewers can even lay eyes on the logical mathematics. 

This is the ultimate corporate playbook: hiding behind ethics to shield themselves from empirical refutation."


[SCENE 4: THE BARREN WASTELAND OF CORRECTION | 第四幕：九成论文属垃圾，纠错之声却归零]
[Visual: A digital conveyor belt pushing out piles of glossy, high-impact journal covers that dissolve into dust. Below them, a counter shows "95% of Published Papers Contain Fatal Errors or ZERO Conceptual Value". Next to it, a small drawer labeled "ERRATA & REBUTTAL LETTERS" is locked shut, covered in thick spider webs.]
[Sound: Low, resonant, tragic wind howling.]

[VOICEOVER]
"Go flip through any elite, high-impact materials science or biomedical journal today. What do you see? Thousands of pages of spectacular, polished data-reports, yet virtually *zero* errata, critical notes, or Letters to the Editor.

尽管像诺贝尔奖得主本庶佑（Tasuku Honjo）所警告的那样，顶尖CNS期刊上发表的观点有高达90%是错误或无法重现的，但在期刊的页面里，你几乎看不到任何公开的交锋与纠错。

Many journals have quietly written explicit rules into their submission guidelines stating they simply 'do not consider Letters to the Editor' or 'comments on published articles.' Others, while pretending to have open feedback systems, construct an invisible runaround of delay, endless formatting demands, and anonymous desk-rejection traps.

Why? Because the Article Processing Charge model depends on high volume and flawless public relations. 

To admit that a celebrated 50-year-old framework—like the microwave absorption impedance matching theory—is based on flawed electromagnetic boundary mathematics would invalidate thousands of papers they printed, disrupt the citation loops of their primary editorial board members, and threaten their impact factor currency. 

To protect the business, the editorial cartels choose to treat academic errors as private client secrets, maintaining their polished façade while printing synthetic waste."


[SCENE 4.5: THE COMPLICITY OF PREPRINT ARCHIVES | 第四点五幕：预印本平台的合谋与“名誉损害”挡箭牌]
[Visual: A digital server rack representing a famous preprint platform. Suddenly, a block labeled "ERRATUM LETTER TO HIGH-impact JOURNAL" is rejected by an automated filter. Text appears on screen: "REJECTED: Threat of reputational damage to original journal authors." A scale balancing 'Critical Feedback' and 'Reader Judgment' is locked in place, with a big red stamp "CENSORSHIP".]
[Sound: Buzzing signal error sound, followed by a tense, rhythmic bass sequence.]

[VOICEOVER]
"But the censorship doesn’t stop at the journals. In a shocking twist of institutional alignment, even preprint platforms—the very archives created to bypass journal gatekeepers—have joined this protective web.

许多预印本平台开始制定自我阉割的规定：声称由于‘名誉侵权和数据保护规章’，若没有在同行评审期刊上正式发表的纠错 letter，任何批评已发表文章的审校或纠错文章都不能作为预印本挂网。他们给出的理由是：这类批判文章可能会损害原始期刊作者的名誉。

This is an absolute logical absurdity. Pointing out physical and mathematical errors in a public, published journal article is a normal, fundamental academic debate. It belongs entirely to the healthy pursuit of raw physical truth—it has absolutely nothing to do with personal reputation or defamation.

当纠错 letters 和原始期刊文章同时公开可见时，大众科研工作者和读者完全有智慧、有专业标准，自行明辨是非与对错。对错本应在公开辩论中由科学界自行裁决，这根本不该是预印本平台应当越权干预或者瞎操心的事。

If the critic's arguments are scientifically wrong... they won't damage the original journal authors' reputation. Why? Because the readers will easily see they are wrong, exposing the critic's own scientific incompetence!

By using 'reputational protection' as a screen to lock out un-peer-reviewed critiques, preprint channels are paralyzing the only remaining public arena for scientific audit. They have chosen to protect the reputation of incorrect studies over the preservation of invariant physical reality."


[SCENE 5: DISMANTLING THE SECRET CABALS | 第五幕：学术公开化，夺回客观真理]
[Visual: Clear typography displaying Dr. Yue Liu's key preprints: "Balancing Transparency and Data Protection" (preprints.org Doi: 10.20944/preprints202508.1193.v3) and "Conflict of Interest in Academic Publishing" (SSRN: 5470606). Dynamic links animate forward, surrounded by high-contrast green indicators.]
[Sound: The music builds to a powerful, bright, inspiring symphonic climax.]

[VOICEOVER]
"Science is not a commercial trade-secret industry. It is a public, global hunt for raw physical truth, governed by invariant logical laws.

If peer review remains locked in dark backrooms, where anonymous reviewers write illiterate commands and journals hide their letters behind the shield of privacy, peer review is no longer a filter for quality. It is a syndicate of censorship.

We must force open these chambers. We must demand:
First, the absolute right of authors to publish all editorial correspondence, referee transcripts, and rejection logs on preprint servers.
Second, the mandatory peer review of all rebuttal Letters that present objective mathematical or physical challenges to previously published reports.

Go read Dr. Yue Liu's original critical investigations on SSRN and Preprints.org, free and linked in the description below. Let us stop treating our scientific heritage as corporate property. 

Let's shatter the golden silence, dismantle the secrets, and restore open, courageous, peer-reviewed logical truth.

Thank you for watching."`;

  const youtubeDescText4 = `The ultimate double standard of modern academic gatekeeping: under the guise of "privacy laws," elite journals forbid you from exposing their errors, while using "conflict of interest" excuses to blacklist any peer-reviewed corrections. Furthermore, preprint archives complicitly weaponize "reprehensible reputational damage" policies to silence critical Letters unless they are already accepted by journals, preventing scientific self-correction.

In this video, we deconstruct how the top-tier academic publishing industry has turned peer-review confidentiality into a corporate defense tool. We explore why authors—who are the weak individuals in this system—possess an absolute ethical right to publish biased and erroneous referee correspondence. We examine how publishers leverage "reputational conflict of interest" to outlaw Letters to the Editor, and how preprint portals shield established authorities from open physical and mathematical debate.

📖 DISCOVER DR. YUE LIU’S REVOLUTIONARY TREATISES ON ACADEMIC INTEGRITY:
1️⃣ The Editorial Transparency Treatise (Preprints.org):
➔ Balancing Transparency and Data Protection in Academic Publishing: The Case of Editorial Correspondence Disclosure on Preprint Servers
➔ DOI / Link: https://www.preprints.org/manuscript/202508.1193/v3

2️⃣ The Conflict of Interest & Accountability Study (SSRN Network):
➔ Conflict of Interest in Academic Publishing: A Question of Accountability in the Pursuit of Truth
➔ SSRN Link: https://ssrn.com/abstract=5470606 or http://dx.doi.org/10.2139/ssrn.5470606

---

⏱️ TIMESTAMPS:
0:00 - The Inversion of Privacy Law: Protecting Elites from Exposure
1:45 - The Author's Right to Disclose: Why "Confidentiality" Cannot Cover Bias
3:50 - The Reviewer Paradox: Integrity vs. Backroom Immunity 
5:40 - Weaponizing "Conflict of Interest" to Ban Erratum Letters
7:20 - Preprint Complicity: Banning Correction Papers Under the Guise of "Reputation Protection"
9:15 - The Golden Silence of Corporate Publishers (Wiley, Hindawi, CNS)
12:10 - Conclusion: Demanding Open Peer-Review & Transparent Correspondence

📧 CORRESPONDENCE, DISCUSSION, & ACADEMIC AUDITS:
For collaborations on electromagnetic wave mechanics or peer-review transparency studies, get in touch:
➔ yueliusd@163.com

#PeerReviewCrisis #TransparentScience #AcademicPrivacy #YueLiu #ScientificEthics #ConflictOfInterest #OpenScience #SSRN #AcademicCensorship #MetaScience #ResearchIntegrity`;

  // Select current active text
  const currentScript = 
    activeProject === "project1" ? youtubeScriptText : 
    activeProject === "project2" ? youtubeScriptText2 : 
    activeProject === "project3" ? youtubeScriptText3 : 
    youtubeScriptText4;

  const currentDesc = 
    activeProject === "project1" ? youtubeDescText : 
    activeProject === "project2" ? youtubeDescText2 : 
    activeProject === "project3" ? youtubeDescText3 : 
    youtubeDescText4;

  const copyToClipboard = (text: string, isScript: boolean) => {
    navigator.clipboard.writeText(text);
    if (isScript) {
      setCopiedScript(true);
      setTimeout(() => setCopiedScript(false), 2000);
    } else {
      setCopiedDesc(true);
      setTimeout(() => setCopiedDesc(false), 2000);
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-6 md:space-y-8 animate-fade-in" id="youtube-production-hub">
      
      {/* Editorial Header */}
      <div className="border-b border-gray-100 pb-5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-100 mb-2">
          <Youtube className="w-3.5 h-3.5 text-red-600 animate-pulse" /> YouTube Video Production Suite
        </span>
        <h2 className="text-xl font-bold text-gray-900 tracking-tight font-sans">
          YouTube Video Text & Metadata
        </h2>
        <p className="text-sm text-gray-500 mt-0.5 font-serif font-light">
          Ready-to-use production scripts and description templates designed to share Yue Liu’s academic findings on global video platforms. Use the toggle below to switch between videos.
        </p>
      </div>

      {/* Dual Video Project Swapping Toggle */}
      <div className="space-y-2">
        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
          Select Active Video Project / 选择当前视频策划
        </label>
        <div className="flex flex-col xl:flex-row gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => {
              setActiveProject("project1");
              setCopiedScript(false);
              setCopiedDesc(false);
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg font-sans text-xs font-bold uppercase transition tracking-wider cursor-pointer ${
              activeProject === "project1"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
            id="toggle-project1"
          >
            <PlaySquare className="w-4 h-4 shrink-0" />
            Project A: Asymmetry of Disbelief (学术纠错)
          </button>
          <button
            onClick={() => {
              setActiveProject("project2");
              setCopiedScript(false);
              setCopiedDesc(false);
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg font-sans text-xs font-bold uppercase transition tracking-wider cursor-pointer ${
              activeProject === "project2"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
            id="toggle-project2"
          >
            <Compass className="w-4 h-4 shrink-0" />
            Project B: Important Research? (重要研究)
          </button>
          <button
            onClick={() => {
              setActiveProject("project3");
              setCopiedScript(false);
              setCopiedDesc(false);
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg font-sans text-xs font-bold uppercase transition tracking-wider cursor-pointer ${
              activeProject === "project3"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-650 hover:bg-slate-100 hover:text-slate-950"
            }`}
            id="toggle-project3"
          >
            <ShieldX className="w-4 h-4 shrink-0 text-red-500 animate-pulse" />
            Project C: The New Dark Age (新黑夜时代)
          </button>
          <button
            onClick={() => {
              setActiveProject("project4");
              setCopiedScript(false);
              setCopiedDesc(false);
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg font-sans text-xs font-bold uppercase transition tracking-wider cursor-pointer ${
              activeProject === "project4"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-650 hover:bg-slate-100 hover:text-slate-950"
            }`}
            id="toggle-project4"
          >
            <ShieldAlert className="w-4.5 h-4.5 shrink-0 text-amber-500 animate-pulse" />
            Project D: Privacy & COI (审稿公开与利益冲突)
          </button>
        </div>
      </div>

      {/* Dynamic Editorial Quote / Teaser Card for Project B */}
      {activeProject === "project2" && (
        <div className="bg-amber-50/40 border border-amber-200/50 rounded-xl p-4.5 space-y-3">
          <div className="text-[10px] font-bold text-amber-800 uppercase tracking-widest font-mono">
            Core Epistemological Insight • 核心思辨要点
          </div>
          <p className="text-[12px] text-amber-900/90 leading-relaxed font-sans italic">
            "历史是最公正的。历史反复证明，那些在当世喧嚣尘上的往往是主流学者刻意炒作的糟粕，而那些被当世冷落或打压的经常是真金白银。通过严密的逻辑思辨挑战共识，其学术分量远超堆砌海量平庸实验的重复劳动。"
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase">
              Consensus ≠ Important (共识不等于重要)
            </span>
            <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase">
              No Small Matters (科学无小事)
            </span>
            <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase">
              Logic Trumps Data (逻辑思辨胜于海量实验)
            </span>
          </div>
        </div>
      )}

      {/* Dynamic Alarm Indictment Box for Project C */}
      {activeProject === "project3" && (
        <div className="bg-red-50/45 border border-red-200/50 rounded-xl p-4.5 space-y-3 animate-fade-in">
          <div className="text-[10px] font-bold text-red-800 uppercase tracking-widest font-mono">
            Severe Systemic Indictment • 核心批判
          </div>
          <p className="text-[12px] text-red-950/90 leading-relaxed font-serif italic">
            "当今学术界甚至连什么是重要的、可发表的文章都不再清楚。低创新度、无思想性的实验数据报告占领主流，而具有颠覆性创新的重大思想突破反因格式、AI写作残留或拼写错误等'可修复性瑕疵'被无情拒稿，沦为审稿人思想剽窃的猎物。当沉默取代公开辩论，这种绝对霸权的黑夜时代，与中世纪审判所并无二致。"
          </p>
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-[9px] font-bold">
            <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 uppercase">
              The New Dark Age (新黑夜时代)
            </span>
            <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 uppercase">
              Restorable Defects Law (可修复瑕疵法则)
            </span>
            <span className="px-1.5 py-0.5 rounded bg-red-100 text-red-800 uppercase">
              Concept Hijacking suspected ($Z_M$ variable footprint)
            </span>
          </div>
        </div>
      )}

      {/* Dynamic Editorial Quote / Teaser Card for Project B */}
      {activeProject === "project2" && (
        <div className="bg-amber-50/40 border border-amber-200/50 rounded-xl p-4.5 space-y-3">
          <div className="text-[10px] font-bold text-amber-800 uppercase tracking-widest font-mono">
            Core Epistemological Insight • 核心思辨要点
          </div>
          <p className="text-[12px] text-amber-900/90 leading-relaxed font-sans italic">
            "历史是最公正的。历史反复证明，那些在当世喧嚣尘上的往往是主流学者刻意炒作的糟粕，而那些被当世冷落或打压的经常是真金白银。通过严密的逻辑思辨挑战共识，其学术分量远超堆砌海量平庸实验的重复劳动。"
          </p>
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-[9px] font-bold">
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase">
              Consensus ≠ Important (共识不等于重要)
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase">
              No Small Matters (科学无小事)
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase">
              Logic Trumps Data (逻辑思辨胜于海量实验)
            </span>
          </div>
        </div>
      )}

      {/* Dynamic Alarm Indictment Box for Project C */}
      {activeProject === "project3" && (
        <div className="bg-red-50/45 border border-red-200/50 rounded-xl p-4.5 space-y-3 animate-fade-in">
          <div className="text-[10px] font-bold text-red-800 uppercase tracking-widest font-mono">
            Severe Systemic Indictment • 核心批判
          </div>
          <p className="text-[12px] text-red-950/90 leading-relaxed font-serif italic">
            "当今学术界甚至连什么是重要的、可发表的文章都不再清楚。低创新度、无思想性的实验数据报告占领主流，而具有颠覆性创新的重大思想突破反因格式、AI写作残留或拼写错误等'可修复性瑕疵'被无情拒稿，沦为审稿人思想剽窃的猎物。当沉默取代公开辩论，这种绝对霸权的黑夜时代，与中世纪审判所并无二致。"
          </p>
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-[9px] font-bold">
            <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 uppercase">
              The New Dark Age (新黑夜时代)
            </span>
            <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 uppercase">
              Restorable Defects Law (可修复瑕疵法则)
            </span>
            <span className="px-1.5 py-0.5 rounded bg-red-100 text-red-800 uppercase">
              Concept Hijacking suspected ($Z_M$ variable footprint)
            </span>
          </div>
        </div>
      )}

      {/* Dynamic Alarm Box for Project D */}
      {activeProject === "project4" && (
        <div className="bg-amber-50/45 border border-amber-200/50 rounded-xl p-4.5 space-y-3 animate-fade-in font-sans">
          <div className="text-[10px] font-bold text-amber-800 uppercase tracking-widest font-mono">
            Transparency & COI Shield Analysis • 审稿公开与利益冲突剖析
          </div>
          <p className="text-[12px] text-amber-955/90 leading-relaxed italic">
            "隐私法本来是在权力不对等等社会和法理机制中保护微观无权个人的，而在学术界，它却成为了期刊机构、权威审稿人遮掩学术荒唐、偏见和渎职的保密盾牌。当作者自愿选择承担或剥离这种对其自身的保护时，学术公开审理其审稿往来是一项天然权利。同时，本应预防观点的商业偏倚的‘利益冲突’已被期刊利益化——用来做借口，彻底把对自身以往发表错误进行客观物理纠正的 Letter to the Editor 拒之门外，制造了几乎不发表任何纠错意见的学术自保死地。"
          </p>
          <div className="flex flex-wrap gap-2 pt-1 text-[9px] font-bold font-mono">
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-850 uppercase">
              Bypassing Privacy Shields (破除隐私遮羞布)
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-850 uppercase">
              The Weak's Right to Disclose (弱者公开信披权)
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-900 text-white uppercase">
              Institutional COI Defense (利益冲突的制度化滥用)
            </span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left column: Video Script */}
        <div className="space-y-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0 lg:pr-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800 font-sans uppercase tracking-wider">
                <Video className="w-4 h-4 text-gray-550" />
                <span>Audio / Visual Production Script ({activeProject === "project1" ? "Project A" : activeProject === "project2" ? "Project B" : activeProject === "project3" ? "Project C" : "Project D"})</span>
              </div>
              <button
                onClick={() => copyToClipboard(currentScript, true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded border border-slate-200 transition duration-150-ease"
                id="copy-script-btn"
              >
                {copiedScript ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy Script (复制文本)
                  </>
                )}
              </button>
            </div>
            
            <p className="text-xs text-gray-400 font-sans">
              Narrative text optimized with visual directions [Visual] and sound clues [Sound] to bypass audience fatiguing in the first 10 seconds.
            </p>

            <div className="bg-slate-950 text-slate-100 p-4.5 rounded-xl max-h-[460px] overflow-y-auto font-mono text-[11.5px] leading-relaxed custom-scrollbar whitespace-pre-wrap border border-slate-800">
              {currentScript}
            </div>
          </div>
          
          <div className="pt-3">
            <div className="p-3 bg-red-50/50 rounded-lg border border-red-100 flex gap-2 text-xs text-red-900/85">
              <Headphones className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <p className="font-sans leading-normal">
                <strong>Narrative Style Key:</strong> Maintain an elegant, measured, objective cadence. Speak with continuous scientific logic. The severe gravity of Rutherford, Schrodinger, and Galileo's history carries the persuasive weight.
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Video Description Metadata */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800 font-sans uppercase tracking-wider">
                <MessageSquare className="w-4 h-4 text-gray-550" />
                <span>Video Description / Meta Templates</span>
              </div>
              <button
                onClick={() => copyToClipboard(currentDesc, false)}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 rounded border border-slate-200 transition duration-150-ease"
                id="copy-desc-btn"
              >
                {copiedDesc ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" /> Copy Description (复制介绍)
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-gray-400 font-sans">
              Pre-filled with correct academic links, SSRN authors index pointers, comprehensive Substack bibliography entries, and targeted hashtags.
            </p>

            <div className="bg-gray-50 border border-gray-150 p-4.5 rounded-xl max-h-[460px] overflow-y-auto font-mono text-[11.5px] leading-relaxed text-gray-700 custom-scrollbar whitespace-pre-wrap">
              {currentDesc}
            </div>
          </div>

          <div className="pt-3">
            <div className="p-3 bg-slate-900 text-white rounded-lg flex items-center justify-between gap-3 shadow-3xs">
              <div className="space-y-0.5">
                <span className="text-[9px] uppercase tracking-wider text-gray-400 font-mono">Reference verification</span>
                <p className="text-[11px] font-semibold font-sans text-gray-250">
                  Substack & SSRN Links are configured accurately
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
